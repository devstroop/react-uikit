import { jsx as s, jsxs as D, Fragment as pt } from "react/jsx-runtime";
import { forwardRef as st, useId as ot, isValidElement as qt, cloneElement as Qs, useState as q, useRef as oe, useCallback as B, useMemo as Oe, useContext as Pn, createContext as lr, useEffect as ve, Fragment as eo, useLayoutEffect as Bs, useImperativeHandle as xs, Children as Gr } from "react";
function Kr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Jl = "_button_eyvws_1", Ql = "_filled_eyvws_36", ea = "_flat_eyvws_55", ta = "_outlined_eyvws_58", na = "_text_eyvws_63", ra = "_loading_eyvws_506", sa = "_spinner_eyvws_509", oa = "_xs_eyvws_525", la = "_sm_eyvws_531", aa = "_md_eyvws_537", ia = "_lg_eyvws_543", ca = "_xl_eyvws_549", da = "_iconOnly_eyvws_555", ua = "_fullWidth_eyvws_585", Cn = {
  button: Jl,
  filled: Ql,
  flat: ea,
  outlined: ta,
  text: na,
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
  loading: ra,
  spinner: sa,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: oa,
  sm: la,
  md: aa,
  lg: ia,
  xl: ca,
  iconOnly: da,
  fullWidth: ua
};
function fa(e, t) {
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
      children: g,
      ...h
    } = t;
    if (f === !1) return null;
    const m = fa(r, l), p = m.style === "light" || m.style === "dark" ? null : Kr(i), _ = [
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
    ].filter(Boolean).join(" "), b = /* @__PURE__ */ D(pt, { children: [
      c ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      g
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...C } = h, A = x || c;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: N,
          className: _,
          "aria-disabled": A || void 0,
          "aria-busy": c || void 0,
          onClick: (z) => {
            if (A) {
              z.preventDefault();
              return;
            }
            S?.(z);
          },
          ...C,
          children: b
        }
      );
    }
    const { type: v = "button", ...$ } = h;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: x || c,
        "aria-busy": c || void 0,
        ...$,
        children: b
      }
    );
  }
), _a = "_card_4vcae_1", pa = "_elevated_4vcae_8", ma = "_filled_4vcae_13", ha = "_outlined_4vcae_18", ga = "_interactive_4vcae_22", ba = "_text_4vcae_30", ya = "_header_4vcae_46", xa = "_body_4vcae_53", va = "_footer_4vcae_63", kr = {
  card: _a,
  elevated: pa,
  filled: ma,
  outlined: ha,
  interactive: ga,
  text: ba,
  header: ya,
  body: xa,
  footer: va
}, dS = st(function({
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
    /* @__PURE__ */ D(
      "div",
      {
        ref: c,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (u) => {
          o?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [kr.card, kr[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: kr.header, children: n }),
          /* @__PURE__ */ s("div", { className: kr.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: kr.footer, children: r })
        ]
      }
    )
  );
});
function gl(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const wa = "_badge_1fy6d_1", ka = "_xs_1fy6d_21", Na = "_sm_1fy6d_26", Sa = "_md_1fy6d_31", Oa = "_lg_1fy6d_36", $a = "_xl_1fy6d_41", Ea = "_neutral_1fy6d_47", Ta = "_primary_1fy6d_52", Ca = "_secondary_1fy6d_61", Aa = "_light_1fy6d_66", Da = "_base_1fy6d_71", Ma = "_dark_1fy6d_76", Ia = "_info_1fy6d_81", za = "_success_1fy6d_86", La = "_warning_1fy6d_95", Ra = "_danger_1fy6d_104", Pa = "_filled_1fy6d_111", ja = "_outlined_1fy6d_161", Ba = "_text_1fy6d_213", Nr = {
  badge: wa,
  xs: ka,
  sm: Na,
  md: Sa,
  lg: Oa,
  xl: $a,
  neutral: Ea,
  primary: Ta,
  secondary: Ca,
  light: Aa,
  base: Da,
  dark: Ma,
  info: Ia,
  success: za,
  warning: La,
  danger: Ra,
  filled: Pa,
  outlined: ja,
  text: Ba,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, uS = st(function({
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
  const f = t, u = gl(n, "filled"), x = Kr(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: [
        Nr.badge,
        Nr[l],
        Nr[f],
        Nr[u],
        x ? Nr[x] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Fa = "_icon_vn4jx_5", Ha = "_xs_vn4jx_24", Ua = "_sm_vn4jx_28", qa = "_md_vn4jx_23", Wa = "_lg_vn4jx_36", Ka = "_xl_vn4jx_40", mo = {
  icon: Fa,
  xs: Ha,
  sm: Ua,
  md: qa,
  lg: Wa,
  xl: Ka
}, fS = [
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
      className: [mo.icon, a ? mo[n] : null, l].filter(Boolean).join(" "),
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
}), Ga = "_stat_sjin9_1", Va = "_label_sjin9_8", Ya = "_row_sjin9_16", Xa = "_value_sjin9_22", Za = "_delta_sjin9_28", Ja = "_success_sjin9_33", Qa = "_danger_sjin9_37", ei = "_neutral_sjin9_41", ti = "_hint_sjin9_45", Yn = {
  stat: Ga,
  label: Va,
  row: Ya,
  value: Xa,
  delta: Za,
  success: Ja,
  danger: Qa,
  neutral: ei,
  hint: ti
}, _S = st(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...o }, a) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: a,
      className: [Yn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: Yn.label, children: t }),
        /* @__PURE__ */ D("div", { className: Yn.row, children: [
          /* @__PURE__ */ s("div", { className: Yn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [Yn.delta, Yn[l]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ s("div", { className: Yn.hint, children: i })
      ]
    }
  );
}), ni = "_wrap_ipozk_1", ri = "_table_ipozk_8", si = "_caption_ipozk_14", oi = "_none_ipozk_51", li = "_horizontal_ipozk_57", ai = "_vertical_ipozk_67", ii = "_alternating_ipozk_85", ci = "_start_ipozk_89", di = "_center_ipozk_93", ui = "_end_ipozk_97", fi = "_empty_ipozk_101", Bn = {
  wrap: ni,
  table: ri,
  caption: si,
  none: oi,
  horizontal: li,
  vertical: ai,
  alternating: ii,
  start: ci,
  center: di,
  end: ui,
  empty: fi
};
function pS({
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
  return /* @__PURE__ */ D("div", { className: [Bn.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
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
const _i = "_emptyState_1swxw_1", pi = "_icon_1swxw_13", mi = "_title_1swxw_18", hi = "_description_1swxw_24", gi = "_action_1swxw_30", Sr = {
  emptyState: _i,
  icon: pi,
  title: mi,
  description: hi,
  action: gi
};
function mS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [Sr.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Sr.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Sr.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Sr.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Sr.action, children: r })
  ] });
}
const bi = "_field_149oz_1", yi = "_label_149oz_8", xi = "_required_149oz_14", vi = "_hint_149oz_19", wi = "_error_149oz_24", Or = {
  field: bi,
  label: yi,
  required: xi,
  hint: vi,
  error: wi
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
  const g = i != null ? u : c != null ? x : null, h = typeof d == "function" ? d({ inputId: f, hintId: x, errorId: u }) : d, m = qt(h) && typeof h.props.id == "string" ? h.props.id : void 0, y = m ?? t ?? f, p = qt(h) && (g != null || m == null && typeof h.type == "string"), _ = m != null || t != null || p, b = p && qt(h) ? Qs(h, {
    id: y,
    "aria-describedby": g != null ? [
      h.props["aria-describedby"],
      g
    ].filter((N) => typeof N == "string").join(" ") || void 0 : h.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : h.props["aria-invalid"]
  }) : h;
  return /* @__PURE__ */ D("div", { className: [Or.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Or.label,
        htmlFor: _ ? y : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: Or.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    b,
    i != null ? /* @__PURE__ */ s("div", { id: u, className: Or.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ s("div", { id: x, className: Or.hint, children: c }) : null
  ] });
}
const ki = "_formfield_6e25e_1", Ni = "_content_6e25e_8", Si = "_floating_6e25e_43", Oi = "_label_6e25e_111", $i = "_start_6e25e_132", Ei = "_required_6e25e_169", Ti = "_end_6e25e_175", Ci = "_filled_6e25e_192", Ai = "_flat_6e25e_199", Di = "_helper_6e25e_206", Mi = "_invalid_6e25e_211", kn = {
  formfield: ki,
  content: Ni,
  floating: Si,
  label: Oi,
  start: $i,
  required: Ei,
  end: Ti,
  filled: Ci,
  flat: Ai,
  helper: Di,
  invalid: Mi
};
function hS({
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
  const x = ot(), g = ot();
  if (u === !1) return null;
  const h = l ?? x, m = typeof c == "function" ? c({
    inputId: h
  }) : c, y = qt(m) ? m.type : null, p = typeof y == "string", _ = qt(m) && typeof y != "symbol", b = qt(m) ? m.props : null, N = typeof b?.id == "string" ? b.id : void 0, v = p && qt(m) ? m.type.toLowerCase() : null, $ = v != null && (v === "input" ? typeof b?.type != "string" || b.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = _ && (r != null || o || N == null && $), C = N != null || l != null || S, A = v === "input" && typeof b?.type == "string" ? b.type.toLowerCase() : null, z = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), M = S && qt(m) ? Qs(
    m,
    {
      id: N ?? h,
      ...i && z && b?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          b?.["aria-describedby"],
          g
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, E = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: kn.label,
      htmlFor: C ? N ?? h : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ s("span", { className: kn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
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
        i ? null : E,
        /* @__PURE__ */ D("div", { className: kn.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: kn.start, children: t }),
          M,
          i ? E : null,
          n != null && /* @__PURE__ */ s("div", { className: kn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: g, className: kn.helper, children: r })
      ]
    }
  );
}
const Ii = "_fieldset_8x01p_1", zi = "_legend_8x01p_11", Li = "_legendText_8x01p_20", Ri = "_toggle_8x01p_24", Pi = "_content_8x01p_45", ji = "_summary_8x01p_49", Xn = {
  fieldset: Ii,
  legend: zi,
  legendText: Li,
  toggle: Ri,
  content: Pi,
  summary: ji
};
function gS({
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
  onCollapse: g,
  children: h,
  className: m,
  visible: y = !0
}) {
  const p = ot(), [_, b] = q(d);
  if (y === !1) return null;
  const N = i ?? _, v = l ? `${p}-content` : void 0, $ = () => {
    const E = !N;
    i === void 0 && b(E), E ? g?.() : x?.();
  }, S = l || e != null || n != null || t != null, C = l ? N : !1, A = l && N && o != null, z = C ? a ?? "Expand" : c ?? "Collapse", M = C ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [Xn.fieldset, m].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ s("legend", { className: Xn.legend, children: l ? /* @__PURE__ */ D(pt, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: Xn.toggle,
              title: z,
              "aria-label": e == null ? M : void 0,
              "aria-expanded": !C,
              "aria-controls": v,
              onClick: $,
              children: [
                /* @__PURE__ */ s(
                  Me,
                  {
                    icon: C ? "add" : "remove",
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
        ] }) : /* @__PURE__ */ D(pt, { children: [
          n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ s("span", { className: Xn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: Xn.content,
            id: v,
            hidden: C,
            children: h
          }
        ),
        A ? /* @__PURE__ */ s("div", { className: Xn.summary, children: o }) : null
      ]
    }
  );
}
const Bi = "_form_abp5n_1", Fi = {
  form: Bi
}, bl = lr(null);
function Hi() {
  const e = Pn(bl);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function bS({
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
  const x = B((b) => {
    a(
      (N) => N[b.name] === b ? N : { ...N, [b.name]: b }
    );
  }, []), g = B((b) => {
    a((N) => {
      if (!(b in N)) return N;
      const v = { ...N };
      return delete v[b], v;
    });
  }, []), h = B(() => {
    const b = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (b[N.name] = v);
    }
    return b;
  }, []), m = B(() => {
    const b = h();
    f((N) => N + 1), Object.keys(b).length === 0 ? t?.(e) : n?.(b);
  }, [h, e, t, n]), y = (b) => {
    r != null && l != null || (b.preventDefault(), m());
  }, p = Oe(
    () => ({ registerField: x, unregisterField: g, submit: m, submitCount: c }),
    [x, g, m, c]
  ), _ = [Fi.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(bl.Provider, { value: p, children: /* @__PURE__ */ s(
    "form",
    {
      className: _,
      onSubmit: y,
      action: r,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const ar = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", yS = (e = "Required") => (t) => ar(t) ? e : null, xS = (e = "Invalid email") => (t) => ar(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, vS = (e, t = "Invalid format") => (n) => ar(n) || e.test(String(n)) ? null : t, wS = (e, t = `Minimum ${e} characters`) => (n) => ar(n) || String(n).length >= e ? null : t, kS = (e, t = `Maximum ${e} characters`) => (n) => ar(n) || String(n).length <= e ? null : t, NS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ar(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, SS = (e, t = "Values do not match") => (n, r) => {
  if (ar(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, OS = (e = "Required") => (t) => t === !0 ? null : e, $S = (e) => (t, n) => e(t, n);
function Ui(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function ES(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Hi(), [i, d] = q(t?.initialValue), [o, a] = q(!1), [c, f] = q(!1), u = oe(() => []);
  u.current = () => Ui(t?.validate ?? [], i), ve(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ve(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const x = o && !c ? u.current() : [];
  return { value: i, setValue: (h) => {
    d(h), f(!0);
  }, errors: x };
}
const qi = "_select_1xe98_1", Wi = "_invalid_1xe98_33", Ki = "_xs_1xe98_40", Gi = "_sm_1xe98_48", Vi = "_md_1xe98_56", Yi = "_lg_1xe98_62", Xi = "_xl_1xe98_68", Es = {
  select: qi,
  invalid: Wi,
  xs: Ki,
  sm: Gi,
  md: Vi,
  lg: Yi,
  xl: Xi
}, or = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          Es.select,
          Es[t],
          n ? Es.invalid : null,
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
), yl = [
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
], $r = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Zi = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Ji(e) {
  return Zi.includes(e);
}
function ps(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function ho(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Hr(e, t) {
  const n = ho(e), r = ho(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function vs(e) {
  if (e.secondOperator == null) return !1;
  if (Ji(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function go(e, t, n) {
  const r = ps(t, e.property), l = bo(
    r,
    e.value,
    e.operator,
    n
  );
  if (!vs(e)) return l;
  const i = bo(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function bo(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), o = i(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => i(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => i(a) === o));
    case "LessThan":
      return Hr(d, o) < 0;
    case "LessThanOrEquals":
      return Hr(d, o) <= 0;
    case "GreaterThan":
      return Hr(d, o) > 0;
    case "GreaterThanOrEquals":
      return Hr(d, o) >= 0;
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
function to(e) {
  return "filters" in e;
}
function xl(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (to(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => xl(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", go(t, e, l);
}
function vl(e, t, n = {}) {
  return e.filter((r) => xl(r, t, n));
}
function Qi(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${Qi(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function ec(e) {
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
  if (!vs(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function tc(e) {
  return to(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(tc).filter(Boolean).join(` ${e.operator} `)})` : ec(e);
}
function nc(e) {
  return e.replace(/'/g, "''");
}
const rc = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function sc(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${nc(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", x = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${rc[c]} ${u && r ? l(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${x} in (${f.map((g) => i(g)).join(", ")})` : `${x} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${x} in (${f.map((g) => i(g)).join(", ")}))` : `not(${x} in (${i(f)}))`;
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
  if (!vs(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function oc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (to(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => oc(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return sc(e, n);
}
function lc(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = Hr(
        ps(n, l.property),
        ps(r, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const ac = "_filter_1dvqt_1", ic = "_rows_1dvqt_9", cc = "_row_1dvqt_9", dc = "_join_1dvqt_21", uc = "_property_1dvqt_30", fc = "_operator_1dvqt_34", _c = "_value_1dvqt_38", pc = "_remove_1dvqt_42", mc = "_bar_1dvqt_58", hc = "_add_1dvqt_64", gc = "_custom_1dvqt_78", bc = "_summary_1dvqt_82", yc = "_second_1dvqt_87", xc = "_secondAdd_1dvqt_91", vc = "_addSecond_1dvqt_95", wc = "_joinSelect_1dvqt_109", ht = {
  filter: ac,
  rows: ic,
  row: cc,
  join: dc,
  property: uc,
  operator: fc,
  value: _c,
  remove: pc,
  bar: mc,
  add: hc,
  custom: gc,
  summary: bc,
  second: yc,
  secondAdd: xc,
  addSecond: vc,
  joinSelect: wc
}, Er = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], yo = {
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
function xo({
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
function TS({
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
        operator: $r[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, _) => {
    f(
      (b) => b.map((N) => N.id === p ? { ...N, ..._ } : N)
    );
  }, x = () => {
    const p = c[c.length - 1], _ = Math.max(0, ...c.map((N) => N.id)) + 1, b = e[0];
    f((N) => [
      ...N,
      {
        id: _,
        property: p?.property ?? b?.name ?? "",
        operator: $r[e.find(
          (v) => v.name === (p?.property ?? b?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, g = (p) => {
    f(
      (_) => _.length > 1 ? _.filter((b) => b.id !== p) : _
    );
  }, h = Oe(() => {
    const p = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !Er.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && vs(_) && (N.secondOperator = v, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), p.push(N);
    }
    return p;
  }, [c]), m = Oe(() => o == null || h.length === 0 ? o : vl(o, {
    operator: t,
    filters: h
  }, {
    caseSensitivity: n
  }), [o, h, t, n]);
  ve(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const y = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ D("div", { className: [ht.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: ht.rows, role: "group", "aria-label": "Filter conditions", children: c.map((p, _) => {
      const b = y(p.property), N = l ? [$r[b.type ?? "string"]] : yl, v = !Er.includes(p.operator), $ = p.secondOperator != null;
      return /* @__PURE__ */ D(eo, { children: [
        /* @__PURE__ */ D("div", { className: ht.row, children: [
          _ > 0 ? /* @__PURE__ */ s("span", { className: ht.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            or,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: ht.property,
              value: p.property,
              onChange: (S) => {
                const C = e.find(
                  (A) => A.name === S.target.value
                );
                u(p.id, {
                  property: S.target.value,
                  operator: $r[C?.type ?? "string"],
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
            or,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: ht.operator,
              value: p.operator,
              onChange: (S) => {
                const C = S.target.value;
                u(
                  p.id,
                  Er.includes(C) ? {
                    operator: C,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: C }
                );
              },
              options: N.map((S) => ({
                value: S,
                label: yo[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ s(
            xo,
            {
              property: b,
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
              onClick: () => g(p.id),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? $ ? /* @__PURE__ */ D(
          "div",
          {
            className: [ht.row, ht.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                or,
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
                or,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: ht.operator,
                  value: p.secondOperator,
                  onChange: (S) => {
                    const C = S.target.value;
                    u(
                      p.id,
                      Er.includes(C) ? { secondOperator: C, secondValue: void 0 } : { secondOperator: C }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: yo[S]
                  }))
                }
              ),
              p.secondOperator == null || !Er.includes(p.secondOperator) ? /* @__PURE__ */ s(
                xo,
                {
                  property: b,
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
              secondOperator: $r[b.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ D("div", { className: ht.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: ht.add, onClick: x, children: "Add filter" }),
      a != null ? /* @__PURE__ */ s("div", { className: ht.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ D("span", { className: ht.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const kc = "_pager_1du31_1", Nc = "_alignLeft_1du31_10", Sc = "_alignCenter_1du31_14", Oc = "_alignRight_1du31_18", $c = "_alignJustify_1du31_22", Ec = "_summary_1du31_26", Tc = "_controls_1du31_31", Cc = "_button_1du31_37", Ac = "_active_1du31_73", Dc = "_ellipsis_1du31_85", Mc = "_size_1du31_91", Ft = {
  pager: kc,
  alignLeft: Nc,
  alignCenter: Sc,
  alignRight: Oc,
  alignJustify: $c,
  summary: Ec,
  controls: Tc,
  button: Cc,
  active: Ac,
  ellipsis: Dc,
  size: Mc
};
function Ic(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function vo(e, t) {
  return e.replace("{0}", String(t));
}
function zc(e, t, n) {
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
function Lc({
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
  firstPageTitle: g = "First page",
  prevPageTitle: h = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: y = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: b,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: $,
  visible: S = !0
}) {
  const C = n ?? r, [A, z] = q(C), M = n !== void 0, E = M ? C : A, w = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, E), w), T = a ?? !0, R = d || w > 1, L = zc(k, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      M || z(we);
      const le = (we - 1) * t;
      b?.({
        page: we,
        skip: le,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [M, b, w, t]
  ), F = o === "center" ? Ft.alignCenter : o === "right" ? Ft.alignRight : o === "justify" ? Ft.alignJustify : Ft.alignLeft, X = {
    count: e,
    pageNumber: k,
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
  return S === !1 || !R ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ft.pager, F, $].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        T && /* @__PURE__ */ s("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : Ic(f, k, w, e) }),
        /* @__PURE__ */ D(
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
                  disabled: k <= 1,
                  onClick: () => j(1),
                  "aria-label": g,
                  title: g,
                  children: "«"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: k <= 1,
                  onClick: () => j(k - 1),
                  "aria-label": h,
                  title: h,
                  children: "‹"
                }
              ),
              L.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ s("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === k ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === k ? "page" : void 0,
                    "aria-label": vo(_, te),
                    title: vo(p, te),
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
                  disabled: k >= w,
                  onClick: () => j(k + 1),
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
                  disabled: k >= w,
                  onClick: () => j(w),
                  "aria-label": y,
                  title: y,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ D("label", { className: Ft.size, children: [
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
function Fs(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ s(
    Lc,
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
const wl = "";
function Rc(e, t, n, r, l) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const i = (o) => n.find((a) => a.property === o), d = (o, a, c) => {
    const f = t[a];
    if (f === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const u = i(f), x = /* @__PURE__ */ new Map(), g = [];
    o.forEach((m) => {
      const y = String(l(m, f) ?? ""), p = x.get(y);
      p ? p.push(m) : (x.set(y, [m]), g.push(y));
    });
    const h = [];
    return g.forEach((m) => {
      const y = x.get(m), p = [...c, m].join(wl), _ = y[0], b = _ !== void 0 ? l(_, f) : void 0;
      h.push({
        type: "group",
        group: {
          key: p,
          display: ms(b, u?.format),
          property: f,
          title: u?.title ?? f,
          count: y.length,
          level: a
        }
      }), r.has(p) && h.push(...d(y, a + 1, [...c, m]));
    }), h;
  };
  return d(e, 0, []);
}
function wo(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, o) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const x = String(n(u, a) ?? ""), g = c.get(x);
      g ? g.push(u) : (c.set(x, [u]), f.push(x));
    }), f.forEach((u) => {
      const x = [...o, u].join(wl);
      r.add(x), l(c.get(u), d + 1, [...o, u]);
    });
  };
  return l(e, 0, []), r;
}
function Jr(e, t) {
  return e.property ?? `col-${t}`;
}
function Pc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function jc(e, t) {
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
    return ps(e, t);
}
function ms(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const ko = [
  "Ascending",
  "Descending",
  null
];
function Bc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = ko[(r ? ko.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Fc(e, t) {
  return lc(e, t);
}
function Hc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Uc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: jc(
        a.value,
        n.types?.[o] ?? "string"
      )
    })
  ), l = r.length > 0 ? vl(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Fc(l, t.sorts);
  return {
    ...Hc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function No(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function qc(e, t, n) {
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
function Wc(e, t, n = nr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(ms(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Kc = "_grid_13rur_1", Gc = "_toolbar_13rur_8", Vc = "_picker_13rur_13", Yc = "_pickerButton_13rur_17", Xc = "_pickerPanel_13rur_31", Zc = "_pickerItem_13rur_46", Jc = "_groupPanel_13rur_55", Qc = "_groupPanelActive_13rur_66", ed = "_groupPanelText_13rur_70", td = "_groupChip_13rur_74", nd = "_groupRemove_13rur_85", rd = "_groupRow_13rur_94", sd = "_groupCell_13rur_98", od = "_groupToggle_13rur_104", ld = "_editRow_13rur_117", ad = "_editCell_13rur_121", id = "_editInput_13rur_127", cd = "_commandCell_13rur_137", dd = "_commandButton_13rur_144", ud = "_data_13rur_159", fd = "_table_13rur_166", _d = "_header_13rur_172", pd = "_center_13rur_185", md = "_right_13rur_189", hd = "_sortButton_13rur_193", gd = "_sortIndicator_13rur_211", bd = "_sortIndex_13rur_215", yd = "_cell_13rur_226", xd = "_clickable_13rur_241", vd = "_frozen_13rur_249", wd = "_selected_13rur_255", kd = "_resizeHandle_13rur_263", Nd = "_filterCell_13rur_281", Sd = "_filterSelect_13rur_290", Od = "_filterInput_13rur_300", $d = "_empty_13rur_311", Ed = "_loading_13rur_317", Td = "_visuallyHidden_13rur_331", Cd = "_virtualScroller_13rur_340", Ad = "_spacerRow_13rur_345", Dd = "_footerRow_13rur_350", Md = "_footerCell_13rur_354", Id = "_footerValue_13rur_361", Se = {
  grid: Kc,
  toolbar: Gc,
  picker: Vc,
  pickerButton: Yc,
  pickerPanel: Xc,
  pickerItem: Zc,
  groupPanel: Jc,
  groupPanelActive: Qc,
  groupPanelText: ed,
  groupChip: td,
  groupRemove: nd,
  groupRow: rd,
  groupCell: sd,
  groupToggle: od,
  editRow: ld,
  editCell: ad,
  editInput: id,
  commandCell: cd,
  commandButton: dd,
  data: ud,
  table: fd,
  header: _d,
  center: pd,
  right: md,
  sortButton: hd,
  sortIndicator: gd,
  sortIndex: bd,
  cell: yd,
  clickable: xd,
  frozen: vd,
  selected: wd,
  resizeHandle: kd,
  filterCell: Nd,
  filterSelect: Sd,
  filterInput: Od,
  empty: $d,
  loading: Ed,
  visuallyHidden: Td,
  virtualScroller: Cd,
  spacerRow: Ad,
  footerRow: Dd,
  footerCell: Md,
  footerValue: Id
}, zd = {
  Ascending: "ascending",
  Descending: "descending"
};
function So(e, t) {
  return e.filterable ?? t;
}
function Ld(e, t) {
  return e.sortable ?? t;
}
function Rd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function CS({
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
  pagerPosition: g = "Bottom",
  showPagingSummary: h = !0,
  showPageSizeSelector: m = !0,
  selectionMode: y = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: b = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: S = !1,
  groupPanelText: C = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: z,
  showExportButton: M = !1,
  exportFileName: E = "grid-data",
  serverMode: w = !1,
  totalCount: k,
  onRangeChange: T,
  virtualize: R = !1,
  virtualRowHeight: L = 40,
  virtualHeight: j = 480,
  editMode: F = "None",
  allowRowCreate: X = !1,
  onRowUpdate: ie,
  onRowCreate: te,
  onRowDelete: we,
  isLoading: le = !1,
  empty: _e = "No records found",
  ariaLabel: K,
  className: he,
  onRowClick: ue
}) {
  const ye = K != null ? `${K} ` : "", [pe, De] = q([]), [G, $e] = q(
    /* @__PURE__ */ new Map()
  ), [ne, Ae] = q(1), [fe, Fe] = q(f), [Ge, Je] = q(
    () => e.map((H, U) => Jr(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? Jr(H, U) : "").filter(Boolean)
    )
  ), [yt, Z] = q({}), [I, Y] = q(!1), [Q, ge] = q([]), [ae, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, re] = q(0), [Le, Nt] = q(j), Rt = oe(null), xt = oe(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, be) => H.set(Jr(U, be), U)), H;
  }, [e]), We = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => Pc(We, yt),
    [We, yt]
  ), $t = F !== "None" || we != null || X, at = Oe(() => {
    if (w) {
      const H = k ?? t.length, U = Math.max(1, Math.ceil(H / fe));
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
    return Uc(
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
    k,
    c
  ]), V = oe(T);
  ve(() => {
    V.current = T;
  });
  const me = Oe(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? No(
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
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => ae || (A ? wo(at.items, Q, nr) : /* @__PURE__ */ new Set()), [ae, A, at.items, Q]), Pt = Oe(
    () => Rc(at.items, Q, e, Ye, nr),
    [at.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? We.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : We,
    [We, Q, Ve]
  ), W = (H) => {
    H !== "" && De(Bc(pe, H, { multi: l }));
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
  }, Ke = (H) => {
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
      const be = U ?? (A ? wo(at.items, Q, nr) : /* @__PURE__ */ new Set()), xe = new Set(be);
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
  }, wn = c && (g === "Top" || g === "TopAndBottom"), Vr = c && (g === "Bottom" || g === "TopAndBottom"), ws = d && e.some((H) => So(H, d)), ks = (H, U, be) => H.render ? H.render(U, { index: 0 }) : ms(nr(U, H.property), H.format), Ns = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, mn = w ? t : at.filtered, Yr = () => {
    const H = Wc(
      mn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(U), xe = document.createElement("a");
    xe.href = be, xe.download = `${E}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, hn = Pt.length, jt = Oe(() => {
    if (!R || hn === 0)
      return { start: 0, end: hn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / L) - H
    ), be = Math.ceil(Le / L) + H * 2, xe = Math.min(hn, U + be), et = U * L, Dt = Math.max(0, (hn - xe) * L);
    return { start: U, end: xe, top: et, bottom: Dt };
  }, [R, hn, Xt, L, Le]), wr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Se.grid, he].filter(Boolean).join(" "), children: [
    wn && /* @__PURE__ */ s(
      Fs,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: h,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${Vr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || b || M) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
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
            return /* @__PURE__ */ D("span", { className: Se.groupChip, children: [
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
          }) : /* @__PURE__ */ s("span", { className: Se.groupPanelText, children: C })
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
      b && /* @__PURE__ */ D("div", { className: Se.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Se.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": I,
            onClick: () => Y((H) => !H),
            children: N
          }
        ),
        I && /* @__PURE__ */ s(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const be = Jr(H, U);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
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
      M && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Yr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ D(
      "div",
      {
        className: [Se.data, R ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: R ? { maxHeight: j } : void 0,
        onScroll: R ? (H) => {
          re(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (R ? hn : at.total) + 1,
              "aria-label": K,
              "aria-busy": le || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
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
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const be = Ld(U, r), xe = pe.find((wt) => wt.property === U.property), et = xe ? pe.indexOf(xe) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": be && xe ? zd[xe.sortOrder] : "none",
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
                            be ? /* @__PURE__ */ D(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => U.property != null && W(U.property),
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
                                  Rt.current?.key === H && Ke(wt.clientX);
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
                  ws && /* @__PURE__ */ s("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!So(U, d))
                      return /* @__PURE__ */ s("td", { className: Se.filterCell }, H);
                    const be = G.get(U.property ?? "");
                    return /* @__PURE__ */ D("td", { className: Se.filterCell, children: [
                      /* @__PURE__ */ D(
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
                          value: be?.operator ?? No(U.type ?? "string"),
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: yl.filter((xe) => xe !== "Custom").map(
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
                /* @__PURE__ */ D("tbody", { children: [
                  je === "__new__" && /* @__PURE__ */ D("tr", { className: Se.editRow, children: [
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
                    $t && /* @__PURE__ */ D("td", { className: Se.editCell, children: [
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
                      colSpan: wr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const be = jt.start + U, xe = R ? be + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ s(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ s("td", { colSpan: wr, className: Se.groupCell, children: /* @__PURE__ */ D(
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
                    const et = H.row, Dt = n(et), wt = (p ?? []).includes(Dt), gn = je != null && je === String(Dt);
                    return /* @__PURE__ */ D(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          ue || y !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          gn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": y !== "None" ? wt : void 0,
                        onClick: ue || y !== "None" ? (Ct) => {
                          Rd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: Ns(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: gn && gt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((Ss) => ({
                                    ...Ss,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : ks(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ s("td", { className: Se.commandCell, children: gn ? /* @__PURE__ */ D(pt, { children: [
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
                          ] }) : /* @__PURE__ */ D(pt, { children: [
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
                      colSpan: wr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                z && z.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const be = z.filter(
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
                        children: be.map((xe, et) => /* @__PURE__ */ D(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              ms(
                                qc(mn, xe, nr),
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
    Vr && /* @__PURE__ */ s(
      Fs,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: h,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const Pd = "_wrap_avqds_1", jd = "_grid_avqds_7", Bd = "_stacked_avqds_13", Fd = "_item_avqds_19", Hd = "_empty_avqds_25", Tr = {
  wrap: Pd,
  grid: jd,
  stacked: Bd,
  item: Fd,
  empty: Hd
};
function AS({
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
  const [x, g] = q(1), [h, m] = q(t), y = e.length, p = Math.max(1, Math.ceil(y / h)), _ = Math.min(Math.max(1, x), p), b = Oe(() => {
    const v = (_ - 1) * h;
    return e.slice(v, v + h);
  }, [e, _, h]), N = r ? Tr.grid : Tr.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Tr.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && o != null ? o : y === 0 ? d ?? /* @__PURE__ */ s("div", { className: Tr.empty, children: i }) : /* @__PURE__ */ s("div", { className: N, children: b.map((v, $) => /* @__PURE__ */ s("div", { className: Tr.item, children: l ? l(v, $) : String(v) }, $)) }),
        /* @__PURE__ */ s(
          Fs,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: h,
            count: y,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: g,
            onPageSizeChange: (v) => {
              m(v), g(1);
            }
          }
        )
      ]
    }
  );
}
const Ud = "_label_1qfpw_1", qd = {
  label: Ud
}, DS = st(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: l,
      className: [qd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Wd = "_textbox_oly89_1", Kd = "_invalid_oly89_37", Gd = "_xs_oly89_44", Vd = "_sm_oly89_50", Yd = "_md_oly89_56", Xd = "_lg_oly89_62", Zd = "_xl_oly89_68", Ts = {
  textbox: Wd,
  invalid: Kd,
  xs: Gd,
  sm: Vd,
  md: Yd,
  lg: Xd,
  xl: Zd
}, no = st(
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
          Ts.textbox,
          Ts[t],
          n ? Ts.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Qr = no, Jd = "_checkbox_1bb6c_1", Qd = {
  checkbox: Jd
}, eu = st(
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
        className: [Qd.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), tu = {
  switch: "_switch_19gf1_1"
}, MS = st(function({ className: t, ...n }, r) {
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
      className: [tu.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (o) => {
        n.checked === void 0 && i(o.target.checked), n.onChange?.(o);
      }
    }
  );
}), nu = "_trigger_1jlxf_1", ru = "_tooltip_1jlxf_7", su = "_top_1jlxf_34", ou = "_right_1jlxf_40", lu = "_bottom_1jlxf_46", au = "_left_1jlxf_52", iu = "_arrow_1jlxf_58", cu = "_floating_1jlxf_70", Fn = {
  trigger: nu,
  tooltip: ru,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: su,
  right: ou,
  bottom: lu,
  left: au,
  arrow: iu,
  floating: cu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, es = 8;
function du(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + es,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - es,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + es,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - es,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function IS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const o = ot(), a = oe(null), c = oe(null), f = oe(() => {
  }), [u, x] = q(!1), [g, h] = q(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, y = () => {
    m(), a.current = window.setTimeout(() => {
      a.current = null, x(!0);
    }, r);
  }, p = () => {
    m(), x(!1);
  };
  if (ve(() => () => m(), []), ve(() => {
    if (!u || l == null) return;
    const b = window.setTimeout(() => x(!1), l);
    return () => window.clearTimeout(b);
  }, [u, l]), ve(() => {
    if (i || !u) return;
    const b = (N) => {
      N.key === "Escape" && p();
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [i, u]), ve(() => {
    if (!i) return;
    let b = null, N = null;
    const v = () => {
      b !== null && (window.clearTimeout(b), b = null);
    }, $ = () => {
      v(), N = null, h(null);
    };
    f.current = $;
    const S = (w) => {
      v(), N = w, b = window.setTimeout(() => {
        b = null, h(w);
      }, r);
    }, C = (w) => w instanceof Element ? w.closest(i) : null, A = (w) => {
      const k = C(w.target);
      !k || k === N || S(k);
    }, z = (w) => {
      const k = C(w.target);
      if (!k || k !== N) return;
      const T = w.relatedTarget;
      T instanceof Element && k.contains(T) || $();
    }, M = (w) => {
      w.key === "Escape" && $();
    }, E = () => $();
    return document.addEventListener("mouseover", A), document.addEventListener("mouseout", z), document.addEventListener("focusin", A), document.addEventListener("focusout", z), document.addEventListener("keydown", M), document.addEventListener("scroll", E, !0), window.addEventListener("resize", E), () => {
      v(), document.removeEventListener("mouseover", A), document.removeEventListener("mouseout", z), document.removeEventListener("focusin", A), document.removeEventListener("focusout", z), document.removeEventListener("keydown", M), document.removeEventListener("scroll", E, !0), window.removeEventListener("resize", E), N = null, h(null);
    };
  }, [i, r]), ve(() => {
    if (!i || g === null || l == null) return;
    const b = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(b);
  }, [i, g, l]), Bs(() => {
    const b = g;
    if (!b) return;
    const N = b.getAttribute("aria-describedby");
    return b.setAttribute(
      "aria-describedby",
      [N, o].filter(Boolean).join(" ")
    ), () => {
      N == null ? b.removeAttribute("aria-describedby") : b.setAttribute("aria-describedby", N);
    };
  }, [g, o]), Bs(() => {
    const b = c.current, N = g;
    !b || !N || Object.assign(
      b.style,
      du(N.getBoundingClientRect(), n)
    );
  }, [g, n]), i)
    return g ? /* @__PURE__ */ D(
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
  const _ = qt(t) ? Qs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? o : null
    ].filter((b) => typeof b == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "span",
      {
        className: [Fn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: y,
        onMouseLeave: p,
        onFocus: y,
        onBlur: p,
        children: [
          _,
          u && /* @__PURE__ */ D(
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
const uu = "_dialog_1t7pw_1", fu = "_sm_1t7pw_104", _u = "_resizable_1t7pw_110", pu = "_md_1t7pw_113", mu = "_lg_1t7pw_117", hu = "_header_1t7pw_121", gu = "_title_1t7pw_132", bu = "_description_1t7pw_139", yu = "_close_1t7pw_146", xu = "_body_1t7pw_176", vu = "_footer_1t7pw_188", bn = {
  dialog: uu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: fu,
  resizable: _u,
  md: pu,
  lg: mu,
  header: hu,
  title: gu,
  description: bu,
  close: yu,
  body: xu,
  footer: vu
};
function kl({
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
  showCloseButton: g = !0,
  showMask: h = !0,
  canClose: m,
  className: y
}) {
  const p = oe(null), _ = ot(), b = ot(), N = oe(t);
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
  const S = oe(!1), C = oe(!1), A = B(() => {
    if (S.current) return;
    const E = v.current?.();
    if (E instanceof Promise) {
      E.then((w) => {
        w && !S.current && (S.current = !0, N.current());
      });
      return;
    }
    E !== !1 && (S.current = !0, N.current());
  }, []), z = B(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    N.current();
  }, []), M = B(
    (E) => {
      if (E.key !== "Tab" || !p.current) return;
      const w = Array.from(
        p.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (T) => T.offsetWidth > 0 || T.offsetHeight > 0 || T === document.activeElement
      );
      if (w.length === 0) {
        E.preventDefault();
        return;
      }
      const k = w.indexOf(document.activeElement);
      if (E.shiftKey) {
        if (k <= 0) {
          E.preventDefault();
          const T = w[w.length - 1];
          T && T.focus();
        }
      } else if (k === -1 || k === w.length - 1) {
        E.preventDefault();
        const T = w[0];
        T && T.focus();
      }
    },
    []
  );
  return ve(() => {
    const E = p.current;
    if (E)
      if (e && !E.open) {
        const w = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        E.showModal(), (E.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? E.querySelector("button"))?.focus();
        const T = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const R = (L) => {
          L.preventDefault(), $.current && A();
        };
        return E.addEventListener("cancel", R), () => {
          E.removeEventListener("cancel", R), document.body.style.overflow = T, w?.focus({ preventScroll: !0 });
        };
      } else !e && E.open && (C.current = S.current, S.current = !1, E.close());
  }, [e, A]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: p,
      className: [
        bn.dialog,
        bn[d],
        u ? bn.resizable : null,
        x ? bn[`side-${x}`] : null,
        h === !1 ? bn["no-mask"] : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: z,
      onClick: (E) => {
        E.target === p.current && c && A();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? b : void 0,
      onKeyDown: M,
      children: [
        n && /* @__PURE__ */ D("header", { className: bn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ s("h2", { id: _, className: bn.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: b, className: bn.description, children: r })
          ] }),
          g !== !1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: bn.close,
              onClick: () => {
                A();
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
const wu = "_typography_1jy8x_1", ku = "_h1_1jy8x_39", Nu = "_h2_1jy8x_45", Su = "_h3_1jy8x_51", Ou = "_h4_1jy8x_57", $u = "_h5_1jy8x_63", Eu = "_h6_1jy8x_69", Tu = "_button_1jy8x_99", Cu = "_caption_1jy8x_106", Au = "_overline_1jy8x_112", Cs = {
  typography: wu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: ku,
  h2: Nu,
  h3: Su,
  h4: Ou,
  h5: $u,
  h6: Eu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Tu,
  caption: Cu,
  overline: Au,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Du = {
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
}, Mu = {
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
}, Iu = {
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
}, zu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Nl = st(function({
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
  const f = n === "Auto" ? Du[t] : Iu[n];
  return /* @__PURE__ */ s(
    f,
    {
      ref: c,
      className: [
        Cs.typography,
        Cs[Mu[t]],
        r ? Cs[zu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? o
    }
  );
}), Sl = lr(null);
function zS() {
  const e = Pn(Sl);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function LS({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = oe(0), i = () => (l.current += 1, l.current), d = oe([]);
  d.current = t;
  const o = (x) => {
    const g = d.current[0];
    g && (g.kind === "confirm" ? g.resolve(!!x) : g.kind === "alert" ? g.resolve() : g.resolve(x), n((h) => h.slice(1)));
  }, a = Oe(
    () => ({
      confirm: (x = {}) => new Promise((g) => {
        n((h) => [
          ...h,
          { seq: i(), kind: "confirm", options: x, resolve: g }
        ]);
      }),
      alert: (x = {}) => new Promise((g) => {
        n((h) => [
          ...h,
          { seq: i(), kind: "alert", options: x, resolve: g }
        ]);
      }),
      open: (x = {}) => new Promise((g) => {
        n((h) => [
          ...h,
          { seq: i(), kind: "custom", options: x, resolve: g }
        ]);
      }),
      openSide: ({ position: x, showMask: g = !0, ...h }) => new Promise((m) => {
        n((y) => [
          ...y,
          {
            seq: i(),
            kind: "custom",
            options: { ...h, side: x, showMask: g },
            resolve: m
          }
        ]);
      }),
      close: (x) => o(x),
      closeAll: () => {
        n((x) => (x.forEach((g) => {
          g.kind === "confirm" ? g.resolve(!1) : g.kind === "alert" ? g.resolve() : g.resolve(void 0);
        }), []));
      },
      refresh: () => r((x) => x + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), c = t[0];
  function f(x) {
    c && (c.kind === "confirm" ? c.resolve(!!x) : c.kind === "alert" ? c.resolve() : c.resolve(x), n((g) => g.slice(1)));
  }
  const u = c?.kind === "custom" ? c.options : null;
  return /* @__PURE__ */ D(Sl.Provider, { value: a, children: [
    e,
    /* @__PURE__ */ s(
      kl,
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
        footer: c?.kind === "confirm" ? /* @__PURE__ */ D(pt, { children: [
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
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ s(Nl, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Lu = "_viewport_11t1p_1", Ru = "_topLeft_11t1p_13", Pu = "_topRight_11t1p_20", ju = "_bottomLeft_11t1p_25", Bu = "_toast_11t1p_30", Fu = "_leaving_11t1p_61", Hu = "_info_11t1p_77", Uu = "_success_11t1p_86", qu = "_warning_11t1p_95", Wu = "_danger_11t1p_104", Ku = "_content_11t1p_113", Gu = "_title_11t1p_118", Vu = "_description_11t1p_141", Yu = "_dismiss_11t1p_148", Xu = "_actions_11t1p_169", Zu = "_action_11t1p_169", Ju = "_cancel_11t1p_177", Qu = "_progress_11t1p_215", en = {
  viewport: Lu,
  topLeft: Ru,
  topRight: Pu,
  bottomLeft: ju,
  toast: Bu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Fu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Hu,
  success: Uu,
  warning: qu,
  danger: Wu,
  content: Ku,
  title: Gu,
  description: Vu,
  dismiss: Yu,
  actions: Xu,
  action: Zu,
  cancel: Ju,
  progress: Qu,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Ol = lr(null);
function RS() {
  const e = Pn(Ol);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const ef = 200, tf = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function PS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = q([]), [o, a] = q(!1), c = oe([]), f = oe(/* @__PURE__ */ new Map()), u = oe(!1), x = oe(0), g = (k) => {
    u.current = k, a(k);
  }, h = B((k) => {
    const T = f.current.get(k);
    T && (window.clearTimeout(T.timeoutId), T.remaining = Math.max(
      0,
      T.remaining - (Date.now() - T.startedAt)
    ));
  }, []), m = B((k) => {
    const T = f.current.get(k);
    T && (window.clearTimeout(T.timeoutId), f.current.delete(k));
  }, []), y = B(
    (k) => {
      m(k), d((T) => {
        const R = T.filter((L) => L.id !== k);
        return c.current = R, R;
      });
    },
    [m]
  ), p = B(
    (k) => {
      const T = c.current.find((R) => R.id === k);
      !T || T.leaving || (T.onAutoClose?.(), y(k));
    },
    [y]
  ), _ = B(
    (k) => {
      const T = f.current.get(k);
      !T || T.remaining <= 0 || (T.startedAt = Date.now(), T.timeoutId = window.setTimeout(() => p(k), T.remaining));
    },
    [p]
  ), b = B(() => {
    u.current || f.current.forEach((k, T) => h(T)), g(!0);
  }, [h]), N = B(() => {
    f.current.forEach((k, T) => _(T)), g(!1);
  }, [_]);
  ve(() => {
    if (!r) return;
    const k = () => {
      document.hidden ? b() : N();
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, [r, b, N]);
  const v = B(
    (k) => {
      const T = c.current.find((R) => R.id === k);
      !T || T.leaving || (T.onDismiss?.(), d((R) => {
        const L = R.map(
          (j) => j.id === k ? { ...j, leaving: !0 } : j
        );
        return c.current = L, L;
      }), window.setTimeout(() => y(k), ef));
    },
    [y]
  ), $ = B(
    (k) => {
      if (k.durationMs <= 0) return;
      const T = {
        remaining: k.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(k.id, T), u.current || _(k.id);
    },
    [_]
  ), S = B(
    (k) => {
      const T = c.current.find((L) => L.id === k.id), R = {
        id: k.id ?? ++x.current,
        title: k.title,
        description: k.description,
        severity: k.severity ?? "info",
        durationMs: k.durationMs ?? t,
        action: k.action,
        cancel: k.cancel,
        dismissible: k.dismissible ?? !0,
        closeOnClick: k.closeOnClick ?? !1,
        payload: k.payload,
        click: k.click,
        showProgress: k.showProgress ?? !1,
        position: k.position ?? n,
        onDismiss: k.onDismiss,
        onAutoClose: k.onAutoClose
      };
      d((L) => {
        const j = T ? L.map(
          (F) => F.id === R.id ? { ...R, leaving: !1 } : F
        ) : [...L, R];
        return c.current = j, j;
      }), T && m(R.id), $(R);
    },
    [t, n, $, m]
  ), C = B(
    (k) => {
      S({
        severity: k.severity ?? "info",
        title: k.summary ?? k.summaryContent,
        description: k.detail ?? k.detailContent,
        durationMs: k.duration,
        click: k.click,
        closeOnClick: k.closeOnClick,
        payload: k.payload
      });
    },
    [S]
  ), A = B(
    (k) => (T, R) => C({ severity: k, summary: T, detail: R }),
    [C]
  ), z = Oe(
    () => ({
      toast: S,
      notify: C,
      notifyInfo: A("info"),
      notifySuccess: A("success"),
      notifyWarning: A("warning"),
      notifyError: A("danger")
    }),
    [S, C, A]
  ), M = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((k) => k.position)])),
    [n, i]
  ), E = r ? b : void 0, w = r ? N : void 0;
  return /* @__PURE__ */ D(Ol.Provider, { value: z, children: [
    e,
    M.map((k) => /* @__PURE__ */ s(
      "div",
      {
        className: [en.viewport, en[tf[k]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: E,
        onMouseLeave: w,
        children: i.filter((T) => T.position === k).map((T) => /* @__PURE__ */ D(
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
              /* @__PURE__ */ D("div", { className: en.content, children: [
                /* @__PURE__ */ s("div", { className: en.title, children: T.title }),
                T.description && /* @__PURE__ */ s("div", { className: en.description, children: T.description }),
                (T.action || T.cancel) && /* @__PURE__ */ D("div", { className: en.actions, children: [
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
      k
    ))
  ] });
}
const nf = "_gauge_pyq6q_3", rf = "_value_pyq6q_11", sf = "_tick_pyq6q_16", yr = {
  gauge: nf,
  value: rf,
  tick: sf
}, ts = 150, Oo = 240;
function $o(e, t, n, r) {
  const l = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(l), t + n * Math.sin(l)];
}
function Eo(e, t, n, r, l) {
  const [i, d] = $o(e, t, n, r), [o, a] = $o(e, t, n, l), c = l - r > 180 ? 1 : 0;
  return `M ${i} ${d} A ${n} ${n} 0 ${c} 1 ${o} ${a}`;
}
function of(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const l of t)
    e >= l.offset && (r = l.color);
  return r;
}
function jS({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: l,
  colorStops: i,
  size: d = 200,
  showValue: o = !0,
  formatValue: a = (u) => String(Math.round(u * 100) / 100),
  ariaLabel: c = "Gauge",
  className: f
}) {
  const u = n - t || 1, x = Math.max(0, Math.min(1, (e - t) / u)), g = "var(--dx-border-color)", h = l ?? "var(--dx-primary-color)", m = 100, y = 96, p = 80, _ = ts + Oo * x;
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": c,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [yr.gauge, f].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ s(
            "path",
            {
              d: Eo(m, y, p, ts, ts + Oo),
              fill: "none",
              stroke: g,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          x > 0 && /* @__PURE__ */ s(
            "path",
            {
              d: Eo(m, y, p, ts, _),
              fill: "none",
              stroke: of(x, i, h),
              strokeWidth: r,
              strokeLinecap: "round"
            }
          )
        ] }),
        o && /* @__PURE__ */ s("div", { className: yr.value, children: a(e) })
      ]
    }
  );
}
function lf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, l) => e + (t - e) * l / (n - 1)
  );
}
function BS({
  value: e,
  min: t = 0,
  max: n = 100,
  orientation: r = "horizontal",
  ticks: l = {},
  ranges: i = [],
  color: d,
  length: o,
  thickness: a = 20,
  showValue: c = !0,
  formatValue: f = (g) => String(Math.round(g * 100) / 100),
  ariaLabel: u = "Gauge",
  className: x
}) {
  const g = n - t || 1, h = r === "vertical", m = o ?? (h ? 220 : 280), { count: y = 5, showLabels: p = !0 } = l, _ = d ?? "var(--dx-primary-color)", b = "var(--dx-border-color)", N = 8, v = (z) => {
    const E = (Math.max(t, Math.min(n, z)) - t) / g;
    return h ? m - N - E * (m - N * 2) : N + E * (m - N * 2);
  }, $ = () => y <= 0 ? null : lf(t, n, y).map((z, M) => {
    const E = v(z);
    return /* @__PURE__ */ D("g", { children: [
      h ? /* @__PURE__ */ s(
        "line",
        {
          x1: -6,
          y1: E,
          x2: 0,
          y2: E,
          stroke: b,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ s(
        "line",
        {
          x1: E,
          y1: -6,
          x2: E,
          y2: 0,
          stroke: b,
          strokeWidth: 1.5
        }
      ),
      p && (h ? /* @__PURE__ */ s("text", { x: -10, y: E + 4, textAnchor: "end", className: yr.tick, children: z }) : /* @__PURE__ */ s("text", { x: E, y: -10, textAnchor: "middle", className: yr.tick, children: z }))
    ] }, M);
  }), S = () => i.map((z, M) => {
    const E = v(z.from), w = v(z.to), k = Math.min(E, w), T = Math.abs(w - E);
    return h ? /* @__PURE__ */ s(
      "rect",
      {
        x: -a / 2,
        y: k,
        width: a,
        height: T,
        fill: z.color,
        opacity: 0.35
      },
      M
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: k,
        y: -a / 2,
        width: T,
        height: a,
        fill: z.color,
        opacity: 0.35
      },
      M
    );
  }), C = v(e), A = /* @__PURE__ */ D("g", { children: [
    S(),
    h ? /* @__PURE__ */ s(
      "rect",
      {
        x: -a / 2,
        y: N,
        width: a,
        height: m - N * 2,
        rx: a / 2,
        fill: "none",
        stroke: b,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: N,
        y: -a / 2,
        width: m - N * 2,
        height: a,
        rx: a / 2,
        fill: "none",
        stroke: b,
        strokeWidth: 2
      }
    ),
    h ? /* @__PURE__ */ s(
      "rect",
      {
        x: -a / 2,
        y: C,
        width: a,
        height: m - N - C,
        rx: a / 2,
        fill: _
      }
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: N,
        y: -a / 2,
        width: Math.max(0, C - N),
        height: a,
        rx: a / 2,
        fill: _
      }
    ),
    h ? /* @__PURE__ */ s(
      "path",
      {
        d: `M ${-a / 2 - 10} ${C} L ${-a / 2 - 2} ${C - 5} L ${-a / 2 - 2} ${C + 5} Z`,
        fill: _
      }
    ) : /* @__PURE__ */ s(
      "path",
      {
        d: `M ${C} ${-a / 2 - 10} L ${C - 5} ${-a / 2 - 2} L ${C + 5} ${-a / 2 - 2} Z`,
        fill: _
      }
    ),
    $()
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": u,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [yr.gauge, x].filter(Boolean).join(" "),
      children: [
        h ? /* @__PURE__ */ s(
          "svg",
          {
            width: a + 64,
            height: m + 8,
            viewBox: `${-a / 2 - 56} -16 ${a + 64} ${m + 24}`,
            "aria-hidden": "true",
            children: A
          }
        ) : /* @__PURE__ */ s(
          "svg",
          {
            width: m,
            height: a + 48,
            viewBox: `0 -24 ${m} ${a + 56}`,
            "aria-hidden": "true",
            children: A
          }
        ),
        c && /* @__PURE__ */ s("div", { className: yr.value, children: f(e) })
      ]
    }
  );
}
const af = "_chat_1apnf_3", cf = "_messages_1apnf_9", df = "_message_1apnf_9", uf = "_user_1apnf_29", ff = "_assistant_1apnf_35", _f = "_system_1apnf_40", pf = "_typing_1apnf_46", mf = "_inputRow_1apnf_51", dr = {
  chat: af,
  messages: cf,
  message: df,
  user: uf,
  assistant: ff,
  system: _f,
  typing: pf,
  inputRow: mf
};
function FS({
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
  const [u, x] = q(""), g = a || c, h = u.trim().length > 0 && !g, m = (p) => {
    p.preventDefault();
    const _ = u.trim();
    !_ || g || (x(""), t?.(_));
  }, y = /* @__PURE__ */ D("form", { className: dr.inputRow, onSubmit: (p) => {
    m(p);
  }, children: [
    /* @__PURE__ */ s(
      no,
      {
        value: u,
        placeholder: n,
        "aria-label": l,
        disabled: g,
        onChange: (p) => x(p.target.value)
      }
    ),
    /* @__PURE__ */ s(an, { type: "submit", disabled: !h, loading: a, children: r })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      className: [dr.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: dr.messages, children: [
          e.map(
            (p, _) => d ? /* @__PURE__ */ s("div", { children: d(p, _) }, _) : /* @__PURE__ */ s(
              "div",
              {
                className: [dr.message, dr[p.role]].filter(Boolean).join(" "),
                children: p.content
              },
              _
            )
          ),
          a && /* @__PURE__ */ s("div", { className: dr.typing, children: "…" })
        ] }),
        o ? o(y) : y
      ]
    }
  );
}
const hf = "_wrapper_1ulz6_1", gf = "_input_1ulz6_8", bf = "_invalid_1ulz6_38", yf = "_toggle_1ulz6_45", xf = "_xs_1ulz6_80", vf = "_sm_1ulz6_86", wf = "_md_1ulz6_92", kf = "_lg_1ulz6_98", Nf = "_xl_1ulz6_104", Cr = {
  wrapper: hf,
  input: gf,
  invalid: bf,
  toggle: yf,
  xs: xf,
  sm: vf,
  md: wf,
  lg: kf,
  xl: Nf
}, Sf = st(
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
      /* @__PURE__ */ D("div", { className: Cr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Cr.input,
              Cr[t],
              n ? Cr.invalid : null,
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
            className: Cr.toggle,
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
), Of = "_login_30qie_3", $f = "_title_30qie_9", Ef = "_remember_30qie_14", Tf = "_link_30qie_21", Ar = {
  login: Of,
  title: $f,
  remember: Ef,
  link: Tf
}, ro = "dx-login-username";
function Cf(e) {
  const t = e === void 0 ? ro : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Af(e, t) {
  const n = e === void 0 ? ro : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function Df(e) {
  const t = e === void 0 ? ro : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function HS({
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
  storageKey: g,
  className: h
}) {
  const [m, y] = q(() => Cf(g) ?? ""), [p, _] = q(""), [b, N] = q(!1), [v, $] = q(!1), [S, C] = q({}), A = a || v, z = e != null && n == null, M = async (E) => {
    z || E.preventDefault();
    const w = {};
    if (m.trim() || (w.username = "Username is required."), p || (w.password = "Password is required."), C(w), !(w.username || w.password || !n)) {
      $(!0);
      try {
        await n({
          username: m.trim(),
          password: p,
          rememberMe: b
        }), b ? Af(g, m.trim()) : Df(g);
      } finally {
        $(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [Ar.login, h].filter(Boolean).join(" "),
      action: z ? e : void 0,
      method: z ? t : void 0,
      noValidate: !0,
      onSubmit: (E) => {
        M(E);
      },
      children: [
        c != null && /* @__PURE__ */ s("div", { className: Ar.title, children: c }),
        /* @__PURE__ */ s(sr, { label: f, required: !0, error: S.username, children: ({ inputId: E }) => /* @__PURE__ */ s(
          no,
          {
            id: E,
            value: m,
            autoComplete: "username",
            disabled: A,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (w) => {
              y(w.target.value), C((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ s(sr, { label: u, required: !0, error: S.password, children: ({ inputId: E }) => /* @__PURE__ */ s(
          Sf,
          {
            id: E,
            value: p,
            autoComplete: "current-password",
            disabled: A,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (w) => {
              _(w.target.value), C((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        o && /* @__PURE__ */ D("label", { className: Ar.remember, children: [
          /* @__PURE__ */ s(
            eu,
            {
              checked: b,
              disabled: A,
              onChange: (E) => N(E.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ s(an, { type: "submit", loading: A, disabled: A, children: x }),
        (d ?? l) && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Ar.link,
            onClick: () => l?.(),
            children: d ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Ar.link,
            onClick: () => r?.(),
            children: i ?? "Create account"
          }
        )
      ]
    }
  );
}
function To(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Mf(e) {
  if (Array.isArray(e)) return e;
}
function If(e, t) {
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
function zf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lf(e, t) {
  return Mf(e) || If(e, t) || Rf(e, t) || zf();
}
function Rf(e, t) {
  if (e) {
    if (typeof e == "string") return To(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? To(e, t) : void 0;
  }
}
const $l = Object.entries, Co = Object.setPrototypeOf, Pf = Object.isFrozen, jf = Object.getPrototypeOf, Bf = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, br = Object.create, El = typeof Reflect < "u" && Reflect, Hs = El.apply, Us = El.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
Hs || (Hs = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) l[i - 2] = arguments[i];
  return t.apply(n, l);
});
Us || (Us = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const rr = bt(Array.prototype.forEach), Ff = bt(Array.prototype.lastIndexOf), Ao = bt(Array.prototype.pop), Dr = bt(Array.prototype.push), Hf = bt(Array.prototype.splice), xr = Array.isArray, Ur = bt(String.prototype.toLowerCase), As = bt(String.prototype.toString), Do = bt(String.prototype.match), Mr = bt(String.prototype.replace), Mo = bt(String.prototype.indexOf), Uf = bt(String.prototype.trim), qf = bt(Number.prototype.toString), Wf = bt(Boolean.prototype.toString), Io = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), zo = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Vt = bt(Object.prototype.hasOwnProperty), Ir = bt(Object.prototype.toString), zt = bt(RegExp.prototype.test), Hn = Kf(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return Hs(e, t, r);
  };
}
function Kf(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Us(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ur;
  if (Co && Co(e, null), !xr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const i = n(l);
      i !== l && (Pf(t) || (t[r] = i), l = i);
    }
    e[l] = !0;
  }
  return e;
}
function Gf(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = br(null);
  for (const r of $l(e)) {
    var n = Lf(r, 2);
    const l = n[0], i = n[1];
    Vt(e, l) && (xr(i) ? t[l] = Gf(i) : i && typeof i == "object" && i.constructor === Object ? t[l] = sn(i) : t[l] = i);
  }
  return t;
}
function Vf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return qf(e);
    case "boolean":
      return Wf(e);
    case "bigint":
      return Io ? Io(e) : "0";
    case "symbol":
      return zo ? zo(e) : "Symbol()";
    case "undefined":
      return Ir(e);
    case "function":
    case "object": {
      if (e === null) return Ir(e);
      const t = e, n = _n(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Ir(r);
      }
      return Ir(e);
    }
    default:
      return Ir(e);
  }
}
function _n(e, t) {
  for (; e !== null; ) {
    const r = Bf(e, t);
    if (r) {
      if (r.get) return bt(r.get);
      if (typeof r.value == "function") return bt(r.value);
    }
    e = jf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Yf(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Lo = kt([
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
]), Ds = kt([
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
]), Ms = kt([
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
]), Xf = kt([
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
]), Is = kt([
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
]), Zf = kt([
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
]), Ro = kt(["#text"]), Po = kt([
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
]), zs = kt([
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
]), jo = kt([
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
]), ns = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Jf = Ot(/{{[\w\W]*|^[\w\W]*}}/g), Qf = Ot(/<%[\w\W]*|^[\w\W]*%>/g), e_ = Ot(/\${[\w\W]*/g), t_ = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), n_ = Ot(/^aria-[\-\w]+$/), Bo = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), r_ = Ot(/^(?:\w+script|data):/i), s_ = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), o_ = Ot(/^html$/i), l_ = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Fo = Ot(/<[/\w!]/g), Ho = Ot(/<[/\w]/g), a_ = Ot(/<\/no(script|embed|frames)/i), i_ = Ot(/\/>/i), tn = {
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
}, Tl = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], c_ = kt(qe({}, Tl)), d_ = (function() {
  const e = {};
  return rr(Tl, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), u_ = function() {
  return typeof window > "u" ? null : window;
}, f_ = function(t, n) {
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
}, Uo = function() {
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
  return Vt(t, n) && xr(t[n]) ? qe(l.base ? sn(l.base) : {}, t[n], l.transform) : r;
}, Ls = function(t, n, r) {
  const l = Vt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? sn(l) : r();
};
function Cl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u_();
  const t = (se) => Cl(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, d = e.Node, o = e.Element, a = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = o.prototype, x = _n(u, "cloneNode"), g = _n(u, "remove"), h = _n(u, "removeAttributeNode"), m = _n(u, "nextSibling"), y = _n(u, "childNodes"), p = _n(u, "parentNode"), _ = _n(u, "shadowRoot"), b = _n(u, "attributes"), N = d && d.prototype ? _n(d.prototype, "nodeType") : null, v = d && d.prototype ? _n(d.prototype, "nodeName") : null, $ = d && d.prototype ? _n(d.prototype, "ownerDocument") : null, S = function(O) {
    return N ? N(O) : O.nodeType;
  }, C = function(O) {
    return v ? v(O) : O.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let A, z = "", M, E = !1, w = 0;
  const k = function() {
    if (w > 0) throw Hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, T = function(O) {
    k(), w++;
    try {
      return A.createHTML(O);
    } finally {
      w--;
    }
  }, R = function(O) {
    k(), w++;
    try {
      return A.createScriptURL(O);
    } finally {
      w--;
    }
  }, L = function() {
    return E || (M = f_(f, l), E = !0), M;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let le = Uo();
  t.isSupported = typeof $l == "function" && typeof p == "function" && F && F.createHTMLDocument !== void 0;
  const _e = Jf, K = Qf, he = e_, ue = t_, ye = n_, pe = r_, De = s_, G = l_;
  let $e = Bo, ne = null;
  const Ae = qe({}, [
    ...Lo,
    ...Ds,
    ...Ms,
    ...Is,
    ...Ro
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...Po,
    ...zs,
    ...jo,
    ...ns
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
  let yt = !0, Z = !0, I = !1, Y = !0, Q = !1, ge = !0, ae = !1, Ee = !1, je = null, Ze = null, Qe = !1, nt = !1, Xt = !1, re = !1, Le = !0, Nt = !1;
  const Rt = "user-content-";
  let xt = !0, Ie = !1, We = {}, vt = null;
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
  let W = Xe, ee = !1, de = null;
  const Ne = qe({}, [
    Ye,
    Pt,
    Xe
  ], As), ke = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ce = qe({}, ke);
  const Ke = kt(["annotation-xml"]);
  let Be = qe({}, Ke);
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
  const Zt = n.createElement("form"), pn = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, Tn = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === O) return;
    (!O || typeof O != "object") && (O = {}), O = sn(O), rt = Et.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? mt : O.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? As : Ur, ne = Un(O, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Un(O, "ALLOWED_ATTR", Fe, { transform: ze }), de = Un(O, "ALLOWED_NAMESPACES", Ne, { transform: As }), me = Un(O, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), at = Un(O, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Un(O, "FORBID_CONTENTS", $t, { transform: ze }), Je = Un(O, "FORBID_TAGS", sn({}), { transform: ze }), At = Un(O, "FORBID_ATTR", sn({}), { transform: ze }), We = Vt(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? sn(O.USE_PROFILES) : O.USE_PROFILES : !1, yt = O.ALLOW_ARIA_ATTR !== !1, Z = O.ALLOW_DATA_ATTR !== !1, I = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = O.SAFE_FOR_TEMPLATES || !1, ge = O.SAFE_FOR_XML !== !1, ae = O.WHOLE_DOCUMENT || !1, nt = O.RETURN_DOM || !1, Xt = O.RETURN_DOM_FRAGMENT || !1, re = O.RETURN_TRUSTED_TYPE || !1, Qe = O.FORCE_BODY || !1, Le = O.SANITIZE_DOM !== !1, Nt = O.SANITIZE_NAMED_PROPS || !1, xt = O.KEEP_CONTENT !== !1, Ie = O.IN_PLACE || !1, $e = Yf(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : Bo, W = typeof O.NAMESPACE == "string" ? O.NAMESPACE : Xe, Ce = Ls(O, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = Ls(O, "HTML_INTEGRATION_POINTS", () => qe({}, Ke));
    const P = Ls(O, "CUSTOM_ELEMENT_HANDLING", () => br(null));
    if (Ge = br(null), Vt(P, "tagNameCheck") && pn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && pn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), We && (ne = qe({}, Ro), fe = br(null), We.html === !0 && (qe(ne, Lo), qe(fe, Po)), We.svg === !0 && (qe(ne, Ds), qe(fe, zs), qe(fe, ns)), We.svgFilters === !0 && (qe(ne, Ms), qe(fe, zs), qe(fe, ns)), We.mathMl === !0 && (qe(ne, Is), qe(fe, jo), qe(fe, ns))), lt.tagCheck = null, lt.attributeCheck = null, Vt(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? lt.tagCheck = O.ADD_TAGS : xr(O.ADD_TAGS) && (ne === Ae && (ne = sn(ne)), qe(ne, O.ADD_TAGS, ze))), Vt(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? lt.attributeCheck = O.ADD_ATTR : xr(O.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, O.ADD_ATTR, ze))), Vt(O, "ADD_FORBID_CONTENTS") && xr(O.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, O.ADD_FORBID_CONTENTS, ze)), xt && (ne["#text"] = !0), ae && qe(ne, [
      "html",
      "head",
      "body"
    ]), ne.table && (qe(ne, ["tbody"]), delete Je.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = A;
      A = O.TRUSTED_TYPES_POLICY;
      try {
        z = T("");
      } catch (ce) {
        throw A = J, ce;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (A = void 0, z = "") : (A === void 0 && (A = L()), A && typeof z == "string" && (z = T("")));
    kt && kt(O), Tt = O;
  }, jn = qe({}, [
    ...Ds,
    ...Ms,
    ...Xf
  ]), wn = qe({}, [...Is, ...Zf]), Vr = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "svg" : P.namespaceURI === Ye ? O === "svg" && (J === "annotation-xml" || Ce[J]) : !!jn[O];
  }, ws = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "math" : P.namespaceURI === Pt ? O === "math" && Be[J] : !!wn[O];
  }, ks = function(O, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !wn[O] && (it[O] || !jn[O]);
  }, Ns = function(O) {
    let P = p(O);
    (!P || !P.tagName) && (P = {
      namespaceURI: W,
      tagName: "template"
    });
    const J = Ur(O.tagName), ce = Ur(P.tagName);
    return de[O.namespaceURI] ? O.namespaceURI === Pt ? Vr(J, P, ce) : O.namespaceURI === Ye ? ws(J, P, ce) : O.namespaceURI === Xe ? ks(J, P, ce) : !!(rt === "application/xhtml+xml" && de[O.namespaceURI]) : !1;
  }, mn = function(O) {
    Dr(t.removed, { element: O });
    try {
      p(O).removeChild(O);
    } catch {
      if (g(O), !p(O)) throw Hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Yr = function(O, P, J) {
    try {
      h(O, P);
    } catch {
      try {
        O.removeAttribute(J);
      } catch {
      }
    }
  }, hn = function(O) {
    H(O);
    const P = y(O);
    if (P) {
      const ce = [];
      rr(P, (Te) => {
        Dr(ce, Te);
      }), rr(ce, (Te) => {
        try {
          g(Te);
        } catch {
        }
      });
    }
    const J = b(O);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Yr(O, Te, Pe);
    }
  }, jt = function(O, P, J) {
    if (!J) try {
      J = P.getAttributeNode(O);
    } catch {
      J = null;
    }
    Dr(t.removed, {
      attribute: J || null,
      from: P
    });
    try {
      J ? h(P, J) : P.removeAttribute(O);
    } catch {
      try {
        P.removeAttribute(O);
      } catch {
      }
    }
    if (O === "is")
      if (nt || Xt) try {
        mn(P);
      } catch {
      }
      else try {
        P.setAttribute(O, "");
      } catch {
      }
  }, wr = function(O) {
    const P = b(O);
    if (P)
      for (let J = P.length - 1; J >= 0; --J) {
        const ce = P[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Yr(O, ce, Te);
      }
  }, H = function(O) {
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop();
      S(J) === tn.element && wr(J);
      const ce = y(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function(O, P) {
    return ge ? O === "patchsrc" ? !0 : O === "for" && P !== "label" && P !== "output" : !1;
  }, be = function(O) {
    if (!ge) return;
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Ho, J.data)) {
        try {
          g(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = ze(C(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = y(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) P.push(Te[Pe]);
    }
  }, xe = function(O) {
    let P = null, J = null;
    if (Qe) O = "<remove></remove>" + O;
    else {
      const Pe = Do(O, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && W === Xe && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const ce = A ? T(O) : O;
    if (W === Xe) try {
      P = new c().parseFromString(ce, rt);
    } catch {
    }
    if (!P || !P.documentElement) {
      P = F.createDocument(W, "template", null);
      try {
        P.documentElement.innerHTML = ee ? z : ce;
      } catch {
      }
    }
    const Te = P.body || P.documentElement;
    return O && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), W === Xe ? te.call(P, ae ? "html" : "body")[0] : ae ? P.documentElement : Te;
  }, et = function(O) {
    const P = $ ? $(O) : O.ownerDocument;
    return X.call(P || O, O, a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION, null);
  }, Dt = function(O) {
    return O = Mr(O, _e, " "), O = Mr(O, K, " "), O = Mr(O, he, " "), O;
  }, wt = function(O) {
    var P;
    O.normalize();
    const J = $ ? $(O) : O.ownerDocument, ce = X.call(J || O, O, a.SHOW_TEXT | a.SHOW_COMMENT | a.SHOW_CDATA_SECTION | a.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (P = O.querySelectorAll) === null || P === void 0 ? void 0 : P.call(O, "template");
    Pe && rr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, gn = function(O) {
    const P = v ? v(O) : null;
    return typeof P != "string" || ze(P) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || O.attributes !== b(O) || typeof O.removeAttribute != "function" || typeof O.removeAttributeNode != "function" || typeof O.getAttributeNode != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || O.nodeType !== N(O) || O.childNodes !== y(O);
  }, Ct = function(O) {
    if (!N || typeof O != "object" || O === null) return !1;
    try {
      return N(O) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, gt = function(O) {
    if (!N || typeof O != "object" || O === null) return !1;
    try {
      return typeof N(O) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(se, O, P) {
    se.length !== 0 && rr(se, (J) => {
      J.call(t, O, P, Tt);
    });
  }
  const Ss = function(O, P) {
    return !!(ge && O.hasChildNodes() && !gt(O.firstElementChild) && zt(Fo, O.textContent) && zt(Fo, O.innerHTML) || ge && O.namespaceURI === Xe && c_[P] && (gt(O.firstElementChild) || typeof O.textContent == "string" && zt(d_[P], O.textContent)) || O.nodeType === tn.processingInstruction || ge && O.nodeType === tn.comment && zt(Ho, O.data));
  }, Xr = function(O, P) {
    if (O instanceof RegExp) return zt(O, P);
    if (O instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!O(P, ...ce);
    }
    return !1;
  }, Vl = function(O, P, J) {
    if (!Je[P] && fo(P) && Xr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = p(O), Te = y(O);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ct = O === J ? x(Te[He], !0) : Te[He];
          ce.insertBefore(ct, m(O));
        }
      }
    }
    return mn(O), !0;
  }, io = function(O, P, J, ce) {
    return O.length === 0 ? P : P === J || P === ce ? sn(P) : P;
  }, ir = function(O, P) {
    return O === P || p(O) !== null ? !1 : (Ie && H(O), !0);
  }, co = function(O, P) {
    if (Jt(le.beforeSanitizeElements, O, null), ir(O, P)) return !0;
    if (gn(O))
      return mn(O), !0;
    const J = ze(C(O));
    if (ne = io(le.uponSanitizeElement, ne, Ae, je), Jt(le.uponSanitizeElement, O, {
      tagName: J,
      allowedTags: ne
    }), ir(O, P)) return !0;
    if (Ss(O, J))
      return mn(O), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !ne[J]) {
      const ce = Vl(O, J, P);
      return ce === !1 && (Jt(le.afterSanitizeElements, O, null), ir(O, P)) ? !0 : ce;
    }
    if (S(O) === tn.element && !Ns(O) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(a_, O.innerHTML))
      return mn(O), !0;
    if (Q && O.nodeType === tn.text) {
      const ce = Dt(O.textContent);
      O.textContent !== ce && (Dr(t.removed, { element: O.cloneNode() }), O.textContent = ce);
    }
    return Jt(le.afterSanitizeElements, O, null), ir(O, P);
  }, uo = function(O, P, J) {
    if (At[P] || U(P, O) || Le && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || lt.attributeCheck instanceof Function && lt.attributeCheck(P, O);
    return Z && zt(ue, P) || yt && zt(ye, P) ? !0 : ce ? me[P] || zt($e, Mr(J, De, "")) || (P === "src" || P === "xlink:href" || P === "href") && O !== "script" && Mo(J, "data:") === 0 && at[O] || I && !zt(pe, Mr(J, De, "")) ? !0 : !J : fo(O) && Xr(Ge.tagNameCheck, O) && Xr(Ge.attributeNameCheck, P, O) || P === "is" && Ge.allowCustomizedBuiltInElements && Xr(Ge.tagNameCheck, J);
  }, Yl = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), fo = function(O) {
    return !Yl[Ur(O)] && zt(G, O);
  }, Xl = function(O, P, J, ce) {
    if (A && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(O, P)) {
      case "TrustedHTML":
        return T(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, Zl = function(O, P, J, ce) {
    try {
      return J ? O.setAttributeNS(J, P, ce) : O.setAttribute(P, ce), gn(O) ? (mn(O), !1) : !0;
    } catch {
      return jt(P, O), !1;
    }
  }, _o = function(O, P) {
    if (Jt(le.beforeSanitizeAttributes, O, null), ir(O, P)) return;
    const J = O.attributes;
    if (!J || gn(O)) return;
    fe = io(le.uponSanitizeAttribute, fe, Fe, Ze);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = ze(O.nodeName);
    for (; Te--; ) {
      const He = J[Te], ct = He.name, cn = He.namespaceURI, Qt = He.value, cr = ze(ct), $s = Qt;
      let Bt = ct === "value" ? $s : Uf($s), po = !1;
      if (ce.attrName = cr, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(le.uponSanitizeAttribute, O, ce), Bt = ce.attrValue, Nt && (cr === "id" || cr === "name") && Mo(Bt, Rt) !== 0 && (jt(ct, O, He), Bt = Rt + Bt, po = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ct, O, He);
        continue;
      }
      if (cr === "attributename" && Do(Bt, "href")) {
        jt(ct, O, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ct, O, He);
          continue;
        }
        if (!Y && zt(i_, Bt)) {
          jt(ct, O, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !uo(Pe, cr, Bt)) {
          jt(ct, O, He);
          continue;
        }
        Bt = Xl(Pe, cr, cn, Bt), Bt !== $s && Zl(O, ct, cn, Bt) && po && Ao(t.removed);
      }
    }
    Jt(le.afterSanitizeAttributes, O, null), ir(O, P);
  }, Zr = function(O) {
    let P = null;
    const J = et(O);
    for (Jt(le.beforeSanitizeShadowDOM, O, null); P = J.nextNode(); )
      if (Jt(le.uponSanitizeShadowNode, P, null), co(P, O), _o(P, O), Ct(P.content) && Zr(P.content), S(P) === tn.element) {
        const ce = _(P);
        Ct(ce) && (Os(ce), Zr(ce));
      }
    Jt(le.afterSanitizeShadowDOM, O, null);
  }, Os = function(O) {
    const P = [{
      node: O,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        Zr(J.shadow);
        continue;
      }
      const ce = J.node, Te = S(ce) === tn.element, Pe = y(ce);
      if (Pe) for (let He = Pe.length - 1; He >= 0; --He) P.push({
        node: Pe[He],
        shadow: null
      });
      if (Te) {
        const He = v ? v(ce) : null;
        if (typeof He == "string" && ze(He) === "template") {
          const ct = ce.content;
          Ct(ct) && P.push({
            node: ct,
            shadow: null
          });
        }
      }
      if (Te) {
        const He = _(ce);
        Ct(He) && P.push({
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
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, J = null, ce = null, Te = null;
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = Vf(se), typeof se != "string"))
      throw Hn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (ne = je, fe = Ze) : Tn(O), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (ne = sn(ne)), le.uponSanitizeAttribute.length > 0 && (fe = sn(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      be(se);
      const cn = C(se);
      if (typeof cn == "string") {
        const Qt = ze(cn);
        if (!ne[Qt] || Je[Qt])
          throw hn(se), Hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(se))
        throw hn(se), Hn("root node is clobbered and cannot be sanitized in-place");
      try {
        Os(se);
      } catch (Qt) {
        throw hn(se), Qt;
      }
    } else if (gt(se))
      P = xe("<!---->"), J = P.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), Os(P);
    else {
      if (!nt && !Q && !ae && se.indexOf("<") === -1) return A && re ? T(se) : se;
      if (P = xe(se), !P) return nt ? null : re ? z : "";
    }
    P && Qe && mn(P.firstChild);
    const He = Pe ? se : P;
    try {
      const cn = et(He);
      for (; ce = cn.nextNode(); )
        co(ce, He), _o(ce, He), Ct(ce.content) && Zr(ce.content);
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
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ct = ae ? P.outerHTML : P.innerHTML;
    return ae && ne["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(o_, P.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ct), Q && (ct = Dt(ct)), A && re ? T(ct) : ct;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(se), Ee = !0, je = ne, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, A = M, z = "";
  }, t.isValidAttribute = function(se, O, P) {
    Tt || Tn({});
    const J = ze(se), ce = ze(O);
    return uo(J, ce, P);
  }, t.addHook = function(se, O) {
    typeof O == "function" && Vt(le, se) && Dr(le[se], O);
  }, t.removeHook = function(se, O) {
    if (Vt(le, se)) {
      if (O !== void 0) {
        const P = Ff(le[se], O);
        return P === -1 ? void 0 : Hf(le[se], P, 1)[0];
      }
      return Ao(le[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(le, se) && (le[se] = []);
  }, t.removeAllHooks = function() {
    le = Uo();
  }, t;
}
var Al = Cl();
function Wr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function __(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const rs = "\0";
function ss(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (l, i) => (n.push(`<code>${Wr(i)}</code>`), `${rs}${n.length - 1}${rs}`));
  return t || (r = Wr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (l, i, d) => {
      const o = __(d);
      return o == null ? i : `<a href="${Wr(o)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${rs}(\\d+)${rs}`, "g"),
    (l, i) => n[Number(i)] ?? ""
  ), r;
}
function p_(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), l = (a) => r[a] ?? "", i = [];
  let d = 0;
  const o = (a, c) => {
    const f = c ? "ol" : "ul";
    i.push(
      `<${f}>${a.map((u) => `<li>${ss(u, n)}</li>`).join("")}</${f}>`
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
        `<h${f.length}>${ss(u.trim(), n)}</h${f.length}>`
      ), d += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(a)) {
      const m = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(a)?.[2] ?? "", y = [];
      for (d += 1; d < r.length; ) {
        const _ = l(d) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(_)) break;
        y.push(_), d += 1;
      }
      d += 1;
      const p = m ? ` class="language-${Wr(m)}"` : "";
      i.push(
        `<pre><code${p}>${Wr(y.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(a)) {
      const m = [];
      for (; d < r.length && /^>\s?(.*)$/.test(l(d)); )
        m.push(/^>\s?(.*)$/.exec(l(d))?.[1] ?? ""), d += 1;
      i.push(
        `<blockquote>${m.map((y) => `<p>${ss(y, n)}</p>`).join("")}</blockquote>`
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
        const p = /^\s*[-*+]\s+(.*)$/.exec(l(d))?.[1];
        if (p === void 0) break;
        m.push(p), d += 1;
      }
      o(m, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(a)) {
      const m = [];
      for (; d < r.length; ) {
        const p = /^\s*\d+[.)]\s+(.*)$/.exec(l(d))?.[1];
        if (p === void 0) break;
        m.push(p), d += 1;
      }
      o(m, !0);
      continue;
    }
    const h = [];
    for (; d < r.length && !/^\s*$/.test(l(d)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      l(d)
    ); )
      h.push(l(d)), d += 1;
    i.push(`<p>${ss(h.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const m_ = "_markdown_1vu4b_3", h_ = "_resize_1vu4b_61", qo = {
  markdown: m_,
  resize: h_
};
function US({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: l
}) {
  const i = Oe(
    () => Al.sanitize(p_(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      className: [qo.markdown, n ? qo.resize : "", l].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const g_ = "_editor_2a7al_3", b_ = "_toolbar_2a7al_13", y_ = "_tool_2a7al_13", x_ = "_separator_2a7al_56", v_ = "_area_2a7al_63", w_ = "_source_2a7al_73", k_ = "_alignGlyph_2a7al_84", N_ = "_colorInput_2a7al_89", S_ = "_select_2a7al_98", St = {
  editor: g_,
  toolbar: b_,
  tool: y_,
  separator: x_,
  area: v_,
  source: w_,
  alignGlyph: k_,
  colorInput: N_,
  select: S_
}, O_ = [
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
], Wo = {
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
}, $_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], E_ = ["1", "2", "3", "4", "5", "6", "7"], T_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function qs(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function C_(e) {
  return qs("formatBlock", `<${e}>`) || qs("formatBlock", e);
}
function A_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const qS = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: l,
    toolbar: i = O_,
    imageUpload: d,
    readOnly: o = !1,
    disabled: a = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: u = !0
  }, x) {
    const [g, h] = q(!1), [m, y] = q(n), [p, _] = q(
      null
    ), [b, N] = q(""), [v, $] = q(""), [S, C] = q(2), [A, z] = q(2), [M, E] = q(!1), w = oe(null), k = oe(null), T = oe(n), R = B(
      (G) => u ? Al.sanitize(G) : G,
      [u]
    );
    ve(() => {
      const G = w.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (T.current = t);
    }, [t]);
    const L = B(
      (G) => {
        T.current = R(G), r?.(T.current);
      },
      [R, r]
    ), j = B(
      (G, $e) => {
        if (o || a) return !1;
        w.current?.focus();
        const ne = qs(G, $e);
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
    xs(x, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = Wo[G];
        !$e || o || a || j($e.command);
      },
      [j, o, a]
    ), le = B(() => {
      o || a || (g ? (h(!1), L(m)) : (y(w.current?.innerHTML ?? ""), h(!0)));
    }, [g, m, L, o, a]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || o || a) return;
        const $e = G.key.toLowerCase(), ne = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        ne && (G.preventDefault(), we(ne));
      },
      [we, o, a]
    ), K = B(() => {
      const G = w.current;
      G && L(G.innerHTML);
    }, [L]), he = B(() => {
      b.trim() && (j("createLink", b.trim()), N(""), _(null));
    }, [b, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), $(""), _(null));
    }, [v, j]), ye = B(
      async (G) => {
        if (d) {
          E(!0);
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
            const fe = (ne.headers.get("content-type") ?? "").includes("application/json") ? await ne.json() : await ne.text(), Fe = (d.parseUrl ?? A_)(fe);
            j("insertImage", Fe);
          } catch ($e) {
            l?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            E(!1), _(null);
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
            "aria-pressed": g,
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: le,
            children: "</>"
          },
          "source"
        );
      if (G === "foreColor" || G === "backgroundColor") {
        const Ae = G === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ D("label", { className: St.tool, title: Ae, children: [
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? T_ : G === "fontName" ? $_ : E_;
        return /* @__PURE__ */ D(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: a,
            defaultValue: "",
            className: St.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || o || a || (G === "formatBlock" ? C_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
              !o && !a && (C(2), z(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ne = Wo[G];
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
    return /* @__PURE__ */ D("div", { className: [St.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ s(
        "div",
        {
          role: "toolbar",
          "aria-label": `${c} toolbar`,
          className: St.toolbar,
          children: i.map((G, $e) => De(G, $e))
        }
      ),
      g ? /* @__PURE__ */ s(
        "textarea",
        {
          className: St.source,
          "aria-label": `${c} source`,
          value: m,
          disabled: a,
          readOnly: o,
          onChange: (G) => {
            y(G.target.value), L(G.target.value);
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
          onInput: K,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ D(
        kl,
        {
          open: p !== null,
          onClose: () => _(null),
          title: p === "link" ? "Insert link" : p === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ s(an, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            p === "link" && /* @__PURE__ */ s(an, { onClick: he, children: "Insert" }),
            p === "image" && /* @__PURE__ */ s(an, { onClick: ue, disabled: M, children: "Insert" }),
            p === "table" && /* @__PURE__ */ s(an, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            p === "link" && /* @__PURE__ */ s(sr, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ s(
              Qr,
              {
                id: G,
                value: b,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            p === "image" && /* @__PURE__ */ D(pt, { children: [
              /* @__PURE__ */ s(sr, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Qr,
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
                  ref: k,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const ne = $e.target.files?.[0];
                    ne && ye(ne), $e.target.value = "";
                  }
                }
              ) }),
              M && /* @__PURE__ */ s(Nl, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            p === "table" && /* @__PURE__ */ D(pt, { children: [
              /* @__PURE__ */ s(sr, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Qr,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => C(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ s(sr, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Qr,
                {
                  id: G,
                  type: "number",
                  value: String(A),
                  onChange: ($e) => z(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), D_ = "_popup_ve7kd_4", Dl = {
  popup: D_
}, Ml = lr(null);
function WS() {
  const e = Pn(Ml);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Ko(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function M_({ state: e }) {
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
      className: [Dl.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Ko(e.width),
        height: Ko(e.height)
      },
      children: e.content
    }
  );
}
function KS({ children: e }) {
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
    const c = (g) => {
      const h = document.querySelector(`.${Dl.popup}`);
      h && !h.contains(g.target) && d();
    }, f = (g) => {
      g.key === "Escape" && (g.preventDefault(), d());
    }, u = () => d(), x = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", x), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", x);
    };
  }, [t, d]);
  const a = Oe(
    () => ({ open: o, close: d, isOpen: t != null }),
    [o, d, t]
  );
  return /* @__PURE__ */ D(Ml.Provider, { value: a, children: [
    e,
    t && /* @__PURE__ */ s(M_, { state: t }, t.seq)
  ] });
}
const I_ = "_alert_146r9_1", z_ = "_xs_146r9_28", L_ = "_sm_146r9_38", R_ = "_lg_146r9_48", P_ = "_xl_146r9_58", j_ = "_primary_146r9_69", B_ = "_secondary_146r9_74", F_ = "_light_146r9_79", H_ = "_base_146r9_84", U_ = "_dark_146r9_89", q_ = "_info_146r9_94", W_ = "_success_146r9_99", K_ = "_warning_146r9_104", G_ = "_danger_146r9_109", V_ = "_flat_146r9_116", Y_ = "_outlined_146r9_123", X_ = "_filled_146r9_132", Z_ = "_text_146r9_139", J_ = "_icon_146r9_181", Q_ = "_content_146r9_192", ep = "_title_146r9_197", tp = "_body_146r9_203", np = "_dismiss_146r9_209", Nn = {
  alert: I_,
  xs: z_,
  sm: L_,
  lg: R_,
  xl: P_,
  primary: j_,
  secondary: B_,
  light: F_,
  base: H_,
  dark: U_,
  info: q_,
  success: W_,
  warning: K_,
  danger: G_,
  flat: V_,
  outlined: Y_,
  filled: X_,
  text: Z_,
  icon: J_,
  content: Q_,
  title: ep,
  body: tp,
  dismiss: np,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, rp = {
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
function GS({
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
  ...g
}) {
  const [h, m] = q(!1);
  if (f === !1 || f === void 0 && h)
    return null;
  const y = () => {
    f === void 0 && m(!0), c?.(), u?.(!1);
  }, p = e, _ = gl(t, "filled"), b = Kr(n), N = i ?? (d ? /* @__PURE__ */ s(Me, { icon: rp[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...g,
      className: [
        Nn.alert,
        Nn[p],
        Nn[_],
        b ? Nn[b] : null,
        Nn[r],
        x
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ s("span", { className: Nn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ D("div", { className: Nn.content, children: [
          l && /* @__PURE__ */ s("div", { className: Nn.title, children: l }),
          o && /* @__PURE__ */ s("div", { className: Nn.body, children: o })
        ] }),
        a && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Nn.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const sp = "_skeleton_1xyce_1", op = "_text_1xyce_35", lp = "_circle_1xyce_40", ap = "_rect_1xyce_44", Go = {
  skeleton: sp,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: op,
  circle: lp,
  rect: ap
};
function VS({
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
      className: [Go.skeleton, Go[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function hs(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const ip = "_row_juebr_1", cp = "_start_juebr_14", dp = "_center_juebr_18", up = "_end_juebr_22", fp = "_stretch_juebr_26", _p = "_baseline_juebr_30", pp = "_normal_juebr_34", mp = "_noWrap_juebr_90", hp = "_wrapReverse_juebr_94", os = {
  row: ip,
  start: cp,
  center: dp,
  end: up,
  stretch: fp,
  baseline: _p,
  normal: pp,
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
  noWrap: mp,
  wrapReverse: hp
};
function Vo(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function YS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...o
}) {
  const a = e != null ? hs(e) : null, c = t != null ? hs(t) : null, f = {
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
        os.row,
        os[n],
        os[`justify-${r}`],
        Vo(l) != null ? os[Vo(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const gp = "_column_sh0ss_1", bp = "_Size1_sh0ss_15", yp = "_Size2_sh0ss_24", xp = "_Size3_sh0ss_33", vp = "_Size4_sh0ss_42", wp = "_Size5_sh0ss_51", kp = "_Size6_sh0ss_60", Np = "_Size7_sh0ss_69", Sp = "_Size8_sh0ss_78", Op = "_Size9_sh0ss_87", $p = "_Size10_sh0ss_96", Ep = "_Size11_sh0ss_105", Tp = "_Size12_sh0ss_114", Cp = "_Offset0_sh0ss_119", Ap = "_Offset1_sh0ss_122", Dp = "_Offset2_sh0ss_127", Mp = "_Offset3_sh0ss_132", Ip = "_Offset4_sh0ss_137", zp = "_Offset5_sh0ss_142", Lp = "_Offset6_sh0ss_147", Rp = "_Offset7_sh0ss_152", Pp = "_Offset8_sh0ss_157", jp = "_Offset9_sh0ss_162", Bp = "_Offset10_sh0ss_167", Fp = "_Offset11_sh0ss_172", Hp = "_Offset12_sh0ss_177", Up = "_OrderFirst_sh0ss_182", qp = "_OrderLast_sh0ss_185", Wp = "_Order0_sh0ss_188", Kp = "_Order1_sh0ss_191", Gp = "_Order2_sh0ss_194", Vp = "_Order3_sh0ss_197", Yp = "_Order4_sh0ss_200", Xp = "_Order5_sh0ss_203", Zp = "_Order6_sh0ss_206", Jp = "_Order7_sh0ss_209", Qp = "_Order8_sh0ss_212", em = "_Order9_sh0ss_215", tm = "_Order10_sh0ss_218", nm = "_Order11_sh0ss_221", rm = "_Order12_sh0ss_224", sm = "_xsSize1_sh0ss_229", om = "_xsSize2_sh0ss_238", lm = "_xsSize3_sh0ss_247", am = "_xsSize4_sh0ss_256", im = "_xsSize5_sh0ss_265", cm = "_xsSize6_sh0ss_274", dm = "_xsSize7_sh0ss_283", um = "_xsSize8_sh0ss_292", fm = "_xsSize9_sh0ss_301", _m = "_xsSize10_sh0ss_310", pm = "_xsSize11_sh0ss_321", mm = "_xsSize12_sh0ss_332", hm = "_xsOffset0_sh0ss_337", gm = "_xsOffset1_sh0ss_340", bm = "_xsOffset2_sh0ss_345", ym = "_xsOffset3_sh0ss_350", xm = "_xsOffset4_sh0ss_355", vm = "_xsOffset5_sh0ss_360", wm = "_xsOffset6_sh0ss_365", km = "_xsOffset7_sh0ss_370", Nm = "_xsOffset8_sh0ss_375", Sm = "_xsOffset9_sh0ss_380", Om = "_xsOffset10_sh0ss_385", $m = "_xsOffset11_sh0ss_391", Em = "_xsOffset12_sh0ss_397", Tm = "_xsOrderFirst_sh0ss_403", Cm = "_xsOrderLast_sh0ss_406", Am = "_xsOrder0_sh0ss_409", Dm = "_xsOrder1_sh0ss_412", Mm = "_xsOrder2_sh0ss_415", Im = "_xsOrder3_sh0ss_418", zm = "_xsOrder4_sh0ss_421", Lm = "_xsOrder5_sh0ss_424", Rm = "_xsOrder6_sh0ss_427", Pm = "_xsOrder7_sh0ss_430", jm = "_xsOrder8_sh0ss_433", Bm = "_xsOrder9_sh0ss_436", Fm = "_xsOrder10_sh0ss_439", Hm = "_xsOrder11_sh0ss_442", Um = "_xsOrder12_sh0ss_445", qm = "_smSize1_sh0ss_451", Wm = "_smSize2_sh0ss_460", Km = "_smSize3_sh0ss_469", Gm = "_smSize4_sh0ss_478", Vm = "_smSize5_sh0ss_487", Ym = "_smSize6_sh0ss_496", Xm = "_smSize7_sh0ss_505", Zm = "_smSize8_sh0ss_514", Jm = "_smSize9_sh0ss_523", Qm = "_smSize10_sh0ss_532", eh = "_smSize11_sh0ss_543", th = "_smSize12_sh0ss_554", nh = "_smOffset0_sh0ss_559", rh = "_smOffset1_sh0ss_562", sh = "_smOffset2_sh0ss_567", oh = "_smOffset3_sh0ss_572", lh = "_smOffset4_sh0ss_577", ah = "_smOffset5_sh0ss_582", ih = "_smOffset6_sh0ss_587", ch = "_smOffset7_sh0ss_592", dh = "_smOffset8_sh0ss_597", uh = "_smOffset9_sh0ss_602", fh = "_smOffset10_sh0ss_607", _h = "_smOffset11_sh0ss_613", ph = "_smOffset12_sh0ss_619", mh = "_smOrderFirst_sh0ss_625", hh = "_smOrderLast_sh0ss_628", gh = "_smOrder0_sh0ss_631", bh = "_smOrder1_sh0ss_634", yh = "_smOrder2_sh0ss_637", xh = "_smOrder3_sh0ss_640", vh = "_smOrder4_sh0ss_643", wh = "_smOrder5_sh0ss_646", kh = "_smOrder6_sh0ss_649", Nh = "_smOrder7_sh0ss_652", Sh = "_smOrder8_sh0ss_655", Oh = "_smOrder9_sh0ss_658", $h = "_smOrder10_sh0ss_661", Eh = "_smOrder11_sh0ss_664", Th = "_smOrder12_sh0ss_667", Ch = "_mdSize1_sh0ss_673", Ah = "_mdSize2_sh0ss_682", Dh = "_mdSize3_sh0ss_691", Mh = "_mdSize4_sh0ss_700", Ih = "_mdSize5_sh0ss_709", zh = "_mdSize6_sh0ss_718", Lh = "_mdSize7_sh0ss_727", Rh = "_mdSize8_sh0ss_736", Ph = "_mdSize9_sh0ss_745", jh = "_mdSize10_sh0ss_754", Bh = "_mdSize11_sh0ss_765", Fh = "_mdSize12_sh0ss_776", Hh = "_mdOffset0_sh0ss_781", Uh = "_mdOffset1_sh0ss_784", qh = "_mdOffset2_sh0ss_789", Wh = "_mdOffset3_sh0ss_794", Kh = "_mdOffset4_sh0ss_799", Gh = "_mdOffset5_sh0ss_804", Vh = "_mdOffset6_sh0ss_809", Yh = "_mdOffset7_sh0ss_814", Xh = "_mdOffset8_sh0ss_819", Zh = "_mdOffset9_sh0ss_824", Jh = "_mdOffset10_sh0ss_829", Qh = "_mdOffset11_sh0ss_835", e1 = "_mdOffset12_sh0ss_841", t1 = "_mdOrderFirst_sh0ss_847", n1 = "_mdOrderLast_sh0ss_850", r1 = "_mdOrder0_sh0ss_853", s1 = "_mdOrder1_sh0ss_856", o1 = "_mdOrder2_sh0ss_859", l1 = "_mdOrder3_sh0ss_862", a1 = "_mdOrder4_sh0ss_865", i1 = "_mdOrder5_sh0ss_868", c1 = "_mdOrder6_sh0ss_871", d1 = "_mdOrder7_sh0ss_874", u1 = "_mdOrder8_sh0ss_877", f1 = "_mdOrder9_sh0ss_880", _1 = "_mdOrder10_sh0ss_883", p1 = "_mdOrder11_sh0ss_886", m1 = "_mdOrder12_sh0ss_889", h1 = "_lgSize1_sh0ss_895", g1 = "_lgSize2_sh0ss_904", b1 = "_lgSize3_sh0ss_913", y1 = "_lgSize4_sh0ss_922", x1 = "_lgSize5_sh0ss_931", v1 = "_lgSize6_sh0ss_940", w1 = "_lgSize7_sh0ss_949", k1 = "_lgSize8_sh0ss_958", N1 = "_lgSize9_sh0ss_967", S1 = "_lgSize10_sh0ss_976", O1 = "_lgSize11_sh0ss_987", $1 = "_lgSize12_sh0ss_998", E1 = "_lgOffset0_sh0ss_1003", T1 = "_lgOffset1_sh0ss_1006", C1 = "_lgOffset2_sh0ss_1011", A1 = "_lgOffset3_sh0ss_1016", D1 = "_lgOffset4_sh0ss_1021", M1 = "_lgOffset5_sh0ss_1026", I1 = "_lgOffset6_sh0ss_1031", z1 = "_lgOffset7_sh0ss_1036", L1 = "_lgOffset8_sh0ss_1041", R1 = "_lgOffset9_sh0ss_1046", P1 = "_lgOffset10_sh0ss_1051", j1 = "_lgOffset11_sh0ss_1057", B1 = "_lgOffset12_sh0ss_1063", F1 = "_lgOrderFirst_sh0ss_1069", H1 = "_lgOrderLast_sh0ss_1072", U1 = "_lgOrder0_sh0ss_1075", q1 = "_lgOrder1_sh0ss_1078", W1 = "_lgOrder2_sh0ss_1081", K1 = "_lgOrder3_sh0ss_1084", G1 = "_lgOrder4_sh0ss_1087", V1 = "_lgOrder5_sh0ss_1090", Y1 = "_lgOrder6_sh0ss_1093", X1 = "_lgOrder7_sh0ss_1096", Z1 = "_lgOrder8_sh0ss_1099", J1 = "_lgOrder9_sh0ss_1102", Q1 = "_lgOrder10_sh0ss_1105", eg = "_lgOrder11_sh0ss_1108", tg = "_lgOrder12_sh0ss_1111", ng = "_xlSize1_sh0ss_1117", rg = "_xlSize2_sh0ss_1126", sg = "_xlSize3_sh0ss_1135", og = "_xlSize4_sh0ss_1144", lg = "_xlSize5_sh0ss_1153", ag = "_xlSize6_sh0ss_1162", ig = "_xlSize7_sh0ss_1171", cg = "_xlSize8_sh0ss_1180", dg = "_xlSize9_sh0ss_1189", ug = "_xlSize10_sh0ss_1198", fg = "_xlSize11_sh0ss_1209", _g = "_xlSize12_sh0ss_1220", pg = "_xlOffset0_sh0ss_1225", mg = "_xlOffset1_sh0ss_1228", hg = "_xlOffset2_sh0ss_1233", gg = "_xlOffset3_sh0ss_1238", bg = "_xlOffset4_sh0ss_1243", yg = "_xlOffset5_sh0ss_1248", xg = "_xlOffset6_sh0ss_1253", vg = "_xlOffset7_sh0ss_1258", wg = "_xlOffset8_sh0ss_1263", kg = "_xlOffset9_sh0ss_1268", Ng = "_xlOffset10_sh0ss_1273", Sg = "_xlOffset11_sh0ss_1279", Og = "_xlOffset12_sh0ss_1285", $g = "_xlOrderFirst_sh0ss_1291", Eg = "_xlOrderLast_sh0ss_1294", Tg = "_xlOrder0_sh0ss_1297", Cg = "_xlOrder1_sh0ss_1300", Ag = "_xlOrder2_sh0ss_1303", Dg = "_xlOrder3_sh0ss_1306", Mg = "_xlOrder4_sh0ss_1309", Ig = "_xlOrder5_sh0ss_1312", zg = "_xlOrder6_sh0ss_1315", Lg = "_xlOrder7_sh0ss_1318", Rg = "_xlOrder8_sh0ss_1321", Pg = "_xlOrder9_sh0ss_1324", jg = "_xlOrder10_sh0ss_1327", Bg = "_xlOrder11_sh0ss_1330", Fg = "_xlOrder12_sh0ss_1333", Hg = "_xxSize1_sh0ss_1339", Ug = "_xxSize2_sh0ss_1348", qg = "_xxSize3_sh0ss_1357", Wg = "_xxSize4_sh0ss_1366", Kg = "_xxSize5_sh0ss_1375", Gg = "_xxSize6_sh0ss_1384", Vg = "_xxSize7_sh0ss_1393", Yg = "_xxSize8_sh0ss_1402", Xg = "_xxSize9_sh0ss_1411", Zg = "_xxSize10_sh0ss_1420", Jg = "_xxSize11_sh0ss_1431", Qg = "_xxSize12_sh0ss_1442", eb = "_xxOffset0_sh0ss_1447", tb = "_xxOffset1_sh0ss_1450", nb = "_xxOffset2_sh0ss_1455", rb = "_xxOffset3_sh0ss_1460", sb = "_xxOffset4_sh0ss_1465", ob = "_xxOffset5_sh0ss_1470", lb = "_xxOffset6_sh0ss_1475", ab = "_xxOffset7_sh0ss_1480", ib = "_xxOffset8_sh0ss_1485", cb = "_xxOffset9_sh0ss_1490", db = "_xxOffset10_sh0ss_1495", ub = "_xxOffset11_sh0ss_1501", fb = "_xxOffset12_sh0ss_1507", _b = "_xxOrderFirst_sh0ss_1513", pb = "_xxOrderLast_sh0ss_1516", mb = "_xxOrder0_sh0ss_1519", hb = "_xxOrder1_sh0ss_1522", gb = "_xxOrder2_sh0ss_1525", bb = "_xxOrder3_sh0ss_1528", yb = "_xxOrder4_sh0ss_1531", xb = "_xxOrder5_sh0ss_1534", vb = "_xxOrder6_sh0ss_1537", wb = "_xxOrder7_sh0ss_1540", kb = "_xxOrder8_sh0ss_1543", Nb = "_xxOrder9_sh0ss_1546", Sb = "_xxOrder10_sh0ss_1549", Ob = "_xxOrder11_sh0ss_1552", $b = "_xxOrder12_sh0ss_1555", ls = {
  column: gp,
  Size1: bp,
  Size2: yp,
  Size3: xp,
  Size4: vp,
  Size5: wp,
  Size6: kp,
  Size7: Np,
  Size8: Sp,
  Size9: Op,
  Size10: $p,
  Size11: Ep,
  Size12: Tp,
  Offset0: Cp,
  Offset1: Ap,
  Offset2: Dp,
  Offset3: Mp,
  Offset4: Ip,
  Offset5: zp,
  Offset6: Lp,
  Offset7: Rp,
  Offset8: Pp,
  Offset9: jp,
  Offset10: Bp,
  Offset11: Fp,
  Offset12: Hp,
  OrderFirst: Up,
  OrderLast: qp,
  Order0: Wp,
  Order1: Kp,
  Order2: Gp,
  Order3: Vp,
  Order4: Yp,
  Order5: Xp,
  Order6: Zp,
  Order7: Jp,
  Order8: Qp,
  Order9: em,
  Order10: tm,
  Order11: nm,
  Order12: rm,
  xsSize1: sm,
  xsSize2: om,
  xsSize3: lm,
  xsSize4: am,
  xsSize5: im,
  xsSize6: cm,
  xsSize7: dm,
  xsSize8: um,
  xsSize9: fm,
  xsSize10: _m,
  xsSize11: pm,
  xsSize12: mm,
  xsOffset0: hm,
  xsOffset1: gm,
  xsOffset2: bm,
  xsOffset3: ym,
  xsOffset4: xm,
  xsOffset5: vm,
  xsOffset6: wm,
  xsOffset7: km,
  xsOffset8: Nm,
  xsOffset9: Sm,
  xsOffset10: Om,
  xsOffset11: $m,
  xsOffset12: Em,
  xsOrderFirst: Tm,
  xsOrderLast: Cm,
  xsOrder0: Am,
  xsOrder1: Dm,
  xsOrder2: Mm,
  xsOrder3: Im,
  xsOrder4: zm,
  xsOrder5: Lm,
  xsOrder6: Rm,
  xsOrder7: Pm,
  xsOrder8: jm,
  xsOrder9: Bm,
  xsOrder10: Fm,
  xsOrder11: Hm,
  xsOrder12: Um,
  smSize1: qm,
  smSize2: Wm,
  smSize3: Km,
  smSize4: Gm,
  smSize5: Vm,
  smSize6: Ym,
  smSize7: Xm,
  smSize8: Zm,
  smSize9: Jm,
  smSize10: Qm,
  smSize11: eh,
  smSize12: th,
  smOffset0: nh,
  smOffset1: rh,
  smOffset2: sh,
  smOffset3: oh,
  smOffset4: lh,
  smOffset5: ah,
  smOffset6: ih,
  smOffset7: ch,
  smOffset8: dh,
  smOffset9: uh,
  smOffset10: fh,
  smOffset11: _h,
  smOffset12: ph,
  smOrderFirst: mh,
  smOrderLast: hh,
  smOrder0: gh,
  smOrder1: bh,
  smOrder2: yh,
  smOrder3: xh,
  smOrder4: vh,
  smOrder5: wh,
  smOrder6: kh,
  smOrder7: Nh,
  smOrder8: Sh,
  smOrder9: Oh,
  smOrder10: $h,
  smOrder11: Eh,
  smOrder12: Th,
  mdSize1: Ch,
  mdSize2: Ah,
  mdSize3: Dh,
  mdSize4: Mh,
  mdSize5: Ih,
  mdSize6: zh,
  mdSize7: Lh,
  mdSize8: Rh,
  mdSize9: Ph,
  mdSize10: jh,
  mdSize11: Bh,
  mdSize12: Fh,
  mdOffset0: Hh,
  mdOffset1: Uh,
  mdOffset2: qh,
  mdOffset3: Wh,
  mdOffset4: Kh,
  mdOffset5: Gh,
  mdOffset6: Vh,
  mdOffset7: Yh,
  mdOffset8: Xh,
  mdOffset9: Zh,
  mdOffset10: Jh,
  mdOffset11: Qh,
  mdOffset12: e1,
  mdOrderFirst: t1,
  mdOrderLast: n1,
  mdOrder0: r1,
  mdOrder1: s1,
  mdOrder2: o1,
  mdOrder3: l1,
  mdOrder4: a1,
  mdOrder5: i1,
  mdOrder6: c1,
  mdOrder7: d1,
  mdOrder8: u1,
  mdOrder9: f1,
  mdOrder10: _1,
  mdOrder11: p1,
  mdOrder12: m1,
  lgSize1: h1,
  lgSize2: g1,
  lgSize3: b1,
  lgSize4: y1,
  lgSize5: x1,
  lgSize6: v1,
  lgSize7: w1,
  lgSize8: k1,
  lgSize9: N1,
  lgSize10: S1,
  lgSize11: O1,
  lgSize12: $1,
  lgOffset0: E1,
  lgOffset1: T1,
  lgOffset2: C1,
  lgOffset3: A1,
  lgOffset4: D1,
  lgOffset5: M1,
  lgOffset6: I1,
  lgOffset7: z1,
  lgOffset8: L1,
  lgOffset9: R1,
  lgOffset10: P1,
  lgOffset11: j1,
  lgOffset12: B1,
  lgOrderFirst: F1,
  lgOrderLast: H1,
  lgOrder0: U1,
  lgOrder1: q1,
  lgOrder2: W1,
  lgOrder3: K1,
  lgOrder4: G1,
  lgOrder5: V1,
  lgOrder6: Y1,
  lgOrder7: X1,
  lgOrder8: Z1,
  lgOrder9: J1,
  lgOrder10: Q1,
  lgOrder11: eg,
  lgOrder12: tg,
  xlSize1: ng,
  xlSize2: rg,
  xlSize3: sg,
  xlSize4: og,
  xlSize5: lg,
  xlSize6: ag,
  xlSize7: ig,
  xlSize8: cg,
  xlSize9: dg,
  xlSize10: ug,
  xlSize11: fg,
  xlSize12: _g,
  xlOffset0: pg,
  xlOffset1: mg,
  xlOffset2: hg,
  xlOffset3: gg,
  xlOffset4: bg,
  xlOffset5: yg,
  xlOffset6: xg,
  xlOffset7: vg,
  xlOffset8: wg,
  xlOffset9: kg,
  xlOffset10: Ng,
  xlOffset11: Sg,
  xlOffset12: Og,
  xlOrderFirst: $g,
  xlOrderLast: Eg,
  xlOrder0: Tg,
  xlOrder1: Cg,
  xlOrder2: Ag,
  xlOrder3: Dg,
  xlOrder4: Mg,
  xlOrder5: Ig,
  xlOrder6: zg,
  xlOrder7: Lg,
  xlOrder8: Rg,
  xlOrder9: Pg,
  xlOrder10: jg,
  xlOrder11: Bg,
  xlOrder12: Fg,
  xxSize1: Hg,
  xxSize2: Ug,
  xxSize3: qg,
  xxSize4: Wg,
  xxSize5: Kg,
  xxSize6: Gg,
  xxSize7: Vg,
  xxSize8: Yg,
  xxSize9: Xg,
  xxSize10: Zg,
  xxSize11: Jg,
  xxSize12: Qg,
  xxOffset0: eb,
  xxOffset1: tb,
  xxOffset2: nb,
  xxOffset3: rb,
  xxOffset4: sb,
  xxOffset5: ob,
  xxOffset6: lb,
  xxOffset7: ab,
  xxOffset8: ib,
  xxOffset9: cb,
  xxOffset10: db,
  xxOffset11: ub,
  xxOffset12: fb,
  xxOrderFirst: _b,
  xxOrderLast: pb,
  xxOrder0: mb,
  xxOrder1: hb,
  xxOrder2: gb,
  xxOrder3: bb,
  xxOrder4: yb,
  xxOrder5: xb,
  xxOrder6: vb,
  xxOrder7: wb,
  xxOrder8: kb,
  xxOrder9: Nb,
  xxOrder10: Sb,
  xxOrder11: Ob,
  xxOrder12: $b
}, Eb = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Tb(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Cb(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Ab(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Db(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Ab(n, t), `${e}Order${t}`);
}
function XS({ className: e, style: t, ...n }) {
  const r = [ls.column], l = { ...t };
  for (const [M, E, w, k] of Eb) {
    const T = n[E], R = n[w], L = n[k];
    if (T != null) {
      Tb(E, T);
      const j = ls[`${M}Size${T}`];
      j && r.push(j);
    }
    if (R != null) {
      Cb(w, R);
      const j = ls[`${M}Offset${R}`];
      j && r.push(j);
    }
    if (L != null) {
      const j = ls[Db(M, L, k)];
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
    sizeLg: g,
    offsetLg: h,
    sizeXl: m,
    offsetXl: y,
    sizeXx: p,
    offsetXx: _,
    order: b,
    orderXs: N,
    orderSm: v,
    orderMd: $,
    orderLg: S,
    orderXl: C,
    orderXx: A,
    ...z
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...z
    }
  );
}
const Mb = "_stack_bmbbp_1", zr = {
  stack: Mb,
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
function Yo(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function ZS({
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
    ...r != null ? { gap: hs(r) } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        zr.stack,
        zr[`dir-${c}`],
        Yo(n) !== "wrap" ? zr[`wrap-${Yo(n)}`] : null,
        l != null ? zr[`align-${l}`] : null,
        i != null ? zr[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const Ib = "_autogrid_16x9f_1", zb = {
  autogrid: Ib
};
function JS({
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
    ...t != null ? { gap: hs(t) } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [zb.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
    }
  );
}
const Lb = "_layout_fxvw1_1", Rb = "_row_fxvw1_7", Pb = "_grid_fxvw1_21", jb = "_gridRight_fxvw1_27", Bb = "_gridHeader_fxvw1_31", Fb = "_gridFooter_fxvw1_36", Hb = "_gridContents_fxvw1_41", Ub = "_gridBody_fxvw1_45", An = {
  layout: Lb,
  row: Rb,
  grid: Pb,
  gridRight: jb,
  gridHeader: Bb,
  gridFooter: Fb,
  gridContents: Hb,
  gridBody: Ub
}, qb = "_footer_3be5w_1", Wb = "_sticky_3be5w_9", Xo = {
  footer: qb,
  sticky: Wb
};
function Kb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [Xo.footer, e ? Xo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Gb = "_header_1tw8b_1", Vb = "_sticky_1tw8b_9", Zo = {
  header: Gb,
  sticky: Vb
};
function Yb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [Zo.header, e ? Zo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Xb = "_sidebar_175d5_1", Zb = "_sticky_175d5_23", Jb = "_left_175d5_41", Qb = "_right_175d5_45", ey = "_start_175d5_50", ty = "_end_175d5_54", ny = "_fullHeight_175d5_60", ry = "_collapsed_175d5_64", sy = "_responsive_175d5_72", oy = "_overlay_175d5_80", ly = "_mask_175d5_108", qn = {
  sidebar: Xb,
  sticky: Zb,
  left: Jb,
  right: Qb,
  start: ey,
  end: ty,
  fullHeight: ny,
  collapsed: ry,
  responsive: sy,
  overlay: oy,
  mask: ly
};
function ay({
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
  }, [r, t, d]), /* @__PURE__ */ D(pt, { children: [
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
function QS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(pt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], o = [], a = [], c = [];
  Gr.forEach(n, (x) => {
    if (!qt(x)) {
      d.push(x);
      return;
    }
    if (x.type === Yb)
      l.push(x);
    else if (x.type === Kb)
      i.push(x);
    else if (x.type === ay) {
      const g = x, h = g.props.position;
      c.push(g), (h === "right" || h === "end" ? a : o).push(g);
    } else
      d.push(x);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const x = u ? a : o;
    return /* @__PURE__ */ D(
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
          /* @__PURE__ */ D("div", { className: An.gridContents, children: [
            x,
            /* @__PURE__ */ s("div", { className: An.gridBody, children: d })
          ] }),
          i.length > 0 && /* @__PURE__ */ s("div", { className: An.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [An.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        l,
        /* @__PURE__ */ D("div", { className: An.row, children: [
          o,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const iy = "_body_1ge00_4", cy = "_bare_1ge00_12", Jo = {
  body: iy,
  bare: cy
};
function eO({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [Jo.body, t ? null : Jo.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const dy = "_toggle_lxnk5_1", uy = {
  toggle: dy
};
function tO({
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
      className: [uy.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ s(Me, { icon: e, size: 20 })
    }
  );
}
const fy = "_track_14127_1", _y = "_bar_14127_31", py = "_primary_14127_39", my = "_success_14127_43", hy = "_warning_14127_47", gy = "_danger_14127_51", by = "_indeterminate_14127_149", yy = "_circular_14127_163", xy = "_fill_14127_203", nn = {
  track: fy,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: _y,
  primary: py,
  success: my,
  warning: hy,
  danger: gy,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: by,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: yy,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: xy,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function nO({
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
    const g = typeof d == "string", h = 2, m = 10.5, y = 2 * Math.PI * m, p = y * (l ? 0.75 : 1), _ = l ? 0 : y * (1 - u / 100), b = Kr(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: g ? void 0 : d,
        height: g ? void 0 : d,
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
          b ? nn[b] : null,
          g ? nn[`circular-${d}`] : null,
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
              strokeWidth: h
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: h,
              strokeDasharray: `${p} ${y}`,
              strokeDashoffset: _
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
const vy = "_wrapper_tk30z_1", wy = {
  wrapper: vy
}, ky = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Il = "dx-palette", Ny = "data-palette";
function Sy(e, t) {
  const n = e === void 0 ? Il : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function Oy(e, t) {
  const n = e === void 0 ? Il : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function rO({
  themes: e = ky,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = Ny,
  onChange: i,
  label: d = "Theme",
  placeholder: o = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, x] = q(void 0), g = t !== void 0, h = t ?? u ?? Sy(r, e) ?? n, m = h ?? "", y = oe(void 0);
  ve(() => {
    if (g) return;
    const _ = document.documentElement;
    if (h === void 0) {
      y.current !== void 0 && _.getAttribute(l) === y.current && (_.removeAttribute(l), y.current = void 0);
      return;
    }
    _.setAttribute(l, h), y.current = h;
  }, [h, l, g]);
  const p = (_) => {
    const b = _.target.value;
    g || (x(b), Oy(r, b)), i?.(b);
  };
  return /* @__PURE__ */ D("label", { className: [wy.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ D(or, { id: a, size: c, value: m, onChange: p, children: [
      h === void 0 && /* @__PURE__ */ s("option", { value: "", disabled: !0, children: o }),
      h !== void 0 && !e.includes(h) && /* @__PURE__ */ s("option", { value: h, children: h }),
      e.map((_) => /* @__PURE__ */ s("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function $y(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function so(e) {
  const [t, n] = q(() => $y(e));
  return ve(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const Ey = "_pressed_12x15_8", Ty = {
  pressed: Ey
}, Cy = st(
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
    severity: g,
    shade: h,
    ...m
  }, y) {
    const [p, _] = q(n), b = t ?? p, N = (v) => {
      const $ = !b;
      t === void 0 && _($), r?.($), f?.(v);
    };
    return /* @__PURE__ */ s(
      an,
      {
        ...m,
        ref: y,
        variant: b && l ? l : x,
        severity: b ? i : g,
        shade: b ? d : h,
        size: a,
        "aria-pressed": b,
        className: [b ? Ty.pressed : null, c].filter(Boolean).join(" "),
        onClick: N,
        children: b && o !== void 0 ? o : u
      }
    );
  }
), zl = "dx-theme";
function Ay(e) {
  const t = e === void 0 ? zl : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Dy(e, t) {
  const n = e === void 0 ? zl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function sO({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: o
}) {
  const a = so("(prefers-color-scheme: dark)"), [c, f] = q(void 0), u = e !== void 0, x = e ?? c ?? Ay(n) ?? t ?? "system", g = x === "system" ? a ? "dark" : "light" : x;
  return ve(() => {
    if (!u) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, u]), /* @__PURE__ */ s(
    Cy,
    {
      id: i,
      size: o,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: g === "dark",
      onChange: (m) => {
        const y = m ? "dark" : "light";
        u || (f(y), Dy(n, y)), r?.(y);
      },
      toggleContent: /* @__PURE__ */ s(Me, { icon: "light_mode", size: o ?? "md" }),
      children: /* @__PURE__ */ s(Me, { icon: "dark_mode", size: o ?? "md" })
    }
  );
}
const Ll = "dx-palette", Rl = "dx-theme", Ws = "data-palette", Ks = "data-theme", Gs = /* @__PURE__ */ new Set();
function My() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Ws), t = document.documentElement.getAttribute(Ks);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function oo(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Ws) : document.documentElement.setAttribute(Ws, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Ks) : document.documentElement.setAttribute(Ks, e.appearance));
}
function Pl(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function Qo(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let el = !1;
function vr() {
  const e = My();
  if (!el) {
    el = !0;
    const t = Qo(Ll), n = Qo(Rl), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && oo(l), l;
  }
  return e;
}
function jl() {
  const e = vr();
  Gs.forEach((t) => t({ ...e }));
}
function tl(e) {
  return Gs.add(e), () => {
    Gs.delete(e);
  };
}
function oO() {
  return vr().theme;
}
function Iy(e) {
  const t = vr();
  t.theme !== e && (t.theme = e, oo(t), Pl(Ll, e), jl());
}
function lO() {
  return vr().appearance;
}
function zy(e) {
  const t = vr();
  t.appearance !== e && (t.appearance = e, oo(t), Pl(Rl, e), jl());
}
function aO() {
  const [, e] = q(0);
  ve(() => tl(() => e((n) => n + 1)), []);
  const t = vr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: Iy,
    setAppearance: zy,
    subscribe: tl
  };
}
function Ly(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, y) => Math.floor(Math.abs(Math.sin(y + 1)) * 4294967296)
  ), a = (m, y) => m + y | 0, c = (m, y) => m << y | m >>> 32 - y;
  let f = 1732584193, u = 4023233417, x = 2562383102, g = 271733878;
  for (let m = 0; m < r; m += 64) {
    const y = [];
    for (let v = 0; v < 16; v += 1)
      y.push(i.getUint32(m + v * 4, !0));
    let p = f, _ = u, b = x, N = g;
    for (let v = 0; v < 64; v += 1) {
      let $, S;
      v < 16 ? ($ = _ & b | ~_ & N, S = v) : v < 32 ? ($ = N & _ | ~N & b, S = (5 * v + 1) % 16) : v < 48 ? ($ = _ ^ b ^ N, S = (3 * v + 5) % 16) : ($ = b ^ (_ | ~N), S = 7 * v % 16), $ = a(a(a($, p), o[v]), y[S]), p = N, N = b, b = _, _ = a(_, c($, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = a(f, p), u = a(u, _), x = a(x, b), g = a(g, N);
  }
  const h = (m) => {
    let y = "";
    for (let p = 0; p < 4; p += 1)
      y += `0${(m >>> p * 8 & 255).toString(16)}`.slice(-2);
    return y;
  };
  return h(f) + h(u) + h(x) + h(g);
}
const Ry = "_avatar_1mhfr_1", Py = "_xs_1mhfr_12", jy = "_sm_1mhfr_18", By = "_md_1mhfr_24", Fy = "_lg_1mhfr_30", Hy = "_xl_1mhfr_36", Uy = "_initials_1mhfr_42", qy = "_image_1mhfr_57", Wy = "_status_1mhfr_64", Ky = "_online_1mhfr_84", Gy = "_offline_1mhfr_88", Vy = "_away_1mhfr_92", ur = {
  avatar: Ry,
  xs: Py,
  sm: jy,
  md: By,
  lg: Fy,
  xl: Hy,
  initials: Uy,
  image: qy,
  status: Wy,
  online: Ky,
  offline: Gy,
  away: Vy
}, Yy = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, _s = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Xy(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Zy(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return _s[t % _s.length] ?? _s[0];
}
function iO({
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
  const c = Oe(() => e ? Xy(e) : "?", [e]), f = Oe(() => e ? Zy(e) : _s[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${Ly(N)}?d=${r}&s=${Yy[d]}&r=${l}`;
  }, [t, n, r, l, d]), x = t ?? u, [g, h] = q(null), m = x != null && g !== x, y = m && i === "", p = i ?? e ?? "avatar", _ = o ? `${p}, ${o}` : p, b = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: ur.image,
        src: x,
        alt: y ? "" : o ? _ : p,
        onError: () => h(x ?? null)
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
  return /* @__PURE__ */ D(
    "span",
    {
      className: [
        ur.avatar,
        ur[d],
        o ? ur[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : _,
      children: [
        b,
        o && /* @__PURE__ */ s("span", { className: ur.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Jy = "_root_zzwfz_1", Qy = "_left_zzwfz_6", e0 = "_right_zzwfz_7", t0 = "_panel_zzwfz_12", n0 = "_bottom_zzwfz_20", r0 = "_tabList_zzwfz_24", s0 = "_underline_zzwfz_53", o0 = "_pills_zzwfz_72", l0 = "_tab_zzwfz_24", a0 = "_active_zzwfz_113", i0 = "_disabled_zzwfz_139", Dn = {
  root: Jy,
  left: Qy,
  right: e0,
  panel: t0,
  bottom: n0,
  tabList: r0,
  underline: s0,
  pills: o0,
  tab: l0,
  active: a0,
  disabled: i0
};
function cO({
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
  ), u = t ?? c, x = i === "left" || i === "right", g = (y) => {
    f(y), r?.(y);
  }, h = (y) => {
    const p = e.filter((N) => !N.disabled), _ = p.findIndex((N) => N.key === u);
    let b = -1;
    y.key === "ArrowRight" || x && y.key === "ArrowDown" ? b = (_ + 1) % p.length : y.key === "ArrowLeft" || x && y.key === "ArrowUp" ? b = (_ - 1 + p.length) % p.length : y.key === "Home" ? b = 0 : y.key === "End" && (b = p.length - 1), b >= 0 && (y.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[b]?.key ?? "")}"]`
    )?.focus(), g(p[b]?.key ?? ""));
  }, m = e.find((y) => y.key === u);
  return /* @__PURE__ */ D(
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
            onKeyDown: h,
            children: e.map((y) => {
              const p = y.key === u;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": p,
                  "aria-controls": `${o}-panel-${y.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    Dn.tab,
                    p ? Dn.active : null,
                    y.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => g(y.key),
                  children: y.label
                },
                y.key
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
const c0 = "_root_1l1j2_1", d0 = "_item_1l1j2_9", u0 = "_heading_1l1j2_13", f0 = "_trigger_1l1j2_17", _0 = "_disabled_1l1j2_34", p0 = "_title_1l1j2_48", m0 = "_chevron_1l1j2_52", h0 = "_open_1l1j2_59", g0 = "_content_1l1j2_63", Mn = {
  root: c0,
  item: d0,
  heading: u0,
  trigger: f0,
  disabled: _0,
  title: p0,
  chevron: m0,
  open: h0,
  content: g0
};
function dO({
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
    const x = c.includes(u) ? c.filter((g) => g !== u) : t ? [...c, u] : [u];
    a(x), l?.(x);
  };
  return /* @__PURE__ */ s("div", { className: [Mn.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const x = c.includes(u.key), g = `${d}-panel-${u.key}`, h = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ D("div", { className: Mn.item, children: [
      /* @__PURE__ */ s("h3", { className: Mn.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: h,
          "aria-expanded": x,
          "aria-controls": g,
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
          id: g,
          role: "region",
          "aria-labelledby": h,
          hidden: !x,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const b0 = "_textarea_l7fsl_1", y0 = "_invalid_l7fsl_27", x0 = "_xs_l7fsl_34", v0 = "_sm_l7fsl_39", w0 = "_md_l7fsl_44", k0 = "_lg_l7fsl_49", N0 = "_xl_l7fsl_54", as = {
  textarea: b0,
  invalid: y0,
  xs: x0,
  sm: v0,
  md: w0,
  lg: k0,
  xl: N0,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, uO = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          as.textarea,
          as[t],
          as[`resize-${n}`],
          r ? as.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), S0 = "_root_xyp2i_1", O0 = "_trigger_xyp2i_9", $0 = "_invalid_xyp2i_40", E0 = "_placeholder_xyp2i_47", T0 = "_label_xyp2i_54", C0 = "_chevron_xyp2i_60", A0 = "_chevronOpen_xyp2i_70", D0 = "_menu_xyp2i_74", M0 = "_option_xyp2i_89", I0 = "_disabled_xyp2i_100", z0 = "_active_xyp2i_104", L0 = "_selected_xyp2i_105", R0 = "_header_xyp2i_115", P0 = "_xs_xyp2i_122", j0 = "_sm_xyp2i_128", B0 = "_md_xyp2i_134", F0 = "_lg_xyp2i_140", H0 = "_xl_xyp2i_146", Ht = {
  root: S0,
  trigger: O0,
  invalid: $0,
  placeholder: E0,
  label: T0,
  chevron: C0,
  chevronOpen: A0,
  menu: D0,
  option: M0,
  disabled: I0,
  active: z0,
  selected: L0,
  header: R0,
  xs: P0,
  sm: j0,
  md: B0,
  lg: F0,
  xl: H0
}, U0 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function fO({
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
  const f = ot(), u = `${f}-listbox`, x = oe(null), g = oe(null), [h, m] = q(
    n
  ), [y, p] = q(!1), _ = t ?? h, b = e.map(
    (w, k) => w.label === "" || w.disabled ? -1 : k
  ).filter((w) => w >= 0), N = e.findIndex(
    (w) => w.value === _
  ), [v, $] = q(
    () => b.includes(0) ? 0 : b[0] ?? -1
  ), S = B(() => {
    if (o) return;
    const w = N >= 0 && b.includes(N) ? N : b[0];
    $(w ?? -1), p(!0);
  }, [o, N, b]), C = B(() => {
    p(!1), g.current?.focus();
  }, []);
  ve(() => {
    if (!y) return;
    const w = (k) => {
      x.current && !x.current.contains(k.target) && p(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [y]);
  const A = (w) => {
    m(w), r?.(w), p(!1), g.current?.focus();
  }, z = (w) => {
    if (b.length === 0) return;
    const k = b.includes(v) ? b.indexOf(v) : 0, T = b[(k + w + b.length) % b.length];
    T != null && $(T);
  }, M = (w) => {
    if (!y) {
      w.key === "ArrowDown" && (w.preventDefault(), S());
      return;
    }
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), z(1);
        break;
      case "ArrowUp":
        w.preventDefault(), z(-1);
        break;
      case "Home":
        w.preventDefault(), b[0] != null && $(b[0]);
        break;
      case "End":
        w.preventDefault(), b[b.length - 1] != null && $(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        w.preventDefault(), v >= 0 && e[v] && b.includes(v) && A(e[v]?.value ?? "");
        break;
      case "Escape":
        w.preventDefault(), C();
        break;
      case "Tab":
        p(!1);
        break;
    }
  }, E = e.find(
    (w) => w.value === _
  );
  return /* @__PURE__ */ D(
    "div",
    {
      ref: x,
      className: [Ht.root, a].filter(Boolean).join(" "),
      onKeyDown: M,
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: g,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              Ht.trigger,
              Ht[i],
              y ? Ht.open : null,
              d ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? p(!1) : S(),
            ...c,
            children: [
              /* @__PURE__ */ s("span", { className: E ? Ht.label : Ht.placeholder, children: E ? E.label : l }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [Ht.chevron, y ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: U0 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        y && /* @__PURE__ */ s(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
            className: Ht.menu,
            children: e.map(
              (w, k) => w.label === "" ? /* @__PURE__ */ s(
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
                  id: `${f}-option-${k}`,
                  role: "option",
                  "aria-selected": w.value === _,
                  "aria-disabled": w.disabled || void 0,
                  className: [
                    Ht.option,
                    k === v ? Ht.active : null,
                    w.value === _ ? Ht.selected : null,
                    w.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    w.disabled || A(w.value);
                  },
                  onMouseEnter: () => {
                    !w.disabled && w.label !== "" && $(k);
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
const q0 = "_root_1ma8a_1", W0 = "_wrap_1ma8a_9", K0 = "_input_1ma8a_26", G0 = "_invalid_1ma8a_31", V0 = "_clear_1ma8a_58", Y0 = "_menu_1ma8a_83", X0 = "_option_1ma8a_98", Z0 = "_disabled_1ma8a_109", J0 = "_active_1ma8a_113", Q0 = "_empty_1ma8a_123", ex = "_xs_1ma8a_129", tx = "_sm_1ma8a_136", nx = "_md_1ma8a_143", rx = "_lg_1ma8a_150", sx = "_xl_1ma8a_157", dn = {
  root: q0,
  wrap: W0,
  input: K0,
  invalid: G0,
  clear: V0,
  menu: Y0,
  option: X0,
  disabled: Z0,
  active: J0,
  empty: Q0,
  xs: ex,
  sm: tx,
  md: nx,
  lg: rx,
  xl: sx
}, ox = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function _O({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: c = ox,
  className: f,
  ...u
}) {
  const x = ot(), g = `${x}-listbox`, h = oe(null), m = oe(null), [y, p] = q(n), [_, b] = q(!1), N = t ?? y, v = Oe(
    () => N.trim() === "" ? [...e] : e.filter((L) => c(L, N)),
    [e, N, c]
  ), $ = v.map((L, j) => L.disabled ? -1 : j).filter((L) => L >= 0), [S, C] = q(-1), A = (L) => {
    p(L), r?.(L);
  }, z = (L) => {
    A(L.label), l?.(L.value, L), b(!1);
  }, M = (L) => {
    if ($.length === 0) return;
    const j = $.includes(S) ? $.indexOf(S) : L === 1 ? -1 : 0, F = $[(j + L + $.length) % $.length];
    F != null && C(F);
  }, E = (L) => {
    a || (A(L.target.value), b(!0), C(-1));
  }, w = () => {
    a || N !== "" && b(!0);
  }, k = (L) => {
    h.current && !h.current.contains(L.relatedTarget) && b(!1);
  }, T = (L) => {
    if (!a)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), _ ? M(1) : (b(!0), C($[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), _ && M(-1);
          break;
        case "Enter":
          L.preventDefault(), _ && S >= 0 && v[S] && z(v[S]);
          break;
        case "Escape":
          L.preventDefault(), b(!1);
          break;
        case "Tab":
          _ && S >= 0 && v[S] && z(v[S]), b(!1);
          break;
      }
  }, R = () => {
    A(""), C(-1), b(!0), m.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: h,
      className: [dn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
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
                  "aria-expanded": _,
                  "aria-controls": g,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && S >= 0 ? `${x}-option-${S}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: N,
                  placeholder: i,
                  className: dn.input,
                  onChange: E,
                  onFocus: w,
                  onBlur: k,
                  onKeyDown: T,
                  ...u
                }
              ),
              N !== "" && !a && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: dn.clear,
                  "aria-label": "Clear",
                  onClick: R,
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
          /* @__PURE__ */ s("div", { id: g, className: dn.menu, children: /* @__PURE__ */ s("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ s("div", { id: g, role: "listbox", className: dn.menu, children: v.map((L, j) => /* @__PURE__ */ s(
          "div",
          {
            id: `${x}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              dn.option,
              j === S ? dn.active : null,
              L.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              L.disabled || z(L);
            },
            onMouseDown: (F) => {
              F.preventDefault(), L.disabled || z(L);
            },
            onMouseEnter: () => {
              L.disabled || C(j);
            },
            children: L.label
          },
          L.value
        )) }))
      ]
    }
  );
}
const lx = "_box_muvqe_1", ax = "_option_muvqe_12", ix = "_disabled_muvqe_23", cx = "_selected_muvqe_27", dx = "_active_muvqe_33", Lr = {
  box: lx,
  option: ax,
  disabled: ix,
  selected: cx,
  active: dx
};
function pO({
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
  }), u = t == null ? c : Array.isArray(t) ? t : [t], x = e.findIndex((v) => !v.disabled), [g, h] = q(
    () => x >= 0 ? x : 0
  ), m = oe(""), y = oe(null), p = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), b = (v) => {
    const $ = e[v];
    if (!(!$ || $.disabled))
      if (h(v), r) {
        const S = u.includes($.value) ? u.filter((C) => C !== $.value) : [...u, $.value];
        p(S);
      } else
        p([$.value]);
  }, N = (v) => {
    if (_.length === 0) return;
    const $ = _.includes(g) ? g : _[0];
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
      v.preventDefault(), b($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const C = (m.current + v.key).toLowerCase();
      m.current = C, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [..._, ..._], z = _.indexOf($) + 1, M = A.slice(z).find((E) => e[E]?.label.toLowerCase().startsWith(C));
      M != null && h(M);
      return;
    }
    S >= 0 && (v.preventDefault(), h(S), r || p([e[S]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[g] ? `${a}-option-${g}` : void 0,
      style: d,
      className: [Lr.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...o,
      children: e.map((v, $) => {
        const S = u.includes(v.value), C = $ === g;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${a}-option-${$}`,
            role: "option",
            "aria-selected": S,
            "aria-disabled": v.disabled || void 0,
            className: [
              Lr.option,
              S ? Lr.selected : null,
              C ? Lr.active : null,
              v.disabled ? Lr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b($),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const ux = "_group_oinj7_1", fx = "_legend_oinj7_8", _x = "_list_oinj7_16", px = "_item_oinj7_25", mx = "_disabled_oinj7_32", hx = "_label_oinj7_37", gx = "_checkbox_oinj7_48", Zn = {
  group: ux,
  legend: fx,
  list: _x,
  item: px,
  disabled: mx,
  label: hx,
  checkbox: gx
};
function mO({
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
    const g = x ? [...c, u] : c.filter((h) => h !== u);
    a(g), r?.(g);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Zn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: Zn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: Zn.list, children: e.map((u) => {
      const x = c.includes(u.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Zn.item, u.disabled ? Zn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Zn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: Zn.checkbox,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (g) => f(u.value, g.target.checked)
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
const bx = "_group_46668_1", yx = "_legend_46668_8", xx = "_list_46668_16", vx = "_item_46668_25", wx = "_disabled_46668_32", kx = "_label_46668_37", Nx = "_radio_46668_48", Jn = {
  group: bx,
  legend: yx,
  list: xx,
  item: vx,
  disabled: wx,
  label: kx,
  radio: Nx
};
function hO({
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
  return /* @__PURE__ */ D("fieldset", { className: [Jn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: Jn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: Jn.list, children: e.map((u) => {
      const x = u.value === c;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Jn.item, u.disabled ? Jn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Jn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: Jn.radio,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (g) => f(g.target.value)
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
const Sx = "_bar_9zyxn_1", Ox = "_vertical_9zyxn_12", $x = "_option_9zyxn_17", Ex = "_selected_9zyxn_40", Tx = "_sm_9zyxn_56", Cx = "_md_9zyxn_62", Ax = "_lg_9zyxn_68", fr = {
  bar: Sx,
  vertical: Ox,
  option: $x,
  selected: Ex,
  sm: Tx,
  md: Cx,
  lg: Ax
};
function nl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function gO(e) {
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
  } = e, f = l ?? !1, [u, x] = q(r ?? (f ? [] : t[0]?.value)), g = n ?? u, h = l === !0 || l === void 0 && Array.isArray(g), m = (p) => {
    if (!h) {
      x(p), d?.(p);
      return;
    }
    const _ = nl(g), b = _.includes(p) ? _.filter((N) => N !== p) : [..._, p];
    x(b), d?.(b);
  }, y = (p) => h ? nl(g).includes(p) : g === p;
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
      children: t.map((p) => {
        const _ = y(p.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: p.disabled,
            className: [
              fr.option,
              _ ? fr.selected : null,
              p.disabled ? fr.disabled : null
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
const Dx = "_root_11hdr_1", Mx = "_action_11hdr_10", Ix = "_caret_11hdr_15", zx = "_sm_11hdr_49", Lx = "_md_11hdr_53", Rx = "_lg_11hdr_57", Px = "_fullWidth_11hdr_62", jx = "_menu_11hdr_70", Bx = "_item_11hdr_83", Fx = "_itemIcon_11hdr_105", Hx = "_disabled_11hdr_110", Ux = "_active_11hdr_114", qx = "_danger_11hdr_123", yn = {
  root: Dx,
  action: Mx,
  caret: Ix,
  sm: zx,
  md: Lx,
  lg: Rx,
  fullWidth: Px,
  menu: jx,
  item: Bx,
  itemIcon: Fx,
  disabled: Hx,
  active: Ux,
  danger: qx
}, bO = st(
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
    "aria-label": g,
    openAriaLabel: h = "More actions",
    ...m
  }, y) {
    const _ = `${ot()}-menu`, b = oe(null), N = oe(null), v = oe([]), [$, S] = q(!1), [C, A] = q(-1), z = u || a, M = Oe(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), E = B(() => {
      z || (A(M[0] ?? -1), S(!0));
    }, [z, M]), w = B(() => {
      S(!1), N.current?.focus();
    }, []);
    ve(() => {
      if (!$) return;
      const F = (X) => {
        b.current && !b.current.contains(X.target) && S(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [$]), ve(() => {
      $ && (z || !c) && S(!1);
    }, [$, z, c]);
    const k = oe($);
    if (ve(() => {
      const F = k.current;
      if (k.current = $, !$ || F) return;
      const X = M.includes(C) ? C : M[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [$, C, M]), c === !1) return null;
    const T = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), S(!1), N.current?.focus());
    }, R = (F) => {
      if (M.length === 0) return;
      const X = M.includes(C) ? M.indexOf(C) : F === 1 ? -1 : 0, ie = M[(X + F + M.length) % M.length];
      ie != null && (A(ie), v.current[ie]?.focus());
    }, L = (F) => {
      const X = F === "first" ? M[0] : M[M.length - 1];
      X != null && (A(X), v.current[X]?.focus());
    }, j = (F) => {
      switch (F.key) {
        case "ArrowDown":
          F.preventDefault(), R(1);
          break;
        case "ArrowUp":
          F.preventDefault(), R(-1);
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
          S(!1);
          break;
      }
    };
    return /* @__PURE__ */ D(
      "div",
      {
        ref: (F) => {
          b.current = F, typeof y == "function" ? y(F) : y && (y.current = F);
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
              "aria-label": g,
              onClick: () => {
                $ && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ s(
            an,
            {
              ref: N,
              className: yn.caret,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              disabled: z,
              "aria-haspopup": "menu",
              "aria-expanded": $,
              "aria-controls": _,
              "aria-label": h,
              onClick: () => $ ? S(!1) : E(),
              onKeyDown: (F) => {
                !$ && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), E());
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
              "aria-label": h,
              className: yn.menu,
              onKeyDown: j,
              ...m,
              children: r.map((F, X) => /* @__PURE__ */ D(
                "button",
                {
                  ref: (ie) => {
                    v.current[X] = ie;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: X === C ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    yn.item,
                    X === C ? yn.active : null,
                    F.danger ? yn.danger : null,
                    F.disabled ? yn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(X),
                  onMouseEnter: () => {
                    F.disabled || A(X);
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
), Wx = "_mask_rcv90_1", Kx = "_invalid_rcv90_31", Gx = "_xs_rcv90_38", Vx = "_sm_rcv90_44", Yx = "_md_rcv90_50", Xx = "_lg_rcv90_56", Zx = "_xl_rcv90_62", Rs = {
  mask: Wx,
  invalid: Kx,
  xs: Gx,
  sm: Vx,
  md: Yx,
  lg: Xx,
  xl: Zx
};
function rl(e, t) {
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
const yO = st(function({
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
  const [u, x] = q(i ?? ""), g = l !== void 0, h = g ? l ?? "" : u, m = (_) => {
    const b = rl(_, r);
    return g || x(b), d?.(b), b;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: h,
      onChange: (_) => {
        m(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const b = _.currentTarget.selectionStart ?? h.length, N = h[b - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const v = h.replace(/\D/g, "");
            m(rl(v.slice(0, -1), r));
          }
        }
        a?.(_);
      },
      className: [
        Rs.mask,
        Rs[t],
        n ? Rs.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), Jx = "_wrapper_12jdf_1", Qx = "_input_12jdf_8", ev = "_invalid_12jdf_38", tv = "_button_12jdf_45", nv = "_up_12jdf_77", rv = "_down_12jdf_82", sv = "_xs_12jdf_87", ov = "_sm_12jdf_93", lv = "_md_12jdf_99", av = "_lg_12jdf_105", iv = "_xl_12jdf_111", Wn = {
  wrapper: Jx,
  input: Qx,
  invalid: ev,
  button: tv,
  up: nv,
  down: rv,
  xs: sv,
  sm: ov,
  md: lv,
  lg: av,
  xl: iv
};
function Vs(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function cv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Bl(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function dv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function uv(e, t, n, r, l) {
  const d = Vs(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * l : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / l) * l : o = n + Math.floor((d - n - 1e-9) / l) * l, Bl(o, n, r);
}
const xO = st(
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
    onBlur: g,
    onKeyDown: h,
    ...m
  }, y) {
    const [p, _] = q(
      d != null ? String(d) : ""
    ), b = i !== void 0, N = b ? i == null ? "" : String(i) : p, v = (M) => {
      b || _(M), o?.(Vs(M));
    }, $ = (M) => {
      b || _(String(M)), o?.(M);
    }, S = (M) => {
      l || $(uv(N, M, a, c, f));
    }, C = (M) => {
      v(cv(M.target.value));
    }, A = (M) => {
      M.key === "ArrowUp" ? (M.preventDefault(), S(1)) : M.key === "ArrowDown" && (M.preventDefault(), S(-1)), h?.(M);
    }, z = (M) => {
      const E = Vs(N);
      E === null ? (b || _(""), o?.(null)) : $(Bl(dv(E, a, f), a, c)), g?.(M);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Wn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: y,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: l,
            onChange: C,
            onKeyDown: A,
            onBlur: z,
            className: [
              Wn.input,
              Wn[t],
              n ? Wn.invalid : null,
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
            className: [Wn.button, Wn.up].join(" "),
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
            className: [Wn.button, Wn.down].join(" "),
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
}, fv = [
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
function Ys(e) {
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
function _v({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function pv({ r: e, g: t, b: n }) {
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
function mv(e) {
  const t = Ys(e);
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
function sl({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const vO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = fv,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: x,
  onChange: g,
  onValueChange: h,
  onOpen: m,
  onClose: y
}) => {
  const p = oe(null), _ = oe(null), b = oe(null), N = oe(null), v = oe(null), $ = ot(), S = oe(null), C = Oe(
    () => mv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, z] = q(!1), [M, E] = q(null), w = M ?? C, k = Oe(() => pv(w), [w]), T = B(
    (Z) => {
      const I = sl(Z);
      g?.(I), h?.(I);
    },
    [g, h]
  ), R = B(
    (Z, I) => {
      E(Z), I && !i && T(Z);
    },
    [i, T]
  ), L = B(() => {
    z(!1), E(null), y?.(), _.current?.focus();
  }, [y]), j = B(() => {
    o || (E(C), z(!0), m?.());
  }, [o, C, m]), F = B(() => {
    A ? L() : j();
  }, [A, L, j]), X = B(
    (Z, I) => {
      const Y = b.current;
      if (!Y) return k;
      const Q = Y.getBoundingClientRect(), ge = on((Z - Q.left) / Q.width, 0, 1), ae = on(1 - (I - Q.top) / Q.height, 0, 1);
      return { h: k.h, s: ge, v: ae };
    },
    [k]
  ), ie = B(
    (Z, I) => {
      if (!I) return 0;
      const Y = I.getBoundingClientRect();
      return on((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "sat";
    const I = X(Z.clientX, Z.clientY);
    R({ ..._r(I), a: w.a }, !0);
  }, we = (Z) => {
    if (S.current !== "sat") return;
    Z.preventDefault();
    const I = X(Z.clientX, Z.clientY);
    R({ ..._r(I), a: w.a }, !0);
  }, le = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "hue";
    const I = ie(Z.clientX, N.current);
    R(
      { ..._r({ ...k, h: I * 360 }), a: w.a },
      !0
    );
  }, _e = (Z) => {
    if (S.current !== "hue") return;
    Z.preventDefault();
    const I = ie(Z.clientX, N.current);
    R(
      { ..._r({ ...k, h: I * 360 }), a: w.a },
      !0
    );
  }, K = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "alpha";
    const I = ie(Z.clientX, v.current);
    R({ ...w, a: I }, !0);
  }, he = (Z) => {
    if (S.current !== "alpha") return;
    Z.preventDefault();
    const I = ie(Z.clientX, v.current);
    R({ ...w, a: I }, !0);
  }, ue = () => {
    S.current = null;
  }, ye = B(
    (Z, I) => {
      const Y = {
        h: k.h,
        s: on(k.s + Z, 0, 1),
        v: on(k.v + I, 0, 1)
      };
      R({ ..._r(Y), a: w.a }, !0);
    },
    [k, w.a, R]
  ), pe = B(
    (Z) => {
      const I = (k.h + Z + 360) % 360;
      R({ ..._r({ ...k, h: I }), a: w.a }, !0);
    },
    [k, w.a, R]
  ), De = B(
    (Z) => {
      R({ ...w, a: on(w.a + Z, 0, 1) }, !0);
    },
    [w, R]
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
  }, $e = (Z, I) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), I === "hue" ? pe(-6) : De(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), I === "hue" ? pe(6) : De(0.05);
        break;
      case "Escape":
        Z.preventDefault(), L();
        break;
    }
  }, ne = (Z, I) => {
    if (Z === "hex") {
      const ae = Ys(I);
      ae && R({ ...ae, a: w.a }, !0);
      return;
    }
    const Y = I.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const ae = Y.includes(".") ? on(Q, 0, 1) : on(Q / 100, 0, 1);
      R({ ...w, a: ae }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    R(
      { ...w, [Z]: on(Q, 0, ge[Z]) },
      !0
    );
  }, Ae = () => {
    M && (T(M), E(null), z(!1), y?.(), _.current?.focus());
  };
  ve(() => {
    if (!A) return;
    const Z = (I) => {
      p.current && !p.current.contains(I.target) && L();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [A, L]), ve(() => {
    if (!A) return;
    const Z = (I) => {
      I.key === "Escape" && L();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [A, L]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = sl(w), Ge = _v(w), Je = { x: k.s * 100, y: (1 - k.v) * 100 }, At = k.h / 360 * 100, lt = w.a * 100, yt = /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: b,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(k.s * 100),
        "aria-valuetext": `Saturation ${Math.round(k.s * 100)}%, value ${Math.round(k.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: Re["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${k.h}, 100%, 50%)`
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
        "aria-valuenow": Math.round(k.h),
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
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${k.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => $e(Z, "alpha"),
        onPointerDown: K,
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
    n && /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
          const I = Ys(Z);
          i ? R({ ...I, a: w.a }, !1) : (E(null), T({ ...I, a: w.a }), z(!1), y?.(), _.current?.focus());
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
  return /* @__PURE__ */ D(
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
        /* @__PURE__ */ D(
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
}, hv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function gv(e, t) {
  const n = Yt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function Xs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, r - 1, l, i, d, o);
  return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== l ? null : { year: n, month: r, day: l, hour: i, minute: d, second: o };
}
function Kn() {
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
function is(e, t) {
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
function ol(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ll = {
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
}, bv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], yv = ["y", "M", "d", "H", "m", "s"];
function cs(e, t, n) {
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
    for (const a of bv)
      if (t.startsWith(a, i)) {
        l += ll[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[i];
    if (yv.includes(o)) {
      l += ll[o](e, r, n), i += 1;
      continue;
    }
    l += o, i += 1;
  }
  return l;
}
const xv = [
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
function vv(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const a of xv)
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
function Rr(e, t) {
  const n = Xs(e);
  return n || vv(e, t);
}
function wv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const kv = ["hour", "minute", "second"];
function ds(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const wO = st(
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
    locale: g = "en-US",
    onChange: h,
    onValueChange: m,
    onOpen: y,
    onClose: p,
    disabled: _,
    readOnly: b,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: S,
    tabIndex: C,
    className: A,
    onBlur: z,
    onKeyDown: M,
    ...E
  }, w) {
    const k = oe(null), T = oe(null), R = oe(null), L = oe(null), j = ot(), F = r !== void 0, [X, ie] = q(
      () => l != null ? cs(
        Rr(l, i) ?? Kn(),
        i,
        g
      ) : ""
    ), [te, we] = q(!1), [le, _e] = q(null), [K, he] = q(() => {
      const V = r !== void 0 ? r ?? "" : l ?? "";
      if (V) {
        const me = Rr(V, i);
        if (me) return me;
      }
      return Kn();
    }), ue = Oe(() => d ? Xs(d) : null, [d]), ye = Oe(() => o ? Xs(o) : null, [o]), pe = Oe(
      () => new Set(x ?? []),
      [x]
    ), De = Oe(() => {
      const V = F ? r ?? "" : X;
      return V ? Rr(V, i) : null;
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
        F || ie(V ? cs(V, i, g) : "");
        const me = V ? gv(V, a) : "";
        h?.(me), m?.(me);
      },
      [F, i, g, a, h, m]
    ), Ae = B(
      (V) => {
        T.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), p?.(), u || R.current?.focus();
    }, [u, p]), Fe = B(() => {
      if (_) return;
      const V = De ?? Kn();
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
          const Ye = Ve ?? De ?? Kn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + me));
          return { ...Ye, [V]: Xe };
        });
      },
      [De]
    ), yt = B(
      (V, me) => {
        const Ve = me.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? De ?? Kn(), [V]: Math.min(Pt, Ye) }));
      },
      [De]
    ), Z = B(() => {
      le && (ne(le), fe());
    }, [le, ne, fe]), I = B(() => {
      if (te) return;
      const V = Rr(X, i);
      ne(V ? wv(V, ue, ye) : null);
    }, [te, X, i, ue, ye, ne]), Y = (V) => {
      const me = V.target.value;
      F || ie(me), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? le && (ne(le), fe()) : I()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), M?.(V);
    }, ge = (V) => {
      I(), z?.(V);
    }, ae = (V) => {
      let me = null;
      switch (V.key) {
        case "ArrowLeft":
          me = In(K, -1), V.preventDefault();
          break;
        case "ArrowRight":
          me = In(K, 1), V.preventDefault();
          break;
        case "ArrowUp":
          me = In(K, -7), V.preventDefault();
          break;
        case "ArrowDown":
          me = In(K, 7), V.preventDefault();
          break;
        case "Home":
          me = In(K, -ol(K)), V.preventDefault();
          break;
        case "End":
          me = In(K, 6 - ol(K)), V.preventDefault();
          break;
        case "PageUp":
          me = is(K, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          me = is(K, V.shiftKey ? 12 : 1), V.preventDefault();
          break;
        case "Enter":
        case " ":
          V.preventDefault(), At(K);
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
        k.current && !k.current.contains(me.target) && fe();
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
      F || ie(""), h?.(""), m?.(""), T.current?.focus();
    }, je = te && le ? cs(le, i, g) : F ? r ? cs(
      Rr(r, i) ?? Kn(),
      i,
      g
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: K.year, month: K.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), re = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < hv; V += 1)
      Le.push(In(re, V - Xt));
    const Nt = le ? Yt(le) : De ? Yt(De) : null, Rt = Yt(Kn()), xt = `${nt.year}-${ln(nt.month)}`, Ie = Oe(
      () => new Intl.DateTimeFormat(g, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [g]
    ), We = new Intl.DateTimeFormat(g, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, me) => new Intl.DateTimeFormat(g, { weekday: "short" }).format(
        new Date(2021, 0, 3 + me)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], at = /* @__PURE__ */ D(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const V = $e(is(K, -1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ s(Me, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-title"], children: We }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const V = $e(is(K, 1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ s(Me, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
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
                          tabIndex: Ye === Yt(K) ? 0 : -1,
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
          a && /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time"], children: [
            kv.map((V) => /* @__PURE__ */ D("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-time-label"], children: ds(V) }),
              /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": ds(V),
                    value: ln(
                      (le ?? De ?? Kn())[V]
                    ),
                    onChange: (me) => yt(V, me.target.value),
                    onKeyDown: (me) => {
                      me.key === "ArrowUp" ? (me.preventDefault(), lt(V, 1)) : me.key === "ArrowDown" ? (me.preventDefault(), lt(V, -1)) : me.key === "Enter" && (me.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${ds(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${ds(V).toLowerCase()}`,
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
    return /* @__PURE__ */ D(
      "div",
      {
        ref: k,
        className: [
          Ue["dx-datepicker"],
          u ? Ue["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: b,
                placeholder: N,
                tabIndex: C,
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
                ...E
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
                ref: R,
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
}, kO = ({
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
  const [u, x] = q(e), g = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), h = B(
    (_) => {
      c?.(_), f?.(_);
    },
    [c, f]
  ), m = B(
    (_) => {
      n || r || (h(_), x(_));
    },
    [n, r, h]
  ), y = (_) => {
    if (n || r) return;
    const b = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), m(g(b + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), m(g(b - 1));
        break;
      case "Home":
        _.preventDefault(), m(1);
        break;
      case "End":
        _.preventDefault(), m(t);
        break;
    }
  }, p = Array.from({ length: t }, (_, b) => b + 1);
  return /* @__PURE__ */ D(
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
      onKeyDown: y,
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
          const b = _ <= e, N = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": b,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: N ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Gn["dx-rating-item"],
                b ? Gn["dx-rating-item-filled"] : null
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
const NO = ({
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
  className: g,
  onChange: h,
  onInput: m,
  onValueChange: y,
  onInputChange: p
}) => {
  const _ = oe(null), b = oe(
    null
  ), [N, v] = q(null), $ = N ?? e, S = Oe(
    () => Sn($, r, l),
    [$, r, l]
  ), C = Oe(
    () => Sn(d ? t : S, r, l),
    [d, t, S, r, l]
  ), A = Oe(
    () => Sn(d ? Math.max(n, C) : S, r, l),
    [d, n, C, S, r, l]
  ), z = B(
    (K) => {
      const he = l - r;
      return he <= 0 ? 0 : (Sn(K, r, l) - r) / he * 100;
    },
    [r, l]
  ), M = B(
    (K, he) => {
      const ue = _.current;
      if (!ue) return r;
      const ye = ue.getBoundingClientRect();
      let pe;
      o === "vertical" ? pe = 1 - (he - ye.top) / ye.height : pe = (K - ye.left) / ye.width;
      const De = r + Sn(pe, 0, 1) * (l - r);
      return i > 0 ? Sn(Math.round(De / i) * i, r, l) : Sn(De, r, l);
    },
    [r, l, i, o]
  ), E = B(
    (K) => {
      typeof K == "number" && v(K), h?.(K), y?.(K);
    },
    [h, y]
  ), w = B(
    (K) => {
      typeof K == "number" && v(K), m?.(K), p?.(K);
    },
    [m, p]
  ), k = B(
    (K, he, ue) => {
      const ye = M(he, ue);
      let pe;
      d ? K === "min" ? pe = { min: Math.min(ye, A), max: A } : pe = { min: C, max: Math.max(ye, C) } : pe = ye, w(pe), b.current === null && E(pe);
    },
    [d, M, C, A, w, E]
  ), T = B(
    (K, he) => {
      const ue = (i > 0 ? i : 1) * he;
      let ye;
      d ? K === "min" ? ye = {
        min: Sn(C + ue, r, A),
        max: A
      } : ye = {
        min: C,
        max: Sn(A + ue, C, l)
      } : ye = Sn(S + ue, r, l), E(ye);
    },
    [d, i, r, l, C, A, S, E]
  ), R = (K, he) => {
    if (!a)
      switch (he.key) {
        case "ArrowLeft":
        case "ArrowDown":
          he.preventDefault(), T(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          he.preventDefault(), T(K, 1);
          break;
        case "Home":
          he.preventDefault(), E(d ? K === "min" ? { min: r, max: A } : { min: C, max: C } : r);
          break;
        case "End":
          he.preventDefault(), E(d ? K === "min" ? { min: A, max: A } : { min: C, max: l } : l);
          break;
      }
  }, L = (K, he) => {
    a || (he.preventDefault(), he.currentTarget.focus(), typeof he.currentTarget.setPointerCapture == "function" && he.currentTarget.setPointerCapture(he.pointerId), b.current = { key: K, pointerId: he.pointerId }, k(K, he.clientX, he.clientY));
  }, j = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (K.preventDefault(), k(b.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (b.current = null, K.preventDefault(), E(d ? { min: C, max: A } : S));
  }, [X, ie] = q(null), te = z(C), we = z(A), le = d ? te : 0, _e = we;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Qn["dx-slider"],
        o === "vertical" ? Qn["dx-slider-vertical"] : null,
        a ? Qn["dx-slider-disabled"] : null,
        g
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: _, className: Qn["dx-slider-track"], children: [
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
            "aria-valuenow": Math.round(C),
            "aria-orientation": o,
            "aria-label": d ? f : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && X === "max" ? -1 : x,
            className: Qn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (K) => R("min", K),
            onPointerDown: (K) => L("min", K),
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
            onKeyDown: (K) => R("max", K),
            onPointerDown: (K) => L("max", K),
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
}, Nv = "-10675199.02:48:05.4775808", Sv = "10675199.02:48:05.4775808", Ln = 86400, Rn = 3600, xn = 60, Ps = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, al = {
  days: Ln,
  hours: Rn,
  minutes: xn,
  seconds: 1
}, Ov = {
  day: Ln,
  hour: Rn,
  minute: xn,
  second: 1
};
function pr(e) {
  return String(e).padStart(2, "0");
}
function qr(e) {
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
function $v(e) {
  return e.days * Ln + e.hours * Rn + e.minutes * xn + e.seconds;
}
function il(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Ln);
  t %= Ln;
  const r = Math.floor(t / Rn);
  t %= Rn;
  const l = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Zs(e, t) {
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
function cl(e, t = "second") {
  const n = qr(e);
  return n === null ? "" : Zs(n, t);
}
function js(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const SO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = Nv,
    max: d = Sv,
    step: o = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: x = !0,
    allowClear: g = !1,
    inline: h = !1,
    onChange: m,
    onValueChange: y,
    onOpen: p,
    onClose: _,
    disabled: b,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: S,
    tabIndex: C,
    className: A,
    onBlur: z,
    onKeyDown: M,
    ...E
  }, w) {
    const k = oe(null), T = oe(null), R = oe(null), L = ot(), j = r !== void 0, [F, X] = q(
      () => l != null ? cl(l, a) : ""
    ), [ie, te] = q(!1), [we, le] = q(null), [_e, K] = q(null), he = Oe(
      () => qr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => qr(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ye = Oe(() => {
      const re = Number.parseFloat(o);
      return Number.isNaN(re) || re <= 0 ? 1 : re;
    }, [o]), pe = Oe(() => {
      const re = j ? r ?? "" : F;
      return re ? qr(re) : null;
    }, [r, F, j]), De = B(
      (re) => {
        const Le = re === null ? "" : Zs(re, a);
        j || X(Le), m?.(Le), y?.(Le);
      },
      [j, a, m, y]
    ), G = B(
      (re) => {
        re && we !== null && De(we), te(!1), le(null), K(null), _?.(), h || R.current?.focus();
      },
      [h, we, De, _]
    ), $e = B(() => {
      b || (le(pe ?? 0), te(!0), p?.());
    }, [b, pe, p]), ne = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (re, Le) => {
        le((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * ye * al[re];
          return js(xt, he, ue);
        });
      },
      [pe, ye, he, ue]
    ), fe = B(
      (re) => {
        const Le = _e?.[re];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        le((xt) => {
          const Ie = xt ?? pe ?? 0, We = il(Ie);
          We[re] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * $v(We);
          return js($t, he, ue);
        }), K(null);
      },
      [_e, pe, he, ue]
    ), Fe = (re, Le) => {
      K((Nt) => ({ ...Nt ?? {}, [re]: Le }));
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
      const re = qr(F);
      De(re !== null ? js(re, he, ue) : null);
    }, [ie, F, he, ue, De]), At = (re) => {
      j || X(re.target.value);
    }, lt = (re) => {
      re.key === "Enter" ? (re.preventDefault(), ie ? G(!0) : Je()) : re.key === "Escape" && ie ? (re.preventDefault(), G(!1)) : re.key === "ArrowDown" && !ie ? (re.preventDefault(), $e()) : re.key === "Tab" && ie && te(!1), M?.(re);
    }, yt = (re) => {
      Je(), z?.(re);
    }, Z = () => {
      j || X(""), m?.(""), y?.(""), T.current?.focus();
    };
    ve(() => {
      if (!ie) return;
      const re = (Le) => {
        k.current && !k.current.contains(Le.target) && G(!1);
      };
      return document.addEventListener("mousedown", re), () => document.removeEventListener("mousedown", re);
    }, [ie, G]), ve(() => {
      if (!ie) return;
      const re = (Le) => {
        Le.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
    }, [ie, G]), ve(() => {
      if (h && we !== null) {
        const re = pe;
        (re === null || Math.abs(we - re) > 1e-9) && De(we);
      }
    }, [h, we, pe, De]);
    const I = B(
      (re) => {
        T.current = re, typeof w == "function" ? w(re) : w && (w.current = re);
      },
      [w]
    ), Y = j ? r ? cl(r, a) : "" : F, Q = j ? !!r : F.length > 0, ge = h || ie, ae = we ?? pe ?? 0, Ee = il(ae), je = Ov[a], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (re) => al[re] >= je && (re === "days" ? c : re === "hours" ? f : re === "minutes" ? u : x)
    ), nt = t === "xs" ? dt["dx-timespanpicker-input--xs"] : t === "sm" ? dt["dx-timespanpicker-input--sm"] : t === "lg" ? dt["dx-timespanpicker-input--lg"] : t === "xl" ? dt["dx-timespanpicker-input--xl"] : dt["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ D("div", { className: dt["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-preview"], "aria-live": "polite", children: Zs(ae, a) }),
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-units"], children: Qe.map((re) => /* @__PURE__ */ D("label", { className: dt["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: dt["dx-timespanpicker-unit-label"], children: Ps[re] }),
        /* @__PURE__ */ D("span", { className: dt["dx-timespanpicker-unit-control"], children: [
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
          /* @__PURE__ */ D("span", { className: dt["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ps[re].toLowerCase()}`,
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
                "aria-label": `Decrease ${Ps[re].toLowerCase()}`,
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
    return /* @__PURE__ */ D(
      "div",
      {
        ref: k,
        className: [
          dt["dx-timespanpicker"],
          h ? dt["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !h && /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: I,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: b,
                placeholder: N,
                tabIndex: C,
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
                ...E
              }
            ),
            g && !b && Q && /* @__PURE__ */ s(
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
                ref: R,
                type: "button",
                className: [dt["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": L,
                disabled: b,
                onClick: ne,
                children: /* @__PURE__ */ s(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ s(
            "div",
            {
              id: L,
              role: h ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: h ? void 0 : dt["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), Ev = "_wrapper_ou9x5_1", Tv = "_cells_ou9x5_8", Cv = "_cell_ou9x5_8", Av = "_invalid_ou9x5_63", Dv = "_live_ou9x5_73", er = {
  wrapper: Ev,
  cells: Tv,
  cell: Cv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Av,
  live: Dv
};
function dl(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const OO = st(
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
  }, g) {
    const h = ot(), m = n !== void 0, [y, p] = q(dl(r).join("")), _ = m ? dl(n).join("") : y, b = Array.from({ length: t }, (E, w) => _[w] ?? ""), N = oe([]), [v, $] = q(""), S = (E) => {
      m || p(E), l?.(E);
    }, C = (E) => {
      const w = N.current[E];
      w && !w.disabled && (w.focus(), w.select());
    }, A = (E, w) => {
      const k = w.replace(/\D/g, "").slice(-1), T = _.split("");
      if (k) {
        T[E] = k;
        const R = T.join("").slice(0, t);
        S(R), R.length < t ? C(E + 1) : f && $("Code complete");
      }
    }, z = (E, w) => {
      if (w.key === "Backspace") {
        if (w.preventDefault(), _[E]) {
          const k = _.split("");
          k[E] = "", S(k.join(""));
        } else if (E > 0) {
          const k = _.split("");
          k[E - 1] = "", S(k.join("")), C(E - 1);
        }
      } else w.key === "ArrowLeft" && E > 0 ? (w.preventDefault(), C(E - 1)) : w.key === "ArrowRight" && E < t - 1 ? (w.preventDefault(), C(E + 1)) : w.key === "Home" ? (w.preventDefault(), C(0)) : w.key === "End" && (w.preventDefault(), C(t - 1));
    }, M = (E, w) => {
      w.preventDefault();
      const k = w.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const T = _.split("");
      let R = 0;
      for (let j = 0; j < k.length && E + j < t; j++)
        T[E + j] = k[j] ?? "", R++;
      const L = T.join("");
      S(L), L.length >= t ? f && $("Code complete") : C(E + R);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [er.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [er.cells, er[d]].join(" "), children: b.map((E, w) => /* @__PURE__ */ s(
            "input",
            {
              ref: (k) => {
                N.current[w] = k, w === 0 && g && (typeof g == "function" ? g(k) : g.current = k);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: E,
              disabled: a,
              "aria-label": `Digit ${w + 1} of ${t}`,
              "aria-invalid": i && E !== "" ? !0 : void 0,
              autoFocus: o && w === 0,
              className: [
                er.cell,
                er[`cell-${d}`],
                i ? er.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (k) => A(w, k.target.value),
              onKeyDown: (k) => z(w, k),
              onPaste: (k) => M(w, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                f && $("");
              }
            },
            w
          )) }),
          f && /* @__PURE__ */ s(
            "span",
            {
              id: `${h}-live`,
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
), Mv = "_wrapper_6lcd5_1", Iv = "_header_6lcd5_7", zv = "_label_6lcd5_15", Lv = "_clear_6lcd5_22", Rv = "_canvas_6lcd5_53", Pv = "_disabled_6lcd5_69", mr = {
  wrapper: Mv,
  header: Iv,
  label: zv,
  clear: Lv,
  canvas: Rv,
  disabled: Pv
}, $O = st(
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
    const g = oe(null), h = oe(!1), m = oe(!1), y = oe({ x: 0, y: 0 });
    ve(() => {
      const S = g.current;
      if (!S) return;
      const C = window.devicePixelRatio || 1, A = Math.round((a ?? S.clientWidth) * C), z = Math.round(c * C);
      (S.width !== A || S.height !== z) && (S.width = A, S.height = z);
      const M = S.getContext("2d");
      if (!M) return;
      M.setTransform(C, 0, 0, C, 0, 0), M.lineWidth = i, M.strokeStyle = l, M.lineCap = "round", M.lineJoin = "round";
      const E = t ?? n;
      if (E) {
        const w = new Image();
        w.onload = () => {
          M.drawImage(w, 0, 0, S.clientWidth, c);
        }, w.src = E;
      }
    }, [t, n, l, i, a, c]);
    const p = () => {
      const S = g.current;
      if (!S) return;
      const C = S.toDataURL("image/png");
      r?.(C);
    }, _ = () => {
      const S = g.current;
      if (!S) return;
      const C = S.getContext("2d");
      C && C.clearRect(0, 0, S.width, S.height), r?.("");
    };
    xs(x, () => ({
      clear: _,
      toDataURL: (S = "image/png", C) => g.current?.toDataURL(S, C) ?? ""
    }));
    const b = (S) => {
      const C = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - C.left, y: S.clientY - C.top };
    }, N = (S) => {
      f || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), h.current = !0, m.current = !1, y.current = b(S));
    }, v = (S) => {
      if (!h.current) return;
      S.preventDefault();
      const C = S.currentTarget.getContext("2d");
      if (!C) return;
      const A = b(S);
      C.beginPath(), C.moveTo(y.current.x, y.current.y), C.lineTo(A.x, A.y), C.stroke(), y.current = A, m.current = !0;
    }, $ = (S) => {
      h.current && (S.preventDefault(), h.current = !1, m.current && p());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          mr.wrapper,
          u,
          f ? mr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: mr.header, children: [
            /* @__PURE__ */ s("span", { className: mr.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: mr.clear,
                onClick: _,
                disabled: f,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: g,
              role: "img",
              "aria-label": o,
              "aria-disabled": f || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${c}px`
              },
              className: mr.canvas,
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
), jv = "_wrapper_dsvd2_1", Bv = "_trigger_dsvd2_7", Fv = "_list_dsvd2_35", Hv = "_row_dsvd2_44", Uv = "_name_dsvd2_59", qv = "_size_dsvd2_68", Wv = "_progress_dsvd2_74", Kv = "_fill_dsvd2_82", Gv = "_status_dsvd2_99", Vv = "_remove_dsvd2_106", On = {
  wrapper: jv,
  trigger: Bv,
  list: Fv,
  row: Hv,
  name: Uv,
  size: qv,
  progress: Wv,
  fill: Kv,
  status: Gv,
  remove: Vv
};
function ul(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const EO = st(function({
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
  onError: g
}, h) {
  const m = oe(null), [y, p] = q([]), _ = oe(/* @__PURE__ */ new Map()), b = (C, A) => {
    p(
      (z) => z.map((M) => M.file.name === C ? { ...M, ...A } : M)
    );
  }, N = (C) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    _.current.set(C.file.name, A);
    const z = new FormData();
    if (z.append(r, C.file), A.upload.addEventListener("progress", (M) => {
      if (!M.lengthComputable) return;
      const E = Math.round(M.loaded / M.total * 100);
      b(C.file.name, { state: "uploading", progress: E }), u?.(C.file.name, E);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (b(C.file.name, { state: "complete", progress: 100 }), x?.(C.file.name)) : (b(C.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), g?.(C.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      b(C.file.name, { state: "error", message: "Network error" }), g?.(C.file.name, "Network error");
    }), i)
      for (const [M, E] of Object.entries(i))
        A.setRequestHeader(M, E);
    A.open("POST", t), A.send(z), b(C.file.name, { state: "uploading", progress: 0 });
  }, v = (C) => {
    if (!C) return;
    const A = [...C], z = [];
    let M = Math.max(0, o - y.length);
    for (const w of A) {
      if (a != null && w.size > a) {
        g?.(
          w.name,
          `File too large (maximum ${ul(a)})`
        );
        continue;
      }
      if (M <= 0) {
        g?.(w.name, `Too many files (maximum ${o})`);
        continue;
      }
      M -= 1, z.push(w);
    }
    const E = z.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    p((w) => [...w, ...E]), m.current && (m.current.value = ""), l && E.forEach(N);
  }, $ = (C) => {
    _.current.get(C)?.abort(), _.current.delete(C), p((z) => z.filter((M) => M.file.name !== C));
  }, S = f ?? /* @__PURE__ */ D(
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
  return xs(h, () => ({
    open: () => m.current?.click(),
    upload: () => y.forEach((C) => C.state === "pending" ? N(C) : null)
  })), /* @__PURE__ */ D("div", { className: On.wrapper, children: [
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
        onChange: (C) => v(C.target.files)
      }
    ),
    !f && y.length > 0 && /* @__PURE__ */ s("ul", { className: On.list, children: y.map(({ file: C, state: A, progress: z, message: M }) => /* @__PURE__ */ D(
      "li",
      {
        className: On.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: On.name, children: C.name }),
          /* @__PURE__ */ s("span", { className: On.size, children: ul(C.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${C.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": z,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: On.fill,
                  style: { width: `${z}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: On.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? M ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${C.name}`,
              onClick: () => $(C.name),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      C.name
    )) })
  ] });
}), Yv = "_zone_nl0bz_1", Xv = "_dragging_nl0bz_23", Zv = "_caption_nl0bz_28", Jv = "_browse_nl0bz_40", Qv = "_disabled_nl0bz_67", Pr = {
  zone: Yv,
  dragging: Xv,
  caption: Zv,
  browse: Jv,
  disabled: Qv
};
function e2(e, t) {
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
const TO = st(
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
    const f = oe(null), [u, x] = q(!1), g = (_) => {
      if (!_ || _.length === 0) return;
      const b = [..._].filter((N) => e2(N, t ?? ""));
      b.length !== 0 && r?.(b);
    }, h = (_) => {
      o || (_.preventDefault(), x(!0));
    }, m = (_) => {
      o || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", x(!0));
    }, y = (_) => {
      o || _.currentTarget.contains(_.relatedTarget) || x(!1);
    }, p = (_) => {
      o || (_.preventDefault(), x(!1), g(_.dataTransfer.files));
    };
    return xs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": o || void 0,
        className: [
          Pr.zone,
          u ? Pr.dragging : null,
          o ? Pr.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: h,
        onDragOver: m,
        onDragLeave: y,
        onDrop: p,
        children: [
          /* @__PURE__ */ s("p", { className: Pr.caption, children: u ? i : l }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Pr.browse,
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
                g(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), t2 = "_root_1a92d_1", n2 = "_menubar_1a92d_5", r2 = "_horizontal_1a92d_15", s2 = "_vertical_1a92d_20", o2 = "_itemWrapper_1a92d_25", l2 = "_item_1a92d_25", a2 = "_disabled_1a92d_61", i2 = "_icon_1a92d_68", c2 = "_text_1a92d_75", d2 = "_caret_1a92d_79", u2 = "_hasChildren_1a92d_85", f2 = "_submenu_1a92d_94", _2 = "_submenuItem_1a92d_118", p2 = "_flyout_1a92d_155", m2 = "_hamburger_1a92d_175", h2 = "_responsive_1a92d_198", g2 = "_mobileOpen_1a92d_207", _t = {
  root: t2,
  menubar: n2,
  horizontal: r2,
  vertical: s2,
  itemWrapper: o2,
  item: l2,
  disabled: a2,
  icon: i2,
  text: c2,
  caret: d2,
  hasChildren: u2,
  submenu: f2,
  submenuItem: _2,
  flyout: p2,
  hamburger: m2,
  responsive: h2,
  mobileOpen: g2
}, gs = lr(null);
function b2(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function y2(e, t, n, r, l) {
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
function x2({
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
function Fl(e) {
  return qt(e) && e.type === Hl;
}
function lo({
  itemKey: e,
  props: t
}) {
  const n = Pn(gs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: o } = t, a = Oe(
    () => Gr.toArray(t.children).filter(qt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [x, g] = y2(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), h = n.level === 0, m = oe(0), p = (h && !u ? n.openKey === e : null) ?? x, _ = B(
    (R) => {
      h && !u ? n.setOpenKey(R ? e : null) : (g(R), h && n.setOpenKey(null));
    },
    [h, u, n, e, g]
  ), [, b] = q(0);
  ve(() => {
    if (!i) return;
    const R = () => b((L) => L + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const N = i && !c ? b2(i, t.match) : !1, v = B(
    (R) => {
      if (f) {
        R.preventDefault();
        return;
      }
      const L = { text: r, value: l, path: i };
      [n.emit(L), t.onClick?.(L)].includes(!1) && R.preventDefault(), n.closeAll();
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
  }, [c, f, n.clickToOpen, _]), C = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), A = `${n.baseId}-submenu-${e}`, [z, M] = q(null);
  ve(() => {
    n.closeSignal > 0 && M(null);
  }, [n.closeSignal]);
  const E = Oe(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: z,
      setOpenKey: M
    }),
    [n, z]
  ), w = c ? /* @__PURE__ */ s("span", { className: _t.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    Me,
    {
      icon: n.flyout && !h ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, k = o ?? /* @__PURE__ */ D(pt, { children: [
    /* @__PURE__ */ s(
      x2,
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
    let R = function(L) {
      const j = Array.from(L.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      L.key === "ArrowDown" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : L.key === "ArrowUp" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : L.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), L.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (L.key === "ArrowLeft" || L.key === "Escape") && (L.preventDefault(), L.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: _t.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : S,
        onMouseLeave: n.clickToOpen ? void 0 : C,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": h ? "true" : void 0,
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
              children: k
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
                n.flyout && !h ? _t.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: R,
              children: /* @__PURE__ */ s(gs.Provider, { value: E, children: a.map(
                (L, j) => Fl(L) ? /* @__PURE__ */ s(
                  lo,
                  {
                    itemKey: `${e}-${j}`,
                    props: L.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(eo, { children: L }, `${e}-custom-${j}`)
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
    "aria-current": N ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [_t.submenuItem, f ? _t.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return i && !f ? /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: i, target: t.target, ...T, children: k }) }) : /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: f, ...T, children: k }) });
}
function Hl(e) {
  if (!Pn(gs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(lo, { itemKey: e.text, props: e });
}
function v2({
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
  const u = ot(), x = oe(null), g = oe(null), [h, m] = q(null), [y, p] = q(0), [_, b] = q(!1), N = oe(null), v = B(
    (z) => i?.(z),
    [i]
  ), $ = B(() => {
    m(null), p((z) => z + 1);
  }, []);
  ve(() => {
    if (h == null) return;
    const z = (M) => {
      x.current && !x.current.contains(M.target) && $();
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [h, $]), ve(() => {
    N.current != null && h === N.current && (document.getElementById(`${u}-submenu-${h}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [h, u]);
  const S = Oe(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: v,
      closeAll: $,
      openKey: h,
      setOpenKey: m
    }),
    [u, n, t, y, v, $, h]
  ), C = Oe(
    () => Gr.toArray(e).filter(qt),
    [e]
  ), A = (z) => {
    const M = g.current;
    if (!M) return;
    const E = Array.from(M.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (h != null) {
      const T = document.getElementById(`${u}-submenu-${h}`);
      if (T) {
        const R = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), L = document.activeElement, j = L ? R.indexOf(L) : -1;
        if (z.key === "ArrowDown") {
          z.preventDefault(), (j === -1 ? R[0] : R[(j + 1) % R.length])?.focus();
          return;
        }
        if (z.key === "ArrowUp") {
          z.preventDefault(), (j === -1 ? R[R.length - 1] : R[(j - 1 + R.length) % R.length])?.focus();
          return;
        }
        if (z.key === "Escape") {
          z.preventDefault(), $(), d?.(), M.querySelector(`[data-index="${h}"]`)?.focus();
          return;
        }
        if (z.key === "Enter" || z.key === " ") return;
      }
      if (z.key === "Escape") {
        z.preventDefault(), $(), d?.();
        return;
      }
    }
    const w = document.activeElement, k = w ? E.indexOf(w) : -1;
    if (z.key === "ArrowRight") {
      if (z.preventDefault(), E.length === 0) return;
      E[k === -1 ? 0 : (k + 1) % E.length]?.focus();
      return;
    }
    if (z.key === "ArrowLeft") {
      if (z.preventDefault(), E.length === 0) return;
      E[k === -1 ? E.length - 1 : (k - 1 + E.length) % E.length]?.focus();
      return;
    }
    if (z.key === "ArrowDown") {
      if (k >= 0) {
        const T = w?.getAttribute("data-index");
        if (T == null) return;
        M.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (z.preventDefault(), N.current = T, m(T));
      }
      return;
    }
    if (z.key === "Home") {
      z.preventDefault(), E[0]?.focus();
      return;
    }
    if (z.key === "End") {
      z.preventDefault(), E[E.length - 1]?.focus();
      return;
    }
    if (z.key.length === 1 && !z.ctrlKey && !z.metaKey) {
      const T = E.map((L) => L.textContent ?? ""), R = k === -1 ? 0 : (k + 1) % E.length;
      for (let L = 0; L < E.length; L++) {
        const j = (R + L) % E.length;
        if (T[j]?.toLowerCase().startsWith(z.key.toLowerCase())) {
          z.preventDefault(), E[j]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
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
            onClick: () => b((z) => !z),
            children: /* @__PURE__ */ s(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: g,
            role: l ? "menu" : "menubar",
            "aria-label": o,
            className: _t.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ s(gs.Provider, { value: S, children: C.map(
              (z, M) => Fl(z) ? /* @__PURE__ */ s(
                lo,
                {
                  itemKey: String(M),
                  props: z.props
                },
                `top-${M}`
              ) : /* @__PURE__ */ s(eo, { children: z }, `top-custom-${M}`)
            ) })
          }
        )
      ]
    }
  );
}
const w2 = "_popup_uiejp_1", k2 = "_menu_uiejp_22", Js = {
  popup: w2,
  menu: k2
}, Ul = lr(null);
function CO() {
  const e = Pn(Ul);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function ql(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ s(Hl, { ...l, children: r ? ql(r) : void 0 }, `${t.text}-${n}`);
  });
}
function N2({ state: e, onClose: t }) {
  const n = oe(null), [r, l] = q({ left: e.x, top: e.y });
  Bs(() => {
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
      className: Js.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: Js.menu, children: e.options.content ?? /* @__PURE__ */ s(
        v2,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: ql(e.options.items ?? [])
        }
      ) })
    }
  );
}
function AO({ children: e }) {
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
      const u = document.querySelector(`.${Js.popup}`);
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
  return /* @__PURE__ */ D(Ul.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ s(N2, { state: t, onClose: r }) : null
  ] });
}
const S2 = "_root_rgcia_1", O2 = "_list_rgcia_9", $2 = "_item_rgcia_14", E2 = "_trigger_rgcia_18", T2 = "_disabled_rgcia_45", C2 = "_expanded_rgcia_52", A2 = "_selected_rgcia_56", D2 = "_icon_rgcia_61", M2 = "_text_rgcia_72", I2 = "_caret_rgcia_79", z2 = "_open_rgcia_86", L2 = "_submenu_rgcia_90", R2 = "_iconOnly_rgcia_172", P2 = "_stacked_rgcia_201", Lt = {
  root: S2,
  list: O2,
  item: $2,
  trigger: E2,
  disabled: T2,
  expanded: C2,
  selected: A2,
  icon: D2,
  text: M2,
  caret: I2,
  open: z2,
  submenu: L2,
  iconOnly: R2,
  stacked: P2
}, bs = lr(null);
function j2() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function B2(e, t) {
  const n = j2(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function F2({
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
function ao({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Pn(bs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: o } = n, a = Oe(
    () => Gr.toArray(n.children).filter(qt),
    [n.children]
  ), c = a.length > 0, f = !!o, u = n.match ?? r.match, x = n.expanded !== void 0, [g, h] = q(
    n.defaultExpanded ?? !1
  ), m = x ? n.expanded ?? !1 : g, y = B(
    (F) => {
      x || h(F), n.onExpandedChange?.(F);
    },
    [x, n]
  );
  ve(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && y(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, b] = q(
    n.defaultSelected ?? !1
  ), N = !p && d ? B2(d, u) : !1, v = n.selected ?? (p ? _ : N || _), [, $] = q(0);
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
        y(!0), r.openAncestors();
      }
    }),
    [r, y]
  );
  ve(() => {
    N && t.length > 0 && S.openAncestors();
  }, []);
  const C = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const X = { text: l, value: i, path: d };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), p || b(!0), n.onSelectedChange?.(!0);
    },
    [f, l, i, d, r, n, p]
  ), A = B(() => {
    f || (m || r.notifyOpened(e, t), y(!m));
  }, [f, m, r, e, t, y]), z = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? A() : F.target.click()) : F.key === "Escape" && m ? (F.preventDefault(), y(!1)) : F.key === "ArrowRight" && c && !m ? (F.preventDefault(), r.notifyOpened(e, t), y(!0)) : F.key === "ArrowLeft" && m && (F.preventDefault(), y(!1));
    },
    [c, A, m, y, r, e, t]
  ), M = c && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [Lt.caret, m ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, E = n.template ?? /* @__PURE__ */ D(pt, { children: [
    /* @__PURE__ */ s(
      F2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: Lt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: Lt.text, children: l }),
    M
  ] }), w = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, T = [
    Lt.trigger,
    f ? Lt.disabled : null,
    m ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), R = r.level > 0 ? "menuitem" : void 0, L = c ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: k,
      role: R,
      "aria-expanded": m,
      "aria-controls": w,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: A,
      onKeyDown: z,
      children: E
    }
  ) : d && !f ? /* @__PURE__ */ s(
    "a",
    {
      id: k,
      role: R,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: C,
      onKeyDown: z,
      children: E
    }
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: k,
      role: R,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: C,
      onKeyDown: z,
      children: E
    }
  ), j = c ? r.renderMode === "server" && !m ? null : /* @__PURE__ */ s(
    "div",
    {
      id: w,
      role: "menu",
      "aria-labelledby": k,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ s(bs.Provider, { value: S, children: a.map((F, X) => /* @__PURE__ */ s(
        ao,
        {
          itemKey: `${e}-${X}`,
          ancestors: [...t, e],
          props: F.props
        },
        `${e}-${X}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ D(
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
function DO(e) {
  if (!Pn(bs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(ao, { itemKey: e.text, ancestors: [], props: e });
}
function MO({
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
  const f = ot(), [u, x] = q(0), g = oe(/* @__PURE__ */ new Set()), h = B(
    (N) => d?.(N),
    [d]
  ), m = B(
    (N, v) => {
      t || (g.current = /* @__PURE__ */ new Set([N, ...v]), x(($) => $ + 1));
    },
    [t]
  ), y = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, $ = y(N.currentTarget), S = $.indexOf(v);
        if (S === -1) return;
        N.preventDefault();
        const C = N.key === "ArrowDown" ? 1 : -1;
        $[(S + C + $.length) % $.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = y(N.currentTarget);
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
      collapseSkipRef: g,
      emit: h,
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
      h,
      m
    ]
  ), b = Oe(
    () => Gr.toArray(e).filter(qt),
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
      children: /* @__PURE__ */ s("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ s(bs.Provider, { value: _, children: b.map((N, v) => /* @__PURE__ */ s(
        ao,
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
const H2 = "_root_5numg_1", U2 = "_trigger_5numg_7", q2 = "_defaultTrigger_5numg_40", W2 = "_avatar_5numg_46", K2 = "_menu_5numg_58", G2 = "_item_5numg_74", V2 = "_disabled_5numg_88", Y2 = "_active_5numg_97", X2 = "_icon_5numg_107", Z2 = "_text_5numg_114", $n = {
  root: H2,
  trigger: U2,
  defaultTrigger: q2,
  avatar: W2,
  menu: K2,
  item: G2,
  disabled: V2,
  active: Y2,
  icon: X2,
  text: Z2
};
function IO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = ot(), d = `${i}-menu`, o = oe(null), a = oe(null), [c, f] = q(!1), [u, x] = q(-1), g = t, h = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), m = B(
    (v) => {
      if (v.disabled) return;
      const $ = {
        text: v.text,
        path: v.path
      };
      n?.($), f(!1), a.current?.focus();
    },
    [n]
  ), y = B(() => {
    x(h[0] ?? -1), f(!0);
  }, [h]), p = B(() => {
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
    if (h.length === 0) return;
    const $ = h.indexOf(u), S = $ === -1 ? 0 : ($ + v + h.length) % h.length, C = h[S];
    C != null && x(C);
  }, b = (v) => {
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
        v.preventDefault(), h[0] != null && x(h[0]);
        break;
      case "End":
        v.preventDefault(), h[h.length - 1] != null && x(h[h.length - 1]);
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
        v.preventDefault(), h[0] != null && x(h[0]);
        break;
      case "End":
        v.preventDefault(), h[h.length - 1] != null && x(h[h.length - 1]);
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
      children: /* @__PURE__ */ D("nav", { "aria-label": r, children: [
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
            onClick: () => c ? p() : y(),
            onKeyDown: b,
            children: g ?? /* @__PURE__ */ D("span", { className: $n.defaultTrigger, children: [
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
              const S = !!v.disabled, C = $ === u;
              return /* @__PURE__ */ D(
                "div",
                {
                  id: `${i}-item-${$}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [
                    $n.item,
                    C ? $n.active : null,
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
const J2 = "_root_vv0xs_1", Q2 = "_bottomRight_vv0xs_11", ew = "_bottomLeft_vv0xs_16", tw = "_topRight_vv0xs_21", nw = "_topLeft_vv0xs_26", rw = "_menu_vv0xs_31", sw = "_itemWrapper_vv0xs_48", ow = "_tooltip_vv0xs_54", lw = "_main_vv0xs_76", aw = "_mainIcon_vv0xs_104", iw = "_mainOpen_vv0xs_109", cw = "_item_vv0xs_48", dw = "_disabled_vv0xs_141", uw = "_itemIcon_vv0xs_148", Wt = {
  root: J2,
  bottomRight: Q2,
  bottomLeft: ew,
  topRight: tw,
  topLeft: nw,
  menu: rw,
  itemWrapper: sw,
  tooltip: ow,
  main: lw,
  mainIcon: aw,
  mainOpen: iw,
  item: cw,
  disabled: dw,
  itemIcon: uw
};
function zO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${ot()}-menu`, c = oe(null), f = oe(null), [u, x] = q(!1), g = B(
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
  const h = d === "bottom-right" ? Wt.bottomRight : d === "bottom-left" ? Wt.bottomLeft : d === "top-right" ? Wt.topRight : Wt.topLeft, m = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), x(!0)) : u && p.key === "Escape" && (p.preventDefault(), x(!1));
  }, y = (p) => {
    p.key === "Escape" && (p.preventDefault(), x(!1), f.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: c,
      className: [Wt.root, h, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ s(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: Wt.menu,
            onKeyDown: y,
            children: e.map((p, _) => {
              const b = !!p.disabled;
              return /* @__PURE__ */ D("div", { className: Wt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: Wt.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": b || void 0,
                    title: p.text,
                    disabled: b,
                    tabIndex: b ? -1 : 0,
                    className: [Wt.item, b ? Wt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => g(p),
                    children: /* @__PURE__ */ s("span", { className: Wt.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
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
            className: Wt.main,
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
                className: [Wt.mainIcon, u ? Wt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const fw = "_root_1eyur_1", _w = "_list_1eyur_5", pw = "_item_1eyur_15", mw = "_link_1eyur_22", hw = "_linkButton_1eyur_23", gw = "_current_1eyur_24", bw = "_disabled_1eyur_68", yw = "_icon_1eyur_74", xw = "_text_1eyur_81", vw = "_separator_1eyur_85", ut = {
  root: fw,
  list: _w,
  item: pw,
  link: mw,
  linkButton: hw,
  current: gw,
  disabled: bw,
  icon: yw,
  text: xw,
  separator: vw
};
function LO({
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
        return /* @__PURE__ */ D("li", { className: ut.item, children: [
          a ? c ? /* @__PURE__ */ D(
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
          ) : d.path ? /* @__PURE__ */ D(
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
          ) : /* @__PURE__ */ D(
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
          ) : c ? /* @__PURE__ */ D(
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
          ) : d.path ? /* @__PURE__ */ D(
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
          ) : /* @__PURE__ */ D(
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
const ww = "_link_tmy3k_1", kw = {
  link: ww
}, RO = st(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ D(pt, { children: [
    n != null && /* @__PURE__ */ s(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [kw.link, l].filter(Boolean).join(" ");
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
}), Nw = "_root_dnkuu_1", Sw = "_list_dnkuu_5", Ow = "_item_dnkuu_15", $w = "_connector_dnkuu_21", Ew = "_connectorCompleted_dnkuu_30", Tw = "_step_dnkuu_34", Cw = "_active_dnkuu_69", Aw = "_completed_dnkuu_75", Dw = "_circle_dnkuu_79", Mw = "_check_dnkuu_109", Iw = "_icon_dnkuu_114", zw = "_number_dnkuu_119", Lw = "_text_dnkuu_124", Kt = {
  root: Nw,
  list: Sw,
  item: Ow,
  connector: $w,
  connectorCompleted: Ew,
  step: Tw,
  active: Cw,
  completed: Aw,
  circle: Dw,
  check: Mw,
  icon: Iw,
  number: zw,
  text: Lw
};
function PO({
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
  const u = l ?? i ?? !1, x = t ?? n, g = x !== void 0, [h, m] = q(() => Math.min(Math.max(0, x ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, g ? x : h),
    Math.max(0, e.length - 1)
  ), _ = oe(null), b = B(
    ($) => {
      const S = Math.min(
        Math.max(0, $),
        Math.max(0, e.length - 1)
      );
      g || m(S), (d ?? o ?? a)?.(S);
    },
    [g, d, o, a, e.length]
  ), N = B(
    ($, S) => !!(S.disabled || u && $ > p + 1),
    [u, p]
  ), v = ($) => {
    const S = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((z) => z.getAttribute("aria-disabled") !== "true" && !z.disabled), C = document.activeElement, A = C ? S.indexOf(C) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), S.length === 0) return;
      const z = A === -1 ? 0 : (A + 1) % S.length, M = S[z];
      M && M.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), S.length === 0) return;
      const z = A === -1 ? S.length - 1 : (A - 1 + S.length) % S.length, M = S[z];
      M && M.focus();
    } else $.key === "Home" ? ($.preventDefault(), S[0]?.focus()) : $.key === "End" && ($.preventDefault(), S[S.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": c,
      className: [Kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ s("ol", { ref: _, role: "list", className: Kt.list, children: e.map(($, S) => {
        const C = S === p, A = S < p, z = N(S, $);
        return /* @__PURE__ */ D(
          "li",
          {
            role: "listitem",
            className: Kt.item,
            children: [
              S > 0 ? /* @__PURE__ */ s(
                "span",
                {
                  className: [
                    Kt.connector,
                    A ? Kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ D(
                "button",
                {
                  type: "button",
                  "data-step": S,
                  "aria-current": C ? "step" : void 0,
                  "aria-disabled": z ? "true" : void 0,
                  disabled: z,
                  tabIndex: z ? -1 : 0,
                  className: [
                    Kt.step,
                    C ? Kt.active : null,
                    A ? Kt.completed : null,
                    z ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    z || b(S);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: Kt.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ s("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "check", size: "sm" }) }) : $.icon ? /* @__PURE__ */ s("span", { className: Kt.icon, children: $.icon }) : /* @__PURE__ */ s("span", { className: Kt.number, children: S + 1 }) }),
                    /* @__PURE__ */ s("span", { className: Kt.text, children: $.text })
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
const Rw = "_root_12hod_1", Pw = "_horizontal_12hod_13", jw = "_vertical_12hod_17", Bw = "_pane_12hod_21", Fw = "_handle_12hod_31", Hw = "_handleHorizontal_12hod_51", Uw = "_handleVertical_12hod_57", qw = "_handleGrip_12hod_63", Ww = "_handleCollapseHint_12hod_75", Kw = "_collapseBtn_12hod_79", Gw = "_collapseBtnCollapsed_12hod_109", un = {
  root: Rw,
  horizontal: Pw,
  vertical: jw,
  pane: Bw,
  handle: Fw,
  handleHorizontal: Hw,
  handleVertical: Uw,
  handleGrip: qw,
  handleCollapseHint: Ww,
  collapseBtn: Kw,
  collapseBtnCollapsed: Gw
};
function jr(e, t) {
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
function jO({
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
    const k = n.map((R) => R.size ? jr(R.size, 100 / w) : 100 / w), T = k.reduce((R, L) => R + L, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? k.map((R) => R / T * 100) : k;
  }, [n]), [g, h] = q(() => x()), [m, y] = q(
    () => n.map((w) => !!w.collapsed)
  ), p = oe(g);
  ve(() => {
    y(n.map((w) => !!w.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((w) => jr(w.min, 0)),
    [n]
  ), b = B(
    () => n.map((w) => jr(w.max, 100)),
    [n]
  ), N = B(
    (w, k) => {
      const T = { paneIndex: w, newSize: k, cancel: !1 };
      return (r ?? l)?.(T), !T.cancel;
    },
    [r, l]
  ), v = B(
    (w, k) => {
      const T = { paneIndex: w, collapse: k, cancel: !1 };
      return (i ?? d)?.(T), !T.cancel;
    },
    [i, d]
  ), $ = B(
    (w) => {
      const k = !m[w];
      v(w, k) && (k ? (p.current = [...g], y((T) => {
        const R = [...T];
        return R[w] !== void 0 && (R[w] = !0), R;
      }), h((T) => {
        const R = [...T], L = R[w] ?? 0, j = w < R.length - 1 ? w + 1 : w - 1;
        if (j >= 0 && j < R.length) {
          const F = R[j] ?? 0;
          R[j] = F + L, R[w] = 0;
        } else
          R[w] = 0;
        return R;
      })) : (y((T) => {
        const R = [...T];
        return R[w] !== void 0 && (R[w] = !1), R;
      }), h(() => {
        const T = [...p.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [m, g, n.length, v]
  ), S = oe(
    null
  ), C = B(
    (w, k, T) => {
      const R = u.current;
      if (!R) return null;
      const L = R.getBoundingClientRect();
      let j;
      if (f) {
        if (L.width === 0) return null;
        j = (k - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        j = (T - L.top) / L.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < w; ie++) {
        const te = g[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, g]
  ), A = (w, k) => {
    k.preventDefault();
    const T = k.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(k.pointerId), S.current = { handleIndex: w, pointerId: k.pointerId };
  }, z = (w) => {
    if (!S.current || S.current.pointerId !== w.pointerId)
      return;
    w.preventDefault();
    const k = S.current.handleIndex, T = C(k, w.clientX, w.clientY);
    if (T == null) return;
    const R = _(), L = b(), j = R[k] ?? 0, F = L[k] ?? 100, X = k + 1, ie = R[X] ?? 0, te = L[X] ?? 100, we = g[k] ?? 0, le = g[X] ?? 0, _e = we + le;
    if (_e <= 0) return;
    let K = zn(T, j, F), he = _e - K;
    if (he < ie) {
      if (he = ie, K = _e - he, K < j || K > F) return;
    } else if (he > te && (he = te, K = _e - he, K < j || K > F))
      return;
    K = zn(K, j, F), he = _e - K, N(k, K) && h((ue) => {
      const ye = [...ue];
      return ye[k] = K, ye[X] = he, ye;
    });
  }, M = (w) => {
    !S.current || S.current.pointerId !== w.pointerId || (S.current = null);
  }, E = (w, k) => {
    const T = _(), R = b(), L = w, j = w + 1, F = g[L] ?? 0, X = g[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[L]?.collapsible, le = !!n[j]?.collapsible;
    if (f ? k.key === "ArrowLeft" ? te = -5 : k.key === "ArrowRight" && (te = 5) : k.key === "ArrowUp" ? te = -5 : k.key === "ArrowDown" && (te = 5), k.key === "Home") {
      k.preventDefault();
      let _e = T[L] ?? 0, K = ie - _e;
      if (K = zn(
        K,
        T[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, T[L] ?? 0, R[L] ?? 100), !N(L, _e)) return;
      h((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = K, ue;
      });
      return;
    }
    if (k.key === "End") {
      k.preventDefault();
      let _e = R[L] ?? 100;
      _e = Math.min(_e, ie - (T[j] ?? 0));
      let K = ie - _e;
      if (K = zn(
        K,
        T[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, T[L] ?? 0, R[L] ?? 100), !N(L, _e)) return;
      h((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = K, ue;
      });
      return;
    }
    if ((k.key === "Enter" || k.key === " ") && (we || le)) {
      k.preventDefault(), $(we ? L : j);
      return;
    }
    if (te !== 0) {
      k.preventDefault();
      let _e = F + te, K = ie - _e;
      const he = T[L] ?? 0, ue = R[L] ?? 100, ye = T[j] ?? 0, pe = R[j] ?? 100;
      if (_e = zn(_e, he, ue), K = ie - _e, (K < ye || K > pe) && (K = zn(K, ye, pe), _e = ie - K, _e = zn(_e, he, ue), K = ie - _e), !N(L, _e)) return;
      h((De) => {
        const G = [...De];
        return G[L] = _e, G[j] = K, G;
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
      children: n.map((w, k) => {
        const T = !!m[k], R = T ? 0 : g[k] ?? 100 / n.length, L = T ? { display: "none" } : f ? {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = jr(w.min, 0), F = jr(w.max, 100), X = k < n.length - 1, ie = !!n[k + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": w.label ?? `Pane ${k + 1}`,
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
                    "aria-label": `Collapse pane ${k + 1}`,
                    "aria-expanded": !T,
                    onClick: () => $(k),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                w.collapsible && T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Expand pane ${k + 1}`,
                    "aria-expanded": !T,
                    onClick: () => $(k),
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
                "aria-label": `Expand pane ${k + 1}`,
                "aria-expanded": "false",
                onClick: () => $(k),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          X ? /* @__PURE__ */ D(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": j,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(R),
              "aria-label": `Resize handle ${k + 1}`,
              tabIndex: T || m[k + 1] ? -1 : 0,
              className: [
                un.handle,
                f ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => A(k, te),
              onPointerMove: z,
              onPointerUp: M,
              onKeyDown: (te) => E(k, te),
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
        ] }, k);
      })
    }
  );
}
const Vw = "_root_1w3wd_1", Yw = "_list_1w3wd_5", Xw = "_vertical_1w3wd_14", Zw = "_horizontal_1w3wd_20", Jw = "_item_1w3wd_28", Qw = "_link_1w3wd_32", ek = "_active_1w3wd_57", hr = {
  root: Vw,
  list: Yw,
  vertical: Xw,
  horizontal: Zw,
  item: Jw,
  link: Qw,
  active: ek
};
function BO({
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
  ), g = oe(u);
  g.current = u;
  const h = B(
    (m, y) => {
      if (x(m.selector), (i ?? d)?.({ text: m.text, selector: m.selector }), y) {
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
    [i, d]
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
    const _ = /* @__PURE__ */ new Map(), b = () => {
      let v = null, $ = null;
      for (const C of e) {
        const A = document.querySelector(C.selector);
        if (!A) continue;
        _.set(C.selector, A);
        const z = A.getBoundingClientRect();
        let M = z.top;
        if (y !== window) {
          const E = y.getBoundingClientRect();
          M = z.top - E.top;
        }
        M <= 80 ? (!$ || M > $.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && ($ = { sel: C.selector, el: A }) : (!v || M < v.top) && (v = { sel: C.selector, top: M });
      }
      const S = $?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== g.current && x(S);
    }, N = () => {
      b();
    };
    if (typeof IntersectionObserver < "u") {
      const v = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver(($) => {
        const S = $.filter((C) => C.isIntersecting).sort((C, A) => C.boundingClientRect.top - A.boundingClientRect.top);
        if (S[0]) {
          const C = S[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === C) {
              x(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && C.id === A.selector.slice(1)) {
              x(A.selector);
              break;
            }
          }
        } else
          b();
      }, v);
      for (const $ of e) {
        const S = document.querySelector($.selector);
        S && (p.observe(S), _.set($.selector, S));
      }
    }
    return y === window ? (window.addEventListener("scroll", N, { passive: !0 }), b(), () => {
      window.removeEventListener("scroll", N), p?.disconnect();
    }) : (y.addEventListener("scroll", N, {
      passive: !0
    }), b(), () => {
      y.removeEventListener("scroll", N), p?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [hr.root, hr[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: hr.list, children: e.map((m) => {
        const y = m.selector === u;
        return /* @__PURE__ */ s("li", { className: hr.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [hr.link, y ? hr.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(m.selector);
              h(m, _);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const tk = "_root_1bfit_1", nk = "_viewport_1bfit_17", rk = "_slide_1bfit_24", sk = "_active_1bfit_33", ok = "_arrow_1bfit_37", lk = "_prev_1bfit_71", ak = "_next_1bfit_75", ik = "_pauseBtn_1bfit_79", ck = "_indicators_1bfit_110", dk = "_indicator_1bfit_110", uk = "_indicatorActive_1bfit_145", fn = {
  root: tk,
  viewport: nk,
  slide: rk,
  active: sk,
  arrow: ok,
  prev: lk,
  next: ak,
  pauseBtn: ik,
  indicators: ck,
  indicator: dk,
  indicatorActive: uk
};
function FO({
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
  ShowIndicators: g,
  onChange: h,
  Change: m,
  ariaLabel: y = "Carousel",
  className: p
}) {
  const _ = t ?? n, b = _ !== void 0, [N, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), $ = b ? _ : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), C = l ?? i ?? !1, A = d ?? o ?? 3e3, z = a ?? c ?? !0, M = f ?? u ?? !0, E = x ?? g ?? !0, [w, k] = q(!1), [T, R] = q(!1), L = w || T, j = oe(null), F = ot(), X = B(
    (ye) => {
      const pe = e.length === 0 ? 0 : (ye % e.length + e.length) % e.length;
      b || v(pe), (h ?? m)?.(pe);
    },
    [b, h, m, e.length]
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
    if (!C || L || e.length <= 1) return;
    const ye = setInterval(() => {
      X(S + 1);
    }, A);
    return () => clearInterval(ye);
  }, [C, L, A, S, X, e.length]);
  const le = (ye) => {
    e.length !== 0 && (ye.key === "ArrowLeft" ? (ye.preventDefault(), ie()) : ye.key === "ArrowRight" ? (ye.preventDefault(), te()) : ye.key === "Home" ? (ye.preventDefault(), we(0)) : ye.key === "End" && (ye.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    z && C && R(!0);
  }, K = () => {
    z && C && R(!1);
  }, he = () => {
    z && C && R(!0);
  }, ue = () => {
    z && C && R(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ D(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [fn.root, p].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: _e,
      onMouseLeave: K,
      onFocusCapture: he,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: fn.viewport, children: e.map((ye, pe) => {
          const De = pe === S;
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
        M && e.length > 1 ? /* @__PURE__ */ D(pt, { children: [
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
        C ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: fn.pauseBtn,
            "aria-label": w ? "Resume" : "Pause",
            "aria-pressed": w,
            onClick: () => k((ye) => !ye),
            children: w ? "▶" : "⏸"
          }
        ) : null,
        E && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: fn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ye, pe) => {
              const De = pe === S;
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
const fk = "_root_1aa5u_1", _k = "_group_1aa5u_20", pk = "_itemWrapper_1aa5u_30", mk = "_treeitem_1aa5u_34", hk = "_disabled_1aa5u_50", gk = "_selected_1aa5u_60", bk = "_caret_1aa5u_66", yk = "_caretIcon_1aa5u_113", xk = "_caretOpen_1aa5u_120", vk = "_caretPlaceholder_1aa5u_124", wk = "_label_1aa5u_130", kk = "_loading_1aa5u_137", Nk = "_loadingRow_1aa5u_143", Sk = "_empty_1aa5u_149", Ok = "_checkbox_1aa5u_155", Mt = {
  root: fk,
  group: _k,
  itemWrapper: pk,
  treeitem: mk,
  disabled: hk,
  selected: gk,
  caret: bk,
  caretIcon: yk,
  caretOpen: xk,
  caretPlaceholder: vk,
  label: wk,
  loading: kk,
  loadingRow: Nk,
  empty: Sk,
  checkbox: Ok
};
function $k({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ve(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function HO({
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
  SelectedItems: g,
  defaultSelectedItem: h,
  defaultSelectedItems: m,
  onChange: y,
  Change: p,
  onExpand: _,
  Expand: b,
  onCollapse: N,
  Collapse: v,
  loadChildData: $,
  LoadChildData: S,
  template: C,
  Template: A,
  itemTemplate: z,
  ItemTemplate: M,
  ariaLabel: E,
  AriaLabel: w,
  allowCheckBoxes: k = !1,
  checkedKeys: T,
  defaultCheckedKeys: R,
  onCheckedChange: L,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = l ?? i ?? "text", we = d ?? o ?? "id", le = a ?? c ?? "single", _e = E ?? w ?? "Tree", K = $ ?? S, he = C ?? A ?? z ?? M, ue = B(
    (W) => {
      const ee = W[we];
      return ee != null ? String(ee) : String(W.id ?? "");
    },
    [we]
  ), ye = B(
    (W) => {
      const ee = W[te];
      if (ee != null) return String(ee);
      const de = W.text;
      return de != null ? String(de) : "";
    },
    [te]
  ), pe = B(
    (W) => {
      if (ie) {
        const de = ie(W);
        if (de !== void 0) return de;
      }
      const ee = W.children;
      if (Array.isArray(ee)) return ee;
    },
    [ie]
  ), De = B(
    (W) => {
      const ee = /* @__PURE__ */ new Set(), de = (Ne) => {
        for (const ke of Ne) {
          const Ce = ue(ke);
          ke.expanded && ee.add(Ce);
          const Ke = pe(ke);
          Ke && Ke.length > 0 && de(Ke);
        }
      };
      return de(W), ee;
    },
    [ue, pe]
  ), [G, $e] = q(
    () => De(X)
  ), [ne, Ae] = q(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = q(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = x ?? g, yt = le === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
    if (le === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((de) => ue(de)));
      const W = /* @__PURE__ */ new Set(), ee = (de) => {
        for (const Ne of de) {
          Ne.selected && W.add(ue(Ne));
          const ke = pe(Ne);
          ke && ee(ke);
        }
      };
      return ee(X), W;
    } else {
      if (h) return /* @__PURE__ */ new Set([ue(h)]);
      let W = null;
      const ee = (de) => {
        for (const Ne of de) {
          if (Ne.selected)
            return W = ue(Ne), !0;
          const ke = pe(Ne);
          if (ke && ee(ke)) return !0;
        }
        return !1;
      };
      return ee(X), W ? /* @__PURE__ */ new Set([W]) : /* @__PURE__ */ new Set();
    }
  }, [
    le,
    h,
    m,
    ue,
    pe,
    X
  ]), [I, Y] = q(
    () => Z()
  ), Q = Oe(() => {
    if (le === "multiple") {
      if (Je !== void 0) {
        const W = Je;
        return W ? new Set(W.map((ee) => ue(ee))) : /* @__PURE__ */ new Set();
      }
      return I;
    } else {
      if (Ge !== void 0) {
        const W = Ge;
        return W ? /* @__PURE__ */ new Set([ue(W)]) : /* @__PURE__ */ new Set();
      }
      return I;
    }
  }, [
    le,
    Je,
    Ge,
    I,
    ue
  ]), ge = B(
    (W) => {
      let ee;
      const de = (Ne) => {
        for (const ke of Ne) {
          if (ue(ke) === W)
            return ee = ke, !0;
          const Ke = ne.get(ue(ke)) ?? pe(ke);
          if (Ke && de(Ke)) return !0;
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
    const W = /* @__PURE__ */ new Map(), ee = (de) => {
      for (const Ne of de) {
        const ke = ue(Ne);
        W.set(ke, Ne);
        const Ke = ne.get(ke) ?? pe(Ne);
        Ke && ee(Ke);
      }
    };
    return ee(X), W;
  }, [X, ne, ue, pe]), Ee = B(
    (W) => {
      const ee = ue(W);
      if (!W.disabled)
        if (le === "multiple") {
          const Ne = new Set(Q);
          Ne.has(ee) ? Ne.delete(ee) : Ne.add(ee), yt || Y(Ne);
          const ke = y ?? p;
          if (ke) {
            const Ce = ae(), Ke = [];
            for (const Be of Ne) {
              const it = Ce.get(Be) ?? ge(Be);
              it && Ke.push(it);
            }
            ke({ item: W, selectedItems: Ke });
          }
        } else if (!Q.has(ee) || Q.size !== 1 || !Q.has(ee)) {
          yt || Y(/* @__PURE__ */ new Set([ee]));
          const ke = y ?? p;
          ke && ke({ item: W, selectedItem: W });
        } else {
          const ke = y ?? p;
          ke && ke({ item: W, selectedItem: W });
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
    async (W) => {
      const ee = ue(W);
      if (!!W.disabled) return;
      const Ne = G.has(ee), ke = _ ?? b, Ce = N ?? v, Ke = pe(W), it = ne.get(ee) ?? Ke, Et = !(it !== void 0 && it.length > 0) && K != null;
      if (Ne) {
        $e((mt) => {
          const ze = new Set(mt);
          return ze.delete(ee), ze;
        }), Ce?.({ item: W });
        return;
      }
      if (Et) {
        if (fe.has(ee)) return;
        Fe((mt) => {
          const ze = new Set(mt);
          return ze.add(ee), ze;
        });
        try {
          const ze = await K(W);
          Ae((Tt) => {
            const Zt = new Map(Tt);
            return Zt.set(ee, ze), Zt;
          }), $e((Tt) => {
            const Zt = new Set(Tt);
            return Zt.add(ee), Zt;
          }), ke?.({ item: W });
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
      }), ke?.({ item: W });
    },
    [
      ue,
      G,
      pe,
      ne,
      K,
      fe,
      _,
      b,
      N,
      v
    ]
  ), Ze = Oe(() => {
    const W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ue(Ke);
        W.has(Be) || W.set(Be, []), ee.set(Be, Ce), Ke.disabled && de.add(Be);
        const rt = ne.get(Be) ?? pe(Ke);
        rt && rt.length > 0 && (W.set(
          Be,
          rt.map((Et) => ue(Et))
        ), Ne(rt, Be));
      }
    };
    return Ne(X, null), { childrenOf: W, parentOf: ee, disabledKeys: de };
  }, [X, ne, ue, pe]), Qe = B(
    (W) => {
      const ee = [], de = [...Ze.childrenOf.get(W) ?? []];
      for (; de.length > 0; ) {
        const Ne = de.pop();
        ee.push(Ne), de.push(...Ze.childrenOf.get(Ne) ?? []);
      }
      return ee;
    },
    [Ze]
  ), [nt, Xt] = q(
    () => new Set(R ?? [])
  ), re = T !== void 0 ? new Set(T) : nt, Le = B(
    (W) => {
      const ee = Ze.disabledKeys;
      return Qe(W).filter((de) => !ee.has(de));
    },
    [Qe, Ze]
  ), Nt = B(
    (W) => {
      if (re.has(W)) return !0;
      if (!k || !j) return !1;
      const ee = Le(W);
      return ee.length > 0 && ee.every((de) => re.has(de));
    },
    [re, k, j, Le]
  ), Rt = B(
    (W) => {
      if (!k || !j || re.has(W))
        return !1;
      const ee = Le(W);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => re.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [re, k, j, Le]
  ), xt = B(
    (W) => {
      if (!k || W.disabled) return;
      const ee = ue(W), de = new Set(re);
      if (de.has(ee) || Nt(ee)) {
        if (de.delete(ee), j)
          for (const Ne of Le(ee)) de.delete(Ne);
      } else if (de.add(ee), j)
        for (const Ne of Le(ee)) de.add(Ne);
      T === void 0 && Xt(de), L?.([...de]);
    },
    [
      k,
      j,
      T,
      re,
      Le,
      ue,
      Nt,
      L
    ]
  ), Ie = Oe(() => {
    const W = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, Ke) => {
        const Be = ue(Ce), it = ye(Ce), rt = ne.get(Be) ?? pe(Ce);
        let Et;
        ne.has(Be) ? Et = ne.get(Be).length > 0 : rt !== void 0 ? Et = rt.length > 0 : K ? Et = !0 : Et = !1;
        const mt = G.has(Be), ze = !!Ce.disabled, Tt = de.length, Zt = Ke + 1;
        if (W.push({
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
    return ee(X, 1, null), W;
  }, [
    X,
    ue,
    ye,
    pe,
    ne,
    G,
    K,
    fe
  ]), [We, vt] = q(
    () => Ie[0]?.key ?? null
  ), $t = oe(""), at = oe(null), V = oe(null);
  ve(() => {
    if (!We && Ie.length > 0) {
      const W = Ie[0];
      W && vt(W.key);
    } else if (We && !Ie.some((W) => W.key === We)) {
      const W = Ie[0];
      vt(W ? W.key : null);
    }
  }, [Ie, We]), ve(() => {
    if (We) {
      const W = V.current?.querySelector(
        `[data-key="${CSS.escape(We)}"]`
      );
      let ee = null;
      W || (ee = V.current?.querySelector(
        `[data-key="${We}"]`
      ) ?? null);
      const de = W ?? ee;
      de && document.activeElement !== de && V.current?.contains(document.activeElement) && de.focus();
    }
  }, [We]);
  const me = B((W) => {
    vt(W), requestAnimationFrame(() => {
      const ee = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(W) : W;
      let de = V.current?.querySelector(
        `[data-key="${ee}"]`
      );
      de || (de = V.current?.querySelector(`[data-key="${W}"]`) ?? null), de?.focus();
    });
  }, []), Ve = B(
    (W) => Ie.find((de) => de.key === W)?.parentKey ?? null,
    [Ie]
  ), Ye = B(
    (W) => {
      if (Ie.length === 0) return;
      const ee = We ? Ie.findIndex((ke) => ke.key === We) : -1, de = ee >= 0 ? Ie[ee] : void 0;
      let Ne = null;
      if (W.key === "ArrowDown") {
        if (W.preventDefault(), ee === -1)
          Ne = Ie[0]?.key ?? null;
        else {
          const ke = (ee + 1) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && me(Ne);
        return;
      }
      if (W.key === "ArrowUp") {
        if (W.preventDefault(), ee === -1) {
          const ke = Ie[Ie.length - 1];
          ke && (Ne = ke.key);
        } else {
          const ke = (ee - 1 + Ie.length) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && me(Ne);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !de) return;
        if (de.hasChildren && !de.expanded)
          je(de.item);
        else if (de.hasChildren && de.expanded) {
          const ke = ee + 1, Ce = Ie[ke];
          Ce && Ce.parentKey === de.key && me(Ce.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !de) return;
        if (de.hasChildren && de.expanded)
          je(de.item);
        else {
          const ke = Ve(de.key);
          ke && me(ke);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const ke = Ie[0];
        ke && me(ke.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const ke = Ie[Ie.length - 1];
        ke && me(ke.key);
        return;
      }
      if (W.key === "Enter" || W.key === " ") {
        if (W.key === " " && W.target?.tagName === "INPUT" || (W.preventDefault(), !de)) return;
        if (W.key === " " && k) {
          const ke = ge(de.key);
          ke && xt(ke);
          return;
        }
        Ee(de.item);
        return;
      }
      if (W.key.length === 1 && /^[a-zA-Z0-9]$/.test(W.key)) {
        W.preventDefault();
        const ke = ($t.current + W.key).toLowerCase();
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
      We,
      me,
      je,
      Ee,
      Ve,
      k,
      xt
    ]
  ), Pt = B(() => {
    if (!We && Ie.length > 0) {
      const W = Ie[0];
      W && vt(W.key);
    }
  }, [We, Ie]), Xe = (W, ee, de) => /* @__PURE__ */ s("ul", { role: "group", className: Mt.group, children: W.map((Ne, ke) => {
    const Ce = ue(Ne), Ke = ye(Ne), Be = ne.get(Ce) ?? pe(Ne);
    let it;
    ne.has(Ce) ? it = ne.get(Ce).length > 0 : Be !== void 0 ? it = Be.length > 0 : K ? it = !0 : it = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), mt = !!Ne.disabled, ze = fe.has(Ce), Tt = We === Ce, Zt = W.length, pn = ke + 1, Tn = he ? he(Ne) : Ke, jn = k ? {
      checked: Nt(Ce),
      indeterminate: Rt(Ce)
    } : null;
    return /* @__PURE__ */ D("li", { role: "none", className: Mt.itemWrapper, children: [
      /* @__PURE__ */ D(
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
            k ? /* @__PURE__ */ s(
              $k,
              {
                className: Mt.checkbox,
                checked: jn?.checked ?? !1,
                indeterminate: jn?.indeterminate ?? !1,
                disabled: mt,
                "aria-label": `Select ${Ke}`,
                onClick: (wn) => wn.stopPropagation(),
                onChange: () => xt(Ne)
              }
            ) : null,
            it ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Mt.caret,
                "aria-label": `${rt ? "Collapse" : "Expand"} ${Ke}`,
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
const Ek = "_root_10fdq_1", Tk = "_panel_10fdq_8", Ck = "_header_10fdq_19", Ak = "_listbox_10fdq_28", Dk = "_option_10fdq_42", Mk = "_disabled_10fdq_57", Ik = "_active_10fdq_66", zk = "_selected_10fdq_70", Lk = "_empty_10fdq_86", Rk = "_controls_10fdq_93", Pk = "_reorder_10fdq_102", jk = "_btn_10fdq_110", tt = {
  root: Ek,
  panel: Tk,
  header: Ck,
  listbox: Ak,
  option: Dk,
  disabled: Mk,
  active: Ik,
  selected: zk,
  empty: Lk,
  controls: Rk,
  reorder: Pk,
  btn: jk
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function us(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function UO({
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
  TargetChange: g,
  keyProperty: h,
  KeyProperty: m,
  onMove: y,
  Move: p,
  ariaLabel: _,
  AriaLabel: b,
  className: N
}) {
  const v = h ?? m ?? "id", $ = _ ?? b ?? "PickList", S = e ?? t ?? l ?? i ?? a ?? c ?? [], C = n ?? r ?? d ?? o ?? [], [A, z] = q(() => [
    ...S
  ]), [M, E] = q(() => [
    ...C
  ]);
  ve(() => {
    const I = e ?? t ?? l ?? i ?? a ?? c;
    I !== void 0 && z([...I]);
  }, [e, t, l, i, a, c]), ve(() => {
    const I = n ?? r ?? d ?? o;
    I !== void 0 && E([...I]);
  }, [n, r, d, o]);
  const [w, k] = q(
    () => /* @__PURE__ */ new Set()
  ), [T, R] = q(
    () => /* @__PURE__ */ new Set()
  ), [L, j] = q(() => {
    const I = S.findIndex((Y) => !Y.disabled);
    return I >= 0 ? I : 0;
  }), [F, X] = q(() => {
    const I = C.findIndex((Y) => !Y.disabled);
    return I >= 0 ? I : 0;
  }), ie = Oe(
    () => A.map((I, Y) => I.disabled ? -1 : Y).filter((I) => I >= 0),
    [A]
  ), te = Oe(
    () => M.map((I, Y) => I.disabled ? -1 : Y).filter((I) => I >= 0),
    [M]
  );
  ve(() => {
    if (L >= A.length) {
      const I = ie[ie.length - 1];
      j(I ?? 0);
    } else if (A.length > 0 && ie.length > 0 && !ie.includes(L)) {
      const I = ie[0];
      I !== void 0 && j(I);
    }
  }, [L, A.length, ie]), ve(() => {
    if (F >= M.length) {
      const I = te[te.length - 1];
      X(I ?? 0);
    } else if (M.length > 0 && te.length > 0 && !te.includes(F)) {
      const I = te[0];
      I !== void 0 && X(I);
    }
  }, [F, M.length, te]), ve(() => {
    k((I) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of I)
        A.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [A, v]), ve(() => {
    R((I) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of I)
        M.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [M, v]);
  const we = B(
    (I) => {
      (f ?? u)?.(I);
    },
    [f, u]
  ), le = B(
    (I) => {
      (x ?? g)?.(I);
    },
    [x, g]
  ), _e = B(
    (I) => {
      (y ?? p)?.(I);
    },
    [y, p]
  ), K = B(
    (I) => {
      const Y = A[I];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      k((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), j(I);
    },
    [A, v]
  ), he = B(
    (I) => {
      const Y = M[I];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      R((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), X(I);
    },
    [M, v]
  ), ue = B(() => {
    const I = [], Y = [];
    for (const Ee of A) {
      const je = It(Ee, v);
      w.has(je) && !Ee.disabled ? I.push(Ee) : Y.push(Ee);
    }
    if (I.length === 0) return;
    const Q = Y, ge = [...M, ...I];
    z(Q), E(ge), k(/* @__PURE__ */ new Set());
    const ae = new Set(I.map((Ee) => It(Ee, v)));
    R(ae), we(Q), le(ge), _e({
      source: Q,
      target: ge,
      moved: I,
      direction: "toTarget"
    });
  }, [
    A,
    M,
    w,
    v,
    we,
    le,
    _e
  ]), ye = B(() => {
    const I = [], Y = [];
    for (const Ee of M) {
      const je = It(Ee, v);
      T.has(je) && !Ee.disabled ? I.push(Ee) : Y.push(Ee);
    }
    if (I.length === 0) return;
    const Q = Y, ge = [...A, ...I];
    E(Q), z(ge), R(/* @__PURE__ */ new Set());
    const ae = new Set(I.map((Ee) => It(Ee, v)));
    k(ae), we(ge), le(Q), _e({
      source: ge,
      target: Q,
      moved: I,
      direction: "toSource"
    });
  }, [
    A,
    M,
    T,
    v,
    we,
    le,
    _e
  ]), pe = B(() => {
    const I = A.filter((ge) => !ge.disabled);
    if (I.length === 0) return;
    const Y = A.filter((ge) => !!ge.disabled), Q = [...M, ...I];
    z(Y), E(Q), k(/* @__PURE__ */ new Set()), we(Y), le(Q), _e({
      source: Y,
      target: Q,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    A,
    M,
    v,
    we,
    le,
    _e
  ]), De = B(() => {
    const I = M.filter((ge) => !ge.disabled);
    if (I.length === 0) return;
    const Y = M.filter((ge) => !!ge.disabled), Q = [...A, ...I];
    E(Y), z(Q), R(/* @__PURE__ */ new Set()), we(Q), le(Y), _e({
      source: Q,
      target: Y,
      moved: I,
      direction: "allToSource"
    });
  }, [A, M, we, le, _e]), G = B(() => {
    if (T.size === 0) return;
    const I = [...M], Y = T, Q = [];
    for (let ae = 1; ae < I.length; ae++) {
      const Ee = I[ae], je = I[ae - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (I[ae - 1] = Ee, I[ae] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    E(I), le(I), _e({ source: A, target: I, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = I.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    M,
    T,
    v,
    A,
    le,
    _e
  ]), $e = B(() => {
    if (T.size === 0) return;
    const I = [...M], Y = T, Q = [];
    for (let ae = I.length - 2; ae >= 0; ae--) {
      const Ee = I[ae], je = I[ae + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (I[ae] = je, I[ae + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    E(I), le(I), _e({ source: A, target: I, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = I.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    M,
    T,
    v,
    A,
    le,
    _e
  ]), ne = w.size > 0, Ae = T.size > 0, fe = oe(""), Fe = oe(
    null
  ), Ge = oe(""), Je = oe(
    null
  ), At = B(
    (I) => {
      if (A.length === 0) return;
      const Y = ie;
      if (Y.length === 0) return;
      const Q = Y.includes(L) ? L : Y[0] ?? 0;
      let ge = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), ge = Y[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), K(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const ae = (fe.current + I.key).toLowerCase();
        fe.current = ae, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => us(A[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [A, ie, L, K]
  ), lt = B(
    (I) => {
      if (M.length === 0) return;
      const Y = te;
      if (Y.length === 0) return;
      const Q = Y.includes(F) ? F : Y[0] ?? 0;
      let ge = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), ge = Y[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), he(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const ae = (Ge.current + I.key).toLowerCase();
        Ge.current = ae, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => us(M[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && X(Ze);
        return;
      }
      ge >= 0 && X(ge);
    },
    [M, te, F, he]
  ), yt = oe(null), Z = oe(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [tt.root, N].filter(Boolean).join(" "),
      "aria-label": $,
      children: [
        /* @__PURE__ */ D("div", { className: tt.panel, children: [
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
              ) : A.map((I, Y) => {
                const Q = It(I, v), ge = w.has(Q), ae = Y === L, Ee = !!I.disabled;
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
                    onClick: () => K(Y),
                    children: us(I)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: tt.controls, children: [
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
              "aria-disabled": A.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: A.filter((I) => !I.disabled).length === 0,
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
              "aria-disabled": A.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: A.filter((I) => !I.disabled).length === 0,
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
              "aria-disabled": M.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: M.filter((I) => !I.disabled).length === 0,
              onClick: De,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: tt.panel, children: [
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
              children: M.length === 0 ? (
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
              ) : M.map((I, Y) => {
                const Q = It(I, v), ge = T.has(Q), ae = Y === F, Ee = !!I.disabled;
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
                    children: us(I)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ D("div", { className: tt.reorder, children: [
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
const Bk = "_root_1qxsp_1", Fk = "_header_1qxsp_8", Hk = "_title_1qxsp_15", Uk = "_navBtn_1qxsp_20", qk = "_resources_1qxsp_39", Wk = "_resource_1qxsp_39", Kk = "_grid_1qxsp_50", Gk = "_timeCol_1qxsp_55", Vk = "_timeCell_1qxsp_61", Yk = "_dayCol_1qxsp_66", Xk = "_dayHeader_1qxsp_73", Zk = "_slot_1qxsp_81", Jk = "_event_1qxsp_91", Gt = {
  root: Bk,
  header: Fk,
  title: Hk,
  navBtn: Uk,
  resources: qk,
  resource: Wk,
  grid: Kk,
  timeCol: Gk,
  timeCell: Vk,
  dayCol: Yk,
  dayHeader: Xk,
  slot: Zk,
  event: Jk
};
function fl(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function qO({
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
  }, g = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, y) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + y), p;
  }) : Array.from({ length: 30 }, (m, y) => {
    const p = new Date(u);
    return p.setDate(1 + y), p;
  }), h = Array.from({ length: 12 }, (m, y) => 8 + y);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Gt.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ D("div", { className: Gt.header, children: [
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
        /* @__PURE__ */ D("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: Gt.timeCol, role: "presentation", children: h.map((m) => /* @__PURE__ */ D("div", { className: Gt.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          g.map((m) => /* @__PURE__ */ D(
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
                h.map((y) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(m);
                      p.setHours(y), d?.({ date: p });
                    }
                  },
                  y
                )),
                e.filter((y) => y.start.toDateString() === m.toDateString()).map((y) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${y.title} ${fl(y.start)} - ${fl(y.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: y }),
                    children: y.title
                  },
                  y.id
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
const Qk = "_root_dj5ne_1", eN = "_header_dj5ne_8", tN = "_headerCell_dj5ne_15", nN = "_timeline_dj5ne_21", rN = "_row_dj5ne_26", sN = "_taskName_dj5ne_32", oN = "_timelineCell_dj5ne_37", lN = "_bar_dj5ne_43", aN = "_progress_dj5ne_56", iN = "_dep_dj5ne_61", En = {
  root: Qk,
  header: eN,
  headerCell: tN,
  timeline: nN,
  row: rN,
  taskName: sN,
  timelineCell: oN,
  bar: lN,
  progress: aN,
  dep: iN
};
function WO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [i, d] = q(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [En.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ D("div", { className: En.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: En.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: En.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ D(
          "div",
          {
            className: En.row,
            role: "row",
            "aria-selected": i === o.id,
            children: [
              /* @__PURE__ */ s("div", { className: En.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ D("div", { className: En.timelineCell, role: "gridcell", children: [
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
const cN = "_root_4b64f_1", dN = "_fields_4b64f_6", uN = "_chip_4b64f_13", fN = "_table_4b64f_35", _N = "_totalRow_4b64f_55", pN = "_total_4b64f_55", gr = {
  root: cN,
  fields: dN,
  chip: uN,
  table: fN,
  totalRow: _N,
  total: pN
}, fs = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Br(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function KO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const o = t, a = n, c = r, f = (y, p, _) => {
    const b = y === "row" ? o.filter(($) => $.property !== p) : o, N = y === "col" ? a.filter(($) => $.property !== p) : a, v = y === "agg" ? c.filter(($) => !($.property === p && $.aggregate === _)) : c;
    l?.({
      rowFields: b,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (y, p) => p.map((_) => String(y[_.property])).join(""), x = [
    ...new Set(o.length ? e.map((y) => u(y, o)) : [""])
  ].sort(), g = [
    ...new Set(a.length ? e.map((y) => u(y, a)) : [""])
  ].sort(), h = (y, p, _) => {
    const b = e.filter(
      (v) => u(v, o) === y && u(v, a) === p
    ), N = b.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !N.length && _.aggregate !== "Count" ? 0 : fs[_.aggregate](
      _.aggregate === "Count" ? b.map(() => 1) : N
    );
  }, m = (y, p, _, b) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: gr.chip,
      "aria-label": `Remove ${y} field ${_}`,
      onClick: () => f(y, p, b),
      children: [
        _,
        b ? ` (${b})` : ""
      ]
    },
    `${y}-${_}-${b ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [gr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: gr.fields, children: [
      o.map((y) => m("row", y.property, y.title ?? y.property)),
      a.map((y) => m("col", y.property, y.title ?? y.property)),
      c.map(
        (y) => m("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: gr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        g.map((y) => /* @__PURE__ */ s("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        x.map((y) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: y || "—" }),
          g.map((p) => /* @__PURE__ */ s(
            "td",
            {
              title: Br(
                h(
                  y,
                  p,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? Br(h(y, p, c[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ s("td", { className: gr.total, children: c.length ? Br(
            fs[c[0].aggregate](
              g.flatMap(
                (p) => e.filter(
                  (_) => u(_, o) === y && u(_, a) === p
                ).map((_) => Number(_[c[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ D("tr", { className: gr.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          g.map((y) => /* @__PURE__ */ s("td", { children: c.length ? Br(
            fs[c[0].aggregate](
              e.filter((p) => u(p, a) === y).map((p) => Number(p[c[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, y)),
          /* @__PURE__ */ s("td", { children: c.length ? Br(
            fs[c[0].aggregate](
              e.map((y) => Number(y[c[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const mN = "_root_1r7co_1", hN = "_reverse_1r7co_10", gN = "_item_1r7co_14", bN = "_marker_1r7co_35", yN = "_body_1r7co_46", xN = "_label_1r7co_50", vN = "_content_1r7co_56", tr = {
  root: mN,
  reverse: hN,
  item: gN,
  marker: bN,
  body: yN,
  label: xN,
  content: vN
};
function GO({
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
      children: l.map((i, d) => /* @__PURE__ */ D("li", { className: tr.item, children: [
        /* @__PURE__ */ s("span", { className: tr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: tr.body, children: [
          /* @__PURE__ */ s("div", { className: tr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ s("div", { className: tr.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const wN = "_root_rm4d8_1", kN = "_header_rm4d8_13", NN = "_headCell_rm4d8_22", SN = "_row_rm4d8_32", ON = "_cell_rm4d8_37", Fr = {
  root: wN,
  header: kN,
  headCell: NN,
  row: SN,
  cell: ON
};
function VO({
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
  ), [c, f] = q(0), u = oe(/* @__PURE__ */ new Set()), x = Math.ceil(n / t), g = Math.max(0, Math.floor(c / t) - 3), h = Math.min(e, g + x + 6), m = B(
    (p, _) => {
      let b = !1;
      for (let N = p; N < _; N++)
        !o.has(N) && !u.current.has(N) && (b = !0);
      if (b) {
        for (let N = p; N < _; N++) u.current.add(N);
        r({ skip: p, top: _ }).then((N) => {
          a((v) => {
            const $ = new Map(v);
            return N.forEach((S, C) => $.set(p + C, S)), $;
          });
          for (let v = p; v < _; v++) u.current.delete(v);
        });
      }
    },
    [o, r]
  );
  ve(() => {
    m(g, h);
  }, [g, h]);
  const y = [];
  for (let p = g; p < h; p++) {
    const _ = o.get(p) ?? {};
    y.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Fr.row,
          role: "row",
          style: { height: t },
          children: l.map((b) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Fr.cell,
              style: b.width ? { width: b.width } : void 0,
              children: String(_[b.property] ?? "")
            },
            b.property
          ))
        },
        p
      )
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Fr.root, d].filter(Boolean).join(" "),
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
        /* @__PURE__ */ s("div", { style: { height: g * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Fr.header, role: "row", children: l.map((p) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Fr.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
        )) }),
        y,
        /* @__PURE__ */ s(
          "div",
          {
            style: { height: Math.max(0, (e - h) * t) },
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
      for (let g = 0; g < this.size; g++) u.push(!1);
      for (let g = 0; g < this.size; g++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const x = this.addEccAndInterleave(c);
      if (this.drawCodewords(x), f == -1) {
        let g = 1e9;
        for (let h = 0; h < 8; h++) {
          this.applyMask(h), this.drawFormatBits(h);
          const m = this.getPenaltyScore();
          m < g && (f = h, g = m), this.applyMask(h);
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
      let g, h;
      for (g = c; ; g++) {
        const _ = t.getNumDataCodewords(g, a) * 8, b = i.getTotalBits(o, g);
        if (b <= _) {
          h = b;
          break;
        }
        if (g >= f)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && h <= t.getNumDataCodewords(g, _) * 8 && (a = _);
      let m = [];
      for (const _ of o) {
        n(_.mode.modeBits, 4, m), n(_.numChars, _.mode.numCharCountBits(g), m);
        for (const b of _.getData()) m.push(b);
      }
      l(m.length == h);
      const y = t.getNumDataCodewords(g, a) * 8;
      l(m.length <= y), n(0, Math.min(4, y - m.length), m), n(0, (8 - m.length % 8) % 8, m), l(m.length % 8 == 0);
      for (let _ = 236; m.length < y; _ ^= 253)
        n(_, 8, m);
      let p = [];
      for (; p.length * 8 < m.length; ) p.push(0);
      return m.forEach(
        (_, b) => p[b >>> 3] |= _ << 7 - (b & 7)
      ), new t(g, a, p, u);
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
          const u = Math.max(Math.abs(f), Math.abs(c)), x = o + f, g = a + c;
          0 <= x && x < this.size && 0 <= g && g < this.size && this.setFunctionModule(x, g, u != 2 && u != 4);
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
      ), g = f - x % f, h = Math.floor(x / f);
      let m = [];
      const y = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, b = 0; _ < f; _++) {
        let N = o.slice(
          b,
          b + h - u + (_ < g ? 0 : 1)
        );
        b += N.length;
        const v = t.reedSolomonComputeRemainder(N, y);
        _ < g && N.push(0), m.push(N.concat(v));
      }
      let p = [];
      for (let _ = 0; _ < m[0].length; _++)
        m.forEach((b, N) => {
          (_ != h - u || N >= g) && p.push(b[_]);
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
            const x = c - u, h = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[h][x] && a < o.length * 8 && (this.modules[h][x] = r(o[a >>> 3], 7 - (a & 7)), a++);
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
        let x = !1, g = 0, h = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == x ? (g++, g == 5 ? o += t.PENALTY_N1 : g > 5 && o++) : (this.finderPenaltyAddHistory(g, h), x || (o += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), x = this.modules[u][m], g = 1);
        o += this.finderPenaltyTerminateAndCount(x, g, h) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let x = !1, g = 0, h = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == x ? (g++, g == 5 ? o += t.PENALTY_N1 : g > 5 && o++) : (this.finderPenaltyAddHistory(g, h), x || (o += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), x = this.modules[m][u], g = 1);
        o += this.finderPenaltyTerminateAndCount(x, g, h) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let x = 0; x < this.size - 1; x++) {
          const g = this.modules[u][x];
          g == this.modules[u][x + 1] && g == this.modules[u + 1][x] && g == this.modules[u + 1][x + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((x, g) => x + (g ? 1 : 0), a);
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
          (x, g) => c[g] ^= t.reedSolomonMultiply(x, u)
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
const $N = "_root_1leml_1", EN = {
  root: $N
}, TN = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function YO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: o
}) {
  const a = i ?? `QR code for ${e}`, c = oe(null), f = so("(prefers-color-scheme: dark)"), [u, x] = q(null);
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
  const g = Oe(() => {
    try {
      return vn.QrCode.encodeText(e, TN[r]);
    } catch {
      return null;
    }
  }, [e, r]), h = oe(null);
  ve(() => {
    if (g !== null) {
      h.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (h.current?.value !== e || h.current?.onError !== o) && (h.current = { value: e, onError: o }, o?.(N));
  }, [g, e, o]);
  const m = Math.max(0, Math.floor(l)), y = [EN.root, d].filter(Boolean).join(" ");
  if (ve(() => {
    if (n !== "canvas" || g === null) return;
    const N = c.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const $ = getComputedStyle(N), S = $.getPropertyValue("--dx-text-color").trim() || "#000", C = $.getPropertyValue("--dx-surface-color").trim() || "#fff";
    CN(v, g, t, m, S, C);
  }, [n, g, t, m, f, u]), g === null)
    return /* @__PURE__ */ s("div", { className: y, role: "img", "aria-label": a, "data-qr-error": "true" });
  const p = g.size + m * 2, _ = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: c,
        className: y,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const b = [];
  for (let N = 0; N < g.size; N++)
    for (let v = 0; v < g.size; v++)
      g.getModule(v, N) && b.push(
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
  return /* @__PURE__ */ D(
    "svg",
    {
      className: y,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: b })
      ]
    }
  );
}
function CN(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const AN = "_root_1v9la_1", DN = "_value_1v9la_9", _l = {
  root: AN,
  value: DN
}, pl = [
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
], ml = 104, MN = 106;
function IN(e) {
  const t = [ml];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = ml;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, MN), t;
}
function XO({
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
    for (const f of IN(e)) {
      const u = pl[f] ?? pl[0];
      for (let x = 0; x < u.length; x++) {
        const g = Number(u[x]);
        x % 2 === 0 && a.push({ x: c, w: g }), c += g;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [_l.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
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
    r && /* @__PURE__ */ s("span", { className: _l.value, children: e })
  ] });
}
const zN = "_root_16i43_1", LN = "_svg_16i43_10", RN = "_gridline_16i43_15", PN = "_tickLabel_16i43_21", jN = "_axisTitle_16i43_27", BN = "_dataLabel_16i43_34", FN = "_gaugeValue_16i43_40", HN = "_legend_16i43_47", UN = "_legendItem_16i43_55", qN = "_swatch_16i43_63", WN = "_tooltip_16i43_70", KN = "_visuallyHidden_16i43_84", ft = {
  root: zN,
  svg: LN,
  gridline: RN,
  tickLabel: PN,
  axisTitle: jN,
  dataLabel: BN,
  gaugeValue: FN,
  legend: HN,
  legendItem: UN,
  swatch: qN,
  tooltip: WN,
  visuallyHidden: KN
}, hl = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Wl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), GN = /* @__PURE__ */ new Set([...Wl, "heatmap"]);
function VN(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, o = [];
  for (let a = i; a <= d + 1e-9; a += l)
    o.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: o };
}
function YN(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    min: e.minProperty != null ? Number(t[e.minProperty]) : void 0,
    max: e.maxProperty != null ? Number(t[e.maxProperty]) : void 0,
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function Vn(e, t, n) {
  return /* @__PURE__ */ D(
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
function Kl(e, t, n, r, l) {
  const i = r.markers ?? {};
  if (i.visible === !1) return null;
  const d = i.shape ?? "circle", o = i.size ?? l, a = "var(--dx-surface-color)";
  return d === "square" ? /* @__PURE__ */ s(
    "rect",
    {
      x: e - o,
      y: t - o,
      width: o * 2,
      height: o * 2,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : d === "diamond" ? /* @__PURE__ */ s(
    "path",
    {
      d: `M ${e} ${t - o} L ${e + o} ${t} L ${e} ${t + o} L ${e - o} ${t} Z`,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : d === "triangle" ? /* @__PURE__ */ s(
    "path",
    {
      d: `M ${e} ${t - o} L ${e + o} ${t + o} L ${e - o} ${t + o} Z`,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : /* @__PURE__ */ s(
    "circle",
    {
      cx: e,
      cy: t,
      r: o,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  );
}
function XN(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function ys(e, t) {
  return e.percent ? `${t}%` : String(t);
}
function ZN(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: l, categories: i } = e, d = new Map(i.map((u, x) => [u, x])), o = n.map((u) => {
    const x = d.get(u.cat) ?? 0, g = u.min, h = u.max;
    return typeof g != "number" || Number.isNaN(g) || typeof h != "number" || Number.isNaN(h) ? null : { x: r(x), lo: l(g), hi: l(h) };
  });
  if (o.some((u) => u == null)) return null;
  const a = o.map((u) => `L ${u.x} ${u.hi}`).join(" "), c = [...o].reverse().map((u) => `L ${u.x} ${u.lo}`).join(" "), f = o[0];
  return /* @__PURE__ */ s(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${a} ${c} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function JN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o } = e, a = i.l + d / 2, c = i.t + o / 2, f = Math.min(d, o) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, x = r.reduce((h, m) => h + (Number(m.val) || 0), 0);
  let g = -90;
  return Vn(
    n,
    t,
    r.map((h, m) => {
      const y = x ? h.val / x * 360 : 0, p = g, _ = g + y;
      g = _;
      const b = y > 180 ? 1 : 0, N = a + f * Math.cos(Ut(p)), v = c + f * Math.sin(Ut(p)), $ = a + f * Math.cos(Ut(_)), S = c + f * Math.sin(Ut(_)), C = a + u * Math.cos(Ut(_)), A = c + u * Math.sin(Ut(_)), z = a + u * Math.cos(Ut(p)), M = c + u * Math.sin(Ut(p)), E = u ? `M ${N} ${v} A ${f} ${f} 0 ${b} 1 ${$} ${S} L ${C} ${A} A ${u} ${u} 0 ${b} 0 ${z} ${M} Z` : `M ${a} ${c} L ${N} ${v} A ${f} ${f} 0 ${b} 1 ${$} ${S} Z`, w = (p + _) / 2, k = a + (f + 12) * Math.cos(Ut(w)), T = c + (f + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: E,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, T, `${t.title ?? h.cat}: ${h.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: k,
            y: T,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: h.val
          }
        )
      ] }, m);
    })
  );
}
function QN(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: o, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((x, g) => [x, g]));
  return Vn(
    n,
    t,
    r.map((x, g) => {
      const h = u.get(x.cat) ?? 0, m = Number(r[g].cat), y = Number.isNaN(m) ? a(h) : i.l + (m - o.min) / (o.max - o.min || 1) * d, p = c(x.val), _ = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        Kl(y, p, l, t, _),
        /* @__PURE__ */ s(
          "circle",
          {
            cx: y,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(y, p, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, g);
    })
  );
}
function eS(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: o, categories: a, series: c } = e, f = new Map(a.map((h, m) => [h, m])), u = (h) => {
    if (!t.stack) return i.min;
    let m = 0;
    for (let y = 0; y < n; y++) {
      const p = c[y];
      if (p?.stack !== t.stack) continue;
      const _ = p.data.find(
        (b) => String(b[p.categoryProperty] ?? "") === h
      );
      _ && (m += Number(_[p.valueProperty]) || 0);
    }
    return m;
  }, x = r.map((h) => {
    const m = f.get(h.cat) ?? 0, y = u(h.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(y + h.val)}`;
  }).join(" "), g = r.map((h) => {
    const m = f.get(h.cat) ?? 0, y = u(h.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(y)}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      t.type === "area" && /* @__PURE__ */ s(
        "path",
        {
          d: `${x} L ${d(r.length - 1)} ${o(u(r[r.length - 1].cat))} L ${d(0)} ${o(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      ZN(e, t, r),
      /* @__PURE__ */ s(
        "path",
        {
          d: x,
          fill: "none",
          stroke: l,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: XN(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ s("path", { d: g, fill: "none", stroke: "transparent" }),
      r.map((h, m) => {
        const y = f.get(h.cat) ?? 0, p = u(h.cat), _ = d(y), b = o(p + h.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          Kl(_, b, l, t, 4),
          /* @__PURE__ */ s(
            "rect",
            {
              x: _ - 12,
              y: b - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                _,
                b,
                `${t.title ?? h.cat}: ${ys(e, h.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, h.cat, h.val, h.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: _,
              y: b - 8,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: ys(e, h.val)
            }
          )
        ] }, m);
      })
    ] })
  );
}
function tS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, xFor: c, yFor: f, categories: u, series: x } = e, g = new Map(u.map((m, y) => [m, y])), h = t.type === "bar";
  return Vn(
    n,
    t,
    r.map((m, y) => {
      const p = g.get(m.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const T = x[k];
          if (T?.stack !== t.stack) continue;
          const R = T.data.find(
            (L) => String(L[T.categoryProperty] ?? "") === m.cat
          );
          R && (_ += Number(R[T.valueProperty]) || 0);
        }
      const b = _ + m.val, N = typeof m.min == "number" && !Number.isNaN(m.min) && typeof m.max == "number" && !Number.isNaN(m.max), v = x.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, $ = d / Math.max(1, u.length), S = h ? 18 : Math.max(12, $ / (t.stack ? 1 : x.length) - 4), C = h ? i.l + _ / (a.max - a.min || 1) * d : c(p) - S / 2 + (t.stack ? 0 : n % v * S), A = h ? i.t + p * o / Math.max(1, u.length) + 4 : f(N ? _ + m.max : b), z = h ? N ? (m.max - m.min) / (a.max - a.min || 1) * d : m.val / (a.max - a.min || 1) * d : S - 4, M = h ? 16 : N ? f(_ + m.min) - f(_ + m.max) : f(_) - f(b), E = h ? i.l + (_ + (N ? m.min : 0)) / (a.max - a.min || 1) * d : C, w = h ? i.t + p * o / Math.max(1, u.length) + 4 : A;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "rect",
          {
            x: E,
            y: w,
            width: h ? z : S - 4,
            height: M,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              E + (h ? z : S) / 2,
              w,
              `${t.title ?? m.cat}: ${ys(e, m.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: E + (h ? z : S) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: ys(e, m.val)
          }
        )
      ] }, y);
    })
  );
}
function nS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = i.l + d / 2, g = i.t + o * 0.78, h = Math.min(d, o) * 0.36, m = 135, y = 270, p = r.reduce(($, S) => $ + (Number(S.val) || 0), 0), _ = a.max - a.min || 1, b = Math.min(1, Math.max(0, (p - a.min) / _)), N = ($, S) => {
    const [C, A] = [
      x + h * Math.cos(Ut($)),
      g + h * Math.sin(Ut($))
    ], [z, M] = [
      x + h * Math.cos(Ut(S)),
      g + h * Math.sin(Ut(S))
    ], E = S - $ > 180 ? 1 : 0;
    return `M ${C} ${A} A ${h} ${h} 0 ${E} 1 ${z} ${M}`;
  }, v = Number(p.toFixed(2));
  return Vn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + y),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      b > 0 && /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + y * b),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s("text", { x, y: g - 4, textAnchor: "middle", className: ft.gaugeValue, children: v }),
      /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + y),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(x, g - h, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", p, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ s(
        "text",
        {
          x,
          y: g + h + 18,
          textAnchor: "middle",
          className: ft.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Gl(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, o = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (u) => Ut(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: o, angleFor: c, vertexFor: (u, x) => {
    const g = c(u);
    return [
      i + o * x * Math.cos(g),
      d + o * x * Math.sin(g)
    ];
  } };
}
function rS(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Gl(e);
  return /* @__PURE__ */ D("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
function sS(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: x, vertexFor: g } = Gl(e), h = e.scale.max || 1, m = (p) => r.find((_) => _.cat === p)?.val ?? 0, y = i.map((p, _) => {
    const b = Math.min(1, Math.max(0, m(p) / h)), [N, v] = g(_, b);
    return `${N},${v}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      /* @__PURE__ */ s(
        "polygon",
        {
          points: y,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((p, _) => {
        const b = Math.min(1, Math.max(0, m(p) / h)), [N, v] = g(_, b), [$, S] = g(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
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
                const C = r.find((A) => A.cat === p);
                C && e.handleClick(t, C.cat, C.val, C.item);
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
function oS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, tooltipVisible: a, showTip: c, hideTip: f } = e, u = r, x = Math.max(1, ...u.map((m) => Number(m.val) || 0)), g = o / Math.max(1, u.length), h = i.l + d / 2;
  return Vn(
    n,
    t,
    u.map((m, y) => {
      const _ = Math.max(0, Number(m.val) || 0) / x * d, b = u[y + 1], N = b ? Math.max(0, Number(b.val) || 0) / x * d : _ * 0.7, v = i.t + y * g + 2, $ = Math.max(4, g - 6), S = 1 - y * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: `M ${h - _ / 2} ${v} L ${h + _ / 2} ${v} L ${h + N / 2} ${v + $} L ${h - N / 2} ${v + $} Z`,
            fill: l,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(h, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: h,
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
      ] }, y);
    })
  );
}
function lS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = [];
  t.data.forEach((b) => {
    const N = t.rowProperty ? String(b[t.rowProperty] ?? "") : "All";
    x.includes(N) || x.push(N);
  });
  const g = r.map((b) => b.val).filter((b) => Number.isFinite(b)), h = g.length ? Math.min(...g) : 0, m = g.length ? Math.max(...g) : 1, y = d / Math.max(1, a.length), p = o / Math.max(1, x.length), _ = (b) => m === h ? 0.6 : 0.15 + 0.85 * ((b - h) / (m - h));
  return Vn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      x.map((b, N) => /* @__PURE__ */ s(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * p + p / 2 + 4,
          textAnchor: "end",
          className: ft.tickLabel,
          children: b
        },
        b
      )),
      r.map((b, N) => {
        const v = t.data[N], $ = a.indexOf(b.cat), S = x.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if ($ < 0 || S < 0) return null;
        const C = i.l + $ * y, A = i.t + S * p;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "rect",
            {
              x: C + 1,
              y: A + 1,
              width: Math.max(1, y - 2),
              height: Math.max(1, p - 2),
              fill: l,
              fillOpacity: _(b.val),
              onMouseEnter: () => c && f(C + y / 2, A, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: C + y / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: b.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function aS(e, t, n) {
  const r = YN(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return JN(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return QN(e, t, n, r, l);
    case "line":
    case "area":
      return eS(e, t, n, r, l);
    case "gauge":
      return nS(e, t, n, r, l);
    case "radar":
      return sS(e, t, n, r, l);
    case "funnel":
      return oS(e, t, n, r, l);
    case "heatmap":
      return lS(e, t, n, r, l);
    default:
      return tS(e, t, n, r, l);
  }
}
function ZO({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: i = !0,
  stacked100Percent: d = !1,
  tooltipVisible: o = !0,
  onSeriesClick: a,
  ariaLabel: c = "Chart",
  className: f
}) {
  const [u, x] = q(
    null
  ), g = Oe(() => {
    const E = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const k of w.data) E.add(String(k[w.categoryProperty] ?? ""));
    return [...E];
  }, [e]), h = Oe(() => {
    if (!d) return e;
    const E = /* @__PURE__ */ new Map();
    for (const w of e)
      if (w.stack)
        for (const k of w.data) {
          const T = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = Number(k[w.valueProperty]);
          Number.isNaN(R) || E.set(T, (E.get(T) ?? 0) + R);
        }
    return e.map((w) => w.stack ? {
      ...w,
      data: w.data.map((k) => {
        const T = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = E.get(T) ?? 0, L = Number(k[w.valueProperty]);
        return {
          ...k,
          [w.valueProperty]: R > 0 && !Number.isNaN(L) ? L / R * 100 : 0
        };
      })
    } : w);
  }, [e, d]), m = Oe(() => {
    const E = h.flatMap((k) => k.data.map((T) => Number(T[k.valueProperty]))).filter((k) => !Number.isNaN(k)), w = /* @__PURE__ */ new Map();
    for (const k of h) {
      if (!k.stack) continue;
      let T = w.get(k.stack);
      T || w.set(k.stack, T = /* @__PURE__ */ new Map());
      for (const R of k.data) {
        const L = String(R[k.categoryProperty] ?? ""), j = Number(R[k.valueProperty]);
        Number.isNaN(j) || T.set(L, (T.get(L) ?? 0) + j);
      }
    }
    for (const k of w.values()) E.push(...k.values());
    return E;
  }, [h]), y = r?.min ?? (m.length ? Math.min(0, ...m) : 0), p = r?.max ?? (m.length ? Math.max(...m) : 10), _ = Oe(
    () => VN(y, p, r?.step),
    [y, p, r?.step]
  ), b = { t: 16, r: 16, b: 40, l: 56 }, N = t - b.l - b.r, v = n - b.t - b.b, $ = (E) => b.l + E / Math.max(1, g.length - 1) * N, S = (E) => b.t + (1 - (E - _.min) / (_.max - _.min || 1)) * v, C = (E, w) => w.color ?? hl[E % hl.length], A = e.some((E) => Wl.has(E.type)), z = e.some((E) => GN.has(E.type)), M = {
    categories: g,
    scale: _,
    pad: b,
    plotW: N,
    plotH: v,
    xFor: $,
    yFor: S,
    colorFor: C,
    tooltipVisible: o,
    percent: d,
    showTip: (E, w, k) => x({ x: E, y: w, text: k }),
    hideTip: () => x(null),
    handleClick: (E, w, k, T) => a?.({
      seriesTitle: E.title ?? "",
      category: w,
      value: k,
      item: T
    }),
    series: h
  };
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [ft.root, f].filter(Boolean).join(" "),
      role: "img",
      "aria-label": c,
      "aria-describedby": `${c.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: ft.svg,
            role: "presentation",
            children: [
              A && r?.gridlines !== !1 && _.ticks.map((E) => /* @__PURE__ */ s(
                "line",
                {
                  x1: b.l,
                  x2: b.l + N,
                  y1: S(E),
                  y2: S(E),
                  className: ft.gridline
                },
                E
              )),
              z && l?.gridlines && g.map((E, w) => /* @__PURE__ */ s(
                "line",
                {
                  x1: $(w),
                  x2: $(w),
                  y1: b.t,
                  y2: b.t + v,
                  className: ft.gridline
                },
                w
              )),
              A && _.ticks.map((E) => /* @__PURE__ */ s(
                "text",
                {
                  x: b.l - 8,
                  y: S(E) + 4,
                  textAnchor: "end",
                  className: ft.tickLabel,
                  children: d ? `${E}%` : E
                },
                E
              )),
              z && g.map((E, w) => /* @__PURE__ */ s(
                "text",
                {
                  x: $(w),
                  y: b.t + v + 16,
                  textAnchor: "middle",
                  className: ft.tickLabel,
                  children: E
                },
                E
              )),
              A && r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: b.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${b.t + v / 2})`,
                  className: ft.axisTitle,
                  children: r.title
                }
              ),
              z && l?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: b.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ft.axisTitle,
                  children: l.title
                }
              ),
              e.some((E) => E.type === "radar") && rS(M),
              h.map((E, w) => aS(M, E, w))
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: ft.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ s("div", { className: ft.legend, children: e.map((E, w) => /* @__PURE__ */ D("span", { className: ft.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: ft.swatch,
              style: { backgroundColor: C(w, E) },
              "aria-hidden": "true"
            }
          ),
          E.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: ft.visuallyHidden,
            id: `${c.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: c }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (E) => E.data.map((w, k) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ s("td", { children: E.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: E.rowProperty ? `${String(w[E.rowProperty] ?? "")} / ${String(w[E.categoryProperty] ?? "")}` : String(w[E.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(w[E.valueProperty] ?? "") })
                ] }, `${E.title}-${k}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function JO({ query: e, children: t }) {
  return so(e) ? /* @__PURE__ */ s(pt, { children: t }) : null;
}
function QO({ children: e, className: t }) {
  return /* @__PURE__ */ s("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function e$() {
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
  FS as AIChat,
  rp as ALERT_ICON,
  dO as Accordion,
  GS as Alert,
  jS as ArcGauge,
  _O as AutoComplete,
  JS as AutoGrid,
  iO as Avatar,
  uS as Badge,
  XO as Barcode,
  eO as Body,
  LO as Breadcrumb,
  an as Button,
  dS as Card,
  FO as Carousel,
  ZO as Chart,
  eu as CheckBox,
  mO as CheckBoxList,
  vO as ColorPicker,
  XS as Column,
  AO as ContextMenuProvider,
  $r as DEFAULT_OPERATOR_BY_TYPE,
  fv as DEFAULT_PALETTE,
  ky as DEFAULT_THEMES,
  TS as DataFilter,
  CS as DataGrid,
  AS as DataList,
  wO as DatePicker,
  kl as Dialog,
  LS as DialogProvider,
  fO as DropDown,
  TO as DropZone,
  mS as EmptyState,
  yl as FILTER_OPERATORS,
  zO as FabMenu,
  sr as Field,
  gS as Fieldset,
  Kb as Footer,
  bS as Form,
  hS as FormField,
  WO as Gantt,
  Yb as Header,
  qS as HtmlEditor,
  Me as Icon,
  Qr as Input,
  DS as Label,
  QS as Layout,
  BS as LinearGauge,
  RO as Link,
  pO as ListBox,
  QO as LiveRegion,
  HS as Login,
  US as Markdown,
  yO as Mask,
  JO as MediaQuery,
  v2 as Menu,
  Hl as MenuItem,
  xO as Numeric,
  Lc as Pager,
  MO as PanelMenu,
  DO as PanelMenuItem,
  Sf as Password,
  UO as PickList,
  KO as Pivot,
  KS as PopupProvider,
  IO as ProfileMenu,
  nO as Progress,
  YO as QRCode,
  hO as RadioButtonList,
  kO as Rating,
  YS as Row,
  qO as Scheduler,
  OO as SecurityCode,
  or as Select,
  gO as SelectBar,
  ay as Sidebar,
  tO as SidebarToggle,
  $O as SignaturePad,
  VS as Skeleton,
  NO as Slider,
  bO as SplitButton,
  jO as Splitter,
  ZS as Stack,
  _S as Stat,
  PO as Steps,
  MS as Switch,
  pS as Table,
  cO as Tabs,
  Nl as Text,
  uO as TextArea,
  no as TextBox,
  rO as ThemeSwitcher,
  sO as ThemeToggle,
  SO as TimeSpanPicker,
  GO as Timeline,
  PS as ToastProvider,
  BO as Toc,
  Cy as ToggleButton,
  IS as Tooltip,
  HO as Tree,
  EO as Upload,
  VO as VirtualGrid,
  qc as aggregateValue,
  vl as applyFilters,
  Uc as applyGridState,
  wo as collectGroupKeys,
  nr as columnValue,
  SS as compare,
  $S as custom,
  Bc as cycleSort,
  No as defaultOperatorForType,
  xS as email,
  rl as formatMasked,
  ms as formatValue,
  lO as getAppearance,
  ps as getByPath,
  oO as getTheme,
  Rc as groupItems,
  fS as iconNames,
  xl as matchesFilters,
  kS as maxLength,
  wS as minLength,
  Hc as paginate,
  vS as pattern,
  NS as range,
  p_ as renderMarkdown,
  yS as required,
  OS as requiredTrue,
  gl as resolveVariant,
  Ui as runValidators,
  zy as setAppearance,
  Iy as setTheme,
  Kr as shadeClass,
  lc as sortItems,
  Fc as sortedItems,
  tl as subscribe,
  Wc as toCsv,
  tc as toFilterString,
  oc as toODataFilterString,
  CO as useContextMenu,
  zS as useDialog,
  Hi as useFormContext,
  ES as useFormField,
  e$ as useLiveRegion,
  so as useMediaQuery,
  WS as usePopup,
  aO as useThemeService,
  RS as useToast
};
