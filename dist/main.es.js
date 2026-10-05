import { jsx as o, jsxs as A, Fragment as rt } from "react/jsx-runtime";
import { forwardRef as at, useId as lt, isValidElement as Wt, cloneElement as os, useState as W, useRef as ne, useCallback as B, useMemo as Se, useContext as Bn, createContext as ir, useEffect as be, Fragment as ss, useLayoutEffect as Wo, useImperativeHandle as ko, Children as Xr } from "react";
function Vr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const al = "_button_eyvws_1", ll = "_filled_eyvws_36", il = "_flat_eyvws_55", cl = "_outlined_eyvws_58", dl = "_text_eyvws_63", ul = "_loading_eyvws_506", fl = "_spinner_eyvws_509", _l = "_xs_eyvws_525", pl = "_sm_eyvws_531", hl = "_md_eyvws_537", ml = "_lg_eyvws_543", gl = "_xl_eyvws_549", yl = "_iconOnly_eyvws_555", bl = "_fullWidth_eyvws_585", Mn = {
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
  xs: _l,
  sm: pl,
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
const ln = at(
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
    const p = xl(r, a), h = p.style === "light" || p.style === "dark" ? null : Vr(i), _ = [
      Mn.button,
      Mn[p.variant],
      Mn[`style-${p.style}`],
      h ? Mn[h] : null,
      Mn[c],
      s ? Mn.fullWidth : null,
      l ? Mn.iconOnly : null,
      d ? Mn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ A(rt, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Mn.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: $, ...O } = g, T = y || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: _,
          "aria-disabled": T || void 0,
          "aria-busy": d || void 0,
          onClick: (I) => {
            if (T) {
              I.preventDefault();
              return;
            }
            $?.(I);
          },
          ...O,
          children: x
        }
      );
    }
    const { type: w = "button", ...M } = g;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: w,
        className: _,
        disabled: y || d,
        "aria-busy": d || void 0,
        ...M,
        children: x
      }
    );
  }
), vl = "_card_4vcae_1", wl = "_elevated_4vcae_8", kl = "_filled_4vcae_13", Nl = "_outlined_4vcae_18", $l = "_interactive_4vcae_22", Sl = "_text_4vcae_30", Ol = "_header_4vcae_46", El = "_body_4vcae_53", Tl = "_footer_4vcae_63", $r = {
  card: vl,
  elevated: wl,
  filled: kl,
  outlined: Nl,
  interactive: $l,
  text: Sl,
  header: Ol,
  body: El,
  footer: Tl
}, A$ = at(function({
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
    /* @__PURE__ */ A(
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
const Cl = "_badge_1fy6d_1", Ml = "_xs_1fy6d_21", Al = "_sm_1fy6d_26", Dl = "_md_1fy6d_31", Il = "_lg_1fy6d_36", Ll = "_xl_1fy6d_41", zl = "_neutral_1fy6d_47", Rl = "_primary_1fy6d_52", Pl = "_secondary_1fy6d_61", jl = "_light_1fy6d_66", Bl = "_base_1fy6d_71", Fl = "_dark_1fy6d_76", Hl = "_info_1fy6d_81", Ul = "_success_1fy6d_86", Wl = "_warning_1fy6d_95", ql = "_danger_1fy6d_104", Kl = "_filled_1fy6d_111", Gl = "_outlined_1fy6d_161", Vl = "_text_1fy6d_213", Sr = {
  badge: Cl,
  xs: Ml,
  sm: Al,
  md: Dl,
  lg: Il,
  xl: Ll,
  neutral: zl,
  primary: Rl,
  secondary: Pl,
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
}, D$ = at(function({
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
  const u = t, f = Na(n, "filled"), y = Vr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Sr.badge,
        Sr[a],
        Sr[u],
        Sr[f],
        y ? Sr[y] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Yl = "_icon_vn4jx_5", Xl = "_xs_vn4jx_24", Zl = "_sm_vn4jx_28", Jl = "_md_vn4jx_23", Ql = "_lg_vn4jx_36", ei = "_xl_vn4jx_40", xs = {
  icon: Yl,
  xs: Xl,
  sm: Zl,
  md: Jl,
  lg: Ql,
  xl: ei
}, I$ = [
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
}), ti = "_stat_sjin9_1", ni = "_label_sjin9_8", ri = "_row_sjin9_16", oi = "_value_sjin9_22", si = "_delta_sjin9_28", ai = "_success_sjin9_33", li = "_danger_sjin9_37", ii = "_neutral_sjin9_41", ci = "_hint_sjin9_45", Zn = {
  stat: ti,
  label: ni,
  row: ri,
  value: oi,
  delta: si,
  success: ai,
  danger: li,
  neutral: ii,
  hint: ci
}, L$ = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ A(
    "div",
    {
      ref: l,
      className: [Zn.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Zn.label, children: t }),
        /* @__PURE__ */ A("div", { className: Zn.row, children: [
          /* @__PURE__ */ o("div", { className: Zn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Zn.delta, Zn[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: Zn.hint, children: i })
      ]
    }
  );
}), di = "_wrap_ipozk_1", ui = "_table_ipozk_8", fi = "_caption_ipozk_14", _i = "_none_ipozk_51", pi = "_horizontal_ipozk_57", hi = "_vertical_ipozk_67", mi = "_alternating_ipozk_85", gi = "_start_ipozk_89", yi = "_center_ipozk_93", bi = "_end_ipozk_97", xi = "_empty_ipozk_101", Hn = {
  wrap: di,
  table: ui,
  caption: fi,
  none: _i,
  horizontal: pi,
  vertical: hi,
  alternating: mi,
  start: gi,
  center: yi,
  end: bi,
  empty: xi
};
function z$({
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
  return /* @__PURE__ */ A("div", { className: [Hn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ A(
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
const vi = "_emptyState_1swxw_1", wi = "_icon_1swxw_13", ki = "_title_1swxw_18", Ni = "_description_1swxw_24", $i = "_action_1swxw_30", Or = {
  emptyState: vi,
  icon: wi,
  title: ki,
  description: Ni,
  action: $i
};
function R$({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ A("div", { className: [Or.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Or.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Or.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Or.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Or.action, children: r })
  ] });
}
const Si = "_field_149oz_1", Oi = "_label_149oz_8", Ei = "_required_149oz_14", Ti = "_hint_149oz_19", Ci = "_error_149oz_24", Er = {
  field: Si,
  label: Oi,
  required: Ei,
  hint: Ti,
  error: Ci
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
  const d = r ?? a, u = lt(), f = lt(), y = lt();
  if (l === !1) return null;
  const m = i != null ? f : d != null ? y : null, g = typeof c == "function" ? c({ inputId: u, hintId: y, errorId: f }) : c, p = Wt(g) && typeof g.props.id == "string" ? g.props.id : void 0, b = p ?? t ?? u, h = Wt(g) && (m != null || p == null && typeof g.type == "string"), _ = p != null || t != null || h, x = h && Wt(g) ? os(g, {
    id: b,
    "aria-describedby": m != null ? [
      g.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ A("div", { className: [Er.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ A(
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
    i != null ? /* @__PURE__ */ o("div", { id: f, className: Er.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: y, className: Er.hint, children: d }) : null
  ] });
}
const Mi = "_formfield_6e25e_1", Ai = "_content_6e25e_8", Di = "_floating_6e25e_43", Ii = "_label_6e25e_111", Li = "_start_6e25e_132", zi = "_required_6e25e_169", Ri = "_end_6e25e_175", Pi = "_filled_6e25e_192", ji = "_flat_6e25e_199", Bi = "_helper_6e25e_206", Fi = "_invalid_6e25e_211", Nn = {
  formfield: Mi,
  content: Ai,
  floating: Di,
  label: Ii,
  start: Li,
  required: zi,
  end: Ri,
  filled: Pi,
  flat: ji,
  helper: Bi,
  invalid: Fi
};
function P$({
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
  const y = lt(), m = lt();
  if (f === !1) return null;
  const g = a ?? y, p = typeof d == "function" ? d({
    inputId: g
  }) : d, b = Wt(p) ? p.type : null, h = typeof b == "string", _ = Wt(p) && typeof b != "symbol", x = Wt(p) ? p.props : null, N = typeof x?.id == "string" ? x.id : void 0, w = h && Wt(p) ? p.type.toLowerCase() : null, M = w != null && (w === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : w === "button" || w === "meter" || w === "output" || w === "progress" || w === "select" || w === "textarea"), $ = _ && (r != null || s || N == null && M), O = N != null || a != null || $, T = w === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, I = w === "textarea" || w === "input" && (T == null || [
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
  ) : p, C = e != null ? /* @__PURE__ */ A(
    "label",
    {
      className: Nn.label,
      htmlFor: O ? N ?? g : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: Nn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ A(
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
        i ? null : C,
        /* @__PURE__ */ A("div", { className: Nn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Nn.start, children: t }),
          D,
          i ? C : null,
          n != null && /* @__PURE__ */ o("div", { className: Nn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: m, className: Nn.helper, children: r })
      ]
    }
  );
}
const Hi = "_fieldset_8x01p_1", Ui = "_legend_8x01p_11", Wi = "_legendText_8x01p_20", qi = "_toggle_8x01p_24", Ki = "_content_8x01p_45", Gi = "_summary_8x01p_49", Jn = {
  fieldset: Hi,
  legend: Ui,
  legendText: Wi,
  toggle: qi,
  content: Ki,
  summary: Gi
};
function j$({
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
  className: p,
  visible: b = !0
}) {
  const h = lt(), [_, x] = W(c);
  if (b === !1) return null;
  const N = i ?? _, w = a ? `${h}-content` : void 0, M = () => {
    const C = !N;
    i === void 0 && x(C), C ? m?.() : y?.();
  }, $ = a || e != null || n != null || t != null, O = a ? N : !1, T = a && N && s != null, I = O ? l ?? "Expand" : d ?? "Collapse", D = O ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ A(
    "fieldset",
    {
      className: [Jn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: Jn.legend, children: a ? /* @__PURE__ */ A(rt, { children: [
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: Jn.toggle,
              title: I,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !O,
              "aria-controls": w,
              onClick: M,
              children: [
                /* @__PURE__ */ o(
                  De,
                  {
                    icon: O ? "add" : "remove",
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
        ] }) : /* @__PURE__ */ A(rt, { children: [
          n != null && /* @__PURE__ */ o(De, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Jn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Jn.content,
            id: w,
            hidden: O,
            children: g
          }
        ),
        T ? /* @__PURE__ */ o("div", { className: Jn.summary, children: s }) : null
      ]
    }
  );
}
const Vi = "_form_abp5n_1", Yi = {
  form: Vi
}, $a = ir(null);
function Xi() {
  const e = Bn($a);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function B$({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = W({}), [d, u] = W(0), f = ne(s);
  f.current = s;
  const y = B((x) => {
    l(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), m = B((x) => {
    l((N) => {
      if (!(x in N)) return N;
      const w = { ...N };
      return delete w[x], w;
    });
  }, []), g = B(() => {
    const x = {};
    for (const N of Object.values(f.current)) {
      const w = N.validate();
      w.length > 0 && (x[N.name] = w);
    }
    return x;
  }, []), p = B(() => {
    const x = g();
    u((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [g, e, t, n]), b = (x) => {
    r != null && a != null || (x.preventDefault(), p());
  }, h = Se(
    () => ({ registerField: y, unregisterField: m, submit: p, submitCount: d }),
    [y, m, p, d]
  ), _ = [Yi.form, c].filter(Boolean).join(" ");
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
const cr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", F$ = (e = "Required") => (t) => cr(t) ? e : null, H$ = (e = "Invalid email") => (t) => cr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, U$ = (e, t = "Invalid format") => (n) => cr(n) || e.test(String(n)) ? null : t, W$ = (e, t = `Minimum ${e} characters`) => (n) => cr(n) || String(n).length >= e ? null : t, q$ = (e, t = `Maximum ${e} characters`) => (n) => cr(n) || String(n).length <= e ? null : t, K$ = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (cr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, G$ = (e, t = "Values do not match") => (n, r) => {
  if (cr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, V$ = (e = "Required") => (t) => t === !0 ? null : e, Y$ = (e) => (t, n) => e(t, n);
function Zi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function X$(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Xi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, u] = W(!1), f = ne(() => []);
  f.current = () => Zi(t?.validate ?? [], i), be(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]), be(() => {
    a > 0 && (l(!0), u(!1));
  }, [a]);
  const y = s && !d ? f.current() : [];
  return { value: i, setValue: (g) => {
    c(g), u(!0);
  }, errors: y };
}
const Ji = "_select_1xe98_1", Qi = "_invalid_1xe98_33", ec = "_xs_1xe98_40", tc = "_sm_1xe98_48", nc = "_md_1xe98_56", rc = "_lg_1xe98_62", oc = "_xl_1xe98_68", Ao = {
  select: Ji,
  invalid: Qi,
  xs: ec,
  sm: tc,
  md: nc,
  lg: rc,
  xl: oc
}, lr = at(
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
}, sc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function ac(e) {
  return sc.includes(e);
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
  if (ac(e.secondOperator)) return !0;
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
function lc(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${lc(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function ic(e) {
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
function cc(e) {
  return as(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(cc).filter(Boolean).join(` ${e.operator} `)})` : ic(e);
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
    const f = typeof u == "string", y = f && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${y} ${uc[d]} ${f && r ? a(i(u)) : i(u)}`;
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
  if (!No(e))
    return c(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${c(e.operator, e.value)} ${s} ${c(
    l,
    e.secondValue
  )})`;
}
function _c(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (as(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => _c(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return fc(e, n);
}
function pc(e, t) {
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
const hc = "_filter_1dvqt_1", mc = "_rows_1dvqt_9", gc = "_row_1dvqt_9", yc = "_join_1dvqt_21", bc = "_property_1dvqt_30", xc = "_operator_1dvqt_34", vc = "_value_1dvqt_38", wc = "_remove_1dvqt_42", kc = "_bar_1dvqt_58", Nc = "_add_1dvqt_64", $c = "_custom_1dvqt_78", Sc = "_summary_1dvqt_82", Oc = "_second_1dvqt_87", Ec = "_secondAdd_1dvqt_91", Tc = "_addSecond_1dvqt_95", Cc = "_joinSelect_1dvqt_109", mt = {
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
  joinSelect: Cc
}, Cr = [
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
function Z$({
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
        operator: Tr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (h, _) => {
    u(
      (x) => x.map((N) => N.id === h ? { ...N, ..._ } : N)
    );
  }, y = () => {
    const h = d[d.length - 1], _ = Math.max(0, ...d.map((N) => N.id)) + 1, x = e[0];
    u((N) => [
      ...N,
      {
        id: _,
        property: h?.property ?? x?.name ?? "",
        operator: Tr[e.find(
          (w) => w.name === (h?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (h) => {
    u(
      (_) => _.length > 1 ? _.filter((x) => x.id !== h) : _
    );
  }, g = Se(() => {
    const h = [];
    for (const _ of d) {
      if (_.property === "" || (_.value == null || _.value === "") && !Cr.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: w } = _;
      w != null && No(_) && (N.secondOperator = w, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), h.push(N);
    }
    return h;
  }, [d]), p = Se(() => s == null || g.length === 0 ? s : Ea(s, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [s, g, t, n]);
  be(() => {
    c != null && s != null && c(p ?? []);
  }, [p]);
  const b = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ A("div", { className: [mt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: mt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((h, _) => {
      const x = b(h.property), N = a ? [Tr[x.type ?? "string"]] : Sa, w = !Cr.includes(h.operator), M = h.secondOperator != null;
      return /* @__PURE__ */ A(ss, { children: [
        /* @__PURE__ */ A("div", { className: mt.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: mt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            lr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: mt.property,
              value: h.property,
              onChange: ($) => {
                const O = e.find(
                  (T) => T.name === $.target.value
                );
                f(h.id, {
                  property: $.target.value,
                  operator: Tr[O?.type ?? "string"],
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
            lr,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: mt.operator,
              value: h.operator,
              onChange: ($) => {
                const O = $.target.value;
                f(
                  h.id,
                  Cr.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
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
        w ? M ? /* @__PURE__ */ A(
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
                lr,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: mt.operator,
                  value: h.secondOperator,
                  onChange: ($) => {
                    const O = $.target.value;
                    f(
                      h.id,
                      Cr.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: N.map(($) => ({
                    value: $,
                    label: Ns[$]
                  }))
                }
              ),
              h.secondOperator == null || !Cr.includes(h.secondOperator) ? /* @__PURE__ */ o(
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
              secondOperator: Tr[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ A("div", { className: mt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: mt.add, onClick: y, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: mt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ A("span", { className: mt.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Mc = "_pager_1du31_1", Ac = "_alignLeft_1du31_10", Dc = "_alignCenter_1du31_14", Ic = "_alignRight_1du31_18", Lc = "_alignJustify_1du31_22", zc = "_summary_1du31_26", Rc = "_controls_1du31_31", Pc = "_button_1du31_37", jc = "_active_1du31_73", Bc = "_ellipsis_1du31_85", Fc = "_size_1du31_91", Ft = {
  pager: Mc,
  alignLeft: Ac,
  alignCenter: Dc,
  alignRight: Ic,
  alignJustify: Lc,
  summary: zc,
  controls: Rc,
  button: Pc,
  active: jc,
  ellipsis: Bc,
  size: Fc
};
function Hc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Ss(e, t) {
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
  pageSizeText: y = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: w = "Pagination",
  className: M,
  visible: $ = !0
}) {
  const O = n ?? r, [T, I] = W(O), D = n !== void 0, C = D ? O : T, k = Math.max(1, Math.ceil(e / t)), v = Math.min(Math.max(1, C), k), E = l ?? !0, R = c || k > 1, L = Uc(v, k, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), k);
      D || I(we);
      const ae = (we - 1) * t;
      x?.({
        page: we,
        skip: ae,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [D, x, k, t]
  ), F = s === "center" ? Ft.alignCenter : s === "right" ? Ft.alignRight : s === "justify" ? Ft.alignJustify : Ft.alignLeft, X = {
    count: e,
    pageNumber: v,
    pageSize: t,
    pageCount: k
  }, ie = (te) => {
    const we = Array.from(
      te.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), ae = we.indexOf(document.activeElement);
    ae !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[ae + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[ae - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return $ === !1 || !R ? null : /* @__PURE__ */ A(
    "nav",
    {
      className: [Ft.pager, F, M].filter(Boolean).join(" "),
      "aria-label": w,
      children: [
        E && /* @__PURE__ */ o("span", { className: Ft.summary, "aria-live": "polite", children: f ? f(X) : Hc(u, v, k, e) }),
        /* @__PURE__ */ A(
          "div",
          {
            className: Ft.controls,
            role: "group",
            "aria-label": w,
            onKeyDown: ie,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: v <= 1,
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
                  disabled: v <= 1,
                  onClick: () => j(v - 1),
                  "aria-label": g,
                  title: g,
                  children: "‹"
                }
              ),
              L.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === v ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === v ? "page" : void 0,
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
                  disabled: v >= k,
                  onClick: () => j(v + 1),
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
                  onClick: () => j(k),
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ A("label", { className: Ft.size, children: [
          /* @__PURE__ */ o("span", { children: y }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (te) => N?.(Number(te.target.value)),
              "aria-label": y,
              children: a.map((te) => /* @__PURE__ */ o("option", { value: te, children: te }, te))
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
const Ta = "";
function qc(e, t, n, r, a) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((l) => l.property === s), c = (s, l, d) => {
    const u = t[l];
    if (u === void 0)
      return s.map((p) => ({ type: "row", row: p }));
    const f = i(u), y = /* @__PURE__ */ new Map(), m = [];
    s.forEach((p) => {
      const b = String(a(p, u) ?? ""), h = y.get(b);
      h ? h.push(p) : (y.set(b, [p]), m.push(b));
    });
    const g = [];
    return m.forEach((p) => {
      const b = y.get(p), h = [...d, p].join(Ta), _ = b[0], x = _ !== void 0 ? a(_, u) : void 0;
      g.push({
        type: "group",
        group: {
          key: h,
          display: bo(x, f?.format),
          property: u,
          title: f?.title ?? u,
          count: b.length,
          level: l
        }
      }), r.has(h) && g.push(...c(b, l + 1, [...d, p]));
    }), g;
  };
  return c(e, 0, []);
}
function Os(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), u = [];
    i.forEach((f) => {
      const y = String(n(f, l) ?? ""), m = d.get(y);
      m ? m.push(f) : (d.set(y, [f]), u.push(y));
    }), u.forEach((f) => {
      const y = [...s, f].join(Ta);
      r.add(y), a(d.get(f), c + 1, [...s, f]);
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
function Vc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Es[(r ? Es.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Yc(e, t) {
  return pc(e, t);
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
  ), a = r.length > 0 ? Ea(
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
function Ts(e) {
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
function Qc(e, t, n = or) {
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
const ed = "_grid_13rur_1", td = "_toolbar_13rur_8", nd = "_picker_13rur_13", rd = "_pickerButton_13rur_17", od = "_pickerPanel_13rur_31", sd = "_pickerItem_13rur_46", ad = "_groupPanel_13rur_55", ld = "_groupPanelActive_13rur_66", id = "_groupPanelText_13rur_70", cd = "_groupChip_13rur_74", dd = "_groupRemove_13rur_85", ud = "_groupRow_13rur_94", fd = "_groupCell_13rur_98", _d = "_groupToggle_13rur_104", pd = "_editRow_13rur_117", hd = "_editCell_13rur_121", md = "_editInput_13rur_127", gd = "_commandCell_13rur_137", yd = "_commandButton_13rur_144", bd = "_data_13rur_159", xd = "_table_13rur_166", vd = "_header_13rur_172", wd = "_center_13rur_185", kd = "_right_13rur_189", Nd = "_sortButton_13rur_193", $d = "_sortIndicator_13rur_211", Sd = "_sortIndex_13rur_215", Od = "_cell_13rur_226", Ed = "_clickable_13rur_241", Td = "_frozen_13rur_249", Cd = "_selected_13rur_255", Md = "_resizeHandle_13rur_263", Ad = "_filterCell_13rur_281", Dd = "_filterSelect_13rur_290", Id = "_filterInput_13rur_300", Ld = "_empty_13rur_311", zd = "_loading_13rur_317", Rd = "_visuallyHidden_13rur_331", Pd = "_virtualScroller_13rur_340", jd = "_spacerRow_13rur_345", Bd = "_footerRow_13rur_350", Fd = "_footerCell_13rur_354", Hd = "_footerValue_13rur_361", $e = {
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
  groupToggle: _d,
  editRow: pd,
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
  selected: Cd,
  resizeHandle: Md,
  filterCell: Ad,
  filterSelect: Dd,
  filterInput: Id,
  empty: Ld,
  loading: zd,
  visuallyHidden: Rd,
  virtualScroller: Pd,
  spacerRow: jd,
  footerRow: Bd,
  footerCell: Fd,
  footerValue: Hd
}, Ud = {
  Ascending: "ascending",
  Descending: "descending"
};
function Cs(e, t) {
  return e.filterable ?? t;
}
function Wd(e, t) {
  return e.sortable ?? t;
}
function qd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function J$({
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
  showPageSizeSelector: p = !0,
  selectionMode: b = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: x = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: w = !1,
  allowColumnReorder: M = !1,
  allowGrouping: $ = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: T = !0,
  aggregates: I,
  showExportButton: D = !1,
  exportFileName: C = "grid-data",
  serverMode: k = !1,
  totalCount: v,
  onRangeChange: E,
  virtualize: R = !1,
  virtualRowHeight: L = 40,
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
  const xe = K != null ? `${K} ` : "", [pe, Ae] = W([]), [G, Oe] = W(
    /* @__PURE__ */ new Map()
  ), [re, Me] = W(1), [fe, Fe] = W(u), [Ge, Qe] = W(
    () => e.map((H, U) => to(H, U))
  ), [Mt, it] = W(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? to(H, U) : "").filter(Boolean)
    )
  ), [bt, Z] = W({}), [z, Y] = W(!1), [Q, ge] = W([]), [le, Ee] = W(
    null
  ), [je, Je] = W(null), [et, ot] = W({}), [Xt, oe] = W(0), [ze, Nt] = W(j), Rt = ne(null), xt = ne(null), Ie = Se(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, ye) => H.set(to(U, ye), U)), H;
  }, [e]), qe = Se(
    () => Ge.filter((H) => Mt.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, Mt, Ie]
  ), vt = Se(
    () => Kc(qe, bt),
    [qe, bt]
  ), Ot = F !== "None" || we != null || X, ct = Se(() => {
    if (k) {
      const H = v ?? t.length, U = Math.max(1, Math.ceil(H / fe));
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
    return Zc(
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
    k,
    v,
    d
  ]), V = ne(E);
  be(() => {
    V.current = E;
  });
  const he = Se(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? Ts(
        e.find((ye) => ye.property === H)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [G, e]
  );
  be(() => {
    !k || V.current == null || V.current({
      start: (re - 1) * fe,
      count: fe,
      pageNumber: re,
      pageSize: fe,
      sorts: pe,
      filters: he,
      logicalOperator: l
    });
  }, [
    k,
    re,
    fe,
    pe,
    he,
    l
  ]);
  const Ve = Se(() => new Set(Q), [Q]), Ye = Se(() => le || (T ? Os(ct.items, Q, or) : /* @__PURE__ */ new Set()), [le, T, ct.items, Q]), Pt = Se(
    () => qc(ct.items, Q, e, Ye, or),
    [ct.items, Q, e, Ye]
  ), Xe = Se(
    () => Q.length > 0 ? qe.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : qe,
    [qe, Q, Ve]
  ), q = (H) => {
    H !== "" && Ae(Vc(pe, H, { multi: a }));
  }, ee = (H, U) => {
    Oe((ye) => {
      const ve = new Map(ye);
      return ve.set(H, U), ve;
    }), Me(1);
  }, de = (H) => {
    Fe(H), Me(1);
  }, Ne = (H) => {
    if (b === "None") return;
    const U = n(H), ye = h ?? [];
    let ve;
    b === "Single" ? ve = ye.length === 1 && ye[0] === U ? [] : [U] : ve = ye.includes(U) ? ye.filter((tt) => tt !== U) : [...ye, U], _?.(ve);
  }, ke = (H) => {
    ue?.(H);
  }, Ce = (H, U, ye) => {
    Rt.current = { key: H, startX: U, startWidth: ye };
  }, Ke = (H) => {
    const U = Rt.current;
    if (!U) return;
    const ye = H - U.startX, ve = Math.max(48, U.startWidth + ye);
    Z((tt) => ({ ...tt, [U.key]: `${ve}px` }));
  }, Be = () => {
    Rt.current = null;
  }, dt = (H) => {
    xt.current = H;
  }, st = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Qe((ye) => {
      const ve = [...ye], tt = ve.indexOf(U), At = ve.indexOf(H);
      return tt < 0 || At < 0 ? ye : (ve.splice(tt, 1), ve.splice(At, 0, U), ve);
    });
  }, Et = (H) => {
    it((U) => {
      const ye = new Set(U);
      return ye.has(H) ? ye.delete(H) : ye.add(H), ye;
    });
  }, ht = () => {
    const H = xt.current;
    if (xt.current = null, !H || !$) return;
    const ye = Ie.get(H)?.property;
    ye && (ge(
      (ve) => ve.includes(ye) ? ve : [...ve, ye]
    ), Ee(null));
  }, Le = (H) => {
    ge((U) => U.filter((ye) => ye !== H)), Ee(null);
  }, Tt = (H) => {
    Ee((U) => {
      const ye = U ?? (T ? Os(ct.items, Q, or) : /* @__PURE__ */ new Set()), ve = new Set(ye);
      return ve.has(H) ? ve.delete(H) : ve.add(H), ve;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((ye) => {
      ye.property && (U[ye.property] = or(H, ye.property));
    }), ot(U), Je(String(n(H)));
  }, hn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), ot(H), Je("__new__");
  }, Cn = () => {
    Je(null), ot({});
  }, Fn = (H) => {
    if (je === "__new__") {
      const U = Object.fromEntries(
        e.filter((ye) => ye.property).map((ye) => [ye.property, et[ye.property]])
      );
      te?.(U);
    } else if (H != null) {
      const U = { ...H, ...et };
      ie?.(H, U);
    }
    Cn();
  }, kn = d && (m === "Top" || m === "TopAndBottom"), Zr = d && (m === "Bottom" || m === "TopAndBottom"), So = c && e.some((H) => Cs(H, c)), Oo = (H, U, ye) => H.render ? H.render(U, { index: 0 }) : bo(or(U, H.property), H.format), Eo = (H) => {
    const U = [$e.cell];
    return H.align === "center" && U.push($e.center), H.align === "right" && U.push($e.right), H.frozen && U.push($e.frozen), U.join(" ");
  }, mn = k ? t : ct.filtered, Jr = () => {
    const H = Qc(
      mn,
      Xe.map((tt) => tt.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), ye = URL.createObjectURL(U), ve = document.createElement("a");
    ve.href = ye, ve.download = `${C}.csv`, document.body.appendChild(ve), ve.click(), ve.remove(), URL.revokeObjectURL(ye);
  }, gn = Pt.length, jt = Se(() => {
    if (!R || gn === 0)
      return { start: 0, end: gn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / L) - H
    ), ye = Math.ceil(ze / L) + H * 2, ve = Math.min(gn, U + ye), tt = U * L, At = Math.max(0, (gn - ve) * L);
    return { start: U, end: ve, top: tt, bottom: At };
  }, [R, gn, Xt, L, ze]), Nr = Xe.length + (Ot ? 1 : 0);
  return /* @__PURE__ */ A("div", { className: [$e.grid, me].filter(Boolean).join(" "), children: [
    kn && /* @__PURE__ */ o(
      qo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: f,
        pageNumbersCount: y,
        showSummary: g,
        showPageSizeSelector: p,
        ariaLabel: `${xe}${Zr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Me,
        onPageSizeChange: de
      }
    ),
    ($ || X || x || D) && /* @__PURE__ */ A("div", { className: $e.toolbar, children: [
      $ && /* @__PURE__ */ o(
        "div",
        {
          className: [
            $e.groupPanel,
            Q.length > 0 ? $e.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (H) => H.preventDefault() : void 0,
          onDrop: $ ? ht : void 0,
          children: Q.length > 0 ? Q.map((H) => {
            const U = e.find((ye) => ye.property === H)?.title ?? H;
            return /* @__PURE__ */ A("span", { className: $e.groupChip, children: [
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
          }) : /* @__PURE__ */ o("span", { className: $e.groupPanelText, children: O })
        }
      ),
      X && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: $e.pickerButton,
          onClick: hn,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ A("div", { className: $e.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $e.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": z,
            onClick: () => Y((H) => !H),
            children: N
          }
        ),
        z && /* @__PURE__ */ o(
          "div",
          {
            className: $e.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const ye = to(H, U);
              return /* @__PURE__ */ A("label", { className: $e.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Mt.has(ye),
                    onChange: () => Et(ye)
                  }
                ),
                H.title ?? H.property
              ] }, ye);
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
    /* @__PURE__ */ A(
      "div",
      {
        className: [$e.data, R ? $e.virtualScroller : ""].filter(Boolean).join(" "),
        style: R ? { maxHeight: j } : void 0,
        onScroll: R ? (H) => {
          oe(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ A(
            "table",
            {
              className: $e.table,
              role: "grid",
              "aria-rowcount": (R ? gn : ct.total) + 1,
              "aria-label": K,
              "aria-busy": ae || void 0,
              children: [
                /* @__PURE__ */ A("colgroup", { children: [
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
                /* @__PURE__ */ A("thead", { children: [
                  /* @__PURE__ */ A("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const ye = Wd(U, r), ve = pe.find((wt) => wt.property === U.property), tt = ve ? pe.indexOf(ve) + 1 : 0, At = U.align ?? "left";
                      return /* @__PURE__ */ A(
                        "th",
                        {
                          "aria-sort": ye && ve ? Ud[ve.sortOrder] : "none",
                          className: [
                            $e.header,
                            At === "center" ? $e.center : "",
                            At === "right" ? $e.right : "",
                            U.frozen ? $e.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: M || $ || void 0,
                          onDragStart: M || $ ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), dt(H);
                          } : void 0,
                          onDragOver: M ? (wt) => wt.preventDefault() : void 0,
                          onDrop: M ? () => st(H) : void 0,
                          children: [
                            ye ? /* @__PURE__ */ A(
                              "button",
                              {
                                type: "button",
                                className: $e.sortButton,
                                onClick: () => U.property != null && q(U.property),
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
                                  const yn = bt[H] ?? U.width, Ct = yn ? parseFloat(yn) : 96;
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
                    Ot && /* @__PURE__ */ o("th", { className: $e.header, scope: "col", children: "Actions" })
                  ] }),
                  So && /* @__PURE__ */ o("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!Cs(U, c))
                      return /* @__PURE__ */ o("td", { className: $e.filterCell }, H);
                    const ye = G.get(U.property ?? "");
                    return /* @__PURE__ */ A("td", { className: $e.filterCell, children: [
                      /* @__PURE__ */ A(
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
                          value: ye?.operator ?? Ts(U.type ?? "string"),
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
                          className: $e.filterInput,
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
                /* @__PURE__ */ A("tbody", { children: [
                  je === "__new__" && /* @__PURE__ */ A("tr", { className: $e.editRow, children: [
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o("td", { className: $e.editCell, children: U.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: $e.editInput,
                        type: U.type === "number" ? "number" : U.type === "boolean" ? "checkbox" : "text",
                        checked: U.type === "boolean" ? !!et[U.property] : void 0,
                        value: U.type === "boolean" ? void 0 : String(et[U.property] ?? ""),
                        onChange: (ye) => ot((ve) => ({
                          ...ve,
                          [U.property]: U.type === "boolean" ? ye.target.checked : ye.target.value
                        })),
                        "aria-label": `${U.title ?? U.property} (new)`
                      }
                    ) }, H)),
                    Ot && /* @__PURE__ */ A("td", { className: $e.editCell, children: [
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
                          onClick: Cn,
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
                    const ye = jt.start + U, ve = R ? ye + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: $e.groupRow,
                          "aria-rowindex": ve,
                          children: /* @__PURE__ */ o("td", { colSpan: Nr, className: $e.groupCell, children: /* @__PURE__ */ A(
                            "button",
                            {
                              type: "button",
                              className: $e.groupToggle,
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
                    const tt = H.row, At = n(tt), wt = (h ?? []).includes(At), yn = je != null && je === String(At);
                    return /* @__PURE__ */ A(
                      "tr",
                      {
                        "aria-rowindex": ve,
                        className: [
                          ue || b !== "None" ? $e.clickable : "",
                          wt ? $e.selected : "",
                          yn ? $e.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? wt : void 0,
                        onClick: ue || b !== "None" ? (Ct) => {
                          qd(Ct.target) || (ke(tt), Ne(tt));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Eo(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: yn && gt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: $e.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!et[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(et[gt.property] ?? ""),
                                  onChange: (Jt) => ot((To) => ({
                                    ...To,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : Oo(gt, tt)
                            },
                            Ct
                          )),
                          Ot && /* @__PURE__ */ o("td", { className: $e.commandCell, children: yn ? /* @__PURE__ */ A(rt, { children: [
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
                                onClick: Cn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ A(rt, { children: [
                            F !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: $e.commandButton,
                                onClick: () => Zt(tt),
                                children: "Edit"
                              }
                            ),
                            we && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: $e.commandButton,
                                onClick: () => we(tt),
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
                I && I.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ A("tr", { className: $e.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const ye = I.filter(
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
                        children: ye.map((ve, tt) => /* @__PURE__ */ A(
                          "div",
                          {
                            className: $e.footerValue,
                            children: [
                              ve.title ? `${ve.title}: ` : "",
                              bo(
                                Jc(mn, ve, or),
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
          ct.items.length === 0 && !ae && /* @__PURE__ */ o("div", { className: $e.empty, children: _e }),
          ae && /* @__PURE__ */ o("div", { className: $e.loading, role: "status", children: "Loading…" })
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
        pageNumbersCount: y,
        showSummary: g,
        showPageSizeSelector: p,
        ariaLabel: `${xe}${kn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Me,
        onPageSizeChange: de
      }
    )
  ] });
}
const Kd = "_wrap_avqds_1", Gd = "_grid_avqds_7", Vd = "_stacked_avqds_13", Yd = "_item_avqds_19", Xd = "_empty_avqds_25", Mr = {
  wrap: Kd,
  grid: Gd,
  stacked: Vd,
  item: Yd,
  empty: Xd
};
function Q$({
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
  const [y, m] = W(1), [g, p] = W(t), b = e.length, h = Math.max(1, Math.ceil(b / g)), _ = Math.min(Math.max(1, y), h), x = Se(() => {
    const w = (_ - 1) * g;
    return e.slice(w, w + g);
  }, [e, _, g]), N = r ? Mr.grid : Mr.stacked;
  return /* @__PURE__ */ A(
    "div",
    {
      className: [Mr.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        l && s != null ? s : b === 0 ? c ?? /* @__PURE__ */ o("div", { className: Mr.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: x.map((w, M) => /* @__PURE__ */ o("div", { className: Mr.item, children: a ? a(w, M) : String(w) }, M)) }),
        /* @__PURE__ */ o(
          qo,
          {
            ariaLabel: `${f} Pagination`,
            pageNumber: _,
            pageSize: g,
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
const Zd = "_label_1qfpw_1", Jd = {
  label: Zd
}, eS = at(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: a,
      className: [Jd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Qd = "_textbox_oly89_1", eu = "_invalid_oly89_37", tu = "_xs_oly89_44", nu = "_sm_oly89_50", ru = "_md_oly89_56", ou = "_lg_oly89_62", su = "_xl_oly89_68", Do = {
  textbox: Qd,
  invalid: eu,
  xs: tu,
  sm: nu,
  md: ru,
  lg: ou,
  xl: su
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
), no = ls, au = "_checkbox_1bb6c_1", lu = {
  checkbox: au
}, iu = at(
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
        className: [lu.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), cu = {
  switch: "_switch_19gf1_1"
}, tS = at(function({ className: t, ...n }, r) {
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
}), du = "_trigger_1jlxf_1", uu = "_tooltip_1jlxf_7", fu = "_top_1jlxf_34", _u = "_right_1jlxf_40", pu = "_bottom_1jlxf_46", hu = "_left_1jlxf_52", mu = "_arrow_1jlxf_58", gu = "_floating_1jlxf_70", Un = {
  trigger: du,
  tooltip: uu,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: fu,
  right: _u,
  bottom: pu,
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
function nS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = lt(), l = ne(null), d = ne(null), u = ne(() => {
  }), [f, y] = W(!1), [m, g] = W(null), p = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, b = () => {
    p(), l.current = window.setTimeout(() => {
      l.current = null, y(!0);
    }, r);
  }, h = () => {
    p(), y(!1);
  };
  if (be(() => () => p(), []), be(() => {
    if (!f || a == null) return;
    const x = window.setTimeout(() => y(!1), a);
    return () => window.clearTimeout(x);
  }, [f, a]), be(() => {
    if (i || !f) return;
    const x = (N) => {
      N.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [i, f]), be(() => {
    if (!i) return;
    let x = null, N = null;
    const w = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, M = () => {
      w(), N = null, g(null);
    };
    u.current = M;
    const $ = (k) => {
      w(), N = k, x = window.setTimeout(() => {
        x = null, g(k);
      }, r);
    }, O = (k) => k instanceof Element ? k.closest(i) : null, T = (k) => {
      const v = O(k.target);
      !v || v === N || $(v);
    }, I = (k) => {
      const v = O(k.target);
      if (!v || v !== N) return;
      const E = k.relatedTarget;
      E instanceof Element && v.contains(E) || M();
    }, D = (k) => {
      k.key === "Escape" && M();
    }, C = () => M();
    return document.addEventListener("mouseover", T), document.addEventListener("mouseout", I), document.addEventListener("focusin", T), document.addEventListener("focusout", I), document.addEventListener("keydown", D), document.addEventListener("scroll", C, !0), window.addEventListener("resize", C), () => {
      w(), document.removeEventListener("mouseover", T), document.removeEventListener("mouseout", I), document.removeEventListener("focusin", T), document.removeEventListener("focusout", I), document.removeEventListener("keydown", D), document.removeEventListener("scroll", C, !0), window.removeEventListener("resize", C), N = null, g(null);
    };
  }, [i, r]), be(() => {
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
      yu(N.getBoundingClientRect(), n)
    );
  }, [m, n]), i)
    return m ? /* @__PURE__ */ A(
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
    /* @__PURE__ */ A(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: h,
        onFocus: b,
        onBlur: h,
        children: [
          _,
          f && /* @__PURE__ */ A(
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
const bu = "_dialog_1t7pw_1", xu = "_sm_1t7pw_104", vu = "_resizable_1t7pw_110", wu = "_md_1t7pw_113", ku = "_lg_1t7pw_117", Nu = "_header_1t7pw_121", $u = "_title_1t7pw_132", Su = "_description_1t7pw_139", Ou = "_close_1t7pw_146", Eu = "_body_1t7pw_176", Tu = "_footer_1t7pw_188", bn = {
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
  side: y = null,
  showCloseButton: m = !0,
  showMask: g = !0,
  canClose: p,
  className: b
}) {
  const h = ne(null), _ = lt(), x = lt(), N = ne(t);
  be(() => {
    N.current = t;
  });
  const w = ne(p);
  be(() => {
    w.current = p;
  });
  const M = ne(u);
  be(() => {
    M.current = u;
  });
  const $ = ne(!1), O = ne(!1), T = B(() => {
    if ($.current) return;
    const C = w.current?.();
    if (C instanceof Promise) {
      C.then((k) => {
        k && !$.current && ($.current = !0, N.current());
      });
      return;
    }
    C !== !1 && ($.current = !0, N.current());
  }, []), I = B(() => {
    if (O.current) {
      O.current = !1;
      return;
    }
    N.current();
  }, []), D = B(
    (C) => {
      if (C.key !== "Tab" || !h.current) return;
      const k = Array.from(
        h.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (E) => E.offsetWidth > 0 || E.offsetHeight > 0 || E === document.activeElement
      );
      if (k.length === 0) {
        C.preventDefault();
        return;
      }
      const v = k.indexOf(document.activeElement);
      if (C.shiftKey) {
        if (v <= 0) {
          C.preventDefault();
          const E = k[k.length - 1];
          E && E.focus();
        }
      } else if (v === -1 || v === k.length - 1) {
        C.preventDefault();
        const E = k[0];
        E && E.focus();
      }
    },
    []
  );
  return be(() => {
    const C = h.current;
    if (C)
      if (e && !C.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        C.showModal(), (C.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? C.querySelector("button"))?.focus();
        const E = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const R = (L) => {
          L.preventDefault(), M.current && T();
        };
        return C.addEventListener("cancel", R), () => {
          C.removeEventListener("cancel", R), document.body.style.overflow = E, k?.focus({ preventScroll: !0 });
        };
      } else !e && C.open && (O.current = $.current, $.current = !1, C.close());
  }, [e, T]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ A(
    "dialog",
    {
      ref: h,
      className: [
        bn.dialog,
        bn[c],
        f ? bn.resizable : null,
        y ? bn[`side-${y}`] : null,
        g === !1 ? bn["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: I,
      onClick: (C) => {
        C.target === h.current && d && T();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ A("header", { className: bn.header, children: [
          /* @__PURE__ */ A("div", { children: [
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
const Cu = "_typography_1jy8x_1", Mu = "_h1_1jy8x_39", Au = "_h2_1jy8x_45", Du = "_h3_1jy8x_51", Iu = "_h4_1jy8x_57", Lu = "_h5_1jy8x_63", zu = "_h6_1jy8x_69", Ru = "_button_1jy8x_99", Pu = "_caption_1jy8x_106", ju = "_overline_1jy8x_112", Io = {
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
  h5: Lu,
  h6: zu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Ru,
  caption: Pu,
  overline: ju,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Bu = {
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
}, Fu = {
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
}, Hu = {
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
}, Uu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ma = at(function({
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
  const u = n === "Auto" ? Bu[t] : Hu[n];
  return /* @__PURE__ */ o(
    u,
    {
      ref: d,
      className: [
        Io.typography,
        Io[Fu[t]],
        r ? Io[Uu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Aa = ir(null);
function rS() {
  const e = Bn(Aa);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function oS({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = ne(0), i = () => (a.current += 1, a.current), c = ne([]);
  c.current = t;
  const s = (y) => {
    const m = c.current[0];
    m && (m.kind === "confirm" ? m.resolve(!!y) : m.kind === "alert" ? m.resolve() : m.resolve(y), n((g) => g.slice(1)));
  }, l = Se(
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
      openSide: ({ position: y, showMask: m = !0, ...g }) => new Promise((p) => {
        n((b) => [
          ...b,
          {
            seq: i(),
            kind: "custom",
            options: { ...g, side: y, showMask: m },
            resolve: p
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), d = t[0];
  function u(y) {
    d && (d.kind === "confirm" ? d.resolve(!!y) : d.kind === "alert" ? d.resolve() : d.resolve(y), n((m) => m.slice(1)));
  }
  const f = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ A(Aa.Provider, { value: l, children: [
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
        footer: d?.kind === "confirm" ? /* @__PURE__ */ A(rt, { children: [
          /* @__PURE__ */ o(ln, { variant: "text", onClick: () => u(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            ln,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => u(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? f?.footer ?? /* @__PURE__ */ o(ln, { variant: "text", onClick: () => u(void 0), children: "Close" }) : /* @__PURE__ */ o(ln, { onClick: () => u(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? f?.content : d?.options.message != null && /* @__PURE__ */ o(Ma, { textStyle: "Body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Wu = "_viewport_11t1p_1", qu = "_topLeft_11t1p_13", Ku = "_topRight_11t1p_20", Gu = "_bottomLeft_11t1p_25", Vu = "_toast_11t1p_30", Yu = "_leaving_11t1p_61", Xu = "_info_11t1p_77", Zu = "_success_11t1p_86", Ju = "_warning_11t1p_95", Qu = "_danger_11t1p_104", ef = "_content_11t1p_113", tf = "_title_11t1p_118", nf = "_description_11t1p_141", rf = "_dismiss_11t1p_148", of = "_actions_11t1p_169", sf = "_action_11t1p_169", af = "_cancel_11t1p_177", lf = "_progress_11t1p_215", en = {
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
}, Da = ir(null);
function sS() {
  const e = Bn(Da);
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
function aS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = W([]), [s, l] = W(!1), d = ne([]), u = ne(/* @__PURE__ */ new Map()), f = ne(!1), y = ne(0), m = (v) => {
    f.current = v, l(v);
  }, g = B((v) => {
    const E = u.current.get(v);
    E && (window.clearTimeout(E.timeoutId), E.remaining = Math.max(
      0,
      E.remaining - (Date.now() - E.startedAt)
    ));
  }, []), p = B((v) => {
    const E = u.current.get(v);
    E && (window.clearTimeout(E.timeoutId), u.current.delete(v));
  }, []), b = B(
    (v) => {
      p(v), c((E) => {
        const R = E.filter((L) => L.id !== v);
        return d.current = R, R;
      });
    },
    [p]
  ), h = B(
    (v) => {
      const E = d.current.find((R) => R.id === v);
      !E || E.leaving || (E.onAutoClose?.(), b(v));
    },
    [b]
  ), _ = B(
    (v) => {
      const E = u.current.get(v);
      !E || E.remaining <= 0 || (E.startedAt = Date.now(), E.timeoutId = window.setTimeout(() => h(v), E.remaining));
    },
    [h]
  ), x = B(() => {
    f.current || u.current.forEach((v, E) => g(E)), m(!0);
  }, [g]), N = B(() => {
    u.current.forEach((v, E) => _(E)), m(!1);
  }, [_]);
  be(() => {
    if (!r) return;
    const v = () => {
      document.hidden ? x() : N();
    };
    return document.addEventListener("visibilitychange", v), () => document.removeEventListener("visibilitychange", v);
  }, [r, x, N]);
  const w = B(
    (v) => {
      const E = d.current.find((R) => R.id === v);
      !E || E.leaving || (E.onDismiss?.(), c((R) => {
        const L = R.map(
          (j) => j.id === v ? { ...j, leaving: !0 } : j
        );
        return d.current = L, L;
      }), window.setTimeout(() => b(v), cf));
    },
    [b]
  ), M = B(
    (v) => {
      if (v.durationMs <= 0) return;
      const E = {
        remaining: v.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(v.id, E), f.current || _(v.id);
    },
    [_]
  ), $ = B(
    (v) => {
      const E = d.current.find((L) => L.id === v.id), R = {
        id: v.id ?? ++y.current,
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
        const j = E ? L.map(
          (F) => F.id === R.id ? { ...R, leaving: !1 } : F
        ) : [...L, R];
        return d.current = j, j;
      }), E && p(R.id), M(R);
    },
    [t, n, M, p]
  ), O = B(
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
  ), T = B(
    (v) => (E, R) => O({ severity: v, summary: E, detail: R }),
    [O]
  ), I = Se(
    () => ({
      toast: $,
      notify: O,
      notifyInfo: T("info"),
      notifySuccess: T("success"),
      notifyWarning: T("warning"),
      notifyError: T("danger")
    }),
    [$, O, T]
  ), D = Se(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((v) => v.position)])),
    [n, i]
  ), C = r ? x : void 0, k = r ? N : void 0;
  return /* @__PURE__ */ A(Da.Provider, { value: I, children: [
    e,
    D.map((v) => /* @__PURE__ */ o(
      "div",
      {
        className: [en.viewport, en[df[v]], a].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: C,
        onMouseLeave: k,
        children: i.filter((E) => E.position === v).map((E) => /* @__PURE__ */ A(
          "div",
          {
            role: E.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
            "data-clickable": E.closeOnClick ? "true" : "false",
            className: [
              en.toast,
              en[E.severity],
              E.leaving ? en.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: E.click || E.closeOnClick ? () => {
              E.click?.(E.payload), E.closeOnClick && w(E.id);
            } : void 0,
            children: [
              /* @__PURE__ */ A("div", { className: en.content, children: [
                /* @__PURE__ */ o("div", { className: en.title, children: E.title }),
                E.description && /* @__PURE__ */ o("div", { className: en.description, children: E.description }),
                (E.action || E.cancel) && /* @__PURE__ */ A("div", { className: en.actions, children: [
                  E.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.action,
                      onClick: () => {
                        E.action?.onClick?.(), w(E.id);
                      },
                      children: E.action.label
                    }
                  ),
                  E.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.cancel,
                      onClick: () => {
                        E.cancel?.onClick?.(), w(E.id);
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
                  className: en.dismiss,
                  onClick: () => w(E.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
                }
              ),
              E.showProgress && E.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: en.progress,
                  style: { animationDuration: `${E.durationMs}ms` }
                }
              )
            ]
          },
          E.id
        ))
      },
      v
    ))
  ] });
}
const uf = "_navigator_848v2_3", ff = "_track_848v2_9", _f = "_spark_848v2_19", pf = "_window_848v2_28", hf = "_handle_848v2_37", Wn = {
  navigator: uf,
  track: ff,
  spark: _f,
  window: pf,
  handle: hf
};
function Ms(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), c = Math.max(n, Math.min(r, t));
  if (c - i < a) {
    const s = (i + c) / 2;
    i = Math.max(n, s - a / 2), c = Math.min(r, i + a), i = Math.max(n, c - a);
  }
  return i > c && ([i, c] = [c, i]), { start: i, end: c };
}
function lS({
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
  ), y = d && n ? n : u, m = ne(null), g = ne(null), p = B(
    (O) => {
      const T = Ms(O.start, O.end, e, t, c);
      d || f(T), a?.(T);
    },
    [d, e, t, c, a]
  ), b = B(
    (O) => {
      const T = g.current;
      if (!T) return e;
      const I = T.getBoundingClientRect(), D = I.width > 0 ? (O - I.left) / I.width : 0;
      return e + Math.max(0, Math.min(1, D)) * (t - e || 1);
    },
    [e, t]
  ), h = B(
    (O) => (Math.max(e, Math.min(t, O)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  be(() => {
    const O = (I) => {
      const D = m.current;
      if (!D) return;
      const C = b(I.clientX);
      if (D.mode === "start") p({ start: C, end: y.end });
      else if (D.mode === "end") p({ start: y.start, end: C });
      else {
        const k = y.end - y.start, v = C - D.grabOffset;
        p({ start: v, end: v + k });
      }
    }, T = () => {
      m.current = null;
    };
    return document.addEventListener("pointermove", O), document.addEventListener("pointerup", T), () => {
      document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", T);
    };
  }, [p, b, y]);
  const _ = (O) => (T) => {
    T.preventDefault(), T.target.focus?.(), m.current = { mode: O, grabOffset: 0 };
  }, x = (O) => {
    const T = b(O.clientX);
    if (T >= y.start && T <= y.end)
      m.current = { mode: "pan", grabOffset: T - y.start };
    else {
      const I = Math.abs(T - y.start), D = Math.abs(T - y.end);
      I <= D ? p({ start: T, end: y.end }) : p({ start: y.start, end: T });
    }
  }, N = (t - e || 1) / 100, w = (O) => (T) => {
    const I = T.shiftKey ? N * 10 : N;
    T.key === "ArrowLeft" || T.key === "ArrowDown" ? (T.preventDefault(), p(
      O === "start" ? { start: y.start - I, end: y.end } : { start: y.start, end: y.end - I }
    )) : T.key === "ArrowRight" || T.key === "ArrowUp" ? (T.preventDefault(), p(
      O === "start" ? { start: y.start + I, end: y.end } : { start: y.start, end: y.end + I }
    )) : T.key === "Home" ? (T.preventDefault(), p(
      O === "start" ? { start: e, end: y.end } : { start: y.start, end: t }
    )) : T.key === "End" && (T.preventDefault(), p(
      O === "start" ? { start: y.end - c, end: y.end } : { start: y.start, end: t }
    ));
  }, M = h(y.start), $ = Math.max(0, h(y.end) - M);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ A("div", { ref: g, className: Wn.track, onPointerDown: x, children: [
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
                points: i.map((O, T) => {
                  const I = T / (i.length - 1) * 100, D = Math.max(...i), C = Math.min(...i), k = D === C ? 12 : 22 - (O - C) / (D - C) * 20;
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
            style: { left: `${M}%`, width: `${$}%` }
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
            style: { left: `${M}%` },
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
            "aria-valuenow": Math.round(y.end * 100) / 100,
            className: [Wn.handle, Wn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${M + $}%` },
            onPointerDown: _("end"),
            onKeyDown: w("end")
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
}, oo = 150, As = 240;
function Ds(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Is(e, t, n, r, a) {
  const [i, c] = Ds(e, t, n, r), [s, l] = Ds(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function bf(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const a of t)
    e >= a.offset && (r = a.color);
  return r;
}
function iS({
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
  const f = n - t || 1, y = Math.max(0, Math.min(1, (e - t) / f)), m = "var(--dx-border-color)", g = a ?? "var(--dx-primary-color)", p = 100, b = 96, h = 80, _ = oo + As * y;
  return /* @__PURE__ */ A(
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
        /* @__PURE__ */ A("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
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
          y > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Is(p, b, h, oo, _),
              fill: "none",
              stroke: bf(y, i, g),
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
function xf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function cS({
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
  const g = n - t || 1, p = (D) => Math.max(0, Math.min(1, (D - t) / g)), h = a - r >= 360 ? r + 359.999 : a, _ = (D) => r + (h - r) * p(D), x = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: w = 8, showLabels: M = !0 } = i, $ = 100, O = 100, T = 78, I = (D, C, k) => {
    const [v, E] = vr($, O, T - 14, _(D));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: $,
        y1: O,
        x2: v,
        y2: E,
        stroke: C,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, k);
  };
  return /* @__PURE__ */ A(
    "div",
    {
      role: "meter",
      "aria-label": y,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, m].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ A("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ls($, O, T, r, h),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((D, C) => /* @__PURE__ */ o(
            "path",
            {
              d: Ls(
                $,
                O,
                T,
                _(Math.max(t, D.from)),
                _(Math.min(n, D.to))
              ),
              fill: "none",
              stroke: D.color,
              strokeWidth: 12
            },
            `range-${C}`
          )),
          w > 0 && xf(t, n, w).map((D, C) => {
            const [k, v] = vr($, O, T - 10, _(D)), [E, R] = vr($, O, T - 16, _(D)), [L, j] = vr($, O, T - 26, _(D));
            return /* @__PURE__ */ A("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: k,
                  y1: v,
                  x2: E,
                  y2: R,
                  stroke: N,
                  strokeWidth: 1.5
                }
              ),
              M && /* @__PURE__ */ o(
                "text",
                {
                  x: L,
                  y: j + 4,
                  textAnchor: "middle",
                  className: Rn.tick,
                  children: D
                }
              )
            ] }, C);
          }),
          I(e, x, "value"),
          s.map(
            (D, C) => I(D.value, D.color ?? x, `extra-${C}`)
          ),
          /* @__PURE__ */ o("circle", { cx: $, cy: O, r: 7, fill: x })
        ] }),
        u && /* @__PURE__ */ o("div", { className: Rn.value, children: f(e) })
      ]
    }
  );
}
function vf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function dS({
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
  const m = n - t || 1, g = r === "vertical", p = s ?? (g ? 220 : 280), { count: b = 5, showLabels: h = !0 } = a, _ = c ?? "var(--dx-primary-color)", x = "var(--dx-border-color)", N = 8, w = (I) => {
    const C = (Math.max(t, Math.min(n, I)) - t) / m;
    return g ? p - N - C * (p - N * 2) : N + C * (p - N * 2);
  }, M = () => b <= 0 ? null : vf(t, n, b).map((I, D) => {
    const C = w(I);
    return /* @__PURE__ */ A("g", { children: [
      g ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: C,
          x2: 0,
          y2: C,
          stroke: x,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: C,
          y1: -6,
          x2: C,
          y2: 0,
          stroke: x,
          strokeWidth: 1.5
        }
      ),
      h && (g ? /* @__PURE__ */ o("text", { x: -10, y: C + 4, textAnchor: "end", className: Rn.tick, children: I }) : /* @__PURE__ */ o("text", { x: C, y: -10, textAnchor: "middle", className: Rn.tick, children: I }))
    ] }, D);
  }), $ = () => i.map((I, D) => {
    const C = w(I.from), k = w(I.to), v = Math.min(C, k), E = Math.abs(k - C);
    return g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: v,
        width: l,
        height: E,
        fill: I.color,
        opacity: 0.35
      },
      D
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: v,
        y: -l / 2,
        width: E,
        height: l,
        fill: I.color,
        opacity: 0.35
      },
      D
    );
  }), O = w(e), T = /* @__PURE__ */ A("g", { children: [
    $(),
    g ? /* @__PURE__ */ o(
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
    g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: O,
        width: l,
        height: p - N - O,
        rx: l / 2,
        fill: _
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: Math.max(0, O - N),
        height: l,
        rx: l / 2,
        fill: _
      }
    ),
    g ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${O} L ${-l / 2 - 2} ${O - 5} L ${-l / 2 - 2} ${O + 5} Z`,
        fill: _
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${O} ${-l / 2 - 10} L ${O - 5} ${-l / 2 - 2} L ${O + 5} ${-l / 2 - 2} Z`,
        fill: _
      }
    ),
    M()
  ] });
  return /* @__PURE__ */ A(
    "div",
    {
      role: "meter",
      "aria-label": f,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, y].filter(Boolean).join(" "),
      children: [
        g ? /* @__PURE__ */ o(
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
const wf = "_chat_1apnf_3", kf = "_messages_1apnf_9", Nf = "_message_1apnf_9", $f = "_user_1apnf_29", Sf = "_assistant_1apnf_35", Of = "_system_1apnf_40", Ef = "_typing_1apnf_46", Tf = "_inputRow_1apnf_51", fr = {
  chat: wf,
  messages: kf,
  message: Nf,
  user: $f,
  assistant: Sf,
  system: Of,
  typing: Ef,
  inputRow: Tf
};
function uS({
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
  const [f, y] = W(""), m = l || d, g = f.trim().length > 0 && !m, p = (h) => {
    h.preventDefault();
    const _ = f.trim();
    !_ || m || (y(""), t?.(_));
  }, b = /* @__PURE__ */ A("form", { className: fr.inputRow, onSubmit: (h) => {
    p(h);
  }, children: [
    /* @__PURE__ */ o(
      ls,
      {
        value: f,
        placeholder: n,
        "aria-label": a,
        disabled: m,
        onChange: (h) => y(h.target.value)
      }
    ),
    /* @__PURE__ */ o(ln, { type: "submit", disabled: !g, loading: l, children: r })
  ] });
  return /* @__PURE__ */ A(
    "div",
    {
      className: [fr.chat, u].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ A("div", { className: fr.messages, children: [
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
        s ? s(b) : b
      ]
    }
  );
}
const Cf = "_wrapper_1ulz6_1", Mf = "_input_1ulz6_8", Af = "_invalid_1ulz6_38", Df = "_toggle_1ulz6_45", If = "_xs_1ulz6_80", Lf = "_sm_1ulz6_86", zf = "_md_1ulz6_92", Rf = "_lg_1ulz6_98", Pf = "_xl_1ulz6_104", Ar = {
  wrapper: Cf,
  input: Mf,
  invalid: Af,
  toggle: Df,
  xs: If,
  sm: Lf,
  md: zf,
  lg: Rf,
  xl: Pf
}, jf = at(
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
      /* @__PURE__ */ A("div", { className: Ar.wrapper, "data-size": t, children: [
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
), Bf = "_login_30qie_3", Ff = "_title_30qie_9", Hf = "_remember_30qie_14", Uf = "_link_30qie_21", Dr = {
  login: Bf,
  title: Ff,
  remember: Hf,
  link: Uf
}, is = "dx-login-username";
function Wf(e) {
  const t = e === void 0 ? is : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function qf(e, t) {
  const n = e === void 0 ? is : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function Kf(e) {
  const t = e === void 0 ? is : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function fS({
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
  const [p, b] = W(() => Wf(m) ?? ""), [h, _] = W(""), [x, N] = W(!1), [w, M] = W(!1), [$, O] = W({}), T = l || w, I = e != null && n == null, D = async (C) => {
    I || C.preventDefault();
    const k = {};
    if (p.trim() || (k.username = "Username is required."), h || (k.password = "Password is required."), O(k), !(k.username || k.password || !n)) {
      M(!0);
      try {
        await n({
          username: p.trim(),
          password: h,
          rememberMe: x
        }), x ? qf(m, p.trim()) : Kf(m);
      } finally {
        M(!1);
      }
    }
  };
  return /* @__PURE__ */ A(
    "form",
    {
      className: [Dr.login, g].filter(Boolean).join(" "),
      action: I ? e : void 0,
      method: I ? t : void 0,
      noValidate: !0,
      onSubmit: (C) => {
        D(C);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Dr.title, children: d }),
        /* @__PURE__ */ o(ar, { label: u, required: !0, error: $.username, children: ({ inputId: C }) => /* @__PURE__ */ o(
          ls,
          {
            id: C,
            value: p,
            autoComplete: "username",
            disabled: T,
            "aria-invalid": $.username ? !0 : void 0,
            onChange: (k) => {
              b(k.target.value), O((v) => ({ ...v, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ar, { label: f, required: !0, error: $.password, children: ({ inputId: C }) => /* @__PURE__ */ o(
          jf,
          {
            id: C,
            value: h,
            autoComplete: "current-password",
            disabled: T,
            "aria-invalid": $.password ? !0 : void 0,
            onChange: (k) => {
              _(k.target.value), O((v) => ({ ...v, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ A("label", { className: Dr.remember, children: [
          /* @__PURE__ */ o(
            iu,
            {
              checked: x,
              disabled: T,
              onChange: (C) => N(C.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(ln, { type: "submit", loading: T, disabled: T, children: y }),
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
function Gf(e) {
  if (Array.isArray(e)) return e;
}
function Vf(e, t) {
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
function Yf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xf(e, t) {
  return Gf(e) || Vf(e, t) || Zf(e, t) || Yf();
}
function Zf(e, t) {
  if (e) {
    if (typeof e == "string") return zs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zs(e, t) : void 0;
  }
}
const Ia = Object.entries, Rs = Object.setPrototypeOf, Jf = Object.isFrozen, Qf = Object.getPrototypeOf, e_ = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, St = Object.seal, xr = Object.create, La = typeof Reflect < "u" && Reflect, Ko = La.apply, Go = La.construct;
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
const sr = yt(Array.prototype.forEach), t_ = yt(Array.prototype.lastIndexOf), Ps = yt(Array.prototype.pop), Ir = yt(Array.prototype.push), n_ = yt(Array.prototype.splice), wr = Array.isArray, qr = yt(String.prototype.toLowerCase), Lo = yt(String.prototype.toString), js = yt(String.prototype.match), Lr = yt(String.prototype.replace), Bs = yt(String.prototype.indexOf), r_ = yt(String.prototype.trim), o_ = yt(Number.prototype.toString), s_ = yt(Boolean.prototype.toString), Fs = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Hs = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), Vt = yt(Object.prototype.hasOwnProperty), zr = yt(Object.prototype.toString), Lt = yt(RegExp.prototype.test), qn = a_(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return Ko(e, t, r);
  };
}
function a_(e) {
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
      i !== a && (Jf(t) || (t[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function l_(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function on(e) {
  const t = xr(null);
  for (const r of Ia(e)) {
    var n = Xf(r, 2);
    const a = n[0], i = n[1];
    Vt(e, a) && (wr(i) ? t[a] = l_(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = on(i) : t[a] = i);
  }
  return t;
}
function i_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return o_(e);
    case "boolean":
      return s_(e);
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
    const r = e_(e, t);
    if (r) {
      if (r.get) return yt(r.get);
      if (typeof r.value == "function") return yt(r.value);
    }
    e = Qf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function c_(e) {
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
]), d_ = kt([
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
]), u_ = kt([
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
]), f_ = St(/{{[\w\W]*|^[\w\W]*}}/g), __ = St(/<%[\w\W]*|^[\w\W]*%>/g), p_ = St(/\${[\w\W]*/g), h_ = St(/^data-[\-\w.\u00B7-\uFFFF]+$/), m_ = St(/^aria-[\-\w]+$/), Gs = St(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), g_ = St(/^(?:\w+script|data):/i), y_ = St(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), b_ = St(/^html$/i), x_ = St(/^[a-z][.\w]*(-[.\w]+)+$/i), Vs = St(/<[/\w!]/g), Ys = St(/<[/\w]/g), v_ = St(/<\/no(script|embed|frames)/i), w_ = St(/\/>/i), tn = {
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
], k_ = kt(We({}, za)), N_ = (function() {
  const e = {};
  return sr(za, (t) => {
    e[t] = St(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), $_ = function() {
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
  return Vt(t, n) && wr(t[n]) ? We(a.base ? on(a.base) : {}, t[n], a.transform) : r;
}, Bo = function(t, n, r) {
  const a = Vt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? on(a) : r();
};
function Ra() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $_();
  const t = (se) => Ra(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = s.prototype, y = pn(f, "cloneNode"), m = pn(f, "remove"), g = pn(f, "removeAttributeNode"), p = pn(f, "nextSibling"), b = pn(f, "childNodes"), h = pn(f, "parentNode"), _ = pn(f, "shadowRoot"), x = pn(f, "attributes"), N = c && c.prototype ? pn(c.prototype, "nodeType") : null, w = c && c.prototype ? pn(c.prototype, "nodeName") : null, M = c && c.prototype ? pn(c.prototype, "ownerDocument") : null, $ = function(S) {
    return N ? N(S) : S.nodeType;
  }, O = function(S) {
    return w ? w(S) : S.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let T, I = "", D, C = !1, k = 0;
  const v = function() {
    if (k > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, E = function(S) {
    v(), k++;
    try {
      return T.createHTML(S);
    } finally {
      k--;
    }
  }, R = function(S) {
    v(), k++;
    try {
      return T.createScriptURL(S);
    } finally {
      k--;
    }
  }, L = function() {
    return C || (D = S_(u, a), C = !0), D;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let ae = Xs();
  t.isSupported = typeof Ia == "function" && typeof h == "function" && F && F.createHTMLDocument !== void 0;
  const _e = f_, K = __, me = p_, ue = h_, xe = m_, pe = g_, Ae = y_, G = x_;
  let Oe = Gs, re = null;
  const Me = We({}, [
    ...Us,
    ...zo,
    ...Ro,
    ...Po,
    ...Ws
  ]);
  let fe = null;
  const Fe = We({}, [
    ...qs,
    ...jo,
    ...Ks,
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
  })), Qe = null, Mt = null;
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
  let bt = !0, Z = !0, z = !1, Y = !0, Q = !1, ge = !0, le = !1, Ee = !1, je = null, Je = null, et = !1, ot = !1, Xt = !1, oe = !1, ze = !0, Nt = !1;
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
  let Le = null, Tt = null;
  const Zt = n.createElement("form"), hn = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Cn = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === S) return;
    (!S || typeof S != "object") && (S = {}), S = on(S), st = Et.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ht : S.PARSER_MEDIA_TYPE, Le = st === "application/xhtml+xml" ? Lo : qr, re = Kn(S, "ALLOWED_TAGS", Me, { transform: Le }), fe = Kn(S, "ALLOWED_ATTR", Fe, { transform: Le }), de = Kn(S, "ALLOWED_NAMESPACES", Ne, { transform: Lo }), he = Kn(S, "ADD_URI_SAFE_ATTR", Ve, {
      transform: Le,
      base: Ve
    }), ct = Kn(S, "ADD_DATA_URI_TAGS", V, {
      transform: Le,
      base: V
    }), vt = Kn(S, "FORBID_CONTENTS", Ot, { transform: Le }), Qe = Kn(S, "FORBID_TAGS", on({}), { transform: Le }), Mt = Kn(S, "FORBID_ATTR", on({}), { transform: Le }), qe = Vt(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? on(S.USE_PROFILES) : S.USE_PROFILES : !1, bt = S.ALLOW_ARIA_ATTR !== !1, Z = S.ALLOW_DATA_ATTR !== !1, z = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = S.SAFE_FOR_TEMPLATES || !1, ge = S.SAFE_FOR_XML !== !1, le = S.WHOLE_DOCUMENT || !1, ot = S.RETURN_DOM || !1, Xt = S.RETURN_DOM_FRAGMENT || !1, oe = S.RETURN_TRUSTED_TYPE || !1, et = S.FORCE_BODY || !1, ze = S.SANITIZE_DOM !== !1, Nt = S.SANITIZE_NAMED_PROPS || !1, xt = S.KEEP_CONTENT !== !1, Ie = S.IN_PLACE || !1, Oe = c_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Gs, q = typeof S.NAMESPACE == "string" ? S.NAMESPACE : Xe, Ce = Bo(S, "MATHML_TEXT_INTEGRATION_POINTS", () => We({}, ke)), Be = Bo(S, "HTML_INTEGRATION_POINTS", () => We({}, Ke));
    const P = Bo(S, "CUSTOM_ELEMENT_HANDLING", () => xr(null));
    if (Ge = xr(null), Vt(P, "tagNameCheck") && hn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && hn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), St(Ge), Q && (Z = !1), Xt && (ot = !0), qe && (re = We({}, Ws), fe = xr(null), qe.html === !0 && (We(re, Us), We(fe, qs)), qe.svg === !0 && (We(re, zo), We(fe, jo), We(fe, so)), qe.svgFilters === !0 && (We(re, Ro), We(fe, jo), We(fe, so)), qe.mathMl === !0 && (We(re, Po), We(fe, Ks), We(fe, so))), it.tagCheck = null, it.attributeCheck = null, Vt(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? it.tagCheck = S.ADD_TAGS : wr(S.ADD_TAGS) && (re === Me && (re = on(re)), We(re, S.ADD_TAGS, Le))), Vt(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? it.attributeCheck = S.ADD_ATTR : wr(S.ADD_ATTR) && (fe === Fe && (fe = on(fe)), We(fe, S.ADD_ATTR, Le))), Vt(S, "ADD_FORBID_CONTENTS") && wr(S.ADD_FORBID_CONTENTS) && (vt === Ot && (vt = on(vt)), We(vt, S.ADD_FORBID_CONTENTS, Le)), xt && (re["#text"] = !0), le && We(re, [
      "html",
      "head",
      "body"
    ]), re.table && (We(re, ["tbody"]), delete Qe.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = T;
      T = S.TRUSTED_TYPES_POLICY;
      try {
        I = E("");
      } catch (ce) {
        throw T = J, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (T = void 0, I = "") : (T === void 0 && (T = L()), T && typeof I == "string" && (I = E("")));
    kt && kt(S), Tt = S;
  }, Fn = We({}, [
    ...zo,
    ...Ro,
    ...d_
  ]), kn = We({}, [...Po, ...u_]), Zr = function(S, P, J) {
    return P.namespaceURI === Xe ? S === "svg" : P.namespaceURI === Ye ? S === "svg" && (J === "annotation-xml" || Ce[J]) : !!Fn[S];
  }, So = function(S, P, J) {
    return P.namespaceURI === Xe ? S === "math" : P.namespaceURI === Pt ? S === "math" && Be[J] : !!kn[S];
  }, Oo = function(S, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !kn[S] && (dt[S] || !Fn[S]);
  }, Eo = function(S) {
    let P = h(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: q,
      tagName: "template"
    });
    const J = qr(S.tagName), ce = qr(P.tagName);
    return de[S.namespaceURI] ? S.namespaceURI === Pt ? Zr(J, P, ce) : S.namespaceURI === Ye ? So(J, P, ce) : S.namespaceURI === Xe ? Oo(J, P, ce) : !!(st === "application/xhtml+xml" && de[S.namespaceURI]) : !1;
  }, mn = function(S) {
    Ir(t.removed, { element: S });
    try {
      h(S).removeChild(S);
    } catch {
      if (m(S), !h(S)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(S, P, J) {
    try {
      g(S, P);
    } catch {
      try {
        S.removeAttribute(J);
      } catch {
      }
    }
  }, gn = function(S) {
    H(S);
    const P = b(S);
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
    const J = x(S);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Jr(S, Te, Pe);
    }
  }, jt = function(S, P, J) {
    if (!J) try {
      J = P.getAttributeNode(S);
    } catch {
      J = null;
    }
    Ir(t.removed, {
      attribute: J || null,
      from: P
    });
    try {
      J ? g(P, J) : P.removeAttribute(S);
    } catch {
      try {
        P.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (ot || Xt) try {
        mn(P);
      } catch {
      }
      else try {
        P.setAttribute(S, "");
      } catch {
      }
  }, Nr = function(S) {
    const P = x(S);
    if (P)
      for (let J = P.length - 1; J >= 0; --J) {
        const ce = P[J], Te = ce && ce.name;
        typeof Te != "string" || fe[Le(Te)] || Jr(S, ce, Te);
      }
  }, H = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const J = P.pop();
      $(J) === tn.element && Nr(J);
      const ce = b(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function(S, P) {
    return ge ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, ye = function(S) {
    if (!ge) return;
    const P = [S];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = $(J);
      if (ce === tn.processingInstruction || ce === tn.comment && Lt(Ys, J.data)) {
        try {
          m(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = Le(O(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = b(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) P.push(Te[Pe]);
    }
  }, ve = function(S) {
    let P = null, J = null;
    if (et) S = "<remove></remove>" + S;
    else {
      const Pe = js(S, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    st === "application/xhtml+xml" && q === Xe && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = T ? E(S) : S;
    if (q === Xe) try {
      P = new d().parseFromString(ce, st);
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
    return S && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), q === Xe ? te.call(P, le ? "html" : "body")[0] : le ? P.documentElement : Te;
  }, tt = function(S) {
    const P = M ? M(S) : S.ownerDocument;
    return X.call(P || S, S, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, At = function(S) {
    return S = Lr(S, _e, " "), S = Lr(S, K, " "), S = Lr(S, me, " "), S;
  }, wt = function(S) {
    var P;
    S.normalize();
    const J = M ? M(S) : S.ownerDocument, ce = X.call(J || S, S, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = At(Te.data), Te = ce.nextNode();
    const Pe = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    Pe && sr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, yn = function(S) {
    const P = w ? w(S) : null;
    return typeof P != "string" || Le(P) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || S.attributes !== x(S) || typeof S.removeAttribute != "function" || typeof S.removeAttributeNode != "function" || typeof S.getAttributeNode != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || S.nodeType !== N(S) || S.childNodes !== b(S);
  }, Ct = function(S) {
    if (!N || typeof S != "object" || S === null) return !1;
    try {
      return N(S) === tn.documentFragment;
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
  function Jt(se, S, P) {
    se.length !== 0 && sr(se, (J) => {
      J.call(t, S, P, Tt);
    });
  }
  const To = function(S, P) {
    return !!(ge && S.hasChildNodes() && !gt(S.firstElementChild) && Lt(Vs, S.textContent) && Lt(Vs, S.innerHTML) || ge && S.namespaceURI === Xe && k_[P] && (gt(S.firstElementChild) || typeof S.textContent == "string" && Lt(N_[P], S.textContent)) || S.nodeType === tn.processingInstruction || ge && S.nodeType === tn.comment && Lt(Ys, S.data));
  }, Qr = function(S, P) {
    if (S instanceof RegExp) return Lt(S, P);
    if (S instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!S(P, ...ce);
    }
    return !1;
  }, nl = function(S, P, J) {
    if (!Qe[P] && gs(P) && Qr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = h(S), Te = b(S);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ut = S === J ? y(Te[He], !0) : Te[He];
          ce.insertBefore(ut, p(S));
        }
      }
    }
    return mn(S), !0;
  }, ps = function(S, P, J, ce) {
    return S.length === 0 ? P : P === J || P === ce ? on(P) : P;
  }, dr = function(S, P) {
    return S === P || h(S) !== null ? !1 : (Ie && H(S), !0);
  }, hs = function(S, P) {
    if (Jt(ae.beforeSanitizeElements, S, null), dr(S, P)) return !0;
    if (yn(S))
      return mn(S), !0;
    const J = Le(O(S));
    if (re = ps(ae.uponSanitizeElement, re, Me, je), Jt(ae.uponSanitizeElement, S, {
      tagName: J,
      allowedTags: re
    }), dr(S, P)) return !0;
    if (To(S, J))
      return mn(S), !0;
    if (Qe[J] || !(it.tagCheck instanceof Function && it.tagCheck(J)) && !re[J]) {
      const ce = nl(S, J, P);
      return ce === !1 && (Jt(ae.afterSanitizeElements, S, null), dr(S, P)) ? !0 : ce;
    }
    if ($(S) === tn.element && !Eo(S) || (J === "noscript" || J === "noembed" || J === "noframes") && Lt(v_, S.innerHTML))
      return mn(S), !0;
    if (Q && S.nodeType === tn.text) {
      const ce = At(S.textContent);
      S.textContent !== ce && (Ir(t.removed, { element: S.cloneNode() }), S.textContent = ce);
    }
    return Jt(ae.afterSanitizeElements, S, null), dr(S, P);
  }, ms = function(S, P, J) {
    if (Mt[P] || U(P, S) || ze && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || it.attributeCheck instanceof Function && it.attributeCheck(P, S);
    return Z && Lt(ue, P) || bt && Lt(xe, P) ? !0 : ce ? he[P] || Lt(Oe, Lr(J, Ae, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Bs(J, "data:") === 0 && ct[S] || z && !Lt(pe, Lr(J, Ae, "")) ? !0 : !J : gs(S) && Qr(Ge.tagNameCheck, S) && Qr(Ge.attributeNameCheck, P, S) || P === "is" && Ge.allowCustomizedBuiltInElements && Qr(Ge.tagNameCheck, J);
  }, rl = We({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), gs = function(S) {
    return !rl[qr(S)] && Lt(G, S);
  }, ol = function(S, P, J, ce) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !J) switch (u.getAttributeType(S, P)) {
      case "TrustedHTML":
        return E(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, sl = function(S, P, J, ce) {
    try {
      return J ? S.setAttributeNS(J, P, ce) : S.setAttribute(P, ce), yn(S) ? (mn(S), !1) : !0;
    } catch {
      return jt(P, S), !1;
    }
  }, ys = function(S, P) {
    if (Jt(ae.beforeSanitizeAttributes, S, null), dr(S, P)) return;
    const J = S.attributes;
    if (!J || yn(S)) return;
    fe = ps(ae.uponSanitizeAttribute, fe, Fe, Je);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = Le(S.nodeName);
    for (; Te--; ) {
      const He = J[Te], ut = He.name, dn = He.namespaceURI, Qt = He.value, ur = Le(ut), Mo = Qt;
      let Bt = ut === "value" ? Mo : r_(Mo), bs = !1;
      if (ce.attrName = ur, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(ae.uponSanitizeAttribute, S, ce), Bt = ce.attrValue, Nt && (ur === "id" || ur === "name") && Bs(Bt, Rt) !== 0 && (jt(ut, S, He), Bt = Rt + Bt, bs = !0), ge && Lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ut, S, He);
        continue;
      }
      if (ur === "attributename" && js(Bt, "href")) {
        jt(ut, S, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ut, S, He);
          continue;
        }
        if (!Y && Lt(w_, Bt)) {
          jt(ut, S, He);
          continue;
        }
        if (Q && (Bt = At(Bt)), !ms(Pe, ur, Bt)) {
          jt(ut, S, He);
          continue;
        }
        Bt = ol(Pe, ur, dn, Bt), Bt !== Mo && sl(S, ut, dn, Bt) && bs && Ps(t.removed);
      }
    }
    Jt(ae.afterSanitizeAttributes, S, null), dr(S, P);
  }, eo = function(S) {
    let P = null;
    const J = tt(S);
    for (Jt(ae.beforeSanitizeShadowDOM, S, null); P = J.nextNode(); )
      if (Jt(ae.uponSanitizeShadowNode, P, null), hs(P, S), ys(P, S), Ct(P.content) && eo(P.content), $(P) === tn.element) {
        const ce = _(P);
        Ct(ce) && (Co(ce), eo(ce));
      }
    Jt(ae.afterSanitizeShadowDOM, S, null);
  }, Co = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        eo(J.shadow);
        continue;
      }
      const ce = J.node, Te = $(ce) === tn.element, Pe = b(ce);
      if (Pe) for (let He = Pe.length - 1; He >= 0; --He) P.push({
        node: Pe[He],
        shadow: null
      });
      if (Te) {
        const He = w ? w(ce) : null;
        if (typeof He == "string" && Le(He) === "template") {
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
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, J = null, ce = null, Te = null;
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = i_(se), typeof se != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (re = je, fe = Je) : Cn(S), (ae.uponSanitizeElement.length > 0 || ae.uponSanitizeAttribute.length > 0) && (re = on(re)), ae.uponSanitizeAttribute.length > 0 && (fe = on(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      ye(se);
      const dn = O(se);
      if (typeof dn == "string") {
        const Qt = Le(dn);
        if (!re[Qt] || Qe[Qt])
          throw gn(se), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (yn(se))
        throw gn(se), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        Co(se);
      } catch (Qt) {
        throw gn(se), Qt;
      }
    } else if (gt(se))
      P = ve("<!---->"), J = P.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), Co(P);
    else {
      if (!ot && !Q && !le && se.indexOf("<") === -1) return T && oe ? E(se) : se;
      if (P = ve(se), !P) return ot ? null : oe ? I : "";
    }
    P && et && mn(P.firstChild);
    const He = Pe ? se : P;
    try {
      const dn = tt(He);
      for (; ce = dn.nextNode(); )
        hs(ce, He), ys(ce, He), Ct(ce.content) && eo(ce.content);
    } catch (dn) {
      throw Pe && (gn(se), sr(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), dn;
    }
    if (Pe) {
      let dn = !1;
      if (sr(t.removed, (Qt) => {
        Qt.element && (Qt.element === se && (dn = !0), H(Qt.element));
      }), dn) throw qn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(se), se;
    }
    if (ot) {
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ut = le ? P.outerHTML : P.innerHTML;
    return le && re["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Lt(b_, P.ownerDocument.doctype.name) && (ut = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ut), Q && (ut = At(ut)), T && oe ? E(ut) : ut;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cn(se), Ee = !0, je = re, Je = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Je = null, T = D, I = "";
  }, t.isValidAttribute = function(se, S, P) {
    Tt || Cn({});
    const J = Le(se), ce = Le(S);
    return ms(J, ce, P);
  }, t.addHook = function(se, S) {
    typeof S == "function" && Vt(ae, se) && Ir(ae[se], S);
  }, t.removeHook = function(se, S) {
    if (Vt(ae, se)) {
      if (S !== void 0) {
        const P = t_(ae[se], S);
        return P === -1 ? void 0 : n_(ae[se], P, 1)[0];
      }
      return Ps(ae[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(ae, se) && (ae[se] = []);
  }, t.removeAllHooks = function() {
    ae = Xs();
  }, t;
}
var Pa = Ra();
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
function E_(e, t = {}) {
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
const T_ = "_markdown_1vu4b_3", C_ = "_resize_1vu4b_61", Zs = {
  markdown: T_,
  resize: C_
};
function _S({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = Se(
    () => Pa.sanitize(E_(e, { allowHtml: t })),
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
const M_ = "_editor_2a7al_3", A_ = "_toolbar_2a7al_13", D_ = "_tool_2a7al_13", I_ = "_separator_2a7al_56", L_ = "_area_2a7al_63", z_ = "_source_2a7al_73", R_ = "_alignGlyph_2a7al_84", P_ = "_colorInput_2a7al_89", j_ = "_select_2a7al_98", $t = {
  editor: M_,
  toolbar: A_,
  tool: D_,
  separator: I_,
  area: L_,
  source: z_,
  alignGlyph: R_,
  colorInput: P_,
  select: j_
}, B_ = [
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
}, F_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], H_ = ["1", "2", "3", "4", "5", "6", "7"], U_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
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
function W_(e) {
  return Vo("formatBlock", `<${e}>`) || Vo("formatBlock", e);
}
function q_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const pS = at(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: a,
    toolbar: i = B_,
    imageUpload: c,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: u,
    sanitize: f = !0
  }, y) {
    const [m, g] = W(!1), [p, b] = W(n), [h, _] = W(
      null
    ), [x, N] = W(""), [w, M] = W(""), [$, O] = W(2), [T, I] = W(2), [D, C] = W(!1), k = ne(null), v = ne(null), E = ne(n), R = B(
      (G) => f ? Pa.sanitize(G) : G,
      [f]
    );
    be(() => {
      const G = k.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (E.current = t);
    }, [t]);
    const L = B(
      (G) => {
        E.current = R(G), r?.(E.current);
      },
      [R, r]
    ), j = B(
      (G, Oe) => {
        if (s || l) return !1;
        k.current?.focus();
        const re = Vo(G, Oe);
        if (re) {
          const Me = k.current;
          Me && L(Me.innerHTML);
        }
        return re;
      },
      [L, s, l]
    ), F = B(
      () => k.current?.innerHTML ?? E.current,
      []
    ), X = B(
      (G) => {
        j("insertHTML", G);
      },
      [j]
    ), ie = B(() => {
      k.current?.focus();
    }, []), te = Se(
      () => ({
        execCommand: j,
        getHtml: F,
        insertHtml: X,
        focus: ie
      }),
      [j, F, X, ie]
    );
    ko(y, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const Oe = Js[G];
        !Oe || s || l || j(Oe.command);
      },
      [j, s, l]
    ), ae = B(() => {
      s || l || (m ? (g(!1), L(p)) : (b(k.current?.innerHTML ?? ""), g(!0)));
    }, [m, p, L, s, l]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || s || l) return;
        const Oe = G.key.toLowerCase(), re = Oe === "b" ? "bold" : Oe === "i" ? "italic" : Oe === "u" ? "underline" : null;
        re && (G.preventDefault(), we(re));
      },
      [we, s, l]
    ), K = B(() => {
      const G = k.current;
      G && L(G.innerHTML);
    }, [L]), me = B(() => {
      x.trim() && (j("createLink", x.trim()), N(""), _(null));
    }, [x, j]), ue = B(() => {
      w.trim() && (j("insertImage", w.trim()), M(""), _(null));
    }, [w, j]), xe = B(
      async (G) => {
        if (c) {
          C(!0);
          try {
            const Oe = new FormData();
            Oe.append(c.parameterName ?? "file", G);
            const re = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: Oe
            });
            if (!re.ok)
              throw new Error(`Upload failed: ${re.status}`);
            const fe = (re.headers.get("content-type") ?? "").includes("application/json") ? await re.json() : await re.text(), Fe = (c.parseUrl ?? q_)(fe);
            j("insertImage", Fe);
          } catch (Oe) {
            a?.(Oe instanceof Error ? Oe.message : "Image upload failed");
          } finally {
            C(!1), _(null);
          }
        }
      },
      [c, a, j]
    ), pe = B(() => {
      const G = Math.max(1, Math.min(10, Math.floor($) || 1)), Oe = Math.max(1, Math.min(10, Math.floor(T) || 1)), re = Array.from({ length: Oe }, () => "<td><br></td>").join(
        ""
      ), Me = Array.from({ length: G }, () => `<tr>${re}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Me}</tbody></table>`), _(null);
    }, [$, T, j]), Ae = (G, Oe) => {
      if (G === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: $t.separator
          },
          `sep-${Oe}`
        );
      if (typeof G == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: $t.tool,
            "aria-label": G.label,
            title: G.title ?? G.label,
            disabled: l,
            onMouseDown: (Me) => Me.preventDefault(),
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
            className: $t.tool,
            "aria-label": "Source",
            "aria-pressed": m,
            disabled: l,
            onMouseDown: (Me) => Me.preventDefault(),
            onClick: ae,
            children: "</>"
          },
          "source"
        );
      if (G === "foreColor" || G === "backgroundColor") {
        const Me = G === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ A("label", { className: $t.tool, title: Me, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Me,
              disabled: l,
              className: $t.colorInput,
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
        const Me = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? U_ : G === "fontName" ? F_ : H_;
        return /* @__PURE__ */ A(
          "select",
          {
            "aria-label": Me,
            title: Me,
            disabled: l,
            defaultValue: "",
            className: $t.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || s || l || (G === "formatBlock" ? W_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
            className: $t.tool,
            "aria-label": "Insert link",
            disabled: l,
            onMouseDown: (Me) => Me.preventDefault(),
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
            className: $t.tool,
            "aria-label": "Insert image",
            disabled: l,
            onMouseDown: (Me) => Me.preventDefault(),
            onClick: () => {
              !s && !l && (M(""), _("image"));
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
            className: $t.tool,
            "aria-label": "Insert table",
            disabled: l,
            onMouseDown: (Me) => Me.preventDefault(),
            onClick: () => {
              !s && !l && (O(2), I(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const re = Js[G];
      return re ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: $t.tool,
          "aria-label": re.label,
          disabled: l,
          onMouseDown: (Me) => Me.preventDefault(),
          onClick: () => we(G),
          children: re.glyph
        },
        G
      ) : null;
    };
    return /* @__PURE__ */ A("div", { className: [$t.editor, u].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: $t.toolbar,
          children: i.map((G, Oe) => Ae(G, Oe))
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
          onChange: (G) => {
            b(G.target.value), L(G.target.value);
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
          dangerouslySetInnerHTML: { __html: E.current },
          onInput: K,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ A(
        Ca,
        {
          open: h !== null,
          onClose: () => _(null),
          title: h === "link" ? "Insert link" : h === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ A(rt, { children: [
            /* @__PURE__ */ o(ln, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            h === "link" && /* @__PURE__ */ o(ln, { onClick: me, children: "Insert" }),
            h === "image" && /* @__PURE__ */ o(ln, { onClick: ue, disabled: D, children: "Insert" }),
            h === "table" && /* @__PURE__ */ o(ln, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            h === "link" && /* @__PURE__ */ o(ar, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ o(
              no,
              {
                id: G,
                value: x,
                placeholder: "https://",
                onChange: (Oe) => N(Oe.target.value)
              }
            ) }),
            h === "image" && /* @__PURE__ */ A(rt, { children: [
              /* @__PURE__ */ o(ar, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  value: w,
                  placeholder: "https://",
                  onChange: (Oe) => M(Oe.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(ar, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ o(
                "input",
                {
                  id: G,
                  ref: v,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: (Oe) => {
                    const re = Oe.target.files?.[0];
                    re && xe(re), Oe.target.value = "";
                  }
                }
              ) }),
              D && /* @__PURE__ */ o(Ma, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            h === "table" && /* @__PURE__ */ A(rt, { children: [
              /* @__PURE__ */ o(ar, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  type: "number",
                  value: String($),
                  onChange: (Oe) => O(Number(Oe.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ar, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  type: "number",
                  value: String(T),
                  onChange: (Oe) => I(Number(Oe.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), K_ = "_popup_ve7kd_4", ja = {
  popup: K_
}, Ba = ir(null);
function hS() {
  const e = Bn(Ba);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Qs(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function G_({ state: e }) {
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
function mS({ children: e }) {
  const [t, n] = W(null), r = ne(0), a = ne(null), i = B(() => {
    a.current?.(), a.current = null;
  }, []), c = B(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = B(
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
  be(() => {
    if (!t) return;
    const d = (m) => {
      const g = document.querySelector(`.${ja.popup}`);
      g && !g.contains(m.target) && c();
    }, u = (m) => {
      m.key === "Escape" && (m.preventDefault(), c());
    }, f = () => c(), y = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", u, !0), window.addEventListener("resize", f), window.addEventListener("hashchange", y), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", u, !0), window.removeEventListener("resize", f), window.removeEventListener("hashchange", y);
    };
  }, [t, c]);
  const l = Se(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ A(Ba.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(G_, { state: t }, t.seq)
  ] });
}
const V_ = "_alert_146r9_1", Y_ = "_xs_146r9_28", X_ = "_sm_146r9_38", Z_ = "_lg_146r9_48", J_ = "_xl_146r9_58", Q_ = "_primary_146r9_69", ep = "_secondary_146r9_74", tp = "_light_146r9_79", np = "_base_146r9_84", rp = "_dark_146r9_89", op = "_info_146r9_94", sp = "_success_146r9_99", ap = "_warning_146r9_104", lp = "_danger_146r9_109", ip = "_flat_146r9_116", cp = "_outlined_146r9_123", dp = "_filled_146r9_132", up = "_text_146r9_139", fp = "_icon_146r9_181", _p = "_content_146r9_192", pp = "_title_146r9_197", hp = "_body_146r9_203", mp = "_dismiss_146r9_209", $n = {
  alert: V_,
  xs: Y_,
  sm: X_,
  lg: Z_,
  xl: J_,
  primary: Q_,
  secondary: ep,
  light: tp,
  base: np,
  dark: rp,
  info: op,
  success: sp,
  warning: ap,
  danger: lp,
  flat: ip,
  outlined: cp,
  filled: dp,
  text: up,
  icon: fp,
  content: _p,
  title: pp,
  body: hp,
  dismiss: mp,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, gp = {
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
function gS({
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
  const [g, p] = W(!1);
  if (u === !1 || u === void 0 && g)
    return null;
  const b = () => {
    u === void 0 && p(!0), d?.(), f?.(!1);
  }, h = e, _ = Na(t, "filled"), x = Vr(n), N = i ?? (c ? /* @__PURE__ */ o(De, { icon: gp[e] }) : null);
  return /* @__PURE__ */ A(
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
        y
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ o("span", { className: $n.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ A("div", { className: $n.content, children: [
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
const yp = "_skeleton_1xyce_1", bp = "_text_1xyce_35", xp = "_circle_1xyce_40", vp = "_rect_1xyce_44", ea = {
  skeleton: yp,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: bp,
  circle: xp,
  rect: vp
};
function yS({
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
const wp = "_row_juebr_1", kp = "_start_juebr_14", Np = "_center_juebr_18", $p = "_end_juebr_22", Sp = "_stretch_juebr_26", Op = "_baseline_juebr_30", Ep = "_normal_juebr_34", Tp = "_noWrap_juebr_90", Cp = "_wrapReverse_juebr_94", io = {
  row: wp,
  start: kp,
  center: Np,
  end: $p,
  stretch: Sp,
  baseline: Op,
  normal: Ep,
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
  noWrap: Tp,
  wrapReverse: Cp
};
function ta(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function bS({
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
const Mp = "_column_sh0ss_1", Ap = "_Size1_sh0ss_15", Dp = "_Size2_sh0ss_24", Ip = "_Size3_sh0ss_33", Lp = "_Size4_sh0ss_42", zp = "_Size5_sh0ss_51", Rp = "_Size6_sh0ss_60", Pp = "_Size7_sh0ss_69", jp = "_Size8_sh0ss_78", Bp = "_Size9_sh0ss_87", Fp = "_Size10_sh0ss_96", Hp = "_Size11_sh0ss_105", Up = "_Size12_sh0ss_114", Wp = "_Offset0_sh0ss_119", qp = "_Offset1_sh0ss_122", Kp = "_Offset2_sh0ss_127", Gp = "_Offset3_sh0ss_132", Vp = "_Offset4_sh0ss_137", Yp = "_Offset5_sh0ss_142", Xp = "_Offset6_sh0ss_147", Zp = "_Offset7_sh0ss_152", Jp = "_Offset8_sh0ss_157", Qp = "_Offset9_sh0ss_162", eh = "_Offset10_sh0ss_167", th = "_Offset11_sh0ss_172", nh = "_Offset12_sh0ss_177", rh = "_OrderFirst_sh0ss_182", oh = "_OrderLast_sh0ss_185", sh = "_Order0_sh0ss_188", ah = "_Order1_sh0ss_191", lh = "_Order2_sh0ss_194", ih = "_Order3_sh0ss_197", ch = "_Order4_sh0ss_200", dh = "_Order5_sh0ss_203", uh = "_Order6_sh0ss_206", fh = "_Order7_sh0ss_209", _h = "_Order8_sh0ss_212", ph = "_Order9_sh0ss_215", hh = "_Order10_sh0ss_218", mh = "_Order11_sh0ss_221", gh = "_Order12_sh0ss_224", yh = "_xsSize1_sh0ss_229", bh = "_xsSize2_sh0ss_238", xh = "_xsSize3_sh0ss_247", vh = "_xsSize4_sh0ss_256", wh = "_xsSize5_sh0ss_265", kh = "_xsSize6_sh0ss_274", Nh = "_xsSize7_sh0ss_283", $h = "_xsSize8_sh0ss_292", Sh = "_xsSize9_sh0ss_301", Oh = "_xsSize10_sh0ss_310", Eh = "_xsSize11_sh0ss_321", Th = "_xsSize12_sh0ss_332", Ch = "_xsOffset0_sh0ss_337", Mh = "_xsOffset1_sh0ss_340", Ah = "_xsOffset2_sh0ss_345", Dh = "_xsOffset3_sh0ss_350", Ih = "_xsOffset4_sh0ss_355", Lh = "_xsOffset5_sh0ss_360", zh = "_xsOffset6_sh0ss_365", Rh = "_xsOffset7_sh0ss_370", Ph = "_xsOffset8_sh0ss_375", jh = "_xsOffset9_sh0ss_380", Bh = "_xsOffset10_sh0ss_385", Fh = "_xsOffset11_sh0ss_391", Hh = "_xsOffset12_sh0ss_397", Uh = "_xsOrderFirst_sh0ss_403", Wh = "_xsOrderLast_sh0ss_406", qh = "_xsOrder0_sh0ss_409", Kh = "_xsOrder1_sh0ss_412", Gh = "_xsOrder2_sh0ss_415", Vh = "_xsOrder3_sh0ss_418", Yh = "_xsOrder4_sh0ss_421", Xh = "_xsOrder5_sh0ss_424", Zh = "_xsOrder6_sh0ss_427", Jh = "_xsOrder7_sh0ss_430", Qh = "_xsOrder8_sh0ss_433", em = "_xsOrder9_sh0ss_436", tm = "_xsOrder10_sh0ss_439", nm = "_xsOrder11_sh0ss_442", rm = "_xsOrder12_sh0ss_445", om = "_smSize1_sh0ss_451", sm = "_smSize2_sh0ss_460", am = "_smSize3_sh0ss_469", lm = "_smSize4_sh0ss_478", im = "_smSize5_sh0ss_487", cm = "_smSize6_sh0ss_496", dm = "_smSize7_sh0ss_505", um = "_smSize8_sh0ss_514", fm = "_smSize9_sh0ss_523", _m = "_smSize10_sh0ss_532", pm = "_smSize11_sh0ss_543", hm = "_smSize12_sh0ss_554", mm = "_smOffset0_sh0ss_559", gm = "_smOffset1_sh0ss_562", ym = "_smOffset2_sh0ss_567", bm = "_smOffset3_sh0ss_572", xm = "_smOffset4_sh0ss_577", vm = "_smOffset5_sh0ss_582", wm = "_smOffset6_sh0ss_587", km = "_smOffset7_sh0ss_592", Nm = "_smOffset8_sh0ss_597", $m = "_smOffset9_sh0ss_602", Sm = "_smOffset10_sh0ss_607", Om = "_smOffset11_sh0ss_613", Em = "_smOffset12_sh0ss_619", Tm = "_smOrderFirst_sh0ss_625", Cm = "_smOrderLast_sh0ss_628", Mm = "_smOrder0_sh0ss_631", Am = "_smOrder1_sh0ss_634", Dm = "_smOrder2_sh0ss_637", Im = "_smOrder3_sh0ss_640", Lm = "_smOrder4_sh0ss_643", zm = "_smOrder5_sh0ss_646", Rm = "_smOrder6_sh0ss_649", Pm = "_smOrder7_sh0ss_652", jm = "_smOrder8_sh0ss_655", Bm = "_smOrder9_sh0ss_658", Fm = "_smOrder10_sh0ss_661", Hm = "_smOrder11_sh0ss_664", Um = "_smOrder12_sh0ss_667", Wm = "_mdSize1_sh0ss_673", qm = "_mdSize2_sh0ss_682", Km = "_mdSize3_sh0ss_691", Gm = "_mdSize4_sh0ss_700", Vm = "_mdSize5_sh0ss_709", Ym = "_mdSize6_sh0ss_718", Xm = "_mdSize7_sh0ss_727", Zm = "_mdSize8_sh0ss_736", Jm = "_mdSize9_sh0ss_745", Qm = "_mdSize10_sh0ss_754", e1 = "_mdSize11_sh0ss_765", t1 = "_mdSize12_sh0ss_776", n1 = "_mdOffset0_sh0ss_781", r1 = "_mdOffset1_sh0ss_784", o1 = "_mdOffset2_sh0ss_789", s1 = "_mdOffset3_sh0ss_794", a1 = "_mdOffset4_sh0ss_799", l1 = "_mdOffset5_sh0ss_804", i1 = "_mdOffset6_sh0ss_809", c1 = "_mdOffset7_sh0ss_814", d1 = "_mdOffset8_sh0ss_819", u1 = "_mdOffset9_sh0ss_824", f1 = "_mdOffset10_sh0ss_829", _1 = "_mdOffset11_sh0ss_835", p1 = "_mdOffset12_sh0ss_841", h1 = "_mdOrderFirst_sh0ss_847", m1 = "_mdOrderLast_sh0ss_850", g1 = "_mdOrder0_sh0ss_853", y1 = "_mdOrder1_sh0ss_856", b1 = "_mdOrder2_sh0ss_859", x1 = "_mdOrder3_sh0ss_862", v1 = "_mdOrder4_sh0ss_865", w1 = "_mdOrder5_sh0ss_868", k1 = "_mdOrder6_sh0ss_871", N1 = "_mdOrder7_sh0ss_874", $1 = "_mdOrder8_sh0ss_877", S1 = "_mdOrder9_sh0ss_880", O1 = "_mdOrder10_sh0ss_883", E1 = "_mdOrder11_sh0ss_886", T1 = "_mdOrder12_sh0ss_889", C1 = "_lgSize1_sh0ss_895", M1 = "_lgSize2_sh0ss_904", A1 = "_lgSize3_sh0ss_913", D1 = "_lgSize4_sh0ss_922", I1 = "_lgSize5_sh0ss_931", L1 = "_lgSize6_sh0ss_940", z1 = "_lgSize7_sh0ss_949", R1 = "_lgSize8_sh0ss_958", P1 = "_lgSize9_sh0ss_967", j1 = "_lgSize10_sh0ss_976", B1 = "_lgSize11_sh0ss_987", F1 = "_lgSize12_sh0ss_998", H1 = "_lgOffset0_sh0ss_1003", U1 = "_lgOffset1_sh0ss_1006", W1 = "_lgOffset2_sh0ss_1011", q1 = "_lgOffset3_sh0ss_1016", K1 = "_lgOffset4_sh0ss_1021", G1 = "_lgOffset5_sh0ss_1026", V1 = "_lgOffset6_sh0ss_1031", Y1 = "_lgOffset7_sh0ss_1036", X1 = "_lgOffset8_sh0ss_1041", Z1 = "_lgOffset9_sh0ss_1046", J1 = "_lgOffset10_sh0ss_1051", Q1 = "_lgOffset11_sh0ss_1057", eg = "_lgOffset12_sh0ss_1063", tg = "_lgOrderFirst_sh0ss_1069", ng = "_lgOrderLast_sh0ss_1072", rg = "_lgOrder0_sh0ss_1075", og = "_lgOrder1_sh0ss_1078", sg = "_lgOrder2_sh0ss_1081", ag = "_lgOrder3_sh0ss_1084", lg = "_lgOrder4_sh0ss_1087", ig = "_lgOrder5_sh0ss_1090", cg = "_lgOrder6_sh0ss_1093", dg = "_lgOrder7_sh0ss_1096", ug = "_lgOrder8_sh0ss_1099", fg = "_lgOrder9_sh0ss_1102", _g = "_lgOrder10_sh0ss_1105", pg = "_lgOrder11_sh0ss_1108", hg = "_lgOrder12_sh0ss_1111", mg = "_xlSize1_sh0ss_1117", gg = "_xlSize2_sh0ss_1126", yg = "_xlSize3_sh0ss_1135", bg = "_xlSize4_sh0ss_1144", xg = "_xlSize5_sh0ss_1153", vg = "_xlSize6_sh0ss_1162", wg = "_xlSize7_sh0ss_1171", kg = "_xlSize8_sh0ss_1180", Ng = "_xlSize9_sh0ss_1189", $g = "_xlSize10_sh0ss_1198", Sg = "_xlSize11_sh0ss_1209", Og = "_xlSize12_sh0ss_1220", Eg = "_xlOffset0_sh0ss_1225", Tg = "_xlOffset1_sh0ss_1228", Cg = "_xlOffset2_sh0ss_1233", Mg = "_xlOffset3_sh0ss_1238", Ag = "_xlOffset4_sh0ss_1243", Dg = "_xlOffset5_sh0ss_1248", Ig = "_xlOffset6_sh0ss_1253", Lg = "_xlOffset7_sh0ss_1258", zg = "_xlOffset8_sh0ss_1263", Rg = "_xlOffset9_sh0ss_1268", Pg = "_xlOffset10_sh0ss_1273", jg = "_xlOffset11_sh0ss_1279", Bg = "_xlOffset12_sh0ss_1285", Fg = "_xlOrderFirst_sh0ss_1291", Hg = "_xlOrderLast_sh0ss_1294", Ug = "_xlOrder0_sh0ss_1297", Wg = "_xlOrder1_sh0ss_1300", qg = "_xlOrder2_sh0ss_1303", Kg = "_xlOrder3_sh0ss_1306", Gg = "_xlOrder4_sh0ss_1309", Vg = "_xlOrder5_sh0ss_1312", Yg = "_xlOrder6_sh0ss_1315", Xg = "_xlOrder7_sh0ss_1318", Zg = "_xlOrder8_sh0ss_1321", Jg = "_xlOrder9_sh0ss_1324", Qg = "_xlOrder10_sh0ss_1327", ey = "_xlOrder11_sh0ss_1330", ty = "_xlOrder12_sh0ss_1333", ny = "_xxSize1_sh0ss_1339", ry = "_xxSize2_sh0ss_1348", oy = "_xxSize3_sh0ss_1357", sy = "_xxSize4_sh0ss_1366", ay = "_xxSize5_sh0ss_1375", ly = "_xxSize6_sh0ss_1384", iy = "_xxSize7_sh0ss_1393", cy = "_xxSize8_sh0ss_1402", dy = "_xxSize9_sh0ss_1411", uy = "_xxSize10_sh0ss_1420", fy = "_xxSize11_sh0ss_1431", _y = "_xxSize12_sh0ss_1442", py = "_xxOffset0_sh0ss_1447", hy = "_xxOffset1_sh0ss_1450", my = "_xxOffset2_sh0ss_1455", gy = "_xxOffset3_sh0ss_1460", yy = "_xxOffset4_sh0ss_1465", by = "_xxOffset5_sh0ss_1470", xy = "_xxOffset6_sh0ss_1475", vy = "_xxOffset7_sh0ss_1480", wy = "_xxOffset8_sh0ss_1485", ky = "_xxOffset9_sh0ss_1490", Ny = "_xxOffset10_sh0ss_1495", $y = "_xxOffset11_sh0ss_1501", Sy = "_xxOffset12_sh0ss_1507", Oy = "_xxOrderFirst_sh0ss_1513", Ey = "_xxOrderLast_sh0ss_1516", Ty = "_xxOrder0_sh0ss_1519", Cy = "_xxOrder1_sh0ss_1522", My = "_xxOrder2_sh0ss_1525", Ay = "_xxOrder3_sh0ss_1528", Dy = "_xxOrder4_sh0ss_1531", Iy = "_xxOrder5_sh0ss_1534", Ly = "_xxOrder6_sh0ss_1537", zy = "_xxOrder7_sh0ss_1540", Ry = "_xxOrder8_sh0ss_1543", Py = "_xxOrder9_sh0ss_1546", jy = "_xxOrder10_sh0ss_1549", By = "_xxOrder11_sh0ss_1552", Fy = "_xxOrder12_sh0ss_1555", co = {
  column: Mp,
  Size1: Ap,
  Size2: Dp,
  Size3: Ip,
  Size4: Lp,
  Size5: zp,
  Size6: Rp,
  Size7: Pp,
  Size8: jp,
  Size9: Bp,
  Size10: Fp,
  Size11: Hp,
  Size12: Up,
  Offset0: Wp,
  Offset1: qp,
  Offset2: Kp,
  Offset3: Gp,
  Offset4: Vp,
  Offset5: Yp,
  Offset6: Xp,
  Offset7: Zp,
  Offset8: Jp,
  Offset9: Qp,
  Offset10: eh,
  Offset11: th,
  Offset12: nh,
  OrderFirst: rh,
  OrderLast: oh,
  Order0: sh,
  Order1: ah,
  Order2: lh,
  Order3: ih,
  Order4: ch,
  Order5: dh,
  Order6: uh,
  Order7: fh,
  Order8: _h,
  Order9: ph,
  Order10: hh,
  Order11: mh,
  Order12: gh,
  xsSize1: yh,
  xsSize2: bh,
  xsSize3: xh,
  xsSize4: vh,
  xsSize5: wh,
  xsSize6: kh,
  xsSize7: Nh,
  xsSize8: $h,
  xsSize9: Sh,
  xsSize10: Oh,
  xsSize11: Eh,
  xsSize12: Th,
  xsOffset0: Ch,
  xsOffset1: Mh,
  xsOffset2: Ah,
  xsOffset3: Dh,
  xsOffset4: Ih,
  xsOffset5: Lh,
  xsOffset6: zh,
  xsOffset7: Rh,
  xsOffset8: Ph,
  xsOffset9: jh,
  xsOffset10: Bh,
  xsOffset11: Fh,
  xsOffset12: Hh,
  xsOrderFirst: Uh,
  xsOrderLast: Wh,
  xsOrder0: qh,
  xsOrder1: Kh,
  xsOrder2: Gh,
  xsOrder3: Vh,
  xsOrder4: Yh,
  xsOrder5: Xh,
  xsOrder6: Zh,
  xsOrder7: Jh,
  xsOrder8: Qh,
  xsOrder9: em,
  xsOrder10: tm,
  xsOrder11: nm,
  xsOrder12: rm,
  smSize1: om,
  smSize2: sm,
  smSize3: am,
  smSize4: lm,
  smSize5: im,
  smSize6: cm,
  smSize7: dm,
  smSize8: um,
  smSize9: fm,
  smSize10: _m,
  smSize11: pm,
  smSize12: hm,
  smOffset0: mm,
  smOffset1: gm,
  smOffset2: ym,
  smOffset3: bm,
  smOffset4: xm,
  smOffset5: vm,
  smOffset6: wm,
  smOffset7: km,
  smOffset8: Nm,
  smOffset9: $m,
  smOffset10: Sm,
  smOffset11: Om,
  smOffset12: Em,
  smOrderFirst: Tm,
  smOrderLast: Cm,
  smOrder0: Mm,
  smOrder1: Am,
  smOrder2: Dm,
  smOrder3: Im,
  smOrder4: Lm,
  smOrder5: zm,
  smOrder6: Rm,
  smOrder7: Pm,
  smOrder8: jm,
  smOrder9: Bm,
  smOrder10: Fm,
  smOrder11: Hm,
  smOrder12: Um,
  mdSize1: Wm,
  mdSize2: qm,
  mdSize3: Km,
  mdSize4: Gm,
  mdSize5: Vm,
  mdSize6: Ym,
  mdSize7: Xm,
  mdSize8: Zm,
  mdSize9: Jm,
  mdSize10: Qm,
  mdSize11: e1,
  mdSize12: t1,
  mdOffset0: n1,
  mdOffset1: r1,
  mdOffset2: o1,
  mdOffset3: s1,
  mdOffset4: a1,
  mdOffset5: l1,
  mdOffset6: i1,
  mdOffset7: c1,
  mdOffset8: d1,
  mdOffset9: u1,
  mdOffset10: f1,
  mdOffset11: _1,
  mdOffset12: p1,
  mdOrderFirst: h1,
  mdOrderLast: m1,
  mdOrder0: g1,
  mdOrder1: y1,
  mdOrder2: b1,
  mdOrder3: x1,
  mdOrder4: v1,
  mdOrder5: w1,
  mdOrder6: k1,
  mdOrder7: N1,
  mdOrder8: $1,
  mdOrder9: S1,
  mdOrder10: O1,
  mdOrder11: E1,
  mdOrder12: T1,
  lgSize1: C1,
  lgSize2: M1,
  lgSize3: A1,
  lgSize4: D1,
  lgSize5: I1,
  lgSize6: L1,
  lgSize7: z1,
  lgSize8: R1,
  lgSize9: P1,
  lgSize10: j1,
  lgSize11: B1,
  lgSize12: F1,
  lgOffset0: H1,
  lgOffset1: U1,
  lgOffset2: W1,
  lgOffset3: q1,
  lgOffset4: K1,
  lgOffset5: G1,
  lgOffset6: V1,
  lgOffset7: Y1,
  lgOffset8: X1,
  lgOffset9: Z1,
  lgOffset10: J1,
  lgOffset11: Q1,
  lgOffset12: eg,
  lgOrderFirst: tg,
  lgOrderLast: ng,
  lgOrder0: rg,
  lgOrder1: og,
  lgOrder2: sg,
  lgOrder3: ag,
  lgOrder4: lg,
  lgOrder5: ig,
  lgOrder6: cg,
  lgOrder7: dg,
  lgOrder8: ug,
  lgOrder9: fg,
  lgOrder10: _g,
  lgOrder11: pg,
  lgOrder12: hg,
  xlSize1: mg,
  xlSize2: gg,
  xlSize3: yg,
  xlSize4: bg,
  xlSize5: xg,
  xlSize6: vg,
  xlSize7: wg,
  xlSize8: kg,
  xlSize9: Ng,
  xlSize10: $g,
  xlSize11: Sg,
  xlSize12: Og,
  xlOffset0: Eg,
  xlOffset1: Tg,
  xlOffset2: Cg,
  xlOffset3: Mg,
  xlOffset4: Ag,
  xlOffset5: Dg,
  xlOffset6: Ig,
  xlOffset7: Lg,
  xlOffset8: zg,
  xlOffset9: Rg,
  xlOffset10: Pg,
  xlOffset11: jg,
  xlOffset12: Bg,
  xlOrderFirst: Fg,
  xlOrderLast: Hg,
  xlOrder0: Ug,
  xlOrder1: Wg,
  xlOrder2: qg,
  xlOrder3: Kg,
  xlOrder4: Gg,
  xlOrder5: Vg,
  xlOrder6: Yg,
  xlOrder7: Xg,
  xlOrder8: Zg,
  xlOrder9: Jg,
  xlOrder10: Qg,
  xlOrder11: ey,
  xlOrder12: ty,
  xxSize1: ny,
  xxSize2: ry,
  xxSize3: oy,
  xxSize4: sy,
  xxSize5: ay,
  xxSize6: ly,
  xxSize7: iy,
  xxSize8: cy,
  xxSize9: dy,
  xxSize10: uy,
  xxSize11: fy,
  xxSize12: _y,
  xxOffset0: py,
  xxOffset1: hy,
  xxOffset2: my,
  xxOffset3: gy,
  xxOffset4: yy,
  xxOffset5: by,
  xxOffset6: xy,
  xxOffset7: vy,
  xxOffset8: wy,
  xxOffset9: ky,
  xxOffset10: Ny,
  xxOffset11: $y,
  xxOffset12: Sy,
  xxOrderFirst: Oy,
  xxOrderLast: Ey,
  xxOrder0: Ty,
  xxOrder1: Cy,
  xxOrder2: My,
  xxOrder3: Ay,
  xxOrder4: Dy,
  xxOrder5: Iy,
  xxOrder6: Ly,
  xxOrder7: zy,
  xxOrder8: Ry,
  xxOrder9: Py,
  xxOrder10: jy,
  xxOrder11: By,
  xxOrder12: Fy
}, Hy = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Uy(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Wy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function qy(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Ky(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (qy(n, t), `${e}Order${t}`);
}
function xS({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [D, C, k, v] of Hy) {
    const E = n[C], R = n[k], L = n[v];
    if (E != null) {
      Uy(C, E);
      const j = co[`${D}Size${E}`];
      j && r.push(j);
    }
    if (R != null) {
      Wy(k, R);
      const j = co[`${D}Offset${R}`];
      j && r.push(j);
    }
    if (L != null) {
      const j = co[Ky(D, L, v)];
      j && r.push(j);
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
    sizeXl: p,
    offsetXl: b,
    sizeXx: h,
    offsetXx: _,
    order: x,
    orderXs: N,
    orderSm: w,
    orderMd: M,
    orderLg: $,
    orderXl: O,
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
const Gy = "_stack_bmbbp_1", Rr = {
  stack: Gy,
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
function vS({
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
const Vy = "_autogrid_16x9f_1", Yy = {
  autogrid: Vy
};
function wS({
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
      className: [Yy.autogrid, n].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const Xy = "_layout_fxvw1_1", Zy = "_row_fxvw1_7", Jy = "_grid_fxvw1_21", Qy = "_gridRight_fxvw1_27", e0 = "_gridHeader_fxvw1_31", t0 = "_gridFooter_fxvw1_36", n0 = "_gridContents_fxvw1_41", r0 = "_gridBody_fxvw1_45", An = {
  layout: Xy,
  row: Zy,
  grid: Jy,
  gridRight: Qy,
  gridHeader: e0,
  gridFooter: t0,
  gridContents: n0,
  gridBody: r0
}, o0 = "_footer_3be5w_1", s0 = "_sticky_3be5w_9", ra = {
  footer: o0,
  sticky: s0
};
function a0({
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
const l0 = "_header_1tw8b_1", i0 = "_sticky_1tw8b_9", oa = {
  header: l0,
  sticky: i0
};
function c0({
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
const d0 = "_sidebar_175d5_1", u0 = "_sticky_175d5_23", f0 = "_left_175d5_41", _0 = "_right_175d5_45", p0 = "_start_175d5_50", h0 = "_end_175d5_54", m0 = "_fullHeight_175d5_60", g0 = "_collapsed_175d5_64", y0 = "_responsive_175d5_72", b0 = "_overlay_175d5_80", x0 = "_mask_175d5_108", Gn = {
  sidebar: d0,
  sticky: u0,
  left: f0,
  right: _0,
  start: p0,
  end: h0,
  fullHeight: m0,
  collapsed: g0,
  responsive: y0,
  overlay: b0,
  mask: x0
};
function v0({
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
    const u = (f) => {
      f.key === "Escape" && c();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, c]), /* @__PURE__ */ A(rt, { children: [
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
function kS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(rt, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], s = [], l = [], d = [];
  Xr.forEach(n, (y) => {
    if (!Wt(y)) {
      c.push(y);
      return;
    }
    if (y.type === c0)
      a.push(y);
    else if (y.type === a0)
      i.push(y);
    else if (y.type === v0) {
      const m = y, g = m.props.position;
      d.push(m), (g === "right" || g === "end" ? l : s).push(m);
    } else
      c.push(y);
  });
  const u = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const y = f ? l : s;
    return /* @__PURE__ */ A(
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
          /* @__PURE__ */ A("div", { className: An.gridContents, children: [
            y,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: An.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ A(
    "div",
    {
      className: [An.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        a,
        /* @__PURE__ */ A("div", { className: An.row, children: [
          s,
          c,
          l
        ] }),
        i
      ]
    }
  );
}
const w0 = "_body_1ge00_4", k0 = "_bare_1ge00_12", sa = {
  body: w0,
  bare: k0
};
function NS({
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
const N0 = "_toggle_lxnk5_1", $0 = {
  toggle: N0
};
function $S({
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
      className: [$0.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ o(De, { icon: e, size: 20 })
    }
  );
}
const S0 = "_track_14127_1", O0 = "_bar_14127_31", E0 = "_primary_14127_39", T0 = "_success_14127_43", C0 = "_warning_14127_47", M0 = "_danger_14127_51", A0 = "_indeterminate_14127_149", D0 = "_circular_14127_163", I0 = "_fill_14127_203", nn = {
  track: S0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: O0,
  primary: E0,
  success: T0,
  warning: C0,
  danger: M0,
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
  fill: I0,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function SS({
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
    const m = typeof c == "string", g = 2, p = 10.5, b = 2 * Math.PI * p, h = b * (a ? 0.75 : 1), _ = a ? 0 : b * (1 - f / 100), x = Vr(r);
    return /* @__PURE__ */ A(
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
          nn.circular,
          nn[n],
          x ? nn[x] : null,
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
              strokeWidth: g
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: g,
              strokeDasharray: `${h} ${b}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const y = Vr(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": a ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        nn.track,
        nn[n],
        y ? nn[y] : null,
        typeof c == "string" ? nn[`linear-${c}`] : null,
        a ? nn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: nn.bar,
          style: a ? void 0 : { width: `${f}%` }
        }
      )
    }
  );
}
const L0 = "_wrapper_tk30z_1", z0 = {
  wrapper: L0
}, R0 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Fa = "dx-palette", P0 = "data-palette";
function j0(e, t) {
  const n = e === void 0 ? Fa : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function B0(e, t) {
  const n = e === void 0 ? Fa : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function OS({
  themes: e = R0,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: a = P0,
  onChange: i,
  label: c = "Theme",
  placeholder: s = "Theme…",
  id: l,
  size: d = "md",
  className: u
}) {
  const [f, y] = W(void 0), m = t !== void 0, g = t ?? f ?? j0(r, e) ?? n, p = g ?? "", b = ne(void 0);
  be(() => {
    if (m) return;
    const _ = document.documentElement;
    if (g === void 0) {
      b.current !== void 0 && _.getAttribute(a) === b.current && (_.removeAttribute(a), b.current = void 0);
      return;
    }
    _.setAttribute(a, g), b.current = g;
  }, [g, a, m]);
  const h = (_) => {
    const x = _.target.value;
    m || (y(x), B0(r, x)), i?.(x);
  };
  return /* @__PURE__ */ A("label", { className: [z0.wrapper, u].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ A(lr, { id: l, size: d, value: p, onChange: h, children: [
      g === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      g !== void 0 && !e.includes(g) && /* @__PURE__ */ o("option", { value: g, children: g }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function F0(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function cs(e) {
  const [t, n] = W(() => F0(e));
  return be(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const H0 = "_pressed_12x15_8", U0 = {
  pressed: H0
}, W0 = at(
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
    ...p
  }, b) {
    const [h, _] = W(n), x = t ?? h, N = (w) => {
      const M = !x;
      t === void 0 && _(M), r?.(M), u?.(w);
    };
    return /* @__PURE__ */ o(
      ln,
      {
        ...p,
        ref: b,
        variant: x && a ? a : y,
        severity: x ? i : m,
        shade: x ? c : g,
        size: l,
        "aria-pressed": x,
        className: [x ? U0.pressed : null, d].filter(Boolean).join(" "),
        onClick: N,
        children: x && s !== void 0 ? s : f
      }
    );
  }
), Ha = "dx-theme";
function q0(e) {
  const t = e === void 0 ? Ha : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function K0(e, t) {
  const n = e === void 0 ? Ha : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function ES({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = cs("(prefers-color-scheme: dark)"), [d, u] = W(void 0), f = e !== void 0, y = e ?? d ?? q0(n) ?? t ?? "system", m = y === "system" ? l ? "dark" : "light" : y;
  return be(() => {
    if (!f) {
      if (y === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = y;
    }
  }, [y, f]), /* @__PURE__ */ o(
    W0,
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
        f || (u(b), K0(n, b)), r?.(b);
      },
      toggleContent: /* @__PURE__ */ o(De, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(De, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Ua = "dx-palette", Wa = "dx-theme", Yo = "data-palette", Xo = "data-theme", Zo = /* @__PURE__ */ new Set();
function G0() {
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
function qa(e, t) {
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
  const e = G0();
  if (!la) {
    la = !0;
    const t = aa(Ua), n = aa(Wa), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && ds(a), a;
  }
  return e;
}
function Ka() {
  const e = kr();
  Zo.forEach((t) => t({ ...e }));
}
function ia(e) {
  return Zo.add(e), () => {
    Zo.delete(e);
  };
}
function TS() {
  return kr().theme;
}
function V0(e) {
  const t = kr();
  t.theme !== e && (t.theme = e, ds(t), qa(Ua, e), Ka());
}
function CS() {
  return kr().appearance;
}
function Y0(e) {
  const t = kr();
  t.appearance !== e && (t.appearance = e, ds(t), qa(Wa, e), Ka());
}
function MS() {
  const [, e] = W(0);
  be(() => ia(() => e((n) => n + 1)), []);
  const t = kr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: V0,
    setAppearance: Y0,
    subscribe: ia
  };
}
function X0(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (p, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), l = (p, b) => p + b | 0, d = (p, b) => p << b | p >>> 32 - b;
  let u = 1732584193, f = 4023233417, y = 2562383102, m = 271733878;
  for (let p = 0; p < r; p += 64) {
    const b = [];
    for (let w = 0; w < 16; w += 1)
      b.push(i.getUint32(p + w * 4, !0));
    let h = u, _ = f, x = y, N = m;
    for (let w = 0; w < 64; w += 1) {
      let M, $;
      w < 16 ? (M = _ & x | ~_ & N, $ = w) : w < 32 ? (M = N & _ | ~N & x, $ = (5 * w + 1) % 16) : w < 48 ? (M = _ ^ x ^ N, $ = (3 * w + 5) % 16) : (M = x ^ (_ | ~N), $ = 7 * w % 16), M = l(l(l(M, h), s[w]), b[$]), h = N, N = x, x = _, _ = l(_, d(M, c[Math.floor(w / 16) * 4 + w % 4]));
    }
    u = l(u, h), f = l(f, _), y = l(y, x), m = l(m, N);
  }
  const g = (p) => {
    let b = "";
    for (let h = 0; h < 4; h += 1)
      b += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return g(u) + g(f) + g(y) + g(m);
}
const Z0 = "_avatar_1mhfr_1", J0 = "_xs_1mhfr_12", Q0 = "_sm_1mhfr_18", eb = "_md_1mhfr_24", tb = "_lg_1mhfr_30", nb = "_xl_1mhfr_36", rb = "_initials_1mhfr_42", ob = "_image_1mhfr_57", sb = "_status_1mhfr_64", ab = "_online_1mhfr_84", lb = "_offline_1mhfr_88", ib = "_away_1mhfr_92", _r = {
  avatar: Z0,
  xs: J0,
  sm: Q0,
  md: eb,
  lg: tb,
  xl: nb,
  initials: rb,
  image: ob,
  status: sb,
  online: ab,
  offline: lb,
  away: ib
}, cb = {
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
function db(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ub(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return go[t % go.length] ?? go[0];
}
function AS({
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
  const d = Se(() => e ? db(e) : "?", [e]), u = Se(() => e ? ub(e) : go[0], [e]), f = Se(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${X0(N)}?d=${r}&s=${cb[c]}&r=${a}`;
  }, [t, n, r, a, c]), y = t ?? f, [m, g] = W(null), p = y != null && m !== y, b = p && i === "", h = i ?? e ?? "avatar", _ = s ? `${h}, ${s}` : h, x = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: y,
        alt: b ? "" : s ? _ : h,
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
  return /* @__PURE__ */ A(
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
        x,
        s && /* @__PURE__ */ o("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const fb = "_root_zzwfz_1", _b = "_left_zzwfz_6", pb = "_right_zzwfz_7", hb = "_panel_zzwfz_12", mb = "_bottom_zzwfz_20", gb = "_tabList_zzwfz_24", yb = "_underline_zzwfz_53", bb = "_pills_zzwfz_72", xb = "_tab_zzwfz_24", vb = "_active_zzwfz_113", wb = "_disabled_zzwfz_139", Dn = {
  root: fb,
  left: _b,
  right: pb,
  panel: hb,
  bottom: mb,
  tabList: gb,
  underline: yb,
  pills: bb,
  tab: xb,
  active: vb,
  disabled: wb
};
function DS({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c
}) {
  const s = lt(), l = ne(null), [d, u] = W(
    n ?? e[0]?.key ?? ""
  ), f = t ?? d, y = i === "left" || i === "right", m = (b) => {
    u(b), r?.(b);
  }, g = (b) => {
    const h = e.filter((N) => !N.disabled), _ = h.findIndex((N) => N.key === f);
    let x = -1;
    b.key === "ArrowRight" || y && b.key === "ArrowDown" ? x = (_ + 1) % h.length : b.key === "ArrowLeft" || y && b.key === "ArrowUp" ? x = (_ - 1 + h.length) % h.length : b.key === "Home" ? x = 0 : b.key === "End" && (x = h.length - 1), x >= 0 && (b.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[x]?.key ?? "")}"]`
    )?.focus(), m(h[x]?.key ?? ""));
  }, p = e.find((b) => b.key === f);
  return /* @__PURE__ */ A(
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
const kb = "_root_1l1j2_1", Nb = "_item_1l1j2_9", $b = "_heading_1l1j2_13", Sb = "_trigger_1l1j2_17", Ob = "_disabled_1l1j2_34", Eb = "_title_1l1j2_48", Tb = "_chevron_1l1j2_52", Cb = "_open_1l1j2_59", Mb = "_content_1l1j2_63", In = {
  root: kb,
  item: Nb,
  heading: $b,
  trigger: Sb,
  disabled: Ob,
  title: Eb,
  chevron: Tb,
  open: Cb,
  content: Mb
};
function IS({
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
    const y = d.includes(f) ? d.filter((m) => m !== f) : t ? [...d, f] : [f];
    l(y), a?.(y);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((f) => {
    const y = d.includes(f.key), m = `${c}-panel-${f.key}`, g = `${c}-trigger-${f.key}`;
    return /* @__PURE__ */ A("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ A(
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
          "aria-labelledby": g,
          hidden: !y,
          className: In.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Ab = "_textarea_l7fsl_1", Db = "_invalid_l7fsl_27", Ib = "_xs_l7fsl_34", Lb = "_sm_l7fsl_39", zb = "_md_l7fsl_44", Rb = "_lg_l7fsl_49", Pb = "_xl_l7fsl_54", uo = {
  textarea: Ab,
  invalid: Db,
  xs: Ib,
  sm: Lb,
  md: zb,
  lg: Rb,
  xl: Pb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, LS = at(
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
), jb = "_root_xyp2i_1", Bb = "_trigger_xyp2i_9", Fb = "_invalid_xyp2i_40", Hb = "_placeholder_xyp2i_47", Ub = "_label_xyp2i_54", Wb = "_chevron_xyp2i_60", qb = "_chevronOpen_xyp2i_70", Kb = "_menu_xyp2i_74", Gb = "_option_xyp2i_89", Vb = "_disabled_xyp2i_100", Yb = "_active_xyp2i_104", Xb = "_selected_xyp2i_105", Zb = "_header_xyp2i_115", Jb = "_xs_xyp2i_122", Qb = "_sm_xyp2i_128", ex = "_md_xyp2i_134", tx = "_lg_xyp2i_140", nx = "_xl_xyp2i_146", Ht = {
  root: jb,
  trigger: Bb,
  invalid: Fb,
  placeholder: Hb,
  label: Ub,
  chevron: Wb,
  chevronOpen: qb,
  menu: Kb,
  option: Gb,
  disabled: Vb,
  active: Yb,
  selected: Xb,
  header: Zb,
  xs: Jb,
  sm: Qb,
  md: ex,
  lg: tx,
  xl: nx
}, rx = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function zS({
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
  const u = lt(), f = `${u}-listbox`, y = ne(null), m = ne(null), [g, p] = W(
    n
  ), [b, h] = W(!1), _ = t ?? g, x = e.map(
    (k, v) => k.label === "" || k.disabled ? -1 : v
  ).filter((k) => k >= 0), N = e.findIndex(
    (k) => k.value === _
  ), [w, M] = W(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), $ = B(() => {
    if (s) return;
    const k = N >= 0 && x.includes(N) ? N : x[0];
    M(k ?? -1), h(!0);
  }, [s, N, x]), O = B(() => {
    h(!1), m.current?.focus();
  }, []);
  be(() => {
    if (!b) return;
    const k = (v) => {
      y.current && !y.current.contains(v.target) && h(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [b]);
  const T = (k) => {
    p(k), r?.(k), h(!1), m.current?.focus();
  }, I = (k) => {
    if (x.length === 0) return;
    const v = x.includes(w) ? x.indexOf(w) : 0, E = x[(v + k + x.length) % x.length];
    E != null && M(E);
  }, D = (k) => {
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
        k.preventDefault(), x[0] != null && M(x[0]);
        break;
      case "End":
        k.preventDefault(), x[x.length - 1] != null && M(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), w >= 0 && e[w] && x.includes(w) && T(e[w]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), O();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, C = e.find(
    (k) => k.value === _
  );
  return /* @__PURE__ */ A(
    "div",
    {
      ref: y,
      className: [Ht.root, l].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ A(
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
              /* @__PURE__ */ o("span", { className: C ? Ht.label : Ht.placeholder, children: C ? C.label : a }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [Ht.chevron, b ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: rx },
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
                    !k.disabled && k.label !== "" && M(v);
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
const ox = "_root_1ma8a_1", sx = "_wrap_1ma8a_9", ax = "_input_1ma8a_26", lx = "_invalid_1ma8a_31", ix = "_clear_1ma8a_58", cx = "_menu_1ma8a_83", dx = "_option_1ma8a_98", ux = "_disabled_1ma8a_109", fx = "_active_1ma8a_113", _x = "_empty_1ma8a_123", px = "_xs_1ma8a_129", hx = "_sm_1ma8a_136", mx = "_md_1ma8a_143", gx = "_lg_1ma8a_150", yx = "_xl_1ma8a_157", un = {
  root: ox,
  wrap: sx,
  input: ax,
  invalid: lx,
  clear: ix,
  menu: cx,
  option: dx,
  disabled: ux,
  active: fx,
  empty: _x,
  xs: px,
  sm: hx,
  md: mx,
  lg: gx,
  xl: yx
}, bx = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function RS({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: c = "md",
  invalid: s = !1,
  disabled: l = !1,
  filter: d = bx,
  className: u,
  ...f
}) {
  const y = lt(), m = `${y}-listbox`, g = ne(null), p = ne(null), [b, h] = W(n), [_, x] = W(!1), N = t ?? b, w = Se(
    () => N.trim() === "" ? [...e] : e.filter((L) => d(L, N)),
    [e, N, d]
  ), M = w.map((L, j) => L.disabled ? -1 : j).filter((L) => L >= 0), [$, O] = W(-1), T = (L) => {
    h(L), r?.(L);
  }, I = (L) => {
    T(L.label), a?.(L.value, L), x(!1);
  }, D = (L) => {
    if (M.length === 0) return;
    const j = M.includes($) ? M.indexOf($) : L === 1 ? -1 : 0, F = M[(j + L + M.length) % M.length];
    F != null && O(F);
  }, C = (L) => {
    l || (T(L.target.value), x(!0), O(-1));
  }, k = () => {
    l || N !== "" && x(!0);
  }, v = (L) => {
    g.current && !g.current.contains(L.relatedTarget) && x(!1);
  }, E = (L) => {
    if (!l)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), _ ? D(1) : (x(!0), O(M[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), _ && D(-1);
          break;
        case "Enter":
          L.preventDefault(), _ && $ >= 0 && w[$] && I(w[$]);
          break;
        case "Escape":
          L.preventDefault(), x(!1);
          break;
        case "Tab":
          _ && $ >= 0 && w[$] && I(w[$]), x(!1);
          break;
      }
  }, R = () => {
    T(""), O(-1), x(!0), p.current?.focus();
  };
  return /* @__PURE__ */ A(
    "div",
    {
      ref: g,
      className: [un.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ A(
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
                  "aria-activedescendant": _ && $ >= 0 ? `${y}-option-${$}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: N,
                  placeholder: i,
                  className: un.input,
                  onChange: C,
                  onFocus: k,
                  onBlur: v,
                  onKeyDown: E,
                  ...f
                }
              ),
              N !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: un.clear,
                  "aria-label": "Clear",
                  onClick: R,
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
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: un.menu, children: w.map((L, j) => /* @__PURE__ */ o(
          "div",
          {
            id: `${y}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              un.option,
              j === $ ? un.active : null,
              L.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              L.disabled || I(L);
            },
            onMouseDown: (F) => {
              F.preventDefault(), L.disabled || I(L);
            },
            onMouseEnter: () => {
              L.disabled || O(j);
            },
            children: L.label
          },
          L.value
        )) }))
      ]
    }
  );
}
const xx = "_box_muvqe_1", vx = "_option_muvqe_12", wx = "_disabled_muvqe_23", kx = "_selected_muvqe_27", Nx = "_active_muvqe_33", Pr = {
  box: xx,
  option: vx,
  disabled: wx,
  selected: kx,
  active: Nx
};
function PS({
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
  }), f = t == null ? d : Array.isArray(t) ? t : [t], y = e.findIndex((w) => !w.disabled), [m, g] = W(
    () => y >= 0 ? y : 0
  ), p = ne(""), b = ne(null), h = (w) => {
    u(w), a?.(r ? w : w[0] ?? "");
  }, _ = e.map((w, M) => w.disabled ? -1 : M).filter((w) => w >= 0), x = (w) => {
    const M = e[w];
    if (!(!M || M.disabled))
      if (g(w), r) {
        const $ = f.includes(M.value) ? f.filter((O) => O !== M.value) : [...f, M.value];
        h($);
      } else
        h([M.value]);
  }, N = (w) => {
    if (_.length === 0) return;
    const M = _.includes(m) ? m : _[0];
    let $ = -1;
    if (w.key === "ArrowDown")
      $ = _[(_.indexOf(M) + 1) % _.length];
    else if (w.key === "ArrowUp")
      $ = _[(_.indexOf(M) - 1 + _.length) % _.length];
    else if (w.key === "Home")
      $ = _[0];
    else if (w.key === "End")
      $ = _[_.length - 1];
    else if (w.key === "Enter" || w.key === " ") {
      w.preventDefault(), x(M);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(w.key)) {
      w.preventDefault();
      const O = (p.current + w.key).toLowerCase();
      p.current = O, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const T = [..._, ..._], I = _.indexOf(M) + 1, D = T.slice(I).find((C) => e[C]?.label.toLowerCase().startsWith(O));
      D != null && g(D);
      return;
    }
    $ >= 0 && (w.preventDefault(), g($), r || h([e[$]?.value ?? ""]));
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
      children: e.map((w, M) => {
        const $ = f.includes(w.value), O = M === m;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${l}-option-${M}`,
            role: "option",
            "aria-selected": $,
            "aria-disabled": w.disabled || void 0,
            className: [
              Pr.option,
              $ ? Pr.selected : null,
              O ? Pr.active : null,
              w.disabled ? Pr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(M),
            children: w.label
          },
          w.value
        );
      })
    }
  );
}
const $x = "_group_oinj7_1", Sx = "_legend_oinj7_8", Ox = "_list_oinj7_16", Ex = "_item_oinj7_25", Tx = "_disabled_oinj7_32", Cx = "_label_oinj7_37", Mx = "_checkbox_oinj7_48", Qn = {
  group: $x,
  legend: Sx,
  list: Ox,
  item: Ex,
  disabled: Tx,
  label: Cx,
  checkbox: Mx
};
function jS({
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
  return /* @__PURE__ */ A("fieldset", { className: [Qn.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: Qn.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: Qn.list, children: e.map((f) => {
      const y = d.includes(f.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Qn.item, f.disabled ? Qn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ A("label", { className: Qn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Qn.checkbox,
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
const Ax = "_group_46668_1", Dx = "_legend_46668_8", Ix = "_list_46668_16", Lx = "_item_46668_25", zx = "_disabled_46668_32", Rx = "_label_46668_37", Px = "_radio_46668_48", er = {
  group: Ax,
  legend: Dx,
  list: Ix,
  item: Lx,
  disabled: zx,
  label: Rx,
  radio: Px
};
function BS({
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
  return /* @__PURE__ */ A("fieldset", { className: [er.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: er.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: er.list, children: e.map((f) => {
      const y = f.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [er.item, f.disabled ? er.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ A("label", { className: er.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: er.radio,
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
const jx = "_bar_9zyxn_1", Bx = "_vertical_9zyxn_12", Fx = "_option_9zyxn_17", Hx = "_selected_9zyxn_40", Ux = "_sm_9zyxn_56", Wx = "_md_9zyxn_62", qx = "_lg_9zyxn_68", pr = {
  bar: jx,
  vertical: Bx,
  option: Fx,
  selected: Hx,
  sm: Ux,
  md: Wx,
  lg: qx
};
function ca(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function FS(e) {
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
  } = e, u = a ?? !1, [f, y] = W(r ?? (u ? [] : t[0]?.value)), m = n ?? f, g = a === !0 || a === void 0 && Array.isArray(m), p = (h) => {
    if (!g) {
      y(h), c?.(h);
      return;
    }
    const _ = ca(m), x = _.includes(h) ? _.filter((N) => N !== h) : [..._, h];
    y(x), c?.(x);
  }, b = (h) => g ? ca(m).includes(h) : m === h;
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
        const _ = b(h.value);
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
const Kx = "_root_11hdr_1", Gx = "_action_11hdr_10", Vx = "_caret_11hdr_15", Yx = "_sm_11hdr_49", Xx = "_md_11hdr_53", Zx = "_lg_11hdr_57", Jx = "_fullWidth_11hdr_62", Qx = "_menu_11hdr_70", ev = "_item_11hdr_83", tv = "_itemIcon_11hdr_105", nv = "_disabled_11hdr_110", rv = "_active_11hdr_114", ov = "_danger_11hdr_123", xn = {
  root: Kx,
  action: Gx,
  caret: Vx,
  sm: Yx,
  md: Xx,
  lg: Zx,
  fullWidth: Jx,
  menu: Qx,
  item: ev,
  itemIcon: tv,
  disabled: nv,
  active: rv,
  danger: ov
}, HS = at(
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
    ...p
  }, b) {
    const _ = `${lt()}-menu`, x = ne(null), N = ne(null), w = ne([]), [M, $] = W(!1), [O, T] = W(-1), I = f || l, D = Se(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), C = B(() => {
      I || (T(D[0] ?? -1), $(!0));
    }, [I, D]), k = B(() => {
      $(!1), N.current?.focus();
    }, []);
    be(() => {
      if (!M) return;
      const F = (X) => {
        x.current && !x.current.contains(X.target) && $(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [M]), be(() => {
      M && (I || !d) && $(!1);
    }, [M, I, d]);
    const v = ne(M);
    if (be(() => {
      const F = v.current;
      if (v.current = M, !M || F) return;
      const X = D.includes(O) ? O : D[0] ?? -1;
      X >= 0 && w.current[X]?.focus();
    }, [M, O, D]), d === !1) return null;
    const E = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), $(!1), N.current?.focus());
    }, R = (F) => {
      if (D.length === 0) return;
      const X = D.includes(O) ? D.indexOf(O) : F === 1 ? -1 : 0, ie = D[(X + F + D.length) % D.length];
      ie != null && (T(ie), w.current[ie]?.focus());
    }, L = (F) => {
      const X = F === "first" ? D[0] : D[D.length - 1];
      X != null && (T(X), w.current[X]?.focus());
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
          F.preventDefault(), k();
          break;
        case "Tab":
          $(!1);
          break;
      }
    };
    return /* @__PURE__ */ A(
      "div",
      {
        ref: (F) => {
          x.current = F, typeof b == "function" ? b(F) : b && (b.current = F);
        },
        className: [
          xn.root,
          xn[s],
          u ? xn.fullWidth : null,
          y
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            ln,
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
                M && $(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            ln,
            {
              ref: N,
              className: xn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: I,
              "aria-haspopup": "menu",
              "aria-expanded": M,
              "aria-controls": _,
              "aria-label": g,
              onClick: () => M ? $(!1) : C(),
              onKeyDown: (F) => {
                !M && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), C());
              },
              children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          M && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
              className: xn.menu,
              onKeyDown: j,
              ...p,
              children: r.map((F, X) => /* @__PURE__ */ A(
                "button",
                {
                  ref: (ie) => {
                    w.current[X] = ie;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: X === O ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    xn.item,
                    X === O ? xn.active : null,
                    F.danger ? xn.danger : null,
                    F.disabled ? xn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => E(X),
                  onMouseEnter: () => {
                    F.disabled || T(X);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ o("span", { className: xn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: F.icon, size: 16 }) }) : null,
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
), sv = "_mask_rcv90_1", av = "_invalid_rcv90_31", lv = "_xs_rcv90_38", iv = "_sm_rcv90_44", cv = "_md_rcv90_50", dv = "_lg_rcv90_56", uv = "_xl_rcv90_62", Fo = {
  mask: sv,
  invalid: av,
  xs: lv,
  sm: iv,
  md: cv,
  lg: dv,
  xl: uv
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
const US = at(function({
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
  const [f, y] = W(i ?? ""), m = a !== void 0, g = m ? a ?? "" : f, p = (_) => {
    const x = da(_, r);
    return m || y(x), c?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const x = _.currentTarget.selectionStart ?? g.length, N = g[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const w = g.replace(/\D/g, "");
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
}), fv = "_wrapper_12jdf_1", _v = "_input_12jdf_8", pv = "_invalid_12jdf_38", hv = "_button_12jdf_45", mv = "_up_12jdf_77", gv = "_down_12jdf_82", yv = "_xs_12jdf_87", bv = "_sm_12jdf_93", xv = "_md_12jdf_99", vv = "_lg_12jdf_105", wv = "_xl_12jdf_111", Vn = {
  wrapper: fv,
  input: _v,
  invalid: pv,
  button: hv,
  up: mv,
  down: gv,
  xs: yv,
  sm: bv,
  md: xv,
  lg: vv,
  xl: wv
};
function Jo(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function kv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Ga(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Nv(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function $v(e, t, n, r, a) {
  const c = Jo(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Ga(s, n, r);
}
const WS = at(
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
    ...p
  }, b) {
    const [h, _] = W(
      c != null ? String(c) : ""
    ), x = i !== void 0, N = x ? i == null ? "" : String(i) : h, w = (D) => {
      x || _(D), s?.(Jo(D));
    }, M = (D) => {
      x || _(String(D)), s?.(D);
    }, $ = (D) => {
      a || M($v(N, D, l, d, u));
    }, O = (D) => {
      w(kv(D.target.value));
    }, T = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), $(1)) : D.key === "ArrowDown" && (D.preventDefault(), $(-1)), g?.(D);
    }, I = (D) => {
      const C = Jo(N);
      C === null ? (x || _(""), s?.(null)) : M(Ga(Nv(C, l, u), l, d)), m?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ A("div", { className: Vn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: b,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: a,
            onChange: O,
            onKeyDown: T,
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
            "aria-label": y,
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
function Ov({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function Ev({ r: e, g: t, b: n }) {
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
function Tv(e) {
  const t = Qo(e);
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
function ua({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const qS = ({
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
  size: u = "md",
  tabIndex: f = 0,
  className: y,
  onChange: m,
  onValueChange: g,
  onOpen: p,
  onClose: b
}) => {
  const h = ne(null), _ = ne(null), x = ne(null), N = ne(null), w = ne(null), M = lt(), $ = ne(null), O = Se(
    () => Tv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [T, I] = W(!1), [D, C] = W(null), k = D ?? O, v = Se(() => Ev(k), [k]), E = B(
    (Z) => {
      const z = ua(Z);
      m?.(z), g?.(z);
    },
    [m, g]
  ), R = B(
    (Z, z) => {
      C(Z), z && !i && E(Z);
    },
    [i, E]
  ), L = B(() => {
    I(!1), C(null), b?.(), _.current?.focus();
  }, [b]), j = B(() => {
    s || (C(O), I(!0), p?.());
  }, [s, O, p]), F = B(() => {
    T ? L() : j();
  }, [T, L, j]), X = B(
    (Z, z) => {
      const Y = x.current;
      if (!Y) return v;
      const Q = Y.getBoundingClientRect(), ge = sn((Z - Q.left) / Q.width, 0, 1), le = sn(1 - (z - Q.top) / Q.height, 0, 1);
      return { h: v.h, s: ge, v: le };
    },
    [v]
  ), ie = B(
    (Z, z) => {
      if (!z) return 0;
      const Y = z.getBoundingClientRect();
      return sn((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), $.current = "sat";
    const z = X(Z.clientX, Z.clientY);
    R({ ...hr(z), a: k.a }, !0);
  }, we = (Z) => {
    if ($.current !== "sat") return;
    Z.preventDefault();
    const z = X(Z.clientX, Z.clientY);
    R({ ...hr(z), a: k.a }, !0);
  }, ae = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), $.current = "hue";
    const z = ie(Z.clientX, N.current);
    R(
      { ...hr({ ...v, h: z * 360 }), a: k.a },
      !0
    );
  }, _e = (Z) => {
    if ($.current !== "hue") return;
    Z.preventDefault();
    const z = ie(Z.clientX, N.current);
    R(
      { ...hr({ ...v, h: z * 360 }), a: k.a },
      !0
    );
  }, K = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), $.current = "alpha";
    const z = ie(Z.clientX, w.current);
    R({ ...k, a: z }, !0);
  }, me = (Z) => {
    if ($.current !== "alpha") return;
    Z.preventDefault();
    const z = ie(Z.clientX, w.current);
    R({ ...k, a: z }, !0);
  }, ue = () => {
    $.current = null;
  }, xe = B(
    (Z, z) => {
      const Y = {
        h: v.h,
        s: sn(v.s + Z, 0, 1),
        v: sn(v.v + z, 0, 1)
      };
      R({ ...hr(Y), a: k.a }, !0);
    },
    [v, k.a, R]
  ), pe = B(
    (Z) => {
      const z = (v.h + Z + 360) % 360;
      R({ ...hr({ ...v, h: z }), a: k.a }, !0);
    },
    [v, k.a, R]
  ), Ae = B(
    (Z) => {
      R({ ...k, a: sn(k.a + Z, 0, 1) }, !0);
    },
    [k, R]
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
        Z.preventDefault(), L();
        break;
    }
  }, Oe = (Z, z) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), z === "hue" ? pe(-6) : Ae(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), z === "hue" ? pe(6) : Ae(0.05);
        break;
      case "Escape":
        Z.preventDefault(), L();
        break;
    }
  }, re = (Z, z) => {
    if (Z === "hex") {
      const le = Qo(z);
      le && R({ ...le, a: k.a }, !0);
      return;
    }
    const Y = z.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const le = Y.includes(".") ? sn(Q, 0, 1) : sn(Q / 100, 0, 1);
      R({ ...k, a: le }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    R(
      { ...k, [Z]: sn(Q, 0, ge[Z]) },
      !0
    );
  }, Me = () => {
    D && (E(D), C(null), I(!1), b?.(), _.current?.focus());
  };
  be(() => {
    if (!T) return;
    const Z = (z) => {
      h.current && !h.current.contains(z.target) && L();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [T, L]), be(() => {
    if (!T) return;
    const Z = (z) => {
      z.key === "Escape" && L();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [T, L]);
  const fe = u === "xs" ? Re["dx-colorpicker-trigger-xs"] : u === "sm" ? Re["dx-colorpicker-trigger-sm"] : u === "lg" ? Re["dx-colorpicker-trigger-lg"] : u === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = ua(k), Ge = Ov(k), Qe = { x: v.s * 100, y: (1 - v.v) * 100 }, Mt = v.h / 360 * 100, it = k.a * 100, bt = /* @__PURE__ */ A("div", { className: Re["dx-colorpicker-panel"], children: [
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
        onKeyDown: G,
        onPointerDown: te,
        onPointerMove: we,
        onPointerUp: ue,
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
        onKeyDown: (Z) => Oe(Z, "hue"),
        onPointerDown: ae,
        onPointerMove: _e,
        onPointerUp: ue,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-hue-indicator"],
            style: { left: `${Mt}%` },
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
        onKeyDown: (Z) => Oe(Z, "alpha"),
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
    n && /* @__PURE__ */ A("div", { className: Re["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ A("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ A("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ A("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ A("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ A("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
          const z = Qo(Z);
          i ? R({ ...z, a: k.a }, !1) : (C(null), E({ ...z, a: k.a }), I(!1), b?.(), _.current?.focus());
        }
      },
      Z
    )) }),
    i && /* @__PURE__ */ o("div", { className: Re["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-ok"],
        onClick: Me,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ A(
    "div",
    {
      ref: h,
      className: [
        Re["dx-colorpicker"],
        T ? Re["dx-colorpicker-open"] : null,
        l ? Re["dx-colorpicker-invalid"] : null,
        y
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ A(
          "button",
          {
            ref: _,
            type: "button",
            className: [Re["dx-colorpicker-trigger"], fe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": T,
            "aria-controls": M,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: f,
            onClick: F,
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
            id: M,
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
}, Cv = 42;
function an(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${an(e.month)}-${an(e.day)}`;
}
function Mv(e, t) {
  const n = Yt(e);
  return t ? `${n} ${an(e.hour)}:${an(e.minute)}:${an(e.second)}` : n;
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
        a += _a[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if (Dv.includes(s)) {
      a += _a[s](e, r, n), i += 1;
      continue;
    }
    a += s, i += 1;
  }
  return a;
}
const Iv = [
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
function Lv(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let s = null;
    for (const l of Iv)
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
  return n || Lv(e, t);
}
function zv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Rv = ["hour", "minute", "second"];
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
const KS = at(
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
    onValueChange: p,
    onOpen: b,
    onClose: h,
    disabled: _,
    readOnly: x,
    placeholder: N,
    ariaLabel: w,
    triggerLabel: M,
    clearLabel: $,
    tabIndex: O,
    className: T,
    onBlur: I,
    onKeyDown: D,
    ...C
  }, k) {
    const v = ne(null), E = ne(null), R = ne(null), L = ne(null), j = lt(), F = r !== void 0, [X, ie] = W(
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
    }), ue = Se(() => c ? es(c) : null, [c]), xe = Se(() => s ? es(s) : null, [s]), pe = Se(
      () => new Set(y ?? []),
      [y]
    ), Ae = Se(() => {
      const V = F ? r ?? "" : X;
      return V ? jr(V, i) : null;
    }, [r, X, F, i]), G = B(
      (V) => {
        const he = Yt(V);
        return !!(pe.has(he) || ue && he < Yt(ue) || xe && he > Yt(xe));
      },
      [pe, ue, xe]
    ), Oe = B(
      (V) => {
        if (!G(V)) return V;
        for (let he = 1; he <= 366; he += 1) {
          const Ve = Ln(V, he);
          if (!G(Ve)) return Ve;
          const Ye = Ln(V, -he);
          if (!G(Ye)) return Ye;
        }
        return V;
      },
      [G]
    ), re = B(
      (V) => {
        F || ie(V ? _o(V, i, m) : "");
        const he = V ? Mv(V, l) : "";
        g?.(he), p?.(he);
      },
      [F, i, m, l, g, p]
    ), Me = B(
      (V) => {
        E.current = V, typeof k == "function" ? k(V) : k && (k.current = V);
      },
      [k]
    ), fe = B(() => {
      we(!1), _e(null), h?.(), f || R.current?.focus();
    }, [f, h]), Fe = B(() => {
      if (_) return;
      const V = Ae ?? Yn();
      _e(V), me(Oe(V)), we(!0), b?.();
    }, [_, Ae, Oe, b]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Qe = B((V) => {
      L.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), Mt = B(
      (V) => {
        if (G(V)) return;
        const he = ae ?? Ae, Ye = {
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
      [G, ae, Ae, l, re, fe]
    ), it = B(
      (V, he) => {
        _e((Ve) => {
          const Ye = Ve ?? Ae ?? Yn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + he));
          return { ...Ye, [V]: Xe };
        });
      },
      [Ae]
    ), bt = B(
      (V, he) => {
        const Ve = he.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? Ae ?? Yn(), [V]: Math.min(Pt, Ye) }));
      },
      [Ae]
    ), Z = B(() => {
      ae && (re(ae), fe());
    }, [ae, re, fe]), z = B(() => {
      if (te) return;
      const V = jr(X, i);
      re(V ? zv(V, ue, xe) : null);
    }, [te, X, i, ue, xe, re]), Y = (V) => {
      const he = V.target.value;
      F || ie(he), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? ae && (re(ae), fe()) : z()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), D?.(V);
    }, ge = (V) => {
      z(), I?.(V);
    }, le = (V) => {
      let he = null;
      switch (V.key) {
        case "ArrowLeft":
          he = Ln(K, -1), V.preventDefault();
          break;
        case "ArrowRight":
          he = Ln(K, 1), V.preventDefault();
          break;
        case "ArrowUp":
          he = Ln(K, -7), V.preventDefault();
          break;
        case "ArrowDown":
          he = Ln(K, 7), V.preventDefault();
          break;
        case "Home":
          he = Ln(K, -fa(K)), V.preventDefault();
          break;
        case "End":
          he = Ln(K, 6 - fa(K)), V.preventDefault();
          break;
        case "PageUp":
          he = fo(K, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          he = fo(K, V.shiftKey ? 12 : 1), V.preventDefault();
          break;
        case "Enter":
        case " ":
          V.preventDefault(), Mt(K);
          break;
        case "Escape":
          V.preventDefault(), fe();
          break;
        case "Tab":
          we(!1);
          break;
      }
      if (he) {
        const Ve = Oe(he);
        me(Ve), setTimeout(() => Qe(Ve), 0);
      }
    };
    be(() => {
      if (!te) return;
      const V = (he) => {
        v.current && !v.current.contains(he.target) && fe();
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
      F || ie(""), g?.(""), p?.(""), E.current?.focus();
    }, je = te && ae ? _o(ae, i, m) : F ? r ? _o(
      jr(r, i) ?? Yn(),
      i,
      m
    ) : "" : X, Je = F ? !!r : X.length > 0, et = f || te, ot = { year: K.year, month: K.month }, Xt = new Date(ot.year, ot.month - 1, 1).getDay(), oe = {
      year: ot.year,
      month: ot.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, ze = [];
    for (let V = 0; V < Cv; V += 1)
      ze.push(Ln(oe, V - Xt));
    const Nt = ae ? Yt(ae) : Ae ? Yt(Ae) : null, Rt = Yt(Yn()), xt = `${ot.year}-${an(ot.month)}`, Ie = Se(
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
      (V, he) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + he)
      )
    ), Ot = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], ct = /* @__PURE__ */ A(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": w ?? "Date picker",
        children: [
          /* @__PURE__ */ A("div", { className: Ue["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const V = Oe(fo(K, -1));
                  me(V), setTimeout(() => Qe(V), 0);
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
                  const V = Oe(fo(K, 1));
                  me(V), setTimeout(() => Qe(V), 0);
                },
                children: /* @__PURE__ */ o(De, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ A(
            "div",
            {
              ref: L,
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
                    children: ze.slice(he * 7, he * 7 + 7).map((Ve) => {
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
                          onClick: () => Mt(Ve),
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
          l && /* @__PURE__ */ A("div", { className: Ue["dx-datepicker-time"], children: [
            Rv.map((V) => /* @__PURE__ */ A("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-time-label"], children: po(V) }),
              /* @__PURE__ */ A("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": po(V),
                    value: an(
                      (ae ?? Ae ?? Yn())[V]
                    ),
                    onChange: (he) => bt(V, he.target.value),
                    onKeyDown: (he) => {
                      he.key === "ArrowUp" ? (he.preventDefault(), it(V, 1)) : he.key === "ArrowDown" ? (he.preventDefault(), it(V, -1)) : he.key === "Enter" && (he.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ A("span", { className: Ue["dx-datepicker-time-buttons"], children: [
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
    return /* @__PURE__ */ A(
      "div",
      {
        ref: v,
        className: [
          Ue["dx-datepicker"],
          f ? Ue["dx-datepicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ A(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Me,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: x,
                placeholder: N,
                tabIndex: O,
                role: d ? void 0 : "combobox",
                "aria-label": w ?? "Date",
                "aria-haspopup": d ? void 0 : "dialog",
                "aria-expanded": d ? void 0 : et,
                "aria-controls": d ? void 0 : j,
                "aria-invalid": n || void 0,
                className: [
                  Ue["dx-datepicker-input"],
                  Ot,
                  n ? Ue["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Y,
                onKeyDown: Q,
                onBlur: ge,
                onClick: () => {
                  d || Ge();
                },
                ...C
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
                onClick: Ee,
                children: /* @__PURE__ */ o(De, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: R,
                type: "button",
                className: [Ue["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": M ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": te,
                "aria-controls": j,
                disabled: _,
                onClick: Ge,
                children: /* @__PURE__ */ o(De, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          et && /* @__PURE__ */ o(
            "div",
            {
              id: j,
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
}, GS = ({
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
  const [f, y] = W(e), m = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), g = B(
    (_) => {
      d?.(_), u?.(_);
    },
    [d, u]
  ), p = B(
    (_) => {
      n || r || (g(_), y(_));
    },
    [n, r, g]
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
  return /* @__PURE__ */ A(
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
          return /* @__PURE__ */ A(
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
              onFocus: () => y(_),
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
const VS = ({
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
  onInput: p,
  onValueChange: b,
  onInputChange: h
}) => {
  const _ = ne(null), x = ne(
    null
  ), [N, w] = W(null), M = N ?? e, $ = Se(
    () => Sn(M, r, a),
    [M, r, a]
  ), O = Se(
    () => Sn(c ? t : $, r, a),
    [c, t, $, r, a]
  ), T = Se(
    () => Sn(c ? Math.max(n, O) : $, r, a),
    [c, n, O, $, r, a]
  ), I = B(
    (K) => {
      const me = a - r;
      return me <= 0 ? 0 : (Sn(K, r, a) - r) / me * 100;
    },
    [r, a]
  ), D = B(
    (K, me) => {
      const ue = _.current;
      if (!ue) return r;
      const xe = ue.getBoundingClientRect();
      let pe;
      s === "vertical" ? pe = 1 - (me - xe.top) / xe.height : pe = (K - xe.left) / xe.width;
      const Ae = r + Sn(pe, 0, 1) * (a - r);
      return i > 0 ? Sn(Math.round(Ae / i) * i, r, a) : Sn(Ae, r, a);
    },
    [r, a, i, s]
  ), C = B(
    (K) => {
      typeof K == "number" && w(K), g?.(K), b?.(K);
    },
    [g, b]
  ), k = B(
    (K) => {
      typeof K == "number" && w(K), p?.(K), h?.(K);
    },
    [p, h]
  ), v = B(
    (K, me, ue) => {
      const xe = D(me, ue);
      let pe;
      c ? K === "min" ? pe = { min: Math.min(xe, T), max: T } : pe = { min: O, max: Math.max(xe, O) } : pe = xe, k(pe), x.current === null && C(pe);
    },
    [c, D, O, T, k, C]
  ), E = B(
    (K, me) => {
      const ue = (i > 0 ? i : 1) * me;
      let xe;
      c ? K === "min" ? xe = {
        min: Sn(O + ue, r, T),
        max: T
      } : xe = {
        min: O,
        max: Sn(T + ue, O, a)
      } : xe = Sn($ + ue, r, a), C(xe);
    },
    [c, i, r, a, O, T, $, C]
  ), R = (K, me) => {
    if (!l)
      switch (me.key) {
        case "ArrowLeft":
        case "ArrowDown":
          me.preventDefault(), E(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          me.preventDefault(), E(K, 1);
          break;
        case "Home":
          me.preventDefault(), C(c ? K === "min" ? { min: r, max: T } : { min: O, max: O } : r);
          break;
        case "End":
          me.preventDefault(), C(c ? K === "min" ? { min: T, max: T } : { min: O, max: a } : a);
          break;
      }
  }, L = (K, me) => {
    l || (me.preventDefault(), me.currentTarget.focus(), typeof me.currentTarget.setPointerCapture == "function" && me.currentTarget.setPointerCapture(me.pointerId), x.current = { key: K, pointerId: me.pointerId }, v(K, me.clientX, me.clientY));
  }, j = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (K.preventDefault(), v(x.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (x.current = null, K.preventDefault(), C(c ? { min: O, max: T } : $));
  }, [X, ie] = W(null), te = I(O), we = I(T), ae = c ? te : 0, _e = we;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        tr["dx-slider"],
        s === "vertical" ? tr["dx-slider-vertical"] : null,
        l ? tr["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ A("div", { ref: _, className: tr["dx-slider-track"], children: [
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
            "aria-valuenow": Math.round(O),
            "aria-orientation": s,
            "aria-label": c ? u : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && X === "max" ? -1 : y,
            className: tr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (K) => R("min", K),
            onPointerDown: (K) => L("min", K),
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
            "aria-valuenow": Math.round(T),
            "aria-orientation": s,
            "aria-label": f,
            "aria-disabled": l || void 0,
            tabIndex: l || X === "min" ? -1 : y,
            className: tr["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
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
}, Pv = "-10675199.02:48:05.4775808", jv = "10675199.02:48:05.4775808", Pn = 86400, jn = 3600, vn = 60, Ho = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, pa = {
  days: Pn,
  hours: jn,
  minutes: vn,
  seconds: 1
}, Bv = {
  day: Pn,
  hour: jn,
  minute: vn,
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
function Fv(e) {
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
  const c = Math.floor(r / vn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, u = Math.floor(l / 24), f = n ? "-" : "", y = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${y}${mr(d)}`;
    case "minute":
      return `${f}${y}${mr(d)}:${mr(s)}`;
    default:
      return `${f}${y}${mr(d)}:${mr(s)}:${mr(a)}`;
  }
}
function ma(e, t = "second") {
  const n = Kr(e);
  return n === null ? "" : ts(n, t);
}
function Uo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const YS = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Pv,
    max: c = jv,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: y = !0,
    allowClear: m = !1,
    inline: g = !1,
    onChange: p,
    onValueChange: b,
    onOpen: h,
    onClose: _,
    disabled: x,
    placeholder: N,
    ariaLabel: w,
    triggerLabel: M,
    clearLabel: $,
    tabIndex: O,
    className: T,
    onBlur: I,
    onKeyDown: D,
    ...C
  }, k) {
    const v = ne(null), E = ne(null), R = ne(null), L = lt(), j = r !== void 0, [F, X] = W(
      () => a != null ? ma(a, l) : ""
    ), [ie, te] = W(!1), [we, ae] = W(null), [_e, K] = W(null), me = Se(
      () => Kr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Se(
      () => Kr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), xe = Se(() => {
      const oe = Number.parseFloat(s);
      return Number.isNaN(oe) || oe <= 0 ? 1 : oe;
    }, [s]), pe = Se(() => {
      const oe = j ? r ?? "" : F;
      return oe ? Kr(oe) : null;
    }, [r, F, j]), Ae = B(
      (oe) => {
        const ze = oe === null ? "" : ts(oe, l);
        j || X(ze), p?.(ze), b?.(ze);
      },
      [j, l, p, b]
    ), G = B(
      (oe) => {
        oe && we !== null && Ae(we), te(!1), ae(null), K(null), _?.(), g || R.current?.focus();
      },
      [g, we, Ae, _]
    ), Oe = B(() => {
      x || (ae(pe ?? 0), te(!0), h?.());
    }, [x, pe, h]), re = B(() => {
      ie ? G(!1) : Oe();
    }, [ie, G, Oe]), Me = B(
      (oe, ze) => {
        ae((Nt) => {
          const xt = (Nt ?? pe ?? 0) + ze * xe * pa[oe];
          return Uo(xt, me, ue);
        });
      },
      [pe, xe, me, ue]
    ), fe = B(
      (oe) => {
        const ze = _e?.[oe];
        if (ze == null) return;
        const Nt = Number.parseFloat(ze), Rt = Number.isNaN(Nt) ? 0 : Nt;
        ae((xt) => {
          const Ie = xt ?? pe ?? 0, qe = ha(Ie);
          qe[oe] = Rt;
          const Ot = (Ie < 0 ? -1 : 1) * Fv(qe);
          return Uo(Ot, me, ue);
        }), K(null);
      },
      [_e, pe, me, ue]
    ), Fe = (oe, ze) => {
      K((Nt) => ({ ...Nt ?? {}, [oe]: ze }));
    }, Ge = (oe, ze) => {
      switch (ze.key) {
        case "ArrowUp":
          ze.preventDefault(), fe(oe), Me(oe, 1);
          break;
        case "ArrowDown":
          ze.preventDefault(), fe(oe), Me(oe, -1);
          break;
        case "Home":
          ze.preventDefault(), fe(oe), ae(me);
          break;
        case "End":
          ze.preventDefault(), fe(oe), ae(ue);
          break;
        case "Enter":
          ze.preventDefault(), fe(oe), G(!0);
          break;
      }
    }, Qe = B(() => {
      if (ie) return;
      const oe = Kr(F);
      Ae(oe !== null ? Uo(oe, me, ue) : null);
    }, [ie, F, me, ue, Ae]), Mt = (oe) => {
      j || X(oe.target.value);
    }, it = (oe) => {
      oe.key === "Enter" ? (oe.preventDefault(), ie ? G(!0) : Qe()) : oe.key === "Escape" && ie ? (oe.preventDefault(), G(!1)) : oe.key === "ArrowDown" && !ie ? (oe.preventDefault(), Oe()) : oe.key === "Tab" && ie && te(!1), D?.(oe);
    }, bt = (oe) => {
      Qe(), I?.(oe);
    }, Z = () => {
      j || X(""), p?.(""), b?.(""), E.current?.focus();
    };
    be(() => {
      if (!ie) return;
      const oe = (ze) => {
        v.current && !v.current.contains(ze.target) && G(!1);
      };
      return document.addEventListener("mousedown", oe), () => document.removeEventListener("mousedown", oe);
    }, [ie, G]), be(() => {
      if (!ie) return;
      const oe = (ze) => {
        ze.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", oe), () => document.removeEventListener("keydown", oe);
    }, [ie, G]), be(() => {
      if (g && we !== null) {
        const oe = pe;
        (oe === null || Math.abs(we - oe) > 1e-9) && Ae(we);
      }
    }, [g, we, pe, Ae]);
    const z = B(
      (oe) => {
        E.current = oe, typeof k == "function" ? k(oe) : k && (k.current = oe);
      },
      [k]
    ), Y = j ? r ? ma(r, l) : "" : F, Q = j ? !!r : F.length > 0, ge = g || ie, le = we ?? pe ?? 0, Ee = ha(le), je = Bv[l], et = ["days", "hours", "minutes", "seconds"].filter(
      (oe) => pa[oe] >= je && (oe === "days" ? d : oe === "hours" ? u : oe === "minutes" ? f : y)
    ), ot = t === "xs" ? ft["dx-timespanpicker-input--xs"] : t === "sm" ? ft["dx-timespanpicker-input--sm"] : t === "lg" ? ft["dx-timespanpicker-input--lg"] : t === "xl" ? ft["dx-timespanpicker-input--xl"] : ft["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ A("div", { className: ft["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-preview"], "aria-live": "polite", children: ts(le, l) }),
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-units"], children: et.map((oe) => /* @__PURE__ */ A("label", { className: ft["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: ft["dx-timespanpicker-unit-label"], children: Ho[oe] }),
        /* @__PURE__ */ A("span", { className: ft["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: ft["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: _e?.[oe] ?? String(Ee[oe]),
              onChange: (ze) => Fe(oe, ze.target.value),
              onKeyDown: (ze) => Ge(oe, ze),
              onBlur: () => fe(oe)
            }
          ),
          /* @__PURE__ */ A("span", { className: ft["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ho[oe].toLowerCase()}`,
                onClick: () => {
                  fe(oe), Me(oe, 1);
                },
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Ho[oe].toLowerCase()}`,
                onClick: () => {
                  fe(oe), Me(oe, -1);
                },
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 11 })
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
    return /* @__PURE__ */ A(
      "div",
      {
        ref: v,
        className: [
          ft["dx-timespanpicker"],
          g ? ft["dx-timespanpicker-inline"] : null,
          T
        ].filter(Boolean).join(" "),
        children: [
          !g && /* @__PURE__ */ A(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: x,
                placeholder: N,
                tabIndex: O,
                role: "combobox",
                "aria-label": w ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": L,
                "aria-invalid": n || void 0,
                className: [
                  ft["dx-timespanpicker-input"],
                  ot,
                  n ? ft["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Mt,
                onKeyDown: it,
                onBlur: bt,
                ...C
              }
            ),
            m && !x && Q && /* @__PURE__ */ o(
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
                ref: R,
                type: "button",
                className: [ft["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": M ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": L,
                disabled: x,
                onClick: re,
                children: /* @__PURE__ */ o(De, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ o(
            "div",
            {
              id: L,
              role: g ? void 0 : "dialog",
              "aria-label": w ?? "Time span picker",
              className: g ? void 0 : ft["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), Hv = "_wrapper_ou9x5_1", Uv = "_cells_ou9x5_8", Wv = "_cell_ou9x5_8", qv = "_invalid_ou9x5_63", Kv = "_live_ou9x5_73", nr = {
  wrapper: Hv,
  cells: Uv,
  cell: Wv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: qv,
  live: Kv
};
function ga(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const XS = at(
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
    const g = lt(), p = n !== void 0, [b, h] = W(ga(r).join("")), _ = p ? ga(n).join("") : b, x = Array.from({ length: t }, (C, k) => _[k] ?? ""), N = ne([]), [w, M] = W(""), $ = (C) => {
      p || h(C), a?.(C);
    }, O = (C) => {
      const k = N.current[C];
      k && !k.disabled && (k.focus(), k.select());
    }, T = (C, k) => {
      const v = k.replace(/\D/g, "").slice(-1), E = _.split("");
      if (v) {
        E[C] = v;
        const R = E.join("").slice(0, t);
        $(R), R.length < t ? O(C + 1) : u && M("Code complete");
      }
    }, I = (C, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), _[C]) {
          const v = _.split("");
          v[C] = "", $(v.join(""));
        } else if (C > 0) {
          const v = _.split("");
          v[C - 1] = "", $(v.join("")), O(C - 1);
        }
      } else k.key === "ArrowLeft" && C > 0 ? (k.preventDefault(), O(C - 1)) : k.key === "ArrowRight" && C < t - 1 ? (k.preventDefault(), O(C + 1)) : k.key === "Home" ? (k.preventDefault(), O(0)) : k.key === "End" && (k.preventDefault(), O(t - 1));
    }, D = (C, k) => {
      k.preventDefault();
      const v = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!v) return;
      const E = _.split("");
      let R = 0;
      for (let j = 0; j < v.length && C + j < t; j++)
        E[C + j] = v[j] ?? "", R++;
      const L = E.join("");
      $(L), L.length >= t ? u && M("Code complete") : O(C + R);
    };
    return /* @__PURE__ */ A(
      "div",
      {
        className: [nr.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": y ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [nr.cells, nr[c]].join(" "), children: x.map((C, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (v) => {
                N.current[k] = v, k === 0 && m && (typeof m == "function" ? m(v) : m.current = v);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: C,
              disabled: l,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": i && C !== "" ? !0 : void 0,
              autoFocus: s && k === 0,
              className: [
                nr.cell,
                nr[`cell-${c}`],
                i ? nr.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (v) => T(k, v.target.value),
              onKeyDown: (v) => I(k, v),
              onPaste: (v) => D(k, v),
              onFocus: (v) => v.target.select(),
              onBlur: () => {
                u && M("");
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
              className: nr.live,
              children: w
            }
          )
        ]
      }
    );
  }
), Gv = "_wrapper_6lcd5_1", Vv = "_header_6lcd5_7", Yv = "_label_6lcd5_15", Xv = "_clear_6lcd5_22", Zv = "_canvas_6lcd5_53", Jv = "_disabled_6lcd5_69", gr = {
  wrapper: Gv,
  header: Vv,
  label: Yv,
  clear: Xv,
  canvas: Zv,
  disabled: Jv
}, ZS = at(
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
    const m = ne(null), g = ne(!1), p = ne(!1), b = ne({ x: 0, y: 0 });
    be(() => {
      const $ = m.current;
      if (!$) return;
      const O = window.devicePixelRatio || 1, T = Math.round((l ?? $.clientWidth) * O), I = Math.round(d * O);
      ($.width !== T || $.height !== I) && ($.width = T, $.height = I);
      const D = $.getContext("2d");
      if (!D) return;
      D.setTransform(O, 0, 0, O, 0, 0), D.lineWidth = i, D.strokeStyle = a, D.lineCap = "round", D.lineJoin = "round";
      const C = t ?? n;
      if (C) {
        const k = new Image();
        k.onload = () => {
          D.drawImage(k, 0, 0, $.clientWidth, d);
        }, k.src = C;
      }
    }, [t, n, a, i, l, d]);
    const h = () => {
      const $ = m.current;
      if (!$) return;
      const O = $.toDataURL("image/png");
      r?.(O);
    }, _ = () => {
      const $ = m.current;
      if (!$) return;
      const O = $.getContext("2d");
      O && O.clearRect(0, 0, $.width, $.height), r?.("");
    };
    ko(y, () => ({
      clear: _,
      toDataURL: ($ = "image/png", O) => m.current?.toDataURL($, O) ?? ""
    }));
    const x = ($) => {
      const O = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - O.left, y: $.clientY - O.top };
    }, N = ($) => {
      u || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), g.current = !0, p.current = !1, b.current = x($));
    }, w = ($) => {
      if (!g.current) return;
      $.preventDefault();
      const O = $.currentTarget.getContext("2d");
      if (!O) return;
      const T = x($);
      O.beginPath(), O.moveTo(b.current.x, b.current.y), O.lineTo(T.x, T.y), O.stroke(), b.current = T, p.current = !0;
    }, M = ($) => {
      g.current && ($.preventDefault(), g.current = !1, p.current && h());
    };
    return /* @__PURE__ */ A(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          gr.wrapper,
          f,
          u ? gr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ A("div", { className: gr.header, children: [
            /* @__PURE__ */ o("span", { className: gr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: gr.clear,
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
              className: gr.canvas,
              onPointerDown: N,
              onPointerMove: w,
              onPointerUp: M,
              onPointerCancel: M
            }
          )
        ]
      }
    );
  }
), Qv = "_wrapper_dsvd2_1", ew = "_trigger_dsvd2_7", tw = "_list_dsvd2_35", nw = "_row_dsvd2_44", rw = "_name_dsvd2_59", ow = "_size_dsvd2_68", sw = "_progress_dsvd2_74", aw = "_fill_dsvd2_82", lw = "_status_dsvd2_99", iw = "_remove_dsvd2_106", On = {
  wrapper: Qv,
  trigger: ew,
  list: tw,
  row: nw,
  name: rw,
  size: ow,
  progress: sw,
  fill: aw,
  status: lw,
  remove: iw
};
function ya(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const JS = at(function({
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
  const p = ne(null), [b, h] = W([]), _ = ne(/* @__PURE__ */ new Map()), x = (O, T) => {
    h(
      (I) => I.map((D) => D.file.name === O ? { ...D, ...T } : D)
    );
  }, N = (O) => {
    if (!t) return;
    const T = new XMLHttpRequest();
    _.current.set(O.file.name, T);
    const I = new FormData();
    if (I.append(r, O.file), T.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const C = Math.round(D.loaded / D.total * 100);
      x(O.file.name, { state: "uploading", progress: C }), f?.(O.file.name, C);
    }), T.addEventListener("load", () => {
      T.status >= 200 && T.status < 300 ? (x(O.file.name, { state: "complete", progress: 100 }), y?.(O.file.name)) : (x(O.file.name, {
        state: "error",
        message: `HTTP ${T.status}`
      }), m?.(O.file.name, `HTTP ${T.status}`));
    }), T.addEventListener("error", () => {
      x(O.file.name, { state: "error", message: "Network error" }), m?.(O.file.name, "Network error");
    }), i)
      for (const [D, C] of Object.entries(i))
        T.setRequestHeader(D, C);
    T.open("POST", t), T.send(I), x(O.file.name, { state: "uploading", progress: 0 });
  }, w = (O) => {
    if (!O) return;
    const T = [...O], I = [];
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
      D -= 1, I.push(k);
    }
    const C = I.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    h((k) => [...k, ...C]), p.current && (p.current.value = ""), a && C.forEach(N);
  }, M = (O) => {
    _.current.get(O)?.abort(), _.current.delete(O), h((I) => I.filter((D) => D.file.name !== O));
  }, $ = u ?? /* @__PURE__ */ A(
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
  return ko(g, () => ({
    open: () => p.current?.click(),
    upload: () => b.forEach((O) => O.state === "pending" ? N(O) : null)
  })), /* @__PURE__ */ A("div", { className: On.wrapper, children: [
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
        onChange: (O) => w(O.target.files)
      }
    ),
    !u && b.length > 0 && /* @__PURE__ */ o("ul", { className: On.list, children: b.map(({ file: O, state: T, progress: I, message: D }) => /* @__PURE__ */ A(
      "li",
      {
        className: On.row,
        "data-state": T,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: On.name, children: O.name }),
          /* @__PURE__ */ o("span", { className: On.size, children: ya(O.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${O.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": I,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: On.fill,
                  style: { width: `${I}%` }
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
              "aria-label": `Remove ${O.name}`,
              onClick: () => M(O.name),
              children: /* @__PURE__ */ o(De, { icon: "close", size: 14 })
            }
          )
        ]
      },
      O.name
    )) })
  ] });
}), cw = "_zone_nl0bz_1", dw = "_dragging_nl0bz_23", uw = "_caption_nl0bz_28", fw = "_browse_nl0bz_40", _w = "_disabled_nl0bz_67", Br = {
  zone: cw,
  dragging: dw,
  caption: uw,
  browse: fw,
  disabled: _w
};
function pw(e, t) {
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
const QS = at(
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
    const u = ne(null), [f, y] = W(!1), m = (_) => {
      if (!_ || _.length === 0) return;
      const x = [..._].filter((N) => pw(N, t ?? ""));
      x.length !== 0 && r?.(x);
    }, g = (_) => {
      s || (_.preventDefault(), y(!0));
    }, p = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", y(!0));
    }, b = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || y(!1);
    }, h = (_) => {
      s || (_.preventDefault(), y(!1), m(_.dataTransfer.files));
    };
    return ko(d, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ A(
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
        onDragEnter: g,
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
), hw = "_root_1a92d_1", mw = "_menubar_1a92d_5", gw = "_horizontal_1a92d_15", yw = "_vertical_1a92d_20", bw = "_itemWrapper_1a92d_25", xw = "_item_1a92d_25", vw = "_disabled_1a92d_61", ww = "_icon_1a92d_68", kw = "_text_1a92d_75", Nw = "_caret_1a92d_79", $w = "_hasChildren_1a92d_85", Sw = "_submenu_1a92d_94", Ow = "_submenuItem_1a92d_118", Ew = "_flyout_1a92d_155", Tw = "_hamburger_1a92d_175", Cw = "_responsive_1a92d_198", Mw = "_mobileOpen_1a92d_207", pt = {
  root: hw,
  menubar: mw,
  horizontal: gw,
  vertical: yw,
  itemWrapper: bw,
  item: xw,
  disabled: vw,
  icon: ww,
  text: kw,
  caret: Nw,
  hasChildren: $w,
  submenu: Sw,
  submenuItem: Ow,
  flyout: Ew,
  hamburger: Tw,
  responsive: Cw,
  mobileOpen: Mw
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
function Iw({
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
function Va(e) {
  return Wt(e) && e.type === Ya;
}
function us({
  itemKey: e,
  props: t
}) {
  const n = Bn(vo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = Se(
    () => Xr.toArray(t.children).filter(Wt),
    [t.children]
  ), d = l.length > 0, u = !!c, f = t.open !== void 0, [y, m] = Dw(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, p = ne(0), h = (g && !f ? n.openKey === e : null) ?? y, _ = B(
    (R) => {
      g && !f ? n.setOpenKey(R ? e : null) : (m(R), g && n.setOpenKey(null));
    },
    [g, f, n, e, m]
  ), [, x] = W(0);
  be(() => {
    if (!i) return;
    const R = () => x((L) => L + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const N = i && !d ? Aw(i, t.match) : !1, w = B(
    (R) => {
      if (u) {
        R.preventDefault();
        return;
      }
      const L = { text: r, value: a, path: i };
      [n.emit(L), t.onClick?.(L)].includes(!1) && R.preventDefault(), n.closeAll();
    },
    [u, r, a, i, n, t]
  ), M = B(() => {
    if (!u) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [u, h, _, n.clickToOpen]), $ = B(() => {
    !d || u || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [d, u, n.clickToOpen, _]), O = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), T = `${n.baseId}-submenu-${e}`, [I, D] = W(null);
  be(() => {
    n.closeSignal > 0 && D(null);
  }, [n.closeSignal]);
  const C = Se(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: I,
      setOpenKey: D
    }),
    [n, I]
  ), k = d ? /* @__PURE__ */ o("span", { className: pt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    De,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, v = s ?? /* @__PURE__ */ A(rt, { children: [
    /* @__PURE__ */ o(
      Iw,
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
    let R = function(L) {
      const j = Array.from(L.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      L.key === "ArrowDown" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : L.key === "ArrowUp" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : L.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), L.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (L.key === "ArrowLeft" || L.key === "Escape") && (L.preventDefault(), L.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ A(
      "div",
      {
        className: pt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : $,
        onMouseLeave: n.clickToOpen ? void 0 : O,
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
              "aria-controls": T,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                pt.item,
                u ? pt.disabled : null,
                pt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: M,
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
                n.flyout && !g ? pt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: R,
              children: /* @__PURE__ */ o(vo.Provider, { value: C, children: l.map(
                (L, j) => Va(L) ? /* @__PURE__ */ o(
                  us,
                  {
                    itemKey: `${e}-${j}`,
                    props: L.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ss, { children: L }, `${e}-custom-${j}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const E = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [pt.submenuItem, u ? pt.disabled : null].filter(Boolean).join(" "),
    onClick: w
  };
  return i && !u ? /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...E, children: v }) }) : /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: u, ...E, children: v }) });
}
function Ya(e) {
  if (!Bn(vo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(us, { itemKey: e.text, props: e });
}
function Lw({
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
  const f = lt(), y = ne(null), m = ne(null), [g, p] = W(null), [b, h] = W(0), [_, x] = W(!1), N = ne(null), w = B(
    (I) => i?.(I),
    [i]
  ), M = B(() => {
    p(null), h((I) => I + 1);
  }, []);
  be(() => {
    if (g == null) return;
    const I = (D) => {
      y.current && !y.current.contains(D.target) && M();
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, [g, M]), be(() => {
    N.current != null && g === N.current && (document.getElementById(`${f}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [g, f]);
  const $ = Se(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: b,
      emit: w,
      closeAll: M,
      openKey: g,
      setOpenKey: p
    }),
    [f, n, t, b, w, M, g]
  ), O = Se(
    () => Xr.toArray(e).filter(Wt),
    [e]
  ), T = (I) => {
    const D = m.current;
    if (!D) return;
    const C = Array.from(D.children).map((E) => E.querySelector('[role="menuitem"]')).filter(
      (E) => E != null && !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const E = document.getElementById(`${f}-submenu-${g}`);
      if (E) {
        const R = Array.from(
          E.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), L = document.activeElement, j = L ? R.indexOf(L) : -1;
        if (I.key === "ArrowDown") {
          I.preventDefault(), (j === -1 ? R[0] : R[(j + 1) % R.length])?.focus();
          return;
        }
        if (I.key === "ArrowUp") {
          I.preventDefault(), (j === -1 ? R[R.length - 1] : R[(j - 1 + R.length) % R.length])?.focus();
          return;
        }
        if (I.key === "Escape") {
          I.preventDefault(), M(), c?.(), D.querySelector(`[data-index="${g}"]`)?.focus();
          return;
        }
        if (I.key === "Enter" || I.key === " ") return;
      }
      if (I.key === "Escape") {
        I.preventDefault(), M(), c?.();
        return;
      }
    }
    const k = document.activeElement, v = k ? C.indexOf(k) : -1;
    if (I.key === "ArrowRight") {
      if (I.preventDefault(), C.length === 0) return;
      C[v === -1 ? 0 : (v + 1) % C.length]?.focus();
      return;
    }
    if (I.key === "ArrowLeft") {
      if (I.preventDefault(), C.length === 0) return;
      C[v === -1 ? C.length - 1 : (v - 1 + C.length) % C.length]?.focus();
      return;
    }
    if (I.key === "ArrowDown") {
      if (v >= 0) {
        const E = k?.getAttribute("data-index");
        if (E == null) return;
        D.querySelector(
          `[data-index="${E}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), N.current = E, p(E));
      }
      return;
    }
    if (I.key === "Home") {
      I.preventDefault(), C[0]?.focus();
      return;
    }
    if (I.key === "End") {
      I.preventDefault(), C[C.length - 1]?.focus();
      return;
    }
    if (I.key.length === 1 && !I.ctrlKey && !I.metaKey) {
      const E = C.map((L) => L.textContent ?? ""), R = v === -1 ? 0 : (v + 1) % C.length;
      for (let L = 0; L < C.length; L++) {
        const j = (R + L) % C.length;
        if (E[j]?.toLowerCase().startsWith(I.key.toLowerCase())) {
          I.preventDefault(), C[j]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ A(
    "nav",
    {
      ref: y,
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
            onClick: () => x((I) => !I),
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
            children: /* @__PURE__ */ o(vo.Provider, { value: $, children: O.map(
              (I, D) => Va(I) ? /* @__PURE__ */ o(
                us,
                {
                  itemKey: String(D),
                  props: I.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ o(ss, { children: I }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const zw = "_popup_uiejp_1", Rw = "_menu_uiejp_22", ns = {
  popup: zw,
  menu: Rw
}, Xa = ir(null);
function eO() {
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
function Pw({ state: e, onClose: t }) {
  const n = ne(null), [r, a] = W({ left: e.x, top: e.y });
  Wo(() => {
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
      className: ns.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: ns.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Lw,
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
function tO({ children: e }) {
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
  const i = Se(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ A(Xa.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Pw, { state: t, onClose: r }) : null
  ] });
}
const jw = "_root_rgcia_1", Bw = "_list_rgcia_9", Fw = "_item_rgcia_14", Hw = "_trigger_rgcia_18", Uw = "_disabled_rgcia_45", Ww = "_expanded_rgcia_52", qw = "_selected_rgcia_56", Kw = "_icon_rgcia_61", Gw = "_text_rgcia_72", Vw = "_caret_rgcia_79", Yw = "_open_rgcia_86", Xw = "_submenu_rgcia_90", Zw = "_iconOnly_rgcia_172", Jw = "_stacked_rgcia_201", zt = {
  root: jw,
  list: Bw,
  item: Fw,
  trigger: Hw,
  disabled: Uw,
  expanded: Ww,
  selected: qw,
  icon: Kw,
  text: Gw,
  caret: Vw,
  open: Yw,
  submenu: Xw,
  iconOnly: Zw,
  stacked: Jw
}, wo = ir(null);
function Qw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function e2(e, t) {
  const n = Qw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function t2({
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
  const { text: a, value: i, path: c, disabled: s } = n, l = Se(
    () => Xr.toArray(n.children).filter(Wt),
    [n.children]
  ), d = l.length > 0, u = !!s, f = n.match ?? r.match, y = n.expanded !== void 0, [m, g] = W(
    n.defaultExpanded ?? !1
  ), p = y ? n.expanded ?? !1 : m, b = B(
    (F) => {
      y || g(F), n.onExpandedChange?.(F);
    },
    [y, n]
  );
  be(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && b(!1);
  }, [r.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, x] = W(
    n.defaultSelected ?? !1
  ), N = !h && c ? e2(c, f) : !1, w = n.selected ?? (h ? _ : N || _), [, M] = W(0);
  be(() => {
    if (!c) return;
    const F = () => M((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [c]);
  const $ = Se(
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
    N && t.length > 0 && $.openAncestors();
  }, []);
  const O = B(
    (F) => {
      if (u) {
        F.preventDefault();
        return;
      }
      const X = { text: a, value: i, path: c };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), h || x(!0), n.onSelectedChange?.(!0);
    },
    [u, a, i, c, r, n, h]
  ), T = B(() => {
    u || (p || r.notifyOpened(e, t), b(!p));
  }, [u, p, r, e, t, b]), I = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), d ? T() : F.target.click()) : F.key === "Escape" && p ? (F.preventDefault(), b(!1)) : F.key === "ArrowRight" && d && !p ? (F.preventDefault(), r.notifyOpened(e, t), b(!0)) : F.key === "ArrowLeft" && p && (F.preventDefault(), b(!1));
    },
    [d, T, p, b, r, e, t]
  ), D = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [zt.caret, p ? zt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, C = n.template ?? /* @__PURE__ */ A(rt, { children: [
    /* @__PURE__ */ o(
      t2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: zt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: zt.text, children: a }),
    D
  ] }), k = `${r.baseId}-panel-${e}`, v = `${r.baseId}-trigger-${e}`, E = [
    zt.trigger,
    u ? zt.disabled : null,
    p ? zt.expanded : null,
    w ? zt.selected : null
  ].filter(Boolean).join(" "), R = r.level > 0 ? "menuitem" : void 0, L = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: v,
      role: R,
      "aria-expanded": p,
      "aria-controls": k,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: E,
      onClick: T,
      onKeyDown: I,
      children: C
    }
  ) : c && !u ? /* @__PURE__ */ o(
    "a",
    {
      id: v,
      role: R,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": w ? "page" : void 0,
      tabIndex: 0,
      className: E,
      onClick: O,
      onKeyDown: I,
      children: C
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: v,
      role: R,
      "aria-current": w ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: E,
      onClick: O,
      onKeyDown: I,
      children: C
    }
  ), j = d ? r.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: k,
      role: "menu",
      "aria-labelledby": v,
      className: zt.submenu,
      hidden: r.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(wo.Provider, { value: $, children: l.map((F, X) => /* @__PURE__ */ o(
        fs,
        {
          itemKey: `${e}-${X}`,
          ancestors: [...t, e],
          props: F.props
        },
        `${e}-${X}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ A(
    "div",
    {
      className: zt.item,
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
function nO(e) {
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(fs, { itemKey: e.text, ancestors: [], props: e });
}
function rO({
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
  const u = lt(), [f, y] = W(0), m = ne(/* @__PURE__ */ new Set()), g = B(
    (N) => c?.(N),
    [c]
  ), p = B(
    (N, w) => {
      t || (m.current = /* @__PURE__ */ new Set([N, ...w]), y((M) => M + 1));
    },
    [t]
  ), b = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (w) => !w.hasAttribute("disabled") && w.getAttribute("aria-disabled") !== "true" && w.closest("[hidden]") == null
  ), h = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const w = N.target, M = b(N.currentTarget), $ = M.indexOf(w);
        if ($ === -1) return;
        N.preventDefault();
        const O = N.key === "ArrowDown" ? 1 : -1;
        M[($ + O + M.length) % M.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const w = b(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? w[0] : w[w.length - 1])?.focus();
      }
    }
  }, _ = Se(
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
      g,
      p
    ]
  ), x = Se(
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
const n2 = "_root_5numg_1", r2 = "_trigger_5numg_7", o2 = "_defaultTrigger_5numg_40", s2 = "_avatar_5numg_46", a2 = "_menu_5numg_58", l2 = "_item_5numg_74", i2 = "_disabled_5numg_88", c2 = "_active_5numg_97", d2 = "_icon_5numg_107", u2 = "_text_5numg_114", En = {
  root: n2,
  trigger: r2,
  defaultTrigger: o2,
  avatar: s2,
  menu: a2,
  item: l2,
  disabled: i2,
  active: c2,
  icon: d2,
  text: u2
};
function oO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = lt(), c = `${i}-menu`, s = ne(null), l = ne(null), [d, u] = W(!1), [f, y] = W(-1), m = t, g = e.map((w, M) => w.disabled ? -1 : M).filter((w) => w >= 0), p = B(
    (w) => {
      if (w.disabled) return;
      const M = {
        text: w.text,
        path: w.path
      };
      n?.(M), u(!1), l.current?.focus();
    },
    [n]
  ), b = B(() => {
    y(g[0] ?? -1), u(!0);
  }, [g]), h = B(() => {
    u(!1), y(-1), l.current?.focus();
  }, []);
  be(() => {
    if (!d) return;
    const w = (M) => {
      s.current && !s.current.contains(M.target) && (u(!1), y(-1));
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [d]), be(() => {
    if (!d) return;
    const w = (M) => {
      M.key === "Escape" && (M.preventDefault(), h());
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [d, h]);
  const _ = (w) => {
    if (g.length === 0) return;
    const M = g.indexOf(f), $ = M === -1 ? 0 : (M + w + g.length) % g.length, O = g[$];
    O != null && y(O);
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
        w.preventDefault(), g[0] != null && y(g[0]);
        break;
      case "End":
        w.preventDefault(), g[g.length - 1] != null && y(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (w.preventDefault(), f >= 0) {
          const M = e[f];
          M && !M.disabled && p(M);
        }
        break;
      case "Tab":
        u(!1), y(-1);
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
        w.preventDefault(), g[0] != null && y(g[0]);
        break;
      case "End":
        w.preventDefault(), g[g.length - 1] != null && y(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (w.preventDefault(), f >= 0) {
          const M = e[f];
          M && !M.disabled && p(M);
        }
        break;
      case "Escape":
        w.preventDefault(), h();
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
      className: [En.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ A("nav", { "aria-label": r, children: [
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
            children: m ?? /* @__PURE__ */ A("span", { className: En.defaultTrigger, children: [
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
            children: e.map((w, M) => {
              const $ = !!w.disabled, O = M === f;
              return /* @__PURE__ */ A(
                "div",
                {
                  id: `${i}-item-${M}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [
                    En.item,
                    O ? En.active : null,
                    $ ? En.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || p(w);
                  },
                  onMouseEnter: () => {
                    $ || y(M);
                  },
                  children: [
                    w.icon ? /* @__PURE__ */ o("span", { className: En.icon, "aria-hidden": "true", children: w.icon }) : null,
                    /* @__PURE__ */ o("span", { className: En.text, children: w.text })
                  ]
                },
                `${w.text}-${M}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const f2 = "_root_vv0xs_1", _2 = "_bottomRight_vv0xs_11", p2 = "_bottomLeft_vv0xs_16", h2 = "_topRight_vv0xs_21", m2 = "_topLeft_vv0xs_26", g2 = "_menu_vv0xs_31", y2 = "_itemWrapper_vv0xs_48", b2 = "_tooltip_vv0xs_54", x2 = "_main_vv0xs_76", v2 = "_mainIcon_vv0xs_104", w2 = "_mainOpen_vv0xs_109", k2 = "_item_vv0xs_48", N2 = "_disabled_vv0xs_141", $2 = "_itemIcon_vv0xs_148", qt = {
  root: f2,
  bottomRight: _2,
  bottomLeft: p2,
  topRight: h2,
  topLeft: m2,
  menu: g2,
  itemWrapper: y2,
  tooltip: b2,
  main: x2,
  mainIcon: v2,
  mainOpen: w2,
  item: k2,
  disabled: N2,
  itemIcon: $2
};
function sO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${lt()}-menu`, d = ne(null), u = ne(null), [f, y] = W(!1), m = B(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      r?.(_), y(!1), u.current?.focus();
    },
    [r]
  );
  be(() => {
    if (!f) return;
    const h = (_) => {
      d.current && !d.current.contains(_.target) && y(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [f]), be(() => {
    if (!f) return;
    const h = (_) => {
      _.key === "Escape" && (y(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [f]);
  const g = c === "bottom-right" ? qt.bottomRight : c === "bottom-left" ? qt.bottomLeft : c === "top-right" ? qt.topRight : qt.topLeft, p = (h) => {
    !f && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), y(!0)) : f && h.key === "Escape" && (h.preventDefault(), y(!1));
  }, b = (h) => {
    h.key === "Escape" && (h.preventDefault(), y(!1), u.current?.focus());
  };
  return /* @__PURE__ */ A(
    "div",
    {
      ref: d,
      className: [qt.root, g, i].filter(Boolean).join(" "),
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
              return /* @__PURE__ */ A("div", { className: qt.itemWrapper, children: [
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
            onClick: () => y((h) => !h),
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
const S2 = "_root_1eyur_1", O2 = "_list_1eyur_5", E2 = "_item_1eyur_15", T2 = "_link_1eyur_22", C2 = "_linkButton_1eyur_23", M2 = "_current_1eyur_24", A2 = "_disabled_1eyur_68", D2 = "_icon_1eyur_74", I2 = "_text_1eyur_81", L2 = "_separator_1eyur_85", _t = {
  root: S2,
  list: O2,
  item: E2,
  link: T2,
  linkButton: C2,
  current: M2,
  disabled: A2,
  icon: D2,
  text: I2,
  separator: L2
};
function aO({
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
        return /* @__PURE__ */ A("li", { className: _t.item, children: [
          l ? d ? /* @__PURE__ */ A(
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
          ) : c.path ? /* @__PURE__ */ A(
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
          ) : /* @__PURE__ */ A(
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
          ) : d ? /* @__PURE__ */ A(
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
          ) : c.path ? /* @__PURE__ */ A(
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
          ) : /* @__PURE__ */ A(
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
const z2 = "_link_tmy3k_1", R2 = {
  link: z2
}, lO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ A(rt, { children: [
    n != null && /* @__PURE__ */ o(De, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [R2.link, a].filter(Boolean).join(" ");
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
}), P2 = "_root_dnkuu_1", j2 = "_list_dnkuu_5", B2 = "_item_dnkuu_15", F2 = "_connector_dnkuu_21", H2 = "_connectorCompleted_dnkuu_30", U2 = "_step_dnkuu_34", W2 = "_active_dnkuu_69", q2 = "_completed_dnkuu_75", K2 = "_circle_dnkuu_79", G2 = "_check_dnkuu_109", V2 = "_icon_dnkuu_114", Y2 = "_number_dnkuu_119", X2 = "_text_dnkuu_124", Kt = {
  root: P2,
  list: j2,
  item: B2,
  connector: F2,
  connectorCompleted: H2,
  step: U2,
  active: W2,
  completed: q2,
  circle: K2,
  check: G2,
  icon: V2,
  number: Y2,
  text: X2
};
function iO({
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
  const f = a ?? i ?? !1, y = t ?? n, m = y !== void 0, [g, p] = W(() => Math.min(Math.max(0, y ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, m ? y : g),
    Math.max(0, e.length - 1)
  ), _ = ne(null), x = B(
    (M) => {
      const $ = Math.min(
        Math.max(0, M),
        Math.max(0, e.length - 1)
      );
      m || p($), (c ?? s ?? l)?.($);
    },
    [m, c, s, l, e.length]
  ), N = B(
    (M, $) => !!($.disabled || f && M > h + 1),
    [f, h]
  ), w = (M) => {
    const $ = Array.from(
      M.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), O = document.activeElement, T = O ? $.indexOf(O) : -1;
    if (M.key === "ArrowRight" || M.key === "ArrowDown") {
      if (M.preventDefault(), $.length === 0) return;
      const I = T === -1 ? 0 : (T + 1) % $.length, D = $[I];
      D && D.focus();
    } else if (M.key === "ArrowLeft" || M.key === "ArrowUp") {
      if (M.preventDefault(), $.length === 0) return;
      const I = T === -1 ? $.length - 1 : (T - 1 + $.length) % $.length, D = $[I];
      D && D.focus();
    } else M.key === "Home" ? (M.preventDefault(), $[0]?.focus()) : M.key === "End" && (M.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": d,
      className: [Kt.root, u].filter(Boolean).join(" "),
      onKeyDown: w,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: Kt.list, children: e.map((M, $) => {
        const O = $ === h, T = $ < h, I = N($, M);
        return /* @__PURE__ */ A(
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
              /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  "data-step": $,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    Kt.step,
                    O ? Kt.active : null,
                    T ? Kt.completed : null,
                    I ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || x($);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Kt.circle, "aria-hidden": "true", children: T ? /* @__PURE__ */ o("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: "check", size: "sm" }) }) : M.icon ? /* @__PURE__ */ o("span", { className: Kt.icon, children: M.icon }) : /* @__PURE__ */ o("span", { className: Kt.number, children: $ + 1 }) }),
                    /* @__PURE__ */ o("span", { className: Kt.text, children: M.text })
                  ]
                }
              )
            ]
          },
          `${M.text}-${$}`
        );
      }) })
    }
  );
}
const Z2 = "_root_12hod_1", J2 = "_horizontal_12hod_13", Q2 = "_vertical_12hod_17", ek = "_pane_12hod_21", tk = "_handle_12hod_31", nk = "_handleHorizontal_12hod_51", rk = "_handleVertical_12hod_57", ok = "_handleGrip_12hod_63", sk = "_handleCollapseHint_12hod_75", ak = "_collapseBtn_12hod_79", lk = "_collapseBtnCollapsed_12hod_109", fn = {
  root: Z2,
  horizontal: J2,
  vertical: Q2,
  pane: ek,
  handle: tk,
  handleHorizontal: nk,
  handleVertical: rk,
  handleGrip: ok,
  handleCollapseHint: sk,
  collapseBtn: ak,
  collapseBtnCollapsed: lk
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
function cO({
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
  const d = e ?? t ?? "horizontal", u = d === "horizontal", f = ne(null), y = B(() => {
    const k = n.length;
    if (k === 0) return [];
    const v = n.map((R) => R.size ? Fr(R.size, 100 / k) : 100 / k), E = v.reduce((R, L) => R + L, 0);
    return Math.abs(E - 100) > 0.01 && E > 0 ? v.map((R) => R / E * 100) : v;
  }, [n]), [m, g] = W(() => y()), [p, b] = W(
    () => n.map((k) => !!k.collapsed)
  ), h = ne(m);
  be(() => {
    b(n.map((k) => !!k.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((k) => Fr(k.min, 0)),
    [n]
  ), x = B(
    () => n.map((k) => Fr(k.max, 100)),
    [n]
  ), N = B(
    (k, v) => {
      const E = { paneIndex: k, newSize: v, cancel: !1 };
      return (r ?? a)?.(E), !E.cancel;
    },
    [r, a]
  ), w = B(
    (k, v) => {
      const E = { paneIndex: k, collapse: v, cancel: !1 };
      return (i ?? c)?.(E), !E.cancel;
    },
    [i, c]
  ), M = B(
    (k) => {
      const v = !p[k];
      w(k, v) && (v ? (h.current = [...m], b((E) => {
        const R = [...E];
        return R[k] !== void 0 && (R[k] = !0), R;
      }), g((E) => {
        const R = [...E], L = R[k] ?? 0, j = k < R.length - 1 ? k + 1 : k - 1;
        if (j >= 0 && j < R.length) {
          const F = R[j] ?? 0;
          R[j] = F + L, R[k] = 0;
        } else
          R[k] = 0;
        return R;
      })) : (b((E) => {
        const R = [...E];
        return R[k] !== void 0 && (R[k] = !1), R;
      }), g(() => {
        const E = [...h.current];
        return E.length !== n.length ? n.map(() => 100 / n.length) : E;
      })));
    },
    [p, m, n.length, w]
  ), $ = ne(
    null
  ), O = B(
    (k, v, E) => {
      const R = f.current;
      if (!R) return null;
      const L = R.getBoundingClientRect();
      let j;
      if (u) {
        if (L.width === 0) return null;
        j = (v - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        j = (E - L.top) / L.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < k; ie++) {
        const te = m[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [u, m]
  ), T = (k, v) => {
    v.preventDefault();
    const E = v.currentTarget;
    E.focus(), typeof E.setPointerCapture == "function" && E.setPointerCapture(v.pointerId), $.current = { handleIndex: k, pointerId: v.pointerId };
  }, I = (k) => {
    if (!$.current || $.current.pointerId !== k.pointerId)
      return;
    k.preventDefault();
    const v = $.current.handleIndex, E = O(v, k.clientX, k.clientY);
    if (E == null) return;
    const R = _(), L = x(), j = R[v] ?? 0, F = L[v] ?? 100, X = v + 1, ie = R[X] ?? 0, te = L[X] ?? 100, we = m[v] ?? 0, ae = m[X] ?? 0, _e = we + ae;
    if (_e <= 0) return;
    let K = zn(E, j, F), me = _e - K;
    if (me < ie) {
      if (me = ie, K = _e - me, K < j || K > F) return;
    } else if (me > te && (me = te, K = _e - me, K < j || K > F))
      return;
    K = zn(K, j, F), me = _e - K, N(v, K) && g((ue) => {
      const xe = [...ue];
      return xe[v] = K, xe[X] = me, xe;
    });
  }, D = (k) => {
    !$.current || $.current.pointerId !== k.pointerId || ($.current = null);
  }, C = (k, v) => {
    const E = _(), R = x(), L = k, j = k + 1, F = m[L] ?? 0, X = m[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[L]?.collapsible, ae = !!n[j]?.collapsible;
    if (u ? v.key === "ArrowLeft" ? te = -5 : v.key === "ArrowRight" && (te = 5) : v.key === "ArrowUp" ? te = -5 : v.key === "ArrowDown" && (te = 5), v.key === "Home") {
      v.preventDefault();
      let _e = E[L] ?? 0, K = ie - _e;
      if (K = zn(
        K,
        E[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, E[L] ?? 0, R[L] ?? 100), !N(L, _e)) return;
      g((me) => {
        const ue = [...me];
        return ue[L] = _e, ue[j] = K, ue;
      });
      return;
    }
    if (v.key === "End") {
      v.preventDefault();
      let _e = R[L] ?? 100;
      _e = Math.min(_e, ie - (E[j] ?? 0));
      let K = ie - _e;
      if (K = zn(
        K,
        E[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, E[L] ?? 0, R[L] ?? 100), !N(L, _e)) return;
      g((me) => {
        const ue = [...me];
        return ue[L] = _e, ue[j] = K, ue;
      });
      return;
    }
    if ((v.key === "Enter" || v.key === " ") && (we || ae)) {
      v.preventDefault(), M(we ? L : j);
      return;
    }
    if (te !== 0) {
      v.preventDefault();
      let _e = F + te, K = ie - _e;
      const me = E[L] ?? 0, ue = R[L] ?? 100, xe = E[j] ?? 0, pe = R[j] ?? 100;
      if (_e = zn(_e, me, ue), K = ie - _e, (K < xe || K > pe) && (K = zn(K, xe, pe), _e = ie - K, _e = zn(_e, me, ue), K = ie - _e), !N(L, _e)) return;
      g((Ae) => {
        const G = [...Ae];
        return G[L] = _e, G[j] = K, G;
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
        const E = !!p[v], R = E ? 0 : m[v] ?? 100 / n.length, L = E ? { display: "none" } : u ? {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Fr(k.min, 0), F = Fr(k.max, 100), X = v < n.length - 1, ie = !!n[v + 1]?.collapsible;
        return /* @__PURE__ */ A("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ A(
            "div",
            {
              role: "group",
              "aria-label": k.label ?? `Pane ${v + 1}`,
              className: fn.pane,
              style: L,
              "data-collapsed": E ? "true" : void 0,
              children: [
                E ? null : k.children,
                k.collapsible && !E ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: fn.collapseBtn,
                    "aria-label": `Collapse pane ${v + 1}`,
                    "aria-expanded": !E,
                    onClick: () => M(v),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                k.collapsible && E ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: fn.collapseBtn,
                    "aria-label": `Expand pane ${v + 1}`,
                    "aria-expanded": !E,
                    onClick: () => M(v),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          E && k.collapsible ? (
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
                onClick: () => M(v),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          X ? /* @__PURE__ */ A(
            "div",
            {
              role: "separator",
              "aria-orientation": d,
              "aria-valuemin": j,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(R),
              "aria-label": `Resize handle ${v + 1}`,
              tabIndex: E || p[v + 1] ? -1 : 0,
              className: [
                fn.handle,
                u ? fn.handleHorizontal : fn.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => T(v, te),
              onPointerMove: I,
              onPointerUp: D,
              onKeyDown: (te) => C(v, te),
              children: [
                /* @__PURE__ */ o("span", { className: fn.handleGrip, "aria-hidden": "true" }),
                (k.collapsible || ie) && /* @__PURE__ */ o(
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
const ik = "_root_1w3wd_1", ck = "_list_1w3wd_5", dk = "_vertical_1w3wd_14", uk = "_horizontal_1w3wd_20", fk = "_item_1w3wd_28", _k = "_link_1w3wd_32", pk = "_active_1w3wd_57", yr = {
  root: ik,
  list: ck,
  vertical: dk,
  horizontal: uk,
  item: fk,
  link: _k,
  active: pk
};
function dO({
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
  ), m = ne(f);
  m.current = f;
  const g = B(
    (p, b) => {
      if (y(p.selector), (i ?? c)?.({ text: p.text, selector: p.selector }), b) {
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
        const w = document.querySelector(d);
        if (w) return w;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), x = () => {
      let w = null, M = null;
      for (const O of e) {
        const T = document.querySelector(O.selector);
        if (!T) continue;
        _.set(O.selector, T);
        const I = T.getBoundingClientRect();
        let D = I.top;
        if (b !== window) {
          const C = b.getBoundingClientRect();
          D = I.top - C.top;
        }
        D <= 80 ? (!M || D > M.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (M = { sel: O.selector, el: T }) : (!w || D < w.top) && (w = { sel: O.selector, top: D });
      }
      const $ = M?.sel ?? w?.sel ?? e[0]?.selector ?? null;
      $ && $ !== m.current && y($);
    }, N = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const w = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((M) => {
        const $ = M.filter((O) => O.isIntersecting).sort((O, T) => O.boundingClientRect.top - T.boundingClientRect.top);
        if ($[0]) {
          const O = $[0].target;
          for (const T of e) {
            if (document.querySelector(T.selector) === O) {
              y(T.selector);
              break;
            }
            if (T.selector.startsWith("#") && O.id === T.selector.slice(1)) {
              y(T.selector);
              break;
            }
          }
        } else
          x();
      }, w);
      for (const M of e) {
        const $ = document.querySelector(M.selector);
        $ && (h.observe($), _.set(M.selector, $));
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
      className: [yr.root, yr[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: yr.list, children: e.map((p) => {
        const b = p.selector === f;
        return /* @__PURE__ */ o("li", { className: yr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [yr.link, b ? yr.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const _ = document.querySelector(p.selector);
              g(p, _);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const hk = "_root_1bfit_1", mk = "_viewport_1bfit_17", gk = "_slide_1bfit_24", yk = "_active_1bfit_33", bk = "_arrow_1bfit_37", xk = "_prev_1bfit_71", vk = "_next_1bfit_75", wk = "_pauseBtn_1bfit_79", kk = "_indicators_1bfit_110", Nk = "_indicator_1bfit_110", $k = "_indicatorActive_1bfit_145", _n = {
  root: hk,
  viewport: mk,
  slide: gk,
  active: yk,
  arrow: bk,
  prev: xk,
  next: vk,
  pauseBtn: wk,
  indicators: kk,
  indicator: Nk,
  indicatorActive: $k
};
function uO({
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
  Change: p,
  ariaLabel: b = "Carousel",
  className: h
}) {
  const _ = t ?? n, x = _ !== void 0, [N, w] = W(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), M = x ? _ : N, $ = e.length === 0 ? 0 : Math.min(Math.max(0, M), e.length - 1), O = a ?? i ?? !1, T = c ?? s ?? 3e3, I = l ?? d ?? !0, D = u ?? f ?? !0, C = y ?? m ?? !0, [k, v] = W(!1), [E, R] = W(!1), L = k || E, j = ne(null), F = lt(), X = B(
    (xe) => {
      const pe = e.length === 0 ? 0 : (xe % e.length + e.length) % e.length;
      x || w(pe), (g ?? p)?.(pe);
    },
    [x, g, p, e.length]
  ), ie = B(() => {
    X($ - 1);
  }, [X, $]), te = B(() => {
    X($ + 1);
  }, [X, $]), we = B(
    (xe) => {
      X(xe);
    },
    [X]
  );
  be(() => {
    if (!O || L || e.length <= 1) return;
    const xe = setInterval(() => {
      X($ + 1);
    }, T);
    return () => clearInterval(xe);
  }, [O, L, T, $, X, e.length]);
  const ae = (xe) => {
    e.length !== 0 && (xe.key === "ArrowLeft" ? (xe.preventDefault(), ie()) : xe.key === "ArrowRight" ? (xe.preventDefault(), te()) : xe.key === "Home" ? (xe.preventDefault(), we(0)) : xe.key === "End" && (xe.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    I && O && R(!0);
  }, K = () => {
    I && O && R(!1);
  }, me = () => {
    I && O && R(!0);
  }, ue = () => {
    I && O && R(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ A(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [_n.root, h].filter(Boolean).join(" "),
      onKeyDown: ae,
      onMouseEnter: _e,
      onMouseLeave: K,
      onFocusCapture: me,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ o("div", { id: F, className: _n.viewport, children: e.map((xe, pe) => {
          const Ae = pe === $;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${pe + 1} of ${e.length}`,
              "aria-hidden": Ae ? void 0 : !0,
              hidden: !Ae,
              className: [_n.slide, Ae ? _n.active : null].filter(Boolean).join(" "),
              children: xe
            },
            pe
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ A(rt, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
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
              className: [_n.arrow, _n.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": F,
              onClick: te,
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
            onClick: () => v((xe) => !xe),
            children: k ? "▶" : "⏸"
          }
        ) : null,
        C && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: _n.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((xe, pe) => {
              const Ae = pe === $;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    _n.indicator,
                    Ae ? _n.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${pe + 1}`,
                  "aria-current": Ae ? "true" : void 0,
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
const Sk = "_root_1aa5u_1", Ok = "_group_1aa5u_20", Ek = "_itemWrapper_1aa5u_30", Tk = "_treeitem_1aa5u_34", Ck = "_disabled_1aa5u_50", Mk = "_selected_1aa5u_60", Ak = "_caret_1aa5u_66", Dk = "_caretIcon_1aa5u_113", Ik = "_caretOpen_1aa5u_120", Lk = "_caretPlaceholder_1aa5u_124", zk = "_label_1aa5u_130", Rk = "_loading_1aa5u_137", Pk = "_loadingRow_1aa5u_143", jk = "_empty_1aa5u_149", Bk = "_checkbox_1aa5u_155", Dt = {
  root: Sk,
  group: Ok,
  itemWrapper: Ek,
  treeitem: Tk,
  disabled: Ck,
  selected: Mk,
  caret: Ak,
  caretIcon: Dk,
  caretOpen: Ik,
  caretPlaceholder: Lk,
  label: zk,
  loading: Rk,
  loadingRow: Pk,
  empty: jk,
  checkbox: Bk
};
function Fk({
  indeterminate: e,
  ...t
}) {
  const n = ne(null);
  return be(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function fO({
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
  defaultSelectedItems: p,
  onChange: b,
  Change: h,
  onExpand: _,
  Expand: x,
  onCollapse: N,
  Collapse: w,
  loadChildData: M,
  LoadChildData: $,
  template: O,
  Template: T,
  itemTemplate: I,
  ItemTemplate: D,
  ariaLabel: C,
  AriaLabel: k,
  allowCheckBoxes: v = !1,
  checkedKeys: E,
  defaultCheckedKeys: R,
  onCheckedChange: L,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = a ?? i ?? "text", we = c ?? s ?? "id", ae = l ?? d ?? "single", _e = C ?? k ?? "Tree", K = M ?? $, me = O ?? T ?? I ?? D, ue = B(
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
  ), Ae = B(
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
  ), [G, Oe] = W(
    () => Ae(X)
  ), [re, Me] = W(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = W(() => /* @__PURE__ */ new Set()), Ge = u ?? f, Qe = y ?? m, bt = ae === "multiple" ? Qe !== void 0 : Ge !== void 0, Z = B(() => {
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
      if (g) return /* @__PURE__ */ new Set([ue(g)]);
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
    g,
    p,
    ue,
    pe,
    X
  ]), [z, Y] = W(
    () => Z()
  ), Q = Se(() => {
    if (ae === "multiple") {
      if (Qe !== void 0) {
        const q = Qe;
        return q ? new Set(q.map((ee) => ue(ee))) : /* @__PURE__ */ new Set();
      }
      return z;
    } else {
      if (Ge !== void 0) {
        const q = Ge;
        return q ? /* @__PURE__ */ new Set([ue(q)]) : /* @__PURE__ */ new Set();
      }
      return z;
    }
  }, [
    ae,
    Qe,
    Ge,
    z,
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
          const ke = b ?? h;
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
          const ke = b ?? h;
          ke && ke({ item: q, selectedItem: q });
        } else {
          const ke = b ?? h;
          ke && ke({ item: q, selectedItem: q });
        }
    },
    [
      ue,
      ae,
      Q,
      bt,
      b,
      h,
      le,
      ge
    ]
  ), je = B(
    async (q) => {
      const ee = ue(q);
      if (!!q.disabled) return;
      const Ne = G.has(ee), ke = _ ?? x, Ce = N ?? w, Ke = pe(q), dt = re.get(ee) ?? Ke, Et = !(dt !== void 0 && dt.length > 0) && K != null;
      if (Ne) {
        Oe((ht) => {
          const Le = new Set(ht);
          return Le.delete(ee), Le;
        }), Ce?.({ item: q });
        return;
      }
      if (Et) {
        if (fe.has(ee)) return;
        Fe((ht) => {
          const Le = new Set(ht);
          return Le.add(ee), Le;
        });
        try {
          const Le = await K(q);
          Me((Tt) => {
            const Zt = new Map(Tt);
            return Zt.set(ee, Le), Zt;
          }), Oe((Tt) => {
            const Zt = new Set(Tt);
            return Zt.add(ee), Zt;
          }), ke?.({ item: q });
        } catch {
        } finally {
          Fe((ht) => {
            const Le = new Set(ht);
            return Le.delete(ee), Le;
          });
        }
        return;
      }
      Oe((ht) => {
        const Le = new Set(ht);
        return Le.add(ee), Le;
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
      x,
      N,
      w
    ]
  ), Je = Se(() => {
    const q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ue(Ke);
        q.has(Be) || q.set(Be, []), ee.set(Be, Ce), Ke.disabled && de.add(Be);
        const st = re.get(Be) ?? pe(Ke);
        st && st.length > 0 && (q.set(
          Be,
          st.map((Et) => ue(Et))
        ), Ne(st, Be));
      }
    };
    return Ne(X, null), { childrenOf: q, parentOf: ee, disabledKeys: de };
  }, [X, re, ue, pe]), et = B(
    (q) => {
      const ee = [], de = [...Je.childrenOf.get(q) ?? []];
      for (; de.length > 0; ) {
        const Ne = de.pop();
        ee.push(Ne), de.push(...Je.childrenOf.get(Ne) ?? []);
      }
      return ee;
    },
    [Je]
  ), [ot, Xt] = W(
    () => new Set(R ?? [])
  ), oe = E !== void 0 ? new Set(E) : ot, ze = B(
    (q) => {
      const ee = Je.disabledKeys;
      return et(q).filter((de) => !ee.has(de));
    },
    [et, Je]
  ), Nt = B(
    (q) => {
      if (oe.has(q)) return !0;
      if (!v || !j) return !1;
      const ee = ze(q);
      return ee.length > 0 && ee.every((de) => oe.has(de));
    },
    [oe, v, j, ze]
  ), Rt = B(
    (q) => {
      if (!v || !j || oe.has(q))
        return !1;
      const ee = ze(q);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => oe.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [oe, v, j, ze]
  ), xt = B(
    (q) => {
      if (!v || q.disabled) return;
      const ee = ue(q), de = new Set(oe);
      if (de.has(ee) || Nt(ee)) {
        if (de.delete(ee), j)
          for (const Ne of ze(ee)) de.delete(Ne);
      } else if (de.add(ee), j)
        for (const Ne of ze(ee)) de.add(Ne);
      E === void 0 && Xt(de), L?.([...de]);
    },
    [
      v,
      j,
      E,
      oe,
      ze,
      ue,
      Nt,
      L
    ]
  ), Ie = Se(() => {
    const q = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, Ke) => {
        const Be = ue(Ce), dt = xe(Ce), st = re.get(Be) ?? pe(Ce);
        let Et;
        re.has(Be) ? Et = re.get(Be).length > 0 : st !== void 0 ? Et = st.length > 0 : K ? Et = !0 : Et = !1;
        const ht = G.has(Be), Le = !!Ce.disabled, Tt = de.length, Zt = Ke + 1;
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
          disabled: Le
        }), Et && ht) {
          const hn = re.get(Be) ?? st;
          hn && hn.length > 0 && ee(hn, Ne + 1, Be);
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
  ), Ot = ne(""), ct = ne(null), V = ne(null);
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
        if (q.key === " " && v) {
          const ke = ge(de.key);
          ke && xt(ke);
          return;
        }
        Ee(de.item);
        return;
      }
      if (q.key.length === 1 && /^[a-zA-Z0-9]$/.test(q.key)) {
        q.preventDefault();
        const ke = (Ot.current + q.key).toLowerCase();
        Ot.current = ke, ct.current && clearTimeout(ct.current), ct.current = setTimeout(() => {
          Ot.current = "";
        }, 500);
        const Ce = ee >= 0 ? ee + 1 : 0, dt = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((st) => st.text.toLowerCase().startsWith(ke));
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
      v,
      xt
    ]
  ), Pt = B(() => {
    if (!qe && Ie.length > 0) {
      const q = Ie[0];
      q && vt(q.key);
    }
  }, [qe, Ie]), Xe = (q, ee, de) => /* @__PURE__ */ o("ul", { role: "group", className: Dt.group, children: q.map((Ne, ke) => {
    const Ce = ue(Ne), Ke = xe(Ne), Be = re.get(Ce) ?? pe(Ne);
    let dt;
    re.has(Ce) ? dt = re.get(Ce).length > 0 : Be !== void 0 ? dt = Be.length > 0 : K ? dt = !0 : dt = !1;
    const st = G.has(Ce), Et = Q.has(Ce), ht = !!Ne.disabled, Le = fe.has(Ce), Tt = qe === Ce, Zt = q.length, hn = ke + 1, Cn = me ? me(Ne) : Ke, Fn = v ? {
      checked: Nt(Ce),
      indeterminate: Rt(Ce)
    } : null;
    return /* @__PURE__ */ A("li", { role: "none", className: Dt.itemWrapper, children: [
      /* @__PURE__ */ A(
        "div",
        {
          role: "treeitem",
          "data-key": Ce,
          tabIndex: Tt ? 0 : -1,
          "aria-expanded": dt ? st : void 0,
          "aria-selected": Et,
          "aria-level": ee,
          "aria-setsize": Zt,
          "aria-posinset": hn,
          "aria-disabled": ht || void 0,
          "aria-busy": Le || void 0,
          className: [
            Dt.treeitem,
            Et ? Dt.selected : null,
            ht ? Dt.disabled : null,
            Tt ? Dt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            he(Ce), ht || Ee(Ne);
          },
          onFocus: () => vt(Ce),
          children: [
            v ? /* @__PURE__ */ o(
              Fk,
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
                  kn.stopPropagation(), he(Ce), je(Ne);
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
            /* @__PURE__ */ o("span", { className: Dt.label, children: Cn }),
            Le ? /* @__PURE__ */ o("span", { className: Dt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && st ? Le ? /* @__PURE__ */ o("div", { className: Dt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : re.has(Ce) && re.get(Ce).length > 0 ? Xe(
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
      className: [Dt.root, F].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: X.length === 0 ? /* @__PURE__ */ o("div", { className: Dt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const Hk = "_root_10fdq_1", Uk = "_panel_10fdq_8", Wk = "_header_10fdq_19", qk = "_listbox_10fdq_28", Kk = "_option_10fdq_42", Gk = "_disabled_10fdq_57", Vk = "_active_10fdq_66", Yk = "_selected_10fdq_70", Xk = "_empty_10fdq_86", Zk = "_controls_10fdq_93", Jk = "_reorder_10fdq_102", Qk = "_btn_10fdq_110", nt = {
  root: Hk,
  panel: Uk,
  header: Wk,
  listbox: qk,
  option: Kk,
  disabled: Gk,
  active: Vk,
  selected: Yk,
  empty: Xk,
  controls: Zk,
  reorder: Jk,
  btn: Qk
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ho(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function _O({
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
  KeyProperty: p,
  onMove: b,
  Move: h,
  ariaLabel: _,
  AriaLabel: x,
  className: N
}) {
  const w = g ?? p ?? "id", M = _ ?? x ?? "PickList", $ = e ?? t ?? a ?? i ?? l ?? d ?? [], O = n ?? r ?? c ?? s ?? [], [T, I] = W(() => [
    ...$
  ]), [D, C] = W(() => [
    ...O
  ]);
  be(() => {
    const z = e ?? t ?? a ?? i ?? l ?? d;
    z !== void 0 && I([...z]);
  }, [e, t, a, i, l, d]), be(() => {
    const z = n ?? r ?? c ?? s;
    z !== void 0 && C([...z]);
  }, [n, r, c, s]);
  const [k, v] = W(
    () => /* @__PURE__ */ new Set()
  ), [E, R] = W(
    () => /* @__PURE__ */ new Set()
  ), [L, j] = W(() => {
    const z = $.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), [F, X] = W(() => {
    const z = O.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), ie = Se(
    () => T.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [T]
  ), te = Se(
    () => D.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [D]
  );
  be(() => {
    if (L >= T.length) {
      const z = ie[ie.length - 1];
      j(z ?? 0);
    } else if (T.length > 0 && ie.length > 0 && !ie.includes(L)) {
      const z = ie[0];
      z !== void 0 && j(z);
    }
  }, [L, T.length, ie]), be(() => {
    if (F >= D.length) {
      const z = te[te.length - 1];
      X(z ?? 0);
    } else if (D.length > 0 && te.length > 0 && !te.includes(F)) {
      const z = te[0];
      z !== void 0 && X(z);
    }
  }, [F, D.length, te]), be(() => {
    v((z) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of z)
        T.some(
          (le) => It(le, w) === Q && !le.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [T, w]), be(() => {
    R((z) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of z)
        D.some(
          (le) => It(le, w) === Q && !le.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [D, w]);
  const we = B(
    (z) => {
      (u ?? f)?.(z);
    },
    [u, f]
  ), ae = B(
    (z) => {
      (y ?? m)?.(z);
    },
    [y, m]
  ), _e = B(
    (z) => {
      (b ?? h)?.(z);
    },
    [b, h]
  ), K = B(
    (z) => {
      const Y = T[z];
      if (!Y || Y.disabled) return;
      const Q = It(Y, w);
      v((ge) => {
        const le = new Set(ge);
        return le.has(Q) ? le.delete(Q) : le.add(Q), le;
      }), j(z);
    },
    [T, w]
  ), me = B(
    (z) => {
      const Y = D[z];
      if (!Y || Y.disabled) return;
      const Q = It(Y, w);
      R((ge) => {
        const le = new Set(ge);
        return le.has(Q) ? le.delete(Q) : le.add(Q), le;
      }), X(z);
    },
    [D, w]
  ), ue = B(() => {
    const z = [], Y = [];
    for (const Ee of T) {
      const je = It(Ee, w);
      k.has(je) && !Ee.disabled ? z.push(Ee) : Y.push(Ee);
    }
    if (z.length === 0) return;
    const Q = Y, ge = [...D, ...z];
    I(Q), C(ge), v(/* @__PURE__ */ new Set());
    const le = new Set(z.map((Ee) => It(Ee, w)));
    R(le), we(Q), ae(ge), _e({
      source: Q,
      target: ge,
      moved: z,
      direction: "toTarget"
    });
  }, [
    T,
    D,
    k,
    w,
    we,
    ae,
    _e
  ]), xe = B(() => {
    const z = [], Y = [];
    for (const Ee of D) {
      const je = It(Ee, w);
      E.has(je) && !Ee.disabled ? z.push(Ee) : Y.push(Ee);
    }
    if (z.length === 0) return;
    const Q = Y, ge = [...T, ...z];
    C(Q), I(ge), R(/* @__PURE__ */ new Set());
    const le = new Set(z.map((Ee) => It(Ee, w)));
    v(le), we(ge), ae(Q), _e({
      source: ge,
      target: Q,
      moved: z,
      direction: "toSource"
    });
  }, [
    T,
    D,
    E,
    w,
    we,
    ae,
    _e
  ]), pe = B(() => {
    const z = T.filter((ge) => !ge.disabled);
    if (z.length === 0) return;
    const Y = T.filter((ge) => !!ge.disabled), Q = [...D, ...z];
    I(Y), C(Q), v(/* @__PURE__ */ new Set()), we(Y), ae(Q), _e({
      source: Y,
      target: Q,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    T,
    D,
    w,
    we,
    ae,
    _e
  ]), Ae = B(() => {
    const z = D.filter((ge) => !ge.disabled);
    if (z.length === 0) return;
    const Y = D.filter((ge) => !!ge.disabled), Q = [...T, ...z];
    C(Y), I(Q), R(/* @__PURE__ */ new Set()), we(Q), ae(Y), _e({
      source: Q,
      target: Y,
      moved: z,
      direction: "allToSource"
    });
  }, [T, D, we, ae, _e]), G = B(() => {
    if (E.size === 0) return;
    const z = [...D], Y = E, Q = [];
    for (let le = 1; le < z.length; le++) {
      const Ee = z[le], je = z[le - 1];
      if (!Ee || !je) continue;
      const Je = It(Ee, w), et = It(je, w);
      Y.has(Je) && !Y.has(et) && !Ee.disabled && !je.disabled && (z[le - 1] = Ee, z[le] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    C(z), ae(z), _e({ source: T, target: z, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const le = z.findIndex(
        (Ee) => It(Ee, w) === ge
      );
      le >= 0 && X(le);
    }
  }, [
    D,
    E,
    w,
    T,
    ae,
    _e
  ]), Oe = B(() => {
    if (E.size === 0) return;
    const z = [...D], Y = E, Q = [];
    for (let le = z.length - 2; le >= 0; le--) {
      const Ee = z[le], je = z[le + 1];
      if (!Ee || !je) continue;
      const Je = It(Ee, w), et = It(je, w);
      Y.has(Je) && !Y.has(et) && !Ee.disabled && !je.disabled && (z[le] = je, z[le + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    C(z), ae(z), _e({ source: T, target: z, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const le = z.findIndex(
        (Ee) => It(Ee, w) === ge
      );
      le >= 0 && X(le);
    }
  }, [
    D,
    E,
    w,
    T,
    ae,
    _e
  ]), re = k.size > 0, Me = E.size > 0, fe = ne(""), Fe = ne(
    null
  ), Ge = ne(""), Qe = ne(
    null
  ), Mt = B(
    (z) => {
      if (T.length === 0) return;
      const Y = ie;
      if (Y.length === 0) return;
      const Q = Y.includes(L) ? L : Y[0] ?? 0;
      let ge = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), ge = Y[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), K(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const le = (fe.current + z.key).toLowerCase();
        fe.current = le, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Je = Ee.slice(je).find(
          (et) => ho(T[et]).toLowerCase().startsWith(le)
        );
        Je != null && j(Je);
        return;
      }
      ge >= 0 && j(ge);
    },
    [T, ie, L, K]
  ), it = B(
    (z) => {
      if (D.length === 0) return;
      const Y = te;
      if (Y.length === 0) return;
      const Q = Y.includes(F) ? F : Y[0] ?? 0;
      let ge = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const le = Y.indexOf(Q);
        ge = Y[(le - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), ge = Y[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), me(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const le = (Ge.current + z.key).toLowerCase();
        Ge.current = le, Qe.current && clearTimeout(Qe.current), Qe.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Je = Ee.slice(je).find(
          (et) => ho(D[et]).toLowerCase().startsWith(le)
        );
        Je != null && X(Je);
        return;
      }
      ge >= 0 && X(ge);
    },
    [D, te, F, me]
  ), bt = ne(null), Z = ne(null);
  return /* @__PURE__ */ A(
    "div",
    {
      className: [nt.root, N].filter(Boolean).join(" "),
      "aria-label": M,
      children: [
        /* @__PURE__ */ A("div", { className: nt.panel, children: [
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
              onKeyDown: Mt,
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
              ) : T.map((z, Y) => {
                const Q = It(z, w), ge = k.has(Q), le = Y === L, Ee = !!z.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": le || void 0,
                    className: [
                      nt.option,
                      ge ? nt.selected : null,
                      le ? nt.active : null,
                      Ee ? nt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => K(Y),
                    children: ho(z)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ A("div", { className: nt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
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
              className: nt.btn,
              "aria-label": "Move all to target",
              "aria-disabled": T.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: T.filter((z) => !z.disabled).length === 0,
              onClick: pe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move all",
              "aria-disabled": T.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: T.filter((z) => !z.disabled).length === 0,
              onClick: pe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Me || void 0,
              disabled: !Me,
              onClick: xe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: nt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: D.filter((z) => !z.disabled).length === 0,
              onClick: Ae,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ A("div", { className: nt.panel, children: [
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
              ) : D.map((z, Y) => {
                const Q = It(z, w), ge = E.has(Q), le = Y === F, Ee = !!z.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": le || void 0,
                    className: [
                      nt.option,
                      ge ? nt.selected : null,
                      le ? nt.active : null,
                      Ee ? nt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => me(Y),
                    children: ho(z)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ A("div", { className: nt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: nt.btn,
                "aria-label": "Move up",
                "aria-disabled": !Me || void 0,
                disabled: !Me,
                onClick: G,
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: nt.btn,
                "aria-label": "Move down",
                "aria-disabled": !Me || void 0,
                disabled: !Me,
                onClick: Oe,
                children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const eN = "_root_1qxsp_1", tN = "_header_1qxsp_8", nN = "_title_1qxsp_15", rN = "_navBtn_1qxsp_20", oN = "_resources_1qxsp_39", sN = "_resource_1qxsp_39", aN = "_grid_1qxsp_50", lN = "_timeCol_1qxsp_55", iN = "_timeCell_1qxsp_61", cN = "_dayCol_1qxsp_66", dN = "_dayHeader_1qxsp_73", uN = "_slot_1qxsp_81", fN = "_event_1qxsp_91", Gt = {
  root: eN,
  header: tN,
  title: nN,
  navBtn: rN,
  resources: oN,
  resource: sN,
  grid: aN,
  timeCol: lN,
  timeCell: iN,
  dayCol: cN,
  dayHeader: dN,
  slot: uN,
  event: fN
};
function ba(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function pO({
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
  ), f = n ?? d, y = (p) => {
    n || u(p), r?.(p);
  }, m = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (p, b) => {
    const h = new Date(f);
    return h.setDate(f.getDate() - f.getDay() + b), h;
  }) : Array.from({ length: 30 }, (p, b) => {
    const h = new Date(f);
    return h.setDate(1 + b), h;
  }), g = Array.from({ length: 12 }, (p, b) => 8 + b);
  return /* @__PURE__ */ A(
    "div",
    {
      className: [Gt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ A("div", { className: Gt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() - 7), y(p);
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
                p.setDate(p.getDate() + 7), y(p);
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
        /* @__PURE__ */ A("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Gt.timeCol, role: "presentation", children: g.map((p) => /* @__PURE__ */ A("div", { className: Gt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          m.map((p) => /* @__PURE__ */ A(
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
                g.map((b) => /* @__PURE__ */ o(
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
const _N = "_root_dj5ne_1", pN = "_header_dj5ne_8", hN = "_headerCell_dj5ne_15", mN = "_timeline_dj5ne_21", gN = "_row_dj5ne_26", yN = "_taskName_dj5ne_32", bN = "_timelineCell_dj5ne_37", xN = "_bar_dj5ne_43", vN = "_progress_dj5ne_56", wN = "_dep_dj5ne_61", Tn = {
  root: _N,
  header: pN,
  headerCell: hN,
  timeline: mN,
  row: gN,
  taskName: yN,
  timelineCell: bN,
  bar: xN,
  progress: vN,
  dep: wN
};
function hO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: a
}) {
  const [i, c] = W(null);
  return /* @__PURE__ */ A(
    "div",
    {
      className: [Tn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ A("div", { className: Tn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Tn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ A("div", { className: Tn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ A(
          "div",
          {
            className: Tn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Tn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ A("div", { className: Tn.timelineCell, role: "gridcell", children: [
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
const kN = "_root_4b64f_1", NN = "_fields_4b64f_6", $N = "_chip_4b64f_13", SN = "_table_4b64f_35", ON = "_totalRow_4b64f_55", EN = "_total_4b64f_55", br = {
  root: kN,
  fields: NN,
  chip: $N,
  table: SN,
  totalRow: ON,
  total: EN
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
function mO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, u = (b, h, _) => {
    const x = b === "row" ? s.filter((M) => M.property !== h) : s, N = b === "col" ? l.filter((M) => M.property !== h) : l, w = b === "agg" ? d.filter((M) => !(M.property === h && M.aggregate === _)) : d;
    a?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: w
    });
  }, f = (b, h) => h.map((_) => String(b[_.property])).join(""), y = [
    ...new Set(s.length ? e.map((b) => f(b, s)) : [""])
  ].sort(), m = [
    ...new Set(l.length ? e.map((b) => f(b, l)) : [""])
  ].sort(), g = (b, h, _) => {
    const x = e.filter(
      (w) => f(w, s) === b && f(w, l) === h
    ), N = x.map((w) => Number(w[_.property])).filter((w) => !Number.isNaN(w));
    return !N.length && _.aggregate !== "Count" ? 0 : mo[_.aggregate](
      _.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, p = (b, h, _, x) => /* @__PURE__ */ A(
    "button",
    {
      type: "button",
      className: br.chip,
      "aria-label": `Remove ${b} field ${_}`,
      onClick: () => u(b, h, x),
      children: [
        _,
        x ? ` (${x})` : ""
      ]
    },
    `${b}-${_}-${x ?? ""}`
  );
  return /* @__PURE__ */ A("div", { className: [br.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ A("div", { className: br.fields, children: [
      s.map((b) => p("row", b.property, b.title ?? b.property)),
      l.map((b) => p("col", b.property, b.title ?? b.property)),
      d.map(
        (b) => p("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ A("table", { className: br.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ A("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        m.map((b) => /* @__PURE__ */ o("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ A("tbody", { children: [
        y.map((b) => /* @__PURE__ */ A("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: b || "—" }),
          m.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: Hr(
                g(
                  b,
                  h,
                  d[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: d.length ? Hr(g(b, h, d[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: br.total, children: d.length ? Hr(
            mo[d[0].aggregate](
              m.flatMap(
                (h) => e.filter(
                  (_) => f(_, s) === b && f(_, l) === h
                ).map((_) => Number(_[d[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ A("tr", { className: br.totalRow, children: [
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
const TN = "_root_1r7co_1", CN = "_reverse_1r7co_10", MN = "_item_1r7co_14", AN = "_marker_1r7co_35", DN = "_body_1r7co_46", IN = "_label_1r7co_50", LN = "_content_1r7co_56", rr = {
  root: TN,
  reverse: CN,
  item: MN,
  marker: AN,
  body: DN,
  label: IN,
  content: LN
};
function gO({
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
      children: a.map((i, c) => /* @__PURE__ */ A("li", { className: rr.item, children: [
        /* @__PURE__ */ o("span", { className: rr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ A("div", { className: rr.body, children: [
          /* @__PURE__ */ o("div", { className: rr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: rr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const zN = "_root_rm4d8_1", RN = "_header_rm4d8_13", PN = "_headCell_rm4d8_22", jN = "_row_rm4d8_32", BN = "_cell_rm4d8_37", Ur = {
  root: zN,
  header: RN,
  headCell: PN,
  row: jN,
  cell: BN
};
function yO({
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
  ), [d, u] = W(0), f = ne(/* @__PURE__ */ new Set()), y = Math.ceil(n / t), m = Math.max(0, Math.floor(d / t) - 3), g = Math.min(e, m + y + 6), p = B(
    (h, _) => {
      let x = !1;
      for (let N = h; N < _; N++)
        !s.has(N) && !f.current.has(N) && (x = !0);
      if (x) {
        for (let N = h; N < _; N++) f.current.add(N);
        r({ skip: h, top: _ }).then((N) => {
          l((w) => {
            const M = new Map(w);
            return N.forEach(($, O) => M.set(h + O, $)), M;
          });
          for (let w = h; w < _; w++) f.current.delete(w);
        });
      }
    },
    [s, r]
  );
  be(() => {
    p(m, g);
  }, [m, g]);
  const b = [];
  for (let h = m; h < g; h++) {
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
  return /* @__PURE__ */ A(
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
            style: { height: Math.max(0, (e - g) * t) },
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
      const y = this.addEccAndInterleave(d);
      if (this.drawCodewords(y), u == -1) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const p = this.getPenaltyScore();
          p < m && (u = g, m = p), this.applyMask(g);
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
        const _ = t.getNumDataCodewords(m, l) * 8, x = i.getTotalBits(s, m);
        if (x <= _) {
          g = x;
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
        y && g <= t.getNumDataCodewords(m, _) * 8 && (l = _);
      let p = [];
      for (const _ of s) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(m), p);
        for (const x of _.getData()) p.push(x);
      }
      a(p.length == g);
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
      let p = [];
      const b = t.reedSolomonComputeDivisor(f);
      for (let _ = 0, x = 0; _ < u; _++) {
        let N = s.slice(
          x,
          x + g - f + (_ < m ? 0 : 1)
        );
        x += N.length;
        const w = t.reedSolomonComputeRemainder(N, b);
        _ < m && N.push(0), p.push(N.concat(w));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((x, N) => {
          (_ != g - f || N >= m) && h.push(x[_]);
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
        for (let p = 0; p < this.size; p++)
          this.modules[f][p] == y ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), y || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), y = this.modules[f][p], m = 1);
        s += this.finderPenaltyTerminateAndCount(y, m, g) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][f] == y ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), y || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), y = this.modules[p][f], m = 1);
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
const FN = "_root_1leml_1", HN = {
  root: FN
}, UN = {
  low: wn.QrCode.Ecc.LOW,
  medium: wn.QrCode.Ecc.MEDIUM,
  quartile: wn.QrCode.Ecc.QUARTILE,
  high: wn.QrCode.Ecc.HIGH
};
function bO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = ne(null), u = cs("(prefers-color-scheme: dark)"), [f, y] = W(null);
  be(() => {
    const N = document.documentElement;
    y(N.dataset.theme ?? null);
    const w = new MutationObserver(() => {
      y(N.dataset.theme ?? null);
    });
    return w.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => w.disconnect();
  }, []);
  const m = Se(() => {
    try {
      return wn.QrCode.encodeText(e, UN[r]);
    } catch {
      return null;
    }
  }, [e, r]), g = ne(null);
  be(() => {
    if (m !== null) {
      g.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (g.current?.value !== e || g.current?.onError !== s) && (g.current = { value: e, onError: s }, s?.(N));
  }, [m, e, s]);
  const p = Math.max(0, Math.floor(a)), b = [HN.root, c].filter(Boolean).join(" ");
  if (be(() => {
    if (n !== "canvas" || m === null) return;
    const N = d.current, w = N?.getContext("2d");
    if (!N || !w) return;
    const M = getComputedStyle(N), $ = M.getPropertyValue("--dx-text-color").trim() || "#000", O = M.getPropertyValue("--dx-surface-color").trim() || "#fff";
    WN(w, m, t, p, $, O);
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
  return /* @__PURE__ */ A(
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
function WN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const qN = "_root_1v9la_1", KN = "_value_1v9la_9", xa = {
  root: qN,
  value: KN
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
], wa = 104, GN = 106;
function VN(e) {
  const t = [wa];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = wa;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, GN), t;
}
function xO({
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
    for (const u of VN(e)) {
      const f = va[u] ?? va[0];
      for (let y = 0; y < f.length; y++) {
        const m = Number(f[y]);
        y % 2 === 0 && l.push({ x: d, w: m }), d += m;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ A("span", { className: [xa.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ A(
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
const YN = "_root_16i43_1", XN = "_svg_16i43_10", ZN = "_gridline_16i43_15", JN = "_tickLabel_16i43_21", QN = "_axisTitle_16i43_27", e$ = "_dataLabel_16i43_34", t$ = "_gaugeValue_16i43_40", n$ = "_legend_16i43_47", r$ = "_legendItem_16i43_55", o$ = "_swatch_16i43_63", s$ = "_tooltip_16i43_70", a$ = "_visuallyHidden_16i43_84", Ze = {
  root: YN,
  svg: XN,
  gridline: ZN,
  tickLabel: JN,
  axisTitle: QN,
  dataLabel: e$,
  gaugeValue: t$,
  legend: n$,
  legendItem: r$,
  swatch: o$,
  tooltip: s$,
  visuallyHidden: a$
}, ka = [
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
]), l$ = /* @__PURE__ */ new Set([...Ja, "heatmap"]);
function i$(e, t, n) {
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
function cn(e, t, n) {
  return /* @__PURE__ */ A(
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
function Qa(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Yr(e, t) {
  return e.percent ? `${t}%` : String(t);
}
const c$ = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function d$(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && c$.has(a.type)) return a;
  }
  return null;
}
function u$(e, t, n, r) {
  const a = d$(e, t, n);
  if (!a) return null;
  const i = rs(a).filter((u) => !Number.isNaN(u.val));
  if (i.length === 0) return null;
  const c = i.map((u) => u.cat);
  let s;
  if (t.type === "trendline") {
    const u = i.length, f = i.map((_, x) => x), y = i.map((_) => _.val), m = f.reduce((_, x) => _ + x, 0) / u, g = y.reduce((_, x) => _ + x, 0) / u;
    let p = 0, b = 0;
    for (let _ = 0; _ < u; _++)
      p += (f[_] - m) * (y[_] - g), b += (f[_] - m) * (f[_] - m);
    const h = b === 0 ? 0 : p / b;
    s = c.map((_, x) => ({
      cat: _,
      val: g + h * (x - m)
    }));
  } else {
    const u = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((f, y) => {
      if (y + 1 < u) return null;
      const m = i.slice(y + 1 - u, y + 1);
      return {
        cat: f.cat,
        val: m.reduce((g, p) => g + p.val, 0) / u
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
  return el(e, l, n, d, r);
}
function f$(e, t, n) {
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
function _$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s } = e, l = i.l + c / 2, d = i.t + s / 2, u = Math.min(c, s) / 3, f = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, y = r.reduce((g, p) => g + (Number(p.val) || 0), 0);
  let m = -90;
  return cn(
    n,
    t,
    r.map((g, p) => {
      const b = y ? g.val / y * 360 : 0, h = m, _ = m + b;
      m = _;
      const x = b > 180 ? 1 : 0, N = l + u * Math.cos(Ut(h)), w = d + u * Math.sin(Ut(h)), M = l + u * Math.cos(Ut(_)), $ = d + u * Math.sin(Ut(_)), O = l + f * Math.cos(Ut(_)), T = d + f * Math.sin(Ut(_)), I = l + f * Math.cos(Ut(h)), D = d + f * Math.sin(Ut(h)), C = f ? `M ${N} ${w} A ${u} ${u} 0 ${x} 1 ${M} ${$} L ${O} ${T} A ${f} ${f} 0 ${x} 0 ${I} ${D} Z` : `M ${l} ${d} L ${N} ${w} A ${u} ${u} 0 ${x} 1 ${M} ${$} Z`, k = (h + _) / 2, v = l + (u + 12) * Math.cos(Ut(k)), E = d + (u + 12) * Math.sin(Ut(k));
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: C,
            fill: a,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, E, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: v,
            y: E,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: g.val
          }
        )
      ] }, p);
    })
  );
}
function p$(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: u } = e, f = new Map(u.map((y, m) => [y, m]));
  return cn(
    n,
    t,
    r.map((y, m) => {
      const g = f.get(y.cat) ?? 0, p = Number(r[m].cat), b = Number.isNaN(p) ? l(g) : i.l + (p - s.min) / (s.max - s.min || 1) * c, h = d(y.val), _ = t.type === "bubble" && y.size !== void 0 ? Math.max(4, Math.min(12, y.size / 10)) : 4;
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        $o(b, h, a, t, _),
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
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, u = new Map(l.map((g, p) => [g, p])), f = (g) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let b = 0; b < n; b++) {
      const h = d[b];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (x) => String(x[h.categoryProperty] ?? "") === g
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, y = r.map((g, p) => {
    const b = u.get(g.cat) ?? 0, h = f(g.cat);
    return `${p === 0 ? "M" : "L"} ${c(b)} ${s(h + g.val)}`;
  }).join(" "), m = r.map((g, p) => {
    const b = u.get(g.cat) ?? 0, h = f(g.cat);
    return `${p === 0 ? "M" : "L"} ${c(b)} ${s(h)}`;
  }).join(" ");
  return cn(
    n,
    t,
    /* @__PURE__ */ A(rt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${y} L ${c(r.length - 1)} ${s(f(r[r.length - 1].cat))} L ${c(0)} ${s(f(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      f$(e, t, r),
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
      r.map((g, p) => {
        const b = u.get(g.cat) ?? 0, h = f(g.cat), _ = c(b), x = s(h + g.val);
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
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
                `${t.title ?? g.cat}: ${Yr(e, g.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
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
              children: Yr(e, g.val)
            }
          )
        ] }, p);
      })
    ] })
  );
}
function h$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: u, categories: f, series: y } = e, m = new Map(f.map((p, b) => [p, b])), g = t.type === "bar";
  return cn(
    n,
    t,
    r.map((p, b) => {
      const h = m.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let v = 0; v < n; v++) {
          const E = y[v];
          if (E?.stack !== t.stack) continue;
          const R = E.data.find(
            (L) => String(L[E.categoryProperty] ?? "") === p.cat
          );
          R && (_ += Number(R[E.valueProperty]) || 0);
        }
      const x = _ + p.val, N = typeof p.min == "number" && !Number.isNaN(p.min) && typeof p.max == "number" && !Number.isNaN(p.max), w = y.filter(
        (v) => !v.stack || v.stack === t.stack
      ).length, M = c / Math.max(1, f.length), $ = g ? 18 : Math.max(12, M / (t.stack ? 1 : y.length) - 4), O = g ? i.l + _ / (l.max - l.min || 1) * c : d(h) - $ / 2 + (t.stack ? 0 : n % w * $), T = g ? i.t + h * s / Math.max(1, f.length) + 4 : u(N ? _ + p.max : x), I = g ? N ? (p.max - p.min) / (l.max - l.min || 1) * c : p.val / (l.max - l.min || 1) * c : $ - 4, D = g ? 16 : N ? u(_ + p.min) - u(_ + p.max) : u(_) - u(x), C = g ? i.l + (_ + (N ? p.min : 0)) / (l.max - l.min || 1) * c : O, k = g ? i.t + h * s / Math.max(1, f.length) + 4 : T;
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: C,
            y: k,
            width: g ? I : $ - 4,
            height: D,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              C + (g ? I : $) / 2,
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
            x: C + (g ? I : $) / 2,
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
function m$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: u, hideTip: f } = e, y = i.l + c / 2, m = i.t + s * 0.78, g = Math.min(c, s) * 0.36, p = 135, b = 270, h = r.reduce((M, $) => M + (Number($.val) || 0), 0), _ = l.max - l.min || 1, x = Math.min(1, Math.max(0, (h - l.min) / _)), N = (M, $) => {
    const [O, T] = [
      y + g * Math.cos(Ut(M)),
      m + g * Math.sin(Ut(M))
    ], [I, D] = [
      y + g * Math.cos(Ut($)),
      m + g * Math.sin(Ut($))
    ], C = $ - M > 180 ? 1 : 0;
    return `M ${O} ${T} A ${g} ${g} 0 ${C} 1 ${I} ${D}`;
  }, w = Number(h.toFixed(2));
  return cn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ A("g", { role: "listitem", children: [
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
      /* @__PURE__ */ o("text", { x: y, y: m - 4, textAnchor: "middle", className: Ze.gaugeValue, children: w }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && u(y, m - g, `${t.title ?? "Value"}: ${w}`),
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
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (f) => Ut(-90 + 360 * f / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (f, y) => {
    const m = d(f);
    return [
      i + s * y * Math.cos(m),
      c + s * y * Math.sin(m)
    ];
  } };
}
function g$(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = _s(e);
  return /* @__PURE__ */ A("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
function y$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: u, radius: f, angleFor: y, vertexFor: m } = _s(e), g = e.scale.max || 1, p = (h) => r.find((_) => _.cat === h)?.val ?? 0, b = i.map((h, _) => {
    const x = Math.min(1, Math.max(0, p(h) / g)), [N, w] = m(_, x);
    return `${N},${w}`;
  }).join(" ");
  return cn(
    n,
    t,
    /* @__PURE__ */ A(rt, { children: [
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
        const x = Math.min(1, Math.max(0, p(h) / g)), [N, w] = m(_, x), [M, $] = m(_, 1);
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
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
              onMouseEnter: () => c && s(M, $, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const O = r.find((T) => T.cat === h);
                O && e.handleClick(t, O.cat, O.val, O.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (f + 14) * Math.cos(y(_)),
              y: u + (f + 14) * Math.sin(y(_)) + 4,
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
function b$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, y = Math.max(1, ...f.map((p) => Number(p.val) || 0)), m = s / Math.max(1, f.length), g = i.l + c / 2;
  return cn(
    n,
    t,
    f.map((p, b) => {
      const _ = Math.max(0, Number(p.val) || 0) / y * c, x = f[b + 1], N = x ? Math.max(0, Number(x.val) || 0) / y * c : _ * 0.7, w = i.t + b * m + 2, M = Math.max(4, m - 6), $ = 1 - b * (0.45 / Math.max(1, f.length));
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - _ / 2} ${w} L ${g + _ / 2} ${w} L ${g + N / 2} ${w + M} L ${g - N / 2} ${w + M} Z`,
            fill: a,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, w, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ A(
          "text",
          {
            x: g,
            y: w + M / 2 + 4,
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
function x$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: u, hideTip: f } = e, y = [];
  t.data.forEach((x) => {
    const N = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    y.includes(N) || y.push(N);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), g = m.length ? Math.min(...m) : 0, p = m.length ? Math.max(...m) : 1, b = c / Math.max(1, l.length), h = s / Math.max(1, y.length), _ = (x) => p === g ? 0.6 : 0.15 + 0.85 * ((x - g) / (p - g));
  return cn(
    n,
    t,
    /* @__PURE__ */ A(rt, { children: [
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
        const w = t.data[N], M = l.indexOf(x.cat), $ = y.indexOf(
          t.rowProperty && w ? String(w[t.rowProperty] ?? "") : "All"
        );
        if (M < 0 || $ < 0) return null;
        const O = i.l + M * b, T = i.t + $ * h;
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: O + 1,
              y: T + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, h - 2),
              fill: a,
              fillOpacity: _(x.val),
              onMouseEnter: () => d && u(O + b / 2, T, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: O + b / 2,
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
function v$(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((m, g) => [m, g])), d = e.plotW / Math.max(1, s.length), u = Math.max(8, Math.min(28, d / 2 - 4)), f = t.upColor ?? a, y = t.downColor ?? "var(--dx-danger-color)";
  return cn(
    n,
    t,
    r.map((m, g) => {
      const p = l.get(m.cat) ?? 0, b = i(p), h = m.close ?? m.val, _ = typeof m.open == "number" && !Number.isNaN(m.open) && typeof m.high == "number" && !Number.isNaN(m.high) && typeof m.low == "number" && !Number.isNaN(m.low) && typeof h == "number" && !Number.isNaN(h), x = _ && h >= m.open, N = `${t.title ?? m.cat}: O ${m.open ?? "–"} H ${m.high ?? "–"} L ${m.low ?? "–"} C ${h}`;
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        _ && t.type === "candlestick" && /* @__PURE__ */ A(rt, { children: [
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
        _ && t.type === "ohlc" && /* @__PURE__ */ A(rt, { children: [
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
      ] }, g);
    })
  );
}
function w$(e, t, n, r, a) {
  const i = e.reduce((g, p) => g + Math.max(0, p.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((g, p) => ({ ...g, i: p }));
  let d = t, u = n, f = r, y = a;
  const m = (g, p) => {
    const b = g.reduce((x, N) => x + Math.max(0, N.val), 0) * c;
    if (b <= 0) return Number.POSITIVE_INFINITY;
    const h = Math.max(...g.map((x) => Math.max(0, x.val))) * c, _ = Math.min(...g.map((x) => Math.max(0, x.val))) * c;
    return Math.max(
      p * p * h / (b * b),
      b * b / (p * p * (_ || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const g = Math.min(f, y), p = [];
    let b = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const _ = [...p, l[0]], x = m(_, g);
      if (x <= b)
        b = x, p.push(l.shift());
      else break;
    }
    p.length === 0 && p.push(l.shift());
    const h = p.reduce((_, x) => _ + Math.max(0, x.val), 0) * c;
    if (f >= y) {
      const _ = h / y;
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
      u += _, y -= _;
    }
  }
  return s;
}
function tl(e, t, n, r, a, i, c, s, l, d, u) {
  const f = e.colorFor, y = s.map((p) => ({
    cat: String(p[t.categoryProperty] ?? ""),
    val: Number(p[t.valueProperty]),
    item: p
  })), m = w$(y, r, a, i, c), g = t.childrenProperty ?? "children";
  y.forEach((p, b) => {
    const h = m[b], _ = s[b]?.[g], x = Array.isArray(_) ? _ : [];
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
      ...p,
      color: f(n + N, t),
      x: h.x,
      y: h.y,
      w: h.w,
      h: h.h
    });
  });
}
function k$(e, t, n, r, a) {
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
  ), cn(
    n,
    t,
    y.map((m, g) => /* @__PURE__ */ A("g", { role: "listitem", children: [
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
function N$(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: u } = e, f = r, y = Math.max(1, ...f.map((p) => Math.max(0, p.val))), m = s / Math.max(1, f.length), g = i.l + c / 2;
  return cn(
    n,
    t,
    f.map((p, b) => {
      const _ = Math.max(0, p.val) / y * c, x = f[b + 1], N = x ? Math.max(0, x.val) / y * c : _, w = i.t + b * m + 2, M = Math.max(4, m - 6);
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - _ / 2} ${w} L ${g + _ / 2} ${w} L ${g + N / 2} ${w + M} L ${g - N / 2} ${w + M} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, w, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ A(
          "text",
          {
            x: g,
            y: w + M / 2 + 4,
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
function $$(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: u } = _s(e), f = (g) => {
    let p = 0;
    for (const b of d)
      if (b.type === "spider") {
        for (const h of b.data)
          if (String(h[b.categoryProperty] ?? "") === g) {
            const _ = Number(h[b.valueProperty]);
            Number.isNaN(_) || (p = Math.max(p, _));
          }
      }
    return p || 1;
  }, y = (g) => r.find((p) => p.cat === g)?.val ?? 0, m = i.map((g, p) => {
    const b = Math.min(1, Math.max(0, y(g) / f(g))), [h, _] = u(p, b);
    return `${h},${_}`;
  }).join(" ");
  return cn(
    n,
    t,
    /* @__PURE__ */ A(rt, { children: [
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
      i.map((g, p) => {
        const b = Math.min(1, Math.max(0, y(g) / f(g))), [h, _] = u(p, b), [x, N] = u(p, 1);
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
          $o(h, _, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: h,
              cy: _,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(x, N, `${t.title ?? g}: ${y(g)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const w = r.find((M) => M.cat === g);
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
function S$(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, c = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((v) => ({
    source: String(v[c] ?? ""),
    target: String(v[s] ?? ""),
    value: Number(v[t.valueProperty]),
    item: v
  })).filter((v) => v.source && v.target && v.source !== v.target && v.value > 0), d = [];
  for (const v of l)
    d.includes(v.source) || d.push(v.source), d.includes(v.target) || d.push(v.target);
  const u = /* @__PURE__ */ new Map();
  for (const v of l)
    u.has(v.target) || u.set(v.target, []), u.get(v.target).push(v.source);
  const f = /* @__PURE__ */ new Map(), y = (v, E) => {
    if (f.has(v)) return f.get(v);
    if (E.has(v)) return 0;
    E.add(v);
    const R = u.get(v) ?? [], L = R.length === 0 ? 0 : 1 + Math.max(...R.map((j) => y(j, E)));
    return E.delete(v), f.set(v, L), L;
  }, m = /* @__PURE__ */ new Map();
  for (const v of d) m.set(v, y(v, /* @__PURE__ */ new Set()));
  const g = Math.max(0, ...m.values()), p = Math.max(12, Math.min(28, a / Math.max(1, (g + 1) * 8))), b = 10, h = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const v of l)
    _.set(v.source, (_.get(v.source) ?? 0) + v.value), h.set(v.target, (h.get(v.target) ?? 0) + v.value);
  const x = (v) => Math.max(h.get(v) ?? 0, _.get(v) ?? 0), N = /* @__PURE__ */ new Map();
  for (const v of d) {
    const E = m.get(v);
    N.set(E, (N.get(E) ?? 0) + x(v));
  }
  const w = Math.max(1, ...N.values()), M = (i - b * Math.max(0, d.length - 1)) / w, $ = (v) => g === 0 ? r.l : r.l + v / g * (a - p), O = [], T = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  for (const v of d) {
    const E = m.get(v);
    I.has(E) || I.set(E, []), I.get(E).push(v);
  }
  for (const [v, E] of [...I.entries()].sort((R, L) => R[0] - L[0])) {
    let R = r.t;
    for (const L of E) {
      const j = Math.max(4, x(L) * M), F = {
        id: L,
        depth: v,
        total: x(L),
        x: $(v),
        w: p,
        y: R,
        h: j,
        color: e.colorFor(n + O.length, t)
      };
      O.push(F), T.set(L, F), R += j + b;
    }
  }
  const D = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), k = [];
  for (const v of l) {
    const E = T.get(v.source), R = T.get(v.target), L = Math.max(1, v.value * M), j = E.y + (D.get(v.source) ?? 0), F = R.y + (C.get(v.target) ?? 0);
    D.set(v.source, (D.get(v.source) ?? 0) + L), C.set(v.target, (C.get(v.target) ?? 0) + L), k.push({ source: E, target: R, value: v.value, y0: j, y1: F, h: L });
  }
  return { nodes: O, links: k };
}
function O$(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function E$(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: c, hideTip: s } = e, { nodes: l, links: d } = S$(e, t, n);
  return cn(
    n,
    t,
    /* @__PURE__ */ A(rt, { children: [
      d.map((u, f) => /* @__PURE__ */ o(
        "path",
        {
          d: O$(u),
          fill: u.source.color,
          fillOpacity: 0.45,
          stroke: "none",
          onMouseEnter: () => i && c(
            (u.source.x + u.source.w + u.target.x) / 2,
            (u.y0 + u.y1) / 2,
            `${u.source.id} → ${u.target.id}: ${u.value}`
          ),
          onMouseLeave: () => s(),
          onClick: () => e.handleClick(t, `${u.source.id} → ${u.target.id}`, u.value, {
            source: u.source.id,
            target: u.target.id,
            value: u.value
          }),
          style: { cursor: "pointer" }
        },
        `link-${f}`
      )),
      l.map((u) => /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: u.x,
            y: u.y,
            width: u.w,
            height: u.h,
            fill: u.color,
            onMouseEnter: () => i && c(
              u.x + u.w / 2,
              u.y,
              `${u.id}: ${u.total}`
            ),
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
function T$(e, t, n) {
  const r = rs(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return _$(e, t, n, r, a);
    case "scatter":
    case "bubble":
      return p$(e, t, n, r, a);
    case "line":
    case "area":
      return el(e, t, n, r, a);
    case "gauge":
      return m$(e, t, n, r, a);
    case "radar":
      return y$(e, t, n, r, a);
    case "funnel":
      return b$(e, t, n, r, a);
    case "heatmap":
      return x$(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return v$(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return u$(e, t, n, a);
    case "treemap":
      return k$(e, t, n);
    case "pyramid":
      return N$(e, t, n, r, a);
    case "spider":
      return $$(e, t, n, r, a);
    case "sankey":
      return E$(e, t, n);
    default:
      return h$(e, t, n, r, a);
  }
}
function vO({
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
  ), m = Se(() => {
    const C = /* @__PURE__ */ new Set();
    for (const k of e)
      for (const v of k.data) C.add(String(v[k.categoryProperty] ?? ""));
    return [...C];
  }, [e]), g = Se(() => {
    if (!c) return e;
    const C = /* @__PURE__ */ new Map();
    for (const k of e)
      if (k.stack)
        for (const v of k.data) {
          const E = `${k.stack}\0${String(v[k.categoryProperty] ?? "")}`, R = Number(v[k.valueProperty]);
          Number.isNaN(R) || C.set(E, (C.get(E) ?? 0) + R);
        }
    return e.map((k) => k.stack ? {
      ...k,
      data: k.data.map((v) => {
        const E = `${k.stack}\0${String(v[k.categoryProperty] ?? "")}`, R = C.get(E) ?? 0, L = Number(v[k.valueProperty]);
        return {
          ...v,
          [k.valueProperty]: R > 0 && !Number.isNaN(L) ? L / R * 100 : 0
        };
      })
    } : k);
  }, [e, c]), p = Se(() => {
    const C = g.flatMap(
      (v) => v.data.flatMap((E) => [
        Number(E[v.valueProperty]),
        ...v.openProperty ? [Number(E[v.openProperty])] : [],
        ...v.highProperty ? [Number(E[v.highProperty])] : [],
        ...v.lowProperty ? [Number(E[v.lowProperty])] : [],
        ...v.closeProperty ? [Number(E[v.closeProperty])] : []
      ])
    ).filter((v) => !Number.isNaN(v)), k = /* @__PURE__ */ new Map();
    for (const v of g) {
      if (!v.stack) continue;
      let E = k.get(v.stack);
      E || k.set(v.stack, E = /* @__PURE__ */ new Map());
      for (const R of v.data) {
        const L = String(R[v.categoryProperty] ?? ""), j = Number(R[v.valueProperty]);
        Number.isNaN(j) || E.set(L, (E.get(L) ?? 0) + j);
      }
    }
    for (const v of k.values()) C.push(...v.values());
    return C;
  }, [g]), b = r?.min ?? (p.length ? Math.min(0, ...p) : 0), h = r?.max ?? (p.length ? Math.max(...p) : 10), _ = Se(
    () => i$(b, h, r?.step),
    [b, h, r?.step]
  ), x = { t: 16, r: 16, b: 40, l: 56 }, N = t - x.l - x.r, w = n - x.t - x.b, M = (C) => x.l + C / Math.max(1, m.length - 1) * N, $ = (C) => x.t + (1 - (C - _.min) / (_.max - _.min || 1)) * w, O = (C, k) => k.color ?? ka[C % ka.length], T = e.some((C) => Ja.has(C.type)), I = e.some((C) => l$.has(C.type)), D = {
    categories: m,
    scale: _,
    pad: x,
    plotW: N,
    plotH: w,
    xFor: M,
    yFor: $,
    colorFor: O,
    tooltipVisible: s,
    percent: c,
    showTip: (C, k, v) => y({ x: C, y: k, text: v }),
    hideTip: () => y(null),
    handleClick: (C, k, v, E) => l?.({
      seriesTitle: C.title ?? "",
      category: k,
      value: v,
      item: E
    }),
    series: g
  };
  return /* @__PURE__ */ A(
    "figure",
    {
      className: [Ze.root, u].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ A(
          "svg",
          {
            width: t,
            height: n,
            className: Ze.svg,
            role: "presentation",
            children: [
              T && r?.gridlines !== !1 && _.ticks.map((C) => /* @__PURE__ */ o(
                "line",
                {
                  x1: x.l,
                  x2: x.l + N,
                  y1: $(C),
                  y2: $(C),
                  className: Ze.gridline
                },
                C
              )),
              I && a?.gridlines && m.map((C, k) => /* @__PURE__ */ o(
                "line",
                {
                  x1: M(k),
                  x2: M(k),
                  y1: x.t,
                  y2: x.t + w,
                  className: Ze.gridline
                },
                k
              )),
              T && _.ticks.map((C) => /* @__PURE__ */ o(
                "text",
                {
                  x: x.l - 8,
                  y: $(C) + 4,
                  textAnchor: "end",
                  className: Ze.tickLabel,
                  children: c ? `${C}%` : C
                },
                C
              )),
              I && m.map((C, k) => /* @__PURE__ */ o(
                "text",
                {
                  x: M(k),
                  y: x.t + w + 16,
                  textAnchor: "middle",
                  className: Ze.tickLabel,
                  children: C
                },
                C
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
              (e.some((C) => C.type === "radar") || e.some((C) => C.type === "spider")) && g$(D),
              g.map((C, k) => T$(D, C, k))
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
        i && /* @__PURE__ */ o("div", { className: Ze.legend, children: e.map((C, k) => /* @__PURE__ */ A("span", { className: Ze.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Ze.swatch,
              style: { backgroundColor: O(k, C) },
              "aria-hidden": "true"
            }
          ),
          C.title ?? `Series ${k + 1}`
        ] }, k)) }),
        /* @__PURE__ */ A(
          "table",
          {
            className: Ze.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: d }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ A("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (C) => C.data.map((k, v) => /* @__PURE__ */ A("tr", { children: [
                  /* @__PURE__ */ o("td", { children: C.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: C.rowProperty ? `${String(k[C.rowProperty] ?? "")} / ${String(k[C.categoryProperty] ?? "")}` : String(k[C.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(k[C.valueProperty] ?? "") })
                ] }, `${C.title}-${v}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function wO({ query: e, children: t }) {
  return cs(e) ? /* @__PURE__ */ o(rt, { children: t }) : null;
}
function kO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function NO() {
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
  uS as AIChat,
  gp as ALERT_ICON,
  IS as Accordion,
  gS as Alert,
  iS as ArcGauge,
  RS as AutoComplete,
  wS as AutoGrid,
  AS as Avatar,
  D$ as Badge,
  xO as Barcode,
  NS as Body,
  aO as Breadcrumb,
  ln as Button,
  A$ as Card,
  uO as Carousel,
  vO as Chart,
  iu as CheckBox,
  jS as CheckBoxList,
  qS as ColorPicker,
  xS as Column,
  tO as ContextMenuProvider,
  Tr as DEFAULT_OPERATOR_BY_TYPE,
  Sv as DEFAULT_PALETTE,
  R0 as DEFAULT_THEMES,
  Z$ as DataFilter,
  J$ as DataGrid,
  Q$ as DataList,
  KS as DatePicker,
  Ca as Dialog,
  oS as DialogProvider,
  zS as DropDown,
  QS as DropZone,
  R$ as EmptyState,
  Sa as FILTER_OPERATORS,
  sO as FabMenu,
  ar as Field,
  j$ as Fieldset,
  a0 as Footer,
  B$ as Form,
  P$ as FormField,
  hO as Gantt,
  c0 as Header,
  pS as HtmlEditor,
  De as Icon,
  no as Input,
  eS as Label,
  kS as Layout,
  dS as LinearGauge,
  lO as Link,
  PS as ListBox,
  kO as LiveRegion,
  fS as Login,
  _S as Markdown,
  US as Mask,
  wO as MediaQuery,
  Lw as Menu,
  Ya as MenuItem,
  WS as Numeric,
  Wc as Pager,
  rO as PanelMenu,
  nO as PanelMenuItem,
  jf as Password,
  _O as PickList,
  mO as Pivot,
  mS as PopupProvider,
  oO as ProfileMenu,
  SS as Progress,
  bO as QRCode,
  cS as RadialGauge,
  BS as RadioButtonList,
  lS as RangeNavigator,
  GS as Rating,
  bS as Row,
  pO as Scheduler,
  XS as SecurityCode,
  lr as Select,
  FS as SelectBar,
  v0 as Sidebar,
  $S as SidebarToggle,
  ZS as SignaturePad,
  yS as Skeleton,
  VS as Slider,
  HS as SplitButton,
  cO as Splitter,
  vS as Stack,
  L$ as Stat,
  iO as Steps,
  tS as Switch,
  z$ as Table,
  DS as Tabs,
  Ma as Text,
  LS as TextArea,
  ls as TextBox,
  OS as ThemeSwitcher,
  ES as ThemeToggle,
  YS as TimeSpanPicker,
  gO as Timeline,
  aS as ToastProvider,
  dO as Toc,
  W0 as ToggleButton,
  nS as Tooltip,
  fO as Tree,
  JS as Upload,
  yO as VirtualGrid,
  Jc as aggregateValue,
  Ea as applyFilters,
  Zc as applyGridState,
  Os as collectGroupKeys,
  or as columnValue,
  G$ as compare,
  Y$ as custom,
  Vc as cycleSort,
  Ts as defaultOperatorForType,
  H$ as email,
  da as formatMasked,
  bo as formatValue,
  CS as getAppearance,
  yo as getByPath,
  TS as getTheme,
  qc as groupItems,
  I$ as iconNames,
  Oa as matchesFilters,
  q$ as maxLength,
  W$ as minLength,
  Xc as paginate,
  U$ as pattern,
  K$ as range,
  E_ as renderMarkdown,
  F$ as required,
  V$ as requiredTrue,
  Na as resolveVariant,
  Zi as runValidators,
  Y0 as setAppearance,
  V0 as setTheme,
  Vr as shadeClass,
  pc as sortItems,
  Yc as sortedItems,
  ia as subscribe,
  Qc as toCsv,
  cc as toFilterString,
  _c as toODataFilterString,
  eO as useContextMenu,
  rS as useDialog,
  Xi as useFormContext,
  X$ as useFormField,
  NO as useLiveRegion,
  cs as useMediaQuery,
  hS as usePopup,
  MS as useThemeService,
  sS as useToast
};
