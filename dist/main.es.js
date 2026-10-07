import { jsx as o, jsxs as D, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as at, useId as ct, isValidElement as qt, cloneElement as os, useState as W, useRef as le, useEffect as Oe, useCallback as H, useMemo as Ne, useContext as Bn, createContext as cr, Fragment as ss, useLayoutEffect as Wo, useImperativeHandle as ko, Children as Zr } from "react";
function Yr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const ol = "_button_eyvws_1", sl = "_filled_eyvws_36", al = "_flat_eyvws_55", ll = "_outlined_eyvws_58", il = "_text_eyvws_63", cl = "_loading_eyvws_506", dl = "_spinner_eyvws_509", ul = "_xs_eyvws_525", fl = "_sm_eyvws_531", pl = "_md_eyvws_537", _l = "_lg_eyvws_543", hl = "_xl_eyvws_549", ml = "_iconOnly_eyvws_555", gl = "_fullWidth_eyvws_585", Mn = {
  button: ol,
  filled: sl,
  flat: al,
  outlined: ll,
  text: il,
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
  loading: cl,
  spinner: dl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: ul,
  sm: fl,
  md: pl,
  lg: _l,
  xl: hl,
  iconOnly: ml,
  fullWidth: gl
};
function yl(e, t) {
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
      className: p,
      disabled: b,
      children: h,
      ...g
    } = t;
    if (u === !1) return null;
    const _ = yl(r, a), m = _.style === "light" || _.style === "dark" ? null : Yr(i), f = [
      Mn.button,
      Mn[_.variant],
      Mn[`style-${_.style}`],
      m ? Mn[m] : null,
      Mn[c],
      s ? Mn.fullWidth : null,
      l ? Mn.iconOnly : null,
      d ? Mn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      p
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ D(ot, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Mn.spinner }) : null,
      h
    ] }), N = t.href;
    if (N != null) {
      const { onClick: $, ...S } = g, T = b || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: f,
          "aria-disabled": T || void 0,
          "aria-busy": d || void 0,
          onClick: (I) => {
            if (T) {
              I.preventDefault();
              return;
            }
            $?.(I);
          },
          ...S,
          children: y
        }
      );
    }
    const { type: x = "button", ...C } = g;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: x,
        className: f,
        disabled: b || d,
        "aria-busy": d || void 0,
        ...C,
        children: y
      }
    );
  }
), bl = "_card_4vcae_1", xl = "_elevated_4vcae_8", vl = "_filled_4vcae_13", wl = "_outlined_4vcae_18", kl = "_interactive_4vcae_22", Nl = "_text_4vcae_30", $l = "_header_4vcae_46", Sl = "_body_4vcae_53", Ol = "_footer_4vcae_63", Or = {
  card: bl,
  elevated: xl,
  filled: vl,
  outlined: wl,
  interactive: kl,
  text: Nl,
  header: $l,
  body: Sl,
  footer: Ol
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
        onKeyDown: (p) => {
          s?.(p), !(!u || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
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
function Na(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const El = "_badge_1fy6d_1", Tl = "_xs_1fy6d_21", Cl = "_sm_1fy6d_26", Ml = "_md_1fy6d_31", Al = "_lg_1fy6d_36", Dl = "_xl_1fy6d_41", Il = "_neutral_1fy6d_47", zl = "_primary_1fy6d_52", Ll = "_secondary_1fy6d_61", Pl = "_light_1fy6d_66", Rl = "_base_1fy6d_71", jl = "_dark_1fy6d_76", Bl = "_info_1fy6d_81", Fl = "_success_1fy6d_86", Hl = "_warning_1fy6d_95", Ul = "_danger_1fy6d_104", Wl = "_filled_1fy6d_111", ql = "_outlined_1fy6d_161", Kl = "_text_1fy6d_213", Er = {
  badge: El,
  xs: Tl,
  sm: Cl,
  md: Ml,
  lg: Al,
  xl: Dl,
  neutral: Il,
  primary: zl,
  secondary: Ll,
  light: Pl,
  base: Rl,
  dark: jl,
  info: Bl,
  success: Fl,
  warning: Hl,
  danger: Ul,
  filled: Wl,
  outlined: ql,
  text: Kl,
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
  const u = t, p = Na(n, "filled"), b = Yr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Er.badge,
        Er[a],
        Er[u],
        Er[p],
        b ? Er[b] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Gl = "_icon_vn4jx_5", Vl = "_xs_vn4jx_24", Yl = "_sm_vn4jx_28", Xl = "_md_vn4jx_23", Zl = "_lg_vn4jx_36", Jl = "_xl_vn4jx_40", bs = {
  icon: Gl,
  xs: Vl,
  sm: Yl,
  md: Xl,
  lg: Zl,
  xl: Jl
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
], Te = at(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
  const l = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [bs.icon, l ? bs[n] : null, a].filter(Boolean).join(" "),
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
}), Ql = "_stat_sjin9_1", ei = "_label_sjin9_8", ti = "_row_sjin9_16", ni = "_value_sjin9_22", ri = "_delta_sjin9_28", oi = "_success_sjin9_33", si = "_danger_sjin9_37", ai = "_neutral_sjin9_41", li = "_hint_sjin9_45", Qn = {
  stat: Ql,
  label: ei,
  row: ti,
  value: ni,
  delta: ri,
  success: oi,
  danger: si,
  neutral: ai,
  hint: li
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
}), ii = "_wrap_ipozk_1", ci = "_table_ipozk_8", di = "_caption_ipozk_14", ui = "_none_ipozk_51", fi = "_horizontal_ipozk_57", pi = "_vertical_ipozk_67", _i = "_alternating_ipozk_85", hi = "_start_ipozk_89", mi = "_center_ipozk_93", gi = "_end_ipozk_97", yi = "_empty_ipozk_101", Hn = {
  wrap: ii,
  table: ci,
  caption: di,
  none: ui,
  horizontal: fi,
  vertical: pi,
  alternating: _i,
  start: hi,
  center: mi,
  end: gi,
  empty: yi
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
          /* @__PURE__ */ o("tbody", { children: t.map((u) => /* @__PURE__ */ o("tr", { children: e.map((p) => /* @__PURE__ */ o(
            "td",
            {
              className: p.align != null ? Hn[p.align] : void 0,
              children: p.render != null ? p.render(u) : u[p.key]
            },
            p.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Hn.empty, children: r })
  ] });
}
const bi = "_emptyState_1swxw_1", xi = "_icon_1swxw_13", vi = "_title_1swxw_18", wi = "_description_1swxw_24", ki = "_action_1swxw_30", Tr = {
  emptyState: bi,
  icon: xi,
  title: vi,
  description: wi,
  action: ki
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
const Ni = "_field_149oz_1", $i = "_label_149oz_8", Si = "_required_149oz_14", Oi = "_hint_149oz_19", Ei = "_error_149oz_24", Cr = {
  field: Ni,
  label: $i,
  required: Si,
  hint: Oi,
  error: Ei
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
  const d = r ?? a, u = ct(), p = ct(), b = ct();
  if (l === !1) return null;
  const h = i != null ? p : d != null ? b : null, g = typeof c == "function" ? c({ inputId: u, hintId: b, errorId: p }) : c, _ = qt(g) && typeof g.props.id == "string" ? g.props.id : void 0, v = _ ?? t ?? u, m = qt(g) && (h != null || _ == null && typeof g.type == "string"), f = _ != null || t != null || m, y = m && qt(g) ? os(g, {
    id: v,
    "aria-describedby": h != null ? [
      g.props["aria-describedby"],
      h
    ].filter((N) => typeof N == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ D("div", { className: [Cr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Cr.label,
        htmlFor: f ? v : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Cr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    i != null ? /* @__PURE__ */ o("div", { id: p, className: Cr.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: b, className: Cr.hint, children: d }) : null
  ] });
}
const Ti = "_formfield_6e25e_1", Ci = "_content_6e25e_8", Mi = "_floating_6e25e_43", Ai = "_label_6e25e_111", Di = "_start_6e25e_132", Ii = "_required_6e25e_169", zi = "_end_6e25e_175", Li = "_filled_6e25e_192", Pi = "_flat_6e25e_199", Ri = "_helper_6e25e_206", ji = "_invalid_6e25e_211", $n = {
  formfield: Ti,
  content: Ci,
  floating: Mi,
  label: Ai,
  start: Di,
  required: Ii,
  end: zi,
  filled: Li,
  flat: Pi,
  helper: Ri,
  invalid: ji
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
  visible: p = !0
}) {
  const b = ct(), h = ct();
  if (p === !1) return null;
  const g = a ?? b, _ = typeof d == "function" ? d({
    inputId: g
  }) : d, v = qt(_) ? _.type : null, m = typeof v == "string", f = qt(_) && typeof v != "symbol", y = qt(_) ? _.props : null, N = typeof y?.id == "string" ? y.id : void 0, x = m && qt(_) ? _.type.toLowerCase() : null, C = x != null && (x === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : x === "button" || x === "meter" || x === "output" || x === "progress" || x === "select" || x === "textarea"), $ = f && (r != null || s || N == null && C), S = N != null || a != null || $, T = x === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, I = x === "textarea" || x === "input" && (T == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(T)), A = $ && qt(_) ? os(
    _,
    {
      id: N ?? g,
      ...i && I && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          h
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
      htmlFor: S ? N ?? g : void 0,
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
        r != null && /* @__PURE__ */ o("div", { id: h, className: $n.helper, children: r })
      ]
    }
  );
}
const Bi = "_fieldset_8x01p_1", Fi = "_legend_8x01p_11", Hi = "_legendText_8x01p_20", Ui = "_toggle_8x01p_24", Wi = "_content_8x01p_45", qi = "_summary_8x01p_49", er = {
  fieldset: Bi,
  legend: Fi,
  legendText: Hi,
  toggle: Ui,
  content: Wi,
  summary: qi
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
  collapseAriaLabel: p,
  onExpand: b,
  onCollapse: h,
  children: g,
  className: _,
  visible: v = !0
}) {
  const m = ct(), [f, y] = W(c);
  if (v === !1) return null;
  const N = i ?? f, x = a ? `${m}-content` : void 0, C = () => {
    const M = !N;
    i === void 0 && y(M), M ? h?.() : b?.();
  }, $ = a || e != null || n != null || t != null, S = a ? N : !1, T = a && N && s != null, I = S ? l ?? "Expand" : d ?? "Collapse", A = S ? u ?? "Expand" : p ?? "Collapse";
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
              "aria-expanded": !S,
              "aria-controls": x,
              onClick: C,
              children: [
                /* @__PURE__ */ o(
                  Te,
                  {
                    icon: S ? "add" : "remove",
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
        ] }) : /* @__PURE__ */ D(ot, { children: [
          n != null && /* @__PURE__ */ o(Te, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: er.content,
            id: x,
            hidden: S,
            children: g
          }
        ),
        T ? /* @__PURE__ */ o("div", { className: er.summary, children: s }) : null
      ]
    }
  );
}
const Ki = "_form_abp5n_1", Gi = {
  form: Ki
}, $a = cr(null);
function Vi() {
  const e = Bn($a);
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
  const [s, l] = W({}), [d, u] = W(0), p = le(s);
  Oe(() => {
    p.current = s;
  });
  const b = H((y) => {
    l(
      (N) => N[y.name] === y ? N : { ...N, [y.name]: y }
    );
  }, []), h = H((y) => {
    l((N) => {
      if (!(y in N)) return N;
      const x = { ...N };
      return delete x[y], x;
    });
  }, []), g = H(() => {
    const y = {};
    for (const N of Object.values(p.current)) {
      const x = N.validate();
      x.length > 0 && (y[N.name] = x);
    }
    return y;
  }, []), _ = H(() => {
    const y = g();
    u((N) => N + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [g, e, t, n]), v = (y) => {
    r != null && a != null || (y.preventDefault(), _());
  }, m = Ne(
    () => ({ registerField: b, unregisterField: h, submit: _, submitCount: d }),
    [b, h, _, d]
  ), f = [Gi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o($a.Provider, { value: m, children: /* @__PURE__ */ o(
    "form",
    {
      className: f,
      onSubmit: v,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const dr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", z$ = (e = "Required") => (t) => dr(t) ? e : null, L$ = (e = "Invalid email") => (t) => dr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, P$ = (e, t = "Invalid format") => (n) => {
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
function xs(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function W$(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Vi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, u] = W(!1), p = le(() => []);
  Oe(() => {
    p.current = () => xs(t?.validate ?? [], i);
  }), Oe(() => (n({ name: e, validate: () => p.current() }), () => r(e)), [e, n, r]);
  const [b, h] = W(a);
  a !== b && (h(a), a > 0 && (l(!0), u(!1)));
  const g = s && !d ? xs(t?.validate ?? [], i) : [];
  return { value: i, setValue: (v) => {
    c(v), u(!0);
  }, errors: g };
}
const Yi = "_select_1xe98_1", Xi = "_invalid_1xe98_33", Zi = "_xs_1xe98_40", Ji = "_sm_1xe98_48", Qi = "_md_1xe98_56", ec = "_lg_1xe98_62", tc = "_xl_1xe98_68", Ao = {
  select: Yi,
  invalid: Xi,
  xs: Zi,
  sm: Ji,
  md: Qi,
  lg: ec,
  xl: tc
}, wr = at(
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...c }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          Ao.select,
          Ao[t],
          n ? Ao.invalid : null,
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
), Sa = [
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
}, nc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function rc(e) {
  return nc.includes(e);
}
function go(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function vs(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function qr(e, t) {
  const n = vs(e), r = vs(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function No(e) {
  if (e.secondOperator == null) return !1;
  if (rc(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function ws(e, t, n) {
  const r = go(t, e.property), a = ks(
    r,
    e.value,
    e.operator,
    n
  );
  if (!No(e)) return a;
  const i = ks(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function ks(e, t, n, r) {
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
function as(e) {
  return "filters" in e;
}
function Oa(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (as(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (c) => Oa(e, c, { logicalOperator: i, caseSensitivity: a })
    );
  }
  return t.operator === "Custom", ws(t, e, a);
}
function Ea(e, t, n = {}) {
  return e.filter((r) => Oa(r, t, n));
}
function oc(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function on(e) {
  return typeof e == "string" ? `"${oc(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(on).join(", ")}]` : `"${String(e)}"`;
}
function sc(e) {
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
  if (!No(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function ac(e) {
  return as(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ac).filter(Boolean).join(` ${e.operator} `)})` : sc(e);
}
function lc(e) {
  return e.replace(/'/g, "''");
}
const ic = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function cc(e, t) {
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${lc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, u) => {
    const p = typeof u == "string", b = p && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${b} ${ic[d]} ${p && r ? a(i(u)) : i(u)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(u))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(u))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(u))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(u))}))`;
      case "In":
        return Array.isArray(u) ? `${b} in (${u.map((h) => i(h)).join(", ")})` : `${b} in (${i(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${b} in (${u.map((h) => i(h)).join(", ")}))` : `not(${b} in (${i(u)}))`;
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
  if (!No(e))
    return c(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${c(e.operator, e.value)} ${s} ${c(
    l,
    e.secondValue
  )})`;
}
function dc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (as(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => dc(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return cc(e, n);
}
function uc(e, t) {
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
const fc = "_filter_1dvqt_1", pc = "_rows_1dvqt_9", _c = "_row_1dvqt_9", hc = "_join_1dvqt_21", mc = "_property_1dvqt_30", gc = "_operator_1dvqt_34", yc = "_value_1dvqt_38", bc = "_remove_1dvqt_42", xc = "_bar_1dvqt_58", vc = "_add_1dvqt_64", wc = "_custom_1dvqt_78", kc = "_summary_1dvqt_82", Nc = "_second_1dvqt_87", $c = "_secondAdd_1dvqt_91", Sc = "_addSecond_1dvqt_95", Oc = "_joinSelect_1dvqt_109", vt = {
  filter: fc,
  rows: pc,
  row: _c,
  join: hc,
  property: mc,
  operator: gc,
  value: yc,
  remove: bc,
  bar: xc,
  add: vc,
  custom: wc,
  summary: kc,
  second: Nc,
  secondAdd: $c,
  addSecond: Sc,
  joinSelect: Oc
}, Ar = [
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
function $s({
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
    () => r != null && r.length > 0 ? r.map((m, f) => ({ id: f, ...m })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Mr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), p = (m, f) => {
    u(
      (y) => y.map((N) => N.id === m ? { ...N, ...f } : N)
    );
  }, b = () => {
    const m = d[d.length - 1], f = Math.max(0, ...d.map((N) => N.id)) + 1, y = e[0];
    u((N) => [
      ...N,
      {
        id: f,
        property: m?.property ?? y?.name ?? "",
        operator: Mr[e.find(
          (x) => x.name === (m?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (m) => {
    u(
      (f) => f.length > 1 ? f.filter((y) => y.id !== m) : f
    );
  }, g = Ne(() => {
    const m = [];
    for (const f of d) {
      if (f.property === "" || (f.value == null || f.value === "") && !Ar.includes(f.operator)) continue;
      const N = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: x } = f;
      x != null && No(f) && (N.secondOperator = x, N.secondValue = f.secondValue, N.logicalOperator = f.logicalOperator ?? "And"), m.push(N);
    }
    return m;
  }, [d]), _ = Ne(() => s == null || g.length === 0 ? s : Ea(s, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [s, g, t, n]);
  Oe(() => {
    c != null && s != null && c(_ ?? []);
  }, [_]);
  const v = (m) => e.find((f) => f.name === m) ?? { name: m, type: "string" };
  return /* @__PURE__ */ D("div", { className: [vt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: vt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((m, f) => {
      const y = v(m.property), N = a ? [Mr[y.type ?? "string"]] : Sa, x = !Ar.includes(m.operator), C = m.secondOperator != null;
      return /* @__PURE__ */ D(ss, { children: [
        /* @__PURE__ */ D("div", { className: vt.row, children: [
          f > 0 ? /* @__PURE__ */ o("span", { className: vt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            wr,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: vt.property,
              value: m.property,
              onChange: ($) => {
                const S = e.find(
                  (T) => T.name === $.target.value
                );
                p(m.id, {
                  property: $.target.value,
                  operator: Mr[S?.type ?? "string"],
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
              "aria-label": `Condition ${f + 1} operator`,
              className: vt.operator,
              value: m.operator,
              onChange: ($) => {
                const S = $.target.value;
                p(
                  m.id,
                  Ar.includes(S) ? {
                    operator: S,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: S }
                );
              },
              options: N.map(($) => ({
                value: $,
                label: Ns[$]
              }))
            }
          ),
          x ? /* @__PURE__ */ o(
            $s,
            {
              property: y,
              value: m.value,
              onChange: ($) => p(m.id, { value: $ })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vt.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => h(m.id),
              children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
            }
          )
        ] }),
        x ? C ? /* @__PURE__ */ D(
          "div",
          {
            className: [vt.row, vt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                wr,
                {
                  "aria-label": `Condition ${f + 1} second-operator logic`,
                  className: vt.joinSelect,
                  value: m.logicalOperator ?? "And",
                  onChange: ($) => p(m.id, {
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
                  "aria-label": `Condition ${f + 1} second operator`,
                  className: vt.operator,
                  value: m.secondOperator,
                  onChange: ($) => {
                    const S = $.target.value;
                    p(
                      m.id,
                      Ar.includes(S) ? { secondOperator: S, secondValue: void 0 } : { secondOperator: S }
                    );
                  },
                  options: N.map(($) => ({
                    value: $,
                    label: Ns[$]
                  }))
                }
              ),
              m.secondOperator == null || !Ar.includes(m.secondOperator) ? /* @__PURE__ */ o(
                $s,
                {
                  property: y,
                  value: m.secondValue,
                  onChange: ($) => p(m.id, { secondValue: $ })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: vt.remove,
                  "aria-label": `Remove second condition ${f + 1}`,
                  onClick: () => p(m.id, {
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
            onClick: () => p(m.id, {
              secondOperator: Mr[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, m.id);
    }) }),
    /* @__PURE__ */ D("div", { className: vt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: vt.add, onClick: b, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: vt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ D("span", { className: vt.summary, "aria-live": "polite", children: [
        _?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Ec = "_pager_1du31_1", Tc = "_alignLeft_1du31_10", Cc = "_alignCenter_1du31_14", Mc = "_alignRight_1du31_18", Ac = "_alignJustify_1du31_22", Dc = "_summary_1du31_26", Ic = "_controls_1du31_31", zc = "_button_1du31_37", Lc = "_active_1du31_73", Pc = "_ellipsis_1du31_85", Rc = "_size_1du31_91", Ht = {
  pager: Ec,
  alignLeft: Tc,
  alignCenter: Cc,
  alignRight: Mc,
  alignJustify: Ac,
  summary: Dc,
  controls: Ic,
  button: zc,
  active: Lc,
  ellipsis: Pc,
  size: Rc
};
function jc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Ss(e, t) {
  return e.replace("{0}", String(t));
}
function Bc(e, t, n) {
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
function Fc({
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
  pagingSummaryTemplate: p,
  pageSizeText: b = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: v = "Last page",
  pageTitleFormat: m = "Page {0}",
  pageAriaLabelFormat: f = "Page {0}",
  onPageChange: y,
  onPageSizeChange: N,
  ariaLabel: x = "Pagination",
  className: C,
  visible: $ = !0
}) {
  const S = n ?? r, [T, I] = W(S), A = n !== void 0, M = A ? S : T, k = Math.max(1, Math.ceil(e / t)), w = Math.min(Math.max(1, M), k), E = l ?? !0, L = c || k > 1, z = Bc(w, k, i), P = H(
    (ie) => {
      const re = Math.min(Math.max(1, ie), k);
      A || I(re);
      const V = (re - 1) * t;
      y?.({
        page: re,
        skip: V,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [A, y, k, t]
  ), j = s === "center" ? Ht.alignCenter : s === "right" ? Ht.alignRight : s === "justify" ? Ht.alignJustify : Ht.alignLeft, q = {
    count: e,
    pageNumber: w,
    pageSize: t,
    pageCount: k
  }, ae = (ie) => {
    const re = Array.from(
      ie.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), V = re.indexOf(document.activeElement);
    V !== -1 && (ie.key === "ArrowRight" || ie.key === "ArrowDown" ? (ie.preventDefault(), (re[V + 1] ?? re[0])?.focus()) : ie.key === "ArrowLeft" || ie.key === "ArrowUp" ? (ie.preventDefault(), (re[V - 1] ?? re[re.length - 1])?.focus()) : ie.key === "Home" ? (ie.preventDefault(), re[0]?.focus()) : ie.key === "End" && (ie.preventDefault(), re[re.length - 1]?.focus()));
  };
  return $ === !1 || !L ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ht.pager, j, C].filter(Boolean).join(" "),
      "aria-label": x,
      children: [
        E && /* @__PURE__ */ o("span", { className: Ht.summary, "aria-live": "polite", children: p ? p(q) : jc(u, w, k, e) }),
        /* @__PURE__ */ D(
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
                  disabled: w <= 1,
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
                  disabled: w <= 1,
                  onClick: () => P(w - 1),
                  "aria-label": g,
                  title: g,
                  children: "‹"
                }
              ),
              z.map(
                (ie, re) => ie === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${re}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": ie,
                    className: [Ht.button, ie === w ? Ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": ie === w ? "page" : void 0,
                    "aria-label": Ss(f, ie),
                    title: Ss(m, ie),
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
                  "aria-label": v,
                  title: v,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ D("label", { className: Ht.size, children: [
          /* @__PURE__ */ o("span", { children: b }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (ie) => N?.(Number(ie.target.value)),
              "aria-label": b,
              children: a.map((ie) => /* @__PURE__ */ o("option", { value: ie, children: ie }, ie))
            }
          )
        ] })
      ]
    }
  );
}
function qo(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: a, ...i } = e;
  return /* @__PURE__ */ o(
    Fc,
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
const Ta = "";
function Hc(e, t, n, r, a) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((l) => l.property === s), c = (s, l, d) => {
    const u = t[l];
    if (u === void 0)
      return s.map((_) => ({ type: "row", row: _ }));
    const p = i(u), b = /* @__PURE__ */ new Map(), h = [];
    s.forEach((_) => {
      const v = String(a(_, u) ?? ""), m = b.get(v);
      m ? m.push(_) : (b.set(v, [_]), h.push(v));
    });
    const g = [];
    return h.forEach((_) => {
      const v = b.get(_), m = [...d, _].join(Ta), f = v[0], y = f !== void 0 ? a(f, u) : void 0;
      g.push({
        type: "group",
        group: {
          key: m,
          display: yo(y, p?.format),
          property: u,
          title: p?.title ?? u,
          count: v.length,
          level: l
        }
      }), r.has(m) && g.push(...c(v, l + 1, [...d, _]));
    }), g;
  };
  return c(e, 0, []);
}
function Os(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), u = [];
    i.forEach((p) => {
      const b = String(n(p, l) ?? ""), h = d.get(b);
      h ? h.push(p) : (d.set(b, [p]), u.push(b));
    }), u.forEach((p) => {
      const b = [...s, p].join(Ta);
      r.add(b), a(d.get(p), c + 1, [...s, p]);
    });
  };
  return a(e, 0, []), r;
}
function to(e, t) {
  return e.property ?? `col-${t}`;
}
function Uc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: a, column: i }) => {
    if (!i.frozen) return;
    n[a] = r === 0 ? "0px" : `${r}px`;
    const c = t[a] ?? i.width ?? "8rem";
    r += parseFloat(c);
  }), n;
}
function Wc(e, t) {
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
const Es = [
  "Ascending",
  "Descending",
  null
];
function qc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Es[(r ? Es.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Kc(e, t) {
  return uc(e, t);
}
function Gc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), a = Math.min(Math.max(1, t), r), i = (a - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: a,
    total: e.length
  };
}
function Vc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, l]) => ({
      property: s,
      operator: l.operator ?? "Contains",
      value: Wc(
        l.value,
        n.types?.[s] ?? "string"
      )
    })
  ), a = r.length > 0 ? Ea(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Kc(a, t.sorts);
  return {
    ...Gc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Ts(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Yc(e, t, n) {
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
function Xc(e, t, n = ar) {
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
const Zc = "_grid_13rur_1", Jc = "_toolbar_13rur_8", Qc = "_picker_13rur_13", ed = "_pickerButton_13rur_17", td = "_pickerPanel_13rur_31", nd = "_pickerItem_13rur_46", rd = "_groupPanel_13rur_55", od = "_groupPanelActive_13rur_66", sd = "_groupPanelText_13rur_70", ad = "_groupChip_13rur_74", ld = "_groupRemove_13rur_85", id = "_groupRow_13rur_94", cd = "_groupCell_13rur_98", dd = "_groupToggle_13rur_104", ud = "_editRow_13rur_117", fd = "_editCell_13rur_121", pd = "_editInput_13rur_127", _d = "_commandCell_13rur_137", hd = "_commandButton_13rur_144", md = "_data_13rur_159", gd = "_table_13rur_166", yd = "_header_13rur_172", bd = "_center_13rur_185", xd = "_right_13rur_189", vd = "_sortButton_13rur_193", wd = "_sortIndicator_13rur_211", kd = "_sortIndex_13rur_215", Nd = "_cell_13rur_226", $d = "_clickable_13rur_241", Sd = "_frozen_13rur_249", Od = "_selected_13rur_255", Ed = "_resizeHandle_13rur_263", Td = "_filterCell_13rur_281", Cd = "_filterSelect_13rur_290", Md = "_filterInput_13rur_300", Ad = "_empty_13rur_311", Dd = "_loading_13rur_317", Id = "_visuallyHidden_13rur_331", zd = "_virtualScroller_13rur_340", Ld = "_spacerRow_13rur_345", Pd = "_footerRow_13rur_350", Rd = "_footerCell_13rur_354", jd = "_footerValue_13rur_361", Se = {
  grid: Zc,
  toolbar: Jc,
  picker: Qc,
  pickerButton: ed,
  pickerPanel: td,
  pickerItem: nd,
  groupPanel: rd,
  groupPanelActive: od,
  groupPanelText: sd,
  groupChip: ad,
  groupRemove: ld,
  groupRow: id,
  groupCell: cd,
  groupToggle: dd,
  editRow: ud,
  editCell: fd,
  editInput: pd,
  commandCell: _d,
  commandButton: hd,
  data: md,
  table: gd,
  header: yd,
  center: bd,
  right: xd,
  sortButton: vd,
  sortIndicator: wd,
  sortIndex: kd,
  cell: Nd,
  clickable: $d,
  frozen: Sd,
  selected: Od,
  resizeHandle: Ed,
  filterCell: Td,
  filterSelect: Cd,
  filterInput: Md,
  empty: Ad,
  loading: Dd,
  visuallyHidden: Id,
  virtualScroller: zd,
  spacerRow: Ld,
  footerRow: Pd,
  footerCell: Rd,
  footerValue: jd
}, Bd = {
  Ascending: "ascending",
  Descending: "descending"
};
function Cs(e, t) {
  return e.filterable ?? t;
}
function Fd(e, t) {
  return e.sortable ?? t;
}
function Hd(e) {
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
  pageSizeOptions: p,
  pageNumbersCount: b = 5,
  pagerPosition: h = "Bottom",
  showPagingSummary: g = !0,
  showPageSizeSelector: _ = !0,
  selectionMode: v = "None",
  selectedKeys: m,
  onSelectionChange: f,
  showColumnPicker: y = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: C = !1,
  allowGrouping: $ = !1,
  groupPanelText: S = "Drag a column header here to group",
  groupExpanded: T = !0,
  aggregates: I,
  showExportButton: A = !1,
  exportFileName: M = "grid-data",
  serverMode: k = !1,
  totalCount: w,
  onRangeChange: E,
  virtualize: L = !1,
  virtualRowHeight: z = 40,
  virtualHeight: P = 480,
  editMode: j = "None",
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
  ), [gt, ee] = W({}), [Ce, lt] = W(!1), [ze, st] = W([]), [Xe, Tt] = W(
    null
  ), [yt, it] = W(null), [ft, Ve] = W({}), [Ct, se] = W(0), [Le, wt] = W(P), Mt = le(null), bt = le(null), R = Ne(() => {
    const U = /* @__PURE__ */ new Map();
    return e.forEach((G, be) => U.set(to(G, be), G)), U;
  }, [e]), Y = Ne(
    () => Je.filter((U) => Qe.has(U)).map((U) => ({ key: U, column: R.get(U) })).filter(
      (U) => U.column != null
    ),
    [Je, Qe, R]
  ), he = Ne(
    () => Uc(Y, gt),
    [Y, gt]
  ), we = j !== "None" || re != null || q, fe = Ne(() => {
    if (k) {
      const U = w ?? t.length, G = Math.max(1, Math.ceil(U / me));
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
    return Vc(
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
    k,
    w,
    d
  ]), F = le(E);
  Oe(() => {
    F.current = E;
  });
  const pe = Ne(
    () => [...K.entries()].filter(([, U]) => U.value !== "" && U.value !== void 0).map(([U, G]) => ({
      property: U,
      operator: G.operator ?? Ts(
        e.find((be) => be.property === U)?.type ?? "string"
      ),
      value: G.value ?? ""
    })),
    [K, e]
  );
  Oe(() => {
    !k || F.current == null || F.current({
      start: (oe - 1) * me,
      count: me,
      pageNumber: oe,
      pageSize: me,
      sorts: te,
      filters: pe,
      logicalOperator: l
    });
  }, [
    k,
    oe,
    me,
    te,
    pe,
    l
  ]);
  const Re = Ne(() => new Set(ze), [ze]), Ie = Ne(() => Xe || (T ? Os(fe.items, ze, ar) : /* @__PURE__ */ new Set()), [Xe, T, fe.items, ze]), It = Ne(
    () => Hc(fe.items, ze, e, Ie, ar),
    [fe.items, ze, e, Ie]
  ), et = Ne(
    () => ze.length > 0 ? Y.filter(
      (U) => U.column.property == null || !Re.has(U.column.property)
    ) : Y,
    [Y, ze, Re]
  ), mn = (U) => {
    U !== "" && ye(qc(te, U, { multi: a }));
  }, Nn = (U, G) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(U, G), xe;
    }), De(1);
  }, Z = (U) => {
    qe(U), De(1);
  }, ce = (U) => {
    if (v === "None") return;
    const G = n(U), be = m ?? [];
    let xe;
    v === "Single" ? xe = be.length === 1 && be[0] === G ? [] : [G] : xe = be.includes(G) ? be.filter((nt) => nt !== G) : [...be, G], f?.(xe);
  }, _e = (U) => {
    X?.(U);
  }, ke = (U, G, be) => {
    Mt.current = { key: U, startX: G, startWidth: be };
  }, ve = (U) => {
    const G = Mt.current;
    if (!G) return;
    const be = U - G.startX, xe = Math.max(48, G.startWidth + be);
    ee((nt) => ({ ...nt, [G.key]: `${xe}px` }));
  }, Ae = () => {
    Mt.current = null;
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
    if (bt.current = null, !U || !$) return;
    const be = R.get(U)?.property;
    be && (st(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Tt(null));
  }, je = (U) => {
    st((G) => G.filter((be) => be !== U)), Tt(null);
  }, tt = (U) => {
    Tt((G) => {
      const be = G ?? (T ? Os(fe.items, ze, ar) : /* @__PURE__ */ new Set()), xe = new Set(be);
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
  }, Zn = d && (h === "Top" || h === "TopAndBottom"), Jn = d && (h === "Bottom" || h === "TopAndBottom"), Fn = c && e.some((U) => Cs(U, c)), Oo = (U, G, be) => U.render ? U.render(G, { index: 0 }) : yo(ar(G, U.property), U.format), Eo = (U) => {
    const G = [Se.cell];
    return U.align === "center" && G.push(Se.center), U.align === "right" && G.push(Se.right), U.frozen && G.push(Se.frozen), G.join(" ");
  }, gn = k ? t : fe.filtered, Jr = () => {
    const U = Xc(
      gn,
      et.map((nt) => nt.column)
    ), G = new Blob([`\uFEFF${U}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(G), xe = document.createElement("a");
    xe.href = be, xe.download = `${M}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, yn = It.length, Bt = Ne(() => {
    if (!L || yn === 0)
      return { start: 0, end: yn, top: 0, bottom: 0 };
    const U = 5, G = Math.max(
      0,
      Math.floor(Ct / z) - U
    ), be = Math.ceil(Le / z) + U * 2, xe = Math.min(yn, G + be), nt = G * z, zt = Math.max(0, (yn - xe) * z);
    return { start: G, end: xe, top: nt, bottom: zt };
  }, [L, yn, Ct, z, Le]), Sr = et.length + (we ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Se.grid, J].filter(Boolean).join(" "), children: [
    Zn && /* @__PURE__ */ o(
      qo,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: p,
        pageNumbersCount: b,
        showSummary: g,
        showPageSizeSelector: _,
        ariaLabel: `${ge}${Jn ? "Pagination (top)" : "Pagination"}`,
        onPageChange: De,
        onPageSizeChange: Z
      }
    ),
    ($ || q || y || A) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
      $ && // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- drop target for drag-to-group (pointer affordance)
      /* @__PURE__ */ o(
        "div",
        {
          className: [
            Se.groupPanel,
            ze.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (U) => U.preventDefault() : void 0,
          onDrop: $ ? xt : void 0,
          children: ze.length > 0 ? ze.map((U) => {
            const G = e.find((be) => be.property === U)?.title ?? U;
            return /* @__PURE__ */ D("span", { className: Se.groupChip, children: [
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
          }) : /* @__PURE__ */ o("span", { className: Se.groupPanelText, children: S })
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
      y && /* @__PURE__ */ D("div", { className: Se.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Se.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Ce,
            onClick: () => lt((U) => !U),
            children: N
          }
        ),
        Ce && /* @__PURE__ */ o(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((U, G) => {
              const be = to(U, G);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
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
    /* @__PURE__ */ D(
      "div",
      {
        className: [Se.data, L ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: L ? { maxHeight: P } : void 0,
        onScroll: L ? (U) => {
          se(U.currentTarget.scrollTop), wt(U.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (L ? yn : fe.total) + 1,
              "aria-label": Q,
              "aria-busy": V || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
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
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    et.map(({ key: U, column: G }) => {
                      const be = Fd(G, r), xe = te.find(($t) => $t.property === G.property), nt = xe ? te.indexOf(xe) + 1 : 0, zt = G.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": be && xe ? Bd[xe.sortOrder] : "none",
                          className: [
                            Se.header,
                            zt === "center" ? Se.center : "",
                            zt === "right" ? Se.right : "",
                            G.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: G.frozen ? { left: he[U] } : void 0,
                          scope: "col",
                          draggable: C || $ || void 0,
                          onDragStart: C || $ ? ($t) => {
                            $t.dataTransfer && ($t.dataTransfer.effectAllowed = "move"), Ye(U);
                          } : void 0,
                          onDragOver: C ? ($t) => $t.preventDefault() : void 0,
                          onDrop: C ? () => Fe(U) : void 0,
                          children: [
                            be ? /* @__PURE__ */ D(
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
                                  Mt.current?.key === U && ve($t.clientX);
                                },
                                onMouseUp: Ae,
                                onMouseLeave: () => {
                                  Mt.current?.key === U && Ae();
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
                    if (!Cs(G, c))
                      return /* @__PURE__ */ o("td", { className: Se.filterCell }, U);
                    const be = K.get(G.property ?? "");
                    return /* @__PURE__ */ D("td", { className: Se.filterCell, children: [
                      /* @__PURE__ */ D(
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
                          value: be?.operator ?? Ts(G.type ?? "string"),
                          onChange: (xe) => Nn(G.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${G.title ?? G.property} operator`,
                          children: Sa.filter((xe) => xe !== "Custom").map(
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
                /* @__PURE__ */ D("tbody", { children: [
                  yt === "__new__" && /* @__PURE__ */ D("tr", { className: Se.editRow, children: [
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
                  It.slice(Bt.start, Bt.end).map((U, G) => {
                    const be = Bt.start + G, xe = L ? be + 2 : void 0;
                    if (U.type === "group" && U.group) {
                      const Dt = Ie.has(U.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": xe,
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
                    const nt = U.row, zt = n(nt), $t = (m ?? []).includes(zt), bn = yt != null && yt === String(zt);
                    return /* @__PURE__ */ D(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          X || v !== "None" ? Se.clickable : "",
                          $t ? Se.selected : "",
                          bn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": v !== "None" ? $t : void 0,
                        onClick: X || v !== "None" ? (Dt) => {
                          Hd(Dt.target) || (_e(nt), ce(nt));
                        } : void 0,
                        children: [
                          et.map(({ key: Dt, column: kt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Eo(kt),
                              style: kt.frozen ? { left: he[Dt] } : void 0,
                              children: bn && kt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: kt.type === "number" ? "number" : kt.type === "boolean" ? "checkbox" : "text",
                                  checked: kt.type === "boolean" ? !!ft[kt.property] : void 0,
                                  value: kt.type === "boolean" ? void 0 : String(ft[kt.property] ?? ""),
                                  onChange: (Qt) => Ve((To) => ({
                                    ...To,
                                    [kt.property]: kt.type === "boolean" ? Qt.target.checked : Qt.target.value
                                  })),
                                  "aria-label": `${kt.title ?? kt.property} (edit)`
                                }
                              ) : Oo(kt, nt)
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
                I && I.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  et.map(({ key: U, column: G }) => {
                    const be = I.filter(
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
                        children: be.map((xe, nt) => /* @__PURE__ */ D(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              yo(
                                Yc(gn, xe, ar),
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
      qo,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: p,
        pageNumbersCount: b,
        showSummary: g,
        showPageSizeSelector: _,
        ariaLabel: `${ge}${Zn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: De,
        onPageSizeChange: Z
      }
    )
  ] });
}
const Ud = "_wrap_avqds_1", Wd = "_grid_avqds_7", qd = "_stacked_avqds_13", Kd = "_item_avqds_19", Gd = "_empty_avqds_25", Dr = {
  wrap: Ud,
  grid: Wd,
  stacked: qd,
  item: Kd,
  empty: Gd
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
  ariaLabel: p = "Data list"
}) {
  const [b, h] = W(1), [g, _] = W(t), v = e.length, m = Math.max(1, Math.ceil(v / g)), f = Math.min(Math.max(1, b), m), y = Ne(() => {
    const x = (f - 1) * g;
    return e.slice(x, x + g);
  }, [e, f, g]), N = r ? Dr.grid : Dr.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Dr.wrap, u].filter(Boolean).join(" "),
      "aria-label": p,
      children: [
        l && s != null ? s : v === 0 ? c ?? /* @__PURE__ */ o("div", { className: Dr.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: y.map((x, C) => /* @__PURE__ */ o("div", { className: Dr.item, children: a ? a(x, C) : String(x) }, C)) }),
        /* @__PURE__ */ o(
          qo,
          {
            ariaLabel: `${p} Pagination`,
            pageNumber: f,
            pageSize: g,
            count: v,
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
const Vd = "_label_1qfpw_1", Yd = {
  label: Vd
}, V$ = at(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: a,
      className: [Yd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Xd = "_textbox_oly89_1", Zd = "_invalid_oly89_37", Jd = "_xs_oly89_44", Qd = "_sm_oly89_50", eu = "_md_oly89_56", tu = "_lg_oly89_62", nu = "_xl_oly89_68", Do = {
  textbox: Xd,
  invalid: Zd,
  xs: Jd,
  sm: Qd,
  md: eu,
  lg: tu,
  xl: nu
}, ls = at(
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
          Do.textbox,
          Do[t],
          n ? Do.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c
      }
    );
  }
), no = ls, ru = "_checkbox_1bb6c_1", ou = {
  checkbox: ru
}, su = at(
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
        className: [ou.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), au = {
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
      className: [au.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && i(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), lu = "_trigger_1jlxf_1", iu = "_tooltip_1jlxf_7", cu = "_top_1jlxf_34", du = "_right_1jlxf_40", uu = "_bottom_1jlxf_46", fu = "_left_1jlxf_52", pu = "_arrow_1jlxf_58", _u = "_floating_1jlxf_70", Un = {
  trigger: lu,
  tooltip: iu,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: cu,
  right: du,
  bottom: uu,
  left: fu,
  arrow: pu,
  floating: _u,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, ro = 8;
function hu(e, t) {
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
function X$({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = ct(), l = le(null), d = le(null), u = le(() => {
  }), [p, b] = W(!1), [h, g] = W(null), _ = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, v = () => {
    _(), l.current = window.setTimeout(() => {
      l.current = null, b(!0);
    }, r);
  }, m = () => {
    _(), b(!1);
  };
  if (Oe(() => () => _(), []), Oe(() => {
    if (!p || a == null) return;
    const y = window.setTimeout(() => b(!1), a);
    return () => window.clearTimeout(y);
  }, [p, a]), Oe(() => {
    if (i || !p) return;
    const y = (N) => {
      N.key === "Escape" && m();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [i, p]), Oe(() => {
    if (!i) return;
    let y = null, N = null;
    const x = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, C = () => {
      x(), N = null, g(null);
    };
    u.current = C;
    const $ = (k) => {
      x(), N = k, y = window.setTimeout(() => {
        y = null, g(k);
      }, r);
    }, S = (k) => k instanceof Element ? k.closest(i) : null, T = (k) => {
      const w = S(k.target);
      !w || w === N || $(w);
    }, I = (k) => {
      const w = S(k.target);
      if (!w || w !== N) return;
      const E = k.relatedTarget;
      E instanceof Element && w.contains(E) || C();
    }, A = (k) => {
      k.key === "Escape" && C();
    }, M = () => C();
    return document.addEventListener("mouseover", T), document.addEventListener("mouseout", I), document.addEventListener("focusin", T), document.addEventListener("focusout", I), document.addEventListener("keydown", A), document.addEventListener("scroll", M, !0), window.addEventListener("resize", M), () => {
      x(), document.removeEventListener("mouseover", T), document.removeEventListener("mouseout", I), document.removeEventListener("focusin", T), document.removeEventListener("focusout", I), document.removeEventListener("keydown", A), document.removeEventListener("scroll", M, !0), window.removeEventListener("resize", M), N = null, g(null);
    };
  }, [i, r]), Oe(() => {
    if (!i || h === null || a == null) return;
    const y = window.setTimeout(() => u.current(), a);
    return () => window.clearTimeout(y);
  }, [i, h, a]), Wo(() => {
    const y = h;
    if (!y) return;
    const N = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [N, s].filter(Boolean).join(" ")
    ), () => {
      N == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", N);
    };
  }, [h, s]), Wo(() => {
    const y = d.current, N = h;
    !y || !N || Object.assign(
      y.style,
      hu(N.getBoundingClientRect(), n)
    );
  }, [h, n]), i)
    return h ? /* @__PURE__ */ D(
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
  const f = qt(t) ? os(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      p ? s : null
    ].filter((y) => typeof y == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: v,
        onMouseLeave: m,
        onFocus: v,
        onBlur: m,
        children: [
          f,
          p && /* @__PURE__ */ D(
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
const mu = "_dialog_1t7pw_1", gu = "_sm_1t7pw_104", yu = "_resizable_1t7pw_110", bu = "_md_1t7pw_113", xu = "_lg_1t7pw_117", vu = "_header_1t7pw_121", wu = "_title_1t7pw_132", ku = "_description_1t7pw_139", Nu = "_close_1t7pw_146", $u = "_body_1t7pw_176", Su = "_footer_1t7pw_188", xn = {
  dialog: mu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: gu,
  resizable: yu,
  md: bu,
  lg: xu,
  header: vu,
  title: wu,
  description: ku,
  close: Nu,
  body: $u,
  footer: Su
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
  resizable: p = !1,
  side: b = null,
  showCloseButton: h = !0,
  showMask: g = !0,
  canClose: _,
  className: v
}) {
  const m = le(null), f = ct(), y = ct(), N = le(t);
  Oe(() => {
    N.current = t;
  });
  const x = le(_);
  Oe(() => {
    x.current = _;
  });
  const C = le(u);
  Oe(() => {
    C.current = u;
  });
  const $ = le(!1), S = le(!1), T = H(() => {
    if ($.current) return;
    const M = x.current?.();
    if (M instanceof Promise) {
      M.then((k) => {
        k && !$.current && ($.current = !0, N.current());
      });
      return;
    }
    M !== !1 && ($.current = !0, N.current());
  }, []), I = H(() => {
    if (S.current) {
      S.current = !1;
      return;
    }
    N.current();
  }, []), A = H(
    (M) => {
      if (M.key !== "Tab" || !m.current) return;
      const k = Array.from(
        m.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (E) => E.offsetWidth > 0 || E.offsetHeight > 0 || E === document.activeElement
      );
      if (k.length === 0) {
        M.preventDefault();
        return;
      }
      const w = k.indexOf(document.activeElement);
      if (M.shiftKey) {
        if (w <= 0) {
          M.preventDefault();
          const E = k[k.length - 1];
          E && E.focus();
        }
      } else if (w === -1 || w === k.length - 1) {
        M.preventDefault();
        const E = k[0];
        E && E.focus();
      }
    },
    []
  );
  return Oe(() => {
    const M = m.current;
    if (M)
      if (e && !M.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        M.showModal(), (M.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? M.querySelector("button"))?.focus();
        const E = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const L = (z) => {
          z.preventDefault(), C.current && T();
        };
        return M.addEventListener("cancel", L), () => {
          M.removeEventListener("cancel", L), document.body.style.overflow = E, k?.focus({ preventScroll: !0 });
        };
      } else !e && M.open && (S.current = $.current, $.current = !1, M.close());
  }, [e, T]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button. The dialog's own
  // onKeyDown={keepFocusInside} satisfies the keyboard-listener rules.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click closes the dialog; ESC and the close button are the keyboard paths
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: m,
      className: [
        xn.dialog,
        xn[c],
        p ? xn.resizable : null,
        b ? xn[`side-${b}`] : null,
        g === !1 ? xn["no-mask"] : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: I,
      onClick: (M) => {
        M.target === m.current && d && T();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? f : void 0,
      "aria-describedby": r ? y : void 0,
      onKeyDown: A,
      children: [
        n && /* @__PURE__ */ D("header", { className: xn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ o("h2", { id: f, className: xn.title, children: n }),
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
const Ou = "_typography_1jy8x_1", Eu = "_h1_1jy8x_39", Tu = "_h2_1jy8x_45", Cu = "_h3_1jy8x_51", Mu = "_h4_1jy8x_57", Au = "_h5_1jy8x_63", Du = "_h6_1jy8x_69", Iu = "_button_1jy8x_99", zu = "_caption_1jy8x_106", Lu = "_overline_1jy8x_112", Io = {
  typography: Ou,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Eu,
  h2: Tu,
  h3: Cu,
  h4: Mu,
  h5: Au,
  h6: Du,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Iu,
  caption: zu,
  overline: Lu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Pu = {
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
}, Ru = {
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
}, ju = {
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
}, Bu = {
  left: "align-left",
  right: "align-right",
  center: "align-center",
  justify: "align-justify",
  start: "align-left",
  end: "align-right",
  justifyAll: "align-justify"
}, Ma = at(function({
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
  const u = n === "auto" ? Pu[t] : ju[n];
  return /* @__PURE__ */ o(
    u,
    {
      ref: d,
      className: [
        Io.typography,
        Io[Ru[t]],
        r ? Io[Bu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Aa = cr(null);
function Z$() {
  const e = Bn(Aa);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function J$({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = le(0), i = () => (a.current += 1, a.current), c = le([]);
  Oe(() => {
    c.current = t;
  });
  const s = (b) => {
    const h = c.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!b) : h.kind === "alert" ? h.resolve() : h.resolve(b), n((g) => g.slice(1)));
  }, l = Ne(
    () => ({
      confirm: (b = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "confirm", options: b, resolve: h }
        ]);
      }),
      alert: (b = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "alert", options: b, resolve: h }
        ]);
      }),
      open: (b = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "custom", options: b, resolve: h }
        ]);
      }),
      openSide: ({ position: b, showMask: h = !0, ...g }) => new Promise((_) => {
        n((v) => [
          ...v,
          {
            seq: i(),
            kind: "custom",
            options: { ...g, side: b, showMask: h },
            resolve: _
          }
        ]);
      }),
      close: (b) => s(b),
      closeAll: () => {
        n((b) => (b.forEach((h) => {
          h.kind === "confirm" ? h.resolve(!1) : h.kind === "alert" ? h.resolve() : h.resolve(void 0);
        }), []));
      },
      refresh: () => r((b) => b + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    []
  ), d = t[0];
  function u(b) {
    d && (d.kind === "confirm" ? d.resolve(!!b) : d.kind === "alert" ? d.resolve() : d.resolve(b), n((h) => h.slice(1)));
  }
  const p = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ D(Aa.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ca,
      {
        open: t.length > 0,
        onClose: () => u(!1),
        title: d?.kind === "custom" ? p?.title ?? "Dialog" : d?.options.title ?? (d?.kind === "confirm" ? "Confirm" : "Alert"),
        description: p?.description,
        size: d?.kind === "custom" ? p?.size : d?.options.size,
        width: p?.width,
        height: p?.height,
        side: p?.side ?? null,
        showCloseButton: p?.showCloseButton,
        showMask: p?.showMask,
        closeOnOverlayClick: p?.closeOnOverlayClick,
        closeOnEsc: p?.closeOnEsc,
        className: p?.className,
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
        ] }) : d?.kind === "custom" ? p?.footer ?? /* @__PURE__ */ o(cn, { variant: "text", onClick: () => u(void 0), children: "Close" }) : /* @__PURE__ */ o(cn, { onClick: () => u(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? p?.content : d?.options.message != null && /* @__PURE__ */ o(Ma, { textStyle: "body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Fu = "_viewport_11t1p_1", Hu = "_topLeft_11t1p_13", Uu = "_topRight_11t1p_20", Wu = "_bottomLeft_11t1p_25", qu = "_toast_11t1p_30", Ku = "_leaving_11t1p_61", Gu = "_info_11t1p_77", Vu = "_success_11t1p_86", Yu = "_warning_11t1p_95", Xu = "_danger_11t1p_104", Zu = "_content_11t1p_113", Ju = "_title_11t1p_118", Qu = "_description_11t1p_141", ef = "_dismiss_11t1p_148", tf = "_actions_11t1p_169", nf = "_action_11t1p_169", rf = "_cancel_11t1p_177", of = "_progress_11t1p_215", tn = {
  viewport: Fu,
  topLeft: Hu,
  topRight: Uu,
  bottomLeft: Wu,
  toast: qu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Ku,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Gu,
  success: Vu,
  warning: Yu,
  danger: Xu,
  content: Zu,
  title: Ju,
  description: Qu,
  dismiss: ef,
  actions: tf,
  action: nf,
  cancel: rf,
  progress: of,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Da = cr(null);
function Q$() {
  const e = Bn(Da);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const sf = 200, af = {
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
  const [i, c] = W([]), [s, l] = W(!1), d = le([]), u = le(/* @__PURE__ */ new Map()), p = le(!1), b = le(0), h = (w) => {
    p.current = w, l(w);
  }, g = H((w) => {
    const E = u.current.get(w);
    E && (window.clearTimeout(E.timeoutId), E.remaining = Math.max(
      0,
      E.remaining - (Date.now() - E.startedAt)
    ));
  }, []), _ = H((w) => {
    const E = u.current.get(w);
    E && (window.clearTimeout(E.timeoutId), u.current.delete(w));
  }, []), v = H(
    (w) => {
      _(w), c((E) => {
        const L = E.filter((z) => z.id !== w);
        return d.current = L, L;
      });
    },
    [_]
  ), m = H(
    (w) => {
      const E = d.current.find((L) => L.id === w);
      !E || E.leaving || (E.onAutoClose?.(), v(w));
    },
    [v]
  ), f = H(
    (w) => {
      const E = u.current.get(w);
      !E || E.remaining <= 0 || (E.startedAt = Date.now(), E.timeoutId = window.setTimeout(() => m(w), E.remaining));
    },
    [m]
  ), y = H(() => {
    p.current || u.current.forEach((w, E) => g(E)), h(!0);
  }, [g]), N = H(() => {
    u.current.forEach((w, E) => f(E)), h(!1);
  }, [f]);
  Oe(() => {
    if (!r) return;
    const w = () => {
      document.hidden ? y() : N();
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, [r, y, N]);
  const x = H(
    (w) => {
      const E = d.current.find((L) => L.id === w);
      !E || E.leaving || (E.onDismiss?.(), c((L) => {
        const z = L.map(
          (P) => P.id === w ? { ...P, leaving: !0 } : P
        );
        return d.current = z, z;
      }), window.setTimeout(() => v(w), sf));
    },
    [v]
  ), C = H(
    (w) => {
      if (w.durationMs <= 0) return;
      const E = {
        remaining: w.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(w.id, E), p.current || f(w.id);
    },
    [f]
  ), $ = H(
    (w) => {
      const E = d.current.find((z) => z.id === w.id), L = {
        id: w.id ?? ++b.current,
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
      c((z) => {
        const P = E ? z.map(
          (j) => j.id === L.id ? { ...L, leaving: !1 } : j
        ) : [...z, L];
        return d.current = P, P;
      }), E && _(L.id), C(L);
    },
    [t, n, C, _]
  ), S = H(
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
    (w) => (E, L) => S({ severity: w, summary: E, detail: L }),
    [S]
  ), I = Ne(
    () => ({
      toast: $,
      notify: S,
      notifyInfo: T("info"),
      notifySuccess: T("success"),
      notifyWarning: T("warning"),
      notifyError: T("danger")
    }),
    [$, S, T]
  ), A = Ne(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((w) => w.position)])),
    [n, i]
  ), M = r ? y : void 0, k = r ? N : void 0;
  return /* @__PURE__ */ D(Da.Provider, { value: I, children: [
    e,
    A.map((w) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- hover listeners pause auto-dismiss; the live region itself is not interactive
      /* @__PURE__ */ o(
        "div",
        {
          className: [tn.viewport, tn[af[w]], a].filter(Boolean).join(" "),
          "aria-live": "polite",
          "aria-atomic": "false",
          onMouseEnter: M,
          onMouseLeave: k,
          children: i.filter((E) => E.position === w).map((E) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click-to-close is a pointer affordance; the dismiss button provides the keyboard path
            /* @__PURE__ */ D(
              "div",
              {
                role: E.severity === "danger" ? "alert" : "status",
                "data-paused": s ? "true" : "false",
                "data-clickable": E.closeOnClick ? "true" : "false",
                className: [
                  tn.toast,
                  tn[E.severity],
                  E.leaving ? tn.leaving : ""
                ].filter(Boolean).join(" "),
                onClick: E.click || E.closeOnClick ? () => {
                  E.click?.(E.payload), E.closeOnClick && x(E.id);
                } : void 0,
                children: [
                  /* @__PURE__ */ D("div", { className: tn.content, children: [
                    /* @__PURE__ */ o("div", { className: tn.title, children: E.title }),
                    E.description && /* @__PURE__ */ o("div", { className: tn.description, children: E.description }),
                    (E.action || E.cancel) && /* @__PURE__ */ D("div", { className: tn.actions, children: [
                      E.action && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.action,
                          onClick: () => {
                            E.action?.onClick?.(), x(E.id);
                          },
                          children: E.action.label
                        }
                      ),
                      E.cancel && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.cancel,
                          onClick: () => {
                            E.cancel?.onClick?.(), x(E.id);
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
                      className: tn.dismiss,
                      onClick: () => x(E.id),
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                    }
                  ),
                  E.showProgress && E.durationMs > 0 && /* @__PURE__ */ o(
                    "div",
                    {
                      className: tn.progress,
                      style: { animationDuration: `${E.durationMs}ms` }
                    }
                  )
                ]
              },
              E.id
            )
          ))
        },
        w
      )
    ))
  ] });
}
const lf = "_navigator_848v2_3", cf = "_track_848v2_9", df = "_spark_848v2_19", uf = "_window_848v2_28", ff = "_handle_848v2_37", Wn = {
  navigator: lf,
  track: cf,
  spark: df,
  window: uf,
  handle: ff
};
function Ms(e, t, n, r, a) {
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
  const d = n !== void 0, [u, p] = W(
    () => r && Ms(
      r.start,
      r.end,
      e,
      t,
      c
    ) || {
      start: e,
      end: t
    }
  ), b = d && n ? n : u, h = le(null), g = le(null), _ = H(
    (S) => {
      const T = Ms(S.start, S.end, e, t, c);
      d || p(T), a?.(T);
    },
    [d, e, t, c, a]
  ), v = H(
    (S) => {
      const T = g.current;
      if (!T) return e;
      const I = T.getBoundingClientRect(), A = I.width > 0 ? (S - I.left) / I.width : 0;
      return e + Math.max(0, Math.min(1, A)) * (t - e || 1);
    },
    [e, t]
  ), m = H(
    (S) => (Math.max(e, Math.min(t, S)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  Oe(() => {
    const S = (I) => {
      const A = h.current;
      if (!A) return;
      const M = v(I.clientX);
      if (A.mode === "start") _({ start: M, end: b.end });
      else if (A.mode === "end") _({ start: b.start, end: M });
      else {
        const k = b.end - b.start, w = M - A.grabOffset;
        _({ start: w, end: w + k });
      }
    }, T = () => {
      h.current = null;
    };
    return document.addEventListener("pointermove", S), document.addEventListener("pointerup", T), () => {
      document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", T);
    };
  }, [_, v, b]);
  const f = (S, T) => {
    T.preventDefault(), T.target.focus?.(), h.current = { mode: S, grabOffset: 0 };
  }, y = (S) => {
    const T = v(S.clientX);
    if (T >= b.start && T <= b.end)
      h.current = { mode: "pan", grabOffset: T - b.start };
    else {
      const I = Math.abs(T - b.start), A = Math.abs(T - b.end);
      I <= A ? _({ start: T, end: b.end }) : _({ start: b.start, end: T });
    }
  }, N = (t - e || 1) / 100, x = (S) => (T) => {
    const I = T.shiftKey ? N * 10 : N;
    T.key === "ArrowLeft" || T.key === "ArrowDown" ? (T.preventDefault(), _(
      S === "start" ? { start: b.start - I, end: b.end } : { start: b.start, end: b.end - I }
    )) : T.key === "ArrowRight" || T.key === "ArrowUp" ? (T.preventDefault(), _(
      S === "start" ? { start: b.start + I, end: b.end } : { start: b.start, end: b.end + I }
    )) : T.key === "Home" ? (T.preventDefault(), _(
      S === "start" ? { start: e, end: b.end } : { start: b.start, end: t }
    )) : T.key === "End" && (T.preventDefault(), _(
      S === "start" ? { start: b.end - c, end: b.end } : { start: b.start, end: t }
    ));
  }, C = m(b.start), $ = Math.max(0, m(b.end) - C);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ D("div", { ref: g, className: Wn.track, onPointerDown: y, children: [
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
                points: i.map((S, T) => {
                  const I = T / (i.length - 1) * 100, A = Math.max(...i), M = Math.min(...i), k = A === M ? 12 : 22 - (S - M) / (A - M) * 20;
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
            "aria-valuenow": Math.round(b.start * 100) / 100,
            className: [Wn.handle, Wn.handleStart].filter(Boolean).join(" "),
            style: { left: `${C}%` },
            onPointerDown: (S) => f("start", S),
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
            "aria-valuenow": Math.round(b.end * 100) / 100,
            className: [Wn.handle, Wn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${C + $}%` },
            onPointerDown: (S) => f("end", S),
            onKeyDown: x("end")
          }
        )
      ] })
    }
  );
}
const pf = "_gauge_pyq6q_3", _f = "_value_pyq6q_11", hf = "_tick_pyq6q_16", Pn = {
  gauge: pf,
  value: _f,
  tick: hf
}, oo = 150, As = 240;
function Ds(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Is(e, t, n, r, a) {
  const [i, c] = Ds(e, t, n, r), [s, l] = Ds(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function mf(e, t, n) {
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
  formatValue: l = (p) => String(Math.round(p * 100) / 100),
  ariaLabel: d = "Gauge",
  className: u
}) {
  const p = n - t || 1, b = Math.max(0, Math.min(1, (e - t) / p)), h = "var(--dx-border-color)", g = a ?? "var(--dx-primary-color)", _ = 100, v = 96, m = 80, f = oo + As * b;
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
              d: Is(_, v, m, oo, oo + As),
              fill: "none",
              stroke: h,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          b > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Is(_, v, m, oo, f),
              fill: "none",
              stroke: mf(b, i, g),
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
function zs(e, t, n, r, a) {
  const [i, c] = kr(e, t, n, r), [s, l] = kr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function gf(e, t, n) {
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
  formatValue: p = (g) => String(Math.round(g * 100) / 100),
  ariaLabel: b = "Gauge",
  className: h
}) {
  const g = n - t || 1, _ = (A) => Math.max(0, Math.min(1, (A - t) / g)), m = a - r >= 360 ? r + 359.999 : a, f = (A) => r + (m - r) * _(A), y = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: x = 8, showLabels: C = !0 } = i, $ = 100, S = 100, T = 78, I = (A, M, k) => {
    const [w, E] = kr($, S, T - 14, f(A));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: $,
        y1: S,
        x2: w,
        y2: E,
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
      "aria-label": b,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, h].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: zs($, S, T, r, m),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((A, M) => /* @__PURE__ */ o(
            "path",
            {
              d: zs(
                $,
                S,
                T,
                f(Math.max(t, A.from)),
                f(Math.min(n, A.to))
              ),
              fill: "none",
              stroke: A.color,
              strokeWidth: 12
            },
            `range-${M}`
          )),
          x > 0 && gf(t, n, x).map((A, M) => {
            const [k, w] = kr($, S, T - 10, f(A)), [E, L] = kr($, S, T - 16, f(A)), [z, P] = kr($, S, T - 26, f(A));
            return /* @__PURE__ */ D("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: k,
                  y1: w,
                  x2: E,
                  y2: L,
                  stroke: N,
                  strokeWidth: 1.5
                }
              ),
              C && /* @__PURE__ */ o(
                "text",
                {
                  x: z,
                  y: P + 4,
                  textAnchor: "middle",
                  className: Pn.tick,
                  children: A
                }
              )
            ] }, M);
          }),
          I(e, y, "value"),
          s.map(
            (A, M) => I(A.value, A.color ?? y, `extra-${M}`)
          ),
          /* @__PURE__ */ o("circle", { cx: $, cy: S, r: 7, fill: y })
        ] }),
        u && /* @__PURE__ */ o("div", { className: Pn.value, children: p(e) })
      ]
    }
  );
}
function yf(e, t, n) {
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
  formatValue: u = (h) => String(Math.round(h * 100) / 100),
  ariaLabel: p = "Gauge",
  className: b
}) {
  const h = n - t || 1, g = r === "vertical", _ = s ?? (g ? 220 : 280), { count: v = 5, showLabels: m = !0 } = a, f = c ?? "var(--dx-primary-color)", y = "var(--dx-border-color)", N = 8, x = (I) => {
    const M = (Math.max(t, Math.min(n, I)) - t) / h;
    return g ? _ - N - M * (_ - N * 2) : N + M * (_ - N * 2);
  }, C = () => v <= 0 ? null : yf(t, n, v).map((I, A) => {
    const M = x(I);
    return /* @__PURE__ */ D("g", { children: [
      g ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: M,
          x2: 0,
          y2: M,
          stroke: y,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: M,
          y1: -6,
          x2: M,
          y2: 0,
          stroke: y,
          strokeWidth: 1.5
        }
      ),
      m && (g ? /* @__PURE__ */ o("text", { x: -10, y: M + 4, textAnchor: "end", className: Pn.tick, children: I }) : /* @__PURE__ */ o("text", { x: M, y: -10, textAnchor: "middle", className: Pn.tick, children: I }))
    ] }, A);
  }), $ = () => i.map((I, A) => {
    const M = x(I.from), k = x(I.to), w = Math.min(M, k), E = Math.abs(k - M);
    return g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: w,
        width: l,
        height: E,
        fill: I.color,
        opacity: 0.35
      },
      A
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: w,
        y: -l / 2,
        width: E,
        height: l,
        fill: I.color,
        opacity: 0.35
      },
      A
    );
  }), S = x(e), T = /* @__PURE__ */ D("g", { children: [
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
        stroke: y,
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
        stroke: y,
        strokeWidth: 2
      }
    ),
    g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: S,
        width: l,
        height: _ - N - S,
        rx: l / 2,
        fill: f
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: Math.max(0, S - N),
        height: l,
        rx: l / 2,
        fill: f
      }
    ),
    g ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${S} L ${-l / 2 - 2} ${S - 5} L ${-l / 2 - 2} ${S + 5} Z`,
        fill: f
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${S} ${-l / 2 - 10} L ${S - 5} ${-l / 2 - 2} L ${S + 5} ${-l / 2 - 2} Z`,
        fill: f
      }
    ),
    C()
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": p,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, b].filter(Boolean).join(" "),
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
const bf = "_chat_1apnf_3", xf = "_messages_1apnf_9", vf = "_message_1apnf_9", wf = "_user_1apnf_29", kf = "_assistant_1apnf_35", Nf = "_system_1apnf_40", $f = "_typing_1apnf_46", Sf = "_inputRow_1apnf_51", pr = {
  chat: bf,
  messages: xf,
  message: vf,
  user: wf,
  assistant: kf,
  system: Nf,
  typing: $f,
  inputRow: Sf
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
  const [p, b] = W(""), h = l || d, g = p.trim().length > 0 && !h, _ = (m) => {
    m.preventDefault();
    const f = p.trim();
    !f || h || (b(""), t?.(f));
  }, v = /* @__PURE__ */ D("form", { className: pr.inputRow, onSubmit: (m) => {
    _(m);
  }, children: [
    /* @__PURE__ */ o(
      ls,
      {
        value: p,
        placeholder: n,
        "aria-label": a,
        disabled: h,
        onChange: (m) => b(m.target.value)
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
            (m, f) => c ? /* @__PURE__ */ o("div", { children: c(m, f) }, f) : /* @__PURE__ */ o(
              "div",
              {
                className: [pr.message, pr[m.role]].filter(Boolean).join(" "),
                children: m.content
              },
              f
            )
          ),
          l && /* @__PURE__ */ o("div", { className: pr.typing, children: "…" })
        ] }),
        s ? s(v) : v
      ]
    }
  );
}
const Of = "_wrapper_1ulz6_1", Ef = "_input_1ulz6_8", Tf = "_invalid_1ulz6_38", Cf = "_toggle_1ulz6_45", Mf = "_xs_1ulz6_80", Af = "_sm_1ulz6_86", Df = "_md_1ulz6_92", If = "_lg_1ulz6_98", zf = "_xl_1ulz6_104", Ir = {
  wrapper: Of,
  input: Ef,
  invalid: Tf,
  toggle: Cf,
  xs: Mf,
  sm: Af,
  md: Df,
  lg: If,
  xl: zf
}, Lf = at(
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
            onClick: () => u((p) => !p),
            children: /* @__PURE__ */ o(Te, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Pf = "_login_30qie_3", Rf = "_title_30qie_9", jf = "_remember_30qie_14", Bf = "_link_30qie_21", zr = {
  login: Pf,
  title: Rf,
  remember: jf,
  link: Bf
}, is = "dx-login-username";
function Ff(e) {
  const t = e === void 0 ? is : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Hf(e, t) {
  const n = e === void 0 ? is : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function Uf(e) {
  const t = e === void 0 ? is : e;
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
  passwordLabel: p = "Password",
  submitText: b = "Sign in",
  storageKey: h,
  className: g
}) {
  const [_, v] = W(() => Ff(h) ?? ""), [m, f] = W(""), [y, N] = W(!1), [x, C] = W(!1), [$, S] = W({}), T = l || x, I = e != null && n == null, A = async (M) => {
    I || M.preventDefault();
    const k = {};
    if (_.trim() || (k.username = "Username is required."), m || (k.password = "Password is required."), S(k), !(k.username || k.password || !n)) {
      C(!0);
      try {
        await n({
          username: _.trim(),
          password: m,
          rememberMe: y
        }), y ? Hf(h, _.trim()) : Uf(h);
      } finally {
        C(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [zr.login, g].filter(Boolean).join(" "),
      action: I ? e : void 0,
      method: I ? t : void 0,
      noValidate: !0,
      onSubmit: (M) => {
        A(M);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: zr.title, children: d }),
        /* @__PURE__ */ o(ir, { label: u, required: !0, error: $.username, children: ({ inputId: M }) => /* @__PURE__ */ o(
          ls,
          {
            id: M,
            value: _,
            autoComplete: "username",
            disabled: T,
            "aria-invalid": $.username ? !0 : void 0,
            onChange: (k) => {
              v(k.target.value), S((w) => ({ ...w, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ir, { label: p, required: !0, error: $.password, children: ({ inputId: M }) => /* @__PURE__ */ o(
          Lf,
          {
            id: M,
            value: m,
            autoComplete: "current-password",
            disabled: T,
            "aria-invalid": $.password ? !0 : void 0,
            onChange: (k) => {
              f(k.target.value), S((w) => ({ ...w, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ D("label", { className: zr.remember, children: [
          /* @__PURE__ */ o(
            su,
            {
              checked: y,
              disabled: T,
              onChange: (M) => N(M.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(cn, { type: "submit", loading: T, disabled: T, children: b }),
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
function Ls(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Wf(e) {
  if (Array.isArray(e)) return e;
}
function qf(e, t) {
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
function Kf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gf(e, t) {
  return Wf(e) || qf(e, t) || Vf(e, t) || Kf();
}
function Vf(e, t) {
  if (e) {
    if (typeof e == "string") return Ls(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ls(e, t) : void 0;
  }
}
const Ia = Object.entries, Ps = Object.setPrototypeOf, Yf = Object.isFrozen, Xf = Object.getPrototypeOf, Zf = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Et = Object.seal, vr = Object.create, za = typeof Reflect < "u" && Reflect, Ko = za.apply, Go = za.construct;
St || (St = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
Ko || (Ko = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return t.apply(n, a);
});
Go || (Go = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
  return new t(...r);
});
const lr = Nt(Array.prototype.forEach), Jf = Nt(Array.prototype.lastIndexOf), Rs = Nt(Array.prototype.pop), Lr = Nt(Array.prototype.push), Qf = Nt(Array.prototype.splice), Nr = Array.isArray, Kr = Nt(String.prototype.toLowerCase), zo = Nt(String.prototype.toString), js = Nt(String.prototype.match), Pr = Nt(String.prototype.replace), Bs = Nt(String.prototype.indexOf), ep = Nt(String.prototype.trim), tp = Nt(Number.prototype.toString), np = Nt(Boolean.prototype.toString), Fs = typeof BigInt > "u" ? null : Nt(BigInt.prototype.toString), Hs = typeof Symbol > "u" ? null : Nt(Symbol.prototype.toString), Yt = Nt(Object.prototype.hasOwnProperty), Rr = Nt(Object.prototype.toString), Rt = Nt(RegExp.prototype.test), qn = rp(TypeError);
function Nt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return Ko(e, t, r);
  };
}
function rp(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Go(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kr;
  if (Ps && Ps(e, null), !Nr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const i = n(a);
      i !== a && (Yf(t) || (t[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function op(e) {
  for (let t = 0; t < e.length; t++) Yt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = vr(null);
  for (const r of Ia(e)) {
    var n = Gf(r, 2);
    const a = n[0], i = n[1];
    Yt(e, a) && (Nr(i) ? t[a] = op(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = sn(i) : t[a] = i);
  }
  return t;
}
function sp(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return tp(e);
    case "boolean":
      return np(e);
    case "bigint":
      return Fs ? Fs(e) : "0";
    case "symbol":
      return Hs ? Hs(e) : "Symbol()";
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
    const r = Zf(e, t);
    if (r) {
      if (r.get) return Nt(r.get);
      if (typeof r.value == "function") return Nt(r.value);
    }
    e = Xf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function ap(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Us = St([
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
]), Lo = St([
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
]), Po = St([
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
]), lp = St([
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
]), Ro = St([
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
]), ip = St([
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
]), Ws = St(["#text"]), qs = St([
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
]), jo = St([
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
]), Ks = St([
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
]), cp = Et(/{{[\w\W]*|^[\w\W]*}}/g), dp = Et(/<%[\w\W]*|^[\w\W]*%>/g), up = Et(/\${[\w\W]*/g), fp = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), pp = Et(/^aria-[\-\w]+$/), Gs = Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), _p = Et(/^(?:\w+script|data):/i), hp = Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), mp = Et(/^html$/i), gp = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Vs = Et(/<[/\w!]/g), Ys = Et(/<[/\w]/g), yp = Et(/<\/no(script|embed|frames)/i), bp = Et(/\/>/i), nn = {
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
}, La = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], xp = St(Ke({}, La)), vp = (function() {
  const e = {};
  return lr(La, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), wp = function() {
  return typeof window > "u" ? null : window;
}, kp = function(t, n) {
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
}, Xs = function() {
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
}, Bo = function(t, n, r) {
  const a = Yt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? sn(a) : r();
};
function Pa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wp();
  const t = (de) => Pa(de);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, p = s.prototype, b = hn(p, "cloneNode"), h = hn(p, "remove"), g = hn(p, "removeAttributeNode"), _ = hn(p, "nextSibling"), v = hn(p, "childNodes"), m = hn(p, "parentNode"), f = hn(p, "shadowRoot"), y = hn(p, "attributes"), N = c && c.prototype ? hn(c.prototype, "nodeType") : null, x = c && c.prototype ? hn(c.prototype, "nodeName") : null, C = c && c.prototype ? hn(c.prototype, "ownerDocument") : null, $ = function(O) {
    return N ? N(O) : O.nodeType;
  }, S = function(O) {
    return x ? x(O) : O.nodeName;
  };
  if (typeof i == "function") {
    const de = n.createElement("template");
    de.content && de.content.ownerDocument && (n = de.content.ownerDocument);
  }
  let T, I = "", A, M = !1, k = 0;
  const w = function() {
    if (k > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, E = function(O) {
    w(), k++;
    try {
      return T.createHTML(O);
    } finally {
      k--;
    }
  }, L = function(O) {
    w(), k++;
    try {
      return T.createScriptURL(O);
    } finally {
      k--;
    }
  }, z = function() {
    return M || (A = kp(u, a), M = !0), A;
  }, P = n, j = P.implementation, q = P.createNodeIterator, ae = P.createDocumentFragment, ie = P.getElementsByTagName, re = r.importNode;
  let V = Xs();
  t.isSupported = typeof Ia == "function" && typeof m == "function" && j && j.createHTMLDocument !== void 0;
  const Ee = cp, Q = dp, J = up, X = fp, ge = pp, te = _p, ye = hp, K = gp;
  let $e = Gs, oe = null;
  const De = Ke({}, [
    ...Us,
    ...Lo,
    ...Po,
    ...Ro,
    ...Ws
  ]);
  let me = null;
  const qe = Ke({}, [
    ...qs,
    ...jo,
    ...Ks,
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
  let gt = !0, ee = !0, Ce = !1, lt = !0, ze = !1, st = !0, Xe = !1, Tt = !1, yt = null, it = null, ft = !1, Ve = !1, Ct = !1, se = !1, Le = !0, wt = !1;
  const Mt = "user-content-";
  let bt = !0, R = !1, Y = {}, he = null;
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
  ], zo), _e = St([
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
    (!O || typeof O != "object") && (O = {}), O = sn(O), Fe = dt.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? xt : O.PARSER_MEDIA_TYPE, je = Fe === "application/xhtml+xml" ? zo : Kr, oe = Kn(O, "ALLOWED_TAGS", De, { transform: je }), me = Kn(O, "ALLOWED_ATTR", qe, { transform: je }), Z = Kn(O, "ALLOWED_NAMESPACES", ce, { transform: zo }), pe = Kn(O, "ADD_URI_SAFE_ATTR", Re, {
      transform: je,
      base: Re
    }), fe = Kn(O, "ADD_DATA_URI_TAGS", F, {
      transform: je,
      base: F
    }), he = Kn(O, "FORBID_CONTENTS", we, { transform: je }), Ge = Kn(O, "FORBID_TAGS", sn({}), { transform: je }), Qe = Kn(O, "FORBID_ATTR", sn({}), { transform: je }), Y = Yt(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? sn(O.USE_PROFILES) : O.USE_PROFILES : !1, gt = O.ALLOW_ARIA_ATTR !== !1, ee = O.ALLOW_DATA_ATTR !== !1, Ce = O.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = O.SAFE_FOR_TEMPLATES || !1, st = O.SAFE_FOR_XML !== !1, Xe = O.WHOLE_DOCUMENT || !1, Ve = O.RETURN_DOM || !1, Ct = O.RETURN_DOM_FRAGMENT || !1, se = O.RETURN_TRUSTED_TYPE || !1, ft = O.FORCE_BODY || !1, Le = O.SANITIZE_DOM !== !1, wt = O.SANITIZE_NAMED_PROPS || !1, bt = O.KEEP_CONTENT !== !1, R = O.IN_PLACE || !1, $e = ap(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : Gs, mn = typeof O.NAMESPACE == "string" ? O.NAMESPACE : et, ke = Bo(O, "MATHML_TEXT_INTEGRATION_POINTS", () => Ke({}, _e)), Ae = Bo(O, "HTML_INTEGRATION_POINTS", () => Ke({}, ve));
    const B = Bo(O, "CUSTOM_ELEMENT_HANDLING", () => vr(null));
    if (Je = vr(null), Yt(B, "tagNameCheck") && Jt(B.tagNameCheck) && (Je.tagNameCheck = B.tagNameCheck), Yt(B, "attributeNameCheck") && Jt(B.attributeNameCheck) && (Je.attributeNameCheck = B.attributeNameCheck), Yt(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (Je.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), Et(Je), ze && (ee = !1), Ct && (Ve = !0), Y && (oe = Ke({}, Ws), me = vr(null), Y.html === !0 && (Ke(oe, Us), Ke(me, qs)), Y.svg === !0 && (Ke(oe, Lo), Ke(me, jo), Ke(me, so)), Y.svgFilters === !0 && (Ke(oe, Po), Ke(me, jo), Ke(me, so)), Y.mathMl === !0 && (Ke(oe, Ro), Ke(me, Ks), Ke(me, so))), He.tagCheck = null, He.attributeCheck = null, Yt(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? He.tagCheck = O.ADD_TAGS : Nr(O.ADD_TAGS) && (oe === De && (oe = sn(oe)), Ke(oe, O.ADD_TAGS, je))), Yt(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? He.attributeCheck = O.ADD_ATTR : Nr(O.ADD_ATTR) && (me === qe && (me = sn(me)), Ke(me, O.ADD_ATTR, je))), Yt(O, "ADD_FORBID_CONTENTS") && Nr(O.ADD_FORBID_CONTENTS) && (he === we && (he = sn(he)), Ke(he, O.ADD_FORBID_CONTENTS, je)), bt && (oe["#text"] = !0), Xe && Ke(oe, [
      "html",
      "head",
      "body"
    ]), oe.table && (Ke(oe, ["tbody"]), delete Ge.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const ne = T;
      T = O.TRUSTED_TYPES_POLICY;
      try {
        I = E("");
      } catch (ue) {
        throw T = ne, ue;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (T = void 0, I = "") : (T === void 0 && (T = z()), T && typeof I == "string" && (I = E("")));
    St && St(O), tt = O;
  }, dn = Ke({}, [
    ...Lo,
    ...Po,
    ...lp
  ]), Zn = Ke({}, [...Ro, ...ip]), Jn = function(O, B, ne) {
    return B.namespaceURI === et ? O === "svg" : B.namespaceURI === Ie ? O === "svg" && (ne === "annotation-xml" || ke[ne]) : !!dn[O];
  }, Fn = function(O, B, ne) {
    return B.namespaceURI === et ? O === "math" : B.namespaceURI === It ? O === "math" && Ae[ne] : !!Zn[O];
  }, Oo = function(O, B, ne) {
    return B.namespaceURI === It && !Ae[ne] || B.namespaceURI === Ie && !ke[ne] ? !1 : !Zn[O] && (Ye[O] || !dn[O]);
  }, Eo = function(O) {
    let B = m(O);
    (!B || !B.tagName) && (B = {
      namespaceURI: mn,
      tagName: "template"
    });
    const ne = Kr(O.tagName), ue = Kr(B.tagName);
    return Z[O.namespaceURI] ? O.namespaceURI === It ? Jn(ne, B, ue) : O.namespaceURI === Ie ? Fn(ne, B, ue) : O.namespaceURI === et ? Oo(ne, B, ue) : !!(Fe === "application/xhtml+xml" && Z[O.namespaceURI]) : !1;
  }, gn = function(O) {
    Lr(t.removed, { element: O });
    try {
      m(O).removeChild(O);
    } catch {
      if (h(O), !m(O)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(O, B, ne) {
    try {
      g(O, B);
    } catch {
      try {
        O.removeAttribute(ne);
      } catch {
      }
    }
  }, yn = function(O) {
    U(O);
    const B = v(O);
    if (B) {
      const ue = [];
      lr(B, (Me) => {
        Lr(ue, Me);
      }), lr(ue, (Me) => {
        try {
          h(Me);
        } catch {
        }
      });
    }
    const ne = y(O);
    if (ne) for (let ue = ne.length - 1; ue >= 0; --ue) {
      const Me = ne[ue], Be = Me && Me.name;
      typeof Be == "string" && Jr(O, Me, Be);
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
      ne ? g(B, ne) : B.removeAttribute(O);
    } catch {
      try {
        B.removeAttribute(O);
      } catch {
      }
    }
    if (O === "is")
      if (Ve || Ct) try {
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
        const ue = B[ne], Me = ue && ue.name;
        typeof Me != "string" || me[je(Me)] || Jr(O, ue, Me);
      }
  }, U = function(O) {
    const B = [O];
    for (; B.length > 0; ) {
      const ne = B.pop();
      $(ne) === nn.element && Sr(ne);
      const ue = v(ne);
      if (ue) for (let Me = ue.length - 1; Me >= 0; --Me) B.push(ue[Me]);
    }
  }, G = function(O, B) {
    return st ? O === "patchsrc" ? !0 : O === "for" && B !== "label" && B !== "output" : !1;
  }, be = function(O) {
    if (!st) return;
    const B = [O];
    for (; B.length > 0; ) {
      const ne = B.pop(), ue = $(ne);
      if (ue === nn.processingInstruction || ue === nn.comment && Rt(Ys, ne.data)) {
        try {
          h(ne);
        } catch {
        }
        continue;
      }
      if (ue === nn.element) {
        const Be = ne, Ue = je(S(ne));
        try {
          Be.hasAttribute && Be.hasAttribute("patchsrc") && Be.removeAttribute("patchsrc"), Be.hasAttribute && Be.hasAttribute("for") && G("for", Ue) && Be.removeAttribute("for");
        } catch {
        }
      }
      const Me = v(ne);
      if (Me) for (let Be = Me.length - 1; Be >= 0; --Be) B.push(Me[Be]);
    }
  }, xe = function(O) {
    let B = null, ne = null;
    if (ft) O = "<remove></remove>" + O;
    else {
      const Be = js(O, /^[\r\n\t ]+/);
      ne = Be && Be[0];
    }
    Fe === "application/xhtml+xml" && mn === et && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const ue = T ? E(O) : O;
    if (mn === et) try {
      B = new d().parseFromString(ue, Fe);
    } catch {
    }
    if (!B || !B.documentElement) {
      B = j.createDocument(mn, "template", null);
      try {
        B.documentElement.innerHTML = Nn ? I : ue;
      } catch {
      }
    }
    const Me = B.body || B.documentElement;
    return O && ne && Me.insertBefore(n.createTextNode(ne), Me.childNodes[0] || null), mn === et ? ie.call(B, Xe ? "html" : "body")[0] : Xe ? B.documentElement : Me;
  }, nt = function(O) {
    const B = C ? C(O) : O.ownerDocument;
    return q.call(B || O, O, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, zt = function(O) {
    return O = Pr(O, Ee, " "), O = Pr(O, Q, " "), O = Pr(O, J, " "), O;
  }, $t = function(O) {
    var B;
    O.normalize();
    const ne = C ? C(O) : O.ownerDocument, ue = q.call(ne || O, O, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Me = ue.nextNode();
    for (; Me; )
      Me.data = zt(Me.data), Me = ue.nextNode();
    const Be = (B = O.querySelectorAll) === null || B === void 0 ? void 0 : B.call(O, "template");
    Be && lr(Be, (Ue) => {
      Dt(Ue.content) && $t(Ue.content);
    });
  }, bn = function(O) {
    const B = x ? x(O) : null;
    return typeof B != "string" || je(B) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || O.attributes !== y(O) || typeof O.removeAttribute != "function" || typeof O.removeAttributeNode != "function" || typeof O.getAttributeNode != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || O.nodeType !== N(O) || O.childNodes !== v(O);
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
  const To = function(O, B) {
    return !!(st && O.hasChildNodes() && !kt(O.firstElementChild) && Rt(Vs, O.textContent) && Rt(Vs, O.innerHTML) || st && O.namespaceURI === et && xp[B] && (kt(O.firstElementChild) || typeof O.textContent == "string" && Rt(vp[B], O.textContent)) || O.nodeType === nn.processingInstruction || st && O.nodeType === nn.comment && Rt(Ys, O.data));
  }, Qr = function(O, B) {
    if (O instanceof RegExp) return Rt(O, B);
    if (O instanceof Function) {
      for (var ne = arguments.length, ue = new Array(ne > 2 ? ne - 2 : 0), Me = 2; Me < ne; Me++) ue[Me - 2] = arguments[Me];
      return !!O(B, ...ue);
    }
    return !1;
  }, el = function(O, B, ne) {
    if (!Ge[B] && ms(B) && Qr(Je.tagNameCheck, B)) return !1;
    if (bt && !he[B]) {
      const ue = m(O), Me = v(O);
      if (Me && ue) {
        const Be = Me.length;
        for (let Ue = Be - 1; Ue >= 0; --Ue) {
          const pt = O === ne ? b(Me[Ue], !0) : Me[Ue];
          ue.insertBefore(pt, _(O));
        }
      }
    }
    return gn(O), !0;
  }, ps = function(O, B, ne, ue) {
    return O.length === 0 ? B : B === ne || B === ue ? sn(B) : B;
  }, ur = function(O, B) {
    return O === B || m(O) !== null ? !1 : (R && U(O), !0);
  }, _s = function(O, B) {
    if (Qt(V.beforeSanitizeElements, O, null), ur(O, B)) return !0;
    if (bn(O))
      return gn(O), !0;
    const ne = je(S(O));
    if (oe = ps(V.uponSanitizeElement, oe, De, yt), Qt(V.uponSanitizeElement, O, {
      tagName: ne,
      allowedTags: oe
    }), ur(O, B)) return !0;
    if (To(O, ne))
      return gn(O), !0;
    if (Ge[ne] || !(He.tagCheck instanceof Function && He.tagCheck(ne)) && !oe[ne]) {
      const ue = el(O, ne, B);
      return ue === !1 && (Qt(V.afterSanitizeElements, O, null), ur(O, B)) ? !0 : ue;
    }
    if ($(O) === nn.element && !Eo(O) || (ne === "noscript" || ne === "noembed" || ne === "noframes") && Rt(yp, O.innerHTML))
      return gn(O), !0;
    if (ze && O.nodeType === nn.text) {
      const ue = zt(O.textContent);
      O.textContent !== ue && (Lr(t.removed, { element: O.cloneNode() }), O.textContent = ue);
    }
    return Qt(V.afterSanitizeElements, O, null), ur(O, B);
  }, hs = function(O, B, ne) {
    if (Qe[B] || G(B, O) || Le && (B === "id" || B === "name") && (ne in n || ne in ut)) return !1;
    const ue = me[B] || He.attributeCheck instanceof Function && He.attributeCheck(B, O);
    return ee && Rt(X, B) || gt && Rt(ge, B) ? !0 : ue ? pe[B] || Rt($e, Pr(ne, ye, "")) || (B === "src" || B === "xlink:href" || B === "href") && O !== "script" && Bs(ne, "data:") === 0 && fe[O] || Ce && !Rt(te, Pr(ne, ye, "")) ? !0 : !ne : ms(O) && Qr(Je.tagNameCheck, O) && Qr(Je.attributeNameCheck, B, O) || B === "is" && Je.allowCustomizedBuiltInElements && Qr(Je.tagNameCheck, ne);
  }, tl = Ke({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ms = function(O) {
    return !tl[Kr(O)] && Rt(K, O);
  }, nl = function(O, B, ne, ue) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !ne) switch (u.getAttributeType(O, B)) {
      case "TrustedHTML":
        return E(ue);
      case "TrustedScriptURL":
        return L(ue);
    }
    return ue;
  }, rl = function(O, B, ne, ue) {
    try {
      return ne ? O.setAttributeNS(ne, B, ue) : O.setAttribute(B, ue), bn(O) ? (gn(O), !1) : !0;
    } catch {
      return Bt(B, O), !1;
    }
  }, gs = function(O, B) {
    if (Qt(V.beforeSanitizeAttributes, O, null), ur(O, B)) return;
    const ne = O.attributes;
    if (!ne || bn(O)) return;
    me = ps(V.uponSanitizeAttribute, me, qe, it);
    const ue = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let Me = ne.length;
    const Be = je(O.nodeName);
    for (; Me--; ) {
      const Ue = ne[Me], pt = Ue.name, un = Ue.namespaceURI, en = Ue.value, fr = je(pt), Mo = en;
      let Ft = pt === "value" ? Mo : ep(Mo), ys = !1;
      if (ue.attrName = fr, ue.attrValue = Ft, ue.keepAttr = !0, ue.forceKeepAttr = void 0, Qt(V.uponSanitizeAttribute, O, ue), Ft = ue.attrValue, wt && (fr === "id" || fr === "name") && Bs(Ft, Mt) !== 0 && (Bt(pt, O, Ue), Ft = Mt + Ft, ys = !0), st && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ft)) {
        Bt(pt, O, Ue);
        continue;
      }
      if (fr === "attributename" && js(Ft, "href")) {
        Bt(pt, O, Ue);
        continue;
      }
      if (!ue.forceKeepAttr) {
        if (!ue.keepAttr) {
          Bt(pt, O, Ue);
          continue;
        }
        if (!lt && Rt(bp, Ft)) {
          Bt(pt, O, Ue);
          continue;
        }
        if (ze && (Ft = zt(Ft)), !hs(Be, fr, Ft)) {
          Bt(pt, O, Ue);
          continue;
        }
        Ft = nl(Be, fr, un, Ft), Ft !== Mo && rl(O, pt, un, Ft) && ys && Rs(t.removed);
      }
    }
    Qt(V.afterSanitizeAttributes, O, null), ur(O, B);
  }, eo = function(O) {
    let B = null;
    const ne = nt(O);
    for (Qt(V.beforeSanitizeShadowDOM, O, null); B = ne.nextNode(); )
      if (Qt(V.uponSanitizeShadowNode, B, null), _s(B, O), gs(B, O), Dt(B.content) && eo(B.content), $(B) === nn.element) {
        const ue = f(B);
        Dt(ue) && (Co(ue), eo(ue));
      }
    Qt(V.afterSanitizeShadowDOM, O, null);
  }, Co = function(O) {
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
      const ue = ne.node, Me = $(ue) === nn.element, Be = v(ue);
      if (Be) for (let Ue = Be.length - 1; Ue >= 0; --Ue) B.push({
        node: Be[Ue],
        shadow: null
      });
      if (Me) {
        const Ue = x ? x(ue) : null;
        if (typeof Ue == "string" && je(Ue) === "template") {
          const pt = ue.content;
          Dt(pt) && B.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Me) {
        const Ue = f(ue);
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
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, ne = null, ue = null, Me = null;
    if (Nn = !de, Nn && (de = "<!-->"), typeof de != "string" && !kt(de) && (de = sp(de), typeof de != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return de;
    Tt ? (oe = yt, me = it) : At(O), (V.uponSanitizeElement.length > 0 || V.uponSanitizeAttribute.length > 0) && (oe = sn(oe)), V.uponSanitizeAttribute.length > 0 && (me = sn(me)), t.removed = [];
    const Be = R && typeof de != "string" && kt(de);
    if (Be) {
      be(de);
      const un = S(de);
      if (typeof un == "string") {
        const en = je(un);
        if (!oe[en] || Ge[en])
          throw yn(de), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (bn(de))
        throw yn(de), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        Co(de);
      } catch (en) {
        throw yn(de), en;
      }
    } else if (kt(de))
      B = xe("<!---->"), ne = B.ownerDocument.importNode(de, !0), ne.nodeType === nn.element && ne.nodeName === "BODY" || ne.nodeName === "HTML" ? B = ne : B.appendChild(ne), Co(B);
    else {
      if (!Ve && !ze && !Xe && de.indexOf("<") === -1) return T && se ? E(de) : de;
      if (B = xe(de), !B) return Ve ? null : se ? I : "";
    }
    B && ft && gn(B.firstChild);
    const Ue = Be ? de : B;
    try {
      const un = nt(Ue);
      for (; ue = un.nextNode(); )
        _s(ue, Ue), gs(ue, Ue), Dt(ue.content) && eo(ue.content);
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
      if (ze && $t(B), Ct)
        for (Me = ae.call(B.ownerDocument); B.firstChild; ) Me.appendChild(B.firstChild);
      else Me = B;
      return (me.shadowroot || me.shadowrootmode) && (Me = re.call(r, Me, !0)), Me;
    }
    let pt = Xe ? B.outerHTML : B.innerHTML;
    return Xe && oe["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Rt(mp, B.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + pt), ze && (pt = zt(pt)), T && se ? E(pt) : pt;
  }, t.setConfig = function() {
    let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(de), Tt = !0, yt = oe, it = me;
  }, t.clearConfig = function() {
    tt = null, Tt = !1, yt = null, it = null, T = A, I = "";
  }, t.isValidAttribute = function(de, O, B) {
    tt || At({});
    const ne = je(de), ue = je(O);
    return hs(ne, ue, B);
  }, t.addHook = function(de, O) {
    typeof O == "function" && Yt(V, de) && Lr(V[de], O);
  }, t.removeHook = function(de, O) {
    if (Yt(V, de)) {
      if (O !== void 0) {
        const B = Jf(V[de], O);
        return B === -1 ? void 0 : Qf(V[de], B, 1)[0];
      }
      return Rs(V[de]);
    }
  }, t.removeHooks = function(de) {
    Yt(V, de) && (V[de] = []);
  }, t.removeAllHooks = function() {
    V = Xs();
  }, t;
}
var Ra = Pa();
function Vr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Np(e) {
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
      const s = Np(c);
      return s == null ? i : `<a href="${Vr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ao}(\\d+)${ao}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function $p(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), a = (l) => r[l] ?? "", i = [];
  let c = 0;
  const s = (l, d) => {
    const u = d ? "ol" : "ul";
    i.push(
      `<${u}>${l.map((p) => `<li>${lo(p, n)}</li>`).join("")}</${u}>`
    );
  };
  for (; c < r.length; ) {
    const l = a(c) ?? "";
    if (/^\s*$/.test(l)) {
      c += 1;
      continue;
    }
    const d = /^(#{1,6})\s+(.*)$/.exec(l), u = d?.[1], p = d?.[2];
    if (u !== void 0 && p !== void 0) {
      i.push(
        `<h${u.length}>${lo(p.trim(), n)}</h${u.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const _ = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", v = [];
      for (c += 1; c < r.length; ) {
        const f = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(f)) break;
        v.push(f), c += 1;
      }
      c += 1;
      const m = _ ? ` class="language-${Vr(_)}"` : "";
      i.push(
        `<pre><code${m}>${Vr(v.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const _ = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        _.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${_.map((v) => `<p>${lo(v, n)}</p>`).join("")}</blockquote>`
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
    const g = [];
    for (; c < r.length && !/^\s*$/.test(a(c)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(c)
    ); )
      g.push(a(c)), c += 1;
    i.push(`<p>${lo(g.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const Sp = "_markdown_oj741_3", Op = "_resize_oj741_61", Zs = {
  markdown: Sp,
  resize: Op
};
function lS({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Ne(
    () => Ra.sanitize($p(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Zs.markdown, n ? Zs.resize : "", a].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const Ep = "_editor_2a7al_3", Tp = "_toolbar_2a7al_13", Cp = "_tool_2a7al_13", Mp = "_separator_2a7al_56", Ap = "_area_2a7al_63", Dp = "_source_2a7al_73", Ip = "_alignGlyph_2a7al_84", zp = "_colorInput_2a7al_89", Lp = "_select_2a7al_98", Ot = {
  editor: Ep,
  toolbar: Tp,
  tool: Cp,
  separator: Mp,
  area: Ap,
  source: Dp,
  alignGlyph: Ip,
  colorInput: zp,
  select: Lp
}, Pp = [
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
], Js = {
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
}, Rp = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], jp = ["1", "2", "3", "4", "5", "6", "7"], Bp = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Vo(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function Fp(e) {
  return Vo("formatBlock", `<${e}>`) || Vo("formatBlock", e);
}
function Hp(e) {
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
    toolbar: i = Pp,
    imageUpload: c,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: u,
    sanitize: p = !0
  }, b) {
    const [h, g] = W(!1), [_, v] = W(n), [m, f] = W(
      null
    ), [y, N] = W(""), [x, C] = W(""), [$, S] = W(2), [T, I] = W(2), [A, M] = W(!1), k = le(null), w = le(null), E = le(n), L = H(
      (K) => p ? Ra.sanitize(K) : K,
      [p]
    );
    Oe(() => {
      const K = k.current;
      t !== void 0 && K && K.innerHTML !== t && (K.innerHTML = t), t !== void 0 && (E.current = t);
    }, [t]);
    const z = H(
      (K) => {
        E.current = L(K), r?.(E.current);
      },
      [L, r]
    ), P = H(
      (K, $e) => {
        if (s || l) return !1;
        k.current?.focus();
        const oe = Vo(K, $e);
        if (oe) {
          const De = k.current;
          De && z(De.innerHTML);
        }
        return oe;
      },
      [z, s, l]
    ), j = H(
      () => k.current?.innerHTML ?? E.current,
      []
    ), q = H(
      (K) => {
        P("insertHTML", K);
      },
      [P]
    ), ae = H(() => {
      k.current?.focus();
    }, []), ie = Ne(
      () => ({
        execCommand: P,
        getHtml: j,
        insertHtml: q,
        focus: ae
      }),
      [P, j, q, ae]
    );
    ko(b, () => ({ execCommand: P, getHtml: j }), [
      P,
      j
    ]);
    const re = H(
      (K) => {
        const $e = Js[K];
        !$e || s || l || P($e.command);
      },
      [P, s, l]
    ), V = H(() => {
      s || l || (h ? (g(!1), z(_)) : (v(k.current?.innerHTML ?? ""), g(!0)));
    }, [h, _, z, s, l]), Ee = H(
      (K) => {
        if (!(K.ctrlKey || K.metaKey) || s || l) return;
        const $e = K.key.toLowerCase(), oe = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        oe && (K.preventDefault(), re(oe));
      },
      [re, s, l]
    ), Q = H(() => {
      const K = k.current;
      K && z(K.innerHTML);
    }, [z]), J = H(() => {
      y.trim() && (P("createLink", y.trim()), N(""), f(null));
    }, [y, P]), X = H(() => {
      x.trim() && (P("insertImage", x.trim()), C(""), f(null));
    }, [x, P]), ge = H(
      async (K) => {
        if (c) {
          M(!0);
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
            const me = (oe.headers.get("content-type") ?? "").includes("application/json") ? await oe.json() : await oe.text(), qe = (c.parseUrl ?? Hp)(me);
            P("insertImage", qe);
          } catch ($e) {
            a?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            M(!1), f(null);
          }
        }
      },
      [c, a, P]
    ), te = H(() => {
      const K = Math.max(1, Math.min(10, Math.floor($) || 1)), $e = Math.max(1, Math.min(10, Math.floor(T) || 1)), oe = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), De = Array.from({ length: K }, () => `<tr>${oe}</tr>`).join(
        ""
      );
      P("insertHTML", `<table><tbody>${De}</tbody></table>`), f(null);
    }, [$, T, P]), ye = (K, $e) => {
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
        return /* @__PURE__ */ D("label", { className: Ot.tool, title: De, children: [
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
        const De = K === "formatBlock" ? "Format block" : K === "fontName" ? "Font name" : "Font size", me = K === "formatBlock" ? Bp : K === "fontName" ? Rp : jp;
        return /* @__PURE__ */ D(
          "select",
          {
            "aria-label": De,
            title: De,
            disabled: l,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (qe) => qe.preventDefault(),
            onChange: (qe) => {
              !qe.target.value || s || l || (K === "formatBlock" ? Fp(qe.target.value) : P(K === "fontName" ? "fontName" : "fontSize", qe.target.value), qe.target.value = "");
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
              !s && !l && (N(""), f("link"));
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
              !s && !l && (C(""), f("image"));
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
              !s && !l && (S(2), I(2), f("table"));
            },
            children: "▦"
          },
          "table"
        );
      const oe = Js[K];
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
    return /* @__PURE__ */ D("div", { className: [Ot.editor, u].filter(Boolean).join(" "), children: [
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
            v(K.target.value), z(K.target.value);
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
          dangerouslySetInnerHTML: { __html: E.current },
          onInput: Q,
          onKeyDown: Ee
        }
      ),
      /* @__PURE__ */ D(
        Ca,
        {
          open: m !== null,
          onClose: () => f(null),
          title: m === "link" ? "Insert link" : m === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(cn, { variant: "text", onClick: () => f(null), children: "Cancel" }),
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
            m === "image" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Image URL", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  value: x,
                  placeholder: "https://",
                  onChange: ($e) => C($e.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(ir, { label: "Or upload a file", children: ({ inputId: K }) => /* @__PURE__ */ o(
                "input",
                {
                  id: K,
                  ref: w,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const oe = $e.target.files?.[0];
                    oe && ge(oe), $e.target.value = "";
                  }
                }
              ) }),
              A && /* @__PURE__ */ o(Ma, { textStyle: "body2", children: "Uploading…" })
            ] }),
            m === "table" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Rows", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String($),
                  onChange: ($e) => S(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ir, { label: "Columns", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
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
), Up = "_popup_ve7kd_4", ja = {
  popup: Up
}, Ba = cr(null);
function cS() {
  const e = Bn(Ba);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Qs(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Wp({ state: e }) {
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
      className: [ja.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Qs(e.width),
        height: Qs(e.height)
      },
      children: e.content
    }
  );
}
function dS({ children: e }) {
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
      let p = !1;
      return () => {
        p || (p = !0, n((b) => b?.seq !== u ? b : (b.invoker && document.body.contains(b.invoker) && b.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  Oe(() => {
    if (!t) return;
    const d = (h) => {
      const g = document.querySelector(`.${ja.popup}`);
      g && !g.contains(h.target) && c();
    }, u = (h) => {
      h.key === "Escape" && (h.preventDefault(), c());
    }, p = () => c(), b = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", u, !0), window.addEventListener("resize", p), window.addEventListener("hashchange", b), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", u, !0), window.removeEventListener("resize", p), window.removeEventListener("hashchange", b);
    };
  }, [t, c]);
  const l = Ne(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ D(Ba.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(Wp, { state: t }, t.seq)
  ] });
}
const qp = "_alert_146r9_1", Kp = "_xs_146r9_28", Gp = "_sm_146r9_38", Vp = "_lg_146r9_48", Yp = "_xl_146r9_58", Xp = "_primary_146r9_69", Zp = "_secondary_146r9_74", Jp = "_light_146r9_79", Qp = "_base_146r9_84", e_ = "_dark_146r9_89", t_ = "_info_146r9_94", n_ = "_success_146r9_99", r_ = "_warning_146r9_104", o_ = "_danger_146r9_109", s_ = "_flat_146r9_116", a_ = "_outlined_146r9_123", l_ = "_filled_146r9_132", i_ = "_text_146r9_139", c_ = "_icon_146r9_181", d_ = "_content_146r9_192", u_ = "_title_146r9_197", f_ = "_body_146r9_203", p_ = "_dismiss_146r9_209", Sn = {
  alert: qp,
  xs: Kp,
  sm: Gp,
  lg: Vp,
  xl: Yp,
  primary: Xp,
  secondary: Zp,
  light: Jp,
  base: Qp,
  dark: e_,
  info: t_,
  success: n_,
  warning: r_,
  danger: o_,
  flat: s_,
  outlined: a_,
  filled: l_,
  text: i_,
  icon: c_,
  content: d_,
  title: u_,
  body: f_,
  dismiss: p_,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, __ = {
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
  onVisibleChange: p,
  className: b,
  ...h
}) {
  const [g, _] = W(!1);
  if (u === !1 || u === void 0 && g)
    return null;
  const v = () => {
    u === void 0 && _(!0), d?.(), p?.(!1);
  }, m = e, f = Na(t, "filled"), y = Yr(n), N = i ?? (c ? /* @__PURE__ */ o(Te, { icon: __[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        Sn.alert,
        Sn[m],
        Sn[f],
        y ? Sn[y] : null,
        Sn[r],
        b
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
            onClick: v,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const h_ = "_skeleton_1xyce_1", m_ = "_text_1xyce_35", g_ = "_circle_1xyce_40", y_ = "_rect_1xyce_44", ea = {
  skeleton: h_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: m_,
  circle: g_,
  rect: y_
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
      className: [ea.skeleton, ea[e], r].filter(Boolean).join(" "),
      style: a
    }
  );
}
function bo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const b_ = "_row_juebr_1", x_ = "_start_juebr_14", v_ = "_center_juebr_18", w_ = "_end_juebr_22", k_ = "_stretch_juebr_26", N_ = "_baseline_juebr_30", $_ = "_normal_juebr_34", S_ = "_noWrap_juebr_90", O_ = "_wrapReverse_juebr_94", io = {
  row: b_,
  start: x_,
  center: v_,
  end: w_,
  stretch: k_,
  baseline: N_,
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
  noWrap: S_,
  wrapReverse: O_
};
function ta(e) {
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
        ta(a) != null ? io[ta(a)] : null,
        i
      ].filter(Boolean).join(" "),
      style: u,
      ...s
    }
  );
}
const E_ = "_column_sh0ss_1", T_ = "_Size1_sh0ss_15", C_ = "_Size2_sh0ss_24", M_ = "_Size3_sh0ss_33", A_ = "_Size4_sh0ss_42", D_ = "_Size5_sh0ss_51", I_ = "_Size6_sh0ss_60", z_ = "_Size7_sh0ss_69", L_ = "_Size8_sh0ss_78", P_ = "_Size9_sh0ss_87", R_ = "_Size10_sh0ss_96", j_ = "_Size11_sh0ss_105", B_ = "_Size12_sh0ss_114", F_ = "_Offset0_sh0ss_119", H_ = "_Offset1_sh0ss_122", U_ = "_Offset2_sh0ss_127", W_ = "_Offset3_sh0ss_132", q_ = "_Offset4_sh0ss_137", K_ = "_Offset5_sh0ss_142", G_ = "_Offset6_sh0ss_147", V_ = "_Offset7_sh0ss_152", Y_ = "_Offset8_sh0ss_157", X_ = "_Offset9_sh0ss_162", Z_ = "_Offset10_sh0ss_167", J_ = "_Offset11_sh0ss_172", Q_ = "_Offset12_sh0ss_177", eh = "_OrderFirst_sh0ss_182", th = "_OrderLast_sh0ss_185", nh = "_Order0_sh0ss_188", rh = "_Order1_sh0ss_191", oh = "_Order2_sh0ss_194", sh = "_Order3_sh0ss_197", ah = "_Order4_sh0ss_200", lh = "_Order5_sh0ss_203", ih = "_Order6_sh0ss_206", ch = "_Order7_sh0ss_209", dh = "_Order8_sh0ss_212", uh = "_Order9_sh0ss_215", fh = "_Order10_sh0ss_218", ph = "_Order11_sh0ss_221", _h = "_Order12_sh0ss_224", hh = "_xsSize1_sh0ss_229", mh = "_xsSize2_sh0ss_238", gh = "_xsSize3_sh0ss_247", yh = "_xsSize4_sh0ss_256", bh = "_xsSize5_sh0ss_265", xh = "_xsSize6_sh0ss_274", vh = "_xsSize7_sh0ss_283", wh = "_xsSize8_sh0ss_292", kh = "_xsSize9_sh0ss_301", Nh = "_xsSize10_sh0ss_310", $h = "_xsSize11_sh0ss_321", Sh = "_xsSize12_sh0ss_332", Oh = "_xsOffset0_sh0ss_337", Eh = "_xsOffset1_sh0ss_340", Th = "_xsOffset2_sh0ss_345", Ch = "_xsOffset3_sh0ss_350", Mh = "_xsOffset4_sh0ss_355", Ah = "_xsOffset5_sh0ss_360", Dh = "_xsOffset6_sh0ss_365", Ih = "_xsOffset7_sh0ss_370", zh = "_xsOffset8_sh0ss_375", Lh = "_xsOffset9_sh0ss_380", Ph = "_xsOffset10_sh0ss_385", Rh = "_xsOffset11_sh0ss_391", jh = "_xsOffset12_sh0ss_397", Bh = "_xsOrderFirst_sh0ss_403", Fh = "_xsOrderLast_sh0ss_406", Hh = "_xsOrder0_sh0ss_409", Uh = "_xsOrder1_sh0ss_412", Wh = "_xsOrder2_sh0ss_415", qh = "_xsOrder3_sh0ss_418", Kh = "_xsOrder4_sh0ss_421", Gh = "_xsOrder5_sh0ss_424", Vh = "_xsOrder6_sh0ss_427", Yh = "_xsOrder7_sh0ss_430", Xh = "_xsOrder8_sh0ss_433", Zh = "_xsOrder9_sh0ss_436", Jh = "_xsOrder10_sh0ss_439", Qh = "_xsOrder11_sh0ss_442", em = "_xsOrder12_sh0ss_445", tm = "_smSize1_sh0ss_451", nm = "_smSize2_sh0ss_460", rm = "_smSize3_sh0ss_469", om = "_smSize4_sh0ss_478", sm = "_smSize5_sh0ss_487", am = "_smSize6_sh0ss_496", lm = "_smSize7_sh0ss_505", im = "_smSize8_sh0ss_514", cm = "_smSize9_sh0ss_523", dm = "_smSize10_sh0ss_532", um = "_smSize11_sh0ss_543", fm = "_smSize12_sh0ss_554", pm = "_smOffset0_sh0ss_559", _m = "_smOffset1_sh0ss_562", hm = "_smOffset2_sh0ss_567", mm = "_smOffset3_sh0ss_572", gm = "_smOffset4_sh0ss_577", ym = "_smOffset5_sh0ss_582", bm = "_smOffset6_sh0ss_587", xm = "_smOffset7_sh0ss_592", vm = "_smOffset8_sh0ss_597", wm = "_smOffset9_sh0ss_602", km = "_smOffset10_sh0ss_607", Nm = "_smOffset11_sh0ss_613", $m = "_smOffset12_sh0ss_619", Sm = "_smOrderFirst_sh0ss_625", Om = "_smOrderLast_sh0ss_628", Em = "_smOrder0_sh0ss_631", Tm = "_smOrder1_sh0ss_634", Cm = "_smOrder2_sh0ss_637", Mm = "_smOrder3_sh0ss_640", Am = "_smOrder4_sh0ss_643", Dm = "_smOrder5_sh0ss_646", Im = "_smOrder6_sh0ss_649", zm = "_smOrder7_sh0ss_652", Lm = "_smOrder8_sh0ss_655", Pm = "_smOrder9_sh0ss_658", Rm = "_smOrder10_sh0ss_661", jm = "_smOrder11_sh0ss_664", Bm = "_smOrder12_sh0ss_667", Fm = "_mdSize1_sh0ss_673", Hm = "_mdSize2_sh0ss_682", Um = "_mdSize3_sh0ss_691", Wm = "_mdSize4_sh0ss_700", qm = "_mdSize5_sh0ss_709", Km = "_mdSize6_sh0ss_718", Gm = "_mdSize7_sh0ss_727", Vm = "_mdSize8_sh0ss_736", Ym = "_mdSize9_sh0ss_745", Xm = "_mdSize10_sh0ss_754", Zm = "_mdSize11_sh0ss_765", Jm = "_mdSize12_sh0ss_776", Qm = "_mdOffset0_sh0ss_781", e1 = "_mdOffset1_sh0ss_784", t1 = "_mdOffset2_sh0ss_789", n1 = "_mdOffset3_sh0ss_794", r1 = "_mdOffset4_sh0ss_799", o1 = "_mdOffset5_sh0ss_804", s1 = "_mdOffset6_sh0ss_809", a1 = "_mdOffset7_sh0ss_814", l1 = "_mdOffset8_sh0ss_819", i1 = "_mdOffset9_sh0ss_824", c1 = "_mdOffset10_sh0ss_829", d1 = "_mdOffset11_sh0ss_835", u1 = "_mdOffset12_sh0ss_841", f1 = "_mdOrderFirst_sh0ss_847", p1 = "_mdOrderLast_sh0ss_850", _1 = "_mdOrder0_sh0ss_853", h1 = "_mdOrder1_sh0ss_856", m1 = "_mdOrder2_sh0ss_859", g1 = "_mdOrder3_sh0ss_862", y1 = "_mdOrder4_sh0ss_865", b1 = "_mdOrder5_sh0ss_868", x1 = "_mdOrder6_sh0ss_871", v1 = "_mdOrder7_sh0ss_874", w1 = "_mdOrder8_sh0ss_877", k1 = "_mdOrder9_sh0ss_880", N1 = "_mdOrder10_sh0ss_883", $1 = "_mdOrder11_sh0ss_886", S1 = "_mdOrder12_sh0ss_889", O1 = "_lgSize1_sh0ss_895", E1 = "_lgSize2_sh0ss_904", T1 = "_lgSize3_sh0ss_913", C1 = "_lgSize4_sh0ss_922", M1 = "_lgSize5_sh0ss_931", A1 = "_lgSize6_sh0ss_940", D1 = "_lgSize7_sh0ss_949", I1 = "_lgSize8_sh0ss_958", z1 = "_lgSize9_sh0ss_967", L1 = "_lgSize10_sh0ss_976", P1 = "_lgSize11_sh0ss_987", R1 = "_lgSize12_sh0ss_998", j1 = "_lgOffset0_sh0ss_1003", B1 = "_lgOffset1_sh0ss_1006", F1 = "_lgOffset2_sh0ss_1011", H1 = "_lgOffset3_sh0ss_1016", U1 = "_lgOffset4_sh0ss_1021", W1 = "_lgOffset5_sh0ss_1026", q1 = "_lgOffset6_sh0ss_1031", K1 = "_lgOffset7_sh0ss_1036", G1 = "_lgOffset8_sh0ss_1041", V1 = "_lgOffset9_sh0ss_1046", Y1 = "_lgOffset10_sh0ss_1051", X1 = "_lgOffset11_sh0ss_1057", Z1 = "_lgOffset12_sh0ss_1063", J1 = "_lgOrderFirst_sh0ss_1069", Q1 = "_lgOrderLast_sh0ss_1072", eg = "_lgOrder0_sh0ss_1075", tg = "_lgOrder1_sh0ss_1078", ng = "_lgOrder2_sh0ss_1081", rg = "_lgOrder3_sh0ss_1084", og = "_lgOrder4_sh0ss_1087", sg = "_lgOrder5_sh0ss_1090", ag = "_lgOrder6_sh0ss_1093", lg = "_lgOrder7_sh0ss_1096", ig = "_lgOrder8_sh0ss_1099", cg = "_lgOrder9_sh0ss_1102", dg = "_lgOrder10_sh0ss_1105", ug = "_lgOrder11_sh0ss_1108", fg = "_lgOrder12_sh0ss_1111", pg = "_xlSize1_sh0ss_1117", _g = "_xlSize2_sh0ss_1126", hg = "_xlSize3_sh0ss_1135", mg = "_xlSize4_sh0ss_1144", gg = "_xlSize5_sh0ss_1153", yg = "_xlSize6_sh0ss_1162", bg = "_xlSize7_sh0ss_1171", xg = "_xlSize8_sh0ss_1180", vg = "_xlSize9_sh0ss_1189", wg = "_xlSize10_sh0ss_1198", kg = "_xlSize11_sh0ss_1209", Ng = "_xlSize12_sh0ss_1220", $g = "_xlOffset0_sh0ss_1225", Sg = "_xlOffset1_sh0ss_1228", Og = "_xlOffset2_sh0ss_1233", Eg = "_xlOffset3_sh0ss_1238", Tg = "_xlOffset4_sh0ss_1243", Cg = "_xlOffset5_sh0ss_1248", Mg = "_xlOffset6_sh0ss_1253", Ag = "_xlOffset7_sh0ss_1258", Dg = "_xlOffset8_sh0ss_1263", Ig = "_xlOffset9_sh0ss_1268", zg = "_xlOffset10_sh0ss_1273", Lg = "_xlOffset11_sh0ss_1279", Pg = "_xlOffset12_sh0ss_1285", Rg = "_xlOrderFirst_sh0ss_1291", jg = "_xlOrderLast_sh0ss_1294", Bg = "_xlOrder0_sh0ss_1297", Fg = "_xlOrder1_sh0ss_1300", Hg = "_xlOrder2_sh0ss_1303", Ug = "_xlOrder3_sh0ss_1306", Wg = "_xlOrder4_sh0ss_1309", qg = "_xlOrder5_sh0ss_1312", Kg = "_xlOrder6_sh0ss_1315", Gg = "_xlOrder7_sh0ss_1318", Vg = "_xlOrder8_sh0ss_1321", Yg = "_xlOrder9_sh0ss_1324", Xg = "_xlOrder10_sh0ss_1327", Zg = "_xlOrder11_sh0ss_1330", Jg = "_xlOrder12_sh0ss_1333", Qg = "_xxSize1_sh0ss_1339", ey = "_xxSize2_sh0ss_1348", ty = "_xxSize3_sh0ss_1357", ny = "_xxSize4_sh0ss_1366", ry = "_xxSize5_sh0ss_1375", oy = "_xxSize6_sh0ss_1384", sy = "_xxSize7_sh0ss_1393", ay = "_xxSize8_sh0ss_1402", ly = "_xxSize9_sh0ss_1411", iy = "_xxSize10_sh0ss_1420", cy = "_xxSize11_sh0ss_1431", dy = "_xxSize12_sh0ss_1442", uy = "_xxOffset0_sh0ss_1447", fy = "_xxOffset1_sh0ss_1450", py = "_xxOffset2_sh0ss_1455", _y = "_xxOffset3_sh0ss_1460", hy = "_xxOffset4_sh0ss_1465", my = "_xxOffset5_sh0ss_1470", gy = "_xxOffset6_sh0ss_1475", yy = "_xxOffset7_sh0ss_1480", by = "_xxOffset8_sh0ss_1485", xy = "_xxOffset9_sh0ss_1490", vy = "_xxOffset10_sh0ss_1495", wy = "_xxOffset11_sh0ss_1501", ky = "_xxOffset12_sh0ss_1507", Ny = "_xxOrderFirst_sh0ss_1513", $y = "_xxOrderLast_sh0ss_1516", Sy = "_xxOrder0_sh0ss_1519", Oy = "_xxOrder1_sh0ss_1522", Ey = "_xxOrder2_sh0ss_1525", Ty = "_xxOrder3_sh0ss_1528", Cy = "_xxOrder4_sh0ss_1531", My = "_xxOrder5_sh0ss_1534", Ay = "_xxOrder6_sh0ss_1537", Dy = "_xxOrder7_sh0ss_1540", Iy = "_xxOrder8_sh0ss_1543", zy = "_xxOrder9_sh0ss_1546", Ly = "_xxOrder10_sh0ss_1549", Py = "_xxOrder11_sh0ss_1552", Ry = "_xxOrder12_sh0ss_1555", co = {
  column: E_,
  Size1: T_,
  Size2: C_,
  Size3: M_,
  Size4: A_,
  Size5: D_,
  Size6: I_,
  Size7: z_,
  Size8: L_,
  Size9: P_,
  Size10: R_,
  Size11: j_,
  Size12: B_,
  Offset0: F_,
  Offset1: H_,
  Offset2: U_,
  Offset3: W_,
  Offset4: q_,
  Offset5: K_,
  Offset6: G_,
  Offset7: V_,
  Offset8: Y_,
  Offset9: X_,
  Offset10: Z_,
  Offset11: J_,
  Offset12: Q_,
  OrderFirst: eh,
  OrderLast: th,
  Order0: nh,
  Order1: rh,
  Order2: oh,
  Order3: sh,
  Order4: ah,
  Order5: lh,
  Order6: ih,
  Order7: ch,
  Order8: dh,
  Order9: uh,
  Order10: fh,
  Order11: ph,
  Order12: _h,
  xsSize1: hh,
  xsSize2: mh,
  xsSize3: gh,
  xsSize4: yh,
  xsSize5: bh,
  xsSize6: xh,
  xsSize7: vh,
  xsSize8: wh,
  xsSize9: kh,
  xsSize10: Nh,
  xsSize11: $h,
  xsSize12: Sh,
  xsOffset0: Oh,
  xsOffset1: Eh,
  xsOffset2: Th,
  xsOffset3: Ch,
  xsOffset4: Mh,
  xsOffset5: Ah,
  xsOffset6: Dh,
  xsOffset7: Ih,
  xsOffset8: zh,
  xsOffset9: Lh,
  xsOffset10: Ph,
  xsOffset11: Rh,
  xsOffset12: jh,
  xsOrderFirst: Bh,
  xsOrderLast: Fh,
  xsOrder0: Hh,
  xsOrder1: Uh,
  xsOrder2: Wh,
  xsOrder3: qh,
  xsOrder4: Kh,
  xsOrder5: Gh,
  xsOrder6: Vh,
  xsOrder7: Yh,
  xsOrder8: Xh,
  xsOrder9: Zh,
  xsOrder10: Jh,
  xsOrder11: Qh,
  xsOrder12: em,
  smSize1: tm,
  smSize2: nm,
  smSize3: rm,
  smSize4: om,
  smSize5: sm,
  smSize6: am,
  smSize7: lm,
  smSize8: im,
  smSize9: cm,
  smSize10: dm,
  smSize11: um,
  smSize12: fm,
  smOffset0: pm,
  smOffset1: _m,
  smOffset2: hm,
  smOffset3: mm,
  smOffset4: gm,
  smOffset5: ym,
  smOffset6: bm,
  smOffset7: xm,
  smOffset8: vm,
  smOffset9: wm,
  smOffset10: km,
  smOffset11: Nm,
  smOffset12: $m,
  smOrderFirst: Sm,
  smOrderLast: Om,
  smOrder0: Em,
  smOrder1: Tm,
  smOrder2: Cm,
  smOrder3: Mm,
  smOrder4: Am,
  smOrder5: Dm,
  smOrder6: Im,
  smOrder7: zm,
  smOrder8: Lm,
  smOrder9: Pm,
  smOrder10: Rm,
  smOrder11: jm,
  smOrder12: Bm,
  mdSize1: Fm,
  mdSize2: Hm,
  mdSize3: Um,
  mdSize4: Wm,
  mdSize5: qm,
  mdSize6: Km,
  mdSize7: Gm,
  mdSize8: Vm,
  mdSize9: Ym,
  mdSize10: Xm,
  mdSize11: Zm,
  mdSize12: Jm,
  mdOffset0: Qm,
  mdOffset1: e1,
  mdOffset2: t1,
  mdOffset3: n1,
  mdOffset4: r1,
  mdOffset5: o1,
  mdOffset6: s1,
  mdOffset7: a1,
  mdOffset8: l1,
  mdOffset9: i1,
  mdOffset10: c1,
  mdOffset11: d1,
  mdOffset12: u1,
  mdOrderFirst: f1,
  mdOrderLast: p1,
  mdOrder0: _1,
  mdOrder1: h1,
  mdOrder2: m1,
  mdOrder3: g1,
  mdOrder4: y1,
  mdOrder5: b1,
  mdOrder6: x1,
  mdOrder7: v1,
  mdOrder8: w1,
  mdOrder9: k1,
  mdOrder10: N1,
  mdOrder11: $1,
  mdOrder12: S1,
  lgSize1: O1,
  lgSize2: E1,
  lgSize3: T1,
  lgSize4: C1,
  lgSize5: M1,
  lgSize6: A1,
  lgSize7: D1,
  lgSize8: I1,
  lgSize9: z1,
  lgSize10: L1,
  lgSize11: P1,
  lgSize12: R1,
  lgOffset0: j1,
  lgOffset1: B1,
  lgOffset2: F1,
  lgOffset3: H1,
  lgOffset4: U1,
  lgOffset5: W1,
  lgOffset6: q1,
  lgOffset7: K1,
  lgOffset8: G1,
  lgOffset9: V1,
  lgOffset10: Y1,
  lgOffset11: X1,
  lgOffset12: Z1,
  lgOrderFirst: J1,
  lgOrderLast: Q1,
  lgOrder0: eg,
  lgOrder1: tg,
  lgOrder2: ng,
  lgOrder3: rg,
  lgOrder4: og,
  lgOrder5: sg,
  lgOrder6: ag,
  lgOrder7: lg,
  lgOrder8: ig,
  lgOrder9: cg,
  lgOrder10: dg,
  lgOrder11: ug,
  lgOrder12: fg,
  xlSize1: pg,
  xlSize2: _g,
  xlSize3: hg,
  xlSize4: mg,
  xlSize5: gg,
  xlSize6: yg,
  xlSize7: bg,
  xlSize8: xg,
  xlSize9: vg,
  xlSize10: wg,
  xlSize11: kg,
  xlSize12: Ng,
  xlOffset0: $g,
  xlOffset1: Sg,
  xlOffset2: Og,
  xlOffset3: Eg,
  xlOffset4: Tg,
  xlOffset5: Cg,
  xlOffset6: Mg,
  xlOffset7: Ag,
  xlOffset8: Dg,
  xlOffset9: Ig,
  xlOffset10: zg,
  xlOffset11: Lg,
  xlOffset12: Pg,
  xlOrderFirst: Rg,
  xlOrderLast: jg,
  xlOrder0: Bg,
  xlOrder1: Fg,
  xlOrder2: Hg,
  xlOrder3: Ug,
  xlOrder4: Wg,
  xlOrder5: qg,
  xlOrder6: Kg,
  xlOrder7: Gg,
  xlOrder8: Vg,
  xlOrder9: Yg,
  xlOrder10: Xg,
  xlOrder11: Zg,
  xlOrder12: Jg,
  xxSize1: Qg,
  xxSize2: ey,
  xxSize3: ty,
  xxSize4: ny,
  xxSize5: ry,
  xxSize6: oy,
  xxSize7: sy,
  xxSize8: ay,
  xxSize9: ly,
  xxSize10: iy,
  xxSize11: cy,
  xxSize12: dy,
  xxOffset0: uy,
  xxOffset1: fy,
  xxOffset2: py,
  xxOffset3: _y,
  xxOffset4: hy,
  xxOffset5: my,
  xxOffset6: gy,
  xxOffset7: yy,
  xxOffset8: by,
  xxOffset9: xy,
  xxOffset10: vy,
  xxOffset11: wy,
  xxOffset12: ky,
  xxOrderFirst: Ny,
  xxOrderLast: $y,
  xxOrder0: Sy,
  xxOrder1: Oy,
  xxOrder2: Ey,
  xxOrder3: Ty,
  xxOrder4: Cy,
  xxOrder5: My,
  xxOrder6: Ay,
  xxOrder7: Dy,
  xxOrder8: Iy,
  xxOrder9: zy,
  xxOrder10: Ly,
  xxOrder11: Py,
  xxOrder12: Ry
}, jy = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function By(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Fy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Hy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Uy(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Hy(n, t), `${e}Order${t}`);
}
function _S({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [A, M, k, w] of jy) {
    const E = n[M], L = n[k], z = n[w];
    if (E != null) {
      By(M, E);
      const P = co[`${A}Size${E}`];
      P && r.push(P);
    }
    if (L != null) {
      Fy(k, L);
      const P = co[`${A}Offset${L}`];
      P && r.push(P);
    }
    if (z != null) {
      const P = co[Uy(A, z, w)];
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
    sizeMd: p,
    offsetMd: b,
    sizeLg: h,
    offsetLg: g,
    sizeXl: _,
    offsetXl: v,
    sizeXx: m,
    offsetXx: f,
    order: y,
    orderXs: N,
    orderSm: x,
    orderMd: C,
    orderLg: $,
    orderXl: S,
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
const Wy = "_stack_bmbbp_1", jr = {
  stack: Wy,
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
function na(e) {
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
    ...r != null ? { gap: bo(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        jr.stack,
        jr[`dir-${d}`],
        na(n) !== "wrap" ? jr[`wrap-${na(n)}`] : null,
        a != null ? jr[`align-${a}`] : null,
        i != null ? jr[`justify-${i}`] : null,
        c
      ].filter(Boolean).join(" "),
      style: u,
      ...l
    }
  );
}
const qy = "_autogrid_16x9f_1", Ky = {
  autogrid: qy
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
    ...t != null ? { gap: bo(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Ky.autogrid, n].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const Gy = "_layout_fxvw1_1", Vy = "_row_fxvw1_7", Yy = "_grid_fxvw1_21", Xy = "_gridRight_fxvw1_27", Zy = "_gridHeader_fxvw1_31", Jy = "_gridFooter_fxvw1_36", Qy = "_gridContents_fxvw1_41", e0 = "_gridBody_fxvw1_45", An = {
  layout: Gy,
  row: Vy,
  grid: Yy,
  gridRight: Xy,
  gridHeader: Zy,
  gridFooter: Jy,
  gridContents: Qy,
  gridBody: e0
}, t0 = "_footer_3be5w_1", n0 = "_sticky_3be5w_9", ra = {
  footer: t0,
  sticky: n0
};
function r0({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [ra.footer, e ? ra.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const o0 = "_header_1tw8b_1", s0 = "_sticky_1tw8b_9", oa = {
  header: o0,
  sticky: s0
};
function a0({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [oa.header, e ? oa.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const l0 = "_sidebar_175d5_1", i0 = "_sticky_175d5_23", c0 = "_left_175d5_41", d0 = "_right_175d5_45", u0 = "_start_175d5_50", f0 = "_end_175d5_54", p0 = "_fullHeight_175d5_60", _0 = "_collapsed_175d5_64", h0 = "_responsive_175d5_72", m0 = "_overlay_175d5_80", g0 = "_mask_175d5_108", Gn = {
  sidebar: l0,
  sticky: i0,
  left: c0,
  right: d0,
  start: u0,
  end: f0,
  fullHeight: p0,
  collapsed: _0,
  responsive: h0,
  overlay: m0,
  mask: g0
};
function y0({
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
    const u = (p) => {
      p.key === "Escape" && c();
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
  Zr.forEach(n, (b) => {
    if (!qt(b)) {
      c.push(b);
      return;
    }
    if (b.type === a0)
      a.push(b);
    else if (b.type === r0)
      i.push(b);
    else if (b.type === y0) {
      const h = b, g = h.props.position;
      d.push(h), (g === "right" || g === "end" ? l : s).push(h);
    } else
      c.push(b);
  });
  const u = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, p = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const b = p ? l : s;
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          An.layout,
          An.grid,
          p ? An.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          a.length > 0 && /* @__PURE__ */ o("div", { className: An.gridHeader, children: a }),
          /* @__PURE__ */ D("div", { className: An.gridContents, children: [
            b,
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
const b0 = "_body_1ge00_4", x0 = "_bare_1ge00_12", sa = {
  body: b0,
  bare: x0
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
      className: [sa.body, t ? null : sa.bare, n].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}
const v0 = "_toggle_lxnk5_1", w0 = {
  toggle: v0
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
      className: [w0.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ o(Te, { icon: e, size: 20 })
    }
  );
}
const k0 = "_track_14127_1", N0 = "_bar_14127_31", $0 = "_primary_14127_39", S0 = "_success_14127_43", O0 = "_warning_14127_47", E0 = "_danger_14127_51", T0 = "_indeterminate_14127_149", C0 = "_circular_14127_163", M0 = "_fill_14127_203", rn = {
  track: k0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: N0,
  primary: $0,
  success: S0,
  warning: O0,
  danger: E0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: T0,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: C0,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: M0,
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
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? u / t * 100 : 0;
  if (i === "circular") {
    const h = typeof c == "string", g = 2, _ = 10.5, v = 2 * Math.PI * _, m = v * (a ? 0.75 : 1), f = a ? 0 : v * (1 - p / 100), y = Yr(r);
    return /* @__PURE__ */ D(
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
              strokeDasharray: `${m} ${v}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const b = Yr(r);
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
        b ? rn[b] : null,
        typeof c == "string" ? rn[`linear-${c}`] : null,
        a ? rn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: rn.bar,
          style: a ? void 0 : { width: `${p}%` }
        }
      )
    }
  );
}
function A0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function $o(e) {
  const [t, n] = W(() => A0(e));
  return Oe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const D0 = "_pressed_12x15_8", I0 = {
  pressed: D0
}, z0 = at(
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
    children: p,
    variant: b,
    severity: h,
    shade: g,
    ..._
  }, v) {
    const [m, f] = W(n), y = t ?? m, N = (x) => {
      const C = !y;
      t === void 0 && f(C), r?.(C), u?.(x);
    };
    return /* @__PURE__ */ o(
      cn,
      {
        ..._,
        ref: v,
        variant: y && a ? a : b,
        severity: y ? i : h,
        shade: y ? c : g,
        size: l,
        "aria-pressed": y,
        className: [y ? I0.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: y && s !== void 0 ? s : p
      }
    );
  }
), Fa = "dx-theme";
function L0(e) {
  const t = e === void 0 ? Fa : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function P0(e, t) {
  const n = e === void 0 ? Fa : e;
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
  const l = $o("(prefers-color-scheme: dark)"), [d, u] = W(void 0), p = e !== void 0, b = e ?? d ?? L0(n) ?? t ?? "system", h = b === "system" ? l ? "dark" : "light" : b;
  return Oe(() => {
    if (!p) {
      if (b === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = b;
    }
  }, [b, p]), /* @__PURE__ */ o(
    z0,
    {
      id: i,
      size: s,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: h === "dark",
      onChange: (_) => {
        const v = _ ? "dark" : "light";
        p || (u(v), P0(n, v)), r?.(v);
      },
      toggleContent: /* @__PURE__ */ o(Te, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Te, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Ha = "dx-palette", Ua = "dx-theme", Yo = "data-palette", Xo = "data-theme", Zo = /* @__PURE__ */ new Set();
function R0() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Yo), t = document.documentElement.getAttribute(Xo);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function cs(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Yo) : document.documentElement.setAttribute(Yo, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Xo) : document.documentElement.setAttribute(Xo, e.appearance));
}
function Wa(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function aa(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let la = !1;
function $r() {
  const e = R0();
  if (!la) {
    la = !0;
    const t = aa(Ha), n = aa(Ua), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && cs(a), a;
  }
  return e;
}
function qa() {
  const e = $r();
  Zo.forEach((t) => t({ ...e }));
}
function ia(e) {
  return Zo.add(e), () => {
    Zo.delete(e);
  };
}
function wS() {
  return $r().theme;
}
function j0(e) {
  const t = $r();
  t.theme !== e && (t.theme = e, cs(t), Wa(Ha, e), qa());
}
function kS() {
  return $r().appearance;
}
function B0(e) {
  const t = $r();
  t.appearance !== e && (t.appearance = e, cs(t), Wa(Ua, e), qa());
}
function NS() {
  const [, e] = W(0);
  Oe(() => ia(() => e((n) => n + 1)), []);
  const t = $r();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: j0,
    setAppearance: B0,
    subscribe: ia
  };
}
function F0(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (_, v) => Math.floor(Math.abs(Math.sin(v + 1)) * 4294967296)
  ), l = (_, v) => _ + v | 0, d = (_, v) => _ << v | _ >>> 32 - v;
  let u = 1732584193, p = 4023233417, b = 2562383102, h = 271733878;
  for (let _ = 0; _ < r; _ += 64) {
    const v = [];
    for (let x = 0; x < 16; x += 1)
      v.push(i.getUint32(_ + x * 4, !0));
    let m = u, f = p, y = b, N = h;
    for (let x = 0; x < 64; x += 1) {
      let C, $;
      x < 16 ? (C = f & y | ~f & N, $ = x) : x < 32 ? (C = N & f | ~N & y, $ = (5 * x + 1) % 16) : x < 48 ? (C = f ^ y ^ N, $ = (3 * x + 5) % 16) : (C = y ^ (f | ~N), $ = 7 * x % 16), C = l(l(l(C, m), s[x]), v[$]), m = N, N = y, y = f, f = l(f, d(C, c[Math.floor(x / 16) * 4 + x % 4]));
    }
    u = l(u, m), p = l(p, f), b = l(b, y), h = l(h, N);
  }
  const g = (_) => {
    let v = "";
    for (let m = 0; m < 4; m += 1)
      v += `0${(_ >>> m * 8 & 255).toString(16)}`.slice(-2);
    return v;
  };
  return g(u) + g(p) + g(b) + g(h);
}
const H0 = "_avatar_1mhfr_1", U0 = "_xs_1mhfr_12", W0 = "_sm_1mhfr_18", q0 = "_md_1mhfr_24", K0 = "_lg_1mhfr_30", G0 = "_xl_1mhfr_36", V0 = "_initials_1mhfr_42", Y0 = "_image_1mhfr_57", X0 = "_status_1mhfr_64", Z0 = "_online_1mhfr_84", J0 = "_offline_1mhfr_88", Q0 = "_away_1mhfr_92", _r = {
  avatar: H0,
  xs: U0,
  sm: W0,
  md: q0,
  lg: K0,
  xl: G0,
  initials: V0,
  image: Y0,
  status: X0,
  online: Z0,
  offline: J0,
  away: Q0
}, eb = {
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
function tb(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function nb(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return mo[t % mo.length] ?? mo[0];
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
  const d = Ne(() => e ? tb(e) : "?", [e]), u = Ne(() => e ? nb(e) : mo[0], [e]), p = Ne(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${F0(N)}?d=${r}&s=${eb[c]}&r=${a}`;
  }, [t, n, r, a, c]), b = t ?? p, [h, g] = W(null), _ = b != null && h !== b, v = _ && i === "", m = i ?? e ?? "avatar", f = s ? `${m}, ${s}` : m, y = _ ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: b,
        alt: v ? "" : s ? f : m,
        onError: () => g(b ?? null)
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
      "aria-label": _ ? void 0 : f,
      children: [
        y,
        s && /* @__PURE__ */ o("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const rb = "_root_zzwfz_1", ob = "_left_zzwfz_6", sb = "_right_zzwfz_7", ab = "_panel_zzwfz_12", lb = "_bottom_zzwfz_20", ib = "_tabList_zzwfz_24", cb = "_underline_zzwfz_53", db = "_pills_zzwfz_72", ub = "_tab_zzwfz_24", fb = "_active_zzwfz_113", pb = "_disabled_zzwfz_139", Dn = {
  root: rb,
  left: ob,
  right: sb,
  panel: ab,
  bottom: lb,
  tabList: ib,
  underline: cb,
  pills: db,
  tab: ub,
  active: fb,
  disabled: pb
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
  const s = ct(), l = le(null), [d, u] = W(
    n ?? e[0]?.key ?? ""
  ), p = t ?? d, b = i === "left" || i === "right", h = (v) => {
    u(v), r?.(v);
  }, g = (v) => {
    const m = e.filter((N) => !N.disabled), f = m.findIndex((N) => N.key === p);
    let y = -1;
    v.key === "ArrowRight" || b && v.key === "ArrowDown" ? y = (f + 1) % m.length : v.key === "ArrowLeft" || b && v.key === "ArrowUp" ? y = (f - 1 + m.length) % m.length : v.key === "Home" ? y = 0 : v.key === "End" && (y = m.length - 1), y >= 0 && (v.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(m[y]?.key ?? "")}"]`
    )?.focus(), h(m[y]?.key ?? ""));
  }, _ = e.find((v) => v.key === p);
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
            children: e.map((v) => {
              const m = v.key === p;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${v.key}`,
                  "data-tab-key": v.key,
                  "aria-selected": m,
                  "aria-controls": `${s}-panel-${v.key}`,
                  tabIndex: m ? 0 : -1,
                  disabled: v.disabled,
                  className: [
                    Dn.tab,
                    m ? Dn.active : null,
                    v.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => h(v.key),
                  children: v.label
                },
                v.key
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
const _b = "_root_1l1j2_1", hb = "_item_1l1j2_9", mb = "_heading_1l1j2_13", gb = "_trigger_1l1j2_17", yb = "_disabled_1l1j2_34", bb = "_title_1l1j2_48", xb = "_chevron_1l1j2_52", vb = "_open_1l1j2_59", wb = "_content_1l1j2_63", In = {
  root: _b,
  item: hb,
  heading: mb,
  trigger: gb,
  disabled: yb,
  title: bb,
  chevron: xb,
  open: vb,
  content: wb
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
  ), d = n ?? s, u = (p) => {
    const b = d.includes(p) ? d.filter((h) => h !== p) : t ? [...d, p] : [p];
    l(b), a?.(b);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((p) => {
    const b = d.includes(p.key), h = `${c}-panel-${p.key}`, g = `${c}-trigger-${p.key}`;
    return /* @__PURE__ */ D("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: g,
          "aria-expanded": b,
          "aria-controls": h,
          disabled: p.disabled,
          className: [
            In.trigger,
            p.disabled ? In.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(p.key),
          children: [
            /* @__PURE__ */ o("span", { className: In.title, children: p.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [In.chevron, b ? In.open : null].filter(Boolean).join(" "),
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
          "aria-labelledby": g,
          hidden: !b,
          className: In.content,
          children: p.content
        }
      )
    ] }, p.key);
  }) });
}
const kb = "_textarea_l7fsl_1", Nb = "_invalid_l7fsl_27", $b = "_xs_l7fsl_34", Sb = "_sm_l7fsl_39", Ob = "_md_l7fsl_44", Eb = "_lg_l7fsl_49", Tb = "_xl_l7fsl_54", uo = {
  textarea: kb,
  invalid: Nb,
  xs: $b,
  sm: Sb,
  md: Ob,
  lg: Eb,
  xl: Tb,
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
), Cb = "_root_xyp2i_1", Mb = "_trigger_xyp2i_9", Ab = "_invalid_xyp2i_40", Db = "_placeholder_xyp2i_47", Ib = "_label_xyp2i_54", zb = "_chevron_xyp2i_60", Lb = "_chevronOpen_xyp2i_70", Pb = "_menu_xyp2i_74", Rb = "_option_xyp2i_89", jb = "_disabled_xyp2i_100", Bb = "_active_xyp2i_104", Fb = "_selected_xyp2i_105", Hb = "_header_xyp2i_115", Ub = "_xs_xyp2i_122", Wb = "_sm_xyp2i_128", qb = "_md_xyp2i_134", Kb = "_lg_xyp2i_140", Gb = "_xl_xyp2i_146", Ut = {
  root: Cb,
  trigger: Mb,
  invalid: Ab,
  placeholder: Db,
  label: Ib,
  chevron: zb,
  chevronOpen: Lb,
  menu: Pb,
  option: Rb,
  disabled: jb,
  active: Bb,
  selected: Fb,
  header: Hb,
  xs: Ub,
  sm: Wb,
  md: qb,
  lg: Kb,
  xl: Gb
}, Vb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
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
  const u = ct(), p = `${u}-listbox`, b = le(null), h = le(null), [g, _] = W(
    n
  ), [v, m] = W(!1), f = t ?? g, y = e.map(
    (k, w) => k.label === "" || k.disabled ? -1 : w
  ).filter((k) => k >= 0), N = e.findIndex(
    (k) => k.value === f
  ), [x, C] = W(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), $ = H(() => {
    if (s) return;
    const k = N >= 0 && y.includes(N) ? N : y[0];
    C(k ?? -1), m(!0);
  }, [s, N, y]), S = H(() => {
    m(!1), h.current?.focus();
  }, []);
  Oe(() => {
    if (!v) return;
    const k = (w) => {
      b.current && !b.current.contains(w.target) && m(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [v]);
  const T = (k) => {
    _(k), r?.(k), m(!1), h.current?.focus();
  }, I = (k) => {
    if (y.length === 0) return;
    const w = y.includes(x) ? y.indexOf(x) : 0, E = y[(w + k + y.length) % y.length];
    E != null && C(E);
  }, A = (k) => {
    if (!v) {
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
        k.preventDefault(), y[0] != null && C(y[0]);
        break;
      case "End":
        k.preventDefault(), y[y.length - 1] != null && C(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), x >= 0 && e[x] && y.includes(x) && T(e[x]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), S();
        break;
      case "Tab":
        m(!1);
        break;
    }
  }, M = e.find(
    (k) => k.value === f
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- delegates keyboard handling to the trigger and popup; the root has no click semantics of its own
    /* @__PURE__ */ D(
      "div",
      {
        ref: b,
        className: [Ut.root, l].filter(Boolean).join(" "),
        onKeyDown: A,
        children: [
          /* @__PURE__ */ D(
            "button",
            {
              ref: h,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": v,
              "aria-controls": p,
              "aria-invalid": c || void 0,
              disabled: s,
              className: [
                Ut.trigger,
                Ut[i],
                v ? Ut.open : null,
                c ? Ut.invalid : null
              ].filter(Boolean).join(" "),
              onClick: () => v ? m(!1) : $(),
              ...d,
              children: [
                /* @__PURE__ */ o("span", { className: M ? Ut.label : Ut.placeholder, children: M ? M.label : a }),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: [Ut.chevron, v ? Ut.chevronOpen : null].filter(Boolean).join(" "),
                    style: { backgroundImage: Vb },
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          v && /* @__PURE__ */ o(
            "div",
            {
              id: p,
              role: "listbox",
              "aria-activedescendant": x >= 0 ? `${u}-option-${x}` : void 0,
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
                      "aria-selected": k.value === f,
                      "aria-disabled": k.disabled || void 0,
                      className: [
                        Ut.option,
                        w === x ? Ut.active : null,
                        k.value === f ? Ut.selected : null,
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
const Yb = "_root_1ma8a_1", Xb = "_wrap_1ma8a_9", Zb = "_input_1ma8a_26", Jb = "_invalid_1ma8a_31", Qb = "_clear_1ma8a_58", ex = "_menu_1ma8a_83", tx = "_option_1ma8a_98", nx = "_disabled_1ma8a_109", rx = "_active_1ma8a_113", ox = "_empty_1ma8a_123", sx = "_xs_1ma8a_129", ax = "_sm_1ma8a_136", lx = "_md_1ma8a_143", ix = "_lg_1ma8a_150", cx = "_xl_1ma8a_157", fn = {
  root: Yb,
  wrap: Xb,
  input: Zb,
  invalid: Jb,
  clear: Qb,
  menu: ex,
  option: tx,
  disabled: nx,
  active: rx,
  empty: ox,
  xs: sx,
  sm: ax,
  md: lx,
  lg: ix,
  xl: cx
}, dx = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
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
  filter: d = dx,
  className: u,
  ...p
}) {
  const b = ct(), h = `${b}-listbox`, g = le(null), _ = le(null), [v, m] = W(n), [f, y] = W(!1), N = t ?? v, x = Ne(
    () => N.trim() === "" ? [...e] : e.filter((z) => d(z, N)),
    [e, N, d]
  ), C = x.map((z, P) => z.disabled ? -1 : P).filter((z) => z >= 0), [$, S] = W(-1), T = (z) => {
    m(z), r?.(z);
  }, I = (z) => {
    T(z.label), a?.(z.value, z), y(!1);
  }, A = (z) => {
    if (C.length === 0) return;
    const P = C.includes($) ? C.indexOf($) : z === 1 ? -1 : 0, j = C[(P + z + C.length) % C.length];
    j != null && S(j);
  }, M = (z) => {
    l || (T(z.target.value), y(!0), S(-1));
  }, k = () => {
    l || N !== "" && y(!0);
  }, w = (z) => {
    g.current && !g.current.contains(z.relatedTarget) && y(!1);
  }, E = (z) => {
    if (!l)
      switch (z.key) {
        case "ArrowDown":
          z.preventDefault(), f ? A(1) : (y(!0), S(C[0] ?? -1));
          break;
        case "ArrowUp":
          z.preventDefault(), f && A(-1);
          break;
        case "Enter":
          z.preventDefault(), f && $ >= 0 && x[$] && I(x[$]);
          break;
        case "Escape":
          z.preventDefault(), y(!1);
          break;
        case "Tab":
          f && $ >= 0 && x[$] && I(x[$]), y(!1);
          break;
      }
  }, L = () => {
    T(""), S(-1), y(!0), _.current?.focus();
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
                  "aria-expanded": f,
                  "aria-controls": h,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": f && $ >= 0 ? `${b}-option-${$}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: N,
                  placeholder: i,
                  className: fn.input,
                  onChange: M,
                  onFocus: k,
                  onBlur: w,
                  onKeyDown: E,
                  ...p
                }
              ),
              N !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: fn.clear,
                  "aria-label": "Clear",
                  onClick: L,
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        f && (x.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: h, className: fn.menu, children: /* @__PURE__ */ o("div", { className: fn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: h, role: "listbox", className: fn.menu, children: x.map((z, P) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option through the input's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${b}-option-${P}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": !1,
              "aria-disabled": z.disabled || void 0,
              className: [
                fn.option,
                P === $ ? fn.active : null,
                z.disabled ? fn.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                z.disabled || I(z);
              },
              onMouseDown: (j) => {
                j.preventDefault(), z.disabled || I(z);
              },
              onMouseEnter: () => {
                z.disabled || S(P);
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
const ux = "_box_muvqe_1", fx = "_option_muvqe_12", px = "_disabled_muvqe_23", _x = "_selected_muvqe_27", hx = "_active_muvqe_33", Br = {
  box: ux,
  option: fx,
  disabled: px,
  selected: _x,
  active: hx
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
    const x = n;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), p = t == null ? d : Array.isArray(t) ? t : [t], b = e.findIndex((x) => !x.disabled), [h, g] = W(
    () => b >= 0 ? b : 0
  ), _ = le(""), v = le(null), m = (x) => {
    u(x), a?.(r ? x : x[0] ?? "");
  }, f = e.map((x, C) => x.disabled ? -1 : C).filter((x) => x >= 0), y = (x) => {
    const C = e[x];
    if (!(!C || C.disabled))
      if (g(x), r) {
        const $ = p.includes(C.value) ? p.filter((S) => S !== C.value) : [...p, C.value];
        m($);
      } else
        m([C.value]);
  }, N = (x) => {
    if (f.length === 0) return;
    const C = f.includes(h) ? h : f[0];
    let $ = -1;
    if (x.key === "ArrowDown")
      $ = f[(f.indexOf(C) + 1) % f.length];
    else if (x.key === "ArrowUp")
      $ = f[(f.indexOf(C) - 1 + f.length) % f.length];
    else if (x.key === "Home")
      $ = f[0];
    else if (x.key === "End")
      $ = f[f.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), y(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const S = (_.current + x.key).toLowerCase();
      _.current = S, v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        _.current = "";
      }, 500);
      const T = [...f, ...f], I = f.indexOf(C) + 1, A = T.slice(I).find((M) => e[M]?.label.toLowerCase().startsWith(S));
      A != null && g(A);
      return;
    }
    $ >= 0 && (x.preventDefault(), g($), r || m([e[$]?.value ?? ""]));
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
      children: e.map((x, C) => {
        const $ = p.includes(x.value), S = C === h;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${l}-option-${C}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": $,
              "aria-disabled": x.disabled || void 0,
              className: [
                Br.option,
                $ ? Br.selected : null,
                S ? Br.active : null,
                x.disabled ? Br.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => y(C),
              children: x.label
            },
            x.value
          )
        );
      })
    }
  );
}
const mx = "_group_oinj7_1", gx = "_legend_oinj7_8", yx = "_list_oinj7_16", bx = "_item_oinj7_25", xx = "_disabled_oinj7_32", vx = "_label_oinj7_37", wx = "_checkbox_oinj7_48", tr = {
  group: mx,
  legend: gx,
  list: yx,
  item: bx,
  disabled: xx,
  label: vx,
  checkbox: wx
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
  ]), d = t ?? s, u = (p, b) => {
    const h = b ? [...d, p] : d.filter((g) => g !== p);
    l(h), r?.(h);
  };
  return /* @__PURE__ */ D("fieldset", { className: [tr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: tr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: tr.list, children: e.map((p) => {
      const b = d.includes(p.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [tr.item, p.disabled ? tr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: tr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: tr.checkbox,
                name: i,
                value: p.value,
                checked: b,
                disabled: p.disabled,
                onChange: (h) => u(p.value, h.target.checked)
              }
            ),
            /* @__PURE__ */ o("span", { children: p.label })
          ] })
        },
        p.value
      );
    }) })
  ] });
}
const kx = "_group_46668_1", Nx = "_legend_46668_8", $x = "_list_46668_16", Sx = "_item_46668_25", Ox = "_disabled_46668_32", Ex = "_label_46668_37", Tx = "_radio_46668_48", nr = {
  group: kx,
  legend: Nx,
  list: $x,
  item: Sx,
  disabled: Ox,
  label: Ex,
  radio: Tx
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
  ), d = t ?? s, u = (p) => {
    l(p), r?.(p);
  };
  return /* @__PURE__ */ D("fieldset", { className: [nr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: nr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: nr.list, children: e.map((p) => {
      const b = p.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [nr.item, p.disabled ? nr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: nr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: nr.radio,
                name: i,
                value: p.value,
                checked: b,
                disabled: p.disabled,
                onChange: (h) => u(h.target.value)
              }
            ),
            /* @__PURE__ */ o("span", { children: p.label })
          ] })
        },
        p.value
      );
    }) })
  ] });
}
const Cx = "_bar_9zyxn_1", Mx = "_vertical_9zyxn_12", Ax = "_option_9zyxn_17", Dx = "_selected_9zyxn_40", Ix = "_sm_9zyxn_56", zx = "_md_9zyxn_62", Lx = "_lg_9zyxn_68", hr = {
  bar: Cx,
  vertical: Mx,
  option: Ax,
  selected: Dx,
  sm: Ix,
  md: zx,
  lg: Lx
};
function ca(e) {
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
  } = e, u = a ?? !1, [p, b] = W(r ?? (u ? [] : t[0]?.value)), h = n ?? p, g = a === !0 || a === void 0 && Array.isArray(h), _ = (m) => {
    if (!g) {
      b(m), c?.(m);
      return;
    }
    const f = ca(h), y = f.includes(m) ? f.filter((N) => N !== m) : [...f, m];
    b(y), c?.(y);
  }, v = (m) => g ? ca(h).includes(m) : h === m;
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
        const f = v(m.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: m.disabled,
            className: [
              hr.option,
              f ? hr.selected : null,
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
const Px = "_root_11hdr_1", Rx = "_action_11hdr_10", jx = "_caret_11hdr_15", Bx = "_sm_11hdr_49", Fx = "_md_11hdr_53", Hx = "_lg_11hdr_57", Ux = "_fullWidth_11hdr_62", Wx = "_menu_11hdr_70", qx = "_item_11hdr_83", Kx = "_itemIcon_11hdr_105", Gx = "_disabled_11hdr_110", Vx = "_active_11hdr_114", Yx = "_danger_11hdr_123", vn = {
  root: Px,
  action: Rx,
  caret: jx,
  sm: Bx,
  md: Fx,
  lg: Hx,
  fullWidth: Ux,
  menu: Wx,
  item: qx,
  itemIcon: Kx,
  disabled: Gx,
  active: Vx,
  danger: Yx
}, zS = at(
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
    disabled: p = !1,
    className: b,
    "aria-label": h,
    openAriaLabel: g = "More actions",
    ..._
  }, v) {
    const f = `${ct()}-menu`, y = le(null), N = le(null), x = le([]), [C, $] = W(!1), [S, T] = W(-1), I = p || l, A = Ne(
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
        y.current && !y.current.contains(q.target) && $(!1);
      };
      return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
    }, [C]), Oe(() => {
      C && (I || !d) && $(!1);
    }, [C, I, d]);
    const w = le(C);
    if (Oe(() => {
      const j = w.current;
      if (w.current = C, !C || j) return;
      const q = A.includes(S) ? S : A[0] ?? -1;
      q >= 0 && x.current[q]?.focus();
    }, [C, S, A]), d === !1) return null;
    const E = (j) => {
      const q = r[j];
      !q || q.disabled || (q.onClick?.(), $(!1), N.current?.focus());
    }, L = (j) => {
      if (A.length === 0) return;
      const q = A.includes(S) ? A.indexOf(S) : j === 1 ? -1 : 0, ae = A[(q + j + A.length) % A.length];
      ae != null && (T(ae), x.current[ae]?.focus());
    }, z = (j) => {
      const q = j === "first" ? A[0] : A[A.length - 1];
      q != null && (T(q), x.current[q]?.focus());
    }, P = (j) => {
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), L(1);
          break;
        case "ArrowUp":
          j.preventDefault(), L(-1);
          break;
        case "Home":
          j.preventDefault(), z("first");
          break;
        case "End":
          j.preventDefault(), z("last");
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
          y.current = j, typeof v == "function" ? v(j) : v && (v.current = j);
        },
        className: [
          vn.root,
          vn[s],
          u ? vn.fullWidth : null,
          b
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
              disabled: p,
              "aria-label": h,
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
              "aria-controls": f,
              "aria-label": g,
              onClick: () => C ? $(!1) : M(),
              onKeyDown: (j) => {
                !C && (j.key === "ArrowDown" || j.key === "ArrowUp") && (j.preventDefault(), M());
              },
              children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          C && /* @__PURE__ */ o(
            "div",
            {
              id: f,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
              className: vn.menu,
              onKeyDown: P,
              ..._,
              children: r.map((j, q) => /* @__PURE__ */ D(
                "button",
                {
                  ref: (ae) => {
                    x.current[q] = ae;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: q === S ? 0 : -1,
                  disabled: j.disabled,
                  className: [
                    vn.item,
                    q === S ? vn.active : null,
                    j.danger ? vn.danger : null,
                    j.disabled ? vn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => E(q),
                  onMouseEnter: () => {
                    j.disabled || T(q);
                  },
                  children: [
                    j.icon ? /* @__PURE__ */ o("span", { className: vn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: j.icon, size: 16 }) }) : null,
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
), Xx = "_mask_rcv90_1", Zx = "_invalid_rcv90_31", Jx = "_xs_rcv90_38", Qx = "_sm_rcv90_44", ev = "_md_rcv90_50", tv = "_lg_rcv90_56", nv = "_xl_rcv90_62", Fo = {
  mask: Xx,
  invalid: Zx,
  xs: Jx,
  sm: Qx,
  md: ev,
  lg: tv,
  xl: nv
};
function da(e, t) {
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
const LS = at(function({
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
  const [p, b] = W(i ?? ""), h = a !== void 0, g = h ? a ?? "" : p, _ = (f) => {
    const y = da(f, r);
    return h || b(y), c?.(y), y;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (f) => {
        _(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const y = f.currentTarget.selectionStart ?? g.length, N = g[y - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            f.preventDefault();
            const x = g.replace(/\D/g, "");
            _(da(x.slice(0, -1), r));
          }
        }
        l?.(f);
      },
      className: [
        Fo.mask,
        Fo[t],
        n ? Fo.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), rv = "_wrapper_12jdf_1", ov = "_input_12jdf_8", sv = "_invalid_12jdf_38", av = "_button_12jdf_45", lv = "_up_12jdf_77", iv = "_down_12jdf_82", cv = "_xs_12jdf_87", dv = "_sm_12jdf_93", uv = "_md_12jdf_99", fv = "_lg_12jdf_105", pv = "_xl_12jdf_111", Vn = {
  wrapper: rv,
  input: ov,
  invalid: sv,
  button: av,
  up: lv,
  down: iv,
  xs: cv,
  sm: dv,
  md: uv,
  lg: fv,
  xl: pv
};
function Jo(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function _v(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Ka(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function hv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function mv(e, t, n, r, a) {
  const c = Jo(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Ka(s, n, r);
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
    incrementLabel: p = "Increment",
    decrementLabel: b = "Decrement",
    onBlur: h,
    onKeyDown: g,
    ..._
  }, v) {
    const [m, f] = W(
      c != null ? String(c) : ""
    ), y = i !== void 0, N = y ? i == null ? "" : String(i) : m, x = (A) => {
      y || f(A), s?.(Jo(A));
    }, C = (A) => {
      y || f(String(A)), s?.(A);
    }, $ = (A) => {
      a || C(mv(N, A, l, d, u));
    }, S = (A) => {
      x(_v(A.target.value));
    }, T = (A) => {
      A.key === "ArrowUp" ? (A.preventDefault(), $(1)) : A.key === "ArrowDown" && (A.preventDefault(), $(-1)), g?.(A);
    }, I = (A) => {
      const M = Jo(N);
      M === null ? (y || f(""), s?.(null)) : C(Ka(hv(M, l, u), l, d)), h?.(A);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: v,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: a,
            onChange: S,
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
            "aria-label": p,
            disabled: a,
            onClick: () => $(1),
            children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.down].join(" "),
            "aria-label": b,
            disabled: a,
            onClick: () => $(-1),
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
}, gv = [
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
function Qo(e) {
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
function yv({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function bv({ r: e, g: t, b: n }) {
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
function xv(e) {
  const t = Qo(e);
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
function ua({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const RS = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = gv,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: u = "md",
  tabIndex: p = 0,
  className: b,
  onChange: h,
  onValueChange: g,
  onOpen: _,
  onClose: v
}) => {
  const m = le(null), f = le(null), y = le(null), N = le(null), x = le(null), C = ct(), $ = le(null), S = Ne(
    () => xv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [T, I] = W(!1), [A, M] = W(null), k = A ?? S, w = Ne(() => bv(k), [k]), E = H(
    (ee) => {
      const Ce = ua(ee);
      h?.(Ce), g?.(Ce);
    },
    [h, g]
  ), L = H(
    (ee, Ce) => {
      M(ee), Ce && !i && E(ee);
    },
    [i, E]
  ), z = H(() => {
    I(!1), M(null), v?.(), f.current?.focus();
  }, [v]), P = H(() => {
    s || (M(S), I(!0), _?.());
  }, [s, S, _]), j = H(() => {
    T ? z() : P();
  }, [T, z, P]), q = H(
    (ee, Ce) => {
      const lt = y.current;
      if (!lt) return w;
      const ze = lt.getBoundingClientRect(), st = an((ee - ze.left) / ze.width, 0, 1), Xe = an(1 - (Ce - ze.top) / ze.height, 0, 1);
      return { h: w.h, s: st, v: Xe };
    },
    [w]
  ), ae = H(
    (ee, Ce) => {
      if (!Ce) return 0;
      const lt = Ce.getBoundingClientRect();
      return an((ee - lt.left) / lt.width, 0, 1);
    },
    []
  ), ie = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), $.current = "sat";
    const Ce = q(ee.clientX, ee.clientY);
    L({ ...mr(Ce), a: k.a }, !0);
  }, re = (ee) => {
    if ($.current !== "sat") return;
    ee.preventDefault();
    const Ce = q(ee.clientX, ee.clientY);
    L({ ...mr(Ce), a: k.a }, !0);
  }, V = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), $.current = "hue";
    const Ce = ae(ee.clientX, N.current);
    L(
      { ...mr({ ...w, h: Ce * 360 }), a: k.a },
      !0
    );
  }, Ee = (ee) => {
    if ($.current !== "hue") return;
    ee.preventDefault();
    const Ce = ae(ee.clientX, N.current);
    L(
      { ...mr({ ...w, h: Ce * 360 }), a: k.a },
      !0
    );
  }, Q = (ee) => {
    if (s) return;
    ee.preventDefault(), ee.currentTarget.setPointerCapture(ee.pointerId), $.current = "alpha";
    const Ce = ae(ee.clientX, x.current);
    L({ ...k, a: Ce }, !0);
  }, J = (ee) => {
    if ($.current !== "alpha") return;
    ee.preventDefault();
    const Ce = ae(ee.clientX, x.current);
    L({ ...k, a: Ce }, !0);
  }, X = () => {
    $.current = null;
  }, ge = H(
    (ee, Ce) => {
      const lt = {
        h: w.h,
        s: an(w.s + ee, 0, 1),
        v: an(w.v + Ce, 0, 1)
      };
      L({ ...mr(lt), a: k.a }, !0);
    },
    [w, k.a, L]
  ), te = H(
    (ee) => {
      const Ce = (w.h + ee + 360) % 360;
      L({ ...mr({ ...w, h: Ce }), a: k.a }, !0);
    },
    [w, k.a, L]
  ), ye = H(
    (ee) => {
      L({ ...k, a: an(k.a + ee, 0, 1) }, !0);
    },
    [k, L]
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
  }, $e = (ee, Ce) => {
    switch (ee.key) {
      case "ArrowLeft":
        ee.preventDefault(), Ce === "hue" ? te(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        ee.preventDefault(), Ce === "hue" ? te(6) : ye(0.05);
        break;
      case "Escape":
        ee.preventDefault(), z();
        break;
    }
  }, oe = (ee, Ce) => {
    if (ee === "hex") {
      const Xe = Qo(Ce);
      Xe && L({ ...Xe, a: k.a }, !0);
      return;
    }
    const lt = Ce.replace(/[^\d.]/g, ""), ze = Number.parseFloat(lt);
    if (Number.isNaN(ze)) return;
    if (ee === "a") {
      const Xe = lt.includes(".") ? an(ze, 0, 1) : an(ze / 100, 0, 1);
      L({ ...k, a: Xe }, !0);
      return;
    }
    const st = { r: 255, g: 255, b: 255 };
    L(
      { ...k, [ee]: an(ze, 0, st[ee]) },
      !0
    );
  }, De = () => {
    A && (E(A), M(null), I(!1), v?.(), f.current?.focus());
  };
  Oe(() => {
    if (!T) return;
    const ee = (Ce) => {
      m.current && !m.current.contains(Ce.target) && z();
    };
    return document.addEventListener("mousedown", ee), () => document.removeEventListener("mousedown", ee);
  }, [T, z]), Oe(() => {
    if (!T) return;
    const ee = (Ce) => {
      Ce.key === "Escape" && z();
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [T, z]);
  const me = u === "xs" ? Pe["dx-colorpicker-trigger-xs"] : u === "sm" ? Pe["dx-colorpicker-trigger-sm"] : u === "lg" ? Pe["dx-colorpicker-trigger-lg"] : u === "xl" ? Pe["dx-colorpicker-trigger-xl"] : Pe["dx-colorpicker-trigger"], qe = ua(k), Je = yv(k), Ge = { x: w.s * 100, y: (1 - w.v) * 100 }, Qe = w.h / 360 * 100, He = k.a * 100, gt = /* @__PURE__ */ D("div", { className: Pe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(w.s * 100),
        "aria-valuetext": `Saturation ${Math.round(w.s * 100)}%, value ${Math.round(w.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${w.h}, 100%, 50%)`
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
        "aria-valuenow": Math.round(w.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
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
        tabIndex: s ? -1 : p,
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
            onChange: (ee) => oe("hex", ee.target.value)
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
            onChange: (ee) => oe("r", ee.target.value)
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
            onChange: (ee) => oe("g", ee.target.value)
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
            onChange: (ee) => oe("b", ee.target.value)
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
        tabIndex: s ? -1 : p,
        style: { backgroundColor: ee },
        onClick: () => {
          const Ce = Qo(ee);
          i ? L({ ...Ce, a: k.a }, !1) : (M(null), E({ ...Ce, a: k.a }), I(!1), v?.(), f.current?.focus());
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
  return /* @__PURE__ */ D(
    "div",
    {
      ref: m,
      className: [
        Pe["dx-colorpicker"],
        T ? Pe["dx-colorpicker-open"] : null,
        l ? Pe["dx-colorpicker-invalid"] : null,
        b
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: f,
            type: "button",
            className: [Pe["dx-colorpicker-trigger"], me].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": T,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: p,
            onClick: j,
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
}, vv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Xt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function wv(e, t) {
  const n = Xt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function es(e) {
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
function fa(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const pa = {
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
}, kv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Nv = ["y", "M", "d", "H", "m", "s"];
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
    for (const l of kv)
      if (t.startsWith(l, i)) {
        a += pa[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if (Nv.includes(s)) {
      a += pa[s](e, r, n), i += 1;
      continue;
    }
    a += s, i += 1;
  }
  return a;
}
const $v = [
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
function Sv(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let s = null;
    for (const l of $v)
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
  const n = es(e);
  return n || Sv(e, t);
}
function Ov(e, t, n) {
  return t && Xt(e) < Xt(t) ? t : n && Xt(e) > Xt(n) ? n : e;
}
const Ev = ["hour", "minute", "second"];
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
    inline: p = !1,
    disabledDates: b,
    locale: h = "en-US",
    onChange: g,
    onValueChange: _,
    onOpen: v,
    onClose: m,
    disabled: f,
    readOnly: y,
    placeholder: N,
    ariaLabel: x,
    triggerLabel: C,
    clearLabel: $,
    tabIndex: S,
    className: T,
    onBlur: I,
    onKeyDown: A,
    ...M
  }, k) {
    const w = le(null), E = le(null), L = le(null), z = le(null), P = ct(), j = r !== void 0, [q, ae] = W(
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
    }), X = Ne(() => c ? es(c) : null, [c]), ge = Ne(() => s ? es(s) : null, [s]), te = Ne(
      () => new Set(b ?? []),
      [b]
    ), ye = Ne(() => {
      const F = j ? r ?? "" : q;
      return F ? Fr(F, i) : null;
    }, [r, q, j, i]), K = H(
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
        j || ae(F ? po(F, i, h) : "");
        const pe = F ? wv(F, l) : "";
        g?.(pe), _?.(pe);
      },
      [j, i, h, l, g, _]
    ), De = H(
      (F) => {
        E.current = F, typeof k == "function" ? k(F) : k && (k.current = F);
      },
      [k]
    ), me = H(() => {
      re(!1), Ee(null), m?.(), p || L.current?.focus();
    }, [p, m]), qe = H(() => {
      if (f) return;
      const F = ye ?? Yn();
      Ee(F), J($e(F)), re(!0), v?.();
    }, [f, ye, $e, v]), Je = H(() => {
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
    }, [V, oe, me]), Ce = H(() => {
      if (ie) return;
      const F = Fr(q, i);
      oe(F ? Ov(F, X, ge) : null);
    }, [ie, q, i, X, ge, oe]), lt = (F) => {
      const pe = F.target.value;
      j || ae(pe), ie && Ee(null);
    }, ze = (F) => {
      F.key === "Enter" ? (F.preventDefault(), ie ? V && (oe(V), me()) : Ce()) : F.key === "Escape" ? ie && (F.preventDefault(), me()) : F.key === "ArrowDown" && !ie ? (F.preventDefault(), qe()) : F.key === "Tab" && ie && re(!1), A?.(F);
    }, st = (F) => {
      Ce(), I?.(F);
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
          pe = zn(Q, -fa(Q)), F.preventDefault();
          break;
        case "End":
          pe = zn(Q, 6 - fa(Q)), F.preventDefault();
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
        w.current && !w.current.contains(pe.target) && me();
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
      j || ae(""), g?.(""), _?.(""), E.current?.focus();
    }, yt = ie && V ? po(V, i, h) : j ? r ? po(
      Fr(r, i) ?? Yn(),
      i,
      h
    ) : "" : q, it = j ? !!r : q.length > 0, ft = p || ie, Ve = { year: Q.year, month: Q.month }, Ct = new Date(Ve.year, Ve.month - 1, 1).getDay(), se = {
      year: Ve.year,
      month: Ve.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let F = 0; F < vv; F += 1)
      Le.push(zn(se, F - Ct));
    const wt = V ? Xt(V) : ye ? Xt(ye) : null, Mt = Xt(Yn()), bt = `${Ve.year}-${ln(Ve.month)}`, R = Ne(
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
    ), we = t === "xs" ? We["dx-datepicker-input--xs"] : t === "sm" ? We["dx-datepicker-input--sm"] : t === "lg" ? We["dx-datepicker-input--lg"] : t === "xl" ? We["dx-datepicker-input--xl"] : We["dx-datepicker-input--md"], fe = /* @__PURE__ */ D(
      "div",
      {
        className: We["dx-datepicker-calendar"],
        "aria-label": x ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: We["dx-datepicker-header"], children: [
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
          /* @__PURE__ */ D(
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
                          "aria-label": R.format(
                            new Date(Re.year, Re.month - 1, Re.day)
                          ),
                          className: [
                            We["dx-datepicker-day"],
                            et ? null : We["dx-datepicker-day--outside"],
                            Ie === Mt ? We["dx-datepicker-day--today"] : null,
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
          l && /* @__PURE__ */ D("div", { className: We["dx-datepicker-time"], children: [
            Ev.map((F) => /* @__PURE__ */ D("label", { className: We["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: We["dx-datepicker-time-label"], children: _o(F) }),
              /* @__PURE__ */ D("div", { className: We["dx-datepicker-time-control"], children: [
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
                /* @__PURE__ */ D("span", { className: We["dx-datepicker-time-buttons"], children: [
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
    return /* @__PURE__ */ D(
      "div",
      {
        ref: w,
        className: [
          We["dx-datepicker"],
          p ? We["dx-datepicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !p && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: De,
                type: "text",
                autoComplete: "off",
                value: yt,
                disabled: f,
                readOnly: y,
                placeholder: N,
                tabIndex: S,
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
                ...M
              }
            ),
            u && !f && it && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  We["dx-datepicker-clear"],
                  d ? We["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: Tt,
                children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: L,
                type: "button",
                className: [We["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": P,
                disabled: f,
                onClick: Je,
                children: /* @__PURE__ */ o(Te, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          ft && /* @__PURE__ */ o(
            "div",
            {
              id: P,
              role: p ? void 0 : "dialog",
              "aria-label": p ? void 0 : x ?? "Date picker",
              className: p ? void 0 : We["dx-datepicker-popup"],
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
  const [p, b] = W(e), h = H(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), g = H(
    (f) => {
      d?.(f), u?.(f);
    },
    [d, u]
  ), _ = H(
    (f) => {
      n || r || (g(f), b(f));
    },
    [n, r, g]
  ), v = (f) => {
    if (n || r) return;
    const y = p > 0 ? p : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), _(h(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), _(h(y - 1));
        break;
      case "Home":
        f.preventDefault(), _(1);
        break;
      case "End":
        f.preventDefault(), _(t);
        break;
    }
  }, m = Array.from({ length: t }, (f, y) => y + 1);
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
      onKeyDown: v,
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
        m.map((f) => {
          const y = f <= e, N = f === (e > 0 ? e : p);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${c} ${f}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                y ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => _(f),
              onFocus: () => b(f),
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
            f
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
  maxLabel: p = "Max",
  tabIndex: b = 0,
  className: h,
  onChange: g,
  onInput: _,
  onValueChange: v,
  onInputChange: m
}) => {
  const f = le(null), y = le(
    null
  ), [N, x] = W(null), C = N ?? e, $ = Ne(
    () => On(C, r, a),
    [C, r, a]
  ), S = Ne(
    () => On(c ? t : $, r, a),
    [c, t, $, r, a]
  ), T = Ne(
    () => On(c ? Math.max(n, S) : $, r, a),
    [c, n, S, $, r, a]
  ), I = H(
    (Q) => {
      const J = a - r;
      return J <= 0 ? 0 : (On(Q, r, a) - r) / J * 100;
    },
    [r, a]
  ), A = H(
    (Q, J) => {
      const X = f.current;
      if (!X) return r;
      const ge = X.getBoundingClientRect();
      let te;
      s === "vertical" ? te = 1 - (J - ge.top) / ge.height : te = (Q - ge.left) / ge.width;
      const ye = r + On(te, 0, 1) * (a - r);
      return i > 0 ? On(Math.round(ye / i) * i, r, a) : On(ye, r, a);
    },
    [r, a, i, s]
  ), M = H(
    (Q) => {
      typeof Q == "number" && x(Q), g?.(Q), v?.(Q);
    },
    [g, v]
  ), k = H(
    (Q) => {
      typeof Q == "number" && x(Q), _?.(Q), m?.(Q);
    },
    [_, m]
  ), w = H(
    (Q, J, X) => {
      const ge = A(J, X);
      let te;
      c ? Q === "min" ? te = { min: Math.min(ge, T), max: T } : te = { min: S, max: Math.max(ge, S) } : te = ge, k(te), y.current === null && M(te);
    },
    [c, A, S, T, k, M]
  ), E = H(
    (Q, J) => {
      const X = (i > 0 ? i : 1) * J;
      let ge;
      c ? Q === "min" ? ge = {
        min: On(S + X, r, T),
        max: T
      } : ge = {
        min: S,
        max: On(T + X, S, a)
      } : ge = On($ + X, r, a), M(ge);
    },
    [c, i, r, a, S, T, $, M]
  ), L = (Q, J) => {
    if (!l)
      switch (J.key) {
        case "ArrowLeft":
        case "ArrowDown":
          J.preventDefault(), E(Q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          J.preventDefault(), E(Q, 1);
          break;
        case "Home":
          J.preventDefault(), M(c ? Q === "min" ? { min: r, max: T } : { min: S, max: S } : r);
          break;
        case "End":
          J.preventDefault(), M(c ? Q === "min" ? { min: T, max: T } : { min: S, max: a } : a);
          break;
      }
  }, z = (Q, J) => {
    l || (J.preventDefault(), J.currentTarget.focus(), typeof J.currentTarget.setPointerCapture == "function" && J.currentTarget.setPointerCapture(J.pointerId), y.current = { key: Q, pointerId: J.pointerId }, w(Q, J.clientX, J.clientY));
  }, P = (Q) => {
    !y.current || y.current.pointerId !== Q.pointerId || (Q.preventDefault(), w(y.current.key, Q.clientX, Q.clientY));
  }, j = (Q) => {
    !y.current || y.current.pointerId !== Q.pointerId || (y.current = null, Q.preventDefault(), M(c ? { min: S, max: T } : $));
  }, [q, ae] = W(null), ie = I(S), re = I(T), V = c ? ie : 0, Ee = re;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        rr["dx-slider"],
        s === "vertical" ? rr["dx-slider-vertical"] : null,
        l ? rr["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: f, className: rr["dx-slider-track"], children: [
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
            "aria-valuenow": Math.round(S),
            "aria-orientation": s,
            "aria-label": c ? u : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && q === "max" ? -1 : b,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ie}% - 8px)` } : { left: `calc(${ie}% - 8px)` },
            onKeyDown: (Q) => L("min", Q),
            onPointerDown: (Q) => z("min", Q),
            onPointerMove: P,
            onPointerUp: j,
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
            "aria-label": p,
            "aria-disabled": l || void 0,
            tabIndex: l || q === "min" ? -1 : b,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${re}% - 8px)` } : { left: `calc(${re}% - 8px)` },
            onKeyDown: (Q) => L("max", Q),
            onPointerDown: (Q) => z("max", Q),
            onPointerMove: P,
            onPointerUp: j,
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
}, Tv = "-10675199.02:48:05.4775808", Cv = "10675199.02:48:05.4775808", Rn = 86400, jn = 3600, wn = 60, Ho = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, _a = {
  days: Rn,
  hours: jn,
  minutes: wn,
  seconds: 1
}, Mv = {
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
    if (!a.slice(1).some((p) => p != null)) return null;
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
function Av(e) {
  return e.days * Rn + e.hours * jn + e.minutes * wn + e.seconds;
}
function ha(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Rn);
  t %= Rn;
  const r = Math.floor(t / jn);
  t %= jn;
  const a = Math.floor(t / wn), i = Math.round(t % wn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function ts(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / wn) * wn : t === "hour" ? r = Math.round(r / jn) * jn : t === "day" && (r = Math.round(r / Rn) * Rn);
  let a = Math.round(r % wn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / wn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, u = Math.floor(l / 24), p = n ? "-" : "", b = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${p}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${p}${b}${gr(d)}`;
    case "minute":
      return `${p}${b}${gr(d)}:${gr(s)}`;
    default:
      return `${p}${b}${gr(d)}:${gr(s)}:${gr(a)}`;
  }
}
function ma(e, t = "second") {
  const n = Gr(e);
  return n === null ? "" : ts(n, t);
}
function Uo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const HS = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Tv,
    max: c = Cv,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: u = !0,
    showMinutes: p = !0,
    showSeconds: b = !0,
    allowClear: h = !1,
    inline: g = !1,
    onChange: _,
    onValueChange: v,
    onOpen: m,
    onClose: f,
    disabled: y,
    placeholder: N,
    ariaLabel: x,
    triggerLabel: C,
    clearLabel: $,
    tabIndex: S,
    className: T,
    onBlur: I,
    onKeyDown: A,
    ...M
  }, k) {
    const w = le(null), E = le(null), L = le(null), z = ct(), P = r !== void 0, [j, q] = W(
      () => a != null ? ma(a, l) : ""
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
      const se = P ? r ?? "" : j;
      return se ? Gr(se) : null;
    }, [r, j, P]), ye = H(
      (se) => {
        const Le = se === null ? "" : ts(se, l);
        P || q(Le), _?.(Le), v?.(Le);
      },
      [P, l, _, v]
    ), K = H(
      (se) => {
        se && re !== null && ye(re), ie(!1), V(null), Q(null), f?.(), g || L.current?.focus();
      },
      [g, re, ye, f]
    ), $e = H(() => {
      y || (V(te ?? 0), ie(!0), m?.());
    }, [y, te, m]), oe = H(() => {
      ae ? K(!1) : $e();
    }, [ae, K, $e]), De = H(
      (se, Le) => {
        V((wt) => {
          const bt = (wt ?? te ?? 0) + Le * ge * _a[se];
          return Uo(bt, J, X);
        });
      },
      [te, ge, J, X]
    ), me = H(
      (se) => {
        const Le = Ee?.[se];
        if (Le == null) return;
        const wt = Number.parseFloat(Le), Mt = Number.isNaN(wt) ? 0 : wt;
        V((bt) => {
          const R = bt ?? te ?? 0, Y = ha(R);
          Y[se] = Mt;
          const we = (R < 0 ? -1 : 1) * Av(Y);
          return Uo(we, J, X);
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
      const se = Gr(j);
      ye(se !== null ? Uo(se, J, X) : null);
    }, [ae, j, J, X, ye]), Qe = (se) => {
      P || q(se.target.value);
    }, He = (se) => {
      se.key === "Enter" ? (se.preventDefault(), ae ? K(!0) : Ge()) : se.key === "Escape" && ae ? (se.preventDefault(), K(!1)) : se.key === "ArrowDown" && !ae ? (se.preventDefault(), $e()) : se.key === "Tab" && ae && ie(!1), A?.(se);
    }, gt = (se) => {
      Ge(), I?.(se);
    }, ee = () => {
      P || q(""), _?.(""), v?.(""), E.current?.focus();
    };
    Oe(() => {
      if (!ae) return;
      const se = (Le) => {
        w.current && !w.current.contains(Le.target) && K(!1);
      };
      return document.addEventListener("mousedown", se), () => document.removeEventListener("mousedown", se);
    }, [ae, K]), Oe(() => {
      if (!ae) return;
      const se = (Le) => {
        Le.key === "Escape" && K(!1);
      };
      return document.addEventListener("keydown", se), () => document.removeEventListener("keydown", se);
    }, [ae, K]), Oe(() => {
      if (g && re !== null) {
        const se = te;
        (se === null || Math.abs(re - se) > 1e-9) && ye(re);
      }
    }, [g, re, te, ye]);
    const Ce = H(
      (se) => {
        E.current = se, typeof k == "function" ? k(se) : k && (k.current = se);
      },
      [k]
    ), lt = P ? r ? ma(r, l) : "" : j, ze = P ? !!r : j.length > 0, st = g || ae, Xe = re ?? te ?? 0, Tt = ha(Xe), yt = Mv[l], ft = ["days", "hours", "minutes", "seconds"].filter(
      (se) => _a[se] >= yt && (se === "days" ? d : se === "hours" ? u : se === "minutes" ? p : b)
    ), Ve = t === "xs" ? _t["dx-timespanpicker-input--xs"] : t === "sm" ? _t["dx-timespanpicker-input--sm"] : t === "lg" ? _t["dx-timespanpicker-input--lg"] : t === "xl" ? _t["dx-timespanpicker-input--xl"] : _t["dx-timespanpicker-input--md"], Ct = /* @__PURE__ */ D("div", { className: _t["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-demos"], "aria-live": "polite", children: ts(Xe, l) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-units"], children: ft.map((se) => /* @__PURE__ */ D("label", { className: _t["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: _t["dx-timespanpicker-unit-label"], children: Ho[se] }),
        /* @__PURE__ */ D("span", { className: _t["dx-timespanpicker-unit-control"], children: [
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
          /* @__PURE__ */ D("span", { className: _t["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ho[se].toLowerCase()}`,
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
                "aria-label": `Decrease ${Ho[se].toLowerCase()}`,
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
                ref: Ce,
                type: "text",
                autoComplete: "off",
                value: lt,
                disabled: y,
                placeholder: N,
                tabIndex: S,
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
                ...M
              }
            ),
            h && !y && ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _t["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
                onClick: ee,
                children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: L,
                type: "button",
                className: [_t["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
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
              role: g ? void 0 : "dialog",
              "aria-label": x ?? "Time span picker",
              className: g ? void 0 : _t["dx-timespanpicker-popup"],
              children: Ct
            }
          )
        ]
      }
    );
  }
), Dv = "_wrapper_ou9x5_1", Iv = "_cells_ou9x5_8", zv = "_cell_ou9x5_8", Lv = "_invalid_ou9x5_63", Pv = "_live_ou9x5_73", or = {
  wrapper: Dv,
  cells: Iv,
  cell: zv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Lv,
  live: Pv
};
function ga(e) {
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
    className: p,
    "aria-label": b
  }, h) {
    const g = ct(), _ = n !== void 0, [v, m] = W(ga(r).join("")), f = _ ? ga(n).join("") : v, y = Array.from({ length: t }, (M, k) => f[k] ?? ""), N = le([]), [x, C] = W(""), $ = (M) => {
      _ || m(M), a?.(M);
    }, S = (M) => {
      const k = N.current[M];
      k && !k.disabled && (k.focus(), k.select());
    }, T = (M, k) => {
      const w = k.replace(/\D/g, "").slice(-1), E = f.split("");
      if (w) {
        E[M] = w;
        const L = E.join("").slice(0, t);
        $(L), L.length < t ? S(M + 1) : u && C("Code complete");
      }
    }, I = (M, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), f[M]) {
          const w = f.split("");
          w[M] = "", $(w.join(""));
        } else if (M > 0) {
          const w = f.split("");
          w[M - 1] = "", $(w.join("")), S(M - 1);
        }
      } else k.key === "ArrowLeft" && M > 0 ? (k.preventDefault(), S(M - 1)) : k.key === "ArrowRight" && M < t - 1 ? (k.preventDefault(), S(M + 1)) : k.key === "Home" ? (k.preventDefault(), S(0)) : k.key === "End" && (k.preventDefault(), S(t - 1));
    }, A = (M, k) => {
      k.preventDefault();
      const w = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!w) return;
      const E = f.split("");
      let L = 0;
      for (let P = 0; P < w.length && M + P < t; P++)
        E[M + P] = w[P] ?? "", L++;
      const z = E.join("");
      $(z), z.length >= t ? u && C("Code complete") : S(M + L);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [or.wrapper, p].filter(Boolean).join(" "),
        role: "group",
        "aria-label": b ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [or.cells, or[c]].join(" "), children: y.map((M, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (w) => {
                N.current[k] = w, k === 0 && h && (typeof h == "function" ? h(w) : h.current = w);
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
              children: x
            }
          )
        ]
      }
    );
  }
), Rv = "_wrapper_6lcd5_1", jv = "_header_6lcd5_7", Bv = "_label_6lcd5_15", Fv = "_clear_6lcd5_22", Hv = "_canvas_6lcd5_53", Uv = "_disabled_6lcd5_69", yr = {
  wrapper: Rv,
  header: jv,
  label: Bv,
  clear: Fv,
  canvas: Hv,
  disabled: Uv
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
    className: p
  }, b) {
    const h = le(null), g = le(!1), _ = le(!1), v = le({ x: 0, y: 0 });
    Oe(() => {
      const $ = h.current;
      if (!$) return;
      const S = window.devicePixelRatio || 1, T = Math.round((l ?? $.clientWidth) * S), I = Math.round(d * S);
      ($.width !== T || $.height !== I) && ($.width = T, $.height = I);
      const A = $.getContext("2d");
      if (!A) return;
      A.setTransform(S, 0, 0, S, 0, 0), A.lineWidth = i, A.strokeStyle = a, A.lineCap = "round", A.lineJoin = "round";
      const M = t ?? n;
      if (M) {
        const k = new Image();
        k.onload = () => {
          A.drawImage(k, 0, 0, $.clientWidth, d);
        }, k.src = M;
      }
    }, [t, n, a, i, l, d]);
    const m = () => {
      const $ = h.current;
      if (!$) return;
      const S = $.toDataURL("image/png");
      r?.(S);
    }, f = () => {
      const $ = h.current;
      if (!$) return;
      const S = $.getContext("2d");
      S && S.clearRect(0, 0, $.width, $.height), r?.("");
    };
    ko(b, () => ({
      clear: f,
      toDataURL: ($ = "image/png", S) => h.current?.toDataURL($, S) ?? ""
    }));
    const y = ($) => {
      const S = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - S.left, y: $.clientY - S.top };
    }, N = ($) => {
      u || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), g.current = !0, _.current = !1, v.current = y($));
    }, x = ($) => {
      if (!g.current) return;
      $.preventDefault();
      const S = $.currentTarget.getContext("2d");
      if (!S) return;
      const T = y($);
      S.beginPath(), S.moveTo(v.current.x, v.current.y), S.lineTo(T.x, T.y), S.stroke(), v.current = T, _.current = !0;
    }, C = ($) => {
      g.current && ($.preventDefault(), g.current = !1, _.current && m());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          yr.wrapper,
          p,
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
                onClick: f,
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
              onPointerUp: C,
              onPointerCancel: C
            }
          )
        ]
      }
    );
  }
), Wv = "_wrapper_dsvd2_1", qv = "_trigger_dsvd2_7", Kv = "_list_dsvd2_35", Gv = "_row_dsvd2_44", Vv = "_name_dsvd2_59", Yv = "_size_dsvd2_68", Xv = "_progress_dsvd2_74", Zv = "_fill_dsvd2_82", Jv = "_status_dsvd2_99", Qv = "_remove_dsvd2_106", En = {
  wrapper: Wv,
  trigger: qv,
  list: Kv,
  row: Gv,
  name: Vv,
  size: Yv,
  progress: Xv,
  fill: Zv,
  status: Jv,
  remove: Qv
};
function ya(e) {
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
  onProgress: p,
  onComplete: b,
  onError: h
}, g) {
  const _ = le(null), [v, m] = W([]), f = le(/* @__PURE__ */ new Map()), y = (S, T) => {
    m(
      (I) => I.map((A) => A.file.name === S ? { ...A, ...T } : A)
    );
  }, N = (S) => {
    if (!t) return;
    const T = new XMLHttpRequest();
    f.current.set(S.file.name, T);
    const I = new FormData();
    if (I.append(r, S.file), T.upload.addEventListener("progress", (A) => {
      if (!A.lengthComputable) return;
      const M = Math.round(A.loaded / A.total * 100);
      y(S.file.name, { state: "uploading", progress: M }), p?.(S.file.name, M);
    }), T.addEventListener("load", () => {
      T.status >= 200 && T.status < 300 ? (y(S.file.name, { state: "complete", progress: 100 }), b?.(S.file.name)) : (y(S.file.name, {
        state: "error",
        message: `HTTP ${T.status}`
      }), h?.(S.file.name, `HTTP ${T.status}`));
    }), T.addEventListener("error", () => {
      y(S.file.name, { state: "error", message: "Network error" }), h?.(S.file.name, "Network error");
    }), i)
      for (const [A, M] of Object.entries(i))
        T.setRequestHeader(A, M);
    T.open("POST", t), T.send(I), y(S.file.name, { state: "uploading", progress: 0 });
  }, x = (S) => {
    if (!S) return;
    const T = [...S], I = [];
    let A = Math.max(0, s - v.length);
    for (const k of T) {
      if (l != null && k.size > l) {
        h?.(
          k.name,
          `File too large (maximum ${ya(l)})`
        );
        continue;
      }
      if (A <= 0) {
        h?.(k.name, `Too many files (maximum ${s})`);
        continue;
      }
      A -= 1, I.push(k);
    }
    const M = I.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    m((k) => [...k, ...M]), _.current && (_.current.value = ""), a && M.forEach(N);
  }, C = (S) => {
    f.current.get(S)?.abort(), f.current.delete(S), m((I) => I.filter((A) => A.file.name !== S));
  }, $ = u ?? /* @__PURE__ */ D(
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
  return ko(g, () => ({
    open: () => _.current?.click(),
    upload: () => v.forEach((S) => S.state === "pending" ? N(S) : null)
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
        onChange: (S) => x(S.target.files)
      }
    ),
    !u && v.length > 0 && /* @__PURE__ */ o("ul", { className: En.list, children: v.map(({ file: S, state: T, progress: I, message: A }) => /* @__PURE__ */ D(
      "li",
      {
        className: En.row,
        "data-state": T,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: En.name, children: S.name }),
          /* @__PURE__ */ o("span", { className: En.size, children: ya(S.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: En.progress,
              role: "progressbar",
              "aria-label": `${S.name} upload progress`,
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
              "aria-label": `Remove ${S.name}`,
              onClick: () => C(S.name),
              children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
            }
          )
        ]
      },
      S.name
    )) })
  ] });
}), ew = "_zone_nl0bz_1", tw = "_dragging_nl0bz_23", nw = "_caption_nl0bz_28", rw = "_browse_nl0bz_40", ow = "_disabled_nl0bz_67", Hr = {
  zone: ew,
  dragging: tw,
  caption: nw,
  browse: rw,
  disabled: ow
};
function sw(e, t) {
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
    const u = le(null), [p, b] = W(!1), h = (f) => {
      if (!f || f.length === 0) return;
      const y = [...f].filter((N) => sw(N, t ?? ""));
      y.length !== 0 && r?.(y);
    }, g = (f) => {
      s || (f.preventDefault(), b(!0));
    }, _ = (f) => {
      s || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", b(!0));
    }, v = (f) => {
      s || f.currentTarget.contains(f.relatedTarget) || b(!1);
    }, m = (f) => {
      s || (f.preventDefault(), b(!1), h(f.dataTransfer.files));
    };
    return ko(d, () => ({
      open: () => u.current?.click()
    })), // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props -- file-drop target; keyboard users pick files via the browse control; aria-disabled is the only AT-visible disabled signal on a non-form region
    /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": s || void 0,
        className: [
          Hr.zone,
          p ? Hr.dragging : null,
          s ? Hr.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: g,
        onDragOver: _,
        onDragLeave: v,
        onDrop: m,
        children: [
          /* @__PURE__ */ o("p", { className: Hr.caption, children: p ? i : a }),
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
              onChange: (f) => {
                h(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), aw = "_root_1a92d_1", lw = "_menubar_1a92d_5", iw = "_horizontal_1a92d_15", cw = "_vertical_1a92d_20", dw = "_itemWrapper_1a92d_25", uw = "_item_1a92d_25", fw = "_disabled_1a92d_61", pw = "_icon_1a92d_68", _w = "_text_1a92d_75", hw = "_caret_1a92d_79", mw = "_hasChildren_1a92d_85", gw = "_submenu_1a92d_94", yw = "_submenuItem_1a92d_118", bw = "_flyout_1a92d_155", xw = "_hamburger_1a92d_175", vw = "_responsive_1a92d_198", ww = "_mobileOpen_1a92d_207", mt = {
  root: aw,
  menubar: lw,
  horizontal: iw,
  vertical: cw,
  itemWrapper: dw,
  item: uw,
  disabled: fw,
  icon: pw,
  text: _w,
  caret: hw,
  hasChildren: mw,
  submenu: gw,
  submenuItem: yw,
  flyout: bw,
  hamburger: xw,
  responsive: vw,
  mobileOpen: ww
}, xo = cr(null);
function kw(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Nw(e, t, n, r, a) {
  const [i, c] = W(n), s = e ? t ?? !1 : i, l = H(
    (p) => {
      e || c(p), r?.(p);
    },
    [e, r]
  ), [d, u] = W(a);
  return a !== d && (u(a), a > 0 && !e && c(!1)), Oe(() => {
    a > 0 && r?.(!1);
  }, [a]), [s, l];
}
function $w({
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
  return qt(e) && e.type === Ga;
}
function ds({
  itemKey: e,
  props: t
}) {
  const n = Bn(xo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Ne(
    () => Zr.toArray(t.children).filter(qt),
    [t.children]
  ), d = l.length > 0, u = !!c, p = t.open !== void 0, [b, h] = Nw(
    p,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, _ = le(0), m = (g && !p ? n.openKey === e : null) ?? b, f = H(
    (re) => {
      g && !p ? n.setOpenKey(re ? e : null) : (h(re), g && n.setOpenKey(null));
    },
    [g, p, n, e, h]
  ), [, y] = W(0);
  Oe(() => {
    if (!i) return;
    const re = () => y((V) => V + 1);
    return window.addEventListener("hashchange", re), () => window.removeEventListener("hashchange", re);
  }, [i]);
  const N = i && !d ? kw(i, t.match) : !1, x = !u && (n.activeKey === e || n.activeKey == null && n.defaultStopKey === e), C = () => n.setActiveKey(e), $ = H(
    (re) => {
      if (u) {
        re.preventDefault();
        return;
      }
      const V = { text: r, value: a, path: i };
      [n.emit(V), t.onClick?.(V)].includes(!1) && re.preventDefault(), n.closeAll();
    },
    [u, r, a, i, n, t]
  ), S = H(() => {
    if (!u) {
      if (m && (Date.now() - _.current < 600 || !n.clickToOpen)) {
        _.current = 0;
        return;
      }
      f(!m);
    }
  }, [u, m, f, n.clickToOpen]), T = H(() => {
    !d || u || n.clickToOpen || (_.current = Date.now(), f(!0));
  }, [d, u, n.clickToOpen, f]), I = H(() => {
    n.clickToOpen || f(!1);
  }, [n.clickToOpen, f]), A = `${n.baseId}-submenu-${e}`, [M, k] = W(null), [w, E] = W(null), L = Ne(() => {
    const re = l.findIndex(
      (V) => vo(V) && !V.props.disabled
    );
    return re >= 0 ? `${e}-${re}` : null;
  }, [l, e]), [z, P] = W(n.closeSignal);
  n.closeSignal !== z && (P(n.closeSignal), n.closeSignal > 0 && k(null));
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
      setActiveKey: E,
      defaultStopKey: L
    }),
    [n, M, w, L]
  ), q = d ? /* @__PURE__ */ o("span", { className: mt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Te,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, ae = s ?? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ o(
      $w,
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
      )?.querySelector('[role="menuitem"]')?.focus()) : (V.key === "ArrowLeft" || V.key === "Escape") && (V.preventDefault(), V.stopPropagation(), f(!1));
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
              "aria-expanded": m,
              "aria-controls": A,
              tabIndex: x ? 0 : -1,
              disabled: u,
              className: [
                mt.item,
                u ? mt.disabled : null,
                mt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: S,
              onFocus: C,
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
                n.flyout && !g ? mt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: re,
              children: /* @__PURE__ */ o(xo.Provider, { value: j, children: l.map(
                (V, Ee) => vo(V) ? /* @__PURE__ */ o(
                  ds,
                  {
                    itemKey: `${e}-${Ee}`,
                    props: V.props
                  },
                  `${e}-${Ee}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ss, { children: V }, `${e}-custom-${Ee}`)
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
    onFocus: C,
    "data-dx-menu-item": "",
    className: [mt.submenuItem, u ? mt.disabled : null].filter(Boolean).join(" "),
    onClick: $
  };
  return i && !u ? /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...ie, children: ae }) }) : /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: u, ...ie, children: ae }) });
}
function Ga(e) {
  if (!Bn(xo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(ds, { itemKey: e.text, props: e });
}
function Sw({
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
  const p = ct(), b = le(null), h = le(null), [g, _] = W(null), [v, m] = W(null), [f, y] = W(0), [N, x] = W(!1), C = le(null), $ = H(
    (k) => i?.(k),
    [i]
  ), S = H(() => {
    _(null), y((k) => k + 1);
  }, []);
  Oe(() => {
    if (g == null) return;
    const k = (w) => {
      b.current && !b.current.contains(w.target) && S();
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [g, S]), Oe(() => {
    C.current != null && g === C.current && (document.getElementById(`${p}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), C.current = null);
  }, [g, p]);
  const T = Ne(
    () => Zr.toArray(e).filter(qt),
    [e]
  ), I = Ne(() => {
    const k = T.findIndex(
      (w) => vo(w) && !w.props.disabled
    );
    return k >= 0 ? String(k) : null;
  }, [T]), A = Ne(
    () => ({
      baseId: p,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: f,
      emit: $,
      closeAll: S,
      openKey: g,
      setOpenKey: _,
      activeKey: v,
      setActiveKey: m,
      defaultStopKey: I
    }),
    [
      p,
      n,
      t,
      f,
      $,
      S,
      g,
      v,
      I
    ]
  ), M = (k) => {
    const w = h.current;
    if (!w) return;
    const E = Array.from(w.children).map((P) => P.querySelector('[role="menuitem"]')).filter(
      (P) => P != null && !P.hasAttribute("disabled") && P.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const P = document.getElementById(`${p}-submenu-${g}`);
      if (P) {
        const j = Array.from(
          P.querySelectorAll('[role="menuitem"]')
        ).filter(
          (ie) => ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
        ), q = document.activeElement, ae = q ? j.indexOf(q) : -1;
        if (k.key === "ArrowDown") {
          k.preventDefault(), (ae === -1 ? j[0] : j[(ae + 1) % j.length])?.focus();
          return;
        }
        if (k.key === "ArrowUp") {
          k.preventDefault(), (ae === -1 ? j[j.length - 1] : j[(ae - 1 + j.length) % j.length])?.focus();
          return;
        }
        if (k.key === "Escape") {
          k.preventDefault(), S(), c?.(), w.querySelector(`[data-index="${g}"]`)?.focus();
          return;
        }
        if (k.key === "Enter" || k.key === " ") return;
      }
      if (k.key === "Escape") {
        k.preventDefault(), S(), c?.();
        return;
      }
    }
    const L = document.activeElement, z = L ? E.indexOf(L) : -1;
    if (k.key === "ArrowRight") {
      if (k.preventDefault(), E.length === 0) return;
      E[z === -1 ? 0 : (z + 1) % E.length]?.focus();
      return;
    }
    if (k.key === "ArrowLeft") {
      if (k.preventDefault(), E.length === 0) return;
      E[z === -1 ? E.length - 1 : (z - 1 + E.length) % E.length]?.focus();
      return;
    }
    if (a && (k.key === "ArrowDown" || k.key === "ArrowUp")) {
      if (k.preventDefault(), E.length === 0) return;
      (k.key === "ArrowDown" ? E[z === -1 ? 0 : (z + 1) % E.length] : E[z === -1 ? E.length - 1 : (z - 1 + E.length) % E.length])?.focus();
      return;
    }
    if (k.key === "ArrowDown") {
      if (z >= 0) {
        const P = L?.getAttribute("data-index");
        if (P == null) return;
        w.querySelector(
          `[data-index="${P}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (k.preventDefault(), C.current = P, _(P));
      }
      return;
    }
    if (k.key === "Home") {
      k.preventDefault(), E[0]?.focus();
      return;
    }
    if (k.key === "End") {
      k.preventDefault(), E[E.length - 1]?.focus();
      return;
    }
    if (k.key.length === 1 && !k.ctrlKey && !k.metaKey) {
      const P = E.map((q) => q.textContent ?? ""), j = z === -1 ? 0 : (z + 1) % E.length;
      for (let q = 0; q < E.length; q++) {
        const ae = (j + q) % E.length;
        if (P[ae]?.toLowerCase().startsWith(k.key.toLowerCase())) {
          k.preventDefault(), E[ae]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: b,
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
            onClick: () => x((k) => !k),
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
            onKeyDown: M,
            children: /* @__PURE__ */ o(xo.Provider, { value: A, children: T.map(
              (k, w) => vo(k) ? /* @__PURE__ */ o(
                ds,
                {
                  itemKey: String(w),
                  props: k.props
                },
                `top-${w}`
              ) : /* @__PURE__ */ o(ss, { children: k }, `top-custom-${w}`)
            ) })
          }
        )
      ]
    }
  );
}
const Ow = "_popup_18kyn_1", Ew = "_menu_18kyn_22", ns = {
  popup: Ow,
  menu: Ew
}, Va = cr(null);
function GS() {
  const e = Bn(Va);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Ya(e) {
  return e.map((t, n) => {
    const { children: r, ...a } = t;
    return /* @__PURE__ */ o(Ga, { ...a, children: r ? Ya(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Tw({ state: e, onClose: t }) {
  const n = le(null), [r, a] = W({ left: e.x, top: e.y });
  Wo(() => {
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
      className: ns.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: ns.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Sw,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Ya(e.options.items ?? [])
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
      const p = document.querySelector(`.${ns.popup}`);
      p && !p.contains(u.target) && r();
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
  return /* @__PURE__ */ D(Va.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Tw, { state: t, onClose: r }) : null
  ] });
}
const Cw = "_root_rgcia_1", Mw = "_list_rgcia_9", Aw = "_item_rgcia_14", Dw = "_trigger_rgcia_18", Iw = "_disabled_rgcia_45", zw = "_expanded_rgcia_52", Lw = "_selected_rgcia_56", Pw = "_icon_rgcia_61", Rw = "_text_rgcia_72", jw = "_caret_rgcia_79", Bw = "_open_rgcia_86", Fw = "_submenu_rgcia_90", Hw = "_iconOnly_rgcia_172", Uw = "_stacked_rgcia_201", jt = {
  root: Cw,
  list: Mw,
  item: Aw,
  trigger: Dw,
  disabled: Iw,
  expanded: zw,
  selected: Lw,
  icon: Pw,
  text: Rw,
  caret: jw,
  open: Bw,
  submenu: Fw,
  iconOnly: Hw,
  stacked: Uw
}, wo = cr(null);
function Ww() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function qw(e, t) {
  const n = Ww(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Kw({
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
function us({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Bn(wo);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = Ne(
    () => Zr.toArray(n.children).filter(qt),
    [n.children]
  ), d = l.length > 0, u = !!s, p = n.match ?? r.match, b = n.expanded !== void 0, [h, g] = W(
    n.defaultExpanded ?? !1
  ), _ = b ? n.expanded ?? !1 : h, v = H(
    (j) => {
      b || g(j), n.onExpandedChange?.(j);
    },
    [b, n]
  );
  Oe(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && v(!1);
  }, [r.collapseSignal]);
  const m = n.onSelectedChange !== void 0 || n.selected !== void 0, [f, y] = W(
    n.defaultSelected ?? !1
  ), N = !m && c ? qw(c, p) : !1, x = n.selected ?? (m ? f : N || f), [, C] = W(0);
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
        v(!0), r.openAncestors();
      }
    }),
    [r, v]
  );
  Oe(() => {
    N && t.length > 0 && $.openAncestors();
  }, []);
  const S = H(
    (j) => {
      if (u) {
        j.preventDefault();
        return;
      }
      const q = { text: a, value: i, path: c };
      [r.emit(q), n.onClick?.(q)].includes(!1) && j.preventDefault(), m || y(!0), n.onSelectedChange?.(!0);
    },
    [u, a, i, c, r, n, m]
  ), T = H(() => {
    u || (_ || r.notifyOpened(e, t), v(!_));
  }, [u, _, r, e, t, v]), I = H(
    (j) => {
      j.key === "Enter" || j.key === " " ? (j.preventDefault(), d ? T() : j.target.click()) : j.key === "Escape" && _ ? (j.preventDefault(), v(!1)) : j.key === "ArrowRight" && d && !_ ? (j.preventDefault(), r.notifyOpened(e, t), v(!0)) : j.key === "ArrowLeft" && _ && (j.preventDefault(), v(!1));
    },
    [d, T, _, v, r, e, t]
  ), A = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [jt.caret, _ ? jt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, M = n.template ?? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ o(
      Kw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: jt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: jt.text, children: a }),
    A
  ] }), k = `${r.baseId}-panel-${e}`, w = `${r.baseId}-trigger-${e}`, E = [
    jt.trigger,
    u ? jt.disabled : null,
    _ ? jt.expanded : null,
    x ? jt.selected : null
  ].filter(Boolean).join(" "), L = r.level > 0 ? "menuitem" : void 0, z = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: w,
      role: L,
      "aria-expanded": _,
      "aria-controls": k,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: E,
      onClick: T,
      onKeyDown: I,
      children: M
    }
  ) : c && !u ? /* @__PURE__ */ o(
    "a",
    {
      id: w,
      role: L,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": x ? "page" : void 0,
      tabIndex: 0,
      className: E,
      onClick: S,
      onKeyDown: I,
      children: M
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: w,
      role: L,
      "aria-current": x ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: E,
      onClick: S,
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
      children: /* @__PURE__ */ o(wo.Provider, { value: $, children: l.map((j, q) => /* @__PURE__ */ o(
        us,
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
        z,
        P
      ]
    }
  );
}
function YS(e) {
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(us, { itemKey: e.text, ancestors: [], props: e });
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
  const u = ct(), [p, b] = W(0), h = le(/* @__PURE__ */ new Set()), g = H(
    (N) => c?.(N),
    [c]
  ), _ = H(
    (N, x) => {
      t || (h.current = /* @__PURE__ */ new Set([N, ...x]), b((C) => C + 1));
    },
    [t]
  ), v = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (x) => !x.hasAttribute("disabled") && x.getAttribute("aria-disabled") !== "true" && x.closest("[hidden]") == null
  ), m = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const x = N.target, C = v(N.currentTarget), $ = C.indexOf(x);
        if ($ === -1) return;
        N.preventDefault();
        const S = N.key === "ArrowDown" ? 1 : -1;
        C[($ + S + C.length) % C.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const x = v(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? x[0] : x[x.length - 1])?.focus();
      }
    }
  }, f = Ne(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: a,
      level: 0,
      collapseSignal: p,
      collapseSkipRef: h,
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
      p,
      g,
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
        children: /* @__PURE__ */ o("div", { className: jt.list, role: "presentation", children: /* @__PURE__ */ o(wo.Provider, { value: f, children: y.map((N, x) => /* @__PURE__ */ o(
          us,
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
const Gw = "_root_5numg_1", Vw = "_trigger_5numg_7", Yw = "_defaultTrigger_5numg_40", Xw = "_avatar_5numg_46", Zw = "_menu_5numg_58", Jw = "_item_5numg_74", Qw = "_disabled_5numg_88", e2 = "_active_5numg_97", t2 = "_icon_5numg_107", n2 = "_text_5numg_114", Tn = {
  root: Gw,
  trigger: Vw,
  defaultTrigger: Yw,
  avatar: Xw,
  menu: Zw,
  item: Jw,
  disabled: Qw,
  active: e2,
  icon: t2,
  text: n2
};
function ZS({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = ct(), c = `${i}-menu`, s = le(null), l = le(null), [d, u] = W(!1), [p, b] = W(-1), h = t, g = e.map((x, C) => x.disabled ? -1 : C).filter((x) => x >= 0), _ = H(
    (x) => {
      if (x.disabled) return;
      const C = {
        text: x.text,
        path: x.path
      };
      n?.(C), u(!1), l.current?.focus();
    },
    [n]
  ), v = H(() => {
    b(g[0] ?? -1), u(!0);
  }, [g]), m = H(() => {
    u(!1), b(-1), l.current?.focus();
  }, []);
  Oe(() => {
    if (!d) return;
    const x = (C) => {
      s.current && !s.current.contains(C.target) && (u(!1), b(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [d]), Oe(() => {
    if (!d) return;
    const x = (C) => {
      C.key === "Escape" && (C.preventDefault(), m());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [d, m]);
  const f = (x) => {
    if (g.length === 0) return;
    const C = g.indexOf(p), $ = C === -1 ? 0 : (C + x + g.length) % g.length, S = g[$];
    S != null && b(S);
  }, y = (x) => {
    if (!d) {
      (x.key === "ArrowDown" || x.key === "Enter" || x.key === " ") && (x.preventDefault(), v());
      return;
    }
    switch (x.key) {
      case "Escape":
        x.preventDefault(), m();
        break;
      case "ArrowDown":
        x.preventDefault(), f(1);
        break;
      case "ArrowUp":
        x.preventDefault(), f(-1);
        break;
      case "Home":
        x.preventDefault(), g[0] != null && b(g[0]);
        break;
      case "End":
        x.preventDefault(), g[g.length - 1] != null && b(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), p >= 0) {
          const C = e[p];
          C && !C.disabled && _(C);
        }
        break;
      case "Tab":
        u(!1), b(-1);
        break;
    }
  }, N = (x) => {
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), f(1);
        break;
      case "ArrowUp":
        x.preventDefault(), f(-1);
        break;
      case "Home":
        x.preventDefault(), g[0] != null && b(g[0]);
        break;
      case "End":
        x.preventDefault(), g[g.length - 1] != null && b(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), p >= 0) {
          const C = e[p];
          C && !C.disabled && _(C);
        }
        break;
      case "Escape":
        x.preventDefault(), m();
        break;
      case "Tab":
        u(!1), b(-1);
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
            onClick: () => d ? m() : v(),
            onKeyDown: y,
            children: h ?? /* @__PURE__ */ D("span", { className: Tn.defaultTrigger, children: [
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
            "aria-activedescendant": p >= 0 ? `${i}-item-${p}` : void 0,
            className: Tn.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((x, C) => {
              const $ = !!x.disabled, S = C === p;
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
                      S ? Tn.active : null,
                      $ ? Tn.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => {
                      $ || _(x);
                    },
                    onMouseEnter: () => {
                      $ || b(C);
                    },
                    children: [
                      x.icon ? /* @__PURE__ */ o("span", { className: Tn.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: x.icon, size: "sm" }) }) : null,
                      /* @__PURE__ */ o("span", { className: Tn.text, children: x.text })
                    ]
                  },
                  `${x.text}-${C}`
                )
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const r2 = "_root_1o8i4_1", o2 = "_bottomRight_1o8i4_11", s2 = "_bottomLeft_1o8i4_16", a2 = "_topRight_1o8i4_21", l2 = "_topLeft_1o8i4_26", i2 = "_menu_1o8i4_50", c2 = "_itemWrapper_1o8i4_93", d2 = "_tooltip_1o8i4_99", u2 = "_main_1o8i4_121", f2 = "_mainIcon_1o8i4_149", p2 = "_mainOpen_1o8i4_154", _2 = "_item_1o8i4_93", h2 = "_disabled_1o8i4_186", m2 = "_itemIcon_1o8i4_193", Kt = {
  root: r2,
  bottomRight: o2,
  bottomLeft: s2,
  topRight: a2,
  topLeft: l2,
  menu: i2,
  itemWrapper: c2,
  tooltip: d2,
  main: u2,
  mainIcon: f2,
  mainOpen: p2,
  item: _2,
  disabled: h2,
  itemIcon: m2
};
function JS({
  items: e,
  position: t,
  icon: n = "add",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${ct()}-menu`, d = le(null), u = le(null), [p, b] = W(!1), h = H(
    (m) => {
      if (m.disabled) return;
      const f = { text: m.text, value: m.value };
      r?.(f), b(!1), u.current?.focus();
    },
    [r]
  );
  Oe(() => {
    if (!p) return;
    const m = (f) => {
      d.current && !d.current.contains(f.target) && b(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [p]), Oe(() => {
    if (!p) return;
    const m = (f) => {
      f.key === "Escape" && (b(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [p]);
  const g = c === "bottom-right" ? Kt.bottomRight : c === "bottom-left" ? Kt.bottomLeft : c === "top-right" ? Kt.topRight : Kt.topLeft, _ = (m) => {
    !p && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), b(!0)) : p && m.key === "Escape" && (m.preventDefault(), b(!1));
  }, v = (m) => {
    m.key === "Escape" && (m.preventDefault(), b(!1), u.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: d,
      className: [Kt.root, g, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        p ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            tabIndex: -1,
            "aria-label": a,
            className: Kt.menu,
            onKeyDown: v,
            children: e.map((m, f) => {
              const y = !!m.disabled;
              return /* @__PURE__ */ D("div", { className: Kt.itemWrapper, children: [
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
              ] }, `${m.text}-${f}`);
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
            "aria-expanded": p,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => b((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Kt.mainIcon, p ? Kt.mainOpen : null].filter(Boolean).join(" "),
                children: /* @__PURE__ */ o(Te, { icon: n, size: 24 })
              }
            )
          }
        )
      ]
    }
  );
}
const g2 = "_root_1eyur_1", y2 = "_list_1eyur_5", b2 = "_item_1eyur_15", x2 = "_link_1eyur_22", v2 = "_linkButton_1eyur_23", w2 = "_current_1eyur_24", k2 = "_disabled_1eyur_68", N2 = "_icon_1eyur_74", $2 = "_text_1eyur_81", S2 = "_separator_1eyur_85", ht = {
  root: g2,
  list: y2,
  item: b2,
  link: x2,
  linkButton: v2,
  current: w2,
  disabled: k2,
  icon: N2,
  text: $2,
  separator: S2
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
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
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
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D("span", { className: ht.current, "aria-current": "page", children: [
            c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: c.icon, size: "sm" }) }) : null,
            c.text
          ] }) : d ? /* @__PURE__ */ D(
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
          ) : c.path ? /* @__PURE__ */ D(
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
          ) : /* @__PURE__ */ D(
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
const O2 = "_link_tmy3k_1", E2 = {
  link: O2
}, eO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ D(ot, { children: [
    n != null && /* @__PURE__ */ o(Te, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [E2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: u, ...p } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: c,
        className: l,
        href: u,
        ...p,
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
}), T2 = "_root_dnkuu_1", C2 = "_list_dnkuu_5", M2 = "_item_dnkuu_15", A2 = "_connector_dnkuu_21", D2 = "_connectorCompleted_dnkuu_30", I2 = "_step_dnkuu_34", z2 = "_active_dnkuu_69", L2 = "_completed_dnkuu_75", P2 = "_circle_dnkuu_79", R2 = "_check_dnkuu_109", j2 = "_icon_dnkuu_114", B2 = "_number_dnkuu_119", F2 = "_text_dnkuu_124", Gt = {
  root: T2,
  list: C2,
  item: M2,
  connector: A2,
  connectorCompleted: D2,
  step: I2,
  active: z2,
  completed: L2,
  circle: P2,
  check: R2,
  icon: j2,
  number: B2,
  text: F2
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
  const p = a ?? i ?? !1, b = t ?? n, h = b !== void 0, [g, _] = W(() => Math.min(Math.max(0, b ?? r), Math.max(0, e.length - 1))), m = Math.min(
    Math.max(0, h ? b : g),
    Math.max(0, e.length - 1)
  ), f = le(null), y = H(
    (C) => {
      const $ = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      h || _($), (c ?? s ?? l)?.($);
    },
    [h, c, s, l, e.length]
  ), N = H(
    (C, $) => !!($.disabled || p && C > m + 1),
    [p, m]
  ), x = (C) => {
    const $ = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), S = document.activeElement, T = S ? $.indexOf(S) : -1;
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
        onKeyDown: x,
        children: /* @__PURE__ */ o("ol", { ref: f, className: Gt.list, children: e.map((C, $) => {
          const S = $ === m, T = $ < m, I = N($, C);
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
                "aria-current": S ? "step" : void 0,
                "aria-disabled": I ? "true" : void 0,
                disabled: I,
                tabIndex: I ? -1 : 0,
                className: [
                  Gt.step,
                  S ? Gt.active : null,
                  T ? Gt.completed : null,
                  I ? Gt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => {
                  I || y($);
                },
                children: [
                  /* @__PURE__ */ o("span", { className: Gt.circle, "aria-hidden": "true", children: T ? /* @__PURE__ */ o("span", { className: Gt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ o("span", { className: Gt.icon, children: /* @__PURE__ */ o(Te, { icon: C.icon, size: 14 }) }) : /* @__PURE__ */ o("span", { className: Gt.number, children: $ + 1 }) }),
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
const H2 = "_root_12hod_1", U2 = "_horizontal_12hod_13", W2 = "_vertical_12hod_17", q2 = "_pane_12hod_21", K2 = "_handle_12hod_31", G2 = "_handleHorizontal_12hod_51", V2 = "_handleVertical_12hod_57", Y2 = "_handleGrip_12hod_63", X2 = "_handleCollapseHint_12hod_75", Z2 = "_collapseBtn_12hod_79", J2 = "_collapseBtnCollapsed_12hod_109", pn = {
  root: H2,
  horizontal: U2,
  vertical: W2,
  pane: q2,
  handle: K2,
  handleHorizontal: G2,
  handleVertical: V2,
  handleGrip: Y2,
  handleCollapseHint: X2,
  collapseBtn: Z2,
  collapseBtnCollapsed: J2
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
  const d = e ?? t ?? "horizontal", u = d === "horizontal", p = le(null), b = H(() => {
    const E = n.length;
    if (E === 0) return [];
    const L = n.map((P) => P.size ? Ur(P.size, 100 / E) : 100 / E), z = L.reduce((P, j) => P + j, 0);
    return Math.abs(z - 100) > 0.01 && z > 0 ? L.map((P) => P / z * 100) : L;
  }, [n]), [h, g] = W(() => b()), [_, v] = W(
    () => n.map((E) => !!E.collapsed)
  ), m = le(h), [f, y] = W(n);
  n !== f && (y(n), v(n.map((E) => !!E.collapsed)));
  const N = H(
    () => n.map((E) => Ur(E.min, 0)),
    [n]
  ), x = H(
    () => n.map((E) => Ur(E.max, 100)),
    [n]
  ), C = H(
    (E, L) => {
      const z = { paneIndex: E, newSize: L, cancel: !1 };
      return (r ?? a)?.(z), !z.cancel;
    },
    [r, a]
  ), $ = H(
    (E, L) => {
      const z = { paneIndex: E, collapse: L, cancel: !1 };
      return (i ?? c)?.(z), !z.cancel;
    },
    [i, c]
  ), S = H(
    (E) => {
      const L = !_[E];
      $(E, L) && (L ? (m.current = [...h], v((z) => {
        const P = [...z];
        return P[E] !== void 0 && (P[E] = !0), P;
      }), g((z) => {
        const P = [...z], j = P[E] ?? 0, q = E < P.length - 1 ? E + 1 : E - 1;
        if (q >= 0 && q < P.length) {
          const ae = P[q] ?? 0;
          P[q] = ae + j, P[E] = 0;
        } else
          P[E] = 0;
        return P;
      })) : (v((z) => {
        const P = [...z];
        return P[E] !== void 0 && (P[E] = !1), P;
      }), g(() => {
        const z = [...m.current];
        return z.length !== n.length ? n.map(() => 100 / n.length) : z;
      })));
    },
    [_, h, n, $]
  ), T = le(
    null
  ), I = H(
    (E, L, z) => {
      const P = p.current;
      if (!P) return null;
      const j = P.getBoundingClientRect();
      let q;
      if (u) {
        if (j.width === 0) return null;
        q = (L - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        q = (z - j.top) / j.height * 100;
      }
      let ae = 0;
      for (let re = 0; re < E; re++) {
        const V = h[re];
        V !== void 0 && (ae += V);
      }
      return q - ae;
    },
    [u, h]
  ), A = (E, L) => {
    L.preventDefault();
    const z = L.currentTarget;
    z.focus(), typeof z.setPointerCapture == "function" && z.setPointerCapture(L.pointerId), T.current = { handleIndex: E, pointerId: L.pointerId };
  }, M = (E) => {
    if (!T.current || T.current.pointerId !== E.pointerId)
      return;
    E.preventDefault();
    const L = T.current.handleIndex, z = I(L, E.clientX, E.clientY);
    if (z == null) return;
    const P = N(), j = x(), q = P[L] ?? 0, ae = j[L] ?? 100, ie = L + 1, re = P[ie] ?? 0, V = j[ie] ?? 100, Ee = h[L] ?? 0, Q = h[ie] ?? 0, J = Ee + Q;
    if (J <= 0) return;
    let X = Ln(z, q, ae), ge = J - X;
    if (ge < re) {
      if (ge = re, X = J - ge, X < q || X > ae) return;
    } else if (ge > V && (ge = V, X = J - ge, X < q || X > ae))
      return;
    X = Ln(X, q, ae), ge = J - X, C(L, X) && g((te) => {
      const ye = [...te];
      return ye[L] = X, ye[ie] = ge, ye;
    });
  }, k = (E) => {
    !T.current || T.current.pointerId !== E.pointerId || (T.current = null);
  }, w = (E, L) => {
    const z = N(), P = x(), j = E, q = E + 1, ae = h[j] ?? 0, ie = h[q] ?? 0, re = ae + ie;
    let V = 0;
    const Ee = !!n[j]?.collapsible, Q = !!n[q]?.collapsible;
    if (u ? L.key === "ArrowLeft" ? V = -5 : L.key === "ArrowRight" && (V = 5) : L.key === "ArrowUp" ? V = -5 : L.key === "ArrowDown" && (V = 5), L.key === "Home") {
      L.preventDefault();
      let J = z[j] ?? 0, X = re - J;
      if (X = Ln(
        X,
        z[q] ?? 0,
        P[q] ?? 100
      ), J = re - X, J = Ln(J, z[j] ?? 0, P[j] ?? 100), !C(j, J)) return;
      g((ge) => {
        const te = [...ge];
        return te[j] = J, te[q] = X, te;
      });
      return;
    }
    if (L.key === "End") {
      L.preventDefault();
      let J = P[j] ?? 100;
      J = Math.min(J, re - (z[q] ?? 0));
      let X = re - J;
      if (X = Ln(
        X,
        z[q] ?? 0,
        P[q] ?? 100
      ), J = re - X, J = Ln(J, z[j] ?? 0, P[j] ?? 100), !C(j, J)) return;
      g((ge) => {
        const te = [...ge];
        return te[j] = J, te[q] = X, te;
      });
      return;
    }
    if ((L.key === "Enter" || L.key === " ") && (Ee || Q)) {
      L.preventDefault(), S(Ee ? j : q);
      return;
    }
    if (V !== 0) {
      L.preventDefault();
      let J = ae + V, X = re - J;
      const ge = z[j] ?? 0, te = P[j] ?? 100, ye = z[q] ?? 0, K = P[q] ?? 100;
      if (J = Ln(J, ge, te), X = re - J, (X < ye || X > K) && (X = Ln(X, ye, K), J = re - X, J = Ln(J, ge, te), X = re - J), !C(j, J)) return;
      g(($e) => {
        const oe = [...$e];
        return oe[j] = J, oe[q] = X, oe;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      className: [
        pn.root,
        u ? pn.horizontal : pn.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((E, L) => {
        const z = !!_[L], P = z ? 0 : h[L] ?? 100 / n.length, j = z ? { display: "none" } : u ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, q = Ur(E.min, 0), ae = Ur(E.max, 100), ie = L < n.length - 1, re = !!n[L + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": E.label ?? `Pane ${L + 1}`,
              className: pn.pane,
              style: j,
              "data-collapsed": z ? "true" : void 0,
              children: [
                z ? null : E.children,
                E.collapsible && !z ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Collapse pane ${L + 1}`,
                    "aria-expanded": !z,
                    onClick: () => S(L),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                E.collapsible && z ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Expand pane ${L + 1}`,
                    "aria-expanded": !z,
                    onClick: () => S(L),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          z && E.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: pn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${L + 1}`,
                "aria-expanded": "false",
                onClick: () => S(L),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          ie ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- focusable separator with arrow-key resize (handleSeparatorKeyDown); pointer drag is the mouse equivalent
            /* @__PURE__ */ D(
              "div",
              {
                role: "separator",
                "aria-orientation": d,
                "aria-valuemin": q,
                "aria-valuemax": ae,
                "aria-valuenow": Math.round(P),
                "aria-label": `Resize handle ${L + 1}`,
                tabIndex: z || _[L + 1] ? -1 : 0,
                className: [
                  pn.handle,
                  u ? pn.handleHorizontal : pn.handleVertical
                ].filter(Boolean).join(" "),
                onPointerDown: (V) => A(L, V),
                onPointerMove: M,
                onPointerUp: k,
                onKeyDown: (V) => w(L, V),
                children: [
                  /* @__PURE__ */ o("span", { className: pn.handleGrip, "aria-hidden": "true" }),
                  (E.collapsible || re) && /* @__PURE__ */ o(
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
        ] }, L);
      })
    }
  );
}
const Q2 = "_root_1w3wd_1", ek = "_list_1w3wd_5", tk = "_vertical_1w3wd_14", nk = "_horizontal_1w3wd_20", rk = "_item_1w3wd_28", ok = "_link_1w3wd_32", sk = "_active_1w3wd_57", br = {
  root: Q2,
  list: ek,
  vertical: tk,
  horizontal: nk,
  item: rk,
  link: ok,
  active: sk
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
  const d = t ?? n, u = r ?? a ?? "vertical", [p, b] = W(
    () => e[0]?.selector ?? null
  ), h = le(p);
  Oe(() => {
    h.current = p;
  });
  const g = H(
    (_, v) => {
      if (b(_.selector), (i ?? c)?.({ text: _.text, selector: _.selector }), v) {
        try {
          v.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          v.scrollIntoView();
        }
        const f = v;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [i, c]
  );
  return Oe(() => {
    if (e.length === 0) return;
    const v = (() => {
      if (d) {
        const x = document.querySelector(d);
        if (x) return x;
      }
      return window;
    })();
    let m = null;
    const f = /* @__PURE__ */ new Map(), y = () => {
      let x = null, C = null;
      for (const S of e) {
        const T = document.querySelector(S.selector);
        if (!T) continue;
        f.set(S.selector, T);
        const I = T.getBoundingClientRect();
        let A = I.top;
        if (v !== window) {
          const M = v.getBoundingClientRect();
          A = I.top - M.top;
        }
        A <= 80 ? (!C || A > C.el.getBoundingClientRect().top - (v !== window ? v.getBoundingClientRect().top : 0)) && (C = { sel: S.selector, el: T }) : (!x || A < x.top) && (x = { sel: S.selector, top: A });
      }
      const $ = C?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      $ && $ !== h.current && b($);
    }, N = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const x = v === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: v,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      m = new IntersectionObserver((C) => {
        const $ = C.filter((S) => S.isIntersecting).sort((S, T) => S.boundingClientRect.top - T.boundingClientRect.top);
        if ($[0]) {
          const S = $[0].target;
          for (const T of e) {
            if (document.querySelector(T.selector) === S) {
              b(T.selector);
              break;
            }
            if (T.selector.startsWith("#") && S.id === T.selector.slice(1)) {
              b(T.selector);
              break;
            }
          }
        } else
          y();
      }, x);
      for (const C of e) {
        const $ = document.querySelector(C.selector);
        $ && (m.observe($), f.set(C.selector, $));
      }
    }
    return v === window ? (window.addEventListener("scroll", N, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", N), m?.disconnect();
    }) : (v.addEventListener("scroll", N, {
      passive: !0
    }), y(), () => {
      v.removeEventListener("scroll", N), m?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [br.root, br[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: br.list, children: e.map((_) => {
        const v = _.selector === p;
        return /* @__PURE__ */ o("li", { className: br.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: _.selector.startsWith("#") || _.selector.startsWith(".") ? _.selector : `#${_.selector}`,
            className: [br.link, v ? br.active : null].filter(Boolean).join(" "),
            "aria-current": v ? "location" : void 0,
            onClick: (m) => {
              m.preventDefault();
              const f = document.querySelector(_.selector);
              g(_, f);
            },
            children: _.text
          }
        ) }, `${_.text}-${_.selector}`);
      }) })
    }
  );
}
const ak = "_root_1bfit_1", lk = "_viewport_1bfit_17", ik = "_slide_1bfit_24", ck = "_active_1bfit_33", dk = "_arrow_1bfit_37", uk = "_prev_1bfit_71", fk = "_next_1bfit_75", pk = "_pauseBtn_1bfit_79", _k = "_indicators_1bfit_110", hk = "_indicator_1bfit_110", mk = "_indicatorActive_1bfit_145", _n = {
  root: ak,
  viewport: lk,
  slide: ik,
  active: ck,
  arrow: dk,
  prev: uk,
  next: fk,
  pauseBtn: pk,
  indicators: _k,
  indicator: hk,
  indicatorActive: mk
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
  ShowArrows: p,
  showIndicators: b,
  ShowIndicators: h,
  onChange: g,
  Change: _,
  ariaLabel: v = "Carousel",
  className: m
}) {
  const f = t ?? n, y = f !== void 0, [N, x] = W(() => Math.min(Math.max(0, f ?? r), Math.max(0, e.length - 1))), C = y ? f : N, $ = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), S = a ?? i ?? !1, T = c ?? s ?? 3e3, I = l ?? d ?? !0, A = u ?? p ?? !0, M = b ?? h ?? !0, [k, w] = W(!1), [E, L] = W(!1), z = k || E, P = le(null), j = ct(), q = H(
    (te) => {
      const ye = e.length === 0 ? 0 : (te % e.length + e.length) % e.length;
      y || x(ye), (g ?? _)?.(ye);
    },
    [y, g, _, e.length]
  ), ae = H(() => {
    q($ - 1);
  }, [q, $]), ie = H(() => {
    q($ + 1);
  }, [q, $]), re = H(
    (te) => {
      q(te);
    },
    [q]
  ), V = $o("(prefers-reduced-motion: reduce)");
  Oe(() => {
    if (!S || z || V || e.length <= 1) return;
    const te = setInterval(() => {
      q($ + 1);
    }, T);
    return () => clearInterval(te);
  }, [
    S,
    z,
    V,
    T,
    $,
    q,
    e.length
  ]);
  const Ee = (te) => {
    e.length !== 0 && (te.key === "ArrowLeft" ? (te.preventDefault(), ae()) : te.key === "ArrowRight" ? (te.preventDefault(), ie()) : te.key === "Home" ? (te.preventDefault(), re(0)) : te.key === "End" && (te.preventDefault(), re(e.length - 1)));
  }, Q = () => {
    I && S && L(!0);
  }, J = () => {
    I && S && L(!1);
  }, X = () => {
    I && S && L(!0);
  }, ge = () => {
    I && S && L(!1);
  };
  return e.length === 0 ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover pause/play plus arrow-key handlers; this region is the carousel's keyboard control surface
    /* @__PURE__ */ D(
      "div",
      {
        ref: P,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": v,
        tabIndex: 0,
        className: [_n.root, m].filter(Boolean).join(" "),
        onKeyDown: Ee,
        onMouseEnter: Q,
        onMouseLeave: J,
        onFocusCapture: X,
        onBlurCapture: ge,
        children: [
          /* @__PURE__ */ o("div", { id: j, className: _n.viewport, children: e.map((te, ye) => {
            const K = ye === $;
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
          A && e.length > 1 ? /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
                "aria-label": "Previous slide",
                "aria-controls": j,
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
                "aria-controls": j,
                onClick: ie,
                children: "›"
              }
            )
          ] }) : null,
          S ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: _n.pauseBtn,
              "aria-label": k ? "Resume" : "Pause",
              "aria-pressed": k,
              onClick: () => w((te) => !te),
              children: k ? "▶" : "⏸"
            }
          ) : null,
          M && e.length > 1 ? /* @__PURE__ */ o(
            "div",
            {
              className: _n.indicators,
              role: "group",
              "aria-label": "Slide indicators",
              children: e.map((te, ye) => {
                const K = ye === $;
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
                    "aria-controls": j,
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
const gk = "_root_1aa5u_1", yk = "_group_1aa5u_20", bk = "_itemWrapper_1aa5u_30", xk = "_treeitem_1aa5u_34", vk = "_disabled_1aa5u_50", wk = "_selected_1aa5u_60", kk = "_caret_1aa5u_66", Nk = "_caretIcon_1aa5u_113", $k = "_caretOpen_1aa5u_120", Sk = "_caretPlaceholder_1aa5u_124", Ok = "_label_1aa5u_130", Ek = "_loading_1aa5u_137", Tk = "_loadingRow_1aa5u_143", Ck = "_empty_1aa5u_149", Mk = "_checkbox_1aa5u_155", Lt = {
  root: gk,
  group: yk,
  itemWrapper: bk,
  treeitem: xk,
  disabled: vk,
  selected: wk,
  caret: kk,
  caretIcon: Nk,
  caretOpen: $k,
  caretPlaceholder: Sk,
  label: Ok,
  loading: Ek,
  loadingRow: Tk,
  empty: Ck,
  checkbox: Mk
};
function Ak({
  indeterminate: e,
  ...t
}) {
  const n = le(null);
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
  SelectedItem: p,
  selectedItems: b,
  SelectedItems: h,
  defaultSelectedItem: g,
  defaultSelectedItems: _,
  onChange: v,
  Change: m,
  onExpand: f,
  Expand: y,
  onCollapse: N,
  Collapse: x,
  loadChildData: C,
  LoadChildData: $,
  template: S,
  Template: T,
  itemTemplate: I,
  ItemTemplate: A,
  ariaLabel: M,
  AriaLabel: k,
  allowCheckBoxes: w = !1,
  checkedKeys: E,
  defaultCheckedKeys: L,
  onCheckedChange: z,
  allowCheckChildren: P = !0,
  className: j
}) {
  const q = Ne(() => e ?? t ?? [], [e, t]), ae = n ?? r, ie = a ?? i ?? "text", re = c ?? s ?? "id", V = l ?? d ?? "single", Ee = M ?? k ?? "Tree", Q = C ?? $, J = S ?? T ?? I ?? A, X = H(
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
  ), [me, qe] = W(() => /* @__PURE__ */ new Set()), Je = u ?? p, Ge = b ?? h, gt = V === "multiple" ? Ge !== void 0 : Je !== void 0, ee = H(() => {
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
      if (g) return /* @__PURE__ */ new Set([X(g)]);
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
    g,
    _,
    X,
    te,
    q
  ]), [Ce, lt] = W(
    () => ee()
  ), ze = Ne(() => {
    if (V === "multiple") {
      if (Ge !== void 0) {
        const Z = Ge;
        return Z ? new Set(Z.map((ce) => X(ce))) : /* @__PURE__ */ new Set();
      }
      return Ce;
    } else {
      if (Je !== void 0) {
        const Z = Je;
        return Z ? /* @__PURE__ */ new Set([X(Z)]) : /* @__PURE__ */ new Set();
      }
      return Ce;
    }
  }, [
    V,
    Ge,
    Je,
    Ce,
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
          const ve = v ?? m;
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
          const ve = v ?? m;
          ve && ve({ item: Z, selectedItem: Z });
        } else {
          const ve = v ?? m;
          ve && ve({ item: Z, selectedItem: Z });
        }
    },
    [
      X,
      V,
      ze,
      gt,
      v,
      m,
      Xe,
      st
    ]
  ), yt = H(
    async (Z) => {
      const ce = X(Z);
      if (!!Z.disabled) return;
      const ke = K.has(ce), ve = f ?? y, Ae = N ?? x, Ye = te(Z), dt = oe.get(ce) ?? Ye, je = !(dt !== void 0 && dt.length > 0) && Q != null;
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
      f,
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
  ), [Ve, Ct] = W(
    () => new Set(L ?? [])
  ), se = Ne(
    () => E !== void 0 ? new Set(E) : Ve,
    [E, Ve]
  ), Le = H(
    (Z) => {
      const ce = it.disabledKeys;
      return ft(Z).filter((_e) => !ce.has(_e));
    },
    [ft, it]
  ), wt = H(
    (Z) => {
      if (se.has(Z)) return !0;
      if (!w || !P) return !1;
      const ce = Le(Z);
      return ce.length > 0 && ce.every((_e) => se.has(_e));
    },
    [se, w, P, Le]
  ), Mt = H(
    (Z) => {
      if (!w || !P || se.has(Z))
        return !1;
      const ce = Le(Z);
      if (ce.length === 0) return !1;
      const _e = ce.filter((ke) => se.has(ke)).length;
      return _e > 0 && _e < ce.length;
    },
    [se, w, P, Le]
  ), bt = H(
    (Z) => {
      if (!w || Z.disabled) return;
      const ce = X(Z), _e = new Set(se);
      if (_e.has(ce) || wt(ce)) {
        if (_e.delete(ce), P)
          for (const ke of Le(ce)) _e.delete(ke);
      } else if (_e.add(ce), P)
        for (const ke of Le(ce)) _e.add(ke);
      E === void 0 && Ct(_e), z?.([..._e]);
    },
    [
      w,
      P,
      E,
      se,
      Le,
      X,
      wt,
      z
    ]
  ), R = Ne(() => {
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
    () => R[0]?.key ?? null
  ), we = le(""), fe = le(null), F = le(null), [pe, Re] = W({
    key: Y,
    nodes: R
  });
  if (pe.key !== Y || pe.nodes !== R) {
    if (Re({ key: Y, nodes: R }), !Y && R.length > 0) {
      const Z = R[0];
      Z && he(Z.key);
    } else if (Y && !R.some((Z) => Z.key === Y)) {
      const Z = R[0];
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
    (Z) => R.find((_e) => _e.key === Z)?.parentKey ?? null,
    [R]
  ), et = H(
    (Z) => {
      if (R.length === 0) return;
      const ce = Y ? R.findIndex((ve) => ve.key === Y) : -1, _e = ce >= 0 ? R[ce] : void 0;
      let ke = null;
      if (Z.key === "ArrowDown") {
        if (Z.preventDefault(), ce === -1)
          ke = R[0]?.key ?? null;
        else {
          const ve = (ce + 1) % R.length, Ae = R[ve];
          Ae && (ke = Ae.key);
        }
        ke && Ie(ke);
        return;
      }
      if (Z.key === "ArrowUp") {
        if (Z.preventDefault(), ce === -1) {
          const ve = R[R.length - 1];
          ve && (ke = ve.key);
        } else {
          const ve = (ce - 1 + R.length) % R.length, Ae = R[ve];
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
          const ve = ce + 1, Ae = R[ve];
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
        const ve = R[0];
        ve && Ie(ve.key);
        return;
      }
      if (Z.key === "End") {
        Z.preventDefault();
        const ve = R[R.length - 1];
        ve && Ie(ve.key);
        return;
      }
      if (Z.key === "Enter" || Z.key === " ") {
        if (Z.key === " " && Z.target?.tagName === "INPUT" || (Z.preventDefault(), !_e)) return;
        if (Z.key === " " && w) {
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
        const Ae = ce >= 0 ? ce + 1 : 0, dt = [...R, ...R].slice(Ae, Ae + R.length).find((xt) => xt.text.toLowerCase().startsWith(ve));
        dt && Ie(dt.key);
        return;
      }
    },
    [
      R,
      Y,
      Ie,
      yt,
      Tt,
      It,
      w,
      bt,
      st
    ]
  ), mn = H(() => {
    if (!Y && R.length > 0) {
      const Z = R[0];
      Z && he(Z.key);
    }
  }, [Y, R]), Nn = (Z, ce, _e) => /* @__PURE__ */ o("ul", { role: "group", className: Lt.group, children: Z.map((ke, ve) => {
    const Ae = X(ke), Ye = ge(ke), Fe = oe.get(Ae) ?? te(ke);
    let dt;
    oe.has(Ae) ? dt = oe.get(Ae).length > 0 : Fe !== void 0 ? dt = Fe.length > 0 : Q ? dt = !0 : dt = !1;
    const xt = K.has(Ae), je = ze.has(Ae), tt = !!ke.disabled, ut = me.has(Ae), Jt = Y === Ae, At = Z.length, dn = ve + 1, Zn = J ? J(ke) : Ye, Jn = w ? {
      checked: wt(Ae),
      indeterminate: Mt(Ae)
    } : null;
    return /* @__PURE__ */ D("li", { role: "none", className: Lt.itemWrapper, children: [
      /* @__PURE__ */ D(
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
            w ? /* @__PURE__ */ o(
              Ak,
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
      className: [Lt.root, j].filter(Boolean).join(" "),
      onKeyDown: et,
      onFocus: mn,
      children: q.length === 0 ? /* @__PURE__ */ o("div", { className: Lt.empty, children: "No items" }) : Nn(q, 1)
    }
  );
}
const Dk = "_root_10fdq_1", Ik = "_panel_10fdq_8", zk = "_header_10fdq_19", Lk = "_listbox_10fdq_28", Pk = "_option_10fdq_42", Rk = "_disabled_10fdq_57", jk = "_active_10fdq_66", Bk = "_selected_10fdq_70", Fk = "_empty_10fdq_86", Hk = "_controls_10fdq_93", Uk = "_reorder_10fdq_102", Wk = "_btn_10fdq_110", rt = {
  root: Dk,
  panel: Ik,
  header: zk,
  listbox: Lk,
  option: Pk,
  disabled: Rk,
  active: jk,
  selected: Bk,
  empty: Fk,
  controls: Hk,
  reorder: Uk,
  btn: Wk
};
function Pt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ho(e) {
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
  SourceChange: p,
  onTargetChange: b,
  TargetChange: h,
  keyProperty: g,
  KeyProperty: _,
  onMove: v,
  Move: m,
  ariaLabel: f,
  AriaLabel: y,
  className: N
}) {
  const x = g ?? _ ?? "id", C = f ?? y ?? "PickList", $ = e ?? t ?? a ?? i ?? l ?? d ?? [], S = n ?? r ?? c ?? s ?? [], [T, I] = W(() => [
    ...$
  ]), [A, M] = W(() => [
    ...S
  ]), k = e ?? t ?? a ?? i ?? l ?? d, [w, E] = W(k);
  k !== w && (E(k), k !== void 0 && I([...k]));
  const L = n ?? r ?? c ?? s, [z, P] = W(L);
  L !== z && (P(L), L !== void 0 && M([...L]));
  const [j, q] = W(
    () => /* @__PURE__ */ new Set()
  ), [ae, ie] = W(
    () => /* @__PURE__ */ new Set()
  ), [re, V] = W(() => {
    const R = $.findIndex((Y) => !Y.disabled);
    return R >= 0 ? R : 0;
  }), [Ee, Q] = W(() => {
    const R = S.findIndex((Y) => !Y.disabled);
    return R >= 0 ? R : 0;
  }), J = Ne(
    () => T.map((R, Y) => R.disabled ? -1 : Y).filter((R) => R >= 0),
    [T]
  ), X = Ne(
    () => A.map((R, Y) => R.disabled ? -1 : Y).filter((R) => R >= 0),
    [A]
  ), ge = {
    active: re,
    len: T.length,
    idxs: J
  }, [te, ye] = W(ge);
  if (te.active !== ge.active || te.len !== ge.len || te.idxs !== ge.idxs) {
    if (ye(ge), re >= T.length) {
      const R = J[J.length - 1];
      V(R ?? 0);
    } else if (T.length > 0 && J.length > 0 && !J.includes(re)) {
      const R = J[0];
      R !== void 0 && V(R);
    }
  }
  const K = {
    active: Ee,
    len: A.length,
    idxs: X
  }, [$e, oe] = W(K);
  if ($e.active !== K.active || $e.len !== K.len || $e.idxs !== K.idxs) {
    if (oe(K), Ee >= A.length) {
      const R = X[X.length - 1];
      Q(R ?? 0);
    } else if (A.length > 0 && X.length > 0 && !X.includes(Ee)) {
      const R = X[0];
      R !== void 0 && Q(R);
    }
  }
  const [De, me] = W({
    items: T,
    key: x
  });
  (De.items !== T || De.key !== x) && (me({ items: T, key: x }), q((R) => {
    const Y = /* @__PURE__ */ new Set();
    for (const he of R)
      T.some(
        (fe) => Pt(fe, x) === he && !fe.disabled
      ) && Y.add(he);
    return Y.size === R.size ? R : Y;
  }));
  const [qe, Je] = W({
    items: A,
    key: x
  });
  (qe.items !== A || qe.key !== x) && (Je({ items: A, key: x }), ie((R) => {
    const Y = /* @__PURE__ */ new Set();
    for (const he of R)
      A.some(
        (fe) => Pt(fe, x) === he && !fe.disabled
      ) && Y.add(he);
    return Y.size === R.size ? R : Y;
  }));
  const Ge = H(
    (R) => {
      (u ?? p)?.(R);
    },
    [u, p]
  ), Qe = H(
    (R) => {
      (b ?? h)?.(R);
    },
    [b, h]
  ), He = H(
    (R) => {
      (v ?? m)?.(R);
    },
    [v, m]
  ), gt = H(
    (R) => {
      const Y = T[R];
      if (!Y || Y.disabled) return;
      const he = Pt(Y, x);
      q((we) => {
        const fe = new Set(we);
        return fe.has(he) ? fe.delete(he) : fe.add(he), fe;
      }), V(R);
    },
    [T, x]
  ), ee = H(
    (R) => {
      const Y = A[R];
      if (!Y || Y.disabled) return;
      const he = Pt(Y, x);
      ie((we) => {
        const fe = new Set(we);
        return fe.has(he) ? fe.delete(he) : fe.add(he), fe;
      }), Q(R);
    },
    [A, x]
  ), Ce = H(() => {
    const R = [], Y = [];
    for (const F of T) {
      const pe = Pt(F, x);
      j.has(pe) && !F.disabled ? R.push(F) : Y.push(F);
    }
    if (R.length === 0) return;
    const he = Y, we = [...A, ...R];
    I(he), M(we), q(/* @__PURE__ */ new Set());
    const fe = new Set(R.map((F) => Pt(F, x)));
    ie(fe), Ge(he), Qe(we), He({
      source: he,
      target: we,
      moved: R,
      direction: "toTarget"
    });
  }, [
    T,
    A,
    j,
    x,
    Ge,
    Qe,
    He
  ]), lt = H(() => {
    const R = [], Y = [];
    for (const F of A) {
      const pe = Pt(F, x);
      ae.has(pe) && !F.disabled ? R.push(F) : Y.push(F);
    }
    if (R.length === 0) return;
    const he = Y, we = [...T, ...R];
    M(he), I(we), ie(/* @__PURE__ */ new Set());
    const fe = new Set(R.map((F) => Pt(F, x)));
    q(fe), Ge(we), Qe(he), He({
      source: we,
      target: he,
      moved: R,
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
    const R = T.filter((we) => !we.disabled);
    if (R.length === 0) return;
    const Y = T.filter((we) => !!we.disabled), he = [...A, ...R];
    I(Y), M(he), q(/* @__PURE__ */ new Set()), Ge(Y), Qe(he), He({
      source: Y,
      target: he,
      moved: R,
      direction: "allToTarget"
    });
  }, [T, A, Ge, Qe, He]), st = H(() => {
    const R = A.filter((we) => !we.disabled);
    if (R.length === 0) return;
    const Y = A.filter((we) => !!we.disabled), he = [...T, ...R];
    M(Y), I(he), ie(/* @__PURE__ */ new Set()), Ge(he), Qe(Y), He({
      source: he,
      target: Y,
      moved: R,
      direction: "allToSource"
    });
  }, [T, A, Ge, Qe, He]), Xe = H(() => {
    if (ae.size === 0) return;
    const R = [...A], Y = ae, he = [];
    for (let fe = 1; fe < R.length; fe++) {
      const F = R[fe], pe = R[fe - 1];
      if (!F || !pe) continue;
      const Re = Pt(F, x), Ie = Pt(pe, x);
      Y.has(Re) && !Y.has(Ie) && !F.disabled && !pe.disabled && (R[fe - 1] = F, R[fe] = pe, he.push(F));
    }
    if (he.length === 0) return;
    M(R), Qe(R), He({ source: T, target: R, moved: he, direction: "up" });
    const we = Array.from(Y)[0];
    if (we) {
      const fe = R.findIndex(
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
    const R = [...A], Y = ae, he = [];
    for (let fe = R.length - 2; fe >= 0; fe--) {
      const F = R[fe], pe = R[fe + 1];
      if (!F || !pe) continue;
      const Re = Pt(F, x), Ie = Pt(pe, x);
      Y.has(Re) && !Y.has(Ie) && !F.disabled && !pe.disabled && (R[fe] = pe, R[fe + 1] = F, he.push(F));
    }
    if (he.length === 0) return;
    M(R), Qe(R), He({ source: T, target: R, moved: he, direction: "down" });
    const we = Array.from(Y)[0];
    if (we) {
      const fe = R.findIndex(
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
  ]), yt = j.size > 0, it = ae.size > 0, ft = le(""), Ve = le(
    null
  ), Ct = le(""), se = le(
    null
  ), Le = H(
    (R) => {
      if (T.length === 0) return;
      const Y = J;
      if (Y.length === 0) return;
      const he = Y.includes(re) ? re : Y[0] ?? 0;
      let we = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), we = Y[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), we = Y[Y.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), gt(he);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const fe = (ft.current + R.key).toLowerCase();
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
    (R) => {
      if (A.length === 0) return;
      const Y = X;
      if (Y.length === 0) return;
      const he = Y.includes(Ee) ? Ee : Y[0] ?? 0;
      let we = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const fe = Y.indexOf(he);
        we = Y[(fe - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), we = Y[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), we = Y[Y.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), ee(he);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const fe = (Ct.current + R.key).toLowerCase();
        Ct.current = fe, se.current && clearTimeout(se.current), se.current = setTimeout(() => {
          Ct.current = "";
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
  ), Mt = le(null), bt = le(null);
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
              ) : T.map((R, Y) => {
                const he = Pt(R, x), we = j.has(he), fe = Y === re, F = !!R.disabled;
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
                      children: ho(R)
                    },
                    he
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
              onClick: Ce,
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
              "aria-disabled": T.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: T.filter((R) => !R.disabled).length === 0,
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
              ) : A.map((R, Y) => {
                const he = Pt(R, x), we = ae.has(he), fe = Y === Ee, F = !!R.disabled;
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
                      children: ho(R)
                    },
                    he
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
const qk = "_root_1qxsp_1", Kk = "_header_1qxsp_8", Gk = "_title_1qxsp_15", Vk = "_navBtn_1qxsp_20", Yk = "_resources_1qxsp_39", Xk = "_resource_1qxsp_39", Zk = "_grid_1qxsp_50", Jk = "_timeCol_1qxsp_55", Qk = "_timeCell_1qxsp_61", eN = "_dayCol_1qxsp_66", tN = "_dayHeader_1qxsp_73", nN = "_slot_1qxsp_81", rN = "_event_1qxsp_91", Vt = {
  root: qk,
  header: Kk,
  title: Gk,
  navBtn: Vk,
  resources: Yk,
  resource: Xk,
  grid: Zk,
  timeCol: Jk,
  timeCell: Qk,
  dayCol: eN,
  dayHeader: tN,
  slot: nN,
  event: rN
};
function ba(e) {
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
  ), p = n ?? d, b = (_) => {
    n || u(_), r?.(_);
  }, h = t === "day" ? [p] : t === "week" ? Array.from({ length: 7 }, (_, v) => {
    const m = new Date(p);
    return m.setDate(p.getDate() - p.getDay() + v), m;
  }) : Array.from({ length: 30 }, (_, v) => {
    const m = new Date(p);
    return m.setDate(1 + v), m;
  }), g = Array.from({ length: 12 }, (_, v) => 8 + v);
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
                const _ = new Date(p);
                _.setDate(_.getDate() - 7), b(_);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Vt.title, children: p.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const _ = new Date(p);
                _.setDate(_.getDate() + 7), b(_);
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
          h.map((_) => (
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
                  g.map((v) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- hour slots refine the day-column click for the mouse; event buttons inside are native buttons
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: Vt.slot,
                        tabIndex: -1,
                        onClick: (m) => {
                          m.stopPropagation();
                          const f = new Date(_);
                          f.setHours(v), c?.({ date: f });
                        }
                      },
                      v
                    )
                  )),
                  e.filter((v) => v.start.toDateString() === _.toDateString()).map((v) => /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Vt.event,
                      "aria-label": `${v.title} ${ba(v.start)} - ${ba(v.end)}`,
                      "aria-pressed": !1,
                      onClick: () => i?.({ event: v }),
                      children: v.title
                    },
                    v.id
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
const oN = "_root_dj5ne_1", sN = "_header_dj5ne_8", aN = "_headerCell_dj5ne_15", lN = "_timeline_dj5ne_21", iN = "_row_dj5ne_26", cN = "_taskName_dj5ne_32", dN = "_timelineCell_dj5ne_37", uN = "_bar_dj5ne_43", fN = "_progress_dj5ne_56", pN = "_dep_dj5ne_61", Cn = {
  root: oN,
  header: sN,
  headerCell: aN,
  timeline: lN,
  row: iN,
  taskName: cN,
  timelineCell: dN,
  bar: uN,
  progress: fN,
  dep: pN
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
const _N = "_root_4b64f_1", hN = "_fields_4b64f_6", mN = "_chip_4b64f_13", gN = "_table_4b64f_35", yN = "_totalRow_4b64f_55", bN = "_total_4b64f_55", xr = {
  root: _N,
  fields: hN,
  chip: mN,
  table: gN,
  totalRow: yN,
  total: bN
}, xN = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e),
  First: (e) => e[0] ?? 0,
  Last: (e) => e[e.length - 1] ?? 0
};
function vN(e) {
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
  const s = t, l = n, d = r, u = (f, y, N) => {
    const x = f === "row" ? s.filter((S) => S.property !== y) : s, C = f === "col" ? l.filter((S) => S.property !== y) : l, $ = f === "agg" ? d.filter((S) => !(S.property === y && S.aggregate === N)) : d;
    a?.({
      rowFields: x,
      columnFields: C,
      aggregateFields: $
    });
  }, p = (f, y) => y.length === 0 ? "" : y.length === 1 ? String(f[y[0].property]) : y.map(
    (N) => String(f[N.property]).replace(/\\/g, "\\\\").split("").join("\\x01")
  ).join(""), b = [
    ...new Set(s.length ? e.map((f) => p(f, s)) : [""])
  ].sort(), h = [
    ...new Set(l.length ? e.map((f) => p(f, l)) : [""])
  ].sort(), g = (f, y) => e.filter(
    (N) => (f == null || p(N, s) === f) && (y == null || p(N, l) === y)
  ), _ = (f, y) => {
    if (y.aggregate === "Count") return f.length;
    const N = f.map((x) => Number(x[y.property])).filter((x) => !Number.isNaN(x));
    return N.length ? xN[y.aggregate](N) : 0;
  }, v = (f) => {
    const y = d.length > 1;
    return d.map((N) => {
      const x = vN(_(f, N));
      return y ? `${x} (${N.aggregate})` : x;
    }).join(", ");
  }, m = (f, y, N, x) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: xr.chip,
      "aria-label": `Remove ${f} field ${N}`,
      onClick: () => u(f, y, x),
      children: [
        N,
        x ? ` (${x})` : ""
      ]
    },
    `${f}-${N}-${x ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [xr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: xr.fields, children: [
      s.map((f) => m("row", f.property, f.title ?? f.property)),
      l.map((f) => m("col", f.property, f.title ?? f.property)),
      d.map(
        (f) => m("agg", f.property, f.title ?? f.property, f.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: xr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((f) => f.title ?? f.property).join(" / ") || "Total" }),
        h.map((f) => /* @__PURE__ */ o("th", { scope: "col", children: f || "—" }, f)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        b.map((f) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: f || "—" }),
          h.map((y) => /* @__PURE__ */ o(
            "td",
            {
              title: d.length ? v(g(f, y)) : void 0,
              children: d.length ? v(g(f, y)) : ""
            },
            y
          )),
          /* @__PURE__ */ o("td", { className: xr.total, children: d.length ? v(g(f)) : "" })
        ] }, f)),
        /* @__PURE__ */ D("tr", { className: xr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          h.map((f) => /* @__PURE__ */ o("td", { children: d.length ? v(g(void 0, f)) : "" }, f)),
          /* @__PURE__ */ o("td", { children: d.length ? v(e) : "" })
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
const TN = "_root_rm4d8_1", CN = "_header_rm4d8_13", MN = "_headCell_rm4d8_22", AN = "_row_rm4d8_32", DN = "_cell_rm4d8_37", Wr = {
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
  ), [d, u] = W(0), p = le(/* @__PURE__ */ new Set()), b = Math.ceil(n / t), h = Math.max(0, Math.floor(d / t) - 3), g = Math.min(e, h + b + 6), _ = H(
    (m, f) => {
      let y = !1;
      for (let N = m; N < f; N++)
        !s.has(N) && !p.current.has(N) && (y = !0);
      if (y) {
        for (let N = m; N < f; N++) p.current.add(N);
        r({ skip: m, top: f }).then((N) => {
          l((x) => {
            const C = new Map(x);
            return N.forEach(($, S) => C.set(m + S, $)), C;
          });
          for (let x = m; x < f; x++) p.current.delete(x);
        });
      }
    },
    [s, r]
  );
  Oe(() => {
    _(h, g);
  }, [h, g, _]);
  const v = [];
  for (let m = h; m < g; m++) {
    const f = s.get(m) ?? {};
    v.push(
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
              children: String(f[y.property] ?? "")
            },
            y.property
          ))
        },
        m
      )
    );
  }
  return /* @__PURE__ */ D(
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
        const f = m.currentTarget;
        m.key === "ArrowDown" ? (m.preventDefault(), f.scrollTop += t) : m.key === "ArrowUp" ? (m.preventDefault(), f.scrollTop -= t) : m.key === "PageDown" ? (m.preventDefault(), f.scrollTop += n) : m.key === "PageUp" && (m.preventDefault(), f.scrollTop -= n);
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
        v,
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
      let p = [];
      for (let h = 0; h < this.size; h++) p.push(!1);
      for (let h = 0; h < this.size; h++)
        this.modules.push(p.slice()), this.isFunction.push(p.slice());
      this.drawFunctionPatterns();
      const b = this.addEccAndInterleave(d);
      if (this.drawCodewords(b), u == -1) {
        let h = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const _ = this.getPenaltyScore();
          _ < h && (u = g, h = _), this.applyMask(g);
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
    static encodeSegments(s, l, d = 1, u = 40, p = -1, b = !0) {
      if (!(t.MIN_VERSION <= d && d <= u && u <= t.MAX_VERSION) || p < -1 || p > 7)
        throw new RangeError("Invalid value");
      let h, g;
      for (h = d; ; h++) {
        const f = t.getNumDataCodewords(h, l) * 8, y = i.getTotalBits(s, h);
        if (y <= f) {
          g = y;
          break;
        }
        if (h >= u)
          throw new RangeError("Data too long");
      }
      for (const f of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        b && g <= t.getNumDataCodewords(h, f) * 8 && (l = f);
      let _ = [];
      for (const f of s) {
        n(f.mode.modeBits, 4, _), n(f.numChars, f.mode.numCharCountBits(h), _);
        for (const y of f.getData()) _.push(y);
      }
      a(_.length == g);
      const v = t.getNumDataCodewords(h, l) * 8;
      a(_.length <= v), n(0, Math.min(4, v - _.length), _), n(0, (8 - _.length % 8) % 8, _), a(_.length % 8 == 0);
      for (let f = 236; _.length < v; f ^= 253)
        n(f, 8, _);
      let m = [];
      for (; m.length * 8 < _.length; ) m.push(0);
      return _.forEach(
        (f, y) => m[y >>> 3] |= f << 7 - (y & 7)
      ), new t(h, l, m, p);
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
      for (let p = 0; p < 10; p++) d = d << 1 ^ (d >>> 9) * 1335;
      const u = (l << 10 | d) ^ 21522;
      a(u >>> 15 == 0);
      for (let p = 0; p <= 5; p++)
        this.setFunctionModule(8, p, r(u, p));
      this.setFunctionModule(8, 7, r(u, 6)), this.setFunctionModule(8, 8, r(u, 7)), this.setFunctionModule(7, 8, r(u, 8));
      for (let p = 9; p < 15; p++)
        this.setFunctionModule(14 - p, 8, r(u, p));
      for (let p = 0; p < 8; p++)
        this.setFunctionModule(this.size - 1 - p, 8, r(u, p));
      for (let p = 8; p < 15; p++)
        this.setFunctionModule(8, this.size - 15 + p, r(u, p));
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
        const u = r(l, d), p = this.size - 11 + d % 3, b = Math.floor(d / 3);
        this.setFunctionModule(p, b, u), this.setFunctionModule(b, p, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let u = -4; u <= 4; u++) {
          const p = Math.max(Math.abs(u), Math.abs(d)), b = s + u, h = l + d;
          0 <= b && b < this.size && 0 <= h && h < this.size && this.setFunctionModule(b, h, p != 2 && p != 4);
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
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], p = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], b = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), h = u - b % u, g = Math.floor(b / u);
      let _ = [];
      const v = t.reedSolomonComputeDivisor(p);
      for (let f = 0, y = 0; f < u; f++) {
        let N = s.slice(
          y,
          y + g - p + (f < h ? 0 : 1)
        );
        y += N.length;
        const x = t.reedSolomonComputeRemainder(N, v);
        f < h && N.push(0), _.push(N.concat(x));
      }
      let m = [];
      for (let f = 0; f < _[0].length; f++)
        _.forEach((y, N) => {
          (f != g - p || N >= h) && m.push(y[f]);
        });
      return a(m.length == b), m;
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
          for (let p = 0; p < 2; p++) {
            const b = d - p, g = (d + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[g][b] && l < s.length * 8 && (this.modules[g][b] = r(s[l >>> 3], 7 - (l & 7)), l++);
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
      for (let p = 0; p < this.size; p++) {
        let b = !1, h = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[p][_] == b ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, g), b || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), b = this.modules[p][_], h = 1);
        s += this.finderPenaltyTerminateAndCount(b, h, g) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size; p++) {
        let b = !1, h = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[_][p] == b ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, g), b || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), b = this.modules[_][p], h = 1);
        s += this.finderPenaltyTerminateAndCount(b, h, g) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size - 1; p++)
        for (let b = 0; b < this.size - 1; b++) {
          const h = this.modules[p][b];
          h == this.modules[p][b + 1] && h == this.modules[p + 1][b] && h == this.modules[p + 1][b + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const p of this.modules)
        l = p.reduce((b, h) => b + (h ? 1 : 0), l);
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
        for (let p = 0; p < l.length; p++)
          l[p] = t.reedSolomonMultiply(l[p], d), p + 1 < l.length && (l[p] ^= l[p + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let d = l.map((u) => 0);
      for (const u of s) {
        const p = u ^ d.shift();
        d.push(0), l.forEach(
          (b, h) => d[h] ^= t.reedSolomonMultiply(b, p)
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
        const p = u.mode.numCharCountBits(l);
        if (u.numChars >= 1 << p) return 1 / 0;
        d += 4 + p + u.bitData.length;
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
const IN = "_root_1leml_1", zN = {
  root: IN
}, LN = {
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
  const l = i ?? `QR code for ${e}`, d = le(null), u = $o("(prefers-color-scheme: dark)"), [p, b] = W(
    () => document.documentElement.dataset.theme ?? null
  );
  Oe(() => {
    const N = document.documentElement, x = new MutationObserver(() => {
      b(N.dataset.theme ?? null);
    });
    return x.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => x.disconnect();
  }, []);
  const h = Ne(() => {
    try {
      return kn.QrCode.encodeText(e, LN[r]);
    } catch {
      return null;
    }
  }, [e, r]), g = le(null);
  Oe(() => {
    if (h !== null) {
      g.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (g.current?.value !== e || g.current?.onError !== s) && (g.current = { value: e, onError: s }, s?.(N));
  }, [h, e, s]);
  const _ = Math.max(0, Math.floor(a)), v = [zN.root, c].filter(Boolean).join(" ");
  if (Oe(() => {
    if (n !== "canvas" || h === null) return;
    const N = d.current, x = N?.getContext("2d");
    if (!N || !x) return;
    const C = getComputedStyle(N), $ = C.getPropertyValue("--dx-text-color").trim() || "#000", S = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    PN(x, h, t, _, $, S);
  }, [n, h, t, _, u, p]), h === null)
    return /* @__PURE__ */ o("div", { className: v, role: "img", "aria-label": l, "data-qr-error": "true" });
  const m = h.size + _ * 2, f = t / m;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: d,
        className: v,
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
            x: (x + _) * f,
            y: (N + _) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${x}-${N}`
        )
      );
  return /* @__PURE__ */ D(
    "svg",
    {
      className: v,
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
function PN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const RN = "_root_1v9la_1", jN = "_value_1v9la_9", xa = {
  root: RN,
  value: jN
}, va = [
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
], wa = 104, BN = 106;
function FN(e) {
  const t = [wa];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = wa;
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
      const p = va[u] ?? va[0];
      for (let b = 0; b < p.length; b++) {
        const h = Number(p[b]);
        b % 2 === 0 && l.push({ x: d, w: h }), d += h;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [xa.root, i].filter(Boolean).join(" "), children: [
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
    r && /* @__PURE__ */ o("span", { className: xa.value, children: e })
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
}, ka = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Xa = /* @__PURE__ */ new Set([
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
]), e$ = /* @__PURE__ */ new Set([...Xa, "heatmap"]);
function t$(e, t, n) {
  const r = t - e || 1, a = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / a) * a, c = Math.ceil(t / a) * a, s = [];
  for (let l = i; l <= c + 1e-9; l += a)
    s.push(Number(l.toFixed(6)));
  return { min: i, max: c, step: a, ticks: s };
}
function rs(e) {
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
function So(e, t, n, r, a) {
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
function Za(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Xr(e, t) {
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
  const i = rs(a).filter((u) => !Number.isNaN(u.val));
  if (i.length === 0) return null;
  const c = i.map((u) => u.cat);
  let s;
  if (t.type === "trendline") {
    const u = i.length, p = i.map((f, y) => y), b = i.map((f) => f.val), h = p.reduce((f, y) => f + y, 0) / u, g = b.reduce((f, y) => f + y, 0) / u;
    let _ = 0, v = 0;
    for (let f = 0; f < u; f++)
      _ += (p[f] - h) * (b[f] - g), v += (p[f] - h) * (p[f] - h);
    const m = v === 0 ? 0 : _ / v;
    s = c.map((f, y) => ({
      cat: f,
      val: g + m * (y - h)
    }));
  } else {
    const u = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((p, b) => {
      if (b + 1 < u) return null;
      const h = i.slice(b + 1 - u, b + 1);
      return {
        cat: p.cat,
        val: h.reduce((g, _) => g + _.val, 0) / u
      };
    }).filter((p) => p != null);
  }
  if (s.length === 0) return null;
  const l = {
    ...t,
    stack: void 0,
    categoryProperty: "__cat",
    valueProperty: "__val",
    data: s.map((u, p) => ({
      __cat: u.cat,
      __val: u.val,
      __item: i[p + (i.length - s.length)]?.item
    })),
    markers: { ...t.markers ?? {}, visible: t.markers?.visible ?? !1 }
  }, d = rs(l).map((u) => ({
    ...u,
    item: u.item.__item ?? u.item
  }));
  return Ja(e, l, n, d, r);
}
function s$(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((p, b) => [p, b])), s = n.map((p) => {
    const b = c.get(p.cat) ?? 0, h = p.min, g = p.max;
    return typeof h != "number" || Number.isNaN(h) || typeof g != "number" || Number.isNaN(g) ? null : { x: r(b), lo: a(h), hi: a(g) };
  });
  if (s.some((p) => p == null)) return null;
  const l = s.map((p) => `L ${p.x} ${p.hi}`).join(" "), d = [...s].reverse().map((p) => `L ${p.x} ${p.lo}`).join(" "), u = s[0];
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
  const { pad: i, plotW: c, plotH: s } = e, l = i.l + c / 2, d = i.t + s / 2, u = Math.min(c, s) / 3, p = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, b = r.reduce((g, _) => g + (Number(_.val) || 0), 0);
  let h = -90;
  return Zt(
    n,
    t,
    r.map((g, _) => {
      const v = b ? g.val / b * 360 : 0, m = h, f = h + v;
      h = f;
      const y = v > 180 ? 1 : 0, N = l + u * Math.cos(Wt(m)), x = d + u * Math.sin(Wt(m)), C = l + u * Math.cos(Wt(f)), $ = d + u * Math.sin(Wt(f)), S = l + p * Math.cos(Wt(f)), T = d + p * Math.sin(Wt(f)), I = l + p * Math.cos(Wt(m)), A = d + p * Math.sin(Wt(m)), M = p ? `M ${N} ${x} A ${u} ${u} 0 ${y} 1 ${C} ${$} L ${S} ${T} A ${p} ${p} 0 ${y} 0 ${I} ${A} Z` : `M ${l} ${d} L ${N} ${x} A ${u} ${u} 0 ${y} 1 ${C} ${$} Z`, k = (m + f) / 2, w = l + (u + 12) * Math.cos(Wt(k)), E = d + (u + 12) * Math.sin(Wt(k));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: M,
            fill: a,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(w, E, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: w,
            y: E,
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
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: u } = e, p = new Map(u.map((b, h) => [b, h]));
  return Zt(
    n,
    t,
    r.map((b, h) => {
      const g = p.get(b.cat) ?? 0, _ = Number(r[h].cat), v = Number.isNaN(_) ? l(g) : i.l + (_ - s.min) / (s.max - s.min || 1) * c, m = d(b.val), f = t.type === "bubble" && b.size !== void 0 ? Math.max(4, Math.min(12, b.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        So(v, m, a, t, f),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: v,
            cy: m,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, m, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, h);
    })
  );
}
function Ja(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, u = new Map(l.map((g, _) => [g, _])), p = (g) => {
    if (!t.stack) return i.min;
    let _ = 0;
    for (let v = 0; v < n; v++) {
      const m = d[v];
      if (m?.stack !== t.stack) continue;
      const f = m.data.find(
        (y) => String(y[m.categoryProperty] ?? "") === g
      );
      f && (_ += Number(f[m.valueProperty]) || 0);
    }
    return _;
  }, b = r.map((g, _) => {
    const v = u.get(g.cat) ?? 0, m = p(g.cat);
    return `${_ === 0 ? "M" : "L"} ${c(v)} ${s(m + g.val)}`;
  }).join(" "), h = r.map((g, _) => {
    const v = u.get(g.cat) ?? 0, m = p(g.cat);
    return `${_ === 0 ? "M" : "L"} ${c(v)} ${s(m)}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${b} L ${c(r.length - 1)} ${s(p(r[r.length - 1].cat))} L ${c(0)} ${s(p(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      s$(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: b,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: Za(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: h, fill: "none", stroke: "transparent" }),
      r.map((g, _) => {
        const v = u.get(g.cat) ?? 0, m = p(g.cat), f = c(v), y = s(m + g.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          So(f, y, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: f - 12,
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                f,
                y,
                `${t.title ?? g.cat}: ${Xr(e, g.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: f,
              y: y - 8,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Xr(e, g.val)
            }
          )
        ] }, _);
      })
    ] })
  );
}
function i$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: u, categories: p, series: b } = e, h = new Map(p.map((_, v) => [_, v])), g = t.type === "bar";
  return Zt(
    n,
    t,
    r.map((_, v) => {
      const m = h.get(_.cat) ?? 0;
      let f = 0;
      if (t.stack)
        for (let w = 0; w < n; w++) {
          const E = b[w];
          if (E?.stack !== t.stack) continue;
          const L = E.data.find(
            (z) => String(z[E.categoryProperty] ?? "") === _.cat
          );
          L && (f += Number(L[E.valueProperty]) || 0);
        }
      const y = f + _.val, N = typeof _.min == "number" && !Number.isNaN(_.min) && typeof _.max == "number" && !Number.isNaN(_.max), x = b.filter(
        (w) => !w.stack || w.stack === t.stack
      ).length, C = c / Math.max(1, p.length), $ = g ? 18 : Math.max(12, C / (t.stack ? 1 : b.length) - 4), S = g ? i.l + f / (l.max - l.min || 1) * c : d(m) - $ / 2 + (t.stack ? 0 : n % x * $), T = g ? i.t + m * s / Math.max(1, p.length) + 4 : u(N ? f + _.max : y), I = g ? N ? (_.max - _.min) / (l.max - l.min || 1) * c : _.val / (l.max - l.min || 1) * c : $ - 4, A = g ? 16 : N ? u(f + _.min) - u(f + _.max) : u(f) - u(y), M = g ? i.l + (f + (N ? _.min : 0)) / (l.max - l.min || 1) * c : S, k = g ? i.t + m * s / Math.max(1, p.length) + 4 : T;
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
            x: M + (g ? I : $) / 2,
            y: k - 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Xr(e, _.val)
          }
        )
      ] }, v);
    })
  );
}
function c$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: u, hideTip: p } = e, b = i.l + c / 2, h = i.t + s * 0.78, g = Math.min(c, s) * 0.36, _ = 135, v = 270, m = r.reduce((C, $) => C + (Number($.val) || 0), 0), f = l.max - l.min || 1, y = Math.min(1, Math.max(0, (m - l.min) / f)), N = (C, $) => {
    const [S, T] = [
      b + g * Math.cos(Wt(C)),
      h + g * Math.sin(Wt(C))
    ], [I, A] = [
      b + g * Math.cos(Wt($)),
      h + g * Math.sin(Wt($))
    ], M = $ - C > 180 ? 1 : 0;
    return `M ${S} ${T} A ${g} ${g} 0 ${M} 1 ${I} ${A}`;
  }, x = Number(m.toFixed(2));
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
          d: N(_, _ + v),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + v * y),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: b, y: h - 4, textAnchor: "middle", className: Ze.gaugeValue, children: x }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(_, _ + v),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && u(b, h - g, `${t.title ?? "Value"}: ${x}`),
          onMouseLeave: () => p(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", m, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: b,
          y: h + g + 18,
          textAnchor: "middle",
          className: Ze.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function fs(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (p) => Wt(-90 + 360 * p / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (p, b) => {
    const h = d(p);
    return [
      i + s * b * Math.cos(h),
      c + s * b * Math.sin(h)
    ];
  } };
}
function d$(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = fs(e);
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
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: u, radius: p, angleFor: b, vertexFor: h } = fs(e), g = e.scale.max || 1, _ = (m) => r.find((f) => f.cat === m)?.val ?? 0, v = i.map((m, f) => {
    const y = Math.min(1, Math.max(0, _(m) / g)), [N, x] = h(f, y);
    return `${N},${x}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: v,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: 2
        }
      ),
      i.map((m, f) => {
        const y = Math.min(1, Math.max(0, _(m) / g)), [N, x] = h(f, y), [C, $] = h(f, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
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
              onMouseEnter: () => c && s(C, $, `${t.title ?? m}: ${_(m)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const S = r.find((T) => T.cat === m);
                S && e.handleClick(t, S.cat, S.val, S.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (p + 14) * Math.cos(b(f)),
              y: u + (p + 14) * Math.sin(b(f)) + 4,
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
function f$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, p = r, b = Math.max(1, ...p.map((_) => Number(_.val) || 0)), h = s / Math.max(1, p.length), g = i.l + c / 2;
  return Zt(
    n,
    t,
    p.map((_, v) => {
      const f = Math.max(0, Number(_.val) || 0) / b * c, y = p[v + 1], N = y ? Math.max(0, Number(y.val) || 0) / b * c : f * 0.7, x = i.t + v * h + 2, C = Math.max(4, h - 6), $ = 1 - v * (0.45 / Math.max(1, p.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - f / 2} ${x} L ${g + f / 2} ${x} L ${g + N / 2} ${x + C} L ${g - N / 2} ${x + C} Z`,
            fill: a,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, x, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: g,
            y: x + C / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              _.val
            ]
          }
        )
      ] }, v);
    })
  );
}
function p$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: u, hideTip: p } = e, b = [];
  t.data.forEach((y) => {
    const N = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    b.includes(N) || b.push(N);
  });
  const h = r.map((y) => y.val).filter((y) => Number.isFinite(y)), g = h.length ? Math.min(...h) : 0, _ = h.length ? Math.max(...h) : 1, v = c / Math.max(1, l.length), m = s / Math.max(1, b.length), f = (y) => _ === g ? 0.6 : 0.15 + 0.85 * ((y - g) / (_ - g));
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      b.map((y, N) => /* @__PURE__ */ o(
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
        const x = t.data[N], C = l.indexOf(y.cat), $ = b.indexOf(
          t.rowProperty && x ? String(x[t.rowProperty] ?? "") : "All"
        );
        if (C < 0 || $ < 0) return null;
        const S = i.l + C * v, T = i.t + $ * m;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: S + 1,
              y: T + 1,
              width: Math.max(1, v - 2),
              height: Math.max(1, m - 2),
              fill: a,
              fillOpacity: f(y.val),
              onMouseEnter: () => d && u(S + v / 2, T, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => p(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: S + v / 2,
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
function _$(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((h, g) => [h, g])), d = e.plotW / Math.max(1, s.length), u = Math.max(8, Math.min(28, d / 2 - 4)), p = t.upColor ?? a, b = t.downColor ?? "var(--dx-danger-color)";
  return Zt(
    n,
    t,
    r.map((h, g) => {
      const _ = l.get(h.cat) ?? 0, v = i(_), m = h.close ?? h.val, f = typeof h.open == "number" && !Number.isNaN(h.open) && typeof h.high == "number" && !Number.isNaN(h.high) && typeof h.low == "number" && !Number.isNaN(h.low) && typeof m == "number" && !Number.isNaN(m), y = f && m >= h.open, N = `${t.title ?? h.cat}: O ${h.open ?? "–"} H ${h.high ?? "–"} L ${h.low ?? "–"} C ${m}`;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        f && t.type === "candlestick" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: c(h.high),
              x2: v,
              y2: c(h.low),
              stroke: y ? p : b,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: v - u / 2,
              y: c(Math.max(h.open, m)),
              width: u,
              height: Math.max(
                2,
                c(Math.min(h.open, m)) - c(Math.max(h.open, m))
              ),
              fill: y ? p : "none",
              stroke: y ? p : b,
              strokeWidth: 1.5
            }
          )
        ] }),
        f && t.type === "ohlc" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: c(h.high),
              x2: v,
              y2: c(h.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: v - u / 2,
              y1: c(h.open),
              x2: v,
              y2: c(h.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: c(m),
              x2: v + u / 2,
              y2: c(m),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        f && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: v,
            y1: c(h.high),
            x2: v,
            y2: c(h.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !f && So(v, c(m), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: v - 14,
            y: c(m) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, c(m), N),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, m, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: v,
            y: c(m) - 8,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Xr(e, m)
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
  let d = t, u = n, p = r, b = a;
  const h = (g, _) => {
    const v = g.reduce((y, N) => y + Math.max(0, N.val), 0) * c;
    if (v <= 0) return Number.POSITIVE_INFINITY;
    const m = Math.max(...g.map((y) => Math.max(0, y.val))) * c, f = Math.min(...g.map((y) => Math.max(0, y.val))) * c;
    return Math.max(
      _ * _ * m / (v * v),
      v * v / (_ * _ * (f || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const g = Math.min(p, b), _ = [];
    let v = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const f = [..._, l[0]], y = h(f, g);
      if (y <= v)
        v = y, _.push(l.shift());
      else break;
    }
    _.length === 0 && _.push(l.shift());
    const m = _.reduce((f, y) => f + Math.max(0, y.val), 0) * c;
    if (p >= b) {
      const f = m / b;
      let y = u;
      for (const N of _) {
        const x = Math.max(0, N.val) * c / f;
        s[N.i] = { x: d, y, w: f, h: x }, y += x;
      }
      d += f, p -= f;
    } else {
      const f = m / p;
      let y = d;
      for (const N of _) {
        const x = Math.max(0, N.val) * c / f;
        s[N.i] = { x: y, y: u, w: x, h: f }, y += x;
      }
      u += f, b -= f;
    }
  }
  return s;
}
function Qa(e, t, n, r, a, i, c, s, l, d, u) {
  const p = e.colorFor, b = s.map((_) => ({
    cat: String(_[t.categoryProperty] ?? ""),
    val: Number(_[t.valueProperty]),
    item: _
  })), h = h$(b, r, a, i, c), g = t.childrenProperty ?? "children";
  b.forEach((_, v) => {
    const m = h[v], f = s[v]?.[g], y = Array.isArray(f) ? f : [];
    if (y.length > 0 && l < 8) {
      Qa(
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
      color: p(n + N, t),
      x: m.x,
      y: m.y,
      w: m.w,
      h: m.h
    });
  });
}
function m$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, p = { n: 0 }, b = [];
  return Qa(
    e,
    t,
    n,
    i.l,
    i.t,
    c,
    s,
    t.data,
    0,
    p,
    b
  ), Zt(
    n,
    t,
    b.map((h, g) => /* @__PURE__ */ D("g", { role: "listitem", children: [
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
    ] }, g))
  );
}
function g$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, p = r, b = Math.max(1, ...p.map((_) => Math.max(0, _.val))), h = s / Math.max(1, p.length), g = i.l + c / 2;
  return Zt(
    n,
    t,
    p.map((_, v) => {
      const f = Math.max(0, _.val) / b * c, y = p[v + 1], N = y ? Math.max(0, y.val) / b * c : f, x = i.t + v * h + 2, C = Math.max(4, h - 6);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - f / 2} ${x} L ${g + f / 2} ${x} L ${g + N / 2} ${x + C} L ${g - N / 2} ${x + C} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, x, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: g,
            y: x + C / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              _.val
            ]
          }
        )
      ] }, v);
    })
  );
}
function y$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: u } = fs(e), p = (g) => {
    let _ = 0;
    for (const v of d)
      if (v.type === "spider") {
        for (const m of v.data)
          if (String(m[v.categoryProperty] ?? "") === g) {
            const f = Number(m[v.valueProperty]);
            Number.isNaN(f) || (_ = Math.max(_, f));
          }
      }
    return _ || 1;
  }, b = (g) => r.find((_) => _.cat === g)?.val ?? 0, h = i.map((g, _) => {
    const v = Math.min(1, Math.max(0, b(g) / p(g))), [m, f] = u(_, v);
    return `${m},${f}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: h,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: Za(t.dash)
        }
      ),
      i.map((g, _) => {
        const v = Math.min(1, Math.max(0, b(g) / p(g))), [m, f] = u(_, v), [y, N] = u(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          So(m, f, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: m,
              cy: f,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(y, N, `${t.title ?? g}: ${b(g)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const x = r.find((C) => C.cat === g);
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
              children: b(g)
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: y,
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
  const p = /* @__PURE__ */ new Map(), b = (w, E) => {
    if (p.has(w)) return p.get(w);
    if (E.has(w)) return 0;
    E.add(w);
    const L = u.get(w) ?? [], z = L.length === 0 ? 0 : 1 + Math.max(...L.map((P) => b(P, E)));
    return E.delete(w), p.set(w, z), z;
  }, h = /* @__PURE__ */ new Map();
  for (const w of d) h.set(w, b(w, /* @__PURE__ */ new Set()));
  const g = Math.max(0, ...h.values()), _ = Math.max(
    12,
    Math.min(28, a / Math.max(1, (g + 1) * 8))
  ), v = 10, m = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  for (const w of l)
    f.set(w.source, (f.get(w.source) ?? 0) + w.value), m.set(w.target, (m.get(w.target) ?? 0) + w.value);
  const y = (w) => Math.max(m.get(w) ?? 0, f.get(w) ?? 0), N = /* @__PURE__ */ new Map();
  for (const w of d) {
    const E = h.get(w);
    N.set(E, (N.get(E) ?? 0) + y(w));
  }
  const x = Math.max(1, ...N.values()), C = (i - v * Math.max(0, d.length - 1)) / x, $ = (w) => g === 0 ? r.l : r.l + w / g * (a - _), S = [], T = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  for (const w of d) {
    const E = h.get(w);
    I.has(E) || I.set(E, []), I.get(E).push(w);
  }
  for (const [w, E] of [...I.entries()].sort(
    (L, z) => L[0] - z[0]
  )) {
    let L = r.t;
    for (const z of E) {
      const P = Math.max(4, y(z) * C), j = {
        id: z,
        depth: w,
        total: y(z),
        x: $(w),
        w: _,
        y: L,
        h: P,
        color: e.colorFor(n + S.length, t)
      };
      S.push(j), T.set(z, j), L += P + v;
    }
  }
  const A = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), k = [];
  for (const w of l) {
    const E = T.get(w.source), L = T.get(w.target), z = Math.max(1, w.value * C), P = E.y + (A.get(w.source) ?? 0), j = L.y + (M.get(w.target) ?? 0);
    A.set(w.source, (A.get(w.source) ?? 0) + z), M.set(w.target, (M.get(w.target) ?? 0) + z), k.push({ source: E, target: L, value: w.value, y0: P, y1: j, h: z });
  }
  return { nodes: S, links: k };
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
      d.map((u, p) => /* @__PURE__ */ o(
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
        `link-${p}`
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
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, p = r.map((I) => ({ x: Number(I.cat), y: I.val })).filter((I) => !Number.isNaN(I.x) && !Number.isNaN(I.y));
  if (p.length === 0) return null;
  let b = Math.min(...p.map((I) => I.x)), h = Math.max(...p.map((I) => I.x)), g = Math.min(...p.map((I) => I.y)), _ = Math.max(...p.map((I) => I.y));
  b === h && (b -= 0.5, h += 0.5), g === _ && (g -= 0.5, _ += 0.5);
  const v = Math.max(4, Math.floor(t.resolution ?? 28)), m = Array.from(
    { length: v + 1 },
    () => Array.from({ length: v + 1 }, () => 0)
  );
  for (const I of p) {
    const A = Math.max(
      0,
      Math.min(v, Math.round((I.x - b) / (h - b) * v))
    ), M = Math.max(
      0,
      Math.min(v, Math.round((I.y - g) / (_ - g) * v))
    );
    m[M][A] += 1;
  }
  let f = 0;
  for (const I of m) for (const A of I) f = Math.max(f, A);
  if (f <= 0) return null;
  const y = Math.max(1, Math.floor(t.levels ?? 5)), N = Array.from(
    { length: y },
    (I, A) => f * (A + 1) / (y + 1)
  ), x = c / v, C = s / v, $ = i.l, S = i.t, T = (I) => {
    const A = [], M = (w, E) => m[E]?.[w] ?? 0, k = (w, E, L, z) => z === L ? (w + E) / 2 : w + (I - L) / (z - L) * (E - w);
    for (let w = 0; w < v; w++)
      for (let E = 0; E < v; E++) {
        const L = M(E, w), z = M(E + 1, w), P = M(E, w + 1), j = M(E + 1, w + 1), q = $ + E * x, ae = S + w * C, ie = k(q, q + x, L, z), re = k(q, q + x, P, j), V = k(ae, ae + C, L, P), Ee = k(ae, ae + C, z, j), Q = (L >= I ? 8 : 0) | (z >= I ? 4 : 0) | (j >= I ? 2 : 0) | (P >= I ? 1 : 0), J = [ie, ae], X = [re, ae + C], ge = [q, V], te = [q + x, Ee], ye = (K, $e) => {
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
            (L + z + P + j) / 4 >= I ? (ye(J, ge), ye(X, te)) : (ye(J, te), ye(ge, X));
            break;
          }
          case 10: {
            (L + z + P + j) / 4 >= I ? (ye(J, te), ye(ge, X)) : (ye(J, ge), ye(X, te));
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
      const k = M.map(([E, L, z, P]) => `M ${E} ${L} L ${z} ${P}`).join(" "), w = e.colorFor(n + A, t);
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
              S + 8,
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
  const r = rs(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return a$(e, t, n, r, a);
    case "scatter":
    case "bubble":
      return l$(e, t, n, r, a);
    case "line":
    case "area":
      return Ja(e, t, n, r, a);
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
  const [p, b] = W(
    null
  ), h = Ne(() => {
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
          const E = `${k.stack}\0${String(w[k.categoryProperty] ?? "")}`, L = Number(w[k.valueProperty]);
          Number.isNaN(L) || M.set(E, (M.get(E) ?? 0) + L);
        }
    return e.map((k) => k.stack ? {
      ...k,
      data: k.data.map((w) => {
        const E = `${k.stack}\0${String(w[k.categoryProperty] ?? "")}`, L = M.get(E) ?? 0, z = Number(w[k.valueProperty]);
        return {
          ...w,
          [k.valueProperty]: L > 0 && !Number.isNaN(z) ? z / L * 100 : 0
        };
      })
    } : k);
  }, [e, c]), _ = Ne(() => {
    const M = g.flatMap(
      (w) => w.data.flatMap((E) => [
        Number(E[w.valueProperty]),
        ...w.openProperty ? [Number(E[w.openProperty])] : [],
        ...w.highProperty ? [Number(E[w.highProperty])] : [],
        ...w.lowProperty ? [Number(E[w.lowProperty])] : [],
        ...w.closeProperty ? [Number(E[w.closeProperty])] : []
      ])
    ).filter((w) => !Number.isNaN(w)), k = /* @__PURE__ */ new Map();
    for (const w of g) {
      if (!w.stack) continue;
      let E = k.get(w.stack);
      E || k.set(w.stack, E = /* @__PURE__ */ new Map());
      for (const L of w.data) {
        const z = String(L[w.categoryProperty] ?? ""), P = Number(L[w.valueProperty]);
        Number.isNaN(P) || E.set(z, (E.get(z) ?? 0) + P);
      }
    }
    for (const w of k.values()) M.push(...w.values());
    return M;
  }, [g]), v = r?.min ?? (_.length ? Math.min(0, ..._) : 0), m = r?.max ?? (_.length ? Math.max(..._) : 10), f = Ne(
    () => t$(v, m, r?.step),
    [v, m, r?.step]
  ), y = { t: 16, r: 16, b: 40, l: 56 }, N = t - y.l - y.r, x = n - y.t - y.b, C = (M) => y.l + M / Math.max(1, h.length - 1) * N, $ = (M) => y.t + (1 - (M - f.min) / (f.max - f.min || 1)) * x, S = (M, k) => k.color ?? ka[M % ka.length], T = e.some((M) => Xa.has(M.type)), I = e.some((M) => e$.has(M.type)), A = {
    categories: h,
    scale: f,
    pad: y,
    plotW: N,
    plotH: x,
    xFor: C,
    yFor: $,
    colorFor: S,
    tooltipVisible: s,
    percent: c,
    showTip: (M, k, w) => b({ x: M, y: k, text: w }),
    hideTip: () => b(null),
    handleClick: (M, k, w, E) => l?.({
      seriesTitle: M.title ?? "",
      category: k,
      value: w,
      item: E
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
              T && r?.gridlines !== !1 && f.ticks.map((M) => /* @__PURE__ */ o(
                "line",
                {
                  x1: y.l,
                  x2: y.l + N,
                  y1: $(M),
                  y2: $(M),
                  className: Ze.gridline
                },
                M
              )),
              I && a?.gridlines && h.map((M, k) => /* @__PURE__ */ o(
                "line",
                {
                  x1: C(k),
                  x2: C(k),
                  y1: y.t,
                  y2: y.t + x,
                  className: Ze.gridline
                },
                k
              )),
              T && f.ticks.map((M) => /* @__PURE__ */ o(
                "text",
                {
                  x: y.l - 8,
                  y: $(M) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: c ? `${M}%` : M
                },
                M
              )),
              I && h.map((M, k) => /* @__PURE__ */ o(
                "text",
                {
                  x: C(k),
                  y: y.t + x + 16,
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
                  y: y.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${y.t + x / 2})`,
                  className: Ze.axisTitle,
                  children: r.title
                }
              ),
              I && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: y.l + N / 2,
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
        p && /* @__PURE__ */ o(
          "div",
          {
            className: Ze.tooltip,
            style: { left: p.x, top: p.y - 28 },
            children: p.text
          }
        ),
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: e.map((M, k) => /* @__PURE__ */ D("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: S(k, M) },
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
  return $o(e) ? /* @__PURE__ */ o(ot, { children: t }) : null;
}
function mO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function gO() {
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
  sS as AIChat,
  __ as ALERT_ICON,
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
  su as CheckBox,
  AS as CheckBoxList,
  RS as ColorPicker,
  _S as Column,
  VS as ContextMenuProvider,
  Mr as DEFAULT_OPERATOR_BY_TYPE,
  gv as DEFAULT_PALETTE,
  q$ as DataFilter,
  K$ as DataGrid,
  G$ as DataList,
  jS as DatePicker,
  Ca as Dialog,
  J$ as DialogProvider,
  TS as DropDown,
  KS as DropZone,
  M$ as EmptyState,
  Sa as FILTER_OPERATORS,
  JS as FabMenu,
  ir as Field,
  D$ as Fieldset,
  r0 as Footer,
  I$ as Form,
  A$ as FormField,
  iO as Gantt,
  a0 as Header,
  iS as HtmlEditor,
  Te as Icon,
  no as Input,
  V$ as Label,
  gS as Layout,
  oS as LinearGauge,
  eO as Link,
  MS as ListBox,
  mO as LiveRegion,
  aS as Login,
  lS as Markdown,
  LS as Mask,
  hO as MediaQuery,
  Sw as Menu,
  Ga as MenuItem,
  PS as Numeric,
  Fc as Pager,
  XS as PanelMenu,
  YS as PanelMenuItem,
  Lf as Password,
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
  y0 as Sidebar,
  bS as SidebarToggle,
  WS as SignaturePad,
  fS as Skeleton,
  FS as Slider,
  zS as SplitButton,
  nO as Splitter,
  hS as Stack,
  T$ as Stat,
  tO as Steps,
  Y$ as Switch,
  C$ as Table,
  SS as Tabs,
  Ma as Text,
  ES as TextArea,
  ls as TextBox,
  vS as ThemeToggle,
  HS as TimeSpanPicker,
  dO as Timeline,
  eS as ToastProvider,
  rO as Toc,
  z0 as ToggleButton,
  X$ as Tooltip,
  sO as Tree,
  qS as Upload,
  uO as VirtualGrid,
  Yc as aggregateValue,
  Ea as applyFilters,
  Vc as applyGridState,
  Os as collectGroupKeys,
  ar as columnValue,
  F$ as compare,
  U$ as custom,
  qc as cycleSort,
  Ts as defaultOperatorForType,
  L$ as email,
  da as formatMasked,
  yo as formatValue,
  kS as getAppearance,
  go as getByPath,
  wS as getTheme,
  Hc as groupItems,
  E$ as iconNames,
  Oa as matchesFilters,
  j$ as maxLength,
  R$ as minLength,
  Gc as paginate,
  P$ as pattern,
  B$ as range,
  $p as renderMarkdown,
  z$ as required,
  H$ as requiredTrue,
  Na as resolveVariant,
  xs as runValidators,
  B0 as setAppearance,
  j0 as setTheme,
  Yr as shadeClass,
  uc as sortItems,
  Kc as sortedItems,
  ia as subscribe,
  Xc as toCsv,
  ac as toFilterString,
  dc as toODataFilterString,
  GS as useContextMenu,
  Z$ as useDialog,
  Vi as useFormContext,
  W$ as useFormField,
  gO as useLiveRegion,
  $o as useMediaQuery,
  cS as usePopup,
  NS as useThemeService,
  Q$ as useToast
};
