import { jsx as o, jsxs as C, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as at, useId as ct, isValidElement as qt, cloneElement as as, useState as W, useRef as le, useEffect as Oe, useCallback as H, useMemo as Ne, useContext as Bn, createContext as cr, Fragment as ls, useLayoutEffect as Ko, useImperativeHandle as $o, Children as Zr } from "react";
function Yr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const ll = "_button_eyvws_1", il = "_filled_eyvws_36", cl = "_flat_eyvws_55", dl = "_outlined_eyvws_58", ul = "_text_eyvws_63", fl = "_loading_eyvws_506", pl = "_spinner_eyvws_509", _l = "_xs_eyvws_525", hl = "_sm_eyvws_531", ml = "_md_eyvws_537", gl = "_lg_eyvws_543", yl = "_xl_eyvws_549", bl = "_iconOnly_eyvws_555", xl = "_fullWidth_eyvws_585", Cn = {
  button: ll,
  filled: il,
  flat: cl,
  outlined: dl,
  text: ul,
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
  loading: fl,
  spinner: pl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: _l,
  sm: hl,
  md: ml,
  lg: gl,
  xl: yl,
  iconOnly: bl,
  fullWidth: xl
};
function vl(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const cn = at(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: a,
      shade: i = "default",
      size: c = "md",
      fullWidth: s = !1,
      iconOnly: l = !1,
      loading: d = !1,
      visible: u = !0,
      className: f,
      disabled: g,
      children: h,
      ...b
    } = t;
    if (u === !1) return null;
    const _ = vl(r, a), m = _.style === "light" || _.style === "dark" ? null : Yr(i), p = [
      Cn.button,
      Cn[_.variant],
      Cn[`style-${_.style}`],
      m ? Cn[m] : null,
      Cn[c],
      s ? Cn.fullWidth : null,
      l ? Cn.iconOnly : null,
      d ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ C(ot, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      h
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...E } = b, T = g || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: p,
          "aria-disabled": T || void 0,
          "aria-busy": d || void 0,
          onClick: (L) => {
            if (T) {
              L.preventDefault();
              return;
            }
            S?.(L);
          },
          ...E,
          children: y
        }
      );
    }
    const { type: x = "button", ...M } = b;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: x,
        className: p,
        disabled: g || d,
        "aria-busy": d || void 0,
        ...M,
        children: y
      }
    );
  }
), wl = "_card_4vcae_1", kl = "_elevated_4vcae_8", Nl = "_filled_4vcae_13", $l = "_outlined_4vcae_18", Sl = "_interactive_4vcae_22", Ol = "_text_4vcae_30", El = "_header_4vcae_46", Tl = "_body_4vcae_53", Ml = "_footer_4vcae_63", Or = {
  card: wl,
  elevated: kl,
  filled: Nl,
  outlined: $l,
  interactive: Sl,
  text: Ol,
  header: El,
  body: Tl,
  footer: Ml
}, T$ = at(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: a,
  visible: i = !0,
  children: c,
  onKeyDown: s,
  ...l
}, d) {
  if (i === !1) return null;
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ C(
      "div",
      {
        ref: d,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          s?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
        },
        className: [Or.card, Or[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Or.header, children: n }),
          /* @__PURE__ */ o("div", { className: Or.body, children: c }),
          r != null && /* @__PURE__ */ o("div", { className: Or.footer, children: r })
        ]
      }
    )
  );
});
function $a(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Cl = "_badge_1fy6d_1", Al = "_xs_1fy6d_21", Dl = "_sm_1fy6d_26", Il = "_md_1fy6d_31", zl = "_lg_1fy6d_36", Ll = "_xl_1fy6d_41", Pl = "_neutral_1fy6d_47", Rl = "_primary_1fy6d_52", jl = "_secondary_1fy6d_61", Bl = "_light_1fy6d_66", Fl = "_base_1fy6d_71", Hl = "_dark_1fy6d_76", Ul = "_info_1fy6d_81", Wl = "_success_1fy6d_86", ql = "_warning_1fy6d_95", Kl = "_danger_1fy6d_104", Gl = "_filled_1fy6d_111", Vl = "_outlined_1fy6d_161", Yl = "_text_1fy6d_213", Er = {
  badge: Cl,
  xs: Al,
  sm: Dl,
  md: Il,
  lg: zl,
  xl: Ll,
  neutral: Pl,
  primary: Rl,
  secondary: jl,
  light: Bl,
  base: Fl,
  dark: Hl,
  info: Ul,
  success: Wl,
  warning: ql,
  danger: Kl,
  filled: Gl,
  outlined: Vl,
  text: Yl,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, M$ = at(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: a = "md",
  className: i,
  visible: c = !0,
  children: s,
  ...l
}, d) {
  if (c === !1) return null;
  const u = t, f = $a(n, "filled"), g = Yr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Er.badge,
        Er[a],
        Er[u],
        Er[f],
        g ? Er[g] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Xl = "_icon_vn4jx_5", Zl = "_xs_vn4jx_24", Jl = "_sm_vn4jx_28", Ql = "_md_vn4jx_23", ei = "_lg_vn4jx_36", ti = "_xl_vn4jx_40", vs = {
  icon: Xl,
  xs: Zl,
  sm: Jl,
  md: Ql,
  lg: ei,
  xl: ti
}, C$ = [
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
], Te = at(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
  const l = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [vs.icon, l ? vs[n] : null, a].filter(Boolean).join(" "),
      style: {
        ...l || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...r === void 0 ? null : { color: r },
        ...i
      },
      "aria-hidden": "true",
      ...c,
      children: t
    }
  );
}), ni = "_stat_sjin9_1", ri = "_label_sjin9_8", oi = "_row_sjin9_16", si = "_value_sjin9_22", ai = "_delta_sjin9_28", li = "_success_sjin9_33", ii = "_danger_sjin9_37", ci = "_neutral_sjin9_41", di = "_hint_sjin9_45", Qn = {
  stat: ni,
  label: ri,
  row: oi,
  value: si,
  delta: ai,
  success: li,
  danger: ii,
  neutral: ci,
  hint: di
}, A$ = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ C(
    "div",
    {
      ref: l,
      className: [Qn.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Qn.label, children: t }),
        /* @__PURE__ */ C("div", { className: Qn.row, children: [
          /* @__PURE__ */ o("div", { className: Qn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Qn.delta, Qn[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: Qn.hint, children: i })
      ]
    }
  );
}), ui = "_wrap_ipozk_1", fi = "_table_ipozk_8", pi = "_caption_ipozk_14", _i = "_none_ipozk_51", hi = "_horizontal_ipozk_57", mi = "_vertical_ipozk_67", gi = "_alternating_ipozk_85", yi = "_start_ipozk_89", bi = "_center_ipozk_93", xi = "_end_ipozk_97", vi = "_empty_ipozk_101", Hn = {
  wrap: ui,
  table: fi,
  caption: pi,
  none: _i,
  horizontal: hi,
  vertical: mi,
  alternating: gi,
  start: yi,
  center: bi,
  end: xi,
  empty: vi
};
function D$({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: a,
  gridLines: i = "default",
  allowAlternatingRows: c = !0,
  className: s,
  visible: l = !0
}) {
  if (l === !1) return null;
  const d = i === "default" || i === "both" ? "" : Hn[i];
  return /* @__PURE__ */ C("div", { className: [Hn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C(
      "table",
      {
        className: [
          Hn.table,
          d,
          c ? Hn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          a != null && /* @__PURE__ */ o("caption", { className: Hn.caption, children: a }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "th",
            {
              className: u.align != null ? Hn[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((u) => /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "td",
            {
              className: f.align != null ? Hn[f.align] : void 0,
              children: f.render != null ? f.render(u) : u[f.key]
            },
            f.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Hn.empty, children: r })
  ] });
}
const wi = "_emptyState_1swxw_1", ki = "_icon_1swxw_13", Ni = "_title_1swxw_18", $i = "_description_1swxw_24", Si = "_action_1swxw_30", Tr = {
  emptyState: wi,
  icon: ki,
  title: Ni,
  description: $i,
  action: Si
};
function I$({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ C("div", { className: [Tr.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Tr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Tr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Tr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Tr.action, children: r })
  ] });
}
const Oi = "_field_149oz_1", Ei = "_label_149oz_8", Ti = "_required_149oz_14", Mi = "_hint_149oz_19", Ci = "_error_149oz_24", Mr = {
  field: Oi,
  label: Ei,
  required: Ti,
  hint: Mi,
  error: Ci
};
function ir({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: a,
  error: i,
  children: c,
  className: s,
  visible: l = !0
}) {
  const d = r ?? a, u = ct(), f = ct(), g = ct();
  if (l === !1) return null;
  const h = i != null ? f : d != null ? g : null, b = typeof c == "function" ? c({ inputId: u, hintId: g, errorId: f }) : c, _ = qt(b) && typeof b.props.id == "string" ? b.props.id : void 0, w = _ ?? t ?? u, m = qt(b) && (h != null || _ == null && typeof b.type == "string"), p = _ != null || t != null || m, y = m && qt(b) ? as(b, {
    id: w,
    "aria-describedby": h != null ? [
      b.props["aria-describedby"],
      h
    ].filter((N) => typeof N == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ C("div", { className: [Mr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ C(
      "label",
      {
        className: Mr.label,
        htmlFor: p ? w : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Mr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    i != null ? /* @__PURE__ */ o("div", { id: f, className: Mr.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: g, className: Mr.hint, children: d }) : null
  ] });
}
const Ai = "_formfield_6e25e_1", Di = "_content_6e25e_8", Ii = "_floating_6e25e_43", zi = "_label_6e25e_111", Li = "_start_6e25e_132", Pi = "_required_6e25e_169", Ri = "_end_6e25e_175", ji = "_filled_6e25e_192", Bi = "_flat_6e25e_199", Fi = "_helper_6e25e_206", Hi = "_invalid_6e25e_211", $n = {
  formfield: Ai,
  content: Di,
  floating: Ii,
  label: zi,
  start: Li,
  required: Pi,
  end: Ri,
  filled: ji,
  flat: Bi,
  helper: Fi,
  invalid: Hi
};
function z$({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: a,
  allowFloatingLabel: i = !0,
  variant: c = "outlined",
  invalid: s = !1,
  required: l = !1,
  children: d,
  className: u,
  visible: f = !0
}) {
  const g = ct(), h = ct();
  if (f === !1) return null;
  const b = a ?? g, _ = typeof d == "function" ? d({
    inputId: b
  }) : d, w = qt(_) ? _.type : null, m = typeof w == "string", p = qt(_) && typeof w != "symbol", y = qt(_) ? _.props : null, N = typeof y?.id == "string" ? y.id : void 0, x = m && qt(_) ? _.type.toLowerCase() : null, M = x != null && (x === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : x === "button" || x === "meter" || x === "output" || x === "progress" || x === "select" || x === "textarea"), S = p && (r != null || s || N == null && M), E = N != null || a != null || S, T = x === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, L = x === "textarea" || x === "input" && (T == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(T)), A = S && qt(_) ? as(
    _,
    {
      id: N ?? b,
      ...i && L && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          h
        ].filter((v) => typeof v == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : _, D = e != null ? /* @__PURE__ */ C(
    "label",
    {
      className: $n.label,
      htmlFor: E ? N ?? b : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: $n.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ C(
    "div",
    {
      className: [
        $n.formfield,
        $n[c],
        i ? $n.floating : null,
        s ? $n.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        i ? null : D,
        /* @__PURE__ */ C("div", { className: $n.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: $n.start, children: t }),
          A,
          i ? D : null,
          n != null && /* @__PURE__ */ o("div", { className: $n.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: h, className: $n.helper, children: r })
      ]
    }
  );
}
const Ui = "_fieldset_8x01p_1", Wi = "_legend_8x01p_11", qi = "_legendText_8x01p_20", Ki = "_toggle_8x01p_24", Gi = "_content_8x01p_45", Vi = "_summary_8x01p_49", er = {
  fieldset: Ui,
  legend: Wi,
  legendText: qi,
  toggle: Ki,
  content: Gi,
  summary: Vi
};
function L$({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: a = !1,
  collapsed: i,
  defaultCollapsed: c = !1,
  summary: s,
  expandTitle: l,
  collapseTitle: d,
  expandAriaLabel: u,
  collapseAriaLabel: f,
  onExpand: g,
  onCollapse: h,
  children: b,
  className: _,
  visible: w = !0
}) {
  const m = ct(), [p, y] = W(c);
  if (w === !1) return null;
  const N = i ?? p, x = a ? `${m}-content` : void 0, M = () => {
    const D = !N;
    i === void 0 && y(D), D ? h?.() : g?.();
  }, S = a || e != null || n != null || t != null, E = a ? N : !1, T = a && N && s != null, L = E ? l ?? "Expand" : d ?? "Collapse", A = E ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ C(
    "fieldset",
    {
      className: [er.fieldset, _].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ o("legend", { className: er.legend, children: a ? /* @__PURE__ */ C(ot, { children: [
          /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              className: er.toggle,
              title: L,
              "aria-label": e == null ? A : void 0,
              "aria-expanded": !E,
              "aria-controls": x,
              onClick: M,
              children: [
                /* @__PURE__ */ o(
                  Te,
                  {
                    icon: E ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Te, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ C(ot, { children: [
          n != null && /* @__PURE__ */ o(Te, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: er.content,
            id: x,
            hidden: E,
            children: b
          }
        ),
        T ? /* @__PURE__ */ o("div", { className: er.summary, children: s }) : null
      ]
    }
  );
}
const Yi = "_form_abp5n_1", Xi = {
  form: Yi
}, Sa = cr(null);
function Zi() {
  const e = Bn(Sa);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function P$({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = W({}), [d, u] = W(0), f = le(s);
  Oe(() => {
    f.current = s;
  });
  const g = H((y) => {
    l(
      (N) => N[y.name] === y ? N : { ...N, [y.name]: y }
    );
  }, []), h = H((y) => {
    l((N) => {
      if (!(y in N)) return N;
      const x = { ...N };
      return delete x[y], x;
    });
  }, []), b = H(() => {
    const y = {};
    for (const N of Object.values(f.current)) {
      const x = N.validate();
      x.length > 0 && (y[N.name] = x);
    }
    return y;
  }, []), _ = H(() => {
    const y = b();
    u((N) => N + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [b, e, t, n]), w = (y) => {
    r != null && a != null || (y.preventDefault(), _());
  }, m = Ne(
    () => ({ registerField: g, unregisterField: h, submit: _, submitCount: d }),
    [g, h, _, d]
  ), p = [Xi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Sa.Provider, { value: m, children: /* @__PURE__ */ o(
    "form",
    {
      className: p,
      onSubmit: w,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const dr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", R$ = (e = "Required") => (t) => dr(t) ? e : null, j$ = (e = "Invalid email") => (t) => dr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, B$ = (e, t = "Invalid format") => (n) => {
  if (dr(n)) return null;
  const r = e.lastIndex;
  e.lastIndex = 0;
  const a = e.test(String(n));
  return e.lastIndex = r, a ? null : t;
}, F$ = (e, t = `Minimum ${e} characters`) => (n) => dr(n) || String(n).length >= e ? null : t, H$ = (e, t = `Maximum ${e} characters`) => (n) => dr(n) || String(n).length <= e ? null : t, U$ = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (dr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, W$ = (e, t = "Values do not match") => (n, r) => {
  if (dr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, q$ = (e = "Required") => (t) => t === !0 ? null : e, K$ = (e) => (t, n) => e(t, n);
function ws(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function G$(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Zi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, u] = W(!1), f = le(() => []);
  Oe(() => {
    f.current = () => ws(t?.validate ?? [], i);
  }), Oe(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]);
  const [g, h] = W(a);
  a !== g && (h(a), a > 0 && (l(!0), u(!1)));
  const b = s && !d ? ws(t?.validate ?? [], i) : [];
  return { value: i, setValue: (w) => {
    c(w), u(!0);
  }, errors: b };
}
const Ji = "_select_1xe98_1", Qi = "_invalid_1xe98_33", ec = "_xs_1xe98_40", tc = "_sm_1xe98_48", nc = "_md_1xe98_56", rc = "_lg_1xe98_62", oc = "_xl_1xe98_68", Io = {
  select: Ji,
  invalid: Qi,
  xs: ec,
  sm: tc,
  md: nc,
  lg: rc,
  xl: oc
}, wr = at(
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...c }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          Io.select,
          Io[t],
          n ? Io.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c,
        children: r != null ? r.map((l) => /* @__PURE__ */ o(
          "option",
          {
            value: l.value,
            disabled: l.disabled,
            children: l.label
          },
          l.value
        )) : a
      }
    );
  }
), Oa = [
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
], Cr = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, sc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function ac(e) {
  return sc.includes(e);
}
function go(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function ks(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function qr(e, t) {
  const n = ks(e), r = ks(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function So(e) {
  if (e.secondOperator == null) return !1;
  if (ac(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Ns(e, t, n) {
  const r = go(t, e.property), a = $s(
    r,
    e.value,
    e.operator,
    n
  );
  if (!So(e)) return a;
  const i = $s(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function $s(e, t, n, r) {
  const a = r === "CaseInsensitive", i = (l) => a && typeof l == "string" ? l.toLowerCase() : l, c = i(e), s = i(t);
  switch (n) {
    case "Equals":
      return c === s || Array.isArray(c) && c.some((l) => i(l) === s);
    case "NotEquals":
      return c !== s && !(Array.isArray(c) && c.some((l) => i(l) === s));
    case "LessThan":
      return qr(c, s) < 0;
    case "LessThanOrEquals":
      return qr(c, s) <= 0;
    case "GreaterThan":
      return qr(c, s) > 0;
    case "GreaterThanOrEquals":
      return qr(c, s) >= 0;
    case "Contains":
      return typeof c == "string" && typeof s == "string" && c.includes(s);
    case "StartsWith":
      return typeof c == "string" && typeof s == "string" && c.startsWith(s);
    case "EndsWith":
      return typeof c == "string" && typeof s == "string" && c.endsWith(s);
    case "DoesNotContain":
      return typeof c == "string" && typeof s == "string" && !c.includes(s);
    case "In":
      return Array.isArray(s) && s.some((l) => i(l) === c);
    case "NotIn":
      return Array.isArray(s) && !s.some((l) => i(l) === c);
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
function is(e) {
  return "filters" in e;
}
function Ea(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (is(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (c) => Ea(e, c, { logicalOperator: i, caseSensitivity: a })
    );
  }
  return t.operator === "Custom", Ns(t, e, a);
}
function Ta(e, t, n = {}) {
  return e.filter((r) => Ea(r, t, n));
}
function lc(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function on(e) {
  return typeof e == "string" ? `"${lc(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(on).join(", ")}]` : `"${String(e)}"`;
}
function ic(e) {
  const t = (a, i) => {
    switch (a) {
      case "Equals":
        return `${e.property}.Equals(${on(i)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${on(i)})`;
      case "LessThan":
        return `${e.property}.LessThan(${on(i)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${on(i)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${on(i)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${on(i)})`;
      case "Contains":
        return `${e.property}.Contains(${on(i)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${on(i)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${on(i)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${on(i)})`;
      case "In":
        return `${e.property}.In(${on(i)})`;
      case "NotIn":
        return `!${e.property}.In(${on(i)})`;
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
  if (!So(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function cc(e) {
  return is(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(cc).filter(Boolean).join(` ${e.operator} `)})` : ic(e);
}
function dc(e) {
  return e.replace(/'/g, "''");
}
const uc = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function fc(e, t) {
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${dc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, u) => {
    const f = typeof u == "string", g = f && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${g} ${uc[d]} ${f && r ? a(i(u)) : i(u)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(u))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(u))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(u))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(u))}))`;
      case "In":
        return Array.isArray(u) ? `${g} in (${u.map((h) => i(h)).join(", ")})` : `${g} in (${i(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${g} in (${u.map((h) => i(h)).join(", ")}))` : `not(${g} in (${i(u)}))`;
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
  if (!So(e))
    return c(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${c(e.operator, e.value)} ${s} ${c(
    l,
    e.secondValue
  )})`;
}
function pc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (is(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => pc(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return fc(e, n);
}
function _c(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const a of t) {
      const i = a.sortOrder === "Ascending" ? 1 : -1, c = qr(
        go(n, a.property),
        go(r, a.property)
      );
      if (c !== 0) return c * i;
    }
    return 0;
  });
}
const hc = "_filter_1dvqt_1", mc = "_rows_1dvqt_9", gc = "_row_1dvqt_9", yc = "_join_1dvqt_21", bc = "_property_1dvqt_30", xc = "_operator_1dvqt_34", vc = "_value_1dvqt_38", wc = "_remove_1dvqt_42", kc = "_bar_1dvqt_58", Nc = "_add_1dvqt_64", $c = "_custom_1dvqt_78", Sc = "_summary_1dvqt_82", Oc = "_second_1dvqt_87", Ec = "_secondAdd_1dvqt_91", Tc = "_addSecond_1dvqt_95", Mc = "_joinSelect_1dvqt_109", vt = {
  filter: hc,
  rows: mc,
  row: gc,
  join: yc,
  property: bc,
  operator: xc,
  value: vc,
  remove: wc,
  bar: kc,
  add: Nc,
  custom: $c,
  summary: Sc,
  second: Oc,
  secondAdd: Ec,
  addSecond: Tc,
  joinSelect: Mc
}, Ar = [
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
function Os({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(ot, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      wr,
      {
        "aria-label": e.title ?? e.name,
        className: vt.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      wr,
      {
        "aria-label": e.title ?? e.name,
        className: vt.value,
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
  const a = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: vt.value,
      ...a,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        r === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function V$({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: a = !1,
  className: i,
  viewChanged: c,
  items: s,
  children: l
}) {
  const [d, u] = W(
    () => r != null && r.length > 0 ? r.map((m, p) => ({ id: p, ...m })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Cr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (m, p) => {
    u(
      (y) => y.map((N) => N.id === m ? { ...N, ...p } : N)
    );
  }, g = () => {
    const m = d[d.length - 1], p = Math.max(0, ...d.map((N) => N.id)) + 1, y = e[0];
    u((N) => [
      ...N,
      {
        id: p,
        property: m?.property ?? y?.name ?? "",
        operator: Cr[e.find(
          (x) => x.name === (m?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (m) => {
    u(
      (p) => p.length > 1 ? p.filter((y) => y.id !== m) : p
    );
  }, b = Ne(() => {
    const m = [];
    for (const p of d) {
      if (p.property === "" || (p.value == null || p.value === "") && !Ar.includes(p.operator)) continue;
      const N = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: x } = p;
      x != null && So(p) && (N.secondOperator = x, N.secondValue = p.secondValue, N.logicalOperator = p.logicalOperator ?? "And"), m.push(N);
    }
    return m;
  }, [d]), _ = Ne(() => s == null || b.length === 0 ? s : Ta(s, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [s, b, t, n]);
  Oe(() => {
    c != null && s != null && c(_ ?? []);
  }, [_]);
  const w = (m) => e.find((p) => p.name === m) ?? { name: m, type: "string" };
  return /* @__PURE__ */ C("div", { className: [vt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: vt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((m, p) => {
      const y = w(m.property), N = a ? [Cr[y.type ?? "string"]] : Oa, x = !Ar.includes(m.operator), M = m.secondOperator != null;
      return /* @__PURE__ */ C(ls, { children: [
        /* @__PURE__ */ C("div", { className: vt.row, children: [
          p > 0 ? /* @__PURE__ */ o("span", { className: vt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            wr,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: vt.property,
              value: m.property,
              onChange: (S) => {
                const E = e.find(
                  (T) => T.name === S.target.value
                );
                f(m.id, {
                  property: S.target.value,
                  operator: Cr[E?.type ?? "string"],
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
          /* @__PURE__ */ o(
            wr,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: vt.operator,
              value: m.operator,
              onChange: (S) => {
                const E = S.target.value;
                f(
                  m.id,
                  Ar.includes(E) ? {
                    operator: E,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: E }
                );
              },
              options: N.map((S) => ({
                value: S,
                label: Ss[S]
              }))
            }
          ),
          x ? /* @__PURE__ */ o(
            Os,
            {
              property: y,
              value: m.value,
              onChange: (S) => f(m.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vt.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => h(m.id),
              children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
            }
          )
        ] }),
        x ? M ? /* @__PURE__ */ C(
          "div",
          {
            className: [vt.row, vt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                wr,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: vt.joinSelect,
                  value: m.logicalOperator ?? "And",
                  onChange: (S) => f(m.id, {
                    logicalOperator: S.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                wr,
                {
                  "aria-label": `Condition ${p + 1} second operator`,
                  className: vt.operator,
                  value: m.secondOperator,
                  onChange: (S) => {
                    const E = S.target.value;
                    f(
                      m.id,
                      Ar.includes(E) ? { secondOperator: E, secondValue: void 0 } : { secondOperator: E }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: Ss[S]
                  }))
                }
              ),
              m.secondOperator == null || !Ar.includes(m.secondOperator) ? /* @__PURE__ */ o(
                Os,
                {
                  property: y,
                  value: m.secondValue,
                  onChange: (S) => f(m.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: vt.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => f(m.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: vt.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: vt.addSecond,
            onClick: () => f(m.id, {
              secondOperator: Cr[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, m.id);
    }) }),
    /* @__PURE__ */ C("div", { className: vt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: vt.add, onClick: g, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: vt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ C("span", { className: vt.summary, "aria-live": "polite", children: [
        _?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Cc = "_pager_1du31_1", Ac = "_alignLeft_1du31_10", Dc = "_alignCenter_1du31_14", Ic = "_alignRight_1du31_18", zc = "_alignJustify_1du31_22", Lc = "_summary_1du31_26", Pc = "_controls_1du31_31", Rc = "_button_1du31_37", jc = "_active_1du31_73", Bc = "_ellipsis_1du31_85", Fc = "_size_1du31_91", Ht = {
  pager: Cc,
  alignLeft: Ac,
  alignCenter: Dc,
  alignRight: Ic,
  alignJustify: zc,
  summary: Lc,
  controls: Pc,
  button: Rc,
  active: jc,
  ellipsis: Bc,
  size: Fc
};
function Hc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Es(e, t) {
  return e.replace("{0}", String(t));
}
function Uc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (s, l) => l + 1);
  const r = Math.floor(n / 2);
  let a = Math.max(1, e - r);
  const i = Math.min(t, a + n - 1);
  a = Math.max(1, i - n + 1);
  const c = [];
  for (let s = a; s <= i; s++) c.push(s);
  return a > 2 && c.unshift("ellipsis"), a > 1 && c.unshift(1), i < t - 1 && c.push("ellipsis"), i < t && c.push(t), c;
}
function Wc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: a,
  pageNumbersCount: i = 5,
  alwaysVisible: c = !1,
  horizontalAlign: s = "left",
  showPagingSummary: l,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: f,
  pageSizeText: g = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: w = "Last page",
  pageTitleFormat: m = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: y,
  onPageSizeChange: N,
  ariaLabel: x = "Pagination",
  className: M,
  visible: S = !0
}) {
  const E = n ?? r, [T, L] = W(E), A = n !== void 0, D = A ? E : T, v = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, D), v), $ = l ?? !0, I = c || v > 1, z = Uc(k, v, i), P = H(
    (ie) => {
      const re = Math.min(Math.max(1, ie), v);
      A || L(re);
      const V = (re - 1) * t;
      y?.({
        page: re,
        skip: V,
        top: t,
        pageCount: v,
        pageSize: t
      });
    },
    [A, y, v, t]
  ), R = s === "center" ? Ht.alignCenter : s === "right" ? Ht.alignRight : s === "justify" ? Ht.alignJustify : Ht.alignLeft, q = {
    count: e,
    pageNumber: k,
    pageSize: t,
    pageCount: v
  }, ae = (ie) => {
    const re = Array.from(
      ie.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), V = re.indexOf(document.activeElement);
    V !== -1 && (ie.key === "ArrowRight" || ie.key === "ArrowDown" ? (ie.preventDefault(), (re[V + 1] ?? re[0])?.focus()) : ie.key === "ArrowLeft" || ie.key === "ArrowUp" ? (ie.preventDefault(), (re[V - 1] ?? re[re.length - 1])?.focus()) : ie.key === "Home" ? (ie.preventDefault(), re[0]?.focus()) : ie.key === "End" && (ie.preventDefault(), re[re.length - 1]?.focus()));
  };
  return S === !1 || !I ? null : /* @__PURE__ */ C(
    "nav",
    {
      className: [Ht.pager, R, M].filter(Boolean).join(" "),
      "aria-label": x,
      children: [
        $ && /* @__PURE__ */ o("span", { className: Ht.summary, "aria-live": "polite", children: f ? f(q) : Hc(u, k, v, e) }),
        /* @__PURE__ */ C(
          "div",
          {
            className: Ht.controls,
            role: "group",
            "aria-label": x,
            onKeyDown: ae,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: k <= 1,
                  onClick: () => P(1),
                  "aria-label": h,
                  title: h,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: k <= 1,
                  onClick: () => P(k - 1),
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              z.map(
                (ie, re) => ie === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${re}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": ie,
                    className: [Ht.button, ie === k ? Ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": ie === k ? "page" : void 0,
                    "aria-label": Es(p, ie),
                    title: Es(m, ie),
                    onClick: () => P(ie),
                    children: ie
                  },
                  ie
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: k >= v,
                  onClick: () => P(k + 1),
                  "aria-label": _,
                  title: _,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: k >= v,
                  onClick: () => P(v),
                  "aria-label": w,
                  title: w,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ C("label", { className: Ht.size, children: [
          /* @__PURE__ */ o("span", { children: g }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (ie) => N?.(Number(ie.target.value)),
              "aria-label": g,
              children: a.map((ie) => /* @__PURE__ */ o("option", { value: ie, children: ie }, ie))
            }
          )
        ] })
      ]
    }
  );
}
function Go(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: a, ...i } = e;
  return /* @__PURE__ */ o(
    Wc,
    {
      page: t,
      showPagingSummary: a,
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
      ...i
    }
  );
}
const Ma = "";
function qc(e, t, n, r, a) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((l) => l.property === s), c = (s, l, d) => {
    const u = t[l];
    if (u === void 0)
      return s.map((_) => ({ type: "row", row: _ }));
    const f = i(u), g = /* @__PURE__ */ new Map(), h = [];
    s.forEach((_) => {
      const w = String(a(_, u) ?? ""), m = g.get(w);
      m ? m.push(_) : (g.set(w, [_]), h.push(w));
    });
    const b = [];
    return h.forEach((_) => {
      const w = g.get(_), m = [...d, _].join(Ma), p = w[0], y = p !== void 0 ? a(p, u) : void 0;
      b.push({
        type: "group",
        group: {
          key: m,
          display: yo(y, f?.format),
          property: u,
          title: f?.title ?? u,
          count: w.length,
          level: l
        }
      }), r.has(m) && b.push(...c(w, l + 1, [...d, _]));
    }), b;
  };
  return c(e, 0, []);
}
function Ts(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), u = [];
    i.forEach((f) => {
      const g = String(n(f, l) ?? ""), h = d.get(g);
      h ? h.push(f) : (d.set(g, [f]), u.push(g));
    }), u.forEach((f) => {
      const g = [...s, f].join(Ma);
      r.add(g), a(d.get(f), c + 1, [...s, f]);
    });
  };
  return a(e, 0, []), r;
}
function to(e, t) {
  return e.property ?? `col-${t}`;
}
function Kc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: a, column: i }) => {
    if (!i.frozen) return;
    n[a] = r === 0 ? "0px" : `${r}px`;
    const c = t[a] ?? i.width ?? "8rem";
    r += parseFloat(c);
  }), n;
}
function Gc(e, t) {
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
function ar(e, t) {
  if (t != null)
    return go(e, t);
}
function yo(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Ms = [
  "Ascending",
  "Descending",
  null
];
function Vc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Ms[(r ? Ms.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Yc(e, t) {
  return _c(e, t);
}
function Xc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), a = Math.min(Math.max(1, t), r), i = (a - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: a,
    total: e.length
  };
}
function Zc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, l]) => ({
      property: s,
      operator: l.operator ?? "Contains",
      value: Gc(
        l.value,
        n.types?.[s] ?? "string"
      )
    })
  ), a = r.length > 0 ? Ta(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Yc(a, t.sorts);
  return {
    ...Xc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Cs(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Jc(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((a) => {
    const i = n(a, t.property);
    if (i == null || i === "") return;
    const c = Number(i);
    Number.isFinite(c) && r.push(c);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((a, i) => a + i, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((a, i) => a + i, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Qc(e, t, n = ar) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, a = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    a.push(
      t.map((c) => r(yo(n(i, c.property), c.format))).join(",")
    );
  }), `${a.join(`\r
`)}\r
`;
}
const ed = "_grid_13rur_1", td = "_toolbar_13rur_8", nd = "_picker_13rur_13", rd = "_pickerButton_13rur_17", od = "_pickerPanel_13rur_31", sd = "_pickerItem_13rur_46", ad = "_groupPanel_13rur_55", ld = "_groupPanelActive_13rur_66", id = "_groupPanelText_13rur_70", cd = "_groupChip_13rur_74", dd = "_groupRemove_13rur_85", ud = "_groupRow_13rur_94", fd = "_groupCell_13rur_98", pd = "_groupToggle_13rur_104", _d = "_editRow_13rur_117", hd = "_editCell_13rur_121", md = "_editInput_13rur_127", gd = "_commandCell_13rur_137", yd = "_commandButton_13rur_144", bd = "_data_13rur_159", xd = "_table_13rur_166", vd = "_header_13rur_172", wd = "_center_13rur_185", kd = "_right_13rur_189", Nd = "_sortButton_13rur_193", $d = "_sortIndicator_13rur_211", Sd = "_sortIndex_13rur_215", Od = "_cell_13rur_226", Ed = "_clickable_13rur_241", Td = "_frozen_13rur_249", Md = "_selected_13rur_255", Cd = "_resizeHandle_13rur_263", Ad = "_filterCell_13rur_281", Dd = "_filterSelect_13rur_290", Id = "_filterInput_13rur_300", zd = "_empty_13rur_311", Ld = "_loading_13rur_317", Pd = "_visuallyHidden_13rur_331", Rd = "_virtualScroller_13rur_340", jd = "_spacerRow_13rur_345", Bd = "_footerRow_13rur_350", Fd = "_footerCell_13rur_354", Hd = "_footerValue_13rur_361", Se = {
  grid: ed,
  toolbar: td,
  picker: nd,
  pickerButton: rd,
  pickerPanel: od,
  pickerItem: sd,
  groupPanel: ad,
  groupPanelActive: ld,
  groupPanelText: id,
  groupChip: cd,
  groupRemove: dd,
  groupRow: ud,
  groupCell: fd,
  groupToggle: pd,
  editRow: _d,
  editCell: hd,
  editInput: md,
  commandCell: gd,
  commandButton: yd,
  data: bd,
  table: xd,
  header: vd,
  center: wd,
  right: kd,
  sortButton: Nd,
  sortIndicator: $d,
  sortIndex: Sd,
  cell: Od,
  clickable: Ed,
  frozen: Td,
  selected: Md,
  resizeHandle: Cd,
  filterCell: Ad,
  filterSelect: Dd,
  filterInput: Id,
  empty: zd,
  loading: Ld,
  visuallyHidden: Pd,
  virtualScroller: Rd,
  spacerRow: jd,
  footerRow: Bd,
  footerCell: Fd,
  footerValue: Hd
}, Ud = {
  Ascending: "ascending",
  Descending: "descending"
};
function As(e, t) {
  return e.filterable ?? t;
}
function Wd(e, t) {
  return e.sortable ?? t;
}
function qd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Y$({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: a = !1,
  showSortIndex: i = !1,
  allowFiltering: c = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: d = !1,
  pageSize: u = 10,
  pageSizeOptions: f,
  pageNumbersCount: g = 5,
  pagerPosition: h = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: _ = !0,
  selectionMode: w = "None",
  selectedKeys: m,
  onSelectionChange: p,
  showColumnPicker: y = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: M = !1,
  allowGrouping: S = !1,
  groupPanelText: E = "Drag a column header here to group",
  groupExpanded: T = !0,
  aggregates: L,
  showExportButton: A = !1,
  exportFileName: D = "grid-data",
  serverMode: v = !1,
  totalCount: k,
  onRangeChange: $,
  virtualize: I = !1,
  virtualRowHeight: z = 40,
  virtualHeight: P = 480,
  editMode: R = "None",
  allowRowCreate: q = !1,
  onRowUpdate: ae,
  onRowCreate: ie,
  onRowDelete: re,
  isLoading: V = !1,
  empty: Ee = "No records found",
  ariaLabel: Q,
  className: J,
  onRowClick: X
}) {
  const ge = Q != null ? `${Q} ` : "", [te, ye] = W([]), [K, $e] = W(
    /* @__PURE__ */ new Map()
  ), [oe, De] = W(1), [me, qe] = W(u), [Je, Ge] = W(
    () => e.map((U, G) => to(U, G))
  ), [Qe, He] = W(
    () => new Set(
      e.map((U, G) => U.visible !== !1 ? to(U, G) : "").filter(Boolean)
    )
  ), [gt, ee] = W({}), [Me, lt] = W(!1), [ze, st] = W([]), [Xe, Tt] = W(
    null
  ), [yt, it] = W(null), [ft, Ve] = W({}), [Mt, se] = W(0), [Le, wt] = W(P), Ct = le(null), bt = le(null), j = Ne(() => {
    const U = /* @__PURE__ */ new Map();
    return e.forEach((G, be) => U.set(to(G, be), G)), U;
  }, [e]), Y = Ne(
    () => Je.filter((U) => Qe.has(U)).map((U) => ({ key: U, column: j.get(U) })).filter(
      (U) => U.column != null
    ),
    [Je, Qe, j]
  ), he = Ne(
    () => Kc(Y, gt),
    [Y, gt]
  ), we = R !== "None" || re != null || q, fe = Ne(() => {
    if (v) {
      const U = k ?? t.length, G = Math.max(1, Math.ceil(U / me));
      return {
        items: [...t],
        filtered: [...t],
        total: U,
        pageCount: G,
        pageNumber: oe,
        pageSize: me,
        sorts: te,
        filters: K
      };
    }
    return Zc(
      t,
      {
        sorts: te,
        filters: K,
        pageNumber: oe,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: d ? me : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: l,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((U) => U.type != null && U.property != null).map((U) => [
            U.property,
            U.type
          ])
        )
      }
    );
  }, [
    t,
    te,
    K,
    oe,
    me,
    l,
    s,
    e,
    v,
    k,
    d
  ]), F = le($);
  Oe(() => {
    F.current = $;
  });
  const pe = Ne(
    () => [...K.entries()].filter(([, U]) => U.value !== "" && U.value !== void 0).map(([U, G]) => ({
      property: U,
      operator: G.operator ?? Cs(
        e.find((be) => be.property === U)?.type ?? "string"
      ),
      value: G.value ?? ""
    })),
    [K, e]
  );
  Oe(() => {
    !v || F.current == null || F.current({
      start: (oe - 1) * me,
      count: me,
      pageNumber: oe,
      pageSize: me,
      sorts: te,
      filters: pe,
      logicalOperator: l
    });
  }, [
    v,
    oe,
    me,
    te,
    pe,
    l
  ]);
  const Re = Ne(() => new Set(ze), [ze]), Ie = Ne(() => Xe || (T ? Ts(fe.items, ze, ar) : /* @__PURE__ */ new Set()), [Xe, T, fe.items, ze]), It = Ne(
    () => qc(fe.items, ze, e, Ie, ar),
    [fe.items, ze, e, Ie]
  ), et = Ne(
    () => ze.length > 0 ? Y.filter(
      (U) => U.column.property == null || !Re.has(U.column.property)
    ) : Y,
    [Y, ze, Re]
  ), mn = (U) => {
    U !== "" && ye(Vc(te, U, { multi: a }));
  }, Nn = (U, G) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(U, G), xe;
    }), De(1);
  }, Z = (U) => {
    qe(U), De(1);
  }, ce = (U) => {
    if (w === "None") return;
    const G = n(U), be = m ?? [];
    let xe;
    w === "Single" ? xe = be.length === 1 && be[0] === G ? [] : [G] : xe = be.includes(G) ? be.filter((nt) => nt !== G) : [...be, G], p?.(xe);
  }, _e = (U) => {
    X?.(U);
  }, ke = (U, G, be) => {
    Ct.current = { key: U, startX: G, startWidth: be };
  }, ve = (U) => {
    const G = Ct.current;
    if (!G) return;
    const be = U - G.startX, xe = Math.max(48, G.startWidth + be);
    ee((nt) => ({ ...nt, [G.key]: `${xe}px` }));
  }, Ae = () => {
    Ct.current = null;
  }, Ye = (U) => {
    bt.current = U;
  }, Fe = (U) => {
    const G = bt.current;
    bt.current = null, !(!G || G === U) && Ge((be) => {
      const xe = [...be], nt = xe.indexOf(G), zt = xe.indexOf(U);
      return nt < 0 || zt < 0 ? be : (xe.splice(nt, 1), xe.splice(zt, 0, G), xe);
    });
  }, dt = (U) => {
    He((G) => {
      const be = new Set(G);
      return be.has(U) ? be.delete(U) : be.add(U), be;
    });
  }, xt = () => {
    const U = bt.current;
    if (bt.current = null, !U || !S) return;
    const be = j.get(U)?.property;
    be && (st(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Tt(null));
  }, je = (U) => {
    st((G) => G.filter((be) => be !== U)), Tt(null);
  }, tt = (U) => {
    Tt((G) => {
      const be = G ?? (T ? Ts(fe.items, ze, ar) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(U) ? xe.delete(U) : xe.add(U), xe;
    });
  }, ut = (U) => {
    const G = {};
    e.forEach((be) => {
      be.property && (G[be.property] = ar(U, be.property));
    }), Ve(G), it(String(n(U)));
  }, Jt = () => {
    const U = {};
    e.forEach((G) => {
      G.property && G.type === "boolean" && (U[G.property] = !1);
    }), Ve(U), it("__new__");
  }, At = () => {
    it(null), Ve({});
  }, dn = (U) => {
    if (yt === "__new__") {
      const G = Object.fromEntries(
        e.filter((be) => be.property).map((be) => [be.property, ft[be.property]])
      );
      ie?.(G);
    } else if (U != null) {
      const G = { ...U, ...ft };
      ae?.(U, G);
    }
    At();
  }, Zn = d && (h === "Top" || h === "TopAndBottom"), Jn = d && (h === "Bottom" || h === "TopAndBottom"), Fn = c && e.some((U) => As(U, c)), To = (U, G, be) => U.render ? U.render(G, { index: 0 }) : yo(ar(G, U.property), U.format), Mo = (U) => {
    const G = [Se.cell];
    return U.align === "center" && G.push(Se.center), U.align === "right" && G.push(Se.right), U.frozen && G.push(Se.frozen), G.join(" ");
  }, gn = v ? t : fe.filtered, Jr = () => {
    const U = Qc(
      gn,
      et.map((nt) => nt.column)
    ), G = new Blob([`\uFEFF${U}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(G), xe = document.createElement("a");
    xe.href = be, xe.download = `${D}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, yn = It.length, Bt = Ne(() => {
    if (!I || yn === 0)
      return { start: 0, end: yn, top: 0, bottom: 0 };
    const U = 5, G = Math.max(
      0,
      Math.floor(Mt / z) - U
    ), be = Math.ceil(Le / z) + U * 2, xe = Math.min(yn, G + be), nt = G * z, zt = Math.max(0, (yn - xe) * z);
    return { start: G, end: xe, top: nt, bottom: zt };
  }, [I, yn, Mt, z, Le]), Sr = et.length + (we ? 1 : 0);
  return /* @__PURE__ */ C("div", { className: [Se.grid, J].filter(Boolean).join(" "), children: [
    Zn && /* @__PURE__ */ o(
      Go,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: f,
        pageNumbersCount: g,
        showSummary: b,
        showPageSizeSelector: _,
        ariaLabel: `${ge}${Jn ? "Pagination (top)" : "Pagination"}`,
        onPageChange: De,
        onPageSizeChange: Z
      }
    ),
    (S || q || y || A) && /* @__PURE__ */ C("div", { className: Se.toolbar, children: [
      S && // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- drop target for drag-to-group (pointer affordance)
      /* @__PURE__ */ o(
        "div",
        {
          className: [
            Se.groupPanel,
            ze.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: S ? (U) => U.preventDefault() : void 0,
          onDrop: S ? xt : void 0,
          children: ze.length > 0 ? ze.map((U) => {
            const G = e.find((be) => be.property === U)?.title ?? U;
            return /* @__PURE__ */ C("span", { className: Se.groupChip, children: [
              G,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Se.groupRemove,
                  onClick: () => je(U),
                  "aria-label": `Remove group by ${G}`,
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ] }, U);
          }) : /* @__PURE__ */ o("span", { className: Se.groupPanelText, children: E })
        }
      ),
      q && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Jt,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ C("div", { className: Se.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Se.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Me,
            onClick: () => lt((U) => !U),
            children: N
          }
        ),
        Me && /* @__PURE__ */ o(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((U, G) => {
              const be = to(U, G);
              return /* @__PURE__ */ C("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Qe.has(be),
                    onChange: () => dt(be)
                  }
                ),
                U.title ?? U.property
              ] }, be);
            })
          }
        )
      ] }),
      A && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Jr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ C(
      "div",
      {
        className: [Se.data, I ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: I ? { maxHeight: P } : void 0,
        onScroll: I ? (U) => {
          se(U.currentTarget.scrollTop), wt(U.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ C(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (I ? yn : fe.total) + 1,
              "aria-label": Q,
              "aria-busy": V || void 0,
              children: [
                /* @__PURE__ */ C("colgroup", { children: [
                  et.map(({ key: U, column: G }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: gt[U] ?? G.width,
                        minWidth: G.minWidth,
                        maxWidth: G.maxWidth
                      }
                    },
                    U
                  )),
                  we && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ C("thead", { children: [
                  /* @__PURE__ */ C("tr", { children: [
                    et.map(({ key: U, column: G }) => {
                      const be = Wd(G, r), xe = te.find(($t) => $t.property === G.property), nt = xe ? te.indexOf(xe) + 1 : 0, zt = G.align ?? "left";
                      return /* @__PURE__ */ C(
                        "th",
                        {
                          "aria-sort": be && xe ? Ud[xe.sortOrder] : "none",
                          className: [
                            Se.header,
                            zt === "center" ? Se.center : "",
                            zt === "right" ? Se.right : "",
                            G.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: G.frozen ? { left: he[U] } : void 0,
                          scope: "col",
                          draggable: M || S || void 0,
                          onDragStart: M || S ? ($t) => {
                            $t.dataTransfer && ($t.dataTransfer.effectAllowed = "move"), Ye(U);
                          } : void 0,
                          onDragOver: M ? ($t) => $t.preventDefault() : void 0,
                          onDrop: M ? () => Fe(U) : void 0,
                          children: [
                            be ? /* @__PURE__ */ C(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => G.property != null && mn(G.property),
                                "aria-label": xe ? xe.sortOrder === "Ascending" ? `Sort ${G.title ?? G.property} descending` : `Sort ${G.title ?? G.property} ascending` : `Sort ${G.title ?? G.property} ascending`,
                                children: [
                                  G.title ?? G.property,
                                  xe && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: xe.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  nt > 1 && i && /* @__PURE__ */ o("span", { className: Se.sortIndex, children: nt })
                                ]
                              }
                            ) : G.title ?? G.property,
                            x && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- pointer-drag column resize; keyboard column resize is not implemented
                            /* @__PURE__ */ o(
                              "span",
                              {
                                className: Se.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${G.title ?? G.property}`,
                                onMouseDown: ($t) => {
                                  $t.preventDefault(), $t.stopPropagation();
                                  const bn = gt[U] ?? G.width, Dt = bn ? parseFloat(bn) : 96;
                                  ke(
                                    U,
                                    $t.clientX,
                                    Number.isFinite(Dt) ? Dt : 96
                                  );
                                },
                                onMouseMove: ($t) => {
                                  Ct.current?.key === U && ve($t.clientX);
                                },
                                onMouseUp: Ae,
                                onMouseLeave: () => {
                                  Ct.current?.key === U && Ae();
                                }
                              }
                            )
                          ]
                        },
                        U
                      );
                    }),
                    we && /* @__PURE__ */ o("th", { className: Se.header, scope: "col", children: "Actions" })
                  ] }),
                  Fn && /* @__PURE__ */ o("tr", { children: et.map(({ key: U, column: G }) => {
                    if (!As(G, c))
                      return /* @__PURE__ */ o("td", { className: Se.filterCell }, U);
                    const be = K.get(G.property ?? "");
                    return /* @__PURE__ */ C("td", { className: Se.filterCell, children: [
                      /* @__PURE__ */ C(
                        "label",
                        {
                          className: Se.visuallyHidden,
                          htmlFor: `df-${G.property}`,
                          children: [
                            "Filter ",
                            G.title ?? G.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${G.property}`,
                          className: Se.filterSelect,
                          value: be?.operator ?? Cs(G.type ?? "string"),
                          onChange: (xe) => Nn(G.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${G.title ?? G.property} operator`,
                          children: Oa.filter((xe) => xe !== "Custom").map(
                            (xe) => /* @__PURE__ */ o("option", { value: xe, children: xe }, xe)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: Se.filterInput,
                          value: be?.value ?? "",
                          onChange: (xe) => Nn(G.property ?? "", {
                            ...be,
                            value: xe.target.value
                          }),
                          placeholder: `Filter ${G.title ?? G.property}`,
                          "aria-label": `${G.title ?? G.property} value`
                        }
                      )
                    ] }, U);
                  }) })
                ] }),
                /* @__PURE__ */ C("tbody", { children: [
                  yt === "__new__" && /* @__PURE__ */ C("tr", { className: Se.editRow, children: [
                    et.map(({ key: U, column: G }) => /* @__PURE__ */ o("td", { className: Se.editCell, children: G.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Se.editInput,
                        type: G.type === "number" ? "number" : G.type === "boolean" ? "checkbox" : "text",
                        checked: G.type === "boolean" ? !!ft[G.property] : void 0,
                        value: G.type === "boolean" ? void 0 : String(ft[G.property] ?? ""),
                        onChange: (be) => Ve((xe) => ({
                          ...xe,
                          [G.property]: G.type === "boolean" ? be.target.checked : be.target.value
                        })),
                        "aria-label": `${G.title ?? G.property} (new)`
                      }
                    ) }, U)),
                    we && /* @__PURE__ */ C("td", { className: Se.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: () => dn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: At,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  Bt.top > 0 && /* @__PURE__ */ o("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Sr,
                      style: { height: Bt.top }
                    }
                  ) }),
                  It.slice(Bt.start, Bt.end).map((U, G) => {
                    const be = Bt.start + G, xe = I ? be + 2 : void 0;
                    if (U.type === "group" && U.group) {
                      const Dt = Ie.has(U.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ o("td", { colSpan: Sr, className: Se.groupCell, children: /* @__PURE__ */ C(
                            "button",
                            {
                              type: "button",
                              className: Se.groupToggle,
                              "aria-expanded": Dt,
                              style: {
                                paddingInlineStart: `${U.group.level * 16}px`
                              },
                              onClick: () => tt(U.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Dt ? "▼" : "▶" }),
                                U.group.title,
                                ": ",
                                U.group.display,
                                " (",
                                U.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${U.group.key}`
                      );
                    }
                    const nt = U.row, zt = n(nt), $t = (m ?? []).includes(zt), bn = yt != null && yt === String(zt);
                    return /* @__PURE__ */ C(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          X || w !== "None" ? Se.clickable : "",
                          $t ? Se.selected : "",
                          bn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": w !== "None" ? $t : void 0,
                        onClick: X || w !== "None" ? (Dt) => {
                          qd(Dt.target) || (_e(nt), ce(nt));
                        } : void 0,
                        children: [
                          et.map(({ key: Dt, column: kt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Mo(kt),
                              style: kt.frozen ? { left: he[Dt] } : void 0,
                              children: bn && kt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: kt.type === "number" ? "number" : kt.type === "boolean" ? "checkbox" : "text",
                                  checked: kt.type === "boolean" ? !!ft[kt.property] : void 0,
                                  value: kt.type === "boolean" ? void 0 : String(ft[kt.property] ?? ""),
                                  onChange: (Qt) => Ve((Co) => ({
                                    ...Co,
                                    [kt.property]: kt.type === "boolean" ? Qt.target.checked : Qt.target.value
                                  })),
                                  "aria-label": `${kt.title ?? kt.property} (edit)`
                                }
                              ) : To(kt, nt)
                            },
                            Dt
                          )),
                          we && /* @__PURE__ */ o("td", { className: Se.commandCell, children: bn ? /* @__PURE__ */ C(ot, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => dn(nt),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: At,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ C(ot, { children: [
                            R !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => ut(nt),
                                children: "Edit"
                              }
                            ),
                            re && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => re(nt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      zt
                    );
                  }),
                  Bt.bottom > 0 && /* @__PURE__ */ o("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Sr,
                      style: { height: Bt.bottom }
                    }
                  ) })
                ] }),
                L && L.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ C("tr", { className: Se.footerRow, children: [
                  et.map(({ key: U, column: G }) => {
                    const be = L.filter(
                      (xe) => xe.property === G.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Se.footerCell,
                          G.align === "right" ? Se.right : "",
                          G.align === "center" ? Se.center : ""
                        ].filter(Boolean).join(" "),
                        children: be.map((xe, nt) => /* @__PURE__ */ C(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              yo(
                                Jc(gn, xe, ar),
                                xe.format
                              )
                            ]
                          },
                          `${xe.property}-${xe.type}-${nt}`
                        ))
                      },
                      U
                    );
                  }),
                  we && /* @__PURE__ */ o("td", { className: Se.footerCell })
                ] }) })
              ]
            }
          ),
          fe.items.length === 0 && !V && /* @__PURE__ */ o("div", { className: Se.empty, children: Ee }),
          V && /* @__PURE__ */ o("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Jn && /* @__PURE__ */ o(
      Go,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: f,
        pageNumbersCount: g,
        showSummary: b,
        showPageSizeSelector: _,
        ariaLabel: `${ge}${Zn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: De,
        onPageSizeChange: Z
      }
    )
  ] });
}
const Kd = "_wrap_avqds_1", Gd = "_grid_avqds_7", Vd = "_stacked_avqds_13", Yd = "_item_avqds_19", Xd = "_empty_avqds_25", Dr = {
  wrap: Kd,
  grid: Gd,
  stacked: Vd,
  item: Yd,
  empty: Xd
};
function X$({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: a,
  emptyMessage: i = "No records found",
  emptyTemplate: c,
  loadingTemplate: s,
  isLoading: l = !1,
  showPageSizeSelector: d = !0,
  className: u,
  ariaLabel: f = "Data list"
}) {
  const [g, h] = W(1), [b, _] = W(t), w = e.length, m = Math.max(1, Math.ceil(w / b)), p = Math.min(Math.max(1, g), m), y = Ne(() => {
    const x = (p - 1) * b;
    return e.slice(x, x + b);
  }, [e, p, b]), N = r ? Dr.grid : Dr.stacked;
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Dr.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        l && s != null ? s : w === 0 ? c ?? /* @__PURE__ */ o("div", { className: Dr.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: y.map((x, M) => /* @__PURE__ */ o("div", { className: Dr.item, children: a ? a(x, M) : String(x) }, M)) }),
        /* @__PURE__ */ o(
          Go,
          {
            ariaLabel: `${f} Pagination`,
            pageNumber: p,
            pageSize: b,
            count: w,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: h,
            onPageSizeChange: (x) => {
              _(x), h(1);
            }
          }
        )
      ]
    }
  );
}
const Zd = "_label_1qfpw_1", Jd = {
  label: Zd
}, Z$ = at(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: a,
      className: [Jd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Qd = "_textbox_oly89_1", eu = "_invalid_oly89_37", tu = "_xs_oly89_44", nu = "_sm_oly89_50", ru = "_md_oly89_56", ou = "_lg_oly89_62", su = "_xl_oly89_68", zo = {
  textbox: Qd,
  invalid: eu,
  xs: tu,
  sm: nu,
  md: ru,
  lg: ou,
  xl: su
}, cs = at(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: a = !0,
    type: i = "text",
    ...c
  }, s) {
    return a === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: s,
        type: i,
        "data-size": t,
        className: [
          zo.textbox,
          zo[t],
          n ? zo.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c
      }
    );
  }
), no = cs, au = "_checkbox_1bb6c_1", lu = {
  checkbox: au
}, iu = at(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = le(null);
    return Oe(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (c) => {
          i.current = c, typeof a == "function" ? a(c) : a && (a.current = c);
        },
        type: "checkbox",
        className: [lu.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), cu = {
  switch: "_switch_19gf1_1"
}, J$ = at(function({ className: t, ...n }, r) {
  const [a, i] = W(
    !!n.defaultChecked
  ), c = n.checked ?? a;
  return /* @__PURE__ */ o(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": c,
      className: [cu.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && i(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), du = "_trigger_1jlxf_1", uu = "_tooltip_1jlxf_7", fu = "_top_1jlxf_34", pu = "_right_1jlxf_40", _u = "_bottom_1jlxf_46", hu = "_left_1jlxf_52", mu = "_arrow_1jlxf_58", gu = "_floating_1jlxf_70", Un = {
  trigger: du,
  tooltip: uu,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: fu,
  right: pu,
  bottom: _u,
  left: hu,
  arrow: mu,
  floating: gu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, ro = 8;
function yu(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + ro,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - ro,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + ro,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - ro,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function Q$({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = ct(), l = le(null), d = le(null), u = le(() => {
  }), [f, g] = W(!1), [h, b] = W(null), _ = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, w = () => {
    _(), l.current = window.setTimeout(() => {
      l.current = null, g(!0);
    }, r);
  }, m = () => {
    _(), g(!1);
  };
  if (Oe(() => () => _(), []), Oe(() => {
    if (!f || a == null) return;
    const y = window.setTimeout(() => g(!1), a);
    return () => window.clearTimeout(y);
  }, [f, a]), Oe(() => {
    if (i || !f) return;
    const y = (N) => {
      N.key === "Escape" && m();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [i, f]), Oe(() => {
    if (!i) return;
    let y = null, N = null;
    const x = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, M = () => {
      x(), N = null, b(null);
    };
    u.current = M;
    const S = (v) => {
      x(), N = v, y = window.setTimeout(() => {
        y = null, b(v);
      }, r);
    }, E = (v) => v instanceof Element ? v.closest(i) : null, T = (v) => {
      const k = E(v.target);
      !k || k === N || S(k);
    }, L = (v) => {
      const k = E(v.target);
      if (!k || k !== N) return;
      const $ = v.relatedTarget;
      $ instanceof Element && k.contains($) || M();
    }, A = (v) => {
      v.key === "Escape" && M();
    }, D = () => M();
    return document.addEventListener("mouseover", T), document.addEventListener("mouseout", L), document.addEventListener("focusin", T), document.addEventListener("focusout", L), document.addEventListener("keydown", A), document.addEventListener("scroll", D, !0), window.addEventListener("resize", D), () => {
      x(), document.removeEventListener("mouseover", T), document.removeEventListener("mouseout", L), document.removeEventListener("focusin", T), document.removeEventListener("focusout", L), document.removeEventListener("keydown", A), document.removeEventListener("scroll", D, !0), window.removeEventListener("resize", D), N = null, b(null);
    };
  }, [i, r]), Oe(() => {
    if (!i || h === null || a == null) return;
    const y = window.setTimeout(() => u.current(), a);
    return () => window.clearTimeout(y);
  }, [i, h, a]), Ko(() => {
    const y = h;
    if (!y) return;
    const N = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [N, s].filter(Boolean).join(" ")
    ), () => {
      N == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", N);
    };
  }, [h, s]), Ko(() => {
    const y = d.current, N = h;
    !y || !N || Object.assign(
      y.style,
      yu(N.getBoundingClientRect(), n)
    );
  }, [h, n]), i)
    return h ? /* @__PURE__ */ C(
      "span",
      {
        ref: d,
        role: "tooltip",
        id: s,
        className: [
          Un.tooltip,
          Un[n],
          Un.floating,
          c
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: Un.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const p = qt(t) ? as(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      f ? s : null
    ].filter((y) => typeof y == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ C(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: w,
        onMouseLeave: m,
        onFocus: w,
        onBlur: m,
        children: [
          p,
          f && /* @__PURE__ */ C(
            "span",
            {
              role: "tooltip",
              id: s,
              className: [Un.tooltip, Un[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: Un.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const bu = "_dialog_1t7pw_1", xu = "_sm_1t7pw_104", vu = "_resizable_1t7pw_110", wu = "_md_1t7pw_113", ku = "_lg_1t7pw_117", Nu = "_header_1t7pw_121", $u = "_title_1t7pw_132", Su = "_description_1t7pw_139", Ou = "_close_1t7pw_146", Eu = "_body_1t7pw_176", Tu = "_footer_1t7pw_188", xn = {
  dialog: bu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: xu,
  resizable: vu,
  md: wu,
  lg: ku,
  header: Nu,
  title: $u,
  description: Su,
  close: Ou,
  body: Eu,
  footer: Tu
};
function Ca({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: a,
  footer: i,
  size: c = "md",
  width: s,
  height: l,
  closeOnOverlayClick: d = !0,
  closeOnEsc: u = !0,
  resizable: f = !1,
  side: g = null,
  showCloseButton: h = !0,
  showMask: b = !0,
  canClose: _,
  className: w
}) {
  const m = le(null), p = ct(), y = ct(), N = le(t);
  Oe(() => {
    N.current = t;
  });
  const x = le(_);
  Oe(() => {
    x.current = _;
  });
  const M = le(u);
  Oe(() => {
    M.current = u;
  });
  const S = le(!1), E = le(!1), T = H(() => {
    if (S.current) return;
    const D = x.current?.();
    if (D instanceof Promise) {
      D.then((v) => {
        v && !S.current && (S.current = !0, N.current());
      });
      return;
    }
    D !== !1 && (S.current = !0, N.current());
  }, []), L = H(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    N.current();
  }, []), A = H(
    (D) => {
      if (D.key !== "Tab" || !m.current) return;
      const v = Array.from(
        m.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        ($) => $.offsetWidth > 0 || $.offsetHeight > 0 || $ === document.activeElement
      );
      if (v.length === 0) {
        D.preventDefault();
        return;
      }
      const k = v.indexOf(document.activeElement);
      if (D.shiftKey) {
        if (k <= 0) {
          D.preventDefault();
          const $ = v[v.length - 1];
          $ && $.focus();
        }
      } else if (k === -1 || k === v.length - 1) {
        D.preventDefault();
        const $ = v[0];
        $ && $.focus();
      }
    },
    []
  );
  return Oe(() => {
    const D = m.current;
    if (D)
      if (e && !D.open) {
        const v = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        D.showModal(), (D.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? D.querySelector("button"))?.focus();
        const $ = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const I = (z) => {
          z.preventDefault(), M.current && T();
        };
        return D.addEventListener("cancel", I), () => {
          D.removeEventListener("cancel", I), document.body.style.overflow = $, v?.focus({ preventScroll: !0 });
        };
      } else !e && D.open && (E.current = S.current, S.current = !1, D.close());
  }, [e, T]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button. The dialog's own
  // onKeyDown={keepFocusInside} satisfies the keyboard-listener rules.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click closes the dialog; ESC and the close button are the keyboard paths
  /* @__PURE__ */ C(
    "dialog",
    {
      ref: m,
      className: [
        xn.dialog,
        xn[c],
        f ? xn.resizable : null,
        g ? xn[`side-${g}`] : null,
        b === !1 ? xn["no-mask"] : null,
        w
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: L,
      onClick: (D) => {
        D.target === m.current && d && T();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": r ? y : void 0,
      onKeyDown: A,
      children: [
        n && /* @__PURE__ */ C("header", { className: xn.header, children: [
          /* @__PURE__ */ C("div", { children: [
            /* @__PURE__ */ o("h2", { id: p, className: xn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: y, className: xn.description, children: r })
          ] }),
          h !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: xn.close,
              onClick: () => {
                T();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: xn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: xn.footer, children: i })
      ]
    }
  );
}
const Mu = "_typography_1jy8x_1", Cu = "_h1_1jy8x_39", Au = "_h2_1jy8x_45", Du = "_h3_1jy8x_51", Iu = "_h4_1jy8x_57", zu = "_h5_1jy8x_63", Lu = "_h6_1jy8x_69", Pu = "_button_1jy8x_99", Ru = "_caption_1jy8x_106", ju = "_overline_1jy8x_112", Lo = {
  typography: Mu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Cu,
  h2: Au,
  h3: Du,
  h4: Iu,
  h5: zu,
  h6: Lu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Pu,
  caption: Ru,
  overline: ju,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Bu = {
  displayH1: "h1",
  displayH2: "h2",
  displayH3: "h3",
  displayH4: "h4",
  displayH5: "h5",
  displayH6: "h6",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  // Radzen parity: subtitles render as h6.
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  overline: "span"
}, Fu = {
  displayH1: "display-1",
  displayH2: "display-2",
  displayH3: "display-3",
  displayH4: "display-4",
  displayH5: "display-5",
  displayH6: "display-6",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "subtitle-1",
  subtitle2: "subtitle-2",
  body1: "body-1",
  body2: "body-2",
  button: "button",
  caption: "caption",
  overline: "overline"
}, Hu = {
  div: "div",
  span: "span",
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  a: "a",
  button: "button",
  pre: "pre",
  strong: "strong"
}, Uu = {
  left: "align-left",
  right: "align-right",
  center: "align-center",
  justify: "align-justify",
  start: "align-left",
  end: "align-right",
  justifyAll: "align-justify"
}, Aa = at(function({
  textStyle: t = "body1",
  tagName: n = "auto",
  textAlign: r,
  text: a,
  visible: i = !0,
  className: c,
  children: s,
  ...l
}, d) {
  if (i === !1) return null;
  const u = n === "auto" ? Bu[t] : Hu[n];
  return /* @__PURE__ */ o(
    u,
    {
      ref: d,
      className: [
        Lo.typography,
        Lo[Fu[t]],
        r ? Lo[Uu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Da = cr(null);
function eS() {
  const e = Bn(Da);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function tS({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = le(0), i = () => (a.current += 1, a.current), c = le([]);
  Oe(() => {
    c.current = t;
  });
  const s = (g) => {
    const h = c.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!g) : h.kind === "alert" ? h.resolve() : h.resolve(g), n((b) => b.slice(1)));
  }, l = Ne(
    () => ({
      confirm: (g = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "confirm", options: g, resolve: h }
        ]);
      }),
      alert: (g = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "alert", options: g, resolve: h }
        ]);
      }),
      open: (g = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "custom", options: g, resolve: h }
        ]);
      }),
      openSide: ({ position: g, showMask: h = !0, ...b }) => new Promise((_) => {
        n((w) => [
          ...w,
          {
            seq: i(),
            kind: "custom",
            options: { ...b, side: g, showMask: h },
            resolve: _
          }
        ]);
      }),
      close: (g) => s(g),
      closeAll: () => {
        n((g) => (g.forEach((h) => {
          h.kind === "confirm" ? h.resolve(!1) : h.kind === "alert" ? h.resolve() : h.resolve(void 0);
        }), []));
      },
      refresh: () => r((g) => g + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    []
  ), d = t[0];
  function u(g) {
    d && (d.kind === "confirm" ? d.resolve(!!g) : d.kind === "alert" ? d.resolve() : d.resolve(g), n((h) => h.slice(1)));
  }
  const f = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ C(Da.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ca,
      {
        open: t.length > 0,
        onClose: () => u(!1),
        title: d?.kind === "custom" ? f?.title ?? "Dialog" : d?.options.title ?? (d?.kind === "confirm" ? "Confirm" : "Alert"),
        description: f?.description,
        size: d?.kind === "custom" ? f?.size : d?.options.size,
        width: f?.width,
        height: f?.height,
        side: f?.side ?? null,
        showCloseButton: f?.showCloseButton,
        showMask: f?.showMask,
        closeOnOverlayClick: f?.closeOnOverlayClick,
        closeOnEsc: f?.closeOnEsc,
        className: f?.className,
        footer: d?.kind === "confirm" ? /* @__PURE__ */ C(ot, { children: [
          /* @__PURE__ */ o(cn, { variant: "text", onClick: () => u(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            cn,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => u(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? f?.footer ?? /* @__PURE__ */ o(cn, { variant: "text", onClick: () => u(void 0), children: "Close" }) : /* @__PURE__ */ o(cn, { onClick: () => u(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? f?.content : d?.options.message != null && /* @__PURE__ */ o(Aa, { textStyle: "body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Wu = "_viewport_11t1p_1", qu = "_topLeft_11t1p_13", Ku = "_topRight_11t1p_20", Gu = "_bottomLeft_11t1p_25", Vu = "_toast_11t1p_30", Yu = "_leaving_11t1p_61", Xu = "_info_11t1p_77", Zu = "_success_11t1p_86", Ju = "_warning_11t1p_95", Qu = "_danger_11t1p_104", ef = "_content_11t1p_113", tf = "_title_11t1p_118", nf = "_description_11t1p_141", rf = "_dismiss_11t1p_148", of = "_actions_11t1p_169", sf = "_action_11t1p_169", af = "_cancel_11t1p_177", lf = "_progress_11t1p_215", tn = {
  viewport: Wu,
  topLeft: qu,
  topRight: Ku,
  bottomLeft: Gu,
  toast: Vu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Yu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Xu,
  success: Zu,
  warning: Ju,
  danger: Qu,
  content: ef,
  title: tf,
  description: nf,
  dismiss: rf,
  actions: of,
  action: sf,
  cancel: af,
  progress: lf,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Ia = cr(null);
function nS() {
  const e = Bn(Ia);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const cf = 200, df = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function rS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = W([]), [s, l] = W(!1), d = le([]), u = le(/* @__PURE__ */ new Map()), f = le(!1), g = le(0), h = (k) => {
    f.current = k, l(k);
  }, b = H((k) => {
    const $ = u.current.get(k);
    $ && (window.clearTimeout($.timeoutId), $.remaining = Math.max(
      0,
      $.remaining - (Date.now() - $.startedAt)
    ));
  }, []), _ = H((k) => {
    const $ = u.current.get(k);
    $ && (window.clearTimeout($.timeoutId), u.current.delete(k));
  }, []), w = H(
    (k) => {
      _(k), c(($) => {
        const I = $.filter((z) => z.id !== k);
        return d.current = I, I;
      });
    },
    [_]
  ), m = H(
    (k) => {
      const $ = d.current.find((I) => I.id === k);
      !$ || $.leaving || ($.onAutoClose?.(), w(k));
    },
    [w]
  ), p = H(
    (k) => {
      const $ = u.current.get(k);
      !$ || $.remaining <= 0 || ($.startedAt = Date.now(), $.timeoutId = window.setTimeout(() => m(k), $.remaining));
    },
    [m]
  ), y = H(() => {
    f.current || u.current.forEach((k, $) => b($)), h(!0);
  }, [b]), N = H(() => {
    u.current.forEach((k, $) => p($)), h(!1);
  }, [p]);
  Oe(() => {
    if (!r) return;
    const k = () => {
      document.hidden ? y() : N();
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, [r, y, N]);
  const x = H(
    (k) => {
      const $ = d.current.find((I) => I.id === k);
      !$ || $.leaving || ($.onDismiss?.(), c((I) => {
        const z = I.map(
          (P) => P.id === k ? { ...P, leaving: !0 } : P
        );
        return d.current = z, z;
      }), window.setTimeout(() => w(k), cf));
    },
    [w]
  ), M = H(
    (k) => {
      if (k.durationMs <= 0) return;
      const $ = {
        remaining: k.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(k.id, $), f.current || p(k.id);
    },
    [p]
  ), S = H(
    (k) => {
      const $ = d.current.find((z) => z.id === k.id), I = {
        id: k.id ?? ++g.current,
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
      c((z) => {
        const P = $ ? z.map(
          (R) => R.id === I.id ? { ...I, leaving: !1 } : R
        ) : [...z, I];
        return d.current = P, P;
      }), $ && _(I.id), M(I);
    },
    [t, n, M, _]
  ), E = H(
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
  ), T = H(
    (k) => ($, I) => E({ severity: k, summary: $, detail: I }),
    [E]
  ), L = Ne(
    () => ({
      toast: S,
      notify: E,
      notifyInfo: T("info"),
      notifySuccess: T("success"),
      notifyWarning: T("warning"),
      notifyError: T("danger")
    }),
    [S, E, T]
  ), A = Ne(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((k) => k.position)])),
    [n, i]
  ), D = r ? y : void 0, v = r ? N : void 0;
  return /* @__PURE__ */ C(Ia.Provider, { value: L, children: [
    e,
    A.map((k) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- hover listeners pause auto-dismiss; the live region itself is not interactive
      /* @__PURE__ */ o(
        "div",
        {
          className: [tn.viewport, tn[df[k]], a].filter(Boolean).join(" "),
          "aria-live": "polite",
          "aria-atomic": "false",
          onMouseEnter: D,
          onMouseLeave: v,
          children: i.filter(($) => $.position === k).map(($) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click-to-close is a pointer affordance; the dismiss button provides the keyboard path
            /* @__PURE__ */ C(
              "div",
              {
                role: $.severity === "danger" ? "alert" : "status",
                "data-paused": s ? "true" : "false",
                "data-clickable": $.closeOnClick ? "true" : "false",
                className: [
                  tn.toast,
                  tn[$.severity],
                  $.leaving ? tn.leaving : ""
                ].filter(Boolean).join(" "),
                onClick: $.click || $.closeOnClick ? () => {
                  $.click?.($.payload), $.closeOnClick && x($.id);
                } : void 0,
                children: [
                  /* @__PURE__ */ C("div", { className: tn.content, children: [
                    /* @__PURE__ */ o("div", { className: tn.title, children: $.title }),
                    $.description && /* @__PURE__ */ o("div", { className: tn.description, children: $.description }),
                    ($.action || $.cancel) && /* @__PURE__ */ C("div", { className: tn.actions, children: [
                      $.action && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.action,
                          onClick: () => {
                            $.action?.onClick?.(), x($.id);
                          },
                          children: $.action.label
                        }
                      ),
                      $.cancel && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.cancel,
                          onClick: () => {
                            $.cancel?.onClick?.(), x($.id);
                          },
                          children: $.cancel.label
                        }
                      )
                    ] })
                  ] }),
                  $.dismissible && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: tn.dismiss,
                      onClick: () => x($.id),
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                    }
                  ),
                  $.showProgress && $.durationMs > 0 && /* @__PURE__ */ o(
                    "div",
                    {
                      className: tn.progress,
                      style: { animationDuration: `${$.durationMs}ms` }
                    }
                  )
                ]
              },
              $.id
            )
          ))
        },
        k
      )
    ))
  ] });
}
const uf = "_navigator_848v2_3", ff = "_track_848v2_9", pf = "_spark_848v2_19", _f = "_window_848v2_28", hf = "_handle_848v2_37", Wn = {
  navigator: uf,
  track: ff,
  spark: pf,
  window: _f,
  handle: hf
};
function Ds(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), c = Math.max(n, Math.min(r, t));
  if (c - i < a) {
    const s = (i + c) / 2;
    i = Math.max(n, s - a / 2), c = Math.min(r, i + a), i = Math.max(n, c - a);
  }
  return i > c && ([i, c] = [c, i]), { start: i, end: c };
}
function oS({
  min: e = 0,
  max: t = 100,
  value: n,
  defaultValue: r,
  onChange: a,
  data: i,
  minSpan: c = 0,
  ariaLabel: s = "Range navigator",
  className: l
}) {
  const d = n !== void 0, [u, f] = W(
    () => r && Ds(
      r.start,
      r.end,
      e,
      t,
      c
    ) || {
      start: e,
      end: t
    }
  ), g = d && n ? n : u, h = le(null), b = le(null), _ = H(
    (E) => {
      const T = Ds(E.start, E.end, e, t, c);
      d || f(T), a?.(T);
    },
    [d, e, t, c, a]
  ), w = H(
    (E) => {
      const T = b.current;
      if (!T) return e;
      const L = T.getBoundingClientRect(), A = L.width > 0 ? (E - L.left) / L.width : 0;
      return e + Math.max(0, Math.min(1, A)) * (t - e || 1);
    },
    [e, t]
  ), m = H(
    (E) => (Math.max(e, Math.min(t, E)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  Oe(() => {
    const E = (L) => {
      const A = h.current;
      if (!A) return;
      const D = w(L.clientX);
      if (A.mode === "start") _({ start: D, end: g.end });
      else if (A.mode === "end") _({ start: g.start, end: D });
      else {
        const v = g.end - g.start, k = D - A.grabOffset;
        _({ start: k, end: k + v });
      }
    }, T = () => {
      h.current = null;
    };
    return document.addEventListener("pointermove", E), document.addEventListener("pointerup", T), () => {
      document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", T);
    };
  }, [_, w, g]);
  const p = (E, T) => {
    T.preventDefault(), T.target.focus?.(), h.current = { mode: E, grabOffset: 0 };
  }, y = (E) => {
    const T = w(E.clientX);
    if (T >= g.start && T <= g.end)
      h.current = { mode: "pan", grabOffset: T - g.start };
    else {
      const L = Math.abs(T - g.start), A = Math.abs(T - g.end);
      L <= A ? _({ start: T, end: g.end }) : _({ start: g.start, end: T });
    }
  }, N = (t - e || 1) / 100, x = (E) => (T) => {
    const L = T.shiftKey ? N * 10 : N;
    T.key === "ArrowLeft" || T.key === "ArrowDown" ? (T.preventDefault(), _(
      E === "start" ? { start: g.start - L, end: g.end } : { start: g.start, end: g.end - L }
    )) : T.key === "ArrowRight" || T.key === "ArrowUp" ? (T.preventDefault(), _(
      E === "start" ? { start: g.start + L, end: g.end } : { start: g.start, end: g.end + L }
    )) : T.key === "Home" ? (T.preventDefault(), _(
      E === "start" ? { start: e, end: g.end } : { start: g.start, end: t }
    )) : T.key === "End" && (T.preventDefault(), _(
      E === "start" ? { start: g.end - c, end: g.end } : { start: g.start, end: t }
    ));
  }, M = m(g.start), S = Math.max(0, m(g.end) - M);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ C("div", { ref: b, className: Wn.track, onPointerDown: y, children: [
        i && i.length > 1 && /* @__PURE__ */ o(
          "svg",
          {
            className: Wn.spark,
            viewBox: "0 0 100 24",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: /* @__PURE__ */ o(
              "polyline",
              {
                points: i.map((E, T) => {
                  const L = T / (i.length - 1) * 100, A = Math.max(...i), D = Math.min(...i), v = A === D ? 12 : 22 - (E - D) / (A - D) * 20;
                  return `${L},${v}`;
                }).join(" "),
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1,
                vectorEffect: "non-scaling-stroke"
              }
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: Wn.window,
            style: { left: `${M}%`, width: `${S}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            tabIndex: 0,
            "aria-label": "Window start",
            "aria-valuemin": e,
            "aria-valuemax": t,
            "aria-valuenow": Math.round(g.start * 100) / 100,
            className: [Wn.handle, Wn.handleStart].filter(Boolean).join(" "),
            style: { left: `${M}%` },
            onPointerDown: (E) => p("start", E),
            onKeyDown: x("start")
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            tabIndex: 0,
            "aria-label": "Window end",
            "aria-valuemin": e,
            "aria-valuemax": t,
            "aria-valuenow": Math.round(g.end * 100) / 100,
            className: [Wn.handle, Wn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${M + S}%` },
            onPointerDown: (E) => p("end", E),
            onKeyDown: x("end")
          }
        )
      ] })
    }
  );
}
const mf = "_gauge_pyq6q_3", gf = "_value_pyq6q_11", yf = "_tick_pyq6q_16", Pn = {
  gauge: mf,
  value: gf,
  tick: yf
}, oo = 150, Is = 240;
function zs(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Ls(e, t, n, r, a) {
  const [i, c] = zs(e, t, n, r), [s, l] = zs(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function bf(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const a of t)
    e >= a.offset && (r = a.color);
  return r;
}
function sS({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: a,
  colorStops: i,
  size: c = 200,
  showValue: s = !0,
  formatValue: l = (f) => String(Math.round(f * 100) / 100),
  ariaLabel: d = "Gauge",
  className: u
}) {
  const f = n - t || 1, g = Math.max(0, Math.min(1, (e - t) / f)), h = "var(--dx-border-color)", b = a ?? "var(--dx-primary-color)", _ = 100, w = 96, m = 80, p = oo + Is * g;
  return /* @__PURE__ */ C(
    "div",
    {
      role: "meter",
      "aria-label": d,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, u].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ C("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ls(_, w, m, oo, oo + Is),
              fill: "none",
              stroke: h,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          g > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Ls(_, w, m, oo, p),
              fill: "none",
              stroke: bf(g, i, b),
              strokeWidth: r,
              strokeLinecap: "round"
            }
          )
        ] }),
        s && /* @__PURE__ */ o("div", { className: Pn.value, children: l(e) })
      ]
    }
  );
}
function za(e, t, n, r) {
  if (n <= 0) return [];
  if (r && r > 0) {
    const a = Math.floor((t - e) / r + 1e-9);
    return Array.from(
      { length: a + 1 },
      (i, c) => Number((e + c * r).toFixed(6))
    );
  }
  return n === 1 ? [e] : Array.from(
    { length: n },
    (a, i) => e + (t - e) * i / (n - 1)
  );
}
const Vo = (e) => new Intl.NumberFormat(void 0, { maximumFractionDigits: 2 }).format(e);
function kr(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Ps(e, t, n, r, a) {
  const [i, c] = kr(e, t, n, r), [s, l] = kr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function aS({
  value: e,
  min: t = 0,
  max: n = 100,
  startAngle: r = 0,
  endAngle: a = 360,
  ticks: i = {},
  ranges: c = [],
  pointers: s = [],
  color: l,
  size: d = 200,
  showValue: u = !0,
  formatValue: f = (b) => String(Math.round(b * 100) / 100),
  ariaLabel: g = "Gauge",
  className: h
}) {
  const b = n - t || 1, _ = (D) => Math.max(0, Math.min(1, (D - t) / b)), m = a - r >= 360 ? r + 359.999 : a, p = (D) => r + (m - r) * _(D), y = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: x = 8, step: M, showLabels: S = !0 } = i, E = 100, T = 100, L = 78, A = (D, v, k) => {
    const [$, I] = kr(E, T, L - 14, p(D));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: E,
        y1: T,
        x2: $,
        y2: I,
        stroke: v,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, k);
  };
  return /* @__PURE__ */ C(
    "div",
    {
      role: "meter",
      "aria-label": g,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, h].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ C("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ps(E, T, L, r, m),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((D, v) => /* @__PURE__ */ o(
            "path",
            {
              d: Ps(
                E,
                T,
                L,
                p(Math.max(t, D.from)),
                p(Math.min(n, D.to))
              ),
              fill: "none",
              stroke: D.color,
              strokeWidth: 12
            },
            `range-${v}`
          )),
          za(t, n, x, M).map((D, v) => {
            const [k, $] = kr(E, T, L - 10, p(D)), [I, z] = kr(E, T, L - 16, p(D)), [P, R] = kr(E, T, L - 26, p(D));
            return /* @__PURE__ */ C("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: k,
                  y1: $,
                  x2: I,
                  y2: z,
                  stroke: N,
                  strokeWidth: 1.5
                }
              ),
              S && /* @__PURE__ */ o(
                "text",
                {
                  x: P,
                  y: R + 4,
                  textAnchor: "middle",
                  className: Pn.tick,
                  children: Vo(D)
                }
              )
            ] }, v);
          }),
          A(e, y, "value"),
          s.map(
            (D, v) => A(D.value, D.color ?? y, `extra-${v}`)
          ),
          /* @__PURE__ */ o("circle", { cx: E, cy: T, r: 7, fill: y })
        ] }),
        u && /* @__PURE__ */ o("div", { className: Pn.value, children: f(e) })
      ]
    }
  );
}
function lS({
  value: e,
  min: t = 0,
  max: n = 100,
  orientation: r = "horizontal",
  ticks: a = {},
  ranges: i = [],
  color: c,
  length: s,
  thickness: l = 20,
  showValue: d = !0,
  formatValue: u = (h) => String(Math.round(h * 100) / 100),
  ariaLabel: f = "Gauge",
  className: g
}) {
  const h = n - t || 1, b = r === "vertical", _ = s ?? (b ? 220 : 280), { count: w = 5, step: m, showLabels: p = !0 } = a, y = c ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", x = 8, M = (A) => {
    const v = (Math.max(t, Math.min(n, A)) - t) / h;
    return b ? _ - x - v * (_ - x * 2) : x + v * (_ - x * 2);
  }, S = () => za(t, n, w, m).map((A, D) => {
    const v = M(A);
    return /* @__PURE__ */ C("g", { children: [
      b ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: v,
          x2: 0,
          y2: v,
          stroke: N,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: v,
          y1: -6,
          x2: v,
          y2: 0,
          stroke: N,
          strokeWidth: 1.5
        }
      ),
      p && (b ? /* @__PURE__ */ o("text", { x: -10, y: v + 4, textAnchor: "end", className: Pn.tick, children: Vo(A) }) : /* @__PURE__ */ o("text", { x: v, y: -10, textAnchor: "middle", className: Pn.tick, children: Vo(A) }))
    ] }, D);
  }), E = () => i.map((A, D) => {
    const v = M(A.from), k = M(A.to), $ = Math.min(v, k), I = Math.abs(k - v);
    return b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: $,
        width: l,
        height: I,
        fill: A.color,
        opacity: 0.35
      },
      D
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: $,
        y: -l / 2,
        width: I,
        height: l,
        fill: A.color,
        opacity: 0.35
      },
      D
    );
  }), T = M(e), L = /* @__PURE__ */ C("g", { children: [
    E(),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: x,
        width: l,
        height: _ - x * 2,
        rx: l / 2,
        fill: "none",
        stroke: N,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x,
        y: -l / 2,
        width: _ - x * 2,
        height: l,
        rx: l / 2,
        fill: "none",
        stroke: N,
        strokeWidth: 2
      }
    ),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: T,
        width: l,
        height: _ - x - T,
        rx: l / 2,
        fill: y
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x,
        y: -l / 2,
        width: Math.max(0, T - x),
        height: l,
        rx: l / 2,
        fill: y
      }
    ),
    b ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${T} L ${-l / 2 - 2} ${T - 5} L ${-l / 2 - 2} ${T + 5} Z`,
        fill: y
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${T} ${-l / 2 - 10} L ${T - 5} ${-l / 2 - 2} L ${T + 5} ${-l / 2 - 2} Z`,
        fill: y
      }
    ),
    S()
  ] });
  return /* @__PURE__ */ C(
    "div",
    {
      role: "meter",
      "aria-label": f,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, g].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ o(
          "svg",
          {
            width: l + 64,
            height: _ + 8,
            viewBox: `${-l / 2 - 56} -16 ${l + 64} ${_ + 24}`,
            "aria-hidden": "true",
            children: L
          }
        ) : /* @__PURE__ */ o(
          "svg",
          {
            width: _,
            height: l + 48,
            viewBox: `0 -24 ${_} ${l + 56}`,
            "aria-hidden": "true",
            children: L
          }
        ),
        d && /* @__PURE__ */ o("div", { className: Pn.value, children: u(e) })
      ]
    }
  );
}
const xf = "_chat_1apnf_3", vf = "_messages_1apnf_9", wf = "_message_1apnf_9", kf = "_user_1apnf_29", Nf = "_assistant_1apnf_35", $f = "_system_1apnf_40", Sf = "_typing_1apnf_46", Of = "_inputRow_1apnf_51", pr = {
  chat: xf,
  messages: vf,
  message: wf,
  user: kf,
  assistant: Nf,
  system: $f,
  typing: Sf,
  inputRow: Of
};
function iS({
  messages: e = [],
  onSend: t,
  placeholder: n = "Type a message…",
  sendText: r = "Send",
  inputLabel: a = "Message",
  ariaLabel: i = "Chat",
  messageTemplate: c,
  inputTemplate: s,
  loading: l = !1,
  disabled: d = !1,
  className: u
}) {
  const [f, g] = W(""), h = l || d, b = f.trim().length > 0 && !h, _ = (m) => {
    m.preventDefault();
    const p = f.trim();
    !p || h || (g(""), t?.(p));
  }, w = /* @__PURE__ */ C("form", { className: pr.inputRow, onSubmit: (m) => {
    _(m);
  }, children: [
    /* @__PURE__ */ o(
      cs,
      {
        value: f,
        placeholder: n,
        "aria-label": a,
        disabled: h,
        onChange: (m) => g(m.target.value)
      }
    ),
    /* @__PURE__ */ o(cn, { type: "submit", disabled: !b, loading: l, children: r })
  ] });
  return /* @__PURE__ */ C(
    "div",
    {
      className: [pr.chat, u].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ C("div", { className: pr.messages, children: [
          e.map(
            (m, p) => c ? /* @__PURE__ */ o("div", { children: c(m, p) }, p) : /* @__PURE__ */ o(
              "div",
              {
                className: [pr.message, pr[m.role]].filter(Boolean).join(" "),
                children: m.content
              },
              p
            )
          ),
          l && /* @__PURE__ */ o("div", { className: pr.typing, children: "…" })
        ] }),
        s ? s(w) : w
      ]
    }
  );
}
const Ef = "_wrapper_1ulz6_1", Tf = "_input_1ulz6_8", Mf = "_invalid_1ulz6_38", Cf = "_toggle_1ulz6_45", Af = "_xs_1ulz6_80", Df = "_sm_1ulz6_86", If = "_md_1ulz6_92", zf = "_lg_1ulz6_98", Lf = "_xl_1ulz6_104", Ir = {
  wrapper: Ef,
  input: Tf,
  invalid: Mf,
  toggle: Cf,
  xs: Af,
  sm: Df,
  md: If,
  lg: zf,
  xl: Lf
}, Pf = at(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    showLabel: i = "Show password",
    hideLabel: c = "Hide password",
    ...s
  }, l) {
    const [d, u] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ C("div", { className: Ir.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: d ? "text" : "password",
            disabled: a,
            className: [
              Ir.input,
              Ir[t],
              n ? Ir.invalid : null,
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
            className: Ir.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ o(Te, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Rf = "_login_30qie_3", jf = "_title_30qie_9", Bf = "_remember_30qie_14", Ff = "_link_30qie_21", zr = {
  login: Rf,
  title: jf,
  remember: Bf,
  link: Ff
}, ds = "dx-login-username";
function Hf(e) {
  const t = e === void 0 ? ds : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Uf(e, t) {
  const n = e === void 0 ? ds : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function Wf(e) {
  const t = e === void 0 ? ds : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function cS({
  action: e,
  method: t = "post",
  onLogin: n,
  onRegister: r,
  onForgotPassword: a,
  registerContent: i,
  forgotPasswordContent: c,
  rememberMe: s = !0,
  loading: l = !1,
  title: d,
  usernameLabel: u = "Username",
  passwordLabel: f = "Password",
  submitText: g = "Sign in",
  storageKey: h,
  className: b
}) {
  const [_, w] = W(() => Hf(h) ?? ""), [m, p] = W(""), [y, N] = W(!1), [x, M] = W(!1), [S, E] = W({}), T = l || x, L = e != null && n == null, A = async (D) => {
    L || D.preventDefault();
    const v = {};
    if (_.trim() || (v.username = "Username is required."), m || (v.password = "Password is required."), E(v), !(v.username || v.password || !n)) {
      M(!0);
      try {
        await n({
          username: _.trim(),
          password: m,
          rememberMe: y
        }), y ? Uf(h, _.trim()) : Wf(h);
      } finally {
        M(!1);
      }
    }
  };
  return /* @__PURE__ */ C(
    "form",
    {
      className: [zr.login, b].filter(Boolean).join(" "),
      action: L ? e : void 0,
      method: L ? t : void 0,
      noValidate: !0,
      onSubmit: (D) => {
        A(D);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: zr.title, children: d }),
        /* @__PURE__ */ o(ir, { label: u, required: !0, error: S.username, children: ({ inputId: D }) => /* @__PURE__ */ o(
          cs,
          {
            id: D,
            value: _,
            autoComplete: "username",
            disabled: T,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (v) => {
              w(v.target.value), E((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ir, { label: f, required: !0, error: S.password, children: ({ inputId: D }) => /* @__PURE__ */ o(
          Pf,
          {
            id: D,
            value: m,
            autoComplete: "current-password",
            disabled: T,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (v) => {
              p(v.target.value), E((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ C("label", { className: zr.remember, children: [
          /* @__PURE__ */ o(
            iu,
            {
              checked: y,
              disabled: T,
              onChange: (D) => N(D.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(cn, { type: "submit", loading: T, disabled: T, children: g }),
        (c ?? a) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: zr.link,
            onClick: () => a?.(),
            children: c ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: zr.link,
            onClick: () => r?.(),
            children: i ?? "Create account"
          }
        )
      ]
    }
  );
}
function Rs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qf(e) {
  if (Array.isArray(e)) return e;
}
function Kf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, c, s = [], l = !0, d = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (u) {
      d = !0, a = u;
    } finally {
      try {
        if (!l && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw a;
      }
    }
    return s;
  }
}
function Gf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vf(e, t) {
  return qf(e) || Kf(e, t) || Yf(e, t) || Gf();
}
function Yf(e, t) {
  if (e) {
    if (typeof e == "string") return Rs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rs(e, t) : void 0;
  }
}
const La = Object.entries, js = Object.setPrototypeOf, Xf = Object.isFrozen, Zf = Object.getPrototypeOf, Jf = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Et = Object.seal, vr = Object.create, Pa = typeof Reflect < "u" && Reflect, Yo = Pa.apply, Xo = Pa.construct;
St || (St = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
Yo || (Yo = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return t.apply(n, a);
});
Xo || (Xo = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
  return new t(...r);
});
const lr = Nt(Array.prototype.forEach), Qf = Nt(Array.prototype.lastIndexOf), Bs = Nt(Array.prototype.pop), Lr = Nt(Array.prototype.push), ep = Nt(Array.prototype.splice), Nr = Array.isArray, Kr = Nt(String.prototype.toLowerCase), Po = Nt(String.prototype.toString), Fs = Nt(String.prototype.match), Pr = Nt(String.prototype.replace), Hs = Nt(String.prototype.indexOf), tp = Nt(String.prototype.trim), np = Nt(Number.prototype.toString), rp = Nt(Boolean.prototype.toString), Us = typeof BigInt > "u" ? null : Nt(BigInt.prototype.toString), Ws = typeof Symbol > "u" ? null : Nt(Symbol.prototype.toString), Yt = Nt(Object.prototype.hasOwnProperty), Rr = Nt(Object.prototype.toString), Rt = Nt(RegExp.prototype.test), qn = op(TypeError);
function Nt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return Yo(e, t, r);
  };
}
function op(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Xo(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kr;
  if (js && js(e, null), !Nr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const i = n(a);
      i !== a && (Xf(t) || (t[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function sp(e) {
  for (let t = 0; t < e.length; t++) Yt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = vr(null);
  for (const r of La(e)) {
    var n = Vf(r, 2);
    const a = n[0], i = n[1];
    Yt(e, a) && (Nr(i) ? t[a] = sp(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = sn(i) : t[a] = i);
  }
  return t;
}
function ap(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return np(e);
    case "boolean":
      return rp(e);
    case "bigint":
      return Us ? Us(e) : "0";
    case "symbol":
      return Ws ? Ws(e) : "Symbol()";
    case "undefined":
      return Rr(e);
    case "function":
    case "object": {
      if (e === null) return Rr(e);
      const t = e, n = hn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Rr(r);
      }
      return Rr(e);
    }
    default:
      return Rr(e);
  }
}
function hn(e, t) {
  for (; e !== null; ) {
    const r = Jf(e, t);
    if (r) {
      if (r.get) return Nt(r.get);
      if (typeof r.value == "function") return Nt(r.value);
    }
    e = Zf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function lp(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const qs = St([
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
]), Ro = St([
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
]), jo = St([
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
]), ip = St([
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
]), Bo = St([
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
]), cp = St([
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
]), Ks = St(["#text"]), Gs = St([
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
]), Fo = St([
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
]), Vs = St([
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
]), so = St([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), dp = Et(/{{[\w\W]*|^[\w\W]*}}/g), up = Et(/<%[\w\W]*|^[\w\W]*%>/g), fp = Et(/\${[\w\W]*/g), pp = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), _p = Et(/^aria-[\-\w]+$/), Ys = Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hp = Et(/^(?:\w+script|data):/i), mp = Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), gp = Et(/^html$/i), yp = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Xs = Et(/<[/\w!]/g), Zs = Et(/<[/\w]/g), bp = Et(/<\/no(script|embed|frames)/i), xp = Et(/\/>/i), nn = {
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
}, Ra = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], vp = St(Ke({}, Ra)), wp = (function() {
  const e = {};
  return lr(Ra, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), kp = function() {
  return typeof window > "u" ? null : window;
}, Np = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (r = n.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Js = function() {
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
}, Kn = function(t, n, r, a) {
  return Yt(t, n) && Nr(t[n]) ? Ke(a.base ? sn(a.base) : {}, t[n], a.transform) : r;
}, Ho = function(t, n, r) {
  const a = Yt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? sn(a) : r();
};
function ja() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kp();
  const t = (de) => ja(de);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = s.prototype, g = hn(f, "cloneNode"), h = hn(f, "remove"), b = hn(f, "removeAttributeNode"), _ = hn(f, "nextSibling"), w = hn(f, "childNodes"), m = hn(f, "parentNode"), p = hn(f, "shadowRoot"), y = hn(f, "attributes"), N = c && c.prototype ? hn(c.prototype, "nodeType") : null, x = c && c.prototype ? hn(c.prototype, "nodeName") : null, M = c && c.prototype ? hn(c.prototype, "ownerDocument") : null, S = function(O) {
    return N ? N(O) : O.nodeType;
  }, E = function(O) {
    return x ? x(O) : O.nodeName;
  };
  if (typeof i == "function") {
    const de = n.createElement("template");
    de.content && de.content.ownerDocument && (n = de.content.ownerDocument);
  }
  let T, L = "", A, D = !1, v = 0;
  const k = function() {
    if (v > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(O) {
    k(), v++;
    try {
      return T.createHTML(O);
    } finally {
      v--;
    }
  }, I = function(O) {
    k(), v++;
    try {
      return T.createScriptURL(O);
    } finally {
      v--;
    }
  }, z = function() {
    return D || (A = Np(u, a), D = !0), A;
  }, P = n, R = P.implementation, q = P.createNodeIterator, ae = P.createDocumentFragment, ie = P.getElementsByTagName, re = r.importNode;
  let V = Js();
  t.isSupported = typeof La == "function" && typeof m == "function" && R && R.createHTMLDocument !== void 0;
  const Ee = dp, Q = up, J = fp, X = pp, ge = _p, te = hp, ye = mp, K = yp;
  let $e = Ys, oe = null;
  const De = Ke({}, [
    ...qs,
    ...Ro,
    ...jo,
    ...Bo,
    ...Ks
  ]);
  let me = null;
  const qe = Ke({}, [
    ...Gs,
    ...Fo,
    ...Vs,
    ...so
  ]);
  let Je = Object.seal(vr(null, {
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
  })), Ge = null, Qe = null;
  const He = Object.seal(vr(null, {
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
  let gt = !0, ee = !0, Me = !1, lt = !0, ze = !1, st = !0, Xe = !1, Tt = !1, yt = null, it = null, ft = !1, Ve = !1, Mt = !1, se = !1, Le = !0, wt = !1;
  const Ct = "user-content-";
  let bt = !0, j = !1, Y = {}, he = null;
  const we = Ke({}, [
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
  let fe = null;
  const F = Ke({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let pe = null;
  const Re = Ke({}, [
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
  ]), Ie = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let mn = et, Nn = !1, Z = null;
  const ce = Ke({}, [
    Ie,
    It,
    et
  ], Po), _e = St([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ke = Ke({}, _e);
  const ve = St(["annotation-xml"]);
  let Ae = Ke({}, ve);
  const Ye = Ke({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Fe = null;
  const dt = ["application/xhtml+xml", "text/html"], xt = "text/html";
  let je = null, tt = null;
  const ut = n.createElement("form"), Jt = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, At = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (tt && tt === O) return;
    (!O || typeof O != "object") && (O = {}), O = sn(O), Fe = dt.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? xt : O.PARSER_MEDIA_TYPE, je = Fe === "application/xhtml+xml" ? Po : Kr, oe = Kn(O, "ALLOWED_TAGS", De, { transform: je }), me = Kn(O, "ALLOWED_ATTR", qe, { transform: je }), Z = Kn(O, "ALLOWED_NAMESPACES", ce, { transform: Po }), pe = Kn(O, "ADD_URI_SAFE_ATTR", Re, {
      transform: je,
      base: Re
    }), fe = Kn(O, "ADD_DATA_URI_TAGS", F, {
      transform: je,
      base: F
    }), he = Kn(O, "FORBID_CONTENTS", we, { transform: je }), Ge = Kn(O, "FORBID_TAGS", sn({}), { transform: je }), Qe = Kn(O, "FORBID_ATTR", sn({}), { transform: je }), Y = Yt(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? sn(O.USE_PROFILES) : O.USE_PROFILES : !1, gt = O.ALLOW_ARIA_ATTR !== !1, ee = O.ALLOW_DATA_ATTR !== !1, Me = O.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = O.SAFE_FOR_TEMPLATES || !1, st = O.SAFE_FOR_XML !== !1, Xe = O.WHOLE_DOCUMENT || !1, Ve = O.RETURN_DOM || !1, Mt = O.RETURN_DOM_FRAGMENT || !1, se = O.RETURN_TRUSTED_TYPE || !1, ft = O.FORCE_BODY || !1, Le = O.SANITIZE_DOM !== !1, wt = O.SANITIZE_NAMED_PROPS || !1, bt = O.KEEP_CONTENT !== !1, j = O.IN_PLACE || !1, $e = lp(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : Ys, mn = typeof O.NAMESPACE == "string" ? O.NAMESPACE : et, ke = Ho(O, "MATHML_TEXT_INTEGRATION_POINTS", () => Ke({}, _e)), Ae = Ho(O, "HTML_INTEGRATION_POINTS", () => Ke({}, ve));
    const B = Ho(O, "CUSTOM_ELEMENT_HANDLING", () => vr(null));
    if (Je = vr(null), Yt(B, "tagNameCheck") && Jt(B.tagNameCheck) && (Je.tagNameCheck = B.tagNameCheck), Yt(B, "attributeNameCheck") && Jt(B.attributeNameCheck) && (Je.attributeNameCheck = B.attributeNameCheck), Yt(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (Je.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), Et(Je), ze && (ee = !1), Mt && (Ve = !0), Y && (oe = Ke({}, Ks), me = vr(null), Y.html === !0 && (Ke(oe, qs), Ke(me, Gs)), Y.svg === !0 && (Ke(oe, Ro), Ke(me, Fo), Ke(me, so)), Y.svgFilters === !0 && (Ke(oe, jo), Ke(me, Fo), Ke(me, so)), Y.mathMl === !0 && (Ke(oe, Bo), Ke(me, Vs), Ke(me, so))), He.tagCheck = null, He.attributeCheck = null, Yt(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? He.tagCheck = O.ADD_TAGS : Nr(O.ADD_TAGS) && (oe === De && (oe = sn(oe)), Ke(oe, O.ADD_TAGS, je))), Yt(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? He.attributeCheck = O.ADD_ATTR : Nr(O.ADD_ATTR) && (me === qe && (me = sn(me)), Ke(me, O.ADD_ATTR, je))), Yt(O, "ADD_FORBID_CONTENTS") && Nr(O.ADD_FORBID_CONTENTS) && (he === we && (he = sn(he)), Ke(he, O.ADD_FORBID_CONTENTS, je)), bt && (oe["#text"] = !0), Xe && Ke(oe, [
      "html",
      "head",
      "body"
    ]), oe.table && (Ke(oe, ["tbody"]), delete Ge.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const ne = T;
      T = O.TRUSTED_TYPES_POLICY;
      try {
        L = $("");
      } catch (ue) {
        throw T = ne, ue;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (T = void 0, L = "") : (T === void 0 && (T = z()), T && typeof L == "string" && (L = $("")));
    St && St(O), tt = O;
  }, dn = Ke({}, [
    ...Ro,
    ...jo,
    ...ip
  ]), Zn = Ke({}, [...Bo, ...cp]), Jn = function(O, B, ne) {
    return B.namespaceURI === et ? O === "svg" : B.namespaceURI === Ie ? O === "svg" && (ne === "annotation-xml" || ke[ne]) : !!dn[O];
  }, Fn = function(O, B, ne) {
    return B.namespaceURI === et ? O === "math" : B.namespaceURI === It ? O === "math" && Ae[ne] : !!Zn[O];
  }, To = function(O, B, ne) {
    return B.namespaceURI === It && !Ae[ne] || B.namespaceURI === Ie && !ke[ne] ? !1 : !Zn[O] && (Ye[O] || !dn[O]);
  }, Mo = function(O) {
    let B = m(O);
    (!B || !B.tagName) && (B = {
      namespaceURI: mn,
      tagName: "template"
    });
    const ne = Kr(O.tagName), ue = Kr(B.tagName);
    return Z[O.namespaceURI] ? O.namespaceURI === It ? Jn(ne, B, ue) : O.namespaceURI === Ie ? Fn(ne, B, ue) : O.namespaceURI === et ? To(ne, B, ue) : !!(Fe === "application/xhtml+xml" && Z[O.namespaceURI]) : !1;
  }, gn = function(O) {
    Lr(t.removed, { element: O });
    try {
      m(O).removeChild(O);
    } catch {
      if (h(O), !m(O)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(O, B, ne) {
    try {
      b(O, B);
    } catch {
      try {
        O.removeAttribute(ne);
      } catch {
      }
    }
  }, yn = function(O) {
    U(O);
    const B = w(O);
    if (B) {
      const ue = [];
      lr(B, (Ce) => {
        Lr(ue, Ce);
      }), lr(ue, (Ce) => {
        try {
          h(Ce);
        } catch {
        }
      });
    }
    const ne = y(O);
    if (ne) for (let ue = ne.length - 1; ue >= 0; --ue) {
      const Ce = ne[ue], Be = Ce && Ce.name;
      typeof Be == "string" && Jr(O, Ce, Be);
    }
  }, Bt = function(O, B, ne) {
    if (!ne) try {
      ne = B.getAttributeNode(O);
    } catch {
      ne = null;
    }
    Lr(t.removed, {
      attribute: ne || null,
      from: B
    });
    try {
      ne ? b(B, ne) : B.removeAttribute(O);
    } catch {
      try {
        B.removeAttribute(O);
      } catch {
      }
    }
    if (O === "is")
      if (Ve || Mt) try {
        gn(B);
      } catch {
      }
      else try {
        B.setAttribute(O, "");
      } catch {
      }
  }, Sr = function(O) {
    const B = y(O);
    if (B)
      for (let ne = B.length - 1; ne >= 0; --ne) {
        const ue = B[ne], Ce = ue && ue.name;
        typeof Ce != "string" || me[je(Ce)] || Jr(O, ue, Ce);
      }
  }, U = function(O) {
    const B = [O];
    for (; B.length > 0; ) {
      const ne = B.pop();
      S(ne) === nn.element && Sr(ne);
      const ue = w(ne);
      if (ue) for (let Ce = ue.length - 1; Ce >= 0; --Ce) B.push(ue[Ce]);
    }
  }, G = function(O, B) {
    return st ? O === "patchsrc" ? !0 : O === "for" && B !== "label" && B !== "output" : !1;
  }, be = function(O) {
    if (!st) return;
    const B = [O];
    for (; B.length > 0; ) {
      const ne = B.pop(), ue = S(ne);
      if (ue === nn.processingInstruction || ue === nn.comment && Rt(Zs, ne.data)) {
        try {
          h(ne);
        } catch {
        }
        continue;
      }
      if (ue === nn.element) {
        const Be = ne, Ue = je(E(ne));
        try {
          Be.hasAttribute && Be.hasAttribute("patchsrc") && Be.removeAttribute("patchsrc"), Be.hasAttribute && Be.hasAttribute("for") && G("for", Ue) && Be.removeAttribute("for");
        } catch {
        }
      }
      const Ce = w(ne);
      if (Ce) for (let Be = Ce.length - 1; Be >= 0; --Be) B.push(Ce[Be]);
    }
  }, xe = function(O) {
    let B = null, ne = null;
    if (ft) O = "<remove></remove>" + O;
    else {
      const Be = Fs(O, /^[\r\n\t ]+/);
      ne = Be && Be[0];
    }
    Fe === "application/xhtml+xml" && mn === et && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const ue = T ? $(O) : O;
    if (mn === et) try {
      B = new d().parseFromString(ue, Fe);
    } catch {
    }
    if (!B || !B.documentElement) {
      B = R.createDocument(mn, "template", null);
      try {
        B.documentElement.innerHTML = Nn ? L : ue;
      } catch {
      }
    }
    const Ce = B.body || B.documentElement;
    return O && ne && Ce.insertBefore(n.createTextNode(ne), Ce.childNodes[0] || null), mn === et ? ie.call(B, Xe ? "html" : "body")[0] : Xe ? B.documentElement : Ce;
  }, nt = function(O) {
    const B = M ? M(O) : O.ownerDocument;
    return q.call(B || O, O, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, zt = function(O) {
    return O = Pr(O, Ee, " "), O = Pr(O, Q, " "), O = Pr(O, J, " "), O;
  }, $t = function(O) {
    var B;
    O.normalize();
    const ne = M ? M(O) : O.ownerDocument, ue = q.call(ne || O, O, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Ce = ue.nextNode();
    for (; Ce; )
      Ce.data = zt(Ce.data), Ce = ue.nextNode();
    const Be = (B = O.querySelectorAll) === null || B === void 0 ? void 0 : B.call(O, "template");
    Be && lr(Be, (Ue) => {
      Dt(Ue.content) && $t(Ue.content);
    });
  }, bn = function(O) {
    const B = x ? x(O) : null;
    return typeof B != "string" || je(B) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || O.attributes !== y(O) || typeof O.removeAttribute != "function" || typeof O.removeAttributeNode != "function" || typeof O.getAttributeNode != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || O.nodeType !== N(O) || O.childNodes !== w(O);
  }, Dt = function(O) {
    if (!N || typeof O != "object" || O === null) return !1;
    try {
      return N(O) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, kt = function(O) {
    if (!N || typeof O != "object" || O === null) return !1;
    try {
      return typeof N(O) == "number";
    } catch {
      return !1;
    }
  };
  function Qt(de, O, B) {
    de.length !== 0 && lr(de, (ne) => {
      ne.call(t, O, B, tt);
    });
  }
  const Co = function(O, B) {
    return !!(st && O.hasChildNodes() && !kt(O.firstElementChild) && Rt(Xs, O.textContent) && Rt(Xs, O.innerHTML) || st && O.namespaceURI === et && vp[B] && (kt(O.firstElementChild) || typeof O.textContent == "string" && Rt(wp[B], O.textContent)) || O.nodeType === nn.processingInstruction || st && O.nodeType === nn.comment && Rt(Zs, O.data));
  }, Qr = function(O, B) {
    if (O instanceof RegExp) return Rt(O, B);
    if (O instanceof Function) {
      for (var ne = arguments.length, ue = new Array(ne > 2 ? ne - 2 : 0), Ce = 2; Ce < ne; Ce++) ue[Ce - 2] = arguments[Ce];
      return !!O(B, ...ue);
    }
    return !1;
  }, rl = function(O, B, ne) {
    if (!Ge[B] && ys(B) && Qr(Je.tagNameCheck, B)) return !1;
    if (bt && !he[B]) {
      const ue = m(O), Ce = w(O);
      if (Ce && ue) {
        const Be = Ce.length;
        for (let Ue = Be - 1; Ue >= 0; --Ue) {
          const pt = O === ne ? g(Ce[Ue], !0) : Ce[Ue];
          ue.insertBefore(pt, _(O));
        }
      }
    }
    return gn(O), !0;
  }, hs = function(O, B, ne, ue) {
    return O.length === 0 ? B : B === ne || B === ue ? sn(B) : B;
  }, ur = function(O, B) {
    return O === B || m(O) !== null ? !1 : (j && U(O), !0);
  }, ms = function(O, B) {
    if (Qt(V.beforeSanitizeElements, O, null), ur(O, B)) return !0;
    if (bn(O))
      return gn(O), !0;
    const ne = je(E(O));
    if (oe = hs(V.uponSanitizeElement, oe, De, yt), Qt(V.uponSanitizeElement, O, {
      tagName: ne,
      allowedTags: oe
    }), ur(O, B)) return !0;
    if (Co(O, ne))
      return gn(O), !0;
    if (Ge[ne] || !(He.tagCheck instanceof Function && He.tagCheck(ne)) && !oe[ne]) {
      const ue = rl(O, ne, B);
      return ue === !1 && (Qt(V.afterSanitizeElements, O, null), ur(O, B)) ? !0 : ue;
    }
    if (S(O) === nn.element && !Mo(O) || (ne === "noscript" || ne === "noembed" || ne === "noframes") && Rt(bp, O.innerHTML))
      return gn(O), !0;
    if (ze && O.nodeType === nn.text) {
      const ue = zt(O.textContent);
      O.textContent !== ue && (Lr(t.removed, { element: O.cloneNode() }), O.textContent = ue);
    }
    return Qt(V.afterSanitizeElements, O, null), ur(O, B);
  }, gs = function(O, B, ne) {
    if (Qe[B] || G(B, O) || Le && (B === "id" || B === "name") && (ne in n || ne in ut)) return !1;
    const ue = me[B] || He.attributeCheck instanceof Function && He.attributeCheck(B, O);
    return ee && Rt(X, B) || gt && Rt(ge, B) ? !0 : ue ? pe[B] || Rt($e, Pr(ne, ye, "")) || (B === "src" || B === "xlink:href" || B === "href") && O !== "script" && Hs(ne, "data:") === 0 && fe[O] || Me && !Rt(te, Pr(ne, ye, "")) ? !0 : !ne : ys(O) && Qr(Je.tagNameCheck, O) && Qr(Je.attributeNameCheck, B, O) || B === "is" && Je.allowCustomizedBuiltInElements && Qr(Je.tagNameCheck, ne);
  }, ol = Ke({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ys = function(O) {
    return !ol[Kr(O)] && Rt(K, O);
  }, sl = function(O, B, ne, ue) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !ne) switch (u.getAttributeType(O, B)) {
      case "TrustedHTML":
        return $(ue);
      case "TrustedScriptURL":
        return I(ue);
    }
    return ue;
  }, al = function(O, B, ne, ue) {
    try {
      return ne ? O.setAttributeNS(ne, B, ue) : O.setAttribute(B, ue), bn(O) ? (gn(O), !1) : !0;
    } catch {
      return Bt(B, O), !1;
    }
  }, bs = function(O, B) {
    if (Qt(V.beforeSanitizeAttributes, O, null), ur(O, B)) return;
    const ne = O.attributes;
    if (!ne || bn(O)) return;
    me = hs(V.uponSanitizeAttribute, me, qe, it);
    const ue = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let Ce = ne.length;
    const Be = je(O.nodeName);
    for (; Ce--; ) {
      const Ue = ne[Ce], pt = Ue.name, un = Ue.namespaceURI, en = Ue.value, fr = je(pt), Do = en;
      let Ft = pt === "value" ? Do : tp(Do), xs = !1;
      if (ue.attrName = fr, ue.attrValue = Ft, ue.keepAttr = !0, ue.forceKeepAttr = void 0, Qt(V.uponSanitizeAttribute, O, ue), Ft = ue.attrValue, wt && (fr === "id" || fr === "name") && Hs(Ft, Ct) !== 0 && (Bt(pt, O, Ue), Ft = Ct + Ft, xs = !0), st && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ft)) {
        Bt(pt, O, Ue);
        continue;
      }
      if (fr === "attributename" && Fs(Ft, "href")) {
        Bt(pt, O, Ue);
        continue;
      }
      if (!ue.forceKeepAttr) {
        if (!ue.keepAttr) {
          Bt(pt, O, Ue);
          continue;
        }
        if (!lt && Rt(xp, Ft)) {
          Bt(pt, O, Ue);
          continue;
        }
        if (ze && (Ft = zt(Ft)), !gs(Be, fr, Ft)) {
          Bt(pt, O, Ue);
          continue;
        }
        Ft = sl(Be, fr, un, Ft), Ft !== Do && al(O, pt, un, Ft) && xs && Bs(t.removed);
      }
    }
    Qt(V.afterSanitizeAttributes, O, null), ur(O, B);
  }, eo = function(O) {
    let B = null;
    const ne = nt(O);
    for (Qt(V.beforeSanitizeShadowDOM, O, null); B = ne.nextNode(); )
      if (Qt(V.uponSanitizeShadowNode, B, null), ms(B, O), bs(B, O), Dt(B.content) && eo(B.content), S(B) === nn.element) {
        const ue = p(B);
        Dt(ue) && (Ao(ue), eo(ue));
      }
    Qt(V.afterSanitizeShadowDOM, O, null);
  }, Ao = function(O) {
    const B = [{
      node: O,
      shadow: null
    }];
    for (; B.length > 0; ) {
      const ne = B.pop();
      if (ne.shadow) {
        eo(ne.shadow);
        continue;
      }
      const ue = ne.node, Ce = S(ue) === nn.element, Be = w(ue);
      if (Be) for (let Ue = Be.length - 1; Ue >= 0; --Ue) B.push({
        node: Be[Ue],
        shadow: null
      });
      if (Ce) {
        const Ue = x ? x(ue) : null;
        if (typeof Ue == "string" && je(Ue) === "template") {
          const pt = ue.content;
          Dt(pt) && B.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Ce) {
        const Ue = p(ue);
        Dt(Ue) && B.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(de) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, ne = null, ue = null, Ce = null;
    if (Nn = !de, Nn && (de = "<!-->"), typeof de != "string" && !kt(de) && (de = ap(de), typeof de != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return de;
    Tt ? (oe = yt, me = it) : At(O), (V.uponSanitizeElement.length > 0 || V.uponSanitizeAttribute.length > 0) && (oe = sn(oe)), V.uponSanitizeAttribute.length > 0 && (me = sn(me)), t.removed = [];
    const Be = j && typeof de != "string" && kt(de);
    if (Be) {
      be(de);
      const un = E(de);
      if (typeof un == "string") {
        const en = je(un);
        if (!oe[en] || Ge[en])
          throw yn(de), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (bn(de))
        throw yn(de), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ao(de);
      } catch (en) {
        throw yn(de), en;
      }
    } else if (kt(de))
      B = xe("<!---->"), ne = B.ownerDocument.importNode(de, !0), ne.nodeType === nn.element && ne.nodeName === "BODY" || ne.nodeName === "HTML" ? B = ne : B.appendChild(ne), Ao(B);
    else {
      if (!Ve && !ze && !Xe && de.indexOf("<") === -1) return T && se ? $(de) : de;
      if (B = xe(de), !B) return Ve ? null : se ? L : "";
    }
    B && ft && gn(B.firstChild);
    const Ue = Be ? de : B;
    try {
      const un = nt(Ue);
      for (; ue = un.nextNode(); )
        ms(ue, Ue), bs(ue, Ue), Dt(ue.content) && eo(ue.content);
    } catch (un) {
      throw Be && (yn(de), lr(t.removed, (en) => {
        en.element && U(en.element);
      })), un;
    }
    if (Be) {
      let un = !1;
      if (lr(t.removed, (en) => {
        en.element && (en.element === de && (un = !0), U(en.element));
      }), un) throw qn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ze && $t(de), de;
    }
    if (Ve) {
      if (ze && $t(B), Mt)
        for (Ce = ae.call(B.ownerDocument); B.firstChild; ) Ce.appendChild(B.firstChild);
      else Ce = B;
      return (me.shadowroot || me.shadowrootmode) && (Ce = re.call(r, Ce, !0)), Ce;
    }
    let pt = Xe ? B.outerHTML : B.innerHTML;
    return Xe && oe["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Rt(gp, B.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + pt), ze && (pt = zt(pt)), T && se ? $(pt) : pt;
  }, t.setConfig = function() {
    let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(de), Tt = !0, yt = oe, it = me;
  }, t.clearConfig = function() {
    tt = null, Tt = !1, yt = null, it = null, T = A, L = "";
  }, t.isValidAttribute = function(de, O, B) {
    tt || At({});
    const ne = je(de), ue = je(O);
    return gs(ne, ue, B);
  }, t.addHook = function(de, O) {
    typeof O == "function" && Yt(V, de) && Lr(V[de], O);
  }, t.removeHook = function(de, O) {
    if (Yt(V, de)) {
      if (O !== void 0) {
        const B = Qf(V[de], O);
        return B === -1 ? void 0 : ep(V[de], B, 1)[0];
      }
      return Bs(V[de]);
    }
  }, t.removeHooks = function(de) {
    Yt(V, de) && (V[de] = []);
  }, t.removeAllHooks = function() {
    V = Js();
  }, t;
}
var Ba = ja();
function Vr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function $p(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ao = "\0";
function lo(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Vr(i)}</code>`), `${ao}${n.length - 1}${ao}`));
  return t || (r = Vr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, c) => {
      const s = $p(c);
      return s == null ? i : `<a href="${Vr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ao}(\\d+)${ao}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function Sp(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), a = (l) => r[l] ?? "", i = [];
  let c = 0;
  const s = (l, d) => {
    const u = d ? "ol" : "ul";
    i.push(
      `<${u}>${l.map((f) => `<li>${lo(f, n)}</li>`).join("")}</${u}>`
    );
  };
  for (; c < r.length; ) {
    const l = a(c) ?? "";
    if (/^\s*$/.test(l)) {
      c += 1;
      continue;
    }
    const d = /^(#{1,6})\s+(.*)$/.exec(l), u = d?.[1], f = d?.[2];
    if (u !== void 0 && f !== void 0) {
      i.push(
        `<h${u.length}>${lo(f.trim(), n)}</h${u.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const _ = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", w = [];
      for (c += 1; c < r.length; ) {
        const p = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(p)) break;
        w.push(p), c += 1;
      }
      c += 1;
      const m = _ ? ` class="language-${Vr(_)}"` : "";
      i.push(
        `<pre><code${m}>${Vr(w.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const _ = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        _.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${_.map((w) => `<p>${lo(w, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(l.trim())) {
      i.push("<hr>"), c += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(l)) {
      const _ = [];
      for (; c < r.length; ) {
        const m = /^\s*[-*+]\s+(.*)$/.exec(a(c))?.[1];
        if (m === void 0) break;
        _.push(m), c += 1;
      }
      s(_, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(l)) {
      const _ = [];
      for (; c < r.length; ) {
        const m = /^\s*\d+[.)]\s+(.*)$/.exec(a(c))?.[1];
        if (m === void 0) break;
        _.push(m), c += 1;
      }
      s(_, !0);
      continue;
    }
    const b = [];
    for (; c < r.length && !/^\s*$/.test(a(c)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(c)
    ); )
      b.push(a(c)), c += 1;
    i.push(`<p>${lo(b.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const Op = "_markdown_oj741_3", Ep = "_resize_oj741_61", Qs = {
  markdown: Op,
  resize: Ep
};
function dS({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Ne(
    () => Ba.sanitize(Sp(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Qs.markdown, n ? Qs.resize : "", a].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const Tp = "_editor_2a7al_3", Mp = "_toolbar_2a7al_13", Cp = "_tool_2a7al_13", Ap = "_separator_2a7al_56", Dp = "_area_2a7al_63", Ip = "_source_2a7al_73", zp = "_alignGlyph_2a7al_84", Lp = "_colorInput_2a7al_89", Pp = "_select_2a7al_98", Ot = {
  editor: Tp,
  toolbar: Mp,
  tool: Cp,
  separator: Ap,
  area: Dp,
  source: Ip,
  alignGlyph: zp,
  colorInput: Lp,
  select: Pp
}, Rp = [
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
], ea = {
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
}, jp = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], Bp = ["1", "2", "3", "4", "5", "6", "7"], Fp = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Zo(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function Hp(e) {
  return Zo("formatBlock", `<${e}>`) || Zo("formatBlock", e);
}
function Up(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const uS = at(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: a,
    toolbar: i = Rp,
    imageUpload: c,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: u,
    sanitize: f = !0
  }, g) {
    const [h, b] = W(!1), [_, w] = W(n), [m, p] = W(
      null
    ), [y, N] = W(""), [x, M] = W(""), [S, E] = W(2), [T, L] = W(2), [A, D] = W(!1), v = le(null), k = le(null), $ = le(n), I = H(
      (K) => f ? Ba.sanitize(K) : K,
      [f]
    );
    Oe(() => {
      const K = v.current;
      t !== void 0 && K && K.innerHTML !== t && (K.innerHTML = t), t !== void 0 && ($.current = t);
    }, [t]);
    const z = H(
      (K) => {
        $.current = I(K), r?.($.current);
      },
      [I, r]
    ), P = H(
      (K, $e) => {
        if (s || l) return !1;
        v.current?.focus();
        const oe = Zo(K, $e);
        if (oe) {
          const De = v.current;
          De && z(De.innerHTML);
        }
        return oe;
      },
      [z, s, l]
    ), R = H(
      () => v.current?.innerHTML ?? $.current,
      []
    ), q = H(
      (K) => {
        P("insertHTML", K);
      },
      [P]
    ), ae = H(() => {
      v.current?.focus();
    }, []), ie = Ne(
      () => ({
        execCommand: P,
        getHtml: R,
        insertHtml: q,
        focus: ae
      }),
      [P, R, q, ae]
    );
    $o(g, () => ({ execCommand: P, getHtml: R }), [
      P,
      R
    ]);
    const re = H(
      (K) => {
        const $e = ea[K];
        !$e || s || l || P($e.command);
      },
      [P, s, l]
    ), V = H(() => {
      s || l || (h ? (b(!1), z(_)) : (w(v.current?.innerHTML ?? ""), b(!0)));
    }, [h, _, z, s, l]), Ee = H(
      (K) => {
        if (!(K.ctrlKey || K.metaKey) || s || l) return;
        const $e = K.key.toLowerCase(), oe = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        oe && (K.preventDefault(), re(oe));
      },
      [re, s, l]
    ), Q = H(() => {
      const K = v.current;
      K && z(K.innerHTML);
    }, [z]), J = H(() => {
      y.trim() && (P("createLink", y.trim()), N(""), p(null));
    }, [y, P]), X = H(() => {
      x.trim() && (P("insertImage", x.trim()), M(""), p(null));
    }, [x, P]), ge = H(
      async (K) => {
        if (c) {
          D(!0);
          try {
            const $e = new FormData();
            $e.append(c.parameterName ?? "file", K);
            const oe = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: $e
            });
            if (!oe.ok)
              throw new Error(`Upload failed: ${oe.status}`);
            const me = (oe.headers.get("content-type") ?? "").includes("application/json") ? await oe.json() : await oe.text(), qe = (c.parseUrl ?? Up)(me);
            P("insertImage", qe);
          } catch ($e) {
            a?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            D(!1), p(null);
          }
        }
      },
      [c, a, P]
    ), te = H(() => {
      const K = Math.max(1, Math.min(10, Math.floor(S) || 1)), $e = Math.max(1, Math.min(10, Math.floor(T) || 1)), oe = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), De = Array.from({ length: K }, () => `<tr>${oe}</tr>`).join(
        ""
      );
      P("insertHTML", `<table><tbody>${De}</tbody></table>`), p(null);
    }, [S, T, P]), ye = (K, $e) => {
      if (K === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: Ot.separator
          },
          `sep-${$e}`
        );
      if (typeof K == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": K.label,
            title: K.title ?? K.label,
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && K.onExecute(ie);
            },
            children: K.glyph ?? K.label
          },
          K.id
        );
      if (K === "source")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Source",
            "aria-pressed": h,
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: V,
            children: "</>"
          },
          "source"
        );
      if (K === "foreColor" || K === "backgroundColor") {
        const De = K === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ C("label", { className: Ot.tool, title: De, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": De,
              disabled: l,
              className: Ot.colorInput,
              onMouseDown: (me) => me.preventDefault(),
              onChange: (me) => P(
                K === "foreColor" ? "foreColor" : "hiliteColor",
                me.target.value
              )
            }
          )
        ] }, K);
      }
      if (K === "formatBlock" || K === "fontName" || K === "fontSize") {
        const De = K === "formatBlock" ? "Format block" : K === "fontName" ? "Font name" : "Font size", me = K === "formatBlock" ? Fp : K === "fontName" ? jp : Bp;
        return /* @__PURE__ */ C(
          "select",
          {
            "aria-label": De,
            title: De,
            disabled: l,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (qe) => qe.preventDefault(),
            onChange: (qe) => {
              !qe.target.value || s || l || (K === "formatBlock" ? Hp(qe.target.value) : P(K === "fontName" ? "fontName" : "fontSize", qe.target.value), qe.target.value = "");
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", disabled: !0, children: K === "formatBlock" ? "¶" : K === "fontName" ? "Aa" : "12" }),
              me.map((qe) => /* @__PURE__ */ o("option", { value: qe, children: qe }, qe))
            ]
          },
          K
        );
      }
      if (K === "link")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert link",
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && (N(""), p("link"));
            },
            children: "🔗"
          },
          "link"
        );
      if (K === "image")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert image",
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && (M(""), p("image"));
            },
            children: "🖼"
          },
          "image"
        );
      if (K === "table")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert table",
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && (E(2), L(2), p("table"));
            },
            children: "▦"
          },
          "table"
        );
      const oe = ea[K];
      return oe ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ot.tool,
          "aria-label": oe.label,
          disabled: l,
          onMouseDown: (De) => De.preventDefault(),
          onClick: () => re(K),
          children: oe.glyph
        },
        K
      ) : null;
    };
    return /* @__PURE__ */ C("div", { className: [Ot.editor, u].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: Ot.toolbar,
          children: i.map((K, $e) => ye(K, $e))
        }
      ),
      h ? /* @__PURE__ */ o(
        "textarea",
        {
          className: Ot.source,
          "aria-label": `${d} source`,
          value: _,
          disabled: l,
          readOnly: s,
          onChange: (K) => {
            w(K.target.value), z(K.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: v,
          className: Ot.area,
          contentEditable: !s && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          tabIndex: 0,
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: $.current },
          onInput: Q,
          onKeyDown: Ee
        }
      ),
      /* @__PURE__ */ C(
        Ca,
        {
          open: m !== null,
          onClose: () => p(null),
          title: m === "link" ? "Insert link" : m === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ C(ot, { children: [
            /* @__PURE__ */ o(cn, { variant: "text", onClick: () => p(null), children: "Cancel" }),
            m === "link" && /* @__PURE__ */ o(cn, { onClick: J, children: "Insert" }),
            m === "image" && /* @__PURE__ */ o(cn, { onClick: X, disabled: A, children: "Insert" }),
            m === "table" && /* @__PURE__ */ o(cn, { onClick: te, children: "Insert" })
          ] }),
          children: [
            m === "link" && /* @__PURE__ */ o(ir, { label: "URL", required: !0, children: ({ inputId: K }) => /* @__PURE__ */ o(
              no,
              {
                id: K,
                value: y,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            m === "image" && /* @__PURE__ */ C(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Image URL", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  value: x,
                  placeholder: "https://",
                  onChange: ($e) => M($e.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(ir, { label: "Or upload a file", children: ({ inputId: K }) => /* @__PURE__ */ o(
                "input",
                {
                  id: K,
                  ref: k,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const oe = $e.target.files?.[0];
                    oe && ge(oe), $e.target.value = "";
                  }
                }
              ) }),
              A && /* @__PURE__ */ o(Aa, { textStyle: "body2", children: "Uploading…" })
            ] }),
            m === "table" && /* @__PURE__ */ C(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Rows", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => E(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ir, { label: "Columns", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String(T),
                  onChange: ($e) => L(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), Wp = "_popup_ve7kd_4", Fa = {
  popup: Wp
}, Ha = cr(null);
function fS() {
  const e = Bn(Ha);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function ta(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function qp({ state: e }) {
  const t = le(null), [n, r] = W(null);
  return Oe(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), c = a.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - c.width)
    );
    let l = i.bottom + 4;
    l + c.height > window.innerHeight && i.top - 4 - c.height >= 0 && (l = i.top - 4 - c.height), r({ left: s, top: Math.max(0, l) });
  }, [e]), Oe(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [Fa.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: ta(e.width),
        height: ta(e.height)
      },
      children: e.content
    }
  );
}
function pS({ children: e }) {
  const [t, n] = W(null), r = le(0), a = le(null), i = H(() => {
    a.current?.(), a.current = null;
  }, []), c = H(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = H(
    (d) => {
      r.current += 1;
      const u = r.current;
      a.current = d.onClose ?? null, n({
        ...d,
        seq: u,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), d.onOpen?.();
      let f = !1;
      return () => {
        f || (f = !0, n((g) => g?.seq !== u ? g : (g.invoker && document.body.contains(g.invoker) && g.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  Oe(() => {
    if (!t) return;
    const d = (h) => {
      const b = document.querySelector(`.${Fa.popup}`);
      b && !b.contains(h.target) && c();
    }, u = (h) => {
      h.key === "Escape" && (h.preventDefault(), c());
    }, f = () => c(), g = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", u, !0), window.addEventListener("resize", f), window.addEventListener("hashchange", g), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", u, !0), window.removeEventListener("resize", f), window.removeEventListener("hashchange", g);
    };
  }, [t, c]);
  const l = Ne(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ C(Ha.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(qp, { state: t }, t.seq)
  ] });
}
const Kp = "_alert_146r9_1", Gp = "_xs_146r9_28", Vp = "_sm_146r9_38", Yp = "_lg_146r9_48", Xp = "_xl_146r9_58", Zp = "_primary_146r9_69", Jp = "_secondary_146r9_74", Qp = "_light_146r9_79", e_ = "_base_146r9_84", t_ = "_dark_146r9_89", n_ = "_info_146r9_94", r_ = "_success_146r9_99", o_ = "_warning_146r9_104", s_ = "_danger_146r9_109", a_ = "_flat_146r9_116", l_ = "_outlined_146r9_123", i_ = "_filled_146r9_132", c_ = "_text_146r9_139", d_ = "_icon_146r9_181", u_ = "_content_146r9_192", f_ = "_title_146r9_197", p_ = "_body_146r9_203", __ = "_dismiss_146r9_209", Sn = {
  alert: Kp,
  xs: Gp,
  sm: Vp,
  lg: Yp,
  xl: Xp,
  primary: Zp,
  secondary: Jp,
  light: Qp,
  base: e_,
  dark: t_,
  info: n_,
  success: r_,
  warning: o_,
  danger: s_,
  flat: a_,
  outlined: l_,
  filled: i_,
  text: c_,
  icon: d_,
  content: u_,
  title: f_,
  body: p_,
  dismiss: __,
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
function _S({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: a,
  icon: i,
  showIcon: c = !0,
  children: s,
  dismissible: l = !0,
  onDismiss: d,
  visible: u,
  onVisibleChange: f,
  className: g,
  ...h
}) {
  const [b, _] = W(!1);
  if (u === !1 || u === void 0 && b)
    return null;
  const w = () => {
    u === void 0 && _(!0), d?.(), f?.(!1);
  }, m = e, p = $a(t, "filled"), y = Yr(n), N = i ?? (c ? /* @__PURE__ */ o(Te, { icon: h_[e] }) : null);
  return /* @__PURE__ */ C(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        Sn.alert,
        Sn[m],
        Sn[p],
        y ? Sn[y] : null,
        Sn[r],
        g
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ o("span", { className: Sn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ C("div", { className: Sn.content, children: [
          a && /* @__PURE__ */ o("div", { className: Sn.title, children: a }),
          s && /* @__PURE__ */ o("div", { className: Sn.body, children: s })
        ] }),
        l && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Sn.dismiss,
            onClick: w,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const m_ = "_skeleton_1xyce_1", g_ = "_text_1xyce_35", y_ = "_circle_1xyce_40", b_ = "_rect_1xyce_44", na = {
  skeleton: m_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: g_,
  circle: y_,
  rect: b_
};
function hS({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const a = {};
  return t !== void 0 && (a.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (a.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: [na.skeleton, na[e], r].filter(Boolean).join(" "),
      style: a
    }
  );
}
function bo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const x_ = "_row_juebr_1", v_ = "_start_juebr_14", w_ = "_center_juebr_18", k_ = "_end_juebr_22", N_ = "_stretch_juebr_26", $_ = "_baseline_juebr_30", S_ = "_normal_juebr_34", O_ = "_noWrap_juebr_90", E_ = "_wrapReverse_juebr_94", io = {
  row: x_,
  start: v_,
  center: w_,
  end: k_,
  stretch: N_,
  baseline: $_,
  normal: S_,
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
  noWrap: O_,
  wrapReverse: E_
};
function ra(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function mS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...s
}) {
  const l = e != null ? bo(e) : null, d = t != null ? bo(t) : null, u = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...l ? {
      columnGap: l,
      "--dx-col-gap": l
    } : {},
    ...d ? { rowGap: d } : {},
    ...c
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        io.row,
        io[n],
        io[`justify-${r}`],
        ra(a) != null ? io[ra(a)] : null,
        i
      ].filter(Boolean).join(" "),
      style: u,
      ...s
    }
  );
}
const T_ = "_column_sh0ss_1", M_ = "_Size1_sh0ss_15", C_ = "_Size2_sh0ss_24", A_ = "_Size3_sh0ss_33", D_ = "_Size4_sh0ss_42", I_ = "_Size5_sh0ss_51", z_ = "_Size6_sh0ss_60", L_ = "_Size7_sh0ss_69", P_ = "_Size8_sh0ss_78", R_ = "_Size9_sh0ss_87", j_ = "_Size10_sh0ss_96", B_ = "_Size11_sh0ss_105", F_ = "_Size12_sh0ss_114", H_ = "_Offset0_sh0ss_119", U_ = "_Offset1_sh0ss_122", W_ = "_Offset2_sh0ss_127", q_ = "_Offset3_sh0ss_132", K_ = "_Offset4_sh0ss_137", G_ = "_Offset5_sh0ss_142", V_ = "_Offset6_sh0ss_147", Y_ = "_Offset7_sh0ss_152", X_ = "_Offset8_sh0ss_157", Z_ = "_Offset9_sh0ss_162", J_ = "_Offset10_sh0ss_167", Q_ = "_Offset11_sh0ss_172", eh = "_Offset12_sh0ss_177", th = "_OrderFirst_sh0ss_182", nh = "_OrderLast_sh0ss_185", rh = "_Order0_sh0ss_188", oh = "_Order1_sh0ss_191", sh = "_Order2_sh0ss_194", ah = "_Order3_sh0ss_197", lh = "_Order4_sh0ss_200", ih = "_Order5_sh0ss_203", ch = "_Order6_sh0ss_206", dh = "_Order7_sh0ss_209", uh = "_Order8_sh0ss_212", fh = "_Order9_sh0ss_215", ph = "_Order10_sh0ss_218", _h = "_Order11_sh0ss_221", hh = "_Order12_sh0ss_224", mh = "_xsSize1_sh0ss_229", gh = "_xsSize2_sh0ss_238", yh = "_xsSize3_sh0ss_247", bh = "_xsSize4_sh0ss_256", xh = "_xsSize5_sh0ss_265", vh = "_xsSize6_sh0ss_274", wh = "_xsSize7_sh0ss_283", kh = "_xsSize8_sh0ss_292", Nh = "_xsSize9_sh0ss_301", $h = "_xsSize10_sh0ss_310", Sh = "_xsSize11_sh0ss_321", Oh = "_xsSize12_sh0ss_332", Eh = "_xsOffset0_sh0ss_337", Th = "_xsOffset1_sh0ss_340", Mh = "_xsOffset2_sh0ss_345", Ch = "_xsOffset3_sh0ss_350", Ah = "_xsOffset4_sh0ss_355", Dh = "_xsOffset5_sh0ss_360", Ih = "_xsOffset6_sh0ss_365", zh = "_xsOffset7_sh0ss_370", Lh = "_xsOffset8_sh0ss_375", Ph = "_xsOffset9_sh0ss_380", Rh = "_xsOffset10_sh0ss_385", jh = "_xsOffset11_sh0ss_391", Bh = "_xsOffset12_sh0ss_397", Fh = "_xsOrderFirst_sh0ss_403", Hh = "_xsOrderLast_sh0ss_406", Uh = "_xsOrder0_sh0ss_409", Wh = "_xsOrder1_sh0ss_412", qh = "_xsOrder2_sh0ss_415", Kh = "_xsOrder3_sh0ss_418", Gh = "_xsOrder4_sh0ss_421", Vh = "_xsOrder5_sh0ss_424", Yh = "_xsOrder6_sh0ss_427", Xh = "_xsOrder7_sh0ss_430", Zh = "_xsOrder8_sh0ss_433", Jh = "_xsOrder9_sh0ss_436", Qh = "_xsOrder10_sh0ss_439", em = "_xsOrder11_sh0ss_442", tm = "_xsOrder12_sh0ss_445", nm = "_smSize1_sh0ss_451", rm = "_smSize2_sh0ss_460", om = "_smSize3_sh0ss_469", sm = "_smSize4_sh0ss_478", am = "_smSize5_sh0ss_487", lm = "_smSize6_sh0ss_496", im = "_smSize7_sh0ss_505", cm = "_smSize8_sh0ss_514", dm = "_smSize9_sh0ss_523", um = "_smSize10_sh0ss_532", fm = "_smSize11_sh0ss_543", pm = "_smSize12_sh0ss_554", _m = "_smOffset0_sh0ss_559", hm = "_smOffset1_sh0ss_562", mm = "_smOffset2_sh0ss_567", gm = "_smOffset3_sh0ss_572", ym = "_smOffset4_sh0ss_577", bm = "_smOffset5_sh0ss_582", xm = "_smOffset6_sh0ss_587", vm = "_smOffset7_sh0ss_592", wm = "_smOffset8_sh0ss_597", km = "_smOffset9_sh0ss_602", Nm = "_smOffset10_sh0ss_607", $m = "_smOffset11_sh0ss_613", Sm = "_smOffset12_sh0ss_619", Om = "_smOrderFirst_sh0ss_625", Em = "_smOrderLast_sh0ss_628", Tm = "_smOrder0_sh0ss_631", Mm = "_smOrder1_sh0ss_634", Cm = "_smOrder2_sh0ss_637", Am = "_smOrder3_sh0ss_640", Dm = "_smOrder4_sh0ss_643", Im = "_smOrder5_sh0ss_646", zm = "_smOrder6_sh0ss_649", Lm = "_smOrder7_sh0ss_652", Pm = "_smOrder8_sh0ss_655", Rm = "_smOrder9_sh0ss_658", jm = "_smOrder10_sh0ss_661", Bm = "_smOrder11_sh0ss_664", Fm = "_smOrder12_sh0ss_667", Hm = "_mdSize1_sh0ss_673", Um = "_mdSize2_sh0ss_682", Wm = "_mdSize3_sh0ss_691", qm = "_mdSize4_sh0ss_700", Km = "_mdSize5_sh0ss_709", Gm = "_mdSize6_sh0ss_718", Vm = "_mdSize7_sh0ss_727", Ym = "_mdSize8_sh0ss_736", Xm = "_mdSize9_sh0ss_745", Zm = "_mdSize10_sh0ss_754", Jm = "_mdSize11_sh0ss_765", Qm = "_mdSize12_sh0ss_776", e1 = "_mdOffset0_sh0ss_781", t1 = "_mdOffset1_sh0ss_784", n1 = "_mdOffset2_sh0ss_789", r1 = "_mdOffset3_sh0ss_794", o1 = "_mdOffset4_sh0ss_799", s1 = "_mdOffset5_sh0ss_804", a1 = "_mdOffset6_sh0ss_809", l1 = "_mdOffset7_sh0ss_814", i1 = "_mdOffset8_sh0ss_819", c1 = "_mdOffset9_sh0ss_824", d1 = "_mdOffset10_sh0ss_829", u1 = "_mdOffset11_sh0ss_835", f1 = "_mdOffset12_sh0ss_841", p1 = "_mdOrderFirst_sh0ss_847", _1 = "_mdOrderLast_sh0ss_850", h1 = "_mdOrder0_sh0ss_853", m1 = "_mdOrder1_sh0ss_856", g1 = "_mdOrder2_sh0ss_859", y1 = "_mdOrder3_sh0ss_862", b1 = "_mdOrder4_sh0ss_865", x1 = "_mdOrder5_sh0ss_868", v1 = "_mdOrder6_sh0ss_871", w1 = "_mdOrder7_sh0ss_874", k1 = "_mdOrder8_sh0ss_877", N1 = "_mdOrder9_sh0ss_880", $1 = "_mdOrder10_sh0ss_883", S1 = "_mdOrder11_sh0ss_886", O1 = "_mdOrder12_sh0ss_889", E1 = "_lgSize1_sh0ss_895", T1 = "_lgSize2_sh0ss_904", M1 = "_lgSize3_sh0ss_913", C1 = "_lgSize4_sh0ss_922", A1 = "_lgSize5_sh0ss_931", D1 = "_lgSize6_sh0ss_940", I1 = "_lgSize7_sh0ss_949", z1 = "_lgSize8_sh0ss_958", L1 = "_lgSize9_sh0ss_967", P1 = "_lgSize10_sh0ss_976", R1 = "_lgSize11_sh0ss_987", j1 = "_lgSize12_sh0ss_998", B1 = "_lgOffset0_sh0ss_1003", F1 = "_lgOffset1_sh0ss_1006", H1 = "_lgOffset2_sh0ss_1011", U1 = "_lgOffset3_sh0ss_1016", W1 = "_lgOffset4_sh0ss_1021", q1 = "_lgOffset5_sh0ss_1026", K1 = "_lgOffset6_sh0ss_1031", G1 = "_lgOffset7_sh0ss_1036", V1 = "_lgOffset8_sh0ss_1041", Y1 = "_lgOffset9_sh0ss_1046", X1 = "_lgOffset10_sh0ss_1051", Z1 = "_lgOffset11_sh0ss_1057", J1 = "_lgOffset12_sh0ss_1063", Q1 = "_lgOrderFirst_sh0ss_1069", eg = "_lgOrderLast_sh0ss_1072", tg = "_lgOrder0_sh0ss_1075", ng = "_lgOrder1_sh0ss_1078", rg = "_lgOrder2_sh0ss_1081", og = "_lgOrder3_sh0ss_1084", sg = "_lgOrder4_sh0ss_1087", ag = "_lgOrder5_sh0ss_1090", lg = "_lgOrder6_sh0ss_1093", ig = "_lgOrder7_sh0ss_1096", cg = "_lgOrder8_sh0ss_1099", dg = "_lgOrder9_sh0ss_1102", ug = "_lgOrder10_sh0ss_1105", fg = "_lgOrder11_sh0ss_1108", pg = "_lgOrder12_sh0ss_1111", _g = "_xlSize1_sh0ss_1117", hg = "_xlSize2_sh0ss_1126", mg = "_xlSize3_sh0ss_1135", gg = "_xlSize4_sh0ss_1144", yg = "_xlSize5_sh0ss_1153", bg = "_xlSize6_sh0ss_1162", xg = "_xlSize7_sh0ss_1171", vg = "_xlSize8_sh0ss_1180", wg = "_xlSize9_sh0ss_1189", kg = "_xlSize10_sh0ss_1198", Ng = "_xlSize11_sh0ss_1209", $g = "_xlSize12_sh0ss_1220", Sg = "_xlOffset0_sh0ss_1225", Og = "_xlOffset1_sh0ss_1228", Eg = "_xlOffset2_sh0ss_1233", Tg = "_xlOffset3_sh0ss_1238", Mg = "_xlOffset4_sh0ss_1243", Cg = "_xlOffset5_sh0ss_1248", Ag = "_xlOffset6_sh0ss_1253", Dg = "_xlOffset7_sh0ss_1258", Ig = "_xlOffset8_sh0ss_1263", zg = "_xlOffset9_sh0ss_1268", Lg = "_xlOffset10_sh0ss_1273", Pg = "_xlOffset11_sh0ss_1279", Rg = "_xlOffset12_sh0ss_1285", jg = "_xlOrderFirst_sh0ss_1291", Bg = "_xlOrderLast_sh0ss_1294", Fg = "_xlOrder0_sh0ss_1297", Hg = "_xlOrder1_sh0ss_1300", Ug = "_xlOrder2_sh0ss_1303", Wg = "_xlOrder3_sh0ss_1306", qg = "_xlOrder4_sh0ss_1309", Kg = "_xlOrder5_sh0ss_1312", Gg = "_xlOrder6_sh0ss_1315", Vg = "_xlOrder7_sh0ss_1318", Yg = "_xlOrder8_sh0ss_1321", Xg = "_xlOrder9_sh0ss_1324", Zg = "_xlOrder10_sh0ss_1327", Jg = "_xlOrder11_sh0ss_1330", Qg = "_xlOrder12_sh0ss_1333", ey = "_xxSize1_sh0ss_1339", ty = "_xxSize2_sh0ss_1348", ny = "_xxSize3_sh0ss_1357", ry = "_xxSize4_sh0ss_1366", oy = "_xxSize5_sh0ss_1375", sy = "_xxSize6_sh0ss_1384", ay = "_xxSize7_sh0ss_1393", ly = "_xxSize8_sh0ss_1402", iy = "_xxSize9_sh0ss_1411", cy = "_xxSize10_sh0ss_1420", dy = "_xxSize11_sh0ss_1431", uy = "_xxSize12_sh0ss_1442", fy = "_xxOffset0_sh0ss_1447", py = "_xxOffset1_sh0ss_1450", _y = "_xxOffset2_sh0ss_1455", hy = "_xxOffset3_sh0ss_1460", my = "_xxOffset4_sh0ss_1465", gy = "_xxOffset5_sh0ss_1470", yy = "_xxOffset6_sh0ss_1475", by = "_xxOffset7_sh0ss_1480", xy = "_xxOffset8_sh0ss_1485", vy = "_xxOffset9_sh0ss_1490", wy = "_xxOffset10_sh0ss_1495", ky = "_xxOffset11_sh0ss_1501", Ny = "_xxOffset12_sh0ss_1507", $y = "_xxOrderFirst_sh0ss_1513", Sy = "_xxOrderLast_sh0ss_1516", Oy = "_xxOrder0_sh0ss_1519", Ey = "_xxOrder1_sh0ss_1522", Ty = "_xxOrder2_sh0ss_1525", My = "_xxOrder3_sh0ss_1528", Cy = "_xxOrder4_sh0ss_1531", Ay = "_xxOrder5_sh0ss_1534", Dy = "_xxOrder6_sh0ss_1537", Iy = "_xxOrder7_sh0ss_1540", zy = "_xxOrder8_sh0ss_1543", Ly = "_xxOrder9_sh0ss_1546", Py = "_xxOrder10_sh0ss_1549", Ry = "_xxOrder11_sh0ss_1552", jy = "_xxOrder12_sh0ss_1555", co = {
  column: T_,
  Size1: M_,
  Size2: C_,
  Size3: A_,
  Size4: D_,
  Size5: I_,
  Size6: z_,
  Size7: L_,
  Size8: P_,
  Size9: R_,
  Size10: j_,
  Size11: B_,
  Size12: F_,
  Offset0: H_,
  Offset1: U_,
  Offset2: W_,
  Offset3: q_,
  Offset4: K_,
  Offset5: G_,
  Offset6: V_,
  Offset7: Y_,
  Offset8: X_,
  Offset9: Z_,
  Offset10: J_,
  Offset11: Q_,
  Offset12: eh,
  OrderFirst: th,
  OrderLast: nh,
  Order0: rh,
  Order1: oh,
  Order2: sh,
  Order3: ah,
  Order4: lh,
  Order5: ih,
  Order6: ch,
  Order7: dh,
  Order8: uh,
  Order9: fh,
  Order10: ph,
  Order11: _h,
  Order12: hh,
  xsSize1: mh,
  xsSize2: gh,
  xsSize3: yh,
  xsSize4: bh,
  xsSize5: xh,
  xsSize6: vh,
  xsSize7: wh,
  xsSize8: kh,
  xsSize9: Nh,
  xsSize10: $h,
  xsSize11: Sh,
  xsSize12: Oh,
  xsOffset0: Eh,
  xsOffset1: Th,
  xsOffset2: Mh,
  xsOffset3: Ch,
  xsOffset4: Ah,
  xsOffset5: Dh,
  xsOffset6: Ih,
  xsOffset7: zh,
  xsOffset8: Lh,
  xsOffset9: Ph,
  xsOffset10: Rh,
  xsOffset11: jh,
  xsOffset12: Bh,
  xsOrderFirst: Fh,
  xsOrderLast: Hh,
  xsOrder0: Uh,
  xsOrder1: Wh,
  xsOrder2: qh,
  xsOrder3: Kh,
  xsOrder4: Gh,
  xsOrder5: Vh,
  xsOrder6: Yh,
  xsOrder7: Xh,
  xsOrder8: Zh,
  xsOrder9: Jh,
  xsOrder10: Qh,
  xsOrder11: em,
  xsOrder12: tm,
  smSize1: nm,
  smSize2: rm,
  smSize3: om,
  smSize4: sm,
  smSize5: am,
  smSize6: lm,
  smSize7: im,
  smSize8: cm,
  smSize9: dm,
  smSize10: um,
  smSize11: fm,
  smSize12: pm,
  smOffset0: _m,
  smOffset1: hm,
  smOffset2: mm,
  smOffset3: gm,
  smOffset4: ym,
  smOffset5: bm,
  smOffset6: xm,
  smOffset7: vm,
  smOffset8: wm,
  smOffset9: km,
  smOffset10: Nm,
  smOffset11: $m,
  smOffset12: Sm,
  smOrderFirst: Om,
  smOrderLast: Em,
  smOrder0: Tm,
  smOrder1: Mm,
  smOrder2: Cm,
  smOrder3: Am,
  smOrder4: Dm,
  smOrder5: Im,
  smOrder6: zm,
  smOrder7: Lm,
  smOrder8: Pm,
  smOrder9: Rm,
  smOrder10: jm,
  smOrder11: Bm,
  smOrder12: Fm,
  mdSize1: Hm,
  mdSize2: Um,
  mdSize3: Wm,
  mdSize4: qm,
  mdSize5: Km,
  mdSize6: Gm,
  mdSize7: Vm,
  mdSize8: Ym,
  mdSize9: Xm,
  mdSize10: Zm,
  mdSize11: Jm,
  mdSize12: Qm,
  mdOffset0: e1,
  mdOffset1: t1,
  mdOffset2: n1,
  mdOffset3: r1,
  mdOffset4: o1,
  mdOffset5: s1,
  mdOffset6: a1,
  mdOffset7: l1,
  mdOffset8: i1,
  mdOffset9: c1,
  mdOffset10: d1,
  mdOffset11: u1,
  mdOffset12: f1,
  mdOrderFirst: p1,
  mdOrderLast: _1,
  mdOrder0: h1,
  mdOrder1: m1,
  mdOrder2: g1,
  mdOrder3: y1,
  mdOrder4: b1,
  mdOrder5: x1,
  mdOrder6: v1,
  mdOrder7: w1,
  mdOrder8: k1,
  mdOrder9: N1,
  mdOrder10: $1,
  mdOrder11: S1,
  mdOrder12: O1,
  lgSize1: E1,
  lgSize2: T1,
  lgSize3: M1,
  lgSize4: C1,
  lgSize5: A1,
  lgSize6: D1,
  lgSize7: I1,
  lgSize8: z1,
  lgSize9: L1,
  lgSize10: P1,
  lgSize11: R1,
  lgSize12: j1,
  lgOffset0: B1,
  lgOffset1: F1,
  lgOffset2: H1,
  lgOffset3: U1,
  lgOffset4: W1,
  lgOffset5: q1,
  lgOffset6: K1,
  lgOffset7: G1,
  lgOffset8: V1,
  lgOffset9: Y1,
  lgOffset10: X1,
  lgOffset11: Z1,
  lgOffset12: J1,
  lgOrderFirst: Q1,
  lgOrderLast: eg,
  lgOrder0: tg,
  lgOrder1: ng,
  lgOrder2: rg,
  lgOrder3: og,
  lgOrder4: sg,
  lgOrder5: ag,
  lgOrder6: lg,
  lgOrder7: ig,
  lgOrder8: cg,
  lgOrder9: dg,
  lgOrder10: ug,
  lgOrder11: fg,
  lgOrder12: pg,
  xlSize1: _g,
  xlSize2: hg,
  xlSize3: mg,
  xlSize4: gg,
  xlSize5: yg,
  xlSize6: bg,
  xlSize7: xg,
  xlSize8: vg,
  xlSize9: wg,
  xlSize10: kg,
  xlSize11: Ng,
  xlSize12: $g,
  xlOffset0: Sg,
  xlOffset1: Og,
  xlOffset2: Eg,
  xlOffset3: Tg,
  xlOffset4: Mg,
  xlOffset5: Cg,
  xlOffset6: Ag,
  xlOffset7: Dg,
  xlOffset8: Ig,
  xlOffset9: zg,
  xlOffset10: Lg,
  xlOffset11: Pg,
  xlOffset12: Rg,
  xlOrderFirst: jg,
  xlOrderLast: Bg,
  xlOrder0: Fg,
  xlOrder1: Hg,
  xlOrder2: Ug,
  xlOrder3: Wg,
  xlOrder4: qg,
  xlOrder5: Kg,
  xlOrder6: Gg,
  xlOrder7: Vg,
  xlOrder8: Yg,
  xlOrder9: Xg,
  xlOrder10: Zg,
  xlOrder11: Jg,
  xlOrder12: Qg,
  xxSize1: ey,
  xxSize2: ty,
  xxSize3: ny,
  xxSize4: ry,
  xxSize5: oy,
  xxSize6: sy,
  xxSize7: ay,
  xxSize8: ly,
  xxSize9: iy,
  xxSize10: cy,
  xxSize11: dy,
  xxSize12: uy,
  xxOffset0: fy,
  xxOffset1: py,
  xxOffset2: _y,
  xxOffset3: hy,
  xxOffset4: my,
  xxOffset5: gy,
  xxOffset6: yy,
  xxOffset7: by,
  xxOffset8: xy,
  xxOffset9: vy,
  xxOffset10: wy,
  xxOffset11: ky,
  xxOffset12: Ny,
  xxOrderFirst: $y,
  xxOrderLast: Sy,
  xxOrder0: Oy,
  xxOrder1: Ey,
  xxOrder2: Ty,
  xxOrder3: My,
  xxOrder4: Cy,
  xxOrder5: Ay,
  xxOrder6: Dy,
  xxOrder7: Iy,
  xxOrder8: zy,
  xxOrder9: Ly,
  xxOrder10: Py,
  xxOrder11: Ry,
  xxOrder12: jy
}, By = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Fy(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Hy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Uy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Wy(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Uy(n, t), `${e}Order${t}`);
}
function gS({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [A, D, v, k] of By) {
    const $ = n[D], I = n[v], z = n[k];
    if ($ != null) {
      Fy(D, $);
      const P = co[`${A}Size${$}`];
      P && r.push(P);
    }
    if (I != null) {
      Hy(v, I);
      const P = co[`${A}Offset${I}`];
      P && r.push(P);
    }
    if (z != null) {
      const P = co[Wy(A, z, k)];
      P && r.push(P);
    }
  }
  const {
    size: i,
    offset: c,
    sizeXs: s,
    offsetXs: l,
    sizeSm: d,
    offsetSm: u,
    sizeMd: f,
    offsetMd: g,
    sizeLg: h,
    offsetLg: b,
    sizeXl: _,
    offsetXl: w,
    sizeXx: m,
    offsetXx: p,
    order: y,
    orderXs: N,
    orderSm: x,
    orderMd: M,
    orderLg: S,
    orderXl: E,
    orderXx: T,
    ...L
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: a,
      ...L
    }
  );
}
const qy = "_stack_bmbbp_1", jr = {
  stack: qy,
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
function oa(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function yS({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: a,
  justify: i,
  className: c,
  style: s,
  ...l
}) {
  const d = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", u = {
    ...r != null ? { gap: bo(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        jr.stack,
        jr[`dir-${d}`],
        oa(n) !== "wrap" ? jr[`wrap-${oa(n)}`] : null,
        a != null ? jr[`align-${a}`] : null,
        i != null ? jr[`justify-${i}`] : null,
        c
      ].filter(Boolean).join(" "),
      style: u,
      ...l
    }
  );
}
const Ky = "_autogrid_16x9f_1", Gy = {
  autogrid: Ky
};
function bS({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: a = !0,
  ...i
}) {
  if (a === !1) return null;
  const c = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: bo(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Gy.autogrid, n].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const Vy = "_layout_fxvw1_1", Yy = "_row_fxvw1_7", Xy = "_grid_fxvw1_21", Zy = "_gridRight_fxvw1_27", Jy = "_gridHeader_fxvw1_31", Qy = "_gridFooter_fxvw1_36", e0 = "_gridContents_fxvw1_41", t0 = "_gridBody_fxvw1_45", An = {
  layout: Vy,
  row: Yy,
  grid: Xy,
  gridRight: Zy,
  gridHeader: Jy,
  gridFooter: Qy,
  gridContents: e0,
  gridBody: t0
}, n0 = "_footer_3be5w_1", r0 = "_sticky_3be5w_9", sa = {
  footer: n0,
  sticky: r0
};
function o0({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [sa.footer, e ? sa.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const s0 = "_header_1tw8b_1", a0 = "_sticky_1tw8b_9", aa = {
  header: s0,
  sticky: a0
};
function l0({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [aa.header, e ? aa.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const i0 = "_sidebar_175d5_1", c0 = "_sticky_175d5_23", d0 = "_left_175d5_41", u0 = "_right_175d5_45", f0 = "_start_175d5_50", p0 = "_end_175d5_54", _0 = "_fullHeight_175d5_60", h0 = "_collapsed_175d5_64", m0 = "_responsive_175d5_72", g0 = "_overlay_175d5_80", y0 = "_mask_175d5_108", Gn = {
  sidebar: i0,
  sticky: c0,
  left: d0,
  right: u0,
  start: f0,
  end: p0,
  fullHeight: _0,
  collapsed: h0,
  responsive: m0,
  overlay: g0,
  mask: y0
};
function b0({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: a = !1,
  sticky: i = !1,
  onClose: c,
  className: s,
  children: l,
  ...d
}) {
  return Oe(() => {
    if (!r || !t || c == null) return;
    const u = (f) => {
      f.key === "Escape" && c();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, c]), /* @__PURE__ */ C(ot, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${Gn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: c
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          Gn.sidebar,
          Gn[e],
          t ? null : Gn.collapsed,
          n ? Gn.responsive : null,
          r ? [Gn.overlay, "se-sidebar--overlay"] : null,
          a ? Gn.fullHeight : null,
          i && !r && !a ? Gn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...d,
        children: l
      }
    )
  ] });
}
function xS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(ot, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], s = [], l = [], d = [];
  Zr.forEach(n, (g) => {
    if (!qt(g)) {
      c.push(g);
      return;
    }
    if (g.type === l0)
      a.push(g);
    else if (g.type === o0)
      i.push(g);
    else if (g.type === b0) {
      const h = g, b = h.props.position;
      d.push(h), (b === "right" || b === "end" ? l : s).push(h);
    } else
      c.push(g);
  });
  const u = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const g = f ? l : s;
    return /* @__PURE__ */ C(
      "div",
      {
        className: [
          An.layout,
          An.grid,
          f ? An.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          a.length > 0 && /* @__PURE__ */ o("div", { className: An.gridHeader, children: a }),
          /* @__PURE__ */ C("div", { className: An.gridContents, children: [
            g,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: An.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [An.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        a,
        /* @__PURE__ */ C("div", { className: An.row, children: [
          s,
          c,
          l
        ] }),
        i
      ]
    }
  );
}
const x0 = "_body_1ge00_4", v0 = "_bare_1ge00_12", la = {
  body: x0,
  bare: v0
};
function vS({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [la.body, t ? null : la.bare, n].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}
const w0 = "_toggle_lxnk5_1", k0 = {
  toggle: w0
};
function wS({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: a,
  ...i
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [k0.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ o(Te, { icon: e, size: 20 })
    }
  );
}
const N0 = "_track_14127_1", $0 = "_bar_14127_31", S0 = "_primary_14127_39", O0 = "_success_14127_43", E0 = "_warning_14127_47", T0 = "_danger_14127_51", M0 = "_indeterminate_14127_149", C0 = "_circular_14127_163", A0 = "_fill_14127_203", rn = {
  track: N0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: $0,
  primary: S0,
  success: O0,
  warning: E0,
  danger: T0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: M0,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: C0,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: A0,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function kS({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: a = !1,
  variant: i = "linear",
  size: c = "md",
  className: s,
  visible: l = !0,
  ...d
}) {
  if (l === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, f = t > 0 ? u / t * 100 : 0;
  if (i === "circular") {
    const h = typeof c == "string", b = 2, _ = 10.5, w = 2 * Math.PI * _, m = w * (a ? 0.75 : 1), p = a ? 0 : w * (1 - f / 100), y = Yr(r);
    return /* @__PURE__ */ C(
      "svg",
      {
        width: h ? void 0 : c,
        height: h ? void 0 : c,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": d["aria-label"],
        "aria-labelledby": d["aria-labelledby"],
        "aria-valuenow": a ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...d,
        className: [
          rn.circular,
          rn[n],
          y ? rn[y] : null,
          h ? rn[`circular-${c}`] : null,
          a ? rn.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: rn.track,
              cx: 12,
              cy: 12,
              r: _,
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: rn.fill,
              cx: 12,
              cy: 12,
              r: _,
              strokeWidth: b,
              strokeDasharray: `${m} ${w}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const g = Yr(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": a ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        rn.track,
        rn[n],
        g ? rn[g] : null,
        typeof c == "string" ? rn[`linear-${c}`] : null,
        a ? rn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: rn.bar,
          style: a ? void 0 : { width: `${f}%` }
        }
      )
    }
  );
}
function D0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Oo(e) {
  const [t, n] = W(() => D0(e));
  return Oe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const I0 = "_pressed_12x15_8", z0 = {
  pressed: I0
}, L0 = at(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: a,
    toggleSeverity: i = "primary",
    toggleShade: c = "darker",
    toggleContent: s,
    size: l = "md",
    className: d,
    onClick: u,
    children: f,
    variant: g,
    severity: h,
    shade: b,
    ..._
  }, w) {
    const [m, p] = W(n), y = t ?? m, N = (x) => {
      const M = !y;
      t === void 0 && p(M), r?.(M), u?.(x);
    };
    return /* @__PURE__ */ o(
      cn,
      {
        ..._,
        ref: w,
        variant: y && a ? a : g,
        severity: y ? i : h,
        shade: y ? c : b,
        size: l,
        "aria-pressed": y,
        className: [y ? z0.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: y && s !== void 0 ? s : f
      }
    );
  }
), Ua = "dx-theme";
function P0(e) {
  const t = e === void 0 ? Ua : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function R0(e, t) {
  const n = e === void 0 ? Ua : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function NS({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = Oo("(prefers-color-scheme: dark)"), [d, u] = W(void 0), f = e !== void 0, g = e ?? d ?? P0(n) ?? t ?? "system", h = g === "system" ? l ? "dark" : "light" : g;
  return Oe(() => {
    if (!f) {
      if (g === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = g;
    }
  }, [g, f]), /* @__PURE__ */ o(
    L0,
    {
      id: i,
      size: s,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: h === "dark",
      onChange: (_) => {
        const w = _ ? "dark" : "light";
        f || (u(w), R0(n, w)), r?.(w);
      },
      toggleContent: /* @__PURE__ */ o(Te, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Te, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Wa = "dx-palette", qa = "dx-theme", Jo = "data-palette", Qo = "data-theme", es = /* @__PURE__ */ new Set();
function j0() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Jo), t = document.documentElement.getAttribute(Qo);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function us(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Jo) : document.documentElement.setAttribute(Jo, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Qo) : document.documentElement.setAttribute(Qo, e.appearance));
}
function Ka(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function ia(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let ca = !1;
function $r() {
  const e = j0();
  if (!ca) {
    ca = !0;
    const t = ia(Wa), n = ia(qa), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && us(a), a;
  }
  return e;
}
function Ga() {
  const e = $r();
  es.forEach((t) => t({ ...e }));
}
function da(e) {
  return es.add(e), () => {
    es.delete(e);
  };
}
function $S() {
  return $r().theme;
}
function B0(e) {
  const t = $r();
  t.theme !== e && (t.theme = e, us(t), Ka(Wa, e), Ga());
}
function SS() {
  return $r().appearance;
}
function F0(e) {
  const t = $r();
  t.appearance !== e && (t.appearance = e, us(t), Ka(qa, e), Ga());
}
function OS() {
  const [, e] = W(0);
  Oe(() => da(() => e((n) => n + 1)), []);
  const t = $r();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: B0,
    setAppearance: F0,
    subscribe: da
  };
}
function H0(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (_, w) => Math.floor(Math.abs(Math.sin(w + 1)) * 4294967296)
  ), l = (_, w) => _ + w | 0, d = (_, w) => _ << w | _ >>> 32 - w;
  let u = 1732584193, f = 4023233417, g = 2562383102, h = 271733878;
  for (let _ = 0; _ < r; _ += 64) {
    const w = [];
    for (let x = 0; x < 16; x += 1)
      w.push(i.getUint32(_ + x * 4, !0));
    let m = u, p = f, y = g, N = h;
    for (let x = 0; x < 64; x += 1) {
      let M, S;
      x < 16 ? (M = p & y | ~p & N, S = x) : x < 32 ? (M = N & p | ~N & y, S = (5 * x + 1) % 16) : x < 48 ? (M = p ^ y ^ N, S = (3 * x + 5) % 16) : (M = y ^ (p | ~N), S = 7 * x % 16), M = l(l(l(M, m), s[x]), w[S]), m = N, N = y, y = p, p = l(p, d(M, c[Math.floor(x / 16) * 4 + x % 4]));
    }
    u = l(u, m), f = l(f, p), g = l(g, y), h = l(h, N);
  }
  const b = (_) => {
    let w = "";
    for (let m = 0; m < 4; m += 1)
      w += `0${(_ >>> m * 8 & 255).toString(16)}`.slice(-2);
    return w;
  };
  return b(u) + b(f) + b(g) + b(h);
}
const U0 = "_avatar_1mhfr_1", W0 = "_xs_1mhfr_12", q0 = "_sm_1mhfr_18", K0 = "_md_1mhfr_24", G0 = "_lg_1mhfr_30", V0 = "_xl_1mhfr_36", Y0 = "_initials_1mhfr_42", X0 = "_image_1mhfr_57", Z0 = "_status_1mhfr_64", J0 = "_online_1mhfr_84", Q0 = "_offline_1mhfr_88", eb = "_away_1mhfr_92", _r = {
  avatar: U0,
  xs: W0,
  sm: q0,
  md: K0,
  lg: G0,
  xl: V0,
  initials: Y0,
  image: X0,
  status: Z0,
  online: J0,
  offline: Q0,
  away: eb
}, tb = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, mo = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function nb(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function rb(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return mo[t % mo.length] ?? mo[0];
}
function ES({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: a = "g",
  alt: i,
  size: c = "md",
  status: s,
  className: l
}) {
  const d = Ne(() => e ? nb(e) : "?", [e]), u = Ne(() => e ? rb(e) : mo[0], [e]), f = Ne(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${H0(N)}?d=${r}&s=${tb[c]}&r=${a}`;
  }, [t, n, r, a, c]), g = t ?? f, [h, b] = W(null), _ = g != null && h !== g, w = _ && i === "", m = i ?? e ?? "avatar", p = s ? `${m}, ${s}` : m, y = _ ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: g,
        alt: w ? "" : s ? p : m,
        onError: () => b(g ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: _r.initials,
      style: { background: u },
      children: d
    }
  );
  return /* @__PURE__ */ C(
    "span",
    {
      className: [
        _r.avatar,
        _r[c],
        s ? _r[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: _ ? void 0 : "img",
      "aria-label": _ ? void 0 : p,
      children: [
        y,
        s && /* @__PURE__ */ o("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ob = "_root_zzwfz_1", sb = "_left_zzwfz_6", ab = "_right_zzwfz_7", lb = "_panel_zzwfz_12", ib = "_bottom_zzwfz_20", cb = "_tabList_zzwfz_24", db = "_underline_zzwfz_53", ub = "_pills_zzwfz_72", fb = "_tab_zzwfz_24", pb = "_active_zzwfz_113", _b = "_disabled_zzwfz_139", Dn = {
  root: ob,
  left: sb,
  right: ab,
  panel: lb,
  bottom: ib,
  tabList: cb,
  underline: db,
  pills: ub,
  tab: fb,
  active: pb,
  disabled: _b
};
function TS({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c
}) {
  const s = ct(), l = le(null), [d, u] = W(
    n ?? e[0]?.key ?? ""
  ), f = t ?? d, g = i === "left" || i === "right", h = (w) => {
    u(w), r?.(w);
  }, b = (w) => {
    const m = e.filter((N) => !N.disabled), p = m.findIndex((N) => N.key === f);
    let y = -1;
    w.key === "ArrowRight" || g && w.key === "ArrowDown" ? y = (p + 1) % m.length : w.key === "ArrowLeft" || g && w.key === "ArrowUp" ? y = (p - 1 + m.length) % m.length : w.key === "Home" ? y = 0 : w.key === "End" && (y = m.length - 1), y >= 0 && (w.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(m[y]?.key ?? "")}"]`
    )?.focus(), h(m[y]?.key ?? ""));
  }, _ = e.find((w) => w.key === f);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Dn.root, Dn[i], c].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: l,
            role: "tablist",
            tabIndex: -1,
            className: [Dn.tabList, Dn[a], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: b,
            children: e.map((w) => {
              const m = w.key === f;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${w.key}`,
                  "data-tab-key": w.key,
                  "aria-selected": m,
                  "aria-controls": `${s}-panel-${w.key}`,
                  tabIndex: m ? 0 : -1,
                  disabled: w.disabled,
                  className: [
                    Dn.tab,
                    m ? Dn.active : null,
                    w.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => h(w.key),
                  children: w.label
                },
                w.key
              );
            })
          }
        ),
        _ && /* @__PURE__ */ o(
          "div",
          {
            role: "tabpanel",
            id: `${s}-panel-${_.key}`,
            "aria-labelledby": `${s}-tab-${_.key}`,
            className: Dn.panel,
            children: _.content
          }
        )
      ]
    }
  );
}
const hb = "_root_1l1j2_1", mb = "_item_1l1j2_9", gb = "_heading_1l1j2_13", yb = "_trigger_1l1j2_17", bb = "_disabled_1l1j2_34", xb = "_title_1l1j2_48", vb = "_chevron_1l1j2_52", wb = "_open_1l1j2_59", kb = "_content_1l1j2_63", In = {
  root: hb,
  item: mb,
  heading: gb,
  trigger: yb,
  disabled: bb,
  title: xb,
  chevron: vb,
  open: wb,
  content: kb
};
function MS({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const c = ct(), [s, l] = W(
    r ?? []
  ), d = n ?? s, u = (f) => {
    const g = d.includes(f) ? d.filter((h) => h !== f) : t ? [...d, f] : [f];
    l(g), a?.(g);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((f) => {
    const g = d.includes(f.key), h = `${c}-panel-${f.key}`, b = `${c}-trigger-${f.key}`;
    return /* @__PURE__ */ C("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ C(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": g,
          "aria-controls": h,
          disabled: f.disabled,
          className: [
            In.trigger,
            f.disabled ? In.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(f.key),
          children: [
            /* @__PURE__ */ o("span", { className: In.title, children: f.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [In.chevron, g ? In.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ o(
        "div",
        {
          id: h,
          role: "region",
          "aria-labelledby": b,
          hidden: !g,
          className: In.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Nb = "_textarea_l7fsl_1", $b = "_invalid_l7fsl_27", Sb = "_xs_l7fsl_34", Ob = "_sm_l7fsl_39", Eb = "_md_l7fsl_44", Tb = "_lg_l7fsl_49", Mb = "_xl_l7fsl_54", uo = {
  textarea: Nb,
  invalid: $b,
  xs: Sb,
  sm: Ob,
  md: Eb,
  lg: Tb,
  xl: Mb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, CS = at(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: a, ...i }, c) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: c,
        "data-size": t,
        className: [
          uo.textarea,
          uo[t],
          uo[`resize-${n}`],
          r ? uo.invalid : null,
          a
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), Cb = "_root_xyp2i_1", Ab = "_trigger_xyp2i_9", Db = "_invalid_xyp2i_40", Ib = "_placeholder_xyp2i_47", zb = "_label_xyp2i_54", Lb = "_chevron_xyp2i_60", Pb = "_chevronOpen_xyp2i_70", Rb = "_menu_xyp2i_74", jb = "_option_xyp2i_89", Bb = "_disabled_xyp2i_100", Fb = "_active_xyp2i_104", Hb = "_selected_xyp2i_105", Ub = "_header_xyp2i_115", Wb = "_xs_xyp2i_122", qb = "_sm_xyp2i_128", Kb = "_md_xyp2i_134", Gb = "_lg_xyp2i_140", Vb = "_xl_xyp2i_146", Ut = {
  root: Cb,
  trigger: Ab,
  invalid: Db,
  placeholder: Ib,
  label: zb,
  chevron: Lb,
  chevronOpen: Pb,
  menu: Rb,
  option: jb,
  disabled: Bb,
  active: Fb,
  selected: Hb,
  header: Ub,
  xs: Wb,
  sm: qb,
  md: Kb,
  lg: Gb,
  xl: Vb
}, Yb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function AS({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: a = "Select…",
  size: i = "md",
  invalid: c = !1,
  disabled: s = !1,
  className: l,
  ...d
}) {
  const u = ct(), f = `${u}-listbox`, g = le(null), h = le(null), [b, _] = W(
    n
  ), [w, m] = W(!1), p = t ?? b, y = e.map(
    (v, k) => v.label === "" || v.disabled ? -1 : k
  ).filter((v) => v >= 0), N = e.findIndex(
    (v) => v.value === p
  ), [x, M] = W(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), S = H(() => {
    if (s) return;
    const v = N >= 0 && y.includes(N) ? N : y[0];
    M(v ?? -1), m(!0);
  }, [s, N, y]), E = H(() => {
    m(!1), h.current?.focus();
  }, []);
  Oe(() => {
    if (!w) return;
    const v = (k) => {
      g.current && !g.current.contains(k.target) && m(!1);
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [w]);
  const T = (v) => {
    _(v), r?.(v), m(!1), h.current?.focus();
  }, L = (v) => {
    if (y.length === 0) return;
    const k = y.includes(x) ? y.indexOf(x) : 0, $ = y[(k + v + y.length) % y.length];
    $ != null && M($);
  }, A = (v) => {
    if (!w) {
      v.key === "ArrowDown" && (v.preventDefault(), S());
      return;
    }
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), L(1);
        break;
      case "ArrowUp":
        v.preventDefault(), L(-1);
        break;
      case "Home":
        v.preventDefault(), y[0] != null && M(y[0]);
        break;
      case "End":
        v.preventDefault(), y[y.length - 1] != null && M(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        v.preventDefault(), x >= 0 && e[x] && y.includes(x) && T(e[x]?.value ?? "");
        break;
      case "Escape":
        v.preventDefault(), E();
        break;
      case "Tab":
        m(!1);
        break;
    }
  }, D = e.find(
    (v) => v.value === p
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- delegates keyboard handling to the trigger and popup; the root has no click semantics of its own
    /* @__PURE__ */ C(
      "div",
      {
        ref: g,
        className: [Ut.root, l].filter(Boolean).join(" "),
        onKeyDown: A,
        children: [
          /* @__PURE__ */ C(
            "button",
            {
              ref: h,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": w,
              "aria-controls": f,
              "aria-invalid": c || void 0,
              disabled: s,
              className: [
                Ut.trigger,
                Ut[i],
                w ? Ut.open : null,
                c ? Ut.invalid : null
              ].filter(Boolean).join(" "),
              onClick: () => w ? m(!1) : S(),
              ...d,
              children: [
                /* @__PURE__ */ o("span", { className: D ? Ut.label : Ut.placeholder, children: D ? D.label : a }),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: [Ut.chevron, w ? Ut.chevronOpen : null].filter(Boolean).join(" "),
                    style: { backgroundImage: Yb },
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          w && /* @__PURE__ */ o(
            "div",
            {
              id: f,
              role: "listbox",
              "aria-activedescendant": x >= 0 ? `${u}-option-${x}` : void 0,
              tabIndex: -1,
              className: Ut.menu,
              children: e.map(
                (v, k) => v.label === "" ? /* @__PURE__ */ o(
                  "div",
                  {
                    className: Ut.header,
                    role: "presentation",
                    children: v.value
                  },
                  v.value
                ) : (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option via the root keydown handler
                  /* @__PURE__ */ o(
                    "div",
                    {
                      id: `${u}-option-${k}`,
                      role: "option",
                      tabIndex: -1,
                      "aria-selected": v.value === p,
                      "aria-disabled": v.disabled || void 0,
                      className: [
                        Ut.option,
                        k === x ? Ut.active : null,
                        v.value === p ? Ut.selected : null,
                        v.disabled ? Ut.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => {
                        v.disabled || T(v.value);
                      },
                      onMouseEnter: () => {
                        !v.disabled && v.label !== "" && M(k);
                      },
                      children: v.label
                    },
                    v.value
                  )
                )
              )
            }
          )
        ]
      }
    )
  );
}
const Xb = "_root_1ma8a_1", Zb = "_wrap_1ma8a_9", Jb = "_input_1ma8a_26", Qb = "_invalid_1ma8a_31", ex = "_clear_1ma8a_58", tx = "_menu_1ma8a_83", nx = "_option_1ma8a_98", rx = "_disabled_1ma8a_109", ox = "_active_1ma8a_113", sx = "_empty_1ma8a_123", ax = "_xs_1ma8a_129", lx = "_sm_1ma8a_136", ix = "_md_1ma8a_143", cx = "_lg_1ma8a_150", dx = "_xl_1ma8a_157", fn = {
  root: Xb,
  wrap: Zb,
  input: Jb,
  invalid: Qb,
  clear: ex,
  menu: tx,
  option: nx,
  disabled: rx,
  active: ox,
  empty: sx,
  xs: ax,
  sm: lx,
  md: ix,
  lg: cx,
  xl: dx
}, ux = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function DS({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: c = "md",
  invalid: s = !1,
  disabled: l = !1,
  filter: d = ux,
  className: u,
  ...f
}) {
  const g = ct(), h = `${g}-listbox`, b = le(null), _ = le(null), [w, m] = W(n), [p, y] = W(!1), N = t ?? w, x = Ne(
    () => N.trim() === "" ? [...e] : e.filter((z) => d(z, N)),
    [e, N, d]
  ), M = x.map((z, P) => z.disabled ? -1 : P).filter((z) => z >= 0), [S, E] = W(-1), T = (z) => {
    m(z), r?.(z);
  }, L = (z) => {
    T(z.label), a?.(z.value, z), y(!1);
  }, A = (z) => {
    if (M.length === 0) return;
    const P = M.includes(S) ? M.indexOf(S) : z === 1 ? -1 : 0, R = M[(P + z + M.length) % M.length];
    R != null && E(R);
  }, D = (z) => {
    l || (T(z.target.value), y(!0), E(-1));
  }, v = () => {
    l || N !== "" && y(!0);
  }, k = (z) => {
    b.current && !b.current.contains(z.relatedTarget) && y(!1);
  }, $ = (z) => {
    if (!l)
      switch (z.key) {
        case "ArrowDown":
          z.preventDefault(), p ? A(1) : (y(!0), E(M[0] ?? -1));
          break;
        case "ArrowUp":
          z.preventDefault(), p && A(-1);
          break;
        case "Enter":
          z.preventDefault(), p && S >= 0 && x[S] && L(x[S]);
          break;
        case "Escape":
          z.preventDefault(), y(!1);
          break;
        case "Tab":
          p && S >= 0 && x[S] && L(x[S]), y(!1);
          break;
      }
  }, I = () => {
    T(""), E(-1), y(!0), _.current?.focus();
  };
  return /* @__PURE__ */ C(
    "div",
    {
      ref: b,
      className: [fn.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ C(
          "div",
          {
            className: [fn.wrap, fn[c], s ? fn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: _,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": p,
                  "aria-controls": h,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && S >= 0 ? `${g}-option-${S}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: N,
                  placeholder: i,
                  className: fn.input,
                  onChange: D,
                  onFocus: v,
                  onBlur: k,
                  onKeyDown: $,
                  ...f
                }
              ),
              N !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: fn.clear,
                  "aria-label": "Clear",
                  onClick: I,
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && (x.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: h, className: fn.menu, children: /* @__PURE__ */ o("div", { className: fn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: h, role: "listbox", className: fn.menu, children: x.map((z, P) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option through the input's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${g}-option-${P}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": !1,
              "aria-disabled": z.disabled || void 0,
              className: [
                fn.option,
                P === S ? fn.active : null,
                z.disabled ? fn.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                z.disabled || L(z);
              },
              onMouseDown: (R) => {
                R.preventDefault(), z.disabled || L(z);
              },
              onMouseEnter: () => {
                z.disabled || E(P);
              },
              children: z.label
            },
            z.value
          )
        )) }))
      ]
    }
  );
}
const fx = "_box_muvqe_1", px = "_option_muvqe_12", _x = "_disabled_muvqe_23", hx = "_selected_muvqe_27", mx = "_active_muvqe_33", Br = {
  box: fx,
  option: px,
  disabled: _x,
  selected: hx,
  active: mx
};
function IS({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...s
}) {
  const l = ct(), [d, u] = W(() => {
    const x = n;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), f = t == null ? d : Array.isArray(t) ? t : [t], g = e.findIndex((x) => !x.disabled), [h, b] = W(
    () => g >= 0 ? g : 0
  ), _ = le(""), w = le(null), m = (x) => {
    u(x), a?.(r ? x : x[0] ?? "");
  }, p = e.map((x, M) => x.disabled ? -1 : M).filter((x) => x >= 0), y = (x) => {
    const M = e[x];
    if (!(!M || M.disabled))
      if (b(x), r) {
        const S = f.includes(M.value) ? f.filter((E) => E !== M.value) : [...f, M.value];
        m(S);
      } else
        m([M.value]);
  }, N = (x) => {
    if (p.length === 0) return;
    const M = p.includes(h) ? h : p[0];
    let S = -1;
    if (x.key === "ArrowDown")
      S = p[(p.indexOf(M) + 1) % p.length];
    else if (x.key === "ArrowUp")
      S = p[(p.indexOf(M) - 1 + p.length) % p.length];
    else if (x.key === "Home")
      S = p[0];
    else if (x.key === "End")
      S = p[p.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), y(M);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const E = (_.current + x.key).toLowerCase();
      _.current = E, w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        _.current = "";
      }, 500);
      const T = [...p, ...p], L = p.indexOf(M) + 1, A = T.slice(L).find((D) => e[D]?.label.toLowerCase().startsWith(E));
      A != null && b(A);
      return;
    }
    S >= 0 && (x.preventDefault(), b(S), r || m([e[S]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[h] ? `${l}-option-${h}` : void 0,
      style: c,
      className: [Br.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...s,
      children: e.map((x, M) => {
        const S = f.includes(x.value), E = M === h;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${l}-option-${M}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": S,
              "aria-disabled": x.disabled || void 0,
              className: [
                Br.option,
                S ? Br.selected : null,
                E ? Br.active : null,
                x.disabled ? Br.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => y(M),
              children: x.label
            },
            x.value
          )
        );
      })
    }
  );
}
const gx = "_group_oinj7_1", yx = "_legend_oinj7_8", bx = "_list_oinj7_16", xx = "_item_oinj7_25", vx = "_disabled_oinj7_32", wx = "_label_oinj7_37", kx = "_checkbox_oinj7_48", tr = {
  group: gx,
  legend: yx,
  list: bx,
  item: xx,
  disabled: vx,
  label: wx,
  checkbox: kx
};
function zS({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: a,
  name: i,
  className: c
}) {
  const [s, l] = W(() => [
    ...n
  ]), d = t ?? s, u = (f, g) => {
    const h = g ? [...d, f] : d.filter((b) => b !== f);
    l(h), r?.(h);
  };
  return /* @__PURE__ */ C("fieldset", { className: [tr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: tr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: tr.list, children: e.map((f) => {
      const g = d.includes(f.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [tr.item, f.disabled ? tr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ C("label", { className: tr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: tr.checkbox,
                name: i,
                value: f.value,
                checked: g,
                disabled: f.disabled,
                onChange: (h) => u(f.value, h.target.checked)
              }
            ),
            /* @__PURE__ */ o("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const Nx = "_group_46668_1", $x = "_legend_46668_8", Sx = "_list_46668_16", Ox = "_item_46668_25", Ex = "_disabled_46668_32", Tx = "_label_46668_37", Mx = "_radio_46668_48", nr = {
  group: Nx,
  legend: $x,
  list: Sx,
  item: Ox,
  disabled: Ex,
  label: Tx,
  radio: Mx
};
function LS({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: a,
  name: i,
  className: c
}) {
  const [s, l] = W(
    n
  ), d = t ?? s, u = (f) => {
    l(f), r?.(f);
  };
  return /* @__PURE__ */ C("fieldset", { className: [nr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: nr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: nr.list, children: e.map((f) => {
      const g = f.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [nr.item, f.disabled ? nr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ C("label", { className: nr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: nr.radio,
                name: i,
                value: f.value,
                checked: g,
                disabled: f.disabled,
                onChange: (h) => u(h.target.value)
              }
            ),
            /* @__PURE__ */ o("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const Cx = "_bar_9zyxn_1", Ax = "_vertical_9zyxn_12", Dx = "_option_9zyxn_17", Ix = "_selected_9zyxn_40", zx = "_sm_9zyxn_56", Lx = "_md_9zyxn_62", Px = "_lg_9zyxn_68", hr = {
  bar: Cx,
  vertical: Ax,
  option: Dx,
  selected: Ix,
  sm: zx,
  md: Lx,
  lg: Px
};
function ua(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function PS(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: a,
    orientation: i = "horizontal",
    onChange: c,
    size: s = "md",
    className: l,
    ...d
  } = e, u = a ?? !1, [f, g] = W(r ?? (u ? [] : t[0]?.value)), h = n ?? f, b = a === !0 || a === void 0 && Array.isArray(h), _ = (m) => {
    if (!b) {
      g(m), c?.(m);
      return;
    }
    const p = ua(h), y = p.includes(m) ? p.filter((N) => N !== m) : [...p, m];
    g(y), c?.(y);
  }, w = (m) => b ? ua(h).includes(m) : h === m;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        hr.bar,
        hr[s],
        i === "vertical" ? hr.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...d,
      children: t.map((m) => {
        const p = w(m.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: m.disabled,
            className: [
              hr.option,
              p ? hr.selected : null,
              m.disabled ? hr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => _(m.value),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const Rx = "_root_11hdr_1", jx = "_action_11hdr_10", Bx = "_caret_11hdr_15", Fx = "_sm_11hdr_49", Hx = "_md_11hdr_53", Ux = "_lg_11hdr_57", Wx = "_fullWidth_11hdr_62", qx = "_menu_11hdr_70", Kx = "_item_11hdr_83", Gx = "_itemIcon_11hdr_105", Vx = "_disabled_11hdr_110", Yx = "_active_11hdr_114", Xx = "_danger_11hdr_123", vn = {
  root: Rx,
  action: jx,
  caret: Bx,
  sm: Fx,
  md: Hx,
  lg: Ux,
  fullWidth: Wx,
  menu: qx,
  item: Kx,
  itemIcon: Gx,
  disabled: Vx,
  active: Yx,
  danger: Xx
}, RS = at(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: a = "primary",
    variant: i = "filled",
    shade: c = "default",
    size: s = "md",
    loading: l = !1,
    visible: d = !0,
    fullWidth: u = !1,
    disabled: f = !1,
    className: g,
    "aria-label": h,
    openAriaLabel: b = "More actions",
    ..._
  }, w) {
    const p = `${ct()}-menu`, y = le(null), N = le(null), x = le([]), [M, S] = W(!1), [E, T] = W(-1), L = f || l, A = Ne(
      () => r.map((R, q) => R.disabled ? -1 : q).filter((R) => R >= 0),
      [r]
    ), D = H(() => {
      L || (T(A[0] ?? -1), S(!0));
    }, [L, A]), v = H(() => {
      S(!1), N.current?.focus();
    }, []);
    Oe(() => {
      if (!M) return;
      const R = (q) => {
        y.current && !y.current.contains(q.target) && S(!1);
      };
      return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
    }, [M]), Oe(() => {
      M && (L || !d) && S(!1);
    }, [M, L, d]);
    const k = le(M);
    if (Oe(() => {
      const R = k.current;
      if (k.current = M, !M || R) return;
      const q = A.includes(E) ? E : A[0] ?? -1;
      q >= 0 && x.current[q]?.focus();
    }, [M, E, A]), d === !1) return null;
    const $ = (R) => {
      const q = r[R];
      !q || q.disabled || (q.onClick?.(), S(!1), N.current?.focus());
    }, I = (R) => {
      if (A.length === 0) return;
      const q = A.includes(E) ? A.indexOf(E) : R === 1 ? -1 : 0, ae = A[(q + R + A.length) % A.length];
      ae != null && (T(ae), x.current[ae]?.focus());
    }, z = (R) => {
      const q = R === "first" ? A[0] : A[A.length - 1];
      q != null && (T(q), x.current[q]?.focus());
    }, P = (R) => {
      switch (R.key) {
        case "ArrowDown":
          R.preventDefault(), I(1);
          break;
        case "ArrowUp":
          R.preventDefault(), I(-1);
          break;
        case "Home":
          R.preventDefault(), z("first");
          break;
        case "End":
          R.preventDefault(), z("last");
          break;
        case "Escape":
          R.preventDefault(), v();
          break;
        case "Tab":
          S(!1);
          break;
      }
    };
    return /* @__PURE__ */ C(
      "div",
      {
        ref: (R) => {
          y.current = R, typeof w == "function" ? w(R) : w && (w.current = R);
        },
        className: [
          vn.root,
          vn[s],
          u ? vn.fullWidth : null,
          g
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            cn,
            {
              className: vn.action,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              loading: l,
              disabled: f,
              "aria-label": h,
              onClick: () => {
                M && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            cn,
            {
              ref: N,
              className: vn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: L,
              "aria-haspopup": "menu",
              "aria-expanded": M,
              "aria-controls": p,
              "aria-label": b,
              onClick: () => M ? S(!1) : D(),
              onKeyDown: (R) => {
                !M && (R.key === "ArrowDown" || R.key === "ArrowUp") && (R.preventDefault(), D());
              },
              children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          M && /* @__PURE__ */ o(
            "div",
            {
              id: p,
              role: "menu",
              tabIndex: -1,
              "aria-label": b,
              className: vn.menu,
              onKeyDown: P,
              ..._,
              children: r.map((R, q) => /* @__PURE__ */ C(
                "button",
                {
                  ref: (ae) => {
                    x.current[q] = ae;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: q === E ? 0 : -1,
                  disabled: R.disabled,
                  className: [
                    vn.item,
                    q === E ? vn.active : null,
                    R.danger ? vn.danger : null,
                    R.disabled ? vn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => $(q),
                  onMouseEnter: () => {
                    R.disabled || T(q);
                  },
                  children: [
                    R.icon ? /* @__PURE__ */ o("span", { className: vn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: R.icon, size: 16 }) }) : null,
                    R.label
                  ]
                },
                R.key
              ))
            }
          )
        ]
      }
    );
  }
), Zx = "_mask_rcv90_1", Jx = "_invalid_rcv90_31", Qx = "_xs_rcv90_38", ev = "_sm_rcv90_44", tv = "_md_rcv90_50", nv = "_lg_rcv90_56", rv = "_xl_rcv90_62", Uo = {
  mask: Zx,
  invalid: Jx,
  xs: Qx,
  sm: ev,
  md: tv,
  lg: nv,
  xl: rv
};
function fa(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const a of t)
    if (a === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += a;
    else
      break;
  return r;
}
const jS = at(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: a,
  defaultValue: i = "",
  onChange: c,
  className: s,
  onKeyDown: l,
  ...d
}, u) {
  const [f, g] = W(i ?? ""), h = a !== void 0, b = h ? a ?? "" : f, _ = (p) => {
    const y = fa(p, r);
    return h || g(y), c?.(y), y;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (p) => {
        _(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const y = p.currentTarget.selectionStart ?? b.length, N = b[y - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            p.preventDefault();
            const x = b.replace(/\D/g, "");
            _(fa(x.slice(0, -1), r));
          }
        }
        l?.(p);
      },
      className: [
        Uo.mask,
        Uo[t],
        n ? Uo.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), ov = "_wrapper_12jdf_1", sv = "_input_12jdf_8", av = "_invalid_12jdf_38", lv = "_button_12jdf_45", iv = "_up_12jdf_77", cv = "_down_12jdf_82", dv = "_xs_12jdf_87", uv = "_sm_12jdf_93", fv = "_md_12jdf_99", pv = "_lg_12jdf_105", _v = "_xl_12jdf_111", Vn = {
  wrapper: ov,
  input: sv,
  invalid: av,
  button: lv,
  up: iv,
  down: cv,
  xs: dv,
  sm: uv,
  md: fv,
  lg: pv,
  xl: _v
};
function ts(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function hv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Va(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function mv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function gv(e, t, n, r, a) {
  const c = ts(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Va(s, n, r);
}
const BS = at(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    value: i,
    defaultValue: c,
    onChange: s,
    min: l,
    max: d,
    step: u = 1,
    incrementLabel: f = "Increment",
    decrementLabel: g = "Decrement",
    onBlur: h,
    onKeyDown: b,
    ..._
  }, w) {
    const [m, p] = W(
      c != null ? String(c) : ""
    ), y = i !== void 0, N = y ? i == null ? "" : String(i) : m, x = (A) => {
      y || p(A), s?.(ts(A));
    }, M = (A) => {
      y || p(String(A)), s?.(A);
    }, S = (A) => {
      a || M(gv(N, A, l, d, u));
    }, E = (A) => {
      x(hv(A.target.value));
    }, T = (A) => {
      A.key === "ArrowUp" ? (A.preventDefault(), S(1)) : A.key === "ArrowDown" && (A.preventDefault(), S(-1)), b?.(A);
    }, L = (A) => {
      const D = ts(N);
      D === null ? (y || p(""), s?.(null)) : M(Va(mv(D, l, u), l, d)), h?.(A);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ C("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: w,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: a,
            onChange: E,
            onKeyDown: T,
            onBlur: L,
            className: [
              Vn.input,
              Vn[t],
              n ? Vn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ..._
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.up].join(" "),
            "aria-label": f,
            disabled: a,
            onClick: () => S(1),
            children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.down].join(" "),
            "aria-label": g,
            disabled: a,
            onClick: () => S(-1),
            children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 14 })
          }
        )
      ] })
    );
  }
), Pe = {
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
}, yv = [
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
function an(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function ns(e) {
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
function bv({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function xv({ r: e, g: t, b: n }) {
  const r = e / 255, a = t / 255, i = n / 255, c = Math.max(r, a, i), s = Math.min(r, a, i), l = c - s;
  let d = 0;
  return l !== 0 && (c === r ? d = (a - i) / l % 6 : c === a ? d = (i - r) / l + 2 : d = (r - a) / l + 4, d *= 60, d < 0 && (d += 360)), {
    h: d,
    s: c === 0 ? 0 : l / c,
    v: c
  };
}
function mr({ h: e, s: t, v: n }) {
  const r = n * t, a = e / 60, i = r * (1 - Math.abs(a % 2 - 1));
  let c = 0, s = 0, l = 0;
  a < 1 ? (c = r, s = i) : a < 2 ? (c = i, s = r) : a < 3 ? (s = r, l = i) : a < 4 ? (s = i, l = r) : a < 5 ? (c = i, l = r) : (c = r, l = i);
  const d = n - r;
  return {
    r: Math.round((c + d) * 255),
    g: Math.round((s + d) * 255),
    b: Math.round((l + d) * 255),
    a: 1
  };
}
function vv(e) {
  const t = ns(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: an(Number(n[1]), 0, 255),
    g: an(Number(n[2]), 0, 255),
    b: an(Number(n[3]), 0, 255),
    a: n[4] != null ? an(Number(n[4]), 0, 1) : 1
  } : null;
}
function pa({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const FS = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = yv,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: u = "md",
  tabIndex: f = 0,
  className: g,
  onChange: h,
  onValueChange: b,
  onOpen: _,
  onClose: w
}) => {
  const m = le(null), p = le(null), y = le(null), N = le(null), x = le(null), M = ct(), S = le(null), E = Ne(
    () => vv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [T, L] = W(!1), [A, D] = W(null), v = A ?? E, k = Ne(() => xv(v), [v]), $ = H(
    (ee) => {
      const Me = pa(ee);
      h?.(Me), b?.(Me);
    },
    [h, b]
  ), I = H(
    (ee, Me) => {
      D(ee), Me && !i && $(ee);
    },
    [i, $]
  ), z = H(() => {
    L(!1), D(null), w?.(), p.current?.focus();
  }, [w]), P = H(() => {
    s || (D(E), L(!0), _?.());
  }, [s, E, _]), R = H(() => {
    T ? z() : P();
  }, [T, z, P]), q = H(
    (ee, Me) => {
      const lt = y.current;
      if (!lt) return k;
      const ze = lt.getBoundingClientRect(), st = an((ee - ze.left) / ze.width, 0, 1), Xe = an(1 - (Me - ze.top) / ze.height, 0, 1);
      return { h: k.h, s: st, v: Xe };
    },
    [k]
  ), ae = H(
    (ee, Me) => {
      if (!Me) return 0;
      const lt = Me.getBoundingClientRect();
      return an((ee - lt.left) / lt.width, 0, 1);
    },
    []
  ), ie = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), S.current = "sat";
    const Me = q(ee.clientX, ee.clientY);
    I({ ...mr(Me), a: v.a }, !0);
  }, re = (ee) => {
    if (S.current !== "sat") return;
    ee.preventDefault();
    const Me = q(ee.clientX, ee.clientY);
    I({ ...mr(Me), a: v.a }, !0);
  }, V = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), S.current = "hue";
    const Me = ae(ee.clientX, N.current);
    I(
      { ...mr({ ...k, h: Me * 360 }), a: v.a },
      !0
    );
  }, Ee = (ee) => {
    if (S.current !== "hue") return;
    ee.preventDefault();
    const Me = ae(ee.clientX, N.current);
    I(
      { ...mr({ ...k, h: Me * 360 }), a: v.a },
      !0
    );
  }, Q = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), S.current = "alpha";
    const Me = ae(ee.clientX, x.current);
    I({ ...v, a: Me }, !0);
  }, J = (ee) => {
    if (S.current !== "alpha") return;
    ee.preventDefault();
    const Me = ae(ee.clientX, x.current);
    I({ ...v, a: Me }, !0);
  }, X = () => {
    S.current = null;
  }, ge = H(
    (ee, Me) => {
      const lt = {
        h: k.h,
        s: an(k.s + ee, 0, 1),
        v: an(k.v + Me, 0, 1)
      };
      I({ ...mr(lt), a: v.a }, !0);
    },
    [k, v.a, I]
  ), te = H(
    (ee) => {
      const Me = (k.h + ee + 360) % 360;
      I({ ...mr({ ...k, h: Me }), a: v.a }, !0);
    },
    [k, v.a, I]
  ), ye = H(
    (ee) => {
      I({ ...v, a: an(v.a + ee, 0, 1) }, !0);
    },
    [v, I]
  ), K = (ee) => {
    switch (ee.key) {
      case "ArrowLeft":
        ee.preventDefault(), ge(-0.05, 0);
        break;
      case "ArrowRight":
        ee.preventDefault(), ge(0.05, 0);
        break;
      case "ArrowUp":
        ee.preventDefault(), ge(0, 0.05);
        break;
      case "ArrowDown":
        ee.preventDefault(), ge(0, -0.05);
        break;
      case "Escape":
        ee.preventDefault(), z();
        break;
    }
  }, $e = (ee, Me) => {
    switch (ee.key) {
      case "ArrowLeft":
        ee.preventDefault(), Me === "hue" ? te(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        ee.preventDefault(), Me === "hue" ? te(6) : ye(0.05);
        break;
      case "Escape":
        ee.preventDefault(), z();
        break;
    }
  }, oe = (ee, Me) => {
    if (ee === "hex") {
      const Xe = ns(Me);
      Xe && I({ ...Xe, a: v.a }, !0);
      return;
    }
    const lt = Me.replace(/[^\d.]/g, ""), ze = Number.parseFloat(lt);
    if (Number.isNaN(ze)) return;
    if (ee === "a") {
      const Xe = lt.includes(".") ? an(ze, 0, 1) : an(ze / 100, 0, 1);
      I({ ...v, a: Xe }, !0);
      return;
    }
    const st = { r: 255, g: 255, b: 255 };
    I(
      { ...v, [ee]: an(ze, 0, st[ee]) },
      !0
    );
  }, De = () => {
    A && ($(A), D(null), L(!1), w?.(), p.current?.focus());
  };
  Oe(() => {
    if (!T) return;
    const ee = (Me) => {
      m.current && !m.current.contains(Me.target) && z();
    };
    return document.addEventListener("mousedown", ee), () => document.removeEventListener("mousedown", ee);
  }, [T, z]), Oe(() => {
    if (!T) return;
    const ee = (Me) => {
      Me.key === "Escape" && z();
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [T, z]);
  const me = u === "xs" ? Pe["dx-colorpicker-trigger-xs"] : u === "sm" ? Pe["dx-colorpicker-trigger-sm"] : u === "lg" ? Pe["dx-colorpicker-trigger-lg"] : u === "xl" ? Pe["dx-colorpicker-trigger-xl"] : Pe["dx-colorpicker-trigger"], qe = pa(v), Je = bv(v), Ge = { x: k.s * 100, y: (1 - k.v) * 100 }, Qe = k.h / 360 * 100, He = v.a * 100, gt = /* @__PURE__ */ C("div", { className: Pe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(k.s * 100),
        "aria-valuetext": `Saturation ${Math.round(k.s * 100)}%, value ${Math.round(k.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Pe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${k.h}, 100%, 50%)`
        },
        onKeyDown: K,
        onPointerDown: ie,
        onPointerMove: re,
        onPointerUp: X,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Pe["dx-saturation-indicator"],
            style: { left: `${Ge.x}%`, top: `${Ge.y}%` },
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
        "aria-valuenow": Math.round(k.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Pe["dx-hue-picker"],
        onKeyDown: (ee) => $e(ee, "hue"),
        onPointerDown: V,
        onPointerMove: Ee,
        onPointerUp: X,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Pe["dx-hue-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(He),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Pe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${k.h}, 100%, 50%))`
        },
        onKeyDown: (ee) => $e(ee, "alpha"),
        onPointerDown: Q,
        onPointerMove: J,
        onPointerUp: X,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Pe["dx-alpha-indicator"],
            style: { left: `${He}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ C("div", { className: Pe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ C("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Je,
            onChange: (ee) => oe("hex", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: v.r,
            onChange: (ee) => oe("r", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: v.g,
            onChange: (ee) => oe("g", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: v.b,
            onChange: (ee) => oe("b", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ C("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(v.a * 100),
            onChange: (ee) => oe("a", ee.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-palette"], children: a.map((ee) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-swatch"],
        "aria-label": ee,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        style: { backgroundColor: ee },
        onClick: () => {
          const Me = ns(ee);
          i ? I({ ...Me, a: v.a }, !1) : (D(null), $({ ...Me, a: v.a }), L(!1), w?.(), p.current?.focus());
        }
      },
      ee
    )) }),
    i && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-ok"],
        onClick: De,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ C(
    "div",
    {
      ref: m,
      className: [
        Pe["dx-colorpicker"],
        T ? Pe["dx-colorpicker-open"] : null,
        l ? Pe["dx-colorpicker-invalid"] : null,
        g
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ C(
          "button",
          {
            ref: p,
            type: "button",
            className: [Pe["dx-colorpicker-trigger"], me].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": T,
            "aria-controls": M,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: f,
            onClick: R,
            onKeyDown: (ee) => {
              ee.key === "Escape" && T && (ee.preventDefault(), z());
            },
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: Pe["dx-colorpicker-value"],
                  style: { backgroundColor: qe },
                  "aria-hidden": "true"
                }
              ),
              d && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-text"], children: d }),
              c && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        T && /* @__PURE__ */ o(
          "div",
          {
            id: M,
            role: "dialog",
            "aria-label": "Choose color",
            className: Pe["dx-colorpicker-popup"],
            children: gt
          }
        )
      ]
    }
  );
}, We = {
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
}, wv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Xt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function kv(e, t) {
  const n = Xt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function rs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), a = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, c = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || a < 1 || a > 31) return null;
  const l = new Date(n, r - 1, a, i, c, s);
  return l.getFullYear() !== n || l.getMonth() !== r - 1 || l.getDate() !== a ? null : { year: n, month: r, day: a, hour: i, minute: c, second: s };
}
function Yn() {
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
function zn(e, t) {
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
function fo(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), a = n.getMonth() + 1, i = new Date(r, a, 0).getDate();
  return {
    year: r,
    month: a,
    day: Math.min(e.day, i),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function _a(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ha = {
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
  }).formatToParts(t).find((a) => a.type === "dayPeriod")?.value ?? ""
}, Nv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], $v = ["y", "M", "d", "H", "m", "s"];
function po(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let a = "", i = 0;
  for (; i < t.length; ) {
    let c = !1;
    for (const l of Nv)
      if (t.startsWith(l, i)) {
        a += ha[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if ($v.includes(s)) {
      a += ha[s](e, r, n), i += 1;
      continue;
    }
    a += s, i += 1;
  }
  return a;
}
const Sv = [
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
function Ov(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let s = null;
    for (const l of Sv)
      if (t.startsWith(l, a)) {
        s = l;
        break;
      }
    if (s) {
      const l = e.slice(r, r + s.length);
      if (!/^\d+$/.test(l)) return null;
      const d = Number(l);
      switch (s) {
        case "yyyy":
          n.year = d;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + d;
          break;
        case "MM":
        case "M":
          n.month = d;
          break;
        case "dd":
        case "d":
          n.day = d;
          break;
        case "HH":
        case "H":
          n.hour = d;
          break;
        case "mm":
        case "m":
          n.minute = d;
          break;
        case "ss":
        case "s":
          n.second = d;
          break;
      }
      r += s.length, a += s.length;
      continue;
    }
    if (e[r] !== t[a]) return null;
    r += 1, a += 1;
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
  const c = new Date(
    i.year,
    i.month - 1,
    i.day,
    i.hour,
    i.minute,
    i.second
  );
  return c.getFullYear() !== i.year || c.getMonth() !== i.month - 1 || c.getDate() !== i.day ? null : i;
}
function Fr(e, t) {
  const n = rs(e);
  return n || Ov(e, t);
}
function Ev(e, t, n) {
  return t && Xt(e) < Xt(t) ? t : n && Xt(e) > Xt(n) ? n : e;
}
const Tv = ["hour", "minute", "second"];
function _o(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const HS = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    format: i = "yyyy-MM-dd",
    min: c,
    max: s,
    showTime: l = !1,
    showButton: d = !0,
    allowClear: u = !1,
    inline: f = !1,
    disabledDates: g,
    locale: h = "en-US",
    onChange: b,
    onValueChange: _,
    onOpen: w,
    onClose: m,
    disabled: p,
    readOnly: y,
    placeholder: N,
    ariaLabel: x,
    triggerLabel: M,
    clearLabel: S,
    tabIndex: E,
    className: T,
    onBlur: L,
    onKeyDown: A,
    ...D
  }, v) {
    const k = le(null), $ = le(null), I = le(null), z = le(null), P = ct(), R = r !== void 0, [q, ae] = W(
      () => a != null ? po(
        Fr(a, i) ?? Yn(),
        i,
        h
      ) : ""
    ), [ie, re] = W(!1), [V, Ee] = W(null), [Q, J] = W(() => {
      const F = r !== void 0 ? r ?? "" : a ?? "";
      if (F) {
        const pe = Fr(F, i);
        if (pe) return pe;
      }
      return Yn();
    }), X = Ne(() => c ? rs(c) : null, [c]), ge = Ne(() => s ? rs(s) : null, [s]), te = Ne(
      () => new Set(g ?? []),
      [g]
    ), ye = Ne(() => {
      const F = R ? r ?? "" : q;
      return F ? Fr(F, i) : null;
    }, [r, q, R, i]), K = H(
      (F) => {
        const pe = Xt(F);
        return !!(te.has(pe) || X && pe < Xt(X) || ge && pe > Xt(ge));
      },
      [te, X, ge]
    ), $e = H(
      (F) => {
        if (!K(F)) return F;
        for (let pe = 1; pe <= 366; pe += 1) {
          const Re = zn(F, pe);
          if (!K(Re)) return Re;
          const Ie = zn(F, -pe);
          if (!K(Ie)) return Ie;
        }
        return F;
      },
      [K]
    ), oe = H(
      (F) => {
        R || ae(F ? po(F, i, h) : "");
        const pe = F ? kv(F, l) : "";
        b?.(pe), _?.(pe);
      },
      [R, i, h, l, b, _]
    ), De = H(
      (F) => {
        $.current = F, typeof v == "function" ? v(F) : v && (v.current = F);
      },
      [v]
    ), me = H(() => {
      re(!1), Ee(null), m?.(), f || I.current?.focus();
    }, [f, m]), qe = H(() => {
      if (p) return;
      const F = ye ?? Yn();
      Ee(F), J($e(F)), re(!0), w?.();
    }, [p, ye, $e, w]), Je = H(() => {
      ie ? me() : qe();
    }, [ie, me, qe]), Ge = H((F) => {
      z.current?.querySelector(
        `[data-date="${Xt(F)}"]`
      )?.focus();
    }, []), Qe = H(
      (F) => {
        if (K(F)) return;
        const pe = V ?? ye, Ie = {
          ...l ? {
            hour: pe?.hour ?? 0,
            minute: pe?.minute ?? 0,
            second: pe?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: F.year,
          month: F.month,
          day: F.day
        };
        Ee(Ie), l || (oe(Ie), me());
      },
      [K, V, ye, l, oe, me]
    ), He = H(
      (F, pe) => {
        Ee((Re) => {
          const Ie = Re ?? ye ?? Yn(), et = Math.min(F === "hour" ? 23 : 59, Math.max(0, Ie[F] + pe));
          return { ...Ie, [F]: et };
        });
      },
      [ye]
    ), gt = H(
      (F, pe) => {
        const Re = pe.replace(/\D/g, ""), Ie = Re === "" ? 0 : Number(Re), It = F === "hour" ? 23 : 59;
        Ee((et) => ({ ...et ?? ye ?? Yn(), [F]: Math.min(It, Ie) }));
      },
      [ye]
    ), ee = H(() => {
      V && (oe(V), me());
    }, [V, oe, me]), Me = H(() => {
      if (ie) return;
      const F = Fr(q, i);
      oe(F ? Ev(F, X, ge) : null);
    }, [ie, q, i, X, ge, oe]), lt = (F) => {
      const pe = F.target.value;
      R || ae(pe), ie && Ee(null);
    }, ze = (F) => {
      F.key === "Enter" ? (F.preventDefault(), ie ? V && (oe(V), me()) : Me()) : F.key === "Escape" ? ie && (F.preventDefault(), me()) : F.key === "ArrowDown" && !ie ? (F.preventDefault(), qe()) : F.key === "Tab" && ie && re(!1), A?.(F);
    }, st = (F) => {
      Me(), L?.(F);
    }, Xe = (F) => {
      let pe = null;
      switch (F.key) {
        case "ArrowLeft":
          pe = zn(Q, -1), F.preventDefault();
          break;
        case "ArrowRight":
          pe = zn(Q, 1), F.preventDefault();
          break;
        case "ArrowUp":
          pe = zn(Q, -7), F.preventDefault();
          break;
        case "ArrowDown":
          pe = zn(Q, 7), F.preventDefault();
          break;
        case "Home":
          pe = zn(Q, -_a(Q)), F.preventDefault();
          break;
        case "End":
          pe = zn(Q, 6 - _a(Q)), F.preventDefault();
          break;
        case "PageUp":
          pe = fo(Q, F.shiftKey ? -12 : -1), F.preventDefault();
          break;
        case "PageDown":
          pe = fo(Q, F.shiftKey ? 12 : 1), F.preventDefault();
          break;
        case "Enter":
        case " ":
          F.preventDefault(), Qe(Q);
          break;
        case "Escape":
          F.preventDefault(), me();
          break;
        case "Tab":
          re(!1);
          break;
      }
      if (pe) {
        const Re = $e(pe);
        J(Re), setTimeout(() => Ge(Re), 0);
      }
    };
    Oe(() => {
      if (!ie) return;
      const F = (pe) => {
        k.current && !k.current.contains(pe.target) && me();
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [ie, me]), Oe(() => {
      if (!ie) return;
      const F = (pe) => {
        pe.key === "Escape" && me();
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [ie, me]);
    const Tt = () => {
      R || ae(""), b?.(""), _?.(""), $.current?.focus();
    }, yt = ie && V ? po(V, i, h) : R ? r ? po(
      Fr(r, i) ?? Yn(),
      i,
      h
    ) : "" : q, it = R ? !!r : q.length > 0, ft = f || ie, Ve = { year: Q.year, month: Q.month }, Mt = new Date(Ve.year, Ve.month - 1, 1).getDay(), se = {
      year: Ve.year,
      month: Ve.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let F = 0; F < wv; F += 1)
      Le.push(zn(se, F - Mt));
    const wt = V ? Xt(V) : ye ? Xt(ye) : null, Ct = Xt(Yn()), bt = `${Ve.year}-${ln(Ve.month)}`, j = Ne(
      () => new Intl.DateTimeFormat(h, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [h]
    ), Y = new Intl.DateTimeFormat(h, {
      month: "long",
      year: "numeric"
    }).format(new Date(Ve.year, Ve.month - 1, 1)), he = Array.from(
      { length: 7 },
      (F, pe) => new Intl.DateTimeFormat(h, { weekday: "short" }).format(
        new Date(2021, 0, 3 + pe)
      )
    ), we = t === "xs" ? We["dx-datepicker-input--xs"] : t === "sm" ? We["dx-datepicker-input--sm"] : t === "lg" ? We["dx-datepicker-input--lg"] : t === "xl" ? We["dx-datepicker-input--xl"] : We["dx-datepicker-input--md"], fe = /* @__PURE__ */ C(
      "div",
      {
        className: We["dx-datepicker-calendar"],
        "aria-label": x ?? "Date picker",
        children: [
          /* @__PURE__ */ C("div", { className: We["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: We["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const F = $e(fo(Q, -1));
                  J(F), setTimeout(() => Ge(F), 0);
                },
                children: /* @__PURE__ */ o(Te, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: We["dx-datepicker-title"], children: Y }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: We["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const F = $e(fo(Q, 1));
                  J(F), setTimeout(() => Ge(F), 0);
                },
                children: /* @__PURE__ */ o(Te, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ C(
            "div",
            {
              ref: z,
              role: "grid",
              tabIndex: -1,
              className: We["dx-datepicker-grid"],
              onKeyDown: Xe,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: We["dx-datepicker-week-row"], children: he.map((F) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: We["dx-datepicker-weekday"],
                    children: F
                  },
                  F
                )) }),
                Array.from({ length: 6 }, (F, pe) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: We["dx-datepicker-row"],
                    children: Le.slice(pe * 7, pe * 7 + 7).map((Re) => {
                      const Ie = Xt(Re), It = K(Re), et = Ie.startsWith(bt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Ie,
                          tabIndex: Ie === Xt(Q) ? 0 : -1,
                          "aria-selected": Ie === wt || void 0,
                          "aria-disabled": It || void 0,
                          "aria-label": j.format(
                            new Date(Re.year, Re.month - 1, Re.day)
                          ),
                          className: [
                            We["dx-datepicker-day"],
                            et ? null : We["dx-datepicker-day--outside"],
                            Ie === Ct ? We["dx-datepicker-day--today"] : null,
                            Ie === wt ? We["dx-datepicker-day--selected"] : null,
                            It ? We["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Qe(Re),
                          onFocus: () => J(Re),
                          children: Re.day
                        },
                        Ie
                      );
                    })
                  },
                  pe
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ C("div", { className: We["dx-datepicker-time"], children: [
            Tv.map((F) => /* @__PURE__ */ C("label", { className: We["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: We["dx-datepicker-time-label"], children: _o(F) }),
              /* @__PURE__ */ C("div", { className: We["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: We["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _o(F),
                    value: ln(
                      (V ?? ye ?? Yn())[F]
                    ),
                    onChange: (pe) => gt(F, pe.target.value),
                    onKeyDown: (pe) => {
                      pe.key === "ArrowUp" ? (pe.preventDefault(), He(F, 1)) : pe.key === "ArrowDown" ? (pe.preventDefault(), He(F, -1)) : pe.key === "Enter" && (pe.preventDefault(), ee());
                    }
                  }
                ),
                /* @__PURE__ */ C("span", { className: We["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_o(F).toLowerCase()}`,
                      onClick: () => He(F, 1),
                      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_o(F).toLowerCase()}`,
                      onClick: () => He(F, -1),
                      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, F)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: We["dx-datepicker-ok"],
                onClick: ee,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ C(
      "div",
      {
        ref: k,
        className: [
          We["dx-datepicker"],
          f ? We["dx-datepicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ C(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: De,
                type: "text",
                autoComplete: "off",
                value: yt,
                disabled: p,
                readOnly: y,
                placeholder: N,
                tabIndex: E,
                role: d ? void 0 : "combobox",
                "aria-label": x ?? "Date",
                "aria-haspopup": d ? void 0 : "dialog",
                "aria-expanded": d ? void 0 : ft,
                "aria-controls": d ? void 0 : P,
                "aria-invalid": n || void 0,
                className: [
                  We["dx-datepicker-input"],
                  we,
                  n ? We["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: lt,
                onKeyDown: ze,
                onBlur: st,
                onClick: () => {
                  d || Je();
                },
                ...D
              }
            ),
            u && !p && it && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  We["dx-datepicker-clear"],
                  d ? We["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
                onClick: Tt,
                children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: I,
                type: "button",
                className: [We["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": M ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": P,
                disabled: p,
                onClick: Je,
                children: /* @__PURE__ */ o(Te, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          ft && /* @__PURE__ */ o(
            "div",
            {
              id: P,
              role: f ? void 0 : "dialog",
              "aria-label": f ? void 0 : x ?? "Date picker",
              className: f ? void 0 : We["dx-datepicker-popup"],
              children: fe
            }
          )
        ]
      }
    );
  }
), Xn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, US = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: a = "Rating",
  clearLabel: i = "Clear",
  rateLabel: c = "Rate",
  tabIndex: s = 0,
  className: l,
  onChange: d,
  onValueChange: u
}) => {
  const [f, g] = W(e), h = H(
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), b = H(
    (p) => {
      d?.(p), u?.(p);
    },
    [d, u]
  ), _ = H(
    (p) => {
      n || r || (b(p), g(p));
    },
    [n, r, b]
  ), w = (p) => {
    if (n || r) return;
    const y = f > 0 ? f : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), _(h(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), _(h(y - 1));
        break;
      case "Home":
        p.preventDefault(), _(1);
        break;
      case "End":
        p.preventDefault(), _(t);
        break;
    }
  }, m = Array.from({ length: t }, (p, y) => y + 1);
  return /* @__PURE__ */ C(
    "div",
    {
      role: "radiogroup",
      tabIndex: -1,
      "aria-label": a,
      "aria-readonly": n || void 0,
      className: [
        Xn["dx-rating"],
        n ? Xn["dx-rating-readonly"] : null,
        r ? Xn["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: w,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Xn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => _(0),
            children: /* @__PURE__ */ o(Te, { icon: "block", size: 16 })
          }
        ),
        m.map((p) => {
          const y = p <= e, N = p === (e > 0 ? e : f);
          return /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${c} ${p}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                y ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => _(p),
              onFocus: () => g(p),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Xn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Te, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Xn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "star", size: 20 }) })
              ]
            },
            p
          );
        })
      ]
    }
  );
}, rr = {
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
const WS = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: a = 100,
  step: i = 1,
  range: c = !1,
  orientation: s = "horizontal",
  disabled: l = !1,
  label: d = "Value",
  minLabel: u = "Min",
  maxLabel: f = "Max",
  tabIndex: g = 0,
  className: h,
  onChange: b,
  onInput: _,
  onValueChange: w,
  onInputChange: m
}) => {
  const p = le(null), y = le(
    null
  ), [N, x] = W(null), M = N ?? e, S = Ne(
    () => On(M, r, a),
    [M, r, a]
  ), E = Ne(
    () => On(c ? t : S, r, a),
    [c, t, S, r, a]
  ), T = Ne(
    () => On(c ? Math.max(n, E) : S, r, a),
    [c, n, E, S, r, a]
  ), L = H(
    (Q) => {
      const J = a - r;
      return J <= 0 ? 0 : (On(Q, r, a) - r) / J * 100;
    },
    [r, a]
  ), A = H(
    (Q, J) => {
      const X = p.current;
      if (!X) return r;
      const ge = X.getBoundingClientRect();
      let te;
      s === "vertical" ? te = 1 - (J - ge.top) / ge.height : te = (Q - ge.left) / ge.width;
      const ye = r + On(te, 0, 1) * (a - r);
      return i > 0 ? On(Math.round(ye / i) * i, r, a) : On(ye, r, a);
    },
    [r, a, i, s]
  ), D = H(
    (Q) => {
      typeof Q == "number" && x(Q), b?.(Q), w?.(Q);
    },
    [b, w]
  ), v = H(
    (Q) => {
      typeof Q == "number" && x(Q), _?.(Q), m?.(Q);
    },
    [_, m]
  ), k = H(
    (Q, J, X) => {
      const ge = A(J, X);
      let te;
      c ? Q === "min" ? te = { min: Math.min(ge, T), max: T } : te = { min: E, max: Math.max(ge, E) } : te = ge, v(te), y.current === null && D(te);
    },
    [c, A, E, T, v, D]
  ), $ = H(
    (Q, J) => {
      const X = (i > 0 ? i : 1) * J;
      let ge;
      c ? Q === "min" ? ge = {
        min: On(E + X, r, T),
        max: T
      } : ge = {
        min: E,
        max: On(T + X, E, a)
      } : ge = On(S + X, r, a), D(ge);
    },
    [c, i, r, a, E, T, S, D]
  ), I = (Q, J) => {
    if (!l)
      switch (J.key) {
        case "ArrowLeft":
        case "ArrowDown":
          J.preventDefault(), $(Q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          J.preventDefault(), $(Q, 1);
          break;
        case "Home":
          J.preventDefault(), D(c ? Q === "min" ? { min: r, max: T } : { min: E, max: E } : r);
          break;
        case "End":
          J.preventDefault(), D(c ? Q === "min" ? { min: T, max: T } : { min: E, max: a } : a);
          break;
      }
  }, z = (Q, J) => {
    l || (J.preventDefault(), J.currentTarget.focus(), typeof J.currentTarget.setPointerCapture == "function" && J.currentTarget.setPointerCapture(J.pointerId), y.current = { key: Q, pointerId: J.pointerId }, k(Q, J.clientX, J.clientY));
  }, P = (Q) => {
    !y.current || y.current.pointerId !== Q.pointerId || (Q.preventDefault(), k(y.current.key, Q.clientX, Q.clientY));
  }, R = (Q) => {
    !y.current || y.current.pointerId !== Q.pointerId || (y.current = null, Q.preventDefault(), D(c ? { min: E, max: T } : S));
  }, [q, ae] = W(null), ie = L(E), re = L(T), V = c ? ie : 0, Ee = re;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        rr["dx-slider"],
        s === "vertical" ? rr["dx-slider-vertical"] : null,
        l ? rr["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ C("div", { ref: p, className: rr["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: rr["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${V}%`, height: `${Ee - V}%` } : { left: `${V}%`, width: `${Ee - V}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(E),
            "aria-orientation": s,
            "aria-label": c ? u : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && q === "max" ? -1 : g,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ie}% - 8px)` } : { left: `calc(${ie}% - 8px)` },
            onKeyDown: (Q) => I("min", Q),
            onPointerDown: (Q) => z("min", Q),
            onPointerMove: P,
            onPointerUp: R,
            onFocus: () => ae("min")
          }
        ),
        c && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(T),
            "aria-orientation": s,
            "aria-label": f,
            "aria-disabled": l || void 0,
            tabIndex: l || q === "min" ? -1 : g,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${re}% - 8px)` } : { left: `calc(${re}% - 8px)` },
            onKeyDown: (Q) => I("max", Q),
            onPointerDown: (Q) => z("max", Q),
            onPointerMove: P,
            onPointerUp: R,
            onFocus: () => ae("max")
          }
        )
      ] })
    }
  );
}, _t = {
  "dx-timespanpicker": "_dx-timespanpicker_9lmd1_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_9lmd1_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_9lmd1_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_9lmd1_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_9lmd1_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_9lmd1_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_9lmd1_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_9lmd1_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_9lmd1_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_9lmd1_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_9lmd1_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_9lmd1_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_9lmd1_157",
  "dx-timespanpicker-demos": "_dx-timespanpicker-demos_9lmd1_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_9lmd1_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_9lmd1_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_9lmd1_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_9lmd1_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_9lmd1_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_9lmd1_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_9lmd1_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_9lmd1_250"
}, Mv = "-10675199.02:48:05.4775808", Cv = "10675199.02:48:05.4775808", Rn = 86400, jn = 3600, wn = 60, Wo = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, ma = {
  days: Rn,
  hours: jn,
  minutes: wn,
  seconds: 1
}, Av = {
  day: Rn,
  hour: jn,
  minute: wn,
  second: 1
};
function gr(e) {
  return String(e).padStart(2, "0");
}
function Gr(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const a = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (a) {
    if (!a.slice(1).some((f) => f != null)) return null;
    const s = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, d = a[3] != null ? Number(a[3]) : 0, u = a[4] != null ? Number(a[4]) : 0;
    return n * (s * Rn + l * jn + d * wn + u);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, u = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || d > 59 ? null : n * (c * Rn + s * jn + l * wn + d + u);
  }
  return null;
}
function Dv(e) {
  return e.days * Rn + e.hours * jn + e.minutes * wn + e.seconds;
}
function ga(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Rn);
  t %= Rn;
  const r = Math.floor(t / jn);
  t %= jn;
  const a = Math.floor(t / wn), i = Math.round(t % wn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function os(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / wn) * wn : t === "hour" ? r = Math.round(r / jn) * jn : t === "day" && (r = Math.round(r / Rn) * Rn);
  let a = Math.round(r % wn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / wn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, u = Math.floor(l / 24), f = n ? "-" : "", g = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${g}${gr(d)}`;
    case "minute":
      return `${f}${g}${gr(d)}:${gr(s)}`;
    default:
      return `${f}${g}${gr(d)}:${gr(s)}:${gr(a)}`;
  }
}
function ya(e, t = "second") {
  const n = Gr(e);
  return n === null ? "" : os(n, t);
}
function qo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const qS = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Mv,
    max: c = Cv,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: g = !0,
    allowClear: h = !1,
    inline: b = !1,
    onChange: _,
    onValueChange: w,
    onOpen: m,
    onClose: p,
    disabled: y,
    placeholder: N,
    ariaLabel: x,
    triggerLabel: M,
    clearLabel: S,
    tabIndex: E,
    className: T,
    onBlur: L,
    onKeyDown: A,
    ...D
  }, v) {
    const k = le(null), $ = le(null), I = le(null), z = ct(), P = r !== void 0, [R, q] = W(
      () => a != null ? ya(a, l) : ""
    ), [ae, ie] = W(!1), [re, V] = W(null), [Ee, Q] = W(null), J = Ne(
      () => Gr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), X = Ne(
      () => Gr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), ge = Ne(() => {
      const se = Number.parseFloat(s);
      return Number.isNaN(se) || se <= 0 ? 1 : se;
    }, [s]), te = Ne(() => {
      const se = P ? r ?? "" : R;
      return se ? Gr(se) : null;
    }, [r, R, P]), ye = H(
      (se) => {
        const Le = se === null ? "" : os(se, l);
        P || q(Le), _?.(Le), w?.(Le);
      },
      [P, l, _, w]
    ), K = H(
      (se) => {
        se && re !== null && ye(re), ie(!1), V(null), Q(null), p?.(), b || I.current?.focus();
      },
      [b, re, ye, p]
    ), $e = H(() => {
      y || (V(te ?? 0), ie(!0), m?.());
    }, [y, te, m]), oe = H(() => {
      ae ? K(!1) : $e();
    }, [ae, K, $e]), De = H(
      (se, Le) => {
        V((wt) => {
          const bt = (wt ?? te ?? 0) + Le * ge * ma[se];
          return qo(bt, J, X);
        });
      },
      [te, ge, J, X]
    ), me = H(
      (se) => {
        const Le = Ee?.[se];
        if (Le == null) return;
        const wt = Number.parseFloat(Le), Ct = Number.isNaN(wt) ? 0 : wt;
        V((bt) => {
          const j = bt ?? te ?? 0, Y = ga(j);
          Y[se] = Ct;
          const we = (j < 0 ? -1 : 1) * Dv(Y);
          return qo(we, J, X);
        }), Q(null);
      },
      [Ee, te, J, X]
    ), qe = (se, Le) => {
      Q((wt) => ({ ...wt ?? {}, [se]: Le }));
    }, Je = (se, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), me(se), De(se, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), me(se), De(se, -1);
          break;
        case "Home":
          Le.preventDefault(), me(se), V(J);
          break;
        case "End":
          Le.preventDefault(), me(se), V(X);
          break;
        case "Enter":
          Le.preventDefault(), me(se), K(!0);
          break;
      }
    }, Ge = H(() => {
      if (ae) return;
      const se = Gr(R);
      ye(se !== null ? qo(se, J, X) : null);
    }, [ae, R, J, X, ye]), Qe = (se) => {
      P || q(se.target.value);
    }, He = (se) => {
      se.key === "Enter" ? (se.preventDefault(), ae ? K(!0) : Ge()) : se.key === "Escape" && ae ? (se.preventDefault(), K(!1)) : se.key === "ArrowDown" && !ae ? (se.preventDefault(), $e()) : se.key === "Tab" && ae && ie(!1), A?.(se);
    }, gt = (se) => {
      Ge(), L?.(se);
    }, ee = () => {
      P || q(""), _?.(""), w?.(""), $.current?.focus();
    };
    Oe(() => {
      if (!ae) return;
      const se = (Le) => {
        k.current && !k.current.contains(Le.target) && K(!1);
      };
      return document.addEventListener("mousedown", se), () => document.removeEventListener("mousedown", se);
    }, [ae, K]), Oe(() => {
      if (!ae) return;
      const se = (Le) => {
        Le.key === "Escape" && K(!1);
      };
      return document.addEventListener("keydown", se), () => document.removeEventListener("keydown", se);
    }, [ae, K]), Oe(() => {
      if (b && re !== null) {
        const se = te;
        (se === null || Math.abs(re - se) > 1e-9) && ye(re);
      }
    }, [b, re, te, ye]);
    const Me = H(
      (se) => {
        $.current = se, typeof v == "function" ? v(se) : v && (v.current = se);
      },
      [v]
    ), lt = P ? r ? ya(r, l) : "" : R, ze = P ? !!r : R.length > 0, st = b || ae, Xe = re ?? te ?? 0, Tt = ga(Xe), yt = Av[l], ft = ["days", "hours", "minutes", "seconds"].filter(
      (se) => ma[se] >= yt && (se === "days" ? d : se === "hours" ? u : se === "minutes" ? f : g)
    ), Ve = t === "xs" ? _t["dx-timespanpicker-input--xs"] : t === "sm" ? _t["dx-timespanpicker-input--sm"] : t === "lg" ? _t["dx-timespanpicker-input--lg"] : t === "xl" ? _t["dx-timespanpicker-input--xl"] : _t["dx-timespanpicker-input--md"], Mt = /* @__PURE__ */ C("div", { className: _t["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-demos"], "aria-live": "polite", children: os(Xe, l) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-units"], children: ft.map((se) => /* @__PURE__ */ C("label", { className: _t["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: _t["dx-timespanpicker-unit-label"], children: Wo[se] }),
        /* @__PURE__ */ C("span", { className: _t["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: _t["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: Ee?.[se] ?? String(Tt[se]),
              onChange: (Le) => qe(se, Le.target.value),
              onKeyDown: (Le) => Je(se, Le),
              onBlur: () => me(se)
            }
          ),
          /* @__PURE__ */ C("span", { className: _t["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Wo[se].toLowerCase()}`,
                onClick: () => {
                  me(se), De(se, 1);
                },
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Wo[se].toLowerCase()}`,
                onClick: () => {
                  me(se), De(se, -1);
                },
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, se)) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: _t["dx-timespanpicker-ok"],
          onClick: () => K(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ C(
      "div",
      {
        ref: k,
        className: [
          _t["dx-timespanpicker"],
          b ? _t["dx-timespanpicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ C(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Me,
                type: "text",
                autoComplete: "off",
                value: lt,
                disabled: y,
                placeholder: N,
                tabIndex: E,
                role: "combobox",
                "aria-label": x ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ae,
                "aria-controls": z,
                "aria-invalid": n || void 0,
                className: [
                  _t["dx-timespanpicker-input"],
                  Ve,
                  n ? _t["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Qe,
                onKeyDown: He,
                onBlur: gt,
                ...D
              }
            ),
            h && !y && ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _t["dx-timespanpicker-clear"],
                "aria-label": S ?? "Clear",
                onClick: ee,
                children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: I,
                type: "button",
                className: [_t["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": M ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ae,
                "aria-controls": z,
                disabled: y,
                onClick: oe,
                children: /* @__PURE__ */ o(Te, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          st && /* @__PURE__ */ o(
            "div",
            {
              id: z,
              role: b ? void 0 : "dialog",
              "aria-label": x ?? "Time span picker",
              className: b ? void 0 : _t["dx-timespanpicker-popup"],
              children: Mt
            }
          )
        ]
      }
    );
  }
), Iv = "_wrapper_ou9x5_1", zv = "_cells_ou9x5_8", Lv = "_cell_ou9x5_8", Pv = "_invalid_ou9x5_63", Rv = "_live_ou9x5_73", or = {
  wrapper: Iv,
  cells: zv,
  cell: Lv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Pv,
  live: Rv
};
function ba(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const KS = at(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: a,
    invalid: i = !1,
    size: c = "md",
    autoFocus: s = !1,
    disabled: l = !1,
    label: d = "Security code",
    liveAnnounce: u = !0,
    className: f,
    "aria-label": g
  }, h) {
    const b = ct(), _ = n !== void 0, [w, m] = W(ba(r).join("")), p = _ ? ba(n).join("") : w, y = Array.from({ length: t }, (D, v) => p[v] ?? ""), N = le([]), [x, M] = W(""), S = (D) => {
      _ || m(D), a?.(D);
    }, E = (D) => {
      const v = N.current[D];
      v && !v.disabled && (v.focus(), v.select());
    }, T = (D, v) => {
      const k = v.replace(/\D/g, "").slice(-1), $ = p.split("");
      if (k) {
        $[D] = k;
        const I = $.join("").slice(0, t);
        S(I), I.length < t ? E(D + 1) : u && M("Code complete");
      }
    }, L = (D, v) => {
      if (v.key === "Backspace") {
        if (v.preventDefault(), p[D]) {
          const k = p.split("");
          k[D] = "", S(k.join(""));
        } else if (D > 0) {
          const k = p.split("");
          k[D - 1] = "", S(k.join("")), E(D - 1);
        }
      } else v.key === "ArrowLeft" && D > 0 ? (v.preventDefault(), E(D - 1)) : v.key === "ArrowRight" && D < t - 1 ? (v.preventDefault(), E(D + 1)) : v.key === "Home" ? (v.preventDefault(), E(0)) : v.key === "End" && (v.preventDefault(), E(t - 1));
    }, A = (D, v) => {
      v.preventDefault();
      const k = v.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const $ = p.split("");
      let I = 0;
      for (let P = 0; P < k.length && D + P < t; P++)
        $[D + P] = k[P] ?? "", I++;
      const z = $.join("");
      S(z), z.length >= t ? u && M("Code complete") : E(D + I);
    };
    return /* @__PURE__ */ C(
      "div",
      {
        className: [or.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": g ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [or.cells, or[c]].join(" "), children: y.map((D, v) => /* @__PURE__ */ o(
            "input",
            {
              ref: (k) => {
                N.current[v] = k, v === 0 && h && (typeof h == "function" ? h(k) : h.current = k);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: D,
              disabled: l,
              "aria-label": `Digit ${v + 1} of ${t}`,
              "aria-invalid": i && D !== "" ? !0 : void 0,
              autoFocus: s && v === 0,
              className: [
                or.cell,
                or[`cell-${c}`],
                i ? or.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (k) => T(v, k.target.value),
              onKeyDown: (k) => L(v, k),
              onPaste: (k) => A(v, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                u && M("");
              }
            },
            v
          )) }),
          u && /* @__PURE__ */ o(
            "span",
            {
              id: `${b}-live`,
              role: "status",
              "aria-live": "polite",
              className: or.live,
              children: x
            }
          )
        ]
      }
    );
  }
), jv = "_wrapper_6lcd5_1", Bv = "_header_6lcd5_7", Fv = "_label_6lcd5_15", Hv = "_clear_6lcd5_22", Uv = "_canvas_6lcd5_53", Wv = "_disabled_6lcd5_69", yr = {
  wrapper: jv,
  header: Bv,
  label: Fv,
  clear: Hv,
  canvas: Uv,
  disabled: Wv
}, GS = at(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: a = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: c = "Clear",
    ariaLabel: s = "Signature",
    width: l,
    height: d = 140,
    disabled: u = !1,
    className: f
  }, g) {
    const h = le(null), b = le(!1), _ = le(!1), w = le({ x: 0, y: 0 });
    Oe(() => {
      const S = h.current;
      if (!S) return;
      const E = window.devicePixelRatio || 1, T = Math.round((l ?? S.clientWidth) * E), L = Math.round(d * E);
      (S.width !== T || S.height !== L) && (S.width = T, S.height = L);
      const A = S.getContext("2d");
      if (!A) return;
      A.setTransform(E, 0, 0, E, 0, 0), A.lineWidth = i, A.strokeStyle = a, A.lineCap = "round", A.lineJoin = "round";
      const D = t ?? n;
      if (D) {
        const v = new Image();
        v.onload = () => {
          A.drawImage(v, 0, 0, S.clientWidth, d);
        }, v.src = D;
      }
    }, [t, n, a, i, l, d]);
    const m = () => {
      const S = h.current;
      if (!S) return;
      const E = S.toDataURL("image/png");
      r?.(E);
    }, p = () => {
      const S = h.current;
      if (!S) return;
      const E = S.getContext("2d");
      E && E.clearRect(0, 0, S.width, S.height), r?.("");
    };
    $o(g, () => ({
      clear: p,
      toDataURL: (S = "image/png", E) => h.current?.toDataURL(S, E) ?? ""
    }));
    const y = (S) => {
      const E = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - E.left, y: S.clientY - E.top };
    }, N = (S) => {
      u || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), b.current = !0, _.current = !1, w.current = y(S));
    }, x = (S) => {
      if (!b.current) return;
      S.preventDefault();
      const E = S.currentTarget.getContext("2d");
      if (!E) return;
      const T = y(S);
      E.beginPath(), E.moveTo(w.current.x, w.current.y), E.lineTo(T.x, T.y), E.stroke(), w.current = T, _.current = !0;
    }, M = (S) => {
      b.current && (S.preventDefault(), b.current = !1, _.current && m());
    };
    return /* @__PURE__ */ C(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          yr.wrapper,
          f,
          u ? yr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ C("div", { className: yr.header, children: [
            /* @__PURE__ */ o("span", { className: yr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: yr.clear,
                onClick: p,
                disabled: u,
                children: c
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: h,
              role: "img",
              "aria-label": s,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${d}px`
              },
              className: yr.canvas,
              onPointerDown: N,
              onPointerMove: x,
              onPointerUp: M,
              onPointerCancel: M
            }
          )
        ]
      }
    );
  }
), qv = "_wrapper_dsvd2_1", Kv = "_trigger_dsvd2_7", Gv = "_list_dsvd2_35", Vv = "_row_dsvd2_44", Yv = "_name_dsvd2_59", Xv = "_size_dsvd2_68", Zv = "_progress_dsvd2_74", Jv = "_fill_dsvd2_82", Qv = "_status_dsvd2_99", ew = "_remove_dsvd2_106", En = {
  wrapper: qv,
  trigger: Kv,
  list: Gv,
  row: Vv,
  name: Yv,
  size: Xv,
  progress: Zv,
  fill: Jv,
  status: Qv,
  remove: ew
};
function xa(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const VS = at(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: a = !0,
  headers: i,
  accept: c,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: d = "Upload",
  children: u,
  onProgress: f,
  onComplete: g,
  onError: h
}, b) {
  const _ = le(null), [w, m] = W([]), p = le(/* @__PURE__ */ new Map()), y = (E, T) => {
    m(
      (L) => L.map((A) => A.file.name === E ? { ...A, ...T } : A)
    );
  }, N = (E) => {
    if (!t) return;
    const T = new XMLHttpRequest();
    p.current.set(E.file.name, T);
    const L = new FormData();
    if (L.append(r, E.file), T.upload.addEventListener("progress", (A) => {
      if (!A.lengthComputable) return;
      const D = Math.round(A.loaded / A.total * 100);
      y(E.file.name, { state: "uploading", progress: D }), f?.(E.file.name, D);
    }), T.addEventListener("load", () => {
      T.status >= 200 && T.status < 300 ? (y(E.file.name, { state: "complete", progress: 100 }), g?.(E.file.name)) : (y(E.file.name, {
        state: "error",
        message: `HTTP ${T.status}`
      }), h?.(E.file.name, `HTTP ${T.status}`));
    }), T.addEventListener("error", () => {
      y(E.file.name, { state: "error", message: "Network error" }), h?.(E.file.name, "Network error");
    }), i)
      for (const [A, D] of Object.entries(i))
        T.setRequestHeader(A, D);
    T.open("POST", t), T.send(L), y(E.file.name, { state: "uploading", progress: 0 });
  }, x = (E) => {
    if (!E) return;
    const T = [...E], L = [];
    let A = Math.max(0, s - w.length);
    for (const v of T) {
      if (l != null && v.size > l) {
        h?.(
          v.name,
          `File too large (maximum ${xa(l)})`
        );
        continue;
      }
      if (A <= 0) {
        h?.(v.name, `Too many files (maximum ${s})`);
        continue;
      }
      A -= 1, L.push(v);
    }
    const D = L.map((v) => ({
      file: v,
      state: "pending",
      progress: 0
    }));
    m((v) => [...v, ...D]), _.current && (_.current.value = ""), a && D.forEach(N);
  }, M = (E) => {
    p.current.get(E)?.abort(), p.current.delete(E), m((L) => L.filter((A) => A.file.name !== E));
  }, S = u ?? /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: En.trigger,
      onClick: () => _.current?.click(),
      children: [
        /* @__PURE__ */ o(Te, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return $o(b, () => ({
    open: () => _.current?.click(),
    upload: () => w.forEach((E) => E.state === "pending" ? N(E) : null)
  })), /* @__PURE__ */ C("div", { className: En.wrapper, children: [
    S,
    /* @__PURE__ */ o(
      "input",
      {
        ref: _,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: (E) => x(E.target.files)
      }
    ),
    !u && w.length > 0 && /* @__PURE__ */ o("ul", { className: En.list, children: w.map(({ file: E, state: T, progress: L, message: A }) => /* @__PURE__ */ C(
      "li",
      {
        className: En.row,
        "data-state": T,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: En.name, children: E.name }),
          /* @__PURE__ */ o("span", { className: En.size, children: xa(E.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: En.progress,
              role: "progressbar",
              "aria-label": `${E.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": L,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: En.fill,
                  style: { width: `${L}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: En.status, role: "status", children: T === "uploading" ? "Uploading" : T === "complete" ? "Complete" : T === "error" ? A ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: En.remove,
              "aria-label": `Remove ${E.name}`,
              onClick: () => M(E.name),
              children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
            }
          )
        ]
      },
      E.name
    )) })
  ] });
}), tw = "_zone_nl0bz_1", nw = "_dragging_nl0bz_23", rw = "_caption_nl0bz_28", ow = "_browse_nl0bz_40", sw = "_disabled_nl0bz_67", Hr = {
  zone: tw,
  dragging: nw,
  caption: rw,
  browse: ow,
  disabled: sw
};
function aw(e, t) {
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
const YS = at(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: a = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: c = "Browse",
    disabled: s = !1,
    className: l
  }, d) {
    const u = le(null), [f, g] = W(!1), h = (p) => {
      if (!p || p.length === 0) return;
      const y = [...p].filter((N) => aw(N, t ?? ""));
      y.length !== 0 && r?.(y);
    }, b = (p) => {
      s || (p.preventDefault(), g(!0));
    }, _ = (p) => {
      s || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", g(!0));
    }, w = (p) => {
      s || p.currentTarget.contains(p.relatedTarget) || g(!1);
    }, m = (p) => {
      s || (p.preventDefault(), g(!1), h(p.dataTransfer.files));
    };
    return $o(d, () => ({
      open: () => u.current?.click()
    })), // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props -- file-drop target; keyboard users pick files via the browse control; aria-disabled is the only AT-visible disabled signal on a non-form region
    /* @__PURE__ */ C(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": s || void 0,
        className: [
          Hr.zone,
          f ? Hr.dragging : null,
          s ? Hr.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: _,
        onDragLeave: w,
        onDrop: m,
        children: [
          /* @__PURE__ */ o("p", { className: Hr.caption, children: f ? i : a }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Hr.browse,
              onClick: () => u.current?.click(),
              children: c
            }
          ),
          /* @__PURE__ */ o(
            "input",
            {
              ref: u,
              type: "file",
              hidden: !0,
              disabled: s,
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
), lw = "_root_1a92d_1", iw = "_menubar_1a92d_5", cw = "_horizontal_1a92d_15", dw = "_vertical_1a92d_20", uw = "_itemWrapper_1a92d_25", fw = "_item_1a92d_25", pw = "_disabled_1a92d_61", _w = "_icon_1a92d_68", hw = "_text_1a92d_75", mw = "_caret_1a92d_79", gw = "_hasChildren_1a92d_85", yw = "_submenu_1a92d_94", bw = "_submenuItem_1a92d_118", xw = "_flyout_1a92d_155", vw = "_hamburger_1a92d_175", ww = "_responsive_1a92d_198", kw = "_mobileOpen_1a92d_207", mt = {
  root: lw,
  menubar: iw,
  horizontal: cw,
  vertical: dw,
  itemWrapper: uw,
  item: fw,
  disabled: pw,
  icon: _w,
  text: hw,
  caret: mw,
  hasChildren: gw,
  submenu: yw,
  submenuItem: bw,
  flyout: xw,
  hamburger: vw,
  responsive: ww,
  mobileOpen: kw
}, xo = cr(null);
function Nw(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function $w(e, t, n, r, a) {
  const [i, c] = W(n), s = e ? t ?? !1 : i, l = H(
    (f) => {
      e || c(f), r?.(f);
    },
    [e, r]
  ), [d, u] = W(a);
  return a !== d && (u(a), a > 0 && !e && c(!1)), Oe(() => {
    a > 0 && r?.(!1);
  }, [a]), [s, l];
}
function Sw({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: mt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: mt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Te, { icon: e, size: 16 })
    }
  ) : null;
}
function vo(e) {
  return qt(e) && e.type === Ya;
}
function fs({
  itemKey: e,
  props: t
}) {
  const n = Bn(xo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Ne(
    () => Zr.toArray(t.children).filter(qt),
    [t.children]
  ), d = l.length > 0, u = !!c, f = t.open !== void 0, [g, h] = $w(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, _ = le(0), m = (b && !f ? n.openKey === e : null) ?? g, p = H(
    (re) => {
      b && !f ? n.setOpenKey(re ? e : null) : (h(re), b && n.setOpenKey(null));
    },
    [b, f, n, e, h]
  ), [, y] = W(0);
  Oe(() => {
    if (!i) return;
    const re = () => y((V) => V + 1);
    return window.addEventListener("hashchange", re), () => window.removeEventListener("hashchange", re);
  }, [i]);
  const N = i && !d ? Nw(i, t.match) : !1, x = !u && (n.activeKey === e || n.activeKey == null && n.defaultStopKey === e), M = () => n.setActiveKey(e), S = H(
    (re) => {
      if (u) {
        re.preventDefault();
        return;
      }
      const V = { text: r, value: a, path: i };
      [n.emit(V), t.onClick?.(V)].includes(!1) && re.preventDefault(), n.closeAll();
    },
    [u, r, a, i, n, t]
  ), E = H(() => {
    if (!u) {
      if (m && (Date.now() - _.current < 600 || !n.clickToOpen)) {
        _.current = 0;
        return;
      }
      p(!m);
    }
  }, [u, m, p, n.clickToOpen]), T = H(() => {
    !d || u || n.clickToOpen || (_.current = Date.now(), p(!0));
  }, [d, u, n.clickToOpen, p]), L = H(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), A = `${n.baseId}-submenu-${e}`, [D, v] = W(null), [k, $] = W(null), I = Ne(() => {
    const re = l.findIndex(
      (V) => vo(V) && !V.props.disabled
    );
    return re >= 0 ? `${e}-${re}` : null;
  }, [l, e]), [z, P] = W(n.closeSignal);
  n.closeSignal !== z && (P(n.closeSignal), n.closeSignal > 0 && v(null));
  const R = Ne(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: D,
      setOpenKey: v,
      activeKey: k,
      setActiveKey: $,
      defaultStopKey: I
    }),
    [n, D, k, I]
  ), q = d ? /* @__PURE__ */ o("span", { className: mt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Te,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, ae = s ?? /* @__PURE__ */ C(ot, { children: [
    /* @__PURE__ */ o(
      Sw,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: mt.text, children: r }),
    q
  ] });
  if (d) {
    let re = function(V) {
      const Ee = Array.from(V.currentTarget.children).map((X) => X.querySelector('[role="menuitem"]')).filter(
        (X) => X != null && X.getAttribute("aria-disabled") !== "true" && !X.hasAttribute("disabled")
      ), Q = document.activeElement, J = Q ? Ee.indexOf(Q) : -1;
      V.key === "ArrowDown" ? (V.preventDefault(), V.stopPropagation(), (J === -1 ? Ee[0] : Ee[(J + 1) % Ee.length])?.focus()) : V.key === "ArrowUp" ? (V.preventDefault(), V.stopPropagation(), (J === -1 ? Ee[Ee.length - 1] : Ee[(J - 1 + Ee.length) % Ee.length])?.focus()) : V.key === "ArrowRight" ? Q?.getAttribute("aria-haspopup") === "menu" && (V.preventDefault(), V.stopPropagation(), Q.getAttribute("aria-expanded") !== "true" && Q.click(), document.getElementById(
        Q.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (V.key === "ArrowLeft" || V.key === "Escape") && (V.preventDefault(), V.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ C(
      "div",
      {
        className: mt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : T,
        onMouseLeave: n.clickToOpen ? void 0 : L,
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
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": m,
              "aria-controls": A,
              tabIndex: x ? 0 : -1,
              disabled: u,
              className: [
                mt.item,
                u ? mt.disabled : null,
                mt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: E,
              onFocus: M,
              children: ae
            }
          ),
          m ? /* @__PURE__ */ o(
            "div",
            {
              id: A,
              role: "menu",
              tabIndex: -1,
              "aria-label": r,
              className: [
                mt.submenu,
                n.flyout && !b ? mt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: re,
              children: /* @__PURE__ */ o(xo.Provider, { value: R, children: l.map(
                (V, Ee) => vo(V) ? /* @__PURE__ */ o(
                  fs,
                  {
                    itemKey: `${e}-${Ee}`,
                    props: V.props
                  },
                  `${e}-${Ee}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ls, { children: V }, `${e}-custom-${Ee}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const ie = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: x ? 0 : -1,
    onFocus: M,
    "data-dx-menu-item": "",
    className: [mt.submenuItem, u ? mt.disabled : null].filter(Boolean).join(" "),
    onClick: S
  };
  return i && !u ? /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...ie, children: ae }) }) : /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: u, ...ie, children: ae }) });
}
function Ya(e) {
  if (!Bn(xo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(fs, { itemKey: e.text, props: e });
}
function Ow({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: a = !1,
  onClick: i,
  onClose: c,
  ariaLabel: s = "Menu",
  toggleAriaLabel: l = "Toggle menu",
  className: d,
  ...u
}) {
  const f = ct(), g = le(null), h = le(null), [b, _] = W(null), [w, m] = W(null), [p, y] = W(0), [N, x] = W(!1), M = le(null), S = H(
    (v) => i?.(v),
    [i]
  ), E = H(() => {
    _(null), y((v) => v + 1);
  }, []);
  Oe(() => {
    if (b == null) return;
    const v = (k) => {
      g.current && !g.current.contains(k.target) && E();
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [b, E]), Oe(() => {
    M.current != null && b === M.current && (document.getElementById(`${f}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), M.current = null);
  }, [b, f]);
  const T = Ne(
    () => Zr.toArray(e).filter(qt),
    [e]
  ), L = Ne(() => {
    const v = T.findIndex(
      (k) => vo(k) && !k.props.disabled
    );
    return v >= 0 ? String(v) : null;
  }, [T]), A = Ne(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: p,
      emit: S,
      closeAll: E,
      openKey: b,
      setOpenKey: _,
      activeKey: w,
      setActiveKey: m,
      defaultStopKey: L
    }),
    [
      f,
      n,
      t,
      p,
      S,
      E,
      b,
      w,
      L
    ]
  ), D = (v) => {
    const k = h.current;
    if (!k) return;
    const $ = Array.from(k.children).map((P) => P.querySelector('[role="menuitem"]')).filter(
      (P) => P != null && !P.hasAttribute("disabled") && P.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const P = document.getElementById(`${f}-submenu-${b}`);
      if (P) {
        const R = Array.from(
          P.querySelectorAll('[role="menuitem"]')
        ).filter(
          (ie) => ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
        ), q = document.activeElement, ae = q ? R.indexOf(q) : -1;
        if (v.key === "ArrowDown") {
          v.preventDefault(), (ae === -1 ? R[0] : R[(ae + 1) % R.length])?.focus();
          return;
        }
        if (v.key === "ArrowUp") {
          v.preventDefault(), (ae === -1 ? R[R.length - 1] : R[(ae - 1 + R.length) % R.length])?.focus();
          return;
        }
        if (v.key === "Escape") {
          v.preventDefault(), E(), c?.(), k.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (v.key === "Enter" || v.key === " ") return;
      }
      if (v.key === "Escape") {
        v.preventDefault(), E(), c?.();
        return;
      }
    }
    const I = document.activeElement, z = I ? $.indexOf(I) : -1;
    if (v.key === "ArrowRight") {
      if (v.preventDefault(), $.length === 0) return;
      $[z === -1 ? 0 : (z + 1) % $.length]?.focus();
      return;
    }
    if (v.key === "ArrowLeft") {
      if (v.preventDefault(), $.length === 0) return;
      $[z === -1 ? $.length - 1 : (z - 1 + $.length) % $.length]?.focus();
      return;
    }
    if (a && (v.key === "ArrowDown" || v.key === "ArrowUp")) {
      if (v.preventDefault(), $.length === 0) return;
      (v.key === "ArrowDown" ? $[z === -1 ? 0 : (z + 1) % $.length] : $[z === -1 ? $.length - 1 : (z - 1 + $.length) % $.length])?.focus();
      return;
    }
    if (v.key === "ArrowDown") {
      if (z >= 0) {
        const P = I?.getAttribute("data-index");
        if (P == null) return;
        k.querySelector(
          `[data-index="${P}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (v.preventDefault(), M.current = P, _(P));
      }
      return;
    }
    if (v.key === "Home") {
      v.preventDefault(), $[0]?.focus();
      return;
    }
    if (v.key === "End") {
      v.preventDefault(), $[$.length - 1]?.focus();
      return;
    }
    if (v.key.length === 1 && !v.ctrlKey && !v.metaKey) {
      const P = $.map((q) => q.textContent ?? ""), R = z === -1 ? 0 : (z + 1) % $.length;
      for (let q = 0; q < $.length; q++) {
        const ae = (R + q) % $.length;
        if (P[ae]?.toLowerCase().startsWith(v.key.toLowerCase())) {
          v.preventDefault(), $[ae]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ C(
    "nav",
    {
      ref: g,
      "aria-label": s,
      className: [
        mt.root,
        a ? mt.vertical : mt.horizontal,
        r ? mt.responsive : null,
        r && N ? mt.mobileOpen : null,
        n ? mt.flyoutRoot : null,
        d
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": N,
            className: mt.hamburger,
            onClick: () => x((v) => !v),
            children: /* @__PURE__ */ o(Te, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: h,
            role: a ? "menu" : "menubar",
            "aria-label": s,
            className: mt.menubar,
            onKeyDown: D,
            children: /* @__PURE__ */ o(xo.Provider, { value: A, children: T.map(
              (v, k) => vo(v) ? /* @__PURE__ */ o(
                fs,
                {
                  itemKey: String(k),
                  props: v.props
                },
                `top-${k}`
              ) : /* @__PURE__ */ o(ls, { children: v }, `top-custom-${k}`)
            ) })
          }
        )
      ]
    }
  );
}
const Ew = "_popup_18kyn_1", Tw = "_menu_18kyn_22", ss = {
  popup: Ew,
  menu: Tw
}, Xa = cr(null);
function XS() {
  const e = Bn(Xa);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Za(e) {
  return e.map((t, n) => {
    const { children: r, ...a } = t;
    return /* @__PURE__ */ o(Ya, { ...a, children: r ? Za(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Mw({ state: e, onClose: t }) {
  const n = le(null), [r, a] = W({ left: e.x, top: e.y });
  Ko(() => {
    const c = n.current;
    if (!c) return;
    const s = c.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), Oe(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = H(
    (c) => {
      e.options.onClick?.(c);
    },
    [e.options]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: ss.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: ss.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Ow,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Za(e.options.items ?? [])
        }
      ) })
    }
  );
}
function ZS({ children: e }) {
  const [t, n] = W(null), r = H(() => {
    n((c) => (c?.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = H(
    (c, s) => {
      c.preventDefault();
      const l = c.currentTarget ?? c.target;
      n({ x: c.clientX, y: c.clientY, invoker: l, options: s });
    },
    []
  );
  Oe(() => {
    if (!t) return;
    const c = (u) => {
      const f = document.querySelector(`.${ss.popup}`);
      f && !f.contains(u.target) && r();
    }, s = (u) => {
      u.key === "Escape" && (u.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = Ne(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ C(Xa.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Mw, { state: t, onClose: r }) : null
  ] });
}
const Cw = "_root_rgcia_1", Aw = "_list_rgcia_9", Dw = "_item_rgcia_14", Iw = "_trigger_rgcia_18", zw = "_disabled_rgcia_45", Lw = "_expanded_rgcia_52", Pw = "_selected_rgcia_56", Rw = "_icon_rgcia_61", jw = "_text_rgcia_72", Bw = "_caret_rgcia_79", Fw = "_open_rgcia_86", Hw = "_submenu_rgcia_90", Uw = "_iconOnly_rgcia_172", Ww = "_stacked_rgcia_201", jt = {
  root: Cw,
  list: Aw,
  item: Dw,
  trigger: Iw,
  disabled: zw,
  expanded: Lw,
  selected: Pw,
  icon: Rw,
  text: jw,
  caret: Bw,
  open: Fw,
  submenu: Hw,
  iconOnly: Uw,
  stacked: Ww
}, wo = cr(null);
function qw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Kw(e, t) {
  const n = qw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Gw({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ o("span", { className: jt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: jt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Te, { icon: e, size: 16 })
    }
  ) : null;
}
function ps({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Bn(wo);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = Ne(
    () => Zr.toArray(n.children).filter(qt),
    [n.children]
  ), d = l.length > 0, u = !!s, f = n.match ?? r.match, g = n.expanded !== void 0, [h, b] = W(
    n.defaultExpanded ?? !1
  ), _ = g ? n.expanded ?? !1 : h, w = H(
    (R) => {
      g || b(R), n.onExpandedChange?.(R);
    },
    [g, n]
  );
  Oe(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && w(!1);
  }, [r.collapseSignal]);
  const m = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, y] = W(
    n.defaultSelected ?? !1
  ), N = !m && c ? Kw(c, f) : !1, x = n.selected ?? (m ? p : N || p), [, M] = W(0);
  Oe(() => {
    if (!c) return;
    const R = () => M((q) => q + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [c]);
  const S = Ne(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        w(!0), r.openAncestors();
      }
    }),
    [r, w]
  );
  Oe(() => {
    N && t.length > 0 && S.openAncestors();
  }, []);
  const E = H(
    (R) => {
      if (u) {
        R.preventDefault();
        return;
      }
      const q = { text: a, value: i, path: c };
      [r.emit(q), n.onClick?.(q)].includes(!1) && R.preventDefault(), m || y(!0), n.onSelectedChange?.(!0);
    },
    [u, a, i, c, r, n, m]
  ), T = H(() => {
    u || (_ || r.notifyOpened(e, t), w(!_));
  }, [u, _, r, e, t, w]), L = H(
    (R) => {
      R.key === "Enter" || R.key === " " ? (R.preventDefault(), d ? T() : R.target.click()) : R.key === "Escape" && _ ? (R.preventDefault(), w(!1)) : R.key === "ArrowRight" && d && !_ ? (R.preventDefault(), r.notifyOpened(e, t), w(!0)) : R.key === "ArrowLeft" && _ && (R.preventDefault(), w(!1));
    },
    [d, T, _, w, r, e, t]
  ), A = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [jt.caret, _ ? jt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, D = n.template ?? /* @__PURE__ */ C(ot, { children: [
    /* @__PURE__ */ o(
      Gw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: jt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: jt.text, children: a }),
    A
  ] }), v = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, $ = [
    jt.trigger,
    u ? jt.disabled : null,
    _ ? jt.expanded : null,
    x ? jt.selected : null
  ].filter(Boolean).join(" "), I = r.level > 0 ? "menuitem" : void 0, z = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: k,
      role: I,
      "aria-expanded": _,
      "aria-controls": v,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: $,
      onClick: T,
      onKeyDown: L,
      children: D
    }
  ) : c && !u ? /* @__PURE__ */ o(
    "a",
    {
      id: k,
      role: I,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": x ? "page" : void 0,
      tabIndex: 0,
      className: $,
      onClick: E,
      onKeyDown: L,
      children: D
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: k,
      role: I,
      "aria-current": x ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: $,
      onClick: E,
      onKeyDown: L,
      children: D
    }
  ), P = d ? r.renderMode === "server" && !_ ? null : /* @__PURE__ */ o(
    "div",
    {
      id: v,
      role: "menu",
      "aria-labelledby": k,
      className: jt.submenu,
      hidden: r.renderMode === "client" && !_ ? !0 : void 0,
      children: /* @__PURE__ */ o(wo.Provider, { value: S, children: l.map((R, q) => /* @__PURE__ */ o(
        ps,
        {
          itemKey: `${e}-${q}`,
          ancestors: [...t, e],
          props: R.props
        },
        `${e}-${q}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ C(
    "div",
    {
      className: jt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        z,
        P
      ]
    }
  );
}
function JS(e) {
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(ps, { itemKey: e.text, ancestors: [], props: e });
}
function QS({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: a = "prefix",
  renderMode: i = "client",
  onClick: c,
  ariaLabel: s = "Panel menu",
  className: l,
  ...d
}) {
  const u = ct(), [f, g] = W(0), h = le(/* @__PURE__ */ new Set()), b = H(
    (N) => c?.(N),
    [c]
  ), _ = H(
    (N, x) => {
      t || (h.current = /* @__PURE__ */ new Set([N, ...x]), g((M) => M + 1));
    },
    [t]
  ), w = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (x) => !x.hasAttribute("disabled") && x.getAttribute("aria-disabled") !== "true" && x.closest("[hidden]") == null
  ), m = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const x = N.target, M = w(N.currentTarget), S = M.indexOf(x);
        if (S === -1) return;
        N.preventDefault();
        const E = N.key === "ArrowDown" ? 1 : -1;
        M[(S + E + M.length) % M.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const x = w(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? x[0] : x[x.length - 1])?.focus();
      }
    }
  }, p = Ne(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: a,
      level: 0,
      collapseSignal: f,
      collapseSkipRef: h,
      emit: b,
      notifyOpened: _,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      n,
      r,
      i,
      a,
      f,
      b,
      _
    ]
  ), y = Ne(
    () => Zr.toArray(e).filter(qt),
    [e]
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- arrow-key navigation is delegated from child links to this nav's keydown handler
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": s,
        className: [
          jt.root,
          n === "icon" ? jt.iconOnly : null,
          n === "stacked" ? jt.stacked : null,
          l
        ].filter(Boolean).join(" "),
        onKeyDown: m,
        ...d,
        children: /* @__PURE__ */ o("div", { className: jt.list, role: "presentation", children: /* @__PURE__ */ o(wo.Provider, { value: p, children: y.map((N, x) => /* @__PURE__ */ o(
          ps,
          {
            itemKey: String(x),
            ancestors: [],
            props: N.props
          },
          `top-${x}`
        )) }) })
      }
    )
  );
}
const Vw = "_root_5numg_1", Yw = "_trigger_5numg_7", Xw = "_defaultTrigger_5numg_40", Zw = "_avatar_5numg_46", Jw = "_menu_5numg_58", Qw = "_item_5numg_74", e2 = "_disabled_5numg_88", t2 = "_active_5numg_97", n2 = "_icon_5numg_107", r2 = "_text_5numg_114", Tn = {
  root: Vw,
  trigger: Yw,
  defaultTrigger: Xw,
  avatar: Zw,
  menu: Jw,
  item: Qw,
  disabled: e2,
  active: t2,
  icon: n2,
  text: r2
};
function eO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = ct(), c = `${i}-menu`, s = le(null), l = le(null), [d, u] = W(!1), [f, g] = W(-1), h = t, b = e.map((x, M) => x.disabled ? -1 : M).filter((x) => x >= 0), _ = H(
    (x) => {
      if (x.disabled) return;
      const M = {
        text: x.text,
        path: x.path
      };
      n?.(M), u(!1), l.current?.focus();
    },
    [n]
  ), w = H(() => {
    g(b[0] ?? -1), u(!0);
  }, [b]), m = H(() => {
    u(!1), g(-1), l.current?.focus();
  }, []);
  Oe(() => {
    if (!d) return;
    const x = (M) => {
      s.current && !s.current.contains(M.target) && (u(!1), g(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [d]), Oe(() => {
    if (!d) return;
    const x = (M) => {
      M.key === "Escape" && (M.preventDefault(), m());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [d, m]);
  const p = (x) => {
    if (b.length === 0) return;
    const M = b.indexOf(f), S = M === -1 ? 0 : (M + x + b.length) % b.length, E = b[S];
    E != null && g(E);
  }, y = (x) => {
    if (!d) {
      (x.key === "ArrowDown" || x.key === "Enter" || x.key === " ") && (x.preventDefault(), w());
      return;
    }
    switch (x.key) {
      case "Escape":
        x.preventDefault(), m();
        break;
      case "ArrowDown":
        x.preventDefault(), p(1);
        break;
      case "ArrowUp":
        x.preventDefault(), p(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && g(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && g(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), f >= 0) {
          const M = e[f];
          M && !M.disabled && _(M);
        }
        break;
      case "Tab":
        u(!1), g(-1);
        break;
    }
  }, N = (x) => {
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), p(1);
        break;
      case "ArrowUp":
        x.preventDefault(), p(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && g(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && g(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), f >= 0) {
          const M = e[f];
          M && !M.disabled && _(M);
        }
        break;
      case "Escape":
        x.preventDefault(), m();
        break;
      case "Tab":
        u(!1), g(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [Tn.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ C("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": c,
            "aria-label": r,
            className: Tn.trigger,
            onClick: () => d ? m() : w(),
            onKeyDown: y,
            children: h ?? /* @__PURE__ */ C("span", { className: Tn.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Tn.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ o("span", { children: "Profile" })
            ] })
          }
        ),
        d ? /* @__PURE__ */ o(
          "div",
          {
            id: c,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": f >= 0 ? `${i}-item-${f}` : void 0,
            className: Tn.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((x, M) => {
              const S = !!x.disabled, E = M === f;
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleMenuKeyDown on the menu container
                /* @__PURE__ */ C(
                  "div",
                  {
                    id: `${i}-item-${M}`,
                    role: "menuitem",
                    "aria-disabled": S || void 0,
                    tabIndex: S ? -1 : 0,
                    className: [
                      Tn.item,
                      E ? Tn.active : null,
                      S ? Tn.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => {
                      S || _(x);
                    },
                    onMouseEnter: () => {
                      S || g(M);
                    },
                    children: [
                      x.icon ? /* @__PURE__ */ o("span", { className: Tn.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: x.icon, size: "sm" }) }) : null,
                      /* @__PURE__ */ o("span", { className: Tn.text, children: x.text })
                    ]
                  },
                  `${x.text}-${M}`
                )
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const o2 = "_root_1o8i4_1", s2 = "_bottomRight_1o8i4_11", a2 = "_bottomLeft_1o8i4_16", l2 = "_topRight_1o8i4_21", i2 = "_topLeft_1o8i4_26", c2 = "_menu_1o8i4_50", d2 = "_itemWrapper_1o8i4_93", u2 = "_tooltip_1o8i4_99", f2 = "_main_1o8i4_121", p2 = "_mainIcon_1o8i4_149", _2 = "_mainOpen_1o8i4_154", h2 = "_item_1o8i4_93", m2 = "_disabled_1o8i4_186", g2 = "_itemIcon_1o8i4_193", Kt = {
  root: o2,
  bottomRight: s2,
  bottomLeft: a2,
  topRight: l2,
  topLeft: i2,
  menu: c2,
  itemWrapper: d2,
  tooltip: u2,
  main: f2,
  mainIcon: p2,
  mainOpen: _2,
  item: h2,
  disabled: m2,
  itemIcon: g2
};
function tO({
  items: e,
  position: t,
  icon: n = "add",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${ct()}-menu`, d = le(null), u = le(null), [f, g] = W(!1), h = H(
    (m) => {
      if (m.disabled) return;
      const p = { text: m.text, value: m.value };
      r?.(p), g(!1), u.current?.focus();
    },
    [r]
  );
  Oe(() => {
    if (!f) return;
    const m = (p) => {
      d.current && !d.current.contains(p.target) && g(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [f]), Oe(() => {
    if (!f) return;
    const m = (p) => {
      p.key === "Escape" && (g(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [f]);
  const b = c === "bottom-right" ? Kt.bottomRight : c === "bottom-left" ? Kt.bottomLeft : c === "top-right" ? Kt.topRight : Kt.topLeft, _ = (m) => {
    !f && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), g(!0)) : f && m.key === "Escape" && (m.preventDefault(), g(!1));
  }, w = (m) => {
    m.key === "Escape" && (m.preventDefault(), g(!1), u.current?.focus());
  };
  return /* @__PURE__ */ C(
    "div",
    {
      ref: d,
      className: [Kt.root, b, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            tabIndex: -1,
            "aria-label": a,
            className: Kt.menu,
            onKeyDown: w,
            children: e.map((m, p) => {
              const y = !!m.disabled;
              return /* @__PURE__ */ C("div", { className: Kt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: Kt.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": y || void 0,
                    title: m.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [Kt.item, y ? Kt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => h(m),
                    children: /* @__PURE__ */ o("span", { className: Kt.itemIcon, "aria-hidden": "true", children: m.icon ? /* @__PURE__ */ o(Te, { icon: m.icon, size: 18 }) : /* @__PURE__ */ o("span", { children: "•" }) })
                  }
                )
              ] }, `${m.text}-${p}`);
            })
          }
        ) : null,
        /* @__PURE__ */ o(
          "button",
          {
            ref: u,
            type: "button",
            className: Kt.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => g((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Kt.mainIcon, f ? Kt.mainOpen : null].filter(Boolean).join(" "),
                children: /* @__PURE__ */ o(Te, { icon: n, size: 24 })
              }
            )
          }
        )
      ]
    }
  );
}
const y2 = "_root_1eyur_1", b2 = "_list_1eyur_5", x2 = "_item_1eyur_15", v2 = "_link_1eyur_22", w2 = "_linkButton_1eyur_23", k2 = "_current_1eyur_24", N2 = "_disabled_1eyur_68", $2 = "_icon_1eyur_74", S2 = "_text_1eyur_81", O2 = "_separator_1eyur_85", ht = {
  root: y2,
  list: b2,
  item: x2,
  link: v2,
  linkButton: w2,
  current: k2,
  disabled: N2,
  icon: $2,
  text: S2,
  separator: O2
};
function nO({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const a = t, i = (c) => {
    c.disabled || a?.({ text: c.text, path: c.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [ht.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: ht.list, children: e.map((c, s) => {
        const l = s === e.length - 1, d = !!c.disabled;
        return /* @__PURE__ */ C("li", { className: ht.item, children: [
          l ? d ? /* @__PURE__ */ C(
            "span",
            {
              className: [ht.current, ht.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
                c.text
              ]
            }
          ) : c.path ? /* @__PURE__ */ C(
            "a",
            {
              href: c.path,
              className: ht.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ C("span", { className: ht.current, "aria-current": "page", children: [
            c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
            c.text
          ] }) : d ? /* @__PURE__ */ C(
            "span",
            {
              className: [ht.link, ht.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : c.path ? /* @__PURE__ */ C(
            "a",
            {
              href: c.path,
              className: ht.link,
              onClick: (u) => {
                u.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              className: ht.linkButton,
              tabIndex: 0,
              onClick: () => i(c),
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ o("span", { className: ht.separator, "aria-hidden": "true", children: "/" })
        ] }, `${c.text}-${s}`);
      }) })
    }
  );
}
const E2 = "_link_tmy3k_1", T2 = {
  link: E2
}, rO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ C(ot, { children: [
    n != null && /* @__PURE__ */ o(Te, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [T2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: u, ...f } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: c,
        className: l,
        href: u,
        ...f,
        children: s
      }
    );
  }
  return /* @__PURE__ */ o(
    "button",
    {
      ref: c,
      type: "button",
      className: l,
      ...i,
      children: s
    }
  );
}), M2 = "_root_dnkuu_1", C2 = "_list_dnkuu_5", A2 = "_item_dnkuu_15", D2 = "_connector_dnkuu_21", I2 = "_connectorCompleted_dnkuu_30", z2 = "_step_dnkuu_34", L2 = "_active_dnkuu_69", P2 = "_completed_dnkuu_75", R2 = "_circle_dnkuu_79", j2 = "_check_dnkuu_109", B2 = "_icon_dnkuu_114", F2 = "_number_dnkuu_119", H2 = "_text_dnkuu_124", Gt = {
  root: M2,
  list: C2,
  item: A2,
  connector: D2,
  connectorCompleted: I2,
  step: z2,
  active: L2,
  completed: P2,
  circle: R2,
  check: j2,
  icon: B2,
  number: F2,
  text: H2
};
function oO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: a,
  Linear: i,
  onChange: c,
  Change: s,
  onSelectedIndexChange: l,
  ariaLabel: d = "Steps",
  className: u
}) {
  const f = a ?? i ?? !1, g = t ?? n, h = g !== void 0, [b, _] = W(() => Math.min(Math.max(0, g ?? r), Math.max(0, e.length - 1))), m = Math.min(
    Math.max(0, h ? g : b),
    Math.max(0, e.length - 1)
  ), p = le(null), y = H(
    (M) => {
      const S = Math.min(
        Math.max(0, M),
        Math.max(0, e.length - 1)
      );
      h || _(S), (c ?? s ?? l)?.(S);
    },
    [h, c, s, l, e.length]
  ), N = H(
    (M, S) => !!(S.disabled || f && M > m + 1),
    [f, m]
  ), x = (M) => {
    const S = Array.from(
      M.currentTarget.querySelectorAll("button[data-step]")
    ).filter((L) => L.getAttribute("aria-disabled") !== "true" && !L.disabled), E = document.activeElement, T = E ? S.indexOf(E) : -1;
    if (M.key === "ArrowRight" || M.key === "ArrowDown") {
      if (M.preventDefault(), S.length === 0) return;
      const L = T === -1 ? 0 : (T + 1) % S.length, A = S[L];
      A && A.focus();
    } else if (M.key === "ArrowLeft" || M.key === "ArrowUp") {
      if (M.preventDefault(), S.length === 0) return;
      const L = T === -1 ? S.length - 1 : (T - 1 + S.length) % S.length, A = S[L];
      A && A.focus();
    } else M.key === "Home" ? (M.preventDefault(), S[0]?.focus()) : M.key === "End" && (M.preventDefault(), S[S.length - 1]?.focus());
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Home/End and arrow keys are delegated to the step buttons inside this nav
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": d,
        className: [Gt.root, u].filter(Boolean).join(" "),
        onKeyDown: x,
        children: /* @__PURE__ */ o("ol", { ref: p, className: Gt.list, children: e.map((M, S) => {
          const E = S === m, T = S < m, L = N(S, M);
          return /* @__PURE__ */ C("li", { className: Gt.item, children: [
            S > 0 ? /* @__PURE__ */ o(
              "span",
              {
                className: [
                  Gt.connector,
                  T ? Gt.connectorCompleted : null
                ].filter(Boolean).join(" "),
                "aria-hidden": "true"
              }
            ) : null,
            /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                "data-step": S,
                "aria-current": E ? "step" : void 0,
                "aria-disabled": L ? "true" : void 0,
                disabled: L,
                tabIndex: L ? -1 : 0,
                className: [
                  Gt.step,
                  E ? Gt.active : null,
                  T ? Gt.completed : null,
                  L ? Gt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => {
                  L || y(S);
                },
                children: [
                  /* @__PURE__ */ o("span", { className: Gt.circle, "aria-hidden": "true", children: T ? /* @__PURE__ */ o("span", { className: Gt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "check", size: "sm" }) }) : M.icon ? /* @__PURE__ */ o("span", { className: Gt.icon, children: /* @__PURE__ */ o(Te, { icon: M.icon, size: 14 }) }) : /* @__PURE__ */ o("span", { className: Gt.number, children: S + 1 }) }),
                  /* @__PURE__ */ o("span", { className: Gt.text, children: M.text })
                ]
              }
            )
          ] }, `${M.text}-${S}`);
        }) })
      }
    )
  );
}
const U2 = "_root_12hod_1", W2 = "_horizontal_12hod_13", q2 = "_vertical_12hod_17", K2 = "_pane_12hod_21", G2 = "_handle_12hod_31", V2 = "_handleHorizontal_12hod_51", Y2 = "_handleVertical_12hod_57", X2 = "_handleGrip_12hod_63", Z2 = "_handleCollapseHint_12hod_75", J2 = "_collapseBtn_12hod_79", Q2 = "_collapseBtnCollapsed_12hod_109", pn = {
  root: U2,
  horizontal: W2,
  vertical: q2,
  pane: K2,
  handle: G2,
  handleHorizontal: V2,
  handleVertical: Y2,
  handleGrip: X2,
  handleCollapseHint: Z2,
  collapseBtn: J2,
  collapseBtnCollapsed: Q2
};
function Ur(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const a = parseFloat(n.slice(0, -1));
    return Number.isNaN(a) ? t : a;
  }
  if (n.endsWith("px")) {
    const a = parseFloat(n.slice(0, -2));
    return Number.isNaN(a) ? t : a;
  }
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function Ln(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function sO({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: a,
  onCollapse: i,
  Collapse: c,
  ariaLabel: s = "Splitter",
  className: l
}) {
  const d = e ?? t ?? "horizontal", u = d === "horizontal", f = le(null), g = H(() => {
    const $ = n.length;
    if ($ === 0) return [];
    const I = n.map((P) => P.size ? Ur(P.size, 100 / $) : 100 / $), z = I.reduce((P, R) => P + R, 0);
    return Math.abs(z - 100) > 0.01 && z > 0 ? I.map((P) => P / z * 100) : I;
  }, [n]), [h, b] = W(() => g()), [_, w] = W(
    () => n.map(($) => !!$.collapsed)
  ), m = le(h), [p, y] = W(n);
  n !== p && (y(n), w(n.map(($) => !!$.collapsed)));
  const N = H(
    () => n.map(($) => Ur($.min, 0)),
    [n]
  ), x = H(
    () => n.map(($) => Ur($.max, 100)),
    [n]
  ), M = H(
    ($, I) => {
      const z = { paneIndex: $, newSize: I, cancel: !1 };
      return (r ?? a)?.(z), !z.cancel;
    },
    [r, a]
  ), S = H(
    ($, I) => {
      const z = { paneIndex: $, collapse: I, cancel: !1 };
      return (i ?? c)?.(z), !z.cancel;
    },
    [i, c]
  ), E = H(
    ($) => {
      const I = !_[$];
      S($, I) && (I ? (m.current = [...h], w((z) => {
        const P = [...z];
        return P[$] !== void 0 && (P[$] = !0), P;
      }), b((z) => {
        const P = [...z], R = P[$] ?? 0, q = $ < P.length - 1 ? $ + 1 : $ - 1;
        if (q >= 0 && q < P.length) {
          const ae = P[q] ?? 0;
          P[q] = ae + R, P[$] = 0;
        } else
          P[$] = 0;
        return P;
      })) : (w((z) => {
        const P = [...z];
        return P[$] !== void 0 && (P[$] = !1), P;
      }), b(() => {
        const z = [...m.current];
        return z.length !== n.length ? n.map(() => 100 / n.length) : z;
      })));
    },
    [_, h, n, S]
  ), T = le(
    null
  ), L = H(
    ($, I, z) => {
      const P = f.current;
      if (!P) return null;
      const R = P.getBoundingClientRect();
      let q;
      if (u) {
        if (R.width === 0) return null;
        q = (I - R.left) / R.width * 100;
      } else {
        if (R.height === 0) return null;
        q = (z - R.top) / R.height * 100;
      }
      let ae = 0;
      for (let re = 0; re < $; re++) {
        const V = h[re];
        V !== void 0 && (ae += V);
      }
      return q - ae;
    },
    [u, h]
  ), A = ($, I) => {
    I.preventDefault();
    const z = I.currentTarget;
    z.focus(), typeof z.setPointerCapture == "function" && z.setPointerCapture(I.pointerId), T.current = { handleIndex: $, pointerId: I.pointerId };
  }, D = ($) => {
    if (!T.current || T.current.pointerId !== $.pointerId)
      return;
    $.preventDefault();
    const I = T.current.handleIndex, z = L(I, $.clientX, $.clientY);
    if (z == null) return;
    const P = N(), R = x(), q = P[I] ?? 0, ae = R[I] ?? 100, ie = I + 1, re = P[ie] ?? 0, V = R[ie] ?? 100, Ee = h[I] ?? 0, Q = h[ie] ?? 0, J = Ee + Q;
    if (J <= 0) return;
    let X = Ln(z, q, ae), ge = J - X;
    if (ge < re) {
      if (ge = re, X = J - ge, X < q || X > ae) return;
    } else if (ge > V && (ge = V, X = J - ge, X < q || X > ae))
      return;
    X = Ln(X, q, ae), ge = J - X, M(I, X) && b((te) => {
      const ye = [...te];
      return ye[I] = X, ye[ie] = ge, ye;
    });
  }, v = ($) => {
    !T.current || T.current.pointerId !== $.pointerId || (T.current = null);
  }, k = ($, I) => {
    const z = N(), P = x(), R = $, q = $ + 1, ae = h[R] ?? 0, ie = h[q] ?? 0, re = ae + ie;
    let V = 0;
    const Ee = !!n[R]?.collapsible, Q = !!n[q]?.collapsible;
    if (u ? I.key === "ArrowLeft" ? V = -5 : I.key === "ArrowRight" && (V = 5) : I.key === "ArrowUp" ? V = -5 : I.key === "ArrowDown" && (V = 5), I.key === "Home") {
      I.preventDefault();
      let J = z[R] ?? 0, X = re - J;
      if (X = Ln(
        X,
        z[q] ?? 0,
        P[q] ?? 100
      ), J = re - X, J = Ln(J, z[R] ?? 0, P[R] ?? 100), !M(R, J)) return;
      b((ge) => {
        const te = [...ge];
        return te[R] = J, te[q] = X, te;
      });
      return;
    }
    if (I.key === "End") {
      I.preventDefault();
      let J = P[R] ?? 100;
      J = Math.min(J, re - (z[q] ?? 0));
      let X = re - J;
      if (X = Ln(
        X,
        z[q] ?? 0,
        P[q] ?? 100
      ), J = re - X, J = Ln(J, z[R] ?? 0, P[R] ?? 100), !M(R, J)) return;
      b((ge) => {
        const te = [...ge];
        return te[R] = J, te[q] = X, te;
      });
      return;
    }
    if ((I.key === "Enter" || I.key === " ") && (Ee || Q)) {
      I.preventDefault(), E(Ee ? R : q);
      return;
    }
    if (V !== 0) {
      I.preventDefault();
      let J = ae + V, X = re - J;
      const ge = z[R] ?? 0, te = P[R] ?? 100, ye = z[q] ?? 0, K = P[q] ?? 100;
      if (J = Ln(J, ge, te), X = re - J, (X < ye || X > K) && (X = Ln(X, ye, K), J = re - X, J = Ln(J, ge, te), X = re - J), !M(R, J)) return;
      b(($e) => {
        const oe = [...$e];
        return oe[R] = J, oe[q] = X, oe;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: [
        pn.root,
        u ? pn.horizontal : pn.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map(($, I) => {
        const z = !!_[I], P = z ? 0 : h[I] ?? 100 / n.length, R = z ? { display: "none" } : u ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, q = Ur($.min, 0), ae = Ur($.max, 100), ie = I < n.length - 1, re = !!n[I + 1]?.collapsible;
        return /* @__PURE__ */ C("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ C(
            "div",
            {
              role: "group",
              "aria-label": $.label ?? `Pane ${I + 1}`,
              className: pn.pane,
              style: R,
              "data-collapsed": z ? "true" : void 0,
              children: [
                z ? null : $.children,
                $.collapsible && !z ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Collapse pane ${I + 1}`,
                    "aria-expanded": !z,
                    onClick: () => E(I),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                $.collapsible && z ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Expand pane ${I + 1}`,
                    "aria-expanded": !z,
                    onClick: () => E(I),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          z && $.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: pn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${I + 1}`,
                "aria-expanded": "false",
                onClick: () => E(I),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          ie ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- focusable separator with arrow-key resize (handleSeparatorKeyDown); pointer drag is the mouse equivalent
            /* @__PURE__ */ C(
              "div",
              {
                role: "separator",
                "aria-orientation": d,
                "aria-valuemin": q,
                "aria-valuemax": ae,
                "aria-valuenow": Math.round(P),
                "aria-label": `Resize handle ${I + 1}`,
                tabIndex: z || _[I + 1] ? -1 : 0,
                className: [
                  pn.handle,
                  u ? pn.handleHorizontal : pn.handleVertical
                ].filter(Boolean).join(" "),
                onPointerDown: (V) => A(I, V),
                onPointerMove: D,
                onPointerUp: v,
                onKeyDown: (V) => k(I, V),
                children: [
                  /* @__PURE__ */ o("span", { className: pn.handleGrip, "aria-hidden": "true" }),
                  ($.collapsible || re) && /* @__PURE__ */ o(
                    "span",
                    {
                      className: pn.handleCollapseHint,
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            )
          ) : null
        ] }, I);
      })
    }
  );
}
const ek = "_root_1w3wd_1", tk = "_list_1w3wd_5", nk = "_vertical_1w3wd_14", rk = "_horizontal_1w3wd_20", ok = "_item_1w3wd_28", sk = "_link_1w3wd_32", ak = "_active_1w3wd_57", br = {
  root: ek,
  list: tk,
  vertical: nk,
  horizontal: rk,
  item: ok,
  link: sk,
  active: ak
};
function aO({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: a,
  onClick: i,
  Click: c,
  ariaLabel: s = "Table of contents",
  className: l
}) {
  const d = t ?? n, u = r ?? a ?? "vertical", [f, g] = W(
    () => e[0]?.selector ?? null
  ), h = le(f);
  Oe(() => {
    h.current = f;
  });
  const b = H(
    (_, w) => {
      if (g(_.selector), (i ?? c)?.({ text: _.text, selector: _.selector }), w) {
        try {
          w.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          w.scrollIntoView();
        }
        const p = w;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [i, c]
  );
  return Oe(() => {
    if (e.length === 0) return;
    const w = (() => {
      if (d) {
        const x = document.querySelector(d);
        if (x) return x;
      }
      return window;
    })();
    let m = null;
    const p = /* @__PURE__ */ new Map(), y = () => {
      let x = null, M = null;
      for (const E of e) {
        const T = document.querySelector(E.selector);
        if (!T) continue;
        p.set(E.selector, T);
        const L = T.getBoundingClientRect();
        let A = L.top;
        if (w !== window) {
          const D = w.getBoundingClientRect();
          A = L.top - D.top;
        }
        A <= 80 ? (!M || A > M.el.getBoundingClientRect().top - (w !== window ? w.getBoundingClientRect().top : 0)) && (M = { sel: E.selector, el: T }) : (!x || A < x.top) && (x = { sel: E.selector, top: A });
      }
      const S = M?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      S && S !== h.current && g(S);
    }, N = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const x = w === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: w,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      m = new IntersectionObserver((M) => {
        const S = M.filter((E) => E.isIntersecting).sort((E, T) => E.boundingClientRect.top - T.boundingClientRect.top);
        if (S[0]) {
          const E = S[0].target;
          for (const T of e) {
            if (document.querySelector(T.selector) === E) {
              g(T.selector);
              break;
            }
            if (T.selector.startsWith("#") && E.id === T.selector.slice(1)) {
              g(T.selector);
              break;
            }
          }
        } else
          y();
      }, x);
      for (const M of e) {
        const S = document.querySelector(M.selector);
        S && (m.observe(S), p.set(M.selector, S));
      }
    }
    return w === window ? (window.addEventListener("scroll", N, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", N), m?.disconnect();
    }) : (w.addEventListener("scroll", N, {
      passive: !0
    }), y(), () => {
      w.removeEventListener("scroll", N), m?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [br.root, br[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: br.list, children: e.map((_) => {
        const w = _.selector === f;
        return /* @__PURE__ */ o("li", { className: br.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: _.selector.startsWith("#") || _.selector.startsWith(".") ? _.selector : `#${_.selector}`,
            className: [br.link, w ? br.active : null].filter(Boolean).join(" "),
            "aria-current": w ? "location" : void 0,
            onClick: (m) => {
              m.preventDefault();
              const p = document.querySelector(_.selector);
              b(_, p);
            },
            children: _.text
          }
        ) }, `${_.text}-${_.selector}`);
      }) })
    }
  );
}
const lk = "_root_1bfit_1", ik = "_viewport_1bfit_17", ck = "_slide_1bfit_24", dk = "_active_1bfit_33", uk = "_arrow_1bfit_37", fk = "_prev_1bfit_71", pk = "_next_1bfit_75", _k = "_pauseBtn_1bfit_79", hk = "_indicators_1bfit_110", mk = "_indicator_1bfit_110", gk = "_indicatorActive_1bfit_145", _n = {
  root: lk,
  viewport: ik,
  slide: ck,
  active: dk,
  arrow: uk,
  prev: fk,
  next: pk,
  pauseBtn: _k,
  indicators: hk,
  indicator: mk,
  indicatorActive: gk
};
function lO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: a,
  Auto: i,
  interval: c,
  Interval: s,
  pauseOnHover: l,
  PauseOnHover: d,
  showArrows: u,
  ShowArrows: f,
  showIndicators: g,
  ShowIndicators: h,
  onChange: b,
  Change: _,
  ariaLabel: w = "Carousel",
  className: m
}) {
  const p = t ?? n, y = p !== void 0, [N, x] = W(() => Math.min(Math.max(0, p ?? r), Math.max(0, e.length - 1))), M = y ? p : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, M), e.length - 1), E = a ?? i ?? !1, T = c ?? s ?? 3e3, L = l ?? d ?? !0, A = u ?? f ?? !0, D = g ?? h ?? !0, [v, k] = W(!1), [$, I] = W(!1), z = v || $, P = le(null), R = ct(), q = H(
    (te) => {
      const ye = e.length === 0 ? 0 : (te % e.length + e.length) % e.length;
      y || x(ye), (b ?? _)?.(ye);
    },
    [y, b, _, e.length]
  ), ae = H(() => {
    q(S - 1);
  }, [q, S]), ie = H(() => {
    q(S + 1);
  }, [q, S]), re = H(
    (te) => {
      q(te);
    },
    [q]
  ), V = Oo("(prefers-reduced-motion: reduce)");
  Oe(() => {
    if (!E || z || V || e.length <= 1) return;
    const te = setInterval(() => {
      q(S + 1);
    }, T);
    return () => clearInterval(te);
  }, [
    E,
    z,
    V,
    T,
    S,
    q,
    e.length
  ]);
  const Ee = (te) => {
    e.length !== 0 && (te.key === "ArrowLeft" ? (te.preventDefault(), ae()) : te.key === "ArrowRight" ? (te.preventDefault(), ie()) : te.key === "Home" ? (te.preventDefault(), re(0)) : te.key === "End" && (te.preventDefault(), re(e.length - 1)));
  }, Q = () => {
    L && E && I(!0);
  }, J = () => {
    L && E && I(!1);
  }, X = () => {
    L && E && I(!0);
  }, ge = () => {
    L && E && I(!1);
  };
  return e.length === 0 ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover pause/play plus arrow-key handlers; this region is the carousel's keyboard control surface
    /* @__PURE__ */ C(
      "div",
      {
        ref: P,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": w,
        tabIndex: 0,
        className: [_n.root, m].filter(Boolean).join(" "),
        onKeyDown: Ee,
        onMouseEnter: Q,
        onMouseLeave: J,
        onFocusCapture: X,
        onBlurCapture: ge,
        children: [
          /* @__PURE__ */ o("div", { id: R, className: _n.viewport, children: e.map((te, ye) => {
            const K = ye === S;
            return /* @__PURE__ */ o(
              "div",
              {
                role: "group",
                "aria-roledescription": "slide",
                "aria-label": `Slide ${ye + 1} of ${e.length}`,
                "aria-hidden": K ? void 0 : !0,
                hidden: !K,
                className: [_n.slide, K ? _n.active : null].filter(Boolean).join(" "),
                children: te
              },
              ye
            );
          }) }),
          A && e.length > 1 ? /* @__PURE__ */ C(ot, { children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
                "aria-label": "Previous slide",
                "aria-controls": R,
                onClick: ae,
                children: "‹"
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.next].filter(Boolean).join(" "),
                "aria-label": "Next slide",
                "aria-controls": R,
                onClick: ie,
                children: "›"
              }
            )
          ] }) : null,
          E ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: _n.pauseBtn,
              "aria-label": v ? "Resume" : "Pause",
              "aria-pressed": v,
              onClick: () => k((te) => !te),
              children: v ? "▶" : "⏸"
            }
          ) : null,
          D && e.length > 1 ? /* @__PURE__ */ o(
            "div",
            {
              className: _n.indicators,
              role: "group",
              "aria-label": "Slide indicators",
              children: e.map((te, ye) => {
                const K = ye === S;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: [
                      _n.indicator,
                      K ? _n.indicatorActive : null
                    ].filter(Boolean).join(" "),
                    "aria-label": `Go to slide ${ye + 1}`,
                    "aria-current": K ? "true" : void 0,
                    "aria-controls": R,
                    onClick: () => re(ye)
                  },
                  ye
                );
              })
            }
          ) : null
        ]
      }
    )
  );
}
const yk = "_root_1aa5u_1", bk = "_group_1aa5u_20", xk = "_itemWrapper_1aa5u_30", vk = "_treeitem_1aa5u_34", wk = "_disabled_1aa5u_50", kk = "_selected_1aa5u_60", Nk = "_caret_1aa5u_66", $k = "_caretIcon_1aa5u_113", Sk = "_caretOpen_1aa5u_120", Ok = "_caretPlaceholder_1aa5u_124", Ek = "_label_1aa5u_130", Tk = "_loading_1aa5u_137", Mk = "_loadingRow_1aa5u_143", Ck = "_empty_1aa5u_149", Ak = "_checkbox_1aa5u_155", Lt = {
  root: yk,
  group: bk,
  itemWrapper: xk,
  treeitem: vk,
  disabled: wk,
  selected: kk,
  caret: Nk,
  caretIcon: $k,
  caretOpen: Sk,
  caretPlaceholder: Ok,
  label: Ek,
  loading: Tk,
  loadingRow: Mk,
  empty: Ck,
  checkbox: Ak
};
function Dk({
  indeterminate: e,
  ...t
}) {
  const n = le(null);
  return Oe(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function iO({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: a,
  TextProperty: i,
  keyProperty: c,
  KeyProperty: s,
  selectionMode: l,
  SelectionMode: d,
  selectedItem: u,
  SelectedItem: f,
  selectedItems: g,
  SelectedItems: h,
  defaultSelectedItem: b,
  defaultSelectedItems: _,
  onChange: w,
  Change: m,
  onExpand: p,
  Expand: y,
  onCollapse: N,
  Collapse: x,
  loadChildData: M,
  LoadChildData: S,
  template: E,
  Template: T,
  itemTemplate: L,
  ItemTemplate: A,
  ariaLabel: D,
  AriaLabel: v,
  allowCheckBoxes: k = !1,
  checkedKeys: $,
  defaultCheckedKeys: I,
  onCheckedChange: z,
  allowCheckChildren: P = !0,
  className: R
}) {
  const q = Ne(() => e ?? t ?? [], [e, t]), ae = n ?? r, ie = a ?? i ?? "text", re = c ?? s ?? "id", V = l ?? d ?? "single", Ee = D ?? v ?? "Tree", Q = M ?? S, J = E ?? T ?? L ?? A, X = H(
    (Z) => {
      const ce = Z[re];
      return ce != null ? String(ce) : String(Z.id ?? "");
    },
    [re]
  ), ge = H(
    (Z) => {
      const ce = Z[ie];
      if (ce != null) return String(ce);
      const _e = Z.text;
      return _e != null ? String(_e) : "";
    },
    [ie]
  ), te = H(
    (Z) => {
      if (ae) {
        const _e = ae(Z);
        if (_e !== void 0) return _e;
      }
      const ce = Z.children;
      if (Array.isArray(ce)) return ce;
    },
    [ae]
  ), ye = H(
    (Z) => {
      const ce = /* @__PURE__ */ new Set(), _e = (ke) => {
        for (const ve of ke) {
          const Ae = X(ve);
          ve.expanded && ce.add(Ae);
          const Ye = te(ve);
          Ye && Ye.length > 0 && _e(Ye);
        }
      };
      return _e(Z), ce;
    },
    [X, te]
  ), [K, $e] = W(
    () => ye(q)
  ), [oe, De] = W(
    () => /* @__PURE__ */ new Map()
  ), [me, qe] = W(() => /* @__PURE__ */ new Set()), Je = u ?? f, Ge = g ?? h, gt = V === "multiple" ? Ge !== void 0 : Je !== void 0, ee = H(() => {
    if (V === "multiple") {
      if (_ && _.length > 0)
        return new Set(_.map((_e) => X(_e)));
      const Z = /* @__PURE__ */ new Set(), ce = (_e) => {
        for (const ke of _e) {
          ke.selected && Z.add(X(ke));
          const ve = te(ke);
          ve && ce(ve);
        }
      };
      return ce(q), Z;
    } else {
      if (b) return /* @__PURE__ */ new Set([X(b)]);
      let Z = null;
      const ce = (_e) => {
        for (const ke of _e) {
          if (ke.selected)
            return Z = X(ke), !0;
          const ve = te(ke);
          if (ve && ce(ve)) return !0;
        }
        return !1;
      };
      return ce(q), Z ? /* @__PURE__ */ new Set([Z]) : /* @__PURE__ */ new Set();
    }
  }, [
    V,
    b,
    _,
    X,
    te,
    q
  ]), [Me, lt] = W(
    () => ee()
  ), ze = Ne(() => {
    if (V === "multiple") {
      if (Ge !== void 0) {
        const Z = Ge;
        return Z ? new Set(Z.map((ce) => X(ce))) : /* @__PURE__ */ new Set();
      }
      return Me;
    } else {
      if (Je !== void 0) {
        const Z = Je;
        return Z ? /* @__PURE__ */ new Set([X(Z)]) : /* @__PURE__ */ new Set();
      }
      return Me;
    }
  }, [
    V,
    Ge,
    Je,
    Me,
    X
  ]), st = H(
    (Z) => {
      let ce;
      const _e = (ke) => {
        for (const ve of ke) {
          if (X(ve) === Z)
            return ce = ve, !0;
          const Ye = oe.get(X(ve)) ?? te(ve);
          if (Ye && _e(Ye)) return !0;
        }
        return !1;
      };
      if (_e(q), !ce) {
        for (const ke of oe.values())
          if (_e(ke)) break;
      }
      return ce;
    },
    [q, oe, X, te]
  ), Xe = H(() => {
    const Z = /* @__PURE__ */ new Map(), ce = (_e) => {
      for (const ke of _e) {
        const ve = X(ke);
        Z.set(ve, ke);
        const Ye = oe.get(ve) ?? te(ke);
        Ye && ce(Ye);
      }
    };
    return ce(q), Z;
  }, [q, oe, X, te]), Tt = H(
    (Z) => {
      const ce = X(Z);
      if (!Z.disabled)
        if (V === "multiple") {
          const ke = new Set(ze);
          ke.has(ce) ? ke.delete(ce) : ke.add(ce), gt || lt(ke);
          const ve = w ?? m;
          if (ve) {
            const Ae = Xe(), Ye = [];
            for (const Fe of ke) {
              const dt = Ae.get(Fe) ?? st(Fe);
              dt && Ye.push(dt);
            }
            ve({ item: Z, selectedItems: Ye });
          }
        } else if (!ze.has(ce) || ze.size !== 1 || !ze.has(ce)) {
          gt || lt(/* @__PURE__ */ new Set([ce]));
          const ve = w ?? m;
          ve && ve({ item: Z, selectedItem: Z });
        } else {
          const ve = w ?? m;
          ve && ve({ item: Z, selectedItem: Z });
        }
    },
    [
      X,
      V,
      ze,
      gt,
      w,
      m,
      Xe,
      st
    ]
  ), yt = H(
    async (Z) => {
      const ce = X(Z);
      if (!!Z.disabled) return;
      const ke = K.has(ce), ve = p ?? y, Ae = N ?? x, Ye = te(Z), dt = oe.get(ce) ?? Ye, je = !(dt !== void 0 && dt.length > 0) && Q != null;
      if (ke) {
        $e((tt) => {
          const ut = new Set(tt);
          return ut.delete(ce), ut;
        }), Ae?.({ item: Z });
        return;
      }
      if (je) {
        if (me.has(ce)) return;
        qe((tt) => {
          const ut = new Set(tt);
          return ut.add(ce), ut;
        });
        try {
          const ut = await Q(Z);
          De((Jt) => {
            const At = new Map(Jt);
            return At.set(ce, ut), At;
          }), $e((Jt) => {
            const At = new Set(Jt);
            return At.add(ce), At;
          }), ve?.({ item: Z });
        } catch {
        } finally {
          qe((tt) => {
            const ut = new Set(tt);
            return ut.delete(ce), ut;
          });
        }
        return;
      }
      $e((tt) => {
        const ut = new Set(tt);
        return ut.add(ce), ut;
      }), ve?.({ item: Z });
    },
    [
      X,
      K,
      te,
      oe,
      Q,
      me,
      p,
      y,
      N,
      x
    ]
  ), it = Ne(() => {
    const Z = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Set(), ke = (ve, Ae) => {
      for (const Ye of ve) {
        const Fe = X(Ye);
        Z.has(Fe) || Z.set(Fe, []), ce.set(Fe, Ae), Ye.disabled && _e.add(Fe);
        const xt = oe.get(Fe) ?? te(Ye);
        xt && xt.length > 0 && (Z.set(
          Fe,
          xt.map((je) => X(je))
        ), ke(xt, Fe));
      }
    };
    return ke(q, null), { childrenOf: Z, parentOf: ce, disabledKeys: _e };
  }, [q, oe, X, te]), ft = H(
    (Z) => {
      const ce = [], _e = [...it.childrenOf.get(Z) ?? []];
      for (; _e.length > 0; ) {
        const ke = _e.pop();
        ce.push(ke), _e.push(...it.childrenOf.get(ke) ?? []);
      }
      return ce;
    },
    [it]
  ), [Ve, Mt] = W(
    () => new Set(I ?? [])
  ), se = Ne(
    () => $ !== void 0 ? new Set($) : Ve,
    [$, Ve]
  ), Le = H(
    (Z) => {
      const ce = it.disabledKeys;
      return ft(Z).filter((_e) => !ce.has(_e));
    },
    [ft, it]
  ), wt = H(
    (Z) => {
      if (se.has(Z)) return !0;
      if (!k || !P) return !1;
      const ce = Le(Z);
      return ce.length > 0 && ce.every((_e) => se.has(_e));
    },
    [se, k, P, Le]
  ), Ct = H(
    (Z) => {
      if (!k || !P || se.has(Z))
        return !1;
      const ce = Le(Z);
      if (ce.length === 0) return !1;
      const _e = ce.filter((ke) => se.has(ke)).length;
      return _e > 0 && _e < ce.length;
    },
    [se, k, P, Le]
  ), bt = H(
    (Z) => {
      if (!k || Z.disabled) return;
      const ce = X(Z), _e = new Set(se);
      if (_e.has(ce) || wt(ce)) {
        if (_e.delete(ce), P)
          for (const ke of Le(ce)) _e.delete(ke);
      } else if (_e.add(ce), P)
        for (const ke of Le(ce)) _e.add(ke);
      $ === void 0 && Mt(_e), z?.([..._e]);
    },
    [
      k,
      P,
      $,
      se,
      Le,
      X,
      wt,
      z
    ]
  ), j = Ne(() => {
    const Z = [], ce = (_e, ke, ve) => {
      _e.forEach((Ae, Ye) => {
        const Fe = X(Ae), dt = ge(Ae), xt = oe.get(Fe) ?? te(Ae);
        let je;
        oe.has(Fe) ? je = oe.get(Fe).length > 0 : xt !== void 0 ? je = xt.length > 0 : Q ? je = !0 : je = !1;
        const tt = K.has(Fe), ut = !!Ae.disabled, Jt = _e.length, At = Ye + 1;
        if (Z.push({
          item: Ae,
          key: Fe,
          text: dt,
          level: ke,
          posInSet: At,
          setSize: Jt,
          hasChildren: je,
          expanded: tt,
          parentKey: ve,
          disabled: ut
        }), je && tt) {
          const dn = oe.get(Fe) ?? xt;
          dn && dn.length > 0 && ce(dn, ke + 1, Fe);
        }
      });
    };
    return ce(q, 1, null), Z;
  }, [
    q,
    X,
    ge,
    te,
    oe,
    K,
    Q
  ]), [Y, he] = W(
    () => j[0]?.key ?? null
  ), we = le(""), fe = le(null), F = le(null), [pe, Re] = W({
    key: Y,
    nodes: j
  });
  if (pe.key !== Y || pe.nodes !== j) {
    if (Re({ key: Y, nodes: j }), !Y && j.length > 0) {
      const Z = j[0];
      Z && he(Z.key);
    } else if (Y && !j.some((Z) => Z.key === Y)) {
      const Z = j[0];
      he(Z ? Z.key : null);
    }
  }
  Oe(() => {
    if (Y) {
      const Z = F.current?.querySelector(
        `[data-key="${CSS.escape(Y)}"]`
      );
      let ce = null;
      Z || (ce = F.current?.querySelector(
        `[data-key="${Y}"]`
      ) ?? null);
      const _e = Z ?? ce;
      _e && document.activeElement !== _e && F.current?.contains(document.activeElement) && _e.focus();
    }
  }, [Y]);
  const Ie = H((Z) => {
    he(Z), requestAnimationFrame(() => {
      const ce = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(Z) : Z;
      let _e = F.current?.querySelector(
        `[data-key="${ce}"]`
      );
      _e || (_e = F.current?.querySelector(`[data-key="${Z}"]`) ?? null), _e?.focus();
    });
  }, []), It = H(
    (Z) => j.find((_e) => _e.key === Z)?.parentKey ?? null,
    [j]
  ), et = H(
    (Z) => {
      if (j.length === 0) return;
      const ce = Y ? j.findIndex((ve) => ve.key === Y) : -1, _e = ce >= 0 ? j[ce] : void 0;
      let ke = null;
      if (Z.key === "ArrowDown") {
        if (Z.preventDefault(), ce === -1)
          ke = j[0]?.key ?? null;
        else {
          const ve = (ce + 1) % j.length, Ae = j[ve];
          Ae && (ke = Ae.key);
        }
        ke && Ie(ke);
        return;
      }
      if (Z.key === "ArrowUp") {
        if (Z.preventDefault(), ce === -1) {
          const ve = j[j.length - 1];
          ve && (ke = ve.key);
        } else {
          const ve = (ce - 1 + j.length) % j.length, Ae = j[ve];
          Ae && (ke = Ae.key);
        }
        ke && Ie(ke);
        return;
      }
      if (Z.key === "ArrowRight") {
        if (Z.preventDefault(), !_e) return;
        if (_e.hasChildren && !_e.expanded)
          yt(_e.item);
        else if (_e.hasChildren && _e.expanded) {
          const ve = ce + 1, Ae = j[ve];
          Ae && Ae.parentKey === _e.key && Ie(Ae.key);
        }
        return;
      }
      if (Z.key === "ArrowLeft") {
        if (Z.preventDefault(), !_e) return;
        if (_e.hasChildren && _e.expanded)
          yt(_e.item);
        else {
          const ve = It(_e.key);
          ve && Ie(ve);
        }
        return;
      }
      if (Z.key === "Home") {
        Z.preventDefault();
        const ve = j[0];
        ve && Ie(ve.key);
        return;
      }
      if (Z.key === "End") {
        Z.preventDefault();
        const ve = j[j.length - 1];
        ve && Ie(ve.key);
        return;
      }
      if (Z.key === "Enter" || Z.key === " ") {
        if (Z.key === " " && Z.target?.tagName === "INPUT" || (Z.preventDefault(), !_e)) return;
        if (Z.key === " " && k) {
          const ve = st(_e.key);
          ve && bt(ve);
          return;
        }
        Tt(_e.item);
        return;
      }
      if (Z.key.length === 1 && /^[a-zA-Z0-9]$/.test(Z.key)) {
        Z.preventDefault();
        const ve = (we.current + Z.key).toLowerCase();
        we.current = ve, fe.current && clearTimeout(fe.current), fe.current = setTimeout(() => {
          we.current = "";
        }, 500);
        const Ae = ce >= 0 ? ce + 1 : 0, dt = [...j, ...j].slice(Ae, Ae + j.length).find((xt) => xt.text.toLowerCase().startsWith(ve));
        dt && Ie(dt.key);
        return;
      }
    },
    [
      j,
      Y,
      Ie,
      yt,
      Tt,
      It,
      k,
      bt,
      st
    ]
  ), mn = H(() => {
    if (!Y && j.length > 0) {
      const Z = j[0];
      Z && he(Z.key);
    }
  }, [Y, j]), Nn = (Z, ce, _e) => /* @__PURE__ */ o("ul", { role: "group", className: Lt.group, children: Z.map((ke, ve) => {
    const Ae = X(ke), Ye = ge(ke), Fe = oe.get(Ae) ?? te(ke);
    let dt;
    oe.has(Ae) ? dt = oe.get(Ae).length > 0 : Fe !== void 0 ? dt = Fe.length > 0 : Q ? dt = !0 : dt = !1;
    const xt = K.has(Ae), je = ze.has(Ae), tt = !!ke.disabled, ut = me.has(Ae), Jt = Y === Ae, At = Z.length, dn = ve + 1, Zn = J ? J(ke) : Ye, Jn = k ? {
      checked: wt(Ae),
      indeterminate: Ct(Ae)
    } : null;
    return /* @__PURE__ */ C("li", { role: "none", className: Lt.itemWrapper, children: [
      /* @__PURE__ */ C(
        "div",
        {
          role: "treeitem",
          "data-key": Ae,
          tabIndex: Jt ? 0 : -1,
          "aria-expanded": dt ? xt : void 0,
          "aria-selected": je,
          "aria-level": ce,
          "aria-setsize": At,
          "aria-posinset": dn,
          "aria-disabled": tt || void 0,
          "aria-busy": ut || void 0,
          className: [
            Lt.treeitem,
            je ? Lt.selected : null,
            tt ? Lt.disabled : null,
            Jt ? Lt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            Ie(Ae), tt || Tt(ke);
          },
          onFocus: () => he(Ae),
          children: [
            k ? /* @__PURE__ */ o(
              Dk,
              {
                className: Lt.checkbox,
                checked: Jn?.checked ?? !1,
                indeterminate: Jn?.indeterminate ?? !1,
                disabled: tt,
                "aria-label": `Select ${Ye}`,
                onClick: (Fn) => Fn.stopPropagation(),
                onChange: () => bt(ke)
              }
            ) : null,
            dt ? /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Lt.caret,
                "aria-label": `${xt ? "Collapse" : "Expand"} ${Ye}`,
                "aria-expanded": xt,
                tabIndex: -1,
                disabled: tt,
                onClick: (Fn) => {
                  Fn.stopPropagation(), Ie(Ae), yt(ke);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Lt.caretIcon,
                      xt ? Lt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(Te, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ o(
              "span",
              {
                className: Lt.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ o("span", { className: Lt.label, children: Zn }),
            ut ? /* @__PURE__ */ o("span", { className: Lt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && xt ? ut ? /* @__PURE__ */ o("div", { className: Lt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? Nn(Fe, ce + 1) : oe.has(Ae) && oe.get(Ae).length > 0 ? Nn(
        oe.get(Ae),
        ce + 1
      ) : (Fe && Fe.length === 0, null) : null
    ] }, Ae);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: F,
      role: "tree",
      "aria-label": Ee,
      "aria-multiselectable": V === "multiple" || void 0,
      tabIndex: 0,
      className: [Lt.root, R].filter(Boolean).join(" "),
      onKeyDown: et,
      onFocus: mn,
      children: q.length === 0 ? /* @__PURE__ */ o("div", { className: Lt.empty, children: "No items" }) : Nn(q, 1)
    }
  );
}
const Ik = "_root_10fdq_1", zk = "_panel_10fdq_8", Lk = "_header_10fdq_19", Pk = "_listbox_10fdq_28", Rk = "_option_10fdq_42", jk = "_disabled_10fdq_57", Bk = "_active_10fdq_66", Fk = "_selected_10fdq_70", Hk = "_empty_10fdq_86", Uk = "_controls_10fdq_93", Wk = "_reorder_10fdq_102", qk = "_btn_10fdq_110", rt = {
  root: Ik,
  panel: zk,
  header: Lk,
  listbox: Pk,
  option: Rk,
  disabled: jk,
  active: Bk,
  selected: Fk,
  empty: Hk,
  controls: Uk,
  reorder: Wk,
  btn: qk
};
function Pt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ho(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function cO({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: a,
  Value: i,
  targetValue: c,
  TargetValue: s,
  data: l,
  Data: d,
  onSourceChange: u,
  SourceChange: f,
  onTargetChange: g,
  TargetChange: h,
  keyProperty: b,
  KeyProperty: _,
  onMove: w,
  Move: m,
  ariaLabel: p,
  AriaLabel: y,
  className: N
}) {
  const x = b ?? _ ?? "id", M = p ?? y ?? "PickList", S = e ?? t ?? a ?? i ?? l ?? d ?? [], E = n ?? r ?? c ?? s ?? [], [T, L] = W(() => [
    ...S
  ]), [A, D] = W(() => [
    ...E
  ]), v = e ?? t ?? a ?? i ?? l ?? d, [k, $] = W(v);
  v !== k && ($(v), v !== void 0 && L([...v]));
  const I = n ?? r ?? c ?? s, [z, P] = W(I);
  I !== z && (P(I), I !== void 0 && D([...I]));
  const [R, q] = W(
    () => /* @__PURE__ */ new Set()
  ), [ae, ie] = W(
    () => /* @__PURE__ */ new Set()
  ), [re, V] = W(() => {
    const j = S.findIndex((Y) => !Y.disabled);
    return j >= 0 ? j : 0;
  }), [Ee, Q] = W(() => {
    const j = E.findIndex((Y) => !Y.disabled);
    return j >= 0 ? j : 0;
  }), J = Ne(
    () => T.map((j, Y) => j.disabled ? -1 : Y).filter((j) => j >= 0),
    [T]
  ), X = Ne(
    () => A.map((j, Y) => j.disabled ? -1 : Y).filter((j) => j >= 0),
    [A]
  ), ge = {
    active: re,
    len: T.length,
    idxs: J
  }, [te, ye] = W(ge);
  if (te.active !== ge.active || te.len !== ge.len || te.idxs !== ge.idxs) {
    if (ye(ge), re >= T.length) {
      const j = J[J.length - 1];
      V(j ?? 0);
    } else if (T.length > 0 && J.length > 0 && !J.includes(re)) {
      const j = J[0];
      j !== void 0 && V(j);
    }
  }
  const K = {
    active: Ee,
    len: A.length,
    idxs: X
  }, [$e, oe] = W(K);
  if ($e.active !== K.active || $e.len !== K.len || $e.idxs !== K.idxs) {
    if (oe(K), Ee >= A.length) {
      const j = X[X.length - 1];
      Q(j ?? 0);
    } else if (A.length > 0 && X.length > 0 && !X.includes(Ee)) {
      const j = X[0];
      j !== void 0 && Q(j);
    }
  }
  const [De, me] = W({
    items: T,
    key: x
  });
  (De.items !== T || De.key !== x) && (me({ items: T, key: x }), q((j) => {
    const Y = /* @__PURE__ */ new Set();
    for (const he of j)
      T.some(
        (fe) => Pt(fe, x) === he && !fe.disabled
      ) && Y.add(he);
    return Y.size === j.size ? j : Y;
  }));
  const [qe, Je] = W({
    items: A,
    key: x
  });
  (qe.items !== A || qe.key !== x) && (Je({ items: A, key: x }), ie((j) => {
    const Y = /* @__PURE__ */ new Set();
    for (const he of j)
      A.some(
        (fe) => Pt(fe, x) === he && !fe.disabled
      ) && Y.add(he);
    return Y.size === j.size ? j : Y;
  }));
  const Ge = H(
    (j) => {
      (u ?? f)?.(j);
    },
    [u, f]
  ), Qe = H(
    (j) => {
      (g ?? h)?.(j);
    },
    [g, h]
  ), He = H(
    (j) => {
      (w ?? m)?.(j);
    },
    [w, m]
  ), gt = H(
    (j) => {
      const Y = T[j];
      if (!Y || Y.disabled) return;
      const he = Pt(Y, x);
      q((we) => {
        const fe = new Set(we);
        return fe.has(he) ? fe.delete(he) : fe.add(he), fe;
      }), V(j);
    },
    [T, x]
  ), ee = H(
    (j) => {
      const Y = A[j];
      if (!Y || Y.disabled) return;
      const he = Pt(Y, x);
      ie((we) => {
        const fe = new Set(we);
        return fe.has(he) ? fe.delete(he) : fe.add(he), fe;
      }), Q(j);
    },
    [A, x]
  ), Me = H(() => {
    const j = [], Y = [];
    for (const F of T) {
      const pe = Pt(F, x);
      R.has(pe) && !F.disabled ? j.push(F) : Y.push(F);
    }
    if (j.length === 0) return;
    const he = Y, we = [...A, ...j];
    L(he), D(we), q(/* @__PURE__ */ new Set());
    const fe = new Set(j.map((F) => Pt(F, x)));
    ie(fe), Ge(he), Qe(we), He({
      source: he,
      target: we,
      moved: j,
      direction: "toTarget"
    });
  }, [
    T,
    A,
    R,
    x,
    Ge,
    Qe,
    He
  ]), lt = H(() => {
    const j = [], Y = [];
    for (const F of A) {
      const pe = Pt(F, x);
      ae.has(pe) && !F.disabled ? j.push(F) : Y.push(F);
    }
    if (j.length === 0) return;
    const he = Y, we = [...T, ...j];
    D(he), L(we), ie(/* @__PURE__ */ new Set());
    const fe = new Set(j.map((F) => Pt(F, x)));
    q(fe), Ge(we), Qe(he), He({
      source: we,
      target: he,
      moved: j,
      direction: "toSource"
    });
  }, [
    T,
    A,
    ae,
    x,
    Ge,
    Qe,
    He
  ]), ze = H(() => {
    const j = T.filter((we) => !we.disabled);
    if (j.length === 0) return;
    const Y = T.filter((we) => !!we.disabled), he = [...A, ...j];
    L(Y), D(he), q(/* @__PURE__ */ new Set()), Ge(Y), Qe(he), He({
      source: Y,
      target: he,
      moved: j,
      direction: "allToTarget"
    });
  }, [T, A, Ge, Qe, He]), st = H(() => {
    const j = A.filter((we) => !we.disabled);
    if (j.length === 0) return;
    const Y = A.filter((we) => !!we.disabled), he = [...T, ...j];
    D(Y), L(he), ie(/* @__PURE__ */ new Set()), Ge(he), Qe(Y), He({
      source: he,
      target: Y,
      moved: j,
      direction: "allToSource"
    });
  }, [T, A, Ge, Qe, He]), Xe = H(() => {
    if (ae.size === 0) return;
    const j = [...A], Y = ae, he = [];
    for (let fe = 1; fe < j.length; fe++) {
      const F = j[fe], pe = j[fe - 1];
      if (!F || !pe) continue;
      const Re = Pt(F, x), Ie = Pt(pe, x);
      Y.has(Re) && !Y.has(Ie) && !F.disabled && !pe.disabled && (j[fe - 1] = F, j[fe] = pe, he.push(F));
    }
    if (he.length === 0) return;
    D(j), Qe(j), He({ source: T, target: j, moved: he, direction: "up" });
    const we = Array.from(Y)[0];
    if (we) {
      const fe = j.findIndex(
        (F) => Pt(F, x) === we
      );
      fe >= 0 && Q(fe);
    }
  }, [
    A,
    ae,
    x,
    T,
    Qe,
    He
  ]), Tt = H(() => {
    if (ae.size === 0) return;
    const j = [...A], Y = ae, he = [];
    for (let fe = j.length - 2; fe >= 0; fe--) {
      const F = j[fe], pe = j[fe + 1];
      if (!F || !pe) continue;
      const Re = Pt(F, x), Ie = Pt(pe, x);
      Y.has(Re) && !Y.has(Ie) && !F.disabled && !pe.disabled && (j[fe] = pe, j[fe + 1] = F, he.push(F));
    }
    if (he.length === 0) return;
    D(j), Qe(j), He({ source: T, target: j, moved: he, direction: "down" });
    const we = Array.from(Y)[0];
    if (we) {
      const fe = j.findIndex(
        (F) => Pt(F, x) === we
      );
      fe >= 0 && Q(fe);
    }
  }, [
    A,
    ae,
    x,
    T,
    Qe,
    He
  ]), yt = R.size > 0, it = ae.size > 0, ft = le(""), Ve = le(
    null
  ), Mt = le(""), se = le(
    null
  ), Le = H(
    (j) => {
      if (T.length === 0) return;
      const Y = J;
      if (Y.length === 0) return;
      const he = Y.includes(re) ? re : Y[0] ?? 0;
      let we = -1;
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (j.key === "ArrowUp") {
        j.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (j.key === "Home")
        j.preventDefault(), we = Y[0] ?? 0;
      else if (j.key === "End")
        j.preventDefault(), we = Y[Y.length - 1] ?? 0;
      else if (j.key === "Enter" || j.key === " ") {
        j.preventDefault(), gt(he);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(j.key)) {
        j.preventDefault();
        const fe = (ft.current + j.key).toLowerCase();
        ft.current = fe, Ve.current && clearTimeout(Ve.current), Ve.current = setTimeout(() => {
          ft.current = "";
        }, 500);
        const F = [...Y, ...Y], pe = Y.indexOf(he) + 1, Re = F.slice(pe).find(
          (Ie) => ho(T[Ie]).toLowerCase().startsWith(fe)
        );
        Re != null && V(Re);
        return;
      }
      we >= 0 && V(we);
    },
    [T, J, re, gt]
  ), wt = H(
    (j) => {
      if (A.length === 0) return;
      const Y = X;
      if (Y.length === 0) return;
      const he = Y.includes(Ee) ? Ee : Y[0] ?? 0;
      let we = -1;
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (j.key === "ArrowUp") {
        j.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (j.key === "Home")
        j.preventDefault(), we = Y[0] ?? 0;
      else if (j.key === "End")
        j.preventDefault(), we = Y[Y.length - 1] ?? 0;
      else if (j.key === "Enter" || j.key === " ") {
        j.preventDefault(), ee(he);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(j.key)) {
        j.preventDefault();
        const fe = (Mt.current + j.key).toLowerCase();
        Mt.current = fe, se.current && clearTimeout(se.current), se.current = setTimeout(() => {
          Mt.current = "";
        }, 500);
        const F = [...Y, ...Y], pe = Y.indexOf(he) + 1, Re = F.slice(pe).find(
          (Ie) => ho(A[Ie]).toLowerCase().startsWith(fe)
        );
        Re != null && Q(Re);
        return;
      }
      we >= 0 && Q(we);
    },
    [A, X, Ee, ee]
  ), Ct = le(null), bt = le(null);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [rt.root, N].filter(Boolean).join(" "),
      "aria-label": M,
      children: [
        /* @__PURE__ */ C("div", { className: rt.panel, children: [
          /* @__PURE__ */ o("div", { className: rt.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: Ct,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: rt.listbox,
              onKeyDown: Le,
              children: T.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: rt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : T.map((j, Y) => {
                const he = Pt(j, x), we = R.has(he), fe = Y === re, F = !!j.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleSourceKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": we,
                      "aria-disabled": F || void 0,
                      tabIndex: -1,
                      "data-active": fe || void 0,
                      className: [
                        rt.option,
                        we ? rt.selected : null,
                        fe ? rt.active : null,
                        F ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => gt(Y),
                      children: ho(j)
                    },
                    he
                  )
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ C("div", { className: rt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !yt || void 0,
              disabled: !yt,
              onClick: Me,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all to target",
              "aria-disabled": T.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: T.filter((j) => !j.disabled).length === 0,
              onClick: ze,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all",
              "aria-disabled": T.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: T.filter((j) => !j.disabled).length === 0,
              onClick: ze,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !it || void 0,
              disabled: !it,
              onClick: lt,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": A.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: A.filter((j) => !j.disabled).length === 0,
              onClick: st,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ C("div", { className: rt.panel, children: [
          /* @__PURE__ */ o("div", { className: rt.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: bt,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: rt.listbox,
              onKeyDown: wt,
              children: A.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: rt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : A.map((j, Y) => {
                const he = Pt(j, x), we = ae.has(he), fe = Y === Ee, F = !!j.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleTargetKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": we,
                      "aria-disabled": F || void 0,
                      tabIndex: -1,
                      "data-active": fe || void 0,
                      className: [
                        rt.option,
                        we ? rt.selected : null,
                        fe ? rt.active : null,
                        F ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => ee(Y),
                      children: ho(j)
                    },
                    he
                  )
                );
              })
            }
          ),
          /* @__PURE__ */ C("div", { className: rt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: rt.btn,
                "aria-label": "Move up",
                "aria-disabled": !it || void 0,
                disabled: !it,
                onClick: Xe,
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: rt.btn,
                "aria-label": "Move down",
                "aria-disabled": !it || void 0,
                disabled: !it,
                onClick: Tt,
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Kk = "_root_1qxsp_1", Gk = "_header_1qxsp_8", Vk = "_title_1qxsp_15", Yk = "_navBtn_1qxsp_20", Xk = "_resources_1qxsp_39", Zk = "_resource_1qxsp_39", Jk = "_grid_1qxsp_50", Qk = "_timeCol_1qxsp_55", eN = "_timeCell_1qxsp_61", tN = "_dayCol_1qxsp_66", nN = "_dayHeader_1qxsp_73", rN = "_slot_1qxsp_81", oN = "_event_1qxsp_91", Vt = {
  root: Kk,
  header: Gk,
  title: Vk,
  navBtn: Yk,
  resources: Xk,
  resource: Zk,
  grid: Jk,
  timeCol: Qk,
  timeCell: eN,
  dayCol: tN,
  dayHeader: nN,
  slot: rN,
  event: oN
};
function va(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function dO({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: a,
  onEventClick: i,
  onSlotClick: c,
  ariaLabel: s = "Scheduler",
  className: l
}) {
  const [d, u] = W(
    n ?? /* @__PURE__ */ new Date()
  ), f = n ?? d, g = (_) => {
    n || u(_), r?.(_);
  }, h = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (_, w) => {
    const m = new Date(f);
    return m.setDate(f.getDate() - f.getDay() + w), m;
  }) : Array.from({ length: 30 }, (_, w) => {
    const m = new Date(f);
    return m.setDate(1 + w), m;
  }), b = Array.from({ length: 12 }, (_, w) => 8 + w);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Vt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ C("div", { className: Vt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const _ = new Date(f);
                _.setDate(_.getDate() - 7), g(_);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Vt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const _ = new Date(f);
                _.setDate(_.getDate() + 7), g(_);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: Vt.resources, children: a.map((_) => /* @__PURE__ */ o("div", { className: Vt.resource, children: _.name }, _.id)) }),
        /* @__PURE__ */ C("div", { className: Vt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Vt.timeCol, role: "presentation", children: b.map((_) => /* @__PURE__ */ C("div", { className: Vt.timeCell, children: [
            _,
            ":00"
          ] }, _)) }),
          h.map((_) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- day-level create affordance for the pointer; hour slots refine it and event buttons inside are the keyboard path
            /* @__PURE__ */ C(
              "div",
              {
                className: Vt.dayCol,
                role: "group",
                title: _.toLocaleDateString(),
                onClick: () => c?.({ date: _ }),
                "aria-label": _.toLocaleDateString(),
                children: [
                  /* @__PURE__ */ o("div", { className: Vt.dayHeader, children: _.toLocaleDateString(void 0, {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  }) }),
                  b.map((w) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- hour slots refine the day-column click for the mouse; event buttons inside are native buttons
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: Vt.slot,
                        tabIndex: -1,
                        onClick: (m) => {
                          m.stopPropagation();
                          const p = new Date(_);
                          p.setHours(w), c?.({ date: p });
                        }
                      },
                      w
                    )
                  )),
                  e.filter((w) => w.start.toDateString() === _.toDateString()).map((w) => /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Vt.event,
                      "aria-label": `${w.title} ${va(w.start)} - ${va(w.end)}`,
                      "aria-pressed": !1,
                      onClick: () => i?.({ event: w }),
                      children: w.title
                    },
                    w.id
                  ))
                ]
              },
              _.toISOString()
            )
          ))
        ] })
      ]
    }
  );
}
const sN = "_root_dj5ne_1", aN = "_header_dj5ne_8", lN = "_headerCell_dj5ne_15", iN = "_timeline_dj5ne_21", cN = "_row_dj5ne_26", dN = "_taskName_dj5ne_32", uN = "_timelineCell_dj5ne_37", fN = "_bar_dj5ne_43", pN = "_progress_dj5ne_56", _N = "_dep_dj5ne_61", Mn = {
  root: sN,
  header: aN,
  headerCell: lN,
  timeline: iN,
  row: cN,
  taskName: dN,
  timelineCell: uN,
  bar: fN,
  progress: pN,
  dep: _N
};
function uO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: a
}) {
  const [i, c] = W(null);
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Mn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ C("div", { className: Mn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Mn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ C("div", { className: Mn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ C(
          "div",
          {
            className: Mn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Mn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ C("div", { className: Mn.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Mn.bar,
                    role: "button",
                    "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
                    "aria-pressed": i === s.id,
                    tabIndex: 0,
                    onClick: () => {
                      c(s.id), n?.({ task: s });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), c(s.id), n?.({ task: s }));
                    },
                    children: /* @__PURE__ */ o(
                      "div",
                      {
                        className: Mn.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((l) => /* @__PURE__ */ o("svg", { className: Mn.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
          s.id
        ))
      ]
    }
  );
}
const hN = "_root_4b64f_1", mN = "_fields_4b64f_6", gN = "_chip_4b64f_13", yN = "_table_4b64f_35", bN = "_totalRow_4b64f_55", xN = "_total_4b64f_55", xr = {
  root: hN,
  fields: mN,
  chip: gN,
  table: yN,
  totalRow: bN,
  total: xN
}, vN = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e),
  First: (e) => e[0] ?? 0,
  Last: (e) => e[e.length - 1] ?? 0
};
function wN(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function fO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, u = (p, y, N) => {
    const x = p === "row" ? s.filter((E) => E.property !== y) : s, M = p === "col" ? l.filter((E) => E.property !== y) : l, S = p === "agg" ? d.filter((E) => !(E.property === y && E.aggregate === N)) : d;
    a?.({
      rowFields: x,
      columnFields: M,
      aggregateFields: S
    });
  }, f = (p, y) => y.length === 0 ? "" : y.length === 1 ? String(p[y[0].property]) : y.map(
    (N) => String(p[N.property]).replace(/\\/g, "\\\\").split("").join("\\x01")
  ).join(""), g = [
    ...new Set(s.length ? e.map((p) => f(p, s)) : [""])
  ].sort(), h = [
    ...new Set(l.length ? e.map((p) => f(p, l)) : [""])
  ].sort(), b = (p, y) => e.filter(
    (N) => (p == null || f(N, s) === p) && (y == null || f(N, l) === y)
  ), _ = (p, y) => {
    if (y.aggregate === "Count") return p.length;
    const N = p.map((x) => Number(x[y.property])).filter((x) => !Number.isNaN(x));
    return N.length ? vN[y.aggregate](N) : 0;
  }, w = (p) => {
    const y = d.length > 1;
    return d.map((N) => {
      const x = wN(_(p, N));
      return y ? `${x} (${N.aggregate})` : x;
    }).join(", ");
  }, m = (p, y, N, x) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      className: xr.chip,
      "aria-label": `Remove ${p} field ${N}`,
      onClick: () => u(p, y, x),
      children: [
        N,
        x ? ` (${x})` : ""
      ]
    },
    `${p}-${N}-${x ?? ""}`
  );
  return /* @__PURE__ */ C("div", { className: [xr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C("div", { className: xr.fields, children: [
      s.map((p) => m("row", p.property, p.title ?? p.property)),
      l.map((p) => m("col", p.property, p.title ?? p.property)),
      d.map(
        (p) => m("agg", p.property, p.title ?? p.property, p.aggregate)
      )
    ] }),
    /* @__PURE__ */ C("table", { className: xr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ C("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((p) => p.title ?? p.property).join(" / ") || "Total" }),
        h.map((p) => /* @__PURE__ */ o("th", { scope: "col", children: p || "—" }, p)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ C("tbody", { children: [
        g.map((p) => /* @__PURE__ */ C("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: p || "—" }),
          h.map((y) => /* @__PURE__ */ o(
            "td",
            {
              title: d.length ? w(b(p, y)) : void 0,
              children: d.length ? w(b(p, y)) : ""
            },
            y
          )),
          /* @__PURE__ */ o("td", { className: xr.total, children: d.length ? w(b(p)) : "" })
        ] }, p)),
        /* @__PURE__ */ C("tr", { className: xr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          h.map((p) => /* @__PURE__ */ o("td", { children: d.length ? w(b(void 0, p)) : "" }, p)),
          /* @__PURE__ */ o("td", { children: d.length ? w(e) : "" })
        ] })
      ] })
    ] })
  ] });
}
const kN = "_root_1r7co_1", NN = "_reverse_1r7co_10", $N = "_item_1r7co_14", SN = "_marker_1r7co_35", ON = "_body_1r7co_46", EN = "_label_1r7co_50", TN = "_content_1r7co_56", sr = {
  root: kN,
  reverse: NN,
  item: $N,
  marker: SN,
  body: ON,
  label: EN,
  content: TN
};
function pO({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const a = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [sr.root, t ? sr.reverse : "", r].filter(Boolean).join(" "),
      "aria-label": n,
      children: a.map((i, c) => /* @__PURE__ */ C("li", { className: sr.item, children: [
        /* @__PURE__ */ o("span", { className: sr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ C("div", { className: sr.body, children: [
          /* @__PURE__ */ o("div", { className: sr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: sr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const MN = "_root_rm4d8_1", CN = "_header_rm4d8_13", AN = "_headCell_rm4d8_22", DN = "_row_rm4d8_32", IN = "_cell_rm4d8_37", Wr = {
  root: MN,
  header: CN,
  headCell: AN,
  row: DN,
  cell: IN
};
function _O({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: a = [],
  ariaLabel: i = "Virtual grid",
  className: c
}) {
  const [s, l] = W(
    /* @__PURE__ */ new Map()
  ), [d, u] = W(0), f = le(/* @__PURE__ */ new Set()), g = Math.ceil(n / t), h = Math.max(0, Math.floor(d / t) - 3), b = Math.min(e, h + g + 6), _ = H(
    (m, p) => {
      let y = !1;
      for (let N = m; N < p; N++)
        !s.has(N) && !f.current.has(N) && (y = !0);
      if (y) {
        for (let N = m; N < p; N++) f.current.add(N);
        r({ skip: m, top: p }).then((N) => {
          l((x) => {
            const M = new Map(x);
            return N.forEach((S, E) => M.set(m + E, S)), M;
          });
          for (let x = m; x < p; x++) f.current.delete(x);
        });
      }
    },
    [s, r]
  );
  Oe(() => {
    _(h, b);
  }, [h, b, _]);
  const w = [];
  for (let m = h; m < b; m++) {
    const p = s.get(m) ?? {};
    w.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Wr.row,
          role: "row",
          style: { height: t },
          children: a.map((y) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Wr.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(p[y.property] ?? "")
            },
            y.property
          ))
        },
        m
      )
    );
  }
  return /* @__PURE__ */ C(
    "div",
    {
      className: [Wr.root, c].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (m) => u(m.target.scrollTop),
      onKeyDown: (m) => {
        const p = m.currentTarget;
        m.key === "ArrowDown" ? (m.preventDefault(), p.scrollTop += t) : m.key === "ArrowUp" ? (m.preventDefault(), p.scrollTop -= t) : m.key === "PageDown" ? (m.preventDefault(), p.scrollTop += n) : m.key === "PageUp" && (m.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: h * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: Wr.header, role: "row", children: a.map((m) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: Wr.headCell,
            style: {
              height: t,
              ...m.width ? { width: m.width } : {}
            },
            children: m.title ?? m.property
          },
          m.property
        )) }),
        w,
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
var kn;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, l, d, u) {
      if (this.version = s, this.errorCorrectionLevel = l, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let f = [];
      for (let h = 0; h < this.size; h++) f.push(!1);
      for (let h = 0; h < this.size; h++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(d);
      if (this.drawCodewords(g), u == -1) {
        let h = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const _ = this.getPenaltyScore();
          _ < h && (u = b, h = _), this.applyMask(b);
        }
      }
      a(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(s, l) {
      const d = e.QrSegment.makeSegments(s);
      return t.encodeSegments(d, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, l) {
      const d = e.QrSegment.makeBytes(s);
      return t.encodeSegments([d], l);
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
    static encodeSegments(s, l, d = 1, u = 40, f = -1, g = !0) {
      if (!(t.MIN_VERSION <= d && d <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let h, b;
      for (h = d; ; h++) {
        const p = t.getNumDataCodewords(h, l) * 8, y = i.getTotalBits(s, h);
        if (y <= p) {
          b = y;
          break;
        }
        if (h >= u)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        g && b <= t.getNumDataCodewords(h, p) * 8 && (l = p);
      let _ = [];
      for (const p of s) {
        n(p.mode.modeBits, 4, _), n(p.numChars, p.mode.numCharCountBits(h), _);
        for (const y of p.getData()) _.push(y);
      }
      a(_.length == b);
      const w = t.getNumDataCodewords(h, l) * 8;
      a(_.length <= w), n(0, Math.min(4, w - _.length), _), n(0, (8 - _.length % 8) % 8, _), a(_.length % 8 == 0);
      for (let p = 236; _.length < w; p ^= 253)
        n(p, 8, _);
      let m = [];
      for (; m.length * 8 < _.length; ) m.push(0);
      return _.forEach(
        (p, y) => m[y >>> 3] |= p << 7 - (y & 7)
      ), new t(h, l, m, f);
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
    getModule(s, l) {
      return 0 <= s && s < this.size && 0 <= l && l < this.size && this.modules[l][s];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let d = 0; d < this.size; d++)
        this.setFunctionModule(6, d, d % 2 == 0), this.setFunctionModule(d, 6, d % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), l = s.length;
      for (let d = 0; d < l; d++)
        for (let u = 0; u < l; u++)
          d == 0 && u == 0 || d == 0 && u == l - 1 || d == l - 1 && u == 0 || this.drawAlignmentPattern(s[d], s[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const l = this.errorCorrectionLevel.formatBits << 3 | s;
      let d = l;
      for (let f = 0; f < 10; f++) d = d << 1 ^ (d >>> 9) * 1335;
      const u = (l << 10 | d) ^ 21522;
      a(u >>> 15 == 0);
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
      let s = this.version;
      for (let d = 0; d < 12; d++) s = s << 1 ^ (s >>> 11) * 7973;
      const l = this.version << 12 | s;
      a(l >>> 18 == 0);
      for (let d = 0; d < 18; d++) {
        const u = r(l, d), f = this.size - 11 + d % 3, g = Math.floor(d / 3);
        this.setFunctionModule(f, g, u), this.setFunctionModule(g, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(d)), g = s + u, h = l + d;
          0 <= g && g < this.size && 0 <= h && h < this.size && this.setFunctionModule(g, h, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, l) {
      for (let d = -2; d <= 2; d++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            s + u,
            l + d,
            Math.max(Math.abs(u), Math.abs(d)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, l, d) {
      this.modules[l][s] = d, this.isFunction[l][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const l = this.version, d = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(l, d))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], f = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], g = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), h = u - g % u, b = Math.floor(g / u);
      let _ = [];
      const w = t.reedSolomonComputeDivisor(f);
      for (let p = 0, y = 0; p < u; p++) {
        let N = s.slice(
          y,
          y + b - f + (p < h ? 0 : 1)
        );
        y += N.length;
        const x = t.reedSolomonComputeRemainder(N, w);
        p < h && N.push(0), _.push(N.concat(x));
      }
      let m = [];
      for (let p = 0; p < _[0].length; p++)
        _.forEach((y, N) => {
          (p != b - f || N >= h) && m.push(y[p]);
        });
      return a(m.length == g), m;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let d = this.size - 1; d >= 1; d -= 2) {
        d == 6 && (d = 5);
        for (let u = 0; u < this.size; u++)
          for (let f = 0; f < 2; f++) {
            const g = d - f, b = (d + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[b][g] && l < s.length * 8 && (this.modules[b][g] = r(s[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      a(l == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7) throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let d = 0; d < this.size; d++) {
          let u;
          switch (s) {
            case 0:
              u = (d + l) % 2 == 0;
              break;
            case 1:
              u = l % 2 == 0;
              break;
            case 2:
              u = d % 3 == 0;
              break;
            case 3:
              u = (d + l) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(d / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              u = d * l % 2 + d * l % 3 == 0;
              break;
            case 6:
              u = (d * l % 2 + d * l % 3) % 2 == 0;
              break;
            case 7:
              u = ((d + l) % 2 + d * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][d] && u && (this.modules[l][d] = !this.modules[l][d]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let f = 0; f < this.size; f++) {
        let g = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[f][_] == g ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, b), g || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), g = this.modules[f][_], h = 1);
        s += this.finderPenaltyTerminateAndCount(g, h, b) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let g = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[_][f] == g ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, b), g || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), g = this.modules[_][f], h = 1);
        s += this.finderPenaltyTerminateAndCount(g, h, b) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let g = 0; g < this.size - 1; g++) {
          const h = this.modules[f][g];
          h == this.modules[f][g + 1] && h == this.modules[f + 1][g] && h == this.modules[f + 1][g + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const f of this.modules)
        l = f.reduce((g, h) => g + (h ? 1 : 0), l);
      const d = this.size * this.size, u = Math.ceil(Math.abs(l * 20 - d * 10) / d) - 1;
      return a(0 <= u && u <= 9), s += u * t.PENALTY_N4, a(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const s = Math.floor(this.version / 7) + 2, l = Math.floor(
          (this.version * 8 + s * 3 + 5) / (s * 4 - 4)
        ) * 2;
        let d = [6];
        for (let u = this.size - 7; d.length < s; u -= l)
          d.splice(1, 0, u);
        return d;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(s) {
      if (s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const d = Math.floor(s / 7) + 2;
        l -= (25 * d - 10) * d - 55, s >= 7 && (l -= 36);
      }
      return a(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, l) {
      return Math.floor(t.getNumRawDataModules(s) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][s] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let u = 0; u < s - 1; u++) l.push(0);
      l.push(1);
      let d = 1;
      for (let u = 0; u < s; u++) {
        for (let f = 0; f < l.length; f++)
          l[f] = t.reedSolomonMultiply(l[f], d), f + 1 < l.length && (l[f] ^= l[f + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let d = l.map((u) => 0);
      for (const u of s) {
        const f = u ^ d.shift();
        d.push(0), l.forEach(
          (g, h) => d[h] ^= t.reedSolomonMultiply(g, f)
        );
      }
      return d;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, l) {
      if (s >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let d = 0;
      for (let u = 7; u >= 0; u--)
        d = d << 1 ^ (d >>> 7) * 285, d ^= (l >>> u & 1) * s;
      return a(d >>> 8 == 0), d;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const l = s[1];
      a(l <= this.size * 3);
      const d = l > 0 && s[2] == l && s[3] == l * 3 && s[4] == l && s[5] == l;
      return (d && s[0] >= l * 4 && s[6] >= l ? 1 : 0) + (d && s[6] >= l * 4 && s[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, l, d) {
      return s && (this.finderPenaltyAddHistory(l, d), l = 0), l += this.size, this.finderPenaltyAddHistory(l, d), this.finderPenaltyCountPatterns(d);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, l) {
      l[0] == 0 && (s += this.size), l.pop(), l.unshift(s);
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
  function n(c, s, l) {
    if (s < 0 || s > 31 || c >>> s)
      throw new RangeError("Value out of range");
    for (let d = s - 1; d >= 0; d--)
      l.push(c >>> d & 1);
  }
  function r(c, s) {
    return (c >>> s & 1) != 0;
  }
  function a(c) {
    if (!c) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, l, d) {
      if (this.mode = s, this.numChars = l, this.bitData = d, l < 0) throw new RangeError("Invalid argument");
      this.bitData = d.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(s) {
      let l = [];
      for (const d of s) n(d, 8, l);
      return new i(i.Mode.BYTE, s.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!i.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let d = 0; d < s.length; ) {
        const u = Math.min(s.length - d, 3);
        n(parseInt(s.substring(d, d + u), 10), u * 3 + 1, l), d += u;
      }
      return new i(i.Mode.NUMERIC, s.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!i.isAlphanumeric(s))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let l = [], d;
      for (d = 0; d + 2 <= s.length; d += 2) {
        let u = i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d)) * 45;
        u += i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d + 1)), n(u, 11, l);
      }
      return d < s.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d)),
        6,
        l
      ), new i(i.Mode.ALPHANUMERIC, s.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : i.isNumeric(s) ? [i.makeNumeric(s)] : i.isAlphanumeric(s) ? [i.makeAlphanumeric(s)] : [i.makeBytes(i.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let l = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128) n(s, 8, l);
      else if (s < 16384)
        n(2, 2, l), n(s, 14, l);
      else if (s < 1e6)
        n(6, 3, l), n(s, 21, l);
      else throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, l);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return i.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return i.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, l) {
      let d = 0;
      for (const u of s) {
        const f = u.mode.numCharCountBits(l);
        if (u.numChars >= 1 << f) return 1 / 0;
        d += 4 + f + u.bitData.length;
      }
      return d;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let l = [];
      for (let d = 0; d < s.length; d++)
        s.charAt(d) != "%" ? l.push(s.charCodeAt(d)) : (l.push(parseInt(s.substring(d + 1, d + 3), 16)), d += 2);
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
  e.QrSegment = i;
})(kn || (kn = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(a, i) {
        this.ordinal = a, this.formatBits = i;
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
})(kn || (kn = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(a, i) {
        this.modeBits = a, this.numBitsCharCount = i;
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
      numCharCountBits(a) {
        return this.numBitsCharCount[Math.floor((a + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(kn || (kn = {}));
const zN = "_root_1leml_1", LN = {
  root: zN
}, PN = {
  low: kn.QrCode.Ecc.LOW,
  medium: kn.QrCode.Ecc.MEDIUM,
  quartile: kn.QrCode.Ecc.QUARTILE,
  high: kn.QrCode.Ecc.HIGH
};
function hO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = le(null), u = Oo("(prefers-color-scheme: dark)"), [f, g] = W(
    () => document.documentElement.dataset.theme ?? null
  );
  Oe(() => {
    const N = document.documentElement, x = new MutationObserver(() => {
      g(N.dataset.theme ?? null);
    });
    return x.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => x.disconnect();
  }, []);
  const h = Ne(() => {
    try {
      return kn.QrCode.encodeText(e, PN[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = le(null);
  Oe(() => {
    if (h !== null) {
      b.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (b.current?.value !== e || b.current?.onError !== s) && (b.current = { value: e, onError: s }, s?.(N));
  }, [h, e, s]);
  const _ = Math.max(0, Math.floor(a)), w = [LN.root, c].filter(Boolean).join(" ");
  if (Oe(() => {
    if (n !== "canvas" || h === null) return;
    const N = d.current, x = N?.getContext("2d");
    if (!N || !x) return;
    const M = getComputedStyle(N), S = M.getPropertyValue("--dx-text-color").trim() || "#000", E = M.getPropertyValue("--dx-surface-color").trim() || "#fff";
    RN(x, h, t, _, S, E);
  }, [n, h, t, _, u, f]), h === null)
    return /* @__PURE__ */ o("div", { className: w, role: "img", "aria-label": l, "data-qr-error": "true" });
  const m = h.size + _ * 2, p = t / m;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: d,
        className: w,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const y = [];
  for (let N = 0; N < h.size; N++)
    for (let x = 0; x < h.size; x++)
      h.getModule(x, N) && y.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (x + _) * p,
            y: (N + _) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${x}-${N}`
        )
      );
  return /* @__PURE__ */ C(
    "svg",
    {
      className: w,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function RN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const jN = "_root_1v9la_1", BN = "_value_1v9la_9", wa = {
  root: jN,
  value: BN
}, ka = [
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
], Na = 104, FN = 106;
function HN(e) {
  const t = [Na];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = Na;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, FN), t;
}
function mO({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: a,
  className: i
}) {
  const c = a ?? `Barcode ${e}`, s = Ne(() => {
    const l = [];
    let d = 0;
    for (const u of HN(e)) {
      const f = ka[u] ?? ka[0];
      for (let g = 0; g < f.length; g++) {
        const h = Number(f[g]);
        g % 2 === 0 && l.push({ x: d, w: h }), d += h;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ C("span", { className: [wa.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ C(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${s.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": c,
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
          s.modules.map((l, d) => /* @__PURE__ */ o(
            "rect",
            {
              x: l.x,
              y: 0,
              width: l.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            d
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ o("span", { className: wa.value, children: e })
  ] });
}
const UN = "_root_16i43_1", WN = "_svg_16i43_10", qN = "_gridline_16i43_15", KN = "_tickLabel_16i43_21", GN = "_axisTitle_16i43_27", VN = "_dataLabel_16i43_34", YN = "_gaugeValue_16i43_40", XN = "_legend_16i43_47", ZN = "_legendItem_16i43_55", JN = "_swatch_16i43_63", QN = "_tooltip_16i43_70", e$ = "_visuallyHidden_16i43_84", Ze = {
  root: UN,
  svg: WN,
  gridline: qN,
  tickLabel: KN,
  axisTitle: GN,
  dataLabel: VN,
  gaugeValue: YN,
  legend: XN,
  legendItem: ZN,
  swatch: JN,
  tooltip: QN,
  visuallyHidden: e$
}, ko = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Ja(e, t) {
  return e.color ?? ko[t % ko.length];
}
const Qa = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble",
  "candlestick",
  "ohlc",
  "highlow",
  "trendline",
  "movingaverage"
]), t$ = /* @__PURE__ */ new Set([...Qa, "heatmap"]), n$ = [1, 2, 2.5, 5, 10], r$ = 5;
function o$(e, t, n) {
  const r = t - e || 1, a = n ?? (() => {
    const d = r / r$, u = Math.pow(10, Math.floor(Math.log10(d))), f = d / u;
    return (n$.find((h) => h >= f) ?? 10) * u;
  })(), i = Math.floor(e / a) * a, c = Math.ceil(t / a) * a, s = Math.round((c - i) / a), l = [];
  for (let d = 0; d <= s; d++)
    l.push(Number((i + d * a).toFixed(6)));
  return { min: i, max: c, step: a, ticks: l };
}
function No(e) {
  const t = (n, r) => n != null ? Number(r[n]) : void 0;
  return e.data.map((n) => ({
    cat: String(n[e.categoryProperty] ?? ""),
    val: Number(n[e.valueProperty]),
    open: t(e.openProperty, n),
    high: t(e.highProperty, n),
    low: t(e.lowProperty, n),
    close: t(e.closeProperty, n),
    min: e.minProperty != null ? Number(n[e.minProperty]) : void 0,
    max: e.maxProperty != null ? Number(n[e.maxProperty]) : void 0,
    size: e.sizeProperty ? Number(n[e.sizeProperty]) : void 0,
    item: n
  }));
}
function Zt(e, t, n) {
  return /* @__PURE__ */ C(
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
const Wt = (e) => e * Math.PI / 180;
function Eo(e, t, n, r, a) {
  const i = r.markers ?? {};
  if (i.visible === !1) return null;
  const c = i.shape ?? "circle", s = i.size ?? a, l = "var(--dx-surface-color)";
  return c === "square" ? /* @__PURE__ */ o(
    "rect",
    {
      x: e - s,
      y: t - s,
      width: s * 2,
      height: s * 2,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : c === "diamond" ? /* @__PURE__ */ o(
    "path",
    {
      d: `M ${e} ${t - s} L ${e + s} ${t} L ${e} ${t + s} L ${e - s} ${t} Z`,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : c === "triangle" ? /* @__PURE__ */ o(
    "path",
    {
      d: `M ${e} ${t - s} L ${e + s} ${t + s} L ${e - s} ${t + s} Z`,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : /* @__PURE__ */ o(
    "circle",
    {
      cx: e,
      cy: t,
      r: s,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  );
}
function el(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Xr(e, t) {
  return e.percent ? `${t}%` : String(t);
}
const s$ = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function a$(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && s$.has(a.type)) return a;
  }
  return null;
}
function l$(e, t, n, r) {
  const a = a$(e, t, n);
  if (!a) return null;
  const i = No(a).filter((u) => !Number.isNaN(u.val));
  if (i.length === 0) return null;
  const c = i.map((u) => u.cat);
  let s;
  if (t.type === "trendline") {
    const u = i.length, f = i.map((p, y) => y), g = i.map((p) => p.val), h = f.reduce((p, y) => p + y, 0) / u, b = g.reduce((p, y) => p + y, 0) / u;
    let _ = 0, w = 0;
    for (let p = 0; p < u; p++)
      _ += (f[p] - h) * (g[p] - b), w += (f[p] - h) * (f[p] - h);
    const m = w === 0 ? 0 : _ / w;
    s = c.map((p, y) => ({
      cat: p,
      val: b + m * (y - h)
    }));
  } else {
    const u = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((f, g) => {
      if (g + 1 < u) return null;
      const h = i.slice(g + 1 - u, g + 1);
      return {
        cat: f.cat,
        val: h.reduce((b, _) => b + _.val, 0) / u
      };
    }).filter((f) => f != null);
  }
  if (s.length === 0) return null;
  const l = {
    ...t,
    stack: void 0,
    categoryProperty: "__cat",
    valueProperty: "__val",
    data: s.map((u, f) => ({
      __cat: u.cat,
      __val: u.val,
      __item: i[f + (i.length - s.length)]?.item
    })),
    markers: { ...t.markers ?? {}, visible: t.markers?.visible ?? !1 }
  }, d = No(l).map((u) => ({
    ...u,
    item: u.item.__item ?? u.item
  }));
  return tl(e, l, n, d, r);
}
function i$(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((f, g) => [f, g])), s = n.map((f) => {
    const g = c.get(f.cat) ?? 0, h = f.min, b = f.max;
    return typeof h != "number" || Number.isNaN(h) || typeof b != "number" || Number.isNaN(b) ? null : { x: r(g), lo: a(h), hi: a(b) };
  });
  if (s.some((f) => f == null)) return null;
  const l = s.map((f) => `L ${f.x} ${f.hi}`).join(" "), d = [...s].reverse().map((f) => `L ${f.x} ${f.lo}`).join(" "), u = s[0];
  return /* @__PURE__ */ o(
    "path",
    {
      d: `M ${u.x} ${u.hi} ${l} ${d} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function c$(e, t, n, r) {
  const { pad: a, plotW: i, plotH: c } = e, s = a.l + i / 2, l = a.t + c / 2, d = Math.min(i, c) / 3, u = t.type === "donut" ? t.innerRadius ?? d * 0.5 : 0, f = r.reduce((h, b) => h + (Number(b.val) || 0), 0);
  let g = -90;
  return Zt(
    n,
    t,
    r.map((h, b) => {
      const _ = f ? h.val / f * 360 : 0, w = g, m = g + _;
      g = m;
      const p = _ > 180 ? 1 : 0, y = s + d * Math.cos(Wt(w)), N = l + d * Math.sin(Wt(w)), x = s + d * Math.cos(Wt(m)), M = l + d * Math.sin(Wt(m)), S = s + u * Math.cos(Wt(m)), E = l + u * Math.sin(Wt(m)), T = s + u * Math.cos(Wt(w)), L = l + u * Math.sin(Wt(w)), A = u ? `M ${y} ${N} A ${d} ${d} 0 ${p} 1 ${x} ${M} L ${S} ${E} A ${u} ${u} 0 ${p} 0 ${T} ${L} Z` : `M ${s} ${l} L ${y} ${N} A ${d} ${d} 0 ${p} 1 ${x} ${M} Z`, D = (w + m) / 2, v = s + (d + 12) * Math.cos(Wt(D)), k = l + (d + 12) * Math.sin(Wt(D)), $ = Ja(t, b);
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: A,
            fill: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, k, `${t.title ?? h.cat}: ${h.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: v,
            y: k,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: h.val
          }
        )
      ] }, b);
    })
  );
}
function d$(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: u } = e, f = new Map(u.map((g, h) => [g, h]));
  return Zt(
    n,
    t,
    r.map((g, h) => {
      const b = f.get(g.cat) ?? 0, _ = Number(r[h].cat), w = Number.isNaN(_) ? l(b) : i.l + (_ - s.min) / (s.max - s.min || 1) * c, m = d(g.val), p = t.type === "bubble" && g.size !== void 0 ? Math.max(4, Math.min(12, g.size / 10)) : 4;
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        Eo(w, m, a, t, p),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: w,
            cy: m,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(w, m, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, h);
    })
  );
}
function tl(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, u = new Map(l.map((b, _) => [b, _])), f = (b) => {
    if (!t.stack) return i.min;
    let _ = 0;
    for (let w = 0; w < n; w++) {
      const m = d[w];
      if (m?.stack !== t.stack) continue;
      const p = m.data.find(
        (y) => String(y[m.categoryProperty] ?? "") === b
      );
      p && (_ += Number(p[m.valueProperty]) || 0);
    }
    return _;
  }, g = r.map((b, _) => {
    const w = u.get(b.cat) ?? 0, m = f(b.cat);
    return `${_ === 0 ? "M" : "L"} ${c(w)} ${s(m + b.val)}`;
  }).join(" "), h = r.map((b, _) => {
    const w = u.get(b.cat) ?? 0, m = f(b.cat);
    return `${_ === 0 ? "M" : "L"} ${c(w)} ${s(m)}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ C(ot, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${g} L ${c(r.length - 1)} ${s(f(r[r.length - 1].cat))} L ${c(0)} ${s(f(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      i$(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: g,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: el(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: h, fill: "none", stroke: "transparent" }),
      r.map((b, _) => {
        const w = u.get(b.cat) ?? 0, m = f(b.cat), p = c(w), y = s(m + b.val);
        return /* @__PURE__ */ C("g", { role: "listitem", children: [
          Eo(p, y, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: p - 12,
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                p,
                y,
                `${t.title ?? b.cat}: ${Xr(e, b.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: p,
              y: y - 8,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Xr(e, b.val)
            }
          )
        ] }, _);
      })
    ] })
  );
}
function u$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: u, categories: f, series: g } = e, h = new Map(f.map((_, w) => [_, w])), b = t.type === "bar";
  return Zt(
    n,
    t,
    r.map((_, w) => {
      const m = h.get(_.cat) ?? 0;
      let p = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const $ = g[k];
          if ($?.stack !== t.stack) continue;
          const I = $.data.find(
            (z) => String(z[$.categoryProperty] ?? "") === _.cat
          );
          I && (p += Number(I[$.valueProperty]) || 0);
        }
      const y = p + _.val, N = typeof _.min == "number" && !Number.isNaN(_.min) && typeof _.max == "number" && !Number.isNaN(_.max), x = g.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, M = c / Math.max(1, f.length), S = b ? 18 : Math.max(12, M / (t.stack ? 1 : g.length) - 4), E = b ? i.l + p / (l.max - l.min || 1) * c : d(m) - S / 2 + (t.stack ? 0 : n % x * S), T = b ? i.t + m * s / Math.max(1, f.length) + 4 : u(N ? p + _.max : y), L = b ? N ? (_.max - _.min) / (l.max - l.min || 1) * c : _.val / (l.max - l.min || 1) * c : S - 4, A = b ? 16 : N ? u(p + _.min) - u(p + _.max) : u(p) - u(y), D = b ? i.l + (p + (N ? _.min : 0)) / (l.max - l.min || 1) * c : E, v = b ? i.t + m * s / Math.max(1, f.length) + 4 : T;
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: D,
            y: v,
            width: b ? L : S - 4,
            height: A,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              D + (b ? L : S) / 2,
              v,
              `${t.title ?? _.cat}: ${Xr(e, _.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: D + (b ? L : S) / 2,
            y: v - 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Xr(e, _.val)
          }
        )
      ] }, w);
    })
  );
}
function f$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: u, hideTip: f } = e, g = i.l + c / 2, h = i.t + s * 0.78, b = Math.min(c, s) * 0.36, _ = 135, w = 270, m = r.reduce((M, S) => M + (Number(S.val) || 0), 0), p = l.max - l.min || 1, y = Math.min(1, Math.max(0, (m - l.min) / p)), N = (M, S) => {
    const [E, T] = [
      g + b * Math.cos(Wt(M)),
      h + b * Math.sin(Wt(M))
    ], [L, A] = [
      g + b * Math.cos(Wt(S)),
      h + b * Math.sin(Wt(S))
    ], D = S - M > 180 ? 1 : 0;
    return `M ${E} ${T} A ${b} ${b} 0 ${D} 1 ${L} ${A}`;
  }, x = Number(m.toFixed(2));
  return Zt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ C("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + w),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + w * y),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: g, y: h - 4, textAnchor: "middle", className: Ze.gaugeValue, children: x }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + w),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && u(g, h - b, `${t.title ?? "Value"}: ${x}`),
          onMouseLeave: () => f(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", m, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: g,
          y: h + b + 18,
          textAnchor: "middle",
          className: Ze.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function _s(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (f) => Wt(-90 + 360 * f / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (f, g) => {
    const h = d(f);
    return [
      i + s * g * Math.cos(h),
      c + s * g * Math.sin(h)
    ];
  } };
}
function p$(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = _s(e);
  return /* @__PURE__ */ C("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((c) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((s, l) => a(l, c).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      c
    )),
    t.map((c, s) => {
      const [l, d] = a(s, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: r,
          x2: l,
          y2: d,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        c
      );
    })
  ] });
}
function _$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: u, radius: f, angleFor: g, vertexFor: h } = _s(e), b = e.scale.max || 1, _ = (m) => r.find((p) => p.cat === m)?.val ?? 0, w = i.map((m, p) => {
    const y = Math.min(1, Math.max(0, _(m) / b)), [N, x] = h(p, y);
    return `${N},${x}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ C(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: w,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: 2
        }
      ),
      i.map((m, p) => {
        const y = Math.min(1, Math.max(0, _(m) / b)), [N, x] = h(p, y), [M, S] = h(p, 1);
        return /* @__PURE__ */ C("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: N,
              cy: x,
              r: 3.5,
              fill: a,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: N,
              cy: x,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(M, S, `${t.title ?? m}: ${_(m)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const E = r.find((T) => T.cat === m);
                E && e.handleClick(t, E.cat, E.val, E.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (f + 14) * Math.cos(g(p)),
              y: u + (f + 14) * Math.sin(g(p)) + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: m
            }
          )
        ] }, m);
      })
    ] })
  );
}
function h$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, g = Math.max(1, ...f.map((_) => Number(_.val) || 0)), h = s / Math.max(1, f.length), b = i.l + c / 2;
  return Zt(
    n,
    t,
    f.map((_, w) => {
      const p = Math.max(0, Number(_.val) || 0) / g * c, y = f[w + 1], N = y ? Math.max(0, Number(y.val) || 0) / g * c : p * 0.7, x = i.t + w * h + 2, M = Math.max(4, h - 6), S = 1 - w * (0.45 / Math.max(1, f.length));
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - p / 2} ${x} L ${b + p / 2} ${x} L ${b + N / 2} ${x + M} L ${b - N / 2} ${x + M} Z`,
            fill: a,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(b, x, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ C(
          "text",
          {
            x: b,
            y: x + M / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              _.val
            ]
          }
        )
      ] }, w);
    })
  );
}
function m$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: u, hideTip: f } = e, g = [];
  t.data.forEach((y) => {
    const N = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    g.includes(N) || g.push(N);
  });
  const h = r.map((y) => y.val).filter((y) => Number.isFinite(y)), b = h.length ? Math.min(...h) : 0, _ = h.length ? Math.max(...h) : 1, w = c / Math.max(1, l.length), m = s / Math.max(1, g.length), p = (y) => _ === b ? 0.6 : 0.15 + 0.85 * ((y - b) / (_ - b));
  return Zt(
    n,
    t,
    /* @__PURE__ */ C(ot, { children: [
      g.map((y, N) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * m + m / 2 + 4,
          textAnchor: "end",
          className: Ze.tickLabel,
          children: y
        },
        y
      )),
      r.map((y, N) => {
        const x = t.data[N], M = l.indexOf(y.cat), S = g.indexOf(
          t.rowProperty && x ? String(x[t.rowProperty] ?? "") : "All"
        );
        if (M < 0 || S < 0) return null;
        const E = i.l + M * w, T = i.t + S * m;
        return /* @__PURE__ */ C("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: E + 1,
              y: T + 1,
              width: Math.max(1, w - 2),
              height: Math.max(1, m - 2),
              fill: a,
              fillOpacity: p(y.val),
              onMouseEnter: () => d && u(E + w / 2, T, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: E + w / 2,
              y: T + m / 2 + 4,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: y.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function g$(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((h, b) => [h, b])), d = e.plotW / Math.max(1, s.length), u = Math.max(8, Math.min(28, d / 2 - 4)), f = t.upColor ?? a, g = t.downColor ?? "var(--dx-danger-color)";
  return Zt(
    n,
    t,
    r.map((h, b) => {
      const _ = l.get(h.cat) ?? 0, w = i(_), m = h.close ?? h.val, p = typeof h.open == "number" && !Number.isNaN(h.open) && typeof h.high == "number" && !Number.isNaN(h.high) && typeof h.low == "number" && !Number.isNaN(h.low) && typeof m == "number" && !Number.isNaN(m), y = p && m >= h.open, N = `${t.title ?? h.cat}: O ${h.open ?? "–"} H ${h.high ?? "–"} L ${h.low ?? "–"} C ${m}`;
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        p && t.type === "candlestick" && /* @__PURE__ */ C(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: w,
              y1: c(h.high),
              x2: w,
              y2: c(h.low),
              stroke: y ? f : g,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: w - u / 2,
              y: c(Math.max(h.open, m)),
              width: u,
              height: Math.max(
                2,
                c(Math.min(h.open, m)) - c(Math.max(h.open, m))
              ),
              fill: y ? f : "none",
              stroke: y ? f : g,
              strokeWidth: 1.5
            }
          )
        ] }),
        p && t.type === "ohlc" && /* @__PURE__ */ C(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: w,
              y1: c(h.high),
              x2: w,
              y2: c(h.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: w - u / 2,
              y1: c(h.open),
              x2: w,
              y2: c(h.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: w,
              y1: c(m),
              x2: w + u / 2,
              y2: c(m),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        p && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: w,
            y1: c(h.high),
            x2: w,
            y2: c(h.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !p && Eo(w, c(m), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: w - 14,
            y: c(m) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(w, c(m), N),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, m, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: w,
            y: c(m) - 8,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Xr(e, m)
          }
        )
      ] }, b);
    })
  );
}
function y$(e, t, n, r, a) {
  const i = e.reduce((b, _) => b + Math.max(0, _.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((b, _) => ({ ...b, i: _ }));
  let d = t, u = n, f = r, g = a;
  const h = (b, _) => {
    const w = b.reduce((y, N) => y + Math.max(0, N.val), 0) * c;
    if (w <= 0) return Number.POSITIVE_INFINITY;
    const m = Math.max(...b.map((y) => Math.max(0, y.val))) * c, p = Math.min(...b.map((y) => Math.max(0, y.val))) * c;
    return Math.max(
      _ * _ * m / (w * w),
      w * w / (_ * _ * (p || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const b = Math.min(f, g), _ = [];
    let w = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const p = [..._, l[0]], y = h(p, b);
      if (y <= w)
        w = y, _.push(l.shift());
      else break;
    }
    _.length === 0 && _.push(l.shift());
    const m = _.reduce((p, y) => p + Math.max(0, y.val), 0) * c;
    if (f >= g) {
      const p = m / g;
      let y = u;
      for (const N of _) {
        const x = Math.max(0, N.val) * c / p;
        s[N.i] = { x: d, y, w: p, h: x }, y += x;
      }
      d += p, f -= p;
    } else {
      const p = m / f;
      let y = d;
      for (const N of _) {
        const x = Math.max(0, N.val) * c / p;
        s[N.i] = { x: y, y: u, w: x, h: p }, y += x;
      }
      u += p, g -= p;
    }
  }
  return s;
}
function nl(e, t, n, r, a, i, c, s, l, d, u) {
  const f = e.colorFor, g = s.map((_) => ({
    cat: String(_[t.categoryProperty] ?? ""),
    val: Number(_[t.valueProperty]),
    item: _
  })), h = y$(g, r, a, i, c), b = t.childrenProperty ?? "children";
  g.forEach((_, w) => {
    const m = h[w], p = s[w]?.[b], y = Array.isArray(p) ? p : [];
    if (y.length > 0 && l < 8) {
      nl(
        e,
        t,
        n,
        m.x,
        m.y,
        m.w,
        m.h,
        y,
        l + 1,
        d,
        u
      );
      return;
    }
    const N = d.n++;
    u.push({
      ..._,
      color: f(n + N, t),
      x: m.x,
      y: m.y,
      w: m.w,
      h: m.h
    });
  });
}
function b$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = { n: 0 }, g = [];
  return nl(
    e,
    t,
    n,
    i.l,
    i.t,
    c,
    s,
    t.data,
    0,
    f,
    g
  ), Zt(
    n,
    t,
    g.map((h, b) => /* @__PURE__ */ C("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "rect",
        {
          x: h.x,
          y: h.y,
          width: Math.max(0, h.w),
          height: Math.max(0, h.h),
          fill: h.color,
          stroke: "var(--dx-surface-color)",
          strokeWidth: 1,
          onMouseEnter: () => l && d(
            h.x + h.w / 2,
            h.y,
            `${t.title ?? h.cat}: ${h.val}`
          ),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, h.cat, h.val, h.item),
          style: { cursor: "pointer" }
        }
      ),
      h.w > 28 && h.h > 18 && /* @__PURE__ */ o(
        "text",
        {
          x: h.x + h.w / 2,
          y: h.y + h.h / 2 + 4,
          textAnchor: "middle",
          className: Ze.dataLabel,
          children: h.cat
        }
      )
    ] }, b))
  );
}
function x$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, g = Math.max(1, ...f.map((_) => Math.max(0, _.val))), h = s / Math.max(1, f.length), b = i.l + c / 2;
  return Zt(
    n,
    t,
    f.map((_, w) => {
      const p = Math.max(0, _.val) / g * c, y = f[w + 1], N = y ? Math.max(0, y.val) / g * c : p, x = i.t + w * h + 2, M = Math.max(4, h - 6);
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - p / 2} ${x} L ${b + p / 2} ${x} L ${b + N / 2} ${x + M} L ${b - N / 2} ${x + M} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(b, x, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ C(
          "text",
          {
            x: b,
            y: x + M / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              _.val
            ]
          }
        )
      ] }, w);
    })
  );
}
function v$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: u } = _s(e), f = (b) => {
    let _ = 0;
    for (const w of d)
      if (w.type === "spider") {
        for (const m of w.data)
          if (String(m[w.categoryProperty] ?? "") === b) {
            const p = Number(m[w.valueProperty]);
            Number.isNaN(p) || (_ = Math.max(_, p));
          }
      }
    return _ || 1;
  }, g = (b) => r.find((_) => _.cat === b)?.val ?? 0, h = i.map((b, _) => {
    const w = Math.min(1, Math.max(0, g(b) / f(b))), [m, p] = u(_, w);
    return `${m},${p}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ C(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: h,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: el(t.dash)
        }
      ),
      i.map((b, _) => {
        const w = Math.min(1, Math.max(0, g(b) / f(b))), [m, p] = u(_, w), [y, N] = u(_, 1);
        return /* @__PURE__ */ C("g", { role: "listitem", children: [
          Eo(m, p, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: m,
              cy: p,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(y, N, `${t.title ?? b}: ${g(b)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const x = r.find((M) => M.cat === b);
                x && e.handleClick(t, x.cat, x.val, x.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: y,
              y: N + 16,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: g(b)
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: y,
              y: N + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: b
            }
          )
        ] }, b);
      })
    ] })
  );
}
function w$(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, c = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((k) => ({
    source: String(k[c] ?? ""),
    target: String(k[s] ?? ""),
    value: Number(k[t.valueProperty]),
    item: k
  })).filter(
    (k) => k.source && k.target && k.source !== k.target && k.value > 0
  ), d = [];
  for (const k of l)
    d.includes(k.source) || d.push(k.source), d.includes(k.target) || d.push(k.target);
  const u = /* @__PURE__ */ new Map();
  for (const k of l)
    u.has(k.target) || u.set(k.target, []), u.get(k.target).push(k.source);
  const f = /* @__PURE__ */ new Map(), g = (k, $) => {
    if (f.has(k)) return f.get(k);
    if ($.has(k)) return 0;
    $.add(k);
    const I = u.get(k) ?? [], z = I.length === 0 ? 0 : 1 + Math.max(...I.map((P) => g(P, $)));
    return $.delete(k), f.set(k, z), z;
  }, h = /* @__PURE__ */ new Map();
  for (const k of d) h.set(k, g(k, /* @__PURE__ */ new Set()));
  const b = Math.max(0, ...h.values()), _ = Math.max(
    12,
    Math.min(28, a / Math.max(1, (b + 1) * 8))
  ), w = 10, m = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  for (const k of l)
    p.set(k.source, (p.get(k.source) ?? 0) + k.value), m.set(k.target, (m.get(k.target) ?? 0) + k.value);
  const y = (k) => Math.max(m.get(k) ?? 0, p.get(k) ?? 0), N = /* @__PURE__ */ new Map();
  for (const k of d) {
    const $ = h.get(k);
    N.set($, (N.get($) ?? 0) + y(k));
  }
  const x = Math.max(1, ...N.values()), M = (i - w * Math.max(0, d.length - 1)) / x, S = (k) => b === 0 ? r.l : r.l + k / b * (a - _), E = [], T = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  for (const k of d) {
    const $ = h.get(k);
    L.has($) || L.set($, []), L.get($).push(k);
  }
  for (const [k, $] of [...L.entries()].sort(
    (I, z) => I[0] - z[0]
  )) {
    let I = r.t;
    for (const z of $) {
      const P = Math.max(4, y(z) * M), R = {
        id: z,
        depth: k,
        total: y(z),
        x: S(k),
        w: _,
        y: I,
        h: P,
        color: e.colorFor(n + E.length, t)
      };
      E.push(R), T.set(z, R), I += P + w;
    }
  }
  const A = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), v = [];
  for (const k of l) {
    const $ = T.get(k.source), I = T.get(k.target), z = Math.max(1, k.value * M), P = $.y + (A.get(k.source) ?? 0), R = I.y + (D.get(k.target) ?? 0);
    A.set(k.source, (A.get(k.source) ?? 0) + z), D.set(k.target, (D.get(k.target) ?? 0) + z), v.push({ source: $, target: I, value: k.value, y0: P, y1: R, h: z });
  }
  return { nodes: E, links: v };
}
function k$(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function N$(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: c, hideTip: s } = e, { nodes: l, links: d } = w$(e, t, n);
  return Zt(
    n,
    t,
    /* @__PURE__ */ C(ot, { children: [
      d.map((u, f) => /* @__PURE__ */ o(
        "path",
        {
          d: k$(u),
          fill: u.source.color,
          fillOpacity: 0.45,
          stroke: "none",
          onMouseEnter: () => i && c(
            (u.source.x + u.source.w + u.target.x) / 2,
            (u.y0 + u.y1) / 2,
            `${u.source.id} → ${u.target.id}: ${u.value}`
          ),
          onMouseLeave: () => s(),
          onClick: () => e.handleClick(
            t,
            `${u.source.id} → ${u.target.id}`,
            u.value,
            {
              source: u.source.id,
              target: u.target.id,
              value: u.value
            }
          ),
          style: { cursor: "pointer" }
        },
        `link-${f}`
      )),
      l.map((u) => /* @__PURE__ */ C("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: u.x,
            y: u.y,
            width: u.w,
            height: u.h,
            fill: u.color,
            onMouseEnter: () => i && c(u.x + u.w / 2, u.y, `${u.id}: ${u.total}`),
            onMouseLeave: () => s(),
            onClick: () => e.handleClick(t, u.id, u.total, { id: u.id }),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ o(
          "text",
          {
            x: u.depth === 0 ? u.x - 6 : u.x + u.w + 6,
            y: u.y + u.h / 2 + 4,
            textAnchor: u.depth === 0 ? "end" : "start",
            className: Ze.dataLabel,
            children: u.id
          }
        )
      ] }, u.id))
    ] })
  );
}
function $$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r.map((L) => ({ x: Number(L.cat), y: L.val })).filter((L) => !Number.isNaN(L.x) && !Number.isNaN(L.y));
  if (f.length === 0) return null;
  let g = Math.min(...f.map((L) => L.x)), h = Math.max(...f.map((L) => L.x)), b = Math.min(...f.map((L) => L.y)), _ = Math.max(...f.map((L) => L.y));
  g === h && (g -= 0.5, h += 0.5), b === _ && (b -= 0.5, _ += 0.5);
  const w = Math.max(4, Math.floor(t.resolution ?? 28)), m = Array.from(
    { length: w + 1 },
    () => Array.from({ length: w + 1 }, () => 0)
  );
  for (const L of f) {
    const A = Math.max(
      0,
      Math.min(w, Math.round((L.x - g) / (h - g) * w))
    ), D = Math.max(
      0,
      Math.min(w, Math.round((L.y - b) / (_ - b) * w))
    );
    m[D][A] += 1;
  }
  let p = 0;
  for (const L of m) for (const A of L) p = Math.max(p, A);
  if (p <= 0) return null;
  const y = Math.max(1, Math.floor(t.levels ?? 5)), N = Array.from(
    { length: y },
    (L, A) => p * (A + 1) / (y + 1)
  ), x = c / w, M = s / w, S = i.l, E = i.t, T = (L) => {
    const A = [], D = (k, $) => m[$]?.[k] ?? 0, v = (k, $, I, z) => z === I ? (k + $) / 2 : k + (L - I) / (z - I) * ($ - k);
    for (let k = 0; k < w; k++)
      for (let $ = 0; $ < w; $++) {
        const I = D($, k), z = D($ + 1, k), P = D($, k + 1), R = D($ + 1, k + 1), q = S + $ * x, ae = E + k * M, ie = v(q, q + x, I, z), re = v(q, q + x, P, R), V = v(ae, ae + M, I, P), Ee = v(ae, ae + M, z, R), Q = (I >= L ? 8 : 0) | (z >= L ? 4 : 0) | (R >= L ? 2 : 0) | (P >= L ? 1 : 0), J = [ie, ae], X = [re, ae + M], ge = [q, V], te = [q + x, Ee], ye = (K, $e) => {
          A.push([K[0], K[1], $e[0], $e[1]]);
        };
        switch (Q) {
          case 1:
          case 14:
            ye(ge, X);
            break;
          case 2:
          case 13:
            ye(X, te);
            break;
          case 3:
          case 12:
            ye(ge, te);
            break;
          case 4:
          case 11:
            ye(J, te);
            break;
          case 6:
          case 9:
            ye(J, X);
            break;
          case 7:
          case 8:
            ye(J, ge);
            break;
          case 5: {
            (I + z + P + R) / 4 >= L ? (ye(J, ge), ye(X, te)) : (ye(J, te), ye(ge, X));
            break;
          }
          case 10: {
            (I + z + P + R) / 4 >= L ? (ye(J, te), ye(ge, X)) : (ye(J, ge), ye(X, te));
            break;
          }
        }
      }
    return A;
  };
  return Zt(
    n,
    t,
    N.map((L, A) => {
      const D = T(L);
      if (D.length === 0) return null;
      const v = D.map(([$, I, z, P]) => `M ${$} ${I} L ${z} ${P}`).join(" "), k = e.colorFor(n + A, t);
      return /* @__PURE__ */ C("g", { role: "listitem", children: [
        /* @__PURE__ */ o("path", { d: v, fill: "none", stroke: k, strokeWidth: 1.5 }),
        /* @__PURE__ */ o(
          "path",
          {
            d: v,
            fill: "none",
            stroke: "transparent",
            strokeWidth: 12,
            onMouseEnter: () => l && d(
              S + c / 2,
              E + 8,
              `${t.title ?? "Density"} ≥ ${Math.round(L * 100) / 100}`
            ),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, `level ${A + 1}`, L, { threshold: L }),
            style: { cursor: "pointer" }
          }
        )
      ] }, A);
    })
  );
}
function S$(e, t, n) {
  const r = No(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return c$(e, t, n, r);
    case "scatter":
    case "bubble":
      return d$(e, t, n, r, a);
    case "line":
    case "area":
      return tl(e, t, n, r, a);
    case "gauge":
      return f$(e, t, n, r, a);
    case "radar":
      return _$(e, t, n, r, a);
    case "funnel":
      return h$(e, t, n, r, a);
    case "heatmap":
      return m$(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return g$(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return l$(e, t, n, a);
    case "treemap":
      return b$(e, t, n);
    case "pyramid":
      return x$(e, t, n, r, a);
    case "spider":
      return v$(e, t, n, r, a);
    case "sankey":
      return N$(e, t, n);
    case "contour":
      return $$(e, t, n, r);
    default:
      return u$(e, t, n, r, a);
  }
}
function gO({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: a,
  showLegend: i = !0,
  stacked100Percent: c = !1,
  tooltipVisible: s = !0,
  onSeriesClick: l,
  ariaLabel: d = "Chart",
  className: u
}) {
  const [f, g] = W(
    null
  ), h = Ne(() => {
    const v = /* @__PURE__ */ new Set();
    for (const k of e)
      for (const $ of k.data) v.add(String($[k.categoryProperty] ?? ""));
    return [...v];
  }, [e]), b = Ne(() => {
    if (!c) return e;
    const v = /* @__PURE__ */ new Map();
    for (const k of e)
      if (k.stack)
        for (const $ of k.data) {
          const I = `${k.stack}\0${String($[k.categoryProperty] ?? "")}`, z = Number($[k.valueProperty]);
          Number.isNaN(z) || v.set(I, (v.get(I) ?? 0) + z);
        }
    return e.map((k) => k.stack ? {
      ...k,
      data: k.data.map(($) => {
        const I = `${k.stack}\0${String($[k.categoryProperty] ?? "")}`, z = v.get(I) ?? 0, P = Number($[k.valueProperty]);
        return {
          ...$,
          [k.valueProperty]: z > 0 && !Number.isNaN(P) ? P / z * 100 : 0
        };
      })
    } : k);
  }, [e, c]), _ = Ne(() => {
    const v = b.flatMap(
      ($) => $.data.flatMap((I) => [
        Number(I[$.valueProperty]),
        ...$.openProperty ? [Number(I[$.openProperty])] : [],
        ...$.highProperty ? [Number(I[$.highProperty])] : [],
        ...$.lowProperty ? [Number(I[$.lowProperty])] : [],
        ...$.closeProperty ? [Number(I[$.closeProperty])] : []
      ])
    ).filter(($) => !Number.isNaN($)), k = /* @__PURE__ */ new Map();
    for (const $ of b) {
      if (!$.stack) continue;
      let I = k.get($.stack);
      I || k.set($.stack, I = /* @__PURE__ */ new Map());
      for (const z of $.data) {
        const P = String(z[$.categoryProperty] ?? ""), R = Number(z[$.valueProperty]);
        Number.isNaN(R) || I.set(P, (I.get(P) ?? 0) + R);
      }
    }
    for (const $ of k.values()) v.push(...$.values());
    return v;
  }, [b]), w = r?.min ?? (_.length ? Math.min(0, ..._) : 0), m = r?.max ?? (_.length ? Math.max(..._) : 10), p = Ne(
    () => o$(w, m, r?.step),
    [w, m, r?.step]
  ), y = { t: 16, r: 16, b: 40, l: 56 }, N = t - y.l - y.r, x = n - y.t - y.b, M = (v) => y.l + v / Math.max(1, h.length - 1) * N, S = (v) => y.t + (1 - (v - p.min) / (p.max - p.min || 1)) * x, E = (v, k) => k.color ?? ko[v % ko.length], T = e.flatMap(
    (v, k) => v.type === "pie" || v.type === "donut" ? No(v).map(($, I) => ({
      key: `${k}-${I}`,
      label: $.cat,
      color: Ja(v, I)
    })) : [
      {
        key: `${k}`,
        label: v.title ?? `Series ${k + 1}`,
        color: E(k, v)
      }
    ]
  ), L = e.some((v) => Qa.has(v.type)), A = e.some((v) => t$.has(v.type)), D = {
    categories: h,
    scale: p,
    pad: y,
    plotW: N,
    plotH: x,
    xFor: M,
    yFor: S,
    colorFor: E,
    tooltipVisible: s,
    percent: c,
    showTip: (v, k, $) => g({ x: v, y: k, text: $ }),
    hideTip: () => g(null),
    handleClick: (v, k, $, I) => l?.({
      seriesTitle: v.title ?? "",
      category: k,
      value: $,
      item: I
    }),
    series: b
  };
  return /* @__PURE__ */ C(
    "figure",
    {
      className: [Ze.root, u].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ C(
          "svg",
          {
            width: t,
            height: n,
            className: Ze.svg,
            role: "presentation",
            children: [
              L && r?.gridlines !== !1 && p.ticks.map((v) => /* @__PURE__ */ o(
                "line",
                {
                  x1: y.l,
                  x2: y.l + N,
                  y1: S(v),
                  y2: S(v),
                  className: Ze.gridline
                },
                v
              )),
              A && a?.gridlines && h.map((v, k) => /* @__PURE__ */ o(
                "line",
                {
                  x1: M(k),
                  x2: M(k),
                  y1: y.t,
                  y2: y.t + x,
                  className: Ze.gridline
                },
                k
              )),
              L && p.ticks.map((v) => /* @__PURE__ */ o(
                "text",
                {
                  x: y.l - 8,
                  y: S(v) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: c ? `${v}%` : v
                },
                v
              )),
              A && h.map((v, k) => /* @__PURE__ */ o(
                "text",
                {
                  x: M(k),
                  y: y.t + x + 16,
                  textAnchor: "middle",
                  className: Ze.tickLabel,
                  children: v
                },
                v
              )),
              L && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: y.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${y.t + x / 2})`,
                  className: Ze.axisTitle,
                  children: r.title
                }
              ),
              A && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: y.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Ze.axisTitle,
                  children: a.title
                }
              ),
              (e.some((v) => v.type === "radar") || e.some((v) => v.type === "spider")) && p$(D),
              b.map((v, k) => S$(D, v, k))
            ]
          }
        ),
        f && /* @__PURE__ */ o(
          "div",
          {
            className: Ze.tooltip,
            style: { left: f.x, top: f.y - 28 },
            children: f.text
          }
        ),
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: T.map((v) => /* @__PURE__ */ C("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: v.color },
              "aria-hidden": "true"
            }
          ),
          v.label
        ] }, v.key)) }),
        /* @__PURE__ */ C(
          "table",
          {
            className: Ze.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: d }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ C("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (v) => v.data.map((k, $) => /* @__PURE__ */ C("tr", { children: [
                  /* @__PURE__ */ o("td", { children: v.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: v.rowProperty ? `${String(k[v.rowProperty] ?? "")} / ${String(k[v.categoryProperty] ?? "")}` : String(k[v.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(k[v.valueProperty] ?? "") })
                ] }, `${v.title}-${$}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function yO({ query: e, children: t }) {
  return Oo(e) ? /* @__PURE__ */ o(ot, { children: t }) : null;
}
function bO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function xO() {
  const e = le(null);
  return Oe(() => {
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
  }, []), H((t) => {
    const n = e.current;
    n && (n.textContent = t);
  }, []);
}
export {
  iS as AIChat,
  h_ as ALERT_ICON,
  MS as Accordion,
  _S as Alert,
  sS as ArcGauge,
  DS as AutoComplete,
  bS as AutoGrid,
  ES as Avatar,
  M$ as Badge,
  mO as Barcode,
  vS as Body,
  nO as Breadcrumb,
  cn as Button,
  T$ as Card,
  lO as Carousel,
  gO as Chart,
  iu as CheckBox,
  zS as CheckBoxList,
  FS as ColorPicker,
  gS as Column,
  ZS as ContextMenuProvider,
  Cr as DEFAULT_OPERATOR_BY_TYPE,
  yv as DEFAULT_PALETTE,
  V$ as DataFilter,
  Y$ as DataGrid,
  X$ as DataList,
  HS as DatePicker,
  Ca as Dialog,
  tS as DialogProvider,
  AS as DropDown,
  YS as DropZone,
  I$ as EmptyState,
  Oa as FILTER_OPERATORS,
  tO as FabMenu,
  ir as Field,
  L$ as Fieldset,
  o0 as Footer,
  P$ as Form,
  z$ as FormField,
  uO as Gantt,
  l0 as Header,
  uS as HtmlEditor,
  Te as Icon,
  no as Input,
  Z$ as Label,
  xS as Layout,
  lS as LinearGauge,
  rO as Link,
  IS as ListBox,
  bO as LiveRegion,
  cS as Login,
  dS as Markdown,
  jS as Mask,
  yO as MediaQuery,
  Ow as Menu,
  Ya as MenuItem,
  BS as Numeric,
  Wc as Pager,
  QS as PanelMenu,
  JS as PanelMenuItem,
  Pf as Password,
  cO as PickList,
  fO as Pivot,
  pS as PopupProvider,
  eO as ProfileMenu,
  kS as Progress,
  hO as QRCode,
  aS as RadialGauge,
  LS as RadioButtonList,
  oS as RangeNavigator,
  US as Rating,
  mS as Row,
  dO as Scheduler,
  KS as SecurityCode,
  wr as Select,
  PS as SelectBar,
  b0 as Sidebar,
  wS as SidebarToggle,
  GS as SignaturePad,
  hS as Skeleton,
  WS as Slider,
  RS as SplitButton,
  sO as Splitter,
  yS as Stack,
  A$ as Stat,
  oO as Steps,
  J$ as Switch,
  D$ as Table,
  TS as Tabs,
  Aa as Text,
  CS as TextArea,
  cs as TextBox,
  NS as ThemeToggle,
  qS as TimeSpanPicker,
  pO as Timeline,
  rS as ToastProvider,
  aO as Toc,
  L0 as ToggleButton,
  Q$ as Tooltip,
  iO as Tree,
  VS as Upload,
  _O as VirtualGrid,
  Jc as aggregateValue,
  Ta as applyFilters,
  Zc as applyGridState,
  Ts as collectGroupKeys,
  ar as columnValue,
  W$ as compare,
  K$ as custom,
  Vc as cycleSort,
  Cs as defaultOperatorForType,
  j$ as email,
  fa as formatMasked,
  yo as formatValue,
  SS as getAppearance,
  go as getByPath,
  $S as getTheme,
  qc as groupItems,
  C$ as iconNames,
  Ea as matchesFilters,
  H$ as maxLength,
  F$ as minLength,
  Xc as paginate,
  B$ as pattern,
  U$ as range,
  Sp as renderMarkdown,
  R$ as required,
  q$ as requiredTrue,
  $a as resolveVariant,
  ws as runValidators,
  F0 as setAppearance,
  B0 as setTheme,
  Yr as shadeClass,
  _c as sortItems,
  Yc as sortedItems,
  da as subscribe,
  Qc as toCsv,
  cc as toFilterString,
  pc as toODataFilterString,
  XS as useContextMenu,
  eS as useDialog,
  Zi as useFormContext,
  G$ as useFormField,
  xO as useLiveRegion,
  Oo as useMediaQuery,
  fS as usePopup,
  OS as useThemeService,
  nS as useToast
};
