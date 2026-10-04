import { jsx as s, jsxs as M, Fragment as pt } from "react/jsx-runtime";
import { forwardRef as st, useId as ot, isValidElement as qt, cloneElement as Xs, useState as q, useRef as oe, useCallback as B, useMemo as Oe, useContext as Pn, createContext as lr, useEffect as ve, Fragment as Zs, useLayoutEffect as Rs, useImperativeHandle as gs, Children as Wr } from "react";
function Kr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Kl = "_button_eyvws_1", Wl = "_filled_eyvws_36", Gl = "_flat_eyvws_55", Vl = "_outlined_eyvws_58", Yl = "_text_eyvws_63", Xl = "_loading_eyvws_506", Zl = "_spinner_eyvws_509", Jl = "_xs_eyvws_525", Ql = "_sm_eyvws_531", ea = "_md_eyvws_537", ta = "_lg_eyvws_543", na = "_xl_eyvws_549", ra = "_iconOnly_eyvws_555", sa = "_fullWidth_eyvws_585", Cn = {
  button: Kl,
  filled: Wl,
  flat: Gl,
  outlined: Vl,
  text: Yl,
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
  loading: Xl,
  spinner: Zl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: Jl,
  sm: Ql,
  md: ea,
  lg: ta,
  xl: na,
  iconOnly: ra,
  fullWidth: sa
};
function oa(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const an = st(
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
      ...b
    } = t;
    if (f === !1) return null;
    const m = oa(r, l), _ = m.style === "light" || m.style === "dark" ? null : Kr(i), p = [
      Cn.button,
      Cn[m.variant],
      Cn[`style-${m.style}`],
      _ ? Cn[_] : null,
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
    ] }), S = t.href;
    if (S != null) {
      const { onClick: N, ...E } = b, C = x || c;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: S,
          className: p,
          "aria-disabled": C || void 0,
          "aria-busy": c || void 0,
          onClick: (A) => {
            if (C) {
              A.preventDefault();
              return;
            }
            N?.(A);
          },
          ...E,
          children: y
        }
      );
    }
    const { type: v = "button", ...$ } = b;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: v,
        className: p,
        disabled: x || c,
        "aria-busy": c || void 0,
        ...$,
        children: y
      }
    );
  }
), la = "_card_4vcae_1", aa = "_elevated_4vcae_8", ia = "_filled_4vcae_13", ca = "_outlined_4vcae_18", da = "_interactive_4vcae_22", ua = "_text_4vcae_30", fa = "_header_4vcae_46", _a = "_body_4vcae_53", pa = "_footer_4vcae_63", wr = {
  card: la,
  elevated: aa,
  filled: ia,
  outlined: ca,
  interactive: da,
  text: ua,
  header: fa,
  body: _a,
  footer: pa
}, XN = st(function({
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
        className: [wr.card, wr[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: wr.header, children: n }),
          /* @__PURE__ */ s("div", { className: wr.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: wr.footer, children: r })
        ]
      }
    )
  );
});
function ul(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const ma = "_badge_1fy6d_1", ha = "_xs_1fy6d_21", ga = "_sm_1fy6d_26", ba = "_md_1fy6d_31", ya = "_lg_1fy6d_36", xa = "_xl_1fy6d_41", va = "_neutral_1fy6d_47", wa = "_primary_1fy6d_52", ka = "_secondary_1fy6d_61", Na = "_light_1fy6d_66", Sa = "_base_1fy6d_71", Oa = "_dark_1fy6d_76", $a = "_info_1fy6d_81", Ea = "_success_1fy6d_86", Ta = "_warning_1fy6d_95", Ca = "_danger_1fy6d_104", Aa = "_filled_1fy6d_111", Da = "_outlined_1fy6d_161", Ma = "_text_1fy6d_213", kr = {
  badge: ma,
  xs: ha,
  sm: ga,
  md: ba,
  lg: ya,
  xl: xa,
  neutral: va,
  primary: wa,
  secondary: ka,
  light: Na,
  base: Sa,
  dark: Oa,
  info: $a,
  success: Ea,
  warning: Ta,
  danger: Ca,
  filled: Aa,
  outlined: Da,
  text: Ma,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, ZN = st(function({
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
  const f = t, u = ul(n, "filled"), x = Kr(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: [
        kr.badge,
        kr[l],
        kr[f],
        kr[u],
        x ? kr[x] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Ia = "_icon_vn4jx_5", za = "_xs_vn4jx_24", La = "_sm_vn4jx_28", Ra = "_md_vn4jx_23", Pa = "_lg_vn4jx_36", ja = "_xl_vn4jx_40", fo = {
  icon: Ia,
  xs: za,
  sm: La,
  md: Ra,
  lg: Pa,
  xl: ja
}, JN = [
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
      className: [fo.icon, a ? fo[n] : null, l].filter(Boolean).join(" "),
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
}), Ba = "_stat_sjin9_1", Fa = "_label_sjin9_8", Ha = "_row_sjin9_16", Ua = "_value_sjin9_22", qa = "_delta_sjin9_28", Ka = "_success_sjin9_33", Wa = "_danger_sjin9_37", Ga = "_neutral_sjin9_41", Va = "_hint_sjin9_45", Yn = {
  stat: Ba,
  label: Fa,
  row: Ha,
  value: Ua,
  delta: qa,
  success: Ka,
  danger: Wa,
  neutral: Ga,
  hint: Va
}, QN = st(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...o }, a) {
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
}), Ya = "_wrap_ipozk_1", Xa = "_table_ipozk_8", Za = "_caption_ipozk_14", Ja = "_none_ipozk_51", Qa = "_horizontal_ipozk_57", ei = "_vertical_ipozk_67", ti = "_alternating_ipozk_85", ni = "_start_ipozk_89", ri = "_center_ipozk_93", si = "_end_ipozk_97", oi = "_empty_ipozk_101", Bn = {
  wrap: Ya,
  table: Xa,
  caption: Za,
  none: Ja,
  horizontal: Qa,
  vertical: ei,
  alternating: ti,
  start: ni,
  center: ri,
  end: si,
  empty: oi
};
function eS({
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
const li = "_emptyState_1swxw_1", ai = "_icon_1swxw_13", ii = "_title_1swxw_18", ci = "_description_1swxw_24", di = "_action_1swxw_30", Nr = {
  emptyState: li,
  icon: ai,
  title: ii,
  description: ci,
  action: di
};
function tS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [Nr.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Nr.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Nr.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Nr.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Nr.action, children: r })
  ] });
}
const ui = "_field_149oz_1", fi = "_label_149oz_8", _i = "_required_149oz_14", pi = "_hint_149oz_19", mi = "_error_149oz_24", Sr = {
  field: ui,
  label: fi,
  required: _i,
  hint: pi,
  error: mi
};
function sr({
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
  const h = i != null ? u : c != null ? x : null, b = typeof d == "function" ? d({ inputId: f, hintId: x, errorId: u }) : d, m = qt(b) && typeof b.props.id == "string" ? b.props.id : void 0, g = m ?? t ?? f, _ = qt(b) && (h != null || m == null && typeof b.type == "string"), p = m != null || t != null || _, y = _ && qt(b) ? Xs(b, {
    id: g,
    "aria-describedby": h != null ? [
      b.props["aria-describedby"],
      h
    ].filter((S) => typeof S == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ M("div", { className: [Sr.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: Sr.label,
        htmlFor: p ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: Sr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    i != null ? /* @__PURE__ */ s("div", { id: u, className: Sr.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ s("div", { id: x, className: Sr.hint, children: c }) : null
  ] });
}
const hi = "_formfield_6e25e_1", gi = "_content_6e25e_8", bi = "_floating_6e25e_43", yi = "_label_6e25e_111", xi = "_start_6e25e_132", vi = "_required_6e25e_169", wi = "_end_6e25e_175", ki = "_filled_6e25e_192", Ni = "_flat_6e25e_199", Si = "_helper_6e25e_206", Oi = "_invalid_6e25e_211", kn = {
  formfield: hi,
  content: gi,
  floating: bi,
  label: yi,
  start: xi,
  required: vi,
  end: wi,
  filled: ki,
  flat: Ni,
  helper: Si,
  invalid: Oi
};
function nS({
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
  const b = l ?? x, m = typeof c == "function" ? c({
    inputId: b
  }) : c, g = qt(m) ? m.type : null, _ = typeof g == "string", p = qt(m) && typeof g != "symbol", y = qt(m) ? m.props : null, S = typeof y?.id == "string" ? y.id : void 0, v = _ && qt(m) ? m.type.toLowerCase() : null, $ = v != null && (v === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), N = p && (r != null || o || S == null && $), E = S != null || l != null || N, C = v === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, A = v === "textarea" || v === "input" && (C == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(C)), D = N && qt(m) ? Xs(
    m,
    {
      id: S ?? b,
      ...i && A && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          h
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, I = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: kn.label,
      htmlFor: E ? S ?? b : void 0,
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
const $i = "_fieldset_8x01p_1", Ei = "_legend_8x01p_11", Ti = "_legendText_8x01p_20", Ci = "_toggle_8x01p_24", Ai = "_content_8x01p_45", Di = "_summary_8x01p_49", Xn = {
  fieldset: $i,
  legend: Ei,
  legendText: Ti,
  toggle: Ci,
  content: Ai,
  summary: Di
};
function rS({
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
  children: b,
  className: m,
  visible: g = !0
}) {
  const _ = ot(), [p, y] = q(d);
  if (g === !1) return null;
  const S = i ?? p, v = l ? `${_}-content` : void 0, $ = () => {
    const I = !S;
    i === void 0 && y(I), I ? h?.() : x?.();
  }, N = l || e != null || n != null || t != null, E = l ? S : !1, C = l && S && o != null, A = E ? a ?? "Expand" : c ?? "Collapse", D = E ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [Xn.fieldset, m].filter(Boolean).join(" "),
      children: [
        N ? /* @__PURE__ */ s("legend", { className: Xn.legend, children: l ? /* @__PURE__ */ M(pt, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Xn.toggle,
              title: A,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !E,
              "aria-controls": v,
              onClick: $,
              children: [
                /* @__PURE__ */ s(
                  Me,
                  {
                    icon: E ? "add" : "remove",
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
            hidden: E,
            children: b
          }
        ),
        C ? /* @__PURE__ */ s("div", { className: Xn.summary, children: o }) : null
      ]
    }
  );
}
const Mi = "_form_abp5n_1", Ii = {
  form: Mi
}, fl = lr(null);
function zi() {
  const e = Pn(fl);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function sS({
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
      (S) => S[y.name] === y ? S : { ...S, [y.name]: y }
    );
  }, []), h = B((y) => {
    a((S) => {
      if (!(y in S)) return S;
      const v = { ...S };
      return delete v[y], v;
    });
  }, []), b = B(() => {
    const y = {};
    for (const S of Object.values(u.current)) {
      const v = S.validate();
      v.length > 0 && (y[S.name] = v);
    }
    return y;
  }, []), m = B(() => {
    const y = b();
    f((S) => S + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [b, e, t, n]), g = (y) => {
    r != null && l != null || (y.preventDefault(), m());
  }, _ = Oe(
    () => ({ registerField: x, unregisterField: h, submit: m, submitCount: c }),
    [x, h, m, c]
  ), p = [Ii.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(fl.Provider, { value: _, children: /* @__PURE__ */ s(
    "form",
    {
      className: p,
      onSubmit: g,
      action: r,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const ar = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", oS = (e = "Required") => (t) => ar(t) ? e : null, lS = (e = "Invalid email") => (t) => ar(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, aS = (e, t = "Invalid format") => (n) => ar(n) || e.test(String(n)) ? null : t, iS = (e, t = `Minimum ${e} characters`) => (n) => ar(n) || String(n).length >= e ? null : t, cS = (e, t = `Maximum ${e} characters`) => (n) => ar(n) || String(n).length <= e ? null : t, dS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ar(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, uS = (e, t = "Values do not match") => (n, r) => {
  if (ar(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, fS = (e = "Required") => (t) => t === !0 ? null : e, _S = (e) => (t, n) => e(t, n);
function Li(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function pS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = zi(), [i, d] = q(t?.initialValue), [o, a] = q(!1), [c, f] = q(!1), u = oe(() => []);
  u.current = () => Li(t?.validate ?? [], i), ve(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ve(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const x = o && !c ? u.current() : [];
  return { value: i, setValue: (b) => {
    d(b), f(!0);
  }, errors: x };
}
const Ri = "_select_1xe98_1", Pi = "_invalid_1xe98_33", ji = "_xs_1xe98_40", Bi = "_sm_1xe98_48", Fi = "_md_1xe98_56", Hi = "_lg_1xe98_62", Ui = "_xl_1xe98_68", Ss = {
  select: Ri,
  invalid: Pi,
  xs: ji,
  sm: Bi,
  md: Fi,
  lg: Hi,
  xl: Ui
}, or = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          Ss.select,
          Ss[t],
          n ? Ss.invalid : null,
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
), _l = [
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
}, qi = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Ki(e) {
  return qi.includes(e);
}
function fs(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function _o(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Fr(e, t) {
  const n = _o(e), r = _o(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function bs(e) {
  if (e.secondOperator == null) return !1;
  if (Ki(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function po(e, t, n) {
  const r = fs(t, e.property), l = mo(
    r,
    e.value,
    e.operator,
    n
  );
  if (!bs(e)) return l;
  const i = mo(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function mo(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), o = i(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => i(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => i(a) === o));
    case "LessThan":
      return Fr(d, o) < 0;
    case "LessThanOrEquals":
      return Fr(d, o) <= 0;
    case "GreaterThan":
      return Fr(d, o) > 0;
    case "GreaterThanOrEquals":
      return Fr(d, o) >= 0;
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
function Js(e) {
  return "filters" in e;
}
function pl(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Js(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => pl(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", po(t, e, l);
}
function ml(e, t, n = {}) {
  return e.filter((r) => pl(r, t, n));
}
function Wi(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${Wi(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function Gi(e) {
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
  if (!bs(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function Vi(e) {
  return Js(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Vi).filter(Boolean).join(` ${e.operator} `)})` : Gi(e);
}
function Yi(e) {
  return e.replace(/'/g, "''");
}
const Xi = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Zi(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${Yi(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", x = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${Xi[c]} ${u && r ? l(i(f)) : i(f)}`;
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
  if (!bs(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function Ji(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Js(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Ji(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Zi(e, n);
}
function Qi(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = Fr(
        fs(n, l.property),
        fs(r, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const ec = "_filter_1dvqt_1", tc = "_rows_1dvqt_9", nc = "_row_1dvqt_9", rc = "_join_1dvqt_21", sc = "_property_1dvqt_30", oc = "_operator_1dvqt_34", lc = "_value_1dvqt_38", ac = "_remove_1dvqt_42", ic = "_bar_1dvqt_58", cc = "_add_1dvqt_64", dc = "_custom_1dvqt_78", uc = "_summary_1dvqt_82", fc = "_second_1dvqt_87", _c = "_secondAdd_1dvqt_91", pc = "_addSecond_1dvqt_95", mc = "_joinSelect_1dvqt_109", ht = {
  filter: ec,
  rows: tc,
  row: nc,
  join: rc,
  property: sc,
  operator: oc,
  value: lc,
  remove: ac,
  bar: ic,
  add: cc,
  custom: dc,
  summary: uc,
  second: fc,
  secondAdd: _c,
  addSecond: pc,
  joinSelect: mc
}, $r = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], ho = {
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
function go({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(pt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      or,
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
      or,
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
function mS({
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
    () => r != null && r.length > 0 ? r.map((_, p) => ({ id: p, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Or[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (_, p) => {
    f(
      (y) => y.map((S) => S.id === _ ? { ...S, ...p } : S)
    );
  }, x = () => {
    const _ = c[c.length - 1], p = Math.max(0, ...c.map((S) => S.id)) + 1, y = e[0];
    f((S) => [
      ...S,
      {
        id: p,
        property: _?.property ?? y?.name ?? "",
        operator: Or[e.find(
          (v) => v.name === (_?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (_) => {
    f(
      (p) => p.length > 1 ? p.filter((y) => y.id !== _) : p
    );
  }, b = Oe(() => {
    const _ = [];
    for (const p of c) {
      if (p.property === "" || (p.value == null || p.value === "") && !$r.includes(p.operator)) continue;
      const S = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: v } = p;
      v != null && bs(p) && (S.secondOperator = v, S.secondValue = p.secondValue, S.logicalOperator = p.logicalOperator ?? "And"), _.push(S);
    }
    return _;
  }, [c]), m = Oe(() => o == null || b.length === 0 ? o : ml(o, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [o, b, t, n]);
  ve(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const g = (_) => e.find((p) => p.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ M("div", { className: [ht.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: ht.rows, role: "group", "aria-label": "Filter conditions", children: c.map((_, p) => {
      const y = g(_.property), S = l ? [Or[y.type ?? "string"]] : _l, v = !$r.includes(_.operator), $ = _.secondOperator != null;
      return /* @__PURE__ */ M(Zs, { children: [
        /* @__PURE__ */ M("div", { className: ht.row, children: [
          p > 0 ? /* @__PURE__ */ s("span", { className: ht.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            or,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: ht.property,
              value: _.property,
              onChange: (N) => {
                const E = e.find(
                  (C) => C.name === N.target.value
                );
                u(_.id, {
                  property: N.target.value,
                  operator: Or[E?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((N) => ({
                value: N.name,
                label: N.title ?? N.name
              }))
            }
          ),
          /* @__PURE__ */ s(
            or,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: ht.operator,
              value: _.operator,
              onChange: (N) => {
                const E = N.target.value;
                u(
                  _.id,
                  $r.includes(E) ? {
                    operator: E,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: E }
                );
              },
              options: S.map((N) => ({
                value: N,
                label: ho[N]
              }))
            }
          ),
          v ? /* @__PURE__ */ s(
            go,
            {
              property: y,
              value: _.value,
              onChange: (N) => u(_.id, { value: N })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: ht.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => h(_.id),
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
                or,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: ht.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (N) => u(_.id, {
                    logicalOperator: N.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                or,
                {
                  "aria-label": `Condition ${p + 1} second operator`,
                  className: ht.operator,
                  value: _.secondOperator,
                  onChange: (N) => {
                    const E = N.target.value;
                    u(
                      _.id,
                      $r.includes(E) ? { secondOperator: E, secondValue: void 0 } : { secondOperator: E }
                    );
                  },
                  options: S.map((N) => ({
                    value: N,
                    label: ho[N]
                  }))
                }
              ),
              _.secondOperator == null || !$r.includes(_.secondOperator) ? /* @__PURE__ */ s(
                go,
                {
                  property: y,
                  value: _.secondValue,
                  onChange: (N) => u(_.id, { secondValue: N })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: ht.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => u(_.id, {
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
            onClick: () => u(_.id, {
              secondOperator: Or[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
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
const hc = "_pager_1du31_1", gc = "_alignLeft_1du31_10", bc = "_alignCenter_1du31_14", yc = "_alignRight_1du31_18", xc = "_alignJustify_1du31_22", vc = "_summary_1du31_26", wc = "_controls_1du31_31", kc = "_button_1du31_37", Nc = "_active_1du31_73", Sc = "_ellipsis_1du31_85", Oc = "_size_1du31_91", Ft = {
  pager: hc,
  alignLeft: gc,
  alignCenter: bc,
  alignRight: yc,
  alignJustify: xc,
  summary: vc,
  controls: wc,
  button: kc,
  active: Nc,
  ellipsis: Sc,
  size: Oc
};
function $c(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function bo(e, t) {
  return e.replace("{0}", String(t));
}
function Ec(e, t, n) {
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
function Tc({
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
  prevPageTitle: b = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: y,
  onPageSizeChange: S,
  ariaLabel: v = "Pagination",
  className: $,
  visible: N = !0
}) {
  const E = n ?? r, [C, A] = q(E), D = n !== void 0, I = D ? E : C, w = Math.max(1, Math.ceil(e / t)), O = Math.min(Math.max(1, I), w), T = a ?? !0, P = d || w > 1, L = Ec(O, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      D || A(we);
      const le = (we - 1) * t;
      y?.({
        page: we,
        skip: le,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [D, y, w, t]
  ), F = o === "center" ? Ft.alignCenter : o === "right" ? Ft.alignRight : o === "justify" ? Ft.alignJustify : Ft.alignLeft, X = {
    count: e,
    pageNumber: O,
    pageSize: t,
    pageCount: w
  }, ie = (te) => {
    const we = Array.from(
      te.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), le = we.indexOf(document.activeElement);
    le !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[le + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[le - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return N === !1 || !P ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [Ft.pager, F, $].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        T && /* @__PURE__ */ s("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : $c(f, O, w, e) }),
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
                  "aria-label": b,
                  title: b,
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
                    "aria-label": bo(p, te),
                    title: bo(_, te),
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
                  disabled: O >= w,
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
                  disabled: O >= w,
                  onClick: () => j(w),
                  "aria-label": g,
                  title: g,
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
              onChange: (te) => S?.(Number(te.target.value)),
              "aria-label": x,
              children: l.map((te) => /* @__PURE__ */ s("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function Ps(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ s(
    Tc,
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
const hl = "";
function Cc(e, t, n, r, l) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const i = (o) => n.find((a) => a.property === o), d = (o, a, c) => {
    const f = t[a];
    if (f === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const u = i(f), x = /* @__PURE__ */ new Map(), h = [];
    o.forEach((m) => {
      const g = String(l(m, f) ?? ""), _ = x.get(g);
      _ ? _.push(m) : (x.set(g, [m]), h.push(g));
    });
    const b = [];
    return h.forEach((m) => {
      const g = x.get(m), _ = [...c, m].join(hl), p = g[0], y = p !== void 0 ? l(p, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: _,
          display: _s(y, u?.format),
          property: f,
          title: u?.title ?? f,
          count: g.length,
          level: a
        }
      }), r.has(_) && b.push(...d(g, a + 1, [...c, m]));
    }), b;
  };
  return d(e, 0, []);
}
function yo(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, o) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const x = String(n(u, a) ?? ""), h = c.get(x);
      h ? h.push(u) : (c.set(x, [u]), f.push(x));
    }), f.forEach((u) => {
      const x = [...o, u].join(hl);
      r.add(x), l(c.get(u), d + 1, [...o, u]);
    });
  };
  return l(e, 0, []), r;
}
function Zr(e, t) {
  return e.property ?? `col-${t}`;
}
function Ac(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Dc(e, t) {
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
    return fs(e, t);
}
function _s(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const xo = [
  "Ascending",
  "Descending",
  null
];
function Mc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = xo[(r ? xo.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Ic(e, t) {
  return Qi(e, t);
}
function zc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Lc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: Dc(
        a.value,
        n.types?.[o] ?? "string"
      )
    })
  ), l = r.length > 0 ? ml(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Ic(l, t.sorts);
  return {
    ...zc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function vo(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Rc(e, t, n) {
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
function Pc(e, t, n = nr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(_s(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const jc = "_grid_13rur_1", Bc = "_toolbar_13rur_8", Fc = "_picker_13rur_13", Hc = "_pickerButton_13rur_17", Uc = "_pickerPanel_13rur_31", qc = "_pickerItem_13rur_46", Kc = "_groupPanel_13rur_55", Wc = "_groupPanelActive_13rur_66", Gc = "_groupPanelText_13rur_70", Vc = "_groupChip_13rur_74", Yc = "_groupRemove_13rur_85", Xc = "_groupRow_13rur_94", Zc = "_groupCell_13rur_98", Jc = "_groupToggle_13rur_104", Qc = "_editRow_13rur_117", ed = "_editCell_13rur_121", td = "_editInput_13rur_127", nd = "_commandCell_13rur_137", rd = "_commandButton_13rur_144", sd = "_data_13rur_159", od = "_table_13rur_166", ld = "_header_13rur_172", ad = "_center_13rur_185", id = "_right_13rur_189", cd = "_sortButton_13rur_193", dd = "_sortIndicator_13rur_211", ud = "_sortIndex_13rur_215", fd = "_cell_13rur_226", _d = "_clickable_13rur_241", pd = "_frozen_13rur_249", md = "_selected_13rur_255", hd = "_resizeHandle_13rur_263", gd = "_filterCell_13rur_281", bd = "_filterSelect_13rur_290", yd = "_filterInput_13rur_300", xd = "_empty_13rur_311", vd = "_loading_13rur_317", wd = "_visuallyHidden_13rur_331", kd = "_virtualScroller_13rur_340", Nd = "_spacerRow_13rur_345", Sd = "_footerRow_13rur_350", Od = "_footerCell_13rur_354", $d = "_footerValue_13rur_361", Se = {
  grid: jc,
  toolbar: Bc,
  picker: Fc,
  pickerButton: Hc,
  pickerPanel: Uc,
  pickerItem: qc,
  groupPanel: Kc,
  groupPanelActive: Wc,
  groupPanelText: Gc,
  groupChip: Vc,
  groupRemove: Yc,
  groupRow: Xc,
  groupCell: Zc,
  groupToggle: Jc,
  editRow: Qc,
  editCell: ed,
  editInput: td,
  commandCell: nd,
  commandButton: rd,
  data: sd,
  table: od,
  header: ld,
  center: ad,
  right: id,
  sortButton: cd,
  sortIndicator: dd,
  sortIndex: ud,
  cell: fd,
  clickable: _d,
  frozen: pd,
  selected: md,
  resizeHandle: hd,
  filterCell: gd,
  filterSelect: bd,
  filterInput: yd,
  empty: xd,
  loading: vd,
  visuallyHidden: wd,
  virtualScroller: kd,
  spacerRow: Nd,
  footerRow: Sd,
  footerCell: Od,
  footerValue: $d
}, Ed = {
  Ascending: "ascending",
  Descending: "descending"
};
function wo(e, t) {
  return e.filterable ?? t;
}
function Td(e, t) {
  return e.sortable ?? t;
}
function Cd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function hS({
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
  showPagingSummary: b = !0,
  showPageSizeSelector: m = !0,
  selectionMode: g = "None",
  selectedKeys: _,
  onSelectionChange: p,
  showColumnPicker: y = !1,
  columnPickerText: S = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: N = !1,
  groupPanelText: E = "Drag a column header here to group",
  groupExpanded: C = !0,
  aggregates: A,
  showExportButton: D = !1,
  exportFileName: I = "grid-data",
  serverMode: w = !1,
  totalCount: O,
  onRangeChange: T,
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
    () => e.map((H, U) => Zr(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? Zr(H, U) : "").filter(Boolean)
    )
  ), [yt, Z] = q({}), [z, Y] = q(!1), [Q, ge] = q([]), [ae, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, re] = q(0), [Le, Nt] = q(j), Rt = oe(null), xt = oe(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, be) => H.set(Zr(U, be), U)), H;
  }, [e]), Ke = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => Ac(Ke, yt),
    [Ke, yt]
  ), $t = F !== "None" || we != null || X, at = Oe(() => {
    if (w) {
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
    return Lc(
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
    w,
    O,
    c
  ]), V = oe(T);
  ve(() => {
    V.current = T;
  });
  const me = Oe(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? vo(
        e.find((be) => be.property === H)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [G, e]
  );
  ve(() => {
    !w || V.current == null || V.current({
      start: (ne - 1) * fe,
      count: fe,
      pageNumber: ne,
      pageSize: fe,
      sorts: pe,
      filters: me,
      logicalOperator: a
    });
  }, [
    w,
    ne,
    fe,
    pe,
    me,
    a
  ]);
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => ae || (C ? yo(at.items, Q, nr) : /* @__PURE__ */ new Set()), [ae, C, at.items, Q]), Pt = Oe(
    () => Cc(at.items, Q, e, Ye, nr),
    [at.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? Ke.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : Ke,
    [Ke, Q, Ve]
  ), K = (H) => {
    H !== "" && De(Mc(pe, H, { multi: l }));
  }, ee = (H, U) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(H, U), xe;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (g === "None") return;
    const U = n(H), be = _ ?? [];
    let xe;
    g === "Single" ? xe = be.length === 1 && be[0] === U ? [] : [U] : xe = be.includes(U) ? be.filter((et) => et !== U) : [...be, U], p?.(xe);
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
    if (xt.current = null, !H || !N) return;
    const be = Ie.get(H)?.property;
    be && (ge(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Ee(null));
  }, ze = (H) => {
    ge((U) => U.filter((be) => be !== H)), Ee(null);
  }, Tt = (H) => {
    Ee((U) => {
      const be = U ?? (C ? yo(at.items, Q, nr) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(H) ? xe.delete(H) : xe.add(H), xe;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((be) => {
      be.property && (U[be.property] = nr(H, be.property));
    }), nt(U), Ze(String(n(H)));
  }, pn = () => {
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
  }, wn = c && (h === "Top" || h === "TopAndBottom"), Gr = c && (h === "Bottom" || h === "TopAndBottom"), ys = d && e.some((H) => wo(H, d)), xs = (H, U, be) => H.render ? H.render(U, { index: 0 }) : _s(nr(U, H.property), H.format), vs = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, mn = w ? t : at.filtered, Vr = () => {
    const H = Pc(
      mn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(U), xe = document.createElement("a");
    xe.href = be, xe.download = `${I}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, hn = Pt.length, jt = Oe(() => {
    if (!P || hn === 0)
      return { start: 0, end: hn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / L) - H
    ), be = Math.ceil(Le / L) + H * 2, xe = Math.min(hn, U + be), et = U * L, Dt = Math.max(0, (hn - xe) * L);
    return { start: U, end: xe, top: et, bottom: Dt };
  }, [P, hn, Xt, L, Le]), vr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [Se.grid, he].filter(Boolean).join(" "), children: [
    wn && /* @__PURE__ */ s(
      Ps,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: b,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${Gr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (N || X || y || D) && /* @__PURE__ */ M("div", { className: Se.toolbar, children: [
      N && /* @__PURE__ */ s(
        "div",
        {
          className: [
            Se.groupPanel,
            Q.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: N ? (H) => H.preventDefault() : void 0,
          onDrop: N ? mt : void 0,
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
          }) : /* @__PURE__ */ s("span", { className: Se.groupPanelText, children: E })
        }
      ),
      X && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: pn,
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
            children: S
          }
        ),
        z && /* @__PURE__ */ s(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": S,
            children: e.map((H, U) => {
              const be = Zr(H, U);
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
          onClick: Vr,
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
              "aria-rowcount": (P ? hn : at.total) + 1,
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
                      const be = Td(U, r), xe = pe.find((wt) => wt.property === U.property), et = xe ? pe.indexOf(xe) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": be && xe ? Ed[xe.sortOrder] : "none",
                          className: [
                            Se.header,
                            Dt === "center" ? Se.center : "",
                            Dt === "right" ? Se.right : "",
                            U.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: $ || N || void 0,
                          onDragStart: $ || N ? (wt) => {
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
                                  const gn = yt[H] ?? U.width, Ct = gn ? parseFloat(gn) : 96;
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
                  ys && /* @__PURE__ */ s("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!wo(U, d))
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
                          value: be?.operator ?? vo(U.type ?? "string"),
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: _l.filter((xe) => xe !== "Custom").map(
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
                      colSpan: vr,
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
                          children: /* @__PURE__ */ s("td", { colSpan: vr, className: Se.groupCell, children: /* @__PURE__ */ M(
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
                    const et = H.row, Dt = n(et), wt = (_ ?? []).includes(Dt), gn = je != null && je === String(Dt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          ue || g !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          gn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": g !== "None" ? wt : void 0,
                        onClick: ue || g !== "None" ? (Ct) => {
                          Cd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: vs(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: gn && gt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((ws) => ({
                                    ...ws,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : xs(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ s("td", { className: Se.commandCell, children: gn ? /* @__PURE__ */ M(pt, { children: [
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
                      colSpan: vr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                A && A.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ M("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const be = A.filter(
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
                              _s(
                                Rc(mn, xe, nr),
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
    Gr && /* @__PURE__ */ s(
      Ps,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: b,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const Ad = "_wrap_avqds_1", Dd = "_grid_avqds_7", Md = "_stacked_avqds_13", Id = "_item_avqds_19", zd = "_empty_avqds_25", Er = {
  wrap: Ad,
  grid: Dd,
  stacked: Md,
  item: Id,
  empty: zd
};
function gS({
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
  const [x, h] = q(1), [b, m] = q(t), g = e.length, _ = Math.max(1, Math.ceil(g / b)), p = Math.min(Math.max(1, x), _), y = Oe(() => {
    const v = (p - 1) * b;
    return e.slice(v, v + b);
  }, [e, p, b]), S = r ? Er.grid : Er.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Er.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && o != null ? o : g === 0 ? d ?? /* @__PURE__ */ s("div", { className: Er.empty, children: i }) : /* @__PURE__ */ s("div", { className: S, children: y.map((v, $) => /* @__PURE__ */ s("div", { className: Er.item, children: l ? l(v, $) : String(v) }, $)) }),
        /* @__PURE__ */ s(
          Ps,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: p,
            pageSize: b,
            count: g,
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
const Ld = "_label_1qfpw_1", Rd = {
  label: Ld
}, bS = st(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: l,
      className: [Rd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Pd = "_textbox_oly89_1", jd = "_invalid_oly89_37", Bd = "_xs_oly89_44", Fd = "_sm_oly89_50", Hd = "_md_oly89_56", Ud = "_lg_oly89_62", qd = "_xl_oly89_68", Os = {
  textbox: Pd,
  invalid: jd,
  xs: Bd,
  sm: Fd,
  md: Hd,
  lg: Ud,
  xl: qd
}, Qs = st(
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
          Os.textbox,
          Os[t],
          n ? Os.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Jr = Qs, Kd = "_checkbox_1bb6c_1", Wd = {
  checkbox: Kd
}, Gd = st(
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
        className: [Wd.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), Vd = {
  switch: "_switch_19gf1_1"
}, yS = st(function({ className: t, ...n }, r) {
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
      className: [Vd.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (o) => {
        n.checked === void 0 && i(o.target.checked), n.onChange?.(o);
      }
    }
  );
}), Yd = "_trigger_1jlxf_1", Xd = "_tooltip_1jlxf_7", Zd = "_top_1jlxf_34", Jd = "_right_1jlxf_40", Qd = "_bottom_1jlxf_46", eu = "_left_1jlxf_52", tu = "_arrow_1jlxf_58", nu = "_floating_1jlxf_70", Fn = {
  trigger: Yd,
  tooltip: Xd,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: Zd,
  right: Jd,
  bottom: Qd,
  left: eu,
  arrow: tu,
  floating: nu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, Qr = 8;
function ru(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + Qr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - Qr,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + Qr,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - Qr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function xS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const o = ot(), a = oe(null), c = oe(null), f = oe(() => {
  }), [u, x] = q(!1), [h, b] = q(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, g = () => {
    m(), a.current = window.setTimeout(() => {
      a.current = null, x(!0);
    }, r);
  }, _ = () => {
    m(), x(!1);
  };
  if (ve(() => () => m(), []), ve(() => {
    if (!u || l == null) return;
    const y = window.setTimeout(() => x(!1), l);
    return () => window.clearTimeout(y);
  }, [u, l]), ve(() => {
    if (i || !u) return;
    const y = (S) => {
      S.key === "Escape" && _();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [i, u]), ve(() => {
    if (!i) return;
    let y = null, S = null;
    const v = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, $ = () => {
      v(), S = null, b(null);
    };
    f.current = $;
    const N = (w) => {
      v(), S = w, y = window.setTimeout(() => {
        y = null, b(w);
      }, r);
    }, E = (w) => w instanceof Element ? w.closest(i) : null, C = (w) => {
      const O = E(w.target);
      !O || O === S || N(O);
    }, A = (w) => {
      const O = E(w.target);
      if (!O || O !== S) return;
      const T = w.relatedTarget;
      T instanceof Element && O.contains(T) || $();
    }, D = (w) => {
      w.key === "Escape" && $();
    }, I = () => $();
    return document.addEventListener("mouseover", C), document.addEventListener("mouseout", A), document.addEventListener("focusin", C), document.addEventListener("focusout", A), document.addEventListener("keydown", D), document.addEventListener("scroll", I, !0), window.addEventListener("resize", I), () => {
      v(), document.removeEventListener("mouseover", C), document.removeEventListener("mouseout", A), document.removeEventListener("focusin", C), document.removeEventListener("focusout", A), document.removeEventListener("keydown", D), document.removeEventListener("scroll", I, !0), window.removeEventListener("resize", I), S = null, b(null);
    };
  }, [i, r]), ve(() => {
    if (!i || h === null || l == null) return;
    const y = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(y);
  }, [i, h, l]), Rs(() => {
    const y = h;
    if (!y) return;
    const S = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [S, o].filter(Boolean).join(" ")
    ), () => {
      S == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", S);
    };
  }, [h, o]), Rs(() => {
    const y = c.current, S = h;
    !y || !S || Object.assign(
      y.style,
      ru(S.getBoundingClientRect(), n)
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
  const p = qt(t) ? Xs(t, {
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
        onMouseEnter: g,
        onMouseLeave: _,
        onFocus: g,
        onBlur: _,
        children: [
          p,
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
const su = "_dialog_1t7pw_1", ou = "_sm_1t7pw_104", lu = "_resizable_1t7pw_110", au = "_md_1t7pw_113", iu = "_lg_1t7pw_117", cu = "_header_1t7pw_121", du = "_title_1t7pw_132", uu = "_description_1t7pw_139", fu = "_close_1t7pw_146", _u = "_body_1t7pw_176", pu = "_footer_1t7pw_188", bn = {
  dialog: su,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: ou,
  resizable: lu,
  md: au,
  lg: iu,
  header: cu,
  title: du,
  description: uu,
  close: fu,
  body: _u,
  footer: pu
};
function gl({
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
  showMask: b = !0,
  canClose: m,
  className: g
}) {
  const _ = oe(null), p = ot(), y = ot(), S = oe(t);
  ve(() => {
    S.current = t;
  });
  const v = oe(m);
  ve(() => {
    v.current = m;
  });
  const $ = oe(f);
  ve(() => {
    $.current = f;
  });
  const N = oe(!1), E = oe(!1), C = B(() => {
    if (N.current) return;
    const I = v.current?.();
    if (I instanceof Promise) {
      I.then((w) => {
        w && !N.current && (N.current = !0, S.current());
      });
      return;
    }
    I !== !1 && (N.current = !0, S.current());
  }, []), A = B(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    S.current();
  }, []), D = B(
    (I) => {
      if (I.key !== "Tab" || !_.current) return;
      const w = Array.from(
        _.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (T) => T.offsetWidth > 0 || T.offsetHeight > 0 || T === document.activeElement
      );
      if (w.length === 0) {
        I.preventDefault();
        return;
      }
      const O = w.indexOf(document.activeElement);
      if (I.shiftKey) {
        if (O <= 0) {
          I.preventDefault();
          const T = w[w.length - 1];
          T && T.focus();
        }
      } else if (O === -1 || O === w.length - 1) {
        I.preventDefault();
        const T = w[0];
        T && T.focus();
      }
    },
    []
  );
  return ve(() => {
    const I = _.current;
    if (I)
      if (e && !I.open) {
        const w = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        I.showModal(), (I.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? I.querySelector("button"))?.focus();
        const T = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const P = (L) => {
          L.preventDefault(), $.current && C();
        };
        return I.addEventListener("cancel", P), () => {
          I.removeEventListener("cancel", P), document.body.style.overflow = T, w?.focus({ preventScroll: !0 });
        };
      } else !e && I.open && (E.current = N.current, N.current = !1, I.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: _,
      className: [
        bn.dialog,
        bn[d],
        u ? bn.resizable : null,
        x ? bn[`side-${x}`] : null,
        b === !1 ? bn["no-mask"] : null,
        g
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: A,
      onClick: (I) => {
        I.target === _.current && c && C();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": r ? y : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ M("header", { className: bn.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ s("h2", { id: p, className: bn.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: y, className: bn.description, children: r })
          ] }),
          h !== !1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: bn.close,
              onClick: () => {
                C();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: bn.body, children: l }),
        i && /* @__PURE__ */ s("footer", { className: bn.footer, children: i })
      ]
    }
  );
}
const mu = "_typography_1jy8x_1", hu = "_h1_1jy8x_39", gu = "_h2_1jy8x_45", bu = "_h3_1jy8x_51", yu = "_h4_1jy8x_57", xu = "_h5_1jy8x_63", vu = "_h6_1jy8x_69", wu = "_button_1jy8x_99", ku = "_caption_1jy8x_106", Nu = "_overline_1jy8x_112", $s = {
  typography: mu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: hu,
  h2: gu,
  h3: bu,
  h4: yu,
  h5: xu,
  h6: vu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: wu,
  caption: ku,
  overline: Nu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Su = {
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
}, Ou = {
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
}, $u = {
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
}, Eu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, bl = st(function({
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
  const f = n === "Auto" ? Su[t] : $u[n];
  return /* @__PURE__ */ s(
    f,
    {
      ref: c,
      className: [
        $s.typography,
        $s[Ou[t]],
        r ? $s[Eu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? o
    }
  );
}), yl = lr(null);
function vS() {
  const e = Pn(yl);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function wS({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = oe(0), i = () => (l.current += 1, l.current), d = oe([]);
  d.current = t;
  const o = (x) => {
    const h = d.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!x) : h.kind === "alert" ? h.resolve() : h.resolve(x), n((b) => b.slice(1)));
  }, a = Oe(
    () => ({
      confirm: (x = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "confirm", options: x, resolve: h }
        ]);
      }),
      alert: (x = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "alert", options: x, resolve: h }
        ]);
      }),
      open: (x = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "custom", options: x, resolve: h }
        ]);
      }),
      openSide: ({ position: x, showMask: h = !0, ...b }) => new Promise((m) => {
        n((g) => [
          ...g,
          {
            seq: i(),
            kind: "custom",
            options: { ...b, side: x, showMask: h },
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
  return /* @__PURE__ */ M(yl.Provider, { value: a, children: [
    e,
    /* @__PURE__ */ s(
      gl,
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
          /* @__PURE__ */ s(an, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            an,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ s(an, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ s(an, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ s(bl, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Tu = "_viewport_11t1p_1", Cu = "_topLeft_11t1p_13", Au = "_topRight_11t1p_20", Du = "_bottomLeft_11t1p_25", Mu = "_toast_11t1p_30", Iu = "_leaving_11t1p_61", zu = "_info_11t1p_77", Lu = "_success_11t1p_86", Ru = "_warning_11t1p_95", Pu = "_danger_11t1p_104", ju = "_content_11t1p_113", Bu = "_title_11t1p_118", Fu = "_description_11t1p_141", Hu = "_dismiss_11t1p_148", Uu = "_actions_11t1p_169", qu = "_action_11t1p_169", Ku = "_cancel_11t1p_177", Wu = "_progress_11t1p_215", en = {
  viewport: Tu,
  topLeft: Cu,
  topRight: Au,
  bottomLeft: Du,
  toast: Mu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Iu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: zu,
  success: Lu,
  warning: Ru,
  danger: Pu,
  content: ju,
  title: Bu,
  description: Fu,
  dismiss: Hu,
  actions: Uu,
  action: qu,
  cancel: Ku,
  progress: Wu,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, xl = lr(null);
function kS() {
  const e = Pn(xl);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Gu = 200, Vu = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function NS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = q([]), [o, a] = q(!1), c = oe([]), f = oe(/* @__PURE__ */ new Map()), u = oe(!1), x = oe(0), h = (O) => {
    u.current = O, a(O);
  }, b = B((O) => {
    const T = f.current.get(O);
    T && (window.clearTimeout(T.timeoutId), T.remaining = Math.max(
      0,
      T.remaining - (Date.now() - T.startedAt)
    ));
  }, []), m = B((O) => {
    const T = f.current.get(O);
    T && (window.clearTimeout(T.timeoutId), f.current.delete(O));
  }, []), g = B(
    (O) => {
      m(O), d((T) => {
        const P = T.filter((L) => L.id !== O);
        return c.current = P, P;
      });
    },
    [m]
  ), _ = B(
    (O) => {
      const T = c.current.find((P) => P.id === O);
      !T || T.leaving || (T.onAutoClose?.(), g(O));
    },
    [g]
  ), p = B(
    (O) => {
      const T = f.current.get(O);
      !T || T.remaining <= 0 || (T.startedAt = Date.now(), T.timeoutId = window.setTimeout(() => _(O), T.remaining));
    },
    [_]
  ), y = B(() => {
    u.current || f.current.forEach((O, T) => b(T)), h(!0);
  }, [b]), S = B(() => {
    f.current.forEach((O, T) => p(T)), h(!1);
  }, [p]);
  ve(() => {
    if (!r) return;
    const O = () => {
      document.hidden ? y() : S();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [r, y, S]);
  const v = B(
    (O) => {
      const T = c.current.find((P) => P.id === O);
      !T || T.leaving || (T.onDismiss?.(), d((P) => {
        const L = P.map(
          (j) => j.id === O ? { ...j, leaving: !0 } : j
        );
        return c.current = L, L;
      }), window.setTimeout(() => g(O), Gu));
    },
    [g]
  ), $ = B(
    (O) => {
      if (O.durationMs <= 0) return;
      const T = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(O.id, T), u.current || p(O.id);
    },
    [p]
  ), N = B(
    (O) => {
      const T = c.current.find((L) => L.id === O.id), P = {
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
        const j = T ? L.map(
          (F) => F.id === P.id ? { ...P, leaving: !1 } : F
        ) : [...L, P];
        return c.current = j, j;
      }), T && m(P.id), $(P);
    },
    [t, n, $, m]
  ), E = B(
    (O) => {
      N({
        severity: O.severity ?? "info",
        title: O.summary ?? O.summaryContent,
        description: O.detail ?? O.detailContent,
        durationMs: O.duration,
        click: O.click,
        closeOnClick: O.closeOnClick,
        payload: O.payload
      });
    },
    [N]
  ), C = B(
    (O) => (T, P) => E({ severity: O, summary: T, detail: P }),
    [E]
  ), A = Oe(
    () => ({
      toast: N,
      notify: E,
      notifyInfo: C("info"),
      notifySuccess: C("success"),
      notifyWarning: C("warning"),
      notifyError: C("danger")
    }),
    [N, E, C]
  ), D = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((O) => O.position)])),
    [n, i]
  ), I = r ? y : void 0, w = r ? S : void 0;
  return /* @__PURE__ */ M(xl.Provider, { value: A, children: [
    e,
    D.map((O) => /* @__PURE__ */ s(
      "div",
      {
        className: [en.viewport, en[Vu[O]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: w,
        children: i.filter((T) => T.position === O).map((T) => /* @__PURE__ */ M(
          "div",
          {
            role: T.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": T.closeOnClick ? "true" : "false",
            className: [
              en.toast,
              en[T.severity],
              T.leaving ? en.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: T.click || T.closeOnClick ? () => {
              T.click?.(T.payload), T.closeOnClick && v(T.id);
            } : void 0,
            children: [
              /* @__PURE__ */ M("div", { className: en.content, children: [
                /* @__PURE__ */ s("div", { className: en.title, children: T.title }),
                T.description && /* @__PURE__ */ s("div", { className: en.description, children: T.description }),
                (T.action || T.cancel) && /* @__PURE__ */ M("div", { className: en.actions, children: [
                  T.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: en.action,
                      onClick: () => {
                        T.action?.onClick?.(), v(T.id);
                      },
                      children: T.action.label
                    }
                  ),
                  T.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: en.cancel,
                      onClick: () => {
                        T.cancel?.onClick?.(), v(T.id);
                      },
                      children: T.cancel.label
                    }
                  )
                ] })
              ] }),
              T.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: en.dismiss,
                  onClick: () => v(T.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              ),
              T.showProgress && T.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: en.progress,
                  style: { animationDuration: `${T.durationMs}ms` }
                }
              )
            ]
          },
          T.id
        ))
      },
      O
    ))
  ] });
}
const Yu = "_chat_1apnf_3", Xu = "_messages_1apnf_9", Zu = "_message_1apnf_9", Ju = "_user_1apnf_29", Qu = "_assistant_1apnf_35", ef = "_system_1apnf_40", tf = "_typing_1apnf_46", nf = "_inputRow_1apnf_51", dr = {
  chat: Yu,
  messages: Xu,
  message: Zu,
  user: Ju,
  assistant: Qu,
  system: ef,
  typing: tf,
  inputRow: nf
};
function SS({
  messages: e = [],
  onSend: t,
  placeholder: n = "Type a message…",
  sendText: r = "Send",
  inputLabel: l = "Message",
  ariaLabel: i = "Chat",
  messageTemplate: d,
  inputTemplate: o,
  loading: a = !1,
  disabled: c = !1,
  className: f
}) {
  const [u, x] = q(""), h = a || c, b = u.trim().length > 0 && !h, m = (_) => {
    _.preventDefault();
    const p = u.trim();
    !p || h || (x(""), t?.(p));
  }, g = /* @__PURE__ */ M("form", { className: dr.inputRow, onSubmit: (_) => {
    m(_);
  }, children: [
    /* @__PURE__ */ s(
      Qs,
      {
        value: u,
        placeholder: n,
        "aria-label": l,
        disabled: h,
        onChange: (_) => x(_.target.value)
      }
    ),
    /* @__PURE__ */ s(an, { type: "submit", disabled: !b, loading: a, children: r })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      className: [dr.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ M("div", { className: dr.messages, children: [
          e.map(
            (_, p) => d ? /* @__PURE__ */ s("div", { children: d(_, p) }, p) : /* @__PURE__ */ s(
              "div",
              {
                className: [dr.message, dr[_.role]].filter(Boolean).join(" "),
                children: _.content
              },
              p
            )
          ),
          a && /* @__PURE__ */ s("div", { className: dr.typing, children: "…" })
        ] }),
        o ? o(g) : g
      ]
    }
  );
}
const rf = "_wrapper_1ulz6_1", sf = "_input_1ulz6_8", of = "_invalid_1ulz6_38", lf = "_toggle_1ulz6_45", af = "_xs_1ulz6_80", cf = "_sm_1ulz6_86", df = "_md_1ulz6_92", uf = "_lg_1ulz6_98", ff = "_xl_1ulz6_104", Tr = {
  wrapper: rf,
  input: sf,
  invalid: of,
  toggle: lf,
  xs: af,
  sm: cf,
  md: df,
  lg: uf,
  xl: ff
}, _f = st(
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
      /* @__PURE__ */ M("div", { className: Tr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Tr.input,
              Tr[t],
              n ? Tr.invalid : null,
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
            className: Tr.toggle,
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
), pf = "_login_30qie_3", mf = "_title_30qie_9", hf = "_remember_30qie_14", gf = "_link_30qie_21", Cr = {
  login: pf,
  title: mf,
  remember: hf,
  link: gf
}, eo = "dx-login-username";
function bf(e) {
  const t = e === void 0 ? eo : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function yf(e, t) {
  const n = e === void 0 ? eo : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function xf(e) {
  const t = e === void 0 ? eo : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function OS({
  action: e,
  method: t = "post",
  onLogin: n,
  onRegister: r,
  onForgotPassword: l,
  registerContent: i,
  forgotPasswordContent: d,
  rememberMe: o = !0,
  loading: a = !1,
  title: c,
  usernameLabel: f = "Username",
  passwordLabel: u = "Password",
  submitText: x = "Sign in",
  storageKey: h,
  className: b
}) {
  const [m, g] = q(() => bf(h) ?? ""), [_, p] = q(""), [y, S] = q(!1), [v, $] = q(!1), [N, E] = q({}), C = a || v, A = e != null && n == null, D = async (I) => {
    A || I.preventDefault();
    const w = {};
    if (m.trim() || (w.username = "Username is required."), _ || (w.password = "Password is required."), E(w), !(w.username || w.password || !n)) {
      $(!0);
      try {
        await n({
          username: m.trim(),
          password: _,
          rememberMe: y
        }), y ? yf(h, m.trim()) : xf(h);
      } finally {
        $(!1);
      }
    }
  };
  return /* @__PURE__ */ M(
    "form",
    {
      className: [Cr.login, b].filter(Boolean).join(" "),
      action: A ? e : void 0,
      method: A ? t : void 0,
      noValidate: !0,
      onSubmit: (I) => {
        D(I);
      },
      children: [
        c != null && /* @__PURE__ */ s("div", { className: Cr.title, children: c }),
        /* @__PURE__ */ s(sr, { label: f, required: !0, error: N.username, children: ({ inputId: I }) => /* @__PURE__ */ s(
          Qs,
          {
            id: I,
            value: m,
            autoComplete: "username",
            disabled: C,
            "aria-invalid": N.username ? !0 : void 0,
            onChange: (w) => {
              g(w.target.value), E((O) => ({ ...O, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ s(sr, { label: u, required: !0, error: N.password, children: ({ inputId: I }) => /* @__PURE__ */ s(
          _f,
          {
            id: I,
            value: _,
            autoComplete: "current-password",
            disabled: C,
            "aria-invalid": N.password ? !0 : void 0,
            onChange: (w) => {
              p(w.target.value), E((O) => ({ ...O, password: void 0 }));
            }
          }
        ) }),
        o && /* @__PURE__ */ M("label", { className: Cr.remember, children: [
          /* @__PURE__ */ s(
            Gd,
            {
              checked: y,
              disabled: C,
              onChange: (I) => S(I.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ s(an, { type: "submit", loading: C, disabled: C, children: x }),
        (d ?? l) && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Cr.link,
            onClick: () => l?.(),
            children: d ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Cr.link,
            onClick: () => r?.(),
            children: i ?? "Create account"
          }
        )
      ]
    }
  );
}
function ko(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vf(e) {
  if (Array.isArray(e)) return e;
}
function wf(e, t) {
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
function kf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nf(e, t) {
  return vf(e) || wf(e, t) || Sf(e, t) || kf();
}
function Sf(e, t) {
  if (e) {
    if (typeof e == "string") return ko(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ko(e, t) : void 0;
  }
}
const vl = Object.entries, No = Object.setPrototypeOf, Of = Object.isFrozen, $f = Object.getPrototypeOf, Ef = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, br = Object.create, wl = typeof Reflect < "u" && Reflect, js = wl.apply, Bs = wl.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
js || (js = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) l[i - 2] = arguments[i];
  return t.apply(n, l);
});
Bs || (Bs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const rr = bt(Array.prototype.forEach), Tf = bt(Array.prototype.lastIndexOf), So = bt(Array.prototype.pop), Ar = bt(Array.prototype.push), Cf = bt(Array.prototype.splice), yr = Array.isArray, Hr = bt(String.prototype.toLowerCase), Es = bt(String.prototype.toString), Oo = bt(String.prototype.match), Dr = bt(String.prototype.replace), $o = bt(String.prototype.indexOf), Af = bt(String.prototype.trim), Df = bt(Number.prototype.toString), Mf = bt(Boolean.prototype.toString), Eo = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), To = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Vt = bt(Object.prototype.hasOwnProperty), Mr = bt(Object.prototype.toString), zt = bt(RegExp.prototype.test), Hn = If(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return js(e, t, r);
  };
}
function If(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Bs(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hr;
  if (No && No(e, null), !yr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const i = n(l);
      i !== l && (Of(t) || (t[r] = i), l = i);
    }
    e[l] = !0;
  }
  return e;
}
function zf(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = br(null);
  for (const r of vl(e)) {
    var n = Nf(r, 2);
    const l = n[0], i = n[1];
    Vt(e, l) && (yr(i) ? t[l] = zf(i) : i && typeof i == "object" && i.constructor === Object ? t[l] = sn(i) : t[l] = i);
  }
  return t;
}
function Lf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Df(e);
    case "boolean":
      return Mf(e);
    case "bigint":
      return Eo ? Eo(e) : "0";
    case "symbol":
      return To ? To(e) : "Symbol()";
    case "undefined":
      return Mr(e);
    case "function":
    case "object": {
      if (e === null) return Mr(e);
      const t = e, n = _n(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Mr(r);
      }
      return Mr(e);
    }
    default:
      return Mr(e);
  }
}
function _n(e, t) {
  for (; e !== null; ) {
    const r = Ef(e, t);
    if (r) {
      if (r.get) return bt(r.get);
      if (typeof r.value == "function") return bt(r.value);
    }
    e = $f(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Rf(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Co = kt([
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
]), Ts = kt([
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
]), Cs = kt([
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
]), Pf = kt([
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
]), As = kt([
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
]), jf = kt([
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
]), Ao = kt(["#text"]), Do = kt([
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
]), Ds = kt([
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
]), Mo = kt([
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
]), es = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Bf = Ot(/{{[\w\W]*|^[\w\W]*}}/g), Ff = Ot(/<%[\w\W]*|^[\w\W]*%>/g), Hf = Ot(/\${[\w\W]*/g), Uf = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), qf = Ot(/^aria-[\-\w]+$/), Io = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Kf = Ot(/^(?:\w+script|data):/i), Wf = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Gf = Ot(/^html$/i), Vf = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), zo = Ot(/<[/\w!]/g), Lo = Ot(/<[/\w]/g), Yf = Ot(/<\/no(script|embed|frames)/i), Xf = Ot(/\/>/i), tn = {
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
}, kl = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], Zf = kt(qe({}, kl)), Jf = (function() {
  const e = {};
  return rr(kl, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), Qf = function() {
  return typeof window > "u" ? null : window;
}, e_ = function(t, n) {
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
}, Ro = function() {
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
  return Vt(t, n) && yr(t[n]) ? qe(l.base ? sn(l.base) : {}, t[n], l.transform) : r;
}, Ms = function(t, n, r) {
  const l = Vt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? sn(l) : r();
};
function Nl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qf();
  const t = (se) => Nl(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, d = e.Node, o = e.Element, a = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = o.prototype, x = _n(u, "cloneNode"), h = _n(u, "remove"), b = _n(u, "removeAttributeNode"), m = _n(u, "nextSibling"), g = _n(u, "childNodes"), _ = _n(u, "parentNode"), p = _n(u, "shadowRoot"), y = _n(u, "attributes"), S = d && d.prototype ? _n(d.prototype, "nodeType") : null, v = d && d.prototype ? _n(d.prototype, "nodeName") : null, $ = d && d.prototype ? _n(d.prototype, "ownerDocument") : null, N = function(k) {
    return S ? S(k) : k.nodeType;
  }, E = function(k) {
    return v ? v(k) : k.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let C, A = "", D, I = !1, w = 0;
  const O = function() {
    if (w > 0) throw Hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, T = function(k) {
    O(), w++;
    try {
      return C.createHTML(k);
    } finally {
      w--;
    }
  }, P = function(k) {
    O(), w++;
    try {
      return C.createScriptURL(k);
    } finally {
      w--;
    }
  }, L = function() {
    return I || (D = e_(f, l), I = !0), D;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let le = Ro();
  t.isSupported = typeof vl == "function" && typeof _ == "function" && F && F.createHTMLDocument !== void 0;
  const _e = Bf, W = Ff, he = Hf, ue = Uf, ye = qf, pe = Kf, De = Wf, G = Vf;
  let $e = Io, ne = null;
  const Ae = qe({}, [
    ...Co,
    ...Ts,
    ...Cs,
    ...As,
    ...Ao
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...Do,
    ...Ds,
    ...Mo,
    ...es
  ]);
  let Ge = Object.seal(br(null, {
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
  const lt = Object.seal(br(null, {
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
  ], Es), ke = kt([
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
  const Zt = n.createElement("form"), pn = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, Tn = function() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === k) return;
    (!k || typeof k != "object") && (k = {}), k = sn(k), rt = Et.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? mt : k.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? Es : Hr, ne = Un(k, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Un(k, "ALLOWED_ATTR", Fe, { transform: ze }), de = Un(k, "ALLOWED_NAMESPACES", Ne, { transform: Es }), me = Un(k, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), at = Un(k, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Un(k, "FORBID_CONTENTS", $t, { transform: ze }), Je = Un(k, "FORBID_TAGS", sn({}), { transform: ze }), At = Un(k, "FORBID_ATTR", sn({}), { transform: ze }), Ke = Vt(k, "USE_PROFILES") ? k.USE_PROFILES && typeof k.USE_PROFILES == "object" ? sn(k.USE_PROFILES) : k.USE_PROFILES : !1, yt = k.ALLOW_ARIA_ATTR !== !1, Z = k.ALLOW_DATA_ATTR !== !1, z = k.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = k.SAFE_FOR_TEMPLATES || !1, ge = k.SAFE_FOR_XML !== !1, ae = k.WHOLE_DOCUMENT || !1, nt = k.RETURN_DOM || !1, Xt = k.RETURN_DOM_FRAGMENT || !1, re = k.RETURN_TRUSTED_TYPE || !1, Qe = k.FORCE_BODY || !1, Le = k.SANITIZE_DOM !== !1, Nt = k.SANITIZE_NAMED_PROPS || !1, xt = k.KEEP_CONTENT !== !1, Ie = k.IN_PLACE || !1, $e = Rf(k.ALLOWED_URI_REGEXP) ? k.ALLOWED_URI_REGEXP : Io, K = typeof k.NAMESPACE == "string" ? k.NAMESPACE : Xe, Ce = Ms(k, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = Ms(k, "HTML_INTEGRATION_POINTS", () => qe({}, We));
    const R = Ms(k, "CUSTOM_ELEMENT_HANDLING", () => br(null));
    if (Ge = br(null), Vt(R, "tagNameCheck") && pn(R.tagNameCheck) && (Ge.tagNameCheck = R.tagNameCheck), Vt(R, "attributeNameCheck") && pn(R.attributeNameCheck) && (Ge.attributeNameCheck = R.attributeNameCheck), Vt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), Ke && (ne = qe({}, Ao), fe = br(null), Ke.html === !0 && (qe(ne, Co), qe(fe, Do)), Ke.svg === !0 && (qe(ne, Ts), qe(fe, Ds), qe(fe, es)), Ke.svgFilters === !0 && (qe(ne, Cs), qe(fe, Ds), qe(fe, es)), Ke.mathMl === !0 && (qe(ne, As), qe(fe, Mo), qe(fe, es))), lt.tagCheck = null, lt.attributeCheck = null, Vt(k, "ADD_TAGS") && (typeof k.ADD_TAGS == "function" ? lt.tagCheck = k.ADD_TAGS : yr(k.ADD_TAGS) && (ne === Ae && (ne = sn(ne)), qe(ne, k.ADD_TAGS, ze))), Vt(k, "ADD_ATTR") && (typeof k.ADD_ATTR == "function" ? lt.attributeCheck = k.ADD_ATTR : yr(k.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, k.ADD_ATTR, ze))), Vt(k, "ADD_FORBID_CONTENTS") && yr(k.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, k.ADD_FORBID_CONTENTS, ze)), xt && (ne["#text"] = !0), ae && qe(ne, [
      "html",
      "head",
      "body"
    ]), ne.table && (qe(ne, ["tbody"]), delete Je.tbody), k.TRUSTED_TYPES_POLICY) {
      if (typeof k.TRUSTED_TYPES_POLICY.createHTML != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof k.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = C;
      C = k.TRUSTED_TYPES_POLICY;
      try {
        A = T("");
      } catch (ce) {
        throw C = J, ce;
      }
    } else k.TRUSTED_TYPES_POLICY === null ? (C = void 0, A = "") : (C === void 0 && (C = L()), C && typeof A == "string" && (A = T("")));
    kt && kt(k), Tt = k;
  }, jn = qe({}, [
    ...Ts,
    ...Cs,
    ...Pf
  ]), wn = qe({}, [...As, ...jf]), Gr = function(k, R, J) {
    return R.namespaceURI === Xe ? k === "svg" : R.namespaceURI === Ye ? k === "svg" && (J === "annotation-xml" || Ce[J]) : !!jn[k];
  }, ys = function(k, R, J) {
    return R.namespaceURI === Xe ? k === "math" : R.namespaceURI === Pt ? k === "math" && Be[J] : !!wn[k];
  }, xs = function(k, R, J) {
    return R.namespaceURI === Pt && !Be[J] || R.namespaceURI === Ye && !Ce[J] ? !1 : !wn[k] && (it[k] || !jn[k]);
  }, vs = function(k) {
    let R = _(k);
    (!R || !R.tagName) && (R = {
      namespaceURI: K,
      tagName: "template"
    });
    const J = Hr(k.tagName), ce = Hr(R.tagName);
    return de[k.namespaceURI] ? k.namespaceURI === Pt ? Gr(J, R, ce) : k.namespaceURI === Ye ? ys(J, R, ce) : k.namespaceURI === Xe ? xs(J, R, ce) : !!(rt === "application/xhtml+xml" && de[k.namespaceURI]) : !1;
  }, mn = function(k) {
    Ar(t.removed, { element: k });
    try {
      _(k).removeChild(k);
    } catch {
      if (h(k), !_(k)) throw Hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Vr = function(k, R, J) {
    try {
      b(k, R);
    } catch {
      try {
        k.removeAttribute(J);
      } catch {
      }
    }
  }, hn = function(k) {
    H(k);
    const R = g(k);
    if (R) {
      const ce = [];
      rr(R, (Te) => {
        Ar(ce, Te);
      }), rr(ce, (Te) => {
        try {
          h(Te);
        } catch {
        }
      });
    }
    const J = y(k);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Vr(k, Te, Pe);
    }
  }, jt = function(k, R, J) {
    if (!J) try {
      J = R.getAttributeNode(k);
    } catch {
      J = null;
    }
    Ar(t.removed, {
      attribute: J || null,
      from: R
    });
    try {
      J ? b(R, J) : R.removeAttribute(k);
    } catch {
      try {
        R.removeAttribute(k);
      } catch {
      }
    }
    if (k === "is")
      if (nt || Xt) try {
        mn(R);
      } catch {
      }
      else try {
        R.setAttribute(k, "");
      } catch {
      }
  }, vr = function(k) {
    const R = y(k);
    if (R)
      for (let J = R.length - 1; J >= 0; --J) {
        const ce = R[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Vr(k, ce, Te);
      }
  }, H = function(k) {
    const R = [k];
    for (; R.length > 0; ) {
      const J = R.pop();
      N(J) === tn.element && vr(J);
      const ce = g(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) R.push(ce[Te]);
    }
  }, U = function(k, R) {
    return ge ? k === "patchsrc" ? !0 : k === "for" && R !== "label" && R !== "output" : !1;
  }, be = function(k) {
    if (!ge) return;
    const R = [k];
    for (; R.length > 0; ) {
      const J = R.pop(), ce = N(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Lo, J.data)) {
        try {
          h(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = ze(E(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = g(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) R.push(Te[Pe]);
    }
  }, xe = function(k) {
    let R = null, J = null;
    if (Qe) k = "<remove></remove>" + k;
    else {
      const Pe = Oo(k, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && K === Xe && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    const ce = C ? T(k) : k;
    if (K === Xe) try {
      R = new c().parseFromString(ce, rt);
    } catch {
    }
    if (!R || !R.documentElement) {
      R = F.createDocument(K, "template", null);
      try {
        R.documentElement.innerHTML = ee ? A : ce;
      } catch {
      }
    }
    const Te = R.body || R.documentElement;
    return k && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), K === Xe ? te.call(R, ae ? "html" : "body")[0] : ae ? R.documentElement : Te;
  }, et = function(k) {
    const R = $ ? $(k) : k.ownerDocument;
    return X.call(R || k, k, a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION, null);
  }, Dt = function(k) {
    return k = Dr(k, _e, " "), k = Dr(k, W, " "), k = Dr(k, he, " "), k;
  }, wt = function(k) {
    var R;
    k.normalize();
    const J = $ ? $(k) : k.ownerDocument, ce = X.call(J || k, k, a.SHOW_TEXT | a.SHOW_COMMENT | a.SHOW_CDATA_SECTION | a.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (R = k.querySelectorAll) === null || R === void 0 ? void 0 : R.call(k, "template");
    Pe && rr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, gn = function(k) {
    const R = v ? v(k) : null;
    return typeof R != "string" || ze(R) !== "form" ? !1 : typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || k.attributes !== y(k) || typeof k.removeAttribute != "function" || typeof k.removeAttributeNode != "function" || typeof k.getAttributeNode != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function" || k.nodeType !== S(k) || k.childNodes !== g(k);
  }, Ct = function(k) {
    if (!S || typeof k != "object" || k === null) return !1;
    try {
      return S(k) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, gt = function(k) {
    if (!S || typeof k != "object" || k === null) return !1;
    try {
      return typeof S(k) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(se, k, R) {
    se.length !== 0 && rr(se, (J) => {
      J.call(t, k, R, Tt);
    });
  }
  const ws = function(k, R) {
    return !!(ge && k.hasChildNodes() && !gt(k.firstElementChild) && zt(zo, k.textContent) && zt(zo, k.innerHTML) || ge && k.namespaceURI === Xe && Zf[R] && (gt(k.firstElementChild) || typeof k.textContent == "string" && zt(Jf[R], k.textContent)) || k.nodeType === tn.processingInstruction || ge && k.nodeType === tn.comment && zt(Lo, k.data));
  }, Yr = function(k, R) {
    if (k instanceof RegExp) return zt(k, R);
    if (k instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!k(R, ...ce);
    }
    return !1;
  }, Fl = function(k, R, J) {
    if (!Je[R] && io(R) && Yr(Ge.tagNameCheck, R)) return !1;
    if (xt && !vt[R]) {
      const ce = _(k), Te = g(k);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ct = k === J ? x(Te[He], !0) : Te[He];
          ce.insertBefore(ct, m(k));
        }
      }
    }
    return mn(k), !0;
  }, oo = function(k, R, J, ce) {
    return k.length === 0 ? R : R === J || R === ce ? sn(R) : R;
  }, ir = function(k, R) {
    return k === R || _(k) !== null ? !1 : (Ie && H(k), !0);
  }, lo = function(k, R) {
    if (Jt(le.beforeSanitizeElements, k, null), ir(k, R)) return !0;
    if (gn(k))
      return mn(k), !0;
    const J = ze(E(k));
    if (ne = oo(le.uponSanitizeElement, ne, Ae, je), Jt(le.uponSanitizeElement, k, {
      tagName: J,
      allowedTags: ne
    }), ir(k, R)) return !0;
    if (ws(k, J))
      return mn(k), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !ne[J]) {
      const ce = Fl(k, J, R);
      return ce === !1 && (Jt(le.afterSanitizeElements, k, null), ir(k, R)) ? !0 : ce;
    }
    if (N(k) === tn.element && !vs(k) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(Yf, k.innerHTML))
      return mn(k), !0;
    if (Q && k.nodeType === tn.text) {
      const ce = Dt(k.textContent);
      k.textContent !== ce && (Ar(t.removed, { element: k.cloneNode() }), k.textContent = ce);
    }
    return Jt(le.afterSanitizeElements, k, null), ir(k, R);
  }, ao = function(k, R, J) {
    if (At[R] || U(R, k) || Le && (R === "id" || R === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[R] || lt.attributeCheck instanceof Function && lt.attributeCheck(R, k);
    return Z && zt(ue, R) || yt && zt(ye, R) ? !0 : ce ? me[R] || zt($e, Dr(J, De, "")) || (R === "src" || R === "xlink:href" || R === "href") && k !== "script" && $o(J, "data:") === 0 && at[k] || z && !zt(pe, Dr(J, De, "")) ? !0 : !J : io(k) && Yr(Ge.tagNameCheck, k) && Yr(Ge.attributeNameCheck, R, k) || R === "is" && Ge.allowCustomizedBuiltInElements && Yr(Ge.tagNameCheck, J);
  }, Hl = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), io = function(k) {
    return !Hl[Hr(k)] && zt(G, k);
  }, Ul = function(k, R, J, ce) {
    if (C && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(k, R)) {
      case "TrustedHTML":
        return T(ce);
      case "TrustedScriptURL":
        return P(ce);
    }
    return ce;
  }, ql = function(k, R, J, ce) {
    try {
      return J ? k.setAttributeNS(J, R, ce) : k.setAttribute(R, ce), gn(k) ? (mn(k), !1) : !0;
    } catch {
      return jt(R, k), !1;
    }
  }, co = function(k, R) {
    if (Jt(le.beforeSanitizeAttributes, k, null), ir(k, R)) return;
    const J = k.attributes;
    if (!J || gn(k)) return;
    fe = oo(le.uponSanitizeAttribute, fe, Fe, Ze);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = ze(k.nodeName);
    for (; Te--; ) {
      const He = J[Te], ct = He.name, cn = He.namespaceURI, Qt = He.value, cr = ze(ct), Ns = Qt;
      let Bt = ct === "value" ? Ns : Af(Ns), uo = !1;
      if (ce.attrName = cr, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(le.uponSanitizeAttribute, k, ce), Bt = ce.attrValue, Nt && (cr === "id" || cr === "name") && $o(Bt, Rt) !== 0 && (jt(ct, k, He), Bt = Rt + Bt, uo = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ct, k, He);
        continue;
      }
      if (cr === "attributename" && Oo(Bt, "href")) {
        jt(ct, k, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ct, k, He);
          continue;
        }
        if (!Y && zt(Xf, Bt)) {
          jt(ct, k, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !ao(Pe, cr, Bt)) {
          jt(ct, k, He);
          continue;
        }
        Bt = Ul(Pe, cr, cn, Bt), Bt !== Ns && ql(k, ct, cn, Bt) && uo && So(t.removed);
      }
    }
    Jt(le.afterSanitizeAttributes, k, null), ir(k, R);
  }, Xr = function(k) {
    let R = null;
    const J = et(k);
    for (Jt(le.beforeSanitizeShadowDOM, k, null); R = J.nextNode(); )
      if (Jt(le.uponSanitizeShadowNode, R, null), lo(R, k), co(R, k), Ct(R.content) && Xr(R.content), N(R) === tn.element) {
        const ce = p(R);
        Ct(ce) && (ks(ce), Xr(ce));
      }
    Jt(le.afterSanitizeShadowDOM, k, null);
  }, ks = function(k) {
    const R = [{
      node: k,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const J = R.pop();
      if (J.shadow) {
        Xr(J.shadow);
        continue;
      }
      const ce = J.node, Te = N(ce) === tn.element, Pe = g(ce);
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
        const He = p(ce);
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
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, J = null, ce = null, Te = null;
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = Lf(se), typeof se != "string"))
      throw Hn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (ne = je, fe = Ze) : Tn(k), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (ne = sn(ne)), le.uponSanitizeAttribute.length > 0 && (fe = sn(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      be(se);
      const cn = E(se);
      if (typeof cn == "string") {
        const Qt = ze(cn);
        if (!ne[Qt] || Je[Qt])
          throw hn(se), Hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(se))
        throw hn(se), Hn("root node is clobbered and cannot be sanitized in-place");
      try {
        ks(se);
      } catch (Qt) {
        throw hn(se), Qt;
      }
    } else if (gt(se))
      R = xe("<!---->"), J = R.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? R = J : R.appendChild(J), ks(R);
    else {
      if (!nt && !Q && !ae && se.indexOf("<") === -1) return C && re ? T(se) : se;
      if (R = xe(se), !R) return nt ? null : re ? A : "";
    }
    R && Qe && mn(R.firstChild);
    const He = Pe ? se : R;
    try {
      const cn = et(He);
      for (; ce = cn.nextNode(); )
        lo(ce, He), co(ce, He), Ct(ce.content) && Xr(ce.content);
    } catch (cn) {
      throw Pe && (hn(se), rr(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), cn;
    }
    if (Pe) {
      let cn = !1;
      if (rr(t.removed, (Qt) => {
        Qt.element && (Qt.element === se && (cn = !0), H(Qt.element));
      }), cn) throw Hn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(se), se;
    }
    if (nt) {
      if (Q && wt(R), Xt)
        for (Te = ie.call(R.ownerDocument); R.firstChild; ) Te.appendChild(R.firstChild);
      else Te = R;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ct = ae ? R.outerHTML : R.innerHTML;
    return ae && ne["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && zt(Gf, R.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + ct), Q && (ct = Dt(ct)), C && re ? T(ct) : ct;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(se), Ee = !0, je = ne, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, C = D, A = "";
  }, t.isValidAttribute = function(se, k, R) {
    Tt || Tn({});
    const J = ze(se), ce = ze(k);
    return ao(J, ce, R);
  }, t.addHook = function(se, k) {
    typeof k == "function" && Vt(le, se) && Ar(le[se], k);
  }, t.removeHook = function(se, k) {
    if (Vt(le, se)) {
      if (k !== void 0) {
        const R = Tf(le[se], k);
        return R === -1 ? void 0 : Cf(le[se], R, 1)[0];
      }
      return So(le[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(le, se) && (le[se] = []);
  }, t.removeAllHooks = function() {
    le = Ro();
  }, t;
}
var Sl = Nl();
function qr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function t_(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ts = "\0";
function ns(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (l, i) => (n.push(`<code>${qr(i)}</code>`), `${ts}${n.length - 1}${ts}`));
  return t || (r = qr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (l, i, d) => {
      const o = t_(d);
      return o == null ? i : `<a href="${qr(o)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ts}(\\d+)${ts}`, "g"),
    (l, i) => n[Number(i)] ?? ""
  ), r;
}
function n_(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), l = (a) => r[a] ?? "", i = [];
  let d = 0;
  const o = (a, c) => {
    const f = c ? "ol" : "ul";
    i.push(
      `<${f}>${a.map((u) => `<li>${ns(u, n)}</li>`).join("")}</${f}>`
    );
  };
  for (; d < r.length; ) {
    const a = l(d) ?? "";
    if (/^\s*$/.test(a)) {
      d += 1;
      continue;
    }
    const c = /^(#{1,6})\s+(.*)$/.exec(a), f = c?.[1], u = c?.[2];
    if (f !== void 0 && u !== void 0) {
      i.push(
        `<h${f.length}>${ns(u.trim(), n)}</h${f.length}>`
      ), d += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(a)) {
      const m = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(a)?.[2] ?? "", g = [];
      for (d += 1; d < r.length; ) {
        const p = l(d) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(p)) break;
        g.push(p), d += 1;
      }
      d += 1;
      const _ = m ? ` class="language-${qr(m)}"` : "";
      i.push(
        `<pre><code${_}>${qr(g.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(a)) {
      const m = [];
      for (; d < r.length && /^>\s?(.*)$/.test(l(d)); )
        m.push(/^>\s?(.*)$/.exec(l(d))?.[1] ?? ""), d += 1;
      i.push(
        `<blockquote>${m.map((g) => `<p>${ns(g, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(a.trim())) {
      i.push("<hr>"), d += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(a)) {
      const m = [];
      for (; d < r.length; ) {
        const _ = /^\s*[-*+]\s+(.*)$/.exec(l(d))?.[1];
        if (_ === void 0) break;
        m.push(_), d += 1;
      }
      o(m, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(a)) {
      const m = [];
      for (; d < r.length; ) {
        const _ = /^\s*\d+[.)]\s+(.*)$/.exec(l(d))?.[1];
        if (_ === void 0) break;
        m.push(_), d += 1;
      }
      o(m, !0);
      continue;
    }
    const b = [];
    for (; d < r.length && !/^\s*$/.test(l(d)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      l(d)
    ); )
      b.push(l(d)), d += 1;
    i.push(`<p>${ns(b.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const r_ = "_markdown_1vu4b_3", s_ = "_resize_1vu4b_61", Po = {
  markdown: r_,
  resize: s_
};
function $S({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: l
}) {
  const i = Oe(
    () => Sl.sanitize(n_(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Po.markdown, n ? Po.resize : "", l].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const o_ = "_editor_2a7al_3", l_ = "_toolbar_2a7al_13", a_ = "_tool_2a7al_13", i_ = "_separator_2a7al_56", c_ = "_area_2a7al_63", d_ = "_source_2a7al_73", u_ = "_alignGlyph_2a7al_84", f_ = "_colorInput_2a7al_89", __ = "_select_2a7al_98", St = {
  editor: o_,
  toolbar: l_,
  tool: a_,
  separator: i_,
  area: c_,
  source: d_,
  alignGlyph: u_,
  colorInput: f_,
  select: __
}, p_ = [
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
], jo = {
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
}, m_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], h_ = ["1", "2", "3", "4", "5", "6", "7"], g_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Fs(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function b_(e) {
  return Fs("formatBlock", `<${e}>`) || Fs("formatBlock", e);
}
function y_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const ES = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: l,
    toolbar: i = p_,
    imageUpload: d,
    readOnly: o = !1,
    disabled: a = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: u = !0
  }, x) {
    const [h, b] = q(!1), [m, g] = q(n), [_, p] = q(
      null
    ), [y, S] = q(""), [v, $] = q(""), [N, E] = q(2), [C, A] = q(2), [D, I] = q(!1), w = oe(null), O = oe(null), T = oe(n), P = B(
      (G) => u ? Sl.sanitize(G) : G,
      [u]
    );
    ve(() => {
      const G = w.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (T.current = t);
    }, [t]);
    const L = B(
      (G) => {
        T.current = P(G), r?.(T.current);
      },
      [P, r]
    ), j = B(
      (G, $e) => {
        if (o || a) return !1;
        w.current?.focus();
        const ne = Fs(G, $e);
        if (ne) {
          const Ae = w.current;
          Ae && L(Ae.innerHTML);
        }
        return ne;
      },
      [L, o, a]
    ), F = B(
      () => w.current?.innerHTML ?? T.current,
      []
    ), X = B(
      (G) => {
        j("insertHTML", G);
      },
      [j]
    ), ie = B(() => {
      w.current?.focus();
    }, []), te = Oe(
      () => ({
        execCommand: j,
        getHtml: F,
        insertHtml: X,
        focus: ie
      }),
      [j, F, X, ie]
    );
    gs(x, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = jo[G];
        !$e || o || a || j($e.command);
      },
      [j, o, a]
    ), le = B(() => {
      o || a || (h ? (b(!1), L(m)) : (g(w.current?.innerHTML ?? ""), b(!0)));
    }, [h, m, L, o, a]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || o || a) return;
        const $e = G.key.toLowerCase(), ne = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        ne && (G.preventDefault(), we(ne));
      },
      [we, o, a]
    ), W = B(() => {
      const G = w.current;
      G && L(G.innerHTML);
    }, [L]), he = B(() => {
      y.trim() && (j("createLink", y.trim()), S(""), p(null));
    }, [y, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), $(""), p(null));
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
            const fe = (ne.headers.get("content-type") ?? "").includes("application/json") ? await ne.json() : await ne.text(), Fe = (d.parseUrl ?? y_)(fe);
            j("insertImage", Fe);
          } catch ($e) {
            l?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            I(!1), p(null);
          }
        }
      },
      [d, l, j]
    ), pe = B(() => {
      const G = Math.max(1, Math.min(10, Math.floor(N) || 1)), $e = Math.max(1, Math.min(10, Math.floor(C) || 1)), ne = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: G }, () => `<tr>${ne}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Ae}</tbody></table>`), p(null);
    }, [N, C, j]), De = (G, $e) => {
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? g_ : G === "fontName" ? m_ : h_;
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
              !Fe.target.value || o || a || (G === "formatBlock" ? b_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
              !o && !a && (S(""), p("link"));
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
              !o && !a && ($(""), p("image"));
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
              !o && !a && (E(2), A(2), p("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ne = jo[G];
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
            g(G.target.value), L(G.target.value);
          }
        }
      ) : /* @__PURE__ */ s(
        "div",
        {
          ref: w,
          className: St.area,
          contentEditable: !o && !a,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": c,
          "aria-multiline": "true",
          "aria-readonly": o || void 0,
          "aria-disabled": a || void 0,
          dangerouslySetInnerHTML: { __html: T.current },
          onInput: W,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ M(
        gl,
        {
          open: _ !== null,
          onClose: () => p(null),
          title: _ === "link" ? "Insert link" : _ === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ s(an, { variant: "text", onClick: () => p(null), children: "Cancel" }),
            _ === "link" && /* @__PURE__ */ s(an, { onClick: he, children: "Insert" }),
            _ === "image" && /* @__PURE__ */ s(an, { onClick: ue, disabled: D, children: "Insert" }),
            _ === "table" && /* @__PURE__ */ s(an, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            _ === "link" && /* @__PURE__ */ s(sr, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ s(
              Jr,
              {
                id: G,
                value: y,
                placeholder: "https://",
                onChange: ($e) => S($e.target.value)
              }
            ) }),
            _ === "image" && /* @__PURE__ */ M(pt, { children: [
              /* @__PURE__ */ s(sr, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Jr,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => $($e.target.value)
                }
              ) }),
              d && /* @__PURE__ */ s(sr, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ s(
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
              D && /* @__PURE__ */ s(bl, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            _ === "table" && /* @__PURE__ */ M(pt, { children: [
              /* @__PURE__ */ s(sr, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Jr,
                {
                  id: G,
                  type: "number",
                  value: String(N),
                  onChange: ($e) => E(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ s(sr, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Jr,
                {
                  id: G,
                  type: "number",
                  value: String(C),
                  onChange: ($e) => A(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), x_ = "_popup_ve7kd_4", Ol = {
  popup: x_
}, $l = lr(null);
function TS() {
  const e = Pn($l);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Bo(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function v_({ state: e }) {
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
      className: [Ol.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Bo(e.width),
        height: Bo(e.height)
      },
      children: e.content
    }
  );
}
function CS({ children: e }) {
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
      const b = document.querySelector(`.${Ol.popup}`);
      b && !b.contains(h.target) && d();
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
  return /* @__PURE__ */ M($l.Provider, { value: a, children: [
    e,
    t && /* @__PURE__ */ s(v_, { state: t }, t.seq)
  ] });
}
const w_ = "_alert_146r9_1", k_ = "_xs_146r9_28", N_ = "_sm_146r9_38", S_ = "_lg_146r9_48", O_ = "_xl_146r9_58", $_ = "_primary_146r9_69", E_ = "_secondary_146r9_74", T_ = "_light_146r9_79", C_ = "_base_146r9_84", A_ = "_dark_146r9_89", D_ = "_info_146r9_94", M_ = "_success_146r9_99", I_ = "_warning_146r9_104", z_ = "_danger_146r9_109", L_ = "_flat_146r9_116", R_ = "_outlined_146r9_123", P_ = "_filled_146r9_132", j_ = "_text_146r9_139", B_ = "_icon_146r9_181", F_ = "_content_146r9_192", H_ = "_title_146r9_197", U_ = "_body_146r9_203", q_ = "_dismiss_146r9_209", Nn = {
  alert: w_,
  xs: k_,
  sm: N_,
  lg: S_,
  xl: O_,
  primary: $_,
  secondary: E_,
  light: T_,
  base: C_,
  dark: A_,
  info: D_,
  success: M_,
  warning: I_,
  danger: z_,
  flat: L_,
  outlined: R_,
  filled: P_,
  text: j_,
  icon: B_,
  content: F_,
  title: H_,
  body: U_,
  dismiss: q_,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, K_ = {
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
function AS({
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
  const [b, m] = q(!1);
  if (f === !1 || f === void 0 && b)
    return null;
  const g = () => {
    f === void 0 && m(!0), c?.(), u?.(!1);
  }, _ = e, p = ul(t, "filled"), y = Kr(n), S = i ?? (d ? /* @__PURE__ */ s(Me, { icon: K_[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        Nn.alert,
        Nn[_],
        Nn[p],
        y ? Nn[y] : null,
        Nn[r],
        x
      ].filter(Boolean).join(" "),
      children: [
        S != null && /* @__PURE__ */ s("span", { className: Nn.icon, "aria-hidden": "true", children: S }),
        /* @__PURE__ */ M("div", { className: Nn.content, children: [
          l && /* @__PURE__ */ s("div", { className: Nn.title, children: l }),
          o && /* @__PURE__ */ s("div", { className: Nn.body, children: o })
        ] }),
        a && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Nn.dismiss,
            onClick: g,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const W_ = "_skeleton_1xyce_1", G_ = "_text_1xyce_35", V_ = "_circle_1xyce_40", Y_ = "_rect_1xyce_44", Fo = {
  skeleton: W_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: G_,
  circle: V_,
  rect: Y_
};
function DS({
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
      className: [Fo.skeleton, Fo[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function ps(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const X_ = "_row_juebr_1", Z_ = "_start_juebr_14", J_ = "_center_juebr_18", Q_ = "_end_juebr_22", ep = "_stretch_juebr_26", tp = "_baseline_juebr_30", np = "_normal_juebr_34", rp = "_noWrap_juebr_90", sp = "_wrapReverse_juebr_94", rs = {
  row: X_,
  start: Z_,
  center: J_,
  end: Q_,
  stretch: ep,
  baseline: tp,
  normal: np,
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
  noWrap: rp,
  wrapReverse: sp
};
function Ho(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function MS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...o
}) {
  const a = e != null ? ps(e) : null, c = t != null ? ps(t) : null, f = {
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
        rs.row,
        rs[n],
        rs[`justify-${r}`],
        Ho(l) != null ? rs[Ho(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const op = "_column_sh0ss_1", lp = "_Size1_sh0ss_15", ap = "_Size2_sh0ss_24", ip = "_Size3_sh0ss_33", cp = "_Size4_sh0ss_42", dp = "_Size5_sh0ss_51", up = "_Size6_sh0ss_60", fp = "_Size7_sh0ss_69", _p = "_Size8_sh0ss_78", pp = "_Size9_sh0ss_87", mp = "_Size10_sh0ss_96", hp = "_Size11_sh0ss_105", gp = "_Size12_sh0ss_114", bp = "_Offset0_sh0ss_119", yp = "_Offset1_sh0ss_122", xp = "_Offset2_sh0ss_127", vp = "_Offset3_sh0ss_132", wp = "_Offset4_sh0ss_137", kp = "_Offset5_sh0ss_142", Np = "_Offset6_sh0ss_147", Sp = "_Offset7_sh0ss_152", Op = "_Offset8_sh0ss_157", $p = "_Offset9_sh0ss_162", Ep = "_Offset10_sh0ss_167", Tp = "_Offset11_sh0ss_172", Cp = "_Offset12_sh0ss_177", Ap = "_OrderFirst_sh0ss_182", Dp = "_OrderLast_sh0ss_185", Mp = "_Order0_sh0ss_188", Ip = "_Order1_sh0ss_191", zp = "_Order2_sh0ss_194", Lp = "_Order3_sh0ss_197", Rp = "_Order4_sh0ss_200", Pp = "_Order5_sh0ss_203", jp = "_Order6_sh0ss_206", Bp = "_Order7_sh0ss_209", Fp = "_Order8_sh0ss_212", Hp = "_Order9_sh0ss_215", Up = "_Order10_sh0ss_218", qp = "_Order11_sh0ss_221", Kp = "_Order12_sh0ss_224", Wp = "_xsSize1_sh0ss_229", Gp = "_xsSize2_sh0ss_238", Vp = "_xsSize3_sh0ss_247", Yp = "_xsSize4_sh0ss_256", Xp = "_xsSize5_sh0ss_265", Zp = "_xsSize6_sh0ss_274", Jp = "_xsSize7_sh0ss_283", Qp = "_xsSize8_sh0ss_292", em = "_xsSize9_sh0ss_301", tm = "_xsSize10_sh0ss_310", nm = "_xsSize11_sh0ss_321", rm = "_xsSize12_sh0ss_332", sm = "_xsOffset0_sh0ss_337", om = "_xsOffset1_sh0ss_340", lm = "_xsOffset2_sh0ss_345", am = "_xsOffset3_sh0ss_350", im = "_xsOffset4_sh0ss_355", cm = "_xsOffset5_sh0ss_360", dm = "_xsOffset6_sh0ss_365", um = "_xsOffset7_sh0ss_370", fm = "_xsOffset8_sh0ss_375", _m = "_xsOffset9_sh0ss_380", pm = "_xsOffset10_sh0ss_385", mm = "_xsOffset11_sh0ss_391", hm = "_xsOffset12_sh0ss_397", gm = "_xsOrderFirst_sh0ss_403", bm = "_xsOrderLast_sh0ss_406", ym = "_xsOrder0_sh0ss_409", xm = "_xsOrder1_sh0ss_412", vm = "_xsOrder2_sh0ss_415", wm = "_xsOrder3_sh0ss_418", km = "_xsOrder4_sh0ss_421", Nm = "_xsOrder5_sh0ss_424", Sm = "_xsOrder6_sh0ss_427", Om = "_xsOrder7_sh0ss_430", $m = "_xsOrder8_sh0ss_433", Em = "_xsOrder9_sh0ss_436", Tm = "_xsOrder10_sh0ss_439", Cm = "_xsOrder11_sh0ss_442", Am = "_xsOrder12_sh0ss_445", Dm = "_smSize1_sh0ss_451", Mm = "_smSize2_sh0ss_460", Im = "_smSize3_sh0ss_469", zm = "_smSize4_sh0ss_478", Lm = "_smSize5_sh0ss_487", Rm = "_smSize6_sh0ss_496", Pm = "_smSize7_sh0ss_505", jm = "_smSize8_sh0ss_514", Bm = "_smSize9_sh0ss_523", Fm = "_smSize10_sh0ss_532", Hm = "_smSize11_sh0ss_543", Um = "_smSize12_sh0ss_554", qm = "_smOffset0_sh0ss_559", Km = "_smOffset1_sh0ss_562", Wm = "_smOffset2_sh0ss_567", Gm = "_smOffset3_sh0ss_572", Vm = "_smOffset4_sh0ss_577", Ym = "_smOffset5_sh0ss_582", Xm = "_smOffset6_sh0ss_587", Zm = "_smOffset7_sh0ss_592", Jm = "_smOffset8_sh0ss_597", Qm = "_smOffset9_sh0ss_602", eh = "_smOffset10_sh0ss_607", th = "_smOffset11_sh0ss_613", nh = "_smOffset12_sh0ss_619", rh = "_smOrderFirst_sh0ss_625", sh = "_smOrderLast_sh0ss_628", oh = "_smOrder0_sh0ss_631", lh = "_smOrder1_sh0ss_634", ah = "_smOrder2_sh0ss_637", ih = "_smOrder3_sh0ss_640", ch = "_smOrder4_sh0ss_643", dh = "_smOrder5_sh0ss_646", uh = "_smOrder6_sh0ss_649", fh = "_smOrder7_sh0ss_652", _h = "_smOrder8_sh0ss_655", ph = "_smOrder9_sh0ss_658", mh = "_smOrder10_sh0ss_661", hh = "_smOrder11_sh0ss_664", gh = "_smOrder12_sh0ss_667", bh = "_mdSize1_sh0ss_673", yh = "_mdSize2_sh0ss_682", xh = "_mdSize3_sh0ss_691", vh = "_mdSize4_sh0ss_700", wh = "_mdSize5_sh0ss_709", kh = "_mdSize6_sh0ss_718", Nh = "_mdSize7_sh0ss_727", Sh = "_mdSize8_sh0ss_736", Oh = "_mdSize9_sh0ss_745", $h = "_mdSize10_sh0ss_754", Eh = "_mdSize11_sh0ss_765", Th = "_mdSize12_sh0ss_776", Ch = "_mdOffset0_sh0ss_781", Ah = "_mdOffset1_sh0ss_784", Dh = "_mdOffset2_sh0ss_789", Mh = "_mdOffset3_sh0ss_794", Ih = "_mdOffset4_sh0ss_799", zh = "_mdOffset5_sh0ss_804", Lh = "_mdOffset6_sh0ss_809", Rh = "_mdOffset7_sh0ss_814", Ph = "_mdOffset8_sh0ss_819", jh = "_mdOffset9_sh0ss_824", Bh = "_mdOffset10_sh0ss_829", Fh = "_mdOffset11_sh0ss_835", Hh = "_mdOffset12_sh0ss_841", Uh = "_mdOrderFirst_sh0ss_847", qh = "_mdOrderLast_sh0ss_850", Kh = "_mdOrder0_sh0ss_853", Wh = "_mdOrder1_sh0ss_856", Gh = "_mdOrder2_sh0ss_859", Vh = "_mdOrder3_sh0ss_862", Yh = "_mdOrder4_sh0ss_865", Xh = "_mdOrder5_sh0ss_868", Zh = "_mdOrder6_sh0ss_871", Jh = "_mdOrder7_sh0ss_874", Qh = "_mdOrder8_sh0ss_877", e1 = "_mdOrder9_sh0ss_880", t1 = "_mdOrder10_sh0ss_883", n1 = "_mdOrder11_sh0ss_886", r1 = "_mdOrder12_sh0ss_889", s1 = "_lgSize1_sh0ss_895", o1 = "_lgSize2_sh0ss_904", l1 = "_lgSize3_sh0ss_913", a1 = "_lgSize4_sh0ss_922", i1 = "_lgSize5_sh0ss_931", c1 = "_lgSize6_sh0ss_940", d1 = "_lgSize7_sh0ss_949", u1 = "_lgSize8_sh0ss_958", f1 = "_lgSize9_sh0ss_967", _1 = "_lgSize10_sh0ss_976", p1 = "_lgSize11_sh0ss_987", m1 = "_lgSize12_sh0ss_998", h1 = "_lgOffset0_sh0ss_1003", g1 = "_lgOffset1_sh0ss_1006", b1 = "_lgOffset2_sh0ss_1011", y1 = "_lgOffset3_sh0ss_1016", x1 = "_lgOffset4_sh0ss_1021", v1 = "_lgOffset5_sh0ss_1026", w1 = "_lgOffset6_sh0ss_1031", k1 = "_lgOffset7_sh0ss_1036", N1 = "_lgOffset8_sh0ss_1041", S1 = "_lgOffset9_sh0ss_1046", O1 = "_lgOffset10_sh0ss_1051", $1 = "_lgOffset11_sh0ss_1057", E1 = "_lgOffset12_sh0ss_1063", T1 = "_lgOrderFirst_sh0ss_1069", C1 = "_lgOrderLast_sh0ss_1072", A1 = "_lgOrder0_sh0ss_1075", D1 = "_lgOrder1_sh0ss_1078", M1 = "_lgOrder2_sh0ss_1081", I1 = "_lgOrder3_sh0ss_1084", z1 = "_lgOrder4_sh0ss_1087", L1 = "_lgOrder5_sh0ss_1090", R1 = "_lgOrder6_sh0ss_1093", P1 = "_lgOrder7_sh0ss_1096", j1 = "_lgOrder8_sh0ss_1099", B1 = "_lgOrder9_sh0ss_1102", F1 = "_lgOrder10_sh0ss_1105", H1 = "_lgOrder11_sh0ss_1108", U1 = "_lgOrder12_sh0ss_1111", q1 = "_xlSize1_sh0ss_1117", K1 = "_xlSize2_sh0ss_1126", W1 = "_xlSize3_sh0ss_1135", G1 = "_xlSize4_sh0ss_1144", V1 = "_xlSize5_sh0ss_1153", Y1 = "_xlSize6_sh0ss_1162", X1 = "_xlSize7_sh0ss_1171", Z1 = "_xlSize8_sh0ss_1180", J1 = "_xlSize9_sh0ss_1189", Q1 = "_xlSize10_sh0ss_1198", eg = "_xlSize11_sh0ss_1209", tg = "_xlSize12_sh0ss_1220", ng = "_xlOffset0_sh0ss_1225", rg = "_xlOffset1_sh0ss_1228", sg = "_xlOffset2_sh0ss_1233", og = "_xlOffset3_sh0ss_1238", lg = "_xlOffset4_sh0ss_1243", ag = "_xlOffset5_sh0ss_1248", ig = "_xlOffset6_sh0ss_1253", cg = "_xlOffset7_sh0ss_1258", dg = "_xlOffset8_sh0ss_1263", ug = "_xlOffset9_sh0ss_1268", fg = "_xlOffset10_sh0ss_1273", _g = "_xlOffset11_sh0ss_1279", pg = "_xlOffset12_sh0ss_1285", mg = "_xlOrderFirst_sh0ss_1291", hg = "_xlOrderLast_sh0ss_1294", gg = "_xlOrder0_sh0ss_1297", bg = "_xlOrder1_sh0ss_1300", yg = "_xlOrder2_sh0ss_1303", xg = "_xlOrder3_sh0ss_1306", vg = "_xlOrder4_sh0ss_1309", wg = "_xlOrder5_sh0ss_1312", kg = "_xlOrder6_sh0ss_1315", Ng = "_xlOrder7_sh0ss_1318", Sg = "_xlOrder8_sh0ss_1321", Og = "_xlOrder9_sh0ss_1324", $g = "_xlOrder10_sh0ss_1327", Eg = "_xlOrder11_sh0ss_1330", Tg = "_xlOrder12_sh0ss_1333", Cg = "_xxSize1_sh0ss_1339", Ag = "_xxSize2_sh0ss_1348", Dg = "_xxSize3_sh0ss_1357", Mg = "_xxSize4_sh0ss_1366", Ig = "_xxSize5_sh0ss_1375", zg = "_xxSize6_sh0ss_1384", Lg = "_xxSize7_sh0ss_1393", Rg = "_xxSize8_sh0ss_1402", Pg = "_xxSize9_sh0ss_1411", jg = "_xxSize10_sh0ss_1420", Bg = "_xxSize11_sh0ss_1431", Fg = "_xxSize12_sh0ss_1442", Hg = "_xxOffset0_sh0ss_1447", Ug = "_xxOffset1_sh0ss_1450", qg = "_xxOffset2_sh0ss_1455", Kg = "_xxOffset3_sh0ss_1460", Wg = "_xxOffset4_sh0ss_1465", Gg = "_xxOffset5_sh0ss_1470", Vg = "_xxOffset6_sh0ss_1475", Yg = "_xxOffset7_sh0ss_1480", Xg = "_xxOffset8_sh0ss_1485", Zg = "_xxOffset9_sh0ss_1490", Jg = "_xxOffset10_sh0ss_1495", Qg = "_xxOffset11_sh0ss_1501", eb = "_xxOffset12_sh0ss_1507", tb = "_xxOrderFirst_sh0ss_1513", nb = "_xxOrderLast_sh0ss_1516", rb = "_xxOrder0_sh0ss_1519", sb = "_xxOrder1_sh0ss_1522", ob = "_xxOrder2_sh0ss_1525", lb = "_xxOrder3_sh0ss_1528", ab = "_xxOrder4_sh0ss_1531", ib = "_xxOrder5_sh0ss_1534", cb = "_xxOrder6_sh0ss_1537", db = "_xxOrder7_sh0ss_1540", ub = "_xxOrder8_sh0ss_1543", fb = "_xxOrder9_sh0ss_1546", _b = "_xxOrder10_sh0ss_1549", pb = "_xxOrder11_sh0ss_1552", mb = "_xxOrder12_sh0ss_1555", ss = {
  column: op,
  Size1: lp,
  Size2: ap,
  Size3: ip,
  Size4: cp,
  Size5: dp,
  Size6: up,
  Size7: fp,
  Size8: _p,
  Size9: pp,
  Size10: mp,
  Size11: hp,
  Size12: gp,
  Offset0: bp,
  Offset1: yp,
  Offset2: xp,
  Offset3: vp,
  Offset4: wp,
  Offset5: kp,
  Offset6: Np,
  Offset7: Sp,
  Offset8: Op,
  Offset9: $p,
  Offset10: Ep,
  Offset11: Tp,
  Offset12: Cp,
  OrderFirst: Ap,
  OrderLast: Dp,
  Order0: Mp,
  Order1: Ip,
  Order2: zp,
  Order3: Lp,
  Order4: Rp,
  Order5: Pp,
  Order6: jp,
  Order7: Bp,
  Order8: Fp,
  Order9: Hp,
  Order10: Up,
  Order11: qp,
  Order12: Kp,
  xsSize1: Wp,
  xsSize2: Gp,
  xsSize3: Vp,
  xsSize4: Yp,
  xsSize5: Xp,
  xsSize6: Zp,
  xsSize7: Jp,
  xsSize8: Qp,
  xsSize9: em,
  xsSize10: tm,
  xsSize11: nm,
  xsSize12: rm,
  xsOffset0: sm,
  xsOffset1: om,
  xsOffset2: lm,
  xsOffset3: am,
  xsOffset4: im,
  xsOffset5: cm,
  xsOffset6: dm,
  xsOffset7: um,
  xsOffset8: fm,
  xsOffset9: _m,
  xsOffset10: pm,
  xsOffset11: mm,
  xsOffset12: hm,
  xsOrderFirst: gm,
  xsOrderLast: bm,
  xsOrder0: ym,
  xsOrder1: xm,
  xsOrder2: vm,
  xsOrder3: wm,
  xsOrder4: km,
  xsOrder5: Nm,
  xsOrder6: Sm,
  xsOrder7: Om,
  xsOrder8: $m,
  xsOrder9: Em,
  xsOrder10: Tm,
  xsOrder11: Cm,
  xsOrder12: Am,
  smSize1: Dm,
  smSize2: Mm,
  smSize3: Im,
  smSize4: zm,
  smSize5: Lm,
  smSize6: Rm,
  smSize7: Pm,
  smSize8: jm,
  smSize9: Bm,
  smSize10: Fm,
  smSize11: Hm,
  smSize12: Um,
  smOffset0: qm,
  smOffset1: Km,
  smOffset2: Wm,
  smOffset3: Gm,
  smOffset4: Vm,
  smOffset5: Ym,
  smOffset6: Xm,
  smOffset7: Zm,
  smOffset8: Jm,
  smOffset9: Qm,
  smOffset10: eh,
  smOffset11: th,
  smOffset12: nh,
  smOrderFirst: rh,
  smOrderLast: sh,
  smOrder0: oh,
  smOrder1: lh,
  smOrder2: ah,
  smOrder3: ih,
  smOrder4: ch,
  smOrder5: dh,
  smOrder6: uh,
  smOrder7: fh,
  smOrder8: _h,
  smOrder9: ph,
  smOrder10: mh,
  smOrder11: hh,
  smOrder12: gh,
  mdSize1: bh,
  mdSize2: yh,
  mdSize3: xh,
  mdSize4: vh,
  mdSize5: wh,
  mdSize6: kh,
  mdSize7: Nh,
  mdSize8: Sh,
  mdSize9: Oh,
  mdSize10: $h,
  mdSize11: Eh,
  mdSize12: Th,
  mdOffset0: Ch,
  mdOffset1: Ah,
  mdOffset2: Dh,
  mdOffset3: Mh,
  mdOffset4: Ih,
  mdOffset5: zh,
  mdOffset6: Lh,
  mdOffset7: Rh,
  mdOffset8: Ph,
  mdOffset9: jh,
  mdOffset10: Bh,
  mdOffset11: Fh,
  mdOffset12: Hh,
  mdOrderFirst: Uh,
  mdOrderLast: qh,
  mdOrder0: Kh,
  mdOrder1: Wh,
  mdOrder2: Gh,
  mdOrder3: Vh,
  mdOrder4: Yh,
  mdOrder5: Xh,
  mdOrder6: Zh,
  mdOrder7: Jh,
  mdOrder8: Qh,
  mdOrder9: e1,
  mdOrder10: t1,
  mdOrder11: n1,
  mdOrder12: r1,
  lgSize1: s1,
  lgSize2: o1,
  lgSize3: l1,
  lgSize4: a1,
  lgSize5: i1,
  lgSize6: c1,
  lgSize7: d1,
  lgSize8: u1,
  lgSize9: f1,
  lgSize10: _1,
  lgSize11: p1,
  lgSize12: m1,
  lgOffset0: h1,
  lgOffset1: g1,
  lgOffset2: b1,
  lgOffset3: y1,
  lgOffset4: x1,
  lgOffset5: v1,
  lgOffset6: w1,
  lgOffset7: k1,
  lgOffset8: N1,
  lgOffset9: S1,
  lgOffset10: O1,
  lgOffset11: $1,
  lgOffset12: E1,
  lgOrderFirst: T1,
  lgOrderLast: C1,
  lgOrder0: A1,
  lgOrder1: D1,
  lgOrder2: M1,
  lgOrder3: I1,
  lgOrder4: z1,
  lgOrder5: L1,
  lgOrder6: R1,
  lgOrder7: P1,
  lgOrder8: j1,
  lgOrder9: B1,
  lgOrder10: F1,
  lgOrder11: H1,
  lgOrder12: U1,
  xlSize1: q1,
  xlSize2: K1,
  xlSize3: W1,
  xlSize4: G1,
  xlSize5: V1,
  xlSize6: Y1,
  xlSize7: X1,
  xlSize8: Z1,
  xlSize9: J1,
  xlSize10: Q1,
  xlSize11: eg,
  xlSize12: tg,
  xlOffset0: ng,
  xlOffset1: rg,
  xlOffset2: sg,
  xlOffset3: og,
  xlOffset4: lg,
  xlOffset5: ag,
  xlOffset6: ig,
  xlOffset7: cg,
  xlOffset8: dg,
  xlOffset9: ug,
  xlOffset10: fg,
  xlOffset11: _g,
  xlOffset12: pg,
  xlOrderFirst: mg,
  xlOrderLast: hg,
  xlOrder0: gg,
  xlOrder1: bg,
  xlOrder2: yg,
  xlOrder3: xg,
  xlOrder4: vg,
  xlOrder5: wg,
  xlOrder6: kg,
  xlOrder7: Ng,
  xlOrder8: Sg,
  xlOrder9: Og,
  xlOrder10: $g,
  xlOrder11: Eg,
  xlOrder12: Tg,
  xxSize1: Cg,
  xxSize2: Ag,
  xxSize3: Dg,
  xxSize4: Mg,
  xxSize5: Ig,
  xxSize6: zg,
  xxSize7: Lg,
  xxSize8: Rg,
  xxSize9: Pg,
  xxSize10: jg,
  xxSize11: Bg,
  xxSize12: Fg,
  xxOffset0: Hg,
  xxOffset1: Ug,
  xxOffset2: qg,
  xxOffset3: Kg,
  xxOffset4: Wg,
  xxOffset5: Gg,
  xxOffset6: Vg,
  xxOffset7: Yg,
  xxOffset8: Xg,
  xxOffset9: Zg,
  xxOffset10: Jg,
  xxOffset11: Qg,
  xxOffset12: eb,
  xxOrderFirst: tb,
  xxOrderLast: nb,
  xxOrder0: rb,
  xxOrder1: sb,
  xxOrder2: ob,
  xxOrder3: lb,
  xxOrder4: ab,
  xxOrder5: ib,
  xxOrder6: cb,
  xxOrder7: db,
  xxOrder8: ub,
  xxOrder9: fb,
  xxOrder10: _b,
  xxOrder11: pb,
  xxOrder12: mb
}, hb = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function gb(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function bb(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function yb(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function xb(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (yb(n, t), `${e}Order${t}`);
}
function IS({ className: e, style: t, ...n }) {
  const r = [ss.column], l = { ...t };
  for (const [D, I, w, O] of hb) {
    const T = n[I], P = n[w], L = n[O];
    if (T != null) {
      gb(I, T);
      const j = ss[`${D}Size${T}`];
      j && r.push(j);
    }
    if (P != null) {
      bb(w, P);
      const j = ss[`${D}Offset${P}`];
      j && r.push(j);
    }
    if (L != null) {
      const j = ss[xb(D, L, O)];
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
    offsetLg: b,
    sizeXl: m,
    offsetXl: g,
    sizeXx: _,
    offsetXx: p,
    order: y,
    orderXs: S,
    orderSm: v,
    orderMd: $,
    orderLg: N,
    orderXl: E,
    orderXx: C,
    ...A
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...A
    }
  );
}
const vb = "_stack_bmbbp_1", Ir = {
  stack: vb,
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
function Uo(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function zS({
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
    ...r != null ? { gap: ps(r) } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Ir.stack,
        Ir[`dir-${c}`],
        Uo(n) !== "wrap" ? Ir[`wrap-${Uo(n)}`] : null,
        l != null ? Ir[`align-${l}`] : null,
        i != null ? Ir[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const wb = "_autogrid_16x9f_1", kb = {
  autogrid: wb
};
function LS({
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
    ...t != null ? { gap: ps(t) } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [kb.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
    }
  );
}
const Nb = "_layout_fxvw1_1", Sb = "_row_fxvw1_7", Ob = "_grid_fxvw1_21", $b = "_gridRight_fxvw1_27", Eb = "_gridHeader_fxvw1_31", Tb = "_gridFooter_fxvw1_36", Cb = "_gridContents_fxvw1_41", Ab = "_gridBody_fxvw1_45", An = {
  layout: Nb,
  row: Sb,
  grid: Ob,
  gridRight: $b,
  gridHeader: Eb,
  gridFooter: Tb,
  gridContents: Cb,
  gridBody: Ab
}, Db = "_footer_3be5w_1", Mb = "_sticky_3be5w_9", qo = {
  footer: Db,
  sticky: Mb
};
function Ib({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [qo.footer, e ? qo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const zb = "_header_1tw8b_1", Lb = "_sticky_1tw8b_9", Ko = {
  header: zb,
  sticky: Lb
};
function Rb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [Ko.header, e ? Ko.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Pb = "_sidebar_175d5_1", jb = "_sticky_175d5_23", Bb = "_left_175d5_41", Fb = "_right_175d5_45", Hb = "_start_175d5_50", Ub = "_end_175d5_54", qb = "_fullHeight_175d5_60", Kb = "_collapsed_175d5_64", Wb = "_responsive_175d5_72", Gb = "_overlay_175d5_80", Vb = "_mask_175d5_108", qn = {
  sidebar: Pb,
  sticky: jb,
  left: Bb,
  right: Fb,
  start: Hb,
  end: Ub,
  fullHeight: qb,
  collapsed: Kb,
  responsive: Wb,
  overlay: Gb,
  mask: Vb
};
function Yb({
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
function RS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(pt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], o = [], a = [], c = [];
  Wr.forEach(n, (x) => {
    if (!qt(x)) {
      d.push(x);
      return;
    }
    if (x.type === Rb)
      l.push(x);
    else if (x.type === Ib)
      i.push(x);
    else if (x.type === Yb) {
      const h = x, b = h.props.position;
      c.push(h), (b === "right" || b === "end" ? a : o).push(h);
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
const Xb = "_body_1ge00_4", Zb = "_bare_1ge00_12", Wo = {
  body: Xb,
  bare: Zb
};
function PS({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [Wo.body, t ? null : Wo.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const Jb = "_toggle_lxnk5_1", Qb = {
  toggle: Jb
};
function jS({
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
      className: [Qb.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ s(Me, { icon: e, size: 20 })
    }
  );
}
const ey = "_track_14127_1", ty = "_bar_14127_31", ny = "_primary_14127_39", ry = "_success_14127_43", sy = "_warning_14127_47", oy = "_danger_14127_51", ly = "_indeterminate_14127_149", ay = "_circular_14127_163", iy = "_fill_14127_203", nn = {
  track: ey,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: ty,
  primary: ny,
  success: ry,
  warning: sy,
  danger: oy,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: ly,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: ay,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: iy,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function BS({
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
    const h = typeof d == "string", b = 2, m = 10.5, g = 2 * Math.PI * m, _ = g * (l ? 0.75 : 1), p = l ? 0 : g * (1 - u / 100), y = Kr(r);
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
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: b,
              strokeDasharray: `${_} ${g}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const x = Kr(r);
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
const cy = "_wrapper_tk30z_1", dy = {
  wrapper: cy
}, uy = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], El = "dx-palette", fy = "data-palette";
function _y(e, t) {
  const n = e === void 0 ? El : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function py(e, t) {
  const n = e === void 0 ? El : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function FS({
  themes: e = uy,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = fy,
  onChange: i,
  label: d = "Theme",
  placeholder: o = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, x] = q(void 0), h = t !== void 0, b = t ?? u ?? _y(r, e) ?? n, m = b ?? "", g = oe(void 0);
  ve(() => {
    if (h) return;
    const p = document.documentElement;
    if (b === void 0) {
      g.current !== void 0 && p.getAttribute(l) === g.current && (p.removeAttribute(l), g.current = void 0);
      return;
    }
    p.setAttribute(l, b), g.current = b;
  }, [b, l, h]);
  const _ = (p) => {
    const y = p.target.value;
    h || (x(y), py(r, y)), i?.(y);
  };
  return /* @__PURE__ */ M("label", { className: [dy.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ M(or, { id: a, size: c, value: m, onChange: _, children: [
      b === void 0 && /* @__PURE__ */ s("option", { value: "", disabled: !0, children: o }),
      b !== void 0 && !e.includes(b) && /* @__PURE__ */ s("option", { value: b, children: b }),
      e.map((p) => /* @__PURE__ */ s("option", { value: p, children: p }, p))
    ] })
  ] });
}
function my(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function to(e) {
  const [t, n] = q(() => my(e));
  return ve(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const hy = "_pressed_12x15_8", gy = {
  pressed: hy
}, by = st(
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
    shade: b,
    ...m
  }, g) {
    const [_, p] = q(n), y = t ?? _, S = (v) => {
      const $ = !y;
      t === void 0 && p($), r?.($), f?.(v);
    };
    return /* @__PURE__ */ s(
      an,
      {
        ...m,
        ref: g,
        variant: y && l ? l : x,
        severity: y ? i : h,
        shade: y ? d : b,
        size: a,
        "aria-pressed": y,
        className: [y ? gy.pressed : null, c].filter(Boolean).join(" "),
        onClick: S,
        children: y && o !== void 0 ? o : u
      }
    );
  }
), Tl = "dx-theme";
function yy(e) {
  const t = e === void 0 ? Tl : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function xy(e, t) {
  const n = e === void 0 ? Tl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function HS({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: o
}) {
  const a = to("(prefers-color-scheme: dark)"), [c, f] = q(void 0), u = e !== void 0, x = e ?? c ?? yy(n) ?? t ?? "system", h = x === "system" ? a ? "dark" : "light" : x;
  return ve(() => {
    if (!u) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, u]), /* @__PURE__ */ s(
    by,
    {
      id: i,
      size: o,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: h === "dark",
      onChange: (m) => {
        const g = m ? "dark" : "light";
        u || (f(g), xy(n, g)), r?.(g);
      },
      toggleContent: /* @__PURE__ */ s(Me, { icon: "light_mode", size: o ?? "md" }),
      children: /* @__PURE__ */ s(Me, { icon: "dark_mode", size: o ?? "md" })
    }
  );
}
const Cl = "dx-palette", Al = "dx-theme", Hs = "data-palette", Us = "data-theme", qs = /* @__PURE__ */ new Set();
function vy() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Hs), t = document.documentElement.getAttribute(Us);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function no(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Hs) : document.documentElement.setAttribute(Hs, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Us) : document.documentElement.setAttribute(Us, e.appearance));
}
function Dl(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function Go(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let Vo = !1;
function xr() {
  const e = vy();
  if (!Vo) {
    Vo = !0;
    const t = Go(Cl), n = Go(Al), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && no(l), l;
  }
  return e;
}
function Ml() {
  const e = xr();
  qs.forEach((t) => t({ ...e }));
}
function Yo(e) {
  return qs.add(e), () => {
    qs.delete(e);
  };
}
function US() {
  return xr().theme;
}
function wy(e) {
  const t = xr();
  t.theme !== e && (t.theme = e, no(t), Dl(Cl, e), Ml());
}
function qS() {
  return xr().appearance;
}
function ky(e) {
  const t = xr();
  t.appearance !== e && (t.appearance = e, no(t), Dl(Al, e), Ml());
}
function KS() {
  const [, e] = q(0);
  ve(() => Yo(() => e((n) => n + 1)), []);
  const t = xr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: wy,
    setAppearance: ky,
    subscribe: Yo
  };
}
function Ny(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), a = (m, g) => m + g | 0, c = (m, g) => m << g | m >>> 32 - g;
  let f = 1732584193, u = 4023233417, x = 2562383102, h = 271733878;
  for (let m = 0; m < r; m += 64) {
    const g = [];
    for (let v = 0; v < 16; v += 1)
      g.push(i.getUint32(m + v * 4, !0));
    let _ = f, p = u, y = x, S = h;
    for (let v = 0; v < 64; v += 1) {
      let $, N;
      v < 16 ? ($ = p & y | ~p & S, N = v) : v < 32 ? ($ = S & p | ~S & y, N = (5 * v + 1) % 16) : v < 48 ? ($ = p ^ y ^ S, N = (3 * v + 5) % 16) : ($ = y ^ (p | ~S), N = 7 * v % 16), $ = a(a(a($, _), o[v]), g[N]), _ = S, S = y, y = p, p = a(p, c($, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = a(f, _), u = a(u, p), x = a(x, y), h = a(h, S);
  }
  const b = (m) => {
    let g = "";
    for (let _ = 0; _ < 4; _ += 1)
      g += `0${(m >>> _ * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return b(f) + b(u) + b(x) + b(h);
}
const Sy = "_avatar_1mhfr_1", Oy = "_xs_1mhfr_12", $y = "_sm_1mhfr_18", Ey = "_md_1mhfr_24", Ty = "_lg_1mhfr_30", Cy = "_xl_1mhfr_36", Ay = "_initials_1mhfr_42", Dy = "_image_1mhfr_57", My = "_status_1mhfr_64", Iy = "_online_1mhfr_84", zy = "_offline_1mhfr_88", Ly = "_away_1mhfr_92", ur = {
  avatar: Sy,
  xs: Oy,
  sm: $y,
  md: Ey,
  lg: Ty,
  xl: Cy,
  initials: Ay,
  image: Dy,
  status: My,
  online: Iy,
  offline: zy,
  away: Ly
}, Ry = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, us = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Py(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function jy(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return us[t % us.length] ?? us[0];
}
function WS({
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
  const c = Oe(() => e ? Py(e) : "?", [e]), f = Oe(() => e ? jy(e) : us[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const S = n.trim().toLowerCase();
    return S === "" ? void 0 : `https://secure.gravatar.com/avatar/${Ny(S)}?d=${r}&s=${Ry[d]}&r=${l}`;
  }, [t, n, r, l, d]), x = t ?? u, [h, b] = q(null), m = x != null && h !== x, g = m && i === "", _ = i ?? e ?? "avatar", p = o ? `${_}, ${o}` : _, y = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: ur.image,
        src: x,
        alt: g ? "" : o ? p : _,
        onError: () => b(x ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: ur.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        ur.avatar,
        ur[d],
        o ? ur[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : p,
      children: [
        y,
        o && /* @__PURE__ */ s("span", { className: ur.status, "aria-hidden": "true" })
      ]
    }
  );
}
const By = "_root_zzwfz_1", Fy = "_left_zzwfz_6", Hy = "_right_zzwfz_7", Uy = "_panel_zzwfz_12", qy = "_bottom_zzwfz_20", Ky = "_tabList_zzwfz_24", Wy = "_underline_zzwfz_53", Gy = "_pills_zzwfz_72", Vy = "_tab_zzwfz_24", Yy = "_active_zzwfz_113", Xy = "_disabled_zzwfz_139", Dn = {
  root: By,
  left: Fy,
  right: Hy,
  panel: Uy,
  bottom: qy,
  tabList: Ky,
  underline: Wy,
  pills: Gy,
  tab: Vy,
  active: Yy,
  disabled: Xy
};
function GS({
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
  ), u = t ?? c, x = i === "left" || i === "right", h = (g) => {
    f(g), r?.(g);
  }, b = (g) => {
    const _ = e.filter((S) => !S.disabled), p = _.findIndex((S) => S.key === u);
    let y = -1;
    g.key === "ArrowRight" || x && g.key === "ArrowDown" ? y = (p + 1) % _.length : g.key === "ArrowLeft" || x && g.key === "ArrowUp" ? y = (p - 1 + _.length) % _.length : g.key === "Home" ? y = 0 : g.key === "End" && (y = _.length - 1), y >= 0 && (g.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[y]?.key ?? "")}"]`
    )?.focus(), h(_[y]?.key ?? ""));
  }, m = e.find((g) => g.key === u);
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
            onKeyDown: b,
            children: e.map((g) => {
              const _ = g.key === u;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": _,
                  "aria-controls": `${o}-panel-${g.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Dn.tab,
                    _ ? Dn.active : null,
                    g.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => h(g.key),
                  children: g.label
                },
                g.key
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
const Zy = "_root_1l1j2_1", Jy = "_item_1l1j2_9", Qy = "_heading_1l1j2_13", e0 = "_trigger_1l1j2_17", t0 = "_disabled_1l1j2_34", n0 = "_title_1l1j2_48", r0 = "_chevron_1l1j2_52", s0 = "_open_1l1j2_59", o0 = "_content_1l1j2_63", Mn = {
  root: Zy,
  item: Jy,
  heading: Qy,
  trigger: e0,
  disabled: t0,
  title: n0,
  chevron: r0,
  open: s0,
  content: o0
};
function VS({
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
    const x = c.includes(u.key), h = `${d}-panel-${u.key}`, b = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ M("div", { className: Mn.item, children: [
      /* @__PURE__ */ s("h3", { className: Mn.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: b,
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
          "aria-labelledby": b,
          hidden: !x,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const l0 = "_textarea_l7fsl_1", a0 = "_invalid_l7fsl_27", i0 = "_xs_l7fsl_34", c0 = "_sm_l7fsl_39", d0 = "_md_l7fsl_44", u0 = "_lg_l7fsl_49", f0 = "_xl_l7fsl_54", os = {
  textarea: l0,
  invalid: a0,
  xs: i0,
  sm: c0,
  md: d0,
  lg: u0,
  xl: f0,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, YS = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          os.textarea,
          os[t],
          os[`resize-${n}`],
          r ? os.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), _0 = "_root_xyp2i_1", p0 = "_trigger_xyp2i_9", m0 = "_invalid_xyp2i_40", h0 = "_placeholder_xyp2i_47", g0 = "_label_xyp2i_54", b0 = "_chevron_xyp2i_60", y0 = "_chevronOpen_xyp2i_70", x0 = "_menu_xyp2i_74", v0 = "_option_xyp2i_89", w0 = "_disabled_xyp2i_100", k0 = "_active_xyp2i_104", N0 = "_selected_xyp2i_105", S0 = "_header_xyp2i_115", O0 = "_xs_xyp2i_122", $0 = "_sm_xyp2i_128", E0 = "_md_xyp2i_134", T0 = "_lg_xyp2i_140", C0 = "_xl_xyp2i_146", Ht = {
  root: _0,
  trigger: p0,
  invalid: m0,
  placeholder: h0,
  label: g0,
  chevron: b0,
  chevronOpen: y0,
  menu: x0,
  option: v0,
  disabled: w0,
  active: k0,
  selected: N0,
  header: S0,
  xs: O0,
  sm: $0,
  md: E0,
  lg: T0,
  xl: C0
}, A0 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function XS({
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
  const f = ot(), u = `${f}-listbox`, x = oe(null), h = oe(null), [b, m] = q(
    n
  ), [g, _] = q(!1), p = t ?? b, y = e.map(
    (w, O) => w.label === "" || w.disabled ? -1 : O
  ).filter((w) => w >= 0), S = e.findIndex(
    (w) => w.value === p
  ), [v, $] = q(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), N = B(() => {
    if (o) return;
    const w = S >= 0 && y.includes(S) ? S : y[0];
    $(w ?? -1), _(!0);
  }, [o, S, y]), E = B(() => {
    _(!1), h.current?.focus();
  }, []);
  ve(() => {
    if (!g) return;
    const w = (O) => {
      x.current && !x.current.contains(O.target) && _(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [g]);
  const C = (w) => {
    m(w), r?.(w), _(!1), h.current?.focus();
  }, A = (w) => {
    if (y.length === 0) return;
    const O = y.includes(v) ? y.indexOf(v) : 0, T = y[(O + w + y.length) % y.length];
    T != null && $(T);
  }, D = (w) => {
    if (!g) {
      w.key === "ArrowDown" && (w.preventDefault(), N());
      return;
    }
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), A(1);
        break;
      case "ArrowUp":
        w.preventDefault(), A(-1);
        break;
      case "Home":
        w.preventDefault(), y[0] != null && $(y[0]);
        break;
      case "End":
        w.preventDefault(), y[y.length - 1] != null && $(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        w.preventDefault(), v >= 0 && e[v] && y.includes(v) && C(e[v]?.value ?? "");
        break;
      case "Escape":
        w.preventDefault(), E();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, I = e.find(
    (w) => w.value === p
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
            "aria-expanded": g,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              Ht.trigger,
              Ht[i],
              g ? Ht.open : null,
              d ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? _(!1) : N(),
            ...c,
            children: [
              /* @__PURE__ */ s("span", { className: I ? Ht.label : Ht.placeholder, children: I ? I.label : l }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [Ht.chevron, g ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: A0 },
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
            "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
            className: Ht.menu,
            children: e.map(
              (w, O) => w.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: Ht.header,
                  role: "presentation",
                  children: w.value
                },
                w.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${f}-option-${O}`,
                  role: "option",
                  "aria-selected": w.value === p,
                  "aria-disabled": w.disabled || void 0,
                  className: [
                    Ht.option,
                    O === v ? Ht.active : null,
                    w.value === p ? Ht.selected : null,
                    w.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    w.disabled || C(w.value);
                  },
                  onMouseEnter: () => {
                    !w.disabled && w.label !== "" && $(O);
                  },
                  children: w.label
                },
                w.value
              )
            )
          }
        )
      ]
    }
  );
}
const D0 = "_root_1ma8a_1", M0 = "_wrap_1ma8a_9", I0 = "_input_1ma8a_26", z0 = "_invalid_1ma8a_31", L0 = "_clear_1ma8a_58", R0 = "_menu_1ma8a_83", P0 = "_option_1ma8a_98", j0 = "_disabled_1ma8a_109", B0 = "_active_1ma8a_113", F0 = "_empty_1ma8a_123", H0 = "_xs_1ma8a_129", U0 = "_sm_1ma8a_136", q0 = "_md_1ma8a_143", K0 = "_lg_1ma8a_150", W0 = "_xl_1ma8a_157", dn = {
  root: D0,
  wrap: M0,
  input: I0,
  invalid: z0,
  clear: L0,
  menu: R0,
  option: P0,
  disabled: j0,
  active: B0,
  empty: F0,
  xs: H0,
  sm: U0,
  md: q0,
  lg: K0,
  xl: W0
}, G0 = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function ZS({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: c = G0,
  className: f,
  ...u
}) {
  const x = ot(), h = `${x}-listbox`, b = oe(null), m = oe(null), [g, _] = q(n), [p, y] = q(!1), S = t ?? g, v = Oe(
    () => S.trim() === "" ? [...e] : e.filter((L) => c(L, S)),
    [e, S, c]
  ), $ = v.map((L, j) => L.disabled ? -1 : j).filter((L) => L >= 0), [N, E] = q(-1), C = (L) => {
    _(L), r?.(L);
  }, A = (L) => {
    C(L.label), l?.(L.value, L), y(!1);
  }, D = (L) => {
    if ($.length === 0) return;
    const j = $.includes(N) ? $.indexOf(N) : L === 1 ? -1 : 0, F = $[(j + L + $.length) % $.length];
    F != null && E(F);
  }, I = (L) => {
    a || (C(L.target.value), y(!0), E(-1));
  }, w = () => {
    a || S !== "" && y(!0);
  }, O = (L) => {
    b.current && !b.current.contains(L.relatedTarget) && y(!1);
  }, T = (L) => {
    if (!a)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), p ? D(1) : (y(!0), E($[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), p && D(-1);
          break;
        case "Enter":
          L.preventDefault(), p && N >= 0 && v[N] && A(v[N]);
          break;
        case "Escape":
          L.preventDefault(), y(!1);
          break;
        case "Tab":
          p && N >= 0 && v[N] && A(v[N]), y(!1);
          break;
      }
  }, P = () => {
    C(""), E(-1), y(!0), m.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: b,
      className: [dn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [dn.wrap, dn[d], o ? dn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": p,
                  "aria-controls": h,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && N >= 0 ? `${x}-option-${N}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: S,
                  placeholder: i,
                  className: dn.input,
                  onChange: I,
                  onFocus: w,
                  onBlur: O,
                  onKeyDown: T,
                  ...u
                }
              ),
              S !== "" && !a && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: dn.clear,
                  "aria-label": "Clear",
                  onClick: P,
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ s("div", { id: h, className: dn.menu, children: /* @__PURE__ */ s("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ s("div", { id: h, role: "listbox", className: dn.menu, children: v.map((L, j) => /* @__PURE__ */ s(
          "div",
          {
            id: `${x}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              dn.option,
              j === N ? dn.active : null,
              L.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              L.disabled || A(L);
            },
            onMouseDown: (F) => {
              F.preventDefault(), L.disabled || A(L);
            },
            onMouseEnter: () => {
              L.disabled || E(j);
            },
            children: L.label
          },
          L.value
        )) }))
      ]
    }
  );
}
const V0 = "_box_muvqe_1", Y0 = "_option_muvqe_12", X0 = "_disabled_muvqe_23", Z0 = "_selected_muvqe_27", J0 = "_active_muvqe_33", zr = {
  box: V0,
  option: Y0,
  disabled: X0,
  selected: Z0,
  active: J0
};
function JS({
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
  }), u = t == null ? c : Array.isArray(t) ? t : [t], x = e.findIndex((v) => !v.disabled), [h, b] = q(
    () => x >= 0 ? x : 0
  ), m = oe(""), g = oe(null), _ = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, p = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), y = (v) => {
    const $ = e[v];
    if (!(!$ || $.disabled))
      if (b(v), r) {
        const N = u.includes($.value) ? u.filter((E) => E !== $.value) : [...u, $.value];
        _(N);
      } else
        _([$.value]);
  }, S = (v) => {
    if (p.length === 0) return;
    const $ = p.includes(h) ? h : p[0];
    let N = -1;
    if (v.key === "ArrowDown")
      N = p[(p.indexOf($) + 1) % p.length];
    else if (v.key === "ArrowUp")
      N = p[(p.indexOf($) - 1 + p.length) % p.length];
    else if (v.key === "Home")
      N = p[0];
    else if (v.key === "End")
      N = p[p.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), y($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const E = (m.current + v.key).toLowerCase();
      m.current = E, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const C = [...p, ...p], A = p.indexOf($) + 1, D = C.slice(A).find((I) => e[I]?.label.toLowerCase().startsWith(E));
      D != null && b(D);
      return;
    }
    N >= 0 && (v.preventDefault(), b(N), r || _([e[N]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[h] ? `${a}-option-${h}` : void 0,
      style: d,
      className: [zr.box, i].filter(Boolean).join(" "),
      onKeyDown: S,
      ...o,
      children: e.map((v, $) => {
        const N = u.includes(v.value), E = $ === h;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${a}-option-${$}`,
            role: "option",
            "aria-selected": N,
            "aria-disabled": v.disabled || void 0,
            className: [
              zr.option,
              N ? zr.selected : null,
              E ? zr.active : null,
              v.disabled ? zr.disabled : null
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
const Q0 = "_group_oinj7_1", ex = "_legend_oinj7_8", tx = "_list_oinj7_16", nx = "_item_oinj7_25", rx = "_disabled_oinj7_32", sx = "_label_oinj7_37", ox = "_checkbox_oinj7_48", Zn = {
  group: Q0,
  legend: ex,
  list: tx,
  item: nx,
  disabled: rx,
  label: sx,
  checkbox: ox
};
function QS({
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
    const h = x ? [...c, u] : c.filter((b) => b !== u);
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
const lx = "_group_46668_1", ax = "_legend_46668_8", ix = "_list_46668_16", cx = "_item_46668_25", dx = "_disabled_46668_32", ux = "_label_46668_37", fx = "_radio_46668_48", Jn = {
  group: lx,
  legend: ax,
  list: ix,
  item: cx,
  disabled: dx,
  label: ux,
  radio: fx
};
function eO({
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
const _x = "_bar_9zyxn_1", px = "_vertical_9zyxn_12", mx = "_option_9zyxn_17", hx = "_selected_9zyxn_40", gx = "_sm_9zyxn_56", bx = "_md_9zyxn_62", yx = "_lg_9zyxn_68", fr = {
  bar: _x,
  vertical: px,
  option: mx,
  selected: hx,
  sm: gx,
  md: bx,
  lg: yx
};
function Xo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function tO(e) {
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
  } = e, f = l ?? !1, [u, x] = q(r ?? (f ? [] : t[0]?.value)), h = n ?? u, b = l === !0 || l === void 0 && Array.isArray(h), m = (_) => {
    if (!b) {
      x(_), d?.(_);
      return;
    }
    const p = Xo(h), y = p.includes(_) ? p.filter((S) => S !== _) : [...p, _];
    x(y), d?.(y);
  }, g = (_) => b ? Xo(h).includes(_) : h === _;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        fr.bar,
        fr[o],
        i === "vertical" ? fr.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((_) => {
        const p = g(_.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: _.disabled,
            className: [
              fr.option,
              p ? fr.selected : null,
              _.disabled ? fr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const xx = "_root_11hdr_1", vx = "_action_11hdr_10", wx = "_caret_11hdr_15", kx = "_sm_11hdr_49", Nx = "_md_11hdr_53", Sx = "_lg_11hdr_57", Ox = "_fullWidth_11hdr_62", $x = "_menu_11hdr_70", Ex = "_item_11hdr_83", Tx = "_itemIcon_11hdr_105", Cx = "_disabled_11hdr_110", Ax = "_active_11hdr_114", Dx = "_danger_11hdr_123", yn = {
  root: xx,
  action: vx,
  caret: wx,
  sm: kx,
  md: Nx,
  lg: Sx,
  fullWidth: Ox,
  menu: $x,
  item: Ex,
  itemIcon: Tx,
  disabled: Cx,
  active: Ax,
  danger: Dx
}, nO = st(
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
    openAriaLabel: b = "More actions",
    ...m
  }, g) {
    const p = `${ot()}-menu`, y = oe(null), S = oe(null), v = oe([]), [$, N] = q(!1), [E, C] = q(-1), A = u || a, D = Oe(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), I = B(() => {
      A || (C(D[0] ?? -1), N(!0));
    }, [A, D]), w = B(() => {
      N(!1), S.current?.focus();
    }, []);
    ve(() => {
      if (!$) return;
      const F = (X) => {
        y.current && !y.current.contains(X.target) && N(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [$]), ve(() => {
      $ && (A || !c) && N(!1);
    }, [$, A, c]);
    const O = oe($);
    if (ve(() => {
      const F = O.current;
      if (O.current = $, !$ || F) return;
      const X = D.includes(E) ? E : D[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [$, E, D]), c === !1) return null;
    const T = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), N(!1), S.current?.focus());
    }, P = (F) => {
      if (D.length === 0) return;
      const X = D.includes(E) ? D.indexOf(E) : F === 1 ? -1 : 0, ie = D[(X + F + D.length) % D.length];
      ie != null && (C(ie), v.current[ie]?.focus());
    }, L = (F) => {
      const X = F === "first" ? D[0] : D[D.length - 1];
      X != null && (C(X), v.current[X]?.focus());
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
          F.preventDefault(), w();
          break;
        case "Tab":
          N(!1);
          break;
      }
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (F) => {
          y.current = F, typeof g == "function" ? g(F) : g && (g.current = F);
        },
        className: [
          yn.root,
          yn[o],
          f ? yn.fullWidth : null,
          x
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            an,
            {
              className: yn.action,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              loading: a,
              disabled: u,
              "aria-label": h,
              onClick: () => {
                $ && N(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ s(
            an,
            {
              ref: S,
              className: yn.caret,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              disabled: A,
              "aria-haspopup": "menu",
              "aria-expanded": $,
              "aria-controls": p,
              "aria-label": b,
              onClick: () => $ ? N(!1) : I(),
              onKeyDown: (F) => {
                !$ && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), I());
              },
              children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          $ && /* @__PURE__ */ s(
            "div",
            {
              id: p,
              role: "menu",
              tabIndex: -1,
              "aria-label": b,
              className: yn.menu,
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
                  tabIndex: X === E ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    yn.item,
                    X === E ? yn.active : null,
                    F.danger ? yn.danger : null,
                    F.disabled ? yn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(X),
                  onMouseEnter: () => {
                    F.disabled || C(X);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ s("span", { className: yn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: F.icon, size: 16 }) }) : null,
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
), Mx = "_mask_rcv90_1", Ix = "_invalid_rcv90_31", zx = "_xs_rcv90_38", Lx = "_sm_rcv90_44", Rx = "_md_rcv90_50", Px = "_lg_rcv90_56", jx = "_xl_rcv90_62", Is = {
  mask: Mx,
  invalid: Ix,
  xs: zx,
  sm: Lx,
  md: Rx,
  lg: Px,
  xl: jx
};
function Zo(e, t) {
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
const rO = st(function({
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
  const [u, x] = q(i ?? ""), h = l !== void 0, b = h ? l ?? "" : u, m = (p) => {
    const y = Zo(p, r);
    return h || x(y), d?.(y), y;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (p) => {
        m(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const y = p.currentTarget.selectionStart ?? b.length, S = b[y - 1];
          if (S !== void 0 && !/\d/.test(S)) {
            p.preventDefault();
            const v = b.replace(/\D/g, "");
            m(Zo(v.slice(0, -1), r));
          }
        }
        a?.(p);
      },
      className: [
        Is.mask,
        Is[t],
        n ? Is.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), Bx = "_wrapper_12jdf_1", Fx = "_input_12jdf_8", Hx = "_invalid_12jdf_38", Ux = "_button_12jdf_45", qx = "_up_12jdf_77", Kx = "_down_12jdf_82", Wx = "_xs_12jdf_87", Gx = "_sm_12jdf_93", Vx = "_md_12jdf_99", Yx = "_lg_12jdf_105", Xx = "_xl_12jdf_111", Kn = {
  wrapper: Bx,
  input: Fx,
  invalid: Hx,
  button: Ux,
  up: qx,
  down: Kx,
  xs: Wx,
  sm: Gx,
  md: Vx,
  lg: Yx,
  xl: Xx
};
function Ks(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Zx(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Il(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Jx(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Qx(e, t, n, r, l) {
  const d = Ks(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * l : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / l) * l : o = n + Math.floor((d - n - 1e-9) / l) * l, Il(o, n, r);
}
const sO = st(
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
    onKeyDown: b,
    ...m
  }, g) {
    const [_, p] = q(
      d != null ? String(d) : ""
    ), y = i !== void 0, S = y ? i == null ? "" : String(i) : _, v = (D) => {
      y || p(D), o?.(Ks(D));
    }, $ = (D) => {
      y || p(String(D)), o?.(D);
    }, N = (D) => {
      l || $(Qx(S, D, a, c, f));
    }, E = (D) => {
      v(Zx(D.target.value));
    }, C = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), N(1)) : D.key === "ArrowDown" && (D.preventDefault(), N(-1)), b?.(D);
    }, A = (D) => {
      const I = Ks(S);
      I === null ? (y || p(""), o?.(null)) : $(Il(Jx(I, a, f), a, c)), h?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Kn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: g,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: S,
            disabled: l,
            onChange: E,
            onKeyDown: C,
            onBlur: A,
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
            onClick: () => N(1),
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
            onClick: () => N(-1),
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
}, ev = [
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
function Ws(e) {
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
function tv({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function nv({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, i = n / 255, d = Math.max(r, l, i), o = Math.min(r, l, i), a = d - o;
  let c = 0;
  return a !== 0 && (d === r ? c = (l - i) / a % 6 : d === l ? c = (i - r) / a + 2 : c = (r - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function _r({ h: e, s: t, v: n }) {
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
function rv(e) {
  const t = Ws(e);
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
function Jo({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const oO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = ev,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: x,
  onChange: h,
  onValueChange: b,
  onOpen: m,
  onClose: g
}) => {
  const _ = oe(null), p = oe(null), y = oe(null), S = oe(null), v = oe(null), $ = ot(), N = oe(null), E = Oe(
    () => rv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, A] = q(!1), [D, I] = q(null), w = D ?? E, O = Oe(() => nv(w), [w]), T = B(
    (Z) => {
      const z = Jo(Z);
      h?.(z), b?.(z);
    },
    [h, b]
  ), P = B(
    (Z, z) => {
      I(Z), z && !i && T(Z);
    },
    [i, T]
  ), L = B(() => {
    A(!1), I(null), g?.(), p.current?.focus();
  }, [g]), j = B(() => {
    o || (I(E), A(!0), m?.());
  }, [o, E, m]), F = B(() => {
    C ? L() : j();
  }, [C, L, j]), X = B(
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
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), N.current = "sat";
    const z = X(Z.clientX, Z.clientY);
    P({ ..._r(z), a: w.a }, !0);
  }, we = (Z) => {
    if (N.current !== "sat") return;
    Z.preventDefault();
    const z = X(Z.clientX, Z.clientY);
    P({ ..._r(z), a: w.a }, !0);
  }, le = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), N.current = "hue";
    const z = ie(Z.clientX, S.current);
    P(
      { ..._r({ ...O, h: z * 360 }), a: w.a },
      !0
    );
  }, _e = (Z) => {
    if (N.current !== "hue") return;
    Z.preventDefault();
    const z = ie(Z.clientX, S.current);
    P(
      { ..._r({ ...O, h: z * 360 }), a: w.a },
      !0
    );
  }, W = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), N.current = "alpha";
    const z = ie(Z.clientX, v.current);
    P({ ...w, a: z }, !0);
  }, he = (Z) => {
    if (N.current !== "alpha") return;
    Z.preventDefault();
    const z = ie(Z.clientX, v.current);
    P({ ...w, a: z }, !0);
  }, ue = () => {
    N.current = null;
  }, ye = B(
    (Z, z) => {
      const Y = {
        h: O.h,
        s: on(O.s + Z, 0, 1),
        v: on(O.v + z, 0, 1)
      };
      P({ ..._r(Y), a: w.a }, !0);
    },
    [O, w.a, P]
  ), pe = B(
    (Z) => {
      const z = (O.h + Z + 360) % 360;
      P({ ..._r({ ...O, h: z }), a: w.a }, !0);
    },
    [O, w.a, P]
  ), De = B(
    (Z) => {
      P({ ...w, a: on(w.a + Z, 0, 1) }, !0);
    },
    [w, P]
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
      const ae = Ws(z);
      ae && P({ ...ae, a: w.a }, !0);
      return;
    }
    const Y = z.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const ae = Y.includes(".") ? on(Q, 0, 1) : on(Q / 100, 0, 1);
      P({ ...w, a: ae }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    P(
      { ...w, [Z]: on(Q, 0, ge[Z]) },
      !0
    );
  }, Ae = () => {
    D && (T(D), I(null), A(!1), g?.(), p.current?.focus());
  };
  ve(() => {
    if (!C) return;
    const Z = (z) => {
      _.current && !_.current.contains(z.target) && L();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [C, L]), ve(() => {
    if (!C) return;
    const Z = (z) => {
      z.key === "Escape" && L();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [C, L]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = Jo(w), Ge = tv(w), Je = { x: O.s * 100, y: (1 - O.v) * 100 }, At = O.h / 360 * 100, lt = w.a * 100, yt = /* @__PURE__ */ M("div", { className: Re["dx-colorpicker-panel"], children: [
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
        ref: S,
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
            value: w.r,
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
            value: w.g,
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
            value: w.b,
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
            value: Math.round(w.a * 100),
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
          const z = Ws(Z);
          i ? P({ ...z, a: w.a }, !1) : (I(null), T({ ...z, a: w.a }), A(!1), g?.(), p.current?.focus());
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
      ref: _,
      className: [
        Re["dx-colorpicker"],
        C ? Re["dx-colorpicker-open"] : null,
        a ? Re["dx-colorpicker-invalid"] : null,
        x
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: p,
            type: "button",
            className: [Re["dx-colorpicker-trigger"], fe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": C,
            "aria-controls": $,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && C && (Z.preventDefault(), L());
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
        C && /* @__PURE__ */ s(
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
}, sv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function ov(e, t) {
  const n = Yt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function Gs(e) {
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
function ls(e, t) {
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
function Qo(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const el = {
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
}, lv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], av = ["y", "M", "d", "H", "m", "s"];
function as(e, t, n) {
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
    for (const a of lv)
      if (t.startsWith(a, i)) {
        l += el[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[i];
    if (av.includes(o)) {
      l += el[o](e, r, n), i += 1;
      continue;
    }
    l += o, i += 1;
  }
  return l;
}
const iv = [
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
function cv(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const a of iv)
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
function Lr(e, t) {
  const n = Gs(e);
  return n || cv(e, t);
}
function dv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const uv = ["hour", "minute", "second"];
function is(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const lO = st(
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
    onChange: b,
    onValueChange: m,
    onOpen: g,
    onClose: _,
    disabled: p,
    readOnly: y,
    placeholder: S,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: N,
    tabIndex: E,
    className: C,
    onBlur: A,
    onKeyDown: D,
    ...I
  }, w) {
    const O = oe(null), T = oe(null), P = oe(null), L = oe(null), j = ot(), F = r !== void 0, [X, ie] = q(
      () => l != null ? as(
        Lr(l, i) ?? Wn(),
        i,
        h
      ) : ""
    ), [te, we] = q(!1), [le, _e] = q(null), [W, he] = q(() => {
      const V = r !== void 0 ? r ?? "" : l ?? "";
      if (V) {
        const me = Lr(V, i);
        if (me) return me;
      }
      return Wn();
    }), ue = Oe(() => d ? Gs(d) : null, [d]), ye = Oe(() => o ? Gs(o) : null, [o]), pe = Oe(
      () => new Set(x ?? []),
      [x]
    ), De = Oe(() => {
      const V = F ? r ?? "" : X;
      return V ? Lr(V, i) : null;
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
        F || ie(V ? as(V, i, h) : "");
        const me = V ? ov(V, a) : "";
        b?.(me), m?.(me);
      },
      [F, i, h, a, b, m]
    ), Ae = B(
      (V) => {
        T.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), _?.(), u || P.current?.focus();
    }, [u, _]), Fe = B(() => {
      if (p) return;
      const V = De ?? Wn();
      _e(V), he($e(V)), we(!0), g?.();
    }, [p, De, $e, g]), Ge = B(() => {
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
      const V = Lr(X, i);
      ne(V ? dv(V, ue, ye) : null);
    }, [te, X, i, ue, ye, ne]), Y = (V) => {
      const me = V.target.value;
      F || ie(me), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? le && (ne(le), fe()) : z()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), D?.(V);
    }, ge = (V) => {
      z(), A?.(V);
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
          me = In(W, -Qo(W)), V.preventDefault();
          break;
        case "End":
          me = In(W, 6 - Qo(W)), V.preventDefault();
          break;
        case "PageUp":
          me = ls(W, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          me = ls(W, V.shiftKey ? 12 : 1), V.preventDefault();
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
      F || ie(""), b?.(""), m?.(""), T.current?.focus();
    }, je = te && le ? as(le, i, h) : F ? r ? as(
      Lr(r, i) ?? Wn(),
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
    for (let V = 0; V < sv; V += 1)
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
                  const V = $e(ls(W, -1));
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
                  const V = $e(ls(W, 1));
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
            uv.map((V) => /* @__PURE__ */ M("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-time-label"], children: is(V) }),
              /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": is(V),
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
                      "aria-label": `Increase ${is(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${is(V).toLowerCase()}`,
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
          C
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
                disabled: p,
                readOnly: y,
                placeholder: S,
                tabIndex: E,
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
            f && !p && Ze && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  c ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": N ?? "Clear",
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
                disabled: p,
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
}, aO = ({
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
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), b = B(
    (p) => {
      c?.(p), f?.(p);
    },
    [c, f]
  ), m = B(
    (p) => {
      n || r || (b(p), x(p));
    },
    [n, r, b]
  ), g = (p) => {
    if (n || r) return;
    const y = u > 0 ? u : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), m(h(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), m(h(y - 1));
        break;
      case "Home":
        p.preventDefault(), m(1);
        break;
      case "End":
        p.preventDefault(), m(t);
        break;
    }
  }, _ = Array.from({ length: t }, (p, y) => y + 1);
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
      onKeyDown: g,
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
        _.map((p) => {
          const y = p <= e, S = p === (e > 0 ? e : u);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${d} ${p}`,
              tabIndex: S ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Gn["dx-rating-item"],
                y ? Gn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(p),
              onFocus: () => x(p),
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
            p
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
const iO = ({
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
  onChange: b,
  onInput: m,
  onValueChange: g,
  onInputChange: _
}) => {
  const p = oe(null), y = oe(
    null
  ), [S, v] = q(null), $ = S ?? e, N = Oe(
    () => Sn($, r, l),
    [$, r, l]
  ), E = Oe(
    () => Sn(d ? t : N, r, l),
    [d, t, N, r, l]
  ), C = Oe(
    () => Sn(d ? Math.max(n, E) : N, r, l),
    [d, n, E, N, r, l]
  ), A = B(
    (W) => {
      const he = l - r;
      return he <= 0 ? 0 : (Sn(W, r, l) - r) / he * 100;
    },
    [r, l]
  ), D = B(
    (W, he) => {
      const ue = p.current;
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
      typeof W == "number" && v(W), b?.(W), g?.(W);
    },
    [b, g]
  ), w = B(
    (W) => {
      typeof W == "number" && v(W), m?.(W), _?.(W);
    },
    [m, _]
  ), O = B(
    (W, he, ue) => {
      const ye = D(he, ue);
      let pe;
      d ? W === "min" ? pe = { min: Math.min(ye, C), max: C } : pe = { min: E, max: Math.max(ye, E) } : pe = ye, w(pe), y.current === null && I(pe);
    },
    [d, D, E, C, w, I]
  ), T = B(
    (W, he) => {
      const ue = (i > 0 ? i : 1) * he;
      let ye;
      d ? W === "min" ? ye = {
        min: Sn(E + ue, r, C),
        max: C
      } : ye = {
        min: E,
        max: Sn(C + ue, E, l)
      } : ye = Sn(N + ue, r, l), I(ye);
    },
    [d, i, r, l, E, C, N, I]
  ), P = (W, he) => {
    if (!a)
      switch (he.key) {
        case "ArrowLeft":
        case "ArrowDown":
          he.preventDefault(), T(W, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          he.preventDefault(), T(W, 1);
          break;
        case "Home":
          he.preventDefault(), I(d ? W === "min" ? { min: r, max: C } : { min: E, max: E } : r);
          break;
        case "End":
          he.preventDefault(), I(d ? W === "min" ? { min: C, max: C } : { min: E, max: l } : l);
          break;
      }
  }, L = (W, he) => {
    a || (he.preventDefault(), he.currentTarget.focus(), typeof he.currentTarget.setPointerCapture == "function" && he.currentTarget.setPointerCapture(he.pointerId), y.current = { key: W, pointerId: he.pointerId }, O(W, he.clientX, he.clientY));
  }, j = (W) => {
    !y.current || y.current.pointerId !== W.pointerId || (W.preventDefault(), O(y.current.key, W.clientX, W.clientY));
  }, F = (W) => {
    !y.current || y.current.pointerId !== W.pointerId || (y.current = null, W.preventDefault(), I(d ? { min: E, max: C } : N));
  }, [X, ie] = q(null), te = A(E), we = A(C), le = d ? te : 0, _e = we;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Qn["dx-slider"],
        o === "vertical" ? Qn["dx-slider-vertical"] : null,
        a ? Qn["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: p, className: Qn["dx-slider-track"], children: [
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
            "aria-valuenow": Math.round(E),
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
            "aria-valuenow": Math.round(C),
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
}, fv = "-10675199.02:48:05.4775808", _v = "10675199.02:48:05.4775808", Ln = 86400, Rn = 3600, xn = 60, zs = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, tl = {
  days: Ln,
  hours: Rn,
  minutes: xn,
  seconds: 1
}, pv = {
  day: Ln,
  hour: Rn,
  minute: xn,
  second: 1
};
function pr(e) {
  return String(e).padStart(2, "0");
}
function Ur(e) {
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
function mv(e) {
  return e.days * Ln + e.hours * Rn + e.minutes * xn + e.seconds;
}
function nl(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Ln);
  t %= Ln;
  const r = Math.floor(t / Rn);
  t %= Rn;
  const l = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Vs(e, t) {
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
      return `${u}${x}${pr(c)}`;
    case "minute":
      return `${u}${x}${pr(c)}:${pr(o)}`;
    default:
      return `${u}${x}${pr(c)}:${pr(o)}:${pr(l)}`;
  }
}
function rl(e, t = "second") {
  const n = Ur(e);
  return n === null ? "" : Vs(n, t);
}
function Ls(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const cO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = fv,
    max: d = _v,
    step: o = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: x = !0,
    allowClear: h = !1,
    inline: b = !1,
    onChange: m,
    onValueChange: g,
    onOpen: _,
    onClose: p,
    disabled: y,
    placeholder: S,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: N,
    tabIndex: E,
    className: C,
    onBlur: A,
    onKeyDown: D,
    ...I
  }, w) {
    const O = oe(null), T = oe(null), P = oe(null), L = ot(), j = r !== void 0, [F, X] = q(
      () => l != null ? rl(l, a) : ""
    ), [ie, te] = q(!1), [we, le] = q(null), [_e, W] = q(null), he = Oe(
      () => Ur(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => Ur(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ye = Oe(() => {
      const re = Number.parseFloat(o);
      return Number.isNaN(re) || re <= 0 ? 1 : re;
    }, [o]), pe = Oe(() => {
      const re = j ? r ?? "" : F;
      return re ? Ur(re) : null;
    }, [r, F, j]), De = B(
      (re) => {
        const Le = re === null ? "" : Vs(re, a);
        j || X(Le), m?.(Le), g?.(Le);
      },
      [j, a, m, g]
    ), G = B(
      (re) => {
        re && we !== null && De(we), te(!1), le(null), W(null), p?.(), b || P.current?.focus();
      },
      [b, we, De, p]
    ), $e = B(() => {
      y || (le(pe ?? 0), te(!0), _?.());
    }, [y, pe, _]), ne = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (re, Le) => {
        le((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * ye * tl[re];
          return Ls(xt, he, ue);
        });
      },
      [pe, ye, he, ue]
    ), fe = B(
      (re) => {
        const Le = _e?.[re];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        le((xt) => {
          const Ie = xt ?? pe ?? 0, Ke = nl(Ie);
          Ke[re] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * mv(Ke);
          return Ls($t, he, ue);
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
      const re = Ur(F);
      De(re !== null ? Ls(re, he, ue) : null);
    }, [ie, F, he, ue, De]), At = (re) => {
      j || X(re.target.value);
    }, lt = (re) => {
      re.key === "Enter" ? (re.preventDefault(), ie ? G(!0) : Je()) : re.key === "Escape" && ie ? (re.preventDefault(), G(!1)) : re.key === "ArrowDown" && !ie ? (re.preventDefault(), $e()) : re.key === "Tab" && ie && te(!1), D?.(re);
    }, yt = (re) => {
      Je(), A?.(re);
    }, Z = () => {
      j || X(""), m?.(""), g?.(""), T.current?.focus();
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
      if (b && we !== null) {
        const re = pe;
        (re === null || Math.abs(we - re) > 1e-9) && De(we);
      }
    }, [b, we, pe, De]);
    const z = B(
      (re) => {
        T.current = re, typeof w == "function" ? w(re) : w && (w.current = re);
      },
      [w]
    ), Y = j ? r ? rl(r, a) : "" : F, Q = j ? !!r : F.length > 0, ge = b || ie, ae = we ?? pe ?? 0, Ee = nl(ae), je = pv[a], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (re) => tl[re] >= je && (re === "days" ? c : re === "hours" ? f : re === "minutes" ? u : x)
    ), nt = t === "xs" ? dt["dx-timespanpicker-input--xs"] : t === "sm" ? dt["dx-timespanpicker-input--sm"] : t === "lg" ? dt["dx-timespanpicker-input--lg"] : t === "xl" ? dt["dx-timespanpicker-input--xl"] : dt["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ M("div", { className: dt["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-preview"], "aria-live": "polite", children: Vs(ae, a) }),
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-units"], children: Qe.map((re) => /* @__PURE__ */ M("label", { className: dt["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: dt["dx-timespanpicker-unit-label"], children: zs[re] }),
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
                "aria-label": `Increase ${zs[re].toLowerCase()}`,
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
                "aria-label": `Decrease ${zs[re].toLowerCase()}`,
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
          b ? dt["dx-timespanpicker-inline"] : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: y,
                placeholder: S,
                tabIndex: E,
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
                "aria-label": N ?? "Clear",
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
), hv = "_wrapper_ou9x5_1", gv = "_cells_ou9x5_8", bv = "_cell_ou9x5_8", yv = "_invalid_ou9x5_63", xv = "_live_ou9x5_73", er = {
  wrapper: hv,
  cells: gv,
  cell: bv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: yv,
  live: xv
};
function sl(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const dO = st(
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
    const b = ot(), m = n !== void 0, [g, _] = q(sl(r).join("")), p = m ? sl(n).join("") : g, y = Array.from({ length: t }, (I, w) => p[w] ?? ""), S = oe([]), [v, $] = q(""), N = (I) => {
      m || _(I), l?.(I);
    }, E = (I) => {
      const w = S.current[I];
      w && !w.disabled && (w.focus(), w.select());
    }, C = (I, w) => {
      const O = w.replace(/\D/g, "").slice(-1), T = p.split("");
      if (O) {
        T[I] = O;
        const P = T.join("").slice(0, t);
        N(P), P.length < t ? E(I + 1) : f && $("Code complete");
      }
    }, A = (I, w) => {
      if (w.key === "Backspace") {
        if (w.preventDefault(), p[I]) {
          const O = p.split("");
          O[I] = "", N(O.join(""));
        } else if (I > 0) {
          const O = p.split("");
          O[I - 1] = "", N(O.join("")), E(I - 1);
        }
      } else w.key === "ArrowLeft" && I > 0 ? (w.preventDefault(), E(I - 1)) : w.key === "ArrowRight" && I < t - 1 ? (w.preventDefault(), E(I + 1)) : w.key === "Home" ? (w.preventDefault(), E(0)) : w.key === "End" && (w.preventDefault(), E(t - 1));
    }, D = (I, w) => {
      w.preventDefault();
      const O = w.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!O) return;
      const T = p.split("");
      let P = 0;
      for (let j = 0; j < O.length && I + j < t; j++)
        T[I + j] = O[j] ?? "", P++;
      const L = T.join("");
      N(L), L.length >= t ? f && $("Code complete") : E(I + P);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [er.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [er.cells, er[d]].join(" "), children: y.map((I, w) => /* @__PURE__ */ s(
            "input",
            {
              ref: (O) => {
                S.current[w] = O, w === 0 && h && (typeof h == "function" ? h(O) : h.current = O);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: a,
              "aria-label": `Digit ${w + 1} of ${t}`,
              "aria-invalid": i && I !== "" ? !0 : void 0,
              autoFocus: o && w === 0,
              className: [
                er.cell,
                er[`cell-${d}`],
                i ? er.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (O) => C(w, O.target.value),
              onKeyDown: (O) => A(w, O),
              onPaste: (O) => D(w, O),
              onFocus: (O) => O.target.select(),
              onBlur: () => {
                f && $("");
              }
            },
            w
          )) }),
          f && /* @__PURE__ */ s(
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
), vv = "_wrapper_6lcd5_1", wv = "_header_6lcd5_7", kv = "_label_6lcd5_15", Nv = "_clear_6lcd5_22", Sv = "_canvas_6lcd5_53", Ov = "_disabled_6lcd5_69", mr = {
  wrapper: vv,
  header: wv,
  label: kv,
  clear: Nv,
  canvas: Sv,
  disabled: Ov
}, uO = st(
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
    const h = oe(null), b = oe(!1), m = oe(!1), g = oe({ x: 0, y: 0 });
    ve(() => {
      const N = h.current;
      if (!N) return;
      const E = window.devicePixelRatio || 1, C = Math.round((a ?? N.clientWidth) * E), A = Math.round(c * E);
      (N.width !== C || N.height !== A) && (N.width = C, N.height = A);
      const D = N.getContext("2d");
      if (!D) return;
      D.setTransform(E, 0, 0, E, 0, 0), D.lineWidth = i, D.strokeStyle = l, D.lineCap = "round", D.lineJoin = "round";
      const I = t ?? n;
      if (I) {
        const w = new Image();
        w.onload = () => {
          D.drawImage(w, 0, 0, N.clientWidth, c);
        }, w.src = I;
      }
    }, [t, n, l, i, a, c]);
    const _ = () => {
      const N = h.current;
      if (!N) return;
      const E = N.toDataURL("image/png");
      r?.(E);
    }, p = () => {
      const N = h.current;
      if (!N) return;
      const E = N.getContext("2d");
      E && E.clearRect(0, 0, N.width, N.height), r?.("");
    };
    gs(x, () => ({
      clear: p,
      toDataURL: (N = "image/png", E) => h.current?.toDataURL(N, E) ?? ""
    }));
    const y = (N) => {
      const E = N.currentTarget.getBoundingClientRect();
      return { x: N.clientX - E.left, y: N.clientY - E.top };
    }, S = (N) => {
      f || (N.preventDefault(), typeof N.currentTarget.setPointerCapture == "function" && N.currentTarget.setPointerCapture(N.pointerId), b.current = !0, m.current = !1, g.current = y(N));
    }, v = (N) => {
      if (!b.current) return;
      N.preventDefault();
      const E = N.currentTarget.getContext("2d");
      if (!E) return;
      const C = y(N);
      E.beginPath(), E.moveTo(g.current.x, g.current.y), E.lineTo(C.x, C.y), E.stroke(), g.current = C, m.current = !0;
    }, $ = (N) => {
      b.current && (N.preventDefault(), b.current = !1, m.current && _());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          mr.wrapper,
          u,
          f ? mr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: mr.header, children: [
            /* @__PURE__ */ s("span", { className: mr.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: mr.clear,
                onClick: p,
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
              className: mr.canvas,
              onPointerDown: S,
              onPointerMove: v,
              onPointerUp: $,
              onPointerCancel: $
            }
          )
        ]
      }
    );
  }
), $v = "_wrapper_dsvd2_1", Ev = "_trigger_dsvd2_7", Tv = "_list_dsvd2_35", Cv = "_row_dsvd2_44", Av = "_name_dsvd2_59", Dv = "_size_dsvd2_68", Mv = "_progress_dsvd2_74", Iv = "_fill_dsvd2_82", zv = "_status_dsvd2_99", Lv = "_remove_dsvd2_106", On = {
  wrapper: $v,
  trigger: Ev,
  list: Tv,
  row: Cv,
  name: Av,
  size: Dv,
  progress: Mv,
  fill: Iv,
  status: zv,
  remove: Lv
};
function ol(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const fO = st(function({
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
}, b) {
  const m = oe(null), [g, _] = q([]), p = oe(/* @__PURE__ */ new Map()), y = (E, C) => {
    _(
      (A) => A.map((D) => D.file.name === E ? { ...D, ...C } : D)
    );
  }, S = (E) => {
    if (!t) return;
    const C = new XMLHttpRequest();
    p.current.set(E.file.name, C);
    const A = new FormData();
    if (A.append(r, E.file), C.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const I = Math.round(D.loaded / D.total * 100);
      y(E.file.name, { state: "uploading", progress: I }), u?.(E.file.name, I);
    }), C.addEventListener("load", () => {
      C.status >= 200 && C.status < 300 ? (y(E.file.name, { state: "complete", progress: 100 }), x?.(E.file.name)) : (y(E.file.name, {
        state: "error",
        message: `HTTP ${C.status}`
      }), h?.(E.file.name, `HTTP ${C.status}`));
    }), C.addEventListener("error", () => {
      y(E.file.name, { state: "error", message: "Network error" }), h?.(E.file.name, "Network error");
    }), i)
      for (const [D, I] of Object.entries(i))
        C.setRequestHeader(D, I);
    C.open("POST", t), C.send(A), y(E.file.name, { state: "uploading", progress: 0 });
  }, v = (E) => {
    if (!E) return;
    const C = [...E], A = [];
    let D = Math.max(0, o - g.length);
    for (const w of C) {
      if (a != null && w.size > a) {
        h?.(
          w.name,
          `File too large (maximum ${ol(a)})`
        );
        continue;
      }
      if (D <= 0) {
        h?.(w.name, `Too many files (maximum ${o})`);
        continue;
      }
      D -= 1, A.push(w);
    }
    const I = A.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    _((w) => [...w, ...I]), m.current && (m.current.value = ""), l && I.forEach(S);
  }, $ = (E) => {
    p.current.get(E)?.abort(), p.current.delete(E), _((A) => A.filter((D) => D.file.name !== E));
  }, N = f ?? /* @__PURE__ */ M(
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
  return gs(b, () => ({
    open: () => m.current?.click(),
    upload: () => g.forEach((E) => E.state === "pending" ? S(E) : null)
  })), /* @__PURE__ */ M("div", { className: On.wrapper, children: [
    N,
    /* @__PURE__ */ s(
      "input",
      {
        ref: m,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (E) => v(E.target.files)
      }
    ),
    !f && g.length > 0 && /* @__PURE__ */ s("ul", { className: On.list, children: g.map(({ file: E, state: C, progress: A, message: D }) => /* @__PURE__ */ M(
      "li",
      {
        className: On.row,
        "data-state": C,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: On.name, children: E.name }),
          /* @__PURE__ */ s("span", { className: On.size, children: ol(E.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${E.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": A,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: On.fill,
                  style: { width: `${A}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: On.status, role: "status", children: C === "uploading" ? "Uploading" : C === "complete" ? "Complete" : C === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${E.name}`,
              onClick: () => $(E.name),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      E.name
    )) })
  ] });
}), Rv = "_zone_nl0bz_1", Pv = "_dragging_nl0bz_23", jv = "_caption_nl0bz_28", Bv = "_browse_nl0bz_40", Fv = "_disabled_nl0bz_67", Rr = {
  zone: Rv,
  dragging: Pv,
  caption: jv,
  browse: Bv,
  disabled: Fv
};
function Hv(e, t) {
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
const _O = st(
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
    const f = oe(null), [u, x] = q(!1), h = (p) => {
      if (!p || p.length === 0) return;
      const y = [...p].filter((S) => Hv(S, t ?? ""));
      y.length !== 0 && r?.(y);
    }, b = (p) => {
      o || (p.preventDefault(), x(!0));
    }, m = (p) => {
      o || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", x(!0));
    }, g = (p) => {
      o || p.currentTarget.contains(p.relatedTarget) || x(!1);
    }, _ = (p) => {
      o || (p.preventDefault(), x(!1), h(p.dataTransfer.files));
    };
    return gs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": o || void 0,
        className: [
          Rr.zone,
          u ? Rr.dragging : null,
          o ? Rr.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: m,
        onDragLeave: g,
        onDrop: _,
        children: [
          /* @__PURE__ */ s("p", { className: Rr.caption, children: u ? i : l }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Rr.browse,
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
              onChange: (p) => {
                h(p.target.files), p.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), Uv = "_root_1a92d_1", qv = "_menubar_1a92d_5", Kv = "_horizontal_1a92d_15", Wv = "_vertical_1a92d_20", Gv = "_itemWrapper_1a92d_25", Vv = "_item_1a92d_25", Yv = "_disabled_1a92d_61", Xv = "_icon_1a92d_68", Zv = "_text_1a92d_75", Jv = "_caret_1a92d_79", Qv = "_hasChildren_1a92d_85", ew = "_submenu_1a92d_94", tw = "_submenuItem_1a92d_118", nw = "_flyout_1a92d_155", rw = "_hamburger_1a92d_175", sw = "_responsive_1a92d_198", ow = "_mobileOpen_1a92d_207", _t = {
  root: Uv,
  menubar: qv,
  horizontal: Kv,
  vertical: Wv,
  itemWrapper: Gv,
  item: Vv,
  disabled: Yv,
  icon: Xv,
  text: Zv,
  caret: Jv,
  hasChildren: Qv,
  submenu: ew,
  submenuItem: tw,
  flyout: nw,
  hamburger: rw,
  responsive: sw,
  mobileOpen: ow
}, ms = lr(null);
function lw(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function aw(e, t, n, r, l) {
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
function iw({
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
function zl(e) {
  return qt(e) && e.type === Ll;
}
function ro({
  itemKey: e,
  props: t
}) {
  const n = Pn(ms);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: o } = t, a = Oe(
    () => Wr.toArray(t.children).filter(qt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [x, h] = aw(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, m = oe(0), _ = (b && !u ? n.openKey === e : null) ?? x, p = B(
    (P) => {
      b && !u ? n.setOpenKey(P ? e : null) : (h(P), b && n.setOpenKey(null));
    },
    [b, u, n, e, h]
  ), [, y] = q(0);
  ve(() => {
    if (!i) return;
    const P = () => y((L) => L + 1);
    return window.addEventListener("hashchange", P), () => window.removeEventListener("hashchange", P);
  }, [i]);
  const S = i && !c ? lw(i, t.match) : !1, v = B(
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
      if (_ && (Date.now() - m.current < 600 || !n.clickToOpen)) {
        m.current = 0;
        return;
      }
      p(!_);
    }
  }, [f, _, p, n.clickToOpen]), N = B(() => {
    !c || f || n.clickToOpen || (m.current = Date.now(), p(!0));
  }, [c, f, n.clickToOpen, p]), E = B(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), C = `${n.baseId}-submenu-${e}`, [A, D] = q(null);
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
      openKey: A,
      setOpenKey: D
    }),
    [n, A]
  ), w = c ? /* @__PURE__ */ s("span", { className: _t.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    Me,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, O = o ?? /* @__PURE__ */ M(pt, { children: [
    /* @__PURE__ */ s(
      iw,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: _t.text, children: r }),
    w
  ] });
  if (c) {
    let P = function(L) {
      const j = Array.from(L.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      L.key === "ArrowDown" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : L.key === "ArrowUp" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : L.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), L.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (L.key === "ArrowLeft" || L.key === "Escape") && (L.preventDefault(), L.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: _t.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : N,
        onMouseLeave: n.clickToOpen ? void 0 : E,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": b ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": f || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": _,
              "aria-controls": C,
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
          _ ? /* @__PURE__ */ s(
            "div",
            {
              id: C,
              role: "menu",
              "aria-label": r,
              className: [
                _t.submenu,
                n.flyout && !b ? _t.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: P,
              children: /* @__PURE__ */ s(ms.Provider, { value: I, children: a.map(
                (L, j) => zl(L) ? /* @__PURE__ */ s(
                  ro,
                  {
                    itemKey: `${e}-${j}`,
                    props: L.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(Zs, { children: L }, `${e}-custom-${j}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const T = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": S ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [_t.submenuItem, f ? _t.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return i && !f ? /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: i, target: t.target, ...T, children: O }) }) : /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: f, ...T, children: O }) });
}
function Ll(e) {
  if (!Pn(ms)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(ro, { itemKey: e.text, props: e });
}
function cw({
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
  const u = ot(), x = oe(null), h = oe(null), [b, m] = q(null), [g, _] = q(0), [p, y] = q(!1), S = oe(null), v = B(
    (A) => i?.(A),
    [i]
  ), $ = B(() => {
    m(null), _((A) => A + 1);
  }, []);
  ve(() => {
    if (b == null) return;
    const A = (D) => {
      x.current && !x.current.contains(D.target) && $();
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, [b, $]), ve(() => {
    S.current != null && b === S.current && (document.getElementById(`${u}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), S.current = null);
  }, [b, u]);
  const N = Oe(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: g,
      emit: v,
      closeAll: $,
      openKey: b,
      setOpenKey: m
    }),
    [u, n, t, g, v, $, b]
  ), E = Oe(
    () => Wr.toArray(e).filter(qt),
    [e]
  ), C = (A) => {
    const D = h.current;
    if (!D) return;
    const I = Array.from(D.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const T = document.getElementById(`${u}-submenu-${b}`);
      if (T) {
        const P = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), L = document.activeElement, j = L ? P.indexOf(L) : -1;
        if (A.key === "ArrowDown") {
          A.preventDefault(), (j === -1 ? P[0] : P[(j + 1) % P.length])?.focus();
          return;
        }
        if (A.key === "ArrowUp") {
          A.preventDefault(), (j === -1 ? P[P.length - 1] : P[(j - 1 + P.length) % P.length])?.focus();
          return;
        }
        if (A.key === "Escape") {
          A.preventDefault(), $(), d?.(), D.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (A.key === "Enter" || A.key === " ") return;
      }
      if (A.key === "Escape") {
        A.preventDefault(), $(), d?.();
        return;
      }
    }
    const w = document.activeElement, O = w ? I.indexOf(w) : -1;
    if (A.key === "ArrowRight") {
      if (A.preventDefault(), I.length === 0) return;
      I[O === -1 ? 0 : (O + 1) % I.length]?.focus();
      return;
    }
    if (A.key === "ArrowLeft") {
      if (A.preventDefault(), I.length === 0) return;
      I[O === -1 ? I.length - 1 : (O - 1 + I.length) % I.length]?.focus();
      return;
    }
    if (A.key === "ArrowDown") {
      if (O >= 0) {
        const T = w?.getAttribute("data-index");
        if (T == null) return;
        D.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (A.preventDefault(), S.current = T, m(T));
      }
      return;
    }
    if (A.key === "Home") {
      A.preventDefault(), I[0]?.focus();
      return;
    }
    if (A.key === "End") {
      A.preventDefault(), I[I.length - 1]?.focus();
      return;
    }
    if (A.key.length === 1 && !A.ctrlKey && !A.metaKey) {
      const T = I.map((L) => L.textContent ?? ""), P = O === -1 ? 0 : (O + 1) % I.length;
      for (let L = 0; L < I.length; L++) {
        const j = (P + L) % I.length;
        if (T[j]?.toLowerCase().startsWith(A.key.toLowerCase())) {
          A.preventDefault(), I[j]?.focus();
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
        r && p ? _t.mobileOpen : null,
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
            "aria-expanded": p,
            className: _t.hamburger,
            onClick: () => y((A) => !A),
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
            onKeyDown: C,
            children: /* @__PURE__ */ s(ms.Provider, { value: N, children: E.map(
              (A, D) => zl(A) ? /* @__PURE__ */ s(
                ro,
                {
                  itemKey: String(D),
                  props: A.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ s(Zs, { children: A }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const dw = "_popup_uiejp_1", uw = "_menu_uiejp_22", Ys = {
  popup: dw,
  menu: uw
}, Rl = lr(null);
function pO() {
  const e = Pn(Rl);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Pl(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ s(Ll, { ...l, children: r ? Pl(r) : void 0 }, `${t.text}-${n}`);
  });
}
function fw({ state: e, onClose: t }) {
  const n = oe(null), [r, l] = q({ left: e.x, top: e.y });
  Rs(() => {
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
      className: Ys.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: Ys.menu, children: e.options.content ?? /* @__PURE__ */ s(
        cw,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Pl(e.options.items ?? [])
        }
      ) })
    }
  );
}
function mO({ children: e }) {
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
      const u = document.querySelector(`.${Ys.popup}`);
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
  return /* @__PURE__ */ M(Rl.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ s(fw, { state: t, onClose: r }) : null
  ] });
}
const _w = "_root_rgcia_1", pw = "_list_rgcia_9", mw = "_item_rgcia_14", hw = "_trigger_rgcia_18", gw = "_disabled_rgcia_45", bw = "_expanded_rgcia_52", yw = "_selected_rgcia_56", xw = "_icon_rgcia_61", vw = "_text_rgcia_72", ww = "_caret_rgcia_79", kw = "_open_rgcia_86", Nw = "_submenu_rgcia_90", Sw = "_iconOnly_rgcia_172", Ow = "_stacked_rgcia_201", Lt = {
  root: _w,
  list: pw,
  item: mw,
  trigger: hw,
  disabled: gw,
  expanded: bw,
  selected: yw,
  icon: xw,
  text: vw,
  caret: ww,
  open: kw,
  submenu: Nw,
  iconOnly: Sw,
  stacked: Ow
}, hs = lr(null);
function $w() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Ew(e, t) {
  const n = $w(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Tw({
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
function so({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Pn(hs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: o } = n, a = Oe(
    () => Wr.toArray(n.children).filter(qt),
    [n.children]
  ), c = a.length > 0, f = !!o, u = n.match ?? r.match, x = n.expanded !== void 0, [h, b] = q(
    n.defaultExpanded ?? !1
  ), m = x ? n.expanded ?? !1 : h, g = B(
    (F) => {
      x || b(F), n.onExpandedChange?.(F);
    },
    [x, n]
  );
  ve(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && g(!1);
  }, [r.collapseSignal]);
  const _ = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, y] = q(
    n.defaultSelected ?? !1
  ), S = !_ && d ? Ew(d, u) : !1, v = n.selected ?? (_ ? p : S || p), [, $] = q(0);
  ve(() => {
    if (!d) return;
    const F = () => $((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [d]);
  const N = Oe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        g(!0), r.openAncestors();
      }
    }),
    [r, g]
  );
  ve(() => {
    S && t.length > 0 && N.openAncestors();
  }, []);
  const E = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const X = { text: l, value: i, path: d };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), _ || y(!0), n.onSelectedChange?.(!0);
    },
    [f, l, i, d, r, n, _]
  ), C = B(() => {
    f || (m || r.notifyOpened(e, t), g(!m));
  }, [f, m, r, e, t, g]), A = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? C() : F.target.click()) : F.key === "Escape" && m ? (F.preventDefault(), g(!1)) : F.key === "ArrowRight" && c && !m ? (F.preventDefault(), r.notifyOpened(e, t), g(!0)) : F.key === "ArrowLeft" && m && (F.preventDefault(), g(!1));
    },
    [c, C, m, g, r, e, t]
  ), D = c && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [Lt.caret, m ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, I = n.template ?? /* @__PURE__ */ M(pt, { children: [
    /* @__PURE__ */ s(
      Tw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: Lt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: Lt.text, children: l }),
    D
  ] }), w = `${r.baseId}-panel-${e}`, O = `${r.baseId}-trigger-${e}`, T = [
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
      "aria-controls": w,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: C,
      onKeyDown: A,
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
      className: T,
      onClick: E,
      onKeyDown: A,
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
      className: T,
      onClick: E,
      onKeyDown: A,
      children: I
    }
  ), j = c ? r.renderMode === "server" && !m ? null : /* @__PURE__ */ s(
    "div",
    {
      id: w,
      role: "menu",
      "aria-labelledby": O,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ s(hs.Provider, { value: N, children: a.map((F, X) => /* @__PURE__ */ s(
        so,
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
function hO(e) {
  if (!Pn(hs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(so, { itemKey: e.text, ancestors: [], props: e });
}
function gO({
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
  const f = ot(), [u, x] = q(0), h = oe(/* @__PURE__ */ new Set()), b = B(
    (S) => d?.(S),
    [d]
  ), m = B(
    (S, v) => {
      t || (h.current = /* @__PURE__ */ new Set([S, ...v]), x(($) => $ + 1));
    },
    [t]
  ), g = (S) => Array.from(
    S.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), _ = (S) => {
    if (!(S.key === "Enter" || S.key === " ")) {
      if (S.key === "ArrowDown" || S.key === "ArrowUp") {
        const v = S.target, $ = g(S.currentTarget), N = $.indexOf(v);
        if (N === -1) return;
        S.preventDefault();
        const E = S.key === "ArrowDown" ? 1 : -1;
        $[(N + E + $.length) % $.length]?.focus();
      } else if (S.key === "Home" || S.key === "End") {
        const v = g(S.currentTarget);
        S.preventDefault(), (S.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, p = Oe(
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
      emit: b,
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
      b,
      m
    ]
  ), y = Oe(
    () => Wr.toArray(e).filter(qt),
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
      onKeyDown: _,
      ...c,
      children: /* @__PURE__ */ s("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ s(hs.Provider, { value: p, children: y.map((S, v) => /* @__PURE__ */ s(
        so,
        {
          itemKey: String(v),
          ancestors: [],
          props: S.props
        },
        `top-${v}`
      )) }) })
    }
  );
}
const Cw = "_root_5numg_1", Aw = "_trigger_5numg_7", Dw = "_defaultTrigger_5numg_40", Mw = "_avatar_5numg_46", Iw = "_menu_5numg_58", zw = "_item_5numg_74", Lw = "_disabled_5numg_88", Rw = "_active_5numg_97", Pw = "_icon_5numg_107", jw = "_text_5numg_114", $n = {
  root: Cw,
  trigger: Aw,
  defaultTrigger: Dw,
  avatar: Mw,
  menu: Iw,
  item: zw,
  disabled: Lw,
  active: Rw,
  icon: Pw,
  text: jw
};
function bO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = ot(), d = `${i}-menu`, o = oe(null), a = oe(null), [c, f] = q(!1), [u, x] = q(-1), h = t, b = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), m = B(
    (v) => {
      if (v.disabled) return;
      const $ = {
        text: v.text,
        path: v.path
      };
      n?.($), f(!1), a.current?.focus();
    },
    [n]
  ), g = B(() => {
    x(b[0] ?? -1), f(!0);
  }, [b]), _ = B(() => {
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
      $.key === "Escape" && ($.preventDefault(), _());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [c, _]);
  const p = (v) => {
    if (b.length === 0) return;
    const $ = b.indexOf(u), N = $ === -1 ? 0 : ($ + v + b.length) % b.length, E = b[N];
    E != null && x(E);
  }, y = (v) => {
    if (!c) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), g());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), _();
        break;
      case "ArrowDown":
        v.preventDefault(), p(1);
        break;
      case "ArrowUp":
        v.preventDefault(), p(-1);
        break;
      case "Home":
        v.preventDefault(), b[0] != null && x(b[0]);
        break;
      case "End":
        v.preventDefault(), b[b.length - 1] != null && x(b[b.length - 1]);
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
  }, S = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), p(1);
        break;
      case "ArrowUp":
        v.preventDefault(), p(-1);
        break;
      case "Home":
        v.preventDefault(), b[0] != null && x(b[0]);
        break;
      case "End":
        v.preventDefault(), b[b.length - 1] != null && x(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
        }
        break;
      case "Escape":
        v.preventDefault(), _();
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
            onClick: () => c ? _() : g(),
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
            onKeyDown: S,
            tabIndex: -1,
            children: e.map((v, $) => {
              const N = !!v.disabled, E = $ === u;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${i}-item-${$}`,
                  role: "menuitem",
                  "aria-disabled": N || void 0,
                  tabIndex: N ? -1 : 0,
                  className: [
                    $n.item,
                    E ? $n.active : null,
                    N ? $n.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    N || m(v);
                  },
                  onMouseEnter: () => {
                    N || x($);
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
const Bw = "_root_vv0xs_1", Fw = "_bottomRight_vv0xs_11", Hw = "_bottomLeft_vv0xs_16", Uw = "_topRight_vv0xs_21", qw = "_topLeft_vv0xs_26", Kw = "_menu_vv0xs_31", Ww = "_itemWrapper_vv0xs_48", Gw = "_tooltip_vv0xs_54", Vw = "_main_vv0xs_76", Yw = "_mainIcon_vv0xs_104", Xw = "_mainOpen_vv0xs_109", Zw = "_item_vv0xs_48", Jw = "_disabled_vv0xs_141", Qw = "_itemIcon_vv0xs_148", Kt = {
  root: Bw,
  bottomRight: Fw,
  bottomLeft: Hw,
  topRight: Uw,
  topLeft: qw,
  menu: Kw,
  itemWrapper: Ww,
  tooltip: Gw,
  main: Vw,
  mainIcon: Yw,
  mainOpen: Xw,
  item: Zw,
  disabled: Jw,
  itemIcon: Qw
};
function yO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${ot()}-menu`, c = oe(null), f = oe(null), [u, x] = q(!1), h = B(
    (_) => {
      if (_.disabled) return;
      const p = { text: _.text, value: _.value };
      r?.(p), x(!1), f.current?.focus();
    },
    [r]
  );
  ve(() => {
    if (!u) return;
    const _ = (p) => {
      c.current && !c.current.contains(p.target) && x(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [u]), ve(() => {
    if (!u) return;
    const _ = (p) => {
      p.key === "Escape" && (x(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [u]);
  const b = d === "bottom-right" ? Kt.bottomRight : d === "bottom-left" ? Kt.bottomLeft : d === "top-right" ? Kt.topRight : Kt.topLeft, m = (_) => {
    !u && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), x(!0)) : u && _.key === "Escape" && (_.preventDefault(), x(!1));
  }, g = (_) => {
    _.key === "Escape" && (_.preventDefault(), x(!1), f.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [Kt.root, b, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ s(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: Kt.menu,
            onKeyDown: g,
            children: e.map((_, p) => {
              const y = !!_.disabled;
              return /* @__PURE__ */ M("div", { className: Kt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: Kt.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": y || void 0,
                    title: _.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [Kt.item, y ? Kt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => h(_),
                    children: /* @__PURE__ */ s("span", { className: Kt.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${p}`);
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
            onClick: () => x((_) => !_),
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
const e2 = "_root_1eyur_1", t2 = "_list_1eyur_5", n2 = "_item_1eyur_15", r2 = "_link_1eyur_22", s2 = "_linkButton_1eyur_23", o2 = "_current_1eyur_24", l2 = "_disabled_1eyur_68", a2 = "_icon_1eyur_74", i2 = "_text_1eyur_81", c2 = "_separator_1eyur_85", ut = {
  root: e2,
  list: t2,
  item: n2,
  link: r2,
  linkButton: s2,
  current: o2,
  disabled: l2,
  icon: a2,
  text: i2,
  separator: c2
};
function xO({
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
const d2 = "_link_tmy3k_1", u2 = {
  link: d2
}, vO = st(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ M(pt, { children: [
    n != null && /* @__PURE__ */ s(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [u2.link, l].filter(Boolean).join(" ");
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
}), f2 = "_root_dnkuu_1", _2 = "_list_dnkuu_5", p2 = "_item_dnkuu_15", m2 = "_connector_dnkuu_21", h2 = "_connectorCompleted_dnkuu_30", g2 = "_step_dnkuu_34", b2 = "_active_dnkuu_69", y2 = "_completed_dnkuu_75", x2 = "_circle_dnkuu_79", v2 = "_check_dnkuu_109", w2 = "_icon_dnkuu_114", k2 = "_number_dnkuu_119", N2 = "_text_dnkuu_124", Wt = {
  root: f2,
  list: _2,
  item: p2,
  connector: m2,
  connectorCompleted: h2,
  step: g2,
  active: b2,
  completed: y2,
  circle: x2,
  check: v2,
  icon: w2,
  number: k2,
  text: N2
};
function wO({
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
  const u = l ?? i ?? !1, x = t ?? n, h = x !== void 0, [b, m] = q(() => Math.min(Math.max(0, x ?? r), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, h ? x : b),
    Math.max(0, e.length - 1)
  ), p = oe(null), y = B(
    ($) => {
      const N = Math.min(
        Math.max(0, $),
        Math.max(0, e.length - 1)
      );
      h || m(N), (d ?? o ?? a)?.(N);
    },
    [h, d, o, a, e.length]
  ), S = B(
    ($, N) => !!(N.disabled || u && $ > _ + 1),
    [u, _]
  ), v = ($) => {
    const N = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((A) => A.getAttribute("aria-disabled") !== "true" && !A.disabled), E = document.activeElement, C = E ? N.indexOf(E) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), N.length === 0) return;
      const A = C === -1 ? 0 : (C + 1) % N.length, D = N[A];
      D && D.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), N.length === 0) return;
      const A = C === -1 ? N.length - 1 : (C - 1 + N.length) % N.length, D = N[A];
      D && D.focus();
    } else $.key === "Home" ? ($.preventDefault(), N[0]?.focus()) : $.key === "End" && ($.preventDefault(), N[N.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": c,
      className: [Wt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ s("ol", { ref: p, role: "list", className: Wt.list, children: e.map(($, N) => {
        const E = N === _, C = N < _, A = S(N, $);
        return /* @__PURE__ */ M(
          "li",
          {
            role: "listitem",
            className: Wt.item,
            children: [
              N > 0 ? /* @__PURE__ */ s(
                "span",
                {
                  className: [
                    Wt.connector,
                    C ? Wt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ M(
                "button",
                {
                  type: "button",
                  "data-step": N,
                  "aria-current": E ? "step" : void 0,
                  "aria-disabled": A ? "true" : void 0,
                  disabled: A,
                  tabIndex: A ? -1 : 0,
                  className: [
                    Wt.step,
                    E ? Wt.active : null,
                    C ? Wt.completed : null,
                    A ? Wt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    A || y(N);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: Wt.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ s("span", { className: Wt.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "check", size: "sm" }) }) : $.icon ? /* @__PURE__ */ s("span", { className: Wt.icon, children: $.icon }) : /* @__PURE__ */ s("span", { className: Wt.number, children: N + 1 }) }),
                    /* @__PURE__ */ s("span", { className: Wt.text, children: $.text })
                  ]
                }
              )
            ]
          },
          `${$.text}-${N}`
        );
      }) })
    }
  );
}
const S2 = "_root_12hod_1", O2 = "_horizontal_12hod_13", $2 = "_vertical_12hod_17", E2 = "_pane_12hod_21", T2 = "_handle_12hod_31", C2 = "_handleHorizontal_12hod_51", A2 = "_handleVertical_12hod_57", D2 = "_handleGrip_12hod_63", M2 = "_handleCollapseHint_12hod_75", I2 = "_collapseBtn_12hod_79", z2 = "_collapseBtnCollapsed_12hod_109", un = {
  root: S2,
  horizontal: O2,
  vertical: $2,
  pane: E2,
  handle: T2,
  handleHorizontal: C2,
  handleVertical: A2,
  handleGrip: D2,
  handleCollapseHint: M2,
  collapseBtn: I2,
  collapseBtnCollapsed: z2
};
function Pr(e, t) {
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
function kO({
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
    const w = n.length;
    if (w === 0) return [];
    const O = n.map((P) => P.size ? Pr(P.size, 100 / w) : 100 / w), T = O.reduce((P, L) => P + L, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? O.map((P) => P / T * 100) : O;
  }, [n]), [h, b] = q(() => x()), [m, g] = q(
    () => n.map((w) => !!w.collapsed)
  ), _ = oe(h);
  ve(() => {
    g(n.map((w) => !!w.collapsed));
  }, [n]);
  const p = B(
    () => n.map((w) => Pr(w.min, 0)),
    [n]
  ), y = B(
    () => n.map((w) => Pr(w.max, 100)),
    [n]
  ), S = B(
    (w, O) => {
      const T = { paneIndex: w, newSize: O, cancel: !1 };
      return (r ?? l)?.(T), !T.cancel;
    },
    [r, l]
  ), v = B(
    (w, O) => {
      const T = { paneIndex: w, collapse: O, cancel: !1 };
      return (i ?? d)?.(T), !T.cancel;
    },
    [i, d]
  ), $ = B(
    (w) => {
      const O = !m[w];
      v(w, O) && (O ? (_.current = [...h], g((T) => {
        const P = [...T];
        return P[w] !== void 0 && (P[w] = !0), P;
      }), b((T) => {
        const P = [...T], L = P[w] ?? 0, j = w < P.length - 1 ? w + 1 : w - 1;
        if (j >= 0 && j < P.length) {
          const F = P[j] ?? 0;
          P[j] = F + L, P[w] = 0;
        } else
          P[w] = 0;
        return P;
      })) : (g((T) => {
        const P = [...T];
        return P[w] !== void 0 && (P[w] = !1), P;
      }), b(() => {
        const T = [..._.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [m, h, n.length, v]
  ), N = oe(
    null
  ), E = B(
    (w, O, T) => {
      const P = u.current;
      if (!P) return null;
      const L = P.getBoundingClientRect();
      let j;
      if (f) {
        if (L.width === 0) return null;
        j = (O - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        j = (T - L.top) / L.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < w; ie++) {
        const te = h[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, h]
  ), C = (w, O) => {
    O.preventDefault();
    const T = O.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(O.pointerId), N.current = { handleIndex: w, pointerId: O.pointerId };
  }, A = (w) => {
    if (!N.current || N.current.pointerId !== w.pointerId)
      return;
    w.preventDefault();
    const O = N.current.handleIndex, T = E(O, w.clientX, w.clientY);
    if (T == null) return;
    const P = p(), L = y(), j = P[O] ?? 0, F = L[O] ?? 100, X = O + 1, ie = P[X] ?? 0, te = L[X] ?? 100, we = h[O] ?? 0, le = h[X] ?? 0, _e = we + le;
    if (_e <= 0) return;
    let W = zn(T, j, F), he = _e - W;
    if (he < ie) {
      if (he = ie, W = _e - he, W < j || W > F) return;
    } else if (he > te && (he = te, W = _e - he, W < j || W > F))
      return;
    W = zn(W, j, F), he = _e - W, S(O, W) && b((ue) => {
      const ye = [...ue];
      return ye[O] = W, ye[X] = he, ye;
    });
  }, D = (w) => {
    !N.current || N.current.pointerId !== w.pointerId || (N.current = null);
  }, I = (w, O) => {
    const T = p(), P = y(), L = w, j = w + 1, F = h[L] ?? 0, X = h[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[L]?.collapsible, le = !!n[j]?.collapsible;
    if (f ? O.key === "ArrowLeft" ? te = -5 : O.key === "ArrowRight" && (te = 5) : O.key === "ArrowUp" ? te = -5 : O.key === "ArrowDown" && (te = 5), O.key === "Home") {
      O.preventDefault();
      let _e = T[L] ?? 0, W = ie - _e;
      if (W = zn(
        W,
        T[j] ?? 0,
        P[j] ?? 100
      ), _e = ie - W, _e = zn(_e, T[L] ?? 0, P[L] ?? 100), !S(L, _e)) return;
      b((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = W, ue;
      });
      return;
    }
    if (O.key === "End") {
      O.preventDefault();
      let _e = P[L] ?? 100;
      _e = Math.min(_e, ie - (T[j] ?? 0));
      let W = ie - _e;
      if (W = zn(
        W,
        T[j] ?? 0,
        P[j] ?? 100
      ), _e = ie - W, _e = zn(_e, T[L] ?? 0, P[L] ?? 100), !S(L, _e)) return;
      b((he) => {
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
      const he = T[L] ?? 0, ue = P[L] ?? 100, ye = T[j] ?? 0, pe = P[j] ?? 100;
      if (_e = zn(_e, he, ue), W = ie - _e, (W < ye || W > pe) && (W = zn(W, ye, pe), _e = ie - W, _e = zn(_e, he, ue), W = ie - _e), !S(L, _e)) return;
      b((De) => {
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
        un.root,
        f ? un.horizontal : un.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((w, O) => {
        const T = !!m[O], P = T ? 0 : h[O] ?? 100 / n.length, L = T ? { display: "none" } : f ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Pr(w.min, 0), F = Pr(w.max, 100), X = O < n.length - 1, ie = !!n[O + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": w.label ?? `Pane ${O + 1}`,
              className: un.pane,
              style: L,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : w.children,
                w.collapsible && !T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Collapse pane ${O + 1}`,
                    "aria-expanded": !T,
                    onClick: () => $(O),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                w.collapsible && T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Expand pane ${O + 1}`,
                    "aria-expanded": !T,
                    onClick: () => $(O),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && w.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: un.collapseBtnCollapsed,
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
              tabIndex: T || m[O + 1] ? -1 : 0,
              className: [
                un.handle,
                f ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => C(O, te),
              onPointerMove: A,
              onPointerUp: D,
              onKeyDown: (te) => I(O, te),
              children: [
                /* @__PURE__ */ s("span", { className: un.handleGrip, "aria-hidden": "true" }),
                (w.collapsible || ie) && /* @__PURE__ */ s(
                  "span",
                  {
                    className: un.handleCollapseHint,
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
const L2 = "_root_1w3wd_1", R2 = "_list_1w3wd_5", P2 = "_vertical_1w3wd_14", j2 = "_horizontal_1w3wd_20", B2 = "_item_1w3wd_28", F2 = "_link_1w3wd_32", H2 = "_active_1w3wd_57", hr = {
  root: L2,
  list: R2,
  vertical: P2,
  horizontal: j2,
  item: B2,
  link: F2,
  active: H2
};
function NO({
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
  const b = B(
    (m, g) => {
      if (x(m.selector), (i ?? d)?.({ text: m.text, selector: m.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const p = g;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return ve(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (c) {
        const v = document.querySelector(c);
        if (v) return v;
      }
      return window;
    })();
    let _ = null;
    const p = /* @__PURE__ */ new Map(), y = () => {
      let v = null, $ = null;
      for (const E of e) {
        const C = document.querySelector(E.selector);
        if (!C) continue;
        p.set(E.selector, C);
        const A = C.getBoundingClientRect();
        let D = A.top;
        if (g !== window) {
          const I = g.getBoundingClientRect();
          D = A.top - I.top;
        }
        D <= 80 ? (!$ || D > $.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && ($ = { sel: E.selector, el: C }) : (!v || D < v.top) && (v = { sel: E.selector, top: D });
      }
      const N = $?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      N && N !== h.current && x(N);
    }, S = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const v = g === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: g,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver(($) => {
        const N = $.filter((E) => E.isIntersecting).sort((E, C) => E.boundingClientRect.top - C.boundingClientRect.top);
        if (N[0]) {
          const E = N[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === E) {
              x(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && E.id === C.selector.slice(1)) {
              x(C.selector);
              break;
            }
          }
        } else
          y();
      }, v);
      for (const $ of e) {
        const N = document.querySelector($.selector);
        N && (_.observe(N), p.set($.selector, N));
      }
    }
    return g === window ? (window.addEventListener("scroll", S, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", S), _?.disconnect();
    }) : (g.addEventListener("scroll", S, {
      passive: !0
    }), y(), () => {
      g.removeEventListener("scroll", S), _?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [hr.root, hr[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: hr.list, children: e.map((m) => {
        const g = m.selector === u;
        return /* @__PURE__ */ s("li", { className: hr.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [hr.link, g ? hr.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const p = document.querySelector(m.selector);
              b(m, p);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const U2 = "_root_1bfit_1", q2 = "_viewport_1bfit_17", K2 = "_slide_1bfit_24", W2 = "_active_1bfit_33", G2 = "_arrow_1bfit_37", V2 = "_prev_1bfit_71", Y2 = "_next_1bfit_75", X2 = "_pauseBtn_1bfit_79", Z2 = "_indicators_1bfit_110", J2 = "_indicator_1bfit_110", Q2 = "_indicatorActive_1bfit_145", fn = {
  root: U2,
  viewport: q2,
  slide: K2,
  active: W2,
  arrow: G2,
  prev: V2,
  next: Y2,
  pauseBtn: X2,
  indicators: Z2,
  indicator: J2,
  indicatorActive: Q2
};
function SO({
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
  onChange: b,
  Change: m,
  ariaLabel: g = "Carousel",
  className: _
}) {
  const p = t ?? n, y = p !== void 0, [S, v] = q(() => Math.min(Math.max(0, p ?? r), Math.max(0, e.length - 1))), $ = y ? p : S, N = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), E = l ?? i ?? !1, C = d ?? o ?? 3e3, A = a ?? c ?? !0, D = f ?? u ?? !0, I = x ?? h ?? !0, [w, O] = q(!1), [T, P] = q(!1), L = w || T, j = oe(null), F = ot(), X = B(
    (ye) => {
      const pe = e.length === 0 ? 0 : (ye % e.length + e.length) % e.length;
      y || v(pe), (b ?? m)?.(pe);
    },
    [y, b, m, e.length]
  ), ie = B(() => {
    X(N - 1);
  }, [X, N]), te = B(() => {
    X(N + 1);
  }, [X, N]), we = B(
    (ye) => {
      X(ye);
    },
    [X]
  );
  ve(() => {
    if (!E || L || e.length <= 1) return;
    const ye = setInterval(() => {
      X(N + 1);
    }, C);
    return () => clearInterval(ye);
  }, [E, L, C, N, X, e.length]);
  const le = (ye) => {
    e.length !== 0 && (ye.key === "ArrowLeft" ? (ye.preventDefault(), ie()) : ye.key === "ArrowRight" ? (ye.preventDefault(), te()) : ye.key === "Home" ? (ye.preventDefault(), we(0)) : ye.key === "End" && (ye.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    A && E && P(!0);
  }, W = () => {
    A && E && P(!1);
  }, he = () => {
    A && E && P(!0);
  }, ue = () => {
    A && E && P(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [fn.root, _].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: _e,
      onMouseLeave: W,
      onFocusCapture: he,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: fn.viewport, children: e.map((ye, pe) => {
          const De = pe === N;
          return /* @__PURE__ */ s(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${pe + 1} of ${e.length}`,
              "aria-hidden": De ? void 0 : !0,
              hidden: !De,
              className: [fn.slide, De ? fn.active : null].filter(Boolean).join(" "),
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
              className: [fn.arrow, fn.prev].filter(Boolean).join(" "),
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
              className: [fn.arrow, fn.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": F,
              onClick: te,
              children: "›"
            }
          )
        ] }) : null,
        E ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: fn.pauseBtn,
            "aria-label": w ? "Resume" : "Pause",
            "aria-pressed": w,
            onClick: () => O((ye) => !ye),
            children: w ? "▶" : "⏸"
          }
        ) : null,
        I && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: fn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ye, pe) => {
              const De = pe === N;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: [
                    fn.indicator,
                    De ? fn.indicatorActive : null
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
const ek = "_root_1aa5u_1", tk = "_group_1aa5u_20", nk = "_itemWrapper_1aa5u_30", rk = "_treeitem_1aa5u_34", sk = "_disabled_1aa5u_50", ok = "_selected_1aa5u_60", lk = "_caret_1aa5u_66", ak = "_caretIcon_1aa5u_113", ik = "_caretOpen_1aa5u_120", ck = "_caretPlaceholder_1aa5u_124", dk = "_label_1aa5u_130", uk = "_loading_1aa5u_137", fk = "_loadingRow_1aa5u_143", _k = "_empty_1aa5u_149", pk = "_checkbox_1aa5u_155", Mt = {
  root: ek,
  group: tk,
  itemWrapper: nk,
  treeitem: rk,
  disabled: sk,
  selected: ok,
  caret: lk,
  caretIcon: ak,
  caretOpen: ik,
  caretPlaceholder: ck,
  label: dk,
  loading: uk,
  loadingRow: fk,
  empty: _k,
  checkbox: pk
};
function mk({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ve(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function OO({
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
  defaultSelectedItem: b,
  defaultSelectedItems: m,
  onChange: g,
  Change: _,
  onExpand: p,
  Expand: y,
  onCollapse: S,
  Collapse: v,
  loadChildData: $,
  LoadChildData: N,
  template: E,
  Template: C,
  itemTemplate: A,
  ItemTemplate: D,
  ariaLabel: I,
  AriaLabel: w,
  allowCheckBoxes: O = !1,
  checkedKeys: T,
  defaultCheckedKeys: P,
  onCheckedChange: L,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = l ?? i ?? "text", we = d ?? o ?? "id", le = a ?? c ?? "single", _e = I ?? w ?? "Tree", W = $ ?? N, he = E ?? C ?? A ?? D, ue = B(
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
          const ke = g ?? _;
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
          const ke = g ?? _;
          ke && ke({ item: K, selectedItem: K });
        } else {
          const ke = g ?? _;
          ke && ke({ item: K, selectedItem: K });
        }
    },
    [
      ue,
      le,
      Q,
      yt,
      g,
      _,
      ae,
      ge
    ]
  ), je = B(
    async (K) => {
      const ee = ue(K);
      if (!!K.disabled) return;
      const Ne = G.has(ee), ke = p ?? y, Ce = S ?? v, We = pe(K), it = ne.get(ee) ?? We, Et = !(it !== void 0 && it.length > 0) && W != null;
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
      p,
      y,
      S,
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
  ), re = T !== void 0 ? new Set(T) : nt, Le = B(
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
      T === void 0 && Xt(de), L?.([...de]);
    },
    [
      O,
      j,
      T,
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
          const pn = ne.get(Be) ?? rt;
          pn && pn.length > 0 && ee(pn, Ne + 1, Be);
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
    const rt = G.has(Ce), Et = Q.has(Ce), mt = !!Ne.disabled, ze = fe.has(Ce), Tt = Ke === Ce, Zt = K.length, pn = ke + 1, Tn = he ? he(Ne) : We, jn = O ? {
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
          "aria-posinset": pn,
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
              mk,
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
const hk = "_root_10fdq_1", gk = "_panel_10fdq_8", bk = "_header_10fdq_19", yk = "_listbox_10fdq_28", xk = "_option_10fdq_42", vk = "_disabled_10fdq_57", wk = "_active_10fdq_66", kk = "_selected_10fdq_70", Nk = "_empty_10fdq_86", Sk = "_controls_10fdq_93", Ok = "_reorder_10fdq_102", $k = "_btn_10fdq_110", tt = {
  root: hk,
  panel: gk,
  header: bk,
  listbox: yk,
  option: xk,
  disabled: vk,
  active: wk,
  selected: kk,
  empty: Nk,
  controls: Sk,
  reorder: Ok,
  btn: $k
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function cs(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function $O({
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
  keyProperty: b,
  KeyProperty: m,
  onMove: g,
  Move: _,
  ariaLabel: p,
  AriaLabel: y,
  className: S
}) {
  const v = b ?? m ?? "id", $ = p ?? y ?? "PickList", N = e ?? t ?? l ?? i ?? a ?? c ?? [], E = n ?? r ?? d ?? o ?? [], [C, A] = q(() => [
    ...N
  ]), [D, I] = q(() => [
    ...E
  ]);
  ve(() => {
    const z = e ?? t ?? l ?? i ?? a ?? c;
    z !== void 0 && A([...z]);
  }, [e, t, l, i, a, c]), ve(() => {
    const z = n ?? r ?? d ?? o;
    z !== void 0 && I([...z]);
  }, [n, r, d, o]);
  const [w, O] = q(
    () => /* @__PURE__ */ new Set()
  ), [T, P] = q(
    () => /* @__PURE__ */ new Set()
  ), [L, j] = q(() => {
    const z = N.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), [F, X] = q(() => {
    const z = E.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), ie = Oe(
    () => C.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [C]
  ), te = Oe(
    () => D.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [D]
  );
  ve(() => {
    if (L >= C.length) {
      const z = ie[ie.length - 1];
      j(z ?? 0);
    } else if (C.length > 0 && ie.length > 0 && !ie.includes(L)) {
      const z = ie[0];
      z !== void 0 && j(z);
    }
  }, [L, C.length, ie]), ve(() => {
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
        C.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [C, v]), ve(() => {
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
      (g ?? _)?.(z);
    },
    [g, _]
  ), W = B(
    (z) => {
      const Y = C[z];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      O((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), j(z);
    },
    [C, v]
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
    for (const Ee of C) {
      const je = It(Ee, v);
      w.has(je) && !Ee.disabled ? z.push(Ee) : Y.push(Ee);
    }
    if (z.length === 0) return;
    const Q = Y, ge = [...D, ...z];
    A(Q), I(ge), O(/* @__PURE__ */ new Set());
    const ae = new Set(z.map((Ee) => It(Ee, v)));
    P(ae), we(Q), le(ge), _e({
      source: Q,
      target: ge,
      moved: z,
      direction: "toTarget"
    });
  }, [
    C,
    D,
    w,
    v,
    we,
    le,
    _e
  ]), ye = B(() => {
    const z = [], Y = [];
    for (const Ee of D) {
      const je = It(Ee, v);
      T.has(je) && !Ee.disabled ? z.push(Ee) : Y.push(Ee);
    }
    if (z.length === 0) return;
    const Q = Y, ge = [...C, ...z];
    I(Q), A(ge), P(/* @__PURE__ */ new Set());
    const ae = new Set(z.map((Ee) => It(Ee, v)));
    O(ae), we(ge), le(Q), _e({
      source: ge,
      target: Q,
      moved: z,
      direction: "toSource"
    });
  }, [
    C,
    D,
    T,
    v,
    we,
    le,
    _e
  ]), pe = B(() => {
    const z = C.filter((ge) => !ge.disabled);
    if (z.length === 0) return;
    const Y = C.filter((ge) => !!ge.disabled), Q = [...D, ...z];
    A(Y), I(Q), O(/* @__PURE__ */ new Set()), we(Y), le(Q), _e({
      source: Y,
      target: Q,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    C,
    D,
    v,
    we,
    le,
    _e
  ]), De = B(() => {
    const z = D.filter((ge) => !ge.disabled);
    if (z.length === 0) return;
    const Y = D.filter((ge) => !!ge.disabled), Q = [...C, ...z];
    I(Y), A(Q), P(/* @__PURE__ */ new Set()), we(Q), le(Y), _e({
      source: Q,
      target: Y,
      moved: z,
      direction: "allToSource"
    });
  }, [C, D, we, le, _e]), G = B(() => {
    if (T.size === 0) return;
    const z = [...D], Y = T, Q = [];
    for (let ae = 1; ae < z.length; ae++) {
      const Ee = z[ae], je = z[ae - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (z[ae - 1] = Ee, z[ae] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    I(z), le(z), _e({ source: C, target: z, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = z.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    D,
    T,
    v,
    C,
    le,
    _e
  ]), $e = B(() => {
    if (T.size === 0) return;
    const z = [...D], Y = T, Q = [];
    for (let ae = z.length - 2; ae >= 0; ae--) {
      const Ee = z[ae], je = z[ae + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (z[ae] = je, z[ae + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    I(z), le(z), _e({ source: C, target: z, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = z.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    D,
    T,
    v,
    C,
    le,
    _e
  ]), ne = w.size > 0, Ae = T.size > 0, fe = oe(""), Fe = oe(
    null
  ), Ge = oe(""), Je = oe(
    null
  ), At = B(
    (z) => {
      if (C.length === 0) return;
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
          (Qe) => cs(C[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [C, ie, L, W]
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
          (Qe) => cs(D[Qe]).toLowerCase().startsWith(ae)
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
      className: [tt.root, S].filter(Boolean).join(" "),
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
              children: C.length === 0 ? (
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
              ) : C.map((z, Y) => {
                const Q = It(z, v), ge = w.has(Q), ae = Y === L, Ee = !!z.disabled;
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
                    children: cs(z)
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
              "aria-disabled": C.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: C.filter((z) => !z.disabled).length === 0,
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
              "aria-disabled": C.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: C.filter((z) => !z.disabled).length === 0,
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
                const Q = It(z, v), ge = T.has(Q), ae = Y === F, Ee = !!z.disabled;
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
                    children: cs(z)
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
const Ek = "_root_1qxsp_1", Tk = "_header_1qxsp_8", Ck = "_title_1qxsp_15", Ak = "_navBtn_1qxsp_20", Dk = "_resources_1qxsp_39", Mk = "_resource_1qxsp_39", Ik = "_grid_1qxsp_50", zk = "_timeCol_1qxsp_55", Lk = "_timeCell_1qxsp_61", Rk = "_dayCol_1qxsp_66", Pk = "_dayHeader_1qxsp_73", jk = "_slot_1qxsp_81", Bk = "_event_1qxsp_91", Gt = {
  root: Ek,
  header: Tk,
  title: Ck,
  navBtn: Ak,
  resources: Dk,
  resource: Mk,
  grid: Ik,
  timeCol: zk,
  timeCell: Lk,
  dayCol: Rk,
  dayHeader: Pk,
  slot: jk,
  event: Bk
};
function ll(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function EO({
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
  }, h = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, g) => {
    const _ = new Date(u);
    return _.setDate(u.getDate() - u.getDay() + g), _;
  }) : Array.from({ length: 30 }, (m, g) => {
    const _ = new Date(u);
    return _.setDate(1 + g), _;
  }), b = Array.from({ length: 12 }, (m, g) => 8 + g);
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
          /* @__PURE__ */ s("div", { className: Gt.timeCol, role: "presentation", children: b.map((m) => /* @__PURE__ */ M("div", { className: Gt.timeCell, children: [
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
                b.map((g) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(m);
                      _.setHours(g), d?.({ date: _ });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === m.toDateString()).map((g) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${g.title} ${ll(g.start)} - ${ll(g.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: g }),
                    children: g.title
                  },
                  g.id
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
const Fk = "_root_dj5ne_1", Hk = "_header_dj5ne_8", Uk = "_headerCell_dj5ne_15", qk = "_timeline_dj5ne_21", Kk = "_row_dj5ne_26", Wk = "_taskName_dj5ne_32", Gk = "_timelineCell_dj5ne_37", Vk = "_bar_dj5ne_43", Yk = "_progress_dj5ne_56", Xk = "_dep_dj5ne_61", En = {
  root: Fk,
  header: Hk,
  headerCell: Uk,
  timeline: qk,
  row: Kk,
  taskName: Wk,
  timelineCell: Gk,
  bar: Vk,
  progress: Yk,
  dep: Xk
};
function TO({
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
const Zk = "_root_4b64f_1", Jk = "_fields_4b64f_6", Qk = "_chip_4b64f_13", eN = "_table_4b64f_35", tN = "_totalRow_4b64f_55", nN = "_total_4b64f_55", gr = {
  root: Zk,
  fields: Jk,
  chip: Qk,
  table: eN,
  totalRow: tN,
  total: nN
}, ds = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function jr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function CO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const o = t, a = n, c = r, f = (g, _, p) => {
    const y = g === "row" ? o.filter(($) => $.property !== _) : o, S = g === "col" ? a.filter(($) => $.property !== _) : a, v = g === "agg" ? c.filter(($) => !($.property === _ && $.aggregate === p)) : c;
    l?.({
      rowFields: y,
      columnFields: S,
      aggregateFields: v
    });
  }, u = (g, _) => _.map((p) => String(g[p.property])).join(""), x = [
    ...new Set(o.length ? e.map((g) => u(g, o)) : [""])
  ].sort(), h = [
    ...new Set(a.length ? e.map((g) => u(g, a)) : [""])
  ].sort(), b = (g, _, p) => {
    const y = e.filter(
      (v) => u(v, o) === g && u(v, a) === _
    ), S = y.map((v) => Number(v[p.property])).filter((v) => !Number.isNaN(v));
    return !S.length && p.aggregate !== "Count" ? 0 : ds[p.aggregate](
      p.aggregate === "Count" ? y.map(() => 1) : S
    );
  }, m = (g, _, p, y) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: gr.chip,
      "aria-label": `Remove ${g} field ${p}`,
      onClick: () => f(g, _, y),
      children: [
        p,
        y ? ` (${y})` : ""
      ]
    },
    `${g}-${p}-${y ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [gr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: gr.fields, children: [
      o.map((g) => m("row", g.property, g.title ?? g.property)),
      a.map((g) => m("col", g.property, g.title ?? g.property)),
      c.map(
        (g) => m("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: gr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        h.map((g) => /* @__PURE__ */ s("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        x.map((g) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: g || "—" }),
          h.map((_) => /* @__PURE__ */ s(
            "td",
            {
              title: jr(
                b(
                  g,
                  _,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? jr(b(g, _, c[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ s("td", { className: gr.total, children: c.length ? jr(
            ds[c[0].aggregate](
              h.flatMap(
                (_) => e.filter(
                  (p) => u(p, o) === g && u(p, a) === _
                ).map((p) => Number(p[c[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ M("tr", { className: gr.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          h.map((g) => /* @__PURE__ */ s("td", { children: c.length ? jr(
            ds[c[0].aggregate](
              e.filter((_) => u(_, a) === g).map((_) => Number(_[c[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, g)),
          /* @__PURE__ */ s("td", { children: c.length ? jr(
            ds[c[0].aggregate](
              e.map((g) => Number(g[c[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const rN = "_root_1r7co_1", sN = "_reverse_1r7co_10", oN = "_item_1r7co_14", lN = "_marker_1r7co_35", aN = "_body_1r7co_46", iN = "_label_1r7co_50", cN = "_content_1r7co_56", tr = {
  root: rN,
  reverse: sN,
  item: oN,
  marker: lN,
  body: aN,
  label: iN,
  content: cN
};
function AO({
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
const dN = "_root_rm4d8_1", uN = "_header_rm4d8_13", fN = "_headCell_rm4d8_22", _N = "_row_rm4d8_32", pN = "_cell_rm4d8_37", Br = {
  root: dN,
  header: uN,
  headCell: fN,
  row: _N,
  cell: pN
};
function DO({
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
  ), [c, f] = q(0), u = oe(/* @__PURE__ */ new Set()), x = Math.ceil(n / t), h = Math.max(0, Math.floor(c / t) - 3), b = Math.min(e, h + x + 6), m = B(
    (_, p) => {
      let y = !1;
      for (let S = _; S < p; S++)
        !o.has(S) && !u.current.has(S) && (y = !0);
      if (y) {
        for (let S = _; S < p; S++) u.current.add(S);
        r({ skip: _, top: p }).then((S) => {
          a((v) => {
            const $ = new Map(v);
            return S.forEach((N, E) => $.set(_ + E, N)), $;
          });
          for (let v = _; v < p; v++) u.current.delete(v);
        });
      }
    },
    [o, r]
  );
  ve(() => {
    m(h, b);
  }, [h, b]);
  const g = [];
  for (let _ = h; _ < b; _++) {
    const p = o.get(_) ?? {};
    g.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Br.row,
          role: "row",
          style: { height: t },
          children: l.map((y) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Br.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(p[y.property] ?? "")
            },
            y.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Br.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (_) => f(_.target.scrollTop),
      onKeyDown: (_) => {
        const p = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), p.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), p.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), p.scrollTop += n) : _.key === "PageUp" && (_.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: h * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Br.header, role: "row", children: l.map((_) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Br.headCell,
            style: {
              height: t,
              ..._.width ? { width: _.width } : {}
            },
            children: _.title ?? _.property
          },
          _.property
        )) }),
        g,
        /* @__PURE__ */ s(
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
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const m = this.getPenaltyScore();
          m < h && (f = b, h = m), this.applyMask(b);
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
      let h, b;
      for (h = c; ; h++) {
        const p = t.getNumDataCodewords(h, a) * 8, y = i.getTotalBits(o, h);
        if (y <= p) {
          b = y;
          break;
        }
        if (h >= f)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && b <= t.getNumDataCodewords(h, p) * 8 && (a = p);
      let m = [];
      for (const p of o) {
        n(p.mode.modeBits, 4, m), n(p.numChars, p.mode.numCharCountBits(h), m);
        for (const y of p.getData()) m.push(y);
      }
      l(m.length == b);
      const g = t.getNumDataCodewords(h, a) * 8;
      l(m.length <= g), n(0, Math.min(4, g - m.length), m), n(0, (8 - m.length % 8) % 8, m), l(m.length % 8 == 0);
      for (let p = 236; m.length < g; p ^= 253)
        n(p, 8, m);
      let _ = [];
      for (; _.length * 8 < m.length; ) _.push(0);
      return m.forEach(
        (p, y) => _[y >>> 3] |= p << 7 - (y & 7)
      ), new t(h, a, _, u);
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
      ), h = f - x % f, b = Math.floor(x / f);
      let m = [];
      const g = t.reedSolomonComputeDivisor(u);
      for (let p = 0, y = 0; p < f; p++) {
        let S = o.slice(
          y,
          y + b - u + (p < h ? 0 : 1)
        );
        y += S.length;
        const v = t.reedSolomonComputeRemainder(S, g);
        p < h && S.push(0), m.push(S.concat(v));
      }
      let _ = [];
      for (let p = 0; p < m[0].length; p++)
        m.forEach((y, S) => {
          (p != b - u || S >= h) && _.push(y[p]);
        });
      return l(_.length == x), _;
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
            const x = c - u, b = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[b][x] && a < o.length * 8 && (this.modules[b][x] = r(o[a >>> 3], 7 - (a & 7)), a++);
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
        let x = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == x ? (h++, h == 5 ? o += t.PENALTY_N1 : h > 5 && o++) : (this.finderPenaltyAddHistory(h, b), x || (o += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), x = this.modules[u][m], h = 1);
        o += this.finderPenaltyTerminateAndCount(x, h, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let x = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == x ? (h++, h == 5 ? o += t.PENALTY_N1 : h > 5 && o++) : (this.finderPenaltyAddHistory(h, b), x || (o += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), x = this.modules[m][u], h = 1);
        o += this.finderPenaltyTerminateAndCount(x, h, b) * t.PENALTY_N3;
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
const mN = "_root_1leml_1", hN = {
  root: mN
}, gN = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function MO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: o
}) {
  const a = i ?? `QR code for ${e}`, c = oe(null), f = to("(prefers-color-scheme: dark)"), [u, x] = q(null);
  ve(() => {
    const S = document.documentElement;
    x(S.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      x(S.dataset.theme ?? null);
    });
    return v.observe(S, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const h = Oe(() => {
    try {
      return vn.QrCode.encodeText(e, gN[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = oe(null);
  ve(() => {
    if (h !== null) {
      b.current = null;
      return;
    }
    const S = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(S), (b.current?.value !== e || b.current?.onError !== o) && (b.current = { value: e, onError: o }, o?.(S));
  }, [h, e, o]);
  const m = Math.max(0, Math.floor(l)), g = [hN.root, d].filter(Boolean).join(" ");
  if (ve(() => {
    if (n !== "canvas" || h === null) return;
    const S = c.current, v = S?.getContext("2d");
    if (!S || !v) return;
    const $ = getComputedStyle(S), N = $.getPropertyValue("--dx-text-color").trim() || "#000", E = $.getPropertyValue("--dx-surface-color").trim() || "#fff";
    bN(v, h, t, m, N, E);
  }, [n, h, t, m, f, u]), h === null)
    return /* @__PURE__ */ s("div", { className: g, role: "img", "aria-label": a, "data-qr-error": "true" });
  const _ = h.size + m * 2, p = t / _;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: c,
        className: g,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const y = [];
  for (let S = 0; S < h.size; S++)
    for (let v = 0; v < h.size; v++)
      h.getModule(v, S) && y.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (v + m) * p,
            y: (S + m) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${v}-${S}`
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
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function bN(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const yN = "_root_1v9la_1", xN = "_value_1v9la_9", al = {
  root: yN,
  value: xN
}, il = [
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
], cl = 104, vN = 106;
function wN(e) {
  const t = [cl];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = cl;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, vN), t;
}
function IO({
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
    for (const f of wN(e)) {
      const u = il[f] ?? il[0];
      for (let x = 0; x < u.length; x++) {
        const h = Number(u[x]);
        x % 2 === 0 && a.push({ x: c, w: h }), c += h;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [al.root, i].filter(Boolean).join(" "), children: [
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
    r && /* @__PURE__ */ s("span", { className: al.value, children: e })
  ] });
}
const kN = "_root_16i43_1", NN = "_svg_16i43_10", SN = "_gridline_16i43_15", ON = "_tickLabel_16i43_21", $N = "_axisTitle_16i43_27", EN = "_dataLabel_16i43_34", TN = "_gaugeValue_16i43_40", CN = "_legend_16i43_47", AN = "_legendItem_16i43_55", DN = "_swatch_16i43_63", MN = "_tooltip_16i43_70", IN = "_visuallyHidden_16i43_84", ft = {
  root: kN,
  svg: NN,
  gridline: SN,
  tickLabel: ON,
  axisTitle: $N,
  dataLabel: EN,
  gaugeValue: TN,
  legend: CN,
  legendItem: AN,
  swatch: DN,
  tooltip: MN,
  visuallyHidden: IN
}, dl = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], jl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), zN = /* @__PURE__ */ new Set([...jl, "heatmap"]);
function LN(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, o = [];
  for (let a = i; a <= d + 1e-9; a += l)
    o.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: o };
}
function RN(e) {
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
function PN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o } = e, a = i.l + d / 2, c = i.t + o / 2, f = Math.min(d, o) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, x = r.reduce((b, m) => b + (Number(m.val) || 0), 0);
  let h = -90;
  return Vn(
    n,
    t,
    r.map((b, m) => {
      const g = x ? b.val / x * 360 : 0, _ = h, p = h + g;
      h = p;
      const y = g > 180 ? 1 : 0, S = a + f * Math.cos(Ut(_)), v = c + f * Math.sin(Ut(_)), $ = a + f * Math.cos(Ut(p)), N = c + f * Math.sin(Ut(p)), E = a + u * Math.cos(Ut(p)), C = c + u * Math.sin(Ut(p)), A = a + u * Math.cos(Ut(_)), D = c + u * Math.sin(Ut(_)), I = u ? `M ${S} ${v} A ${f} ${f} 0 ${y} 1 ${$} ${N} L ${E} ${C} A ${u} ${u} 0 ${y} 0 ${A} ${D} Z` : `M ${a} ${c} L ${S} ${v} A ${f} ${f} 0 ${y} 1 ${$} ${N} Z`, w = (_ + p) / 2, O = a + (f + 12) * Math.cos(Ut(w)), T = c + (f + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: I,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(O, T, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: O,
            y: T,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: b.val
          }
        )
      ] }, m);
    })
  );
}
function jN(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: o, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((x, h) => [x, h]));
  return Vn(
    n,
    t,
    r.map((x, h) => {
      const b = u.get(x.cat) ?? 0, m = Number(r[h].cat), g = Number.isNaN(m) ? a(b) : i.l + (m - o.min) / (o.max - o.min || 1) * d, _ = c(x.val), p = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "circle",
          {
            cx: g,
            cy: _,
            r: p,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ s(
          "circle",
          {
            cx: g,
            cy: _,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(g, _, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, h);
    })
  );
}
function BN(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: o, categories: a, series: c } = e, f = new Map(a.map((b, m) => [b, m])), u = (b) => {
    if (!t.stack) return i.min;
    let m = 0;
    for (let g = 0; g < n; g++) {
      const _ = c[g];
      if (_?.stack !== t.stack) continue;
      const p = _.data.find(
        (y) => String(y[_.categoryProperty] ?? "") === b
      );
      p && (m += Number(p[_.valueProperty]) || 0);
    }
    return m;
  }, x = r.map((b) => {
    const m = f.get(b.cat) ?? 0, g = u(b.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(g + b.val)}`;
  }).join(" "), h = r.map((b) => {
    const m = f.get(b.cat) ?? 0, g = u(b.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(g)}`;
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
      r.map((b, m) => {
        const g = f.get(b.cat) ?? 0, _ = u(b.cat), p = d(g), y = o(_ + b.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "circle",
            {
              cx: p,
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
              x: p - 12,
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(p, y, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: p,
              y: y - 8,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: b.val
            }
          )
        ] }, m);
      })
    ] })
  );
}
function FN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, xFor: c, yFor: f, categories: u, series: x } = e, h = new Map(u.map((m, g) => [m, g])), b = t.type === "bar";
  return Vn(
    n,
    t,
    r.map((m, g) => {
      const _ = h.get(m.cat) ?? 0;
      let p = 0;
      if (t.stack)
        for (let w = 0; w < n; w++) {
          const O = x[w];
          if (O?.stack !== t.stack) continue;
          const T = O.data.find(
            (P) => String(P[O.categoryProperty] ?? "") === m.cat
          );
          T && (p += Number(T[O.valueProperty]) || 0);
        }
      const y = p + m.val, S = x.filter(
        (w) => !w.stack || w.stack === t.stack
      ).length, v = d / Math.max(1, u.length), $ = b ? 18 : Math.max(12, v / (t.stack ? 1 : x.length) - 4), N = b ? i.l + p / (a.max - a.min || 1) * d : c(_) - $ / 2 + (t.stack ? 0 : n % S * $), E = b ? i.t + _ * o / Math.max(1, u.length) + 4 : f(y), C = b ? m.val / (a.max - a.min || 1) * d : $ - 4, A = b ? 16 : f(p) - f(y), D = b ? i.l + p / (a.max - a.min || 1) * d : N, I = b ? i.t + _ * o / Math.max(1, u.length) + 4 : E;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "rect",
          {
            x: D,
            y: I,
            width: b ? C : $ - 4,
            height: A,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              D + (b ? C : $) / 2,
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
            x: D + (b ? C : $) / 2,
            y: I - 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: m.val
          }
        )
      ] }, g);
    })
  );
}
function HN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = i.l + d / 2, h = i.t + o * 0.78, b = Math.min(d, o) * 0.36, m = 135, g = 270, _ = r.reduce(($, N) => $ + (Number(N.val) || 0), 0), p = a.max - a.min || 1, y = Math.min(1, Math.max(0, (_ - a.min) / p)), S = ($, N) => {
    const [E, C] = [
      x + b * Math.cos(Ut($)),
      h + b * Math.sin(Ut($))
    ], [A, D] = [
      x + b * Math.cos(Ut(N)),
      h + b * Math.sin(Ut(N))
    ], I = N - $ > 180 ? 1 : 0;
    return `M ${E} ${C} A ${b} ${b} 0 ${I} 1 ${A} ${D}`;
  }, v = Number(_.toFixed(2));
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
          d: S(m, m + g),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ s(
        "path",
        {
          d: S(m, m + g * y),
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
          d: S(m, m + g),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(x, h - b, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", _, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ s(
        "text",
        {
          x,
          y: h + b + 18,
          textAnchor: "middle",
          className: ft.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Bl(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, o = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (u) => Ut(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: o, angleFor: c, vertexFor: (u, x) => {
    const h = c(u);
    return [
      i + o * x * Math.cos(h),
      d + o * x * Math.sin(h)
    ];
  } };
}
function UN(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Bl(e);
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
function qN(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: x, vertexFor: h } = Bl(e), b = e.scale.max || 1, m = (_) => r.find((p) => p.cat === _)?.val ?? 0, g = i.map((_, p) => {
    const y = Math.min(1, Math.max(0, m(_) / b)), [S, v] = h(p, y);
    return `${S},${v}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      /* @__PURE__ */ s(
        "polygon",
        {
          points: g,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((_, p) => {
        const y = Math.min(1, Math.max(0, m(_) / b)), [S, v] = h(p, y), [$, N] = h(p, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "circle",
            {
              cx: S,
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
              cx: S,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && o($, N, `${t.title ?? _}: ${m(_)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const E = r.find((C) => C.cat === _);
                E && e.handleClick(t, E.cat, E.val, E.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s(
            "text",
            {
              x: c + (u + 14) * Math.cos(x(p)),
              y: f + (u + 14) * Math.sin(x(p)) + 4,
              textAnchor: "middle",
              className: ft.tickLabel,
              children: _
            }
          )
        ] }, _);
      })
    ] })
  );
}
function KN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, tooltipVisible: a, showTip: c, hideTip: f } = e, u = r, x = Math.max(1, ...u.map((m) => Number(m.val) || 0)), h = o / Math.max(1, u.length), b = i.l + d / 2;
  return Vn(
    n,
    t,
    u.map((m, g) => {
      const p = Math.max(0, Number(m.val) || 0) / x * d, y = u[g + 1], S = y ? Math.max(0, Number(y.val) || 0) / x * d : p * 0.7, v = i.t + g * h + 2, $ = Math.max(4, h - 6), N = 1 - g * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: `M ${b - p / 2} ${v} L ${b + p / 2} ${v} L ${b + S / 2} ${v + $} L ${b - S / 2} ${v + $} Z`,
            fill: l,
            fillOpacity: N,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(b, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
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
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, g);
    })
  );
}
function WN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = [];
  t.data.forEach((y) => {
    const S = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    x.includes(S) || x.push(S);
  });
  const h = r.map((y) => y.val).filter((y) => Number.isFinite(y)), b = h.length ? Math.min(...h) : 0, m = h.length ? Math.max(...h) : 1, g = d / Math.max(1, a.length), _ = o / Math.max(1, x.length), p = (y) => m === b ? 0.6 : 0.15 + 0.85 * ((y - b) / (m - b));
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      x.map((y, S) => /* @__PURE__ */ s(
        "text",
        {
          x: i.l - 8,
          y: i.t + S * _ + _ / 2 + 4,
          textAnchor: "end",
          className: ft.tickLabel,
          children: y
        },
        y
      )),
      r.map((y, S) => {
        const v = t.data[S], $ = a.indexOf(y.cat), N = x.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if ($ < 0 || N < 0) return null;
        const E = i.l + $ * g, C = i.t + N * _;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "rect",
            {
              x: E + 1,
              y: C + 1,
              width: Math.max(1, g - 2),
              height: Math.max(1, _ - 2),
              fill: l,
              fillOpacity: p(y.val),
              onMouseEnter: () => c && f(E + g / 2, C, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: E + g / 2,
              y: C + _ / 2 + 4,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: y.val
            }
          )
        ] }, S);
      })
    ] })
  );
}
function GN(e, t, n) {
  const r = RN(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return PN(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return jN(e, t, n, r, l);
    case "line":
    case "area":
      return BN(e, t, n, r, l);
    case "gauge":
      return HN(e, t, n, r, l);
    case "radar":
      return qN(e, t, n, r, l);
    case "funnel":
      return KN(e, t, n, r, l);
    case "heatmap":
      return WN(e, t, n, r, l);
    default:
      return FN(e, t, n, r, l);
  }
}
function zO({
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
    const A = /* @__PURE__ */ new Set();
    for (const D of e)
      for (const I of D.data) A.add(String(I[D.categoryProperty] ?? ""));
    return [...A];
  }, [e]), h = Oe(() => {
    const A = e.flatMap((I) => I.data.map((w) => Number(w[I.valueProperty]))).filter((I) => !Number.isNaN(I)), D = /* @__PURE__ */ new Map();
    for (const I of e) {
      if (!I.stack) continue;
      let w = D.get(I.stack);
      w || D.set(I.stack, w = /* @__PURE__ */ new Map());
      for (const O of I.data) {
        const T = String(O[I.categoryProperty] ?? ""), P = Number(O[I.valueProperty]);
        Number.isNaN(P) || w.set(T, (w.get(T) ?? 0) + P);
      }
    }
    for (const I of D.values()) A.push(...I.values());
    return A;
  }, [e]), b = r?.min ?? (h.length ? Math.min(0, ...h) : 0), m = r?.max ?? (h.length ? Math.max(...h) : 10), g = Oe(
    () => LN(b, m, r?.step),
    [b, m, r?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, p = t - _.l - _.r, y = n - _.t - _.b, S = (A) => _.l + A / Math.max(1, x.length - 1) * p, v = (A) => _.t + (1 - (A - g.min) / (g.max - g.min || 1)) * y, $ = (A, D) => D.color ?? dl[A % dl.length], N = e.some((A) => jl.has(A.type)), E = e.some((A) => zN.has(A.type)), C = {
    categories: x,
    scale: g,
    pad: _,
    plotW: p,
    plotH: y,
    xFor: S,
    yFor: v,
    colorFor: $,
    tooltipVisible: d,
    showTip: (A, D, I) => u({ x: A, y: D, text: I }),
    hideTip: () => u(null),
    handleClick: (A, D, I, w) => o?.({
      seriesTitle: A.title ?? "",
      category: D,
      value: I,
      item: w
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
              N && r?.gridlines !== !1 && g.ticks.map((A) => /* @__PURE__ */ s(
                "line",
                {
                  x1: _.l,
                  x2: _.l + p,
                  y1: v(A),
                  y2: v(A),
                  className: ft.gridline
                },
                A
              )),
              E && l?.gridlines && x.map((A, D) => /* @__PURE__ */ s(
                "line",
                {
                  x1: S(D),
                  x2: S(D),
                  y1: _.t,
                  y2: _.t + y,
                  className: ft.gridline
                },
                D
              )),
              N && g.ticks.map((A) => /* @__PURE__ */ s(
                "text",
                {
                  x: _.l - 8,
                  y: v(A) + 4,
                  textAnchor: "end",
                  className: ft.tickLabel,
                  children: A
                },
                A
              )),
              E && x.map((A, D) => /* @__PURE__ */ s(
                "text",
                {
                  x: S(D),
                  y: _.t + y + 16,
                  textAnchor: "middle",
                  className: ft.tickLabel,
                  children: A
                },
                A
              )),
              N && r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: _.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + y / 2})`,
                  className: ft.axisTitle,
                  children: r.title
                }
              ),
              E && l?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: _.l + p / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ft.axisTitle,
                  children: l.title
                }
              ),
              e.some((A) => A.type === "radar") && UN(C),
              e.map((A, D) => GN(C, A, D))
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
        i && /* @__PURE__ */ s("div", { className: ft.legend, children: e.map((A, D) => /* @__PURE__ */ M("span", { className: ft.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: ft.swatch,
              style: { backgroundColor: $(D, A) },
              "aria-hidden": "true"
            }
          ),
          A.title ?? `Series ${D + 1}`
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
                (A) => A.data.map((D, I) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ s("td", { children: A.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: A.rowProperty ? `${String(D[A.rowProperty] ?? "")} / ${String(D[A.categoryProperty] ?? "")}` : String(D[A.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(D[A.valueProperty] ?? "") })
                ] }, `${A.title}-${I}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function LO({ query: e, children: t }) {
  return to(e) ? /* @__PURE__ */ s(pt, { children: t }) : null;
}
function RO({ children: e, className: t }) {
  return /* @__PURE__ */ s("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function PO() {
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
  SS as AIChat,
  K_ as ALERT_ICON,
  VS as Accordion,
  AS as Alert,
  ZS as AutoComplete,
  LS as AutoGrid,
  WS as Avatar,
  ZN as Badge,
  IO as Barcode,
  PS as Body,
  xO as Breadcrumb,
  an as Button,
  XN as Card,
  SO as Carousel,
  zO as Chart,
  Gd as CheckBox,
  QS as CheckBoxList,
  oO as ColorPicker,
  IS as Column,
  mO as ContextMenuProvider,
  Or as DEFAULT_OPERATOR_BY_TYPE,
  ev as DEFAULT_PALETTE,
  uy as DEFAULT_THEMES,
  mS as DataFilter,
  hS as DataGrid,
  gS as DataList,
  lO as DatePicker,
  gl as Dialog,
  wS as DialogProvider,
  XS as DropDown,
  _O as DropZone,
  tS as EmptyState,
  _l as FILTER_OPERATORS,
  yO as FabMenu,
  sr as Field,
  rS as Fieldset,
  Ib as Footer,
  sS as Form,
  nS as FormField,
  TO as Gantt,
  Rb as Header,
  ES as HtmlEditor,
  Me as Icon,
  Jr as Input,
  bS as Label,
  RS as Layout,
  vO as Link,
  JS as ListBox,
  RO as LiveRegion,
  OS as Login,
  $S as Markdown,
  rO as Mask,
  LO as MediaQuery,
  cw as Menu,
  Ll as MenuItem,
  sO as Numeric,
  Tc as Pager,
  gO as PanelMenu,
  hO as PanelMenuItem,
  _f as Password,
  $O as PickList,
  CO as Pivot,
  CS as PopupProvider,
  bO as ProfileMenu,
  BS as Progress,
  MO as QRCode,
  eO as RadioButtonList,
  aO as Rating,
  MS as Row,
  EO as Scheduler,
  dO as SecurityCode,
  or as Select,
  tO as SelectBar,
  Yb as Sidebar,
  jS as SidebarToggle,
  uO as SignaturePad,
  DS as Skeleton,
  iO as Slider,
  nO as SplitButton,
  kO as Splitter,
  zS as Stack,
  QN as Stat,
  wO as Steps,
  yS as Switch,
  eS as Table,
  GS as Tabs,
  bl as Text,
  YS as TextArea,
  Qs as TextBox,
  FS as ThemeSwitcher,
  HS as ThemeToggle,
  cO as TimeSpanPicker,
  AO as Timeline,
  NS as ToastProvider,
  NO as Toc,
  by as ToggleButton,
  xS as Tooltip,
  OO as Tree,
  fO as Upload,
  DO as VirtualGrid,
  Rc as aggregateValue,
  ml as applyFilters,
  Lc as applyGridState,
  yo as collectGroupKeys,
  nr as columnValue,
  uS as compare,
  _S as custom,
  Mc as cycleSort,
  vo as defaultOperatorForType,
  lS as email,
  Zo as formatMasked,
  _s as formatValue,
  qS as getAppearance,
  fs as getByPath,
  US as getTheme,
  Cc as groupItems,
  JN as iconNames,
  pl as matchesFilters,
  cS as maxLength,
  iS as minLength,
  zc as paginate,
  aS as pattern,
  dS as range,
  n_ as renderMarkdown,
  oS as required,
  fS as requiredTrue,
  ul as resolveVariant,
  Li as runValidators,
  ky as setAppearance,
  wy as setTheme,
  Kr as shadeClass,
  Qi as sortItems,
  Ic as sortedItems,
  Yo as subscribe,
  Pc as toCsv,
  Vi as toFilterString,
  Ji as toODataFilterString,
  pO as useContextMenu,
  vS as useDialog,
  zi as useFormContext,
  pS as useFormField,
  PO as useLiveRegion,
  to as useMediaQuery,
  TS as usePopup,
  KS as useThemeService,
  kS as useToast
};
