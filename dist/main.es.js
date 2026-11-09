import { jsx as o, jsxs as D, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as at, useId as ct, isValidElement as Kt, cloneElement as as, useState as q, useRef as ie, useEffect as Ne, useCallback as U, useMemo as Se, useContext as Fn, createContext as dr, Fragment as ls, useLayoutEffect as Go, useImperativeHandle as $o, Children as Zr } from "react";
function Xr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const ll = "_button_eyvws_1", il = "_filled_eyvws_36", cl = "_flat_eyvws_55", dl = "_outlined_eyvws_58", ul = "_text_eyvws_63", fl = "_loading_eyvws_506", pl = "_spinner_eyvws_509", _l = "_xs_eyvws_525", hl = "_sm_eyvws_531", ml = "_md_eyvws_537", gl = "_lg_eyvws_543", yl = "_xl_eyvws_549", bl = "_iconOnly_eyvws_555", xl = "_fullWidth_eyvws_585", An = {
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
const dn = at(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: a,
      shade: i = "default",
      size: c = "md",
      fullWidth: s = !1,
      iconOnly: l = !1,
      loading: d = !1,
      visible: f = !0,
      className: p,
      disabled: g,
      children: h,
      ...b
    } = t;
    if (f === !1) return null;
    const _ = vl(r, a), m = _.style === "light" || _.style === "dark" ? null : Xr(i), u = [
      An.button,
      An[_.variant],
      An[`style-${_.style}`],
      m ? An[m] : null,
      An[c],
      s ? An.fullWidth : null,
      l ? An.iconOnly : null,
      d ? An.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      p
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ D(ot, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: An.spinner }) : null,
      h
    ] }), k = t.href;
    if (k != null) {
      const { onClick: w, ...$ } = b, E = g || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: k,
          className: u,
          "aria-disabled": E || void 0,
          "aria-busy": d || void 0,
          onClick: (P) => {
            if (E) {
              P.preventDefault();
              return;
            }
            w?.(P);
          },
          ...$,
          children: y
        }
      );
    }
    const { type: v = "button", ...O } = b;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: u,
        disabled: g || d,
        "aria-busy": d || void 0,
        ...O,
        children: y
      }
    );
  }
), wl = "_card_4vcae_1", kl = "_elevated_4vcae_8", Nl = "_filled_4vcae_13", Sl = "_outlined_4vcae_18", $l = "_interactive_4vcae_22", Ol = "_text_4vcae_30", El = "_header_4vcae_46", Tl = "_body_4vcae_53", Cl = "_footer_4vcae_63", Er = {
  card: wl,
  elevated: kl,
  filled: Nl,
  outlined: Sl,
  interactive: $l,
  text: Ol,
  header: El,
  body: Tl,
  footer: Cl
}, MS = at(function({
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
  const f = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "div",
      {
        ref: d,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (p) => {
          s?.(p), !(!f || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
        },
        className: [Er.card, Er[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Er.header, children: n }),
          /* @__PURE__ */ o("div", { className: Er.body, children: c }),
          r != null && /* @__PURE__ */ o("div", { className: Er.footer, children: r })
        ]
      }
    )
  );
});
function Sa(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Ml = "_badge_1fy6d_1", Al = "_xs_1fy6d_21", Dl = "_sm_1fy6d_26", Il = "_md_1fy6d_31", zl = "_lg_1fy6d_36", Ll = "_xl_1fy6d_41", Pl = "_neutral_1fy6d_47", Rl = "_primary_1fy6d_52", jl = "_secondary_1fy6d_61", Bl = "_light_1fy6d_66", Fl = "_base_1fy6d_71", Hl = "_dark_1fy6d_76", Ul = "_info_1fy6d_81", ql = "_success_1fy6d_86", Wl = "_warning_1fy6d_95", Kl = "_danger_1fy6d_104", Gl = "_filled_1fy6d_111", Vl = "_outlined_1fy6d_161", Yl = "_text_1fy6d_213", Tr = {
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
}, AS = at(function({
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
  const f = t, p = Sa(n, "filled"), g = Xr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Tr.badge,
        Tr[a],
        Tr[f],
        Tr[p],
        g ? Tr[g] : null,
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
}, DS = [
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
], Ee = at(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
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
}), ni = "_stat_sjin9_1", ri = "_label_sjin9_8", oi = "_row_sjin9_16", si = "_value_sjin9_22", ai = "_delta_sjin9_28", li = "_success_sjin9_33", ii = "_danger_sjin9_37", ci = "_neutral_sjin9_41", di = "_hint_sjin9_45", er = {
  stat: ni,
  label: ri,
  row: oi,
  value: si,
  delta: ai,
  success: li,
  danger: ii,
  neutral: ci,
  hint: di
}, IS = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      className: [er.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: er.label, children: t }),
        /* @__PURE__ */ D("div", { className: er.row, children: [
          /* @__PURE__ */ o("div", { className: er.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [er.delta, er[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: er.hint, children: i })
      ]
    }
  );
}), ui = "_wrap_ipozk_1", fi = "_table_ipozk_8", pi = "_caption_ipozk_14", _i = "_none_ipozk_51", hi = "_horizontal_ipozk_57", mi = "_vertical_ipozk_67", gi = "_alternating_ipozk_85", yi = "_start_ipozk_89", bi = "_center_ipozk_93", xi = "_end_ipozk_97", vi = "_empty_ipozk_101", Un = {
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
function zS({
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
  const d = i === "default" || i === "both" ? "" : Un[i];
  return /* @__PURE__ */ D("div", { className: [Un.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "table",
      {
        className: [
          Un.table,
          d,
          c ? Un.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          a != null && /* @__PURE__ */ o("caption", { className: Un.caption, children: a }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Un[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((p) => /* @__PURE__ */ o(
            "td",
            {
              className: p.align != null ? Un[p.align] : void 0,
              children: p.render != null ? p.render(f) : f[p.key]
            },
            p.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Un.empty, children: r })
  ] });
}
const wi = "_emptyState_1swxw_1", ki = "_icon_1swxw_13", Ni = "_title_1swxw_18", Si = "_description_1swxw_24", $i = "_action_1swxw_30", Cr = {
  emptyState: wi,
  icon: ki,
  title: Ni,
  description: Si,
  action: $i
};
function LS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [Cr.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Cr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Cr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Cr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Cr.action, children: r })
  ] });
}
const Oi = "_field_149oz_1", Ei = "_label_149oz_8", Ti = "_required_149oz_14", Ci = "_hint_149oz_19", Mi = "_error_149oz_24", Mr = {
  field: Oi,
  label: Ei,
  required: Ti,
  hint: Ci,
  error: Mi
};
function cr({
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
  const d = r ?? a, f = ct(), p = ct(), g = ct();
  if (l === !1) return null;
  const h = i != null ? p : d != null ? g : null, b = typeof c == "function" ? c({ inputId: f, hintId: g, errorId: p }) : c, _ = Kt(b) && typeof b.props.id == "string" ? b.props.id : void 0, x = _ ?? t ?? f, m = Kt(b) && (h != null || _ == null && typeof b.type == "string"), u = _ != null || t != null || m, y = m && Kt(b) ? as(b, {
    id: x,
    "aria-describedby": h != null ? [
      b.props["aria-describedby"],
      h
    ].filter((k) => typeof k == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ D("div", { className: [Mr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Mr.label,
        htmlFor: u ? x : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Mr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    i != null ? /* @__PURE__ */ o("div", { id: p, className: Mr.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: g, className: Mr.hint, children: d }) : null
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
function PS({
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
  className: f,
  visible: p = !0
}) {
  const g = ct(), h = ct();
  if (p === !1) return null;
  const b = a ?? g, _ = typeof d == "function" ? d({
    inputId: b
  }) : d, x = Kt(_) ? _.type : null, m = typeof x == "string", u = Kt(_) && typeof x != "symbol", y = Kt(_) ? _.props : null, k = typeof y?.id == "string" ? y.id : void 0, v = m && Kt(_) ? _.type.toLowerCase() : null, O = v != null && (v === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), w = u && (r != null || s || k == null && O), $ = k != null || a != null || w, E = v === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, P = v === "textarea" || v === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), I = w && Kt(_) ? as(
    _,
    {
      id: k ?? b,
      ...i && P && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          h
        ].filter((M) => typeof M == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : _, z = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: $n.label,
      htmlFor: $ ? k ?? b : void 0,
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
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : z,
        /* @__PURE__ */ D("div", { className: $n.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: $n.start, children: t }),
          I,
          i ? z : null,
          n != null && /* @__PURE__ */ o("div", { className: $n.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: h, className: $n.helper, children: r })
      ]
    }
  );
}
const Ui = "_fieldset_8x01p_1", qi = "_legend_8x01p_11", Wi = "_legendText_8x01p_20", Ki = "_toggle_8x01p_24", Gi = "_content_8x01p_45", Vi = "_summary_8x01p_49", tr = {
  fieldset: Ui,
  legend: qi,
  legendText: Wi,
  toggle: Ki,
  content: Gi,
  summary: Vi
};
function RS({
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
  expandAriaLabel: f,
  collapseAriaLabel: p,
  onExpand: g,
  onCollapse: h,
  children: b,
  className: _,
  visible: x = !0
}) {
  const m = ct(), [u, y] = q(c);
  if (x === !1) return null;
  const k = i ?? u, v = a ? `${m}-content` : void 0, O = () => {
    const z = !k;
    i === void 0 && y(z), z ? h?.() : g?.();
  }, w = a || e != null || n != null || t != null, $ = a ? k : !1, E = a && k && s != null, P = $ ? l ?? "Expand" : d ?? "Collapse", I = $ ? f ?? "Expand" : p ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [tr.fieldset, _].filter(Boolean).join(" "),
      children: [
        w ? /* @__PURE__ */ o("legend", { className: tr.legend, children: a ? /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: tr.toggle,
              title: P,
              "aria-label": e == null ? I : void 0,
              "aria-expanded": !$,
              "aria-controls": v,
              onClick: O,
              children: [
                /* @__PURE__ */ o(
                  Ee,
                  {
                    icon: $ ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Ee, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: tr.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(ot, { children: [
          n != null && /* @__PURE__ */ o(Ee, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: tr.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: tr.content,
            id: v,
            hidden: $,
            children: b
          }
        ),
        E ? /* @__PURE__ */ o("div", { className: tr.summary, children: s }) : null
      ]
    }
  );
}
const Yi = "_form_abp5n_1", Xi = {
  form: Yi
}, $a = dr(null);
function Zi() {
  const e = Fn($a);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function jS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = q({}), [d, f] = q(0), p = ie(s);
  Ne(() => {
    p.current = s;
  });
  const g = U((y) => {
    l(
      (k) => k[y.name] === y ? k : { ...k, [y.name]: y }
    );
  }, []), h = U((y) => {
    l((k) => {
      if (!(y in k)) return k;
      const v = { ...k };
      return delete v[y], v;
    });
  }, []), b = U(() => {
    const y = {};
    for (const k of Object.values(p.current)) {
      const v = k.validate();
      v.length > 0 && (y[k.name] = v);
    }
    return y;
  }, []), _ = U(() => {
    const y = b();
    f((k) => k + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [b, e, t, n]), x = (y) => {
    r != null && a != null || (y.preventDefault(), _());
  }, m = Se(
    () => ({ registerField: g, unregisterField: h, submit: _, submitCount: d }),
    [g, h, _, d]
  ), u = [Xi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o($a.Provider, { value: m, children: /* @__PURE__ */ o(
    "form",
    {
      className: u,
      onSubmit: x,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const ur = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", BS = (e = "Required") => (t) => ur(t) ? e : null, FS = (e = "Invalid email") => (t) => ur(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, HS = (e, t = "Invalid format") => (n) => {
  if (ur(n)) return null;
  const r = e.lastIndex;
  e.lastIndex = 0;
  const a = e.test(String(n));
  return e.lastIndex = r, a ? null : t;
}, US = (e, t = `Minimum ${e} characters`) => (n) => ur(n) || String(n).length >= e ? null : t, qS = (e, t = `Maximum ${e} characters`) => (n) => ur(n) || String(n).length <= e ? null : t, WS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ur(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, KS = (e, t = "Values do not match") => (n, r) => {
  if (ur(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, GS = (e = "Required") => (t) => t === !0 ? null : e, VS = (e) => (t, n) => e(t, n);
function ws(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function YS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Zi(), [i, c] = q(t?.initialValue), [s, l] = q(!1), [d, f] = q(!1), p = ie(() => []);
  Ne(() => {
    p.current = () => ws(t?.validate ?? [], i);
  }), Ne(() => (n({ name: e, validate: () => p.current() }), () => r(e)), [e, n, r]);
  const [g, h] = q(a);
  a !== g && (h(a), a > 0 && (l(!0), f(!1)));
  const b = s && !d ? ws(t?.validate ?? [], i) : [];
  return { value: i, setValue: (x) => {
    c(x), f(!0);
  }, errors: b };
}
const Ji = "_select_1xe98_1", Qi = "_invalid_1xe98_33", ec = "_xs_1xe98_40", tc = "_sm_1xe98_48", nc = "_md_1xe98_56", rc = "_lg_1xe98_62", oc = "_xl_1xe98_68", zo = {
  select: Ji,
  invalid: Qi,
  xs: ec,
  sm: tc,
  md: nc,
  lg: rc,
  xl: oc
}, kr = at(
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...c }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          zo.select,
          zo[t],
          n ? zo.invalid : null,
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
], Ar = {
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
function Kr(e, t) {
  const n = ks(e), r = ks(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function Oo(e) {
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
  if (!Oo(e)) return a;
  const i = Ss(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function Ss(e, t, n, r) {
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
function sn(e) {
  return typeof e == "string" ? `"${lc(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(sn).join(", ")}]` : `"${String(e)}"`;
}
function ic(e) {
  const t = (a, i) => {
    switch (a) {
      case "Equals":
        return `${e.property}.Equals(${sn(i)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${sn(i)})`;
      case "LessThan":
        return `${e.property}.LessThan(${sn(i)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${sn(i)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${sn(i)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${sn(i)})`;
      case "Contains":
        return `${e.property}.Contains(${sn(i)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${sn(i)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${sn(i)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${sn(i)})`;
      case "In":
        return `${e.property}.In(${sn(i)})`;
      case "NotIn":
        return `!${e.property}.In(${sn(i)})`;
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
  if (!Oo(e))
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
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${dc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, f) => {
    const p = typeof f == "string", g = p && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${g} ${uc[d]} ${p && r ? a(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(f))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(f))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${g} in (${f.map((h) => i(h)).join(", ")})` : `${g} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${g} in (${f.map((h) => i(h)).join(", ")}))` : `not(${g} in (${i(f)}))`;
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
  if (!Oo(e))
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
      const i = a.sortOrder === "Ascending" ? 1 : -1, c = Kr(
        go(n, a.property),
        go(r, a.property)
      );
      if (c !== 0) return c * i;
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
}, Dr = [
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
      kr,
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
      kr,
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
function XS({
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
  const [d, f] = q(
    () => r != null && r.length > 0 ? r.map((m, u) => ({ id: u, ...m })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Ar[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), p = (m, u) => {
    f(
      (y) => y.map((k) => k.id === m ? { ...k, ...u } : k)
    );
  }, g = () => {
    const m = d[d.length - 1], u = Math.max(0, ...d.map((k) => k.id)) + 1, y = e[0];
    f((k) => [
      ...k,
      {
        id: u,
        property: m?.property ?? y?.name ?? "",
        operator: Ar[e.find(
          (v) => v.name === (m?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (m) => {
    f(
      (u) => u.length > 1 ? u.filter((y) => y.id !== m) : u
    );
  }, b = Se(() => {
    const m = [];
    for (const u of d) {
      if (u.property === "" || (u.value == null || u.value === "") && !Dr.includes(u.operator)) continue;
      const k = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: v } = u;
      v != null && Oo(u) && (k.secondOperator = v, k.secondValue = u.secondValue, k.logicalOperator = u.logicalOperator ?? "And"), m.push(k);
    }
    return m;
  }, [d]), _ = Se(() => s == null || b.length === 0 ? s : Ta(s, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [s, b, t, n]);
  Ne(() => {
    c != null && s != null && c(_ ?? []);
  }, [_]);
  const x = (m) => e.find((u) => u.name === m) ?? { name: m, type: "string" };
  return /* @__PURE__ */ D("div", { className: [vt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: vt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((m, u) => {
      const y = x(m.property), k = a ? [Ar[y.type ?? "string"]] : Oa, v = !Dr.includes(m.operator), O = m.secondOperator != null;
      return /* @__PURE__ */ D(ls, { children: [
        /* @__PURE__ */ D("div", { className: vt.row, children: [
          u > 0 ? /* @__PURE__ */ o("span", { className: vt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            kr,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: vt.property,
              value: m.property,
              onChange: (w) => {
                const $ = e.find(
                  (E) => E.name === w.target.value
                );
                p(m.id, {
                  property: w.target.value,
                  operator: Ar[$?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((w) => ({
                value: w.name,
                label: w.title ?? w.name
              }))
            }
          ),
          /* @__PURE__ */ o(
            kr,
            {
              "aria-label": `Condition ${u + 1} operator`,
              className: vt.operator,
              value: m.operator,
              onChange: (w) => {
                const $ = w.target.value;
                p(
                  m.id,
                  Dr.includes($) ? {
                    operator: $,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: $ }
                );
              },
              options: k.map((w) => ({
                value: w,
                label: $s[w]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            Os,
            {
              property: y,
              value: m.value,
              onChange: (w) => p(m.id, { value: w })
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
        v ? O ? /* @__PURE__ */ D(
          "div",
          {
            className: [vt.row, vt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                kr,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: vt.joinSelect,
                  value: m.logicalOperator ?? "And",
                  onChange: (w) => p(m.id, {
                    logicalOperator: w.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                kr,
                {
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: vt.operator,
                  value: m.secondOperator,
                  onChange: (w) => {
                    const $ = w.target.value;
                    p(
                      m.id,
                      Dr.includes($) ? { secondOperator: $, secondValue: void 0 } : { secondOperator: $ }
                    );
                  },
                  options: k.map((w) => ({
                    value: w,
                    label: $s[w]
                  }))
                }
              ),
              m.secondOperator == null || !Dr.includes(m.secondOperator) ? /* @__PURE__ */ o(
                Os,
                {
                  property: y,
                  value: m.secondValue,
                  onChange: (w) => p(m.id, { secondValue: w })
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
              secondOperator: Ar[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, m.id);
    }) }),
    /* @__PURE__ */ D("div", { className: vt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: vt.add, onClick: g, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: vt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ D("span", { className: vt.summary, "aria-live": "polite", children: [
        _?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Mc = "_pager_1du31_1", Ac = "_alignLeft_1du31_10", Dc = "_alignCenter_1du31_14", Ic = "_alignRight_1du31_18", zc = "_alignJustify_1du31_22", Lc = "_summary_1du31_26", Pc = "_controls_1du31_31", Rc = "_button_1du31_37", jc = "_active_1du31_73", Bc = "_ellipsis_1du31_85", Fc = "_size_1du31_91", Ut = {
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
  const c = [];
  for (let s = a; s <= i; s++) c.push(s);
  return a > 2 && c.unshift("ellipsis"), a > 1 && c.unshift(1), i < t - 1 && c.push("ellipsis"), i < t && c.push(t), c;
}
function qc({
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
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: p,
  pageSizeText: g = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: _ = "Next page",
  lastPageTitle: x = "Last page",
  pageTitleFormat: m = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: y,
  onPageSizeChange: k,
  ariaLabel: v = "Pagination",
  className: O,
  visible: w = !0
}) {
  const $ = n ?? r, [E, P] = q($), I = n !== void 0, z = I ? $ : E, M = Math.max(1, Math.ceil(e / t)), N = Math.min(Math.max(1, z), M), S = l ?? !0, R = c || M > 1, C = Uc(N, M, i), A = U(
    (ne) => {
      const le = Math.min(Math.max(1, ne), M);
      I || P(le);
      const Q = (le - 1) * t;
      y?.({
        page: le,
        skip: Q,
        top: t,
        pageCount: M,
        pageSize: t
      });
    },
    [I, y, M, t]
  ), L = s === "center" ? Ut.alignCenter : s === "right" ? Ut.alignRight : s === "justify" ? Ut.alignJustify : Ut.alignLeft, F = {
    count: e,
    pageNumber: N,
    pageSize: t,
    pageCount: M
  }, ee = (ne) => {
    const le = Array.from(
      ne.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), Q = le.indexOf(document.activeElement);
    Q !== -1 && (ne.key === "ArrowRight" || ne.key === "ArrowDown" ? (ne.preventDefault(), (le[Q + 1] ?? le[0])?.focus()) : ne.key === "ArrowLeft" || ne.key === "ArrowUp" ? (ne.preventDefault(), (le[Q - 1] ?? le[le.length - 1])?.focus()) : ne.key === "Home" ? (ne.preventDefault(), le[0]?.focus()) : ne.key === "End" && (ne.preventDefault(), le[le.length - 1]?.focus()));
  };
  return w === !1 || !R ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ut.pager, L, O].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        S && /* @__PURE__ */ o("span", { className: Ut.summary, "aria-live": "polite", children: p ? p(F) : Hc(f, N, M, e) }),
        /* @__PURE__ */ D(
          "div",
          {
            className: Ut.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: ee,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N <= 1,
                  onClick: () => A(1),
                  "aria-label": h,
                  title: h,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N <= 1,
                  onClick: () => A(N - 1),
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              C.map(
                (ne, le) => ne === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ut.ellipsis, "aria-hidden": "true", children: "…" }, `e${le}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": ne,
                    className: [Ut.button, ne === N ? Ut.active : ""].filter(Boolean).join(" "),
                    "aria-current": ne === N ? "page" : void 0,
                    "aria-label": Es(u, ne),
                    title: Es(m, ne),
                    onClick: () => A(ne),
                    children: ne
                  },
                  ne
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N >= M,
                  onClick: () => A(N + 1),
                  "aria-label": _,
                  title: _,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N >= M,
                  onClick: () => A(M),
                  "aria-label": x,
                  title: x,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ D("label", { className: Ut.size, children: [
          /* @__PURE__ */ o("span", { children: g }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (ne) => k?.(Number(ne.target.value)),
              "aria-label": g,
              children: a.map((ne) => /* @__PURE__ */ o("option", { value: ne, children: ne }, ne))
            }
          )
        ] })
      ]
    }
  );
}
function Vo(e) {
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
  const i = (s) => n.find((l) => l.property === s), c = (s, l, d) => {
    const f = t[l];
    if (f === void 0)
      return s.map((_) => ({ type: "row", row: _ }));
    const p = i(f), g = /* @__PURE__ */ new Map(), h = [];
    s.forEach((_) => {
      const x = String(a(_, f) ?? ""), m = g.get(x);
      m ? m.push(_) : (g.set(x, [_]), h.push(x));
    });
    const b = [];
    return h.forEach((_) => {
      const x = g.get(_), m = [...d, _].join(Ca), u = x[0], y = u !== void 0 ? a(u, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: m,
          display: yo(y, p?.format),
          property: f,
          title: p?.title ?? f,
          count: x.length,
          level: l
        }
      }), r.has(m) && b.push(...c(x, l + 1, [...d, _]));
    }), b;
  };
  return c(e, 0, []);
}
function Ts(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), f = [];
    i.forEach((p) => {
      const g = String(n(p, l) ?? ""), h = d.get(g);
      h ? h.push(p) : (d.set(g, [p]), f.push(g));
    }), f.forEach((p) => {
      const g = [...s, p].join(Ca);
      r.add(g), a(d.get(p), c + 1, [...s, p]);
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
function lr(e, t) {
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
function Qc(e, t, n = lr) {
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
function ZS({
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
  pageSize: f = 10,
  pageSizeOptions: p,
  pageNumbersCount: g = 5,
  pagerPosition: h = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: _ = !0,
  selectionMode: x = "None",
  selectedKeys: m,
  onSelectionChange: u,
  showColumnPicker: y = !1,
  columnPickerText: k = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: O = !1,
  allowGrouping: w = !1,
  groupPanelText: $ = "Drag a column header here to group",
  groupExpanded: E = !0,
  aggregates: P,
  showExportButton: I = !1,
  exportFileName: z = "grid-data",
  serverMode: M = !1,
  totalCount: N,
  onRangeChange: S,
  virtualize: R = !1,
  virtualRowHeight: C = 40,
  virtualHeight: A = 480,
  editMode: L = "None",
  allowRowCreate: F = !1,
  onRowUpdate: ee,
  onRowCreate: ne,
  onRowDelete: le,
  isLoading: Q = !1,
  empty: Ie = "No records found",
  ariaLabel: J,
  className: V,
  onRowClick: Y
}) {
  const he = J != null ? `${J} ` : "", [te, me] = q([]), [K, $e] = q(
    /* @__PURE__ */ new Map()
  ), [se, Ae] = q(1), [ye, We] = q(f), [Je, Ge] = q(
    () => e.map((W, G) => to(W, G))
  ), [Qe, He] = q(
    () => new Set(
      e.map((W, G) => W.visible !== !1 ? to(W, G) : "").filter(Boolean)
    )
  ), [gt, re] = q({}), [Te, lt] = q(!1), [ze, st] = q([]), [Xe, Tt] = q(
    null
  ), [yt, it] = q(null), [ft, Ve] = q({}), [Ct, ae] = q(0), [Le, wt] = q(A), Mt = ie(null), bt = ie(null), j = Se(() => {
    const W = /* @__PURE__ */ new Map();
    return e.forEach((G, be) => W.set(to(G, be), G)), W;
  }, [e]), X = Se(
    () => Je.filter((W) => Qe.has(W)).map((W) => ({ key: W, column: j.get(W) })).filter(
      (W) => W.column != null
    ),
    [Je, Qe, j]
  ), ge = Se(
    () => Kc(X, gt),
    [X, gt]
  ), we = L !== "None" || le != null || F, fe = Se(() => {
    if (M) {
      const W = N ?? t.length, G = Math.max(1, Math.ceil(W / ye));
      return {
        items: [...t],
        filtered: [...t],
        total: W,
        pageCount: G,
        pageNumber: se,
        pageSize: ye,
        sorts: te,
        filters: K
      };
    }
    return Zc(
      t,
      {
        sorts: te,
        filters: K,
        pageNumber: se,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: d ? ye : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: l,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((W) => W.type != null && W.property != null).map((W) => [
            W.property,
            W.type
          ])
        )
      }
    );
  }, [
    t,
    te,
    K,
    se,
    ye,
    l,
    s,
    e,
    M,
    N,
    d
  ]), H = ie(S);
  Ne(() => {
    H.current = S;
  });
  const pe = Se(
    () => [...K.entries()].filter(([, W]) => W.value !== "" && W.value !== void 0).map(([W, G]) => ({
      property: W,
      operator: G.operator ?? Ms(
        e.find((be) => be.property === W)?.type ?? "string"
      ),
      value: G.value ?? ""
    })),
    [K, e]
  );
  Ne(() => {
    !M || H.current == null || H.current({
      start: (se - 1) * ye,
      count: ye,
      pageNumber: se,
      pageSize: ye,
      sorts: te,
      filters: pe,
      logicalOperator: l
    });
  }, [
    M,
    se,
    ye,
    te,
    pe,
    l
  ]);
  const Re = Se(() => new Set(ze), [ze]), De = Se(() => Xe || (E ? Ts(fe.items, ze, lr) : /* @__PURE__ */ new Set()), [Xe, E, fe.items, ze]), It = Se(
    () => Wc(fe.items, ze, e, De, lr),
    [fe.items, ze, e, De]
  ), et = Se(
    () => ze.length > 0 ? X.filter(
      (W) => W.column.property == null || !Re.has(W.column.property)
    ) : X,
    [X, ze, Re]
  ), gn = (W) => {
    W !== "" && me(Vc(te, W, { multi: a }));
  }, Sn = (W, G) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(W, G), xe;
    }), Ae(1);
  }, Z = (W) => {
    We(W), Ae(1);
  }, ce = (W) => {
    if (x === "None") return;
    const G = n(W), be = m ?? [];
    let xe;
    x === "Single" ? xe = be.length === 1 && be[0] === G ? [] : [G] : xe = be.includes(G) ? be.filter((nt) => nt !== G) : [...be, G], u?.(xe);
  }, _e = (W) => {
    Y?.(W);
  }, ke = (W, G, be) => {
    Mt.current = { key: W, startX: G, startWidth: be };
  }, ve = (W) => {
    const G = Mt.current;
    if (!G) return;
    const be = W - G.startX, xe = Math.max(48, G.startWidth + be);
    re((nt) => ({ ...nt, [G.key]: `${xe}px` }));
  }, Me = () => {
    Mt.current = null;
  }, Ye = (W) => {
    bt.current = W;
  }, Fe = (W) => {
    const G = bt.current;
    bt.current = null, !(!G || G === W) && Ge((be) => {
      const xe = [...be], nt = xe.indexOf(G), zt = xe.indexOf(W);
      return nt < 0 || zt < 0 ? be : (xe.splice(nt, 1), xe.splice(zt, 0, G), xe);
    });
  }, dt = (W) => {
    He((G) => {
      const be = new Set(G);
      return be.has(W) ? be.delete(W) : be.add(W), be;
    });
  }, xt = () => {
    const W = bt.current;
    if (bt.current = null, !W || !w) return;
    const be = j.get(W)?.property;
    be && (st(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Tt(null));
  }, je = (W) => {
    st((G) => G.filter((be) => be !== W)), Tt(null);
  }, tt = (W) => {
    Tt((G) => {
      const be = G ?? (E ? Ts(fe.items, ze, lr) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(W) ? xe.delete(W) : xe.add(W), xe;
    });
  }, ut = (W) => {
    const G = {};
    e.forEach((be) => {
      be.property && (G[be.property] = lr(W, be.property));
    }), Ve(G), it(String(n(W)));
  }, Qt = () => {
    const W = {};
    e.forEach((G) => {
      G.property && G.type === "boolean" && (W[G.property] = !1);
    }), Ve(W), it("__new__");
  }, At = () => {
    it(null), Ve({});
  }, un = (W) => {
    if (yt === "__new__") {
      const G = Object.fromEntries(
        e.filter((be) => be.property).map((be) => [be.property, ft[be.property]])
      );
      ne?.(G);
    } else if (W != null) {
      const G = { ...W, ...ft };
      ee?.(W, G);
    }
    At();
  }, Jn = d && (h === "Top" || h === "TopAndBottom"), Qn = d && (h === "Bottom" || h === "TopAndBottom"), Hn = c && e.some((W) => As(W, c)), Co = (W, G, be) => W.render ? W.render(G, { index: 0 }) : yo(lr(G, W.property), W.format), Mo = (W) => {
    const G = [Oe.cell];
    return W.align === "center" && G.push(Oe.center), W.align === "right" && G.push(Oe.right), W.frozen && G.push(Oe.frozen), G.join(" ");
  }, yn = M ? t : fe.filtered, Jr = () => {
    const W = Qc(
      yn,
      et.map((nt) => nt.column)
    ), G = new Blob([`\uFEFF${W}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(G), xe = document.createElement("a");
    xe.href = be, xe.download = `${z}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, bn = It.length, Ft = Se(() => {
    if (!R || bn === 0)
      return { start: 0, end: bn, top: 0, bottom: 0 };
    const W = 5, G = Math.max(
      0,
      Math.floor(Ct / C) - W
    ), be = Math.ceil(Le / C) + W * 2, xe = Math.min(bn, G + be), nt = G * C, zt = Math.max(0, (bn - xe) * C);
    return { start: G, end: xe, top: nt, bottom: zt };
  }, [R, bn, Ct, C, Le]), Or = et.length + (we ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Oe.grid, V].filter(Boolean).join(" "), children: [
    Jn && /* @__PURE__ */ o(
      Vo,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: p,
        pageNumbersCount: g,
        showSummary: b,
        showPageSizeSelector: _,
        ariaLabel: `${he}${Qn ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: Z
      }
    ),
    (w || F || y || I) && /* @__PURE__ */ D("div", { className: Oe.toolbar, children: [
      w && // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- drop target for drag-to-group (pointer affordance)
      /* @__PURE__ */ o(
        "div",
        {
          className: [
            Oe.groupPanel,
            ze.length > 0 ? Oe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: w ? (W) => W.preventDefault() : void 0,
          onDrop: w ? xt : void 0,
          children: ze.length > 0 ? ze.map((W) => {
            const G = e.find((be) => be.property === W)?.title ?? W;
            return /* @__PURE__ */ D("span", { className: Oe.groupChip, children: [
              G,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Oe.groupRemove,
                  onClick: () => je(W),
                  "aria-label": `Remove group by ${G}`,
                  children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
                }
              )
            ] }, W);
          }) : /* @__PURE__ */ o("span", { className: Oe.groupPanelText, children: $ })
        }
      ),
      F && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: Qt,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ D("div", { className: Oe.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Oe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Te,
            onClick: () => lt((W) => !W),
            children: k
          }
        ),
        Te && /* @__PURE__ */ o(
          "div",
          {
            className: Oe.pickerPanel,
            role: "menu",
            "aria-label": k,
            children: e.map((W, G) => {
              const be = to(W, G);
              return /* @__PURE__ */ D("label", { className: Oe.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Qe.has(be),
                    onChange: () => dt(be)
                  }
                ),
                W.title ?? W.property
              ] }, be);
            })
          }
        )
      ] }),
      I && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: Jr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ D(
      "div",
      {
        className: [Oe.data, R ? Oe.virtualScroller : ""].filter(Boolean).join(" "),
        style: R ? { maxHeight: A } : void 0,
        onScroll: R ? (W) => {
          ae(W.currentTarget.scrollTop), wt(W.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Oe.table,
              role: "grid",
              "aria-rowcount": (R ? bn : fe.total) + 1,
              "aria-label": J,
              "aria-busy": Q || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
                  et.map(({ key: W, column: G }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: gt[W] ?? G.width,
                        minWidth: G.minWidth,
                        maxWidth: G.maxWidth
                      }
                    },
                    W
                  )),
                  we && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    et.map(({ key: W, column: G }) => {
                      const be = qd(G, r), xe = te.find((St) => St.property === G.property), nt = xe ? te.indexOf(xe) + 1 : 0, zt = G.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": be && xe ? Ud[xe.sortOrder] : "none",
                          className: [
                            Oe.header,
                            zt === "center" ? Oe.center : "",
                            zt === "right" ? Oe.right : "",
                            G.frozen ? Oe.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: G.frozen ? { left: ge[W] } : void 0,
                          scope: "col",
                          draggable: O || w || void 0,
                          onDragStart: O || w ? (St) => {
                            St.dataTransfer && (St.dataTransfer.effectAllowed = "move"), Ye(W);
                          } : void 0,
                          onDragOver: O ? (St) => St.preventDefault() : void 0,
                          onDrop: O ? () => Fe(W) : void 0,
                          children: [
                            be ? /* @__PURE__ */ D(
                              "button",
                              {
                                type: "button",
                                className: Oe.sortButton,
                                onClick: () => G.property != null && gn(G.property),
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
                            v && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- pointer-drag column resize; keyboard column resize is not implemented
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
                                  const xn = gt[W] ?? G.width, Dt = xn ? parseFloat(xn) : 96;
                                  ke(
                                    W,
                                    St.clientX,
                                    Number.isFinite(Dt) ? Dt : 96
                                  );
                                },
                                onMouseMove: (St) => {
                                  Mt.current?.key === W && ve(St.clientX);
                                },
                                onMouseUp: Me,
                                onMouseLeave: () => {
                                  Mt.current?.key === W && Me();
                                }
                              }
                            )
                          ]
                        },
                        W
                      );
                    }),
                    we && /* @__PURE__ */ o("th", { className: Oe.header, scope: "col", children: "Actions" })
                  ] }),
                  Hn && /* @__PURE__ */ o("tr", { children: et.map(({ key: W, column: G }) => {
                    if (!As(G, c))
                      return /* @__PURE__ */ o("td", { className: Oe.filterCell }, W);
                    const be = K.get(G.property ?? "");
                    return /* @__PURE__ */ D("td", { className: Oe.filterCell, children: [
                      /* @__PURE__ */ D(
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
                          onChange: (xe) => Sn(G.property ?? "", {
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
                          onChange: (xe) => Sn(G.property ?? "", {
                            ...be,
                            value: xe.target.value
                          }),
                          placeholder: `Filter ${G.title ?? G.property}`,
                          "aria-label": `${G.title ?? G.property} value`
                        }
                      )
                    ] }, W);
                  }) })
                ] }),
                /* @__PURE__ */ D("tbody", { children: [
                  yt === "__new__" && /* @__PURE__ */ D("tr", { className: Oe.editRow, children: [
                    et.map(({ key: W, column: G }) => /* @__PURE__ */ o("td", { className: Oe.editCell, children: G.property && /* @__PURE__ */ o(
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
                    ) }, W)),
                    we && /* @__PURE__ */ D("td", { className: Oe.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: () => un(),
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
                  Ft.top > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Or,
                      style: { height: Ft.top }
                    }
                  ) }),
                  It.slice(Ft.start, Ft.end).map((W, G) => {
                    const be = Ft.start + G, xe = R ? be + 2 : void 0;
                    if (W.type === "group" && W.group) {
                      const Dt = De.has(W.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Oe.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ o("td", { colSpan: Or, className: Oe.groupCell, children: /* @__PURE__ */ D(
                            "button",
                            {
                              type: "button",
                              className: Oe.groupToggle,
                              "aria-expanded": Dt,
                              style: {
                                paddingInlineStart: `${W.group.level * 16}px`
                              },
                              onClick: () => tt(W.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Dt ? "▼" : "▶" }),
                                W.group.title,
                                ": ",
                                W.group.display,
                                " (",
                                W.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${W.group.key}`
                      );
                    }
                    const nt = W.row, zt = n(nt), St = (m ?? []).includes(zt), xn = yt != null && yt === String(zt);
                    return /* @__PURE__ */ D(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          Y || x !== "None" ? Oe.clickable : "",
                          St ? Oe.selected : "",
                          xn ? Oe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": x !== "None" ? St : void 0,
                        onClick: Y || x !== "None" ? (Dt) => {
                          Wd(Dt.target) || (_e(nt), ce(nt));
                        } : void 0,
                        children: [
                          et.map(({ key: Dt, column: kt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Mo(kt),
                              style: kt.frozen ? { left: ge[Dt] } : void 0,
                              children: xn && kt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Oe.editInput,
                                  type: kt.type === "number" ? "number" : kt.type === "boolean" ? "checkbox" : "text",
                                  checked: kt.type === "boolean" ? !!ft[kt.property] : void 0,
                                  value: kt.type === "boolean" ? void 0 : String(ft[kt.property] ?? ""),
                                  onChange: (en) => Ve((Ao) => ({
                                    ...Ao,
                                    [kt.property]: kt.type === "boolean" ? en.target.checked : en.target.value
                                  })),
                                  "aria-label": `${kt.title ?? kt.property} (edit)`
                                }
                              ) : Co(kt, nt)
                            },
                            Dt
                          )),
                          we && /* @__PURE__ */ o("td", { className: Oe.commandCell, children: xn ? /* @__PURE__ */ D(ot, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => un(nt),
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
                          ] }) : /* @__PURE__ */ D(ot, { children: [
                            L !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => ut(nt),
                                children: "Edit"
                              }
                            ),
                            le && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => le(nt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      zt
                    );
                  }),
                  Ft.bottom > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Or,
                      style: { height: Ft.bottom }
                    }
                  ) })
                ] }),
                P && P.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ D("tr", { className: Oe.footerRow, children: [
                  et.map(({ key: W, column: G }) => {
                    const be = P.filter(
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
                        children: be.map((xe, nt) => /* @__PURE__ */ D(
                          "div",
                          {
                            className: Oe.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              yo(
                                Jc(yn, xe, lr),
                                xe.format
                              )
                            ]
                          },
                          `${xe.property}-${xe.type}-${nt}`
                        ))
                      },
                      W
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
    Qn && /* @__PURE__ */ o(
      Vo,
      {
        pageNumber: fe.pageNumber,
        pageSize: fe.pageSize,
        count: fe.total,
        pageSizeOptions: p,
        pageNumbersCount: g,
        showSummary: b,
        showPageSizeSelector: _,
        ariaLabel: `${he}${Jn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: Z
      }
    )
  ] });
}
const Kd = "_wrap_avqds_1", Gd = "_grid_avqds_7", Vd = "_stacked_avqds_13", Yd = "_item_avqds_19", Xd = "_empty_avqds_25", Ir = {
  wrap: Kd,
  grid: Gd,
  stacked: Vd,
  item: Yd,
  empty: Xd
};
function JS({
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
  className: f,
  ariaLabel: p = "Data list"
}) {
  const [g, h] = q(1), [b, _] = q(t), x = e.length, m = Math.max(1, Math.ceil(x / b)), u = Math.min(Math.max(1, g), m), y = Se(() => {
    const v = (u - 1) * b;
    return e.slice(v, v + b);
  }, [e, u, b]), k = r ? Ir.grid : Ir.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ir.wrap, f].filter(Boolean).join(" "),
      "aria-label": p,
      children: [
        l && s != null ? s : x === 0 ? c ?? /* @__PURE__ */ o("div", { className: Ir.empty, children: i }) : /* @__PURE__ */ o("div", { className: k, children: y.map((v, O) => /* @__PURE__ */ o("div", { className: Ir.item, children: a ? a(v, O) : String(v) }, O)) }),
        /* @__PURE__ */ o(
          Vo,
          {
            ariaLabel: `${p} Pagination`,
            pageNumber: u,
            pageSize: b,
            count: x,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: h,
            onPageSizeChange: (v) => {
              _(v), h(1);
            }
          }
        )
      ]
    }
  );
}
const Zd = "_label_1qfpw_1", Jd = {
  label: Zd
}, QS = at(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: a,
      className: [Jd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Qd = "_textbox_oly89_1", eu = "_invalid_oly89_37", tu = "_xs_oly89_44", nu = "_sm_oly89_50", ru = "_md_oly89_56", ou = "_lg_oly89_62", su = "_xl_oly89_68", Lo = {
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
          Lo.textbox,
          Lo[t],
          n ? Lo.invalid : null,
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
    const i = ie(null);
    return Ne(() => {
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
}, e$ = at(function({ className: t, ...n }, r) {
  const [a, i] = q(
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
}), du = "_trigger_1jlxf_1", uu = "_tooltip_1jlxf_7", fu = "_top_1jlxf_34", pu = "_right_1jlxf_40", _u = "_bottom_1jlxf_46", hu = "_left_1jlxf_52", mu = "_arrow_1jlxf_58", gu = "_floating_1jlxf_70", qn = {
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
function t$({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = ct(), l = ie(null), d = ie(null), f = ie(() => {
  }), [p, g] = q(!1), [h, b] = q(null), _ = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, x = () => {
    _(), l.current = window.setTimeout(() => {
      l.current = null, g(!0);
    }, r);
  }, m = () => {
    _(), g(!1);
  };
  if (Ne(() => () => _(), []), Ne(() => {
    if (!p || a == null) return;
    const y = window.setTimeout(() => g(!1), a);
    return () => window.clearTimeout(y);
  }, [p, a]), Ne(() => {
    if (i || !p) return;
    const y = (k) => {
      k.key === "Escape" && m();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [i, p]), Ne(() => {
    if (!i) return;
    let y = null, k = null;
    const v = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, O = () => {
      v(), k = null, b(null);
    };
    f.current = O;
    const w = (M) => {
      v(), k = M, y = window.setTimeout(() => {
        y = null, b(M);
      }, r);
    }, $ = (M) => M instanceof Element ? M.closest(i) : null, E = (M) => {
      const N = $(M.target);
      !N || N === k || w(N);
    }, P = (M) => {
      const N = $(M.target);
      if (!N || N !== k) return;
      const S = M.relatedTarget;
      S instanceof Element && N.contains(S) || O();
    }, I = (M) => {
      M.key === "Escape" && O();
    }, z = () => O();
    return document.addEventListener("mouseover", E), document.addEventListener("mouseout", P), document.addEventListener("focusin", E), document.addEventListener("focusout", P), document.addEventListener("keydown", I), document.addEventListener("scroll", z, !0), window.addEventListener("resize", z), () => {
      v(), document.removeEventListener("mouseover", E), document.removeEventListener("mouseout", P), document.removeEventListener("focusin", E), document.removeEventListener("focusout", P), document.removeEventListener("keydown", I), document.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), k = null, b(null);
    };
  }, [i, r]), Ne(() => {
    if (!i || h === null || a == null) return;
    const y = window.setTimeout(() => f.current(), a);
    return () => window.clearTimeout(y);
  }, [i, h, a]), Go(() => {
    const y = h;
    if (!y) return;
    const k = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [k, s].filter(Boolean).join(" ")
    ), () => {
      k == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", k);
    };
  }, [h, s]), Go(() => {
    const y = d.current, k = h;
    !y || !k || Object.assign(
      y.style,
      yu(k.getBoundingClientRect(), n)
    );
  }, [h, n]), i)
    return h ? /* @__PURE__ */ D(
      "span",
      {
        ref: d,
        role: "tooltip",
        id: s,
        className: [
          qn.tooltip,
          qn[n],
          qn.floating,
          c
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: qn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const u = Kt(t) ? as(t, {
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
        className: [qn.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: x,
        onMouseLeave: m,
        onFocus: x,
        onBlur: m,
        children: [
          u,
          p && /* @__PURE__ */ D(
            "span",
            {
              role: "tooltip",
              id: s,
              className: [qn.tooltip, qn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: qn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const bu = "_dialog_1t7pw_1", xu = "_sm_1t7pw_104", vu = "_resizable_1t7pw_110", wu = "_md_1t7pw_113", ku = "_lg_1t7pw_117", Nu = "_header_1t7pw_121", Su = "_title_1t7pw_132", $u = "_description_1t7pw_139", Ou = "_close_1t7pw_146", Eu = "_body_1t7pw_176", Tu = "_footer_1t7pw_188", vn = {
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
  size: c = "md",
  width: s,
  height: l,
  closeOnOverlayClick: d = !0,
  closeOnEsc: f = !0,
  resizable: p = !1,
  side: g = null,
  showCloseButton: h = !0,
  showMask: b = !0,
  canClose: _,
  className: x
}) {
  const m = ie(null), u = ct(), y = ct(), k = ie(t);
  Ne(() => {
    k.current = t;
  });
  const v = ie(_);
  Ne(() => {
    v.current = _;
  });
  const O = ie(f);
  Ne(() => {
    O.current = f;
  });
  const w = ie(!1), $ = ie(!1), E = U(() => {
    if (w.current) return;
    const z = v.current?.();
    if (z instanceof Promise) {
      z.then((M) => {
        M && !w.current && (w.current = !0, k.current());
      });
      return;
    }
    z !== !1 && (w.current = !0, k.current());
  }, []), P = U(() => {
    if ($.current) {
      $.current = !1;
      return;
    }
    k.current();
  }, []), I = U(
    (z) => {
      if (z.key !== "Tab" || !m.current) return;
      const M = Array.from(
        m.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (S) => S.offsetWidth > 0 || S.offsetHeight > 0 || S === document.activeElement
      );
      if (M.length === 0) {
        z.preventDefault();
        return;
      }
      const N = M.indexOf(document.activeElement);
      if (z.shiftKey) {
        if (N <= 0) {
          z.preventDefault();
          const S = M[M.length - 1];
          S && S.focus();
        }
      } else if (N === -1 || N === M.length - 1) {
        z.preventDefault();
        const S = M[0];
        S && S.focus();
      }
    },
    []
  );
  return Ne(() => {
    const z = m.current;
    if (z)
      if (e && !z.open) {
        const M = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        z.showModal(), (z.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? z.querySelector("button"))?.focus();
        const S = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const R = (C) => {
          C.preventDefault(), O.current && E();
        };
        return z.addEventListener("cancel", R), () => {
          z.removeEventListener("cancel", R), document.body.style.overflow = S, M?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && ($.current = w.current, w.current = !1, z.close());
  }, [e, E]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button. The dialog's own
  // onKeyDown={keepFocusInside} satisfies the keyboard-listener rules.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click closes the dialog; ESC and the close button are the keyboard paths
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: m,
      className: [
        vn.dialog,
        vn[c],
        p ? vn.resizable : null,
        g ? vn[`side-${g}`] : null,
        b === !1 ? vn["no-mask"] : null,
        x
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: P,
      onClick: (z) => {
        z.target === m.current && d && E();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? u : void 0,
      "aria-describedby": r ? y : void 0,
      onKeyDown: I,
      children: [
        n && /* @__PURE__ */ D("header", { className: vn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ o("h2", { id: u, className: vn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: y, className: vn.description, children: r })
          ] }),
          h !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vn.close,
              onClick: () => {
                E();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: vn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: vn.footer, children: i })
      ]
    }
  );
}
const Cu = "_typography_1jy8x_1", Mu = "_h1_1jy8x_39", Au = "_h2_1jy8x_45", Du = "_h3_1jy8x_51", Iu = "_h4_1jy8x_57", zu = "_h5_1jy8x_63", Lu = "_h6_1jy8x_69", Pu = "_button_1jy8x_99", Ru = "_caption_1jy8x_106", ju = "_overline_1jy8x_112", Po = {
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
  className: c,
  children: s,
  ...l
}, d) {
  if (i === !1) return null;
  const f = n === "auto" ? Bu[t] : Hu[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: d,
      className: [
        Po.typography,
        Po[Fu[t]],
        r ? Po[Uu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Da = dr(null);
function n$() {
  const e = Fn(Da);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function r$({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), a = ie(0), i = () => (a.current += 1, a.current), c = ie([]);
  Ne(() => {
    c.current = t;
  });
  const s = (g) => {
    const h = c.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!g) : h.kind === "alert" ? h.resolve() : h.resolve(g), n((b) => b.slice(1)));
  }, l = Se(
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
        n((x) => [
          ...x,
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
  function f(g) {
    d && (d.kind === "confirm" ? d.resolve(!!g) : d.kind === "alert" ? d.resolve() : d.resolve(g), n((h) => h.slice(1)));
  }
  const p = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ D(Da.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ma,
      {
        open: t.length > 0,
        onClose: () => f(!1),
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
          /* @__PURE__ */ o(dn, { variant: "text", onClick: () => f(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            dn,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => f(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? p?.footer ?? /* @__PURE__ */ o(dn, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(dn, { onClick: () => f(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? p?.content : d?.options.message != null && /* @__PURE__ */ o(Aa, { textStyle: "body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const qu = "_viewport_11t1p_1", Wu = "_topLeft_11t1p_13", Ku = "_topRight_11t1p_20", Gu = "_bottomLeft_11t1p_25", Vu = "_toast_11t1p_30", Yu = "_leaving_11t1p_61", Xu = "_info_11t1p_77", Zu = "_success_11t1p_86", Ju = "_warning_11t1p_95", Qu = "_danger_11t1p_104", ef = "_content_11t1p_113", tf = "_title_11t1p_118", nf = "_description_11t1p_141", rf = "_dismiss_11t1p_148", of = "_actions_11t1p_169", sf = "_action_11t1p_169", af = "_cancel_11t1p_177", lf = "_progress_11t1p_215", nn = {
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
}, Ia = dr(null);
function o$() {
  const e = Fn(Ia);
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
function s$({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = q([]), [s, l] = q(!1), d = ie([]), f = ie(/* @__PURE__ */ new Map()), p = ie(!1), g = ie(0), h = (N) => {
    p.current = N, l(N);
  }, b = U((N) => {
    const S = f.current.get(N);
    S && (window.clearTimeout(S.timeoutId), S.remaining = Math.max(
      0,
      S.remaining - (Date.now() - S.startedAt)
    ));
  }, []), _ = U((N) => {
    const S = f.current.get(N);
    S && (window.clearTimeout(S.timeoutId), f.current.delete(N));
  }, []), x = U(
    (N) => {
      _(N), c((S) => {
        const R = S.filter((C) => C.id !== N);
        return d.current = R, R;
      });
    },
    [_]
  ), m = U(
    (N) => {
      const S = d.current.find((R) => R.id === N);
      !S || S.leaving || (S.onAutoClose?.(), x(N));
    },
    [x]
  ), u = U(
    (N) => {
      const S = f.current.get(N);
      !S || S.remaining <= 0 || (S.startedAt = Date.now(), S.timeoutId = window.setTimeout(() => m(N), S.remaining));
    },
    [m]
  ), y = U(() => {
    p.current || f.current.forEach((N, S) => b(S)), h(!0);
  }, [b]), k = U(() => {
    f.current.forEach((N, S) => u(S)), h(!1);
  }, [u]);
  Ne(() => {
    if (!r) return;
    const N = () => {
      document.hidden ? y() : k();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [r, y, k]);
  const v = U(
    (N) => {
      const S = d.current.find((R) => R.id === N);
      !S || S.leaving || (S.onDismiss?.(), c((R) => {
        const C = R.map(
          (A) => A.id === N ? { ...A, leaving: !0 } : A
        );
        return d.current = C, C;
      }), window.setTimeout(() => x(N), cf));
    },
    [x]
  ), O = U(
    (N) => {
      if (N.durationMs <= 0) return;
      const S = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(N.id, S), p.current || u(N.id);
    },
    [u]
  ), w = U(
    (N) => {
      const S = d.current.find((C) => C.id === N.id), R = {
        id: N.id ?? ++g.current,
        title: N.title,
        description: N.description,
        severity: N.severity ?? "info",
        durationMs: N.durationMs ?? t,
        action: N.action,
        cancel: N.cancel,
        dismissible: N.dismissible ?? !0,
        closeOnClick: N.closeOnClick ?? !1,
        payload: N.payload,
        click: N.click,
        showProgress: N.showProgress ?? !1,
        position: N.position ?? n,
        onDismiss: N.onDismiss,
        onAutoClose: N.onAutoClose
      };
      c((C) => {
        const A = S ? C.map(
          (L) => L.id === R.id ? { ...R, leaving: !1 } : L
        ) : [...C, R];
        return d.current = A, A;
      }), S && _(R.id), O(R);
    },
    [t, n, O, _]
  ), $ = U(
    (N) => {
      w({
        severity: N.severity ?? "info",
        title: N.summary ?? N.summaryContent,
        description: N.detail ?? N.detailContent,
        durationMs: N.duration,
        click: N.click,
        closeOnClick: N.closeOnClick,
        payload: N.payload
      });
    },
    [w]
  ), E = U(
    (N) => (S, R) => $({ severity: N, summary: S, detail: R }),
    [$]
  ), P = Se(
    () => ({
      toast: w,
      notify: $,
      notifyInfo: E("info"),
      notifySuccess: E("success"),
      notifyWarning: E("warning"),
      notifyError: E("danger")
    }),
    [w, $, E]
  ), I = Se(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((N) => N.position)])),
    [n, i]
  ), z = r ? y : void 0, M = r ? k : void 0;
  return /* @__PURE__ */ D(Ia.Provider, { value: P, children: [
    e,
    I.map((N) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- hover listeners pause auto-dismiss; the live region itself is not interactive
      /* @__PURE__ */ o(
        "div",
        {
          className: [nn.viewport, nn[df[N]], a].filter(Boolean).join(" "),
          "aria-live": "polite",
          "aria-atomic": "false",
          onMouseEnter: z,
          onMouseLeave: M,
          children: i.filter((S) => S.position === N).map((S) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click-to-close is a pointer affordance; the dismiss button provides the keyboard path
            /* @__PURE__ */ D(
              "div",
              {
                role: S.severity === "danger" ? "alert" : "status",
                "data-paused": s ? "true" : "false",
                "data-clickable": S.closeOnClick ? "true" : "false",
                className: [
                  nn.toast,
                  nn[S.severity],
                  S.leaving ? nn.leaving : ""
                ].filter(Boolean).join(" "),
                onClick: S.click || S.closeOnClick ? () => {
                  S.click?.(S.payload), S.closeOnClick && v(S.id);
                } : void 0,
                children: [
                  /* @__PURE__ */ D("div", { className: nn.content, children: [
                    /* @__PURE__ */ o("div", { className: nn.title, children: S.title }),
                    S.description && /* @__PURE__ */ o("div", { className: nn.description, children: S.description }),
                    (S.action || S.cancel) && /* @__PURE__ */ D("div", { className: nn.actions, children: [
                      S.action && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: nn.action,
                          onClick: () => {
                            S.action?.onClick?.(), v(S.id);
                          },
                          children: S.action.label
                        }
                      ),
                      S.cancel && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: nn.cancel,
                          onClick: () => {
                            S.cancel?.onClick?.(), v(S.id);
                          },
                          children: S.cancel.label
                        }
                      )
                    ] })
                  ] }),
                  S.dismissible && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: nn.dismiss,
                      onClick: () => v(S.id),
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
                    }
                  ),
                  S.showProgress && S.durationMs > 0 && /* @__PURE__ */ o(
                    "div",
                    {
                      className: nn.progress,
                      style: { animationDuration: `${S.durationMs}ms` }
                    }
                  )
                ]
              },
              S.id
            )
          ))
        },
        N
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
function a$({
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
  const d = n !== void 0, [f, p] = q(
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
  ), g = d && n ? n : f, h = ie(null), b = ie(null), _ = U(
    ($) => {
      const E = Ds($.start, $.end, e, t, c);
      d || p(E), a?.(E);
    },
    [d, e, t, c, a]
  ), x = U(
    ($) => {
      const E = b.current;
      if (!E) return e;
      const P = E.getBoundingClientRect(), I = P.width > 0 ? ($ - P.left) / P.width : 0;
      return e + Math.max(0, Math.min(1, I)) * (t - e || 1);
    },
    [e, t]
  ), m = U(
    ($) => (Math.max(e, Math.min(t, $)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  Ne(() => {
    const $ = (P) => {
      const I = h.current;
      if (!I) return;
      const z = x(P.clientX);
      if (I.mode === "start") _({ start: z, end: g.end });
      else if (I.mode === "end") _({ start: g.start, end: z });
      else {
        const M = g.end - g.start, N = z - I.grabOffset;
        _({ start: N, end: N + M });
      }
    }, E = () => {
      h.current = null;
    };
    return document.addEventListener("pointermove", $), document.addEventListener("pointerup", E), () => {
      document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", E);
    };
  }, [_, x, g]);
  const u = ($, E) => {
    E.preventDefault(), E.target.focus?.(), h.current = { mode: $, grabOffset: 0 };
  }, y = ($) => {
    const E = x($.clientX);
    if (E >= g.start && E <= g.end)
      h.current = { mode: "pan", grabOffset: E - g.start };
    else {
      const P = Math.abs(E - g.start), I = Math.abs(E - g.end);
      P <= I ? _({ start: E, end: g.end }) : _({ start: g.start, end: E });
    }
  }, k = (t - e || 1) / 100, v = ($) => (E) => {
    const P = E.shiftKey ? k * 10 : k;
    E.key === "ArrowLeft" || E.key === "ArrowDown" ? (E.preventDefault(), _(
      $ === "start" ? { start: g.start - P, end: g.end } : { start: g.start, end: g.end - P }
    )) : E.key === "ArrowRight" || E.key === "ArrowUp" ? (E.preventDefault(), _(
      $ === "start" ? { start: g.start + P, end: g.end } : { start: g.start, end: g.end + P }
    )) : E.key === "Home" ? (E.preventDefault(), _(
      $ === "start" ? { start: e, end: g.end } : { start: g.start, end: t }
    )) : E.key === "End" && (E.preventDefault(), _(
      $ === "start" ? { start: g.end - c, end: g.end } : { start: g.start, end: t }
    ));
  }, O = m(g.start), w = Math.max(0, m(g.end) - O);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ D("div", { ref: b, className: Wn.track, onPointerDown: y, children: [
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
                points: i.map(($, E) => {
                  const P = E / (i.length - 1) * 100, I = Math.max(...i), z = Math.min(...i), M = I === z ? 12 : 22 - ($ - z) / (I - z) * 20;
                  return `${P},${M}`;
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
            style: { left: `${O}%`, width: `${w}%` }
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
            style: { left: `${O}%` },
            onPointerDown: ($) => u("start", $),
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
            "aria-valuenow": Math.round(g.end * 100) / 100,
            className: [Wn.handle, Wn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${O + w}%` },
            onPointerDown: ($) => u("end", $),
            onKeyDown: v("end")
          }
        )
      ] })
    }
  );
}
const mf = "_gauge_pyq6q_3", gf = "_value_pyq6q_11", yf = "_tick_pyq6q_16", Rn = {
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
function l$({
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
  className: f
}) {
  const p = n - t || 1, g = Math.max(0, Math.min(1, (e - t) / p)), h = "var(--dx-border-color)", b = a ?? "var(--dx-primary-color)", _ = 100, x = 96, m = 80, u = oo + Is * g;
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": d,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, f].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ls(_, x, m, oo, oo + Is),
              fill: "none",
              stroke: h,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          g > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Ls(_, x, m, oo, u),
              fill: "none",
              stroke: bf(g, i, b),
              strokeWidth: r,
              strokeLinecap: "round"
            }
          )
        ] }),
        s && /* @__PURE__ */ o("div", { className: Rn.value, children: l(e) })
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
const bo = (e) => new Intl.NumberFormat(void 0, { maximumFractionDigits: 2 }).format(e);
function Nr(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Ps(e, t, n, r, a) {
  const [i, c] = Nr(e, t, n, r), [s, l] = Nr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function i$({
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
  showValue: f = !0,
  formatValue: p = (b) => String(Math.round(b * 100) / 100),
  ariaLabel: g = "Gauge",
  className: h
}) {
  const b = n - t || 1, _ = (z) => Math.max(0, Math.min(1, (z - t) / b)), m = a - r >= 360 ? r + 359.999 : a, u = (z) => r + (m - r) * _(z), y = l ?? "var(--dx-primary-color)", k = "var(--dx-border-color)", { count: v = 8, step: O, showLabels: w = !0 } = i, $ = 100, E = 100, P = 78, I = (z, M, N) => {
    const [S, R] = Nr($, E, P - 14, u(z));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: $,
        y1: E,
        x2: S,
        y2: R,
        stroke: M,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, N);
  };
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": g,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, h].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ps($, E, P, r, m),
              fill: "none",
              stroke: k,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((z, M) => /* @__PURE__ */ o(
            "path",
            {
              d: Ps(
                $,
                E,
                P,
                u(Math.max(t, z.from)),
                u(Math.min(n, z.to))
              ),
              fill: "none",
              stroke: z.color,
              strokeWidth: 12
            },
            `range-${M}`
          )),
          za(t, n, v, O).map((z, M) => {
            const [N, S] = Nr($, E, P - 10, u(z)), [R, C] = Nr($, E, P - 16, u(z)), [A, L] = Nr($, E, P - 26, u(z));
            return /* @__PURE__ */ D("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: N,
                  y1: S,
                  x2: R,
                  y2: C,
                  stroke: k,
                  strokeWidth: 1.5
                }
              ),
              w && /* @__PURE__ */ o(
                "text",
                {
                  x: A,
                  y: L + 4,
                  textAnchor: "middle",
                  className: Rn.tick,
                  children: bo(z)
                }
              )
            ] }, M);
          }),
          I(e, y, "value"),
          s.map(
            (z, M) => I(z.value, z.color ?? y, `extra-${M}`)
          ),
          /* @__PURE__ */ o("circle", { cx: $, cy: E, r: 7, fill: y })
        ] }),
        f && /* @__PURE__ */ o("div", { className: Rn.value, children: p(e) })
      ]
    }
  );
}
function c$({
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
  formatValue: f = (h) => String(Math.round(h * 100) / 100),
  ariaLabel: p = "Gauge",
  className: g
}) {
  const h = n - t || 1, b = r === "vertical", _ = s ?? (b ? 220 : 280), { count: x = 5, step: m, showLabels: u = !0 } = a, y = c ?? "var(--dx-primary-color)", k = "var(--dx-border-color)", v = 8, O = (I) => {
    const M = (Math.max(t, Math.min(n, I)) - t) / h;
    return b ? _ - v - M * (_ - v * 2) : v + M * (_ - v * 2);
  }, w = () => za(t, n, x, m).map((I, z) => {
    const M = O(I);
    return /* @__PURE__ */ D("g", { children: [
      b ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: M,
          x2: 0,
          y2: M,
          stroke: k,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: M,
          y1: -6,
          x2: M,
          y2: 0,
          stroke: k,
          strokeWidth: 1.5
        }
      ),
      u && (b ? /* @__PURE__ */ o("text", { x: -10, y: M + 4, textAnchor: "end", className: Rn.tick, children: bo(I) }) : /* @__PURE__ */ o("text", { x: M, y: -10, textAnchor: "middle", className: Rn.tick, children: bo(I) }))
    ] }, z);
  }), $ = () => i.map((I, z) => {
    const M = O(I.from), N = O(I.to), S = Math.min(M, N), R = Math.abs(N - M);
    return b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: S,
        width: l,
        height: R,
        fill: I.color,
        opacity: 0.35
      },
      z
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: S,
        y: -l / 2,
        width: R,
        height: l,
        fill: I.color,
        opacity: 0.35
      },
      z
    );
  }), E = O(e), P = /* @__PURE__ */ D("g", { children: [
    $(),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: v,
        width: l,
        height: _ - v * 2,
        rx: l / 2,
        fill: "none",
        stroke: k,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: v,
        y: -l / 2,
        width: _ - v * 2,
        height: l,
        rx: l / 2,
        fill: "none",
        stroke: k,
        strokeWidth: 2
      }
    ),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: E,
        width: l,
        height: _ - v - E,
        rx: l / 2,
        fill: y
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: v,
        y: -l / 2,
        width: Math.max(0, E - v),
        height: l,
        rx: l / 2,
        fill: y
      }
    ),
    b ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${E} L ${-l / 2 - 2} ${E - 5} L ${-l / 2 - 2} ${E + 5} Z`,
        fill: y
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${E} ${-l / 2 - 10} L ${E - 5} ${-l / 2 - 2} L ${E + 5} ${-l / 2 - 2} Z`,
        fill: y
      }
    ),
    w()
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": p,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, g].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ o(
          "svg",
          {
            width: l + 64,
            height: _ + 8,
            viewBox: `${-l / 2 - 56} -16 ${l + 64} ${_ + 24}`,
            "aria-hidden": "true",
            children: P
          }
        ) : /* @__PURE__ */ o(
          "svg",
          {
            width: _,
            height: l + 48,
            viewBox: `0 -24 ${_} ${l + 56}`,
            "aria-hidden": "true",
            children: P
          }
        ),
        d && /* @__PURE__ */ o("div", { className: Rn.value, children: f(e) })
      ]
    }
  );
}
const xf = "_chat_1apnf_3", vf = "_messages_1apnf_9", wf = "_message_1apnf_9", kf = "_user_1apnf_29", Nf = "_assistant_1apnf_35", Sf = "_system_1apnf_40", $f = "_typing_1apnf_46", Of = "_inputRow_1apnf_51", _r = {
  chat: xf,
  messages: vf,
  message: wf,
  user: kf,
  assistant: Nf,
  system: Sf,
  typing: $f,
  inputRow: Of
};
function d$({
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
  className: f
}) {
  const [p, g] = q(""), h = l || d, b = p.trim().length > 0 && !h, _ = (m) => {
    m.preventDefault();
    const u = p.trim();
    !u || h || (g(""), t?.(u));
  }, x = /* @__PURE__ */ D("form", { className: _r.inputRow, onSubmit: (m) => {
    _(m);
  }, children: [
    /* @__PURE__ */ o(
      cs,
      {
        value: p,
        placeholder: n,
        "aria-label": a,
        disabled: h,
        onChange: (m) => g(m.target.value)
      }
    ),
    /* @__PURE__ */ o(dn, { type: "submit", disabled: !b, loading: l, children: r })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      className: [_r.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: _r.messages, children: [
          e.map(
            (m, u) => c ? /* @__PURE__ */ o("div", { children: c(m, u) }, u) : /* @__PURE__ */ o(
              "div",
              {
                className: [_r.message, _r[m.role]].filter(Boolean).join(" "),
                children: m.content
              },
              u
            )
          ),
          l && /* @__PURE__ */ o("div", { className: _r.typing, children: "…" })
        ] }),
        s ? s(x) : x
      ]
    }
  );
}
const Ef = "_wrapper_1ulz6_1", Tf = "_input_1ulz6_8", Cf = "_invalid_1ulz6_38", Mf = "_toggle_1ulz6_45", Af = "_xs_1ulz6_80", Df = "_sm_1ulz6_86", If = "_md_1ulz6_92", zf = "_lg_1ulz6_98", Lf = "_xl_1ulz6_104", zr = {
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
    hideLabel: c = "Hide password",
    ...s
  }, l) {
    const [d, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: zr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: d ? "text" : "password",
            disabled: a,
            className: [
              zr.input,
              zr[t],
              n ? zr.invalid : null,
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
            className: zr.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => f((p) => !p),
            children: /* @__PURE__ */ o(Ee, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Rf = "_login_30qie_3", jf = "_title_30qie_9", Bf = "_remember_30qie_14", Ff = "_link_30qie_21", Lr = {
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
function u$({
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
  usernameLabel: f = "Username",
  passwordLabel: p = "Password",
  submitText: g = "Sign in",
  storageKey: h,
  className: b
}) {
  const [_, x] = q(() => Hf(h) ?? ""), [m, u] = q(""), [y, k] = q(!1), [v, O] = q(!1), [w, $] = q({}), E = l || v, P = e != null && n == null, I = async (z) => {
    P || z.preventDefault();
    const M = {};
    if (_.trim() || (M.username = "Username is required."), m || (M.password = "Password is required."), $(M), !(M.username || M.password || !n)) {
      O(!0);
      try {
        await n({
          username: _.trim(),
          password: m,
          rememberMe: y
        }), y ? Uf(h, _.trim()) : qf(h);
      } finally {
        O(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [Lr.login, b].filter(Boolean).join(" "),
      action: P ? e : void 0,
      method: P ? t : void 0,
      noValidate: !0,
      onSubmit: (z) => {
        I(z);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Lr.title, children: d }),
        /* @__PURE__ */ o(cr, { label: f, required: !0, error: w.username, children: ({ inputId: z }) => /* @__PURE__ */ o(
          cs,
          {
            id: z,
            value: _,
            autoComplete: "username",
            disabled: E,
            "aria-invalid": w.username ? !0 : void 0,
            onChange: (M) => {
              x(M.target.value), $((N) => ({ ...N, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(cr, { label: p, required: !0, error: w.password, children: ({ inputId: z }) => /* @__PURE__ */ o(
          Pf,
          {
            id: z,
            value: m,
            autoComplete: "current-password",
            disabled: E,
            "aria-invalid": w.password ? !0 : void 0,
            onChange: (M) => {
              u(M.target.value), $((N) => ({ ...N, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ D("label", { className: Lr.remember, children: [
          /* @__PURE__ */ o(
            iu,
            {
              checked: y,
              disabled: E,
              onChange: (z) => k(z.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(dn, { type: "submit", loading: E, disabled: E, children: g }),
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
function Wf(e) {
  if (Array.isArray(e)) return e;
}
function Kf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, c, s = [], l = !0, d = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      d = !0, a = f;
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
let $t = Object.freeze, Et = Object.seal, wr = Object.create, Pa = typeof Reflect < "u" && Reflect, Yo = Pa.apply, Xo = Pa.construct;
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
const ir = Nt(Array.prototype.forEach), Qf = Nt(Array.prototype.lastIndexOf), Bs = Nt(Array.prototype.pop), Pr = Nt(Array.prototype.push), ep = Nt(Array.prototype.splice), Sr = Array.isArray, Gr = Nt(String.prototype.toLowerCase), Ro = Nt(String.prototype.toString), Fs = Nt(String.prototype.match), Rr = Nt(String.prototype.replace), Hs = Nt(String.prototype.indexOf), tp = Nt(String.prototype.trim), np = Nt(Number.prototype.toString), rp = Nt(Boolean.prototype.toString), Us = typeof BigInt > "u" ? null : Nt(BigInt.prototype.toString), qs = typeof Symbol > "u" ? null : Nt(Symbol.prototype.toString), Xt = Nt(Object.prototype.hasOwnProperty), jr = Nt(Object.prototype.toString), Rt = Nt(RegExp.prototype.test), Kn = op(TypeError);
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
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr;
  if (js && js(e, null), !Sr(t)) return e;
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
  for (let t = 0; t < e.length; t++) Xt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = wr(null);
  for (const r of La(e)) {
    var n = Vf(r, 2);
    const a = n[0], i = n[1];
    Xt(e, a) && (Sr(i) ? t[a] = sp(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = an(i) : t[a] = i);
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
      return jr(e);
    case "function":
    case "object": {
      if (e === null) return jr(e);
      const t = e, n = mn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : jr(r);
      }
      return jr(e);
    }
    default:
      return jr(e);
  }
}
function mn(e, t) {
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
]), jo = $t([
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
]), Bo = $t([
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
]), Fo = $t([
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
]), Ho = $t([
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
]), dp = Et(/{{[\w\W]*|^[\w\W]*}}/g), up = Et(/<%[\w\W]*|^[\w\W]*%>/g), fp = Et(/\${[\w\W]*/g), pp = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), _p = Et(/^aria-[\-\w]+$/), Ys = Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hp = Et(/^(?:\w+script|data):/i), mp = Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), gp = Et(/^html$/i), yp = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Xs = Et(/<[/\w!]/g), Zs = Et(/<[/\w]/g), bp = Et(/<\/no(script|embed|frames)/i), xp = Et(/\/>/i), rn = {
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
  return ir(Ra, (t) => {
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
}, Gn = function(t, n, r, a) {
  return Xt(t, n) && Sr(t[n]) ? Ke(a.base ? an(a.base) : {}, t[n], a.transform) : r;
}, Uo = function(t, n, r) {
  const a = Xt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : r();
};
function ja() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : kp();
  const t = (de) => ja(de);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== rn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, f = e.trustedTypes, p = s.prototype, g = mn(p, "cloneNode"), h = mn(p, "remove"), b = mn(p, "removeAttributeNode"), _ = mn(p, "nextSibling"), x = mn(p, "childNodes"), m = mn(p, "parentNode"), u = mn(p, "shadowRoot"), y = mn(p, "attributes"), k = c && c.prototype ? mn(c.prototype, "nodeType") : null, v = c && c.prototype ? mn(c.prototype, "nodeName") : null, O = c && c.prototype ? mn(c.prototype, "ownerDocument") : null, w = function(T) {
    return k ? k(T) : T.nodeType;
  }, $ = function(T) {
    return v ? v(T) : T.nodeName;
  };
  if (typeof i == "function") {
    const de = n.createElement("template");
    de.content && de.content.ownerDocument && (n = de.content.ownerDocument);
  }
  let E, P = "", I, z = !1, M = 0;
  const N = function() {
    if (M > 0) throw Kn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, S = function(T) {
    N(), M++;
    try {
      return E.createHTML(T);
    } finally {
      M--;
    }
  }, R = function(T) {
    N(), M++;
    try {
      return E.createScriptURL(T);
    } finally {
      M--;
    }
  }, C = function() {
    return z || (I = Np(f, a), z = !0), I;
  }, A = n, L = A.implementation, F = A.createNodeIterator, ee = A.createDocumentFragment, ne = A.getElementsByTagName, le = r.importNode;
  let Q = Js();
  t.isSupported = typeof La == "function" && typeof m == "function" && L && L.createHTMLDocument !== void 0;
  const Ie = dp, J = up, V = fp, Y = pp, he = _p, te = hp, me = mp, K = yp;
  let $e = Ys, se = null;
  const Ae = Ke({}, [
    ...Ws,
    ...jo,
    ...Bo,
    ...Fo,
    ...Ks
  ]);
  let ye = null;
  const We = Ke({}, [
    ...Gs,
    ...Ho,
    ...Vs,
    ...so
  ]);
  let Je = Object.seal(wr(null, {
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
  const He = Object.seal(wr(null, {
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
  let gt = !0, re = !0, Te = !1, lt = !0, ze = !1, st = !0, Xe = !1, Tt = !1, yt = null, it = null, ft = !1, Ve = !1, Ct = !1, ae = !1, Le = !0, wt = !1;
  const Mt = "user-content-";
  let bt = !0, j = !1, X = {}, ge = null;
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
  const H = Ke({}, [
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
  let gn = et, Sn = !1, Z = null;
  const ce = Ke({}, [
    De,
    It,
    et
  ], Ro), _e = $t([
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
  const ut = n.createElement("form"), Qt = function(T) {
    return T instanceof RegExp || T instanceof Function;
  }, At = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (tt && tt === T) return;
    (!T || typeof T != "object") && (T = {}), T = an(T), Fe = dt.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? xt : T.PARSER_MEDIA_TYPE, je = Fe === "application/xhtml+xml" ? Ro : Gr, se = Gn(T, "ALLOWED_TAGS", Ae, { transform: je }), ye = Gn(T, "ALLOWED_ATTR", We, { transform: je }), Z = Gn(T, "ALLOWED_NAMESPACES", ce, { transform: Ro }), pe = Gn(T, "ADD_URI_SAFE_ATTR", Re, {
      transform: je,
      base: Re
    }), fe = Gn(T, "ADD_DATA_URI_TAGS", H, {
      transform: je,
      base: H
    }), ge = Gn(T, "FORBID_CONTENTS", we, { transform: je }), Ge = Gn(T, "FORBID_TAGS", an({}), { transform: je }), Qe = Gn(T, "FORBID_ATTR", an({}), { transform: je }), X = Xt(T, "USE_PROFILES") ? T.USE_PROFILES && typeof T.USE_PROFILES == "object" ? an(T.USE_PROFILES) : T.USE_PROFILES : !1, gt = T.ALLOW_ARIA_ATTR !== !1, re = T.ALLOW_DATA_ATTR !== !1, Te = T.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = T.SAFE_FOR_TEMPLATES || !1, st = T.SAFE_FOR_XML !== !1, Xe = T.WHOLE_DOCUMENT || !1, Ve = T.RETURN_DOM || !1, Ct = T.RETURN_DOM_FRAGMENT || !1, ae = T.RETURN_TRUSTED_TYPE || !1, ft = T.FORCE_BODY || !1, Le = T.SANITIZE_DOM !== !1, wt = T.SANITIZE_NAMED_PROPS || !1, bt = T.KEEP_CONTENT !== !1, j = T.IN_PLACE || !1, $e = lp(T.ALLOWED_URI_REGEXP) ? T.ALLOWED_URI_REGEXP : Ys, gn = typeof T.NAMESPACE == "string" ? T.NAMESPACE : et, ke = Uo(T, "MATHML_TEXT_INTEGRATION_POINTS", () => Ke({}, _e)), Me = Uo(T, "HTML_INTEGRATION_POINTS", () => Ke({}, ve));
    const B = Uo(T, "CUSTOM_ELEMENT_HANDLING", () => wr(null));
    if (Je = wr(null), Xt(B, "tagNameCheck") && Qt(B.tagNameCheck) && (Je.tagNameCheck = B.tagNameCheck), Xt(B, "attributeNameCheck") && Qt(B.attributeNameCheck) && (Je.attributeNameCheck = B.attributeNameCheck), Xt(B, "allowCustomizedBuiltInElements") && typeof B.allowCustomizedBuiltInElements == "boolean" && (Je.allowCustomizedBuiltInElements = B.allowCustomizedBuiltInElements), Et(Je), ze && (re = !1), Ct && (Ve = !0), X && (se = Ke({}, Ks), ye = wr(null), X.html === !0 && (Ke(se, Ws), Ke(ye, Gs)), X.svg === !0 && (Ke(se, jo), Ke(ye, Ho), Ke(ye, so)), X.svgFilters === !0 && (Ke(se, Bo), Ke(ye, Ho), Ke(ye, so)), X.mathMl === !0 && (Ke(se, Fo), Ke(ye, Vs), Ke(ye, so))), He.tagCheck = null, He.attributeCheck = null, Xt(T, "ADD_TAGS") && (typeof T.ADD_TAGS == "function" ? He.tagCheck = T.ADD_TAGS : Sr(T.ADD_TAGS) && (se === Ae && (se = an(se)), Ke(se, T.ADD_TAGS, je))), Xt(T, "ADD_ATTR") && (typeof T.ADD_ATTR == "function" ? He.attributeCheck = T.ADD_ATTR : Sr(T.ADD_ATTR) && (ye === We && (ye = an(ye)), Ke(ye, T.ADD_ATTR, je))), Xt(T, "ADD_FORBID_CONTENTS") && Sr(T.ADD_FORBID_CONTENTS) && (ge === we && (ge = an(ge)), Ke(ge, T.ADD_FORBID_CONTENTS, je)), bt && (se["#text"] = !0), Xe && Ke(se, [
      "html",
      "head",
      "body"
    ]), se.table && (Ke(se, ["tbody"]), delete Ge.tbody), T.TRUSTED_TYPES_POLICY) {
      if (typeof T.TRUSTED_TYPES_POLICY.createHTML != "function") throw Kn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof T.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Kn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const oe = E;
      E = T.TRUSTED_TYPES_POLICY;
      try {
        P = S("");
      } catch (ue) {
        throw E = oe, ue;
      }
    } else T.TRUSTED_TYPES_POLICY === null ? (E = void 0, P = "") : (E === void 0 && (E = C()), E && typeof P == "string" && (P = S("")));
    $t && $t(T), tt = T;
  }, un = Ke({}, [
    ...jo,
    ...Bo,
    ...ip
  ]), Jn = Ke({}, [...Fo, ...cp]), Qn = function(T, B, oe) {
    return B.namespaceURI === et ? T === "svg" : B.namespaceURI === De ? T === "svg" && (oe === "annotation-xml" || ke[oe]) : !!un[T];
  }, Hn = function(T, B, oe) {
    return B.namespaceURI === et ? T === "math" : B.namespaceURI === It ? T === "math" && Me[oe] : !!Jn[T];
  }, Co = function(T, B, oe) {
    return B.namespaceURI === It && !Me[oe] || B.namespaceURI === De && !ke[oe] ? !1 : !Jn[T] && (Ye[T] || !un[T]);
  }, Mo = function(T) {
    let B = m(T);
    (!B || !B.tagName) && (B = {
      namespaceURI: gn,
      tagName: "template"
    });
    const oe = Gr(T.tagName), ue = Gr(B.tagName);
    return Z[T.namespaceURI] ? T.namespaceURI === It ? Qn(oe, B, ue) : T.namespaceURI === De ? Hn(oe, B, ue) : T.namespaceURI === et ? Co(oe, B, ue) : !!(Fe === "application/xhtml+xml" && Z[T.namespaceURI]) : !1;
  }, yn = function(T) {
    Pr(t.removed, { element: T });
    try {
      m(T).removeChild(T);
    } catch {
      if (h(T), !m(T)) throw Kn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(T, B, oe) {
    try {
      b(T, B);
    } catch {
      try {
        T.removeAttribute(oe);
      } catch {
      }
    }
  }, bn = function(T) {
    W(T);
    const B = x(T);
    if (B) {
      const ue = [];
      ir(B, (Ce) => {
        Pr(ue, Ce);
      }), ir(ue, (Ce) => {
        try {
          h(Ce);
        } catch {
        }
      });
    }
    const oe = y(T);
    if (oe) for (let ue = oe.length - 1; ue >= 0; --ue) {
      const Ce = oe[ue], Be = Ce && Ce.name;
      typeof Be == "string" && Jr(T, Ce, Be);
    }
  }, Ft = function(T, B, oe) {
    if (!oe) try {
      oe = B.getAttributeNode(T);
    } catch {
      oe = null;
    }
    Pr(t.removed, {
      attribute: oe || null,
      from: B
    });
    try {
      oe ? b(B, oe) : B.removeAttribute(T);
    } catch {
      try {
        B.removeAttribute(T);
      } catch {
      }
    }
    if (T === "is")
      if (Ve || Ct) try {
        yn(B);
      } catch {
      }
      else try {
        B.setAttribute(T, "");
      } catch {
      }
  }, Or = function(T) {
    const B = y(T);
    if (B)
      for (let oe = B.length - 1; oe >= 0; --oe) {
        const ue = B[oe], Ce = ue && ue.name;
        typeof Ce != "string" || ye[je(Ce)] || Jr(T, ue, Ce);
      }
  }, W = function(T) {
    const B = [T];
    for (; B.length > 0; ) {
      const oe = B.pop();
      w(oe) === rn.element && Or(oe);
      const ue = x(oe);
      if (ue) for (let Ce = ue.length - 1; Ce >= 0; --Ce) B.push(ue[Ce]);
    }
  }, G = function(T, B) {
    return st ? T === "patchsrc" ? !0 : T === "for" && B !== "label" && B !== "output" : !1;
  }, be = function(T) {
    if (!st) return;
    const B = [T];
    for (; B.length > 0; ) {
      const oe = B.pop(), ue = w(oe);
      if (ue === rn.processingInstruction || ue === rn.comment && Rt(Zs, oe.data)) {
        try {
          h(oe);
        } catch {
        }
        continue;
      }
      if (ue === rn.element) {
        const Be = oe, Ue = je($(oe));
        try {
          Be.hasAttribute && Be.hasAttribute("patchsrc") && Be.removeAttribute("patchsrc"), Be.hasAttribute && Be.hasAttribute("for") && G("for", Ue) && Be.removeAttribute("for");
        } catch {
        }
      }
      const Ce = x(oe);
      if (Ce) for (let Be = Ce.length - 1; Be >= 0; --Be) B.push(Ce[Be]);
    }
  }, xe = function(T) {
    let B = null, oe = null;
    if (ft) T = "<remove></remove>" + T;
    else {
      const Be = Fs(T, /^[\r\n\t ]+/);
      oe = Be && Be[0];
    }
    Fe === "application/xhtml+xml" && gn === et && (T = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + T + "</body></html>");
    const ue = E ? S(T) : T;
    if (gn === et) try {
      B = new d().parseFromString(ue, Fe);
    } catch {
    }
    if (!B || !B.documentElement) {
      B = L.createDocument(gn, "template", null);
      try {
        B.documentElement.innerHTML = Sn ? P : ue;
      } catch {
      }
    }
    const Ce = B.body || B.documentElement;
    return T && oe && Ce.insertBefore(n.createTextNode(oe), Ce.childNodes[0] || null), gn === et ? ne.call(B, Xe ? "html" : "body")[0] : Xe ? B.documentElement : Ce;
  }, nt = function(T) {
    const B = O ? O(T) : T.ownerDocument;
    return F.call(B || T, T, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, zt = function(T) {
    return T = Rr(T, Ie, " "), T = Rr(T, J, " "), T = Rr(T, V, " "), T;
  }, St = function(T) {
    var B;
    T.normalize();
    const oe = O ? O(T) : T.ownerDocument, ue = F.call(oe || T, T, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Ce = ue.nextNode();
    for (; Ce; )
      Ce.data = zt(Ce.data), Ce = ue.nextNode();
    const Be = (B = T.querySelectorAll) === null || B === void 0 ? void 0 : B.call(T, "template");
    Be && ir(Be, (Ue) => {
      Dt(Ue.content) && St(Ue.content);
    });
  }, xn = function(T) {
    const B = v ? v(T) : null;
    return typeof B != "string" || je(B) !== "form" ? !1 : typeof T.nodeName != "string" || typeof T.textContent != "string" || typeof T.removeChild != "function" || T.attributes !== y(T) || typeof T.removeAttribute != "function" || typeof T.removeAttributeNode != "function" || typeof T.getAttributeNode != "function" || typeof T.setAttribute != "function" || typeof T.namespaceURI != "string" || typeof T.insertBefore != "function" || typeof T.hasChildNodes != "function" || T.nodeType !== k(T) || T.childNodes !== x(T);
  }, Dt = function(T) {
    if (!k || typeof T != "object" || T === null) return !1;
    try {
      return k(T) === rn.documentFragment;
    } catch {
      return !1;
    }
  }, kt = function(T) {
    if (!k || typeof T != "object" || T === null) return !1;
    try {
      return typeof k(T) == "number";
    } catch {
      return !1;
    }
  };
  function en(de, T, B) {
    de.length !== 0 && ir(de, (oe) => {
      oe.call(t, T, B, tt);
    });
  }
  const Ao = function(T, B) {
    return !!(st && T.hasChildNodes() && !kt(T.firstElementChild) && Rt(Xs, T.textContent) && Rt(Xs, T.innerHTML) || st && T.namespaceURI === et && vp[B] && (kt(T.firstElementChild) || typeof T.textContent == "string" && Rt(wp[B], T.textContent)) || T.nodeType === rn.processingInstruction || st && T.nodeType === rn.comment && Rt(Zs, T.data));
  }, Qr = function(T, B) {
    if (T instanceof RegExp) return Rt(T, B);
    if (T instanceof Function) {
      for (var oe = arguments.length, ue = new Array(oe > 2 ? oe - 2 : 0), Ce = 2; Ce < oe; Ce++) ue[Ce - 2] = arguments[Ce];
      return !!T(B, ...ue);
    }
    return !1;
  }, rl = function(T, B, oe) {
    if (!Ge[B] && ys(B) && Qr(Je.tagNameCheck, B)) return !1;
    if (bt && !ge[B]) {
      const ue = m(T), Ce = x(T);
      if (Ce && ue) {
        const Be = Ce.length;
        for (let Ue = Be - 1; Ue >= 0; --Ue) {
          const pt = T === oe ? g(Ce[Ue], !0) : Ce[Ue];
          ue.insertBefore(pt, _(T));
        }
      }
    }
    return yn(T), !0;
  }, hs = function(T, B, oe, ue) {
    return T.length === 0 ? B : B === oe || B === ue ? an(B) : B;
  }, fr = function(T, B) {
    return T === B || m(T) !== null ? !1 : (j && W(T), !0);
  }, ms = function(T, B) {
    if (en(Q.beforeSanitizeElements, T, null), fr(T, B)) return !0;
    if (xn(T))
      return yn(T), !0;
    const oe = je($(T));
    if (se = hs(Q.uponSanitizeElement, se, Ae, yt), en(Q.uponSanitizeElement, T, {
      tagName: oe,
      allowedTags: se
    }), fr(T, B)) return !0;
    if (Ao(T, oe))
      return yn(T), !0;
    if (Ge[oe] || !(He.tagCheck instanceof Function && He.tagCheck(oe)) && !se[oe]) {
      const ue = rl(T, oe, B);
      return ue === !1 && (en(Q.afterSanitizeElements, T, null), fr(T, B)) ? !0 : ue;
    }
    if (w(T) === rn.element && !Mo(T) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && Rt(bp, T.innerHTML))
      return yn(T), !0;
    if (ze && T.nodeType === rn.text) {
      const ue = zt(T.textContent);
      T.textContent !== ue && (Pr(t.removed, { element: T.cloneNode() }), T.textContent = ue);
    }
    return en(Q.afterSanitizeElements, T, null), fr(T, B);
  }, gs = function(T, B, oe) {
    if (Qe[B] || G(B, T) || Le && (B === "id" || B === "name") && (oe in n || oe in ut)) return !1;
    const ue = ye[B] || He.attributeCheck instanceof Function && He.attributeCheck(B, T);
    return re && Rt(Y, B) || gt && Rt(he, B) ? !0 : ue ? pe[B] || Rt($e, Rr(oe, me, "")) || (B === "src" || B === "xlink:href" || B === "href") && T !== "script" && Hs(oe, "data:") === 0 && fe[T] || Te && !Rt(te, Rr(oe, me, "")) ? !0 : !oe : ys(T) && Qr(Je.tagNameCheck, T) && Qr(Je.attributeNameCheck, B, T) || B === "is" && Je.allowCustomizedBuiltInElements && Qr(Je.tagNameCheck, oe);
  }, ol = Ke({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ys = function(T) {
    return !ol[Gr(T)] && Rt(K, T);
  }, sl = function(T, B, oe, ue) {
    if (E && typeof f == "object" && typeof f.getAttributeType == "function" && !oe) switch (f.getAttributeType(T, B)) {
      case "TrustedHTML":
        return S(ue);
      case "TrustedScriptURL":
        return R(ue);
    }
    return ue;
  }, al = function(T, B, oe, ue) {
    try {
      return oe ? T.setAttributeNS(oe, B, ue) : T.setAttribute(B, ue), xn(T) ? (yn(T), !1) : !0;
    } catch {
      return Ft(B, T), !1;
    }
  }, bs = function(T, B) {
    if (en(Q.beforeSanitizeAttributes, T, null), fr(T, B)) return;
    const oe = T.attributes;
    if (!oe || xn(T)) return;
    ye = hs(Q.uponSanitizeAttribute, ye, We, it);
    const ue = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let Ce = oe.length;
    const Be = je(T.nodeName);
    for (; Ce--; ) {
      const Ue = oe[Ce], pt = Ue.name, fn = Ue.namespaceURI, tn = Ue.value, pr = je(pt), Io = tn;
      let Ht = pt === "value" ? Io : tp(Io), xs = !1;
      if (ue.attrName = pr, ue.attrValue = Ht, ue.keepAttr = !0, ue.forceKeepAttr = void 0, en(Q.uponSanitizeAttribute, T, ue), Ht = ue.attrValue, wt && (pr === "id" || pr === "name") && Hs(Ht, Mt) !== 0 && (Ft(pt, T, Ue), Ht = Mt + Ht, xs = !0), st && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ht)) {
        Ft(pt, T, Ue);
        continue;
      }
      if (pr === "attributename" && Fs(Ht, "href")) {
        Ft(pt, T, Ue);
        continue;
      }
      if (!ue.forceKeepAttr) {
        if (!ue.keepAttr) {
          Ft(pt, T, Ue);
          continue;
        }
        if (!lt && Rt(xp, Ht)) {
          Ft(pt, T, Ue);
          continue;
        }
        if (ze && (Ht = zt(Ht)), !gs(Be, pr, Ht)) {
          Ft(pt, T, Ue);
          continue;
        }
        Ht = sl(Be, pr, fn, Ht), Ht !== Io && al(T, pt, fn, Ht) && xs && Bs(t.removed);
      }
    }
    en(Q.afterSanitizeAttributes, T, null), fr(T, B);
  }, eo = function(T) {
    let B = null;
    const oe = nt(T);
    for (en(Q.beforeSanitizeShadowDOM, T, null); B = oe.nextNode(); )
      if (en(Q.uponSanitizeShadowNode, B, null), ms(B, T), bs(B, T), Dt(B.content) && eo(B.content), w(B) === rn.element) {
        const ue = u(B);
        Dt(ue) && (Do(ue), eo(ue));
      }
    en(Q.afterSanitizeShadowDOM, T, null);
  }, Do = function(T) {
    const B = [{
      node: T,
      shadow: null
    }];
    for (; B.length > 0; ) {
      const oe = B.pop();
      if (oe.shadow) {
        eo(oe.shadow);
        continue;
      }
      const ue = oe.node, Ce = w(ue) === rn.element, Be = x(ue);
      if (Be) for (let Ue = Be.length - 1; Ue >= 0; --Ue) B.push({
        node: Be[Ue],
        shadow: null
      });
      if (Ce) {
        const Ue = v ? v(ue) : null;
        if (typeof Ue == "string" && je(Ue) === "template") {
          const pt = ue.content;
          Dt(pt) && B.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Ce) {
        const Ue = u(ue);
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
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, B = null, oe = null, ue = null, Ce = null;
    if (Sn = !de, Sn && (de = "<!-->"), typeof de != "string" && !kt(de) && (de = ap(de), typeof de != "string"))
      throw Kn("dirty is not a string, aborting");
    if (!t.isSupported) return de;
    Tt ? (se = yt, ye = it) : At(T), (Q.uponSanitizeElement.length > 0 || Q.uponSanitizeAttribute.length > 0) && (se = an(se)), Q.uponSanitizeAttribute.length > 0 && (ye = an(ye)), t.removed = [];
    const Be = j && typeof de != "string" && kt(de);
    if (Be) {
      be(de);
      const fn = $(de);
      if (typeof fn == "string") {
        const tn = je(fn);
        if (!se[tn] || Ge[tn])
          throw bn(de), Kn("root node is forbidden and cannot be sanitized in-place");
      }
      if (xn(de))
        throw bn(de), Kn("root node is clobbered and cannot be sanitized in-place");
      try {
        Do(de);
      } catch (tn) {
        throw bn(de), tn;
      }
    } else if (kt(de))
      B = xe("<!---->"), oe = B.ownerDocument.importNode(de, !0), oe.nodeType === rn.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? B = oe : B.appendChild(oe), Do(B);
    else {
      if (!Ve && !ze && !Xe && de.indexOf("<") === -1) return E && ae ? S(de) : de;
      if (B = xe(de), !B) return Ve ? null : ae ? P : "";
    }
    B && ft && yn(B.firstChild);
    const Ue = Be ? de : B;
    try {
      const fn = nt(Ue);
      for (; ue = fn.nextNode(); )
        ms(ue, Ue), bs(ue, Ue), Dt(ue.content) && eo(ue.content);
    } catch (fn) {
      throw Be && (bn(de), ir(t.removed, (tn) => {
        tn.element && W(tn.element);
      })), fn;
    }
    if (Be) {
      let fn = !1;
      if (ir(t.removed, (tn) => {
        tn.element && (tn.element === de && (fn = !0), W(tn.element));
      }), fn) throw Kn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ze && St(de), de;
    }
    if (Ve) {
      if (ze && St(B), Ct)
        for (Ce = ee.call(B.ownerDocument); B.firstChild; ) Ce.appendChild(B.firstChild);
      else Ce = B;
      return (ye.shadowroot || ye.shadowrootmode) && (Ce = le.call(r, Ce, !0)), Ce;
    }
    let pt = Xe ? B.outerHTML : B.innerHTML;
    return Xe && se["!doctype"] && B.ownerDocument && B.ownerDocument.doctype && B.ownerDocument.doctype.name && Rt(gp, B.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + B.ownerDocument.doctype.name + `>
` + pt), ze && (pt = zt(pt)), E && ae ? S(pt) : pt;
  }, t.setConfig = function() {
    let de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(de), Tt = !0, yt = se, it = ye;
  }, t.clearConfig = function() {
    tt = null, Tt = !1, yt = null, it = null, E = I, P = "";
  }, t.isValidAttribute = function(de, T, B) {
    tt || At({});
    const oe = je(de), ue = je(T);
    return gs(oe, ue, B);
  }, t.addHook = function(de, T) {
    typeof T == "function" && Xt(Q, de) && Pr(Q[de], T);
  }, t.removeHook = function(de, T) {
    if (Xt(Q, de)) {
      if (T !== void 0) {
        const B = Qf(Q[de], T);
        return B === -1 ? void 0 : ep(Q[de], B, 1)[0];
      }
      return Bs(Q[de]);
    }
  }, t.removeHooks = function(de) {
    Xt(Q, de) && (Q[de] = []);
  }, t.removeAllHooks = function() {
    Q = Js();
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
const ao = "\0";
function lo(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Yr(i)}</code>`), `${ao}${n.length - 1}${ao}`));
  return t || (r = Yr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, c) => {
      const s = Sp(c);
      return s == null ? i : `<a href="${Yr(s)}">${i}</a>`;
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
    const f = d ? "ol" : "ul";
    i.push(
      `<${f}>${l.map((p) => `<li>${lo(p, n)}</li>`).join("")}</${f}>`
    );
  };
  for (; c < r.length; ) {
    const l = a(c) ?? "";
    if (/^\s*$/.test(l)) {
      c += 1;
      continue;
    }
    const d = /^(#{1,6})\s+(.*)$/.exec(l), f = d?.[1], p = d?.[2];
    if (f !== void 0 && p !== void 0) {
      i.push(
        `<h${f.length}>${lo(p.trim(), n)}</h${f.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const _ = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", x = [];
      for (c += 1; c < r.length; ) {
        const u = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(u)) break;
        x.push(u), c += 1;
      }
      c += 1;
      const m = _ ? ` class="language-${Yr(_)}"` : "";
      i.push(
        `<pre><code${m}>${Yr(x.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const _ = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        _.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${_.map((x) => `<p>${lo(x, n)}</p>`).join("")}</blockquote>`
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
function f$({
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
const p$ = at(
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
    className: f,
    sanitize: p = !0
  }, g) {
    const [h, b] = q(!1), [_, x] = q(n), [m, u] = q(
      null
    ), [y, k] = q(""), [v, O] = q(""), [w, $] = q(2), [E, P] = q(2), [I, z] = q(!1), M = ie(null), N = ie(null), S = ie(n), R = U(
      (K) => p ? Ba.sanitize(K) : K,
      [p]
    );
    Ne(() => {
      const K = M.current;
      t !== void 0 && K && K.innerHTML !== t && (K.innerHTML = t), t !== void 0 && (S.current = t);
    }, [t]);
    const C = U(
      (K) => {
        S.current = R(K), r?.(S.current);
      },
      [R, r]
    ), A = U(
      (K, $e) => {
        if (s || l) return !1;
        M.current?.focus();
        const se = Zo(K, $e);
        if (se) {
          const Ae = M.current;
          Ae && C(Ae.innerHTML);
        }
        return se;
      },
      [C, s, l]
    ), L = U(
      () => M.current?.innerHTML ?? S.current,
      []
    ), F = U(
      (K) => {
        A("insertHTML", K);
      },
      [A]
    ), ee = U(() => {
      M.current?.focus();
    }, []), ne = Se(
      () => ({
        execCommand: A,
        getHtml: L,
        insertHtml: F,
        focus: ee
      }),
      [A, L, F, ee]
    );
    $o(g, () => ({ execCommand: A, getHtml: L }), [
      A,
      L
    ]);
    const le = U(
      (K) => {
        const $e = ea[K];
        !$e || s || l || A($e.command);
      },
      [A, s, l]
    ), Q = U(() => {
      s || l || (h ? (b(!1), C(_)) : (x(M.current?.innerHTML ?? ""), b(!0)));
    }, [h, _, C, s, l]), Ie = U(
      (K) => {
        if (!(K.ctrlKey || K.metaKey) || s || l) return;
        const $e = K.key.toLowerCase(), se = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        se && (K.preventDefault(), le(se));
      },
      [le, s, l]
    ), J = U(() => {
      const K = M.current;
      K && C(K.innerHTML);
    }, [C]), V = U(() => {
      y.trim() && (A("createLink", y.trim()), k(""), u(null));
    }, [y, A]), Y = U(() => {
      v.trim() && (A("insertImage", v.trim()), O(""), u(null));
    }, [v, A]), he = U(
      async (K) => {
        if (c) {
          z(!0);
          try {
            const $e = new FormData();
            $e.append(c.parameterName ?? "file", K);
            const se = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: $e
            });
            if (!se.ok)
              throw new Error(`Upload failed: ${se.status}`);
            const ye = (se.headers.get("content-type") ?? "").includes("application/json") ? await se.json() : await se.text(), We = (c.parseUrl ?? Up)(ye);
            A("insertImage", We);
          } catch ($e) {
            a?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            z(!1), u(null);
          }
        }
      },
      [c, a, A]
    ), te = U(() => {
      const K = Math.max(1, Math.min(10, Math.floor(w) || 1)), $e = Math.max(1, Math.min(10, Math.floor(E) || 1)), se = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: K }, () => `<tr>${se}</tr>`).join(
        ""
      );
      A("insertHTML", `<table><tbody>${Ae}</tbody></table>`), u(null);
    }, [w, E, A]), me = (K, $e) => {
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
              !s && !l && K.onExecute(ne);
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
        return /* @__PURE__ */ D("label", { className: Ot.tool, title: Ae, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: l,
              className: Ot.colorInput,
              onMouseDown: (ye) => ye.preventDefault(),
              onChange: (ye) => A(
                K === "foreColor" ? "foreColor" : "hiliteColor",
                ye.target.value
              )
            }
          )
        ] }, K);
      }
      if (K === "formatBlock" || K === "fontName" || K === "fontSize") {
        const Ae = K === "formatBlock" ? "Format block" : K === "fontName" ? "Font name" : "Font size", ye = K === "formatBlock" ? Fp : K === "fontName" ? jp : Bp;
        return /* @__PURE__ */ D(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: l,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (We) => We.preventDefault(),
            onChange: (We) => {
              !We.target.value || s || l || (K === "formatBlock" ? Hp(We.target.value) : A(K === "fontName" ? "fontName" : "fontSize", We.target.value), We.target.value = "");
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
              !s && !l && (k(""), u("link"));
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
              !s && !l && (O(""), u("image"));
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
              !s && !l && ($(2), P(2), u("table"));
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
          onClick: () => le(K),
          children: se.glyph
        },
        K
      ) : null;
    };
    return /* @__PURE__ */ D("div", { className: [Ot.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: Ot.toolbar,
          children: i.map((K, $e) => me(K, $e))
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
            x(K.target.value), C(K.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: M,
          className: Ot.area,
          contentEditable: !s && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          tabIndex: 0,
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: S.current },
          onInput: J,
          onKeyDown: Ie
        }
      ),
      /* @__PURE__ */ D(
        Ma,
        {
          open: m !== null,
          onClose: () => u(null),
          title: m === "link" ? "Insert link" : m === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(dn, { variant: "text", onClick: () => u(null), children: "Cancel" }),
            m === "link" && /* @__PURE__ */ o(dn, { onClick: V, children: "Insert" }),
            m === "image" && /* @__PURE__ */ o(dn, { onClick: Y, disabled: I, children: "Insert" }),
            m === "table" && /* @__PURE__ */ o(dn, { onClick: te, children: "Insert" })
          ] }),
          children: [
            m === "link" && /* @__PURE__ */ o(cr, { label: "URL", required: !0, children: ({ inputId: K }) => /* @__PURE__ */ o(
              no,
              {
                id: K,
                value: y,
                placeholder: "https://",
                onChange: ($e) => k($e.target.value)
              }
            ) }),
            m === "image" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ o(cr, { label: "Image URL", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => O($e.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(cr, { label: "Or upload a file", children: ({ inputId: K }) => /* @__PURE__ */ o(
                "input",
                {
                  id: K,
                  ref: N,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const se = $e.target.files?.[0];
                    se && he(se), $e.target.value = "";
                  }
                }
              ) }),
              I && /* @__PURE__ */ o(Aa, { textStyle: "body2", children: "Uploading…" })
            ] }),
            m === "table" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ o(cr, { label: "Rows", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String(w),
                  onChange: ($e) => $(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(cr, { label: "Columns", children: ({ inputId: K }) => /* @__PURE__ */ o(
                no,
                {
                  id: K,
                  type: "number",
                  value: String(E),
                  onChange: ($e) => P(Number($e.target.value))
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
}, Ha = dr(null);
function _$() {
  const e = Fn(Ha);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function ta(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Wp({ state: e }) {
  const t = ie(null), [n, r] = q(null);
  return Ne(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), c = a.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - c.width)
    );
    let l = i.bottom + 4;
    l + c.height > window.innerHeight && i.top - 4 - c.height >= 0 && (l = i.top - 4 - c.height), r({ left: s, top: Math.max(0, l) });
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
function h$({ children: e }) {
  const [t, n] = q(null), r = ie(0), a = ie(null), i = U(() => {
    a.current?.(), a.current = null;
  }, []), c = U(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = U(
    (d) => {
      r.current += 1;
      const f = r.current;
      a.current = d.onClose ?? null, n({
        ...d,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), d.onOpen?.();
      let p = !1;
      return () => {
        p || (p = !0, n((g) => g?.seq !== f ? g : (g.invoker && document.body.contains(g.invoker) && g.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  Ne(() => {
    if (!t) return;
    const d = (h) => {
      const b = document.querySelector(`.${Fa.popup}`);
      b && !b.contains(h.target) && c();
    }, f = (h) => {
      h.key === "Escape" && (h.preventDefault(), c());
    }, p = () => c(), g = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", p), window.addEventListener("hashchange", g), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", p), window.removeEventListener("hashchange", g);
    };
  }, [t, c]);
  const l = Se(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ D(Ha.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(Wp, { state: t }, t.seq)
  ] });
}
const Kp = "_alert_146r9_1", Gp = "_xs_146r9_28", Vp = "_sm_146r9_38", Yp = "_lg_146r9_48", Xp = "_xl_146r9_58", Zp = "_primary_146r9_69", Jp = "_secondary_146r9_74", Qp = "_light_146r9_79", e_ = "_base_146r9_84", t_ = "_dark_146r9_89", n_ = "_info_146r9_94", r_ = "_success_146r9_99", o_ = "_warning_146r9_104", s_ = "_danger_146r9_109", a_ = "_flat_146r9_116", l_ = "_outlined_146r9_123", i_ = "_filled_146r9_132", c_ = "_text_146r9_139", d_ = "_icon_146r9_181", u_ = "_content_146r9_192", f_ = "_title_146r9_197", p_ = "_body_146r9_203", __ = "_dismiss_146r9_209", On = {
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
function m$({
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
  visible: f,
  onVisibleChange: p,
  className: g,
  ...h
}) {
  const [b, _] = q(!1);
  if (f === !1 || f === void 0 && b)
    return null;
  const x = () => {
    f === void 0 && _(!0), d?.(), p?.(!1);
  }, m = e, u = Sa(t, "filled"), y = Xr(n), k = i ?? (c ? /* @__PURE__ */ o(Ee, { icon: h_[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        On.alert,
        On[m],
        On[u],
        y ? On[y] : null,
        On[r],
        g
      ].filter(Boolean).join(" "),
      children: [
        k != null && /* @__PURE__ */ o("span", { className: On.icon, "aria-hidden": "true", children: k }),
        /* @__PURE__ */ D("div", { className: On.content, children: [
          a && /* @__PURE__ */ o("div", { className: On.title, children: a }),
          s && /* @__PURE__ */ o("div", { className: On.body, children: s })
        ] }),
        l && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: On.dismiss,
            onClick: x,
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
function g$({
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
function xo(e) {
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
function y$({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...s
}) {
  const l = e != null ? xo(e) : null, d = t != null ? xo(t) : null, f = {
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
function b$({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [I, z, M, N] of By) {
    const S = n[z], R = n[M], C = n[N];
    if (S != null) {
      Fy(z, S);
      const A = co[`${I}Size${S}`];
      A && r.push(A);
    }
    if (R != null) {
      Hy(M, R);
      const A = co[`${I}Offset${R}`];
      A && r.push(A);
    }
    if (C != null) {
      const A = co[qy(I, C, N)];
      A && r.push(A);
    }
  }
  const {
    size: i,
    offset: c,
    sizeXs: s,
    offsetXs: l,
    sizeSm: d,
    offsetSm: f,
    sizeMd: p,
    offsetMd: g,
    sizeLg: h,
    offsetLg: b,
    sizeXl: _,
    offsetXl: x,
    sizeXx: m,
    offsetXx: u,
    order: y,
    orderXs: k,
    orderSm: v,
    orderMd: O,
    orderLg: w,
    orderXl: $,
    orderXx: E,
    ...P
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: a,
      ...P
    }
  );
}
const Wy = "_stack_bmbbp_1", Br = {
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
function x$({
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
  const d = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: xo(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Br.stack,
        Br[`dir-${d}`],
        oa(n) !== "wrap" ? Br[`wrap-${oa(n)}`] : null,
        a != null ? Br[`align-${a}`] : null,
        i != null ? Br[`justify-${i}`] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const Ky = "_autogrid_16x9f_1", Gy = {
  autogrid: Ky
};
function v$({
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
    ...t != null ? { gap: xo(t) } : {},
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
const Vy = "_layout_fxvw1_1", Yy = "_row_fxvw1_7", Xy = "_grid_fxvw1_21", Zy = "_gridRight_fxvw1_27", Jy = "_gridHeader_fxvw1_31", Qy = "_gridFooter_fxvw1_36", e0 = "_gridContents_fxvw1_41", t0 = "_gridBody_fxvw1_45", Dn = {
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
const i0 = "_sidebar_175d5_1", c0 = "_sticky_175d5_23", d0 = "_left_175d5_41", u0 = "_right_175d5_45", f0 = "_start_175d5_50", p0 = "_end_175d5_54", _0 = "_fullHeight_175d5_60", h0 = "_collapsed_175d5_64", m0 = "_responsive_175d5_72", g0 = "_overlay_175d5_80", y0 = "_mask_175d5_108", Vn = {
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
  return Ne(() => {
    if (!r || !t || c == null) return;
    const f = (p) => {
      p.key === "Escape" && c();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, c]), /* @__PURE__ */ D(ot, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${Vn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: c
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          Vn.sidebar,
          Vn[e],
          t ? null : Vn.collapsed,
          n ? Vn.responsive : null,
          r ? [Vn.overlay, "se-sidebar--overlay"] : null,
          a ? Vn.fullHeight : null,
          i && !r && !a ? Vn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...d,
        children: l
      }
    )
  ] });
}
function w$(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(ot, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], s = [], l = [], d = [];
  Zr.forEach(n, (g) => {
    if (!Kt(g)) {
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
  const f = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, p = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const g = p ? l : s;
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          Dn.layout,
          Dn.grid,
          p ? Dn.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          a.length > 0 && /* @__PURE__ */ o("div", { className: Dn.gridHeader, children: a }),
          /* @__PURE__ */ D("div", { className: Dn.gridContents, children: [
            g,
            /* @__PURE__ */ o("div", { className: Dn.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: Dn.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Dn.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        a,
        /* @__PURE__ */ D("div", { className: Dn.row, children: [
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
function k$({
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
function N$({
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
const N0 = "_track_14127_1", S0 = "_bar_14127_31", $0 = "_primary_14127_39", O0 = "_success_14127_43", E0 = "_warning_14127_47", T0 = "_danger_14127_51", C0 = "_indeterminate_14127_149", M0 = "_circular_14127_163", A0 = "_fill_14127_203", on = {
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
function S$({
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
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const h = typeof c == "string", b = 2, _ = 10.5, x = 2 * Math.PI * _, m = x * (a ? 0.75 : 1), u = a ? 0 : x * (1 - p / 100), y = Xr(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: h ? void 0 : c,
        height: h ? void 0 : c,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": d["aria-label"],
        "aria-labelledby": d["aria-labelledby"],
        "aria-valuenow": a ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...d,
        className: [
          on.circular,
          on[n],
          y ? on[y] : null,
          h ? on[`circular-${c}`] : null,
          a ? on.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: on.track,
              cx: 12,
              cy: 12,
              r: _,
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: on.fill,
              cx: 12,
              cy: 12,
              r: _,
              strokeWidth: b,
              strokeDasharray: `${m} ${x}`,
              strokeDashoffset: u
            }
          )
        ]
      }
    );
  }
  const g = Xr(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": a ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        on.track,
        on[n],
        g ? on[g] : null,
        typeof c == "string" ? on[`linear-${c}`] : null,
        a ? on.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: on.bar,
          style: a ? void 0 : { width: `${p}%` }
        }
      )
    }
  );
}
function D0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Eo(e) {
  const [t, n] = q(() => D0(e));
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
    toggleShade: c = "darker",
    toggleContent: s,
    size: l = "md",
    className: d,
    onClick: f,
    children: p,
    variant: g,
    severity: h,
    shade: b,
    ..._
  }, x) {
    const [m, u] = q(n), y = t ?? m, k = (v) => {
      const O = !y;
      t === void 0 && u(O), r?.(O), f?.(v);
    };
    return /* @__PURE__ */ o(
      dn,
      {
        ..._,
        ref: x,
        variant: y && a ? a : g,
        severity: y ? i : h,
        shade: y ? c : b,
        size: l,
        "aria-pressed": y,
        className: [y ? z0.pressed : null, d].filter(Boolean).join(" "),
        onClick: k,
        children: y && s !== void 0 ? s : p
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
function $$({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = Eo("(prefers-color-scheme: dark)"), [d, f] = q(void 0), p = e !== void 0, g = e ?? d ?? P0(n) ?? t ?? "system", h = g === "system" ? l ? "dark" : "light" : g;
  return Ne(() => {
    if (!p) {
      if (g === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = g;
    }
  }, [g, p]), /* @__PURE__ */ o(
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
        const x = _ ? "dark" : "light";
        p || (f(x), R0(n, x)), r?.(x);
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
function $r() {
  const e = j0();
  if (!ca) {
    ca = !0;
    const t = ia(qa), n = ia(Wa), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
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
function O$() {
  return $r().theme;
}
function B0(e) {
  const t = $r();
  t.theme !== e && (t.theme = e, us(t), Ka(qa, e), Ga());
}
function E$() {
  return $r().appearance;
}
function F0(e) {
  const t = $r();
  t.appearance !== e && (t.appearance = e, us(t), Ka(Wa, e), Ga());
}
function T$() {
  const [, e] = q(0);
  Ne(() => da(() => e((n) => n + 1)), []);
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
    (_, x) => Math.floor(Math.abs(Math.sin(x + 1)) * 4294967296)
  ), l = (_, x) => _ + x | 0, d = (_, x) => _ << x | _ >>> 32 - x;
  let f = 1732584193, p = 4023233417, g = 2562383102, h = 271733878;
  for (let _ = 0; _ < r; _ += 64) {
    const x = [];
    for (let v = 0; v < 16; v += 1)
      x.push(i.getUint32(_ + v * 4, !0));
    let m = f, u = p, y = g, k = h;
    for (let v = 0; v < 64; v += 1) {
      let O, w;
      v < 16 ? (O = u & y | ~u & k, w = v) : v < 32 ? (O = k & u | ~k & y, w = (5 * v + 1) % 16) : v < 48 ? (O = u ^ y ^ k, w = (3 * v + 5) % 16) : (O = y ^ (u | ~k), w = 7 * v % 16), O = l(l(l(O, m), s[v]), x[w]), m = k, k = y, y = u, u = l(u, d(O, c[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = l(f, m), p = l(p, u), g = l(g, y), h = l(h, k);
  }
  const b = (_) => {
    let x = "";
    for (let m = 0; m < 4; m += 1)
      x += `0${(_ >>> m * 8 & 255).toString(16)}`.slice(-2);
    return x;
  };
  return b(f) + b(p) + b(g) + b(h);
}
const U0 = "_avatar_1mhfr_1", q0 = "_xs_1mhfr_12", W0 = "_sm_1mhfr_18", K0 = "_md_1mhfr_24", G0 = "_lg_1mhfr_30", V0 = "_xl_1mhfr_36", Y0 = "_initials_1mhfr_42", X0 = "_image_1mhfr_57", Z0 = "_status_1mhfr_64", J0 = "_online_1mhfr_84", Q0 = "_offline_1mhfr_88", eb = "_away_1mhfr_92", hr = {
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
function C$({
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
  const d = Se(() => e ? nb(e) : "?", [e]), f = Se(() => e ? rb(e) : mo[0], [e]), p = Se(() => {
    if (t != null || n == null) return;
    const k = n.trim().toLowerCase();
    return k === "" ? void 0 : `https://secure.gravatar.com/avatar/${H0(k)}?d=${r}&s=${tb[c]}&r=${a}`;
  }, [t, n, r, a, c]), g = t ?? p, [h, b] = q(null), _ = g != null && h !== g, x = _ && i === "", m = i ?? e ?? "avatar", u = s ? `${m}, ${s}` : m, y = _ ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: hr.image,
        src: g,
        alt: x ? "" : s ? u : m,
        onError: () => b(g ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: hr.initials,
      style: { background: f },
      children: d
    }
  );
  return /* @__PURE__ */ D(
    "span",
    {
      className: [
        hr.avatar,
        hr[c],
        s ? hr[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: _ ? void 0 : "img",
      "aria-label": _ ? void 0 : u,
      children: [
        y,
        s && /* @__PURE__ */ o("span", { className: hr.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ob = "_root_zzwfz_1", sb = "_left_zzwfz_6", ab = "_right_zzwfz_7", lb = "_panel_zzwfz_12", ib = "_bottom_zzwfz_20", cb = "_tabList_zzwfz_24", db = "_underline_zzwfz_53", ub = "_pills_zzwfz_72", fb = "_tab_zzwfz_24", pb = "_active_zzwfz_113", _b = "_disabled_zzwfz_139", In = {
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
function M$({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c,
  ariaLabel: s,
  ariaLabelledBy: l
}) {
  const d = ct(), f = ie(null), [p, g] = q(
    n ?? e[0]?.key ?? ""
  ), h = t ?? p, b = i === "left" || i === "right", _ = (u) => {
    g(u), r?.(u);
  }, x = (u) => {
    const y = e.filter((O) => !O.disabled), k = y.findIndex((O) => O.key === h);
    let v = -1;
    u.key === "ArrowRight" || b && u.key === "ArrowDown" ? v = (k + 1) % y.length : u.key === "ArrowLeft" || b && u.key === "ArrowUp" ? v = (k - 1 + y.length) % y.length : u.key === "Home" ? v = 0 : u.key === "End" && (v = y.length - 1), v >= 0 && (u.preventDefault(), f.current?.querySelector(
      `[data-tab-key="${CSS.escape(y[v]?.key ?? "")}"]`
    )?.focus(), _(y[v]?.key ?? ""));
  }, m = e.find((u) => u.key === h);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [In.root, In[i], c].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: f,
            role: "tablist",
            "aria-label": s,
            "aria-labelledby": l,
            tabIndex: -1,
            className: [In.tabList, In[a], In[i]].filter(Boolean).join(" "),
            onKeyDown: x,
            children: e.map((u) => {
              const y = u.key === h;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${d}-tab-${u.key}`,
                  "data-tab-key": u.key,
                  "aria-selected": y,
                  "aria-controls": `${d}-panel-${u.key}`,
                  tabIndex: y ? 0 : -1,
                  disabled: u.disabled,
                  className: [
                    In.tab,
                    y ? In.active : null,
                    u.disabled ? In.disabled : null
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
            id: `${d}-panel-${m.key}`,
            "aria-labelledby": `${d}-tab-${m.key}`,
            className: In.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const hb = "_root_1l1j2_1", mb = "_item_1l1j2_9", gb = "_heading_1l1j2_13", yb = "_trigger_1l1j2_17", bb = "_disabled_1l1j2_34", xb = "_title_1l1j2_48", vb = "_chevron_1l1j2_52", wb = "_open_1l1j2_59", kb = "_content_1l1j2_63", zn = {
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
function A$({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const c = ct(), [s, l] = q(
    r ?? []
  ), d = n ?? s, f = (p) => {
    const g = d.includes(p) ? d.filter((h) => h !== p) : t ? [...d, p] : [p];
    l(g), a?.(g);
  };
  return /* @__PURE__ */ o("div", { className: [zn.root, i].filter(Boolean).join(" "), children: e.map((p) => {
    const g = d.includes(p.key), h = `${c}-panel-${p.key}`, b = `${c}-trigger-${p.key}`;
    return /* @__PURE__ */ D("div", { className: zn.item, children: [
      /* @__PURE__ */ o("h3", { className: zn.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": g,
          "aria-controls": h,
          disabled: p.disabled,
          className: [
            zn.trigger,
            p.disabled ? zn.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(p.key),
          children: [
            /* @__PURE__ */ o("span", { className: zn.title, children: p.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [zn.chevron, g ? zn.open : null].filter(Boolean).join(" "),
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
          hidden: !g,
          className: zn.content,
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
}, D$ = at(
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
), Mb = "_root_xyp2i_1", Ab = "_trigger_xyp2i_9", Db = "_invalid_xyp2i_40", Ib = "_placeholder_xyp2i_47", zb = "_label_xyp2i_54", Lb = "_chevron_xyp2i_60", Pb = "_chevronOpen_xyp2i_70", Rb = "_menu_xyp2i_74", jb = "_option_xyp2i_89", Bb = "_disabled_xyp2i_100", Fb = "_active_xyp2i_104", Hb = "_selected_xyp2i_105", Ub = "_header_xyp2i_115", qb = "_xs_xyp2i_122", Wb = "_sm_xyp2i_128", Kb = "_md_xyp2i_134", Gb = "_lg_xyp2i_140", Vb = "_xl_xyp2i_146", qt = {
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
function I$({
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
  const f = ct(), p = `${f}-listbox`, g = ie(null), h = ie(null), [b, _] = q(
    n
  ), [x, m] = q(!1), u = t ?? b, y = e.map(
    (M, N) => M.label === "" || M.disabled ? -1 : N
  ).filter((M) => M >= 0), k = e.findIndex(
    (M) => M.value === u
  ), [v, O] = q(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), w = U(() => {
    if (s) return;
    const M = k >= 0 && y.includes(k) ? k : y[0];
    O(M ?? -1), m(!0);
  }, [s, k, y]), $ = U(() => {
    m(!1), h.current?.focus();
  }, []);
  Ne(() => {
    if (!x) return;
    const M = (N) => {
      g.current && !g.current.contains(N.target) && m(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [x]);
  const E = (M) => {
    _(M), r?.(M), m(!1), h.current?.focus();
  }, P = (M) => {
    if (y.length === 0) return;
    const N = y.includes(v) ? y.indexOf(v) : 0, S = y[(N + M + y.length) % y.length];
    S != null && O(S);
  }, I = (M) => {
    if (!x) {
      M.key === "ArrowDown" && (M.preventDefault(), w());
      return;
    }
    switch (M.key) {
      case "ArrowDown":
        M.preventDefault(), P(1);
        break;
      case "ArrowUp":
        M.preventDefault(), P(-1);
        break;
      case "Home":
        M.preventDefault(), y[0] != null && O(y[0]);
        break;
      case "End":
        M.preventDefault(), y[y.length - 1] != null && O(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        M.preventDefault(), v >= 0 && e[v] && y.includes(v) && E(e[v]?.value ?? "");
        break;
      case "Escape":
        M.preventDefault(), $();
        break;
      case "Tab":
        m(!1);
        break;
    }
  }, z = e.find(
    (M) => M.value === u
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- delegates keyboard handling to the trigger and popup; the root has no click semantics of its own
    /* @__PURE__ */ D(
      "div",
      {
        ref: g,
        className: [qt.root, l].filter(Boolean).join(" "),
        onKeyDown: I,
        children: [
          /* @__PURE__ */ D(
            "button",
            {
              ref: h,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": x,
              "aria-controls": p,
              "aria-invalid": c || void 0,
              disabled: s,
              className: [
                qt.trigger,
                qt[i],
                x ? qt.open : null,
                c ? qt.invalid : null
              ].filter(Boolean).join(" "),
              onClick: () => x ? m(!1) : w(),
              ...d,
              children: [
                /* @__PURE__ */ o("span", { className: z ? qt.label : qt.placeholder, children: z ? z.label : a }),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: [qt.chevron, x ? qt.chevronOpen : null].filter(Boolean).join(" "),
                    style: { backgroundImage: Yb },
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          x && /* @__PURE__ */ o(
            "div",
            {
              id: p,
              role: "listbox",
              "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
              tabIndex: -1,
              className: qt.menu,
              children: e.map(
                (M, N) => M.label === "" ? /* @__PURE__ */ o(
                  "div",
                  {
                    className: qt.header,
                    role: "presentation",
                    children: M.value
                  },
                  M.value
                ) : (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option via the root keydown handler
                  /* @__PURE__ */ o(
                    "div",
                    {
                      id: `${f}-option-${N}`,
                      role: "option",
                      tabIndex: -1,
                      "aria-selected": M.value === u,
                      "aria-disabled": M.disabled || void 0,
                      className: [
                        qt.option,
                        N === v ? qt.active : null,
                        M.value === u ? qt.selected : null,
                        M.disabled ? qt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => {
                        M.disabled || E(M.value);
                      },
                      onMouseEnter: () => {
                        !M.disabled && M.label !== "" && O(N);
                      },
                      children: M.label
                    },
                    M.value
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
const Xb = "_root_1ma8a_1", Zb = "_wrap_1ma8a_9", Jb = "_input_1ma8a_26", Qb = "_invalid_1ma8a_31", ex = "_clear_1ma8a_58", tx = "_menu_1ma8a_83", nx = "_option_1ma8a_98", rx = "_disabled_1ma8a_109", ox = "_active_1ma8a_113", sx = "_empty_1ma8a_123", ax = "_xs_1ma8a_129", lx = "_sm_1ma8a_136", ix = "_md_1ma8a_143", cx = "_lg_1ma8a_150", dx = "_xl_1ma8a_157", pn = {
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
function z$({
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
  className: f,
  ...p
}) {
  const g = ct(), h = `${g}-listbox`, b = ie(null), _ = ie(null), [x, m] = q(n), [u, y] = q(!1), k = t ?? x, v = Se(
    () => k.trim() === "" ? [...e] : e.filter((C) => d(C, k)),
    [e, k, d]
  ), O = v.map((C, A) => C.disabled ? -1 : A).filter((C) => C >= 0), [w, $] = q(-1), E = (C) => {
    m(C), r?.(C);
  }, P = (C) => {
    E(C.label), a?.(C.value, C), y(!1);
  }, I = (C) => {
    if (O.length === 0) return;
    const A = O.includes(w) ? O.indexOf(w) : C === 1 ? -1 : 0, L = O[(A + C + O.length) % O.length];
    L != null && $(L);
  }, z = (C) => {
    l || (E(C.target.value), y(!0), $(-1));
  }, M = () => {
    l || k !== "" && y(!0);
  }, N = (C) => {
    b.current && !b.current.contains(C.relatedTarget) && y(!1);
  }, S = (C) => {
    if (!l)
      switch (C.key) {
        case "ArrowDown":
          C.preventDefault(), u ? I(1) : (y(!0), $(O[0] ?? -1));
          break;
        case "ArrowUp":
          C.preventDefault(), u && I(-1);
          break;
        case "Enter":
          C.preventDefault(), u && w >= 0 && v[w] && P(v[w]);
          break;
        case "Escape":
          C.preventDefault(), y(!1);
          break;
        case "Tab":
          u && w >= 0 && v[w] && P(v[w]), y(!1);
          break;
      }
  }, R = () => {
    E(""), $(-1), y(!0), _.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: b,
      className: [pn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: [pn.wrap, pn[c], s ? pn.invalid : null].filter(Boolean).join(" "),
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
                  "aria-activedescendant": u && w >= 0 ? `${g}-option-${w}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: k,
                  placeholder: i,
                  className: pn.input,
                  onChange: z,
                  onFocus: M,
                  onBlur: N,
                  onKeyDown: S,
                  ...p
                }
              ),
              k !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: pn.clear,
                  "aria-label": "Clear",
                  onClick: R,
                  children: /* @__PURE__ */ o(Ee, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        u && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: h, className: pn.menu, children: /* @__PURE__ */ o("div", { className: pn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: h, role: "listbox", className: pn.menu, children: v.map((C, A) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option through the input's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${g}-option-${A}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": !1,
              "aria-disabled": C.disabled || void 0,
              className: [
                pn.option,
                A === w ? pn.active : null,
                C.disabled ? pn.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                C.disabled || P(C);
              },
              onMouseDown: (L) => {
                L.preventDefault(), C.disabled || P(C);
              },
              onMouseEnter: () => {
                C.disabled || $(A);
              },
              children: C.label
            },
            C.value
          )
        )) }))
      ]
    }
  );
}
const fx = "_box_muvqe_1", px = "_option_muvqe_12", _x = "_disabled_muvqe_23", hx = "_selected_muvqe_27", mx = "_active_muvqe_33", Fr = {
  box: fx,
  option: px,
  disabled: _x,
  selected: hx,
  active: mx
};
function L$({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...s
}) {
  const l = ct(), [d, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), p = t == null ? d : Array.isArray(t) ? t : [t], g = e.findIndex((v) => !v.disabled), [h, b] = q(
    () => g >= 0 ? g : 0
  ), _ = ie(""), x = ie(null), m = (v) => {
    f(v), a?.(r ? v : v[0] ?? "");
  }, u = e.map((v, O) => v.disabled ? -1 : O).filter((v) => v >= 0), y = (v) => {
    const O = e[v];
    if (!(!O || O.disabled))
      if (b(v), r) {
        const w = p.includes(O.value) ? p.filter(($) => $ !== O.value) : [...p, O.value];
        m(w);
      } else
        m([O.value]);
  }, k = (v) => {
    if (u.length === 0) return;
    const O = u.includes(h) ? h : u[0];
    let w = -1;
    if (v.key === "ArrowDown")
      w = u[(u.indexOf(O) + 1) % u.length];
    else if (v.key === "ArrowUp")
      w = u[(u.indexOf(O) - 1 + u.length) % u.length];
    else if (v.key === "Home")
      w = u[0];
    else if (v.key === "End")
      w = u[u.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), y(O);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const $ = (_.current + v.key).toLowerCase();
      _.current = $, x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        _.current = "";
      }, 500);
      const E = [...u, ...u], P = u.indexOf(O) + 1, I = E.slice(P).find((z) => e[z]?.label.toLowerCase().startsWith($));
      I != null && b(I);
      return;
    }
    w >= 0 && (v.preventDefault(), b(w), r || m([e[w]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[h] ? `${l}-option-${h}` : void 0,
      style: c,
      className: [Fr.box, i].filter(Boolean).join(" "),
      onKeyDown: k,
      ...s,
      children: e.map((v, O) => {
        const w = p.includes(v.value), $ = O === h;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${l}-option-${O}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": w,
              "aria-disabled": v.disabled || void 0,
              className: [
                Fr.option,
                w ? Fr.selected : null,
                $ ? Fr.active : null,
                v.disabled ? Fr.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => y(O),
              children: v.label
            },
            v.value
          )
        );
      })
    }
  );
}
const gx = "_group_oinj7_1", yx = "_legend_oinj7_8", bx = "_list_oinj7_16", xx = "_item_oinj7_25", vx = "_disabled_oinj7_32", wx = "_label_oinj7_37", kx = "_checkbox_oinj7_48", nr = {
  group: gx,
  legend: yx,
  list: bx,
  item: xx,
  disabled: vx,
  label: wx,
  checkbox: kx
};
function P$({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: a,
  name: i,
  className: c
}) {
  const [s, l] = q(() => [
    ...n
  ]), d = t ?? s, f = (p, g) => {
    const h = g ? [...d, p] : d.filter((b) => b !== p);
    l(h), r?.(h);
  };
  return /* @__PURE__ */ D("fieldset", { className: [nr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: nr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: nr.list, children: e.map((p) => {
      const g = d.includes(p.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [nr.item, p.disabled ? nr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: nr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: nr.checkbox,
                name: i,
                value: p.value,
                checked: g,
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
const Nx = "_group_46668_1", Sx = "_legend_46668_8", $x = "_list_46668_16", Ox = "_item_46668_25", Ex = "_disabled_46668_32", Tx = "_label_46668_37", Cx = "_radio_46668_48", rr = {
  group: Nx,
  legend: Sx,
  list: $x,
  item: Ox,
  disabled: Ex,
  label: Tx,
  radio: Cx
};
function R$({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: a,
  name: i,
  className: c
}) {
  const [s, l] = q(
    n
  ), d = t ?? s, f = (p) => {
    l(p), r?.(p);
  };
  return /* @__PURE__ */ D("fieldset", { className: [rr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: rr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: rr.list, children: e.map((p) => {
      const g = p.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [rr.item, p.disabled ? rr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: rr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: rr.radio,
                name: i,
                value: p.value,
                checked: g,
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
const Mx = "_bar_9zyxn_1", Ax = "_vertical_9zyxn_12", Dx = "_option_9zyxn_17", Ix = "_selected_9zyxn_40", zx = "_sm_9zyxn_56", Lx = "_md_9zyxn_62", Px = "_lg_9zyxn_68", mr = {
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
function j$(e) {
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
  } = e, f = a ?? !1, [p, g] = q(r ?? (f ? [] : t[0]?.value)), h = n ?? p, b = a === !0 || a === void 0 && Array.isArray(h), _ = (m) => {
    if (!b) {
      g(m), c?.(m);
      return;
    }
    const u = ua(h), y = u.includes(m) ? u.filter((k) => k !== m) : [...u, m];
    g(y), c?.(y);
  }, x = (m) => b ? ua(h).includes(m) : h === m;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        mr.bar,
        mr[s],
        i === "vertical" ? mr.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...d,
      children: t.map((m) => {
        const u = x(m.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: m.disabled,
            className: [
              mr.option,
              u ? mr.selected : null,
              m.disabled ? mr.disabled : null
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
const Rx = "_root_11hdr_1", jx = "_action_11hdr_10", Bx = "_caret_11hdr_15", Fx = "_sm_11hdr_49", Hx = "_md_11hdr_53", Ux = "_lg_11hdr_57", qx = "_fullWidth_11hdr_62", Wx = "_menu_11hdr_70", Kx = "_item_11hdr_83", Gx = "_itemIcon_11hdr_105", Vx = "_disabled_11hdr_110", Yx = "_active_11hdr_114", Xx = "_danger_11hdr_123", wn = {
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
}, B$ = at(
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
    fullWidth: f = !1,
    disabled: p = !1,
    className: g,
    "aria-label": h,
    openAriaLabel: b = "More actions",
    ..._
  }, x) {
    const u = `${ct()}-menu`, y = ie(null), k = ie(null), v = ie([]), [O, w] = q(!1), [$, E] = q(-1), P = p || l, I = Se(
      () => r.map((L, F) => L.disabled ? -1 : F).filter((L) => L >= 0),
      [r]
    ), z = U(() => {
      P || (E(I[0] ?? -1), w(!0));
    }, [P, I]), M = U(() => {
      w(!1), k.current?.focus();
    }, []);
    Ne(() => {
      if (!O) return;
      const L = (F) => {
        y.current && !y.current.contains(F.target) && w(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [O]), Ne(() => {
      O && (P || !d) && w(!1);
    }, [O, P, d]);
    const N = ie(O);
    if (Ne(() => {
      const L = N.current;
      if (N.current = O, !O || L) return;
      const F = I.includes($) ? $ : I[0] ?? -1;
      F >= 0 && v.current[F]?.focus();
    }, [O, $, I]), d === !1) return null;
    const S = (L) => {
      const F = r[L];
      !F || F.disabled || (F.onClick?.(), w(!1), k.current?.focus());
    }, R = (L) => {
      if (I.length === 0) return;
      const F = I.includes($) ? I.indexOf($) : L === 1 ? -1 : 0, ee = I[(F + L + I.length) % I.length];
      ee != null && (E(ee), v.current[ee]?.focus());
    }, C = (L) => {
      const F = L === "first" ? I[0] : I[I.length - 1];
      F != null && (E(F), v.current[F]?.focus());
    }, A = (L) => {
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), R(1);
          break;
        case "ArrowUp":
          L.preventDefault(), R(-1);
          break;
        case "Home":
          L.preventDefault(), C("first");
          break;
        case "End":
          L.preventDefault(), C("last");
          break;
        case "Escape":
          L.preventDefault(), M();
          break;
        case "Tab":
          w(!1);
          break;
      }
    };
    return /* @__PURE__ */ D(
      "div",
      {
        ref: (L) => {
          y.current = L, typeof x == "function" ? x(L) : x && (x.current = L);
        },
        className: [
          wn.root,
          wn[s],
          f ? wn.fullWidth : null,
          g
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            dn,
            {
              className: wn.action,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              loading: l,
              disabled: p,
              "aria-label": h,
              onClick: () => {
                O && w(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            dn,
            {
              ref: k,
              className: wn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: P,
              "aria-haspopup": "menu",
              "aria-expanded": O,
              "aria-controls": u,
              "aria-label": b,
              onClick: () => O ? w(!1) : z(),
              onKeyDown: (L) => {
                !O && (L.key === "ArrowDown" || L.key === "ArrowUp") && (L.preventDefault(), z());
              },
              children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          O && /* @__PURE__ */ o(
            "div",
            {
              id: u,
              role: "menu",
              tabIndex: -1,
              "aria-label": b,
              className: wn.menu,
              onKeyDown: A,
              ..._,
              children: r.map((L, F) => /* @__PURE__ */ D(
                "button",
                {
                  ref: (ee) => {
                    v.current[F] = ee;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: F === $ ? 0 : -1,
                  disabled: L.disabled,
                  className: [
                    wn.item,
                    F === $ ? wn.active : null,
                    L.danger ? wn.danger : null,
                    L.disabled ? wn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => S(F),
                  onMouseEnter: () => {
                    L.disabled || E(F);
                  },
                  children: [
                    L.icon ? /* @__PURE__ */ o("span", { className: wn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: L.icon, size: 16 }) }) : null,
                    L.label
                  ]
                },
                L.key
              ))
            }
          )
        ]
      }
    );
  }
), Zx = "_mask_rcv90_1", Jx = "_invalid_rcv90_31", Qx = "_xs_rcv90_38", ev = "_sm_rcv90_44", tv = "_md_rcv90_50", nv = "_lg_rcv90_56", rv = "_xl_rcv90_62", qo = {
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
const F$ = at(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: a,
  defaultValue: i = "",
  onChange: c,
  className: s,
  onKeyDown: l,
  ...d
}, f) {
  const [p, g] = q(i ?? ""), h = a !== void 0, b = h ? a ?? "" : p, _ = (u) => {
    const y = fa(u, r);
    return h || g(y), c?.(y), y;
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
          const y = u.currentTarget.selectionStart ?? b.length, k = b[y - 1];
          if (k !== void 0 && !/\d/.test(k)) {
            u.preventDefault();
            const v = b.replace(/\D/g, "");
            _(fa(v.slice(0, -1), r));
          }
        }
        l?.(u);
      },
      className: [
        qo.mask,
        qo[t],
        n ? qo.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), ov = "_wrapper_12jdf_1", sv = "_input_12jdf_8", av = "_invalid_12jdf_38", lv = "_button_12jdf_45", iv = "_up_12jdf_77", cv = "_down_12jdf_82", dv = "_xs_12jdf_87", uv = "_sm_12jdf_93", fv = "_md_12jdf_99", pv = "_lg_12jdf_105", _v = "_xl_12jdf_111", Yn = {
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
const H$ = at(
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
    step: f = 1,
    incrementLabel: p = "Increment",
    decrementLabel: g = "Decrement",
    onBlur: h,
    onKeyDown: b,
    ..._
  }, x) {
    const [m, u] = q(
      c != null ? String(c) : ""
    ), y = i !== void 0, k = y ? i == null ? "" : String(i) : m, v = (I) => {
      y || u(I), s?.(ts(I));
    }, O = (I) => {
      y || u(String(I)), s?.(I);
    }, w = (I) => {
      a || O(gv(k, I, l, d, f));
    }, $ = (I) => {
      v(hv(I.target.value));
    }, E = (I) => {
      I.key === "ArrowUp" ? (I.preventDefault(), w(1)) : I.key === "ArrowDown" && (I.preventDefault(), w(-1)), b?.(I);
    }, P = (I) => {
      const z = ts(k);
      z === null ? (y || u(""), s?.(null)) : O(Va(mv(z, l, f), l, d)), h?.(I);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Yn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: x,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: k,
            disabled: a,
            onChange: $,
            onKeyDown: E,
            onBlur: P,
            className: [
              Yn.input,
              Yn[t],
              n ? Yn.invalid : null,
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
            className: [Yn.button, Yn.up].join(" "),
            "aria-label": p,
            disabled: a,
            onClick: () => w(1),
            children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Yn.button, Yn.down].join(" "),
            "aria-label": g,
            disabled: a,
            onClick: () => w(-1),
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
function ln(e, t, n) {
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
function gr({ h: e, s: t, v: n }) {
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
    r: ln(Number(n[1]), 0, 255),
    g: ln(Number(n[2]), 0, 255),
    b: ln(Number(n[3]), 0, 255),
    a: n[4] != null ? ln(Number(n[4]), 0, 1) : 1
  } : null;
}
function pa({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const U$ = ({
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
  size: f = "md",
  tabIndex: p = 0,
  className: g,
  onChange: h,
  onValueChange: b,
  onOpen: _,
  onClose: x
}) => {
  const m = ie(null), u = ie(null), y = ie(null), k = ie(null), v = ie(null), O = ct(), w = ie(null), $ = Se(
    () => vv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, P] = q(!1), [I, z] = q(null), M = I ?? $, N = Se(() => xv(M), [M]), S = U(
    (re) => {
      const Te = pa(re);
      h?.(Te), b?.(Te);
    },
    [h, b]
  ), R = U(
    (re, Te) => {
      z(re), Te && !i && S(re);
    },
    [i, S]
  ), C = U(() => {
    P(!1), z(null), x?.(), u.current?.focus();
  }, [x]), A = U(() => {
    s || (z($), P(!0), _?.());
  }, [s, $, _]), L = U(() => {
    E ? C() : A();
  }, [E, C, A]), F = U(
    (re, Te) => {
      const lt = y.current;
      if (!lt) return N;
      const ze = lt.getBoundingClientRect(), st = ln((re - ze.left) / ze.width, 0, 1), Xe = ln(1 - (Te - ze.top) / ze.height, 0, 1);
      return { h: N.h, s: st, v: Xe };
    },
    [N]
  ), ee = U(
    (re, Te) => {
      if (!Te) return 0;
      const lt = Te.getBoundingClientRect();
      return ln((re - lt.left) / lt.width, 0, 1);
    },
    []
  ), ne = (re) => {
    if (s) return;
    re.preventDefault(), re.currentTarget.setPointerCapture(re.pointerId), w.current = "sat";
    const Te = F(re.clientX, re.clientY);
    R({ ...gr(Te), a: M.a }, !0);
  }, le = (re) => {
    if (w.current !== "sat") return;
    re.preventDefault();
    const Te = F(re.clientX, re.clientY);
    R({ ...gr(Te), a: M.a }, !0);
  }, Q = (re) => {
    if (s) return;
    re.preventDefault(), re.currentTarget.setPointerCapture(re.pointerId), w.current = "hue";
    const Te = ee(re.clientX, k.current);
    R(
      { ...gr({ ...N, h: Te * 360 }), a: M.a },
      !0
    );
  }, Ie = (re) => {
    if (w.current !== "hue") return;
    re.preventDefault();
    const Te = ee(re.clientX, k.current);
    R(
      { ...gr({ ...N, h: Te * 360 }), a: M.a },
      !0
    );
  }, J = (re) => {
    if (s) return;
    re.preventDefault(), re.currentTarget.setPointerCapture(re.pointerId), w.current = "alpha";
    const Te = ee(re.clientX, v.current);
    R({ ...M, a: Te }, !0);
  }, V = (re) => {
    if (w.current !== "alpha") return;
    re.preventDefault();
    const Te = ee(re.clientX, v.current);
    R({ ...M, a: Te }, !0);
  }, Y = () => {
    w.current = null;
  }, he = U(
    (re, Te) => {
      const lt = {
        h: N.h,
        s: ln(N.s + re, 0, 1),
        v: ln(N.v + Te, 0, 1)
      };
      R({ ...gr(lt), a: M.a }, !0);
    },
    [N, M.a, R]
  ), te = U(
    (re) => {
      const Te = (N.h + re + 360) % 360;
      R({ ...gr({ ...N, h: Te }), a: M.a }, !0);
    },
    [N, M.a, R]
  ), me = U(
    (re) => {
      R({ ...M, a: ln(M.a + re, 0, 1) }, !0);
    },
    [M, R]
  ), K = (re) => {
    switch (re.key) {
      case "ArrowLeft":
        re.preventDefault(), he(-0.05, 0);
        break;
      case "ArrowRight":
        re.preventDefault(), he(0.05, 0);
        break;
      case "ArrowUp":
        re.preventDefault(), he(0, 0.05);
        break;
      case "ArrowDown":
        re.preventDefault(), he(0, -0.05);
        break;
      case "Escape":
        re.preventDefault(), C();
        break;
    }
  }, $e = (re, Te) => {
    switch (re.key) {
      case "ArrowLeft":
        re.preventDefault(), Te === "hue" ? te(-6) : me(-0.05);
        break;
      case "ArrowRight":
        re.preventDefault(), Te === "hue" ? te(6) : me(0.05);
        break;
      case "Escape":
        re.preventDefault(), C();
        break;
    }
  }, se = (re, Te) => {
    if (re === "hex") {
      const Xe = ns(Te);
      Xe && R({ ...Xe, a: M.a }, !0);
      return;
    }
    const lt = Te.replace(/[^\d.]/g, ""), ze = Number.parseFloat(lt);
    if (Number.isNaN(ze)) return;
    if (re === "a") {
      const Xe = lt.includes(".") ? ln(ze, 0, 1) : ln(ze / 100, 0, 1);
      R({ ...M, a: Xe }, !0);
      return;
    }
    const st = { r: 255, g: 255, b: 255 };
    R(
      { ...M, [re]: ln(ze, 0, st[re]) },
      !0
    );
  }, Ae = () => {
    I && (S(I), z(null), P(!1), x?.(), u.current?.focus());
  };
  Ne(() => {
    if (!E) return;
    const re = (Te) => {
      m.current && !m.current.contains(Te.target) && C();
    };
    return document.addEventListener("mousedown", re), () => document.removeEventListener("mousedown", re);
  }, [E, C]), Ne(() => {
    if (!E) return;
    const re = (Te) => {
      Te.key === "Escape" && C();
    };
    return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
  }, [E, C]);
  const ye = f === "xs" ? Pe["dx-colorpicker-trigger-xs"] : f === "sm" ? Pe["dx-colorpicker-trigger-sm"] : f === "lg" ? Pe["dx-colorpicker-trigger-lg"] : f === "xl" ? Pe["dx-colorpicker-trigger-xl"] : Pe["dx-colorpicker-trigger"], We = pa(M), Je = bv(M), Ge = { x: N.s * 100, y: (1 - N.v) * 100 }, Qe = N.h / 360 * 100, He = M.a * 100, gt = /* @__PURE__ */ D("div", { className: Pe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(N.s * 100),
        "aria-valuetext": `Saturation ${Math.round(N.s * 100)}%, value ${Math.round(N.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${N.h}, 100%, 50%)`
        },
        onKeyDown: K,
        onPointerDown: ne,
        onPointerMove: le,
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
        ref: k,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(N.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-hue-picker"],
        onKeyDown: (re) => $e(re, "hue"),
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
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(He),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (re) => $e(re, "alpha"),
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
            onChange: (re) => se("hex", re.target.value)
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
            value: M.r,
            onChange: (re) => se("r", re.target.value)
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
            value: M.g,
            onChange: (re) => se("g", re.target.value)
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
            value: M.b,
            onChange: (re) => se("b", re.target.value)
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
            value: Math.round(M.a * 100),
            onChange: (re) => se("a", re.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-palette"], children: a.map((re) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-swatch"],
        "aria-label": re,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        style: { backgroundColor: re },
        onClick: () => {
          const Te = ns(re);
          i ? R({ ...Te, a: M.a }, !1) : (z(null), S({ ...Te, a: M.a }), P(!1), x?.(), u.current?.focus());
        }
      },
      re
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
      ref: m,
      className: [
        Pe["dx-colorpicker"],
        E ? Pe["dx-colorpicker-open"] : null,
        l ? Pe["dx-colorpicker-invalid"] : null,
        g
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: u,
            type: "button",
            className: [Pe["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": O,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: p,
            onClick: L,
            onKeyDown: (re) => {
              re.key === "Escape" && E && (re.preventDefault(), C());
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
              d && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-text"], children: d }),
              c && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ o(
          "div",
          {
            id: O,
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
function cn(e) {
  return String(e).padStart(2, "0");
}
function Zt(e) {
  return `${e.year}-${cn(e.month)}-${cn(e.day)}`;
}
function kv(e, t) {
  const n = Zt(e);
  return t ? `${n} ${cn(e.hour)}:${cn(e.minute)}:${cn(e.second)}` : n;
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
function Xn() {
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
  yy: (e) => cn(e.year % 100),
  MM: (e) => cn(e.month),
  M: (e) => String(e.month),
  dd: (e) => cn(e.day),
  d: (e) => String(e.day),
  HH: (e) => cn(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => cn(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => cn(e.second),
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
    let c = !1;
    for (const l of Nv)
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
function Hr(e, t) {
  const n = rs(e);
  return n || Ov(e, t);
}
function Ev(e, t, n) {
  return t && Zt(e) < Zt(t) ? t : n && Zt(e) > Zt(n) ? n : e;
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
const q$ = at(
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
    allowClear: f = !1,
    inline: p = !1,
    disabledDates: g,
    locale: h = "en-US",
    onChange: b,
    onValueChange: _,
    onOpen: x,
    onClose: m,
    disabled: u,
    readOnly: y,
    placeholder: k,
    ariaLabel: v,
    triggerLabel: O,
    clearLabel: w,
    tabIndex: $,
    className: E,
    onBlur: P,
    onKeyDown: I,
    ...z
  }, M) {
    const N = ie(null), S = ie(null), R = ie(null), C = ie(null), A = ct(), L = r !== void 0, [F, ee] = q(
      () => a != null ? po(
        Hr(a, i) ?? Xn(),
        i,
        h
      ) : ""
    ), [ne, le] = q(!1), [Q, Ie] = q(null), [J, V] = q(() => {
      const H = r !== void 0 ? r ?? "" : a ?? "";
      if (H) {
        const pe = Hr(H, i);
        if (pe) return pe;
      }
      return Xn();
    }), Y = Se(() => c ? rs(c) : null, [c]), he = Se(() => s ? rs(s) : null, [s]), te = Se(
      () => new Set(g ?? []),
      [g]
    ), me = Se(() => {
      const H = L ? r ?? "" : F;
      return H ? Hr(H, i) : null;
    }, [r, F, L, i]), K = U(
      (H) => {
        const pe = Zt(H);
        return !!(te.has(pe) || Y && pe < Zt(Y) || he && pe > Zt(he));
      },
      [te, Y, he]
    ), $e = U(
      (H) => {
        if (!K(H)) return H;
        for (let pe = 1; pe <= 366; pe += 1) {
          const Re = Ln(H, pe);
          if (!K(Re)) return Re;
          const De = Ln(H, -pe);
          if (!K(De)) return De;
        }
        return H;
      },
      [K]
    ), se = U(
      (H) => {
        L || ee(H ? po(H, i, h) : "");
        const pe = H ? kv(H, l) : "";
        b?.(pe), _?.(pe);
      },
      [L, i, h, l, b, _]
    ), Ae = U(
      (H) => {
        S.current = H, typeof M == "function" ? M(H) : M && (M.current = H);
      },
      [M]
    ), ye = U(() => {
      le(!1), Ie(null), m?.(), p || R.current?.focus();
    }, [p, m]), We = U(() => {
      if (u) return;
      const H = me ?? Xn();
      Ie(H), V($e(H)), le(!0), x?.();
    }, [u, me, $e, x]), Je = U(() => {
      ne ? ye() : We();
    }, [ne, ye, We]), Ge = U((H) => {
      C.current?.querySelector(
        `[data-date="${Zt(H)}"]`
      )?.focus();
    }, []), Qe = U(
      (H) => {
        if (K(H)) return;
        const pe = Q ?? me, De = {
          ...l ? {
            hour: pe?.hour ?? 0,
            minute: pe?.minute ?? 0,
            second: pe?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: H.year,
          month: H.month,
          day: H.day
        };
        Ie(De), l || (se(De), ye());
      },
      [K, Q, me, l, se, ye]
    ), He = U(
      (H, pe) => {
        Ie((Re) => {
          const De = Re ?? me ?? Xn(), et = Math.min(H === "hour" ? 23 : 59, Math.max(0, De[H] + pe));
          return { ...De, [H]: et };
        });
      },
      [me]
    ), gt = U(
      (H, pe) => {
        const Re = pe.replace(/\D/g, ""), De = Re === "" ? 0 : Number(Re), It = H === "hour" ? 23 : 59;
        Ie((et) => ({ ...et ?? me ?? Xn(), [H]: Math.min(It, De) }));
      },
      [me]
    ), re = U(() => {
      Q && (se(Q), ye());
    }, [Q, se, ye]), Te = U(() => {
      if (ne) return;
      const H = Hr(F, i);
      se(H ? Ev(H, Y, he) : null);
    }, [ne, F, i, Y, he, se]), lt = (H) => {
      const pe = H.target.value;
      L || ee(pe), ne && Ie(null);
    }, ze = (H) => {
      H.key === "Enter" ? (H.preventDefault(), ne ? Q && (se(Q), ye()) : Te()) : H.key === "Escape" ? ne && (H.preventDefault(), ye()) : H.key === "ArrowDown" && !ne ? (H.preventDefault(), We()) : H.key === "Tab" && ne && le(!1), I?.(H);
    }, st = (H) => {
      Te(), P?.(H);
    }, Xe = (H) => {
      let pe = null;
      switch (H.key) {
        case "ArrowLeft":
          pe = Ln(J, -1), H.preventDefault();
          break;
        case "ArrowRight":
          pe = Ln(J, 1), H.preventDefault();
          break;
        case "ArrowUp":
          pe = Ln(J, -7), H.preventDefault();
          break;
        case "ArrowDown":
          pe = Ln(J, 7), H.preventDefault();
          break;
        case "Home":
          pe = Ln(J, -_a(J)), H.preventDefault();
          break;
        case "End":
          pe = Ln(J, 6 - _a(J)), H.preventDefault();
          break;
        case "PageUp":
          pe = fo(J, H.shiftKey ? -12 : -1), H.preventDefault();
          break;
        case "PageDown":
          pe = fo(J, H.shiftKey ? 12 : 1), H.preventDefault();
          break;
        case "Enter":
        case " ":
          H.preventDefault(), Qe(J);
          break;
        case "Escape":
          H.preventDefault(), ye();
          break;
        case "Tab":
          le(!1);
          break;
      }
      if (pe) {
        const Re = $e(pe);
        V(Re), setTimeout(() => Ge(Re), 0);
      }
    };
    Ne(() => {
      if (!ne) return;
      const H = (pe) => {
        N.current && !N.current.contains(pe.target) && ye();
      };
      return document.addEventListener("mousedown", H), () => document.removeEventListener("mousedown", H);
    }, [ne, ye]), Ne(() => {
      if (!ne) return;
      const H = (pe) => {
        pe.key === "Escape" && ye();
      };
      return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
    }, [ne, ye]);
    const Tt = () => {
      L || ee(""), b?.(""), _?.(""), S.current?.focus();
    }, yt = ne && Q ? po(Q, i, h) : L ? r ? po(
      Hr(r, i) ?? Xn(),
      i,
      h
    ) : "" : F, it = L ? !!r : F.length > 0, ft = p || ne, Ve = { year: J.year, month: J.month }, Ct = new Date(Ve.year, Ve.month - 1, 1).getDay(), ae = {
      year: Ve.year,
      month: Ve.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let H = 0; H < wv; H += 1)
      Le.push(Ln(ae, H - Ct));
    const wt = Q ? Zt(Q) : me ? Zt(me) : null, Mt = Zt(Xn()), bt = `${Ve.year}-${cn(Ve.month)}`, j = Se(
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
      (H, pe) => new Intl.DateTimeFormat(h, { weekday: "short" }).format(
        new Date(2021, 0, 3 + pe)
      )
    ), we = t === "xs" ? qe["dx-datepicker-input--xs"] : t === "sm" ? qe["dx-datepicker-input--sm"] : t === "lg" ? qe["dx-datepicker-input--lg"] : t === "xl" ? qe["dx-datepicker-input--xl"] : qe["dx-datepicker-input--md"], fe = /* @__PURE__ */ D(
      "div",
      {
        className: qe["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: qe["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const H = $e(fo(J, -1));
                  V(H), setTimeout(() => Ge(H), 0);
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
                  const H = $e(fo(J, 1));
                  V(H), setTimeout(() => Ge(H), 0);
                },
                children: /* @__PURE__ */ o(Ee, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
            "div",
            {
              ref: C,
              role: "grid",
              tabIndex: -1,
              className: qe["dx-datepicker-grid"],
              onKeyDown: Xe,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: qe["dx-datepicker-week-row"], children: ge.map((H) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: qe["dx-datepicker-weekday"],
                    children: H
                  },
                  H
                )) }),
                Array.from({ length: 6 }, (H, pe) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: qe["dx-datepicker-row"],
                    children: Le.slice(pe * 7, pe * 7 + 7).map((Re) => {
                      const De = Zt(Re), It = K(Re), et = De.startsWith(bt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": De,
                          tabIndex: De === Zt(J) ? 0 : -1,
                          "aria-selected": De === wt || void 0,
                          "aria-disabled": It || void 0,
                          "aria-label": j.format(
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
          l && /* @__PURE__ */ D("div", { className: qe["dx-datepicker-time"], children: [
            Tv.map((H) => /* @__PURE__ */ D("label", { className: qe["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: qe["dx-datepicker-time-label"], children: _o(H) }),
              /* @__PURE__ */ D("div", { className: qe["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: qe["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _o(H),
                    value: cn(
                      (Q ?? me ?? Xn())[H]
                    ),
                    onChange: (pe) => gt(H, pe.target.value),
                    onKeyDown: (pe) => {
                      pe.key === "ArrowUp" ? (pe.preventDefault(), He(H, 1)) : pe.key === "ArrowDown" ? (pe.preventDefault(), He(H, -1)) : pe.key === "Enter" && (pe.preventDefault(), re());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: qe["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_o(H).toLowerCase()}`,
                      onClick: () => He(H, 1),
                      children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_o(H).toLowerCase()}`,
                      onClick: () => He(H, -1),
                      children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, H)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-ok"],
                onClick: re,
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
        ref: N,
        className: [
          qe["dx-datepicker"],
          p ? qe["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !p && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: yt,
                disabled: u,
                readOnly: y,
                placeholder: k,
                tabIndex: $,
                role: d ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": d ? void 0 : "dialog",
                "aria-expanded": d ? void 0 : ft,
                "aria-controls": d ? void 0 : A,
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
                  d || Je();
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
                  d ? qe["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": w ?? "Clear",
                onClick: Tt,
                children: /* @__PURE__ */ o(Ee, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: R,
                type: "button",
                className: [qe["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": O ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": A,
                disabled: u,
                onClick: Je,
                children: /* @__PURE__ */ o(Ee, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          ft && /* @__PURE__ */ o(
            "div",
            {
              id: A,
              role: p ? void 0 : "dialog",
              "aria-label": p ? void 0 : v ?? "Date picker",
              className: p ? void 0 : qe["dx-datepicker-popup"],
              children: fe
            }
          )
        ]
      }
    );
  }
), Zn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, W$ = ({
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
  onValueChange: f
}) => {
  const [p, g] = q(e), h = U(
    (u) => Math.min(t, Math.max(1, u)),
    [t]
  ), b = U(
    (u) => {
      d?.(u), f?.(u);
    },
    [d, f]
  ), _ = U(
    (u) => {
      n || r || (b(u), g(u));
    },
    [n, r, b]
  ), x = (u) => {
    if (n || r) return;
    const y = p > 0 ? p : 1;
    switch (u.key) {
      case "ArrowRight":
      case "ArrowUp":
        u.preventDefault(), _(h(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        u.preventDefault(), _(h(y - 1));
        break;
      case "Home":
        u.preventDefault(), _(1);
        break;
      case "End":
        u.preventDefault(), _(t);
        break;
    }
  }, m = Array.from({ length: t }, (u, y) => y + 1);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "radiogroup",
      tabIndex: -1,
      "aria-label": a,
      "aria-readonly": n || void 0,
      className: [
        Zn["dx-rating"],
        n ? Zn["dx-rating-readonly"] : null,
        r ? Zn["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: x,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Zn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => _(0),
            children: /* @__PURE__ */ o(Ee, { icon: "block", size: 16 })
          }
        ),
        m.map((u) => {
          const y = u <= e, k = u === (e > 0 ? e : p);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${c} ${u}`,
              tabIndex: k ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Zn["dx-rating-item"],
                y ? Zn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => _(u),
              onFocus: () => g(u),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Zn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Ee, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Zn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: "star", size: 20 }) })
              ]
            },
            u
          );
        })
      ]
    }
  );
}, or = {
  "dx-slider": "_dx-slider_18zjj_1",
  "dx-slider-track": "_dx-slider-track_18zjj_9",
  "dx-slider-range": "_dx-slider-range_18zjj_17",
  "dx-slider-handle": "_dx-slider-handle_18zjj_26",
  "dx-slider-vertical": "_dx-slider-vertical_18zjj_58",
  "dx-slider-disabled": "_dx-slider-disabled_18zjj_84"
};
function En(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const K$ = ({
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
  minLabel: f = "Min",
  maxLabel: p = "Max",
  tabIndex: g = 0,
  className: h,
  onChange: b,
  onInput: _,
  onValueChange: x,
  onInputChange: m
}) => {
  const u = ie(null), y = ie(
    null
  ), [k, v] = q(null), O = k ?? e, w = Se(
    () => En(O, r, a),
    [O, r, a]
  ), $ = Se(
    () => En(c ? t : w, r, a),
    [c, t, w, r, a]
  ), E = Se(
    () => En(c ? Math.max(n, $) : w, r, a),
    [c, n, $, w, r, a]
  ), P = U(
    (J) => {
      const V = a - r;
      return V <= 0 ? 0 : (En(J, r, a) - r) / V * 100;
    },
    [r, a]
  ), I = U(
    (J, V) => {
      const Y = u.current;
      if (!Y) return r;
      const he = Y.getBoundingClientRect();
      let te;
      s === "vertical" ? te = 1 - (V - he.top) / he.height : te = (J - he.left) / he.width;
      const me = r + En(te, 0, 1) * (a - r);
      return i > 0 ? En(Math.round(me / i) * i, r, a) : En(me, r, a);
    },
    [r, a, i, s]
  ), z = U(
    (J) => {
      typeof J == "number" && v(J), b?.(J), x?.(J);
    },
    [b, x]
  ), M = U(
    (J) => {
      typeof J == "number" && v(J), _?.(J), m?.(J);
    },
    [_, m]
  ), N = U(
    (J, V, Y) => {
      const he = I(V, Y);
      let te;
      c ? J === "min" ? te = { min: Math.min(he, E), max: E } : te = { min: $, max: Math.max(he, $) } : te = he, M(te), y.current === null && z(te);
    },
    [c, I, $, E, M, z]
  ), S = U(
    (J, V) => {
      const Y = (i > 0 ? i : 1) * V;
      let he;
      c ? J === "min" ? he = {
        min: En($ + Y, r, E),
        max: E
      } : he = {
        min: $,
        max: En(E + Y, $, a)
      } : he = En(w + Y, r, a), z(he);
    },
    [c, i, r, a, $, E, w, z]
  ), R = (J, V) => {
    if (!l)
      switch (V.key) {
        case "ArrowLeft":
        case "ArrowDown":
          V.preventDefault(), S(J, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          V.preventDefault(), S(J, 1);
          break;
        case "Home":
          V.preventDefault(), z(c ? J === "min" ? { min: r, max: E } : { min: $, max: $ } : r);
          break;
        case "End":
          V.preventDefault(), z(c ? J === "min" ? { min: E, max: E } : { min: $, max: a } : a);
          break;
      }
  }, C = (J, V) => {
    l || (V.preventDefault(), V.currentTarget.focus(), typeof V.currentTarget.setPointerCapture == "function" && V.currentTarget.setPointerCapture(V.pointerId), y.current = { key: J, pointerId: V.pointerId }, N(J, V.clientX, V.clientY));
  }, A = (J) => {
    !y.current || y.current.pointerId !== J.pointerId || (J.preventDefault(), N(y.current.key, J.clientX, J.clientY));
  }, L = (J) => {
    !y.current || y.current.pointerId !== J.pointerId || (y.current = null, J.preventDefault(), z(c ? { min: $, max: E } : w));
  }, [F, ee] = q(null), ne = P($), le = P(E), Q = c ? ne : 0, Ie = le;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        or["dx-slider"],
        s === "vertical" ? or["dx-slider-vertical"] : null,
        l ? or["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: u, className: or["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: or["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${Q}%`, height: `${Ie - Q}%` } : { left: `${Q}%`, width: `${Ie - Q}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round($),
            "aria-orientation": s,
            "aria-label": c ? f : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && F === "max" ? -1 : g,
            className: or["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ne}% - 8px)` } : { left: `calc(${ne}% - 8px)` },
            onKeyDown: (J) => R("min", J),
            onPointerDown: (J) => C("min", J),
            onPointerMove: A,
            onPointerUp: L,
            onFocus: () => ee("min")
          }
        ),
        c && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(E),
            "aria-orientation": s,
            "aria-label": p,
            "aria-disabled": l || void 0,
            tabIndex: l || F === "min" ? -1 : g,
            className: or["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${le}% - 8px)` } : { left: `calc(${le}% - 8px)` },
            onKeyDown: (J) => R("max", J),
            onPointerDown: (J) => C("max", J),
            onPointerMove: A,
            onPointerUp: L,
            onFocus: () => ee("max")
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
}, Cv = "-10675199.02:48:05.4775808", Mv = "10675199.02:48:05.4775808", jn = 86400, Bn = 3600, kn = 60, Wo = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, ma = {
  days: jn,
  hours: Bn,
  minutes: kn,
  seconds: 1
}, Av = {
  day: jn,
  hour: Bn,
  minute: kn,
  second: 1
};
function yr(e) {
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
    if (!a.slice(1).some((p) => p != null)) return null;
    const s = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, d = a[3] != null ? Number(a[3]) : 0, f = a[4] != null ? Number(a[4]) : 0;
    return n * (s * jn + l * Bn + d * kn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || d > 59 ? null : n * (c * jn + s * Bn + l * kn + d + f);
  }
  return null;
}
function Dv(e) {
  return e.days * jn + e.hours * Bn + e.minutes * kn + e.seconds;
}
function ga(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / jn);
  t %= jn;
  const r = Math.floor(t / Bn);
  t %= Bn;
  const a = Math.floor(t / kn), i = Math.round(t % kn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function os(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / kn) * kn : t === "hour" ? r = Math.round(r / Bn) * Bn : t === "day" && (r = Math.round(r / jn) * jn);
  let a = Math.round(r % kn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / kn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, f = Math.floor(l / 24), p = n ? "-" : "", g = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${p}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${p}${g}${yr(d)}`;
    case "minute":
      return `${p}${g}${yr(d)}:${yr(s)}`;
    default:
      return `${p}${g}${yr(d)}:${yr(s)}:${yr(a)}`;
  }
}
function ya(e, t = "second") {
  const n = Vr(e);
  return n === null ? "" : os(n, t);
}
function Ko(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const G$ = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Cv,
    max: c = Mv,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: f = !0,
    showMinutes: p = !0,
    showSeconds: g = !0,
    allowClear: h = !1,
    inline: b = !1,
    onChange: _,
    onValueChange: x,
    onOpen: m,
    onClose: u,
    disabled: y,
    placeholder: k,
    ariaLabel: v,
    triggerLabel: O,
    clearLabel: w,
    tabIndex: $,
    className: E,
    onBlur: P,
    onKeyDown: I,
    ...z
  }, M) {
    const N = ie(null), S = ie(null), R = ie(null), C = ct(), A = r !== void 0, [L, F] = q(
      () => a != null ? ya(a, l) : ""
    ), [ee, ne] = q(!1), [le, Q] = q(null), [Ie, J] = q(null), V = Se(
      () => Vr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), Y = Se(
      () => Vr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), he = Se(() => {
      const ae = Number.parseFloat(s);
      return Number.isNaN(ae) || ae <= 0 ? 1 : ae;
    }, [s]), te = Se(() => {
      const ae = A ? r ?? "" : L;
      return ae ? Vr(ae) : null;
    }, [r, L, A]), me = U(
      (ae) => {
        const Le = ae === null ? "" : os(ae, l);
        A || F(Le), _?.(Le), x?.(Le);
      },
      [A, l, _, x]
    ), K = U(
      (ae) => {
        ae && le !== null && me(le), ne(!1), Q(null), J(null), u?.(), b || R.current?.focus();
      },
      [b, le, me, u]
    ), $e = U(() => {
      y || (Q(te ?? 0), ne(!0), m?.());
    }, [y, te, m]), se = U(() => {
      ee ? K(!1) : $e();
    }, [ee, K, $e]), Ae = U(
      (ae, Le) => {
        Q((wt) => {
          const bt = (wt ?? te ?? 0) + Le * he * ma[ae];
          return Ko(bt, V, Y);
        });
      },
      [te, he, V, Y]
    ), ye = U(
      (ae) => {
        const Le = Ie?.[ae];
        if (Le == null) return;
        const wt = Number.parseFloat(Le), Mt = Number.isNaN(wt) ? 0 : wt;
        Q((bt) => {
          const j = bt ?? te ?? 0, X = ga(j);
          X[ae] = Mt;
          const we = (j < 0 ? -1 : 1) * Dv(X);
          return Ko(we, V, Y);
        }), J(null);
      },
      [Ie, te, V, Y]
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
    }, Ge = U(() => {
      if (ee) return;
      const ae = Vr(L);
      me(ae !== null ? Ko(ae, V, Y) : null);
    }, [ee, L, V, Y, me]), Qe = (ae) => {
      A || F(ae.target.value);
    }, He = (ae) => {
      ae.key === "Enter" ? (ae.preventDefault(), ee ? K(!0) : Ge()) : ae.key === "Escape" && ee ? (ae.preventDefault(), K(!1)) : ae.key === "ArrowDown" && !ee ? (ae.preventDefault(), $e()) : ae.key === "Tab" && ee && ne(!1), I?.(ae);
    }, gt = (ae) => {
      Ge(), P?.(ae);
    }, re = () => {
      A || F(""), _?.(""), x?.(""), S.current?.focus();
    };
    Ne(() => {
      if (!ee) return;
      const ae = (Le) => {
        N.current && !N.current.contains(Le.target) && K(!1);
      };
      return document.addEventListener("mousedown", ae), () => document.removeEventListener("mousedown", ae);
    }, [ee, K]), Ne(() => {
      if (!ee) return;
      const ae = (Le) => {
        Le.key === "Escape" && K(!1);
      };
      return document.addEventListener("keydown", ae), () => document.removeEventListener("keydown", ae);
    }, [ee, K]), Ne(() => {
      if (b && le !== null) {
        const ae = te;
        (ae === null || Math.abs(le - ae) > 1e-9) && me(le);
      }
    }, [b, le, te, me]);
    const Te = U(
      (ae) => {
        S.current = ae, typeof M == "function" ? M(ae) : M && (M.current = ae);
      },
      [M]
    ), lt = A ? r ? ya(r, l) : "" : L, ze = A ? !!r : L.length > 0, st = b || ee, Xe = le ?? te ?? 0, Tt = ga(Xe), yt = Av[l], ft = ["days", "hours", "minutes", "seconds"].filter(
      (ae) => ma[ae] >= yt && (ae === "days" ? d : ae === "hours" ? f : ae === "minutes" ? p : g)
    ), Ve = t === "xs" ? _t["dx-timespanpicker-input--xs"] : t === "sm" ? _t["dx-timespanpicker-input--sm"] : t === "lg" ? _t["dx-timespanpicker-input--lg"] : t === "xl" ? _t["dx-timespanpicker-input--xl"] : _t["dx-timespanpicker-input--md"], Ct = /* @__PURE__ */ D("div", { className: _t["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-demos"], "aria-live": "polite", children: os(Xe, l) }),
      /* @__PURE__ */ o("div", { className: _t["dx-timespanpicker-units"], children: ft.map((ae) => /* @__PURE__ */ D("label", { className: _t["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: _t["dx-timespanpicker-unit-label"], children: Wo[ae] }),
        /* @__PURE__ */ D("span", { className: _t["dx-timespanpicker-unit-control"], children: [
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
          /* @__PURE__ */ D("span", { className: _t["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Wo[ae].toLowerCase()}`,
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
                "aria-label": `Decrease ${Wo[ae].toLowerCase()}`,
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
    return /* @__PURE__ */ D(
      "div",
      {
        ref: N,
        className: [
          _t["dx-timespanpicker"],
          b ? _t["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Te,
                type: "text",
                autoComplete: "off",
                value: lt,
                disabled: y,
                placeholder: k,
                tabIndex: $,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": C,
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
            h && !y && ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _t["dx-timespanpicker-clear"],
                "aria-label": w ?? "Clear",
                onClick: re,
                children: /* @__PURE__ */ o(Ee, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: R,
                type: "button",
                className: [_t["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": O ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": C,
                disabled: y,
                onClick: se,
                children: /* @__PURE__ */ o(Ee, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          st && /* @__PURE__ */ o(
            "div",
            {
              id: C,
              role: b ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: b ? void 0 : _t["dx-timespanpicker-popup"],
              children: Ct
            }
          )
        ]
      }
    );
  }
), Iv = "_wrapper_ou9x5_1", zv = "_cells_ou9x5_8", Lv = "_cell_ou9x5_8", Pv = "_invalid_ou9x5_63", Rv = "_live_ou9x5_73", sr = {
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
const V$ = at(
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
    liveAnnounce: f = !0,
    className: p,
    "aria-label": g
  }, h) {
    const b = ct(), _ = n !== void 0, [x, m] = q(ba(r).join("")), u = _ ? ba(n).join("") : x, y = Array.from({ length: t }, (z, M) => u[M] ?? ""), k = ie([]), [v, O] = q(""), w = (z) => {
      _ || m(z), a?.(z);
    }, $ = (z) => {
      const M = k.current[z];
      M && !M.disabled && (M.focus(), M.select());
    }, E = (z, M) => {
      const N = M.replace(/\D/g, "").slice(-1), S = u.split("");
      if (N) {
        S[z] = N;
        const R = S.join("").slice(0, t);
        w(R), R.length < t ? $(z + 1) : f && O("Code complete");
      }
    }, P = (z, M) => {
      if (M.key === "Backspace") {
        if (M.preventDefault(), u[z]) {
          const N = u.split("");
          N[z] = "", w(N.join(""));
        } else if (z > 0) {
          const N = u.split("");
          N[z - 1] = "", w(N.join("")), $(z - 1);
        }
      } else M.key === "ArrowLeft" && z > 0 ? (M.preventDefault(), $(z - 1)) : M.key === "ArrowRight" && z < t - 1 ? (M.preventDefault(), $(z + 1)) : M.key === "Home" ? (M.preventDefault(), $(0)) : M.key === "End" && (M.preventDefault(), $(t - 1));
    }, I = (z, M) => {
      M.preventDefault();
      const N = M.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const S = u.split("");
      let R = 0;
      for (let A = 0; A < N.length && z + A < t; A++)
        S[z + A] = N[A] ?? "", R++;
      const C = S.join("");
      w(C), C.length >= t ? f && O("Code complete") : $(z + R);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [sr.wrapper, p].filter(Boolean).join(" "),
        role: "group",
        "aria-label": g ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [sr.cells, sr[c]].join(" "), children: y.map((z, M) => /* @__PURE__ */ o(
            "input",
            {
              ref: (N) => {
                k.current[M] = N, M === 0 && h && (typeof h == "function" ? h(N) : h.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: z,
              disabled: l,
              "aria-label": `Digit ${M + 1} of ${t}`,
              "aria-invalid": i && z !== "" ? !0 : void 0,
              autoFocus: s && M === 0,
              className: [
                sr.cell,
                sr[`cell-${c}`],
                i ? sr.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (N) => E(M, N.target.value),
              onKeyDown: (N) => P(M, N),
              onPaste: (N) => I(M, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                f && O("");
              }
            },
            M
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${b}-live`,
              role: "status",
              "aria-live": "polite",
              className: sr.live,
              children: v
            }
          )
        ]
      }
    );
  }
), jv = "_wrapper_6lcd5_1", Bv = "_header_6lcd5_7", Fv = "_label_6lcd5_15", Hv = "_clear_6lcd5_22", Uv = "_canvas_6lcd5_53", qv = "_disabled_6lcd5_69", br = {
  wrapper: jv,
  header: Bv,
  label: Fv,
  clear: Hv,
  canvas: Uv,
  disabled: qv
}, Y$ = at(
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
    disabled: f = !1,
    className: p
  }, g) {
    const h = ie(null), b = ie(!1), _ = ie(!1), x = ie({ x: 0, y: 0 });
    Ne(() => {
      const w = h.current;
      if (!w) return;
      const $ = window.devicePixelRatio || 1, E = Math.round((l ?? w.clientWidth) * $), P = Math.round(d * $);
      (w.width !== E || w.height !== P) && (w.width = E, w.height = P);
      const I = w.getContext("2d");
      if (!I) return;
      I.setTransform($, 0, 0, $, 0, 0), I.lineWidth = i, I.strokeStyle = a, I.lineCap = "round", I.lineJoin = "round";
      const z = t ?? n;
      if (z) {
        const M = new Image();
        M.onload = () => {
          I.drawImage(M, 0, 0, w.clientWidth, d);
        }, M.src = z;
      }
    }, [t, n, a, i, l, d]);
    const m = () => {
      const w = h.current;
      if (!w) return;
      const $ = w.toDataURL("image/png");
      r?.($);
    }, u = () => {
      const w = h.current;
      if (!w) return;
      const $ = w.getContext("2d");
      $ && $.clearRect(0, 0, w.width, w.height), r?.("");
    };
    $o(g, () => ({
      clear: u,
      toDataURL: (w = "image/png", $) => h.current?.toDataURL(w, $) ?? ""
    }));
    const y = (w) => {
      const $ = w.currentTarget.getBoundingClientRect();
      return { x: w.clientX - $.left, y: w.clientY - $.top };
    }, k = (w) => {
      f || (w.preventDefault(), typeof w.currentTarget.setPointerCapture == "function" && w.currentTarget.setPointerCapture(w.pointerId), b.current = !0, _.current = !1, x.current = y(w));
    }, v = (w) => {
      if (!b.current) return;
      w.preventDefault();
      const $ = w.currentTarget.getContext("2d");
      if (!$) return;
      const E = y(w);
      $.beginPath(), $.moveTo(x.current.x, x.current.y), $.lineTo(E.x, E.y), $.stroke(), x.current = E, _.current = !0;
    }, O = (w) => {
      b.current && (w.preventDefault(), b.current = !1, _.current && m());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          br.wrapper,
          p,
          f ? br.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: br.header, children: [
            /* @__PURE__ */ o("span", { className: br.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: br.clear,
                onClick: u,
                disabled: f,
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
              className: br.canvas,
              onPointerDown: k,
              onPointerMove: v,
              onPointerUp: O,
              onPointerCancel: O
            }
          )
        ]
      }
    );
  }
), Wv = "_wrapper_dsvd2_1", Kv = "_trigger_dsvd2_7", Gv = "_list_dsvd2_35", Vv = "_row_dsvd2_44", Yv = "_name_dsvd2_59", Xv = "_size_dsvd2_68", Zv = "_progress_dsvd2_74", Jv = "_fill_dsvd2_82", Qv = "_status_dsvd2_99", ew = "_remove_dsvd2_106", Tn = {
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
const X$ = at(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: a = !0,
  headers: i,
  accept: c,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: d = "Upload",
  children: f,
  onProgress: p,
  onComplete: g,
  onError: h
}, b) {
  const _ = ie(null), [x, m] = q([]), u = ie(/* @__PURE__ */ new Map()), y = ($, E) => {
    m(
      (P) => P.map((I) => I.file.name === $ ? { ...I, ...E } : I)
    );
  }, k = ($) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    u.current.set($.file.name, E);
    const P = new FormData();
    if (P.append(r, $.file), E.upload.addEventListener("progress", (I) => {
      if (!I.lengthComputable) return;
      const z = Math.round(I.loaded / I.total * 100);
      y($.file.name, { state: "uploading", progress: z }), p?.($.file.name, z);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (y($.file.name, { state: "complete", progress: 100 }), g?.($.file.name)) : (y($.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), h?.($.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      y($.file.name, { state: "error", message: "Network error" }), h?.($.file.name, "Network error");
    }), i)
      for (const [I, z] of Object.entries(i))
        E.setRequestHeader(I, z);
    E.open("POST", t), E.send(P), y($.file.name, { state: "uploading", progress: 0 });
  }, v = ($) => {
    if (!$) return;
    const E = [...$], P = [];
    let I = Math.max(0, s - x.length);
    for (const M of E) {
      if (l != null && M.size > l) {
        h?.(
          M.name,
          `File too large (maximum ${xa(l)})`
        );
        continue;
      }
      if (I <= 0) {
        h?.(M.name, `Too many files (maximum ${s})`);
        continue;
      }
      I -= 1, P.push(M);
    }
    const z = P.map((M) => ({
      file: M,
      state: "pending",
      progress: 0
    }));
    m((M) => [...M, ...z]), _.current && (_.current.value = ""), a && z.forEach(k);
  }, O = ($) => {
    u.current.get($)?.abort(), u.current.delete($), m((P) => P.filter((I) => I.file.name !== $));
  }, w = f ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: Tn.trigger,
      onClick: () => _.current?.click(),
      children: [
        /* @__PURE__ */ o(Ee, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return $o(b, () => ({
    open: () => _.current?.click(),
    upload: () => x.forEach(($) => $.state === "pending" ? k($) : null)
  })), /* @__PURE__ */ D("div", { className: Tn.wrapper, children: [
    w,
    /* @__PURE__ */ o(
      "input",
      {
        ref: _,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: ($) => v($.target.files)
      }
    ),
    !f && x.length > 0 && /* @__PURE__ */ o("ul", { className: Tn.list, children: x.map(({ file: $, state: E, progress: P, message: I }) => /* @__PURE__ */ D(
      "li",
      {
        className: Tn.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Tn.name, children: $.name }),
          /* @__PURE__ */ o("span", { className: Tn.size, children: xa($.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Tn.progress,
              role: "progressbar",
              "aria-label": `${$.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": P,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: Tn.fill,
                  style: { width: `${P}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: Tn.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? I ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Tn.remove,
              "aria-label": `Remove ${$.name}`,
              onClick: () => O($.name),
              children: /* @__PURE__ */ o(Ee, { icon: "close", size: 14 })
            }
          )
        ]
      },
      $.name
    )) })
  ] });
}), tw = "_zone_nl0bz_1", nw = "_dragging_nl0bz_23", rw = "_caption_nl0bz_28", ow = "_browse_nl0bz_40", sw = "_disabled_nl0bz_67", Ur = {
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
const Z$ = at(
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
    const f = ie(null), [p, g] = q(!1), h = (u) => {
      if (!u || u.length === 0) return;
      const y = [...u].filter((k) => aw(k, t ?? ""));
      y.length !== 0 && r?.(y);
    }, b = (u) => {
      s || (u.preventDefault(), g(!0));
    }, _ = (u) => {
      s || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", g(!0));
    }, x = (u) => {
      s || u.currentTarget.contains(u.relatedTarget) || g(!1);
    }, m = (u) => {
      s || (u.preventDefault(), g(!1), h(u.dataTransfer.files));
    };
    return $o(d, () => ({
      open: () => f.current?.click()
    })), // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props -- file-drop target; keyboard users pick files via the browse control; aria-disabled is the only AT-visible disabled signal on a non-form region
    /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": s || void 0,
        className: [
          Ur.zone,
          p ? Ur.dragging : null,
          s ? Ur.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: _,
        onDragLeave: x,
        onDrop: m,
        children: [
          /* @__PURE__ */ o("p", { className: Ur.caption, children: p ? i : a }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ur.browse,
              onClick: () => f.current?.click(),
              children: c
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
}, vo = dr(null);
function Nw(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Sw(e, t, n, r, a) {
  const [i, c] = q(n), s = e ? t ?? !1 : i, l = U(
    (p) => {
      e || c(p), r?.(p);
    },
    [e, r]
  ), [d, f] = q(a);
  return a !== d && (f(a), a > 0 && !e && c(!1)), Ne(() => {
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
function wo(e) {
  return Kt(e) && e.type === Ya;
}
function fs({
  itemKey: e,
  props: t
}) {
  const n = Fn(vo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Se(
    () => Zr.toArray(t.children).filter(Kt),
    [t.children]
  ), d = l.length > 0, f = !!c, p = t.open !== void 0, [g, h] = Sw(
    p,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, _ = ie(0), m = (b && !p ? n.openKey === e : null) ?? g, u = U(
    (J) => {
      b && !p ? n.setOpenKey(J ? e : null) : (h(J), b && n.setOpenKey(null));
    },
    [b, p, n, e, h]
  ), [, y] = q(0);
  Ne(() => {
    if (!i) return;
    const J = () => y((V) => V + 1);
    return window.addEventListener("hashchange", J), window.addEventListener("popstate", J), () => {
      window.removeEventListener("hashchange", J), window.removeEventListener("popstate", J);
    };
  }, [i]);
  const k = t.selected !== void 0 || t.onSelectedChange !== void 0, v = t.defaultSelected ?? !1, O = !d && !k && i ? Nw(i, t.match) : !1, w = !d && (k ? t.selected ?? v : O || v || n.clickedKey != null && n.clickedKey === e), $ = !f && (n.activeKey === e || n.activeKey == null && n.defaultStopKey === e), E = () => n.setActiveKey(e), P = U(
    (J) => {
      if (f) {
        J.preventDefault();
        return;
      }
      const V = { text: r, value: a, path: i };
      [n.emit(V), t.onClick?.(V)].includes(!1) && J.preventDefault(), k || n.setClickedKey(e), t.onSelectedChange?.(!0), n.closeAll();
    },
    [f, r, a, i, n, t, k, e]
  ), I = U(() => {
    if (!f) {
      if (m && (Date.now() - _.current < 600 || !n.clickToOpen)) {
        _.current = 0;
        return;
      }
      u(!m);
    }
  }, [f, m, u, n.clickToOpen]), z = U(() => {
    !d || f || n.clickToOpen || (_.current = Date.now(), u(!0));
  }, [d, f, n.clickToOpen, u]), M = U(() => {
    n.clickToOpen || u(!1);
  }, [n.clickToOpen, u]), N = `${n.baseId}-submenu-${e}`, [S, R] = q(null), [C, A] = q(null), L = Se(() => {
    const J = l.findIndex(
      (V) => wo(V) && !V.props.disabled
    );
    return J >= 0 ? `${e}-${J}` : null;
  }, [l, e]), [F, ee] = q(n.closeSignal);
  n.closeSignal !== F && (ee(n.closeSignal), n.closeSignal > 0 && R(null));
  const ne = Se(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: S,
      setOpenKey: R,
      activeKey: C,
      setActiveKey: A,
      clickedKey: n.clickedKey,
      setClickedKey: n.setClickedKey,
      defaultStopKey: L
    }),
    [n, S, C, L]
  ), le = d ? /* @__PURE__ */ o("span", { className: mt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Ee,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, Q = s ?? /* @__PURE__ */ D(ot, { children: [
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
    le
  ] });
  if (d) {
    let J = function(V) {
      const Y = Array.from(V.currentTarget.children).map((me) => me.querySelector('[role="menuitem"]')).filter(
        (me) => me != null && me.getAttribute("aria-disabled") !== "true" && !me.hasAttribute("disabled")
      ), he = document.activeElement, te = he ? Y.indexOf(he) : -1;
      V.key === "ArrowDown" ? (V.preventDefault(), V.stopPropagation(), (te === -1 ? Y[0] : Y[(te + 1) % Y.length])?.focus()) : V.key === "ArrowUp" ? (V.preventDefault(), V.stopPropagation(), (te === -1 ? Y[Y.length - 1] : Y[(te - 1 + Y.length) % Y.length])?.focus()) : V.key === "ArrowRight" ? he?.getAttribute("aria-haspopup") === "menu" && (V.preventDefault(), V.stopPropagation(), he.getAttribute("aria-expanded") !== "true" && he.click(), document.getElementById(
        he.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (V.key === "ArrowLeft" || V.key === "Escape") && (V.preventDefault(), V.stopPropagation(), u(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: mt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : z,
        onMouseLeave: n.clickToOpen ? void 0 : M,
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
              "aria-controls": N,
              tabIndex: $ ? 0 : -1,
              disabled: f,
              className: [
                mt.item,
                f ? mt.disabled : null,
                mt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: I,
              onFocus: E,
              children: Q
            }
          ),
          m ? /* @__PURE__ */ o(
            "div",
            {
              id: N,
              role: "menu",
              tabIndex: -1,
              "aria-label": r,
              className: [
                mt.submenu,
                n.flyout && !b ? mt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: J,
              children: /* @__PURE__ */ o(vo.Provider, { value: ne, children: l.map(
                (V, Y) => wo(V) ? /* @__PURE__ */ o(
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
    "aria-current": w ? "page" : void 0,
    tabIndex: $ ? 0 : -1,
    onFocus: E,
    "data-dx-menu-item": "",
    className: [mt.submenuItem, f ? mt.disabled : null].filter(Boolean).join(" "),
    onClick: P
  };
  return i && !f ? /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...Ie, children: Q }) }) : /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...Ie, children: Q }) });
}
function Ya(e) {
  if (!Fn(vo)) throw new Error("MenuItem must be used inside <Menu>");
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
  ...f
}) {
  const p = ct(), g = ie(null), h = ie(null), [b, _] = q(null), [x, m] = q(null), [u, y] = q(0), [k, v] = q(!1), [O, w] = q(null), $ = ie(null);
  Ne(() => {
    const S = () => w(null);
    return window.addEventListener("hashchange", S), window.addEventListener("popstate", S), () => {
      window.removeEventListener("hashchange", S), window.removeEventListener("popstate", S);
    };
  }, []);
  const E = U(
    (S) => i?.(S),
    [i]
  ), P = U(() => {
    _(null), y((S) => S + 1);
  }, []);
  Ne(() => {
    if (b == null) return;
    const S = (R) => {
      g.current && !g.current.contains(R.target) && P();
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [b, P]), Ne(() => {
    $.current != null && b === $.current && (document.getElementById(`${p}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), $.current = null);
  }, [b, p]);
  const I = Se(
    () => Zr.toArray(e).filter(Kt),
    [e]
  ), z = Se(() => {
    const S = I.findIndex(
      (R) => wo(R) && !R.props.disabled
    );
    return S >= 0 ? String(S) : null;
  }, [I]), M = Se(
    () => ({
      baseId: p,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: u,
      emit: E,
      closeAll: P,
      openKey: b,
      setOpenKey: _,
      activeKey: x,
      setActiveKey: m,
      clickedKey: O,
      setClickedKey: w,
      defaultStopKey: z
    }),
    [
      p,
      n,
      t,
      u,
      E,
      P,
      b,
      x,
      O,
      z
    ]
  ), N = (S) => {
    const R = h.current;
    if (!R) return;
    const C = Array.from(R.children).map((F) => F.querySelector('[role="menuitem"]')).filter(
      (F) => F != null && !F.hasAttribute("disabled") && F.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const F = document.getElementById(`${p}-submenu-${b}`);
      if (F) {
        const ee = Array.from(
          F.querySelectorAll('[role="menuitem"]')
        ).filter(
          (Q) => Q.getAttribute("aria-disabled") !== "true" && !Q.hasAttribute("disabled")
        ), ne = document.activeElement, le = ne ? ee.indexOf(ne) : -1;
        if (S.key === "ArrowDown") {
          S.preventDefault(), (le === -1 ? ee[0] : ee[(le + 1) % ee.length])?.focus();
          return;
        }
        if (S.key === "ArrowUp") {
          S.preventDefault(), (le === -1 ? ee[ee.length - 1] : ee[(le - 1 + ee.length) % ee.length])?.focus();
          return;
        }
        if (S.key === "Escape") {
          S.preventDefault(), P(), c?.(), R.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (S.key === "Enter" || S.key === " ") return;
      }
      if (S.key === "Escape") {
        S.preventDefault(), P(), c?.();
        return;
      }
    }
    const A = document.activeElement, L = A ? C.indexOf(A) : -1;
    if (S.key === "ArrowRight") {
      if (S.preventDefault(), C.length === 0) return;
      C[L === -1 ? 0 : (L + 1) % C.length]?.focus();
      return;
    }
    if (S.key === "ArrowLeft") {
      if (S.preventDefault(), C.length === 0) return;
      C[L === -1 ? C.length - 1 : (L - 1 + C.length) % C.length]?.focus();
      return;
    }
    if (a && (S.key === "ArrowDown" || S.key === "ArrowUp")) {
      if (S.preventDefault(), C.length === 0) return;
      (S.key === "ArrowDown" ? C[L === -1 ? 0 : (L + 1) % C.length] : C[L === -1 ? C.length - 1 : (L - 1 + C.length) % C.length])?.focus();
      return;
    }
    if (S.key === "ArrowDown") {
      if (L >= 0) {
        const F = A?.getAttribute("data-index");
        if (F == null) return;
        R.querySelector(
          `[data-index="${F}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (S.preventDefault(), $.current = F, _(F));
      }
      return;
    }
    if (S.key === "Home") {
      S.preventDefault(), C[0]?.focus();
      return;
    }
    if (S.key === "End") {
      S.preventDefault(), C[C.length - 1]?.focus();
      return;
    }
    if (S.key.length === 1 && !S.ctrlKey && !S.metaKey) {
      const F = C.map((ne) => ne.textContent ?? ""), ee = L === -1 ? 0 : (L + 1) % C.length;
      for (let ne = 0; ne < C.length; ne++) {
        const le = (ee + ne) % C.length;
        if (F[le]?.toLowerCase().startsWith(S.key.toLowerCase())) {
          S.preventDefault(), C[le]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: g,
      "aria-label": s,
      className: [
        mt.root,
        a ? mt.vertical : mt.horizontal,
        r ? mt.responsive : null,
        r && k ? mt.mobileOpen : null,
        n ? mt.flyoutRoot : null,
        d
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": k,
            className: mt.hamburger,
            onClick: () => v((S) => !S),
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
            onKeyDown: N,
            children: /* @__PURE__ */ o(vo.Provider, { value: M, children: I.map(
              (S, R) => wo(S) ? /* @__PURE__ */ o(
                fs,
                {
                  itemKey: String(R),
                  props: S.props
                },
                `top-${R}`
              ) : /* @__PURE__ */ o(ls, { children: S }, `top-custom-${R}`)
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
}, Xa = dr(null);
function J$() {
  const e = Fn(Xa);
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
  const n = ie(null), [r, a] = q({ left: e.x, top: e.y });
  Go(() => {
    const c = n.current;
    if (!c) return;
    const s = c.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), Ne(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = U(
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
function Q$({ children: e }) {
  const [t, n] = q(null), r = U(() => {
    n((c) => (c?.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = U(
    (c, s) => {
      c.preventDefault();
      const l = c.currentTarget ?? c.target;
      n({ x: c.clientX, y: c.clientY, invoker: l, options: s });
    },
    []
  );
  Ne(() => {
    if (!t) return;
    const c = (f) => {
      const p = document.querySelector(`.${ss.popup}`);
      p && !p.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = Se(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ D(Xa.Provider, { value: i, children: [
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
}, ko = dr(null);
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
  const r = Fn(ko);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = Se(
    () => Zr.toArray(n.children).filter(Kt),
    [n.children]
  ), d = l.length > 0, f = !!s, p = n.match ?? r.match, g = n.expanded !== void 0, [h, b] = q(
    n.defaultExpanded ?? !1
  ), _ = g ? n.expanded ?? !1 : h, x = U(
    (A) => {
      g || b(A), n.onExpandedChange?.(A);
    },
    [g, n]
  );
  Ne(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && x(!1);
  }, [r.collapseSignal]);
  const m = n.onSelectedChange !== void 0 || n.selected !== void 0, u = n.defaultSelected ?? !1, y = !m && c ? Kw(c, p) : !1, k = m ? n.selected ?? u : y || u || r.clickedKey != null && r.clickedKey === e, [, v] = q(0);
  Ne(() => {
    if (!c) return;
    const A = () => v((L) => L + 1);
    return window.addEventListener("hashchange", A), window.addEventListener("popstate", A), () => {
      window.removeEventListener("hashchange", A), window.removeEventListener("popstate", A);
    };
  }, [c]);
  const O = Se(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        x(!0), r.openAncestors();
      }
    }),
    [r, x]
  );
  Ne(() => {
    y && t.length > 0 && O.openAncestors();
  }, []);
  const w = U(
    (A) => {
      if (f) {
        A.preventDefault();
        return;
      }
      const L = { text: a, value: i, path: c };
      [r.emit(L), n.onClick?.(L)].includes(!1) && A.preventDefault(), m || r.setClickedKey(e), n.onSelectedChange?.(!0);
    },
    [f, a, i, c, r, n, m, e]
  ), $ = U(() => {
    f || (_ || r.notifyOpened(e, t), x(!_));
  }, [f, _, r, e, t, x]), E = U(
    (A) => {
      A.key === "Enter" || A.key === " " ? (A.preventDefault(), d ? $() : A.target.click()) : A.key === "Escape" && _ ? (A.preventDefault(), x(!1)) : A.key === "ArrowRight" && d && !_ ? (A.preventDefault(), r.notifyOpened(e, t), x(!0)) : A.key === "ArrowLeft" && _ && (A.preventDefault(), x(!1));
    },
    [d, $, _, x, r, e, t]
  ), P = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [jt.caret, _ ? jt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Ee, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, I = n.template ?? /* @__PURE__ */ D(ot, { children: [
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
    P
  ] }), z = `${r.baseId}-panel-${e}`, M = `${r.baseId}-trigger-${e}`, N = [
    jt.trigger,
    f ? jt.disabled : null,
    _ ? jt.expanded : null,
    k ? jt.selected : null
  ].filter(Boolean).join(" "), S = r.level > 0 ? "menuitem" : void 0, R = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: M,
      role: S,
      "aria-expanded": _,
      "aria-controls": z,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: N,
      onClick: $,
      onKeyDown: E,
      children: I
    }
  ) : c && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: M,
      role: S,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": k ? "page" : void 0,
      tabIndex: 0,
      className: N,
      onClick: w,
      onKeyDown: E,
      children: I
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: M,
      role: S,
      "aria-current": k ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: N,
      onClick: w,
      onKeyDown: E,
      children: I
    }
  ), C = d ? r.renderMode === "server" && !_ ? null : /* @__PURE__ */ o(
    "div",
    {
      id: z,
      role: "menu",
      "aria-labelledby": M,
      className: jt.submenu,
      hidden: r.renderMode === "client" && !_ ? !0 : void 0,
      children: /* @__PURE__ */ o(ko.Provider, { value: O, children: l.map((A, L) => /* @__PURE__ */ o(
        ps,
        {
          itemKey: `${e}-${L}`,
          ancestors: [...t, e],
          props: A.props
        },
        `${e}-${L}`
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
        R,
        C
      ]
    }
  );
}
function eO(e) {
  if (!Fn(ko)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(ps, { itemKey: e.text, ancestors: [], props: e });
}
function tO({
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
  const f = ct(), [p, g] = q(0), h = ie(/* @__PURE__ */ new Set()), [b, _] = q(null);
  Ne(() => {
    const O = () => _(null);
    return window.addEventListener("hashchange", O), window.addEventListener("popstate", O), () => {
      window.removeEventListener("hashchange", O), window.removeEventListener("popstate", O);
    };
  }, []);
  const x = U(
    (O) => c?.(O),
    [c]
  ), m = U(
    (O, w) => {
      t || (h.current = /* @__PURE__ */ new Set([O, ...w]), g(($) => $ + 1));
    },
    [t]
  ), u = (O) => Array.from(
    O.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (w) => !w.hasAttribute("disabled") && w.getAttribute("aria-disabled") !== "true" && w.closest("[hidden]") == null
  ), y = (O) => {
    if (!(O.key === "Enter" || O.key === " ")) {
      if (O.key === "ArrowDown" || O.key === "ArrowUp") {
        const w = O.target, $ = u(O.currentTarget), E = $.indexOf(w);
        if (E === -1) return;
        O.preventDefault();
        const P = O.key === "ArrowDown" ? 1 : -1;
        $[(E + P + $.length) % $.length]?.focus();
      } else if (O.key === "Home" || O.key === "End") {
        const w = u(O.currentTarget);
        O.preventDefault(), (O.key === "Home" ? w[0] : w[w.length - 1])?.focus();
      }
    }
  }, k = Se(
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
      emit: x,
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
      x,
      m,
      b
    ]
  ), v = Se(
    () => Zr.toArray(e).filter(Kt),
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
        onKeyDown: y,
        ...d,
        children: /* @__PURE__ */ o("div", { className: jt.list, role: "presentation", children: /* @__PURE__ */ o(ko.Provider, { value: k, children: v.map((O, w) => /* @__PURE__ */ o(
          ps,
          {
            itemKey: String(w),
            ancestors: [],
            props: O.props
          },
          `top-${w}`
        )) }) })
      }
    )
  );
}
const Vw = "_root_5numg_1", Yw = "_trigger_5numg_7", Xw = "_defaultTrigger_5numg_40", Zw = "_avatar_5numg_46", Jw = "_menu_5numg_58", Qw = "_item_5numg_74", e2 = "_disabled_5numg_88", t2 = "_active_5numg_97", n2 = "_icon_5numg_107", r2 = "_text_5numg_114", Cn = {
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
function nO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = ct(), c = `${i}-menu`, s = ie(null), l = ie(null), [d, f] = q(!1), [p, g] = q(-1), h = t, b = e.map((v, O) => v.disabled ? -1 : O).filter((v) => v >= 0), _ = U(
    (v) => {
      if (v.disabled) return;
      const O = {
        text: v.text,
        path: v.path
      };
      n?.(O), f(!1), l.current?.focus();
    },
    [n]
  ), x = U(() => {
    g(b[0] ?? -1), f(!0);
  }, [b]), m = U(() => {
    f(!1), g(-1), l.current?.focus();
  }, []);
  Ne(() => {
    if (!d) return;
    const v = (O) => {
      s.current && !s.current.contains(O.target) && (f(!1), g(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [d]), Ne(() => {
    if (!d) return;
    const v = (O) => {
      O.key === "Escape" && (O.preventDefault(), m());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [d, m]);
  const u = (v) => {
    if (b.length === 0) return;
    const O = b.indexOf(p), w = O === -1 ? 0 : (O + v + b.length) % b.length, $ = b[w];
    $ != null && g($);
  }, y = (v) => {
    if (!d) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), x());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), m();
        break;
      case "ArrowDown":
        v.preventDefault(), u(1);
        break;
      case "ArrowUp":
        v.preventDefault(), u(-1);
        break;
      case "Home":
        v.preventDefault(), b[0] != null && g(b[0]);
        break;
      case "End":
        v.preventDefault(), b[b.length - 1] != null && g(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), p >= 0) {
          const O = e[p];
          O && !O.disabled && _(O);
        }
        break;
      case "Tab":
        f(!1), g(-1);
        break;
    }
  }, k = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), u(1);
        break;
      case "ArrowUp":
        v.preventDefault(), u(-1);
        break;
      case "Home":
        v.preventDefault(), b[0] != null && g(b[0]);
        break;
      case "End":
        v.preventDefault(), b[b.length - 1] != null && g(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), p >= 0) {
          const O = e[p];
          O && !O.disabled && _(O);
        }
        break;
      case "Escape":
        v.preventDefault(), m();
        break;
      case "Tab":
        f(!1), g(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [Cn.root, a].filter(Boolean).join(" "),
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
            className: Cn.trigger,
            onClick: () => d ? m() : x(),
            onKeyDown: y,
            children: h ?? /* @__PURE__ */ D("span", { className: Cn.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Cn.avatar, "aria-hidden": "true", children: "●" }),
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
            className: Cn.menu,
            onKeyDown: k,
            tabIndex: -1,
            children: e.map((v, O) => {
              const w = !!v.disabled, $ = O === p;
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleMenuKeyDown on the menu container
                /* @__PURE__ */ D(
                  "div",
                  {
                    id: `${i}-item-${O}`,
                    role: "menuitem",
                    "aria-disabled": w || void 0,
                    tabIndex: w ? -1 : 0,
                    className: [
                      Cn.item,
                      $ ? Cn.active : null,
                      w ? Cn.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => {
                      w || _(v);
                    },
                    onMouseEnter: () => {
                      w || g(O);
                    },
                    children: [
                      v.icon ? /* @__PURE__ */ o("span", { className: Cn.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: v.icon, size: "sm" }) }) : null,
                      /* @__PURE__ */ o("span", { className: Cn.text, children: v.text })
                    ]
                  },
                  `${v.text}-${O}`
                )
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const o2 = "_root_1o8i4_1", s2 = "_bottomRight_1o8i4_11", a2 = "_bottomLeft_1o8i4_16", l2 = "_topRight_1o8i4_21", i2 = "_topLeft_1o8i4_26", c2 = "_menu_1o8i4_50", d2 = "_itemWrapper_1o8i4_93", u2 = "_tooltip_1o8i4_99", f2 = "_main_1o8i4_121", p2 = "_mainIcon_1o8i4_149", _2 = "_mainOpen_1o8i4_154", h2 = "_item_1o8i4_93", m2 = "_disabled_1o8i4_186", g2 = "_itemIcon_1o8i4_193", Gt = {
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
function rO({
  items: e,
  position: t,
  icon: n = "add",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${ct()}-menu`, d = ie(null), f = ie(null), [p, g] = q(!1), h = U(
    (m) => {
      if (m.disabled) return;
      const u = { text: m.text, value: m.value };
      r?.(u), g(!1), f.current?.focus();
    },
    [r]
  );
  Ne(() => {
    if (!p) return;
    const m = (u) => {
      d.current && !d.current.contains(u.target) && g(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [p]), Ne(() => {
    if (!p) return;
    const m = (u) => {
      u.key === "Escape" && (g(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [p]);
  const b = c === "bottom-right" ? Gt.bottomRight : c === "bottom-left" ? Gt.bottomLeft : c === "top-right" ? Gt.topRight : Gt.topLeft, _ = (m) => {
    !p && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), g(!0)) : p && m.key === "Escape" && (m.preventDefault(), g(!1));
  }, x = (m) => {
    m.key === "Escape" && (m.preventDefault(), g(!1), f.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: d,
      className: [Gt.root, b, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        p ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            tabIndex: -1,
            "aria-label": a,
            className: Gt.menu,
            onKeyDown: x,
            children: e.map((m, u) => {
              const y = !!m.disabled;
              return /* @__PURE__ */ D("div", { className: Gt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: Gt.tooltip, "aria-hidden": "true", children: m.text }),
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
                    className: [Gt.item, y ? Gt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => h(m),
                    children: /* @__PURE__ */ o("span", { className: Gt.itemIcon, "aria-hidden": "true", children: m.icon ? /* @__PURE__ */ o(Ee, { icon: m.icon, size: 18 }) : /* @__PURE__ */ o("span", { children: "•" }) })
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
            className: Gt.main,
            "aria-haspopup": "menu",
            "aria-expanded": p,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => g((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Gt.mainIcon, p ? Gt.mainOpen : null].filter(Boolean).join(" "),
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
function oO({
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
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: c.icon, size: "sm" }) }) : null,
                c.text
              ]
            }
          ) : c.path ? /* @__PURE__ */ D(
            "a",
            {
              href: c.path,
              className: ht.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D("span", { className: ht.current, "aria-current": "page", children: [
            c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: c.icon, size: "sm" }) }) : null,
            c.text
          ] }) : d ? /* @__PURE__ */ D(
            "span",
            {
              className: [ht.link, ht.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: ht.text, children: c.text })
              ]
            }
          ) : c.path ? /* @__PURE__ */ D(
            "a",
            {
              href: c.path,
              className: ht.link,
              onClick: (f) => {
                f.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: c.icon, size: "sm" }) }) : null,
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
                c.icon ? /* @__PURE__ */ o("span", { className: ht.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: c.icon, size: "sm" }) }) : null,
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
}, sO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ D(ot, { children: [
    n != null && /* @__PURE__ */ o(Ee, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [T2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...p } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: c,
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
      ref: c,
      type: "button",
      className: l,
      ...i,
      children: s
    }
  );
}), C2 = "_root_dnkuu_1", M2 = "_list_dnkuu_5", A2 = "_item_dnkuu_15", D2 = "_connector_dnkuu_21", I2 = "_connectorCompleted_dnkuu_30", z2 = "_step_dnkuu_34", L2 = "_active_dnkuu_69", P2 = "_completed_dnkuu_75", R2 = "_circle_dnkuu_79", j2 = "_check_dnkuu_109", B2 = "_icon_dnkuu_114", F2 = "_number_dnkuu_119", H2 = "_text_dnkuu_124", Vt = {
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
function aO({
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
  className: f
}) {
  const p = a ?? i ?? !1, g = t ?? n, h = g !== void 0, [b, _] = q(() => Math.min(Math.max(0, g ?? r), Math.max(0, e.length - 1))), m = Math.min(
    Math.max(0, h ? g : b),
    Math.max(0, e.length - 1)
  ), u = ie(null), y = U(
    (O) => {
      const w = Math.min(
        Math.max(0, O),
        Math.max(0, e.length - 1)
      );
      h || _(w), (c ?? s ?? l)?.(w);
    },
    [h, c, s, l, e.length]
  ), k = U(
    (O, w) => !!(w.disabled || p && O > m + 1),
    [p, m]
  ), v = (O) => {
    const w = Array.from(
      O.currentTarget.querySelectorAll("button[data-step]")
    ).filter((P) => P.getAttribute("aria-disabled") !== "true" && !P.disabled), $ = document.activeElement, E = $ ? w.indexOf($) : -1;
    if (O.key === "ArrowRight" || O.key === "ArrowDown") {
      if (O.preventDefault(), w.length === 0) return;
      const P = E === -1 ? 0 : (E + 1) % w.length, I = w[P];
      I && I.focus();
    } else if (O.key === "ArrowLeft" || O.key === "ArrowUp") {
      if (O.preventDefault(), w.length === 0) return;
      const P = E === -1 ? w.length - 1 : (E - 1 + w.length) % w.length, I = w[P];
      I && I.focus();
    } else O.key === "Home" ? (O.preventDefault(), w[0]?.focus()) : O.key === "End" && (O.preventDefault(), w[w.length - 1]?.focus());
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Home/End and arrow keys are delegated to the step buttons inside this nav
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": d,
        className: [Vt.root, f].filter(Boolean).join(" "),
        onKeyDown: v,
        children: /* @__PURE__ */ o("ol", { ref: u, className: Vt.list, children: e.map((O, w) => {
          const $ = w === m, E = w < m, P = k(w, O);
          return /* @__PURE__ */ D("li", { className: Vt.item, children: [
            w > 0 ? /* @__PURE__ */ o(
              "span",
              {
                className: [
                  Vt.connector,
                  E ? Vt.connectorCompleted : null
                ].filter(Boolean).join(" "),
                "aria-hidden": "true"
              }
            ) : null,
            /* @__PURE__ */ D(
              "button",
              {
                type: "button",
                "data-step": w,
                "aria-current": $ ? "step" : void 0,
                "aria-disabled": P ? "true" : void 0,
                disabled: P,
                tabIndex: P ? -1 : 0,
                className: [
                  Vt.step,
                  $ ? Vt.active : null,
                  E ? Vt.completed : null,
                  P ? Vt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => {
                  P || y(w);
                },
                children: [
                  /* @__PURE__ */ o("span", { className: Vt.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ o("span", { className: Vt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Ee, { icon: "check", size: "sm" }) }) : O.icon ? /* @__PURE__ */ o("span", { className: Vt.icon, children: /* @__PURE__ */ o(Ee, { icon: O.icon, size: 14 }) }) : /* @__PURE__ */ o("span", { className: Vt.number, children: w + 1 }) }),
                  /* @__PURE__ */ o("span", { className: Vt.text, children: O.text })
                ]
              }
            )
          ] }, `${O.text}-${w}`);
        }) })
      }
    )
  );
}
const U2 = "_root_12hod_1", q2 = "_horizontal_12hod_13", W2 = "_vertical_12hod_17", K2 = "_pane_12hod_21", G2 = "_handle_12hod_31", V2 = "_handleHorizontal_12hod_51", Y2 = "_handleVertical_12hod_57", X2 = "_handleGrip_12hod_63", Z2 = "_handleCollapseHint_12hod_75", J2 = "_collapseBtn_12hod_79", Q2 = "_collapseBtnCollapsed_12hod_109", _n = {
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
function qr(e, t) {
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
function Pn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function lO({
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
  const d = e ?? t ?? "horizontal", f = d === "horizontal", p = ie(null), g = U(() => {
    const S = n.length;
    if (S === 0) return [];
    const R = n.map((A) => A.size ? qr(A.size, 100 / S) : 100 / S), C = R.reduce((A, L) => A + L, 0);
    return Math.abs(C - 100) > 0.01 && C > 0 ? R.map((A) => A / C * 100) : R;
  }, [n]), [h, b] = q(() => g()), [_, x] = q(
    () => n.map((S) => !!S.collapsed)
  ), m = ie(h), [u, y] = q(n);
  n !== u && (y(n), x(n.map((S) => !!S.collapsed)));
  const k = U(
    () => n.map((S) => qr(S.min, 0)),
    [n]
  ), v = U(
    () => n.map((S) => qr(S.max, 100)),
    [n]
  ), O = U(
    (S, R) => {
      const C = { paneIndex: S, newSize: R, cancel: !1 };
      return (r ?? a)?.(C), !C.cancel;
    },
    [r, a]
  ), w = U(
    (S, R) => {
      const C = { paneIndex: S, collapse: R, cancel: !1 };
      return (i ?? c)?.(C), !C.cancel;
    },
    [i, c]
  ), $ = U(
    (S) => {
      const R = !_[S];
      w(S, R) && (R ? (m.current = [...h], x((C) => {
        const A = [...C];
        return A[S] !== void 0 && (A[S] = !0), A;
      }), b((C) => {
        const A = [...C], L = A[S] ?? 0, F = S < A.length - 1 ? S + 1 : S - 1;
        if (F >= 0 && F < A.length) {
          const ee = A[F] ?? 0;
          A[F] = ee + L, A[S] = 0;
        } else
          A[S] = 0;
        return A;
      })) : (x((C) => {
        const A = [...C];
        return A[S] !== void 0 && (A[S] = !1), A;
      }), b(() => {
        const C = [...m.current];
        return C.length !== n.length ? n.map(() => 100 / n.length) : C;
      })));
    },
    [_, h, n, w]
  ), E = ie(
    null
  ), P = U(
    (S, R, C) => {
      const A = p.current;
      if (!A) return null;
      const L = A.getBoundingClientRect();
      let F;
      if (f) {
        if (L.width === 0) return null;
        F = (R - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        F = (C - L.top) / L.height * 100;
      }
      let ee = 0;
      for (let le = 0; le < S; le++) {
        const Q = h[le];
        Q !== void 0 && (ee += Q);
      }
      return F - ee;
    },
    [f, h]
  ), I = (S, R) => {
    R.preventDefault();
    const C = R.currentTarget;
    C.focus(), typeof C.setPointerCapture == "function" && C.setPointerCapture(R.pointerId), E.current = { handleIndex: S, pointerId: R.pointerId };
  }, z = (S) => {
    if (!E.current || E.current.pointerId !== S.pointerId)
      return;
    S.preventDefault();
    const R = E.current.handleIndex, C = P(R, S.clientX, S.clientY);
    if (C == null) return;
    const A = k(), L = v(), F = A[R] ?? 0, ee = L[R] ?? 100, ne = R + 1, le = A[ne] ?? 0, Q = L[ne] ?? 100, Ie = h[R] ?? 0, J = h[ne] ?? 0, V = Ie + J;
    if (V <= 0) return;
    let Y = Pn(C, F, ee), he = V - Y;
    if (he < le) {
      if (he = le, Y = V - he, Y < F || Y > ee) return;
    } else if (he > Q && (he = Q, Y = V - he, Y < F || Y > ee))
      return;
    Y = Pn(Y, F, ee), he = V - Y, O(R, Y) && b((te) => {
      const me = [...te];
      return me[R] = Y, me[ne] = he, me;
    });
  }, M = (S) => {
    !E.current || E.current.pointerId !== S.pointerId || (E.current = null);
  }, N = (S, R) => {
    const C = k(), A = v(), L = S, F = S + 1, ee = h[L] ?? 0, ne = h[F] ?? 0, le = ee + ne;
    let Q = 0;
    const Ie = !!n[L]?.collapsible, J = !!n[F]?.collapsible;
    if (f ? R.key === "ArrowLeft" ? Q = -5 : R.key === "ArrowRight" && (Q = 5) : R.key === "ArrowUp" ? Q = -5 : R.key === "ArrowDown" && (Q = 5), R.key === "Home") {
      R.preventDefault();
      let V = C[L] ?? 0, Y = le - V;
      if (Y = Pn(
        Y,
        C[F] ?? 0,
        A[F] ?? 100
      ), V = le - Y, V = Pn(V, C[L] ?? 0, A[L] ?? 100), !O(L, V)) return;
      b((he) => {
        const te = [...he];
        return te[L] = V, te[F] = Y, te;
      });
      return;
    }
    if (R.key === "End") {
      R.preventDefault();
      let V = A[L] ?? 100;
      V = Math.min(V, le - (C[F] ?? 0));
      let Y = le - V;
      if (Y = Pn(
        Y,
        C[F] ?? 0,
        A[F] ?? 100
      ), V = le - Y, V = Pn(V, C[L] ?? 0, A[L] ?? 100), !O(L, V)) return;
      b((he) => {
        const te = [...he];
        return te[L] = V, te[F] = Y, te;
      });
      return;
    }
    if ((R.key === "Enter" || R.key === " ") && (Ie || J)) {
      R.preventDefault(), $(Ie ? L : F);
      return;
    }
    if (Q !== 0) {
      R.preventDefault();
      let V = ee + Q, Y = le - V;
      const he = C[L] ?? 0, te = A[L] ?? 100, me = C[F] ?? 0, K = A[F] ?? 100;
      if (V = Pn(V, he, te), Y = le - V, (Y < me || Y > K) && (Y = Pn(Y, me, K), V = le - Y, V = Pn(V, he, te), Y = le - V), !O(L, V)) return;
      b(($e) => {
        const se = [...$e];
        return se[L] = V, se[F] = Y, se;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      className: [
        _n.root,
        f ? _n.horizontal : _n.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((S, R) => {
        const C = !!_[R], A = C ? 0 : h[R] ?? 100 / n.length, L = C ? { display: "none" } : f ? {
          flexBasis: `${A}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${A}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = qr(S.min, 0), ee = qr(S.max, 100), ne = R < n.length - 1, le = !!n[R + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": S.label ?? `Pane ${R + 1}`,
              className: _n.pane,
              style: L,
              "data-collapsed": C ? "true" : void 0,
              children: [
                C ? null : S.children,
                S.collapsible && !C ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: _n.collapseBtn,
                    "aria-label": `Collapse pane ${R + 1}`,
                    "aria-expanded": !C,
                    onClick: () => $(R),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                S.collapsible && C ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: _n.collapseBtn,
                    "aria-label": `Expand pane ${R + 1}`,
                    "aria-expanded": !C,
                    onClick: () => $(R),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          C && S.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _n.collapseBtnCollapsed,
                "aria-label": `Expand pane ${R + 1}`,
                "aria-expanded": "false",
                onClick: () => $(R),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          ne ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- focusable separator with arrow-key resize (handleSeparatorKeyDown); pointer drag is the mouse equivalent
            /* @__PURE__ */ D(
              "div",
              {
                role: "separator",
                "aria-orientation": d,
                "aria-valuemin": F,
                "aria-valuemax": ee,
                "aria-valuenow": Math.round(A),
                "aria-label": `Resize handle ${R + 1}`,
                tabIndex: C || _[R + 1] ? -1 : 0,
                className: [
                  _n.handle,
                  f ? _n.handleHorizontal : _n.handleVertical
                ].filter(Boolean).join(" "),
                onPointerDown: (Q) => I(R, Q),
                onPointerMove: z,
                onPointerUp: M,
                onKeyDown: (Q) => N(R, Q),
                children: [
                  /* @__PURE__ */ o("span", { className: _n.handleGrip, "aria-hidden": "true" }),
                  (S.collapsible || le) && /* @__PURE__ */ o(
                    "span",
                    {
                      className: _n.handleCollapseHint,
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            )
          ) : null
        ] }, R);
      })
    }
  );
}
const ek = "_root_1w3wd_1", tk = "_list_1w3wd_5", nk = "_vertical_1w3wd_14", rk = "_horizontal_1w3wd_20", ok = "_item_1w3wd_28", sk = "_link_1w3wd_32", ak = "_active_1w3wd_57", xr = {
  root: ek,
  list: tk,
  vertical: nk,
  horizontal: rk,
  item: ok,
  link: sk,
  active: ak
};
function iO({
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
  const d = t ?? n, f = r ?? a ?? "vertical", [p, g] = q(
    () => e[0]?.selector ?? null
  ), h = ie(p);
  Ne(() => {
    h.current = p;
  });
  const b = U(
    (_, x) => {
      if (g(_.selector), (i ?? c)?.({ text: _.text, selector: _.selector }), x) {
        try {
          x.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          x.scrollIntoView();
        }
        const u = x;
        u.getAttribute("tabindex") == null && u.tabIndex === -1 || u.tabIndex < 0 ? (u.getAttribute("tabindex"), u.setAttribute("tabindex", "-1"), u.focus({ preventScroll: !0 })) : u.focus({ preventScroll: !0 });
      }
    },
    [i, c]
  );
  return Ne(() => {
    if (e.length === 0) return;
    const x = (() => {
      if (d) {
        const v = document.querySelector(d);
        if (v) return v;
      }
      return window;
    })();
    let m = null;
    const u = /* @__PURE__ */ new Map(), y = () => {
      let v = null, O = null;
      for (const $ of e) {
        const E = document.querySelector($.selector);
        if (!E) continue;
        u.set($.selector, E);
        const P = E.getBoundingClientRect();
        let I = P.top;
        if (x !== window) {
          const z = x.getBoundingClientRect();
          I = P.top - z.top;
        }
        I <= 80 ? (!O || I > O.el.getBoundingClientRect().top - (x !== window ? x.getBoundingClientRect().top : 0)) && (O = { sel: $.selector, el: E }) : (!v || I < v.top) && (v = { sel: $.selector, top: I });
      }
      const w = O?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      w && w !== h.current && g(w);
    }, k = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const v = x === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: x,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      m = new IntersectionObserver((O) => {
        const w = O.filter(($) => $.isIntersecting).sort(($, E) => $.boundingClientRect.top - E.boundingClientRect.top);
        if (w[0]) {
          const $ = w[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === $) {
              g(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && $.id === E.selector.slice(1)) {
              g(E.selector);
              break;
            }
          }
        } else
          y();
      }, v);
      for (const O of e) {
        const w = document.querySelector(O.selector);
        w && (m.observe(w), u.set(O.selector, w));
      }
    }
    return x === window ? (window.addEventListener("scroll", k, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", k), m?.disconnect();
    }) : (x.addEventListener("scroll", k, {
      passive: !0
    }), y(), () => {
      x.removeEventListener("scroll", k), m?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [xr.root, xr[f], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: xr.list, children: e.map((_) => {
        const x = _.selector === p;
        return /* @__PURE__ */ o("li", { className: xr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: _.selector.startsWith("#") || _.selector.startsWith(".") ? _.selector : `#${_.selector}`,
            className: [xr.link, x ? xr.active : null].filter(Boolean).join(" "),
            "aria-current": x ? "location" : void 0,
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
const lk = "_root_1bfit_1", ik = "_viewport_1bfit_17", ck = "_slide_1bfit_24", dk = "_active_1bfit_33", uk = "_arrow_1bfit_37", fk = "_prev_1bfit_71", pk = "_next_1bfit_75", _k = "_pauseBtn_1bfit_79", hk = "_indicators_1bfit_110", mk = "_indicator_1bfit_110", gk = "_indicatorActive_1bfit_145", hn = {
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
function cO({
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
  showArrows: f,
  ShowArrows: p,
  showIndicators: g,
  ShowIndicators: h,
  onChange: b,
  Change: _,
  ariaLabel: x = "Carousel",
  className: m
}) {
  const u = t ?? n, y = u !== void 0, [k, v] = q(() => Math.min(Math.max(0, u ?? r), Math.max(0, e.length - 1))), O = y ? u : k, w = e.length === 0 ? 0 : Math.min(Math.max(0, O), e.length - 1), $ = a ?? i ?? !1, E = c ?? s ?? 3e3, P = l ?? d ?? !0, I = f ?? p ?? !0, z = g ?? h ?? !0, [M, N] = q(!1), [S, R] = q(!1), C = M || S, A = ie(null), L = ct(), F = U(
    (te) => {
      const me = e.length === 0 ? 0 : (te % e.length + e.length) % e.length;
      y || v(me), (b ?? _)?.(me);
    },
    [y, b, _, e.length]
  ), ee = U(() => {
    F(w - 1);
  }, [F, w]), ne = U(() => {
    F(w + 1);
  }, [F, w]), le = U(
    (te) => {
      F(te);
    },
    [F]
  ), Q = Eo("(prefers-reduced-motion: reduce)");
  Ne(() => {
    if (!$ || C || Q || e.length <= 1) return;
    const te = setInterval(() => {
      F(w + 1);
    }, E);
    return () => clearInterval(te);
  }, [
    $,
    C,
    Q,
    E,
    w,
    F,
    e.length
  ]);
  const Ie = (te) => {
    e.length !== 0 && (te.key === "ArrowLeft" ? (te.preventDefault(), ee()) : te.key === "ArrowRight" ? (te.preventDefault(), ne()) : te.key === "Home" ? (te.preventDefault(), le(0)) : te.key === "End" && (te.preventDefault(), le(e.length - 1)));
  }, J = () => {
    P && $ && R(!0);
  }, V = () => {
    P && $ && R(!1);
  }, Y = () => {
    P && $ && R(!0);
  }, he = () => {
    P && $ && R(!1);
  };
  return e.length === 0 ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover pause/play plus arrow-key handlers; this region is the carousel's keyboard control surface
    /* @__PURE__ */ D(
      "div",
      {
        ref: A,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": x,
        tabIndex: 0,
        className: [hn.root, m].filter(Boolean).join(" "),
        onKeyDown: Ie,
        onMouseEnter: J,
        onMouseLeave: V,
        onFocusCapture: Y,
        onBlurCapture: he,
        children: [
          /* @__PURE__ */ o("div", { id: L, className: hn.viewport, children: e.map((te, me) => {
            const K = me === w;
            return /* @__PURE__ */ o(
              "div",
              {
                role: "group",
                "aria-roledescription": "slide",
                "aria-label": `Slide ${me + 1} of ${e.length}`,
                "aria-hidden": K ? void 0 : !0,
                hidden: !K,
                className: [hn.slide, K ? hn.active : null].filter(Boolean).join(" "),
                children: te
              },
              me
            );
          }) }),
          I && e.length > 1 ? /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [hn.arrow, hn.prev].filter(Boolean).join(" "),
                "aria-label": "Previous slide",
                "aria-controls": L,
                onClick: ee,
                children: "‹"
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [hn.arrow, hn.next].filter(Boolean).join(" "),
                "aria-label": "Next slide",
                "aria-controls": L,
                onClick: ne,
                children: "›"
              }
            )
          ] }) : null,
          $ ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: hn.pauseBtn,
              "aria-label": M ? "Resume" : "Pause",
              "aria-pressed": M,
              onClick: () => N((te) => !te),
              children: M ? "▶" : "⏸"
            }
          ) : null,
          z && e.length > 1 ? /* @__PURE__ */ o(
            "div",
            {
              className: hn.indicators,
              role: "group",
              "aria-label": "Slide indicators",
              children: e.map((te, me) => {
                const K = me === w;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: [
                      hn.indicator,
                      K ? hn.indicatorActive : null
                    ].filter(Boolean).join(" "),
                    "aria-label": `Go to slide ${me + 1}`,
                    "aria-current": K ? "true" : void 0,
                    "aria-controls": L,
                    onClick: () => le(me)
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
  const n = ie(null);
  return Ne(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function dO({
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
  selectedItem: f,
  SelectedItem: p,
  selectedItems: g,
  SelectedItems: h,
  defaultSelectedItem: b,
  defaultSelectedItems: _,
  onChange: x,
  Change: m,
  onExpand: u,
  Expand: y,
  onCollapse: k,
  Collapse: v,
  loadChildData: O,
  LoadChildData: w,
  template: $,
  Template: E,
  itemTemplate: P,
  ItemTemplate: I,
  ariaLabel: z,
  AriaLabel: M,
  allowCheckBoxes: N = !1,
  checkedKeys: S,
  defaultCheckedKeys: R,
  onCheckedChange: C,
  allowCheckChildren: A = !0,
  className: L
}) {
  const F = Se(() => e ?? t ?? [], [e, t]), ee = n ?? r, ne = a ?? i ?? "text", le = c ?? s ?? "id", Q = l ?? d ?? "single", Ie = z ?? M ?? "Tree", J = O ?? w, V = $ ?? E ?? P ?? I, Y = U(
    (Z) => {
      const ce = Z[le];
      return ce != null ? String(ce) : String(Z.id ?? "");
    },
    [le]
  ), he = U(
    (Z) => {
      const ce = Z[ne];
      if (ce != null) return String(ce);
      const _e = Z.text;
      return _e != null ? String(_e) : "";
    },
    [ne]
  ), te = U(
    (Z) => {
      if (ee) {
        const _e = ee(Z);
        if (_e !== void 0) return _e;
      }
      const ce = Z.children;
      if (Array.isArray(ce)) return ce;
    },
    [ee]
  ), me = U(
    (Z) => {
      const ce = /* @__PURE__ */ new Set(), _e = (ke) => {
        for (const ve of ke) {
          const Me = Y(ve);
          ve.expanded && ce.add(Me);
          const Ye = te(ve);
          Ye && Ye.length > 0 && _e(Ye);
        }
      };
      return _e(Z), ce;
    },
    [Y, te]
  ), [K, $e] = q(
    () => me(F)
  ), [se, Ae] = q(
    () => /* @__PURE__ */ new Map()
  ), [ye, We] = q(() => /* @__PURE__ */ new Set()), Je = f ?? p, Ge = g ?? h, gt = Q === "multiple" ? Ge !== void 0 : Je !== void 0, re = U(() => {
    if (Q === "multiple") {
      if (_ && _.length > 0)
        return new Set(_.map((_e) => Y(_e)));
      const Z = /* @__PURE__ */ new Set(), ce = (_e) => {
        for (const ke of _e) {
          ke.selected && Z.add(Y(ke));
          const ve = te(ke);
          ve && ce(ve);
        }
      };
      return ce(F), Z;
    } else {
      if (b) return /* @__PURE__ */ new Set([Y(b)]);
      let Z = null;
      const ce = (_e) => {
        for (const ke of _e) {
          if (ke.selected)
            return Z = Y(ke), !0;
          const ve = te(ke);
          if (ve && ce(ve)) return !0;
        }
        return !1;
      };
      return ce(F), Z ? /* @__PURE__ */ new Set([Z]) : /* @__PURE__ */ new Set();
    }
  }, [
    Q,
    b,
    _,
    Y,
    te,
    F
  ]), [Te, lt] = q(
    () => re()
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
  ]), st = U(
    (Z) => {
      let ce;
      const _e = (ke) => {
        for (const ve of ke) {
          if (Y(ve) === Z)
            return ce = ve, !0;
          const Ye = se.get(Y(ve)) ?? te(ve);
          if (Ye && _e(Ye)) return !0;
        }
        return !1;
      };
      if (_e(F), !ce) {
        for (const ke of se.values())
          if (_e(ke)) break;
      }
      return ce;
    },
    [F, se, Y, te]
  ), Xe = U(() => {
    const Z = /* @__PURE__ */ new Map(), ce = (_e) => {
      for (const ke of _e) {
        const ve = Y(ke);
        Z.set(ve, ke);
        const Ye = se.get(ve) ?? te(ke);
        Ye && ce(Ye);
      }
    };
    return ce(F), Z;
  }, [F, se, Y, te]), Tt = U(
    (Z) => {
      const ce = Y(Z);
      if (!Z.disabled)
        if (Q === "multiple") {
          const ke = new Set(ze);
          ke.has(ce) ? ke.delete(ce) : ke.add(ce), gt || lt(ke);
          const ve = x ?? m;
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
          const ve = x ?? m;
          ve && ve({ item: Z, selectedItem: Z });
        } else {
          const ve = x ?? m;
          ve && ve({ item: Z, selectedItem: Z });
        }
    },
    [
      Y,
      Q,
      ze,
      gt,
      x,
      m,
      Xe,
      st
    ]
  ), yt = U(
    async (Z) => {
      const ce = Y(Z);
      if (!!Z.disabled) return;
      const ke = K.has(ce), ve = u ?? y, Me = k ?? v, Ye = te(Z), dt = se.get(ce) ?? Ye, je = !(dt !== void 0 && dt.length > 0) && J != null;
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
          Ae((Qt) => {
            const At = new Map(Qt);
            return At.set(ce, ut), At;
          }), $e((Qt) => {
            const At = new Set(Qt);
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
      te,
      se,
      J,
      ye,
      u,
      y,
      k,
      v
    ]
  ), it = Se(() => {
    const Z = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Set(), ke = (ve, Me) => {
      for (const Ye of ve) {
        const Fe = Y(Ye);
        Z.has(Fe) || Z.set(Fe, []), ce.set(Fe, Me), Ye.disabled && _e.add(Fe);
        const xt = se.get(Fe) ?? te(Ye);
        xt && xt.length > 0 && (Z.set(
          Fe,
          xt.map((je) => Y(je))
        ), ke(xt, Fe));
      }
    };
    return ke(F, null), { childrenOf: Z, parentOf: ce, disabledKeys: _e };
  }, [F, se, Y, te]), ft = U(
    (Z) => {
      const ce = [], _e = [...it.childrenOf.get(Z) ?? []];
      for (; _e.length > 0; ) {
        const ke = _e.pop();
        ce.push(ke), _e.push(...it.childrenOf.get(ke) ?? []);
      }
      return ce;
    },
    [it]
  ), [Ve, Ct] = q(
    () => new Set(R ?? [])
  ), ae = Se(
    () => S !== void 0 ? new Set(S) : Ve,
    [S, Ve]
  ), Le = U(
    (Z) => {
      const ce = it.disabledKeys;
      return ft(Z).filter((_e) => !ce.has(_e));
    },
    [ft, it]
  ), wt = U(
    (Z) => {
      if (ae.has(Z)) return !0;
      if (!N || !A) return !1;
      const ce = Le(Z);
      return ce.length > 0 && ce.every((_e) => ae.has(_e));
    },
    [ae, N, A, Le]
  ), Mt = U(
    (Z) => {
      if (!N || !A || ae.has(Z))
        return !1;
      const ce = Le(Z);
      if (ce.length === 0) return !1;
      const _e = ce.filter((ke) => ae.has(ke)).length;
      return _e > 0 && _e < ce.length;
    },
    [ae, N, A, Le]
  ), bt = U(
    (Z) => {
      if (!N || Z.disabled) return;
      const ce = Y(Z), _e = new Set(ae);
      if (_e.has(ce) || wt(ce)) {
        if (_e.delete(ce), A)
          for (const ke of Le(ce)) _e.delete(ke);
      } else if (_e.add(ce), A)
        for (const ke of Le(ce)) _e.add(ke);
      S === void 0 && Ct(_e), C?.([..._e]);
    },
    [
      N,
      A,
      S,
      ae,
      Le,
      Y,
      wt,
      C
    ]
  ), j = Se(() => {
    const Z = [], ce = (_e, ke, ve) => {
      _e.forEach((Me, Ye) => {
        const Fe = Y(Me), dt = he(Me), xt = se.get(Fe) ?? te(Me);
        let je;
        se.has(Fe) ? je = se.get(Fe).length > 0 : xt !== void 0 ? je = xt.length > 0 : J ? je = !0 : je = !1;
        const tt = K.has(Fe), ut = !!Me.disabled, Qt = _e.length, At = Ye + 1;
        if (Z.push({
          item: Me,
          key: Fe,
          text: dt,
          level: ke,
          posInSet: At,
          setSize: Qt,
          hasChildren: je,
          expanded: tt,
          parentKey: ve,
          disabled: ut
        }), je && tt) {
          const un = se.get(Fe) ?? xt;
          un && un.length > 0 && ce(un, ke + 1, Fe);
        }
      });
    };
    return ce(F, 1, null), Z;
  }, [
    F,
    Y,
    he,
    te,
    se,
    K,
    J
  ]), [X, ge] = q(
    () => j[0]?.key ?? null
  ), we = ie(""), fe = ie(null), H = ie(null), [pe, Re] = q({
    key: X,
    nodes: j
  });
  if (pe.key !== X || pe.nodes !== j) {
    if (Re({ key: X, nodes: j }), !X && j.length > 0) {
      const Z = j[0];
      Z && ge(Z.key);
    } else if (X && !j.some((Z) => Z.key === X)) {
      const Z = j[0];
      ge(Z ? Z.key : null);
    }
  }
  Ne(() => {
    if (X) {
      const Z = H.current?.querySelector(
        `[data-key="${CSS.escape(X)}"]`
      );
      let ce = null;
      Z || (ce = H.current?.querySelector(
        `[data-key="${X}"]`
      ) ?? null);
      const _e = Z ?? ce;
      _e && document.activeElement !== _e && H.current?.contains(document.activeElement) && _e.focus();
    }
  }, [X]);
  const De = U((Z) => {
    ge(Z), requestAnimationFrame(() => {
      const ce = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(Z) : Z;
      let _e = H.current?.querySelector(
        `[data-key="${ce}"]`
      );
      _e || (_e = H.current?.querySelector(`[data-key="${Z}"]`) ?? null), _e?.focus();
    });
  }, []), It = U(
    (Z) => j.find((_e) => _e.key === Z)?.parentKey ?? null,
    [j]
  ), et = U(
    (Z) => {
      if (j.length === 0) return;
      const ce = X ? j.findIndex((ve) => ve.key === X) : -1, _e = ce >= 0 ? j[ce] : void 0;
      let ke = null;
      if (Z.key === "ArrowDown") {
        if (Z.preventDefault(), ce === -1)
          ke = j[0]?.key ?? null;
        else {
          const ve = (ce + 1) % j.length, Me = j[ve];
          Me && (ke = Me.key);
        }
        ke && De(ke);
        return;
      }
      if (Z.key === "ArrowUp") {
        if (Z.preventDefault(), ce === -1) {
          const ve = j[j.length - 1];
          ve && (ke = ve.key);
        } else {
          const ve = (ce - 1 + j.length) % j.length, Me = j[ve];
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
          const ve = ce + 1, Me = j[ve];
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
        const ve = j[0];
        ve && De(ve.key);
        return;
      }
      if (Z.key === "End") {
        Z.preventDefault();
        const ve = j[j.length - 1];
        ve && De(ve.key);
        return;
      }
      if (Z.key === "Enter" || Z.key === " ") {
        if (Z.key === " " && Z.target?.tagName === "INPUT" || (Z.preventDefault(), !_e)) return;
        if (Z.key === " " && N) {
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
        const Me = ce >= 0 ? ce + 1 : 0, dt = [...j, ...j].slice(Me, Me + j.length).find((xt) => xt.text.toLowerCase().startsWith(ve));
        dt && De(dt.key);
        return;
      }
    },
    [
      j,
      X,
      De,
      yt,
      Tt,
      It,
      N,
      bt,
      st
    ]
  ), gn = U(() => {
    if (!X && j.length > 0) {
      const Z = j[0];
      Z && ge(Z.key);
    }
  }, [X, j]), Sn = (Z, ce, _e) => /* @__PURE__ */ o("ul", { role: "group", className: Lt.group, children: Z.map((ke, ve) => {
    const Me = Y(ke), Ye = he(ke), Fe = se.get(Me) ?? te(ke);
    let dt;
    se.has(Me) ? dt = se.get(Me).length > 0 : Fe !== void 0 ? dt = Fe.length > 0 : J ? dt = !0 : dt = !1;
    const xt = K.has(Me), je = ze.has(Me), tt = !!ke.disabled, ut = ye.has(Me), Qt = X === Me, At = Z.length, un = ve + 1, Jn = V ? V(ke) : Ye, Qn = N ? {
      checked: wt(Me),
      indeterminate: Mt(Me)
    } : null;
    return /* @__PURE__ */ D("li", { role: "none", className: Lt.itemWrapper, children: [
      /* @__PURE__ */ D(
        "div",
        {
          role: "treeitem",
          "data-key": Me,
          tabIndex: Qt ? 0 : -1,
          "aria-expanded": dt ? xt : void 0,
          "aria-selected": je,
          "aria-level": ce,
          "aria-setsize": At,
          "aria-posinset": un,
          "aria-disabled": tt || void 0,
          "aria-busy": ut || void 0,
          className: [
            Lt.treeitem,
            je ? Lt.selected : null,
            tt ? Lt.disabled : null,
            Qt ? Lt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            De(Me), tt || Tt(ke);
          },
          onFocus: () => ge(Me),
          children: [
            N ? /* @__PURE__ */ o(
              Dk,
              {
                className: Lt.checkbox,
                checked: Qn?.checked ?? !1,
                indeterminate: Qn?.indeterminate ?? !1,
                disabled: tt,
                "aria-label": `Select ${Ye}`,
                onClick: (Hn) => Hn.stopPropagation(),
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
                onClick: (Hn) => {
                  Hn.stopPropagation(), De(Me), yt(ke);
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
            /* @__PURE__ */ o("span", { className: Lt.label, children: Jn }),
            ut ? /* @__PURE__ */ o("span", { className: Lt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && xt ? ut ? /* @__PURE__ */ o("div", { className: Lt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? Sn(Fe, ce + 1) : se.has(Me) && se.get(Me).length > 0 ? Sn(
        se.get(Me),
        ce + 1
      ) : (Fe && Fe.length === 0, null) : null
    ] }, Me);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: H,
      role: "tree",
      "aria-label": Ie,
      "aria-multiselectable": Q === "multiple" || void 0,
      tabIndex: 0,
      className: [Lt.root, L].filter(Boolean).join(" "),
      onKeyDown: et,
      onFocus: gn,
      children: F.length === 0 ? /* @__PURE__ */ o("div", { className: Lt.empty, children: "No items" }) : Sn(F, 1)
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
function uO({
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
  onSourceChange: f,
  SourceChange: p,
  onTargetChange: g,
  TargetChange: h,
  keyProperty: b,
  KeyProperty: _,
  onMove: x,
  Move: m,
  ariaLabel: u,
  AriaLabel: y,
  className: k
}) {
  const v = b ?? _ ?? "id", O = u ?? y ?? "PickList", w = e ?? t ?? a ?? i ?? l ?? d ?? [], $ = n ?? r ?? c ?? s ?? [], [E, P] = q(() => [
    ...w
  ]), [I, z] = q(() => [
    ...$
  ]), M = e ?? t ?? a ?? i ?? l ?? d, [N, S] = q(M);
  M !== N && (S(M), M !== void 0 && P([...M]));
  const R = n ?? r ?? c ?? s, [C, A] = q(R);
  R !== C && (A(R), R !== void 0 && z([...R]));
  const [L, F] = q(
    () => /* @__PURE__ */ new Set()
  ), [ee, ne] = q(
    () => /* @__PURE__ */ new Set()
  ), [le, Q] = q(() => {
    const j = w.findIndex((X) => !X.disabled);
    return j >= 0 ? j : 0;
  }), [Ie, J] = q(() => {
    const j = $.findIndex((X) => !X.disabled);
    return j >= 0 ? j : 0;
  }), V = Se(
    () => E.map((j, X) => j.disabled ? -1 : X).filter((j) => j >= 0),
    [E]
  ), Y = Se(
    () => I.map((j, X) => j.disabled ? -1 : X).filter((j) => j >= 0),
    [I]
  ), he = {
    active: le,
    len: E.length,
    idxs: V
  }, [te, me] = q(he);
  if (te.active !== he.active || te.len !== he.len || te.idxs !== he.idxs) {
    if (me(he), le >= E.length) {
      const j = V[V.length - 1];
      Q(j ?? 0);
    } else if (E.length > 0 && V.length > 0 && !V.includes(le)) {
      const j = V[0];
      j !== void 0 && Q(j);
    }
  }
  const K = {
    active: Ie,
    len: I.length,
    idxs: Y
  }, [$e, se] = q(K);
  if ($e.active !== K.active || $e.len !== K.len || $e.idxs !== K.idxs) {
    if (se(K), Ie >= I.length) {
      const j = Y[Y.length - 1];
      J(j ?? 0);
    } else if (I.length > 0 && Y.length > 0 && !Y.includes(Ie)) {
      const j = Y[0];
      j !== void 0 && J(j);
    }
  }
  const [Ae, ye] = q({
    items: E,
    key: v
  });
  (Ae.items !== E || Ae.key !== v) && (ye({ items: E, key: v }), F((j) => {
    const X = /* @__PURE__ */ new Set();
    for (const ge of j)
      E.some(
        (fe) => Pt(fe, v) === ge && !fe.disabled
      ) && X.add(ge);
    return X.size === j.size ? j : X;
  }));
  const [We, Je] = q({
    items: I,
    key: v
  });
  (We.items !== I || We.key !== v) && (Je({ items: I, key: v }), ne((j) => {
    const X = /* @__PURE__ */ new Set();
    for (const ge of j)
      I.some(
        (fe) => Pt(fe, v) === ge && !fe.disabled
      ) && X.add(ge);
    return X.size === j.size ? j : X;
  }));
  const Ge = U(
    (j) => {
      (f ?? p)?.(j);
    },
    [f, p]
  ), Qe = U(
    (j) => {
      (g ?? h)?.(j);
    },
    [g, h]
  ), He = U(
    (j) => {
      (x ?? m)?.(j);
    },
    [x, m]
  ), gt = U(
    (j) => {
      const X = E[j];
      if (!X || X.disabled) return;
      const ge = Pt(X, v);
      F((we) => {
        const fe = new Set(we);
        return fe.has(ge) ? fe.delete(ge) : fe.add(ge), fe;
      }), Q(j);
    },
    [E, v]
  ), re = U(
    (j) => {
      const X = I[j];
      if (!X || X.disabled) return;
      const ge = Pt(X, v);
      ne((we) => {
        const fe = new Set(we);
        return fe.has(ge) ? fe.delete(ge) : fe.add(ge), fe;
      }), J(j);
    },
    [I, v]
  ), Te = U(() => {
    const j = [], X = [];
    for (const H of E) {
      const pe = Pt(H, v);
      L.has(pe) && !H.disabled ? j.push(H) : X.push(H);
    }
    if (j.length === 0) return;
    const ge = X, we = [...I, ...j];
    P(ge), z(we), F(/* @__PURE__ */ new Set());
    const fe = new Set(j.map((H) => Pt(H, v)));
    ne(fe), Ge(ge), Qe(we), He({
      source: ge,
      target: we,
      moved: j,
      direction: "toTarget"
    });
  }, [
    E,
    I,
    L,
    v,
    Ge,
    Qe,
    He
  ]), lt = U(() => {
    const j = [], X = [];
    for (const H of I) {
      const pe = Pt(H, v);
      ee.has(pe) && !H.disabled ? j.push(H) : X.push(H);
    }
    if (j.length === 0) return;
    const ge = X, we = [...E, ...j];
    z(ge), P(we), ne(/* @__PURE__ */ new Set());
    const fe = new Set(j.map((H) => Pt(H, v)));
    F(fe), Ge(we), Qe(ge), He({
      source: we,
      target: ge,
      moved: j,
      direction: "toSource"
    });
  }, [
    E,
    I,
    ee,
    v,
    Ge,
    Qe,
    He
  ]), ze = U(() => {
    const j = E.filter((we) => !we.disabled);
    if (j.length === 0) return;
    const X = E.filter((we) => !!we.disabled), ge = [...I, ...j];
    P(X), z(ge), F(/* @__PURE__ */ new Set()), Ge(X), Qe(ge), He({
      source: X,
      target: ge,
      moved: j,
      direction: "allToTarget"
    });
  }, [E, I, Ge, Qe, He]), st = U(() => {
    const j = I.filter((we) => !we.disabled);
    if (j.length === 0) return;
    const X = I.filter((we) => !!we.disabled), ge = [...E, ...j];
    z(X), P(ge), ne(/* @__PURE__ */ new Set()), Ge(ge), Qe(X), He({
      source: ge,
      target: X,
      moved: j,
      direction: "allToSource"
    });
  }, [E, I, Ge, Qe, He]), Xe = U(() => {
    if (ee.size === 0) return;
    const j = [...I], X = ee, ge = [];
    for (let fe = 1; fe < j.length; fe++) {
      const H = j[fe], pe = j[fe - 1];
      if (!H || !pe) continue;
      const Re = Pt(H, v), De = Pt(pe, v);
      X.has(Re) && !X.has(De) && !H.disabled && !pe.disabled && (j[fe - 1] = H, j[fe] = pe, ge.push(H));
    }
    if (ge.length === 0) return;
    z(j), Qe(j), He({ source: E, target: j, moved: ge, direction: "up" });
    const we = Array.from(X)[0];
    if (we) {
      const fe = j.findIndex(
        (H) => Pt(H, v) === we
      );
      fe >= 0 && J(fe);
    }
  }, [
    I,
    ee,
    v,
    E,
    Qe,
    He
  ]), Tt = U(() => {
    if (ee.size === 0) return;
    const j = [...I], X = ee, ge = [];
    for (let fe = j.length - 2; fe >= 0; fe--) {
      const H = j[fe], pe = j[fe + 1];
      if (!H || !pe) continue;
      const Re = Pt(H, v), De = Pt(pe, v);
      X.has(Re) && !X.has(De) && !H.disabled && !pe.disabled && (j[fe] = pe, j[fe + 1] = H, ge.push(H));
    }
    if (ge.length === 0) return;
    z(j), Qe(j), He({ source: E, target: j, moved: ge, direction: "down" });
    const we = Array.from(X)[0];
    if (we) {
      const fe = j.findIndex(
        (H) => Pt(H, v) === we
      );
      fe >= 0 && J(fe);
    }
  }, [
    I,
    ee,
    v,
    E,
    Qe,
    He
  ]), yt = L.size > 0, it = ee.size > 0, ft = ie(""), Ve = ie(
    null
  ), Ct = ie(""), ae = ie(
    null
  ), Le = U(
    (j) => {
      if (E.length === 0) return;
      const X = V;
      if (X.length === 0) return;
      const ge = X.includes(le) ? le : X[0] ?? 0;
      let we = -1;
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe + 1) % X.length] ?? X[0] ?? 0;
      } else if (j.key === "ArrowUp") {
        j.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe - 1 + X.length) % X.length] ?? X[0] ?? 0;
      } else if (j.key === "Home")
        j.preventDefault(), we = X[0] ?? 0;
      else if (j.key === "End")
        j.preventDefault(), we = X[X.length - 1] ?? 0;
      else if (j.key === "Enter" || j.key === " ") {
        j.preventDefault(), gt(ge);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(j.key)) {
        j.preventDefault();
        const fe = (ft.current + j.key).toLowerCase();
        ft.current = fe, Ve.current && clearTimeout(Ve.current), Ve.current = setTimeout(() => {
          ft.current = "";
        }, 500);
        const H = [...X, ...X], pe = X.indexOf(ge) + 1, Re = H.slice(pe).find(
          (De) => ho(E[De]).toLowerCase().startsWith(fe)
        );
        Re != null && Q(Re);
        return;
      }
      we >= 0 && Q(we);
    },
    [E, V, le, gt]
  ), wt = U(
    (j) => {
      if (I.length === 0) return;
      const X = Y;
      if (X.length === 0) return;
      const ge = X.includes(Ie) ? Ie : X[0] ?? 0;
      let we = -1;
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe + 1) % X.length] ?? X[0] ?? 0;
      } else if (j.key === "ArrowUp") {
        j.preventDefault();
        const fe = X.indexOf(ge);
        we = X[(fe - 1 + X.length) % X.length] ?? X[0] ?? 0;
      } else if (j.key === "Home")
        j.preventDefault(), we = X[0] ?? 0;
      else if (j.key === "End")
        j.preventDefault(), we = X[X.length - 1] ?? 0;
      else if (j.key === "Enter" || j.key === " ") {
        j.preventDefault(), re(ge);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(j.key)) {
        j.preventDefault();
        const fe = (Ct.current + j.key).toLowerCase();
        Ct.current = fe, ae.current && clearTimeout(ae.current), ae.current = setTimeout(() => {
          Ct.current = "";
        }, 500);
        const H = [...X, ...X], pe = X.indexOf(ge) + 1, Re = H.slice(pe).find(
          (De) => ho(I[De]).toLowerCase().startsWith(fe)
        );
        Re != null && J(Re);
        return;
      }
      we >= 0 && J(we);
    },
    [I, Y, Ie, re]
  ), Mt = ie(null), bt = ie(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [rt.root, k].filter(Boolean).join(" "),
      "aria-label": O,
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
              children: E.length === 0 ? (
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
              ) : E.map((j, X) => {
                const ge = Pt(j, v), we = L.has(ge), fe = X === le, H = !!j.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleSourceKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": we,
                      "aria-disabled": H || void 0,
                      tabIndex: -1,
                      "data-active": fe || void 0,
                      className: [
                        rt.option,
                        we ? rt.selected : null,
                        fe ? rt.active : null,
                        H ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => gt(X),
                      children: ho(j)
                    },
                    ge
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
              "aria-disabled": E.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: E.filter((j) => !j.disabled).length === 0,
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
              "aria-disabled": E.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: E.filter((j) => !j.disabled).length === 0,
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
              "aria-disabled": I.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: I.filter((j) => !j.disabled).length === 0,
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
              children: I.length === 0 ? (
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
              ) : I.map((j, X) => {
                const ge = Pt(j, v), we = ee.has(ge), fe = X === Ie, H = !!j.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleTargetKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": we,
                      "aria-disabled": H || void 0,
                      tabIndex: -1,
                      "data-active": fe || void 0,
                      className: [
                        rt.option,
                        we ? rt.selected : null,
                        fe ? rt.active : null,
                        H ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => re(X),
                      children: ho(j)
                    },
                    ge
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
const Kk = "_root_1qxsp_1", Gk = "_header_1qxsp_8", Vk = "_title_1qxsp_15", Yk = "_navBtn_1qxsp_20", Xk = "_resources_1qxsp_39", Zk = "_resource_1qxsp_39", Jk = "_grid_1qxsp_50", Qk = "_timeCol_1qxsp_55", eN = "_timeCell_1qxsp_61", tN = "_dayCol_1qxsp_66", nN = "_dayHeader_1qxsp_73", rN = "_slot_1qxsp_81", oN = "_event_1qxsp_91", Yt = {
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
function fO({
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
  const [d, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), p = n ?? d, g = (_) => {
    n || f(_), r?.(_);
  }, h = t === "day" ? [p] : t === "week" ? Array.from({ length: 7 }, (_, x) => {
    const m = new Date(p);
    return m.setDate(p.getDate() - p.getDay() + x), m;
  }) : Array.from({ length: 30 }, (_, x) => {
    const m = new Date(p);
    return m.setDate(1 + x), m;
  }), b = Array.from({ length: 12 }, (_, x) => 8 + x);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Yt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ D("div", { className: Yt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Yt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const _ = new Date(p);
                _.setDate(_.getDate() - 7), g(_);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Yt.title, children: p.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Yt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const _ = new Date(p);
                _.setDate(_.getDate() + 7), g(_);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: Yt.resources, children: a.map((_) => /* @__PURE__ */ o("div", { className: Yt.resource, children: _.name }, _.id)) }),
        /* @__PURE__ */ D("div", { className: Yt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Yt.timeCol, role: "presentation", children: b.map((_) => /* @__PURE__ */ D("div", { className: Yt.timeCell, children: [
            _,
            ":00"
          ] }, _)) }),
          h.map((_) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- day-level create affordance for the pointer; hour slots refine it and event buttons inside are the keyboard path
            /* @__PURE__ */ D(
              "div",
              {
                className: Yt.dayCol,
                role: "group",
                title: _.toLocaleDateString(),
                onClick: () => c?.({ date: _ }),
                "aria-label": _.toLocaleDateString(),
                children: [
                  /* @__PURE__ */ o("div", { className: Yt.dayHeader, children: _.toLocaleDateString(void 0, {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  }) }),
                  b.map((x) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- hour slots refine the day-column click for the mouse; event buttons inside are native buttons
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: Yt.slot,
                        tabIndex: -1,
                        onClick: (m) => {
                          m.stopPropagation();
                          const u = new Date(_);
                          u.setHours(x), c?.({ date: u });
                        }
                      },
                      x
                    )
                  )),
                  e.filter((x) => x.start.toDateString() === _.toDateString()).map((x) => /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Yt.event,
                      "aria-label": `${x.title} ${va(x.start)} - ${va(x.end)}`,
                      "aria-pressed": !1,
                      onClick: () => i?.({ event: x }),
                      children: x.title
                    },
                    x.id
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
function pO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: a
}) {
  const [i, c] = q(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Mn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ D("div", { className: Mn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Mn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: Mn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ D(
          "div",
          {
            className: Mn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Mn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ D("div", { className: Mn.timelineCell, role: "gridcell", children: [
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
const hN = "_root_4b64f_1", mN = "_fields_4b64f_6", gN = "_chip_4b64f_13", yN = "_table_4b64f_35", bN = "_totalRow_4b64f_55", xN = "_total_4b64f_55", vr = {
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
function _O({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, f = (u, y, k) => {
    const v = u === "row" ? s.filter(($) => $.property !== y) : s, O = u === "col" ? l.filter(($) => $.property !== y) : l, w = u === "agg" ? d.filter(($) => !($.property === y && $.aggregate === k)) : d;
    a?.({
      rowFields: v,
      columnFields: O,
      aggregateFields: w
    });
  }, p = (u, y) => y.length === 0 ? "" : y.length === 1 ? String(u[y[0].property]) : y.map(
    (k) => String(u[k.property]).replace(/\\/g, "\\\\").split("").join("\\x01")
  ).join(""), g = [
    ...new Set(s.length ? e.map((u) => p(u, s)) : [""])
  ].sort(), h = [
    ...new Set(l.length ? e.map((u) => p(u, l)) : [""])
  ].sort(), b = (u, y) => e.filter(
    (k) => (u == null || p(k, s) === u) && (y == null || p(k, l) === y)
  ), _ = (u, y) => {
    if (y.aggregate === "Count") return u.length;
    const k = u.map((v) => Number(v[y.property])).filter((v) => !Number.isNaN(v));
    return k.length ? vN[y.aggregate](k) : 0;
  }, x = (u) => {
    const y = d.length > 1;
    return d.map((k) => {
      const v = wN(_(u, k));
      return y ? `${v} (${k.aggregate})` : v;
    }).join(", ");
  }, m = (u, y, k, v) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: vr.chip,
      "aria-label": `Remove ${u} field ${k}`,
      onClick: () => f(u, y, v),
      children: [
        k,
        v ? ` (${v})` : ""
      ]
    },
    `${u}-${k}-${v ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [vr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: vr.fields, children: [
      s.map((u) => m("row", u.property, u.title ?? u.property)),
      l.map((u) => m("col", u.property, u.title ?? u.property)),
      d.map(
        (u) => m("agg", u.property, u.title ?? u.property, u.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: vr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((u) => u.title ?? u.property).join(" / ") || "Total" }),
        h.map((u) => /* @__PURE__ */ o("th", { scope: "col", children: u || "—" }, u)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        g.map((u) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: u || "—" }),
          h.map((y) => /* @__PURE__ */ o(
            "td",
            {
              title: d.length ? x(b(u, y)) : void 0,
              children: d.length ? x(b(u, y)) : ""
            },
            y
          )),
          /* @__PURE__ */ o("td", { className: vr.total, children: d.length ? x(b(u)) : "" })
        ] }, u)),
        /* @__PURE__ */ D("tr", { className: vr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          h.map((u) => /* @__PURE__ */ o("td", { children: d.length ? x(b(void 0, u)) : "" }, u)),
          /* @__PURE__ */ o("td", { children: d.length ? x(e) : "" })
        ] })
      ] })
    ] })
  ] });
}
const kN = "_root_1r7co_1", NN = "_reverse_1r7co_10", SN = "_item_1r7co_14", $N = "_marker_1r7co_35", ON = "_body_1r7co_46", EN = "_label_1r7co_50", TN = "_content_1r7co_56", ar = {
  root: kN,
  reverse: NN,
  item: SN,
  marker: $N,
  body: ON,
  label: EN,
  content: TN
};
function hO({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const a = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [ar.root, t ? ar.reverse : "", r].filter(Boolean).join(" "),
      "aria-label": n,
      children: a.map((i, c) => /* @__PURE__ */ D("li", { className: ar.item, children: [
        /* @__PURE__ */ o("span", { className: ar.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: ar.body, children: [
          /* @__PURE__ */ o("div", { className: ar.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: ar.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const CN = "_root_rm4d8_1", MN = "_header_rm4d8_13", AN = "_headCell_rm4d8_22", DN = "_row_rm4d8_32", IN = "_cell_rm4d8_37", Wr = {
  root: CN,
  header: MN,
  headCell: AN,
  row: DN,
  cell: IN
};
function mO({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: a = [],
  ariaLabel: i = "Virtual grid",
  className: c
}) {
  const [s, l] = q(
    /* @__PURE__ */ new Map()
  ), [d, f] = q(0), p = ie(/* @__PURE__ */ new Set()), g = Math.ceil(n / t), h = Math.max(0, Math.floor(d / t) - 3), b = Math.min(e, h + g + 6), _ = U(
    (m, u) => {
      let y = !1;
      for (let k = m; k < u; k++)
        !s.has(k) && !p.current.has(k) && (y = !0);
      if (y) {
        for (let k = m; k < u; k++) p.current.add(k);
        r({ skip: m, top: u }).then((k) => {
          l((v) => {
            const O = new Map(v);
            return k.forEach((w, $) => O.set(m + $, w)), O;
          });
          for (let v = m; v < u; v++) p.current.delete(v);
        });
      }
    },
    [s, r]
  );
  Ne(() => {
    _(h, b);
  }, [h, b, _]);
  const x = [];
  for (let m = h; m < b; m++) {
    const u = s.get(m) ?? {};
    x.push(
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
              children: String(u[y.property] ?? "")
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
      onScroll: (m) => f(m.target.scrollTop),
      onKeyDown: (m) => {
        const u = m.currentTarget;
        m.key === "ArrowDown" ? (m.preventDefault(), u.scrollTop += t) : m.key === "ArrowUp" ? (m.preventDefault(), u.scrollTop -= t) : m.key === "PageDown" ? (m.preventDefault(), u.scrollTop += n) : m.key === "PageUp" && (m.preventDefault(), u.scrollTop -= n);
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
        x,
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
var Nn;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, l, d, f) {
      if (this.version = s, this.errorCorrectionLevel = l, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let p = [];
      for (let h = 0; h < this.size; h++) p.push(!1);
      for (let h = 0; h < this.size; h++)
        this.modules.push(p.slice()), this.isFunction.push(p.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(d);
      if (this.drawCodewords(g), f == -1) {
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
    static encodeSegments(s, l, d = 1, f = 40, p = -1, g = !0) {
      if (!(t.MIN_VERSION <= d && d <= f && f <= t.MAX_VERSION) || p < -1 || p > 7)
        throw new RangeError("Invalid value");
      let h, b;
      for (h = d; ; h++) {
        const u = t.getNumDataCodewords(h, l) * 8, y = i.getTotalBits(s, h);
        if (y <= u) {
          b = y;
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
        g && b <= t.getNumDataCodewords(h, u) * 8 && (l = u);
      let _ = [];
      for (const u of s) {
        n(u.mode.modeBits, 4, _), n(u.numChars, u.mode.numCharCountBits(h), _);
        for (const y of u.getData()) _.push(y);
      }
      a(_.length == b);
      const x = t.getNumDataCodewords(h, l) * 8;
      a(_.length <= x), n(0, Math.min(4, x - _.length), _), n(0, (8 - _.length % 8) % 8, _), a(_.length % 8 == 0);
      for (let u = 236; _.length < x; u ^= 253)
        n(u, 8, _);
      let m = [];
      for (; m.length * 8 < _.length; ) m.push(0);
      return _.forEach(
        (u, y) => m[y >>> 3] |= u << 7 - (y & 7)
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
        for (let f = 0; f < l; f++)
          d == 0 && f == 0 || d == 0 && f == l - 1 || d == l - 1 && f == 0 || this.drawAlignmentPattern(s[d], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const l = this.errorCorrectionLevel.formatBits << 3 | s;
      let d = l;
      for (let p = 0; p < 10; p++) d = d << 1 ^ (d >>> 9) * 1335;
      const f = (l << 10 | d) ^ 21522;
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
      for (let d = 0; d < 12; d++) s = s << 1 ^ (s >>> 11) * 7973;
      const l = this.version << 12 | s;
      a(l >>> 18 == 0);
      for (let d = 0; d < 18; d++) {
        const f = r(l, d), p = this.size - 11 + d % 3, g = Math.floor(d / 3);
        this.setFunctionModule(p, g, f), this.setFunctionModule(g, p, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let f = -4; f <= 4; f++) {
          const p = Math.max(Math.abs(f), Math.abs(d)), g = s + f, h = l + d;
          0 <= g && g < this.size && 0 <= h && h < this.size && this.setFunctionModule(g, h, p != 2 && p != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, l) {
      for (let d = -2; d <= 2; d++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            l + d,
            Math.max(Math.abs(f), Math.abs(d)) != 1
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
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], p = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], g = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), h = f - g % f, b = Math.floor(g / f);
      let _ = [];
      const x = t.reedSolomonComputeDivisor(p);
      for (let u = 0, y = 0; u < f; u++) {
        let k = s.slice(
          y,
          y + b - p + (u < h ? 0 : 1)
        );
        y += k.length;
        const v = t.reedSolomonComputeRemainder(k, x);
        u < h && k.push(0), _.push(k.concat(v));
      }
      let m = [];
      for (let u = 0; u < _[0].length; u++)
        _.forEach((y, k) => {
          (u != b - p || k >= h) && m.push(y[u]);
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
        for (let f = 0; f < this.size; f++)
          for (let p = 0; p < 2; p++) {
            const g = d - p, b = (d + 1 & 2) == 0 ? this.size - 1 - f : f;
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
          let f;
          switch (s) {
            case 0:
              f = (d + l) % 2 == 0;
              break;
            case 1:
              f = l % 2 == 0;
              break;
            case 2:
              f = d % 3 == 0;
              break;
            case 3:
              f = (d + l) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(d / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              f = d * l % 2 + d * l % 3 == 0;
              break;
            case 6:
              f = (d * l % 2 + d * l % 3) % 2 == 0;
              break;
            case 7:
              f = ((d + l) % 2 + d * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][d] && f && (this.modules[l][d] = !this.modules[l][d]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let p = 0; p < this.size; p++) {
        let g = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[p][_] == g ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, b), g || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), g = this.modules[p][_], h = 1);
        s += this.finderPenaltyTerminateAndCount(g, h, b) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size; p++) {
        let g = !1, h = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let _ = 0; _ < this.size; _++)
          this.modules[_][p] == g ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, b), g || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), g = this.modules[_][p], h = 1);
        s += this.finderPenaltyTerminateAndCount(g, h, b) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size - 1; p++)
        for (let g = 0; g < this.size - 1; g++) {
          const h = this.modules[p][g];
          h == this.modules[p][g + 1] && h == this.modules[p + 1][g] && h == this.modules[p + 1][g + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const p of this.modules)
        l = p.reduce((g, h) => g + (h ? 1 : 0), l);
      const d = this.size * this.size, f = Math.ceil(Math.abs(l * 20 - d * 10) / d) - 1;
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
        let d = [6];
        for (let f = this.size - 7; d.length < s; f -= l)
          d.splice(1, 0, f);
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
      for (let f = 0; f < s - 1; f++) l.push(0);
      l.push(1);
      let d = 1;
      for (let f = 0; f < s; f++) {
        for (let p = 0; p < l.length; p++)
          l[p] = t.reedSolomonMultiply(l[p], d), p + 1 < l.length && (l[p] ^= l[p + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let d = l.map((f) => 0);
      for (const f of s) {
        const p = f ^ d.shift();
        d.push(0), l.forEach(
          (g, h) => d[h] ^= t.reedSolomonMultiply(g, p)
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
      for (let f = 7; f >= 0; f--)
        d = d << 1 ^ (d >>> 7) * 285, d ^= (l >>> f & 1) * s;
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
        const f = Math.min(s.length - d, 3);
        n(parseInt(s.substring(d, d + f), 10), f * 3 + 1, l), d += f;
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
        let f = i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d + 1)), n(f, 11, l);
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
      for (const f of s) {
        const p = f.mode.numCharCountBits(l);
        if (f.numChars >= 1 << p) return 1 / 0;
        d += 4 + p + f.bitData.length;
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
})(Nn || (Nn = {}));
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
})(Nn || (Nn = {}));
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
})(Nn || (Nn = {}));
const zN = "_root_1leml_1", LN = {
  root: zN
}, PN = {
  low: Nn.QrCode.Ecc.LOW,
  medium: Nn.QrCode.Ecc.MEDIUM,
  quartile: Nn.QrCode.Ecc.QUARTILE,
  high: Nn.QrCode.Ecc.HIGH
};
function gO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = ie(null), f = Eo("(prefers-color-scheme: dark)"), [p, g] = q(
    () => document.documentElement.dataset.theme ?? null
  );
  Ne(() => {
    const k = document.documentElement, v = new MutationObserver(() => {
      g(k.dataset.theme ?? null);
    });
    return v.observe(k, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const h = Se(() => {
    try {
      return Nn.QrCode.encodeText(e, PN[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = ie(null);
  Ne(() => {
    if (h !== null) {
      b.current = null;
      return;
    }
    const k = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(k), (b.current?.value !== e || b.current?.onError !== s) && (b.current = { value: e, onError: s }, s?.(k));
  }, [h, e, s]);
  const _ = Math.max(0, Math.floor(a)), x = [LN.root, c].filter(Boolean).join(" ");
  if (Ne(() => {
    if (n !== "canvas" || h === null) return;
    const k = d.current, v = k?.getContext("2d");
    if (!k || !v) return;
    const O = getComputedStyle(k), w = O.getPropertyValue("--dx-text-color").trim() || "#000", $ = O.getPropertyValue("--dx-surface-color").trim() || "#fff";
    RN(v, h, t, _, w, $);
  }, [n, h, t, _, f, p]), h === null)
    return /* @__PURE__ */ o("div", { className: x, role: "img", "aria-label": l, "data-qr-error": "true" });
  const m = h.size + _ * 2, u = t / m;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: d,
        className: x,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const y = [];
  for (let k = 0; k < h.size; k++)
    for (let v = 0; v < h.size; v++)
      h.getModule(v, k) && y.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (v + _) * u,
            y: (k + _) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${v}-${k}`
        )
      );
  return /* @__PURE__ */ D(
    "svg",
    {
      className: x,
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
function yO({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: a,
  className: i
}) {
  const c = a ?? `Barcode ${e}`, s = Se(() => {
    const l = [];
    let d = 0;
    for (const f of HN(e)) {
      const p = ka[f] ?? ka[0];
      for (let g = 0; g < p.length; g++) {
        const h = Number(p[g]);
        g % 2 === 0 && l.push({ x: d, w: h }), d += h;
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
}, No = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Ja(e, t) {
  return e.color ?? No[t % No.length];
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
]), tS = /* @__PURE__ */ new Set([...Qa, "heatmap"]), nS = /* @__PURE__ */ new Set(["bar", "column", "area"]);
function rS(e) {
  const t = Math.pow(10, Math.floor(Math.log10(e))), n = e / t;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * t;
}
const oS = 100, sS = (e) => Math.max(1, Math.ceil(Math.abs(e) / oS));
function aS(e, t, n, r = 4) {
  const a = t - e || 1, i = n ?? rS(a / Math.max(1, r)), c = Math.floor(e / i) * i, s = Math.ceil(t / i) * i, l = Math.round((s - c) / i), d = [];
  for (let f = 0; f <= l; f++)
    d.push(Number((c + f * i).toFixed(6)));
  return { min: c, max: s, step: i, ticks: d };
}
function So(e) {
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
function Jt(e, t, n) {
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
function To(e, t, n, r, a) {
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
function Bt(e, t) {
  return e.percent ? `${e.fmt(t)}%` : e.fmt(t);
}
const lS = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function iS(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && lS.has(a.type)) return a;
  }
  return null;
}
function cS(e, t, n, r) {
  const a = iS(e, t, n);
  if (!a) return null;
  const i = So(a).filter((f) => !Number.isNaN(f.val));
  if (i.length === 0) return null;
  const c = i.map((f) => f.cat);
  let s;
  if (t.type === "trendline") {
    const f = i.length, p = i.map((u, y) => y), g = i.map((u) => u.val), h = p.reduce((u, y) => u + y, 0) / f, b = g.reduce((u, y) => u + y, 0) / f;
    let _ = 0, x = 0;
    for (let u = 0; u < f; u++)
      _ += (p[u] - h) * (g[u] - b), x += (p[u] - h) * (p[u] - h);
    const m = x === 0 ? 0 : _ / x;
    s = c.map((u, y) => ({
      cat: u,
      val: b + m * (y - h)
    }));
  } else {
    const f = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((p, g) => {
      if (g + 1 < f) return null;
      const h = i.slice(g + 1 - f, g + 1);
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
  }, d = So(l).map((f) => ({
    ...f,
    item: f.item.__item ?? f.item
  }));
  return tl(e, l, n, d, r);
}
function dS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((p, g) => [p, g])), s = n.map((p) => {
    const g = c.get(p.cat) ?? 0, h = p.min, b = p.max;
    return typeof h != "number" || Number.isNaN(h) || typeof b != "number" || Number.isNaN(b) ? null : { x: r(g), lo: a(h), hi: a(b) };
  });
  if (s.some((p) => p == null)) return null;
  const l = s.map((p) => `L ${p.x} ${p.hi}`).join(" "), d = [...s].reverse().map((p) => `L ${p.x} ${p.lo}`).join(" "), f = s[0];
  return /* @__PURE__ */ o(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${l} ${d} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function uS(e, t, n, r) {
  const { pad: a, plotW: i, plotH: c } = e, s = a.l + i / 2, l = a.t + c / 2, d = Math.min(i, c) / 3, f = t.type === "donut" ? t.innerRadius ?? d * 0.5 : 0, p = r.reduce((h, b) => h + (Number(b.val) || 0), 0);
  let g = -90;
  return Jt(
    n,
    t,
    r.map((h, b) => {
      const _ = p ? h.val / p * 360 : 0, x = g, m = g + _;
      g = m;
      const u = _ > 180 ? 1 : 0, y = s + d * Math.cos(Wt(x)), k = l + d * Math.sin(Wt(x)), v = s + d * Math.cos(Wt(m)), O = l + d * Math.sin(Wt(m)), w = s + f * Math.cos(Wt(m)), $ = l + f * Math.sin(Wt(m)), E = s + f * Math.cos(Wt(x)), P = l + f * Math.sin(Wt(x)), I = f ? `M ${y} ${k} A ${d} ${d} 0 ${u} 1 ${v} ${O} L ${w} ${$} A ${f} ${f} 0 ${u} 0 ${E} ${P} Z` : `M ${s} ${l} L ${y} ${k} A ${d} ${d} 0 ${u} 1 ${v} ${O} Z`, z = (x + m) / 2, M = s + (d + 12) * Math.cos(Wt(z)), N = l + (d + 12) * Math.sin(Wt(z)), S = Ja(t, b);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: I,
            fill: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              M,
              N,
              `${t.title ?? h.cat}: ${Bt(e, h.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: M,
            y: N,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Bt(e, h.val)
          }
        )
      ] }, b);
    })
  );
}
function fS(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: f } = e, p = new Map(f.map((g, h) => [g, h]));
  return Jt(
    n,
    t,
    r.map((g, h) => {
      const b = p.get(g.cat) ?? 0, _ = Number(r[h].cat), x = Number.isNaN(_) ? l(b) : i.l + (_ - s.min) / (s.max - s.min || 1) * c, m = d(g.val), u = t.type === "bubble" && g.size !== void 0 ? Math.max(4, Math.min(12, g.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        To(x, m, a, t, u),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: x,
            cy: m,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(x, m, `${t.title ?? g.cat}: ${Bt(e, g.val)}`),
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
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, f = new Map(l.map((b, _) => [b, _])), p = (b) => {
    if (!t.stack) return i.min;
    let _ = 0;
    for (let x = 0; x < n; x++) {
      const m = d[x];
      if (m?.stack !== t.stack) continue;
      const u = m.data.find(
        (y) => String(y[m.categoryProperty] ?? "") === b
      );
      u && (_ += Number(u[m.valueProperty]) || 0);
    }
    return _;
  }, g = r.map((b, _) => {
    const x = f.get(b.cat) ?? 0, m = p(b.cat);
    return `${_ === 0 ? "M" : "L"} ${c(x)} ${s(m + b.val)}`;
  }).join(" "), h = r.map((b, _) => {
    const x = f.get(b.cat) ?? 0, m = p(b.cat);
    return `${_ === 0 ? "M" : "L"} ${c(x)} ${s(m)}`;
  }).join(" ");
  return Jt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${g} L ${c(r.length - 1)} ${s(p(r[r.length - 1].cat))} L ${c(0)} ${s(p(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      dS(e, t, r),
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
        const x = f.get(b.cat) ?? 0, m = p(b.cat), u = c(x), y = s(m + b.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          To(u, y, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: u - 12,
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                u,
                y,
                `${t.title ?? b.cat}: ${Bt(e, b.val)}`
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
              y: y - 8,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Bt(e, b.val)
            }
          )
        ] }, _);
      })
    ] })
  );
}
function pS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: f, categories: p, series: g } = e, h = new Map(p.map((_, x) => [_, x])), b = t.type === "bar";
  return Jt(
    n,
    t,
    r.map((_, x) => {
      const m = h.get(_.cat) ?? 0;
      let u = 0;
      if (t.stack)
        for (let R = 0; R < n; R++) {
          const C = g[R];
          if (C?.stack !== t.stack) continue;
          const A = C.data.find(
            (L) => String(L[C.categoryProperty] ?? "") === _.cat
          );
          A && (u += Number(A[C.valueProperty]) || 0);
        }
      const y = u + _.val, k = typeof _.min == "number" && !Number.isNaN(_.min) && typeof _.max == "number" && !Number.isNaN(_.max), v = g.filter(
        (R) => !R.stack || R.stack === t.stack
      ).length, O = c / Math.max(1, p.length), w = b ? 18 : Math.max(12, O / (t.stack ? 1 : v)), $ = Math.max(1, w - 4), E = t.stack ? 1 : v, P = b ? i.l + u / (l.max - l.min || 1) * c : (
        // Grouped columns are centred as a block in the band: anchoring on the
        // first bar's left edge pushed the whole group right of its category.
        d(m) - E * w / 2 + n % E * w + (w - $) / 2
      ), I = b ? i.t + m * s / Math.max(1, p.length) + 4 : f(k ? u + _.max : y), z = b ? k ? (_.max - _.min) / (l.max - l.min || 1) * c : _.val / (l.max - l.min || 1) * c : $, M = b ? 16 : k ? f(u + _.min) - f(u + _.max) : f(u) - f(y), N = b ? i.l + (u + (k ? _.min : 0)) / (l.max - l.min || 1) * c : P, S = b ? i.t + m * s / Math.max(1, p.length) + 4 : I;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: N,
            y: S,
            width: z,
            height: M,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              N + z / 2,
              S,
              `${t.title ?? _.cat}: ${Bt(e, _.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: N + z / 2,
            y: S - 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Bt(e, _.val)
          }
        )
      ] }, x);
    })
  );
}
function _S(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: f, hideTip: p } = e, g = i.l + c / 2, h = i.t + s * 0.78, b = Math.min(c, s) * 0.36, _ = 135, x = 270, m = r.reduce((O, w) => O + (Number(w.val) || 0), 0), u = l.max - l.min || 1, y = Math.min(1, Math.max(0, (m - l.min) / u)), k = (O, w) => {
    const [$, E] = [
      g + b * Math.cos(Wt(O)),
      h + b * Math.sin(Wt(O))
    ], [P, I] = [
      g + b * Math.cos(Wt(w)),
      h + b * Math.sin(Wt(w))
    ], z = w - O > 180 ? 1 : 0;
    return `M ${$} ${E} A ${b} ${b} 0 ${z} 1 ${P} ${I}`;
  }, v = Number(m.toFixed(2));
  return Jt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: k(_, _ + x),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: k(_, _ + x * y),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: g, y: h - 4, textAnchor: "middle", className: Ze.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: k(_, _ + x),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && f(g, h - b, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => p(),
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
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (p) => Wt(-90 + 360 * p / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (p, g) => {
    const h = d(p);
    return [
      i + s * g * Math.cos(h),
      c + s * g * Math.sin(h)
    ];
  } };
}
function hS(e) {
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
function mS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: f, radius: p, angleFor: g, vertexFor: h } = _s(e), b = e.scale.max || 1, _ = (m) => r.find((u) => u.cat === m)?.val ?? 0, x = i.map((m, u) => {
    const y = Math.min(1, Math.max(0, _(m) / b)), [k, v] = h(u, y);
    return `${k},${v}`;
  }).join(" ");
  return Jt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: x,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: 2
        }
      ),
      i.map((m, u) => {
        const y = Math.min(1, Math.max(0, _(m) / b)), [k, v] = h(u, y), [O, w] = h(u, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: k,
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
              cx: k,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(O, w, `${t.title ?? m}: ${_(m)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const $ = r.find((E) => E.cat === m);
                $ && e.handleClick(t, $.cat, $.val, $.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (p + 14) * Math.cos(g(u)),
              y: f + (p + 14) * Math.sin(g(u)) + 4,
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
function gS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = r, g = Math.max(1, ...p.map((_) => Number(_.val) || 0)), h = s / Math.max(1, p.length), b = i.l + c / 2;
  return Jt(
    n,
    t,
    p.map((_, x) => {
      const u = Math.max(0, Number(_.val) || 0) / g * c, y = p[x + 1], k = y ? Math.max(0, Number(y.val) || 0) / g * c : u * 0.7, v = i.t + x * h + 2, O = Math.max(4, h - 6), w = 1 - x * (0.45 / Math.max(1, p.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - u / 2} ${v} L ${b + u / 2} ${v} L ${b + k / 2} ${v + O} L ${b - k / 2} ${v + O} Z`,
            fill: a,
            fillOpacity: w,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(b, v, `${t.title ?? _.cat}: ${Bt(e, _.val)}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: b,
            y: v + O / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              _.cat,
              " · ",
              Bt(e, _.val)
            ]
          }
        )
      ] }, x);
    })
  );
}
function yS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: f, hideTip: p } = e, g = [];
  t.data.forEach((y) => {
    const k = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    g.includes(k) || g.push(k);
  });
  const h = r.map((y) => y.val).filter((y) => Number.isFinite(y)), b = h.length ? Math.min(...h) : 0, _ = h.length ? Math.max(...h) : 1, x = c / Math.max(1, l.length), m = s / Math.max(1, g.length), u = (y) => Number.isFinite(y) ? _ === b ? 0.6 : 0.15 + 0.85 * ((y - b) / (_ - b)) : 0.06;
  return Jt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      g.map((y, k) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + k * m + m / 2 + 4,
          textAnchor: "end",
          className: Ze.tickLabel,
          children: y
        },
        y
      )),
      r.map((y, k) => {
        const v = t.data[k], O = l.indexOf(y.cat), w = g.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (O < 0 || w < 0) return null;
        const $ = i.l + O * x, E = i.t + w * m;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: $ + 1,
              y: E + 1,
              width: Math.max(1, x - 2),
              height: Math.max(1, m - 2),
              fill: a,
              fillOpacity: u(y.val),
              onMouseEnter: () => d && f(
                $ + x / 2,
                E,
                `${t.title ?? y.cat}: ${Bt(e, y.val)}`
              ),
              onMouseLeave: () => p(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && Number.isFinite(y.val) && /* @__PURE__ */ o(
            "text",
            {
              x: $ + x / 2,
              y: E + m / 2 + 4,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Bt(e, y.val)
            }
          )
        ] }, k);
      })
    ] })
  );
}
function bS(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((h, b) => [h, b])), d = e.plotW / Math.max(1, s.length), f = Math.max(8, Math.min(28, d / 2 - 4)), p = t.upColor ?? a, g = t.downColor ?? "var(--dx-danger-color)";
  return Jt(
    n,
    t,
    r.map((h, b) => {
      const _ = l.get(h.cat) ?? 0, x = i(_), m = h.close ?? h.val, u = typeof h.open == "number" && !Number.isNaN(h.open) && typeof h.high == "number" && !Number.isNaN(h.high) && typeof h.low == "number" && !Number.isNaN(h.low) && typeof m == "number" && !Number.isNaN(m), y = u && m >= h.open, k = `${t.title ?? h.cat}: O ${h.open ?? "–"} H ${h.high ?? "–"} L ${h.low ?? "–"} C ${m}`;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        u && t.type === "candlestick" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: x,
              y1: c(h.high),
              x2: x,
              y2: c(h.low),
              stroke: y ? p : g,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: x - f / 2,
              y: c(Math.max(h.open, m)),
              width: f,
              height: Math.max(
                2,
                c(Math.min(h.open, m)) - c(Math.max(h.open, m))
              ),
              fill: y ? p : "none",
              stroke: y ? p : g,
              strokeWidth: 1.5
            }
          )
        ] }),
        u && t.type === "ohlc" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: x,
              y1: c(h.high),
              x2: x,
              y2: c(h.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: x - f / 2,
              y1: c(h.open),
              x2: x,
              y2: c(h.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: x,
              y1: c(m),
              x2: x + f / 2,
              y2: c(m),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        u && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: x,
            y1: c(h.high),
            x2: x,
            y2: c(h.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !u && To(x, c(m), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: x - 14,
            y: c(m) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(x, c(m), k),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, m, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x,
            y: c(m) - 8,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Bt(e, m)
          }
        )
      ] }, b);
    })
  );
}
function xS(e, t, n, r, a) {
  const i = e.reduce((b, _) => b + Math.max(0, _.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((b, _) => ({ ...b, i: _ }));
  let d = t, f = n, p = r, g = a;
  const h = (b, _) => {
    const x = b.reduce((y, k) => y + Math.max(0, k.val), 0) * c;
    if (x <= 0) return Number.POSITIVE_INFINITY;
    const m = Math.max(...b.map((y) => Math.max(0, y.val))) * c, u = Math.min(...b.map((y) => Math.max(0, y.val))) * c;
    return Math.max(
      _ * _ * m / (x * x),
      x * x / (_ * _ * (u || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const b = Math.min(p, g), _ = [];
    let x = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const u = [..._, l[0]], y = h(u, b);
      if (y <= x)
        x = y, _.push(l.shift());
      else break;
    }
    _.length === 0 && _.push(l.shift());
    const m = _.reduce((u, y) => u + Math.max(0, y.val), 0) * c;
    if (p >= g) {
      const u = m / g;
      let y = f;
      for (const k of _) {
        const v = Math.max(0, k.val) * c / u;
        s[k.i] = { x: d, y, w: u, h: v }, y += v;
      }
      d += u, p -= u;
    } else {
      const u = m / p;
      let y = d;
      for (const k of _) {
        const v = Math.max(0, k.val) * c / u;
        s[k.i] = { x: y, y: f, w: v, h: u }, y += v;
      }
      f += u, g -= u;
    }
  }
  return s;
}
function nl(e, t, n, r, a, i, c, s, l, d, f) {
  const p = e.colorFor, g = s.map((_) => ({
    cat: String(_[t.categoryProperty] ?? ""),
    val: Number(_[t.valueProperty]),
    item: _
  })), h = xS(g, r, a, i, c), b = t.childrenProperty ?? "children";
  g.forEach((_, x) => {
    const m = h[x], u = s[x]?.[b], y = Array.isArray(u) ? u : [];
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
        f
      );
      return;
    }
    const k = d.n++;
    f.push({
      ..._,
      color: p(n + k, t),
      x: m.x,
      y: m.y,
      w: m.w,
      h: m.h
    });
  });
}
function vS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = { n: 0 }, g = [];
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
    p,
    g
  ), Jt(
    n,
    t,
    g.map(
      (h, b) => (
        // A zero or negative leaf still carries a stroke, so it painted as a
        // full-height line at the right edge of the grid rather than nothing.
        h.w < 1 || h.h < 1 ? null : /* @__PURE__ */ D("g", { role: "listitem", children: [
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
                `${t.title ?? h.cat}: ${Bt(e, h.val)}`
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
        ] }, b)
      )
    )
  );
}
function wS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = r, g = (x) => Number.isFinite(x) ? Math.max(0, x) : 0, h = Math.max(1, ...p.map((x) => g(x.val))), b = s / Math.max(1, p.length), _ = i.l + c / 2;
  return Jt(
    n,
    t,
    p.map((x, m) => {
      const u = g(x.val), y = u / h * c, k = p[m + 1], v = k ? g(k.val) / h * c : y, O = i.t + m * b + 2, w = Math.max(4, b - 6);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${_ - y / 2} ${O} L ${_ + y / 2} ${O} L ${_ + v / 2} ${O + w} L ${_ - v / 2} ${O + w} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(_, O, `${t.title ?? x.cat}: ${Bt(e, u)}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: _,
            y: O + w / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              x.cat,
              " · ",
              Bt(e, u)
            ]
          }
        )
      ] }, m);
    })
  );
}
function kS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: f } = _s(e), p = (b) => {
    let _ = 0;
    for (const x of d)
      if (x.type === "spider") {
        for (const m of x.data)
          if (String(m[x.categoryProperty] ?? "") === b) {
            const u = Number(m[x.valueProperty]);
            Number.isNaN(u) || (_ = Math.max(_, u));
          }
      }
    return _ || 1;
  }, g = (b) => r.find((_) => _.cat === b)?.val ?? 0, h = i.map((b, _) => {
    const x = Math.min(1, Math.max(0, g(b) / p(b))), [m, u] = f(_, x);
    return `${m},${u}`;
  }).join(" ");
  return Jt(
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
          strokeDasharray: el(t.dash)
        }
      ),
      i.map((b, _) => {
        const x = Math.min(1, Math.max(0, g(b) / p(b))), [m, u] = f(_, x), [y, k] = f(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          To(m, u, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: m,
              cy: u,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(y, k, `${t.title ?? b}: ${g(b)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const v = r.find((O) => O.cat === b);
                v && e.handleClick(t, v.cat, v.val, v.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: y,
              y: k + 16,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Bt(e, g(b))
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: y,
              y: k + 4,
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
function NS(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, c = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((N) => ({
    source: String(N[c] ?? ""),
    target: String(N[s] ?? ""),
    value: Number(N[t.valueProperty]),
    item: N
  })).filter(
    (N) => N.source && N.target && N.source !== N.target && N.value > 0
  ), d = [];
  for (const N of l)
    d.includes(N.source) || d.push(N.source), d.includes(N.target) || d.push(N.target);
  const f = /* @__PURE__ */ new Map();
  for (const N of l)
    f.has(N.target) || f.set(N.target, []), f.get(N.target).push(N.source);
  const p = /* @__PURE__ */ new Map(), g = (N, S) => {
    if (p.has(N)) return p.get(N);
    if (S.has(N)) return 0;
    S.add(N);
    const R = f.get(N) ?? [], C = R.length === 0 ? 0 : 1 + Math.max(...R.map((A) => g(A, S)));
    return S.delete(N), p.set(N, C), C;
  }, h = /* @__PURE__ */ new Map();
  for (const N of d) h.set(N, g(N, /* @__PURE__ */ new Set()));
  const b = Math.max(0, ...h.values()), _ = Math.max(
    12,
    Math.min(28, a / Math.max(1, (b + 1) * 8))
  ), x = 10, m = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const N of l)
    u.set(N.source, (u.get(N.source) ?? 0) + N.value), m.set(N.target, (m.get(N.target) ?? 0) + N.value);
  const y = (N) => Math.max(m.get(N) ?? 0, u.get(N) ?? 0), k = /* @__PURE__ */ new Map();
  for (const N of d) {
    const S = h.get(N);
    k.set(S, (k.get(S) ?? 0) + y(N));
  }
  const v = Math.max(1, ...k.values()), O = (i - x * Math.max(0, d.length - 1)) / v, w = (N) => b === 0 ? r.l : r.l + N / b * (a - _), $ = [], E = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
  for (const N of d) {
    const S = h.get(N);
    P.has(S) || P.set(S, []), P.get(S).push(N);
  }
  for (const [N, S] of [...P.entries()].sort(
    (R, C) => R[0] - C[0]
  )) {
    let R = r.t;
    for (const C of S) {
      const A = Math.max(4, y(C) * O), L = {
        id: C,
        depth: N,
        total: y(C),
        x: w(N),
        w: _,
        y: R,
        h: A,
        color: e.colorFor(n + $.length, t)
      };
      $.push(L), E.set(C, L), R += A + x;
    }
  }
  const I = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), M = [];
  for (const N of l) {
    const S = E.get(N.source), R = E.get(N.target), C = Math.max(1, N.value * O), A = S.y + (I.get(N.source) ?? 0), L = R.y + (z.get(N.target) ?? 0);
    I.set(N.source, (I.get(N.source) ?? 0) + C), z.set(N.target, (z.get(N.target) ?? 0) + C), M.push({ source: S, target: R, value: N.value, y0: A, y1: L, h: C });
  }
  return { nodes: $, links: M };
}
function SS(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function $S(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: c, hideTip: s } = e, { nodes: l, links: d } = NS(e, t, n);
  return Jt(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      d.map((f, p) => /* @__PURE__ */ o(
        "path",
        {
          d: SS(f),
          fill: f.source.color,
          fillOpacity: 0.45,
          stroke: "none",
          onMouseEnter: () => i && c(
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
      l.map((f) => /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: f.x,
            y: f.y,
            width: f.w,
            height: f.h,
            fill: f.color,
            onMouseEnter: () => i && c(f.x + f.w / 2, f.y, `${f.id}: ${f.total}`),
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
function OS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = r.map((P) => ({ x: Number(P.cat), y: P.val })).filter((P) => !Number.isNaN(P.x) && !Number.isNaN(P.y));
  if (p.length === 0) return null;
  let g = Math.min(...p.map((P) => P.x)), h = Math.max(...p.map((P) => P.x)), b = Math.min(...p.map((P) => P.y)), _ = Math.max(...p.map((P) => P.y));
  g === h && (g -= 0.5, h += 0.5), b === _ && (b -= 0.5, _ += 0.5);
  const x = Math.max(4, Math.floor(t.resolution ?? 28)), m = Array.from(
    { length: x + 1 },
    () => Array.from({ length: x + 1 }, () => 0)
  );
  for (const P of p) {
    const I = Math.max(
      0,
      Math.min(x, Math.round((P.x - g) / (h - g) * x))
    ), z = Math.max(
      0,
      Math.min(x, Math.round((P.y - b) / (_ - b) * x))
    );
    m[z][I] += 1;
  }
  let u = 0;
  for (const P of m) for (const I of P) u = Math.max(u, I);
  if (u <= 0) return null;
  const y = Math.max(1, Math.floor(t.levels ?? 5)), k = Array.from(
    { length: y },
    (P, I) => u * (I + 1) / (y + 1)
  ), v = c / x, O = s / x, w = i.l, $ = i.t, E = (P) => {
    const I = [], z = (N, S) => m[S]?.[N] ?? 0, M = (N, S, R, C) => C === R ? (N + S) / 2 : N + (P - R) / (C - R) * (S - N);
    for (let N = 0; N < x; N++)
      for (let S = 0; S < x; S++) {
        const R = z(S, N), C = z(S + 1, N), A = z(S, N + 1), L = z(S + 1, N + 1), F = w + S * v, ee = $ + N * O, ne = M(F, F + v, R, C), le = M(F, F + v, A, L), Q = M(ee, ee + O, R, A), Ie = M(ee, ee + O, C, L), J = (R >= P ? 8 : 0) | (C >= P ? 4 : 0) | (L >= P ? 2 : 0) | (A >= P ? 1 : 0), V = [ne, ee], Y = [le, ee + O], he = [F, Q], te = [F + v, Ie], me = (K, $e) => {
          I.push([K[0], K[1], $e[0], $e[1]]);
        };
        switch (J) {
          case 1:
          case 14:
            me(he, Y);
            break;
          case 2:
          case 13:
            me(Y, te);
            break;
          case 3:
          case 12:
            me(he, te);
            break;
          case 4:
          case 11:
            me(V, te);
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
            (R + C + A + L) / 4 >= P ? (me(V, he), me(Y, te)) : (me(V, te), me(he, Y));
            break;
          }
          case 10: {
            (R + C + A + L) / 4 >= P ? (me(V, te), me(he, Y)) : (me(V, he), me(Y, te));
            break;
          }
        }
      }
    return I;
  };
  return Jt(
    n,
    t,
    k.map((P, I) => {
      const z = E(P);
      if (z.length === 0) return null;
      const M = z.map(([S, R, C, A]) => `M ${S} ${R} L ${C} ${A}`).join(" "), N = e.colorFor(n + I, t);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o("path", { d: M, fill: "none", stroke: N, strokeWidth: 1.5 }),
        /* @__PURE__ */ o(
          "path",
          {
            d: M,
            fill: "none",
            stroke: "transparent",
            strokeWidth: 12,
            onMouseEnter: () => l && d(
              w + c / 2,
              $ + 8,
              `${t.title ?? "Density"} ≥ ${Math.round(P * 100) / 100}`
            ),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, `level ${I + 1}`, P, { threshold: P }),
            style: { cursor: "pointer" }
          }
        )
      ] }, I);
    })
  );
}
function ES(e, t, n) {
  const r = So(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return uS(e, t, n, r);
    case "scatter":
    case "bubble":
      return fS(e, t, n, r, a);
    case "line":
    case "area":
      return tl(e, t, n, r, a);
    case "gauge":
      return _S(e, t, n, r, a);
    case "radar":
      return mS(e, t, n, r, a);
    case "funnel":
      return gS(e, t, n, r, a);
    case "heatmap":
      return yS(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return bS(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return cS(e, t, n, a);
    case "treemap":
      return vS(e, t, n);
    case "pyramid":
      return wS(e, t, n, r, a);
    case "spider":
      return kS(e, t, n, r, a);
    case "sankey":
      return $S(e, t, n);
    case "contour":
      return OS(e, t, n, r);
    default:
      return pS(e, t, n, r, a);
  }
}
function bO({
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
  className: f
}) {
  const [p, g] = q(
    null
  ), h = Se(() => {
    const C = /* @__PURE__ */ new Set();
    for (const A of e)
      for (const L of A.data) C.add(String(L[A.categoryProperty] ?? ""));
    return [...C];
  }, [e]), b = Se(() => {
    if (!c) return e;
    const C = /* @__PURE__ */ new Map();
    for (const A of e)
      if (A.stack)
        for (const L of A.data) {
          const F = `${A.stack}\0${String(L[A.categoryProperty] ?? "")}`, ee = Number(L[A.valueProperty]);
          Number.isNaN(ee) || C.set(F, (C.get(F) ?? 0) + ee);
        }
    return e.map((A) => A.stack ? {
      ...A,
      data: A.data.map((L) => {
        const F = `${A.stack}\0${String(L[A.categoryProperty] ?? "")}`, ee = C.get(F) ?? 0, ne = Number(L[A.valueProperty]);
        return {
          ...L,
          [A.valueProperty]: ee > 0 && !Number.isNaN(ne) ? ne / ee * 100 : 0
        };
      })
    } : A);
  }, [e, c]), _ = Se(() => {
    const C = b.flatMap(
      (L) => L.data.flatMap((F) => [
        Number(F[L.valueProperty]),
        ...L.openProperty ? [Number(F[L.openProperty])] : [],
        ...L.highProperty ? [Number(F[L.highProperty])] : [],
        ...L.lowProperty ? [Number(F[L.lowProperty])] : [],
        ...L.closeProperty ? [Number(F[L.closeProperty])] : [],
        // A range series is drawn between min and max, so both ends belong to
        // the domain — Radzen merges them (`RadzenRangeColumnSeries.razor.cs`).
        ...L.minProperty ? [Number(F[L.minProperty])] : [],
        ...L.maxProperty ? [Number(F[L.maxProperty])] : []
      ])
    ).filter((L) => !Number.isNaN(L)), A = /* @__PURE__ */ new Map();
    for (const L of b) {
      if (!L.stack) continue;
      let F = A.get(L.stack);
      F || A.set(L.stack, F = /* @__PURE__ */ new Map());
      for (const ee of L.data) {
        const ne = String(ee[L.categoryProperty] ?? ""), le = Number(ee[L.valueProperty]);
        Number.isNaN(le) || F.set(ne, (F.get(ne) ?? 0) + le);
      }
    }
    for (const L of A.values()) C.push(...L.values());
    return C;
  }, [b]), x = { t: 16, r: 16, b: 40, l: 56 }, m = t - x.l - x.r, u = n - x.t - x.b, y = b.some((C) => C.stack ? !0 : C.minProperty && C.maxProperty ? !1 : nS.has(C.type)), k = r?.min ?? (_.length ? y ? Math.min(0, ..._) : Math.min(..._) : 0), v = r?.max ?? (_.length ? Math.max(..._) : 10), O = Se(
    () => aS(k, v, r?.step, sS(u)),
    [k, v, r?.step, u]
  ), w = m / Math.max(1, h.length), $ = (C) => x.l + (C + 0.5) * w, E = (C) => x.t + (1 - (C - O.min) / (O.max - O.min || 1)) * u, P = (C, A) => A.color ?? No[C % No.length], I = r?.format ?? bo, z = a?.format ?? ((C) => C), M = e.flatMap(
    (C, A) => C.type === "pie" || C.type === "donut" ? So(C).map((L, F) => ({
      key: `${A}-${F}`,
      label: L.cat,
      color: Ja(C, F)
    })) : [
      {
        key: `${A}`,
        label: C.title ?? `Series ${A + 1}`,
        color: P(A, C)
      }
    ]
  ), N = e.some((C) => Qa.has(C.type)), S = e.some((C) => tS.has(C.type)), R = {
    categories: h,
    scale: O,
    pad: x,
    plotW: m,
    plotH: u,
    xFor: $,
    yFor: E,
    fmt: I,
    colorFor: P,
    tooltipVisible: s,
    percent: c,
    showTip: (C, A, L) => g({ x: C, y: A, text: L }),
    hideTip: () => g(null),
    handleClick: (C, A, L, F) => l?.({
      seriesTitle: C.title ?? "",
      category: A,
      value: L,
      item: F
    }),
    series: b
  };
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [Ze.root, f].filter(Boolean).join(" "),
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
              N && r?.gridlines !== !1 && O.ticks.map((C) => /* @__PURE__ */ o(
                "line",
                {
                  x1: x.l,
                  x2: x.l + m,
                  y1: E(C),
                  y2: E(C),
                  className: Ze.gridline
                },
                C
              )),
              S && a?.gridlines && h.map((C, A) => /* @__PURE__ */ o(
                "line",
                {
                  x1: $(A),
                  x2: $(A),
                  y1: x.t,
                  y2: x.t + u,
                  className: Ze.gridline
                },
                A
              )),
              N && O.ticks.map((C) => /* @__PURE__ */ o(
                "text",
                {
                  x: x.l - 8,
                  y: E(C) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: c ? `${I(C)}%` : I(C)
                },
                C
              )),
              S && h.map((C, A) => /* @__PURE__ */ o(
                "text",
                {
                  x: $(A),
                  y: x.t + u + 16,
                  textAnchor: "middle",
                  className: Ze.tickLabel,
                  children: z(C)
                },
                C
              )),
              N && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: x.t + u / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${x.t + u / 2})`,
                  className: Ze.axisTitle,
                  children: r.title
                }
              ),
              S && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: x.l + m / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Ze.axisTitle,
                  children: a.title
                }
              ),
              (e.some((C) => C.type === "radar") || e.some((C) => C.type === "spider")) && hS(R),
              b.map((C, A) => ES(R, C, A))
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
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: M.map((C) => /* @__PURE__ */ D("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: C.color },
              "aria-hidden": "true"
            }
          ),
          C.label
        ] }, C.key)) }),
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
                (C) => C.data.map((A, L) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ o("td", { children: C.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: C.rowProperty ? `${String(A[C.rowProperty] ?? "")} / ${String(A[C.categoryProperty] ?? "")}` : String(A[C.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(A[C.valueProperty] ?? "") })
                ] }, `${C.title}-${L}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function xO({ query: e, children: t }) {
  return Eo(e) ? /* @__PURE__ */ o(ot, { children: t }) : null;
}
function vO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function wO() {
  const e = ie(null);
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
  }, []), U((t) => {
    const n = e.current;
    n && (n.textContent = t);
  }, []);
}
export {
  d$ as AIChat,
  h_ as ALERT_ICON,
  A$ as Accordion,
  m$ as Alert,
  l$ as ArcGauge,
  z$ as AutoComplete,
  v$ as AutoGrid,
  C$ as Avatar,
  AS as Badge,
  yO as Barcode,
  k$ as Body,
  oO as Breadcrumb,
  dn as Button,
  MS as Card,
  cO as Carousel,
  bO as Chart,
  iu as CheckBox,
  P$ as CheckBoxList,
  U$ as ColorPicker,
  b$ as Column,
  Q$ as ContextMenuProvider,
  Ar as DEFAULT_OPERATOR_BY_TYPE,
  yv as DEFAULT_PALETTE,
  XS as DataFilter,
  ZS as DataGrid,
  JS as DataList,
  q$ as DatePicker,
  Ma as Dialog,
  r$ as DialogProvider,
  I$ as DropDown,
  Z$ as DropZone,
  LS as EmptyState,
  Oa as FILTER_OPERATORS,
  rO as FabMenu,
  cr as Field,
  RS as Fieldset,
  o0 as Footer,
  jS as Form,
  PS as FormField,
  pO as Gantt,
  l0 as Header,
  p$ as HtmlEditor,
  Ee as Icon,
  no as Input,
  QS as Label,
  w$ as Layout,
  c$ as LinearGauge,
  sO as Link,
  L$ as ListBox,
  vO as LiveRegion,
  u$ as Login,
  f$ as Markdown,
  F$ as Mask,
  xO as MediaQuery,
  Ow as Menu,
  Ya as MenuItem,
  H$ as Numeric,
  qc as Pager,
  tO as PanelMenu,
  eO as PanelMenuItem,
  Pf as Password,
  uO as PickList,
  _O as Pivot,
  h$ as PopupProvider,
  nO as ProfileMenu,
  S$ as Progress,
  gO as QRCode,
  i$ as RadialGauge,
  R$ as RadioButtonList,
  a$ as RangeNavigator,
  W$ as Rating,
  y$ as Row,
  fO as Scheduler,
  V$ as SecurityCode,
  kr as Select,
  j$ as SelectBar,
  b0 as Sidebar,
  N$ as SidebarToggle,
  Y$ as SignaturePad,
  g$ as Skeleton,
  K$ as Slider,
  B$ as SplitButton,
  lO as Splitter,
  x$ as Stack,
  IS as Stat,
  aO as Steps,
  e$ as Switch,
  zS as Table,
  M$ as Tabs,
  Aa as Text,
  D$ as TextArea,
  cs as TextBox,
  $$ as ThemeToggle,
  G$ as TimeSpanPicker,
  hO as Timeline,
  s$ as ToastProvider,
  iO as Toc,
  L0 as ToggleButton,
  t$ as Tooltip,
  dO as Tree,
  X$ as Upload,
  mO as VirtualGrid,
  Jc as aggregateValue,
  Ta as applyFilters,
  Zc as applyGridState,
  Ts as collectGroupKeys,
  lr as columnValue,
  KS as compare,
  VS as custom,
  Vc as cycleSort,
  Ms as defaultOperatorForType,
  FS as email,
  fa as formatMasked,
  yo as formatValue,
  E$ as getAppearance,
  go as getByPath,
  O$ as getTheme,
  Wc as groupItems,
  DS as iconNames,
  Ea as matchesFilters,
  qS as maxLength,
  US as minLength,
  Xc as paginate,
  HS as pattern,
  WS as range,
  $p as renderMarkdown,
  BS as required,
  GS as requiredTrue,
  Sa as resolveVariant,
  ws as runValidators,
  F0 as setAppearance,
  B0 as setTheme,
  Xr as shadeClass,
  _c as sortItems,
  Yc as sortedItems,
  da as subscribe,
  Qc as toCsv,
  cc as toFilterString,
  pc as toODataFilterString,
  J$ as useContextMenu,
  n$ as useDialog,
  Zi as useFormContext,
  YS as useFormField,
  wO as useLiveRegion,
  Eo as useMediaQuery,
  _$ as usePopup,
  T$ as useThemeService,
  o$ as useToast
};
