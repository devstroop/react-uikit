import { jsx as o, jsxs as I, Fragment as rt } from "react/jsx-runtime";
import { forwardRef as at, useId as lt, isValidElement as Wt, cloneElement as os, useState as W, useRef as oe, useCallback as F, useMemo as Oe, useContext as Bn, createContext as lr, useEffect as we, Fragment as ss, useLayoutEffect as Wo, useImperativeHandle as ko, Children as Xr } from "react";
function Vr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const sl = "_button_eyvws_1", al = "_filled_eyvws_36", ll = "_flat_eyvws_55", il = "_outlined_eyvws_58", cl = "_text_eyvws_63", dl = "_loading_eyvws_506", ul = "_spinner_eyvws_509", fl = "_xs_eyvws_525", _l = "_sm_eyvws_531", pl = "_md_eyvws_537", hl = "_lg_eyvws_543", ml = "_xl_eyvws_549", gl = "_iconOnly_eyvws_555", yl = "_fullWidth_eyvws_585", Cn = {
  button: sl,
  filled: al,
  flat: ll,
  outlined: il,
  text: cl,
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
  loading: dl,
  spinner: ul,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: fl,
  sm: _l,
  md: pl,
  lg: hl,
  xl: ml,
  iconOnly: gl,
  fullWidth: yl
};
function bl(e, t) {
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
      children: m,
      ...y
    } = t;
    if (u === !1) return null;
    const p = bl(r, a), h = p.style === "light" || p.style === "dark" ? null : Vr(i), _ = [
      Cn.button,
      Cn[p.variant],
      Cn[`style-${p.style}`],
      h ? Cn[h] : null,
      Cn[c],
      s ? Cn.fullWidth : null,
      l ? Cn.iconOnly : null,
      d ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ I(rt, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: $, ...M } = y, T = g || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: _,
          "aria-disabled": T || void 0,
          "aria-busy": d || void 0,
          onClick: (A) => {
            if (T) {
              A.preventDefault();
              return;
            }
            $?.(A);
          },
          ...M,
          children: x
        }
      );
    }
    const { type: w = "button", ...C } = y;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: w,
        className: _,
        disabled: g || d,
        "aria-busy": d || void 0,
        ...C,
        children: x
      }
    );
  }
), xl = "_card_4vcae_1", vl = "_elevated_4vcae_8", wl = "_filled_4vcae_13", kl = "_outlined_4vcae_18", Nl = "_interactive_4vcae_22", $l = "_text_4vcae_30", Sl = "_header_4vcae_46", Ol = "_body_4vcae_53", El = "_footer_4vcae_63", $r = {
  card: xl,
  elevated: vl,
  filled: wl,
  outlined: kl,
  interactive: Nl,
  text: $l,
  header: Sl,
  body: Ol,
  footer: El
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
    /* @__PURE__ */ I(
      "div",
      {
        ref: d,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          s?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
        },
        className: [$r.card, $r[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: $r.header, children: n }),
          /* @__PURE__ */ o("div", { className: $r.body, children: c }),
          r != null && /* @__PURE__ */ o("div", { className: $r.footer, children: r })
        ]
      }
    )
  );
});
function Na(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Ml = "_badge_1fy6d_1", Tl = "_xs_1fy6d_21", Cl = "_sm_1fy6d_26", Al = "_md_1fy6d_31", Dl = "_lg_1fy6d_36", Il = "_xl_1fy6d_41", Ll = "_neutral_1fy6d_47", zl = "_primary_1fy6d_52", Rl = "_secondary_1fy6d_61", Pl = "_light_1fy6d_66", jl = "_base_1fy6d_71", Bl = "_dark_1fy6d_76", Fl = "_info_1fy6d_81", Hl = "_success_1fy6d_86", Ul = "_warning_1fy6d_95", Wl = "_danger_1fy6d_104", ql = "_filled_1fy6d_111", Kl = "_outlined_1fy6d_161", Gl = "_text_1fy6d_213", Sr = {
  badge: Ml,
  xs: Tl,
  sm: Cl,
  md: Al,
  lg: Dl,
  xl: Il,
  neutral: Ll,
  primary: zl,
  secondary: Rl,
  light: Pl,
  base: jl,
  dark: Bl,
  info: Fl,
  success: Hl,
  warning: Ul,
  danger: Wl,
  filled: ql,
  outlined: Kl,
  text: Gl,
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
  const u = t, f = Na(n, "filled"), g = Vr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Sr.badge,
        Sr[a],
        Sr[u],
        Sr[f],
        g ? Sr[g] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Vl = "_icon_vn4jx_5", Yl = "_xs_vn4jx_24", Xl = "_sm_vn4jx_28", Zl = "_md_vn4jx_23", Jl = "_lg_vn4jx_36", Ql = "_xl_vn4jx_40", xs = {
  icon: Vl,
  xs: Yl,
  sm: Xl,
  md: Zl,
  lg: Jl,
  xl: Ql
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
], De = at(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
  const l = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [xs.icon, l ? xs[n] : null, a].filter(Boolean).join(" "),
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
}), ei = "_stat_sjin9_1", ti = "_label_sjin9_8", ni = "_row_sjin9_16", ri = "_value_sjin9_22", oi = "_delta_sjin9_28", si = "_success_sjin9_33", ai = "_danger_sjin9_37", li = "_neutral_sjin9_41", ii = "_hint_sjin9_45", Zn = {
  stat: ei,
  label: ti,
  row: ni,
  value: ri,
  delta: oi,
  success: si,
  danger: ai,
  neutral: li,
  hint: ii
}, M$ = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ I(
    "div",
    {
      ref: l,
      className: [Zn.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Zn.label, children: t }),
        /* @__PURE__ */ I("div", { className: Zn.row, children: [
          /* @__PURE__ */ o("div", { className: Zn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Zn.delta, Zn[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: Zn.hint, children: i })
      ]
    }
  );
}), ci = "_wrap_ipozk_1", di = "_table_ipozk_8", ui = "_caption_ipozk_14", fi = "_none_ipozk_51", _i = "_horizontal_ipozk_57", pi = "_vertical_ipozk_67", hi = "_alternating_ipozk_85", mi = "_start_ipozk_89", gi = "_center_ipozk_93", yi = "_end_ipozk_97", bi = "_empty_ipozk_101", Hn = {
  wrap: ci,
  table: di,
  caption: ui,
  none: fi,
  horizontal: _i,
  vertical: pi,
  alternating: hi,
  start: mi,
  center: gi,
  end: yi,
  empty: bi
};
function T$({
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
  return /* @__PURE__ */ I("div", { className: [Hn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ I(
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
const xi = "_emptyState_1swxw_1", vi = "_icon_1swxw_13", wi = "_title_1swxw_18", ki = "_description_1swxw_24", Ni = "_action_1swxw_30", Or = {
  emptyState: xi,
  icon: vi,
  title: wi,
  description: ki,
  action: Ni
};
function C$({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ I("div", { className: [Or.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Or.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Or.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Or.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Or.action, children: r })
  ] });
}
const $i = "_field_149oz_1", Si = "_label_149oz_8", Oi = "_required_149oz_14", Ei = "_hint_149oz_19", Mi = "_error_149oz_24", Er = {
  field: $i,
  label: Si,
  required: Oi,
  hint: Ei,
  error: Mi
};
function ar({
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
  const d = r ?? a, u = lt(), f = lt(), g = lt();
  if (l === !1) return null;
  const m = i != null ? f : d != null ? g : null, y = typeof c == "function" ? c({ inputId: u, hintId: g, errorId: f }) : c, p = Wt(y) && typeof y.props.id == "string" ? y.props.id : void 0, b = p ?? t ?? u, h = Wt(y) && (m != null || p == null && typeof y.type == "string"), _ = p != null || t != null || h, x = h && Wt(y) ? os(y, {
    id: b,
    "aria-describedby": m != null ? [
      y.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : y.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : y.props["aria-invalid"]
  }) : y;
  return /* @__PURE__ */ I("div", { className: [Er.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ I(
      "label",
      {
        className: Er.label,
        htmlFor: _ ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Er.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    i != null ? /* @__PURE__ */ o("div", { id: f, className: Er.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: g, className: Er.hint, children: d }) : null
  ] });
}
const Ti = "_formfield_6e25e_1", Ci = "_content_6e25e_8", Ai = "_floating_6e25e_43", Di = "_label_6e25e_111", Ii = "_start_6e25e_132", Li = "_required_6e25e_169", zi = "_end_6e25e_175", Ri = "_filled_6e25e_192", Pi = "_flat_6e25e_199", ji = "_helper_6e25e_206", Bi = "_invalid_6e25e_211", Nn = {
  formfield: Ti,
  content: Ci,
  floating: Ai,
  label: Di,
  start: Ii,
  required: Li,
  end: zi,
  filled: Ri,
  flat: Pi,
  helper: ji,
  invalid: Bi
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
  const g = lt(), m = lt();
  if (f === !1) return null;
  const y = a ?? g, p = typeof d == "function" ? d({
    inputId: y
  }) : d, b = Wt(p) ? p.type : null, h = typeof b == "string", _ = Wt(p) && typeof b != "symbol", x = Wt(p) ? p.props : null, N = typeof x?.id == "string" ? x.id : void 0, w = h && Wt(p) ? p.type.toLowerCase() : null, C = w != null && (w === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : w === "button" || w === "meter" || w === "output" || w === "progress" || w === "select" || w === "textarea"), $ = _ && (r != null || s || N == null && C), M = N != null || a != null || $, T = w === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, A = w === "textarea" || w === "input" && (T == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(T)), D = $ && Wt(p) ? os(
    p,
    {
      id: N ?? y,
      ...i && A && x?.placeholder == null ? { placeholder: " " } : {},
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
  ) : p, E = e != null ? /* @__PURE__ */ I(
    "label",
    {
      className: Nn.label,
      htmlFor: M ? N ?? y : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: Nn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ I(
    "div",
    {
      className: [
        Nn.formfield,
        Nn[c],
        i ? Nn.floating : null,
        s ? Nn.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        i ? null : E,
        /* @__PURE__ */ I("div", { className: Nn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Nn.start, children: t }),
          D,
          i ? E : null,
          n != null && /* @__PURE__ */ o("div", { className: Nn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: m, className: Nn.helper, children: r })
      ]
    }
  );
}
const Fi = "_fieldset_8x01p_1", Hi = "_legend_8x01p_11", Ui = "_legendText_8x01p_20", Wi = "_toggle_8x01p_24", qi = "_content_8x01p_45", Ki = "_summary_8x01p_49", Jn = {
  fieldset: Fi,
  legend: Hi,
  legendText: Ui,
  toggle: Wi,
  content: qi,
  summary: Ki
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
  onExpand: g,
  onCollapse: m,
  children: y,
  className: p,
  visible: b = !0
}) {
  const h = lt(), [_, x] = W(c);
  if (b === !1) return null;
  const N = i ?? _, w = a ? `${h}-content` : void 0, C = () => {
    const E = !N;
    i === void 0 && x(E), E ? m?.() : g?.();
  }, $ = a || e != null || n != null || t != null, M = a ? N : !1, T = a && N && s != null, A = M ? l ?? "Expand" : d ?? "Collapse", D = M ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ I(
    "fieldset",
    {
      className: [Jn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: Jn.legend, children: a ? /* @__PURE__ */ I(rt, { children: [
          /* @__PURE__ */ I(
            "button",
            {
              type: "button",
              className: Jn.toggle,
              title: A,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !M,
              "aria-controls": w,
              onClick: C,
              children: [
                /* @__PURE__ */ o(
                  De,
                  {
                    icon: M ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(De, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: Jn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ I(rt, { children: [
          n != null && /* @__PURE__ */ o(De, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Jn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Jn.content,
            id: w,
            hidden: M,
            children: y
          }
        ),
        T ? /* @__PURE__ */ o("div", { className: Jn.summary, children: s }) : null
      ]
    }
  );
}
const Gi = "_form_abp5n_1", Vi = {
  form: Gi
}, $a = lr(null);
function Yi() {
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
  const [s, l] = W({}), [d, u] = W(0), f = oe(s);
  f.current = s;
  const g = F((x) => {
    l(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), m = F((x) => {
    l((N) => {
      if (!(x in N)) return N;
      const w = { ...N };
      return delete w[x], w;
    });
  }, []), y = F(() => {
    const x = {};
    for (const N of Object.values(f.current)) {
      const w = N.validate();
      w.length > 0 && (x[N.name] = w);
    }
    return x;
  }, []), p = F(() => {
    const x = y();
    u((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [y, e, t, n]), b = (x) => {
    r != null && a != null || (x.preventDefault(), p());
  }, h = Oe(
    () => ({ registerField: g, unregisterField: m, submit: p, submitCount: d }),
    [g, m, p, d]
  ), _ = [Vi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o($a.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: b,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const ir = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", L$ = (e = "Required") => (t) => ir(t) ? e : null, z$ = (e = "Invalid email") => (t) => ir(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, R$ = (e, t = "Invalid format") => (n) => ir(n) || e.test(String(n)) ? null : t, P$ = (e, t = `Minimum ${e} characters`) => (n) => ir(n) || String(n).length >= e ? null : t, j$ = (e, t = `Maximum ${e} characters`) => (n) => ir(n) || String(n).length <= e ? null : t, B$ = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ir(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, F$ = (e, t = "Values do not match") => (n, r) => {
  if (ir(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, H$ = (e = "Required") => (t) => t === !0 ? null : e, U$ = (e) => (t, n) => e(t, n);
function Xi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function W$(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Yi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, u] = W(!1), f = oe(() => []);
  f.current = () => Xi(t?.validate ?? [], i), we(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]), we(() => {
    a > 0 && (l(!0), u(!1));
  }, [a]);
  const g = s && !d ? f.current() : [];
  return { value: i, setValue: (y) => {
    c(y), u(!0);
  }, errors: g };
}
const Zi = "_select_1xe98_1", Ji = "_invalid_1xe98_33", Qi = "_xs_1xe98_40", ec = "_sm_1xe98_48", tc = "_md_1xe98_56", nc = "_lg_1xe98_62", rc = "_xl_1xe98_68", Ao = {
  select: Zi,
  invalid: Ji,
  xs: Qi,
  sm: ec,
  md: tc,
  lg: nc,
  xl: rc
}, xr = at(
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
}, oc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function sc(e) {
  return oc.includes(e);
}
function yo(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function vs(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Wr(e, t) {
  const n = vs(e), r = vs(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function No(e) {
  if (e.secondOperator == null) return !1;
  if (sc(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function ws(e, t, n) {
  const r = yo(t, e.property), a = ks(
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
      return Wr(c, s) < 0;
    case "LessThanOrEquals":
      return Wr(c, s) <= 0;
    case "GreaterThan":
      return Wr(c, s) > 0;
    case "GreaterThanOrEquals":
      return Wr(c, s) >= 0;
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
  if (!No(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function ic(e) {
  return as(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ic).filter(Boolean).join(` ${e.operator} `)})` : lc(e);
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
    const f = typeof u == "string", g = f && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${g} ${dc[d]} ${f && r ? a(i(u)) : i(u)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(u))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(u))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(u))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(u))}))`;
      case "In":
        return Array.isArray(u) ? `${g} in (${u.map((m) => i(m)).join(", ")})` : `${g} in (${i(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${g} in (${u.map((m) => i(m)).join(", ")}))` : `not(${g} in (${i(u)}))`;
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
function fc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (as(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => fc(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return uc(e, n);
}
function _c(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const a of t) {
      const i = a.sortOrder === "Ascending" ? 1 : -1, c = Wr(
        yo(n, a.property),
        yo(r, a.property)
      );
      if (c !== 0) return c * i;
    }
    return 0;
  });
}
const pc = "_filter_1dvqt_1", hc = "_rows_1dvqt_9", mc = "_row_1dvqt_9", gc = "_join_1dvqt_21", yc = "_property_1dvqt_30", bc = "_operator_1dvqt_34", xc = "_value_1dvqt_38", vc = "_remove_1dvqt_42", wc = "_bar_1dvqt_58", kc = "_add_1dvqt_64", Nc = "_custom_1dvqt_78", $c = "_summary_1dvqt_82", Sc = "_second_1dvqt_87", Oc = "_secondAdd_1dvqt_91", Ec = "_addSecond_1dvqt_95", Mc = "_joinSelect_1dvqt_109", mt = {
  filter: pc,
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
  joinSelect: Mc
}, Tr = [
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
    return /* @__PURE__ */ o(rt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      xr,
      {
        "aria-label": e.title ?? e.name,
        className: mt.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      xr,
      {
        "aria-label": e.title ?? e.name,
        className: mt.value,
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
      className: mt.value,
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
    () => r != null && r.length > 0 ? r.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Mr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (h, _) => {
    u(
      (x) => x.map((N) => N.id === h ? { ...N, ..._ } : N)
    );
  }, g = () => {
    const h = d[d.length - 1], _ = Math.max(0, ...d.map((N) => N.id)) + 1, x = e[0];
    u((N) => [
      ...N,
      {
        id: _,
        property: h?.property ?? x?.name ?? "",
        operator: Mr[e.find(
          (w) => w.name === (h?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (h) => {
    u(
      (_) => _.length > 1 ? _.filter((x) => x.id !== h) : _
    );
  }, y = Oe(() => {
    const h = [];
    for (const _ of d) {
      if (_.property === "" || (_.value == null || _.value === "") && !Tr.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: w } = _;
      w != null && No(_) && (N.secondOperator = w, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), h.push(N);
    }
    return h;
  }, [d]), p = Oe(() => s == null || y.length === 0 ? s : Ea(s, {
    operator: t,
    filters: y
  }, {
    caseSensitivity: n
  }), [s, y, t, n]);
  we(() => {
    c != null && s != null && c(p ?? []);
  }, [p]);
  const b = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ I("div", { className: [mt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: mt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((h, _) => {
      const x = b(h.property), N = a ? [Mr[x.type ?? "string"]] : Sa, w = !Tr.includes(h.operator), C = h.secondOperator != null;
      return /* @__PURE__ */ I(ss, { children: [
        /* @__PURE__ */ I("div", { className: mt.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: mt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            xr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: mt.property,
              value: h.property,
              onChange: ($) => {
                const M = e.find(
                  (T) => T.name === $.target.value
                );
                f(h.id, {
                  property: $.target.value,
                  operator: Mr[M?.type ?? "string"],
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
            xr,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: mt.operator,
              value: h.operator,
              onChange: ($) => {
                const M = $.target.value;
                f(
                  h.id,
                  Tr.includes(M) ? {
                    operator: M,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: M }
                );
              },
              options: N.map(($) => ({
                value: $,
                label: Ns[$]
              }))
            }
          ),
          w ? /* @__PURE__ */ o(
            $s,
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
              className: mt.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => m(h.id),
              children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
            }
          )
        ] }),
        w ? C ? /* @__PURE__ */ I(
          "div",
          {
            className: [mt.row, mt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                xr,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: mt.joinSelect,
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
                xr,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: mt.operator,
                  value: h.secondOperator,
                  onChange: ($) => {
                    const M = $.target.value;
                    f(
                      h.id,
                      Tr.includes(M) ? { secondOperator: M, secondValue: void 0 } : { secondOperator: M }
                    );
                  },
                  options: N.map(($) => ({
                    value: $,
                    label: Ns[$]
                  }))
                }
              ),
              h.secondOperator == null || !Tr.includes(h.secondOperator) ? /* @__PURE__ */ o(
                $s,
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
                  className: mt.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => f(h.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: mt.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: mt.addSecond,
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
    /* @__PURE__ */ I("div", { className: mt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: mt.add, onClick: g, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: mt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ I("span", { className: mt.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Tc = "_pager_1du31_1", Cc = "_alignLeft_1du31_10", Ac = "_alignCenter_1du31_14", Dc = "_alignRight_1du31_18", Ic = "_alignJustify_1du31_22", Lc = "_summary_1du31_26", zc = "_controls_1du31_31", Rc = "_button_1du31_37", Pc = "_active_1du31_73", jc = "_ellipsis_1du31_85", Bc = "_size_1du31_91", Ft = {
  pager: Tc,
  alignLeft: Cc,
  alignCenter: Ac,
  alignRight: Dc,
  alignJustify: Ic,
  summary: Lc,
  controls: zc,
  button: Rc,
  active: Pc,
  ellipsis: jc,
  size: Bc
};
function Fc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Ss(e, t) {
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
  pageSizeText: g = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: y = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: w = "Pagination",
  className: C,
  visible: $ = !0
}) {
  const M = n ?? r, [T, A] = W(M), D = n !== void 0, E = D ? M : T, k = Math.max(1, Math.ceil(e / t)), v = Math.min(Math.max(1, E), k), O = l ?? !0, z = c || k > 1, L = Hc(v, k, i), P = F(
    (Q) => {
      const be = Math.min(Math.max(1, Q), k);
      D || A(be);
      const ne = (be - 1) * t;
      x?.({
        page: be,
        skip: ne,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [D, x, k, t]
  ), B = s === "center" ? Ft.alignCenter : s === "right" ? Ft.alignRight : s === "justify" ? Ft.alignJustify : Ft.alignLeft, Y = {
    count: e,
    pageNumber: v,
    pageSize: t,
    pageCount: k
  }, se = (Q) => {
    const be = Array.from(
      Q.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), ne = be.indexOf(document.activeElement);
    ne !== -1 && (Q.key === "ArrowRight" || Q.key === "ArrowDown" ? (Q.preventDefault(), (be[ne + 1] ?? be[0])?.focus()) : Q.key === "ArrowLeft" || Q.key === "ArrowUp" ? (Q.preventDefault(), (be[ne - 1] ?? be[be.length - 1])?.focus()) : Q.key === "Home" ? (Q.preventDefault(), be[0]?.focus()) : Q.key === "End" && (Q.preventDefault(), be[be.length - 1]?.focus()));
  };
  return $ === !1 || !z ? null : /* @__PURE__ */ I(
    "nav",
    {
      className: [Ft.pager, B, C].filter(Boolean).join(" "),
      "aria-label": w,
      children: [
        O && /* @__PURE__ */ o("span", { className: Ft.summary, "aria-live": "polite", children: f ? f(Y) : Fc(u, v, k, e) }),
        /* @__PURE__ */ I(
          "div",
          {
            className: Ft.controls,
            role: "group",
            "aria-label": w,
            onKeyDown: se,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: v <= 1,
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
                  className: Ft.button,
                  disabled: v <= 1,
                  onClick: () => P(v - 1),
                  "aria-label": y,
                  title: y,
                  children: "‹"
                }
              ),
              L.map(
                (Q, be) => Q === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${be}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": Q,
                    className: [Ft.button, Q === v ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": Q === v ? "page" : void 0,
                    "aria-label": Ss(_, Q),
                    title: Ss(h, Q),
                    onClick: () => P(Q),
                    children: Q
                  },
                  Q
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: v >= k,
                  onClick: () => P(v + 1),
                  "aria-label": p,
                  title: p,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: v >= k,
                  onClick: () => P(k),
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ I("label", { className: Ft.size, children: [
          /* @__PURE__ */ o("span", { children: g }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (Q) => N?.(Number(Q.target.value)),
              "aria-label": g,
              children: a.map((Q) => /* @__PURE__ */ o("option", { value: Q, children: Q }, Q))
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
      return s.map((p) => ({ type: "row", row: p }));
    const f = i(u), g = /* @__PURE__ */ new Map(), m = [];
    s.forEach((p) => {
      const b = String(a(p, u) ?? ""), h = g.get(b);
      h ? h.push(p) : (g.set(b, [p]), m.push(b));
    });
    const y = [];
    return m.forEach((p) => {
      const b = g.get(p), h = [...d, p].join(Ma), _ = b[0], x = _ !== void 0 ? a(_, u) : void 0;
      y.push({
        type: "group",
        group: {
          key: h,
          display: bo(x, f?.format),
          property: u,
          title: f?.title ?? u,
          count: b.length,
          level: l
        }
      }), r.has(h) && y.push(...c(b, l + 1, [...d, p]));
    }), y;
  };
  return c(e, 0, []);
}
function Os(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), u = [];
    i.forEach((f) => {
      const g = String(n(f, l) ?? ""), m = d.get(g);
      m ? m.push(f) : (d.set(g, [f]), u.push(g));
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
function or(e, t) {
  if (t != null)
    return yo(e, t);
}
function bo(e, t) {
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
function Gc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Es[(r ? Es.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Vc(e, t) {
  return _c(e, t);
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
  ), a = r.length > 0 ? Ea(
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
function Jc(e, t, n = or) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, a = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    a.push(
      t.map((c) => r(bo(n(i, c.property), c.format))).join(",")
    );
  }), `${a.join(`\r
`)}\r
`;
}
const Qc = "_grid_13rur_1", ed = "_toolbar_13rur_8", td = "_picker_13rur_13", nd = "_pickerButton_13rur_17", rd = "_pickerPanel_13rur_31", od = "_pickerItem_13rur_46", sd = "_groupPanel_13rur_55", ad = "_groupPanelActive_13rur_66", ld = "_groupPanelText_13rur_70", id = "_groupChip_13rur_74", cd = "_groupRemove_13rur_85", dd = "_groupRow_13rur_94", ud = "_groupCell_13rur_98", fd = "_groupToggle_13rur_104", _d = "_editRow_13rur_117", pd = "_editCell_13rur_121", hd = "_editInput_13rur_127", md = "_commandCell_13rur_137", gd = "_commandButton_13rur_144", yd = "_data_13rur_159", bd = "_table_13rur_166", xd = "_header_13rur_172", vd = "_center_13rur_185", wd = "_right_13rur_189", kd = "_sortButton_13rur_193", Nd = "_sortIndicator_13rur_211", $d = "_sortIndex_13rur_215", Sd = "_cell_13rur_226", Od = "_clickable_13rur_241", Ed = "_frozen_13rur_249", Md = "_selected_13rur_255", Td = "_resizeHandle_13rur_263", Cd = "_filterCell_13rur_281", Ad = "_filterSelect_13rur_290", Dd = "_filterInput_13rur_300", Id = "_empty_13rur_311", Ld = "_loading_13rur_317", zd = "_visuallyHidden_13rur_331", Rd = "_virtualScroller_13rur_340", Pd = "_spacerRow_13rur_345", jd = "_footerRow_13rur_350", Bd = "_footerCell_13rur_354", Fd = "_footerValue_13rur_361", $e = {
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
  editRow: _d,
  editCell: pd,
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
  selected: Md,
  resizeHandle: Td,
  filterCell: Cd,
  filterSelect: Ad,
  filterInput: Dd,
  empty: Id,
  loading: Ld,
  visuallyHidden: zd,
  virtualScroller: Rd,
  spacerRow: Pd,
  footerRow: jd,
  footerCell: Bd,
  footerValue: Fd
}, Hd = {
  Ascending: "ascending",
  Descending: "descending"
};
function Ts(e, t) {
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
  pageNumbersCount: g = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: y = !0,
  showPageSizeSelector: p = !0,
  selectionMode: b = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: x = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: w = !1,
  allowColumnReorder: C = !1,
  allowGrouping: $ = !1,
  groupPanelText: M = "Drag a column header here to group",
  groupExpanded: T = !0,
  aggregates: A,
  showExportButton: D = !1,
  exportFileName: E = "grid-data",
  serverMode: k = !1,
  totalCount: v,
  onRangeChange: O,
  virtualize: z = !1,
  virtualRowHeight: L = 40,
  virtualHeight: P = 480,
  editMode: B = "None",
  allowRowCreate: Y = !1,
  onRowUpdate: se,
  onRowCreate: Q,
  onRowDelete: be,
  isLoading: ne = !1,
  empty: pe = "No records found",
  ariaLabel: G,
  className: _e,
  onRowClick: ie
}) {
  const he = G != null ? `${G} ` : "", [ue, Se] = W([]), [q, Ee] = W(
    /* @__PURE__ */ new Map()
  ), [re, Ae] = W(1), [me, Fe] = W(u), [Ge, Qe] = W(
    () => e.map((H, U) => to(H, U))
  ), [Ct, it] = W(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? to(H, U) : "").filter(Boolean)
    )
  ), [bt, Z] = W({}), [R, X] = W(!1), [ee, ye] = W([]), [ce, Me] = W(
    null
  ), [je, Je] = W(null), [et, ot] = W({}), [Zt, ae] = W(0), [ze, Nt] = W(P), Rt = oe(null), xt = oe(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, xe) => H.set(to(U, xe), U)), H;
  }, [e]), qe = Oe(
    () => Ge.filter((H) => Ct.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, Ct, Ie]
  ), vt = Oe(
    () => qc(qe, bt),
    [qe, bt]
  ), Ot = B !== "None" || be != null || Y, ct = Oe(() => {
    if (k) {
      const H = v ?? t.length, U = Math.max(1, Math.ceil(H / me));
      return {
        items: [...t],
        filtered: [...t],
        total: H,
        pageCount: U,
        pageNumber: re,
        pageSize: me,
        sorts: ue,
        filters: q
      };
    }
    return Xc(
      t,
      {
        sorts: ue,
        filters: q,
        pageNumber: re,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: d ? me : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: l,
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
    ue,
    q,
    re,
    me,
    l,
    s,
    e,
    k,
    v,
    d
  ]), V = oe(O);
  we(() => {
    V.current = O;
  });
  const ge = Oe(
    () => [...q.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? Ms(
        e.find((xe) => xe.property === H)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [q, e]
  );
  we(() => {
    !k || V.current == null || V.current({
      start: (re - 1) * me,
      count: me,
      pageNumber: re,
      pageSize: me,
      sorts: ue,
      filters: ge,
      logicalOperator: l
    });
  }, [
    k,
    re,
    me,
    ue,
    ge,
    l
  ]);
  const Ve = Oe(() => new Set(ee), [ee]), Ye = Oe(() => ce || (T ? Os(ct.items, ee, or) : /* @__PURE__ */ new Set()), [ce, T, ct.items, ee]), Pt = Oe(
    () => Wc(ct.items, ee, e, Ye, or),
    [ct.items, ee, e, Ye]
  ), Xe = Oe(
    () => ee.length > 0 ? qe.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : qe,
    [qe, ee, Ve]
  ), K = (H) => {
    H !== "" && Se(Gc(ue, H, { multi: a }));
  }, te = (H, U) => {
    Ee((xe) => {
      const ve = new Map(xe);
      return ve.set(H, U), ve;
    }), Ae(1);
  }, fe = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (b === "None") return;
    const U = n(H), xe = h ?? [];
    let ve;
    b === "Single" ? ve = xe.length === 1 && xe[0] === U ? [] : [U] : ve = xe.includes(U) ? xe.filter((tt) => tt !== U) : [...xe, U], _?.(ve);
  }, ke = (H) => {
    ie?.(H);
  }, Ce = (H, U, xe) => {
    Rt.current = { key: H, startX: U, startWidth: xe };
  }, Ke = (H) => {
    const U = Rt.current;
    if (!U) return;
    const xe = H - U.startX, ve = Math.max(48, U.startWidth + xe);
    Z((tt) => ({ ...tt, [U.key]: `${ve}px` }));
  }, Be = () => {
    Rt.current = null;
  }, dt = (H) => {
    xt.current = H;
  }, st = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Qe((xe) => {
      const ve = [...xe], tt = ve.indexOf(U), At = ve.indexOf(H);
      return tt < 0 || At < 0 ? xe : (ve.splice(tt, 1), ve.splice(At, 0, U), ve);
    });
  }, Et = (H) => {
    it((U) => {
      const xe = new Set(U);
      return xe.has(H) ? xe.delete(H) : xe.add(H), xe;
    });
  }, ht = () => {
    const H = xt.current;
    if (xt.current = null, !H || !$) return;
    const xe = Ie.get(H)?.property;
    xe && (ye(
      (ve) => ve.includes(xe) ? ve : [...ve, xe]
    ), Me(null));
  }, Le = (H) => {
    ye((U) => U.filter((xe) => xe !== H)), Me(null);
  }, Mt = (H) => {
    Me((U) => {
      const xe = U ?? (T ? Os(ct.items, ee, or) : /* @__PURE__ */ new Set()), ve = new Set(xe);
      return ve.has(H) ? ve.delete(H) : ve.add(H), ve;
    });
  }, Jt = (H) => {
    const U = {};
    e.forEach((xe) => {
      xe.property && (U[xe.property] = or(H, xe.property));
    }), ot(U), Je(String(n(H)));
  }, hn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), ot(H), Je("__new__");
  }, Tn = () => {
    Je(null), ot({});
  }, Fn = (H) => {
    if (je === "__new__") {
      const U = Object.fromEntries(
        e.filter((xe) => xe.property).map((xe) => [xe.property, et[xe.property]])
      );
      Q?.(U);
    } else if (H != null) {
      const U = { ...H, ...et };
      se?.(H, U);
    }
    Tn();
  }, kn = d && (m === "Top" || m === "TopAndBottom"), Zr = d && (m === "Bottom" || m === "TopAndBottom"), So = c && e.some((H) => Ts(H, c)), Oo = (H, U, xe) => H.render ? H.render(U, { index: 0 }) : bo(or(U, H.property), H.format), Eo = (H) => {
    const U = [$e.cell];
    return H.align === "center" && U.push($e.center), H.align === "right" && U.push($e.right), H.frozen && U.push($e.frozen), U.join(" ");
  }, mn = k ? t : ct.filtered, Jr = () => {
    const H = Jc(
      mn,
      Xe.map((tt) => tt.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), xe = URL.createObjectURL(U), ve = document.createElement("a");
    ve.href = xe, ve.download = `${E}.csv`, document.body.appendChild(ve), ve.click(), ve.remove(), URL.revokeObjectURL(xe);
  }, gn = Pt.length, jt = Oe(() => {
    if (!z || gn === 0)
      return { start: 0, end: gn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Zt / L) - H
    ), xe = Math.ceil(ze / L) + H * 2, ve = Math.min(gn, U + xe), tt = U * L, At = Math.max(0, (gn - ve) * L);
    return { start: U, end: ve, top: tt, bottom: At };
  }, [z, gn, Zt, L, ze]), Nr = Xe.length + (Ot ? 1 : 0);
  return /* @__PURE__ */ I("div", { className: [$e.grid, _e].filter(Boolean).join(" "), children: [
    kn && /* @__PURE__ */ o(
      qo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: f,
        pageNumbersCount: g,
        showSummary: y,
        showPageSizeSelector: p,
        ariaLabel: `${he}${Zr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: fe
      }
    ),
    ($ || Y || x || D) && /* @__PURE__ */ I("div", { className: $e.toolbar, children: [
      $ && /* @__PURE__ */ o(
        "div",
        {
          className: [
            $e.groupPanel,
            ee.length > 0 ? $e.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (H) => H.preventDefault() : void 0,
          onDrop: $ ? ht : void 0,
          children: ee.length > 0 ? ee.map((H) => {
            const U = e.find((xe) => xe.property === H)?.title ?? H;
            return /* @__PURE__ */ I("span", { className: $e.groupChip, children: [
              U,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: $e.groupRemove,
                  onClick: () => Le(H),
                  "aria-label": `Remove group by ${U}`,
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
                }
              )
            ] }, H);
          }) : /* @__PURE__ */ o("span", { className: $e.groupPanelText, children: M })
        }
      ),
      Y && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: $e.pickerButton,
          onClick: hn,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ I("div", { className: $e.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $e.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": R,
            onClick: () => X((H) => !H),
            children: N
          }
        ),
        R && /* @__PURE__ */ o(
          "div",
          {
            className: $e.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const xe = to(H, U);
              return /* @__PURE__ */ I("label", { className: $e.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Ct.has(xe),
                    onChange: () => Et(xe)
                  }
                ),
                H.title ?? H.property
              ] }, xe);
            })
          }
        )
      ] }),
      D && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: $e.pickerButton,
          onClick: Jr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ I(
      "div",
      {
        className: [$e.data, z ? $e.virtualScroller : ""].filter(Boolean).join(" "),
        style: z ? { maxHeight: P } : void 0,
        onScroll: z ? (H) => {
          ae(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ I(
            "table",
            {
              className: $e.table,
              role: "grid",
              "aria-rowcount": (z ? gn : ct.total) + 1,
              "aria-label": G,
              "aria-busy": ne || void 0,
              children: [
                /* @__PURE__ */ I("colgroup", { children: [
                  Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: bt[H] ?? U.width,
                        minWidth: U.minWidth,
                        maxWidth: U.maxWidth
                      }
                    },
                    H
                  )),
                  Ot && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ I("thead", { children: [
                  /* @__PURE__ */ I("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const xe = Ud(U, r), ve = ue.find((wt) => wt.property === U.property), tt = ve ? ue.indexOf(ve) + 1 : 0, At = U.align ?? "left";
                      return /* @__PURE__ */ I(
                        "th",
                        {
                          "aria-sort": xe && ve ? Hd[ve.sortOrder] : "none",
                          className: [
                            $e.header,
                            At === "center" ? $e.center : "",
                            At === "right" ? $e.right : "",
                            U.frozen ? $e.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: C || $ || void 0,
                          onDragStart: C || $ ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), dt(H);
                          } : void 0,
                          onDragOver: C ? (wt) => wt.preventDefault() : void 0,
                          onDrop: C ? () => st(H) : void 0,
                          children: [
                            xe ? /* @__PURE__ */ I(
                              "button",
                              {
                                type: "button",
                                className: $e.sortButton,
                                onClick: () => U.property != null && K(U.property),
                                "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  ve && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: $e.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ve.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  tt > 1 && i && /* @__PURE__ */ o("span", { className: $e.sortIndex, children: tt })
                                ]
                              }
                            ) : U.title ?? U.property,
                            w && /* @__PURE__ */ o(
                              "span",
                              {
                                className: $e.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${U.title ?? U.property}`,
                                onMouseDown: (wt) => {
                                  wt.preventDefault(), wt.stopPropagation();
                                  const yn = bt[H] ?? U.width, Tt = yn ? parseFloat(yn) : 96;
                                  Ce(
                                    H,
                                    wt.clientX,
                                    Number.isFinite(Tt) ? Tt : 96
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
                    Ot && /* @__PURE__ */ o("th", { className: $e.header, scope: "col", children: "Actions" })
                  ] }),
                  So && /* @__PURE__ */ o("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!Ts(U, c))
                      return /* @__PURE__ */ o("td", { className: $e.filterCell }, H);
                    const xe = q.get(U.property ?? "");
                    return /* @__PURE__ */ I("td", { className: $e.filterCell, children: [
                      /* @__PURE__ */ I(
                        "label",
                        {
                          className: $e.visuallyHidden,
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
                          className: $e.filterSelect,
                          value: xe?.operator ?? Ms(U.type ?? "string"),
                          onChange: (ve) => te(U.property ?? "", {
                            ...xe,
                            operator: ve.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: Sa.filter((ve) => ve !== "Custom").map(
                            (ve) => /* @__PURE__ */ o("option", { value: ve, children: ve }, ve)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: $e.filterInput,
                          value: xe?.value ?? "",
                          onChange: (ve) => te(U.property ?? "", {
                            ...xe,
                            value: ve.target.value
                          }),
                          placeholder: `Filter ${U.title ?? U.property}`,
                          "aria-label": `${U.title ?? U.property} value`
                        }
                      )
                    ] }, H);
                  }) })
                ] }),
                /* @__PURE__ */ I("tbody", { children: [
                  je === "__new__" && /* @__PURE__ */ I("tr", { className: $e.editRow, children: [
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o("td", { className: $e.editCell, children: U.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: $e.editInput,
                        type: U.type === "number" ? "number" : U.type === "boolean" ? "checkbox" : "text",
                        checked: U.type === "boolean" ? !!et[U.property] : void 0,
                        value: U.type === "boolean" ? void 0 : String(et[U.property] ?? ""),
                        onChange: (xe) => ot((ve) => ({
                          ...ve,
                          [U.property]: U.type === "boolean" ? xe.target.checked : xe.target.value
                        })),
                        "aria-label": `${U.title ?? U.property} (new)`
                      }
                    ) }, H)),
                    Ot && /* @__PURE__ */ I("td", { className: $e.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: $e.commandButton,
                          onClick: () => Fn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: $e.commandButton,
                          onClick: Tn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  jt.top > 0 && /* @__PURE__ */ o("tr", { className: $e.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Nr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const xe = jt.start + U, ve = z ? xe + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Tt = Ye.has(H.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: $e.groupRow,
                          "aria-rowindex": ve,
                          children: /* @__PURE__ */ o("td", { colSpan: Nr, className: $e.groupCell, children: /* @__PURE__ */ I(
                            "button",
                            {
                              type: "button",
                              className: $e.groupToggle,
                              "aria-expanded": Tt,
                              style: {
                                paddingInlineStart: `${H.group.level * 16}px`
                              },
                              onClick: () => Mt(H.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Tt ? "▼" : "▶" }),
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
                    const tt = H.row, At = n(tt), wt = (h ?? []).includes(At), yn = je != null && je === String(At);
                    return /* @__PURE__ */ I(
                      "tr",
                      {
                        "aria-rowindex": ve,
                        className: [
                          ie || b !== "None" ? $e.clickable : "",
                          wt ? $e.selected : "",
                          yn ? $e.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? wt : void 0,
                        onClick: ie || b !== "None" ? (Tt) => {
                          Wd(Tt.target) || (ke(tt), Ne(tt));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Tt, column: gt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Eo(gt),
                              style: gt.frozen ? { left: vt[Tt] } : void 0,
                              children: yn && gt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: $e.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!et[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(et[gt.property] ?? ""),
                                  onChange: (Qt) => ot((Mo) => ({
                                    ...Mo,
                                    [gt.property]: gt.type === "boolean" ? Qt.target.checked : Qt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : Oo(gt, tt)
                            },
                            Tt
                          )),
                          Ot && /* @__PURE__ */ o("td", { className: $e.commandCell, children: yn ? /* @__PURE__ */ I(rt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: $e.commandButton,
                                onClick: () => Fn(tt),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: $e.commandButton,
                                onClick: Tn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ I(rt, { children: [
                            B !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: $e.commandButton,
                                onClick: () => Jt(tt),
                                children: "Edit"
                              }
                            ),
                            be && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: $e.commandButton,
                                onClick: () => be(tt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      At
                    );
                  }),
                  jt.bottom > 0 && /* @__PURE__ */ o("tr", { className: $e.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Nr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                A && A.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ I("tr", { className: $e.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const xe = A.filter(
                      (ve) => ve.property === U.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          $e.footerCell,
                          U.align === "right" ? $e.right : "",
                          U.align === "center" ? $e.center : ""
                        ].filter(Boolean).join(" "),
                        children: xe.map((ve, tt) => /* @__PURE__ */ I(
                          "div",
                          {
                            className: $e.footerValue,
                            children: [
                              ve.title ? `${ve.title}: ` : "",
                              bo(
                                Zc(mn, ve, or),
                                ve.format
                              )
                            ]
                          },
                          `${ve.property}-${ve.type}-${tt}`
                        ))
                      },
                      H
                    );
                  }),
                  Ot && /* @__PURE__ */ o("td", { className: $e.footerCell })
                ] }) })
              ]
            }
          ),
          ct.items.length === 0 && !ne && /* @__PURE__ */ o("div", { className: $e.empty, children: pe }),
          ne && /* @__PURE__ */ o("div", { className: $e.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Zr && /* @__PURE__ */ o(
      qo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: f,
        pageNumbersCount: g,
        showSummary: y,
        showPageSizeSelector: p,
        ariaLabel: `${he}${kn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: fe
      }
    )
  ] });
}
const qd = "_wrap_avqds_1", Kd = "_grid_avqds_7", Gd = "_stacked_avqds_13", Vd = "_item_avqds_19", Yd = "_empty_avqds_25", Cr = {
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
  const [g, m] = W(1), [y, p] = W(t), b = e.length, h = Math.max(1, Math.ceil(b / y)), _ = Math.min(Math.max(1, g), h), x = Oe(() => {
    const w = (_ - 1) * y;
    return e.slice(w, w + y);
  }, [e, _, y]), N = r ? Cr.grid : Cr.stacked;
  return /* @__PURE__ */ I(
    "div",
    {
      className: [Cr.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        l && s != null ? s : b === 0 ? c ?? /* @__PURE__ */ o("div", { className: Cr.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: x.map((w, C) => /* @__PURE__ */ o("div", { className: Cr.item, children: a ? a(w, C) : String(w) }, C)) }),
        /* @__PURE__ */ o(
          qo,
          {
            ariaLabel: `${f} Pagination`,
            pageNumber: _,
            pageSize: y,
            count: b,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: m,
            onPageSizeChange: (w) => {
              p(w), m(1);
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
}), Jd = "_textbox_oly89_1", Qd = "_invalid_oly89_37", eu = "_xs_oly89_44", tu = "_sm_oly89_50", nu = "_md_oly89_56", ru = "_lg_oly89_62", ou = "_xl_oly89_68", Do = {
  textbox: Jd,
  invalid: Qd,
  xs: eu,
  sm: tu,
  md: nu,
  lg: ru,
  xl: ou
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
), no = ls, su = "_checkbox_1bb6c_1", au = {
  checkbox: su
}, lu = at(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = oe(null);
    return we(() => {
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
}), cu = "_trigger_1jlxf_1", du = "_tooltip_1jlxf_7", uu = "_top_1jlxf_34", fu = "_right_1jlxf_40", _u = "_bottom_1jlxf_46", pu = "_left_1jlxf_52", hu = "_arrow_1jlxf_58", mu = "_floating_1jlxf_70", Un = {
  trigger: cu,
  tooltip: du,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: uu,
  right: fu,
  bottom: _u,
  left: pu,
  arrow: hu,
  floating: mu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, ro = 8;
function gu(e, t) {
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
  const s = lt(), l = oe(null), d = oe(null), u = oe(() => {
  }), [f, g] = W(!1), [m, y] = W(null), p = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, b = () => {
    p(), l.current = window.setTimeout(() => {
      l.current = null, g(!0);
    }, r);
  }, h = () => {
    p(), g(!1);
  };
  if (we(() => () => p(), []), we(() => {
    if (!f || a == null) return;
    const x = window.setTimeout(() => g(!1), a);
    return () => window.clearTimeout(x);
  }, [f, a]), we(() => {
    if (i || !f) return;
    const x = (N) => {
      N.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [i, f]), we(() => {
    if (!i) return;
    let x = null, N = null;
    const w = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, C = () => {
      w(), N = null, y(null);
    };
    u.current = C;
    const $ = (k) => {
      w(), N = k, x = window.setTimeout(() => {
        x = null, y(k);
      }, r);
    }, M = (k) => k instanceof Element ? k.closest(i) : null, T = (k) => {
      const v = M(k.target);
      !v || v === N || $(v);
    }, A = (k) => {
      const v = M(k.target);
      if (!v || v !== N) return;
      const O = k.relatedTarget;
      O instanceof Element && v.contains(O) || C();
    }, D = (k) => {
      k.key === "Escape" && C();
    }, E = () => C();
    return document.addEventListener("mouseover", T), document.addEventListener("mouseout", A), document.addEventListener("focusin", T), document.addEventListener("focusout", A), document.addEventListener("keydown", D), document.addEventListener("scroll", E, !0), window.addEventListener("resize", E), () => {
      w(), document.removeEventListener("mouseover", T), document.removeEventListener("mouseout", A), document.removeEventListener("focusin", T), document.removeEventListener("focusout", A), document.removeEventListener("keydown", D), document.removeEventListener("scroll", E, !0), window.removeEventListener("resize", E), N = null, y(null);
    };
  }, [i, r]), we(() => {
    if (!i || m === null || a == null) return;
    const x = window.setTimeout(() => u.current(), a);
    return () => window.clearTimeout(x);
  }, [i, m, a]), Wo(() => {
    const x = m;
    if (!x) return;
    const N = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [N, s].filter(Boolean).join(" ")
    ), () => {
      N == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", N);
    };
  }, [m, s]), Wo(() => {
    const x = d.current, N = m;
    !x || !N || Object.assign(
      x.style,
      gu(N.getBoundingClientRect(), n)
    );
  }, [m, n]), i)
    return m ? /* @__PURE__ */ I(
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
  const _ = Wt(t) ? os(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      f ? s : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ I(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: h,
        onFocus: b,
        onBlur: h,
        children: [
          _,
          f && /* @__PURE__ */ I(
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
const yu = "_dialog_1t7pw_1", bu = "_sm_1t7pw_104", xu = "_resizable_1t7pw_110", vu = "_md_1t7pw_113", wu = "_lg_1t7pw_117", ku = "_header_1t7pw_121", Nu = "_title_1t7pw_132", $u = "_description_1t7pw_139", Su = "_close_1t7pw_146", Ou = "_body_1t7pw_176", Eu = "_footer_1t7pw_188", bn = {
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
function Ta({
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
  showCloseButton: m = !0,
  showMask: y = !0,
  canClose: p,
  className: b
}) {
  const h = oe(null), _ = lt(), x = lt(), N = oe(t);
  we(() => {
    N.current = t;
  });
  const w = oe(p);
  we(() => {
    w.current = p;
  });
  const C = oe(u);
  we(() => {
    C.current = u;
  });
  const $ = oe(!1), M = oe(!1), T = F(() => {
    if ($.current) return;
    const E = w.current?.();
    if (E instanceof Promise) {
      E.then((k) => {
        k && !$.current && ($.current = !0, N.current());
      });
      return;
    }
    E !== !1 && ($.current = !0, N.current());
  }, []), A = F(() => {
    if (M.current) {
      M.current = !1;
      return;
    }
    N.current();
  }, []), D = F(
    (E) => {
      if (E.key !== "Tab" || !h.current) return;
      const k = Array.from(
        h.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (O) => O.offsetWidth > 0 || O.offsetHeight > 0 || O === document.activeElement
      );
      if (k.length === 0) {
        E.preventDefault();
        return;
      }
      const v = k.indexOf(document.activeElement);
      if (E.shiftKey) {
        if (v <= 0) {
          E.preventDefault();
          const O = k[k.length - 1];
          O && O.focus();
        }
      } else if (v === -1 || v === k.length - 1) {
        E.preventDefault();
        const O = k[0];
        O && O.focus();
      }
    },
    []
  );
  return we(() => {
    const E = h.current;
    if (E)
      if (e && !E.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        E.showModal(), (E.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? E.querySelector("button"))?.focus();
        const O = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const z = (L) => {
          L.preventDefault(), C.current && T();
        };
        return E.addEventListener("cancel", z), () => {
          E.removeEventListener("cancel", z), document.body.style.overflow = O, k?.focus({ preventScroll: !0 });
        };
      } else !e && E.open && (M.current = $.current, $.current = !1, E.close());
  }, [e, T]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ I(
    "dialog",
    {
      ref: h,
      className: [
        bn.dialog,
        bn[c],
        f ? bn.resizable : null,
        g ? bn[`side-${g}`] : null,
        y === !1 ? bn["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: A,
      onClick: (E) => {
        E.target === h.current && d && T();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ I("header", { className: bn.header, children: [
          /* @__PURE__ */ I("div", { children: [
            /* @__PURE__ */ o("h2", { id: _, className: bn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: x, className: bn.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: bn.close,
              onClick: () => {
                T();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: bn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: bn.footer, children: i })
      ]
    }
  );
}
const Mu = "_typography_1jy8x_1", Tu = "_h1_1jy8x_39", Cu = "_h2_1jy8x_45", Au = "_h3_1jy8x_51", Du = "_h4_1jy8x_57", Iu = "_h5_1jy8x_63", Lu = "_h6_1jy8x_69", zu = "_button_1jy8x_99", Ru = "_caption_1jy8x_106", Pu = "_overline_1jy8x_112", Io = {
  typography: Mu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Tu,
  h2: Cu,
  h3: Au,
  h4: Du,
  h5: Iu,
  h6: Lu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: zu,
  caption: Ru,
  overline: Pu,
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
}, Ca = at(function({
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
        Io.typography,
        Io[Bu[t]],
        r ? Io[Hu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Aa = lr(null);
function Z$() {
  const e = Bn(Aa);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function J$({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = oe(0), i = () => (a.current += 1, a.current), c = oe([]);
  c.current = t;
  const s = (g) => {
    const m = c.current[0];
    m && (m.kind === "confirm" ? m.resolve(!!g) : m.kind === "alert" ? m.resolve() : m.resolve(g), n((y) => y.slice(1)));
  }, l = Oe(
    () => ({
      confirm: (g = {}) => new Promise((m) => {
        n((y) => [
          ...y,
          { seq: i(), kind: "confirm", options: g, resolve: m }
        ]);
      }),
      alert: (g = {}) => new Promise((m) => {
        n((y) => [
          ...y,
          { seq: i(), kind: "alert", options: g, resolve: m }
        ]);
      }),
      open: (g = {}) => new Promise((m) => {
        n((y) => [
          ...y,
          { seq: i(), kind: "custom", options: g, resolve: m }
        ]);
      }),
      openSide: ({ position: g, showMask: m = !0, ...y }) => new Promise((p) => {
        n((b) => [
          ...b,
          {
            seq: i(),
            kind: "custom",
            options: { ...y, side: g, showMask: m },
            resolve: p
          }
        ]);
      }),
      close: (g) => s(g),
      closeAll: () => {
        n((g) => (g.forEach((m) => {
          m.kind === "confirm" ? m.resolve(!1) : m.kind === "alert" ? m.resolve() : m.resolve(void 0);
        }), []));
      },
      refresh: () => r((g) => g + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), d = t[0];
  function u(g) {
    d && (d.kind === "confirm" ? d.resolve(!!g) : d.kind === "alert" ? d.resolve() : d.resolve(g), n((m) => m.slice(1)));
  }
  const f = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ I(Aa.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ta,
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
        footer: d?.kind === "confirm" ? /* @__PURE__ */ I(rt, { children: [
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
        children: d?.kind === "custom" ? f?.content : d?.options.message != null && /* @__PURE__ */ o(Ca, { textStyle: "body1", children: d.options.message })
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
}, Da = lr(null);
function Q$() {
  const e = Bn(Da);
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
  const [i, c] = W([]), [s, l] = W(!1), d = oe([]), u = oe(/* @__PURE__ */ new Map()), f = oe(!1), g = oe(0), m = (v) => {
    f.current = v, l(v);
  }, y = F((v) => {
    const O = u.current.get(v);
    O && (window.clearTimeout(O.timeoutId), O.remaining = Math.max(
      0,
      O.remaining - (Date.now() - O.startedAt)
    ));
  }, []), p = F((v) => {
    const O = u.current.get(v);
    O && (window.clearTimeout(O.timeoutId), u.current.delete(v));
  }, []), b = F(
    (v) => {
      p(v), c((O) => {
        const z = O.filter((L) => L.id !== v);
        return d.current = z, z;
      });
    },
    [p]
  ), h = F(
    (v) => {
      const O = d.current.find((z) => z.id === v);
      !O || O.leaving || (O.onAutoClose?.(), b(v));
    },
    [b]
  ), _ = F(
    (v) => {
      const O = u.current.get(v);
      !O || O.remaining <= 0 || (O.startedAt = Date.now(), O.timeoutId = window.setTimeout(() => h(v), O.remaining));
    },
    [h]
  ), x = F(() => {
    f.current || u.current.forEach((v, O) => y(O)), m(!0);
  }, [y]), N = F(() => {
    u.current.forEach((v, O) => _(O)), m(!1);
  }, [_]);
  we(() => {
    if (!r) return;
    const v = () => {
      document.hidden ? x() : N();
    };
    return document.addEventListener("visibilitychange", v), () => document.removeEventListener("visibilitychange", v);
  }, [r, x, N]);
  const w = F(
    (v) => {
      const O = d.current.find((z) => z.id === v);
      !O || O.leaving || (O.onDismiss?.(), c((z) => {
        const L = z.map(
          (P) => P.id === v ? { ...P, leaving: !0 } : P
        );
        return d.current = L, L;
      }), window.setTimeout(() => b(v), lf));
    },
    [b]
  ), C = F(
    (v) => {
      if (v.durationMs <= 0) return;
      const O = {
        remaining: v.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(v.id, O), f.current || _(v.id);
    },
    [_]
  ), $ = F(
    (v) => {
      const O = d.current.find((L) => L.id === v.id), z = {
        id: v.id ?? ++g.current,
        title: v.title,
        description: v.description,
        severity: v.severity ?? "info",
        durationMs: v.durationMs ?? t,
        action: v.action,
        cancel: v.cancel,
        dismissible: v.dismissible ?? !0,
        closeOnClick: v.closeOnClick ?? !1,
        payload: v.payload,
        click: v.click,
        showProgress: v.showProgress ?? !1,
        position: v.position ?? n,
        onDismiss: v.onDismiss,
        onAutoClose: v.onAutoClose
      };
      c((L) => {
        const P = O ? L.map(
          (B) => B.id === z.id ? { ...z, leaving: !1 } : B
        ) : [...L, z];
        return d.current = P, P;
      }), O && p(z.id), C(z);
    },
    [t, n, C, p]
  ), M = F(
    (v) => {
      $({
        severity: v.severity ?? "info",
        title: v.summary ?? v.summaryContent,
        description: v.detail ?? v.detailContent,
        durationMs: v.duration,
        click: v.click,
        closeOnClick: v.closeOnClick,
        payload: v.payload
      });
    },
    [$]
  ), T = F(
    (v) => (O, z) => M({ severity: v, summary: O, detail: z }),
    [M]
  ), A = Oe(
    () => ({
      toast: $,
      notify: M,
      notifyInfo: T("info"),
      notifySuccess: T("success"),
      notifyWarning: T("warning"),
      notifyError: T("danger")
    }),
    [$, M, T]
  ), D = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((v) => v.position)])),
    [n, i]
  ), E = r ? x : void 0, k = r ? N : void 0;
  return /* @__PURE__ */ I(Da.Provider, { value: A, children: [
    e,
    D.map((v) => /* @__PURE__ */ o(
      "div",
      {
        className: [tn.viewport, tn[cf[v]], a].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: E,
        onMouseLeave: k,
        children: i.filter((O) => O.position === v).map((O) => /* @__PURE__ */ I(
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
              O.click?.(O.payload), O.closeOnClick && w(O.id);
            } : void 0,
            children: [
              /* @__PURE__ */ I("div", { className: tn.content, children: [
                /* @__PURE__ */ o("div", { className: tn.title, children: O.title }),
                O.description && /* @__PURE__ */ o("div", { className: tn.description, children: O.description }),
                (O.action || O.cancel) && /* @__PURE__ */ I("div", { className: tn.actions, children: [
                  O.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: tn.action,
                      onClick: () => {
                        O.action?.onClick?.(), w(O.id);
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
                        O.cancel?.onClick?.(), w(O.id);
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
                  onClick: () => w(O.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
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
        ))
      },
      v
    ))
  ] });
}
const df = "_navigator_848v2_3", uf = "_track_848v2_9", ff = "_spark_848v2_19", _f = "_window_848v2_28", pf = "_handle_848v2_37", Wn = {
  navigator: df,
  track: uf,
  spark: ff,
  window: _f,
  handle: pf
};
function Cs(e, t, n, r, a) {
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
    () => r && Cs(
      r.start,
      r.end,
      e,
      t,
      c
    ) || {
      start: e,
      end: t
    }
  ), g = d && n ? n : u, m = oe(null), y = oe(null), p = F(
    (M) => {
      const T = Cs(M.start, M.end, e, t, c);
      d || f(T), a?.(T);
    },
    [d, e, t, c, a]
  ), b = F(
    (M) => {
      const T = y.current;
      if (!T) return e;
      const A = T.getBoundingClientRect(), D = A.width > 0 ? (M - A.left) / A.width : 0;
      return e + Math.max(0, Math.min(1, D)) * (t - e || 1);
    },
    [e, t]
  ), h = F(
    (M) => (Math.max(e, Math.min(t, M)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  we(() => {
    const M = (A) => {
      const D = m.current;
      if (!D) return;
      const E = b(A.clientX);
      if (D.mode === "start") p({ start: E, end: g.end });
      else if (D.mode === "end") p({ start: g.start, end: E });
      else {
        const k = g.end - g.start, v = E - D.grabOffset;
        p({ start: v, end: v + k });
      }
    }, T = () => {
      m.current = null;
    };
    return document.addEventListener("pointermove", M), document.addEventListener("pointerup", T), () => {
      document.removeEventListener("pointermove", M), document.removeEventListener("pointerup", T);
    };
  }, [p, b, g]);
  const _ = (M) => (T) => {
    T.preventDefault(), T.target.focus?.(), m.current = { mode: M, grabOffset: 0 };
  }, x = (M) => {
    const T = b(M.clientX);
    if (T >= g.start && T <= g.end)
      m.current = { mode: "pan", grabOffset: T - g.start };
    else {
      const A = Math.abs(T - g.start), D = Math.abs(T - g.end);
      A <= D ? p({ start: T, end: g.end }) : p({ start: g.start, end: T });
    }
  }, N = (t - e || 1) / 100, w = (M) => (T) => {
    const A = T.shiftKey ? N * 10 : N;
    T.key === "ArrowLeft" || T.key === "ArrowDown" ? (T.preventDefault(), p(
      M === "start" ? { start: g.start - A, end: g.end } : { start: g.start, end: g.end - A }
    )) : T.key === "ArrowRight" || T.key === "ArrowUp" ? (T.preventDefault(), p(
      M === "start" ? { start: g.start + A, end: g.end } : { start: g.start, end: g.end + A }
    )) : T.key === "Home" ? (T.preventDefault(), p(
      M === "start" ? { start: e, end: g.end } : { start: g.start, end: t }
    )) : T.key === "End" && (T.preventDefault(), p(
      M === "start" ? { start: g.end - c, end: g.end } : { start: g.start, end: t }
    ));
  }, C = h(g.start), $ = Math.max(0, h(g.end) - C);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ I("div", { ref: y, className: Wn.track, onPointerDown: x, children: [
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
                points: i.map((M, T) => {
                  const A = T / (i.length - 1) * 100, D = Math.max(...i), E = Math.min(...i), k = D === E ? 12 : 22 - (M - E) / (D - E) * 20;
                  return `${A},${k}`;
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
            "aria-valuenow": Math.round(g.start * 100) / 100,
            className: [Wn.handle, Wn.handleStart].filter(Boolean).join(" "),
            style: { left: `${C}%` },
            onPointerDown: _("start"),
            onKeyDown: w("start")
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
            style: { left: `${C + $}%` },
            onPointerDown: _("end"),
            onKeyDown: w("end")
          }
        )
      ] })
    }
  );
}
const hf = "_gauge_pyq6q_3", mf = "_value_pyq6q_11", gf = "_tick_pyq6q_16", Rn = {
  gauge: hf,
  value: mf,
  tick: gf
}, oo = 150, As = 240;
function Ds(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Is(e, t, n, r, a) {
  const [i, c] = Ds(e, t, n, r), [s, l] = Ds(e, t, n, a), d = a - r > 180 ? 1 : 0;
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
  const f = n - t || 1, g = Math.max(0, Math.min(1, (e - t) / f)), m = "var(--dx-border-color)", y = a ?? "var(--dx-primary-color)", p = 100, b = 96, h = 80, _ = oo + As * g;
  return /* @__PURE__ */ I(
    "div",
    {
      role: "meter",
      "aria-label": d,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, u].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ I("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Is(p, b, h, oo, oo + As),
              fill: "none",
              stroke: m,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          g > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Is(p, b, h, oo, _),
              fill: "none",
              stroke: yf(g, i, y),
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
function vr(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Ls(e, t, n, r, a) {
  const [i, c] = vr(e, t, n, r), [s, l] = vr(e, t, n, a), d = a - r > 180 ? 1 : 0;
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
  formatValue: f = (y) => String(Math.round(y * 100) / 100),
  ariaLabel: g = "Gauge",
  className: m
}) {
  const y = n - t || 1, p = (D) => Math.max(0, Math.min(1, (D - t) / y)), h = a - r >= 360 ? r + 359.999 : a, _ = (D) => r + (h - r) * p(D), x = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: w = 8, showLabels: C = !0 } = i, $ = 100, M = 100, T = 78, A = (D, E, k) => {
    const [v, O] = vr($, M, T - 14, _(D));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: $,
        y1: M,
        x2: v,
        y2: O,
        stroke: E,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, k);
  };
  return /* @__PURE__ */ I(
    "div",
    {
      role: "meter",
      "aria-label": g,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, m].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ I("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ls($, M, T, r, h),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((D, E) => /* @__PURE__ */ o(
            "path",
            {
              d: Ls(
                $,
                M,
                T,
                _(Math.max(t, D.from)),
                _(Math.min(n, D.to))
              ),
              fill: "none",
              stroke: D.color,
              strokeWidth: 12
            },
            `range-${E}`
          )),
          w > 0 && bf(t, n, w).map((D, E) => {
            const [k, v] = vr($, M, T - 10, _(D)), [O, z] = vr($, M, T - 16, _(D)), [L, P] = vr($, M, T - 26, _(D));
            return /* @__PURE__ */ I("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: k,
                  y1: v,
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
                  className: Rn.tick,
                  children: D
                }
              )
            ] }, E);
          }),
          A(e, x, "value"),
          s.map(
            (D, E) => A(D.value, D.color ?? x, `extra-${E}`)
          ),
          /* @__PURE__ */ o("circle", { cx: $, cy: M, r: 7, fill: x })
        ] }),
        u && /* @__PURE__ */ o("div", { className: Rn.value, children: f(e) })
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
  className: g
}) {
  const m = n - t || 1, y = r === "vertical", p = s ?? (y ? 220 : 280), { count: b = 5, showLabels: h = !0 } = a, _ = c ?? "var(--dx-primary-color)", x = "var(--dx-border-color)", N = 8, w = (A) => {
    const E = (Math.max(t, Math.min(n, A)) - t) / m;
    return y ? p - N - E * (p - N * 2) : N + E * (p - N * 2);
  }, C = () => b <= 0 ? null : xf(t, n, b).map((A, D) => {
    const E = w(A);
    return /* @__PURE__ */ I("g", { children: [
      y ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: E,
          x2: 0,
          y2: E,
          stroke: x,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: E,
          y1: -6,
          x2: E,
          y2: 0,
          stroke: x,
          strokeWidth: 1.5
        }
      ),
      h && (y ? /* @__PURE__ */ o("text", { x: -10, y: E + 4, textAnchor: "end", className: Rn.tick, children: A }) : /* @__PURE__ */ o("text", { x: E, y: -10, textAnchor: "middle", className: Rn.tick, children: A }))
    ] }, D);
  }), $ = () => i.map((A, D) => {
    const E = w(A.from), k = w(A.to), v = Math.min(E, k), O = Math.abs(k - E);
    return y ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: v,
        width: l,
        height: O,
        fill: A.color,
        opacity: 0.35
      },
      D
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: v,
        y: -l / 2,
        width: O,
        height: l,
        fill: A.color,
        opacity: 0.35
      },
      D
    );
  }), M = w(e), T = /* @__PURE__ */ I("g", { children: [
    $(),
    y ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: N,
        width: l,
        height: p - N * 2,
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
        width: p - N * 2,
        height: l,
        rx: l / 2,
        fill: "none",
        stroke: x,
        strokeWidth: 2
      }
    ),
    y ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: M,
        width: l,
        height: p - N - M,
        rx: l / 2,
        fill: _
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: Math.max(0, M - N),
        height: l,
        rx: l / 2,
        fill: _
      }
    ),
    y ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${M} L ${-l / 2 - 2} ${M - 5} L ${-l / 2 - 2} ${M + 5} Z`,
        fill: _
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${M} ${-l / 2 - 10} L ${M - 5} ${-l / 2 - 2} L ${M + 5} ${-l / 2 - 2} Z`,
        fill: _
      }
    ),
    C()
  ] });
  return /* @__PURE__ */ I(
    "div",
    {
      role: "meter",
      "aria-label": f,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, g].filter(Boolean).join(" "),
      children: [
        y ? /* @__PURE__ */ o(
          "svg",
          {
            width: l + 64,
            height: p + 8,
            viewBox: `${-l / 2 - 56} -16 ${l + 64} ${p + 24}`,
            "aria-hidden": "true",
            children: T
          }
        ) : /* @__PURE__ */ o(
          "svg",
          {
            width: p,
            height: l + 48,
            viewBox: `0 -24 ${p} ${l + 56}`,
            "aria-hidden": "true",
            children: T
          }
        ),
        d && /* @__PURE__ */ o("div", { className: Rn.value, children: u(e) })
      ]
    }
  );
}
const vf = "_chat_1apnf_3", wf = "_messages_1apnf_9", kf = "_message_1apnf_9", Nf = "_user_1apnf_29", $f = "_assistant_1apnf_35", Sf = "_system_1apnf_40", Of = "_typing_1apnf_46", Ef = "_inputRow_1apnf_51", ur = {
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
  const [f, g] = W(""), m = l || d, y = f.trim().length > 0 && !m, p = (h) => {
    h.preventDefault();
    const _ = f.trim();
    !_ || m || (g(""), t?.(_));
  }, b = /* @__PURE__ */ I("form", { className: ur.inputRow, onSubmit: (h) => {
    p(h);
  }, children: [
    /* @__PURE__ */ o(
      ls,
      {
        value: f,
        placeholder: n,
        "aria-label": a,
        disabled: m,
        onChange: (h) => g(h.target.value)
      }
    ),
    /* @__PURE__ */ o(cn, { type: "submit", disabled: !y, loading: l, children: r })
  ] });
  return /* @__PURE__ */ I(
    "div",
    {
      className: [ur.chat, u].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ I("div", { className: ur.messages, children: [
          e.map(
            (h, _) => c ? /* @__PURE__ */ o("div", { children: c(h, _) }, _) : /* @__PURE__ */ o(
              "div",
              {
                className: [ur.message, ur[h.role]].filter(Boolean).join(" "),
                children: h.content
              },
              _
            )
          ),
          l && /* @__PURE__ */ o("div", { className: ur.typing, children: "…" })
        ] }),
        s ? s(b) : b
      ]
    }
  );
}
const Mf = "_wrapper_1ulz6_1", Tf = "_input_1ulz6_8", Cf = "_invalid_1ulz6_38", Af = "_toggle_1ulz6_45", Df = "_xs_1ulz6_80", If = "_sm_1ulz6_86", Lf = "_md_1ulz6_92", zf = "_lg_1ulz6_98", Rf = "_xl_1ulz6_104", Ar = {
  wrapper: Mf,
  input: Tf,
  invalid: Cf,
  toggle: Af,
  xs: Df,
  sm: If,
  md: Lf,
  lg: zf,
  xl: Rf
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
      /* @__PURE__ */ I("div", { className: Ar.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: d ? "text" : "password",
            disabled: a,
            className: [
              Ar.input,
              Ar[t],
              n ? Ar.invalid : null,
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
            className: Ar.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ o(De, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), jf = "_login_30qie_3", Bf = "_title_30qie_9", Ff = "_remember_30qie_14", Hf = "_link_30qie_21", Dr = {
  login: jf,
  title: Bf,
  remember: Ff,
  link: Hf
}, is = "dx-login-username";
function Uf(e) {
  const t = e === void 0 ? is : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Wf(e, t) {
  const n = e === void 0 ? is : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function qf(e) {
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
  passwordLabel: f = "Password",
  submitText: g = "Sign in",
  storageKey: m,
  className: y
}) {
  const [p, b] = W(() => Uf(m) ?? ""), [h, _] = W(""), [x, N] = W(!1), [w, C] = W(!1), [$, M] = W({}), T = l || w, A = e != null && n == null, D = async (E) => {
    A || E.preventDefault();
    const k = {};
    if (p.trim() || (k.username = "Username is required."), h || (k.password = "Password is required."), M(k), !(k.username || k.password || !n)) {
      C(!0);
      try {
        await n({
          username: p.trim(),
          password: h,
          rememberMe: x
        }), x ? Wf(m, p.trim()) : qf(m);
      } finally {
        C(!1);
      }
    }
  };
  return /* @__PURE__ */ I(
    "form",
    {
      className: [Dr.login, y].filter(Boolean).join(" "),
      action: A ? e : void 0,
      method: A ? t : void 0,
      noValidate: !0,
      onSubmit: (E) => {
        D(E);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Dr.title, children: d }),
        /* @__PURE__ */ o(ar, { label: u, required: !0, error: $.username, children: ({ inputId: E }) => /* @__PURE__ */ o(
          ls,
          {
            id: E,
            value: p,
            autoComplete: "username",
            disabled: T,
            "aria-invalid": $.username ? !0 : void 0,
            onChange: (k) => {
              b(k.target.value), M((v) => ({ ...v, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ar, { label: f, required: !0, error: $.password, children: ({ inputId: E }) => /* @__PURE__ */ o(
          Pf,
          {
            id: E,
            value: h,
            autoComplete: "current-password",
            disabled: T,
            "aria-invalid": $.password ? !0 : void 0,
            onChange: (k) => {
              _(k.target.value), M((v) => ({ ...v, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ I("label", { className: Dr.remember, children: [
          /* @__PURE__ */ o(
            lu,
            {
              checked: x,
              disabled: T,
              onChange: (E) => N(E.target.checked)
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
            className: Dr.link,
            onClick: () => a?.(),
            children: c ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Dr.link,
            onClick: () => r?.(),
            children: i ?? "Create account"
          }
        )
      ]
    }
  );
}
function zs(e, t) {
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
    if (typeof e == "string") return zs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zs(e, t) : void 0;
  }
}
const Ia = Object.entries, Rs = Object.setPrototypeOf, Zf = Object.isFrozen, Jf = Object.getPrototypeOf, Qf = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, St = Object.seal, br = Object.create, La = typeof Reflect < "u" && Reflect, Ko = La.apply, Go = La.construct;
kt || (kt = function(t) {
  return t;
});
St || (St = function(t) {
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
const sr = yt(Array.prototype.forEach), e_ = yt(Array.prototype.lastIndexOf), Ps = yt(Array.prototype.pop), Ir = yt(Array.prototype.push), t_ = yt(Array.prototype.splice), wr = Array.isArray, qr = yt(String.prototype.toLowerCase), Lo = yt(String.prototype.toString), js = yt(String.prototype.match), Lr = yt(String.prototype.replace), Bs = yt(String.prototype.indexOf), n_ = yt(String.prototype.trim), r_ = yt(Number.prototype.toString), o_ = yt(Boolean.prototype.toString), Fs = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Hs = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), Vt = yt(Object.prototype.hasOwnProperty), zr = yt(Object.prototype.toString), Lt = yt(RegExp.prototype.test), qn = s_(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return Ko(e, t, r);
  };
}
function s_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Go(e, n);
  };
}
function We(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qr;
  if (Rs && Rs(e, null), !wr(t)) return e;
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
function a_(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = br(null);
  for (const r of Ia(e)) {
    var n = Yf(r, 2);
    const a = n[0], i = n[1];
    Vt(e, a) && (wr(i) ? t[a] = a_(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = sn(i) : t[a] = i);
  }
  return t;
}
function l_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return r_(e);
    case "boolean":
      return o_(e);
    case "bigint":
      return Fs ? Fs(e) : "0";
    case "symbol":
      return Hs ? Hs(e) : "Symbol()";
    case "undefined":
      return zr(e);
    case "function":
    case "object": {
      if (e === null) return zr(e);
      const t = e, n = pn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : zr(r);
      }
      return zr(e);
    }
    default:
      return zr(e);
  }
}
function pn(e, t) {
  for (; e !== null; ) {
    const r = Qf(e, t);
    if (r) {
      if (r.get) return yt(r.get);
      if (typeof r.value == "function") return yt(r.value);
    }
    e = Jf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function i_(e) {
  try {
    return Lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Us = kt([
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
]), zo = kt([
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
]), Ro = kt([
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
]), c_ = kt([
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
]), Po = kt([
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
]), d_ = kt([
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
]), Ws = kt(["#text"]), qs = kt([
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
]), jo = kt([
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
]), Ks = kt([
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
]), so = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), u_ = St(/{{[\w\W]*|^[\w\W]*}}/g), f_ = St(/<%[\w\W]*|^[\w\W]*%>/g), __ = St(/\${[\w\W]*/g), p_ = St(/^data-[\-\w.\u00B7-\uFFFF]+$/), h_ = St(/^aria-[\-\w]+$/), Gs = St(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), m_ = St(/^(?:\w+script|data):/i), g_ = St(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), y_ = St(/^html$/i), b_ = St(/^[a-z][.\w]*(-[.\w]+)+$/i), Vs = St(/<[/\w!]/g), Ys = St(/<[/\w]/g), x_ = St(/<\/no(script|embed|frames)/i), v_ = St(/\/>/i), nn = {
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
}, za = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], w_ = kt(We({}, za)), k_ = (function() {
  const e = {};
  return sr(za, (t) => {
    e[t] = St(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), N_ = function() {
  return typeof window > "u" ? null : window;
}, $_ = function(t, n) {
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
  return Vt(t, n) && wr(t[n]) ? We(a.base ? sn(a.base) : {}, t[n], a.transform) : r;
}, Bo = function(t, n, r) {
  const a = Vt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? sn(a) : r();
};
function Ra() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N_();
  const t = (le) => Ra(le);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = s.prototype, g = pn(f, "cloneNode"), m = pn(f, "remove"), y = pn(f, "removeAttributeNode"), p = pn(f, "nextSibling"), b = pn(f, "childNodes"), h = pn(f, "parentNode"), _ = pn(f, "shadowRoot"), x = pn(f, "attributes"), N = c && c.prototype ? pn(c.prototype, "nodeType") : null, w = c && c.prototype ? pn(c.prototype, "nodeName") : null, C = c && c.prototype ? pn(c.prototype, "ownerDocument") : null, $ = function(S) {
    return N ? N(S) : S.nodeType;
  }, M = function(S) {
    return w ? w(S) : S.nodeName;
  };
  if (typeof i == "function") {
    const le = n.createElement("template");
    le.content && le.content.ownerDocument && (n = le.content.ownerDocument);
  }
  let T, A = "", D, E = !1, k = 0;
  const v = function() {
    if (k > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, O = function(S) {
    v(), k++;
    try {
      return T.createHTML(S);
    } finally {
      k--;
    }
  }, z = function(S) {
    v(), k++;
    try {
      return T.createScriptURL(S);
    } finally {
      k--;
    }
  }, L = function() {
    return E || (D = $_(u, a), E = !0), D;
  }, P = n, B = P.implementation, Y = P.createNodeIterator, se = P.createDocumentFragment, Q = P.getElementsByTagName, be = r.importNode;
  let ne = Xs();
  t.isSupported = typeof Ia == "function" && typeof h == "function" && B && B.createHTMLDocument !== void 0;
  const pe = u_, G = f_, _e = __, ie = p_, he = h_, ue = m_, Se = g_, q = b_;
  let Ee = Gs, re = null;
  const Ae = We({}, [
    ...Us,
    ...zo,
    ...Ro,
    ...Po,
    ...Ws
  ]);
  let me = null;
  const Fe = We({}, [
    ...qs,
    ...jo,
    ...Ks,
    ...so
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
  })), Qe = null, Ct = null;
  const it = Object.seal(br(null, {
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
  let bt = !0, Z = !0, R = !1, X = !0, ee = !1, ye = !0, ce = !1, Me = !1, je = null, Je = null, et = !1, ot = !1, Zt = !1, ae = !1, ze = !0, Nt = !1;
  const Rt = "user-content-";
  let xt = !0, Ie = !1, qe = {}, vt = null;
  const Ot = We({}, [
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
  let ct = null;
  const V = We({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let ge = null;
  const Ve = We({}, [
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
  let K = Xe, te = !1, fe = null;
  const Ne = We({}, [
    Ye,
    Pt,
    Xe
  ], Lo), ke = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ce = We({}, ke);
  const Ke = kt(["annotation-xml"]);
  let Be = We({}, Ke);
  const dt = We({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let st = null;
  const Et = ["application/xhtml+xml", "text/html"], ht = "text/html";
  let Le = null, Mt = null;
  const Jt = n.createElement("form"), hn = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Tn = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mt && Mt === S) return;
    (!S || typeof S != "object") && (S = {}), S = sn(S), st = Et.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ht : S.PARSER_MEDIA_TYPE, Le = st === "application/xhtml+xml" ? Lo : qr, re = Kn(S, "ALLOWED_TAGS", Ae, { transform: Le }), me = Kn(S, "ALLOWED_ATTR", Fe, { transform: Le }), fe = Kn(S, "ALLOWED_NAMESPACES", Ne, { transform: Lo }), ge = Kn(S, "ADD_URI_SAFE_ATTR", Ve, {
      transform: Le,
      base: Ve
    }), ct = Kn(S, "ADD_DATA_URI_TAGS", V, {
      transform: Le,
      base: V
    }), vt = Kn(S, "FORBID_CONTENTS", Ot, { transform: Le }), Qe = Kn(S, "FORBID_TAGS", sn({}), { transform: Le }), Ct = Kn(S, "FORBID_ATTR", sn({}), { transform: Le }), qe = Vt(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? sn(S.USE_PROFILES) : S.USE_PROFILES : !1, bt = S.ALLOW_ARIA_ATTR !== !1, Z = S.ALLOW_DATA_ATTR !== !1, R = S.ALLOW_UNKNOWN_PROTOCOLS || !1, X = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = S.SAFE_FOR_TEMPLATES || !1, ye = S.SAFE_FOR_XML !== !1, ce = S.WHOLE_DOCUMENT || !1, ot = S.RETURN_DOM || !1, Zt = S.RETURN_DOM_FRAGMENT || !1, ae = S.RETURN_TRUSTED_TYPE || !1, et = S.FORCE_BODY || !1, ze = S.SANITIZE_DOM !== !1, Nt = S.SANITIZE_NAMED_PROPS || !1, xt = S.KEEP_CONTENT !== !1, Ie = S.IN_PLACE || !1, Ee = i_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Gs, K = typeof S.NAMESPACE == "string" ? S.NAMESPACE : Xe, Ce = Bo(S, "MATHML_TEXT_INTEGRATION_POINTS", () => We({}, ke)), Be = Bo(S, "HTML_INTEGRATION_POINTS", () => We({}, Ke));
    const j = Bo(S, "CUSTOM_ELEMENT_HANDLING", () => br(null));
    if (Ge = br(null), Vt(j, "tagNameCheck") && hn(j.tagNameCheck) && (Ge.tagNameCheck = j.tagNameCheck), Vt(j, "attributeNameCheck") && hn(j.attributeNameCheck) && (Ge.attributeNameCheck = j.attributeNameCheck), Vt(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), St(Ge), ee && (Z = !1), Zt && (ot = !0), qe && (re = We({}, Ws), me = br(null), qe.html === !0 && (We(re, Us), We(me, qs)), qe.svg === !0 && (We(re, zo), We(me, jo), We(me, so)), qe.svgFilters === !0 && (We(re, Ro), We(me, jo), We(me, so)), qe.mathMl === !0 && (We(re, Po), We(me, Ks), We(me, so))), it.tagCheck = null, it.attributeCheck = null, Vt(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? it.tagCheck = S.ADD_TAGS : wr(S.ADD_TAGS) && (re === Ae && (re = sn(re)), We(re, S.ADD_TAGS, Le))), Vt(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? it.attributeCheck = S.ADD_ATTR : wr(S.ADD_ATTR) && (me === Fe && (me = sn(me)), We(me, S.ADD_ATTR, Le))), Vt(S, "ADD_FORBID_CONTENTS") && wr(S.ADD_FORBID_CONTENTS) && (vt === Ot && (vt = sn(vt)), We(vt, S.ADD_FORBID_CONTENTS, Le)), xt && (re["#text"] = !0), ce && We(re, [
      "html",
      "head",
      "body"
    ]), re.table && (We(re, ["tbody"]), delete Qe.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = T;
      T = S.TRUSTED_TYPES_POLICY;
      try {
        A = O("");
      } catch (de) {
        throw T = J, de;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (T = void 0, A = "") : (T === void 0 && (T = L()), T && typeof A == "string" && (A = O("")));
    kt && kt(S), Mt = S;
  }, Fn = We({}, [
    ...zo,
    ...Ro,
    ...c_
  ]), kn = We({}, [...Po, ...d_]), Zr = function(S, j, J) {
    return j.namespaceURI === Xe ? S === "svg" : j.namespaceURI === Ye ? S === "svg" && (J === "annotation-xml" || Ce[J]) : !!Fn[S];
  }, So = function(S, j, J) {
    return j.namespaceURI === Xe ? S === "math" : j.namespaceURI === Pt ? S === "math" && Be[J] : !!kn[S];
  }, Oo = function(S, j, J) {
    return j.namespaceURI === Pt && !Be[J] || j.namespaceURI === Ye && !Ce[J] ? !1 : !kn[S] && (dt[S] || !Fn[S]);
  }, Eo = function(S) {
    let j = h(S);
    (!j || !j.tagName) && (j = {
      namespaceURI: K,
      tagName: "template"
    });
    const J = qr(S.tagName), de = qr(j.tagName);
    return fe[S.namespaceURI] ? S.namespaceURI === Pt ? Zr(J, j, de) : S.namespaceURI === Ye ? So(J, j, de) : S.namespaceURI === Xe ? Oo(J, j, de) : !!(st === "application/xhtml+xml" && fe[S.namespaceURI]) : !1;
  }, mn = function(S) {
    Ir(t.removed, { element: S });
    try {
      h(S).removeChild(S);
    } catch {
      if (m(S), !h(S)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(S, j, J) {
    try {
      y(S, j);
    } catch {
      try {
        S.removeAttribute(J);
      } catch {
      }
    }
  }, gn = function(S) {
    H(S);
    const j = b(S);
    if (j) {
      const de = [];
      sr(j, (Te) => {
        Ir(de, Te);
      }), sr(de, (Te) => {
        try {
          m(Te);
        } catch {
        }
      });
    }
    const J = x(S);
    if (J) for (let de = J.length - 1; de >= 0; --de) {
      const Te = J[de], Pe = Te && Te.name;
      typeof Pe == "string" && Jr(S, Te, Pe);
    }
  }, jt = function(S, j, J) {
    if (!J) try {
      J = j.getAttributeNode(S);
    } catch {
      J = null;
    }
    Ir(t.removed, {
      attribute: J || null,
      from: j
    });
    try {
      J ? y(j, J) : j.removeAttribute(S);
    } catch {
      try {
        j.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (ot || Zt) try {
        mn(j);
      } catch {
      }
      else try {
        j.setAttribute(S, "");
      } catch {
      }
  }, Nr = function(S) {
    const j = x(S);
    if (j)
      for (let J = j.length - 1; J >= 0; --J) {
        const de = j[J], Te = de && de.name;
        typeof Te != "string" || me[Le(Te)] || Jr(S, de, Te);
      }
  }, H = function(S) {
    const j = [S];
    for (; j.length > 0; ) {
      const J = j.pop();
      $(J) === nn.element && Nr(J);
      const de = b(J);
      if (de) for (let Te = de.length - 1; Te >= 0; --Te) j.push(de[Te]);
    }
  }, U = function(S, j) {
    return ye ? S === "patchsrc" ? !0 : S === "for" && j !== "label" && j !== "output" : !1;
  }, xe = function(S) {
    if (!ye) return;
    const j = [S];
    for (; j.length > 0; ) {
      const J = j.pop(), de = $(J);
      if (de === nn.processingInstruction || de === nn.comment && Lt(Ys, J.data)) {
        try {
          m(J);
        } catch {
        }
        continue;
      }
      if (de === nn.element) {
        const Pe = J, He = Le(M(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = b(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) j.push(Te[Pe]);
    }
  }, ve = function(S) {
    let j = null, J = null;
    if (et) S = "<remove></remove>" + S;
    else {
      const Pe = js(S, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    st === "application/xhtml+xml" && K === Xe && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const de = T ? O(S) : S;
    if (K === Xe) try {
      j = new d().parseFromString(de, st);
    } catch {
    }
    if (!j || !j.documentElement) {
      j = B.createDocument(K, "template", null);
      try {
        j.documentElement.innerHTML = te ? A : de;
      } catch {
      }
    }
    const Te = j.body || j.documentElement;
    return S && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), K === Xe ? Q.call(j, ce ? "html" : "body")[0] : ce ? j.documentElement : Te;
  }, tt = function(S) {
    const j = C ? C(S) : S.ownerDocument;
    return Y.call(j || S, S, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, At = function(S) {
    return S = Lr(S, pe, " "), S = Lr(S, G, " "), S = Lr(S, _e, " "), S;
  }, wt = function(S) {
    var j;
    S.normalize();
    const J = C ? C(S) : S.ownerDocument, de = Y.call(J || S, S, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = de.nextNode();
    for (; Te; )
      Te.data = At(Te.data), Te = de.nextNode();
    const Pe = (j = S.querySelectorAll) === null || j === void 0 ? void 0 : j.call(S, "template");
    Pe && sr(Pe, (He) => {
      Tt(He.content) && wt(He.content);
    });
  }, yn = function(S) {
    const j = w ? w(S) : null;
    return typeof j != "string" || Le(j) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || S.attributes !== x(S) || typeof S.removeAttribute != "function" || typeof S.removeAttributeNode != "function" || typeof S.getAttributeNode != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || S.nodeType !== N(S) || S.childNodes !== b(S);
  }, Tt = function(S) {
    if (!N || typeof S != "object" || S === null) return !1;
    try {
      return N(S) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, gt = function(S) {
    if (!N || typeof S != "object" || S === null) return !1;
    try {
      return typeof N(S) == "number";
    } catch {
      return !1;
    }
  };
  function Qt(le, S, j) {
    le.length !== 0 && sr(le, (J) => {
      J.call(t, S, j, Mt);
    });
  }
  const Mo = function(S, j) {
    return !!(ye && S.hasChildNodes() && !gt(S.firstElementChild) && Lt(Vs, S.textContent) && Lt(Vs, S.innerHTML) || ye && S.namespaceURI === Xe && w_[j] && (gt(S.firstElementChild) || typeof S.textContent == "string" && Lt(k_[j], S.textContent)) || S.nodeType === nn.processingInstruction || ye && S.nodeType === nn.comment && Lt(Ys, S.data));
  }, Qr = function(S, j) {
    if (S instanceof RegExp) return Lt(S, j);
    if (S instanceof Function) {
      for (var J = arguments.length, de = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) de[Te - 2] = arguments[Te];
      return !!S(j, ...de);
    }
    return !1;
  }, tl = function(S, j, J) {
    if (!Qe[j] && gs(j) && Qr(Ge.tagNameCheck, j)) return !1;
    if (xt && !vt[j]) {
      const de = h(S), Te = b(S);
      if (Te && de) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ut = S === J ? g(Te[He], !0) : Te[He];
          de.insertBefore(ut, p(S));
        }
      }
    }
    return mn(S), !0;
  }, ps = function(S, j, J, de) {
    return S.length === 0 ? j : j === J || j === de ? sn(j) : j;
  }, cr = function(S, j) {
    return S === j || h(S) !== null ? !1 : (Ie && H(S), !0);
  }, hs = function(S, j) {
    if (Qt(ne.beforeSanitizeElements, S, null), cr(S, j)) return !0;
    if (yn(S))
      return mn(S), !0;
    const J = Le(M(S));
    if (re = ps(ne.uponSanitizeElement, re, Ae, je), Qt(ne.uponSanitizeElement, S, {
      tagName: J,
      allowedTags: re
    }), cr(S, j)) return !0;
    if (Mo(S, J))
      return mn(S), !0;
    if (Qe[J] || !(it.tagCheck instanceof Function && it.tagCheck(J)) && !re[J]) {
      const de = tl(S, J, j);
      return de === !1 && (Qt(ne.afterSanitizeElements, S, null), cr(S, j)) ? !0 : de;
    }
    if ($(S) === nn.element && !Eo(S) || (J === "noscript" || J === "noembed" || J === "noframes") && Lt(x_, S.innerHTML))
      return mn(S), !0;
    if (ee && S.nodeType === nn.text) {
      const de = At(S.textContent);
      S.textContent !== de && (Ir(t.removed, { element: S.cloneNode() }), S.textContent = de);
    }
    return Qt(ne.afterSanitizeElements, S, null), cr(S, j);
  }, ms = function(S, j, J) {
    if (Ct[j] || U(j, S) || ze && (j === "id" || j === "name") && (J in n || J in Jt)) return !1;
    const de = me[j] || it.attributeCheck instanceof Function && it.attributeCheck(j, S);
    return Z && Lt(ie, j) || bt && Lt(he, j) ? !0 : de ? ge[j] || Lt(Ee, Lr(J, Se, "")) || (j === "src" || j === "xlink:href" || j === "href") && S !== "script" && Bs(J, "data:") === 0 && ct[S] || R && !Lt(ue, Lr(J, Se, "")) ? !0 : !J : gs(S) && Qr(Ge.tagNameCheck, S) && Qr(Ge.attributeNameCheck, j, S) || j === "is" && Ge.allowCustomizedBuiltInElements && Qr(Ge.tagNameCheck, J);
  }, nl = We({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), gs = function(S) {
    return !nl[qr(S)] && Lt(q, S);
  }, rl = function(S, j, J, de) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !J) switch (u.getAttributeType(S, j)) {
      case "TrustedHTML":
        return O(de);
      case "TrustedScriptURL":
        return z(de);
    }
    return de;
  }, ol = function(S, j, J, de) {
    try {
      return J ? S.setAttributeNS(J, j, de) : S.setAttribute(j, de), yn(S) ? (mn(S), !1) : !0;
    } catch {
      return jt(j, S), !1;
    }
  }, ys = function(S, j) {
    if (Qt(ne.beforeSanitizeAttributes, S, null), cr(S, j)) return;
    const J = S.attributes;
    if (!J || yn(S)) return;
    me = ps(ne.uponSanitizeAttribute, me, Fe, Je);
    const de = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = Le(S.nodeName);
    for (; Te--; ) {
      const He = J[Te], ut = He.name, dn = He.namespaceURI, en = He.value, dr = Le(ut), Co = en;
      let Bt = ut === "value" ? Co : n_(Co), bs = !1;
      if (de.attrName = dr, de.attrValue = Bt, de.keepAttr = !0, de.forceKeepAttr = void 0, Qt(ne.uponSanitizeAttribute, S, de), Bt = de.attrValue, Nt && (dr === "id" || dr === "name") && Bs(Bt, Rt) !== 0 && (jt(ut, S, He), Bt = Rt + Bt, bs = !0), ye && Lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ut, S, He);
        continue;
      }
      if (dr === "attributename" && js(Bt, "href")) {
        jt(ut, S, He);
        continue;
      }
      if (!de.forceKeepAttr) {
        if (!de.keepAttr) {
          jt(ut, S, He);
          continue;
        }
        if (!X && Lt(v_, Bt)) {
          jt(ut, S, He);
          continue;
        }
        if (ee && (Bt = At(Bt)), !ms(Pe, dr, Bt)) {
          jt(ut, S, He);
          continue;
        }
        Bt = rl(Pe, dr, dn, Bt), Bt !== Co && ol(S, ut, dn, Bt) && bs && Ps(t.removed);
      }
    }
    Qt(ne.afterSanitizeAttributes, S, null), cr(S, j);
  }, eo = function(S) {
    let j = null;
    const J = tt(S);
    for (Qt(ne.beforeSanitizeShadowDOM, S, null); j = J.nextNode(); )
      if (Qt(ne.uponSanitizeShadowNode, j, null), hs(j, S), ys(j, S), Tt(j.content) && eo(j.content), $(j) === nn.element) {
        const de = _(j);
        Tt(de) && (To(de), eo(de));
      }
    Qt(ne.afterSanitizeShadowDOM, S, null);
  }, To = function(S) {
    const j = [{
      node: S,
      shadow: null
    }];
    for (; j.length > 0; ) {
      const J = j.pop();
      if (J.shadow) {
        eo(J.shadow);
        continue;
      }
      const de = J.node, Te = $(de) === nn.element, Pe = b(de);
      if (Pe) for (let He = Pe.length - 1; He >= 0; --He) j.push({
        node: Pe[He],
        shadow: null
      });
      if (Te) {
        const He = w ? w(de) : null;
        if (typeof He == "string" && Le(He) === "template") {
          const ut = de.content;
          Tt(ut) && j.push({
            node: ut,
            shadow: null
          });
        }
      }
      if (Te) {
        const He = _(de);
        Tt(He) && j.push({
          node: null,
          shadow: He
        }, {
          node: He,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(le) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, J = null, de = null, Te = null;
    if (te = !le, te && (le = "<!-->"), typeof le != "string" && !gt(le) && (le = l_(le), typeof le != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return le;
    Me ? (re = je, me = Je) : Tn(S), (ne.uponSanitizeElement.length > 0 || ne.uponSanitizeAttribute.length > 0) && (re = sn(re)), ne.uponSanitizeAttribute.length > 0 && (me = sn(me)), t.removed = [];
    const Pe = Ie && typeof le != "string" && gt(le);
    if (Pe) {
      xe(le);
      const dn = M(le);
      if (typeof dn == "string") {
        const en = Le(dn);
        if (!re[en] || Qe[en])
          throw gn(le), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (yn(le))
        throw gn(le), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        To(le);
      } catch (en) {
        throw gn(le), en;
      }
    } else if (gt(le))
      j = ve("<!---->"), J = j.ownerDocument.importNode(le, !0), J.nodeType === nn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? j = J : j.appendChild(J), To(j);
    else {
      if (!ot && !ee && !ce && le.indexOf("<") === -1) return T && ae ? O(le) : le;
      if (j = ve(le), !j) return ot ? null : ae ? A : "";
    }
    j && et && mn(j.firstChild);
    const He = Pe ? le : j;
    try {
      const dn = tt(He);
      for (; de = dn.nextNode(); )
        hs(de, He), ys(de, He), Tt(de.content) && eo(de.content);
    } catch (dn) {
      throw Pe && (gn(le), sr(t.removed, (en) => {
        en.element && H(en.element);
      })), dn;
    }
    if (Pe) {
      let dn = !1;
      if (sr(t.removed, (en) => {
        en.element && (en.element === le && (dn = !0), H(en.element));
      }), dn) throw qn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ee && wt(le), le;
    }
    if (ot) {
      if (ee && wt(j), Zt)
        for (Te = se.call(j.ownerDocument); j.firstChild; ) Te.appendChild(j.firstChild);
      else Te = j;
      return (me.shadowroot || me.shadowrootmode) && (Te = be.call(r, Te, !0)), Te;
    }
    let ut = ce ? j.outerHTML : j.innerHTML;
    return ce && re["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Lt(y_, j.ownerDocument.doctype.name) && (ut = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + ut), ee && (ut = At(ut)), T && ae ? O(ut) : ut;
  }, t.setConfig = function() {
    let le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(le), Me = !0, je = re, Je = me;
  }, t.clearConfig = function() {
    Mt = null, Me = !1, je = null, Je = null, T = D, A = "";
  }, t.isValidAttribute = function(le, S, j) {
    Mt || Tn({});
    const J = Le(le), de = Le(S);
    return ms(J, de, j);
  }, t.addHook = function(le, S) {
    typeof S == "function" && Vt(ne, le) && Ir(ne[le], S);
  }, t.removeHook = function(le, S) {
    if (Vt(ne, le)) {
      if (S !== void 0) {
        const j = e_(ne[le], S);
        return j === -1 ? void 0 : t_(ne[le], j, 1)[0];
      }
      return Ps(ne[le]);
    }
  }, t.removeHooks = function(le) {
    Vt(ne, le) && (ne[le] = []);
  }, t.removeAllHooks = function() {
    ne = Xs();
  }, t;
}
var Pa = Ra();
function Gr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function S_(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ao = "\0";
function lo(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Gr(i)}</code>`), `${ao}${n.length - 1}${ao}`));
  return t || (r = Gr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, c) => {
      const s = S_(c);
      return s == null ? i : `<a href="${Gr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ao}(\\d+)${ao}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function O_(e, t = {}) {
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
      const p = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", b = [];
      for (c += 1; c < r.length; ) {
        const _ = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(_)) break;
        b.push(_), c += 1;
      }
      c += 1;
      const h = p ? ` class="language-${Gr(p)}"` : "";
      i.push(
        `<pre><code${h}>${Gr(b.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const p = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        p.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${p.map((b) => `<p>${lo(b, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(l.trim())) {
      i.push("<hr>"), c += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(l)) {
      const p = [];
      for (; c < r.length; ) {
        const h = /^\s*[-*+]\s+(.*)$/.exec(a(c))?.[1];
        if (h === void 0) break;
        p.push(h), c += 1;
      }
      s(p, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(l)) {
      const p = [];
      for (; c < r.length; ) {
        const h = /^\s*\d+[.)]\s+(.*)$/.exec(a(c))?.[1];
        if (h === void 0) break;
        p.push(h), c += 1;
      }
      s(p, !0);
      continue;
    }
    const y = [];
    for (; c < r.length && !/^\s*$/.test(a(c)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(c)
    ); )
      y.push(a(c)), c += 1;
    i.push(`<p>${lo(y.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const E_ = "_markdown_oj741_3", M_ = "_resize_oj741_61", Zs = {
  markdown: E_,
  resize: M_
};
function lS({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Oe(
    () => Pa.sanitize(O_(e, { allowHtml: t })),
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
const T_ = "_editor_2a7al_3", C_ = "_toolbar_2a7al_13", A_ = "_tool_2a7al_13", D_ = "_separator_2a7al_56", I_ = "_area_2a7al_63", L_ = "_source_2a7al_73", z_ = "_alignGlyph_2a7al_84", R_ = "_colorInput_2a7al_89", P_ = "_select_2a7al_98", $t = {
  editor: T_,
  toolbar: C_,
  tool: A_,
  separator: D_,
  area: I_,
  source: L_,
  alignGlyph: z_,
  colorInput: R_,
  select: P_
}, j_ = [
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
    glyph: /* @__PURE__ */ o("span", { className: $t.alignGlyph, style: { textAlign: "left" }, children: "≡" }),
    command: "justifyLeft"
  },
  justifyCenter: {
    label: "Align center",
    glyph: /* @__PURE__ */ o("span", { className: $t.alignGlyph, style: { textAlign: "center" }, children: "≡" }),
    command: "justifyCenter"
  },
  justifyRight: {
    label: "Align right",
    glyph: /* @__PURE__ */ o("span", { className: $t.alignGlyph, style: { textAlign: "right" }, children: "≡" }),
    command: "justifyRight"
  },
  justifyFull: {
    label: "Justify",
    glyph: /* @__PURE__ */ o("span", { className: $t.alignGlyph, style: { textAlign: "justify" }, children: "≡" }),
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
}, B_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], F_ = ["1", "2", "3", "4", "5", "6", "7"], H_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
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
function U_(e) {
  return Vo("formatBlock", `<${e}>`) || Vo("formatBlock", e);
}
function W_(e) {
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
    toolbar: i = j_,
    imageUpload: c,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: u,
    sanitize: f = !0
  }, g) {
    const [m, y] = W(!1), [p, b] = W(n), [h, _] = W(
      null
    ), [x, N] = W(""), [w, C] = W(""), [$, M] = W(2), [T, A] = W(2), [D, E] = W(!1), k = oe(null), v = oe(null), O = oe(n), z = F(
      (q) => f ? Pa.sanitize(q) : q,
      [f]
    );
    we(() => {
      const q = k.current;
      t !== void 0 && q && q.innerHTML !== t && (q.innerHTML = t), t !== void 0 && (O.current = t);
    }, [t]);
    const L = F(
      (q) => {
        O.current = z(q), r?.(O.current);
      },
      [z, r]
    ), P = F(
      (q, Ee) => {
        if (s || l) return !1;
        k.current?.focus();
        const re = Vo(q, Ee);
        if (re) {
          const Ae = k.current;
          Ae && L(Ae.innerHTML);
        }
        return re;
      },
      [L, s, l]
    ), B = F(
      () => k.current?.innerHTML ?? O.current,
      []
    ), Y = F(
      (q) => {
        P("insertHTML", q);
      },
      [P]
    ), se = F(() => {
      k.current?.focus();
    }, []), Q = Oe(
      () => ({
        execCommand: P,
        getHtml: B,
        insertHtml: Y,
        focus: se
      }),
      [P, B, Y, se]
    );
    ko(g, () => ({ execCommand: P, getHtml: B }), [
      P,
      B
    ]);
    const be = F(
      (q) => {
        const Ee = Js[q];
        !Ee || s || l || P(Ee.command);
      },
      [P, s, l]
    ), ne = F(() => {
      s || l || (m ? (y(!1), L(p)) : (b(k.current?.innerHTML ?? ""), y(!0)));
    }, [m, p, L, s, l]), pe = F(
      (q) => {
        if (!(q.ctrlKey || q.metaKey) || s || l) return;
        const Ee = q.key.toLowerCase(), re = Ee === "b" ? "bold" : Ee === "i" ? "italic" : Ee === "u" ? "underline" : null;
        re && (q.preventDefault(), be(re));
      },
      [be, s, l]
    ), G = F(() => {
      const q = k.current;
      q && L(q.innerHTML);
    }, [L]), _e = F(() => {
      x.trim() && (P("createLink", x.trim()), N(""), _(null));
    }, [x, P]), ie = F(() => {
      w.trim() && (P("insertImage", w.trim()), C(""), _(null));
    }, [w, P]), he = F(
      async (q) => {
        if (c) {
          E(!0);
          try {
            const Ee = new FormData();
            Ee.append(c.parameterName ?? "file", q);
            const re = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: Ee
            });
            if (!re.ok)
              throw new Error(`Upload failed: ${re.status}`);
            const me = (re.headers.get("content-type") ?? "").includes("application/json") ? await re.json() : await re.text(), Fe = (c.parseUrl ?? W_)(me);
            P("insertImage", Fe);
          } catch (Ee) {
            a?.(Ee instanceof Error ? Ee.message : "Image upload failed");
          } finally {
            E(!1), _(null);
          }
        }
      },
      [c, a, P]
    ), ue = F(() => {
      const q = Math.max(1, Math.min(10, Math.floor($) || 1)), Ee = Math.max(1, Math.min(10, Math.floor(T) || 1)), re = Array.from({ length: Ee }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: q }, () => `<tr>${re}</tr>`).join(
        ""
      );
      P("insertHTML", `<table><tbody>${Ae}</tbody></table>`), _(null);
    }, [$, T, P]), Se = (q, Ee) => {
      if (q === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: $t.separator
          },
          `sep-${Ee}`
        );
      if (typeof q == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $t.tool,
            "aria-label": q.label,
            title: q.title ?? q.label,
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && q.onExecute(Q);
            },
            children: q.glyph ?? q.label
          },
          q.id
        );
      if (q === "source")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $t.tool,
            "aria-label": "Source",
            "aria-pressed": m,
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: ne,
            children: "</>"
          },
          "source"
        );
      if (q === "foreColor" || q === "backgroundColor") {
        const Ae = q === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ I("label", { className: $t.tool, title: Ae, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: l,
              className: $t.colorInput,
              onMouseDown: (me) => me.preventDefault(),
              onChange: (me) => P(
                q === "foreColor" ? "foreColor" : "hiliteColor",
                me.target.value
              )
            }
          )
        ] }, q);
      }
      if (q === "formatBlock" || q === "fontName" || q === "fontSize") {
        const Ae = q === "formatBlock" ? "Format block" : q === "fontName" ? "Font name" : "Font size", me = q === "formatBlock" ? H_ : q === "fontName" ? B_ : F_;
        return /* @__PURE__ */ I(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: l,
            defaultValue: "",
            className: $t.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || s || l || (q === "formatBlock" ? U_(Fe.target.value) : P(q === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", disabled: !0, children: q === "formatBlock" ? "¶" : q === "fontName" ? "Aa" : "12" }),
              me.map((Fe) => /* @__PURE__ */ o("option", { value: Fe, children: Fe }, Fe))
            ]
          },
          q
        );
      }
      if (q === "link")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $t.tool,
            "aria-label": "Insert link",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (N(""), _("link"));
            },
            children: "🔗"
          },
          "link"
        );
      if (q === "image")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $t.tool,
            "aria-label": "Insert image",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (C(""), _("image"));
            },
            children: "🖼"
          },
          "image"
        );
      if (q === "table")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $t.tool,
            "aria-label": "Insert table",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (M(2), A(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const re = Js[q];
      return re ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: $t.tool,
          "aria-label": re.label,
          disabled: l,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => be(q),
          children: re.glyph
        },
        q
      ) : null;
    };
    return /* @__PURE__ */ I("div", { className: [$t.editor, u].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: $t.toolbar,
          children: i.map((q, Ee) => Se(q, Ee))
        }
      ),
      m ? /* @__PURE__ */ o(
        "textarea",
        {
          className: $t.source,
          "aria-label": `${d} source`,
          value: p,
          disabled: l,
          readOnly: s,
          onChange: (q) => {
            b(q.target.value), L(q.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: k,
          className: $t.area,
          contentEditable: !s && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: O.current },
          onInput: G,
          onKeyDown: pe
        }
      ),
      /* @__PURE__ */ I(
        Ta,
        {
          open: h !== null,
          onClose: () => _(null),
          title: h === "link" ? "Insert link" : h === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ I(rt, { children: [
            /* @__PURE__ */ o(cn, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            h === "link" && /* @__PURE__ */ o(cn, { onClick: _e, children: "Insert" }),
            h === "image" && /* @__PURE__ */ o(cn, { onClick: ie, disabled: D, children: "Insert" }),
            h === "table" && /* @__PURE__ */ o(cn, { onClick: ue, children: "Insert" })
          ] }),
          children: [
            h === "link" && /* @__PURE__ */ o(ar, { label: "URL", required: !0, children: ({ inputId: q }) => /* @__PURE__ */ o(
              no,
              {
                id: q,
                value: x,
                placeholder: "https://",
                onChange: (Ee) => N(Ee.target.value)
              }
            ) }),
            h === "image" && /* @__PURE__ */ I(rt, { children: [
              /* @__PURE__ */ o(ar, { label: "Image URL", children: ({ inputId: q }) => /* @__PURE__ */ o(
                no,
                {
                  id: q,
                  value: w,
                  placeholder: "https://",
                  onChange: (Ee) => C(Ee.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(ar, { label: "Or upload a file", children: ({ inputId: q }) => /* @__PURE__ */ o(
                "input",
                {
                  id: q,
                  ref: v,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: (Ee) => {
                    const re = Ee.target.files?.[0];
                    re && he(re), Ee.target.value = "";
                  }
                }
              ) }),
              D && /* @__PURE__ */ o(Ca, { textStyle: "body2", children: "Uploading…" })
            ] }),
            h === "table" && /* @__PURE__ */ I(rt, { children: [
              /* @__PURE__ */ o(ar, { label: "Rows", children: ({ inputId: q }) => /* @__PURE__ */ o(
                no,
                {
                  id: q,
                  type: "number",
                  value: String($),
                  onChange: (Ee) => M(Number(Ee.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ar, { label: "Columns", children: ({ inputId: q }) => /* @__PURE__ */ o(
                no,
                {
                  id: q,
                  type: "number",
                  value: String(T),
                  onChange: (Ee) => A(Number(Ee.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), q_ = "_popup_ve7kd_4", ja = {
  popup: q_
}, Ba = lr(null);
function cS() {
  const e = Bn(Ba);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Qs(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function K_({ state: e }) {
  const t = oe(null), [n, r] = W(null);
  return we(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), c = a.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - c.width)
    );
    let l = i.bottom + 4;
    l + c.height > window.innerHeight && i.top - 4 - c.height >= 0 && (l = i.top - 4 - c.height), r({ left: s, top: Math.max(0, l) });
  }, [e]), we(() => {
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
  const [t, n] = W(null), r = oe(0), a = oe(null), i = F(() => {
    a.current?.(), a.current = null;
  }, []), c = F(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = F(
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
  we(() => {
    if (!t) return;
    const d = (m) => {
      const y = document.querySelector(`.${ja.popup}`);
      y && !y.contains(m.target) && c();
    }, u = (m) => {
      m.key === "Escape" && (m.preventDefault(), c());
    }, f = () => c(), g = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", u, !0), window.addEventListener("resize", f), window.addEventListener("hashchange", g), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", u, !0), window.removeEventListener("resize", f), window.removeEventListener("hashchange", g);
    };
  }, [t, c]);
  const l = Oe(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ I(Ba.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(K_, { state: t }, t.seq)
  ] });
}
const G_ = "_alert_146r9_1", V_ = "_xs_146r9_28", Y_ = "_sm_146r9_38", X_ = "_lg_146r9_48", Z_ = "_xl_146r9_58", J_ = "_primary_146r9_69", Q_ = "_secondary_146r9_74", ep = "_light_146r9_79", tp = "_base_146r9_84", np = "_dark_146r9_89", rp = "_info_146r9_94", op = "_success_146r9_99", sp = "_warning_146r9_104", ap = "_danger_146r9_109", lp = "_flat_146r9_116", ip = "_outlined_146r9_123", cp = "_filled_146r9_132", dp = "_text_146r9_139", up = "_icon_146r9_181", fp = "_content_146r9_192", _p = "_title_146r9_197", pp = "_body_146r9_203", hp = "_dismiss_146r9_209", $n = {
  alert: G_,
  xs: V_,
  sm: Y_,
  lg: X_,
  xl: Z_,
  primary: J_,
  secondary: Q_,
  light: ep,
  base: tp,
  dark: np,
  info: rp,
  success: op,
  warning: sp,
  danger: ap,
  flat: lp,
  outlined: ip,
  filled: cp,
  text: dp,
  icon: up,
  content: fp,
  title: _p,
  body: pp,
  dismiss: hp,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, mp = {
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
  className: g,
  ...m
}) {
  const [y, p] = W(!1);
  if (u === !1 || u === void 0 && y)
    return null;
  const b = () => {
    u === void 0 && p(!0), d?.(), f?.(!1);
  }, h = e, _ = Na(t, "filled"), x = Vr(n), N = i ?? (c ? /* @__PURE__ */ o(De, { icon: mp[e] }) : null);
  return /* @__PURE__ */ I(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        $n.alert,
        $n[h],
        $n[_],
        x ? $n[x] : null,
        $n[r],
        g
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ o("span", { className: $n.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ I("div", { className: $n.content, children: [
          a && /* @__PURE__ */ o("div", { className: $n.title, children: a }),
          s && /* @__PURE__ */ o("div", { className: $n.body, children: s })
        ] }),
        l && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $n.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const gp = "_skeleton_1xyce_1", yp = "_text_1xyce_35", bp = "_circle_1xyce_40", xp = "_rect_1xyce_44", ea = {
  skeleton: gp,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: yp,
  circle: bp,
  rect: xp
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
function xo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const vp = "_row_juebr_1", wp = "_start_juebr_14", kp = "_center_juebr_18", Np = "_end_juebr_22", $p = "_stretch_juebr_26", Sp = "_baseline_juebr_30", Op = "_normal_juebr_34", Ep = "_noWrap_juebr_90", Mp = "_wrapReverse_juebr_94", io = {
  row: vp,
  start: wp,
  center: kp,
  end: Np,
  stretch: $p,
  baseline: Sp,
  normal: Op,
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
  noWrap: Ep,
  wrapReverse: Mp
};
function ta(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function _S({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...s
}) {
  const l = e != null ? xo(e) : null, d = t != null ? xo(t) : null, u = {
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
const Tp = "_column_sh0ss_1", Cp = "_Size1_sh0ss_15", Ap = "_Size2_sh0ss_24", Dp = "_Size3_sh0ss_33", Ip = "_Size4_sh0ss_42", Lp = "_Size5_sh0ss_51", zp = "_Size6_sh0ss_60", Rp = "_Size7_sh0ss_69", Pp = "_Size8_sh0ss_78", jp = "_Size9_sh0ss_87", Bp = "_Size10_sh0ss_96", Fp = "_Size11_sh0ss_105", Hp = "_Size12_sh0ss_114", Up = "_Offset0_sh0ss_119", Wp = "_Offset1_sh0ss_122", qp = "_Offset2_sh0ss_127", Kp = "_Offset3_sh0ss_132", Gp = "_Offset4_sh0ss_137", Vp = "_Offset5_sh0ss_142", Yp = "_Offset6_sh0ss_147", Xp = "_Offset7_sh0ss_152", Zp = "_Offset8_sh0ss_157", Jp = "_Offset9_sh0ss_162", Qp = "_Offset10_sh0ss_167", eh = "_Offset11_sh0ss_172", th = "_Offset12_sh0ss_177", nh = "_OrderFirst_sh0ss_182", rh = "_OrderLast_sh0ss_185", oh = "_Order0_sh0ss_188", sh = "_Order1_sh0ss_191", ah = "_Order2_sh0ss_194", lh = "_Order3_sh0ss_197", ih = "_Order4_sh0ss_200", ch = "_Order5_sh0ss_203", dh = "_Order6_sh0ss_206", uh = "_Order7_sh0ss_209", fh = "_Order8_sh0ss_212", _h = "_Order9_sh0ss_215", ph = "_Order10_sh0ss_218", hh = "_Order11_sh0ss_221", mh = "_Order12_sh0ss_224", gh = "_xsSize1_sh0ss_229", yh = "_xsSize2_sh0ss_238", bh = "_xsSize3_sh0ss_247", xh = "_xsSize4_sh0ss_256", vh = "_xsSize5_sh0ss_265", wh = "_xsSize6_sh0ss_274", kh = "_xsSize7_sh0ss_283", Nh = "_xsSize8_sh0ss_292", $h = "_xsSize9_sh0ss_301", Sh = "_xsSize10_sh0ss_310", Oh = "_xsSize11_sh0ss_321", Eh = "_xsSize12_sh0ss_332", Mh = "_xsOffset0_sh0ss_337", Th = "_xsOffset1_sh0ss_340", Ch = "_xsOffset2_sh0ss_345", Ah = "_xsOffset3_sh0ss_350", Dh = "_xsOffset4_sh0ss_355", Ih = "_xsOffset5_sh0ss_360", Lh = "_xsOffset6_sh0ss_365", zh = "_xsOffset7_sh0ss_370", Rh = "_xsOffset8_sh0ss_375", Ph = "_xsOffset9_sh0ss_380", jh = "_xsOffset10_sh0ss_385", Bh = "_xsOffset11_sh0ss_391", Fh = "_xsOffset12_sh0ss_397", Hh = "_xsOrderFirst_sh0ss_403", Uh = "_xsOrderLast_sh0ss_406", Wh = "_xsOrder0_sh0ss_409", qh = "_xsOrder1_sh0ss_412", Kh = "_xsOrder2_sh0ss_415", Gh = "_xsOrder3_sh0ss_418", Vh = "_xsOrder4_sh0ss_421", Yh = "_xsOrder5_sh0ss_424", Xh = "_xsOrder6_sh0ss_427", Zh = "_xsOrder7_sh0ss_430", Jh = "_xsOrder8_sh0ss_433", Qh = "_xsOrder9_sh0ss_436", em = "_xsOrder10_sh0ss_439", tm = "_xsOrder11_sh0ss_442", nm = "_xsOrder12_sh0ss_445", rm = "_smSize1_sh0ss_451", om = "_smSize2_sh0ss_460", sm = "_smSize3_sh0ss_469", am = "_smSize4_sh0ss_478", lm = "_smSize5_sh0ss_487", im = "_smSize6_sh0ss_496", cm = "_smSize7_sh0ss_505", dm = "_smSize8_sh0ss_514", um = "_smSize9_sh0ss_523", fm = "_smSize10_sh0ss_532", _m = "_smSize11_sh0ss_543", pm = "_smSize12_sh0ss_554", hm = "_smOffset0_sh0ss_559", mm = "_smOffset1_sh0ss_562", gm = "_smOffset2_sh0ss_567", ym = "_smOffset3_sh0ss_572", bm = "_smOffset4_sh0ss_577", xm = "_smOffset5_sh0ss_582", vm = "_smOffset6_sh0ss_587", wm = "_smOffset7_sh0ss_592", km = "_smOffset8_sh0ss_597", Nm = "_smOffset9_sh0ss_602", $m = "_smOffset10_sh0ss_607", Sm = "_smOffset11_sh0ss_613", Om = "_smOffset12_sh0ss_619", Em = "_smOrderFirst_sh0ss_625", Mm = "_smOrderLast_sh0ss_628", Tm = "_smOrder0_sh0ss_631", Cm = "_smOrder1_sh0ss_634", Am = "_smOrder2_sh0ss_637", Dm = "_smOrder3_sh0ss_640", Im = "_smOrder4_sh0ss_643", Lm = "_smOrder5_sh0ss_646", zm = "_smOrder6_sh0ss_649", Rm = "_smOrder7_sh0ss_652", Pm = "_smOrder8_sh0ss_655", jm = "_smOrder9_sh0ss_658", Bm = "_smOrder10_sh0ss_661", Fm = "_smOrder11_sh0ss_664", Hm = "_smOrder12_sh0ss_667", Um = "_mdSize1_sh0ss_673", Wm = "_mdSize2_sh0ss_682", qm = "_mdSize3_sh0ss_691", Km = "_mdSize4_sh0ss_700", Gm = "_mdSize5_sh0ss_709", Vm = "_mdSize6_sh0ss_718", Ym = "_mdSize7_sh0ss_727", Xm = "_mdSize8_sh0ss_736", Zm = "_mdSize9_sh0ss_745", Jm = "_mdSize10_sh0ss_754", Qm = "_mdSize11_sh0ss_765", e1 = "_mdSize12_sh0ss_776", t1 = "_mdOffset0_sh0ss_781", n1 = "_mdOffset1_sh0ss_784", r1 = "_mdOffset2_sh0ss_789", o1 = "_mdOffset3_sh0ss_794", s1 = "_mdOffset4_sh0ss_799", a1 = "_mdOffset5_sh0ss_804", l1 = "_mdOffset6_sh0ss_809", i1 = "_mdOffset7_sh0ss_814", c1 = "_mdOffset8_sh0ss_819", d1 = "_mdOffset9_sh0ss_824", u1 = "_mdOffset10_sh0ss_829", f1 = "_mdOffset11_sh0ss_835", _1 = "_mdOffset12_sh0ss_841", p1 = "_mdOrderFirst_sh0ss_847", h1 = "_mdOrderLast_sh0ss_850", m1 = "_mdOrder0_sh0ss_853", g1 = "_mdOrder1_sh0ss_856", y1 = "_mdOrder2_sh0ss_859", b1 = "_mdOrder3_sh0ss_862", x1 = "_mdOrder4_sh0ss_865", v1 = "_mdOrder5_sh0ss_868", w1 = "_mdOrder6_sh0ss_871", k1 = "_mdOrder7_sh0ss_874", N1 = "_mdOrder8_sh0ss_877", $1 = "_mdOrder9_sh0ss_880", S1 = "_mdOrder10_sh0ss_883", O1 = "_mdOrder11_sh0ss_886", E1 = "_mdOrder12_sh0ss_889", M1 = "_lgSize1_sh0ss_895", T1 = "_lgSize2_sh0ss_904", C1 = "_lgSize3_sh0ss_913", A1 = "_lgSize4_sh0ss_922", D1 = "_lgSize5_sh0ss_931", I1 = "_lgSize6_sh0ss_940", L1 = "_lgSize7_sh0ss_949", z1 = "_lgSize8_sh0ss_958", R1 = "_lgSize9_sh0ss_967", P1 = "_lgSize10_sh0ss_976", j1 = "_lgSize11_sh0ss_987", B1 = "_lgSize12_sh0ss_998", F1 = "_lgOffset0_sh0ss_1003", H1 = "_lgOffset1_sh0ss_1006", U1 = "_lgOffset2_sh0ss_1011", W1 = "_lgOffset3_sh0ss_1016", q1 = "_lgOffset4_sh0ss_1021", K1 = "_lgOffset5_sh0ss_1026", G1 = "_lgOffset6_sh0ss_1031", V1 = "_lgOffset7_sh0ss_1036", Y1 = "_lgOffset8_sh0ss_1041", X1 = "_lgOffset9_sh0ss_1046", Z1 = "_lgOffset10_sh0ss_1051", J1 = "_lgOffset11_sh0ss_1057", Q1 = "_lgOffset12_sh0ss_1063", eg = "_lgOrderFirst_sh0ss_1069", tg = "_lgOrderLast_sh0ss_1072", ng = "_lgOrder0_sh0ss_1075", rg = "_lgOrder1_sh0ss_1078", og = "_lgOrder2_sh0ss_1081", sg = "_lgOrder3_sh0ss_1084", ag = "_lgOrder4_sh0ss_1087", lg = "_lgOrder5_sh0ss_1090", ig = "_lgOrder6_sh0ss_1093", cg = "_lgOrder7_sh0ss_1096", dg = "_lgOrder8_sh0ss_1099", ug = "_lgOrder9_sh0ss_1102", fg = "_lgOrder10_sh0ss_1105", _g = "_lgOrder11_sh0ss_1108", pg = "_lgOrder12_sh0ss_1111", hg = "_xlSize1_sh0ss_1117", mg = "_xlSize2_sh0ss_1126", gg = "_xlSize3_sh0ss_1135", yg = "_xlSize4_sh0ss_1144", bg = "_xlSize5_sh0ss_1153", xg = "_xlSize6_sh0ss_1162", vg = "_xlSize7_sh0ss_1171", wg = "_xlSize8_sh0ss_1180", kg = "_xlSize9_sh0ss_1189", Ng = "_xlSize10_sh0ss_1198", $g = "_xlSize11_sh0ss_1209", Sg = "_xlSize12_sh0ss_1220", Og = "_xlOffset0_sh0ss_1225", Eg = "_xlOffset1_sh0ss_1228", Mg = "_xlOffset2_sh0ss_1233", Tg = "_xlOffset3_sh0ss_1238", Cg = "_xlOffset4_sh0ss_1243", Ag = "_xlOffset5_sh0ss_1248", Dg = "_xlOffset6_sh0ss_1253", Ig = "_xlOffset7_sh0ss_1258", Lg = "_xlOffset8_sh0ss_1263", zg = "_xlOffset9_sh0ss_1268", Rg = "_xlOffset10_sh0ss_1273", Pg = "_xlOffset11_sh0ss_1279", jg = "_xlOffset12_sh0ss_1285", Bg = "_xlOrderFirst_sh0ss_1291", Fg = "_xlOrderLast_sh0ss_1294", Hg = "_xlOrder0_sh0ss_1297", Ug = "_xlOrder1_sh0ss_1300", Wg = "_xlOrder2_sh0ss_1303", qg = "_xlOrder3_sh0ss_1306", Kg = "_xlOrder4_sh0ss_1309", Gg = "_xlOrder5_sh0ss_1312", Vg = "_xlOrder6_sh0ss_1315", Yg = "_xlOrder7_sh0ss_1318", Xg = "_xlOrder8_sh0ss_1321", Zg = "_xlOrder9_sh0ss_1324", Jg = "_xlOrder10_sh0ss_1327", Qg = "_xlOrder11_sh0ss_1330", ey = "_xlOrder12_sh0ss_1333", ty = "_xxSize1_sh0ss_1339", ny = "_xxSize2_sh0ss_1348", ry = "_xxSize3_sh0ss_1357", oy = "_xxSize4_sh0ss_1366", sy = "_xxSize5_sh0ss_1375", ay = "_xxSize6_sh0ss_1384", ly = "_xxSize7_sh0ss_1393", iy = "_xxSize8_sh0ss_1402", cy = "_xxSize9_sh0ss_1411", dy = "_xxSize10_sh0ss_1420", uy = "_xxSize11_sh0ss_1431", fy = "_xxSize12_sh0ss_1442", _y = "_xxOffset0_sh0ss_1447", py = "_xxOffset1_sh0ss_1450", hy = "_xxOffset2_sh0ss_1455", my = "_xxOffset3_sh0ss_1460", gy = "_xxOffset4_sh0ss_1465", yy = "_xxOffset5_sh0ss_1470", by = "_xxOffset6_sh0ss_1475", xy = "_xxOffset7_sh0ss_1480", vy = "_xxOffset8_sh0ss_1485", wy = "_xxOffset9_sh0ss_1490", ky = "_xxOffset10_sh0ss_1495", Ny = "_xxOffset11_sh0ss_1501", $y = "_xxOffset12_sh0ss_1507", Sy = "_xxOrderFirst_sh0ss_1513", Oy = "_xxOrderLast_sh0ss_1516", Ey = "_xxOrder0_sh0ss_1519", My = "_xxOrder1_sh0ss_1522", Ty = "_xxOrder2_sh0ss_1525", Cy = "_xxOrder3_sh0ss_1528", Ay = "_xxOrder4_sh0ss_1531", Dy = "_xxOrder5_sh0ss_1534", Iy = "_xxOrder6_sh0ss_1537", Ly = "_xxOrder7_sh0ss_1540", zy = "_xxOrder8_sh0ss_1543", Ry = "_xxOrder9_sh0ss_1546", Py = "_xxOrder10_sh0ss_1549", jy = "_xxOrder11_sh0ss_1552", By = "_xxOrder12_sh0ss_1555", co = {
  column: Tp,
  Size1: Cp,
  Size2: Ap,
  Size3: Dp,
  Size4: Ip,
  Size5: Lp,
  Size6: zp,
  Size7: Rp,
  Size8: Pp,
  Size9: jp,
  Size10: Bp,
  Size11: Fp,
  Size12: Hp,
  Offset0: Up,
  Offset1: Wp,
  Offset2: qp,
  Offset3: Kp,
  Offset4: Gp,
  Offset5: Vp,
  Offset6: Yp,
  Offset7: Xp,
  Offset8: Zp,
  Offset9: Jp,
  Offset10: Qp,
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
  Order9: _h,
  Order10: ph,
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
  xsOffset0: Mh,
  xsOffset1: Th,
  xsOffset2: Ch,
  xsOffset3: Ah,
  xsOffset4: Dh,
  xsOffset5: Ih,
  xsOffset6: Lh,
  xsOffset7: zh,
  xsOffset8: Rh,
  xsOffset9: Ph,
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
  smSize11: _m,
  smSize12: pm,
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
  smOrderLast: Mm,
  smOrder0: Tm,
  smOrder1: Cm,
  smOrder2: Am,
  smOrder3: Dm,
  smOrder4: Im,
  smOrder5: Lm,
  smOrder6: zm,
  smOrder7: Rm,
  smOrder8: Pm,
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
  mdOffset12: _1,
  mdOrderFirst: p1,
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
  lgSize1: M1,
  lgSize2: T1,
  lgSize3: C1,
  lgSize4: A1,
  lgSize5: D1,
  lgSize6: I1,
  lgSize7: L1,
  lgSize8: z1,
  lgSize9: R1,
  lgSize10: P1,
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
  lgOrder11: _g,
  lgOrder12: pg,
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
  xlOffset2: Mg,
  xlOffset3: Tg,
  xlOffset4: Cg,
  xlOffset5: Ag,
  xlOffset6: Dg,
  xlOffset7: Ig,
  xlOffset8: Lg,
  xlOffset9: zg,
  xlOffset10: Rg,
  xlOffset11: Pg,
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
  xxOffset0: _y,
  xxOffset1: py,
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
  xxOrder1: My,
  xxOrder2: Ty,
  xxOrder3: Cy,
  xxOrder4: Ay,
  xxOrder5: Dy,
  xxOrder6: Iy,
  xxOrder7: Ly,
  xxOrder8: zy,
  xxOrder9: Ry,
  xxOrder10: Py,
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
function pS({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [D, E, k, v] of Fy) {
    const O = n[E], z = n[k], L = n[v];
    if (O != null) {
      Hy(E, O);
      const P = co[`${D}Size${O}`];
      P && r.push(P);
    }
    if (z != null) {
      Uy(k, z);
      const P = co[`${D}Offset${z}`];
      P && r.push(P);
    }
    if (L != null) {
      const P = co[qy(D, L, v)];
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
    sizeLg: m,
    offsetLg: y,
    sizeXl: p,
    offsetXl: b,
    sizeXx: h,
    offsetXx: _,
    order: x,
    orderXs: N,
    orderSm: w,
    orderMd: C,
    orderLg: $,
    orderXl: M,
    orderXx: T,
    ...A
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: a,
      ...A
    }
  );
}
const Ky = "_stack_bmbbp_1", Rr = {
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
    ...r != null ? { gap: xo(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Rr.stack,
        Rr[`dir-${d}`],
        na(n) !== "wrap" ? Rr[`wrap-${na(n)}`] : null,
        a != null ? Rr[`align-${a}`] : null,
        i != null ? Rr[`justify-${i}`] : null,
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
    ...t != null ? { gap: xo(t) } : {},
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
}, r0 = "_footer_3be5w_1", o0 = "_sticky_3be5w_9", ra = {
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
      className: [ra.footer, e ? ra.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const a0 = "_header_1tw8b_1", l0 = "_sticky_1tw8b_9", oa = {
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
      className: [oa.header, e ? oa.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const c0 = "_sidebar_175d5_1", d0 = "_sticky_175d5_23", u0 = "_left_175d5_41", f0 = "_right_175d5_45", _0 = "_start_175d5_50", p0 = "_end_175d5_54", h0 = "_fullHeight_175d5_60", m0 = "_collapsed_175d5_64", g0 = "_responsive_175d5_72", y0 = "_overlay_175d5_80", b0 = "_mask_175d5_108", Gn = {
  sidebar: c0,
  sticky: d0,
  left: u0,
  right: f0,
  start: _0,
  end: p0,
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
  return we(() => {
    if (!r || !t || c == null) return;
    const u = (f) => {
      f.key === "Escape" && c();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, c]), /* @__PURE__ */ I(rt, { children: [
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
    return /* @__PURE__ */ o(rt, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], s = [], l = [], d = [];
  Xr.forEach(n, (g) => {
    if (!Wt(g)) {
      c.push(g);
      return;
    }
    if (g.type === i0)
      a.push(g);
    else if (g.type === s0)
      i.push(g);
    else if (g.type === x0) {
      const m = g, y = m.props.position;
      d.push(m), (y === "right" || y === "end" ? l : s).push(m);
    } else
      c.push(g);
  });
  const u = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const g = f ? l : s;
    return /* @__PURE__ */ I(
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
          /* @__PURE__ */ I("div", { className: An.gridContents, children: [
            g,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: An.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ I(
    "div",
    {
      className: [An.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        a,
        /* @__PURE__ */ I("div", { className: An.row, children: [
          s,
          c,
          l
        ] }),
        i
      ]
    }
  );
}
const v0 = "_body_1ge00_4", w0 = "_bare_1ge00_12", sa = {
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
      className: [sa.body, t ? null : sa.bare, n].filter(Boolean).join(" "),
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
      children: a ?? /* @__PURE__ */ o(De, { icon: e, size: 20 })
    }
  );
}
const $0 = "_track_14127_1", S0 = "_bar_14127_31", O0 = "_primary_14127_39", E0 = "_success_14127_43", M0 = "_warning_14127_47", T0 = "_danger_14127_51", C0 = "_indeterminate_14127_149", A0 = "_circular_14127_163", D0 = "_fill_14127_203", rn = {
  track: $0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: S0,
  primary: O0,
  success: E0,
  warning: M0,
  danger: T0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: C0,
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
    const m = typeof c == "string", y = 2, p = 10.5, b = 2 * Math.PI * p, h = b * (a ? 0.75 : 1), _ = a ? 0 : b * (1 - f / 100), x = Vr(r);
    return /* @__PURE__ */ I(
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
              r: p,
              strokeWidth: y
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: rn.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: y,
              strokeDasharray: `${h} ${b}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const g = Vr(r);
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
function I0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function cs(e) {
  const [t, n] = W(() => I0(e));
  return we(() => {
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
}, R0 = at(
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
    severity: m,
    shade: y,
    ...p
  }, b) {
    const [h, _] = W(n), x = t ?? h, N = (w) => {
      const C = !x;
      t === void 0 && _(C), r?.(C), u?.(w);
    };
    return /* @__PURE__ */ o(
      cn,
      {
        ...p,
        ref: b,
        variant: x && a ? a : g,
        severity: x ? i : m,
        shade: x ? c : y,
        size: l,
        "aria-pressed": x,
        className: [x ? z0.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: x && s !== void 0 ? s : f
      }
    );
  }
), Fa = "dx-theme";
function P0(e) {
  const t = e === void 0 ? Fa : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function j0(e, t) {
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
  const l = cs("(prefers-color-scheme: dark)"), [d, u] = W(void 0), f = e !== void 0, g = e ?? d ?? P0(n) ?? t ?? "system", m = g === "system" ? l ? "dark" : "light" : g;
  return we(() => {
    if (!f) {
      if (g === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = g;
    }
  }, [g, f]), /* @__PURE__ */ o(
    R0,
    {
      id: i,
      size: s,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: m === "dark",
      onChange: (p) => {
        const b = p ? "dark" : "light";
        f || (u(b), j0(n, b)), r?.(b);
      },
      toggleContent: /* @__PURE__ */ o(De, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(De, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Ha = "dx-palette", Ua = "dx-theme", Yo = "data-palette", Xo = "data-theme", Zo = /* @__PURE__ */ new Set();
function B0() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Yo), t = document.documentElement.getAttribute(Xo);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function ds(e) {
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
function kr() {
  const e = B0();
  if (!la) {
    la = !0;
    const t = aa(Ha), n = aa(Ua), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && ds(a), a;
  }
  return e;
}
function qa() {
  const e = kr();
  Zo.forEach((t) => t({ ...e }));
}
function ia(e) {
  return Zo.add(e), () => {
    Zo.delete(e);
  };
}
function wS() {
  return kr().theme;
}
function F0(e) {
  const t = kr();
  t.theme !== e && (t.theme = e, ds(t), Wa(Ha, e), qa());
}
function kS() {
  return kr().appearance;
}
function H0(e) {
  const t = kr();
  t.appearance !== e && (t.appearance = e, ds(t), Wa(Ua, e), qa());
}
function NS() {
  const [, e] = W(0);
  we(() => ia(() => e((n) => n + 1)), []);
  const t = kr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: F0,
    setAppearance: H0,
    subscribe: ia
  };
}
function U0(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (p, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), l = (p, b) => p + b | 0, d = (p, b) => p << b | p >>> 32 - b;
  let u = 1732584193, f = 4023233417, g = 2562383102, m = 271733878;
  for (let p = 0; p < r; p += 64) {
    const b = [];
    for (let w = 0; w < 16; w += 1)
      b.push(i.getUint32(p + w * 4, !0));
    let h = u, _ = f, x = g, N = m;
    for (let w = 0; w < 64; w += 1) {
      let C, $;
      w < 16 ? (C = _ & x | ~_ & N, $ = w) : w < 32 ? (C = N & _ | ~N & x, $ = (5 * w + 1) % 16) : w < 48 ? (C = _ ^ x ^ N, $ = (3 * w + 5) % 16) : (C = x ^ (_ | ~N), $ = 7 * w % 16), C = l(l(l(C, h), s[w]), b[$]), h = N, N = x, x = _, _ = l(_, d(C, c[Math.floor(w / 16) * 4 + w % 4]));
    }
    u = l(u, h), f = l(f, _), g = l(g, x), m = l(m, N);
  }
  const y = (p) => {
    let b = "";
    for (let h = 0; h < 4; h += 1)
      b += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return y(u) + y(f) + y(g) + y(m);
}
const W0 = "_avatar_1mhfr_1", q0 = "_xs_1mhfr_12", K0 = "_sm_1mhfr_18", G0 = "_md_1mhfr_24", V0 = "_lg_1mhfr_30", Y0 = "_xl_1mhfr_36", X0 = "_initials_1mhfr_42", Z0 = "_image_1mhfr_57", J0 = "_status_1mhfr_64", Q0 = "_online_1mhfr_84", eb = "_offline_1mhfr_88", tb = "_away_1mhfr_92", fr = {
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
}, go = [
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
  return go[t % go.length] ?? go[0];
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
  const d = Oe(() => e ? rb(e) : "?", [e]), u = Oe(() => e ? ob(e) : go[0], [e]), f = Oe(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${U0(N)}?d=${r}&s=${nb[c]}&r=${a}`;
  }, [t, n, r, a, c]), g = t ?? f, [m, y] = W(null), p = g != null && m !== g, b = p && i === "", h = i ?? e ?? "avatar", _ = s ? `${h}, ${s}` : h, x = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: fr.image,
        src: g,
        alt: b ? "" : s ? _ : h,
        onError: () => y(g ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: fr.initials,
      style: { background: u },
      children: d
    }
  );
  return /* @__PURE__ */ I(
    "span",
    {
      className: [
        fr.avatar,
        fr[c],
        s ? fr[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        x,
        s && /* @__PURE__ */ o("span", { className: fr.status, "aria-hidden": "true" })
      ]
    }
  );
}
const sb = "_root_zzwfz_1", ab = "_left_zzwfz_6", lb = "_right_zzwfz_7", ib = "_panel_zzwfz_12", cb = "_bottom_zzwfz_20", db = "_tabList_zzwfz_24", ub = "_underline_zzwfz_53", fb = "_pills_zzwfz_72", _b = "_tab_zzwfz_24", pb = "_active_zzwfz_113", hb = "_disabled_zzwfz_139", Dn = {
  root: sb,
  left: ab,
  right: lb,
  panel: ib,
  bottom: cb,
  tabList: db,
  underline: ub,
  pills: fb,
  tab: _b,
  active: pb,
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
  const s = lt(), l = oe(null), [d, u] = W(
    n ?? e[0]?.key ?? ""
  ), f = t ?? d, g = i === "left" || i === "right", m = (b) => {
    u(b), r?.(b);
  }, y = (b) => {
    const h = e.filter((N) => !N.disabled), _ = h.findIndex((N) => N.key === f);
    let x = -1;
    b.key === "ArrowRight" || g && b.key === "ArrowDown" ? x = (_ + 1) % h.length : b.key === "ArrowLeft" || g && b.key === "ArrowUp" ? x = (_ - 1 + h.length) % h.length : b.key === "Home" ? x = 0 : b.key === "End" && (x = h.length - 1), x >= 0 && (b.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[x]?.key ?? "")}"]`
    )?.focus(), m(h[x]?.key ?? ""));
  }, p = e.find((b) => b.key === f);
  return /* @__PURE__ */ I(
    "div",
    {
      className: [Dn.root, Dn[i], c].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Dn.tabList, Dn[a], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: y,
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
        p && /* @__PURE__ */ o(
          "div",
          {
            role: "tabpanel",
            id: `${s}-panel-${p.key}`,
            "aria-labelledby": `${s}-tab-${p.key}`,
            className: Dn.panel,
            children: p.content
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
  const c = lt(), [s, l] = W(
    r ?? []
  ), d = n ?? s, u = (f) => {
    const g = d.includes(f) ? d.filter((m) => m !== f) : t ? [...d, f] : [f];
    l(g), a?.(g);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((f) => {
    const g = d.includes(f.key), m = `${c}-panel-${f.key}`, y = `${c}-trigger-${f.key}`;
    return /* @__PURE__ */ I("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ I(
        "button",
        {
          type: "button",
          id: y,
          "aria-expanded": g,
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
                className: [In.chevron, g ? In.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 12 })
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
          "aria-labelledby": y,
          hidden: !g,
          className: In.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const $b = "_textarea_l7fsl_1", Sb = "_invalid_l7fsl_27", Ob = "_xs_l7fsl_34", Eb = "_sm_l7fsl_39", Mb = "_md_l7fsl_44", Tb = "_lg_l7fsl_49", Cb = "_xl_l7fsl_54", uo = {
  textarea: $b,
  invalid: Sb,
  xs: Ob,
  sm: Eb,
  md: Mb,
  lg: Tb,
  xl: Cb,
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
), Ab = "_root_xyp2i_1", Db = "_trigger_xyp2i_9", Ib = "_invalid_xyp2i_40", Lb = "_placeholder_xyp2i_47", zb = "_label_xyp2i_54", Rb = "_chevron_xyp2i_60", Pb = "_chevronOpen_xyp2i_70", jb = "_menu_xyp2i_74", Bb = "_option_xyp2i_89", Fb = "_disabled_xyp2i_100", Hb = "_active_xyp2i_104", Ub = "_selected_xyp2i_105", Wb = "_header_xyp2i_115", qb = "_xs_xyp2i_122", Kb = "_sm_xyp2i_128", Gb = "_md_xyp2i_134", Vb = "_lg_xyp2i_140", Yb = "_xl_xyp2i_146", Ht = {
  root: Ab,
  trigger: Db,
  invalid: Ib,
  placeholder: Lb,
  label: zb,
  chevron: Rb,
  chevronOpen: Pb,
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
function MS({
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
  const u = lt(), f = `${u}-listbox`, g = oe(null), m = oe(null), [y, p] = W(
    n
  ), [b, h] = W(!1), _ = t ?? y, x = e.map(
    (k, v) => k.label === "" || k.disabled ? -1 : v
  ).filter((k) => k >= 0), N = e.findIndex(
    (k) => k.value === _
  ), [w, C] = W(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), $ = F(() => {
    if (s) return;
    const k = N >= 0 && x.includes(N) ? N : x[0];
    C(k ?? -1), h(!0);
  }, [s, N, x]), M = F(() => {
    h(!1), m.current?.focus();
  }, []);
  we(() => {
    if (!b) return;
    const k = (v) => {
      g.current && !g.current.contains(v.target) && h(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [b]);
  const T = (k) => {
    p(k), r?.(k), h(!1), m.current?.focus();
  }, A = (k) => {
    if (x.length === 0) return;
    const v = x.includes(w) ? x.indexOf(w) : 0, O = x[(v + k + x.length) % x.length];
    O != null && C(O);
  }, D = (k) => {
    if (!b) {
      k.key === "ArrowDown" && (k.preventDefault(), $());
      return;
    }
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), A(1);
        break;
      case "ArrowUp":
        k.preventDefault(), A(-1);
        break;
      case "Home":
        k.preventDefault(), x[0] != null && C(x[0]);
        break;
      case "End":
        k.preventDefault(), x[x.length - 1] != null && C(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), w >= 0 && e[w] && x.includes(w) && T(e[w]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), M();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, E = e.find(
    (k) => k.value === _
  );
  return /* @__PURE__ */ I(
    "div",
    {
      ref: g,
      className: [Ht.root, l].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ I(
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
              Ht.trigger,
              Ht[i],
              b ? Ht.open : null,
              c ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => b ? h(!1) : $(),
            ...d,
            children: [
              /* @__PURE__ */ o("span", { className: E ? Ht.label : Ht.placeholder, children: E ? E.label : a }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [Ht.chevron, b ? Ht.chevronOpen : null].filter(Boolean).join(" "),
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
            "aria-activedescendant": w >= 0 ? `${u}-option-${w}` : void 0,
            className: Ht.menu,
            children: e.map(
              (k, v) => k.label === "" ? /* @__PURE__ */ o(
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
                  id: `${u}-option-${v}`,
                  role: "option",
                  "aria-selected": k.value === _,
                  "aria-disabled": k.disabled || void 0,
                  className: [
                    Ht.option,
                    v === w ? Ht.active : null,
                    k.value === _ ? Ht.selected : null,
                    k.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    k.disabled || T(k.value);
                  },
                  onMouseEnter: () => {
                    !k.disabled && k.label !== "" && C(v);
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
const Zb = "_root_1ma8a_1", Jb = "_wrap_1ma8a_9", Qb = "_input_1ma8a_26", ex = "_invalid_1ma8a_31", tx = "_clear_1ma8a_58", nx = "_menu_1ma8a_83", rx = "_option_1ma8a_98", ox = "_disabled_1ma8a_109", sx = "_active_1ma8a_113", ax = "_empty_1ma8a_123", lx = "_xs_1ma8a_129", ix = "_sm_1ma8a_136", cx = "_md_1ma8a_143", dx = "_lg_1ma8a_150", ux = "_xl_1ma8a_157", un = {
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
function TS({
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
  const g = lt(), m = `${g}-listbox`, y = oe(null), p = oe(null), [b, h] = W(n), [_, x] = W(!1), N = t ?? b, w = Oe(
    () => N.trim() === "" ? [...e] : e.filter((L) => d(L, N)),
    [e, N, d]
  ), C = w.map((L, P) => L.disabled ? -1 : P).filter((L) => L >= 0), [$, M] = W(-1), T = (L) => {
    h(L), r?.(L);
  }, A = (L) => {
    T(L.label), a?.(L.value, L), x(!1);
  }, D = (L) => {
    if (C.length === 0) return;
    const P = C.includes($) ? C.indexOf($) : L === 1 ? -1 : 0, B = C[(P + L + C.length) % C.length];
    B != null && M(B);
  }, E = (L) => {
    l || (T(L.target.value), x(!0), M(-1));
  }, k = () => {
    l || N !== "" && x(!0);
  }, v = (L) => {
    y.current && !y.current.contains(L.relatedTarget) && x(!1);
  }, O = (L) => {
    if (!l)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), _ ? D(1) : (x(!0), M(C[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), _ && D(-1);
          break;
        case "Enter":
          L.preventDefault(), _ && $ >= 0 && w[$] && A(w[$]);
          break;
        case "Escape":
          L.preventDefault(), x(!1);
          break;
        case "Tab":
          _ && $ >= 0 && w[$] && A(w[$]), x(!1);
          break;
      }
  }, z = () => {
    T(""), M(-1), x(!0), p.current?.focus();
  };
  return /* @__PURE__ */ I(
    "div",
    {
      ref: y,
      className: [un.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ I(
          "div",
          {
            className: [un.wrap, un[c], s ? un.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: p,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": m,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && $ >= 0 ? `${g}-option-${$}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: N,
                  placeholder: i,
                  className: un.input,
                  onChange: E,
                  onFocus: k,
                  onBlur: v,
                  onKeyDown: O,
                  ...f
                }
              ),
              N !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: un.clear,
                  "aria-label": "Clear",
                  onClick: z,
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && (w.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: m, className: un.menu, children: /* @__PURE__ */ o("div", { className: un.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: un.menu, children: w.map((L, P) => /* @__PURE__ */ o(
          "div",
          {
            id: `${g}-option-${P}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              un.option,
              P === $ ? un.active : null,
              L.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              L.disabled || A(L);
            },
            onMouseDown: (B) => {
              B.preventDefault(), L.disabled || A(L);
            },
            onMouseEnter: () => {
              L.disabled || M(P);
            },
            children: L.label
          },
          L.value
        )) }))
      ]
    }
  );
}
const _x = "_box_muvqe_1", px = "_option_muvqe_12", hx = "_disabled_muvqe_23", mx = "_selected_muvqe_27", gx = "_active_muvqe_33", Pr = {
  box: _x,
  option: px,
  disabled: hx,
  selected: mx,
  active: gx
};
function CS({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...s
}) {
  const l = lt(), [d, u] = W(() => {
    const w = n;
    return w == null ? [] : Array.isArray(w) ? [...w] : [w];
  }), f = t == null ? d : Array.isArray(t) ? t : [t], g = e.findIndex((w) => !w.disabled), [m, y] = W(
    () => g >= 0 ? g : 0
  ), p = oe(""), b = oe(null), h = (w) => {
    u(w), a?.(r ? w : w[0] ?? "");
  }, _ = e.map((w, C) => w.disabled ? -1 : C).filter((w) => w >= 0), x = (w) => {
    const C = e[w];
    if (!(!C || C.disabled))
      if (y(w), r) {
        const $ = f.includes(C.value) ? f.filter((M) => M !== C.value) : [...f, C.value];
        h($);
      } else
        h([C.value]);
  }, N = (w) => {
    if (_.length === 0) return;
    const C = _.includes(m) ? m : _[0];
    let $ = -1;
    if (w.key === "ArrowDown")
      $ = _[(_.indexOf(C) + 1) % _.length];
    else if (w.key === "ArrowUp")
      $ = _[(_.indexOf(C) - 1 + _.length) % _.length];
    else if (w.key === "Home")
      $ = _[0];
    else if (w.key === "End")
      $ = _[_.length - 1];
    else if (w.key === "Enter" || w.key === " ") {
      w.preventDefault(), x(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(w.key)) {
      w.preventDefault();
      const M = (p.current + w.key).toLowerCase();
      p.current = M, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const T = [..._, ..._], A = _.indexOf(C) + 1, D = T.slice(A).find((E) => e[E]?.label.toLowerCase().startsWith(M));
      D != null && y(D);
      return;
    }
    $ >= 0 && (w.preventDefault(), y($), r || h([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[m] ? `${l}-option-${m}` : void 0,
      style: c,
      className: [Pr.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...s,
      children: e.map((w, C) => {
        const $ = f.includes(w.value), M = C === m;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${l}-option-${C}`,
            role: "option",
            "aria-selected": $,
            "aria-disabled": w.disabled || void 0,
            className: [
              Pr.option,
              $ ? Pr.selected : null,
              M ? Pr.active : null,
              w.disabled ? Pr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(C),
            children: w.label
          },
          w.value
        );
      })
    }
  );
}
const yx = "_group_oinj7_1", bx = "_legend_oinj7_8", xx = "_list_oinj7_16", vx = "_item_oinj7_25", wx = "_disabled_oinj7_32", kx = "_label_oinj7_37", Nx = "_checkbox_oinj7_48", Qn = {
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
  ]), d = t ?? s, u = (f, g) => {
    const m = g ? [...d, f] : d.filter((y) => y !== f);
    l(m), r?.(m);
  };
  return /* @__PURE__ */ I("fieldset", { className: [Qn.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: Qn.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: Qn.list, children: e.map((f) => {
      const g = d.includes(f.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Qn.item, f.disabled ? Qn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ I("label", { className: Qn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Qn.checkbox,
                name: i,
                value: f.value,
                checked: g,
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
const $x = "_group_46668_1", Sx = "_legend_46668_8", Ox = "_list_46668_16", Ex = "_item_46668_25", Mx = "_disabled_46668_32", Tx = "_label_46668_37", Cx = "_radio_46668_48", er = {
  group: $x,
  legend: Sx,
  list: Ox,
  item: Ex,
  disabled: Mx,
  label: Tx,
  radio: Cx
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
  return /* @__PURE__ */ I("fieldset", { className: [er.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: er.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: er.list, children: e.map((f) => {
      const g = f.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [er.item, f.disabled ? er.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ I("label", { className: er.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: er.radio,
                name: i,
                value: f.value,
                checked: g,
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
const Ax = "_bar_9zyxn_1", Dx = "_vertical_9zyxn_12", Ix = "_option_9zyxn_17", Lx = "_selected_9zyxn_40", zx = "_sm_9zyxn_56", Rx = "_md_9zyxn_62", Px = "_lg_9zyxn_68", _r = {
  bar: Ax,
  vertical: Dx,
  option: Ix,
  selected: Lx,
  sm: zx,
  md: Rx,
  lg: Px
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
  } = e, u = a ?? !1, [f, g] = W(r ?? (u ? [] : t[0]?.value)), m = n ?? f, y = a === !0 || a === void 0 && Array.isArray(m), p = (h) => {
    if (!y) {
      g(h), c?.(h);
      return;
    }
    const _ = ca(m), x = _.includes(h) ? _.filter((N) => N !== h) : [..._, h];
    g(x), c?.(x);
  }, b = (h) => y ? ca(m).includes(h) : m === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        _r.bar,
        _r[s],
        i === "vertical" ? _r.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...d,
      children: t.map((h) => {
        const _ = b(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: h.disabled,
            className: [
              _r.option,
              _ ? _r.selected : null,
              h.disabled ? _r.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => p(h.value),
            children: h.label
          },
          h.value
        );
      })
    }
  );
}
const jx = "_root_11hdr_1", Bx = "_action_11hdr_10", Fx = "_caret_11hdr_15", Hx = "_sm_11hdr_49", Ux = "_md_11hdr_53", Wx = "_lg_11hdr_57", qx = "_fullWidth_11hdr_62", Kx = "_menu_11hdr_70", Gx = "_item_11hdr_83", Vx = "_itemIcon_11hdr_105", Yx = "_disabled_11hdr_110", Xx = "_active_11hdr_114", Zx = "_danger_11hdr_123", xn = {
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
    className: g,
    "aria-label": m,
    openAriaLabel: y = "More actions",
    ...p
  }, b) {
    const _ = `${lt()}-menu`, x = oe(null), N = oe(null), w = oe([]), [C, $] = W(!1), [M, T] = W(-1), A = f || l, D = Oe(
      () => r.map((B, Y) => B.disabled ? -1 : Y).filter((B) => B >= 0),
      [r]
    ), E = F(() => {
      A || (T(D[0] ?? -1), $(!0));
    }, [A, D]), k = F(() => {
      $(!1), N.current?.focus();
    }, []);
    we(() => {
      if (!C) return;
      const B = (Y) => {
        x.current && !x.current.contains(Y.target) && $(!1);
      };
      return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
    }, [C]), we(() => {
      C && (A || !d) && $(!1);
    }, [C, A, d]);
    const v = oe(C);
    if (we(() => {
      const B = v.current;
      if (v.current = C, !C || B) return;
      const Y = D.includes(M) ? M : D[0] ?? -1;
      Y >= 0 && w.current[Y]?.focus();
    }, [C, M, D]), d === !1) return null;
    const O = (B) => {
      const Y = r[B];
      !Y || Y.disabled || (Y.onClick?.(), $(!1), N.current?.focus());
    }, z = (B) => {
      if (D.length === 0) return;
      const Y = D.includes(M) ? D.indexOf(M) : B === 1 ? -1 : 0, se = D[(Y + B + D.length) % D.length];
      se != null && (T(se), w.current[se]?.focus());
    }, L = (B) => {
      const Y = B === "first" ? D[0] : D[D.length - 1];
      Y != null && (T(Y), w.current[Y]?.focus());
    }, P = (B) => {
      switch (B.key) {
        case "ArrowDown":
          B.preventDefault(), z(1);
          break;
        case "ArrowUp":
          B.preventDefault(), z(-1);
          break;
        case "Home":
          B.preventDefault(), L("first");
          break;
        case "End":
          B.preventDefault(), L("last");
          break;
        case "Escape":
          B.preventDefault(), k();
          break;
        case "Tab":
          $(!1);
          break;
      }
    };
    return /* @__PURE__ */ I(
      "div",
      {
        ref: (B) => {
          x.current = B, typeof b == "function" ? b(B) : b && (b.current = B);
        },
        className: [
          xn.root,
          xn[s],
          u ? xn.fullWidth : null,
          g
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            cn,
            {
              className: xn.action,
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
              className: xn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: A,
              "aria-haspopup": "menu",
              "aria-expanded": C,
              "aria-controls": _,
              "aria-label": y,
              onClick: () => C ? $(!1) : E(),
              onKeyDown: (B) => {
                !C && (B.key === "ArrowDown" || B.key === "ArrowUp") && (B.preventDefault(), E());
              },
              children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          C && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": y,
              className: xn.menu,
              onKeyDown: P,
              ...p,
              children: r.map((B, Y) => /* @__PURE__ */ I(
                "button",
                {
                  ref: (se) => {
                    w.current[Y] = se;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: Y === M ? 0 : -1,
                  disabled: B.disabled,
                  className: [
                    xn.item,
                    Y === M ? xn.active : null,
                    B.danger ? xn.danger : null,
                    B.disabled ? xn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => O(Y),
                  onMouseEnter: () => {
                    B.disabled || T(Y);
                  },
                  children: [
                    B.icon ? /* @__PURE__ */ o("span", { className: xn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: B.icon, size: 16 }) }) : null,
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
), Jx = "_mask_rcv90_1", Qx = "_invalid_rcv90_31", ev = "_xs_rcv90_38", tv = "_sm_rcv90_44", nv = "_md_rcv90_50", rv = "_lg_rcv90_56", ov = "_xl_rcv90_62", Fo = {
  mask: Jx,
  invalid: Qx,
  xs: ev,
  sm: tv,
  md: nv,
  lg: rv,
  xl: ov
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
  const [f, g] = W(i ?? ""), m = a !== void 0, y = m ? a ?? "" : f, p = (_) => {
    const x = da(_, r);
    return m || g(x), c?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: y,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const x = _.currentTarget.selectionStart ?? y.length, N = y[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const w = y.replace(/\D/g, "");
            p(da(w.slice(0, -1), r));
          }
        }
        l?.(_);
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
}), sv = "_wrapper_12jdf_1", av = "_input_12jdf_8", lv = "_invalid_12jdf_38", iv = "_button_12jdf_45", cv = "_up_12jdf_77", dv = "_down_12jdf_82", uv = "_xs_12jdf_87", fv = "_sm_12jdf_93", _v = "_md_12jdf_99", pv = "_lg_12jdf_105", hv = "_xl_12jdf_111", Vn = {
  wrapper: sv,
  input: av,
  invalid: lv,
  button: iv,
  up: cv,
  down: dv,
  xs: uv,
  sm: fv,
  md: _v,
  lg: pv,
  xl: hv
};
function Jo(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function mv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Ka(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function gv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function yv(e, t, n, r, a) {
  const c = Jo(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Ka(s, n, r);
}
const RS = at(
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
    onBlur: m,
    onKeyDown: y,
    ...p
  }, b) {
    const [h, _] = W(
      c != null ? String(c) : ""
    ), x = i !== void 0, N = x ? i == null ? "" : String(i) : h, w = (D) => {
      x || _(D), s?.(Jo(D));
    }, C = (D) => {
      x || _(String(D)), s?.(D);
    }, $ = (D) => {
      a || C(yv(N, D, l, d, u));
    }, M = (D) => {
      w(mv(D.target.value));
    }, T = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), $(1)) : D.key === "ArrowDown" && (D.preventDefault(), $(-1)), y?.(D);
    }, A = (D) => {
      const E = Jo(N);
      E === null ? (x || _(""), s?.(null)) : C(Ka(gv(E, l, u), l, d)), m?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ I("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: b,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: a,
            onChange: M,
            onKeyDown: T,
            onBlur: A,
            className: [
              Vn.input,
              Vn[t],
              n ? Vn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...p
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
            children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.down].join(" "),
            "aria-label": g,
            disabled: a,
            onClick: () => $(-1),
            children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 14 })
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
function pr({ h: e, s: t, v: n }) {
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
const PS = ({
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
  className: g,
  onChange: m,
  onValueChange: y,
  onOpen: p,
  onClose: b
}) => {
  const h = oe(null), _ = oe(null), x = oe(null), N = oe(null), w = oe(null), C = lt(), $ = oe(null), M = Oe(
    () => wv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [T, A] = W(!1), [D, E] = W(null), k = D ?? M, v = Oe(() => vv(k), [k]), O = F(
    (Z) => {
      const R = ua(Z);
      m?.(R), y?.(R);
    },
    [m, y]
  ), z = F(
    (Z, R) => {
      E(Z), R && !i && O(Z);
    },
    [i, O]
  ), L = F(() => {
    A(!1), E(null), b?.(), _.current?.focus();
  }, [b]), P = F(() => {
    s || (E(M), A(!0), p?.());
  }, [s, M, p]), B = F(() => {
    T ? L() : P();
  }, [T, L, P]), Y = F(
    (Z, R) => {
      const X = x.current;
      if (!X) return v;
      const ee = X.getBoundingClientRect(), ye = an((Z - ee.left) / ee.width, 0, 1), ce = an(1 - (R - ee.top) / ee.height, 0, 1);
      return { h: v.h, s: ye, v: ce };
    },
    [v]
  ), se = F(
    (Z, R) => {
      if (!R) return 0;
      const X = R.getBoundingClientRect();
      return an((Z - X.left) / X.width, 0, 1);
    },
    []
  ), Q = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), $.current = "sat";
    const R = Y(Z.clientX, Z.clientY);
    z({ ...pr(R), a: k.a }, !0);
  }, be = (Z) => {
    if ($.current !== "sat") return;
    Z.preventDefault();
    const R = Y(Z.clientX, Z.clientY);
    z({ ...pr(R), a: k.a }, !0);
  }, ne = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), $.current = "hue";
    const R = se(Z.clientX, N.current);
    z(
      { ...pr({ ...v, h: R * 360 }), a: k.a },
      !0
    );
  }, pe = (Z) => {
    if ($.current !== "hue") return;
    Z.preventDefault();
    const R = se(Z.clientX, N.current);
    z(
      { ...pr({ ...v, h: R * 360 }), a: k.a },
      !0
    );
  }, G = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), $.current = "alpha";
    const R = se(Z.clientX, w.current);
    z({ ...k, a: R }, !0);
  }, _e = (Z) => {
    if ($.current !== "alpha") return;
    Z.preventDefault();
    const R = se(Z.clientX, w.current);
    z({ ...k, a: R }, !0);
  }, ie = () => {
    $.current = null;
  }, he = F(
    (Z, R) => {
      const X = {
        h: v.h,
        s: an(v.s + Z, 0, 1),
        v: an(v.v + R, 0, 1)
      };
      z({ ...pr(X), a: k.a }, !0);
    },
    [v, k.a, z]
  ), ue = F(
    (Z) => {
      const R = (v.h + Z + 360) % 360;
      z({ ...pr({ ...v, h: R }), a: k.a }, !0);
    },
    [v, k.a, z]
  ), Se = F(
    (Z) => {
      z({ ...k, a: an(k.a + Z, 0, 1) }, !0);
    },
    [k, z]
  ), q = (Z) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), he(-0.05, 0);
        break;
      case "ArrowRight":
        Z.preventDefault(), he(0.05, 0);
        break;
      case "ArrowUp":
        Z.preventDefault(), he(0, 0.05);
        break;
      case "ArrowDown":
        Z.preventDefault(), he(0, -0.05);
        break;
      case "Escape":
        Z.preventDefault(), L();
        break;
    }
  }, Ee = (Z, R) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), R === "hue" ? ue(-6) : Se(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), R === "hue" ? ue(6) : Se(0.05);
        break;
      case "Escape":
        Z.preventDefault(), L();
        break;
    }
  }, re = (Z, R) => {
    if (Z === "hex") {
      const ce = Qo(R);
      ce && z({ ...ce, a: k.a }, !0);
      return;
    }
    const X = R.replace(/[^\d.]/g, ""), ee = Number.parseFloat(X);
    if (Number.isNaN(ee)) return;
    if (Z === "a") {
      const ce = X.includes(".") ? an(ee, 0, 1) : an(ee / 100, 0, 1);
      z({ ...k, a: ce }, !0);
      return;
    }
    const ye = { r: 255, g: 255, b: 255 };
    z(
      { ...k, [Z]: an(ee, 0, ye[Z]) },
      !0
    );
  }, Ae = () => {
    D && (O(D), E(null), A(!1), b?.(), _.current?.focus());
  };
  we(() => {
    if (!T) return;
    const Z = (R) => {
      h.current && !h.current.contains(R.target) && L();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [T, L]), we(() => {
    if (!T) return;
    const Z = (R) => {
      R.key === "Escape" && L();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [T, L]);
  const me = u === "xs" ? Re["dx-colorpicker-trigger-xs"] : u === "sm" ? Re["dx-colorpicker-trigger-sm"] : u === "lg" ? Re["dx-colorpicker-trigger-lg"] : u === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = ua(k), Ge = xv(k), Qe = { x: v.s * 100, y: (1 - v.v) * 100 }, Ct = v.h / 360 * 100, it = k.a * 100, bt = /* @__PURE__ */ I("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(v.s * 100),
        "aria-valuetext": `Saturation ${Math.round(v.s * 100)}%, value ${Math.round(v.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Re["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${v.h}, 100%, 50%)`
        },
        onKeyDown: q,
        onPointerDown: Q,
        onPointerMove: be,
        onPointerUp: ie,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-saturation-indicator"],
            style: { left: `${Qe.x}%`, top: `${Qe.y}%` },
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
        "aria-valuenow": Math.round(v.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Re["dx-hue-picker"],
        onKeyDown: (Z) => Ee(Z, "hue"),
        onPointerDown: ne,
        onPointerMove: pe,
        onPointerUp: ie,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-hue-indicator"],
            style: { left: `${Ct}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: w,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(it),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        className: Re["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${v.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => Ee(Z, "alpha"),
        onPointerDown: G,
        onPointerMove: _e,
        onPointerUp: ie,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-alpha-indicator"],
            style: { left: `${it}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ I("div", { className: Re["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ I("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ge,
            onChange: (Z) => re("hex", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ I("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
            onChange: (Z) => re("r", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ I("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
            onChange: (Z) => re("g", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ I("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
            onChange: (Z) => re("b", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ I("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
            onChange: (Z) => re("a", Z.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Re["dx-colorpicker-palette"], children: a.map((Z) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : f,
        style: { backgroundColor: Z },
        onClick: () => {
          const R = Qo(Z);
          i ? z({ ...R, a: k.a }, !1) : (E(null), O({ ...R, a: k.a }), A(!1), b?.(), _.current?.focus());
        }
      },
      Z
    )) }),
    i && /* @__PURE__ */ o("div", { className: Re["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-ok"],
        onClick: Ae,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ I(
    "div",
    {
      ref: h,
      className: [
        Re["dx-colorpicker"],
        T ? Re["dx-colorpicker-open"] : null,
        l ? Re["dx-colorpicker-invalid"] : null,
        g
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ I(
          "button",
          {
            ref: _,
            type: "button",
            className: [Re["dx-colorpicker-trigger"], me].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": T,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: f,
            onClick: B,
            onKeyDown: (Z) => {
              Z.key === "Escape" && T && (Z.preventDefault(), L());
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
              d && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-text"], children: d }),
              c && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        T && /* @__PURE__ */ o(
          "div",
          {
            id: C,
            role: "dialog",
            "aria-label": "Choose color",
            className: Re["dx-colorpicker-popup"],
            children: bt
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
}, kv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function Nv(e, t) {
  const n = Yt(e);
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
function fa(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const _a = {
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
        a += _a[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if (Sv.includes(s)) {
      a += _a[s](e, r, n), i += 1;
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
function jr(e, t) {
  const n = es(e);
  return n || Ev(e, t);
}
function Mv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Tv = ["hour", "minute", "second"];
function po(e) {
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
    disabledDates: g,
    locale: m = "en-US",
    onChange: y,
    onValueChange: p,
    onOpen: b,
    onClose: h,
    disabled: _,
    readOnly: x,
    placeholder: N,
    ariaLabel: w,
    triggerLabel: C,
    clearLabel: $,
    tabIndex: M,
    className: T,
    onBlur: A,
    onKeyDown: D,
    ...E
  }, k) {
    const v = oe(null), O = oe(null), z = oe(null), L = oe(null), P = lt(), B = r !== void 0, [Y, se] = W(
      () => a != null ? _o(
        jr(a, i) ?? Yn(),
        i,
        m
      ) : ""
    ), [Q, be] = W(!1), [ne, pe] = W(null), [G, _e] = W(() => {
      const V = r !== void 0 ? r ?? "" : a ?? "";
      if (V) {
        const ge = jr(V, i);
        if (ge) return ge;
      }
      return Yn();
    }), ie = Oe(() => c ? es(c) : null, [c]), he = Oe(() => s ? es(s) : null, [s]), ue = Oe(
      () => new Set(g ?? []),
      [g]
    ), Se = Oe(() => {
      const V = B ? r ?? "" : Y;
      return V ? jr(V, i) : null;
    }, [r, Y, B, i]), q = F(
      (V) => {
        const ge = Yt(V);
        return !!(ue.has(ge) || ie && ge < Yt(ie) || he && ge > Yt(he));
      },
      [ue, ie, he]
    ), Ee = F(
      (V) => {
        if (!q(V)) return V;
        for (let ge = 1; ge <= 366; ge += 1) {
          const Ve = Ln(V, ge);
          if (!q(Ve)) return Ve;
          const Ye = Ln(V, -ge);
          if (!q(Ye)) return Ye;
        }
        return V;
      },
      [q]
    ), re = F(
      (V) => {
        B || se(V ? _o(V, i, m) : "");
        const ge = V ? Nv(V, l) : "";
        y?.(ge), p?.(ge);
      },
      [B, i, m, l, y, p]
    ), Ae = F(
      (V) => {
        O.current = V, typeof k == "function" ? k(V) : k && (k.current = V);
      },
      [k]
    ), me = F(() => {
      be(!1), pe(null), h?.(), f || z.current?.focus();
    }, [f, h]), Fe = F(() => {
      if (_) return;
      const V = Se ?? Yn();
      pe(V), _e(Ee(V)), be(!0), b?.();
    }, [_, Se, Ee, b]), Ge = F(() => {
      Q ? me() : Fe();
    }, [Q, me, Fe]), Qe = F((V) => {
      L.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), Ct = F(
      (V) => {
        if (q(V)) return;
        const ge = ne ?? Se, Ye = {
          ...l ? {
            hour: ge?.hour ?? 0,
            minute: ge?.minute ?? 0,
            second: ge?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: V.year,
          month: V.month,
          day: V.day
        };
        pe(Ye), l || (re(Ye), me());
      },
      [q, ne, Se, l, re, me]
    ), it = F(
      (V, ge) => {
        pe((Ve) => {
          const Ye = Ve ?? Se ?? Yn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + ge));
          return { ...Ye, [V]: Xe };
        });
      },
      [Se]
    ), bt = F(
      (V, ge) => {
        const Ve = ge.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        pe((Xe) => ({ ...Xe ?? Se ?? Yn(), [V]: Math.min(Pt, Ye) }));
      },
      [Se]
    ), Z = F(() => {
      ne && (re(ne), me());
    }, [ne, re, me]), R = F(() => {
      if (Q) return;
      const V = jr(Y, i);
      re(V ? Mv(V, ie, he) : null);
    }, [Q, Y, i, ie, he, re]), X = (V) => {
      const ge = V.target.value;
      B || se(ge), Q && pe(null);
    }, ee = (V) => {
      V.key === "Enter" ? (V.preventDefault(), Q ? ne && (re(ne), me()) : R()) : V.key === "Escape" ? Q && (V.preventDefault(), me()) : V.key === "ArrowDown" && !Q ? (V.preventDefault(), Fe()) : V.key === "Tab" && Q && be(!1), D?.(V);
    }, ye = (V) => {
      R(), A?.(V);
    }, ce = (V) => {
      let ge = null;
      switch (V.key) {
        case "ArrowLeft":
          ge = Ln(G, -1), V.preventDefault();
          break;
        case "ArrowRight":
          ge = Ln(G, 1), V.preventDefault();
          break;
        case "ArrowUp":
          ge = Ln(G, -7), V.preventDefault();
          break;
        case "ArrowDown":
          ge = Ln(G, 7), V.preventDefault();
          break;
        case "Home":
          ge = Ln(G, -fa(G)), V.preventDefault();
          break;
        case "End":
          ge = Ln(G, 6 - fa(G)), V.preventDefault();
          break;
        case "PageUp":
          ge = fo(G, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          ge = fo(G, V.shiftKey ? 12 : 1), V.preventDefault();
          break;
        case "Enter":
        case " ":
          V.preventDefault(), Ct(G);
          break;
        case "Escape":
          V.preventDefault(), me();
          break;
        case "Tab":
          be(!1);
          break;
      }
      if (ge) {
        const Ve = Ee(ge);
        _e(Ve), setTimeout(() => Qe(Ve), 0);
      }
    };
    we(() => {
      if (!Q) return;
      const V = (ge) => {
        v.current && !v.current.contains(ge.target) && me();
      };
      return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
    }, [Q, me]), we(() => {
      if (!Q) return;
      const V = (ge) => {
        ge.key === "Escape" && me();
      };
      return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
    }, [Q, me]);
    const Me = () => {
      B || se(""), y?.(""), p?.(""), O.current?.focus();
    }, je = Q && ne ? _o(ne, i, m) : B ? r ? _o(
      jr(r, i) ?? Yn(),
      i,
      m
    ) : "" : Y, Je = B ? !!r : Y.length > 0, et = f || Q, ot = { year: G.year, month: G.month }, Zt = new Date(ot.year, ot.month - 1, 1).getDay(), ae = {
      year: ot.year,
      month: ot.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, ze = [];
    for (let V = 0; V < kv; V += 1)
      ze.push(Ln(ae, V - Zt));
    const Nt = ne ? Yt(ne) : Se ? Yt(Se) : null, Rt = Yt(Yn()), xt = `${ot.year}-${ln(ot.month)}`, Ie = Oe(
      () => new Intl.DateTimeFormat(m, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [m]
    ), qe = new Intl.DateTimeFormat(m, {
      month: "long",
      year: "numeric"
    }).format(new Date(ot.year, ot.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, ge) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ge)
      )
    ), Ot = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], ct = /* @__PURE__ */ I(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": w ?? "Date picker",
        children: [
          /* @__PURE__ */ I("div", { className: Ue["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const V = Ee(fo(G, -1));
                  _e(V), setTimeout(() => Qe(V), 0);
                },
                children: /* @__PURE__ */ o(De, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-title"], children: qe }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const V = Ee(fo(G, 1));
                  _e(V), setTimeout(() => Qe(V), 0);
                },
                children: /* @__PURE__ */ o(De, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ I(
            "div",
            {
              ref: L,
              role: "grid",
              className: Ue["dx-datepicker-grid"],
              onKeyDown: ce,
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
                Array.from({ length: 6 }, (V, ge) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: ze.slice(ge * 7, ge * 7 + 7).map((Ve) => {
                      const Ye = Yt(Ve), Pt = q(Ve), Xe = Ye.startsWith(xt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Ye,
                          tabIndex: Ye === Yt(G) ? 0 : -1,
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
                          onClick: () => Ct(Ve),
                          onFocus: () => _e(Ve),
                          children: Ve.day
                        },
                        Ye
                      );
                    })
                  },
                  ge
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ I("div", { className: Ue["dx-datepicker-time"], children: [
            Tv.map((V) => /* @__PURE__ */ I("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-time-label"], children: po(V) }),
              /* @__PURE__ */ I("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": po(V),
                    value: ln(
                      (ne ?? Se ?? Yn())[V]
                    ),
                    onChange: (ge) => bt(V, ge.target.value),
                    onKeyDown: (ge) => {
                      ge.key === "ArrowUp" ? (ge.preventDefault(), it(V, 1)) : ge.key === "ArrowDown" ? (ge.preventDefault(), it(V, -1)) : ge.key === "Enter" && (ge.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ I("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${po(V).toLowerCase()}`,
                      onClick: () => it(V, 1),
                      children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${po(V).toLowerCase()}`,
                      onClick: () => it(V, -1),
                      children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 11 })
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
    return /* @__PURE__ */ I(
      "div",
      {
        ref: v,
        className: [
          Ue["dx-datepicker"],
          f ? Ue["dx-datepicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ I(rt, { children: [
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
                tabIndex: M,
                role: d ? void 0 : "combobox",
                "aria-label": w ?? "Date",
                "aria-haspopup": d ? void 0 : "dialog",
                "aria-expanded": d ? void 0 : et,
                "aria-controls": d ? void 0 : P,
                "aria-invalid": n || void 0,
                className: [
                  Ue["dx-datepicker-input"],
                  Ot,
                  n ? Ue["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: X,
                onKeyDown: ee,
                onBlur: ye,
                onClick: () => {
                  d || Ge();
                },
                ...E
              }
            ),
            u && !_ && Je && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  d ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: Me,
                children: /* @__PURE__ */ o(De, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: z,
                type: "button",
                className: [Ue["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": P,
                disabled: _,
                onClick: Ge,
                children: /* @__PURE__ */ o(De, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          et && /* @__PURE__ */ o(
            "div",
            {
              id: P,
              role: f ? void 0 : "dialog",
              "aria-label": f ? void 0 : w ?? "Date picker",
              className: f ? void 0 : Ue["dx-datepicker-popup"],
              children: ct
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
  const [f, g] = W(e), m = F(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), y = F(
    (_) => {
      d?.(_), u?.(_);
    },
    [d, u]
  ), p = F(
    (_) => {
      n || r || (y(_), g(_));
    },
    [n, r, y]
  ), b = (_) => {
    if (n || r) return;
    const x = f > 0 ? f : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), p(m(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), p(m(x - 1));
        break;
      case "Home":
        _.preventDefault(), p(1);
        break;
      case "End":
        _.preventDefault(), p(t);
        break;
    }
  }, h = Array.from({ length: t }, (_, x) => x + 1);
  return /* @__PURE__ */ I(
    "div",
    {
      role: "radiogroup",
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
            onClick: () => p(0),
            children: /* @__PURE__ */ o(De, { icon: "block", size: 16 })
          }
        ),
        h.map((_) => {
          const x = _ <= e, N = _ === (e > 0 ? e : f);
          return /* @__PURE__ */ I(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${c} ${_}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                x ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(_),
              onFocus: () => g(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Xn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(De, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Xn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: "star", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, tr = {
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
  tabIndex: g = 0,
  className: m,
  onChange: y,
  onInput: p,
  onValueChange: b,
  onInputChange: h
}) => {
  const _ = oe(null), x = oe(
    null
  ), [N, w] = W(null), C = N ?? e, $ = Oe(
    () => Sn(C, r, a),
    [C, r, a]
  ), M = Oe(
    () => Sn(c ? t : $, r, a),
    [c, t, $, r, a]
  ), T = Oe(
    () => Sn(c ? Math.max(n, M) : $, r, a),
    [c, n, M, $, r, a]
  ), A = F(
    (G) => {
      const _e = a - r;
      return _e <= 0 ? 0 : (Sn(G, r, a) - r) / _e * 100;
    },
    [r, a]
  ), D = F(
    (G, _e) => {
      const ie = _.current;
      if (!ie) return r;
      const he = ie.getBoundingClientRect();
      let ue;
      s === "vertical" ? ue = 1 - (_e - he.top) / he.height : ue = (G - he.left) / he.width;
      const Se = r + Sn(ue, 0, 1) * (a - r);
      return i > 0 ? Sn(Math.round(Se / i) * i, r, a) : Sn(Se, r, a);
    },
    [r, a, i, s]
  ), E = F(
    (G) => {
      typeof G == "number" && w(G), y?.(G), b?.(G);
    },
    [y, b]
  ), k = F(
    (G) => {
      typeof G == "number" && w(G), p?.(G), h?.(G);
    },
    [p, h]
  ), v = F(
    (G, _e, ie) => {
      const he = D(_e, ie);
      let ue;
      c ? G === "min" ? ue = { min: Math.min(he, T), max: T } : ue = { min: M, max: Math.max(he, M) } : ue = he, k(ue), x.current === null && E(ue);
    },
    [c, D, M, T, k, E]
  ), O = F(
    (G, _e) => {
      const ie = (i > 0 ? i : 1) * _e;
      let he;
      c ? G === "min" ? he = {
        min: Sn(M + ie, r, T),
        max: T
      } : he = {
        min: M,
        max: Sn(T + ie, M, a)
      } : he = Sn($ + ie, r, a), E(he);
    },
    [c, i, r, a, M, T, $, E]
  ), z = (G, _e) => {
    if (!l)
      switch (_e.key) {
        case "ArrowLeft":
        case "ArrowDown":
          _e.preventDefault(), O(G, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          _e.preventDefault(), O(G, 1);
          break;
        case "Home":
          _e.preventDefault(), E(c ? G === "min" ? { min: r, max: T } : { min: M, max: M } : r);
          break;
        case "End":
          _e.preventDefault(), E(c ? G === "min" ? { min: T, max: T } : { min: M, max: a } : a);
          break;
      }
  }, L = (G, _e) => {
    l || (_e.preventDefault(), _e.currentTarget.focus(), typeof _e.currentTarget.setPointerCapture == "function" && _e.currentTarget.setPointerCapture(_e.pointerId), x.current = { key: G, pointerId: _e.pointerId }, v(G, _e.clientX, _e.clientY));
  }, P = (G) => {
    !x.current || x.current.pointerId !== G.pointerId || (G.preventDefault(), v(x.current.key, G.clientX, G.clientY));
  }, B = (G) => {
    !x.current || x.current.pointerId !== G.pointerId || (x.current = null, G.preventDefault(), E(c ? { min: M, max: T } : $));
  }, [Y, se] = W(null), Q = A(M), be = A(T), ne = c ? Q : 0, pe = be;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        tr["dx-slider"],
        s === "vertical" ? tr["dx-slider-vertical"] : null,
        l ? tr["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ I("div", { ref: _, className: tr["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: tr["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${ne}%`, height: `${pe - ne}%` } : { left: `${ne}%`, width: `${pe - ne}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(M),
            "aria-orientation": s,
            "aria-label": c ? u : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && Y === "max" ? -1 : g,
            className: tr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${Q}% - 8px)` } : { left: `calc(${Q}% - 8px)` },
            onKeyDown: (G) => z("min", G),
            onPointerDown: (G) => L("min", G),
            onPointerMove: P,
            onPointerUp: B,
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
            tabIndex: l || Y === "min" ? -1 : g,
            className: tr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${be}% - 8px)` } : { left: `calc(${be}% - 8px)` },
            onKeyDown: (G) => z("max", G),
            onPointerDown: (G) => L("max", G),
            onPointerMove: P,
            onPointerUp: B,
            onFocus: () => se("max")
          }
        )
      ] })
    }
  );
}, ft = {
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
}, Cv = "-10675199.02:48:05.4775808", Av = "10675199.02:48:05.4775808", Pn = 86400, jn = 3600, vn = 60, Ho = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, pa = {
  days: Pn,
  hours: jn,
  minutes: vn,
  seconds: 1
}, Dv = {
  day: Pn,
  hour: jn,
  minute: vn,
  second: 1
};
function hr(e) {
  return String(e).padStart(2, "0");
}
function Kr(e) {
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
    return n * (s * Pn + l * jn + d * vn + u);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, u = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || d > 59 ? null : n * (c * Pn + s * jn + l * vn + d + u);
  }
  return null;
}
function Iv(e) {
  return e.days * Pn + e.hours * jn + e.minutes * vn + e.seconds;
}
function ha(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Pn);
  t %= Pn;
  const r = Math.floor(t / jn);
  t %= jn;
  const a = Math.floor(t / vn), i = Math.round(t % vn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function ts(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / vn) * vn : t === "hour" ? r = Math.round(r / jn) * jn : t === "day" && (r = Math.round(r / Pn) * Pn);
  let a = Math.round(r % vn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / vn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, u = Math.floor(l / 24), f = n ? "-" : "", g = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${g}${hr(d)}`;
    case "minute":
      return `${f}${g}${hr(d)}:${hr(s)}`;
    default:
      return `${f}${g}${hr(d)}:${hr(s)}:${hr(a)}`;
  }
}
function ma(e, t = "second") {
  const n = Kr(e);
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
    min: i = Cv,
    max: c = Av,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: g = !0,
    allowClear: m = !1,
    inline: y = !1,
    onChange: p,
    onValueChange: b,
    onOpen: h,
    onClose: _,
    disabled: x,
    placeholder: N,
    ariaLabel: w,
    triggerLabel: C,
    clearLabel: $,
    tabIndex: M,
    className: T,
    onBlur: A,
    onKeyDown: D,
    ...E
  }, k) {
    const v = oe(null), O = oe(null), z = oe(null), L = lt(), P = r !== void 0, [B, Y] = W(
      () => a != null ? ma(a, l) : ""
    ), [se, Q] = W(!1), [be, ne] = W(null), [pe, G] = W(null), _e = Oe(
      () => Kr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ie = Oe(
      () => Kr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), he = Oe(() => {
      const ae = Number.parseFloat(s);
      return Number.isNaN(ae) || ae <= 0 ? 1 : ae;
    }, [s]), ue = Oe(() => {
      const ae = P ? r ?? "" : B;
      return ae ? Kr(ae) : null;
    }, [r, B, P]), Se = F(
      (ae) => {
        const ze = ae === null ? "" : ts(ae, l);
        P || Y(ze), p?.(ze), b?.(ze);
      },
      [P, l, p, b]
    ), q = F(
      (ae) => {
        ae && be !== null && Se(be), Q(!1), ne(null), G(null), _?.(), y || z.current?.focus();
      },
      [y, be, Se, _]
    ), Ee = F(() => {
      x || (ne(ue ?? 0), Q(!0), h?.());
    }, [x, ue, h]), re = F(() => {
      se ? q(!1) : Ee();
    }, [se, q, Ee]), Ae = F(
      (ae, ze) => {
        ne((Nt) => {
          const xt = (Nt ?? ue ?? 0) + ze * he * pa[ae];
          return Uo(xt, _e, ie);
        });
      },
      [ue, he, _e, ie]
    ), me = F(
      (ae) => {
        const ze = pe?.[ae];
        if (ze == null) return;
        const Nt = Number.parseFloat(ze), Rt = Number.isNaN(Nt) ? 0 : Nt;
        ne((xt) => {
          const Ie = xt ?? ue ?? 0, qe = ha(Ie);
          qe[ae] = Rt;
          const Ot = (Ie < 0 ? -1 : 1) * Iv(qe);
          return Uo(Ot, _e, ie);
        }), G(null);
      },
      [pe, ue, _e, ie]
    ), Fe = (ae, ze) => {
      G((Nt) => ({ ...Nt ?? {}, [ae]: ze }));
    }, Ge = (ae, ze) => {
      switch (ze.key) {
        case "ArrowUp":
          ze.preventDefault(), me(ae), Ae(ae, 1);
          break;
        case "ArrowDown":
          ze.preventDefault(), me(ae), Ae(ae, -1);
          break;
        case "Home":
          ze.preventDefault(), me(ae), ne(_e);
          break;
        case "End":
          ze.preventDefault(), me(ae), ne(ie);
          break;
        case "Enter":
          ze.preventDefault(), me(ae), q(!0);
          break;
      }
    }, Qe = F(() => {
      if (se) return;
      const ae = Kr(B);
      Se(ae !== null ? Uo(ae, _e, ie) : null);
    }, [se, B, _e, ie, Se]), Ct = (ae) => {
      P || Y(ae.target.value);
    }, it = (ae) => {
      ae.key === "Enter" ? (ae.preventDefault(), se ? q(!0) : Qe()) : ae.key === "Escape" && se ? (ae.preventDefault(), q(!1)) : ae.key === "ArrowDown" && !se ? (ae.preventDefault(), Ee()) : ae.key === "Tab" && se && Q(!1), D?.(ae);
    }, bt = (ae) => {
      Qe(), A?.(ae);
    }, Z = () => {
      P || Y(""), p?.(""), b?.(""), O.current?.focus();
    };
    we(() => {
      if (!se) return;
      const ae = (ze) => {
        v.current && !v.current.contains(ze.target) && q(!1);
      };
      return document.addEventListener("mousedown", ae), () => document.removeEventListener("mousedown", ae);
    }, [se, q]), we(() => {
      if (!se) return;
      const ae = (ze) => {
        ze.key === "Escape" && q(!1);
      };
      return document.addEventListener("keydown", ae), () => document.removeEventListener("keydown", ae);
    }, [se, q]), we(() => {
      if (y && be !== null) {
        const ae = ue;
        (ae === null || Math.abs(be - ae) > 1e-9) && Se(be);
      }
    }, [y, be, ue, Se]);
    const R = F(
      (ae) => {
        O.current = ae, typeof k == "function" ? k(ae) : k && (k.current = ae);
      },
      [k]
    ), X = P ? r ? ma(r, l) : "" : B, ee = P ? !!r : B.length > 0, ye = y || se, ce = be ?? ue ?? 0, Me = ha(ce), je = Dv[l], et = ["days", "hours", "minutes", "seconds"].filter(
      (ae) => pa[ae] >= je && (ae === "days" ? d : ae === "hours" ? u : ae === "minutes" ? f : g)
    ), ot = t === "xs" ? ft["dx-timespanpicker-input--xs"] : t === "sm" ? ft["dx-timespanpicker-input--sm"] : t === "lg" ? ft["dx-timespanpicker-input--lg"] : t === "xl" ? ft["dx-timespanpicker-input--xl"] : ft["dx-timespanpicker-input--md"], Zt = /* @__PURE__ */ I("div", { className: ft["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-demos"], "aria-live": "polite", children: ts(ce, l) }),
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-units"], children: et.map((ae) => /* @__PURE__ */ I("label", { className: ft["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: ft["dx-timespanpicker-unit-label"], children: Ho[ae] }),
        /* @__PURE__ */ I("span", { className: ft["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: ft["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: pe?.[ae] ?? String(Me[ae]),
              onChange: (ze) => Fe(ae, ze.target.value),
              onKeyDown: (ze) => Ge(ae, ze),
              onBlur: () => me(ae)
            }
          ),
          /* @__PURE__ */ I("span", { className: ft["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ho[ae].toLowerCase()}`,
                onClick: () => {
                  me(ae), Ae(ae, 1);
                },
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Ho[ae].toLowerCase()}`,
                onClick: () => {
                  me(ae), Ae(ae, -1);
                },
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, ae)) }),
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: ft["dx-timespanpicker-ok"],
          onClick: () => q(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ I(
      "div",
      {
        ref: v,
        className: [
          ft["dx-timespanpicker"],
          y ? ft["dx-timespanpicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !y && /* @__PURE__ */ I(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: R,
                type: "text",
                autoComplete: "off",
                value: X,
                disabled: x,
                placeholder: N,
                tabIndex: M,
                role: "combobox",
                "aria-label": w ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": se,
                "aria-controls": L,
                "aria-invalid": n || void 0,
                className: [
                  ft["dx-timespanpicker-input"],
                  ot,
                  n ? ft["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Ct,
                onKeyDown: it,
                onBlur: bt,
                ...E
              }
            ),
            m && !x && ee && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: ft["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
                onClick: Z,
                children: /* @__PURE__ */ o(De, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: z,
                type: "button",
                className: [ft["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": se,
                "aria-controls": L,
                disabled: x,
                onClick: re,
                children: /* @__PURE__ */ o(De, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ye && /* @__PURE__ */ o(
            "div",
            {
              id: L,
              role: y ? void 0 : "dialog",
              "aria-label": w ?? "Time span picker",
              className: y ? void 0 : ft["dx-timespanpicker-popup"],
              children: Zt
            }
          )
        ]
      }
    );
  }
), Lv = "_wrapper_ou9x5_1", zv = "_cells_ou9x5_8", Rv = "_cell_ou9x5_8", Pv = "_invalid_ou9x5_63", jv = "_live_ou9x5_73", nr = {
  wrapper: Lv,
  cells: zv,
  cell: Rv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Pv,
  live: jv
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
    className: f,
    "aria-label": g
  }, m) {
    const y = lt(), p = n !== void 0, [b, h] = W(ga(r).join("")), _ = p ? ga(n).join("") : b, x = Array.from({ length: t }, (E, k) => _[k] ?? ""), N = oe([]), [w, C] = W(""), $ = (E) => {
      p || h(E), a?.(E);
    }, M = (E) => {
      const k = N.current[E];
      k && !k.disabled && (k.focus(), k.select());
    }, T = (E, k) => {
      const v = k.replace(/\D/g, "").slice(-1), O = _.split("");
      if (v) {
        O[E] = v;
        const z = O.join("").slice(0, t);
        $(z), z.length < t ? M(E + 1) : u && C("Code complete");
      }
    }, A = (E, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), _[E]) {
          const v = _.split("");
          v[E] = "", $(v.join(""));
        } else if (E > 0) {
          const v = _.split("");
          v[E - 1] = "", $(v.join("")), M(E - 1);
        }
      } else k.key === "ArrowLeft" && E > 0 ? (k.preventDefault(), M(E - 1)) : k.key === "ArrowRight" && E < t - 1 ? (k.preventDefault(), M(E + 1)) : k.key === "Home" ? (k.preventDefault(), M(0)) : k.key === "End" && (k.preventDefault(), M(t - 1));
    }, D = (E, k) => {
      k.preventDefault();
      const v = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!v) return;
      const O = _.split("");
      let z = 0;
      for (let P = 0; P < v.length && E + P < t; P++)
        O[E + P] = v[P] ?? "", z++;
      const L = O.join("");
      $(L), L.length >= t ? u && C("Code complete") : M(E + z);
    };
    return /* @__PURE__ */ I(
      "div",
      {
        className: [nr.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": g ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [nr.cells, nr[c]].join(" "), children: x.map((E, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (v) => {
                N.current[k] = v, k === 0 && m && (typeof m == "function" ? m(v) : m.current = v);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: E,
              disabled: l,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": i && E !== "" ? !0 : void 0,
              autoFocus: s && k === 0,
              className: [
                nr.cell,
                nr[`cell-${c}`],
                i ? nr.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (v) => T(k, v.target.value),
              onKeyDown: (v) => A(k, v),
              onPaste: (v) => D(k, v),
              onFocus: (v) => v.target.select(),
              onBlur: () => {
                u && C("");
              }
            },
            k
          )) }),
          u && /* @__PURE__ */ o(
            "span",
            {
              id: `${y}-live`,
              role: "status",
              "aria-live": "polite",
              className: nr.live,
              children: w
            }
          )
        ]
      }
    );
  }
), Bv = "_wrapper_6lcd5_1", Fv = "_header_6lcd5_7", Hv = "_label_6lcd5_15", Uv = "_clear_6lcd5_22", Wv = "_canvas_6lcd5_53", qv = "_disabled_6lcd5_69", mr = {
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
  }, g) {
    const m = oe(null), y = oe(!1), p = oe(!1), b = oe({ x: 0, y: 0 });
    we(() => {
      const $ = m.current;
      if (!$) return;
      const M = window.devicePixelRatio || 1, T = Math.round((l ?? $.clientWidth) * M), A = Math.round(d * M);
      ($.width !== T || $.height !== A) && ($.width = T, $.height = A);
      const D = $.getContext("2d");
      if (!D) return;
      D.setTransform(M, 0, 0, M, 0, 0), D.lineWidth = i, D.strokeStyle = a, D.lineCap = "round", D.lineJoin = "round";
      const E = t ?? n;
      if (E) {
        const k = new Image();
        k.onload = () => {
          D.drawImage(k, 0, 0, $.clientWidth, d);
        }, k.src = E;
      }
    }, [t, n, a, i, l, d]);
    const h = () => {
      const $ = m.current;
      if (!$) return;
      const M = $.toDataURL("image/png");
      r?.(M);
    }, _ = () => {
      const $ = m.current;
      if (!$) return;
      const M = $.getContext("2d");
      M && M.clearRect(0, 0, $.width, $.height), r?.("");
    };
    ko(g, () => ({
      clear: _,
      toDataURL: ($ = "image/png", M) => m.current?.toDataURL($, M) ?? ""
    }));
    const x = ($) => {
      const M = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - M.left, y: $.clientY - M.top };
    }, N = ($) => {
      u || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), y.current = !0, p.current = !1, b.current = x($));
    }, w = ($) => {
      if (!y.current) return;
      $.preventDefault();
      const M = $.currentTarget.getContext("2d");
      if (!M) return;
      const T = x($);
      M.beginPath(), M.moveTo(b.current.x, b.current.y), M.lineTo(T.x, T.y), M.stroke(), b.current = T, p.current = !0;
    }, C = ($) => {
      y.current && ($.preventDefault(), y.current = !1, p.current && h());
    };
    return /* @__PURE__ */ I(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          mr.wrapper,
          f,
          u ? mr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ I("div", { className: mr.header, children: [
            /* @__PURE__ */ o("span", { className: mr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: mr.clear,
                onClick: _,
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
              "aria-disabled": u || void 0,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${d}px`
              },
              className: mr.canvas,
              onPointerDown: N,
              onPointerMove: w,
              onPointerUp: C,
              onPointerCancel: C
            }
          )
        ]
      }
    );
  }
), Kv = "_wrapper_dsvd2_1", Gv = "_trigger_dsvd2_7", Vv = "_list_dsvd2_35", Yv = "_row_dsvd2_44", Xv = "_name_dsvd2_59", Zv = "_size_dsvd2_68", Jv = "_progress_dsvd2_74", Qv = "_fill_dsvd2_82", ew = "_status_dsvd2_99", tw = "_remove_dsvd2_106", On = {
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
  onProgress: f,
  onComplete: g,
  onError: m
}, y) {
  const p = oe(null), [b, h] = W([]), _ = oe(/* @__PURE__ */ new Map()), x = (M, T) => {
    h(
      (A) => A.map((D) => D.file.name === M ? { ...D, ...T } : D)
    );
  }, N = (M) => {
    if (!t) return;
    const T = new XMLHttpRequest();
    _.current.set(M.file.name, T);
    const A = new FormData();
    if (A.append(r, M.file), T.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const E = Math.round(D.loaded / D.total * 100);
      x(M.file.name, { state: "uploading", progress: E }), f?.(M.file.name, E);
    }), T.addEventListener("load", () => {
      T.status >= 200 && T.status < 300 ? (x(M.file.name, { state: "complete", progress: 100 }), g?.(M.file.name)) : (x(M.file.name, {
        state: "error",
        message: `HTTP ${T.status}`
      }), m?.(M.file.name, `HTTP ${T.status}`));
    }), T.addEventListener("error", () => {
      x(M.file.name, { state: "error", message: "Network error" }), m?.(M.file.name, "Network error");
    }), i)
      for (const [D, E] of Object.entries(i))
        T.setRequestHeader(D, E);
    T.open("POST", t), T.send(A), x(M.file.name, { state: "uploading", progress: 0 });
  }, w = (M) => {
    if (!M) return;
    const T = [...M], A = [];
    let D = Math.max(0, s - b.length);
    for (const k of T) {
      if (l != null && k.size > l) {
        m?.(
          k.name,
          `File too large (maximum ${ya(l)})`
        );
        continue;
      }
      if (D <= 0) {
        m?.(k.name, `Too many files (maximum ${s})`);
        continue;
      }
      D -= 1, A.push(k);
    }
    const E = A.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    h((k) => [...k, ...E]), p.current && (p.current.value = ""), a && E.forEach(N);
  }, C = (M) => {
    _.current.get(M)?.abort(), _.current.delete(M), h((A) => A.filter((D) => D.file.name !== M));
  }, $ = u ?? /* @__PURE__ */ I(
    "button",
    {
      type: "button",
      className: On.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ o(De, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return ko(y, () => ({
    open: () => p.current?.click(),
    upload: () => b.forEach((M) => M.state === "pending" ? N(M) : null)
  })), /* @__PURE__ */ I("div", { className: On.wrapper, children: [
    $,
    /* @__PURE__ */ o(
      "input",
      {
        ref: p,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: (M) => w(M.target.files)
      }
    ),
    !u && b.length > 0 && /* @__PURE__ */ o("ul", { className: On.list, children: b.map(({ file: M, state: T, progress: A, message: D }) => /* @__PURE__ */ I(
      "li",
      {
        className: On.row,
        "data-state": T,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: On.name, children: M.name }),
          /* @__PURE__ */ o("span", { className: On.size, children: ya(M.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${M.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": A,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: On.fill,
                  style: { width: `${A}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: On.status, role: "status", children: T === "uploading" ? "Uploading" : T === "complete" ? "Complete" : T === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${M.name}`,
              onClick: () => C(M.name),
              children: /* @__PURE__ */ o(De, { icon: "close", size: 14 })
            }
          )
        ]
      },
      M.name
    )) })
  ] });
}), nw = "_zone_nl0bz_1", rw = "_dragging_nl0bz_23", ow = "_caption_nl0bz_28", sw = "_browse_nl0bz_40", aw = "_disabled_nl0bz_67", Br = {
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
    const u = oe(null), [f, g] = W(!1), m = (_) => {
      if (!_ || _.length === 0) return;
      const x = [..._].filter((N) => lw(N, t ?? ""));
      x.length !== 0 && r?.(x);
    }, y = (_) => {
      s || (_.preventDefault(), g(!0));
    }, p = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", g(!0));
    }, b = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || g(!1);
    }, h = (_) => {
      s || (_.preventDefault(), g(!1), m(_.dataTransfer.files));
    };
    return ko(d, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ I(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": s || void 0,
        className: [
          Br.zone,
          f ? Br.dragging : null,
          s ? Br.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: y,
        onDragOver: p,
        onDragLeave: b,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Br.caption, children: f ? i : a }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Br.browse,
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
              onChange: (_) => {
                m(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), iw = "_root_1a92d_1", cw = "_menubar_1a92d_5", dw = "_horizontal_1a92d_15", uw = "_vertical_1a92d_20", fw = "_itemWrapper_1a92d_25", _w = "_item_1a92d_25", pw = "_disabled_1a92d_61", hw = "_icon_1a92d_68", mw = "_text_1a92d_75", gw = "_caret_1a92d_79", yw = "_hasChildren_1a92d_85", bw = "_submenu_1a92d_94", xw = "_submenuItem_1a92d_118", vw = "_flyout_1a92d_155", ww = "_hamburger_1a92d_175", kw = "_responsive_1a92d_198", Nw = "_mobileOpen_1a92d_207", pt = {
  root: iw,
  menubar: cw,
  horizontal: dw,
  vertical: uw,
  itemWrapper: fw,
  item: _w,
  disabled: pw,
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
}, vo = lr(null);
function $w(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Sw(e, t, n, r, a) {
  const [i, c] = W(n), s = e ? t ?? !1 : i, l = F(
    (d) => {
      e || c(d), r?.(d);
    },
    [e, r]
  );
  return we(() => {
    a > 0 && l(!1);
  }, [a]), [s, l];
}
function Ow({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: pt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: pt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(De, { icon: e, size: 16 })
    }
  ) : null;
}
function Ga(e) {
  return Wt(e) && e.type === Va;
}
function us({
  itemKey: e,
  props: t
}) {
  const n = Bn(vo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Oe(
    () => Xr.toArray(t.children).filter(Wt),
    [t.children]
  ), d = l.length > 0, u = !!c, f = t.open !== void 0, [g, m] = Sw(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), y = n.level === 0, p = oe(0), h = (y && !f ? n.openKey === e : null) ?? g, _ = F(
    (z) => {
      y && !f ? n.setOpenKey(z ? e : null) : (m(z), y && n.setOpenKey(null));
    },
    [y, f, n, e, m]
  ), [, x] = W(0);
  we(() => {
    if (!i) return;
    const z = () => x((L) => L + 1);
    return window.addEventListener("hashchange", z), () => window.removeEventListener("hashchange", z);
  }, [i]);
  const N = i && !d ? $w(i, t.match) : !1, w = F(
    (z) => {
      if (u) {
        z.preventDefault();
        return;
      }
      const L = { text: r, value: a, path: i };
      [n.emit(L), t.onClick?.(L)].includes(!1) && z.preventDefault(), n.closeAll();
    },
    [u, r, a, i, n, t]
  ), C = F(() => {
    if (!u) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [u, h, _, n.clickToOpen]), $ = F(() => {
    !d || u || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [d, u, n.clickToOpen, _]), M = F(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), T = `${n.baseId}-submenu-${e}`, [A, D] = W(null);
  we(() => {
    n.closeSignal > 0 && D(null);
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
      openKey: A,
      setOpenKey: D
    }),
    [n, A]
  ), k = d ? /* @__PURE__ */ o("span", { className: pt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    De,
    {
      icon: n.flyout && !y ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, v = s ?? /* @__PURE__ */ I(rt, { children: [
    /* @__PURE__ */ o(
      Ow,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: pt.text, children: r }),
    k
  ] });
  if (d) {
    let z = function(L) {
      const P = Array.from(L.currentTarget.children).map((se) => se.querySelector('[role="menuitem"]')).filter(
        (se) => se != null && se.getAttribute("aria-disabled") !== "true" && !se.hasAttribute("disabled")
      ), B = document.activeElement, Y = B ? P.indexOf(B) : -1;
      L.key === "ArrowDown" ? (L.preventDefault(), L.stopPropagation(), (Y === -1 ? P[0] : P[(Y + 1) % P.length])?.focus()) : L.key === "ArrowUp" ? (L.preventDefault(), L.stopPropagation(), (Y === -1 ? P[P.length - 1] : P[(Y - 1 + P.length) % P.length])?.focus()) : L.key === "ArrowRight" ? B?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), L.stopPropagation(), B.getAttribute("aria-expanded") !== "true" && B.click(), document.getElementById(
        B.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (L.key === "ArrowLeft" || L.key === "Escape") && (L.preventDefault(), L.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ I(
      "div",
      {
        className: pt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : $,
        onMouseLeave: n.clickToOpen ? void 0 : M,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": y ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": T,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                pt.item,
                u ? pt.disabled : null,
                pt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: C,
              children: v
            }
          ),
          h ? /* @__PURE__ */ o(
            "div",
            {
              id: T,
              role: "menu",
              "aria-label": r,
              className: [
                pt.submenu,
                n.flyout && !y ? pt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: z,
              children: /* @__PURE__ */ o(vo.Provider, { value: E, children: l.map(
                (L, P) => Ga(L) ? /* @__PURE__ */ o(
                  us,
                  {
                    itemKey: `${e}-${P}`,
                    props: L.props
                  },
                  `${e}-${P}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ss, { children: L }, `${e}-custom-${P}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const O = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [pt.submenuItem, u ? pt.disabled : null].filter(Boolean).join(" "),
    onClick: w
  };
  return i && !u ? /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...O, children: v }) }) : /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: u, ...O, children: v }) });
}
function Va(e) {
  if (!Bn(vo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(us, { itemKey: e.text, props: e });
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
  const f = lt(), g = oe(null), m = oe(null), [y, p] = W(null), [b, h] = W(0), [_, x] = W(!1), N = oe(null), w = F(
    (A) => i?.(A),
    [i]
  ), C = F(() => {
    p(null), h((A) => A + 1);
  }, []);
  we(() => {
    if (y == null) return;
    const A = (D) => {
      g.current && !g.current.contains(D.target) && C();
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, [y, C]), we(() => {
    N.current != null && y === N.current && (document.getElementById(`${f}-submenu-${y}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [y, f]);
  const $ = Oe(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: b,
      emit: w,
      closeAll: C,
      openKey: y,
      setOpenKey: p
    }),
    [f, n, t, b, w, C, y]
  ), M = Oe(
    () => Xr.toArray(e).filter(Wt),
    [e]
  ), T = (A) => {
    const D = m.current;
    if (!D) return;
    const E = Array.from(D.children).map((O) => O.querySelector('[role="menuitem"]')).filter(
      (O) => O != null && !O.hasAttribute("disabled") && O.getAttribute("aria-disabled") !== "true"
    );
    if (y != null) {
      const O = document.getElementById(`${f}-submenu-${y}`);
      if (O) {
        const z = Array.from(
          O.querySelectorAll('[role="menuitem"]')
        ).filter(
          (B) => B.getAttribute("aria-disabled") !== "true" && !B.hasAttribute("disabled")
        ), L = document.activeElement, P = L ? z.indexOf(L) : -1;
        if (A.key === "ArrowDown") {
          A.preventDefault(), (P === -1 ? z[0] : z[(P + 1) % z.length])?.focus();
          return;
        }
        if (A.key === "ArrowUp") {
          A.preventDefault(), (P === -1 ? z[z.length - 1] : z[(P - 1 + z.length) % z.length])?.focus();
          return;
        }
        if (A.key === "Escape") {
          A.preventDefault(), C(), c?.(), D.querySelector(`[data-index="${y}"]`)?.focus();
          return;
        }
        if (A.key === "Enter" || A.key === " ") return;
      }
      if (A.key === "Escape") {
        A.preventDefault(), C(), c?.();
        return;
      }
    }
    const k = document.activeElement, v = k ? E.indexOf(k) : -1;
    if (A.key === "ArrowRight") {
      if (A.preventDefault(), E.length === 0) return;
      E[v === -1 ? 0 : (v + 1) % E.length]?.focus();
      return;
    }
    if (A.key === "ArrowLeft") {
      if (A.preventDefault(), E.length === 0) return;
      E[v === -1 ? E.length - 1 : (v - 1 + E.length) % E.length]?.focus();
      return;
    }
    if (A.key === "ArrowDown") {
      if (v >= 0) {
        const O = k?.getAttribute("data-index");
        if (O == null) return;
        D.querySelector(
          `[data-index="${O}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (A.preventDefault(), N.current = O, p(O));
      }
      return;
    }
    if (A.key === "Home") {
      A.preventDefault(), E[0]?.focus();
      return;
    }
    if (A.key === "End") {
      A.preventDefault(), E[E.length - 1]?.focus();
      return;
    }
    if (A.key.length === 1 && !A.ctrlKey && !A.metaKey) {
      const O = E.map((L) => L.textContent ?? ""), z = v === -1 ? 0 : (v + 1) % E.length;
      for (let L = 0; L < E.length; L++) {
        const P = (z + L) % E.length;
        if (O[P]?.toLowerCase().startsWith(A.key.toLowerCase())) {
          A.preventDefault(), E[P]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ I(
    "nav",
    {
      ref: g,
      "aria-label": s,
      className: [
        pt.root,
        a ? pt.vertical : pt.horizontal,
        r ? pt.responsive : null,
        r && _ ? pt.mobileOpen : null,
        n ? pt.flyoutRoot : null,
        d
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": _,
            className: pt.hamburger,
            onClick: () => x((A) => !A),
            children: /* @__PURE__ */ o(De, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: m,
            role: a ? "menu" : "menubar",
            "aria-label": s,
            className: pt.menubar,
            onKeyDown: T,
            children: /* @__PURE__ */ o(vo.Provider, { value: $, children: M.map(
              (A, D) => Ga(A) ? /* @__PURE__ */ o(
                us,
                {
                  itemKey: String(D),
                  props: A.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ o(ss, { children: A }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const Mw = "_popup_18kyn_1", Tw = "_menu_18kyn_22", ns = {
  popup: Mw,
  menu: Tw
}, Ya = lr(null);
function GS() {
  const e = Bn(Ya);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Xa(e) {
  return e.map((t, n) => {
    const { children: r, ...a } = t;
    return /* @__PURE__ */ o(Va, { ...a, children: r ? Xa(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Cw({ state: e, onClose: t }) {
  const n = oe(null), [r, a] = W({ left: e.x, top: e.y });
  Wo(() => {
    const c = n.current;
    if (!c) return;
    const s = c.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), we(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = F(
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
        Ew,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Xa(e.options.items ?? [])
        }
      ) })
    }
  );
}
function VS({ children: e }) {
  const [t, n] = W(null), r = F(() => {
    n((c) => (c?.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = F(
    (c, s) => {
      c.preventDefault();
      const l = c.currentTarget ?? c.target;
      n({ x: c.clientX, y: c.clientY, invoker: l, options: s });
    },
    []
  );
  we(() => {
    if (!t) return;
    const c = (u) => {
      const f = document.querySelector(`.${ns.popup}`);
      f && !f.contains(u.target) && r();
    }, s = (u) => {
      u.key === "Escape" && (u.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = Oe(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ I(Ya.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Cw, { state: t, onClose: r }) : null
  ] });
}
const Aw = "_root_rgcia_1", Dw = "_list_rgcia_9", Iw = "_item_rgcia_14", Lw = "_trigger_rgcia_18", zw = "_disabled_rgcia_45", Rw = "_expanded_rgcia_52", Pw = "_selected_rgcia_56", jw = "_icon_rgcia_61", Bw = "_text_rgcia_72", Fw = "_caret_rgcia_79", Hw = "_open_rgcia_86", Uw = "_submenu_rgcia_90", Ww = "_iconOnly_rgcia_172", qw = "_stacked_rgcia_201", zt = {
  root: Aw,
  list: Dw,
  item: Iw,
  trigger: Lw,
  disabled: zw,
  expanded: Rw,
  selected: Pw,
  icon: jw,
  text: Bw,
  caret: Fw,
  open: Hw,
  submenu: Uw,
  iconOnly: Ww,
  stacked: qw
}, wo = lr(null);
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
  return n ? /* @__PURE__ */ o("span", { className: zt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: zt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(De, { icon: e, size: 16 })
    }
  ) : null;
}
function fs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Bn(wo);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = Oe(
    () => Xr.toArray(n.children).filter(Wt),
    [n.children]
  ), d = l.length > 0, u = !!s, f = n.match ?? r.match, g = n.expanded !== void 0, [m, y] = W(
    n.defaultExpanded ?? !1
  ), p = g ? n.expanded ?? !1 : m, b = F(
    (B) => {
      g || y(B), n.onExpandedChange?.(B);
    },
    [g, n]
  );
  we(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && b(!1);
  }, [r.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, x] = W(
    n.defaultSelected ?? !1
  ), N = !h && c ? Gw(c, f) : !1, w = n.selected ?? (h ? _ : N || _), [, C] = W(0);
  we(() => {
    if (!c) return;
    const B = () => C((Y) => Y + 1);
    return window.addEventListener("hashchange", B), () => window.removeEventListener("hashchange", B);
  }, [c]);
  const $ = Oe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        b(!0), r.openAncestors();
      }
    }),
    [r, b]
  );
  we(() => {
    N && t.length > 0 && $.openAncestors();
  }, []);
  const M = F(
    (B) => {
      if (u) {
        B.preventDefault();
        return;
      }
      const Y = { text: a, value: i, path: c };
      [r.emit(Y), n.onClick?.(Y)].includes(!1) && B.preventDefault(), h || x(!0), n.onSelectedChange?.(!0);
    },
    [u, a, i, c, r, n, h]
  ), T = F(() => {
    u || (p || r.notifyOpened(e, t), b(!p));
  }, [u, p, r, e, t, b]), A = F(
    (B) => {
      B.key === "Enter" || B.key === " " ? (B.preventDefault(), d ? T() : B.target.click()) : B.key === "Escape" && p ? (B.preventDefault(), b(!1)) : B.key === "ArrowRight" && d && !p ? (B.preventDefault(), r.notifyOpened(e, t), b(!0)) : B.key === "ArrowLeft" && p && (B.preventDefault(), b(!1));
    },
    [d, T, p, b, r, e, t]
  ), D = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [zt.caret, p ? zt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, E = n.template ?? /* @__PURE__ */ I(rt, { children: [
    /* @__PURE__ */ o(
      Vw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: zt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: zt.text, children: a }),
    D
  ] }), k = `${r.baseId}-panel-${e}`, v = `${r.baseId}-trigger-${e}`, O = [
    zt.trigger,
    u ? zt.disabled : null,
    p ? zt.expanded : null,
    w ? zt.selected : null
  ].filter(Boolean).join(" "), z = r.level > 0 ? "menuitem" : void 0, L = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: v,
      role: z,
      "aria-expanded": p,
      "aria-controls": k,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: O,
      onClick: T,
      onKeyDown: A,
      children: E
    }
  ) : c && !u ? /* @__PURE__ */ o(
    "a",
    {
      id: v,
      role: z,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": w ? "page" : void 0,
      tabIndex: 0,
      className: O,
      onClick: M,
      onKeyDown: A,
      children: E
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: v,
      role: z,
      "aria-current": w ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: O,
      onClick: M,
      onKeyDown: A,
      children: E
    }
  ), P = d ? r.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: k,
      role: "menu",
      "aria-labelledby": v,
      className: zt.submenu,
      hidden: r.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(wo.Provider, { value: $, children: l.map((B, Y) => /* @__PURE__ */ o(
        fs,
        {
          itemKey: `${e}-${Y}`,
          ancestors: [...t, e],
          props: B.props
        },
        `${e}-${Y}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ I(
    "div",
    {
      className: zt.item,
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
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(fs, { itemKey: e.text, ancestors: [], props: e });
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
  const u = lt(), [f, g] = W(0), m = oe(/* @__PURE__ */ new Set()), y = F(
    (N) => c?.(N),
    [c]
  ), p = F(
    (N, w) => {
      t || (m.current = /* @__PURE__ */ new Set([N, ...w]), g((C) => C + 1));
    },
    [t]
  ), b = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (w) => !w.hasAttribute("disabled") && w.getAttribute("aria-disabled") !== "true" && w.closest("[hidden]") == null
  ), h = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const w = N.target, C = b(N.currentTarget), $ = C.indexOf(w);
        if ($ === -1) return;
        N.preventDefault();
        const M = N.key === "ArrowDown" ? 1 : -1;
        C[($ + M + C.length) % C.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const w = b(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? w[0] : w[w.length - 1])?.focus();
      }
    }
  }, _ = Oe(
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
      emit: y,
      notifyOpened: p,
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
      y,
      p
    ]
  ), x = Oe(
    () => Xr.toArray(e).filter(Wt),
    [e]
  );
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [
        zt.root,
        n === "icon" ? zt.iconOnly : null,
        n === "stacked" ? zt.stacked : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      ...d,
      children: /* @__PURE__ */ o("div", { className: zt.list, role: "presentation", children: /* @__PURE__ */ o(wo.Provider, { value: _, children: x.map((N, w) => /* @__PURE__ */ o(
        fs,
        {
          itemKey: String(w),
          ancestors: [],
          props: N.props
        },
        `top-${w}`
      )) }) })
    }
  );
}
const Yw = "_root_5numg_1", Xw = "_trigger_5numg_7", Zw = "_defaultTrigger_5numg_40", Jw = "_avatar_5numg_46", Qw = "_menu_5numg_58", e2 = "_item_5numg_74", t2 = "_disabled_5numg_88", n2 = "_active_5numg_97", r2 = "_icon_5numg_107", o2 = "_text_5numg_114", En = {
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
  const i = lt(), c = `${i}-menu`, s = oe(null), l = oe(null), [d, u] = W(!1), [f, g] = W(-1), m = t, y = e.map((w, C) => w.disabled ? -1 : C).filter((w) => w >= 0), p = F(
    (w) => {
      if (w.disabled) return;
      const C = {
        text: w.text,
        path: w.path
      };
      n?.(C), u(!1), l.current?.focus();
    },
    [n]
  ), b = F(() => {
    g(y[0] ?? -1), u(!0);
  }, [y]), h = F(() => {
    u(!1), g(-1), l.current?.focus();
  }, []);
  we(() => {
    if (!d) return;
    const w = (C) => {
      s.current && !s.current.contains(C.target) && (u(!1), g(-1));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [d]), we(() => {
    if (!d) return;
    const w = (C) => {
      C.key === "Escape" && (C.preventDefault(), h());
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [d, h]);
  const _ = (w) => {
    if (y.length === 0) return;
    const C = y.indexOf(f), $ = C === -1 ? 0 : (C + w + y.length) % y.length, M = y[$];
    M != null && g(M);
  }, x = (w) => {
    if (!d) {
      (w.key === "ArrowDown" || w.key === "Enter" || w.key === " ") && (w.preventDefault(), b());
      return;
    }
    switch (w.key) {
      case "Escape":
        w.preventDefault(), h();
        break;
      case "ArrowDown":
        w.preventDefault(), _(1);
        break;
      case "ArrowUp":
        w.preventDefault(), _(-1);
        break;
      case "Home":
        w.preventDefault(), y[0] != null && g(y[0]);
        break;
      case "End":
        w.preventDefault(), y[y.length - 1] != null && g(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (w.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && p(C);
        }
        break;
      case "Tab":
        u(!1), g(-1);
        break;
    }
  }, N = (w) => {
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), _(1);
        break;
      case "ArrowUp":
        w.preventDefault(), _(-1);
        break;
      case "Home":
        w.preventDefault(), y[0] != null && g(y[0]);
        break;
      case "End":
        w.preventDefault(), y[y.length - 1] != null && g(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (w.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && p(C);
        }
        break;
      case "Escape":
        w.preventDefault(), h();
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
      className: [En.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ I("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": c,
            "aria-label": r,
            className: En.trigger,
            onClick: () => d ? h() : b(),
            onKeyDown: x,
            children: m ?? /* @__PURE__ */ I("span", { className: En.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: En.avatar, "aria-hidden": "true", children: "●" }),
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
            className: En.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((w, C) => {
              const $ = !!w.disabled, M = C === f;
              return /* @__PURE__ */ I(
                "div",
                {
                  id: `${i}-item-${C}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [
                    En.item,
                    M ? En.active : null,
                    $ ? En.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || p(w);
                  },
                  onMouseEnter: () => {
                    $ || g(C);
                  },
                  children: [
                    w.icon ? /* @__PURE__ */ o("span", { className: En.icon, "aria-hidden": "true", children: w.icon }) : null,
                    /* @__PURE__ */ o("span", { className: En.text, children: w.text })
                  ]
                },
                `${w.text}-${C}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const s2 = "_root_vv0xs_1", a2 = "_bottomRight_vv0xs_11", l2 = "_bottomLeft_vv0xs_16", i2 = "_topRight_vv0xs_21", c2 = "_topLeft_vv0xs_26", d2 = "_menu_vv0xs_31", u2 = "_itemWrapper_vv0xs_48", f2 = "_tooltip_vv0xs_54", _2 = "_main_vv0xs_76", p2 = "_mainIcon_vv0xs_104", h2 = "_mainOpen_vv0xs_109", m2 = "_item_vv0xs_48", g2 = "_disabled_vv0xs_141", y2 = "_itemIcon_vv0xs_148", qt = {
  root: s2,
  bottomRight: a2,
  bottomLeft: l2,
  topRight: i2,
  topLeft: c2,
  menu: d2,
  itemWrapper: u2,
  tooltip: f2,
  main: _2,
  mainIcon: p2,
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
  const c = t ?? "bottom-right", l = `${lt()}-menu`, d = oe(null), u = oe(null), [f, g] = W(!1), m = F(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      r?.(_), g(!1), u.current?.focus();
    },
    [r]
  );
  we(() => {
    if (!f) return;
    const h = (_) => {
      d.current && !d.current.contains(_.target) && g(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [f]), we(() => {
    if (!f) return;
    const h = (_) => {
      _.key === "Escape" && (g(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [f]);
  const y = c === "bottom-right" ? qt.bottomRight : c === "bottom-left" ? qt.bottomLeft : c === "top-right" ? qt.topRight : qt.topLeft, p = (h) => {
    !f && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), g(!0)) : f && h.key === "Escape" && (h.preventDefault(), g(!1));
  }, b = (h) => {
    h.key === "Escape" && (h.preventDefault(), g(!1), u.current?.focus());
  };
  return /* @__PURE__ */ I(
    "div",
    {
      ref: d,
      className: [qt.root, y, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": a,
            className: qt.menu,
            onKeyDown: b,
            children: e.map((h, _) => {
              const x = !!h.disabled;
              return /* @__PURE__ */ I("div", { className: qt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: qt.tooltip, "aria-hidden": "true", children: h.text }),
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
                    className: [qt.item, x ? qt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => m(h),
                    children: /* @__PURE__ */ o("span", { className: qt.itemIcon, "aria-hidden": "true", children: h.icon ?? "•" })
                  }
                )
              ] }, `${h.text}-${_}`);
            })
          }
        ) : null,
        /* @__PURE__ */ o(
          "button",
          {
            ref: u,
            type: "button",
            className: qt.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => g((h) => !h),
            onKeyDown: p,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [qt.mainIcon, f ? qt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const b2 = "_root_1eyur_1", x2 = "_list_1eyur_5", v2 = "_item_1eyur_15", w2 = "_link_1eyur_22", k2 = "_linkButton_1eyur_23", N2 = "_current_1eyur_24", $2 = "_disabled_1eyur_68", S2 = "_icon_1eyur_74", O2 = "_text_1eyur_81", E2 = "_separator_1eyur_85", _t = {
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
      className: [_t.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: _t.list, children: e.map((c, s) => {
        const l = s === e.length - 1, d = !!c.disabled;
        return /* @__PURE__ */ I("li", { className: _t.item, children: [
          l ? d ? /* @__PURE__ */ I(
            "span",
            {
              className: [_t.current, _t.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                c.text
              ]
            }
          ) : c.path ? /* @__PURE__ */ I(
            "a",
            {
              href: c.path,
              className: _t.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ I(
            "span",
            {
              className: _t.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                c.text
              ]
            }
          ) : d ? /* @__PURE__ */ I(
            "span",
            {
              className: [_t.link, _t.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : c.path ? /* @__PURE__ */ I(
            "a",
            {
              href: c.path,
              className: _t.link,
              onClick: (u) => {
                u.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ I(
            "button",
            {
              type: "button",
              className: _t.linkButton,
              tabIndex: 0,
              onClick: () => i(c),
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ o("span", { className: _t.separator, "aria-hidden": "true", children: "/" })
        ] }, `${c.text}-${s}`);
      }) })
    }
  );
}
const M2 = "_link_tmy3k_1", T2 = {
  link: M2
}, eO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ I(rt, { children: [
    n != null && /* @__PURE__ */ o(De, { icon: n, "aria-hidden": "true" }),
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
}), C2 = "_root_dnkuu_1", A2 = "_list_dnkuu_5", D2 = "_item_dnkuu_15", I2 = "_connector_dnkuu_21", L2 = "_connectorCompleted_dnkuu_30", z2 = "_step_dnkuu_34", R2 = "_active_dnkuu_69", P2 = "_completed_dnkuu_75", j2 = "_circle_dnkuu_79", B2 = "_check_dnkuu_109", F2 = "_icon_dnkuu_114", H2 = "_number_dnkuu_119", U2 = "_text_dnkuu_124", Kt = {
  root: C2,
  list: A2,
  item: D2,
  connector: I2,
  connectorCompleted: L2,
  step: z2,
  active: R2,
  completed: P2,
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
  const f = a ?? i ?? !1, g = t ?? n, m = g !== void 0, [y, p] = W(() => Math.min(Math.max(0, g ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, m ? g : y),
    Math.max(0, e.length - 1)
  ), _ = oe(null), x = F(
    (C) => {
      const $ = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      m || p($), (c ?? s ?? l)?.($);
    },
    [m, c, s, l, e.length]
  ), N = F(
    (C, $) => !!($.disabled || f && C > h + 1),
    [f, h]
  ), w = (C) => {
    const $ = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((A) => A.getAttribute("aria-disabled") !== "true" && !A.disabled), M = document.activeElement, T = M ? $.indexOf(M) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), $.length === 0) return;
      const A = T === -1 ? 0 : (T + 1) % $.length, D = $[A];
      D && D.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), $.length === 0) return;
      const A = T === -1 ? $.length - 1 : (T - 1 + $.length) % $.length, D = $[A];
      D && D.focus();
    } else C.key === "Home" ? (C.preventDefault(), $[0]?.focus()) : C.key === "End" && (C.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": d,
      className: [Kt.root, u].filter(Boolean).join(" "),
      onKeyDown: w,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: Kt.list, children: e.map((C, $) => {
        const M = $ === h, T = $ < h, A = N($, C);
        return /* @__PURE__ */ I(
          "li",
          {
            role: "listitem",
            className: Kt.item,
            children: [
              $ > 0 ? /* @__PURE__ */ o(
                "span",
                {
                  className: [
                    Kt.connector,
                    T ? Kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ I(
                "button",
                {
                  type: "button",
                  "data-step": $,
                  "aria-current": M ? "step" : void 0,
                  "aria-disabled": A ? "true" : void 0,
                  disabled: A,
                  tabIndex: A ? -1 : 0,
                  className: [
                    Kt.step,
                    M ? Kt.active : null,
                    T ? Kt.completed : null,
                    A ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    A || x($);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Kt.circle, "aria-hidden": "true", children: T ? /* @__PURE__ */ o("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ o("span", { className: Kt.icon, children: C.icon }) : /* @__PURE__ */ o("span", { className: Kt.number, children: $ + 1 }) }),
                    /* @__PURE__ */ o("span", { className: Kt.text, children: C.text })
                  ]
                }
              )
            ]
          },
          `${C.text}-${$}`
        );
      }) })
    }
  );
}
const W2 = "_root_12hod_1", q2 = "_horizontal_12hod_13", K2 = "_vertical_12hod_17", G2 = "_pane_12hod_21", V2 = "_handle_12hod_31", Y2 = "_handleHorizontal_12hod_51", X2 = "_handleVertical_12hod_57", Z2 = "_handleGrip_12hod_63", J2 = "_handleCollapseHint_12hod_75", Q2 = "_collapseBtn_12hod_79", ek = "_collapseBtnCollapsed_12hod_109", fn = {
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
function Fr(e, t) {
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
  const d = e ?? t ?? "horizontal", u = d === "horizontal", f = oe(null), g = F(() => {
    const k = n.length;
    if (k === 0) return [];
    const v = n.map((z) => z.size ? Fr(z.size, 100 / k) : 100 / k), O = v.reduce((z, L) => z + L, 0);
    return Math.abs(O - 100) > 0.01 && O > 0 ? v.map((z) => z / O * 100) : v;
  }, [n]), [m, y] = W(() => g()), [p, b] = W(
    () => n.map((k) => !!k.collapsed)
  ), h = oe(m);
  we(() => {
    b(n.map((k) => !!k.collapsed));
  }, [n]);
  const _ = F(
    () => n.map((k) => Fr(k.min, 0)),
    [n]
  ), x = F(
    () => n.map((k) => Fr(k.max, 100)),
    [n]
  ), N = F(
    (k, v) => {
      const O = { paneIndex: k, newSize: v, cancel: !1 };
      return (r ?? a)?.(O), !O.cancel;
    },
    [r, a]
  ), w = F(
    (k, v) => {
      const O = { paneIndex: k, collapse: v, cancel: !1 };
      return (i ?? c)?.(O), !O.cancel;
    },
    [i, c]
  ), C = F(
    (k) => {
      const v = !p[k];
      w(k, v) && (v ? (h.current = [...m], b((O) => {
        const z = [...O];
        return z[k] !== void 0 && (z[k] = !0), z;
      }), y((O) => {
        const z = [...O], L = z[k] ?? 0, P = k < z.length - 1 ? k + 1 : k - 1;
        if (P >= 0 && P < z.length) {
          const B = z[P] ?? 0;
          z[P] = B + L, z[k] = 0;
        } else
          z[k] = 0;
        return z;
      })) : (b((O) => {
        const z = [...O];
        return z[k] !== void 0 && (z[k] = !1), z;
      }), y(() => {
        const O = [...h.current];
        return O.length !== n.length ? n.map(() => 100 / n.length) : O;
      })));
    },
    [p, m, n.length, w]
  ), $ = oe(
    null
  ), M = F(
    (k, v, O) => {
      const z = f.current;
      if (!z) return null;
      const L = z.getBoundingClientRect();
      let P;
      if (u) {
        if (L.width === 0) return null;
        P = (v - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        P = (O - L.top) / L.height * 100;
      }
      let B = 0;
      for (let se = 0; se < k; se++) {
        const Q = m[se];
        Q !== void 0 && (B += Q);
      }
      return P - B;
    },
    [u, m]
  ), T = (k, v) => {
    v.preventDefault();
    const O = v.currentTarget;
    O.focus(), typeof O.setPointerCapture == "function" && O.setPointerCapture(v.pointerId), $.current = { handleIndex: k, pointerId: v.pointerId };
  }, A = (k) => {
    if (!$.current || $.current.pointerId !== k.pointerId)
      return;
    k.preventDefault();
    const v = $.current.handleIndex, O = M(v, k.clientX, k.clientY);
    if (O == null) return;
    const z = _(), L = x(), P = z[v] ?? 0, B = L[v] ?? 100, Y = v + 1, se = z[Y] ?? 0, Q = L[Y] ?? 100, be = m[v] ?? 0, ne = m[Y] ?? 0, pe = be + ne;
    if (pe <= 0) return;
    let G = zn(O, P, B), _e = pe - G;
    if (_e < se) {
      if (_e = se, G = pe - _e, G < P || G > B) return;
    } else if (_e > Q && (_e = Q, G = pe - _e, G < P || G > B))
      return;
    G = zn(G, P, B), _e = pe - G, N(v, G) && y((ie) => {
      const he = [...ie];
      return he[v] = G, he[Y] = _e, he;
    });
  }, D = (k) => {
    !$.current || $.current.pointerId !== k.pointerId || ($.current = null);
  }, E = (k, v) => {
    const O = _(), z = x(), L = k, P = k + 1, B = m[L] ?? 0, Y = m[P] ?? 0, se = B + Y;
    let Q = 0;
    const be = !!n[L]?.collapsible, ne = !!n[P]?.collapsible;
    if (u ? v.key === "ArrowLeft" ? Q = -5 : v.key === "ArrowRight" && (Q = 5) : v.key === "ArrowUp" ? Q = -5 : v.key === "ArrowDown" && (Q = 5), v.key === "Home") {
      v.preventDefault();
      let pe = O[L] ?? 0, G = se - pe;
      if (G = zn(
        G,
        O[P] ?? 0,
        z[P] ?? 100
      ), pe = se - G, pe = zn(pe, O[L] ?? 0, z[L] ?? 100), !N(L, pe)) return;
      y((_e) => {
        const ie = [..._e];
        return ie[L] = pe, ie[P] = G, ie;
      });
      return;
    }
    if (v.key === "End") {
      v.preventDefault();
      let pe = z[L] ?? 100;
      pe = Math.min(pe, se - (O[P] ?? 0));
      let G = se - pe;
      if (G = zn(
        G,
        O[P] ?? 0,
        z[P] ?? 100
      ), pe = se - G, pe = zn(pe, O[L] ?? 0, z[L] ?? 100), !N(L, pe)) return;
      y((_e) => {
        const ie = [..._e];
        return ie[L] = pe, ie[P] = G, ie;
      });
      return;
    }
    if ((v.key === "Enter" || v.key === " ") && (be || ne)) {
      v.preventDefault(), C(be ? L : P);
      return;
    }
    if (Q !== 0) {
      v.preventDefault();
      let pe = B + Q, G = se - pe;
      const _e = O[L] ?? 0, ie = z[L] ?? 100, he = O[P] ?? 0, ue = z[P] ?? 100;
      if (pe = zn(pe, _e, ie), G = se - pe, (G < he || G > ue) && (G = zn(G, he, ue), pe = se - G, pe = zn(pe, _e, ie), G = se - pe), !N(L, pe)) return;
      y((Se) => {
        const q = [...Se];
        return q[L] = pe, q[P] = G, q;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: [
        fn.root,
        u ? fn.horizontal : fn.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((k, v) => {
        const O = !!p[v], z = O ? 0 : m[v] ?? 100 / n.length, L = O ? { display: "none" } : u ? {
          flexBasis: `${z}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${z}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, P = Fr(k.min, 0), B = Fr(k.max, 100), Y = v < n.length - 1, se = !!n[v + 1]?.collapsible;
        return /* @__PURE__ */ I("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ I(
            "div",
            {
              role: "group",
              "aria-label": k.label ?? `Pane ${v + 1}`,
              className: fn.pane,
              style: L,
              "data-collapsed": O ? "true" : void 0,
              children: [
                O ? null : k.children,
                k.collapsible && !O ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: fn.collapseBtn,
                    "aria-label": `Collapse pane ${v + 1}`,
                    "aria-expanded": !O,
                    onClick: () => C(v),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                k.collapsible && O ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: fn.collapseBtn,
                    "aria-label": `Expand pane ${v + 1}`,
                    "aria-expanded": !O,
                    onClick: () => C(v),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          O && k.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: fn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${v + 1}`,
                "aria-expanded": "false",
                onClick: () => C(v),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          Y ? /* @__PURE__ */ I(
            "div",
            {
              role: "separator",
              "aria-orientation": d,
              "aria-valuemin": P,
              "aria-valuemax": B,
              "aria-valuenow": Math.round(z),
              "aria-label": `Resize handle ${v + 1}`,
              tabIndex: O || p[v + 1] ? -1 : 0,
              className: [
                fn.handle,
                u ? fn.handleHorizontal : fn.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (Q) => T(v, Q),
              onPointerMove: A,
              onPointerUp: D,
              onKeyDown: (Q) => E(v, Q),
              children: [
                /* @__PURE__ */ o("span", { className: fn.handleGrip, "aria-hidden": "true" }),
                (k.collapsible || se) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: fn.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, v);
      })
    }
  );
}
const tk = "_root_1w3wd_1", nk = "_list_1w3wd_5", rk = "_vertical_1w3wd_14", ok = "_horizontal_1w3wd_20", sk = "_item_1w3wd_28", ak = "_link_1w3wd_32", lk = "_active_1w3wd_57", gr = {
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
  const d = t ?? n, u = r ?? a ?? "vertical", [f, g] = W(
    () => e[0]?.selector ?? null
  ), m = oe(f);
  m.current = f;
  const y = F(
    (p, b) => {
      if (g(p.selector), (i ?? c)?.({ text: p.text, selector: p.selector }), b) {
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
    [i, c]
  );
  return we(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (d) {
        const w = document.querySelector(d);
        if (w) return w;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), x = () => {
      let w = null, C = null;
      for (const M of e) {
        const T = document.querySelector(M.selector);
        if (!T) continue;
        _.set(M.selector, T);
        const A = T.getBoundingClientRect();
        let D = A.top;
        if (b !== window) {
          const E = b.getBoundingClientRect();
          D = A.top - E.top;
        }
        D <= 80 ? (!C || D > C.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (C = { sel: M.selector, el: T }) : (!w || D < w.top) && (w = { sel: M.selector, top: D });
      }
      const $ = C?.sel ?? w?.sel ?? e[0]?.selector ?? null;
      $ && $ !== m.current && g($);
    }, N = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const w = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((C) => {
        const $ = C.filter((M) => M.isIntersecting).sort((M, T) => M.boundingClientRect.top - T.boundingClientRect.top);
        if ($[0]) {
          const M = $[0].target;
          for (const T of e) {
            if (document.querySelector(T.selector) === M) {
              g(T.selector);
              break;
            }
            if (T.selector.startsWith("#") && M.id === T.selector.slice(1)) {
              g(T.selector);
              break;
            }
          }
        } else
          x();
      }, w);
      for (const C of e) {
        const $ = document.querySelector(C.selector);
        $ && (h.observe($), _.set(C.selector, $));
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
      className: [gr.root, gr[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: gr.list, children: e.map((p) => {
        const b = p.selector === f;
        return /* @__PURE__ */ o("li", { className: gr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [gr.link, b ? gr.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const _ = document.querySelector(p.selector);
              y(p, _);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const ik = "_root_1bfit_1", ck = "_viewport_1bfit_17", dk = "_slide_1bfit_24", uk = "_active_1bfit_33", fk = "_arrow_1bfit_37", _k = "_prev_1bfit_71", pk = "_next_1bfit_75", hk = "_pauseBtn_1bfit_79", mk = "_indicators_1bfit_110", gk = "_indicator_1bfit_110", yk = "_indicatorActive_1bfit_145", _n = {
  root: ik,
  viewport: ck,
  slide: dk,
  active: uk,
  arrow: fk,
  prev: _k,
  next: pk,
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
  showIndicators: g,
  ShowIndicators: m,
  onChange: y,
  Change: p,
  ariaLabel: b = "Carousel",
  className: h
}) {
  const _ = t ?? n, x = _ !== void 0, [N, w] = W(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), C = x ? _ : N, $ = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), M = a ?? i ?? !1, T = c ?? s ?? 3e3, A = l ?? d ?? !0, D = u ?? f ?? !0, E = g ?? m ?? !0, [k, v] = W(!1), [O, z] = W(!1), L = k || O, P = oe(null), B = lt(), Y = F(
    (he) => {
      const ue = e.length === 0 ? 0 : (he % e.length + e.length) % e.length;
      x || w(ue), (y ?? p)?.(ue);
    },
    [x, y, p, e.length]
  ), se = F(() => {
    Y($ - 1);
  }, [Y, $]), Q = F(() => {
    Y($ + 1);
  }, [Y, $]), be = F(
    (he) => {
      Y(he);
    },
    [Y]
  );
  we(() => {
    if (!M || L || e.length <= 1) return;
    const he = setInterval(() => {
      Y($ + 1);
    }, T);
    return () => clearInterval(he);
  }, [M, L, T, $, Y, e.length]);
  const ne = (he) => {
    e.length !== 0 && (he.key === "ArrowLeft" ? (he.preventDefault(), se()) : he.key === "ArrowRight" ? (he.preventDefault(), Q()) : he.key === "Home" ? (he.preventDefault(), be(0)) : he.key === "End" && (he.preventDefault(), be(e.length - 1)));
  }, pe = () => {
    A && M && z(!0);
  }, G = () => {
    A && M && z(!1);
  }, _e = () => {
    A && M && z(!0);
  }, ie = () => {
    A && M && z(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ I(
    "div",
    {
      ref: P,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [_n.root, h].filter(Boolean).join(" "),
      onKeyDown: ne,
      onMouseEnter: pe,
      onMouseLeave: G,
      onFocusCapture: _e,
      onBlurCapture: ie,
      children: [
        /* @__PURE__ */ o("div", { id: B, className: _n.viewport, children: e.map((he, ue) => {
          const Se = ue === $;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ue + 1} of ${e.length}`,
              "aria-hidden": Se ? void 0 : !0,
              hidden: !Se,
              className: [_n.slide, Se ? _n.active : null].filter(Boolean).join(" "),
              children: he
            },
            ue
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ I(rt, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": B,
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
              "aria-controls": B,
              onClick: Q,
              children: "›"
            }
          )
        ] }) : null,
        M ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: _n.pauseBtn,
            "aria-label": k ? "Resume" : "Pause",
            "aria-pressed": k,
            onClick: () => v((he) => !he),
            children: k ? "▶" : "⏸"
          }
        ) : null,
        E && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: _n.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((he, ue) => {
              const Se = ue === $;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    _n.indicator,
                    Se ? _n.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${ue + 1}`,
                  "aria-current": Se ? "true" : void 0,
                  "aria-controls": B,
                  onClick: () => be(ue)
                },
                ue
              );
            })
          }
        ) : null
      ]
    }
  );
}
const bk = "_root_1aa5u_1", xk = "_group_1aa5u_20", vk = "_itemWrapper_1aa5u_30", wk = "_treeitem_1aa5u_34", kk = "_disabled_1aa5u_50", Nk = "_selected_1aa5u_60", $k = "_caret_1aa5u_66", Sk = "_caretIcon_1aa5u_113", Ok = "_caretOpen_1aa5u_120", Ek = "_caretPlaceholder_1aa5u_124", Mk = "_label_1aa5u_130", Tk = "_loading_1aa5u_137", Ck = "_loadingRow_1aa5u_143", Ak = "_empty_1aa5u_149", Dk = "_checkbox_1aa5u_155", Dt = {
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
  label: Mk,
  loading: Tk,
  loadingRow: Ck,
  empty: Ak,
  checkbox: Dk
};
function Ik({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return we(() => {
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
  selectedItems: g,
  SelectedItems: m,
  defaultSelectedItem: y,
  defaultSelectedItems: p,
  onChange: b,
  Change: h,
  onExpand: _,
  Expand: x,
  onCollapse: N,
  Collapse: w,
  loadChildData: C,
  LoadChildData: $,
  template: M,
  Template: T,
  itemTemplate: A,
  ItemTemplate: D,
  ariaLabel: E,
  AriaLabel: k,
  allowCheckBoxes: v = !1,
  checkedKeys: O,
  defaultCheckedKeys: z,
  onCheckedChange: L,
  allowCheckChildren: P = !0,
  className: B
}) {
  const Y = e ?? t ?? [], se = n ?? r, Q = a ?? i ?? "text", be = c ?? s ?? "id", ne = l ?? d ?? "single", pe = E ?? k ?? "Tree", G = C ?? $, _e = M ?? T ?? A ?? D, ie = F(
    (K) => {
      const te = K[be];
      return te != null ? String(te) : String(K.id ?? "");
    },
    [be]
  ), he = F(
    (K) => {
      const te = K[Q];
      if (te != null) return String(te);
      const fe = K.text;
      return fe != null ? String(fe) : "";
    },
    [Q]
  ), ue = F(
    (K) => {
      if (se) {
        const fe = se(K);
        if (fe !== void 0) return fe;
      }
      const te = K.children;
      if (Array.isArray(te)) return te;
    },
    [se]
  ), Se = F(
    (K) => {
      const te = /* @__PURE__ */ new Set(), fe = (Ne) => {
        for (const ke of Ne) {
          const Ce = ie(ke);
          ke.expanded && te.add(Ce);
          const Ke = ue(ke);
          Ke && Ke.length > 0 && fe(Ke);
        }
      };
      return fe(K), te;
    },
    [ie, ue]
  ), [q, Ee] = W(
    () => Se(Y)
  ), [re, Ae] = W(
    () => /* @__PURE__ */ new Map()
  ), [me, Fe] = W(() => /* @__PURE__ */ new Set()), Ge = u ?? f, Qe = g ?? m, bt = ne === "multiple" ? Qe !== void 0 : Ge !== void 0, Z = F(() => {
    if (ne === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((fe) => ie(fe)));
      const K = /* @__PURE__ */ new Set(), te = (fe) => {
        for (const Ne of fe) {
          Ne.selected && K.add(ie(Ne));
          const ke = ue(Ne);
          ke && te(ke);
        }
      };
      return te(Y), K;
    } else {
      if (y) return /* @__PURE__ */ new Set([ie(y)]);
      let K = null;
      const te = (fe) => {
        for (const Ne of fe) {
          if (Ne.selected)
            return K = ie(Ne), !0;
          const ke = ue(Ne);
          if (ke && te(ke)) return !0;
        }
        return !1;
      };
      return te(Y), K ? /* @__PURE__ */ new Set([K]) : /* @__PURE__ */ new Set();
    }
  }, [
    ne,
    y,
    p,
    ie,
    ue,
    Y
  ]), [R, X] = W(
    () => Z()
  ), ee = Oe(() => {
    if (ne === "multiple") {
      if (Qe !== void 0) {
        const K = Qe;
        return K ? new Set(K.map((te) => ie(te))) : /* @__PURE__ */ new Set();
      }
      return R;
    } else {
      if (Ge !== void 0) {
        const K = Ge;
        return K ? /* @__PURE__ */ new Set([ie(K)]) : /* @__PURE__ */ new Set();
      }
      return R;
    }
  }, [
    ne,
    Qe,
    Ge,
    R,
    ie
  ]), ye = F(
    (K) => {
      let te;
      const fe = (Ne) => {
        for (const ke of Ne) {
          if (ie(ke) === K)
            return te = ke, !0;
          const Ke = re.get(ie(ke)) ?? ue(ke);
          if (Ke && fe(Ke)) return !0;
        }
        return !1;
      };
      if (fe(Y), !te) {
        for (const Ne of re.values())
          if (fe(Ne)) break;
      }
      return te;
    },
    [Y, re, ie, ue]
  ), ce = F(() => {
    const K = /* @__PURE__ */ new Map(), te = (fe) => {
      for (const Ne of fe) {
        const ke = ie(Ne);
        K.set(ke, Ne);
        const Ke = re.get(ke) ?? ue(Ne);
        Ke && te(Ke);
      }
    };
    return te(Y), K;
  }, [Y, re, ie, ue]), Me = F(
    (K) => {
      const te = ie(K);
      if (!K.disabled)
        if (ne === "multiple") {
          const Ne = new Set(ee);
          Ne.has(te) ? Ne.delete(te) : Ne.add(te), bt || X(Ne);
          const ke = b ?? h;
          if (ke) {
            const Ce = ce(), Ke = [];
            for (const Be of Ne) {
              const dt = Ce.get(Be) ?? ye(Be);
              dt && Ke.push(dt);
            }
            ke({ item: K, selectedItems: Ke });
          }
        } else if (!ee.has(te) || ee.size !== 1 || !ee.has(te)) {
          bt || X(/* @__PURE__ */ new Set([te]));
          const ke = b ?? h;
          ke && ke({ item: K, selectedItem: K });
        } else {
          const ke = b ?? h;
          ke && ke({ item: K, selectedItem: K });
        }
    },
    [
      ie,
      ne,
      ee,
      bt,
      b,
      h,
      ce,
      ye
    ]
  ), je = F(
    async (K) => {
      const te = ie(K);
      if (!!K.disabled) return;
      const Ne = q.has(te), ke = _ ?? x, Ce = N ?? w, Ke = ue(K), dt = re.get(te) ?? Ke, Et = !(dt !== void 0 && dt.length > 0) && G != null;
      if (Ne) {
        Ee((ht) => {
          const Le = new Set(ht);
          return Le.delete(te), Le;
        }), Ce?.({ item: K });
        return;
      }
      if (Et) {
        if (me.has(te)) return;
        Fe((ht) => {
          const Le = new Set(ht);
          return Le.add(te), Le;
        });
        try {
          const Le = await G(K);
          Ae((Mt) => {
            const Jt = new Map(Mt);
            return Jt.set(te, Le), Jt;
          }), Ee((Mt) => {
            const Jt = new Set(Mt);
            return Jt.add(te), Jt;
          }), ke?.({ item: K });
        } catch {
        } finally {
          Fe((ht) => {
            const Le = new Set(ht);
            return Le.delete(te), Le;
          });
        }
        return;
      }
      Ee((ht) => {
        const Le = new Set(ht);
        return Le.add(te), Le;
      }), ke?.({ item: K });
    },
    [
      ie,
      q,
      ue,
      re,
      G,
      me,
      _,
      x,
      N,
      w
    ]
  ), Je = Oe(() => {
    const K = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ie(Ke);
        K.has(Be) || K.set(Be, []), te.set(Be, Ce), Ke.disabled && fe.add(Be);
        const st = re.get(Be) ?? ue(Ke);
        st && st.length > 0 && (K.set(
          Be,
          st.map((Et) => ie(Et))
        ), Ne(st, Be));
      }
    };
    return Ne(Y, null), { childrenOf: K, parentOf: te, disabledKeys: fe };
  }, [Y, re, ie, ue]), et = F(
    (K) => {
      const te = [], fe = [...Je.childrenOf.get(K) ?? []];
      for (; fe.length > 0; ) {
        const Ne = fe.pop();
        te.push(Ne), fe.push(...Je.childrenOf.get(Ne) ?? []);
      }
      return te;
    },
    [Je]
  ), [ot, Zt] = W(
    () => new Set(z ?? [])
  ), ae = O !== void 0 ? new Set(O) : ot, ze = F(
    (K) => {
      const te = Je.disabledKeys;
      return et(K).filter((fe) => !te.has(fe));
    },
    [et, Je]
  ), Nt = F(
    (K) => {
      if (ae.has(K)) return !0;
      if (!v || !P) return !1;
      const te = ze(K);
      return te.length > 0 && te.every((fe) => ae.has(fe));
    },
    [ae, v, P, ze]
  ), Rt = F(
    (K) => {
      if (!v || !P || ae.has(K))
        return !1;
      const te = ze(K);
      if (te.length === 0) return !1;
      const fe = te.filter((Ne) => ae.has(Ne)).length;
      return fe > 0 && fe < te.length;
    },
    [ae, v, P, ze]
  ), xt = F(
    (K) => {
      if (!v || K.disabled) return;
      const te = ie(K), fe = new Set(ae);
      if (fe.has(te) || Nt(te)) {
        if (fe.delete(te), P)
          for (const Ne of ze(te)) fe.delete(Ne);
      } else if (fe.add(te), P)
        for (const Ne of ze(te)) fe.add(Ne);
      O === void 0 && Zt(fe), L?.([...fe]);
    },
    [
      v,
      P,
      O,
      ae,
      ze,
      ie,
      Nt,
      L
    ]
  ), Ie = Oe(() => {
    const K = [], te = (fe, Ne, ke) => {
      fe.forEach((Ce, Ke) => {
        const Be = ie(Ce), dt = he(Ce), st = re.get(Be) ?? ue(Ce);
        let Et;
        re.has(Be) ? Et = re.get(Be).length > 0 : st !== void 0 ? Et = st.length > 0 : G ? Et = !0 : Et = !1;
        const ht = q.has(Be), Le = !!Ce.disabled, Mt = fe.length, Jt = Ke + 1;
        if (K.push({
          item: Ce,
          key: Be,
          text: dt,
          level: Ne,
          posInSet: Jt,
          setSize: Mt,
          hasChildren: Et,
          expanded: ht,
          parentKey: ke,
          disabled: Le
        }), Et && ht) {
          const hn = re.get(Be) ?? st;
          hn && hn.length > 0 && te(hn, Ne + 1, Be);
        }
      });
    };
    return te(Y, 1, null), K;
  }, [
    Y,
    ie,
    he,
    ue,
    re,
    q,
    G,
    me
  ]), [qe, vt] = W(
    () => Ie[0]?.key ?? null
  ), Ot = oe(""), ct = oe(null), V = oe(null);
  we(() => {
    if (!qe && Ie.length > 0) {
      const K = Ie[0];
      K && vt(K.key);
    } else if (qe && !Ie.some((K) => K.key === qe)) {
      const K = Ie[0];
      vt(K ? K.key : null);
    }
  }, [Ie, qe]), we(() => {
    if (qe) {
      const K = V.current?.querySelector(
        `[data-key="${CSS.escape(qe)}"]`
      );
      let te = null;
      K || (te = V.current?.querySelector(
        `[data-key="${qe}"]`
      ) ?? null);
      const fe = K ?? te;
      fe && document.activeElement !== fe && V.current?.contains(document.activeElement) && fe.focus();
    }
  }, [qe]);
  const ge = F((K) => {
    vt(K), requestAnimationFrame(() => {
      const te = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(K) : K;
      let fe = V.current?.querySelector(
        `[data-key="${te}"]`
      );
      fe || (fe = V.current?.querySelector(`[data-key="${K}"]`) ?? null), fe?.focus();
    });
  }, []), Ve = F(
    (K) => Ie.find((fe) => fe.key === K)?.parentKey ?? null,
    [Ie]
  ), Ye = F(
    (K) => {
      if (Ie.length === 0) return;
      const te = qe ? Ie.findIndex((ke) => ke.key === qe) : -1, fe = te >= 0 ? Ie[te] : void 0;
      let Ne = null;
      if (K.key === "ArrowDown") {
        if (K.preventDefault(), te === -1)
          Ne = Ie[0]?.key ?? null;
        else {
          const ke = (te + 1) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && ge(Ne);
        return;
      }
      if (K.key === "ArrowUp") {
        if (K.preventDefault(), te === -1) {
          const ke = Ie[Ie.length - 1];
          ke && (Ne = ke.key);
        } else {
          const ke = (te - 1 + Ie.length) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && ge(Ne);
        return;
      }
      if (K.key === "ArrowRight") {
        if (K.preventDefault(), !fe) return;
        if (fe.hasChildren && !fe.expanded)
          je(fe.item);
        else if (fe.hasChildren && fe.expanded) {
          const ke = te + 1, Ce = Ie[ke];
          Ce && Ce.parentKey === fe.key && ge(Ce.key);
        }
        return;
      }
      if (K.key === "ArrowLeft") {
        if (K.preventDefault(), !fe) return;
        if (fe.hasChildren && fe.expanded)
          je(fe.item);
        else {
          const ke = Ve(fe.key);
          ke && ge(ke);
        }
        return;
      }
      if (K.key === "Home") {
        K.preventDefault();
        const ke = Ie[0];
        ke && ge(ke.key);
        return;
      }
      if (K.key === "End") {
        K.preventDefault();
        const ke = Ie[Ie.length - 1];
        ke && ge(ke.key);
        return;
      }
      if (K.key === "Enter" || K.key === " ") {
        if (K.key === " " && K.target?.tagName === "INPUT" || (K.preventDefault(), !fe)) return;
        if (K.key === " " && v) {
          const ke = ye(fe.key);
          ke && xt(ke);
          return;
        }
        Me(fe.item);
        return;
      }
      if (K.key.length === 1 && /^[a-zA-Z0-9]$/.test(K.key)) {
        K.preventDefault();
        const ke = (Ot.current + K.key).toLowerCase();
        Ot.current = ke, ct.current && clearTimeout(ct.current), ct.current = setTimeout(() => {
          Ot.current = "";
        }, 500);
        const Ce = te >= 0 ? te + 1 : 0, dt = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((st) => st.text.toLowerCase().startsWith(ke));
        dt && ge(dt.key);
        return;
      }
    },
    [
      Ie,
      qe,
      ge,
      je,
      Me,
      Ve,
      v,
      xt
    ]
  ), Pt = F(() => {
    if (!qe && Ie.length > 0) {
      const K = Ie[0];
      K && vt(K.key);
    }
  }, [qe, Ie]), Xe = (K, te, fe) => /* @__PURE__ */ o("ul", { role: "group", className: Dt.group, children: K.map((Ne, ke) => {
    const Ce = ie(Ne), Ke = he(Ne), Be = re.get(Ce) ?? ue(Ne);
    let dt;
    re.has(Ce) ? dt = re.get(Ce).length > 0 : Be !== void 0 ? dt = Be.length > 0 : G ? dt = !0 : dt = !1;
    const st = q.has(Ce), Et = ee.has(Ce), ht = !!Ne.disabled, Le = me.has(Ce), Mt = qe === Ce, Jt = K.length, hn = ke + 1, Tn = _e ? _e(Ne) : Ke, Fn = v ? {
      checked: Nt(Ce),
      indeterminate: Rt(Ce)
    } : null;
    return /* @__PURE__ */ I("li", { role: "none", className: Dt.itemWrapper, children: [
      /* @__PURE__ */ I(
        "div",
        {
          role: "treeitem",
          "data-key": Ce,
          tabIndex: Mt ? 0 : -1,
          "aria-expanded": dt ? st : void 0,
          "aria-selected": Et,
          "aria-level": te,
          "aria-setsize": Jt,
          "aria-posinset": hn,
          "aria-disabled": ht || void 0,
          "aria-busy": Le || void 0,
          className: [
            Dt.treeitem,
            Et ? Dt.selected : null,
            ht ? Dt.disabled : null,
            Mt ? Dt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ge(Ce), ht || Me(Ne);
          },
          onFocus: () => vt(Ce),
          children: [
            v ? /* @__PURE__ */ o(
              Ik,
              {
                className: Dt.checkbox,
                checked: Fn?.checked ?? !1,
                indeterminate: Fn?.indeterminate ?? !1,
                disabled: ht,
                "aria-label": `Select ${Ke}`,
                onClick: (kn) => kn.stopPropagation(),
                onChange: () => xt(Ne)
              }
            ) : null,
            dt ? /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Dt.caret,
                "aria-label": `${st ? "Collapse" : "Expand"} ${Ke}`,
                "aria-expanded": st,
                tabIndex: -1,
                disabled: ht,
                onClick: (kn) => {
                  kn.stopPropagation(), ge(Ce), je(Ne);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Dt.caretIcon,
                      st ? Dt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(De, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ o(
              "span",
              {
                className: Dt.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ o("span", { className: Dt.label, children: Tn }),
            Le ? /* @__PURE__ */ o("span", { className: Dt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && st ? Le ? /* @__PURE__ */ o("div", { className: Dt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, te + 1) : re.has(Ce) && re.get(Ce).length > 0 ? Xe(
        re.get(Ce),
        te + 1
      ) : (Be && Be.length === 0, null) : null
    ] }, Ce);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: V,
      role: "tree",
      "aria-label": pe,
      "aria-multiselectable": ne === "multiple" || void 0,
      tabIndex: 0,
      className: [Dt.root, B].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: Y.length === 0 ? /* @__PURE__ */ o("div", { className: Dt.empty, children: "No items" }) : Xe(Y, 1)
    }
  );
}
const Lk = "_root_10fdq_1", zk = "_panel_10fdq_8", Rk = "_header_10fdq_19", Pk = "_listbox_10fdq_28", jk = "_option_10fdq_42", Bk = "_disabled_10fdq_57", Fk = "_active_10fdq_66", Hk = "_selected_10fdq_70", Uk = "_empty_10fdq_86", Wk = "_controls_10fdq_93", qk = "_reorder_10fdq_102", Kk = "_btn_10fdq_110", nt = {
  root: Lk,
  panel: zk,
  header: Rk,
  listbox: Pk,
  option: jk,
  disabled: Bk,
  active: Fk,
  selected: Hk,
  empty: Uk,
  controls: Wk,
  reorder: qk,
  btn: Kk
};
function It(e, t) {
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
  SourceChange: f,
  onTargetChange: g,
  TargetChange: m,
  keyProperty: y,
  KeyProperty: p,
  onMove: b,
  Move: h,
  ariaLabel: _,
  AriaLabel: x,
  className: N
}) {
  const w = y ?? p ?? "id", C = _ ?? x ?? "PickList", $ = e ?? t ?? a ?? i ?? l ?? d ?? [], M = n ?? r ?? c ?? s ?? [], [T, A] = W(() => [
    ...$
  ]), [D, E] = W(() => [
    ...M
  ]);
  we(() => {
    const R = e ?? t ?? a ?? i ?? l ?? d;
    R !== void 0 && A([...R]);
  }, [e, t, a, i, l, d]), we(() => {
    const R = n ?? r ?? c ?? s;
    R !== void 0 && E([...R]);
  }, [n, r, c, s]);
  const [k, v] = W(
    () => /* @__PURE__ */ new Set()
  ), [O, z] = W(
    () => /* @__PURE__ */ new Set()
  ), [L, P] = W(() => {
    const R = $.findIndex((X) => !X.disabled);
    return R >= 0 ? R : 0;
  }), [B, Y] = W(() => {
    const R = M.findIndex((X) => !X.disabled);
    return R >= 0 ? R : 0;
  }), se = Oe(
    () => T.map((R, X) => R.disabled ? -1 : X).filter((R) => R >= 0),
    [T]
  ), Q = Oe(
    () => D.map((R, X) => R.disabled ? -1 : X).filter((R) => R >= 0),
    [D]
  );
  we(() => {
    if (L >= T.length) {
      const R = se[se.length - 1];
      P(R ?? 0);
    } else if (T.length > 0 && se.length > 0 && !se.includes(L)) {
      const R = se[0];
      R !== void 0 && P(R);
    }
  }, [L, T.length, se]), we(() => {
    if (B >= D.length) {
      const R = Q[Q.length - 1];
      Y(R ?? 0);
    } else if (D.length > 0 && Q.length > 0 && !Q.includes(B)) {
      const R = Q[0];
      R !== void 0 && Y(R);
    }
  }, [B, D.length, Q]), we(() => {
    v((R) => {
      const X = /* @__PURE__ */ new Set();
      for (const ee of R)
        T.some(
          (ce) => It(ce, w) === ee && !ce.disabled
        ) && X.add(ee);
      return X;
    });
  }, [T, w]), we(() => {
    z((R) => {
      const X = /* @__PURE__ */ new Set();
      for (const ee of R)
        D.some(
          (ce) => It(ce, w) === ee && !ce.disabled
        ) && X.add(ee);
      return X;
    });
  }, [D, w]);
  const be = F(
    (R) => {
      (u ?? f)?.(R);
    },
    [u, f]
  ), ne = F(
    (R) => {
      (g ?? m)?.(R);
    },
    [g, m]
  ), pe = F(
    (R) => {
      (b ?? h)?.(R);
    },
    [b, h]
  ), G = F(
    (R) => {
      const X = T[R];
      if (!X || X.disabled) return;
      const ee = It(X, w);
      v((ye) => {
        const ce = new Set(ye);
        return ce.has(ee) ? ce.delete(ee) : ce.add(ee), ce;
      }), P(R);
    },
    [T, w]
  ), _e = F(
    (R) => {
      const X = D[R];
      if (!X || X.disabled) return;
      const ee = It(X, w);
      z((ye) => {
        const ce = new Set(ye);
        return ce.has(ee) ? ce.delete(ee) : ce.add(ee), ce;
      }), Y(R);
    },
    [D, w]
  ), ie = F(() => {
    const R = [], X = [];
    for (const Me of T) {
      const je = It(Me, w);
      k.has(je) && !Me.disabled ? R.push(Me) : X.push(Me);
    }
    if (R.length === 0) return;
    const ee = X, ye = [...D, ...R];
    A(ee), E(ye), v(/* @__PURE__ */ new Set());
    const ce = new Set(R.map((Me) => It(Me, w)));
    z(ce), be(ee), ne(ye), pe({
      source: ee,
      target: ye,
      moved: R,
      direction: "toTarget"
    });
  }, [
    T,
    D,
    k,
    w,
    be,
    ne,
    pe
  ]), he = F(() => {
    const R = [], X = [];
    for (const Me of D) {
      const je = It(Me, w);
      O.has(je) && !Me.disabled ? R.push(Me) : X.push(Me);
    }
    if (R.length === 0) return;
    const ee = X, ye = [...T, ...R];
    E(ee), A(ye), z(/* @__PURE__ */ new Set());
    const ce = new Set(R.map((Me) => It(Me, w)));
    v(ce), be(ye), ne(ee), pe({
      source: ye,
      target: ee,
      moved: R,
      direction: "toSource"
    });
  }, [
    T,
    D,
    O,
    w,
    be,
    ne,
    pe
  ]), ue = F(() => {
    const R = T.filter((ye) => !ye.disabled);
    if (R.length === 0) return;
    const X = T.filter((ye) => !!ye.disabled), ee = [...D, ...R];
    A(X), E(ee), v(/* @__PURE__ */ new Set()), be(X), ne(ee), pe({
      source: X,
      target: ee,
      moved: R,
      direction: "allToTarget"
    });
  }, [
    T,
    D,
    w,
    be,
    ne,
    pe
  ]), Se = F(() => {
    const R = D.filter((ye) => !ye.disabled);
    if (R.length === 0) return;
    const X = D.filter((ye) => !!ye.disabled), ee = [...T, ...R];
    E(X), A(ee), z(/* @__PURE__ */ new Set()), be(ee), ne(X), pe({
      source: ee,
      target: X,
      moved: R,
      direction: "allToSource"
    });
  }, [T, D, be, ne, pe]), q = F(() => {
    if (O.size === 0) return;
    const R = [...D], X = O, ee = [];
    for (let ce = 1; ce < R.length; ce++) {
      const Me = R[ce], je = R[ce - 1];
      if (!Me || !je) continue;
      const Je = It(Me, w), et = It(je, w);
      X.has(Je) && !X.has(et) && !Me.disabled && !je.disabled && (R[ce - 1] = Me, R[ce] = je, ee.push(Me));
    }
    if (ee.length === 0) return;
    E(R), ne(R), pe({ source: T, target: R, moved: ee, direction: "up" });
    const ye = Array.from(X)[0];
    if (ye) {
      const ce = R.findIndex(
        (Me) => It(Me, w) === ye
      );
      ce >= 0 && Y(ce);
    }
  }, [
    D,
    O,
    w,
    T,
    ne,
    pe
  ]), Ee = F(() => {
    if (O.size === 0) return;
    const R = [...D], X = O, ee = [];
    for (let ce = R.length - 2; ce >= 0; ce--) {
      const Me = R[ce], je = R[ce + 1];
      if (!Me || !je) continue;
      const Je = It(Me, w), et = It(je, w);
      X.has(Je) && !X.has(et) && !Me.disabled && !je.disabled && (R[ce] = je, R[ce + 1] = Me, ee.push(Me));
    }
    if (ee.length === 0) return;
    E(R), ne(R), pe({ source: T, target: R, moved: ee, direction: "down" });
    const ye = Array.from(X)[0];
    if (ye) {
      const ce = R.findIndex(
        (Me) => It(Me, w) === ye
      );
      ce >= 0 && Y(ce);
    }
  }, [
    D,
    O,
    w,
    T,
    ne,
    pe
  ]), re = k.size > 0, Ae = O.size > 0, me = oe(""), Fe = oe(
    null
  ), Ge = oe(""), Qe = oe(
    null
  ), Ct = F(
    (R) => {
      if (T.length === 0) return;
      const X = se;
      if (X.length === 0) return;
      const ee = X.includes(L) ? L : X[0] ?? 0;
      let ye = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const ce = X.indexOf(ee);
        ye = X[(ce + 1) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const ce = X.indexOf(ee);
        ye = X[(ce - 1 + X.length) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), ye = X[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), ye = X[X.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), G(ee);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const ce = (me.current + R.key).toLowerCase();
        me.current = ce, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          me.current = "";
        }, 500);
        const Me = [...X, ...X], je = X.indexOf(ee) + 1, Je = Me.slice(je).find(
          (et) => ho(T[et]).toLowerCase().startsWith(ce)
        );
        Je != null && P(Je);
        return;
      }
      ye >= 0 && P(ye);
    },
    [T, se, L, G]
  ), it = F(
    (R) => {
      if (D.length === 0) return;
      const X = Q;
      if (X.length === 0) return;
      const ee = X.includes(B) ? B : X[0] ?? 0;
      let ye = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const ce = X.indexOf(ee);
        ye = X[(ce + 1) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const ce = X.indexOf(ee);
        ye = X[(ce - 1 + X.length) % X.length] ?? X[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), ye = X[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), ye = X[X.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), _e(ee);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const ce = (Ge.current + R.key).toLowerCase();
        Ge.current = ce, Qe.current && clearTimeout(Qe.current), Qe.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Me = [...X, ...X], je = X.indexOf(ee) + 1, Je = Me.slice(je).find(
          (et) => ho(D[et]).toLowerCase().startsWith(ce)
        );
        Je != null && Y(Je);
        return;
      }
      ye >= 0 && Y(ye);
    },
    [D, Q, B, _e]
  ), bt = oe(null), Z = oe(null);
  return /* @__PURE__ */ I(
    "div",
    {
      className: [nt.root, N].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ I("div", { className: nt.panel, children: [
          /* @__PURE__ */ o("div", { className: nt.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: bt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: nt.listbox,
              onKeyDown: Ct,
              children: T.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: nt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : T.map((R, X) => {
                const ee = It(R, w), ye = k.has(ee), ce = X === L, Me = !!R.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ye,
                    "aria-disabled": Me || void 0,
                    tabIndex: -1,
                    "data-active": ce || void 0,
                    className: [
                      nt.option,
                      ye ? nt.selected : null,
                      ce ? nt.active : null,
                      Me ? nt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => G(X),
                    children: ho(R)
                  },
                  ee
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ I("div", { className: nt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !re || void 0,
              disabled: !re,
              onClick: ie,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move all to target",
              "aria-disabled": T.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: T.filter((R) => !R.disabled).length === 0,
              onClick: ue,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move all",
              "aria-disabled": T.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: T.filter((R) => !R.disabled).length === 0,
              onClick: ue,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Ae || void 0,
              disabled: !Ae,
              onClick: he,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: D.filter((R) => !R.disabled).length === 0,
              onClick: Se,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ I("div", { className: nt.panel, children: [
          /* @__PURE__ */ o("div", { className: nt.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: Z,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: nt.listbox,
              onKeyDown: it,
              children: D.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: nt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : D.map((R, X) => {
                const ee = It(R, w), ye = O.has(ee), ce = X === B, Me = !!R.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ye,
                    "aria-disabled": Me || void 0,
                    tabIndex: -1,
                    "data-active": ce || void 0,
                    className: [
                      nt.option,
                      ye ? nt.selected : null,
                      ce ? nt.active : null,
                      Me ? nt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => _e(X),
                    children: ho(R)
                  },
                  ee
                );
              })
            }
          ),
          /* @__PURE__ */ I("div", { className: nt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: nt.btn,
                "aria-label": "Move up",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: q,
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: nt.btn,
                "aria-label": "Move down",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: Ee,
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Gk = "_root_1qxsp_1", Vk = "_header_1qxsp_8", Yk = "_title_1qxsp_15", Xk = "_navBtn_1qxsp_20", Zk = "_resources_1qxsp_39", Jk = "_resource_1qxsp_39", Qk = "_grid_1qxsp_50", eN = "_timeCol_1qxsp_55", tN = "_timeCell_1qxsp_61", nN = "_dayCol_1qxsp_66", rN = "_dayHeader_1qxsp_73", oN = "_slot_1qxsp_81", sN = "_event_1qxsp_91", Gt = {
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
  ), f = n ?? d, g = (p) => {
    n || u(p), r?.(p);
  }, m = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (p, b) => {
    const h = new Date(f);
    return h.setDate(f.getDate() - f.getDay() + b), h;
  }) : Array.from({ length: 30 }, (p, b) => {
    const h = new Date(f);
    return h.setDate(1 + b), h;
  }), y = Array.from({ length: 12 }, (p, b) => 8 + b);
  return /* @__PURE__ */ I(
    "div",
    {
      className: [Gt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ I("div", { className: Gt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() - 7), g(p);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Gt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() + 7), g(p);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: Gt.resources, children: a.map((p) => /* @__PURE__ */ o(
          "div",
          {
            className: Gt.resource,
            role: "presentation",
            "aria-label": p.name,
            children: p.name
          },
          p.id
        )) }),
        /* @__PURE__ */ I("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Gt.timeCol, role: "presentation", children: y.map((p) => /* @__PURE__ */ I("div", { className: Gt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          m.map((p) => /* @__PURE__ */ I(
            "div",
            {
              className: Gt.dayCol,
              role: "presentation",
              title: p.toLocaleDateString(),
              onClick: () => c?.({ date: p }),
              tabIndex: 0,
              "aria-label": p.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: Gt.dayHeader, children: p.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                y.map((b) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(p);
                      h.setHours(b), c?.({ date: h });
                    }
                  },
                  b
                )),
                e.filter((b) => b.start.toDateString() === p.toDateString()).map((b) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${b.title} ${ba(b.start)} - ${ba(b.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: b }),
                    children: b.title
                  },
                  b.id
                ))
              ]
            },
            p.toISOString()
          ))
        ] })
      ]
    }
  );
}
const aN = "_root_dj5ne_1", lN = "_header_dj5ne_8", iN = "_headerCell_dj5ne_15", cN = "_timeline_dj5ne_21", dN = "_row_dj5ne_26", uN = "_taskName_dj5ne_32", fN = "_timelineCell_dj5ne_37", _N = "_bar_dj5ne_43", pN = "_progress_dj5ne_56", hN = "_dep_dj5ne_61", Mn = {
  root: aN,
  header: lN,
  headerCell: iN,
  timeline: cN,
  row: dN,
  taskName: uN,
  timelineCell: fN,
  bar: _N,
  progress: pN,
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
  return /* @__PURE__ */ I(
    "div",
    {
      className: [Mn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ I("div", { className: Mn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Mn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ I("div", { className: Mn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ I(
          "div",
          {
            className: Mn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Mn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ I("div", { className: Mn.timelineCell, role: "gridcell", children: [
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
const mN = "_root_4b64f_1", gN = "_fields_4b64f_6", yN = "_chip_4b64f_13", bN = "_table_4b64f_35", xN = "_totalRow_4b64f_55", vN = "_total_4b64f_55", yr = {
  root: mN,
  fields: gN,
  chip: yN,
  table: bN,
  totalRow: xN,
  total: vN
}, mo = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Hr(e) {
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
  const s = t, l = n, d = r, u = (b, h, _) => {
    const x = b === "row" ? s.filter((C) => C.property !== h) : s, N = b === "col" ? l.filter((C) => C.property !== h) : l, w = b === "agg" ? d.filter((C) => !(C.property === h && C.aggregate === _)) : d;
    a?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: w
    });
  }, f = (b, h) => h.map((_) => String(b[_.property])).join(""), g = [
    ...new Set(s.length ? e.map((b) => f(b, s)) : [""])
  ].sort(), m = [
    ...new Set(l.length ? e.map((b) => f(b, l)) : [""])
  ].sort(), y = (b, h, _) => {
    const x = e.filter(
      (w) => f(w, s) === b && f(w, l) === h
    ), N = x.map((w) => Number(w[_.property])).filter((w) => !Number.isNaN(w));
    return !N.length && _.aggregate !== "Count" ? 0 : mo[_.aggregate](
      _.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, p = (b, h, _, x) => /* @__PURE__ */ I(
    "button",
    {
      type: "button",
      className: yr.chip,
      "aria-label": `Remove ${b} field ${_}`,
      onClick: () => u(b, h, x),
      children: [
        _,
        x ? ` (${x})` : ""
      ]
    },
    `${b}-${_}-${x ?? ""}`
  );
  return /* @__PURE__ */ I("div", { className: [yr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ I("div", { className: yr.fields, children: [
      s.map((b) => p("row", b.property, b.title ?? b.property)),
      l.map((b) => p("col", b.property, b.title ?? b.property)),
      d.map(
        (b) => p("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ I("table", { className: yr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ I("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        m.map((b) => /* @__PURE__ */ o("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ I("tbody", { children: [
        g.map((b) => /* @__PURE__ */ I("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: b || "—" }),
          m.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: Hr(
                y(
                  b,
                  h,
                  d[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: d.length ? Hr(y(b, h, d[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: yr.total, children: d.length ? Hr(
            mo[d[0].aggregate](
              m.flatMap(
                (h) => e.filter(
                  (_) => f(_, s) === b && f(_, l) === h
                ).map((_) => Number(_[d[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ I("tr", { className: yr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          m.map((b) => /* @__PURE__ */ o("td", { children: d.length ? Hr(
            mo[d[0].aggregate](
              e.filter((h) => f(h, l) === b).map((h) => Number(h[d[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, b)),
          /* @__PURE__ */ o("td", { children: d.length ? Hr(
            mo[d[0].aggregate](
              e.map((b) => Number(b[d[0].property])).filter((b) => !Number.isNaN(b))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const wN = "_root_1r7co_1", kN = "_reverse_1r7co_10", NN = "_item_1r7co_14", $N = "_marker_1r7co_35", SN = "_body_1r7co_46", ON = "_label_1r7co_50", EN = "_content_1r7co_56", rr = {
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
      className: [rr.root, t ? rr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: a.map((i, c) => /* @__PURE__ */ I("li", { className: rr.item, children: [
        /* @__PURE__ */ o("span", { className: rr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ I("div", { className: rr.body, children: [
          /* @__PURE__ */ o("div", { className: rr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: rr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const MN = "_root_rm4d8_1", TN = "_header_rm4d8_13", CN = "_headCell_rm4d8_22", AN = "_row_rm4d8_32", DN = "_cell_rm4d8_37", Ur = {
  root: MN,
  header: TN,
  headCell: CN,
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
  ), [d, u] = W(0), f = oe(/* @__PURE__ */ new Set()), g = Math.ceil(n / t), m = Math.max(0, Math.floor(d / t) - 3), y = Math.min(e, m + g + 6), p = F(
    (h, _) => {
      let x = !1;
      for (let N = h; N < _; N++)
        !s.has(N) && !f.current.has(N) && (x = !0);
      if (x) {
        for (let N = h; N < _; N++) f.current.add(N);
        r({ skip: h, top: _ }).then((N) => {
          l((w) => {
            const C = new Map(w);
            return N.forEach(($, M) => C.set(h + M, $)), C;
          });
          for (let w = h; w < _; w++) f.current.delete(w);
        });
      }
    },
    [s, r]
  );
  we(() => {
    p(m, y);
  }, [m, y]);
  const b = [];
  for (let h = m; h < y; h++) {
    const _ = s.get(h) ?? {};
    b.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Ur.row,
          role: "row",
          style: { height: t },
          children: a.map((x) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Ur.cell,
              style: x.width ? { width: x.width } : void 0,
              children: String(_[x.property] ?? "")
            },
            x.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ I(
    "div",
    {
      className: [Ur.root, c].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (h) => u(h.target.scrollTop),
      onKeyDown: (h) => {
        const _ = h.currentTarget;
        h.key === "ArrowDown" ? (h.preventDefault(), _.scrollTop += t) : h.key === "ArrowUp" ? (h.preventDefault(), _.scrollTop -= t) : h.key === "PageDown" ? (h.preventDefault(), _.scrollTop += n) : h.key === "PageUp" && (h.preventDefault(), _.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: m * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: Ur.header, role: "row", children: a.map((h) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: Ur.headCell,
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
            style: { height: Math.max(0, (e - y) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var wn;
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
      const g = this.addEccAndInterleave(d);
      if (this.drawCodewords(g), u == -1) {
        let m = 1e9;
        for (let y = 0; y < 8; y++) {
          this.applyMask(y), this.drawFormatBits(y);
          const p = this.getPenaltyScore();
          p < m && (u = y, m = p), this.applyMask(y);
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
      let m, y;
      for (m = d; ; m++) {
        const _ = t.getNumDataCodewords(m, l) * 8, x = i.getTotalBits(s, m);
        if (x <= _) {
          y = x;
          break;
        }
        if (m >= u)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        g && y <= t.getNumDataCodewords(m, _) * 8 && (l = _);
      let p = [];
      for (const _ of s) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(m), p);
        for (const x of _.getData()) p.push(x);
      }
      a(p.length == y);
      const b = t.getNumDataCodewords(m, l) * 8;
      a(p.length <= b), n(0, Math.min(4, b - p.length), p), n(0, (8 - p.length % 8) % 8, p), a(p.length % 8 == 0);
      for (let _ = 236; p.length < b; _ ^= 253)
        n(_, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (_, x) => h[x >>> 3] |= _ << 7 - (x & 7)
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
        const u = r(l, d), f = this.size - 11 + d % 3, g = Math.floor(d / 3);
        this.setFunctionModule(f, g, u), this.setFunctionModule(g, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(d)), g = s + u, m = l + d;
          0 <= g && g < this.size && 0 <= m && m < this.size && this.setFunctionModule(g, m, f != 2 && f != 4);
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
      ), m = u - g % u, y = Math.floor(g / u);
      let p = [];
      const b = t.reedSolomonComputeDivisor(f);
      for (let _ = 0, x = 0; _ < u; _++) {
        let N = s.slice(
          x,
          x + y - f + (_ < m ? 0 : 1)
        );
        x += N.length;
        const w = t.reedSolomonComputeRemainder(N, b);
        _ < m && N.push(0), p.push(N.concat(w));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((x, N) => {
          (_ != y - f || N >= m) && h.push(x[_]);
        });
      return a(h.length == g), h;
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
            const g = d - f, y = (d + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[y][g] && l < s.length * 8 && (this.modules[y][g] = r(s[l >>> 3], 7 - (l & 7)), l++);
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
        let g = !1, m = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[f][p] == g ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, y), g || (s += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), g = this.modules[f][p], m = 1);
        s += this.finderPenaltyTerminateAndCount(g, m, y) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let g = !1, m = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][f] == g ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, y), g || (s += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), g = this.modules[p][f], m = 1);
        s += this.finderPenaltyTerminateAndCount(g, m, y) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let g = 0; g < this.size - 1; g++) {
          const m = this.modules[f][g];
          m == this.modules[f][g + 1] && m == this.modules[f + 1][g] && m == this.modules[f + 1][g + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const f of this.modules)
        l = f.reduce((g, m) => g + (m ? 1 : 0), l);
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
          (g, m) => d[m] ^= t.reedSolomonMultiply(g, f)
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
})(wn || (wn = {}));
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
})(wn || (wn = {}));
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
})(wn || (wn = {}));
const IN = "_root_1leml_1", LN = {
  root: IN
}, zN = {
  low: wn.QrCode.Ecc.LOW,
  medium: wn.QrCode.Ecc.MEDIUM,
  quartile: wn.QrCode.Ecc.QUARTILE,
  high: wn.QrCode.Ecc.HIGH
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
  const l = i ?? `QR code for ${e}`, d = oe(null), u = cs("(prefers-color-scheme: dark)"), [f, g] = W(null);
  we(() => {
    const N = document.documentElement;
    g(N.dataset.theme ?? null);
    const w = new MutationObserver(() => {
      g(N.dataset.theme ?? null);
    });
    return w.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => w.disconnect();
  }, []);
  const m = Oe(() => {
    try {
      return wn.QrCode.encodeText(e, zN[r]);
    } catch {
      return null;
    }
  }, [e, r]), y = oe(null);
  we(() => {
    if (m !== null) {
      y.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (y.current?.value !== e || y.current?.onError !== s) && (y.current = { value: e, onError: s }, s?.(N));
  }, [m, e, s]);
  const p = Math.max(0, Math.floor(a)), b = [LN.root, c].filter(Boolean).join(" ");
  if (we(() => {
    if (n !== "canvas" || m === null) return;
    const N = d.current, w = N?.getContext("2d");
    if (!N || !w) return;
    const C = getComputedStyle(N), $ = C.getPropertyValue("--dx-text-color").trim() || "#000", M = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    RN(w, m, t, p, $, M);
  }, [n, m, t, p, u, f]), m === null)
    return /* @__PURE__ */ o("div", { className: b, role: "img", "aria-label": l, "data-qr-error": "true" });
  const h = m.size + p * 2, _ = t / h;
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
    for (let w = 0; w < m.size; w++)
      m.getModule(w, N) && x.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (w + p) * _,
            y: (N + p) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${w}-${N}`
        )
      );
  return /* @__PURE__ */ I(
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
function RN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const PN = "_root_1v9la_1", jN = "_value_1v9la_9", xa = {
  root: PN,
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
function _O({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: a,
  className: i
}) {
  const c = a ?? `Barcode ${e}`, s = Oe(() => {
    const l = [];
    let d = 0;
    for (const u of FN(e)) {
      const f = va[u] ?? va[0];
      for (let g = 0; g < f.length; g++) {
        const m = Number(f[g]);
        g % 2 === 0 && l.push({ x: d, w: m }), d += m;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ I("span", { className: [xa.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ I(
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
], Za = /* @__PURE__ */ new Set([
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
]), e$ = /* @__PURE__ */ new Set([...Za, "heatmap"]);
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
function Xt(e, t, n) {
  return /* @__PURE__ */ I(
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
function $o(e, t, n, r, a) {
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
function Ja(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Yr(e, t) {
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
    const u = i.length, f = i.map((_, x) => x), g = i.map((_) => _.val), m = f.reduce((_, x) => _ + x, 0) / u, y = g.reduce((_, x) => _ + x, 0) / u;
    let p = 0, b = 0;
    for (let _ = 0; _ < u; _++)
      p += (f[_] - m) * (g[_] - y), b += (f[_] - m) * (f[_] - m);
    const h = b === 0 ? 0 : p / b;
    s = c.map((_, x) => ({
      cat: _,
      val: y + h * (x - m)
    }));
  } else {
    const u = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((f, g) => {
      if (g + 1 < u) return null;
      const m = i.slice(g + 1 - u, g + 1);
      return {
        cat: f.cat,
        val: m.reduce((y, p) => y + p.val, 0) / u
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
  }, d = rs(l).map((u) => ({
    ...u,
    item: u.item.__item ?? u.item
  }));
  return Qa(e, l, n, d, r);
}
function s$(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((f, g) => [f, g])), s = n.map((f) => {
    const g = c.get(f.cat) ?? 0, m = f.min, y = f.max;
    return typeof m != "number" || Number.isNaN(m) || typeof y != "number" || Number.isNaN(y) ? null : { x: r(g), lo: a(m), hi: a(y) };
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
  const { pad: i, plotW: c, plotH: s } = e, l = i.l + c / 2, d = i.t + s / 2, u = Math.min(c, s) / 3, f = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, g = r.reduce((y, p) => y + (Number(p.val) || 0), 0);
  let m = -90;
  return Xt(
    n,
    t,
    r.map((y, p) => {
      const b = g ? y.val / g * 360 : 0, h = m, _ = m + b;
      m = _;
      const x = b > 180 ? 1 : 0, N = l + u * Math.cos(Ut(h)), w = d + u * Math.sin(Ut(h)), C = l + u * Math.cos(Ut(_)), $ = d + u * Math.sin(Ut(_)), M = l + f * Math.cos(Ut(_)), T = d + f * Math.sin(Ut(_)), A = l + f * Math.cos(Ut(h)), D = d + f * Math.sin(Ut(h)), E = f ? `M ${N} ${w} A ${u} ${u} 0 ${x} 1 ${C} ${$} L ${M} ${T} A ${f} ${f} 0 ${x} 0 ${A} ${D} Z` : `M ${l} ${d} L ${N} ${w} A ${u} ${u} 0 ${x} 1 ${C} ${$} Z`, k = (h + _) / 2, v = l + (u + 12) * Math.cos(Ut(k)), O = d + (u + 12) * Math.sin(Ut(k));
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: E,
            fill: a,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, O, `${t.title ?? y.cat}: ${y.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, y.cat, y.val, y.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: v,
            y: O,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: y.val
          }
        )
      ] }, p);
    })
  );
}
function l$(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: u } = e, f = new Map(u.map((g, m) => [g, m]));
  return Xt(
    n,
    t,
    r.map((g, m) => {
      const y = f.get(g.cat) ?? 0, p = Number(r[m].cat), b = Number.isNaN(p) ? l(y) : i.l + (p - s.min) / (s.max - s.min || 1) * c, h = d(g.val), _ = t.type === "bubble" && g.size !== void 0 ? Math.max(4, Math.min(12, g.size / 10)) : 4;
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        $o(b, h, a, t, _),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: b,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, h, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, m);
    })
  );
}
function Qa(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, u = new Map(l.map((y, p) => [y, p])), f = (y) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let b = 0; b < n; b++) {
      const h = d[b];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (x) => String(x[h.categoryProperty] ?? "") === y
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, g = r.map((y, p) => {
    const b = u.get(y.cat) ?? 0, h = f(y.cat);
    return `${p === 0 ? "M" : "L"} ${c(b)} ${s(h + y.val)}`;
  }).join(" "), m = r.map((y, p) => {
    const b = u.get(y.cat) ?? 0, h = f(y.cat);
    return `${p === 0 ? "M" : "L"} ${c(b)} ${s(h)}`;
  }).join(" ");
  return Xt(
    n,
    t,
    /* @__PURE__ */ I(rt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${g} L ${c(r.length - 1)} ${s(f(r[r.length - 1].cat))} L ${c(0)} ${s(f(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      s$(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: g,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: Ja(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: m, fill: "none", stroke: "transparent" }),
      r.map((y, p) => {
        const b = u.get(y.cat) ?? 0, h = f(y.cat), _ = c(b), x = s(h + y.val);
        return /* @__PURE__ */ I("g", { role: "listitem", children: [
          $o(_, x, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: _ - 12,
              y: x - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                _,
                x,
                `${t.title ?? y.cat}: ${Yr(e, y.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: _,
              y: x - 8,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Yr(e, y.val)
            }
          )
        ] }, p);
      })
    ] })
  );
}
function i$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: u, categories: f, series: g } = e, m = new Map(f.map((p, b) => [p, b])), y = t.type === "bar";
  return Xt(
    n,
    t,
    r.map((p, b) => {
      const h = m.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let v = 0; v < n; v++) {
          const O = g[v];
          if (O?.stack !== t.stack) continue;
          const z = O.data.find(
            (L) => String(L[O.categoryProperty] ?? "") === p.cat
          );
          z && (_ += Number(z[O.valueProperty]) || 0);
        }
      const x = _ + p.val, N = typeof p.min == "number" && !Number.isNaN(p.min) && typeof p.max == "number" && !Number.isNaN(p.max), w = g.filter(
        (v) => !v.stack || v.stack === t.stack
      ).length, C = c / Math.max(1, f.length), $ = y ? 18 : Math.max(12, C / (t.stack ? 1 : g.length) - 4), M = y ? i.l + _ / (l.max - l.min || 1) * c : d(h) - $ / 2 + (t.stack ? 0 : n % w * $), T = y ? i.t + h * s / Math.max(1, f.length) + 4 : u(N ? _ + p.max : x), A = y ? N ? (p.max - p.min) / (l.max - l.min || 1) * c : p.val / (l.max - l.min || 1) * c : $ - 4, D = y ? 16 : N ? u(_ + p.min) - u(_ + p.max) : u(_) - u(x), E = y ? i.l + (_ + (N ? p.min : 0)) / (l.max - l.min || 1) * c : M, k = y ? i.t + h * s / Math.max(1, f.length) + 4 : T;
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: E,
            y: k,
            width: y ? A : $ - 4,
            height: D,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              E + (y ? A : $) / 2,
              k,
              `${t.title ?? p.cat}: ${Yr(e, p.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: E + (y ? A : $) / 2,
            y: k - 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Yr(e, p.val)
          }
        )
      ] }, b);
    })
  );
}
function c$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: u, hideTip: f } = e, g = i.l + c / 2, m = i.t + s * 0.78, y = Math.min(c, s) * 0.36, p = 135, b = 270, h = r.reduce((C, $) => C + (Number($.val) || 0), 0), _ = l.max - l.min || 1, x = Math.min(1, Math.max(0, (h - l.min) / _)), N = (C, $) => {
    const [M, T] = [
      g + y * Math.cos(Ut(C)),
      m + y * Math.sin(Ut(C))
    ], [A, D] = [
      g + y * Math.cos(Ut($)),
      m + y * Math.sin(Ut($))
    ], E = $ - C > 180 ? 1 : 0;
    return `M ${M} ${T} A ${y} ${y} 0 ${E} 1 ${A} ${D}`;
  }, w = Number(h.toFixed(2));
  return Xt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ I("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + b),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      x > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + b * x),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: g, y: m - 4, textAnchor: "middle", className: Ze.gaugeValue, children: w }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && u(g, m - y, `${t.title ?? "Value"}: ${w}`),
          onMouseLeave: () => f(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", h, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: g,
          y: m + y + 18,
          textAnchor: "middle",
          className: Ze.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function _s(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (f) => Ut(-90 + 360 * f / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (f, g) => {
    const m = d(f);
    return [
      i + s * g * Math.cos(m),
      c + s * g * Math.sin(m)
    ];
  } };
}
function d$(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = _s(e);
  return /* @__PURE__ */ I("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: u, radius: f, angleFor: g, vertexFor: m } = _s(e), y = e.scale.max || 1, p = (h) => r.find((_) => _.cat === h)?.val ?? 0, b = i.map((h, _) => {
    const x = Math.min(1, Math.max(0, p(h) / y)), [N, w] = m(_, x);
    return `${N},${w}`;
  }).join(" ");
  return Xt(
    n,
    t,
    /* @__PURE__ */ I(rt, { children: [
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
      i.map((h, _) => {
        const x = Math.min(1, Math.max(0, p(h) / y)), [N, w] = m(_, x), [C, $] = m(_, 1);
        return /* @__PURE__ */ I("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: N,
              cy: w,
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
              cy: w,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(C, $, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const M = r.find((T) => T.cat === h);
                M && e.handleClick(t, M.cat, M.val, M.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (f + 14) * Math.cos(g(_)),
              y: u + (f + 14) * Math.sin(g(_)) + 4,
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
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, g = Math.max(1, ...f.map((p) => Number(p.val) || 0)), m = s / Math.max(1, f.length), y = i.l + c / 2;
  return Xt(
    n,
    t,
    f.map((p, b) => {
      const _ = Math.max(0, Number(p.val) || 0) / g * c, x = f[b + 1], N = x ? Math.max(0, Number(x.val) || 0) / g * c : _ * 0.7, w = i.t + b * m + 2, C = Math.max(4, m - 6), $ = 1 - b * (0.45 / Math.max(1, f.length));
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${y - _ / 2} ${w} L ${y + _ / 2} ${w} L ${y + N / 2} ${w + C} L ${y - N / 2} ${w + C} Z`,
            fill: a,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(y, w, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ I(
          "text",
          {
            x: y,
            y: w + C / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function _$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: u, hideTip: f } = e, g = [];
  t.data.forEach((x) => {
    const N = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    g.includes(N) || g.push(N);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), y = m.length ? Math.min(...m) : 0, p = m.length ? Math.max(...m) : 1, b = c / Math.max(1, l.length), h = s / Math.max(1, g.length), _ = (x) => p === y ? 0.6 : 0.15 + 0.85 * ((x - y) / (p - y));
  return Xt(
    n,
    t,
    /* @__PURE__ */ I(rt, { children: [
      g.map((x, N) => /* @__PURE__ */ o(
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
        const w = t.data[N], C = l.indexOf(x.cat), $ = g.indexOf(
          t.rowProperty && w ? String(w[t.rowProperty] ?? "") : "All"
        );
        if (C < 0 || $ < 0) return null;
        const M = i.l + C * b, T = i.t + $ * h;
        return /* @__PURE__ */ I("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: M + 1,
              y: T + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, h - 2),
              fill: a,
              fillOpacity: _(x.val),
              onMouseEnter: () => d && u(M + b / 2, T, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: M + b / 2,
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
function p$(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((m, y) => [m, y])), d = e.plotW / Math.max(1, s.length), u = Math.max(8, Math.min(28, d / 2 - 4)), f = t.upColor ?? a, g = t.downColor ?? "var(--dx-danger-color)";
  return Xt(
    n,
    t,
    r.map((m, y) => {
      const p = l.get(m.cat) ?? 0, b = i(p), h = m.close ?? m.val, _ = typeof m.open == "number" && !Number.isNaN(m.open) && typeof m.high == "number" && !Number.isNaN(m.high) && typeof m.low == "number" && !Number.isNaN(m.low) && typeof h == "number" && !Number.isNaN(h), x = _ && h >= m.open, N = `${t.title ?? m.cat}: O ${m.open ?? "–"} H ${m.high ?? "–"} L ${m.low ?? "–"} C ${h}`;
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        _ && t.type === "candlestick" && /* @__PURE__ */ I(rt, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: b,
              y1: c(m.high),
              x2: b,
              y2: c(m.low),
              stroke: x ? f : g,
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
              stroke: x ? f : g,
              strokeWidth: 1.5
            }
          )
        ] }),
        _ && t.type === "ohlc" && /* @__PURE__ */ I(rt, { children: [
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
        _ && t.type === "highlow" && /* @__PURE__ */ o(
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
        !_ && $o(b, c(h), a, t, 4),
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
            children: Yr(e, h)
          }
        )
      ] }, y);
    })
  );
}
function h$(e, t, n, r, a) {
  const i = e.reduce((y, p) => y + Math.max(0, p.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((y, p) => ({ ...y, i: p }));
  let d = t, u = n, f = r, g = a;
  const m = (y, p) => {
    const b = y.reduce((x, N) => x + Math.max(0, N.val), 0) * c;
    if (b <= 0) return Number.POSITIVE_INFINITY;
    const h = Math.max(...y.map((x) => Math.max(0, x.val))) * c, _ = Math.min(...y.map((x) => Math.max(0, x.val))) * c;
    return Math.max(
      p * p * h / (b * b),
      b * b / (p * p * (_ || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const y = Math.min(f, g), p = [];
    let b = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const _ = [...p, l[0]], x = m(_, y);
      if (x <= b)
        b = x, p.push(l.shift());
      else break;
    }
    p.length === 0 && p.push(l.shift());
    const h = p.reduce((_, x) => _ + Math.max(0, x.val), 0) * c;
    if (f >= g) {
      const _ = h / g;
      let x = u;
      for (const N of p) {
        const w = Math.max(0, N.val) * c / _;
        s[N.i] = { x: d, y: x, w: _, h: w }, x += w;
      }
      d += _, f -= _;
    } else {
      const _ = h / f;
      let x = d;
      for (const N of p) {
        const w = Math.max(0, N.val) * c / _;
        s[N.i] = { x, y: u, w, h: _ }, x += w;
      }
      u += _, g -= _;
    }
  }
  return s;
}
function el(e, t, n, r, a, i, c, s, l, d, u) {
  const f = e.colorFor, g = s.map((p) => ({
    cat: String(p[t.categoryProperty] ?? ""),
    val: Number(p[t.valueProperty]),
    item: p
  })), m = h$(g, r, a, i, c), y = t.childrenProperty ?? "children";
  g.forEach((p, b) => {
    const h = m[b], _ = s[b]?.[y], x = Array.isArray(_) ? _ : [];
    if (x.length > 0 && l < 8) {
      el(
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
      ...p,
      color: f(n + N, t),
      x: h.x,
      y: h.y,
      w: h.w,
      h: h.h
    });
  });
}
function m$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = { n: 0 }, g = [];
  return el(
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
  ), Xt(
    n,
    t,
    g.map((m, y) => /* @__PURE__ */ I("g", { role: "listitem", children: [
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
    ] }, y))
  );
}
function g$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, g = Math.max(1, ...f.map((p) => Math.max(0, p.val))), m = s / Math.max(1, f.length), y = i.l + c / 2;
  return Xt(
    n,
    t,
    f.map((p, b) => {
      const _ = Math.max(0, p.val) / g * c, x = f[b + 1], N = x ? Math.max(0, x.val) / g * c : _, w = i.t + b * m + 2, C = Math.max(4, m - 6);
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${y - _ / 2} ${w} L ${y + _ / 2} ${w} L ${y + N / 2} ${w + C} L ${y - N / 2} ${w + C} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(y, w, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ I(
          "text",
          {
            x: y,
            y: w + C / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function y$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: u } = _s(e), f = (y) => {
    let p = 0;
    for (const b of d)
      if (b.type === "spider") {
        for (const h of b.data)
          if (String(h[b.categoryProperty] ?? "") === y) {
            const _ = Number(h[b.valueProperty]);
            Number.isNaN(_) || (p = Math.max(p, _));
          }
      }
    return p || 1;
  }, g = (y) => r.find((p) => p.cat === y)?.val ?? 0, m = i.map((y, p) => {
    const b = Math.min(1, Math.max(0, g(y) / f(y))), [h, _] = u(p, b);
    return `${h},${_}`;
  }).join(" ");
  return Xt(
    n,
    t,
    /* @__PURE__ */ I(rt, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: m,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: Ja(t.dash)
        }
      ),
      i.map((y, p) => {
        const b = Math.min(1, Math.max(0, g(y) / f(y))), [h, _] = u(p, b), [x, N] = u(p, 1);
        return /* @__PURE__ */ I("g", { role: "listitem", children: [
          $o(h, _, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: h,
              cy: _,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(x, N, `${t.title ?? y}: ${g(y)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const w = r.find((C) => C.cat === y);
                w && e.handleClick(t, w.cat, w.val, w.item);
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
              children: g(y)
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x,
              y: N + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: y
            }
          )
        ] }, y);
      })
    ] })
  );
}
function b$(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, c = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((v) => ({
    source: String(v[c] ?? ""),
    target: String(v[s] ?? ""),
    value: Number(v[t.valueProperty]),
    item: v
  })).filter(
    (v) => v.source && v.target && v.source !== v.target && v.value > 0
  ), d = [];
  for (const v of l)
    d.includes(v.source) || d.push(v.source), d.includes(v.target) || d.push(v.target);
  const u = /* @__PURE__ */ new Map();
  for (const v of l)
    u.has(v.target) || u.set(v.target, []), u.get(v.target).push(v.source);
  const f = /* @__PURE__ */ new Map(), g = (v, O) => {
    if (f.has(v)) return f.get(v);
    if (O.has(v)) return 0;
    O.add(v);
    const z = u.get(v) ?? [], L = z.length === 0 ? 0 : 1 + Math.max(...z.map((P) => g(P, O)));
    return O.delete(v), f.set(v, L), L;
  }, m = /* @__PURE__ */ new Map();
  for (const v of d) m.set(v, g(v, /* @__PURE__ */ new Set()));
  const y = Math.max(0, ...m.values()), p = Math.max(
    12,
    Math.min(28, a / Math.max(1, (y + 1) * 8))
  ), b = 10, h = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const v of l)
    _.set(v.source, (_.get(v.source) ?? 0) + v.value), h.set(v.target, (h.get(v.target) ?? 0) + v.value);
  const x = (v) => Math.max(h.get(v) ?? 0, _.get(v) ?? 0), N = /* @__PURE__ */ new Map();
  for (const v of d) {
    const O = m.get(v);
    N.set(O, (N.get(O) ?? 0) + x(v));
  }
  const w = Math.max(1, ...N.values()), C = (i - b * Math.max(0, d.length - 1)) / w, $ = (v) => y === 0 ? r.l : r.l + v / y * (a - p), M = [], T = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
  for (const v of d) {
    const O = m.get(v);
    A.has(O) || A.set(O, []), A.get(O).push(v);
  }
  for (const [v, O] of [...A.entries()].sort(
    (z, L) => z[0] - L[0]
  )) {
    let z = r.t;
    for (const L of O) {
      const P = Math.max(4, x(L) * C), B = {
        id: L,
        depth: v,
        total: x(L),
        x: $(v),
        w: p,
        y: z,
        h: P,
        color: e.colorFor(n + M.length, t)
      };
      M.push(B), T.set(L, B), z += P + b;
    }
  }
  const D = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), k = [];
  for (const v of l) {
    const O = T.get(v.source), z = T.get(v.target), L = Math.max(1, v.value * C), P = O.y + (D.get(v.source) ?? 0), B = z.y + (E.get(v.target) ?? 0);
    D.set(v.source, (D.get(v.source) ?? 0) + L), E.set(v.target, (E.get(v.target) ?? 0) + L), k.push({ source: O, target: z, value: v.value, y0: P, y1: B, h: L });
  }
  return { nodes: M, links: k };
}
function x$(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function v$(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: c, hideTip: s } = e, { nodes: l, links: d } = b$(e, t, n);
  return Xt(
    n,
    t,
    /* @__PURE__ */ I(rt, { children: [
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
      l.map((u) => /* @__PURE__ */ I("g", { role: "listitem", children: [
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
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r.map((A) => ({ x: Number(A.cat), y: A.val })).filter((A) => !Number.isNaN(A.x) && !Number.isNaN(A.y));
  if (f.length === 0) return null;
  let g = Math.min(...f.map((A) => A.x)), m = Math.max(...f.map((A) => A.x)), y = Math.min(...f.map((A) => A.y)), p = Math.max(...f.map((A) => A.y));
  g === m && (g -= 0.5, m += 0.5), y === p && (y -= 0.5, p += 0.5);
  const b = Math.max(4, Math.floor(t.resolution ?? 28)), h = Array.from(
    { length: b + 1 },
    () => Array.from({ length: b + 1 }, () => 0)
  );
  for (const A of f) {
    const D = Math.max(
      0,
      Math.min(b, Math.round((A.x - g) / (m - g) * b))
    ), E = Math.max(
      0,
      Math.min(b, Math.round((A.y - y) / (p - y) * b))
    );
    h[E][D] += 1;
  }
  let _ = 0;
  for (const A of h) for (const D of A) _ = Math.max(_, D);
  if (_ <= 0) return null;
  const x = Math.max(1, Math.floor(t.levels ?? 5)), N = Array.from(
    { length: x },
    (A, D) => _ * (D + 1) / (x + 1)
  ), w = c / b, C = s / b, $ = i.l, M = i.t, T = (A) => {
    const D = [], E = (v, O) => h[O]?.[v] ?? 0, k = (v, O, z, L) => L === z ? (v + O) / 2 : v + (A - z) / (L - z) * (O - v);
    for (let v = 0; v < b; v++)
      for (let O = 0; O < b; O++) {
        const z = E(O, v), L = E(O + 1, v), P = E(O, v + 1), B = E(O + 1, v + 1), Y = $ + O * w, se = M + v * C, Q = k(Y, Y + w, z, L), be = k(Y, Y + w, P, B), ne = k(se, se + C, z, P), pe = k(se, se + C, L, B), G = (z >= A ? 8 : 0) | (L >= A ? 4 : 0) | (B >= A ? 2 : 0) | (P >= A ? 1 : 0), _e = [Q, se], ie = [be, se + C], he = [Y, ne], ue = [Y + w, pe], Se = (q, Ee) => {
          D.push([q[0], q[1], Ee[0], Ee[1]]);
        };
        switch (G) {
          case 1:
          case 14:
            Se(he, ie);
            break;
          case 2:
          case 13:
            Se(ie, ue);
            break;
          case 3:
          case 12:
            Se(he, ue);
            break;
          case 4:
          case 11:
            Se(_e, ue);
            break;
          case 6:
          case 9:
            Se(_e, ie);
            break;
          case 7:
          case 8:
            Se(_e, he);
            break;
          case 5: {
            (z + L + P + B) / 4 >= A ? (Se(_e, he), Se(ie, ue)) : (Se(_e, ue), Se(he, ie));
            break;
          }
          case 10: {
            (z + L + P + B) / 4 >= A ? (Se(_e, ue), Se(he, ie)) : (Se(_e, he), Se(ie, ue));
            break;
          }
        }
      }
    return D;
  };
  return Xt(
    n,
    t,
    N.map((A, D) => {
      const E = T(A);
      if (E.length === 0) return null;
      const k = E.map(([O, z, L, P]) => `M ${O} ${z} L ${L} ${P}`).join(" "), v = e.colorFor(n + D, t);
      return /* @__PURE__ */ I("g", { role: "listitem", children: [
        /* @__PURE__ */ o("path", { d: k, fill: "none", stroke: v, strokeWidth: 1.5 }),
        /* @__PURE__ */ o(
          "path",
          {
            d: k,
            fill: "none",
            stroke: "transparent",
            strokeWidth: 12,
            onMouseEnter: () => l && d(
              $ + c / 2,
              M + 8,
              `${t.title ?? "Density"} ≥ ${Math.round(A * 100) / 100}`
            ),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, `level ${D + 1}`, A, { threshold: A }),
            style: { cursor: "pointer" }
          }
        )
      ] }, D);
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
      return Qa(e, t, n, r, a);
    case "gauge":
      return c$(e, t, n, r, a);
    case "radar":
      return u$(e, t, n, r, a);
    case "funnel":
      return f$(e, t, n, r, a);
    case "heatmap":
      return _$(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return p$(e, t, n, r, a);
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
function pO({
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
  ), m = Oe(() => {
    const E = /* @__PURE__ */ new Set();
    for (const k of e)
      for (const v of k.data) E.add(String(v[k.categoryProperty] ?? ""));
    return [...E];
  }, [e]), y = Oe(() => {
    if (!c) return e;
    const E = /* @__PURE__ */ new Map();
    for (const k of e)
      if (k.stack)
        for (const v of k.data) {
          const O = `${k.stack}\0${String(v[k.categoryProperty] ?? "")}`, z = Number(v[k.valueProperty]);
          Number.isNaN(z) || E.set(O, (E.get(O) ?? 0) + z);
        }
    return e.map((k) => k.stack ? {
      ...k,
      data: k.data.map((v) => {
        const O = `${k.stack}\0${String(v[k.categoryProperty] ?? "")}`, z = E.get(O) ?? 0, L = Number(v[k.valueProperty]);
        return {
          ...v,
          [k.valueProperty]: z > 0 && !Number.isNaN(L) ? L / z * 100 : 0
        };
      })
    } : k);
  }, [e, c]), p = Oe(() => {
    const E = y.flatMap(
      (v) => v.data.flatMap((O) => [
        Number(O[v.valueProperty]),
        ...v.openProperty ? [Number(O[v.openProperty])] : [],
        ...v.highProperty ? [Number(O[v.highProperty])] : [],
        ...v.lowProperty ? [Number(O[v.lowProperty])] : [],
        ...v.closeProperty ? [Number(O[v.closeProperty])] : []
      ])
    ).filter((v) => !Number.isNaN(v)), k = /* @__PURE__ */ new Map();
    for (const v of y) {
      if (!v.stack) continue;
      let O = k.get(v.stack);
      O || k.set(v.stack, O = /* @__PURE__ */ new Map());
      for (const z of v.data) {
        const L = String(z[v.categoryProperty] ?? ""), P = Number(z[v.valueProperty]);
        Number.isNaN(P) || O.set(L, (O.get(L) ?? 0) + P);
      }
    }
    for (const v of k.values()) E.push(...v.values());
    return E;
  }, [y]), b = r?.min ?? (p.length ? Math.min(0, ...p) : 0), h = r?.max ?? (p.length ? Math.max(...p) : 10), _ = Oe(
    () => t$(b, h, r?.step),
    [b, h, r?.step]
  ), x = { t: 16, r: 16, b: 40, l: 56 }, N = t - x.l - x.r, w = n - x.t - x.b, C = (E) => x.l + E / Math.max(1, m.length - 1) * N, $ = (E) => x.t + (1 - (E - _.min) / (_.max - _.min || 1)) * w, M = (E, k) => k.color ?? ka[E % ka.length], T = e.some((E) => Za.has(E.type)), A = e.some((E) => e$.has(E.type)), D = {
    categories: m,
    scale: _,
    pad: x,
    plotW: N,
    plotH: w,
    xFor: C,
    yFor: $,
    colorFor: M,
    tooltipVisible: s,
    percent: c,
    showTip: (E, k, v) => g({ x: E, y: k, text: v }),
    hideTip: () => g(null),
    handleClick: (E, k, v, O) => l?.({
      seriesTitle: E.title ?? "",
      category: k,
      value: v,
      item: O
    }),
    series: y
  };
  return /* @__PURE__ */ I(
    "figure",
    {
      className: [Ze.root, u].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ I(
          "svg",
          {
            width: t,
            height: n,
            className: Ze.svg,
            role: "presentation",
            children: [
              T && r?.gridlines !== !1 && _.ticks.map((E) => /* @__PURE__ */ o(
                "line",
                {
                  x1: x.l,
                  x2: x.l + N,
                  y1: $(E),
                  y2: $(E),
                  className: Ze.gridline
                },
                E
              )),
              A && a?.gridlines && m.map((E, k) => /* @__PURE__ */ o(
                "line",
                {
                  x1: C(k),
                  x2: C(k),
                  y1: x.t,
                  y2: x.t + w,
                  className: Ze.gridline
                },
                k
              )),
              T && _.ticks.map((E) => /* @__PURE__ */ o(
                "text",
                {
                  x: x.l - 8,
                  y: $(E) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: c ? `${E}%` : E
                },
                E
              )),
              A && m.map((E, k) => /* @__PURE__ */ o(
                "text",
                {
                  x: C(k),
                  y: x.t + w + 16,
                  textAnchor: "middle",
                  className: Ze.tickLabel,
                  children: E
                },
                E
              )),
              T && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: x.t + w / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${x.t + w / 2})`,
                  className: Ze.axisTitle,
                  children: r.title
                }
              ),
              A && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: x.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Ze.axisTitle,
                  children: a.title
                }
              ),
              (e.some((E) => E.type === "radar") || e.some((E) => E.type === "spider")) && d$(D),
              y.map((E, k) => k$(D, E, k))
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
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: e.map((E, k) => /* @__PURE__ */ I("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: M(k, E) },
              "aria-hidden": "true"
            }
          ),
          E.title ?? `Series ${k + 1}`
        ] }, k)) }),
        /* @__PURE__ */ I(
          "table",
          {
            className: Ze.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: d }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ I("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (E) => E.data.map((k, v) => /* @__PURE__ */ I("tr", { children: [
                  /* @__PURE__ */ o("td", { children: E.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: E.rowProperty ? `${String(k[E.rowProperty] ?? "")} / ${String(k[E.categoryProperty] ?? "")}` : String(k[E.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(k[E.valueProperty] ?? "") })
                ] }, `${E.title}-${v}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function hO({ query: e, children: t }) {
  return cs(e) ? /* @__PURE__ */ o(rt, { children: t }) : null;
}
function mO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function gO() {
  const e = oe(null);
  return we(() => {
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
  }, []), F((t) => {
    const n = e.current;
    n && (n.textContent = t);
  }, []);
}
export {
  sS as AIChat,
  mp as ALERT_ICON,
  OS as Accordion,
  uS as Alert,
  nS as ArcGauge,
  TS as AutoComplete,
  mS as AutoGrid,
  $S as Avatar,
  O$ as Badge,
  _O as Barcode,
  yS as Body,
  QS as Breadcrumb,
  cn as Button,
  S$ as Card,
  oO as Carousel,
  pO as Chart,
  lu as CheckBox,
  AS as CheckBoxList,
  PS as ColorPicker,
  pS as Column,
  VS as ContextMenuProvider,
  Mr as DEFAULT_OPERATOR_BY_TYPE,
  bv as DEFAULT_PALETTE,
  q$ as DataFilter,
  K$ as DataGrid,
  G$ as DataList,
  jS as DatePicker,
  Ta as Dialog,
  J$ as DialogProvider,
  MS as DropDown,
  KS as DropZone,
  C$ as EmptyState,
  Sa as FILTER_OPERATORS,
  JS as FabMenu,
  ar as Field,
  D$ as Fieldset,
  s0 as Footer,
  I$ as Form,
  A$ as FormField,
  iO as Gantt,
  i0 as Header,
  iS as HtmlEditor,
  De as Icon,
  no as Input,
  V$ as Label,
  gS as Layout,
  oS as LinearGauge,
  eO as Link,
  CS as ListBox,
  mO as LiveRegion,
  aS as Login,
  lS as Markdown,
  zS as Mask,
  hO as MediaQuery,
  Ew as Menu,
  Va as MenuItem,
  RS as Numeric,
  Uc as Pager,
  XS as PanelMenu,
  YS as PanelMenuItem,
  Pf as Password,
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
  _S as Row,
  lO as Scheduler,
  US as SecurityCode,
  xr as Select,
  IS as SelectBar,
  x0 as Sidebar,
  bS as SidebarToggle,
  WS as SignaturePad,
  fS as Skeleton,
  FS as Slider,
  LS as SplitButton,
  nO as Splitter,
  hS as Stack,
  M$ as Stat,
  tO as Steps,
  Y$ as Switch,
  T$ as Table,
  SS as Tabs,
  Ca as Text,
  ES as TextArea,
  ls as TextBox,
  vS as ThemeToggle,
  HS as TimeSpanPicker,
  dO as Timeline,
  eS as ToastProvider,
  rO as Toc,
  R0 as ToggleButton,
  X$ as Tooltip,
  sO as Tree,
  qS as Upload,
  uO as VirtualGrid,
  Zc as aggregateValue,
  Ea as applyFilters,
  Xc as applyGridState,
  Os as collectGroupKeys,
  or as columnValue,
  F$ as compare,
  U$ as custom,
  Gc as cycleSort,
  Ms as defaultOperatorForType,
  z$ as email,
  da as formatMasked,
  bo as formatValue,
  kS as getAppearance,
  yo as getByPath,
  wS as getTheme,
  Wc as groupItems,
  E$ as iconNames,
  Oa as matchesFilters,
  j$ as maxLength,
  P$ as minLength,
  Yc as paginate,
  R$ as pattern,
  B$ as range,
  O_ as renderMarkdown,
  L$ as required,
  H$ as requiredTrue,
  Na as resolveVariant,
  Xi as runValidators,
  H0 as setAppearance,
  F0 as setTheme,
  Vr as shadeClass,
  _c as sortItems,
  Vc as sortedItems,
  ia as subscribe,
  Jc as toCsv,
  ic as toFilterString,
  fc as toODataFilterString,
  GS as useContextMenu,
  Z$ as useDialog,
  Yi as useFormContext,
  W$ as useFormField,
  gO as useLiveRegion,
  cs as useMediaQuery,
  cS as usePopup,
  NS as useThemeService,
  Q$ as useToast
};
