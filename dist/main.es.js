import { jsx as o, jsxs as M, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as at, useId as ct, isValidElement as Wt, cloneElement as as, useState as U, useRef as le, useEffect as Ne, useCallback as H, useMemo as Se, useContext as Bn, createContext as cr, Fragment as ls, useLayoutEffect as Ko, useImperativeHandle as So, Children as Zr } from "react";
function Yr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const ll = "_button_eyvws_1", il = "_filled_eyvws_36", cl = "_flat_eyvws_55", dl = "_outlined_eyvws_58", ul = "_text_eyvws_63", fl = "_loading_eyvws_506", pl = "_spinner_eyvws_509", _l = "_xs_eyvws_525", hl = "_sm_eyvws_531", ml = "_md_eyvws_537", gl = "_lg_eyvws_543", yl = "_xl_eyvws_549", bl = "_iconOnly_eyvws_555", xl = "_fullWidth_eyvws_585", Mn = {
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
      size: d = "md",
      fullWidth: s = !1,
      iconOnly: l = !1,
      loading: c = !1,
      visible: f = !0,
      className: p,
      disabled: y,
      children: h,
      ...b
    } = t;
    if (f === !1) return null;
    const _ = vl(r, a), m = _.style === "light" || _.style === "dark" ? null : Yr(i), u = [
      Mn.button,
      Mn[_.variant],
      Mn[`style-${_.style}`],
      m ? Mn[m] : null,
      Mn[d],
      s ? Mn.fullWidth : null,
      l ? Mn.iconOnly : null,
      c ? Mn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      p
    ].filter(Boolean).join(" "), g = /* @__PURE__ */ M(ot, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Mn.spinner }) : null,
      h
    ] }), S = t.href;
    if (S != null) {
      const { onClick: $, ...O } = b, C = y || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: S,
          className: u,
          "aria-disabled": C || void 0,
          "aria-busy": c || void 0,
          onClick: (L) => {
            if (C) {
              L.preventDefault();
              return;
            }
            $?.(L);
          },
          ...O,
          children: g
        }
      );
    }
    const { type: x = "button", ...T } = b;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: x,
        className: u,
        disabled: y || c,
        "aria-busy": c || void 0,
        ...T,
        children: g
      }
    );
  }
), wl = "_card_4vcae_1", kl = "_elevated_4vcae_8", Nl = "_filled_4vcae_13", Sl = "_outlined_4vcae_18", $l = "_interactive_4vcae_22", Ol = "_text_4vcae_30", El = "_header_4vcae_46", Tl = "_body_4vcae_53", Cl = "_footer_4vcae_63", Or = {
  card: wl,
  elevated: kl,
  filled: Nl,
  outlined: Sl,
  interactive: $l,
  text: Ol,
  header: El,
  body: Tl,
  footer: Cl
}, TS = at(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: a,
  visible: i = !0,
  children: d,
  onKeyDown: s,
  ...l
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
        onKeyDown: (p) => {
          s?.(p), !(!f || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
        },
        className: [Or.card, Or[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Or.header, children: n }),
          /* @__PURE__ */ o("div", { className: Or.body, children: d }),
          r != null && /* @__PURE__ */ o("div", { className: Or.footer, children: r })
        ]
      }
    )
  );
});
function Sa(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Ml = "_badge_1fy6d_1", Al = "_xs_1fy6d_21", Dl = "_sm_1fy6d_26", Il = "_md_1fy6d_31", zl = "_lg_1fy6d_36", Ll = "_xl_1fy6d_41", Pl = "_neutral_1fy6d_47", Rl = "_primary_1fy6d_52", jl = "_secondary_1fy6d_61", Bl = "_light_1fy6d_66", Fl = "_base_1fy6d_71", Hl = "_dark_1fy6d_76", Ul = "_info_1fy6d_81", ql = "_success_1fy6d_86", Wl = "_warning_1fy6d_95", Kl = "_danger_1fy6d_104", Gl = "_filled_1fy6d_111", Vl = "_outlined_1fy6d_161", Yl = "_text_1fy6d_213", Er = {
  badge: Ml,
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
  success: ql,
  warning: Wl,
  danger: Kl,
  filled: Gl,
  outlined: Vl,
  text: Yl,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, CS = at(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: a = "md",
  className: i,
  visible: d = !0,
  children: s,
  ...l
}, c) {
  if (d === !1) return null;
  const f = t, p = Sa(n, "filled"), y = Yr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        Er.badge,
        Er[a],
        Er[f],
        Er[p],
        y ? Er[y] : null,
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
}, MS = [
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
], Ee = at(function({ icon: t, size: n, color: r, className: a, style: i, ...d }, s) {
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
      ...d,
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
}, AS = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: d, ...s }, l) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: l,
      className: [Qn.stat, d].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Qn.label, children: t }),
        /* @__PURE__ */ M("div", { className: Qn.row, children: [
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
function DS({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: a,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: s,
  visible: l = !0
}) {
  if (l === !1) return null;
  const c = i === "default" || i === "both" ? "" : Hn[i];
  return /* @__PURE__ */ M("div", { className: [Hn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          Hn.table,
          c,
          d ? Hn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          a != null && /* @__PURE__ */ o("caption", { className: Hn.caption, children: a }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Hn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((p) => /* @__PURE__ */ o(
            "td",
            {
              className: p.align != null ? Hn[p.align] : void 0,
              children: p.render != null ? p.render(f) : f[p.key]
            },
            p.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Hn.empty, children: r })
  ] });
}
const wi = "_emptyState_1swxw_1", ki = "_icon_1swxw_13", Ni = "_title_1swxw_18", Si = "_description_1swxw_24", $i = "_action_1swxw_30", Tr = {
  emptyState: wi,
  icon: ki,
  title: Ni,
  description: Si,
  action: $i
};
function IS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [Tr.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Tr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Tr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Tr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Tr.action, children: r })
  ] });
}
const Oi = "_field_149oz_1", Ei = "_label_149oz_8", Ti = "_required_149oz_14", Ci = "_hint_149oz_19", Mi = "_error_149oz_24", Cr = {
  field: Oi,
  label: Ei,
  required: Ti,
  hint: Ci,
  error: Mi
};
function ir({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: a,
  error: i,
  children: d,
  className: s,
  visible: l = !0
}) {
  const c = r ?? a, f = ct(), p = ct(), y = ct();
  if (l === !1) return null;
  const h = i != null ? p : c != null ? y : null, b = typeof d == "function" ? d({ inputId: f, hintId: y, errorId: p }) : d, _ = Wt(b) && typeof b.props.id == "string" ? b.props.id : void 0, v = _ ?? t ?? f, m = Wt(b) && (h != null || _ == null && typeof b.type == "string"), u = _ != null || t != null || m, g = m && Wt(b) ? as(b, {
    id: v,
    "aria-describedby": h != null ? [
      b.props["aria-describedby"],
      h
    ].filter((S) => typeof S == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ M("div", { className: [Cr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: Cr.label,
        htmlFor: u ? v : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Cr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    g,
    i != null ? /* @__PURE__ */ o("div", { id: p, className: Cr.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ o("div", { id: y, className: Cr.hint, children: c }) : null
  ] });
}
const Ai = "_formfield_6e25e_1", Di = "_content_6e25e_8", Ii = "_floating_6e25e_43", zi = "_label_6e25e_111", Li = "_start_6e25e_132", Pi = "_required_6e25e_169", Ri = "_end_6e25e_175", ji = "_filled_6e25e_192", Bi = "_flat_6e25e_199", Fi = "_helper_6e25e_206", Hi = "_invalid_6e25e_211", Sn = {
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
function zS({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: a,
  allowFloatingLabel: i = !0,
  variant: d = "outlined",
  invalid: s = !1,
  required: l = !1,
  children: c,
  className: f,
  visible: p = !0
}) {
  const y = ct(), h = ct();
  if (p === !1) return null;
  const b = a ?? y, _ = typeof c == "function" ? c({
    inputId: b
  }) : c, v = Wt(_) ? _.type : null, m = typeof v == "string", u = Wt(_) && typeof v != "symbol", g = Wt(_) ? _.props : null, S = typeof g?.id == "string" ? g.id : void 0, x = m && Wt(_) ? _.type.toLowerCase() : null, T = x != null && (x === "input" ? typeof g?.type != "string" || g.type.toLowerCase() !== "hidden" : x === "button" || x === "meter" || x === "output" || x === "progress" || x === "select" || x === "textarea"), $ = u && (r != null || s || S == null && T), O = S != null || a != null || $, C = x === "input" && typeof g?.type == "string" ? g.type.toLowerCase() : null, L = x === "textarea" || x === "input" && (C == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(C)), A = $ && Wt(_) ? as(
    _,
    {
      id: S ?? b,
      ...i && L && g?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          g?.["aria-describedby"],
          h
        ].filter((k) => typeof k == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : _, z = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: Sn.label,
      htmlFor: O ? S ?? b : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: Sn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        Sn.formfield,
        Sn[d],
        i ? Sn.floating : null,
        s ? Sn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : z,
        /* @__PURE__ */ M("div", { className: Sn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Sn.start, children: t }),
          A,
          i ? z : null,
          n != null && /* @__PURE__ */ o("div", { className: Sn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: h, className: Sn.helper, children: r })
      ]
    }
  );
}
const Ui = "_fieldset_8x01p_1", qi = "_legend_8x01p_11", Wi = "_legendText_8x01p_20", Ki = "_toggle_8x01p_24", Gi = "_content_8x01p_45", Vi = "_summary_8x01p_49", er = {
  fieldset: Ui,
  legend: qi,
  legendText: Wi,
  toggle: Ki,
  content: Gi,
  summary: Vi
};
function LS({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: a = !1,
  collapsed: i,
  defaultCollapsed: d = !1,
  summary: s,
  expandTitle: l,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: p,
  onExpand: y,
  onCollapse: h,
  children: b,
  className: _,
  visible: v = !0
}) {
  const m = ct(), [u, g] = U(d);
  if (v === !1) return null;
  const S = i ?? u, x = a ? `${m}-content` : void 0, T = () => {
    const z = !S;
    i === void 0 && g(z), z ? h?.() : y?.();
  }, $ = a || e != null || n != null || t != null, O = a ? S : !1, C = a && S && s != null, L = O ? l ?? "Expand" : c ?? "Collapse", A = O ? f ?? "Expand" : p ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [er.fieldset, _].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: er.legend, children: a ? /* @__PURE__ */ M(ot, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: er.toggle,
              title: L,
              "aria-label": e == null ? A : void 0,
              "aria-expanded": !O,
              "aria-controls": x,
              onClick: T,
              children: [
                /* @__PURE__ */ o(
                  Ee,
                  {
                    icon: O ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Ee, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(ot, { children: [
          n != null && /* @__PURE__ */ o(Ee, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: er.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: er.content,
            id: x,
            hidden: O,
            children: b
          }
        ),
        C ? /* @__PURE__ */ o("div", { className: er.summary, children: s }) : null
      ]
    }
  );
}
const Yi = "_form_abp5n_1", Xi = {
  form: Yi
}, $a = cr(null);
function Zi() {
  const e = Bn($a);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function PS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: d
}) {
  const [s, l] = U({}), [c, f] = U(0), p = le(s);
  Ne(() => {
    p.current = s;
  });
  const y = H((g) => {
    l(
      (S) => S[g.name] === g ? S : { ...S, [g.name]: g }
    );
  }, []), h = H((g) => {
    l((S) => {
      if (!(g in S)) return S;
      const x = { ...S };
      return delete x[g], x;
    });
  }, []), b = H(() => {
    const g = {};
    for (const S of Object.values(p.current)) {
      const x = S.validate();
      x.length > 0 && (g[S.name] = x);
    }
    return g;
  }, []), _ = H(() => {
    const g = b();
    f((S) => S + 1), Object.keys(g).length === 0 ? t?.(e) : n?.(g);
  }, [b, e, t, n]), v = (g) => {
    r != null && a != null || (g.preventDefault(), _());
  }, m = Se(
    () => ({ registerField: y, unregisterField: h, submit: _, submitCount: c }),
    [y, h, _, c]
  ), u = [Xi.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o($a.Provider, { value: m, children: /* @__PURE__ */ o(
    "form",
    {
      className: u,
      onSubmit: v,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const dr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", RS = (e = "Required") => (t) => dr(t) ? e : null, jS = (e = "Invalid email") => (t) => dr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, BS = (e, t = "Invalid format") => (n) => {
  if (dr(n)) return null;
  const r = e.lastIndex;
  e.lastIndex = 0;
  const a = e.test(String(n));
  return e.lastIndex = r, a ? null : t;
}, FS = (e, t = `Minimum ${e} characters`) => (n) => dr(n) || String(n).length >= e ? null : t, HS = (e, t = `Maximum ${e} characters`) => (n) => dr(n) || String(n).length <= e ? null : t, US = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (dr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, qS = (e, t = "Values do not match") => (n, r) => {
  if (dr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, WS = (e = "Required") => (t) => t === !0 ? null : e, KS = (e) => (t, n) => e(t, n);
function ws(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function GS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Zi(), [i, d] = U(t?.initialValue), [s, l] = U(!1), [c, f] = U(!1), p = le(() => []);
  Ne(() => {
    p.current = () => ws(t?.validate ?? [], i);
  }), Ne(() => (n({ name: e, validate: () => p.current() }), () => r(e)), [e, n, r]);
  const [y, h] = U(a);
  a !== y && (h(a), a > 0 && (l(!0), f(!1)));
  const b = s && !c ? ws(t?.validate ?? [], i) : [];
  return { value: i, setValue: (v) => {
    d(v), f(!0);
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
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...d }, s) {
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
        ...d,
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
], Mr = {
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
function Wr(e, t) {
  const n = ks(e), r = ks(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function $o(e) {
  if (e.secondOperator == null) return !1;
  if (ac(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Ns(e, t, n) {
  const r = go(t, e.property), a = Ss(
    r,
    e.value,
    e.operator,
    n
  );
  if (!$o(e)) return a;
  const i = Ss(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function Ss(e, t, n, r) {
  const a = r === "CaseInsensitive", i = (l) => a && typeof l == "string" ? l.toLowerCase() : l, d = i(e), s = i(t);
  switch (n) {
    case "Equals":
      return d === s || Array.isArray(d) && d.some((l) => i(l) === s);
    case "NotEquals":
      return d !== s && !(Array.isArray(d) && d.some((l) => i(l) === s));
    case "LessThan":
      return Wr(d, s) < 0;
    case "LessThanOrEquals":
      return Wr(d, s) <= 0;
    case "GreaterThan":
      return Wr(d, s) > 0;
    case "GreaterThanOrEquals":
      return Wr(d, s) >= 0;
    case "Contains":
      return typeof d == "string" && typeof s == "string" && d.includes(s);
    case "StartsWith":
      return typeof d == "string" && typeof s == "string" && d.startsWith(s);
    case "EndsWith":
      return typeof d == "string" && typeof s == "string" && d.endsWith(s);
    case "DoesNotContain":
      return typeof d == "string" && typeof s == "string" && !d.includes(s);
    case "In":
      return Array.isArray(s) && s.some((l) => i(l) === d);
    case "NotIn":
      return Array.isArray(s) && !s.some((l) => i(l) === d);
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
      (d) => Ea(e, d, { logicalOperator: i, caseSensitivity: a })
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
  if (!$o(e))
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
  const n = e.property, r = t === "CaseInsensitive", a = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${dc(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const p = typeof f == "string", y = p && r ? a(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${y} ${uc[c]} ${p && r ? a(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(f))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(f))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${y} in (${f.map((h) => i(h)).join(", ")})` : `${y} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${y} in (${f.map((h) => i(h)).join(", ")}))` : `not(${y} in (${i(f)}))`;
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
  if (!$o(e))
    return d(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${d(e.operator, e.value)} ${s} ${d(
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
      const i = a.sortOrder === "Ascending" ? 1 : -1, d = Wr(
        go(n, a.property),
        go(r, a.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const hc = "_filter_1dvqt_1", mc = "_rows_1dvqt_9", gc = "_row_1dvqt_9", yc = "_join_1dvqt_21", bc = "_property_1dvqt_30", xc = "_operator_1dvqt_34", vc = "_value_1dvqt_38", wc = "_remove_1dvqt_42", kc = "_bar_1dvqt_58", Nc = "_add_1dvqt_64", Sc = "_custom_1dvqt_78", $c = "_summary_1dvqt_82", Oc = "_second_1dvqt_87", Ec = "_secondAdd_1dvqt_91", Tc = "_addSecond_1dvqt_95", Cc = "_joinSelect_1dvqt_109", vt = {
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
  custom: Sc,
  summary: $c,
  second: Oc,
  secondAdd: Ec,
  addSecond: Tc,
  joinSelect: Cc
}, Ar = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], $s = {
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
function VS({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: a = !1,
  className: i,
  viewChanged: d,
  items: s,
  children: l
}) {
  const [c, f] = U(
    () => r != null && r.length > 0 ? r.map((m, u) => ({ id: u, ...m })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Mr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), p = (m, u) => {
    f(
      (g) => g.map((S) => S.id === m ? { ...S, ...u } : S)
    );
  }, y = () => {
    const m = c[c.length - 1], u = Math.max(0, ...c.map((S) => S.id)) + 1, g = e[0];
    f((S) => [
      ...S,
      {
        id: u,
        property: m?.property ?? g?.name ?? "",
        operator: Mr[e.find(
          (x) => x.name === (m?.property ?? g?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (m) => {
    f(
      (u) => u.length > 1 ? u.filter((g) => g.id !== m) : u
    );
  }, b = Se(() => {
    const m = [];
    for (const u of c) {
      if (u.property === "" || (u.value == null || u.value === "") && !Ar.includes(u.operator)) continue;
      const S = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: x } = u;
      x != null && $o(u) && (S.secondOperator = x, S.secondValue = u.secondValue, S.logicalOperator = u.logicalOperator ?? "And"), m.push(S);
    }
    return m;
  }, [c]), _ = Se(() => s == null || b.length === 0 ? s : Ta(s, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [s, b, t, n]);
  Ne(() => {
    d != null && s != null && d(_ ?? []);
  }, [_]);
  const v = (m) => e.find((u) => u.name === m) ?? { name: m, type: "string" };
  return /* @__PURE__ */ M("div", { className: [vt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: vt.rows, role: "group", "aria-label": "Filter conditions", children: c.map((m, u) => {
      const g = v(m.property), S = a ? [Mr[g.type ?? "string"]] : Oa, x = !Ar.includes(m.operator), T = m.secondOperator != null;
      return /* @__PURE__ */ M(ls, { children: [
        /* @__PURE__ */ M("div", { className: vt.row, children: [
          u > 0 ? /* @__PURE__ */ o("span", { className: vt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            wr,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: vt.property,
              value: m.property,
              onChange: ($) => {
                const O = e.find(
                  (C) => C.name === $.target.value
                );
                p(m.id, {
                  property: $.target.value,
                  operator: Mr[O?.type ?? "string"],
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
              "aria-label": `Condition ${u + 1} operator`,
              className: vt.operator,
              value: m.operator,
              onChange: ($) => {
                const O = $.target.value;
                p(
                  m.id,
                  Ar.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: S.map(($) => ({
                value: $,
                label: $s[$]
              }))
            }
          ),
          x ? /* @__PURE__ */ o(
            Os,
            {
              property: g,
              value: m.value,
              onChange: ($) => p(m.id, { value: $ })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vt.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => h(m.id),
              children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
            }
          )
        ] }),
        x ? T ? /* @__PURE__ */ M(
          "div",
          {
            className: [vt.row, vt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                wr,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
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
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: vt.operator,
                  value: m.secondOperator,
                  onChange: ($) => {
                    const O = $.target.value;
                    p(
                      m.id,
                      Ar.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: S.map(($) => ({
                    value: $,
                    label: $s[$]
                  }))
                }
              ),
              m.secondOperator == null || !Ar.includes(m.secondOperator) ? /* @__PURE__ */ o(
                Os,
                {
                  property: g,
                  value: m.secondValue,
                  onChange: ($) => p(m.id, { secondValue: $ })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: vt.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
                  onClick: () => p(m.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
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
              secondOperator: Mr[g.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, m.id);
    }) }),
    /* @__PURE__ */ M("div", { className: vt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: vt.add, onClick: y, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: vt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ M("span", { className: vt.summary, "aria-live": "polite", children: [
        _?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Mc = "_pager_1du31_1", Ac = "_alignLeft_1du31_10", Dc = "_alignCenter_1du31_14", Ic = "_alignRight_1du31_18", zc = "_alignJustify_1du31_22", Lc = "_summary_1du31_26", Pc = "_controls_1du31_31", Rc = "_button_1du31_37", jc = "_active_1du31_73", Bc = "_ellipsis_1du31_85", Fc = "_size_1du31_91", Ht = {
  pager: Mc,
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
  const d = [];
  for (let s = a; s <= i; s++) d.push(s);
  return a > 2 && d.unshift("ellipsis"), a > 1 && d.unshift(1), i < t - 1 && d.push("ellipsis"), i < t && d.push(t), d;
}
function qc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: a,
  pageNumbersCount: i = 5,
  alwaysVisible: d = !1,
  horizontalAlign: s = "left",
  showPagingSummary: l,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: p,
  pageSizeText: y = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: v = "Last page",
  pageTitleFormat: m = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: g,
  onPageSizeChange: S,
  ariaLabel: x = "Pagination",
  className: T,
  visible: $ = !0
}) {
  const O = n ?? r, [C, L] = U(O), A = n !== void 0, z = A ? O : C, k = Math.max(1, Math.ceil(e / t)), w = Math.min(Math.max(1, z), k), N = l ?? !0, I = d || k > 1, D = Uc(w, k, i), P = H(
    (oe) => {
      const ie = Math.min(Math.max(1, oe), k);
      A || L(ie);
      const Q = (ie - 1) * t;
      g?.({
        page: ie,
        skip: Q,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [A, g, k, t]
  ), B = s === "center" ? Ht.alignCenter : s === "right" ? Ht.alignRight : s === "justify" ? Ht.alignJustify : Ht.alignLeft, W = {
    count: e,
    pageNumber: w,
    pageSize: t,
    pageCount: k
  }, re = (oe) => {
    const ie = Array.from(
      oe.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), Q = ie.indexOf(document.activeElement);
    Q !== -1 && (oe.key === "ArrowRight" || oe.key === "ArrowDown" ? (oe.preventDefault(), (ie[Q + 1] ?? ie[0])?.focus()) : oe.key === "ArrowLeft" || oe.key === "ArrowUp" ? (oe.preventDefault(), (ie[Q - 1] ?? ie[ie.length - 1])?.focus()) : oe.key === "Home" ? (oe.preventDefault(), ie[0]?.focus()) : oe.key === "End" && (oe.preventDefault(), ie[ie.length - 1]?.focus()));
  };
  return $ === !1 || !I ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [Ht.pager, B, T].filter(Boolean).join(" "),
      "aria-label": x,
      children: [
        N && /* @__PURE__ */ o("span", { className: Ht.summary, "aria-live": "polite", children: p ? p(W) : Hc(f, w, k, e) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: Ht.controls,
            role: "group",
            "aria-label": x,
            onKeyDown: re,
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
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              D.map(
                (oe, ie) => oe === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${ie}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": oe,
                    className: [Ht.button, oe === w ? Ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": oe === w ? "page" : void 0,
                    "aria-label": Es(u, oe),
                    title: Es(m, oe),
                    onClick: () => P(oe),
                    children: oe
                  },
                  oe
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
        c && a && a.length > 0 && /* @__PURE__ */ M("label", { className: Ht.size, children: [
          /* @__PURE__ */ o("span", { children: y }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (oe) => S?.(Number(oe.target.value)),
              "aria-label": y,
              children: a.map((oe) => /* @__PURE__ */ o("option", { value: oe, children: oe }, oe))
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
    qc,
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
const Ca = "";
function Wc(e, t, n, r, a) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((l) => l.property === s), d = (s, l, c) => {
    const f = t[l];
    if (f === void 0)
      return s.map((_) => ({ type: "row", row: _ }));
    const p = i(f), y = /* @__PURE__ */ new Map(), h = [];
    s.forEach((_) => {
      const v = String(a(_, f) ?? ""), m = y.get(v);
      m ? m.push(_) : (y.set(v, [_]), h.push(v));
    });
    const b = [];
    return h.forEach((_) => {
      const v = y.get(_), m = [...c, _].join(Ca), u = v[0], g = u !== void 0 ? a(u, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: m,
          display: yo(g, p?.format),
          property: f,
          title: p?.title ?? f,
          count: v.length,
          level: l
        }
      }), r.has(m) && b.push(...d(v, l + 1, [...c, _]));
    }), b;
  };
  return d(e, 0, []);
}
function Ts(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, d, s) => {
    const l = t[d];
    if (l === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((p) => {
      const y = String(n(p, l) ?? ""), h = c.get(y);
      h ? h.push(p) : (c.set(y, [p]), f.push(y));
    }), f.forEach((p) => {
      const y = [...s, p].join(Ca);
      r.add(y), a(c.get(p), d + 1, [...s, p]);
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
    const d = t[a] ?? i.width ?? "8rem";
    r += parseFloat(d);
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
const Cs = [
  "Ascending",
  "Descending",
  null
];
function Vc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Cs[(r ? Cs.indexOf(r.sortOrder) : -1) + 1] ?? null;
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
function Ms(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Jc(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((a) => {
    const i = n(a, t.property);
    if (i == null || i === "") return;
    const d = Number(i);
    Number.isFinite(d) && r.push(d);
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
      t.map((d) => r(yo(n(i, d.property), d.format))).join(",")
    );
  }), `${a.join(`\r
`)}\r
`;
}
const ed = "_grid_13rur_1", td = "_toolbar_13rur_8", nd = "_picker_13rur_13", rd = "_pickerButton_13rur_17", od = "_pickerPanel_13rur_31", sd = "_pickerItem_13rur_46", ad = "_groupPanel_13rur_55", ld = "_groupPanelActive_13rur_66", id = "_groupPanelText_13rur_70", cd = "_groupChip_13rur_74", dd = "_groupRemove_13rur_85", ud = "_groupRow_13rur_94", fd = "_groupCell_13rur_98", pd = "_groupToggle_13rur_104", _d = "_editRow_13rur_117", hd = "_editCell_13rur_121", md = "_editInput_13rur_127", gd = "_commandCell_13rur_137", yd = "_commandButton_13rur_144", bd = "_data_13rur_159", xd = "_table_13rur_166", vd = "_header_13rur_172", wd = "_center_13rur_185", kd = "_right_13rur_189", Nd = "_sortButton_13rur_193", Sd = "_sortIndicator_13rur_211", $d = "_sortIndex_13rur_215", Od = "_cell_13rur_226", Ed = "_clickable_13rur_241", Td = "_frozen_13rur_249", Cd = "_selected_13rur_255", Md = "_resizeHandle_13rur_263", Ad = "_filterCell_13rur_281", Dd = "_filterSelect_13rur_290", Id = "_filterInput_13rur_300", zd = "_empty_13rur_311", Ld = "_loading_13rur_317", Pd = "_visuallyHidden_13rur_331", Rd = "_virtualScroller_13rur_340", jd = "_spacerRow_13rur_345", Bd = "_footerRow_13rur_350", Fd = "_footerCell_13rur_354", Hd = "_footerValue_13rur_361", Oe = {
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
  sortIndicator: Sd,
  sortIndex: $d,
  cell: Od,
  clickable: Ed,
  frozen: Td,
  selected: Cd,
  resizeHandle: Md,
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
function qd(e, t) {
  return e.sortable ?? t;
}
function Wd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function YS({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: a = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: p,
  pageNumbersCount: y = 5,
  pagerPosition: h = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: _ = !0,
  selectionMode: v = "None",
  selectedKeys: m,
  onSelectionChange: u,
  showColumnPicker: g = !1,
  columnPickerText: S = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: T = !1,
  allowGrouping: $ = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: C = !0,
  aggregates: L,
  showExportButton: A = !1,
  exportFileName: z = "grid-data",
  serverMode: k = !1,
  totalCount: w,
  onRangeChange: N,
  virtualize: I = !1,
  virtualRowHeight: D = 40,
  virtualHeight: P = 480,
  editMode: B = "None",
  allowRowCreate: W = !1,
  onRowUpdate: re,
  onRowCreate: oe,
  onRowDelete: ie,
  isLoading: Q = !1,
  empty: Ie = "No records found",
  ariaLabel: J,
  className: V,
  onRowClick: Y
}) {
  const he = J != null ? `${J} ` : "", [ee, me] = U([]), [K, $e] = U(
    /* @__PURE__ */ new Map()
  ), [se, Ae] = U(1), [ye, We] = U(f), [Je, Ge] = U(
    () => e.map((q, G) => to(q, G))
  ), [Qe, He] = U(
    () => new Set(
      e.map((q, G) => q.visible !== !1 ? to(q, G) : "").filter(Boolean)
    )
  ), [gt, te] = U({}), [Te, lt] = U(!1), [ze, st] = U([]), [Xe, Tt] = U(
    null
  ), [yt, it] = U(null), [ft, Ve] = U({}), [Ct, ae] = U(0), [Le, wt] = U(P), Mt = le(null), bt = le(null), R = Se(() => {
    const q = /* @__PURE__ */ new Map();
    return e.forEach((G, be) => q.set(to(G, be), G)), q;
  }, [e]), X = Se(
    () => Je.filter((q) => Qe.has(q)).map((q) => ({ key: q, column: R.get(q) })).filter(
      (q) => q.column != null
    ),
    [Je, Qe, R]
  ), ge = Se(
    () => Kc(X, gt),
    [X, gt]
  ), we = B !== "None" || ie != null || W, fe = Se(() => {
    if (k) {
      const q = w ?? t.length, G = Math.max(1, Math.ceil(q / ye));
      return {
        items: [...t],
        filtered: [...t],
        total: q,
        pageCount: G,
        pageNumber: se,
        pageSize: ye,
        sorts: ee,
        filters: K
      };
    }
    return Zc(
      t,
      {
        sorts: ee,
        filters: K,
        pageNumber: se,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? ye : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: l,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((q) => q.type != null && q.property != null).map((q) => [
            q.property,
            q.type
          ])
        )
      }
    );
  }, [
    t,
    ee,
    K,
    se,
    ye,
    l,
    s,
    e,
    k,
    w,
    c
  ]), F = le(N);
  Ne(() => {
    F.current = N;
  });
  const pe = Se(
    () => [...K.entries()].filter(([, q]) => q.value !== "" && q.value !== void 0).map(([q, G]) => ({
      property: q,
      operator: G.operator ?? Ms(
        e.find((be) => be.property === q)?.type ?? "string"
      ),
      value: G.value ?? ""
    })),
    [K, e]
  );
  Ne(() => {
    !k || F.current == null || F.current({
      start: (se - 1) * ye,
      count: ye,
      pageNumber: se,
      pageSize: ye,
      sorts: ee,
      filters: pe,
      logicalOperator: l
    });
  }, [
    k,
    se,
    ye,
    ee,
    pe,
    l
  ]);
  const Re = Se(() => new Set(ze), [ze]), De = Se(() => Xe || (C ? Ts(fe.items, ze, ar) : /* @__PURE__ */ new Set()), [Xe, C, fe.items, ze]), It = Se(
    () => Wc(fe.items, ze, e, De, ar),
    [fe.items, ze, e, De]
  ), et = Se(
    () => ze.length > 0 ? X.filter(
      (q) => q.column.property == null || !Re.has(q.column.property)
    ) : X,
    [X, ze, Re]
  ), mn = (q) => {
    q !== "" && me(Vc(ee, q, { multi: a }));
  }, Nn = (q, G) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(q, G), xe;
    }), Ae(1);
  }, Z = (q) => {
    We(q), Ae(1);
  }, ce = (q) => {
    if (v === "None") return;
    const G = n(q), be = m ?? [];
    let xe;
    v === "Single" ? xe = be.length === 1 && be[0] === G ? [] : [G] : xe = be.includes(G) ? be.filter((nt) => nt !== G) : [...be, G], u?.(xe);
  }, _e = (q) => {
    Y?.(q);
  }, ke = (q, G, be) => {
    Mt.current = { key: q, startX: G, startWidth: be };
  }, ve = (q) => {
    const G = Mt.current;
    if (!G) return;
    const be = q - G.startX, xe = Math.max(48, G.startWidth + be);
    te((nt) => ({ ...nt, [G.key]: `${xe}px` }));
  }, Me = () => {
    Mt.current = null;
  }, Ye = (q) => {
    bt.current = q;
  }, Fe = (q) => {
    const G = bt.current;
    bt.current = null, !(!G || G === q) && Ge((be) => {
      const xe = [...be], nt = xe.indexOf(G), zt = xe.indexOf(q);
      return nt < 0 || zt < 0 ? be : (xe.splice(nt, 1), xe.splice(zt, 0, G), xe);
    });
  }, dt = (q) => {
    He((G) => {
      const be = new Set(G);
      return be.has(q) ? be.delete(q) : be.add(q), be;
    });
  }, xt = () => {
    const q = bt.current;
    if (bt.current = null, !q || !$) return;
    const be = R.get(q)?.property;
    be && (st(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Tt(null));
  }, je = (q) => {
    st((G) => G.filter((be) => be !== q)), Tt(null);
  }, tt = (q) => {
    Tt((G) => {
      const be = G ?? (C ? Ts(fe.items, ze, ar) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(q) ? xe.delete(q) : xe.add(q), xe;
    });
  }, ut = (q) => {
    const G = {};
    e.forEach((be) => {
      be.property && (G[be.property] = ar(q, be.property));
    }), Ve(G), it(String(n(q)));
  }, Jt = () => {
    const q = {};
    e.forEach((G) => {
      G.property && G.type === "boolean" && (q[G.property] = !1);
    }), Ve(q), it("__new__");
  }, At = () => {
    it(null), Ve({});
  }, dn = (q) => {
    if (yt === "__new__") {
      const G = Object.fromEntries(
        e.filter((be) => be.property).map((be) => [be.property, ft[be.property]])
      );
      oe?.(G);
    } else if (q != null) {
      const G = { ...q, ...ft };
      re?.(q, G);
    }
    At();
  }, Zn = c && (h === "Top" || h === "TopAndBottom"), Jn = c && (h === "Bottom" || h === "TopAndBottom"), Fn = d && e.some((q) => As(q, d)), To = (q, G, be) => q.render ? q.render(G, { index: 0 }) : yo(ar(G, q.property), q.format), Co = (q) => {
    const G = [Oe.cell];
    return q.align === "center" && G.push(Oe.center), q.align === "right" && G.push(Oe.right), q.frozen && G.push(Oe.frozen), G.join(" ");
  }, gn = k ? t : fe.filtered, Jr = () => {
    const q = Qc(
      gn,
      et.map((nt) => nt.column)
    ), G = new Blob([`\uFEFF${q}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(G), xe = document.createElement("a");
    xe.href = be, xe.download = `${z}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, yn = It.length, Bt = Se(() => {
    if (!I || yn === 0)
      return { start: 0, end: yn, top: 0, bottom: 0 };
    const q = 5, G = Math.max(
      0,
      Math.floor(Ct / D) - q
    ), be = Math.ceil(Le / D) + q * 2, xe = Math.min(yn, G + be), nt = G * D, zt = Math.max(0, (yn - xe) * D);
    return { start: G, end: xe, top: nt, bottom: zt };
  }, [I, yn, Ct, D, Le]), $r = et.length + (we ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [Oe.grid, V].filter(Boolean).join(" "), children: [
    Zn && /* @__PURE__ */ o(
      Go,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: p,
        pageNumbersCount: y,
        showSummary: b,
        showPageSizeSelector: _,
        ariaLabel: `${he}${Jn ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: Z
      }
    ),
    ($ || W || g || A) && /* @__PURE__ */ M("div", { className: Oe.toolbar, children: [
      $ && // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- drop target for drag-to-group (pointer affordance)
      /* @__PURE__ */ o(
        "div",
        {
          className: [
            Oe.groupPanel,
            ze.length > 0 ? Oe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (q) => q.preventDefault() : void 0,
          onDrop: $ ? xt : void 0,
          children: ze.length > 0 ? ze.map((q) => {
            const G = e.find((be) => be.property === q)?.title ?? q;
            return /* @__PURE__ */ M("span", { className: Oe.groupChip, children: [
              G,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Oe.groupRemove,
                  onClick: () => je(q),
                  "aria-label": `Remove group by ${G}`,
                  children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
                }
              )
            ] }, q);
          }) : /* @__PURE__ */ o("span", { className: Oe.groupPanelText, children: O })
        }
      ),
      W && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: Jt,
          children: "Add row"
        }
      ),
      g && /* @__PURE__ */ M("div", { className: Oe.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Oe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Te,
            onClick: () => lt((q) => !q),
            children: S
          }
        ),
        Te && /* @__PURE__ */ o(
          "div",
          {
            className: Oe.pickerPanel,
            role: "menu",
            "aria-label": S,
            children: e.map((q, G) => {
              const be = to(q, G);
              return /* @__PURE__ */ M("label", { className: Oe.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Qe.has(be),
                    onChange: () => dt(be)
                  }
                ),
                q.title ?? q.property
              ] }, be);
            })
          }
        )
      ] }),
      A && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: Jr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [Oe.data, I ? Oe.virtualScroller : ""].filter(Boolean).join(" "),
        style: I ? { maxHeight: P } : void 0,
        onScroll: I ? (q) => {
          ae(q.currentTarget.scrollTop), wt(q.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: Oe.table,
              role: "grid",
              "aria-rowcount": (I ? yn : fe.total) + 1,
              "aria-label": J,
              "aria-busy": Q || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
                  et.map(({ key: q, column: G }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: gt[q] ?? G.width,
                        minWidth: G.minWidth,
                        maxWidth: G.maxWidth
                      }
                    },
                    q
                  )),
                  we && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    et.map(({ key: q, column: G }) => {
                      const be = qd(G, r), xe = ee.find((St) => St.property === G.property), nt = xe ? ee.indexOf(xe) + 1 : 0, zt = G.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": be && xe ? Ud[xe.sortOrder] : "none",
                          className: [
                            Oe.header,
                            zt === "center" ? Oe.center : "",
                            zt === "right" ? Oe.right : "",
                            G.frozen ? Oe.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: G.frozen ? { left: ge[q] } : void 0,
                          scope: "col",
                          draggable: T || $ || void 0,
                          onDragStart: T || $ ? (St) => {
                            St.dataTransfer && (St.dataTransfer.effectAllowed = "move"), Ye(q);
                          } : void 0,
                          onDragOver: T ? (St) => St.preventDefault() : void 0,
                          onDrop: T ? () => Fe(q) : void 0,
                          children: [
                            be ? /* @__PURE__ */ M(
                              "button",
                              {
                                type: "button",
                                className: Oe.sortButton,
                                onClick: () => G.property != null && mn(G.property),
                                "aria-label": xe ? xe.sortOrder === "Ascending" ? `Sort ${G.title ?? G.property} descending` : `Sort ${G.title ?? G.property} ascending` : `Sort ${G.title ?? G.property} ascending`,
                                children: [
                                  G.title ?? G.property,
                                  xe && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Oe.sortIndicator,
                                      "aria-hidden": "true",
                                      children: xe.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  nt > 1 && i && /* @__PURE__ */ o("span", { className: Oe.sortIndex, children: nt })
                                ]
                              }
                            ) : G.title ?? G.property,
                            x && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- pointer-drag column resize; keyboard column resize is not implemented
                            /* @__PURE__ */ o(
                              "span",
                              {
                                className: Oe.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${G.title ?? G.property}`,
                                onMouseDown: (St) => {
                                  St.preventDefault(), St.stopPropagation();
                                  const bn = gt[q] ?? G.width, Dt = bn ? parseFloat(bn) : 96;
                                  ke(
                                    q,
                                    St.clientX,
                                    Number.isFinite(Dt) ? Dt : 96
                                  );
                                },
                                onMouseMove: (St) => {
                                  Mt.current?.key === q && ve(St.clientX);
                                },
                                onMouseUp: Me,
                                onMouseLeave: () => {
                                  Mt.current?.key === q && Me();
                                }
                              }
                            )
                          ]
                        },
                        q
                      );
                    }),
                    we && /* @__PURE__ */ o("th", { className: Oe.header, scope: "col", children: "Actions" })
                  ] }),
                  Fn && /* @__PURE__ */ o("tr", { children: et.map(({ key: q, column: G }) => {
                    if (!As(G, d))
                      return /* @__PURE__ */ o("td", { className: Oe.filterCell }, q);
                    const be = K.get(G.property ?? "");
                    return /* @__PURE__ */ M("td", { className: Oe.filterCell, children: [
                      /* @__PURE__ */ M(
                        "label",
                        {
                          className: Oe.visuallyHidden,
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
                          className: Oe.filterSelect,
                          value: be?.operator ?? Ms(G.type ?? "string"),
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
                          className: Oe.filterInput,
                          value: be?.value ?? "",
                          onChange: (xe) => Nn(G.property ?? "", {
                            ...be,
                            value: xe.target.value
                          }),
                          placeholder: `Filter ${G.title ?? G.property}`,
                          "aria-label": `${G.title ?? G.property} value`
                        }
                      )
                    ] }, q);
                  }) })
                ] }),
                /* @__PURE__ */ M("tbody", { children: [
                  yt === "__new__" && /* @__PURE__ */ M("tr", { className: Oe.editRow, children: [
                    et.map(({ key: q, column: G }) => /* @__PURE__ */ o("td", { className: Oe.editCell, children: G.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Oe.editInput,
                        type: G.type === "number" ? "number" : G.type === "boolean" ? "checkbox" : "text",
                        checked: G.type === "boolean" ? !!ft[G.property] : void 0,
                        value: G.type === "boolean" ? void 0 : String(ft[G.property] ?? ""),
                        onChange: (be) => Ve((xe) => ({
                          ...xe,
                          [G.property]: G.type === "boolean" ? be.target.checked : be.target.value
                        })),
                        "aria-label": `${G.title ?? G.property} (new)`
                      }
                    ) }, q)),
                    we && /* @__PURE__ */ M("td", { className: Oe.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: () => dn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: At,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  Bt.top > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: $r,
                      style: { height: Bt.top }
                    }
                  ) }),
                  It.slice(Bt.start, Bt.end).map((q, G) => {
                    const be = Bt.start + G, xe = I ? be + 2 : void 0;
                    if (q.type === "group" && q.group) {
                      const Dt = De.has(q.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Oe.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ o("td", { colSpan: $r, className: Oe.groupCell, children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: Oe.groupToggle,
                              "aria-expanded": Dt,
                              style: {
                                paddingInlineStart: `${q.group.level * 16}px`
                              },
                              onClick: () => tt(q.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Dt ? "▼" : "▶" }),
                                q.group.title,
                                ": ",
                                q.group.display,
                                " (",
                                q.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${q.group.key}`
                      );
                    }
                    const nt = q.row, zt = n(nt), St = (m ?? []).includes(zt), bn = yt != null && yt === String(zt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          Y || v !== "None" ? Oe.clickable : "",
                          St ? Oe.selected : "",
                          bn ? Oe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": v !== "None" ? St : void 0,
                        onClick: Y || v !== "None" ? (Dt) => {
                          Wd(Dt.target) || (_e(nt), ce(nt));
                        } : void 0,
                        children: [
                          et.map(({ key: Dt, column: kt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Co(kt),
                              style: kt.frozen ? { left: ge[Dt] } : void 0,
                              children: bn && kt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Oe.editInput,
                                  type: kt.type === "number" ? "number" : kt.type === "boolean" ? "checkbox" : "text",
                                  checked: kt.type === "boolean" ? !!ft[kt.property] : void 0,
                                  value: kt.type === "boolean" ? void 0 : String(ft[kt.property] ?? ""),
                                  onChange: (Qt) => Ve((Mo) => ({
                                    ...Mo,
                                    [kt.property]: kt.type === "boolean" ? Qt.target.checked : Qt.target.value
                                  })),
                                  "aria-label": `${kt.title ?? kt.property} (edit)`
                                }
                              ) : To(kt, nt)
                            },
                            Dt
                          )),
                          we && /* @__PURE__ */ o("td", { className: Oe.commandCell, children: bn ? /* @__PURE__ */ M(ot, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => dn(nt),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: At,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(ot, { children: [
                            B !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => ut(nt),
                                children: "Edit"
                              }
                            ),
                            ie && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => ie(nt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      zt
                    );
                  }),
                  Bt.bottom > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: $r,
                      style: { height: Bt.bottom }
                    }
                  ) })
                ] }),
                L && L.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ M("tr", { className: Oe.footerRow, children: [
                  et.map(({ key: q, column: G }) => {
                    const be = L.filter(
                      (xe) => xe.property === G.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Oe.footerCell,
                          G.align === "right" ? Oe.right : "",
                          G.align === "center" ? Oe.center : ""
                        ].filter(Boolean).join(" "),
                        children: be.map((xe, nt) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: Oe.footerValue,
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
                      q
                    );
                  }),
                  we && /* @__PURE__ */ o("td", { className: Oe.footerCell })
                ] }) })
              ]
            }
          ),
          fe.items.length === 0 && !Q && /* @__PURE__ */ o("div", { className: Oe.empty, children: Ie }),
          Q && /* @__PURE__ */ o("div", { className: Oe.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Jn && /* @__PURE__ */ o(
      Go,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: p,
        pageNumbersCount: y,
        showSummary: b,
        showPageSizeSelector: _,
        ariaLabel: `${he}${Zn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
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
function XS({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: a,
  emptyMessage: i = "No records found",
  emptyTemplate: d,
  loadingTemplate: s,
  isLoading: l = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: p = "Data list"
}) {
  const [y, h] = U(1), [b, _] = U(t), v = e.length, m = Math.max(1, Math.ceil(v / b)), u = Math.min(Math.max(1, y), m), g = Se(() => {
    const x = (u - 1) * b;
    return e.slice(x, x + b);
  }, [e, u, b]), S = r ? Dr.grid : Dr.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Dr.wrap, f].filter(Boolean).join(" "),
      "aria-label": p,
      children: [
        l && s != null ? s : v === 0 ? d ?? /* @__PURE__ */ o("div", { className: Dr.empty, children: i }) : /* @__PURE__ */ o("div", { className: S, children: g.map((x, T) => /* @__PURE__ */ o("div", { className: Dr.item, children: a ? a(x, T) : String(x) }, T)) }),
        /* @__PURE__ */ o(
          Go,
          {
            ariaLabel: `${p} Pagination`,
            pageNumber: u,
            pageSize: b,
            count: v,
            pageSizeOptions: n,
            showPageSizeSelector: c,
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
}, ZS = at(function({ className: t, children: n, ...r }, a) {
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
    ...d
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
        ...d
      }
    );
  }
), no = cs, au = "_checkbox_1bb6c_1", lu = {
  checkbox: au
}, iu = at(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = le(null);
    return Ne(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof a == "function" ? a(d) : a && (a.current = d);
        },
        type: "checkbox",
        className: [lu.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), cu = {
  switch: "_switch_19gf1_1"
}, JS = at(function({ className: t, ...n }, r) {
  const [a, i] = U(
    !!n.defaultChecked
  ), d = n.checked ?? a;
  return /* @__PURE__ */ o(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": d,
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
function QS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: d
}) {
  const s = ct(), l = le(null), c = le(null), f = le(() => {
  }), [p, y] = U(!1), [h, b] = U(null), _ = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, v = () => {
    _(), l.current = window.setTimeout(() => {
      l.current = null, y(!0);
    }, r);
  }, m = () => {
    _(), y(!1);
  };
  if (Ne(() => () => _(), []), Ne(() => {
    if (!p || a == null) return;
    const g = window.setTimeout(() => y(!1), a);
    return () => window.clearTimeout(g);
  }, [p, a]), Ne(() => {
    if (i || !p) return;
    const g = (S) => {
      S.key === "Escape" && m();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [i, p]), Ne(() => {
    if (!i) return;
    let g = null, S = null;
    const x = () => {
      g !== null && (window.clearTimeout(g), g = null);
    }, T = () => {
      x(), S = null, b(null);
    };
    f.current = T;
    const $ = (k) => {
      x(), S = k, g = window.setTimeout(() => {
        g = null, b(k);
      }, r);
    }, O = (k) => k instanceof Element ? k.closest(i) : null, C = (k) => {
      const w = O(k.target);
      !w || w === S || $(w);
    }, L = (k) => {
      const w = O(k.target);
      if (!w || w !== S) return;
      const N = k.relatedTarget;
      N instanceof Element && w.contains(N) || T();
    }, A = (k) => {
      k.key === "Escape" && T();
    }, z = () => T();
    return document.addEventListener("mouseover", C), document.addEventListener("mouseout", L), document.addEventListener("focusin", C), document.addEventListener("focusout", L), document.addEventListener("keydown", A), document.addEventListener("scroll", z, !0), window.addEventListener("resize", z), () => {
      x(), document.removeEventListener("mouseover", C), document.removeEventListener("mouseout", L), document.removeEventListener("focusin", C), document.removeEventListener("focusout", L), document.removeEventListener("keydown", A), document.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), S = null, b(null);
    };
  }, [i, r]), Ne(() => {
    if (!i || h === null || a == null) return;
    const g = window.setTimeout(() => f.current(), a);
    return () => window.clearTimeout(g);
  }, [i, h, a]), Ko(() => {
    const g = h;
    if (!g) return;
    const S = g.getAttribute("aria-describedby");
    return g.setAttribute(
      "aria-describedby",
      [S, s].filter(Boolean).join(" ")
    ), () => {
      S == null ? g.removeAttribute("aria-describedby") : g.setAttribute("aria-describedby", S);
    };
  }, [h, s]), Ko(() => {
    const g = c.current, S = h;
    !g || !S || Object.assign(
      g.style,
      yu(S.getBoundingClientRect(), n)
    );
  }, [h, n]), i)
    return h ? /* @__PURE__ */ M(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: s,
        className: [
          Un.tooltip,
          Un[n],
          Un.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: Un.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const u = Wt(t) ? as(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      p ? s : null
    ].filter((g) => typeof g == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [Un.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: v,
        onMouseLeave: m,
        onFocus: v,
        onBlur: m,
        children: [
          u,
          p && /* @__PURE__ */ M(
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
const bu = "_dialog_1t7pw_1", xu = "_sm_1t7pw_104", vu = "_resizable_1t7pw_110", wu = "_md_1t7pw_113", ku = "_lg_1t7pw_117", Nu = "_header_1t7pw_121", Su = "_title_1t7pw_132", $u = "_description_1t7pw_139", Ou = "_close_1t7pw_146", Eu = "_body_1t7pw_176", Tu = "_footer_1t7pw_188", xn = {
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
  title: Su,
  description: $u,
  close: Ou,
  body: Eu,
  footer: Tu
};
function Ma({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: a,
  footer: i,
  size: d = "md",
  width: s,
  height: l,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: p = !1,
  side: y = null,
  showCloseButton: h = !0,
  showMask: b = !0,
  canClose: _,
  className: v
}) {
  const m = le(null), u = ct(), g = ct(), S = le(t);
  Ne(() => {
    S.current = t;
  });
  const x = le(_);
  Ne(() => {
    x.current = _;
  });
  const T = le(f);
  Ne(() => {
    T.current = f;
  });
  const $ = le(!1), O = le(!1), C = H(() => {
    if ($.current) return;
    const z = x.current?.();
    if (z instanceof Promise) {
      z.then((k) => {
        k && !$.current && ($.current = !0, S.current());
      });
      return;
    }
    z !== !1 && ($.current = !0, S.current());
  }, []), L = H(() => {
    if (O.current) {
      O.current = !1;
      return;
    }
    S.current();
  }, []), A = H(
    (z) => {
      if (z.key !== "Tab" || !m.current) return;
      const k = Array.from(
        m.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (N) => N.offsetWidth > 0 || N.offsetHeight > 0 || N === document.activeElement
      );
      if (k.length === 0) {
        z.preventDefault();
        return;
      }
      const w = k.indexOf(document.activeElement);
      if (z.shiftKey) {
        if (w <= 0) {
          z.preventDefault();
          const N = k[k.length - 1];
          N && N.focus();
        }
      } else if (w === -1 || w === k.length - 1) {
        z.preventDefault();
        const N = k[0];
        N && N.focus();
      }
    },
    []
  );
  return Ne(() => {
    const z = m.current;
    if (z)
      if (e && !z.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        z.showModal(), (z.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? z.querySelector("button"))?.focus();
        const N = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const I = (D) => {
          D.preventDefault(), T.current && C();
        };
        return z.addEventListener("cancel", I), () => {
          z.removeEventListener("cancel", I), document.body.style.overflow = N, k?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && (O.current = $.current, $.current = !1, z.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button. The dialog's own
  // onKeyDown={keepFocusInside} satisfies the keyboard-listener rules.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click closes the dialog; ESC and the close button are the keyboard paths
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: m,
      className: [
        xn.dialog,
        xn[d],
        p ? xn.resizable : null,
        y ? xn[`side-${y}`] : null,
        b === !1 ? xn["no-mask"] : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: L,
      onClick: (z) => {
        z.target === m.current && c && C();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? u : void 0,
      "aria-describedby": r ? g : void 0,
      onKeyDown: A,
      children: [
        n && /* @__PURE__ */ M("header", { className: xn.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ o("h2", { id: u, className: xn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: g, className: xn.description, children: r })
          ] }),
          h !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: xn.close,
              onClick: () => {
                C();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: xn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: xn.footer, children: i })
      ]
    }
  );
}
const Cu = "_typography_1jy8x_1", Mu = "_h1_1jy8x_39", Au = "_h2_1jy8x_45", Du = "_h3_1jy8x_51", Iu = "_h4_1jy8x_57", zu = "_h5_1jy8x_63", Lu = "_h6_1jy8x_69", Pu = "_button_1jy8x_99", Ru = "_caption_1jy8x_106", ju = "_overline_1jy8x_112", Lo = {
  typography: Cu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Mu,
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
  className: d,
  children: s,
  ...l
}, c) {
  if (i === !1) return null;
  const f = n === "auto" ? Bu[t] : Hu[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: c,
      className: [
        Lo.typography,
        Lo[Fu[t]],
        r ? Lo[Uu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Da = cr(null);
function e$() {
  const e = Bn(Da);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function t$({ children: e }) {
  const [t, n] = U([]), [, r] = U(0), a = le(0), i = () => (a.current += 1, a.current), d = le([]);
  Ne(() => {
    d.current = t;
  });
  const s = (y) => {
    const h = d.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!y) : h.kind === "alert" ? h.resolve() : h.resolve(y), n((b) => b.slice(1)));
  }, l = Se(
    () => ({
      confirm: (y = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "confirm", options: y, resolve: h }
        ]);
      }),
      alert: (y = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "alert", options: y, resolve: h }
        ]);
      }),
      open: (y = {}) => new Promise((h) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "custom", options: y, resolve: h }
        ]);
      }),
      openSide: ({ position: y, showMask: h = !0, ...b }) => new Promise((_) => {
        n((v) => [
          ...v,
          {
            seq: i(),
            kind: "custom",
            options: { ...b, side: y, showMask: h },
            resolve: _
          }
        ]);
      }),
      close: (y) => s(y),
      closeAll: () => {
        n((y) => (y.forEach((h) => {
          h.kind === "confirm" ? h.resolve(!1) : h.kind === "alert" ? h.resolve() : h.resolve(void 0);
        }), []));
      },
      refresh: () => r((y) => y + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    []
  ), c = t[0];
  function f(y) {
    c && (c.kind === "confirm" ? c.resolve(!!y) : c.kind === "alert" ? c.resolve() : c.resolve(y), n((h) => h.slice(1)));
  }
  const p = c?.kind === "custom" ? c.options : null;
  return /* @__PURE__ */ M(Da.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ma,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: c?.kind === "custom" ? p?.title ?? "Dialog" : c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        description: p?.description,
        size: c?.kind === "custom" ? p?.size : c?.options.size,
        width: p?.width,
        height: p?.height,
        side: p?.side ?? null,
        showCloseButton: p?.showCloseButton,
        showMask: p?.showMask,
        closeOnOverlayClick: p?.closeOnOverlayClick,
        closeOnEsc: p?.closeOnEsc,
        className: p?.className,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ M(ot, { children: [
          /* @__PURE__ */ o(cn, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            cn,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? p?.footer ?? /* @__PURE__ */ o(cn, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(cn, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? p?.content : c?.options.message != null && /* @__PURE__ */ o(Aa, { textStyle: "body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const qu = "_viewport_11t1p_1", Wu = "_topLeft_11t1p_13", Ku = "_topRight_11t1p_20", Gu = "_bottomLeft_11t1p_25", Vu = "_toast_11t1p_30", Yu = "_leaving_11t1p_61", Xu = "_info_11t1p_77", Zu = "_success_11t1p_86", Ju = "_warning_11t1p_95", Qu = "_danger_11t1p_104", ef = "_content_11t1p_113", tf = "_title_11t1p_118", nf = "_description_11t1p_141", rf = "_dismiss_11t1p_148", of = "_actions_11t1p_169", sf = "_action_11t1p_169", af = "_cancel_11t1p_177", lf = "_progress_11t1p_215", tn = {
  viewport: qu,
  topLeft: Wu,
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
function n$() {
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
function r$({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, d] = U([]), [s, l] = U(!1), c = le([]), f = le(/* @__PURE__ */ new Map()), p = le(!1), y = le(0), h = (w) => {
    p.current = w, l(w);
  }, b = H((w) => {
    const N = f.current.get(w);
    N && (window.clearTimeout(N.timeoutId), N.remaining = Math.max(
      0,
      N.remaining - (Date.now() - N.startedAt)
    ));
  }, []), _ = H((w) => {
    const N = f.current.get(w);
    N && (window.clearTimeout(N.timeoutId), f.current.delete(w));
  }, []), v = H(
    (w) => {
      _(w), d((N) => {
        const I = N.filter((D) => D.id !== w);
        return c.current = I, I;
      });
    },
    [_]
  ), m = H(
    (w) => {
      const N = c.current.find((I) => I.id === w);
      !N || N.leaving || (N.onAutoClose?.(), v(w));
    },
    [v]
  ), u = H(
    (w) => {
      const N = f.current.get(w);
      !N || N.remaining <= 0 || (N.startedAt = Date.now(), N.timeoutId = window.setTimeout(() => m(w), N.remaining));
    },
    [m]
  ), g = H(() => {
    p.current || f.current.forEach((w, N) => b(N)), h(!0);
  }, [b]), S = H(() => {
    f.current.forEach((w, N) => u(N)), h(!1);
  }, [u]);
  Ne(() => {
    if (!r) return;
    const w = () => {
      document.hidden ? g() : S();
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, [r, g, S]);
  const x = H(
    (w) => {
      const N = c.current.find((I) => I.id === w);
      !N || N.leaving || (N.onDismiss?.(), d((I) => {
        const D = I.map(
          (P) => P.id === w ? { ...P, leaving: !0 } : P
        );
        return c.current = D, D;
      }), window.setTimeout(() => v(w), cf));
    },
    [v]
  ), T = H(
    (w) => {
      if (w.durationMs <= 0) return;
      const N = {
        remaining: w.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(w.id, N), p.current || u(w.id);
    },
    [u]
  ), $ = H(
    (w) => {
      const N = c.current.find((D) => D.id === w.id), I = {
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
      d((D) => {
        const P = N ? D.map(
          (B) => B.id === I.id ? { ...I, leaving: !1 } : B
        ) : [...D, I];
        return c.current = P, P;
      }), N && _(I.id), T(I);
    },
    [t, n, T, _]
  ), O = H(
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
  ), C = H(
    (w) => (N, I) => O({ severity: w, summary: N, detail: I }),
    [O]
  ), L = Se(
    () => ({
      toast: $,
      notify: O,
      notifyInfo: C("info"),
      notifySuccess: C("success"),
      notifyWarning: C("warning"),
      notifyError: C("danger")
    }),
    [$, O, C]
  ), A = Se(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((w) => w.position)])),
    [n, i]
  ), z = r ? g : void 0, k = r ? S : void 0;
  return /* @__PURE__ */ M(Ia.Provider, { value: L, children: [
    e,
    A.map((w) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- hover listeners pause auto-dismiss; the live region itself is not interactive
      /* @__PURE__ */ o(
        "div",
        {
          className: [tn.viewport, tn[df[w]], a].filter(Boolean).join(" "),
          "aria-live": "polite",
          "aria-atomic": "false",
          onMouseEnter: z,
          onMouseLeave: k,
          children: i.filter((N) => N.position === w).map((N) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click-to-close is a pointer affordance; the dismiss button provides the keyboard path
            /* @__PURE__ */ M(
              "div",
              {
                role: N.severity === "danger" ? "alert" : "status",
                "data-paused": s ? "true" : "false",
                "data-clickable": N.closeOnClick ? "true" : "false",
                className: [
                  tn.toast,
                  tn[N.severity],
                  N.leaving ? tn.leaving : ""
                ].filter(Boolean).join(" "),
                onClick: N.click || N.closeOnClick ? () => {
                  N.click?.(N.payload), N.closeOnClick && x(N.id);
                } : void 0,
                children: [
                  /* @__PURE__ */ M("div", { className: tn.content, children: [
                    /* @__PURE__ */ o("div", { className: tn.title, children: N.title }),
                    N.description && /* @__PURE__ */ o("div", { className: tn.description, children: N.description }),
                    (N.action || N.cancel) && /* @__PURE__ */ M("div", { className: tn.actions, children: [
                      N.action && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.action,
                          onClick: () => {
                            N.action?.onClick?.(), x(N.id);
                          },
                          children: N.action.label
                        }
                      ),
                      N.cancel && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: tn.cancel,
                          onClick: () => {
                            N.cancel?.onClick?.(), x(N.id);
                          },
                          children: N.cancel.label
                        }
                      )
                    ] })
                  ] }),
                  N.dismissible && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: tn.dismiss,
                      onClick: () => x(N.id),
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
                    }
                  ),
                  N.showProgress && N.durationMs > 0 && /* @__PURE__ */ o(
                    "div",
                    {
                      className: tn.progress,
                      style: { animationDuration: `${N.durationMs}ms` }
                    }
                  )
                ]
              },
              N.id
            )
          ))
        },
        w
      )
    ))
  ] });
}
const uf = "_navigator_848v2_3", ff = "_track_848v2_9", pf = "_spark_848v2_19", _f = "_window_848v2_28", hf = "_handle_848v2_37", qn = {
  navigator: uf,
  track: ff,
  spark: pf,
  window: _f,
  handle: hf
};
function Ds(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), d = Math.max(n, Math.min(r, t));
  if (d - i < a) {
    const s = (i + d) / 2;
    i = Math.max(n, s - a / 2), d = Math.min(r, i + a), i = Math.max(n, d - a);
  }
  return i > d && ([i, d] = [d, i]), { start: i, end: d };
}
function o$({
  min: e = 0,
  max: t = 100,
  value: n,
  defaultValue: r,
  onChange: a,
  data: i,
  minSpan: d = 0,
  ariaLabel: s = "Range navigator",
  className: l
}) {
  const c = n !== void 0, [f, p] = U(
    () => r && Ds(
      r.start,
      r.end,
      e,
      t,
      d
    ) || {
      start: e,
      end: t
    }
  ), y = c && n ? n : f, h = le(null), b = le(null), _ = H(
    (O) => {
      const C = Ds(O.start, O.end, e, t, d);
      c || p(C), a?.(C);
    },
    [c, e, t, d, a]
  ), v = H(
    (O) => {
      const C = b.current;
      if (!C) return e;
      const L = C.getBoundingClientRect(), A = L.width > 0 ? (O - L.left) / L.width : 0;
      return e + Math.max(0, Math.min(1, A)) * (t - e || 1);
    },
    [e, t]
  ), m = H(
    (O) => (Math.max(e, Math.min(t, O)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  Ne(() => {
    const O = (L) => {
      const A = h.current;
      if (!A) return;
      const z = v(L.clientX);
      if (A.mode === "start") _({ start: z, end: y.end });
      else if (A.mode === "end") _({ start: y.start, end: z });
      else {
        const k = y.end - y.start, w = z - A.grabOffset;
        _({ start: w, end: w + k });
      }
    }, C = () => {
      h.current = null;
    };
    return document.addEventListener("pointermove", O), document.addEventListener("pointerup", C), () => {
      document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", C);
    };
  }, [_, v, y]);
  const u = (O, C) => {
    C.preventDefault(), C.target.focus?.(), h.current = { mode: O, grabOffset: 0 };
  }, g = (O) => {
    const C = v(O.clientX);
    if (C >= y.start && C <= y.end)
      h.current = { mode: "pan", grabOffset: C - y.start };
    else {
      const L = Math.abs(C - y.start), A = Math.abs(C - y.end);
      L <= A ? _({ start: C, end: y.end }) : _({ start: y.start, end: C });
    }
  }, S = (t - e || 1) / 100, x = (O) => (C) => {
    const L = C.shiftKey ? S * 10 : S;
    C.key === "ArrowLeft" || C.key === "ArrowDown" ? (C.preventDefault(), _(
      O === "start" ? { start: y.start - L, end: y.end } : { start: y.start, end: y.end - L }
    )) : C.key === "ArrowRight" || C.key === "ArrowUp" ? (C.preventDefault(), _(
      O === "start" ? { start: y.start + L, end: y.end } : { start: y.start, end: y.end + L }
    )) : C.key === "Home" ? (C.preventDefault(), _(
      O === "start" ? { start: e, end: y.end } : { start: y.start, end: t }
    )) : C.key === "End" && (C.preventDefault(), _(
      O === "start" ? { start: y.end - d, end: y.end } : { start: y.start, end: t }
    ));
  }, T = m(y.start), $ = Math.max(0, m(y.end) - T);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [qn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ M("div", { ref: b, className: qn.track, onPointerDown: g, children: [
        i && i.length > 1 && /* @__PURE__ */ o(
          "svg",
          {
            className: qn.spark,
            viewBox: "0 0 100 24",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: /* @__PURE__ */ o(
              "polyline",
              {
                points: i.map((O, C) => {
                  const L = C / (i.length - 1) * 100, A = Math.max(...i), z = Math.min(...i), k = A === z ? 12 : 22 - (O - z) / (A - z) * 20;
                  return `${L},${k}`;
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
            className: qn.window,
            style: { left: `${T}%`, width: `${$}%` }
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
            className: [qn.handle, qn.handleStart].filter(Boolean).join(" "),
            style: { left: `${T}%` },
            onPointerDown: (O) => u("start", O),
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
            "aria-valuenow": Math.round(y.end * 100) / 100,
            className: [qn.handle, qn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${T + $}%` },
            onPointerDown: (O) => u("end", O),
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
  const [i, d] = zs(e, t, n, r), [s, l] = zs(e, t, n, a), c = a - r > 180 ? 1 : 0;
  return `M ${i} ${d} A ${n} ${n} 0 ${c} 1 ${s} ${l}`;
}
function bf(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const a of t)
    e >= a.offset && (r = a.color);
  return r;
}
function s$({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: a,
  colorStops: i,
  size: d = 200,
  showValue: s = !0,
  formatValue: l = (p) => String(Math.round(p * 100) / 100),
  ariaLabel: c = "Gauge",
  className: f
}) {
  const p = n - t || 1, y = Math.max(0, Math.min(1, (e - t) / p)), h = "var(--dx-border-color)", b = a ?? "var(--dx-primary-color)", _ = 100, v = 96, m = 80, u = oo + Is * y;
  return /* @__PURE__ */ M(
    "div",
    {
      role: "meter",
      "aria-label": c,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, f].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ M("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ls(_, v, m, oo, oo + Is),
              fill: "none",
              stroke: h,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          y > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Ls(_, v, m, oo, u),
              fill: "none",
              stroke: bf(y, i, b),
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
      (i, d) => Number((e + d * r).toFixed(6))
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
  const [i, d] = kr(e, t, n, r), [s, l] = kr(e, t, n, a), c = a - r > 180 ? 1 : 0;
  return `M ${i} ${d} A ${n} ${n} 0 ${c} 1 ${s} ${l}`;
}
function a$({
  value: e,
  min: t = 0,
  max: n = 100,
  startAngle: r = 0,
  endAngle: a = 360,
  ticks: i = {},
  ranges: d = [],
  pointers: s = [],
  color: l,
  size: c = 200,
  showValue: f = !0,
  formatValue: p = (b) => String(Math.round(b * 100) / 100),
  ariaLabel: y = "Gauge",
  className: h
}) {
  const b = n - t || 1, _ = (z) => Math.max(0, Math.min(1, (z - t) / b)), m = a - r >= 360 ? r + 359.999 : a, u = (z) => r + (m - r) * _(z), g = l ?? "var(--dx-primary-color)", S = "var(--dx-border-color)", { count: x = 8, step: T, showLabels: $ = !0 } = i, O = 100, C = 100, L = 78, A = (z, k, w) => {
    const [N, I] = kr(O, C, L - 14, u(z));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: O,
        y1: C,
        x2: N,
        y2: I,
        stroke: k,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, w);
  };
  return /* @__PURE__ */ M(
    "div",
    {
      role: "meter",
      "aria-label": y,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, h].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ M("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ps(O, C, L, r, m),
              fill: "none",
              stroke: S,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          d.map((z, k) => /* @__PURE__ */ o(
            "path",
            {
              d: Ps(
                O,
                C,
                L,
                u(Math.max(t, z.from)),
                u(Math.min(n, z.to))
              ),
              fill: "none",
              stroke: z.color,
              strokeWidth: 12
            },
            `range-${k}`
          )),
          za(t, n, x, T).map((z, k) => {
            const [w, N] = kr(O, C, L - 10, u(z)), [I, D] = kr(O, C, L - 16, u(z)), [P, B] = kr(O, C, L - 26, u(z));
            return /* @__PURE__ */ M("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: w,
                  y1: N,
                  x2: I,
                  y2: D,
                  stroke: S,
                  strokeWidth: 1.5
                }
              ),
              $ && /* @__PURE__ */ o(
                "text",
                {
                  x: P,
                  y: B + 4,
                  textAnchor: "middle",
                  className: Pn.tick,
                  children: Vo(z)
                }
              )
            ] }, k);
          }),
          A(e, g, "value"),
          s.map(
            (z, k) => A(z.value, z.color ?? g, `extra-${k}`)
          ),
          /* @__PURE__ */ o("circle", { cx: O, cy: C, r: 7, fill: g })
        ] }),
        f && /* @__PURE__ */ o("div", { className: Pn.value, children: p(e) })
      ]
    }
  );
}
function l$({
  value: e,
  min: t = 0,
  max: n = 100,
  orientation: r = "horizontal",
  ticks: a = {},
  ranges: i = [],
  color: d,
  length: s,
  thickness: l = 20,
  showValue: c = !0,
  formatValue: f = (h) => String(Math.round(h * 100) / 100),
  ariaLabel: p = "Gauge",
  className: y
}) {
  const h = n - t || 1, b = r === "vertical", _ = s ?? (b ? 220 : 280), { count: v = 5, step: m, showLabels: u = !0 } = a, g = d ?? "var(--dx-primary-color)", S = "var(--dx-border-color)", x = 8, T = (A) => {
    const k = (Math.max(t, Math.min(n, A)) - t) / h;
    return b ? _ - x - k * (_ - x * 2) : x + k * (_ - x * 2);
  }, $ = () => za(t, n, v, m).map((A, z) => {
    const k = T(A);
    return /* @__PURE__ */ M("g", { children: [
      b ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: k,
          x2: 0,
          y2: k,
          stroke: S,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: k,
          y1: -6,
          x2: k,
          y2: 0,
          stroke: S,
          strokeWidth: 1.5
        }
      ),
      u && (b ? /* @__PURE__ */ o("text", { x: -10, y: k + 4, textAnchor: "end", className: Pn.tick, children: Vo(A) }) : /* @__PURE__ */ o("text", { x: k, y: -10, textAnchor: "middle", className: Pn.tick, children: Vo(A) }))
    ] }, z);
  }), O = () => i.map((A, z) => {
    const k = T(A.from), w = T(A.to), N = Math.min(k, w), I = Math.abs(w - k);
    return b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: N,
        width: l,
        height: I,
        fill: A.color,
        opacity: 0.35
      },
      z
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: I,
        height: l,
        fill: A.color,
        opacity: 0.35
      },
      z
    );
  }), C = T(e), L = /* @__PURE__ */ M("g", { children: [
    O(),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: x,
        width: l,
        height: _ - x * 2,
        rx: l / 2,
        fill: "none",
        stroke: S,
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
        stroke: S,
        strokeWidth: 2
      }
    ),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: C,
        width: l,
        height: _ - x - C,
        rx: l / 2,
        fill: g
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x,
        y: -l / 2,
        width: Math.max(0, C - x),
        height: l,
        rx: l / 2,
        fill: g
      }
    ),
    b ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${C} L ${-l / 2 - 2} ${C - 5} L ${-l / 2 - 2} ${C + 5} Z`,
        fill: g
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${C} ${-l / 2 - 10} L ${C - 5} ${-l / 2 - 2} L ${C + 5} ${-l / 2 - 2} Z`,
        fill: g
      }
    ),
    $()
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      role: "meter",
      "aria-label": p,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Pn.gauge, y].filter(Boolean).join(" "),
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
        c && /* @__PURE__ */ o("div", { className: Pn.value, children: f(e) })
      ]
    }
  );
}
const xf = "_chat_1apnf_3", vf = "_messages_1apnf_9", wf = "_message_1apnf_9", kf = "_user_1apnf_29", Nf = "_assistant_1apnf_35", Sf = "_system_1apnf_40", $f = "_typing_1apnf_46", Of = "_inputRow_1apnf_51", pr = {
  chat: xf,
  messages: vf,
  message: wf,
  user: kf,
  assistant: Nf,
  system: Sf,
  typing: $f,
  inputRow: Of
};
function i$({
  messages: e = [],
  onSend: t,
  placeholder: n = "Type a message…",
  sendText: r = "Send",
  inputLabel: a = "Message",
  ariaLabel: i = "Chat",
  messageTemplate: d,
  inputTemplate: s,
  loading: l = !1,
  disabled: c = !1,
  className: f
}) {
  const [p, y] = U(""), h = l || c, b = p.trim().length > 0 && !h, _ = (m) => {
    m.preventDefault();
    const u = p.trim();
    !u || h || (y(""), t?.(u));
  }, v = /* @__PURE__ */ M("form", { className: pr.inputRow, onSubmit: (m) => {
    _(m);
  }, children: [
    /* @__PURE__ */ o(
      cs,
      {
        value: p,
        placeholder: n,
        "aria-label": a,
        disabled: h,
        onChange: (m) => y(m.target.value)
      }
    ),
    /* @__PURE__ */ o(cn, { type: "submit", disabled: !b, loading: l, children: r })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      className: [pr.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ M("div", { className: pr.messages, children: [
          e.map(
            (m, u) => d ? /* @__PURE__ */ o("div", { children: d(m, u) }, u) : /* @__PURE__ */ o(
              "div",
              {
                className: [pr.message, pr[m.role]].filter(Boolean).join(" "),
                children: m.content
              },
              u
            )
          ),
          l && /* @__PURE__ */ o("div", { className: pr.typing, children: "…" })
        ] }),
        s ? s(v) : v
      ]
    }
  );
}
const Ef = "_wrapper_1ulz6_1", Tf = "_input_1ulz6_8", Cf = "_invalid_1ulz6_38", Mf = "_toggle_1ulz6_45", Af = "_xs_1ulz6_80", Df = "_sm_1ulz6_86", If = "_md_1ulz6_92", zf = "_lg_1ulz6_98", Lf = "_xl_1ulz6_104", Ir = {
  wrapper: Ef,
  input: Tf,
  invalid: Cf,
  toggle: Mf,
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
    hideLabel: d = "Hide password",
    ...s
  }, l) {
    const [c, f] = U(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Ir.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: c ? "text" : "password",
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
            "aria-pressed": c,
            "aria-label": c ? d : i,
            disabled: a,
            onClick: () => f((p) => !p),
            children: /* @__PURE__ */ o(Ee, { icon: c ? "visibility_off" : "visibility", size: 16 })
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
function qf(e) {
  const t = e === void 0 ? ds : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function c$({
  action: e,
  method: t = "post",
  onLogin: n,
  onRegister: r,
  onForgotPassword: a,
  registerContent: i,
  forgotPasswordContent: d,
  rememberMe: s = !0,
  loading: l = !1,
  title: c,
  usernameLabel: f = "Username",
  passwordLabel: p = "Password",
  submitText: y = "Sign in",
  storageKey: h,
  className: b
}) {
  const [_, v] = U(() => Hf(h) ?? ""), [m, u] = U(""), [g, S] = U(!1), [x, T] = U(!1), [$, O] = U({}), C = l || x, L = e != null && n == null, A = async (z) => {
    L || z.preventDefault();
    const k = {};
    if (_.trim() || (k.username = "Username is required."), m || (k.password = "Password is required."), O(k), !(k.username || k.password || !n)) {
      T(!0);
      try {
        await n({
          username: _.trim(),
          password: m,
          rememberMe: g
        }), g ? Uf(h, _.trim()) : qf(h);
      } finally {
        T(!1);
      }
    }
  };
  return /* @__PURE__ */ M(
    "form",
    {
      className: [zr.login, b].filter(Boolean).join(" "),
      action: L ? e : void 0,
      method: L ? t : void 0,
      noValidate: !0,
      onSubmit: (z) => {
        A(z);
      },
      children: [
        c != null && /* @__PURE__ */ o("div", { className: zr.title, children: c }),
        /* @__PURE__ */ o(ir, { label: f, required: !0, error: $.username, children: ({ inputId: z }) => /* @__PURE__ */ o(
          cs,
          {
            id: z,
            value: _,
            autoComplete: "username",
            disabled: C,
            "aria-invalid": $.username ? !0 : void 0,
            onChange: (k) => {
              v(k.target.value), O((w) => ({ ...w, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ir, { label: p, required: !0, error: $.password, children: ({ inputId: z }) => /* @__PURE__ */ o(
          Pf,
          {
            id: z,
            value: m,
            autoComplete: "current-password",
            disabled: C,
            "aria-invalid": $.password ? !0 : void 0,
            onChange: (k) => {
              u(k.target.value), O((w) => ({ ...w, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ M("label", { className: zr.remember, children: [
          /* @__PURE__ */ o(
            iu,
            {
              checked: g,
              disabled: C,
              onChange: (z) => S(z.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(cn, { type: "submit", loading: C, disabled: C, children: y }),
        (d ?? a) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: zr.link,
            onClick: () => a?.(),
            children: d ?? "Forgot password?"
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
function Wf(e) {
  if (Array.isArray(e)) return e;
}
function Kf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, d, s = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      c = !0, a = f;
    } finally {
      try {
        if (!l && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw a;
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
  return Wf(e) || Kf(e, t) || Yf(e, t) || Gf();
}
function Yf(e, t) {
  if (e) {
    if (typeof e == "string") return Rs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rs(e, t) : void 0;
  }
}
const La = Object.entries, js = Object.setPrototypeOf, Xf = Object.isFrozen, Zf = Object.getPrototypeOf, Jf = Object.getOwnPropertyDescriptor;
let $t = Object.freeze, Et = Object.seal, vr = Object.create, Pa = typeof Reflect < "u" && Reflect, Yo = Pa.apply, Xo = Pa.construct;
$t || ($t = function(t) {
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
const lr = Nt(Array.prototype.forEach), Qf = Nt(Array.prototype.lastIndexOf), Bs = Nt(Array.prototype.pop), Lr = Nt(Array.prototype.push), ep = Nt(Array.prototype.splice), Nr = Array.isArray, Kr = Nt(String.prototype.toLowerCase), Po = Nt(String.prototype.toString), Fs = Nt(String.prototype.match), Pr = Nt(String.prototype.replace), Hs = Nt(String.prototype.indexOf), tp = Nt(String.prototype.trim), np = Nt(Number.prototype.toString), rp = Nt(Boolean.prototype.toString), Us = typeof BigInt > "u" ? null : Nt(BigInt.prototype.toString), qs = typeof Symbol > "u" ? null : Nt(Symbol.prototype.toString), Yt = Nt(Object.prototype.hasOwnProperty), Rr = Nt(Object.prototype.toString), Rt = Nt(RegExp.prototype.test), Wn = op(TypeError);
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
      return qs ? qs(e) : "Symbol()";
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
const Ws = $t([
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
]), Ro = $t([
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
]), jo = $t([
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
]), ip = $t([
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
]), Bo = $t([
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
]), cp = $t([
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
]), Ks = $t(["#text"]), Gs = $t([
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
]), Fo = $t([
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
]), Vs = $t([
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
]), so = $t([
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
], vp = $t(Ke({}, Ra)), wp = (function() {
  const e = {};
  return lr(Ra, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $t(e);
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
  const i = e.HTMLTemplateElement, d = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, p = s.prototype, y = hn(p, "cloneNode"), h = hn(p, "remove"), b = hn(p, "removeAttributeNode"), _ = hn(p, "nextSibling"), v = hn(p, "childNodes"), m = hn(p, "parentNode"), u = hn(p, "shadowRoot"), g = hn(p, "attributes"), S = d && d.prototype ? hn(d.prototype, "nodeType") : null, x = d && d.prototype ? hn(d.prototype, "nodeName") : null, T = d && d.prototype ? hn(d.prototype, "ownerDocument") : null, $ = function(E) {
    return S ? S(E) : E.nodeType;
  }, O = function(E) {
    return x ? x(E) : E.nodeName;
  };
  if (typeof i == "function") {
    const de = n.createElement("template");
    de.content && de.content.ownerDocument && (n = de.content.ownerDocument);
  }
  let C, L = "", A, z = !1, k = 0;
  const w = function() {
    if (k > 0) throw Wn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, N = function(E) {
    w(), k++;
    try {
      return C.createHTML(E);
    } finally {
      k--;
    }
  }, I = function(E) {
    w(), k++;
    try {
      return C.createScriptURL(E);
    } finally {
      k--;
    }
  }, D = function() {
    return z || (A = Np(f, a), z = !0), A;
  }, P = n, B = P.implementation, W = P.createNodeIterator, re = P.createDocumentFragment, oe = P.getElementsByTagName, ie = r.importNode;
  let Q = Js();
  t.isSupported = typeof La == "function" && typeof m == "function" && B && B.createHTMLDocument !== void 0;
  const Ie = dp, J = up, V = fp, Y = pp, he = _p, ee = hp, me = mp, K = yp;
  let $e = Ys, se = null;
  const Ae = Ke({}, [
    ...Ws,
    ...Ro,
    ...jo,
    ...Bo,
    ...Ks
  ]);
  let ye = null;
  const We = Ke({}, [
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
  let gt = !0, te = !0, Te = !1, lt = !0, ze = !1, st = !0, Xe = !1, Tt = !1, yt = null, it = null, ft = !1, Ve = !1, Ct = !1, ae = !1, Le = !0, wt = !1;
  const Mt = "user-content-";
  let bt = !0, R = !1, X = {}, ge = null;
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
  ]), De = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let mn = et, Nn = !1, Z = null;
  const ce = Ke({}, [
    De,
    It,
    et
  ], Po), _e = $t([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ke = Ke({}, _e);
  const ve = $t(["annotation-xml"]);
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
  const ut = n.createElement("form"), Jt = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, At = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (tt && tt === E) return;
    (!E || typeof E != "object") && (E = {}), E = sn(E), Fe = dt.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? xt : E.PARSER_MEDIA_TYPE, je = Fe === "application/xhtml+xml" ? Po : Kr, se = Kn(E, "ALLOWED_TAGS", Ae, { transform: je }), ye = Kn(E, "ALLOWED_ATTR", We, { transform: je }), Z = Kn(E, "ALLOWED_NAMESPACES", ce, { transform: Po }), pe = Kn(E, "ADD_URI_SAFE_ATTR", Re, {
      transform: je,
      base: Re
    }), fe = Kn(E, "ADD_DATA_URI_TAGS", F, {
      transform: je,
      base: F
    }), ge = Kn(E, "FORBID_CONTENTS", we, { transform: je }), Ge = Kn(E, "FORBID_TAGS", sn({}), { transform: je }), Qe = Kn(E, "FORBID_ATTR", sn({}), { transform: je }), X = Yt(E, "USE_PROFILES") ? E.USE_PROFILES && typeof E.USE_PROFILES == "object" ? sn(E.USE_PROFILES) : E.USE_PROFILES : !1, gt = E.ALLOW_ARIA_ATTR !== !1, te = E.ALLOW_DATA_ATTR !== !1, Te = E.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = E.SAFE_FOR_TEMPLATES || !1, st = E.SAFE_FOR_XML !== !1, Xe = E.WHOLE_DOCUMENT || !1, Ve = E.RETURN_DOM || !1, Ct = E.RETURN_DOM_FRAGMENT || !1, ae = E.RETURN_TRUSTED_TYPE || !1, ft = E.FORCE_BODY || !1, Le = E.SANITIZE_DOM !== !1, wt = E.SANITIZE_NAMED_PROPS || !1, bt = E.KEEP_CONTENT !== !1, R = E.IN_PLACE || !1, $e = lp(E.ALLOWED_URI_REGEXP) ? E.ALLOWED_URI_REGEXP : Ys, mn = typeof E.NAMESPACE == "string" ? E.NAMESPACE : et, ke = Ho(E, "MATHML_TEXT_INTEGRATION_POINTS", () => Ke({}, _e)), Me = Ho(E, "HTML_INTEGRATION_POINTS", () => Ke({}, ve));
    const j = Ho(E, "CUSTOM_ELEMENT_HANDLING", () => vr(null));
    if (Je = vr(null), Yt(j, "tagNameCheck") && Jt(j.tagNameCheck) && (Je.tagNameCheck = j.tagNameCheck), Yt(j, "attributeNameCheck") && Jt(j.attributeNameCheck) && (Je.attributeNameCheck = j.attributeNameCheck), Yt(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (Je.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), Et(Je), ze && (te = !1), Ct && (Ve = !0), X && (se = Ke({}, Ks), ye = vr(null), X.html === !0 && (Ke(se, Ws), Ke(ye, Gs)), X.svg === !0 && (Ke(se, Ro), Ke(ye, Fo), Ke(ye, so)), X.svgFilters === !0 && (Ke(se, jo), Ke(ye, Fo), Ke(ye, so)), X.mathMl === !0 && (Ke(se, Bo), Ke(ye, Vs), Ke(ye, so))), He.tagCheck = null, He.attributeCheck = null, Yt(E, "ADD_TAGS") && (typeof E.ADD_TAGS == "function" ? He.tagCheck = E.ADD_TAGS : Nr(E.ADD_TAGS) && (se === Ae && (se = sn(se)), Ke(se, E.ADD_TAGS, je))), Yt(E, "ADD_ATTR") && (typeof E.ADD_ATTR == "function" ? He.attributeCheck = E.ADD_ATTR : Nr(E.ADD_ATTR) && (ye === We && (ye = sn(ye)), Ke(ye, E.ADD_ATTR, je))), Yt(E, "ADD_FORBID_CONTENTS") && Nr(E.ADD_FORBID_CONTENTS) && (ge === we && (ge = sn(ge)), Ke(ge, E.ADD_FORBID_CONTENTS, je)), bt && (se["#text"] = !0), Xe && Ke(se, [
      "html",
      "head",
      "body"
    ]), se.table && (Ke(se, ["tbody"]), delete Ge.tbody), E.TRUSTED_TYPES_POLICY) {
      if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function") throw Wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const ne = C;
      C = E.TRUSTED_TYPES_POLICY;
      try {
        L = N("");
      } catch (ue) {
        throw C = ne, ue;
      }
    } else E.TRUSTED_TYPES_POLICY === null ? (C = void 0, L = "") : (C === void 0 && (C = D()), C && typeof L == "string" && (L = N("")));
    $t && $t(E), tt = E;
  }, dn = Ke({}, [
    ...Ro,
    ...jo,
    ...ip
  ]), Zn = Ke({}, [...Bo, ...cp]), Jn = function(E, j, ne) {
    return j.namespaceURI === et ? E === "svg" : j.namespaceURI === De ? E === "svg" && (ne === "annotation-xml" || ke[ne]) : !!dn[E];
  }, Fn = function(E, j, ne) {
    return j.namespaceURI === et ? E === "math" : j.namespaceURI === It ? E === "math" && Me[ne] : !!Zn[E];
  }, To = function(E, j, ne) {
    return j.namespaceURI === It && !Me[ne] || j.namespaceURI === De && !ke[ne] ? !1 : !Zn[E] && (Ye[E] || !dn[E]);
  }, Co = function(E) {
    let j = m(E);
    (!j || !j.tagName) && (j = {
      namespaceURI: mn,
      tagName: "template"
    });
    const ne = Kr(E.tagName), ue = Kr(j.tagName);
    return Z[E.namespaceURI] ? E.namespaceURI === It ? Jn(ne, j, ue) : E.namespaceURI === De ? Fn(ne, j, ue) : E.namespaceURI === et ? To(ne, j, ue) : !!(Fe === "application/xhtml+xml" && Z[E.namespaceURI]) : !1;
  }, gn = function(E) {
    Lr(t.removed, { element: E });
    try {
      m(E).removeChild(E);
    } catch {
      if (h(E), !m(E)) throw Wn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(E, j, ne) {
    try {
      b(E, j);
    } catch {
      try {
        E.removeAttribute(ne);
      } catch {
      }
    }
  }, yn = function(E) {
    q(E);
    const j = v(E);
    if (j) {
      const ue = [];
      lr(j, (Ce) => {
        Lr(ue, Ce);
      }), lr(ue, (Ce) => {
        try {
          h(Ce);
        } catch {
        }
      });
    }
    const ne = g(E);
    if (ne) for (let ue = ne.length - 1; ue >= 0; --ue) {
      const Ce = ne[ue], Be = Ce && Ce.name;
      typeof Be == "string" && Jr(E, Ce, Be);
    }
  }, Bt = function(E, j, ne) {
    if (!ne) try {
      ne = j.getAttributeNode(E);
    } catch {
      ne = null;
    }
    Lr(t.removed, {
      attribute: ne || null,
      from: j
    });
    try {
      ne ? b(j, ne) : j.removeAttribute(E);
    } catch {
      try {
        j.removeAttribute(E);
      } catch {
      }
    }
    if (E === "is")
      if (Ve || Ct) try {
        gn(j);
      } catch {
      }
      else try {
        j.setAttribute(E, "");
      } catch {
      }
  }, $r = function(E) {
    const j = g(E);
    if (j)
      for (let ne = j.length - 1; ne >= 0; --ne) {
        const ue = j[ne], Ce = ue && ue.name;
        typeof Ce != "string" || ye[je(Ce)] || Jr(E, ue, Ce);
      }
  }, q = function(E) {
    const j = [E];
    for (; j.length > 0; ) {
      const ne = j.pop();
      $(ne) === nn.element && $r(ne);
      const ue = v(ne);
      if (ue) for (let Ce = ue.length - 1; Ce >= 0; --Ce) j.push(ue[Ce]);
    }
  }, G = function(E, j) {
    return st ? E === "patchsrc" ? !0 : E === "for" && j !== "label" && j !== "output" : !1;
  }, be = function(E) {
    if (!st) return;
    const j = [E];
    for (; j.length > 0; ) {
      const ne = j.pop(), ue = $(ne);
      if (ue === nn.processingInstruction || ue === nn.comment && Rt(Zs, ne.data)) {
        try {
          h(ne);
        } catch {
        }
        continue;
      }
      if (ue === nn.element) {
        const Be = ne, Ue = je(O(ne));
        try {
          Be.hasAttribute && Be.hasAttribute("patchsrc") && Be.removeAttribute("patchsrc"), Be.hasAttribute && Be.hasAttribute("for") && G("for", Ue) && Be.removeAttribute("for");
        } catch {
        }
      }
      const Ce = v(ne);
      if (Ce) for (let Be = Ce.length - 1; Be >= 0; --Be) j.push(Ce[Be]);
    }
  }, xe = function(E) {
    let j = null, ne = null;
    if (ft) E = "<remove></remove>" + E;
    else {
      const Be = Fs(E, /^[\r\n\t ]+/);
      ne = Be && Be[0];
    }
    Fe === "application/xhtml+xml" && mn === et && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const ue = C ? N(E) : E;
    if (mn === et) try {
      j = new c().parseFromString(ue, Fe);
    } catch {
    }
    if (!j || !j.documentElement) {
      j = B.createDocument(mn, "template", null);
      try {
        j.documentElement.innerHTML = Nn ? L : ue;
      } catch {
      }
    }
    const Ce = j.body || j.documentElement;
    return E && ne && Ce.insertBefore(n.createTextNode(ne), Ce.childNodes[0] || null), mn === et ? oe.call(j, Xe ? "html" : "body")[0] : Xe ? j.documentElement : Ce;
  }, nt = function(E) {
    const j = T ? T(E) : E.ownerDocument;
    return W.call(j || E, E, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, zt = function(E) {
    return E = Pr(E, Ie, " "), E = Pr(E, J, " "), E = Pr(E, V, " "), E;
  }, St = function(E) {
    var j;
    E.normalize();
    const ne = T ? T(E) : E.ownerDocument, ue = W.call(ne || E, E, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Ce = ue.nextNode();
    for (; Ce; )
      Ce.data = zt(Ce.data), Ce = ue.nextNode();
    const Be = (j = E.querySelectorAll) === null || j === void 0 ? void 0 : j.call(E, "template");
    Be && lr(Be, (Ue) => {
      Dt(Ue.content) && St(Ue.content);
    });
  }, bn = function(E) {
    const j = x ? x(E) : null;
    return typeof j != "string" || je(j) !== "form" ? !1 : typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || E.attributes !== g(E) || typeof E.removeAttribute != "function" || typeof E.removeAttributeNode != "function" || typeof E.getAttributeNode != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function" || E.nodeType !== S(E) || E.childNodes !== v(E);
  }, Dt = function(E) {
    if (!S || typeof E != "object" || E === null) return !1;
    try {
      return S(E) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, kt = function(E) {
    if (!S || typeof E != "object" || E === null) return !1;
    try {
      return typeof S(E) == "number";
    } catch {
      return !1;
    }
  };
  function Qt(de, E, j) {
    de.length !== 0 && lr(de, (ne) => {
      ne.call(t, E, j, tt);
    });
  }
  const Mo = function(E, j) {
    return !!(st && E.hasChildNodes() && !kt(E.firstElementChild) && Rt(Xs, E.textContent) && Rt(Xs, E.innerHTML) || st && E.namespaceURI === et && vp[j] && (kt(E.firstElementChild) || typeof E.textContent == "string" && Rt(wp[j], E.textContent)) || E.nodeType === nn.processingInstruction || st && E.nodeType === nn.comment && Rt(Zs, E.data));
  }, Qr = function(E, j) {
    if (E instanceof RegExp) return Rt(E, j);
    if (E instanceof Function) {
      for (var ne = arguments.length, ue = new Array(ne > 2 ? ne - 2 : 0), Ce = 2; Ce < ne; Ce++) ue[Ce - 2] = arguments[Ce];
      return !!E(j, ...ue);
    }
    return !1;
  }, rl = function(E, j, ne) {
    if (!Ge[j] && ys(j) && Qr(Je.tagNameCheck, j)) return !1;
    if (bt && !ge[j]) {
      const ue = m(E), Ce = v(E);
      if (Ce && ue) {
        const Be = Ce.length;
        for (let Ue = Be - 1; Ue >= 0; --Ue) {
          const pt = E === ne ? y(Ce[Ue], !0) : Ce[Ue];
          ue.insertBefore(pt, _(E));
        }
      }
    }
    return gn(E), !0;
  }, hs = function(E, j, ne, ue) {
    return E.length === 0 ? j : j === ne || j === ue ? sn(j) : j;
  }, ur = function(E, j) {
    return E === j || m(E) !== null ? !1 : (R && q(E), !0);
  }, ms = function(E, j) {
    if (Qt(Q.beforeSanitizeElements, E, null), ur(E, j)) return !0;
    if (bn(E))
      return gn(E), !0;
    const ne = je(O(E));
    if (se = hs(Q.uponSanitizeElement, se, Ae, yt), Qt(Q.uponSanitizeElement, E, {
      tagName: ne,
      allowedTags: se
    }), ur(E, j)) return !0;
    if (Mo(E, ne))
      return gn(E), !0;
    if (Ge[ne] || !(He.tagCheck instanceof Function && He.tagCheck(ne)) && !se[ne]) {
      const ue = rl(E, ne, j);
      return ue === !1 && (Qt(Q.afterSanitizeElements, E, null), ur(E, j)) ? !0 : ue;
    }
    if ($(E) === nn.element && !Co(E) || (ne === "noscript" || ne === "noembed" || ne === "noframes") && Rt(bp, E.innerHTML))
      return gn(E), !0;
    if (ze && E.nodeType === nn.text) {
      const ue = zt(E.textContent);
      E.textContent !== ue && (Lr(t.removed, { element: E.cloneNode() }), E.textContent = ue);
    }
    return Qt(Q.afterSanitizeElements, E, null), ur(E, j);
  }, gs = function(E, j, ne) {
    if (Qe[j] || G(j, E) || Le && (j === "id" || j === "name") && (ne in n || ne in ut)) return !1;
    const ue = ye[j] || He.attributeCheck instanceof Function && He.attributeCheck(j, E);
    return te && Rt(Y, j) || gt && Rt(he, j) ? !0 : ue ? pe[j] || Rt($e, Pr(ne, me, "")) || (j === "src" || j === "xlink:href" || j === "href") && E !== "script" && Hs(ne, "data:") === 0 && fe[E] || Te && !Rt(ee, Pr(ne, me, "")) ? !0 : !ne : ys(E) && Qr(Je.tagNameCheck, E) && Qr(Je.attributeNameCheck, j, E) || j === "is" && Je.allowCustomizedBuiltInElements && Qr(Je.tagNameCheck, ne);
  }, ol = Ke({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ys = function(E) {
    return !ol[Kr(E)] && Rt(K, E);
  }, sl = function(E, j, ne, ue) {
    if (C && typeof f == "object" && typeof f.getAttributeType == "function" && !ne) switch (f.getAttributeType(E, j)) {
      case "TrustedHTML":
        return N(ue);
      case "TrustedScriptURL":
        return I(ue);
    }
    return ue;
  }, al = function(E, j, ne, ue) {
    try {
      return ne ? E.setAttributeNS(ne, j, ue) : E.setAttribute(j, ue), bn(E) ? (gn(E), !1) : !0;
    } catch {
      return Bt(j, E), !1;
    }
  }, bs = function(E, j) {
    if (Qt(Q.beforeSanitizeAttributes, E, null), ur(E, j)) return;
    const ne = E.attributes;
    if (!ne || bn(E)) return;
    ye = hs(Q.uponSanitizeAttribute, ye, We, it);
    const ue = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let Ce = ne.length;
    const Be = je(E.nodeName);
    for (; Ce--; ) {
      const Ue = ne[Ce], pt = Ue.name, un = Ue.namespaceURI, en = Ue.value, fr = je(pt), Do = en;
      let Ft = pt === "value" ? Do : tp(Do), xs = !1;
      if (ue.attrName = fr, ue.attrValue = Ft, ue.keepAttr = !0, ue.forceKeepAttr = void 0, Qt(Q.uponSanitizeAttribute, E, ue), Ft = ue.attrValue, wt && (fr === "id" || fr === "name") && Hs(Ft, Mt) !== 0 && (Bt(pt, E, Ue), Ft = Mt + Ft, xs = !0), st && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ft)) {
        Bt(pt, E, Ue);
        continue;
      }
      if (fr === "attributename" && Fs(Ft, "href")) {
        Bt(pt, E, Ue);
        continue;
      }
      if (!ue.forceKeepAttr) {
        if (!ue.keepAttr) {
          Bt(pt, E, Ue);
          continue;
        }
        if (!lt && Rt(xp, Ft)) {
          Bt(pt, E, Ue);
          continue;
        }
        if (ze && (Ft = zt(Ft)), !gs(Be, fr, Ft)) {
          Bt(pt, E, Ue);
          continue;
        }
        Ft = sl(Be, fr, un, Ft), Ft !== Do && al(E, pt, un, Ft) && xs && Bs(t.removed);
      }
    }
    Qt(Q.afterSanitizeAttributes, E, null), ur(E, j);
  }, eo = function(E) {
    let j = null;
    const ne = nt(E);
    for (Qt(Q.beforeSanitizeShadowDOM, E, null); j = ne.nextNode(); )
      if (Qt(Q.uponSanitizeShadowNode, j, null), ms(j, E), bs(j, E), Dt(j.content) && eo(j.content), $(j) === nn.element) {
        const ue = u(j);
        Dt(ue) && (Ao(ue), eo(ue));
      }
    Qt(Q.afterSanitizeShadowDOM, E, null);
  }, Ao = function(E) {
    const j = [{
      node: E,
      shadow: null
    }];
    for (; j.length > 0; ) {
      const ne = j.pop();
      if (ne.shadow) {
        eo(ne.shadow);
        continue;
      }
      const ue = ne.node, Ce = $(ue) === nn.element, Be = v(ue);
      if (Be) for (let Ue = Be.length - 1; Ue >= 0; --Ue) j.push({
        node: Be[Ue],
        shadow: null
      });
      if (Ce) {
        const Ue = x ? x(ue) : null;
        if (typeof Ue == "string" && je(Ue) === "template") {
          const pt = ue.content;
          Dt(pt) && j.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Ce) {
        const Ue = u(ue);
        Dt(Ue) && j.push({
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
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, ne = null, ue = null, Ce = null;
    if (Nn = !de, Nn && (de = "<!-->"), typeof de != "string" && !kt(de) && (de = ap(de), typeof de != "string"))
      throw Wn("dirty is not a string, aborting");
    if (!t.isSupported) return de;
    Tt ? (se = yt, ye = it) : At(E), (Q.uponSanitizeElement.length > 0 || Q.uponSanitizeAttribute.length > 0) && (se = sn(se)), Q.uponSanitizeAttribute.length > 0 && (ye = sn(ye)), t.removed = [];
    const Be = R && typeof de != "string" && kt(de);
    if (Be) {
      be(de);
      const un = O(de);
      if (typeof un == "string") {
        const en = je(un);
        if (!se[en] || Ge[en])
          throw yn(de), Wn("root node is forbidden and cannot be sanitized in-place");
      }
      if (bn(de))
        throw yn(de), Wn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ao(de);
      } catch (en) {
        throw yn(de), en;
      }
    } else if (kt(de))
      j = xe("<!---->"), ne = j.ownerDocument.importNode(de, !0), ne.nodeType === nn.element && ne.nodeName === "BODY" || ne.nodeName === "HTML" ? j = ne : j.appendChild(ne), Ao(j);
    else {
      if (!Ve && !ze && !Xe && de.indexOf("<") === -1) return C && ae ? N(de) : de;
      if (j = xe(de), !j) return Ve ? null : ae ? L : "";
    }
    j && ft && gn(j.firstChild);
    const Ue = Be ? de : j;
    try {
      const un = nt(Ue);
      for (; ue = un.nextNode(); )
        ms(ue, Ue), bs(ue, Ue), Dt(ue.content) && eo(ue.content);
    } catch (un) {
      throw Be && (yn(de), lr(t.removed, (en) => {
        en.element && q(en.element);
      })), un;
    }
    if (Be) {
      let un = !1;
      if (lr(t.removed, (en) => {
        en.element && (en.element === de && (un = !0), q(en.element));
      }), un) throw Wn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ze && St(de), de;
    }
    if (Ve) {
      if (ze && St(j), Ct)
        for (Ce = re.call(j.ownerDocument); j.firstChild; ) Ce.appendChild(j.firstChild);
      else Ce = j;
      return (ye.shadowroot || ye.shadowrootmode) && (Ce = ie.call(r, Ce, !0)), Ce;
    }
    let pt = Xe ? j.outerHTML : j.innerHTML;
    return Xe && se["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Rt(gp, j.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + pt), ze && (pt = zt(pt)), C && ae ? N(pt) : pt;
  }, t.setConfig = function() {
    let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(de), Tt = !0, yt = se, it = ye;
  }, t.clearConfig = function() {
    tt = null, Tt = !1, yt = null, it = null, C = A, L = "";
  }, t.isValidAttribute = function(de, E, j) {
    tt || At({});
    const ne = je(de), ue = je(E);
    return gs(ne, ue, j);
  }, t.addHook = function(de, E) {
    typeof E == "function" && Yt(Q, de) && Lr(Q[de], E);
  }, t.removeHook = function(de, E) {
    if (Yt(Q, de)) {
      if (E !== void 0) {
        const j = Qf(Q[de], E);
        return j === -1 ? void 0 : ep(Q[de], j, 1)[0];
      }
      return Bs(Q[de]);
    }
  }, t.removeHooks = function(de) {
    Yt(Q, de) && (Q[de] = []);
  }, t.removeAllHooks = function() {
    Q = Js();
  }, t;
}
var Ba = ja();
function Vr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Sp(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ao = "\0";
function lo(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Vr(i)}</code>`), `${ao}${n.length - 1}${ao}`));
  return t || (r = Vr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, d) => {
      const s = Sp(d);
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
  let d = 0;
  const s = (l, c) => {
    const f = c ? "ol" : "ul";
    i.push(
      `<${f}>${l.map((p) => `<li>${lo(p, n)}</li>`).join("")}</${f}>`
    );
  };
  for (; d < r.length; ) {
    const l = a(d) ?? "";
    if (/^\s*$/.test(l)) {
      d += 1;
      continue;
    }
    const c = /^(#{1,6})\s+(.*)$/.exec(l), f = c?.[1], p = c?.[2];
    if (f !== void 0 && p !== void 0) {
      i.push(
        `<h${f.length}>${lo(p.trim(), n)}</h${f.length}>`
      ), d += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const _ = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", v = [];
      for (d += 1; d < r.length; ) {
        const u = a(d) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(u)) break;
        v.push(u), d += 1;
      }
      d += 1;
      const m = _ ? ` class="language-${Vr(_)}"` : "";
      i.push(
        `<pre><code${m}>${Vr(v.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const _ = [];
      for (; d < r.length && /^>\s?(.*)$/.test(a(d)); )
        _.push(/^>\s?(.*)$/.exec(a(d))?.[1] ?? ""), d += 1;
      i.push(
        `<blockquote>${_.map((v) => `<p>${lo(v, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(l.trim())) {
      i.push("<hr>"), d += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(l)) {
      const _ = [];
      for (; d < r.length; ) {
        const m = /^\s*[-*+]\s+(.*)$/.exec(a(d))?.[1];
        if (m === void 0) break;
        _.push(m), d += 1;
      }
      s(_, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(l)) {
      const _ = [];
      for (; d < r.length; ) {
        const m = /^\s*\d+[.)]\s+(.*)$/.exec(a(d))?.[1];
        if (m === void 0) break;
        _.push(m), d += 1;
      }
      s(_, !0);
      continue;
    }
    const b = [];
    for (; d < r.length && !/^\s*$/.test(a(d)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(d)
    ); )
      b.push(a(d)), d += 1;
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
function d$({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Se(
    () => Ba.sanitize($p(e, { allowHtml: t })),
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
const Tp = "_editor_2a7al_3", Cp = "_toolbar_2a7al_13", Mp = "_tool_2a7al_13", Ap = "_separator_2a7al_56", Dp = "_area_2a7al_63", Ip = "_source_2a7al_73", zp = "_alignGlyph_2a7al_84", Lp = "_colorInput_2a7al_89", Pp = "_select_2a7al_98", Ot = {
  editor: Tp,
  toolbar: Cp,
  tool: Mp,
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
const u$ = at(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: a,
    toolbar: i = Rp,
    imageUpload: d,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: p = !0
  }, y) {
    const [h, b] = U(!1), [_, v] = U(n), [m, u] = U(
      null
    ), [g, S] = U(""), [x, T] = U(""), [$, O] = U(2), [C, L] = U(2), [A, z] = U(!1), k = le(null), w = le(null), N = le(n), I = H(
      (K) => p ? Ba.sanitize(K) : K,
      [p]
    );
    Ne(() => {
      const K = k.current;
      t !== void 0 && K && K.innerHTML !== t && (K.innerHTML = t), t !== void 0 && (N.current = t);
    }, [t]);
    const D = H(
      (K) => {
        N.current = I(K), r?.(N.current);
      },
      [I, r]
    ), P = H(
      (K, $e) => {
        if (s || l) return !1;
        k.current?.focus();
        const se = Zo(K, $e);
        if (se) {
          const Ae = k.current;
          Ae && D(Ae.innerHTML);
        }
        return se;
      },
      [D, s, l]
    ), B = H(
      () => k.current?.innerHTML ?? N.current,
      []
    ), W = H(
      (K) => {
        P("insertHTML", K);
      },
      [P]
    ), re = H(() => {
      k.current?.focus();
    }, []), oe = Se(
      () => ({
        execCommand: P,
        getHtml: B,
        insertHtml: W,
        focus: re
      }),
      [P, B, W, re]
    );
    So(y, () => ({ execCommand: P, getHtml: B }), [
      P,
      B
    ]);
    const ie = H(
      (K) => {
        const $e = ea[K];
        !$e || s || l || P($e.command);
      },
      [P, s, l]
    ), Q = H(() => {
      s || l || (h ? (b(!1), D(_)) : (v(k.current?.innerHTML ?? ""), b(!0)));
    }, [h, _, D, s, l]), Ie = H(
      (K) => {
        if (!(K.ctrlKey || K.metaKey) || s || l) return;
        const $e = K.key.toLowerCase(), se = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        se && (K.preventDefault(), ie(se));
      },
      [ie, s, l]
    ), J = H(() => {
      const K = k.current;
      K && D(K.innerHTML);
    }, [D]), V = H(() => {
      g.trim() && (P("createLink", g.trim()), S(""), u(null));
    }, [g, P]), Y = H(() => {
      x.trim() && (P("insertImage", x.trim()), T(""), u(null));
    }, [x, P]), he = H(
      async (K) => {
        if (d) {
          z(!0);
          try {
            const $e = new FormData();
            $e.append(d.parameterName ?? "file", K);
            const se = await fetch(d.url, {
              method: "POST",
              headers: d.headers,
              body: $e
            });
            if (!se.ok)
              throw new Error(`Upload failed: ${se.status}`);
            const ye = (se.headers.get("content-type") ?? "").includes("application/json") ? await se.json() : await se.text(), We = (d.parseUrl ?? Up)(ye);
            P("insertImage", We);
          } catch ($e) {
            a?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            z(!1), u(null);
          }
        }
      },
      [d, a, P]
    ), ee = H(() => {
      const K = Math.max(1, Math.min(10, Math.floor($) || 1)), $e = Math.max(1, Math.min(10, Math.floor(C) || 1)), se = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: K }, () => `<tr>${se}</tr>`).join(
        ""
      );
      P("insertHTML", `<table><tbody>${Ae}</tbody></table>`), u(null);
    }, [$, C, P]), me = (K, $e) => {
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
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && K.onExecute(oe);
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
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: Q,
            children: "</>"
          },
          "source"
        );
      if (K === "foreColor" || K === "backgroundColor") {
        const Ae = K === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ M("label", { className: Ot.tool, title: Ae, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: l,
              className: Ot.colorInput,
              onMouseDown: (ye) => ye.preventDefault(),
              onChange: (ye) => P(
                K === "foreColor" ? "foreColor" : "hiliteColor",
                ye.target.value
              )
            }
          )
        ] }, K);
      }
      if (K === "formatBlock" || K === "fontName" || K === "fontSize") {
        const Ae = K === "formatBlock" ? "Format block" : K === "fontName" ? "Font name" : "Font size", ye = K === "formatBlock" ? Fp : K === "fontName" ? jp : Bp;
        return /* @__PURE__ */ M(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: l,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (We) => We.preventDefault(),
            onChange: (We) => {
              !We.target.value || s || l || (K === "formatBlock" ? Hp(We.target.value) : P(K === "fontName" ? "fontName" : "fontSize", We.target.value), We.target.value = "");
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", disabled: !0, children: K === "formatBlock" ? "¶" : K === "fontName" ? "Aa" : "12" }),
              ye.map((We) => /* @__PURE__ */ o("option", { value: We, children: We }, We))
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
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (S(""), u("link"));
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
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (T(""), u("image"));
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
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (O(2), L(2), u("table"));
            },
            children: "▦"
          },
          "table"
        );
      const se = ea[K];
      return se ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ot.tool,
          "aria-label": se.label,
          disabled: l,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => ie(K),
          children: se.glyph
        },
        K
      ) : null;
    };
    return /* @__PURE__ */ M("div", { className: [Ot.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${c} toolbar`,
          className: Ot.toolbar,
          children: i.map((K, $e) => me(K, $e))
        }
      ),
      h ? /* @__PURE__ */ o(
        "textarea",
        {
          className: Ot.source,
          "aria-label": `${c} source`,
          value: _,
          disabled: l,
          readOnly: s,
          onChange: (K) => {
            v(K.target.value), D(K.target.value);
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
          "aria-label": c,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: N.current },
          onInput: J,
          onKeyDown: Ie
        }
      ),
      /* @__PURE__ */ M(
        Ma,
        {
          open: m !== null,
          onClose: () => u(null),
          title: m === "link" ? "Insert link" : m === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ M(ot, { children: [
            /* @__PURE__ */ o(cn, { variant: "text", onClick: () => u(null), children: "Cancel" }),
            m === "link" && /* @__PURE__ */ o(cn, { onClick: V, children: "Insert" }),
            m === "image" && /* @__PURE__ */ o(cn, { onClick: Y, disabled: A, children: "Insert" }),
            m === "table" && /* @__PURE__ */ o(cn, { onClick: ee, children: "Insert" })
          ] }),
          children: [
            m === "link" && /* @__PURE__ */ o(ir, { label: "URL", required: !0, children: ({ inputId: K }) => /* @__PURE__ */ o(
              no,
              {
                id: K,
                value: g,
                placeholder: "https://",
                onChange: ($e) => S($e.target.value)
              }
            ) }),
            m === "image" && /* @__PURE__ */ M(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Image URL", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  value: x,
                  placeholder: "https://",
                  onChange: ($e) => T($e.target.value)
                }
              ) }),
              d && /* @__PURE__ */ o(ir, { label: "Or upload a file", children: ({ inputId: K }) => /* @__PURE__ */ o(
                "input",
                {
                  id: K,
                  ref: w,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const se = $e.target.files?.[0];
                    se && he(se), $e.target.value = "";
                  }
                }
              ) }),
              A && /* @__PURE__ */ o(Aa, { textStyle: "body2", children: "Uploading…" })
            ] }),
            m === "table" && /* @__PURE__ */ M(ot, { children: [
              /* @__PURE__ */ o(ir, { label: "Rows", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String($),
                  onChange: ($e) => O(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ir, { label: "Columns", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String(C),
                  onChange: ($e) => L(Number($e.target.value))
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
function f$() {
  const e = Bn(Ha);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function ta(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Wp({ state: e }) {
  const t = le(null), [n, r] = U(null);
  return Ne(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), d = a.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - d.width)
    );
    let l = i.bottom + 4;
    l + d.height > window.innerHeight && i.top - 4 - d.height >= 0 && (l = i.top - 4 - d.height), r({ left: s, top: Math.max(0, l) });
  }, [e]), Ne(() => {
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
function p$({ children: e }) {
  const [t, n] = U(null), r = le(0), a = le(null), i = H(() => {
    a.current?.(), a.current = null;
  }, []), d = H(() => {
    n((c) => c && (c.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = H(
    (c) => {
      r.current += 1;
      const f = r.current;
      a.current = c.onClose ?? null, n({
        ...c,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), c.onOpen?.();
      let p = !1;
      return () => {
        p || (p = !0, n((y) => y?.seq !== f ? y : (y.invoker && document.body.contains(y.invoker) && y.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  Ne(() => {
    if (!t) return;
    const c = (h) => {
      const b = document.querySelector(`.${Fa.popup}`);
      b && !b.contains(h.target) && d();
    }, f = (h) => {
      h.key === "Escape" && (h.preventDefault(), d());
    }, p = () => d(), y = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", p), window.addEventListener("hashchange", y), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", p), window.removeEventListener("hashchange", y);
    };
  }, [t, d]);
  const l = Se(
    () => ({ open: s, close: d, isOpen: t != null }),
    [s, d, t]
  );
  return /* @__PURE__ */ M(Ha.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(Wp, { state: t }, t.seq)
  ] });
}
const Kp = "_alert_146r9_1", Gp = "_xs_146r9_28", Vp = "_sm_146r9_38", Yp = "_lg_146r9_48", Xp = "_xl_146r9_58", Zp = "_primary_146r9_69", Jp = "_secondary_146r9_74", Qp = "_light_146r9_79", e_ = "_base_146r9_84", t_ = "_dark_146r9_89", n_ = "_info_146r9_94", r_ = "_success_146r9_99", o_ = "_warning_146r9_104", s_ = "_danger_146r9_109", a_ = "_flat_146r9_116", l_ = "_outlined_146r9_123", i_ = "_filled_146r9_132", c_ = "_text_146r9_139", d_ = "_icon_146r9_181", u_ = "_content_146r9_192", f_ = "_title_146r9_197", p_ = "_body_146r9_203", __ = "_dismiss_146r9_209", $n = {
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
function _$({
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
  showIcon: d = !0,
  children: s,
  dismissible: l = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: p,
  className: y,
  ...h
}) {
  const [b, _] = U(!1);
  if (f === !1 || f === void 0 && b)
    return null;
  const v = () => {
    f === void 0 && _(!0), c?.(), p?.(!1);
  }, m = e, u = Sa(t, "filled"), g = Yr(n), S = i ?? (d ? /* @__PURE__ */ o(Ee, { icon: h_[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        $n.alert,
        $n[m],
        $n[u],
        g ? $n[g] : null,
        $n[r],
        y
      ].filter(Boolean).join(" "),
      children: [
        S != null && /* @__PURE__ */ o("span", { className: $n.icon, "aria-hidden": "true", children: S }),
        /* @__PURE__ */ M("div", { className: $n.content, children: [
          a && /* @__PURE__ */ o("div", { className: $n.title, children: a }),
          s && /* @__PURE__ */ o("div", { className: $n.body, children: s })
        ] }),
        l && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $n.dismiss,
            onClick: v,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
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
function h$({
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
const x_ = "_row_juebr_1", v_ = "_start_juebr_14", w_ = "_center_juebr_18", k_ = "_end_juebr_22", N_ = "_stretch_juebr_26", S_ = "_baseline_juebr_30", $_ = "_normal_juebr_34", O_ = "_noWrap_juebr_90", E_ = "_wrapReverse_juebr_94", io = {
  row: x_,
  start: v_,
  center: w_,
  end: k_,
  stretch: N_,
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
  noWrap: O_,
  wrapReverse: E_
};
function ra(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function m$({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: d,
  ...s
}) {
  const l = e != null ? bo(e) : null, c = t != null ? bo(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...l ? {
      columnGap: l,
      "--dx-col-gap": l
    } : {},
    ...c ? { rowGap: c } : {},
    ...d
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
      style: f,
      ...s
    }
  );
}
const T_ = "_column_sh0ss_1", C_ = "_Size1_sh0ss_15", M_ = "_Size2_sh0ss_24", A_ = "_Size3_sh0ss_33", D_ = "_Size4_sh0ss_42", I_ = "_Size5_sh0ss_51", z_ = "_Size6_sh0ss_60", L_ = "_Size7_sh0ss_69", P_ = "_Size8_sh0ss_78", R_ = "_Size9_sh0ss_87", j_ = "_Size10_sh0ss_96", B_ = "_Size11_sh0ss_105", F_ = "_Size12_sh0ss_114", H_ = "_Offset0_sh0ss_119", U_ = "_Offset1_sh0ss_122", q_ = "_Offset2_sh0ss_127", W_ = "_Offset3_sh0ss_132", K_ = "_Offset4_sh0ss_137", G_ = "_Offset5_sh0ss_142", V_ = "_Offset6_sh0ss_147", Y_ = "_Offset7_sh0ss_152", X_ = "_Offset8_sh0ss_157", Z_ = "_Offset9_sh0ss_162", J_ = "_Offset10_sh0ss_167", Q_ = "_Offset11_sh0ss_172", eh = "_Offset12_sh0ss_177", th = "_OrderFirst_sh0ss_182", nh = "_OrderLast_sh0ss_185", rh = "_Order0_sh0ss_188", oh = "_Order1_sh0ss_191", sh = "_Order2_sh0ss_194", ah = "_Order3_sh0ss_197", lh = "_Order4_sh0ss_200", ih = "_Order5_sh0ss_203", ch = "_Order6_sh0ss_206", dh = "_Order7_sh0ss_209", uh = "_Order8_sh0ss_212", fh = "_Order9_sh0ss_215", ph = "_Order10_sh0ss_218", _h = "_Order11_sh0ss_221", hh = "_Order12_sh0ss_224", mh = "_xsSize1_sh0ss_229", gh = "_xsSize2_sh0ss_238", yh = "_xsSize3_sh0ss_247", bh = "_xsSize4_sh0ss_256", xh = "_xsSize5_sh0ss_265", vh = "_xsSize6_sh0ss_274", wh = "_xsSize7_sh0ss_283", kh = "_xsSize8_sh0ss_292", Nh = "_xsSize9_sh0ss_301", Sh = "_xsSize10_sh0ss_310", $h = "_xsSize11_sh0ss_321", Oh = "_xsSize12_sh0ss_332", Eh = "_xsOffset0_sh0ss_337", Th = "_xsOffset1_sh0ss_340", Ch = "_xsOffset2_sh0ss_345", Mh = "_xsOffset3_sh0ss_350", Ah = "_xsOffset4_sh0ss_355", Dh = "_xsOffset5_sh0ss_360", Ih = "_xsOffset6_sh0ss_365", zh = "_xsOffset7_sh0ss_370", Lh = "_xsOffset8_sh0ss_375", Ph = "_xsOffset9_sh0ss_380", Rh = "_xsOffset10_sh0ss_385", jh = "_xsOffset11_sh0ss_391", Bh = "_xsOffset12_sh0ss_397", Fh = "_xsOrderFirst_sh0ss_403", Hh = "_xsOrderLast_sh0ss_406", Uh = "_xsOrder0_sh0ss_409", qh = "_xsOrder1_sh0ss_412", Wh = "_xsOrder2_sh0ss_415", Kh = "_xsOrder3_sh0ss_418", Gh = "_xsOrder4_sh0ss_421", Vh = "_xsOrder5_sh0ss_424", Yh = "_xsOrder6_sh0ss_427", Xh = "_xsOrder7_sh0ss_430", Zh = "_xsOrder8_sh0ss_433", Jh = "_xsOrder9_sh0ss_436", Qh = "_xsOrder10_sh0ss_439", em = "_xsOrder11_sh0ss_442", tm = "_xsOrder12_sh0ss_445", nm = "_smSize1_sh0ss_451", rm = "_smSize2_sh0ss_460", om = "_smSize3_sh0ss_469", sm = "_smSize4_sh0ss_478", am = "_smSize5_sh0ss_487", lm = "_smSize6_sh0ss_496", im = "_smSize7_sh0ss_505", cm = "_smSize8_sh0ss_514", dm = "_smSize9_sh0ss_523", um = "_smSize10_sh0ss_532", fm = "_smSize11_sh0ss_543", pm = "_smSize12_sh0ss_554", _m = "_smOffset0_sh0ss_559", hm = "_smOffset1_sh0ss_562", mm = "_smOffset2_sh0ss_567", gm = "_smOffset3_sh0ss_572", ym = "_smOffset4_sh0ss_577", bm = "_smOffset5_sh0ss_582", xm = "_smOffset6_sh0ss_587", vm = "_smOffset7_sh0ss_592", wm = "_smOffset8_sh0ss_597", km = "_smOffset9_sh0ss_602", Nm = "_smOffset10_sh0ss_607", Sm = "_smOffset11_sh0ss_613", $m = "_smOffset12_sh0ss_619", Om = "_smOrderFirst_sh0ss_625", Em = "_smOrderLast_sh0ss_628", Tm = "_smOrder0_sh0ss_631", Cm = "_smOrder1_sh0ss_634", Mm = "_smOrder2_sh0ss_637", Am = "_smOrder3_sh0ss_640", Dm = "_smOrder4_sh0ss_643", Im = "_smOrder5_sh0ss_646", zm = "_smOrder6_sh0ss_649", Lm = "_smOrder7_sh0ss_652", Pm = "_smOrder8_sh0ss_655", Rm = "_smOrder9_sh0ss_658", jm = "_smOrder10_sh0ss_661", Bm = "_smOrder11_sh0ss_664", Fm = "_smOrder12_sh0ss_667", Hm = "_mdSize1_sh0ss_673", Um = "_mdSize2_sh0ss_682", qm = "_mdSize3_sh0ss_691", Wm = "_mdSize4_sh0ss_700", Km = "_mdSize5_sh0ss_709", Gm = "_mdSize6_sh0ss_718", Vm = "_mdSize7_sh0ss_727", Ym = "_mdSize8_sh0ss_736", Xm = "_mdSize9_sh0ss_745", Zm = "_mdSize10_sh0ss_754", Jm = "_mdSize11_sh0ss_765", Qm = "_mdSize12_sh0ss_776", e1 = "_mdOffset0_sh0ss_781", t1 = "_mdOffset1_sh0ss_784", n1 = "_mdOffset2_sh0ss_789", r1 = "_mdOffset3_sh0ss_794", o1 = "_mdOffset4_sh0ss_799", s1 = "_mdOffset5_sh0ss_804", a1 = "_mdOffset6_sh0ss_809", l1 = "_mdOffset7_sh0ss_814", i1 = "_mdOffset8_sh0ss_819", c1 = "_mdOffset9_sh0ss_824", d1 = "_mdOffset10_sh0ss_829", u1 = "_mdOffset11_sh0ss_835", f1 = "_mdOffset12_sh0ss_841", p1 = "_mdOrderFirst_sh0ss_847", _1 = "_mdOrderLast_sh0ss_850", h1 = "_mdOrder0_sh0ss_853", m1 = "_mdOrder1_sh0ss_856", g1 = "_mdOrder2_sh0ss_859", y1 = "_mdOrder3_sh0ss_862", b1 = "_mdOrder4_sh0ss_865", x1 = "_mdOrder5_sh0ss_868", v1 = "_mdOrder6_sh0ss_871", w1 = "_mdOrder7_sh0ss_874", k1 = "_mdOrder8_sh0ss_877", N1 = "_mdOrder9_sh0ss_880", S1 = "_mdOrder10_sh0ss_883", $1 = "_mdOrder11_sh0ss_886", O1 = "_mdOrder12_sh0ss_889", E1 = "_lgSize1_sh0ss_895", T1 = "_lgSize2_sh0ss_904", C1 = "_lgSize3_sh0ss_913", M1 = "_lgSize4_sh0ss_922", A1 = "_lgSize5_sh0ss_931", D1 = "_lgSize6_sh0ss_940", I1 = "_lgSize7_sh0ss_949", z1 = "_lgSize8_sh0ss_958", L1 = "_lgSize9_sh0ss_967", P1 = "_lgSize10_sh0ss_976", R1 = "_lgSize11_sh0ss_987", j1 = "_lgSize12_sh0ss_998", B1 = "_lgOffset0_sh0ss_1003", F1 = "_lgOffset1_sh0ss_1006", H1 = "_lgOffset2_sh0ss_1011", U1 = "_lgOffset3_sh0ss_1016", q1 = "_lgOffset4_sh0ss_1021", W1 = "_lgOffset5_sh0ss_1026", K1 = "_lgOffset6_sh0ss_1031", G1 = "_lgOffset7_sh0ss_1036", V1 = "_lgOffset8_sh0ss_1041", Y1 = "_lgOffset9_sh0ss_1046", X1 = "_lgOffset10_sh0ss_1051", Z1 = "_lgOffset11_sh0ss_1057", J1 = "_lgOffset12_sh0ss_1063", Q1 = "_lgOrderFirst_sh0ss_1069", eg = "_lgOrderLast_sh0ss_1072", tg = "_lgOrder0_sh0ss_1075", ng = "_lgOrder1_sh0ss_1078", rg = "_lgOrder2_sh0ss_1081", og = "_lgOrder3_sh0ss_1084", sg = "_lgOrder4_sh0ss_1087", ag = "_lgOrder5_sh0ss_1090", lg = "_lgOrder6_sh0ss_1093", ig = "_lgOrder7_sh0ss_1096", cg = "_lgOrder8_sh0ss_1099", dg = "_lgOrder9_sh0ss_1102", ug = "_lgOrder10_sh0ss_1105", fg = "_lgOrder11_sh0ss_1108", pg = "_lgOrder12_sh0ss_1111", _g = "_xlSize1_sh0ss_1117", hg = "_xlSize2_sh0ss_1126", mg = "_xlSize3_sh0ss_1135", gg = "_xlSize4_sh0ss_1144", yg = "_xlSize5_sh0ss_1153", bg = "_xlSize6_sh0ss_1162", xg = "_xlSize7_sh0ss_1171", vg = "_xlSize8_sh0ss_1180", wg = "_xlSize9_sh0ss_1189", kg = "_xlSize10_sh0ss_1198", Ng = "_xlSize11_sh0ss_1209", Sg = "_xlSize12_sh0ss_1220", $g = "_xlOffset0_sh0ss_1225", Og = "_xlOffset1_sh0ss_1228", Eg = "_xlOffset2_sh0ss_1233", Tg = "_xlOffset3_sh0ss_1238", Cg = "_xlOffset4_sh0ss_1243", Mg = "_xlOffset5_sh0ss_1248", Ag = "_xlOffset6_sh0ss_1253", Dg = "_xlOffset7_sh0ss_1258", Ig = "_xlOffset8_sh0ss_1263", zg = "_xlOffset9_sh0ss_1268", Lg = "_xlOffset10_sh0ss_1273", Pg = "_xlOffset11_sh0ss_1279", Rg = "_xlOffset12_sh0ss_1285", jg = "_xlOrderFirst_sh0ss_1291", Bg = "_xlOrderLast_sh0ss_1294", Fg = "_xlOrder0_sh0ss_1297", Hg = "_xlOrder1_sh0ss_1300", Ug = "_xlOrder2_sh0ss_1303", qg = "_xlOrder3_sh0ss_1306", Wg = "_xlOrder4_sh0ss_1309", Kg = "_xlOrder5_sh0ss_1312", Gg = "_xlOrder6_sh0ss_1315", Vg = "_xlOrder7_sh0ss_1318", Yg = "_xlOrder8_sh0ss_1321", Xg = "_xlOrder9_sh0ss_1324", Zg = "_xlOrder10_sh0ss_1327", Jg = "_xlOrder11_sh0ss_1330", Qg = "_xlOrder12_sh0ss_1333", ey = "_xxSize1_sh0ss_1339", ty = "_xxSize2_sh0ss_1348", ny = "_xxSize3_sh0ss_1357", ry = "_xxSize4_sh0ss_1366", oy = "_xxSize5_sh0ss_1375", sy = "_xxSize6_sh0ss_1384", ay = "_xxSize7_sh0ss_1393", ly = "_xxSize8_sh0ss_1402", iy = "_xxSize9_sh0ss_1411", cy = "_xxSize10_sh0ss_1420", dy = "_xxSize11_sh0ss_1431", uy = "_xxSize12_sh0ss_1442", fy = "_xxOffset0_sh0ss_1447", py = "_xxOffset1_sh0ss_1450", _y = "_xxOffset2_sh0ss_1455", hy = "_xxOffset3_sh0ss_1460", my = "_xxOffset4_sh0ss_1465", gy = "_xxOffset5_sh0ss_1470", yy = "_xxOffset6_sh0ss_1475", by = "_xxOffset7_sh0ss_1480", xy = "_xxOffset8_sh0ss_1485", vy = "_xxOffset9_sh0ss_1490", wy = "_xxOffset10_sh0ss_1495", ky = "_xxOffset11_sh0ss_1501", Ny = "_xxOffset12_sh0ss_1507", Sy = "_xxOrderFirst_sh0ss_1513", $y = "_xxOrderLast_sh0ss_1516", Oy = "_xxOrder0_sh0ss_1519", Ey = "_xxOrder1_sh0ss_1522", Ty = "_xxOrder2_sh0ss_1525", Cy = "_xxOrder3_sh0ss_1528", My = "_xxOrder4_sh0ss_1531", Ay = "_xxOrder5_sh0ss_1534", Dy = "_xxOrder6_sh0ss_1537", Iy = "_xxOrder7_sh0ss_1540", zy = "_xxOrder8_sh0ss_1543", Ly = "_xxOrder9_sh0ss_1546", Py = "_xxOrder10_sh0ss_1549", Ry = "_xxOrder11_sh0ss_1552", jy = "_xxOrder12_sh0ss_1555", co = {
  column: T_,
  Size1: C_,
  Size2: M_,
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
  Offset2: q_,
  Offset3: W_,
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
  xsSize10: Sh,
  xsSize11: $h,
  xsSize12: Oh,
  xsOffset0: Eh,
  xsOffset1: Th,
  xsOffset2: Ch,
  xsOffset3: Mh,
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
  xsOrder1: qh,
  xsOrder2: Wh,
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
  smOffset11: Sm,
  smOffset12: $m,
  smOrderFirst: Om,
  smOrderLast: Em,
  smOrder0: Tm,
  smOrder1: Cm,
  smOrder2: Mm,
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
  mdSize3: qm,
  mdSize4: Wm,
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
  mdOrder10: S1,
  mdOrder11: $1,
  mdOrder12: O1,
  lgSize1: E1,
  lgSize2: T1,
  lgSize3: C1,
  lgSize4: M1,
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
  lgOffset4: q1,
  lgOffset5: W1,
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
  xlSize12: Sg,
  xlOffset0: $g,
  xlOffset1: Og,
  xlOffset2: Eg,
  xlOffset3: Tg,
  xlOffset4: Cg,
  xlOffset5: Mg,
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
  xlOrder3: qg,
  xlOrder4: Wg,
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
  xxOrderFirst: Sy,
  xxOrderLast: $y,
  xxOrder0: Oy,
  xxOrder1: Ey,
  xxOrder2: Ty,
  xxOrder3: Cy,
  xxOrder4: My,
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
function qy(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Uy(n, t), `${e}Order${t}`);
}
function g$({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [A, z, k, w] of By) {
    const N = n[z], I = n[k], D = n[w];
    if (N != null) {
      Fy(z, N);
      const P = co[`${A}Size${N}`];
      P && r.push(P);
    }
    if (I != null) {
      Hy(k, I);
      const P = co[`${A}Offset${I}`];
      P && r.push(P);
    }
    if (D != null) {
      const P = co[qy(A, D, w)];
      P && r.push(P);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: s,
    offsetXs: l,
    sizeSm: c,
    offsetSm: f,
    sizeMd: p,
    offsetMd: y,
    sizeLg: h,
    offsetLg: b,
    sizeXl: _,
    offsetXl: v,
    sizeXx: m,
    offsetXx: u,
    order: g,
    orderXs: S,
    orderSm: x,
    orderMd: T,
    orderLg: $,
    orderXl: O,
    orderXx: C,
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
function oa(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function y$({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: a,
  justify: i,
  className: d,
  style: s,
  ...l
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: bo(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        jr.stack,
        jr[`dir-${c}`],
        oa(n) !== "wrap" ? jr[`wrap-${oa(n)}`] : null,
        a != null ? jr[`align-${a}`] : null,
        i != null ? jr[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const Ky = "_autogrid_16x9f_1", Gy = {
  autogrid: Ky
};
function b$({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: a = !0,
  ...i
}) {
  if (a === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: bo(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Gy.autogrid, n].filter(Boolean).join(" "),
      style: d,
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
  onClose: d,
  className: s,
  children: l,
  ...c
}) {
  return Ne(() => {
    if (!r || !t || d == null) return;
    const f = (p) => {
      p.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ M(ot, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${Gn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
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
        ...c,
        children: l
      }
    )
  ] });
}
function x$(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(ot, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], d = [], s = [], l = [], c = [];
  Zr.forEach(n, (y) => {
    if (!Wt(y)) {
      d.push(y);
      return;
    }
    if (y.type === l0)
      a.push(y);
    else if (y.type === o0)
      i.push(y);
    else if (y.type === b0) {
      const h = y, b = h.props.position;
      c.push(h), (b === "right" || b === "end" ? l : s).push(h);
    } else
      d.push(y);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, p = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const y = p ? l : s;
    return /* @__PURE__ */ M(
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
          /* @__PURE__ */ M("div", { className: An.gridContents, children: [
            y,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: d })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: An.gridFooter, children: i })
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
        a,
        /* @__PURE__ */ M("div", { className: An.row, children: [
          s,
          d,
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
function v$({
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
function w$({
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
      children: a ?? /* @__PURE__ */ o(Ee, { icon: e, size: 20 })
    }
  );
}
const N0 = "_track_14127_1", S0 = "_bar_14127_31", $0 = "_primary_14127_39", O0 = "_success_14127_43", E0 = "_warning_14127_47", T0 = "_danger_14127_51", C0 = "_indeterminate_14127_149", M0 = "_circular_14127_163", A0 = "_fill_14127_203", rn = {
  track: N0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: S0,
  primary: $0,
  success: O0,
  warning: E0,
  danger: T0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: C0,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: M0,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: A0,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function k$({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: a = !1,
  variant: i = "linear",
  size: d = "md",
  className: s,
  visible: l = !0,
  ...c
}) {
  if (l === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const h = typeof d == "string", b = 2, _ = 10.5, v = 2 * Math.PI * _, m = v * (a ? 0.75 : 1), u = a ? 0 : v * (1 - p / 100), g = Yr(r);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: h ? void 0 : d,
        height: h ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": a ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          rn.circular,
          rn[n],
          g ? rn[g] : null,
          h ? rn[`circular-${d}`] : null,
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
              strokeDasharray: `${m} ${v}`,
              strokeDashoffset: u
            }
          )
        ]
      }
    );
  }
  const y = Yr(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": a ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        rn.track,
        rn[n],
        y ? rn[y] : null,
        typeof d == "string" ? rn[`linear-${d}`] : null,
        a ? rn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...c,
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
function D0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Oo(e) {
  const [t, n] = U(() => D0(e));
  return Ne(() => {
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
    toggleShade: d = "darker",
    toggleContent: s,
    size: l = "md",
    className: c,
    onClick: f,
    children: p,
    variant: y,
    severity: h,
    shade: b,
    ..._
  }, v) {
    const [m, u] = U(n), g = t ?? m, S = (x) => {
      const T = !g;
      t === void 0 && u(T), r?.(T), f?.(x);
    };
    return /* @__PURE__ */ o(
      cn,
      {
        ..._,
        ref: v,
        variant: g && a ? a : y,
        severity: g ? i : h,
        shade: g ? d : b,
        size: l,
        "aria-pressed": g,
        className: [g ? z0.pressed : null, c].filter(Boolean).join(" "),
        onClick: S,
        children: g && s !== void 0 ? s : p
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
function N$({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: d,
  size: s
}) {
  const l = Oo("(prefers-color-scheme: dark)"), [c, f] = U(void 0), p = e !== void 0, y = e ?? c ?? P0(n) ?? t ?? "system", h = y === "system" ? l ? "dark" : "light" : y;
  return Ne(() => {
    if (!p) {
      if (y === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = y;
    }
  }, [y, p]), /* @__PURE__ */ o(
    L0,
    {
      id: i,
      size: s,
      className: d,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: h === "dark",
      onChange: (_) => {
        const v = _ ? "dark" : "light";
        p || (f(v), R0(n, v)), r?.(v);
      },
      toggleContent: /* @__PURE__ */ o(Ee, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Ee, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const qa = "dx-palette", Wa = "dx-theme", Jo = "data-palette", Qo = "data-theme", es = /* @__PURE__ */ new Set();
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
function Sr() {
  const e = j0();
  if (!ca) {
    ca = !0;
    const t = ia(qa), n = ia(Wa), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && us(a), a;
  }
  return e;
}
function Ga() {
  const e = Sr();
  es.forEach((t) => t({ ...e }));
}
function da(e) {
  return es.add(e), () => {
    es.delete(e);
  };
}
function S$() {
  return Sr().theme;
}
function B0(e) {
  const t = Sr();
  t.theme !== e && (t.theme = e, us(t), Ka(qa, e), Ga());
}
function $$() {
  return Sr().appearance;
}
function F0(e) {
  const t = Sr();
  t.appearance !== e && (t.appearance = e, us(t), Ka(Wa, e), Ga());
}
function O$() {
  const [, e] = U(0);
  Ne(() => da(() => e((n) => n + 1)), []);
  const t = Sr();
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
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (_, v) => Math.floor(Math.abs(Math.sin(v + 1)) * 4294967296)
  ), l = (_, v) => _ + v | 0, c = (_, v) => _ << v | _ >>> 32 - v;
  let f = 1732584193, p = 4023233417, y = 2562383102, h = 271733878;
  for (let _ = 0; _ < r; _ += 64) {
    const v = [];
    for (let x = 0; x < 16; x += 1)
      v.push(i.getUint32(_ + x * 4, !0));
    let m = f, u = p, g = y, S = h;
    for (let x = 0; x < 64; x += 1) {
      let T, $;
      x < 16 ? (T = u & g | ~u & S, $ = x) : x < 32 ? (T = S & u | ~S & g, $ = (5 * x + 1) % 16) : x < 48 ? (T = u ^ g ^ S, $ = (3 * x + 5) % 16) : (T = g ^ (u | ~S), $ = 7 * x % 16), T = l(l(l(T, m), s[x]), v[$]), m = S, S = g, g = u, u = l(u, c(T, d[Math.floor(x / 16) * 4 + x % 4]));
    }
    f = l(f, m), p = l(p, u), y = l(y, g), h = l(h, S);
  }
  const b = (_) => {
    let v = "";
    for (let m = 0; m < 4; m += 1)
      v += `0${(_ >>> m * 8 & 255).toString(16)}`.slice(-2);
    return v;
  };
  return b(f) + b(p) + b(y) + b(h);
}
const U0 = "_avatar_1mhfr_1", q0 = "_xs_1mhfr_12", W0 = "_sm_1mhfr_18", K0 = "_md_1mhfr_24", G0 = "_lg_1mhfr_30", V0 = "_xl_1mhfr_36", Y0 = "_initials_1mhfr_42", X0 = "_image_1mhfr_57", Z0 = "_status_1mhfr_64", J0 = "_online_1mhfr_84", Q0 = "_offline_1mhfr_88", eb = "_away_1mhfr_92", _r = {
  avatar: U0,
  xs: q0,
  sm: W0,
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
function E$({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: a = "g",
  alt: i,
  size: d = "md",
  status: s,
  className: l
}) {
  const c = Se(() => e ? nb(e) : "?", [e]), f = Se(() => e ? rb(e) : mo[0], [e]), p = Se(() => {
    if (t != null || n == null) return;
    const S = n.trim().toLowerCase();
    return S === "" ? void 0 : `https://secure.gravatar.com/avatar/${H0(S)}?d=${r}&s=${tb[d]}&r=${a}`;
  }, [t, n, r, a, d]), y = t ?? p, [h, b] = U(null), _ = y != null && h !== y, v = _ && i === "", m = i ?? e ?? "avatar", u = s ? `${m}, ${s}` : m, g = _ ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: y,
        alt: v ? "" : s ? u : m,
        onError: () => b(y ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: _r.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        _r.avatar,
        _r[d],
        s ? _r[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: _ ? void 0 : "img",
      "aria-label": _ ? void 0 : u,
      children: [
        g,
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
function T$({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: d,
  ariaLabel: s,
  ariaLabelledBy: l
}) {
  const c = ct(), f = le(null), [p, y] = U(
    n ?? e[0]?.key ?? ""
  ), h = t ?? p, b = i === "left" || i === "right", _ = (u) => {
    y(u), r?.(u);
  }, v = (u) => {
    const g = e.filter((T) => !T.disabled), S = g.findIndex((T) => T.key === h);
    let x = -1;
    u.key === "ArrowRight" || b && u.key === "ArrowDown" ? x = (S + 1) % g.length : u.key === "ArrowLeft" || b && u.key === "ArrowUp" ? x = (S - 1 + g.length) % g.length : u.key === "Home" ? x = 0 : u.key === "End" && (x = g.length - 1), x >= 0 && (u.preventDefault(), f.current?.querySelector(
      `[data-tab-key="${CSS.escape(g[x]?.key ?? "")}"]`
    )?.focus(), _(g[x]?.key ?? ""));
  }, m = e.find((u) => u.key === h);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Dn.root, Dn[i], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: f,
            role: "tablist",
            "aria-label": s,
            "aria-labelledby": l,
            tabIndex: -1,
            className: [Dn.tabList, Dn[a], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: v,
            children: e.map((u) => {
              const g = u.key === h;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${c}-tab-${u.key}`,
                  "data-tab-key": u.key,
                  "aria-selected": g,
                  "aria-controls": `${c}-panel-${u.key}`,
                  tabIndex: g ? 0 : -1,
                  disabled: u.disabled,
                  className: [
                    Dn.tab,
                    g ? Dn.active : null,
                    u.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => _(u.key),
                  children: u.label
                },
                u.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ o(
          "div",
          {
            role: "tabpanel",
            id: `${c}-panel-${m.key}`,
            "aria-labelledby": `${c}-tab-${m.key}`,
            className: Dn.panel,
            children: m.content
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
function C$({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const d = ct(), [s, l] = U(
    r ?? []
  ), c = n ?? s, f = (p) => {
    const y = c.includes(p) ? c.filter((h) => h !== p) : t ? [...c, p] : [p];
    l(y), a?.(y);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((p) => {
    const y = c.includes(p.key), h = `${d}-panel-${p.key}`, b = `${d}-trigger-${p.key}`;
    return /* @__PURE__ */ M("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": y,
          "aria-controls": h,
          disabled: p.disabled,
          className: [
            In.trigger,
            p.disabled ? In.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(p.key),
          children: [
            /* @__PURE__ */ o("span", { className: In.title, children: p.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [In.chevron, y ? In.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 12 })
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
          hidden: !y,
          className: In.content,
          children: p.content
        }
      )
    ] }, p.key);
  }) });
}
const Nb = "_textarea_l7fsl_1", Sb = "_invalid_l7fsl_27", $b = "_xs_l7fsl_34", Ob = "_sm_l7fsl_39", Eb = "_md_l7fsl_44", Tb = "_lg_l7fsl_49", Cb = "_xl_l7fsl_54", uo = {
  textarea: Nb,
  invalid: Sb,
  xs: $b,
  sm: Ob,
  md: Eb,
  lg: Tb,
  xl: Cb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, M$ = at(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: a, ...i }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
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
), Mb = "_root_xyp2i_1", Ab = "_trigger_xyp2i_9", Db = "_invalid_xyp2i_40", Ib = "_placeholder_xyp2i_47", zb = "_label_xyp2i_54", Lb = "_chevron_xyp2i_60", Pb = "_chevronOpen_xyp2i_70", Rb = "_menu_xyp2i_74", jb = "_option_xyp2i_89", Bb = "_disabled_xyp2i_100", Fb = "_active_xyp2i_104", Hb = "_selected_xyp2i_105", Ub = "_header_xyp2i_115", qb = "_xs_xyp2i_122", Wb = "_sm_xyp2i_128", Kb = "_md_xyp2i_134", Gb = "_lg_xyp2i_140", Vb = "_xl_xyp2i_146", Ut = {
  root: Mb,
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
  xs: qb,
  sm: Wb,
  md: Kb,
  lg: Gb,
  xl: Vb
}, Yb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function A$({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: a = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: s = !1,
  className: l,
  ...c
}) {
  const f = ct(), p = `${f}-listbox`, y = le(null), h = le(null), [b, _] = U(
    n
  ), [v, m] = U(!1), u = t ?? b, g = e.map(
    (k, w) => k.label === "" || k.disabled ? -1 : w
  ).filter((k) => k >= 0), S = e.findIndex(
    (k) => k.value === u
  ), [x, T] = U(
    () => g.includes(0) ? 0 : g[0] ?? -1
  ), $ = H(() => {
    if (s) return;
    const k = S >= 0 && g.includes(S) ? S : g[0];
    T(k ?? -1), m(!0);
  }, [s, S, g]), O = H(() => {
    m(!1), h.current?.focus();
  }, []);
  Ne(() => {
    if (!v) return;
    const k = (w) => {
      y.current && !y.current.contains(w.target) && m(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [v]);
  const C = (k) => {
    _(k), r?.(k), m(!1), h.current?.focus();
  }, L = (k) => {
    if (g.length === 0) return;
    const w = g.includes(x) ? g.indexOf(x) : 0, N = g[(w + k + g.length) % g.length];
    N != null && T(N);
  }, A = (k) => {
    if (!v) {
      k.key === "ArrowDown" && (k.preventDefault(), $());
      return;
    }
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), L(1);
        break;
      case "ArrowUp":
        k.preventDefault(), L(-1);
        break;
      case "Home":
        k.preventDefault(), g[0] != null && T(g[0]);
        break;
      case "End":
        k.preventDefault(), g[g.length - 1] != null && T(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), x >= 0 && e[x] && g.includes(x) && C(e[x]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), O();
        break;
      case "Tab":
        m(!1);
        break;
    }
  }, z = e.find(
    (k) => k.value === u
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- delegates keyboard handling to the trigger and popup; the root has no click semantics of its own
    /* @__PURE__ */ M(
      "div",
      {
        ref: y,
        className: [Ut.root, l].filter(Boolean).join(" "),
        onKeyDown: A,
        children: [
          /* @__PURE__ */ M(
            "button",
            {
              ref: h,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": v,
              "aria-controls": p,
              "aria-invalid": d || void 0,
              disabled: s,
              className: [
                Ut.trigger,
                Ut[i],
                v ? Ut.open : null,
                d ? Ut.invalid : null
              ].filter(Boolean).join(" "),
              onClick: () => v ? m(!1) : $(),
              ...c,
              children: [
                /* @__PURE__ */ o("span", { className: z ? Ut.label : Ut.placeholder, children: z ? z.label : a }),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: [Ut.chevron, v ? Ut.chevronOpen : null].filter(Boolean).join(" "),
                    style: { backgroundImage: Yb },
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
              "aria-activedescendant": x >= 0 ? `${f}-option-${x}` : void 0,
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
                      id: `${f}-option-${w}`,
                      role: "option",
                      tabIndex: -1,
                      "aria-selected": k.value === u,
                      "aria-disabled": k.disabled || void 0,
                      className: [
                        Ut.option,
                        w === x ? Ut.active : null,
                        k.value === u ? Ut.selected : null,
                        k.disabled ? Ut.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => {
                        k.disabled || C(k.value);
                      },
                      onMouseEnter: () => {
                        !k.disabled && k.label !== "" && T(w);
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
function D$({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: d = "md",
  invalid: s = !1,
  disabled: l = !1,
  filter: c = ux,
  className: f,
  ...p
}) {
  const y = ct(), h = `${y}-listbox`, b = le(null), _ = le(null), [v, m] = U(n), [u, g] = U(!1), S = t ?? v, x = Se(
    () => S.trim() === "" ? [...e] : e.filter((D) => c(D, S)),
    [e, S, c]
  ), T = x.map((D, P) => D.disabled ? -1 : P).filter((D) => D >= 0), [$, O] = U(-1), C = (D) => {
    m(D), r?.(D);
  }, L = (D) => {
    C(D.label), a?.(D.value, D), g(!1);
  }, A = (D) => {
    if (T.length === 0) return;
    const P = T.includes($) ? T.indexOf($) : D === 1 ? -1 : 0, B = T[(P + D + T.length) % T.length];
    B != null && O(B);
  }, z = (D) => {
    l || (C(D.target.value), g(!0), O(-1));
  }, k = () => {
    l || S !== "" && g(!0);
  }, w = (D) => {
    b.current && !b.current.contains(D.relatedTarget) && g(!1);
  }, N = (D) => {
    if (!l)
      switch (D.key) {
        case "ArrowDown":
          D.preventDefault(), u ? A(1) : (g(!0), O(T[0] ?? -1));
          break;
        case "ArrowUp":
          D.preventDefault(), u && A(-1);
          break;
        case "Enter":
          D.preventDefault(), u && $ >= 0 && x[$] && L(x[$]);
          break;
        case "Escape":
          D.preventDefault(), g(!1);
          break;
        case "Tab":
          u && $ >= 0 && x[$] && L(x[$]), g(!1);
          break;
      }
  }, I = () => {
    C(""), O(-1), g(!0), _.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: b,
      className: [fn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [fn.wrap, fn[d], s ? fn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: _,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": u,
                  "aria-controls": h,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": u && $ >= 0 ? `${y}-option-${$}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: S,
                  placeholder: i,
                  className: fn.input,
                  onChange: z,
                  onFocus: k,
                  onBlur: w,
                  onKeyDown: N,
                  ...p
                }
              ),
              S !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: fn.clear,
                  "aria-label": "Clear",
                  onClick: I,
                  children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        u && (x.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: h, className: fn.menu, children: /* @__PURE__ */ o("div", { className: fn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: h, role: "listbox", className: fn.menu, children: x.map((D, P) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option through the input's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${y}-option-${P}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": !1,
              "aria-disabled": D.disabled || void 0,
              className: [
                fn.option,
                P === $ ? fn.active : null,
                D.disabled ? fn.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                D.disabled || L(D);
              },
              onMouseDown: (B) => {
                B.preventDefault(), D.disabled || L(D);
              },
              onMouseEnter: () => {
                D.disabled || O(P);
              },
              children: D.label
            },
            D.value
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
function I$({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: d,
  ...s
}) {
  const l = ct(), [c, f] = U(() => {
    const x = n;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), p = t == null ? c : Array.isArray(t) ? t : [t], y = e.findIndex((x) => !x.disabled), [h, b] = U(
    () => y >= 0 ? y : 0
  ), _ = le(""), v = le(null), m = (x) => {
    f(x), a?.(r ? x : x[0] ?? "");
  }, u = e.map((x, T) => x.disabled ? -1 : T).filter((x) => x >= 0), g = (x) => {
    const T = e[x];
    if (!(!T || T.disabled))
      if (b(x), r) {
        const $ = p.includes(T.value) ? p.filter((O) => O !== T.value) : [...p, T.value];
        m($);
      } else
        m([T.value]);
  }, S = (x) => {
    if (u.length === 0) return;
    const T = u.includes(h) ? h : u[0];
    let $ = -1;
    if (x.key === "ArrowDown")
      $ = u[(u.indexOf(T) + 1) % u.length];
    else if (x.key === "ArrowUp")
      $ = u[(u.indexOf(T) - 1 + u.length) % u.length];
    else if (x.key === "Home")
      $ = u[0];
    else if (x.key === "End")
      $ = u[u.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), g(T);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const O = (_.current + x.key).toLowerCase();
      _.current = O, v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        _.current = "";
      }, 500);
      const C = [...u, ...u], L = u.indexOf(T) + 1, A = C.slice(L).find((z) => e[z]?.label.toLowerCase().startsWith(O));
      A != null && b(A);
      return;
    }
    $ >= 0 && (x.preventDefault(), b($), r || m([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[h] ? `${l}-option-${h}` : void 0,
      style: d,
      className: [Br.box, i].filter(Boolean).join(" "),
      onKeyDown: S,
      ...s,
      children: e.map((x, T) => {
        const $ = p.includes(x.value), O = T === h;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${l}-option-${T}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": $,
              "aria-disabled": x.disabled || void 0,
              className: [
                Br.option,
                $ ? Br.selected : null,
                O ? Br.active : null,
                x.disabled ? Br.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => g(T),
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
function z$({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: a,
  name: i,
  className: d
}) {
  const [s, l] = U(() => [
    ...n
  ]), c = t ?? s, f = (p, y) => {
    const h = y ? [...c, p] : c.filter((b) => b !== p);
    l(h), r?.(h);
  };
  return /* @__PURE__ */ M("fieldset", { className: [tr.group, d].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: tr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: tr.list, children: e.map((p) => {
      const y = c.includes(p.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [tr.item, p.disabled ? tr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: tr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: tr.checkbox,
                name: i,
                value: p.value,
                checked: y,
                disabled: p.disabled,
                onChange: (h) => f(p.value, h.target.checked)
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
const Nx = "_group_46668_1", Sx = "_legend_46668_8", $x = "_list_46668_16", Ox = "_item_46668_25", Ex = "_disabled_46668_32", Tx = "_label_46668_37", Cx = "_radio_46668_48", nr = {
  group: Nx,
  legend: Sx,
  list: $x,
  item: Ox,
  disabled: Ex,
  label: Tx,
  radio: Cx
};
function L$({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: a,
  name: i,
  className: d
}) {
  const [s, l] = U(
    n
  ), c = t ?? s, f = (p) => {
    l(p), r?.(p);
  };
  return /* @__PURE__ */ M("fieldset", { className: [nr.group, d].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: nr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: nr.list, children: e.map((p) => {
      const y = p.value === c;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [nr.item, p.disabled ? nr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: nr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: nr.radio,
                name: i,
                value: p.value,
                checked: y,
                disabled: p.disabled,
                onChange: (h) => f(h.target.value)
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
const Mx = "_bar_9zyxn_1", Ax = "_vertical_9zyxn_12", Dx = "_option_9zyxn_17", Ix = "_selected_9zyxn_40", zx = "_sm_9zyxn_56", Lx = "_md_9zyxn_62", Px = "_lg_9zyxn_68", hr = {
  bar: Mx,
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
function P$(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: a,
    orientation: i = "horizontal",
    onChange: d,
    size: s = "md",
    className: l,
    ...c
  } = e, f = a ?? !1, [p, y] = U(r ?? (f ? [] : t[0]?.value)), h = n ?? p, b = a === !0 || a === void 0 && Array.isArray(h), _ = (m) => {
    if (!b) {
      y(m), d?.(m);
      return;
    }
    const u = ua(h), g = u.includes(m) ? u.filter((S) => S !== m) : [...u, m];
    y(g), d?.(g);
  }, v = (m) => b ? ua(h).includes(m) : h === m;
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
      ...c,
      children: t.map((m) => {
        const u = v(m.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: m.disabled,
            className: [
              hr.option,
              u ? hr.selected : null,
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
const Rx = "_root_11hdr_1", jx = "_action_11hdr_10", Bx = "_caret_11hdr_15", Fx = "_sm_11hdr_49", Hx = "_md_11hdr_53", Ux = "_lg_11hdr_57", qx = "_fullWidth_11hdr_62", Wx = "_menu_11hdr_70", Kx = "_item_11hdr_83", Gx = "_itemIcon_11hdr_105", Vx = "_disabled_11hdr_110", Yx = "_active_11hdr_114", Xx = "_danger_11hdr_123", vn = {
  root: Rx,
  action: jx,
  caret: Bx,
  sm: Fx,
  md: Hx,
  lg: Ux,
  fullWidth: qx,
  menu: Wx,
  item: Kx,
  itemIcon: Gx,
  disabled: Vx,
  active: Yx,
  danger: Xx
}, R$ = at(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: a = "primary",
    variant: i = "filled",
    shade: d = "default",
    size: s = "md",
    loading: l = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: p = !1,
    className: y,
    "aria-label": h,
    openAriaLabel: b = "More actions",
    ..._
  }, v) {
    const u = `${ct()}-menu`, g = le(null), S = le(null), x = le([]), [T, $] = U(!1), [O, C] = U(-1), L = p || l, A = Se(
      () => r.map((B, W) => B.disabled ? -1 : W).filter((B) => B >= 0),
      [r]
    ), z = H(() => {
      L || (C(A[0] ?? -1), $(!0));
    }, [L, A]), k = H(() => {
      $(!1), S.current?.focus();
    }, []);
    Ne(() => {
      if (!T) return;
      const B = (W) => {
        g.current && !g.current.contains(W.target) && $(!1);
      };
      return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
    }, [T]), Ne(() => {
      T && (L || !c) && $(!1);
    }, [T, L, c]);
    const w = le(T);
    if (Ne(() => {
      const B = w.current;
      if (w.current = T, !T || B) return;
      const W = A.includes(O) ? O : A[0] ?? -1;
      W >= 0 && x.current[W]?.focus();
    }, [T, O, A]), c === !1) return null;
    const N = (B) => {
      const W = r[B];
      !W || W.disabled || (W.onClick?.(), $(!1), S.current?.focus());
    }, I = (B) => {
      if (A.length === 0) return;
      const W = A.includes(O) ? A.indexOf(O) : B === 1 ? -1 : 0, re = A[(W + B + A.length) % A.length];
      re != null && (C(re), x.current[re]?.focus());
    }, D = (B) => {
      const W = B === "first" ? A[0] : A[A.length - 1];
      W != null && (C(W), x.current[W]?.focus());
    }, P = (B) => {
      switch (B.key) {
        case "ArrowDown":
          B.preventDefault(), I(1);
          break;
        case "ArrowUp":
          B.preventDefault(), I(-1);
          break;
        case "Home":
          B.preventDefault(), D("first");
          break;
        case "End":
          B.preventDefault(), D("last");
          break;
        case "Escape":
          B.preventDefault(), k();
          break;
        case "Tab":
          $(!1);
          break;
      }
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (B) => {
          g.current = B, typeof v == "function" ? v(B) : v && (v.current = B);
        },
        className: [
          vn.root,
          vn[s],
          f ? vn.fullWidth : null,
          y
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            cn,
            {
              className: vn.action,
              variant: i,
              severity: a,
              shade: d,
              size: s,
              loading: l,
              disabled: p,
              "aria-label": h,
              onClick: () => {
                T && $(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            cn,
            {
              ref: S,
              className: vn.caret,
              variant: i,
              severity: a,
              shade: d,
              size: s,
              disabled: L,
              "aria-haspopup": "menu",
              "aria-expanded": T,
              "aria-controls": u,
              "aria-label": b,
              onClick: () => T ? $(!1) : z(),
              onKeyDown: (B) => {
                !T && (B.key === "ArrowDown" || B.key === "ArrowUp") && (B.preventDefault(), z());
              },
              children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          T && /* @__PURE__ */ o(
            "div",
            {
              id: u,
              role: "menu",
              tabIndex: -1,
              "aria-label": b,
              className: vn.menu,
              onKeyDown: P,
              ..._,
              children: r.map((B, W) => /* @__PURE__ */ M(
                "button",
                {
                  ref: (re) => {
                    x.current[W] = re;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: W === O ? 0 : -1,
                  disabled: B.disabled,
                  className: [
                    vn.item,
                    W === O ? vn.active : null,
                    B.danger ? vn.danger : null,
                    B.disabled ? vn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => N(W),
                  onMouseEnter: () => {
                    B.disabled || C(W);
                  },
                  children: [
                    B.icon ? /* @__PURE__ */ o("span", { className: vn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: B.icon, size: 16 }) }) : null,
                    B.label
                  ]
                },
                B.key
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
const j$ = at(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: a,
  defaultValue: i = "",
  onChange: d,
  className: s,
  onKeyDown: l,
  ...c
}, f) {
  const [p, y] = U(i ?? ""), h = a !== void 0, b = h ? a ?? "" : p, _ = (u) => {
    const g = fa(u, r);
    return h || y(g), d?.(g), g;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (u) => {
        _(u.target.value);
      },
      onKeyDown: (u) => {
        if (u.key === "Backspace") {
          const g = u.currentTarget.selectionStart ?? b.length, S = b[g - 1];
          if (S !== void 0 && !/\d/.test(S)) {
            u.preventDefault();
            const x = b.replace(/\D/g, "");
            _(fa(x.slice(0, -1), r));
          }
        }
        l?.(u);
      },
      className: [
        Uo.mask,
        Uo[t],
        n ? Uo.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
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
  const d = ts(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = d + t * a : t > 0 ? s = n + Math.ceil((d - n + 1e-9) / a) * a : s = n + Math.floor((d - n - 1e-9) / a) * a, Va(s, n, r);
}
const B$ = at(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    value: i,
    defaultValue: d,
    onChange: s,
    min: l,
    max: c,
    step: f = 1,
    incrementLabel: p = "Increment",
    decrementLabel: y = "Decrement",
    onBlur: h,
    onKeyDown: b,
    ..._
  }, v) {
    const [m, u] = U(
      d != null ? String(d) : ""
    ), g = i !== void 0, S = g ? i == null ? "" : String(i) : m, x = (A) => {
      g || u(A), s?.(ts(A));
    }, T = (A) => {
      g || u(String(A)), s?.(A);
    }, $ = (A) => {
      a || T(gv(S, A, l, c, f));
    }, O = (A) => {
      x(hv(A.target.value));
    }, C = (A) => {
      A.key === "ArrowUp" ? (A.preventDefault(), $(1)) : A.key === "ArrowDown" && (A.preventDefault(), $(-1)), b?.(A);
    }, L = (A) => {
      const z = ts(S);
      z === null ? (g || u(""), s?.(null)) : T(Va(mv(z, l, f), l, c)), h?.(A);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: v,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: S,
            disabled: a,
            onChange: O,
            onKeyDown: C,
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
            "aria-label": p,
            disabled: a,
            onClick: () => $(1),
            children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_up", size: 14 })
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
            children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 14 })
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
  const r = e / 255, a = t / 255, i = n / 255, d = Math.max(r, a, i), s = Math.min(r, a, i), l = d - s;
  let c = 0;
  return l !== 0 && (d === r ? c = (a - i) / l % 6 : d === a ? c = (i - r) / l + 2 : c = (r - a) / l + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : l / d,
    v: d
  };
}
function mr({ h: e, s: t, v: n }) {
  const r = n * t, a = e / 60, i = r * (1 - Math.abs(a % 2 - 1));
  let d = 0, s = 0, l = 0;
  a < 1 ? (d = r, s = i) : a < 2 ? (d = i, s = r) : a < 3 ? (s = r, l = i) : a < 4 ? (s = i, l = r) : a < 5 ? (d = i, l = r) : (d = r, l = i);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((s + c) * 255),
    b: Math.round((l + c) * 255),
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
const F$ = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = yv,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: p = 0,
  className: y,
  onChange: h,
  onValueChange: b,
  onOpen: _,
  onClose: v
}) => {
  const m = le(null), u = le(null), g = le(null), S = le(null), x = le(null), T = ct(), $ = le(null), O = Se(
    () => vv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, L] = U(!1), [A, z] = U(null), k = A ?? O, w = Se(() => xv(k), [k]), N = H(
    (te) => {
      const Te = pa(te);
      h?.(Te), b?.(Te);
    },
    [h, b]
  ), I = H(
    (te, Te) => {
      z(te), Te && !i && N(te);
    },
    [i, N]
  ), D = H(() => {
    L(!1), z(null), v?.(), u.current?.focus();
  }, [v]), P = H(() => {
    s || (z(O), L(!0), _?.());
  }, [s, O, _]), B = H(() => {
    C ? D() : P();
  }, [C, D, P]), W = H(
    (te, Te) => {
      const lt = g.current;
      if (!lt) return w;
      const ze = lt.getBoundingClientRect(), st = an((te - ze.left) / ze.width, 0, 1), Xe = an(1 - (Te - ze.top) / ze.height, 0, 1);
      return { h: w.h, s: st, v: Xe };
    },
    [w]
  ), re = H(
    (te, Te) => {
      if (!Te) return 0;
      const lt = Te.getBoundingClientRect();
      return an((te - lt.left) / lt.width, 0, 1);
    },
    []
  ), oe = (te) => {
    if (s) return;
    te.preventDefault(), te.currentTarget.setPointerCapture(te.pointerId), $.current = "sat";
    const Te = W(te.clientX, te.clientY);
    I({ ...mr(Te), a: k.a }, !0);
  }, ie = (te) => {
    if ($.current !== "sat") return;
    te.preventDefault();
    const Te = W(te.clientX, te.clientY);
    I({ ...mr(Te), a: k.a }, !0);
  }, Q = (te) => {
    if (s) return;
    te.preventDefault(), te.currentTarget.setPointerCapture(te.pointerId), $.current = "hue";
    const Te = re(te.clientX, S.current);
    I(
      { ...mr({ ...w, h: Te * 360 }), a: k.a },
      !0
    );
  }, Ie = (te) => {
    if ($.current !== "hue") return;
    te.preventDefault();
    const Te = re(te.clientX, S.current);
    I(
      { ...mr({ ...w, h: Te * 360 }), a: k.a },
      !0
    );
  }, J = (te) => {
    if (s) return;
    te.preventDefault(), te.currentTarget.setPointerCapture(te.pointerId), $.current = "alpha";
    const Te = re(te.clientX, x.current);
    I({ ...k, a: Te }, !0);
  }, V = (te) => {
    if ($.current !== "alpha") return;
    te.preventDefault();
    const Te = re(te.clientX, x.current);
    I({ ...k, a: Te }, !0);
  }, Y = () => {
    $.current = null;
  }, he = H(
    (te, Te) => {
      const lt = {
        h: w.h,
        s: an(w.s + te, 0, 1),
        v: an(w.v + Te, 0, 1)
      };
      I({ ...mr(lt), a: k.a }, !0);
    },
    [w, k.a, I]
  ), ee = H(
    (te) => {
      const Te = (w.h + te + 360) % 360;
      I({ ...mr({ ...w, h: Te }), a: k.a }, !0);
    },
    [w, k.a, I]
  ), me = H(
    (te) => {
      I({ ...k, a: an(k.a + te, 0, 1) }, !0);
    },
    [k, I]
  ), K = (te) => {
    switch (te.key) {
      case "ArrowLeft":
        te.preventDefault(), he(-0.05, 0);
        break;
      case "ArrowRight":
        te.preventDefault(), he(0.05, 0);
        break;
      case "ArrowUp":
        te.preventDefault(), he(0, 0.05);
        break;
      case "ArrowDown":
        te.preventDefault(), he(0, -0.05);
        break;
      case "Escape":
        te.preventDefault(), D();
        break;
    }
  }, $e = (te, Te) => {
    switch (te.key) {
      case "ArrowLeft":
        te.preventDefault(), Te === "hue" ? ee(-6) : me(-0.05);
        break;
      case "ArrowRight":
        te.preventDefault(), Te === "hue" ? ee(6) : me(0.05);
        break;
      case "Escape":
        te.preventDefault(), D();
        break;
    }
  }, se = (te, Te) => {
    if (te === "hex") {
      const Xe = ns(Te);
      Xe && I({ ...Xe, a: k.a }, !0);
      return;
    }
    const lt = Te.replace(/[^\d.]/g, ""), ze = Number.parseFloat(lt);
    if (Number.isNaN(ze)) return;
    if (te === "a") {
      const Xe = lt.includes(".") ? an(ze, 0, 1) : an(ze / 100, 0, 1);
      I({ ...k, a: Xe }, !0);
      return;
    }
    const st = { r: 255, g: 255, b: 255 };
    I(
      { ...k, [te]: an(ze, 0, st[te]) },
      !0
    );
  }, Ae = () => {
    A && (N(A), z(null), L(!1), v?.(), u.current?.focus());
  };
  Ne(() => {
    if (!C) return;
    const te = (Te) => {
      m.current && !m.current.contains(Te.target) && D();
    };
    return document.addEventListener("mousedown", te), () => document.removeEventListener("mousedown", te);
  }, [C, D]), Ne(() => {
    if (!C) return;
    const te = (Te) => {
      Te.key === "Escape" && D();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [C, D]);
  const ye = f === "xs" ? Pe["dx-colorpicker-trigger-xs"] : f === "sm" ? Pe["dx-colorpicker-trigger-sm"] : f === "lg" ? Pe["dx-colorpicker-trigger-lg"] : f === "xl" ? Pe["dx-colorpicker-trigger-xl"] : Pe["dx-colorpicker-trigger"], We = pa(k), Je = bv(k), Ge = { x: w.s * 100, y: (1 - w.v) * 100 }, Qe = w.h / 360 * 100, He = k.a * 100, gt = /* @__PURE__ */ M("div", { className: Pe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: g,
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
        onPointerDown: oe,
        onPointerMove: ie,
        onPointerUp: Y,
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
        ref: S,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(w.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-hue-picker"],
        onKeyDown: (te) => $e(te, "hue"),
        onPointerDown: Q,
        onPointerMove: Ie,
        onPointerUp: Y,
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
        onKeyDown: (te) => $e(te, "alpha"),
        onPointerDown: J,
        onPointerMove: V,
        onPointerUp: Y,
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
    n && /* @__PURE__ */ M("div", { className: Pe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Je,
            onChange: (te) => se("hex", te.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
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
            onChange: (te) => se("r", te.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
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
            onChange: (te) => se("g", te.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
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
            onChange: (te) => se("b", te.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
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
            onChange: (te) => se("a", te.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-palette"], children: a.map((te) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-swatch"],
        "aria-label": te,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        style: { backgroundColor: te },
        onClick: () => {
          const Te = ns(te);
          i ? I({ ...Te, a: k.a }, !1) : (z(null), N({ ...Te, a: k.a }), L(!1), v?.(), u.current?.focus());
        }
      },
      te
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
  return /* @__PURE__ */ M(
    "div",
    {
      ref: m,
      className: [
        Pe["dx-colorpicker"],
        C ? Pe["dx-colorpicker-open"] : null,
        l ? Pe["dx-colorpicker-invalid"] : null,
        y
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: u,
            type: "button",
            className: [Pe["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": C,
            "aria-controls": T,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: p,
            onClick: B,
            onKeyDown: (te) => {
              te.key === "Escape" && C && (te.preventDefault(), D());
            },
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: Pe["dx-colorpicker-value"],
                  style: { backgroundColor: We },
                  "aria-hidden": "true"
                }
              ),
              c && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        C && /* @__PURE__ */ o(
          "div",
          {
            id: T,
            role: "dialog",
            "aria-label": "Choose color",
            className: Pe["dx-colorpicker-popup"],
            children: gt
          }
        )
      ]
    }
  );
}, qe = {
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
  const n = Number(t[1]), r = Number(t[2]), a = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || a < 1 || a > 31) return null;
  const l = new Date(n, r - 1, a, i, d, s);
  return l.getFullYear() !== n || l.getMonth() !== r - 1 || l.getDate() !== a ? null : { year: n, month: r, day: a, hour: i, minute: d, second: s };
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
], Sv = ["y", "M", "d", "H", "m", "s"];
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
    let d = !1;
    for (const l of Nv)
      if (t.startsWith(l, i)) {
        a += ha[l](e, r, n), i += l.length, d = !0;
        break;
      }
    if (d) continue;
    const s = t[i];
    if (Sv.includes(s)) {
      a += ha[s](e, r, n), i += 1;
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
function Ov(e, t) {
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
      const c = Number(l);
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
const H$ = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    format: i = "yyyy-MM-dd",
    min: d,
    max: s,
    showTime: l = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: p = !1,
    disabledDates: y,
    locale: h = "en-US",
    onChange: b,
    onValueChange: _,
    onOpen: v,
    onClose: m,
    disabled: u,
    readOnly: g,
    placeholder: S,
    ariaLabel: x,
    triggerLabel: T,
    clearLabel: $,
    tabIndex: O,
    className: C,
    onBlur: L,
    onKeyDown: A,
    ...z
  }, k) {
    const w = le(null), N = le(null), I = le(null), D = le(null), P = ct(), B = r !== void 0, [W, re] = U(
      () => a != null ? po(
        Fr(a, i) ?? Yn(),
        i,
        h
      ) : ""
    ), [oe, ie] = U(!1), [Q, Ie] = U(null), [J, V] = U(() => {
      const F = r !== void 0 ? r ?? "" : a ?? "";
      if (F) {
        const pe = Fr(F, i);
        if (pe) return pe;
      }
      return Yn();
    }), Y = Se(() => d ? rs(d) : null, [d]), he = Se(() => s ? rs(s) : null, [s]), ee = Se(
      () => new Set(y ?? []),
      [y]
    ), me = Se(() => {
      const F = B ? r ?? "" : W;
      return F ? Fr(F, i) : null;
    }, [r, W, B, i]), K = H(
      (F) => {
        const pe = Xt(F);
        return !!(ee.has(pe) || Y && pe < Xt(Y) || he && pe > Xt(he));
      },
      [ee, Y, he]
    ), $e = H(
      (F) => {
        if (!K(F)) return F;
        for (let pe = 1; pe <= 366; pe += 1) {
          const Re = zn(F, pe);
          if (!K(Re)) return Re;
          const De = zn(F, -pe);
          if (!K(De)) return De;
        }
        return F;
      },
      [K]
    ), se = H(
      (F) => {
        B || re(F ? po(F, i, h) : "");
        const pe = F ? kv(F, l) : "";
        b?.(pe), _?.(pe);
      },
      [B, i, h, l, b, _]
    ), Ae = H(
      (F) => {
        N.current = F, typeof k == "function" ? k(F) : k && (k.current = F);
      },
      [k]
    ), ye = H(() => {
      ie(!1), Ie(null), m?.(), p || I.current?.focus();
    }, [p, m]), We = H(() => {
      if (u) return;
      const F = me ?? Yn();
      Ie(F), V($e(F)), ie(!0), v?.();
    }, [u, me, $e, v]), Je = H(() => {
      oe ? ye() : We();
    }, [oe, ye, We]), Ge = H((F) => {
      D.current?.querySelector(
        `[data-date="${Xt(F)}"]`
      )?.focus();
    }, []), Qe = H(
      (F) => {
        if (K(F)) return;
        const pe = Q ?? me, De = {
          ...l ? {
            hour: pe?.hour ?? 0,
            minute: pe?.minute ?? 0,
            second: pe?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: F.year,
          month: F.month,
          day: F.day
        };
        Ie(De), l || (se(De), ye());
      },
      [K, Q, me, l, se, ye]
    ), He = H(
      (F, pe) => {
        Ie((Re) => {
          const De = Re ?? me ?? Yn(), et = Math.min(F === "hour" ? 23 : 59, Math.max(0, De[F] + pe));
          return { ...De, [F]: et };
        });
      },
      [me]
    ), gt = H(
      (F, pe) => {
        const Re = pe.replace(/\D/g, ""), De = Re === "" ? 0 : Number(Re), It = F === "hour" ? 23 : 59;
        Ie((et) => ({ ...et ?? me ?? Yn(), [F]: Math.min(It, De) }));
      },
      [me]
    ), te = H(() => {
      Q && (se(Q), ye());
    }, [Q, se, ye]), Te = H(() => {
      if (oe) return;
      const F = Fr(W, i);
      se(F ? Ev(F, Y, he) : null);
    }, [oe, W, i, Y, he, se]), lt = (F) => {
      const pe = F.target.value;
      B || re(pe), oe && Ie(null);
    }, ze = (F) => {
      F.key === "Enter" ? (F.preventDefault(), oe ? Q && (se(Q), ye()) : Te()) : F.key === "Escape" ? oe && (F.preventDefault(), ye()) : F.key === "ArrowDown" && !oe ? (F.preventDefault(), We()) : F.key === "Tab" && oe && ie(!1), A?.(F);
    }, st = (F) => {
      Te(), L?.(F);
    }, Xe = (F) => {
      let pe = null;
      switch (F.key) {
        case "ArrowLeft":
          pe = zn(J, -1), F.preventDefault();
          break;
        case "ArrowRight":
          pe = zn(J, 1), F.preventDefault();
          break;
        case "ArrowUp":
          pe = zn(J, -7), F.preventDefault();
          break;
        case "ArrowDown":
          pe = zn(J, 7), F.preventDefault();
          break;
        case "Home":
          pe = zn(J, -_a(J)), F.preventDefault();
          break;
        case "End":
          pe = zn(J, 6 - _a(J)), F.preventDefault();
          break;
        case "PageUp":
          pe = fo(J, F.shiftKey ? -12 : -1), F.preventDefault();
          break;
        case "PageDown":
          pe = fo(J, F.shiftKey ? 12 : 1), F.preventDefault();
          break;
        case "Enter":
        case " ":
          F.preventDefault(), Qe(J);
          break;
        case "Escape":
          F.preventDefault(), ye();
          break;
        case "Tab":
          ie(!1);
          break;
      }
      if (pe) {
        const Re = $e(pe);
        V(Re), setTimeout(() => Ge(Re), 0);
      }
    };
    Ne(() => {
      if (!oe) return;
      const F = (pe) => {
        w.current && !w.current.contains(pe.target) && ye();
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [oe, ye]), Ne(() => {
      if (!oe) return;
      const F = (pe) => {
        pe.key === "Escape" && ye();
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [oe, ye]);
    const Tt = () => {
      B || re(""), b?.(""), _?.(""), N.current?.focus();
    }, yt = oe && Q ? po(Q, i, h) : B ? r ? po(
      Fr(r, i) ?? Yn(),
      i,
      h
    ) : "" : W, it = B ? !!r : W.length > 0, ft = p || oe, Ve = { year: J.year, month: J.month }, Ct = new Date(Ve.year, Ve.month - 1, 1).getDay(), ae = {
      year: Ve.year,
      month: Ve.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let F = 0; F < wv; F += 1)
      Le.push(zn(ae, F - Ct));
    const wt = Q ? Xt(Q) : me ? Xt(me) : null, Mt = Xt(Yn()), bt = `${Ve.year}-${ln(Ve.month)}`, R = Se(
      () => new Intl.DateTimeFormat(h, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [h]
    ), X = new Intl.DateTimeFormat(h, {
      month: "long",
      year: "numeric"
    }).format(new Date(Ve.year, Ve.month - 1, 1)), ge = Array.from(
      { length: 7 },
      (F, pe) => new Intl.DateTimeFormat(h, { weekday: "short" }).format(
        new Date(2021, 0, 3 + pe)
      )
    ), we = t === "xs" ? qe["dx-datepicker-input--xs"] : t === "sm" ? qe["dx-datepicker-input--sm"] : t === "lg" ? qe["dx-datepicker-input--lg"] : t === "xl" ? qe["dx-datepicker-input--xl"] : qe["dx-datepicker-input--md"], fe = /* @__PURE__ */ M(
      "div",
      {
        className: qe["dx-datepicker-calendar"],
        "aria-label": x ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: qe["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const F = $e(fo(J, -1));
                  V(F), setTimeout(() => Ge(F), 0);
                },
                children: /* @__PURE__ */ o(Ee, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: qe["dx-datepicker-title"], children: X }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const F = $e(fo(J, 1));
                  V(F), setTimeout(() => Ge(F), 0);
                },
                children: /* @__PURE__ */ o(Ee, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
            "div",
            {
              ref: D,
              role: "grid",
              tabIndex: -1,
              className: qe["dx-datepicker-grid"],
              onKeyDown: Xe,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: qe["dx-datepicker-week-row"], children: ge.map((F) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: qe["dx-datepicker-weekday"],
                    children: F
                  },
                  F
                )) }),
                Array.from({ length: 6 }, (F, pe) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: qe["dx-datepicker-row"],
                    children: Le.slice(pe * 7, pe * 7 + 7).map((Re) => {
                      const De = Xt(Re), It = K(Re), et = De.startsWith(bt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": De,
                          tabIndex: De === Xt(J) ? 0 : -1,
                          "aria-selected": De === wt || void 0,
                          "aria-disabled": It || void 0,
                          "aria-label": R.format(
                            new Date(Re.year, Re.month - 1, Re.day)
                          ),
                          className: [
                            qe["dx-datepicker-day"],
                            et ? null : qe["dx-datepicker-day--outside"],
                            De === Mt ? qe["dx-datepicker-day--today"] : null,
                            De === wt ? qe["dx-datepicker-day--selected"] : null,
                            It ? qe["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Qe(Re),
                          onFocus: () => V(Re),
                          children: Re.day
                        },
                        De
                      );
                    })
                  },
                  pe
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ M("div", { className: qe["dx-datepicker-time"], children: [
            Tv.map((F) => /* @__PURE__ */ M("label", { className: qe["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: qe["dx-datepicker-time-label"], children: _o(F) }),
              /* @__PURE__ */ M("div", { className: qe["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: qe["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _o(F),
                    value: ln(
                      (Q ?? me ?? Yn())[F]
                    ),
                    onChange: (pe) => gt(F, pe.target.value),
                    onKeyDown: (pe) => {
                      pe.key === "ArrowUp" ? (pe.preventDefault(), He(F, 1)) : pe.key === "ArrowDown" ? (pe.preventDefault(), He(F, -1)) : pe.key === "Enter" && (pe.preventDefault(), te());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: qe["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_o(F).toLowerCase()}`,
                      onClick: () => He(F, 1),
                      children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_o(F).toLowerCase()}`,
                      onClick: () => He(F, -1),
                      children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, F)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-ok"],
                onClick: te,
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
        ref: w,
        className: [
          qe["dx-datepicker"],
          p ? qe["dx-datepicker-inline"] : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !p && /* @__PURE__ */ M(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: yt,
                disabled: u,
                readOnly: g,
                placeholder: S,
                tabIndex: O,
                role: c ? void 0 : "combobox",
                "aria-label": x ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : ft,
                "aria-controls": c ? void 0 : P,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-datepicker-input"],
                  we,
                  n ? qe["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: lt,
                onKeyDown: ze,
                onBlur: st,
                onClick: () => {
                  c || Je();
                },
                ...z
              }
            ),
            f && !u && it && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  qe["dx-datepicker-clear"],
                  c ? qe["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: Tt,
                children: /* @__PURE__ */ o(Ee, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ o(
              "button",
              {
                ref: I,
                type: "button",
                className: [qe["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": T ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": oe,
                "aria-controls": P,
                disabled: u,
                onClick: Je,
                children: /* @__PURE__ */ o(Ee, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          ft && /* @__PURE__ */ o(
            "div",
            {
              id: P,
              role: p ? void 0 : "dialog",
              "aria-label": p ? void 0 : x ?? "Date picker",
              className: p ? void 0 : qe["dx-datepicker-popup"],
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
}, U$ = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: a = "Rating",
  clearLabel: i = "Clear",
  rateLabel: d = "Rate",
  tabIndex: s = 0,
  className: l,
  onChange: c,
  onValueChange: f
}) => {
  const [p, y] = U(e), h = H(
    (u) => Math.min(t, Math.max(1, u)),
    [t]
  ), b = H(
    (u) => {
      c?.(u), f?.(u);
    },
    [c, f]
  ), _ = H(
    (u) => {
      n || r || (b(u), y(u));
    },
    [n, r, b]
  ), v = (u) => {
    if (n || r) return;
    const g = p > 0 ? p : 1;
    switch (u.key) {
      case "ArrowRight":
      case "ArrowUp":
        u.preventDefault(), _(h(g + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        u.preventDefault(), _(h(g - 1));
        break;
      case "Home":
        u.preventDefault(), _(1);
        break;
      case "End":
        u.preventDefault(), _(t);
        break;
    }
  }, m = Array.from({ length: t }, (u, g) => g + 1);
  return /* @__PURE__ */ M(
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
            children: /* @__PURE__ */ o(Ee, { icon: "block", size: 16 })
          }
        ),
        m.map((u) => {
          const g = u <= e, S = u === (e > 0 ? e : p);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${d} ${u}`,
              tabIndex: S ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                g ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => _(u),
              onFocus: () => y(u),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Xn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Ee, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Xn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: "star", size: 20 }) })
              ]
            },
            u
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
const q$ = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: a = 100,
  step: i = 1,
  range: d = !1,
  orientation: s = "horizontal",
  disabled: l = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: p = "Max",
  tabIndex: y = 0,
  className: h,
  onChange: b,
  onInput: _,
  onValueChange: v,
  onInputChange: m
}) => {
  const u = le(null), g = le(
    null
  ), [S, x] = U(null), T = S ?? e, $ = Se(
    () => On(T, r, a),
    [T, r, a]
  ), O = Se(
    () => On(d ? t : $, r, a),
    [d, t, $, r, a]
  ), C = Se(
    () => On(d ? Math.max(n, O) : $, r, a),
    [d, n, O, $, r, a]
  ), L = H(
    (J) => {
      const V = a - r;
      return V <= 0 ? 0 : (On(J, r, a) - r) / V * 100;
    },
    [r, a]
  ), A = H(
    (J, V) => {
      const Y = u.current;
      if (!Y) return r;
      const he = Y.getBoundingClientRect();
      let ee;
      s === "vertical" ? ee = 1 - (V - he.top) / he.height : ee = (J - he.left) / he.width;
      const me = r + On(ee, 0, 1) * (a - r);
      return i > 0 ? On(Math.round(me / i) * i, r, a) : On(me, r, a);
    },
    [r, a, i, s]
  ), z = H(
    (J) => {
      typeof J == "number" && x(J), b?.(J), v?.(J);
    },
    [b, v]
  ), k = H(
    (J) => {
      typeof J == "number" && x(J), _?.(J), m?.(J);
    },
    [_, m]
  ), w = H(
    (J, V, Y) => {
      const he = A(V, Y);
      let ee;
      d ? J === "min" ? ee = { min: Math.min(he, C), max: C } : ee = { min: O, max: Math.max(he, O) } : ee = he, k(ee), g.current === null && z(ee);
    },
    [d, A, O, C, k, z]
  ), N = H(
    (J, V) => {
      const Y = (i > 0 ? i : 1) * V;
      let he;
      d ? J === "min" ? he = {
        min: On(O + Y, r, C),
        max: C
      } : he = {
        min: O,
        max: On(C + Y, O, a)
      } : he = On($ + Y, r, a), z(he);
    },
    [d, i, r, a, O, C, $, z]
  ), I = (J, V) => {
    if (!l)
      switch (V.key) {
        case "ArrowLeft":
        case "ArrowDown":
          V.preventDefault(), N(J, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          V.preventDefault(), N(J, 1);
          break;
        case "Home":
          V.preventDefault(), z(d ? J === "min" ? { min: r, max: C } : { min: O, max: O } : r);
          break;
        case "End":
          V.preventDefault(), z(d ? J === "min" ? { min: C, max: C } : { min: O, max: a } : a);
          break;
      }
  }, D = (J, V) => {
    l || (V.preventDefault(), V.currentTarget.focus(), typeof V.currentTarget.setPointerCapture == "function" && V.currentTarget.setPointerCapture(V.pointerId), g.current = { key: J, pointerId: V.pointerId }, w(J, V.clientX, V.clientY));
  }, P = (J) => {
    !g.current || g.current.pointerId !== J.pointerId || (J.preventDefault(), w(g.current.key, J.clientX, J.clientY));
  }, B = (J) => {
    !g.current || g.current.pointerId !== J.pointerId || (g.current = null, J.preventDefault(), z(d ? { min: O, max: C } : $));
  }, [W, re] = U(null), oe = L(O), ie = L(C), Q = d ? oe : 0, Ie = ie;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        rr["dx-slider"],
        s === "vertical" ? rr["dx-slider-vertical"] : null,
        l ? rr["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: u, className: rr["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: rr["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${Q}%`, height: `${Ie - Q}%` } : { left: `${Q}%`, width: `${Ie - Q}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(O),
            "aria-orientation": s,
            "aria-label": d ? f : c,
            "aria-disabled": l || void 0,
            tabIndex: l || d && W === "max" ? -1 : y,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${oe}% - 8px)` } : { left: `calc(${oe}% - 8px)` },
            onKeyDown: (J) => I("min", J),
            onPointerDown: (J) => D("min", J),
            onPointerMove: P,
            onPointerUp: B,
            onFocus: () => re("min")
          }
        ),
        d && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(C),
            "aria-orientation": s,
            "aria-label": p,
            "aria-disabled": l || void 0,
            tabIndex: l || W === "min" ? -1 : y,
            className: rr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ie}% - 8px)` } : { left: `calc(${ie}% - 8px)` },
            onKeyDown: (J) => I("max", J),
            onPointerDown: (J) => D("max", J),
            onPointerMove: P,
            onPointerUp: B,
            onFocus: () => re("max")
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
}, Cv = "-10675199.02:48:05.4775808", Mv = "10675199.02:48:05.4775808", Rn = 86400, jn = 3600, wn = 60, qo = {
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
    if (!a.slice(1).some((p) => p != null)) return null;
    const s = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, c = a[3] != null ? Number(a[3]) : 0, f = a[4] != null ? Number(a[4]) : 0;
    return n * (s * Rn + l * jn + c * wn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || c > 59 ? null : n * (d * Rn + s * jn + l * wn + c + f);
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
  const d = Math.floor(r / wn) + i, s = d % 60, l = Math.floor(d / 60), c = l % 24, f = Math.floor(l / 24), p = n ? "-" : "", y = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${p}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${p}${y}${gr(c)}`;
    case "minute":
      return `${p}${y}${gr(c)}:${gr(s)}`;
    default:
      return `${p}${y}${gr(c)}:${gr(s)}:${gr(a)}`;
  }
}
function ya(e, t = "second") {
  const n = Gr(e);
  return n === null ? "" : os(n, t);
}
function Wo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const W$ = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Cv,
    max: d = Mv,
    step: s = "1",
    precision: l = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: p = !0,
    showSeconds: y = !0,
    allowClear: h = !1,
    inline: b = !1,
    onChange: _,
    onValueChange: v,
    onOpen: m,
    onClose: u,
    disabled: g,
    placeholder: S,
    ariaLabel: x,
    triggerLabel: T,
    clearLabel: $,
    tabIndex: O,
    className: C,
    onBlur: L,
    onKeyDown: A,
    ...z
  }, k) {
    const w = le(null), N = le(null), I = le(null), D = ct(), P = r !== void 0, [B, W] = U(
      () => a != null ? ya(a, l) : ""
    ), [re, oe] = U(!1), [ie, Q] = U(null), [Ie, J] = U(null), V = Se(
      () => Gr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), Y = Se(
      () => Gr(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), he = Se(() => {
      const ae = Number.parseFloat(s);
      return Number.isNaN(ae) || ae <= 0 ? 1 : ae;
    }, [s]), ee = Se(() => {
      const ae = P ? r ?? "" : B;
      return ae ? Gr(ae) : null;
    }, [r, B, P]), me = H(
      (ae) => {
        const Le = ae === null ? "" : os(ae, l);
        P || W(Le), _?.(Le), v?.(Le);
      },
      [P, l, _, v]
    ), K = H(
      (ae) => {
        ae && ie !== null && me(ie), oe(!1), Q(null), J(null), u?.(), b || I.current?.focus();
      },
      [b, ie, me, u]
    ), $e = H(() => {
      g || (Q(ee ?? 0), oe(!0), m?.());
    }, [g, ee, m]), se = H(() => {
      re ? K(!1) : $e();
    }, [re, K, $e]), Ae = H(
      (ae, Le) => {
        Q((wt) => {
          const bt = (wt ?? ee ?? 0) + Le * he * ma[ae];
          return Wo(bt, V, Y);
        });
      },
      [ee, he, V, Y]
    ), ye = H(
      (ae) => {
        const Le = Ie?.[ae];
        if (Le == null) return;
        const wt = Number.parseFloat(Le), Mt = Number.isNaN(wt) ? 0 : wt;
        Q((bt) => {
          const R = bt ?? ee ?? 0, X = ga(R);
          X[ae] = Mt;
          const we = (R < 0 ? -1 : 1) * Dv(X);
          return Wo(we, V, Y);
        }), J(null);
      },
      [Ie, ee, V, Y]
    ), We = (ae, Le) => {
      J((wt) => ({ ...wt ?? {}, [ae]: Le }));
    }, Je = (ae, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), ye(ae), Ae(ae, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), ye(ae), Ae(ae, -1);
          break;
        case "Home":
          Le.preventDefault(), ye(ae), Q(V);
          break;
        case "End":
          Le.preventDefault(), ye(ae), Q(Y);
          break;
        case "Enter":
          Le.preventDefault(), ye(ae), K(!0);
          break;
      }
    }, Ge = H(() => {
      if (re) return;
      const ae = Gr(B);
      me(ae !== null ? Wo(ae, V, Y) : null);
    }, [re, B, V, Y, me]), Qe = (ae) => {
      P || W(ae.target.value);
    }, He = (ae) => {
      ae.key === "Enter" ? (ae.preventDefault(), re ? K(!0) : Ge()) : ae.key === "Escape" && re ? (ae.preventDefault(), K(!1)) : ae.key === "ArrowDown" && !re ? (ae.preventDefault(), $e()) : ae.key === "Tab" && re && oe(!1), A?.(ae);
    }, gt = (ae) => {
      Ge(), L?.(ae);
    }, te = () => {
      P || W(""), _?.(""), v?.(""), N.current?.focus();
    };
    Ne(() => {
      if (!re) return;
      const ae = (Le) => {
        w.current && !w.current.contains(Le.target) && K(!1);
      };
      return document.addEventListener("mousedown", ae), () => document.removeEventListener("mousedown", ae);
    }, [re, K]), Ne(() => {
      if (!re) return;
      const ae = (Le) => {
        Le.key === "Escape" && K(!1);
      };
      return document.addEventListener("keydown", ae), () => document.removeEventListener("keydown", ae);
    }, [re, K]), Ne(() => {
      if (b && ie !== null) {
        const ae = ee;
        (ae === null || Math.abs(ie - ae) > 1e-9) && me(ie);
      }
    }, [b, ie, ee, me]);
    const Te = H(
      (ae) => {
        N.current = ae, typeof k == "function" ? k(ae) : k && (k.current = ae);
      },
      [k]
    ), lt = P ? r ? ya(r, l) : "" : B, ze = P ? !!r : B.length > 0, st = b || re, Xe = ie ?? ee ?? 0, Tt = ga(Xe), yt = Av[l], ft = ["days", "hours", "minutes", "seconds"].filter(
      (ae) => ma[ae] >= yt && (ae === "days" ? c : ae === "hours" ? f : ae === "minutes" ? p : y)
    ), Ve = t === "xs" ? _t["dx-timespanpicker-input--xs"] : t === "sm" ? _t["dx-timespanpicker-input--sm"] : t === "lg" ? _t["dx-timespanpicker-input--lg"] : t === "xl" ? _t["dx-timespanpicker-input--xl"] : _t["dx-timespanpicker-input--md"], Ct = /* @__PURE__ */ M("div", { className: _t["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-demos"], "aria-live": "polite", children: os(Xe, l) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-units"], children: ft.map((ae) => /* @__PURE__ */ M("label", { className: _t["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: _t["dx-timespanpicker-unit-label"], children: qo[ae] }),
        /* @__PURE__ */ M("span", { className: _t["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: _t["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: Ie?.[ae] ?? String(Tt[ae]),
              onChange: (Le) => We(ae, Le.target.value),
              onKeyDown: (Le) => Je(ae, Le),
              onBlur: () => ye(ae)
            }
          ),
          /* @__PURE__ */ M("span", { className: _t["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${qo[ae].toLowerCase()}`,
                onClick: () => {
                  ye(ae), Ae(ae, 1);
                },
                children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${qo[ae].toLowerCase()}`,
                onClick: () => {
                  ye(ae), Ae(ae, -1);
                },
                children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, ae)) }),
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: w,
        className: [
          _t["dx-timespanpicker"],
          b ? _t["dx-timespanpicker-inline"] : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ M(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Te,
                type: "text",
                autoComplete: "off",
                value: lt,
                disabled: g,
                placeholder: S,
                tabIndex: O,
                role: "combobox",
                "aria-label": x ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": re,
                "aria-controls": D,
                "aria-invalid": n || void 0,
                className: [
                  _t["dx-timespanpicker-input"],
                  Ve,
                  n ? _t["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Qe,
                onKeyDown: He,
                onBlur: gt,
                ...z
              }
            ),
            h && !g && ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _t["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
                onClick: te,
                children: /* @__PURE__ */ o(Ee, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: I,
                type: "button",
                className: [_t["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": T ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": re,
                "aria-controls": D,
                disabled: g,
                onClick: se,
                children: /* @__PURE__ */ o(Ee, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          st && /* @__PURE__ */ o(
            "div",
            {
              id: D,
              role: b ? void 0 : "dialog",
              "aria-label": x ?? "Time span picker",
              className: b ? void 0 : _t["dx-timespanpicker-popup"],
              children: Ct
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
const K$ = at(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: a,
    invalid: i = !1,
    size: d = "md",
    autoFocus: s = !1,
    disabled: l = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: p,
    "aria-label": y
  }, h) {
    const b = ct(), _ = n !== void 0, [v, m] = U(ba(r).join("")), u = _ ? ba(n).join("") : v, g = Array.from({ length: t }, (z, k) => u[k] ?? ""), S = le([]), [x, T] = U(""), $ = (z) => {
      _ || m(z), a?.(z);
    }, O = (z) => {
      const k = S.current[z];
      k && !k.disabled && (k.focus(), k.select());
    }, C = (z, k) => {
      const w = k.replace(/\D/g, "").slice(-1), N = u.split("");
      if (w) {
        N[z] = w;
        const I = N.join("").slice(0, t);
        $(I), I.length < t ? O(z + 1) : f && T("Code complete");
      }
    }, L = (z, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), u[z]) {
          const w = u.split("");
          w[z] = "", $(w.join(""));
        } else if (z > 0) {
          const w = u.split("");
          w[z - 1] = "", $(w.join("")), O(z - 1);
        }
      } else k.key === "ArrowLeft" && z > 0 ? (k.preventDefault(), O(z - 1)) : k.key === "ArrowRight" && z < t - 1 ? (k.preventDefault(), O(z + 1)) : k.key === "Home" ? (k.preventDefault(), O(0)) : k.key === "End" && (k.preventDefault(), O(t - 1));
    }, A = (z, k) => {
      k.preventDefault();
      const w = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!w) return;
      const N = u.split("");
      let I = 0;
      for (let P = 0; P < w.length && z + P < t; P++)
        N[z + P] = w[P] ?? "", I++;
      const D = N.join("");
      $(D), D.length >= t ? f && T("Code complete") : O(z + I);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [or.wrapper, p].filter(Boolean).join(" "),
        role: "group",
        "aria-label": y ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [or.cells, or[d]].join(" "), children: g.map((z, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (w) => {
                S.current[k] = w, k === 0 && h && (typeof h == "function" ? h(w) : h.current = w);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: z,
              disabled: l,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": i && z !== "" ? !0 : void 0,
              autoFocus: s && k === 0,
              className: [
                or.cell,
                or[`cell-${d}`],
                i ? or.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (w) => C(k, w.target.value),
              onKeyDown: (w) => L(k, w),
              onPaste: (w) => A(k, w),
              onFocus: (w) => w.target.select(),
              onBlur: () => {
                f && T("");
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
              className: or.live,
              children: x
            }
          )
        ]
      }
    );
  }
), jv = "_wrapper_6lcd5_1", Bv = "_header_6lcd5_7", Fv = "_label_6lcd5_15", Hv = "_clear_6lcd5_22", Uv = "_canvas_6lcd5_53", qv = "_disabled_6lcd5_69", yr = {
  wrapper: jv,
  header: Bv,
  label: Fv,
  clear: Hv,
  canvas: Uv,
  disabled: qv
}, G$ = at(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: a = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: s = "Signature",
    width: l,
    height: c = 140,
    disabled: f = !1,
    className: p
  }, y) {
    const h = le(null), b = le(!1), _ = le(!1), v = le({ x: 0, y: 0 });
    Ne(() => {
      const $ = h.current;
      if (!$) return;
      const O = window.devicePixelRatio || 1, C = Math.round((l ?? $.clientWidth) * O), L = Math.round(c * O);
      ($.width !== C || $.height !== L) && ($.width = C, $.height = L);
      const A = $.getContext("2d");
      if (!A) return;
      A.setTransform(O, 0, 0, O, 0, 0), A.lineWidth = i, A.strokeStyle = a, A.lineCap = "round", A.lineJoin = "round";
      const z = t ?? n;
      if (z) {
        const k = new Image();
        k.onload = () => {
          A.drawImage(k, 0, 0, $.clientWidth, c);
        }, k.src = z;
      }
    }, [t, n, a, i, l, c]);
    const m = () => {
      const $ = h.current;
      if (!$) return;
      const O = $.toDataURL("image/png");
      r?.(O);
    }, u = () => {
      const $ = h.current;
      if (!$) return;
      const O = $.getContext("2d");
      O && O.clearRect(0, 0, $.width, $.height), r?.("");
    };
    So(y, () => ({
      clear: u,
      toDataURL: ($ = "image/png", O) => h.current?.toDataURL($, O) ?? ""
    }));
    const g = ($) => {
      const O = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - O.left, y: $.clientY - O.top };
    }, S = ($) => {
      f || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), b.current = !0, _.current = !1, v.current = g($));
    }, x = ($) => {
      if (!b.current) return;
      $.preventDefault();
      const O = $.currentTarget.getContext("2d");
      if (!O) return;
      const C = g($);
      O.beginPath(), O.moveTo(v.current.x, v.current.y), O.lineTo(C.x, C.y), O.stroke(), v.current = C, _.current = !0;
    }, T = ($) => {
      b.current && ($.preventDefault(), b.current = !1, _.current && m());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          yr.wrapper,
          p,
          f ? yr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: yr.header, children: [
            /* @__PURE__ */ o("span", { className: yr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: yr.clear,
                onClick: u,
                disabled: f,
                children: d
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
                height: `${c}px`
              },
              className: yr.canvas,
              onPointerDown: S,
              onPointerMove: x,
              onPointerUp: T,
              onPointerCancel: T
            }
          )
        ]
      }
    );
  }
), Wv = "_wrapper_dsvd2_1", Kv = "_trigger_dsvd2_7", Gv = "_list_dsvd2_35", Vv = "_row_dsvd2_44", Yv = "_name_dsvd2_59", Xv = "_size_dsvd2_68", Zv = "_progress_dsvd2_74", Jv = "_fill_dsvd2_82", Qv = "_status_dsvd2_99", ew = "_remove_dsvd2_106", En = {
  wrapper: Wv,
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
const V$ = at(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: a = !0,
  headers: i,
  accept: d,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: c = "Upload",
  children: f,
  onProgress: p,
  onComplete: y,
  onError: h
}, b) {
  const _ = le(null), [v, m] = U([]), u = le(/* @__PURE__ */ new Map()), g = (O, C) => {
    m(
      (L) => L.map((A) => A.file.name === O ? { ...A, ...C } : A)
    );
  }, S = (O) => {
    if (!t) return;
    const C = new XMLHttpRequest();
    u.current.set(O.file.name, C);
    const L = new FormData();
    if (L.append(r, O.file), C.upload.addEventListener("progress", (A) => {
      if (!A.lengthComputable) return;
      const z = Math.round(A.loaded / A.total * 100);
      g(O.file.name, { state: "uploading", progress: z }), p?.(O.file.name, z);
    }), C.addEventListener("load", () => {
      C.status >= 200 && C.status < 300 ? (g(O.file.name, { state: "complete", progress: 100 }), y?.(O.file.name)) : (g(O.file.name, {
        state: "error",
        message: `HTTP ${C.status}`
      }), h?.(O.file.name, `HTTP ${C.status}`));
    }), C.addEventListener("error", () => {
      g(O.file.name, { state: "error", message: "Network error" }), h?.(O.file.name, "Network error");
    }), i)
      for (const [A, z] of Object.entries(i))
        C.setRequestHeader(A, z);
    C.open("POST", t), C.send(L), g(O.file.name, { state: "uploading", progress: 0 });
  }, x = (O) => {
    if (!O) return;
    const C = [...O], L = [];
    let A = Math.max(0, s - v.length);
    for (const k of C) {
      if (l != null && k.size > l) {
        h?.(
          k.name,
          `File too large (maximum ${xa(l)})`
        );
        continue;
      }
      if (A <= 0) {
        h?.(k.name, `Too many files (maximum ${s})`);
        continue;
      }
      A -= 1, L.push(k);
    }
    const z = L.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    m((k) => [...k, ...z]), _.current && (_.current.value = ""), a && z.forEach(S);
  }, T = (O) => {
    u.current.get(O)?.abort(), u.current.delete(O), m((L) => L.filter((A) => A.file.name !== O));
  }, $ = f ?? /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: En.trigger,
      onClick: () => _.current?.click(),
      children: [
        /* @__PURE__ */ o(Ee, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return So(b, () => ({
    open: () => _.current?.click(),
    upload: () => v.forEach((O) => O.state === "pending" ? S(O) : null)
  })), /* @__PURE__ */ M("div", { className: En.wrapper, children: [
    $,
    /* @__PURE__ */ o(
      "input",
      {
        ref: _,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (O) => x(O.target.files)
      }
    ),
    !f && v.length > 0 && /* @__PURE__ */ o("ul", { className: En.list, children: v.map(({ file: O, state: C, progress: L, message: A }) => /* @__PURE__ */ M(
      "li",
      {
        className: En.row,
        "data-state": C,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: En.name, children: O.name }),
          /* @__PURE__ */ o("span", { className: En.size, children: xa(O.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: En.progress,
              role: "progressbar",
              "aria-label": `${O.name} upload progress`,
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
          /* @__PURE__ */ o("span", { className: En.status, role: "status", children: C === "uploading" ? "Uploading" : C === "complete" ? "Complete" : C === "error" ? A ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: En.remove,
              "aria-label": `Remove ${O.name}`,
              onClick: () => T(O.name),
              children: /* @__PURE__ */ o(Ee, { icon: "close", size: 14 })
            }
          )
        ]
      },
      O.name
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
const Y$ = at(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: a = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: d = "Browse",
    disabled: s = !1,
    className: l
  }, c) {
    const f = le(null), [p, y] = U(!1), h = (u) => {
      if (!u || u.length === 0) return;
      const g = [...u].filter((S) => aw(S, t ?? ""));
      g.length !== 0 && r?.(g);
    }, b = (u) => {
      s || (u.preventDefault(), y(!0));
    }, _ = (u) => {
      s || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", y(!0));
    }, v = (u) => {
      s || u.currentTarget.contains(u.relatedTarget) || y(!1);
    }, m = (u) => {
      s || (u.preventDefault(), y(!1), h(u.dataTransfer.files));
    };
    return So(c, () => ({
      open: () => f.current?.click()
    })), // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props -- file-drop target; keyboard users pick files via the browse control; aria-disabled is the only AT-visible disabled signal on a non-form region
    /* @__PURE__ */ M(
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
        onDragEnter: b,
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
              disabled: s,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (u) => {
                h(u.target.files), u.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), lw = "_root_1rz3e_1", iw = "_menubar_1rz3e_5", cw = "_horizontal_1rz3e_15", dw = "_vertical_1rz3e_20", uw = "_itemWrapper_1rz3e_25", fw = "_item_1rz3e_25", pw = "_disabled_1rz3e_61", _w = "_icon_1rz3e_68", hw = "_text_1rz3e_75", mw = "_caret_1rz3e_79", gw = "_hasChildren_1rz3e_85", yw = "_submenu_1rz3e_91", bw = "_submenuItem_1rz3e_91", xw = "_flyout_1rz3e_182", vw = "_hamburger_1rz3e_202", ww = "_responsive_1rz3e_225", kw = "_mobileOpen_1rz3e_234", mt = {
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
function Sw(e, t, n, r, a) {
  const [i, d] = U(n), s = e ? t ?? !1 : i, l = H(
    (p) => {
      e || d(p), r?.(p);
    },
    [e, r]
  ), [c, f] = U(a);
  return a !== c && (f(a), a > 0 && !e && d(!1)), Ne(() => {
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
      children: /* @__PURE__ */ o(Ee, { icon: e, size: 16 })
    }
  ) : null;
}
function vo(e) {
  return Wt(e) && e.type === Ya;
}
function fs({
  itemKey: e,
  props: t
}) {
  const n = Bn(xo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: d, template: s } = t, l = Se(
    () => Zr.toArray(t.children).filter(Wt),
    [t.children]
  ), c = l.length > 0, f = !!d, p = t.open !== void 0, [y, h] = Sw(
    p,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, _ = le(0), m = (b && !p ? n.openKey === e : null) ?? y, u = H(
    (J) => {
      b && !p ? n.setOpenKey(J ? e : null) : (h(J), b && n.setOpenKey(null));
    },
    [b, p, n, e, h]
  ), [, g] = U(0);
  Ne(() => {
    if (!i) return;
    const J = () => g((V) => V + 1);
    return window.addEventListener("hashchange", J), window.addEventListener("popstate", J), () => {
      window.removeEventListener("hashchange", J), window.removeEventListener("popstate", J);
    };
  }, [i]);
  const S = t.selected !== void 0 || t.onSelectedChange !== void 0, x = t.defaultSelected ?? !1, T = !c && !S && i ? Nw(i, t.match) : !1, $ = !c && (S ? t.selected ?? x : T || x || n.clickedKey != null && n.clickedKey === e), O = !f && (n.activeKey === e || n.activeKey == null && n.defaultStopKey === e), C = () => n.setActiveKey(e), L = H(
    (J) => {
      if (f) {
        J.preventDefault();
        return;
      }
      const V = { text: r, value: a, path: i };
      [n.emit(V), t.onClick?.(V)].includes(!1) && J.preventDefault(), S || n.setClickedKey(e), t.onSelectedChange?.(!0), n.closeAll();
    },
    [f, r, a, i, n, t, S, e]
  ), A = H(() => {
    if (!f) {
      if (m && (Date.now() - _.current < 600 || !n.clickToOpen)) {
        _.current = 0;
        return;
      }
      u(!m);
    }
  }, [f, m, u, n.clickToOpen]), z = H(() => {
    !c || f || n.clickToOpen || (_.current = Date.now(), u(!0));
  }, [c, f, n.clickToOpen, u]), k = H(() => {
    n.clickToOpen || u(!1);
  }, [n.clickToOpen, u]), w = `${n.baseId}-submenu-${e}`, [N, I] = U(null), [D, P] = U(null), B = Se(() => {
    const J = l.findIndex(
      (V) => vo(V) && !V.props.disabled
    );
    return J >= 0 ? `${e}-${J}` : null;
  }, [l, e]), [W, re] = U(n.closeSignal);
  n.closeSignal !== W && (re(n.closeSignal), n.closeSignal > 0 && I(null));
  const oe = Se(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: N,
      setOpenKey: I,
      activeKey: D,
      setActiveKey: P,
      clickedKey: n.clickedKey,
      setClickedKey: n.setClickedKey,
      defaultStopKey: B
    }),
    [n, N, D, B]
  ), ie = c ? /* @__PURE__ */ o("span", { className: mt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Ee,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, Q = s ?? /* @__PURE__ */ M(ot, { children: [
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
    ie
  ] });
  if (c) {
    let J = function(V) {
      const Y = Array.from(V.currentTarget.children).map((me) => me.querySelector('[role="menuitem"]')).filter(
        (me) => me != null && me.getAttribute("aria-disabled") !== "true" && !me.hasAttribute("disabled")
      ), he = document.activeElement, ee = he ? Y.indexOf(he) : -1;
      V.key === "ArrowDown" ? (V.preventDefault(), V.stopPropagation(), (ee === -1 ? Y[0] : Y[(ee + 1) % Y.length])?.focus()) : V.key === "ArrowUp" ? (V.preventDefault(), V.stopPropagation(), (ee === -1 ? Y[Y.length - 1] : Y[(ee - 1 + Y.length) % Y.length])?.focus()) : V.key === "ArrowRight" ? he?.getAttribute("aria-haspopup") === "menu" && (V.preventDefault(), V.stopPropagation(), he.getAttribute("aria-expanded") !== "true" && he.click(), document.getElementById(
        he.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (V.key === "ArrowLeft" || V.key === "Escape") && (V.preventDefault(), V.stopPropagation(), u(!1));
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: mt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : z,
        onMouseLeave: n.clickToOpen ? void 0 : k,
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
              "aria-expanded": m,
              "aria-controls": w,
              tabIndex: O ? 0 : -1,
              disabled: f,
              className: [
                mt.item,
                f ? mt.disabled : null,
                mt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: A,
              onFocus: C,
              children: Q
            }
          ),
          m ? /* @__PURE__ */ o(
            "div",
            {
              id: w,
              role: "menu",
              tabIndex: -1,
              "aria-label": r,
              className: [
                mt.submenu,
                n.flyout && !b ? mt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: J,
              children: /* @__PURE__ */ o(xo.Provider, { value: oe, children: l.map(
                (V, Y) => vo(V) ? /* @__PURE__ */ o(
                  fs,
                  {
                    itemKey: `${e}-${Y}`,
                    props: V.props
                  },
                  `${e}-${Y}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ls, { children: V }, `${e}-custom-${Y}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const Ie = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": $ ? "page" : void 0,
    tabIndex: O ? 0 : -1,
    onFocus: C,
    "data-dx-menu-item": "",
    className: [mt.submenuItem, f ? mt.disabled : null].filter(Boolean).join(" "),
    onClick: L
  };
  return i && !f ? /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...Ie, children: Q }) }) : /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...Ie, children: Q }) });
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
  onClose: d,
  ariaLabel: s = "Menu",
  toggleAriaLabel: l = "Toggle menu",
  className: c,
  ...f
}) {
  const p = ct(), y = le(null), h = le(null), [b, _] = U(null), [v, m] = U(null), [u, g] = U(0), [S, x] = U(!1), [T, $] = U(null), O = le(null);
  Ne(() => {
    const N = () => $(null);
    return window.addEventListener("hashchange", N), window.addEventListener("popstate", N), () => {
      window.removeEventListener("hashchange", N), window.removeEventListener("popstate", N);
    };
  }, []);
  const C = H(
    (N) => i?.(N),
    [i]
  ), L = H(() => {
    _(null), g((N) => N + 1);
  }, []);
  Ne(() => {
    if (b == null) return;
    const N = (I) => {
      y.current && !y.current.contains(I.target) && L();
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [b, L]), Ne(() => {
    O.current != null && b === O.current && (document.getElementById(`${p}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), O.current = null);
  }, [b, p]);
  const A = Se(
    () => Zr.toArray(e).filter(Wt),
    [e]
  ), z = Se(() => {
    const N = A.findIndex(
      (I) => vo(I) && !I.props.disabled
    );
    return N >= 0 ? String(N) : null;
  }, [A]), k = Se(
    () => ({
      baseId: p,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: u,
      emit: C,
      closeAll: L,
      openKey: b,
      setOpenKey: _,
      activeKey: v,
      setActiveKey: m,
      clickedKey: T,
      setClickedKey: $,
      defaultStopKey: z
    }),
    [
      p,
      n,
      t,
      u,
      C,
      L,
      b,
      v,
      T,
      z
    ]
  ), w = (N) => {
    const I = h.current;
    if (!I) return;
    const D = Array.from(I.children).map((W) => W.querySelector('[role="menuitem"]')).filter(
      (W) => W != null && !W.hasAttribute("disabled") && W.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const W = document.getElementById(`${p}-submenu-${b}`);
      if (W) {
        const re = Array.from(
          W.querySelectorAll('[role="menuitem"]')
        ).filter(
          (Q) => Q.getAttribute("aria-disabled") !== "true" && !Q.hasAttribute("disabled")
        ), oe = document.activeElement, ie = oe ? re.indexOf(oe) : -1;
        if (N.key === "ArrowDown") {
          N.preventDefault(), (ie === -1 ? re[0] : re[(ie + 1) % re.length])?.focus();
          return;
        }
        if (N.key === "ArrowUp") {
          N.preventDefault(), (ie === -1 ? re[re.length - 1] : re[(ie - 1 + re.length) % re.length])?.focus();
          return;
        }
        if (N.key === "Escape") {
          N.preventDefault(), L(), d?.(), I.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (N.key === "Enter" || N.key === " ") return;
      }
      if (N.key === "Escape") {
        N.preventDefault(), L(), d?.();
        return;
      }
    }
    const P = document.activeElement, B = P ? D.indexOf(P) : -1;
    if (N.key === "ArrowRight") {
      if (N.preventDefault(), D.length === 0) return;
      D[B === -1 ? 0 : (B + 1) % D.length]?.focus();
      return;
    }
    if (N.key === "ArrowLeft") {
      if (N.preventDefault(), D.length === 0) return;
      D[B === -1 ? D.length - 1 : (B - 1 + D.length) % D.length]?.focus();
      return;
    }
    if (a && (N.key === "ArrowDown" || N.key === "ArrowUp")) {
      if (N.preventDefault(), D.length === 0) return;
      (N.key === "ArrowDown" ? D[B === -1 ? 0 : (B + 1) % D.length] : D[B === -1 ? D.length - 1 : (B - 1 + D.length) % D.length])?.focus();
      return;
    }
    if (N.key === "ArrowDown") {
      if (B >= 0) {
        const W = P?.getAttribute("data-index");
        if (W == null) return;
        I.querySelector(
          `[data-index="${W}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (N.preventDefault(), O.current = W, _(W));
      }
      return;
    }
    if (N.key === "Home") {
      N.preventDefault(), D[0]?.focus();
      return;
    }
    if (N.key === "End") {
      N.preventDefault(), D[D.length - 1]?.focus();
      return;
    }
    if (N.key.length === 1 && !N.ctrlKey && !N.metaKey) {
      const W = D.map((oe) => oe.textContent ?? ""), re = B === -1 ? 0 : (B + 1) % D.length;
      for (let oe = 0; oe < D.length; oe++) {
        const ie = (re + oe) % D.length;
        if (W[ie]?.toLowerCase().startsWith(N.key.toLowerCase())) {
          N.preventDefault(), D[ie]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ M(
    "nav",
    {
      ref: y,
      "aria-label": s,
      className: [
        mt.root,
        a ? mt.vertical : mt.horizontal,
        r ? mt.responsive : null,
        r && S ? mt.mobileOpen : null,
        n ? mt.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": S,
            className: mt.hamburger,
            onClick: () => x((N) => !N),
            children: /* @__PURE__ */ o(Ee, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: h,
            role: a ? "menu" : "menubar",
            "aria-label": s,
            className: mt.menubar,
            onKeyDown: w,
            children: /* @__PURE__ */ o(xo.Provider, { value: k, children: A.map(
              (N, I) => vo(N) ? /* @__PURE__ */ o(
                fs,
                {
                  itemKey: String(I),
                  props: N.props
                },
                `top-${I}`
              ) : /* @__PURE__ */ o(ls, { children: N }, `top-custom-${I}`)
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
function X$() {
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
function Cw({ state: e, onClose: t }) {
  const n = le(null), [r, a] = U({ left: e.x, top: e.y });
  Ko(() => {
    const d = n.current;
    if (!d) return;
    const s = d.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), Ne(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = H(
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
function Z$({ children: e }) {
  const [t, n] = U(null), r = H(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = H(
    (d, s) => {
      d.preventDefault();
      const l = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: l, options: s });
    },
    []
  );
  Ne(() => {
    if (!t) return;
    const d = (f) => {
      const p = document.querySelector(`.${ss.popup}`);
      p && !p.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, l = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const i = Se(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ M(Xa.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Cw, { state: t, onClose: r }) : null
  ] });
}
const Mw = "_root_5srqk_1", Aw = "_list_5srqk_9", Dw = "_item_5srqk_14", Iw = "_trigger_5srqk_18", zw = "_disabled_5srqk_48", Lw = "_expanded_5srqk_55", Pw = "_selected_5srqk_37", Rw = "_icon_5srqk_80", jw = "_text_5srqk_96", Bw = "_caret_5srqk_103", Fw = "_open_5srqk_110", Hw = "_submenu_5srqk_114", Uw = "_iconOnly_5srqk_196", qw = "_stacked_5srqk_225", jt = {
  root: Mw,
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
  stacked: qw
}, wo = cr(null);
function Ww() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Kw(e, t) {
  const n = Ww(), r = e.replace(/^#?\/?/, "");
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
      children: /* @__PURE__ */ o(Ee, { icon: e, size: 16 })
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
  const { text: a, value: i, path: d, disabled: s } = n, l = Se(
    () => Zr.toArray(n.children).filter(Wt),
    [n.children]
  ), c = l.length > 0, f = !!s, p = n.match ?? r.match, y = n.expanded !== void 0, [h, b] = U(
    n.defaultExpanded ?? !1
  ), _ = y ? n.expanded ?? !1 : h, v = H(
    (P) => {
      y || b(P), n.onExpandedChange?.(P);
    },
    [y, n]
  );
  Ne(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && v(!1);
  }, [r.collapseSignal]);
  const m = n.onSelectedChange !== void 0 || n.selected !== void 0, u = n.defaultSelected ?? !1, g = !m && d ? Kw(d, p) : !1, S = m ? n.selected ?? u : g || u || r.clickedKey != null && r.clickedKey === e, [, x] = U(0);
  Ne(() => {
    if (!d) return;
    const P = () => x((B) => B + 1);
    return window.addEventListener("hashchange", P), window.addEventListener("popstate", P), () => {
      window.removeEventListener("hashchange", P), window.removeEventListener("popstate", P);
    };
  }, [d]);
  const T = Se(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        v(!0), r.openAncestors();
      }
    }),
    [r, v]
  );
  Ne(() => {
    g && t.length > 0 && T.openAncestors();
  }, []);
  const $ = H(
    (P) => {
      if (f) {
        P.preventDefault();
        return;
      }
      const B = { text: a, value: i, path: d };
      [r.emit(B), n.onClick?.(B)].includes(!1) && P.preventDefault(), m || r.setClickedKey(e), n.onSelectedChange?.(!0);
    },
    [f, a, i, d, r, n, m, e]
  ), O = H(() => {
    f || (_ || r.notifyOpened(e, t), v(!_));
  }, [f, _, r, e, t, v]), C = H(
    (P) => {
      P.key === "Enter" || P.key === " " ? (P.preventDefault(), c ? O() : P.target.click()) : P.key === "Escape" && _ ? (P.preventDefault(), v(!1)) : P.key === "ArrowRight" && c && !_ ? (P.preventDefault(), r.notifyOpened(e, t), v(!0)) : P.key === "ArrowLeft" && _ && (P.preventDefault(), v(!1));
    },
    [c, O, _, v, r, e, t]
  ), L = c && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [jt.caret, _ ? jt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, A = n.template ?? /* @__PURE__ */ M(ot, { children: [
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
    L
  ] }), z = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, w = [
    jt.trigger,
    f ? jt.disabled : null,
    _ ? jt.expanded : null,
    S ? jt.selected : null
  ].filter(Boolean).join(" "), N = r.level > 0 ? "menuitem" : void 0, I = c ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: k,
      role: N,
      "aria-expanded": _,
      "aria-controls": z,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: w,
      onClick: O,
      onKeyDown: C,
      children: A
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: k,
      role: N,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": S ? "page" : void 0,
      tabIndex: 0,
      className: w,
      onClick: $,
      onKeyDown: C,
      children: A
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: k,
      role: N,
      "aria-current": S ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: w,
      onClick: $,
      onKeyDown: C,
      children: A
    }
  ), D = c ? r.renderMode === "server" && !_ ? null : /* @__PURE__ */ o(
    "div",
    {
      id: z,
      role: "menu",
      "aria-labelledby": k,
      className: jt.submenu,
      hidden: r.renderMode === "client" && !_ ? !0 : void 0,
      children: /* @__PURE__ */ o(wo.Provider, { value: T, children: l.map((P, B) => /* @__PURE__ */ o(
        ps,
        {
          itemKey: `${e}-${B}`,
          ancestors: [...t, e],
          props: P.props
        },
        `${e}-${B}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: jt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        I,
        D
      ]
    }
  );
}
function J$(e) {
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(ps, { itemKey: e.text, ancestors: [], props: e });
}
function Q$({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: a = "prefix",
  renderMode: i = "client",
  onClick: d,
  ariaLabel: s = "Panel menu",
  className: l,
  ...c
}) {
  const f = ct(), [p, y] = U(0), h = le(/* @__PURE__ */ new Set()), [b, _] = U(null);
  Ne(() => {
    const T = () => _(null);
    return window.addEventListener("hashchange", T), window.addEventListener("popstate", T), () => {
      window.removeEventListener("hashchange", T), window.removeEventListener("popstate", T);
    };
  }, []);
  const v = H(
    (T) => d?.(T),
    [d]
  ), m = H(
    (T, $) => {
      t || (h.current = /* @__PURE__ */ new Set([T, ...$]), y((O) => O + 1));
    },
    [t]
  ), u = (T) => Array.from(
    T.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    ($) => !$.hasAttribute("disabled") && $.getAttribute("aria-disabled") !== "true" && $.closest("[hidden]") == null
  ), g = (T) => {
    if (!(T.key === "Enter" || T.key === " ")) {
      if (T.key === "ArrowDown" || T.key === "ArrowUp") {
        const $ = T.target, O = u(T.currentTarget), C = O.indexOf($);
        if (C === -1) return;
        T.preventDefault();
        const L = T.key === "ArrowDown" ? 1 : -1;
        O[(C + L + O.length) % O.length]?.focus();
      } else if (T.key === "Home" || T.key === "End") {
        const $ = u(T.currentTarget);
        T.preventDefault(), (T.key === "Home" ? $[0] : $[$.length - 1])?.focus();
      }
    }
  }, S = Se(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: a,
      level: 0,
      collapseSignal: p,
      collapseSkipRef: h,
      emit: v,
      notifyOpened: m,
      openAncestors: () => {
      },
      clickedKey: b,
      setClickedKey: _
    }),
    [
      f,
      t,
      n,
      r,
      i,
      a,
      p,
      v,
      m,
      b
    ]
  ), x = Se(
    () => Zr.toArray(e).filter(Wt),
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
        onKeyDown: g,
        ...c,
        children: /* @__PURE__ */ o("div", { className: jt.list, role: "presentation", children: /* @__PURE__ */ o(wo.Provider, { value: S, children: x.map((T, $) => /* @__PURE__ */ o(
          ps,
          {
            itemKey: String($),
            ancestors: [],
            props: T.props
          },
          `top-${$}`
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
  const i = ct(), d = `${i}-menu`, s = le(null), l = le(null), [c, f] = U(!1), [p, y] = U(-1), h = t, b = e.map((x, T) => x.disabled ? -1 : T).filter((x) => x >= 0), _ = H(
    (x) => {
      if (x.disabled) return;
      const T = {
        text: x.text,
        path: x.path
      };
      n?.(T), f(!1), l.current?.focus();
    },
    [n]
  ), v = H(() => {
    y(b[0] ?? -1), f(!0);
  }, [b]), m = H(() => {
    f(!1), y(-1), l.current?.focus();
  }, []);
  Ne(() => {
    if (!c) return;
    const x = (T) => {
      s.current && !s.current.contains(T.target) && (f(!1), y(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [c]), Ne(() => {
    if (!c) return;
    const x = (T) => {
      T.key === "Escape" && (T.preventDefault(), m());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [c, m]);
  const u = (x) => {
    if (b.length === 0) return;
    const T = b.indexOf(p), $ = T === -1 ? 0 : (T + x + b.length) % b.length, O = b[$];
    O != null && y(O);
  }, g = (x) => {
    if (!c) {
      (x.key === "ArrowDown" || x.key === "Enter" || x.key === " ") && (x.preventDefault(), v());
      return;
    }
    switch (x.key) {
      case "Escape":
        x.preventDefault(), m();
        break;
      case "ArrowDown":
        x.preventDefault(), u(1);
        break;
      case "ArrowUp":
        x.preventDefault(), u(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && y(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && y(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), p >= 0) {
          const T = e[p];
          T && !T.disabled && _(T);
        }
        break;
      case "Tab":
        f(!1), y(-1);
        break;
    }
  }, S = (x) => {
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), u(1);
        break;
      case "ArrowUp":
        x.preventDefault(), u(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && y(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && y(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), p >= 0) {
          const T = e[p];
          T && !T.disabled && _(T);
        }
        break;
      case "Escape":
        x.preventDefault(), m();
        break;
      case "Tab":
        f(!1), y(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [Tn.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: Tn.trigger,
            onClick: () => c ? m() : v(),
            onKeyDown: g,
            children: h ?? /* @__PURE__ */ M("span", { className: Tn.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Tn.avatar, "aria-hidden": "true", children: "●" }),
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
            "aria-activedescendant": p >= 0 ? `${i}-item-${p}` : void 0,
            className: Tn.menu,
            onKeyDown: S,
            tabIndex: -1,
            children: e.map((x, T) => {
              const $ = !!x.disabled, O = T === p;
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleMenuKeyDown on the menu container
                /* @__PURE__ */ M(
                  "div",
                  {
                    id: `${i}-item-${T}`,
                    role: "menuitem",
                    "aria-disabled": $ || void 0,
                    tabIndex: $ ? -1 : 0,
                    className: [
                      Tn.item,
                      O ? Tn.active : null,
                      $ ? Tn.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => {
                      $ || _(x);
                    },
                    onMouseEnter: () => {
                      $ || y(T);
                    },
                    children: [
                      x.icon ? /* @__PURE__ */ o("span", { className: Tn.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: x.icon, size: "sm" }) }) : null,
                      /* @__PURE__ */ o("span", { className: Tn.text, children: x.text })
                    ]
                  },
                  `${x.text}-${T}`
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
  const d = t ?? "bottom-right", l = `${ct()}-menu`, c = le(null), f = le(null), [p, y] = U(!1), h = H(
    (m) => {
      if (m.disabled) return;
      const u = { text: m.text, value: m.value };
      r?.(u), y(!1), f.current?.focus();
    },
    [r]
  );
  Ne(() => {
    if (!p) return;
    const m = (u) => {
      c.current && !c.current.contains(u.target) && y(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [p]), Ne(() => {
    if (!p) return;
    const m = (u) => {
      u.key === "Escape" && (y(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [p]);
  const b = d === "bottom-right" ? Kt.bottomRight : d === "bottom-left" ? Kt.bottomLeft : d === "top-right" ? Kt.topRight : Kt.topLeft, _ = (m) => {
    !p && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), y(!0)) : p && m.key === "Escape" && (m.preventDefault(), y(!1));
  }, v = (m) => {
    m.key === "Escape" && (m.preventDefault(), y(!1), f.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [Kt.root, b, i].filter(Boolean).join(" "),
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
            children: e.map((m, u) => {
              const g = !!m.disabled;
              return /* @__PURE__ */ M("div", { className: Kt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: Kt.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": g || void 0,
                    title: m.text,
                    disabled: g,
                    tabIndex: g ? -1 : 0,
                    className: [Kt.item, g ? Kt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => h(m),
                    children: /* @__PURE__ */ o("span", { className: Kt.itemIcon, "aria-hidden": "true", children: m.icon ? /* @__PURE__ */ o(Ee, { icon: m.icon, size: 18 }) : /* @__PURE__ */ o("span", { children: "•" }) })
                  }
                )
              ] }, `${m.text}-${u}`);
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
            "aria-expanded": p,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => y((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Kt.mainIcon, p ? Kt.mainOpen : null].filter(Boolean).join(" "),
                children: /* @__PURE__ */ o(Ee, { icon: n, size: 24 })
              }
            )
          }
        )
      ]
    }
  );
}
const y2 = "_root_1eyur_1", b2 = "_list_1eyur_5", x2 = "_item_1eyur_15", v2 = "_link_1eyur_22", w2 = "_linkButton_1eyur_23", k2 = "_current_1eyur_24", N2 = "_disabled_1eyur_68", S2 = "_icon_1eyur_74", $2 = "_text_1eyur_81", O2 = "_separator_1eyur_85", ht = {
  root: y2,
  list: b2,
  item: x2,
  link: v2,
  linkButton: w2,
  current: k2,
  disabled: N2,
  icon: S2,
  text: $2,
  separator: O2
};
function nO({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const a = t, i = (d) => {
    d.disabled || a?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [ht.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: ht.list, children: e.map((d, s) => {
        const l = s === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: ht.item, children: [
          l ? c ? /* @__PURE__ */ M(
            "span",
            {
              className: [ht.current, ht.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: d.icon, size: "sm" }) }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: ht.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: d.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M("span", { className: ht.current, "aria-current": "page", children: [
            d.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: d.icon, size: "sm" }) }) : null,
            d.text
          ] }) : c ? /* @__PURE__ */ M(
            "span",
            {
              className: [ht.link, ht.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: d.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: ht.link,
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: d.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: ht.linkButton,
              tabIndex: 0,
              onClick: () => i(d),
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: d.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: d.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ o("span", { className: ht.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${s}`);
      }) })
    }
  );
}
const E2 = "_link_tmy3k_1", T2 = {
  link: E2
}, rO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, d) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ M(ot, { children: [
    n != null && /* @__PURE__ */ o(Ee, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [T2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...p } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        className: l,
        href: f,
        ...p,
        children: s
      }
    );
  }
  return /* @__PURE__ */ o(
    "button",
    {
      ref: d,
      type: "button",
      className: l,
      ...i,
      children: s
    }
  );
}), C2 = "_root_dnkuu_1", M2 = "_list_dnkuu_5", A2 = "_item_dnkuu_15", D2 = "_connector_dnkuu_21", I2 = "_connectorCompleted_dnkuu_30", z2 = "_step_dnkuu_34", L2 = "_active_dnkuu_69", P2 = "_completed_dnkuu_75", R2 = "_circle_dnkuu_79", j2 = "_check_dnkuu_109", B2 = "_icon_dnkuu_114", F2 = "_number_dnkuu_119", H2 = "_text_dnkuu_124", Gt = {
  root: C2,
  list: M2,
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
  onChange: d,
  Change: s,
  onSelectedIndexChange: l,
  ariaLabel: c = "Steps",
  className: f
}) {
  const p = a ?? i ?? !1, y = t ?? n, h = y !== void 0, [b, _] = U(() => Math.min(Math.max(0, y ?? r), Math.max(0, e.length - 1))), m = Math.min(
    Math.max(0, h ? y : b),
    Math.max(0, e.length - 1)
  ), u = le(null), g = H(
    (T) => {
      const $ = Math.min(
        Math.max(0, T),
        Math.max(0, e.length - 1)
      );
      h || _($), (d ?? s ?? l)?.($);
    },
    [h, d, s, l, e.length]
  ), S = H(
    (T, $) => !!($.disabled || p && T > m + 1),
    [p, m]
  ), x = (T) => {
    const $ = Array.from(
      T.currentTarget.querySelectorAll("button[data-step]")
    ).filter((L) => L.getAttribute("aria-disabled") !== "true" && !L.disabled), O = document.activeElement, C = O ? $.indexOf(O) : -1;
    if (T.key === "ArrowRight" || T.key === "ArrowDown") {
      if (T.preventDefault(), $.length === 0) return;
      const L = C === -1 ? 0 : (C + 1) % $.length, A = $[L];
      A && A.focus();
    } else if (T.key === "ArrowLeft" || T.key === "ArrowUp") {
      if (T.preventDefault(), $.length === 0) return;
      const L = C === -1 ? $.length - 1 : (C - 1 + $.length) % $.length, A = $[L];
      A && A.focus();
    } else T.key === "Home" ? (T.preventDefault(), $[0]?.focus()) : T.key === "End" && (T.preventDefault(), $[$.length - 1]?.focus());
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Home/End and arrow keys are delegated to the step buttons inside this nav
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": c,
        className: [Gt.root, f].filter(Boolean).join(" "),
        onKeyDown: x,
        children: /* @__PURE__ */ o("ol", { ref: u, className: Gt.list, children: e.map((T, $) => {
          const O = $ === m, C = $ < m, L = S($, T);
          return /* @__PURE__ */ M("li", { className: Gt.item, children: [
            $ > 0 ? /* @__PURE__ */ o(
              "span",
              {
                className: [
                  Gt.connector,
                  C ? Gt.connectorCompleted : null
                ].filter(Boolean).join(" "),
                "aria-hidden": "true"
              }
            ) : null,
            /* @__PURE__ */ M(
              "button",
              {
                type: "button",
                "data-step": $,
                "aria-current": O ? "step" : void 0,
                "aria-disabled": L ? "true" : void 0,
                disabled: L,
                tabIndex: L ? -1 : 0,
                className: [
                  Gt.step,
                  O ? Gt.active : null,
                  C ? Gt.completed : null,
                  L ? Gt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => {
                  L || g($);
                },
                children: [
                  /* @__PURE__ */ o("span", { className: Gt.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ o("span", { className: Gt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: "check", size: "sm" }) }) : T.icon ? /* @__PURE__ */ o("span", { className: Gt.icon, children: /* @__PURE__ */ o(Ee, { icon: T.icon, size: 14 }) }) : /* @__PURE__ */ o("span", { className: Gt.number, children: $ + 1 }) }),
                  /* @__PURE__ */ o("span", { className: Gt.text, children: T.text })
                ]
              }
            )
          ] }, `${T.text}-${$}`);
        }) })
      }
    )
  );
}
const U2 = "_root_12hod_1", q2 = "_horizontal_12hod_13", W2 = "_vertical_12hod_17", K2 = "_pane_12hod_21", G2 = "_handle_12hod_31", V2 = "_handleHorizontal_12hod_51", Y2 = "_handleVertical_12hod_57", X2 = "_handleGrip_12hod_63", Z2 = "_handleCollapseHint_12hod_75", J2 = "_collapseBtn_12hod_79", Q2 = "_collapseBtnCollapsed_12hod_109", pn = {
  root: U2,
  horizontal: q2,
  vertical: W2,
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
  Collapse: d,
  ariaLabel: s = "Splitter",
  className: l
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", p = le(null), y = H(() => {
    const N = n.length;
    if (N === 0) return [];
    const I = n.map((P) => P.size ? Ur(P.size, 100 / N) : 100 / N), D = I.reduce((P, B) => P + B, 0);
    return Math.abs(D - 100) > 0.01 && D > 0 ? I.map((P) => P / D * 100) : I;
  }, [n]), [h, b] = U(() => y()), [_, v] = U(
    () => n.map((N) => !!N.collapsed)
  ), m = le(h), [u, g] = U(n);
  n !== u && (g(n), v(n.map((N) => !!N.collapsed)));
  const S = H(
    () => n.map((N) => Ur(N.min, 0)),
    [n]
  ), x = H(
    () => n.map((N) => Ur(N.max, 100)),
    [n]
  ), T = H(
    (N, I) => {
      const D = { paneIndex: N, newSize: I, cancel: !1 };
      return (r ?? a)?.(D), !D.cancel;
    },
    [r, a]
  ), $ = H(
    (N, I) => {
      const D = { paneIndex: N, collapse: I, cancel: !1 };
      return (i ?? d)?.(D), !D.cancel;
    },
    [i, d]
  ), O = H(
    (N) => {
      const I = !_[N];
      $(N, I) && (I ? (m.current = [...h], v((D) => {
        const P = [...D];
        return P[N] !== void 0 && (P[N] = !0), P;
      }), b((D) => {
        const P = [...D], B = P[N] ?? 0, W = N < P.length - 1 ? N + 1 : N - 1;
        if (W >= 0 && W < P.length) {
          const re = P[W] ?? 0;
          P[W] = re + B, P[N] = 0;
        } else
          P[N] = 0;
        return P;
      })) : (v((D) => {
        const P = [...D];
        return P[N] !== void 0 && (P[N] = !1), P;
      }), b(() => {
        const D = [...m.current];
        return D.length !== n.length ? n.map(() => 100 / n.length) : D;
      })));
    },
    [_, h, n, $]
  ), C = le(
    null
  ), L = H(
    (N, I, D) => {
      const P = p.current;
      if (!P) return null;
      const B = P.getBoundingClientRect();
      let W;
      if (f) {
        if (B.width === 0) return null;
        W = (I - B.left) / B.width * 100;
      } else {
        if (B.height === 0) return null;
        W = (D - B.top) / B.height * 100;
      }
      let re = 0;
      for (let ie = 0; ie < N; ie++) {
        const Q = h[ie];
        Q !== void 0 && (re += Q);
      }
      return W - re;
    },
    [f, h]
  ), A = (N, I) => {
    I.preventDefault();
    const D = I.currentTarget;
    D.focus(), typeof D.setPointerCapture == "function" && D.setPointerCapture(I.pointerId), C.current = { handleIndex: N, pointerId: I.pointerId };
  }, z = (N) => {
    if (!C.current || C.current.pointerId !== N.pointerId)
      return;
    N.preventDefault();
    const I = C.current.handleIndex, D = L(I, N.clientX, N.clientY);
    if (D == null) return;
    const P = S(), B = x(), W = P[I] ?? 0, re = B[I] ?? 100, oe = I + 1, ie = P[oe] ?? 0, Q = B[oe] ?? 100, Ie = h[I] ?? 0, J = h[oe] ?? 0, V = Ie + J;
    if (V <= 0) return;
    let Y = Ln(D, W, re), he = V - Y;
    if (he < ie) {
      if (he = ie, Y = V - he, Y < W || Y > re) return;
    } else if (he > Q && (he = Q, Y = V - he, Y < W || Y > re))
      return;
    Y = Ln(Y, W, re), he = V - Y, T(I, Y) && b((ee) => {
      const me = [...ee];
      return me[I] = Y, me[oe] = he, me;
    });
  }, k = (N) => {
    !C.current || C.current.pointerId !== N.pointerId || (C.current = null);
  }, w = (N, I) => {
    const D = S(), P = x(), B = N, W = N + 1, re = h[B] ?? 0, oe = h[W] ?? 0, ie = re + oe;
    let Q = 0;
    const Ie = !!n[B]?.collapsible, J = !!n[W]?.collapsible;
    if (f ? I.key === "ArrowLeft" ? Q = -5 : I.key === "ArrowRight" && (Q = 5) : I.key === "ArrowUp" ? Q = -5 : I.key === "ArrowDown" && (Q = 5), I.key === "Home") {
      I.preventDefault();
      let V = D[B] ?? 0, Y = ie - V;
      if (Y = Ln(
        Y,
        D[W] ?? 0,
        P[W] ?? 100
      ), V = ie - Y, V = Ln(V, D[B] ?? 0, P[B] ?? 100), !T(B, V)) return;
      b((he) => {
        const ee = [...he];
        return ee[B] = V, ee[W] = Y, ee;
      });
      return;
    }
    if (I.key === "End") {
      I.preventDefault();
      let V = P[B] ?? 100;
      V = Math.min(V, ie - (D[W] ?? 0));
      let Y = ie - V;
      if (Y = Ln(
        Y,
        D[W] ?? 0,
        P[W] ?? 100
      ), V = ie - Y, V = Ln(V, D[B] ?? 0, P[B] ?? 100), !T(B, V)) return;
      b((he) => {
        const ee = [...he];
        return ee[B] = V, ee[W] = Y, ee;
      });
      return;
    }
    if ((I.key === "Enter" || I.key === " ") && (Ie || J)) {
      I.preventDefault(), O(Ie ? B : W);
      return;
    }
    if (Q !== 0) {
      I.preventDefault();
      let V = re + Q, Y = ie - V;
      const he = D[B] ?? 0, ee = P[B] ?? 100, me = D[W] ?? 0, K = P[W] ?? 100;
      if (V = Ln(V, he, ee), Y = ie - V, (Y < me || Y > K) && (Y = Ln(Y, me, K), V = ie - Y, V = Ln(V, he, ee), Y = ie - V), !T(B, V)) return;
      b(($e) => {
        const se = [...$e];
        return se[B] = V, se[W] = Y, se;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      className: [
        pn.root,
        f ? pn.horizontal : pn.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((N, I) => {
        const D = !!_[I], P = D ? 0 : h[I] ?? 100 / n.length, B = D ? { display: "none" } : f ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, W = Ur(N.min, 0), re = Ur(N.max, 100), oe = I < n.length - 1, ie = !!n[I + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": N.label ?? `Pane ${I + 1}`,
              className: pn.pane,
              style: B,
              "data-collapsed": D ? "true" : void 0,
              children: [
                D ? null : N.children,
                N.collapsible && !D ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Collapse pane ${I + 1}`,
                    "aria-expanded": !D,
                    onClick: () => O(I),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                N.collapsible && D ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: pn.collapseBtn,
                    "aria-label": `Expand pane ${I + 1}`,
                    "aria-expanded": !D,
                    onClick: () => O(I),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          D && N.collapsible ? (
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
                onClick: () => O(I),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          oe ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- focusable separator with arrow-key resize (handleSeparatorKeyDown); pointer drag is the mouse equivalent
            /* @__PURE__ */ M(
              "div",
              {
                role: "separator",
                "aria-orientation": c,
                "aria-valuemin": W,
                "aria-valuemax": re,
                "aria-valuenow": Math.round(P),
                "aria-label": `Resize handle ${I + 1}`,
                tabIndex: D || _[I + 1] ? -1 : 0,
                className: [
                  pn.handle,
                  f ? pn.handleHorizontal : pn.handleVertical
                ].filter(Boolean).join(" "),
                onPointerDown: (Q) => A(I, Q),
                onPointerMove: z,
                onPointerUp: k,
                onKeyDown: (Q) => w(I, Q),
                children: [
                  /* @__PURE__ */ o("span", { className: pn.handleGrip, "aria-hidden": "true" }),
                  (N.collapsible || ie) && /* @__PURE__ */ o(
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
  Click: d,
  ariaLabel: s = "Table of contents",
  className: l
}) {
  const c = t ?? n, f = r ?? a ?? "vertical", [p, y] = U(
    () => e[0]?.selector ?? null
  ), h = le(p);
  Ne(() => {
    h.current = p;
  });
  const b = H(
    (_, v) => {
      if (y(_.selector), (i ?? d)?.({ text: _.text, selector: _.selector }), v) {
        try {
          v.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          v.scrollIntoView();
        }
        const u = v;
        u.getAttribute("tabindex") == null && u.tabIndex === -1 || u.tabIndex < 0 ? (u.getAttribute("tabindex"), u.setAttribute("tabindex", "-1"), u.focus({ preventScroll: !0 })) : u.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return Ne(() => {
    if (e.length === 0) return;
    const v = (() => {
      if (c) {
        const x = document.querySelector(c);
        if (x) return x;
      }
      return window;
    })();
    let m = null;
    const u = /* @__PURE__ */ new Map(), g = () => {
      let x = null, T = null;
      for (const O of e) {
        const C = document.querySelector(O.selector);
        if (!C) continue;
        u.set(O.selector, C);
        const L = C.getBoundingClientRect();
        let A = L.top;
        if (v !== window) {
          const z = v.getBoundingClientRect();
          A = L.top - z.top;
        }
        A <= 80 ? (!T || A > T.el.getBoundingClientRect().top - (v !== window ? v.getBoundingClientRect().top : 0)) && (T = { sel: O.selector, el: C }) : (!x || A < x.top) && (x = { sel: O.selector, top: A });
      }
      const $ = T?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      $ && $ !== h.current && y($);
    }, S = () => {
      g();
    };
    if (typeof IntersectionObserver < "u") {
      const x = v === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: v,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      m = new IntersectionObserver((T) => {
        const $ = T.filter((O) => O.isIntersecting).sort((O, C) => O.boundingClientRect.top - C.boundingClientRect.top);
        if ($[0]) {
          const O = $[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === O) {
              y(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && O.id === C.selector.slice(1)) {
              y(C.selector);
              break;
            }
          }
        } else
          g();
      }, x);
      for (const T of e) {
        const $ = document.querySelector(T.selector);
        $ && (m.observe($), u.set(T.selector, $));
      }
    }
    return v === window ? (window.addEventListener("scroll", S, { passive: !0 }), g(), () => {
      window.removeEventListener("scroll", S), m?.disconnect();
    }) : (v.addEventListener("scroll", S, {
      passive: !0
    }), g(), () => {
      v.removeEventListener("scroll", S), m?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [br.root, br[f], l].filter(Boolean).join(" "),
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
              const u = document.querySelector(_.selector);
              b(_, u);
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
  interval: d,
  Interval: s,
  pauseOnHover: l,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: p,
  showIndicators: y,
  ShowIndicators: h,
  onChange: b,
  Change: _,
  ariaLabel: v = "Carousel",
  className: m
}) {
  const u = t ?? n, g = u !== void 0, [S, x] = U(() => Math.min(Math.max(0, u ?? r), Math.max(0, e.length - 1))), T = g ? u : S, $ = e.length === 0 ? 0 : Math.min(Math.max(0, T), e.length - 1), O = a ?? i ?? !1, C = d ?? s ?? 3e3, L = l ?? c ?? !0, A = f ?? p ?? !0, z = y ?? h ?? !0, [k, w] = U(!1), [N, I] = U(!1), D = k || N, P = le(null), B = ct(), W = H(
    (ee) => {
      const me = e.length === 0 ? 0 : (ee % e.length + e.length) % e.length;
      g || x(me), (b ?? _)?.(me);
    },
    [g, b, _, e.length]
  ), re = H(() => {
    W($ - 1);
  }, [W, $]), oe = H(() => {
    W($ + 1);
  }, [W, $]), ie = H(
    (ee) => {
      W(ee);
    },
    [W]
  ), Q = Oo("(prefers-reduced-motion: reduce)");
  Ne(() => {
    if (!O || D || Q || e.length <= 1) return;
    const ee = setInterval(() => {
      W($ + 1);
    }, C);
    return () => clearInterval(ee);
  }, [
    O,
    D,
    Q,
    C,
    $,
    W,
    e.length
  ]);
  const Ie = (ee) => {
    e.length !== 0 && (ee.key === "ArrowLeft" ? (ee.preventDefault(), re()) : ee.key === "ArrowRight" ? (ee.preventDefault(), oe()) : ee.key === "Home" ? (ee.preventDefault(), ie(0)) : ee.key === "End" && (ee.preventDefault(), ie(e.length - 1)));
  }, J = () => {
    L && O && I(!0);
  }, V = () => {
    L && O && I(!1);
  }, Y = () => {
    L && O && I(!0);
  }, he = () => {
    L && O && I(!1);
  };
  return e.length === 0 ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover pause/play plus arrow-key handlers; this region is the carousel's keyboard control surface
    /* @__PURE__ */ M(
      "div",
      {
        ref: P,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": v,
        tabIndex: 0,
        className: [_n.root, m].filter(Boolean).join(" "),
        onKeyDown: Ie,
        onMouseEnter: J,
        onMouseLeave: V,
        onFocusCapture: Y,
        onBlurCapture: he,
        children: [
          /* @__PURE__ */ o("div", { id: B, className: _n.viewport, children: e.map((ee, me) => {
            const K = me === $;
            return /* @__PURE__ */ o(
              "div",
              {
                role: "group",
                "aria-roledescription": "slide",
                "aria-label": `Slide ${me + 1} of ${e.length}`,
                "aria-hidden": K ? void 0 : !0,
                hidden: !K,
                className: [_n.slide, K ? _n.active : null].filter(Boolean).join(" "),
                children: ee
              },
              me
            );
          }) }),
          A && e.length > 1 ? /* @__PURE__ */ M(ot, { children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
                "aria-label": "Previous slide",
                "aria-controls": B,
                onClick: re,
                children: "‹"
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.next].filter(Boolean).join(" "),
                "aria-label": "Next slide",
                "aria-controls": B,
                onClick: oe,
                children: "›"
              }
            )
          ] }) : null,
          O ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: _n.pauseBtn,
              "aria-label": k ? "Resume" : "Pause",
              "aria-pressed": k,
              onClick: () => w((ee) => !ee),
              children: k ? "▶" : "⏸"
            }
          ) : null,
          z && e.length > 1 ? /* @__PURE__ */ o(
            "div",
            {
              className: _n.indicators,
              role: "group",
              "aria-label": "Slide indicators",
              children: e.map((ee, me) => {
                const K = me === $;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: [
                      _n.indicator,
                      K ? _n.indicatorActive : null
                    ].filter(Boolean).join(" "),
                    "aria-label": `Go to slide ${me + 1}`,
                    "aria-current": K ? "true" : void 0,
                    "aria-controls": B,
                    onClick: () => ie(me)
                  },
                  me
                );
              })
            }
          ) : null
        ]
      }
    )
  );
}
const yk = "_root_1aa5u_1", bk = "_group_1aa5u_20", xk = "_itemWrapper_1aa5u_30", vk = "_treeitem_1aa5u_34", wk = "_disabled_1aa5u_50", kk = "_selected_1aa5u_60", Nk = "_caret_1aa5u_66", Sk = "_caretIcon_1aa5u_113", $k = "_caretOpen_1aa5u_120", Ok = "_caretPlaceholder_1aa5u_124", Ek = "_label_1aa5u_130", Tk = "_loading_1aa5u_137", Ck = "_loadingRow_1aa5u_143", Mk = "_empty_1aa5u_149", Ak = "_checkbox_1aa5u_155", Lt = {
  root: yk,
  group: bk,
  itemWrapper: xk,
  treeitem: vk,
  disabled: wk,
  selected: kk,
  caret: Nk,
  caretIcon: Sk,
  caretOpen: $k,
  caretPlaceholder: Ok,
  label: Ek,
  loading: Tk,
  loadingRow: Ck,
  empty: Mk,
  checkbox: Ak
};
function Dk({
  indeterminate: e,
  ...t
}) {
  const n = le(null);
  return Ne(() => {
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
  keyProperty: d,
  KeyProperty: s,
  selectionMode: l,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: p,
  selectedItems: y,
  SelectedItems: h,
  defaultSelectedItem: b,
  defaultSelectedItems: _,
  onChange: v,
  Change: m,
  onExpand: u,
  Expand: g,
  onCollapse: S,
  Collapse: x,
  loadChildData: T,
  LoadChildData: $,
  template: O,
  Template: C,
  itemTemplate: L,
  ItemTemplate: A,
  ariaLabel: z,
  AriaLabel: k,
  allowCheckBoxes: w = !1,
  checkedKeys: N,
  defaultCheckedKeys: I,
  onCheckedChange: D,
  allowCheckChildren: P = !0,
  className: B
}) {
  const W = Se(() => e ?? t ?? [], [e, t]), re = n ?? r, oe = a ?? i ?? "text", ie = d ?? s ?? "id", Q = l ?? c ?? "single", Ie = z ?? k ?? "Tree", J = T ?? $, V = O ?? C ?? L ?? A, Y = H(
    (Z) => {
      const ce = Z[ie];
      return ce != null ? String(ce) : String(Z.id ?? "");
    },
    [ie]
  ), he = H(
    (Z) => {
      const ce = Z[oe];
      if (ce != null) return String(ce);
      const _e = Z.text;
      return _e != null ? String(_e) : "";
    },
    [oe]
  ), ee = H(
    (Z) => {
      if (re) {
        const _e = re(Z);
        if (_e !== void 0) return _e;
      }
      const ce = Z.children;
      if (Array.isArray(ce)) return ce;
    },
    [re]
  ), me = H(
    (Z) => {
      const ce = /* @__PURE__ */ new Set(), _e = (ke) => {
        for (const ve of ke) {
          const Me = Y(ve);
          ve.expanded && ce.add(Me);
          const Ye = ee(ve);
          Ye && Ye.length > 0 && _e(Ye);
        }
      };
      return _e(Z), ce;
    },
    [Y, ee]
  ), [K, $e] = U(
    () => me(W)
  ), [se, Ae] = U(
    () => /* @__PURE__ */ new Map()
  ), [ye, We] = U(() => /* @__PURE__ */ new Set()), Je = f ?? p, Ge = y ?? h, gt = Q === "multiple" ? Ge !== void 0 : Je !== void 0, te = H(() => {
    if (Q === "multiple") {
      if (_ && _.length > 0)
        return new Set(_.map((_e) => Y(_e)));
      const Z = /* @__PURE__ */ new Set(), ce = (_e) => {
        for (const ke of _e) {
          ke.selected && Z.add(Y(ke));
          const ve = ee(ke);
          ve && ce(ve);
        }
      };
      return ce(W), Z;
    } else {
      if (b) return /* @__PURE__ */ new Set([Y(b)]);
      let Z = null;
      const ce = (_e) => {
        for (const ke of _e) {
          if (ke.selected)
            return Z = Y(ke), !0;
          const ve = ee(ke);
          if (ve && ce(ve)) return !0;
        }
        return !1;
      };
      return ce(W), Z ? /* @__PURE__ */ new Set([Z]) : /* @__PURE__ */ new Set();
    }
  }, [
    Q,
    b,
    _,
    Y,
    ee,
    W
  ]), [Te, lt] = U(
    () => te()
  ), ze = Se(() => {
    if (Q === "multiple") {
      if (Ge !== void 0) {
        const Z = Ge;
        return Z ? new Set(Z.map((ce) => Y(ce))) : /* @__PURE__ */ new Set();
      }
      return Te;
    } else {
      if (Je !== void 0) {
        const Z = Je;
        return Z ? /* @__PURE__ */ new Set([Y(Z)]) : /* @__PURE__ */ new Set();
      }
      return Te;
    }
  }, [
    Q,
    Ge,
    Je,
    Te,
    Y
  ]), st = H(
    (Z) => {
      let ce;
      const _e = (ke) => {
        for (const ve of ke) {
          if (Y(ve) === Z)
            return ce = ve, !0;
          const Ye = se.get(Y(ve)) ?? ee(ve);
          if (Ye && _e(Ye)) return !0;
        }
        return !1;
      };
      if (_e(W), !ce) {
        for (const ke of se.values())
          if (_e(ke)) break;
      }
      return ce;
    },
    [W, se, Y, ee]
  ), Xe = H(() => {
    const Z = /* @__PURE__ */ new Map(), ce = (_e) => {
      for (const ke of _e) {
        const ve = Y(ke);
        Z.set(ve, ke);
        const Ye = se.get(ve) ?? ee(ke);
        Ye && ce(Ye);
      }
    };
    return ce(W), Z;
  }, [W, se, Y, ee]), Tt = H(
    (Z) => {
      const ce = Y(Z);
      if (!Z.disabled)
        if (Q === "multiple") {
          const ke = new Set(ze);
          ke.has(ce) ? ke.delete(ce) : ke.add(ce), gt || lt(ke);
          const ve = v ?? m;
          if (ve) {
            const Me = Xe(), Ye = [];
            for (const Fe of ke) {
              const dt = Me.get(Fe) ?? st(Fe);
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
      Y,
      Q,
      ze,
      gt,
      v,
      m,
      Xe,
      st
    ]
  ), yt = H(
    async (Z) => {
      const ce = Y(Z);
      if (!!Z.disabled) return;
      const ke = K.has(ce), ve = u ?? g, Me = S ?? x, Ye = ee(Z), dt = se.get(ce) ?? Ye, je = !(dt !== void 0 && dt.length > 0) && J != null;
      if (ke) {
        $e((tt) => {
          const ut = new Set(tt);
          return ut.delete(ce), ut;
        }), Me?.({ item: Z });
        return;
      }
      if (je) {
        if (ye.has(ce)) return;
        We((tt) => {
          const ut = new Set(tt);
          return ut.add(ce), ut;
        });
        try {
          const ut = await J(Z);
          Ae((Jt) => {
            const At = new Map(Jt);
            return At.set(ce, ut), At;
          }), $e((Jt) => {
            const At = new Set(Jt);
            return At.add(ce), At;
          }), ve?.({ item: Z });
        } catch {
        } finally {
          We((tt) => {
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
      Y,
      K,
      ee,
      se,
      J,
      ye,
      u,
      g,
      S,
      x
    ]
  ), it = Se(() => {
    const Z = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Set(), ke = (ve, Me) => {
      for (const Ye of ve) {
        const Fe = Y(Ye);
        Z.has(Fe) || Z.set(Fe, []), ce.set(Fe, Me), Ye.disabled && _e.add(Fe);
        const xt = se.get(Fe) ?? ee(Ye);
        xt && xt.length > 0 && (Z.set(
          Fe,
          xt.map((je) => Y(je))
        ), ke(xt, Fe));
      }
    };
    return ke(W, null), { childrenOf: Z, parentOf: ce, disabledKeys: _e };
  }, [W, se, Y, ee]), ft = H(
    (Z) => {
      const ce = [], _e = [...it.childrenOf.get(Z) ?? []];
      for (; _e.length > 0; ) {
        const ke = _e.pop();
        ce.push(ke), _e.push(...it.childrenOf.get(ke) ?? []);
      }
      return ce;
    },
    [it]
  ), [Ve, Ct] = U(
    () => new Set(I ?? [])
  ), ae = Se(
    () => N !== void 0 ? new Set(N) : Ve,
    [N, Ve]
  ), Le = H(
    (Z) => {
      const ce = it.disabledKeys;
      return ft(Z).filter((_e) => !ce.has(_e));
    },
    [ft, it]
  ), wt = H(
    (Z) => {
      if (ae.has(Z)) return !0;
      if (!w || !P) return !1;
      const ce = Le(Z);
      return ce.length > 0 && ce.every((_e) => ae.has(_e));
    },
    [ae, w, P, Le]
  ), Mt = H(
    (Z) => {
      if (!w || !P || ae.has(Z))
        return !1;
      const ce = Le(Z);
      if (ce.length === 0) return !1;
      const _e = ce.filter((ke) => ae.has(ke)).length;
      return _e > 0 && _e < ce.length;
    },
    [ae, w, P, Le]
  ), bt = H(
    (Z) => {
      if (!w || Z.disabled) return;
      const ce = Y(Z), _e = new Set(ae);
      if (_e.has(ce) || wt(ce)) {
        if (_e.delete(ce), P)
          for (const ke of Le(ce)) _e.delete(ke);
      } else if (_e.add(ce), P)
        for (const ke of Le(ce)) _e.add(ke);
      N === void 0 && Ct(_e), D?.([..._e]);
    },
    [
      w,
      P,
      N,
      ae,
      Le,
      Y,
      wt,
      D
    ]
  ), R = Se(() => {
    const Z = [], ce = (_e, ke, ve) => {
      _e.forEach((Me, Ye) => {
        const Fe = Y(Me), dt = he(Me), xt = se.get(Fe) ?? ee(Me);
        let je;
        se.has(Fe) ? je = se.get(Fe).length > 0 : xt !== void 0 ? je = xt.length > 0 : J ? je = !0 : je = !1;
        const tt = K.has(Fe), ut = !!Me.disabled, Jt = _e.length, At = Ye + 1;
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
          const dn = se.get(Fe) ?? xt;
          dn && dn.length > 0 && ce(dn, ke + 1, Fe);
        }
      });
    };
    return ce(W, 1, null), Z;
  }, [
    W,
    Y,
    he,
    ee,
    se,
    K,
    J
  ]), [X, ge] = U(
    () => R[0]?.key ?? null
  ), we = le(""), fe = le(null), F = le(null), [pe, Re] = U({
    key: X,
    nodes: R
  });
  if (pe.key !== X || pe.nodes !== R) {
    if (Re({ key: X, nodes: R }), !X && R.length > 0) {
      const Z = R[0];
      Z && ge(Z.key);
    } else if (X && !R.some((Z) => Z.key === X)) {
      const Z = R[0];
      ge(Z ? Z.key : null);
    }
  }
  Ne(() => {
    if (X) {
      const Z = F.current?.querySelector(
        `[data-key="${CSS.escape(X)}"]`
      );
      let ce = null;
      Z || (ce = F.current?.querySelector(
        `[data-key="${X}"]`
      ) ?? null);
      const _e = Z ?? ce;
      _e && document.activeElement !== _e && F.current?.contains(document.activeElement) && _e.focus();
    }
  }, [X]);
  const De = H((Z) => {
    ge(Z), requestAnimationFrame(() => {
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
      const ce = X ? R.findIndex((ve) => ve.key === X) : -1, _e = ce >= 0 ? R[ce] : void 0;
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
        if (Z.preventDefault(), !_e) return;
        if (_e.hasChildren && !_e.expanded)
          yt(_e.item);
        else if (_e.hasChildren && _e.expanded) {
          const ve = ce + 1, Me = R[ve];
          Me && Me.parentKey === _e.key && De(Me.key);
        }
        return;
      }
      if (Z.key === "ArrowLeft") {
        if (Z.preventDefault(), !_e) return;
        if (_e.hasChildren && _e.expanded)
          yt(_e.item);
        else {
          const ve = It(_e.key);
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
        const Me = ce >= 0 ? ce + 1 : 0, dt = [...R, ...R].slice(Me, Me + R.length).find((xt) => xt.text.toLowerCase().startsWith(ve));
        dt && De(dt.key);
        return;
      }
    },
    [
      R,
      X,
      De,
      yt,
      Tt,
      It,
      w,
      bt,
      st
    ]
  ), mn = H(() => {
    if (!X && R.length > 0) {
      const Z = R[0];
      Z && ge(Z.key);
    }
  }, [X, R]), Nn = (Z, ce, _e) => /* @__PURE__ */ o("ul", { role: "group", className: Lt.group, children: Z.map((ke, ve) => {
    const Me = Y(ke), Ye = he(ke), Fe = se.get(Me) ?? ee(ke);
    let dt;
    se.has(Me) ? dt = se.get(Me).length > 0 : Fe !== void 0 ? dt = Fe.length > 0 : J ? dt = !0 : dt = !1;
    const xt = K.has(Me), je = ze.has(Me), tt = !!ke.disabled, ut = ye.has(Me), Jt = X === Me, At = Z.length, dn = ve + 1, Zn = V ? V(ke) : Ye, Jn = w ? {
      checked: wt(Me),
      indeterminate: Mt(Me)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: Lt.itemWrapper, children: [
      /* @__PURE__ */ M(
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
            Lt.treeitem,
            je ? Lt.selected : null,
            tt ? Lt.disabled : null,
            Jt ? Lt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            De(Me), tt || Tt(ke);
          },
          onFocus: () => ge(Me),
          children: [
            w ? /* @__PURE__ */ o(
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
                  Fn.stopPropagation(), De(Me), yt(ke);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Lt.caretIcon,
                      xt ? Lt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(Ee, { icon: "chevron_right", size: 10 })
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
      dt && xt ? ut ? /* @__PURE__ */ o("div", { className: Lt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? Nn(Fe, ce + 1) : se.has(Me) && se.get(Me).length > 0 ? Nn(
        se.get(Me),
        ce + 1
      ) : (Fe && Fe.length === 0, null) : null
    ] }, Me);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: F,
      role: "tree",
      "aria-label": Ie,
      "aria-multiselectable": Q === "multiple" || void 0,
      tabIndex: 0,
      className: [Lt.root, B].filter(Boolean).join(" "),
      onKeyDown: et,
      onFocus: mn,
      children: W.length === 0 ? /* @__PURE__ */ o("div", { className: Lt.empty, children: "No items" }) : Nn(W, 1)
    }
  );
}
const Ik = "_root_10fdq_1", zk = "_panel_10fdq_8", Lk = "_header_10fdq_19", Pk = "_listbox_10fdq_28", Rk = "_option_10fdq_42", jk = "_disabled_10fdq_57", Bk = "_active_10fdq_66", Fk = "_selected_10fdq_70", Hk = "_empty_10fdq_86", Uk = "_controls_10fdq_93", qk = "_reorder_10fdq_102", Wk = "_btn_10fdq_110", rt = {
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
  reorder: qk,
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
function cO({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: a,
  Value: i,
  targetValue: d,
  TargetValue: s,
  data: l,
  Data: c,
  onSourceChange: f,
  SourceChange: p,
  onTargetChange: y,
  TargetChange: h,
  keyProperty: b,
  KeyProperty: _,
  onMove: v,
  Move: m,
  ariaLabel: u,
  AriaLabel: g,
  className: S
}) {
  const x = b ?? _ ?? "id", T = u ?? g ?? "PickList", $ = e ?? t ?? a ?? i ?? l ?? c ?? [], O = n ?? r ?? d ?? s ?? [], [C, L] = U(() => [
    ...$
  ]), [A, z] = U(() => [
    ...O
  ]), k = e ?? t ?? a ?? i ?? l ?? c, [w, N] = U(k);
  k !== w && (N(k), k !== void 0 && L([...k]));
  const I = n ?? r ?? d ?? s, [D, P] = U(I);
  I !== D && (P(I), I !== void 0 && z([...I]));
  const [B, W] = U(
    () => /* @__PURE__ */ new Set()
  ), [re, oe] = U(
    () => /* @__PURE__ */ new Set()
  ), [ie, Q] = U(() => {
    const R = $.findIndex((X) => !X.disabled);
    return R >= 0 ? R : 0;
  }), [Ie, J] = U(() => {
    const R = O.findIndex((X) => !X.disabled);
    return R >= 0 ? R : 0;
  }), V = Se(
    () => C.map((R, X) => R.disabled ? -1 : X).filter((R) => R >= 0),
    [C]
  ), Y = Se(
    () => A.map((R, X) => R.disabled ? -1 : X).filter((R) => R >= 0),
    [A]
  ), he = {
    active: ie,
    len: C.length,
    idxs: V
  }, [ee, me] = U(he);
  if (ee.active !== he.active || ee.len !== he.len || ee.idxs !== he.idxs) {
    if (me(he), ie >= C.length) {
      const R = V[V.length - 1];
      Q(R ?? 0);
    } else if (C.length > 0 && V.length > 0 && !V.includes(ie)) {
      const R = V[0];
      R !== void 0 && Q(R);
    }
  }
  const K = {
    active: Ie,
    len: A.length,
    idxs: Y
  }, [$e, se] = U(K);
  if ($e.active !== K.active || $e.len !== K.len || $e.idxs !== K.idxs) {
    if (se(K), Ie >= A.length) {
      const R = Y[Y.length - 1];
      J(R ?? 0);
    } else if (A.length > 0 && Y.length > 0 && !Y.includes(Ie)) {
      const R = Y[0];
      R !== void 0 && J(R);
    }
  }
  const [Ae, ye] = U({
    items: C,
    key: x
  });
  (Ae.items !== C || Ae.key !== x) && (ye({ items: C, key: x }), W((R) => {
    const X = /* @__PURE__ */ new Set();
    for (const ge of R)
      C.some(
        (fe) => Pt(fe, x) === ge && !fe.disabled
      ) && X.add(ge);
    return X.size === R.size ? R : X;
  }));
  const [We, Je] = U({
    items: A,
    key: x
  });
  (We.items !== A || We.key !== x) && (Je({ items: A, key: x }), oe((R) => {
    const X = /* @__PURE__ */ new Set();
    for (const ge of R)
      A.some(
        (fe) => Pt(fe, x) === ge && !fe.disabled
      ) && X.add(ge);
    return X.size === R.size ? R : X;
  }));
  const Ge = H(
    (R) => {
      (f ?? p)?.(R);
    },
    [f, p]
  ), Qe = H(
    (R) => {
      (y ?? h)?.(R);
    },
    [y, h]
  ), He = H(
    (R) => {
      (v ?? m)?.(R);
    },
    [v, m]
  ), gt = H(
    (R) => {
      const X = C[R];
      if (!X || X.disabled) return;
      const ge = Pt(X, x);
      W((we) => {
        const fe = new Set(we);
        return fe.has(ge) ? fe.delete(ge) : fe.add(ge), fe;
      }), Q(R);
    },
    [C, x]
  ), te = H(
    (R) => {
      const X = A[R];
      if (!X || X.disabled) return;
      const ge = Pt(X, x);
      oe((we) => {
        const fe = new Set(we);
        return fe.has(ge) ? fe.delete(ge) : fe.add(ge), fe;
      }), J(R);
    },
    [A, x]
  ), Te = H(() => {
    const R = [], X = [];
    for (const F of C) {
      const pe = Pt(F, x);
      B.has(pe) && !F.disabled ? R.push(F) : X.push(F);
    }
    if (R.length === 0) return;
    const ge = X, we = [...A, ...R];
    L(ge), z(we), W(/* @__PURE__ */ new Set());
    const fe = new Set(R.map((F) => Pt(F, x)));
    oe(fe), Ge(ge), Qe(we), He({
      source: ge,
      target: we,
      moved: R,
      direction: "toTarget"
    });
  }, [
    C,
    A,
    B,
    x,
    Ge,
    Qe,
    He
  ]), lt = H(() => {
    const R = [], X = [];
    for (const F of A) {
      const pe = Pt(F, x);
      re.has(pe) && !F.disabled ? R.push(F) : X.push(F);
    }
    if (R.length === 0) return;
    const ge = X, we = [...C, ...R];
    z(ge), L(we), oe(/* @__PURE__ */ new Set());
    const fe = new Set(R.map((F) => Pt(F, x)));
    W(fe), Ge(we), Qe(ge), He({
      source: we,
      target: ge,
      moved: R,
      direction: "toSource"
    });
  }, [
    C,
    A,
    re,
    x,
    Ge,
    Qe,
    He
  ]), ze = H(() => {
    const R = C.filter((we) => !we.disabled);
    if (R.length === 0) return;
    const X = C.filter((we) => !!we.disabled), ge = [...A, ...R];
    L(X), z(ge), W(/* @__PURE__ */ new Set()), Ge(X), Qe(ge), He({
      source: X,
      target: ge,
      moved: R,
      direction: "allToTarget"
    });
  }, [C, A, Ge, Qe, He]), st = H(() => {
    const R = A.filter((we) => !we.disabled);
    if (R.length === 0) return;
    const X = A.filter((we) => !!we.disabled), ge = [...C, ...R];
    z(X), L(ge), oe(/* @__PURE__ */ new Set()), Ge(ge), Qe(X), He({
      source: ge,
      target: X,
      moved: R,
      direction: "allToSource"
    });
  }, [C, A, Ge, Qe, He]), Xe = H(() => {
    if (re.size === 0) return;
    const R = [...A], X = re, ge = [];
    for (let fe = 1; fe < R.length; fe++) {
      const F = R[fe], pe = R[fe - 1];
      if (!F || !pe) continue;
      const Re = Pt(F, x), De = Pt(pe, x);
      X.has(Re) && !X.has(De) && !F.disabled && !pe.disabled && (R[fe - 1] = F, R[fe] = pe, ge.push(F));
    }
    if (ge.length === 0) return;
    z(R), Qe(R), He({ source: C, target: R, moved: ge, direction: "up" });
    const we = Array.from(X)[0];
    if (we) {
      const fe = R.findIndex(
        (F) => Pt(F, x) === we
      );
      fe >= 0 && J(fe);
    }
  }, [
    A,
    re,
    x,
    C,
    Qe,
    He
  ]), Tt = H(() => {
    if (re.size === 0) return;
    const R = [...A], X = re, ge = [];
    for (let fe = R.length - 2; fe >= 0; fe--) {
      const F = R[fe], pe = R[fe + 1];
      if (!F || !pe) continue;
      const Re = Pt(F, x), De = Pt(pe, x);
      X.has(Re) && !X.has(De) && !F.disabled && !pe.disabled && (R[fe] = pe, R[fe + 1] = F, ge.push(F));
    }
    if (ge.length === 0) return;
    z(R), Qe(R), He({ source: C, target: R, moved: ge, direction: "down" });
    const we = Array.from(X)[0];
    if (we) {
      const fe = R.findIndex(
        (F) => Pt(F, x) === we
      );
      fe >= 0 && J(fe);
    }
  }, [
    A,
    re,
    x,
    C,
    Qe,
    He
  ]), yt = B.size > 0, it = re.size > 0, ft = le(""), Ve = le(
    null
  ), Ct = le(""), ae = le(
    null
  ), Le = H(
    (R) => {
      if (C.length === 0) return;
      const X = V;
      if (X.length === 0) return;
      const ge = X.includes(ie) ? ie : X[0] ?? 0;
      let we = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe + 1) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe - 1 + X.length) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), we = X[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), we = X[X.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), gt(ge);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const fe = (ft.current + R.key).toLowerCase();
        ft.current = fe, Ve.current && clearTimeout(Ve.current), Ve.current = setTimeout(() => {
          ft.current = "";
        }, 500);
        const F = [...X, ...X], pe = X.indexOf(ge) + 1, Re = F.slice(pe).find(
          (De) => ho(C[De]).toLowerCase().startsWith(fe)
        );
        Re != null && Q(Re);
        return;
      }
      we >= 0 && Q(we);
    },
    [C, V, ie, gt]
  ), wt = H(
    (R) => {
      if (A.length === 0) return;
      const X = Y;
      if (X.length === 0) return;
      const ge = X.includes(Ie) ? Ie : X[0] ?? 0;
      let we = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe + 1) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe - 1 + X.length) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), we = X[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), we = X[X.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), te(ge);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const fe = (Ct.current + R.key).toLowerCase();
        Ct.current = fe, ae.current && clearTimeout(ae.current), ae.current = setTimeout(() => {
          Ct.current = "";
        }, 500);
        const F = [...X, ...X], pe = X.indexOf(ge) + 1, Re = F.slice(pe).find(
          (De) => ho(A[De]).toLowerCase().startsWith(fe)
        );
        Re != null && J(Re);
        return;
      }
      we >= 0 && J(we);
    },
    [A, Y, Ie, te]
  ), Mt = le(null), bt = le(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [rt.root, S].filter(Boolean).join(" "),
      "aria-label": T,
      children: [
        /* @__PURE__ */ M("div", { className: rt.panel, children: [
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
              children: C.length === 0 ? (
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
              ) : C.map((R, X) => {
                const ge = Pt(R, x), we = B.has(ge), fe = X === ie, F = !!R.disabled;
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
                      onClick: () => gt(X),
                      children: ho(R)
                    },
                    ge
                  )
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: rt.controls, children: [
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
              "aria-disabled": C.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: C.filter((R) => !R.disabled).length === 0,
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
              "aria-disabled": C.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: C.filter((R) => !R.disabled).length === 0,
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
        /* @__PURE__ */ M("div", { className: rt.panel, children: [
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
              ) : A.map((R, X) => {
                const ge = Pt(R, x), we = re.has(ge), fe = X === Ie, F = !!R.disabled;
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
                      onClick: () => te(X),
                      children: ho(R)
                    },
                    ge
                  )
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: rt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: rt.btn,
                "aria-label": "Move up",
                "aria-disabled": !it || void 0,
                disabled: !it,
                onClick: Xe,
                children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_up", size: "sm" })
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
                children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: "sm" })
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
  onSlotClick: d,
  ariaLabel: s = "Scheduler",
  className: l
}) {
  const [c, f] = U(
    n ?? /* @__PURE__ */ new Date()
  ), p = n ?? c, y = (_) => {
    n || f(_), r?.(_);
  }, h = t === "day" ? [p] : t === "week" ? Array.from({ length: 7 }, (_, v) => {
    const m = new Date(p);
    return m.setDate(p.getDate() - p.getDay() + v), m;
  }) : Array.from({ length: 30 }, (_, v) => {
    const m = new Date(p);
    return m.setDate(1 + v), m;
  }), b = Array.from({ length: 12 }, (_, v) => 8 + v);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Vt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ M("div", { className: Vt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const _ = new Date(p);
                _.setDate(_.getDate() - 7), y(_);
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
                _.setDate(_.getDate() + 7), y(_);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: Vt.resources, children: a.map((_) => /* @__PURE__ */ o("div", { className: Vt.resource, children: _.name }, _.id)) }),
        /* @__PURE__ */ M("div", { className: Vt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Vt.timeCol, role: "presentation", children: b.map((_) => /* @__PURE__ */ M("div", { className: Vt.timeCell, children: [
            _,
            ":00"
          ] }, _)) }),
          h.map((_) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- day-level create affordance for the pointer; hour slots refine it and event buttons inside are the keyboard path
            /* @__PURE__ */ M(
              "div",
              {
                className: Vt.dayCol,
                role: "group",
                title: _.toLocaleDateString(),
                onClick: () => d?.({ date: _ }),
                "aria-label": _.toLocaleDateString(),
                children: [
                  /* @__PURE__ */ o("div", { className: Vt.dayHeader, children: _.toLocaleDateString(void 0, {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  }) }),
                  b.map((v) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- hour slots refine the day-column click for the mouse; event buttons inside are native buttons
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: Vt.slot,
                        tabIndex: -1,
                        onClick: (m) => {
                          m.stopPropagation();
                          const u = new Date(_);
                          u.setHours(v), d?.({ date: u });
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
                      "aria-label": `${v.title} ${va(v.start)} - ${va(v.end)}`,
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
const sN = "_root_dj5ne_1", aN = "_header_dj5ne_8", lN = "_headerCell_dj5ne_15", iN = "_timeline_dj5ne_21", cN = "_row_dj5ne_26", dN = "_taskName_dj5ne_32", uN = "_timelineCell_dj5ne_37", fN = "_bar_dj5ne_43", pN = "_progress_dj5ne_56", _N = "_dep_dj5ne_61", Cn = {
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
  const [i, d] = U(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Cn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: Cn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Cn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: Cn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ M(
          "div",
          {
            className: Cn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Cn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ M("div", { className: Cn.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Cn.bar,
                    role: "button",
                    "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
                    "aria-pressed": i === s.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(s.id), n?.({ task: s });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), d(s.id), n?.({ task: s }));
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
  className: d
}) {
  const s = t, l = n, c = r, f = (u, g, S) => {
    const x = u === "row" ? s.filter((O) => O.property !== g) : s, T = u === "col" ? l.filter((O) => O.property !== g) : l, $ = u === "agg" ? c.filter((O) => !(O.property === g && O.aggregate === S)) : c;
    a?.({
      rowFields: x,
      columnFields: T,
      aggregateFields: $
    });
  }, p = (u, g) => g.length === 0 ? "" : g.length === 1 ? String(u[g[0].property]) : g.map(
    (S) => String(u[S.property]).replace(/\\/g, "\\\\").split("").join("\\x01")
  ).join(""), y = [
    ...new Set(s.length ? e.map((u) => p(u, s)) : [""])
  ].sort(), h = [
    ...new Set(l.length ? e.map((u) => p(u, l)) : [""])
  ].sort(), b = (u, g) => e.filter(
    (S) => (u == null || p(S, s) === u) && (g == null || p(S, l) === g)
  ), _ = (u, g) => {
    if (g.aggregate === "Count") return u.length;
    const S = u.map((x) => Number(x[g.property])).filter((x) => !Number.isNaN(x));
    return S.length ? vN[g.aggregate](S) : 0;
  }, v = (u) => {
    const g = c.length > 1;
    return c.map((S) => {
      const x = wN(_(u, S));
      return g ? `${x} (${S.aggregate})` : x;
    }).join(", ");
  }, m = (u, g, S, x) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: xr.chip,
      "aria-label": `Remove ${u} field ${S}`,
      onClick: () => f(u, g, x),
      children: [
        S,
        x ? ` (${x})` : ""
      ]
    },
    `${u}-${S}-${x ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [xr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: xr.fields, children: [
      s.map((u) => m("row", u.property, u.title ?? u.property)),
      l.map((u) => m("col", u.property, u.title ?? u.property)),
      c.map(
        (u) => m("agg", u.property, u.title ?? u.property, u.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: xr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((u) => u.title ?? u.property).join(" / ") || "Total" }),
        h.map((u) => /* @__PURE__ */ o("th", { scope: "col", children: u || "—" }, u)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        y.map((u) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: u || "—" }),
          h.map((g) => /* @__PURE__ */ o(
            "td",
            {
              title: c.length ? v(b(u, g)) : void 0,
              children: c.length ? v(b(u, g)) : ""
            },
            g
          )),
          /* @__PURE__ */ o("td", { className: xr.total, children: c.length ? v(b(u)) : "" })
        ] }, u)),
        /* @__PURE__ */ M("tr", { className: xr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          h.map((u) => /* @__PURE__ */ o("td", { children: c.length ? v(b(void 0, u)) : "" }, u)),
          /* @__PURE__ */ o("td", { children: c.length ? v(e) : "" })
        ] })
      ] })
    ] })
  ] });
}
const kN = "_root_1r7co_1", NN = "_reverse_1r7co_10", SN = "_item_1r7co_14", $N = "_marker_1r7co_35", ON = "_body_1r7co_46", EN = "_label_1r7co_50", TN = "_content_1r7co_56", sr = {
  root: kN,
  reverse: NN,
  item: SN,
  marker: $N,
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
      children: a.map((i, d) => /* @__PURE__ */ M("li", { className: sr.item, children: [
        /* @__PURE__ */ o("span", { className: sr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: sr.body, children: [
          /* @__PURE__ */ o("div", { className: sr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: sr.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const CN = "_root_rm4d8_1", MN = "_header_rm4d8_13", AN = "_headCell_rm4d8_22", DN = "_row_rm4d8_32", IN = "_cell_rm4d8_37", qr = {
  root: CN,
  header: MN,
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
  className: d
}) {
  const [s, l] = U(
    /* @__PURE__ */ new Map()
  ), [c, f] = U(0), p = le(/* @__PURE__ */ new Set()), y = Math.ceil(n / t), h = Math.max(0, Math.floor(c / t) - 3), b = Math.min(e, h + y + 6), _ = H(
    (m, u) => {
      let g = !1;
      for (let S = m; S < u; S++)
        !s.has(S) && !p.current.has(S) && (g = !0);
      if (g) {
        for (let S = m; S < u; S++) p.current.add(S);
        r({ skip: m, top: u }).then((S) => {
          l((x) => {
            const T = new Map(x);
            return S.forEach(($, O) => T.set(m + O, $)), T;
          });
          for (let x = m; x < u; x++) p.current.delete(x);
        });
      }
    },
    [s, r]
  );
  Ne(() => {
    _(h, b);
  }, [h, b, _]);
  const v = [];
  for (let m = h; m < b; m++) {
    const u = s.get(m) ?? {};
    v.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: qr.row,
          role: "row",
          style: { height: t },
          children: a.map((g) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: qr.cell,
              style: g.width ? { width: g.width } : void 0,
              children: String(u[g.property] ?? "")
            },
            g.property
          ))
        },
        m
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [qr.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (m) => f(m.target.scrollTop),
      onKeyDown: (m) => {
        const u = m.currentTarget;
        m.key === "ArrowDown" ? (m.preventDefault(), u.scrollTop += t) : m.key === "ArrowUp" ? (m.preventDefault(), u.scrollTop -= t) : m.key === "PageDown" ? (m.preventDefault(), u.scrollTop += n) : m.key === "PageUp" && (m.preventDefault(), u.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: h * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: qr.header, role: "row", children: a.map((m) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: qr.headCell,
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
    constructor(s, l, c, f) {
      if (this.version = s, this.errorCorrectionLevel = l, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let p = [];
      for (let h = 0; h < this.size; h++) p.push(!1);
      for (let h = 0; h < this.size; h++)
        this.modules.push(p.slice()), this.isFunction.push(p.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(c);
      if (this.drawCodewords(y), f == -1) {
        let h = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const _ = this.getPenaltyScore();
          _ < h && (f = b, h = _), this.applyMask(b);
        }
      }
      a(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
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
      const c = e.QrSegment.makeSegments(s);
      return t.encodeSegments(c, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, l) {
      const c = e.QrSegment.makeBytes(s);
      return t.encodeSegments([c], l);
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
    static encodeSegments(s, l, c = 1, f = 40, p = -1, y = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || p < -1 || p > 7)
        throw new RangeError("Invalid value");
      let h, b;
      for (h = c; ; h++) {
        const u = t.getNumDataCodewords(h, l) * 8, g = i.getTotalBits(s, h);
        if (g <= u) {
          b = g;
          break;
        }
        if (h >= f)
          throw new RangeError("Data too long");
      }
      for (const u of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        y && b <= t.getNumDataCodewords(h, u) * 8 && (l = u);
      let _ = [];
      for (const u of s) {
        n(u.mode.modeBits, 4, _), n(u.numChars, u.mode.numCharCountBits(h), _);
        for (const g of u.getData()) _.push(g);
      }
      a(_.length == b);
      const v = t.getNumDataCodewords(h, l) * 8;
      a(_.length <= v), n(0, Math.min(4, v - _.length), _), n(0, (8 - _.length % 8) % 8, _), a(_.length % 8 == 0);
      for (let u = 236; _.length < v; u ^= 253)
        n(u, 8, _);
      let m = [];
      for (; m.length * 8 < _.length; ) m.push(0);
      return _.forEach(
        (u, g) => m[g >>> 3] |= u << 7 - (g & 7)
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
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), l = s.length;
      for (let c = 0; c < l; c++)
        for (let f = 0; f < l; f++)
          c == 0 && f == 0 || c == 0 && f == l - 1 || c == l - 1 && f == 0 || this.drawAlignmentPattern(s[c], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const l = this.errorCorrectionLevel.formatBits << 3 | s;
      let c = l;
      for (let p = 0; p < 10; p++) c = c << 1 ^ (c >>> 9) * 1335;
      const f = (l << 10 | c) ^ 21522;
      a(f >>> 15 == 0);
      for (let p = 0; p <= 5; p++)
        this.setFunctionModule(8, p, r(f, p));
      this.setFunctionModule(8, 7, r(f, 6)), this.setFunctionModule(8, 8, r(f, 7)), this.setFunctionModule(7, 8, r(f, 8));
      for (let p = 9; p < 15; p++)
        this.setFunctionModule(14 - p, 8, r(f, p));
      for (let p = 0; p < 8; p++)
        this.setFunctionModule(this.size - 1 - p, 8, r(f, p));
      for (let p = 8; p < 15; p++)
        this.setFunctionModule(8, this.size - 15 + p, r(f, p));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let s = this.version;
      for (let c = 0; c < 12; c++) s = s << 1 ^ (s >>> 11) * 7973;
      const l = this.version << 12 | s;
      a(l >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = r(l, c), p = this.size - 11 + c % 3, y = Math.floor(c / 3);
        this.setFunctionModule(p, y, f), this.setFunctionModule(y, p, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const p = Math.max(Math.abs(f), Math.abs(c)), y = s + f, h = l + c;
          0 <= y && y < this.size && 0 <= h && h < this.size && this.setFunctionModule(y, h, p != 2 && p != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, l) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            l + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, l, c) {
      this.modules[l][s] = c, this.isFunction[l][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const l = this.version, c = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(l, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l], p = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l], y = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), h = f - y % f, b = Math.floor(y / f);
      let _ = [];
      const v = t.reedSolomonComputeDivisor(p);
      for (let u = 0, g = 0; u < f; u++) {
        let S = s.slice(
          g,
          g + b - p + (u < h ? 0 : 1)
        );
        g += S.length;
        const x = t.reedSolomonComputeRemainder(S, v);
        u < h && S.push(0), _.push(S.concat(x));
      }
      let m = [];
      for (let u = 0; u < _[0].length; u++)
        _.forEach((g, S) => {
          (u != b - p || S >= h) && m.push(g[u]);
        });
      return a(m.length == y), m;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let p = 0; p < 2; p++) {
            const y = c - p, b = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[b][y] && l < s.length * 8 && (this.modules[b][y] = r(s[l >>> 3], 7 - (l & 7)), l++);
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
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (s) {
            case 0:
              f = (c + l) % 2 == 0;
              break;
            case 1:
              f = l % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + l) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              f = c * l % 2 + c * l % 3 == 0;
              break;
            case 6:
              f = (c * l % 2 + c * l % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + l) % 2 + c * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][c] && f && (this.modules[l][c] = !this.modules[l][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let p = 0; p < this.size; p++) {
        let y = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[p][_] == y ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, b), y || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), y = this.modules[p][_], h = 1);
        s += this.finderPenaltyTerminateAndCount(y, h, b) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size; p++) {
        let y = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[_][p] == y ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, b), y || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), y = this.modules[_][p], h = 1);
        s += this.finderPenaltyTerminateAndCount(y, h, b) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size - 1; p++)
        for (let y = 0; y < this.size - 1; y++) {
          const h = this.modules[p][y];
          h == this.modules[p][y + 1] && h == this.modules[p + 1][y] && h == this.modules[p + 1][y + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const p of this.modules)
        l = p.reduce((y, h) => y + (h ? 1 : 0), l);
      const c = this.size * this.size, f = Math.ceil(Math.abs(l * 20 - c * 10) / c) - 1;
      return a(0 <= f && f <= 9), s += f * t.PENALTY_N4, a(0 <= s && s <= 2568888), s;
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
        let c = [6];
        for (let f = this.size - 7; c.length < s; f -= l)
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
      let l = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const c = Math.floor(s / 7) + 2;
        l -= (25 * c - 10) * c - 55, s >= 7 && (l -= 36);
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
      for (let f = 0; f < s - 1; f++) l.push(0);
      l.push(1);
      let c = 1;
      for (let f = 0; f < s; f++) {
        for (let p = 0; p < l.length; p++)
          l[p] = t.reedSolomonMultiply(l[p], c), p + 1 < l.length && (l[p] ^= l[p + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let c = l.map((f) => 0);
      for (const f of s) {
        const p = f ^ c.shift();
        c.push(0), l.forEach(
          (y, h) => c[h] ^= t.reedSolomonMultiply(y, p)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, l) {
      if (s >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (l >>> f & 1) * s;
      return a(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const l = s[1];
      a(l <= this.size * 3);
      const c = l > 0 && s[2] == l && s[3] == l * 3 && s[4] == l && s[5] == l;
      return (c && s[0] >= l * 4 && s[6] >= l ? 1 : 0) + (c && s[6] >= l * 4 && s[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, l, c) {
      return s && (this.finderPenaltyAddHistory(l, c), l = 0), l += this.size, this.finderPenaltyAddHistory(l, c), this.finderPenaltyCountPatterns(c);
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
  function n(d, s, l) {
    if (s < 0 || s > 31 || d >>> s)
      throw new RangeError("Value out of range");
    for (let c = s - 1; c >= 0; c--)
      l.push(d >>> c & 1);
  }
  function r(d, s) {
    return (d >>> s & 1) != 0;
  }
  function a(d) {
    if (!d) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, l, c) {
      if (this.mode = s, this.numChars = l, this.bitData = c, l < 0) throw new RangeError("Invalid argument");
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
      let l = [];
      for (const c of s) n(c, 8, l);
      return new i(i.Mode.BYTE, s.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!i.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let c = 0; c < s.length; ) {
        const f = Math.min(s.length - c, 3);
        n(parseInt(s.substring(c, c + f), 10), f * 3 + 1, l), c += f;
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
      let l = [], c;
      for (c = 0; c + 2 <= s.length; c += 2) {
        let f = i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c + 1)), n(f, 11, l);
      }
      return c < s.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)),
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
      let c = 0;
      for (const f of s) {
        const p = f.mode.numCharCountBits(l);
        if (f.numChars >= 1 << p) return 1 / 0;
        c += 4 + p + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let l = [];
      for (let c = 0; c < s.length; c++)
        s.charAt(c) != "%" ? l.push(s.charCodeAt(c)) : (l.push(parseInt(s.substring(c + 1, c + 3), 16)), c += 2);
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
  className: d,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, c = le(null), f = Oo("(prefers-color-scheme: dark)"), [p, y] = U(
    () => document.documentElement.dataset.theme ?? null
  );
  Ne(() => {
    const S = document.documentElement, x = new MutationObserver(() => {
      y(S.dataset.theme ?? null);
    });
    return x.observe(S, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => x.disconnect();
  }, []);
  const h = Se(() => {
    try {
      return kn.QrCode.encodeText(e, PN[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = le(null);
  Ne(() => {
    if (h !== null) {
      b.current = null;
      return;
    }
    const S = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(S), (b.current?.value !== e || b.current?.onError !== s) && (b.current = { value: e, onError: s }, s?.(S));
  }, [h, e, s]);
  const _ = Math.max(0, Math.floor(a)), v = [LN.root, d].filter(Boolean).join(" ");
  if (Ne(() => {
    if (n !== "canvas" || h === null) return;
    const S = c.current, x = S?.getContext("2d");
    if (!S || !x) return;
    const T = getComputedStyle(S), $ = T.getPropertyValue("--dx-text-color").trim() || "#000", O = T.getPropertyValue("--dx-surface-color").trim() || "#fff";
    RN(x, h, t, _, $, O);
  }, [n, h, t, _, f, p]), h === null)
    return /* @__PURE__ */ o("div", { className: v, role: "img", "aria-label": l, "data-qr-error": "true" });
  const m = h.size + _ * 2, u = t / m;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: c,
        className: v,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const g = [];
  for (let S = 0; S < h.size; S++)
    for (let x = 0; x < h.size; x++)
      h.getModule(x, S) && g.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (x + _) * u,
            y: (S + _) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${x}-${S}`
        )
      );
  return /* @__PURE__ */ M(
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
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: g })
      ]
    }
  );
}
function RN(e, t, n, r, a, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * d, (s + r) * d, d + 0.5, d + 0.5);
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
  const d = a ?? `Barcode ${e}`, s = Se(() => {
    const l = [];
    let c = 0;
    for (const f of HN(e)) {
      const p = ka[f] ?? ka[0];
      for (let y = 0; y < p.length; y++) {
        const h = Number(p[y]);
        y % 2 === 0 && l.push({ x: c, w: h }), c += h;
      }
    }
    return { modules: l, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [wa.root, i].filter(Boolean).join(" "), children: [
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
          s.modules.map((l, c) => /* @__PURE__ */ o(
            "rect",
            {
              x: l.x,
              y: 0,
              width: l.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ o("span", { className: wa.value, children: e })
  ] });
}
const UN = "_root_16i43_1", qN = "_svg_16i43_10", WN = "_gridline_16i43_15", KN = "_tickLabel_16i43_21", GN = "_axisTitle_16i43_27", VN = "_dataLabel_16i43_34", YN = "_gaugeValue_16i43_40", XN = "_legend_16i43_47", ZN = "_legendItem_16i43_55", JN = "_swatch_16i43_63", QN = "_tooltip_16i43_70", eS = "_visuallyHidden_16i43_84", Ze = {
  root: UN,
  svg: qN,
  gridline: WN,
  tickLabel: KN,
  axisTitle: GN,
  dataLabel: VN,
  gaugeValue: YN,
  legend: XN,
  legendItem: ZN,
  swatch: JN,
  tooltip: QN,
  visuallyHidden: eS
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
]), tS = /* @__PURE__ */ new Set([...Qa, "heatmap"]), nS = [1, 2, 2.5, 5, 10], rS = 5;
function oS(e, t, n) {
  const r = t - e || 1, a = n ?? (() => {
    const c = r / rS, f = Math.pow(10, Math.floor(Math.log10(c))), p = c / f;
    return (nS.find((h) => h >= p) ?? 10) * f;
  })(), i = Math.floor(e / a) * a, d = Math.ceil(t / a) * a, s = Math.round((d - i) / a), l = [];
  for (let c = 0; c <= s; c++)
    l.push(Number((i + c * a).toFixed(6)));
  return { min: i, max: d, step: a, ticks: l };
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
const qt = (e) => e * Math.PI / 180;
function Eo(e, t, n, r, a) {
  const i = r.markers ?? {};
  if (i.visible === !1) return null;
  const d = i.shape ?? "circle", s = i.size ?? a, l = "var(--dx-surface-color)";
  return d === "square" ? /* @__PURE__ */ o(
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
  ) : d === "diamond" ? /* @__PURE__ */ o(
    "path",
    {
      d: `M ${e} ${t - s} L ${e + s} ${t} L ${e} ${t + s} L ${e - s} ${t} Z`,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : d === "triangle" ? /* @__PURE__ */ o(
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
const sS = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function aS(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && sS.has(a.type)) return a;
  }
  return null;
}
function lS(e, t, n, r) {
  const a = aS(e, t, n);
  if (!a) return null;
  const i = No(a).filter((f) => !Number.isNaN(f.val));
  if (i.length === 0) return null;
  const d = i.map((f) => f.cat);
  let s;
  if (t.type === "trendline") {
    const f = i.length, p = i.map((u, g) => g), y = i.map((u) => u.val), h = p.reduce((u, g) => u + g, 0) / f, b = y.reduce((u, g) => u + g, 0) / f;
    let _ = 0, v = 0;
    for (let u = 0; u < f; u++)
      _ += (p[u] - h) * (y[u] - b), v += (p[u] - h) * (p[u] - h);
    const m = v === 0 ? 0 : _ / v;
    s = d.map((u, g) => ({
      cat: u,
      val: b + m * (g - h)
    }));
  } else {
    const f = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((p, y) => {
      if (y + 1 < f) return null;
      const h = i.slice(y + 1 - f, y + 1);
      return {
        cat: p.cat,
        val: h.reduce((b, _) => b + _.val, 0) / f
      };
    }).filter((p) => p != null);
  }
  if (s.length === 0) return null;
  const l = {
    ...t,
    stack: void 0,
    categoryProperty: "__cat",
    valueProperty: "__val",
    data: s.map((f, p) => ({
      __cat: f.cat,
      __val: f.val,
      __item: i[p + (i.length - s.length)]?.item
    })),
    markers: { ...t.markers ?? {}, visible: t.markers?.visible ?? !1 }
  }, c = No(l).map((f) => ({
    ...f,
    item: f.item.__item ?? f.item
  }));
  return tl(e, l, n, c, r);
}
function iS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, d = new Map(i.map((p, y) => [p, y])), s = n.map((p) => {
    const y = d.get(p.cat) ?? 0, h = p.min, b = p.max;
    return typeof h != "number" || Number.isNaN(h) || typeof b != "number" || Number.isNaN(b) ? null : { x: r(y), lo: a(h), hi: a(b) };
  });
  if (s.some((p) => p == null)) return null;
  const l = s.map((p) => `L ${p.x} ${p.hi}`).join(" "), c = [...s].reverse().map((p) => `L ${p.x} ${p.lo}`).join(" "), f = s[0];
  return /* @__PURE__ */ o(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${l} ${c} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function cS(e, t, n, r) {
  const { pad: a, plotW: i, plotH: d } = e, s = a.l + i / 2, l = a.t + d / 2, c = Math.min(i, d) / 3, f = t.type === "donut" ? t.innerRadius ?? c * 0.5 : 0, p = r.reduce((h, b) => h + (Number(b.val) || 0), 0);
  let y = -90;
  return Zt(
    n,
    t,
    r.map((h, b) => {
      const _ = p ? h.val / p * 360 : 0, v = y, m = y + _;
      y = m;
      const u = _ > 180 ? 1 : 0, g = s + c * Math.cos(qt(v)), S = l + c * Math.sin(qt(v)), x = s + c * Math.cos(qt(m)), T = l + c * Math.sin(qt(m)), $ = s + f * Math.cos(qt(m)), O = l + f * Math.sin(qt(m)), C = s + f * Math.cos(qt(v)), L = l + f * Math.sin(qt(v)), A = f ? `M ${g} ${S} A ${c} ${c} 0 ${u} 1 ${x} ${T} L ${$} ${O} A ${f} ${f} 0 ${u} 0 ${C} ${L} Z` : `M ${s} ${l} L ${g} ${S} A ${c} ${c} 0 ${u} 1 ${x} ${T} Z`, z = (v + m) / 2, k = s + (c + 12) * Math.cos(qt(z)), w = l + (c + 12) * Math.sin(qt(z)), N = Ja(t, b);
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: A,
            fill: N,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, w, `${t.title ?? h.cat}: ${h.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: k,
            y: w,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: h.val
          }
        )
      ] }, b);
    })
  );
}
function dS(e, t, n, r, a) {
  const { pad: i, plotW: d, scale: s, xFor: l, yFor: c, categories: f } = e, p = new Map(f.map((y, h) => [y, h]));
  return Zt(
    n,
    t,
    r.map((y, h) => {
      const b = p.get(y.cat) ?? 0, _ = Number(r[h].cat), v = Number.isNaN(_) ? l(b) : i.l + (_ - s.min) / (s.max - s.min || 1) * d, m = c(y.val), u = t.type === "bubble" && y.size !== void 0 ? Math.max(4, Math.min(12, y.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        Eo(v, m, a, t, u),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: v,
            cy: m,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, m, `${t.title ?? y.cat}: ${y.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, y.cat, y.val, y.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, h);
    })
  );
}
function tl(e, t, n, r, a) {
  const { scale: i, xFor: d, yFor: s, categories: l, series: c } = e, f = new Map(l.map((b, _) => [b, _])), p = (b) => {
    if (!t.stack) return i.min;
    let _ = 0;
    for (let v = 0; v < n; v++) {
      const m = c[v];
      if (m?.stack !== t.stack) continue;
      const u = m.data.find(
        (g) => String(g[m.categoryProperty] ?? "") === b
      );
      u && (_ += Number(u[m.valueProperty]) || 0);
    }
    return _;
  }, y = r.map((b, _) => {
    const v = f.get(b.cat) ?? 0, m = p(b.cat);
    return `${_ === 0 ? "M" : "L"} ${d(v)} ${s(m + b.val)}`;
  }).join(" "), h = r.map((b, _) => {
    const v = f.get(b.cat) ?? 0, m = p(b.cat);
    return `${_ === 0 ? "M" : "L"} ${d(v)} ${s(m)}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ M(ot, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${y} L ${d(r.length - 1)} ${s(p(r[r.length - 1].cat))} L ${d(0)} ${s(p(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      iS(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: y,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: el(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: h, fill: "none", stroke: "transparent" }),
      r.map((b, _) => {
        const v = f.get(b.cat) ?? 0, m = p(b.cat), u = d(v), g = s(m + b.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          Eo(u, g, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: u - 12,
              y: g - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                u,
                g,
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
              x: u,
              y: g - 8,
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
function uS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, scale: l, xFor: c, yFor: f, categories: p, series: y } = e, h = new Map(p.map((_, v) => [_, v])), b = t.type === "bar";
  return Zt(
    n,
    t,
    r.map((_, v) => {
      const m = h.get(_.cat) ?? 0;
      let u = 0;
      if (t.stack)
        for (let w = 0; w < n; w++) {
          const N = y[w];
          if (N?.stack !== t.stack) continue;
          const I = N.data.find(
            (D) => String(D[N.categoryProperty] ?? "") === _.cat
          );
          I && (u += Number(I[N.valueProperty]) || 0);
        }
      const g = u + _.val, S = typeof _.min == "number" && !Number.isNaN(_.min) && typeof _.max == "number" && !Number.isNaN(_.max), x = y.filter(
        (w) => !w.stack || w.stack === t.stack
      ).length, T = d / Math.max(1, p.length), $ = b ? 18 : Math.max(12, T / (t.stack ? 1 : y.length) - 4), O = b ? i.l + u / (l.max - l.min || 1) * d : c(m) - $ / 2 + (t.stack ? 0 : n % x * $), C = b ? i.t + m * s / Math.max(1, p.length) + 4 : f(S ? u + _.max : g), L = b ? S ? (_.max - _.min) / (l.max - l.min || 1) * d : _.val / (l.max - l.min || 1) * d : $ - 4, A = b ? 16 : S ? f(u + _.min) - f(u + _.max) : f(u) - f(g), z = b ? i.l + (u + (S ? _.min : 0)) / (l.max - l.min || 1) * d : O, k = b ? i.t + m * s / Math.max(1, p.length) + 4 : C;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: z,
            y: k,
            width: b ? L : $ - 4,
            height: A,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              z + (b ? L : $) / 2,
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
            x: z + (b ? L : $) / 2,
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
function fS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, scale: l, tooltipVisible: c, showTip: f, hideTip: p } = e, y = i.l + d / 2, h = i.t + s * 0.78, b = Math.min(d, s) * 0.36, _ = 135, v = 270, m = r.reduce((T, $) => T + (Number($.val) || 0), 0), u = l.max - l.min || 1, g = Math.min(1, Math.max(0, (m - l.min) / u)), S = (T, $) => {
    const [O, C] = [
      y + b * Math.cos(qt(T)),
      h + b * Math.sin(qt(T))
    ], [L, A] = [
      y + b * Math.cos(qt($)),
      h + b * Math.sin(qt($))
    ], z = $ - T > 180 ? 1 : 0;
    return `M ${O} ${C} A ${b} ${b} 0 ${z} 1 ${L} ${A}`;
  }, x = Number(m.toFixed(2));
  return Zt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ M("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: S(_, _ + v),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      g > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: S(_, _ + v * g),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: y, y: h - 4, textAnchor: "middle", className: Ze.gaugeValue, children: x }),
      /* @__PURE__ */ o(
        "path",
        {
          d: S(_, _ + v),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(y, h - b, `${t.title ?? "Value"}: ${x}`),
          onMouseLeave: () => p(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", m, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: y,
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
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, d = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), c = (p) => qt(-90 + 360 * p / l);
  return { cx: i, cy: d, radius: s, angleFor: c, vertexFor: (p, y) => {
    const h = c(p);
    return [
      i + s * y * Math.cos(h),
      d + s * y * Math.sin(h)
    ];
  } };
}
function pS(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = _s(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((s, l) => a(l, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, s) => {
      const [l, c] = a(s, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: r,
          x2: l,
          y2: c,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function _S(e, t, n, r, a) {
  const { categories: i, tooltipVisible: d, showTip: s, hideTip: l } = e, { cx: c, cy: f, radius: p, angleFor: y, vertexFor: h } = _s(e), b = e.scale.max || 1, _ = (m) => r.find((u) => u.cat === m)?.val ?? 0, v = i.map((m, u) => {
    const g = Math.min(1, Math.max(0, _(m) / b)), [S, x] = h(u, g);
    return `${S},${x}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ M(ot, { children: [
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
      i.map((m, u) => {
        const g = Math.min(1, Math.max(0, _(m) / b)), [S, x] = h(u, g), [T, $] = h(u, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: S,
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
              cx: S,
              cy: x,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && s(T, $, `${t.title ?? m}: ${_(m)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const O = r.find((C) => C.cat === m);
                O && e.handleClick(t, O.cat, O.val, O.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: c + (p + 14) * Math.cos(y(u)),
              y: f + (p + 14) * Math.sin(y(u)) + 4,
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
function hS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, tooltipVisible: l, showTip: c, hideTip: f } = e, p = r, y = Math.max(1, ...p.map((_) => Number(_.val) || 0)), h = s / Math.max(1, p.length), b = i.l + d / 2;
  return Zt(
    n,
    t,
    p.map((_, v) => {
      const u = Math.max(0, Number(_.val) || 0) / y * d, g = p[v + 1], S = g ? Math.max(0, Number(g.val) || 0) / y * d : u * 0.7, x = i.t + v * h + 2, T = Math.max(4, h - 6), $ = 1 - v * (0.45 / Math.max(1, p.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - u / 2} ${x} L ${b + u / 2} ${x} L ${b + S / 2} ${x + T} L ${b - S / 2} ${x + T} Z`,
            fill: a,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && c(b, x, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: b,
            y: x + T / 2 + 4,
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
function mS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, categories: l, tooltipVisible: c, showTip: f, hideTip: p } = e, y = [];
  t.data.forEach((g) => {
    const S = t.rowProperty ? String(g[t.rowProperty] ?? "") : "All";
    y.includes(S) || y.push(S);
  });
  const h = r.map((g) => g.val).filter((g) => Number.isFinite(g)), b = h.length ? Math.min(...h) : 0, _ = h.length ? Math.max(...h) : 1, v = d / Math.max(1, l.length), m = s / Math.max(1, y.length), u = (g) => _ === b ? 0.6 : 0.15 + 0.85 * ((g - b) / (_ - b));
  return Zt(
    n,
    t,
    /* @__PURE__ */ M(ot, { children: [
      y.map((g, S) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + S * m + m / 2 + 4,
          textAnchor: "end",
          className: Ze.tickLabel,
          children: g
        },
        g
      )),
      r.map((g, S) => {
        const x = t.data[S], T = l.indexOf(g.cat), $ = y.indexOf(
          t.rowProperty && x ? String(x[t.rowProperty] ?? "") : "All"
        );
        if (T < 0 || $ < 0) return null;
        const O = i.l + T * v, C = i.t + $ * m;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: O + 1,
              y: C + 1,
              width: Math.max(1, v - 2),
              height: Math.max(1, m - 2),
              fill: a,
              fillOpacity: u(g.val),
              onMouseEnter: () => c && f(O + v / 2, C, `${t.title ?? g.cat}: ${g.val}`),
              onMouseLeave: () => p(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: O + v / 2,
              y: C + m / 2 + 4,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: g.val
            }
          )
        ] }, S);
      })
    ] })
  );
}
function gS(e, t, n, r, a) {
  const { xFor: i, yFor: d, categories: s } = e, l = new Map(s.map((h, b) => [h, b])), c = e.plotW / Math.max(1, s.length), f = Math.max(8, Math.min(28, c / 2 - 4)), p = t.upColor ?? a, y = t.downColor ?? "var(--dx-danger-color)";
  return Zt(
    n,
    t,
    r.map((h, b) => {
      const _ = l.get(h.cat) ?? 0, v = i(_), m = h.close ?? h.val, u = typeof h.open == "number" && !Number.isNaN(h.open) && typeof h.high == "number" && !Number.isNaN(h.high) && typeof h.low == "number" && !Number.isNaN(h.low) && typeof m == "number" && !Number.isNaN(m), g = u && m >= h.open, S = `${t.title ?? h.cat}: O ${h.open ?? "–"} H ${h.high ?? "–"} L ${h.low ?? "–"} C ${m}`;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        u && t.type === "candlestick" && /* @__PURE__ */ M(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: d(h.high),
              x2: v,
              y2: d(h.low),
              stroke: g ? p : y,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: v - f / 2,
              y: d(Math.max(h.open, m)),
              width: f,
              height: Math.max(
                2,
                d(Math.min(h.open, m)) - d(Math.max(h.open, m))
              ),
              fill: g ? p : "none",
              stroke: g ? p : y,
              strokeWidth: 1.5
            }
          )
        ] }),
        u && t.type === "ohlc" && /* @__PURE__ */ M(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: d(h.high),
              x2: v,
              y2: d(h.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: v - f / 2,
              y1: d(h.open),
              x2: v,
              y2: d(h.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: d(m),
              x2: v + f / 2,
              y2: d(m),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        u && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: v,
            y1: d(h.high),
            x2: v,
            y2: d(h.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !u && Eo(v, d(m), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: v - 14,
            y: d(m) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, d(m), S),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, m, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: v,
            y: d(m) - 8,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Xr(e, m)
          }
        )
      ] }, b);
    })
  );
}
function yS(e, t, n, r, a) {
  const i = e.reduce((b, _) => b + Math.max(0, _.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const d = r * a / i, s = [], l = e.map((b, _) => ({ ...b, i: _ }));
  let c = t, f = n, p = r, y = a;
  const h = (b, _) => {
    const v = b.reduce((g, S) => g + Math.max(0, S.val), 0) * d;
    if (v <= 0) return Number.POSITIVE_INFINITY;
    const m = Math.max(...b.map((g) => Math.max(0, g.val))) * d, u = Math.min(...b.map((g) => Math.max(0, g.val))) * d;
    return Math.max(
      _ * _ * m / (v * v),
      v * v / (_ * _ * (u || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const b = Math.min(p, y), _ = [];
    let v = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const u = [..._, l[0]], g = h(u, b);
      if (g <= v)
        v = g, _.push(l.shift());
      else break;
    }
    _.length === 0 && _.push(l.shift());
    const m = _.reduce((u, g) => u + Math.max(0, g.val), 0) * d;
    if (p >= y) {
      const u = m / y;
      let g = f;
      for (const S of _) {
        const x = Math.max(0, S.val) * d / u;
        s[S.i] = { x: c, y: g, w: u, h: x }, g += x;
      }
      c += u, p -= u;
    } else {
      const u = m / p;
      let g = c;
      for (const S of _) {
        const x = Math.max(0, S.val) * d / u;
        s[S.i] = { x: g, y: f, w: x, h: u }, g += x;
      }
      f += u, y -= u;
    }
  }
  return s;
}
function nl(e, t, n, r, a, i, d, s, l, c, f) {
  const p = e.colorFor, y = s.map((_) => ({
    cat: String(_[t.categoryProperty] ?? ""),
    val: Number(_[t.valueProperty]),
    item: _
  })), h = yS(y, r, a, i, d), b = t.childrenProperty ?? "children";
  y.forEach((_, v) => {
    const m = h[v], u = s[v]?.[b], g = Array.isArray(u) ? u : [];
    if (g.length > 0 && l < 8) {
      nl(
        e,
        t,
        n,
        m.x,
        m.y,
        m.w,
        m.h,
        g,
        l + 1,
        c,
        f
      );
      return;
    }
    const S = c.n++;
    f.push({
      ..._,
      color: p(n + S, t),
      x: m.x,
      y: m.y,
      w: m.w,
      h: m.h
    });
  });
}
function bS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, tooltipVisible: l, showTip: c, hideTip: f } = e, p = { n: 0 }, y = [];
  return nl(
    e,
    t,
    n,
    i.l,
    i.t,
    d,
    s,
    t.data,
    0,
    p,
    y
  ), Zt(
    n,
    t,
    y.map((h, b) => /* @__PURE__ */ M("g", { role: "listitem", children: [
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
          onMouseEnter: () => l && c(
            h.x + h.w / 2,
            h.y,
            `${t.title ?? h.cat}: ${h.val}`
          ),
          onMouseLeave: () => f(),
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
function xS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, tooltipVisible: l, showTip: c, hideTip: f } = e, p = r, y = Math.max(1, ...p.map((_) => Math.max(0, _.val))), h = s / Math.max(1, p.length), b = i.l + d / 2;
  return Zt(
    n,
    t,
    p.map((_, v) => {
      const u = Math.max(0, _.val) / y * d, g = p[v + 1], S = g ? Math.max(0, g.val) / y * d : u, x = i.t + v * h + 2, T = Math.max(4, h - 6);
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - u / 2} ${x} L ${b + u / 2} ${x} L ${b + S / 2} ${x + T} L ${b - S / 2} ${x + T} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && c(b, x, `${t.title ?? _.cat}: ${_.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: b,
            y: x + T / 2 + 4,
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
function vS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: d, showTip: s, hideTip: l, series: c } = e, { vertexFor: f } = _s(e), p = (b) => {
    let _ = 0;
    for (const v of c)
      if (v.type === "spider") {
        for (const m of v.data)
          if (String(m[v.categoryProperty] ?? "") === b) {
            const u = Number(m[v.valueProperty]);
            Number.isNaN(u) || (_ = Math.max(_, u));
          }
      }
    return _ || 1;
  }, y = (b) => r.find((_) => _.cat === b)?.val ?? 0, h = i.map((b, _) => {
    const v = Math.min(1, Math.max(0, y(b) / p(b))), [m, u] = f(_, v);
    return `${m},${u}`;
  }).join(" ");
  return Zt(
    n,
    t,
    /* @__PURE__ */ M(ot, { children: [
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
        const v = Math.min(1, Math.max(0, y(b) / p(b))), [m, u] = f(_, v), [g, S] = f(_, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          Eo(m, u, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: m,
              cy: u,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && s(g, S, `${t.title ?? b}: ${y(b)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const x = r.find((T) => T.cat === b);
                x && e.handleClick(t, x.cat, x.val, x.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: g,
              y: S + 16,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: y(b)
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: g,
              y: S + 4,
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
function wS(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, d = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((w) => ({
    source: String(w[d] ?? ""),
    target: String(w[s] ?? ""),
    value: Number(w[t.valueProperty]),
    item: w
  })).filter(
    (w) => w.source && w.target && w.source !== w.target && w.value > 0
  ), c = [];
  for (const w of l)
    c.includes(w.source) || c.push(w.source), c.includes(w.target) || c.push(w.target);
  const f = /* @__PURE__ */ new Map();
  for (const w of l)
    f.has(w.target) || f.set(w.target, []), f.get(w.target).push(w.source);
  const p = /* @__PURE__ */ new Map(), y = (w, N) => {
    if (p.has(w)) return p.get(w);
    if (N.has(w)) return 0;
    N.add(w);
    const I = f.get(w) ?? [], D = I.length === 0 ? 0 : 1 + Math.max(...I.map((P) => y(P, N)));
    return N.delete(w), p.set(w, D), D;
  }, h = /* @__PURE__ */ new Map();
  for (const w of c) h.set(w, y(w, /* @__PURE__ */ new Set()));
  const b = Math.max(0, ...h.values()), _ = Math.max(
    12,
    Math.min(28, a / Math.max(1, (b + 1) * 8))
  ), v = 10, m = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const w of l)
    u.set(w.source, (u.get(w.source) ?? 0) + w.value), m.set(w.target, (m.get(w.target) ?? 0) + w.value);
  const g = (w) => Math.max(m.get(w) ?? 0, u.get(w) ?? 0), S = /* @__PURE__ */ new Map();
  for (const w of c) {
    const N = h.get(w);
    S.set(N, (S.get(N) ?? 0) + g(w));
  }
  const x = Math.max(1, ...S.values()), T = (i - v * Math.max(0, c.length - 1)) / x, $ = (w) => b === 0 ? r.l : r.l + w / b * (a - _), O = [], C = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  for (const w of c) {
    const N = h.get(w);
    L.has(N) || L.set(N, []), L.get(N).push(w);
  }
  for (const [w, N] of [...L.entries()].sort(
    (I, D) => I[0] - D[0]
  )) {
    let I = r.t;
    for (const D of N) {
      const P = Math.max(4, g(D) * T), B = {
        id: D,
        depth: w,
        total: g(D),
        x: $(w),
        w: _,
        y: I,
        h: P,
        color: e.colorFor(n + O.length, t)
      };
      O.push(B), C.set(D, B), I += P + v;
    }
  }
  const A = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), k = [];
  for (const w of l) {
    const N = C.get(w.source), I = C.get(w.target), D = Math.max(1, w.value * T), P = N.y + (A.get(w.source) ?? 0), B = I.y + (z.get(w.target) ?? 0);
    A.set(w.source, (A.get(w.source) ?? 0) + D), z.set(w.target, (z.get(w.target) ?? 0) + D), k.push({ source: N, target: I, value: w.value, y0: P, y1: B, h: D });
  }
  return { nodes: O, links: k };
}
function kS(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function NS(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: d, hideTip: s } = e, { nodes: l, links: c } = wS(e, t, n);
  return Zt(
    n,
    t,
    /* @__PURE__ */ M(ot, { children: [
      c.map((f, p) => /* @__PURE__ */ o(
        "path",
        {
          d: kS(f),
          fill: f.source.color,
          fillOpacity: 0.45,
          stroke: "none",
          onMouseEnter: () => i && d(
            (f.source.x + f.source.w + f.target.x) / 2,
            (f.y0 + f.y1) / 2,
            `${f.source.id} → ${f.target.id}: ${f.value}`
          ),
          onMouseLeave: () => s(),
          onClick: () => e.handleClick(
            t,
            `${f.source.id} → ${f.target.id}`,
            f.value,
            {
              source: f.source.id,
              target: f.target.id,
              value: f.value
            }
          ),
          style: { cursor: "pointer" }
        },
        `link-${p}`
      )),
      l.map((f) => /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: f.x,
            y: f.y,
            width: f.w,
            height: f.h,
            fill: f.color,
            onMouseEnter: () => i && d(f.x + f.w / 2, f.y, `${f.id}: ${f.total}`),
            onMouseLeave: () => s(),
            onClick: () => e.handleClick(t, f.id, f.total, { id: f.id }),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ o(
          "text",
          {
            x: f.depth === 0 ? f.x - 6 : f.x + f.w + 6,
            y: f.y + f.h / 2 + 4,
            textAnchor: f.depth === 0 ? "end" : "start",
            className: Ze.dataLabel,
            children: f.id
          }
        )
      ] }, f.id))
    ] })
  );
}
function SS(e, t, n, r, a) {
  const { pad: i, plotW: d, plotH: s, tooltipVisible: l, showTip: c, hideTip: f } = e, p = r.map((L) => ({ x: Number(L.cat), y: L.val })).filter((L) => !Number.isNaN(L.x) && !Number.isNaN(L.y));
  if (p.length === 0) return null;
  let y = Math.min(...p.map((L) => L.x)), h = Math.max(...p.map((L) => L.x)), b = Math.min(...p.map((L) => L.y)), _ = Math.max(...p.map((L) => L.y));
  y === h && (y -= 0.5, h += 0.5), b === _ && (b -= 0.5, _ += 0.5);
  const v = Math.max(4, Math.floor(t.resolution ?? 28)), m = Array.from(
    { length: v + 1 },
    () => Array.from({ length: v + 1 }, () => 0)
  );
  for (const L of p) {
    const A = Math.max(
      0,
      Math.min(v, Math.round((L.x - y) / (h - y) * v))
    ), z = Math.max(
      0,
      Math.min(v, Math.round((L.y - b) / (_ - b) * v))
    );
    m[z][A] += 1;
  }
  let u = 0;
  for (const L of m) for (const A of L) u = Math.max(u, A);
  if (u <= 0) return null;
  const g = Math.max(1, Math.floor(t.levels ?? 5)), S = Array.from(
    { length: g },
    (L, A) => u * (A + 1) / (g + 1)
  ), x = d / v, T = s / v, $ = i.l, O = i.t, C = (L) => {
    const A = [], z = (w, N) => m[N]?.[w] ?? 0, k = (w, N, I, D) => D === I ? (w + N) / 2 : w + (L - I) / (D - I) * (N - w);
    for (let w = 0; w < v; w++)
      for (let N = 0; N < v; N++) {
        const I = z(N, w), D = z(N + 1, w), P = z(N, w + 1), B = z(N + 1, w + 1), W = $ + N * x, re = O + w * T, oe = k(W, W + x, I, D), ie = k(W, W + x, P, B), Q = k(re, re + T, I, P), Ie = k(re, re + T, D, B), J = (I >= L ? 8 : 0) | (D >= L ? 4 : 0) | (B >= L ? 2 : 0) | (P >= L ? 1 : 0), V = [oe, re], Y = [ie, re + T], he = [W, Q], ee = [W + x, Ie], me = (K, $e) => {
          A.push([K[0], K[1], $e[0], $e[1]]);
        };
        switch (J) {
          case 1:
          case 14:
            me(he, Y);
            break;
          case 2:
          case 13:
            me(Y, ee);
            break;
          case 3:
          case 12:
            me(he, ee);
            break;
          case 4:
          case 11:
            me(V, ee);
            break;
          case 6:
          case 9:
            me(V, Y);
            break;
          case 7:
          case 8:
            me(V, he);
            break;
          case 5: {
            (I + D + P + B) / 4 >= L ? (me(V, he), me(Y, ee)) : (me(V, ee), me(he, Y));
            break;
          }
          case 10: {
            (I + D + P + B) / 4 >= L ? (me(V, ee), me(he, Y)) : (me(V, he), me(Y, ee));
            break;
          }
        }
      }
    return A;
  };
  return Zt(
    n,
    t,
    S.map((L, A) => {
      const z = C(L);
      if (z.length === 0) return null;
      const k = z.map(([N, I, D, P]) => `M ${N} ${I} L ${D} ${P}`).join(" "), w = e.colorFor(n + A, t);
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o("path", { d: k, fill: "none", stroke: w, strokeWidth: 1.5 }),
        /* @__PURE__ */ o(
          "path",
          {
            d: k,
            fill: "none",
            stroke: "transparent",
            strokeWidth: 12,
            onMouseEnter: () => l && c(
              $ + d / 2,
              O + 8,
              `${t.title ?? "Density"} ≥ ${Math.round(L * 100) / 100}`
            ),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, `level ${A + 1}`, L, { threshold: L }),
            style: { cursor: "pointer" }
          }
        )
      ] }, A);
    })
  );
}
function $S(e, t, n) {
  const r = No(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return cS(e, t, n, r);
    case "scatter":
    case "bubble":
      return dS(e, t, n, r, a);
    case "line":
    case "area":
      return tl(e, t, n, r, a);
    case "gauge":
      return fS(e, t, n, r, a);
    case "radar":
      return _S(e, t, n, r, a);
    case "funnel":
      return hS(e, t, n, r, a);
    case "heatmap":
      return mS(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return gS(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return lS(e, t, n, a);
    case "treemap":
      return bS(e, t, n);
    case "pyramid":
      return xS(e, t, n, r, a);
    case "spider":
      return vS(e, t, n, r, a);
    case "sankey":
      return NS(e, t, n);
    case "contour":
      return SS(e, t, n, r);
    default:
      return uS(e, t, n, r, a);
  }
}
function gO({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: a,
  showLegend: i = !0,
  stacked100Percent: d = !1,
  tooltipVisible: s = !0,
  onSeriesClick: l,
  ariaLabel: c = "Chart",
  className: f
}) {
  const [p, y] = U(
    null
  ), h = Se(() => {
    const k = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const N of w.data) k.add(String(N[w.categoryProperty] ?? ""));
    return [...k];
  }, [e]), b = Se(() => {
    if (!d) return e;
    const k = /* @__PURE__ */ new Map();
    for (const w of e)
      if (w.stack)
        for (const N of w.data) {
          const I = `${w.stack}\0${String(N[w.categoryProperty] ?? "")}`, D = Number(N[w.valueProperty]);
          Number.isNaN(D) || k.set(I, (k.get(I) ?? 0) + D);
        }
    return e.map((w) => w.stack ? {
      ...w,
      data: w.data.map((N) => {
        const I = `${w.stack}\0${String(N[w.categoryProperty] ?? "")}`, D = k.get(I) ?? 0, P = Number(N[w.valueProperty]);
        return {
          ...N,
          [w.valueProperty]: D > 0 && !Number.isNaN(P) ? P / D * 100 : 0
        };
      })
    } : w);
  }, [e, d]), _ = Se(() => {
    const k = b.flatMap(
      (N) => N.data.flatMap((I) => [
        Number(I[N.valueProperty]),
        ...N.openProperty ? [Number(I[N.openProperty])] : [],
        ...N.highProperty ? [Number(I[N.highProperty])] : [],
        ...N.lowProperty ? [Number(I[N.lowProperty])] : [],
        ...N.closeProperty ? [Number(I[N.closeProperty])] : []
      ])
    ).filter((N) => !Number.isNaN(N)), w = /* @__PURE__ */ new Map();
    for (const N of b) {
      if (!N.stack) continue;
      let I = w.get(N.stack);
      I || w.set(N.stack, I = /* @__PURE__ */ new Map());
      for (const D of N.data) {
        const P = String(D[N.categoryProperty] ?? ""), B = Number(D[N.valueProperty]);
        Number.isNaN(B) || I.set(P, (I.get(P) ?? 0) + B);
      }
    }
    for (const N of w.values()) k.push(...N.values());
    return k;
  }, [b]), v = r?.min ?? (_.length ? Math.min(0, ..._) : 0), m = r?.max ?? (_.length ? Math.max(..._) : 10), u = Se(
    () => oS(v, m, r?.step),
    [v, m, r?.step]
  ), g = { t: 16, r: 16, b: 40, l: 56 }, S = t - g.l - g.r, x = n - g.t - g.b, T = (k) => g.l + k / Math.max(1, h.length - 1) * S, $ = (k) => g.t + (1 - (k - u.min) / (u.max - u.min || 1)) * x, O = (k, w) => w.color ?? ko[k % ko.length], C = e.flatMap(
    (k, w) => k.type === "pie" || k.type === "donut" ? No(k).map((N, I) => ({
      key: `${w}-${I}`,
      label: N.cat,
      color: Ja(k, I)
    })) : [
      {
        key: `${w}`,
        label: k.title ?? `Series ${w + 1}`,
        color: O(w, k)
      }
    ]
  ), L = e.some((k) => Qa.has(k.type)), A = e.some((k) => tS.has(k.type)), z = {
    categories: h,
    scale: u,
    pad: g,
    plotW: S,
    plotH: x,
    xFor: T,
    yFor: $,
    colorFor: O,
    tooltipVisible: s,
    percent: d,
    showTip: (k, w, N) => y({ x: k, y: w, text: N }),
    hideTip: () => y(null),
    handleClick: (k, w, N, I) => l?.({
      seriesTitle: k.title ?? "",
      category: w,
      value: N,
      item: I
    }),
    series: b
  };
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [Ze.root, f].filter(Boolean).join(" "),
      role: "img",
      "aria-label": c,
      "aria-describedby": `${c.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: Ze.svg,
            role: "presentation",
            children: [
              L && r?.gridlines !== !1 && u.ticks.map((k) => /* @__PURE__ */ o(
                "line",
                {
                  x1: g.l,
                  x2: g.l + S,
                  y1: $(k),
                  y2: $(k),
                  className: Ze.gridline
                },
                k
              )),
              A && a?.gridlines && h.map((k, w) => /* @__PURE__ */ o(
                "line",
                {
                  x1: T(w),
                  x2: T(w),
                  y1: g.t,
                  y2: g.t + x,
                  className: Ze.gridline
                },
                w
              )),
              L && u.ticks.map((k) => /* @__PURE__ */ o(
                "text",
                {
                  x: g.l - 8,
                  y: $(k) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: d ? `${k}%` : k
                },
                k
              )),
              A && h.map((k, w) => /* @__PURE__ */ o(
                "text",
                {
                  x: T(w),
                  y: g.t + x + 16,
                  textAnchor: "middle",
                  className: Ze.tickLabel,
                  children: k
                },
                k
              )),
              L && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: g.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${g.t + x / 2})`,
                  className: Ze.axisTitle,
                  children: r.title
                }
              ),
              A && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: g.l + S / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Ze.axisTitle,
                  children: a.title
                }
              ),
              (e.some((k) => k.type === "radar") || e.some((k) => k.type === "spider")) && pS(z),
              b.map((k, w) => $S(z, k, w))
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
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: C.map((k) => /* @__PURE__ */ M("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: k.color },
              "aria-hidden": "true"
            }
          ),
          k.label
        ] }, k.key)) }),
        /* @__PURE__ */ M(
          "table",
          {
            className: Ze.visuallyHidden,
            id: `${c.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: c }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (k) => k.data.map((w, N) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ o("td", { children: k.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: k.rowProperty ? `${String(w[k.rowProperty] ?? "")} / ${String(w[k.categoryProperty] ?? "")}` : String(w[k.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(w[k.valueProperty] ?? "") })
                ] }, `${k.title}-${N}`))
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
  return Ne(() => {
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
  i$ as AIChat,
  h_ as ALERT_ICON,
  C$ as Accordion,
  _$ as Alert,
  s$ as ArcGauge,
  D$ as AutoComplete,
  b$ as AutoGrid,
  E$ as Avatar,
  CS as Badge,
  mO as Barcode,
  v$ as Body,
  nO as Breadcrumb,
  cn as Button,
  TS as Card,
  lO as Carousel,
  gO as Chart,
  iu as CheckBox,
  z$ as CheckBoxList,
  F$ as ColorPicker,
  g$ as Column,
  Z$ as ContextMenuProvider,
  Mr as DEFAULT_OPERATOR_BY_TYPE,
  yv as DEFAULT_PALETTE,
  VS as DataFilter,
  YS as DataGrid,
  XS as DataList,
  H$ as DatePicker,
  Ma as Dialog,
  t$ as DialogProvider,
  A$ as DropDown,
  Y$ as DropZone,
  IS as EmptyState,
  Oa as FILTER_OPERATORS,
  tO as FabMenu,
  ir as Field,
  LS as Fieldset,
  o0 as Footer,
  PS as Form,
  zS as FormField,
  uO as Gantt,
  l0 as Header,
  u$ as HtmlEditor,
  Ee as Icon,
  no as Input,
  ZS as Label,
  x$ as Layout,
  l$ as LinearGauge,
  rO as Link,
  I$ as ListBox,
  bO as LiveRegion,
  c$ as Login,
  d$ as Markdown,
  j$ as Mask,
  yO as MediaQuery,
  Ow as Menu,
  Ya as MenuItem,
  B$ as Numeric,
  qc as Pager,
  Q$ as PanelMenu,
  J$ as PanelMenuItem,
  Pf as Password,
  cO as PickList,
  fO as Pivot,
  p$ as PopupProvider,
  eO as ProfileMenu,
  k$ as Progress,
  hO as QRCode,
  a$ as RadialGauge,
  L$ as RadioButtonList,
  o$ as RangeNavigator,
  U$ as Rating,
  m$ as Row,
  dO as Scheduler,
  K$ as SecurityCode,
  wr as Select,
  P$ as SelectBar,
  b0 as Sidebar,
  w$ as SidebarToggle,
  G$ as SignaturePad,
  h$ as Skeleton,
  q$ as Slider,
  R$ as SplitButton,
  sO as Splitter,
  y$ as Stack,
  AS as Stat,
  oO as Steps,
  JS as Switch,
  DS as Table,
  T$ as Tabs,
  Aa as Text,
  M$ as TextArea,
  cs as TextBox,
  N$ as ThemeToggle,
  W$ as TimeSpanPicker,
  pO as Timeline,
  r$ as ToastProvider,
  aO as Toc,
  L0 as ToggleButton,
  QS as Tooltip,
  iO as Tree,
  V$ as Upload,
  _O as VirtualGrid,
  Jc as aggregateValue,
  Ta as applyFilters,
  Zc as applyGridState,
  Ts as collectGroupKeys,
  ar as columnValue,
  qS as compare,
  KS as custom,
  Vc as cycleSort,
  Ms as defaultOperatorForType,
  jS as email,
  fa as formatMasked,
  yo as formatValue,
  $$ as getAppearance,
  go as getByPath,
  S$ as getTheme,
  Wc as groupItems,
  MS as iconNames,
  Ea as matchesFilters,
  HS as maxLength,
  FS as minLength,
  Xc as paginate,
  BS as pattern,
  US as range,
  $p as renderMarkdown,
  RS as required,
  WS as requiredTrue,
  Sa as resolveVariant,
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
  X$ as useContextMenu,
  e$ as useDialog,
  Zi as useFormContext,
  GS as useFormField,
  xO as useLiveRegion,
  Oo as useMediaQuery,
  f$ as usePopup,
  O$ as useThemeService,
  n$ as useToast
};
