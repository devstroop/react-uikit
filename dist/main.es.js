import { jsx as s, jsxs as D, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as st, useId as at, isValidElement as qt, cloneElement as to, useState as q, useRef as ne, useCallback as B, useMemo as Oe, useContext as jn, createContext as ir, useEffect as be, Fragment as no, useLayoutEffect as Hs, useImperativeHandle as ws, Children as Xr } from "react";
function Vr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const nl = "_button_eyvws_1", rl = "_filled_eyvws_36", sl = "_flat_eyvws_55", ol = "_outlined_eyvws_58", al = "_text_eyvws_63", ll = "_loading_eyvws_506", il = "_spinner_eyvws_509", cl = "_xs_eyvws_525", dl = "_sm_eyvws_531", ul = "_md_eyvws_537", fl = "_lg_eyvws_543", _l = "_xl_eyvws_549", pl = "_iconOnly_eyvws_555", hl = "_fullWidth_eyvws_585", Cn = {
  button: nl,
  filled: rl,
  flat: sl,
  outlined: ol,
  text: al,
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
  loading: ll,
  spinner: il,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: cl,
  sm: dl,
  md: ul,
  lg: fl,
  xl: _l,
  iconOnly: pl,
  fullWidth: hl
};
function ml(e, t) {
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
      fullWidth: o = !1,
      iconOnly: l = !1,
      loading: d = !1,
      visible: f = !0,
      className: u,
      disabled: g,
      children: m,
      ...y
    } = t;
    if (f === !1) return null;
    const h = ml(r, a), p = h.style === "light" || h.style === "dark" ? null : Vr(i), _ = [
      Cn.button,
      Cn[h.variant],
      Cn[`style-${h.style}`],
      p ? Cn[p] : null,
      Cn[c],
      o ? Cn.fullWidth : null,
      l ? Cn.iconOnly : null,
      d ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ D(ot, { children: [
      d ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...$ } = y, E = g || d;
      return /* @__PURE__ */ s(
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
          children: x
        }
      );
    }
    const { type: v = "button", ...C } = y;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: g || d,
        "aria-busy": d || void 0,
        ...C,
        children: x
      }
    );
  }
), gl = "_card_4vcae_1", yl = "_elevated_4vcae_8", bl = "_filled_4vcae_13", xl = "_outlined_4vcae_18", vl = "_interactive_4vcae_22", wl = "_text_4vcae_30", kl = "_header_4vcae_46", Nl = "_body_4vcae_53", Sl = "_footer_4vcae_63", Sr = {
  card: gl,
  elevated: yl,
  filled: bl,
  outlined: xl,
  interactive: vl,
  text: wl,
  header: kl,
  body: Nl,
  footer: Sl
}, vS = st(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: a,
  visible: i = !0,
  children: c,
  onKeyDown: o,
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
          o?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [Sr.card, Sr[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: Sr.header, children: n }),
          /* @__PURE__ */ s("div", { className: Sr.body, children: c }),
          r != null && /* @__PURE__ */ s("div", { className: Sr.footer, children: r })
        ]
      }
    )
  );
});
function wa(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Ol = "_badge_1fy6d_1", $l = "_xs_1fy6d_21", El = "_sm_1fy6d_26", Tl = "_md_1fy6d_31", Cl = "_lg_1fy6d_36", Al = "_xl_1fy6d_41", Dl = "_neutral_1fy6d_47", Ml = "_primary_1fy6d_52", Il = "_secondary_1fy6d_61", zl = "_light_1fy6d_66", Ll = "_base_1fy6d_71", Rl = "_dark_1fy6d_76", Pl = "_info_1fy6d_81", jl = "_success_1fy6d_86", Bl = "_warning_1fy6d_95", Fl = "_danger_1fy6d_104", Hl = "_filled_1fy6d_111", Ul = "_outlined_1fy6d_161", ql = "_text_1fy6d_213", Or = {
  badge: Ol,
  xs: $l,
  sm: El,
  md: Tl,
  lg: Cl,
  xl: Al,
  neutral: Dl,
  primary: Ml,
  secondary: Il,
  light: zl,
  base: Ll,
  dark: Rl,
  info: Pl,
  success: jl,
  warning: Bl,
  danger: Fl,
  filled: Hl,
  outlined: Ul,
  text: ql,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, wS = st(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: a = "md",
  className: i,
  visible: c = !0,
  children: o,
  ...l
}, d) {
  if (c === !1) return null;
  const f = t, u = wa(n, "filled"), g = Vr(r);
  return /* @__PURE__ */ s(
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
      children: o
    }
  );
}), Wl = "_icon_vn4jx_5", Kl = "_xs_vn4jx_24", Gl = "_sm_vn4jx_28", Vl = "_md_vn4jx_23", Yl = "_lg_vn4jx_36", Xl = "_xl_vn4jx_40", yo = {
  icon: Wl,
  xs: Kl,
  sm: Gl,
  md: Vl,
  lg: Yl,
  xl: Xl
}, kS = [
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
], Me = st(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, o) {
  const l = typeof n == "string";
  return /* @__PURE__ */ s(
    "span",
    {
      ref: o,
      className: [yo.icon, l ? yo[n] : null, a].filter(Boolean).join(" "),
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
}), Zl = "_stat_sjin9_1", Jl = "_label_sjin9_8", Ql = "_row_sjin9_16", ei = "_value_sjin9_22", ti = "_delta_sjin9_28", ni = "_success_sjin9_33", ri = "_danger_sjin9_37", si = "_neutral_sjin9_41", oi = "_hint_sjin9_45", Zn = {
  stat: Zl,
  label: Jl,
  row: Ql,
  value: ei,
  delta: ti,
  success: ni,
  danger: ri,
  neutral: si,
  hint: oi
}, NS = st(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...o }, l) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      className: [Zn.stat, c].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: Zn.label, children: t }),
        /* @__PURE__ */ D("div", { className: Zn.row, children: [
          /* @__PURE__ */ s("div", { className: Zn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [Zn.delta, Zn[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ s("div", { className: Zn.hint, children: i })
      ]
    }
  );
}), ai = "_wrap_ipozk_1", li = "_table_ipozk_8", ii = "_caption_ipozk_14", ci = "_none_ipozk_51", di = "_horizontal_ipozk_57", ui = "_vertical_ipozk_67", fi = "_alternating_ipozk_85", _i = "_start_ipozk_89", pi = "_center_ipozk_93", hi = "_end_ipozk_97", mi = "_empty_ipozk_101", Hn = {
  wrap: ai,
  table: li,
  caption: ii,
  none: ci,
  horizontal: di,
  vertical: ui,
  alternating: fi,
  start: _i,
  center: pi,
  end: hi,
  empty: mi
};
function SS({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: a,
  gridLines: i = "default",
  allowAlternatingRows: c = !0,
  className: o,
  visible: l = !0
}) {
  if (l === !1) return null;
  const d = i === "default" || i === "both" ? "" : Hn[i];
  return /* @__PURE__ */ D("div", { className: [Hn.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "table",
      {
        className: [
          Hn.table,
          d,
          c ? Hn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          a != null && /* @__PURE__ */ s("caption", { className: Hn.caption, children: a }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "th",
            {
              className: f.align != null ? Hn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((f) => /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
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
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: Hn.empty, children: r })
  ] });
}
const gi = "_emptyState_1swxw_1", yi = "_icon_1swxw_13", bi = "_title_1swxw_18", xi = "_description_1swxw_24", vi = "_action_1swxw_30", $r = {
  emptyState: gi,
  icon: yi,
  title: bi,
  description: xi,
  action: vi
};
function OS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [$r.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: $r.icon, children: e }),
    /* @__PURE__ */ s("div", { className: $r.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: $r.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: $r.action, children: r })
  ] });
}
const wi = "_field_149oz_1", ki = "_label_149oz_8", Ni = "_required_149oz_14", Si = "_hint_149oz_19", Oi = "_error_149oz_24", Er = {
  field: wi,
  label: ki,
  required: Ni,
  hint: Si,
  error: Oi
};
function ar({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: a,
  error: i,
  children: c,
  className: o,
  visible: l = !0
}) {
  const d = r ?? a, f = at(), u = at(), g = at();
  if (l === !1) return null;
  const m = i != null ? u : d != null ? g : null, y = typeof c == "function" ? c({ inputId: f, hintId: g, errorId: u }) : c, h = qt(y) && typeof y.props.id == "string" ? y.props.id : void 0, b = h ?? t ?? f, p = qt(y) && (m != null || h == null && typeof y.type == "string"), _ = h != null || t != null || p, x = p && qt(y) ? to(y, {
    id: b,
    "aria-describedby": m != null ? [
      y.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : y.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : y.props["aria-invalid"]
  }) : y;
  return /* @__PURE__ */ D("div", { className: [Er.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Er.label,
        htmlFor: _ ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: Er.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    i != null ? /* @__PURE__ */ s("div", { id: u, className: Er.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ s("div", { id: g, className: Er.hint, children: d }) : null
  ] });
}
const $i = "_formfield_6e25e_1", Ei = "_content_6e25e_8", Ti = "_floating_6e25e_43", Ci = "_label_6e25e_111", Ai = "_start_6e25e_132", Di = "_required_6e25e_169", Mi = "_end_6e25e_175", Ii = "_filled_6e25e_192", zi = "_flat_6e25e_199", Li = "_helper_6e25e_206", Ri = "_invalid_6e25e_211", kn = {
  formfield: $i,
  content: Ei,
  floating: Ti,
  label: Ci,
  start: Ai,
  required: Di,
  end: Mi,
  filled: Ii,
  flat: zi,
  helper: Li,
  invalid: Ri
};
function $S({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: a,
  allowFloatingLabel: i = !0,
  variant: c = "outlined",
  invalid: o = !1,
  required: l = !1,
  children: d,
  className: f,
  visible: u = !0
}) {
  const g = at(), m = at();
  if (u === !1) return null;
  const y = a ?? g, h = typeof d == "function" ? d({
    inputId: y
  }) : d, b = qt(h) ? h.type : null, p = typeof b == "string", _ = qt(h) && typeof b != "symbol", x = qt(h) ? h.props : null, N = typeof x?.id == "string" ? x.id : void 0, v = p && qt(h) ? h.type.toLowerCase() : null, C = v != null && (v === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = _ && (r != null || o || N == null && C), $ = N != null || a != null || S, E = v === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, I = v === "textarea" || v === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), M = S && qt(h) ? to(
    h,
    {
      id: N ?? y,
      ...i && I && x?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          m
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : h, T = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: kn.label,
      htmlFor: $ ? N ?? y : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ s("span", { className: kn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [
        kn.formfield,
        kn[c],
        i ? kn.floating : null,
        o ? kn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : T,
        /* @__PURE__ */ D("div", { className: kn.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: kn.start, children: t }),
          M,
          i ? T : null,
          n != null && /* @__PURE__ */ s("div", { className: kn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: m, className: kn.helper, children: r })
      ]
    }
  );
}
const Pi = "_fieldset_8x01p_1", ji = "_legend_8x01p_11", Bi = "_legendText_8x01p_20", Fi = "_toggle_8x01p_24", Hi = "_content_8x01p_45", Ui = "_summary_8x01p_49", Jn = {
  fieldset: Pi,
  legend: ji,
  legendText: Bi,
  toggle: Fi,
  content: Hi,
  summary: Ui
};
function ES({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: a = !1,
  collapsed: i,
  defaultCollapsed: c = !1,
  summary: o,
  expandTitle: l,
  collapseTitle: d,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: g,
  onCollapse: m,
  children: y,
  className: h,
  visible: b = !0
}) {
  const p = at(), [_, x] = q(c);
  if (b === !1) return null;
  const N = i ?? _, v = a ? `${p}-content` : void 0, C = () => {
    const T = !N;
    i === void 0 && x(T), T ? m?.() : g?.();
  }, S = a || e != null || n != null || t != null, $ = a ? N : !1, E = a && N && o != null, I = $ ? l ?? "Expand" : d ?? "Collapse", M = $ ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [Jn.fieldset, h].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ s("legend", { className: Jn.legend, children: a ? /* @__PURE__ */ D(ot, { children: [
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
                /* @__PURE__ */ s(
                  Me,
                  {
                    icon: $ ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ s("span", { className: Jn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(ot, { children: [
          n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ s("span", { className: Jn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: Jn.content,
            id: v,
            hidden: $,
            children: y
          }
        ),
        E ? /* @__PURE__ */ s("div", { className: Jn.summary, children: o }) : null
      ]
    }
  );
}
const qi = "_form_abp5n_1", Wi = {
  form: qi
}, ka = ir(null);
function Ki() {
  const e = jn(ka);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function TS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [o, l] = q({}), [d, f] = q(0), u = ne(o);
  u.current = o;
  const g = B((x) => {
    l(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), m = B((x) => {
    l((N) => {
      if (!(x in N)) return N;
      const v = { ...N };
      return delete v[x], v;
    });
  }, []), y = B(() => {
    const x = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (x[N.name] = v);
    }
    return x;
  }, []), h = B(() => {
    const x = y();
    f((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [y, e, t, n]), b = (x) => {
    r != null && a != null || (x.preventDefault(), h());
  }, p = Oe(
    () => ({ registerField: g, unregisterField: m, submit: h, submitCount: d }),
    [g, m, h, d]
  ), _ = [Wi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(ka.Provider, { value: p, children: /* @__PURE__ */ s(
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
const cr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", CS = (e = "Required") => (t) => cr(t) ? e : null, AS = (e = "Invalid email") => (t) => cr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, DS = (e, t = "Invalid format") => (n) => cr(n) || e.test(String(n)) ? null : t, MS = (e, t = `Minimum ${e} characters`) => (n) => cr(n) || String(n).length >= e ? null : t, IS = (e, t = `Maximum ${e} characters`) => (n) => cr(n) || String(n).length <= e ? null : t, zS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (cr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, LS = (e, t = "Values do not match") => (n, r) => {
  if (cr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, RS = (e = "Required") => (t) => t === !0 ? null : e, PS = (e) => (t, n) => e(t, n);
function Gi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function jS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Ki(), [i, c] = q(t?.initialValue), [o, l] = q(!1), [d, f] = q(!1), u = ne(() => []);
  u.current = () => Gi(t?.validate ?? [], i), be(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), be(() => {
    a > 0 && (l(!0), f(!1));
  }, [a]);
  const g = o && !d ? u.current() : [];
  return { value: i, setValue: (y) => {
    c(y), f(!0);
  }, errors: g };
}
const Vi = "_select_1xe98_1", Yi = "_invalid_1xe98_33", Xi = "_xs_1xe98_40", Zi = "_sm_1xe98_48", Ji = "_md_1xe98_56", Qi = "_lg_1xe98_62", ec = "_xl_1xe98_68", Cs = {
  select: Vi,
  invalid: Yi,
  xs: Xi,
  sm: Zi,
  md: Ji,
  lg: Qi,
  xl: ec
}, lr = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...c }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          Cs.select,
          Cs[t],
          n ? Cs.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c,
        children: r != null ? r.map((l) => /* @__PURE__ */ s(
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
), Na = [
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
}, tc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function nc(e) {
  return tc.includes(e);
}
function gs(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function bo(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function qr(e, t) {
  const n = bo(e), r = bo(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function ks(e) {
  if (e.secondOperator == null) return !1;
  if (nc(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function xo(e, t, n) {
  const r = gs(t, e.property), a = vo(
    r,
    e.value,
    e.operator,
    n
  );
  if (!ks(e)) return a;
  const i = vo(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function vo(e, t, n, r) {
  const a = r === "CaseInsensitive", i = (l) => a && typeof l == "string" ? l.toLowerCase() : l, c = i(e), o = i(t);
  switch (n) {
    case "Equals":
      return c === o || Array.isArray(c) && c.some((l) => i(l) === o);
    case "NotEquals":
      return c !== o && !(Array.isArray(c) && c.some((l) => i(l) === o));
    case "LessThan":
      return qr(c, o) < 0;
    case "LessThanOrEquals":
      return qr(c, o) <= 0;
    case "GreaterThan":
      return qr(c, o) > 0;
    case "GreaterThanOrEquals":
      return qr(c, o) >= 0;
    case "Contains":
      return typeof c == "string" && typeof o == "string" && c.includes(o);
    case "StartsWith":
      return typeof c == "string" && typeof o == "string" && c.startsWith(o);
    case "EndsWith":
      return typeof c == "string" && typeof o == "string" && c.endsWith(o);
    case "DoesNotContain":
      return typeof c == "string" && typeof o == "string" && !c.includes(o);
    case "In":
      return Array.isArray(o) && o.some((l) => i(l) === c);
    case "NotIn":
      return Array.isArray(o) && !o.some((l) => i(l) === c);
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
function ro(e) {
  return "filters" in e;
}
function Sa(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (ro(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (c) => Sa(e, c, { logicalOperator: i, caseSensitivity: a })
    );
  }
  return t.operator === "Custom", xo(t, e, a);
}
function Oa(e, t, n = {}) {
  return e.filter((r) => Sa(r, t, n));
}
function rc(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${rc(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function sc(e) {
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
  if (!ks(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function oc(e) {
  return ro(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(oc).filter(Boolean).join(` ${e.operator} `)})` : sc(e);
}
function ac(e) {
  return e.replace(/'/g, "''");
}
const lc = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function ic(e, t) {
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${ac(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, f) => {
    const u = typeof f == "string", g = u && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${g} ${lc[d]} ${u && r ? a(i(f)) : i(f)}`;
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
  if (!ks(e))
    return c(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${c(e.operator, e.value)} ${o} ${c(
    l,
    e.secondValue
  )})`;
}
function cc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (ro(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => cc(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return ic(e, n);
}
function dc(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const a of t) {
      const i = a.sortOrder === "Ascending" ? 1 : -1, c = qr(
        gs(n, a.property),
        gs(r, a.property)
      );
      if (c !== 0) return c * i;
    }
    return 0;
  });
}
const uc = "_filter_1dvqt_1", fc = "_rows_1dvqt_9", _c = "_row_1dvqt_9", pc = "_join_1dvqt_21", hc = "_property_1dvqt_30", mc = "_operator_1dvqt_34", gc = "_value_1dvqt_38", yc = "_remove_1dvqt_42", bc = "_bar_1dvqt_58", xc = "_add_1dvqt_64", vc = "_custom_1dvqt_78", wc = "_summary_1dvqt_82", kc = "_second_1dvqt_87", Nc = "_secondAdd_1dvqt_91", Sc = "_addSecond_1dvqt_95", Oc = "_joinSelect_1dvqt_109", mt = {
  filter: uc,
  rows: fc,
  row: _c,
  join: pc,
  property: hc,
  operator: mc,
  value: gc,
  remove: yc,
  bar: bc,
  add: xc,
  custom: vc,
  summary: wc,
  second: kc,
  secondAdd: Nc,
  addSecond: Sc,
  joinSelect: Oc
}, Cr = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], wo = {
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
function ko({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(ot, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
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
    return /* @__PURE__ */ s(
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
  return /* @__PURE__ */ s(
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
function BS({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: a = !1,
  className: i,
  viewChanged: c,
  items: o,
  children: l
}) {
  const [d, f] = q(
    () => r != null && r.length > 0 ? r.map((p, _) => ({ id: _, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Tr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, _) => {
    f(
      (x) => x.map((N) => N.id === p ? { ...N, ..._ } : N)
    );
  }, g = () => {
    const p = d[d.length - 1], _ = Math.max(0, ...d.map((N) => N.id)) + 1, x = e[0];
    f((N) => [
      ...N,
      {
        id: _,
        property: p?.property ?? x?.name ?? "",
        operator: Tr[e.find(
          (v) => v.name === (p?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (p) => {
    f(
      (_) => _.length > 1 ? _.filter((x) => x.id !== p) : _
    );
  }, y = Oe(() => {
    const p = [];
    for (const _ of d) {
      if (_.property === "" || (_.value == null || _.value === "") && !Cr.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && ks(_) && (N.secondOperator = v, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), p.push(N);
    }
    return p;
  }, [d]), h = Oe(() => o == null || y.length === 0 ? o : Oa(o, {
    operator: t,
    filters: y
  }, {
    caseSensitivity: n
  }), [o, y, t, n]);
  be(() => {
    c != null && o != null && c(h ?? []);
  }, [h]);
  const b = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ D("div", { className: [mt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: mt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((p, _) => {
      const x = b(p.property), N = a ? [Tr[x.type ?? "string"]] : Na, v = !Cr.includes(p.operator), C = p.secondOperator != null;
      return /* @__PURE__ */ D(no, { children: [
        /* @__PURE__ */ D("div", { className: mt.row, children: [
          _ > 0 ? /* @__PURE__ */ s("span", { className: mt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            lr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: mt.property,
              value: p.property,
              onChange: (S) => {
                const $ = e.find(
                  (E) => E.name === S.target.value
                );
                u(p.id, {
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
          /* @__PURE__ */ s(
            lr,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: mt.operator,
              value: p.operator,
              onChange: (S) => {
                const $ = S.target.value;
                u(
                  p.id,
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
                label: wo[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ s(
            ko,
            {
              property: x,
              value: p.value,
              onChange: (S) => u(p.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: mt.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => m(p.id),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? C ? /* @__PURE__ */ D(
          "div",
          {
            className: [mt.row, mt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                lr,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: mt.joinSelect,
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
                lr,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: mt.operator,
                  value: p.secondOperator,
                  onChange: (S) => {
                    const $ = S.target.value;
                    u(
                      p.id,
                      Cr.includes($) ? { secondOperator: $, secondValue: void 0 } : { secondOperator: $ }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: wo[S]
                  }))
                }
              ),
              p.secondOperator == null || !Cr.includes(p.secondOperator) ? /* @__PURE__ */ s(
                ko,
                {
                  property: x,
                  value: p.secondValue,
                  onChange: (S) => u(p.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: mt.remove,
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
        ) : /* @__PURE__ */ s("div", { className: mt.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: mt.addSecond,
            onClick: () => u(p.id, {
              secondOperator: Tr[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ D("div", { className: mt.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: mt.add, onClick: g, children: "Add filter" }),
      l != null ? /* @__PURE__ */ s("div", { className: mt.custom, children: l }) : null,
      o != null ? /* @__PURE__ */ D("span", { className: mt.summary, "aria-live": "polite", children: [
        h?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const $c = "_pager_1du31_1", Ec = "_alignLeft_1du31_10", Tc = "_alignCenter_1du31_14", Cc = "_alignRight_1du31_18", Ac = "_alignJustify_1du31_22", Dc = "_summary_1du31_26", Mc = "_controls_1du31_31", Ic = "_button_1du31_37", zc = "_active_1du31_73", Lc = "_ellipsis_1du31_85", Rc = "_size_1du31_91", Ft = {
  pager: $c,
  alignLeft: Ec,
  alignCenter: Tc,
  alignRight: Cc,
  alignJustify: Ac,
  summary: Dc,
  controls: Mc,
  button: Ic,
  active: zc,
  ellipsis: Lc,
  size: Rc
};
function Pc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function No(e, t) {
  return e.replace("{0}", String(t));
}
function jc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, l) => l + 1);
  const r = Math.floor(n / 2);
  let a = Math.max(1, e - r);
  const i = Math.min(t, a + n - 1);
  a = Math.max(1, i - n + 1);
  const c = [];
  for (let o = a; o <= i; o++) c.push(o);
  return a > 2 && c.unshift("ellipsis"), a > 1 && c.unshift(1), i < t - 1 && c.push("ellipsis"), i < t && c.push(t), c;
}
function Bc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: a,
  pageNumbersCount: i = 5,
  alwaysVisible: c = !1,
  horizontalAlign: o = "left",
  showPagingSummary: l,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: g = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: y = "Previous page",
  nextPageTitle: h = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: C,
  visible: S = !0
}) {
  const $ = n ?? r, [E, I] = q($), M = n !== void 0, T = M ? $ : E, w = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, T), w), A = l ?? !0, R = c || w > 1, z = jc(k, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      M || I(we);
      const ae = (we - 1) * t;
      x?.({
        page: we,
        skip: ae,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [M, x, w, t]
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
    ), ae = we.indexOf(document.activeElement);
    ae !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[ae + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[ae - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return S === !1 || !R ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ft.pager, F, C].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        A && /* @__PURE__ */ s("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : Pc(f, k, w, e) }),
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
                  "aria-label": m,
                  title: m,
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
                  "aria-label": y,
                  title: y,
                  children: "‹"
                }
              ),
              z.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ s("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === k ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === k ? "page" : void 0,
                    "aria-label": No(_, te),
                    title: No(p, te),
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
                  "aria-label": h,
                  title: h,
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
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ D("label", { className: Ft.size, children: [
          /* @__PURE__ */ s("span", { children: g }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (te) => N?.(Number(te.target.value)),
              "aria-label": g,
              children: a.map((te) => /* @__PURE__ */ s("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function Us(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: a, ...i } = e;
  return /* @__PURE__ */ s(
    Bc,
    {
      page: t,
      showPagingSummary: a,
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
const $a = "";
function Fc(e, t, n, r, a) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const i = (o) => n.find((l) => l.property === o), c = (o, l, d) => {
    const f = t[l];
    if (f === void 0)
      return o.map((h) => ({ type: "row", row: h }));
    const u = i(f), g = /* @__PURE__ */ new Map(), m = [];
    o.forEach((h) => {
      const b = String(a(h, f) ?? ""), p = g.get(b);
      p ? p.push(h) : (g.set(b, [h]), m.push(b));
    });
    const y = [];
    return m.forEach((h) => {
      const b = g.get(h), p = [...d, h].join($a), _ = b[0], x = _ !== void 0 ? a(_, f) : void 0;
      y.push({
        type: "group",
        group: {
          key: p,
          display: ys(x, u?.format),
          property: f,
          title: u?.title ?? f,
          count: b.length,
          level: l
        }
      }), r.has(p) && y.push(...c(b, l + 1, [...d, h]));
    }), y;
  };
  return c(e, 0, []);
}
function So(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, o) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const g = String(n(u, l) ?? ""), m = d.get(g);
      m ? m.push(u) : (d.set(g, [u]), f.push(g));
    }), f.forEach((u) => {
      const g = [...o, u].join($a);
      r.add(g), a(d.get(u), c + 1, [...o, u]);
    });
  };
  return a(e, 0, []), r;
}
function ts(e, t) {
  return e.property ?? `col-${t}`;
}
function Hc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: a, column: i }) => {
    if (!i.frozen) return;
    n[a] = r === 0 ? "0px" : `${r}px`;
    const c = t[a] ?? i.width ?? "8rem";
    r += parseFloat(c);
  }), n;
}
function Uc(e, t) {
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
function sr(e, t) {
  if (t != null)
    return gs(e, t);
}
function ys(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Oo = [
  "Ascending",
  "Descending",
  null
];
function qc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Oo[(r ? Oo.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Wc(e, t) {
  return dc(e, t);
}
function Kc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), a = Math.min(Math.max(1, t), r), i = (a - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: a,
    total: e.length
  };
}
function Gc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, l]) => ({
      property: o,
      operator: l.operator ?? "Contains",
      value: Uc(
        l.value,
        n.types?.[o] ?? "string"
      )
    })
  ), a = r.length > 0 ? Oa(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Wc(a, t.sorts);
  return {
    ...Kc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function $o(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Vc(e, t, n) {
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
function Yc(e, t, n = sr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, a = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    a.push(
      t.map((c) => r(ys(n(i, c.property), c.format))).join(",")
    );
  }), `${a.join(`\r
`)}\r
`;
}
const Xc = "_grid_13rur_1", Zc = "_toolbar_13rur_8", Jc = "_picker_13rur_13", Qc = "_pickerButton_13rur_17", ed = "_pickerPanel_13rur_31", td = "_pickerItem_13rur_46", nd = "_groupPanel_13rur_55", rd = "_groupPanelActive_13rur_66", sd = "_groupPanelText_13rur_70", od = "_groupChip_13rur_74", ad = "_groupRemove_13rur_85", ld = "_groupRow_13rur_94", id = "_groupCell_13rur_98", cd = "_groupToggle_13rur_104", dd = "_editRow_13rur_117", ud = "_editCell_13rur_121", fd = "_editInput_13rur_127", _d = "_commandCell_13rur_137", pd = "_commandButton_13rur_144", hd = "_data_13rur_159", md = "_table_13rur_166", gd = "_header_13rur_172", yd = "_center_13rur_185", bd = "_right_13rur_189", xd = "_sortButton_13rur_193", vd = "_sortIndicator_13rur_211", wd = "_sortIndex_13rur_215", kd = "_cell_13rur_226", Nd = "_clickable_13rur_241", Sd = "_frozen_13rur_249", Od = "_selected_13rur_255", $d = "_resizeHandle_13rur_263", Ed = "_filterCell_13rur_281", Td = "_filterSelect_13rur_290", Cd = "_filterInput_13rur_300", Ad = "_empty_13rur_311", Dd = "_loading_13rur_317", Md = "_visuallyHidden_13rur_331", Id = "_virtualScroller_13rur_340", zd = "_spacerRow_13rur_345", Ld = "_footerRow_13rur_350", Rd = "_footerCell_13rur_354", Pd = "_footerValue_13rur_361", Se = {
  grid: Xc,
  toolbar: Zc,
  picker: Jc,
  pickerButton: Qc,
  pickerPanel: ed,
  pickerItem: td,
  groupPanel: nd,
  groupPanelActive: rd,
  groupPanelText: sd,
  groupChip: od,
  groupRemove: ad,
  groupRow: ld,
  groupCell: id,
  groupToggle: cd,
  editRow: dd,
  editCell: ud,
  editInput: fd,
  commandCell: _d,
  commandButton: pd,
  data: hd,
  table: md,
  header: gd,
  center: yd,
  right: bd,
  sortButton: xd,
  sortIndicator: vd,
  sortIndex: wd,
  cell: kd,
  clickable: Nd,
  frozen: Sd,
  selected: Od,
  resizeHandle: $d,
  filterCell: Ed,
  filterSelect: Td,
  filterInput: Cd,
  empty: Ad,
  loading: Dd,
  visuallyHidden: Md,
  virtualScroller: Id,
  spacerRow: zd,
  footerRow: Ld,
  footerCell: Rd,
  footerValue: Pd
}, jd = {
  Ascending: "ascending",
  Descending: "descending"
};
function Eo(e, t) {
  return e.filterable ?? t;
}
function Bd(e, t) {
  return e.sortable ?? t;
}
function Fd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function FS({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: a = !1,
  showSortIndex: i = !1,
  allowFiltering: c = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: d = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: g = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: y = !0,
  showPageSizeSelector: h = !0,
  selectionMode: b = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: x = !1,
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
  const xe = K != null ? `${K} ` : "", [pe, De] = q([]), [G, $e] = q(
    /* @__PURE__ */ new Map()
  ), [re, Ae] = q(1), [fe, Fe] = q(f), [Ge, Je] = q(
    () => e.map((H, U) => ts(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? ts(H, U) : "").filter(Boolean)
    )
  ), [bt, Z] = q({}), [L, Y] = q(!1), [Q, ge] = q([]), [le, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, se] = q(0), [Le, Nt] = q(j), Rt = ne(null), xt = ne(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, ye) => H.set(ts(U, ye), U)), H;
  }, [e]), We = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => Hc(We, bt),
    [We, bt]
  ), $t = F !== "None" || we != null || X, it = Oe(() => {
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
    return Gc(
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
    re,
    fe,
    l,
    o,
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
      operator: U.operator ?? $o(
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
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => le || (E ? So(it.items, Q, sr) : /* @__PURE__ */ new Set()), [le, E, it.items, Q]), Pt = Oe(
    () => Fc(it.items, Q, e, Ye, sr),
    [it.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? We.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : We,
    [We, Q, Ve]
  ), W = (H) => {
    H !== "" && De(qc(pe, H, { multi: a }));
  }, ee = (H, U) => {
    $e((ye) => {
      const ve = new Map(ye);
      return ve.set(H, U), ve;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (b === "None") return;
    const U = n(H), ye = p ?? [];
    let ve;
    b === "Single" ? ve = ye.length === 1 && ye[0] === U ? [] : [U] : ve = ye.includes(U) ? ye.filter((et) => et !== U) : [...ye, U], _?.(ve);
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
  }, ct = (H) => {
    xt.current = H;
  }, rt = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Je((ye) => {
      const ve = [...ye], et = ve.indexOf(U), Dt = ve.indexOf(H);
      return et < 0 || Dt < 0 ? ye : (ve.splice(et, 1), ve.splice(Dt, 0, U), ve);
    });
  }, Et = (H) => {
    lt((U) => {
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
      const ye = U ?? (E ? So(it.items, Q, sr) : /* @__PURE__ */ new Set()), ve = new Set(ye);
      return ve.has(H) ? ve.delete(H) : ve.add(H), ve;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((ye) => {
      ye.property && (U[ye.property] = sr(H, ye.property));
    }), nt(U), Ze(String(n(H)));
  }, pn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), nt(H), Ze("__new__");
  }, Tn = () => {
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
    Tn();
  }, wn = d && (m === "Top" || m === "TopAndBottom"), Zr = d && (m === "Bottom" || m === "TopAndBottom"), Ns = c && e.some((H) => Eo(H, c)), Ss = (H, U, ye) => H.render ? H.render(U, { index: 0 }) : ys(sr(U, H.property), H.format), Os = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, hn = w ? t : it.filtered, Jr = () => {
    const H = Yc(
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
    wn && /* @__PURE__ */ s(
      Us,
      {
        pageNumber: it.pageNumber,
        pageSize: it.pageSize,
        count: it.total,
        pageSizeOptions: u,
        pageNumbersCount: g,
        showSummary: y,
        showPageSizeSelector: h,
        ariaLabel: `${xe}${Zr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || x || M) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
      S && /* @__PURE__ */ s(
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
          }) : /* @__PURE__ */ s("span", { className: Se.groupPanelText, children: $ })
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
      x && /* @__PURE__ */ D("div", { className: Se.picker, children: [
        /* @__PURE__ */ s(
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
        L && /* @__PURE__ */ s(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const ye = ts(H, U);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ s(
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
      M && /* @__PURE__ */ s(
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
          se(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (R ? mn : it.total) + 1,
              "aria-label": K,
              "aria-busy": ae || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
                  Xe.map(({ key: H, column: U }) => /* @__PURE__ */ s(
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
                  $t && /* @__PURE__ */ s("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const ye = Bd(U, r), ve = pe.find((wt) => wt.property === U.property), et = ve ? pe.indexOf(ve) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": ye && ve ? jd[ve.sortOrder] : "none",
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
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), ct(H);
                          } : void 0,
                          onDragOver: C ? (wt) => wt.preventDefault() : void 0,
                          onDrop: C ? () => rt(H) : void 0,
                          children: [
                            ye ? /* @__PURE__ */ D(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => U.property != null && W(U.property),
                                "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  ve && /* @__PURE__ */ s(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ve.sortOrder === "Ascending" ? "▲" : "▼"
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
                    $t && /* @__PURE__ */ s("th", { className: Se.header, scope: "col", children: "Actions" })
                  ] }),
                  Ns && /* @__PURE__ */ s("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!Eo(U, c))
                      return /* @__PURE__ */ s("td", { className: Se.filterCell }, H);
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
                      /* @__PURE__ */ s(
                        "select",
                        {
                          id: `df-${U.property}`,
                          className: Se.filterSelect,
                          value: ye?.operator ?? $o(U.type ?? "string"),
                          onChange: (ve) => ee(U.property ?? "", {
                            ...ye,
                            operator: ve.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: Na.filter((ve) => ve !== "Custom").map(
                            (ve) => /* @__PURE__ */ s("option", { value: ve, children: ve }, ve)
                          )
                        }
                      ),
                      /* @__PURE__ */ s(
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
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ s("td", { className: Se.editCell, children: U.property && /* @__PURE__ */ s(
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
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: () => Fn(),
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
                      colSpan: Nr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const ye = jt.start + U, ve = R ? ye + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ s(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": ve,
                          children: /* @__PURE__ */ s("td", { colSpan: Nr, className: Se.groupCell, children: /* @__PURE__ */ D(
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
                        "aria-rowindex": ve,
                        className: [
                          ue || b !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          gn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? wt : void 0,
                        onClick: ue || b !== "None" ? (Ct) => {
                          Fd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: Os(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: gn && gt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt(($s) => ({
                                    ...$s,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : Ss(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ s("td", { className: Se.commandCell, children: gn ? /* @__PURE__ */ D(ot, { children: [
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Fn(et),
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
                          ] }) : /* @__PURE__ */ D(ot, { children: [
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
                      colSpan: Nr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                I && I.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const ye = I.filter(
                      (ve) => ve.property === U.property
                    );
                    return /* @__PURE__ */ s(
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
                              ys(
                                Vc(hn, ve, sr),
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
                  $t && /* @__PURE__ */ s("td", { className: Se.footerCell })
                ] }) })
              ]
            }
          ),
          it.items.length === 0 && !ae && /* @__PURE__ */ s("div", { className: Se.empty, children: _e }),
          ae && /* @__PURE__ */ s("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Zr && /* @__PURE__ */ s(
      Us,
      {
        pageNumber: it.pageNumber,
        pageSize: it.pageSize,
        count: it.total,
        pageSizeOptions: u,
        pageNumbersCount: g,
        showSummary: y,
        showPageSizeSelector: h,
        ariaLabel: `${xe}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const Hd = "_wrap_avqds_1", Ud = "_grid_avqds_7", qd = "_stacked_avqds_13", Wd = "_item_avqds_19", Kd = "_empty_avqds_25", Ar = {
  wrap: Hd,
  grid: Ud,
  stacked: qd,
  item: Wd,
  empty: Kd
};
function HS({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: a,
  emptyMessage: i = "No records found",
  emptyTemplate: c,
  loadingTemplate: o,
  isLoading: l = !1,
  showPageSizeSelector: d = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [g, m] = q(1), [y, h] = q(t), b = e.length, p = Math.max(1, Math.ceil(b / y)), _ = Math.min(Math.max(1, g), p), x = Oe(() => {
    const v = (_ - 1) * y;
    return e.slice(v, v + y);
  }, [e, _, y]), N = r ? Ar.grid : Ar.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ar.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        l && o != null ? o : b === 0 ? c ?? /* @__PURE__ */ s("div", { className: Ar.empty, children: i }) : /* @__PURE__ */ s("div", { className: N, children: x.map((v, C) => /* @__PURE__ */ s("div", { className: Ar.item, children: a ? a(v, C) : String(v) }, C)) }),
        /* @__PURE__ */ s(
          Us,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: y,
            count: b,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: m,
            onPageSizeChange: (v) => {
              h(v), m(1);
            }
          }
        )
      ]
    }
  );
}
const Gd = "_label_1qfpw_1", Vd = {
  label: Gd
}, US = st(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: a,
      className: [Vd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Yd = "_textbox_oly89_1", Xd = "_invalid_oly89_37", Zd = "_xs_oly89_44", Jd = "_sm_oly89_50", Qd = "_md_oly89_56", eu = "_lg_oly89_62", tu = "_xl_oly89_68", As = {
  textbox: Yd,
  invalid: Xd,
  xs: Zd,
  sm: Jd,
  md: Qd,
  lg: eu,
  xl: tu
}, so = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: a = !0,
    type: i = "text",
    ...c
  }, o) {
    return a === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: i,
        "data-size": t,
        className: [
          As.textbox,
          As[t],
          n ? As.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c
      }
    );
  }
), ns = so, nu = "_checkbox_1bb6c_1", ru = {
  checkbox: nu
}, su = st(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = ne(null);
    return be(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ s(
      "input",
      {
        ref: (c) => {
          i.current = c, typeof a == "function" ? a(c) : a && (a.current = c);
        },
        type: "checkbox",
        className: [ru.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), ou = {
  switch: "_switch_19gf1_1"
}, qS = st(function({ className: t, ...n }, r) {
  const [a, i] = q(
    !!n.defaultChecked
  ), c = n.checked ?? a;
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": c,
      className: [ou.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (o) => {
        n.checked === void 0 && i(o.target.checked), n.onChange?.(o);
      }
    }
  );
}), au = "_trigger_1jlxf_1", lu = "_tooltip_1jlxf_7", iu = "_top_1jlxf_34", cu = "_right_1jlxf_40", du = "_bottom_1jlxf_46", uu = "_left_1jlxf_52", fu = "_arrow_1jlxf_58", _u = "_floating_1jlxf_70", Un = {
  trigger: au,
  tooltip: lu,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: iu,
  right: cu,
  bottom: du,
  left: uu,
  arrow: fu,
  floating: _u,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, rs = 8;
function pu(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + rs,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - rs,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + rs,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - rs,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function WS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const o = at(), l = ne(null), d = ne(null), f = ne(() => {
  }), [u, g] = q(!1), [m, y] = q(null), h = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, b = () => {
    h(), l.current = window.setTimeout(() => {
      l.current = null, g(!0);
    }, r);
  }, p = () => {
    h(), g(!1);
  };
  if (be(() => () => h(), []), be(() => {
    if (!u || a == null) return;
    const x = window.setTimeout(() => g(!1), a);
    return () => window.clearTimeout(x);
  }, [u, a]), be(() => {
    if (i || !u) return;
    const x = (N) => {
      N.key === "Escape" && p();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [i, u]), be(() => {
    if (!i) return;
    let x = null, N = null;
    const v = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, C = () => {
      v(), N = null, y(null);
    };
    f.current = C;
    const S = (w) => {
      v(), N = w, x = window.setTimeout(() => {
        x = null, y(w);
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
    const x = window.setTimeout(() => f.current(), a);
    return () => window.clearTimeout(x);
  }, [i, m, a]), Hs(() => {
    const x = m;
    if (!x) return;
    const N = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [N, o].filter(Boolean).join(" ")
    ), () => {
      N == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", N);
    };
  }, [m, o]), Hs(() => {
    const x = d.current, N = m;
    !x || !N || Object.assign(
      x.style,
      pu(N.getBoundingClientRect(), n)
    );
  }, [m, n]), i)
    return m ? /* @__PURE__ */ D(
      "span",
      {
        ref: d,
        role: "tooltip",
        id: o,
        className: [
          Un.tooltip,
          Un[n],
          Un.floating,
          c
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ s("span", { className: Un.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = qt(t) ? to(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? o : null
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
        onMouseLeave: p,
        onFocus: b,
        onBlur: p,
        children: [
          _,
          u && /* @__PURE__ */ D(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [Un.tooltip, Un[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ s("span", { className: Un.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const hu = "_dialog_1t7pw_1", mu = "_sm_1t7pw_104", gu = "_resizable_1t7pw_110", yu = "_md_1t7pw_113", bu = "_lg_1t7pw_117", xu = "_header_1t7pw_121", vu = "_title_1t7pw_132", wu = "_description_1t7pw_139", ku = "_close_1t7pw_146", Nu = "_body_1t7pw_176", Su = "_footer_1t7pw_188", yn = {
  dialog: hu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: mu,
  resizable: gu,
  md: yu,
  lg: bu,
  header: xu,
  title: vu,
  description: wu,
  close: ku,
  body: Nu,
  footer: Su
};
function Ea({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: a,
  footer: i,
  size: c = "md",
  width: o,
  height: l,
  closeOnOverlayClick: d = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: g = null,
  showCloseButton: m = !0,
  showMask: y = !0,
  canClose: h,
  className: b
}) {
  const p = ne(null), _ = at(), x = at(), N = ne(t);
  be(() => {
    N.current = t;
  });
  const v = ne(h);
  be(() => {
    v.current = h;
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
      if (T.key !== "Tab" || !p.current) return;
      const w = Array.from(
        p.current.querySelectorAll(
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
    const T = p.current;
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
      ref: p,
      className: [
        yn.dialog,
        yn[c],
        u ? yn.resizable : null,
        g ? yn[`side-${g}`] : null,
        y === !1 ? yn["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: I,
      onClick: (T) => {
        T.target === p.current && d && E();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: M,
      children: [
        n && /* @__PURE__ */ D("header", { className: yn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ s("h2", { id: _, className: yn.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: x, className: yn.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: yn.close,
              onClick: () => {
                E();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ s("div", { className: yn.body, children: a }),
        i && /* @__PURE__ */ s("footer", { className: yn.footer, children: i })
      ]
    }
  );
}
const Ou = "_typography_1jy8x_1", $u = "_h1_1jy8x_39", Eu = "_h2_1jy8x_45", Tu = "_h3_1jy8x_51", Cu = "_h4_1jy8x_57", Au = "_h5_1jy8x_63", Du = "_h6_1jy8x_69", Mu = "_button_1jy8x_99", Iu = "_caption_1jy8x_106", zu = "_overline_1jy8x_112", Ds = {
  typography: Ou,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: $u,
  h2: Eu,
  h3: Tu,
  h4: Cu,
  h5: Au,
  h6: Du,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Mu,
  caption: Iu,
  overline: zu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Lu = {
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
}, Ru = {
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
}, Pu = {
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
}, ju = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ta = st(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: a,
  visible: i = !0,
  className: c,
  children: o,
  ...l
}, d) {
  if (i === !1) return null;
  const f = n === "Auto" ? Lu[t] : Pu[n];
  return /* @__PURE__ */ s(
    f,
    {
      ref: d,
      className: [
        Ds.typography,
        Ds[Ru[t]],
        r ? Ds[ju[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? o
    }
  );
}), Ca = ir(null);
function KS() {
  const e = jn(Ca);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function GS({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), a = ne(0), i = () => (a.current += 1, a.current), c = ne([]);
  c.current = t;
  const o = (g) => {
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
      openSide: ({ position: g, showMask: m = !0, ...y }) => new Promise((h) => {
        n((b) => [
          ...b,
          {
            seq: i(),
            kind: "custom",
            options: { ...y, side: g, showMask: m },
            resolve: h
          }
        ]);
      }),
      close: (g) => o(g),
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
  return /* @__PURE__ */ D(Ca.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ s(
      Ea,
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
        footer: d?.kind === "confirm" ? /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ s(ln, { variant: "text", onClick: () => f(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            ln,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => f(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ s(ln, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ s(ln, { onClick: () => f(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? u?.content : d?.options.message != null && /* @__PURE__ */ s(Ta, { textStyle: "Body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Bu = "_viewport_11t1p_1", Fu = "_topLeft_11t1p_13", Hu = "_topRight_11t1p_20", Uu = "_bottomLeft_11t1p_25", qu = "_toast_11t1p_30", Wu = "_leaving_11t1p_61", Ku = "_info_11t1p_77", Gu = "_success_11t1p_86", Vu = "_warning_11t1p_95", Yu = "_danger_11t1p_104", Xu = "_content_11t1p_113", Zu = "_title_11t1p_118", Ju = "_description_11t1p_141", Qu = "_dismiss_11t1p_148", ef = "_actions_11t1p_169", tf = "_action_11t1p_169", nf = "_cancel_11t1p_177", rf = "_progress_11t1p_215", en = {
  viewport: Bu,
  topLeft: Fu,
  topRight: Hu,
  bottomLeft: Uu,
  toast: qu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Wu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Ku,
  success: Gu,
  warning: Vu,
  danger: Yu,
  content: Xu,
  title: Zu,
  description: Ju,
  dismiss: Qu,
  actions: ef,
  action: tf,
  cancel: nf,
  progress: rf,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Aa = ir(null);
function VS() {
  const e = jn(Aa);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const sf = 200, of = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function YS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = q([]), [o, l] = q(!1), d = ne([]), f = ne(/* @__PURE__ */ new Map()), u = ne(!1), g = ne(0), m = (k) => {
    u.current = k, l(k);
  }, y = B((k) => {
    const A = f.current.get(k);
    A && (window.clearTimeout(A.timeoutId), A.remaining = Math.max(
      0,
      A.remaining - (Date.now() - A.startedAt)
    ));
  }, []), h = B((k) => {
    const A = f.current.get(k);
    A && (window.clearTimeout(A.timeoutId), f.current.delete(k));
  }, []), b = B(
    (k) => {
      h(k), c((A) => {
        const R = A.filter((z) => z.id !== k);
        return d.current = R, R;
      });
    },
    [h]
  ), p = B(
    (k) => {
      const A = d.current.find((R) => R.id === k);
      !A || A.leaving || (A.onAutoClose?.(), b(k));
    },
    [b]
  ), _ = B(
    (k) => {
      const A = f.current.get(k);
      !A || A.remaining <= 0 || (A.startedAt = Date.now(), A.timeoutId = window.setTimeout(() => p(k), A.remaining));
    },
    [p]
  ), x = B(() => {
    u.current || f.current.forEach((k, A) => y(A)), m(!0);
  }, [y]), N = B(() => {
    f.current.forEach((k, A) => _(A)), m(!1);
  }, [_]);
  be(() => {
    if (!r) return;
    const k = () => {
      document.hidden ? x() : N();
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, [r, x, N]);
  const v = B(
    (k) => {
      const A = d.current.find((R) => R.id === k);
      !A || A.leaving || (A.onDismiss?.(), c((R) => {
        const z = R.map(
          (j) => j.id === k ? { ...j, leaving: !0 } : j
        );
        return d.current = z, z;
      }), window.setTimeout(() => b(k), sf));
    },
    [b]
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
      }), A && h(R.id), C(R);
    },
    [t, n, C, h]
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
  ), T = r ? x : void 0, w = r ? N : void 0;
  return /* @__PURE__ */ D(Aa.Provider, { value: I, children: [
    e,
    M.map((k) => /* @__PURE__ */ s(
      "div",
      {
        className: [en.viewport, en[of[k]], a].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: T,
        onMouseLeave: w,
        children: i.filter((A) => A.position === k).map((A) => /* @__PURE__ */ D(
          "div",
          {
            role: A.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
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
                /* @__PURE__ */ s("div", { className: en.title, children: A.title }),
                A.description && /* @__PURE__ */ s("div", { className: en.description, children: A.description }),
                (A.action || A.cancel) && /* @__PURE__ */ D("div", { className: en.actions, children: [
                  A.action && /* @__PURE__ */ s(
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
                  A.cancel && /* @__PURE__ */ s(
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
              A.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: en.dismiss,
                  onClick: () => v(A.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              ),
              A.showProgress && A.durationMs > 0 && /* @__PURE__ */ s(
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
const af = "_navigator_848v2_3", lf = "_track_848v2_9", cf = "_spark_848v2_19", df = "_window_848v2_28", uf = "_handle_848v2_37", qn = {
  navigator: af,
  track: lf,
  spark: cf,
  window: df,
  handle: uf
};
function To(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), c = Math.max(n, Math.min(r, t));
  if (c - i < a) {
    const o = (i + c) / 2;
    i = Math.max(n, o - a / 2), c = Math.min(r, i + a), i = Math.max(n, c - a);
  }
  return i > c && ([i, c] = [c, i]), { start: i, end: c };
}
function XS({
  min: e = 0,
  max: t = 100,
  value: n,
  defaultValue: r,
  onChange: a,
  data: i,
  minSpan: c = 0,
  ariaLabel: o = "Range navigator",
  className: l
}) {
  const d = n !== void 0, [f, u] = q(
    () => r && To(
      r.start,
      r.end,
      e,
      t,
      c
    ) || {
      start: e,
      end: t
    }
  ), g = d && n ? n : f, m = ne(null), y = ne(null), h = B(
    ($) => {
      const E = To($.start, $.end, e, t, c);
      d || u(E), a?.(E);
    },
    [d, e, t, c, a]
  ), b = B(
    ($) => {
      const E = y.current;
      if (!E) return e;
      const I = E.getBoundingClientRect(), M = I.width > 0 ? ($ - I.left) / I.width : 0;
      return e + Math.max(0, Math.min(1, M)) * (t - e || 1);
    },
    [e, t]
  ), p = B(
    ($) => (Math.max(e, Math.min(t, $)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  be(() => {
    const $ = (I) => {
      const M = m.current;
      if (!M) return;
      const T = b(I.clientX);
      if (M.mode === "start") h({ start: T, end: g.end });
      else if (M.mode === "end") h({ start: g.start, end: T });
      else {
        const w = g.end - g.start, k = T - M.grabOffset;
        h({ start: k, end: k + w });
      }
    }, E = () => {
      m.current = null;
    };
    return document.addEventListener("pointermove", $), document.addEventListener("pointerup", E), () => {
      document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", E);
    };
  }, [h, b, g]);
  const _ = ($) => (E) => {
    E.preventDefault(), E.target.focus?.(), m.current = { mode: $, grabOffset: 0 };
  }, x = ($) => {
    const E = b($.clientX);
    if (E >= g.start && E <= g.end)
      m.current = { mode: "pan", grabOffset: E - g.start };
    else {
      const I = Math.abs(E - g.start), M = Math.abs(E - g.end);
      I <= M ? h({ start: E, end: g.end }) : h({ start: g.start, end: E });
    }
  }, N = (t - e || 1) / 100, v = ($) => (E) => {
    const I = E.shiftKey ? N * 10 : N;
    E.key === "ArrowLeft" || E.key === "ArrowDown" ? (E.preventDefault(), h(
      $ === "start" ? { start: g.start - I, end: g.end } : { start: g.start, end: g.end - I }
    )) : E.key === "ArrowRight" || E.key === "ArrowUp" ? (E.preventDefault(), h(
      $ === "start" ? { start: g.start + I, end: g.end } : { start: g.start, end: g.end + I }
    )) : E.key === "Home" ? (E.preventDefault(), h(
      $ === "start" ? { start: e, end: g.end } : { start: g.start, end: t }
    )) : E.key === "End" && (E.preventDefault(), h(
      $ === "start" ? { start: g.end - c, end: g.end } : { start: g.start, end: t }
    ));
  }, C = p(g.start), S = Math.max(0, p(g.end) - C);
  return /* @__PURE__ */ s(
    "div",
    {
      className: [qn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: /* @__PURE__ */ D("div", { ref: y, className: qn.track, onPointerDown: x, children: [
        i && i.length > 1 && /* @__PURE__ */ s(
          "svg",
          {
            className: qn.spark,
            viewBox: "0 0 100 24",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            children: /* @__PURE__ */ s(
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
        /* @__PURE__ */ s(
          "div",
          {
            className: qn.window,
            style: { left: `${C}%`, width: `${S}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            tabIndex: 0,
            "aria-label": "Window start",
            "aria-valuemin": e,
            "aria-valuemax": t,
            "aria-valuenow": Math.round(g.start * 100) / 100,
            className: [qn.handle, qn.handleStart].filter(Boolean).join(" "),
            style: { left: `${C}%` },
            onPointerDown: _("start"),
            onKeyDown: v("start")
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            tabIndex: 0,
            "aria-label": "Window end",
            "aria-valuemin": e,
            "aria-valuemax": t,
            "aria-valuenow": Math.round(g.end * 100) / 100,
            className: [qn.handle, qn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${C + S}%` },
            onPointerDown: _("end"),
            onKeyDown: v("end")
          }
        )
      ] })
    }
  );
}
const ff = "_gauge_pyq6q_3", _f = "_value_pyq6q_11", pf = "_tick_pyq6q_16", Ln = {
  gauge: ff,
  value: _f,
  tick: pf
}, ss = 150, Co = 240;
function Ao(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Do(e, t, n, r, a) {
  const [i, c] = Ao(e, t, n, r), [o, l] = Ao(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${o} ${l}`;
}
function hf(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const a of t)
    e >= a.offset && (r = a.color);
  return r;
}
function ZS({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: a,
  colorStops: i,
  size: c = 200,
  showValue: o = !0,
  formatValue: l = (u) => String(Math.round(u * 100) / 100),
  ariaLabel: d = "Gauge",
  className: f
}) {
  const u = n - t || 1, g = Math.max(0, Math.min(1, (e - t) / u)), m = "var(--dx-border-color)", y = a ?? "var(--dx-primary-color)", h = 100, b = 96, p = 80, _ = ss + Co * g;
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": d,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Ln.gauge, f].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ s(
            "path",
            {
              d: Do(h, b, p, ss, ss + Co),
              fill: "none",
              stroke: m,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          g > 0 && /* @__PURE__ */ s(
            "path",
            {
              d: Do(h, b, p, ss, _),
              fill: "none",
              stroke: hf(g, i, y),
              strokeWidth: r,
              strokeLinecap: "round"
            }
          )
        ] }),
        o && /* @__PURE__ */ s("div", { className: Ln.value, children: l(e) })
      ]
    }
  );
}
function vr(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Mo(e, t, n, r, a) {
  const [i, c] = vr(e, t, n, r), [o, l] = vr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${o} ${l}`;
}
function mf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function JS({
  value: e,
  min: t = 0,
  max: n = 100,
  startAngle: r = 0,
  endAngle: a = 360,
  ticks: i = {},
  ranges: c = [],
  pointers: o = [],
  color: l,
  size: d = 200,
  showValue: f = !0,
  formatValue: u = (y) => String(Math.round(y * 100) / 100),
  ariaLabel: g = "Gauge",
  className: m
}) {
  const y = n - t || 1, h = (M) => Math.max(0, Math.min(1, (M - t) / y)), p = a - r >= 360 ? r + 359.999 : a, _ = (M) => r + (p - r) * h(M), x = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: v = 8, showLabels: C = !0 } = i, S = 100, $ = 100, E = 78, I = (M, T, w) => {
    const [k, A] = vr(S, $, E - 14, _(M));
    return /* @__PURE__ */ s("g", { children: /* @__PURE__ */ s(
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
      className: [Ln.gauge, m].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ s(
            "path",
            {
              d: Mo(S, $, E, r, p),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((M, T) => /* @__PURE__ */ s(
            "path",
            {
              d: Mo(
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
          v > 0 && mf(t, n, v).map((M, T) => {
            const [w, k] = vr(S, $, E - 10, _(M)), [A, R] = vr(S, $, E - 16, _(M)), [z, j] = vr(S, $, E - 26, _(M));
            return /* @__PURE__ */ D("g", { children: [
              /* @__PURE__ */ s(
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
              C && /* @__PURE__ */ s(
                "text",
                {
                  x: z,
                  y: j + 4,
                  textAnchor: "middle",
                  className: Ln.tick,
                  children: M
                }
              )
            ] }, T);
          }),
          I(e, x, "value"),
          o.map(
            (M, T) => I(M.value, M.color ?? x, `extra-${T}`)
          ),
          /* @__PURE__ */ s("circle", { cx: S, cy: $, r: 7, fill: x })
        ] }),
        f && /* @__PURE__ */ s("div", { className: Ln.value, children: u(e) })
      ]
    }
  );
}
function gf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function QS({
  value: e,
  min: t = 0,
  max: n = 100,
  orientation: r = "horizontal",
  ticks: a = {},
  ranges: i = [],
  color: c,
  length: o,
  thickness: l = 20,
  showValue: d = !0,
  formatValue: f = (m) => String(Math.round(m * 100) / 100),
  ariaLabel: u = "Gauge",
  className: g
}) {
  const m = n - t || 1, y = r === "vertical", h = o ?? (y ? 220 : 280), { count: b = 5, showLabels: p = !0 } = a, _ = c ?? "var(--dx-primary-color)", x = "var(--dx-border-color)", N = 8, v = (I) => {
    const T = (Math.max(t, Math.min(n, I)) - t) / m;
    return y ? h - N - T * (h - N * 2) : N + T * (h - N * 2);
  }, C = () => b <= 0 ? null : gf(t, n, b).map((I, M) => {
    const T = v(I);
    return /* @__PURE__ */ D("g", { children: [
      y ? /* @__PURE__ */ s(
        "line",
        {
          x1: -6,
          y1: T,
          x2: 0,
          y2: T,
          stroke: x,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ s(
        "line",
        {
          x1: T,
          y1: -6,
          x2: T,
          y2: 0,
          stroke: x,
          strokeWidth: 1.5
        }
      ),
      p && (y ? /* @__PURE__ */ s("text", { x: -10, y: T + 4, textAnchor: "end", className: Ln.tick, children: I }) : /* @__PURE__ */ s("text", { x: T, y: -10, textAnchor: "middle", className: Ln.tick, children: I }))
    ] }, M);
  }), S = () => i.map((I, M) => {
    const T = v(I.from), w = v(I.to), k = Math.min(T, w), A = Math.abs(w - T);
    return y ? /* @__PURE__ */ s(
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
    ) : /* @__PURE__ */ s(
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
    y ? /* @__PURE__ */ s(
      "rect",
      {
        x: -l / 2,
        y: N,
        width: l,
        height: h - N * 2,
        rx: l / 2,
        fill: "none",
        stroke: x,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: h - N * 2,
        height: l,
        rx: l / 2,
        fill: "none",
        stroke: x,
        strokeWidth: 2
      }
    ),
    y ? /* @__PURE__ */ s(
      "rect",
      {
        x: -l / 2,
        y: $,
        width: l,
        height: h - N - $,
        rx: l / 2,
        fill: _
      }
    ) : /* @__PURE__ */ s(
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
    y ? /* @__PURE__ */ s(
      "path",
      {
        d: `M ${-l / 2 - 10} ${$} L ${-l / 2 - 2} ${$ - 5} L ${-l / 2 - 2} ${$ + 5} Z`,
        fill: _
      }
    ) : /* @__PURE__ */ s(
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
      className: [Ln.gauge, g].filter(Boolean).join(" "),
      children: [
        y ? /* @__PURE__ */ s(
          "svg",
          {
            width: l + 64,
            height: h + 8,
            viewBox: `${-l / 2 - 56} -16 ${l + 64} ${h + 24}`,
            "aria-hidden": "true",
            children: E
          }
        ) : /* @__PURE__ */ s(
          "svg",
          {
            width: h,
            height: l + 48,
            viewBox: `0 -24 ${h} ${l + 56}`,
            "aria-hidden": "true",
            children: E
          }
        ),
        d && /* @__PURE__ */ s("div", { className: Ln.value, children: f(e) })
      ]
    }
  );
}
const yf = "_chat_1apnf_3", bf = "_messages_1apnf_9", xf = "_message_1apnf_9", vf = "_user_1apnf_29", wf = "_assistant_1apnf_35", kf = "_system_1apnf_40", Nf = "_typing_1apnf_46", Sf = "_inputRow_1apnf_51", fr = {
  chat: yf,
  messages: bf,
  message: xf,
  user: vf,
  assistant: wf,
  system: kf,
  typing: Nf,
  inputRow: Sf
};
function eO({
  messages: e = [],
  onSend: t,
  placeholder: n = "Type a message…",
  sendText: r = "Send",
  inputLabel: a = "Message",
  ariaLabel: i = "Chat",
  messageTemplate: c,
  inputTemplate: o,
  loading: l = !1,
  disabled: d = !1,
  className: f
}) {
  const [u, g] = q(""), m = l || d, y = u.trim().length > 0 && !m, h = (p) => {
    p.preventDefault();
    const _ = u.trim();
    !_ || m || (g(""), t?.(_));
  }, b = /* @__PURE__ */ D("form", { className: fr.inputRow, onSubmit: (p) => {
    h(p);
  }, children: [
    /* @__PURE__ */ s(
      so,
      {
        value: u,
        placeholder: n,
        "aria-label": a,
        disabled: m,
        onChange: (p) => g(p.target.value)
      }
    ),
    /* @__PURE__ */ s(ln, { type: "submit", disabled: !y, loading: l, children: r })
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
            (p, _) => c ? /* @__PURE__ */ s("div", { children: c(p, _) }, _) : /* @__PURE__ */ s(
              "div",
              {
                className: [fr.message, fr[p.role]].filter(Boolean).join(" "),
                children: p.content
              },
              _
            )
          ),
          l && /* @__PURE__ */ s("div", { className: fr.typing, children: "…" })
        ] }),
        o ? o(b) : b
      ]
    }
  );
}
const Of = "_wrapper_1ulz6_1", $f = "_input_1ulz6_8", Ef = "_invalid_1ulz6_38", Tf = "_toggle_1ulz6_45", Cf = "_xs_1ulz6_80", Af = "_sm_1ulz6_86", Df = "_md_1ulz6_92", Mf = "_lg_1ulz6_98", If = "_xl_1ulz6_104", Dr = {
  wrapper: Of,
  input: $f,
  invalid: Ef,
  toggle: Tf,
  xs: Cf,
  sm: Af,
  md: Df,
  lg: Mf,
  xl: If
}, zf = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    showLabel: i = "Show password",
    hideLabel: c = "Hide password",
    ...o
  }, l) {
    const [d, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Dr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
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
            ...o
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Dr.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ s(Me, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Lf = "_login_30qie_3", Rf = "_title_30qie_9", Pf = "_remember_30qie_14", jf = "_link_30qie_21", Mr = {
  login: Lf,
  title: Rf,
  remember: Pf,
  link: jf
}, oo = "dx-login-username";
function Bf(e) {
  const t = e === void 0 ? oo : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Ff(e, t) {
  const n = e === void 0 ? oo : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function Hf(e) {
  const t = e === void 0 ? oo : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function tO({
  action: e,
  method: t = "post",
  onLogin: n,
  onRegister: r,
  onForgotPassword: a,
  registerContent: i,
  forgotPasswordContent: c,
  rememberMe: o = !0,
  loading: l = !1,
  title: d,
  usernameLabel: f = "Username",
  passwordLabel: u = "Password",
  submitText: g = "Sign in",
  storageKey: m,
  className: y
}) {
  const [h, b] = q(() => Bf(m) ?? ""), [p, _] = q(""), [x, N] = q(!1), [v, C] = q(!1), [S, $] = q({}), E = l || v, I = e != null && n == null, M = async (T) => {
    I || T.preventDefault();
    const w = {};
    if (h.trim() || (w.username = "Username is required."), p || (w.password = "Password is required."), $(w), !(w.username || w.password || !n)) {
      C(!0);
      try {
        await n({
          username: h.trim(),
          password: p,
          rememberMe: x
        }), x ? Ff(m, h.trim()) : Hf(m);
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
        d != null && /* @__PURE__ */ s("div", { className: Mr.title, children: d }),
        /* @__PURE__ */ s(ar, { label: f, required: !0, error: S.username, children: ({ inputId: T }) => /* @__PURE__ */ s(
          so,
          {
            id: T,
            value: h,
            autoComplete: "username",
            disabled: E,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (w) => {
              b(w.target.value), $((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ s(ar, { label: u, required: !0, error: S.password, children: ({ inputId: T }) => /* @__PURE__ */ s(
          zf,
          {
            id: T,
            value: p,
            autoComplete: "current-password",
            disabled: E,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (w) => {
              _(w.target.value), $((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        o && /* @__PURE__ */ D("label", { className: Mr.remember, children: [
          /* @__PURE__ */ s(
            su,
            {
              checked: x,
              disabled: E,
              onChange: (T) => N(T.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ s(ln, { type: "submit", loading: E, disabled: E, children: g }),
        (c ?? a) && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Mr.link,
            onClick: () => a?.(),
            children: c ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ s(
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
function Io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Uf(e) {
  if (Array.isArray(e)) return e;
}
function qf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, c, o = [], l = !0, d = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (o.push(r.value), o.length !== t); l = !0) ;
    } catch (f) {
      d = !0, a = f;
    } finally {
      try {
        if (!l && n.return != null && (c = n.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw a;
      }
    }
    return o;
  }
}
function Wf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kf(e, t) {
  return Uf(e) || qf(e, t) || Gf(e, t) || Wf();
}
function Gf(e, t) {
  if (e) {
    if (typeof e == "string") return Io(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Io(e, t) : void 0;
  }
}
const Da = Object.entries, zo = Object.setPrototypeOf, Vf = Object.isFrozen, Yf = Object.getPrototypeOf, Xf = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, xr = Object.create, Ma = typeof Reflect < "u" && Reflect, qs = Ma.apply, Ws = Ma.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
qs || (qs = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return t.apply(n, a);
});
Ws || (Ws = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
  return new t(...r);
});
const or = yt(Array.prototype.forEach), Zf = yt(Array.prototype.lastIndexOf), Lo = yt(Array.prototype.pop), Ir = yt(Array.prototype.push), Jf = yt(Array.prototype.splice), wr = Array.isArray, Wr = yt(String.prototype.toLowerCase), Ms = yt(String.prototype.toString), Ro = yt(String.prototype.match), zr = yt(String.prototype.replace), Po = yt(String.prototype.indexOf), Qf = yt(String.prototype.trim), e_ = yt(Number.prototype.toString), t_ = yt(Boolean.prototype.toString), jo = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Bo = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), Vt = yt(Object.prototype.hasOwnProperty), Lr = yt(Object.prototype.toString), zt = yt(RegExp.prototype.test), Wn = n_(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return qs(e, t, r);
  };
}
function n_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Ws(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wr;
  if (zo && zo(e, null), !wr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const i = n(a);
      i !== a && (Vf(t) || (t[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function r_(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = xr(null);
  for (const r of Da(e)) {
    var n = Kf(r, 2);
    const a = n[0], i = n[1];
    Vt(e, a) && (wr(i) ? t[a] = r_(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = sn(i) : t[a] = i);
  }
  return t;
}
function s_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return e_(e);
    case "boolean":
      return t_(e);
    case "bigint":
      return jo ? jo(e) : "0";
    case "symbol":
      return Bo ? Bo(e) : "Symbol()";
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
    const r = Xf(e, t);
    if (r) {
      if (r.get) return yt(r.get);
      if (typeof r.value == "function") return yt(r.value);
    }
    e = Yf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function o_(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Fo = kt([
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
]), Is = kt([
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
]), zs = kt([
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
]), a_ = kt([
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
]), Ls = kt([
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
]), l_ = kt([
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
]), Ho = kt(["#text"]), Uo = kt([
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
]), Rs = kt([
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
]), qo = kt([
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
]), os = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), i_ = Ot(/{{[\w\W]*|^[\w\W]*}}/g), c_ = Ot(/<%[\w\W]*|^[\w\W]*%>/g), d_ = Ot(/\${[\w\W]*/g), u_ = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), f_ = Ot(/^aria-[\-\w]+$/), Wo = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), __ = Ot(/^(?:\w+script|data):/i), p_ = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), h_ = Ot(/^html$/i), m_ = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Ko = Ot(/<[/\w!]/g), Go = Ot(/<[/\w]/g), g_ = Ot(/<\/no(script|embed|frames)/i), y_ = Ot(/\/>/i), tn = {
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
}, Ia = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], b_ = kt(qe({}, Ia)), x_ = (function() {
  const e = {};
  return or(Ia, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), v_ = function() {
  return typeof window > "u" ? null : window;
}, w_ = function(t, n) {
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
}, Vo = function() {
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
  return Vt(t, n) && wr(t[n]) ? qe(a.base ? sn(a.base) : {}, t[n], a.transform) : r;
}, Ps = function(t, n, r) {
  const a = Vt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? sn(a) : r();
};
function za() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v_();
  const t = (oe) => za(oe);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, o = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, f = e.trustedTypes, u = o.prototype, g = _n(u, "cloneNode"), m = _n(u, "remove"), y = _n(u, "removeAttributeNode"), h = _n(u, "nextSibling"), b = _n(u, "childNodes"), p = _n(u, "parentNode"), _ = _n(u, "shadowRoot"), x = _n(u, "attributes"), N = c && c.prototype ? _n(c.prototype, "nodeType") : null, v = c && c.prototype ? _n(c.prototype, "nodeName") : null, C = c && c.prototype ? _n(c.prototype, "ownerDocument") : null, S = function(O) {
    return N ? N(O) : O.nodeType;
  }, $ = function(O) {
    return v ? v(O) : O.nodeName;
  };
  if (typeof i == "function") {
    const oe = n.createElement("template");
    oe.content && oe.content.ownerDocument && (n = oe.content.ownerDocument);
  }
  let E, I = "", M, T = !1, w = 0;
  const k = function() {
    if (w > 0) throw Wn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
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
    return T || (M = w_(f, a), T = !0), M;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let ae = Vo();
  t.isSupported = typeof Da == "function" && typeof p == "function" && F && F.createHTMLDocument !== void 0;
  const _e = i_, K = c_, me = d_, ue = u_, xe = f_, pe = __, De = p_, G = m_;
  let $e = Wo, re = null;
  const Ae = qe({}, [
    ...Fo,
    ...Is,
    ...zs,
    ...Ls,
    ...Ho
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...Uo,
    ...Rs,
    ...qo,
    ...os
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
  const lt = Object.seal(xr(null, {
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
  let bt = !0, Z = !0, L = !1, Y = !0, Q = !1, ge = !0, le = !1, Ee = !1, je = null, Ze = null, Qe = !1, nt = !1, Xt = !1, se = !1, Le = !0, Nt = !1;
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
  let it = null;
  const V = qe({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let he = null;
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
  ], Ms), ke = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ce = qe({}, ke);
  const Ke = kt(["annotation-xml"]);
  let Be = qe({}, Ke);
  const ct = qe({}, [
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
  }, Tn = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === O) return;
    (!O || typeof O != "object") && (O = {}), O = sn(O), rt = Et.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? ht : O.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? Ms : Wr, re = Kn(O, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Kn(O, "ALLOWED_ATTR", Fe, { transform: ze }), de = Kn(O, "ALLOWED_NAMESPACES", Ne, { transform: Ms }), he = Kn(O, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), it = Kn(O, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Kn(O, "FORBID_CONTENTS", $t, { transform: ze }), Je = Kn(O, "FORBID_TAGS", sn({}), { transform: ze }), At = Kn(O, "FORBID_ATTR", sn({}), { transform: ze }), We = Vt(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? sn(O.USE_PROFILES) : O.USE_PROFILES : !1, bt = O.ALLOW_ARIA_ATTR !== !1, Z = O.ALLOW_DATA_ATTR !== !1, L = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = O.SAFE_FOR_TEMPLATES || !1, ge = O.SAFE_FOR_XML !== !1, le = O.WHOLE_DOCUMENT || !1, nt = O.RETURN_DOM || !1, Xt = O.RETURN_DOM_FRAGMENT || !1, se = O.RETURN_TRUSTED_TYPE || !1, Qe = O.FORCE_BODY || !1, Le = O.SANITIZE_DOM !== !1, Nt = O.SANITIZE_NAMED_PROPS || !1, xt = O.KEEP_CONTENT !== !1, Ie = O.IN_PLACE || !1, $e = o_(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : Wo, W = typeof O.NAMESPACE == "string" ? O.NAMESPACE : Xe, Ce = Ps(O, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = Ps(O, "HTML_INTEGRATION_POINTS", () => qe({}, Ke));
    const P = Ps(O, "CUSTOM_ELEMENT_HANDLING", () => xr(null));
    if (Ge = xr(null), Vt(P, "tagNameCheck") && pn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && pn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), We && (re = qe({}, Ho), fe = xr(null), We.html === !0 && (qe(re, Fo), qe(fe, Uo)), We.svg === !0 && (qe(re, Is), qe(fe, Rs), qe(fe, os)), We.svgFilters === !0 && (qe(re, zs), qe(fe, Rs), qe(fe, os)), We.mathMl === !0 && (qe(re, Ls), qe(fe, qo), qe(fe, os))), lt.tagCheck = null, lt.attributeCheck = null, Vt(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? lt.tagCheck = O.ADD_TAGS : wr(O.ADD_TAGS) && (re === Ae && (re = sn(re)), qe(re, O.ADD_TAGS, ze))), Vt(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? lt.attributeCheck = O.ADD_ATTR : wr(O.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, O.ADD_ATTR, ze))), Vt(O, "ADD_FORBID_CONTENTS") && wr(O.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, O.ADD_FORBID_CONTENTS, ze)), xt && (re["#text"] = !0), le && qe(re, [
      "html",
      "head",
      "body"
    ]), re.table && (qe(re, ["tbody"]), delete Je.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw Wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = E;
      E = O.TRUSTED_TYPES_POLICY;
      try {
        I = A("");
      } catch (ce) {
        throw E = J, ce;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (E = void 0, I = "") : (E === void 0 && (E = z()), E && typeof I == "string" && (I = A("")));
    kt && kt(O), Tt = O;
  }, Fn = qe({}, [
    ...Is,
    ...zs,
    ...a_
  ]), wn = qe({}, [...Ls, ...l_]), Zr = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "svg" : P.namespaceURI === Ye ? O === "svg" && (J === "annotation-xml" || Ce[J]) : !!Fn[O];
  }, Ns = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "math" : P.namespaceURI === Pt ? O === "math" && Be[J] : !!wn[O];
  }, Ss = function(O, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !wn[O] && (ct[O] || !Fn[O]);
  }, Os = function(O) {
    let P = p(O);
    (!P || !P.tagName) && (P = {
      namespaceURI: W,
      tagName: "template"
    });
    const J = Wr(O.tagName), ce = Wr(P.tagName);
    return de[O.namespaceURI] ? O.namespaceURI === Pt ? Zr(J, P, ce) : O.namespaceURI === Ye ? Ns(J, P, ce) : O.namespaceURI === Xe ? Ss(J, P, ce) : !!(rt === "application/xhtml+xml" && de[O.namespaceURI]) : !1;
  }, hn = function(O) {
    Ir(t.removed, { element: O });
    try {
      p(O).removeChild(O);
    } catch {
      if (m(O), !p(O)) throw Wn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
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
    const P = b(O);
    if (P) {
      const ce = [];
      or(P, (Te) => {
        Ir(ce, Te);
      }), or(ce, (Te) => {
        try {
          m(Te);
        } catch {
        }
      });
    }
    const J = x(O);
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
    const P = x(O);
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
      const ce = b(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function(O, P) {
    return ge ? O === "patchsrc" ? !0 : O === "for" && P !== "label" && P !== "output" : !1;
  }, ye = function(O) {
    if (!ge) return;
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Go, J.data)) {
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
      const Te = b(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) P.push(Te[Pe]);
    }
  }, ve = function(O) {
    let P = null, J = null;
    if (Qe) O = "<remove></remove>" + O;
    else {
      const Pe = Ro(O, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && W === Xe && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const ce = E ? A(O) : O;
    if (W === Xe) try {
      P = new d().parseFromString(ce, rt);
    } catch {
    }
    if (!P || !P.documentElement) {
      P = F.createDocument(W, "template", null);
      try {
        P.documentElement.innerHTML = ee ? I : ce;
      } catch {
      }
    }
    const Te = P.body || P.documentElement;
    return O && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), W === Xe ? te.call(P, le ? "html" : "body")[0] : le ? P.documentElement : Te;
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
    Pe && or(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, gn = function(O) {
    const P = v ? v(O) : null;
    return typeof P != "string" || ze(P) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || O.attributes !== x(O) || typeof O.removeAttribute != "function" || typeof O.removeAttributeNode != "function" || typeof O.getAttributeNode != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || O.nodeType !== N(O) || O.childNodes !== b(O);
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
  function Jt(oe, O, P) {
    oe.length !== 0 && or(oe, (J) => {
      J.call(t, O, P, Tt);
    });
  }
  const $s = function(O, P) {
    return !!(ge && O.hasChildNodes() && !gt(O.firstElementChild) && zt(Ko, O.textContent) && zt(Ko, O.innerHTML) || ge && O.namespaceURI === Xe && b_[P] && (gt(O.firstElementChild) || typeof O.textContent == "string" && zt(x_[P], O.textContent)) || O.nodeType === tn.processingInstruction || ge && O.nodeType === tn.comment && zt(Go, O.data));
  }, Qr = function(O, P) {
    if (O instanceof RegExp) return zt(O, P);
    if (O instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!O(P, ...ce);
    }
    return !1;
  }, Ja = function(O, P, J) {
    if (!Je[P] && ho(P) && Qr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = p(O), Te = b(O);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ut = O === J ? g(Te[He], !0) : Te[He];
          ce.insertBefore(ut, h(O));
        }
      }
    }
    return hn(O), !0;
  }, fo = function(O, P, J, ce) {
    return O.length === 0 ? P : P === J || P === ce ? sn(P) : P;
  }, dr = function(O, P) {
    return O === P || p(O) !== null ? !1 : (Ie && H(O), !0);
  }, _o = function(O, P) {
    if (Jt(ae.beforeSanitizeElements, O, null), dr(O, P)) return !0;
    if (gn(O))
      return hn(O), !0;
    const J = ze($(O));
    if (re = fo(ae.uponSanitizeElement, re, Ae, je), Jt(ae.uponSanitizeElement, O, {
      tagName: J,
      allowedTags: re
    }), dr(O, P)) return !0;
    if ($s(O, J))
      return hn(O), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !re[J]) {
      const ce = Ja(O, J, P);
      return ce === !1 && (Jt(ae.afterSanitizeElements, O, null), dr(O, P)) ? !0 : ce;
    }
    if (S(O) === tn.element && !Os(O) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(g_, O.innerHTML))
      return hn(O), !0;
    if (Q && O.nodeType === tn.text) {
      const ce = Dt(O.textContent);
      O.textContent !== ce && (Ir(t.removed, { element: O.cloneNode() }), O.textContent = ce);
    }
    return Jt(ae.afterSanitizeElements, O, null), dr(O, P);
  }, po = function(O, P, J) {
    if (At[P] || U(P, O) || Le && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || lt.attributeCheck instanceof Function && lt.attributeCheck(P, O);
    return Z && zt(ue, P) || bt && zt(xe, P) ? !0 : ce ? he[P] || zt($e, zr(J, De, "")) || (P === "src" || P === "xlink:href" || P === "href") && O !== "script" && Po(J, "data:") === 0 && it[O] || L && !zt(pe, zr(J, De, "")) ? !0 : !J : ho(O) && Qr(Ge.tagNameCheck, O) && Qr(Ge.attributeNameCheck, P, O) || P === "is" && Ge.allowCustomizedBuiltInElements && Qr(Ge.tagNameCheck, J);
  }, Qa = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), ho = function(O) {
    return !Qa[Wr(O)] && zt(G, O);
  }, el = function(O, P, J, ce) {
    if (E && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(O, P)) {
      case "TrustedHTML":
        return A(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, tl = function(O, P, J, ce) {
    try {
      return J ? O.setAttributeNS(J, P, ce) : O.setAttribute(P, ce), gn(O) ? (hn(O), !1) : !0;
    } catch {
      return jt(P, O), !1;
    }
  }, mo = function(O, P) {
    if (Jt(ae.beforeSanitizeAttributes, O, null), dr(O, P)) return;
    const J = O.attributes;
    if (!J || gn(O)) return;
    fe = fo(ae.uponSanitizeAttribute, fe, Fe, Ze);
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
      const He = J[Te], ut = He.name, cn = He.namespaceURI, Qt = He.value, ur = ze(ut), Ts = Qt;
      let Bt = ut === "value" ? Ts : Qf(Ts), go = !1;
      if (ce.attrName = ur, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(ae.uponSanitizeAttribute, O, ce), Bt = ce.attrValue, Nt && (ur === "id" || ur === "name") && Po(Bt, Rt) !== 0 && (jt(ut, O, He), Bt = Rt + Bt, go = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ut, O, He);
        continue;
      }
      if (ur === "attributename" && Ro(Bt, "href")) {
        jt(ut, O, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ut, O, He);
          continue;
        }
        if (!Y && zt(y_, Bt)) {
          jt(ut, O, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !po(Pe, ur, Bt)) {
          jt(ut, O, He);
          continue;
        }
        Bt = el(Pe, ur, cn, Bt), Bt !== Ts && tl(O, ut, cn, Bt) && go && Lo(t.removed);
      }
    }
    Jt(ae.afterSanitizeAttributes, O, null), dr(O, P);
  }, es = function(O) {
    let P = null;
    const J = et(O);
    for (Jt(ae.beforeSanitizeShadowDOM, O, null); P = J.nextNode(); )
      if (Jt(ae.uponSanitizeShadowNode, P, null), _o(P, O), mo(P, O), Ct(P.content) && es(P.content), S(P) === tn.element) {
        const ce = _(P);
        Ct(ce) && (Es(ce), es(ce));
      }
    Jt(ae.afterSanitizeShadowDOM, O, null);
  }, Es = function(O) {
    const P = [{
      node: O,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        es(J.shadow);
        continue;
      }
      const ce = J.node, Te = S(ce) === tn.element, Pe = b(ce);
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
  return t.sanitize = function(oe) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, J = null, ce = null, Te = null;
    if (ee = !oe, ee && (oe = "<!-->"), typeof oe != "string" && !gt(oe) && (oe = s_(oe), typeof oe != "string"))
      throw Wn("dirty is not a string, aborting");
    if (!t.isSupported) return oe;
    Ee ? (re = je, fe = Ze) : Tn(O), (ae.uponSanitizeElement.length > 0 || ae.uponSanitizeAttribute.length > 0) && (re = sn(re)), ae.uponSanitizeAttribute.length > 0 && (fe = sn(fe)), t.removed = [];
    const Pe = Ie && typeof oe != "string" && gt(oe);
    if (Pe) {
      ye(oe);
      const cn = $(oe);
      if (typeof cn == "string") {
        const Qt = ze(cn);
        if (!re[Qt] || Je[Qt])
          throw mn(oe), Wn("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(oe))
        throw mn(oe), Wn("root node is clobbered and cannot be sanitized in-place");
      try {
        Es(oe);
      } catch (Qt) {
        throw mn(oe), Qt;
      }
    } else if (gt(oe))
      P = ve("<!---->"), J = P.ownerDocument.importNode(oe, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), Es(P);
    else {
      if (!nt && !Q && !le && oe.indexOf("<") === -1) return E && se ? A(oe) : oe;
      if (P = ve(oe), !P) return nt ? null : se ? I : "";
    }
    P && Qe && hn(P.firstChild);
    const He = Pe ? oe : P;
    try {
      const cn = et(He);
      for (; ce = cn.nextNode(); )
        _o(ce, He), mo(ce, He), Ct(ce.content) && es(ce.content);
    } catch (cn) {
      throw Pe && (mn(oe), or(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), cn;
    }
    if (Pe) {
      let cn = !1;
      if (or(t.removed, (Qt) => {
        Qt.element && (Qt.element === oe && (cn = !0), H(Qt.element));
      }), cn) throw Wn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(oe), oe;
    }
    if (nt) {
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ut = le ? P.outerHTML : P.innerHTML;
    return le && re["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(h_, P.ownerDocument.doctype.name) && (ut = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ut), Q && (ut = Dt(ut)), E && se ? A(ut) : ut;
  }, t.setConfig = function() {
    let oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(oe), Ee = !0, je = re, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, E = M, I = "";
  }, t.isValidAttribute = function(oe, O, P) {
    Tt || Tn({});
    const J = ze(oe), ce = ze(O);
    return po(J, ce, P);
  }, t.addHook = function(oe, O) {
    typeof O == "function" && Vt(ae, oe) && Ir(ae[oe], O);
  }, t.removeHook = function(oe, O) {
    if (Vt(ae, oe)) {
      if (O !== void 0) {
        const P = Zf(ae[oe], O);
        return P === -1 ? void 0 : Jf(ae[oe], P, 1)[0];
      }
      return Lo(ae[oe]);
    }
  }, t.removeHooks = function(oe) {
    Vt(ae, oe) && (ae[oe] = []);
  }, t.removeAllHooks = function() {
    ae = Vo();
  }, t;
}
var La = za();
function Gr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function k_(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const as = "\0";
function ls(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Gr(i)}</code>`), `${as}${n.length - 1}${as}`));
  return t || (r = Gr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, c) => {
      const o = k_(c);
      return o == null ? i : `<a href="${Gr(o)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${as}(\\d+)${as}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function N_(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), a = (l) => r[l] ?? "", i = [];
  let c = 0;
  const o = (l, d) => {
    const f = d ? "ol" : "ul";
    i.push(
      `<${f}>${l.map((u) => `<li>${ls(u, n)}</li>`).join("")}</${f}>`
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
        `<h${f.length}>${ls(u.trim(), n)}</h${f.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const h = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", b = [];
      for (c += 1; c < r.length; ) {
        const _ = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(_)) break;
        b.push(_), c += 1;
      }
      c += 1;
      const p = h ? ` class="language-${Gr(h)}"` : "";
      i.push(
        `<pre><code${p}>${Gr(b.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const h = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        h.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${h.map((b) => `<p>${ls(b, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(l.trim())) {
      i.push("<hr>"), c += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(l)) {
      const h = [];
      for (; c < r.length; ) {
        const p = /^\s*[-*+]\s+(.*)$/.exec(a(c))?.[1];
        if (p === void 0) break;
        h.push(p), c += 1;
      }
      o(h, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(l)) {
      const h = [];
      for (; c < r.length; ) {
        const p = /^\s*\d+[.)]\s+(.*)$/.exec(a(c))?.[1];
        if (p === void 0) break;
        h.push(p), c += 1;
      }
      o(h, !0);
      continue;
    }
    const y = [];
    for (; c < r.length && !/^\s*$/.test(a(c)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(c)
    ); )
      y.push(a(c)), c += 1;
    i.push(`<p>${ls(y.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const S_ = "_markdown_1vu4b_3", O_ = "_resize_1vu4b_61", Yo = {
  markdown: S_,
  resize: O_
};
function nO({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Oe(
    () => La.sanitize(N_(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Yo.markdown, n ? Yo.resize : "", a].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const $_ = "_editor_2a7al_3", E_ = "_toolbar_2a7al_13", T_ = "_tool_2a7al_13", C_ = "_separator_2a7al_56", A_ = "_area_2a7al_63", D_ = "_source_2a7al_73", M_ = "_alignGlyph_2a7al_84", I_ = "_colorInput_2a7al_89", z_ = "_select_2a7al_98", St = {
  editor: $_,
  toolbar: E_,
  tool: T_,
  separator: C_,
  area: A_,
  source: D_,
  alignGlyph: M_,
  colorInput: I_,
  select: z_
}, L_ = [
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
], Xo = {
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
}, R_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], P_ = ["1", "2", "3", "4", "5", "6", "7"], j_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Ks(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function B_(e) {
  return Ks("formatBlock", `<${e}>`) || Ks("formatBlock", e);
}
function F_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const rO = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: a,
    toolbar: i = L_,
    imageUpload: c,
    readOnly: o = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: f,
    sanitize: u = !0
  }, g) {
    const [m, y] = q(!1), [h, b] = q(n), [p, _] = q(
      null
    ), [x, N] = q(""), [v, C] = q(""), [S, $] = q(2), [E, I] = q(2), [M, T] = q(!1), w = ne(null), k = ne(null), A = ne(n), R = B(
      (G) => u ? La.sanitize(G) : G,
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
        if (o || l) return !1;
        w.current?.focus();
        const re = Ks(G, $e);
        if (re) {
          const Ae = w.current;
          Ae && z(Ae.innerHTML);
        }
        return re;
      },
      [z, o, l]
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
    ws(g, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = Xo[G];
        !$e || o || l || j($e.command);
      },
      [j, o, l]
    ), ae = B(() => {
      o || l || (m ? (y(!1), z(h)) : (b(w.current?.innerHTML ?? ""), y(!0)));
    }, [m, h, z, o, l]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || o || l) return;
        const $e = G.key.toLowerCase(), re = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        re && (G.preventDefault(), we(re));
      },
      [we, o, l]
    ), K = B(() => {
      const G = w.current;
      G && z(G.innerHTML);
    }, [z]), me = B(() => {
      x.trim() && (j("createLink", x.trim()), N(""), _(null));
    }, [x, j]), ue = B(() => {
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
            const fe = (re.headers.get("content-type") ?? "").includes("application/json") ? await re.json() : await re.text(), Fe = (c.parseUrl ?? F_)(fe);
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
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !l && G.onExecute(te);
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
          /* @__PURE__ */ s("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ s(
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? j_ : G === "fontName" ? R_ : P_;
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
              !Fe.target.value || o || l || (G === "formatBlock" ? B_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !l && (N(""), _("link"));
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
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !l && (C(""), _("image"));
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
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !l && ($(2), I(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const re = Xo[G];
      return re ? /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: St.toolbar,
          children: i.map((G, $e) => De(G, $e))
        }
      ),
      m ? /* @__PURE__ */ s(
        "textarea",
        {
          className: St.source,
          "aria-label": `${d} source`,
          value: h,
          disabled: l,
          readOnly: o,
          onChange: (G) => {
            b(G.target.value), z(G.target.value);
          }
        }
      ) : /* @__PURE__ */ s(
        "div",
        {
          ref: w,
          className: St.area,
          contentEditable: !o && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": o || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: A.current },
          onInput: K,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ D(
        Ea,
        {
          open: p !== null,
          onClose: () => _(null),
          title: p === "link" ? "Insert link" : p === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ s(ln, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            p === "link" && /* @__PURE__ */ s(ln, { onClick: me, children: "Insert" }),
            p === "image" && /* @__PURE__ */ s(ln, { onClick: ue, disabled: M, children: "Insert" }),
            p === "table" && /* @__PURE__ */ s(ln, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            p === "link" && /* @__PURE__ */ s(ar, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ s(
              ns,
              {
                id: G,
                value: x,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            p === "image" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ s(ar, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ s(
                ns,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => C($e.target.value)
                }
              ) }),
              c && /* @__PURE__ */ s(ar, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ s(
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
              M && /* @__PURE__ */ s(Ta, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            p === "table" && /* @__PURE__ */ D(ot, { children: [
              /* @__PURE__ */ s(ar, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ s(
                ns,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => $(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ s(ar, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ s(
                ns,
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
), H_ = "_popup_ve7kd_4", Ra = {
  popup: H_
}, Pa = ir(null);
function sO() {
  const e = jn(Pa);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Zo(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function U_({ state: e }) {
  const t = ne(null), [n, r] = q(null);
  return be(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), c = a.getBoundingClientRect(), o = Math.max(
      0,
      Math.min(i.left, window.innerWidth - c.width)
    );
    let l = i.bottom + 4;
    l + c.height > window.innerHeight && i.top - 4 - c.height >= 0 && (l = i.top - 4 - c.height), r({ left: o, top: Math.max(0, l) });
  }, [e]), be(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [Ra.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Zo(e.width),
        height: Zo(e.height)
      },
      children: e.content
    }
  );
}
function oO({ children: e }) {
  const [t, n] = q(null), r = ne(0), a = ne(null), i = B(() => {
    a.current?.(), a.current = null;
  }, []), c = B(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), o = B(
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
      const y = document.querySelector(`.${Ra.popup}`);
      y && !y.contains(m.target) && c();
    }, f = (m) => {
      m.key === "Escape" && (m.preventDefault(), c());
    }, u = () => c(), g = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", g), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", g);
    };
  }, [t, c]);
  const l = Oe(
    () => ({ open: o, close: c, isOpen: t != null }),
    [o, c, t]
  );
  return /* @__PURE__ */ D(Pa.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ s(U_, { state: t }, t.seq)
  ] });
}
const q_ = "_alert_146r9_1", W_ = "_xs_146r9_28", K_ = "_sm_146r9_38", G_ = "_lg_146r9_48", V_ = "_xl_146r9_58", Y_ = "_primary_146r9_69", X_ = "_secondary_146r9_74", Z_ = "_light_146r9_79", J_ = "_base_146r9_84", Q_ = "_dark_146r9_89", ep = "_info_146r9_94", tp = "_success_146r9_99", np = "_warning_146r9_104", rp = "_danger_146r9_109", sp = "_flat_146r9_116", op = "_outlined_146r9_123", ap = "_filled_146r9_132", lp = "_text_146r9_139", ip = "_icon_146r9_181", cp = "_content_146r9_192", dp = "_title_146r9_197", up = "_body_146r9_203", fp = "_dismiss_146r9_209", Nn = {
  alert: q_,
  xs: W_,
  sm: K_,
  lg: G_,
  xl: V_,
  primary: Y_,
  secondary: X_,
  light: Z_,
  base: J_,
  dark: Q_,
  info: ep,
  success: tp,
  warning: np,
  danger: rp,
  flat: sp,
  outlined: op,
  filled: ap,
  text: lp,
  icon: ip,
  content: cp,
  title: dp,
  body: up,
  dismiss: fp,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, _p = {
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
function aO({
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
  children: o,
  dismissible: l = !0,
  onDismiss: d,
  visible: f,
  onVisibleChange: u,
  className: g,
  ...m
}) {
  const [y, h] = q(!1);
  if (f === !1 || f === void 0 && y)
    return null;
  const b = () => {
    f === void 0 && h(!0), d?.(), u?.(!1);
  }, p = e, _ = wa(t, "filled"), x = Vr(n), N = i ?? (c ? /* @__PURE__ */ s(Me, { icon: _p[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        Nn.alert,
        Nn[p],
        Nn[_],
        x ? Nn[x] : null,
        Nn[r],
        g
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ s("span", { className: Nn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ D("div", { className: Nn.content, children: [
          a && /* @__PURE__ */ s("div", { className: Nn.title, children: a }),
          o && /* @__PURE__ */ s("div", { className: Nn.body, children: o })
        ] }),
        l && /* @__PURE__ */ s(
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
const pp = "_skeleton_1xyce_1", hp = "_text_1xyce_35", mp = "_circle_1xyce_40", gp = "_rect_1xyce_44", Jo = {
  skeleton: pp,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: hp,
  circle: mp,
  rect: gp
};
function lO({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const a = {};
  return t !== void 0 && (a.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (a.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [Jo.skeleton, Jo[e], r].filter(Boolean).join(" "),
      style: a
    }
  );
}
function bs(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const yp = "_row_juebr_1", bp = "_start_juebr_14", xp = "_center_juebr_18", vp = "_end_juebr_22", wp = "_stretch_juebr_26", kp = "_baseline_juebr_30", Np = "_normal_juebr_34", Sp = "_noWrap_juebr_90", Op = "_wrapReverse_juebr_94", is = {
  row: yp,
  start: bp,
  center: xp,
  end: vp,
  stretch: wp,
  baseline: kp,
  normal: Np,
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
  noWrap: Sp,
  wrapReverse: Op
};
function Qo(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function iO({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...o
}) {
  const l = e != null ? bs(e) : null, d = t != null ? bs(t) : null, f = {
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
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        is.row,
        is[n],
        is[`justify-${r}`],
        Qo(a) != null ? is[Qo(a)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const $p = "_column_sh0ss_1", Ep = "_Size1_sh0ss_15", Tp = "_Size2_sh0ss_24", Cp = "_Size3_sh0ss_33", Ap = "_Size4_sh0ss_42", Dp = "_Size5_sh0ss_51", Mp = "_Size6_sh0ss_60", Ip = "_Size7_sh0ss_69", zp = "_Size8_sh0ss_78", Lp = "_Size9_sh0ss_87", Rp = "_Size10_sh0ss_96", Pp = "_Size11_sh0ss_105", jp = "_Size12_sh0ss_114", Bp = "_Offset0_sh0ss_119", Fp = "_Offset1_sh0ss_122", Hp = "_Offset2_sh0ss_127", Up = "_Offset3_sh0ss_132", qp = "_Offset4_sh0ss_137", Wp = "_Offset5_sh0ss_142", Kp = "_Offset6_sh0ss_147", Gp = "_Offset7_sh0ss_152", Vp = "_Offset8_sh0ss_157", Yp = "_Offset9_sh0ss_162", Xp = "_Offset10_sh0ss_167", Zp = "_Offset11_sh0ss_172", Jp = "_Offset12_sh0ss_177", Qp = "_OrderFirst_sh0ss_182", eh = "_OrderLast_sh0ss_185", th = "_Order0_sh0ss_188", nh = "_Order1_sh0ss_191", rh = "_Order2_sh0ss_194", sh = "_Order3_sh0ss_197", oh = "_Order4_sh0ss_200", ah = "_Order5_sh0ss_203", lh = "_Order6_sh0ss_206", ih = "_Order7_sh0ss_209", ch = "_Order8_sh0ss_212", dh = "_Order9_sh0ss_215", uh = "_Order10_sh0ss_218", fh = "_Order11_sh0ss_221", _h = "_Order12_sh0ss_224", ph = "_xsSize1_sh0ss_229", hh = "_xsSize2_sh0ss_238", mh = "_xsSize3_sh0ss_247", gh = "_xsSize4_sh0ss_256", yh = "_xsSize5_sh0ss_265", bh = "_xsSize6_sh0ss_274", xh = "_xsSize7_sh0ss_283", vh = "_xsSize8_sh0ss_292", wh = "_xsSize9_sh0ss_301", kh = "_xsSize10_sh0ss_310", Nh = "_xsSize11_sh0ss_321", Sh = "_xsSize12_sh0ss_332", Oh = "_xsOffset0_sh0ss_337", $h = "_xsOffset1_sh0ss_340", Eh = "_xsOffset2_sh0ss_345", Th = "_xsOffset3_sh0ss_350", Ch = "_xsOffset4_sh0ss_355", Ah = "_xsOffset5_sh0ss_360", Dh = "_xsOffset6_sh0ss_365", Mh = "_xsOffset7_sh0ss_370", Ih = "_xsOffset8_sh0ss_375", zh = "_xsOffset9_sh0ss_380", Lh = "_xsOffset10_sh0ss_385", Rh = "_xsOffset11_sh0ss_391", Ph = "_xsOffset12_sh0ss_397", jh = "_xsOrderFirst_sh0ss_403", Bh = "_xsOrderLast_sh0ss_406", Fh = "_xsOrder0_sh0ss_409", Hh = "_xsOrder1_sh0ss_412", Uh = "_xsOrder2_sh0ss_415", qh = "_xsOrder3_sh0ss_418", Wh = "_xsOrder4_sh0ss_421", Kh = "_xsOrder5_sh0ss_424", Gh = "_xsOrder6_sh0ss_427", Vh = "_xsOrder7_sh0ss_430", Yh = "_xsOrder8_sh0ss_433", Xh = "_xsOrder9_sh0ss_436", Zh = "_xsOrder10_sh0ss_439", Jh = "_xsOrder11_sh0ss_442", Qh = "_xsOrder12_sh0ss_445", em = "_smSize1_sh0ss_451", tm = "_smSize2_sh0ss_460", nm = "_smSize3_sh0ss_469", rm = "_smSize4_sh0ss_478", sm = "_smSize5_sh0ss_487", om = "_smSize6_sh0ss_496", am = "_smSize7_sh0ss_505", lm = "_smSize8_sh0ss_514", im = "_smSize9_sh0ss_523", cm = "_smSize10_sh0ss_532", dm = "_smSize11_sh0ss_543", um = "_smSize12_sh0ss_554", fm = "_smOffset0_sh0ss_559", _m = "_smOffset1_sh0ss_562", pm = "_smOffset2_sh0ss_567", hm = "_smOffset3_sh0ss_572", mm = "_smOffset4_sh0ss_577", gm = "_smOffset5_sh0ss_582", ym = "_smOffset6_sh0ss_587", bm = "_smOffset7_sh0ss_592", xm = "_smOffset8_sh0ss_597", vm = "_smOffset9_sh0ss_602", wm = "_smOffset10_sh0ss_607", km = "_smOffset11_sh0ss_613", Nm = "_smOffset12_sh0ss_619", Sm = "_smOrderFirst_sh0ss_625", Om = "_smOrderLast_sh0ss_628", $m = "_smOrder0_sh0ss_631", Em = "_smOrder1_sh0ss_634", Tm = "_smOrder2_sh0ss_637", Cm = "_smOrder3_sh0ss_640", Am = "_smOrder4_sh0ss_643", Dm = "_smOrder5_sh0ss_646", Mm = "_smOrder6_sh0ss_649", Im = "_smOrder7_sh0ss_652", zm = "_smOrder8_sh0ss_655", Lm = "_smOrder9_sh0ss_658", Rm = "_smOrder10_sh0ss_661", Pm = "_smOrder11_sh0ss_664", jm = "_smOrder12_sh0ss_667", Bm = "_mdSize1_sh0ss_673", Fm = "_mdSize2_sh0ss_682", Hm = "_mdSize3_sh0ss_691", Um = "_mdSize4_sh0ss_700", qm = "_mdSize5_sh0ss_709", Wm = "_mdSize6_sh0ss_718", Km = "_mdSize7_sh0ss_727", Gm = "_mdSize8_sh0ss_736", Vm = "_mdSize9_sh0ss_745", Ym = "_mdSize10_sh0ss_754", Xm = "_mdSize11_sh0ss_765", Zm = "_mdSize12_sh0ss_776", Jm = "_mdOffset0_sh0ss_781", Qm = "_mdOffset1_sh0ss_784", e1 = "_mdOffset2_sh0ss_789", t1 = "_mdOffset3_sh0ss_794", n1 = "_mdOffset4_sh0ss_799", r1 = "_mdOffset5_sh0ss_804", s1 = "_mdOffset6_sh0ss_809", o1 = "_mdOffset7_sh0ss_814", a1 = "_mdOffset8_sh0ss_819", l1 = "_mdOffset9_sh0ss_824", i1 = "_mdOffset10_sh0ss_829", c1 = "_mdOffset11_sh0ss_835", d1 = "_mdOffset12_sh0ss_841", u1 = "_mdOrderFirst_sh0ss_847", f1 = "_mdOrderLast_sh0ss_850", _1 = "_mdOrder0_sh0ss_853", p1 = "_mdOrder1_sh0ss_856", h1 = "_mdOrder2_sh0ss_859", m1 = "_mdOrder3_sh0ss_862", g1 = "_mdOrder4_sh0ss_865", y1 = "_mdOrder5_sh0ss_868", b1 = "_mdOrder6_sh0ss_871", x1 = "_mdOrder7_sh0ss_874", v1 = "_mdOrder8_sh0ss_877", w1 = "_mdOrder9_sh0ss_880", k1 = "_mdOrder10_sh0ss_883", N1 = "_mdOrder11_sh0ss_886", S1 = "_mdOrder12_sh0ss_889", O1 = "_lgSize1_sh0ss_895", $1 = "_lgSize2_sh0ss_904", E1 = "_lgSize3_sh0ss_913", T1 = "_lgSize4_sh0ss_922", C1 = "_lgSize5_sh0ss_931", A1 = "_lgSize6_sh0ss_940", D1 = "_lgSize7_sh0ss_949", M1 = "_lgSize8_sh0ss_958", I1 = "_lgSize9_sh0ss_967", z1 = "_lgSize10_sh0ss_976", L1 = "_lgSize11_sh0ss_987", R1 = "_lgSize12_sh0ss_998", P1 = "_lgOffset0_sh0ss_1003", j1 = "_lgOffset1_sh0ss_1006", B1 = "_lgOffset2_sh0ss_1011", F1 = "_lgOffset3_sh0ss_1016", H1 = "_lgOffset4_sh0ss_1021", U1 = "_lgOffset5_sh0ss_1026", q1 = "_lgOffset6_sh0ss_1031", W1 = "_lgOffset7_sh0ss_1036", K1 = "_lgOffset8_sh0ss_1041", G1 = "_lgOffset9_sh0ss_1046", V1 = "_lgOffset10_sh0ss_1051", Y1 = "_lgOffset11_sh0ss_1057", X1 = "_lgOffset12_sh0ss_1063", Z1 = "_lgOrderFirst_sh0ss_1069", J1 = "_lgOrderLast_sh0ss_1072", Q1 = "_lgOrder0_sh0ss_1075", eg = "_lgOrder1_sh0ss_1078", tg = "_lgOrder2_sh0ss_1081", ng = "_lgOrder3_sh0ss_1084", rg = "_lgOrder4_sh0ss_1087", sg = "_lgOrder5_sh0ss_1090", og = "_lgOrder6_sh0ss_1093", ag = "_lgOrder7_sh0ss_1096", lg = "_lgOrder8_sh0ss_1099", ig = "_lgOrder9_sh0ss_1102", cg = "_lgOrder10_sh0ss_1105", dg = "_lgOrder11_sh0ss_1108", ug = "_lgOrder12_sh0ss_1111", fg = "_xlSize1_sh0ss_1117", _g = "_xlSize2_sh0ss_1126", pg = "_xlSize3_sh0ss_1135", hg = "_xlSize4_sh0ss_1144", mg = "_xlSize5_sh0ss_1153", gg = "_xlSize6_sh0ss_1162", yg = "_xlSize7_sh0ss_1171", bg = "_xlSize8_sh0ss_1180", xg = "_xlSize9_sh0ss_1189", vg = "_xlSize10_sh0ss_1198", wg = "_xlSize11_sh0ss_1209", kg = "_xlSize12_sh0ss_1220", Ng = "_xlOffset0_sh0ss_1225", Sg = "_xlOffset1_sh0ss_1228", Og = "_xlOffset2_sh0ss_1233", $g = "_xlOffset3_sh0ss_1238", Eg = "_xlOffset4_sh0ss_1243", Tg = "_xlOffset5_sh0ss_1248", Cg = "_xlOffset6_sh0ss_1253", Ag = "_xlOffset7_sh0ss_1258", Dg = "_xlOffset8_sh0ss_1263", Mg = "_xlOffset9_sh0ss_1268", Ig = "_xlOffset10_sh0ss_1273", zg = "_xlOffset11_sh0ss_1279", Lg = "_xlOffset12_sh0ss_1285", Rg = "_xlOrderFirst_sh0ss_1291", Pg = "_xlOrderLast_sh0ss_1294", jg = "_xlOrder0_sh0ss_1297", Bg = "_xlOrder1_sh0ss_1300", Fg = "_xlOrder2_sh0ss_1303", Hg = "_xlOrder3_sh0ss_1306", Ug = "_xlOrder4_sh0ss_1309", qg = "_xlOrder5_sh0ss_1312", Wg = "_xlOrder6_sh0ss_1315", Kg = "_xlOrder7_sh0ss_1318", Gg = "_xlOrder8_sh0ss_1321", Vg = "_xlOrder9_sh0ss_1324", Yg = "_xlOrder10_sh0ss_1327", Xg = "_xlOrder11_sh0ss_1330", Zg = "_xlOrder12_sh0ss_1333", Jg = "_xxSize1_sh0ss_1339", Qg = "_xxSize2_sh0ss_1348", ey = "_xxSize3_sh0ss_1357", ty = "_xxSize4_sh0ss_1366", ny = "_xxSize5_sh0ss_1375", ry = "_xxSize6_sh0ss_1384", sy = "_xxSize7_sh0ss_1393", oy = "_xxSize8_sh0ss_1402", ay = "_xxSize9_sh0ss_1411", ly = "_xxSize10_sh0ss_1420", iy = "_xxSize11_sh0ss_1431", cy = "_xxSize12_sh0ss_1442", dy = "_xxOffset0_sh0ss_1447", uy = "_xxOffset1_sh0ss_1450", fy = "_xxOffset2_sh0ss_1455", _y = "_xxOffset3_sh0ss_1460", py = "_xxOffset4_sh0ss_1465", hy = "_xxOffset5_sh0ss_1470", my = "_xxOffset6_sh0ss_1475", gy = "_xxOffset7_sh0ss_1480", yy = "_xxOffset8_sh0ss_1485", by = "_xxOffset9_sh0ss_1490", xy = "_xxOffset10_sh0ss_1495", vy = "_xxOffset11_sh0ss_1501", wy = "_xxOffset12_sh0ss_1507", ky = "_xxOrderFirst_sh0ss_1513", Ny = "_xxOrderLast_sh0ss_1516", Sy = "_xxOrder0_sh0ss_1519", Oy = "_xxOrder1_sh0ss_1522", $y = "_xxOrder2_sh0ss_1525", Ey = "_xxOrder3_sh0ss_1528", Ty = "_xxOrder4_sh0ss_1531", Cy = "_xxOrder5_sh0ss_1534", Ay = "_xxOrder6_sh0ss_1537", Dy = "_xxOrder7_sh0ss_1540", My = "_xxOrder8_sh0ss_1543", Iy = "_xxOrder9_sh0ss_1546", zy = "_xxOrder10_sh0ss_1549", Ly = "_xxOrder11_sh0ss_1552", Ry = "_xxOrder12_sh0ss_1555", cs = {
  column: $p,
  Size1: Ep,
  Size2: Tp,
  Size3: Cp,
  Size4: Ap,
  Size5: Dp,
  Size6: Mp,
  Size7: Ip,
  Size8: zp,
  Size9: Lp,
  Size10: Rp,
  Size11: Pp,
  Size12: jp,
  Offset0: Bp,
  Offset1: Fp,
  Offset2: Hp,
  Offset3: Up,
  Offset4: qp,
  Offset5: Wp,
  Offset6: Kp,
  Offset7: Gp,
  Offset8: Vp,
  Offset9: Yp,
  Offset10: Xp,
  Offset11: Zp,
  Offset12: Jp,
  OrderFirst: Qp,
  OrderLast: eh,
  Order0: th,
  Order1: nh,
  Order2: rh,
  Order3: sh,
  Order4: oh,
  Order5: ah,
  Order6: lh,
  Order7: ih,
  Order8: ch,
  Order9: dh,
  Order10: uh,
  Order11: fh,
  Order12: _h,
  xsSize1: ph,
  xsSize2: hh,
  xsSize3: mh,
  xsSize4: gh,
  xsSize5: yh,
  xsSize6: bh,
  xsSize7: xh,
  xsSize8: vh,
  xsSize9: wh,
  xsSize10: kh,
  xsSize11: Nh,
  xsSize12: Sh,
  xsOffset0: Oh,
  xsOffset1: $h,
  xsOffset2: Eh,
  xsOffset3: Th,
  xsOffset4: Ch,
  xsOffset5: Ah,
  xsOffset6: Dh,
  xsOffset7: Mh,
  xsOffset8: Ih,
  xsOffset9: zh,
  xsOffset10: Lh,
  xsOffset11: Rh,
  xsOffset12: Ph,
  xsOrderFirst: jh,
  xsOrderLast: Bh,
  xsOrder0: Fh,
  xsOrder1: Hh,
  xsOrder2: Uh,
  xsOrder3: qh,
  xsOrder4: Wh,
  xsOrder5: Kh,
  xsOrder6: Gh,
  xsOrder7: Vh,
  xsOrder8: Yh,
  xsOrder9: Xh,
  xsOrder10: Zh,
  xsOrder11: Jh,
  xsOrder12: Qh,
  smSize1: em,
  smSize2: tm,
  smSize3: nm,
  smSize4: rm,
  smSize5: sm,
  smSize6: om,
  smSize7: am,
  smSize8: lm,
  smSize9: im,
  smSize10: cm,
  smSize11: dm,
  smSize12: um,
  smOffset0: fm,
  smOffset1: _m,
  smOffset2: pm,
  smOffset3: hm,
  smOffset4: mm,
  smOffset5: gm,
  smOffset6: ym,
  smOffset7: bm,
  smOffset8: xm,
  smOffset9: vm,
  smOffset10: wm,
  smOffset11: km,
  smOffset12: Nm,
  smOrderFirst: Sm,
  smOrderLast: Om,
  smOrder0: $m,
  smOrder1: Em,
  smOrder2: Tm,
  smOrder3: Cm,
  smOrder4: Am,
  smOrder5: Dm,
  smOrder6: Mm,
  smOrder7: Im,
  smOrder8: zm,
  smOrder9: Lm,
  smOrder10: Rm,
  smOrder11: Pm,
  smOrder12: jm,
  mdSize1: Bm,
  mdSize2: Fm,
  mdSize3: Hm,
  mdSize4: Um,
  mdSize5: qm,
  mdSize6: Wm,
  mdSize7: Km,
  mdSize8: Gm,
  mdSize9: Vm,
  mdSize10: Ym,
  mdSize11: Xm,
  mdSize12: Zm,
  mdOffset0: Jm,
  mdOffset1: Qm,
  mdOffset2: e1,
  mdOffset3: t1,
  mdOffset4: n1,
  mdOffset5: r1,
  mdOffset6: s1,
  mdOffset7: o1,
  mdOffset8: a1,
  mdOffset9: l1,
  mdOffset10: i1,
  mdOffset11: c1,
  mdOffset12: d1,
  mdOrderFirst: u1,
  mdOrderLast: f1,
  mdOrder0: _1,
  mdOrder1: p1,
  mdOrder2: h1,
  mdOrder3: m1,
  mdOrder4: g1,
  mdOrder5: y1,
  mdOrder6: b1,
  mdOrder7: x1,
  mdOrder8: v1,
  mdOrder9: w1,
  mdOrder10: k1,
  mdOrder11: N1,
  mdOrder12: S1,
  lgSize1: O1,
  lgSize2: $1,
  lgSize3: E1,
  lgSize4: T1,
  lgSize5: C1,
  lgSize6: A1,
  lgSize7: D1,
  lgSize8: M1,
  lgSize9: I1,
  lgSize10: z1,
  lgSize11: L1,
  lgSize12: R1,
  lgOffset0: P1,
  lgOffset1: j1,
  lgOffset2: B1,
  lgOffset3: F1,
  lgOffset4: H1,
  lgOffset5: U1,
  lgOffset6: q1,
  lgOffset7: W1,
  lgOffset8: K1,
  lgOffset9: G1,
  lgOffset10: V1,
  lgOffset11: Y1,
  lgOffset12: X1,
  lgOrderFirst: Z1,
  lgOrderLast: J1,
  lgOrder0: Q1,
  lgOrder1: eg,
  lgOrder2: tg,
  lgOrder3: ng,
  lgOrder4: rg,
  lgOrder5: sg,
  lgOrder6: og,
  lgOrder7: ag,
  lgOrder8: lg,
  lgOrder9: ig,
  lgOrder10: cg,
  lgOrder11: dg,
  lgOrder12: ug,
  xlSize1: fg,
  xlSize2: _g,
  xlSize3: pg,
  xlSize4: hg,
  xlSize5: mg,
  xlSize6: gg,
  xlSize7: yg,
  xlSize8: bg,
  xlSize9: xg,
  xlSize10: vg,
  xlSize11: wg,
  xlSize12: kg,
  xlOffset0: Ng,
  xlOffset1: Sg,
  xlOffset2: Og,
  xlOffset3: $g,
  xlOffset4: Eg,
  xlOffset5: Tg,
  xlOffset6: Cg,
  xlOffset7: Ag,
  xlOffset8: Dg,
  xlOffset9: Mg,
  xlOffset10: Ig,
  xlOffset11: zg,
  xlOffset12: Lg,
  xlOrderFirst: Rg,
  xlOrderLast: Pg,
  xlOrder0: jg,
  xlOrder1: Bg,
  xlOrder2: Fg,
  xlOrder3: Hg,
  xlOrder4: Ug,
  xlOrder5: qg,
  xlOrder6: Wg,
  xlOrder7: Kg,
  xlOrder8: Gg,
  xlOrder9: Vg,
  xlOrder10: Yg,
  xlOrder11: Xg,
  xlOrder12: Zg,
  xxSize1: Jg,
  xxSize2: Qg,
  xxSize3: ey,
  xxSize4: ty,
  xxSize5: ny,
  xxSize6: ry,
  xxSize7: sy,
  xxSize8: oy,
  xxSize9: ay,
  xxSize10: ly,
  xxSize11: iy,
  xxSize12: cy,
  xxOffset0: dy,
  xxOffset1: uy,
  xxOffset2: fy,
  xxOffset3: _y,
  xxOffset4: py,
  xxOffset5: hy,
  xxOffset6: my,
  xxOffset7: gy,
  xxOffset8: yy,
  xxOffset9: by,
  xxOffset10: xy,
  xxOffset11: vy,
  xxOffset12: wy,
  xxOrderFirst: ky,
  xxOrderLast: Ny,
  xxOrder0: Sy,
  xxOrder1: Oy,
  xxOrder2: $y,
  xxOrder3: Ey,
  xxOrder4: Ty,
  xxOrder5: Cy,
  xxOrder6: Ay,
  xxOrder7: Dy,
  xxOrder8: My,
  xxOrder9: Iy,
  xxOrder10: zy,
  xxOrder11: Ly,
  xxOrder12: Ry
}, Py = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function jy(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function By(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Fy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Hy(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Fy(n, t), `${e}Order${t}`);
}
function cO({ className: e, style: t, ...n }) {
  const r = [cs.column], a = { ...t };
  for (const [M, T, w, k] of Py) {
    const A = n[T], R = n[w], z = n[k];
    if (A != null) {
      jy(T, A);
      const j = cs[`${M}Size${A}`];
      j && r.push(j);
    }
    if (R != null) {
      By(w, R);
      const j = cs[`${M}Offset${R}`];
      j && r.push(j);
    }
    if (z != null) {
      const j = cs[Hy(M, z, k)];
      j && r.push(j);
    }
  }
  const {
    size: i,
    offset: c,
    sizeXs: o,
    offsetXs: l,
    sizeSm: d,
    offsetSm: f,
    sizeMd: u,
    offsetMd: g,
    sizeLg: m,
    offsetLg: y,
    sizeXl: h,
    offsetXl: b,
    sizeXx: p,
    offsetXx: _,
    order: x,
    orderXs: N,
    orderSm: v,
    orderMd: C,
    orderLg: S,
    orderXl: $,
    orderXx: E,
    ...I
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: a,
      ...I
    }
  );
}
const Uy = "_stack_bmbbp_1", Rr = {
  stack: Uy,
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
function ea(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function dO({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: a,
  justify: i,
  className: c,
  style: o,
  ...l
}) {
  const d = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: bs(r) } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Rr.stack,
        Rr[`dir-${d}`],
        ea(n) !== "wrap" ? Rr[`wrap-${ea(n)}`] : null,
        a != null ? Rr[`align-${a}`] : null,
        i != null ? Rr[`justify-${i}`] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const qy = "_autogrid_16x9f_1", Wy = {
  autogrid: qy
};
function uO({
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
    ...t != null ? { gap: bs(t) } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Wy.autogrid, n].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const Ky = "_layout_fxvw1_1", Gy = "_row_fxvw1_7", Vy = "_grid_fxvw1_21", Yy = "_gridRight_fxvw1_27", Xy = "_gridHeader_fxvw1_31", Zy = "_gridFooter_fxvw1_36", Jy = "_gridContents_fxvw1_41", Qy = "_gridBody_fxvw1_45", An = {
  layout: Ky,
  row: Gy,
  grid: Vy,
  gridRight: Yy,
  gridHeader: Xy,
  gridFooter: Zy,
  gridContents: Jy,
  gridBody: Qy
}, eb = "_footer_3be5w_1", tb = "_sticky_3be5w_9", ta = {
  footer: eb,
  sticky: tb
};
function nb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [ta.footer, e ? ta.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const rb = "_header_1tw8b_1", sb = "_sticky_1tw8b_9", na = {
  header: rb,
  sticky: sb
};
function ob({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [na.header, e ? na.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const ab = "_sidebar_175d5_1", lb = "_sticky_175d5_23", ib = "_left_175d5_41", cb = "_right_175d5_45", db = "_start_175d5_50", ub = "_end_175d5_54", fb = "_fullHeight_175d5_60", _b = "_collapsed_175d5_64", pb = "_responsive_175d5_72", hb = "_overlay_175d5_80", mb = "_mask_175d5_108", Gn = {
  sidebar: ab,
  sticky: lb,
  left: ib,
  right: cb,
  start: db,
  end: ub,
  fullHeight: fb,
  collapsed: _b,
  responsive: pb,
  overlay: hb,
  mask: mb
};
function gb({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: a = !1,
  sticky: i = !1,
  onClose: c,
  className: o,
  children: l,
  ...d
}) {
  return be(() => {
    if (!r || !t || c == null) return;
    const f = (u) => {
      u.key === "Escape" && c();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, c]), /* @__PURE__ */ D(ot, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${Gn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: c
      }
    ) : null,
    /* @__PURE__ */ s(
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
          o
        ].flat().filter(Boolean).join(" "),
        ...d,
        children: l
      }
    )
  ] });
}
function fO(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(ot, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], o = [], l = [], d = [];
  Xr.forEach(n, (g) => {
    if (!qt(g)) {
      c.push(g);
      return;
    }
    if (g.type === ob)
      a.push(g);
    else if (g.type === nb)
      i.push(g);
    else if (g.type === gb) {
      const m = g, y = m.props.position;
      d.push(m), (y === "right" || y === "end" ? l : o).push(m);
    } else
      c.push(g);
  });
  const f = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const g = u ? l : o;
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
          a.length > 0 && /* @__PURE__ */ s("div", { className: An.gridHeader, children: a }),
          /* @__PURE__ */ D("div", { className: An.gridContents, children: [
            g,
            /* @__PURE__ */ s("div", { className: An.gridBody, children: c })
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
        a,
        /* @__PURE__ */ D("div", { className: An.row, children: [
          o,
          c,
          l
        ] }),
        i
      ]
    }
  );
}
const yb = "_body_1ge00_4", bb = "_bare_1ge00_12", ra = {
  body: yb,
  bare: bb
};
function _O({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [ra.body, t ? null : ra.bare, n].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}
const xb = "_toggle_lxnk5_1", vb = {
  toggle: xb
};
function pO({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: a,
  ...i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [vb.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ s(Me, { icon: e, size: 20 })
    }
  );
}
const wb = "_track_14127_1", kb = "_bar_14127_31", Nb = "_primary_14127_39", Sb = "_success_14127_43", Ob = "_warning_14127_47", $b = "_danger_14127_51", Eb = "_indeterminate_14127_149", Tb = "_circular_14127_163", Cb = "_fill_14127_203", nn = {
  track: wb,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: kb,
  primary: Nb,
  success: Sb,
  warning: Ob,
  danger: $b,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Eb,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Tb,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Cb,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function hO({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: a = !1,
  variant: i = "linear",
  size: c = "md",
  className: o,
  visible: l = !0,
  ...d
}) {
  if (l === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const m = typeof c == "string", y = 2, h = 10.5, b = 2 * Math.PI * h, p = b * (a ? 0.75 : 1), _ = a ? 0 : b * (1 - u / 100), x = Vr(r);
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
          x ? nn[x] : null,
          m ? nn[`circular-${c}`] : null,
          a ? nn.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.track,
              cx: 12,
              cy: 12,
              r: h,
              strokeWidth: y
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: h,
              strokeWidth: y,
              strokeDasharray: `${p} ${b}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const g = Vr(r);
  return /* @__PURE__ */ s(
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
        o
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: nn.bar,
          style: a ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Ab = "_wrapper_tk30z_1", Db = {
  wrapper: Ab
}, Mb = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], ja = "dx-palette", Ib = "data-palette";
function zb(e, t) {
  const n = e === void 0 ? ja : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function Lb(e, t) {
  const n = e === void 0 ? ja : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function mO({
  themes: e = Mb,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: a = Ib,
  onChange: i,
  label: c = "Theme",
  placeholder: o = "Theme…",
  id: l,
  size: d = "md",
  className: f
}) {
  const [u, g] = q(void 0), m = t !== void 0, y = t ?? u ?? zb(r, e) ?? n, h = y ?? "", b = ne(void 0);
  be(() => {
    if (m) return;
    const _ = document.documentElement;
    if (y === void 0) {
      b.current !== void 0 && _.getAttribute(a) === b.current && (_.removeAttribute(a), b.current = void 0);
      return;
    }
    _.setAttribute(a, y), b.current = y;
  }, [y, a, m]);
  const p = (_) => {
    const x = _.target.value;
    m || (g(x), Lb(r, x)), i?.(x);
  };
  return /* @__PURE__ */ D("label", { className: [Db.wrapper, f].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ D(lr, { id: l, size: d, value: h, onChange: p, children: [
      y === void 0 && /* @__PURE__ */ s("option", { value: "", disabled: !0, children: o }),
      y !== void 0 && !e.includes(y) && /* @__PURE__ */ s("option", { value: y, children: y }),
      e.map((_) => /* @__PURE__ */ s("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function Rb(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function ao(e) {
  const [t, n] = q(() => Rb(e));
  return be(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const Pb = "_pressed_12x15_8", jb = {
  pressed: Pb
}, Bb = st(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: a,
    toggleSeverity: i = "primary",
    toggleShade: c = "darker",
    toggleContent: o,
    size: l = "md",
    className: d,
    onClick: f,
    children: u,
    variant: g,
    severity: m,
    shade: y,
    ...h
  }, b) {
    const [p, _] = q(n), x = t ?? p, N = (v) => {
      const C = !x;
      t === void 0 && _(C), r?.(C), f?.(v);
    };
    return /* @__PURE__ */ s(
      ln,
      {
        ...h,
        ref: b,
        variant: x && a ? a : g,
        severity: x ? i : m,
        shade: x ? c : y,
        size: l,
        "aria-pressed": x,
        className: [x ? jb.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: x && o !== void 0 ? o : u
      }
    );
  }
), Ba = "dx-theme";
function Fb(e) {
  const t = e === void 0 ? Ba : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Hb(e, t) {
  const n = e === void 0 ? Ba : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function gO({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: o
}) {
  const l = ao("(prefers-color-scheme: dark)"), [d, f] = q(void 0), u = e !== void 0, g = e ?? d ?? Fb(n) ?? t ?? "system", m = g === "system" ? l ? "dark" : "light" : g;
  return be(() => {
    if (!u) {
      if (g === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = g;
    }
  }, [g, u]), /* @__PURE__ */ s(
    Bb,
    {
      id: i,
      size: o,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: m === "dark",
      onChange: (h) => {
        const b = h ? "dark" : "light";
        u || (f(b), Hb(n, b)), r?.(b);
      },
      toggleContent: /* @__PURE__ */ s(Me, { icon: "light_mode", size: o ?? "md" }),
      children: /* @__PURE__ */ s(Me, { icon: "dark_mode", size: o ?? "md" })
    }
  );
}
const Fa = "dx-palette", Ha = "dx-theme", Gs = "data-palette", Vs = "data-theme", Ys = /* @__PURE__ */ new Set();
function Ub() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Gs), t = document.documentElement.getAttribute(Vs);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function lo(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Gs) : document.documentElement.setAttribute(Gs, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Vs) : document.documentElement.setAttribute(Vs, e.appearance));
}
function Ua(e, t) {
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
let oa = !1;
function kr() {
  const e = Ub();
  if (!oa) {
    oa = !0;
    const t = sa(Fa), n = sa(Ha), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && lo(a), a;
  }
  return e;
}
function qa() {
  const e = kr();
  Ys.forEach((t) => t({ ...e }));
}
function aa(e) {
  return Ys.add(e), () => {
    Ys.delete(e);
  };
}
function yO() {
  return kr().theme;
}
function qb(e) {
  const t = kr();
  t.theme !== e && (t.theme = e, lo(t), Ua(Fa, e), qa());
}
function bO() {
  return kr().appearance;
}
function Wb(e) {
  const t = kr();
  t.appearance !== e && (t.appearance = e, lo(t), Ua(Ha, e), qa());
}
function xO() {
  const [, e] = q(0);
  be(() => aa(() => e((n) => n + 1)), []);
  const t = kr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: qb,
    setAppearance: Wb,
    subscribe: aa
  };
}
function Kb(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (h, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), l = (h, b) => h + b | 0, d = (h, b) => h << b | h >>> 32 - b;
  let f = 1732584193, u = 4023233417, g = 2562383102, m = 271733878;
  for (let h = 0; h < r; h += 64) {
    const b = [];
    for (let v = 0; v < 16; v += 1)
      b.push(i.getUint32(h + v * 4, !0));
    let p = f, _ = u, x = g, N = m;
    for (let v = 0; v < 64; v += 1) {
      let C, S;
      v < 16 ? (C = _ & x | ~_ & N, S = v) : v < 32 ? (C = N & _ | ~N & x, S = (5 * v + 1) % 16) : v < 48 ? (C = _ ^ x ^ N, S = (3 * v + 5) % 16) : (C = x ^ (_ | ~N), S = 7 * v % 16), C = l(l(l(C, p), o[v]), b[S]), p = N, N = x, x = _, _ = l(_, d(C, c[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = l(f, p), u = l(u, _), g = l(g, x), m = l(m, N);
  }
  const y = (h) => {
    let b = "";
    for (let p = 0; p < 4; p += 1)
      b += `0${(h >>> p * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return y(f) + y(u) + y(g) + y(m);
}
const Gb = "_avatar_1mhfr_1", Vb = "_xs_1mhfr_12", Yb = "_sm_1mhfr_18", Xb = "_md_1mhfr_24", Zb = "_lg_1mhfr_30", Jb = "_xl_1mhfr_36", Qb = "_initials_1mhfr_42", e0 = "_image_1mhfr_57", t0 = "_status_1mhfr_64", n0 = "_online_1mhfr_84", r0 = "_offline_1mhfr_88", s0 = "_away_1mhfr_92", _r = {
  avatar: Gb,
  xs: Vb,
  sm: Yb,
  md: Xb,
  lg: Zb,
  xl: Jb,
  initials: Qb,
  image: e0,
  status: t0,
  online: n0,
  offline: r0,
  away: s0
}, o0 = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, ms = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function a0(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function l0(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ms[t % ms.length] ?? ms[0];
}
function vO({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: a = "g",
  alt: i,
  size: c = "md",
  status: o,
  className: l
}) {
  const d = Oe(() => e ? a0(e) : "?", [e]), f = Oe(() => e ? l0(e) : ms[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${Kb(N)}?d=${r}&s=${o0[c]}&r=${a}`;
  }, [t, n, r, a, c]), g = t ?? u, [m, y] = q(null), h = g != null && m !== g, b = h && i === "", p = i ?? e ?? "avatar", _ = o ? `${p}, ${o}` : p, x = h ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: _r.image,
        src: g,
        alt: b ? "" : o ? _ : p,
        onError: () => y(g ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
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
        o ? _r[o] : null,
        l
      ].filter(Boolean).join(" "),
      role: h ? void 0 : "img",
      "aria-label": h ? void 0 : _,
      children: [
        x,
        o && /* @__PURE__ */ s("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const i0 = "_root_zzwfz_1", c0 = "_left_zzwfz_6", d0 = "_right_zzwfz_7", u0 = "_panel_zzwfz_12", f0 = "_bottom_zzwfz_20", _0 = "_tabList_zzwfz_24", p0 = "_underline_zzwfz_53", h0 = "_pills_zzwfz_72", m0 = "_tab_zzwfz_24", g0 = "_active_zzwfz_113", y0 = "_disabled_zzwfz_139", Dn = {
  root: i0,
  left: c0,
  right: d0,
  panel: u0,
  bottom: f0,
  tabList: _0,
  underline: p0,
  pills: h0,
  tab: m0,
  active: g0,
  disabled: y0
};
function wO({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c
}) {
  const o = at(), l = ne(null), [d, f] = q(
    n ?? e[0]?.key ?? ""
  ), u = t ?? d, g = i === "left" || i === "right", m = (b) => {
    f(b), r?.(b);
  }, y = (b) => {
    const p = e.filter((N) => !N.disabled), _ = p.findIndex((N) => N.key === u);
    let x = -1;
    b.key === "ArrowRight" || g && b.key === "ArrowDown" ? x = (_ + 1) % p.length : b.key === "ArrowLeft" || g && b.key === "ArrowUp" ? x = (_ - 1 + p.length) % p.length : b.key === "Home" ? x = 0 : b.key === "End" && (x = p.length - 1), x >= 0 && (b.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[x]?.key ?? "")}"]`
    )?.focus(), m(p[x]?.key ?? ""));
  }, h = e.find((b) => b.key === u);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Dn.root, Dn[i], c].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Dn.tabList, Dn[a], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: y,
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
                  onClick: () => m(b.key),
                  children: b.label
                },
                b.key
              );
            })
          }
        ),
        h && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${h.key}`,
            "aria-labelledby": `${o}-tab-${h.key}`,
            className: Dn.panel,
            children: h.content
          }
        )
      ]
    }
  );
}
const b0 = "_root_1l1j2_1", x0 = "_item_1l1j2_9", v0 = "_heading_1l1j2_13", w0 = "_trigger_1l1j2_17", k0 = "_disabled_1l1j2_34", N0 = "_title_1l1j2_48", S0 = "_chevron_1l1j2_52", O0 = "_open_1l1j2_59", $0 = "_content_1l1j2_63", Mn = {
  root: b0,
  item: x0,
  heading: v0,
  trigger: w0,
  disabled: k0,
  title: N0,
  chevron: S0,
  open: O0,
  content: $0
};
function kO({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const c = at(), [o, l] = q(
    r ?? []
  ), d = n ?? o, f = (u) => {
    const g = d.includes(u) ? d.filter((m) => m !== u) : t ? [...d, u] : [u];
    l(g), a?.(g);
  };
  return /* @__PURE__ */ s("div", { className: [Mn.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const g = d.includes(u.key), m = `${c}-panel-${u.key}`, y = `${c}-trigger-${u.key}`;
    return /* @__PURE__ */ D("div", { className: Mn.item, children: [
      /* @__PURE__ */ s("h3", { className: Mn.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: y,
          "aria-expanded": g,
          "aria-controls": m,
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
                className: [Mn.chevron, g ? Mn.open : null].filter(Boolean).join(" "),
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
          id: m,
          role: "region",
          "aria-labelledby": y,
          hidden: !g,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const E0 = "_textarea_l7fsl_1", T0 = "_invalid_l7fsl_27", C0 = "_xs_l7fsl_34", A0 = "_sm_l7fsl_39", D0 = "_md_l7fsl_44", M0 = "_lg_l7fsl_49", I0 = "_xl_l7fsl_54", ds = {
  textarea: E0,
  invalid: T0,
  xs: C0,
  sm: A0,
  md: D0,
  lg: M0,
  xl: I0,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, NO = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: a, ...i }, c) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: c,
        "data-size": t,
        className: [
          ds.textarea,
          ds[t],
          ds[`resize-${n}`],
          r ? ds.invalid : null,
          a
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), z0 = "_root_xyp2i_1", L0 = "_trigger_xyp2i_9", R0 = "_invalid_xyp2i_40", P0 = "_placeholder_xyp2i_47", j0 = "_label_xyp2i_54", B0 = "_chevron_xyp2i_60", F0 = "_chevronOpen_xyp2i_70", H0 = "_menu_xyp2i_74", U0 = "_option_xyp2i_89", q0 = "_disabled_xyp2i_100", W0 = "_active_xyp2i_104", K0 = "_selected_xyp2i_105", G0 = "_header_xyp2i_115", V0 = "_xs_xyp2i_122", Y0 = "_sm_xyp2i_128", X0 = "_md_xyp2i_134", Z0 = "_lg_xyp2i_140", J0 = "_xl_xyp2i_146", Ht = {
  root: z0,
  trigger: L0,
  invalid: R0,
  placeholder: P0,
  label: j0,
  chevron: B0,
  chevronOpen: F0,
  menu: H0,
  option: U0,
  disabled: q0,
  active: W0,
  selected: K0,
  header: G0,
  xs: V0,
  sm: Y0,
  md: X0,
  lg: Z0,
  xl: J0
}, Q0 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function SO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: a = "Select…",
  size: i = "md",
  invalid: c = !1,
  disabled: o = !1,
  className: l,
  ...d
}) {
  const f = at(), u = `${f}-listbox`, g = ne(null), m = ne(null), [y, h] = q(
    n
  ), [b, p] = q(!1), _ = t ?? y, x = e.map(
    (w, k) => w.label === "" || w.disabled ? -1 : k
  ).filter((w) => w >= 0), N = e.findIndex(
    (w) => w.value === _
  ), [v, C] = q(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), S = B(() => {
    if (o) return;
    const w = N >= 0 && x.includes(N) ? N : x[0];
    C(w ?? -1), p(!0);
  }, [o, N, x]), $ = B(() => {
    p(!1), m.current?.focus();
  }, []);
  be(() => {
    if (!b) return;
    const w = (k) => {
      g.current && !g.current.contains(k.target) && p(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [b]);
  const E = (w) => {
    h(w), r?.(w), p(!1), m.current?.focus();
  }, I = (w) => {
    if (x.length === 0) return;
    const k = x.includes(v) ? x.indexOf(v) : 0, A = x[(k + w + x.length) % x.length];
    A != null && C(A);
  }, M = (w) => {
    if (!b) {
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
        w.preventDefault(), x[0] != null && C(x[0]);
        break;
      case "End":
        w.preventDefault(), x[x.length - 1] != null && C(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        w.preventDefault(), v >= 0 && e[v] && x.includes(v) && E(e[v]?.value ?? "");
        break;
      case "Escape":
        w.preventDefault(), $();
        break;
      case "Tab":
        p(!1);
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
            "aria-expanded": b,
            "aria-controls": u,
            "aria-invalid": c || void 0,
            disabled: o,
            className: [
              Ht.trigger,
              Ht[i],
              b ? Ht.open : null,
              c ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => b ? p(!1) : S(),
            ...d,
            children: [
              /* @__PURE__ */ s("span", { className: T ? Ht.label : Ht.placeholder, children: T ? T.label : a }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [Ht.chevron, b ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Q0 },
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
const ex = "_root_1ma8a_1", tx = "_wrap_1ma8a_9", nx = "_input_1ma8a_26", rx = "_invalid_1ma8a_31", sx = "_clear_1ma8a_58", ox = "_menu_1ma8a_83", ax = "_option_1ma8a_98", lx = "_disabled_1ma8a_109", ix = "_active_1ma8a_113", cx = "_empty_1ma8a_123", dx = "_xs_1ma8a_129", ux = "_sm_1ma8a_136", fx = "_md_1ma8a_143", _x = "_lg_1ma8a_150", px = "_xl_1ma8a_157", dn = {
  root: ex,
  wrap: tx,
  input: nx,
  invalid: rx,
  clear: sx,
  menu: ox,
  option: ax,
  disabled: lx,
  active: ix,
  empty: cx,
  xs: dx,
  sm: ux,
  md: fx,
  lg: _x,
  xl: px
}, hx = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function OO({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: c = "md",
  invalid: o = !1,
  disabled: l = !1,
  filter: d = hx,
  className: f,
  ...u
}) {
  const g = at(), m = `${g}-listbox`, y = ne(null), h = ne(null), [b, p] = q(n), [_, x] = q(!1), N = t ?? b, v = Oe(
    () => N.trim() === "" ? [...e] : e.filter((z) => d(z, N)),
    [e, N, d]
  ), C = v.map((z, j) => z.disabled ? -1 : j).filter((z) => z >= 0), [S, $] = q(-1), E = (z) => {
    p(z), r?.(z);
  }, I = (z) => {
    E(z.label), a?.(z.value, z), x(!1);
  }, M = (z) => {
    if (C.length === 0) return;
    const j = C.includes(S) ? C.indexOf(S) : z === 1 ? -1 : 0, F = C[(j + z + C.length) % C.length];
    F != null && $(F);
  }, T = (z) => {
    l || (E(z.target.value), x(!0), $(-1));
  }, w = () => {
    l || N !== "" && x(!0);
  }, k = (z) => {
    y.current && !y.current.contains(z.relatedTarget) && x(!1);
  }, A = (z) => {
    if (!l)
      switch (z.key) {
        case "ArrowDown":
          z.preventDefault(), _ ? M(1) : (x(!0), $(C[0] ?? -1));
          break;
        case "ArrowUp":
          z.preventDefault(), _ && M(-1);
          break;
        case "Enter":
          z.preventDefault(), _ && S >= 0 && v[S] && I(v[S]);
          break;
        case "Escape":
          z.preventDefault(), x(!1);
          break;
        case "Tab":
          _ && S >= 0 && v[S] && I(v[S]), x(!1);
          break;
      }
  }, R = () => {
    E(""), $(-1), x(!0), h.current?.focus();
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
            className: [dn.wrap, dn[c], o ? dn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: h,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": m,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && S >= 0 ? `${g}-option-${S}` : void 0,
                  "aria-invalid": o || void 0,
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
              N !== "" && !l && /* @__PURE__ */ s(
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
          /* @__PURE__ */ s("div", { id: m, className: dn.menu, children: /* @__PURE__ */ s("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ s("div", { id: m, role: "listbox", className: dn.menu, children: v.map((z, j) => /* @__PURE__ */ s(
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
const mx = "_box_muvqe_1", gx = "_option_muvqe_12", yx = "_disabled_muvqe_23", bx = "_selected_muvqe_27", xx = "_active_muvqe_33", Pr = {
  box: mx,
  option: gx,
  disabled: yx,
  selected: bx,
  active: xx
};
function $O({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...o
}) {
  const l = at(), [d, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? d : Array.isArray(t) ? t : [t], g = e.findIndex((v) => !v.disabled), [m, y] = q(
    () => g >= 0 ? g : 0
  ), h = ne(""), b = ne(null), p = (v) => {
    f(v), a?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), x = (v) => {
    const C = e[v];
    if (!(!C || C.disabled))
      if (y(v), r) {
        const S = u.includes(C.value) ? u.filter(($) => $ !== C.value) : [...u, C.value];
        p(S);
      } else
        p([C.value]);
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
      v.preventDefault(), x(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const $ = (h.current + v.key).toLowerCase();
      h.current = $, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        h.current = "";
      }, 500);
      const E = [..._, ..._], I = _.indexOf(C) + 1, M = E.slice(I).find((T) => e[T]?.label.toLowerCase().startsWith($));
      M != null && y(M);
      return;
    }
    S >= 0 && (v.preventDefault(), y(S), r || p([e[S]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[m] ? `${l}-option-${m}` : void 0,
      style: c,
      className: [Pr.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...o,
      children: e.map((v, C) => {
        const S = u.includes(v.value), $ = C === m;
        return /* @__PURE__ */ s(
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
            onClick: () => x(C),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const vx = "_group_oinj7_1", wx = "_legend_oinj7_8", kx = "_list_oinj7_16", Nx = "_item_oinj7_25", Sx = "_disabled_oinj7_32", Ox = "_label_oinj7_37", $x = "_checkbox_oinj7_48", Qn = {
  group: vx,
  legend: wx,
  list: kx,
  item: Nx,
  disabled: Sx,
  label: Ox,
  checkbox: $x
};
function EO({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: a,
  name: i,
  className: c
}) {
  const [o, l] = q(() => [
    ...n
  ]), d = t ?? o, f = (u, g) => {
    const m = g ? [...d, u] : d.filter((y) => y !== u);
    l(m), r?.(m);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Qn.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ s("legend", { className: Qn.legend, children: a }),
    /* @__PURE__ */ s("ul", { className: Qn.list, children: e.map((u) => {
      const g = d.includes(u.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Qn.item, u.disabled ? Qn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Qn.label, children: [
            /* @__PURE__ */ s(
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
            /* @__PURE__ */ s("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const Ex = "_group_46668_1", Tx = "_legend_46668_8", Cx = "_list_46668_16", Ax = "_item_46668_25", Dx = "_disabled_46668_32", Mx = "_label_46668_37", Ix = "_radio_46668_48", er = {
  group: Ex,
  legend: Tx,
  list: Cx,
  item: Ax,
  disabled: Dx,
  label: Mx,
  radio: Ix
};
function TO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: a,
  name: i,
  className: c
}) {
  const [o, l] = q(
    n
  ), d = t ?? o, f = (u) => {
    l(u), r?.(u);
  };
  return /* @__PURE__ */ D("fieldset", { className: [er.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ s("legend", { className: er.legend, children: a }),
    /* @__PURE__ */ s("ul", { className: er.list, children: e.map((u) => {
      const g = u.value === d;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [er.item, u.disabled ? er.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: er.label, children: [
            /* @__PURE__ */ s(
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
            /* @__PURE__ */ s("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const zx = "_bar_9zyxn_1", Lx = "_vertical_9zyxn_12", Rx = "_option_9zyxn_17", Px = "_selected_9zyxn_40", jx = "_sm_9zyxn_56", Bx = "_md_9zyxn_62", Fx = "_lg_9zyxn_68", pr = {
  bar: zx,
  vertical: Lx,
  option: Rx,
  selected: Px,
  sm: jx,
  md: Bx,
  lg: Fx
};
function la(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function CO(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: a,
    orientation: i = "horizontal",
    onChange: c,
    size: o = "md",
    className: l,
    ...d
  } = e, f = a ?? !1, [u, g] = q(r ?? (f ? [] : t[0]?.value)), m = n ?? u, y = a === !0 || a === void 0 && Array.isArray(m), h = (p) => {
    if (!y) {
      g(p), c?.(p);
      return;
    }
    const _ = la(m), x = _.includes(p) ? _.filter((N) => N !== p) : [..._, p];
    g(x), c?.(x);
  }, b = (p) => y ? la(m).includes(p) : m === p;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        pr.bar,
        pr[o],
        i === "vertical" ? pr.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...d,
      children: t.map((p) => {
        const _ = b(p.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: p.disabled,
            className: [
              pr.option,
              _ ? pr.selected : null,
              p.disabled ? pr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => h(p.value),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const Hx = "_root_11hdr_1", Ux = "_action_11hdr_10", qx = "_caret_11hdr_15", Wx = "_sm_11hdr_49", Kx = "_md_11hdr_53", Gx = "_lg_11hdr_57", Vx = "_fullWidth_11hdr_62", Yx = "_menu_11hdr_70", Xx = "_item_11hdr_83", Zx = "_itemIcon_11hdr_105", Jx = "_disabled_11hdr_110", Qx = "_active_11hdr_114", ev = "_danger_11hdr_123", bn = {
  root: Hx,
  action: Ux,
  caret: qx,
  sm: Wx,
  md: Kx,
  lg: Gx,
  fullWidth: Vx,
  menu: Yx,
  item: Xx,
  itemIcon: Zx,
  disabled: Jx,
  active: Qx,
  danger: ev
}, AO = st(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: a = "primary",
    variant: i = "filled",
    shade: c = "default",
    size: o = "md",
    loading: l = !1,
    visible: d = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: g,
    "aria-label": m,
    openAriaLabel: y = "More actions",
    ...h
  }, b) {
    const _ = `${at()}-menu`, x = ne(null), N = ne(null), v = ne([]), [C, S] = q(!1), [$, E] = q(-1), I = u || l, M = Oe(
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
        x.current && !x.current.contains(X.target) && S(!1);
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
          x.current = F, typeof b == "function" ? b(F) : b && (b.current = F);
        },
        className: [
          bn.root,
          bn[o],
          f ? bn.fullWidth : null,
          g
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            ln,
            {
              className: bn.action,
              variant: i,
              severity: a,
              shade: c,
              size: o,
              loading: l,
              disabled: u,
              "aria-label": m,
              onClick: () => {
                C && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ s(
            ln,
            {
              ref: N,
              className: bn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: o,
              disabled: I,
              "aria-haspopup": "menu",
              "aria-expanded": C,
              "aria-controls": _,
              "aria-label": y,
              onClick: () => C ? S(!1) : T(),
              onKeyDown: (F) => {
                !C && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), T());
              },
              children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          C && /* @__PURE__ */ s(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": y,
              className: bn.menu,
              onKeyDown: j,
              ...h,
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
), tv = "_mask_rcv90_1", nv = "_invalid_rcv90_31", rv = "_xs_rcv90_38", sv = "_sm_rcv90_44", ov = "_md_rcv90_50", av = "_lg_rcv90_56", lv = "_xl_rcv90_62", js = {
  mask: tv,
  invalid: nv,
  xs: rv,
  sm: sv,
  md: ov,
  lg: av,
  xl: lv
};
function ia(e, t) {
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
const DO = st(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: a,
  defaultValue: i = "",
  onChange: c,
  className: o,
  onKeyDown: l,
  ...d
}, f) {
  const [u, g] = q(i ?? ""), m = a !== void 0, y = m ? a ?? "" : u, h = (_) => {
    const x = ia(_, r);
    return m || g(x), c?.(x), x;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: y,
      onChange: (_) => {
        h(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const x = _.currentTarget.selectionStart ?? y.length, N = y[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const v = y.replace(/\D/g, "");
            h(ia(v.slice(0, -1), r));
          }
        }
        l?.(_);
      },
      className: [
        js.mask,
        js[t],
        n ? js.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), iv = "_wrapper_12jdf_1", cv = "_input_12jdf_8", dv = "_invalid_12jdf_38", uv = "_button_12jdf_45", fv = "_up_12jdf_77", _v = "_down_12jdf_82", pv = "_xs_12jdf_87", hv = "_sm_12jdf_93", mv = "_md_12jdf_99", gv = "_lg_12jdf_105", yv = "_xl_12jdf_111", Vn = {
  wrapper: iv,
  input: cv,
  invalid: dv,
  button: uv,
  up: fv,
  down: _v,
  xs: pv,
  sm: hv,
  md: mv,
  lg: gv,
  xl: yv
};
function Xs(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function bv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Wa(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function xv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function vv(e, t, n, r, a) {
  const c = Xs(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = c + t * a : t > 0 ? o = n + Math.ceil((c - n + 1e-9) / a) * a : o = n + Math.floor((c - n - 1e-9) / a) * a, Wa(o, n, r);
}
const MO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    value: i,
    defaultValue: c,
    onChange: o,
    min: l,
    max: d,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: g = "Decrement",
    onBlur: m,
    onKeyDown: y,
    ...h
  }, b) {
    const [p, _] = q(
      c != null ? String(c) : ""
    ), x = i !== void 0, N = x ? i == null ? "" : String(i) : p, v = (M) => {
      x || _(M), o?.(Xs(M));
    }, C = (M) => {
      x || _(String(M)), o?.(M);
    }, S = (M) => {
      a || C(vv(N, M, l, d, f));
    }, $ = (M) => {
      v(bv(M.target.value));
    }, E = (M) => {
      M.key === "ArrowUp" ? (M.preventDefault(), S(1)) : M.key === "ArrowDown" && (M.preventDefault(), S(-1)), y?.(M);
    }, I = (M) => {
      const T = Xs(N);
      T === null ? (x || _(""), o?.(null)) : C(Wa(xv(T, l, f), l, d)), m?.(M);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: b,
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
            ...h
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.up].join(" "),
            "aria-label": u,
            disabled: a,
            onClick: () => S(1),
            children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Vn.button, Vn.down].join(" "),
            "aria-label": g,
            disabled: a,
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
}, wv = [
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
function Zs(e) {
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
function kv({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function Nv({ r: e, g: t, b: n }) {
  const r = e / 255, a = t / 255, i = n / 255, c = Math.max(r, a, i), o = Math.min(r, a, i), l = c - o;
  let d = 0;
  return l !== 0 && (c === r ? d = (a - i) / l % 6 : c === a ? d = (i - r) / l + 2 : d = (r - a) / l + 4, d *= 60, d < 0 && (d += 360)), {
    h: d,
    s: c === 0 ? 0 : l / c,
    v: c
  };
}
function hr({ h: e, s: t, v: n }) {
  const r = n * t, a = e / 60, i = r * (1 - Math.abs(a % 2 - 1));
  let c = 0, o = 0, l = 0;
  a < 1 ? (c = r, o = i) : a < 2 ? (c = i, o = r) : a < 3 ? (o = r, l = i) : a < 4 ? (o = i, l = r) : a < 5 ? (c = i, l = r) : (c = r, l = i);
  const d = n - r;
  return {
    r: Math.round((c + d) * 255),
    g: Math.round((o + d) * 255),
    b: Math.round((l + d) * 255),
    a: 1
  };
}
function Sv(e) {
  const t = Zs(e);
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
function ca({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const IO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = wv,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: o = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: f = "md",
  tabIndex: u = 0,
  className: g,
  onChange: m,
  onValueChange: y,
  onOpen: h,
  onClose: b
}) => {
  const p = ne(null), _ = ne(null), x = ne(null), N = ne(null), v = ne(null), C = at(), S = ne(null), $ = Oe(
    () => Sv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = q(!1), [M, T] = q(null), w = M ?? $, k = Oe(() => Nv(w), [w]), A = B(
    (Z) => {
      const L = ca(Z);
      m?.(L), y?.(L);
    },
    [m, y]
  ), R = B(
    (Z, L) => {
      T(Z), L && !i && A(Z);
    },
    [i, A]
  ), z = B(() => {
    I(!1), T(null), b?.(), _.current?.focus();
  }, [b]), j = B(() => {
    o || (T($), I(!0), h?.());
  }, [o, $, h]), F = B(() => {
    E ? z() : j();
  }, [E, z, j]), X = B(
    (Z, L) => {
      const Y = x.current;
      if (!Y) return k;
      const Q = Y.getBoundingClientRect(), ge = on((Z - Q.left) / Q.width, 0, 1), le = on(1 - (L - Q.top) / Q.height, 0, 1);
      return { h: k.h, s: ge, v: le };
    },
    [k]
  ), ie = B(
    (Z, L) => {
      if (!L) return 0;
      const Y = L.getBoundingClientRect();
      return on((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "sat";
    const L = X(Z.clientX, Z.clientY);
    R({ ...hr(L), a: w.a }, !0);
  }, we = (Z) => {
    if (S.current !== "sat") return;
    Z.preventDefault();
    const L = X(Z.clientX, Z.clientY);
    R({ ...hr(L), a: w.a }, !0);
  }, ae = (Z) => {
    if (o) return;
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
    if (o) return;
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
        s: on(k.s + Z, 0, 1),
        v: on(k.v + L, 0, 1)
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
      R({ ...w, a: on(w.a + Z, 0, 1) }, !0);
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
      const le = Zs(L);
      le && R({ ...le, a: w.a }, !0);
      return;
    }
    const Y = L.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const le = Y.includes(".") ? on(Q, 0, 1) : on(Q / 100, 0, 1);
      R({ ...w, a: le }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    R(
      { ...w, [Z]: on(Q, 0, ge[Z]) },
      !0
    );
  }, Ae = () => {
    M && (A(M), T(null), I(!1), b?.(), _.current?.focus());
  };
  be(() => {
    if (!E) return;
    const Z = (L) => {
      p.current && !p.current.contains(L.target) && z();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [E, z]), be(() => {
    if (!E) return;
    const Z = (L) => {
      L.key === "Escape" && z();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [E, z]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = ca(w), Ge = kv(w), Je = { x: k.s * 100, y: (1 - k.v) * 100 }, At = k.h / 360 * 100, lt = w.a * 100, bt = /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: x,
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
        onPointerDown: ae,
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
        onPointerMove: me,
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
            onChange: (Z) => re("hex", Z.target.value)
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
            onChange: (Z) => re("r", Z.target.value)
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
            onChange: (Z) => re("g", Z.target.value)
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
            onChange: (Z) => re("b", Z.target.value)
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
            onChange: (Z) => re("a", Z.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ s("div", { className: Re["dx-colorpicker-palette"], children: a.map((Z) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const L = Zs(Z);
          i ? R({ ...L, a: w.a }, !1) : (T(null), A({ ...L, a: w.a }), I(!1), b?.(), _.current?.focus());
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
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && E && (Z.preventDefault(), z());
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
              d && /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-text"], children: d }),
              c && /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ s(
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
}, Ov = 42;
function an(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${an(e.month)}-${an(e.day)}`;
}
function $v(e, t) {
  const n = Yt(e);
  return t ? `${n} ${an(e.hour)}:${an(e.minute)}:${an(e.second)}` : n;
}
function Js(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), a = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, c = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || a < 1 || a > 31) return null;
  const l = new Date(n, r - 1, a, i, c, o);
  return l.getFullYear() !== n || l.getMonth() !== r - 1 || l.getDate() !== a ? null : { year: n, month: r, day: a, hour: i, minute: c, second: o };
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
function us(e, t) {
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
function da(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ua = {
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
}, Ev = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Tv = ["y", "M", "d", "H", "m", "s"];
function fs(e, t, n) {
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
    for (const l of Ev)
      if (t.startsWith(l, i)) {
        a += ua[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const o = t[i];
    if (Tv.includes(o)) {
      a += ua[o](e, r, n), i += 1;
      continue;
    }
    a += o, i += 1;
  }
  return a;
}
const Cv = [
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
function Av(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let o = null;
    for (const l of Cv)
      if (t.startsWith(l, a)) {
        o = l;
        break;
      }
    if (o) {
      const l = e.slice(r, r + o.length);
      if (!/^\d+$/.test(l)) return null;
      const d = Number(l);
      switch (o) {
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
      r += o.length, a += o.length;
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
  const n = Js(e);
  return n || Av(e, t);
}
function Dv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Mv = ["hour", "minute", "second"];
function _s(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const zO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    format: i = "yyyy-MM-dd",
    min: c,
    max: o,
    showTime: l = !1,
    showButton: d = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: g,
    locale: m = "en-US",
    onChange: y,
    onValueChange: h,
    onOpen: b,
    onClose: p,
    disabled: _,
    readOnly: x,
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
    const k = ne(null), A = ne(null), R = ne(null), z = ne(null), j = at(), F = r !== void 0, [X, ie] = q(
      () => a != null ? fs(
        jr(a, i) ?? Yn(),
        i,
        m
      ) : ""
    ), [te, we] = q(!1), [ae, _e] = q(null), [K, me] = q(() => {
      const V = r !== void 0 ? r ?? "" : a ?? "";
      if (V) {
        const he = jr(V, i);
        if (he) return he;
      }
      return Yn();
    }), ue = Oe(() => c ? Js(c) : null, [c]), xe = Oe(() => o ? Js(o) : null, [o]), pe = Oe(
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
          const Ve = In(V, he);
          if (!G(Ve)) return Ve;
          const Ye = In(V, -he);
          if (!G(Ye)) return Ye;
        }
        return V;
      },
      [G]
    ), re = B(
      (V) => {
        F || ie(V ? fs(V, i, m) : "");
        const he = V ? $v(V, l) : "";
        y?.(he), h?.(he);
      },
      [F, i, m, l, y, h]
    ), Ae = B(
      (V) => {
        A.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), p?.(), u || R.current?.focus();
    }, [u, p]), Fe = B(() => {
      if (_) return;
      const V = De ?? Yn();
      _e(V), me($e(V)), we(!0), b?.();
    }, [_, De, $e, b]), Ge = B(() => {
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
    ), lt = B(
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
      re(V ? Dv(V, ue, xe) : null);
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
          he = In(K, -1), V.preventDefault();
          break;
        case "ArrowRight":
          he = In(K, 1), V.preventDefault();
          break;
        case "ArrowUp":
          he = In(K, -7), V.preventDefault();
          break;
        case "ArrowDown":
          he = In(K, 7), V.preventDefault();
          break;
        case "Home":
          he = In(K, -da(K)), V.preventDefault();
          break;
        case "End":
          he = In(K, 6 - da(K)), V.preventDefault();
          break;
        case "PageUp":
          he = us(K, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          he = us(K, V.shiftKey ? 12 : 1), V.preventDefault();
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
      F || ie(""), y?.(""), h?.(""), A.current?.focus();
    }, je = te && ae ? fs(ae, i, m) : F ? r ? fs(
      jr(r, i) ?? Yn(),
      i,
      m
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: K.year, month: K.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), se = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < Ov; V += 1)
      Le.push(In(se, V - Xt));
    const Nt = ae ? Yt(ae) : De ? Yt(De) : null, Rt = Yt(Yn()), xt = `${nt.year}-${an(nt.month)}`, Ie = Oe(
      () => new Intl.DateTimeFormat(m, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [m]
    ), We = new Intl.DateTimeFormat(m, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, he) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + he)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], it = /* @__PURE__ */ D(
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
                  const V = $e(us(K, -1));
                  me(V), setTimeout(() => Je(V), 0);
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
                  const V = $e(us(K, 1));
                  me(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ s(Me, { icon: "chevron_right", size: 16 })
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
                /* @__PURE__ */ s("div", { role: "row", className: Ue["dx-datepicker-week-row"], children: vt.map((V) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "columnheader",
                    className: Ue["dx-datepicker-weekday"],
                    children: V
                  },
                  V
                )) }),
                Array.from({ length: 6 }, (V, he) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: Le.slice(he * 7, he * 7 + 7).map((Ve) => {
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
            Mv.map((V) => /* @__PURE__ */ D("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-time-label"], children: _s(V) }),
              /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _s(V),
                    value: an(
                      (ae ?? De ?? Yn())[V]
                    ),
                    onChange: (he) => bt(V, he.target.value),
                    onKeyDown: (he) => {
                      he.key === "ArrowUp" ? (he.preventDefault(), lt(V, 1)) : he.key === "ArrowDown" ? (he.preventDefault(), lt(V, -1)) : he.key === "Enter" && (he.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_s(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_s(V).toLowerCase()}`,
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
          E
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: x,
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
            f && !_ && Ze && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  d ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
                onClick: Ee,
                children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ s(
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
              children: it
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
}, LO = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: a = "Rating",
  clearLabel: i = "Clear",
  rateLabel: c = "Rate",
  tabIndex: o = 0,
  className: l,
  onChange: d,
  onValueChange: f
}) => {
  const [u, g] = q(e), m = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), y = B(
    (_) => {
      d?.(_), f?.(_);
    },
    [d, f]
  ), h = B(
    (_) => {
      n || r || (y(_), g(_));
    },
    [n, r, y]
  ), b = (_) => {
    if (n || r) return;
    const x = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), h(m(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), h(m(x - 1));
        break;
      case "Home":
        _.preventDefault(), h(1);
        break;
      case "End":
        _.preventDefault(), h(t);
        break;
    }
  }, p = Array.from({ length: t }, (_, x) => x + 1);
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
      onKeyDown: b,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Xn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => h(0),
            children: /* @__PURE__ */ s(Me, { icon: "block", size: 16 })
          }
        ),
        p.map((_) => {
          const x = _ <= e, N = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${c} ${_}`,
              tabIndex: N ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                x ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => h(_),
              onFocus: () => g(_),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: Xn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s(Me, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: Xn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "star", size: 20 }) })
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
const RO = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: a = 100,
  step: i = 1,
  range: c = !1,
  orientation: o = "horizontal",
  disabled: l = !1,
  label: d = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: g = 0,
  className: m,
  onChange: y,
  onInput: h,
  onValueChange: b,
  onInputChange: p
}) => {
  const _ = ne(null), x = ne(
    null
  ), [N, v] = q(null), C = N ?? e, S = Oe(
    () => Sn(C, r, a),
    [C, r, a]
  ), $ = Oe(
    () => Sn(c ? t : S, r, a),
    [c, t, S, r, a]
  ), E = Oe(
    () => Sn(c ? Math.max(n, $) : S, r, a),
    [c, n, $, S, r, a]
  ), I = B(
    (K) => {
      const me = a - r;
      return me <= 0 ? 0 : (Sn(K, r, a) - r) / me * 100;
    },
    [r, a]
  ), M = B(
    (K, me) => {
      const ue = _.current;
      if (!ue) return r;
      const xe = ue.getBoundingClientRect();
      let pe;
      o === "vertical" ? pe = 1 - (me - xe.top) / xe.height : pe = (K - xe.left) / xe.width;
      const De = r + Sn(pe, 0, 1) * (a - r);
      return i > 0 ? Sn(Math.round(De / i) * i, r, a) : Sn(De, r, a);
    },
    [r, a, i, o]
  ), T = B(
    (K) => {
      typeof K == "number" && v(K), y?.(K), b?.(K);
    },
    [y, b]
  ), w = B(
    (K) => {
      typeof K == "number" && v(K), h?.(K), p?.(K);
    },
    [h, p]
  ), k = B(
    (K, me, ue) => {
      const xe = M(me, ue);
      let pe;
      c ? K === "min" ? pe = { min: Math.min(xe, E), max: E } : pe = { min: $, max: Math.max(xe, $) } : pe = xe, w(pe), x.current === null && T(pe);
    },
    [c, M, $, E, w, T]
  ), A = B(
    (K, me) => {
      const ue = (i > 0 ? i : 1) * me;
      let xe;
      c ? K === "min" ? xe = {
        min: Sn($ + ue, r, E),
        max: E
      } : xe = {
        min: $,
        max: Sn(E + ue, $, a)
      } : xe = Sn(S + ue, r, a), T(xe);
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
    l || (me.preventDefault(), me.currentTarget.focus(), typeof me.currentTarget.setPointerCapture == "function" && me.currentTarget.setPointerCapture(me.pointerId), x.current = { key: K, pointerId: me.pointerId }, k(K, me.clientX, me.clientY));
  }, j = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (K.preventDefault(), k(x.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (x.current = null, K.preventDefault(), T(c ? { min: $, max: E } : S));
  }, [X, ie] = q(null), te = I($), we = I(E), ae = c ? te : 0, _e = we;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        tr["dx-slider"],
        o === "vertical" ? tr["dx-slider-vertical"] : null,
        l ? tr["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: _, className: tr["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: tr["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${ae}%`, height: `${_e - ae}%` } : { left: `${ae}%`, width: `${_e - ae}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round($),
            "aria-orientation": o,
            "aria-label": c ? f : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && X === "max" ? -1 : g,
            className: tr["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (K) => R("min", K),
            onPointerDown: (K) => z("min", K),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("min")
          }
        ),
        c && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(E),
            "aria-orientation": o,
            "aria-label": u,
            "aria-disabled": l || void 0,
            tabIndex: l || X === "min" ? -1 : g,
            className: tr["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
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
}, Iv = "-10675199.02:48:05.4775808", zv = "10675199.02:48:05.4775808", Rn = 86400, Pn = 3600, xn = 60, Bs = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, fa = {
  days: Rn,
  hours: Pn,
  minutes: xn,
  seconds: 1
}, Lv = {
  day: Rn,
  hour: Pn,
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
    const o = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, d = a[3] != null ? Number(a[3]) : 0, f = a[4] != null ? Number(a[4]) : 0;
    return n * (o * Rn + l * Pn + d * xn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, o = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return o > 23 || l > 59 || d > 59 ? null : n * (c * Rn + o * Pn + l * xn + d + f);
  }
  return null;
}
function Rv(e) {
  return e.days * Rn + e.hours * Pn + e.minutes * xn + e.seconds;
}
function _a(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Rn);
  t %= Rn;
  const r = Math.floor(t / Pn);
  t %= Pn;
  const a = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function Qs(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / xn) * xn : t === "hour" ? r = Math.round(r / Pn) * Pn : t === "day" && (r = Math.round(r / Rn) * Rn);
  let a = Math.round(r % xn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / xn) + i, o = c % 60, l = Math.floor(c / 60), d = l % 24, f = Math.floor(l / 24), u = n ? "-" : "", g = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${g}${mr(d)}`;
    case "minute":
      return `${u}${g}${mr(d)}:${mr(o)}`;
    default:
      return `${u}${g}${mr(d)}:${mr(o)}:${mr(a)}`;
  }
}
function pa(e, t = "second") {
  const n = Kr(e);
  return n === null ? "" : Qs(n, t);
}
function Fs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const PO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Iv,
    max: c = zv,
    step: o = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: g = !0,
    allowClear: m = !1,
    inline: y = !1,
    onChange: h,
    onValueChange: b,
    onOpen: p,
    onClose: _,
    disabled: x,
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
    const k = ne(null), A = ne(null), R = ne(null), z = at(), j = r !== void 0, [F, X] = q(
      () => a != null ? pa(a, l) : ""
    ), [ie, te] = q(!1), [we, ae] = q(null), [_e, K] = q(null), me = Oe(
      () => Kr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => Kr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), xe = Oe(() => {
      const se = Number.parseFloat(o);
      return Number.isNaN(se) || se <= 0 ? 1 : se;
    }, [o]), pe = Oe(() => {
      const se = j ? r ?? "" : F;
      return se ? Kr(se) : null;
    }, [r, F, j]), De = B(
      (se) => {
        const Le = se === null ? "" : Qs(se, l);
        j || X(Le), h?.(Le), b?.(Le);
      },
      [j, l, h, b]
    ), G = B(
      (se) => {
        se && we !== null && De(we), te(!1), ae(null), K(null), _?.(), y || R.current?.focus();
      },
      [y, we, De, _]
    ), $e = B(() => {
      x || (ae(pe ?? 0), te(!0), p?.());
    }, [x, pe, p]), re = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (se, Le) => {
        ae((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * xe * fa[se];
          return Fs(xt, me, ue);
        });
      },
      [pe, xe, me, ue]
    ), fe = B(
      (se) => {
        const Le = _e?.[se];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        ae((xt) => {
          const Ie = xt ?? pe ?? 0, We = _a(Ie);
          We[se] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * Rv(We);
          return Fs($t, me, ue);
        }), K(null);
      },
      [_e, pe, me, ue]
    ), Fe = (se, Le) => {
      K((Nt) => ({ ...Nt ?? {}, [se]: Le }));
    }, Ge = (se, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), fe(se), Ae(se, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), fe(se), Ae(se, -1);
          break;
        case "Home":
          Le.preventDefault(), fe(se), ae(me);
          break;
        case "End":
          Le.preventDefault(), fe(se), ae(ue);
          break;
        case "Enter":
          Le.preventDefault(), fe(se), G(!0);
          break;
      }
    }, Je = B(() => {
      if (ie) return;
      const se = Kr(F);
      De(se !== null ? Fs(se, me, ue) : null);
    }, [ie, F, me, ue, De]), At = (se) => {
      j || X(se.target.value);
    }, lt = (se) => {
      se.key === "Enter" ? (se.preventDefault(), ie ? G(!0) : Je()) : se.key === "Escape" && ie ? (se.preventDefault(), G(!1)) : se.key === "ArrowDown" && !ie ? (se.preventDefault(), $e()) : se.key === "Tab" && ie && te(!1), M?.(se);
    }, bt = (se) => {
      Je(), I?.(se);
    }, Z = () => {
      j || X(""), h?.(""), b?.(""), A.current?.focus();
    };
    be(() => {
      if (!ie) return;
      const se = (Le) => {
        k.current && !k.current.contains(Le.target) && G(!1);
      };
      return document.addEventListener("mousedown", se), () => document.removeEventListener("mousedown", se);
    }, [ie, G]), be(() => {
      if (!ie) return;
      const se = (Le) => {
        Le.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", se), () => document.removeEventListener("keydown", se);
    }, [ie, G]), be(() => {
      if (y && we !== null) {
        const se = pe;
        (se === null || Math.abs(we - se) > 1e-9) && De(we);
      }
    }, [y, we, pe, De]);
    const L = B(
      (se) => {
        A.current = se, typeof w == "function" ? w(se) : w && (w.current = se);
      },
      [w]
    ), Y = j ? r ? pa(r, l) : "" : F, Q = j ? !!r : F.length > 0, ge = y || ie, le = we ?? pe ?? 0, Ee = _a(le), je = Lv[l], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (se) => fa[se] >= je && (se === "days" ? d : se === "hours" ? f : se === "minutes" ? u : g)
    ), nt = t === "xs" ? ft["dx-timespanpicker-input--xs"] : t === "sm" ? ft["dx-timespanpicker-input--sm"] : t === "lg" ? ft["dx-timespanpicker-input--lg"] : t === "xl" ? ft["dx-timespanpicker-input--xl"] : ft["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ D("div", { className: ft["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: ft["dx-timespanpicker-preview"], "aria-live": "polite", children: Qs(le, l) }),
      /* @__PURE__ */ s("div", { className: ft["dx-timespanpicker-units"], children: Qe.map((se) => /* @__PURE__ */ D("label", { className: ft["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: ft["dx-timespanpicker-unit-label"], children: Bs[se] }),
        /* @__PURE__ */ D("span", { className: ft["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: ft["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: _e?.[se] ?? String(Ee[se]),
              onChange: (Le) => Fe(se, Le.target.value),
              onKeyDown: (Le) => Ge(se, Le),
              onBlur: () => fe(se)
            }
          ),
          /* @__PURE__ */ D("span", { className: ft["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Bs[se].toLowerCase()}`,
                onClick: () => {
                  fe(se), Ae(se, 1);
                },
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Bs[se].toLowerCase()}`,
                onClick: () => {
                  fe(se), Ae(se, -1);
                },
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, se)) }),
      /* @__PURE__ */ s("div", { className: ft["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
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
          !y && /* @__PURE__ */ D(ot, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: L,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: x,
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
                onKeyDown: lt,
                onBlur: bt,
                ...T
              }
            ),
            m && !x && Q && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: ft["dx-timespanpicker-clear"],
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
                className: [ft["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                disabled: x,
                onClick: re,
                children: /* @__PURE__ */ s(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ s(
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
), Pv = "_wrapper_ou9x5_1", jv = "_cells_ou9x5_8", Bv = "_cell_ou9x5_8", Fv = "_invalid_ou9x5_63", Hv = "_live_ou9x5_73", nr = {
  wrapper: Pv,
  cells: jv,
  cell: Bv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Fv,
  live: Hv
};
function ha(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const jO = st(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: a,
    invalid: i = !1,
    size: c = "md",
    autoFocus: o = !1,
    disabled: l = !1,
    label: d = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": g
  }, m) {
    const y = at(), h = n !== void 0, [b, p] = q(ha(r).join("")), _ = h ? ha(n).join("") : b, x = Array.from({ length: t }, (T, w) => _[w] ?? ""), N = ne([]), [v, C] = q(""), S = (T) => {
      h || p(T), a?.(T);
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
          /* @__PURE__ */ s("div", { className: [nr.cells, nr[c]].join(" "), children: x.map((T, w) => /* @__PURE__ */ s(
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
              autoFocus: o && w === 0,
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
          f && /* @__PURE__ */ s(
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
), Uv = "_wrapper_6lcd5_1", qv = "_header_6lcd5_7", Wv = "_label_6lcd5_15", Kv = "_clear_6lcd5_22", Gv = "_canvas_6lcd5_53", Vv = "_disabled_6lcd5_69", gr = {
  wrapper: Uv,
  header: qv,
  label: Wv,
  clear: Kv,
  canvas: Gv,
  disabled: Vv
}, BO = st(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: a = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: c = "Clear",
    ariaLabel: o = "Signature",
    width: l,
    height: d = 140,
    disabled: f = !1,
    className: u
  }, g) {
    const m = ne(null), y = ne(!1), h = ne(!1), b = ne({ x: 0, y: 0 });
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
    const p = () => {
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
    ws(g, () => ({
      clear: _,
      toDataURL: (S = "image/png", $) => m.current?.toDataURL(S, $) ?? ""
    }));
    const x = (S) => {
      const $ = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - $.left, y: S.clientY - $.top };
    }, N = (S) => {
      f || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), y.current = !0, h.current = !1, b.current = x(S));
    }, v = (S) => {
      if (!y.current) return;
      S.preventDefault();
      const $ = S.currentTarget.getContext("2d");
      if (!$) return;
      const E = x(S);
      $.beginPath(), $.moveTo(b.current.x, b.current.y), $.lineTo(E.x, E.y), $.stroke(), b.current = E, h.current = !0;
    }, C = (S) => {
      y.current && (S.preventDefault(), y.current = !1, h.current && p());
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
            /* @__PURE__ */ s("span", { className: gr.label, children: o }),
            /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: m,
              role: "img",
              "aria-label": o,
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
), Yv = "_wrapper_dsvd2_1", Xv = "_trigger_dsvd2_7", Zv = "_list_dsvd2_35", Jv = "_row_dsvd2_44", Qv = "_name_dsvd2_59", ew = "_size_dsvd2_68", tw = "_progress_dsvd2_74", nw = "_fill_dsvd2_82", rw = "_status_dsvd2_99", sw = "_remove_dsvd2_106", On = {
  wrapper: Yv,
  trigger: Xv,
  list: Zv,
  row: Jv,
  name: Qv,
  size: ew,
  progress: tw,
  fill: nw,
  status: rw,
  remove: sw
};
function ma(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const FO = st(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: a = !0,
  headers: i,
  accept: c,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: d = "Upload",
  children: f,
  onProgress: u,
  onComplete: g,
  onError: m
}, y) {
  const h = ne(null), [b, p] = q([]), _ = ne(/* @__PURE__ */ new Map()), x = ($, E) => {
    p(
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
      x($.file.name, { state: "uploading", progress: T }), u?.($.file.name, T);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (x($.file.name, { state: "complete", progress: 100 }), g?.($.file.name)) : (x($.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), m?.($.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      x($.file.name, { state: "error", message: "Network error" }), m?.($.file.name, "Network error");
    }), i)
      for (const [M, T] of Object.entries(i))
        E.setRequestHeader(M, T);
    E.open("POST", t), E.send(I), x($.file.name, { state: "uploading", progress: 0 });
  }, v = ($) => {
    if (!$) return;
    const E = [...$], I = [];
    let M = Math.max(0, o - b.length);
    for (const w of E) {
      if (l != null && w.size > l) {
        m?.(
          w.name,
          `File too large (maximum ${ma(l)})`
        );
        continue;
      }
      if (M <= 0) {
        m?.(w.name, `Too many files (maximum ${o})`);
        continue;
      }
      M -= 1, I.push(w);
    }
    const T = I.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    p((w) => [...w, ...T]), h.current && (h.current.value = ""), a && T.forEach(N);
  }, C = ($) => {
    _.current.get($)?.abort(), _.current.delete($), p((I) => I.filter((M) => M.file.name !== $));
  }, S = f ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: On.trigger,
      onClick: () => h.current?.click(),
      children: [
        /* @__PURE__ */ s(Me, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return ws(y, () => ({
    open: () => h.current?.click(),
    upload: () => b.forEach(($) => $.state === "pending" ? N($) : null)
  })), /* @__PURE__ */ D("div", { className: On.wrapper, children: [
    S,
    /* @__PURE__ */ s(
      "input",
      {
        ref: h,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: ($) => v($.target.files)
      }
    ),
    !f && b.length > 0 && /* @__PURE__ */ s("ul", { className: On.list, children: b.map(({ file: $, state: E, progress: I, message: M }) => /* @__PURE__ */ D(
      "li",
      {
        className: On.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: On.name, children: $.name }),
          /* @__PURE__ */ s("span", { className: On.size, children: ma($.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${$.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": I,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: On.fill,
                  style: { width: `${I}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: On.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? M ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${$.name}`,
              onClick: () => C($.name),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      $.name
    )) })
  ] });
}), ow = "_zone_nl0bz_1", aw = "_dragging_nl0bz_23", lw = "_caption_nl0bz_28", iw = "_browse_nl0bz_40", cw = "_disabled_nl0bz_67", Br = {
  zone: ow,
  dragging: aw,
  caption: lw,
  browse: iw,
  disabled: cw
};
function dw(e, t) {
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
const HO = st(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: a = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: c = "Browse",
    disabled: o = !1,
    className: l
  }, d) {
    const f = ne(null), [u, g] = q(!1), m = (_) => {
      if (!_ || _.length === 0) return;
      const x = [..._].filter((N) => dw(N, t ?? ""));
      x.length !== 0 && r?.(x);
    }, y = (_) => {
      o || (_.preventDefault(), g(!0));
    }, h = (_) => {
      o || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", g(!0));
    }, b = (_) => {
      o || _.currentTarget.contains(_.relatedTarget) || g(!1);
    }, p = (_) => {
      o || (_.preventDefault(), g(!1), m(_.dataTransfer.files));
    };
    return ws(d, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": o || void 0,
        className: [
          Br.zone,
          u ? Br.dragging : null,
          o ? Br.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: y,
        onDragOver: h,
        onDragLeave: b,
        onDrop: p,
        children: [
          /* @__PURE__ */ s("p", { className: Br.caption, children: u ? i : a }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Br.browse,
              onClick: () => f.current?.click(),
              children: c
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
                m(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), uw = "_root_1a92d_1", fw = "_menubar_1a92d_5", _w = "_horizontal_1a92d_15", pw = "_vertical_1a92d_20", hw = "_itemWrapper_1a92d_25", mw = "_item_1a92d_25", gw = "_disabled_1a92d_61", yw = "_icon_1a92d_68", bw = "_text_1a92d_75", xw = "_caret_1a92d_79", vw = "_hasChildren_1a92d_85", ww = "_submenu_1a92d_94", kw = "_submenuItem_1a92d_118", Nw = "_flyout_1a92d_155", Sw = "_hamburger_1a92d_175", Ow = "_responsive_1a92d_198", $w = "_mobileOpen_1a92d_207", pt = {
  root: uw,
  menubar: fw,
  horizontal: _w,
  vertical: pw,
  itemWrapper: hw,
  item: mw,
  disabled: gw,
  icon: yw,
  text: bw,
  caret: xw,
  hasChildren: vw,
  submenu: ww,
  submenuItem: kw,
  flyout: Nw,
  hamburger: Sw,
  responsive: Ow,
  mobileOpen: $w
}, xs = ir(null);
function Ew(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Tw(e, t, n, r, a) {
  const [i, c] = q(n), o = e ? t ?? !1 : i, l = B(
    (d) => {
      e || c(d), r?.(d);
    },
    [e, r]
  );
  return be(() => {
    a > 0 && l(!1);
  }, [a]), [o, l];
}
function Cw({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ s("span", { className: pt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: pt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Ka(e) {
  return qt(e) && e.type === Ga;
}
function io({
  itemKey: e,
  props: t
}) {
  const n = jn(xs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: o } = t, l = Oe(
    () => Xr.toArray(t.children).filter(qt),
    [t.children]
  ), d = l.length > 0, f = !!c, u = t.open !== void 0, [g, m] = Tw(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), y = n.level === 0, h = ne(0), p = (y && !u ? n.openKey === e : null) ?? g, _ = B(
    (R) => {
      y && !u ? n.setOpenKey(R ? e : null) : (m(R), y && n.setOpenKey(null));
    },
    [y, u, n, e, m]
  ), [, x] = q(0);
  be(() => {
    if (!i) return;
    const R = () => x((z) => z + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const N = i && !d ? Ew(i, t.match) : !1, v = B(
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
      if (p && (Date.now() - h.current < 600 || !n.clickToOpen)) {
        h.current = 0;
        return;
      }
      _(!p);
    }
  }, [f, p, _, n.clickToOpen]), S = B(() => {
    !d || f || n.clickToOpen || (h.current = Date.now(), _(!0));
  }, [d, f, n.clickToOpen, _]), $ = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), E = `${n.baseId}-submenu-${e}`, [I, M] = q(null);
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
  ), w = d ? /* @__PURE__ */ s("span", { className: pt.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    Me,
    {
      icon: n.flyout && !y ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, k = o ?? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ s(
      Cw,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: pt.text, children: r }),
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
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": y ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": f || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
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
          p ? /* @__PURE__ */ s(
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
              children: /* @__PURE__ */ s(xs.Provider, { value: T, children: l.map(
                (z, j) => Ka(z) ? /* @__PURE__ */ s(
                  io,
                  {
                    itemKey: `${e}-${j}`,
                    props: z.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(no, { children: z }, `${e}-custom-${j}`)
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
  return i && !f ? /* @__PURE__ */ s("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: i, target: t.target, ...A, children: k }) }) : /* @__PURE__ */ s("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: f, ...A, children: k }) });
}
function Ga(e) {
  if (!jn(xs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(io, { itemKey: e.text, props: e });
}
function Aw({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: a = !1,
  onClick: i,
  onClose: c,
  ariaLabel: o = "Menu",
  toggleAriaLabel: l = "Toggle menu",
  className: d,
  ...f
}) {
  const u = at(), g = ne(null), m = ne(null), [y, h] = q(null), [b, p] = q(0), [_, x] = q(!1), N = ne(null), v = B(
    (I) => i?.(I),
    [i]
  ), C = B(() => {
    h(null), p((I) => I + 1);
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
      closeSignal: b,
      emit: v,
      closeAll: C,
      openKey: y,
      setOpenKey: h
    }),
    [u, n, t, b, v, C, y]
  ), $ = Oe(
    () => Xr.toArray(e).filter(qt),
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
        )?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), N.current = A, h(A));
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
      "aria-label": o,
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
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": _,
            className: pt.hamburger,
            onClick: () => x((I) => !I),
            children: /* @__PURE__ */ s(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: m,
            role: a ? "menu" : "menubar",
            "aria-label": o,
            className: pt.menubar,
            onKeyDown: E,
            children: /* @__PURE__ */ s(xs.Provider, { value: S, children: $.map(
              (I, M) => Ka(I) ? /* @__PURE__ */ s(
                io,
                {
                  itemKey: String(M),
                  props: I.props
                },
                `top-${M}`
              ) : /* @__PURE__ */ s(no, { children: I }, `top-custom-${M}`)
            ) })
          }
        )
      ]
    }
  );
}
const Dw = "_popup_uiejp_1", Mw = "_menu_uiejp_22", eo = {
  popup: Dw,
  menu: Mw
}, Va = ir(null);
function UO() {
  const e = jn(Va);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Ya(e) {
  return e.map((t, n) => {
    const { children: r, ...a } = t;
    return /* @__PURE__ */ s(Ga, { ...a, children: r ? Ya(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Iw({ state: e, onClose: t }) {
  const n = ne(null), [r, a] = q({ left: e.x, top: e.y });
  Hs(() => {
    const c = n.current;
    if (!c) return;
    const o = c.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
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
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: eo.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: eo.menu, children: e.options.content ?? /* @__PURE__ */ s(
        Aw,
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
function qO({ children: e }) {
  const [t, n] = q(null), r = B(() => {
    n((c) => (c?.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = B(
    (c, o) => {
      c.preventDefault();
      const l = c.currentTarget ?? c.target;
      n({ x: c.clientX, y: c.clientY, invoker: l, options: o });
    },
    []
  );
  be(() => {
    if (!t) return;
    const c = (f) => {
      const u = document.querySelector(`.${eo.popup}`);
      u && !u.contains(f.target) && r();
    }, o = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = Oe(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ D(Va.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ s(Iw, { state: t, onClose: r }) : null
  ] });
}
const zw = "_root_rgcia_1", Lw = "_list_rgcia_9", Rw = "_item_rgcia_14", Pw = "_trigger_rgcia_18", jw = "_disabled_rgcia_45", Bw = "_expanded_rgcia_52", Fw = "_selected_rgcia_56", Hw = "_icon_rgcia_61", Uw = "_text_rgcia_72", qw = "_caret_rgcia_79", Ww = "_open_rgcia_86", Kw = "_submenu_rgcia_90", Gw = "_iconOnly_rgcia_172", Vw = "_stacked_rgcia_201", Lt = {
  root: zw,
  list: Lw,
  item: Rw,
  trigger: Pw,
  disabled: jw,
  expanded: Bw,
  selected: Fw,
  icon: Hw,
  text: Uw,
  caret: qw,
  open: Ww,
  submenu: Kw,
  iconOnly: Gw,
  stacked: Vw
}, vs = ir(null);
function Yw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Xw(e, t) {
  const n = Yw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Zw({
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
function co({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = jn(vs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: o } = n, l = Oe(
    () => Xr.toArray(n.children).filter(qt),
    [n.children]
  ), d = l.length > 0, f = !!o, u = n.match ?? r.match, g = n.expanded !== void 0, [m, y] = q(
    n.defaultExpanded ?? !1
  ), h = g ? n.expanded ?? !1 : m, b = B(
    (F) => {
      g || y(F), n.onExpandedChange?.(F);
    },
    [g, n]
  );
  be(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && b(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, x] = q(
    n.defaultSelected ?? !1
  ), N = !p && c ? Xw(c, u) : !1, v = n.selected ?? (p ? _ : N || _), [, C] = q(0);
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
        b(!0), r.openAncestors();
      }
    }),
    [r, b]
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
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), p || x(!0), n.onSelectedChange?.(!0);
    },
    [f, a, i, c, r, n, p]
  ), E = B(() => {
    f || (h || r.notifyOpened(e, t), b(!h));
  }, [f, h, r, e, t, b]), I = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), d ? E() : F.target.click()) : F.key === "Escape" && h ? (F.preventDefault(), b(!1)) : F.key === "ArrowRight" && d && !h ? (F.preventDefault(), r.notifyOpened(e, t), b(!0)) : F.key === "ArrowLeft" && h && (F.preventDefault(), b(!1));
    },
    [d, E, h, b, r, e, t]
  ), M = d && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [Lt.caret, h ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, T = n.template ?? /* @__PURE__ */ D(ot, { children: [
    /* @__PURE__ */ s(
      Zw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: Lt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: Lt.text, children: a }),
    M
  ] }), w = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, A = [
    Lt.trigger,
    f ? Lt.disabled : null,
    h ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), R = r.level > 0 ? "menuitem" : void 0, z = d ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: k,
      role: R,
      "aria-expanded": h,
      "aria-controls": w,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: A,
      onClick: E,
      onKeyDown: I,
      children: T
    }
  ) : c && !f ? /* @__PURE__ */ s(
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
      className: A,
      onClick: $,
      onKeyDown: I,
      children: T
    }
  ), j = d ? r.renderMode === "server" && !h ? null : /* @__PURE__ */ s(
    "div",
    {
      id: w,
      role: "menu",
      "aria-labelledby": k,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !h ? !0 : void 0,
      children: /* @__PURE__ */ s(vs.Provider, { value: S, children: l.map((F, X) => /* @__PURE__ */ s(
        co,
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
function WO(e) {
  if (!jn(vs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(co, { itemKey: e.text, ancestors: [], props: e });
}
function KO({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: a = "prefix",
  renderMode: i = "client",
  onClick: c,
  ariaLabel: o = "Panel menu",
  className: l,
  ...d
}) {
  const f = at(), [u, g] = q(0), m = ne(/* @__PURE__ */ new Set()), y = B(
    (N) => c?.(N),
    [c]
  ), h = B(
    (N, v) => {
      t || (m.current = /* @__PURE__ */ new Set([N, ...v]), g((C) => C + 1));
    },
    [t]
  ), b = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, C = b(N.currentTarget), S = C.indexOf(v);
        if (S === -1) return;
        N.preventDefault();
        const $ = N.key === "ArrowDown" ? 1 : -1;
        C[(S + $ + C.length) % C.length]?.focus();
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
      match: a,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: m,
      emit: y,
      notifyOpened: h,
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
      h
    ]
  ), x = Oe(
    () => Xr.toArray(e).filter(qt),
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
        l
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...d,
      children: /* @__PURE__ */ s("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ s(vs.Provider, { value: _, children: x.map((N, v) => /* @__PURE__ */ s(
        co,
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
const Jw = "_root_5numg_1", Qw = "_trigger_5numg_7", e2 = "_defaultTrigger_5numg_40", t2 = "_avatar_5numg_46", n2 = "_menu_5numg_58", r2 = "_item_5numg_74", s2 = "_disabled_5numg_88", o2 = "_active_5numg_97", a2 = "_icon_5numg_107", l2 = "_text_5numg_114", $n = {
  root: Jw,
  trigger: Qw,
  defaultTrigger: e2,
  avatar: t2,
  menu: n2,
  item: r2,
  disabled: s2,
  active: o2,
  icon: a2,
  text: l2
};
function GO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = at(), c = `${i}-menu`, o = ne(null), l = ne(null), [d, f] = q(!1), [u, g] = q(-1), m = t, y = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), h = B(
    (v) => {
      if (v.disabled) return;
      const C = {
        text: v.text,
        path: v.path
      };
      n?.(C), f(!1), l.current?.focus();
    },
    [n]
  ), b = B(() => {
    g(y[0] ?? -1), f(!0);
  }, [y]), p = B(() => {
    f(!1), g(-1), l.current?.focus();
  }, []);
  be(() => {
    if (!d) return;
    const v = (C) => {
      o.current && !o.current.contains(C.target) && (f(!1), g(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [d]), be(() => {
    if (!d) return;
    const v = (C) => {
      C.key === "Escape" && (C.preventDefault(), p());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [d, p]);
  const _ = (v) => {
    if (y.length === 0) return;
    const C = y.indexOf(u), S = C === -1 ? 0 : (C + v + y.length) % y.length, $ = y[S];
    $ != null && g($);
  }, x = (v) => {
    if (!d) {
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
        v.preventDefault(), y[0] != null && g(y[0]);
        break;
      case "End":
        v.preventDefault(), y[y.length - 1] != null && g(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const C = e[u];
          C && !C.disabled && h(C);
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
          C && !C.disabled && h(C);
        }
        break;
      case "Escape":
        v.preventDefault(), p();
        break;
      case "Tab":
        f(!1), g(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: [$n.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ D("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": c,
            "aria-label": r,
            className: $n.trigger,
            onClick: () => d ? p() : b(),
            onKeyDown: x,
            children: m ?? /* @__PURE__ */ D("span", { className: $n.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: $n.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        d ? /* @__PURE__ */ s(
          "div",
          {
            id: c,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": u >= 0 ? `${i}-item-${u}` : void 0,
            className: $n.menu,
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
                    $n.item,
                    $ ? $n.active : null,
                    S ? $n.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || h(v);
                  },
                  onMouseEnter: () => {
                    S || g(C);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ s("span", { className: $n.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ s("span", { className: $n.text, children: v.text })
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
const i2 = "_root_vv0xs_1", c2 = "_bottomRight_vv0xs_11", d2 = "_bottomLeft_vv0xs_16", u2 = "_topRight_vv0xs_21", f2 = "_topLeft_vv0xs_26", _2 = "_menu_vv0xs_31", p2 = "_itemWrapper_vv0xs_48", h2 = "_tooltip_vv0xs_54", m2 = "_main_vv0xs_76", g2 = "_mainIcon_vv0xs_104", y2 = "_mainOpen_vv0xs_109", b2 = "_item_vv0xs_48", x2 = "_disabled_vv0xs_141", v2 = "_itemIcon_vv0xs_148", Wt = {
  root: i2,
  bottomRight: c2,
  bottomLeft: d2,
  topRight: u2,
  topLeft: f2,
  menu: _2,
  itemWrapper: p2,
  tooltip: h2,
  main: m2,
  mainIcon: g2,
  mainOpen: y2,
  item: b2,
  disabled: x2,
  itemIcon: v2
};
function VO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${at()}-menu`, d = ne(null), f = ne(null), [u, g] = q(!1), m = B(
    (p) => {
      if (p.disabled) return;
      const _ = { text: p.text, value: p.value };
      r?.(_), g(!1), f.current?.focus();
    },
    [r]
  );
  be(() => {
    if (!u) return;
    const p = (_) => {
      d.current && !d.current.contains(_.target) && g(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]), be(() => {
    if (!u) return;
    const p = (_) => {
      _.key === "Escape" && (g(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [u]);
  const y = c === "bottom-right" ? Wt.bottomRight : c === "bottom-left" ? Wt.bottomLeft : c === "top-right" ? Wt.topRight : Wt.topLeft, h = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), g(!0)) : u && p.key === "Escape" && (p.preventDefault(), g(!1));
  }, b = (p) => {
    p.key === "Escape" && (p.preventDefault(), g(!1), f.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: d,
      className: [Wt.root, y, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ s(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": a,
            className: Wt.menu,
            onKeyDown: b,
            children: e.map((p, _) => {
              const x = !!p.disabled;
              return /* @__PURE__ */ D("div", { className: Wt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: Wt.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": x || void 0,
                    title: p.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [Wt.item, x ? Wt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => m(p),
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
            "aria-controls": l,
            "aria-label": a,
            onClick: () => g((p) => !p),
            onKeyDown: h,
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
const w2 = "_root_1eyur_1", k2 = "_list_1eyur_5", N2 = "_item_1eyur_15", S2 = "_link_1eyur_22", O2 = "_linkButton_1eyur_23", $2 = "_current_1eyur_24", E2 = "_disabled_1eyur_68", T2 = "_icon_1eyur_74", C2 = "_text_1eyur_81", A2 = "_separator_1eyur_85", _t = {
  root: w2,
  list: k2,
  item: N2,
  link: S2,
  linkButton: O2,
  current: $2,
  disabled: E2,
  icon: T2,
  text: C2,
  separator: A2
};
function YO({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const a = t, i = (c) => {
    c.disabled || a?.({ text: c.text, path: c.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [_t.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: _t.list, children: e.map((c, o) => {
        const l = o === e.length - 1, d = !!c.disabled;
        return /* @__PURE__ */ D("li", { className: _t.item, children: [
          l ? d ? /* @__PURE__ */ D(
            "span",
            {
              className: [_t.current, _t.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
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
                c.icon ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ s("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "span",
            {
              className: _t.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                c.icon ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
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
                c.icon ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ s("span", { className: _t.text, children: c.text })
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
                c.icon ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ s("span", { className: _t.text, children: c.text })
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
                c.icon ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ s("span", { className: _t.text, children: c.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ s("span", { className: _t.separator, "aria-hidden": "true", children: "/" })
        ] }, `${c.text}-${o}`);
      }) })
    }
  );
}
const D2 = "_link_tmy3k_1", M2 = {
  link: D2
}, XO = st(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ D(ot, { children: [
    n != null && /* @__PURE__ */ s(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [M2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...u } = i;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: c,
        className: l,
        href: f,
        ...u,
        children: o
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: c,
      type: "button",
      className: l,
      ...i,
      children: o
    }
  );
}), I2 = "_root_dnkuu_1", z2 = "_list_dnkuu_5", L2 = "_item_dnkuu_15", R2 = "_connector_dnkuu_21", P2 = "_connectorCompleted_dnkuu_30", j2 = "_step_dnkuu_34", B2 = "_active_dnkuu_69", F2 = "_completed_dnkuu_75", H2 = "_circle_dnkuu_79", U2 = "_check_dnkuu_109", q2 = "_icon_dnkuu_114", W2 = "_number_dnkuu_119", K2 = "_text_dnkuu_124", Kt = {
  root: I2,
  list: z2,
  item: L2,
  connector: R2,
  connectorCompleted: P2,
  step: j2,
  active: B2,
  completed: F2,
  circle: H2,
  check: U2,
  icon: q2,
  number: W2,
  text: K2
};
function ZO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: a,
  Linear: i,
  onChange: c,
  Change: o,
  onSelectedIndexChange: l,
  ariaLabel: d = "Steps",
  className: f
}) {
  const u = a ?? i ?? !1, g = t ?? n, m = g !== void 0, [y, h] = q(() => Math.min(Math.max(0, g ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, m ? g : y),
    Math.max(0, e.length - 1)
  ), _ = ne(null), x = B(
    (C) => {
      const S = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      m || h(S), (c ?? o ?? l)?.(S);
    },
    [m, c, o, l, e.length]
  ), N = B(
    (C, S) => !!(S.disabled || u && C > p + 1),
    [u, p]
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
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": d,
      className: [Kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ s("ol", { ref: _, role: "list", className: Kt.list, children: e.map((C, S) => {
        const $ = S === p, E = S < p, I = N(S, C);
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
                    I || x(S);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: Kt.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ s("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ s("span", { className: Kt.icon, children: C.icon }) : /* @__PURE__ */ s("span", { className: Kt.number, children: S + 1 }) }),
                    /* @__PURE__ */ s("span", { className: Kt.text, children: C.text })
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
const G2 = "_root_12hod_1", V2 = "_horizontal_12hod_13", Y2 = "_vertical_12hod_17", X2 = "_pane_12hod_21", Z2 = "_handle_12hod_31", J2 = "_handleHorizontal_12hod_51", Q2 = "_handleVertical_12hod_57", ek = "_handleGrip_12hod_63", tk = "_handleCollapseHint_12hod_75", nk = "_collapseBtn_12hod_79", rk = "_collapseBtnCollapsed_12hod_109", un = {
  root: G2,
  horizontal: V2,
  vertical: Y2,
  pane: X2,
  handle: Z2,
  handleHorizontal: J2,
  handleVertical: Q2,
  handleGrip: ek,
  handleCollapseHint: tk,
  collapseBtn: nk,
  collapseBtnCollapsed: rk
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
function JO({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: a,
  onCollapse: i,
  Collapse: c,
  ariaLabel: o = "Splitter",
  className: l
}) {
  const d = e ?? t ?? "horizontal", f = d === "horizontal", u = ne(null), g = B(() => {
    const w = n.length;
    if (w === 0) return [];
    const k = n.map((R) => R.size ? Fr(R.size, 100 / w) : 100 / w), A = k.reduce((R, z) => R + z, 0);
    return Math.abs(A - 100) > 0.01 && A > 0 ? k.map((R) => R / A * 100) : k;
  }, [n]), [m, y] = q(() => g()), [h, b] = q(
    () => n.map((w) => !!w.collapsed)
  ), p = ne(m);
  be(() => {
    b(n.map((w) => !!w.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((w) => Fr(w.min, 0)),
    [n]
  ), x = B(
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
      const k = !h[w];
      v(w, k) && (k ? (p.current = [...m], b((A) => {
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
      })) : (b((A) => {
        const R = [...A];
        return R[w] !== void 0 && (R[w] = !1), R;
      }), y(() => {
        const A = [...p.current];
        return A.length !== n.length ? n.map(() => 100 / n.length) : A;
      })));
    },
    [h, m, n.length, v]
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
    const R = _(), z = x(), j = R[k] ?? 0, F = z[k] ?? 100, X = k + 1, ie = R[X] ?? 0, te = z[X] ?? 100, we = m[k] ?? 0, ae = m[X] ?? 0, _e = we + ae;
    if (_e <= 0) return;
    let K = zn(A, j, F), me = _e - K;
    if (me < ie) {
      if (me = ie, K = _e - me, K < j || K > F) return;
    } else if (me > te && (me = te, K = _e - me, K < j || K > F))
      return;
    K = zn(K, j, F), me = _e - K, N(k, K) && y((ue) => {
      const xe = [...ue];
      return xe[k] = K, xe[X] = me, xe;
    });
  }, M = (w) => {
    !S.current || S.current.pointerId !== w.pointerId || (S.current = null);
  }, T = (w, k) => {
    const A = _(), R = x(), z = w, j = w + 1, F = m[z] ?? 0, X = m[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[z]?.collapsible, ae = !!n[j]?.collapsible;
    if (f ? k.key === "ArrowLeft" ? te = -5 : k.key === "ArrowRight" && (te = 5) : k.key === "ArrowUp" ? te = -5 : k.key === "ArrowDown" && (te = 5), k.key === "Home") {
      k.preventDefault();
      let _e = A[z] ?? 0, K = ie - _e;
      if (K = zn(
        K,
        A[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, A[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
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
      if (K = zn(
        K,
        A[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, A[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
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
      if (_e = zn(_e, me, ue), K = ie - _e, (K < xe || K > pe) && (K = zn(K, xe, pe), _e = ie - K, _e = zn(_e, me, ue), K = ie - _e), !N(z, _e)) return;
      y((De) => {
        const G = [...De];
        return G[z] = _e, G[j] = K, G;
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
        l
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((w, k) => {
        const A = !!h[k], R = A ? 0 : m[k] ?? 100 / n.length, z = A ? { display: "none" } : f ? {
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
                w.collapsible && !A ? /* @__PURE__ */ s(
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
                w.collapsible && A ? /* @__PURE__ */ s(
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
            /* @__PURE__ */ s(
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
              tabIndex: A || h[k + 1] ? -1 : 0,
              className: [
                un.handle,
                f ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => E(k, te),
              onPointerMove: I,
              onPointerUp: M,
              onKeyDown: (te) => T(k, te),
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
const sk = "_root_1w3wd_1", ok = "_list_1w3wd_5", ak = "_vertical_1w3wd_14", lk = "_horizontal_1w3wd_20", ik = "_item_1w3wd_28", ck = "_link_1w3wd_32", dk = "_active_1w3wd_57", yr = {
  root: sk,
  list: ok,
  vertical: ak,
  horizontal: lk,
  item: ik,
  link: ck,
  active: dk
};
function QO({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: a,
  onClick: i,
  Click: c,
  ariaLabel: o = "Table of contents",
  className: l
}) {
  const d = t ?? n, f = r ?? a ?? "vertical", [u, g] = q(
    () => e[0]?.selector ?? null
  ), m = ne(u);
  m.current = u;
  const y = B(
    (h, b) => {
      if (g(h.selector), (i ?? c)?.({ text: h.text, selector: h.selector }), b) {
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
  return be(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (d) {
        const v = document.querySelector(d);
        if (v) return v;
      }
      return window;
    })();
    let p = null;
    const _ = /* @__PURE__ */ new Map(), x = () => {
      let v = null, C = null;
      for (const $ of e) {
        const E = document.querySelector($.selector);
        if (!E) continue;
        _.set($.selector, E);
        const I = E.getBoundingClientRect();
        let M = I.top;
        if (b !== window) {
          const T = b.getBoundingClientRect();
          M = I.top - T.top;
        }
        M <= 80 ? (!C || M > C.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (C = { sel: $.selector, el: E }) : (!v || M < v.top) && (v = { sel: $.selector, top: M });
      }
      const S = C?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== m.current && g(S);
    }, N = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const v = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver((C) => {
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
          x();
      }, v);
      for (const C of e) {
        const S = document.querySelector(C.selector);
        S && (p.observe(S), _.set(C.selector, S));
      }
    }
    return b === window ? (window.addEventListener("scroll", N, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", N), p?.disconnect();
    }) : (b.addEventListener("scroll", N, {
      passive: !0
    }), x(), () => {
      b.removeEventListener("scroll", N), p?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [yr.root, yr[f], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: yr.list, children: e.map((h) => {
        const b = h.selector === u;
        return /* @__PURE__ */ s("li", { className: yr.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: h.selector.startsWith("#") || h.selector.startsWith(".") ? h.selector : `#${h.selector}`,
            className: [yr.link, b ? yr.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(h.selector);
              y(h, _);
            },
            children: h.text
          }
        ) }, `${h.text}-${h.selector}`);
      }) })
    }
  );
}
const uk = "_root_1bfit_1", fk = "_viewport_1bfit_17", _k = "_slide_1bfit_24", pk = "_active_1bfit_33", hk = "_arrow_1bfit_37", mk = "_prev_1bfit_71", gk = "_next_1bfit_75", yk = "_pauseBtn_1bfit_79", bk = "_indicators_1bfit_110", xk = "_indicator_1bfit_110", vk = "_indicatorActive_1bfit_145", fn = {
  root: uk,
  viewport: fk,
  slide: _k,
  active: pk,
  arrow: hk,
  prev: mk,
  next: gk,
  pauseBtn: yk,
  indicators: bk,
  indicator: xk,
  indicatorActive: vk
};
function e$({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: a,
  Auto: i,
  interval: c,
  Interval: o,
  pauseOnHover: l,
  PauseOnHover: d,
  showArrows: f,
  ShowArrows: u,
  showIndicators: g,
  ShowIndicators: m,
  onChange: y,
  Change: h,
  ariaLabel: b = "Carousel",
  className: p
}) {
  const _ = t ?? n, x = _ !== void 0, [N, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), C = x ? _ : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), $ = a ?? i ?? !1, E = c ?? o ?? 3e3, I = l ?? d ?? !0, M = f ?? u ?? !0, T = g ?? m ?? !0, [w, k] = q(!1), [A, R] = q(!1), z = w || A, j = ne(null), F = at(), X = B(
    (xe) => {
      const pe = e.length === 0 ? 0 : (xe % e.length + e.length) % e.length;
      x || v(pe), (y ?? h)?.(pe);
    },
    [x, y, h, e.length]
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
      "aria-label": b,
      tabIndex: 0,
      className: [fn.root, p].filter(Boolean).join(" "),
      onKeyDown: ae,
      onMouseEnter: _e,
      onMouseLeave: K,
      onFocusCapture: me,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: fn.viewport, children: e.map((xe, pe) => {
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
              children: xe
            },
            pe
          );
        }) }),
        M && e.length > 1 ? /* @__PURE__ */ D(ot, { children: [
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
        $ ? /* @__PURE__ */ s(
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
        T && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: fn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((xe, pe) => {
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
const wk = "_root_1aa5u_1", kk = "_group_1aa5u_20", Nk = "_itemWrapper_1aa5u_30", Sk = "_treeitem_1aa5u_34", Ok = "_disabled_1aa5u_50", $k = "_selected_1aa5u_60", Ek = "_caret_1aa5u_66", Tk = "_caretIcon_1aa5u_113", Ck = "_caretOpen_1aa5u_120", Ak = "_caretPlaceholder_1aa5u_124", Dk = "_label_1aa5u_130", Mk = "_loading_1aa5u_137", Ik = "_loadingRow_1aa5u_143", zk = "_empty_1aa5u_149", Lk = "_checkbox_1aa5u_155", Mt = {
  root: wk,
  group: kk,
  itemWrapper: Nk,
  treeitem: Sk,
  disabled: Ok,
  selected: $k,
  caret: Ek,
  caretIcon: Tk,
  caretOpen: Ck,
  caretPlaceholder: Ak,
  label: Dk,
  loading: Mk,
  loadingRow: Ik,
  empty: zk,
  checkbox: Lk
};
function Rk({
  indeterminate: e,
  ...t
}) {
  const n = ne(null);
  return be(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function t$({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: a,
  TextProperty: i,
  keyProperty: c,
  KeyProperty: o,
  selectionMode: l,
  SelectionMode: d,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: g,
  SelectedItems: m,
  defaultSelectedItem: y,
  defaultSelectedItems: h,
  onChange: b,
  Change: p,
  onExpand: _,
  Expand: x,
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
  const X = e ?? t ?? [], ie = n ?? r, te = a ?? i ?? "text", we = c ?? o ?? "id", ae = l ?? d ?? "single", _e = T ?? w ?? "Tree", K = C ?? S, me = $ ?? E ?? I ?? M, ue = B(
    (W) => {
      const ee = W[we];
      return ee != null ? String(ee) : String(W.id ?? "");
    },
    [we]
  ), xe = B(
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
  ), [re, Ae] = q(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = q(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = g ?? m, bt = ae === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
    if (ae === "multiple") {
      if (h && h.length > 0)
        return new Set(h.map((de) => ue(de)));
      const W = /* @__PURE__ */ new Set(), ee = (de) => {
        for (const Ne of de) {
          Ne.selected && W.add(ue(Ne));
          const ke = pe(Ne);
          ke && ee(ke);
        }
      };
      return ee(X), W;
    } else {
      if (y) return /* @__PURE__ */ new Set([ue(y)]);
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
    ae,
    y,
    h,
    ue,
    pe,
    X
  ]), [L, Y] = q(
    () => Z()
  ), Q = Oe(() => {
    if (ae === "multiple") {
      if (Je !== void 0) {
        const W = Je;
        return W ? new Set(W.map((ee) => ue(ee))) : /* @__PURE__ */ new Set();
      }
      return L;
    } else {
      if (Ge !== void 0) {
        const W = Ge;
        return W ? /* @__PURE__ */ new Set([ue(W)]) : /* @__PURE__ */ new Set();
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
    (W) => {
      let ee;
      const de = (Ne) => {
        for (const ke of Ne) {
          if (ue(ke) === W)
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
    const W = /* @__PURE__ */ new Map(), ee = (de) => {
      for (const Ne of de) {
        const ke = ue(Ne);
        W.set(ke, Ne);
        const Ke = re.get(ke) ?? pe(Ne);
        Ke && ee(Ke);
      }
    };
    return ee(X), W;
  }, [X, re, ue, pe]), Ee = B(
    (W) => {
      const ee = ue(W);
      if (!W.disabled)
        if (ae === "multiple") {
          const Ne = new Set(Q);
          Ne.has(ee) ? Ne.delete(ee) : Ne.add(ee), bt || Y(Ne);
          const ke = b ?? p;
          if (ke) {
            const Ce = le(), Ke = [];
            for (const Be of Ne) {
              const ct = Ce.get(Be) ?? ge(Be);
              ct && Ke.push(ct);
            }
            ke({ item: W, selectedItems: Ke });
          }
        } else if (!Q.has(ee) || Q.size !== 1 || !Q.has(ee)) {
          bt || Y(/* @__PURE__ */ new Set([ee]));
          const ke = b ?? p;
          ke && ke({ item: W, selectedItem: W });
        } else {
          const ke = b ?? p;
          ke && ke({ item: W, selectedItem: W });
        }
    },
    [
      ue,
      ae,
      Q,
      bt,
      b,
      p,
      le,
      ge
    ]
  ), je = B(
    async (W) => {
      const ee = ue(W);
      if (!!W.disabled) return;
      const Ne = G.has(ee), ke = _ ?? x, Ce = N ?? v, Ke = pe(W), ct = re.get(ee) ?? Ke, Et = !(ct !== void 0 && ct.length > 0) && K != null;
      if (Ne) {
        $e((ht) => {
          const ze = new Set(ht);
          return ze.delete(ee), ze;
        }), Ce?.({ item: W });
        return;
      }
      if (Et) {
        if (fe.has(ee)) return;
        Fe((ht) => {
          const ze = new Set(ht);
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
      }), ke?.({ item: W });
    },
    [
      ue,
      G,
      pe,
      re,
      K,
      fe,
      _,
      x,
      N,
      v
    ]
  ), Ze = Oe(() => {
    const W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ue(Ke);
        W.has(Be) || W.set(Be, []), ee.set(Be, Ce), Ke.disabled && de.add(Be);
        const rt = re.get(Be) ?? pe(Ke);
        rt && rt.length > 0 && (W.set(
          Be,
          rt.map((Et) => ue(Et))
        ), Ne(rt, Be));
      }
    };
    return Ne(X, null), { childrenOf: W, parentOf: ee, disabledKeys: de };
  }, [X, re, ue, pe]), Qe = B(
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
  ), se = A !== void 0 ? new Set(A) : nt, Le = B(
    (W) => {
      const ee = Ze.disabledKeys;
      return Qe(W).filter((de) => !ee.has(de));
    },
    [Qe, Ze]
  ), Nt = B(
    (W) => {
      if (se.has(W)) return !0;
      if (!k || !j) return !1;
      const ee = Le(W);
      return ee.length > 0 && ee.every((de) => se.has(de));
    },
    [se, k, j, Le]
  ), Rt = B(
    (W) => {
      if (!k || !j || se.has(W))
        return !1;
      const ee = Le(W);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => se.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [se, k, j, Le]
  ), xt = B(
    (W) => {
      if (!k || W.disabled) return;
      const ee = ue(W), de = new Set(se);
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
      se,
      Le,
      ue,
      Nt,
      z
    ]
  ), Ie = Oe(() => {
    const W = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, Ke) => {
        const Be = ue(Ce), ct = xe(Ce), rt = re.get(Be) ?? pe(Ce);
        let Et;
        re.has(Be) ? Et = re.get(Be).length > 0 : rt !== void 0 ? Et = rt.length > 0 : K ? Et = !0 : Et = !1;
        const ht = G.has(Be), ze = !!Ce.disabled, Tt = de.length, Zt = Ke + 1;
        if (W.push({
          item: Ce,
          key: Be,
          text: ct,
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
    return ee(X, 1, null), W;
  }, [
    X,
    ue,
    xe,
    pe,
    re,
    G,
    K,
    fe
  ]), [We, vt] = q(
    () => Ie[0]?.key ?? null
  ), $t = ne(""), it = ne(null), V = ne(null);
  be(() => {
    if (!We && Ie.length > 0) {
      const W = Ie[0];
      W && vt(W.key);
    } else if (We && !Ie.some((W) => W.key === We)) {
      const W = Ie[0];
      vt(W ? W.key : null);
    }
  }, [Ie, We]), be(() => {
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
  const he = B((W) => {
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
        Ne && he(Ne);
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
        Ne && he(Ne);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !de) return;
        if (de.hasChildren && !de.expanded)
          je(de.item);
        else if (de.hasChildren && de.expanded) {
          const ke = ee + 1, Ce = Ie[ke];
          Ce && Ce.parentKey === de.key && he(Ce.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !de) return;
        if (de.hasChildren && de.expanded)
          je(de.item);
        else {
          const ke = Ve(de.key);
          ke && he(ke);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const ke = Ie[0];
        ke && he(ke.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const ke = Ie[Ie.length - 1];
        ke && he(ke.key);
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
        $t.current = ke, it.current && clearTimeout(it.current), it.current = setTimeout(() => {
          $t.current = "";
        }, 500);
        const Ce = ee >= 0 ? ee + 1 : 0, ct = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((rt) => rt.text.toLowerCase().startsWith(ke));
        ct && he(ct.key);
        return;
      }
    },
    [
      Ie,
      We,
      he,
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
    const Ce = ue(Ne), Ke = xe(Ne), Be = re.get(Ce) ?? pe(Ne);
    let ct;
    re.has(Ce) ? ct = re.get(Ce).length > 0 : Be !== void 0 ? ct = Be.length > 0 : K ? ct = !0 : ct = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), ht = !!Ne.disabled, ze = fe.has(Ce), Tt = We === Ce, Zt = W.length, pn = ke + 1, Tn = me ? me(Ne) : Ke, Fn = k ? {
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
          "aria-expanded": ct ? rt : void 0,
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
            k ? /* @__PURE__ */ s(
              Rk,
              {
                className: Mt.checkbox,
                checked: Fn?.checked ?? !1,
                indeterminate: Fn?.indeterminate ?? !1,
                disabled: ht,
                "aria-label": `Select ${Ke}`,
                onClick: (wn) => wn.stopPropagation(),
                onChange: () => xt(Ne)
              }
            ) : null,
            ct ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Mt.caret,
                "aria-label": `${rt ? "Collapse" : "Expand"} ${Ke}`,
                "aria-expanded": rt,
                tabIndex: -1,
                disabled: ht,
                onClick: (wn) => {
                  wn.stopPropagation(), he(Ce), je(Ne);
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
      ct && rt ? ze ? /* @__PURE__ */ s("div", { className: Mt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : re.has(Ce) && re.get(Ce).length > 0 ? Xe(
        re.get(Ce),
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
      "aria-multiselectable": ae === "multiple" || void 0,
      tabIndex: 0,
      className: [Mt.root, F].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: X.length === 0 ? /* @__PURE__ */ s("div", { className: Mt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const Pk = "_root_10fdq_1", jk = "_panel_10fdq_8", Bk = "_header_10fdq_19", Fk = "_listbox_10fdq_28", Hk = "_option_10fdq_42", Uk = "_disabled_10fdq_57", qk = "_active_10fdq_66", Wk = "_selected_10fdq_70", Kk = "_empty_10fdq_86", Gk = "_controls_10fdq_93", Vk = "_reorder_10fdq_102", Yk = "_btn_10fdq_110", tt = {
  root: Pk,
  panel: jk,
  header: Bk,
  listbox: Fk,
  option: Hk,
  disabled: Uk,
  active: qk,
  selected: Wk,
  empty: Kk,
  controls: Gk,
  reorder: Vk,
  btn: Yk
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ps(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function n$({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: a,
  Value: i,
  targetValue: c,
  TargetValue: o,
  data: l,
  Data: d,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: g,
  TargetChange: m,
  keyProperty: y,
  KeyProperty: h,
  onMove: b,
  Move: p,
  ariaLabel: _,
  AriaLabel: x,
  className: N
}) {
  const v = y ?? h ?? "id", C = _ ?? x ?? "PickList", S = e ?? t ?? a ?? i ?? l ?? d ?? [], $ = n ?? r ?? c ?? o ?? [], [E, I] = q(() => [
    ...S
  ]), [M, T] = q(() => [
    ...$
  ]);
  be(() => {
    const L = e ?? t ?? a ?? i ?? l ?? d;
    L !== void 0 && I([...L]);
  }, [e, t, a, i, l, d]), be(() => {
    const L = n ?? r ?? c ?? o;
    L !== void 0 && T([...L]);
  }, [n, r, c, o]);
  const [w, k] = q(
    () => /* @__PURE__ */ new Set()
  ), [A, R] = q(
    () => /* @__PURE__ */ new Set()
  ), [z, j] = q(() => {
    const L = S.findIndex((Y) => !Y.disabled);
    return L >= 0 ? L : 0;
  }), [F, X] = q(() => {
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
      (b ?? p)?.(L);
    },
    [b, p]
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
          (Qe) => ps(E[Qe]).toLowerCase().startsWith(le)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [E, ie, z, K]
  ), lt = B(
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
          (Qe) => ps(M[Qe]).toLowerCase().startsWith(le)
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
          /* @__PURE__ */ s("div", { className: tt.header, children: "Source" }),
          /* @__PURE__ */ s(
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
              ) : E.map((L, Y) => {
                const Q = It(L, v), ge = w.has(Q), le = Y === z, Ee = !!L.disabled;
                return /* @__PURE__ */ s(
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
                    children: ps(L)
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
              "aria-disabled": !re || void 0,
              disabled: !re,
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
              "aria-disabled": E.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: E.filter((L) => !L.disabled).length === 0,
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
              "aria-disabled": E.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: E.filter((L) => !L.disabled).length === 0,
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
              onClick: xe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
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
              ) : M.map((L, Y) => {
                const Q = It(L, v), ge = A.has(Q), le = Y === F, Ee = !!L.disabled;
                return /* @__PURE__ */ s(
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
                    children: ps(L)
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
const Xk = "_root_1qxsp_1", Zk = "_header_1qxsp_8", Jk = "_title_1qxsp_15", Qk = "_navBtn_1qxsp_20", eN = "_resources_1qxsp_39", tN = "_resource_1qxsp_39", nN = "_grid_1qxsp_50", rN = "_timeCol_1qxsp_55", sN = "_timeCell_1qxsp_61", oN = "_dayCol_1qxsp_66", aN = "_dayHeader_1qxsp_73", lN = "_slot_1qxsp_81", iN = "_event_1qxsp_91", Gt = {
  root: Xk,
  header: Zk,
  title: Jk,
  navBtn: Qk,
  resources: eN,
  resource: tN,
  grid: nN,
  timeCol: rN,
  timeCell: sN,
  dayCol: oN,
  dayHeader: aN,
  slot: lN,
  event: iN
};
function ga(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function r$({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: a,
  onEventClick: i,
  onSlotClick: c,
  ariaLabel: o = "Scheduler",
  className: l
}) {
  const [d, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? d, g = (h) => {
    n || f(h), r?.(h);
  }, m = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (h, b) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + b), p;
  }) : Array.from({ length: 30 }, (h, b) => {
    const p = new Date(u);
    return p.setDate(1 + b), p;
  }), y = Array.from({ length: 12 }, (h, b) => 8 + b);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Gt.root, l].filter(Boolean).join(" "),
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
                const h = new Date(u);
                h.setDate(h.getDate() - 7), g(h);
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
                const h = new Date(u);
                h.setDate(h.getDate() + 7), g(h);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ s("div", { className: Gt.resources, children: a.map((h) => /* @__PURE__ */ s(
          "div",
          {
            className: Gt.resource,
            role: "presentation",
            "aria-label": h.name,
            children: h.name
          },
          h.id
        )) }),
        /* @__PURE__ */ D("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: Gt.timeCol, role: "presentation", children: y.map((h) => /* @__PURE__ */ D("div", { className: Gt.timeCell, children: [
            h,
            ":00"
          ] }, h)) }),
          m.map((h) => /* @__PURE__ */ D(
            "div",
            {
              className: Gt.dayCol,
              role: "presentation",
              title: h.toLocaleDateString(),
              onClick: () => c?.({ date: h }),
              tabIndex: 0,
              "aria-label": h.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: Gt.dayHeader, children: h.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                y.map((b) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(h);
                      p.setHours(b), c?.({ date: p });
                    }
                  },
                  b
                )),
                e.filter((b) => b.start.toDateString() === h.toDateString()).map((b) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${b.title} ${ga(b.start)} - ${ga(b.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: b }),
                    children: b.title
                  },
                  b.id
                ))
              ]
            },
            h.toISOString()
          ))
        ] })
      ]
    }
  );
}
const cN = "_root_dj5ne_1", dN = "_header_dj5ne_8", uN = "_headerCell_dj5ne_15", fN = "_timeline_dj5ne_21", _N = "_row_dj5ne_26", pN = "_taskName_dj5ne_32", hN = "_timelineCell_dj5ne_37", mN = "_bar_dj5ne_43", gN = "_progress_dj5ne_56", yN = "_dep_dj5ne_61", En = {
  root: cN,
  header: dN,
  headerCell: uN,
  timeline: fN,
  row: _N,
  taskName: pN,
  timelineCell: hN,
  bar: mN,
  progress: gN,
  dep: yN
};
function s$({
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
      className: [En.root, a].filter(Boolean).join(" "),
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
                      c(o.id), n?.({ task: o });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), c(o.id), n?.({ task: o }));
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
                o.dependencies?.map((l) => /* @__PURE__ */ s("svg", { className: En.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
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
          o.id
        ))
      ]
    }
  );
}
const bN = "_root_4b64f_1", xN = "_fields_4b64f_6", vN = "_chip_4b64f_13", wN = "_table_4b64f_35", kN = "_totalRow_4b64f_55", NN = "_total_4b64f_55", br = {
  root: bN,
  fields: xN,
  chip: vN,
  table: wN,
  totalRow: kN,
  total: NN
}, hs = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Hr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function o$({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const o = t, l = n, d = r, f = (b, p, _) => {
    const x = b === "row" ? o.filter((C) => C.property !== p) : o, N = b === "col" ? l.filter((C) => C.property !== p) : l, v = b === "agg" ? d.filter((C) => !(C.property === p && C.aggregate === _)) : d;
    a?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (b, p) => p.map((_) => String(b[_.property])).join(""), g = [
    ...new Set(o.length ? e.map((b) => u(b, o)) : [""])
  ].sort(), m = [
    ...new Set(l.length ? e.map((b) => u(b, l)) : [""])
  ].sort(), y = (b, p, _) => {
    const x = e.filter(
      (v) => u(v, o) === b && u(v, l) === p
    ), N = x.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !N.length && _.aggregate !== "Count" ? 0 : hs[_.aggregate](
      _.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, h = (b, p, _, x) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: br.chip,
      "aria-label": `Remove ${b} field ${_}`,
      onClick: () => f(b, p, x),
      children: [
        _,
        x ? ` (${x})` : ""
      ]
    },
    `${b}-${_}-${x ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [br.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: br.fields, children: [
      o.map((b) => h("row", b.property, b.title ?? b.property)),
      l.map((b) => h("col", b.property, b.title ?? b.property)),
      d.map(
        (b) => h("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: br.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        m.map((b) => /* @__PURE__ */ s("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        g.map((b) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: b || "—" }),
          m.map((p) => /* @__PURE__ */ s(
            "td",
            {
              title: Hr(
                y(
                  b,
                  p,
                  d[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: d.length ? Hr(y(b, p, d[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ s("td", { className: br.total, children: d.length ? Hr(
            hs[d[0].aggregate](
              m.flatMap(
                (p) => e.filter(
                  (_) => u(_, o) === b && u(_, l) === p
                ).map((_) => Number(_[d[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ D("tr", { className: br.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          m.map((b) => /* @__PURE__ */ s("td", { children: d.length ? Hr(
            hs[d[0].aggregate](
              e.filter((p) => u(p, l) === b).map((p) => Number(p[d[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, b)),
          /* @__PURE__ */ s("td", { children: d.length ? Hr(
            hs[d[0].aggregate](
              e.map((b) => Number(b[d[0].property])).filter((b) => !Number.isNaN(b))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const SN = "_root_1r7co_1", ON = "_reverse_1r7co_10", $N = "_item_1r7co_14", EN = "_marker_1r7co_35", TN = "_body_1r7co_46", CN = "_label_1r7co_50", AN = "_content_1r7co_56", rr = {
  root: SN,
  reverse: ON,
  item: $N,
  marker: EN,
  body: TN,
  label: CN,
  content: AN
};
function a$({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const a = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [rr.root, t ? rr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: a.map((i, c) => /* @__PURE__ */ D("li", { className: rr.item, children: [
        /* @__PURE__ */ s("span", { className: rr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: rr.body, children: [
          /* @__PURE__ */ s("div", { className: rr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ s("div", { className: rr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const DN = "_root_rm4d8_1", MN = "_header_rm4d8_13", IN = "_headCell_rm4d8_22", zN = "_row_rm4d8_32", LN = "_cell_rm4d8_37", Ur = {
  root: DN,
  header: MN,
  headCell: IN,
  row: zN,
  cell: LN
};
function l$({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: a = [],
  ariaLabel: i = "Virtual grid",
  className: c
}) {
  const [o, l] = q(
    /* @__PURE__ */ new Map()
  ), [d, f] = q(0), u = ne(/* @__PURE__ */ new Set()), g = Math.ceil(n / t), m = Math.max(0, Math.floor(d / t) - 3), y = Math.min(e, m + g + 6), h = B(
    (p, _) => {
      let x = !1;
      for (let N = p; N < _; N++)
        !o.has(N) && !u.current.has(N) && (x = !0);
      if (x) {
        for (let N = p; N < _; N++) u.current.add(N);
        r({ skip: p, top: _ }).then((N) => {
          l((v) => {
            const C = new Map(v);
            return N.forEach((S, $) => C.set(p + $, S)), C;
          });
          for (let v = p; v < _; v++) u.current.delete(v);
        });
      }
    },
    [o, r]
  );
  be(() => {
    h(m, y);
  }, [m, y]);
  const b = [];
  for (let p = m; p < y; p++) {
    const _ = o.get(p) ?? {};
    b.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Ur.row,
          role: "row",
          style: { height: t },
          children: a.map((x) => /* @__PURE__ */ s(
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
        p
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
      onScroll: (p) => f(p.target.scrollTop),
      onKeyDown: (p) => {
        const _ = p.currentTarget;
        p.key === "ArrowDown" ? (p.preventDefault(), _.scrollTop += t) : p.key === "ArrowUp" ? (p.preventDefault(), _.scrollTop -= t) : p.key === "PageDown" ? (p.preventDefault(), _.scrollTop += n) : p.key === "PageUp" && (p.preventDefault(), _.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: m * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Ur.header, role: "row", children: a.map((p) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Ur.headCell,
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
    constructor(o, l, d, f) {
      if (this.version = o, this.errorCorrectionLevel = l, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
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
          const h = this.getPenaltyScore();
          h < m && (f = y, m = h), this.applyMask(y);
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
    static encodeText(o, l) {
      const d = e.QrSegment.makeSegments(o);
      return t.encodeSegments(d, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, l) {
      const d = e.QrSegment.makeBytes(o);
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
    static encodeSegments(o, l, d = 1, f = 40, u = -1, g = !0) {
      if (!(t.MIN_VERSION <= d && d <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let m, y;
      for (m = d; ; m++) {
        const _ = t.getNumDataCodewords(m, l) * 8, x = i.getTotalBits(o, m);
        if (x <= _) {
          y = x;
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
      let h = [];
      for (const _ of o) {
        n(_.mode.modeBits, 4, h), n(_.numChars, _.mode.numCharCountBits(m), h);
        for (const x of _.getData()) h.push(x);
      }
      a(h.length == y);
      const b = t.getNumDataCodewords(m, l) * 8;
      a(h.length <= b), n(0, Math.min(4, b - h.length), h), n(0, (8 - h.length % 8) % 8, h), a(h.length % 8 == 0);
      for (let _ = 236; h.length < b; _ ^= 253)
        n(_, 8, h);
      let p = [];
      for (; p.length * 8 < h.length; ) p.push(0);
      return h.forEach(
        (_, x) => p[x >>> 3] |= _ << 7 - (x & 7)
      ), new t(m, l, p, u);
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
    getModule(o, l) {
      return 0 <= o && o < this.size && 0 <= l && l < this.size && this.modules[l][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let d = 0; d < this.size; d++)
        this.setFunctionModule(6, d, d % 2 == 0), this.setFunctionModule(d, 6, d % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), l = o.length;
      for (let d = 0; d < l; d++)
        for (let f = 0; f < l; f++)
          d == 0 && f == 0 || d == 0 && f == l - 1 || d == l - 1 && f == 0 || this.drawAlignmentPattern(o[d], o[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const l = this.errorCorrectionLevel.formatBits << 3 | o;
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
      let o = this.version;
      for (let d = 0; d < 12; d++) o = o << 1 ^ (o >>> 11) * 7973;
      const l = this.version << 12 | o;
      a(l >>> 18 == 0);
      for (let d = 0; d < 18; d++) {
        const f = r(l, d), u = this.size - 11 + d % 3, g = Math.floor(d / 3);
        this.setFunctionModule(u, g, f), this.setFunctionModule(g, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, l) {
      for (let d = -4; d <= 4; d++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(d)), g = o + f, m = l + d;
          0 <= g && g < this.size && 0 <= m && m < this.size && this.setFunctionModule(g, m, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, l) {
      for (let d = -2; d <= 2; d++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            o + f,
            l + d,
            Math.max(Math.abs(f), Math.abs(d)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, l, d) {
      this.modules[l][o] = d, this.isFunction[l][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const l = this.version, d = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(l, d))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], u = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], g = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), m = f - g % f, y = Math.floor(g / f);
      let h = [];
      const b = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, x = 0; _ < f; _++) {
        let N = o.slice(
          x,
          x + y - u + (_ < m ? 0 : 1)
        );
        x += N.length;
        const v = t.reedSolomonComputeRemainder(N, b);
        _ < m && N.push(0), h.push(N.concat(v));
      }
      let p = [];
      for (let _ = 0; _ < h[0].length; _++)
        h.forEach((x, N) => {
          (_ != y - u || N >= m) && p.push(x[_]);
        });
      return a(p.length == g), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let d = this.size - 1; d >= 1; d -= 2) {
        d == 6 && (d = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const g = d - u, y = (d + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[y][g] && l < o.length * 8 && (this.modules[y][g] = r(o[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      a(l == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let d = 0; d < this.size; d++) {
          let f;
          switch (o) {
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
      let o = 0;
      for (let u = 0; u < this.size; u++) {
        let g = !1, m = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[u][h] == g ? (m++, m == 5 ? o += t.PENALTY_N1 : m > 5 && o++) : (this.finderPenaltyAddHistory(m, y), g || (o += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), g = this.modules[u][h], m = 1);
        o += this.finderPenaltyTerminateAndCount(g, m, y) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let g = !1, m = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[h][u] == g ? (m++, m == 5 ? o += t.PENALTY_N1 : m > 5 && o++) : (this.finderPenaltyAddHistory(m, y), g || (o += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), g = this.modules[h][u], m = 1);
        o += this.finderPenaltyTerminateAndCount(g, m, y) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let g = 0; g < this.size - 1; g++) {
          const m = this.modules[u][g];
          m == this.modules[u][g + 1] && m == this.modules[u + 1][g] && m == this.modules[u + 1][g + 1] && (o += t.PENALTY_N2);
        }
      let l = 0;
      for (const u of this.modules)
        l = u.reduce((g, m) => g + (m ? 1 : 0), l);
      const d = this.size * this.size, f = Math.ceil(Math.abs(l * 20 - d * 10) / d) - 1;
      return a(0 <= f && f <= 9), o += f * t.PENALTY_N4, a(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, l = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let d = [6];
        for (let f = this.size - 7; d.length < o; f -= l)
          d.splice(1, 0, f);
        return d;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const d = Math.floor(o / 7) + 2;
        l -= (25 * d - 10) * d - 55, o >= 7 && (l -= 36);
      }
      return a(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, l) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let f = 0; f < o - 1; f++) l.push(0);
      l.push(1);
      let d = 1;
      for (let f = 0; f < o; f++) {
        for (let u = 0; u < l.length; u++)
          l[u] = t.reedSolomonMultiply(l[u], d), u + 1 < l.length && (l[u] ^= l[u + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, l) {
      let d = l.map((f) => 0);
      for (const f of o) {
        const u = f ^ d.shift();
        d.push(0), l.forEach(
          (g, m) => d[m] ^= t.reedSolomonMultiply(g, u)
        );
      }
      return d;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, l) {
      if (o >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let d = 0;
      for (let f = 7; f >= 0; f--)
        d = d << 1 ^ (d >>> 7) * 285, d ^= (l >>> f & 1) * o;
      return a(d >>> 8 == 0), d;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const l = o[1];
      a(l <= this.size * 3);
      const d = l > 0 && o[2] == l && o[3] == l * 3 && o[4] == l && o[5] == l;
      return (d && o[0] >= l * 4 && o[6] >= l ? 1 : 0) + (d && o[6] >= l * 4 && o[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, l, d) {
      return o && (this.finderPenaltyAddHistory(l, d), l = 0), l += this.size, this.finderPenaltyAddHistory(l, d), this.finderPenaltyCountPatterns(d);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, l) {
      l[0] == 0 && (o += this.size), l.pop(), l.unshift(o);
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
  function n(c, o, l) {
    if (o < 0 || o > 31 || c >>> o)
      throw new RangeError("Value out of range");
    for (let d = o - 1; d >= 0; d--)
      l.push(c >>> d & 1);
  }
  function r(c, o) {
    return (c >>> o & 1) != 0;
  }
  function a(c) {
    if (!c) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, l, d) {
      if (this.mode = o, this.numChars = l, this.bitData = d, l < 0) throw new RangeError("Invalid argument");
      this.bitData = d.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let l = [];
      for (const d of o) n(d, 8, l);
      return new i(i.Mode.BYTE, o.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!i.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let d = 0; d < o.length; ) {
        const f = Math.min(o.length - d, 3);
        n(parseInt(o.substring(d, d + f), 10), f * 3 + 1, l), d += f;
      }
      return new i(i.Mode.NUMERIC, o.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!i.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let l = [], d;
      for (d = 0; d + 2 <= o.length; d += 2) {
        let f = i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(d)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(d + 1)), n(f, 11, l);
      }
      return d < o.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(d)),
        6,
        l
      ), new i(i.Mode.ALPHANUMERIC, o.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : i.isNumeric(o) ? [i.makeNumeric(o)] : i.isAlphanumeric(o) ? [i.makeAlphanumeric(o)] : [i.makeBytes(i.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let l = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, l);
      else if (o < 16384)
        n(2, 2, l), n(o, 14, l);
      else if (o < 1e6)
        n(6, 3, l), n(o, 21, l);
      else throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, l);
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
    static getTotalBits(o, l) {
      let d = 0;
      for (const f of o) {
        const u = f.mode.numCharCountBits(l);
        if (f.numChars >= 1 << u) return 1 / 0;
        d += 4 + u + f.bitData.length;
      }
      return d;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let l = [];
      for (let d = 0; d < o.length; d++)
        o.charAt(d) != "%" ? l.push(o.charCodeAt(d)) : (l.push(parseInt(o.substring(d + 1, d + 3), 16)), d += 2);
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
const RN = "_root_1leml_1", PN = {
  root: RN
}, jN = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function i$({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: o
}) {
  const l = i ?? `QR code for ${e}`, d = ne(null), f = ao("(prefers-color-scheme: dark)"), [u, g] = q(null);
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
      return vn.QrCode.encodeText(e, jN[r]);
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
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (y.current?.value !== e || y.current?.onError !== o) && (y.current = { value: e, onError: o }, o?.(N));
  }, [m, e, o]);
  const h = Math.max(0, Math.floor(a)), b = [PN.root, c].filter(Boolean).join(" ");
  if (be(() => {
    if (n !== "canvas" || m === null) return;
    const N = d.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const C = getComputedStyle(N), S = C.getPropertyValue("--dx-text-color").trim() || "#000", $ = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    BN(v, m, t, h, S, $);
  }, [n, m, t, h, f, u]), m === null)
    return /* @__PURE__ */ s("div", { className: b, role: "img", "aria-label": l, "data-qr-error": "true" });
  const p = m.size + h * 2, _ = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ s(
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
        /* @__PURE__ */ s(
          "rect",
          {
            x: (v + h) * _,
            y: (N + h) * _,
            width: _ + 0.5,
            height: _ + 0.5
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
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function BN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let o = 0; o < t.size; o++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, o) && e.fillRect((l + r) * c, (o + r) * c, c + 0.5, c + 0.5);
}
const FN = "_root_1v9la_1", HN = "_value_1v9la_9", ya = {
  root: FN,
  value: HN
}, ba = [
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
], xa = 104, UN = 106;
function qN(e) {
  const t = [xa];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = xa;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, UN), t;
}
function c$({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: a,
  className: i
}) {
  const c = a ?? `Barcode ${e}`, o = Oe(() => {
    const l = [];
    let d = 0;
    for (const f of qN(e)) {
      const u = ba[f] ?? ba[0];
      for (let g = 0; g < u.length; g++) {
        const m = Number(u[g]);
        g % 2 === 0 && l.push({ x: d, w: m }), d += m;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [ya.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${o.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": c,
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
          o.modules.map((l, d) => /* @__PURE__ */ s(
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
    r && /* @__PURE__ */ s("span", { className: ya.value, children: e })
  ] });
}
const WN = "_root_16i43_1", KN = "_svg_16i43_10", GN = "_gridline_16i43_15", VN = "_tickLabel_16i43_21", YN = "_axisTitle_16i43_27", XN = "_dataLabel_16i43_34", ZN = "_gaugeValue_16i43_40", JN = "_legend_16i43_47", QN = "_legendItem_16i43_55", eS = "_swatch_16i43_63", tS = "_tooltip_16i43_70", nS = "_visuallyHidden_16i43_84", dt = {
  root: WN,
  svg: KN,
  gridline: GN,
  tickLabel: VN,
  axisTitle: YN,
  dataLabel: XN,
  gaugeValue: ZN,
  legend: JN,
  legendItem: QN,
  swatch: eS,
  tooltip: tS,
  visuallyHidden: nS
}, va = [
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
  "highlow"
]), rS = /* @__PURE__ */ new Set([...Xa, "heatmap"]);
function sS(e, t, n) {
  const r = t - e || 1, a = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / a) * a, c = Math.ceil(t / a) * a, o = [];
  for (let l = i; l <= c + 1e-9; l += a)
    o.push(Number(l.toFixed(6)));
  return { min: i, max: c, step: a, ticks: o };
}
function oS(e) {
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
function Bn(e, t, n) {
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
function uo(e, t, n, r, a) {
  const i = r.markers ?? {};
  if (i.visible === !1) return null;
  const c = i.shape ?? "circle", o = i.size ?? a, l = "var(--dx-surface-color)";
  return c === "square" ? /* @__PURE__ */ s(
    "rect",
    {
      x: e - o,
      y: t - o,
      width: o * 2,
      height: o * 2,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : c === "diamond" ? /* @__PURE__ */ s(
    "path",
    {
      d: `M ${e} ${t - o} L ${e + o} ${t} L ${e} ${t + o} L ${e - o} ${t} Z`,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : c === "triangle" ? /* @__PURE__ */ s(
    "path",
    {
      d: `M ${e} ${t - o} L ${e + o} ${t + o} L ${e - o} ${t + o} Z`,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  ) : /* @__PURE__ */ s(
    "circle",
    {
      cx: e,
      cy: t,
      r: o,
      fill: n,
      stroke: l,
      strokeWidth: 1.5
    }
  );
}
function aS(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Yr(e, t) {
  return e.percent ? `${t}%` : String(t);
}
function lS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((u, g) => [u, g])), o = n.map((u) => {
    const g = c.get(u.cat) ?? 0, m = u.min, y = u.max;
    return typeof m != "number" || Number.isNaN(m) || typeof y != "number" || Number.isNaN(y) ? null : { x: r(g), lo: a(m), hi: a(y) };
  });
  if (o.some((u) => u == null)) return null;
  const l = o.map((u) => `L ${u.x} ${u.hi}`).join(" "), d = [...o].reverse().map((u) => `L ${u.x} ${u.lo}`).join(" "), f = o[0];
  return /* @__PURE__ */ s(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${l} ${d} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function iS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: o } = e, l = i.l + c / 2, d = i.t + o / 2, f = Math.min(c, o) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, g = r.reduce((y, h) => y + (Number(h.val) || 0), 0);
  let m = -90;
  return Bn(
    n,
    t,
    r.map((y, h) => {
      const b = g ? y.val / g * 360 : 0, p = m, _ = m + b;
      m = _;
      const x = b > 180 ? 1 : 0, N = l + f * Math.cos(Ut(p)), v = d + f * Math.sin(Ut(p)), C = l + f * Math.cos(Ut(_)), S = d + f * Math.sin(Ut(_)), $ = l + u * Math.cos(Ut(_)), E = d + u * Math.sin(Ut(_)), I = l + u * Math.cos(Ut(p)), M = d + u * Math.sin(Ut(p)), T = u ? `M ${N} ${v} A ${f} ${f} 0 ${x} 1 ${C} ${S} L ${$} ${E} A ${u} ${u} 0 ${x} 0 ${I} ${M} Z` : `M ${l} ${d} L ${N} ${v} A ${f} ${f} 0 ${x} 1 ${C} ${S} Z`, w = (p + _) / 2, k = l + (f + 12) * Math.cos(Ut(w)), A = d + (f + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
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
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: k,
            y: A,
            textAnchor: "middle",
            className: dt.dataLabel,
            children: y.val
          }
        )
      ] }, h);
    })
  );
}
function cS(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: o, xFor: l, yFor: d, categories: f } = e, u = new Map(f.map((g, m) => [g, m]));
  return Bn(
    n,
    t,
    r.map((g, m) => {
      const y = u.get(g.cat) ?? 0, h = Number(r[m].cat), b = Number.isNaN(h) ? l(y) : i.l + (h - o.min) / (o.max - o.min || 1) * c, p = d(g.val), _ = t.type === "bubble" && g.size !== void 0 ? Math.max(4, Math.min(12, g.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        uo(b, p, a, t, _),
        /* @__PURE__ */ s(
          "circle",
          {
            cx: b,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, p, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, m);
    })
  );
}
function dS(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: o, categories: l, series: d } = e, f = new Map(l.map((y, h) => [y, h])), u = (y) => {
    if (!t.stack) return i.min;
    let h = 0;
    for (let b = 0; b < n; b++) {
      const p = d[b];
      if (p?.stack !== t.stack) continue;
      const _ = p.data.find(
        (x) => String(x[p.categoryProperty] ?? "") === y
      );
      _ && (h += Number(_[p.valueProperty]) || 0);
    }
    return h;
  }, g = r.map((y) => {
    const h = f.get(y.cat) ?? 0, b = u(y.cat);
    return `${h === 0 ? "M" : "L"} ${c(h)} ${o(b + y.val)}`;
  }).join(" "), m = r.map((y) => {
    const h = f.get(y.cat) ?? 0, b = u(y.cat);
    return `${h === 0 ? "M" : "L"} ${c(h)} ${o(b)}`;
  }).join(" ");
  return Bn(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      t.type === "area" && /* @__PURE__ */ s(
        "path",
        {
          d: `${g} L ${c(r.length - 1)} ${o(u(r[r.length - 1].cat))} L ${c(0)} ${o(u(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      lS(e, t, r),
      /* @__PURE__ */ s(
        "path",
        {
          d: g,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: aS(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ s("path", { d: m, fill: "none", stroke: "transparent" }),
      r.map((y, h) => {
        const b = f.get(y.cat) ?? 0, p = u(y.cat), _ = c(b), x = o(p + y.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          uo(_, x, a, t, 4),
          /* @__PURE__ */ s(
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
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: _,
              y: x - 8,
              textAnchor: "middle",
              className: dt.dataLabel,
              children: Yr(e, y.val)
            }
          )
        ] }, h);
      })
    ] })
  );
}
function uS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: o, scale: l, xFor: d, yFor: f, categories: u, series: g } = e, m = new Map(u.map((h, b) => [h, b])), y = t.type === "bar";
  return Bn(
    n,
    t,
    r.map((h, b) => {
      const p = m.get(h.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const A = g[k];
          if (A?.stack !== t.stack) continue;
          const R = A.data.find(
            (z) => String(z[A.categoryProperty] ?? "") === h.cat
          );
          R && (_ += Number(R[A.valueProperty]) || 0);
        }
      const x = _ + h.val, N = typeof h.min == "number" && !Number.isNaN(h.min) && typeof h.max == "number" && !Number.isNaN(h.max), v = g.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, C = c / Math.max(1, u.length), S = y ? 18 : Math.max(12, C / (t.stack ? 1 : g.length) - 4), $ = y ? i.l + _ / (l.max - l.min || 1) * c : d(p) - S / 2 + (t.stack ? 0 : n % v * S), E = y ? i.t + p * o / Math.max(1, u.length) + 4 : f(N ? _ + h.max : x), I = y ? N ? (h.max - h.min) / (l.max - l.min || 1) * c : h.val / (l.max - l.min || 1) * c : S - 4, M = y ? 16 : N ? f(_ + h.min) - f(_ + h.max) : f(_) - f(x), T = y ? i.l + (_ + (N ? h.min : 0)) / (l.max - l.min || 1) * c : $, w = y ? i.t + p * o / Math.max(1, u.length) + 4 : E;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
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
              `${t.title ?? h.cat}: ${Yr(e, h.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: T + (y ? I : S) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: dt.dataLabel,
            children: Yr(e, h.val)
          }
        )
      ] }, b);
    })
  );
}
function fS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: o, scale: l, tooltipVisible: d, showTip: f, hideTip: u } = e, g = i.l + c / 2, m = i.t + o * 0.78, y = Math.min(c, o) * 0.36, h = 135, b = 270, p = r.reduce((C, S) => C + (Number(S.val) || 0), 0), _ = l.max - l.min || 1, x = Math.min(1, Math.max(0, (p - l.min) / _)), N = (C, S) => {
    const [$, E] = [
      g + y * Math.cos(Ut(C)),
      m + y * Math.sin(Ut(C))
    ], [I, M] = [
      g + y * Math.cos(Ut(S)),
      m + y * Math.sin(Ut(S))
    ], T = S - C > 180 ? 1 : 0;
    return `M ${$} ${E} A ${y} ${y} 0 ${T} 1 ${I} ${M}`;
  }, v = Number(p.toFixed(2));
  return Bn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: N(h, h + b),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      x > 0 && /* @__PURE__ */ s(
        "path",
        {
          d: N(h, h + b * x),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s("text", { x: g, y: m - 4, textAnchor: "middle", className: dt.gaugeValue, children: v }),
      /* @__PURE__ */ s(
        "path",
        {
          d: N(h, h + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && f(g, m - y, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", p, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ s(
        "text",
        {
          x: g,
          y: m + y + 18,
          textAnchor: "middle",
          className: dt.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Za(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, o = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (u) => Ut(-90 + 360 * u / l);
  return { cx: i, cy: c, radius: o, angleFor: d, vertexFor: (u, g) => {
    const m = d(u);
    return [
      i + o * g * Math.cos(m),
      c + o * g * Math.sin(m)
    ];
  } };
}
function _S(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = Za(e);
  return /* @__PURE__ */ D("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((c) => /* @__PURE__ */ s(
      "polygon",
      {
        points: t.map((o, l) => a(l, c).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      c
    )),
    t.map((c, o) => {
      const [l, d] = a(o, 1);
      return /* @__PURE__ */ s(
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
function pS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: o, hideTip: l } = e, { cx: d, cy: f, radius: u, angleFor: g, vertexFor: m } = Za(e), y = e.scale.max || 1, h = (p) => r.find((_) => _.cat === p)?.val ?? 0, b = i.map((p, _) => {
    const x = Math.min(1, Math.max(0, h(p) / y)), [N, v] = m(_, x);
    return `${N},${v}`;
  }).join(" ");
  return Bn(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      /* @__PURE__ */ s(
        "polygon",
        {
          points: b,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: 2
        }
      ),
      i.map((p, _) => {
        const x = Math.min(1, Math.max(0, h(p) / y)), [N, v] = m(_, x), [C, S] = m(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
            "circle",
            {
              cx: N,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && o(C, S, `${t.title ?? p}: ${h(p)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const $ = r.find((E) => E.cat === p);
                $ && e.handleClick(t, $.cat, $.val, $.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s(
            "text",
            {
              x: d + (u + 14) * Math.cos(g(_)),
              y: f + (u + 14) * Math.sin(g(_)) + 4,
              textAnchor: "middle",
              className: dt.tickLabel,
              children: p
            }
          )
        ] }, p);
      })
    ] })
  );
}
function hS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: o, tooltipVisible: l, showTip: d, hideTip: f } = e, u = r, g = Math.max(1, ...u.map((h) => Number(h.val) || 0)), m = o / Math.max(1, u.length), y = i.l + c / 2;
  return Bn(
    n,
    t,
    u.map((h, b) => {
      const _ = Math.max(0, Number(h.val) || 0) / g * c, x = u[b + 1], N = x ? Math.max(0, Number(x.val) || 0) / g * c : _ * 0.7, v = i.t + b * m + 2, C = Math.max(4, m - 6), S = 1 - b * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: `M ${y - _ / 2} ${v} L ${y + _ / 2} ${v} L ${y + N / 2} ${v + C} L ${y - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(y, v, `${t.title ?? h.cat}: ${h.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: y,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: dt.dataLabel,
            children: [
              h.cat,
              " · ",
              h.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function mS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: o, categories: l, tooltipVisible: d, showTip: f, hideTip: u } = e, g = [];
  t.data.forEach((x) => {
    const N = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    g.includes(N) || g.push(N);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), y = m.length ? Math.min(...m) : 0, h = m.length ? Math.max(...m) : 1, b = c / Math.max(1, l.length), p = o / Math.max(1, g.length), _ = (x) => h === y ? 0.6 : 0.15 + 0.85 * ((x - y) / (h - y));
  return Bn(
    n,
    t,
    /* @__PURE__ */ D(ot, { children: [
      g.map((x, N) => /* @__PURE__ */ s(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * p + p / 2 + 4,
          textAnchor: "end",
          className: dt.tickLabel,
          children: x
        },
        x
      )),
      r.map((x, N) => {
        const v = t.data[N], C = l.indexOf(x.cat), S = g.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (C < 0 || S < 0) return null;
        const $ = i.l + C * b, E = i.t + S * p;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "rect",
            {
              x: $ + 1,
              y: E + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, p - 2),
              fill: a,
              fillOpacity: _(x.val),
              onMouseEnter: () => d && f($ + b / 2, E, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: $ + b / 2,
              y: E + p / 2 + 4,
              textAnchor: "middle",
              className: dt.dataLabel,
              children: x.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function gS(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: o } = e, l = new Map(o.map((m, y) => [m, y])), d = e.plotW / Math.max(1, o.length), f = Math.max(8, Math.min(28, d / 2 - 4)), u = t.upColor ?? a, g = t.downColor ?? "var(--dx-danger-color)";
  return Bn(
    n,
    t,
    r.map((m, y) => {
      const h = l.get(m.cat) ?? 0, b = i(h), p = m.close ?? m.val, _ = typeof m.open == "number" && !Number.isNaN(m.open) && typeof m.high == "number" && !Number.isNaN(m.high) && typeof m.low == "number" && !Number.isNaN(m.low) && typeof p == "number" && !Number.isNaN(p), x = _ && p >= m.open, N = `${t.title ?? m.cat}: O ${m.open ?? "–"} H ${m.high ?? "–"} L ${m.low ?? "–"} C ${p}`;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        _ && t.type === "candlestick" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ s(
            "line",
            {
              x1: b,
              y1: c(m.high),
              x2: b,
              y2: c(m.low),
              stroke: x ? u : g,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ s(
            "rect",
            {
              x: b - f / 2,
              y: c(Math.max(m.open, p)),
              width: f,
              height: Math.max(2, c(Math.min(m.open, p)) - c(Math.max(m.open, p))),
              fill: x ? u : "none",
              stroke: x ? u : g,
              strokeWidth: 1.5
            }
          )
        ] }),
        _ && t.type === "ohlc" && /* @__PURE__ */ D(ot, { children: [
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
            "line",
            {
              x1: b - f / 2,
              y1: c(m.open),
              x2: b,
              y2: c(m.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ s(
            "line",
            {
              x1: b,
              y1: c(p),
              x2: b + f / 2,
              y2: c(p),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        _ && t.type === "highlow" && /* @__PURE__ */ s(
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
        !_ && uo(
          b,
          c(p),
          a,
          t,
          4
        ),
        /* @__PURE__ */ s(
          "rect",
          {
            x: b - 14,
            y: c(p) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, c(p), N),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, p, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: b,
            y: c(p) - 8,
            textAnchor: "middle",
            className: dt.dataLabel,
            children: Yr(e, p)
          }
        )
      ] }, y);
    })
  );
}
function yS(e, t, n) {
  const r = oS(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return iS(e, t, n, r, a);
    case "scatter":
    case "bubble":
      return cS(e, t, n, r, a);
    case "line":
    case "area":
      return dS(e, t, n, r, a);
    case "gauge":
      return fS(e, t, n, r, a);
    case "radar":
      return pS(e, t, n, r, a);
    case "funnel":
      return hS(e, t, n, r, a);
    case "heatmap":
      return mS(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return gS(e, t, n, r, a);
    default:
      return uS(e, t, n, r, a);
  }
}
function d$({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: a,
  showLegend: i = !0,
  stacked100Percent: c = !1,
  tooltipVisible: o = !0,
  onSeriesClick: l,
  ariaLabel: d = "Chart",
  className: f
}) {
  const [u, g] = q(
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
  }, [e, c]), h = Oe(() => {
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
  }, [y]), b = r?.min ?? (h.length ? Math.min(0, ...h) : 0), p = r?.max ?? (h.length ? Math.max(...h) : 10), _ = Oe(
    () => sS(b, p, r?.step),
    [b, p, r?.step]
  ), x = { t: 16, r: 16, b: 40, l: 56 }, N = t - x.l - x.r, v = n - x.t - x.b, C = (T) => x.l + T / Math.max(1, m.length - 1) * N, S = (T) => x.t + (1 - (T - _.min) / (_.max - _.min || 1)) * v, $ = (T, w) => w.color ?? va[T % va.length], E = e.some((T) => Xa.has(T.type)), I = e.some((T) => rS.has(T.type)), M = {
    categories: m,
    scale: _,
    pad: x,
    plotW: N,
    plotH: v,
    xFor: C,
    yFor: S,
    colorFor: $,
    tooltipVisible: o,
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
      className: [dt.root, f].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: dt.svg,
            role: "presentation",
            children: [
              E && r?.gridlines !== !1 && _.ticks.map((T) => /* @__PURE__ */ s(
                "line",
                {
                  x1: x.l,
                  x2: x.l + N,
                  y1: S(T),
                  y2: S(T),
                  className: dt.gridline
                },
                T
              )),
              I && a?.gridlines && m.map((T, w) => /* @__PURE__ */ s(
                "line",
                {
                  x1: C(w),
                  x2: C(w),
                  y1: x.t,
                  y2: x.t + v,
                  className: dt.gridline
                },
                w
              )),
              E && _.ticks.map((T) => /* @__PURE__ */ s(
                "text",
                {
                  x: x.l - 8,
                  y: S(T) + 4,
                  textAnchor: "end",
                  className: dt.tickLabel,
                  children: c ? `${T}%` : T
                },
                T
              )),
              I && m.map((T, w) => /* @__PURE__ */ s(
                "text",
                {
                  x: C(w),
                  y: x.t + v + 16,
                  textAnchor: "middle",
                  className: dt.tickLabel,
                  children: T
                },
                T
              )),
              E && r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: x.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${x.t + v / 2})`,
                  className: dt.axisTitle,
                  children: r.title
                }
              ),
              I && a?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: x.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: dt.axisTitle,
                  children: a.title
                }
              ),
              e.some((T) => T.type === "radar") && _S(M),
              y.map((T, w) => yS(M, T, w))
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: dt.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ s("div", { className: dt.legend, children: e.map((T, w) => /* @__PURE__ */ D("span", { className: dt.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: dt.swatch,
              style: { backgroundColor: $(w, T) },
              "aria-hidden": "true"
            }
          ),
          T.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: dt.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: d }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (T) => T.data.map((w, k) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ s("td", { children: T.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: T.rowProperty ? `${String(w[T.rowProperty] ?? "")} / ${String(w[T.categoryProperty] ?? "")}` : String(w[T.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(w[T.valueProperty] ?? "") })
                ] }, `${T.title}-${k}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function u$({ query: e, children: t }) {
  return ao(e) ? /* @__PURE__ */ s(ot, { children: t }) : null;
}
function f$({ children: e, className: t }) {
  return /* @__PURE__ */ s("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function _$() {
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
  eO as AIChat,
  _p as ALERT_ICON,
  kO as Accordion,
  aO as Alert,
  ZS as ArcGauge,
  OO as AutoComplete,
  uO as AutoGrid,
  vO as Avatar,
  wS as Badge,
  c$ as Barcode,
  _O as Body,
  YO as Breadcrumb,
  ln as Button,
  vS as Card,
  e$ as Carousel,
  d$ as Chart,
  su as CheckBox,
  EO as CheckBoxList,
  IO as ColorPicker,
  cO as Column,
  qO as ContextMenuProvider,
  Tr as DEFAULT_OPERATOR_BY_TYPE,
  wv as DEFAULT_PALETTE,
  Mb as DEFAULT_THEMES,
  BS as DataFilter,
  FS as DataGrid,
  HS as DataList,
  zO as DatePicker,
  Ea as Dialog,
  GS as DialogProvider,
  SO as DropDown,
  HO as DropZone,
  OS as EmptyState,
  Na as FILTER_OPERATORS,
  VO as FabMenu,
  ar as Field,
  ES as Fieldset,
  nb as Footer,
  TS as Form,
  $S as FormField,
  s$ as Gantt,
  ob as Header,
  rO as HtmlEditor,
  Me as Icon,
  ns as Input,
  US as Label,
  fO as Layout,
  QS as LinearGauge,
  XO as Link,
  $O as ListBox,
  f$ as LiveRegion,
  tO as Login,
  nO as Markdown,
  DO as Mask,
  u$ as MediaQuery,
  Aw as Menu,
  Ga as MenuItem,
  MO as Numeric,
  Bc as Pager,
  KO as PanelMenu,
  WO as PanelMenuItem,
  zf as Password,
  n$ as PickList,
  o$ as Pivot,
  oO as PopupProvider,
  GO as ProfileMenu,
  hO as Progress,
  i$ as QRCode,
  JS as RadialGauge,
  TO as RadioButtonList,
  XS as RangeNavigator,
  LO as Rating,
  iO as Row,
  r$ as Scheduler,
  jO as SecurityCode,
  lr as Select,
  CO as SelectBar,
  gb as Sidebar,
  pO as SidebarToggle,
  BO as SignaturePad,
  lO as Skeleton,
  RO as Slider,
  AO as SplitButton,
  JO as Splitter,
  dO as Stack,
  NS as Stat,
  ZO as Steps,
  qS as Switch,
  SS as Table,
  wO as Tabs,
  Ta as Text,
  NO as TextArea,
  so as TextBox,
  mO as ThemeSwitcher,
  gO as ThemeToggle,
  PO as TimeSpanPicker,
  a$ as Timeline,
  YS as ToastProvider,
  QO as Toc,
  Bb as ToggleButton,
  WS as Tooltip,
  t$ as Tree,
  FO as Upload,
  l$ as VirtualGrid,
  Vc as aggregateValue,
  Oa as applyFilters,
  Gc as applyGridState,
  So as collectGroupKeys,
  sr as columnValue,
  LS as compare,
  PS as custom,
  qc as cycleSort,
  $o as defaultOperatorForType,
  AS as email,
  ia as formatMasked,
  ys as formatValue,
  bO as getAppearance,
  gs as getByPath,
  yO as getTheme,
  Fc as groupItems,
  kS as iconNames,
  Sa as matchesFilters,
  IS as maxLength,
  MS as minLength,
  Kc as paginate,
  DS as pattern,
  zS as range,
  N_ as renderMarkdown,
  CS as required,
  RS as requiredTrue,
  wa as resolveVariant,
  Gi as runValidators,
  Wb as setAppearance,
  qb as setTheme,
  Vr as shadeClass,
  dc as sortItems,
  Wc as sortedItems,
  aa as subscribe,
  Yc as toCsv,
  oc as toFilterString,
  cc as toODataFilterString,
  UO as useContextMenu,
  KS as useDialog,
  Ki as useFormContext,
  jS as useFormField,
  _$ as useLiveRegion,
  ao as useMediaQuery,
  sO as usePopup,
  xO as useThemeService,
  VS as useToast
};
