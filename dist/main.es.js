import { jsx as o, jsxs as D, Fragment as at } from "react/jsx-runtime";
import { forwardRef as st, useId as lt, isValidElement as Wt, cloneElement as rs, useState as W, useRef as ne, useCallback as B, useMemo as Oe, useContext as Bn, createContext as ir, useEffect as be, Fragment as os, useLayoutEffect as Uo, useImperativeHandle as ko, Children as Xr } from "react";
function Vr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const sl = "_button_eyvws_1", al = "_filled_eyvws_36", ll = "_flat_eyvws_55", il = "_outlined_eyvws_58", cl = "_text_eyvws_63", dl = "_loading_eyvws_506", ul = "_spinner_eyvws_509", fl = "_xs_eyvws_525", _l = "_sm_eyvws_531", pl = "_md_eyvws_537", hl = "_lg_eyvws_543", ml = "_xl_eyvws_549", gl = "_iconOnly_eyvws_555", yl = "_fullWidth_eyvws_585", An = {
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
const ln = st(
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
      className: u,
      disabled: g,
      children: m,
      ...y
    } = t;
    if (f === !1) return null;
    const p = bl(r, a), h = p.style === "light" || p.style === "dark" ? null : Vr(i), _ = [
      An.button,
      An[p.variant],
      An[`style-${p.style}`],
      h ? An[h] : null,
      An[c],
      s ? An.fullWidth : null,
      l ? An.iconOnly : null,
      d ? An.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), b = /* @__PURE__ */ D(at, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: An.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...$ } = y, E = g || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: _,
          "aria-disabled": E || void 0,
          "aria-busy": d || void 0,
          onClick: (I) => {
            if (E) {
              I.preventDefault();
              return;
            }
            S?.(I);
          },
          ...$,
          children: b
        }
      );
    }
    const { type: v = "button", ...C } = y;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: g || d,
        "aria-busy": d || void 0,
        ...C,
        children: b
      }
    );
  }
), xl = "_card_4vcae_1", vl = "_elevated_4vcae_8", wl = "_filled_4vcae_13", kl = "_outlined_4vcae_18", Nl = "_interactive_4vcae_22", Sl = "_text_4vcae_30", Ol = "_header_4vcae_46", $l = "_body_4vcae_53", El = "_footer_4vcae_63", Sr = {
  card: xl,
  elevated: vl,
  filled: wl,
  outlined: kl,
  interactive: Nl,
  text: Sl,
  header: Ol,
  body: $l,
  footer: El
}, ES = st(function({
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
        onKeyDown: (u) => {
          s?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [Sr.card, Sr[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Sr.header, children: n }),
          /* @__PURE__ */ o("div", { className: Sr.body, children: c }),
          r != null && /* @__PURE__ */ o("div", { className: Sr.footer, children: r })
        ]
      }
    )
  );
});
function ka(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Tl = "_badge_1fy6d_1", Cl = "_xs_1fy6d_21", Al = "_sm_1fy6d_26", Dl = "_md_1fy6d_31", Ml = "_lg_1fy6d_36", Il = "_xl_1fy6d_41", zl = "_neutral_1fy6d_47", Ll = "_primary_1fy6d_52", Rl = "_secondary_1fy6d_61", Pl = "_light_1fy6d_66", jl = "_base_1fy6d_71", Bl = "_dark_1fy6d_76", Fl = "_info_1fy6d_81", Hl = "_success_1fy6d_86", Ul = "_warning_1fy6d_95", Wl = "_danger_1fy6d_104", ql = "_filled_1fy6d_111", Kl = "_outlined_1fy6d_161", Gl = "_text_1fy6d_213", Or = {
  badge: Tl,
  xs: Cl,
  sm: Al,
  md: Dl,
  lg: Ml,
  xl: Il,
  neutral: zl,
  primary: Ll,
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
}, TS = st(function({
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
  const f = t, u = ka(n, "filled"), g = Vr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Or.badge,
        Or[a],
        Or[f],
        Or[u],
        g ? Or[g] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Vl = "_icon_vn4jx_5", Yl = "_xs_vn4jx_24", Xl = "_sm_vn4jx_28", Zl = "_md_vn4jx_23", Jl = "_lg_vn4jx_36", Ql = "_xl_vn4jx_40", bs = {
  icon: Vl,
  xs: Yl,
  sm: Xl,
  md: Zl,
  lg: Jl,
  xl: Ql
}, CS = [
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
], Me = st(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
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
}, AS = st(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      className: [Zn.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Zn.label, children: t }),
        /* @__PURE__ */ D("div", { className: Zn.row, children: [
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
function DS({
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
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Hn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? Hn[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Hn.empty, children: r })
  ] });
}
const xi = "_emptyState_1swxw_1", vi = "_icon_1swxw_13", wi = "_title_1swxw_18", ki = "_description_1swxw_24", Ni = "_action_1swxw_30", $r = {
  emptyState: xi,
  icon: vi,
  title: wi,
  description: ki,
  action: Ni
};
function MS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [$r.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: $r.icon, children: e }),
    /* @__PURE__ */ o("div", { className: $r.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: $r.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: $r.action, children: r })
  ] });
}
const Si = "_field_149oz_1", Oi = "_label_149oz_8", $i = "_required_149oz_14", Ei = "_hint_149oz_19", Ti = "_error_149oz_24", Er = {
  field: Si,
  label: Oi,
  required: $i,
  hint: Ei,
  error: Ti
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
  const d = r ?? a, f = lt(), u = lt(), g = lt();
  if (l === !1) return null;
  const m = i != null ? u : d != null ? g : null, y = typeof c == "function" ? c({ inputId: f, hintId: g, errorId: u }) : c, p = Wt(y) && typeof y.props.id == "string" ? y.props.id : void 0, x = p ?? t ?? f, h = Wt(y) && (m != null || p == null && typeof y.type == "string"), _ = p != null || t != null || h, b = h && Wt(y) ? rs(y, {
    id: x,
    "aria-describedby": m != null ? [
      y.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : y.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : y.props["aria-invalid"]
  }) : y;
  return /* @__PURE__ */ D("div", { className: [Er.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Er.label,
        htmlFor: _ ? x : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Er.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    b,
    i != null ? /* @__PURE__ */ o("div", { id: u, className: Er.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: g, className: Er.hint, children: d }) : null
  ] });
}
const Ci = "_formfield_6e25e_1", Ai = "_content_6e25e_8", Di = "_floating_6e25e_43", Mi = "_label_6e25e_111", Ii = "_start_6e25e_132", zi = "_required_6e25e_169", Li = "_end_6e25e_175", Ri = "_filled_6e25e_192", Pi = "_flat_6e25e_199", ji = "_helper_6e25e_206", Bi = "_invalid_6e25e_211", Nn = {
  formfield: Ci,
  content: Ai,
  floating: Di,
  label: Mi,
  start: Ii,
  required: zi,
  end: Li,
  filled: Ri,
  flat: Pi,
  helper: ji,
  invalid: Bi
};
function IS({
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
  visible: u = !0
}) {
  const g = lt(), m = lt();
  if (u === !1) return null;
  const y = a ?? g, p = typeof d == "function" ? d({
    inputId: y
  }) : d, x = Wt(p) ? p.type : null, h = typeof x == "string", _ = Wt(p) && typeof x != "symbol", b = Wt(p) ? p.props : null, N = typeof b?.id == "string" ? b.id : void 0, v = h && Wt(p) ? p.type.toLowerCase() : null, C = v != null && (v === "input" ? typeof b?.type != "string" || b.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = _ && (r != null || s || N == null && C), $ = N != null || a != null || S, E = v === "input" && typeof b?.type == "string" ? b.type.toLowerCase() : null, I = v === "textarea" || v === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), M = S && Wt(p) ? rs(
    p,
    {
      id: N ?? y,
      ...i && I && b?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          b?.["aria-describedby"],
          m
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : p, T = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: Nn.label,
      htmlFor: $ ? N ?? y : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: Nn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [
        Nn.formfield,
        Nn[c],
        i ? Nn.floating : null,
        s ? Nn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : T,
        /* @__PURE__ */ D("div", { className: Nn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Nn.start, children: t }),
          M,
          i ? T : null,
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
function zS({
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
  collapseAriaLabel: u,
  onExpand: g,
  onCollapse: m,
  children: y,
  className: p,
  visible: x = !0
}) {
  const h = lt(), [_, b] = W(c);
  if (x === !1) return null;
  const N = i ?? _, v = a ? `${h}-content` : void 0, C = () => {
    const T = !N;
    i === void 0 && b(T), T ? m?.() : g?.();
  }, S = a || e != null || n != null || t != null, $ = a ? N : !1, E = a && N && s != null, I = $ ? l ?? "Expand" : d ?? "Collapse", M = $ ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [Jn.fieldset, p].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ o("legend", { className: Jn.legend, children: a ? /* @__PURE__ */ D(at, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: Jn.toggle,
              title: I,
              "aria-label": e == null ? M : void 0,
              "aria-expanded": !$,
              "aria-controls": v,
              onClick: C,
              children: [
                /* @__PURE__ */ o(
                  Me,
                  {
                    icon: $ ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Me, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: Jn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(at, { children: [
          n != null && /* @__PURE__ */ o(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Jn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Jn.content,
            id: v,
            hidden: $,
            children: y
          }
        ),
        E ? /* @__PURE__ */ o("div", { className: Jn.summary, children: s }) : null
      ]
    }
  );
}
const Gi = "_form_abp5n_1", Vi = {
  form: Gi
}, Na = ir(null);
function Yi() {
  const e = Bn(Na);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function LS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = W({}), [d, f] = W(0), u = ne(s);
  u.current = s;
  const g = B((b) => {
    l(
      (N) => N[b.name] === b ? N : { ...N, [b.name]: b }
    );
  }, []), m = B((b) => {
    l((N) => {
      if (!(b in N)) return N;
      const v = { ...N };
      return delete v[b], v;
    });
  }, []), y = B(() => {
    const b = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (b[N.name] = v);
    }
    return b;
  }, []), p = B(() => {
    const b = y();
    f((N) => N + 1), Object.keys(b).length === 0 ? t?.(e) : n?.(b);
  }, [y, e, t, n]), x = (b) => {
    r != null && a != null || (b.preventDefault(), p());
  }, h = Oe(
    () => ({ registerField: g, unregisterField: m, submit: p, submitCount: d }),
    [g, m, p, d]
  ), _ = [Vi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Na.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: x,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const cr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", RS = (e = "Required") => (t) => cr(t) ? e : null, PS = (e = "Invalid email") => (t) => cr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, jS = (e, t = "Invalid format") => (n) => cr(n) || e.test(String(n)) ? null : t, BS = (e, t = `Minimum ${e} characters`) => (n) => cr(n) || String(n).length >= e ? null : t, FS = (e, t = `Maximum ${e} characters`) => (n) => cr(n) || String(n).length <= e ? null : t, HS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (cr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, US = (e, t = "Values do not match") => (n, r) => {
  if (cr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, WS = (e = "Required") => (t) => t === !0 ? null : e, qS = (e) => (t, n) => e(t, n);
function Xi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function KS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Yi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, f] = W(!1), u = ne(() => []);
  u.current = () => Xi(t?.validate ?? [], i), be(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), be(() => {
    a > 0 && (l(!0), f(!1));
  }, [a]);
  const g = s && !d ? u.current() : [];
  return { value: i, setValue: (y) => {
    c(y), f(!0);
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
}, lr = st(
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
], Tr = {
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
function xs(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Wr(e, t) {
  const n = xs(e), r = xs(t);
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
function vs(e, t, n) {
  const r = yo(t, e.property), a = ws(
    r,
    e.value,
    e.operator,
    n
  );
  if (!No(e)) return a;
  const i = ws(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function ws(e, t, n, r) {
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
function ss(e) {
  return "filters" in e;
}
function Oa(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (ss(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (c) => Oa(e, c, { logicalOperator: i, caseSensitivity: a })
    );
  }
  return t.operator === "Custom", vs(t, e, a);
}
function $a(e, t, n = {}) {
  return e.filter((r) => Oa(r, t, n));
}
function ac(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${ac(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function lc(e) {
  const t = (a, i) => {
    switch (a) {
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
  if (!No(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function ic(e) {
  return ss(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ic).filter(Boolean).join(` ${e.operator} `)})` : lc(e);
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
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${cc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, f) => {
    const u = typeof f == "string", g = u && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${g} ${dc[d]} ${u && r ? a(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(f))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(f))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${g} in (${f.map((m) => i(m)).join(", ")})` : `${g} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${g} in (${f.map((m) => i(m)).join(", ")}))` : `not(${g} in (${i(f)}))`;
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
  if (ss(e)) {
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
const pc = "_filter_1dvqt_1", hc = "_rows_1dvqt_9", mc = "_row_1dvqt_9", gc = "_join_1dvqt_21", yc = "_property_1dvqt_30", bc = "_operator_1dvqt_34", xc = "_value_1dvqt_38", vc = "_remove_1dvqt_42", wc = "_bar_1dvqt_58", kc = "_add_1dvqt_64", Nc = "_custom_1dvqt_78", Sc = "_summary_1dvqt_82", Oc = "_second_1dvqt_87", $c = "_secondAdd_1dvqt_91", Ec = "_addSecond_1dvqt_95", Tc = "_joinSelect_1dvqt_109", mt = {
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
  summary: Sc,
  second: Oc,
  secondAdd: $c,
  addSecond: Ec,
  joinSelect: Tc
}, Cr = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], ks = {
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
function Ns({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(at, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      lr,
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
      lr,
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
function GS({
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
  const [d, f] = W(
    () => r != null && r.length > 0 ? r.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Tr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (h, _) => {
    f(
      (b) => b.map((N) => N.id === h ? { ...N, ..._ } : N)
    );
  }, g = () => {
    const h = d[d.length - 1], _ = Math.max(0, ...d.map((N) => N.id)) + 1, b = e[0];
    f((N) => [
      ...N,
      {
        id: _,
        property: h?.property ?? b?.name ?? "",
        operator: Tr[e.find(
          (v) => v.name === (h?.property ?? b?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (h) => {
    f(
      (_) => _.length > 1 ? _.filter((b) => b.id !== h) : _
    );
  }, y = Oe(() => {
    const h = [];
    for (const _ of d) {
      if (_.property === "" || (_.value == null || _.value === "") && !Cr.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && No(_) && (N.secondOperator = v, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), h.push(N);
    }
    return h;
  }, [d]), p = Oe(() => s == null || y.length === 0 ? s : $a(s, {
    operator: t,
    filters: y
  }, {
    caseSensitivity: n
  }), [s, y, t, n]);
  be(() => {
    c != null && s != null && c(p ?? []);
  }, [p]);
  const x = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ D("div", { className: [mt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: mt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((h, _) => {
      const b = x(h.property), N = a ? [Tr[b.type ?? "string"]] : Sa, v = !Cr.includes(h.operator), C = h.secondOperator != null;
      return /* @__PURE__ */ D(os, { children: [
        /* @__PURE__ */ D("div", { className: mt.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: mt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            lr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: mt.property,
              value: h.property,
              onChange: (S) => {
                const $ = e.find(
                  (E) => E.name === S.target.value
                );
                u(h.id, {
                  property: S.target.value,
                  operator: Tr[$?.type ?? "string"],
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
            lr,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: mt.operator,
              value: h.operator,
              onChange: (S) => {
                const $ = S.target.value;
                u(
                  h.id,
                  Cr.includes($) ? {
                    operator: $,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: $ }
                );
              },
              options: N.map((S) => ({
                value: S,
                label: ks[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            Ns,
            {
              property: b,
              value: h.value,
              onChange: (S) => u(h.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: mt.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => m(h.id),
              children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? C ? /* @__PURE__ */ D(
          "div",
          {
            className: [mt.row, mt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                lr,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: mt.joinSelect,
                  value: h.logicalOperator ?? "And",
                  onChange: (S) => u(h.id, {
                    logicalOperator: S.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                lr,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: mt.operator,
                  value: h.secondOperator,
                  onChange: (S) => {
                    const $ = S.target.value;
                    u(
                      h.id,
                      Cr.includes($) ? { secondOperator: $, secondValue: void 0 } : { secondOperator: $ }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: ks[S]
                  }))
                }
              ),
              h.secondOperator == null || !Cr.includes(h.secondOperator) ? /* @__PURE__ */ o(
                Ns,
                {
                  property: b,
                  value: h.secondValue,
                  onChange: (S) => u(h.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: mt.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => u(h.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: mt.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: mt.addSecond,
            onClick: () => u(h.id, {
              secondOperator: Tr[b.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ D("div", { className: mt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: mt.add, onClick: g, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: mt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ D("span", { className: mt.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Cc = "_pager_1du31_1", Ac = "_alignLeft_1du31_10", Dc = "_alignCenter_1du31_14", Mc = "_alignRight_1du31_18", Ic = "_alignJustify_1du31_22", zc = "_summary_1du31_26", Lc = "_controls_1du31_31", Rc = "_button_1du31_37", Pc = "_active_1du31_73", jc = "_ellipsis_1du31_85", Bc = "_size_1du31_91", Ft = {
  pager: Cc,
  alignLeft: Ac,
  alignCenter: Dc,
  alignRight: Mc,
  alignJustify: Ic,
  summary: zc,
  controls: Lc,
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
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: g = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: y = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: x = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: b,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: C,
  visible: S = !0
}) {
  const $ = n ?? r, [E, I] = W($), M = n !== void 0, T = M ? $ : E, w = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, T), w), A = l ?? !0, R = c || w > 1, z = Hc(k, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      M || I(we);
      const ae = (we - 1) * t;
      b?.({
        page: we,
        skip: ae,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [M, b, w, t]
  ), F = s === "center" ? Ft.alignCenter : s === "right" ? Ft.alignRight : s === "justify" ? Ft.alignJustify : Ft.alignLeft, X = {
    count: e,
    pageNumber: k,
    pageSize: t,
    pageCount: w
  }, ie = (te) => {
    const we = Array.from(
      te.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), ae = we.indexOf(document.activeElement);
    ae !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[ae + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[ae - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return S === !1 || !R ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ft.pager, F, C].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        A && /* @__PURE__ */ o("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : Fc(f, k, w, e) }),
        /* @__PURE__ */ D(
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
                  disabled: k <= 1,
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
                  disabled: k <= 1,
                  onClick: () => j(k - 1),
                  "aria-label": y,
                  title: y,
                  children: "‹"
                }
              ),
              z.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === k ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === k ? "page" : void 0,
                    "aria-label": Ss(_, te),
                    title: Ss(h, te),
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
                  disabled: k >= w,
                  onClick: () => j(k + 1),
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
                  disabled: k >= w,
                  onClick: () => j(w),
                  "aria-label": x,
                  title: x,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ D("label", { className: Ft.size, children: [
          /* @__PURE__ */ o("span", { children: g }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (te) => N?.(Number(te.target.value)),
              "aria-label": g,
              children: a.map((te) => /* @__PURE__ */ o("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function Wo(e) {
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
const Ea = "";
function Wc(e, t, n, r, a) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((l) => l.property === s), c = (s, l, d) => {
    const f = t[l];
    if (f === void 0)
      return s.map((p) => ({ type: "row", row: p }));
    const u = i(f), g = /* @__PURE__ */ new Map(), m = [];
    s.forEach((p) => {
      const x = String(a(p, f) ?? ""), h = g.get(x);
      h ? h.push(p) : (g.set(x, [p]), m.push(x));
    });
    const y = [];
    return m.forEach((p) => {
      const x = g.get(p), h = [...d, p].join(Ea), _ = x[0], b = _ !== void 0 ? a(_, f) : void 0;
      y.push({
        type: "group",
        group: {
          key: h,
          display: bo(b, u?.format),
          property: f,
          title: u?.title ?? f,
          count: x.length,
          level: l
        }
      }), r.has(h) && y.push(...c(x, l + 1, [...d, p]));
    }), y;
  };
  return c(e, 0, []);
}
function Os(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const g = String(n(u, l) ?? ""), m = d.get(g);
      m ? m.push(u) : (d.set(g, [u]), f.push(g));
    }), f.forEach((u) => {
      const g = [...s, u].join(Ea);
      r.add(g), a(d.get(u), c + 1, [...s, u]);
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
const $s = [
  "Ascending",
  "Descending",
  null
];
function Gc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = $s[(r ? $s.indexOf(r.sortOrder) : -1) + 1] ?? null;
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
  ), a = r.length > 0 ? $a(
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
function Es(e) {
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
const Qc = "_grid_13rur_1", ed = "_toolbar_13rur_8", td = "_picker_13rur_13", nd = "_pickerButton_13rur_17", rd = "_pickerPanel_13rur_31", od = "_pickerItem_13rur_46", sd = "_groupPanel_13rur_55", ad = "_groupPanelActive_13rur_66", ld = "_groupPanelText_13rur_70", id = "_groupChip_13rur_74", cd = "_groupRemove_13rur_85", dd = "_groupRow_13rur_94", ud = "_groupCell_13rur_98", fd = "_groupToggle_13rur_104", _d = "_editRow_13rur_117", pd = "_editCell_13rur_121", hd = "_editInput_13rur_127", md = "_commandCell_13rur_137", gd = "_commandButton_13rur_144", yd = "_data_13rur_159", bd = "_table_13rur_166", xd = "_header_13rur_172", vd = "_center_13rur_185", wd = "_right_13rur_189", kd = "_sortButton_13rur_193", Nd = "_sortIndicator_13rur_211", Sd = "_sortIndex_13rur_215", Od = "_cell_13rur_226", $d = "_clickable_13rur_241", Ed = "_frozen_13rur_249", Td = "_selected_13rur_255", Cd = "_resizeHandle_13rur_263", Ad = "_filterCell_13rur_281", Dd = "_filterSelect_13rur_290", Md = "_filterInput_13rur_300", Id = "_empty_13rur_311", zd = "_loading_13rur_317", Ld = "_visuallyHidden_13rur_331", Rd = "_virtualScroller_13rur_340", Pd = "_spacerRow_13rur_345", jd = "_footerRow_13rur_350", Bd = "_footerCell_13rur_354", Fd = "_footerValue_13rur_361", Se = {
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
  sortIndex: Sd,
  cell: Od,
  clickable: $d,
  frozen: Ed,
  selected: Td,
  resizeHandle: Cd,
  filterCell: Ad,
  filterSelect: Dd,
  filterInput: Md,
  empty: Id,
  loading: zd,
  visuallyHidden: Ld,
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
function VS({
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
  pageSizeOptions: u,
  pageNumbersCount: g = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: y = !0,
  showPageSizeSelector: p = !0,
  selectionMode: x = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: b = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: C = !1,
  allowGrouping: S = !1,
  groupPanelText: $ = "Drag a column header here to group",
  groupExpanded: E = !0,
  aggregates: I,
  showExportButton: M = !1,
  exportFileName: T = "grid-data",
  serverMode: w = !1,
  totalCount: k,
  onRangeChange: A,
  virtualize: R = !1,
  virtualRowHeight: z = 40,
  virtualHeight: j = 480,
  editMode: F = "None",
  allowRowCreate: X = !1,
  onRowUpdate: ie,
  onRowCreate: te,
  onRowDelete: we,
  isLoading: ae = !1,
  empty: _e = "No records found",
  ariaLabel: K,
  className: me,
  onRowClick: ue
}) {
  const xe = K != null ? `${K} ` : "", [pe, De] = W([]), [G, $e] = W(
    /* @__PURE__ */ new Map()
  ), [re, Ae] = W(1), [fe, Fe] = W(f), [Ge, Je] = W(
    () => e.map((H, U) => to(H, U))
  ), [At, it] = W(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? to(H, U) : "").filter(Boolean)
    )
  ), [bt, Z] = W({}), [L, Y] = W(!1), [Q, ge] = W([]), [le, Ee] = W(
    null
  ), [je, Ze] = W(null), [Qe, nt] = W({}), [Xt, oe] = W(0), [Le, Nt] = W(j), Rt = ne(null), xt = ne(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, ye) => H.set(to(U, ye), U)), H;
  }, [e]), qe = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => qc(qe, bt),
    [qe, bt]
  ), $t = F !== "None" || we != null || X, ct = Oe(() => {
    if (w) {
      const H = k ?? t.length, U = Math.max(1, Math.ceil(H / fe));
      return {
        items: [...t],
        filtered: [...t],
        total: H,
        pageCount: U,
        pageNumber: re,
        pageSize: fe,
        sorts: pe,
        filters: G
      };
    }
    return Xc(
      t,
      {
        sorts: pe,
        filters: G,
        pageNumber: re,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: d ? fe : Number.MAX_SAFE_INTEGER
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
    pe,
    G,
    re,
    fe,
    l,
    s,
    e,
    w,
    k,
    d
  ]), V = ne(A);
  be(() => {
    V.current = A;
  });
  const he = Oe(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? Es(
        e.find((ye) => ye.property === H)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [G, e]
  );
  be(() => {
    !w || V.current == null || V.current({
      start: (re - 1) * fe,
      count: fe,
      pageNumber: re,
      pageSize: fe,
      sorts: pe,
      filters: he,
      logicalOperator: l
    });
  }, [
    w,
    re,
    fe,
    pe,
    he,
    l
  ]);
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => le || (E ? Os(ct.items, Q, or) : /* @__PURE__ */ new Set()), [le, E, ct.items, Q]), Pt = Oe(
    () => Wc(ct.items, Q, e, Ye, or),
    [ct.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? qe.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : qe,
    [qe, Q, Ve]
  ), q = (H) => {
    H !== "" && De(Gc(pe, H, { multi: a }));
  }, ee = (H, U) => {
    $e((ye) => {
      const ve = new Map(ye);
      return ve.set(H, U), ve;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (x === "None") return;
    const U = n(H), ye = h ?? [];
    let ve;
    x === "Single" ? ve = ye.length === 1 && ye[0] === U ? [] : [U] : ve = ye.includes(U) ? ye.filter((et) => et !== U) : [...ye, U], _?.(ve);
  }, ke = (H) => {
    ue?.(H);
  }, Ce = (H, U, ye) => {
    Rt.current = { key: H, startX: U, startWidth: ye };
  }, Ke = (H) => {
    const U = Rt.current;
    if (!U) return;
    const ye = H - U.startX, ve = Math.max(48, U.startWidth + ye);
    Z((et) => ({ ...et, [U.key]: `${ve}px` }));
  }, Be = () => {
    Rt.current = null;
  }, dt = (H) => {
    xt.current = H;
  }, rt = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Je((ye) => {
      const ve = [...ye], et = ve.indexOf(U), Dt = ve.indexOf(H);
      return et < 0 || Dt < 0 ? ye : (ve.splice(et, 1), ve.splice(Dt, 0, U), ve);
    });
  }, Et = (H) => {
    it((U) => {
      const ye = new Set(U);
      return ye.has(H) ? ye.delete(H) : ye.add(H), ye;
    });
  }, ht = () => {
    const H = xt.current;
    if (xt.current = null, !H || !S) return;
    const ye = Ie.get(H)?.property;
    ye && (ge(
      (ve) => ve.includes(ye) ? ve : [...ve, ye]
    ), Ee(null));
  }, ze = (H) => {
    ge((U) => U.filter((ye) => ye !== H)), Ee(null);
  }, Tt = (H) => {
    Ee((U) => {
      const ye = U ?? (E ? Os(ct.items, Q, or) : /* @__PURE__ */ new Set()), ve = new Set(ye);
      return ve.has(H) ? ve.delete(H) : ve.add(H), ve;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((ye) => {
      ye.property && (U[ye.property] = or(H, ye.property));
    }), nt(U), Ze(String(n(H)));
  }, pn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), nt(H), Ze("__new__");
  }, Cn = () => {
    Ze(null), nt({});
  }, Fn = (H) => {
    if (je === "__new__") {
      const U = Object.fromEntries(
        e.filter((ye) => ye.property).map((ye) => [ye.property, Qe[ye.property]])
      );
      te?.(U);
    } else if (H != null) {
      const U = { ...H, ...Qe };
      ie?.(H, U);
    }
    Cn();
  }, kn = d && (m === "Top" || m === "TopAndBottom"), Zr = d && (m === "Bottom" || m === "TopAndBottom"), So = c && e.some((H) => Ts(H, c)), Oo = (H, U, ye) => H.render ? H.render(U, { index: 0 }) : bo(or(U, H.property), H.format), $o = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, hn = w ? t : ct.filtered, Jr = () => {
    const H = Jc(
      hn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), ye = URL.createObjectURL(U), ve = document.createElement("a");
    ve.href = ye, ve.download = `${T}.csv`, document.body.appendChild(ve), ve.click(), ve.remove(), URL.revokeObjectURL(ye);
  }, mn = Pt.length, jt = Oe(() => {
    if (!R || mn === 0)
      return { start: 0, end: mn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / z) - H
    ), ye = Math.ceil(Le / z) + H * 2, ve = Math.min(mn, U + ye), et = U * z, Dt = Math.max(0, (mn - ve) * z);
    return { start: U, end: ve, top: et, bottom: Dt };
  }, [R, mn, Xt, z, Le]), Nr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Se.grid, me].filter(Boolean).join(" "), children: [
    kn && /* @__PURE__ */ o(
      Wo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: u,
        pageNumbersCount: g,
        showSummary: y,
        showPageSizeSelector: p,
        ariaLabel: `${xe}${Zr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || b || M) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
      S && /* @__PURE__ */ o(
        "div",
        {
          className: [
            Se.groupPanel,
            Q.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: S ? (H) => H.preventDefault() : void 0,
          onDrop: S ? ht : void 0,
          children: Q.length > 0 ? Q.map((H) => {
            const U = e.find((ye) => ye.property === H)?.title ?? H;
            return /* @__PURE__ */ D("span", { className: Se.groupChip, children: [
              U,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Se.groupRemove,
                  onClick: () => ze(H),
                  "aria-label": `Remove group by ${U}`,
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              )
            ] }, H);
          }) : /* @__PURE__ */ o("span", { className: Se.groupPanelText, children: $ })
        }
      ),
      X && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: pn,
          children: "Add row"
        }
      ),
      b && /* @__PURE__ */ D("div", { className: Se.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Se.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": L,
            onClick: () => Y((H) => !H),
            children: N
          }
        ),
        L && /* @__PURE__ */ o(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const ye = to(H, U);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: At.has(ye),
                    onChange: () => Et(ye)
                  }
                ),
                H.title ?? H.property
              ] }, ye);
            })
          }
        )
      ] }),
      M && /* @__PURE__ */ o(
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
        className: [Se.data, R ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: R ? { maxHeight: j } : void 0,
        onScroll: R ? (H) => {
          oe(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (R ? mn : ct.total) + 1,
              "aria-label": K,
              "aria-busy": ae || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
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
                  $t && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const ye = Ud(U, r), ve = pe.find((wt) => wt.property === U.property), et = ve ? pe.indexOf(ve) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": ye && ve ? Hd[ve.sortOrder] : "none",
                          className: [
                            Se.header,
                            Dt === "center" ? Se.center : "",
                            Dt === "right" ? Se.right : "",
                            U.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: C || S || void 0,
                          onDragStart: C || S ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), dt(H);
                          } : void 0,
                          onDragOver: C ? (wt) => wt.preventDefault() : void 0,
                          onDrop: C ? () => rt(H) : void 0,
                          children: [
                            ye ? /* @__PURE__ */ D(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => U.property != null && q(U.property),
                                "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  ve && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ve.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  et > 1 && i && /* @__PURE__ */ o("span", { className: Se.sortIndex, children: et })
                                ]
                              }
                            ) : U.title ?? U.property,
                            v && /* @__PURE__ */ o(
                              "span",
                              {
                                className: Se.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${U.title ?? U.property}`,
                                onMouseDown: (wt) => {
                                  wt.preventDefault(), wt.stopPropagation();
                                  const gn = bt[H] ?? U.width, Ct = gn ? parseFloat(gn) : 96;
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
                    $t && /* @__PURE__ */ o("th", { className: Se.header, scope: "col", children: "Actions" })
                  ] }),
                  So && /* @__PURE__ */ o("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!Ts(U, c))
                      return /* @__PURE__ */ o("td", { className: Se.filterCell }, H);
                    const ye = G.get(U.property ?? "");
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
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${U.property}`,
                          className: Se.filterSelect,
                          value: ye?.operator ?? Es(U.type ?? "string"),
                          onChange: (ve) => ee(U.property ?? "", {
                            ...ye,
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
                          className: Se.filterInput,
                          value: ye?.value ?? "",
                          onChange: (ve) => ee(U.property ?? "", {
                            ...ye,
                            value: ve.target.value
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
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o("td", { className: Se.editCell, children: U.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Se.editInput,
                        type: U.type === "number" ? "number" : U.type === "boolean" ? "checkbox" : "text",
                        checked: U.type === "boolean" ? !!Qe[U.property] : void 0,
                        value: U.type === "boolean" ? void 0 : String(Qe[U.property] ?? ""),
                        onChange: (ye) => nt((ve) => ({
                          ...ve,
                          [U.property]: U.type === "boolean" ? ye.target.checked : ye.target.value
                        })),
                        "aria-label": `${U.title ?? U.property} (new)`
                      }
                    ) }, H)),
                    $t && /* @__PURE__ */ D("td", { className: Se.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: () => Fn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: Cn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  jt.top > 0 && /* @__PURE__ */ o("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Nr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const ye = jt.start + U, ve = R ? ye + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": ve,
                          children: /* @__PURE__ */ o("td", { colSpan: Nr, className: Se.groupCell, children: /* @__PURE__ */ D(
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
                    const et = H.row, Dt = n(et), wt = (h ?? []).includes(Dt), gn = je != null && je === String(Dt);
                    return /* @__PURE__ */ D(
                      "tr",
                      {
                        "aria-rowindex": ve,
                        className: [
                          ue || x !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          gn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": x !== "None" ? wt : void 0,
                        onClick: ue || x !== "None" ? (Ct) => {
                          Wd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: $o(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: gn && gt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((Eo) => ({
                                    ...Eo,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : Oo(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ o("td", { className: Se.commandCell, children: gn ? /* @__PURE__ */ D(at, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Fn(et),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: Cn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ D(at, { children: [
                            F !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Zt(et),
                                children: "Edit"
                              }
                            ),
                            we && /* @__PURE__ */ o(
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
                  jt.bottom > 0 && /* @__PURE__ */ o("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Nr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                I && I.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const ye = I.filter(
                      (ve) => ve.property === U.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Se.footerCell,
                          U.align === "right" ? Se.right : "",
                          U.align === "center" ? Se.center : ""
                        ].filter(Boolean).join(" "),
                        children: ye.map((ve, et) => /* @__PURE__ */ D(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              ve.title ? `${ve.title}: ` : "",
                              bo(
                                Zc(hn, ve, or),
                                ve.format
                              )
                            ]
                          },
                          `${ve.property}-${ve.type}-${et}`
                        ))
                      },
                      H
                    );
                  }),
                  $t && /* @__PURE__ */ o("td", { className: Se.footerCell })
                ] }) })
              ]
            }
          ),
          ct.items.length === 0 && !ae && /* @__PURE__ */ o("div", { className: Se.empty, children: _e }),
          ae && /* @__PURE__ */ o("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Zr && /* @__PURE__ */ o(
      Wo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: u,
        pageNumbersCount: g,
        showSummary: y,
        showPageSizeSelector: p,
        ariaLabel: `${xe}${kn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const qd = "_wrap_avqds_1", Kd = "_grid_avqds_7", Gd = "_stacked_avqds_13", Vd = "_item_avqds_19", Yd = "_empty_avqds_25", Ar = {
  wrap: qd,
  grid: Kd,
  stacked: Gd,
  item: Vd,
  empty: Yd
};
function YS({
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
  ariaLabel: u = "Data list"
}) {
  const [g, m] = W(1), [y, p] = W(t), x = e.length, h = Math.max(1, Math.ceil(x / y)), _ = Math.min(Math.max(1, g), h), b = Oe(() => {
    const v = (_ - 1) * y;
    return e.slice(v, v + y);
  }, [e, _, y]), N = r ? Ar.grid : Ar.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ar.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        l && s != null ? s : x === 0 ? c ?? /* @__PURE__ */ o("div", { className: Ar.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: b.map((v, C) => /* @__PURE__ */ o("div", { className: Ar.item, children: a ? a(v, C) : String(v) }, C)) }),
        /* @__PURE__ */ o(
          Wo,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: y,
            count: x,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: m,
            onPageSizeChange: (v) => {
              p(v), m(1);
            }
          }
        )
      ]
    }
  );
}
const Xd = "_label_1qfpw_1", Zd = {
  label: Xd
}, XS = st(function({ className: t, children: n, ...r }, a) {
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
}, as = st(
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
), no = as, su = "_checkbox_1bb6c_1", au = {
  checkbox: su
}, lu = st(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = ne(null);
    return be(() => {
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
}, ZS = st(function({ className: t, ...n }, r) {
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
function JS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = lt(), l = ne(null), d = ne(null), f = ne(() => {
  }), [u, g] = W(!1), [m, y] = W(null), p = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, x = () => {
    p(), l.current = window.setTimeout(() => {
      l.current = null, g(!0);
    }, r);
  }, h = () => {
    p(), g(!1);
  };
  if (be(() => () => p(), []), be(() => {
    if (!u || a == null) return;
    const b = window.setTimeout(() => g(!1), a);
    return () => window.clearTimeout(b);
  }, [u, a]), be(() => {
    if (i || !u) return;
    const b = (N) => {
      N.key === "Escape" && h();
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [i, u]), be(() => {
    if (!i) return;
    let b = null, N = null;
    const v = () => {
      b !== null && (window.clearTimeout(b), b = null);
    }, C = () => {
      v(), N = null, y(null);
    };
    f.current = C;
    const S = (w) => {
      v(), N = w, b = window.setTimeout(() => {
        b = null, y(w);
      }, r);
    }, $ = (w) => w instanceof Element ? w.closest(i) : null, E = (w) => {
      const k = $(w.target);
      !k || k === N || S(k);
    }, I = (w) => {
      const k = $(w.target);
      if (!k || k !== N) return;
      const A = w.relatedTarget;
      A instanceof Element && k.contains(A) || C();
    }, M = (w) => {
      w.key === "Escape" && C();
    }, T = () => C();
    return document.addEventListener("mouseover", E), document.addEventListener("mouseout", I), document.addEventListener("focusin", E), document.addEventListener("focusout", I), document.addEventListener("keydown", M), document.addEventListener("scroll", T, !0), window.addEventListener("resize", T), () => {
      v(), document.removeEventListener("mouseover", E), document.removeEventListener("mouseout", I), document.removeEventListener("focusin", E), document.removeEventListener("focusout", I), document.removeEventListener("keydown", M), document.removeEventListener("scroll", T, !0), window.removeEventListener("resize", T), N = null, y(null);
    };
  }, [i, r]), be(() => {
    if (!i || m === null || a == null) return;
    const b = window.setTimeout(() => f.current(), a);
    return () => window.clearTimeout(b);
  }, [i, m, a]), Uo(() => {
    const b = m;
    if (!b) return;
    const N = b.getAttribute("aria-describedby");
    return b.setAttribute(
      "aria-describedby",
      [N, s].filter(Boolean).join(" ")
    ), () => {
      N == null ? b.removeAttribute("aria-describedby") : b.setAttribute("aria-describedby", N);
    };
  }, [m, s]), Uo(() => {
    const b = d.current, N = m;
    !b || !N || Object.assign(
      b.style,
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
  const _ = Wt(t) ? rs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? s : null
    ].filter((b) => typeof b == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: x,
        onMouseLeave: h,
        onFocus: x,
        onBlur: h,
        children: [
          _,
          u && /* @__PURE__ */ D(
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
const yu = "_dialog_1t7pw_1", bu = "_sm_1t7pw_104", xu = "_resizable_1t7pw_110", vu = "_md_1t7pw_113", wu = "_lg_1t7pw_117", ku = "_header_1t7pw_121", Nu = "_title_1t7pw_132", Su = "_description_1t7pw_139", Ou = "_close_1t7pw_146", $u = "_body_1t7pw_176", Eu = "_footer_1t7pw_188", yn = {
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
  description: Su,
  close: Ou,
  body: $u,
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
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: g = null,
  showCloseButton: m = !0,
  showMask: y = !0,
  canClose: p,
  className: x
}) {
  const h = ne(null), _ = lt(), b = lt(), N = ne(t);
  be(() => {
    N.current = t;
  });
  const v = ne(p);
  be(() => {
    v.current = p;
  });
  const C = ne(f);
  be(() => {
    C.current = f;
  });
  const S = ne(!1), $ = ne(!1), E = B(() => {
    if (S.current) return;
    const T = v.current?.();
    if (T instanceof Promise) {
      T.then((w) => {
        w && !S.current && (S.current = !0, N.current());
      });
      return;
    }
    T !== !1 && (S.current = !0, N.current());
  }, []), I = B(() => {
    if ($.current) {
      $.current = !1;
      return;
    }
    N.current();
  }, []), M = B(
    (T) => {
      if (T.key !== "Tab" || !h.current) return;
      const w = Array.from(
        h.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (A) => A.offsetWidth > 0 || A.offsetHeight > 0 || A === document.activeElement
      );
      if (w.length === 0) {
        T.preventDefault();
        return;
      }
      const k = w.indexOf(document.activeElement);
      if (T.shiftKey) {
        if (k <= 0) {
          T.preventDefault();
          const A = w[w.length - 1];
          A && A.focus();
        }
      } else if (k === -1 || k === w.length - 1) {
        T.preventDefault();
        const A = w[0];
        A && A.focus();
      }
    },
    []
  );
  return be(() => {
    const T = h.current;
    if (T)
      if (e && !T.open) {
        const w = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        T.showModal(), (T.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? T.querySelector("button"))?.focus();
        const A = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const R = (z) => {
          z.preventDefault(), C.current && E();
        };
        return T.addEventListener("cancel", R), () => {
          T.removeEventListener("cancel", R), document.body.style.overflow = A, w?.focus({ preventScroll: !0 });
        };
      } else !e && T.open && ($.current = S.current, S.current = !1, T.close());
  }, [e, E]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: h,
      className: [
        yn.dialog,
        yn[c],
        u ? yn.resizable : null,
        g ? yn[`side-${g}`] : null,
        y === !1 ? yn["no-mask"] : null,
        x
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: I,
      onClick: (T) => {
        T.target === h.current && d && E();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? b : void 0,
      onKeyDown: M,
      children: [
        n && /* @__PURE__ */ D("header", { className: yn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ o("h2", { id: _, className: yn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: b, className: yn.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: yn.close,
              onClick: () => {
                E();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: yn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: yn.footer, children: i })
      ]
    }
  );
}
const Tu = "_typography_1jy8x_1", Cu = "_h1_1jy8x_39", Au = "_h2_1jy8x_45", Du = "_h3_1jy8x_51", Mu = "_h4_1jy8x_57", Iu = "_h5_1jy8x_63", zu = "_h6_1jy8x_69", Lu = "_button_1jy8x_99", Ru = "_caption_1jy8x_106", Pu = "_overline_1jy8x_112", Mo = {
  typography: Tu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Cu,
  h2: Au,
  h3: Du,
  h4: Mu,
  h5: Iu,
  h6: zu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Lu,
  caption: Ru,
  overline: Pu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, ju = {
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
}, Bu = {
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
}, Fu = {
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
}, Hu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ca = st(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: a,
  visible: i = !0,
  className: c,
  children: s,
  ...l
}, d) {
  if (i === !1) return null;
  const f = n === "Auto" ? ju[t] : Fu[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: d,
      className: [
        Mo.typography,
        Mo[Bu[t]],
        r ? Mo[Hu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Aa = ir(null);
function QS() {
  const e = Bn(Aa);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function eO({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = ne(0), i = () => (a.current += 1, a.current), c = ne([]);
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
        n((x) => [
          ...x,
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
  function f(g) {
    d && (d.kind === "confirm" ? d.resolve(!!g) : d.kind === "alert" ? d.resolve() : d.resolve(g), n((m) => m.slice(1)));
  }
  const u = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ D(Aa.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ta,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: d?.kind === "custom" ? u?.title ?? "Dialog" : d?.options.title ?? (d?.kind === "confirm" ? "Confirm" : "Alert"),
        description: u?.description,
        size: d?.kind === "custom" ? u?.size : d?.options.size,
        width: u?.width,
        height: u?.height,
        side: u?.side ?? null,
        showCloseButton: u?.showCloseButton,
        showMask: u?.showMask,
        closeOnOverlayClick: u?.closeOnOverlayClick,
        closeOnEsc: u?.closeOnEsc,
        className: u?.className,
        footer: d?.kind === "confirm" ? /* @__PURE__ */ D(at, { children: [
          /* @__PURE__ */ o(ln, { variant: "text", onClick: () => f(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            ln,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => f(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ o(ln, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(ln, { onClick: () => f(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? u?.content : d?.options.message != null && /* @__PURE__ */ o(Ca, { textStyle: "Body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Uu = "_viewport_11t1p_1", Wu = "_topLeft_11t1p_13", qu = "_topRight_11t1p_20", Ku = "_bottomLeft_11t1p_25", Gu = "_toast_11t1p_30", Vu = "_leaving_11t1p_61", Yu = "_info_11t1p_77", Xu = "_success_11t1p_86", Zu = "_warning_11t1p_95", Ju = "_danger_11t1p_104", Qu = "_content_11t1p_113", ef = "_title_11t1p_118", tf = "_description_11t1p_141", nf = "_dismiss_11t1p_148", rf = "_actions_11t1p_169", of = "_action_11t1p_169", sf = "_cancel_11t1p_177", af = "_progress_11t1p_215", en = {
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
}, Da = ir(null);
function tO() {
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
function nO({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = W([]), [s, l] = W(!1), d = ne([]), f = ne(/* @__PURE__ */ new Map()), u = ne(!1), g = ne(0), m = (k) => {
    u.current = k, l(k);
  }, y = B((k) => {
    const A = f.current.get(k);
    A && (window.clearTimeout(A.timeoutId), A.remaining = Math.max(
      0,
      A.remaining - (Date.now() - A.startedAt)
    ));
  }, []), p = B((k) => {
    const A = f.current.get(k);
    A && (window.clearTimeout(A.timeoutId), f.current.delete(k));
  }, []), x = B(
    (k) => {
      p(k), c((A) => {
        const R = A.filter((z) => z.id !== k);
        return d.current = R, R;
      });
    },
    [p]
  ), h = B(
    (k) => {
      const A = d.current.find((R) => R.id === k);
      !A || A.leaving || (A.onAutoClose?.(), x(k));
    },
    [x]
  ), _ = B(
    (k) => {
      const A = f.current.get(k);
      !A || A.remaining <= 0 || (A.startedAt = Date.now(), A.timeoutId = window.setTimeout(() => h(k), A.remaining));
    },
    [h]
  ), b = B(() => {
    u.current || f.current.forEach((k, A) => y(A)), m(!0);
  }, [y]), N = B(() => {
    f.current.forEach((k, A) => _(A)), m(!1);
  }, [_]);
  be(() => {
    if (!r) return;
    const k = () => {
      document.hidden ? b() : N();
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, [r, b, N]);
  const v = B(
    (k) => {
      const A = d.current.find((R) => R.id === k);
      !A || A.leaving || (A.onDismiss?.(), c((R) => {
        const z = R.map(
          (j) => j.id === k ? { ...j, leaving: !0 } : j
        );
        return d.current = z, z;
      }), window.setTimeout(() => x(k), lf));
    },
    [x]
  ), C = B(
    (k) => {
      if (k.durationMs <= 0) return;
      const A = {
        remaining: k.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(k.id, A), u.current || _(k.id);
    },
    [_]
  ), S = B(
    (k) => {
      const A = d.current.find((z) => z.id === k.id), R = {
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
        const j = A ? z.map(
          (F) => F.id === R.id ? { ...R, leaving: !1 } : F
        ) : [...z, R];
        return d.current = j, j;
      }), A && p(R.id), C(R);
    },
    [t, n, C, p]
  ), $ = B(
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
  ), E = B(
    (k) => (A, R) => $({ severity: k, summary: A, detail: R }),
    [$]
  ), I = Oe(
    () => ({
      toast: S,
      notify: $,
      notifyInfo: E("info"),
      notifySuccess: E("success"),
      notifyWarning: E("warning"),
      notifyError: E("danger")
    }),
    [S, $, E]
  ), M = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((k) => k.position)])),
    [n, i]
  ), T = r ? b : void 0, w = r ? N : void 0;
  return /* @__PURE__ */ D(Da.Provider, { value: I, children: [
    e,
    M.map((k) => /* @__PURE__ */ o(
      "div",
      {
        className: [en.viewport, en[cf[k]], a].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: T,
        onMouseLeave: w,
        children: i.filter((A) => A.position === k).map((A) => /* @__PURE__ */ D(
          "div",
          {
            role: A.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
            "data-clickable": A.closeOnClick ? "true" : "false",
            className: [
              en.toast,
              en[A.severity],
              A.leaving ? en.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: A.click || A.closeOnClick ? () => {
              A.click?.(A.payload), A.closeOnClick && v(A.id);
            } : void 0,
            children: [
              /* @__PURE__ */ D("div", { className: en.content, children: [
                /* @__PURE__ */ o("div", { className: en.title, children: A.title }),
                A.description && /* @__PURE__ */ o("div", { className: en.description, children: A.description }),
                (A.action || A.cancel) && /* @__PURE__ */ D("div", { className: en.actions, children: [
                  A.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.action,
                      onClick: () => {
                        A.action?.onClick?.(), v(A.id);
                      },
                      children: A.action.label
                    }
                  ),
                  A.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.cancel,
                      onClick: () => {
                        A.cancel?.onClick?.(), v(A.id);
                      },
                      children: A.cancel.label
                    }
                  )
                ] })
              ] }),
              A.dismissible && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: en.dismiss,
                  onClick: () => v(A.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              ),
              A.showProgress && A.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: en.progress,
                  style: { animationDuration: `${A.durationMs}ms` }
                }
              )
            ]
          },
          A.id
        ))
      },
      k
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
function rO({
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
  const d = n !== void 0, [f, u] = W(
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
  ), g = d && n ? n : f, m = ne(null), y = ne(null), p = B(
    ($) => {
      const E = Cs($.start, $.end, e, t, c);
      d || u(E), a?.(E);
    },
    [d, e, t, c, a]
  ), x = B(
    ($) => {
      const E = y.current;
      if (!E) return e;
      const I = E.getBoundingClientRect(), M = I.width > 0 ? ($ - I.left) / I.width : 0;
      return e + Math.max(0, Math.min(1, M)) * (t - e || 1);
    },
    [e, t]
  ), h = B(
    ($) => (Math.max(e, Math.min(t, $)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  be(() => {
    const $ = (I) => {
      const M = m.current;
      if (!M) return;
      const T = x(I.clientX);
      if (M.mode === "start") p({ start: T, end: g.end });
      else if (M.mode === "end") p({ start: g.start, end: T });
      else {
        const w = g.end - g.start, k = T - M.grabOffset;
        p({ start: k, end: k + w });
      }
    }, E = () => {
      m.current = null;
    };
    return document.addEventListener("pointermove", $), document.addEventListener("pointerup", E), () => {
      document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", E);
    };
  }, [p, x, g]);
  const _ = ($) => (E) => {
    E.preventDefault(), E.target.focus?.(), m.current = { mode: $, grabOffset: 0 };
  }, b = ($) => {
    const E = x($.clientX);
    if (E >= g.start && E <= g.end)
      m.current = { mode: "pan", grabOffset: E - g.start };
    else {
      const I = Math.abs(E - g.start), M = Math.abs(E - g.end);
      I <= M ? p({ start: E, end: g.end }) : p({ start: g.start, end: E });
    }
  }, N = (t - e || 1) / 100, v = ($) => (E) => {
    const I = E.shiftKey ? N * 10 : N;
    E.key === "ArrowLeft" || E.key === "ArrowDown" ? (E.preventDefault(), p(
      $ === "start" ? { start: g.start - I, end: g.end } : { start: g.start, end: g.end - I }
    )) : E.key === "ArrowRight" || E.key === "ArrowUp" ? (E.preventDefault(), p(
      $ === "start" ? { start: g.start + I, end: g.end } : { start: g.start, end: g.end + I }
    )) : E.key === "Home" ? (E.preventDefault(), p(
      $ === "start" ? { start: e, end: g.end } : { start: g.start, end: t }
    )) : E.key === "End" && (E.preventDefault(), p(
      $ === "start" ? { start: g.end - c, end: g.end } : { start: g.start, end: t }
    ));
  }, C = h(g.start), S = Math.max(0, h(g.end) - C);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ D("div", { ref: y, className: Wn.track, onPointerDown: b, children: [
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
                  const I = E / (i.length - 1) * 100, M = Math.max(...i), T = Math.min(...i), w = M === T ? 12 : 22 - ($ - T) / (M - T) * 20;
                  return `${I},${w}`;
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
            style: { left: `${C}%`, width: `${S}%` }
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
            style: { left: `${C + S}%` },
            onPointerDown: _("end"),
            onKeyDown: v("end")
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
function Ms(e, t, n, r, a) {
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
function oO({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: a,
  colorStops: i,
  size: c = 200,
  showValue: s = !0,
  formatValue: l = (u) => String(Math.round(u * 100) / 100),
  ariaLabel: d = "Gauge",
  className: f
}) {
  const u = n - t || 1, g = Math.max(0, Math.min(1, (e - t) / u)), m = "var(--dx-border-color)", y = a ?? "var(--dx-primary-color)", p = 100, x = 96, h = 80, _ = oo + As * g;
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
              d: Ms(p, x, h, oo, oo + As),
              fill: "none",
              stroke: m,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          g > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Ms(p, x, h, oo, _),
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
function Is(e, t, n, r, a) {
  const [i, c] = vr(e, t, n, r), [s, l] = vr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function bf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function sO({
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
  formatValue: u = (y) => String(Math.round(y * 100) / 100),
  ariaLabel: g = "Gauge",
  className: m
}) {
  const y = n - t || 1, p = (M) => Math.max(0, Math.min(1, (M - t) / y)), h = a - r >= 360 ? r + 359.999 : a, _ = (M) => r + (h - r) * p(M), b = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: v = 8, showLabels: C = !0 } = i, S = 100, $ = 100, E = 78, I = (M, T, w) => {
    const [k, A] = vr(S, $, E - 14, _(M));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: S,
        y1: $,
        x2: k,
        y2: A,
        stroke: T,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, w);
  };
  return /* @__PURE__ */ D(
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
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Is(S, $, E, r, h),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((M, T) => /* @__PURE__ */ o(
            "path",
            {
              d: Is(
                S,
                $,
                E,
                _(Math.max(t, M.from)),
                _(Math.min(n, M.to))
              ),
              fill: "none",
              stroke: M.color,
              strokeWidth: 12
            },
            `range-${T}`
          )),
          v > 0 && bf(t, n, v).map((M, T) => {
            const [w, k] = vr(S, $, E - 10, _(M)), [A, R] = vr(S, $, E - 16, _(M)), [z, j] = vr(S, $, E - 26, _(M));
            return /* @__PURE__ */ D("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: w,
                  y1: k,
                  x2: A,
                  y2: R,
                  stroke: N,
                  strokeWidth: 1.5
                }
              ),
              C && /* @__PURE__ */ o(
                "text",
                {
                  x: z,
                  y: j + 4,
                  textAnchor: "middle",
                  className: Rn.tick,
                  children: M
                }
              )
            ] }, T);
          }),
          I(e, b, "value"),
          s.map(
            (M, T) => I(M.value, M.color ?? b, `extra-${T}`)
          ),
          /* @__PURE__ */ o("circle", { cx: S, cy: $, r: 7, fill: b })
        ] }),
        f && /* @__PURE__ */ o("div", { className: Rn.value, children: u(e) })
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
function aO({
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
  formatValue: f = (m) => String(Math.round(m * 100) / 100),
  ariaLabel: u = "Gauge",
  className: g
}) {
  const m = n - t || 1, y = r === "vertical", p = s ?? (y ? 220 : 280), { count: x = 5, showLabels: h = !0 } = a, _ = c ?? "var(--dx-primary-color)", b = "var(--dx-border-color)", N = 8, v = (I) => {
    const T = (Math.max(t, Math.min(n, I)) - t) / m;
    return y ? p - N - T * (p - N * 2) : N + T * (p - N * 2);
  }, C = () => x <= 0 ? null : xf(t, n, x).map((I, M) => {
    const T = v(I);
    return /* @__PURE__ */ D("g", { children: [
      y ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: T,
          x2: 0,
          y2: T,
          stroke: b,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: T,
          y1: -6,
          x2: T,
          y2: 0,
          stroke: b,
          strokeWidth: 1.5
        }
      ),
      h && (y ? /* @__PURE__ */ o("text", { x: -10, y: T + 4, textAnchor: "end", className: Rn.tick, children: I }) : /* @__PURE__ */ o("text", { x: T, y: -10, textAnchor: "middle", className: Rn.tick, children: I }))
    ] }, M);
  }), S = () => i.map((I, M) => {
    const T = v(I.from), w = v(I.to), k = Math.min(T, w), A = Math.abs(w - T);
    return y ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: k,
        width: l,
        height: A,
        fill: I.color,
        opacity: 0.35
      },
      M
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: k,
        y: -l / 2,
        width: A,
        height: l,
        fill: I.color,
        opacity: 0.35
      },
      M
    );
  }), $ = v(e), E = /* @__PURE__ */ D("g", { children: [
    S(),
    y ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: N,
        width: l,
        height: p - N * 2,
        rx: l / 2,
        fill: "none",
        stroke: b,
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
        stroke: b,
        strokeWidth: 2
      }
    ),
    y ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: $,
        width: l,
        height: p - N - $,
        rx: l / 2,
        fill: _
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: Math.max(0, $ - N),
        height: l,
        rx: l / 2,
        fill: _
      }
    ),
    y ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${$} L ${-l / 2 - 2} ${$ - 5} L ${-l / 2 - 2} ${$ + 5} Z`,
        fill: _
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${$} ${-l / 2 - 10} L ${$ - 5} ${-l / 2 - 2} L ${$ + 5} ${-l / 2 - 2} Z`,
        fill: _
      }
    ),
    C()
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": u,
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
            children: E
          }
        ) : /* @__PURE__ */ o(
          "svg",
          {
            width: p,
            height: l + 48,
            viewBox: `0 -24 ${p} ${l + 56}`,
            "aria-hidden": "true",
            children: E
          }
        ),
        d && /* @__PURE__ */ o("div", { className: Rn.value, children: f(e) })
      ]
    }
  );
}
const vf = "_chat_1apnf_3", wf = "_messages_1apnf_9", kf = "_message_1apnf_9", Nf = "_user_1apnf_29", Sf = "_assistant_1apnf_35", Of = "_system_1apnf_40", $f = "_typing_1apnf_46", Ef = "_inputRow_1apnf_51", fr = {
  chat: vf,
  messages: wf,
  message: kf,
  user: Nf,
  assistant: Sf,
  system: Of,
  typing: $f,
  inputRow: Ef
};
function lO({
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
  const [u, g] = W(""), m = l || d, y = u.trim().length > 0 && !m, p = (h) => {
    h.preventDefault();
    const _ = u.trim();
    !_ || m || (g(""), t?.(_));
  }, x = /* @__PURE__ */ D("form", { className: fr.inputRow, onSubmit: (h) => {
    p(h);
  }, children: [
    /* @__PURE__ */ o(
      as,
      {
        value: u,
        placeholder: n,
        "aria-label": a,
        disabled: m,
        onChange: (h) => g(h.target.value)
      }
    ),
    /* @__PURE__ */ o(ln, { type: "submit", disabled: !y, loading: l, children: r })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      className: [fr.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: fr.messages, children: [
          e.map(
            (h, _) => c ? /* @__PURE__ */ o("div", { children: c(h, _) }, _) : /* @__PURE__ */ o(
              "div",
              {
                className: [fr.message, fr[h.role]].filter(Boolean).join(" "),
                children: h.content
              },
              _
            )
          ),
          l && /* @__PURE__ */ o("div", { className: fr.typing, children: "…" })
        ] }),
        s ? s(x) : x
      ]
    }
  );
}
const Tf = "_wrapper_1ulz6_1", Cf = "_input_1ulz6_8", Af = "_invalid_1ulz6_38", Df = "_toggle_1ulz6_45", Mf = "_xs_1ulz6_80", If = "_sm_1ulz6_86", zf = "_md_1ulz6_92", Lf = "_lg_1ulz6_98", Rf = "_xl_1ulz6_104", Dr = {
  wrapper: Tf,
  input: Cf,
  invalid: Af,
  toggle: Df,
  xs: Mf,
  sm: If,
  md: zf,
  lg: Lf,
  xl: Rf
}, Pf = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    showLabel: i = "Show password",
    hideLabel: c = "Hide password",
    ...s
  }, l) {
    const [d, f] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Dr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: d ? "text" : "password",
            disabled: a,
            className: [
              Dr.input,
              Dr[t],
              n ? Dr.invalid : null,
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
            className: Dr.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ o(Me, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), jf = "_login_30qie_3", Bf = "_title_30qie_9", Ff = "_remember_30qie_14", Hf = "_link_30qie_21", Mr = {
  login: jf,
  title: Bf,
  remember: Ff,
  link: Hf
}, ls = "dx-login-username";
function Uf(e) {
  const t = e === void 0 ? ls : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Wf(e, t) {
  const n = e === void 0 ? ls : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function qf(e) {
  const t = e === void 0 ? ls : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function iO({
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
  passwordLabel: u = "Password",
  submitText: g = "Sign in",
  storageKey: m,
  className: y
}) {
  const [p, x] = W(() => Uf(m) ?? ""), [h, _] = W(""), [b, N] = W(!1), [v, C] = W(!1), [S, $] = W({}), E = l || v, I = e != null && n == null, M = async (T) => {
    I || T.preventDefault();
    const w = {};
    if (p.trim() || (w.username = "Username is required."), h || (w.password = "Password is required."), $(w), !(w.username || w.password || !n)) {
      C(!0);
      try {
        await n({
          username: p.trim(),
          password: h,
          rememberMe: b
        }), b ? Wf(m, p.trim()) : qf(m);
      } finally {
        C(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [Mr.login, y].filter(Boolean).join(" "),
      action: I ? e : void 0,
      method: I ? t : void 0,
      noValidate: !0,
      onSubmit: (T) => {
        M(T);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Mr.title, children: d }),
        /* @__PURE__ */ o(ar, { label: f, required: !0, error: S.username, children: ({ inputId: T }) => /* @__PURE__ */ o(
          as,
          {
            id: T,
            value: p,
            autoComplete: "username",
            disabled: E,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (w) => {
              x(w.target.value), $((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ar, { label: u, required: !0, error: S.password, children: ({ inputId: T }) => /* @__PURE__ */ o(
          Pf,
          {
            id: T,
            value: h,
            autoComplete: "current-password",
            disabled: E,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (w) => {
              _(w.target.value), $((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ D("label", { className: Mr.remember, children: [
          /* @__PURE__ */ o(
            lu,
            {
              checked: b,
              disabled: E,
              onChange: (T) => N(T.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(ln, { type: "submit", loading: E, disabled: E, children: g }),
        (c ?? a) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Mr.link,
            onClick: () => a?.(),
            children: c ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Mr.link,
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
const Ma = Object.entries, Ls = Object.setPrototypeOf, Zf = Object.isFrozen, Jf = Object.getPrototypeOf, Qf = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, xr = Object.create, Ia = typeof Reflect < "u" && Reflect, qo = Ia.apply, Ko = Ia.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
qo || (qo = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return t.apply(n, a);
});
Ko || (Ko = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
  return new t(...r);
});
const sr = yt(Array.prototype.forEach), e_ = yt(Array.prototype.lastIndexOf), Rs = yt(Array.prototype.pop), Ir = yt(Array.prototype.push), t_ = yt(Array.prototype.splice), wr = Array.isArray, qr = yt(String.prototype.toLowerCase), Io = yt(String.prototype.toString), Ps = yt(String.prototype.match), zr = yt(String.prototype.replace), js = yt(String.prototype.indexOf), n_ = yt(String.prototype.trim), r_ = yt(Number.prototype.toString), o_ = yt(Boolean.prototype.toString), Bs = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Fs = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), Vt = yt(Object.prototype.hasOwnProperty), Lr = yt(Object.prototype.toString), zt = yt(RegExp.prototype.test), qn = s_(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return qo(e, t, r);
  };
}
function s_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Ko(e, n);
  };
}
function We(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qr;
  if (Ls && Ls(e, null), !wr(t)) return e;
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
function on(e) {
  const t = xr(null);
  for (const r of Ma(e)) {
    var n = Yf(r, 2);
    const a = n[0], i = n[1];
    Vt(e, a) && (wr(i) ? t[a] = a_(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = on(i) : t[a] = i);
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
      return Bs ? Bs(e) : "0";
    case "symbol":
      return Fs ? Fs(e) : "Symbol()";
    case "undefined":
      return Lr(e);
    case "function":
    case "object": {
      if (e === null) return Lr(e);
      const t = e, n = _n(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Lr(r);
      }
      return Lr(e);
    }
    default:
      return Lr(e);
  }
}
function _n(e, t) {
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
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Hs = kt([
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
]), Lo = kt([
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
]), Ro = kt([
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
]), Us = kt(["#text"]), Ws = kt([
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
]), Po = kt([
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
]), qs = kt([
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
]), u_ = Ot(/{{[\w\W]*|^[\w\W]*}}/g), f_ = Ot(/<%[\w\W]*|^[\w\W]*%>/g), __ = Ot(/\${[\w\W]*/g), p_ = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), h_ = Ot(/^aria-[\-\w]+$/), Ks = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), m_ = Ot(/^(?:\w+script|data):/i), g_ = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), y_ = Ot(/^html$/i), b_ = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Gs = Ot(/<[/\w!]/g), Vs = Ot(/<[/\w]/g), x_ = Ot(/<\/no(script|embed|frames)/i), v_ = Ot(/\/>/i), tn = {
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
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), N_ = function() {
  return typeof window > "u" ? null : window;
}, S_ = function(t, n) {
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
}, Ys = function() {
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
  return Vt(t, n) && wr(t[n]) ? We(a.base ? on(a.base) : {}, t[n], a.transform) : r;
}, jo = function(t, n, r) {
  const a = Vt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? on(a) : r();
};
function La() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N_();
  const t = (se) => La(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, f = e.trustedTypes, u = s.prototype, g = _n(u, "cloneNode"), m = _n(u, "remove"), y = _n(u, "removeAttributeNode"), p = _n(u, "nextSibling"), x = _n(u, "childNodes"), h = _n(u, "parentNode"), _ = _n(u, "shadowRoot"), b = _n(u, "attributes"), N = c && c.prototype ? _n(c.prototype, "nodeType") : null, v = c && c.prototype ? _n(c.prototype, "nodeName") : null, C = c && c.prototype ? _n(c.prototype, "ownerDocument") : null, S = function(O) {
    return N ? N(O) : O.nodeType;
  }, $ = function(O) {
    return v ? v(O) : O.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let E, I = "", M, T = !1, w = 0;
  const k = function() {
    if (w > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, A = function(O) {
    k(), w++;
    try {
      return E.createHTML(O);
    } finally {
      w--;
    }
  }, R = function(O) {
    k(), w++;
    try {
      return E.createScriptURL(O);
    } finally {
      w--;
    }
  }, z = function() {
    return T || (M = S_(f, a), T = !0), M;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let ae = Ys();
  t.isSupported = typeof Ma == "function" && typeof h == "function" && F && F.createHTMLDocument !== void 0;
  const _e = u_, K = f_, me = __, ue = p_, xe = h_, pe = m_, De = g_, G = b_;
  let $e = Ks, re = null;
  const Ae = We({}, [
    ...Hs,
    ...zo,
    ...Lo,
    ...Ro,
    ...Us
  ]);
  let fe = null;
  const Fe = We({}, [
    ...Ws,
    ...Po,
    ...qs,
    ...so
  ]);
  let Ge = Object.seal(xr(null, {
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
  const it = Object.seal(xr(null, {
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
  let bt = !0, Z = !0, L = !1, Y = !0, Q = !1, ge = !0, le = !1, Ee = !1, je = null, Ze = null, Qe = !1, nt = !1, Xt = !1, oe = !1, Le = !0, Nt = !1;
  const Rt = "user-content-";
  let xt = !0, Ie = !1, qe = {}, vt = null;
  const $t = We({}, [
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
  let he = null;
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
  let q = Xe, ee = !1, de = null;
  const Ne = We({}, [
    Ye,
    Pt,
    Xe
  ], Io), ke = kt([
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
  let rt = null;
  const Et = ["application/xhtml+xml", "text/html"], ht = "text/html";
  let ze = null, Tt = null;
  const Zt = n.createElement("form"), pn = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, Cn = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === O) return;
    (!O || typeof O != "object") && (O = {}), O = on(O), rt = Et.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? ht : O.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? Io : qr, re = Kn(O, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Kn(O, "ALLOWED_ATTR", Fe, { transform: ze }), de = Kn(O, "ALLOWED_NAMESPACES", Ne, { transform: Io }), he = Kn(O, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), ct = Kn(O, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Kn(O, "FORBID_CONTENTS", $t, { transform: ze }), Je = Kn(O, "FORBID_TAGS", on({}), { transform: ze }), At = Kn(O, "FORBID_ATTR", on({}), { transform: ze }), qe = Vt(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? on(O.USE_PROFILES) : O.USE_PROFILES : !1, bt = O.ALLOW_ARIA_ATTR !== !1, Z = O.ALLOW_DATA_ATTR !== !1, L = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = O.SAFE_FOR_TEMPLATES || !1, ge = O.SAFE_FOR_XML !== !1, le = O.WHOLE_DOCUMENT || !1, nt = O.RETURN_DOM || !1, Xt = O.RETURN_DOM_FRAGMENT || !1, oe = O.RETURN_TRUSTED_TYPE || !1, Qe = O.FORCE_BODY || !1, Le = O.SANITIZE_DOM !== !1, Nt = O.SANITIZE_NAMED_PROPS || !1, xt = O.KEEP_CONTENT !== !1, Ie = O.IN_PLACE || !1, $e = i_(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : Ks, q = typeof O.NAMESPACE == "string" ? O.NAMESPACE : Xe, Ce = jo(O, "MATHML_TEXT_INTEGRATION_POINTS", () => We({}, ke)), Be = jo(O, "HTML_INTEGRATION_POINTS", () => We({}, Ke));
    const P = jo(O, "CUSTOM_ELEMENT_HANDLING", () => xr(null));
    if (Ge = xr(null), Vt(P, "tagNameCheck") && pn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && pn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), qe && (re = We({}, Us), fe = xr(null), qe.html === !0 && (We(re, Hs), We(fe, Ws)), qe.svg === !0 && (We(re, zo), We(fe, Po), We(fe, so)), qe.svgFilters === !0 && (We(re, Lo), We(fe, Po), We(fe, so)), qe.mathMl === !0 && (We(re, Ro), We(fe, qs), We(fe, so))), it.tagCheck = null, it.attributeCheck = null, Vt(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? it.tagCheck = O.ADD_TAGS : wr(O.ADD_TAGS) && (re === Ae && (re = on(re)), We(re, O.ADD_TAGS, ze))), Vt(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? it.attributeCheck = O.ADD_ATTR : wr(O.ADD_ATTR) && (fe === Fe && (fe = on(fe)), We(fe, O.ADD_ATTR, ze))), Vt(O, "ADD_FORBID_CONTENTS") && wr(O.ADD_FORBID_CONTENTS) && (vt === $t && (vt = on(vt)), We(vt, O.ADD_FORBID_CONTENTS, ze)), xt && (re["#text"] = !0), le && We(re, [
      "html",
      "head",
      "body"
    ]), re.table && (We(re, ["tbody"]), delete Je.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = E;
      E = O.TRUSTED_TYPES_POLICY;
      try {
        I = A("");
      } catch (ce) {
        throw E = J, ce;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (E = void 0, I = "") : (E === void 0 && (E = z()), E && typeof I == "string" && (I = A("")));
    kt && kt(O), Tt = O;
  }, Fn = We({}, [
    ...zo,
    ...Lo,
    ...c_
  ]), kn = We({}, [...Ro, ...d_]), Zr = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "svg" : P.namespaceURI === Ye ? O === "svg" && (J === "annotation-xml" || Ce[J]) : !!Fn[O];
  }, So = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "math" : P.namespaceURI === Pt ? O === "math" && Be[J] : !!kn[O];
  }, Oo = function(O, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !kn[O] && (dt[O] || !Fn[O]);
  }, $o = function(O) {
    let P = h(O);
    (!P || !P.tagName) && (P = {
      namespaceURI: q,
      tagName: "template"
    });
    const J = qr(O.tagName), ce = qr(P.tagName);
    return de[O.namespaceURI] ? O.namespaceURI === Pt ? Zr(J, P, ce) : O.namespaceURI === Ye ? So(J, P, ce) : O.namespaceURI === Xe ? Oo(J, P, ce) : !!(rt === "application/xhtml+xml" && de[O.namespaceURI]) : !1;
  }, hn = function(O) {
    Ir(t.removed, { element: O });
    try {
      h(O).removeChild(O);
    } catch {
      if (m(O), !h(O)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(O, P, J) {
    try {
      y(O, P);
    } catch {
      try {
        O.removeAttribute(J);
      } catch {
      }
    }
  }, mn = function(O) {
    H(O);
    const P = x(O);
    if (P) {
      const ce = [];
      sr(P, (Te) => {
        Ir(ce, Te);
      }), sr(ce, (Te) => {
        try {
          m(Te);
        } catch {
        }
      });
    }
    const J = b(O);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Jr(O, Te, Pe);
    }
  }, jt = function(O, P, J) {
    if (!J) try {
      J = P.getAttributeNode(O);
    } catch {
      J = null;
    }
    Ir(t.removed, {
      attribute: J || null,
      from: P
    });
    try {
      J ? y(P, J) : P.removeAttribute(O);
    } catch {
      try {
        P.removeAttribute(O);
      } catch {
      }
    }
    if (O === "is")
      if (nt || Xt) try {
        hn(P);
      } catch {
      }
      else try {
        P.setAttribute(O, "");
      } catch {
      }
  }, Nr = function(O) {
    const P = b(O);
    if (P)
      for (let J = P.length - 1; J >= 0; --J) {
        const ce = P[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Jr(O, ce, Te);
      }
  }, H = function(O) {
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop();
      S(J) === tn.element && Nr(J);
      const ce = x(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function(O, P) {
    return ge ? O === "patchsrc" ? !0 : O === "for" && P !== "label" && P !== "output" : !1;
  }, ye = function(O) {
    if (!ge) return;
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Vs, J.data)) {
        try {
          m(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = ze($(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = x(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) P.push(Te[Pe]);
    }
  }, ve = function(O) {
    let P = null, J = null;
    if (Qe) O = "<remove></remove>" + O;
    else {
      const Pe = Ps(O, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && q === Xe && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const ce = E ? A(O) : O;
    if (q === Xe) try {
      P = new d().parseFromString(ce, rt);
    } catch {
    }
    if (!P || !P.documentElement) {
      P = F.createDocument(q, "template", null);
      try {
        P.documentElement.innerHTML = ee ? I : ce;
      } catch {
      }
    }
    const Te = P.body || P.documentElement;
    return O && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), q === Xe ? te.call(P, le ? "html" : "body")[0] : le ? P.documentElement : Te;
  }, et = function(O) {
    const P = C ? C(O) : O.ownerDocument;
    return X.call(P || O, O, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, Dt = function(O) {
    return O = zr(O, _e, " "), O = zr(O, K, " "), O = zr(O, me, " "), O;
  }, wt = function(O) {
    var P;
    O.normalize();
    const J = C ? C(O) : O.ownerDocument, ce = X.call(J || O, O, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (P = O.querySelectorAll) === null || P === void 0 ? void 0 : P.call(O, "template");
    Pe && sr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, gn = function(O) {
    const P = v ? v(O) : null;
    return typeof P != "string" || ze(P) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || O.attributes !== b(O) || typeof O.removeAttribute != "function" || typeof O.removeAttributeNode != "function" || typeof O.getAttributeNode != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || O.nodeType !== N(O) || O.childNodes !== x(O);
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
    se.length !== 0 && sr(se, (J) => {
      J.call(t, O, P, Tt);
    });
  }
  const Eo = function(O, P) {
    return !!(ge && O.hasChildNodes() && !gt(O.firstElementChild) && zt(Gs, O.textContent) && zt(Gs, O.innerHTML) || ge && O.namespaceURI === Xe && w_[P] && (gt(O.firstElementChild) || typeof O.textContent == "string" && zt(k_[P], O.textContent)) || O.nodeType === tn.processingInstruction || ge && O.nodeType === tn.comment && zt(Vs, O.data));
  }, Qr = function(O, P) {
    if (O instanceof RegExp) return zt(O, P);
    if (O instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!O(P, ...ce);
    }
    return !1;
  }, tl = function(O, P, J) {
    if (!Je[P] && ms(P) && Qr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = h(O), Te = x(O);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ut = O === J ? g(Te[He], !0) : Te[He];
          ce.insertBefore(ut, p(O));
        }
      }
    }
    return hn(O), !0;
  }, _s = function(O, P, J, ce) {
    return O.length === 0 ? P : P === J || P === ce ? on(P) : P;
  }, dr = function(O, P) {
    return O === P || h(O) !== null ? !1 : (Ie && H(O), !0);
  }, ps = function(O, P) {
    if (Jt(ae.beforeSanitizeElements, O, null), dr(O, P)) return !0;
    if (gn(O))
      return hn(O), !0;
    const J = ze($(O));
    if (re = _s(ae.uponSanitizeElement, re, Ae, je), Jt(ae.uponSanitizeElement, O, {
      tagName: J,
      allowedTags: re
    }), dr(O, P)) return !0;
    if (Eo(O, J))
      return hn(O), !0;
    if (Je[J] || !(it.tagCheck instanceof Function && it.tagCheck(J)) && !re[J]) {
      const ce = tl(O, J, P);
      return ce === !1 && (Jt(ae.afterSanitizeElements, O, null), dr(O, P)) ? !0 : ce;
    }
    if (S(O) === tn.element && !$o(O) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(x_, O.innerHTML))
      return hn(O), !0;
    if (Q && O.nodeType === tn.text) {
      const ce = Dt(O.textContent);
      O.textContent !== ce && (Ir(t.removed, { element: O.cloneNode() }), O.textContent = ce);
    }
    return Jt(ae.afterSanitizeElements, O, null), dr(O, P);
  }, hs = function(O, P, J) {
    if (At[P] || U(P, O) || Le && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || it.attributeCheck instanceof Function && it.attributeCheck(P, O);
    return Z && zt(ue, P) || bt && zt(xe, P) ? !0 : ce ? he[P] || zt($e, zr(J, De, "")) || (P === "src" || P === "xlink:href" || P === "href") && O !== "script" && js(J, "data:") === 0 && ct[O] || L && !zt(pe, zr(J, De, "")) ? !0 : !J : ms(O) && Qr(Ge.tagNameCheck, O) && Qr(Ge.attributeNameCheck, P, O) || P === "is" && Ge.allowCustomizedBuiltInElements && Qr(Ge.tagNameCheck, J);
  }, nl = We({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ms = function(O) {
    return !nl[qr(O)] && zt(G, O);
  }, rl = function(O, P, J, ce) {
    if (E && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(O, P)) {
      case "TrustedHTML":
        return A(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, ol = function(O, P, J, ce) {
    try {
      return J ? O.setAttributeNS(J, P, ce) : O.setAttribute(P, ce), gn(O) ? (hn(O), !1) : !0;
    } catch {
      return jt(P, O), !1;
    }
  }, gs = function(O, P) {
    if (Jt(ae.beforeSanitizeAttributes, O, null), dr(O, P)) return;
    const J = O.attributes;
    if (!J || gn(O)) return;
    fe = _s(ae.uponSanitizeAttribute, fe, Fe, Ze);
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
      const He = J[Te], ut = He.name, cn = He.namespaceURI, Qt = He.value, ur = ze(ut), Co = Qt;
      let Bt = ut === "value" ? Co : n_(Co), ys = !1;
      if (ce.attrName = ur, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(ae.uponSanitizeAttribute, O, ce), Bt = ce.attrValue, Nt && (ur === "id" || ur === "name") && js(Bt, Rt) !== 0 && (jt(ut, O, He), Bt = Rt + Bt, ys = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ut, O, He);
        continue;
      }
      if (ur === "attributename" && Ps(Bt, "href")) {
        jt(ut, O, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ut, O, He);
          continue;
        }
        if (!Y && zt(v_, Bt)) {
          jt(ut, O, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !hs(Pe, ur, Bt)) {
          jt(ut, O, He);
          continue;
        }
        Bt = rl(Pe, ur, cn, Bt), Bt !== Co && ol(O, ut, cn, Bt) && ys && Rs(t.removed);
      }
    }
    Jt(ae.afterSanitizeAttributes, O, null), dr(O, P);
  }, eo = function(O) {
    let P = null;
    const J = et(O);
    for (Jt(ae.beforeSanitizeShadowDOM, O, null); P = J.nextNode(); )
      if (Jt(ae.uponSanitizeShadowNode, P, null), ps(P, O), gs(P, O), Ct(P.content) && eo(P.content), S(P) === tn.element) {
        const ce = _(P);
        Ct(ce) && (To(ce), eo(ce));
      }
    Jt(ae.afterSanitizeShadowDOM, O, null);
  }, To = function(O) {
    const P = [{
      node: O,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        eo(J.shadow);
        continue;
      }
      const ce = J.node, Te = S(ce) === tn.element, Pe = x(ce);
      if (Pe) for (let He = Pe.length - 1; He >= 0; --He) P.push({
        node: Pe[He],
        shadow: null
      });
      if (Te) {
        const He = v ? v(ce) : null;
        if (typeof He == "string" && ze(He) === "template") {
          const ut = ce.content;
          Ct(ut) && P.push({
            node: ut,
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
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = l_(se), typeof se != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (re = je, fe = Ze) : Cn(O), (ae.uponSanitizeElement.length > 0 || ae.uponSanitizeAttribute.length > 0) && (re = on(re)), ae.uponSanitizeAttribute.length > 0 && (fe = on(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      ye(se);
      const cn = $(se);
      if (typeof cn == "string") {
        const Qt = ze(cn);
        if (!re[Qt] || Je[Qt])
          throw mn(se), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(se))
        throw mn(se), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        To(se);
      } catch (Qt) {
        throw mn(se), Qt;
      }
    } else if (gt(se))
      P = ve("<!---->"), J = P.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), To(P);
    else {
      if (!nt && !Q && !le && se.indexOf("<") === -1) return E && oe ? A(se) : se;
      if (P = ve(se), !P) return nt ? null : oe ? I : "";
    }
    P && Qe && hn(P.firstChild);
    const He = Pe ? se : P;
    try {
      const cn = et(He);
      for (; ce = cn.nextNode(); )
        ps(ce, He), gs(ce, He), Ct(ce.content) && eo(ce.content);
    } catch (cn) {
      throw Pe && (mn(se), sr(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), cn;
    }
    if (Pe) {
      let cn = !1;
      if (sr(t.removed, (Qt) => {
        Qt.element && (Qt.element === se && (cn = !0), H(Qt.element));
      }), cn) throw qn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(se), se;
    }
    if (nt) {
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ut = le ? P.outerHTML : P.innerHTML;
    return le && re["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(y_, P.ownerDocument.doctype.name) && (ut = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ut), Q && (ut = Dt(ut)), E && oe ? A(ut) : ut;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cn(se), Ee = !0, je = re, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, E = M, I = "";
  }, t.isValidAttribute = function(se, O, P) {
    Tt || Cn({});
    const J = ze(se), ce = ze(O);
    return hs(J, ce, P);
  }, t.addHook = function(se, O) {
    typeof O == "function" && Vt(ae, se) && Ir(ae[se], O);
  }, t.removeHook = function(se, O) {
    if (Vt(ae, se)) {
      if (O !== void 0) {
        const P = e_(ae[se], O);
        return P === -1 ? void 0 : t_(ae[se], P, 1)[0];
      }
      return Rs(ae[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(ae, se) && (ae[se] = []);
  }, t.removeAllHooks = function() {
    ae = Ys();
  }, t;
}
var Ra = La();
function Gr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function O_(e) {
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
      const s = O_(c);
      return s == null ? i : `<a href="${Gr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ao}(\\d+)${ao}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function $_(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), a = (l) => r[l] ?? "", i = [];
  let c = 0;
  const s = (l, d) => {
    const f = d ? "ol" : "ul";
    i.push(
      `<${f}>${l.map((u) => `<li>${lo(u, n)}</li>`).join("")}</${f}>`
    );
  };
  for (; c < r.length; ) {
    const l = a(c) ?? "";
    if (/^\s*$/.test(l)) {
      c += 1;
      continue;
    }
    const d = /^(#{1,6})\s+(.*)$/.exec(l), f = d?.[1], u = d?.[2];
    if (f !== void 0 && u !== void 0) {
      i.push(
        `<h${f.length}>${lo(u.trim(), n)}</h${f.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const p = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", x = [];
      for (c += 1; c < r.length; ) {
        const _ = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(_)) break;
        x.push(_), c += 1;
      }
      c += 1;
      const h = p ? ` class="language-${Gr(p)}"` : "";
      i.push(
        `<pre><code${h}>${Gr(x.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const p = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        p.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${p.map((x) => `<p>${lo(x, n)}</p>`).join("")}</blockquote>`
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
const E_ = "_markdown_1vu4b_3", T_ = "_resize_1vu4b_61", Xs = {
  markdown: E_,
  resize: T_
};
function cO({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Oe(
    () => Ra.sanitize($_(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Xs.markdown, n ? Xs.resize : "", a].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const C_ = "_editor_2a7al_3", A_ = "_toolbar_2a7al_13", D_ = "_tool_2a7al_13", M_ = "_separator_2a7al_56", I_ = "_area_2a7al_63", z_ = "_source_2a7al_73", L_ = "_alignGlyph_2a7al_84", R_ = "_colorInput_2a7al_89", P_ = "_select_2a7al_98", St = {
  editor: C_,
  toolbar: A_,
  tool: D_,
  separator: M_,
  area: I_,
  source: z_,
  alignGlyph: L_,
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
], Zs = {
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
    glyph: /* @__PURE__ */ o("span", { className: St.alignGlyph, style: { textAlign: "left" }, children: "≡" }),
    command: "justifyLeft"
  },
  justifyCenter: {
    label: "Align center",
    glyph: /* @__PURE__ */ o("span", { className: St.alignGlyph, style: { textAlign: "center" }, children: "≡" }),
    command: "justifyCenter"
  },
  justifyRight: {
    label: "Align right",
    glyph: /* @__PURE__ */ o("span", { className: St.alignGlyph, style: { textAlign: "right" }, children: "≡" }),
    command: "justifyRight"
  },
  justifyFull: {
    label: "Justify",
    glyph: /* @__PURE__ */ o("span", { className: St.alignGlyph, style: { textAlign: "justify" }, children: "≡" }),
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
function Go(e, t) {
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
  return Go("formatBlock", `<${e}>`) || Go("formatBlock", e);
}
function W_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const dO = st(
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
    className: f,
    sanitize: u = !0
  }, g) {
    const [m, y] = W(!1), [p, x] = W(n), [h, _] = W(
      null
    ), [b, N] = W(""), [v, C] = W(""), [S, $] = W(2), [E, I] = W(2), [M, T] = W(!1), w = ne(null), k = ne(null), A = ne(n), R = B(
      (G) => u ? Ra.sanitize(G) : G,
      [u]
    );
    be(() => {
      const G = w.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (A.current = t);
    }, [t]);
    const z = B(
      (G) => {
        A.current = R(G), r?.(A.current);
      },
      [R, r]
    ), j = B(
      (G, $e) => {
        if (s || l) return !1;
        w.current?.focus();
        const re = Go(G, $e);
        if (re) {
          const Ae = w.current;
          Ae && z(Ae.innerHTML);
        }
        return re;
      },
      [z, s, l]
    ), F = B(
      () => w.current?.innerHTML ?? A.current,
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
    ko(g, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = Zs[G];
        !$e || s || l || j($e.command);
      },
      [j, s, l]
    ), ae = B(() => {
      s || l || (m ? (y(!1), z(p)) : (x(w.current?.innerHTML ?? ""), y(!0)));
    }, [m, p, z, s, l]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || s || l) return;
        const $e = G.key.toLowerCase(), re = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        re && (G.preventDefault(), we(re));
      },
      [we, s, l]
    ), K = B(() => {
      const G = w.current;
      G && z(G.innerHTML);
    }, [z]), me = B(() => {
      b.trim() && (j("createLink", b.trim()), N(""), _(null));
    }, [b, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), C(""), _(null));
    }, [v, j]), xe = B(
      async (G) => {
        if (c) {
          T(!0);
          try {
            const $e = new FormData();
            $e.append(c.parameterName ?? "file", G);
            const re = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: $e
            });
            if (!re.ok)
              throw new Error(`Upload failed: ${re.status}`);
            const fe = (re.headers.get("content-type") ?? "").includes("application/json") ? await re.json() : await re.text(), Fe = (c.parseUrl ?? W_)(fe);
            j("insertImage", Fe);
          } catch ($e) {
            a?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            T(!1), _(null);
          }
        }
      },
      [c, a, j]
    ), pe = B(() => {
      const G = Math.max(1, Math.min(10, Math.floor(S) || 1)), $e = Math.max(1, Math.min(10, Math.floor(E) || 1)), re = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: G }, () => `<tr>${re}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Ae}</tbody></table>`), _(null);
    }, [S, E, j]), De = (G, $e) => {
      if (G === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: St.separator
          },
          `sep-${$e}`
        );
      if (typeof G == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": G.label,
            title: G.title ?? G.label,
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && G.onExecute(te);
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
            className: St.tool,
            "aria-label": "Source",
            "aria-pressed": m,
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: ae,
            children: "</>"
          },
          "source"
        );
      if (G === "foreColor" || G === "backgroundColor") {
        const Ae = G === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ D("label", { className: St.tool, title: Ae, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: l,
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? H_ : G === "fontName" ? B_ : F_;
        return /* @__PURE__ */ D(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: l,
            defaultValue: "",
            className: St.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || s || l || (G === "formatBlock" ? U_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
            className: St.tool,
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
      if (G === "image")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: St.tool,
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
      if (G === "table")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": "Insert table",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && ($(2), I(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const re = Zs[G];
      return re ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: St.tool,
          "aria-label": re.label,
          disabled: l,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => we(G),
          children: re.glyph
        },
        G
      ) : null;
    };
    return /* @__PURE__ */ D("div", { className: [St.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: St.toolbar,
          children: i.map((G, $e) => De(G, $e))
        }
      ),
      m ? /* @__PURE__ */ o(
        "textarea",
        {
          className: St.source,
          "aria-label": `${d} source`,
          value: p,
          disabled: l,
          readOnly: s,
          onChange: (G) => {
            x(G.target.value), z(G.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: w,
          className: St.area,
          contentEditable: !s && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: A.current },
          onInput: K,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ D(
        Ta,
        {
          open: h !== null,
          onClose: () => _(null),
          title: h === "link" ? "Insert link" : h === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(at, { children: [
            /* @__PURE__ */ o(ln, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            h === "link" && /* @__PURE__ */ o(ln, { onClick: me, children: "Insert" }),
            h === "image" && /* @__PURE__ */ o(ln, { onClick: ue, disabled: M, children: "Insert" }),
            h === "table" && /* @__PURE__ */ o(ln, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            h === "link" && /* @__PURE__ */ o(ar, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ o(
              no,
              {
                id: G,
                value: b,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            h === "image" && /* @__PURE__ */ D(at, { children: [
              /* @__PURE__ */ o(ar, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => C($e.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(ar, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ o(
                "input",
                {
                  id: G,
                  ref: k,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const re = $e.target.files?.[0];
                    re && xe(re), $e.target.value = "";
                  }
                }
              ) }),
              M && /* @__PURE__ */ o(Ca, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            h === "table" && /* @__PURE__ */ D(at, { children: [
              /* @__PURE__ */ o(ar, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => $(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ar, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  type: "number",
                  value: String(E),
                  onChange: ($e) => I(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), q_ = "_popup_ve7kd_4", Pa = {
  popup: q_
}, ja = ir(null);
function uO() {
  const e = Bn(ja);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Js(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function K_({ state: e }) {
  const t = ne(null), [n, r] = W(null);
  return be(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), c = a.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - c.width)
    );
    let l = i.bottom + 4;
    l + c.height > window.innerHeight && i.top - 4 - c.height >= 0 && (l = i.top - 4 - c.height), r({ left: s, top: Math.max(0, l) });
  }, [e]), be(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [Pa.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Js(e.width),
        height: Js(e.height)
      },
      children: e.content
    }
  );
}
function fO({ children: e }) {
  const [t, n] = W(null), r = ne(0), a = ne(null), i = B(() => {
    a.current?.(), a.current = null;
  }, []), c = B(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = B(
    (d) => {
      r.current += 1;
      const f = r.current;
      a.current = d.onClose ?? null, n({
        ...d,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), d.onOpen?.();
      let u = !1;
      return () => {
        u || (u = !0, n((g) => g?.seq !== f ? g : (g.invoker && document.body.contains(g.invoker) && g.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  be(() => {
    if (!t) return;
    const d = (m) => {
      const y = document.querySelector(`.${Pa.popup}`);
      y && !y.contains(m.target) && c();
    }, f = (m) => {
      m.key === "Escape" && (m.preventDefault(), c());
    }, u = () => c(), g = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", g), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", g);
    };
  }, [t, c]);
  const l = Oe(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ D(ja.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(K_, { state: t }, t.seq)
  ] });
}
const G_ = "_alert_146r9_1", V_ = "_xs_146r9_28", Y_ = "_sm_146r9_38", X_ = "_lg_146r9_48", Z_ = "_xl_146r9_58", J_ = "_primary_146r9_69", Q_ = "_secondary_146r9_74", ep = "_light_146r9_79", tp = "_base_146r9_84", np = "_dark_146r9_89", rp = "_info_146r9_94", op = "_success_146r9_99", sp = "_warning_146r9_104", ap = "_danger_146r9_109", lp = "_flat_146r9_116", ip = "_outlined_146r9_123", cp = "_filled_146r9_132", dp = "_text_146r9_139", up = "_icon_146r9_181", fp = "_content_146r9_192", _p = "_title_146r9_197", pp = "_body_146r9_203", hp = "_dismiss_146r9_209", Sn = {
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
function _O({
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
  onVisibleChange: u,
  className: g,
  ...m
}) {
  const [y, p] = W(!1);
  if (f === !1 || f === void 0 && y)
    return null;
  const x = () => {
    f === void 0 && p(!0), d?.(), u?.(!1);
  }, h = e, _ = ka(t, "filled"), b = Vr(n), N = i ?? (c ? /* @__PURE__ */ o(Me, { icon: mp[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        Sn.alert,
        Sn[h],
        Sn[_],
        b ? Sn[b] : null,
        Sn[r],
        g
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
            onClick: x,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const gp = "_skeleton_1xyce_1", yp = "_text_1xyce_35", bp = "_circle_1xyce_40", xp = "_rect_1xyce_44", Qs = {
  skeleton: gp,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: yp,
  circle: bp,
  rect: xp
};
function pO({
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
      className: [Qs.skeleton, Qs[e], r].filter(Boolean).join(" "),
      style: a
    }
  );
}
function xo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const vp = "_row_juebr_1", wp = "_start_juebr_14", kp = "_center_juebr_18", Np = "_end_juebr_22", Sp = "_stretch_juebr_26", Op = "_baseline_juebr_30", $p = "_normal_juebr_34", Ep = "_noWrap_juebr_90", Tp = "_wrapReverse_juebr_94", io = {
  row: vp,
  start: wp,
  center: kp,
  end: Np,
  stretch: Sp,
  baseline: Op,
  normal: $p,
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
  wrapReverse: Tp
};
function ea(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function hO({
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
        ea(a) != null ? io[ea(a)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const Cp = "_column_sh0ss_1", Ap = "_Size1_sh0ss_15", Dp = "_Size2_sh0ss_24", Mp = "_Size3_sh0ss_33", Ip = "_Size4_sh0ss_42", zp = "_Size5_sh0ss_51", Lp = "_Size6_sh0ss_60", Rp = "_Size7_sh0ss_69", Pp = "_Size8_sh0ss_78", jp = "_Size9_sh0ss_87", Bp = "_Size10_sh0ss_96", Fp = "_Size11_sh0ss_105", Hp = "_Size12_sh0ss_114", Up = "_Offset0_sh0ss_119", Wp = "_Offset1_sh0ss_122", qp = "_Offset2_sh0ss_127", Kp = "_Offset3_sh0ss_132", Gp = "_Offset4_sh0ss_137", Vp = "_Offset5_sh0ss_142", Yp = "_Offset6_sh0ss_147", Xp = "_Offset7_sh0ss_152", Zp = "_Offset8_sh0ss_157", Jp = "_Offset9_sh0ss_162", Qp = "_Offset10_sh0ss_167", eh = "_Offset11_sh0ss_172", th = "_Offset12_sh0ss_177", nh = "_OrderFirst_sh0ss_182", rh = "_OrderLast_sh0ss_185", oh = "_Order0_sh0ss_188", sh = "_Order1_sh0ss_191", ah = "_Order2_sh0ss_194", lh = "_Order3_sh0ss_197", ih = "_Order4_sh0ss_200", ch = "_Order5_sh0ss_203", dh = "_Order6_sh0ss_206", uh = "_Order7_sh0ss_209", fh = "_Order8_sh0ss_212", _h = "_Order9_sh0ss_215", ph = "_Order10_sh0ss_218", hh = "_Order11_sh0ss_221", mh = "_Order12_sh0ss_224", gh = "_xsSize1_sh0ss_229", yh = "_xsSize2_sh0ss_238", bh = "_xsSize3_sh0ss_247", xh = "_xsSize4_sh0ss_256", vh = "_xsSize5_sh0ss_265", wh = "_xsSize6_sh0ss_274", kh = "_xsSize7_sh0ss_283", Nh = "_xsSize8_sh0ss_292", Sh = "_xsSize9_sh0ss_301", Oh = "_xsSize10_sh0ss_310", $h = "_xsSize11_sh0ss_321", Eh = "_xsSize12_sh0ss_332", Th = "_xsOffset0_sh0ss_337", Ch = "_xsOffset1_sh0ss_340", Ah = "_xsOffset2_sh0ss_345", Dh = "_xsOffset3_sh0ss_350", Mh = "_xsOffset4_sh0ss_355", Ih = "_xsOffset5_sh0ss_360", zh = "_xsOffset6_sh0ss_365", Lh = "_xsOffset7_sh0ss_370", Rh = "_xsOffset8_sh0ss_375", Ph = "_xsOffset9_sh0ss_380", jh = "_xsOffset10_sh0ss_385", Bh = "_xsOffset11_sh0ss_391", Fh = "_xsOffset12_sh0ss_397", Hh = "_xsOrderFirst_sh0ss_403", Uh = "_xsOrderLast_sh0ss_406", Wh = "_xsOrder0_sh0ss_409", qh = "_xsOrder1_sh0ss_412", Kh = "_xsOrder2_sh0ss_415", Gh = "_xsOrder3_sh0ss_418", Vh = "_xsOrder4_sh0ss_421", Yh = "_xsOrder5_sh0ss_424", Xh = "_xsOrder6_sh0ss_427", Zh = "_xsOrder7_sh0ss_430", Jh = "_xsOrder8_sh0ss_433", Qh = "_xsOrder9_sh0ss_436", em = "_xsOrder10_sh0ss_439", tm = "_xsOrder11_sh0ss_442", nm = "_xsOrder12_sh0ss_445", rm = "_smSize1_sh0ss_451", om = "_smSize2_sh0ss_460", sm = "_smSize3_sh0ss_469", am = "_smSize4_sh0ss_478", lm = "_smSize5_sh0ss_487", im = "_smSize6_sh0ss_496", cm = "_smSize7_sh0ss_505", dm = "_smSize8_sh0ss_514", um = "_smSize9_sh0ss_523", fm = "_smSize10_sh0ss_532", _m = "_smSize11_sh0ss_543", pm = "_smSize12_sh0ss_554", hm = "_smOffset0_sh0ss_559", mm = "_smOffset1_sh0ss_562", gm = "_smOffset2_sh0ss_567", ym = "_smOffset3_sh0ss_572", bm = "_smOffset4_sh0ss_577", xm = "_smOffset5_sh0ss_582", vm = "_smOffset6_sh0ss_587", wm = "_smOffset7_sh0ss_592", km = "_smOffset8_sh0ss_597", Nm = "_smOffset9_sh0ss_602", Sm = "_smOffset10_sh0ss_607", Om = "_smOffset11_sh0ss_613", $m = "_smOffset12_sh0ss_619", Em = "_smOrderFirst_sh0ss_625", Tm = "_smOrderLast_sh0ss_628", Cm = "_smOrder0_sh0ss_631", Am = "_smOrder1_sh0ss_634", Dm = "_smOrder2_sh0ss_637", Mm = "_smOrder3_sh0ss_640", Im = "_smOrder4_sh0ss_643", zm = "_smOrder5_sh0ss_646", Lm = "_smOrder6_sh0ss_649", Rm = "_smOrder7_sh0ss_652", Pm = "_smOrder8_sh0ss_655", jm = "_smOrder9_sh0ss_658", Bm = "_smOrder10_sh0ss_661", Fm = "_smOrder11_sh0ss_664", Hm = "_smOrder12_sh0ss_667", Um = "_mdSize1_sh0ss_673", Wm = "_mdSize2_sh0ss_682", qm = "_mdSize3_sh0ss_691", Km = "_mdSize4_sh0ss_700", Gm = "_mdSize5_sh0ss_709", Vm = "_mdSize6_sh0ss_718", Ym = "_mdSize7_sh0ss_727", Xm = "_mdSize8_sh0ss_736", Zm = "_mdSize9_sh0ss_745", Jm = "_mdSize10_sh0ss_754", Qm = "_mdSize11_sh0ss_765", e1 = "_mdSize12_sh0ss_776", t1 = "_mdOffset0_sh0ss_781", n1 = "_mdOffset1_sh0ss_784", r1 = "_mdOffset2_sh0ss_789", o1 = "_mdOffset3_sh0ss_794", s1 = "_mdOffset4_sh0ss_799", a1 = "_mdOffset5_sh0ss_804", l1 = "_mdOffset6_sh0ss_809", i1 = "_mdOffset7_sh0ss_814", c1 = "_mdOffset8_sh0ss_819", d1 = "_mdOffset9_sh0ss_824", u1 = "_mdOffset10_sh0ss_829", f1 = "_mdOffset11_sh0ss_835", _1 = "_mdOffset12_sh0ss_841", p1 = "_mdOrderFirst_sh0ss_847", h1 = "_mdOrderLast_sh0ss_850", m1 = "_mdOrder0_sh0ss_853", g1 = "_mdOrder1_sh0ss_856", y1 = "_mdOrder2_sh0ss_859", b1 = "_mdOrder3_sh0ss_862", x1 = "_mdOrder4_sh0ss_865", v1 = "_mdOrder5_sh0ss_868", w1 = "_mdOrder6_sh0ss_871", k1 = "_mdOrder7_sh0ss_874", N1 = "_mdOrder8_sh0ss_877", S1 = "_mdOrder9_sh0ss_880", O1 = "_mdOrder10_sh0ss_883", $1 = "_mdOrder11_sh0ss_886", E1 = "_mdOrder12_sh0ss_889", T1 = "_lgSize1_sh0ss_895", C1 = "_lgSize2_sh0ss_904", A1 = "_lgSize3_sh0ss_913", D1 = "_lgSize4_sh0ss_922", M1 = "_lgSize5_sh0ss_931", I1 = "_lgSize6_sh0ss_940", z1 = "_lgSize7_sh0ss_949", L1 = "_lgSize8_sh0ss_958", R1 = "_lgSize9_sh0ss_967", P1 = "_lgSize10_sh0ss_976", j1 = "_lgSize11_sh0ss_987", B1 = "_lgSize12_sh0ss_998", F1 = "_lgOffset0_sh0ss_1003", H1 = "_lgOffset1_sh0ss_1006", U1 = "_lgOffset2_sh0ss_1011", W1 = "_lgOffset3_sh0ss_1016", q1 = "_lgOffset4_sh0ss_1021", K1 = "_lgOffset5_sh0ss_1026", G1 = "_lgOffset6_sh0ss_1031", V1 = "_lgOffset7_sh0ss_1036", Y1 = "_lgOffset8_sh0ss_1041", X1 = "_lgOffset9_sh0ss_1046", Z1 = "_lgOffset10_sh0ss_1051", J1 = "_lgOffset11_sh0ss_1057", Q1 = "_lgOffset12_sh0ss_1063", eg = "_lgOrderFirst_sh0ss_1069", tg = "_lgOrderLast_sh0ss_1072", ng = "_lgOrder0_sh0ss_1075", rg = "_lgOrder1_sh0ss_1078", og = "_lgOrder2_sh0ss_1081", sg = "_lgOrder3_sh0ss_1084", ag = "_lgOrder4_sh0ss_1087", lg = "_lgOrder5_sh0ss_1090", ig = "_lgOrder6_sh0ss_1093", cg = "_lgOrder7_sh0ss_1096", dg = "_lgOrder8_sh0ss_1099", ug = "_lgOrder9_sh0ss_1102", fg = "_lgOrder10_sh0ss_1105", _g = "_lgOrder11_sh0ss_1108", pg = "_lgOrder12_sh0ss_1111", hg = "_xlSize1_sh0ss_1117", mg = "_xlSize2_sh0ss_1126", gg = "_xlSize3_sh0ss_1135", yg = "_xlSize4_sh0ss_1144", bg = "_xlSize5_sh0ss_1153", xg = "_xlSize6_sh0ss_1162", vg = "_xlSize7_sh0ss_1171", wg = "_xlSize8_sh0ss_1180", kg = "_xlSize9_sh0ss_1189", Ng = "_xlSize10_sh0ss_1198", Sg = "_xlSize11_sh0ss_1209", Og = "_xlSize12_sh0ss_1220", $g = "_xlOffset0_sh0ss_1225", Eg = "_xlOffset1_sh0ss_1228", Tg = "_xlOffset2_sh0ss_1233", Cg = "_xlOffset3_sh0ss_1238", Ag = "_xlOffset4_sh0ss_1243", Dg = "_xlOffset5_sh0ss_1248", Mg = "_xlOffset6_sh0ss_1253", Ig = "_xlOffset7_sh0ss_1258", zg = "_xlOffset8_sh0ss_1263", Lg = "_xlOffset9_sh0ss_1268", Rg = "_xlOffset10_sh0ss_1273", Pg = "_xlOffset11_sh0ss_1279", jg = "_xlOffset12_sh0ss_1285", Bg = "_xlOrderFirst_sh0ss_1291", Fg = "_xlOrderLast_sh0ss_1294", Hg = "_xlOrder0_sh0ss_1297", Ug = "_xlOrder1_sh0ss_1300", Wg = "_xlOrder2_sh0ss_1303", qg = "_xlOrder3_sh0ss_1306", Kg = "_xlOrder4_sh0ss_1309", Gg = "_xlOrder5_sh0ss_1312", Vg = "_xlOrder6_sh0ss_1315", Yg = "_xlOrder7_sh0ss_1318", Xg = "_xlOrder8_sh0ss_1321", Zg = "_xlOrder9_sh0ss_1324", Jg = "_xlOrder10_sh0ss_1327", Qg = "_xlOrder11_sh0ss_1330", ey = "_xlOrder12_sh0ss_1333", ty = "_xxSize1_sh0ss_1339", ny = "_xxSize2_sh0ss_1348", ry = "_xxSize3_sh0ss_1357", oy = "_xxSize4_sh0ss_1366", sy = "_xxSize5_sh0ss_1375", ay = "_xxSize6_sh0ss_1384", ly = "_xxSize7_sh0ss_1393", iy = "_xxSize8_sh0ss_1402", cy = "_xxSize9_sh0ss_1411", dy = "_xxSize10_sh0ss_1420", uy = "_xxSize11_sh0ss_1431", fy = "_xxSize12_sh0ss_1442", _y = "_xxOffset0_sh0ss_1447", py = "_xxOffset1_sh0ss_1450", hy = "_xxOffset2_sh0ss_1455", my = "_xxOffset3_sh0ss_1460", gy = "_xxOffset4_sh0ss_1465", yy = "_xxOffset5_sh0ss_1470", by = "_xxOffset6_sh0ss_1475", xy = "_xxOffset7_sh0ss_1480", vy = "_xxOffset8_sh0ss_1485", wy = "_xxOffset9_sh0ss_1490", ky = "_xxOffset10_sh0ss_1495", Ny = "_xxOffset11_sh0ss_1501", Sy = "_xxOffset12_sh0ss_1507", Oy = "_xxOrderFirst_sh0ss_1513", $y = "_xxOrderLast_sh0ss_1516", Ey = "_xxOrder0_sh0ss_1519", Ty = "_xxOrder1_sh0ss_1522", Cy = "_xxOrder2_sh0ss_1525", Ay = "_xxOrder3_sh0ss_1528", Dy = "_xxOrder4_sh0ss_1531", My = "_xxOrder5_sh0ss_1534", Iy = "_xxOrder6_sh0ss_1537", zy = "_xxOrder7_sh0ss_1540", Ly = "_xxOrder8_sh0ss_1543", Ry = "_xxOrder9_sh0ss_1546", Py = "_xxOrder10_sh0ss_1549", jy = "_xxOrder11_sh0ss_1552", By = "_xxOrder12_sh0ss_1555", co = {
  column: Cp,
  Size1: Ap,
  Size2: Dp,
  Size3: Mp,
  Size4: Ip,
  Size5: zp,
  Size6: Lp,
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
  xsSize9: Sh,
  xsSize10: Oh,
  xsSize11: $h,
  xsSize12: Eh,
  xsOffset0: Th,
  xsOffset1: Ch,
  xsOffset2: Ah,
  xsOffset3: Dh,
  xsOffset4: Mh,
  xsOffset5: Ih,
  xsOffset6: zh,
  xsOffset7: Lh,
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
  smOffset10: Sm,
  smOffset11: Om,
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
  mdOrder9: S1,
  mdOrder10: O1,
  mdOrder11: $1,
  mdOrder12: E1,
  lgSize1: T1,
  lgSize2: C1,
  lgSize3: A1,
  lgSize4: D1,
  lgSize5: M1,
  lgSize6: I1,
  lgSize7: z1,
  lgSize8: L1,
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
  xlSize11: Sg,
  xlSize12: Og,
  xlOffset0: $g,
  xlOffset1: Eg,
  xlOffset2: Tg,
  xlOffset3: Cg,
  xlOffset4: Ag,
  xlOffset5: Dg,
  xlOffset6: Mg,
  xlOffset7: Ig,
  xlOffset8: zg,
  xlOffset9: Lg,
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
  xxOffset12: Sy,
  xxOrderFirst: Oy,
  xxOrderLast: $y,
  xxOrder0: Ey,
  xxOrder1: Ty,
  xxOrder2: Cy,
  xxOrder3: Ay,
  xxOrder4: Dy,
  xxOrder5: My,
  xxOrder6: Iy,
  xxOrder7: zy,
  xxOrder8: Ly,
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
function mO({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [M, T, w, k] of Fy) {
    const A = n[T], R = n[w], z = n[k];
    if (A != null) {
      Hy(T, A);
      const j = co[`${M}Size${A}`];
      j && r.push(j);
    }
    if (R != null) {
      Uy(w, R);
      const j = co[`${M}Offset${R}`];
      j && r.push(j);
    }
    if (z != null) {
      const j = co[qy(M, z, k)];
      j && r.push(j);
    }
  }
  const {
    size: i,
    offset: c,
    sizeXs: s,
    offsetXs: l,
    sizeSm: d,
    offsetSm: f,
    sizeMd: u,
    offsetMd: g,
    sizeLg: m,
    offsetLg: y,
    sizeXl: p,
    offsetXl: x,
    sizeXx: h,
    offsetXx: _,
    order: b,
    orderXs: N,
    orderSm: v,
    orderMd: C,
    orderLg: S,
    orderXl: $,
    orderXx: E,
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
function ta(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function gO({
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
        Rr.stack,
        Rr[`dir-${d}`],
        ta(n) !== "wrap" ? Rr[`wrap-${ta(n)}`] : null,
        a != null ? Rr[`align-${a}`] : null,
        i != null ? Rr[`justify-${i}`] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const Gy = "_autogrid_16x9f_1", Vy = {
  autogrid: Gy
};
function yO({
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
const Yy = "_layout_fxvw1_1", Xy = "_row_fxvw1_7", Zy = "_grid_fxvw1_21", Jy = "_gridRight_fxvw1_27", Qy = "_gridHeader_fxvw1_31", e0 = "_gridFooter_fxvw1_36", t0 = "_gridContents_fxvw1_41", n0 = "_gridBody_fxvw1_45", Dn = {
  layout: Yy,
  row: Xy,
  grid: Zy,
  gridRight: Jy,
  gridHeader: Qy,
  gridFooter: e0,
  gridContents: t0,
  gridBody: n0
}, r0 = "_footer_3be5w_1", o0 = "_sticky_3be5w_9", na = {
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
      className: [na.footer, e ? na.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const a0 = "_header_1tw8b_1", l0 = "_sticky_1tw8b_9", ra = {
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
      className: [ra.header, e ? ra.sticky : null, t].filter(Boolean).join(" "),
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
  return be(() => {
    if (!r || !t || c == null) return;
    const f = (u) => {
      u.key === "Escape" && c();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, c]), /* @__PURE__ */ D(at, { children: [
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
function bO(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(at, { children: e.children });
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
  const f = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const g = u ? l : s;
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          Dn.layout,
          Dn.grid,
          u ? Dn.gridRight : null,
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
const v0 = "_body_1ge00_4", w0 = "_bare_1ge00_12", oa = {
  body: v0,
  bare: w0
};
function xO({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [oa.body, t ? null : oa.bare, n].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}
const k0 = "_toggle_lxnk5_1", N0 = {
  toggle: k0
};
function vO({
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
      children: a ?? /* @__PURE__ */ o(Me, { icon: e, size: 20 })
    }
  );
}
const S0 = "_track_14127_1", O0 = "_bar_14127_31", $0 = "_primary_14127_39", E0 = "_success_14127_43", T0 = "_warning_14127_47", C0 = "_danger_14127_51", A0 = "_indeterminate_14127_149", D0 = "_circular_14127_163", M0 = "_fill_14127_203", nn = {
  track: S0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: O0,
  primary: $0,
  success: E0,
  warning: T0,
  danger: C0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: A0,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: D0,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: M0,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function wO({
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
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const m = typeof c == "string", y = 2, p = 10.5, x = 2 * Math.PI * p, h = x * (a ? 0.75 : 1), _ = a ? 0 : x * (1 - u / 100), b = Vr(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: m ? void 0 : c,
        height: m ? void 0 : c,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": d["aria-label"],
        "aria-labelledby": d["aria-labelledby"],
        "aria-valuenow": a ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...d,
        className: [
          nn.circular,
          nn[n],
          b ? nn[b] : null,
          m ? nn[`circular-${c}`] : null,
          a ? nn.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.track,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: y
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: y,
              strokeDasharray: `${h} ${x}`,
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
      "aria-valuenow": a ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        nn.track,
        nn[n],
        g ? nn[g] : null,
        typeof c == "string" ? nn[`linear-${c}`] : null,
        a ? nn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: nn.bar,
          style: a ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const I0 = "_wrapper_tk30z_1", z0 = {
  wrapper: I0
}, L0 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Ba = "dx-palette", R0 = "data-palette";
function P0(e, t) {
  const n = e === void 0 ? Ba : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function j0(e, t) {
  const n = e === void 0 ? Ba : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function kO({
  themes: e = L0,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: a = R0,
  onChange: i,
  label: c = "Theme",
  placeholder: s = "Theme…",
  id: l,
  size: d = "md",
  className: f
}) {
  const [u, g] = W(void 0), m = t !== void 0, y = t ?? u ?? P0(r, e) ?? n, p = y ?? "", x = ne(void 0);
  be(() => {
    if (m) return;
    const _ = document.documentElement;
    if (y === void 0) {
      x.current !== void 0 && _.getAttribute(a) === x.current && (_.removeAttribute(a), x.current = void 0);
      return;
    }
    _.setAttribute(a, y), x.current = y;
  }, [y, a, m]);
  const h = (_) => {
    const b = _.target.value;
    m || (g(b), j0(r, b)), i?.(b);
  };
  return /* @__PURE__ */ D("label", { className: [z0.wrapper, f].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ D(lr, { id: l, size: d, value: p, onChange: h, children: [
      y === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      y !== void 0 && !e.includes(y) && /* @__PURE__ */ o("option", { value: y, children: y }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function B0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function is(e) {
  const [t, n] = W(() => B0(e));
  return be(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const F0 = "_pressed_12x15_8", H0 = {
  pressed: F0
}, U0 = st(
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
    children: u,
    variant: g,
    severity: m,
    shade: y,
    ...p
  }, x) {
    const [h, _] = W(n), b = t ?? h, N = (v) => {
      const C = !b;
      t === void 0 && _(C), r?.(C), f?.(v);
    };
    return /* @__PURE__ */ o(
      ln,
      {
        ...p,
        ref: x,
        variant: b && a ? a : g,
        severity: b ? i : m,
        shade: b ? c : y,
        size: l,
        "aria-pressed": b,
        className: [b ? H0.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: b && s !== void 0 ? s : u
      }
    );
  }
), Fa = "dx-theme";
function W0(e) {
  const t = e === void 0 ? Fa : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function q0(e, t) {
  const n = e === void 0 ? Fa : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function NO({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = is("(prefers-color-scheme: dark)"), [d, f] = W(void 0), u = e !== void 0, g = e ?? d ?? W0(n) ?? t ?? "system", m = g === "system" ? l ? "dark" : "light" : g;
  return be(() => {
    if (!u) {
      if (g === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = g;
    }
  }, [g, u]), /* @__PURE__ */ o(
    U0,
    {
      id: i,
      size: s,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: m === "dark",
      onChange: (p) => {
        const x = p ? "dark" : "light";
        u || (f(x), q0(n, x)), r?.(x);
      },
      toggleContent: /* @__PURE__ */ o(Me, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Me, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Ha = "dx-palette", Ua = "dx-theme", Vo = "data-palette", Yo = "data-theme", Xo = /* @__PURE__ */ new Set();
function K0() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Vo), t = document.documentElement.getAttribute(Yo);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function cs(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Vo) : document.documentElement.setAttribute(Vo, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Yo) : document.documentElement.setAttribute(Yo, e.appearance));
}
function Wa(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function sa(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let aa = !1;
function kr() {
  const e = K0();
  if (!aa) {
    aa = !0;
    const t = sa(Ha), n = sa(Ua), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && cs(a), a;
  }
  return e;
}
function qa() {
  const e = kr();
  Xo.forEach((t) => t({ ...e }));
}
function la(e) {
  return Xo.add(e), () => {
    Xo.delete(e);
  };
}
function SO() {
  return kr().theme;
}
function G0(e) {
  const t = kr();
  t.theme !== e && (t.theme = e, cs(t), Wa(Ha, e), qa());
}
function OO() {
  return kr().appearance;
}
function V0(e) {
  const t = kr();
  t.appearance !== e && (t.appearance = e, cs(t), Wa(Ua, e), qa());
}
function $O() {
  const [, e] = W(0);
  be(() => la(() => e((n) => n + 1)), []);
  const t = kr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: G0,
    setAppearance: V0,
    subscribe: la
  };
}
function Y0(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (p, x) => Math.floor(Math.abs(Math.sin(x + 1)) * 4294967296)
  ), l = (p, x) => p + x | 0, d = (p, x) => p << x | p >>> 32 - x;
  let f = 1732584193, u = 4023233417, g = 2562383102, m = 271733878;
  for (let p = 0; p < r; p += 64) {
    const x = [];
    for (let v = 0; v < 16; v += 1)
      x.push(i.getUint32(p + v * 4, !0));
    let h = f, _ = u, b = g, N = m;
    for (let v = 0; v < 64; v += 1) {
      let C, S;
      v < 16 ? (C = _ & b | ~_ & N, S = v) : v < 32 ? (C = N & _ | ~N & b, S = (5 * v + 1) % 16) : v < 48 ? (C = _ ^ b ^ N, S = (3 * v + 5) % 16) : (C = b ^ (_ | ~N), S = 7 * v % 16), C = l(l(l(C, h), s[v]), x[S]), h = N, N = b, b = _, _ = l(_, d(C, c[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = l(f, h), u = l(u, _), g = l(g, b), m = l(m, N);
  }
  const y = (p) => {
    let x = "";
    for (let h = 0; h < 4; h += 1)
      x += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return x;
  };
  return y(f) + y(u) + y(g) + y(m);
}
const X0 = "_avatar_1mhfr_1", Z0 = "_xs_1mhfr_12", J0 = "_sm_1mhfr_18", Q0 = "_md_1mhfr_24", eb = "_lg_1mhfr_30", tb = "_xl_1mhfr_36", nb = "_initials_1mhfr_42", rb = "_image_1mhfr_57", ob = "_status_1mhfr_64", sb = "_online_1mhfr_84", ab = "_offline_1mhfr_88", lb = "_away_1mhfr_92", _r = {
  avatar: X0,
  xs: Z0,
  sm: J0,
  md: Q0,
  lg: eb,
  xl: tb,
  initials: nb,
  image: rb,
  status: ob,
  online: sb,
  offline: ab,
  away: lb
}, ib = {
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
function cb(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function db(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return go[t % go.length] ?? go[0];
}
function EO({
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
  const d = Oe(() => e ? cb(e) : "?", [e]), f = Oe(() => e ? db(e) : go[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${Y0(N)}?d=${r}&s=${ib[c]}&r=${a}`;
  }, [t, n, r, a, c]), g = t ?? u, [m, y] = W(null), p = g != null && m !== g, x = p && i === "", h = i ?? e ?? "avatar", _ = s ? `${h}, ${s}` : h, b = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: g,
        alt: x ? "" : s ? _ : h,
        onError: () => y(g ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: _r.initials,
      style: { background: f },
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
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        b,
        s && /* @__PURE__ */ o("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ub = "_root_zzwfz_1", fb = "_left_zzwfz_6", _b = "_right_zzwfz_7", pb = "_panel_zzwfz_12", hb = "_bottom_zzwfz_20", mb = "_tabList_zzwfz_24", gb = "_underline_zzwfz_53", yb = "_pills_zzwfz_72", bb = "_tab_zzwfz_24", xb = "_active_zzwfz_113", vb = "_disabled_zzwfz_139", Mn = {
  root: ub,
  left: fb,
  right: _b,
  panel: pb,
  bottom: hb,
  tabList: mb,
  underline: gb,
  pills: yb,
  tab: bb,
  active: xb,
  disabled: vb
};
function TO({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c
}) {
  const s = lt(), l = ne(null), [d, f] = W(
    n ?? e[0]?.key ?? ""
  ), u = t ?? d, g = i === "left" || i === "right", m = (x) => {
    f(x), r?.(x);
  }, y = (x) => {
    const h = e.filter((N) => !N.disabled), _ = h.findIndex((N) => N.key === u);
    let b = -1;
    x.key === "ArrowRight" || g && x.key === "ArrowDown" ? b = (_ + 1) % h.length : x.key === "ArrowLeft" || g && x.key === "ArrowUp" ? b = (_ - 1 + h.length) % h.length : x.key === "Home" ? b = 0 : x.key === "End" && (b = h.length - 1), b >= 0 && (x.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[b]?.key ?? "")}"]`
    )?.focus(), m(h[b]?.key ?? ""));
  }, p = e.find((x) => x.key === u);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Mn.root, Mn[i], c].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Mn.tabList, Mn[a], Mn[i]].filter(Boolean).join(" "),
            onKeyDown: y,
            children: e.map((x) => {
              const h = x.key === u;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${x.key}`,
                  "data-tab-key": x.key,
                  "aria-selected": h,
                  "aria-controls": `${s}-panel-${x.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: x.disabled,
                  className: [
                    Mn.tab,
                    h ? Mn.active : null,
                    x.disabled ? Mn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => m(x.key),
                  children: x.label
                },
                x.key
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
            className: Mn.panel,
            children: p.content
          }
        )
      ]
    }
  );
}
const wb = "_root_1l1j2_1", kb = "_item_1l1j2_9", Nb = "_heading_1l1j2_13", Sb = "_trigger_1l1j2_17", Ob = "_disabled_1l1j2_34", $b = "_title_1l1j2_48", Eb = "_chevron_1l1j2_52", Tb = "_open_1l1j2_59", Cb = "_content_1l1j2_63", In = {
  root: wb,
  item: kb,
  heading: Nb,
  trigger: Sb,
  disabled: Ob,
  title: $b,
  chevron: Eb,
  open: Tb,
  content: Cb
};
function CO({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const c = lt(), [s, l] = W(
    r ?? []
  ), d = n ?? s, f = (u) => {
    const g = d.includes(u) ? d.filter((m) => m !== u) : t ? [...d, u] : [u];
    l(g), a?.(g);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const g = d.includes(u.key), m = `${c}-panel-${u.key}`, y = `${c}-trigger-${u.key}`;
    return /* @__PURE__ */ D("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: y,
          "aria-expanded": g,
          "aria-controls": m,
          disabled: u.disabled,
          className: [
            In.trigger,
            u.disabled ? In.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(u.key),
          children: [
            /* @__PURE__ */ o("span", { className: In.title, children: u.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [In.chevron, g ? In.open : null].filter(Boolean).join(" "),
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
          "aria-labelledby": y,
          hidden: !g,
          className: In.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const Ab = "_textarea_l7fsl_1", Db = "_invalid_l7fsl_27", Mb = "_xs_l7fsl_34", Ib = "_sm_l7fsl_39", zb = "_md_l7fsl_44", Lb = "_lg_l7fsl_49", Rb = "_xl_l7fsl_54", uo = {
  textarea: Ab,
  invalid: Db,
  xs: Mb,
  sm: Ib,
  md: zb,
  lg: Lb,
  xl: Rb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, AO = st(
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
), Pb = "_root_xyp2i_1", jb = "_trigger_xyp2i_9", Bb = "_invalid_xyp2i_40", Fb = "_placeholder_xyp2i_47", Hb = "_label_xyp2i_54", Ub = "_chevron_xyp2i_60", Wb = "_chevronOpen_xyp2i_70", qb = "_menu_xyp2i_74", Kb = "_option_xyp2i_89", Gb = "_disabled_xyp2i_100", Vb = "_active_xyp2i_104", Yb = "_selected_xyp2i_105", Xb = "_header_xyp2i_115", Zb = "_xs_xyp2i_122", Jb = "_sm_xyp2i_128", Qb = "_md_xyp2i_134", ex = "_lg_xyp2i_140", tx = "_xl_xyp2i_146", Ht = {
  root: Pb,
  trigger: jb,
  invalid: Bb,
  placeholder: Fb,
  label: Hb,
  chevron: Ub,
  chevronOpen: Wb,
  menu: qb,
  option: Kb,
  disabled: Gb,
  active: Vb,
  selected: Yb,
  header: Xb,
  xs: Zb,
  sm: Jb,
  md: Qb,
  lg: ex,
  xl: tx
}, nx = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function DO({
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
  const f = lt(), u = `${f}-listbox`, g = ne(null), m = ne(null), [y, p] = W(
    n
  ), [x, h] = W(!1), _ = t ?? y, b = e.map(
    (w, k) => w.label === "" || w.disabled ? -1 : k
  ).filter((w) => w >= 0), N = e.findIndex(
    (w) => w.value === _
  ), [v, C] = W(
    () => b.includes(0) ? 0 : b[0] ?? -1
  ), S = B(() => {
    if (s) return;
    const w = N >= 0 && b.includes(N) ? N : b[0];
    C(w ?? -1), h(!0);
  }, [s, N, b]), $ = B(() => {
    h(!1), m.current?.focus();
  }, []);
  be(() => {
    if (!x) return;
    const w = (k) => {
      g.current && !g.current.contains(k.target) && h(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [x]);
  const E = (w) => {
    p(w), r?.(w), h(!1), m.current?.focus();
  }, I = (w) => {
    if (b.length === 0) return;
    const k = b.includes(v) ? b.indexOf(v) : 0, A = b[(k + w + b.length) % b.length];
    A != null && C(A);
  }, M = (w) => {
    if (!x) {
      w.key === "ArrowDown" && (w.preventDefault(), S());
      return;
    }
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), I(1);
        break;
      case "ArrowUp":
        w.preventDefault(), I(-1);
        break;
      case "Home":
        w.preventDefault(), b[0] != null && C(b[0]);
        break;
      case "End":
        w.preventDefault(), b[b.length - 1] != null && C(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        w.preventDefault(), v >= 0 && e[v] && b.includes(v) && E(e[v]?.value ?? "");
        break;
      case "Escape":
        w.preventDefault(), $();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, T = e.find(
    (w) => w.value === _
  );
  return /* @__PURE__ */ D(
    "div",
    {
      ref: g,
      className: [Ht.root, l].filter(Boolean).join(" "),
      onKeyDown: M,
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: m,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": x,
            "aria-controls": u,
            "aria-invalid": c || void 0,
            disabled: s,
            className: [
              Ht.trigger,
              Ht[i],
              x ? Ht.open : null,
              c ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => x ? h(!1) : S(),
            ...d,
            children: [
              /* @__PURE__ */ o("span", { className: T ? Ht.label : Ht.placeholder, children: T ? T.label : a }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [Ht.chevron, x ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: nx },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        x && /* @__PURE__ */ o(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
            className: Ht.menu,
            children: e.map(
              (w, k) => w.label === "" ? /* @__PURE__ */ o(
                "div",
                {
                  className: Ht.header,
                  role: "presentation",
                  children: w.value
                },
                w.value
              ) : /* @__PURE__ */ o(
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
                    w.disabled || E(w.value);
                  },
                  onMouseEnter: () => {
                    !w.disabled && w.label !== "" && C(k);
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
const rx = "_root_1ma8a_1", ox = "_wrap_1ma8a_9", sx = "_input_1ma8a_26", ax = "_invalid_1ma8a_31", lx = "_clear_1ma8a_58", ix = "_menu_1ma8a_83", cx = "_option_1ma8a_98", dx = "_disabled_1ma8a_109", ux = "_active_1ma8a_113", fx = "_empty_1ma8a_123", _x = "_xs_1ma8a_129", px = "_sm_1ma8a_136", hx = "_md_1ma8a_143", mx = "_lg_1ma8a_150", gx = "_xl_1ma8a_157", dn = {
  root: rx,
  wrap: ox,
  input: sx,
  invalid: ax,
  clear: lx,
  menu: ix,
  option: cx,
  disabled: dx,
  active: ux,
  empty: fx,
  xs: _x,
  sm: px,
  md: hx,
  lg: mx,
  xl: gx
}, yx = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function MO({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: c = "md",
  invalid: s = !1,
  disabled: l = !1,
  filter: d = yx,
  className: f,
  ...u
}) {
  const g = lt(), m = `${g}-listbox`, y = ne(null), p = ne(null), [x, h] = W(n), [_, b] = W(!1), N = t ?? x, v = Oe(
    () => N.trim() === "" ? [...e] : e.filter((z) => d(z, N)),
    [e, N, d]
  ), C = v.map((z, j) => z.disabled ? -1 : j).filter((z) => z >= 0), [S, $] = W(-1), E = (z) => {
    h(z), r?.(z);
  }, I = (z) => {
    E(z.label), a?.(z.value, z), b(!1);
  }, M = (z) => {
    if (C.length === 0) return;
    const j = C.includes(S) ? C.indexOf(S) : z === 1 ? -1 : 0, F = C[(j + z + C.length) % C.length];
    F != null && $(F);
  }, T = (z) => {
    l || (E(z.target.value), b(!0), $(-1));
  }, w = () => {
    l || N !== "" && b(!0);
  }, k = (z) => {
    y.current && !y.current.contains(z.relatedTarget) && b(!1);
  }, A = (z) => {
    if (!l)
      switch (z.key) {
        case "ArrowDown":
          z.preventDefault(), _ ? M(1) : (b(!0), $(C[0] ?? -1));
          break;
        case "ArrowUp":
          z.preventDefault(), _ && M(-1);
          break;
        case "Enter":
          z.preventDefault(), _ && S >= 0 && v[S] && I(v[S]);
          break;
        case "Escape":
          z.preventDefault(), b(!1);
          break;
        case "Tab":
          _ && S >= 0 && v[S] && I(v[S]), b(!1);
          break;
      }
  }, R = () => {
    E(""), $(-1), b(!0), p.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: y,
      className: [dn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: [dn.wrap, dn[c], s ? dn.invalid : null].filter(Boolean).join(" "),
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
                  "aria-activedescendant": _ && S >= 0 ? `${g}-option-${S}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: N,
                  placeholder: i,
                  className: dn.input,
                  onChange: T,
                  onFocus: w,
                  onBlur: k,
                  onKeyDown: A,
                  ...u
                }
              ),
              N !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: dn.clear,
                  "aria-label": "Clear",
                  onClick: R,
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
          /* @__PURE__ */ o("div", { id: m, className: dn.menu, children: /* @__PURE__ */ o("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: dn.menu, children: v.map((z, j) => /* @__PURE__ */ o(
          "div",
          {
            id: `${g}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": z.disabled || void 0,
            className: [
              dn.option,
              j === S ? dn.active : null,
              z.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              z.disabled || I(z);
            },
            onMouseDown: (F) => {
              F.preventDefault(), z.disabled || I(z);
            },
            onMouseEnter: () => {
              z.disabled || $(j);
            },
            children: z.label
          },
          z.value
        )) }))
      ]
    }
  );
}
const bx = "_box_muvqe_1", xx = "_option_muvqe_12", vx = "_disabled_muvqe_23", wx = "_selected_muvqe_27", kx = "_active_muvqe_33", Pr = {
  box: bx,
  option: xx,
  disabled: vx,
  selected: wx,
  active: kx
};
function IO({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...s
}) {
  const l = lt(), [d, f] = W(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? d : Array.isArray(t) ? t : [t], g = e.findIndex((v) => !v.disabled), [m, y] = W(
    () => g >= 0 ? g : 0
  ), p = ne(""), x = ne(null), h = (v) => {
    f(v), a?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), b = (v) => {
    const C = e[v];
    if (!(!C || C.disabled))
      if (y(v), r) {
        const S = u.includes(C.value) ? u.filter(($) => $ !== C.value) : [...u, C.value];
        h(S);
      } else
        h([C.value]);
  }, N = (v) => {
    if (_.length === 0) return;
    const C = _.includes(m) ? m : _[0];
    let S = -1;
    if (v.key === "ArrowDown")
      S = _[(_.indexOf(C) + 1) % _.length];
    else if (v.key === "ArrowUp")
      S = _[(_.indexOf(C) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      S = _[0];
    else if (v.key === "End")
      S = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), b(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const $ = (p.current + v.key).toLowerCase();
      p.current = $, x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const E = [..._, ..._], I = _.indexOf(C) + 1, M = E.slice(I).find((T) => e[T]?.label.toLowerCase().startsWith($));
      M != null && y(M);
      return;
    }
    S >= 0 && (v.preventDefault(), y(S), r || h([e[S]?.value ?? ""]));
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
      children: e.map((v, C) => {
        const S = u.includes(v.value), $ = C === m;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${l}-option-${C}`,
            role: "option",
            "aria-selected": S,
            "aria-disabled": v.disabled || void 0,
            className: [
              Pr.option,
              S ? Pr.selected : null,
              $ ? Pr.active : null,
              v.disabled ? Pr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b(C),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const Nx = "_group_oinj7_1", Sx = "_legend_oinj7_8", Ox = "_list_oinj7_16", $x = "_item_oinj7_25", Ex = "_disabled_oinj7_32", Tx = "_label_oinj7_37", Cx = "_checkbox_oinj7_48", Qn = {
  group: Nx,
  legend: Sx,
  list: Ox,
  item: $x,
  disabled: Ex,
  label: Tx,
  checkbox: Cx
};
function zO({
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
  ]), d = t ?? s, f = (u, g) => {
    const m = g ? [...d, u] : d.filter((y) => y !== u);
    l(m), r?.(m);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Qn.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: Qn.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: Qn.list, children: e.map((u) => {
      const g = d.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Qn.item, u.disabled ? Qn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Qn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Qn.checkbox,
                name: i,
                value: u.value,
                checked: g,
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
const Ax = "_group_46668_1", Dx = "_legend_46668_8", Mx = "_list_46668_16", Ix = "_item_46668_25", zx = "_disabled_46668_32", Lx = "_label_46668_37", Rx = "_radio_46668_48", er = {
  group: Ax,
  legend: Dx,
  list: Mx,
  item: Ix,
  disabled: zx,
  label: Lx,
  radio: Rx
};
function LO({
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
  ), d = t ?? s, f = (u) => {
    l(u), r?.(u);
  };
  return /* @__PURE__ */ D("fieldset", { className: [er.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: er.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: er.list, children: e.map((u) => {
      const g = u.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [er.item, u.disabled ? er.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: er.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: er.radio,
                name: i,
                value: u.value,
                checked: g,
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
const Px = "_bar_9zyxn_1", jx = "_vertical_9zyxn_12", Bx = "_option_9zyxn_17", Fx = "_selected_9zyxn_40", Hx = "_sm_9zyxn_56", Ux = "_md_9zyxn_62", Wx = "_lg_9zyxn_68", pr = {
  bar: Px,
  vertical: jx,
  option: Bx,
  selected: Fx,
  sm: Hx,
  md: Ux,
  lg: Wx
};
function ia(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function RO(e) {
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
  } = e, f = a ?? !1, [u, g] = W(r ?? (f ? [] : t[0]?.value)), m = n ?? u, y = a === !0 || a === void 0 && Array.isArray(m), p = (h) => {
    if (!y) {
      g(h), c?.(h);
      return;
    }
    const _ = ia(m), b = _.includes(h) ? _.filter((N) => N !== h) : [..._, h];
    g(b), c?.(b);
  }, x = (h) => y ? ia(m).includes(h) : m === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        pr.bar,
        pr[s],
        i === "vertical" ? pr.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...d,
      children: t.map((h) => {
        const _ = x(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: h.disabled,
            className: [
              pr.option,
              _ ? pr.selected : null,
              h.disabled ? pr.disabled : null
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
const qx = "_root_11hdr_1", Kx = "_action_11hdr_10", Gx = "_caret_11hdr_15", Vx = "_sm_11hdr_49", Yx = "_md_11hdr_53", Xx = "_lg_11hdr_57", Zx = "_fullWidth_11hdr_62", Jx = "_menu_11hdr_70", Qx = "_item_11hdr_83", ev = "_itemIcon_11hdr_105", tv = "_disabled_11hdr_110", nv = "_active_11hdr_114", rv = "_danger_11hdr_123", bn = {
  root: qx,
  action: Kx,
  caret: Gx,
  sm: Vx,
  md: Yx,
  lg: Xx,
  fullWidth: Zx,
  menu: Jx,
  item: Qx,
  itemIcon: ev,
  disabled: tv,
  active: nv,
  danger: rv
}, PO = st(
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
    disabled: u = !1,
    className: g,
    "aria-label": m,
    openAriaLabel: y = "More actions",
    ...p
  }, x) {
    const _ = `${lt()}-menu`, b = ne(null), N = ne(null), v = ne([]), [C, S] = W(!1), [$, E] = W(-1), I = u || l, M = Oe(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), T = B(() => {
      I || (E(M[0] ?? -1), S(!0));
    }, [I, M]), w = B(() => {
      S(!1), N.current?.focus();
    }, []);
    be(() => {
      if (!C) return;
      const F = (X) => {
        b.current && !b.current.contains(X.target) && S(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [C]), be(() => {
      C && (I || !d) && S(!1);
    }, [C, I, d]);
    const k = ne(C);
    if (be(() => {
      const F = k.current;
      if (k.current = C, !C || F) return;
      const X = M.includes($) ? $ : M[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [C, $, M]), d === !1) return null;
    const A = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), S(!1), N.current?.focus());
    }, R = (F) => {
      if (M.length === 0) return;
      const X = M.includes($) ? M.indexOf($) : F === 1 ? -1 : 0, ie = M[(X + F + M.length) % M.length];
      ie != null && (E(ie), v.current[ie]?.focus());
    }, z = (F) => {
      const X = F === "first" ? M[0] : M[M.length - 1];
      X != null && (E(X), v.current[X]?.focus());
    }, j = (F) => {
      switch (F.key) {
        case "ArrowDown":
          F.preventDefault(), R(1);
          break;
        case "ArrowUp":
          F.preventDefault(), R(-1);
          break;
        case "Home":
          F.preventDefault(), z("first");
          break;
        case "End":
          F.preventDefault(), z("last");
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
          b.current = F, typeof x == "function" ? x(F) : x && (x.current = F);
        },
        className: [
          bn.root,
          bn[s],
          f ? bn.fullWidth : null,
          g
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            ln,
            {
              className: bn.action,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              loading: l,
              disabled: u,
              "aria-label": m,
              onClick: () => {
                C && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            ln,
            {
              ref: N,
              className: bn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: I,
              "aria-haspopup": "menu",
              "aria-expanded": C,
              "aria-controls": _,
              "aria-label": y,
              onClick: () => C ? S(!1) : T(),
              onKeyDown: (F) => {
                !C && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), T());
              },
              children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          C && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": y,
              className: bn.menu,
              onKeyDown: j,
              ...p,
              children: r.map((F, X) => /* @__PURE__ */ D(
                "button",
                {
                  ref: (ie) => {
                    v.current[X] = ie;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: X === $ ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    bn.item,
                    X === $ ? bn.active : null,
                    F.danger ? bn.danger : null,
                    F.disabled ? bn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => A(X),
                  onMouseEnter: () => {
                    F.disabled || E(X);
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
), ov = "_mask_rcv90_1", sv = "_invalid_rcv90_31", av = "_xs_rcv90_38", lv = "_sm_rcv90_44", iv = "_md_rcv90_50", cv = "_lg_rcv90_56", dv = "_xl_rcv90_62", Bo = {
  mask: ov,
  invalid: sv,
  xs: av,
  sm: lv,
  md: iv,
  lg: cv,
  xl: dv
};
function ca(e, t) {
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
const jO = st(function({
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
  const [u, g] = W(i ?? ""), m = a !== void 0, y = m ? a ?? "" : u, p = (_) => {
    const b = ca(_, r);
    return m || g(b), c?.(b), b;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: y,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const b = _.currentTarget.selectionStart ?? y.length, N = y[b - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const v = y.replace(/\D/g, "");
            p(ca(v.slice(0, -1), r));
          }
        }
        l?.(_);
      },
      className: [
        Bo.mask,
        Bo[t],
        n ? Bo.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), uv = "_wrapper_12jdf_1", fv = "_input_12jdf_8", _v = "_invalid_12jdf_38", pv = "_button_12jdf_45", hv = "_up_12jdf_77", mv = "_down_12jdf_82", gv = "_xs_12jdf_87", yv = "_sm_12jdf_93", bv = "_md_12jdf_99", xv = "_lg_12jdf_105", vv = "_xl_12jdf_111", Vn = {
  wrapper: uv,
  input: fv,
  invalid: _v,
  button: pv,
  up: hv,
  down: mv,
  xs: gv,
  sm: yv,
  md: bv,
  lg: xv,
  xl: vv
};
function Zo(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function wv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Ka(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function kv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Nv(e, t, n, r, a) {
  const c = Zo(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Ka(s, n, r);
}
const BO = st(
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
    incrementLabel: u = "Increment",
    decrementLabel: g = "Decrement",
    onBlur: m,
    onKeyDown: y,
    ...p
  }, x) {
    const [h, _] = W(
      c != null ? String(c) : ""
    ), b = i !== void 0, N = b ? i == null ? "" : String(i) : h, v = (M) => {
      b || _(M), s?.(Zo(M));
    }, C = (M) => {
      b || _(String(M)), s?.(M);
    }, S = (M) => {
      a || C(Nv(N, M, l, d, f));
    }, $ = (M) => {
      v(wv(M.target.value));
    }, E = (M) => {
      M.key === "ArrowUp" ? (M.preventDefault(), S(1)) : M.key === "ArrowDown" && (M.preventDefault(), S(-1)), y?.(M);
    }, I = (M) => {
      const T = Zo(N);
      T === null ? (b || _(""), s?.(null)) : C(Ka(kv(T, l, f), l, d)), m?.(M);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: x,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: a,
            onChange: $,
            onKeyDown: E,
            onBlur: I,
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
            "aria-label": u,
            disabled: a,
            onClick: () => S(1),
            children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 14 })
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
}, Sv = [
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
function sn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Jo(e) {
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
function Ov({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function $v({ r: e, g: t, b: n }) {
  const r = e / 255, a = t / 255, i = n / 255, c = Math.max(r, a, i), s = Math.min(r, a, i), l = c - s;
  let d = 0;
  return l !== 0 && (c === r ? d = (a - i) / l % 6 : c === a ? d = (i - r) / l + 2 : d = (r - a) / l + 4, d *= 60, d < 0 && (d += 360)), {
    h: d,
    s: c === 0 ? 0 : l / c,
    v: c
  };
}
function hr({ h: e, s: t, v: n }) {
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
function Ev(e) {
  const t = Jo(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: sn(Number(n[1]), 0, 255),
    g: sn(Number(n[2]), 0, 255),
    b: sn(Number(n[3]), 0, 255),
    a: n[4] != null ? sn(Number(n[4]), 0, 1) : 1
  } : null;
}
function da({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const FO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = Sv,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: f = "md",
  tabIndex: u = 0,
  className: g,
  onChange: m,
  onValueChange: y,
  onOpen: p,
  onClose: x
}) => {
  const h = ne(null), _ = ne(null), b = ne(null), N = ne(null), v = ne(null), C = lt(), S = ne(null), $ = Oe(
    () => Ev(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = W(!1), [M, T] = W(null), w = M ?? $, k = Oe(() => $v(w), [w]), A = B(
    (Z) => {
      const L = da(Z);
      m?.(L), y?.(L);
    },
    [m, y]
  ), R = B(
    (Z, L) => {
      T(Z), L && !i && A(Z);
    },
    [i, A]
  ), z = B(() => {
    I(!1), T(null), x?.(), _.current?.focus();
  }, [x]), j = B(() => {
    s || (T($), I(!0), p?.());
  }, [s, $, p]), F = B(() => {
    E ? z() : j();
  }, [E, z, j]), X = B(
    (Z, L) => {
      const Y = b.current;
      if (!Y) return k;
      const Q = Y.getBoundingClientRect(), ge = sn((Z - Q.left) / Q.width, 0, 1), le = sn(1 - (L - Q.top) / Q.height, 0, 1);
      return { h: k.h, s: ge, v: le };
    },
    [k]
  ), ie = B(
    (Z, L) => {
      if (!L) return 0;
      const Y = L.getBoundingClientRect();
      return sn((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "sat";
    const L = X(Z.clientX, Z.clientY);
    R({ ...hr(L), a: w.a }, !0);
  }, we = (Z) => {
    if (S.current !== "sat") return;
    Z.preventDefault();
    const L = X(Z.clientX, Z.clientY);
    R({ ...hr(L), a: w.a }, !0);
  }, ae = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "hue";
    const L = ie(Z.clientX, N.current);
    R(
      { ...hr({ ...k, h: L * 360 }), a: w.a },
      !0
    );
  }, _e = (Z) => {
    if (S.current !== "hue") return;
    Z.preventDefault();
    const L = ie(Z.clientX, N.current);
    R(
      { ...hr({ ...k, h: L * 360 }), a: w.a },
      !0
    );
  }, K = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "alpha";
    const L = ie(Z.clientX, v.current);
    R({ ...w, a: L }, !0);
  }, me = (Z) => {
    if (S.current !== "alpha") return;
    Z.preventDefault();
    const L = ie(Z.clientX, v.current);
    R({ ...w, a: L }, !0);
  }, ue = () => {
    S.current = null;
  }, xe = B(
    (Z, L) => {
      const Y = {
        h: k.h,
        s: sn(k.s + Z, 0, 1),
        v: sn(k.v + L, 0, 1)
      };
      R({ ...hr(Y), a: w.a }, !0);
    },
    [k, w.a, R]
  ), pe = B(
    (Z) => {
      const L = (k.h + Z + 360) % 360;
      R({ ...hr({ ...k, h: L }), a: w.a }, !0);
    },
    [k, w.a, R]
  ), De = B(
    (Z) => {
      R({ ...w, a: sn(w.a + Z, 0, 1) }, !0);
    },
    [w, R]
  ), G = (Z) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), xe(-0.05, 0);
        break;
      case "ArrowRight":
        Z.preventDefault(), xe(0.05, 0);
        break;
      case "ArrowUp":
        Z.preventDefault(), xe(0, 0.05);
        break;
      case "ArrowDown":
        Z.preventDefault(), xe(0, -0.05);
        break;
      case "Escape":
        Z.preventDefault(), z();
        break;
    }
  }, $e = (Z, L) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), L === "hue" ? pe(-6) : De(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), L === "hue" ? pe(6) : De(0.05);
        break;
      case "Escape":
        Z.preventDefault(), z();
        break;
    }
  }, re = (Z, L) => {
    if (Z === "hex") {
      const le = Jo(L);
      le && R({ ...le, a: w.a }, !0);
      return;
    }
    const Y = L.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const le = Y.includes(".") ? sn(Q, 0, 1) : sn(Q / 100, 0, 1);
      R({ ...w, a: le }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    R(
      { ...w, [Z]: sn(Q, 0, ge[Z]) },
      !0
    );
  }, Ae = () => {
    M && (A(M), T(null), I(!1), x?.(), _.current?.focus());
  };
  be(() => {
    if (!E) return;
    const Z = (L) => {
      h.current && !h.current.contains(L.target) && z();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [E, z]), be(() => {
    if (!E) return;
    const Z = (L) => {
      L.key === "Escape" && z();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [E, z]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = da(w), Ge = Ov(w), Je = { x: k.s * 100, y: (1 - k.v) * 100 }, At = k.h / 360 * 100, it = w.a * 100, bt = /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
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
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${k.h}, 100%, 50%)`
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
        "aria-valuenow": Math.round(k.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-hue-picker"],
        onKeyDown: (Z) => $e(Z, "hue"),
        onPointerDown: ae,
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
        "aria-valuenow": Math.round(it),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${k.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => $e(Z, "alpha"),
        onPointerDown: K,
        onPointerMove: me,
        onPointerUp: ue,
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
    n && /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: w.r,
            onChange: (Z) => re("r", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: w.g,
            onChange: (Z) => re("g", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: w.b,
            onChange: (Z) => re("b", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(w.a * 100),
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
        tabIndex: s ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const L = Jo(Z);
          i ? R({ ...L, a: w.a }, !1) : (T(null), A({ ...L, a: w.a }), I(!1), x?.(), _.current?.focus());
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
  return /* @__PURE__ */ D(
    "div",
    {
      ref: h,
      className: [
        Re["dx-colorpicker"],
        E ? Re["dx-colorpicker-open"] : null,
        l ? Re["dx-colorpicker-invalid"] : null,
        g
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: _,
            type: "button",
            className: [Re["dx-colorpicker-trigger"], fe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && E && (Z.preventDefault(), z());
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
              c && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ o(
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
}, Tv = 42;
function an(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${an(e.month)}-${an(e.day)}`;
}
function Cv(e, t) {
  const n = Yt(e);
  return t ? `${n} ${an(e.hour)}:${an(e.minute)}:${an(e.second)}` : n;
}
function Qo(e) {
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
function ua(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const fa = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => an(e.year % 100),
  MM: (e) => an(e.month),
  M: (e) => String(e.month),
  dd: (e) => an(e.day),
  d: (e) => String(e.day),
  HH: (e) => an(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => an(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => an(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((a) => a.type === "dayPeriod")?.value ?? ""
}, Av = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Dv = ["y", "M", "d", "H", "m", "s"];
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
    for (const l of Av)
      if (t.startsWith(l, i)) {
        a += fa[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if (Dv.includes(s)) {
      a += fa[s](e, r, n), i += 1;
      continue;
    }
    a += s, i += 1;
  }
  return a;
}
const Mv = [
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
function Iv(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let s = null;
    for (const l of Mv)
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
  const n = Qo(e);
  return n || Iv(e, t);
}
function zv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Lv = ["hour", "minute", "second"];
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
const HO = st(
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
    inline: u = !1,
    disabledDates: g,
    locale: m = "en-US",
    onChange: y,
    onValueChange: p,
    onOpen: x,
    onClose: h,
    disabled: _,
    readOnly: b,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: C,
    clearLabel: S,
    tabIndex: $,
    className: E,
    onBlur: I,
    onKeyDown: M,
    ...T
  }, w) {
    const k = ne(null), A = ne(null), R = ne(null), z = ne(null), j = lt(), F = r !== void 0, [X, ie] = W(
      () => a != null ? _o(
        jr(a, i) ?? Yn(),
        i,
        m
      ) : ""
    ), [te, we] = W(!1), [ae, _e] = W(null), [K, me] = W(() => {
      const V = r !== void 0 ? r ?? "" : a ?? "";
      if (V) {
        const he = jr(V, i);
        if (he) return he;
      }
      return Yn();
    }), ue = Oe(() => c ? Qo(c) : null, [c]), xe = Oe(() => s ? Qo(s) : null, [s]), pe = Oe(
      () => new Set(g ?? []),
      [g]
    ), De = Oe(() => {
      const V = F ? r ?? "" : X;
      return V ? jr(V, i) : null;
    }, [r, X, F, i]), G = B(
      (V) => {
        const he = Yt(V);
        return !!(pe.has(he) || ue && he < Yt(ue) || xe && he > Yt(xe));
      },
      [pe, ue, xe]
    ), $e = B(
      (V) => {
        if (!G(V)) return V;
        for (let he = 1; he <= 366; he += 1) {
          const Ve = zn(V, he);
          if (!G(Ve)) return Ve;
          const Ye = zn(V, -he);
          if (!G(Ye)) return Ye;
        }
        return V;
      },
      [G]
    ), re = B(
      (V) => {
        F || ie(V ? _o(V, i, m) : "");
        const he = V ? Cv(V, l) : "";
        y?.(he), p?.(he);
      },
      [F, i, m, l, y, p]
    ), Ae = B(
      (V) => {
        A.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), h?.(), u || R.current?.focus();
    }, [u, h]), Fe = B(() => {
      if (_) return;
      const V = De ?? Yn();
      _e(V), me($e(V)), we(!0), x?.();
    }, [_, De, $e, x]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Je = B((V) => {
      z.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), At = B(
      (V) => {
        if (G(V)) return;
        const he = ae ?? De, Ye = {
          ...l ? {
            hour: he?.hour ?? 0,
            minute: he?.minute ?? 0,
            second: he?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: V.year,
          month: V.month,
          day: V.day
        };
        _e(Ye), l || (re(Ye), fe());
      },
      [G, ae, De, l, re, fe]
    ), it = B(
      (V, he) => {
        _e((Ve) => {
          const Ye = Ve ?? De ?? Yn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + he));
          return { ...Ye, [V]: Xe };
        });
      },
      [De]
    ), bt = B(
      (V, he) => {
        const Ve = he.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? De ?? Yn(), [V]: Math.min(Pt, Ye) }));
      },
      [De]
    ), Z = B(() => {
      ae && (re(ae), fe());
    }, [ae, re, fe]), L = B(() => {
      if (te) return;
      const V = jr(X, i);
      re(V ? zv(V, ue, xe) : null);
    }, [te, X, i, ue, xe, re]), Y = (V) => {
      const he = V.target.value;
      F || ie(he), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? ae && (re(ae), fe()) : L()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), M?.(V);
    }, ge = (V) => {
      L(), I?.(V);
    }, le = (V) => {
      let he = null;
      switch (V.key) {
        case "ArrowLeft":
          he = zn(K, -1), V.preventDefault();
          break;
        case "ArrowRight":
          he = zn(K, 1), V.preventDefault();
          break;
        case "ArrowUp":
          he = zn(K, -7), V.preventDefault();
          break;
        case "ArrowDown":
          he = zn(K, 7), V.preventDefault();
          break;
        case "Home":
          he = zn(K, -ua(K)), V.preventDefault();
          break;
        case "End":
          he = zn(K, 6 - ua(K)), V.preventDefault();
          break;
        case "PageUp":
          he = fo(K, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          he = fo(K, V.shiftKey ? 12 : 1), V.preventDefault();
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
      if (he) {
        const Ve = $e(he);
        me(Ve), setTimeout(() => Je(Ve), 0);
      }
    };
    be(() => {
      if (!te) return;
      const V = (he) => {
        k.current && !k.current.contains(he.target) && fe();
      };
      return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
    }, [te, fe]), be(() => {
      if (!te) return;
      const V = (he) => {
        he.key === "Escape" && fe();
      };
      return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
    }, [te, fe]);
    const Ee = () => {
      F || ie(""), y?.(""), p?.(""), A.current?.focus();
    }, je = te && ae ? _o(ae, i, m) : F ? r ? _o(
      jr(r, i) ?? Yn(),
      i,
      m
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: K.year, month: K.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), oe = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < Tv; V += 1)
      Le.push(zn(oe, V - Xt));
    const Nt = ae ? Yt(ae) : De ? Yt(De) : null, Rt = Yt(Yn()), xt = `${nt.year}-${an(nt.month)}`, Ie = Oe(
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
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, he) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + he)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], ct = /* @__PURE__ */ D(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const V = $e(fo(K, -1));
                  me(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ o(Me, { icon: "chevron_left", size: 16 })
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
                  const V = $e(fo(K, 1));
                  me(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ o(Me, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
            "div",
            {
              ref: z,
              role: "grid",
              className: Ue["dx-datepicker-grid"],
              onKeyDown: le,
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
                Array.from({ length: 6 }, (V, he) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: Le.slice(he * 7, he * 7 + 7).map((Ve) => {
                      const Ye = Yt(Ve), Pt = G(Ve), Xe = Ye.startsWith(xt);
                      return /* @__PURE__ */ o(
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
                          onFocus: () => me(Ve),
                          children: Ve.day
                        },
                        Ye
                      );
                    })
                  },
                  he
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time"], children: [
            Lv.map((V) => /* @__PURE__ */ D("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-time-label"], children: po(V) }),
              /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": po(V),
                    value: an(
                      (ae ?? De ?? Yn())[V]
                    ),
                    onChange: (he) => bt(V, he.target.value),
                    onKeyDown: (he) => {
                      he.key === "ArrowUp" ? (he.preventDefault(), it(V, 1)) : he.key === "ArrowDown" ? (he.preventDefault(), it(V, -1)) : he.key === "Enter" && (he.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${po(V).toLowerCase()}`,
                      onClick: () => it(V, 1),
                      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${po(V).toLowerCase()}`,
                      onClick: () => it(V, -1),
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
    return /* @__PURE__ */ D(
      "div",
      {
        ref: k,
        className: [
          Ue["dx-datepicker"],
          u ? Ue["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ D(at, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: b,
                placeholder: N,
                tabIndex: $,
                role: d ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": d ? void 0 : "dialog",
                "aria-expanded": d ? void 0 : Qe,
                "aria-controls": d ? void 0 : j,
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
                  d || Ge();
                },
                ...T
              }
            ),
            f && !_ && Ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  d ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
                onClick: Ee,
                children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: R,
                type: "button",
                className: [Ue["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
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
}, UO = ({
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
  const [u, g] = W(e), m = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), y = B(
    (_) => {
      d?.(_), f?.(_);
    },
    [d, f]
  ), p = B(
    (_) => {
      n || r || (y(_), g(_));
    },
    [n, r, y]
  ), x = (_) => {
    if (n || r) return;
    const b = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), p(m(b + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), p(m(b - 1));
        break;
      case "Home":
        _.preventDefault(), p(1);
        break;
      case "End":
        _.preventDefault(), p(t);
        break;
    }
  }, h = Array.from({ length: t }, (_, b) => b + 1);
  return /* @__PURE__ */ D(
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
      onKeyDown: x,
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
            children: /* @__PURE__ */ o(Me, { icon: "block", size: 16 })
          }
        ),
        h.map((_) => {
          const b = _ <= e, N = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": b,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${c} ${_}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                b ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(_),
              onFocus: () => g(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Xn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Me, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Xn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "star", size: 20 }) })
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
function On(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const WO = ({
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
  maxLabel: u = "Max",
  tabIndex: g = 0,
  className: m,
  onChange: y,
  onInput: p,
  onValueChange: x,
  onInputChange: h
}) => {
  const _ = ne(null), b = ne(
    null
  ), [N, v] = W(null), C = N ?? e, S = Oe(
    () => On(C, r, a),
    [C, r, a]
  ), $ = Oe(
    () => On(c ? t : S, r, a),
    [c, t, S, r, a]
  ), E = Oe(
    () => On(c ? Math.max(n, $) : S, r, a),
    [c, n, $, S, r, a]
  ), I = B(
    (K) => {
      const me = a - r;
      return me <= 0 ? 0 : (On(K, r, a) - r) / me * 100;
    },
    [r, a]
  ), M = B(
    (K, me) => {
      const ue = _.current;
      if (!ue) return r;
      const xe = ue.getBoundingClientRect();
      let pe;
      s === "vertical" ? pe = 1 - (me - xe.top) / xe.height : pe = (K - xe.left) / xe.width;
      const De = r + On(pe, 0, 1) * (a - r);
      return i > 0 ? On(Math.round(De / i) * i, r, a) : On(De, r, a);
    },
    [r, a, i, s]
  ), T = B(
    (K) => {
      typeof K == "number" && v(K), y?.(K), x?.(K);
    },
    [y, x]
  ), w = B(
    (K) => {
      typeof K == "number" && v(K), p?.(K), h?.(K);
    },
    [p, h]
  ), k = B(
    (K, me, ue) => {
      const xe = M(me, ue);
      let pe;
      c ? K === "min" ? pe = { min: Math.min(xe, E), max: E } : pe = { min: $, max: Math.max(xe, $) } : pe = xe, w(pe), b.current === null && T(pe);
    },
    [c, M, $, E, w, T]
  ), A = B(
    (K, me) => {
      const ue = (i > 0 ? i : 1) * me;
      let xe;
      c ? K === "min" ? xe = {
        min: On($ + ue, r, E),
        max: E
      } : xe = {
        min: $,
        max: On(E + ue, $, a)
      } : xe = On(S + ue, r, a), T(xe);
    },
    [c, i, r, a, $, E, S, T]
  ), R = (K, me) => {
    if (!l)
      switch (me.key) {
        case "ArrowLeft":
        case "ArrowDown":
          me.preventDefault(), A(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          me.preventDefault(), A(K, 1);
          break;
        case "Home":
          me.preventDefault(), T(c ? K === "min" ? { min: r, max: E } : { min: $, max: $ } : r);
          break;
        case "End":
          me.preventDefault(), T(c ? K === "min" ? { min: E, max: E } : { min: $, max: a } : a);
          break;
      }
  }, z = (K, me) => {
    l || (me.preventDefault(), me.currentTarget.focus(), typeof me.currentTarget.setPointerCapture == "function" && me.currentTarget.setPointerCapture(me.pointerId), b.current = { key: K, pointerId: me.pointerId }, k(K, me.clientX, me.clientY));
  }, j = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (K.preventDefault(), k(b.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (b.current = null, K.preventDefault(), T(c ? { min: $, max: E } : S));
  }, [X, ie] = W(null), te = I($), we = I(E), ae = c ? te : 0, _e = we;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        tr["dx-slider"],
        s === "vertical" ? tr["dx-slider-vertical"] : null,
        l ? tr["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: _, className: tr["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: tr["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${ae}%`, height: `${_e - ae}%` } : { left: `${ae}%`, width: `${_e - ae}%` }
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
            tabIndex: l || c && X === "max" ? -1 : g,
            className: tr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (K) => R("min", K),
            onPointerDown: (K) => z("min", K),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("min")
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
            "aria-label": u,
            "aria-disabled": l || void 0,
            tabIndex: l || X === "min" ? -1 : g,
            className: tr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
            onKeyDown: (K) => R("max", K),
            onPointerDown: (K) => z("max", K),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("max")
          }
        )
      ] })
    }
  );
}, ft = {
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
}, Rv = "-10675199.02:48:05.4775808", Pv = "10675199.02:48:05.4775808", Pn = 86400, jn = 3600, xn = 60, Fo = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, _a = {
  days: Pn,
  hours: jn,
  minutes: xn,
  seconds: 1
}, jv = {
  day: Pn,
  hour: jn,
  minute: xn,
  second: 1
};
function mr(e) {
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
    if (!a.slice(1).some((u) => u != null)) return null;
    const s = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, d = a[3] != null ? Number(a[3]) : 0, f = a[4] != null ? Number(a[4]) : 0;
    return n * (s * Pn + l * jn + d * xn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || d > 59 ? null : n * (c * Pn + s * jn + l * xn + d + f);
  }
  return null;
}
function Bv(e) {
  return e.days * Pn + e.hours * jn + e.minutes * xn + e.seconds;
}
function pa(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Pn);
  t %= Pn;
  const r = Math.floor(t / jn);
  t %= jn;
  const a = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function es(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / xn) * xn : t === "hour" ? r = Math.round(r / jn) * jn : t === "day" && (r = Math.round(r / Pn) * Pn);
  let a = Math.round(r % xn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / xn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, f = Math.floor(l / 24), u = n ? "-" : "", g = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${g}${mr(d)}`;
    case "minute":
      return `${u}${g}${mr(d)}:${mr(s)}`;
    default:
      return `${u}${g}${mr(d)}:${mr(s)}:${mr(a)}`;
  }
}
function ha(e, t = "second") {
  const n = Kr(e);
  return n === null ? "" : es(n, t);
}
function Ho(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const qO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Rv,
    max: c = Pv,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: g = !0,
    allowClear: m = !1,
    inline: y = !1,
    onChange: p,
    onValueChange: x,
    onOpen: h,
    onClose: _,
    disabled: b,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: C,
    clearLabel: S,
    tabIndex: $,
    className: E,
    onBlur: I,
    onKeyDown: M,
    ...T
  }, w) {
    const k = ne(null), A = ne(null), R = ne(null), z = lt(), j = r !== void 0, [F, X] = W(
      () => a != null ? ha(a, l) : ""
    ), [ie, te] = W(!1), [we, ae] = W(null), [_e, K] = W(null), me = Oe(
      () => Kr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => Kr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), xe = Oe(() => {
      const oe = Number.parseFloat(s);
      return Number.isNaN(oe) || oe <= 0 ? 1 : oe;
    }, [s]), pe = Oe(() => {
      const oe = j ? r ?? "" : F;
      return oe ? Kr(oe) : null;
    }, [r, F, j]), De = B(
      (oe) => {
        const Le = oe === null ? "" : es(oe, l);
        j || X(Le), p?.(Le), x?.(Le);
      },
      [j, l, p, x]
    ), G = B(
      (oe) => {
        oe && we !== null && De(we), te(!1), ae(null), K(null), _?.(), y || R.current?.focus();
      },
      [y, we, De, _]
    ), $e = B(() => {
      b || (ae(pe ?? 0), te(!0), h?.());
    }, [b, pe, h]), re = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (oe, Le) => {
        ae((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * xe * _a[oe];
          return Ho(xt, me, ue);
        });
      },
      [pe, xe, me, ue]
    ), fe = B(
      (oe) => {
        const Le = _e?.[oe];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        ae((xt) => {
          const Ie = xt ?? pe ?? 0, qe = pa(Ie);
          qe[oe] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * Bv(qe);
          return Ho($t, me, ue);
        }), K(null);
      },
      [_e, pe, me, ue]
    ), Fe = (oe, Le) => {
      K((Nt) => ({ ...Nt ?? {}, [oe]: Le }));
    }, Ge = (oe, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), fe(oe), Ae(oe, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), fe(oe), Ae(oe, -1);
          break;
        case "Home":
          Le.preventDefault(), fe(oe), ae(me);
          break;
        case "End":
          Le.preventDefault(), fe(oe), ae(ue);
          break;
        case "Enter":
          Le.preventDefault(), fe(oe), G(!0);
          break;
      }
    }, Je = B(() => {
      if (ie) return;
      const oe = Kr(F);
      De(oe !== null ? Ho(oe, me, ue) : null);
    }, [ie, F, me, ue, De]), At = (oe) => {
      j || X(oe.target.value);
    }, it = (oe) => {
      oe.key === "Enter" ? (oe.preventDefault(), ie ? G(!0) : Je()) : oe.key === "Escape" && ie ? (oe.preventDefault(), G(!1)) : oe.key === "ArrowDown" && !ie ? (oe.preventDefault(), $e()) : oe.key === "Tab" && ie && te(!1), M?.(oe);
    }, bt = (oe) => {
      Je(), I?.(oe);
    }, Z = () => {
      j || X(""), p?.(""), x?.(""), A.current?.focus();
    };
    be(() => {
      if (!ie) return;
      const oe = (Le) => {
        k.current && !k.current.contains(Le.target) && G(!1);
      };
      return document.addEventListener("mousedown", oe), () => document.removeEventListener("mousedown", oe);
    }, [ie, G]), be(() => {
      if (!ie) return;
      const oe = (Le) => {
        Le.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", oe), () => document.removeEventListener("keydown", oe);
    }, [ie, G]), be(() => {
      if (y && we !== null) {
        const oe = pe;
        (oe === null || Math.abs(we - oe) > 1e-9) && De(we);
      }
    }, [y, we, pe, De]);
    const L = B(
      (oe) => {
        A.current = oe, typeof w == "function" ? w(oe) : w && (w.current = oe);
      },
      [w]
    ), Y = j ? r ? ha(r, l) : "" : F, Q = j ? !!r : F.length > 0, ge = y || ie, le = we ?? pe ?? 0, Ee = pa(le), je = jv[l], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (oe) => _a[oe] >= je && (oe === "days" ? d : oe === "hours" ? f : oe === "minutes" ? u : g)
    ), nt = t === "xs" ? ft["dx-timespanpicker-input--xs"] : t === "sm" ? ft["dx-timespanpicker-input--sm"] : t === "lg" ? ft["dx-timespanpicker-input--lg"] : t === "xl" ? ft["dx-timespanpicker-input--xl"] : ft["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ D("div", { className: ft["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-preview"], "aria-live": "polite", children: es(le, l) }),
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-units"], children: Qe.map((oe) => /* @__PURE__ */ D("label", { className: ft["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: ft["dx-timespanpicker-unit-label"], children: Fo[oe] }),
        /* @__PURE__ */ D("span", { className: ft["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: ft["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: _e?.[oe] ?? String(Ee[oe]),
              onChange: (Le) => Fe(oe, Le.target.value),
              onKeyDown: (Le) => Ge(oe, Le),
              onBlur: () => fe(oe)
            }
          ),
          /* @__PURE__ */ D("span", { className: ft["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Fo[oe].toLowerCase()}`,
                onClick: () => {
                  fe(oe), Ae(oe, 1);
                },
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Fo[oe].toLowerCase()}`,
                onClick: () => {
                  fe(oe), Ae(oe, -1);
                },
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, oe)) }),
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: ft["dx-timespanpicker-ok"],
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
          ft["dx-timespanpicker"],
          y ? ft["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !y && /* @__PURE__ */ D(at, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: L,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: b,
                placeholder: N,
                tabIndex: $,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                "aria-invalid": n || void 0,
                className: [
                  ft["dx-timespanpicker-input"],
                  nt,
                  n ? ft["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: it,
                onBlur: bt,
                ...T
              }
            ),
            m && !b && Q && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: ft["dx-timespanpicker-clear"],
                "aria-label": S ?? "Clear",
                onClick: Z,
                children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: R,
                type: "button",
                className: [ft["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                disabled: b,
                onClick: re,
                children: /* @__PURE__ */ o(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ o(
            "div",
            {
              id: z,
              role: y ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: y ? void 0 : ft["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), Fv = "_wrapper_ou9x5_1", Hv = "_cells_ou9x5_8", Uv = "_cell_ou9x5_8", Wv = "_invalid_ou9x5_63", qv = "_live_ou9x5_73", nr = {
  wrapper: Fv,
  cells: Hv,
  cell: Uv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Wv,
  live: qv
};
function ma(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const KO = st(
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
    className: u,
    "aria-label": g
  }, m) {
    const y = lt(), p = n !== void 0, [x, h] = W(ma(r).join("")), _ = p ? ma(n).join("") : x, b = Array.from({ length: t }, (T, w) => _[w] ?? ""), N = ne([]), [v, C] = W(""), S = (T) => {
      p || h(T), a?.(T);
    }, $ = (T) => {
      const w = N.current[T];
      w && !w.disabled && (w.focus(), w.select());
    }, E = (T, w) => {
      const k = w.replace(/\D/g, "").slice(-1), A = _.split("");
      if (k) {
        A[T] = k;
        const R = A.join("").slice(0, t);
        S(R), R.length < t ? $(T + 1) : f && C("Code complete");
      }
    }, I = (T, w) => {
      if (w.key === "Backspace") {
        if (w.preventDefault(), _[T]) {
          const k = _.split("");
          k[T] = "", S(k.join(""));
        } else if (T > 0) {
          const k = _.split("");
          k[T - 1] = "", S(k.join("")), $(T - 1);
        }
      } else w.key === "ArrowLeft" && T > 0 ? (w.preventDefault(), $(T - 1)) : w.key === "ArrowRight" && T < t - 1 ? (w.preventDefault(), $(T + 1)) : w.key === "Home" ? (w.preventDefault(), $(0)) : w.key === "End" && (w.preventDefault(), $(t - 1));
    }, M = (T, w) => {
      w.preventDefault();
      const k = w.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const A = _.split("");
      let R = 0;
      for (let j = 0; j < k.length && T + j < t; j++)
        A[T + j] = k[j] ?? "", R++;
      const z = A.join("");
      S(z), z.length >= t ? f && C("Code complete") : $(T + R);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [nr.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": g ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [nr.cells, nr[c]].join(" "), children: b.map((T, w) => /* @__PURE__ */ o(
            "input",
            {
              ref: (k) => {
                N.current[w] = k, w === 0 && m && (typeof m == "function" ? m(k) : m.current = k);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: T,
              disabled: l,
              "aria-label": `Digit ${w + 1} of ${t}`,
              "aria-invalid": i && T !== "" ? !0 : void 0,
              autoFocus: s && w === 0,
              className: [
                nr.cell,
                nr[`cell-${c}`],
                i ? nr.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (k) => E(w, k.target.value),
              onKeyDown: (k) => I(w, k),
              onPaste: (k) => M(w, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                f && C("");
              }
            },
            w
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${y}-live`,
              role: "status",
              "aria-live": "polite",
              className: nr.live,
              children: v
            }
          )
        ]
      }
    );
  }
), Kv = "_wrapper_6lcd5_1", Gv = "_header_6lcd5_7", Vv = "_label_6lcd5_15", Yv = "_clear_6lcd5_22", Xv = "_canvas_6lcd5_53", Zv = "_disabled_6lcd5_69", gr = {
  wrapper: Kv,
  header: Gv,
  label: Vv,
  clear: Yv,
  canvas: Xv,
  disabled: Zv
}, GO = st(
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
    className: u
  }, g) {
    const m = ne(null), y = ne(!1), p = ne(!1), x = ne({ x: 0, y: 0 });
    be(() => {
      const S = m.current;
      if (!S) return;
      const $ = window.devicePixelRatio || 1, E = Math.round((l ?? S.clientWidth) * $), I = Math.round(d * $);
      (S.width !== E || S.height !== I) && (S.width = E, S.height = I);
      const M = S.getContext("2d");
      if (!M) return;
      M.setTransform($, 0, 0, $, 0, 0), M.lineWidth = i, M.strokeStyle = a, M.lineCap = "round", M.lineJoin = "round";
      const T = t ?? n;
      if (T) {
        const w = new Image();
        w.onload = () => {
          M.drawImage(w, 0, 0, S.clientWidth, d);
        }, w.src = T;
      }
    }, [t, n, a, i, l, d]);
    const h = () => {
      const S = m.current;
      if (!S) return;
      const $ = S.toDataURL("image/png");
      r?.($);
    }, _ = () => {
      const S = m.current;
      if (!S) return;
      const $ = S.getContext("2d");
      $ && $.clearRect(0, 0, S.width, S.height), r?.("");
    };
    ko(g, () => ({
      clear: _,
      toDataURL: (S = "image/png", $) => m.current?.toDataURL(S, $) ?? ""
    }));
    const b = (S) => {
      const $ = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - $.left, y: S.clientY - $.top };
    }, N = (S) => {
      f || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), y.current = !0, p.current = !1, x.current = b(S));
    }, v = (S) => {
      if (!y.current) return;
      S.preventDefault();
      const $ = S.currentTarget.getContext("2d");
      if (!$) return;
      const E = b(S);
      $.beginPath(), $.moveTo(x.current.x, x.current.y), $.lineTo(E.x, E.y), $.stroke(), x.current = E, p.current = !0;
    }, C = (S) => {
      y.current && (S.preventDefault(), y.current = !1, p.current && h());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          gr.wrapper,
          u,
          f ? gr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: gr.header, children: [
            /* @__PURE__ */ o("span", { className: gr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: gr.clear,
                onClick: _,
                disabled: f,
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
              "aria-disabled": f || void 0,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${d}px`
              },
              className: gr.canvas,
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
), Jv = "_wrapper_dsvd2_1", Qv = "_trigger_dsvd2_7", ew = "_list_dsvd2_35", tw = "_row_dsvd2_44", nw = "_name_dsvd2_59", rw = "_size_dsvd2_68", ow = "_progress_dsvd2_74", sw = "_fill_dsvd2_82", aw = "_status_dsvd2_99", lw = "_remove_dsvd2_106", $n = {
  wrapper: Jv,
  trigger: Qv,
  list: ew,
  row: tw,
  name: nw,
  size: rw,
  progress: ow,
  fill: sw,
  status: aw,
  remove: lw
};
function ga(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const VO = st(function({
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
  onProgress: u,
  onComplete: g,
  onError: m
}, y) {
  const p = ne(null), [x, h] = W([]), _ = ne(/* @__PURE__ */ new Map()), b = ($, E) => {
    h(
      (I) => I.map((M) => M.file.name === $ ? { ...M, ...E } : M)
    );
  }, N = ($) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    _.current.set($.file.name, E);
    const I = new FormData();
    if (I.append(r, $.file), E.upload.addEventListener("progress", (M) => {
      if (!M.lengthComputable) return;
      const T = Math.round(M.loaded / M.total * 100);
      b($.file.name, { state: "uploading", progress: T }), u?.($.file.name, T);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (b($.file.name, { state: "complete", progress: 100 }), g?.($.file.name)) : (b($.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), m?.($.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      b($.file.name, { state: "error", message: "Network error" }), m?.($.file.name, "Network error");
    }), i)
      for (const [M, T] of Object.entries(i))
        E.setRequestHeader(M, T);
    E.open("POST", t), E.send(I), b($.file.name, { state: "uploading", progress: 0 });
  }, v = ($) => {
    if (!$) return;
    const E = [...$], I = [];
    let M = Math.max(0, s - x.length);
    for (const w of E) {
      if (l != null && w.size > l) {
        m?.(
          w.name,
          `File too large (maximum ${ga(l)})`
        );
        continue;
      }
      if (M <= 0) {
        m?.(w.name, `Too many files (maximum ${s})`);
        continue;
      }
      M -= 1, I.push(w);
    }
    const T = I.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    h((w) => [...w, ...T]), p.current && (p.current.value = ""), a && T.forEach(N);
  }, C = ($) => {
    _.current.get($)?.abort(), _.current.delete($), h((I) => I.filter((M) => M.file.name !== $));
  }, S = f ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: $n.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ o(Me, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return ko(y, () => ({
    open: () => p.current?.click(),
    upload: () => x.forEach(($) => $.state === "pending" ? N($) : null)
  })), /* @__PURE__ */ D("div", { className: $n.wrapper, children: [
    S,
    /* @__PURE__ */ o(
      "input",
      {
        ref: p,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: ($) => v($.target.files)
      }
    ),
    !f && x.length > 0 && /* @__PURE__ */ o("ul", { className: $n.list, children: x.map(({ file: $, state: E, progress: I, message: M }) => /* @__PURE__ */ D(
      "li",
      {
        className: $n.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: $n.name, children: $.name }),
          /* @__PURE__ */ o("span", { className: $n.size, children: ga($.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: $n.progress,
              role: "progressbar",
              "aria-label": `${$.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": I,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: $n.fill,
                  style: { width: `${I}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: $n.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? M ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: $n.remove,
              "aria-label": `Remove ${$.name}`,
              onClick: () => C($.name),
              children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      $.name
    )) })
  ] });
}), iw = "_zone_nl0bz_1", cw = "_dragging_nl0bz_23", dw = "_caption_nl0bz_28", uw = "_browse_nl0bz_40", fw = "_disabled_nl0bz_67", Br = {
  zone: iw,
  dragging: cw,
  caption: dw,
  browse: uw,
  disabled: fw
};
function _w(e, t) {
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
const YO = st(
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
    const f = ne(null), [u, g] = W(!1), m = (_) => {
      if (!_ || _.length === 0) return;
      const b = [..._].filter((N) => _w(N, t ?? ""));
      b.length !== 0 && r?.(b);
    }, y = (_) => {
      s || (_.preventDefault(), g(!0));
    }, p = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", g(!0));
    }, x = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || g(!1);
    }, h = (_) => {
      s || (_.preventDefault(), g(!1), m(_.dataTransfer.files));
    };
    return ko(d, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": s || void 0,
        className: [
          Br.zone,
          u ? Br.dragging : null,
          s ? Br.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: y,
        onDragOver: p,
        onDragLeave: x,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Br.caption, children: u ? i : a }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Br.browse,
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
), pw = "_root_1a92d_1", hw = "_menubar_1a92d_5", mw = "_horizontal_1a92d_15", gw = "_vertical_1a92d_20", yw = "_itemWrapper_1a92d_25", bw = "_item_1a92d_25", xw = "_disabled_1a92d_61", vw = "_icon_1a92d_68", ww = "_text_1a92d_75", kw = "_caret_1a92d_79", Nw = "_hasChildren_1a92d_85", Sw = "_submenu_1a92d_94", Ow = "_submenuItem_1a92d_118", $w = "_flyout_1a92d_155", Ew = "_hamburger_1a92d_175", Tw = "_responsive_1a92d_198", Cw = "_mobileOpen_1a92d_207", pt = {
  root: pw,
  menubar: hw,
  horizontal: mw,
  vertical: gw,
  itemWrapper: yw,
  item: bw,
  disabled: xw,
  icon: vw,
  text: ww,
  caret: kw,
  hasChildren: Nw,
  submenu: Sw,
  submenuItem: Ow,
  flyout: $w,
  hamburger: Ew,
  responsive: Tw,
  mobileOpen: Cw
}, vo = ir(null);
function Aw(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Dw(e, t, n, r, a) {
  const [i, c] = W(n), s = e ? t ?? !1 : i, l = B(
    (d) => {
      e || c(d), r?.(d);
    },
    [e, r]
  );
  return be(() => {
    a > 0 && l(!1);
  }, [a]), [s, l];
}
function Mw({
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
      children: /* @__PURE__ */ o(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Ga(e) {
  return Wt(e) && e.type === Va;
}
function ds({
  itemKey: e,
  props: t
}) {
  const n = Bn(vo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Oe(
    () => Xr.toArray(t.children).filter(Wt),
    [t.children]
  ), d = l.length > 0, f = !!c, u = t.open !== void 0, [g, m] = Dw(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), y = n.level === 0, p = ne(0), h = (y && !u ? n.openKey === e : null) ?? g, _ = B(
    (R) => {
      y && !u ? n.setOpenKey(R ? e : null) : (m(R), y && n.setOpenKey(null));
    },
    [y, u, n, e, m]
  ), [, b] = W(0);
  be(() => {
    if (!i) return;
    const R = () => b((z) => z + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const N = i && !d ? Aw(i, t.match) : !1, v = B(
    (R) => {
      if (f) {
        R.preventDefault();
        return;
      }
      const z = { text: r, value: a, path: i };
      [n.emit(z), t.onClick?.(z)].includes(!1) && R.preventDefault(), n.closeAll();
    },
    [f, r, a, i, n, t]
  ), C = B(() => {
    if (!f) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [f, h, _, n.clickToOpen]), S = B(() => {
    !d || f || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [d, f, n.clickToOpen, _]), $ = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), E = `${n.baseId}-submenu-${e}`, [I, M] = W(null);
  be(() => {
    n.closeSignal > 0 && M(null);
  }, [n.closeSignal]);
  const T = Oe(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: I,
      setOpenKey: M
    }),
    [n, I]
  ), w = d ? /* @__PURE__ */ o("span", { className: pt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Me,
    {
      icon: n.flyout && !y ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, k = s ?? /* @__PURE__ */ D(at, { children: [
    /* @__PURE__ */ o(
      Mw,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: pt.text, children: r }),
    w
  ] });
  if (d) {
    let R = function(z) {
      const j = Array.from(z.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      z.key === "ArrowDown" ? (z.preventDefault(), z.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : z.key === "ArrowUp" ? (z.preventDefault(), z.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : z.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (z.preventDefault(), z.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (z.key === "ArrowLeft" || z.key === "Escape") && (z.preventDefault(), z.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: pt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : S,
        onMouseLeave: n.clickToOpen ? void 0 : $,
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
              "aria-disabled": f || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": E,
              tabIndex: f ? -1 : 0,
              disabled: f,
              className: [
                pt.item,
                f ? pt.disabled : null,
                pt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: C,
              children: k
            }
          ),
          h ? /* @__PURE__ */ o(
            "div",
            {
              id: E,
              role: "menu",
              "aria-label": r,
              className: [
                pt.submenu,
                n.flyout && !y ? pt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: R,
              children: /* @__PURE__ */ o(vo.Provider, { value: T, children: l.map(
                (z, j) => Ga(z) ? /* @__PURE__ */ o(
                  ds,
                  {
                    itemKey: `${e}-${j}`,
                    props: z.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(os, { children: z }, `${e}-custom-${j}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const A = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [pt.submenuItem, f ? pt.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return i && !f ? /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...A, children: k }) }) : /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...A, children: k }) });
}
function Va(e) {
  if (!Bn(vo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(ds, { itemKey: e.text, props: e });
}
function Iw({
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
  const u = lt(), g = ne(null), m = ne(null), [y, p] = W(null), [x, h] = W(0), [_, b] = W(!1), N = ne(null), v = B(
    (I) => i?.(I),
    [i]
  ), C = B(() => {
    p(null), h((I) => I + 1);
  }, []);
  be(() => {
    if (y == null) return;
    const I = (M) => {
      g.current && !g.current.contains(M.target) && C();
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, [y, C]), be(() => {
    N.current != null && y === N.current && (document.getElementById(`${u}-submenu-${y}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [y, u]);
  const S = Oe(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: x,
      emit: v,
      closeAll: C,
      openKey: y,
      setOpenKey: p
    }),
    [u, n, t, x, v, C, y]
  ), $ = Oe(
    () => Xr.toArray(e).filter(Wt),
    [e]
  ), E = (I) => {
    const M = m.current;
    if (!M) return;
    const T = Array.from(M.children).map((A) => A.querySelector('[role="menuitem"]')).filter(
      (A) => A != null && !A.hasAttribute("disabled") && A.getAttribute("aria-disabled") !== "true"
    );
    if (y != null) {
      const A = document.getElementById(`${u}-submenu-${y}`);
      if (A) {
        const R = Array.from(
          A.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), z = document.activeElement, j = z ? R.indexOf(z) : -1;
        if (I.key === "ArrowDown") {
          I.preventDefault(), (j === -1 ? R[0] : R[(j + 1) % R.length])?.focus();
          return;
        }
        if (I.key === "ArrowUp") {
          I.preventDefault(), (j === -1 ? R[R.length - 1] : R[(j - 1 + R.length) % R.length])?.focus();
          return;
        }
        if (I.key === "Escape") {
          I.preventDefault(), C(), c?.(), M.querySelector(`[data-index="${y}"]`)?.focus();
          return;
        }
        if (I.key === "Enter" || I.key === " ") return;
      }
      if (I.key === "Escape") {
        I.preventDefault(), C(), c?.();
        return;
      }
    }
    const w = document.activeElement, k = w ? T.indexOf(w) : -1;
    if (I.key === "ArrowRight") {
      if (I.preventDefault(), T.length === 0) return;
      T[k === -1 ? 0 : (k + 1) % T.length]?.focus();
      return;
    }
    if (I.key === "ArrowLeft") {
      if (I.preventDefault(), T.length === 0) return;
      T[k === -1 ? T.length - 1 : (k - 1 + T.length) % T.length]?.focus();
      return;
    }
    if (I.key === "ArrowDown") {
      if (k >= 0) {
        const A = w?.getAttribute("data-index");
        if (A == null) return;
        M.querySelector(
          `[data-index="${A}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), N.current = A, p(A));
      }
      return;
    }
    if (I.key === "Home") {
      I.preventDefault(), T[0]?.focus();
      return;
    }
    if (I.key === "End") {
      I.preventDefault(), T[T.length - 1]?.focus();
      return;
    }
    if (I.key.length === 1 && !I.ctrlKey && !I.metaKey) {
      const A = T.map((z) => z.textContent ?? ""), R = k === -1 ? 0 : (k + 1) % T.length;
      for (let z = 0; z < T.length; z++) {
        const j = (R + z) % T.length;
        if (A[j]?.toLowerCase().startsWith(I.key.toLowerCase())) {
          I.preventDefault(), T[j]?.focus();
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
        pt.root,
        a ? pt.vertical : pt.horizontal,
        r ? pt.responsive : null,
        r && _ ? pt.mobileOpen : null,
        n ? pt.flyoutRoot : null,
        d
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": _,
            className: pt.hamburger,
            onClick: () => b((I) => !I),
            children: /* @__PURE__ */ o(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: m,
            role: a ? "menu" : "menubar",
            "aria-label": s,
            className: pt.menubar,
            onKeyDown: E,
            children: /* @__PURE__ */ o(vo.Provider, { value: S, children: $.map(
              (I, M) => Ga(I) ? /* @__PURE__ */ o(
                ds,
                {
                  itemKey: String(M),
                  props: I.props
                },
                `top-${M}`
              ) : /* @__PURE__ */ o(os, { children: I }, `top-custom-${M}`)
            ) })
          }
        )
      ]
    }
  );
}
const zw = "_popup_uiejp_1", Lw = "_menu_uiejp_22", ts = {
  popup: zw,
  menu: Lw
}, Ya = ir(null);
function XO() {
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
function Rw({ state: e, onClose: t }) {
  const n = ne(null), [r, a] = W({ left: e.x, top: e.y });
  Uo(() => {
    const c = n.current;
    if (!c) return;
    const s = c.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), be(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = B(
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
      className: ts.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: ts.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Iw,
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
function ZO({ children: e }) {
  const [t, n] = W(null), r = B(() => {
    n((c) => (c?.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = B(
    (c, s) => {
      c.preventDefault();
      const l = c.currentTarget ?? c.target;
      n({ x: c.clientX, y: c.clientY, invoker: l, options: s });
    },
    []
  );
  be(() => {
    if (!t) return;
    const c = (f) => {
      const u = document.querySelector(`.${ts.popup}`);
      u && !u.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = Oe(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ D(Ya.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Rw, { state: t, onClose: r }) : null
  ] });
}
const Pw = "_root_rgcia_1", jw = "_list_rgcia_9", Bw = "_item_rgcia_14", Fw = "_trigger_rgcia_18", Hw = "_disabled_rgcia_45", Uw = "_expanded_rgcia_52", Ww = "_selected_rgcia_56", qw = "_icon_rgcia_61", Kw = "_text_rgcia_72", Gw = "_caret_rgcia_79", Vw = "_open_rgcia_86", Yw = "_submenu_rgcia_90", Xw = "_iconOnly_rgcia_172", Zw = "_stacked_rgcia_201", Lt = {
  root: Pw,
  list: jw,
  item: Bw,
  trigger: Fw,
  disabled: Hw,
  expanded: Uw,
  selected: Ww,
  icon: qw,
  text: Kw,
  caret: Gw,
  open: Vw,
  submenu: Yw,
  iconOnly: Xw,
  stacked: Zw
}, wo = ir(null);
function Jw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Qw(e, t) {
  const n = Jw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function e2({
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
function us({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Bn(wo);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = Oe(
    () => Xr.toArray(n.children).filter(Wt),
    [n.children]
  ), d = l.length > 0, f = !!s, u = n.match ?? r.match, g = n.expanded !== void 0, [m, y] = W(
    n.defaultExpanded ?? !1
  ), p = g ? n.expanded ?? !1 : m, x = B(
    (F) => {
      g || y(F), n.onExpandedChange?.(F);
    },
    [g, n]
  );
  be(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && x(!1);
  }, [r.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, b] = W(
    n.defaultSelected ?? !1
  ), N = !h && c ? Qw(c, u) : !1, v = n.selected ?? (h ? _ : N || _), [, C] = W(0);
  be(() => {
    if (!c) return;
    const F = () => C((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [c]);
  const S = Oe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        x(!0), r.openAncestors();
      }
    }),
    [r, x]
  );
  be(() => {
    N && t.length > 0 && S.openAncestors();
  }, []);
  const $ = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const X = { text: a, value: i, path: c };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), h || b(!0), n.onSelectedChange?.(!0);
    },
    [f, a, i, c, r, n, h]
  ), E = B(() => {
    f || (p || r.notifyOpened(e, t), x(!p));
  }, [f, p, r, e, t, x]), I = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), d ? E() : F.target.click()) : F.key === "Escape" && p ? (F.preventDefault(), x(!1)) : F.key === "ArrowRight" && d && !p ? (F.preventDefault(), r.notifyOpened(e, t), x(!0)) : F.key === "ArrowLeft" && p && (F.preventDefault(), x(!1));
    },
    [d, E, p, x, r, e, t]
  ), M = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [Lt.caret, p ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, T = n.template ?? /* @__PURE__ */ D(at, { children: [
    /* @__PURE__ */ o(
      e2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: Lt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: Lt.text, children: a }),
    M
  ] }), w = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, A = [
    Lt.trigger,
    f ? Lt.disabled : null,
    p ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), R = r.level > 0 ? "menuitem" : void 0, z = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: k,
      role: R,
      "aria-expanded": p,
      "aria-controls": w,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: A,
      onClick: E,
      onKeyDown: I,
      children: T
    }
  ) : c && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: k,
      role: R,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: A,
      onClick: $,
      onKeyDown: I,
      children: T
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: k,
      role: R,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: A,
      onClick: $,
      onKeyDown: I,
      children: T
    }
  ), j = d ? r.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: w,
      role: "menu",
      "aria-labelledby": k,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(wo.Provider, { value: S, children: l.map((F, X) => /* @__PURE__ */ o(
        us,
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
        z,
        j
      ]
    }
  );
}
function JO(e) {
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(us, { itemKey: e.text, ancestors: [], props: e });
}
function QO({
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
  const f = lt(), [u, g] = W(0), m = ne(/* @__PURE__ */ new Set()), y = B(
    (N) => c?.(N),
    [c]
  ), p = B(
    (N, v) => {
      t || (m.current = /* @__PURE__ */ new Set([N, ...v]), g((C) => C + 1));
    },
    [t]
  ), x = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), h = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, C = x(N.currentTarget), S = C.indexOf(v);
        if (S === -1) return;
        N.preventDefault();
        const $ = N.key === "ArrowDown" ? 1 : -1;
        C[(S + $ + C.length) % C.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = x(N.currentTarget);
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
      match: a,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: m,
      emit: y,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      r,
      i,
      a,
      u,
      y,
      p
    ]
  ), b = Oe(
    () => Xr.toArray(e).filter(Wt),
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
        l
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      ...d,
      children: /* @__PURE__ */ o("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ o(wo.Provider, { value: _, children: b.map((N, v) => /* @__PURE__ */ o(
        us,
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
const t2 = "_root_5numg_1", n2 = "_trigger_5numg_7", r2 = "_defaultTrigger_5numg_40", o2 = "_avatar_5numg_46", s2 = "_menu_5numg_58", a2 = "_item_5numg_74", l2 = "_disabled_5numg_88", i2 = "_active_5numg_97", c2 = "_icon_5numg_107", d2 = "_text_5numg_114", En = {
  root: t2,
  trigger: n2,
  defaultTrigger: r2,
  avatar: o2,
  menu: s2,
  item: a2,
  disabled: l2,
  active: i2,
  icon: c2,
  text: d2
};
function e$({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = lt(), c = `${i}-menu`, s = ne(null), l = ne(null), [d, f] = W(!1), [u, g] = W(-1), m = t, y = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), p = B(
    (v) => {
      if (v.disabled) return;
      const C = {
        text: v.text,
        path: v.path
      };
      n?.(C), f(!1), l.current?.focus();
    },
    [n]
  ), x = B(() => {
    g(y[0] ?? -1), f(!0);
  }, [y]), h = B(() => {
    f(!1), g(-1), l.current?.focus();
  }, []);
  be(() => {
    if (!d) return;
    const v = (C) => {
      s.current && !s.current.contains(C.target) && (f(!1), g(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [d]), be(() => {
    if (!d) return;
    const v = (C) => {
      C.key === "Escape" && (C.preventDefault(), h());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [d, h]);
  const _ = (v) => {
    if (y.length === 0) return;
    const C = y.indexOf(u), S = C === -1 ? 0 : (C + v + y.length) % y.length, $ = y[S];
    $ != null && g($);
  }, b = (v) => {
    if (!d) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), x());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), h();
        break;
      case "ArrowDown":
        v.preventDefault(), _(1);
        break;
      case "ArrowUp":
        v.preventDefault(), _(-1);
        break;
      case "Home":
        v.preventDefault(), y[0] != null && g(y[0]);
        break;
      case "End":
        v.preventDefault(), y[y.length - 1] != null && g(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const C = e[u];
          C && !C.disabled && p(C);
        }
        break;
      case "Tab":
        f(!1), g(-1);
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
        v.preventDefault(), y[0] != null && g(y[0]);
        break;
      case "End":
        v.preventDefault(), y[y.length - 1] != null && g(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const C = e[u];
          C && !C.disabled && p(C);
        }
        break;
      case "Escape":
        v.preventDefault(), h();
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
      className: [En.root, a].filter(Boolean).join(" "),
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
            className: En.trigger,
            onClick: () => d ? h() : x(),
            onKeyDown: b,
            children: m ?? /* @__PURE__ */ D("span", { className: En.defaultTrigger, children: [
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
            "aria-activedescendant": u >= 0 ? `${i}-item-${u}` : void 0,
            className: En.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((v, C) => {
              const S = !!v.disabled, $ = C === u;
              return /* @__PURE__ */ D(
                "div",
                {
                  id: `${i}-item-${C}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [
                    En.item,
                    $ ? En.active : null,
                    S ? En.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || p(v);
                  },
                  onMouseEnter: () => {
                    S || g(C);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ o("span", { className: En.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ o("span", { className: En.text, children: v.text })
                  ]
                },
                `${v.text}-${C}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const u2 = "_root_vv0xs_1", f2 = "_bottomRight_vv0xs_11", _2 = "_bottomLeft_vv0xs_16", p2 = "_topRight_vv0xs_21", h2 = "_topLeft_vv0xs_26", m2 = "_menu_vv0xs_31", g2 = "_itemWrapper_vv0xs_48", y2 = "_tooltip_vv0xs_54", b2 = "_main_vv0xs_76", x2 = "_mainIcon_vv0xs_104", v2 = "_mainOpen_vv0xs_109", w2 = "_item_vv0xs_48", k2 = "_disabled_vv0xs_141", N2 = "_itemIcon_vv0xs_148", qt = {
  root: u2,
  bottomRight: f2,
  bottomLeft: _2,
  topRight: p2,
  topLeft: h2,
  menu: m2,
  itemWrapper: g2,
  tooltip: y2,
  main: b2,
  mainIcon: x2,
  mainOpen: v2,
  item: w2,
  disabled: k2,
  itemIcon: N2
};
function t$({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${lt()}-menu`, d = ne(null), f = ne(null), [u, g] = W(!1), m = B(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      r?.(_), g(!1), f.current?.focus();
    },
    [r]
  );
  be(() => {
    if (!u) return;
    const h = (_) => {
      d.current && !d.current.contains(_.target) && g(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [u]), be(() => {
    if (!u) return;
    const h = (_) => {
      _.key === "Escape" && (g(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [u]);
  const y = c === "bottom-right" ? qt.bottomRight : c === "bottom-left" ? qt.bottomLeft : c === "top-right" ? qt.topRight : qt.topLeft, p = (h) => {
    !u && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), g(!0)) : u && h.key === "Escape" && (h.preventDefault(), g(!1));
  }, x = (h) => {
    h.key === "Escape" && (h.preventDefault(), g(!1), f.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: d,
      className: [qt.root, y, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": a,
            className: qt.menu,
            onKeyDown: x,
            children: e.map((h, _) => {
              const b = !!h.disabled;
              return /* @__PURE__ */ D("div", { className: qt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: qt.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": b || void 0,
                    title: h.text,
                    disabled: b,
                    tabIndex: b ? -1 : 0,
                    className: [qt.item, b ? qt.disabled : null].filter(Boolean).join(" "),
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
            ref: f,
            type: "button",
            className: qt.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => g((h) => !h),
            onKeyDown: p,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [qt.mainIcon, u ? qt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const S2 = "_root_1eyur_1", O2 = "_list_1eyur_5", $2 = "_item_1eyur_15", E2 = "_link_1eyur_22", T2 = "_linkButton_1eyur_23", C2 = "_current_1eyur_24", A2 = "_disabled_1eyur_68", D2 = "_icon_1eyur_74", M2 = "_text_1eyur_81", I2 = "_separator_1eyur_85", _t = {
  root: S2,
  list: O2,
  item: $2,
  link: E2,
  linkButton: T2,
  current: C2,
  disabled: A2,
  icon: D2,
  text: M2,
  separator: I2
};
function n$({
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
        return /* @__PURE__ */ D("li", { className: _t.item, children: [
          l ? d ? /* @__PURE__ */ D(
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
          ) : c.path ? /* @__PURE__ */ D(
            "a",
            {
              href: c.path,
              className: _t.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D(
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
          ) : d ? /* @__PURE__ */ D(
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
          ) : c.path ? /* @__PURE__ */ D(
            "a",
            {
              href: c.path,
              className: _t.link,
              onClick: (f) => {
                f.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D(
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
const z2 = "_link_tmy3k_1", L2 = {
  link: z2
}, r$ = st(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ D(at, { children: [
    n != null && /* @__PURE__ */ o(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [L2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...u } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: c,
        className: l,
        href: f,
        ...u,
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
}), R2 = "_root_dnkuu_1", P2 = "_list_dnkuu_5", j2 = "_item_dnkuu_15", B2 = "_connector_dnkuu_21", F2 = "_connectorCompleted_dnkuu_30", H2 = "_step_dnkuu_34", U2 = "_active_dnkuu_69", W2 = "_completed_dnkuu_75", q2 = "_circle_dnkuu_79", K2 = "_check_dnkuu_109", G2 = "_icon_dnkuu_114", V2 = "_number_dnkuu_119", Y2 = "_text_dnkuu_124", Kt = {
  root: R2,
  list: P2,
  item: j2,
  connector: B2,
  connectorCompleted: F2,
  step: H2,
  active: U2,
  completed: W2,
  circle: q2,
  check: K2,
  icon: G2,
  number: V2,
  text: Y2
};
function o$({
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
  const u = a ?? i ?? !1, g = t ?? n, m = g !== void 0, [y, p] = W(() => Math.min(Math.max(0, g ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, m ? g : y),
    Math.max(0, e.length - 1)
  ), _ = ne(null), b = B(
    (C) => {
      const S = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      m || p(S), (c ?? s ?? l)?.(S);
    },
    [m, c, s, l, e.length]
  ), N = B(
    (C, S) => !!(S.disabled || u && C > h + 1),
    [u, h]
  ), v = (C) => {
    const S = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), $ = document.activeElement, E = $ ? S.indexOf($) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), S.length === 0) return;
      const I = E === -1 ? 0 : (E + 1) % S.length, M = S[I];
      M && M.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), S.length === 0) return;
      const I = E === -1 ? S.length - 1 : (E - 1 + S.length) % S.length, M = S[I];
      M && M.focus();
    } else C.key === "Home" ? (C.preventDefault(), S[0]?.focus()) : C.key === "End" && (C.preventDefault(), S[S.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": d,
      className: [Kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: Kt.list, children: e.map((C, S) => {
        const $ = S === h, E = S < h, I = N(S, C);
        return /* @__PURE__ */ D(
          "li",
          {
            role: "listitem",
            className: Kt.item,
            children: [
              S > 0 ? /* @__PURE__ */ o(
                "span",
                {
                  className: [
                    Kt.connector,
                    E ? Kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ D(
                "button",
                {
                  type: "button",
                  "data-step": S,
                  "aria-current": $ ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    Kt.step,
                    $ ? Kt.active : null,
                    E ? Kt.completed : null,
                    I ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || b(S);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Kt.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ o("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ o("span", { className: Kt.icon, children: C.icon }) : /* @__PURE__ */ o("span", { className: Kt.number, children: S + 1 }) }),
                    /* @__PURE__ */ o("span", { className: Kt.text, children: C.text })
                  ]
                }
              )
            ]
          },
          `${C.text}-${S}`
        );
      }) })
    }
  );
}
const X2 = "_root_12hod_1", Z2 = "_horizontal_12hod_13", J2 = "_vertical_12hod_17", Q2 = "_pane_12hod_21", ek = "_handle_12hod_31", tk = "_handleHorizontal_12hod_51", nk = "_handleVertical_12hod_57", rk = "_handleGrip_12hod_63", ok = "_handleCollapseHint_12hod_75", sk = "_collapseBtn_12hod_79", ak = "_collapseBtnCollapsed_12hod_109", un = {
  root: X2,
  horizontal: Z2,
  vertical: J2,
  pane: Q2,
  handle: ek,
  handleHorizontal: tk,
  handleVertical: nk,
  handleGrip: rk,
  handleCollapseHint: ok,
  collapseBtn: sk,
  collapseBtnCollapsed: ak
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
function Ln(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function s$({
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
  const d = e ?? t ?? "horizontal", f = d === "horizontal", u = ne(null), g = B(() => {
    const w = n.length;
    if (w === 0) return [];
    const k = n.map((R) => R.size ? Fr(R.size, 100 / w) : 100 / w), A = k.reduce((R, z) => R + z, 0);
    return Math.abs(A - 100) > 0.01 && A > 0 ? k.map((R) => R / A * 100) : k;
  }, [n]), [m, y] = W(() => g()), [p, x] = W(
    () => n.map((w) => !!w.collapsed)
  ), h = ne(m);
  be(() => {
    x(n.map((w) => !!w.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((w) => Fr(w.min, 0)),
    [n]
  ), b = B(
    () => n.map((w) => Fr(w.max, 100)),
    [n]
  ), N = B(
    (w, k) => {
      const A = { paneIndex: w, newSize: k, cancel: !1 };
      return (r ?? a)?.(A), !A.cancel;
    },
    [r, a]
  ), v = B(
    (w, k) => {
      const A = { paneIndex: w, collapse: k, cancel: !1 };
      return (i ?? c)?.(A), !A.cancel;
    },
    [i, c]
  ), C = B(
    (w) => {
      const k = !p[w];
      v(w, k) && (k ? (h.current = [...m], x((A) => {
        const R = [...A];
        return R[w] !== void 0 && (R[w] = !0), R;
      }), y((A) => {
        const R = [...A], z = R[w] ?? 0, j = w < R.length - 1 ? w + 1 : w - 1;
        if (j >= 0 && j < R.length) {
          const F = R[j] ?? 0;
          R[j] = F + z, R[w] = 0;
        } else
          R[w] = 0;
        return R;
      })) : (x((A) => {
        const R = [...A];
        return R[w] !== void 0 && (R[w] = !1), R;
      }), y(() => {
        const A = [...h.current];
        return A.length !== n.length ? n.map(() => 100 / n.length) : A;
      })));
    },
    [p, m, n.length, v]
  ), S = ne(
    null
  ), $ = B(
    (w, k, A) => {
      const R = u.current;
      if (!R) return null;
      const z = R.getBoundingClientRect();
      let j;
      if (f) {
        if (z.width === 0) return null;
        j = (k - z.left) / z.width * 100;
      } else {
        if (z.height === 0) return null;
        j = (A - z.top) / z.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < w; ie++) {
        const te = m[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, m]
  ), E = (w, k) => {
    k.preventDefault();
    const A = k.currentTarget;
    A.focus(), typeof A.setPointerCapture == "function" && A.setPointerCapture(k.pointerId), S.current = { handleIndex: w, pointerId: k.pointerId };
  }, I = (w) => {
    if (!S.current || S.current.pointerId !== w.pointerId)
      return;
    w.preventDefault();
    const k = S.current.handleIndex, A = $(k, w.clientX, w.clientY);
    if (A == null) return;
    const R = _(), z = b(), j = R[k] ?? 0, F = z[k] ?? 100, X = k + 1, ie = R[X] ?? 0, te = z[X] ?? 100, we = m[k] ?? 0, ae = m[X] ?? 0, _e = we + ae;
    if (_e <= 0) return;
    let K = Ln(A, j, F), me = _e - K;
    if (me < ie) {
      if (me = ie, K = _e - me, K < j || K > F) return;
    } else if (me > te && (me = te, K = _e - me, K < j || K > F))
      return;
    K = Ln(K, j, F), me = _e - K, N(k, K) && y((ue) => {
      const xe = [...ue];
      return xe[k] = K, xe[X] = me, xe;
    });
  }, M = (w) => {
    !S.current || S.current.pointerId !== w.pointerId || (S.current = null);
  }, T = (w, k) => {
    const A = _(), R = b(), z = w, j = w + 1, F = m[z] ?? 0, X = m[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[z]?.collapsible, ae = !!n[j]?.collapsible;
    if (f ? k.key === "ArrowLeft" ? te = -5 : k.key === "ArrowRight" && (te = 5) : k.key === "ArrowUp" ? te = -5 : k.key === "ArrowDown" && (te = 5), k.key === "Home") {
      k.preventDefault();
      let _e = A[z] ?? 0, K = ie - _e;
      if (K = Ln(
        K,
        A[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = Ln(_e, A[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
      y((me) => {
        const ue = [...me];
        return ue[z] = _e, ue[j] = K, ue;
      });
      return;
    }
    if (k.key === "End") {
      k.preventDefault();
      let _e = R[z] ?? 100;
      _e = Math.min(_e, ie - (A[j] ?? 0));
      let K = ie - _e;
      if (K = Ln(
        K,
        A[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = Ln(_e, A[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
      y((me) => {
        const ue = [...me];
        return ue[z] = _e, ue[j] = K, ue;
      });
      return;
    }
    if ((k.key === "Enter" || k.key === " ") && (we || ae)) {
      k.preventDefault(), C(we ? z : j);
      return;
    }
    if (te !== 0) {
      k.preventDefault();
      let _e = F + te, K = ie - _e;
      const me = A[z] ?? 0, ue = R[z] ?? 100, xe = A[j] ?? 0, pe = R[j] ?? 100;
      if (_e = Ln(_e, me, ue), K = ie - _e, (K < xe || K > pe) && (K = Ln(K, xe, pe), _e = ie - K, _e = Ln(_e, me, ue), K = ie - _e), !N(z, _e)) return;
      y((De) => {
        const G = [...De];
        return G[z] = _e, G[j] = K, G;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      className: [
        un.root,
        f ? un.horizontal : un.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((w, k) => {
        const A = !!p[k], R = A ? 0 : m[k] ?? 100 / n.length, z = A ? { display: "none" } : f ? {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Fr(w.min, 0), F = Fr(w.max, 100), X = k < n.length - 1, ie = !!n[k + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": w.label ?? `Pane ${k + 1}`,
              className: un.pane,
              style: z,
              "data-collapsed": A ? "true" : void 0,
              children: [
                A ? null : w.children,
                w.collapsible && !A ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Collapse pane ${k + 1}`,
                    "aria-expanded": !A,
                    onClick: () => C(k),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                w.collapsible && A ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Expand pane ${k + 1}`,
                    "aria-expanded": !A,
                    onClick: () => C(k),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          A && w.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: un.collapseBtnCollapsed,
                "aria-label": `Expand pane ${k + 1}`,
                "aria-expanded": "false",
                onClick: () => C(k),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          X ? /* @__PURE__ */ D(
            "div",
            {
              role: "separator",
              "aria-orientation": d,
              "aria-valuemin": j,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(R),
              "aria-label": `Resize handle ${k + 1}`,
              tabIndex: A || p[k + 1] ? -1 : 0,
              className: [
                un.handle,
                f ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => E(k, te),
              onPointerMove: I,
              onPointerUp: M,
              onKeyDown: (te) => T(k, te),
              children: [
                /* @__PURE__ */ o("span", { className: un.handleGrip, "aria-hidden": "true" }),
                (w.collapsible || ie) && /* @__PURE__ */ o(
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
const lk = "_root_1w3wd_1", ik = "_list_1w3wd_5", ck = "_vertical_1w3wd_14", dk = "_horizontal_1w3wd_20", uk = "_item_1w3wd_28", fk = "_link_1w3wd_32", _k = "_active_1w3wd_57", yr = {
  root: lk,
  list: ik,
  vertical: ck,
  horizontal: dk,
  item: uk,
  link: fk,
  active: _k
};
function a$({
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
  const d = t ?? n, f = r ?? a ?? "vertical", [u, g] = W(
    () => e[0]?.selector ?? null
  ), m = ne(u);
  m.current = u;
  const y = B(
    (p, x) => {
      if (g(p.selector), (i ?? c)?.({ text: p.text, selector: p.selector }), x) {
        try {
          x.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          x.scrollIntoView();
        }
        const _ = x;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [i, c]
  );
  return be(() => {
    if (e.length === 0) return;
    const x = (() => {
      if (d) {
        const v = document.querySelector(d);
        if (v) return v;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), b = () => {
      let v = null, C = null;
      for (const $ of e) {
        const E = document.querySelector($.selector);
        if (!E) continue;
        _.set($.selector, E);
        const I = E.getBoundingClientRect();
        let M = I.top;
        if (x !== window) {
          const T = x.getBoundingClientRect();
          M = I.top - T.top;
        }
        M <= 80 ? (!C || M > C.el.getBoundingClientRect().top - (x !== window ? x.getBoundingClientRect().top : 0)) && (C = { sel: $.selector, el: E }) : (!v || M < v.top) && (v = { sel: $.selector, top: M });
      }
      const S = C?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== m.current && g(S);
    }, N = () => {
      b();
    };
    if (typeof IntersectionObserver < "u") {
      const v = x === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: x,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((C) => {
        const S = C.filter(($) => $.isIntersecting).sort(($, E) => $.boundingClientRect.top - E.boundingClientRect.top);
        if (S[0]) {
          const $ = S[0].target;
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
          b();
      }, v);
      for (const C of e) {
        const S = document.querySelector(C.selector);
        S && (h.observe(S), _.set(C.selector, S));
      }
    }
    return x === window ? (window.addEventListener("scroll", N, { passive: !0 }), b(), () => {
      window.removeEventListener("scroll", N), h?.disconnect();
    }) : (x.addEventListener("scroll", N, {
      passive: !0
    }), b(), () => {
      x.removeEventListener("scroll", N), h?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [yr.root, yr[f], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: yr.list, children: e.map((p) => {
        const x = p.selector === u;
        return /* @__PURE__ */ o("li", { className: yr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [yr.link, x ? yr.active : null].filter(Boolean).join(" "),
            "aria-current": x ? "location" : void 0,
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
const pk = "_root_1bfit_1", hk = "_viewport_1bfit_17", mk = "_slide_1bfit_24", gk = "_active_1bfit_33", yk = "_arrow_1bfit_37", bk = "_prev_1bfit_71", xk = "_next_1bfit_75", vk = "_pauseBtn_1bfit_79", wk = "_indicators_1bfit_110", kk = "_indicator_1bfit_110", Nk = "_indicatorActive_1bfit_145", fn = {
  root: pk,
  viewport: hk,
  slide: mk,
  active: gk,
  arrow: yk,
  prev: bk,
  next: xk,
  pauseBtn: vk,
  indicators: wk,
  indicator: kk,
  indicatorActive: Nk
};
function l$({
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
  ShowArrows: u,
  showIndicators: g,
  ShowIndicators: m,
  onChange: y,
  Change: p,
  ariaLabel: x = "Carousel",
  className: h
}) {
  const _ = t ?? n, b = _ !== void 0, [N, v] = W(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), C = b ? _ : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), $ = a ?? i ?? !1, E = c ?? s ?? 3e3, I = l ?? d ?? !0, M = f ?? u ?? !0, T = g ?? m ?? !0, [w, k] = W(!1), [A, R] = W(!1), z = w || A, j = ne(null), F = lt(), X = B(
    (xe) => {
      const pe = e.length === 0 ? 0 : (xe % e.length + e.length) % e.length;
      b || v(pe), (y ?? p)?.(pe);
    },
    [b, y, p, e.length]
  ), ie = B(() => {
    X(S - 1);
  }, [X, S]), te = B(() => {
    X(S + 1);
  }, [X, S]), we = B(
    (xe) => {
      X(xe);
    },
    [X]
  );
  be(() => {
    if (!$ || z || e.length <= 1) return;
    const xe = setInterval(() => {
      X(S + 1);
    }, E);
    return () => clearInterval(xe);
  }, [$, z, E, S, X, e.length]);
  const ae = (xe) => {
    e.length !== 0 && (xe.key === "ArrowLeft" ? (xe.preventDefault(), ie()) : xe.key === "ArrowRight" ? (xe.preventDefault(), te()) : xe.key === "Home" ? (xe.preventDefault(), we(0)) : xe.key === "End" && (xe.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    I && $ && R(!0);
  }, K = () => {
    I && $ && R(!1);
  }, me = () => {
    I && $ && R(!0);
  }, ue = () => {
    I && $ && R(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ D(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": x,
      tabIndex: 0,
      className: [fn.root, h].filter(Boolean).join(" "),
      onKeyDown: ae,
      onMouseEnter: _e,
      onMouseLeave: K,
      onFocusCapture: me,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ o("div", { id: F, className: fn.viewport, children: e.map((xe, pe) => {
          const De = pe === S;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${pe + 1} of ${e.length}`,
              "aria-hidden": De ? void 0 : !0,
              hidden: !De,
              className: [fn.slide, De ? fn.active : null].filter(Boolean).join(" "),
              children: xe
            },
            pe
          );
        }) }),
        M && e.length > 1 ? /* @__PURE__ */ D(at, { children: [
          /* @__PURE__ */ o(
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
          /* @__PURE__ */ o(
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
        $ ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: fn.pauseBtn,
            "aria-label": w ? "Resume" : "Pause",
            "aria-pressed": w,
            onClick: () => k((xe) => !xe),
            children: w ? "▶" : "⏸"
          }
        ) : null,
        T && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: fn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((xe, pe) => {
              const De = pe === S;
              return /* @__PURE__ */ o(
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
const Sk = "_root_1aa5u_1", Ok = "_group_1aa5u_20", $k = "_itemWrapper_1aa5u_30", Ek = "_treeitem_1aa5u_34", Tk = "_disabled_1aa5u_50", Ck = "_selected_1aa5u_60", Ak = "_caret_1aa5u_66", Dk = "_caretIcon_1aa5u_113", Mk = "_caretOpen_1aa5u_120", Ik = "_caretPlaceholder_1aa5u_124", zk = "_label_1aa5u_130", Lk = "_loading_1aa5u_137", Rk = "_loadingRow_1aa5u_143", Pk = "_empty_1aa5u_149", jk = "_checkbox_1aa5u_155", Mt = {
  root: Sk,
  group: Ok,
  itemWrapper: $k,
  treeitem: Ek,
  disabled: Tk,
  selected: Ck,
  caret: Ak,
  caretIcon: Dk,
  caretOpen: Mk,
  caretPlaceholder: Ik,
  label: zk,
  loading: Lk,
  loadingRow: Rk,
  empty: Pk,
  checkbox: jk
};
function Bk({
  indeterminate: e,
  ...t
}) {
  const n = ne(null);
  return be(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function i$({
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
  SelectedItem: u,
  selectedItems: g,
  SelectedItems: m,
  defaultSelectedItem: y,
  defaultSelectedItems: p,
  onChange: x,
  Change: h,
  onExpand: _,
  Expand: b,
  onCollapse: N,
  Collapse: v,
  loadChildData: C,
  LoadChildData: S,
  template: $,
  Template: E,
  itemTemplate: I,
  ItemTemplate: M,
  ariaLabel: T,
  AriaLabel: w,
  allowCheckBoxes: k = !1,
  checkedKeys: A,
  defaultCheckedKeys: R,
  onCheckedChange: z,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = a ?? i ?? "text", we = c ?? s ?? "id", ae = l ?? d ?? "single", _e = T ?? w ?? "Tree", K = C ?? S, me = $ ?? E ?? I ?? M, ue = B(
    (q) => {
      const ee = q[we];
      return ee != null ? String(ee) : String(q.id ?? "");
    },
    [we]
  ), xe = B(
    (q) => {
      const ee = q[te];
      if (ee != null) return String(ee);
      const de = q.text;
      return de != null ? String(de) : "";
    },
    [te]
  ), pe = B(
    (q) => {
      if (ie) {
        const de = ie(q);
        if (de !== void 0) return de;
      }
      const ee = q.children;
      if (Array.isArray(ee)) return ee;
    },
    [ie]
  ), De = B(
    (q) => {
      const ee = /* @__PURE__ */ new Set(), de = (Ne) => {
        for (const ke of Ne) {
          const Ce = ue(ke);
          ke.expanded && ee.add(Ce);
          const Ke = pe(ke);
          Ke && Ke.length > 0 && de(Ke);
        }
      };
      return de(q), ee;
    },
    [ue, pe]
  ), [G, $e] = W(
    () => De(X)
  ), [re, Ae] = W(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = W(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = g ?? m, bt = ae === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
    if (ae === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((de) => ue(de)));
      const q = /* @__PURE__ */ new Set(), ee = (de) => {
        for (const Ne of de) {
          Ne.selected && q.add(ue(Ne));
          const ke = pe(Ne);
          ke && ee(ke);
        }
      };
      return ee(X), q;
    } else {
      if (y) return /* @__PURE__ */ new Set([ue(y)]);
      let q = null;
      const ee = (de) => {
        for (const Ne of de) {
          if (Ne.selected)
            return q = ue(Ne), !0;
          const ke = pe(Ne);
          if (ke && ee(ke)) return !0;
        }
        return !1;
      };
      return ee(X), q ? /* @__PURE__ */ new Set([q]) : /* @__PURE__ */ new Set();
    }
  }, [
    ae,
    y,
    p,
    ue,
    pe,
    X
  ]), [L, Y] = W(
    () => Z()
  ), Q = Oe(() => {
    if (ae === "multiple") {
      if (Je !== void 0) {
        const q = Je;
        return q ? new Set(q.map((ee) => ue(ee))) : /* @__PURE__ */ new Set();
      }
      return L;
    } else {
      if (Ge !== void 0) {
        const q = Ge;
        return q ? /* @__PURE__ */ new Set([ue(q)]) : /* @__PURE__ */ new Set();
      }
      return L;
    }
  }, [
    ae,
    Je,
    Ge,
    L,
    ue
  ]), ge = B(
    (q) => {
      let ee;
      const de = (Ne) => {
        for (const ke of Ne) {
          if (ue(ke) === q)
            return ee = ke, !0;
          const Ke = re.get(ue(ke)) ?? pe(ke);
          if (Ke && de(Ke)) return !0;
        }
        return !1;
      };
      if (de(X), !ee) {
        for (const Ne of re.values())
          if (de(Ne)) break;
      }
      return ee;
    },
    [X, re, ue, pe]
  ), le = B(() => {
    const q = /* @__PURE__ */ new Map(), ee = (de) => {
      for (const Ne of de) {
        const ke = ue(Ne);
        q.set(ke, Ne);
        const Ke = re.get(ke) ?? pe(Ne);
        Ke && ee(Ke);
      }
    };
    return ee(X), q;
  }, [X, re, ue, pe]), Ee = B(
    (q) => {
      const ee = ue(q);
      if (!q.disabled)
        if (ae === "multiple") {
          const Ne = new Set(Q);
          Ne.has(ee) ? Ne.delete(ee) : Ne.add(ee), bt || Y(Ne);
          const ke = x ?? h;
          if (ke) {
            const Ce = le(), Ke = [];
            for (const Be of Ne) {
              const dt = Ce.get(Be) ?? ge(Be);
              dt && Ke.push(dt);
            }
            ke({ item: q, selectedItems: Ke });
          }
        } else if (!Q.has(ee) || Q.size !== 1 || !Q.has(ee)) {
          bt || Y(/* @__PURE__ */ new Set([ee]));
          const ke = x ?? h;
          ke && ke({ item: q, selectedItem: q });
        } else {
          const ke = x ?? h;
          ke && ke({ item: q, selectedItem: q });
        }
    },
    [
      ue,
      ae,
      Q,
      bt,
      x,
      h,
      le,
      ge
    ]
  ), je = B(
    async (q) => {
      const ee = ue(q);
      if (!!q.disabled) return;
      const Ne = G.has(ee), ke = _ ?? b, Ce = N ?? v, Ke = pe(q), dt = re.get(ee) ?? Ke, Et = !(dt !== void 0 && dt.length > 0) && K != null;
      if (Ne) {
        $e((ht) => {
          const ze = new Set(ht);
          return ze.delete(ee), ze;
        }), Ce?.({ item: q });
        return;
      }
      if (Et) {
        if (fe.has(ee)) return;
        Fe((ht) => {
          const ze = new Set(ht);
          return ze.add(ee), ze;
        });
        try {
          const ze = await K(q);
          Ae((Tt) => {
            const Zt = new Map(Tt);
            return Zt.set(ee, ze), Zt;
          }), $e((Tt) => {
            const Zt = new Set(Tt);
            return Zt.add(ee), Zt;
          }), ke?.({ item: q });
        } catch {
        } finally {
          Fe((ht) => {
            const ze = new Set(ht);
            return ze.delete(ee), ze;
          });
        }
        return;
      }
      $e((ht) => {
        const ze = new Set(ht);
        return ze.add(ee), ze;
      }), ke?.({ item: q });
    },
    [
      ue,
      G,
      pe,
      re,
      K,
      fe,
      _,
      b,
      N,
      v
    ]
  ), Ze = Oe(() => {
    const q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ue(Ke);
        q.has(Be) || q.set(Be, []), ee.set(Be, Ce), Ke.disabled && de.add(Be);
        const rt = re.get(Be) ?? pe(Ke);
        rt && rt.length > 0 && (q.set(
          Be,
          rt.map((Et) => ue(Et))
        ), Ne(rt, Be));
      }
    };
    return Ne(X, null), { childrenOf: q, parentOf: ee, disabledKeys: de };
  }, [X, re, ue, pe]), Qe = B(
    (q) => {
      const ee = [], de = [...Ze.childrenOf.get(q) ?? []];
      for (; de.length > 0; ) {
        const Ne = de.pop();
        ee.push(Ne), de.push(...Ze.childrenOf.get(Ne) ?? []);
      }
      return ee;
    },
    [Ze]
  ), [nt, Xt] = W(
    () => new Set(R ?? [])
  ), oe = A !== void 0 ? new Set(A) : nt, Le = B(
    (q) => {
      const ee = Ze.disabledKeys;
      return Qe(q).filter((de) => !ee.has(de));
    },
    [Qe, Ze]
  ), Nt = B(
    (q) => {
      if (oe.has(q)) return !0;
      if (!k || !j) return !1;
      const ee = Le(q);
      return ee.length > 0 && ee.every((de) => oe.has(de));
    },
    [oe, k, j, Le]
  ), Rt = B(
    (q) => {
      if (!k || !j || oe.has(q))
        return !1;
      const ee = Le(q);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => oe.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [oe, k, j, Le]
  ), xt = B(
    (q) => {
      if (!k || q.disabled) return;
      const ee = ue(q), de = new Set(oe);
      if (de.has(ee) || Nt(ee)) {
        if (de.delete(ee), j)
          for (const Ne of Le(ee)) de.delete(Ne);
      } else if (de.add(ee), j)
        for (const Ne of Le(ee)) de.add(Ne);
      A === void 0 && Xt(de), z?.([...de]);
    },
    [
      k,
      j,
      A,
      oe,
      Le,
      ue,
      Nt,
      z
    ]
  ), Ie = Oe(() => {
    const q = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, Ke) => {
        const Be = ue(Ce), dt = xe(Ce), rt = re.get(Be) ?? pe(Ce);
        let Et;
        re.has(Be) ? Et = re.get(Be).length > 0 : rt !== void 0 ? Et = rt.length > 0 : K ? Et = !0 : Et = !1;
        const ht = G.has(Be), ze = !!Ce.disabled, Tt = de.length, Zt = Ke + 1;
        if (q.push({
          item: Ce,
          key: Be,
          text: dt,
          level: Ne,
          posInSet: Zt,
          setSize: Tt,
          hasChildren: Et,
          expanded: ht,
          parentKey: ke,
          disabled: ze
        }), Et && ht) {
          const pn = re.get(Be) ?? rt;
          pn && pn.length > 0 && ee(pn, Ne + 1, Be);
        }
      });
    };
    return ee(X, 1, null), q;
  }, [
    X,
    ue,
    xe,
    pe,
    re,
    G,
    K,
    fe
  ]), [qe, vt] = W(
    () => Ie[0]?.key ?? null
  ), $t = ne(""), ct = ne(null), V = ne(null);
  be(() => {
    if (!qe && Ie.length > 0) {
      const q = Ie[0];
      q && vt(q.key);
    } else if (qe && !Ie.some((q) => q.key === qe)) {
      const q = Ie[0];
      vt(q ? q.key : null);
    }
  }, [Ie, qe]), be(() => {
    if (qe) {
      const q = V.current?.querySelector(
        `[data-key="${CSS.escape(qe)}"]`
      );
      let ee = null;
      q || (ee = V.current?.querySelector(
        `[data-key="${qe}"]`
      ) ?? null);
      const de = q ?? ee;
      de && document.activeElement !== de && V.current?.contains(document.activeElement) && de.focus();
    }
  }, [qe]);
  const he = B((q) => {
    vt(q), requestAnimationFrame(() => {
      const ee = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(q) : q;
      let de = V.current?.querySelector(
        `[data-key="${ee}"]`
      );
      de || (de = V.current?.querySelector(`[data-key="${q}"]`) ?? null), de?.focus();
    });
  }, []), Ve = B(
    (q) => Ie.find((de) => de.key === q)?.parentKey ?? null,
    [Ie]
  ), Ye = B(
    (q) => {
      if (Ie.length === 0) return;
      const ee = qe ? Ie.findIndex((ke) => ke.key === qe) : -1, de = ee >= 0 ? Ie[ee] : void 0;
      let Ne = null;
      if (q.key === "ArrowDown") {
        if (q.preventDefault(), ee === -1)
          Ne = Ie[0]?.key ?? null;
        else {
          const ke = (ee + 1) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && he(Ne);
        return;
      }
      if (q.key === "ArrowUp") {
        if (q.preventDefault(), ee === -1) {
          const ke = Ie[Ie.length - 1];
          ke && (Ne = ke.key);
        } else {
          const ke = (ee - 1 + Ie.length) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && he(Ne);
        return;
      }
      if (q.key === "ArrowRight") {
        if (q.preventDefault(), !de) return;
        if (de.hasChildren && !de.expanded)
          je(de.item);
        else if (de.hasChildren && de.expanded) {
          const ke = ee + 1, Ce = Ie[ke];
          Ce && Ce.parentKey === de.key && he(Ce.key);
        }
        return;
      }
      if (q.key === "ArrowLeft") {
        if (q.preventDefault(), !de) return;
        if (de.hasChildren && de.expanded)
          je(de.item);
        else {
          const ke = Ve(de.key);
          ke && he(ke);
        }
        return;
      }
      if (q.key === "Home") {
        q.preventDefault();
        const ke = Ie[0];
        ke && he(ke.key);
        return;
      }
      if (q.key === "End") {
        q.preventDefault();
        const ke = Ie[Ie.length - 1];
        ke && he(ke.key);
        return;
      }
      if (q.key === "Enter" || q.key === " ") {
        if (q.key === " " && q.target?.tagName === "INPUT" || (q.preventDefault(), !de)) return;
        if (q.key === " " && k) {
          const ke = ge(de.key);
          ke && xt(ke);
          return;
        }
        Ee(de.item);
        return;
      }
      if (q.key.length === 1 && /^[a-zA-Z0-9]$/.test(q.key)) {
        q.preventDefault();
        const ke = ($t.current + q.key).toLowerCase();
        $t.current = ke, ct.current && clearTimeout(ct.current), ct.current = setTimeout(() => {
          $t.current = "";
        }, 500);
        const Ce = ee >= 0 ? ee + 1 : 0, dt = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((rt) => rt.text.toLowerCase().startsWith(ke));
        dt && he(dt.key);
        return;
      }
    },
    [
      Ie,
      qe,
      he,
      je,
      Ee,
      Ve,
      k,
      xt
    ]
  ), Pt = B(() => {
    if (!qe && Ie.length > 0) {
      const q = Ie[0];
      q && vt(q.key);
    }
  }, [qe, Ie]), Xe = (q, ee, de) => /* @__PURE__ */ o("ul", { role: "group", className: Mt.group, children: q.map((Ne, ke) => {
    const Ce = ue(Ne), Ke = xe(Ne), Be = re.get(Ce) ?? pe(Ne);
    let dt;
    re.has(Ce) ? dt = re.get(Ce).length > 0 : Be !== void 0 ? dt = Be.length > 0 : K ? dt = !0 : dt = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), ht = !!Ne.disabled, ze = fe.has(Ce), Tt = qe === Ce, Zt = q.length, pn = ke + 1, Cn = me ? me(Ne) : Ke, Fn = k ? {
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
          "aria-expanded": dt ? rt : void 0,
          "aria-selected": Et,
          "aria-level": ee,
          "aria-setsize": Zt,
          "aria-posinset": pn,
          "aria-disabled": ht || void 0,
          "aria-busy": ze || void 0,
          className: [
            Mt.treeitem,
            Et ? Mt.selected : null,
            ht ? Mt.disabled : null,
            Tt ? Mt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            he(Ce), ht || Ee(Ne);
          },
          onFocus: () => vt(Ce),
          children: [
            k ? /* @__PURE__ */ o(
              Bk,
              {
                className: Mt.checkbox,
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
                className: Mt.caret,
                "aria-label": `${rt ? "Collapse" : "Expand"} ${Ke}`,
                "aria-expanded": rt,
                tabIndex: -1,
                disabled: ht,
                onClick: (kn) => {
                  kn.stopPropagation(), he(Ce), je(Ne);
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
            /* @__PURE__ */ o("span", { className: Mt.label, children: Cn }),
            ze ? /* @__PURE__ */ o("span", { className: Mt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && rt ? ze ? /* @__PURE__ */ o("div", { className: Mt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : re.has(Ce) && re.get(Ce).length > 0 ? Xe(
        re.get(Ce),
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
      "aria-multiselectable": ae === "multiple" || void 0,
      tabIndex: 0,
      className: [Mt.root, F].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: X.length === 0 ? /* @__PURE__ */ o("div", { className: Mt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const Fk = "_root_10fdq_1", Hk = "_panel_10fdq_8", Uk = "_header_10fdq_19", Wk = "_listbox_10fdq_28", qk = "_option_10fdq_42", Kk = "_disabled_10fdq_57", Gk = "_active_10fdq_66", Vk = "_selected_10fdq_70", Yk = "_empty_10fdq_86", Xk = "_controls_10fdq_93", Zk = "_reorder_10fdq_102", Jk = "_btn_10fdq_110", tt = {
  root: Fk,
  panel: Hk,
  header: Uk,
  listbox: Wk,
  option: qk,
  disabled: Kk,
  active: Gk,
  selected: Vk,
  empty: Yk,
  controls: Xk,
  reorder: Zk,
  btn: Jk
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ho(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function c$({
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
  SourceChange: u,
  onTargetChange: g,
  TargetChange: m,
  keyProperty: y,
  KeyProperty: p,
  onMove: x,
  Move: h,
  ariaLabel: _,
  AriaLabel: b,
  className: N
}) {
  const v = y ?? p ?? "id", C = _ ?? b ?? "PickList", S = e ?? t ?? a ?? i ?? l ?? d ?? [], $ = n ?? r ?? c ?? s ?? [], [E, I] = W(() => [
    ...S
  ]), [M, T] = W(() => [
    ...$
  ]);
  be(() => {
    const L = e ?? t ?? a ?? i ?? l ?? d;
    L !== void 0 && I([...L]);
  }, [e, t, a, i, l, d]), be(() => {
    const L = n ?? r ?? c ?? s;
    L !== void 0 && T([...L]);
  }, [n, r, c, s]);
  const [w, k] = W(
    () => /* @__PURE__ */ new Set()
  ), [A, R] = W(
    () => /* @__PURE__ */ new Set()
  ), [z, j] = W(() => {
    const L = S.findIndex((Y) => !Y.disabled);
    return L >= 0 ? L : 0;
  }), [F, X] = W(() => {
    const L = $.findIndex((Y) => !Y.disabled);
    return L >= 0 ? L : 0;
  }), ie = Oe(
    () => E.map((L, Y) => L.disabled ? -1 : Y).filter((L) => L >= 0),
    [E]
  ), te = Oe(
    () => M.map((L, Y) => L.disabled ? -1 : Y).filter((L) => L >= 0),
    [M]
  );
  be(() => {
    if (z >= E.length) {
      const L = ie[ie.length - 1];
      j(L ?? 0);
    } else if (E.length > 0 && ie.length > 0 && !ie.includes(z)) {
      const L = ie[0];
      L !== void 0 && j(L);
    }
  }, [z, E.length, ie]), be(() => {
    if (F >= M.length) {
      const L = te[te.length - 1];
      X(L ?? 0);
    } else if (M.length > 0 && te.length > 0 && !te.includes(F)) {
      const L = te[0];
      L !== void 0 && X(L);
    }
  }, [F, M.length, te]), be(() => {
    k((L) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of L)
        E.some(
          (le) => It(le, v) === Q && !le.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [E, v]), be(() => {
    R((L) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of L)
        M.some(
          (le) => It(le, v) === Q && !le.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [M, v]);
  const we = B(
    (L) => {
      (f ?? u)?.(L);
    },
    [f, u]
  ), ae = B(
    (L) => {
      (g ?? m)?.(L);
    },
    [g, m]
  ), _e = B(
    (L) => {
      (x ?? h)?.(L);
    },
    [x, h]
  ), K = B(
    (L) => {
      const Y = E[L];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      k((ge) => {
        const le = new Set(ge);
        return le.has(Q) ? le.delete(Q) : le.add(Q), le;
      }), j(L);
    },
    [E, v]
  ), me = B(
    (L) => {
      const Y = M[L];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      R((ge) => {
        const le = new Set(ge);
        return le.has(Q) ? le.delete(Q) : le.add(Q), le;
      }), X(L);
    },
    [M, v]
  ), ue = B(() => {
    const L = [], Y = [];
    for (const Ee of E) {
      const je = It(Ee, v);
      w.has(je) && !Ee.disabled ? L.push(Ee) : Y.push(Ee);
    }
    if (L.length === 0) return;
    const Q = Y, ge = [...M, ...L];
    I(Q), T(ge), k(/* @__PURE__ */ new Set());
    const le = new Set(L.map((Ee) => It(Ee, v)));
    R(le), we(Q), ae(ge), _e({
      source: Q,
      target: ge,
      moved: L,
      direction: "toTarget"
    });
  }, [
    E,
    M,
    w,
    v,
    we,
    ae,
    _e
  ]), xe = B(() => {
    const L = [], Y = [];
    for (const Ee of M) {
      const je = It(Ee, v);
      A.has(je) && !Ee.disabled ? L.push(Ee) : Y.push(Ee);
    }
    if (L.length === 0) return;
    const Q = Y, ge = [...E, ...L];
    T(Q), I(ge), R(/* @__PURE__ */ new Set());
    const le = new Set(L.map((Ee) => It(Ee, v)));
    k(le), we(ge), ae(Q), _e({
      source: ge,
      target: Q,
      moved: L,
      direction: "toSource"
    });
  }, [
    E,
    M,
    A,
    v,
    we,
    ae,
    _e
  ]), pe = B(() => {
    const L = E.filter((ge) => !ge.disabled);
    if (L.length === 0) return;
    const Y = E.filter((ge) => !!ge.disabled), Q = [...M, ...L];
    I(Y), T(Q), k(/* @__PURE__ */ new Set()), we(Y), ae(Q), _e({
      source: Y,
      target: Q,
      moved: L,
      direction: "allToTarget"
    });
  }, [
    E,
    M,
    v,
    we,
    ae,
    _e
  ]), De = B(() => {
    const L = M.filter((ge) => !ge.disabled);
    if (L.length === 0) return;
    const Y = M.filter((ge) => !!ge.disabled), Q = [...E, ...L];
    T(Y), I(Q), R(/* @__PURE__ */ new Set()), we(Q), ae(Y), _e({
      source: Q,
      target: Y,
      moved: L,
      direction: "allToSource"
    });
  }, [E, M, we, ae, _e]), G = B(() => {
    if (A.size === 0) return;
    const L = [...M], Y = A, Q = [];
    for (let le = 1; le < L.length; le++) {
      const Ee = L[le], je = L[le - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (L[le - 1] = Ee, L[le] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    T(L), ae(L), _e({ source: E, target: L, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const le = L.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      le >= 0 && X(le);
    }
  }, [
    M,
    A,
    v,
    E,
    ae,
    _e
  ]), $e = B(() => {
    if (A.size === 0) return;
    const L = [...M], Y = A, Q = [];
    for (let le = L.length - 2; le >= 0; le--) {
      const Ee = L[le], je = L[le + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (L[le] = je, L[le + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    T(L), ae(L), _e({ source: E, target: L, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const le = L.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      le >= 0 && X(le);
    }
  }, [
    M,
    A,
    v,
    E,
    ae,
    _e
  ]), re = w.size > 0, Ae = A.size > 0, fe = ne(""), Fe = ne(
    null
  ), Ge = ne(""), Je = ne(
    null
  ), At = B(
    (L) => {
      if (E.length === 0) return;
      const Y = ie;
      if (Y.length === 0) return;
      const Q = Y.includes(z) ? z : Y[0] ?? 0;
      let ge = -1;
      if (L.key === "ArrowDown") {
        L.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "ArrowUp") {
        L.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "Home")
        L.preventDefault(), ge = Y[0] ?? 0;
      else if (L.key === "End")
        L.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (L.key === "Enter" || L.key === " ") {
        L.preventDefault(), K(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(L.key)) {
        L.preventDefault();
        const le = (fe.current + L.key).toLowerCase();
        fe.current = le, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => ho(E[Qe]).toLowerCase().startsWith(le)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [E, ie, z, K]
  ), it = B(
    (L) => {
      if (M.length === 0) return;
      const Y = te;
      if (Y.length === 0) return;
      const Q = Y.includes(F) ? F : Y[0] ?? 0;
      let ge = -1;
      if (L.key === "ArrowDown") {
        L.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "ArrowUp") {
        L.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "Home")
        L.preventDefault(), ge = Y[0] ?? 0;
      else if (L.key === "End")
        L.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (L.key === "Enter" || L.key === " ") {
        L.preventDefault(), me(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(L.key)) {
        L.preventDefault();
        const le = (Ge.current + L.key).toLowerCase();
        Ge.current = le, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => ho(M[Qe]).toLowerCase().startsWith(le)
        );
        Ze != null && X(Ze);
        return;
      }
      ge >= 0 && X(ge);
    },
    [M, te, F, me]
  ), bt = ne(null), Z = ne(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [tt.root, N].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ D("div", { className: tt.panel, children: [
          /* @__PURE__ */ o("div", { className: tt.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: bt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: tt.listbox,
              onKeyDown: At,
              children: E.length === 0 ? (
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
              ) : E.map((L, Y) => {
                const Q = It(L, v), ge = w.has(Q), le = Y === z, Ee = !!L.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": le || void 0,
                    className: [
                      tt.option,
                      ge ? tt.selected : null,
                      le ? tt.active : null,
                      Ee ? tt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => K(Y),
                    children: ho(L)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: tt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !re || void 0,
              disabled: !re,
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
              "aria-disabled": E.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: E.filter((L) => !L.disabled).length === 0,
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
              "aria-disabled": E.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: E.filter((L) => !L.disabled).length === 0,
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
              onClick: xe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": M.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: M.filter((L) => !L.disabled).length === 0,
              onClick: De,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: tt.panel, children: [
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
              onKeyDown: it,
              children: M.length === 0 ? (
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
              ) : M.map((L, Y) => {
                const Q = It(L, v), ge = A.has(Q), le = Y === F, Ee = !!L.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": le || void 0,
                    className: [
                      tt.option,
                      ge ? tt.selected : null,
                      le ? tt.active : null,
                      Ee ? tt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => me(Y),
                    children: ho(L)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ D("div", { className: tt.reorder, children: [
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
const Qk = "_root_1qxsp_1", eN = "_header_1qxsp_8", tN = "_title_1qxsp_15", nN = "_navBtn_1qxsp_20", rN = "_resources_1qxsp_39", oN = "_resource_1qxsp_39", sN = "_grid_1qxsp_50", aN = "_timeCol_1qxsp_55", lN = "_timeCell_1qxsp_61", iN = "_dayCol_1qxsp_66", cN = "_dayHeader_1qxsp_73", dN = "_slot_1qxsp_81", uN = "_event_1qxsp_91", Gt = {
  root: Qk,
  header: eN,
  title: tN,
  navBtn: nN,
  resources: rN,
  resource: oN,
  grid: sN,
  timeCol: aN,
  timeCell: lN,
  dayCol: iN,
  dayHeader: cN,
  slot: dN,
  event: uN
};
function ya(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function d$({
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
  const [d, f] = W(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? d, g = (p) => {
    n || f(p), r?.(p);
  }, m = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (p, x) => {
    const h = new Date(u);
    return h.setDate(u.getDate() - u.getDay() + x), h;
  }) : Array.from({ length: 30 }, (p, x) => {
    const h = new Date(u);
    return h.setDate(1 + x), h;
  }), y = Array.from({ length: 12 }, (p, x) => 8 + x);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Gt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ D("div", { className: Gt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(u);
                p.setDate(p.getDate() - 7), g(p);
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
                const p = new Date(u);
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
        /* @__PURE__ */ D("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Gt.timeCol, role: "presentation", children: y.map((p) => /* @__PURE__ */ D("div", { className: Gt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          m.map((p) => /* @__PURE__ */ D(
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
                y.map((x) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(p);
                      h.setHours(x), c?.({ date: h });
                    }
                  },
                  x
                )),
                e.filter((x) => x.start.toDateString() === p.toDateString()).map((x) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${x.title} ${ya(x.start)} - ${ya(x.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: x }),
                    children: x.title
                  },
                  x.id
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
const fN = "_root_dj5ne_1", _N = "_header_dj5ne_8", pN = "_headerCell_dj5ne_15", hN = "_timeline_dj5ne_21", mN = "_row_dj5ne_26", gN = "_taskName_dj5ne_32", yN = "_timelineCell_dj5ne_37", bN = "_bar_dj5ne_43", xN = "_progress_dj5ne_56", vN = "_dep_dj5ne_61", Tn = {
  root: fN,
  header: _N,
  headerCell: pN,
  timeline: hN,
  row: mN,
  taskName: gN,
  timelineCell: yN,
  bar: bN,
  progress: xN,
  dep: vN
};
function u$({
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
      className: [Tn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ D("div", { className: Tn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Tn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: Tn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ D(
          "div",
          {
            className: Tn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Tn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ D("div", { className: Tn.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Tn.bar,
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
                        className: Tn.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((l) => /* @__PURE__ */ o("svg", { className: Tn.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
const wN = "_root_4b64f_1", kN = "_fields_4b64f_6", NN = "_chip_4b64f_13", SN = "_table_4b64f_35", ON = "_totalRow_4b64f_55", $N = "_total_4b64f_55", br = {
  root: wN,
  fields: kN,
  chip: NN,
  table: SN,
  totalRow: ON,
  total: $N
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
function f$({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, f = (x, h, _) => {
    const b = x === "row" ? s.filter((C) => C.property !== h) : s, N = x === "col" ? l.filter((C) => C.property !== h) : l, v = x === "agg" ? d.filter((C) => !(C.property === h && C.aggregate === _)) : d;
    a?.({
      rowFields: b,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (x, h) => h.map((_) => String(x[_.property])).join(""), g = [
    ...new Set(s.length ? e.map((x) => u(x, s)) : [""])
  ].sort(), m = [
    ...new Set(l.length ? e.map((x) => u(x, l)) : [""])
  ].sort(), y = (x, h, _) => {
    const b = e.filter(
      (v) => u(v, s) === x && u(v, l) === h
    ), N = b.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !N.length && _.aggregate !== "Count" ? 0 : mo[_.aggregate](
      _.aggregate === "Count" ? b.map(() => 1) : N
    );
  }, p = (x, h, _, b) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: br.chip,
      "aria-label": `Remove ${x} field ${_}`,
      onClick: () => f(x, h, b),
      children: [
        _,
        b ? ` (${b})` : ""
      ]
    },
    `${x}-${_}-${b ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [br.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: br.fields, children: [
      s.map((x) => p("row", x.property, x.title ?? x.property)),
      l.map((x) => p("col", x.property, x.title ?? x.property)),
      d.map(
        (x) => p("agg", x.property, x.title ?? x.property, x.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: br.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((x) => x.title ?? x.property).join(" / ") || "Total" }),
        m.map((x) => /* @__PURE__ */ o("th", { scope: "col", children: x || "—" }, x)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        g.map((x) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: x || "—" }),
          m.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: Hr(
                y(
                  x,
                  h,
                  d[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: d.length ? Hr(y(x, h, d[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: br.total, children: d.length ? Hr(
            mo[d[0].aggregate](
              m.flatMap(
                (h) => e.filter(
                  (_) => u(_, s) === x && u(_, l) === h
                ).map((_) => Number(_[d[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, x)),
        /* @__PURE__ */ D("tr", { className: br.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          m.map((x) => /* @__PURE__ */ o("td", { children: d.length ? Hr(
            mo[d[0].aggregate](
              e.filter((h) => u(h, l) === x).map((h) => Number(h[d[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, x)),
          /* @__PURE__ */ o("td", { children: d.length ? Hr(
            mo[d[0].aggregate](
              e.map((x) => Number(x[d[0].property])).filter((x) => !Number.isNaN(x))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const EN = "_root_1r7co_1", TN = "_reverse_1r7co_10", CN = "_item_1r7co_14", AN = "_marker_1r7co_35", DN = "_body_1r7co_46", MN = "_label_1r7co_50", IN = "_content_1r7co_56", rr = {
  root: EN,
  reverse: TN,
  item: CN,
  marker: AN,
  body: DN,
  label: MN,
  content: IN
};
function _$({
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
      children: a.map((i, c) => /* @__PURE__ */ D("li", { className: rr.item, children: [
        /* @__PURE__ */ o("span", { className: rr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: rr.body, children: [
          /* @__PURE__ */ o("div", { className: rr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: rr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const zN = "_root_rm4d8_1", LN = "_header_rm4d8_13", RN = "_headCell_rm4d8_22", PN = "_row_rm4d8_32", jN = "_cell_rm4d8_37", Ur = {
  root: zN,
  header: LN,
  headCell: RN,
  row: PN,
  cell: jN
};
function p$({
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
  ), [d, f] = W(0), u = ne(/* @__PURE__ */ new Set()), g = Math.ceil(n / t), m = Math.max(0, Math.floor(d / t) - 3), y = Math.min(e, m + g + 6), p = B(
    (h, _) => {
      let b = !1;
      for (let N = h; N < _; N++)
        !s.has(N) && !u.current.has(N) && (b = !0);
      if (b) {
        for (let N = h; N < _; N++) u.current.add(N);
        r({ skip: h, top: _ }).then((N) => {
          l((v) => {
            const C = new Map(v);
            return N.forEach((S, $) => C.set(h + $, S)), C;
          });
          for (let v = h; v < _; v++) u.current.delete(v);
        });
      }
    },
    [s, r]
  );
  be(() => {
    p(m, y);
  }, [m, y]);
  const x = [];
  for (let h = m; h < y; h++) {
    const _ = s.get(h) ?? {};
    x.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Ur.row,
          role: "row",
          style: { height: t },
          children: a.map((b) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Ur.cell,
              style: b.width ? { width: b.width } : void 0,
              children: String(_[b.property] ?? "")
            },
            b.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ur.root, c].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (h) => f(h.target.scrollTop),
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
        x,
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
var vn;
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
      let u = [];
      for (let m = 0; m < this.size; m++) u.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(d);
      if (this.drawCodewords(g), f == -1) {
        let m = 1e9;
        for (let y = 0; y < 8; y++) {
          this.applyMask(y), this.drawFormatBits(y);
          const p = this.getPenaltyScore();
          p < m && (f = y, m = p), this.applyMask(y);
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
    static encodeSegments(s, l, d = 1, f = 40, u = -1, g = !0) {
      if (!(t.MIN_VERSION <= d && d <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let m, y;
      for (m = d; ; m++) {
        const _ = t.getNumDataCodewords(m, l) * 8, b = i.getTotalBits(s, m);
        if (b <= _) {
          y = b;
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
        g && y <= t.getNumDataCodewords(m, _) * 8 && (l = _);
      let p = [];
      for (const _ of s) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(m), p);
        for (const b of _.getData()) p.push(b);
      }
      a(p.length == y);
      const x = t.getNumDataCodewords(m, l) * 8;
      a(p.length <= x), n(0, Math.min(4, x - p.length), p), n(0, (8 - p.length % 8) % 8, p), a(p.length % 8 == 0);
      for (let _ = 236; p.length < x; _ ^= 253)
        n(_, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (_, b) => h[b >>> 3] |= _ << 7 - (b & 7)
      ), new t(m, l, h, u);
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
      for (let u = 0; u < 10; u++) d = d << 1 ^ (d >>> 9) * 1335;
      const f = (l << 10 | d) ^ 21522;
      a(f >>> 15 == 0);
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
      for (let d = 0; d < 12; d++) s = s << 1 ^ (s >>> 11) * 7973;
      const l = this.version << 12 | s;
      a(l >>> 18 == 0);
      for (let d = 0; d < 18; d++) {
        const f = r(l, d), u = this.size - 11 + d % 3, g = Math.floor(d / 3);
        this.setFunctionModule(u, g, f), this.setFunctionModule(g, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(d)), g = s + f, m = l + d;
          0 <= g && g < this.size && 0 <= m && m < this.size && this.setFunctionModule(g, m, u != 2 && u != 4);
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
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], u = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], g = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), m = f - g % f, y = Math.floor(g / f);
      let p = [];
      const x = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, b = 0; _ < f; _++) {
        let N = s.slice(
          b,
          b + y - u + (_ < m ? 0 : 1)
        );
        b += N.length;
        const v = t.reedSolomonComputeRemainder(N, x);
        _ < m && N.push(0), p.push(N.concat(v));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((b, N) => {
          (_ != y - u || N >= m) && h.push(b[_]);
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
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const g = d - u, y = (d + 1 & 2) == 0 ? this.size - 1 - f : f;
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
      for (let u = 0; u < this.size; u++) {
        let g = !1, m = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[u][p] == g ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, y), g || (s += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), g = this.modules[u][p], m = 1);
        s += this.finderPenaltyTerminateAndCount(g, m, y) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let g = !1, m = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][u] == g ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, y), g || (s += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), g = this.modules[p][u], m = 1);
        s += this.finderPenaltyTerminateAndCount(g, m, y) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let g = 0; g < this.size - 1; g++) {
          const m = this.modules[u][g];
          m == this.modules[u][g + 1] && m == this.modules[u + 1][g] && m == this.modules[u + 1][g + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const u of this.modules)
        l = u.reduce((g, m) => g + (m ? 1 : 0), l);
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
        for (let u = 0; u < l.length; u++)
          l[u] = t.reedSolomonMultiply(l[u], d), u + 1 < l.length && (l[u] ^= l[u + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let d = l.map((f) => 0);
      for (const f of s) {
        const u = f ^ d.shift();
        d.push(0), l.forEach(
          (g, m) => d[m] ^= t.reedSolomonMultiply(g, u)
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
        const u = f.mode.numCharCountBits(l);
        if (f.numChars >= 1 << u) return 1 / 0;
        d += 4 + u + f.bitData.length;
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
})(vn || (vn = {}));
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
})(vn || (vn = {}));
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
})(vn || (vn = {}));
const BN = "_root_1leml_1", FN = {
  root: BN
}, HN = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function h$({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = ne(null), f = is("(prefers-color-scheme: dark)"), [u, g] = W(null);
  be(() => {
    const N = document.documentElement;
    g(N.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      g(N.dataset.theme ?? null);
    });
    return v.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const m = Oe(() => {
    try {
      return vn.QrCode.encodeText(e, HN[r]);
    } catch {
      return null;
    }
  }, [e, r]), y = ne(null);
  be(() => {
    if (m !== null) {
      y.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (y.current?.value !== e || y.current?.onError !== s) && (y.current = { value: e, onError: s }, s?.(N));
  }, [m, e, s]);
  const p = Math.max(0, Math.floor(a)), x = [FN.root, c].filter(Boolean).join(" ");
  if (be(() => {
    if (n !== "canvas" || m === null) return;
    const N = d.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const C = getComputedStyle(N), S = C.getPropertyValue("--dx-text-color").trim() || "#000", $ = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    UN(v, m, t, p, S, $);
  }, [n, m, t, p, f, u]), m === null)
    return /* @__PURE__ */ o("div", { className: x, role: "img", "aria-label": l, "data-qr-error": "true" });
  const h = m.size + p * 2, _ = t / h;
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
  const b = [];
  for (let N = 0; N < m.size; N++)
    for (let v = 0; v < m.size; v++)
      m.getModule(v, N) && b.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (v + p) * _,
            y: (N + p) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${N}`
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
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: b })
      ]
    }
  );
}
function UN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const WN = "_root_1v9la_1", qN = "_value_1v9la_9", ba = {
  root: WN,
  value: qN
}, xa = [
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
], va = 104, KN = 106;
function GN(e) {
  const t = [va];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = va;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, KN), t;
}
function m$({
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
    for (const f of GN(e)) {
      const u = xa[f] ?? xa[0];
      for (let g = 0; g < u.length; g++) {
        const m = Number(u[g]);
        g % 2 === 0 && l.push({ x: d, w: m }), d += m;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [ba.root, i].filter(Boolean).join(" "), children: [
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
    r && /* @__PURE__ */ o("span", { className: ba.value, children: e })
  ] });
}
const VN = "_root_16i43_1", YN = "_svg_16i43_10", XN = "_gridline_16i43_15", ZN = "_tickLabel_16i43_21", JN = "_axisTitle_16i43_27", QN = "_dataLabel_16i43_34", eS = "_gaugeValue_16i43_40", tS = "_legend_16i43_47", nS = "_legendItem_16i43_55", rS = "_swatch_16i43_63", oS = "_tooltip_16i43_70", sS = "_visuallyHidden_16i43_84", ot = {
  root: VN,
  svg: YN,
  gridline: XN,
  tickLabel: ZN,
  axisTitle: JN,
  dataLabel: QN,
  gaugeValue: eS,
  legend: tS,
  legendItem: nS,
  swatch: rS,
  tooltip: oS,
  visuallyHidden: sS
}, wa = [
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
]), aS = /* @__PURE__ */ new Set([...Za, "heatmap"]);
function lS(e, t, n) {
  const r = t - e || 1, a = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / a) * a, c = Math.ceil(t / a) * a, s = [];
  for (let l = i; l <= c + 1e-9; l += a)
    s.push(Number(l.toFixed(6)));
  return { min: i, max: c, step: a, ticks: s };
}
function ns(e) {
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
function wn(e, t, n) {
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
const Ut = (e) => e * Math.PI / 180;
function fs(e, t, n, r, a) {
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
function iS(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Yr(e, t) {
  return e.percent ? `${t}%` : String(t);
}
const cS = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function dS(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && cS.has(a.type)) return a;
  }
  return null;
}
function uS(e, t, n, r) {
  const a = dS(e, t, n);
  if (!a) return null;
  const i = ns(a).filter((f) => !Number.isNaN(f.val));
  if (i.length === 0) return null;
  const c = i.map((f) => f.cat);
  let s;
  if (t.type === "trendline") {
    const f = i.length, u = i.map((_, b) => b), g = i.map((_) => _.val), m = u.reduce((_, b) => _ + b, 0) / f, y = g.reduce((_, b) => _ + b, 0) / f;
    let p = 0, x = 0;
    for (let _ = 0; _ < f; _++)
      p += (u[_] - m) * (g[_] - y), x += (u[_] - m) * (u[_] - m);
    const h = x === 0 ? 0 : p / x;
    s = c.map((_, b) => ({
      cat: _,
      val: y + h * (b - m)
    }));
  } else {
    const f = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((u, g) => {
      if (g + 1 < f) return null;
      const m = i.slice(g + 1 - f, g + 1);
      return {
        cat: u.cat,
        val: m.reduce((y, p) => y + p.val, 0) / f
      };
    }).filter((u) => u != null);
  }
  if (s.length === 0) return null;
  const l = {
    ...t,
    stack: void 0,
    categoryProperty: "__cat",
    valueProperty: "__val",
    data: s.map((f, u) => ({
      __cat: f.cat,
      __val: f.val,
      __item: i[u + (i.length - s.length)]?.item
    })),
    markers: { ...t.markers ?? {}, visible: t.markers?.visible ?? !1 }
  }, d = ns(l).map((f) => ({
    ...f,
    item: f.item.__item ?? f.item
  }));
  return Ja(e, l, n, d, r);
}
function fS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((u, g) => [u, g])), s = n.map((u) => {
    const g = c.get(u.cat) ?? 0, m = u.min, y = u.max;
    return typeof m != "number" || Number.isNaN(m) || typeof y != "number" || Number.isNaN(y) ? null : { x: r(g), lo: a(m), hi: a(y) };
  });
  if (s.some((u) => u == null)) return null;
  const l = s.map((u) => `L ${u.x} ${u.hi}`).join(" "), d = [...s].reverse().map((u) => `L ${u.x} ${u.lo}`).join(" "), f = s[0];
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
function _S(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s } = e, l = i.l + c / 2, d = i.t + s / 2, f = Math.min(c, s) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, g = r.reduce((y, p) => y + (Number(p.val) || 0), 0);
  let m = -90;
  return wn(
    n,
    t,
    r.map((y, p) => {
      const x = g ? y.val / g * 360 : 0, h = m, _ = m + x;
      m = _;
      const b = x > 180 ? 1 : 0, N = l + f * Math.cos(Ut(h)), v = d + f * Math.sin(Ut(h)), C = l + f * Math.cos(Ut(_)), S = d + f * Math.sin(Ut(_)), $ = l + u * Math.cos(Ut(_)), E = d + u * Math.sin(Ut(_)), I = l + u * Math.cos(Ut(h)), M = d + u * Math.sin(Ut(h)), T = u ? `M ${N} ${v} A ${f} ${f} 0 ${b} 1 ${C} ${S} L ${$} ${E} A ${u} ${u} 0 ${b} 0 ${I} ${M} Z` : `M ${l} ${d} L ${N} ${v} A ${f} ${f} 0 ${b} 1 ${C} ${S} Z`, w = (h + _) / 2, k = l + (f + 12) * Math.cos(Ut(w)), A = d + (f + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: T,
            fill: a,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, A, `${t.title ?? y.cat}: ${y.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, y.cat, y.val, y.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: k,
            y: A,
            textAnchor: "middle",
            className: ot.dataLabel,
            children: y.val
          }
        )
      ] }, p);
    })
  );
}
function pS(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: f } = e, u = new Map(f.map((g, m) => [g, m]));
  return wn(
    n,
    t,
    r.map((g, m) => {
      const y = u.get(g.cat) ?? 0, p = Number(r[m].cat), x = Number.isNaN(p) ? l(y) : i.l + (p - s.min) / (s.max - s.min || 1) * c, h = d(g.val), _ = t.type === "bubble" && g.size !== void 0 ? Math.max(4, Math.min(12, g.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        fs(x, h, a, t, _),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: x,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(x, h, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, m);
    })
  );
}
function Ja(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, f = new Map(l.map((y, p) => [y, p])), u = (y) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let x = 0; x < n; x++) {
      const h = d[x];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (b) => String(b[h.categoryProperty] ?? "") === y
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, g = r.map((y, p) => {
    const x = f.get(y.cat) ?? 0, h = u(y.cat);
    return `${p === 0 ? "M" : "L"} ${c(x)} ${s(h + y.val)}`;
  }).join(" "), m = r.map((y, p) => {
    const x = f.get(y.cat) ?? 0, h = u(y.cat);
    return `${p === 0 ? "M" : "L"} ${c(x)} ${s(h)}`;
  }).join(" ");
  return wn(
    n,
    t,
    /* @__PURE__ */ D(at, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${g} L ${c(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${c(0)} ${s(u(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      fS(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: g,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: iS(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: m, fill: "none", stroke: "transparent" }),
      r.map((y, p) => {
        const x = f.get(y.cat) ?? 0, h = u(y.cat), _ = c(x), b = s(h + y.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          fs(_, b, a, t, 4),
          /* @__PURE__ */ o(
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
              y: b - 8,
              textAnchor: "middle",
              className: ot.dataLabel,
              children: Yr(e, y.val)
            }
          )
        ] }, p);
      })
    ] })
  );
}
function hS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: f, categories: u, series: g } = e, m = new Map(u.map((p, x) => [p, x])), y = t.type === "bar";
  return wn(
    n,
    t,
    r.map((p, x) => {
      const h = m.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const A = g[k];
          if (A?.stack !== t.stack) continue;
          const R = A.data.find(
            (z) => String(z[A.categoryProperty] ?? "") === p.cat
          );
          R && (_ += Number(R[A.valueProperty]) || 0);
        }
      const b = _ + p.val, N = typeof p.min == "number" && !Number.isNaN(p.min) && typeof p.max == "number" && !Number.isNaN(p.max), v = g.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, C = c / Math.max(1, u.length), S = y ? 18 : Math.max(12, C / (t.stack ? 1 : g.length) - 4), $ = y ? i.l + _ / (l.max - l.min || 1) * c : d(h) - S / 2 + (t.stack ? 0 : n % v * S), E = y ? i.t + h * s / Math.max(1, u.length) + 4 : f(N ? _ + p.max : b), I = y ? N ? (p.max - p.min) / (l.max - l.min || 1) * c : p.val / (l.max - l.min || 1) * c : S - 4, M = y ? 16 : N ? f(_ + p.min) - f(_ + p.max) : f(_) - f(b), T = y ? i.l + (_ + (N ? p.min : 0)) / (l.max - l.min || 1) * c : $, w = y ? i.t + h * s / Math.max(1, u.length) + 4 : E;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: T,
            y: w,
            width: y ? I : S - 4,
            height: M,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              T + (y ? I : S) / 2,
              w,
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
            x: T + (y ? I : S) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: ot.dataLabel,
            children: Yr(e, p.val)
          }
        )
      ] }, x);
    })
  );
}
function mS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: f, hideTip: u } = e, g = i.l + c / 2, m = i.t + s * 0.78, y = Math.min(c, s) * 0.36, p = 135, x = 270, h = r.reduce((C, S) => C + (Number(S.val) || 0), 0), _ = l.max - l.min || 1, b = Math.min(1, Math.max(0, (h - l.min) / _)), N = (C, S) => {
    const [$, E] = [
      g + y * Math.cos(Ut(C)),
      m + y * Math.sin(Ut(C))
    ], [I, M] = [
      g + y * Math.cos(Ut(S)),
      m + y * Math.sin(Ut(S))
    ], T = S - C > 180 ? 1 : 0;
    return `M ${$} ${E} A ${y} ${y} 0 ${T} 1 ${I} ${M}`;
  }, v = Number(h.toFixed(2));
  return wn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + x),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      b > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + x * b),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: g, y: m - 4, textAnchor: "middle", className: ot.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + x),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && f(g, m - y, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
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
          className: ot.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Qa(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (u) => Ut(-90 + 360 * u / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (u, g) => {
    const m = d(u);
    return [
      i + s * g * Math.cos(m),
      c + s * g * Math.sin(m)
    ];
  } };
}
function gS(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = Qa(e);
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
function yS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: f, radius: u, angleFor: g, vertexFor: m } = Qa(e), y = e.scale.max || 1, p = (h) => r.find((_) => _.cat === h)?.val ?? 0, x = i.map((h, _) => {
    const b = Math.min(1, Math.max(0, p(h) / y)), [N, v] = m(_, b);
    return `${N},${v}`;
  }).join(" ");
  return wn(
    n,
    t,
    /* @__PURE__ */ D(at, { children: [
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
      i.map((h, _) => {
        const b = Math.min(1, Math.max(0, p(h) / y)), [N, v] = m(_, b), [C, S] = m(_, 1);
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
              onMouseEnter: () => c && s(C, S, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const $ = r.find((E) => E.cat === h);
                $ && e.handleClick(t, $.cat, $.val, $.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (u + 14) * Math.cos(g(_)),
              y: f + (u + 14) * Math.sin(g(_)) + 4,
              textAnchor: "middle",
              className: ot.tickLabel,
              children: h
            }
          )
        ] }, h);
      })
    ] })
  );
}
function bS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, u = r, g = Math.max(1, ...u.map((p) => Number(p.val) || 0)), m = s / Math.max(1, u.length), y = i.l + c / 2;
  return wn(
    n,
    t,
    u.map((p, x) => {
      const _ = Math.max(0, Number(p.val) || 0) / g * c, b = u[x + 1], N = b ? Math.max(0, Number(b.val) || 0) / g * c : _ * 0.7, v = i.t + x * m + 2, C = Math.max(4, m - 6), S = 1 - x * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${y - _ / 2} ${v} L ${y + _ / 2} ${v} L ${y + N / 2} ${v + C} L ${y - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(y, v, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: y,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: ot.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, x);
    })
  );
}
function xS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: f, hideTip: u } = e, g = [];
  t.data.forEach((b) => {
    const N = t.rowProperty ? String(b[t.rowProperty] ?? "") : "All";
    g.includes(N) || g.push(N);
  });
  const m = r.map((b) => b.val).filter((b) => Number.isFinite(b)), y = m.length ? Math.min(...m) : 0, p = m.length ? Math.max(...m) : 1, x = c / Math.max(1, l.length), h = s / Math.max(1, g.length), _ = (b) => p === y ? 0.6 : 0.15 + 0.85 * ((b - y) / (p - y));
  return wn(
    n,
    t,
    /* @__PURE__ */ D(at, { children: [
      g.map((b, N) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * h + h / 2 + 4,
          textAnchor: "end",
          className: ot.tickLabel,
          children: b
        },
        b
      )),
      r.map((b, N) => {
        const v = t.data[N], C = l.indexOf(b.cat), S = g.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (C < 0 || S < 0) return null;
        const $ = i.l + C * x, E = i.t + S * h;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: $ + 1,
              y: E + 1,
              width: Math.max(1, x - 2),
              height: Math.max(1, h - 2),
              fill: a,
              fillOpacity: _(b.val),
              onMouseEnter: () => d && f($ + x / 2, E, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: $ + x / 2,
              y: E + h / 2 + 4,
              textAnchor: "middle",
              className: ot.dataLabel,
              children: b.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function vS(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((m, y) => [m, y])), d = e.plotW / Math.max(1, s.length), f = Math.max(8, Math.min(28, d / 2 - 4)), u = t.upColor ?? a, g = t.downColor ?? "var(--dx-danger-color)";
  return wn(
    n,
    t,
    r.map((m, y) => {
      const p = l.get(m.cat) ?? 0, x = i(p), h = m.close ?? m.val, _ = typeof m.open == "number" && !Number.isNaN(m.open) && typeof m.high == "number" && !Number.isNaN(m.high) && typeof m.low == "number" && !Number.isNaN(m.low) && typeof h == "number" && !Number.isNaN(h), b = _ && h >= m.open, N = `${t.title ?? m.cat}: O ${m.open ?? "–"} H ${m.high ?? "–"} L ${m.low ?? "–"} C ${h}`;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        _ && t.type === "candlestick" && /* @__PURE__ */ D(at, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: x,
              y1: c(m.high),
              x2: x,
              y2: c(m.low),
              stroke: b ? u : g,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: x - f / 2,
              y: c(Math.max(m.open, h)),
              width: f,
              height: Math.max(
                2,
                c(Math.min(m.open, h)) - c(Math.max(m.open, h))
              ),
              fill: b ? u : "none",
              stroke: b ? u : g,
              strokeWidth: 1.5
            }
          )
        ] }),
        _ && t.type === "ohlc" && /* @__PURE__ */ D(at, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: x,
              y1: c(m.high),
              x2: x,
              y2: c(m.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: x - f / 2,
              y1: c(m.open),
              x2: x,
              y2: c(m.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: x,
              y1: c(h),
              x2: x + f / 2,
              y2: c(h),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        _ && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: x,
            y1: c(m.high),
            x2: x,
            y2: c(m.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !_ && fs(x, c(h), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: x - 14,
            y: c(h) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(x, c(h), N),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, h, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x,
            y: c(h) - 8,
            textAnchor: "middle",
            className: ot.dataLabel,
            children: Yr(e, h)
          }
        )
      ] }, y);
    })
  );
}
function wS(e, t, n, r, a) {
  const i = e.reduce((y, p) => y + Math.max(0, p.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [];
  let l = e.map((y, p) => ({ ...y, i: p })), d = t, f = n, u = r, g = a;
  const m = (y, p) => {
    const x = y.reduce((b, N) => b + Math.max(0, N.val), 0) * c;
    if (x <= 0) return Number.POSITIVE_INFINITY;
    const h = Math.max(...y.map((b) => Math.max(0, b.val))) * c, _ = Math.min(...y.map((b) => Math.max(0, b.val))) * c;
    return Math.max(
      p * p * h / (x * x),
      x * x / (p * p * (_ || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const y = Math.min(u, g), p = [];
    let x = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const _ = [...p, l[0]], b = m(_, y);
      if (b <= x)
        x = b, p.push(l.shift());
      else break;
    }
    p.length === 0 && p.push(l.shift());
    const h = p.reduce((_, b) => _ + Math.max(0, b.val), 0) * c;
    if (u >= g) {
      const _ = h / g;
      let b = f;
      for (const N of p) {
        const v = Math.max(0, N.val) * c / _;
        s[N.i] = { x: d, y: b, w: _, h: v }, b += v;
      }
      d += _, u -= _;
    } else {
      const _ = h / u;
      let b = d;
      for (const N of p) {
        const v = Math.max(0, N.val) * c / _;
        s[N.i] = { x: b, y: f, w: v, h: _ }, b += v;
      }
      f += _, g -= _;
    }
  }
  return s;
}
function el(e, t, n, r, a, i, c, s, l, d, f) {
  const u = e.colorFor, g = s.map((p) => ({
    cat: String(p[t.categoryProperty] ?? ""),
    val: Number(p[t.valueProperty]),
    item: p
  })), m = wS(g, r, a, i, c), y = t.childrenProperty ?? "children";
  g.forEach((p, x) => {
    const h = m[x], _ = s[x]?.[y], b = Array.isArray(_) ? _ : [];
    if (b.length > 0 && l < 8) {
      el(e, t, n, h.x, h.y, h.w, h.h, b, l + 1, d, f);
      return;
    }
    const N = d.n++;
    f.push({
      ...p,
      color: u(n + N, t),
      x: h.x,
      y: h.y,
      w: h.w,
      h: h.h
    });
  });
}
function kS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, u = { n: 0 }, g = [];
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
    u,
    g
  ), wn(
    n,
    t,
    g.map((m, y) => /* @__PURE__ */ D("g", { role: "listitem", children: [
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
          onMouseLeave: () => f(),
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
          className: ot.dataLabel,
          children: m.cat
        }
      )
    ] }, y))
  );
}
function NS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, u = r, g = Math.max(1, ...u.map((p) => Math.max(0, p.val))), m = s / Math.max(1, u.length), y = i.l + c / 2;
  return wn(
    n,
    t,
    u.map((p, x) => {
      const _ = Math.max(0, p.val) / g * c, b = u[x + 1], N = b ? Math.max(0, b.val) / g * c : _, v = i.t + x * m + 2, C = Math.max(4, m - 6);
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${y - _ / 2} ${v} L ${y + _ / 2} ${v} L ${y + N / 2} ${v + C} L ${y - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(y, v, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: y,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: ot.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, x);
    })
  );
}
function SS(e, t, n) {
  const r = ns(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return _S(e, t, n, r, a);
    case "scatter":
    case "bubble":
      return pS(e, t, n, r, a);
    case "line":
    case "area":
      return Ja(e, t, n, r, a);
    case "gauge":
      return mS(e, t, n, r, a);
    case "radar":
      return yS(e, t, n, r, a);
    case "funnel":
      return bS(e, t, n, r, a);
    case "heatmap":
      return xS(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return vS(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return uS(e, t, n, a);
    case "treemap":
      return kS(e, t, n);
    case "pyramid":
      return NS(e, t, n, r, a);
    default:
      return hS(e, t, n, r, a);
  }
}
function g$({
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
  const [u, g] = W(
    null
  ), m = Oe(() => {
    const T = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const k of w.data) T.add(String(k[w.categoryProperty] ?? ""));
    return [...T];
  }, [e]), y = Oe(() => {
    if (!c) return e;
    const T = /* @__PURE__ */ new Map();
    for (const w of e)
      if (w.stack)
        for (const k of w.data) {
          const A = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = Number(k[w.valueProperty]);
          Number.isNaN(R) || T.set(A, (T.get(A) ?? 0) + R);
        }
    return e.map((w) => w.stack ? {
      ...w,
      data: w.data.map((k) => {
        const A = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = T.get(A) ?? 0, z = Number(k[w.valueProperty]);
        return {
          ...k,
          [w.valueProperty]: R > 0 && !Number.isNaN(z) ? z / R * 100 : 0
        };
      })
    } : w);
  }, [e, c]), p = Oe(() => {
    const T = y.flatMap(
      (k) => k.data.flatMap((A) => [
        Number(A[k.valueProperty]),
        ...k.openProperty ? [Number(A[k.openProperty])] : [],
        ...k.highProperty ? [Number(A[k.highProperty])] : [],
        ...k.lowProperty ? [Number(A[k.lowProperty])] : [],
        ...k.closeProperty ? [Number(A[k.closeProperty])] : []
      ])
    ).filter((k) => !Number.isNaN(k)), w = /* @__PURE__ */ new Map();
    for (const k of y) {
      if (!k.stack) continue;
      let A = w.get(k.stack);
      A || w.set(k.stack, A = /* @__PURE__ */ new Map());
      for (const R of k.data) {
        const z = String(R[k.categoryProperty] ?? ""), j = Number(R[k.valueProperty]);
        Number.isNaN(j) || A.set(z, (A.get(z) ?? 0) + j);
      }
    }
    for (const k of w.values()) T.push(...k.values());
    return T;
  }, [y]), x = r?.min ?? (p.length ? Math.min(0, ...p) : 0), h = r?.max ?? (p.length ? Math.max(...p) : 10), _ = Oe(
    () => lS(x, h, r?.step),
    [x, h, r?.step]
  ), b = { t: 16, r: 16, b: 40, l: 56 }, N = t - b.l - b.r, v = n - b.t - b.b, C = (T) => b.l + T / Math.max(1, m.length - 1) * N, S = (T) => b.t + (1 - (T - _.min) / (_.max - _.min || 1)) * v, $ = (T, w) => w.color ?? wa[T % wa.length], E = e.some((T) => Za.has(T.type)), I = e.some((T) => aS.has(T.type)), M = {
    categories: m,
    scale: _,
    pad: b,
    plotW: N,
    plotH: v,
    xFor: C,
    yFor: S,
    colorFor: $,
    tooltipVisible: s,
    percent: c,
    showTip: (T, w, k) => g({ x: T, y: w, text: k }),
    hideTip: () => g(null),
    handleClick: (T, w, k, A) => l?.({
      seriesTitle: T.title ?? "",
      category: w,
      value: k,
      item: A
    }),
    series: y
  };
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [ot.root, f].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: ot.svg,
            role: "presentation",
            children: [
              E && r?.gridlines !== !1 && _.ticks.map((T) => /* @__PURE__ */ o(
                "line",
                {
                  x1: b.l,
                  x2: b.l + N,
                  y1: S(T),
                  y2: S(T),
                  className: ot.gridline
                },
                T
              )),
              I && a?.gridlines && m.map((T, w) => /* @__PURE__ */ o(
                "line",
                {
                  x1: C(w),
                  x2: C(w),
                  y1: b.t,
                  y2: b.t + v,
                  className: ot.gridline
                },
                w
              )),
              E && _.ticks.map((T) => /* @__PURE__ */ o(
                "text",
                {
                  x: b.l - 8,
                  y: S(T) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: c ? `${T}%` : T
                },
                T
              )),
              I && m.map((T, w) => /* @__PURE__ */ o(
                "text",
                {
                  x: C(w),
                  y: b.t + v + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: T
                },
                T
              )),
              E && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: b.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${b.t + v / 2})`,
                  className: ot.axisTitle,
                  children: r.title
                }
              ),
              I && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: b.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: a.title
                }
              ),
              e.some((T) => T.type === "radar") && gS(M),
              y.map((T, w) => SS(M, T, w))
            ]
          }
        ),
        u && /* @__PURE__ */ o(
          "div",
          {
            className: ot.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ o("div", { className: ot.legend, children: e.map((T, w) => /* @__PURE__ */ D("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: $(w, T) },
              "aria-hidden": "true"
            }
          ),
          T.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: d }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (T) => T.data.map((w, k) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ o("td", { children: T.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: T.rowProperty ? `${String(w[T.rowProperty] ?? "")} / ${String(w[T.categoryProperty] ?? "")}` : String(w[T.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(w[T.valueProperty] ?? "") })
                ] }, `${T.title}-${k}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function y$({ query: e, children: t }) {
  return is(e) ? /* @__PURE__ */ o(at, { children: t }) : null;
}
function b$({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function x$() {
  const e = ne(null);
  return be(() => {
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
  lO as AIChat,
  mp as ALERT_ICON,
  CO as Accordion,
  _O as Alert,
  oO as ArcGauge,
  MO as AutoComplete,
  yO as AutoGrid,
  EO as Avatar,
  TS as Badge,
  m$ as Barcode,
  xO as Body,
  n$ as Breadcrumb,
  ln as Button,
  ES as Card,
  l$ as Carousel,
  g$ as Chart,
  lu as CheckBox,
  zO as CheckBoxList,
  FO as ColorPicker,
  mO as Column,
  ZO as ContextMenuProvider,
  Tr as DEFAULT_OPERATOR_BY_TYPE,
  Sv as DEFAULT_PALETTE,
  L0 as DEFAULT_THEMES,
  GS as DataFilter,
  VS as DataGrid,
  YS as DataList,
  HO as DatePicker,
  Ta as Dialog,
  eO as DialogProvider,
  DO as DropDown,
  YO as DropZone,
  MS as EmptyState,
  Sa as FILTER_OPERATORS,
  t$ as FabMenu,
  ar as Field,
  zS as Fieldset,
  s0 as Footer,
  LS as Form,
  IS as FormField,
  u$ as Gantt,
  i0 as Header,
  dO as HtmlEditor,
  Me as Icon,
  no as Input,
  XS as Label,
  bO as Layout,
  aO as LinearGauge,
  r$ as Link,
  IO as ListBox,
  b$ as LiveRegion,
  iO as Login,
  cO as Markdown,
  jO as Mask,
  y$ as MediaQuery,
  Iw as Menu,
  Va as MenuItem,
  BO as Numeric,
  Uc as Pager,
  QO as PanelMenu,
  JO as PanelMenuItem,
  Pf as Password,
  c$ as PickList,
  f$ as Pivot,
  fO as PopupProvider,
  e$ as ProfileMenu,
  wO as Progress,
  h$ as QRCode,
  sO as RadialGauge,
  LO as RadioButtonList,
  rO as RangeNavigator,
  UO as Rating,
  hO as Row,
  d$ as Scheduler,
  KO as SecurityCode,
  lr as Select,
  RO as SelectBar,
  x0 as Sidebar,
  vO as SidebarToggle,
  GO as SignaturePad,
  pO as Skeleton,
  WO as Slider,
  PO as SplitButton,
  s$ as Splitter,
  gO as Stack,
  AS as Stat,
  o$ as Steps,
  ZS as Switch,
  DS as Table,
  TO as Tabs,
  Ca as Text,
  AO as TextArea,
  as as TextBox,
  kO as ThemeSwitcher,
  NO as ThemeToggle,
  qO as TimeSpanPicker,
  _$ as Timeline,
  nO as ToastProvider,
  a$ as Toc,
  U0 as ToggleButton,
  JS as Tooltip,
  i$ as Tree,
  VO as Upload,
  p$ as VirtualGrid,
  Zc as aggregateValue,
  $a as applyFilters,
  Xc as applyGridState,
  Os as collectGroupKeys,
  or as columnValue,
  US as compare,
  qS as custom,
  Gc as cycleSort,
  Es as defaultOperatorForType,
  PS as email,
  ca as formatMasked,
  bo as formatValue,
  OO as getAppearance,
  yo as getByPath,
  SO as getTheme,
  Wc as groupItems,
  CS as iconNames,
  Oa as matchesFilters,
  FS as maxLength,
  BS as minLength,
  Yc as paginate,
  jS as pattern,
  HS as range,
  $_ as renderMarkdown,
  RS as required,
  WS as requiredTrue,
  ka as resolveVariant,
  Xi as runValidators,
  V0 as setAppearance,
  G0 as setTheme,
  Vr as shadeClass,
  _c as sortItems,
  Vc as sortedItems,
  la as subscribe,
  Jc as toCsv,
  ic as toFilterString,
  fc as toODataFilterString,
  XO as useContextMenu,
  QS as useDialog,
  Yi as useFormContext,
  KS as useFormField,
  x$ as useLiveRegion,
  is as useMediaQuery,
  uO as usePopup,
  $O as useThemeService,
  tO as useToast
};
