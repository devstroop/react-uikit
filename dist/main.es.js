import { jsx as o, jsxs as D, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as at, useId as ct, isValidElement as qt, cloneElement as ss, useState as W, useRef as ae, useEffect as Oe, useCallback as H, useMemo as Ne, useContext as Bn, createContext as cr, Fragment as as, useLayoutEffect as qo, useImperativeHandle as $o, Children as Jr } from "react";
function Xr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const al = "_button_eyvws_1", ll = "_filled_eyvws_36", il = "_flat_eyvws_55", cl = "_outlined_eyvws_58", dl = "_text_eyvws_63", ul = "_loading_eyvws_506", fl = "_spinner_eyvws_509", pl = "_xs_eyvws_525", _l = "_sm_eyvws_531", hl = "_md_eyvws_537", ml = "_lg_eyvws_543", gl = "_xl_eyvws_549", yl = "_iconOnly_eyvws_555", bl = "_fullWidth_eyvws_585", Mn = {
  button: al,
  filled: ll,
  flat: il,
  outlined: cl,
  text: dl,
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
  loading: ul,
  spinner: fl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: pl,
  sm: _l,
  md: hl,
  lg: ml,
  xl: gl,
  iconOnly: yl,
  fullWidth: bl
};
function xl(e, t) {
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
      disabled: y,
      children: m,
      ...g
    } = t;
    if (u === !1) return null;
    const _ = xl(r, a), h = _.style === "light" || _.style === "dark" ? null : Xr(i), p = [
      Mn.button,
      Mn[_.variant],
      Mn[`style-${_.style}`],
      h ? Mn[h] : null,
      Mn[c],
      s ? Mn.fullWidth : null,
      l ? Mn.iconOnly : null,
      d ? Mn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ D(ot, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Mn.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: $, ...E } = g, T = y || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: p,
          "aria-disabled": T || void 0,
          "aria-busy": d || void 0,
          onClick: (I) => {
            if (T) {
              I.preventDefault();
              return;
            }
            $?.(I);
          },
          ...E,
          children: x
        }
      );
    }
    const { type: v = "button", ...C } = g;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: p,
        disabled: y || d,
        "aria-busy": d || void 0,
        ...C,
        children: x
      }
    );
  }
), vl = "_card_4vcae_1", wl = "_elevated_4vcae_8", kl = "_filled_4vcae_13", Nl = "_outlined_4vcae_18", $l = "_interactive_4vcae_22", Sl = "_text_4vcae_30", Ol = "_header_4vcae_46", El = "_body_4vcae_53", Tl = "_footer_4vcae_63", Or = {
  card: vl,
  elevated: wl,
  filled: kl,
  outlined: Nl,
  interactive: $l,
  text: Sl,
  header: Ol,
  body: El,
  footer: Tl
}, S$ = at(function({
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
    /* @__PURE__ */ D(
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
function Sa(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Cl = "_badge_1fy6d_1", Ml = "_xs_1fy6d_21", Al = "_sm_1fy6d_26", Dl = "_md_1fy6d_31", Il = "_lg_1fy6d_36", Ll = "_xl_1fy6d_41", zl = "_neutral_1fy6d_47", Pl = "_primary_1fy6d_52", Rl = "_secondary_1fy6d_61", jl = "_light_1fy6d_66", Bl = "_base_1fy6d_71", Fl = "_dark_1fy6d_76", Hl = "_info_1fy6d_81", Ul = "_success_1fy6d_86", Wl = "_warning_1fy6d_95", ql = "_danger_1fy6d_104", Kl = "_filled_1fy6d_111", Gl = "_outlined_1fy6d_161", Vl = "_text_1fy6d_213", Er = {
  badge: Cl,
  xs: Ml,
  sm: Al,
  md: Dl,
  lg: Il,
  xl: Ll,
  neutral: zl,
  primary: Pl,
  secondary: Rl,
  light: jl,
  base: Bl,
  dark: Fl,
  info: Hl,
  success: Ul,
  warning: Wl,
  danger: ql,
  filled: Kl,
  outlined: Gl,
  text: Vl,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, O$ = at(function({
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
  const u = t, f = Sa(n, "filled"), y = Xr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Er.badge,
        Er[a],
        Er[u],
        Er[f],
        y ? Er[y] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Yl = "_icon_vn4jx_5", Xl = "_xs_vn4jx_24", Zl = "_sm_vn4jx_28", Jl = "_md_vn4jx_23", Ql = "_lg_vn4jx_36", ei = "_xl_vn4jx_40", vs = {
  icon: Yl,
  xs: Xl,
  sm: Zl,
  md: Jl,
  lg: Ql,
  xl: ei
}, E$ = [
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
], Ie = at(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
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
}), ti = "_stat_sjin9_1", ni = "_label_sjin9_8", ri = "_row_sjin9_16", oi = "_value_sjin9_22", si = "_delta_sjin9_28", ai = "_success_sjin9_33", li = "_danger_sjin9_37", ii = "_neutral_sjin9_41", ci = "_hint_sjin9_45", Qn = {
  stat: ti,
  label: ni,
  row: ri,
  value: oi,
  delta: si,
  success: ai,
  danger: li,
  neutral: ii,
  hint: ci
}, T$ = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      className: [Qn.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Qn.label, children: t }),
        /* @__PURE__ */ D("div", { className: Qn.row, children: [
          /* @__PURE__ */ o("div", { className: Qn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Qn.delta, Qn[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: Qn.hint, children: i })
      ]
    }
  );
}), di = "_wrap_ipozk_1", ui = "_table_ipozk_8", fi = "_caption_ipozk_14", pi = "_none_ipozk_51", _i = "_horizontal_ipozk_57", hi = "_vertical_ipozk_67", mi = "_alternating_ipozk_85", gi = "_start_ipozk_89", yi = "_center_ipozk_93", bi = "_end_ipozk_97", xi = "_empty_ipozk_101", Hn = {
  wrap: di,
  table: ui,
  caption: fi,
  none: pi,
  horizontal: _i,
  vertical: hi,
  alternating: mi,
  start: gi,
  center: yi,
  end: bi,
  empty: xi
};
function C$({
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
  return /* @__PURE__ */ D("div", { className: [Hn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
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
const vi = "_emptyState_1swxw_1", wi = "_icon_1swxw_13", ki = "_title_1swxw_18", Ni = "_description_1swxw_24", $i = "_action_1swxw_30", Tr = {
  emptyState: vi,
  icon: wi,
  title: ki,
  description: Ni,
  action: $i
};
function M$({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [Tr.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Tr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Tr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Tr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Tr.action, children: r })
  ] });
}
const Si = "_field_149oz_1", Oi = "_label_149oz_8", Ei = "_required_149oz_14", Ti = "_hint_149oz_19", Ci = "_error_149oz_24", Cr = {
  field: Si,
  label: Oi,
  required: Ei,
  hint: Ti,
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
  const d = r ?? a, u = ct(), f = ct(), y = ct();
  if (l === !1) return null;
  const m = i != null ? f : d != null ? y : null, g = typeof c == "function" ? c({ inputId: u, hintId: y, errorId: f }) : c, _ = qt(g) && typeof g.props.id == "string" ? g.props.id : void 0, b = _ ?? t ?? u, h = qt(g) && (m != null || _ == null && typeof g.type == "string"), p = _ != null || t != null || h, x = h && qt(g) ? ss(g, {
    id: b,
    "aria-describedby": m != null ? [
      g.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ D("div", { className: [Cr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Cr.label,
        htmlFor: p ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Cr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    i != null ? /* @__PURE__ */ o("div", { id: f, className: Cr.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: y, className: Cr.hint, children: d }) : null
  ] });
}
const Mi = "_formfield_6e25e_1", Ai = "_content_6e25e_8", Di = "_floating_6e25e_43", Ii = "_label_6e25e_111", Li = "_start_6e25e_132", zi = "_required_6e25e_169", Pi = "_end_6e25e_175", Ri = "_filled_6e25e_192", ji = "_flat_6e25e_199", Bi = "_helper_6e25e_206", Fi = "_invalid_6e25e_211", $n = {
  formfield: Mi,
  content: Ai,
  floating: Di,
  label: Ii,
  start: Li,
  required: zi,
  end: Pi,
  filled: Ri,
  flat: ji,
  helper: Bi,
  invalid: Fi
};
function A$({
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
  const y = ct(), m = ct();
  if (f === !1) return null;
  const g = a ?? y, _ = typeof d == "function" ? d({
    inputId: g
  }) : d, b = qt(_) ? _.type : null, h = typeof b == "string", p = qt(_) && typeof b != "symbol", x = qt(_) ? _.props : null, N = typeof x?.id == "string" ? x.id : void 0, v = h && qt(_) ? _.type.toLowerCase() : null, C = v != null && (v === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), $ = p && (r != null || s || N == null && C), E = N != null || a != null || $, T = v === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, I = v === "textarea" || v === "input" && (T == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(T)), A = $ && qt(_) ? ss(
    _,
    {
      id: N ?? g,
      ...i && I && x?.placeholder == null ? { placeholder: " " } : {},
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
  ) : _, M = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: $n.label,
      htmlFor: E ? N ?? g : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: $n.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
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
        i ? null : M,
        /* @__PURE__ */ D("div", { className: $n.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: $n.start, children: t }),
          A,
          i ? M : null,
          n != null && /* @__PURE__ */ o("div", { className: $n.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: m, className: $n.helper, children: r })
      ]
    }
  );
}
const Hi = "_fieldset_8x01p_1", Ui = "_legend_8x01p_11", Wi = "_legendText_8x01p_20", qi = "_toggle_8x01p_24", Ki = "_content_8x01p_45", Gi = "_summary_8x01p_49", er = {
  fieldset: Hi,
  legend: Ui,
  legendText: Wi,
  toggle: qi,
  content: Ki,
  summary: Gi
};
function D$({
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
  onExpand: y,
  onCollapse: m,
  children: g,
  className: _,
  visible: b = !0
}) {
  const h = ct(), [p, x] = W(c);
  if (b === !1) return null;
  const N = i ?? p, v = a ? `${h}-content` : void 0, C = () => {
    const M = !N;
    i === void 0 && x(M), M ? m?.() : y?.();
  }, $ = a || e != null || n != null || t != null, E = a ? N : !1, T = a && N && s != null, I = E ? l ?? "Expand" : d ?? "Collapse", A = E ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [er.fieldset, _].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: er.legend, children: a ? /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: er.toggle,
              title: I,
              "aria-label": e == null ? A : void 0,
              "aria-expanded": !E,
              "aria-controls": v,
              onClick: C,
              children: [
                /* @__PURE__ */ o(
                  Ie,
                  {
                    icon: E ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Ie, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(ot, { children: [
          n != null && /* @__PURE__ */ o(Ie, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: er.content,
            id: v,
            hidden: E,
            children: g
          }
        ),
        T ? /* @__PURE__ */ o("div", { className: er.summary, children: s }) : null
      ]
    }
  );
}
const Vi = "_form_abp5n_1", Yi = {
  form: Vi
}, Oa = cr(null);
function Xi() {
  const e = Bn(Oa);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function I$({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = W({}), [d, u] = W(0), f = ae(s);
  Oe(() => {
    f.current = s;
  });
  const y = H((x) => {
    l(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), m = H((x) => {
    l((N) => {
      if (!(x in N)) return N;
      const v = { ...N };
      return delete v[x], v;
    });
  }, []), g = H(() => {
    const x = {};
    for (const N of Object.values(f.current)) {
      const v = N.validate();
      v.length > 0 && (x[N.name] = v);
    }
    return x;
  }, []), _ = H(() => {
    const x = g();
    u((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [g, e, t, n]), b = (x) => {
    r != null && a != null || (x.preventDefault(), _());
  }, h = Ne(
    () => ({ registerField: y, unregisterField: m, submit: _, submitCount: d }),
    [y, m, _, d]
  ), p = [Yi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Oa.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: p,
      onSubmit: b,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const dr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", L$ = (e = "Required") => (t) => dr(t) ? e : null, z$ = (e = "Invalid email") => (t) => dr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, P$ = (e, t = "Invalid format") => (n) => {
  if (dr(n)) return null;
  const r = e.lastIndex;
  e.lastIndex = 0;
  const a = e.test(String(n));
  return e.lastIndex = r, a ? null : t;
}, R$ = (e, t = `Minimum ${e} characters`) => (n) => dr(n) || String(n).length >= e ? null : t, j$ = (e, t = `Maximum ${e} characters`) => (n) => dr(n) || String(n).length <= e ? null : t, B$ = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (dr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, F$ = (e, t = "Values do not match") => (n, r) => {
  if (dr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, H$ = (e = "Required") => (t) => t === !0 ? null : e, U$ = (e) => (t, n) => e(t, n);
function ws(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function W$(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Xi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, u] = W(!1), f = ae(() => []);
  Oe(() => {
    f.current = () => ws(t?.validate ?? [], i);
  }), Oe(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]);
  const [y, m] = W(a);
  a !== y && (m(a), a > 0 && (l(!0), u(!1)));
  const g = s && !d ? ws(t?.validate ?? [], i) : [];
  return { value: i, setValue: (b) => {
    c(b), u(!0);
  }, errors: g };
}
const Zi = "_select_1xe98_1", Ji = "_invalid_1xe98_33", Qi = "_xs_1xe98_40", ec = "_sm_1xe98_48", tc = "_md_1xe98_56", nc = "_lg_1xe98_62", rc = "_xl_1xe98_68", Do = {
  select: Zi,
  invalid: Ji,
  xs: Qi,
  sm: ec,
  md: tc,
  lg: nc,
  xl: rc
}, wr = at(
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...c }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          Do.select,
          Do[t],
          n ? Do.invalid : null,
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
), Ea = [
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
], Mr = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, oc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function sc(e) {
  return oc.includes(e);
}
function bo(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function ks(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Kr(e, t) {
  const n = ks(e), r = ks(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function So(e) {
  if (e.secondOperator == null) return !1;
  if (sc(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Ns(e, t, n) {
  const r = bo(t, e.property), a = $s(
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
      return Kr(c, s) < 0;
    case "LessThanOrEquals":
      return Kr(c, s) <= 0;
    case "GreaterThan":
      return Kr(c, s) > 0;
    case "GreaterThanOrEquals":
      return Kr(c, s) >= 0;
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
function ls(e) {
  return "filters" in e;
}
function Ta(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (ls(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (c) => Ta(e, c, { logicalOperator: i, caseSensitivity: a })
    );
  }
  return t.operator === "Custom", Ns(t, e, a);
}
function Ca(e, t, n = {}) {
  return e.filter((r) => Ta(r, t, n));
}
function ac(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function on(e) {
  return typeof e == "string" ? `"${ac(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(on).join(", ")}]` : `"${String(e)}"`;
}
function lc(e) {
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
function ic(e) {
  return ls(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ic).filter(Boolean).join(` ${e.operator} `)})` : lc(e);
}
function cc(e) {
  return e.replace(/'/g, "''");
}
const dc = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function uc(e, t) {
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${cc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, u) => {
    const f = typeof u == "string", y = f && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${y} ${dc[d]} ${f && r ? a(i(u)) : i(u)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(u))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(u))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(u))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(u))}))`;
      case "In":
        return Array.isArray(u) ? `${y} in (${u.map((m) => i(m)).join(", ")})` : `${y} in (${i(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${y} in (${u.map((m) => i(m)).join(", ")}))` : `not(${y} in (${i(u)}))`;
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
function fc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (ls(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => fc(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return uc(e, n);
}
function pc(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const a of t) {
      const i = a.sortOrder === "Ascending" ? 1 : -1, c = Kr(
        bo(n, a.property),
        bo(r, a.property)
      );
      if (c !== 0) return c * i;
    }
    return 0;
  });
}
const _c = "_filter_1dvqt_1", hc = "_rows_1dvqt_9", mc = "_row_1dvqt_9", gc = "_join_1dvqt_21", yc = "_property_1dvqt_30", bc = "_operator_1dvqt_34", xc = "_value_1dvqt_38", vc = "_remove_1dvqt_42", wc = "_bar_1dvqt_58", kc = "_add_1dvqt_64", Nc = "_custom_1dvqt_78", $c = "_summary_1dvqt_82", Sc = "_second_1dvqt_87", Oc = "_secondAdd_1dvqt_91", Ec = "_addSecond_1dvqt_95", Tc = "_joinSelect_1dvqt_109", vt = {
  filter: _c,
  rows: hc,
  row: mc,
  join: gc,
  property: yc,
  operator: bc,
  value: xc,
  remove: vc,
  bar: wc,
  add: kc,
  custom: Nc,
  summary: $c,
  second: Sc,
  secondAdd: Oc,
  addSecond: Ec,
  joinSelect: Tc
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
function q$({
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
    () => r != null && r.length > 0 ? r.map((h, p) => ({ id: p, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Mr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (h, p) => {
    u(
      (x) => x.map((N) => N.id === h ? { ...N, ...p } : N)
    );
  }, y = () => {
    const h = d[d.length - 1], p = Math.max(0, ...d.map((N) => N.id)) + 1, x = e[0];
    u((N) => [
      ...N,
      {
        id: p,
        property: h?.property ?? x?.name ?? "",
        operator: Mr[e.find(
          (v) => v.name === (h?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (h) => {
    u(
      (p) => p.length > 1 ? p.filter((x) => x.id !== h) : p
    );
  }, g = Ne(() => {
    const h = [];
    for (const p of d) {
      if (p.property === "" || (p.value == null || p.value === "") && !Ar.includes(p.operator)) continue;
      const N = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: v } = p;
      v != null && So(p) && (N.secondOperator = v, N.secondValue = p.secondValue, N.logicalOperator = p.logicalOperator ?? "And"), h.push(N);
    }
    return h;
  }, [d]), _ = Ne(() => s == null || g.length === 0 ? s : Ca(s, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [s, g, t, n]);
  Oe(() => {
    c != null && s != null && c(_ ?? []);
  }, [_]);
  const b = (h) => e.find((p) => p.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ D("div", { className: [vt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: vt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((h, p) => {
      const x = b(h.property), N = a ? [Mr[x.type ?? "string"]] : Ea, v = !Ar.includes(h.operator), C = h.secondOperator != null;
      return /* @__PURE__ */ D(as, { children: [
        /* @__PURE__ */ D("div", { className: vt.row, children: [
          p > 0 ? /* @__PURE__ */ o("span", { className: vt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            wr,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: vt.property,
              value: h.property,
              onChange: ($) => {
                const E = e.find(
                  (T) => T.name === $.target.value
                );
                f(h.id, {
                  property: $.target.value,
                  operator: Mr[E?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map(($) => ({
                value: $.name,
                label: $.title ?? $.name
              }))
            }
          ),
          /* @__PURE__ */ o(
            wr,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: vt.operator,
              value: h.operator,
              onChange: ($) => {
                const E = $.target.value;
                f(
                  h.id,
                  Ar.includes(E) ? {
                    operator: E,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: E }
                );
              },
              options: N.map(($) => ({
                value: $,
                label: Ss[$]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            Os,
            {
              property: x,
              value: h.value,
              onChange: ($) => f(h.id, { value: $ })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vt.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => m(h.id),
              children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? C ? /* @__PURE__ */ D(
          "div",
          {
            className: [vt.row, vt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                wr,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: vt.joinSelect,
                  value: h.logicalOperator ?? "And",
                  onChange: ($) => f(h.id, {
                    logicalOperator: $.target.value
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
                  value: h.secondOperator,
                  onChange: ($) => {
                    const E = $.target.value;
                    f(
                      h.id,
                      Ar.includes(E) ? { secondOperator: E, secondValue: void 0 } : { secondOperator: E }
                    );
                  },
                  options: N.map(($) => ({
                    value: $,
                    label: Ss[$]
                  }))
                }
              ),
              h.secondOperator == null || !Ar.includes(h.secondOperator) ? /* @__PURE__ */ o(
                Os,
                {
                  property: x,
                  value: h.secondValue,
                  onChange: ($) => f(h.id, { secondValue: $ })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: vt.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => f(h.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: vt.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: vt.addSecond,
            onClick: () => f(h.id, {
              secondOperator: Mr[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ D("div", { className: vt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: vt.add, onClick: y, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: vt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ D("span", { className: vt.summary, "aria-live": "polite", children: [
        _?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Cc = "_pager_1du31_1", Mc = "_alignLeft_1du31_10", Ac = "_alignCenter_1du31_14", Dc = "_alignRight_1du31_18", Ic = "_alignJustify_1du31_22", Lc = "_summary_1du31_26", zc = "_controls_1du31_31", Pc = "_button_1du31_37", Rc = "_active_1du31_73", jc = "_ellipsis_1du31_85", Bc = "_size_1du31_91", Ht = {
  pager: Cc,
  alignLeft: Mc,
  alignCenter: Ac,
  alignRight: Dc,
  alignJustify: Ic,
  summary: Lc,
  controls: zc,
  button: Pc,
  active: Rc,
  ellipsis: jc,
  size: Bc
};
function Fc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Es(e, t) {
  return e.replace("{0}", String(t));
}
function Hc(e, t, n) {
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
function Uc({
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
  pageSizeText: y = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: C,
  visible: $ = !0
}) {
  const E = n ?? r, [T, I] = W(E), A = n !== void 0, M = A ? E : T, k = Math.max(1, Math.ceil(e / t)), w = Math.min(Math.max(1, M), k), O = l ?? !0, z = c || k > 1, L = Hc(w, k, i), P = H(
    (le) => {
      const ne = Math.min(Math.max(1, le), k);
      A || I(ne);
      const V = (ne - 1) * t;
      x?.({
        page: ne,
        skip: V,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [A, x, k, t]
  ), j = s === "center" ? Ht.alignCenter : s === "right" ? Ht.alignRight : s === "justify" ? Ht.alignJustify : Ht.alignLeft, q = {
    count: e,
    pageNumber: w,
    pageSize: t,
    pageCount: k
  }, se = (le) => {
    const ne = Array.from(
      le.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), V = ne.indexOf(document.activeElement);
    V !== -1 && (le.key === "ArrowRight" || le.key === "ArrowDown" ? (le.preventDefault(), (ne[V + 1] ?? ne[0])?.focus()) : le.key === "ArrowLeft" || le.key === "ArrowUp" ? (le.preventDefault(), (ne[V - 1] ?? ne[ne.length - 1])?.focus()) : le.key === "Home" ? (le.preventDefault(), ne[0]?.focus()) : le.key === "End" && (le.preventDefault(), ne[ne.length - 1]?.focus()));
  };
  return $ === !1 || !z ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ht.pager, j, C].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        O && /* @__PURE__ */ o("span", { className: Ht.summary, "aria-live": "polite", children: f ? f(q) : Fc(u, w, k, e) }),
        /* @__PURE__ */ D(
          "div",
          {
            className: Ht.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: se,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: w <= 1,
                  onClick: () => P(1),
                  "aria-label": m,
                  title: m,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: w <= 1,
                  onClick: () => P(w - 1),
                  "aria-label": g,
                  title: g,
                  children: "‹"
                }
              ),
              L.map(
                (le, ne) => le === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${ne}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": le,
                    className: [Ht.button, le === w ? Ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": le === w ? "page" : void 0,
                    "aria-label": Es(p, le),
                    title: Es(h, le),
                    onClick: () => P(le),
                    children: le
                  },
                  le
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ht.button,
                  disabled: w >= k,
                  onClick: () => P(w + 1),
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
                  disabled: w >= k,
                  onClick: () => P(k),
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ D("label", { className: Ht.size, children: [
          /* @__PURE__ */ o("span", { children: y }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (le) => N?.(Number(le.target.value)),
              "aria-label": y,
              children: a.map((le) => /* @__PURE__ */ o("option", { value: le, children: le }, le))
            }
          )
        ] })
      ]
    }
  );
}
function Ko(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: a, ...i } = e;
  return /* @__PURE__ */ o(
    Uc,
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
function Wc(e, t, n, r, a) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((l) => l.property === s), c = (s, l, d) => {
    const u = t[l];
    if (u === void 0)
      return s.map((_) => ({ type: "row", row: _ }));
    const f = i(u), y = /* @__PURE__ */ new Map(), m = [];
    s.forEach((_) => {
      const b = String(a(_, u) ?? ""), h = y.get(b);
      h ? h.push(_) : (y.set(b, [_]), m.push(b));
    });
    const g = [];
    return m.forEach((_) => {
      const b = y.get(_), h = [...d, _].join(Ma), p = b[0], x = p !== void 0 ? a(p, u) : void 0;
      g.push({
        type: "group",
        group: {
          key: h,
          display: xo(x, f?.format),
          property: u,
          title: f?.title ?? u,
          count: b.length,
          level: l
        }
      }), r.has(h) && g.push(...c(b, l + 1, [...d, _]));
    }), g;
  };
  return c(e, 0, []);
}
function Ts(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), u = [];
    i.forEach((f) => {
      const y = String(n(f, l) ?? ""), m = d.get(y);
      m ? m.push(f) : (d.set(y, [f]), u.push(y));
    }), u.forEach((f) => {
      const y = [...s, f].join(Ma);
      r.add(y), a(d.get(f), c + 1, [...s, f]);
    });
  };
  return a(e, 0, []), r;
}
function no(e, t) {
  return e.property ?? `col-${t}`;
}
function qc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: a, column: i }) => {
    if (!i.frozen) return;
    n[a] = r === 0 ? "0px" : `${r}px`;
    const c = t[a] ?? i.width ?? "8rem";
    r += parseFloat(c);
  }), n;
}
function Kc(e, t) {
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
    return bo(e, t);
}
function xo(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Cs = [
  "Ascending",
  "Descending",
  null
];
function Gc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Cs[(r ? Cs.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Vc(e, t) {
  return pc(e, t);
}
function Yc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), a = Math.min(Math.max(1, t), r), i = (a - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: a,
    total: e.length
  };
}
function Xc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, l]) => ({
      property: s,
      operator: l.operator ?? "Contains",
      value: Kc(
        l.value,
        n.types?.[s] ?? "string"
      )
    })
  ), a = r.length > 0 ? Ca(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Vc(a, t.sorts);
  return {
    ...Yc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Ms(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Zc(e, t, n) {
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
function Jc(e, t, n = ar) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, a = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    a.push(
      t.map((c) => r(xo(n(i, c.property), c.format))).join(",")
    );
  }), `${a.join(`\r
`)}\r
`;
}
const Qc = "_grid_13rur_1", ed = "_toolbar_13rur_8", td = "_picker_13rur_13", nd = "_pickerButton_13rur_17", rd = "_pickerPanel_13rur_31", od = "_pickerItem_13rur_46", sd = "_groupPanel_13rur_55", ad = "_groupPanelActive_13rur_66", ld = "_groupPanelText_13rur_70", id = "_groupChip_13rur_74", cd = "_groupRemove_13rur_85", dd = "_groupRow_13rur_94", ud = "_groupCell_13rur_98", fd = "_groupToggle_13rur_104", pd = "_editRow_13rur_117", _d = "_editCell_13rur_121", hd = "_editInput_13rur_127", md = "_commandCell_13rur_137", gd = "_commandButton_13rur_144", yd = "_data_13rur_159", bd = "_table_13rur_166", xd = "_header_13rur_172", vd = "_center_13rur_185", wd = "_right_13rur_189", kd = "_sortButton_13rur_193", Nd = "_sortIndicator_13rur_211", $d = "_sortIndex_13rur_215", Sd = "_cell_13rur_226", Od = "_clickable_13rur_241", Ed = "_frozen_13rur_249", Td = "_selected_13rur_255", Cd = "_resizeHandle_13rur_263", Md = "_filterCell_13rur_281", Ad = "_filterSelect_13rur_290", Dd = "_filterInput_13rur_300", Id = "_empty_13rur_311", Ld = "_loading_13rur_317", zd = "_visuallyHidden_13rur_331", Pd = "_virtualScroller_13rur_340", Rd = "_spacerRow_13rur_345", jd = "_footerRow_13rur_350", Bd = "_footerCell_13rur_354", Fd = "_footerValue_13rur_361", Se = {
  grid: Qc,
  toolbar: ed,
  picker: td,
  pickerButton: nd,
  pickerPanel: rd,
  pickerItem: od,
  groupPanel: sd,
  groupPanelActive: ad,
  groupPanelText: ld,
  groupChip: id,
  groupRemove: cd,
  groupRow: dd,
  groupCell: ud,
  groupToggle: fd,
  editRow: pd,
  editCell: _d,
  editInput: hd,
  commandCell: md,
  commandButton: gd,
  data: yd,
  table: bd,
  header: xd,
  center: vd,
  right: wd,
  sortButton: kd,
  sortIndicator: Nd,
  sortIndex: $d,
  cell: Sd,
  clickable: Od,
  frozen: Ed,
  selected: Td,
  resizeHandle: Cd,
  filterCell: Md,
  filterSelect: Ad,
  filterInput: Dd,
  empty: Id,
  loading: Ld,
  visuallyHidden: zd,
  virtualScroller: Pd,
  spacerRow: Rd,
  footerRow: jd,
  footerCell: Bd,
  footerValue: Fd
}, Hd = {
  Ascending: "ascending",
  Descending: "descending"
};
function As(e, t) {
  return e.filterable ?? t;
}
function Ud(e, t) {
  return e.sortable ?? t;
}
function Wd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function K$({
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
  pageNumbersCount: y = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: g = !0,
  showPageSizeSelector: _ = !0,
  selectionMode: b = "None",
  selectedKeys: h,
  onSelectionChange: p,
  showColumnPicker: x = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: C = !1,
  allowGrouping: $ = !1,
  groupPanelText: E = "Drag a column header here to group",
  groupExpanded: T = !0,
  aggregates: I,
  showExportButton: A = !1,
  exportFileName: M = "grid-data",
  serverMode: k = !1,
  totalCount: w,
  onRangeChange: O,
  virtualize: z = !1,
  virtualRowHeight: L = 40,
  virtualHeight: P = 480,
  editMode: j = "None",
  allowRowCreate: q = !1,
  onRowUpdate: se,
  onRowCreate: le,
  onRowDelete: ne,
  isLoading: V = !1,
  empty: Ee = "No records found",
  ariaLabel: Q,
  className: J,
  onRowClick: X
}) {
  const ue = Q != null ? `${Q} ` : "", [ie, xe] = W([]), [Y, $e] = W(
    /* @__PURE__ */ new Map()
  ), [re, Ae] = W(1), [ge, qe] = W(u), [Je, Ge] = W(
    () => e.map((U, K) => no(U, K))
  ), [Qe, He] = W(
    () => new Set(
      e.map((U, K) => U.visible !== !1 ? no(U, K) : "").filter(Boolean)
    )
  ), [gt, ee] = W({}), [Te, lt] = W(!1), [Le, st] = W([]), [Xe, Tt] = W(
    null
  ), [yt, it] = W(null), [ft, Ve] = W({}), [Ct, oe] = W(0), [ze, wt] = W(P), Mt = ae(null), bt = ae(null), R = Ne(() => {
    const U = /* @__PURE__ */ new Map();
    return e.forEach((K, ye) => U.set(no(K, ye), K)), U;
  }, [e]), G = Ne(
    () => Je.filter((U) => Qe.has(U)).map((U) => ({ key: U, column: R.get(U) })).filter(
      (U) => U.column != null
    ),
    [Je, Qe, R]
  ), me = Ne(
    () => qc(G, gt),
    [G, gt]
  ), we = j !== "None" || ne != null || q, pe = Ne(() => {
    if (k) {
      const U = w ?? t.length, K = Math.max(1, Math.ceil(U / ge));
      return {
        items: [...t],
        filtered: [...t],
        total: U,
        pageCount: K,
        pageNumber: re,
        pageSize: ge,
        sorts: ie,
        filters: Y
      };
    }
    return Xc(
      t,
      {
        sorts: ie,
        filters: Y,
        pageNumber: re,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: d ? ge : Number.MAX_SAFE_INTEGER
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
    ie,
    Y,
    re,
    ge,
    l,
    s,
    e,
    k,
    w,
    d
  ]), F = ae(O);
  Oe(() => {
    F.current = O;
  });
  const _e = Ne(
    () => [...Y.entries()].filter(([, U]) => U.value !== "" && U.value !== void 0).map(([U, K]) => ({
      property: U,
      operator: K.operator ?? Ms(
        e.find((ye) => ye.property === U)?.type ?? "string"
      ),
      value: K.value ?? ""
    })),
    [Y, e]
  );
  Oe(() => {
    !k || F.current == null || F.current({
      start: (re - 1) * ge,
      count: ge,
      pageNumber: re,
      pageSize: ge,
      sorts: ie,
      filters: _e,
      logicalOperator: l
    });
  }, [
    k,
    re,
    ge,
    ie,
    _e,
    l
  ]);
  const Re = Ne(() => new Set(Le), [Le]), De = Ne(() => Xe || (T ? Ts(pe.items, Le, ar) : /* @__PURE__ */ new Set()), [Xe, T, pe.items, Le]), It = Ne(
    () => Wc(pe.items, Le, e, De, ar),
    [pe.items, Le, e, De]
  ), et = Ne(
    () => Le.length > 0 ? G.filter(
      (U) => U.column.property == null || !Re.has(U.column.property)
    ) : G,
    [G, Le, Re]
  ), mn = (U) => {
    U !== "" && xe(Gc(ie, U, { multi: a }));
  }, Nn = (U, K) => {
    $e((ye) => {
      const be = new Map(ye);
      return be.set(U, K), be;
    }), Ae(1);
  }, Z = (U) => {
    qe(U), Ae(1);
  }, ce = (U) => {
    if (b === "None") return;
    const K = n(U), ye = h ?? [];
    let be;
    b === "Single" ? be = ye.length === 1 && ye[0] === K ? [] : [K] : be = ye.includes(K) ? ye.filter((nt) => nt !== K) : [...ye, K], p?.(be);
  }, he = (U) => {
    X?.(U);
  }, ke = (U, K, ye) => {
    Mt.current = { key: U, startX: K, startWidth: ye };
  }, ve = (U) => {
    const K = Mt.current;
    if (!K) return;
    const ye = U - K.startX, be = Math.max(48, K.startWidth + ye);
    ee((nt) => ({ ...nt, [K.key]: `${be}px` }));
  }, Me = () => {
    Mt.current = null;
  }, Ye = (U) => {
    bt.current = U;
  }, Fe = (U) => {
    const K = bt.current;
    bt.current = null, !(!K || K === U) && Ge((ye) => {
      const be = [...ye], nt = be.indexOf(K), Lt = be.indexOf(U);
      return nt < 0 || Lt < 0 ? ye : (be.splice(nt, 1), be.splice(Lt, 0, K), be);
    });
  }, dt = (U) => {
    He((K) => {
      const ye = new Set(K);
      return ye.has(U) ? ye.delete(U) : ye.add(U), ye;
    });
  }, xt = () => {
    const U = bt.current;
    if (bt.current = null, !U || !$) return;
    const ye = R.get(U)?.property;
    ye && (st(
      (be) => be.includes(ye) ? be : [...be, ye]
    ), Tt(null));
  }, je = (U) => {
    st((K) => K.filter((ye) => ye !== U)), Tt(null);
  }, tt = (U) => {
    Tt((K) => {
      const ye = K ?? (T ? Ts(pe.items, Le, ar) : /* @__PURE__ */ new Set()), be = new Set(ye);
      return be.has(U) ? be.delete(U) : be.add(U), be;
    });
  }, ut = (U) => {
    const K = {};
    e.forEach((ye) => {
      ye.property && (K[ye.property] = ar(U, ye.property));
    }), Ve(K), it(String(n(U)));
  }, Jt = () => {
    const U = {};
    e.forEach((K) => {
      K.property && K.type === "boolean" && (U[K.property] = !1);
    }), Ve(U), it("__new__");
  }, At = () => {
    it(null), Ve({});
  }, dn = (U) => {
    if (yt === "__new__") {
      const K = Object.fromEntries(
        e.filter((ye) => ye.property).map((ye) => [ye.property, ft[ye.property]])
      );
      le?.(K);
    } else if (U != null) {
      const K = { ...U, ...ft };
      se?.(U, K);
    }
    At();
  }, Zn = d && (m === "Top" || m === "TopAndBottom"), Jn = d && (m === "Bottom" || m === "TopAndBottom"), Fn = c && e.some((U) => As(U, c)), Eo = (U, K, ye) => U.render ? U.render(K, { index: 0 }) : xo(ar(K, U.property), U.format), To = (U) => {
    const K = [Se.cell];
    return U.align === "center" && K.push(Se.center), U.align === "right" && K.push(Se.right), U.frozen && K.push(Se.frozen), K.join(" ");
  }, gn = k ? t : pe.filtered, Qr = () => {
    const U = Jc(
      gn,
      et.map((nt) => nt.column)
    ), K = new Blob([`\uFEFF${U}`], {
      type: "text/csv;charset=utf-8"
    }), ye = URL.createObjectURL(K), be = document.createElement("a");
    be.href = ye, be.download = `${M}.csv`, document.body.appendChild(be), be.click(), be.remove(), URL.revokeObjectURL(ye);
  }, yn = It.length, Bt = Ne(() => {
    if (!z || yn === 0)
      return { start: 0, end: yn, top: 0, bottom: 0 };
    const U = 5, K = Math.max(
      0,
      Math.floor(Ct / L) - U
    ), ye = Math.ceil(ze / L) + U * 2, be = Math.min(yn, K + ye), nt = K * L, Lt = Math.max(0, (yn - be) * L);
    return { start: K, end: be, top: nt, bottom: Lt };
  }, [z, yn, Ct, L, ze]), Sr = et.length + (we ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Se.grid, J].filter(Boolean).join(" "), children: [
    Zn && /* @__PURE__ */ o(
      Ko,
      {
        pageNumber: pe.pageNumber,
        pageSize: pe.pageSize,
        count: pe.total,
        pageSizeOptions: f,
        pageNumbersCount: y,
        showSummary: g,
        showPageSizeSelector: _,
        ariaLabel: `${ue}${Jn ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: Z
      }
    ),
    ($ || q || x || A) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
      $ && // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- drop target for drag-to-group (pointer affordance)
      /* @__PURE__ */ o(
        "div",
        {
          className: [
            Se.groupPanel,
            Le.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (U) => U.preventDefault() : void 0,
          onDrop: $ ? xt : void 0,
          children: Le.length > 0 ? Le.map((U) => {
            const K = e.find((ye) => ye.property === U)?.title ?? U;
            return /* @__PURE__ */ D("span", { className: Se.groupChip, children: [
              K,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Se.groupRemove,
                  onClick: () => je(U),
                  "aria-label": `Remove group by ${K}`,
                  children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
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
      x && /* @__PURE__ */ D("div", { className: Se.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Se.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Te,
            onClick: () => lt((U) => !U),
            children: N
          }
        ),
        Te && /* @__PURE__ */ o(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((U, K) => {
              const ye = no(U, K);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Qe.has(ye),
                    onChange: () => dt(ye)
                  }
                ),
                U.title ?? U.property
              ] }, ye);
            })
          }
        )
      ] }),
      A && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Qr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ D(
      "div",
      {
        className: [Se.data, z ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: z ? { maxHeight: P } : void 0,
        onScroll: z ? (U) => {
          oe(U.currentTarget.scrollTop), wt(U.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (z ? yn : pe.total) + 1,
              "aria-label": Q,
              "aria-busy": V || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
                  et.map(({ key: U, column: K }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: gt[U] ?? K.width,
                        minWidth: K.minWidth,
                        maxWidth: K.maxWidth
                      }
                    },
                    U
                  )),
                  we && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    et.map(({ key: U, column: K }) => {
                      const ye = Ud(K, r), be = ie.find(($t) => $t.property === K.property), nt = be ? ie.indexOf(be) + 1 : 0, Lt = K.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": ye && be ? Hd[be.sortOrder] : "none",
                          className: [
                            Se.header,
                            Lt === "center" ? Se.center : "",
                            Lt === "right" ? Se.right : "",
                            K.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: K.frozen ? { left: me[U] } : void 0,
                          scope: "col",
                          draggable: C || $ || void 0,
                          onDragStart: C || $ ? ($t) => {
                            $t.dataTransfer && ($t.dataTransfer.effectAllowed = "move"), Ye(U);
                          } : void 0,
                          onDragOver: C ? ($t) => $t.preventDefault() : void 0,
                          onDrop: C ? () => Fe(U) : void 0,
                          children: [
                            ye ? /* @__PURE__ */ D(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => K.property != null && mn(K.property),
                                "aria-label": be ? be.sortOrder === "Ascending" ? `Sort ${K.title ?? K.property} descending` : `Sort ${K.title ?? K.property} ascending` : `Sort ${K.title ?? K.property} ascending`,
                                children: [
                                  K.title ?? K.property,
                                  be && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: be.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  nt > 1 && i && /* @__PURE__ */ o("span", { className: Se.sortIndex, children: nt })
                                ]
                              }
                            ) : K.title ?? K.property,
                            v && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- pointer-drag column resize; keyboard column resize is not implemented
                            /* @__PURE__ */ o(
                              "span",
                              {
                                className: Se.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${K.title ?? K.property}`,
                                onMouseDown: ($t) => {
                                  $t.preventDefault(), $t.stopPropagation();
                                  const bn = gt[U] ?? K.width, Dt = bn ? parseFloat(bn) : 96;
                                  ke(
                                    U,
                                    $t.clientX,
                                    Number.isFinite(Dt) ? Dt : 96
                                  );
                                },
                                onMouseMove: ($t) => {
                                  Mt.current?.key === U && ve($t.clientX);
                                },
                                onMouseUp: Me,
                                onMouseLeave: () => {
                                  Mt.current?.key === U && Me();
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
                  Fn && /* @__PURE__ */ o("tr", { children: et.map(({ key: U, column: K }) => {
                    if (!As(K, c))
                      return /* @__PURE__ */ o("td", { className: Se.filterCell }, U);
                    const ye = Y.get(K.property ?? "");
                    return /* @__PURE__ */ D("td", { className: Se.filterCell, children: [
                      /* @__PURE__ */ D(
                        "label",
                        {
                          className: Se.visuallyHidden,
                          htmlFor: `df-${K.property}`,
                          children: [
                            "Filter ",
                            K.title ?? K.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${K.property}`,
                          className: Se.filterSelect,
                          value: ye?.operator ?? Ms(K.type ?? "string"),
                          onChange: (be) => Nn(K.property ?? "", {
                            ...ye,
                            operator: be.target.value
                          }),
                          "aria-label": `${K.title ?? K.property} operator`,
                          children: Ea.filter((be) => be !== "Custom").map(
                            (be) => /* @__PURE__ */ o("option", { value: be, children: be }, be)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: Se.filterInput,
                          value: ye?.value ?? "",
                          onChange: (be) => Nn(K.property ?? "", {
                            ...ye,
                            value: be.target.value
                          }),
                          placeholder: `Filter ${K.title ?? K.property}`,
                          "aria-label": `${K.title ?? K.property} value`
                        }
                      )
                    ] }, U);
                  }) })
                ] }),
                /* @__PURE__ */ D("tbody", { children: [
                  yt === "__new__" && /* @__PURE__ */ D("tr", { className: Se.editRow, children: [
                    et.map(({ key: U, column: K }) => /* @__PURE__ */ o("td", { className: Se.editCell, children: K.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Se.editInput,
                        type: K.type === "number" ? "number" : K.type === "boolean" ? "checkbox" : "text",
                        checked: K.type === "boolean" ? !!ft[K.property] : void 0,
                        value: K.type === "boolean" ? void 0 : String(ft[K.property] ?? ""),
                        onChange: (ye) => Ve((be) => ({
                          ...be,
                          [K.property]: K.type === "boolean" ? ye.target.checked : ye.target.value
                        })),
                        "aria-label": `${K.title ?? K.property} (new)`
                      }
                    ) }, U)),
                    we && /* @__PURE__ */ D("td", { className: Se.editCell, children: [
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
                  It.slice(Bt.start, Bt.end).map((U, K) => {
                    const ye = Bt.start + K, be = z ? ye + 2 : void 0;
                    if (U.type === "group" && U.group) {
                      const Dt = De.has(U.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": be,
                          children: /* @__PURE__ */ o("td", { colSpan: Sr, className: Se.groupCell, children: /* @__PURE__ */ D(
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
                    const nt = U.row, Lt = n(nt), $t = (h ?? []).includes(Lt), bn = yt != null && yt === String(Lt);
                    return /* @__PURE__ */ D(
                      "tr",
                      {
                        "aria-rowindex": be,
                        className: [
                          X || b !== "None" ? Se.clickable : "",
                          $t ? Se.selected : "",
                          bn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? $t : void 0,
                        onClick: X || b !== "None" ? (Dt) => {
                          Wd(Dt.target) || (he(nt), ce(nt));
                        } : void 0,
                        children: [
                          et.map(({ key: Dt, column: kt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: To(kt),
                              style: kt.frozen ? { left: me[Dt] } : void 0,
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
                              ) : Eo(kt, nt)
                            },
                            Dt
                          )),
                          we && /* @__PURE__ */ o("td", { className: Se.commandCell, children: bn ? /* @__PURE__ */ D(ot, { children: [
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
                          ] }) : /* @__PURE__ */ D(ot, { children: [
                            j !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => ut(nt),
                                children: "Edit"
                              }
                            ),
                            ne && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => ne(nt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Lt
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
                I && I.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  et.map(({ key: U, column: K }) => {
                    const ye = I.filter(
                      (be) => be.property === K.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Se.footerCell,
                          K.align === "right" ? Se.right : "",
                          K.align === "center" ? Se.center : ""
                        ].filter(Boolean).join(" "),
                        children: ye.map((be, nt) => /* @__PURE__ */ D(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              be.title ? `${be.title}: ` : "",
                              xo(
                                Zc(gn, be, ar),
                                be.format
                              )
                            ]
                          },
                          `${be.property}-${be.type}-${nt}`
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
          pe.items.length === 0 && !V && /* @__PURE__ */ o("div", { className: Se.empty, children: Ee }),
          V && /* @__PURE__ */ o("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Jn && /* @__PURE__ */ o(
      Ko,
      {
        pageNumber: pe.pageNumber,
        pageSize: pe.pageSize,
        count: pe.total,
        pageSizeOptions: f,
        pageNumbersCount: y,
        showSummary: g,
        showPageSizeSelector: _,
        ariaLabel: `${ue}${Zn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: Z
      }
    )
  ] });
}
const qd = "_wrap_avqds_1", Kd = "_grid_avqds_7", Gd = "_stacked_avqds_13", Vd = "_item_avqds_19", Yd = "_empty_avqds_25", Dr = {
  wrap: qd,
  grid: Kd,
  stacked: Gd,
  item: Vd,
  empty: Yd
};
function G$({
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
  const [y, m] = W(1), [g, _] = W(t), b = e.length, h = Math.max(1, Math.ceil(b / g)), p = Math.min(Math.max(1, y), h), x = Ne(() => {
    const v = (p - 1) * g;
    return e.slice(v, v + g);
  }, [e, p, g]), N = r ? Dr.grid : Dr.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Dr.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        l && s != null ? s : b === 0 ? c ?? /* @__PURE__ */ o("div", { className: Dr.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: x.map((v, C) => /* @__PURE__ */ o("div", { className: Dr.item, children: a ? a(v, C) : String(v) }, C)) }),
        /* @__PURE__ */ o(
          Ko,
          {
            ariaLabel: `${f} Pagination`,
            pageNumber: p,
            pageSize: g,
            count: b,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: m,
            onPageSizeChange: (v) => {
              _(v), m(1);
            }
          }
        )
      ]
    }
  );
}
const Xd = "_label_1qfpw_1", Zd = {
  label: Xd
}, V$ = at(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: a,
      className: [Zd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Jd = "_textbox_oly89_1", Qd = "_invalid_oly89_37", eu = "_xs_oly89_44", tu = "_sm_oly89_50", nu = "_md_oly89_56", ru = "_lg_oly89_62", ou = "_xl_oly89_68", Io = {
  textbox: Jd,
  invalid: Qd,
  xs: eu,
  sm: tu,
  md: nu,
  lg: ru,
  xl: ou
}, is = at(
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
          Io.textbox,
          Io[t],
          n ? Io.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c
      }
    );
  }
), ro = is, su = "_checkbox_1bb6c_1", au = {
  checkbox: su
}, lu = at(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = ae(null);
    return Oe(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (c) => {
          i.current = c, typeof a == "function" ? a(c) : a && (a.current = c);
        },
        type: "checkbox",
        className: [au.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), iu = {
  switch: "_switch_19gf1_1"
}, Y$ = at(function({ className: t, ...n }, r) {
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
      className: [iu.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && i(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), cu = "_trigger_1jlxf_1", du = "_tooltip_1jlxf_7", uu = "_top_1jlxf_34", fu = "_right_1jlxf_40", pu = "_bottom_1jlxf_46", _u = "_left_1jlxf_52", hu = "_arrow_1jlxf_58", mu = "_floating_1jlxf_70", Un = {
  trigger: cu,
  tooltip: du,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: uu,
  right: fu,
  bottom: pu,
  left: _u,
  arrow: hu,
  floating: mu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, oo = 8;
function gu(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + oo,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - oo,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + oo,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - oo,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function X$({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = ct(), l = ae(null), d = ae(null), u = ae(() => {
  }), [f, y] = W(!1), [m, g] = W(null), _ = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, b = () => {
    _(), l.current = window.setTimeout(() => {
      l.current = null, y(!0);
    }, r);
  }, h = () => {
    _(), y(!1);
  };
  if (Oe(() => () => _(), []), Oe(() => {
    if (!f || a == null) return;
    const x = window.setTimeout(() => y(!1), a);
    return () => window.clearTimeout(x);
  }, [f, a]), Oe(() => {
    if (i || !f) return;
    const x = (N) => {
      N.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [i, f]), Oe(() => {
    if (!i) return;
    let x = null, N = null;
    const v = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, C = () => {
      v(), N = null, g(null);
    };
    u.current = C;
    const $ = (k) => {
      v(), N = k, x = window.setTimeout(() => {
        x = null, g(k);
      }, r);
    }, E = (k) => k instanceof Element ? k.closest(i) : null, T = (k) => {
      const w = E(k.target);
      !w || w === N || $(w);
    }, I = (k) => {
      const w = E(k.target);
      if (!w || w !== N) return;
      const O = k.relatedTarget;
      O instanceof Element && w.contains(O) || C();
    }, A = (k) => {
      k.key === "Escape" && C();
    }, M = () => C();
    return document.addEventListener("mouseover", T), document.addEventListener("mouseout", I), document.addEventListener("focusin", T), document.addEventListener("focusout", I), document.addEventListener("keydown", A), document.addEventListener("scroll", M, !0), window.addEventListener("resize", M), () => {
      v(), document.removeEventListener("mouseover", T), document.removeEventListener("mouseout", I), document.removeEventListener("focusin", T), document.removeEventListener("focusout", I), document.removeEventListener("keydown", A), document.removeEventListener("scroll", M, !0), window.removeEventListener("resize", M), N = null, g(null);
    };
  }, [i, r]), Oe(() => {
    if (!i || m === null || a == null) return;
    const x = window.setTimeout(() => u.current(), a);
    return () => window.clearTimeout(x);
  }, [i, m, a]), qo(() => {
    const x = m;
    if (!x) return;
    const N = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [N, s].filter(Boolean).join(" ")
    ), () => {
      N == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", N);
    };
  }, [m, s]), qo(() => {
    const x = d.current, N = m;
    !x || !N || Object.assign(
      x.style,
      gu(N.getBoundingClientRect(), n)
    );
  }, [m, n]), i)
    return m ? /* @__PURE__ */ D(
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
  const p = qt(t) ? ss(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      f ? s : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: h,
        onFocus: b,
        onBlur: h,
        children: [
          p,
          f && /* @__PURE__ */ D(
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
const yu = "_dialog_1t7pw_1", bu = "_sm_1t7pw_104", xu = "_resizable_1t7pw_110", vu = "_md_1t7pw_113", wu = "_lg_1t7pw_117", ku = "_header_1t7pw_121", Nu = "_title_1t7pw_132", $u = "_description_1t7pw_139", Su = "_close_1t7pw_146", Ou = "_body_1t7pw_176", Eu = "_footer_1t7pw_188", xn = {
  dialog: yu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: bu,
  resizable: xu,
  md: vu,
  lg: wu,
  header: ku,
  title: Nu,
  description: $u,
  close: Su,
  body: Ou,
  footer: Eu
};
function Aa({
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
  side: y = null,
  showCloseButton: m = !0,
  showMask: g = !0,
  canClose: _,
  className: b
}) {
  const h = ae(null), p = ct(), x = ct(), N = ae(t);
  Oe(() => {
    N.current = t;
  });
  const v = ae(_);
  Oe(() => {
    v.current = _;
  });
  const C = ae(u);
  Oe(() => {
    C.current = u;
  });
  const $ = ae(!1), E = ae(!1), T = H(() => {
    if ($.current) return;
    const M = v.current?.();
    if (M instanceof Promise) {
      M.then((k) => {
        k && !$.current && ($.current = !0, N.current());
      });
      return;
    }
    M !== !1 && ($.current = !0, N.current());
  }, []), I = H(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    N.current();
  }, []), A = H(
    (M) => {
      if (M.key !== "Tab" || !h.current) return;
      const k = Array.from(
        h.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (O) => O.offsetWidth > 0 || O.offsetHeight > 0 || O === document.activeElement
      );
      if (k.length === 0) {
        M.preventDefault();
        return;
      }
      const w = k.indexOf(document.activeElement);
      if (M.shiftKey) {
        if (w <= 0) {
          M.preventDefault();
          const O = k[k.length - 1];
          O && O.focus();
        }
      } else if (w === -1 || w === k.length - 1) {
        M.preventDefault();
        const O = k[0];
        O && O.focus();
      }
    },
    []
  );
  return Oe(() => {
    const M = h.current;
    if (M)
      if (e && !M.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        M.showModal(), (M.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? M.querySelector("button"))?.focus();
        const O = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const z = (L) => {
          L.preventDefault(), C.current && T();
        };
        return M.addEventListener("cancel", z), () => {
          M.removeEventListener("cancel", z), document.body.style.overflow = O, k?.focus({ preventScroll: !0 });
        };
      } else !e && M.open && (E.current = $.current, $.current = !1, M.close());
  }, [e, T]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button. The dialog's own
  // onKeyDown={keepFocusInside} satisfies the keyboard-listener rules.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click closes the dialog; ESC and the close button are the keyboard paths
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: h,
      className: [
        xn.dialog,
        xn[c],
        f ? xn.resizable : null,
        y ? xn[`side-${y}`] : null,
        g === !1 ? xn["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: I,
      onClick: (M) => {
        M.target === h.current && d && T();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: A,
      children: [
        n && /* @__PURE__ */ D("header", { className: xn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ o("h2", { id: p, className: xn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: x, className: xn.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: xn.close,
              onClick: () => {
                T();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: xn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: xn.footer, children: i })
      ]
    }
  );
}
const Tu = "_typography_1jy8x_1", Cu = "_h1_1jy8x_39", Mu = "_h2_1jy8x_45", Au = "_h3_1jy8x_51", Du = "_h4_1jy8x_57", Iu = "_h5_1jy8x_63", Lu = "_h6_1jy8x_69", zu = "_button_1jy8x_99", Pu = "_caption_1jy8x_106", Ru = "_overline_1jy8x_112", Lo = {
  typography: Tu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Cu,
  h2: Mu,
  h3: Au,
  h4: Du,
  h5: Iu,
  h6: Lu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: zu,
  caption: Pu,
  overline: Ru,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, ju = {
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
}, Bu = {
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
}, Fu = {
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
}, Hu = {
  left: "align-left",
  right: "align-right",
  center: "align-center",
  justify: "align-justify",
  start: "align-left",
  end: "align-right",
  justifyAll: "align-justify"
}, Da = at(function({
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
  const u = n === "auto" ? ju[t] : Fu[n];
  return /* @__PURE__ */ o(
    u,
    {
      ref: d,
      className: [
        Lo.typography,
        Lo[Bu[t]],
        r ? Lo[Hu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Ia = cr(null);
function Z$() {
  const e = Bn(Ia);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function J$({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = ae(0), i = () => (a.current += 1, a.current), c = ae([]);
  Oe(() => {
    c.current = t;
  });
  const s = (y) => {
    const m = c.current[0];
    m && (m.kind === "confirm" ? m.resolve(!!y) : m.kind === "alert" ? m.resolve() : m.resolve(y), n((g) => g.slice(1)));
  }, l = Ne(
    () => ({
      confirm: (y = {}) => new Promise((m) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "confirm", options: y, resolve: m }
        ]);
      }),
      alert: (y = {}) => new Promise((m) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "alert", options: y, resolve: m }
        ]);
      }),
      open: (y = {}) => new Promise((m) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "custom", options: y, resolve: m }
        ]);
      }),
      openSide: ({ position: y, showMask: m = !0, ...g }) => new Promise((_) => {
        n((b) => [
          ...b,
          {
            seq: i(),
            kind: "custom",
            options: { ...g, side: y, showMask: m },
            resolve: _
          }
        ]);
      }),
      close: (y) => s(y),
      closeAll: () => {
        n((y) => (y.forEach((m) => {
          m.kind === "confirm" ? m.resolve(!1) : m.kind === "alert" ? m.resolve() : m.resolve(void 0);
        }), []));
      },
      refresh: () => r((y) => y + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    []
  ), d = t[0];
  function u(y) {
    d && (d.kind === "confirm" ? d.resolve(!!y) : d.kind === "alert" ? d.resolve() : d.resolve(y), n((m) => m.slice(1)));
  }
  const f = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ D(Ia.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Aa,
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
        footer: d?.kind === "confirm" ? /* @__PURE__ */ D(ot, { children: [
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
        children: d?.kind === "custom" ? f?.content : d?.options.message != null && /* @__PURE__ */ o(Da, { textStyle: "body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Uu = "_viewport_11t1p_1", Wu = "_topLeft_11t1p_13", qu = "_topRight_11t1p_20", Ku = "_bottomLeft_11t1p_25", Gu = "_toast_11t1p_30", Vu = "_leaving_11t1p_61", Yu = "_info_11t1p_77", Xu = "_success_11t1p_86", Zu = "_warning_11t1p_95", Ju = "_danger_11t1p_104", Qu = "_content_11t1p_113", ef = "_title_11t1p_118", tf = "_description_11t1p_141", nf = "_dismiss_11t1p_148", rf = "_actions_11t1p_169", of = "_action_11t1p_169", sf = "_cancel_11t1p_177", af = "_progress_11t1p_215", tn = {
  viewport: Uu,
  topLeft: Wu,
  topRight: qu,
  bottomLeft: Ku,
  toast: Gu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Vu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Yu,
  success: Xu,
  warning: Zu,
  danger: Ju,
  content: Qu,
  title: ef,
  description: tf,
  dismiss: nf,
  actions: rf,
  action: of,
  cancel: sf,
  progress: af,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, La = cr(null);
function Q$() {
  const e = Bn(La);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const lf = 200, cf = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function eS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = W([]), [s, l] = W(!1), d = ae([]), u = ae(/* @__PURE__ */ new Map()), f = ae(!1), y = ae(0), m = (w) => {
    f.current = w, l(w);
  }, g = H((w) => {
    const O = u.current.get(w);
    O && (window.clearTimeout(O.timeoutId), O.remaining = Math.max(
      0,
      O.remaining - (Date.now() - O.startedAt)
    ));
  }, []), _ = H((w) => {
    const O = u.current.get(w);
    O && (window.clearTimeout(O.timeoutId), u.current.delete(w));
  }, []), b = H(
    (w) => {
      _(w), c((O) => {
        const z = O.filter((L) => L.id !== w);
        return d.current = z, z;
      });
    },
    [_]
  ), h = H(
    (w) => {
      const O = d.current.find((z) => z.id === w);
      !O || O.leaving || (O.onAutoClose?.(), b(w));
    },
    [b]
  ), p = H(
    (w) => {
      const O = u.current.get(w);
      !O || O.remaining <= 0 || (O.startedAt = Date.now(), O.timeoutId = window.setTimeout(() => h(w), O.remaining));
    },
    [h]
  ), x = H(() => {
    f.current || u.current.forEach((w, O) => g(O)), m(!0);
  }, [g]), N = H(() => {
    u.current.forEach((w, O) => p(O)), m(!1);
  }, [p]);
  Oe(() => {
    if (!r) return;
    const w = () => {
      document.hidden ? x() : N();
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, [r, x, N]);
  const v = H(
    (w) => {
      const O = d.current.find((z) => z.id === w);
      !O || O.leaving || (O.onDismiss?.(), c((z) => {
        const L = z.map(
          (P) => P.id === w ? { ...P, leaving: !0 } : P
        );
        return d.current = L, L;
      }), window.setTimeout(() => b(w), lf));
    },
    [b]
  ), C = H(
    (w) => {
      if (w.durationMs <= 0) return;
      const O = {
        remaining: w.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(w.id, O), f.current || p(w.id);
    },
    [p]
  ), $ = H(
    (w) => {
      const O = d.current.find((L) => L.id === w.id), z = {
        id: w.id ?? ++y.current,
        title: w.title,
        description: w.description,
        severity: w.severity ?? "info",
        durationMs: w.durationMs ?? t,
        action: w.action,
        cancel: w.cancel,
        dismissible: w.dismissible ?? !0,
        closeOnClick: w.closeOnClick ?? !1,
        payload: w.payload,
        click: w.click,
        showProgress: w.showProgress ?? !1,
        position: w.position ?? n,
        onDismiss: w.onDismiss,
        onAutoClose: w.onAutoClose
      };
      c((L) => {
        const P = O ? L.map(
          (j) => j.id === z.id ? { ...z, leaving: !1 } : j
        ) : [...L, z];
        return d.current = P, P;
      }), O && _(z.id), C(z);
    },
    [t, n, C, _]
  ), E = H(
    (w) => {
      $({
        severity: w.severity ?? "info",
        title: w.summary ?? w.summaryContent,
        description: w.detail ?? w.detailContent,
        durationMs: w.duration,
        click: w.click,
        closeOnClick: w.closeOnClick,
        payload: w.payload
      });
    },
    [$]
  ), T = H(
    (w) => (O, z) => E({ severity: w, summary: O, detail: z }),
    [E]
  ), I = Ne(
    () => ({
      toast: $,
      notify: E,
      notifyInfo: T("info"),
      notifySuccess: T("success"),
      notifyWarning: T("warning"),
      notifyError: T("danger")
    }),
    [$, E, T]
  ), A = Ne(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((w) => w.position)])),
    [n, i]
  ), M = r ? x : void 0, k = r ? N : void 0;
  return /* @__PURE__ */ D(La.Provider, { value: I, children: [
    e,
    A.map((w) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- hover listeners pause auto-dismiss; the live region itself is not interactive
      /* @__PURE__ */ o(
        "div",
        {
          className: [tn.viewport, tn[cf[w]], a].filter(Boolean).join(" "),
          "aria-live": "polite",
          "aria-atomic": "false",
          onMouseEnter: M,
          onMouseLeave: k,
          children: i.filter((O) => O.position === w).map((O) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click-to-close is a pointer affordance; the dismiss button provides the keyboard path
            /* @__PURE__ */ D(
              "div",
              {
                role: O.severity === "danger" ? "alert" : "status",
                "data-paused": s ? "true" : "false",
                "data-clickable": O.closeOnClick ? "true" : "false",
                className: [
                  tn.toast,
                  tn[O.severity],
                  O.leaving ? tn.leaving : ""
                ].filter(Boolean).join(" "),
                onClick: O.click || O.closeOnClick ? () => {
                  O.click?.(O.payload), O.closeOnClick && v(O.id);
                } : void 0,
                children: [
                  /* @__PURE__ */ D("div", { className: tn.content, children: [
                    /* @__PURE__ */ o("div", { className: tn.title, children: O.title }),
                    O.description && /* @__PURE__ */ o("div", { className: tn.description, children: O.description }),
                    (O.action || O.cancel) && /* @__PURE__ */ D("div", { className: tn.actions, children: [
                      O.action && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.action,
                          onClick: () => {
                            O.action?.onClick?.(), v(O.id);
                          },
                          children: O.action.label
                        }
                      ),
                      O.cancel && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.cancel,
                          onClick: () => {
                            O.cancel?.onClick?.(), v(O.id);
                          },
                          children: O.cancel.label
                        }
                      )
                    ] })
                  ] }),
                  O.dismissible && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: tn.dismiss,
                      onClick: () => v(O.id),
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
                    }
                  ),
                  O.showProgress && O.durationMs > 0 && /* @__PURE__ */ o(
                    "div",
                    {
                      className: tn.progress,
                      style: { animationDuration: `${O.durationMs}ms` }
                    }
                  )
                ]
              },
              O.id
            )
          ))
        },
        w
      )
    ))
  ] });
}
const df = "_navigator_848v2_3", uf = "_track_848v2_9", ff = "_spark_848v2_19", pf = "_window_848v2_28", _f = "_handle_848v2_37", Wn = {
  navigator: df,
  track: uf,
  spark: ff,
  window: pf,
  handle: _f
};
function Ds(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), c = Math.max(n, Math.min(r, t));
  if (c - i < a) {
    const s = (i + c) / 2;
    i = Math.max(n, s - a / 2), c = Math.min(r, i + a), i = Math.max(n, c - a);
  }
  return i > c && ([i, c] = [c, i]), { start: i, end: c };
}
function tS({
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
  ), y = d && n ? n : u, m = ae(null), g = ae(null), _ = H(
    (E) => {
      const T = Ds(E.start, E.end, e, t, c);
      d || f(T), a?.(T);
    },
    [d, e, t, c, a]
  ), b = H(
    (E) => {
      const T = g.current;
      if (!T) return e;
      const I = T.getBoundingClientRect(), A = I.width > 0 ? (E - I.left) / I.width : 0;
      return e + Math.max(0, Math.min(1, A)) * (t - e || 1);
    },
    [e, t]
  ), h = H(
    (E) => (Math.max(e, Math.min(t, E)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  Oe(() => {
    const E = (I) => {
      const A = m.current;
      if (!A) return;
      const M = b(I.clientX);
      if (A.mode === "start") _({ start: M, end: y.end });
      else if (A.mode === "end") _({ start: y.start, end: M });
      else {
        const k = y.end - y.start, w = M - A.grabOffset;
        _({ start: w, end: w + k });
      }
    }, T = () => {
      m.current = null;
    };
    return document.addEventListener("pointermove", E), document.addEventListener("pointerup", T), () => {
      document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", T);
    };
  }, [_, b, y]);
  const p = (E, T) => {
    T.preventDefault(), T.target.focus?.(), m.current = { mode: E, grabOffset: 0 };
  }, x = (E) => {
    const T = b(E.clientX);
    if (T >= y.start && T <= y.end)
      m.current = { mode: "pan", grabOffset: T - y.start };
    else {
      const I = Math.abs(T - y.start), A = Math.abs(T - y.end);
      I <= A ? _({ start: T, end: y.end }) : _({ start: y.start, end: T });
    }
  }, N = (t - e || 1) / 100, v = (E) => (T) => {
    const I = T.shiftKey ? N * 10 : N;
    T.key === "ArrowLeft" || T.key === "ArrowDown" ? (T.preventDefault(), _(
      E === "start" ? { start: y.start - I, end: y.end } : { start: y.start, end: y.end - I }
    )) : T.key === "ArrowRight" || T.key === "ArrowUp" ? (T.preventDefault(), _(
      E === "start" ? { start: y.start + I, end: y.end } : { start: y.start, end: y.end + I }
    )) : T.key === "Home" ? (T.preventDefault(), _(
      E === "start" ? { start: e, end: y.end } : { start: y.start, end: t }
    )) : T.key === "End" && (T.preventDefault(), _(
      E === "start" ? { start: y.end - c, end: y.end } : { start: y.start, end: t }
    ));
  }, C = h(y.start), $ = Math.max(0, h(y.end) - C);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ D("div", { ref: g, className: Wn.track, onPointerDown: x, children: [
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
                  const I = T / (i.length - 1) * 100, A = Math.max(...i), M = Math.min(...i), k = A === M ? 12 : 22 - (E - M) / (A - M) * 20;
                  return `${I},${k}`;
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
            style: { left: `${C}%`, width: `${$}%` }
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
            "aria-valuenow": Math.round(y.start * 100) / 100,
            className: [Wn.handle, Wn.handleStart].filter(Boolean).join(" "),
            style: { left: `${C}%` },
            onPointerDown: (E) => p("start", E),
            onKeyDown: v("start")
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
            "aria-valuenow": Math.round(y.end * 100) / 100,
            className: [Wn.handle, Wn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${C + $}%` },
            onPointerDown: (E) => p("end", E),
            onKeyDown: v("end")
          }
        )
      ] })
    }
  );
}
const hf = "_gauge_pyq6q_3", mf = "_value_pyq6q_11", gf = "_tick_pyq6q_16", Pn = {
  gauge: hf,
  value: mf,
  tick: gf
}, so = 150, Is = 240;
function Ls(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function zs(e, t, n, r, a) {
  const [i, c] = Ls(e, t, n, r), [s, l] = Ls(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function yf(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const a of t)
    e >= a.offset && (r = a.color);
  return r;
}
function nS({
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
  const f = n - t || 1, y = Math.max(0, Math.min(1, (e - t) / f)), m = "var(--dx-border-color)", g = a ?? "var(--dx-primary-color)", _ = 100, b = 96, h = 80, p = so + Is * y;
  return /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: zs(_, b, h, so, so + Is),
              fill: "none",
              stroke: m,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          y > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: zs(_, b, h, so, p),
              fill: "none",
              stroke: yf(y, i, g),
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
function kr(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Ps(e, t, n, r, a) {
  const [i, c] = kr(e, t, n, r), [s, l] = kr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function bf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function rS({
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
  formatValue: f = (g) => String(Math.round(g * 100) / 100),
  ariaLabel: y = "Gauge",
  className: m
}) {
  const g = n - t || 1, _ = (A) => Math.max(0, Math.min(1, (A - t) / g)), h = a - r >= 360 ? r + 359.999 : a, p = (A) => r + (h - r) * _(A), x = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: v = 8, showLabels: C = !0 } = i, $ = 100, E = 100, T = 78, I = (A, M, k) => {
    const [w, O] = kr($, E, T - 14, p(A));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: $,
        y1: E,
        x2: w,
        y2: O,
        stroke: M,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, k);
  };
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": y,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, m].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ps($, E, T, r, h),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((A, M) => /* @__PURE__ */ o(
            "path",
            {
              d: Ps(
                $,
                E,
                T,
                p(Math.max(t, A.from)),
                p(Math.min(n, A.to))
              ),
              fill: "none",
              stroke: A.color,
              strokeWidth: 12
            },
            `range-${M}`
          )),
          v > 0 && bf(t, n, v).map((A, M) => {
            const [k, w] = kr($, E, T - 10, p(A)), [O, z] = kr($, E, T - 16, p(A)), [L, P] = kr($, E, T - 26, p(A));
            return /* @__PURE__ */ D("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: k,
                  y1: w,
                  x2: O,
                  y2: z,
                  stroke: N,
                  strokeWidth: 1.5
                }
              ),
              C && /* @__PURE__ */ o(
                "text",
                {
                  x: L,
                  y: P + 4,
                  textAnchor: "middle",
                  className: Pn.tick,
                  children: A
                }
              )
            ] }, M);
          }),
          I(e, x, "value"),
          s.map(
            (A, M) => I(A.value, A.color ?? x, `extra-${M}`)
          ),
          /* @__PURE__ */ o("circle", { cx: $, cy: E, r: 7, fill: x })
        ] }),
        u && /* @__PURE__ */ o("div", { className: Pn.value, children: f(e) })
      ]
    }
  );
}
function xf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function oS({
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
  formatValue: u = (m) => String(Math.round(m * 100) / 100),
  ariaLabel: f = "Gauge",
  className: y
}) {
  const m = n - t || 1, g = r === "vertical", _ = s ?? (g ? 220 : 280), { count: b = 5, showLabels: h = !0 } = a, p = c ?? "var(--dx-primary-color)", x = "var(--dx-border-color)", N = 8, v = (I) => {
    const M = (Math.max(t, Math.min(n, I)) - t) / m;
    return g ? _ - N - M * (_ - N * 2) : N + M * (_ - N * 2);
  }, C = () => b <= 0 ? null : xf(t, n, b).map((I, A) => {
    const M = v(I);
    return /* @__PURE__ */ D("g", { children: [
      g ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: M,
          x2: 0,
          y2: M,
          stroke: x,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: M,
          y1: -6,
          x2: M,
          y2: 0,
          stroke: x,
          strokeWidth: 1.5
        }
      ),
      h && (g ? /* @__PURE__ */ o("text", { x: -10, y: M + 4, textAnchor: "end", className: Pn.tick, children: I }) : /* @__PURE__ */ o("text", { x: M, y: -10, textAnchor: "middle", className: Pn.tick, children: I }))
    ] }, A);
  }), $ = () => i.map((I, A) => {
    const M = v(I.from), k = v(I.to), w = Math.min(M, k), O = Math.abs(k - M);
    return g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: w,
        width: l,
        height: O,
        fill: I.color,
        opacity: 0.35
      },
      A
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: w,
        y: -l / 2,
        width: O,
        height: l,
        fill: I.color,
        opacity: 0.35
      },
      A
    );
  }), E = v(e), T = /* @__PURE__ */ D("g", { children: [
    $(),
    g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: N,
        width: l,
        height: _ - N * 2,
        rx: l / 2,
        fill: "none",
        stroke: x,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: _ - N * 2,
        height: l,
        rx: l / 2,
        fill: "none",
        stroke: x,
        strokeWidth: 2
      }
    ),
    g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: E,
        width: l,
        height: _ - N - E,
        rx: l / 2,
        fill: p
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: Math.max(0, E - N),
        height: l,
        rx: l / 2,
        fill: p
      }
    ),
    g ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${E} L ${-l / 2 - 2} ${E - 5} L ${-l / 2 - 2} ${E + 5} Z`,
        fill: p
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${E} ${-l / 2 - 10} L ${E - 5} ${-l / 2 - 2} L ${E + 5} ${-l / 2 - 2} Z`,
        fill: p
      }
    ),
    C()
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": f,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, y].filter(Boolean).join(" "),
      children: [
        g ? /* @__PURE__ */ o(
          "svg",
          {
            width: l + 64,
            height: _ + 8,
            viewBox: `${-l / 2 - 56} -16 ${l + 64} ${_ + 24}`,
            "aria-hidden": "true",
            children: T
          }
        ) : /* @__PURE__ */ o(
          "svg",
          {
            width: _,
            height: l + 48,
            viewBox: `0 -24 ${_} ${l + 56}`,
            "aria-hidden": "true",
            children: T
          }
        ),
        d && /* @__PURE__ */ o("div", { className: Pn.value, children: u(e) })
      ]
    }
  );
}
const vf = "_chat_1apnf_3", wf = "_messages_1apnf_9", kf = "_message_1apnf_9", Nf = "_user_1apnf_29", $f = "_assistant_1apnf_35", Sf = "_system_1apnf_40", Of = "_typing_1apnf_46", Ef = "_inputRow_1apnf_51", pr = {
  chat: vf,
  messages: wf,
  message: kf,
  user: Nf,
  assistant: $f,
  system: Sf,
  typing: Of,
  inputRow: Ef
};
function sS({
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
  const [f, y] = W(""), m = l || d, g = f.trim().length > 0 && !m, _ = (h) => {
    h.preventDefault();
    const p = f.trim();
    !p || m || (y(""), t?.(p));
  }, b = /* @__PURE__ */ D("form", { className: pr.inputRow, onSubmit: (h) => {
    _(h);
  }, children: [
    /* @__PURE__ */ o(
      is,
      {
        value: f,
        placeholder: n,
        "aria-label": a,
        disabled: m,
        onChange: (h) => y(h.target.value)
      }
    ),
    /* @__PURE__ */ o(cn, { type: "submit", disabled: !g, loading: l, children: r })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      className: [pr.chat, u].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: pr.messages, children: [
          e.map(
            (h, p) => c ? /* @__PURE__ */ o("div", { children: c(h, p) }, p) : /* @__PURE__ */ o(
              "div",
              {
                className: [pr.message, pr[h.role]].filter(Boolean).join(" "),
                children: h.content
              },
              p
            )
          ),
          l && /* @__PURE__ */ o("div", { className: pr.typing, children: "…" })
        ] }),
        s ? s(b) : b
      ]
    }
  );
}
const Tf = "_wrapper_1ulz6_1", Cf = "_input_1ulz6_8", Mf = "_invalid_1ulz6_38", Af = "_toggle_1ulz6_45", Df = "_xs_1ulz6_80", If = "_sm_1ulz6_86", Lf = "_md_1ulz6_92", zf = "_lg_1ulz6_98", Pf = "_xl_1ulz6_104", Ir = {
  wrapper: Tf,
  input: Cf,
  invalid: Mf,
  toggle: Af,
  xs: Df,
  sm: If,
  md: Lf,
  lg: zf,
  xl: Pf
}, Rf = at(
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
      /* @__PURE__ */ D("div", { className: Ir.wrapper, "data-size": t, children: [
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
            children: /* @__PURE__ */ o(Ie, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), jf = "_login_30qie_3", Bf = "_title_30qie_9", Ff = "_remember_30qie_14", Hf = "_link_30qie_21", Lr = {
  login: jf,
  title: Bf,
  remember: Ff,
  link: Hf
}, cs = "dx-login-username";
function Uf(e) {
  const t = e === void 0 ? cs : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Wf(e, t) {
  const n = e === void 0 ? cs : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function qf(e) {
  const t = e === void 0 ? cs : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function aS({
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
  submitText: y = "Sign in",
  storageKey: m,
  className: g
}) {
  const [_, b] = W(() => Uf(m) ?? ""), [h, p] = W(""), [x, N] = W(!1), [v, C] = W(!1), [$, E] = W({}), T = l || v, I = e != null && n == null, A = async (M) => {
    I || M.preventDefault();
    const k = {};
    if (_.trim() || (k.username = "Username is required."), h || (k.password = "Password is required."), E(k), !(k.username || k.password || !n)) {
      C(!0);
      try {
        await n({
          username: _.trim(),
          password: h,
          rememberMe: x
        }), x ? Wf(m, _.trim()) : qf(m);
      } finally {
        C(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [Lr.login, g].filter(Boolean).join(" "),
      action: I ? e : void 0,
      method: I ? t : void 0,
      noValidate: !0,
      onSubmit: (M) => {
        A(M);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Lr.title, children: d }),
        /* @__PURE__ */ o(ir, { label: u, required: !0, error: $.username, children: ({ inputId: M }) => /* @__PURE__ */ o(
          is,
          {
            id: M,
            value: _,
            autoComplete: "username",
            disabled: T,
            "aria-invalid": $.username ? !0 : void 0,
            onChange: (k) => {
              b(k.target.value), E((w) => ({ ...w, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ir, { label: f, required: !0, error: $.password, children: ({ inputId: M }) => /* @__PURE__ */ o(
          Rf,
          {
            id: M,
            value: h,
            autoComplete: "current-password",
            disabled: T,
            "aria-invalid": $.password ? !0 : void 0,
            onChange: (k) => {
              p(k.target.value), E((w) => ({ ...w, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ D("label", { className: Lr.remember, children: [
          /* @__PURE__ */ o(
            lu,
            {
              checked: x,
              disabled: T,
              onChange: (M) => N(M.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(cn, { type: "submit", loading: T, disabled: T, children: y }),
        (c ?? a) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Lr.link,
            onClick: () => a?.(),
            children: c ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Lr.link,
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
function Kf(e) {
  if (Array.isArray(e)) return e;
}
function Gf(e, t) {
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
function Vf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yf(e, t) {
  return Kf(e) || Gf(e, t) || Xf(e, t) || Vf();
}
function Xf(e, t) {
  if (e) {
    if (typeof e == "string") return Rs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rs(e, t) : void 0;
  }
}
const za = Object.entries, js = Object.setPrototypeOf, Zf = Object.isFrozen, Jf = Object.getPrototypeOf, Qf = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Et = Object.seal, vr = Object.create, Pa = typeof Reflect < "u" && Reflect, Go = Pa.apply, Vo = Pa.construct;
St || (St = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
Go || (Go = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return t.apply(n, a);
});
Vo || (Vo = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
  return new t(...r);
});
const lr = Nt(Array.prototype.forEach), ep = Nt(Array.prototype.lastIndexOf), Bs = Nt(Array.prototype.pop), zr = Nt(Array.prototype.push), tp = Nt(Array.prototype.splice), Nr = Array.isArray, Gr = Nt(String.prototype.toLowerCase), zo = Nt(String.prototype.toString), Fs = Nt(String.prototype.match), Pr = Nt(String.prototype.replace), Hs = Nt(String.prototype.indexOf), np = Nt(String.prototype.trim), rp = Nt(Number.prototype.toString), op = Nt(Boolean.prototype.toString), Us = typeof BigInt > "u" ? null : Nt(BigInt.prototype.toString), Ws = typeof Symbol > "u" ? null : Nt(Symbol.prototype.toString), Yt = Nt(Object.prototype.hasOwnProperty), Rr = Nt(Object.prototype.toString), Rt = Nt(RegExp.prototype.test), qn = sp(TypeError);
function Nt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return Go(e, t, r);
  };
}
function sp(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Vo(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr;
  if (js && js(e, null), !Nr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const i = n(a);
      i !== a && (Zf(t) || (t[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function ap(e) {
  for (let t = 0; t < e.length; t++) Yt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = vr(null);
  for (const r of za(e)) {
    var n = Yf(r, 2);
    const a = n[0], i = n[1];
    Yt(e, a) && (Nr(i) ? t[a] = ap(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = sn(i) : t[a] = i);
  }
  return t;
}
function lp(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return rp(e);
    case "boolean":
      return op(e);
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
    const r = Qf(e, t);
    if (r) {
      if (r.get) return Nt(r.get);
      if (typeof r.value == "function") return Nt(r.value);
    }
    e = Jf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function ip(e) {
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
]), Po = St([
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
]), Ro = St([
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
]), cp = St([
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
]), jo = St([
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
]), dp = St([
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
]), Bo = St([
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
]), ao = St([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), up = Et(/{{[\w\W]*|^[\w\W]*}}/g), fp = Et(/<%[\w\W]*|^[\w\W]*%>/g), pp = Et(/\${[\w\W]*/g), _p = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), hp = Et(/^aria-[\-\w]+$/), Ys = Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), mp = Et(/^(?:\w+script|data):/i), gp = Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), yp = Et(/^html$/i), bp = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Xs = Et(/<[/\w!]/g), Zs = Et(/<[/\w]/g), xp = Et(/<\/no(script|embed|frames)/i), vp = Et(/\/>/i), nn = {
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
], wp = St(Ke({}, Ra)), kp = (function() {
  const e = {};
  return lr(Ra, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), Np = function() {
  return typeof window > "u" ? null : window;
}, $p = function(t, n) {
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
}, Fo = function(t, n, r) {
  const a = Yt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? sn(a) : r();
};
function ja() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Np();
  const t = (de) => ja(de);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = s.prototype, y = hn(f, "cloneNode"), m = hn(f, "remove"), g = hn(f, "removeAttributeNode"), _ = hn(f, "nextSibling"), b = hn(f, "childNodes"), h = hn(f, "parentNode"), p = hn(f, "shadowRoot"), x = hn(f, "attributes"), N = c && c.prototype ? hn(c.prototype, "nodeType") : null, v = c && c.prototype ? hn(c.prototype, "nodeName") : null, C = c && c.prototype ? hn(c.prototype, "ownerDocument") : null, $ = function(S) {
    return N ? N(S) : S.nodeType;
  }, E = function(S) {
    return v ? v(S) : S.nodeName;
  };
  if (typeof i == "function") {
    const de = n.createElement("template");
    de.content && de.content.ownerDocument && (n = de.content.ownerDocument);
  }
  let T, I = "", A, M = !1, k = 0;
  const w = function() {
    if (k > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, O = function(S) {
    w(), k++;
    try {
      return T.createHTML(S);
    } finally {
      k--;
    }
  }, z = function(S) {
    w(), k++;
    try {
      return T.createScriptURL(S);
    } finally {
      k--;
    }
  }, L = function() {
    return M || (A = $p(u, a), M = !0), A;
  }, P = n, j = P.implementation, q = P.createNodeIterator, se = P.createDocumentFragment, le = P.getElementsByTagName, ne = r.importNode;
  let V = Js();
  t.isSupported = typeof za == "function" && typeof h == "function" && j && j.createHTMLDocument !== void 0;
  const Ee = up, Q = fp, J = pp, X = _p, ue = hp, ie = mp, xe = gp, Y = bp;
  let $e = Ys, re = null;
  const Ae = Ke({}, [
    ...qs,
    ...Po,
    ...Ro,
    ...jo,
    ...Ks
  ]);
  let ge = null;
  const qe = Ke({}, [
    ...Gs,
    ...Bo,
    ...Vs,
    ...ao
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
  let gt = !0, ee = !0, Te = !1, lt = !0, Le = !1, st = !0, Xe = !1, Tt = !1, yt = null, it = null, ft = !1, Ve = !1, Ct = !1, oe = !1, ze = !0, wt = !1;
  const Mt = "user-content-";
  let bt = !0, R = !1, G = {}, me = null;
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
  let pe = null;
  const F = Ke({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let _e = null;
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
  ]), De = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let mn = et, Nn = !1, Z = null;
  const ce = Ke({}, [
    De,
    It,
    et
  ], zo), he = St([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ke = Ke({}, he);
  const ve = St(["annotation-xml"]);
  let Me = Ke({}, ve);
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
  const ut = n.createElement("form"), Jt = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, At = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (tt && tt === S) return;
    (!S || typeof S != "object") && (S = {}), S = sn(S), Fe = dt.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? xt : S.PARSER_MEDIA_TYPE, je = Fe === "application/xhtml+xml" ? zo : Gr, re = Kn(S, "ALLOWED_TAGS", Ae, { transform: je }), ge = Kn(S, "ALLOWED_ATTR", qe, { transform: je }), Z = Kn(S, "ALLOWED_NAMESPACES", ce, { transform: zo }), _e = Kn(S, "ADD_URI_SAFE_ATTR", Re, {
      transform: je,
      base: Re
    }), pe = Kn(S, "ADD_DATA_URI_TAGS", F, {
      transform: je,
      base: F
    }), me = Kn(S, "FORBID_CONTENTS", we, { transform: je }), Ge = Kn(S, "FORBID_TAGS", sn({}), { transform: je }), Qe = Kn(S, "FORBID_ATTR", sn({}), { transform: je }), G = Yt(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? sn(S.USE_PROFILES) : S.USE_PROFILES : !1, gt = S.ALLOW_ARIA_ATTR !== !1, ee = S.ALLOW_DATA_ATTR !== !1, Te = S.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Le = S.SAFE_FOR_TEMPLATES || !1, st = S.SAFE_FOR_XML !== !1, Xe = S.WHOLE_DOCUMENT || !1, Ve = S.RETURN_DOM || !1, Ct = S.RETURN_DOM_FRAGMENT || !1, oe = S.RETURN_TRUSTED_TYPE || !1, ft = S.FORCE_BODY || !1, ze = S.SANITIZE_DOM !== !1, wt = S.SANITIZE_NAMED_PROPS || !1, bt = S.KEEP_CONTENT !== !1, R = S.IN_PLACE || !1, $e = ip(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Ys, mn = typeof S.NAMESPACE == "string" ? S.NAMESPACE : et, ke = Fo(S, "MATHML_TEXT_INTEGRATION_POINTS", () => Ke({}, he)), Me = Fo(S, "HTML_INTEGRATION_POINTS", () => Ke({}, ve));
    const B = Fo(S, "CUSTOM_ELEMENT_HANDLING", () => vr(null));
    if (Je = vr(null), Yt(B, "tagNameCheck") && Jt(B.tagNameCheck) && (Je.tagNameCheck = B.tagNameCheck), Yt(B, "attributeNameCheck") && Jt(B.attributeNameCheck) && (Je.attributeNameCheck = B.attributeNameCheck), Yt(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (Je.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), Et(Je), Le && (ee = !1), Ct && (Ve = !0), G && (re = Ke({}, Ks), ge = vr(null), G.html === !0 && (Ke(re, qs), Ke(ge, Gs)), G.svg === !0 && (Ke(re, Po), Ke(ge, Bo), Ke(ge, ao)), G.svgFilters === !0 && (Ke(re, Ro), Ke(ge, Bo), Ke(ge, ao)), G.mathMl === !0 && (Ke(re, jo), Ke(ge, Vs), Ke(ge, ao))), He.tagCheck = null, He.attributeCheck = null, Yt(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? He.tagCheck = S.ADD_TAGS : Nr(S.ADD_TAGS) && (re === Ae && (re = sn(re)), Ke(re, S.ADD_TAGS, je))), Yt(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? He.attributeCheck = S.ADD_ATTR : Nr(S.ADD_ATTR) && (ge === qe && (ge = sn(ge)), Ke(ge, S.ADD_ATTR, je))), Yt(S, "ADD_FORBID_CONTENTS") && Nr(S.ADD_FORBID_CONTENTS) && (me === we && (me = sn(me)), Ke(me, S.ADD_FORBID_CONTENTS, je)), bt && (re["#text"] = !0), Xe && Ke(re, [
      "html",
      "head",
      "body"
    ]), re.table && (Ke(re, ["tbody"]), delete Ge.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const te = T;
      T = S.TRUSTED_TYPES_POLICY;
      try {
        I = O("");
      } catch (fe) {
        throw T = te, fe;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (T = void 0, I = "") : (T === void 0 && (T = L()), T && typeof I == "string" && (I = O("")));
    St && St(S), tt = S;
  }, dn = Ke({}, [
    ...Po,
    ...Ro,
    ...cp
  ]), Zn = Ke({}, [...jo, ...dp]), Jn = function(S, B, te) {
    return B.namespaceURI === et ? S === "svg" : B.namespaceURI === De ? S === "svg" && (te === "annotation-xml" || ke[te]) : !!dn[S];
  }, Fn = function(S, B, te) {
    return B.namespaceURI === et ? S === "math" : B.namespaceURI === It ? S === "math" && Me[te] : !!Zn[S];
  }, Eo = function(S, B, te) {
    return B.namespaceURI === It && !Me[te] || B.namespaceURI === De && !ke[te] ? !1 : !Zn[S] && (Ye[S] || !dn[S]);
  }, To = function(S) {
    let B = h(S);
    (!B || !B.tagName) && (B = {
      namespaceURI: mn,
      tagName: "template"
    });
    const te = Gr(S.tagName), fe = Gr(B.tagName);
    return Z[S.namespaceURI] ? S.namespaceURI === It ? Jn(te, B, fe) : S.namespaceURI === De ? Fn(te, B, fe) : S.namespaceURI === et ? Eo(te, B, fe) : !!(Fe === "application/xhtml+xml" && Z[S.namespaceURI]) : !1;
  }, gn = function(S) {
    zr(t.removed, { element: S });
    try {
      h(S).removeChild(S);
    } catch {
      if (m(S), !h(S)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Qr = function(S, B, te) {
    try {
      g(S, B);
    } catch {
      try {
        S.removeAttribute(te);
      } catch {
      }
    }
  }, yn = function(S) {
    U(S);
    const B = b(S);
    if (B) {
      const fe = [];
      lr(B, (Ce) => {
        zr(fe, Ce);
      }), lr(fe, (Ce) => {
        try {
          m(Ce);
        } catch {
        }
      });
    }
    const te = x(S);
    if (te) for (let fe = te.length - 1; fe >= 0; --fe) {
      const Ce = te[fe], Be = Ce && Ce.name;
      typeof Be == "string" && Qr(S, Ce, Be);
    }
  }, Bt = function(S, B, te) {
    if (!te) try {
      te = B.getAttributeNode(S);
    } catch {
      te = null;
    }
    zr(t.removed, {
      attribute: te || null,
      from: B
    });
    try {
      te ? g(B, te) : B.removeAttribute(S);
    } catch {
      try {
        B.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (Ve || Ct) try {
        gn(B);
      } catch {
      }
      else try {
        B.setAttribute(S, "");
      } catch {
      }
  }, Sr = function(S) {
    const B = x(S);
    if (B)
      for (let te = B.length - 1; te >= 0; --te) {
        const fe = B[te], Ce = fe && fe.name;
        typeof Ce != "string" || ge[je(Ce)] || Qr(S, fe, Ce);
      }
  }, U = function(S) {
    const B = [S];
    for (; B.length > 0; ) {
      const te = B.pop();
      $(te) === nn.element && Sr(te);
      const fe = b(te);
      if (fe) for (let Ce = fe.length - 1; Ce >= 0; --Ce) B.push(fe[Ce]);
    }
  }, K = function(S, B) {
    return st ? S === "patchsrc" ? !0 : S === "for" && B !== "label" && B !== "output" : !1;
  }, ye = function(S) {
    if (!st) return;
    const B = [S];
    for (; B.length > 0; ) {
      const te = B.pop(), fe = $(te);
      if (fe === nn.processingInstruction || fe === nn.comment && Rt(Zs, te.data)) {
        try {
          m(te);
        } catch {
        }
        continue;
      }
      if (fe === nn.element) {
        const Be = te, Ue = je(E(te));
        try {
          Be.hasAttribute && Be.hasAttribute("patchsrc") && Be.removeAttribute("patchsrc"), Be.hasAttribute && Be.hasAttribute("for") && K("for", Ue) && Be.removeAttribute("for");
        } catch {
        }
      }
      const Ce = b(te);
      if (Ce) for (let Be = Ce.length - 1; Be >= 0; --Be) B.push(Ce[Be]);
    }
  }, be = function(S) {
    let B = null, te = null;
    if (ft) S = "<remove></remove>" + S;
    else {
      const Be = Fs(S, /^[\r\n\t ]+/);
      te = Be && Be[0];
    }
    Fe === "application/xhtml+xml" && mn === et && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const fe = T ? O(S) : S;
    if (mn === et) try {
      B = new d().parseFromString(fe, Fe);
    } catch {
    }
    if (!B || !B.documentElement) {
      B = j.createDocument(mn, "template", null);
      try {
        B.documentElement.innerHTML = Nn ? I : fe;
      } catch {
      }
    }
    const Ce = B.body || B.documentElement;
    return S && te && Ce.insertBefore(n.createTextNode(te), Ce.childNodes[0] || null), mn === et ? le.call(B, Xe ? "html" : "body")[0] : Xe ? B.documentElement : Ce;
  }, nt = function(S) {
    const B = C ? C(S) : S.ownerDocument;
    return q.call(B || S, S, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, Lt = function(S) {
    return S = Pr(S, Ee, " "), S = Pr(S, Q, " "), S = Pr(S, J, " "), S;
  }, $t = function(S) {
    var B;
    S.normalize();
    const te = C ? C(S) : S.ownerDocument, fe = q.call(te || S, S, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Ce = fe.nextNode();
    for (; Ce; )
      Ce.data = Lt(Ce.data), Ce = fe.nextNode();
    const Be = (B = S.querySelectorAll) === null || B === void 0 ? void 0 : B.call(S, "template");
    Be && lr(Be, (Ue) => {
      Dt(Ue.content) && $t(Ue.content);
    });
  }, bn = function(S) {
    const B = v ? v(S) : null;
    return typeof B != "string" || je(B) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || S.attributes !== x(S) || typeof S.removeAttribute != "function" || typeof S.removeAttributeNode != "function" || typeof S.getAttributeNode != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || S.nodeType !== N(S) || S.childNodes !== b(S);
  }, Dt = function(S) {
    if (!N || typeof S != "object" || S === null) return !1;
    try {
      return N(S) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, kt = function(S) {
    if (!N || typeof S != "object" || S === null) return !1;
    try {
      return typeof N(S) == "number";
    } catch {
      return !1;
    }
  };
  function Qt(de, S, B) {
    de.length !== 0 && lr(de, (te) => {
      te.call(t, S, B, tt);
    });
  }
  const Co = function(S, B) {
    return !!(st && S.hasChildNodes() && !kt(S.firstElementChild) && Rt(Xs, S.textContent) && Rt(Xs, S.innerHTML) || st && S.namespaceURI === et && wp[B] && (kt(S.firstElementChild) || typeof S.textContent == "string" && Rt(kp[B], S.textContent)) || S.nodeType === nn.processingInstruction || st && S.nodeType === nn.comment && Rt(Zs, S.data));
  }, eo = function(S, B) {
    if (S instanceof RegExp) return Rt(S, B);
    if (S instanceof Function) {
      for (var te = arguments.length, fe = new Array(te > 2 ? te - 2 : 0), Ce = 2; Ce < te; Ce++) fe[Ce - 2] = arguments[Ce];
      return !!S(B, ...fe);
    }
    return !1;
  }, nl = function(S, B, te) {
    if (!Ge[B] && ys(B) && eo(Je.tagNameCheck, B)) return !1;
    if (bt && !me[B]) {
      const fe = h(S), Ce = b(S);
      if (Ce && fe) {
        const Be = Ce.length;
        for (let Ue = Be - 1; Ue >= 0; --Ue) {
          const pt = S === te ? y(Ce[Ue], !0) : Ce[Ue];
          fe.insertBefore(pt, _(S));
        }
      }
    }
    return gn(S), !0;
  }, hs = function(S, B, te, fe) {
    return S.length === 0 ? B : B === te || B === fe ? sn(B) : B;
  }, ur = function(S, B) {
    return S === B || h(S) !== null ? !1 : (R && U(S), !0);
  }, ms = function(S, B) {
    if (Qt(V.beforeSanitizeElements, S, null), ur(S, B)) return !0;
    if (bn(S))
      return gn(S), !0;
    const te = je(E(S));
    if (re = hs(V.uponSanitizeElement, re, Ae, yt), Qt(V.uponSanitizeElement, S, {
      tagName: te,
      allowedTags: re
    }), ur(S, B)) return !0;
    if (Co(S, te))
      return gn(S), !0;
    if (Ge[te] || !(He.tagCheck instanceof Function && He.tagCheck(te)) && !re[te]) {
      const fe = nl(S, te, B);
      return fe === !1 && (Qt(V.afterSanitizeElements, S, null), ur(S, B)) ? !0 : fe;
    }
    if ($(S) === nn.element && !To(S) || (te === "noscript" || te === "noembed" || te === "noframes") && Rt(xp, S.innerHTML))
      return gn(S), !0;
    if (Le && S.nodeType === nn.text) {
      const fe = Lt(S.textContent);
      S.textContent !== fe && (zr(t.removed, { element: S.cloneNode() }), S.textContent = fe);
    }
    return Qt(V.afterSanitizeElements, S, null), ur(S, B);
  }, gs = function(S, B, te) {
    if (Qe[B] || K(B, S) || ze && (B === "id" || B === "name") && (te in n || te in ut)) return !1;
    const fe = ge[B] || He.attributeCheck instanceof Function && He.attributeCheck(B, S);
    return ee && Rt(X, B) || gt && Rt(ue, B) ? !0 : fe ? _e[B] || Rt($e, Pr(te, xe, "")) || (B === "src" || B === "xlink:href" || B === "href") && S !== "script" && Hs(te, "data:") === 0 && pe[S] || Te && !Rt(ie, Pr(te, xe, "")) ? !0 : !te : ys(S) && eo(Je.tagNameCheck, S) && eo(Je.attributeNameCheck, B, S) || B === "is" && Je.allowCustomizedBuiltInElements && eo(Je.tagNameCheck, te);
  }, rl = Ke({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ys = function(S) {
    return !rl[Gr(S)] && Rt(Y, S);
  }, ol = function(S, B, te, fe) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !te) switch (u.getAttributeType(S, B)) {
      case "TrustedHTML":
        return O(fe);
      case "TrustedScriptURL":
        return z(fe);
    }
    return fe;
  }, sl = function(S, B, te, fe) {
    try {
      return te ? S.setAttributeNS(te, B, fe) : S.setAttribute(B, fe), bn(S) ? (gn(S), !1) : !0;
    } catch {
      return Bt(B, S), !1;
    }
  }, bs = function(S, B) {
    if (Qt(V.beforeSanitizeAttributes, S, null), ur(S, B)) return;
    const te = S.attributes;
    if (!te || bn(S)) return;
    ge = hs(V.uponSanitizeAttribute, ge, qe, it);
    const fe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let Ce = te.length;
    const Be = je(S.nodeName);
    for (; Ce--; ) {
      const Ue = te[Ce], pt = Ue.name, un = Ue.namespaceURI, en = Ue.value, fr = je(pt), Ao = en;
      let Ft = pt === "value" ? Ao : np(Ao), xs = !1;
      if (fe.attrName = fr, fe.attrValue = Ft, fe.keepAttr = !0, fe.forceKeepAttr = void 0, Qt(V.uponSanitizeAttribute, S, fe), Ft = fe.attrValue, wt && (fr === "id" || fr === "name") && Hs(Ft, Mt) !== 0 && (Bt(pt, S, Ue), Ft = Mt + Ft, xs = !0), st && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ft)) {
        Bt(pt, S, Ue);
        continue;
      }
      if (fr === "attributename" && Fs(Ft, "href")) {
        Bt(pt, S, Ue);
        continue;
      }
      if (!fe.forceKeepAttr) {
        if (!fe.keepAttr) {
          Bt(pt, S, Ue);
          continue;
        }
        if (!lt && Rt(vp, Ft)) {
          Bt(pt, S, Ue);
          continue;
        }
        if (Le && (Ft = Lt(Ft)), !gs(Be, fr, Ft)) {
          Bt(pt, S, Ue);
          continue;
        }
        Ft = ol(Be, fr, un, Ft), Ft !== Ao && sl(S, pt, un, Ft) && xs && Bs(t.removed);
      }
    }
    Qt(V.afterSanitizeAttributes, S, null), ur(S, B);
  }, to = function(S) {
    let B = null;
    const te = nt(S);
    for (Qt(V.beforeSanitizeShadowDOM, S, null); B = te.nextNode(); )
      if (Qt(V.uponSanitizeShadowNode, B, null), ms(B, S), bs(B, S), Dt(B.content) && to(B.content), $(B) === nn.element) {
        const fe = p(B);
        Dt(fe) && (Mo(fe), to(fe));
      }
    Qt(V.afterSanitizeShadowDOM, S, null);
  }, Mo = function(S) {
    const B = [{
      node: S,
      shadow: null
    }];
    for (; B.length > 0; ) {
      const te = B.pop();
      if (te.shadow) {
        to(te.shadow);
        continue;
      }
      const fe = te.node, Ce = $(fe) === nn.element, Be = b(fe);
      if (Be) for (let Ue = Be.length - 1; Ue >= 0; --Ue) B.push({
        node: Be[Ue],
        shadow: null
      });
      if (Ce) {
        const Ue = v ? v(fe) : null;
        if (typeof Ue == "string" && je(Ue) === "template") {
          const pt = fe.content;
          Dt(pt) && B.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Ce) {
        const Ue = p(fe);
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
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, te = null, fe = null, Ce = null;
    if (Nn = !de, Nn && (de = "<!-->"), typeof de != "string" && !kt(de) && (de = lp(de), typeof de != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return de;
    Tt ? (re = yt, ge = it) : At(S), (V.uponSanitizeElement.length > 0 || V.uponSanitizeAttribute.length > 0) && (re = sn(re)), V.uponSanitizeAttribute.length > 0 && (ge = sn(ge)), t.removed = [];
    const Be = R && typeof de != "string" && kt(de);
    if (Be) {
      ye(de);
      const un = E(de);
      if (typeof un == "string") {
        const en = je(un);
        if (!re[en] || Ge[en])
          throw yn(de), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (bn(de))
        throw yn(de), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        Mo(de);
      } catch (en) {
        throw yn(de), en;
      }
    } else if (kt(de))
      B = be("<!---->"), te = B.ownerDocument.importNode(de, !0), te.nodeType === nn.element && te.nodeName === "BODY" || te.nodeName === "HTML" ? B = te : B.appendChild(te), Mo(B);
    else {
      if (!Ve && !Le && !Xe && de.indexOf("<") === -1) return T && oe ? O(de) : de;
      if (B = be(de), !B) return Ve ? null : oe ? I : "";
    }
    B && ft && gn(B.firstChild);
    const Ue = Be ? de : B;
    try {
      const un = nt(Ue);
      for (; fe = un.nextNode(); )
        ms(fe, Ue), bs(fe, Ue), Dt(fe.content) && to(fe.content);
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
      return Le && $t(de), de;
    }
    if (Ve) {
      if (Le && $t(B), Ct)
        for (Ce = se.call(B.ownerDocument); B.firstChild; ) Ce.appendChild(B.firstChild);
      else Ce = B;
      return (ge.shadowroot || ge.shadowrootmode) && (Ce = ne.call(r, Ce, !0)), Ce;
    }
    let pt = Xe ? B.outerHTML : B.innerHTML;
    return Xe && re["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Rt(yp, B.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + pt), Le && (pt = Lt(pt)), T && oe ? O(pt) : pt;
  }, t.setConfig = function() {
    let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(de), Tt = !0, yt = re, it = ge;
  }, t.clearConfig = function() {
    tt = null, Tt = !1, yt = null, it = null, T = A, I = "";
  }, t.isValidAttribute = function(de, S, B) {
    tt || At({});
    const te = je(de), fe = je(S);
    return gs(te, fe, B);
  }, t.addHook = function(de, S) {
    typeof S == "function" && Yt(V, de) && zr(V[de], S);
  }, t.removeHook = function(de, S) {
    if (Yt(V, de)) {
      if (S !== void 0) {
        const B = ep(V[de], S);
        return B === -1 ? void 0 : tp(V[de], B, 1)[0];
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
function Yr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Sp(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const lo = "\0";
function io(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Yr(i)}</code>`), `${lo}${n.length - 1}${lo}`));
  return t || (r = Yr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, c) => {
      const s = Sp(c);
      return s == null ? i : `<a href="${Yr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${lo}(\\d+)${lo}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function Op(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), a = (l) => r[l] ?? "", i = [];
  let c = 0;
  const s = (l, d) => {
    const u = d ? "ol" : "ul";
    i.push(
      `<${u}>${l.map((f) => `<li>${io(f, n)}</li>`).join("")}</${u}>`
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
        `<h${u.length}>${io(f.trim(), n)}</h${u.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const _ = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", b = [];
      for (c += 1; c < r.length; ) {
        const p = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(p)) break;
        b.push(p), c += 1;
      }
      c += 1;
      const h = _ ? ` class="language-${Yr(_)}"` : "";
      i.push(
        `<pre><code${h}>${Yr(b.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const _ = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        _.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${_.map((b) => `<p>${io(b, n)}</p>`).join("")}</blockquote>`
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
        const h = /^\s*[-*+]\s+(.*)$/.exec(a(c))?.[1];
        if (h === void 0) break;
        _.push(h), c += 1;
      }
      s(_, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(l)) {
      const _ = [];
      for (; c < r.length; ) {
        const h = /^\s*\d+[.)]\s+(.*)$/.exec(a(c))?.[1];
        if (h === void 0) break;
        _.push(h), c += 1;
      }
      s(_, !0);
      continue;
    }
    const g = [];
    for (; c < r.length && !/^\s*$/.test(a(c)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(c)
    ); )
      g.push(a(c)), c += 1;
    i.push(`<p>${io(g.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const Ep = "_markdown_oj741_3", Tp = "_resize_oj741_61", Qs = {
  markdown: Ep,
  resize: Tp
};
function lS({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Ne(
    () => Ba.sanitize(Op(e, { allowHtml: t })),
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
const Cp = "_editor_2a7al_3", Mp = "_toolbar_2a7al_13", Ap = "_tool_2a7al_13", Dp = "_separator_2a7al_56", Ip = "_area_2a7al_63", Lp = "_source_2a7al_73", zp = "_alignGlyph_2a7al_84", Pp = "_colorInput_2a7al_89", Rp = "_select_2a7al_98", Ot = {
  editor: Cp,
  toolbar: Mp,
  tool: Ap,
  separator: Dp,
  area: Ip,
  source: Lp,
  alignGlyph: zp,
  colorInput: Pp,
  select: Rp
}, jp = [
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
}, Bp = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], Fp = ["1", "2", "3", "4", "5", "6", "7"], Hp = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Yo(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function Up(e) {
  return Yo("formatBlock", `<${e}>`) || Yo("formatBlock", e);
}
function Wp(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const iS = at(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: a,
    toolbar: i = jp,
    imageUpload: c,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: u,
    sanitize: f = !0
  }, y) {
    const [m, g] = W(!1), [_, b] = W(n), [h, p] = W(
      null
    ), [x, N] = W(""), [v, C] = W(""), [$, E] = W(2), [T, I] = W(2), [A, M] = W(!1), k = ae(null), w = ae(null), O = ae(n), z = H(
      (Y) => f ? Ba.sanitize(Y) : Y,
      [f]
    );
    Oe(() => {
      const Y = k.current;
      t !== void 0 && Y && Y.innerHTML !== t && (Y.innerHTML = t), t !== void 0 && (O.current = t);
    }, [t]);
    const L = H(
      (Y) => {
        O.current = z(Y), r?.(O.current);
      },
      [z, r]
    ), P = H(
      (Y, $e) => {
        if (s || l) return !1;
        k.current?.focus();
        const re = Yo(Y, $e);
        if (re) {
          const Ae = k.current;
          Ae && L(Ae.innerHTML);
        }
        return re;
      },
      [L, s, l]
    ), j = H(
      () => k.current?.innerHTML ?? O.current,
      []
    ), q = H(
      (Y) => {
        P("insertHTML", Y);
      },
      [P]
    ), se = H(() => {
      k.current?.focus();
    }, []), le = Ne(
      () => ({
        execCommand: P,
        getHtml: j,
        insertHtml: q,
        focus: se
      }),
      [P, j, q, se]
    );
    $o(y, () => ({ execCommand: P, getHtml: j }), [
      P,
      j
    ]);
    const ne = H(
      (Y) => {
        const $e = ea[Y];
        !$e || s || l || P($e.command);
      },
      [P, s, l]
    ), V = H(() => {
      s || l || (m ? (g(!1), L(_)) : (b(k.current?.innerHTML ?? ""), g(!0)));
    }, [m, _, L, s, l]), Ee = H(
      (Y) => {
        if (!(Y.ctrlKey || Y.metaKey) || s || l) return;
        const $e = Y.key.toLowerCase(), re = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        re && (Y.preventDefault(), ne(re));
      },
      [ne, s, l]
    ), Q = H(() => {
      const Y = k.current;
      Y && L(Y.innerHTML);
    }, [L]), J = H(() => {
      x.trim() && (P("createLink", x.trim()), N(""), p(null));
    }, [x, P]), X = H(() => {
      v.trim() && (P("insertImage", v.trim()), C(""), p(null));
    }, [v, P]), ue = H(
      async (Y) => {
        if (c) {
          M(!0);
          try {
            const $e = new FormData();
            $e.append(c.parameterName ?? "file", Y);
            const re = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: $e
            });
            if (!re.ok)
              throw new Error(`Upload failed: ${re.status}`);
            const ge = (re.headers.get("content-type") ?? "").includes("application/json") ? await re.json() : await re.text(), qe = (c.parseUrl ?? Wp)(ge);
            P("insertImage", qe);
          } catch ($e) {
            a?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            M(!1), p(null);
          }
        }
      },
      [c, a, P]
    ), ie = H(() => {
      const Y = Math.max(1, Math.min(10, Math.floor($) || 1)), $e = Math.max(1, Math.min(10, Math.floor(T) || 1)), re = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: Y }, () => `<tr>${re}</tr>`).join(
        ""
      );
      P("insertHTML", `<table><tbody>${Ae}</tbody></table>`), p(null);
    }, [$, T, P]), xe = (Y, $e) => {
      if (Y === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: Ot.separator
          },
          `sep-${$e}`
        );
      if (typeof Y == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": Y.label,
            title: Y.title ?? Y.label,
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && Y.onExecute(le);
            },
            children: Y.glyph ?? Y.label
          },
          Y.id
        );
      if (Y === "source")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Source",
            "aria-pressed": m,
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: V,
            children: "</>"
          },
          "source"
        );
      if (Y === "foreColor" || Y === "backgroundColor") {
        const Ae = Y === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ D("label", { className: Ot.tool, title: Ae, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: l,
              className: Ot.colorInput,
              onMouseDown: (ge) => ge.preventDefault(),
              onChange: (ge) => P(
                Y === "foreColor" ? "foreColor" : "hiliteColor",
                ge.target.value
              )
            }
          )
        ] }, Y);
      }
      if (Y === "formatBlock" || Y === "fontName" || Y === "fontSize") {
        const Ae = Y === "formatBlock" ? "Format block" : Y === "fontName" ? "Font name" : "Font size", ge = Y === "formatBlock" ? Hp : Y === "fontName" ? Bp : Fp;
        return /* @__PURE__ */ D(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: l,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (qe) => qe.preventDefault(),
            onChange: (qe) => {
              !qe.target.value || s || l || (Y === "formatBlock" ? Up(qe.target.value) : P(Y === "fontName" ? "fontName" : "fontSize", qe.target.value), qe.target.value = "");
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", disabled: !0, children: Y === "formatBlock" ? "¶" : Y === "fontName" ? "Aa" : "12" }),
              ge.map((qe) => /* @__PURE__ */ o("option", { value: qe, children: qe }, qe))
            ]
          },
          Y
        );
      }
      if (Y === "link")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert link",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (N(""), p("link"));
            },
            children: "🔗"
          },
          "link"
        );
      if (Y === "image")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert image",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (C(""), p("image"));
            },
            children: "🖼"
          },
          "image"
        );
      if (Y === "table")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert table",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (E(2), I(2), p("table"));
            },
            children: "▦"
          },
          "table"
        );
      const re = ea[Y];
      return re ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ot.tool,
          "aria-label": re.label,
          disabled: l,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => ne(Y),
          children: re.glyph
        },
        Y
      ) : null;
    };
    return /* @__PURE__ */ D("div", { className: [Ot.editor, u].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: Ot.toolbar,
          children: i.map((Y, $e) => xe(Y, $e))
        }
      ),
      m ? /* @__PURE__ */ o(
        "textarea",
        {
          className: Ot.source,
          "aria-label": `${d} source`,
          value: _,
          disabled: l,
          readOnly: s,
          onChange: (Y) => {
            b(Y.target.value), L(Y.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: k,
          className: Ot.area,
          contentEditable: !s && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          tabIndex: 0,
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: O.current },
          onInput: Q,
          onKeyDown: Ee
        }
      ),
      /* @__PURE__ */ D(
        Aa,
        {
          open: h !== null,
          onClose: () => p(null),
          title: h === "link" ? "Insert link" : h === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(cn, { variant: "text", onClick: () => p(null), children: "Cancel" }),
            h === "link" && /* @__PURE__ */ o(cn, { onClick: J, children: "Insert" }),
            h === "image" && /* @__PURE__ */ o(cn, { onClick: X, disabled: A, children: "Insert" }),
            h === "table" && /* @__PURE__ */ o(cn, { onClick: ie, children: "Insert" })
          ] }),
          children: [
            h === "link" && /* @__PURE__ */ o(ir, { label: "URL", required: !0, children: ({ inputId: Y }) => /* @__PURE__ */ o(
              ro,
              {
                id: Y,
                value: x,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            h === "image" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Image URL", children: ({ inputId: Y }) => /* @__PURE__ */ o(
                ro,
                {
                  id: Y,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => C($e.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(ir, { label: "Or upload a file", children: ({ inputId: Y }) => /* @__PURE__ */ o(
                "input",
                {
                  id: Y,
                  ref: w,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const re = $e.target.files?.[0];
                    re && ue(re), $e.target.value = "";
                  }
                }
              ) }),
              A && /* @__PURE__ */ o(Da, { textStyle: "body2", children: "Uploading…" })
            ] }),
            h === "table" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Rows", children: ({ inputId: Y }) => /* @__PURE__ */ o(
                ro,
                {
                  id: Y,
                  type: "number",
                  value: String($),
                  onChange: ($e) => E(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ir, { label: "Columns", children: ({ inputId: Y }) => /* @__PURE__ */ o(
                ro,
                {
                  id: Y,
                  type: "number",
                  value: String(T),
                  onChange: ($e) => I(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), qp = "_popup_ve7kd_4", Fa = {
  popup: qp
}, Ha = cr(null);
function cS() {
  const e = Bn(Ha);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function ta(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Kp({ state: e }) {
  const t = ae(null), [n, r] = W(null);
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
function dS({ children: e }) {
  const [t, n] = W(null), r = ae(0), a = ae(null), i = H(() => {
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
        f || (f = !0, n((y) => y?.seq !== u ? y : (y.invoker && document.body.contains(y.invoker) && y.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  Oe(() => {
    if (!t) return;
    const d = (m) => {
      const g = document.querySelector(`.${Fa.popup}`);
      g && !g.contains(m.target) && c();
    }, u = (m) => {
      m.key === "Escape" && (m.preventDefault(), c());
    }, f = () => c(), y = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", u, !0), window.addEventListener("resize", f), window.addEventListener("hashchange", y), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", u, !0), window.removeEventListener("resize", f), window.removeEventListener("hashchange", y);
    };
  }, [t, c]);
  const l = Ne(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ D(Ha.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(Kp, { state: t }, t.seq)
  ] });
}
const Gp = "_alert_146r9_1", Vp = "_xs_146r9_28", Yp = "_sm_146r9_38", Xp = "_lg_146r9_48", Zp = "_xl_146r9_58", Jp = "_primary_146r9_69", Qp = "_secondary_146r9_74", e_ = "_light_146r9_79", t_ = "_base_146r9_84", n_ = "_dark_146r9_89", r_ = "_info_146r9_94", o_ = "_success_146r9_99", s_ = "_warning_146r9_104", a_ = "_danger_146r9_109", l_ = "_flat_146r9_116", i_ = "_outlined_146r9_123", c_ = "_filled_146r9_132", d_ = "_text_146r9_139", u_ = "_icon_146r9_181", f_ = "_content_146r9_192", p_ = "_title_146r9_197", __ = "_body_146r9_203", h_ = "_dismiss_146r9_209", Sn = {
  alert: Gp,
  xs: Vp,
  sm: Yp,
  lg: Xp,
  xl: Zp,
  primary: Jp,
  secondary: Qp,
  light: e_,
  base: t_,
  dark: n_,
  info: r_,
  success: o_,
  warning: s_,
  danger: a_,
  flat: l_,
  outlined: i_,
  filled: c_,
  text: d_,
  icon: u_,
  content: f_,
  title: p_,
  body: __,
  dismiss: h_,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, m_ = {
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
function uS({
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
  className: y,
  ...m
}) {
  const [g, _] = W(!1);
  if (u === !1 || u === void 0 && g)
    return null;
  const b = () => {
    u === void 0 && _(!0), d?.(), f?.(!1);
  }, h = e, p = Sa(t, "filled"), x = Xr(n), N = i ?? (c ? /* @__PURE__ */ o(Ie, { icon: m_[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        Sn.alert,
        Sn[h],
        Sn[p],
        x ? Sn[x] : null,
        Sn[r],
        y
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ o("span", { className: Sn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ D("div", { className: Sn.content, children: [
          a && /* @__PURE__ */ o("div", { className: Sn.title, children: a }),
          s && /* @__PURE__ */ o("div", { className: Sn.body, children: s })
        ] }),
        l && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Sn.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const g_ = "_skeleton_1xyce_1", y_ = "_text_1xyce_35", b_ = "_circle_1xyce_40", x_ = "_rect_1xyce_44", na = {
  skeleton: g_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: y_,
  circle: b_,
  rect: x_
};
function fS({
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
function vo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const v_ = "_row_juebr_1", w_ = "_start_juebr_14", k_ = "_center_juebr_18", N_ = "_end_juebr_22", $_ = "_stretch_juebr_26", S_ = "_baseline_juebr_30", O_ = "_normal_juebr_34", E_ = "_noWrap_juebr_90", T_ = "_wrapReverse_juebr_94", co = {
  row: v_,
  start: w_,
  center: k_,
  end: N_,
  stretch: $_,
  baseline: S_,
  normal: O_,
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
function ra(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function pS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...s
}) {
  const l = e != null ? vo(e) : null, d = t != null ? vo(t) : null, u = {
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
        co.row,
        co[n],
        co[`justify-${r}`],
        ra(a) != null ? co[ra(a)] : null,
        i
      ].filter(Boolean).join(" "),
      style: u,
      ...s
    }
  );
}
const C_ = "_column_sh0ss_1", M_ = "_Size1_sh0ss_15", A_ = "_Size2_sh0ss_24", D_ = "_Size3_sh0ss_33", I_ = "_Size4_sh0ss_42", L_ = "_Size5_sh0ss_51", z_ = "_Size6_sh0ss_60", P_ = "_Size7_sh0ss_69", R_ = "_Size8_sh0ss_78", j_ = "_Size9_sh0ss_87", B_ = "_Size10_sh0ss_96", F_ = "_Size11_sh0ss_105", H_ = "_Size12_sh0ss_114", U_ = "_Offset0_sh0ss_119", W_ = "_Offset1_sh0ss_122", q_ = "_Offset2_sh0ss_127", K_ = "_Offset3_sh0ss_132", G_ = "_Offset4_sh0ss_137", V_ = "_Offset5_sh0ss_142", Y_ = "_Offset6_sh0ss_147", X_ = "_Offset7_sh0ss_152", Z_ = "_Offset8_sh0ss_157", J_ = "_Offset9_sh0ss_162", Q_ = "_Offset10_sh0ss_167", eh = "_Offset11_sh0ss_172", th = "_Offset12_sh0ss_177", nh = "_OrderFirst_sh0ss_182", rh = "_OrderLast_sh0ss_185", oh = "_Order0_sh0ss_188", sh = "_Order1_sh0ss_191", ah = "_Order2_sh0ss_194", lh = "_Order3_sh0ss_197", ih = "_Order4_sh0ss_200", ch = "_Order5_sh0ss_203", dh = "_Order6_sh0ss_206", uh = "_Order7_sh0ss_209", fh = "_Order8_sh0ss_212", ph = "_Order9_sh0ss_215", _h = "_Order10_sh0ss_218", hh = "_Order11_sh0ss_221", mh = "_Order12_sh0ss_224", gh = "_xsSize1_sh0ss_229", yh = "_xsSize2_sh0ss_238", bh = "_xsSize3_sh0ss_247", xh = "_xsSize4_sh0ss_256", vh = "_xsSize5_sh0ss_265", wh = "_xsSize6_sh0ss_274", kh = "_xsSize7_sh0ss_283", Nh = "_xsSize8_sh0ss_292", $h = "_xsSize9_sh0ss_301", Sh = "_xsSize10_sh0ss_310", Oh = "_xsSize11_sh0ss_321", Eh = "_xsSize12_sh0ss_332", Th = "_xsOffset0_sh0ss_337", Ch = "_xsOffset1_sh0ss_340", Mh = "_xsOffset2_sh0ss_345", Ah = "_xsOffset3_sh0ss_350", Dh = "_xsOffset4_sh0ss_355", Ih = "_xsOffset5_sh0ss_360", Lh = "_xsOffset6_sh0ss_365", zh = "_xsOffset7_sh0ss_370", Ph = "_xsOffset8_sh0ss_375", Rh = "_xsOffset9_sh0ss_380", jh = "_xsOffset10_sh0ss_385", Bh = "_xsOffset11_sh0ss_391", Fh = "_xsOffset12_sh0ss_397", Hh = "_xsOrderFirst_sh0ss_403", Uh = "_xsOrderLast_sh0ss_406", Wh = "_xsOrder0_sh0ss_409", qh = "_xsOrder1_sh0ss_412", Kh = "_xsOrder2_sh0ss_415", Gh = "_xsOrder3_sh0ss_418", Vh = "_xsOrder4_sh0ss_421", Yh = "_xsOrder5_sh0ss_424", Xh = "_xsOrder6_sh0ss_427", Zh = "_xsOrder7_sh0ss_430", Jh = "_xsOrder8_sh0ss_433", Qh = "_xsOrder9_sh0ss_436", em = "_xsOrder10_sh0ss_439", tm = "_xsOrder11_sh0ss_442", nm = "_xsOrder12_sh0ss_445", rm = "_smSize1_sh0ss_451", om = "_smSize2_sh0ss_460", sm = "_smSize3_sh0ss_469", am = "_smSize4_sh0ss_478", lm = "_smSize5_sh0ss_487", im = "_smSize6_sh0ss_496", cm = "_smSize7_sh0ss_505", dm = "_smSize8_sh0ss_514", um = "_smSize9_sh0ss_523", fm = "_smSize10_sh0ss_532", pm = "_smSize11_sh0ss_543", _m = "_smSize12_sh0ss_554", hm = "_smOffset0_sh0ss_559", mm = "_smOffset1_sh0ss_562", gm = "_smOffset2_sh0ss_567", ym = "_smOffset3_sh0ss_572", bm = "_smOffset4_sh0ss_577", xm = "_smOffset5_sh0ss_582", vm = "_smOffset6_sh0ss_587", wm = "_smOffset7_sh0ss_592", km = "_smOffset8_sh0ss_597", Nm = "_smOffset9_sh0ss_602", $m = "_smOffset10_sh0ss_607", Sm = "_smOffset11_sh0ss_613", Om = "_smOffset12_sh0ss_619", Em = "_smOrderFirst_sh0ss_625", Tm = "_smOrderLast_sh0ss_628", Cm = "_smOrder0_sh0ss_631", Mm = "_smOrder1_sh0ss_634", Am = "_smOrder2_sh0ss_637", Dm = "_smOrder3_sh0ss_640", Im = "_smOrder4_sh0ss_643", Lm = "_smOrder5_sh0ss_646", zm = "_smOrder6_sh0ss_649", Pm = "_smOrder7_sh0ss_652", Rm = "_smOrder8_sh0ss_655", jm = "_smOrder9_sh0ss_658", Bm = "_smOrder10_sh0ss_661", Fm = "_smOrder11_sh0ss_664", Hm = "_smOrder12_sh0ss_667", Um = "_mdSize1_sh0ss_673", Wm = "_mdSize2_sh0ss_682", qm = "_mdSize3_sh0ss_691", Km = "_mdSize4_sh0ss_700", Gm = "_mdSize5_sh0ss_709", Vm = "_mdSize6_sh0ss_718", Ym = "_mdSize7_sh0ss_727", Xm = "_mdSize8_sh0ss_736", Zm = "_mdSize9_sh0ss_745", Jm = "_mdSize10_sh0ss_754", Qm = "_mdSize11_sh0ss_765", e1 = "_mdSize12_sh0ss_776", t1 = "_mdOffset0_sh0ss_781", n1 = "_mdOffset1_sh0ss_784", r1 = "_mdOffset2_sh0ss_789", o1 = "_mdOffset3_sh0ss_794", s1 = "_mdOffset4_sh0ss_799", a1 = "_mdOffset5_sh0ss_804", l1 = "_mdOffset6_sh0ss_809", i1 = "_mdOffset7_sh0ss_814", c1 = "_mdOffset8_sh0ss_819", d1 = "_mdOffset9_sh0ss_824", u1 = "_mdOffset10_sh0ss_829", f1 = "_mdOffset11_sh0ss_835", p1 = "_mdOffset12_sh0ss_841", _1 = "_mdOrderFirst_sh0ss_847", h1 = "_mdOrderLast_sh0ss_850", m1 = "_mdOrder0_sh0ss_853", g1 = "_mdOrder1_sh0ss_856", y1 = "_mdOrder2_sh0ss_859", b1 = "_mdOrder3_sh0ss_862", x1 = "_mdOrder4_sh0ss_865", v1 = "_mdOrder5_sh0ss_868", w1 = "_mdOrder6_sh0ss_871", k1 = "_mdOrder7_sh0ss_874", N1 = "_mdOrder8_sh0ss_877", $1 = "_mdOrder9_sh0ss_880", S1 = "_mdOrder10_sh0ss_883", O1 = "_mdOrder11_sh0ss_886", E1 = "_mdOrder12_sh0ss_889", T1 = "_lgSize1_sh0ss_895", C1 = "_lgSize2_sh0ss_904", M1 = "_lgSize3_sh0ss_913", A1 = "_lgSize4_sh0ss_922", D1 = "_lgSize5_sh0ss_931", I1 = "_lgSize6_sh0ss_940", L1 = "_lgSize7_sh0ss_949", z1 = "_lgSize8_sh0ss_958", P1 = "_lgSize9_sh0ss_967", R1 = "_lgSize10_sh0ss_976", j1 = "_lgSize11_sh0ss_987", B1 = "_lgSize12_sh0ss_998", F1 = "_lgOffset0_sh0ss_1003", H1 = "_lgOffset1_sh0ss_1006", U1 = "_lgOffset2_sh0ss_1011", W1 = "_lgOffset3_sh0ss_1016", q1 = "_lgOffset4_sh0ss_1021", K1 = "_lgOffset5_sh0ss_1026", G1 = "_lgOffset6_sh0ss_1031", V1 = "_lgOffset7_sh0ss_1036", Y1 = "_lgOffset8_sh0ss_1041", X1 = "_lgOffset9_sh0ss_1046", Z1 = "_lgOffset10_sh0ss_1051", J1 = "_lgOffset11_sh0ss_1057", Q1 = "_lgOffset12_sh0ss_1063", eg = "_lgOrderFirst_sh0ss_1069", tg = "_lgOrderLast_sh0ss_1072", ng = "_lgOrder0_sh0ss_1075", rg = "_lgOrder1_sh0ss_1078", og = "_lgOrder2_sh0ss_1081", sg = "_lgOrder3_sh0ss_1084", ag = "_lgOrder4_sh0ss_1087", lg = "_lgOrder5_sh0ss_1090", ig = "_lgOrder6_sh0ss_1093", cg = "_lgOrder7_sh0ss_1096", dg = "_lgOrder8_sh0ss_1099", ug = "_lgOrder9_sh0ss_1102", fg = "_lgOrder10_sh0ss_1105", pg = "_lgOrder11_sh0ss_1108", _g = "_lgOrder12_sh0ss_1111", hg = "_xlSize1_sh0ss_1117", mg = "_xlSize2_sh0ss_1126", gg = "_xlSize3_sh0ss_1135", yg = "_xlSize4_sh0ss_1144", bg = "_xlSize5_sh0ss_1153", xg = "_xlSize6_sh0ss_1162", vg = "_xlSize7_sh0ss_1171", wg = "_xlSize8_sh0ss_1180", kg = "_xlSize9_sh0ss_1189", Ng = "_xlSize10_sh0ss_1198", $g = "_xlSize11_sh0ss_1209", Sg = "_xlSize12_sh0ss_1220", Og = "_xlOffset0_sh0ss_1225", Eg = "_xlOffset1_sh0ss_1228", Tg = "_xlOffset2_sh0ss_1233", Cg = "_xlOffset3_sh0ss_1238", Mg = "_xlOffset4_sh0ss_1243", Ag = "_xlOffset5_sh0ss_1248", Dg = "_xlOffset6_sh0ss_1253", Ig = "_xlOffset7_sh0ss_1258", Lg = "_xlOffset8_sh0ss_1263", zg = "_xlOffset9_sh0ss_1268", Pg = "_xlOffset10_sh0ss_1273", Rg = "_xlOffset11_sh0ss_1279", jg = "_xlOffset12_sh0ss_1285", Bg = "_xlOrderFirst_sh0ss_1291", Fg = "_xlOrderLast_sh0ss_1294", Hg = "_xlOrder0_sh0ss_1297", Ug = "_xlOrder1_sh0ss_1300", Wg = "_xlOrder2_sh0ss_1303", qg = "_xlOrder3_sh0ss_1306", Kg = "_xlOrder4_sh0ss_1309", Gg = "_xlOrder5_sh0ss_1312", Vg = "_xlOrder6_sh0ss_1315", Yg = "_xlOrder7_sh0ss_1318", Xg = "_xlOrder8_sh0ss_1321", Zg = "_xlOrder9_sh0ss_1324", Jg = "_xlOrder10_sh0ss_1327", Qg = "_xlOrder11_sh0ss_1330", ey = "_xlOrder12_sh0ss_1333", ty = "_xxSize1_sh0ss_1339", ny = "_xxSize2_sh0ss_1348", ry = "_xxSize3_sh0ss_1357", oy = "_xxSize4_sh0ss_1366", sy = "_xxSize5_sh0ss_1375", ay = "_xxSize6_sh0ss_1384", ly = "_xxSize7_sh0ss_1393", iy = "_xxSize8_sh0ss_1402", cy = "_xxSize9_sh0ss_1411", dy = "_xxSize10_sh0ss_1420", uy = "_xxSize11_sh0ss_1431", fy = "_xxSize12_sh0ss_1442", py = "_xxOffset0_sh0ss_1447", _y = "_xxOffset1_sh0ss_1450", hy = "_xxOffset2_sh0ss_1455", my = "_xxOffset3_sh0ss_1460", gy = "_xxOffset4_sh0ss_1465", yy = "_xxOffset5_sh0ss_1470", by = "_xxOffset6_sh0ss_1475", xy = "_xxOffset7_sh0ss_1480", vy = "_xxOffset8_sh0ss_1485", wy = "_xxOffset9_sh0ss_1490", ky = "_xxOffset10_sh0ss_1495", Ny = "_xxOffset11_sh0ss_1501", $y = "_xxOffset12_sh0ss_1507", Sy = "_xxOrderFirst_sh0ss_1513", Oy = "_xxOrderLast_sh0ss_1516", Ey = "_xxOrder0_sh0ss_1519", Ty = "_xxOrder1_sh0ss_1522", Cy = "_xxOrder2_sh0ss_1525", My = "_xxOrder3_sh0ss_1528", Ay = "_xxOrder4_sh0ss_1531", Dy = "_xxOrder5_sh0ss_1534", Iy = "_xxOrder6_sh0ss_1537", Ly = "_xxOrder7_sh0ss_1540", zy = "_xxOrder8_sh0ss_1543", Py = "_xxOrder9_sh0ss_1546", Ry = "_xxOrder10_sh0ss_1549", jy = "_xxOrder11_sh0ss_1552", By = "_xxOrder12_sh0ss_1555", uo = {
  column: C_,
  Size1: M_,
  Size2: A_,
  Size3: D_,
  Size4: I_,
  Size5: L_,
  Size6: z_,
  Size7: P_,
  Size8: R_,
  Size9: j_,
  Size10: B_,
  Size11: F_,
  Size12: H_,
  Offset0: U_,
  Offset1: W_,
  Offset2: q_,
  Offset3: K_,
  Offset4: G_,
  Offset5: V_,
  Offset6: Y_,
  Offset7: X_,
  Offset8: Z_,
  Offset9: J_,
  Offset10: Q_,
  Offset11: eh,
  Offset12: th,
  OrderFirst: nh,
  OrderLast: rh,
  Order0: oh,
  Order1: sh,
  Order2: ah,
  Order3: lh,
  Order4: ih,
  Order5: ch,
  Order6: dh,
  Order7: uh,
  Order8: fh,
  Order9: ph,
  Order10: _h,
  Order11: hh,
  Order12: mh,
  xsSize1: gh,
  xsSize2: yh,
  xsSize3: bh,
  xsSize4: xh,
  xsSize5: vh,
  xsSize6: wh,
  xsSize7: kh,
  xsSize8: Nh,
  xsSize9: $h,
  xsSize10: Sh,
  xsSize11: Oh,
  xsSize12: Eh,
  xsOffset0: Th,
  xsOffset1: Ch,
  xsOffset2: Mh,
  xsOffset3: Ah,
  xsOffset4: Dh,
  xsOffset5: Ih,
  xsOffset6: Lh,
  xsOffset7: zh,
  xsOffset8: Ph,
  xsOffset9: Rh,
  xsOffset10: jh,
  xsOffset11: Bh,
  xsOffset12: Fh,
  xsOrderFirst: Hh,
  xsOrderLast: Uh,
  xsOrder0: Wh,
  xsOrder1: qh,
  xsOrder2: Kh,
  xsOrder3: Gh,
  xsOrder4: Vh,
  xsOrder5: Yh,
  xsOrder6: Xh,
  xsOrder7: Zh,
  xsOrder8: Jh,
  xsOrder9: Qh,
  xsOrder10: em,
  xsOrder11: tm,
  xsOrder12: nm,
  smSize1: rm,
  smSize2: om,
  smSize3: sm,
  smSize4: am,
  smSize5: lm,
  smSize6: im,
  smSize7: cm,
  smSize8: dm,
  smSize9: um,
  smSize10: fm,
  smSize11: pm,
  smSize12: _m,
  smOffset0: hm,
  smOffset1: mm,
  smOffset2: gm,
  smOffset3: ym,
  smOffset4: bm,
  smOffset5: xm,
  smOffset6: vm,
  smOffset7: wm,
  smOffset8: km,
  smOffset9: Nm,
  smOffset10: $m,
  smOffset11: Sm,
  smOffset12: Om,
  smOrderFirst: Em,
  smOrderLast: Tm,
  smOrder0: Cm,
  smOrder1: Mm,
  smOrder2: Am,
  smOrder3: Dm,
  smOrder4: Im,
  smOrder5: Lm,
  smOrder6: zm,
  smOrder7: Pm,
  smOrder8: Rm,
  smOrder9: jm,
  smOrder10: Bm,
  smOrder11: Fm,
  smOrder12: Hm,
  mdSize1: Um,
  mdSize2: Wm,
  mdSize3: qm,
  mdSize4: Km,
  mdSize5: Gm,
  mdSize6: Vm,
  mdSize7: Ym,
  mdSize8: Xm,
  mdSize9: Zm,
  mdSize10: Jm,
  mdSize11: Qm,
  mdSize12: e1,
  mdOffset0: t1,
  mdOffset1: n1,
  mdOffset2: r1,
  mdOffset3: o1,
  mdOffset4: s1,
  mdOffset5: a1,
  mdOffset6: l1,
  mdOffset7: i1,
  mdOffset8: c1,
  mdOffset9: d1,
  mdOffset10: u1,
  mdOffset11: f1,
  mdOffset12: p1,
  mdOrderFirst: _1,
  mdOrderLast: h1,
  mdOrder0: m1,
  mdOrder1: g1,
  mdOrder2: y1,
  mdOrder3: b1,
  mdOrder4: x1,
  mdOrder5: v1,
  mdOrder6: w1,
  mdOrder7: k1,
  mdOrder8: N1,
  mdOrder9: $1,
  mdOrder10: S1,
  mdOrder11: O1,
  mdOrder12: E1,
  lgSize1: T1,
  lgSize2: C1,
  lgSize3: M1,
  lgSize4: A1,
  lgSize5: D1,
  lgSize6: I1,
  lgSize7: L1,
  lgSize8: z1,
  lgSize9: P1,
  lgSize10: R1,
  lgSize11: j1,
  lgSize12: B1,
  lgOffset0: F1,
  lgOffset1: H1,
  lgOffset2: U1,
  lgOffset3: W1,
  lgOffset4: q1,
  lgOffset5: K1,
  lgOffset6: G1,
  lgOffset7: V1,
  lgOffset8: Y1,
  lgOffset9: X1,
  lgOffset10: Z1,
  lgOffset11: J1,
  lgOffset12: Q1,
  lgOrderFirst: eg,
  lgOrderLast: tg,
  lgOrder0: ng,
  lgOrder1: rg,
  lgOrder2: og,
  lgOrder3: sg,
  lgOrder4: ag,
  lgOrder5: lg,
  lgOrder6: ig,
  lgOrder7: cg,
  lgOrder8: dg,
  lgOrder9: ug,
  lgOrder10: fg,
  lgOrder11: pg,
  lgOrder12: _g,
  xlSize1: hg,
  xlSize2: mg,
  xlSize3: gg,
  xlSize4: yg,
  xlSize5: bg,
  xlSize6: xg,
  xlSize7: vg,
  xlSize8: wg,
  xlSize9: kg,
  xlSize10: Ng,
  xlSize11: $g,
  xlSize12: Sg,
  xlOffset0: Og,
  xlOffset1: Eg,
  xlOffset2: Tg,
  xlOffset3: Cg,
  xlOffset4: Mg,
  xlOffset5: Ag,
  xlOffset6: Dg,
  xlOffset7: Ig,
  xlOffset8: Lg,
  xlOffset9: zg,
  xlOffset10: Pg,
  xlOffset11: Rg,
  xlOffset12: jg,
  xlOrderFirst: Bg,
  xlOrderLast: Fg,
  xlOrder0: Hg,
  xlOrder1: Ug,
  xlOrder2: Wg,
  xlOrder3: qg,
  xlOrder4: Kg,
  xlOrder5: Gg,
  xlOrder6: Vg,
  xlOrder7: Yg,
  xlOrder8: Xg,
  xlOrder9: Zg,
  xlOrder10: Jg,
  xlOrder11: Qg,
  xlOrder12: ey,
  xxSize1: ty,
  xxSize2: ny,
  xxSize3: ry,
  xxSize4: oy,
  xxSize5: sy,
  xxSize6: ay,
  xxSize7: ly,
  xxSize8: iy,
  xxSize9: cy,
  xxSize10: dy,
  xxSize11: uy,
  xxSize12: fy,
  xxOffset0: py,
  xxOffset1: _y,
  xxOffset2: hy,
  xxOffset3: my,
  xxOffset4: gy,
  xxOffset5: yy,
  xxOffset6: by,
  xxOffset7: xy,
  xxOffset8: vy,
  xxOffset9: wy,
  xxOffset10: ky,
  xxOffset11: Ny,
  xxOffset12: $y,
  xxOrderFirst: Sy,
  xxOrderLast: Oy,
  xxOrder0: Ey,
  xxOrder1: Ty,
  xxOrder2: Cy,
  xxOrder3: My,
  xxOrder4: Ay,
  xxOrder5: Dy,
  xxOrder6: Iy,
  xxOrder7: Ly,
  xxOrder8: zy,
  xxOrder9: Py,
  xxOrder10: Ry,
  xxOrder11: jy,
  xxOrder12: By
}, Fy = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Hy(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Uy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Wy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function qy(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Wy(n, t), `${e}Order${t}`);
}
function _S({ className: e, style: t, ...n }) {
  const r = [uo.column], a = { ...t };
  for (const [A, M, k, w] of Fy) {
    const O = n[M], z = n[k], L = n[w];
    if (O != null) {
      Hy(M, O);
      const P = uo[`${A}Size${O}`];
      P && r.push(P);
    }
    if (z != null) {
      Uy(k, z);
      const P = uo[`${A}Offset${z}`];
      P && r.push(P);
    }
    if (L != null) {
      const P = uo[qy(A, L, w)];
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
    offsetMd: y,
    sizeLg: m,
    offsetLg: g,
    sizeXl: _,
    offsetXl: b,
    sizeXx: h,
    offsetXx: p,
    order: x,
    orderXs: N,
    orderSm: v,
    orderMd: C,
    orderLg: $,
    orderXl: E,
    orderXx: T,
    ...I
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: a,
      ...I
    }
  );
}
const Ky = "_stack_bmbbp_1", jr = {
  stack: Ky,
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
function hS({
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
    ...r != null ? { gap: vo(r) } : {},
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
const Gy = "_autogrid_16x9f_1", Vy = {
  autogrid: Gy
};
function mS({
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
    ...t != null ? { gap: vo(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Vy.autogrid, n].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const Yy = "_layout_fxvw1_1", Xy = "_row_fxvw1_7", Zy = "_grid_fxvw1_21", Jy = "_gridRight_fxvw1_27", Qy = "_gridHeader_fxvw1_31", e0 = "_gridFooter_fxvw1_36", t0 = "_gridContents_fxvw1_41", n0 = "_gridBody_fxvw1_45", An = {
  layout: Yy,
  row: Xy,
  grid: Zy,
  gridRight: Jy,
  gridHeader: Qy,
  gridFooter: e0,
  gridContents: t0,
  gridBody: n0
}, r0 = "_footer_3be5w_1", o0 = "_sticky_3be5w_9", sa = {
  footer: r0,
  sticky: o0
};
function s0({
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
const a0 = "_header_1tw8b_1", l0 = "_sticky_1tw8b_9", aa = {
  header: a0,
  sticky: l0
};
function i0({
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
const c0 = "_sidebar_175d5_1", d0 = "_sticky_175d5_23", u0 = "_left_175d5_41", f0 = "_right_175d5_45", p0 = "_start_175d5_50", _0 = "_end_175d5_54", h0 = "_fullHeight_175d5_60", m0 = "_collapsed_175d5_64", g0 = "_responsive_175d5_72", y0 = "_overlay_175d5_80", b0 = "_mask_175d5_108", Gn = {
  sidebar: c0,
  sticky: d0,
  left: u0,
  right: f0,
  start: p0,
  end: _0,
  fullHeight: h0,
  collapsed: m0,
  responsive: g0,
  overlay: y0,
  mask: b0
};
function x0({
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
  }, [r, t, c]), /* @__PURE__ */ D(ot, { children: [
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
function gS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(ot, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], s = [], l = [], d = [];
  Jr.forEach(n, (y) => {
    if (!qt(y)) {
      c.push(y);
      return;
    }
    if (y.type === i0)
      a.push(y);
    else if (y.type === s0)
      i.push(y);
    else if (y.type === x0) {
      const m = y, g = m.props.position;
      d.push(m), (g === "right" || g === "end" ? l : s).push(m);
    } else
      c.push(y);
  });
  const u = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const y = f ? l : s;
    return /* @__PURE__ */ D(
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
          /* @__PURE__ */ D("div", { className: An.gridContents, children: [
            y,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: An.gridFooter, children: i })
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
        a,
        /* @__PURE__ */ D("div", { className: An.row, children: [
          s,
          c,
          l
        ] }),
        i
      ]
    }
  );
}
const v0 = "_body_1ge00_4", w0 = "_bare_1ge00_12", la = {
  body: v0,
  bare: w0
};
function yS({
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
const k0 = "_toggle_lxnk5_1", N0 = {
  toggle: k0
};
function bS({
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
      className: [N0.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ o(Ie, { icon: e, size: 20 })
    }
  );
}
const $0 = "_track_14127_1", S0 = "_bar_14127_31", O0 = "_primary_14127_39", E0 = "_success_14127_43", T0 = "_warning_14127_47", C0 = "_danger_14127_51", M0 = "_indeterminate_14127_149", A0 = "_circular_14127_163", D0 = "_fill_14127_203", rn = {
  track: $0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: S0,
  primary: O0,
  success: E0,
  warning: T0,
  danger: C0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: M0,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: A0,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: D0,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function xS({
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
    const m = typeof c == "string", g = 2, _ = 10.5, b = 2 * Math.PI * _, h = b * (a ? 0.75 : 1), p = a ? 0 : b * (1 - f / 100), x = Xr(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: m ? void 0 : c,
        height: m ? void 0 : c,
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
          x ? rn[x] : null,
          m ? rn[`circular-${c}`] : null,
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
              strokeWidth: g
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: rn.fill,
              cx: 12,
              cy: 12,
              r: _,
              strokeWidth: g,
              strokeDasharray: `${h} ${b}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const y = Xr(r);
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
        y ? rn[y] : null,
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
function I0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function ds(e) {
  const [t, n] = W(() => I0(e));
  return Oe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const L0 = "_pressed_12x15_8", z0 = {
  pressed: L0
}, P0 = at(
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
    variant: y,
    severity: m,
    shade: g,
    ..._
  }, b) {
    const [h, p] = W(n), x = t ?? h, N = (v) => {
      const C = !x;
      t === void 0 && p(C), r?.(C), u?.(v);
    };
    return /* @__PURE__ */ o(
      cn,
      {
        ..._,
        ref: b,
        variant: x && a ? a : y,
        severity: x ? i : m,
        shade: x ? c : g,
        size: l,
        "aria-pressed": x,
        className: [x ? z0.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: x && s !== void 0 ? s : f
      }
    );
  }
), Ua = "dx-theme";
function R0(e) {
  const t = e === void 0 ? Ua : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function j0(e, t) {
  const n = e === void 0 ? Ua : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function vS({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = ds("(prefers-color-scheme: dark)"), [d, u] = W(void 0), f = e !== void 0, y = e ?? d ?? R0(n) ?? t ?? "system", m = y === "system" ? l ? "dark" : "light" : y;
  return Oe(() => {
    if (!f) {
      if (y === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = y;
    }
  }, [y, f]), /* @__PURE__ */ o(
    P0,
    {
      id: i,
      size: s,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: m === "dark",
      onChange: (_) => {
        const b = _ ? "dark" : "light";
        f || (u(b), j0(n, b)), r?.(b);
      },
      toggleContent: /* @__PURE__ */ o(Ie, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Ie, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Wa = "dx-palette", qa = "dx-theme", Xo = "data-palette", Zo = "data-theme", Jo = /* @__PURE__ */ new Set();
function B0() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Xo), t = document.documentElement.getAttribute(Zo);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function us(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Xo) : document.documentElement.setAttribute(Xo, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Zo) : document.documentElement.setAttribute(Zo, e.appearance));
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
  const e = B0();
  if (!ca) {
    ca = !0;
    const t = ia(Wa), n = ia(qa), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && us(a), a;
  }
  return e;
}
function Ga() {
  const e = $r();
  Jo.forEach((t) => t({ ...e }));
}
function da(e) {
  return Jo.add(e), () => {
    Jo.delete(e);
  };
}
function wS() {
  return $r().theme;
}
function F0(e) {
  const t = $r();
  t.theme !== e && (t.theme = e, us(t), Ka(Wa, e), Ga());
}
function kS() {
  return $r().appearance;
}
function H0(e) {
  const t = $r();
  t.appearance !== e && (t.appearance = e, us(t), Ka(qa, e), Ga());
}
function NS() {
  const [, e] = W(0);
  Oe(() => da(() => e((n) => n + 1)), []);
  const t = $r();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: F0,
    setAppearance: H0,
    subscribe: da
  };
}
function U0(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (_, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), l = (_, b) => _ + b | 0, d = (_, b) => _ << b | _ >>> 32 - b;
  let u = 1732584193, f = 4023233417, y = 2562383102, m = 271733878;
  for (let _ = 0; _ < r; _ += 64) {
    const b = [];
    for (let v = 0; v < 16; v += 1)
      b.push(i.getUint32(_ + v * 4, !0));
    let h = u, p = f, x = y, N = m;
    for (let v = 0; v < 64; v += 1) {
      let C, $;
      v < 16 ? (C = p & x | ~p & N, $ = v) : v < 32 ? (C = N & p | ~N & x, $ = (5 * v + 1) % 16) : v < 48 ? (C = p ^ x ^ N, $ = (3 * v + 5) % 16) : (C = x ^ (p | ~N), $ = 7 * v % 16), C = l(l(l(C, h), s[v]), b[$]), h = N, N = x, x = p, p = l(p, d(C, c[Math.floor(v / 16) * 4 + v % 4]));
    }
    u = l(u, h), f = l(f, p), y = l(y, x), m = l(m, N);
  }
  const g = (_) => {
    let b = "";
    for (let h = 0; h < 4; h += 1)
      b += `0${(_ >>> h * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return g(u) + g(f) + g(y) + g(m);
}
const W0 = "_avatar_1mhfr_1", q0 = "_xs_1mhfr_12", K0 = "_sm_1mhfr_18", G0 = "_md_1mhfr_24", V0 = "_lg_1mhfr_30", Y0 = "_xl_1mhfr_36", X0 = "_initials_1mhfr_42", Z0 = "_image_1mhfr_57", J0 = "_status_1mhfr_64", Q0 = "_online_1mhfr_84", eb = "_offline_1mhfr_88", tb = "_away_1mhfr_92", _r = {
  avatar: W0,
  xs: q0,
  sm: K0,
  md: G0,
  lg: V0,
  xl: Y0,
  initials: X0,
  image: Z0,
  status: J0,
  online: Q0,
  offline: eb,
  away: tb
}, nb = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, yo = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function rb(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ob(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return yo[t % yo.length] ?? yo[0];
}
function $S({
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
  const d = Ne(() => e ? rb(e) : "?", [e]), u = Ne(() => e ? ob(e) : yo[0], [e]), f = Ne(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${U0(N)}?d=${r}&s=${nb[c]}&r=${a}`;
  }, [t, n, r, a, c]), y = t ?? f, [m, g] = W(null), _ = y != null && m !== y, b = _ && i === "", h = i ?? e ?? "avatar", p = s ? `${h}, ${s}` : h, x = _ ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: y,
        alt: b ? "" : s ? p : h,
        onError: () => g(y ?? null)
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
  return /* @__PURE__ */ D(
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
        x,
        s && /* @__PURE__ */ o("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const sb = "_root_zzwfz_1", ab = "_left_zzwfz_6", lb = "_right_zzwfz_7", ib = "_panel_zzwfz_12", cb = "_bottom_zzwfz_20", db = "_tabList_zzwfz_24", ub = "_underline_zzwfz_53", fb = "_pills_zzwfz_72", pb = "_tab_zzwfz_24", _b = "_active_zzwfz_113", hb = "_disabled_zzwfz_139", Dn = {
  root: sb,
  left: ab,
  right: lb,
  panel: ib,
  bottom: cb,
  tabList: db,
  underline: ub,
  pills: fb,
  tab: pb,
  active: _b,
  disabled: hb
};
function SS({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c
}) {
  const s = ct(), l = ae(null), [d, u] = W(
    n ?? e[0]?.key ?? ""
  ), f = t ?? d, y = i === "left" || i === "right", m = (b) => {
    u(b), r?.(b);
  }, g = (b) => {
    const h = e.filter((N) => !N.disabled), p = h.findIndex((N) => N.key === f);
    let x = -1;
    b.key === "ArrowRight" || y && b.key === "ArrowDown" ? x = (p + 1) % h.length : b.key === "ArrowLeft" || y && b.key === "ArrowUp" ? x = (p - 1 + h.length) % h.length : b.key === "Home" ? x = 0 : b.key === "End" && (x = h.length - 1), x >= 0 && (b.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[x]?.key ?? "")}"]`
    )?.focus(), m(h[x]?.key ?? ""));
  }, _ = e.find((b) => b.key === f);
  return /* @__PURE__ */ D(
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
            onKeyDown: g,
            children: e.map((b) => {
              const h = b.key === f;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${b.key}`,
                  "data-tab-key": b.key,
                  "aria-selected": h,
                  "aria-controls": `${s}-panel-${b.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: b.disabled,
                  className: [
                    Dn.tab,
                    h ? Dn.active : null,
                    b.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => m(b.key),
                  children: b.label
                },
                b.key
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
const mb = "_root_1l1j2_1", gb = "_item_1l1j2_9", yb = "_heading_1l1j2_13", bb = "_trigger_1l1j2_17", xb = "_disabled_1l1j2_34", vb = "_title_1l1j2_48", wb = "_chevron_1l1j2_52", kb = "_open_1l1j2_59", Nb = "_content_1l1j2_63", In = {
  root: mb,
  item: gb,
  heading: yb,
  trigger: bb,
  disabled: xb,
  title: vb,
  chevron: wb,
  open: kb,
  content: Nb
};
function OS({
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
    const y = d.includes(f) ? d.filter((m) => m !== f) : t ? [...d, f] : [f];
    l(y), a?.(y);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((f) => {
    const y = d.includes(f.key), m = `${c}-panel-${f.key}`, g = `${c}-trigger-${f.key}`;
    return /* @__PURE__ */ D("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: g,
          "aria-expanded": y,
          "aria-controls": m,
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
                className: [In.chevron, y ? In.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: 12 })
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
          "aria-labelledby": g,
          hidden: !y,
          className: In.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const $b = "_textarea_l7fsl_1", Sb = "_invalid_l7fsl_27", Ob = "_xs_l7fsl_34", Eb = "_sm_l7fsl_39", Tb = "_md_l7fsl_44", Cb = "_lg_l7fsl_49", Mb = "_xl_l7fsl_54", fo = {
  textarea: $b,
  invalid: Sb,
  xs: Ob,
  sm: Eb,
  md: Tb,
  lg: Cb,
  xl: Mb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, ES = at(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: a, ...i }, c) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: c,
        "data-size": t,
        className: [
          fo.textarea,
          fo[t],
          fo[`resize-${n}`],
          r ? fo.invalid : null,
          a
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), Ab = "_root_xyp2i_1", Db = "_trigger_xyp2i_9", Ib = "_invalid_xyp2i_40", Lb = "_placeholder_xyp2i_47", zb = "_label_xyp2i_54", Pb = "_chevron_xyp2i_60", Rb = "_chevronOpen_xyp2i_70", jb = "_menu_xyp2i_74", Bb = "_option_xyp2i_89", Fb = "_disabled_xyp2i_100", Hb = "_active_xyp2i_104", Ub = "_selected_xyp2i_105", Wb = "_header_xyp2i_115", qb = "_xs_xyp2i_122", Kb = "_sm_xyp2i_128", Gb = "_md_xyp2i_134", Vb = "_lg_xyp2i_140", Yb = "_xl_xyp2i_146", Ut = {
  root: Ab,
  trigger: Db,
  invalid: Ib,
  placeholder: Lb,
  label: zb,
  chevron: Pb,
  chevronOpen: Rb,
  menu: jb,
  option: Bb,
  disabled: Fb,
  active: Hb,
  selected: Ub,
  header: Wb,
  xs: qb,
  sm: Kb,
  md: Gb,
  lg: Vb,
  xl: Yb
}, Xb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function TS({
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
  const u = ct(), f = `${u}-listbox`, y = ae(null), m = ae(null), [g, _] = W(
    n
  ), [b, h] = W(!1), p = t ?? g, x = e.map(
    (k, w) => k.label === "" || k.disabled ? -1 : w
  ).filter((k) => k >= 0), N = e.findIndex(
    (k) => k.value === p
  ), [v, C] = W(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), $ = H(() => {
    if (s) return;
    const k = N >= 0 && x.includes(N) ? N : x[0];
    C(k ?? -1), h(!0);
  }, [s, N, x]), E = H(() => {
    h(!1), m.current?.focus();
  }, []);
  Oe(() => {
    if (!b) return;
    const k = (w) => {
      y.current && !y.current.contains(w.target) && h(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [b]);
  const T = (k) => {
    _(k), r?.(k), h(!1), m.current?.focus();
  }, I = (k) => {
    if (x.length === 0) return;
    const w = x.includes(v) ? x.indexOf(v) : 0, O = x[(w + k + x.length) % x.length];
    O != null && C(O);
  }, A = (k) => {
    if (!b) {
      k.key === "ArrowDown" && (k.preventDefault(), $());
      return;
    }
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), I(1);
        break;
      case "ArrowUp":
        k.preventDefault(), I(-1);
        break;
      case "Home":
        k.preventDefault(), x[0] != null && C(x[0]);
        break;
      case "End":
        k.preventDefault(), x[x.length - 1] != null && C(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), v >= 0 && e[v] && x.includes(v) && T(e[v]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), E();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, M = e.find(
    (k) => k.value === p
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- delegates keyboard handling to the trigger and popup; the root has no click semantics of its own
    /* @__PURE__ */ D(
      "div",
      {
        ref: y,
        className: [Ut.root, l].filter(Boolean).join(" "),
        onKeyDown: A,
        children: [
          /* @__PURE__ */ D(
            "button",
            {
              ref: m,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": b,
              "aria-controls": f,
              "aria-invalid": c || void 0,
              disabled: s,
              className: [
                Ut.trigger,
                Ut[i],
                b ? Ut.open : null,
                c ? Ut.invalid : null
              ].filter(Boolean).join(" "),
              onClick: () => b ? h(!1) : $(),
              ...d,
              children: [
                /* @__PURE__ */ o("span", { className: M ? Ut.label : Ut.placeholder, children: M ? M.label : a }),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: [Ut.chevron, b ? Ut.chevronOpen : null].filter(Boolean).join(" "),
                    style: { backgroundImage: Xb },
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          b && /* @__PURE__ */ o(
            "div",
            {
              id: f,
              role: "listbox",
              "aria-activedescendant": v >= 0 ? `${u}-option-${v}` : void 0,
              tabIndex: -1,
              className: Ut.menu,
              children: e.map(
                (k, w) => k.label === "" ? /* @__PURE__ */ o(
                  "div",
                  {
                    className: Ut.header,
                    role: "presentation",
                    children: k.value
                  },
                  k.value
                ) : (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option via the root keydown handler
                  /* @__PURE__ */ o(
                    "div",
                    {
                      id: `${u}-option-${w}`,
                      role: "option",
                      tabIndex: -1,
                      "aria-selected": k.value === p,
                      "aria-disabled": k.disabled || void 0,
                      className: [
                        Ut.option,
                        w === v ? Ut.active : null,
                        k.value === p ? Ut.selected : null,
                        k.disabled ? Ut.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => {
                        k.disabled || T(k.value);
                      },
                      onMouseEnter: () => {
                        !k.disabled && k.label !== "" && C(w);
                      },
                      children: k.label
                    },
                    k.value
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
const Zb = "_root_1ma8a_1", Jb = "_wrap_1ma8a_9", Qb = "_input_1ma8a_26", ex = "_invalid_1ma8a_31", tx = "_clear_1ma8a_58", nx = "_menu_1ma8a_83", rx = "_option_1ma8a_98", ox = "_disabled_1ma8a_109", sx = "_active_1ma8a_113", ax = "_empty_1ma8a_123", lx = "_xs_1ma8a_129", ix = "_sm_1ma8a_136", cx = "_md_1ma8a_143", dx = "_lg_1ma8a_150", ux = "_xl_1ma8a_157", fn = {
  root: Zb,
  wrap: Jb,
  input: Qb,
  invalid: ex,
  clear: tx,
  menu: nx,
  option: rx,
  disabled: ox,
  active: sx,
  empty: ax,
  xs: lx,
  sm: ix,
  md: cx,
  lg: dx,
  xl: ux
}, fx = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function CS({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: c = "md",
  invalid: s = !1,
  disabled: l = !1,
  filter: d = fx,
  className: u,
  ...f
}) {
  const y = ct(), m = `${y}-listbox`, g = ae(null), _ = ae(null), [b, h] = W(n), [p, x] = W(!1), N = t ?? b, v = Ne(
    () => N.trim() === "" ? [...e] : e.filter((L) => d(L, N)),
    [e, N, d]
  ), C = v.map((L, P) => L.disabled ? -1 : P).filter((L) => L >= 0), [$, E] = W(-1), T = (L) => {
    h(L), r?.(L);
  }, I = (L) => {
    T(L.label), a?.(L.value, L), x(!1);
  }, A = (L) => {
    if (C.length === 0) return;
    const P = C.includes($) ? C.indexOf($) : L === 1 ? -1 : 0, j = C[(P + L + C.length) % C.length];
    j != null && E(j);
  }, M = (L) => {
    l || (T(L.target.value), x(!0), E(-1));
  }, k = () => {
    l || N !== "" && x(!0);
  }, w = (L) => {
    g.current && !g.current.contains(L.relatedTarget) && x(!1);
  }, O = (L) => {
    if (!l)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), p ? A(1) : (x(!0), E(C[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), p && A(-1);
          break;
        case "Enter":
          L.preventDefault(), p && $ >= 0 && v[$] && I(v[$]);
          break;
        case "Escape":
          L.preventDefault(), x(!1);
          break;
        case "Tab":
          p && $ >= 0 && v[$] && I(v[$]), x(!1);
          break;
      }
  }, z = () => {
    T(""), E(-1), x(!0), _.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: g,
      className: [fn.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
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
                  "aria-controls": m,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && $ >= 0 ? `${y}-option-${$}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: N,
                  placeholder: i,
                  className: fn.input,
                  onChange: M,
                  onFocus: k,
                  onBlur: w,
                  onKeyDown: O,
                  ...f
                }
              ),
              N !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: fn.clear,
                  "aria-label": "Clear",
                  onClick: z,
                  children: /* @__PURE__ */ o(Ie, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: m, className: fn.menu, children: /* @__PURE__ */ o("div", { className: fn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: fn.menu, children: v.map((L, P) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option through the input's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${y}-option-${P}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": !1,
              "aria-disabled": L.disabled || void 0,
              className: [
                fn.option,
                P === $ ? fn.active : null,
                L.disabled ? fn.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                L.disabled || I(L);
              },
              onMouseDown: (j) => {
                j.preventDefault(), L.disabled || I(L);
              },
              onMouseEnter: () => {
                L.disabled || E(P);
              },
              children: L.label
            },
            L.value
          )
        )) }))
      ]
    }
  );
}
const px = "_box_muvqe_1", _x = "_option_muvqe_12", hx = "_disabled_muvqe_23", mx = "_selected_muvqe_27", gx = "_active_muvqe_33", Br = {
  box: px,
  option: _x,
  disabled: hx,
  selected: mx,
  active: gx
};
function MS({
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
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), f = t == null ? d : Array.isArray(t) ? t : [t], y = e.findIndex((v) => !v.disabled), [m, g] = W(
    () => y >= 0 ? y : 0
  ), _ = ae(""), b = ae(null), h = (v) => {
    u(v), a?.(r ? v : v[0] ?? "");
  }, p = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), x = (v) => {
    const C = e[v];
    if (!(!C || C.disabled))
      if (g(v), r) {
        const $ = f.includes(C.value) ? f.filter((E) => E !== C.value) : [...f, C.value];
        h($);
      } else
        h([C.value]);
  }, N = (v) => {
    if (p.length === 0) return;
    const C = p.includes(m) ? m : p[0];
    let $ = -1;
    if (v.key === "ArrowDown")
      $ = p[(p.indexOf(C) + 1) % p.length];
    else if (v.key === "ArrowUp")
      $ = p[(p.indexOf(C) - 1 + p.length) % p.length];
    else if (v.key === "Home")
      $ = p[0];
    else if (v.key === "End")
      $ = p[p.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), x(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const E = (_.current + v.key).toLowerCase();
      _.current = E, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        _.current = "";
      }, 500);
      const T = [...p, ...p], I = p.indexOf(C) + 1, A = T.slice(I).find((M) => e[M]?.label.toLowerCase().startsWith(E));
      A != null && g(A);
      return;
    }
    $ >= 0 && (v.preventDefault(), g($), r || h([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[m] ? `${l}-option-${m}` : void 0,
      style: c,
      className: [Br.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...s,
      children: e.map((v, C) => {
        const $ = f.includes(v.value), E = C === m;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${l}-option-${C}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": $,
              "aria-disabled": v.disabled || void 0,
              className: [
                Br.option,
                $ ? Br.selected : null,
                E ? Br.active : null,
                v.disabled ? Br.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => x(C),
              children: v.label
            },
            v.value
          )
        );
      })
    }
  );
}
const yx = "_group_oinj7_1", bx = "_legend_oinj7_8", xx = "_list_oinj7_16", vx = "_item_oinj7_25", wx = "_disabled_oinj7_32", kx = "_label_oinj7_37", Nx = "_checkbox_oinj7_48", tr = {
  group: yx,
  legend: bx,
  list: xx,
  item: vx,
  disabled: wx,
  label: kx,
  checkbox: Nx
};
function AS({
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
  ]), d = t ?? s, u = (f, y) => {
    const m = y ? [...d, f] : d.filter((g) => g !== f);
    l(m), r?.(m);
  };
  return /* @__PURE__ */ D("fieldset", { className: [tr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: tr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: tr.list, children: e.map((f) => {
      const y = d.includes(f.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [tr.item, f.disabled ? tr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: tr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: tr.checkbox,
                name: i,
                value: f.value,
                checked: y,
                disabled: f.disabled,
                onChange: (m) => u(f.value, m.target.checked)
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
const $x = "_group_46668_1", Sx = "_legend_46668_8", Ox = "_list_46668_16", Ex = "_item_46668_25", Tx = "_disabled_46668_32", Cx = "_label_46668_37", Mx = "_radio_46668_48", nr = {
  group: $x,
  legend: Sx,
  list: Ox,
  item: Ex,
  disabled: Tx,
  label: Cx,
  radio: Mx
};
function DS({
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
  return /* @__PURE__ */ D("fieldset", { className: [nr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: nr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: nr.list, children: e.map((f) => {
      const y = f.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [nr.item, f.disabled ? nr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: nr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: nr.radio,
                name: i,
                value: f.value,
                checked: y,
                disabled: f.disabled,
                onChange: (m) => u(m.target.value)
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
const Ax = "_bar_9zyxn_1", Dx = "_vertical_9zyxn_12", Ix = "_option_9zyxn_17", Lx = "_selected_9zyxn_40", zx = "_sm_9zyxn_56", Px = "_md_9zyxn_62", Rx = "_lg_9zyxn_68", hr = {
  bar: Ax,
  vertical: Dx,
  option: Ix,
  selected: Lx,
  sm: zx,
  md: Px,
  lg: Rx
};
function ua(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function IS(e) {
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
  } = e, u = a ?? !1, [f, y] = W(r ?? (u ? [] : t[0]?.value)), m = n ?? f, g = a === !0 || a === void 0 && Array.isArray(m), _ = (h) => {
    if (!g) {
      y(h), c?.(h);
      return;
    }
    const p = ua(m), x = p.includes(h) ? p.filter((N) => N !== h) : [...p, h];
    y(x), c?.(x);
  }, b = (h) => g ? ua(m).includes(h) : m === h;
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
      children: t.map((h) => {
        const p = b(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: h.disabled,
            className: [
              hr.option,
              p ? hr.selected : null,
              h.disabled ? hr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => _(h.value),
            children: h.label
          },
          h.value
        );
      })
    }
  );
}
const jx = "_root_11hdr_1", Bx = "_action_11hdr_10", Fx = "_caret_11hdr_15", Hx = "_sm_11hdr_49", Ux = "_md_11hdr_53", Wx = "_lg_11hdr_57", qx = "_fullWidth_11hdr_62", Kx = "_menu_11hdr_70", Gx = "_item_11hdr_83", Vx = "_itemIcon_11hdr_105", Yx = "_disabled_11hdr_110", Xx = "_active_11hdr_114", Zx = "_danger_11hdr_123", vn = {
  root: jx,
  action: Bx,
  caret: Fx,
  sm: Hx,
  md: Ux,
  lg: Wx,
  fullWidth: qx,
  menu: Kx,
  item: Gx,
  itemIcon: Vx,
  disabled: Yx,
  active: Xx,
  danger: Zx
}, LS = at(
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
    className: y,
    "aria-label": m,
    openAriaLabel: g = "More actions",
    ..._
  }, b) {
    const p = `${ct()}-menu`, x = ae(null), N = ae(null), v = ae([]), [C, $] = W(!1), [E, T] = W(-1), I = f || l, A = Ne(
      () => r.map((j, q) => j.disabled ? -1 : q).filter((j) => j >= 0),
      [r]
    ), M = H(() => {
      I || (T(A[0] ?? -1), $(!0));
    }, [I, A]), k = H(() => {
      $(!1), N.current?.focus();
    }, []);
    Oe(() => {
      if (!C) return;
      const j = (q) => {
        x.current && !x.current.contains(q.target) && $(!1);
      };
      return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
    }, [C]), Oe(() => {
      C && (I || !d) && $(!1);
    }, [C, I, d]);
    const w = ae(C);
    if (Oe(() => {
      const j = w.current;
      if (w.current = C, !C || j) return;
      const q = A.includes(E) ? E : A[0] ?? -1;
      q >= 0 && v.current[q]?.focus();
    }, [C, E, A]), d === !1) return null;
    const O = (j) => {
      const q = r[j];
      !q || q.disabled || (q.onClick?.(), $(!1), N.current?.focus());
    }, z = (j) => {
      if (A.length === 0) return;
      const q = A.includes(E) ? A.indexOf(E) : j === 1 ? -1 : 0, se = A[(q + j + A.length) % A.length];
      se != null && (T(se), v.current[se]?.focus());
    }, L = (j) => {
      const q = j === "first" ? A[0] : A[A.length - 1];
      q != null && (T(q), v.current[q]?.focus());
    }, P = (j) => {
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), z(1);
          break;
        case "ArrowUp":
          j.preventDefault(), z(-1);
          break;
        case "Home":
          j.preventDefault(), L("first");
          break;
        case "End":
          j.preventDefault(), L("last");
          break;
        case "Escape":
          j.preventDefault(), k();
          break;
        case "Tab":
          $(!1);
          break;
      }
    };
    return /* @__PURE__ */ D(
      "div",
      {
        ref: (j) => {
          x.current = j, typeof b == "function" ? b(j) : b && (b.current = j);
        },
        className: [
          vn.root,
          vn[s],
          u ? vn.fullWidth : null,
          y
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
              "aria-label": m,
              onClick: () => {
                C && $(!1), n?.();
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
              disabled: I,
              "aria-haspopup": "menu",
              "aria-expanded": C,
              "aria-controls": p,
              "aria-label": g,
              onClick: () => C ? $(!1) : M(),
              onKeyDown: (j) => {
                !C && (j.key === "ArrowDown" || j.key === "ArrowUp") && (j.preventDefault(), M());
              },
              children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          C && /* @__PURE__ */ o(
            "div",
            {
              id: p,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
              className: vn.menu,
              onKeyDown: P,
              ..._,
              children: r.map((j, q) => /* @__PURE__ */ D(
                "button",
                {
                  ref: (se) => {
                    v.current[q] = se;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: q === E ? 0 : -1,
                  disabled: j.disabled,
                  className: [
                    vn.item,
                    q === E ? vn.active : null,
                    j.danger ? vn.danger : null,
                    j.disabled ? vn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => O(q),
                  onMouseEnter: () => {
                    j.disabled || T(q);
                  },
                  children: [
                    j.icon ? /* @__PURE__ */ o("span", { className: vn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ie, { icon: j.icon, size: 16 }) }) : null,
                    j.label
                  ]
                },
                j.key
              ))
            }
          )
        ]
      }
    );
  }
), Jx = "_mask_rcv90_1", Qx = "_invalid_rcv90_31", ev = "_xs_rcv90_38", tv = "_sm_rcv90_44", nv = "_md_rcv90_50", rv = "_lg_rcv90_56", ov = "_xl_rcv90_62", Ho = {
  mask: Jx,
  invalid: Qx,
  xs: ev,
  sm: tv,
  md: nv,
  lg: rv,
  xl: ov
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
const zS = at(function({
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
  const [f, y] = W(i ?? ""), m = a !== void 0, g = m ? a ?? "" : f, _ = (p) => {
    const x = fa(p, r);
    return m || y(x), c?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (p) => {
        _(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const x = p.currentTarget.selectionStart ?? g.length, N = g[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            p.preventDefault();
            const v = g.replace(/\D/g, "");
            _(fa(v.slice(0, -1), r));
          }
        }
        l?.(p);
      },
      className: [
        Ho.mask,
        Ho[t],
        n ? Ho.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), sv = "_wrapper_12jdf_1", av = "_input_12jdf_8", lv = "_invalid_12jdf_38", iv = "_button_12jdf_45", cv = "_up_12jdf_77", dv = "_down_12jdf_82", uv = "_xs_12jdf_87", fv = "_sm_12jdf_93", pv = "_md_12jdf_99", _v = "_lg_12jdf_105", hv = "_xl_12jdf_111", Vn = {
  wrapper: sv,
  input: av,
  invalid: lv,
  button: iv,
  up: cv,
  down: dv,
  xs: uv,
  sm: fv,
  md: pv,
  lg: _v,
  xl: hv
};
function Qo(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function mv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Va(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function gv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function yv(e, t, n, r, a) {
  const c = Qo(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Va(s, n, r);
}
const PS = at(
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
    decrementLabel: y = "Decrement",
    onBlur: m,
    onKeyDown: g,
    ..._
  }, b) {
    const [h, p] = W(
      c != null ? String(c) : ""
    ), x = i !== void 0, N = x ? i == null ? "" : String(i) : h, v = (A) => {
      x || p(A), s?.(Qo(A));
    }, C = (A) => {
      x || p(String(A)), s?.(A);
    }, $ = (A) => {
      a || C(yv(N, A, l, d, u));
    }, E = (A) => {
      v(mv(A.target.value));
    }, T = (A) => {
      A.key === "ArrowUp" ? (A.preventDefault(), $(1)) : A.key === "ArrowDown" && (A.preventDefault(), $(-1)), g?.(A);
    }, I = (A) => {
      const M = Qo(N);
      M === null ? (x || p(""), s?.(null)) : C(Va(gv(M, l, u), l, d)), m?.(A);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: b,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: a,
            onChange: E,
            onKeyDown: T,
            onBlur: I,
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
            onClick: () => $(1),
            children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.down].join(" "),
            "aria-label": y,
            disabled: a,
            onClick: () => $(-1),
            children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: 14 })
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
}, bv = [
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
function es(e) {
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
function xv({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function vv({ r: e, g: t, b: n }) {
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
function wv(e) {
  const t = es(e);
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
const RS = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = bv,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: u = "md",
  tabIndex: f = 0,
  className: y,
  onChange: m,
  onValueChange: g,
  onOpen: _,
  onClose: b
}) => {
  const h = ae(null), p = ae(null), x = ae(null), N = ae(null), v = ae(null), C = ct(), $ = ae(null), E = Ne(
    () => wv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [T, I] = W(!1), [A, M] = W(null), k = A ?? E, w = Ne(() => vv(k), [k]), O = H(
    (ee) => {
      const Te = pa(ee);
      m?.(Te), g?.(Te);
    },
    [m, g]
  ), z = H(
    (ee, Te) => {
      M(ee), Te && !i && O(ee);
    },
    [i, O]
  ), L = H(() => {
    I(!1), M(null), b?.(), p.current?.focus();
  }, [b]), P = H(() => {
    s || (M(E), I(!0), _?.());
  }, [s, E, _]), j = H(() => {
    T ? L() : P();
  }, [T, L, P]), q = H(
    (ee, Te) => {
      const lt = x.current;
      if (!lt) return w;
      const Le = lt.getBoundingClientRect(), st = an((ee - Le.left) / Le.width, 0, 1), Xe = an(1 - (Te - Le.top) / Le.height, 0, 1);
      return { h: w.h, s: st, v: Xe };
    },
    [w]
  ), se = H(
    (ee, Te) => {
      if (!Te) return 0;
      const lt = Te.getBoundingClientRect();
      return an((ee - lt.left) / lt.width, 0, 1);
    },
    []
  ), le = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), $.current = "sat";
    const Te = q(ee.clientX, ee.clientY);
    z({ ...mr(Te), a: k.a }, !0);
  }, ne = (ee) => {
    if ($.current !== "sat") return;
    ee.preventDefault();
    const Te = q(ee.clientX, ee.clientY);
    z({ ...mr(Te), a: k.a }, !0);
  }, V = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), $.current = "hue";
    const Te = se(ee.clientX, N.current);
    z(
      { ...mr({ ...w, h: Te * 360 }), a: k.a },
      !0
    );
  }, Ee = (ee) => {
    if ($.current !== "hue") return;
    ee.preventDefault();
    const Te = se(ee.clientX, N.current);
    z(
      { ...mr({ ...w, h: Te * 360 }), a: k.a },
      !0
    );
  }, Q = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), $.current = "alpha";
    const Te = se(ee.clientX, v.current);
    z({ ...k, a: Te }, !0);
  }, J = (ee) => {
    if ($.current !== "alpha") return;
    ee.preventDefault();
    const Te = se(ee.clientX, v.current);
    z({ ...k, a: Te }, !0);
  }, X = () => {
    $.current = null;
  }, ue = H(
    (ee, Te) => {
      const lt = {
        h: w.h,
        s: an(w.s + ee, 0, 1),
        v: an(w.v + Te, 0, 1)
      };
      z({ ...mr(lt), a: k.a }, !0);
    },
    [w, k.a, z]
  ), ie = H(
    (ee) => {
      const Te = (w.h + ee + 360) % 360;
      z({ ...mr({ ...w, h: Te }), a: k.a }, !0);
    },
    [w, k.a, z]
  ), xe = H(
    (ee) => {
      z({ ...k, a: an(k.a + ee, 0, 1) }, !0);
    },
    [k, z]
  ), Y = (ee) => {
    switch (ee.key) {
      case "ArrowLeft":
        ee.preventDefault(), ue(-0.05, 0);
        break;
      case "ArrowRight":
        ee.preventDefault(), ue(0.05, 0);
        break;
      case "ArrowUp":
        ee.preventDefault(), ue(0, 0.05);
        break;
      case "ArrowDown":
        ee.preventDefault(), ue(0, -0.05);
        break;
      case "Escape":
        ee.preventDefault(), L();
        break;
    }
  }, $e = (ee, Te) => {
    switch (ee.key) {
      case "ArrowLeft":
        ee.preventDefault(), Te === "hue" ? ie(-6) : xe(-0.05);
        break;
      case "ArrowRight":
        ee.preventDefault(), Te === "hue" ? ie(6) : xe(0.05);
        break;
      case "Escape":
        ee.preventDefault(), L();
        break;
    }
  }, re = (ee, Te) => {
    if (ee === "hex") {
      const Xe = es(Te);
      Xe && z({ ...Xe, a: k.a }, !0);
      return;
    }
    const lt = Te.replace(/[^\d.]/g, ""), Le = Number.parseFloat(lt);
    if (Number.isNaN(Le)) return;
    if (ee === "a") {
      const Xe = lt.includes(".") ? an(Le, 0, 1) : an(Le / 100, 0, 1);
      z({ ...k, a: Xe }, !0);
      return;
    }
    const st = { r: 255, g: 255, b: 255 };
    z(
      { ...k, [ee]: an(Le, 0, st[ee]) },
      !0
    );
  }, Ae = () => {
    A && (O(A), M(null), I(!1), b?.(), p.current?.focus());
  };
  Oe(() => {
    if (!T) return;
    const ee = (Te) => {
      h.current && !h.current.contains(Te.target) && L();
    };
    return document.addEventListener("mousedown", ee), () => document.removeEventListener("mousedown", ee);
  }, [T, L]), Oe(() => {
    if (!T) return;
    const ee = (Te) => {
      Te.key === "Escape" && L();
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [T, L]);
  const ge = u === "xs" ? Pe["dx-colorpicker-trigger-xs"] : u === "sm" ? Pe["dx-colorpicker-trigger-sm"] : u === "lg" ? Pe["dx-colorpicker-trigger-lg"] : u === "xl" ? Pe["dx-colorpicker-trigger-xl"] : Pe["dx-colorpicker-trigger"], qe = pa(k), Je = xv(k), Ge = { x: w.s * 100, y: (1 - w.v) * 100 }, Qe = w.h / 360 * 100, He = k.a * 100, gt = /* @__PURE__ */ D("div", { className: Pe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(w.s * 100),
        "aria-valuetext": `Saturation ${Math.round(w.s * 100)}%, value ${Math.round(w.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Pe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${w.h}, 100%, 50%)`
        },
        onKeyDown: Y,
        onPointerDown: le,
        onPointerMove: ne,
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
        "aria-valuenow": Math.round(w.h),
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
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(He),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Pe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${w.h}, 100%, 50%))`
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
    n && /* @__PURE__ */ D("div", { className: Pe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ D("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Je,
            onChange: (ee) => re("hex", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: k.r,
            onChange: (ee) => re("r", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: k.g,
            onChange: (ee) => re("g", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: k.b,
            onChange: (ee) => re("b", ee.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(k.a * 100),
            onChange: (ee) => re("a", ee.target.value)
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
          const Te = es(ee);
          i ? z({ ...Te, a: k.a }, !1) : (M(null), O({ ...Te, a: k.a }), I(!1), b?.(), p.current?.focus());
        }
      },
      ee
    )) }),
    i && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-ok"],
        onClick: Ae,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      ref: h,
      className: [
        Pe["dx-colorpicker"],
        T ? Pe["dx-colorpicker-open"] : null,
        l ? Pe["dx-colorpicker-invalid"] : null,
        y
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: p,
            type: "button",
            className: [Pe["dx-colorpicker-trigger"], ge].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": T,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: f,
            onClick: j,
            onKeyDown: (ee) => {
              ee.key === "Escape" && T && (ee.preventDefault(), L());
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
              c && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        T && /* @__PURE__ */ o(
          "div",
          {
            id: C,
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
}, kv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Xt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function Nv(e, t) {
  const n = Xt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function ts(e) {
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
function Ln(e, t) {
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
function po(e, t) {
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
}, $v = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Sv = ["y", "M", "d", "H", "m", "s"];
function _o(e, t, n) {
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
    for (const l of $v)
      if (t.startsWith(l, i)) {
        a += ha[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if (Sv.includes(s)) {
      a += ha[s](e, r, n), i += 1;
      continue;
    }
    a += s, i += 1;
  }
  return a;
}
const Ov = [
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
function Ev(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let s = null;
    for (const l of Ov)
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
  const n = ts(e);
  return n || Ev(e, t);
}
function Tv(e, t, n) {
  return t && Xt(e) < Xt(t) ? t : n && Xt(e) > Xt(n) ? n : e;
}
const Cv = ["hour", "minute", "second"];
function ho(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const jS = at(
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
    disabledDates: y,
    locale: m = "en-US",
    onChange: g,
    onValueChange: _,
    onOpen: b,
    onClose: h,
    disabled: p,
    readOnly: x,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: C,
    clearLabel: $,
    tabIndex: E,
    className: T,
    onBlur: I,
    onKeyDown: A,
    ...M
  }, k) {
    const w = ae(null), O = ae(null), z = ae(null), L = ae(null), P = ct(), j = r !== void 0, [q, se] = W(
      () => a != null ? _o(
        Fr(a, i) ?? Yn(),
        i,
        m
      ) : ""
    ), [le, ne] = W(!1), [V, Ee] = W(null), [Q, J] = W(() => {
      const F = r !== void 0 ? r ?? "" : a ?? "";
      if (F) {
        const _e = Fr(F, i);
        if (_e) return _e;
      }
      return Yn();
    }), X = Ne(() => c ? ts(c) : null, [c]), ue = Ne(() => s ? ts(s) : null, [s]), ie = Ne(
      () => new Set(y ?? []),
      [y]
    ), xe = Ne(() => {
      const F = j ? r ?? "" : q;
      return F ? Fr(F, i) : null;
    }, [r, q, j, i]), Y = H(
      (F) => {
        const _e = Xt(F);
        return !!(ie.has(_e) || X && _e < Xt(X) || ue && _e > Xt(ue));
      },
      [ie, X, ue]
    ), $e = H(
      (F) => {
        if (!Y(F)) return F;
        for (let _e = 1; _e <= 366; _e += 1) {
          const Re = Ln(F, _e);
          if (!Y(Re)) return Re;
          const De = Ln(F, -_e);
          if (!Y(De)) return De;
        }
        return F;
      },
      [Y]
    ), re = H(
      (F) => {
        j || se(F ? _o(F, i, m) : "");
        const _e = F ? Nv(F, l) : "";
        g?.(_e), _?.(_e);
      },
      [j, i, m, l, g, _]
    ), Ae = H(
      (F) => {
        O.current = F, typeof k == "function" ? k(F) : k && (k.current = F);
      },
      [k]
    ), ge = H(() => {
      ne(!1), Ee(null), h?.(), f || z.current?.focus();
    }, [f, h]), qe = H(() => {
      if (p) return;
      const F = xe ?? Yn();
      Ee(F), J($e(F)), ne(!0), b?.();
    }, [p, xe, $e, b]), Je = H(() => {
      le ? ge() : qe();
    }, [le, ge, qe]), Ge = H((F) => {
      L.current?.querySelector(
        `[data-date="${Xt(F)}"]`
      )?.focus();
    }, []), Qe = H(
      (F) => {
        if (Y(F)) return;
        const _e = V ?? xe, De = {
          ...l ? {
            hour: _e?.hour ?? 0,
            minute: _e?.minute ?? 0,
            second: _e?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: F.year,
          month: F.month,
          day: F.day
        };
        Ee(De), l || (re(De), ge());
      },
      [Y, V, xe, l, re, ge]
    ), He = H(
      (F, _e) => {
        Ee((Re) => {
          const De = Re ?? xe ?? Yn(), et = Math.min(F === "hour" ? 23 : 59, Math.max(0, De[F] + _e));
          return { ...De, [F]: et };
        });
      },
      [xe]
    ), gt = H(
      (F, _e) => {
        const Re = _e.replace(/\D/g, ""), De = Re === "" ? 0 : Number(Re), It = F === "hour" ? 23 : 59;
        Ee((et) => ({ ...et ?? xe ?? Yn(), [F]: Math.min(It, De) }));
      },
      [xe]
    ), ee = H(() => {
      V && (re(V), ge());
    }, [V, re, ge]), Te = H(() => {
      if (le) return;
      const F = Fr(q, i);
      re(F ? Tv(F, X, ue) : null);
    }, [le, q, i, X, ue, re]), lt = (F) => {
      const _e = F.target.value;
      j || se(_e), le && Ee(null);
    }, Le = (F) => {
      F.key === "Enter" ? (F.preventDefault(), le ? V && (re(V), ge()) : Te()) : F.key === "Escape" ? le && (F.preventDefault(), ge()) : F.key === "ArrowDown" && !le ? (F.preventDefault(), qe()) : F.key === "Tab" && le && ne(!1), A?.(F);
    }, st = (F) => {
      Te(), I?.(F);
    }, Xe = (F) => {
      let _e = null;
      switch (F.key) {
        case "ArrowLeft":
          _e = Ln(Q, -1), F.preventDefault();
          break;
        case "ArrowRight":
          _e = Ln(Q, 1), F.preventDefault();
          break;
        case "ArrowUp":
          _e = Ln(Q, -7), F.preventDefault();
          break;
        case "ArrowDown":
          _e = Ln(Q, 7), F.preventDefault();
          break;
        case "Home":
          _e = Ln(Q, -_a(Q)), F.preventDefault();
          break;
        case "End":
          _e = Ln(Q, 6 - _a(Q)), F.preventDefault();
          break;
        case "PageUp":
          _e = po(Q, F.shiftKey ? -12 : -1), F.preventDefault();
          break;
        case "PageDown":
          _e = po(Q, F.shiftKey ? 12 : 1), F.preventDefault();
          break;
        case "Enter":
        case " ":
          F.preventDefault(), Qe(Q);
          break;
        case "Escape":
          F.preventDefault(), ge();
          break;
        case "Tab":
          ne(!1);
          break;
      }
      if (_e) {
        const Re = $e(_e);
        J(Re), setTimeout(() => Ge(Re), 0);
      }
    };
    Oe(() => {
      if (!le) return;
      const F = (_e) => {
        w.current && !w.current.contains(_e.target) && ge();
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [le, ge]), Oe(() => {
      if (!le) return;
      const F = (_e) => {
        _e.key === "Escape" && ge();
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [le, ge]);
    const Tt = () => {
      j || se(""), g?.(""), _?.(""), O.current?.focus();
    }, yt = le && V ? _o(V, i, m) : j ? r ? _o(
      Fr(r, i) ?? Yn(),
      i,
      m
    ) : "" : q, it = j ? !!r : q.length > 0, ft = f || le, Ve = { year: Q.year, month: Q.month }, Ct = new Date(Ve.year, Ve.month - 1, 1).getDay(), oe = {
      year: Ve.year,
      month: Ve.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, ze = [];
    for (let F = 0; F < kv; F += 1)
      ze.push(Ln(oe, F - Ct));
    const wt = V ? Xt(V) : xe ? Xt(xe) : null, Mt = Xt(Yn()), bt = `${Ve.year}-${ln(Ve.month)}`, R = Ne(
      () => new Intl.DateTimeFormat(m, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [m]
    ), G = new Intl.DateTimeFormat(m, {
      month: "long",
      year: "numeric"
    }).format(new Date(Ve.year, Ve.month - 1, 1)), me = Array.from(
      { length: 7 },
      (F, _e) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + _e)
      )
    ), we = t === "xs" ? We["dx-datepicker-input--xs"] : t === "sm" ? We["dx-datepicker-input--sm"] : t === "lg" ? We["dx-datepicker-input--lg"] : t === "xl" ? We["dx-datepicker-input--xl"] : We["dx-datepicker-input--md"], pe = /* @__PURE__ */ D(
      "div",
      {
        className: We["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: We["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: We["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const F = $e(po(Q, -1));
                  J(F), setTimeout(() => Ge(F), 0);
                },
                children: /* @__PURE__ */ o(Ie, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: We["dx-datepicker-title"], children: G }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: We["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const F = $e(po(Q, 1));
                  J(F), setTimeout(() => Ge(F), 0);
                },
                children: /* @__PURE__ */ o(Ie, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
            "div",
            {
              ref: L,
              role: "grid",
              tabIndex: -1,
              className: We["dx-datepicker-grid"],
              onKeyDown: Xe,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: We["dx-datepicker-week-row"], children: me.map((F) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: We["dx-datepicker-weekday"],
                    children: F
                  },
                  F
                )) }),
                Array.from({ length: 6 }, (F, _e) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: We["dx-datepicker-row"],
                    children: ze.slice(_e * 7, _e * 7 + 7).map((Re) => {
                      const De = Xt(Re), It = Y(Re), et = De.startsWith(bt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": De,
                          tabIndex: De === Xt(Q) ? 0 : -1,
                          "aria-selected": De === wt || void 0,
                          "aria-disabled": It || void 0,
                          "aria-label": R.format(
                            new Date(Re.year, Re.month - 1, Re.day)
                          ),
                          className: [
                            We["dx-datepicker-day"],
                            et ? null : We["dx-datepicker-day--outside"],
                            De === Mt ? We["dx-datepicker-day--today"] : null,
                            De === wt ? We["dx-datepicker-day--selected"] : null,
                            It ? We["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Qe(Re),
                          onFocus: () => J(Re),
                          children: Re.day
                        },
                        De
                      );
                    })
                  },
                  _e
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ D("div", { className: We["dx-datepicker-time"], children: [
            Cv.map((F) => /* @__PURE__ */ D("label", { className: We["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: We["dx-datepicker-time-label"], children: ho(F) }),
              /* @__PURE__ */ D("div", { className: We["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: We["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": ho(F),
                    value: ln(
                      (V ?? xe ?? Yn())[F]
                    ),
                    onChange: (_e) => gt(F, _e.target.value),
                    onKeyDown: (_e) => {
                      _e.key === "ArrowUp" ? (_e.preventDefault(), He(F, 1)) : _e.key === "ArrowDown" ? (_e.preventDefault(), He(F, -1)) : _e.key === "Enter" && (_e.preventDefault(), ee());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: We["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${ho(F).toLowerCase()}`,
                      onClick: () => He(F, 1),
                      children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${ho(F).toLowerCase()}`,
                      onClick: () => He(F, -1),
                      children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: 11 })
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
    return /* @__PURE__ */ D(
      "div",
      {
        ref: w,
        className: [
          We["dx-datepicker"],
          f ? We["dx-datepicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: yt,
                disabled: p,
                readOnly: x,
                placeholder: N,
                tabIndex: E,
                role: d ? void 0 : "combobox",
                "aria-label": v ?? "Date",
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
                onKeyDown: Le,
                onBlur: st,
                onClick: () => {
                  d || Je();
                },
                ...M
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
                "aria-label": $ ?? "Clear",
                onClick: Tt,
                children: /* @__PURE__ */ o(Ie, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: z,
                type: "button",
                className: [We["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": le,
                "aria-controls": P,
                disabled: p,
                onClick: Je,
                children: /* @__PURE__ */ o(Ie, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          ft && /* @__PURE__ */ o(
            "div",
            {
              id: P,
              role: f ? void 0 : "dialog",
              "aria-label": f ? void 0 : v ?? "Date picker",
              className: f ? void 0 : We["dx-datepicker-popup"],
              children: pe
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
}, BS = ({
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
  const [f, y] = W(e), m = H(
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), g = H(
    (p) => {
      d?.(p), u?.(p);
    },
    [d, u]
  ), _ = H(
    (p) => {
      n || r || (g(p), y(p));
    },
    [n, r, g]
  ), b = (p) => {
    if (n || r) return;
    const x = f > 0 ? f : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), _(m(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), _(m(x - 1));
        break;
      case "Home":
        p.preventDefault(), _(1);
        break;
      case "End":
        p.preventDefault(), _(t);
        break;
    }
  }, h = Array.from({ length: t }, (p, x) => x + 1);
  return /* @__PURE__ */ D(
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
      onKeyDown: b,
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
            children: /* @__PURE__ */ o(Ie, { icon: "block", size: 16 })
          }
        ),
        h.map((p) => {
          const x = p <= e, N = p === (e > 0 ? e : f);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${c} ${p}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                x ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => _(p),
              onFocus: () => y(p),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Xn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Ie, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Xn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ie, { icon: "star", size: 20 }) })
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
const FS = ({
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
  tabIndex: y = 0,
  className: m,
  onChange: g,
  onInput: _,
  onValueChange: b,
  onInputChange: h
}) => {
  const p = ae(null), x = ae(
    null
  ), [N, v] = W(null), C = N ?? e, $ = Ne(
    () => On(C, r, a),
    [C, r, a]
  ), E = Ne(
    () => On(c ? t : $, r, a),
    [c, t, $, r, a]
  ), T = Ne(
    () => On(c ? Math.max(n, E) : $, r, a),
    [c, n, E, $, r, a]
  ), I = H(
    (Q) => {
      const J = a - r;
      return J <= 0 ? 0 : (On(Q, r, a) - r) / J * 100;
    },
    [r, a]
  ), A = H(
    (Q, J) => {
      const X = p.current;
      if (!X) return r;
      const ue = X.getBoundingClientRect();
      let ie;
      s === "vertical" ? ie = 1 - (J - ue.top) / ue.height : ie = (Q - ue.left) / ue.width;
      const xe = r + On(ie, 0, 1) * (a - r);
      return i > 0 ? On(Math.round(xe / i) * i, r, a) : On(xe, r, a);
    },
    [r, a, i, s]
  ), M = H(
    (Q) => {
      typeof Q == "number" && v(Q), g?.(Q), b?.(Q);
    },
    [g, b]
  ), k = H(
    (Q) => {
      typeof Q == "number" && v(Q), _?.(Q), h?.(Q);
    },
    [_, h]
  ), w = H(
    (Q, J, X) => {
      const ue = A(J, X);
      let ie;
      c ? Q === "min" ? ie = { min: Math.min(ue, T), max: T } : ie = { min: E, max: Math.max(ue, E) } : ie = ue, k(ie), x.current === null && M(ie);
    },
    [c, A, E, T, k, M]
  ), O = H(
    (Q, J) => {
      const X = (i > 0 ? i : 1) * J;
      let ue;
      c ? Q === "min" ? ue = {
        min: On(E + X, r, T),
        max: T
      } : ue = {
        min: E,
        max: On(T + X, E, a)
      } : ue = On($ + X, r, a), M(ue);
    },
    [c, i, r, a, E, T, $, M]
  ), z = (Q, J) => {
    if (!l)
      switch (J.key) {
        case "ArrowLeft":
        case "ArrowDown":
          J.preventDefault(), O(Q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          J.preventDefault(), O(Q, 1);
          break;
        case "Home":
          J.preventDefault(), M(c ? Q === "min" ? { min: r, max: T } : { min: E, max: E } : r);
          break;
        case "End":
          J.preventDefault(), M(c ? Q === "min" ? { min: T, max: T } : { min: E, max: a } : a);
          break;
      }
  }, L = (Q, J) => {
    l || (J.preventDefault(), J.currentTarget.focus(), typeof J.currentTarget.setPointerCapture == "function" && J.currentTarget.setPointerCapture(J.pointerId), x.current = { key: Q, pointerId: J.pointerId }, w(Q, J.clientX, J.clientY));
  }, P = (Q) => {
    !x.current || x.current.pointerId !== Q.pointerId || (Q.preventDefault(), w(x.current.key, Q.clientX, Q.clientY));
  }, j = (Q) => {
    !x.current || x.current.pointerId !== Q.pointerId || (x.current = null, Q.preventDefault(), M(c ? { min: E, max: T } : $));
  }, [q, se] = W(null), le = I(E), ne = I(T), V = c ? le : 0, Ee = ne;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        rr["dx-slider"],
        s === "vertical" ? rr["dx-slider-vertical"] : null,
        l ? rr["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: p, className: rr["dx-slider-track"], children: [
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
            tabIndex: l || c && q === "max" ? -1 : y,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${le}% - 8px)` } : { left: `calc(${le}% - 8px)` },
            onKeyDown: (Q) => z("min", Q),
            onPointerDown: (Q) => L("min", Q),
            onPointerMove: P,
            onPointerUp: j,
            onFocus: () => se("min")
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
            tabIndex: l || q === "min" ? -1 : y,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ne}% - 8px)` } : { left: `calc(${ne}% - 8px)` },
            onKeyDown: (Q) => z("max", Q),
            onPointerDown: (Q) => L("max", Q),
            onPointerMove: P,
            onPointerUp: j,
            onFocus: () => se("max")
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
}, Mv = "-10675199.02:48:05.4775808", Av = "10675199.02:48:05.4775808", Rn = 86400, jn = 3600, wn = 60, Uo = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, ma = {
  days: Rn,
  hours: jn,
  minutes: wn,
  seconds: 1
}, Dv = {
  day: Rn,
  hour: jn,
  minute: wn,
  second: 1
};
function gr(e) {
  return String(e).padStart(2, "0");
}
function Vr(e) {
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
function Iv(e) {
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
function ns(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / wn) * wn : t === "hour" ? r = Math.round(r / jn) * jn : t === "day" && (r = Math.round(r / Rn) * Rn);
  let a = Math.round(r % wn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / wn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, u = Math.floor(l / 24), f = n ? "-" : "", y = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${y}${gr(d)}`;
    case "minute":
      return `${f}${y}${gr(d)}:${gr(s)}`;
    default:
      return `${f}${y}${gr(d)}:${gr(s)}:${gr(a)}`;
  }
}
function ya(e, t = "second") {
  const n = Vr(e);
  return n === null ? "" : ns(n, t);
}
function Wo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const HS = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Mv,
    max: c = Av,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: y = !0,
    allowClear: m = !1,
    inline: g = !1,
    onChange: _,
    onValueChange: b,
    onOpen: h,
    onClose: p,
    disabled: x,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: C,
    clearLabel: $,
    tabIndex: E,
    className: T,
    onBlur: I,
    onKeyDown: A,
    ...M
  }, k) {
    const w = ae(null), O = ae(null), z = ae(null), L = ct(), P = r !== void 0, [j, q] = W(
      () => a != null ? ya(a, l) : ""
    ), [se, le] = W(!1), [ne, V] = W(null), [Ee, Q] = W(null), J = Ne(
      () => Vr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), X = Ne(
      () => Vr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), ue = Ne(() => {
      const oe = Number.parseFloat(s);
      return Number.isNaN(oe) || oe <= 0 ? 1 : oe;
    }, [s]), ie = Ne(() => {
      const oe = P ? r ?? "" : j;
      return oe ? Vr(oe) : null;
    }, [r, j, P]), xe = H(
      (oe) => {
        const ze = oe === null ? "" : ns(oe, l);
        P || q(ze), _?.(ze), b?.(ze);
      },
      [P, l, _, b]
    ), Y = H(
      (oe) => {
        oe && ne !== null && xe(ne), le(!1), V(null), Q(null), p?.(), g || z.current?.focus();
      },
      [g, ne, xe, p]
    ), $e = H(() => {
      x || (V(ie ?? 0), le(!0), h?.());
    }, [x, ie, h]), re = H(() => {
      se ? Y(!1) : $e();
    }, [se, Y, $e]), Ae = H(
      (oe, ze) => {
        V((wt) => {
          const bt = (wt ?? ie ?? 0) + ze * ue * ma[oe];
          return Wo(bt, J, X);
        });
      },
      [ie, ue, J, X]
    ), ge = H(
      (oe) => {
        const ze = Ee?.[oe];
        if (ze == null) return;
        const wt = Number.parseFloat(ze), Mt = Number.isNaN(wt) ? 0 : wt;
        V((bt) => {
          const R = bt ?? ie ?? 0, G = ga(R);
          G[oe] = Mt;
          const we = (R < 0 ? -1 : 1) * Iv(G);
          return Wo(we, J, X);
        }), Q(null);
      },
      [Ee, ie, J, X]
    ), qe = (oe, ze) => {
      Q((wt) => ({ ...wt ?? {}, [oe]: ze }));
    }, Je = (oe, ze) => {
      switch (ze.key) {
        case "ArrowUp":
          ze.preventDefault(), ge(oe), Ae(oe, 1);
          break;
        case "ArrowDown":
          ze.preventDefault(), ge(oe), Ae(oe, -1);
          break;
        case "Home":
          ze.preventDefault(), ge(oe), V(J);
          break;
        case "End":
          ze.preventDefault(), ge(oe), V(X);
          break;
        case "Enter":
          ze.preventDefault(), ge(oe), Y(!0);
          break;
      }
    }, Ge = H(() => {
      if (se) return;
      const oe = Vr(j);
      xe(oe !== null ? Wo(oe, J, X) : null);
    }, [se, j, J, X, xe]), Qe = (oe) => {
      P || q(oe.target.value);
    }, He = (oe) => {
      oe.key === "Enter" ? (oe.preventDefault(), se ? Y(!0) : Ge()) : oe.key === "Escape" && se ? (oe.preventDefault(), Y(!1)) : oe.key === "ArrowDown" && !se ? (oe.preventDefault(), $e()) : oe.key === "Tab" && se && le(!1), A?.(oe);
    }, gt = (oe) => {
      Ge(), I?.(oe);
    }, ee = () => {
      P || q(""), _?.(""), b?.(""), O.current?.focus();
    };
    Oe(() => {
      if (!se) return;
      const oe = (ze) => {
        w.current && !w.current.contains(ze.target) && Y(!1);
      };
      return document.addEventListener("mousedown", oe), () => document.removeEventListener("mousedown", oe);
    }, [se, Y]), Oe(() => {
      if (!se) return;
      const oe = (ze) => {
        ze.key === "Escape" && Y(!1);
      };
      return document.addEventListener("keydown", oe), () => document.removeEventListener("keydown", oe);
    }, [se, Y]), Oe(() => {
      if (g && ne !== null) {
        const oe = ie;
        (oe === null || Math.abs(ne - oe) > 1e-9) && xe(ne);
      }
    }, [g, ne, ie, xe]);
    const Te = H(
      (oe) => {
        O.current = oe, typeof k == "function" ? k(oe) : k && (k.current = oe);
      },
      [k]
    ), lt = P ? r ? ya(r, l) : "" : j, Le = P ? !!r : j.length > 0, st = g || se, Xe = ne ?? ie ?? 0, Tt = ga(Xe), yt = Dv[l], ft = ["days", "hours", "minutes", "seconds"].filter(
      (oe) => ma[oe] >= yt && (oe === "days" ? d : oe === "hours" ? u : oe === "minutes" ? f : y)
    ), Ve = t === "xs" ? _t["dx-timespanpicker-input--xs"] : t === "sm" ? _t["dx-timespanpicker-input--sm"] : t === "lg" ? _t["dx-timespanpicker-input--lg"] : t === "xl" ? _t["dx-timespanpicker-input--xl"] : _t["dx-timespanpicker-input--md"], Ct = /* @__PURE__ */ D("div", { className: _t["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-demos"], "aria-live": "polite", children: ns(Xe, l) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-units"], children: ft.map((oe) => /* @__PURE__ */ D("label", { className: _t["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: _t["dx-timespanpicker-unit-label"], children: Uo[oe] }),
        /* @__PURE__ */ D("span", { className: _t["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: _t["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: Ee?.[oe] ?? String(Tt[oe]),
              onChange: (ze) => qe(oe, ze.target.value),
              onKeyDown: (ze) => Je(oe, ze),
              onBlur: () => ge(oe)
            }
          ),
          /* @__PURE__ */ D("span", { className: _t["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Uo[oe].toLowerCase()}`,
                onClick: () => {
                  ge(oe), Ae(oe, 1);
                },
                children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Uo[oe].toLowerCase()}`,
                onClick: () => {
                  ge(oe), Ae(oe, -1);
                },
                children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, oe)) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: _t["dx-timespanpicker-ok"],
          onClick: () => Y(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ D(
      "div",
      {
        ref: w,
        className: [
          _t["dx-timespanpicker"],
          g ? _t["dx-timespanpicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !g && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Te,
                type: "text",
                autoComplete: "off",
                value: lt,
                disabled: x,
                placeholder: N,
                tabIndex: E,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": se,
                "aria-controls": L,
                "aria-invalid": n || void 0,
                className: [
                  _t["dx-timespanpicker-input"],
                  Ve,
                  n ? _t["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Qe,
                onKeyDown: He,
                onBlur: gt,
                ...M
              }
            ),
            m && !x && Le && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _t["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
                onClick: ee,
                children: /* @__PURE__ */ o(Ie, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: z,
                type: "button",
                className: [_t["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": se,
                "aria-controls": L,
                disabled: x,
                onClick: re,
                children: /* @__PURE__ */ o(Ie, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          st && /* @__PURE__ */ o(
            "div",
            {
              id: L,
              role: g ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: g ? void 0 : _t["dx-timespanpicker-popup"],
              children: Ct
            }
          )
        ]
      }
    );
  }
), Lv = "_wrapper_ou9x5_1", zv = "_cells_ou9x5_8", Pv = "_cell_ou9x5_8", Rv = "_invalid_ou9x5_63", jv = "_live_ou9x5_73", or = {
  wrapper: Lv,
  cells: zv,
  cell: Pv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Rv,
  live: jv
};
function ba(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const US = at(
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
    "aria-label": y
  }, m) {
    const g = ct(), _ = n !== void 0, [b, h] = W(ba(r).join("")), p = _ ? ba(n).join("") : b, x = Array.from({ length: t }, (M, k) => p[k] ?? ""), N = ae([]), [v, C] = W(""), $ = (M) => {
      _ || h(M), a?.(M);
    }, E = (M) => {
      const k = N.current[M];
      k && !k.disabled && (k.focus(), k.select());
    }, T = (M, k) => {
      const w = k.replace(/\D/g, "").slice(-1), O = p.split("");
      if (w) {
        O[M] = w;
        const z = O.join("").slice(0, t);
        $(z), z.length < t ? E(M + 1) : u && C("Code complete");
      }
    }, I = (M, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), p[M]) {
          const w = p.split("");
          w[M] = "", $(w.join(""));
        } else if (M > 0) {
          const w = p.split("");
          w[M - 1] = "", $(w.join("")), E(M - 1);
        }
      } else k.key === "ArrowLeft" && M > 0 ? (k.preventDefault(), E(M - 1)) : k.key === "ArrowRight" && M < t - 1 ? (k.preventDefault(), E(M + 1)) : k.key === "Home" ? (k.preventDefault(), E(0)) : k.key === "End" && (k.preventDefault(), E(t - 1));
    }, A = (M, k) => {
      k.preventDefault();
      const w = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!w) return;
      const O = p.split("");
      let z = 0;
      for (let P = 0; P < w.length && M + P < t; P++)
        O[M + P] = w[P] ?? "", z++;
      const L = O.join("");
      $(L), L.length >= t ? u && C("Code complete") : E(M + z);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [or.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": y ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [or.cells, or[c]].join(" "), children: x.map((M, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (w) => {
                N.current[k] = w, k === 0 && m && (typeof m == "function" ? m(w) : m.current = w);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: M,
              disabled: l,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": i && M !== "" ? !0 : void 0,
              autoFocus: s && k === 0,
              className: [
                or.cell,
                or[`cell-${c}`],
                i ? or.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (w) => T(k, w.target.value),
              onKeyDown: (w) => I(k, w),
              onPaste: (w) => A(k, w),
              onFocus: (w) => w.target.select(),
              onBlur: () => {
                u && C("");
              }
            },
            k
          )) }),
          u && /* @__PURE__ */ o(
            "span",
            {
              id: `${g}-live`,
              role: "status",
              "aria-live": "polite",
              className: or.live,
              children: v
            }
          )
        ]
      }
    );
  }
), Bv = "_wrapper_6lcd5_1", Fv = "_header_6lcd5_7", Hv = "_label_6lcd5_15", Uv = "_clear_6lcd5_22", Wv = "_canvas_6lcd5_53", qv = "_disabled_6lcd5_69", yr = {
  wrapper: Bv,
  header: Fv,
  label: Hv,
  clear: Uv,
  canvas: Wv,
  disabled: qv
}, WS = at(
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
  }, y) {
    const m = ae(null), g = ae(!1), _ = ae(!1), b = ae({ x: 0, y: 0 });
    Oe(() => {
      const $ = m.current;
      if (!$) return;
      const E = window.devicePixelRatio || 1, T = Math.round((l ?? $.clientWidth) * E), I = Math.round(d * E);
      ($.width !== T || $.height !== I) && ($.width = T, $.height = I);
      const A = $.getContext("2d");
      if (!A) return;
      A.setTransform(E, 0, 0, E, 0, 0), A.lineWidth = i, A.strokeStyle = a, A.lineCap = "round", A.lineJoin = "round";
      const M = t ?? n;
      if (M) {
        const k = new Image();
        k.onload = () => {
          A.drawImage(k, 0, 0, $.clientWidth, d);
        }, k.src = M;
      }
    }, [t, n, a, i, l, d]);
    const h = () => {
      const $ = m.current;
      if (!$) return;
      const E = $.toDataURL("image/png");
      r?.(E);
    }, p = () => {
      const $ = m.current;
      if (!$) return;
      const E = $.getContext("2d");
      E && E.clearRect(0, 0, $.width, $.height), r?.("");
    };
    $o(y, () => ({
      clear: p,
      toDataURL: ($ = "image/png", E) => m.current?.toDataURL($, E) ?? ""
    }));
    const x = ($) => {
      const E = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - E.left, y: $.clientY - E.top };
    }, N = ($) => {
      u || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), g.current = !0, _.current = !1, b.current = x($));
    }, v = ($) => {
      if (!g.current) return;
      $.preventDefault();
      const E = $.currentTarget.getContext("2d");
      if (!E) return;
      const T = x($);
      E.beginPath(), E.moveTo(b.current.x, b.current.y), E.lineTo(T.x, T.y), E.stroke(), b.current = T, _.current = !0;
    }, C = ($) => {
      g.current && ($.preventDefault(), g.current = !1, _.current && h());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          yr.wrapper,
          f,
          u ? yr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: yr.header, children: [
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
              ref: m,
              role: "img",
              "aria-label": s,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${d}px`
              },
              className: yr.canvas,
              onPointerDown: N,
              onPointerMove: v,
              onPointerUp: C,
              onPointerCancel: C
            }
          )
        ]
      }
    );
  }
), Kv = "_wrapper_dsvd2_1", Gv = "_trigger_dsvd2_7", Vv = "_list_dsvd2_35", Yv = "_row_dsvd2_44", Xv = "_name_dsvd2_59", Zv = "_size_dsvd2_68", Jv = "_progress_dsvd2_74", Qv = "_fill_dsvd2_82", ew = "_status_dsvd2_99", tw = "_remove_dsvd2_106", En = {
  wrapper: Kv,
  trigger: Gv,
  list: Vv,
  row: Yv,
  name: Xv,
  size: Zv,
  progress: Jv,
  fill: Qv,
  status: ew,
  remove: tw
};
function xa(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const qS = at(function({
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
  onComplete: y,
  onError: m
}, g) {
  const _ = ae(null), [b, h] = W([]), p = ae(/* @__PURE__ */ new Map()), x = (E, T) => {
    h(
      (I) => I.map((A) => A.file.name === E ? { ...A, ...T } : A)
    );
  }, N = (E) => {
    if (!t) return;
    const T = new XMLHttpRequest();
    p.current.set(E.file.name, T);
    const I = new FormData();
    if (I.append(r, E.file), T.upload.addEventListener("progress", (A) => {
      if (!A.lengthComputable) return;
      const M = Math.round(A.loaded / A.total * 100);
      x(E.file.name, { state: "uploading", progress: M }), f?.(E.file.name, M);
    }), T.addEventListener("load", () => {
      T.status >= 200 && T.status < 300 ? (x(E.file.name, { state: "complete", progress: 100 }), y?.(E.file.name)) : (x(E.file.name, {
        state: "error",
        message: `HTTP ${T.status}`
      }), m?.(E.file.name, `HTTP ${T.status}`));
    }), T.addEventListener("error", () => {
      x(E.file.name, { state: "error", message: "Network error" }), m?.(E.file.name, "Network error");
    }), i)
      for (const [A, M] of Object.entries(i))
        T.setRequestHeader(A, M);
    T.open("POST", t), T.send(I), x(E.file.name, { state: "uploading", progress: 0 });
  }, v = (E) => {
    if (!E) return;
    const T = [...E], I = [];
    let A = Math.max(0, s - b.length);
    for (const k of T) {
      if (l != null && k.size > l) {
        m?.(
          k.name,
          `File too large (maximum ${xa(l)})`
        );
        continue;
      }
      if (A <= 0) {
        m?.(k.name, `Too many files (maximum ${s})`);
        continue;
      }
      A -= 1, I.push(k);
    }
    const M = I.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    h((k) => [...k, ...M]), _.current && (_.current.value = ""), a && M.forEach(N);
  }, C = (E) => {
    p.current.get(E)?.abort(), p.current.delete(E), h((I) => I.filter((A) => A.file.name !== E));
  }, $ = u ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: En.trigger,
      onClick: () => _.current?.click(),
      children: [
        /* @__PURE__ */ o(Ie, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return $o(g, () => ({
    open: () => _.current?.click(),
    upload: () => b.forEach((E) => E.state === "pending" ? N(E) : null)
  })), /* @__PURE__ */ D("div", { className: En.wrapper, children: [
    $,
    /* @__PURE__ */ o(
      "input",
      {
        ref: _,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: (E) => v(E.target.files)
      }
    ),
    !u && b.length > 0 && /* @__PURE__ */ o("ul", { className: En.list, children: b.map(({ file: E, state: T, progress: I, message: A }) => /* @__PURE__ */ D(
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
              "aria-valuenow": I,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: En.fill,
                  style: { width: `${I}%` }
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
              onClick: () => C(E.name),
              children: /* @__PURE__ */ o(Ie, { icon: "close", size: 14 })
            }
          )
        ]
      },
      E.name
    )) })
  ] });
}), nw = "_zone_nl0bz_1", rw = "_dragging_nl0bz_23", ow = "_caption_nl0bz_28", sw = "_browse_nl0bz_40", aw = "_disabled_nl0bz_67", Hr = {
  zone: nw,
  dragging: rw,
  caption: ow,
  browse: sw,
  disabled: aw
};
function lw(e, t) {
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
const KS = at(
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
    const u = ae(null), [f, y] = W(!1), m = (p) => {
      if (!p || p.length === 0) return;
      const x = [...p].filter((N) => lw(N, t ?? ""));
      x.length !== 0 && r?.(x);
    }, g = (p) => {
      s || (p.preventDefault(), y(!0));
    }, _ = (p) => {
      s || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", y(!0));
    }, b = (p) => {
      s || p.currentTarget.contains(p.relatedTarget) || y(!1);
    }, h = (p) => {
      s || (p.preventDefault(), y(!1), m(p.dataTransfer.files));
    };
    return $o(d, () => ({
      open: () => u.current?.click()
    })), // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- file-drop target; keyboard users pick files via the browse control
    /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": a,
        className: [
          Hr.zone,
          f ? Hr.dragging : null,
          s ? Hr.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: g,
        onDragOver: _,
        onDragLeave: b,
        onDrop: h,
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
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (p) => {
                m(p.target.files), p.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), iw = "_root_1a92d_1", cw = "_menubar_1a92d_5", dw = "_horizontal_1a92d_15", uw = "_vertical_1a92d_20", fw = "_itemWrapper_1a92d_25", pw = "_item_1a92d_25", _w = "_disabled_1a92d_61", hw = "_icon_1a92d_68", mw = "_text_1a92d_75", gw = "_caret_1a92d_79", yw = "_hasChildren_1a92d_85", bw = "_submenu_1a92d_94", xw = "_submenuItem_1a92d_118", vw = "_flyout_1a92d_155", ww = "_hamburger_1a92d_175", kw = "_responsive_1a92d_198", Nw = "_mobileOpen_1a92d_207", mt = {
  root: iw,
  menubar: cw,
  horizontal: dw,
  vertical: uw,
  itemWrapper: fw,
  item: pw,
  disabled: _w,
  icon: hw,
  text: mw,
  caret: gw,
  hasChildren: yw,
  submenu: bw,
  submenuItem: xw,
  flyout: vw,
  hamburger: ww,
  responsive: kw,
  mobileOpen: Nw
}, wo = cr(null);
function $w(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Sw(e, t, n, r, a) {
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
function Ow({
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
      children: /* @__PURE__ */ o(Ie, { icon: e, size: 16 })
    }
  ) : null;
}
function ko(e) {
  return qt(e) && e.type === Ya;
}
function fs({
  itemKey: e,
  props: t
}) {
  const n = Bn(wo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Ne(
    () => Jr.toArray(t.children).filter(qt),
    [t.children]
  ), d = l.length > 0, u = !!c, f = t.open !== void 0, [y, m] = Sw(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, _ = ae(0), h = (g && !f ? n.openKey === e : null) ?? y, p = H(
    (ne) => {
      g && !f ? n.setOpenKey(ne ? e : null) : (m(ne), g && n.setOpenKey(null));
    },
    [g, f, n, e, m]
  ), [, x] = W(0);
  Oe(() => {
    if (!i) return;
    const ne = () => x((V) => V + 1);
    return window.addEventListener("hashchange", ne), () => window.removeEventListener("hashchange", ne);
  }, [i]);
  const N = i && !d ? $w(i, t.match) : !1, v = !u && (n.activeKey === e || n.activeKey == null && n.defaultStopKey === e), C = () => n.setActiveKey(e), $ = H(
    (ne) => {
      if (u) {
        ne.preventDefault();
        return;
      }
      const V = { text: r, value: a, path: i };
      [n.emit(V), t.onClick?.(V)].includes(!1) && ne.preventDefault(), n.closeAll();
    },
    [u, r, a, i, n, t]
  ), E = H(() => {
    if (!u) {
      if (h && (Date.now() - _.current < 600 || !n.clickToOpen)) {
        _.current = 0;
        return;
      }
      p(!h);
    }
  }, [u, h, p, n.clickToOpen]), T = H(() => {
    !d || u || n.clickToOpen || (_.current = Date.now(), p(!0));
  }, [d, u, n.clickToOpen, p]), I = H(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), A = `${n.baseId}-submenu-${e}`, [M, k] = W(null), [w, O] = W(null), z = Ne(() => {
    const ne = l.findIndex(
      (V) => ko(V) && !V.props.disabled
    );
    return ne >= 0 ? `${e}-${ne}` : null;
  }, [l, e]), [L, P] = W(n.closeSignal);
  n.closeSignal !== L && (P(n.closeSignal), n.closeSignal > 0 && k(null));
  const j = Ne(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: M,
      setOpenKey: k,
      activeKey: w,
      setActiveKey: O,
      defaultStopKey: z
    }),
    [n, M, w, z]
  ), q = d ? /* @__PURE__ */ o("span", { className: mt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Ie,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, se = s ?? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ o(
      Ow,
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
    let ne = function(V) {
      const Ee = Array.from(V.currentTarget.children).map((X) => X.querySelector('[role="menuitem"]')).filter(
        (X) => X != null && X.getAttribute("aria-disabled") !== "true" && !X.hasAttribute("disabled")
      ), Q = document.activeElement, J = Q ? Ee.indexOf(Q) : -1;
      V.key === "ArrowDown" ? (V.preventDefault(), V.stopPropagation(), (J === -1 ? Ee[0] : Ee[(J + 1) % Ee.length])?.focus()) : V.key === "ArrowUp" ? (V.preventDefault(), V.stopPropagation(), (J === -1 ? Ee[Ee.length - 1] : Ee[(J - 1 + Ee.length) % Ee.length])?.focus()) : V.key === "ArrowRight" ? Q?.getAttribute("aria-haspopup") === "menu" && (V.preventDefault(), V.stopPropagation(), Q.getAttribute("aria-expanded") !== "true" && Q.click(), document.getElementById(
        Q.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (V.key === "ArrowLeft" || V.key === "Escape") && (V.preventDefault(), V.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: mt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : T,
        onMouseLeave: n.clickToOpen ? void 0 : I,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": g ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": A,
              tabIndex: v ? 0 : -1,
              disabled: u,
              className: [
                mt.item,
                u ? mt.disabled : null,
                mt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: E,
              onFocus: C,
              children: se
            }
          ),
          h ? /* @__PURE__ */ o(
            "div",
            {
              id: A,
              role: "menu",
              tabIndex: -1,
              "aria-label": r,
              className: [
                mt.submenu,
                n.flyout && !g ? mt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: ne,
              children: /* @__PURE__ */ o(wo.Provider, { value: j, children: l.map(
                (V, Ee) => ko(V) ? /* @__PURE__ */ o(
                  fs,
                  {
                    itemKey: `${e}-${Ee}`,
                    props: V.props
                  },
                  `${e}-${Ee}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(as, { children: V }, `${e}-custom-${Ee}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const le = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: v ? 0 : -1,
    onFocus: C,
    "data-dx-menu-item": "",
    className: [mt.submenuItem, u ? mt.disabled : null].filter(Boolean).join(" "),
    onClick: $
  };
  return i && !u ? /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...le, children: se }) }) : /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: u, ...le, children: se }) });
}
function Ya(e) {
  if (!Bn(wo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(fs, { itemKey: e.text, props: e });
}
function Ew({
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
  const f = ct(), y = ae(null), m = ae(null), [g, _] = W(null), [b, h] = W(null), [p, x] = W(0), [N, v] = W(!1), C = ae(null), $ = H(
    (k) => i?.(k),
    [i]
  ), E = H(() => {
    _(null), x((k) => k + 1);
  }, []);
  Oe(() => {
    if (g == null) return;
    const k = (w) => {
      y.current && !y.current.contains(w.target) && E();
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [g, E]), Oe(() => {
    C.current != null && g === C.current && (document.getElementById(`${f}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), C.current = null);
  }, [g, f]);
  const T = Ne(
    () => Jr.toArray(e).filter(qt),
    [e]
  ), I = Ne(() => {
    const k = T.findIndex(
      (w) => ko(w) && !w.props.disabled
    );
    return k >= 0 ? String(k) : null;
  }, [T]), A = Ne(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: p,
      emit: $,
      closeAll: E,
      openKey: g,
      setOpenKey: _,
      activeKey: b,
      setActiveKey: h,
      defaultStopKey: I
    }),
    [
      f,
      n,
      t,
      p,
      $,
      E,
      g,
      b,
      I
    ]
  ), M = (k) => {
    const w = m.current;
    if (!w) return;
    const O = Array.from(w.children).map((P) => P.querySelector('[role="menuitem"]')).filter(
      (P) => P != null && !P.hasAttribute("disabled") && P.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const P = document.getElementById(`${f}-submenu-${g}`);
      if (P) {
        const j = Array.from(
          P.querySelectorAll('[role="menuitem"]')
        ).filter(
          (le) => le.getAttribute("aria-disabled") !== "true" && !le.hasAttribute("disabled")
        ), q = document.activeElement, se = q ? j.indexOf(q) : -1;
        if (k.key === "ArrowDown") {
          k.preventDefault(), (se === -1 ? j[0] : j[(se + 1) % j.length])?.focus();
          return;
        }
        if (k.key === "ArrowUp") {
          k.preventDefault(), (se === -1 ? j[j.length - 1] : j[(se - 1 + j.length) % j.length])?.focus();
          return;
        }
        if (k.key === "Escape") {
          k.preventDefault(), E(), c?.(), w.querySelector(`[data-index="${g}"]`)?.focus();
          return;
        }
        if (k.key === "Enter" || k.key === " ") return;
      }
      if (k.key === "Escape") {
        k.preventDefault(), E(), c?.();
        return;
      }
    }
    const z = document.activeElement, L = z ? O.indexOf(z) : -1;
    if (k.key === "ArrowRight") {
      if (k.preventDefault(), O.length === 0) return;
      O[L === -1 ? 0 : (L + 1) % O.length]?.focus();
      return;
    }
    if (k.key === "ArrowLeft") {
      if (k.preventDefault(), O.length === 0) return;
      O[L === -1 ? O.length - 1 : (L - 1 + O.length) % O.length]?.focus();
      return;
    }
    if (a && (k.key === "ArrowDown" || k.key === "ArrowUp")) {
      if (k.preventDefault(), O.length === 0) return;
      (k.key === "ArrowDown" ? O[L === -1 ? 0 : (L + 1) % O.length] : O[L === -1 ? O.length - 1 : (L - 1 + O.length) % O.length])?.focus();
      return;
    }
    if (k.key === "ArrowDown") {
      if (L >= 0) {
        const P = z?.getAttribute("data-index");
        if (P == null) return;
        w.querySelector(
          `[data-index="${P}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (k.preventDefault(), C.current = P, _(P));
      }
      return;
    }
    if (k.key === "Home") {
      k.preventDefault(), O[0]?.focus();
      return;
    }
    if (k.key === "End") {
      k.preventDefault(), O[O.length - 1]?.focus();
      return;
    }
    if (k.key.length === 1 && !k.ctrlKey && !k.metaKey) {
      const P = O.map((q) => q.textContent ?? ""), j = L === -1 ? 0 : (L + 1) % O.length;
      for (let q = 0; q < O.length; q++) {
        const se = (j + q) % O.length;
        if (P[se]?.toLowerCase().startsWith(k.key.toLowerCase())) {
          k.preventDefault(), O[se]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: y,
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
            onClick: () => v((k) => !k),
            children: /* @__PURE__ */ o(Ie, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: m,
            role: a ? "menu" : "menubar",
            "aria-label": s,
            className: mt.menubar,
            onKeyDown: M,
            children: /* @__PURE__ */ o(wo.Provider, { value: A, children: T.map(
              (k, w) => ko(k) ? /* @__PURE__ */ o(
                fs,
                {
                  itemKey: String(w),
                  props: k.props
                },
                `top-${w}`
              ) : /* @__PURE__ */ o(as, { children: k }, `top-custom-${w}`)
            ) })
          }
        )
      ]
    }
  );
}
const Tw = "_popup_18kyn_1", Cw = "_menu_18kyn_22", rs = {
  popup: Tw,
  menu: Cw
}, Xa = cr(null);
function GS() {
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
  const n = ae(null), [r, a] = W({ left: e.x, top: e.y });
  qo(() => {
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
      className: rs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: rs.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Ew,
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
function VS({ children: e }) {
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
      const f = document.querySelector(`.${rs.popup}`);
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
  return /* @__PURE__ */ D(Xa.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Mw, { state: t, onClose: r }) : null
  ] });
}
const Aw = "_root_rgcia_1", Dw = "_list_rgcia_9", Iw = "_item_rgcia_14", Lw = "_trigger_rgcia_18", zw = "_disabled_rgcia_45", Pw = "_expanded_rgcia_52", Rw = "_selected_rgcia_56", jw = "_icon_rgcia_61", Bw = "_text_rgcia_72", Fw = "_caret_rgcia_79", Hw = "_open_rgcia_86", Uw = "_submenu_rgcia_90", Ww = "_iconOnly_rgcia_172", qw = "_stacked_rgcia_201", jt = {
  root: Aw,
  list: Dw,
  item: Iw,
  trigger: Lw,
  disabled: zw,
  expanded: Pw,
  selected: Rw,
  icon: jw,
  text: Bw,
  caret: Fw,
  open: Hw,
  submenu: Uw,
  iconOnly: Ww,
  stacked: qw
}, No = cr(null);
function Kw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Gw(e, t) {
  const n = Kw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Vw({
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
      children: /* @__PURE__ */ o(Ie, { icon: e, size: 16 })
    }
  ) : null;
}
function ps({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Bn(No);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = Ne(
    () => Jr.toArray(n.children).filter(qt),
    [n.children]
  ), d = l.length > 0, u = !!s, f = n.match ?? r.match, y = n.expanded !== void 0, [m, g] = W(
    n.defaultExpanded ?? !1
  ), _ = y ? n.expanded ?? !1 : m, b = H(
    (j) => {
      y || g(j), n.onExpandedChange?.(j);
    },
    [y, n]
  );
  Oe(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && b(!1);
  }, [r.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, x] = W(
    n.defaultSelected ?? !1
  ), N = !h && c ? Gw(c, f) : !1, v = n.selected ?? (h ? p : N || p), [, C] = W(0);
  Oe(() => {
    if (!c) return;
    const j = () => C((q) => q + 1);
    return window.addEventListener("hashchange", j), () => window.removeEventListener("hashchange", j);
  }, [c]);
  const $ = Ne(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        b(!0), r.openAncestors();
      }
    }),
    [r, b]
  );
  Oe(() => {
    N && t.length > 0 && $.openAncestors();
  }, []);
  const E = H(
    (j) => {
      if (u) {
        j.preventDefault();
        return;
      }
      const q = { text: a, value: i, path: c };
      [r.emit(q), n.onClick?.(q)].includes(!1) && j.preventDefault(), h || x(!0), n.onSelectedChange?.(!0);
    },
    [u, a, i, c, r, n, h]
  ), T = H(() => {
    u || (_ || r.notifyOpened(e, t), b(!_));
  }, [u, _, r, e, t, b]), I = H(
    (j) => {
      j.key === "Enter" || j.key === " " ? (j.preventDefault(), d ? T() : j.target.click()) : j.key === "Escape" && _ ? (j.preventDefault(), b(!1)) : j.key === "ArrowRight" && d && !_ ? (j.preventDefault(), r.notifyOpened(e, t), b(!0)) : j.key === "ArrowLeft" && _ && (j.preventDefault(), b(!1));
    },
    [d, T, _, b, r, e, t]
  ), A = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [jt.caret, _ ? jt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, M = n.template ?? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ o(
      Vw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: jt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: jt.text, children: a }),
    A
  ] }), k = `${r.baseId}-panel-${e}`, w = `${r.baseId}-trigger-${e}`, O = [
    jt.trigger,
    u ? jt.disabled : null,
    _ ? jt.expanded : null,
    v ? jt.selected : null
  ].filter(Boolean).join(" "), z = r.level > 0 ? "menuitem" : void 0, L = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: w,
      role: z,
      "aria-expanded": _,
      "aria-controls": k,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: O,
      onClick: T,
      onKeyDown: I,
      children: M
    }
  ) : c && !u ? /* @__PURE__ */ o(
    "a",
    {
      id: w,
      role: z,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: O,
      onClick: E,
      onKeyDown: I,
      children: M
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: w,
      role: z,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: O,
      onClick: E,
      onKeyDown: I,
      children: M
    }
  ), P = d ? r.renderMode === "server" && !_ ? null : /* @__PURE__ */ o(
    "div",
    {
      id: k,
      role: "menu",
      "aria-labelledby": w,
      className: jt.submenu,
      hidden: r.renderMode === "client" && !_ ? !0 : void 0,
      children: /* @__PURE__ */ o(No.Provider, { value: $, children: l.map((j, q) => /* @__PURE__ */ o(
        ps,
        {
          itemKey: `${e}-${q}`,
          ancestors: [...t, e],
          props: j.props
        },
        `${e}-${q}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: jt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        L,
        P
      ]
    }
  );
}
function YS(e) {
  if (!Bn(No)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(ps, { itemKey: e.text, ancestors: [], props: e });
}
function XS({
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
  const u = ct(), [f, y] = W(0), m = ae(/* @__PURE__ */ new Set()), g = H(
    (N) => c?.(N),
    [c]
  ), _ = H(
    (N, v) => {
      t || (m.current = /* @__PURE__ */ new Set([N, ...v]), y((C) => C + 1));
    },
    [t]
  ), b = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), h = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, C = b(N.currentTarget), $ = C.indexOf(v);
        if ($ === -1) return;
        N.preventDefault();
        const E = N.key === "ArrowDown" ? 1 : -1;
        C[($ + E + C.length) % C.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = b(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? v[0] : v[v.length - 1])?.focus();
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
      collapseSkipRef: m,
      emit: g,
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
      g,
      _
    ]
  ), x = Ne(
    () => Jr.toArray(e).filter(qt),
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
        onKeyDown: h,
        ...d,
        children: /* @__PURE__ */ o("div", { className: jt.list, role: "presentation", children: /* @__PURE__ */ o(No.Provider, { value: p, children: x.map((N, v) => /* @__PURE__ */ o(
          ps,
          {
            itemKey: String(v),
            ancestors: [],
            props: N.props
          },
          `top-${v}`
        )) }) })
      }
    )
  );
}
const Yw = "_root_5numg_1", Xw = "_trigger_5numg_7", Zw = "_defaultTrigger_5numg_40", Jw = "_avatar_5numg_46", Qw = "_menu_5numg_58", e2 = "_item_5numg_74", t2 = "_disabled_5numg_88", n2 = "_active_5numg_97", r2 = "_icon_5numg_107", o2 = "_text_5numg_114", Tn = {
  root: Yw,
  trigger: Xw,
  defaultTrigger: Zw,
  avatar: Jw,
  menu: Qw,
  item: e2,
  disabled: t2,
  active: n2,
  icon: r2,
  text: o2
};
function ZS({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = ct(), c = `${i}-menu`, s = ae(null), l = ae(null), [d, u] = W(!1), [f, y] = W(-1), m = t, g = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), _ = H(
    (v) => {
      if (v.disabled) return;
      const C = {
        text: v.text,
        path: v.path
      };
      n?.(C), u(!1), l.current?.focus();
    },
    [n]
  ), b = H(() => {
    y(g[0] ?? -1), u(!0);
  }, [g]), h = H(() => {
    u(!1), y(-1), l.current?.focus();
  }, []);
  Oe(() => {
    if (!d) return;
    const v = (C) => {
      s.current && !s.current.contains(C.target) && (u(!1), y(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [d]), Oe(() => {
    if (!d) return;
    const v = (C) => {
      C.key === "Escape" && (C.preventDefault(), h());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [d, h]);
  const p = (v) => {
    if (g.length === 0) return;
    const C = g.indexOf(f), $ = C === -1 ? 0 : (C + v + g.length) % g.length, E = g[$];
    E != null && y(E);
  }, x = (v) => {
    if (!d) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), b());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), h();
        break;
      case "ArrowDown":
        v.preventDefault(), p(1);
        break;
      case "ArrowUp":
        v.preventDefault(), p(-1);
        break;
      case "Home":
        v.preventDefault(), g[0] != null && y(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && y(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && _(C);
        }
        break;
      case "Tab":
        u(!1), y(-1);
        break;
    }
  }, N = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), p(1);
        break;
      case "ArrowUp":
        v.preventDefault(), p(-1);
        break;
      case "Home":
        v.preventDefault(), g[0] != null && y(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && y(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && _(C);
        }
        break;
      case "Escape":
        v.preventDefault(), h();
        break;
      case "Tab":
        u(!1), y(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [Tn.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ D("nav", { "aria-label": r, children: [
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
            onClick: () => d ? h() : b(),
            onKeyDown: x,
            children: m ?? /* @__PURE__ */ D("span", { className: Tn.defaultTrigger, children: [
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
            children: e.map((v, C) => {
              const $ = !!v.disabled, E = C === f;
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleMenuKeyDown on the menu container
                /* @__PURE__ */ D(
                  "div",
                  {
                    id: `${i}-item-${C}`,
                    role: "menuitem",
                    "aria-disabled": $ || void 0,
                    tabIndex: $ ? -1 : 0,
                    className: [
                      Tn.item,
                      E ? Tn.active : null,
                      $ ? Tn.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => {
                      $ || _(v);
                    },
                    onMouseEnter: () => {
                      $ || y(C);
                    },
                    children: [
                      v.icon ? /* @__PURE__ */ o("span", { className: Tn.icon, "aria-hidden": "true", children: v.icon }) : null,
                      /* @__PURE__ */ o("span", { className: Tn.text, children: v.text })
                    ]
                  },
                  `${v.text}-${C}`
                )
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const s2 = "_root_vv0xs_1", a2 = "_bottomRight_vv0xs_11", l2 = "_bottomLeft_vv0xs_16", i2 = "_topRight_vv0xs_21", c2 = "_topLeft_vv0xs_26", d2 = "_menu_vv0xs_31", u2 = "_itemWrapper_vv0xs_48", f2 = "_tooltip_vv0xs_54", p2 = "_main_vv0xs_76", _2 = "_mainIcon_vv0xs_104", h2 = "_mainOpen_vv0xs_109", m2 = "_item_vv0xs_48", g2 = "_disabled_vv0xs_141", y2 = "_itemIcon_vv0xs_148", Kt = {
  root: s2,
  bottomRight: a2,
  bottomLeft: l2,
  topRight: i2,
  topLeft: c2,
  menu: d2,
  itemWrapper: u2,
  tooltip: f2,
  main: p2,
  mainIcon: _2,
  mainOpen: h2,
  item: m2,
  disabled: g2,
  itemIcon: y2
};
function JS({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${ct()}-menu`, d = ae(null), u = ae(null), [f, y] = W(!1), m = H(
    (h) => {
      if (h.disabled) return;
      const p = { text: h.text, value: h.value };
      r?.(p), y(!1), u.current?.focus();
    },
    [r]
  );
  Oe(() => {
    if (!f) return;
    const h = (p) => {
      d.current && !d.current.contains(p.target) && y(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [f]), Oe(() => {
    if (!f) return;
    const h = (p) => {
      p.key === "Escape" && (y(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [f]);
  const g = c === "bottom-right" ? Kt.bottomRight : c === "bottom-left" ? Kt.bottomLeft : c === "top-right" ? Kt.topRight : Kt.topLeft, _ = (h) => {
    !f && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), y(!0)) : f && h.key === "Escape" && (h.preventDefault(), y(!1));
  }, b = (h) => {
    h.key === "Escape" && (h.preventDefault(), y(!1), u.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: d,
      className: [Kt.root, g, i].filter(Boolean).join(" "),
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
            onKeyDown: b,
            children: e.map((h, p) => {
              const x = !!h.disabled;
              return /* @__PURE__ */ D("div", { className: Kt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: Kt.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": x || void 0,
                    title: h.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [Kt.item, x ? Kt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => m(h),
                    children: /* @__PURE__ */ o("span", { className: Kt.itemIcon, "aria-hidden": "true", children: h.icon ?? "•" })
                  }
                )
              ] }, `${h.text}-${p}`);
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
            onClick: () => y((h) => !h),
            onKeyDown: _,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Kt.mainIcon, f ? Kt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const b2 = "_root_1eyur_1", x2 = "_list_1eyur_5", v2 = "_item_1eyur_15", w2 = "_link_1eyur_22", k2 = "_linkButton_1eyur_23", N2 = "_current_1eyur_24", $2 = "_disabled_1eyur_68", S2 = "_icon_1eyur_74", O2 = "_text_1eyur_81", E2 = "_separator_1eyur_85", ht = {
  root: b2,
  list: x2,
  item: v2,
  link: w2,
  linkButton: k2,
  current: N2,
  disabled: $2,
  icon: S2,
  text: O2,
  separator: E2
};
function QS({
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
        return /* @__PURE__ */ D("li", { className: ht.item, children: [
          l ? d ? /* @__PURE__ */ D(
            "span",
            {
              className: [ht.current, ht.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: c.icon }) : null,
                c.text
              ]
            }
          ) : c.path ? /* @__PURE__ */ D(
            "a",
            {
              href: c.path,
              className: ht.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D("span", { className: ht.current, "aria-current": "page", children: [
            c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: c.icon }) : null,
            c.text
          ] }) : d ? /* @__PURE__ */ D(
            "span",
            {
              className: [ht.link, ht.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : c.path ? /* @__PURE__ */ D(
            "a",
            {
              href: c.path,
              className: ht.link,
              onClick: (u) => {
                u.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: ht.linkButton,
              tabIndex: 0,
              onClick: () => i(c),
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: c.icon }) : null,
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
const T2 = "_link_tmy3k_1", C2 = {
  link: T2
}, eO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ D(ot, { children: [
    n != null && /* @__PURE__ */ o(Ie, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [C2.link, a].filter(Boolean).join(" ");
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
}), M2 = "_root_dnkuu_1", A2 = "_list_dnkuu_5", D2 = "_item_dnkuu_15", I2 = "_connector_dnkuu_21", L2 = "_connectorCompleted_dnkuu_30", z2 = "_step_dnkuu_34", P2 = "_active_dnkuu_69", R2 = "_completed_dnkuu_75", j2 = "_circle_dnkuu_79", B2 = "_check_dnkuu_109", F2 = "_icon_dnkuu_114", H2 = "_number_dnkuu_119", U2 = "_text_dnkuu_124", Gt = {
  root: M2,
  list: A2,
  item: D2,
  connector: I2,
  connectorCompleted: L2,
  step: z2,
  active: P2,
  completed: R2,
  circle: j2,
  check: B2,
  icon: F2,
  number: H2,
  text: U2
};
function tO({
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
  const f = a ?? i ?? !1, y = t ?? n, m = y !== void 0, [g, _] = W(() => Math.min(Math.max(0, y ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, m ? y : g),
    Math.max(0, e.length - 1)
  ), p = ae(null), x = H(
    (C) => {
      const $ = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      m || _($), (c ?? s ?? l)?.($);
    },
    [m, c, s, l, e.length]
  ), N = H(
    (C, $) => !!($.disabled || f && C > h + 1),
    [f, h]
  ), v = (C) => {
    const $ = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), E = document.activeElement, T = E ? $.indexOf(E) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), $.length === 0) return;
      const I = T === -1 ? 0 : (T + 1) % $.length, A = $[I];
      A && A.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), $.length === 0) return;
      const I = T === -1 ? $.length - 1 : (T - 1 + $.length) % $.length, A = $[I];
      A && A.focus();
    } else C.key === "Home" ? (C.preventDefault(), $[0]?.focus()) : C.key === "End" && (C.preventDefault(), $[$.length - 1]?.focus());
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Home/End and arrow keys are delegated to the step buttons inside this nav
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": d,
        className: [Gt.root, u].filter(Boolean).join(" "),
        onKeyDown: v,
        children: /* @__PURE__ */ o("ol", { ref: p, className: Gt.list, children: e.map((C, $) => {
          const E = $ === h, T = $ < h, I = N($, C);
          return /* @__PURE__ */ D("li", { className: Gt.item, children: [
            $ > 0 ? /* @__PURE__ */ o(
              "span",
              {
                className: [
                  Gt.connector,
                  T ? Gt.connectorCompleted : null
                ].filter(Boolean).join(" "),
                "aria-hidden": "true"
              }
            ) : null,
            /* @__PURE__ */ D(
              "button",
              {
                type: "button",
                "data-step": $,
                "aria-current": E ? "step" : void 0,
                "aria-disabled": I ? "true" : void 0,
                disabled: I,
                tabIndex: I ? -1 : 0,
                className: [
                  Gt.step,
                  E ? Gt.active : null,
                  T ? Gt.completed : null,
                  I ? Gt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => {
                  I || x($);
                },
                children: [
                  /* @__PURE__ */ o("span", { className: Gt.circle, "aria-hidden": "true", children: T ? /* @__PURE__ */ o("span", { className: Gt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Ie, { icon: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ o("span", { className: Gt.icon, children: C.icon }) : /* @__PURE__ */ o("span", { className: Gt.number, children: $ + 1 }) }),
                  /* @__PURE__ */ o("span", { className: Gt.text, children: C.text })
                ]
              }
            )
          ] }, `${C.text}-${$}`);
        }) })
      }
    )
  );
}
const W2 = "_root_12hod_1", q2 = "_horizontal_12hod_13", K2 = "_vertical_12hod_17", G2 = "_pane_12hod_21", V2 = "_handle_12hod_31", Y2 = "_handleHorizontal_12hod_51", X2 = "_handleVertical_12hod_57", Z2 = "_handleGrip_12hod_63", J2 = "_handleCollapseHint_12hod_75", Q2 = "_collapseBtn_12hod_79", ek = "_collapseBtnCollapsed_12hod_109", pn = {
  root: W2,
  horizontal: q2,
  vertical: K2,
  pane: G2,
  handle: V2,
  handleHorizontal: Y2,
  handleVertical: X2,
  handleGrip: Z2,
  handleCollapseHint: J2,
  collapseBtn: Q2,
  collapseBtnCollapsed: ek
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
function zn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function nO({
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
  const d = e ?? t ?? "horizontal", u = d === "horizontal", f = ae(null), y = H(() => {
    const O = n.length;
    if (O === 0) return [];
    const z = n.map((P) => P.size ? Ur(P.size, 100 / O) : 100 / O), L = z.reduce((P, j) => P + j, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? z.map((P) => P / L * 100) : z;
  }, [n]), [m, g] = W(() => y()), [_, b] = W(
    () => n.map((O) => !!O.collapsed)
  ), h = ae(m), [p, x] = W(n);
  n !== p && (x(n), b(n.map((O) => !!O.collapsed)));
  const N = H(
    () => n.map((O) => Ur(O.min, 0)),
    [n]
  ), v = H(
    () => n.map((O) => Ur(O.max, 100)),
    [n]
  ), C = H(
    (O, z) => {
      const L = { paneIndex: O, newSize: z, cancel: !1 };
      return (r ?? a)?.(L), !L.cancel;
    },
    [r, a]
  ), $ = H(
    (O, z) => {
      const L = { paneIndex: O, collapse: z, cancel: !1 };
      return (i ?? c)?.(L), !L.cancel;
    },
    [i, c]
  ), E = H(
    (O) => {
      const z = !_[O];
      $(O, z) && (z ? (h.current = [...m], b((L) => {
        const P = [...L];
        return P[O] !== void 0 && (P[O] = !0), P;
      }), g((L) => {
        const P = [...L], j = P[O] ?? 0, q = O < P.length - 1 ? O + 1 : O - 1;
        if (q >= 0 && q < P.length) {
          const se = P[q] ?? 0;
          P[q] = se + j, P[O] = 0;
        } else
          P[O] = 0;
        return P;
      })) : (b((L) => {
        const P = [...L];
        return P[O] !== void 0 && (P[O] = !1), P;
      }), g(() => {
        const L = [...h.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [_, m, n, $]
  ), T = ae(
    null
  ), I = H(
    (O, z, L) => {
      const P = f.current;
      if (!P) return null;
      const j = P.getBoundingClientRect();
      let q;
      if (u) {
        if (j.width === 0) return null;
        q = (z - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        q = (L - j.top) / j.height * 100;
      }
      let se = 0;
      for (let ne = 0; ne < O; ne++) {
        const V = m[ne];
        V !== void 0 && (se += V);
      }
      return q - se;
    },
    [u, m]
  ), A = (O, z) => {
    z.preventDefault();
    const L = z.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(z.pointerId), T.current = { handleIndex: O, pointerId: z.pointerId };
  }, M = (O) => {
    if (!T.current || T.current.pointerId !== O.pointerId)
      return;
    O.preventDefault();
    const z = T.current.handleIndex, L = I(z, O.clientX, O.clientY);
    if (L == null) return;
    const P = N(), j = v(), q = P[z] ?? 0, se = j[z] ?? 100, le = z + 1, ne = P[le] ?? 0, V = j[le] ?? 100, Ee = m[z] ?? 0, Q = m[le] ?? 0, J = Ee + Q;
    if (J <= 0) return;
    let X = zn(L, q, se), ue = J - X;
    if (ue < ne) {
      if (ue = ne, X = J - ue, X < q || X > se) return;
    } else if (ue > V && (ue = V, X = J - ue, X < q || X > se))
      return;
    X = zn(X, q, se), ue = J - X, C(z, X) && g((ie) => {
      const xe = [...ie];
      return xe[z] = X, xe[le] = ue, xe;
    });
  }, k = (O) => {
    !T.current || T.current.pointerId !== O.pointerId || (T.current = null);
  }, w = (O, z) => {
    const L = N(), P = v(), j = O, q = O + 1, se = m[j] ?? 0, le = m[q] ?? 0, ne = se + le;
    let V = 0;
    const Ee = !!n[j]?.collapsible, Q = !!n[q]?.collapsible;
    if (u ? z.key === "ArrowLeft" ? V = -5 : z.key === "ArrowRight" && (V = 5) : z.key === "ArrowUp" ? V = -5 : z.key === "ArrowDown" && (V = 5), z.key === "Home") {
      z.preventDefault();
      let J = L[j] ?? 0, X = ne - J;
      if (X = zn(
        X,
        L[q] ?? 0,
        P[q] ?? 100
      ), J = ne - X, J = zn(J, L[j] ?? 0, P[j] ?? 100), !C(j, J)) return;
      g((ue) => {
        const ie = [...ue];
        return ie[j] = J, ie[q] = X, ie;
      });
      return;
    }
    if (z.key === "End") {
      z.preventDefault();
      let J = P[j] ?? 100;
      J = Math.min(J, ne - (L[q] ?? 0));
      let X = ne - J;
      if (X = zn(
        X,
        L[q] ?? 0,
        P[q] ?? 100
      ), J = ne - X, J = zn(J, L[j] ?? 0, P[j] ?? 100), !C(j, J)) return;
      g((ue) => {
        const ie = [...ue];
        return ie[j] = J, ie[q] = X, ie;
      });
      return;
    }
    if ((z.key === "Enter" || z.key === " ") && (Ee || Q)) {
      z.preventDefault(), E(Ee ? j : q);
      return;
    }
    if (V !== 0) {
      z.preventDefault();
      let J = se + V, X = ne - J;
      const ue = L[j] ?? 0, ie = P[j] ?? 100, xe = L[q] ?? 0, Y = P[q] ?? 100;
      if (J = zn(J, ue, ie), X = ne - J, (X < xe || X > Y) && (X = zn(X, xe, Y), J = ne - X, J = zn(J, ue, ie), X = ne - J), !C(j, J)) return;
      g(($e) => {
        const re = [...$e];
        return re[j] = J, re[q] = X, re;
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
      children: n.map((O, z) => {
        const L = !!_[z], P = L ? 0 : m[z] ?? 100 / n.length, j = L ? { display: "none" } : u ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, q = Ur(O.min, 0), se = Ur(O.max, 100), le = z < n.length - 1, ne = !!n[z + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": O.label ?? `Pane ${z + 1}`,
              className: pn.pane,
              style: j,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : O.children,
                O.collapsible && !L ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Collapse pane ${z + 1}`,
                    "aria-expanded": !L,
                    onClick: () => E(z),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                O.collapsible && L ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Expand pane ${z + 1}`,
                    "aria-expanded": !L,
                    onClick: () => E(z),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && O.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: pn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${z + 1}`,
                "aria-expanded": "false",
                onClick: () => E(z),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          le ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- focusable separator with arrow-key resize (handleSeparatorKeyDown); pointer drag is the mouse equivalent
            /* @__PURE__ */ D(
              "div",
              {
                role: "separator",
                "aria-orientation": d,
                "aria-valuemin": q,
                "aria-valuemax": se,
                "aria-valuenow": Math.round(P),
                "aria-label": `Resize handle ${z + 1}`,
                tabIndex: L || _[z + 1] ? -1 : 0,
                className: [
                  pn.handle,
                  u ? pn.handleHorizontal : pn.handleVertical
                ].filter(Boolean).join(" "),
                onPointerDown: (V) => A(z, V),
                onPointerMove: M,
                onPointerUp: k,
                onKeyDown: (V) => w(z, V),
                children: [
                  /* @__PURE__ */ o("span", { className: pn.handleGrip, "aria-hidden": "true" }),
                  (O.collapsible || ne) && /* @__PURE__ */ o(
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
        ] }, z);
      })
    }
  );
}
const tk = "_root_1w3wd_1", nk = "_list_1w3wd_5", rk = "_vertical_1w3wd_14", ok = "_horizontal_1w3wd_20", sk = "_item_1w3wd_28", ak = "_link_1w3wd_32", lk = "_active_1w3wd_57", br = {
  root: tk,
  list: nk,
  vertical: rk,
  horizontal: ok,
  item: sk,
  link: ak,
  active: lk
};
function rO({
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
  const d = t ?? n, u = r ?? a ?? "vertical", [f, y] = W(
    () => e[0]?.selector ?? null
  ), m = ae(f);
  Oe(() => {
    m.current = f;
  });
  const g = H(
    (_, b) => {
      if (y(_.selector), (i ?? c)?.({ text: _.text, selector: _.selector }), b) {
        try {
          b.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          b.scrollIntoView();
        }
        const p = b;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [i, c]
  );
  return Oe(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (d) {
        const v = document.querySelector(d);
        if (v) return v;
      }
      return window;
    })();
    let h = null;
    const p = /* @__PURE__ */ new Map(), x = () => {
      let v = null, C = null;
      for (const E of e) {
        const T = document.querySelector(E.selector);
        if (!T) continue;
        p.set(E.selector, T);
        const I = T.getBoundingClientRect();
        let A = I.top;
        if (b !== window) {
          const M = b.getBoundingClientRect();
          A = I.top - M.top;
        }
        A <= 80 ? (!C || A > C.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (C = { sel: E.selector, el: T }) : (!v || A < v.top) && (v = { sel: E.selector, top: A });
      }
      const $ = C?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      $ && $ !== m.current && y($);
    }, N = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const v = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((C) => {
        const $ = C.filter((E) => E.isIntersecting).sort((E, T) => E.boundingClientRect.top - T.boundingClientRect.top);
        if ($[0]) {
          const E = $[0].target;
          for (const T of e) {
            if (document.querySelector(T.selector) === E) {
              y(T.selector);
              break;
            }
            if (T.selector.startsWith("#") && E.id === T.selector.slice(1)) {
              y(T.selector);
              break;
            }
          }
        } else
          x();
      }, v);
      for (const C of e) {
        const $ = document.querySelector(C.selector);
        $ && (h.observe($), p.set(C.selector, $));
      }
    }
    return b === window ? (window.addEventListener("scroll", N, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", N), h?.disconnect();
    }) : (b.addEventListener("scroll", N, {
      passive: !0
    }), x(), () => {
      b.removeEventListener("scroll", N), h?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [br.root, br[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: br.list, children: e.map((_) => {
        const b = _.selector === f;
        return /* @__PURE__ */ o("li", { className: br.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: _.selector.startsWith("#") || _.selector.startsWith(".") ? _.selector : `#${_.selector}`,
            className: [br.link, b ? br.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const p = document.querySelector(_.selector);
              g(_, p);
            },
            children: _.text
          }
        ) }, `${_.text}-${_.selector}`);
      }) })
    }
  );
}
const ik = "_root_1bfit_1", ck = "_viewport_1bfit_17", dk = "_slide_1bfit_24", uk = "_active_1bfit_33", fk = "_arrow_1bfit_37", pk = "_prev_1bfit_71", _k = "_next_1bfit_75", hk = "_pauseBtn_1bfit_79", mk = "_indicators_1bfit_110", gk = "_indicator_1bfit_110", yk = "_indicatorActive_1bfit_145", _n = {
  root: ik,
  viewport: ck,
  slide: dk,
  active: uk,
  arrow: fk,
  prev: pk,
  next: _k,
  pauseBtn: hk,
  indicators: mk,
  indicator: gk,
  indicatorActive: yk
};
function oO({
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
  showIndicators: y,
  ShowIndicators: m,
  onChange: g,
  Change: _,
  ariaLabel: b = "Carousel",
  className: h
}) {
  const p = t ?? n, x = p !== void 0, [N, v] = W(() => Math.min(Math.max(0, p ?? r), Math.max(0, e.length - 1))), C = x ? p : N, $ = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), E = a ?? i ?? !1, T = c ?? s ?? 3e3, I = l ?? d ?? !0, A = u ?? f ?? !0, M = y ?? m ?? !0, [k, w] = W(!1), [O, z] = W(!1), L = k || O, P = ae(null), j = ct(), q = H(
    (ue) => {
      const ie = e.length === 0 ? 0 : (ue % e.length + e.length) % e.length;
      x || v(ie), (g ?? _)?.(ie);
    },
    [x, g, _, e.length]
  ), se = H(() => {
    q($ - 1);
  }, [q, $]), le = H(() => {
    q($ + 1);
  }, [q, $]), ne = H(
    (ue) => {
      q(ue);
    },
    [q]
  );
  Oe(() => {
    if (!E || L || e.length <= 1) return;
    const ue = setInterval(() => {
      q($ + 1);
    }, T);
    return () => clearInterval(ue);
  }, [E, L, T, $, q, e.length]);
  const V = (ue) => {
    e.length !== 0 && (ue.key === "ArrowLeft" ? (ue.preventDefault(), se()) : ue.key === "ArrowRight" ? (ue.preventDefault(), le()) : ue.key === "Home" ? (ue.preventDefault(), ne(0)) : ue.key === "End" && (ue.preventDefault(), ne(e.length - 1)));
  }, Ee = () => {
    I && E && z(!0);
  }, Q = () => {
    I && E && z(!1);
  }, J = () => {
    I && E && z(!0);
  }, X = () => {
    I && E && z(!1);
  };
  return e.length === 0 ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover pause/play plus arrow-key handlers; this region is the carousel's keyboard control surface
    /* @__PURE__ */ D(
      "div",
      {
        ref: P,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": b,
        tabIndex: 0,
        className: [_n.root, h].filter(Boolean).join(" "),
        onKeyDown: V,
        onMouseEnter: Ee,
        onMouseLeave: Q,
        onFocusCapture: J,
        onBlurCapture: X,
        children: [
          /* @__PURE__ */ o("div", { id: j, className: _n.viewport, children: e.map((ue, ie) => {
            const xe = ie === $;
            return /* @__PURE__ */ o(
              "div",
              {
                role: "group",
                "aria-roledescription": "slide",
                "aria-label": `Slide ${ie + 1} of ${e.length}`,
                "aria-hidden": xe ? void 0 : !0,
                hidden: !xe,
                className: [_n.slide, xe ? _n.active : null].filter(Boolean).join(" "),
                children: ue
              },
              ie
            );
          }) }),
          A && e.length > 1 ? /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
                "aria-label": "Previous slide",
                "aria-controls": j,
                onClick: se,
                children: "‹"
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.next].filter(Boolean).join(" "),
                "aria-label": "Next slide",
                "aria-controls": j,
                onClick: le,
                children: "›"
              }
            )
          ] }) : null,
          E ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: _n.pauseBtn,
              "aria-label": k ? "Resume" : "Pause",
              "aria-pressed": k,
              onClick: () => w((ue) => !ue),
              children: k ? "▶" : "⏸"
            }
          ) : null,
          M && e.length > 1 ? /* @__PURE__ */ o(
            "div",
            {
              className: _n.indicators,
              role: "group",
              "aria-label": "Slide indicators",
              children: e.map((ue, ie) => {
                const xe = ie === $;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: [
                      _n.indicator,
                      xe ? _n.indicatorActive : null
                    ].filter(Boolean).join(" "),
                    "aria-label": `Go to slide ${ie + 1}`,
                    "aria-current": xe ? "true" : void 0,
                    "aria-controls": j,
                    onClick: () => ne(ie)
                  },
                  ie
                );
              })
            }
          ) : null
        ]
      }
    )
  );
}
const bk = "_root_1aa5u_1", xk = "_group_1aa5u_20", vk = "_itemWrapper_1aa5u_30", wk = "_treeitem_1aa5u_34", kk = "_disabled_1aa5u_50", Nk = "_selected_1aa5u_60", $k = "_caret_1aa5u_66", Sk = "_caretIcon_1aa5u_113", Ok = "_caretOpen_1aa5u_120", Ek = "_caretPlaceholder_1aa5u_124", Tk = "_label_1aa5u_130", Ck = "_loading_1aa5u_137", Mk = "_loadingRow_1aa5u_143", Ak = "_empty_1aa5u_149", Dk = "_checkbox_1aa5u_155", zt = {
  root: bk,
  group: xk,
  itemWrapper: vk,
  treeitem: wk,
  disabled: kk,
  selected: Nk,
  caret: $k,
  caretIcon: Sk,
  caretOpen: Ok,
  caretPlaceholder: Ek,
  label: Tk,
  loading: Ck,
  loadingRow: Mk,
  empty: Ak,
  checkbox: Dk
};
function Ik({
  indeterminate: e,
  ...t
}) {
  const n = ae(null);
  return Oe(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function sO({
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
  selectedItems: y,
  SelectedItems: m,
  defaultSelectedItem: g,
  defaultSelectedItems: _,
  onChange: b,
  Change: h,
  onExpand: p,
  Expand: x,
  onCollapse: N,
  Collapse: v,
  loadChildData: C,
  LoadChildData: $,
  template: E,
  Template: T,
  itemTemplate: I,
  ItemTemplate: A,
  ariaLabel: M,
  AriaLabel: k,
  allowCheckBoxes: w = !1,
  checkedKeys: O,
  defaultCheckedKeys: z,
  onCheckedChange: L,
  allowCheckChildren: P = !0,
  className: j
}) {
  const q = Ne(() => e ?? t ?? [], [e, t]), se = n ?? r, le = a ?? i ?? "text", ne = c ?? s ?? "id", V = l ?? d ?? "single", Ee = M ?? k ?? "Tree", Q = C ?? $, J = E ?? T ?? I ?? A, X = H(
    (Z) => {
      const ce = Z[ne];
      return ce != null ? String(ce) : String(Z.id ?? "");
    },
    [ne]
  ), ue = H(
    (Z) => {
      const ce = Z[le];
      if (ce != null) return String(ce);
      const he = Z.text;
      return he != null ? String(he) : "";
    },
    [le]
  ), ie = H(
    (Z) => {
      if (se) {
        const he = se(Z);
        if (he !== void 0) return he;
      }
      const ce = Z.children;
      if (Array.isArray(ce)) return ce;
    },
    [se]
  ), xe = H(
    (Z) => {
      const ce = /* @__PURE__ */ new Set(), he = (ke) => {
        for (const ve of ke) {
          const Me = X(ve);
          ve.expanded && ce.add(Me);
          const Ye = ie(ve);
          Ye && Ye.length > 0 && he(Ye);
        }
      };
      return he(Z), ce;
    },
    [X, ie]
  ), [Y, $e] = W(
    () => xe(q)
  ), [re, Ae] = W(
    () => /* @__PURE__ */ new Map()
  ), [ge, qe] = W(() => /* @__PURE__ */ new Set()), Je = u ?? f, Ge = y ?? m, gt = V === "multiple" ? Ge !== void 0 : Je !== void 0, ee = H(() => {
    if (V === "multiple") {
      if (_ && _.length > 0)
        return new Set(_.map((he) => X(he)));
      const Z = /* @__PURE__ */ new Set(), ce = (he) => {
        for (const ke of he) {
          ke.selected && Z.add(X(ke));
          const ve = ie(ke);
          ve && ce(ve);
        }
      };
      return ce(q), Z;
    } else {
      if (g) return /* @__PURE__ */ new Set([X(g)]);
      let Z = null;
      const ce = (he) => {
        for (const ke of he) {
          if (ke.selected)
            return Z = X(ke), !0;
          const ve = ie(ke);
          if (ve && ce(ve)) return !0;
        }
        return !1;
      };
      return ce(q), Z ? /* @__PURE__ */ new Set([Z]) : /* @__PURE__ */ new Set();
    }
  }, [
    V,
    g,
    _,
    X,
    ie,
    q
  ]), [Te, lt] = W(
    () => ee()
  ), Le = Ne(() => {
    if (V === "multiple") {
      if (Ge !== void 0) {
        const Z = Ge;
        return Z ? new Set(Z.map((ce) => X(ce))) : /* @__PURE__ */ new Set();
      }
      return Te;
    } else {
      if (Je !== void 0) {
        const Z = Je;
        return Z ? /* @__PURE__ */ new Set([X(Z)]) : /* @__PURE__ */ new Set();
      }
      return Te;
    }
  }, [
    V,
    Ge,
    Je,
    Te,
    X
  ]), st = H(
    (Z) => {
      let ce;
      const he = (ke) => {
        for (const ve of ke) {
          if (X(ve) === Z)
            return ce = ve, !0;
          const Ye = re.get(X(ve)) ?? ie(ve);
          if (Ye && he(Ye)) return !0;
        }
        return !1;
      };
      if (he(q), !ce) {
        for (const ke of re.values())
          if (he(ke)) break;
      }
      return ce;
    },
    [q, re, X, ie]
  ), Xe = H(() => {
    const Z = /* @__PURE__ */ new Map(), ce = (he) => {
      for (const ke of he) {
        const ve = X(ke);
        Z.set(ve, ke);
        const Ye = re.get(ve) ?? ie(ke);
        Ye && ce(Ye);
      }
    };
    return ce(q), Z;
  }, [q, re, X, ie]), Tt = H(
    (Z) => {
      const ce = X(Z);
      if (!Z.disabled)
        if (V === "multiple") {
          const ke = new Set(Le);
          ke.has(ce) ? ke.delete(ce) : ke.add(ce), gt || lt(ke);
          const ve = b ?? h;
          if (ve) {
            const Me = Xe(), Ye = [];
            for (const Fe of ke) {
              const dt = Me.get(Fe) ?? st(Fe);
              dt && Ye.push(dt);
            }
            ve({ item: Z, selectedItems: Ye });
          }
        } else if (!Le.has(ce) || Le.size !== 1 || !Le.has(ce)) {
          gt || lt(/* @__PURE__ */ new Set([ce]));
          const ve = b ?? h;
          ve && ve({ item: Z, selectedItem: Z });
        } else {
          const ve = b ?? h;
          ve && ve({ item: Z, selectedItem: Z });
        }
    },
    [
      X,
      V,
      Le,
      gt,
      b,
      h,
      Xe,
      st
    ]
  ), yt = H(
    async (Z) => {
      const ce = X(Z);
      if (!!Z.disabled) return;
      const ke = Y.has(ce), ve = p ?? x, Me = N ?? v, Ye = ie(Z), dt = re.get(ce) ?? Ye, je = !(dt !== void 0 && dt.length > 0) && Q != null;
      if (ke) {
        $e((tt) => {
          const ut = new Set(tt);
          return ut.delete(ce), ut;
        }), Me?.({ item: Z });
        return;
      }
      if (je) {
        if (ge.has(ce)) return;
        qe((tt) => {
          const ut = new Set(tt);
          return ut.add(ce), ut;
        });
        try {
          const ut = await Q(Z);
          Ae((Jt) => {
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
      Y,
      ie,
      re,
      Q,
      ge,
      p,
      x,
      N,
      v
    ]
  ), it = Ne(() => {
    const Z = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Set(), ke = (ve, Me) => {
      for (const Ye of ve) {
        const Fe = X(Ye);
        Z.has(Fe) || Z.set(Fe, []), ce.set(Fe, Me), Ye.disabled && he.add(Fe);
        const xt = re.get(Fe) ?? ie(Ye);
        xt && xt.length > 0 && (Z.set(
          Fe,
          xt.map((je) => X(je))
        ), ke(xt, Fe));
      }
    };
    return ke(q, null), { childrenOf: Z, parentOf: ce, disabledKeys: he };
  }, [q, re, X, ie]), ft = H(
    (Z) => {
      const ce = [], he = [...it.childrenOf.get(Z) ?? []];
      for (; he.length > 0; ) {
        const ke = he.pop();
        ce.push(ke), he.push(...it.childrenOf.get(ke) ?? []);
      }
      return ce;
    },
    [it]
  ), [Ve, Ct] = W(
    () => new Set(z ?? [])
  ), oe = Ne(
    () => O !== void 0 ? new Set(O) : Ve,
    [O, Ve]
  ), ze = H(
    (Z) => {
      const ce = it.disabledKeys;
      return ft(Z).filter((he) => !ce.has(he));
    },
    [ft, it]
  ), wt = H(
    (Z) => {
      if (oe.has(Z)) return !0;
      if (!w || !P) return !1;
      const ce = ze(Z);
      return ce.length > 0 && ce.every((he) => oe.has(he));
    },
    [oe, w, P, ze]
  ), Mt = H(
    (Z) => {
      if (!w || !P || oe.has(Z))
        return !1;
      const ce = ze(Z);
      if (ce.length === 0) return !1;
      const he = ce.filter((ke) => oe.has(ke)).length;
      return he > 0 && he < ce.length;
    },
    [oe, w, P, ze]
  ), bt = H(
    (Z) => {
      if (!w || Z.disabled) return;
      const ce = X(Z), he = new Set(oe);
      if (he.has(ce) || wt(ce)) {
        if (he.delete(ce), P)
          for (const ke of ze(ce)) he.delete(ke);
      } else if (he.add(ce), P)
        for (const ke of ze(ce)) he.add(ke);
      O === void 0 && Ct(he), L?.([...he]);
    },
    [
      w,
      P,
      O,
      oe,
      ze,
      X,
      wt,
      L
    ]
  ), R = Ne(() => {
    const Z = [], ce = (he, ke, ve) => {
      he.forEach((Me, Ye) => {
        const Fe = X(Me), dt = ue(Me), xt = re.get(Fe) ?? ie(Me);
        let je;
        re.has(Fe) ? je = re.get(Fe).length > 0 : xt !== void 0 ? je = xt.length > 0 : Q ? je = !0 : je = !1;
        const tt = Y.has(Fe), ut = !!Me.disabled, Jt = he.length, At = Ye + 1;
        if (Z.push({
          item: Me,
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
          const dn = re.get(Fe) ?? xt;
          dn && dn.length > 0 && ce(dn, ke + 1, Fe);
        }
      });
    };
    return ce(q, 1, null), Z;
  }, [
    q,
    X,
    ue,
    ie,
    re,
    Y,
    Q
  ]), [G, me] = W(
    () => R[0]?.key ?? null
  ), we = ae(""), pe = ae(null), F = ae(null), [_e, Re] = W({
    key: G,
    nodes: R
  });
  if (_e.key !== G || _e.nodes !== R) {
    if (Re({ key: G, nodes: R }), !G && R.length > 0) {
      const Z = R[0];
      Z && me(Z.key);
    } else if (G && !R.some((Z) => Z.key === G)) {
      const Z = R[0];
      me(Z ? Z.key : null);
    }
  }
  Oe(() => {
    if (G) {
      const Z = F.current?.querySelector(
        `[data-key="${CSS.escape(G)}"]`
      );
      let ce = null;
      Z || (ce = F.current?.querySelector(
        `[data-key="${G}"]`
      ) ?? null);
      const he = Z ?? ce;
      he && document.activeElement !== he && F.current?.contains(document.activeElement) && he.focus();
    }
  }, [G]);
  const De = H((Z) => {
    me(Z), requestAnimationFrame(() => {
      const ce = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(Z) : Z;
      let he = F.current?.querySelector(
        `[data-key="${ce}"]`
      );
      he || (he = F.current?.querySelector(`[data-key="${Z}"]`) ?? null), he?.focus();
    });
  }, []), It = H(
    (Z) => R.find((he) => he.key === Z)?.parentKey ?? null,
    [R]
  ), et = H(
    (Z) => {
      if (R.length === 0) return;
      const ce = G ? R.findIndex((ve) => ve.key === G) : -1, he = ce >= 0 ? R[ce] : void 0;
      let ke = null;
      if (Z.key === "ArrowDown") {
        if (Z.preventDefault(), ce === -1)
          ke = R[0]?.key ?? null;
        else {
          const ve = (ce + 1) % R.length, Me = R[ve];
          Me && (ke = Me.key);
        }
        ke && De(ke);
        return;
      }
      if (Z.key === "ArrowUp") {
        if (Z.preventDefault(), ce === -1) {
          const ve = R[R.length - 1];
          ve && (ke = ve.key);
        } else {
          const ve = (ce - 1 + R.length) % R.length, Me = R[ve];
          Me && (ke = Me.key);
        }
        ke && De(ke);
        return;
      }
      if (Z.key === "ArrowRight") {
        if (Z.preventDefault(), !he) return;
        if (he.hasChildren && !he.expanded)
          yt(he.item);
        else if (he.hasChildren && he.expanded) {
          const ve = ce + 1, Me = R[ve];
          Me && Me.parentKey === he.key && De(Me.key);
        }
        return;
      }
      if (Z.key === "ArrowLeft") {
        if (Z.preventDefault(), !he) return;
        if (he.hasChildren && he.expanded)
          yt(he.item);
        else {
          const ve = It(he.key);
          ve && De(ve);
        }
        return;
      }
      if (Z.key === "Home") {
        Z.preventDefault();
        const ve = R[0];
        ve && De(ve.key);
        return;
      }
      if (Z.key === "End") {
        Z.preventDefault();
        const ve = R[R.length - 1];
        ve && De(ve.key);
        return;
      }
      if (Z.key === "Enter" || Z.key === " ") {
        if (Z.key === " " && Z.target?.tagName === "INPUT" || (Z.preventDefault(), !he)) return;
        if (Z.key === " " && w) {
          const ve = st(he.key);
          ve && bt(ve);
          return;
        }
        Tt(he.item);
        return;
      }
      if (Z.key.length === 1 && /^[a-zA-Z0-9]$/.test(Z.key)) {
        Z.preventDefault();
        const ve = (we.current + Z.key).toLowerCase();
        we.current = ve, pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
          we.current = "";
        }, 500);
        const Me = ce >= 0 ? ce + 1 : 0, dt = [...R, ...R].slice(Me, Me + R.length).find((xt) => xt.text.toLowerCase().startsWith(ve));
        dt && De(dt.key);
        return;
      }
    },
    [
      R,
      G,
      De,
      yt,
      Tt,
      It,
      w,
      bt,
      st
    ]
  ), mn = H(() => {
    if (!G && R.length > 0) {
      const Z = R[0];
      Z && me(Z.key);
    }
  }, [G, R]), Nn = (Z, ce, he) => /* @__PURE__ */ o("ul", { role: "group", className: zt.group, children: Z.map((ke, ve) => {
    const Me = X(ke), Ye = ue(ke), Fe = re.get(Me) ?? ie(ke);
    let dt;
    re.has(Me) ? dt = re.get(Me).length > 0 : Fe !== void 0 ? dt = Fe.length > 0 : Q ? dt = !0 : dt = !1;
    const xt = Y.has(Me), je = Le.has(Me), tt = !!ke.disabled, ut = ge.has(Me), Jt = G === Me, At = Z.length, dn = ve + 1, Zn = J ? J(ke) : Ye, Jn = w ? {
      checked: wt(Me),
      indeterminate: Mt(Me)
    } : null;
    return /* @__PURE__ */ D("li", { role: "none", className: zt.itemWrapper, children: [
      /* @__PURE__ */ D(
        "div",
        {
          role: "treeitem",
          "data-key": Me,
          tabIndex: Jt ? 0 : -1,
          "aria-expanded": dt ? xt : void 0,
          "aria-selected": je,
          "aria-level": ce,
          "aria-setsize": At,
          "aria-posinset": dn,
          "aria-disabled": tt || void 0,
          "aria-busy": ut || void 0,
          className: [
            zt.treeitem,
            je ? zt.selected : null,
            tt ? zt.disabled : null,
            Jt ? zt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            De(Me), tt || Tt(ke);
          },
          onFocus: () => me(Me),
          children: [
            w ? /* @__PURE__ */ o(
              Ik,
              {
                className: zt.checkbox,
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
                className: zt.caret,
                "aria-label": `${xt ? "Collapse" : "Expand"} ${Ye}`,
                "aria-expanded": xt,
                tabIndex: -1,
                disabled: tt,
                onClick: (Fn) => {
                  Fn.stopPropagation(), De(Me), yt(ke);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      zt.caretIcon,
                      xt ? zt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(Ie, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ o(
              "span",
              {
                className: zt.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ o("span", { className: zt.label, children: Zn }),
            ut ? /* @__PURE__ */ o("span", { className: zt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && xt ? ut ? /* @__PURE__ */ o("div", { className: zt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? Nn(Fe, ce + 1) : re.has(Me) && re.get(Me).length > 0 ? Nn(
        re.get(Me),
        ce + 1
      ) : (Fe && Fe.length === 0, null) : null
    ] }, Me);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: F,
      role: "tree",
      "aria-label": Ee,
      "aria-multiselectable": V === "multiple" || void 0,
      tabIndex: 0,
      className: [zt.root, j].filter(Boolean).join(" "),
      onKeyDown: et,
      onFocus: mn,
      children: q.length === 0 ? /* @__PURE__ */ o("div", { className: zt.empty, children: "No items" }) : Nn(q, 1)
    }
  );
}
const Lk = "_root_10fdq_1", zk = "_panel_10fdq_8", Pk = "_header_10fdq_19", Rk = "_listbox_10fdq_28", jk = "_option_10fdq_42", Bk = "_disabled_10fdq_57", Fk = "_active_10fdq_66", Hk = "_selected_10fdq_70", Uk = "_empty_10fdq_86", Wk = "_controls_10fdq_93", qk = "_reorder_10fdq_102", Kk = "_btn_10fdq_110", rt = {
  root: Lk,
  panel: zk,
  header: Pk,
  listbox: Rk,
  option: jk,
  disabled: Bk,
  active: Fk,
  selected: Hk,
  empty: Uk,
  controls: Wk,
  reorder: qk,
  btn: Kk
};
function Pt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function mo(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function aO({
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
  onTargetChange: y,
  TargetChange: m,
  keyProperty: g,
  KeyProperty: _,
  onMove: b,
  Move: h,
  ariaLabel: p,
  AriaLabel: x,
  className: N
}) {
  const v = g ?? _ ?? "id", C = p ?? x ?? "PickList", $ = e ?? t ?? a ?? i ?? l ?? d ?? [], E = n ?? r ?? c ?? s ?? [], [T, I] = W(() => [
    ...$
  ]), [A, M] = W(() => [
    ...E
  ]), k = e ?? t ?? a ?? i ?? l ?? d, [w, O] = W(k);
  k !== w && (O(k), k !== void 0 && I([...k]));
  const z = n ?? r ?? c ?? s, [L, P] = W(z);
  z !== L && (P(z), z !== void 0 && M([...z]));
  const [j, q] = W(
    () => /* @__PURE__ */ new Set()
  ), [se, le] = W(
    () => /* @__PURE__ */ new Set()
  ), [ne, V] = W(() => {
    const R = $.findIndex((G) => !G.disabled);
    return R >= 0 ? R : 0;
  }), [Ee, Q] = W(() => {
    const R = E.findIndex((G) => !G.disabled);
    return R >= 0 ? R : 0;
  }), J = Ne(
    () => T.map((R, G) => R.disabled ? -1 : G).filter((R) => R >= 0),
    [T]
  ), X = Ne(
    () => A.map((R, G) => R.disabled ? -1 : G).filter((R) => R >= 0),
    [A]
  ), ue = {
    active: ne,
    len: T.length,
    idxs: J
  }, [ie, xe] = W(ue);
  if (ie.active !== ue.active || ie.len !== ue.len || ie.idxs !== ue.idxs) {
    if (xe(ue), ne >= T.length) {
      const R = J[J.length - 1];
      V(R ?? 0);
    } else if (T.length > 0 && J.length > 0 && !J.includes(ne)) {
      const R = J[0];
      R !== void 0 && V(R);
    }
  }
  const Y = {
    active: Ee,
    len: A.length,
    idxs: X
  }, [$e, re] = W(Y);
  if ($e.active !== Y.active || $e.len !== Y.len || $e.idxs !== Y.idxs) {
    if (re(Y), Ee >= A.length) {
      const R = X[X.length - 1];
      Q(R ?? 0);
    } else if (A.length > 0 && X.length > 0 && !X.includes(Ee)) {
      const R = X[0];
      R !== void 0 && Q(R);
    }
  }
  const [Ae, ge] = W({
    items: T,
    key: v
  });
  (Ae.items !== T || Ae.key !== v) && (ge({ items: T, key: v }), q((R) => {
    const G = /* @__PURE__ */ new Set();
    for (const me of R)
      T.some(
        (pe) => Pt(pe, v) === me && !pe.disabled
      ) && G.add(me);
    return G.size === R.size ? R : G;
  }));
  const [qe, Je] = W({
    items: A,
    key: v
  });
  (qe.items !== A || qe.key !== v) && (Je({ items: A, key: v }), le((R) => {
    const G = /* @__PURE__ */ new Set();
    for (const me of R)
      A.some(
        (pe) => Pt(pe, v) === me && !pe.disabled
      ) && G.add(me);
    return G.size === R.size ? R : G;
  }));
  const Ge = H(
    (R) => {
      (u ?? f)?.(R);
    },
    [u, f]
  ), Qe = H(
    (R) => {
      (y ?? m)?.(R);
    },
    [y, m]
  ), He = H(
    (R) => {
      (b ?? h)?.(R);
    },
    [b, h]
  ), gt = H(
    (R) => {
      const G = T[R];
      if (!G || G.disabled) return;
      const me = Pt(G, v);
      q((we) => {
        const pe = new Set(we);
        return pe.has(me) ? pe.delete(me) : pe.add(me), pe;
      }), V(R);
    },
    [T, v]
  ), ee = H(
    (R) => {
      const G = A[R];
      if (!G || G.disabled) return;
      const me = Pt(G, v);
      le((we) => {
        const pe = new Set(we);
        return pe.has(me) ? pe.delete(me) : pe.add(me), pe;
      }), Q(R);
    },
    [A, v]
  ), Te = H(() => {
    const R = [], G = [];
    for (const F of T) {
      const _e = Pt(F, v);
      j.has(_e) && !F.disabled ? R.push(F) : G.push(F);
    }
    if (R.length === 0) return;
    const me = G, we = [...A, ...R];
    I(me), M(we), q(/* @__PURE__ */ new Set());
    const pe = new Set(R.map((F) => Pt(F, v)));
    le(pe), Ge(me), Qe(we), He({
      source: me,
      target: we,
      moved: R,
      direction: "toTarget"
    });
  }, [
    T,
    A,
    j,
    v,
    Ge,
    Qe,
    He
  ]), lt = H(() => {
    const R = [], G = [];
    for (const F of A) {
      const _e = Pt(F, v);
      se.has(_e) && !F.disabled ? R.push(F) : G.push(F);
    }
    if (R.length === 0) return;
    const me = G, we = [...T, ...R];
    M(me), I(we), le(/* @__PURE__ */ new Set());
    const pe = new Set(R.map((F) => Pt(F, v)));
    q(pe), Ge(we), Qe(me), He({
      source: we,
      target: me,
      moved: R,
      direction: "toSource"
    });
  }, [
    T,
    A,
    se,
    v,
    Ge,
    Qe,
    He
  ]), Le = H(() => {
    const R = T.filter((we) => !we.disabled);
    if (R.length === 0) return;
    const G = T.filter((we) => !!we.disabled), me = [...A, ...R];
    I(G), M(me), q(/* @__PURE__ */ new Set()), Ge(G), Qe(me), He({
      source: G,
      target: me,
      moved: R,
      direction: "allToTarget"
    });
  }, [T, A, Ge, Qe, He]), st = H(() => {
    const R = A.filter((we) => !we.disabled);
    if (R.length === 0) return;
    const G = A.filter((we) => !!we.disabled), me = [...T, ...R];
    M(G), I(me), le(/* @__PURE__ */ new Set()), Ge(me), Qe(G), He({
      source: me,
      target: G,
      moved: R,
      direction: "allToSource"
    });
  }, [T, A, Ge, Qe, He]), Xe = H(() => {
    if (se.size === 0) return;
    const R = [...A], G = se, me = [];
    for (let pe = 1; pe < R.length; pe++) {
      const F = R[pe], _e = R[pe - 1];
      if (!F || !_e) continue;
      const Re = Pt(F, v), De = Pt(_e, v);
      G.has(Re) && !G.has(De) && !F.disabled && !_e.disabled && (R[pe - 1] = F, R[pe] = _e, me.push(F));
    }
    if (me.length === 0) return;
    M(R), Qe(R), He({ source: T, target: R, moved: me, direction: "up" });
    const we = Array.from(G)[0];
    if (we) {
      const pe = R.findIndex(
        (F) => Pt(F, v) === we
      );
      pe >= 0 && Q(pe);
    }
  }, [
    A,
    se,
    v,
    T,
    Qe,
    He
  ]), Tt = H(() => {
    if (se.size === 0) return;
    const R = [...A], G = se, me = [];
    for (let pe = R.length - 2; pe >= 0; pe--) {
      const F = R[pe], _e = R[pe + 1];
      if (!F || !_e) continue;
      const Re = Pt(F, v), De = Pt(_e, v);
      G.has(Re) && !G.has(De) && !F.disabled && !_e.disabled && (R[pe] = _e, R[pe + 1] = F, me.push(F));
    }
    if (me.length === 0) return;
    M(R), Qe(R), He({ source: T, target: R, moved: me, direction: "down" });
    const we = Array.from(G)[0];
    if (we) {
      const pe = R.findIndex(
        (F) => Pt(F, v) === we
      );
      pe >= 0 && Q(pe);
    }
  }, [
    A,
    se,
    v,
    T,
    Qe,
    He
  ]), yt = j.size > 0, it = se.size > 0, ft = ae(""), Ve = ae(
    null
  ), Ct = ae(""), oe = ae(
    null
  ), ze = H(
    (R) => {
      if (T.length === 0) return;
      const G = J;
      if (G.length === 0) return;
      const me = G.includes(ne) ? ne : G[0] ?? 0;
      let we = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const pe = G.indexOf(me);
        we = G[(pe + 1) % G.length] ?? G[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const pe = G.indexOf(me);
        we = G[(pe - 1 + G.length) % G.length] ?? G[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), we = G[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), we = G[G.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), gt(me);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const pe = (ft.current + R.key).toLowerCase();
        ft.current = pe, Ve.current && clearTimeout(Ve.current), Ve.current = setTimeout(() => {
          ft.current = "";
        }, 500);
        const F = [...G, ...G], _e = G.indexOf(me) + 1, Re = F.slice(_e).find(
          (De) => mo(T[De]).toLowerCase().startsWith(pe)
        );
        Re != null && V(Re);
        return;
      }
      we >= 0 && V(we);
    },
    [T, J, ne, gt]
  ), wt = H(
    (R) => {
      if (A.length === 0) return;
      const G = X;
      if (G.length === 0) return;
      const me = G.includes(Ee) ? Ee : G[0] ?? 0;
      let we = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const pe = G.indexOf(me);
        we = G[(pe + 1) % G.length] ?? G[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const pe = G.indexOf(me);
        we = G[(pe - 1 + G.length) % G.length] ?? G[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), we = G[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), we = G[G.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), ee(me);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const pe = (Ct.current + R.key).toLowerCase();
        Ct.current = pe, oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => {
          Ct.current = "";
        }, 500);
        const F = [...G, ...G], _e = G.indexOf(me) + 1, Re = F.slice(_e).find(
          (De) => mo(A[De]).toLowerCase().startsWith(pe)
        );
        Re != null && Q(Re);
        return;
      }
      we >= 0 && Q(we);
    },
    [A, X, Ee, ee]
  ), Mt = ae(null), bt = ae(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [rt.root, N].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ D("div", { className: rt.panel, children: [
          /* @__PURE__ */ o("div", { className: rt.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: Mt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: rt.listbox,
              onKeyDown: ze,
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
              ) : T.map((R, G) => {
                const me = Pt(R, v), we = j.has(me), pe = G === ne, F = !!R.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleSourceKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": we,
                      "aria-disabled": F || void 0,
                      tabIndex: -1,
                      "data-active": pe || void 0,
                      className: [
                        rt.option,
                        we ? rt.selected : null,
                        pe ? rt.active : null,
                        F ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => gt(G),
                      children: mo(R)
                    },
                    me
                  )
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: rt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !yt || void 0,
              disabled: !yt,
              onClick: Te,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all to target",
              "aria-disabled": T.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: T.filter((R) => !R.disabled).length === 0,
              onClick: Le,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all",
              "aria-disabled": T.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: T.filter((R) => !R.disabled).length === 0,
              onClick: Le,
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
              "aria-disabled": A.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: A.filter((R) => !R.disabled).length === 0,
              onClick: st,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: rt.panel, children: [
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
              ) : A.map((R, G) => {
                const me = Pt(R, v), we = se.has(me), pe = G === Ee, F = !!R.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleTargetKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": we,
                      "aria-disabled": F || void 0,
                      tabIndex: -1,
                      "data-active": pe || void 0,
                      className: [
                        rt.option,
                        we ? rt.selected : null,
                        pe ? rt.active : null,
                        F ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => ee(G),
                      children: mo(R)
                    },
                    me
                  )
                );
              })
            }
          ),
          /* @__PURE__ */ D("div", { className: rt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: rt.btn,
                "aria-label": "Move up",
                "aria-disabled": !it || void 0,
                disabled: !it,
                onClick: Xe,
                children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_up", size: "sm" })
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
                children: /* @__PURE__ */ o(Ie, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Gk = "_root_1qxsp_1", Vk = "_header_1qxsp_8", Yk = "_title_1qxsp_15", Xk = "_navBtn_1qxsp_20", Zk = "_resources_1qxsp_39", Jk = "_resource_1qxsp_39", Qk = "_grid_1qxsp_50", eN = "_timeCol_1qxsp_55", tN = "_timeCell_1qxsp_61", nN = "_dayCol_1qxsp_66", rN = "_dayHeader_1qxsp_73", oN = "_slot_1qxsp_81", sN = "_event_1qxsp_91", Vt = {
  root: Gk,
  header: Vk,
  title: Yk,
  navBtn: Xk,
  resources: Zk,
  resource: Jk,
  grid: Qk,
  timeCol: eN,
  timeCell: tN,
  dayCol: nN,
  dayHeader: rN,
  slot: oN,
  event: sN
};
function va(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function lO({
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
  ), f = n ?? d, y = (_) => {
    n || u(_), r?.(_);
  }, m = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (_, b) => {
    const h = new Date(f);
    return h.setDate(f.getDate() - f.getDay() + b), h;
  }) : Array.from({ length: 30 }, (_, b) => {
    const h = new Date(f);
    return h.setDate(1 + b), h;
  }), g = Array.from({ length: 12 }, (_, b) => 8 + b);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Vt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ D("div", { className: Vt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const _ = new Date(f);
                _.setDate(_.getDate() - 7), y(_);
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
                _.setDate(_.getDate() + 7), y(_);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: Vt.resources, children: a.map((_) => /* @__PURE__ */ o("div", { className: Vt.resource, children: _.name }, _.id)) }),
        /* @__PURE__ */ D("div", { className: Vt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Vt.timeCol, role: "presentation", children: g.map((_) => /* @__PURE__ */ D("div", { className: Vt.timeCell, children: [
            _,
            ":00"
          ] }, _)) }),
          m.map((_) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- day-level create affordance for the pointer; hour slots refine it and event buttons inside are the keyboard path
            /* @__PURE__ */ D(
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
                  g.map((b) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- hour slots refine the day-column click for the mouse; event buttons inside are native buttons
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: Vt.slot,
                        tabIndex: -1,
                        onClick: (h) => {
                          h.stopPropagation();
                          const p = new Date(_);
                          p.setHours(b), c?.({ date: p });
                        }
                      },
                      b
                    )
                  )),
                  e.filter((b) => b.start.toDateString() === _.toDateString()).map((b) => /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Vt.event,
                      "aria-label": `${b.title} ${va(b.start)} - ${va(b.end)}`,
                      "aria-pressed": !1,
                      onClick: () => i?.({ event: b }),
                      children: b.title
                    },
                    b.id
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
const aN = "_root_dj5ne_1", lN = "_header_dj5ne_8", iN = "_headerCell_dj5ne_15", cN = "_timeline_dj5ne_21", dN = "_row_dj5ne_26", uN = "_taskName_dj5ne_32", fN = "_timelineCell_dj5ne_37", pN = "_bar_dj5ne_43", _N = "_progress_dj5ne_56", hN = "_dep_dj5ne_61", Cn = {
  root: aN,
  header: lN,
  headerCell: iN,
  timeline: cN,
  row: dN,
  taskName: uN,
  timelineCell: fN,
  bar: pN,
  progress: _N,
  dep: hN
};
function iO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: a
}) {
  const [i, c] = W(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Cn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ D("div", { className: Cn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Cn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: Cn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ D(
          "div",
          {
            className: Cn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Cn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ D("div", { className: Cn.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Cn.bar,
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
                        className: Cn.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((l) => /* @__PURE__ */ o("svg", { className: Cn.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
const mN = "_root_4b64f_1", gN = "_fields_4b64f_6", yN = "_chip_4b64f_13", bN = "_table_4b64f_35", xN = "_totalRow_4b64f_55", vN = "_total_4b64f_55", xr = {
  root: mN,
  fields: gN,
  chip: yN,
  table: bN,
  totalRow: xN,
  total: vN
}, go = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Wr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function cO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, u = (b, h, p) => {
    const x = b === "row" ? s.filter((C) => C.property !== h) : s, N = b === "col" ? l.filter((C) => C.property !== h) : l, v = b === "agg" ? d.filter((C) => !(C.property === h && C.aggregate === p)) : d;
    a?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: v
    });
  }, f = (b, h) => h.map((p) => String(b[p.property])).join(""), y = [
    ...new Set(s.length ? e.map((b) => f(b, s)) : [""])
  ].sort(), m = [
    ...new Set(l.length ? e.map((b) => f(b, l)) : [""])
  ].sort(), g = (b, h, p) => {
    const x = e.filter(
      (v) => f(v, s) === b && f(v, l) === h
    ), N = x.map((v) => Number(v[p.property])).filter((v) => !Number.isNaN(v));
    return !N.length && p.aggregate !== "Count" ? 0 : go[p.aggregate](
      p.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, _ = (b, h, p, x) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: xr.chip,
      "aria-label": `Remove ${b} field ${p}`,
      onClick: () => u(b, h, x),
      children: [
        p,
        x ? ` (${x})` : ""
      ]
    },
    `${b}-${p}-${x ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [xr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: xr.fields, children: [
      s.map((b) => _("row", b.property, b.title ?? b.property)),
      l.map((b) => _("col", b.property, b.title ?? b.property)),
      d.map(
        (b) => _("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: xr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        m.map((b) => /* @__PURE__ */ o("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        y.map((b) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: b || "—" }),
          m.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: Wr(
                g(
                  b,
                  h,
                  d[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: d.length ? Wr(g(b, h, d[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: xr.total, children: d.length ? Wr(
            go[d[0].aggregate](
              m.flatMap(
                (h) => e.filter(
                  (p) => f(p, s) === b && f(p, l) === h
                ).map((p) => Number(p[d[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ D("tr", { className: xr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          m.map((b) => /* @__PURE__ */ o("td", { children: d.length ? Wr(
            go[d[0].aggregate](
              e.filter((h) => f(h, l) === b).map((h) => Number(h[d[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, b)),
          /* @__PURE__ */ o("td", { children: d.length ? Wr(
            go[d[0].aggregate](
              e.map((b) => Number(b[d[0].property])).filter((b) => !Number.isNaN(b))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const wN = "_root_1r7co_1", kN = "_reverse_1r7co_10", NN = "_item_1r7co_14", $N = "_marker_1r7co_35", SN = "_body_1r7co_46", ON = "_label_1r7co_50", EN = "_content_1r7co_56", sr = {
  root: wN,
  reverse: kN,
  item: NN,
  marker: $N,
  body: SN,
  label: ON,
  content: EN
};
function dO({
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
      children: a.map((i, c) => /* @__PURE__ */ D("li", { className: sr.item, children: [
        /* @__PURE__ */ o("span", { className: sr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: sr.body, children: [
          /* @__PURE__ */ o("div", { className: sr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: sr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const TN = "_root_rm4d8_1", CN = "_header_rm4d8_13", MN = "_headCell_rm4d8_22", AN = "_row_rm4d8_32", DN = "_cell_rm4d8_37", qr = {
  root: TN,
  header: CN,
  headCell: MN,
  row: AN,
  cell: DN
};
function uO({
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
  ), [d, u] = W(0), f = ae(/* @__PURE__ */ new Set()), y = Math.ceil(n / t), m = Math.max(0, Math.floor(d / t) - 3), g = Math.min(e, m + y + 6), _ = H(
    (h, p) => {
      let x = !1;
      for (let N = h; N < p; N++)
        !s.has(N) && !f.current.has(N) && (x = !0);
      if (x) {
        for (let N = h; N < p; N++) f.current.add(N);
        r({ skip: h, top: p }).then((N) => {
          l((v) => {
            const C = new Map(v);
            return N.forEach(($, E) => C.set(h + E, $)), C;
          });
          for (let v = h; v < p; v++) f.current.delete(v);
        });
      }
    },
    [s, r]
  );
  Oe(() => {
    _(m, g);
  }, [m, g, _]);
  const b = [];
  for (let h = m; h < g; h++) {
    const p = s.get(h) ?? {};
    b.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: qr.row,
          role: "row",
          style: { height: t },
          children: a.map((x) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: qr.cell,
              style: x.width ? { width: x.width } : void 0,
              children: String(p[x.property] ?? "")
            },
            x.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [qr.root, c].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (h) => u(h.target.scrollTop),
      onKeyDown: (h) => {
        const p = h.currentTarget;
        h.key === "ArrowDown" ? (h.preventDefault(), p.scrollTop += t) : h.key === "ArrowUp" ? (h.preventDefault(), p.scrollTop -= t) : h.key === "PageDown" ? (h.preventDefault(), p.scrollTop += n) : h.key === "PageUp" && (h.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: m * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: qr.header, role: "row", children: a.map((h) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: qr.headCell,
            style: {
              height: t,
              ...h.width ? { width: h.width } : {}
            },
            children: h.title ?? h.property
          },
          h.property
        )) }),
        b,
        /* @__PURE__ */ o(
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
      for (let m = 0; m < this.size; m++) f.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(d);
      if (this.drawCodewords(y), u == -1) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const _ = this.getPenaltyScore();
          _ < m && (u = g, m = _), this.applyMask(g);
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
    static encodeSegments(s, l, d = 1, u = 40, f = -1, y = !0) {
      if (!(t.MIN_VERSION <= d && d <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let m, g;
      for (m = d; ; m++) {
        const p = t.getNumDataCodewords(m, l) * 8, x = i.getTotalBits(s, m);
        if (x <= p) {
          g = x;
          break;
        }
        if (m >= u)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        y && g <= t.getNumDataCodewords(m, p) * 8 && (l = p);
      let _ = [];
      for (const p of s) {
        n(p.mode.modeBits, 4, _), n(p.numChars, p.mode.numCharCountBits(m), _);
        for (const x of p.getData()) _.push(x);
      }
      a(_.length == g);
      const b = t.getNumDataCodewords(m, l) * 8;
      a(_.length <= b), n(0, Math.min(4, b - _.length), _), n(0, (8 - _.length % 8) % 8, _), a(_.length % 8 == 0);
      for (let p = 236; _.length < b; p ^= 253)
        n(p, 8, _);
      let h = [];
      for (; h.length * 8 < _.length; ) h.push(0);
      return _.forEach(
        (p, x) => h[x >>> 3] |= p << 7 - (x & 7)
      ), new t(m, l, h, f);
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
        const u = r(l, d), f = this.size - 11 + d % 3, y = Math.floor(d / 3);
        this.setFunctionModule(f, y, u), this.setFunctionModule(y, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(d)), y = s + u, m = l + d;
          0 <= y && y < this.size && 0 <= m && m < this.size && this.setFunctionModule(y, m, f != 2 && f != 4);
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
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], f = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], y = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), m = u - y % u, g = Math.floor(y / u);
      let _ = [];
      const b = t.reedSolomonComputeDivisor(f);
      for (let p = 0, x = 0; p < u; p++) {
        let N = s.slice(
          x,
          x + g - f + (p < m ? 0 : 1)
        );
        x += N.length;
        const v = t.reedSolomonComputeRemainder(N, b);
        p < m && N.push(0), _.push(N.concat(v));
      }
      let h = [];
      for (let p = 0; p < _[0].length; p++)
        _.forEach((x, N) => {
          (p != g - f || N >= m) && h.push(x[p]);
        });
      return a(h.length == y), h;
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
            const y = d - f, g = (d + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[g][y] && l < s.length * 8 && (this.modules[g][y] = r(s[l >>> 3], 7 - (l & 7)), l++);
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
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[f][_] == y ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), y || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), y = this.modules[f][_], m = 1);
        s += this.finderPenaltyTerminateAndCount(y, m, g) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[_][f] == y ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), y || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), y = this.modules[_][f], m = 1);
        s += this.finderPenaltyTerminateAndCount(y, m, g) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let y = 0; y < this.size - 1; y++) {
          const m = this.modules[f][y];
          m == this.modules[f][y + 1] && m == this.modules[f + 1][y] && m == this.modules[f + 1][y + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const f of this.modules)
        l = f.reduce((y, m) => y + (m ? 1 : 0), l);
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
          (y, m) => d[m] ^= t.reedSolomonMultiply(y, f)
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
const IN = "_root_1leml_1", LN = {
  root: IN
}, zN = {
  low: kn.QrCode.Ecc.LOW,
  medium: kn.QrCode.Ecc.MEDIUM,
  quartile: kn.QrCode.Ecc.QUARTILE,
  high: kn.QrCode.Ecc.HIGH
};
function fO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = ae(null), u = ds("(prefers-color-scheme: dark)"), [f, y] = W(
    () => document.documentElement.dataset.theme ?? null
  );
  Oe(() => {
    const N = document.documentElement, v = new MutationObserver(() => {
      y(N.dataset.theme ?? null);
    });
    return v.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const m = Ne(() => {
    try {
      return kn.QrCode.encodeText(e, zN[r]);
    } catch {
      return null;
    }
  }, [e, r]), g = ae(null);
  Oe(() => {
    if (m !== null) {
      g.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (g.current?.value !== e || g.current?.onError !== s) && (g.current = { value: e, onError: s }, s?.(N));
  }, [m, e, s]);
  const _ = Math.max(0, Math.floor(a)), b = [LN.root, c].filter(Boolean).join(" ");
  if (Oe(() => {
    if (n !== "canvas" || m === null) return;
    const N = d.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const C = getComputedStyle(N), $ = C.getPropertyValue("--dx-text-color").trim() || "#000", E = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    PN(v, m, t, _, $, E);
  }, [n, m, t, _, u, f]), m === null)
    return /* @__PURE__ */ o("div", { className: b, role: "img", "aria-label": l, "data-qr-error": "true" });
  const h = m.size + _ * 2, p = t / h;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: d,
        className: b,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
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
            x: (v + _) * p,
            y: (N + _) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${v}-${N}`
        )
      );
  return /* @__PURE__ */ D(
    "svg",
    {
      className: b,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function PN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const RN = "_root_1v9la_1", jN = "_value_1v9la_9", wa = {
  root: RN,
  value: jN
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
], Na = 104, BN = 106;
function FN(e) {
  const t = [Na];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = Na;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, BN), t;
}
function pO({
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
    for (const u of FN(e)) {
      const f = ka[u] ?? ka[0];
      for (let y = 0; y < f.length; y++) {
        const m = Number(f[y]);
        y % 2 === 0 && l.push({ x: d, w: m }), d += m;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [wa.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
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
const HN = "_root_16i43_1", UN = "_svg_16i43_10", WN = "_gridline_16i43_15", qN = "_tickLabel_16i43_21", KN = "_axisTitle_16i43_27", GN = "_dataLabel_16i43_34", VN = "_gaugeValue_16i43_40", YN = "_legend_16i43_47", XN = "_legendItem_16i43_55", ZN = "_swatch_16i43_63", JN = "_tooltip_16i43_70", QN = "_visuallyHidden_16i43_84", Ze = {
  root: HN,
  svg: UN,
  gridline: WN,
  tickLabel: qN,
  axisTitle: KN,
  dataLabel: GN,
  gaugeValue: VN,
  legend: YN,
  legendItem: XN,
  swatch: ZN,
  tooltip: JN,
  visuallyHidden: QN
}, $a = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Ja = /* @__PURE__ */ new Set([
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
]), e$ = /* @__PURE__ */ new Set([...Ja, "heatmap"]);
function t$(e, t, n) {
  const r = t - e || 1, a = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / a) * a, c = Math.ceil(t / a) * a, s = [];
  for (let l = i; l <= c + 1e-9; l += a)
    s.push(Number(l.toFixed(6)));
  return { min: i, max: c, step: a, ticks: s };
}
function os(e) {
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
  return /* @__PURE__ */ D(
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
function Oo(e, t, n, r, a) {
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
function Qa(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Zr(e, t) {
  return e.percent ? `${t}%` : String(t);
}
const n$ = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function r$(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && n$.has(a.type)) return a;
  }
  return null;
}
function o$(e, t, n, r) {
  const a = r$(e, t, n);
  if (!a) return null;
  const i = os(a).filter((u) => !Number.isNaN(u.val));
  if (i.length === 0) return null;
  const c = i.map((u) => u.cat);
  let s;
  if (t.type === "trendline") {
    const u = i.length, f = i.map((p, x) => x), y = i.map((p) => p.val), m = f.reduce((p, x) => p + x, 0) / u, g = y.reduce((p, x) => p + x, 0) / u;
    let _ = 0, b = 0;
    for (let p = 0; p < u; p++)
      _ += (f[p] - m) * (y[p] - g), b += (f[p] - m) * (f[p] - m);
    const h = b === 0 ? 0 : _ / b;
    s = c.map((p, x) => ({
      cat: p,
      val: g + h * (x - m)
    }));
  } else {
    const u = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((f, y) => {
      if (y + 1 < u) return null;
      const m = i.slice(y + 1 - u, y + 1);
      return {
        cat: f.cat,
        val: m.reduce((g, _) => g + _.val, 0) / u
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
  }, d = os(l).map((u) => ({
    ...u,
    item: u.item.__item ?? u.item
  }));
  return el(e, l, n, d, r);
}
function s$(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((f, y) => [f, y])), s = n.map((f) => {
    const y = c.get(f.cat) ?? 0, m = f.min, g = f.max;
    return typeof m != "number" || Number.isNaN(m) || typeof g != "number" || Number.isNaN(g) ? null : { x: r(y), lo: a(m), hi: a(g) };
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
function a$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s } = e, l = i.l + c / 2, d = i.t + s / 2, u = Math.min(c, s) / 3, f = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, y = r.reduce((g, _) => g + (Number(_.val) || 0), 0);
  let m = -90;
  return Zt(
    n,
    t,
    r.map((g, _) => {
      const b = y ? g.val / y * 360 : 0, h = m, p = m + b;
      m = p;
      const x = b > 180 ? 1 : 0, N = l + u * Math.cos(Wt(h)), v = d + u * Math.sin(Wt(h)), C = l + u * Math.cos(Wt(p)), $ = d + u * Math.sin(Wt(p)), E = l + f * Math.cos(Wt(p)), T = d + f * Math.sin(Wt(p)), I = l + f * Math.cos(Wt(h)), A = d + f * Math.sin(Wt(h)), M = f ? `M ${N} ${v} A ${u} ${u} 0 ${x} 1 ${C} ${$} L ${E} ${T} A ${f} ${f} 0 ${x} 0 ${I} ${A} Z` : `M ${l} ${d} L ${N} ${v} A ${u} ${u} 0 ${x} 1 ${C} ${$} Z`, k = (h + p) / 2, w = l + (u + 12) * Math.cos(Wt(k)), O = d + (u + 12) * Math.sin(Wt(k));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: M,
            fill: a,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(w, O, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: w,
            y: O,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: g.val
          }
        )
      ] }, _);
    })
  );
}
function l$(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: u } = e, f = new Map(u.map((y, m) => [y, m]));
  return Zt(
    n,
    t,
    r.map((y, m) => {
      const g = f.get(y.cat) ?? 0, _ = Number(r[m].cat), b = Number.isNaN(_) ? l(g) : i.l + (_ - s.min) / (s.max - s.min || 1) * c, h = d(y.val), p = t.type === "bubble" && y.size !== void 0 ? Math.max(4, Math.min(12, y.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        Oo(b, h, a, t, p),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: b,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, h, `${t.title ?? y.cat}: ${y.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, y.cat, y.val, y.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, m);
    })
  );
}
function el(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, u = new Map(l.map((g, _) => [g, _])), f = (g) => {
    if (!t.stack) return i.min;
    let _ = 0;
    for (let b = 0; b < n; b++) {
      const h = d[b];
      if (h?.stack !== t.stack) continue;
      const p = h.data.find(
        (x) => String(x[h.categoryProperty] ?? "") === g
      );
      p && (_ += Number(p[h.valueProperty]) || 0);
    }
    return _;
  }, y = r.map((g, _) => {
    const b = u.get(g.cat) ?? 0, h = f(g.cat);
    return `${_ === 0 ? "M" : "L"} ${c(b)} ${s(h + g.val)}`;
  }).join(" "), m = r.map((g, _) => {
    const b = u.get(g.cat) ?? 0, h = f(g.cat);
    return `${_ === 0 ? "M" : "L"} ${c(b)} ${s(h)}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${y} L ${c(r.length - 1)} ${s(f(r[r.length - 1].cat))} L ${c(0)} ${s(f(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      s$(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: y,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: Qa(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: m, fill: "none", stroke: "transparent" }),
      r.map((g, _) => {
        const b = u.get(g.cat) ?? 0, h = f(g.cat), p = c(b), x = s(h + g.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          Oo(p, x, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: p - 12,
              y: x - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                p,
                x,
                `${t.title ?? g.cat}: ${Zr(e, g.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: p,
              y: x - 8,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Zr(e, g.val)
            }
          )
        ] }, _);
      })
    ] })
  );
}
function i$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: u, categories: f, series: y } = e, m = new Map(f.map((_, b) => [_, b])), g = t.type === "bar";
  return Zt(
    n,
    t,
    r.map((_, b) => {
      const h = m.get(_.cat) ?? 0;
      let p = 0;
      if (t.stack)
        for (let w = 0; w < n; w++) {
          const O = y[w];
          if (O?.stack !== t.stack) continue;
          const z = O.data.find(
            (L) => String(L[O.categoryProperty] ?? "") === _.cat
          );
          z && (p += Number(z[O.valueProperty]) || 0);
        }
      const x = p + _.val, N = typeof _.min == "number" && !Number.isNaN(_.min) && typeof _.max == "number" && !Number.isNaN(_.max), v = y.filter(
        (w) => !w.stack || w.stack === t.stack
      ).length, C = c / Math.max(1, f.length), $ = g ? 18 : Math.max(12, C / (t.stack ? 1 : y.length) - 4), E = g ? i.l + p / (l.max - l.min || 1) * c : d(h) - $ / 2 + (t.stack ? 0 : n % v * $), T = g ? i.t + h * s / Math.max(1, f.length) + 4 : u(N ? p + _.max : x), I = g ? N ? (_.max - _.min) / (l.max - l.min || 1) * c : _.val / (l.max - l.min || 1) * c : $ - 4, A = g ? 16 : N ? u(p + _.min) - u(p + _.max) : u(p) - u(x), M = g ? i.l + (p + (N ? _.min : 0)) / (l.max - l.min || 1) * c : E, k = g ? i.t + h * s / Math.max(1, f.length) + 4 : T;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: M,
            y: k,
            width: g ? I : $ - 4,
            height: A,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              M + (g ? I : $) / 2,
              k,
              `${t.title ?? _.cat}: ${Zr(e, _.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: M + (g ? I : $) / 2,
            y: k - 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Zr(e, _.val)
          }
        )
      ] }, b);
    })
  );
}
function c$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: u, hideTip: f } = e, y = i.l + c / 2, m = i.t + s * 0.78, g = Math.min(c, s) * 0.36, _ = 135, b = 270, h = r.reduce((C, $) => C + (Number($.val) || 0), 0), p = l.max - l.min || 1, x = Math.min(1, Math.max(0, (h - l.min) / p)), N = (C, $) => {
    const [E, T] = [
      y + g * Math.cos(Wt(C)),
      m + g * Math.sin(Wt(C))
    ], [I, A] = [
      y + g * Math.cos(Wt($)),
      m + g * Math.sin(Wt($))
    ], M = $ - C > 180 ? 1 : 0;
    return `M ${E} ${T} A ${g} ${g} 0 ${M} 1 ${I} ${A}`;
  }, v = Number(h.toFixed(2));
  return Zt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + b),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      x > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + b * x),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: y, y: m - 4, textAnchor: "middle", className: Ze.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && u(y, m - g, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => f(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", h, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: y,
          y: m + g + 18,
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
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (f, y) => {
    const m = d(f);
    return [
      i + s * y * Math.cos(m),
      c + s * y * Math.sin(m)
    ];
  } };
}
function d$(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = _s(e);
  return /* @__PURE__ */ D("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
function u$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: u, radius: f, angleFor: y, vertexFor: m } = _s(e), g = e.scale.max || 1, _ = (h) => r.find((p) => p.cat === h)?.val ?? 0, b = i.map((h, p) => {
    const x = Math.min(1, Math.max(0, _(h) / g)), [N, v] = m(p, x);
    return `${N},${v}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: b,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: 2
        }
      ),
      i.map((h, p) => {
        const x = Math.min(1, Math.max(0, _(h) / g)), [N, v] = m(p, x), [C, $] = m(p, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: N,
              cy: v,
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
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(C, $, `${t.title ?? h}: ${_(h)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const E = r.find((T) => T.cat === h);
                E && e.handleClick(t, E.cat, E.val, E.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (f + 14) * Math.cos(y(p)),
              y: u + (f + 14) * Math.sin(y(p)) + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: h
            }
          )
        ] }, h);
      })
    ] })
  );
}
function f$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, y = Math.max(1, ...f.map((_) => Number(_.val) || 0)), m = s / Math.max(1, f.length), g = i.l + c / 2;
  return Zt(
    n,
    t,
    f.map((_, b) => {
      const p = Math.max(0, Number(_.val) || 0) / y * c, x = f[b + 1], N = x ? Math.max(0, Number(x.val) || 0) / y * c : p * 0.7, v = i.t + b * m + 2, C = Math.max(4, m - 6), $ = 1 - b * (0.45 / Math.max(1, f.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - p / 2} ${v} L ${g + p / 2} ${v} L ${g + N / 2} ${v + C} L ${g - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, v, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: g,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              _.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function p$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: u, hideTip: f } = e, y = [];
  t.data.forEach((x) => {
    const N = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    y.includes(N) || y.push(N);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), g = m.length ? Math.min(...m) : 0, _ = m.length ? Math.max(...m) : 1, b = c / Math.max(1, l.length), h = s / Math.max(1, y.length), p = (x) => _ === g ? 0.6 : 0.15 + 0.85 * ((x - g) / (_ - g));
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      y.map((x, N) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * h + h / 2 + 4,
          textAnchor: "end",
          className: Ze.tickLabel,
          children: x
        },
        x
      )),
      r.map((x, N) => {
        const v = t.data[N], C = l.indexOf(x.cat), $ = y.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (C < 0 || $ < 0) return null;
        const E = i.l + C * b, T = i.t + $ * h;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: E + 1,
              y: T + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, h - 2),
              fill: a,
              fillOpacity: p(x.val),
              onMouseEnter: () => d && u(E + b / 2, T, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: E + b / 2,
              y: T + h / 2 + 4,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: x.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function _$(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((m, g) => [m, g])), d = e.plotW / Math.max(1, s.length), u = Math.max(8, Math.min(28, d / 2 - 4)), f = t.upColor ?? a, y = t.downColor ?? "var(--dx-danger-color)";
  return Zt(
    n,
    t,
    r.map((m, g) => {
      const _ = l.get(m.cat) ?? 0, b = i(_), h = m.close ?? m.val, p = typeof m.open == "number" && !Number.isNaN(m.open) && typeof m.high == "number" && !Number.isNaN(m.high) && typeof m.low == "number" && !Number.isNaN(m.low) && typeof h == "number" && !Number.isNaN(h), x = p && h >= m.open, N = `${t.title ?? m.cat}: O ${m.open ?? "–"} H ${m.high ?? "–"} L ${m.low ?? "–"} C ${h}`;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        p && t.type === "candlestick" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: b,
              y1: c(m.high),
              x2: b,
              y2: c(m.low),
              stroke: x ? f : y,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: b - u / 2,
              y: c(Math.max(m.open, h)),
              width: u,
              height: Math.max(
                2,
                c(Math.min(m.open, h)) - c(Math.max(m.open, h))
              ),
              fill: x ? f : "none",
              stroke: x ? f : y,
              strokeWidth: 1.5
            }
          )
        ] }),
        p && t.type === "ohlc" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: b,
              y1: c(m.high),
              x2: b,
              y2: c(m.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: b - u / 2,
              y1: c(m.open),
              x2: b,
              y2: c(m.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: b,
              y1: c(h),
              x2: b + u / 2,
              y2: c(h),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        p && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: b,
            y1: c(m.high),
            x2: b,
            y2: c(m.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !p && Oo(b, c(h), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: b - 14,
            y: c(h) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, c(h), N),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, h, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: b,
            y: c(h) - 8,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Zr(e, h)
          }
        )
      ] }, g);
    })
  );
}
function h$(e, t, n, r, a) {
  const i = e.reduce((g, _) => g + Math.max(0, _.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((g, _) => ({ ...g, i: _ }));
  let d = t, u = n, f = r, y = a;
  const m = (g, _) => {
    const b = g.reduce((x, N) => x + Math.max(0, N.val), 0) * c;
    if (b <= 0) return Number.POSITIVE_INFINITY;
    const h = Math.max(...g.map((x) => Math.max(0, x.val))) * c, p = Math.min(...g.map((x) => Math.max(0, x.val))) * c;
    return Math.max(
      _ * _ * h / (b * b),
      b * b / (_ * _ * (p || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const g = Math.min(f, y), _ = [];
    let b = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const p = [..._, l[0]], x = m(p, g);
      if (x <= b)
        b = x, _.push(l.shift());
      else break;
    }
    _.length === 0 && _.push(l.shift());
    const h = _.reduce((p, x) => p + Math.max(0, x.val), 0) * c;
    if (f >= y) {
      const p = h / y;
      let x = u;
      for (const N of _) {
        const v = Math.max(0, N.val) * c / p;
        s[N.i] = { x: d, y: x, w: p, h: v }, x += v;
      }
      d += p, f -= p;
    } else {
      const p = h / f;
      let x = d;
      for (const N of _) {
        const v = Math.max(0, N.val) * c / p;
        s[N.i] = { x, y: u, w: v, h: p }, x += v;
      }
      u += p, y -= p;
    }
  }
  return s;
}
function tl(e, t, n, r, a, i, c, s, l, d, u) {
  const f = e.colorFor, y = s.map((_) => ({
    cat: String(_[t.categoryProperty] ?? ""),
    val: Number(_[t.valueProperty]),
    item: _
  })), m = h$(y, r, a, i, c), g = t.childrenProperty ?? "children";
  y.forEach((_, b) => {
    const h = m[b], p = s[b]?.[g], x = Array.isArray(p) ? p : [];
    if (x.length > 0 && l < 8) {
      tl(
        e,
        t,
        n,
        h.x,
        h.y,
        h.w,
        h.h,
        x,
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
      x: h.x,
      y: h.y,
      w: h.w,
      h: h.h
    });
  });
}
function m$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = { n: 0 }, y = [];
  return tl(
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
    y
  ), Zt(
    n,
    t,
    y.map((m, g) => /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "rect",
        {
          x: m.x,
          y: m.y,
          width: Math.max(0, m.w),
          height: Math.max(0, m.h),
          fill: m.color,
          stroke: "var(--dx-surface-color)",
          strokeWidth: 1,
          onMouseEnter: () => l && d(
            m.x + m.w / 2,
            m.y,
            `${t.title ?? m.cat}: ${m.val}`
          ),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, m.cat, m.val, m.item),
          style: { cursor: "pointer" }
        }
      ),
      m.w > 28 && m.h > 18 && /* @__PURE__ */ o(
        "text",
        {
          x: m.x + m.w / 2,
          y: m.y + m.h / 2 + 4,
          textAnchor: "middle",
          className: Ze.dataLabel,
          children: m.cat
        }
      )
    ] }, g))
  );
}
function g$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, y = Math.max(1, ...f.map((_) => Math.max(0, _.val))), m = s / Math.max(1, f.length), g = i.l + c / 2;
  return Zt(
    n,
    t,
    f.map((_, b) => {
      const p = Math.max(0, _.val) / y * c, x = f[b + 1], N = x ? Math.max(0, x.val) / y * c : p, v = i.t + b * m + 2, C = Math.max(4, m - 6);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - p / 2} ${v} L ${g + p / 2} ${v} L ${g + N / 2} ${v + C} L ${g - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, v, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: g,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              _.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function y$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: u } = _s(e), f = (g) => {
    let _ = 0;
    for (const b of d)
      if (b.type === "spider") {
        for (const h of b.data)
          if (String(h[b.categoryProperty] ?? "") === g) {
            const p = Number(h[b.valueProperty]);
            Number.isNaN(p) || (_ = Math.max(_, p));
          }
      }
    return _ || 1;
  }, y = (g) => r.find((_) => _.cat === g)?.val ?? 0, m = i.map((g, _) => {
    const b = Math.min(1, Math.max(0, y(g) / f(g))), [h, p] = u(_, b);
    return `${h},${p}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: m,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: Qa(t.dash)
        }
      ),
      i.map((g, _) => {
        const b = Math.min(1, Math.max(0, y(g) / f(g))), [h, p] = u(_, b), [x, N] = u(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          Oo(h, p, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: h,
              cy: p,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(x, N, `${t.title ?? g}: ${y(g)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const v = r.find((C) => C.cat === g);
                v && e.handleClick(t, v.cat, v.val, v.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x,
              y: N + 16,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: y(g)
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x,
              y: N + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: g
            }
          )
        ] }, g);
      })
    ] })
  );
}
function b$(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, c = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((w) => ({
    source: String(w[c] ?? ""),
    target: String(w[s] ?? ""),
    value: Number(w[t.valueProperty]),
    item: w
  })).filter(
    (w) => w.source && w.target && w.source !== w.target && w.value > 0
  ), d = [];
  for (const w of l)
    d.includes(w.source) || d.push(w.source), d.includes(w.target) || d.push(w.target);
  const u = /* @__PURE__ */ new Map();
  for (const w of l)
    u.has(w.target) || u.set(w.target, []), u.get(w.target).push(w.source);
  const f = /* @__PURE__ */ new Map(), y = (w, O) => {
    if (f.has(w)) return f.get(w);
    if (O.has(w)) return 0;
    O.add(w);
    const z = u.get(w) ?? [], L = z.length === 0 ? 0 : 1 + Math.max(...z.map((P) => y(P, O)));
    return O.delete(w), f.set(w, L), L;
  }, m = /* @__PURE__ */ new Map();
  for (const w of d) m.set(w, y(w, /* @__PURE__ */ new Set()));
  const g = Math.max(0, ...m.values()), _ = Math.max(
    12,
    Math.min(28, a / Math.max(1, (g + 1) * 8))
  ), b = 10, h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  for (const w of l)
    p.set(w.source, (p.get(w.source) ?? 0) + w.value), h.set(w.target, (h.get(w.target) ?? 0) + w.value);
  const x = (w) => Math.max(h.get(w) ?? 0, p.get(w) ?? 0), N = /* @__PURE__ */ new Map();
  for (const w of d) {
    const O = m.get(w);
    N.set(O, (N.get(O) ?? 0) + x(w));
  }
  const v = Math.max(1, ...N.values()), C = (i - b * Math.max(0, d.length - 1)) / v, $ = (w) => g === 0 ? r.l : r.l + w / g * (a - _), E = [], T = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  for (const w of d) {
    const O = m.get(w);
    I.has(O) || I.set(O, []), I.get(O).push(w);
  }
  for (const [w, O] of [...I.entries()].sort(
    (z, L) => z[0] - L[0]
  )) {
    let z = r.t;
    for (const L of O) {
      const P = Math.max(4, x(L) * C), j = {
        id: L,
        depth: w,
        total: x(L),
        x: $(w),
        w: _,
        y: z,
        h: P,
        color: e.colorFor(n + E.length, t)
      };
      E.push(j), T.set(L, j), z += P + b;
    }
  }
  const A = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = [];
  for (const w of l) {
    const O = T.get(w.source), z = T.get(w.target), L = Math.max(1, w.value * C), P = O.y + (A.get(w.source) ?? 0), j = z.y + (M.get(w.target) ?? 0);
    A.set(w.source, (A.get(w.source) ?? 0) + L), M.set(w.target, (M.get(w.target) ?? 0) + L), k.push({ source: O, target: z, value: w.value, y0: P, y1: j, h: L });
  }
  return { nodes: E, links: k };
}
function x$(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function v$(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: c, hideTip: s } = e, { nodes: l, links: d } = b$(e, t, n);
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      d.map((u, f) => /* @__PURE__ */ o(
        "path",
        {
          d: x$(u),
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
      l.map((u) => /* @__PURE__ */ D("g", { role: "listitem", children: [
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
function w$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r.map((I) => ({ x: Number(I.cat), y: I.val })).filter((I) => !Number.isNaN(I.x) && !Number.isNaN(I.y));
  if (f.length === 0) return null;
  let y = Math.min(...f.map((I) => I.x)), m = Math.max(...f.map((I) => I.x)), g = Math.min(...f.map((I) => I.y)), _ = Math.max(...f.map((I) => I.y));
  y === m && (y -= 0.5, m += 0.5), g === _ && (g -= 0.5, _ += 0.5);
  const b = Math.max(4, Math.floor(t.resolution ?? 28)), h = Array.from(
    { length: b + 1 },
    () => Array.from({ length: b + 1 }, () => 0)
  );
  for (const I of f) {
    const A = Math.max(
      0,
      Math.min(b, Math.round((I.x - y) / (m - y) * b))
    ), M = Math.max(
      0,
      Math.min(b, Math.round((I.y - g) / (_ - g) * b))
    );
    h[M][A] += 1;
  }
  let p = 0;
  for (const I of h) for (const A of I) p = Math.max(p, A);
  if (p <= 0) return null;
  const x = Math.max(1, Math.floor(t.levels ?? 5)), N = Array.from(
    { length: x },
    (I, A) => p * (A + 1) / (x + 1)
  ), v = c / b, C = s / b, $ = i.l, E = i.t, T = (I) => {
    const A = [], M = (w, O) => h[O]?.[w] ?? 0, k = (w, O, z, L) => L === z ? (w + O) / 2 : w + (I - z) / (L - z) * (O - w);
    for (let w = 0; w < b; w++)
      for (let O = 0; O < b; O++) {
        const z = M(O, w), L = M(O + 1, w), P = M(O, w + 1), j = M(O + 1, w + 1), q = $ + O * v, se = E + w * C, le = k(q, q + v, z, L), ne = k(q, q + v, P, j), V = k(se, se + C, z, P), Ee = k(se, se + C, L, j), Q = (z >= I ? 8 : 0) | (L >= I ? 4 : 0) | (j >= I ? 2 : 0) | (P >= I ? 1 : 0), J = [le, se], X = [ne, se + C], ue = [q, V], ie = [q + v, Ee], xe = (Y, $e) => {
          A.push([Y[0], Y[1], $e[0], $e[1]]);
        };
        switch (Q) {
          case 1:
          case 14:
            xe(ue, X);
            break;
          case 2:
          case 13:
            xe(X, ie);
            break;
          case 3:
          case 12:
            xe(ue, ie);
            break;
          case 4:
          case 11:
            xe(J, ie);
            break;
          case 6:
          case 9:
            xe(J, X);
            break;
          case 7:
          case 8:
            xe(J, ue);
            break;
          case 5: {
            (z + L + P + j) / 4 >= I ? (xe(J, ue), xe(X, ie)) : (xe(J, ie), xe(ue, X));
            break;
          }
          case 10: {
            (z + L + P + j) / 4 >= I ? (xe(J, ie), xe(ue, X)) : (xe(J, ue), xe(X, ie));
            break;
          }
        }
      }
    return A;
  };
  return Zt(
    n,
    t,
    N.map((I, A) => {
      const M = T(I);
      if (M.length === 0) return null;
      const k = M.map(([O, z, L, P]) => `M ${O} ${z} L ${L} ${P}`).join(" "), w = e.colorFor(n + A, t);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o("path", { d: k, fill: "none", stroke: w, strokeWidth: 1.5 }),
        /* @__PURE__ */ o(
          "path",
          {
            d: k,
            fill: "none",
            stroke: "transparent",
            strokeWidth: 12,
            onMouseEnter: () => l && d(
              $ + c / 2,
              E + 8,
              `${t.title ?? "Density"} ≥ ${Math.round(I * 100) / 100}`
            ),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, `level ${A + 1}`, I, { threshold: I }),
            style: { cursor: "pointer" }
          }
        )
      ] }, A);
    })
  );
}
function k$(e, t, n) {
  const r = os(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return a$(e, t, n, r, a);
    case "scatter":
    case "bubble":
      return l$(e, t, n, r, a);
    case "line":
    case "area":
      return el(e, t, n, r, a);
    case "gauge":
      return c$(e, t, n, r, a);
    case "radar":
      return u$(e, t, n, r, a);
    case "funnel":
      return f$(e, t, n, r, a);
    case "heatmap":
      return p$(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return _$(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return o$(e, t, n, a);
    case "treemap":
      return m$(e, t, n);
    case "pyramid":
      return g$(e, t, n, r, a);
    case "spider":
      return y$(e, t, n, r, a);
    case "sankey":
      return v$(e, t, n);
    case "contour":
      return w$(e, t, n, r);
    default:
      return i$(e, t, n, r, a);
  }
}
function _O({
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
  const [f, y] = W(
    null
  ), m = Ne(() => {
    const M = /* @__PURE__ */ new Set();
    for (const k of e)
      for (const w of k.data) M.add(String(w[k.categoryProperty] ?? ""));
    return [...M];
  }, [e]), g = Ne(() => {
    if (!c) return e;
    const M = /* @__PURE__ */ new Map();
    for (const k of e)
      if (k.stack)
        for (const w of k.data) {
          const O = `${k.stack}\0${String(w[k.categoryProperty] ?? "")}`, z = Number(w[k.valueProperty]);
          Number.isNaN(z) || M.set(O, (M.get(O) ?? 0) + z);
        }
    return e.map((k) => k.stack ? {
      ...k,
      data: k.data.map((w) => {
        const O = `${k.stack}\0${String(w[k.categoryProperty] ?? "")}`, z = M.get(O) ?? 0, L = Number(w[k.valueProperty]);
        return {
          ...w,
          [k.valueProperty]: z > 0 && !Number.isNaN(L) ? L / z * 100 : 0
        };
      })
    } : k);
  }, [e, c]), _ = Ne(() => {
    const M = g.flatMap(
      (w) => w.data.flatMap((O) => [
        Number(O[w.valueProperty]),
        ...w.openProperty ? [Number(O[w.openProperty])] : [],
        ...w.highProperty ? [Number(O[w.highProperty])] : [],
        ...w.lowProperty ? [Number(O[w.lowProperty])] : [],
        ...w.closeProperty ? [Number(O[w.closeProperty])] : []
      ])
    ).filter((w) => !Number.isNaN(w)), k = /* @__PURE__ */ new Map();
    for (const w of g) {
      if (!w.stack) continue;
      let O = k.get(w.stack);
      O || k.set(w.stack, O = /* @__PURE__ */ new Map());
      for (const z of w.data) {
        const L = String(z[w.categoryProperty] ?? ""), P = Number(z[w.valueProperty]);
        Number.isNaN(P) || O.set(L, (O.get(L) ?? 0) + P);
      }
    }
    for (const w of k.values()) M.push(...w.values());
    return M;
  }, [g]), b = r?.min ?? (_.length ? Math.min(0, ..._) : 0), h = r?.max ?? (_.length ? Math.max(..._) : 10), p = Ne(
    () => t$(b, h, r?.step),
    [b, h, r?.step]
  ), x = { t: 16, r: 16, b: 40, l: 56 }, N = t - x.l - x.r, v = n - x.t - x.b, C = (M) => x.l + M / Math.max(1, m.length - 1) * N, $ = (M) => x.t + (1 - (M - p.min) / (p.max - p.min || 1)) * v, E = (M, k) => k.color ?? $a[M % $a.length], T = e.some((M) => Ja.has(M.type)), I = e.some((M) => e$.has(M.type)), A = {
    categories: m,
    scale: p,
    pad: x,
    plotW: N,
    plotH: v,
    xFor: C,
    yFor: $,
    colorFor: E,
    tooltipVisible: s,
    percent: c,
    showTip: (M, k, w) => y({ x: M, y: k, text: w }),
    hideTip: () => y(null),
    handleClick: (M, k, w, O) => l?.({
      seriesTitle: M.title ?? "",
      category: k,
      value: w,
      item: O
    }),
    series: g
  };
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [Ze.root, u].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: Ze.svg,
            role: "presentation",
            children: [
              T && r?.gridlines !== !1 && p.ticks.map((M) => /* @__PURE__ */ o(
                "line",
                {
                  x1: x.l,
                  x2: x.l + N,
                  y1: $(M),
                  y2: $(M),
                  className: Ze.gridline
                },
                M
              )),
              I && a?.gridlines && m.map((M, k) => /* @__PURE__ */ o(
                "line",
                {
                  x1: C(k),
                  x2: C(k),
                  y1: x.t,
                  y2: x.t + v,
                  className: Ze.gridline
                },
                k
              )),
              T && p.ticks.map((M) => /* @__PURE__ */ o(
                "text",
                {
                  x: x.l - 8,
                  y: $(M) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: c ? `${M}%` : M
                },
                M
              )),
              I && m.map((M, k) => /* @__PURE__ */ o(
                "text",
                {
                  x: C(k),
                  y: x.t + v + 16,
                  textAnchor: "middle",
                  className: Ze.tickLabel,
                  children: M
                },
                M
              )),
              T && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: x.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${x.t + v / 2})`,
                  className: Ze.axisTitle,
                  children: r.title
                }
              ),
              I && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: x.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Ze.axisTitle,
                  children: a.title
                }
              ),
              (e.some((M) => M.type === "radar") || e.some((M) => M.type === "spider")) && d$(A),
              g.map((M, k) => k$(A, M, k))
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
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: e.map((M, k) => /* @__PURE__ */ D("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: E(k, M) },
              "aria-hidden": "true"
            }
          ),
          M.title ?? `Series ${k + 1}`
        ] }, k)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: Ze.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: d }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (M) => M.data.map((k, w) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ o("td", { children: M.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: M.rowProperty ? `${String(k[M.rowProperty] ?? "")} / ${String(k[M.categoryProperty] ?? "")}` : String(k[M.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(k[M.valueProperty] ?? "") })
                ] }, `${M.title}-${w}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function hO({ query: e, children: t }) {
  return ds(e) ? /* @__PURE__ */ o(ot, { children: t }) : null;
}
function mO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function gO() {
  const e = ae(null);
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
  sS as AIChat,
  m_ as ALERT_ICON,
  OS as Accordion,
  uS as Alert,
  nS as ArcGauge,
  CS as AutoComplete,
  mS as AutoGrid,
  $S as Avatar,
  O$ as Badge,
  pO as Barcode,
  yS as Body,
  QS as Breadcrumb,
  cn as Button,
  S$ as Card,
  oO as Carousel,
  _O as Chart,
  lu as CheckBox,
  AS as CheckBoxList,
  RS as ColorPicker,
  _S as Column,
  VS as ContextMenuProvider,
  Mr as DEFAULT_OPERATOR_BY_TYPE,
  bv as DEFAULT_PALETTE,
  q$ as DataFilter,
  K$ as DataGrid,
  G$ as DataList,
  jS as DatePicker,
  Aa as Dialog,
  J$ as DialogProvider,
  TS as DropDown,
  KS as DropZone,
  M$ as EmptyState,
  Ea as FILTER_OPERATORS,
  JS as FabMenu,
  ir as Field,
  D$ as Fieldset,
  s0 as Footer,
  I$ as Form,
  A$ as FormField,
  iO as Gantt,
  i0 as Header,
  iS as HtmlEditor,
  Ie as Icon,
  ro as Input,
  V$ as Label,
  gS as Layout,
  oS as LinearGauge,
  eO as Link,
  MS as ListBox,
  mO as LiveRegion,
  aS as Login,
  lS as Markdown,
  zS as Mask,
  hO as MediaQuery,
  Ew as Menu,
  Ya as MenuItem,
  PS as Numeric,
  Uc as Pager,
  XS as PanelMenu,
  YS as PanelMenuItem,
  Rf as Password,
  aO as PickList,
  cO as Pivot,
  dS as PopupProvider,
  ZS as ProfileMenu,
  xS as Progress,
  fO as QRCode,
  rS as RadialGauge,
  DS as RadioButtonList,
  tS as RangeNavigator,
  BS as Rating,
  pS as Row,
  lO as Scheduler,
  US as SecurityCode,
  wr as Select,
  IS as SelectBar,
  x0 as Sidebar,
  bS as SidebarToggle,
  WS as SignaturePad,
  fS as Skeleton,
  FS as Slider,
  LS as SplitButton,
  nO as Splitter,
  hS as Stack,
  T$ as Stat,
  tO as Steps,
  Y$ as Switch,
  C$ as Table,
  SS as Tabs,
  Da as Text,
  ES as TextArea,
  is as TextBox,
  vS as ThemeToggle,
  HS as TimeSpanPicker,
  dO as Timeline,
  eS as ToastProvider,
  rO as Toc,
  P0 as ToggleButton,
  X$ as Tooltip,
  sO as Tree,
  qS as Upload,
  uO as VirtualGrid,
  Zc as aggregateValue,
  Ca as applyFilters,
  Xc as applyGridState,
  Ts as collectGroupKeys,
  ar as columnValue,
  F$ as compare,
  U$ as custom,
  Gc as cycleSort,
  Ms as defaultOperatorForType,
  z$ as email,
  fa as formatMasked,
  xo as formatValue,
  kS as getAppearance,
  bo as getByPath,
  wS as getTheme,
  Wc as groupItems,
  E$ as iconNames,
  Ta as matchesFilters,
  j$ as maxLength,
  R$ as minLength,
  Yc as paginate,
  P$ as pattern,
  B$ as range,
  Op as renderMarkdown,
  L$ as required,
  H$ as requiredTrue,
  Sa as resolveVariant,
  ws as runValidators,
  H0 as setAppearance,
  F0 as setTheme,
  Xr as shadeClass,
  pc as sortItems,
  Vc as sortedItems,
  da as subscribe,
  Jc as toCsv,
  ic as toFilterString,
  fc as toODataFilterString,
  GS as useContextMenu,
  Z$ as useDialog,
  Xi as useFormContext,
  W$ as useFormField,
  gO as useLiveRegion,
  ds as useMediaQuery,
  cS as usePopup,
  NS as useThemeService,
  Q$ as useToast
};
