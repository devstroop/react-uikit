import { jsx as o, jsxs as M, Fragment as st } from "react/jsx-runtime";
import { forwardRef as at, useId as lt, isValidElement as Wt, cloneElement as os, useState as W, useRef as ne, useCallback as B, useMemo as $e, useContext as Bn, createContext as ir, useEffect as be, Fragment as ss, useLayoutEffect as Wo, useImperativeHandle as ko, Children as Xr } from "react";
function Vr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const al = "_button_eyvws_1", ll = "_filled_eyvws_36", il = "_flat_eyvws_55", cl = "_outlined_eyvws_58", dl = "_text_eyvws_63", ul = "_loading_eyvws_506", fl = "_spinner_eyvws_509", _l = "_xs_eyvws_525", pl = "_sm_eyvws_531", hl = "_md_eyvws_537", ml = "_lg_eyvws_543", gl = "_xl_eyvws_549", yl = "_iconOnly_eyvws_555", bl = "_fullWidth_eyvws_585", An = {
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
      visible: _ = !0,
      className: u,
      disabled: y,
      children: m,
      ...g
    } = t;
    if (_ === !1) return null;
    const p = xl(r, a), h = p.style === "light" || p.style === "dark" ? null : Vr(i), f = [
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
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ M(st, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: An.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...O } = g, E = y || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: f,
          "aria-disabled": E || void 0,
          "aria-busy": d || void 0,
          onClick: (I) => {
            if (E) {
              I.preventDefault();
              return;
            }
            S?.(I);
          },
          ...O,
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
        className: f,
        disabled: y || d,
        "aria-busy": d || void 0,
        ...C,
        children: x
      }
    );
  }
), vl = "_card_4vcae_1", wl = "_elevated_4vcae_8", kl = "_filled_4vcae_13", Nl = "_outlined_4vcae_18", Sl = "_interactive_4vcae_22", $l = "_text_4vcae_30", Ol = "_header_4vcae_46", El = "_body_4vcae_53", Tl = "_footer_4vcae_63", Sr = {
  card: vl,
  elevated: wl,
  filled: kl,
  outlined: Nl,
  interactive: Sl,
  text: $l,
  header: Ol,
  body: El,
  footer: Tl
}, TS = at(function({
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
  const _ = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "div",
      {
        ref: d,
        role: _ ? "button" : void 0,
        tabIndex: _ ? 0 : void 0,
        onKeyDown: (u) => {
          s?.(u), !(!_ || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
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
function Na(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Cl = "_badge_1fy6d_1", Al = "_xs_1fy6d_21", Ml = "_sm_1fy6d_26", Dl = "_md_1fy6d_31", Il = "_lg_1fy6d_36", zl = "_xl_1fy6d_41", Ll = "_neutral_1fy6d_47", Rl = "_primary_1fy6d_52", Pl = "_secondary_1fy6d_61", jl = "_light_1fy6d_66", Bl = "_base_1fy6d_71", Fl = "_dark_1fy6d_76", Hl = "_info_1fy6d_81", Ul = "_success_1fy6d_86", Wl = "_warning_1fy6d_95", ql = "_danger_1fy6d_104", Kl = "_filled_1fy6d_111", Gl = "_outlined_1fy6d_161", Vl = "_text_1fy6d_213", $r = {
  badge: Cl,
  xs: Al,
  sm: Ml,
  md: Dl,
  lg: Il,
  xl: zl,
  neutral: Ll,
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
}, CS = at(function({
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
  const _ = t, u = Na(n, "filled"), y = Vr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        $r.badge,
        $r[a],
        $r[_],
        $r[u],
        y ? $r[y] : null,
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
}, AS = [
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
}, MS = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: l,
      className: [Zn.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Zn.label, children: t }),
        /* @__PURE__ */ M("div", { className: Zn.row, children: [
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
  return /* @__PURE__ */ M("div", { className: [Hn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          Hn.table,
          d,
          c ? Hn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          a != null && /* @__PURE__ */ o("caption", { className: Hn.caption, children: a }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((_) => /* @__PURE__ */ o(
            "th",
            {
              className: _.align != null ? Hn[_.align] : void 0,
              scope: "col",
              children: _.header
            },
            _.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((_) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? Hn[u.align] : void 0,
              children: u.render != null ? u.render(_) : _[u.key]
            },
            u.key
          )) }, n(_))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Hn.empty, children: r })
  ] });
}
const vi = "_emptyState_1swxw_1", wi = "_icon_1swxw_13", ki = "_title_1swxw_18", Ni = "_description_1swxw_24", Si = "_action_1swxw_30", Or = {
  emptyState: vi,
  icon: wi,
  title: ki,
  description: Ni,
  action: Si
};
function IS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [Or.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Or.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Or.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Or.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Or.action, children: r })
  ] });
}
const $i = "_field_149oz_1", Oi = "_label_149oz_8", Ei = "_required_149oz_14", Ti = "_hint_149oz_19", Ci = "_error_149oz_24", Er = {
  field: $i,
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
  const d = r ?? a, _ = lt(), u = lt(), y = lt();
  if (l === !1) return null;
  const m = i != null ? u : d != null ? y : null, g = typeof c == "function" ? c({ inputId: _, hintId: y, errorId: u }) : c, p = Wt(g) && typeof g.props.id == "string" ? g.props.id : void 0, b = p ?? t ?? _, h = Wt(g) && (m != null || p == null && typeof g.type == "string"), f = p != null || t != null || h, x = h && Wt(g) ? os(g, {
    id: b,
    "aria-describedby": m != null ? [
      g.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ M("div", { className: [Er.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: Er.label,
        htmlFor: f ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Er.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    i != null ? /* @__PURE__ */ o("div", { id: u, className: Er.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: y, className: Er.hint, children: d }) : null
  ] });
}
const Ai = "_formfield_6e25e_1", Mi = "_content_6e25e_8", Di = "_floating_6e25e_43", Ii = "_label_6e25e_111", zi = "_start_6e25e_132", Li = "_required_6e25e_169", Ri = "_end_6e25e_175", Pi = "_filled_6e25e_192", ji = "_flat_6e25e_199", Bi = "_helper_6e25e_206", Fi = "_invalid_6e25e_211", Nn = {
  formfield: Ai,
  content: Mi,
  floating: Di,
  label: Ii,
  start: zi,
  required: Li,
  end: Ri,
  filled: Pi,
  flat: ji,
  helper: Bi,
  invalid: Fi
};
function zS({
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
  className: _,
  visible: u = !0
}) {
  const y = lt(), m = lt();
  if (u === !1) return null;
  const g = a ?? y, p = typeof d == "function" ? d({
    inputId: g
  }) : d, b = Wt(p) ? p.type : null, h = typeof b == "string", f = Wt(p) && typeof b != "symbol", x = Wt(p) ? p.props : null, N = typeof x?.id == "string" ? x.id : void 0, v = h && Wt(p) ? p.type.toLowerCase() : null, C = v != null && (v === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = f && (r != null || s || N == null && C), O = N != null || a != null || S, E = v === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, I = v === "textarea" || v === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), D = S && Wt(p) ? os(
    p,
    {
      id: N ?? g,
      ...i && I && x?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          m
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : p, T = e != null ? /* @__PURE__ */ M(
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
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        Nn.formfield,
        Nn[c],
        i ? Nn.floating : null,
        s ? Nn.invalid : null,
        _
      ].filter(Boolean).join(" "),
      children: [
        i ? null : T,
        /* @__PURE__ */ M("div", { className: Nn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Nn.start, children: t }),
          D,
          i ? T : null,
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
function LS({
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
  expandAriaLabel: _,
  collapseAriaLabel: u,
  onExpand: y,
  onCollapse: m,
  children: g,
  className: p,
  visible: b = !0
}) {
  const h = lt(), [f, x] = W(c);
  if (b === !1) return null;
  const N = i ?? f, v = a ? `${h}-content` : void 0, C = () => {
    const T = !N;
    i === void 0 && x(T), T ? m?.() : y?.();
  }, S = a || e != null || n != null || t != null, O = a ? N : !1, E = a && N && s != null, I = O ? l ?? "Expand" : d ?? "Collapse", D = O ? _ ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [Jn.fieldset, p].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ o("legend", { className: Jn.legend, children: a ? /* @__PURE__ */ M(st, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Jn.toggle,
              title: I,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !O,
              "aria-controls": v,
              onClick: C,
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
        ] }) : /* @__PURE__ */ M(st, { children: [
          n != null && /* @__PURE__ */ o(De, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Jn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Jn.content,
            id: v,
            hidden: O,
            children: g
          }
        ),
        E ? /* @__PURE__ */ o("div", { className: Jn.summary, children: s }) : null
      ]
    }
  );
}
const Vi = "_form_abp5n_1", Yi = {
  form: Vi
}, Sa = ir(null);
function Xi() {
  const e = Bn(Sa);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function RS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = W({}), [d, _] = W(0), u = ne(s);
  u.current = s;
  const y = B((x) => {
    l(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), m = B((x) => {
    l((N) => {
      if (!(x in N)) return N;
      const v = { ...N };
      return delete v[x], v;
    });
  }, []), g = B(() => {
    const x = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (x[N.name] = v);
    }
    return x;
  }, []), p = B(() => {
    const x = g();
    _((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [g, e, t, n]), b = (x) => {
    r != null && a != null || (x.preventDefault(), p());
  }, h = $e(
    () => ({ registerField: y, unregisterField: m, submit: p, submitCount: d }),
    [y, m, p, d]
  ), f = [Yi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Sa.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: f,
      onSubmit: b,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const cr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", PS = (e = "Required") => (t) => cr(t) ? e : null, jS = (e = "Invalid email") => (t) => cr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, BS = (e, t = "Invalid format") => (n) => cr(n) || e.test(String(n)) ? null : t, FS = (e, t = `Minimum ${e} characters`) => (n) => cr(n) || String(n).length >= e ? null : t, HS = (e, t = `Maximum ${e} characters`) => (n) => cr(n) || String(n).length <= e ? null : t, US = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (cr(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, WS = (e, t = "Values do not match") => (n, r) => {
  if (cr(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, qS = (e = "Required") => (t) => t === !0 ? null : e, KS = (e) => (t, n) => e(t, n);
function Zi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function GS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: a } = Xi(), [i, c] = W(t?.initialValue), [s, l] = W(!1), [d, _] = W(!1), u = ne(() => []);
  u.current = () => Zi(t?.validate ?? [], i), be(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), be(() => {
    a > 0 && (l(!0), _(!1));
  }, [a]);
  const y = s && !d ? u.current() : [];
  return { value: i, setValue: (g) => {
    c(g), _(!0);
  }, errors: y };
}
const Ji = "_select_1xe98_1", Qi = "_invalid_1xe98_33", ec = "_xs_1xe98_40", tc = "_sm_1xe98_48", nc = "_md_1xe98_56", rc = "_lg_1xe98_62", oc = "_xl_1xe98_68", Mo = {
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
          Mo.select,
          Mo[t],
          n ? Mo.invalid : null,
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
), $a = [
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
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${dc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, _) => {
    const u = typeof _ == "string", y = u && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${y} ${uc[d]} ${u && r ? a(i(_)) : i(_)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(_))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(_))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(_))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(_))}))`;
      case "In":
        return Array.isArray(_) ? `${y} in (${_.map((m) => i(m)).join(", ")})` : `${y} in (${i(_)})`;
      case "NotIn":
        return Array.isArray(_) ? `not(${y} in (${_.map((m) => i(m)).join(", ")}))` : `not(${y} in (${i(_)}))`;
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
const hc = "_filter_1dvqt_1", mc = "_rows_1dvqt_9", gc = "_row_1dvqt_9", yc = "_join_1dvqt_21", bc = "_property_1dvqt_30", xc = "_operator_1dvqt_34", vc = "_value_1dvqt_38", wc = "_remove_1dvqt_42", kc = "_bar_1dvqt_58", Nc = "_add_1dvqt_64", Sc = "_custom_1dvqt_78", $c = "_summary_1dvqt_82", Oc = "_second_1dvqt_87", Ec = "_secondAdd_1dvqt_91", Tc = "_addSecond_1dvqt_95", Cc = "_joinSelect_1dvqt_109", mt = {
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
function Ss({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(st, { children: e.editor({ value: t, onChange: n }) });
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
function VS({
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
  const [d, _] = W(
    () => r != null && r.length > 0 ? r.map((h, f) => ({ id: f, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Tr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (h, f) => {
    _(
      (x) => x.map((N) => N.id === h ? { ...N, ...f } : N)
    );
  }, y = () => {
    const h = d[d.length - 1], f = Math.max(0, ...d.map((N) => N.id)) + 1, x = e[0];
    _((N) => [
      ...N,
      {
        id: f,
        property: h?.property ?? x?.name ?? "",
        operator: Tr[e.find(
          (v) => v.name === (h?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (h) => {
    _(
      (f) => f.length > 1 ? f.filter((x) => x.id !== h) : f
    );
  }, g = $e(() => {
    const h = [];
    for (const f of d) {
      if (f.property === "" || (f.value == null || f.value === "") && !Cr.includes(f.operator)) continue;
      const N = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: v } = f;
      v != null && No(f) && (N.secondOperator = v, N.secondValue = f.secondValue, N.logicalOperator = f.logicalOperator ?? "And"), h.push(N);
    }
    return h;
  }, [d]), p = $e(() => s == null || g.length === 0 ? s : Ea(s, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [s, g, t, n]);
  be(() => {
    c != null && s != null && c(p ?? []);
  }, [p]);
  const b = (h) => e.find((f) => f.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ M("div", { className: [mt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: mt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((h, f) => {
      const x = b(h.property), N = a ? [Tr[x.type ?? "string"]] : $a, v = !Cr.includes(h.operator), C = h.secondOperator != null;
      return /* @__PURE__ */ M(ss, { children: [
        /* @__PURE__ */ M("div", { className: mt.row, children: [
          f > 0 ? /* @__PURE__ */ o("span", { className: mt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            lr,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: mt.property,
              value: h.property,
              onChange: (S) => {
                const O = e.find(
                  (E) => E.name === S.target.value
                );
                u(h.id, {
                  property: S.target.value,
                  operator: Tr[O?.type ?? "string"],
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
              "aria-label": `Condition ${f + 1} operator`,
              className: mt.operator,
              value: h.operator,
              onChange: (S) => {
                const O = S.target.value;
                u(
                  h.id,
                  Cr.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: N.map((S) => ({
                value: S,
                label: Ns[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            Ss,
            {
              property: x,
              value: h.value,
              onChange: (S) => u(h.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: mt.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => m(h.id),
              children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? C ? /* @__PURE__ */ M(
          "div",
          {
            className: [mt.row, mt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                lr,
                {
                  "aria-label": `Condition ${f + 1} second-operator logic`,
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
                  "aria-label": `Condition ${f + 1} second operator`,
                  className: mt.operator,
                  value: h.secondOperator,
                  onChange: (S) => {
                    const O = S.target.value;
                    u(
                      h.id,
                      Cr.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: Ns[S]
                  }))
                }
              ),
              h.secondOperator == null || !Cr.includes(h.secondOperator) ? /* @__PURE__ */ o(
                Ss,
                {
                  property: x,
                  value: h.secondValue,
                  onChange: (S) => u(h.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: mt.remove,
                  "aria-label": `Remove second condition ${f + 1}`,
                  onClick: () => u(h.id, {
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
            onClick: () => u(h.id, {
              secondOperator: Tr[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ M("div", { className: mt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: mt.add, onClick: y, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: mt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ M("span", { className: mt.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Ac = "_pager_1du31_1", Mc = "_alignLeft_1du31_10", Dc = "_alignCenter_1du31_14", Ic = "_alignRight_1du31_18", zc = "_alignJustify_1du31_22", Lc = "_summary_1du31_26", Rc = "_controls_1du31_31", Pc = "_button_1du31_37", jc = "_active_1du31_73", Bc = "_ellipsis_1du31_85", Fc = "_size_1du31_91", Ft = {
  pager: Ac,
  alignLeft: Mc,
  alignCenter: Dc,
  alignRight: Ic,
  alignJustify: zc,
  summary: Lc,
  controls: Rc,
  button: Pc,
  active: jc,
  ellipsis: Bc,
  size: Fc
};
function Hc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function $s(e, t) {
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
  pagingSummaryFormat: _ = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: y = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: f = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: C,
  visible: S = !0
}) {
  const O = n ?? r, [E, I] = W(O), D = n !== void 0, T = D ? O : E, w = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, T), w), A = l ?? !0, R = c || w > 1, z = Uc(k, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      D || I(we);
      const ae = (we - 1) * t;
      x?.({
        page: we,
        skip: ae,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [D, x, w, t]
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
  return S === !1 || !R ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [Ft.pager, F, C].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        A && /* @__PURE__ */ o("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : Hc(_, k, w, e) }),
        /* @__PURE__ */ M(
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
                  "aria-label": g,
                  title: g,
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
                    "aria-label": $s(f, te),
                    title: $s(h, te),
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
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ M("label", { className: Ft.size, children: [
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
    const _ = t[l];
    if (_ === void 0)
      return s.map((p) => ({ type: "row", row: p }));
    const u = i(_), y = /* @__PURE__ */ new Map(), m = [];
    s.forEach((p) => {
      const b = String(a(p, _) ?? ""), h = y.get(b);
      h ? h.push(p) : (y.set(b, [p]), m.push(b));
    });
    const g = [];
    return m.forEach((p) => {
      const b = y.get(p), h = [...d, p].join(Ta), f = b[0], x = f !== void 0 ? a(f, _) : void 0;
      g.push({
        type: "group",
        group: {
          key: h,
          display: bo(x, u?.format),
          property: _,
          title: u?.title ?? _,
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
    const d = /* @__PURE__ */ new Map(), _ = [];
    i.forEach((u) => {
      const y = String(n(u, l) ?? ""), m = d.get(y);
      m ? m.push(u) : (d.set(y, [u]), _.push(y));
    }), _.forEach((u) => {
      const y = [...s, u].join(Ta);
      r.add(y), a(d.get(u), c + 1, [...s, u]);
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
const ed = "_grid_13rur_1", td = "_toolbar_13rur_8", nd = "_picker_13rur_13", rd = "_pickerButton_13rur_17", od = "_pickerPanel_13rur_31", sd = "_pickerItem_13rur_46", ad = "_groupPanel_13rur_55", ld = "_groupPanelActive_13rur_66", id = "_groupPanelText_13rur_70", cd = "_groupChip_13rur_74", dd = "_groupRemove_13rur_85", ud = "_groupRow_13rur_94", fd = "_groupCell_13rur_98", _d = "_groupToggle_13rur_104", pd = "_editRow_13rur_117", hd = "_editCell_13rur_121", md = "_editInput_13rur_127", gd = "_commandCell_13rur_137", yd = "_commandButton_13rur_144", bd = "_data_13rur_159", xd = "_table_13rur_166", vd = "_header_13rur_172", wd = "_center_13rur_185", kd = "_right_13rur_189", Nd = "_sortButton_13rur_193", Sd = "_sortIndicator_13rur_211", $d = "_sortIndex_13rur_215", Od = "_cell_13rur_226", Ed = "_clickable_13rur_241", Td = "_frozen_13rur_249", Cd = "_selected_13rur_255", Ad = "_resizeHandle_13rur_263", Md = "_filterCell_13rur_281", Dd = "_filterSelect_13rur_290", Id = "_filterInput_13rur_300", zd = "_empty_13rur_311", Ld = "_loading_13rur_317", Rd = "_visuallyHidden_13rur_331", Pd = "_virtualScroller_13rur_340", jd = "_spacerRow_13rur_345", Bd = "_footerRow_13rur_350", Fd = "_footerCell_13rur_354", Hd = "_footerValue_13rur_361", Se = {
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
  sortIndicator: Sd,
  sortIndex: $d,
  cell: Od,
  clickable: Ed,
  frozen: Td,
  selected: Cd,
  resizeHandle: Ad,
  filterCell: Md,
  filterSelect: Dd,
  filterInput: Id,
  empty: zd,
  loading: Ld,
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
function YS({
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
  pageSize: _ = 10,
  pageSizeOptions: u,
  pageNumbersCount: y = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: g = !0,
  showPageSizeSelector: p = !0,
  selectionMode: b = "None",
  selectedKeys: h,
  onSelectionChange: f,
  showColumnPicker: x = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: C = !1,
  allowGrouping: S = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: E = !0,
  aggregates: I,
  showExportButton: D = !1,
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
  const xe = K != null ? `${K} ` : "", [pe, Me] = W([]), [G, Oe] = W(
    /* @__PURE__ */ new Map()
  ), [re, Ae] = W(1), [fe, Fe] = W(_), [Ge, Qe] = W(
    () => e.map((H, U) => to(H, U))
  ), [At, it] = W(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? to(H, U) : "").filter(Boolean)
    )
  ), [bt, Z] = W({}), [L, Y] = W(!1), [Q, ge] = W([]), [le, Ee] = W(
    null
  ), [je, Ze] = W(null), [et, rt] = W({}), [Xt, oe] = W(0), [Le, Nt] = W(j), Rt = ne(null), xt = ne(null), Ie = $e(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, ye) => H.set(to(U, ye), U)), H;
  }, [e]), qe = $e(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = $e(
    () => Kc(qe, bt),
    [qe, bt]
  ), Ot = F !== "None" || we != null || X, ct = $e(() => {
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
    w,
    k,
    d
  ]), V = ne(A);
  be(() => {
    V.current = A;
  });
  const he = $e(
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
  const Ve = $e(() => new Set(Q), [Q]), Ye = $e(() => le || (E ? Os(ct.items, Q, or) : /* @__PURE__ */ new Set()), [le, E, ct.items, Q]), Pt = $e(
    () => qc(ct.items, Q, e, Ye, or),
    [ct.items, Q, e, Ye]
  ), Xe = $e(
    () => Q.length > 0 ? qe.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : qe,
    [qe, Q, Ve]
  ), q = (H) => {
    H !== "" && Me(Vc(pe, H, { multi: a }));
  }, ee = (H, U) => {
    Oe((ye) => {
      const ve = new Map(ye);
      return ve.set(H, U), ve;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (b === "None") return;
    const U = n(H), ye = h ?? [];
    let ve;
    b === "Single" ? ve = ye.length === 1 && ye[0] === U ? [] : [U] : ve = ye.includes(U) ? ye.filter((tt) => tt !== U) : [...ye, U], f?.(ve);
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
  }, ot = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Qe((ye) => {
      const ve = [...ye], tt = ve.indexOf(U), Mt = ve.indexOf(H);
      return tt < 0 || Mt < 0 ? ye : (ve.splice(tt, 1), ve.splice(Mt, 0, U), ve);
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
    }), rt(U), Ze(String(n(H)));
  }, hn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), rt(H), Ze("__new__");
  }, Cn = () => {
    Ze(null), rt({});
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
  }, kn = d && (m === "Top" || m === "TopAndBottom"), Zr = d && (m === "Bottom" || m === "TopAndBottom"), $o = c && e.some((H) => Cs(H, c)), Oo = (H, U, ye) => H.render ? H.render(U, { index: 0 }) : bo(or(U, H.property), H.format), Eo = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, mn = w ? t : ct.filtered, Jr = () => {
    const H = Qc(
      mn,
      Xe.map((tt) => tt.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), ye = URL.createObjectURL(U), ve = document.createElement("a");
    ve.href = ye, ve.download = `${T}.csv`, document.body.appendChild(ve), ve.click(), ve.remove(), URL.revokeObjectURL(ye);
  }, gn = Pt.length, jt = $e(() => {
    if (!R || gn === 0)
      return { start: 0, end: gn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / z) - H
    ), ye = Math.ceil(Le / z) + H * 2, ve = Math.min(gn, U + ye), tt = U * z, Mt = Math.max(0, (gn - ve) * z);
    return { start: U, end: ve, top: tt, bottom: Mt };
  }, [R, gn, Xt, z, Le]), Nr = Xe.length + (Ot ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [Se.grid, me].filter(Boolean).join(" "), children: [
    kn && /* @__PURE__ */ o(
      qo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: u,
        pageNumbersCount: y,
        showSummary: g,
        showPageSizeSelector: p,
        ariaLabel: `${xe}${Zr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || x || D) && /* @__PURE__ */ M("div", { className: Se.toolbar, children: [
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
            return /* @__PURE__ */ M("span", { className: Se.groupChip, children: [
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
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
                }
              )
            ] }, H);
          }) : /* @__PURE__ */ o("span", { className: Se.groupPanelText, children: O })
        }
      ),
      X && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: hn,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ M("div", { className: Se.picker, children: [
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
              return /* @__PURE__ */ M("label", { className: Se.pickerItem, children: [
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
      D && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Jr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [Se.data, R ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: R ? { maxHeight: j } : void 0,
        onScroll: R ? (H) => {
          oe(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (R ? gn : ct.total) + 1,
              "aria-label": K,
              "aria-busy": ae || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
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
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const ye = Wd(U, r), ve = pe.find((wt) => wt.property === U.property), tt = ve ? pe.indexOf(ve) + 1 : 0, Mt = U.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": ye && ve ? Ud[ve.sortOrder] : "none",
                          className: [
                            Se.header,
                            Mt === "center" ? Se.center : "",
                            Mt === "right" ? Se.right : "",
                            U.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: C || S || void 0,
                          onDragStart: C || S ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), dt(H);
                          } : void 0,
                          onDragOver: C ? (wt) => wt.preventDefault() : void 0,
                          onDrop: C ? () => ot(H) : void 0,
                          children: [
                            ye ? /* @__PURE__ */ M(
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
                                  tt > 1 && i && /* @__PURE__ */ o("span", { className: Se.sortIndex, children: tt })
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
                    Ot && /* @__PURE__ */ o("th", { className: Se.header, scope: "col", children: "Actions" })
                  ] }),
                  $o && /* @__PURE__ */ o("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!Cs(U, c))
                      return /* @__PURE__ */ o("td", { className: Se.filterCell }, H);
                    const ye = G.get(U.property ?? "");
                    return /* @__PURE__ */ M("td", { className: Se.filterCell, children: [
                      /* @__PURE__ */ M(
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
                          value: ye?.operator ?? Ts(U.type ?? "string"),
                          onChange: (ve) => ee(U.property ?? "", {
                            ...ye,
                            operator: ve.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: $a.filter((ve) => ve !== "Custom").map(
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
                /* @__PURE__ */ M("tbody", { children: [
                  je === "__new__" && /* @__PURE__ */ M("tr", { className: Se.editRow, children: [
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o("td", { className: Se.editCell, children: U.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Se.editInput,
                        type: U.type === "number" ? "number" : U.type === "boolean" ? "checkbox" : "text",
                        checked: U.type === "boolean" ? !!et[U.property] : void 0,
                        value: U.type === "boolean" ? void 0 : String(et[U.property] ?? ""),
                        onChange: (ye) => rt((ve) => ({
                          ...ve,
                          [U.property]: U.type === "boolean" ? ye.target.checked : ye.target.value
                        })),
                        "aria-label": `${U.title ?? U.property} (new)`
                      }
                    ) }, H)),
                    Ot && /* @__PURE__ */ M("td", { className: Se.editCell, children: [
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
                          children: /* @__PURE__ */ o("td", { colSpan: Nr, className: Se.groupCell, children: /* @__PURE__ */ M(
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
                    const tt = H.row, Mt = n(tt), wt = (h ?? []).includes(Mt), yn = je != null && je === String(Mt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": ve,
                        className: [
                          ue || b !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          yn ? Se.editRow : ""
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
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!et[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(et[gt.property] ?? ""),
                                  onChange: (Jt) => rt((To) => ({
                                    ...To,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : Oo(gt, tt)
                            },
                            Ct
                          )),
                          Ot && /* @__PURE__ */ o("td", { className: Se.commandCell, children: yn ? /* @__PURE__ */ M(st, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Fn(tt),
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
                          ] }) : /* @__PURE__ */ M(st, { children: [
                            F !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Zt(tt),
                                children: "Edit"
                              }
                            ),
                            we && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => we(tt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Mt
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
                I && I.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ M("tr", { className: Se.footerRow, children: [
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
                        children: ye.map((ve, tt) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: Se.footerValue,
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
                  Ot && /* @__PURE__ */ o("td", { className: Se.footerCell })
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
      qo,
      {
        pageNumber: ct.pageNumber,
        pageSize: ct.pageSize,
        count: ct.total,
        pageSizeOptions: u,
        pageNumbersCount: y,
        showSummary: g,
        showPageSizeSelector: p,
        ariaLabel: `${xe}${kn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const Kd = "_wrap_avqds_1", Gd = "_grid_avqds_7", Vd = "_stacked_avqds_13", Yd = "_item_avqds_19", Xd = "_empty_avqds_25", Ar = {
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
  emptyTemplate: c,
  loadingTemplate: s,
  isLoading: l = !1,
  showPageSizeSelector: d = !0,
  className: _,
  ariaLabel: u = "Data list"
}) {
  const [y, m] = W(1), [g, p] = W(t), b = e.length, h = Math.max(1, Math.ceil(b / g)), f = Math.min(Math.max(1, y), h), x = $e(() => {
    const v = (f - 1) * g;
    return e.slice(v, v + g);
  }, [e, f, g]), N = r ? Ar.grid : Ar.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Ar.wrap, _].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        l && s != null ? s : b === 0 ? c ?? /* @__PURE__ */ o("div", { className: Ar.empty, children: i }) : /* @__PURE__ */ o("div", { className: N, children: x.map((v, C) => /* @__PURE__ */ o("div", { className: Ar.item, children: a ? a(v, C) : String(v) }, C)) }),
        /* @__PURE__ */ o(
          qo,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: f,
            pageSize: g,
            count: b,
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
}, JS = at(function({ className: t, ...n }, r) {
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
function QS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = lt(), l = ne(null), d = ne(null), _ = ne(() => {
  }), [u, y] = W(!1), [m, g] = W(null), p = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, b = () => {
    p(), l.current = window.setTimeout(() => {
      l.current = null, y(!0);
    }, r);
  }, h = () => {
    p(), y(!1);
  };
  if (be(() => () => p(), []), be(() => {
    if (!u || a == null) return;
    const x = window.setTimeout(() => y(!1), a);
    return () => window.clearTimeout(x);
  }, [u, a]), be(() => {
    if (i || !u) return;
    const x = (N) => {
      N.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [i, u]), be(() => {
    if (!i) return;
    let x = null, N = null;
    const v = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, C = () => {
      v(), N = null, g(null);
    };
    _.current = C;
    const S = (w) => {
      v(), N = w, x = window.setTimeout(() => {
        x = null, g(w);
      }, r);
    }, O = (w) => w instanceof Element ? w.closest(i) : null, E = (w) => {
      const k = O(w.target);
      !k || k === N || S(k);
    }, I = (w) => {
      const k = O(w.target);
      if (!k || k !== N) return;
      const A = w.relatedTarget;
      A instanceof Element && k.contains(A) || C();
    }, D = (w) => {
      w.key === "Escape" && C();
    }, T = () => C();
    return document.addEventListener("mouseover", E), document.addEventListener("mouseout", I), document.addEventListener("focusin", E), document.addEventListener("focusout", I), document.addEventListener("keydown", D), document.addEventListener("scroll", T, !0), window.addEventListener("resize", T), () => {
      v(), document.removeEventListener("mouseover", E), document.removeEventListener("mouseout", I), document.removeEventListener("focusin", E), document.removeEventListener("focusout", I), document.removeEventListener("keydown", D), document.removeEventListener("scroll", T, !0), window.removeEventListener("resize", T), N = null, g(null);
    };
  }, [i, r]), be(() => {
    if (!i || m === null || a == null) return;
    const x = window.setTimeout(() => _.current(), a);
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
    return m ? /* @__PURE__ */ M(
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
  const f = Wt(t) ? os(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? s : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [Un.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: h,
        onFocus: b,
        onBlur: h,
        children: [
          f,
          u && /* @__PURE__ */ M(
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
const bu = "_dialog_1t7pw_1", xu = "_sm_1t7pw_104", vu = "_resizable_1t7pw_110", wu = "_md_1t7pw_113", ku = "_lg_1t7pw_117", Nu = "_header_1t7pw_121", Su = "_title_1t7pw_132", $u = "_description_1t7pw_139", Ou = "_close_1t7pw_146", Eu = "_body_1t7pw_176", Tu = "_footer_1t7pw_188", bn = {
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
  closeOnEsc: _ = !0,
  resizable: u = !1,
  side: y = null,
  showCloseButton: m = !0,
  showMask: g = !0,
  canClose: p,
  className: b
}) {
  const h = ne(null), f = lt(), x = lt(), N = ne(t);
  be(() => {
    N.current = t;
  });
  const v = ne(p);
  be(() => {
    v.current = p;
  });
  const C = ne(_);
  be(() => {
    C.current = _;
  });
  const S = ne(!1), O = ne(!1), E = B(() => {
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
    if (O.current) {
      O.current = !1;
      return;
    }
    N.current();
  }, []), D = B(
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
      } else !e && T.open && (O.current = S.current, S.current = !1, T.close());
  }, [e, E]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: h,
      className: [
        bn.dialog,
        bn[c],
        u ? bn.resizable : null,
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
      onClick: (T) => {
        T.target === h.current && d && E();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? f : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ M("header", { className: bn.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ o("h2", { id: f, className: bn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: x, className: bn.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: bn.close,
              onClick: () => {
                E();
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
const Cu = "_typography_1jy8x_1", Au = "_h1_1jy8x_39", Mu = "_h2_1jy8x_45", Du = "_h3_1jy8x_51", Iu = "_h4_1jy8x_57", zu = "_h5_1jy8x_63", Lu = "_h6_1jy8x_69", Ru = "_button_1jy8x_99", Pu = "_caption_1jy8x_106", ju = "_overline_1jy8x_112", Io = {
  typography: Cu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Au,
  h2: Mu,
  h3: Du,
  h4: Iu,
  h5: zu,
  h6: Lu,
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
}, Aa = at(function({
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
  const _ = n === "Auto" ? Bu[t] : Hu[n];
  return /* @__PURE__ */ o(
    _,
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
}), Ma = ir(null);
function e$() {
  const e = Bn(Ma);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function t$({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = ne(0), i = () => (a.current += 1, a.current), c = ne([]);
  c.current = t;
  const s = (y) => {
    const m = c.current[0];
    m && (m.kind === "confirm" ? m.resolve(!!y) : m.kind === "alert" ? m.resolve() : m.resolve(y), n((g) => g.slice(1)));
  }, l = $e(
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
  function _(y) {
    d && (d.kind === "confirm" ? d.resolve(!!y) : d.kind === "alert" ? d.resolve() : d.resolve(y), n((m) => m.slice(1)));
  }
  const u = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ M(Ma.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ca,
      {
        open: t.length > 0,
        onClose: () => _(!1),
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
        footer: d?.kind === "confirm" ? /* @__PURE__ */ M(st, { children: [
          /* @__PURE__ */ o(ln, { variant: "text", onClick: () => _(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            ln,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => _(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ o(ln, { variant: "text", onClick: () => _(void 0), children: "Close" }) : /* @__PURE__ */ o(ln, { onClick: () => _(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? u?.content : d?.options.message != null && /* @__PURE__ */ o(Aa, { textStyle: "Body1", children: d.options.message })
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
function n$() {
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
function r$({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = W([]), [s, l] = W(!1), d = ne([]), _ = ne(/* @__PURE__ */ new Map()), u = ne(!1), y = ne(0), m = (k) => {
    u.current = k, l(k);
  }, g = B((k) => {
    const A = _.current.get(k);
    A && (window.clearTimeout(A.timeoutId), A.remaining = Math.max(
      0,
      A.remaining - (Date.now() - A.startedAt)
    ));
  }, []), p = B((k) => {
    const A = _.current.get(k);
    A && (window.clearTimeout(A.timeoutId), _.current.delete(k));
  }, []), b = B(
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
      !A || A.leaving || (A.onAutoClose?.(), b(k));
    },
    [b]
  ), f = B(
    (k) => {
      const A = _.current.get(k);
      !A || A.remaining <= 0 || (A.startedAt = Date.now(), A.timeoutId = window.setTimeout(() => h(k), A.remaining));
    },
    [h]
  ), x = B(() => {
    u.current || _.current.forEach((k, A) => g(A)), m(!0);
  }, [g]), N = B(() => {
    _.current.forEach((k, A) => f(A)), m(!1);
  }, [f]);
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
      }), window.setTimeout(() => b(k), cf));
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
      _.current.set(k.id, A), u.current || f(k.id);
    },
    [f]
  ), S = B(
    (k) => {
      const A = d.current.find((z) => z.id === k.id), R = {
        id: k.id ?? ++y.current,
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
  ), O = B(
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
    (k) => (A, R) => O({ severity: k, summary: A, detail: R }),
    [O]
  ), I = $e(
    () => ({
      toast: S,
      notify: O,
      notifyInfo: E("info"),
      notifySuccess: E("success"),
      notifyWarning: E("warning"),
      notifyError: E("danger")
    }),
    [S, O, E]
  ), D = $e(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((k) => k.position)])),
    [n, i]
  ), T = r ? x : void 0, w = r ? N : void 0;
  return /* @__PURE__ */ M(Da.Provider, { value: I, children: [
    e,
    D.map((k) => /* @__PURE__ */ o(
      "div",
      {
        className: [en.viewport, en[df[k]], a].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: T,
        onMouseLeave: w,
        children: i.filter((A) => A.position === k).map((A) => /* @__PURE__ */ M(
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
              /* @__PURE__ */ M("div", { className: en.content, children: [
                /* @__PURE__ */ o("div", { className: en.title, children: A.title }),
                A.description && /* @__PURE__ */ o("div", { className: en.description, children: A.description }),
                (A.action || A.cancel) && /* @__PURE__ */ M("div", { className: en.actions, children: [
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
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
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
const uf = "_navigator_848v2_3", ff = "_track_848v2_9", _f = "_spark_848v2_19", pf = "_window_848v2_28", hf = "_handle_848v2_37", Wn = {
  navigator: uf,
  track: ff,
  spark: _f,
  window: pf,
  handle: hf
};
function As(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), c = Math.max(n, Math.min(r, t));
  if (c - i < a) {
    const s = (i + c) / 2;
    i = Math.max(n, s - a / 2), c = Math.min(r, i + a), i = Math.max(n, c - a);
  }
  return i > c && ([i, c] = [c, i]), { start: i, end: c };
}
function o$({
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
  const d = n !== void 0, [_, u] = W(
    () => r && As(
      r.start,
      r.end,
      e,
      t,
      c
    ) || {
      start: e,
      end: t
    }
  ), y = d && n ? n : _, m = ne(null), g = ne(null), p = B(
    (O) => {
      const E = As(O.start, O.end, e, t, c);
      d || u(E), a?.(E);
    },
    [d, e, t, c, a]
  ), b = B(
    (O) => {
      const E = g.current;
      if (!E) return e;
      const I = E.getBoundingClientRect(), D = I.width > 0 ? (O - I.left) / I.width : 0;
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
      const T = b(I.clientX);
      if (D.mode === "start") p({ start: T, end: y.end });
      else if (D.mode === "end") p({ start: y.start, end: T });
      else {
        const w = y.end - y.start, k = T - D.grabOffset;
        p({ start: k, end: k + w });
      }
    }, E = () => {
      m.current = null;
    };
    return document.addEventListener("pointermove", O), document.addEventListener("pointerup", E), () => {
      document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", E);
    };
  }, [p, b, y]);
  const f = (O) => (E) => {
    E.preventDefault(), E.target.focus?.(), m.current = { mode: O, grabOffset: 0 };
  }, x = (O) => {
    const E = b(O.clientX);
    if (E >= y.start && E <= y.end)
      m.current = { mode: "pan", grabOffset: E - y.start };
    else {
      const I = Math.abs(E - y.start), D = Math.abs(E - y.end);
      I <= D ? p({ start: E, end: y.end }) : p({ start: y.start, end: E });
    }
  }, N = (t - e || 1) / 100, v = (O) => (E) => {
    const I = E.shiftKey ? N * 10 : N;
    E.key === "ArrowLeft" || E.key === "ArrowDown" ? (E.preventDefault(), p(
      O === "start" ? { start: y.start - I, end: y.end } : { start: y.start, end: y.end - I }
    )) : E.key === "ArrowRight" || E.key === "ArrowUp" ? (E.preventDefault(), p(
      O === "start" ? { start: y.start + I, end: y.end } : { start: y.start, end: y.end + I }
    )) : E.key === "Home" ? (E.preventDefault(), p(
      O === "start" ? { start: e, end: y.end } : { start: y.start, end: t }
    )) : E.key === "End" && (E.preventDefault(), p(
      O === "start" ? { start: y.end - c, end: y.end } : { start: y.start, end: t }
    ));
  }, C = h(y.start), S = Math.max(0, h(y.end) - C);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ M("div", { ref: g, className: Wn.track, onPointerDown: x, children: [
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
                points: i.map((O, E) => {
                  const I = E / (i.length - 1) * 100, D = Math.max(...i), T = Math.min(...i), w = D === T ? 12 : 22 - (O - T) / (D - T) * 20;
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
            "aria-valuenow": Math.round(y.start * 100) / 100,
            className: [Wn.handle, Wn.handleStart].filter(Boolean).join(" "),
            style: { left: `${C}%` },
            onPointerDown: f("start"),
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
            style: { left: `${C + S}%` },
            onPointerDown: f("end"),
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
}, oo = 150, Ms = 240;
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
function s$({
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
  className: _
}) {
  const u = n - t || 1, y = Math.max(0, Math.min(1, (e - t) / u)), m = "var(--dx-border-color)", g = a ?? "var(--dx-primary-color)", p = 100, b = 96, h = 80, f = oo + Ms * y;
  return /* @__PURE__ */ M(
    "div",
    {
      role: "meter",
      "aria-label": d,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Rn.gauge, _].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ M("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Is(p, b, h, oo, oo + Ms),
              fill: "none",
              stroke: m,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          y > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Is(p, b, h, oo, f),
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
function zs(e, t, n, r, a) {
  const [i, c] = vr(e, t, n, r), [s, l] = vr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function xf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, a) => e + (t - e) * a / (n - 1)
  );
}
function a$({
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
  showValue: _ = !0,
  formatValue: u = (g) => String(Math.round(g * 100) / 100),
  ariaLabel: y = "Gauge",
  className: m
}) {
  const g = n - t || 1, p = (D) => Math.max(0, Math.min(1, (D - t) / g)), h = a - r >= 360 ? r + 359.999 : a, f = (D) => r + (h - r) * p(D), x = l ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: v = 8, showLabels: C = !0 } = i, S = 100, O = 100, E = 78, I = (D, T, w) => {
    const [k, A] = vr(S, O, E - 14, f(D));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: S,
        y1: O,
        x2: k,
        y2: A,
        stroke: T,
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
      className: [Rn.gauge, m].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ M("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: zs(S, O, E, r, h),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((D, T) => /* @__PURE__ */ o(
            "path",
            {
              d: zs(
                S,
                O,
                E,
                f(Math.max(t, D.from)),
                f(Math.min(n, D.to))
              ),
              fill: "none",
              stroke: D.color,
              strokeWidth: 12
            },
            `range-${T}`
          )),
          v > 0 && xf(t, n, v).map((D, T) => {
            const [w, k] = vr(S, O, E - 10, f(D)), [A, R] = vr(S, O, E - 16, f(D)), [z, j] = vr(S, O, E - 26, f(D));
            return /* @__PURE__ */ M("g", { children: [
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
                  children: D
                }
              )
            ] }, T);
          }),
          I(e, x, "value"),
          s.map(
            (D, T) => I(D.value, D.color ?? x, `extra-${T}`)
          ),
          /* @__PURE__ */ o("circle", { cx: S, cy: O, r: 7, fill: x })
        ] }),
        _ && /* @__PURE__ */ o("div", { className: Rn.value, children: u(e) })
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
function l$({
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
  formatValue: _ = (m) => String(Math.round(m * 100) / 100),
  ariaLabel: u = "Gauge",
  className: y
}) {
  const m = n - t || 1, g = r === "vertical", p = s ?? (g ? 220 : 280), { count: b = 5, showLabels: h = !0 } = a, f = c ?? "var(--dx-primary-color)", x = "var(--dx-border-color)", N = 8, v = (I) => {
    const T = (Math.max(t, Math.min(n, I)) - t) / m;
    return g ? p - N - T * (p - N * 2) : N + T * (p - N * 2);
  }, C = () => b <= 0 ? null : vf(t, n, b).map((I, D) => {
    const T = v(I);
    return /* @__PURE__ */ M("g", { children: [
      g ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: T,
          x2: 0,
          y2: T,
          stroke: x,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
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
      h && (g ? /* @__PURE__ */ o("text", { x: -10, y: T + 4, textAnchor: "end", className: Rn.tick, children: I }) : /* @__PURE__ */ o("text", { x: T, y: -10, textAnchor: "middle", className: Rn.tick, children: I }))
    ] }, D);
  }), S = () => i.map((I, D) => {
    const T = v(I.from), w = v(I.to), k = Math.min(T, w), A = Math.abs(w - T);
    return g ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: k,
        width: l,
        height: A,
        fill: I.color,
        opacity: 0.35
      },
      D
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
      D
    );
  }), O = v(e), E = /* @__PURE__ */ M("g", { children: [
    S(),
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
        fill: f
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: N,
        y: -l / 2,
        width: Math.max(0, O - N),
        height: l,
        rx: l / 2,
        fill: f
      }
    ),
    g ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${O} L ${-l / 2 - 2} ${O - 5} L ${-l / 2 - 2} ${O + 5} Z`,
        fill: f
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${O} ${-l / 2 - 10} L ${O - 5} ${-l / 2 - 2} L ${O + 5} ${-l / 2 - 2} Z`,
        fill: f
      }
    ),
    C()
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      role: "meter",
      "aria-label": u,
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
        d && /* @__PURE__ */ o("div", { className: Rn.value, children: _(e) })
      ]
    }
  );
}
const wf = "_chat_1apnf_3", kf = "_messages_1apnf_9", Nf = "_message_1apnf_9", Sf = "_user_1apnf_29", $f = "_assistant_1apnf_35", Of = "_system_1apnf_40", Ef = "_typing_1apnf_46", Tf = "_inputRow_1apnf_51", fr = {
  chat: wf,
  messages: kf,
  message: Nf,
  user: Sf,
  assistant: $f,
  system: Of,
  typing: Ef,
  inputRow: Tf
};
function i$({
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
  className: _
}) {
  const [u, y] = W(""), m = l || d, g = u.trim().length > 0 && !m, p = (h) => {
    h.preventDefault();
    const f = u.trim();
    !f || m || (y(""), t?.(f));
  }, b = /* @__PURE__ */ M("form", { className: fr.inputRow, onSubmit: (h) => {
    p(h);
  }, children: [
    /* @__PURE__ */ o(
      ls,
      {
        value: u,
        placeholder: n,
        "aria-label": a,
        disabled: m,
        onChange: (h) => y(h.target.value)
      }
    ),
    /* @__PURE__ */ o(ln, { type: "submit", disabled: !g, loading: l, children: r })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      className: [fr.chat, _].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ M("div", { className: fr.messages, children: [
          e.map(
            (h, f) => c ? /* @__PURE__ */ o("div", { children: c(h, f) }, f) : /* @__PURE__ */ o(
              "div",
              {
                className: [fr.message, fr[h.role]].filter(Boolean).join(" "),
                children: h.content
              },
              f
            )
          ),
          l && /* @__PURE__ */ o("div", { className: fr.typing, children: "…" })
        ] }),
        s ? s(b) : b
      ]
    }
  );
}
const Cf = "_wrapper_1ulz6_1", Af = "_input_1ulz6_8", Mf = "_invalid_1ulz6_38", Df = "_toggle_1ulz6_45", If = "_xs_1ulz6_80", zf = "_sm_1ulz6_86", Lf = "_md_1ulz6_92", Rf = "_lg_1ulz6_98", Pf = "_xl_1ulz6_104", Mr = {
  wrapper: Cf,
  input: Af,
  invalid: Mf,
  toggle: Df,
  xs: If,
  sm: zf,
  md: Lf,
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
    const [d, _] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Mr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: d ? "text" : "password",
            disabled: a,
            className: [
              Mr.input,
              Mr[t],
              n ? Mr.invalid : null,
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
            className: Mr.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => _((u) => !u),
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
function c$({
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
  usernameLabel: _ = "Username",
  passwordLabel: u = "Password",
  submitText: y = "Sign in",
  storageKey: m,
  className: g
}) {
  const [p, b] = W(() => Wf(m) ?? ""), [h, f] = W(""), [x, N] = W(!1), [v, C] = W(!1), [S, O] = W({}), E = l || v, I = e != null && n == null, D = async (T) => {
    I || T.preventDefault();
    const w = {};
    if (p.trim() || (w.username = "Username is required."), h || (w.password = "Password is required."), O(w), !(w.username || w.password || !n)) {
      C(!0);
      try {
        await n({
          username: p.trim(),
          password: h,
          rememberMe: x
        }), x ? qf(m, p.trim()) : Kf(m);
      } finally {
        C(!1);
      }
    }
  };
  return /* @__PURE__ */ M(
    "form",
    {
      className: [Dr.login, g].filter(Boolean).join(" "),
      action: I ? e : void 0,
      method: I ? t : void 0,
      noValidate: !0,
      onSubmit: (T) => {
        D(T);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Dr.title, children: d }),
        /* @__PURE__ */ o(ar, { label: _, required: !0, error: S.username, children: ({ inputId: T }) => /* @__PURE__ */ o(
          ls,
          {
            id: T,
            value: p,
            autoComplete: "username",
            disabled: E,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (w) => {
              b(w.target.value), O((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(ar, { label: u, required: !0, error: S.password, children: ({ inputId: T }) => /* @__PURE__ */ o(
          jf,
          {
            id: T,
            value: h,
            autoComplete: "current-password",
            disabled: E,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (w) => {
              f(w.target.value), O((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ M("label", { className: Dr.remember, children: [
          /* @__PURE__ */ o(
            iu,
            {
              checked: x,
              disabled: E,
              onChange: (T) => N(T.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(ln, { type: "submit", loading: E, disabled: E, children: y }),
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
function Ls(e, t) {
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
    } catch (_) {
      d = !0, a = _;
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
    if (typeof e == "string") return Ls(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ls(e, t) : void 0;
  }
}
const Ia = Object.entries, Rs = Object.setPrototypeOf, Jf = Object.isFrozen, Qf = Object.getPrototypeOf, e_ = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, $t = Object.seal, xr = Object.create, za = typeof Reflect < "u" && Reflect, Ko = za.apply, Go = za.construct;
kt || (kt = function(t) {
  return t;
});
$t || ($t = function(t) {
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
const sr = yt(Array.prototype.forEach), t_ = yt(Array.prototype.lastIndexOf), Ps = yt(Array.prototype.pop), Ir = yt(Array.prototype.push), n_ = yt(Array.prototype.splice), wr = Array.isArray, qr = yt(String.prototype.toLowerCase), zo = yt(String.prototype.toString), js = yt(String.prototype.match), zr = yt(String.prototype.replace), Bs = yt(String.prototype.indexOf), r_ = yt(String.prototype.trim), o_ = yt(Number.prototype.toString), s_ = yt(Boolean.prototype.toString), Fs = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Hs = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), Vt = yt(Object.prototype.hasOwnProperty), Lr = yt(Object.prototype.toString), zt = yt(RegExp.prototype.test), qn = a_(TypeError);
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
    return zt(e, ""), !0;
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
]), Lo = kt([
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
]), f_ = $t(/{{[\w\W]*|^[\w\W]*}}/g), __ = $t(/<%[\w\W]*|^[\w\W]*%>/g), p_ = $t(/\${[\w\W]*/g), h_ = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), m_ = $t(/^aria-[\-\w]+$/), Gs = $t(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), g_ = $t(/^(?:\w+script|data):/i), y_ = $t(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), b_ = $t(/^html$/i), x_ = $t(/^[a-z][.\w]*(-[.\w]+)+$/i), Vs = $t(/<[/\w!]/g), Ys = $t(/<[/\w]/g), v_ = $t(/<\/no(script|embed|frames)/i), w_ = $t(/\/>/i), tn = {
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
], k_ = kt(We({}, La)), N_ = (function() {
  const e = {};
  return sr(La, (t) => {
    e[t] = $t(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), S_ = function() {
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
  return Vt(t, n) && wr(t[n]) ? We(a.base ? on(a.base) : {}, t[n], a.transform) : r;
}, Bo = function(t, n, r) {
  const a = Vt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? on(a) : r();
};
function Ra() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S_();
  const t = (se) => Ra(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, _ = e.trustedTypes, u = s.prototype, y = _n(u, "cloneNode"), m = _n(u, "remove"), g = _n(u, "removeAttributeNode"), p = _n(u, "nextSibling"), b = _n(u, "childNodes"), h = _n(u, "parentNode"), f = _n(u, "shadowRoot"), x = _n(u, "attributes"), N = c && c.prototype ? _n(c.prototype, "nodeType") : null, v = c && c.prototype ? _n(c.prototype, "nodeName") : null, C = c && c.prototype ? _n(c.prototype, "ownerDocument") : null, S = function($) {
    return N ? N($) : $.nodeType;
  }, O = function($) {
    return v ? v($) : $.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let E, I = "", D, T = !1, w = 0;
  const k = function() {
    if (w > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, A = function($) {
    k(), w++;
    try {
      return E.createHTML($);
    } finally {
      w--;
    }
  }, R = function($) {
    k(), w++;
    try {
      return E.createScriptURL($);
    } finally {
      w--;
    }
  }, z = function() {
    return T || (D = $_(_, a), T = !0), D;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let ae = Xs();
  t.isSupported = typeof Ia == "function" && typeof h == "function" && F && F.createHTMLDocument !== void 0;
  const _e = f_, K = __, me = p_, ue = h_, xe = m_, pe = g_, Me = y_, G = x_;
  let Oe = Gs, re = null;
  const Ae = We({}, [
    ...Us,
    ...Lo,
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
  })), Qe = null, At = null;
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
  let bt = !0, Z = !0, L = !1, Y = !0, Q = !1, ge = !0, le = !1, Ee = !1, je = null, Ze = null, et = !1, rt = !1, Xt = !1, oe = !1, Le = !0, Nt = !1;
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
  ], zo), ke = kt([
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
  let ot = null;
  const Et = ["application/xhtml+xml", "text/html"], ht = "text/html";
  let ze = null, Tt = null;
  const Zt = n.createElement("form"), hn = function($) {
    return $ instanceof RegExp || $ instanceof Function;
  }, Cn = function() {
    let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === $) return;
    (!$ || typeof $ != "object") && ($ = {}), $ = on($), ot = Et.indexOf($.PARSER_MEDIA_TYPE) === -1 ? ht : $.PARSER_MEDIA_TYPE, ze = ot === "application/xhtml+xml" ? zo : qr, re = Kn($, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Kn($, "ALLOWED_ATTR", Fe, { transform: ze }), de = Kn($, "ALLOWED_NAMESPACES", Ne, { transform: zo }), he = Kn($, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), ct = Kn($, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Kn($, "FORBID_CONTENTS", Ot, { transform: ze }), Qe = Kn($, "FORBID_TAGS", on({}), { transform: ze }), At = Kn($, "FORBID_ATTR", on({}), { transform: ze }), qe = Vt($, "USE_PROFILES") ? $.USE_PROFILES && typeof $.USE_PROFILES == "object" ? on($.USE_PROFILES) : $.USE_PROFILES : !1, bt = $.ALLOW_ARIA_ATTR !== !1, Z = $.ALLOW_DATA_ATTR !== !1, L = $.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = $.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = $.SAFE_FOR_TEMPLATES || !1, ge = $.SAFE_FOR_XML !== !1, le = $.WHOLE_DOCUMENT || !1, rt = $.RETURN_DOM || !1, Xt = $.RETURN_DOM_FRAGMENT || !1, oe = $.RETURN_TRUSTED_TYPE || !1, et = $.FORCE_BODY || !1, Le = $.SANITIZE_DOM !== !1, Nt = $.SANITIZE_NAMED_PROPS || !1, xt = $.KEEP_CONTENT !== !1, Ie = $.IN_PLACE || !1, Oe = c_($.ALLOWED_URI_REGEXP) ? $.ALLOWED_URI_REGEXP : Gs, q = typeof $.NAMESPACE == "string" ? $.NAMESPACE : Xe, Ce = Bo($, "MATHML_TEXT_INTEGRATION_POINTS", () => We({}, ke)), Be = Bo($, "HTML_INTEGRATION_POINTS", () => We({}, Ke));
    const P = Bo($, "CUSTOM_ELEMENT_HANDLING", () => xr(null));
    if (Ge = xr(null), Vt(P, "tagNameCheck") && hn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && hn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), $t(Ge), Q && (Z = !1), Xt && (rt = !0), qe && (re = We({}, Ws), fe = xr(null), qe.html === !0 && (We(re, Us), We(fe, qs)), qe.svg === !0 && (We(re, Lo), We(fe, jo), We(fe, so)), qe.svgFilters === !0 && (We(re, Ro), We(fe, jo), We(fe, so)), qe.mathMl === !0 && (We(re, Po), We(fe, Ks), We(fe, so))), it.tagCheck = null, it.attributeCheck = null, Vt($, "ADD_TAGS") && (typeof $.ADD_TAGS == "function" ? it.tagCheck = $.ADD_TAGS : wr($.ADD_TAGS) && (re === Ae && (re = on(re)), We(re, $.ADD_TAGS, ze))), Vt($, "ADD_ATTR") && (typeof $.ADD_ATTR == "function" ? it.attributeCheck = $.ADD_ATTR : wr($.ADD_ATTR) && (fe === Fe && (fe = on(fe)), We(fe, $.ADD_ATTR, ze))), Vt($, "ADD_FORBID_CONTENTS") && wr($.ADD_FORBID_CONTENTS) && (vt === Ot && (vt = on(vt)), We(vt, $.ADD_FORBID_CONTENTS, ze)), xt && (re["#text"] = !0), le && We(re, [
      "html",
      "head",
      "body"
    ]), re.table && (We(re, ["tbody"]), delete Qe.tbody), $.TRUSTED_TYPES_POLICY) {
      if (typeof $.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof $.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = E;
      E = $.TRUSTED_TYPES_POLICY;
      try {
        I = A("");
      } catch (ce) {
        throw E = J, ce;
      }
    } else $.TRUSTED_TYPES_POLICY === null ? (E = void 0, I = "") : (E === void 0 && (E = z()), E && typeof I == "string" && (I = A("")));
    kt && kt($), Tt = $;
  }, Fn = We({}, [
    ...Lo,
    ...Ro,
    ...d_
  ]), kn = We({}, [...Po, ...u_]), Zr = function($, P, J) {
    return P.namespaceURI === Xe ? $ === "svg" : P.namespaceURI === Ye ? $ === "svg" && (J === "annotation-xml" || Ce[J]) : !!Fn[$];
  }, $o = function($, P, J) {
    return P.namespaceURI === Xe ? $ === "math" : P.namespaceURI === Pt ? $ === "math" && Be[J] : !!kn[$];
  }, Oo = function($, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !kn[$] && (dt[$] || !Fn[$]);
  }, Eo = function($) {
    let P = h($);
    (!P || !P.tagName) && (P = {
      namespaceURI: q,
      tagName: "template"
    });
    const J = qr($.tagName), ce = qr(P.tagName);
    return de[$.namespaceURI] ? $.namespaceURI === Pt ? Zr(J, P, ce) : $.namespaceURI === Ye ? $o(J, P, ce) : $.namespaceURI === Xe ? Oo(J, P, ce) : !!(ot === "application/xhtml+xml" && de[$.namespaceURI]) : !1;
  }, mn = function($) {
    Ir(t.removed, { element: $ });
    try {
      h($).removeChild($);
    } catch {
      if (m($), !h($)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function($, P, J) {
    try {
      g($, P);
    } catch {
      try {
        $.removeAttribute(J);
      } catch {
      }
    }
  }, gn = function($) {
    H($);
    const P = b($);
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
    const J = x($);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Jr($, Te, Pe);
    }
  }, jt = function($, P, J) {
    if (!J) try {
      J = P.getAttributeNode($);
    } catch {
      J = null;
    }
    Ir(t.removed, {
      attribute: J || null,
      from: P
    });
    try {
      J ? g(P, J) : P.removeAttribute($);
    } catch {
      try {
        P.removeAttribute($);
      } catch {
      }
    }
    if ($ === "is")
      if (rt || Xt) try {
        mn(P);
      } catch {
      }
      else try {
        P.setAttribute($, "");
      } catch {
      }
  }, Nr = function($) {
    const P = x($);
    if (P)
      for (let J = P.length - 1; J >= 0; --J) {
        const ce = P[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Jr($, ce, Te);
      }
  }, H = function($) {
    const P = [$];
    for (; P.length > 0; ) {
      const J = P.pop();
      S(J) === tn.element && Nr(J);
      const ce = b(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function($, P) {
    return ge ? $ === "patchsrc" ? !0 : $ === "for" && P !== "label" && P !== "output" : !1;
  }, ye = function($) {
    if (!ge) return;
    const P = [$];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Ys, J.data)) {
        try {
          m(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = ze(O(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = b(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) P.push(Te[Pe]);
    }
  }, ve = function($) {
    let P = null, J = null;
    if (et) $ = "<remove></remove>" + $;
    else {
      const Pe = js($, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    ot === "application/xhtml+xml" && q === Xe && ($ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + $ + "</body></html>");
    const ce = E ? A($) : $;
    if (q === Xe) try {
      P = new d().parseFromString(ce, ot);
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
    return $ && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), q === Xe ? te.call(P, le ? "html" : "body")[0] : le ? P.documentElement : Te;
  }, tt = function($) {
    const P = C ? C($) : $.ownerDocument;
    return X.call(P || $, $, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, Mt = function($) {
    return $ = zr($, _e, " "), $ = zr($, K, " "), $ = zr($, me, " "), $;
  }, wt = function($) {
    var P;
    $.normalize();
    const J = C ? C($) : $.ownerDocument, ce = X.call(J || $, $, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Mt(Te.data), Te = ce.nextNode();
    const Pe = (P = $.querySelectorAll) === null || P === void 0 ? void 0 : P.call($, "template");
    Pe && sr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, yn = function($) {
    const P = v ? v($) : null;
    return typeof P != "string" || ze(P) !== "form" ? !1 : typeof $.nodeName != "string" || typeof $.textContent != "string" || typeof $.removeChild != "function" || $.attributes !== x($) || typeof $.removeAttribute != "function" || typeof $.removeAttributeNode != "function" || typeof $.getAttributeNode != "function" || typeof $.setAttribute != "function" || typeof $.namespaceURI != "string" || typeof $.insertBefore != "function" || typeof $.hasChildNodes != "function" || $.nodeType !== N($) || $.childNodes !== b($);
  }, Ct = function($) {
    if (!N || typeof $ != "object" || $ === null) return !1;
    try {
      return N($) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, gt = function($) {
    if (!N || typeof $ != "object" || $ === null) return !1;
    try {
      return typeof N($) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(se, $, P) {
    se.length !== 0 && sr(se, (J) => {
      J.call(t, $, P, Tt);
    });
  }
  const To = function($, P) {
    return !!(ge && $.hasChildNodes() && !gt($.firstElementChild) && zt(Vs, $.textContent) && zt(Vs, $.innerHTML) || ge && $.namespaceURI === Xe && k_[P] && (gt($.firstElementChild) || typeof $.textContent == "string" && zt(N_[P], $.textContent)) || $.nodeType === tn.processingInstruction || ge && $.nodeType === tn.comment && zt(Ys, $.data));
  }, Qr = function($, P) {
    if ($ instanceof RegExp) return zt($, P);
    if ($ instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!$(P, ...ce);
    }
    return !1;
  }, nl = function($, P, J) {
    if (!Qe[P] && gs(P) && Qr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = h($), Te = b($);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ut = $ === J ? y(Te[He], !0) : Te[He];
          ce.insertBefore(ut, p($));
        }
      }
    }
    return mn($), !0;
  }, ps = function($, P, J, ce) {
    return $.length === 0 ? P : P === J || P === ce ? on(P) : P;
  }, dr = function($, P) {
    return $ === P || h($) !== null ? !1 : (Ie && H($), !0);
  }, hs = function($, P) {
    if (Jt(ae.beforeSanitizeElements, $, null), dr($, P)) return !0;
    if (yn($))
      return mn($), !0;
    const J = ze(O($));
    if (re = ps(ae.uponSanitizeElement, re, Ae, je), Jt(ae.uponSanitizeElement, $, {
      tagName: J,
      allowedTags: re
    }), dr($, P)) return !0;
    if (To($, J))
      return mn($), !0;
    if (Qe[J] || !(it.tagCheck instanceof Function && it.tagCheck(J)) && !re[J]) {
      const ce = nl($, J, P);
      return ce === !1 && (Jt(ae.afterSanitizeElements, $, null), dr($, P)) ? !0 : ce;
    }
    if (S($) === tn.element && !Eo($) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(v_, $.innerHTML))
      return mn($), !0;
    if (Q && $.nodeType === tn.text) {
      const ce = Mt($.textContent);
      $.textContent !== ce && (Ir(t.removed, { element: $.cloneNode() }), $.textContent = ce);
    }
    return Jt(ae.afterSanitizeElements, $, null), dr($, P);
  }, ms = function($, P, J) {
    if (At[P] || U(P, $) || Le && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || it.attributeCheck instanceof Function && it.attributeCheck(P, $);
    return Z && zt(ue, P) || bt && zt(xe, P) ? !0 : ce ? he[P] || zt(Oe, zr(J, Me, "")) || (P === "src" || P === "xlink:href" || P === "href") && $ !== "script" && Bs(J, "data:") === 0 && ct[$] || L && !zt(pe, zr(J, Me, "")) ? !0 : !J : gs($) && Qr(Ge.tagNameCheck, $) && Qr(Ge.attributeNameCheck, P, $) || P === "is" && Ge.allowCustomizedBuiltInElements && Qr(Ge.tagNameCheck, J);
  }, rl = We({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), gs = function($) {
    return !rl[qr($)] && zt(G, $);
  }, ol = function($, P, J, ce) {
    if (E && typeof _ == "object" && typeof _.getAttributeType == "function" && !J) switch (_.getAttributeType($, P)) {
      case "TrustedHTML":
        return A(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, sl = function($, P, J, ce) {
    try {
      return J ? $.setAttributeNS(J, P, ce) : $.setAttribute(P, ce), yn($) ? (mn($), !1) : !0;
    } catch {
      return jt(P, $), !1;
    }
  }, ys = function($, P) {
    if (Jt(ae.beforeSanitizeAttributes, $, null), dr($, P)) return;
    const J = $.attributes;
    if (!J || yn($)) return;
    fe = ps(ae.uponSanitizeAttribute, fe, Fe, Ze);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = ze($.nodeName);
    for (; Te--; ) {
      const He = J[Te], ut = He.name, cn = He.namespaceURI, Qt = He.value, ur = ze(ut), Ao = Qt;
      let Bt = ut === "value" ? Ao : r_(Ao), bs = !1;
      if (ce.attrName = ur, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(ae.uponSanitizeAttribute, $, ce), Bt = ce.attrValue, Nt && (ur === "id" || ur === "name") && Bs(Bt, Rt) !== 0 && (jt(ut, $, He), Bt = Rt + Bt, bs = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ut, $, He);
        continue;
      }
      if (ur === "attributename" && js(Bt, "href")) {
        jt(ut, $, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ut, $, He);
          continue;
        }
        if (!Y && zt(w_, Bt)) {
          jt(ut, $, He);
          continue;
        }
        if (Q && (Bt = Mt(Bt)), !ms(Pe, ur, Bt)) {
          jt(ut, $, He);
          continue;
        }
        Bt = ol(Pe, ur, cn, Bt), Bt !== Ao && sl($, ut, cn, Bt) && bs && Ps(t.removed);
      }
    }
    Jt(ae.afterSanitizeAttributes, $, null), dr($, P);
  }, eo = function($) {
    let P = null;
    const J = tt($);
    for (Jt(ae.beforeSanitizeShadowDOM, $, null); P = J.nextNode(); )
      if (Jt(ae.uponSanitizeShadowNode, P, null), hs(P, $), ys(P, $), Ct(P.content) && eo(P.content), S(P) === tn.element) {
        const ce = f(P);
        Ct(ce) && (Co(ce), eo(ce));
      }
    Jt(ae.afterSanitizeShadowDOM, $, null);
  }, Co = function($) {
    const P = [{
      node: $,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        eo(J.shadow);
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
        const He = f(ce);
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
    let $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, J = null, ce = null, Te = null;
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = i_(se), typeof se != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (re = je, fe = Ze) : Cn($), (ae.uponSanitizeElement.length > 0 || ae.uponSanitizeAttribute.length > 0) && (re = on(re)), ae.uponSanitizeAttribute.length > 0 && (fe = on(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      ye(se);
      const cn = O(se);
      if (typeof cn == "string") {
        const Qt = ze(cn);
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
      if (!rt && !Q && !le && se.indexOf("<") === -1) return E && oe ? A(se) : se;
      if (P = ve(se), !P) return rt ? null : oe ? I : "";
    }
    P && et && mn(P.firstChild);
    const He = Pe ? se : P;
    try {
      const cn = tt(He);
      for (; ce = cn.nextNode(); )
        hs(ce, He), ys(ce, He), Ct(ce.content) && eo(ce.content);
    } catch (cn) {
      throw Pe && (gn(se), sr(t.removed, (Qt) => {
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
    if (rt) {
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ut = le ? P.outerHTML : P.innerHTML;
    return le && re["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(b_, P.ownerDocument.doctype.name) && (ut = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ut), Q && (ut = Mt(ut)), E && oe ? A(ut) : ut;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cn(se), Ee = !0, je = re, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, E = D, I = "";
  }, t.isValidAttribute = function(se, $, P) {
    Tt || Cn({});
    const J = ze(se), ce = ze($);
    return ms(J, ce, P);
  }, t.addHook = function(se, $) {
    typeof $ == "function" && Vt(ae, se) && Ir(ae[se], $);
  }, t.removeHook = function(se, $) {
    if (Vt(ae, se)) {
      if ($ !== void 0) {
        const P = t_(ae[se], $);
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
    const _ = d ? "ol" : "ul";
    i.push(
      `<${_}>${l.map((u) => `<li>${lo(u, n)}</li>`).join("")}</${_}>`
    );
  };
  for (; c < r.length; ) {
    const l = a(c) ?? "";
    if (/^\s*$/.test(l)) {
      c += 1;
      continue;
    }
    const d = /^(#{1,6})\s+(.*)$/.exec(l), _ = d?.[1], u = d?.[2];
    if (_ !== void 0 && u !== void 0) {
      i.push(
        `<h${_.length}>${lo(u.trim(), n)}</h${_.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const p = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", b = [];
      for (c += 1; c < r.length; ) {
        const f = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(f)) break;
        b.push(f), c += 1;
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
function d$({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = $e(
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
const A_ = "_editor_2a7al_3", M_ = "_toolbar_2a7al_13", D_ = "_tool_2a7al_13", I_ = "_separator_2a7al_56", z_ = "_area_2a7al_63", L_ = "_source_2a7al_73", R_ = "_alignGlyph_2a7al_84", P_ = "_colorInput_2a7al_89", j_ = "_select_2a7al_98", St = {
  editor: A_,
  toolbar: M_,
  tool: D_,
  separator: I_,
  area: z_,
  source: L_,
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
const u$ = at(
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
    className: _,
    sanitize: u = !0
  }, y) {
    const [m, g] = W(!1), [p, b] = W(n), [h, f] = W(
      null
    ), [x, N] = W(""), [v, C] = W(""), [S, O] = W(2), [E, I] = W(2), [D, T] = W(!1), w = ne(null), k = ne(null), A = ne(n), R = B(
      (G) => u ? Pa.sanitize(G) : G,
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
      (G, Oe) => {
        if (s || l) return !1;
        w.current?.focus();
        const re = Vo(G, Oe);
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
    }, []), te = $e(
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
      s || l || (m ? (g(!1), z(p)) : (b(w.current?.innerHTML ?? ""), g(!0)));
    }, [m, p, z, s, l]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || s || l) return;
        const Oe = G.key.toLowerCase(), re = Oe === "b" ? "bold" : Oe === "i" ? "italic" : Oe === "u" ? "underline" : null;
        re && (G.preventDefault(), we(re));
      },
      [we, s, l]
    ), K = B(() => {
      const G = w.current;
      G && z(G.innerHTML);
    }, [z]), me = B(() => {
      x.trim() && (j("createLink", x.trim()), N(""), f(null));
    }, [x, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), C(""), f(null));
    }, [v, j]), xe = B(
      async (G) => {
        if (c) {
          T(!0);
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
            T(!1), f(null);
          }
        }
      },
      [c, a, j]
    ), pe = B(() => {
      const G = Math.max(1, Math.min(10, Math.floor(S) || 1)), Oe = Math.max(1, Math.min(10, Math.floor(E) || 1)), re = Array.from({ length: Oe }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: G }, () => `<tr>${re}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Ae}</tbody></table>`), f(null);
    }, [S, E, j]), Me = (G, Oe) => {
      if (G === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: St.separator
          },
          `sep-${Oe}`
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
        return /* @__PURE__ */ M("label", { className: St.tool, title: Ae, children: [
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? U_ : G === "fontName" ? F_ : H_;
        return /* @__PURE__ */ M(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: l,
            defaultValue: "",
            className: St.select,
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
            className: St.tool,
            "aria-label": "Insert link",
            disabled: l,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !l && (N(""), f("link"));
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
              !s && !l && (C(""), f("image"));
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
              !s && !l && (O(2), I(2), f("table"));
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
    return /* @__PURE__ */ M("div", { className: [St.editor, _].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: St.toolbar,
          children: i.map((G, Oe) => Me(G, Oe))
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
            b(G.target.value), z(G.target.value);
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
      /* @__PURE__ */ M(
        Ca,
        {
          open: h !== null,
          onClose: () => f(null),
          title: h === "link" ? "Insert link" : h === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ M(st, { children: [
            /* @__PURE__ */ o(ln, { variant: "text", onClick: () => f(null), children: "Cancel" }),
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
            h === "image" && /* @__PURE__ */ M(st, { children: [
              /* @__PURE__ */ o(ar, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: (Oe) => C(Oe.target.value)
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
                  onChange: (Oe) => {
                    const re = Oe.target.files?.[0];
                    re && xe(re), Oe.target.value = "";
                  }
                }
              ) }),
              D && /* @__PURE__ */ o(Aa, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            h === "table" && /* @__PURE__ */ M(st, { children: [
              /* @__PURE__ */ o(ar, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: (Oe) => O(Number(Oe.target.value))
                }
              ) }),
              /* @__PURE__ */ o(ar, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ o(
                no,
                {
                  id: G,
                  type: "number",
                  value: String(E),
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
function f$() {
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
function _$({ children: e }) {
  const [t, n] = W(null), r = ne(0), a = ne(null), i = B(() => {
    a.current?.(), a.current = null;
  }, []), c = B(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = B(
    (d) => {
      r.current += 1;
      const _ = r.current;
      a.current = d.onClose ?? null, n({
        ...d,
        seq: _,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), d.onOpen?.();
      let u = !1;
      return () => {
        u || (u = !0, n((y) => y?.seq !== _ ? y : (y.invoker && document.body.contains(y.invoker) && y.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  be(() => {
    if (!t) return;
    const d = (m) => {
      const g = document.querySelector(`.${ja.popup}`);
      g && !g.contains(m.target) && c();
    }, _ = (m) => {
      m.key === "Escape" && (m.preventDefault(), c());
    }, u = () => c(), y = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", _, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", y), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", _, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", y);
    };
  }, [t, c]);
  const l = $e(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ M(Ba.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(G_, { state: t }, t.seq)
  ] });
}
const V_ = "_alert_146r9_1", Y_ = "_xs_146r9_28", X_ = "_sm_146r9_38", Z_ = "_lg_146r9_48", J_ = "_xl_146r9_58", Q_ = "_primary_146r9_69", ep = "_secondary_146r9_74", tp = "_light_146r9_79", np = "_base_146r9_84", rp = "_dark_146r9_89", op = "_info_146r9_94", sp = "_success_146r9_99", ap = "_warning_146r9_104", lp = "_danger_146r9_109", ip = "_flat_146r9_116", cp = "_outlined_146r9_123", dp = "_filled_146r9_132", up = "_text_146r9_139", fp = "_icon_146r9_181", _p = "_content_146r9_192", pp = "_title_146r9_197", hp = "_body_146r9_203", mp = "_dismiss_146r9_209", Sn = {
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
function p$({
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
  visible: _,
  onVisibleChange: u,
  className: y,
  ...m
}) {
  const [g, p] = W(!1);
  if (_ === !1 || _ === void 0 && g)
    return null;
  const b = () => {
    _ === void 0 && p(!0), d?.(), u?.(!1);
  }, h = e, f = Na(t, "filled"), x = Vr(n), N = i ?? (c ? /* @__PURE__ */ o(De, { icon: gp[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        Sn.alert,
        Sn[h],
        Sn[f],
        x ? Sn[x] : null,
        Sn[r],
        y
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ o("span", { className: Sn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ M("div", { className: Sn.content, children: [
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
      className: [ea.skeleton, ea[e], r].filter(Boolean).join(" "),
      style: a
    }
  );
}
function xo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const wp = "_row_juebr_1", kp = "_start_juebr_14", Np = "_center_juebr_18", Sp = "_end_juebr_22", $p = "_stretch_juebr_26", Op = "_baseline_juebr_30", Ep = "_normal_juebr_34", Tp = "_noWrap_juebr_90", Cp = "_wrapReverse_juebr_94", io = {
  row: wp,
  start: kp,
  center: Np,
  end: Sp,
  stretch: $p,
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
function m$({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...s
}) {
  const l = e != null ? xo(e) : null, d = t != null ? xo(t) : null, _ = {
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
      style: _,
      ...s
    }
  );
}
const Ap = "_column_sh0ss_1", Mp = "_Size1_sh0ss_15", Dp = "_Size2_sh0ss_24", Ip = "_Size3_sh0ss_33", zp = "_Size4_sh0ss_42", Lp = "_Size5_sh0ss_51", Rp = "_Size6_sh0ss_60", Pp = "_Size7_sh0ss_69", jp = "_Size8_sh0ss_78", Bp = "_Size9_sh0ss_87", Fp = "_Size10_sh0ss_96", Hp = "_Size11_sh0ss_105", Up = "_Size12_sh0ss_114", Wp = "_Offset0_sh0ss_119", qp = "_Offset1_sh0ss_122", Kp = "_Offset2_sh0ss_127", Gp = "_Offset3_sh0ss_132", Vp = "_Offset4_sh0ss_137", Yp = "_Offset5_sh0ss_142", Xp = "_Offset6_sh0ss_147", Zp = "_Offset7_sh0ss_152", Jp = "_Offset8_sh0ss_157", Qp = "_Offset9_sh0ss_162", eh = "_Offset10_sh0ss_167", th = "_Offset11_sh0ss_172", nh = "_Offset12_sh0ss_177", rh = "_OrderFirst_sh0ss_182", oh = "_OrderLast_sh0ss_185", sh = "_Order0_sh0ss_188", ah = "_Order1_sh0ss_191", lh = "_Order2_sh0ss_194", ih = "_Order3_sh0ss_197", ch = "_Order4_sh0ss_200", dh = "_Order5_sh0ss_203", uh = "_Order6_sh0ss_206", fh = "_Order7_sh0ss_209", _h = "_Order8_sh0ss_212", ph = "_Order9_sh0ss_215", hh = "_Order10_sh0ss_218", mh = "_Order11_sh0ss_221", gh = "_Order12_sh0ss_224", yh = "_xsSize1_sh0ss_229", bh = "_xsSize2_sh0ss_238", xh = "_xsSize3_sh0ss_247", vh = "_xsSize4_sh0ss_256", wh = "_xsSize5_sh0ss_265", kh = "_xsSize6_sh0ss_274", Nh = "_xsSize7_sh0ss_283", Sh = "_xsSize8_sh0ss_292", $h = "_xsSize9_sh0ss_301", Oh = "_xsSize10_sh0ss_310", Eh = "_xsSize11_sh0ss_321", Th = "_xsSize12_sh0ss_332", Ch = "_xsOffset0_sh0ss_337", Ah = "_xsOffset1_sh0ss_340", Mh = "_xsOffset2_sh0ss_345", Dh = "_xsOffset3_sh0ss_350", Ih = "_xsOffset4_sh0ss_355", zh = "_xsOffset5_sh0ss_360", Lh = "_xsOffset6_sh0ss_365", Rh = "_xsOffset7_sh0ss_370", Ph = "_xsOffset8_sh0ss_375", jh = "_xsOffset9_sh0ss_380", Bh = "_xsOffset10_sh0ss_385", Fh = "_xsOffset11_sh0ss_391", Hh = "_xsOffset12_sh0ss_397", Uh = "_xsOrderFirst_sh0ss_403", Wh = "_xsOrderLast_sh0ss_406", qh = "_xsOrder0_sh0ss_409", Kh = "_xsOrder1_sh0ss_412", Gh = "_xsOrder2_sh0ss_415", Vh = "_xsOrder3_sh0ss_418", Yh = "_xsOrder4_sh0ss_421", Xh = "_xsOrder5_sh0ss_424", Zh = "_xsOrder6_sh0ss_427", Jh = "_xsOrder7_sh0ss_430", Qh = "_xsOrder8_sh0ss_433", em = "_xsOrder9_sh0ss_436", tm = "_xsOrder10_sh0ss_439", nm = "_xsOrder11_sh0ss_442", rm = "_xsOrder12_sh0ss_445", om = "_smSize1_sh0ss_451", sm = "_smSize2_sh0ss_460", am = "_smSize3_sh0ss_469", lm = "_smSize4_sh0ss_478", im = "_smSize5_sh0ss_487", cm = "_smSize6_sh0ss_496", dm = "_smSize7_sh0ss_505", um = "_smSize8_sh0ss_514", fm = "_smSize9_sh0ss_523", _m = "_smSize10_sh0ss_532", pm = "_smSize11_sh0ss_543", hm = "_smSize12_sh0ss_554", mm = "_smOffset0_sh0ss_559", gm = "_smOffset1_sh0ss_562", ym = "_smOffset2_sh0ss_567", bm = "_smOffset3_sh0ss_572", xm = "_smOffset4_sh0ss_577", vm = "_smOffset5_sh0ss_582", wm = "_smOffset6_sh0ss_587", km = "_smOffset7_sh0ss_592", Nm = "_smOffset8_sh0ss_597", Sm = "_smOffset9_sh0ss_602", $m = "_smOffset10_sh0ss_607", Om = "_smOffset11_sh0ss_613", Em = "_smOffset12_sh0ss_619", Tm = "_smOrderFirst_sh0ss_625", Cm = "_smOrderLast_sh0ss_628", Am = "_smOrder0_sh0ss_631", Mm = "_smOrder1_sh0ss_634", Dm = "_smOrder2_sh0ss_637", Im = "_smOrder3_sh0ss_640", zm = "_smOrder4_sh0ss_643", Lm = "_smOrder5_sh0ss_646", Rm = "_smOrder6_sh0ss_649", Pm = "_smOrder7_sh0ss_652", jm = "_smOrder8_sh0ss_655", Bm = "_smOrder9_sh0ss_658", Fm = "_smOrder10_sh0ss_661", Hm = "_smOrder11_sh0ss_664", Um = "_smOrder12_sh0ss_667", Wm = "_mdSize1_sh0ss_673", qm = "_mdSize2_sh0ss_682", Km = "_mdSize3_sh0ss_691", Gm = "_mdSize4_sh0ss_700", Vm = "_mdSize5_sh0ss_709", Ym = "_mdSize6_sh0ss_718", Xm = "_mdSize7_sh0ss_727", Zm = "_mdSize8_sh0ss_736", Jm = "_mdSize9_sh0ss_745", Qm = "_mdSize10_sh0ss_754", e1 = "_mdSize11_sh0ss_765", t1 = "_mdSize12_sh0ss_776", n1 = "_mdOffset0_sh0ss_781", r1 = "_mdOffset1_sh0ss_784", o1 = "_mdOffset2_sh0ss_789", s1 = "_mdOffset3_sh0ss_794", a1 = "_mdOffset4_sh0ss_799", l1 = "_mdOffset5_sh0ss_804", i1 = "_mdOffset6_sh0ss_809", c1 = "_mdOffset7_sh0ss_814", d1 = "_mdOffset8_sh0ss_819", u1 = "_mdOffset9_sh0ss_824", f1 = "_mdOffset10_sh0ss_829", _1 = "_mdOffset11_sh0ss_835", p1 = "_mdOffset12_sh0ss_841", h1 = "_mdOrderFirst_sh0ss_847", m1 = "_mdOrderLast_sh0ss_850", g1 = "_mdOrder0_sh0ss_853", y1 = "_mdOrder1_sh0ss_856", b1 = "_mdOrder2_sh0ss_859", x1 = "_mdOrder3_sh0ss_862", v1 = "_mdOrder4_sh0ss_865", w1 = "_mdOrder5_sh0ss_868", k1 = "_mdOrder6_sh0ss_871", N1 = "_mdOrder7_sh0ss_874", S1 = "_mdOrder8_sh0ss_877", $1 = "_mdOrder9_sh0ss_880", O1 = "_mdOrder10_sh0ss_883", E1 = "_mdOrder11_sh0ss_886", T1 = "_mdOrder12_sh0ss_889", C1 = "_lgSize1_sh0ss_895", A1 = "_lgSize2_sh0ss_904", M1 = "_lgSize3_sh0ss_913", D1 = "_lgSize4_sh0ss_922", I1 = "_lgSize5_sh0ss_931", z1 = "_lgSize6_sh0ss_940", L1 = "_lgSize7_sh0ss_949", R1 = "_lgSize8_sh0ss_958", P1 = "_lgSize9_sh0ss_967", j1 = "_lgSize10_sh0ss_976", B1 = "_lgSize11_sh0ss_987", F1 = "_lgSize12_sh0ss_998", H1 = "_lgOffset0_sh0ss_1003", U1 = "_lgOffset1_sh0ss_1006", W1 = "_lgOffset2_sh0ss_1011", q1 = "_lgOffset3_sh0ss_1016", K1 = "_lgOffset4_sh0ss_1021", G1 = "_lgOffset5_sh0ss_1026", V1 = "_lgOffset6_sh0ss_1031", Y1 = "_lgOffset7_sh0ss_1036", X1 = "_lgOffset8_sh0ss_1041", Z1 = "_lgOffset9_sh0ss_1046", J1 = "_lgOffset10_sh0ss_1051", Q1 = "_lgOffset11_sh0ss_1057", eg = "_lgOffset12_sh0ss_1063", tg = "_lgOrderFirst_sh0ss_1069", ng = "_lgOrderLast_sh0ss_1072", rg = "_lgOrder0_sh0ss_1075", og = "_lgOrder1_sh0ss_1078", sg = "_lgOrder2_sh0ss_1081", ag = "_lgOrder3_sh0ss_1084", lg = "_lgOrder4_sh0ss_1087", ig = "_lgOrder5_sh0ss_1090", cg = "_lgOrder6_sh0ss_1093", dg = "_lgOrder7_sh0ss_1096", ug = "_lgOrder8_sh0ss_1099", fg = "_lgOrder9_sh0ss_1102", _g = "_lgOrder10_sh0ss_1105", pg = "_lgOrder11_sh0ss_1108", hg = "_lgOrder12_sh0ss_1111", mg = "_xlSize1_sh0ss_1117", gg = "_xlSize2_sh0ss_1126", yg = "_xlSize3_sh0ss_1135", bg = "_xlSize4_sh0ss_1144", xg = "_xlSize5_sh0ss_1153", vg = "_xlSize6_sh0ss_1162", wg = "_xlSize7_sh0ss_1171", kg = "_xlSize8_sh0ss_1180", Ng = "_xlSize9_sh0ss_1189", Sg = "_xlSize10_sh0ss_1198", $g = "_xlSize11_sh0ss_1209", Og = "_xlSize12_sh0ss_1220", Eg = "_xlOffset0_sh0ss_1225", Tg = "_xlOffset1_sh0ss_1228", Cg = "_xlOffset2_sh0ss_1233", Ag = "_xlOffset3_sh0ss_1238", Mg = "_xlOffset4_sh0ss_1243", Dg = "_xlOffset5_sh0ss_1248", Ig = "_xlOffset6_sh0ss_1253", zg = "_xlOffset7_sh0ss_1258", Lg = "_xlOffset8_sh0ss_1263", Rg = "_xlOffset9_sh0ss_1268", Pg = "_xlOffset10_sh0ss_1273", jg = "_xlOffset11_sh0ss_1279", Bg = "_xlOffset12_sh0ss_1285", Fg = "_xlOrderFirst_sh0ss_1291", Hg = "_xlOrderLast_sh0ss_1294", Ug = "_xlOrder0_sh0ss_1297", Wg = "_xlOrder1_sh0ss_1300", qg = "_xlOrder2_sh0ss_1303", Kg = "_xlOrder3_sh0ss_1306", Gg = "_xlOrder4_sh0ss_1309", Vg = "_xlOrder5_sh0ss_1312", Yg = "_xlOrder6_sh0ss_1315", Xg = "_xlOrder7_sh0ss_1318", Zg = "_xlOrder8_sh0ss_1321", Jg = "_xlOrder9_sh0ss_1324", Qg = "_xlOrder10_sh0ss_1327", ey = "_xlOrder11_sh0ss_1330", ty = "_xlOrder12_sh0ss_1333", ny = "_xxSize1_sh0ss_1339", ry = "_xxSize2_sh0ss_1348", oy = "_xxSize3_sh0ss_1357", sy = "_xxSize4_sh0ss_1366", ay = "_xxSize5_sh0ss_1375", ly = "_xxSize6_sh0ss_1384", iy = "_xxSize7_sh0ss_1393", cy = "_xxSize8_sh0ss_1402", dy = "_xxSize9_sh0ss_1411", uy = "_xxSize10_sh0ss_1420", fy = "_xxSize11_sh0ss_1431", _y = "_xxSize12_sh0ss_1442", py = "_xxOffset0_sh0ss_1447", hy = "_xxOffset1_sh0ss_1450", my = "_xxOffset2_sh0ss_1455", gy = "_xxOffset3_sh0ss_1460", yy = "_xxOffset4_sh0ss_1465", by = "_xxOffset5_sh0ss_1470", xy = "_xxOffset6_sh0ss_1475", vy = "_xxOffset7_sh0ss_1480", wy = "_xxOffset8_sh0ss_1485", ky = "_xxOffset9_sh0ss_1490", Ny = "_xxOffset10_sh0ss_1495", Sy = "_xxOffset11_sh0ss_1501", $y = "_xxOffset12_sh0ss_1507", Oy = "_xxOrderFirst_sh0ss_1513", Ey = "_xxOrderLast_sh0ss_1516", Ty = "_xxOrder0_sh0ss_1519", Cy = "_xxOrder1_sh0ss_1522", Ay = "_xxOrder2_sh0ss_1525", My = "_xxOrder3_sh0ss_1528", Dy = "_xxOrder4_sh0ss_1531", Iy = "_xxOrder5_sh0ss_1534", zy = "_xxOrder6_sh0ss_1537", Ly = "_xxOrder7_sh0ss_1540", Ry = "_xxOrder8_sh0ss_1543", Py = "_xxOrder9_sh0ss_1546", jy = "_xxOrder10_sh0ss_1549", By = "_xxOrder11_sh0ss_1552", Fy = "_xxOrder12_sh0ss_1555", co = {
  column: Ap,
  Size1: Mp,
  Size2: Dp,
  Size3: Ip,
  Size4: zp,
  Size5: Lp,
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
  xsSize8: Sh,
  xsSize9: $h,
  xsSize10: Oh,
  xsSize11: Eh,
  xsSize12: Th,
  xsOffset0: Ch,
  xsOffset1: Ah,
  xsOffset2: Mh,
  xsOffset3: Dh,
  xsOffset4: Ih,
  xsOffset5: zh,
  xsOffset6: Lh,
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
  smOffset9: Sm,
  smOffset10: $m,
  smOffset11: Om,
  smOffset12: Em,
  smOrderFirst: Tm,
  smOrderLast: Cm,
  smOrder0: Am,
  smOrder1: Mm,
  smOrder2: Dm,
  smOrder3: Im,
  smOrder4: zm,
  smOrder5: Lm,
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
  mdOrder8: S1,
  mdOrder9: $1,
  mdOrder10: O1,
  mdOrder11: E1,
  mdOrder12: T1,
  lgSize1: C1,
  lgSize2: A1,
  lgSize3: M1,
  lgSize4: D1,
  lgSize5: I1,
  lgSize6: z1,
  lgSize7: L1,
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
  xlSize10: Sg,
  xlSize11: $g,
  xlSize12: Og,
  xlOffset0: Eg,
  xlOffset1: Tg,
  xlOffset2: Cg,
  xlOffset3: Ag,
  xlOffset4: Mg,
  xlOffset5: Dg,
  xlOffset6: Ig,
  xlOffset7: zg,
  xlOffset8: Lg,
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
  xxOffset11: Sy,
  xxOffset12: $y,
  xxOrderFirst: Oy,
  xxOrderLast: Ey,
  xxOrder0: Ty,
  xxOrder1: Cy,
  xxOrder2: Ay,
  xxOrder3: My,
  xxOrder4: Dy,
  xxOrder5: Iy,
  xxOrder6: zy,
  xxOrder7: Ly,
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
function g$({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [D, T, w, k] of Hy) {
    const A = n[T], R = n[w], z = n[k];
    if (A != null) {
      Uy(T, A);
      const j = co[`${D}Size${A}`];
      j && r.push(j);
    }
    if (R != null) {
      Wy(w, R);
      const j = co[`${D}Offset${R}`];
      j && r.push(j);
    }
    if (z != null) {
      const j = co[Ky(D, z, k)];
      j && r.push(j);
    }
  }
  const {
    size: i,
    offset: c,
    sizeXs: s,
    offsetXs: l,
    sizeSm: d,
    offsetSm: _,
    sizeMd: u,
    offsetMd: y,
    sizeLg: m,
    offsetLg: g,
    sizeXl: p,
    offsetXl: b,
    sizeXx: h,
    offsetXx: f,
    order: x,
    orderXs: N,
    orderSm: v,
    orderMd: C,
    orderLg: S,
    orderXl: O,
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
function y$({
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
  const d = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", _ = {
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
      style: _,
      ...l
    }
  );
}
const Vy = "_autogrid_16x9f_1", Yy = {
  autogrid: Vy
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
const Xy = "_layout_fxvw1_1", Zy = "_row_fxvw1_7", Jy = "_grid_fxvw1_21", Qy = "_gridRight_fxvw1_27", e0 = "_gridHeader_fxvw1_31", t0 = "_gridFooter_fxvw1_36", n0 = "_gridContents_fxvw1_41", r0 = "_gridBody_fxvw1_45", Mn = {
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
    const _ = (u) => {
      u.key === "Escape" && c();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [r, t, c]), /* @__PURE__ */ M(st, { children: [
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
function x$(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(st, { children: e.children });
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
  const _ = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, u = _ != null && (_.props.position === "right" || _.props.position === "end");
  if (_) {
    const y = u ? l : s;
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          Mn.layout,
          Mn.grid,
          u ? Mn.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          a.length > 0 && /* @__PURE__ */ o("div", { className: Mn.gridHeader, children: a }),
          /* @__PURE__ */ M("div", { className: Mn.gridContents, children: [
            y,
            /* @__PURE__ */ o("div", { className: Mn.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: Mn.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Mn.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        a,
        /* @__PURE__ */ M("div", { className: Mn.row, children: [
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
      className: [sa.body, t ? null : sa.bare, n].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}
const N0 = "_toggle_lxnk5_1", S0 = {
  toggle: N0
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
      className: [S0.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ o(De, { icon: e, size: 20 })
    }
  );
}
const $0 = "_track_14127_1", O0 = "_bar_14127_31", E0 = "_primary_14127_39", T0 = "_success_14127_43", C0 = "_warning_14127_47", A0 = "_danger_14127_51", M0 = "_indeterminate_14127_149", D0 = "_circular_14127_163", I0 = "_fill_14127_203", nn = {
  track: $0,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: O0,
  primary: E0,
  success: T0,
  warning: C0,
  danger: A0,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: M0,
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
function k$({
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
  const _ = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? _ / t * 100 : 0;
  if (i === "circular") {
    const m = typeof c == "string", g = 2, p = 10.5, b = 2 * Math.PI * p, h = b * (a ? 0.75 : 1), f = a ? 0 : b * (1 - u / 100), x = Vr(r);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: m ? void 0 : c,
        height: m ? void 0 : c,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": d["aria-label"],
        "aria-labelledby": d["aria-labelledby"],
        "aria-valuenow": a ? void 0 : Math.round(_),
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
              strokeDashoffset: f
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
      "aria-valuenow": a ? void 0 : Math.round(_),
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
          style: a ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const z0 = "_wrapper_tk30z_1", L0 = {
  wrapper: z0
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
function N$({
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
  className: _
}) {
  const [u, y] = W(void 0), m = t !== void 0, g = t ?? u ?? j0(r, e) ?? n, p = g ?? "", b = ne(void 0);
  be(() => {
    if (m) return;
    const f = document.documentElement;
    if (g === void 0) {
      b.current !== void 0 && f.getAttribute(a) === b.current && (f.removeAttribute(a), b.current = void 0);
      return;
    }
    f.setAttribute(a, g), b.current = g;
  }, [g, a, m]);
  const h = (f) => {
    const x = f.target.value;
    m || (y(x), B0(r, x)), i?.(x);
  };
  return /* @__PURE__ */ M("label", { className: [L0.wrapper, _].filter(Boolean).join(" "), children: [
    c,
    /* @__PURE__ */ M(lr, { id: l, size: d, value: p, onChange: h, children: [
      g === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      g !== void 0 && !e.includes(g) && /* @__PURE__ */ o("option", { value: g, children: g }),
      e.map((f) => /* @__PURE__ */ o("option", { value: f, children: f }, f))
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
    onClick: _,
    children: u,
    variant: y,
    severity: m,
    shade: g,
    ...p
  }, b) {
    const [h, f] = W(n), x = t ?? h, N = (v) => {
      const C = !x;
      t === void 0 && f(C), r?.(C), _?.(v);
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
        children: x && s !== void 0 ? s : u
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
function S$({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = cs("(prefers-color-scheme: dark)"), [d, _] = W(void 0), u = e !== void 0, y = e ?? d ?? q0(n) ?? t ?? "system", m = y === "system" ? l ? "dark" : "light" : y;
  return be(() => {
    if (!u) {
      if (y === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = y;
    }
  }, [y, u]), /* @__PURE__ */ o(
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
        u || (_(b), K0(n, b)), r?.(b);
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
function $$() {
  return kr().theme;
}
function V0(e) {
  const t = kr();
  t.theme !== e && (t.theme = e, ds(t), qa(Ua, e), Ka());
}
function O$() {
  return kr().appearance;
}
function Y0(e) {
  const t = kr();
  t.appearance !== e && (t.appearance = e, ds(t), qa(Wa, e), Ka());
}
function E$() {
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
  let _ = 1732584193, u = 4023233417, y = 2562383102, m = 271733878;
  for (let p = 0; p < r; p += 64) {
    const b = [];
    for (let v = 0; v < 16; v += 1)
      b.push(i.getUint32(p + v * 4, !0));
    let h = _, f = u, x = y, N = m;
    for (let v = 0; v < 64; v += 1) {
      let C, S;
      v < 16 ? (C = f & x | ~f & N, S = v) : v < 32 ? (C = N & f | ~N & x, S = (5 * v + 1) % 16) : v < 48 ? (C = f ^ x ^ N, S = (3 * v + 5) % 16) : (C = x ^ (f | ~N), S = 7 * v % 16), C = l(l(l(C, h), s[v]), b[S]), h = N, N = x, x = f, f = l(f, d(C, c[Math.floor(v / 16) * 4 + v % 4]));
    }
    _ = l(_, h), u = l(u, f), y = l(y, x), m = l(m, N);
  }
  const g = (p) => {
    let b = "";
    for (let h = 0; h < 4; h += 1)
      b += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return g(_) + g(u) + g(y) + g(m);
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
function T$({
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
  const d = $e(() => e ? db(e) : "?", [e]), _ = $e(() => e ? ub(e) : go[0], [e]), u = $e(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${X0(N)}?d=${r}&s=${cb[c]}&r=${a}`;
  }, [t, n, r, a, c]), y = t ?? u, [m, g] = W(null), p = y != null && m !== y, b = p && i === "", h = i ?? e ?? "avatar", f = s ? `${h}, ${s}` : h, x = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: y,
        alt: b ? "" : s ? f : h,
        onError: () => g(y ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: _r.initials,
      style: { background: _ },
      children: d
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        _r.avatar,
        _r[c],
        s ? _r[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : f,
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
function C$({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c
}) {
  const s = lt(), l = ne(null), [d, _] = W(
    n ?? e[0]?.key ?? ""
  ), u = t ?? d, y = i === "left" || i === "right", m = (b) => {
    _(b), r?.(b);
  }, g = (b) => {
    const h = e.filter((N) => !N.disabled), f = h.findIndex((N) => N.key === u);
    let x = -1;
    b.key === "ArrowRight" || y && b.key === "ArrowDown" ? x = (f + 1) % h.length : b.key === "ArrowLeft" || y && b.key === "ArrowUp" ? x = (f - 1 + h.length) % h.length : b.key === "Home" ? x = 0 : b.key === "End" && (x = h.length - 1), x >= 0 && (b.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[x]?.key ?? "")}"]`
    )?.focus(), m(h[x]?.key ?? ""));
  }, p = e.find((b) => b.key === u);
  return /* @__PURE__ */ M(
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
              const h = b.key === u;
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
const kb = "_root_1l1j2_1", Nb = "_item_1l1j2_9", Sb = "_heading_1l1j2_13", $b = "_trigger_1l1j2_17", Ob = "_disabled_1l1j2_34", Eb = "_title_1l1j2_48", Tb = "_chevron_1l1j2_52", Cb = "_open_1l1j2_59", Ab = "_content_1l1j2_63", In = {
  root: kb,
  item: Nb,
  heading: Sb,
  trigger: $b,
  disabled: Ob,
  title: Eb,
  chevron: Tb,
  open: Cb,
  content: Ab
};
function A$({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const c = lt(), [s, l] = W(
    r ?? []
  ), d = n ?? s, _ = (u) => {
    const y = d.includes(u) ? d.filter((m) => m !== u) : t ? [...d, u] : [u];
    l(y), a?.(y);
  };
  return /* @__PURE__ */ o("div", { className: [In.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const y = d.includes(u.key), m = `${c}-panel-${u.key}`, g = `${c}-trigger-${u.key}`;
    return /* @__PURE__ */ M("div", { className: In.item, children: [
      /* @__PURE__ */ o("h3", { className: In.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: g,
          "aria-expanded": y,
          "aria-controls": m,
          disabled: u.disabled,
          className: [
            In.trigger,
            u.disabled ? In.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => _(u.key),
          children: [
            /* @__PURE__ */ o("span", { className: In.title, children: u.title }),
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
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const Mb = "_textarea_l7fsl_1", Db = "_invalid_l7fsl_27", Ib = "_xs_l7fsl_34", zb = "_sm_l7fsl_39", Lb = "_md_l7fsl_44", Rb = "_lg_l7fsl_49", Pb = "_xl_l7fsl_54", uo = {
  textarea: Mb,
  invalid: Db,
  xs: Ib,
  sm: zb,
  md: Lb,
  lg: Rb,
  xl: Pb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, M$ = at(
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
function D$({
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
  const _ = lt(), u = `${_}-listbox`, y = ne(null), m = ne(null), [g, p] = W(
    n
  ), [b, h] = W(!1), f = t ?? g, x = e.map(
    (w, k) => w.label === "" || w.disabled ? -1 : k
  ).filter((w) => w >= 0), N = e.findIndex(
    (w) => w.value === f
  ), [v, C] = W(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), S = B(() => {
    if (s) return;
    const w = N >= 0 && x.includes(N) ? N : x[0];
    C(w ?? -1), h(!0);
  }, [s, N, x]), O = B(() => {
    h(!1), m.current?.focus();
  }, []);
  be(() => {
    if (!b) return;
    const w = (k) => {
      y.current && !y.current.contains(k.target) && h(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [b]);
  const E = (w) => {
    p(w), r?.(w), h(!1), m.current?.focus();
  }, I = (w) => {
    if (x.length === 0) return;
    const k = x.includes(v) ? x.indexOf(v) : 0, A = x[(k + w + x.length) % x.length];
    A != null && C(A);
  }, D = (w) => {
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
        w.preventDefault(), O();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, T = e.find(
    (w) => w.value === f
  );
  return /* @__PURE__ */ M(
    "div",
    {
      ref: y,
      className: [Ht.root, l].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: m,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": b,
            "aria-controls": u,
            "aria-invalid": c || void 0,
            disabled: s,
            className: [
              Ht.trigger,
              Ht[i],
              b ? Ht.open : null,
              c ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => b ? h(!1) : S(),
            ...d,
            children: [
              /* @__PURE__ */ o("span", { className: T ? Ht.label : Ht.placeholder, children: T ? T.label : a }),
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
            id: u,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${_}-option-${v}` : void 0,
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
                  id: `${_}-option-${k}`,
                  role: "option",
                  "aria-selected": w.value === f,
                  "aria-disabled": w.disabled || void 0,
                  className: [
                    Ht.option,
                    k === v ? Ht.active : null,
                    w.value === f ? Ht.selected : null,
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
const ox = "_root_1ma8a_1", sx = "_wrap_1ma8a_9", ax = "_input_1ma8a_26", lx = "_invalid_1ma8a_31", ix = "_clear_1ma8a_58", cx = "_menu_1ma8a_83", dx = "_option_1ma8a_98", ux = "_disabled_1ma8a_109", fx = "_active_1ma8a_113", _x = "_empty_1ma8a_123", px = "_xs_1ma8a_129", hx = "_sm_1ma8a_136", mx = "_md_1ma8a_143", gx = "_lg_1ma8a_150", yx = "_xl_1ma8a_157", dn = {
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
function I$({
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
  className: _,
  ...u
}) {
  const y = lt(), m = `${y}-listbox`, g = ne(null), p = ne(null), [b, h] = W(n), [f, x] = W(!1), N = t ?? b, v = $e(
    () => N.trim() === "" ? [...e] : e.filter((z) => d(z, N)),
    [e, N, d]
  ), C = v.map((z, j) => z.disabled ? -1 : j).filter((z) => z >= 0), [S, O] = W(-1), E = (z) => {
    h(z), r?.(z);
  }, I = (z) => {
    E(z.label), a?.(z.value, z), x(!1);
  }, D = (z) => {
    if (C.length === 0) return;
    const j = C.includes(S) ? C.indexOf(S) : z === 1 ? -1 : 0, F = C[(j + z + C.length) % C.length];
    F != null && O(F);
  }, T = (z) => {
    l || (E(z.target.value), x(!0), O(-1));
  }, w = () => {
    l || N !== "" && x(!0);
  }, k = (z) => {
    g.current && !g.current.contains(z.relatedTarget) && x(!1);
  }, A = (z) => {
    if (!l)
      switch (z.key) {
        case "ArrowDown":
          z.preventDefault(), f ? D(1) : (x(!0), O(C[0] ?? -1));
          break;
        case "ArrowUp":
          z.preventDefault(), f && D(-1);
          break;
        case "Enter":
          z.preventDefault(), f && S >= 0 && v[S] && I(v[S]);
          break;
        case "Escape":
          z.preventDefault(), x(!1);
          break;
        case "Tab":
          f && S >= 0 && v[S] && I(v[S]), x(!1);
          break;
      }
  }, R = () => {
    E(""), O(-1), x(!0), p.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: g,
      className: [dn.root, _].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
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
                  "aria-expanded": f,
                  "aria-controls": m,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": f && S >= 0 ? `${y}-option-${S}` : void 0,
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
                  children: /* @__PURE__ */ o(De, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        f && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: m, className: dn.menu, children: /* @__PURE__ */ o("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: dn.menu, children: v.map((z, j) => /* @__PURE__ */ o(
          "div",
          {
            id: `${y}-option-${j}`,
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
              z.disabled || O(j);
            },
            children: z.label
          },
          z.value
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
function z$({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...s
}) {
  const l = lt(), [d, _] = W(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? d : Array.isArray(t) ? t : [t], y = e.findIndex((v) => !v.disabled), [m, g] = W(
    () => y >= 0 ? y : 0
  ), p = ne(""), b = ne(null), h = (v) => {
    _(v), a?.(r ? v : v[0] ?? "");
  }, f = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), x = (v) => {
    const C = e[v];
    if (!(!C || C.disabled))
      if (g(v), r) {
        const S = u.includes(C.value) ? u.filter((O) => O !== C.value) : [...u, C.value];
        h(S);
      } else
        h([C.value]);
  }, N = (v) => {
    if (f.length === 0) return;
    const C = f.includes(m) ? m : f[0];
    let S = -1;
    if (v.key === "ArrowDown")
      S = f[(f.indexOf(C) + 1) % f.length];
    else if (v.key === "ArrowUp")
      S = f[(f.indexOf(C) - 1 + f.length) % f.length];
    else if (v.key === "Home")
      S = f[0];
    else if (v.key === "End")
      S = f[f.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), x(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const O = (p.current + v.key).toLowerCase();
      p.current = O, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const E = [...f, ...f], I = f.indexOf(C) + 1, D = E.slice(I).find((T) => e[T]?.label.toLowerCase().startsWith(O));
      D != null && g(D);
      return;
    }
    S >= 0 && (v.preventDefault(), g(S), r || h([e[S]?.value ?? ""]));
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
        const S = u.includes(v.value), O = C === m;
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
              O ? Pr.active : null,
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
const Sx = "_group_oinj7_1", $x = "_legend_oinj7_8", Ox = "_list_oinj7_16", Ex = "_item_oinj7_25", Tx = "_disabled_oinj7_32", Cx = "_label_oinj7_37", Ax = "_checkbox_oinj7_48", Qn = {
  group: Sx,
  legend: $x,
  list: Ox,
  item: Ex,
  disabled: Tx,
  label: Cx,
  checkbox: Ax
};
function L$({
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
  ]), d = t ?? s, _ = (u, y) => {
    const m = y ? [...d, u] : d.filter((g) => g !== u);
    l(m), r?.(m);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Qn.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: Qn.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: Qn.list, children: e.map((u) => {
      const y = d.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Qn.item, u.disabled ? Qn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Qn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Qn.checkbox,
                name: i,
                value: u.value,
                checked: y,
                disabled: u.disabled,
                onChange: (m) => _(u.value, m.target.checked)
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
const Mx = "_group_46668_1", Dx = "_legend_46668_8", Ix = "_list_46668_16", zx = "_item_46668_25", Lx = "_disabled_46668_32", Rx = "_label_46668_37", Px = "_radio_46668_48", er = {
  group: Mx,
  legend: Dx,
  list: Ix,
  item: zx,
  disabled: Lx,
  label: Rx,
  radio: Px
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
  const [s, l] = W(
    n
  ), d = t ?? s, _ = (u) => {
    l(u), r?.(u);
  };
  return /* @__PURE__ */ M("fieldset", { className: [er.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: er.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: er.list, children: e.map((u) => {
      const y = u.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [er.item, u.disabled ? er.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: er.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: er.radio,
                name: i,
                value: u.value,
                checked: y,
                disabled: u.disabled,
                onChange: (m) => _(m.target.value)
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
function P$(e) {
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
  } = e, _ = a ?? !1, [u, y] = W(r ?? (_ ? [] : t[0]?.value)), m = n ?? u, g = a === !0 || a === void 0 && Array.isArray(m), p = (h) => {
    if (!g) {
      y(h), c?.(h);
      return;
    }
    const f = ca(m), x = f.includes(h) ? f.filter((N) => N !== h) : [...f, h];
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
        const f = b(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: h.disabled,
            className: [
              pr.option,
              f ? pr.selected : null,
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
}, j$ = at(
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
    fullWidth: _ = !1,
    disabled: u = !1,
    className: y,
    "aria-label": m,
    openAriaLabel: g = "More actions",
    ...p
  }, b) {
    const f = `${lt()}-menu`, x = ne(null), N = ne(null), v = ne([]), [C, S] = W(!1), [O, E] = W(-1), I = u || l, D = $e(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), T = B(() => {
      I || (E(D[0] ?? -1), S(!0));
    }, [I, D]), w = B(() => {
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
      const X = D.includes(O) ? O : D[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [C, O, D]), d === !1) return null;
    const A = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), S(!1), N.current?.focus());
    }, R = (F) => {
      if (D.length === 0) return;
      const X = D.includes(O) ? D.indexOf(O) : F === 1 ? -1 : 0, ie = D[(X + F + D.length) % D.length];
      ie != null && (E(ie), v.current[ie]?.focus());
    }, z = (F) => {
      const X = F === "first" ? D[0] : D[D.length - 1];
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (F) => {
          x.current = F, typeof b == "function" ? b(F) : b && (b.current = F);
        },
        className: [
          xn.root,
          xn[s],
          _ ? xn.fullWidth : null,
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
              className: xn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: I,
              "aria-haspopup": "menu",
              "aria-expanded": C,
              "aria-controls": f,
              "aria-label": g,
              onClick: () => C ? S(!1) : T(),
              onKeyDown: (F) => {
                !C && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), T());
              },
              children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          C && /* @__PURE__ */ o(
            "div",
            {
              id: f,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
              className: xn.menu,
              onKeyDown: j,
              ...p,
              children: r.map((F, X) => /* @__PURE__ */ M(
                "button",
                {
                  ref: (ie) => {
                    v.current[X] = ie;
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
                  onClick: () => A(X),
                  onMouseEnter: () => {
                    F.disabled || E(X);
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
const B$ = at(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: a,
  defaultValue: i = "",
  onChange: c,
  className: s,
  onKeyDown: l,
  ...d
}, _) {
  const [u, y] = W(i ?? ""), m = a !== void 0, g = m ? a ?? "" : u, p = (f) => {
    const x = da(f, r);
    return m || y(x), c?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: _,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (f) => {
        p(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const x = f.currentTarget.selectionStart ?? g.length, N = g[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            f.preventDefault();
            const v = g.replace(/\D/g, "");
            p(da(v.slice(0, -1), r));
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
function Sv(e, t, n, r, a) {
  const c = Jo(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Ga(s, n, r);
}
const F$ = at(
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
    step: _ = 1,
    incrementLabel: u = "Increment",
    decrementLabel: y = "Decrement",
    onBlur: m,
    onKeyDown: g,
    ...p
  }, b) {
    const [h, f] = W(
      c != null ? String(c) : ""
    ), x = i !== void 0, N = x ? i == null ? "" : String(i) : h, v = (D) => {
      x || f(D), s?.(Jo(D));
    }, C = (D) => {
      x || f(String(D)), s?.(D);
    }, S = (D) => {
      a || C(Sv(N, D, l, d, _));
    }, O = (D) => {
      v(kv(D.target.value));
    }, E = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), S(1)) : D.key === "ArrowDown" && (D.preventDefault(), S(-1)), g?.(D);
    }, I = (D) => {
      const T = Jo(N);
      T === null ? (x || f(""), s?.(null)) : C(Ga(Nv(T, l, _), l, d)), m?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Vn.wrapper, "data-size": t, children: [
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
            onClick: () => S(-1),
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
}, $v = [
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
const H$ = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = $v,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: _ = "md",
  tabIndex: u = 0,
  className: y,
  onChange: m,
  onValueChange: g,
  onOpen: p,
  onClose: b
}) => {
  const h = ne(null), f = ne(null), x = ne(null), N = ne(null), v = ne(null), C = lt(), S = ne(null), O = $e(
    () => Tv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = W(!1), [D, T] = W(null), w = D ?? O, k = $e(() => Ev(w), [w]), A = B(
    (Z) => {
      const L = ua(Z);
      m?.(L), g?.(L);
    },
    [m, g]
  ), R = B(
    (Z, L) => {
      T(Z), L && !i && A(Z);
    },
    [i, A]
  ), z = B(() => {
    I(!1), T(null), b?.(), f.current?.focus();
  }, [b]), j = B(() => {
    s || (T(O), I(!0), p?.());
  }, [s, O, p]), F = B(() => {
    E ? z() : j();
  }, [E, z, j]), X = B(
    (Z, L) => {
      const Y = x.current;
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
  ), Me = B(
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
  }, Oe = (Z, L) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), L === "hue" ? pe(-6) : Me(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), L === "hue" ? pe(6) : Me(0.05);
        break;
      case "Escape":
        Z.preventDefault(), z();
        break;
    }
  }, re = (Z, L) => {
    if (Z === "hex") {
      const le = Qo(L);
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
    D && (A(D), T(null), I(!1), b?.(), f.current?.focus());
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
  const fe = _ === "xs" ? Re["dx-colorpicker-trigger-xs"] : _ === "sm" ? Re["dx-colorpicker-trigger-sm"] : _ === "lg" ? Re["dx-colorpicker-trigger-lg"] : _ === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = ua(w), Ge = Ov(w), Qe = { x: k.s * 100, y: (1 - k.v) * 100 }, At = k.h / 360 * 100, it = w.a * 100, bt = /* @__PURE__ */ M("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
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
        "aria-valuenow": Math.round(k.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-hue-picker"],
        onKeyDown: (Z) => Oe(Z, "hue"),
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
    n && /* @__PURE__ */ M("div", { className: Re["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
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
          const L = Qo(Z);
          i ? R({ ...L, a: w.a }, !1) : (T(null), A({ ...L, a: w.a }), I(!1), b?.(), f.current?.focus());
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
  return /* @__PURE__ */ M(
    "div",
    {
      ref: h,
      className: [
        Re["dx-colorpicker"],
        E ? Re["dx-colorpicker-open"] : null,
        l ? Re["dx-colorpicker-invalid"] : null,
        y
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: f,
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
              c && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 14 }) })
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
}, Cv = 42;
function an(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${an(e.month)}-${an(e.day)}`;
}
function Av(e, t) {
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
}, Mv = [
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
    for (const l of Mv)
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
function zv(e, t) {
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
  return n || zv(e, t);
}
function Lv(e, t, n) {
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
const U$ = at(
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
    allowClear: _ = !1,
    inline: u = !1,
    disabledDates: y,
    locale: m = "en-US",
    onChange: g,
    onValueChange: p,
    onOpen: b,
    onClose: h,
    disabled: f,
    readOnly: x,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: C,
    clearLabel: S,
    tabIndex: O,
    className: E,
    onBlur: I,
    onKeyDown: D,
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
    }), ue = $e(() => c ? es(c) : null, [c]), xe = $e(() => s ? es(s) : null, [s]), pe = $e(
      () => new Set(y ?? []),
      [y]
    ), Me = $e(() => {
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
        const he = V ? Av(V, l) : "";
        g?.(he), p?.(he);
      },
      [F, i, m, l, g, p]
    ), Ae = B(
      (V) => {
        A.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), h?.(), u || R.current?.focus();
    }, [u, h]), Fe = B(() => {
      if (f) return;
      const V = Me ?? Yn();
      _e(V), me(Oe(V)), we(!0), b?.();
    }, [f, Me, Oe, b]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Qe = B((V) => {
      z.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), At = B(
      (V) => {
        if (G(V)) return;
        const he = ae ?? Me, Ye = {
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
      [G, ae, Me, l, re, fe]
    ), it = B(
      (V, he) => {
        _e((Ve) => {
          const Ye = Ve ?? Me ?? Yn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + he));
          return { ...Ye, [V]: Xe };
        });
      },
      [Me]
    ), bt = B(
      (V, he) => {
        const Ve = he.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? Me ?? Yn(), [V]: Math.min(Pt, Ye) }));
      },
      [Me]
    ), Z = B(() => {
      ae && (re(ae), fe());
    }, [ae, re, fe]), L = B(() => {
      if (te) return;
      const V = jr(X, i);
      re(V ? Lv(V, ue, xe) : null);
    }, [te, X, i, ue, xe, re]), Y = (V) => {
      const he = V.target.value;
      F || ie(he), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? ae && (re(ae), fe()) : L()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), D?.(V);
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
          he = zn(K, -fa(K)), V.preventDefault();
          break;
        case "End":
          he = zn(K, 6 - fa(K)), V.preventDefault();
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
        const Ve = Oe(he);
        me(Ve), setTimeout(() => Qe(Ve), 0);
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
      F || ie(""), g?.(""), p?.(""), A.current?.focus();
    }, je = te && ae ? _o(ae, i, m) : F ? r ? _o(
      jr(r, i) ?? Yn(),
      i,
      m
    ) : "" : X, Ze = F ? !!r : X.length > 0, et = u || te, rt = { year: K.year, month: K.month }, Xt = new Date(rt.year, rt.month - 1, 1).getDay(), oe = {
      year: rt.year,
      month: rt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < Cv; V += 1)
      Le.push(zn(oe, V - Xt));
    const Nt = ae ? Yt(ae) : Me ? Yt(Me) : null, Rt = Yt(Yn()), xt = `${rt.year}-${an(rt.month)}`, Ie = $e(
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
    }).format(new Date(rt.year, rt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, he) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + he)
      )
    ), Ot = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], ct = /* @__PURE__ */ M(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-header"], children: [
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
          /* @__PURE__ */ M(
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
          l && /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time"], children: [
            Rv.map((V) => /* @__PURE__ */ M("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-time-label"], children: po(V) }),
              /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": po(V),
                    value: an(
                      (ae ?? Me ?? Yn())[V]
                    ),
                    onChange: (he) => bt(V, he.target.value),
                    onKeyDown: (he) => {
                      he.key === "ArrowUp" ? (he.preventDefault(), it(V, 1)) : he.key === "ArrowDown" ? (he.preventDefault(), it(V, -1)) : he.key === "Enter" && (he.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: Ue["dx-datepicker-time-buttons"], children: [
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: k,
        className: [
          Ue["dx-datepicker"],
          u ? Ue["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ M(st, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: f,
                readOnly: x,
                placeholder: N,
                tabIndex: O,
                role: d ? void 0 : "combobox",
                "aria-label": v ?? "Date",
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
                ...T
              }
            ),
            _ && !f && Ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  d ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
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
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": te,
                "aria-controls": j,
                disabled: f,
                onClick: Ge,
                children: /* @__PURE__ */ o(De, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          et && /* @__PURE__ */ o(
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
  onValueChange: _
}) => {
  const [u, y] = W(e), m = B(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), g = B(
    (f) => {
      d?.(f), _?.(f);
    },
    [d, _]
  ), p = B(
    (f) => {
      n || r || (g(f), y(f));
    },
    [n, r, g]
  ), b = (f) => {
    if (n || r) return;
    const x = u > 0 ? u : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), p(m(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), p(m(x - 1));
        break;
      case "Home":
        f.preventDefault(), p(1);
        break;
      case "End":
        f.preventDefault(), p(t);
        break;
    }
  }, h = Array.from({ length: t }, (f, x) => x + 1);
  return /* @__PURE__ */ M(
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
        h.map((f) => {
          const x = f <= e, N = f === (e > 0 ? e : u);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${c} ${f}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Xn["dx-rating-item"],
                x ? Xn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(f),
              onFocus: () => y(f),
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
            f
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
function $n(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const q$ = ({
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
  minLabel: _ = "Min",
  maxLabel: u = "Max",
  tabIndex: y = 0,
  className: m,
  onChange: g,
  onInput: p,
  onValueChange: b,
  onInputChange: h
}) => {
  const f = ne(null), x = ne(
    null
  ), [N, v] = W(null), C = N ?? e, S = $e(
    () => $n(C, r, a),
    [C, r, a]
  ), O = $e(
    () => $n(c ? t : S, r, a),
    [c, t, S, r, a]
  ), E = $e(
    () => $n(c ? Math.max(n, O) : S, r, a),
    [c, n, O, S, r, a]
  ), I = B(
    (K) => {
      const me = a - r;
      return me <= 0 ? 0 : ($n(K, r, a) - r) / me * 100;
    },
    [r, a]
  ), D = B(
    (K, me) => {
      const ue = f.current;
      if (!ue) return r;
      const xe = ue.getBoundingClientRect();
      let pe;
      s === "vertical" ? pe = 1 - (me - xe.top) / xe.height : pe = (K - xe.left) / xe.width;
      const Me = r + $n(pe, 0, 1) * (a - r);
      return i > 0 ? $n(Math.round(Me / i) * i, r, a) : $n(Me, r, a);
    },
    [r, a, i, s]
  ), T = B(
    (K) => {
      typeof K == "number" && v(K), g?.(K), b?.(K);
    },
    [g, b]
  ), w = B(
    (K) => {
      typeof K == "number" && v(K), p?.(K), h?.(K);
    },
    [p, h]
  ), k = B(
    (K, me, ue) => {
      const xe = D(me, ue);
      let pe;
      c ? K === "min" ? pe = { min: Math.min(xe, E), max: E } : pe = { min: O, max: Math.max(xe, O) } : pe = xe, w(pe), x.current === null && T(pe);
    },
    [c, D, O, E, w, T]
  ), A = B(
    (K, me) => {
      const ue = (i > 0 ? i : 1) * me;
      let xe;
      c ? K === "min" ? xe = {
        min: $n(O + ue, r, E),
        max: E
      } : xe = {
        min: O,
        max: $n(E + ue, O, a)
      } : xe = $n(S + ue, r, a), T(xe);
    },
    [c, i, r, a, O, E, S, T]
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
          me.preventDefault(), T(c ? K === "min" ? { min: r, max: E } : { min: O, max: O } : r);
          break;
        case "End":
          me.preventDefault(), T(c ? K === "min" ? { min: E, max: E } : { min: O, max: a } : a);
          break;
      }
  }, z = (K, me) => {
    l || (me.preventDefault(), me.currentTarget.focus(), typeof me.currentTarget.setPointerCapture == "function" && me.currentTarget.setPointerCapture(me.pointerId), x.current = { key: K, pointerId: me.pointerId }, k(K, me.clientX, me.clientY));
  }, j = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (K.preventDefault(), k(x.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (x.current = null, K.preventDefault(), T(c ? { min: O, max: E } : S));
  }, [X, ie] = W(null), te = I(O), we = I(E), ae = c ? te : 0, _e = we;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        tr["dx-slider"],
        s === "vertical" ? tr["dx-slider-vertical"] : null,
        l ? tr["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: f, className: tr["dx-slider-track"], children: [
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
            "aria-label": c ? _ : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && X === "max" ? -1 : y,
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
            tabIndex: l || X === "min" ? -1 : y,
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
    if (!a.slice(1).some((u) => u != null)) return null;
    const s = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, d = a[3] != null ? Number(a[3]) : 0, _ = a[4] != null ? Number(a[4]) : 0;
    return n * (s * Pn + l * jn + d * vn + _);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, _ = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || d > 59 ? null : n * (c * Pn + s * jn + l * vn + d + _);
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
  const c = Math.floor(r / vn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, _ = Math.floor(l / 24), u = n ? "-" : "", y = _ > 0 ? `${_}.` : "";
  switch (t) {
    case "day":
      return `${u}${_} day${_ === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${y}${mr(d)}`;
    case "minute":
      return `${u}${y}${mr(d)}:${mr(s)}`;
    default:
      return `${u}${y}${mr(d)}:${mr(s)}:${mr(a)}`;
  }
}
function ma(e, t = "second") {
  const n = Kr(e);
  return n === null ? "" : ts(n, t);
}
function Uo(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const K$ = at(
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
    showHours: _ = !0,
    showMinutes: u = !0,
    showSeconds: y = !0,
    allowClear: m = !1,
    inline: g = !1,
    onChange: p,
    onValueChange: b,
    onOpen: h,
    onClose: f,
    disabled: x,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: C,
    clearLabel: S,
    tabIndex: O,
    className: E,
    onBlur: I,
    onKeyDown: D,
    ...T
  }, w) {
    const k = ne(null), A = ne(null), R = ne(null), z = lt(), j = r !== void 0, [F, X] = W(
      () => a != null ? ma(a, l) : ""
    ), [ie, te] = W(!1), [we, ae] = W(null), [_e, K] = W(null), me = $e(
      () => Kr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = $e(
      () => Kr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), xe = $e(() => {
      const oe = Number.parseFloat(s);
      return Number.isNaN(oe) || oe <= 0 ? 1 : oe;
    }, [s]), pe = $e(() => {
      const oe = j ? r ?? "" : F;
      return oe ? Kr(oe) : null;
    }, [r, F, j]), Me = B(
      (oe) => {
        const Le = oe === null ? "" : ts(oe, l);
        j || X(Le), p?.(Le), b?.(Le);
      },
      [j, l, p, b]
    ), G = B(
      (oe) => {
        oe && we !== null && Me(we), te(!1), ae(null), K(null), f?.(), g || R.current?.focus();
      },
      [g, we, Me, f]
    ), Oe = B(() => {
      x || (ae(pe ?? 0), te(!0), h?.());
    }, [x, pe, h]), re = B(() => {
      ie ? G(!1) : Oe();
    }, [ie, G, Oe]), Ae = B(
      (oe, Le) => {
        ae((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * xe * pa[oe];
          return Uo(xt, me, ue);
        });
      },
      [pe, xe, me, ue]
    ), fe = B(
      (oe) => {
        const Le = _e?.[oe];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        ae((xt) => {
          const Ie = xt ?? pe ?? 0, qe = ha(Ie);
          qe[oe] = Rt;
          const Ot = (Ie < 0 ? -1 : 1) * Fv(qe);
          return Uo(Ot, me, ue);
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
    }, Qe = B(() => {
      if (ie) return;
      const oe = Kr(F);
      Me(oe !== null ? Uo(oe, me, ue) : null);
    }, [ie, F, me, ue, Me]), At = (oe) => {
      j || X(oe.target.value);
    }, it = (oe) => {
      oe.key === "Enter" ? (oe.preventDefault(), ie ? G(!0) : Qe()) : oe.key === "Escape" && ie ? (oe.preventDefault(), G(!1)) : oe.key === "ArrowDown" && !ie ? (oe.preventDefault(), Oe()) : oe.key === "Tab" && ie && te(!1), D?.(oe);
    }, bt = (oe) => {
      Qe(), I?.(oe);
    }, Z = () => {
      j || X(""), p?.(""), b?.(""), A.current?.focus();
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
      if (g && we !== null) {
        const oe = pe;
        (oe === null || Math.abs(we - oe) > 1e-9) && Me(we);
      }
    }, [g, we, pe, Me]);
    const L = B(
      (oe) => {
        A.current = oe, typeof w == "function" ? w(oe) : w && (w.current = oe);
      },
      [w]
    ), Y = j ? r ? ma(r, l) : "" : F, Q = j ? !!r : F.length > 0, ge = g || ie, le = we ?? pe ?? 0, Ee = ha(le), je = Bv[l], et = ["days", "hours", "minutes", "seconds"].filter(
      (oe) => pa[oe] >= je && (oe === "days" ? d : oe === "hours" ? _ : oe === "minutes" ? u : y)
    ), rt = t === "xs" ? ft["dx-timespanpicker-input--xs"] : t === "sm" ? ft["dx-timespanpicker-input--sm"] : t === "lg" ? ft["dx-timespanpicker-input--lg"] : t === "xl" ? ft["dx-timespanpicker-input--xl"] : ft["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ M("div", { className: ft["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-preview"], "aria-live": "polite", children: ts(le, l) }),
      /* @__PURE__ */ o("div", { className: ft["dx-timespanpicker-units"], children: et.map((oe) => /* @__PURE__ */ M("label", { className: ft["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: ft["dx-timespanpicker-unit-label"], children: Ho[oe] }),
        /* @__PURE__ */ M("span", { className: ft["dx-timespanpicker-unit-control"], children: [
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
          /* @__PURE__ */ M("span", { className: ft["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ho[oe].toLowerCase()}`,
                onClick: () => {
                  fe(oe), Ae(oe, 1);
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
                  fe(oe), Ae(oe, -1);
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: k,
        className: [
          ft["dx-timespanpicker"],
          g ? ft["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !g && /* @__PURE__ */ M(st, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: L,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: x,
                placeholder: N,
                tabIndex: O,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                "aria-invalid": n || void 0,
                className: [
                  ft["dx-timespanpicker-input"],
                  rt,
                  n ? ft["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: it,
                onBlur: bt,
                ...T
              }
            ),
            m && !x && Q && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: ft["dx-timespanpicker-clear"],
                "aria-label": S ?? "Clear",
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
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                disabled: x,
                onClick: re,
                children: /* @__PURE__ */ o(De, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ o(
            "div",
            {
              id: z,
              role: g ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
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
const G$ = at(
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
    liveAnnounce: _ = !0,
    className: u,
    "aria-label": y
  }, m) {
    const g = lt(), p = n !== void 0, [b, h] = W(ga(r).join("")), f = p ? ga(n).join("") : b, x = Array.from({ length: t }, (T, w) => f[w] ?? ""), N = ne([]), [v, C] = W(""), S = (T) => {
      p || h(T), a?.(T);
    }, O = (T) => {
      const w = N.current[T];
      w && !w.disabled && (w.focus(), w.select());
    }, E = (T, w) => {
      const k = w.replace(/\D/g, "").slice(-1), A = f.split("");
      if (k) {
        A[T] = k;
        const R = A.join("").slice(0, t);
        S(R), R.length < t ? O(T + 1) : _ && C("Code complete");
      }
    }, I = (T, w) => {
      if (w.key === "Backspace") {
        if (w.preventDefault(), f[T]) {
          const k = f.split("");
          k[T] = "", S(k.join(""));
        } else if (T > 0) {
          const k = f.split("");
          k[T - 1] = "", S(k.join("")), O(T - 1);
        }
      } else w.key === "ArrowLeft" && T > 0 ? (w.preventDefault(), O(T - 1)) : w.key === "ArrowRight" && T < t - 1 ? (w.preventDefault(), O(T + 1)) : w.key === "Home" ? (w.preventDefault(), O(0)) : w.key === "End" && (w.preventDefault(), O(t - 1));
    }, D = (T, w) => {
      w.preventDefault();
      const k = w.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const A = f.split("");
      let R = 0;
      for (let j = 0; j < k.length && T + j < t; j++)
        A[T + j] = k[j] ?? "", R++;
      const z = A.join("");
      S(z), z.length >= t ? _ && C("Code complete") : O(T + R);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [nr.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": y ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [nr.cells, nr[c]].join(" "), children: x.map((T, w) => /* @__PURE__ */ o(
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
              onPaste: (k) => D(w, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                _ && C("");
              }
            },
            w
          )) }),
          _ && /* @__PURE__ */ o(
            "span",
            {
              id: `${g}-live`,
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
), Gv = "_wrapper_6lcd5_1", Vv = "_header_6lcd5_7", Yv = "_label_6lcd5_15", Xv = "_clear_6lcd5_22", Zv = "_canvas_6lcd5_53", Jv = "_disabled_6lcd5_69", gr = {
  wrapper: Gv,
  header: Vv,
  label: Yv,
  clear: Xv,
  canvas: Zv,
  disabled: Jv
}, V$ = at(
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
    disabled: _ = !1,
    className: u
  }, y) {
    const m = ne(null), g = ne(!1), p = ne(!1), b = ne({ x: 0, y: 0 });
    be(() => {
      const S = m.current;
      if (!S) return;
      const O = window.devicePixelRatio || 1, E = Math.round((l ?? S.clientWidth) * O), I = Math.round(d * O);
      (S.width !== E || S.height !== I) && (S.width = E, S.height = I);
      const D = S.getContext("2d");
      if (!D) return;
      D.setTransform(O, 0, 0, O, 0, 0), D.lineWidth = i, D.strokeStyle = a, D.lineCap = "round", D.lineJoin = "round";
      const T = t ?? n;
      if (T) {
        const w = new Image();
        w.onload = () => {
          D.drawImage(w, 0, 0, S.clientWidth, d);
        }, w.src = T;
      }
    }, [t, n, a, i, l, d]);
    const h = () => {
      const S = m.current;
      if (!S) return;
      const O = S.toDataURL("image/png");
      r?.(O);
    }, f = () => {
      const S = m.current;
      if (!S) return;
      const O = S.getContext("2d");
      O && O.clearRect(0, 0, S.width, S.height), r?.("");
    };
    ko(y, () => ({
      clear: f,
      toDataURL: (S = "image/png", O) => m.current?.toDataURL(S, O) ?? ""
    }));
    const x = (S) => {
      const O = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - O.left, y: S.clientY - O.top };
    }, N = (S) => {
      _ || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), g.current = !0, p.current = !1, b.current = x(S));
    }, v = (S) => {
      if (!g.current) return;
      S.preventDefault();
      const O = S.currentTarget.getContext("2d");
      if (!O) return;
      const E = x(S);
      O.beginPath(), O.moveTo(b.current.x, b.current.y), O.lineTo(E.x, E.y), O.stroke(), b.current = E, p.current = !0;
    }, C = (S) => {
      g.current && (S.preventDefault(), g.current = !1, p.current && h());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        "aria-disabled": _ || void 0,
        className: [
          gr.wrapper,
          u,
          _ ? gr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: gr.header, children: [
            /* @__PURE__ */ o("span", { className: gr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: gr.clear,
                onClick: f,
                disabled: _,
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
              "aria-disabled": _ || void 0,
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
const Y$ = at(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: a = !0,
  headers: i,
  accept: c,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: d = "Upload",
  children: _,
  onProgress: u,
  onComplete: y,
  onError: m
}, g) {
  const p = ne(null), [b, h] = W([]), f = ne(/* @__PURE__ */ new Map()), x = (O, E) => {
    h(
      (I) => I.map((D) => D.file.name === O ? { ...D, ...E } : D)
    );
  }, N = (O) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    f.current.set(O.file.name, E);
    const I = new FormData();
    if (I.append(r, O.file), E.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const T = Math.round(D.loaded / D.total * 100);
      x(O.file.name, { state: "uploading", progress: T }), u?.(O.file.name, T);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (x(O.file.name, { state: "complete", progress: 100 }), y?.(O.file.name)) : (x(O.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), m?.(O.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      x(O.file.name, { state: "error", message: "Network error" }), m?.(O.file.name, "Network error");
    }), i)
      for (const [D, T] of Object.entries(i))
        E.setRequestHeader(D, T);
    E.open("POST", t), E.send(I), x(O.file.name, { state: "uploading", progress: 0 });
  }, v = (O) => {
    if (!O) return;
    const E = [...O], I = [];
    let D = Math.max(0, s - b.length);
    for (const w of E) {
      if (l != null && w.size > l) {
        m?.(
          w.name,
          `File too large (maximum ${ya(l)})`
        );
        continue;
      }
      if (D <= 0) {
        m?.(w.name, `Too many files (maximum ${s})`);
        continue;
      }
      D -= 1, I.push(w);
    }
    const T = I.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    h((w) => [...w, ...T]), p.current && (p.current.value = ""), a && T.forEach(N);
  }, C = (O) => {
    f.current.get(O)?.abort(), f.current.delete(O), h((I) => I.filter((D) => D.file.name !== O));
  }, S = _ ?? /* @__PURE__ */ M(
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
  })), /* @__PURE__ */ M("div", { className: On.wrapper, children: [
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
        onChange: (O) => v(O.target.files)
      }
    ),
    !_ && b.length > 0 && /* @__PURE__ */ o("ul", { className: On.list, children: b.map(({ file: O, state: E, progress: I, message: D }) => /* @__PURE__ */ M(
      "li",
      {
        className: On.row,
        "data-state": E,
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
          /* @__PURE__ */ o("span", { className: On.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${O.name}`,
              onClick: () => C(O.name),
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
const X$ = at(
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
    const _ = ne(null), [u, y] = W(!1), m = (f) => {
      if (!f || f.length === 0) return;
      const x = [...f].filter((N) => pw(N, t ?? ""));
      x.length !== 0 && r?.(x);
    }, g = (f) => {
      s || (f.preventDefault(), y(!0));
    }, p = (f) => {
      s || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", y(!0));
    }, b = (f) => {
      s || f.currentTarget.contains(f.relatedTarget) || y(!1);
    }, h = (f) => {
      s || (f.preventDefault(), y(!1), m(f.dataTransfer.files));
    };
    return ko(d, () => ({
      open: () => _.current?.click()
    })), /* @__PURE__ */ M(
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
        onDragEnter: g,
        onDragOver: p,
        onDragLeave: b,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Br.caption, children: u ? i : a }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Br.browse,
              onClick: () => _.current?.click(),
              children: c
            }
          ),
          /* @__PURE__ */ o(
            "input",
            {
              ref: _,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (f) => {
                m(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), hw = "_root_1a92d_1", mw = "_menubar_1a92d_5", gw = "_horizontal_1a92d_15", yw = "_vertical_1a92d_20", bw = "_itemWrapper_1a92d_25", xw = "_item_1a92d_25", vw = "_disabled_1a92d_61", ww = "_icon_1a92d_68", kw = "_text_1a92d_75", Nw = "_caret_1a92d_79", Sw = "_hasChildren_1a92d_85", $w = "_submenu_1a92d_94", Ow = "_submenuItem_1a92d_118", Ew = "_flyout_1a92d_155", Tw = "_hamburger_1a92d_175", Cw = "_responsive_1a92d_198", Aw = "_mobileOpen_1a92d_207", pt = {
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
  hasChildren: Sw,
  submenu: $w,
  submenuItem: Ow,
  flyout: Ew,
  hamburger: Tw,
  responsive: Cw,
  mobileOpen: Aw
}, vo = ir(null);
function Mw(e, t) {
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
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = $e(
    () => Xr.toArray(t.children).filter(Wt),
    [t.children]
  ), d = l.length > 0, _ = !!c, u = t.open !== void 0, [y, m] = Dw(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, p = ne(0), h = (g && !u ? n.openKey === e : null) ?? y, f = B(
    (R) => {
      g && !u ? n.setOpenKey(R ? e : null) : (m(R), g && n.setOpenKey(null));
    },
    [g, u, n, e, m]
  ), [, x] = W(0);
  be(() => {
    if (!i) return;
    const R = () => x((z) => z + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const N = i && !d ? Mw(i, t.match) : !1, v = B(
    (R) => {
      if (_) {
        R.preventDefault();
        return;
      }
      const z = { text: r, value: a, path: i };
      [n.emit(z), t.onClick?.(z)].includes(!1) && R.preventDefault(), n.closeAll();
    },
    [_, r, a, i, n, t]
  ), C = B(() => {
    if (!_) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      f(!h);
    }
  }, [_, h, f, n.clickToOpen]), S = B(() => {
    !d || _ || n.clickToOpen || (p.current = Date.now(), f(!0));
  }, [d, _, n.clickToOpen, f]), O = B(() => {
    n.clickToOpen || f(!1);
  }, [n.clickToOpen, f]), E = `${n.baseId}-submenu-${e}`, [I, D] = W(null);
  be(() => {
    n.closeSignal > 0 && D(null);
  }, [n.closeSignal]);
  const T = $e(
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
  ), w = d ? /* @__PURE__ */ o("span", { className: pt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    De,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, k = s ?? /* @__PURE__ */ M(st, { children: [
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
    w
  ] });
  if (d) {
    let R = function(z) {
      const j = Array.from(z.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      z.key === "ArrowDown" ? (z.preventDefault(), z.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : z.key === "ArrowUp" ? (z.preventDefault(), z.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : z.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (z.preventDefault(), z.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (z.key === "ArrowLeft" || z.key === "Escape") && (z.preventDefault(), z.stopPropagation(), f(!1));
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: pt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : S,
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
              "aria-disabled": _ || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": E,
              tabIndex: _ ? -1 : 0,
              disabled: _,
              className: [
                pt.item,
                _ ? pt.disabled : null,
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
                n.flyout && !g ? pt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: R,
              children: /* @__PURE__ */ o(vo.Provider, { value: T, children: l.map(
                (z, j) => Va(z) ? /* @__PURE__ */ o(
                  us,
                  {
                    itemKey: `${e}-${j}`,
                    props: z.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ss, { children: z }, `${e}-custom-${j}`)
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
    "aria-disabled": _ || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: _ ? -1 : 0,
    "data-dx-menu-item": "",
    className: [pt.submenuItem, _ ? pt.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return i && !_ ? /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...A, children: k }) }) : /* @__PURE__ */ o("div", { className: pt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: _, ...A, children: k }) });
}
function Ya(e) {
  if (!Bn(vo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(us, { itemKey: e.text, props: e });
}
function zw({
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
  ..._
}) {
  const u = lt(), y = ne(null), m = ne(null), [g, p] = W(null), [b, h] = W(0), [f, x] = W(!1), N = ne(null), v = B(
    (I) => i?.(I),
    [i]
  ), C = B(() => {
    p(null), h((I) => I + 1);
  }, []);
  be(() => {
    if (g == null) return;
    const I = (D) => {
      y.current && !y.current.contains(D.target) && C();
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, [g, C]), be(() => {
    N.current != null && g === N.current && (document.getElementById(`${u}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [g, u]);
  const S = $e(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: b,
      emit: v,
      closeAll: C,
      openKey: g,
      setOpenKey: p
    }),
    [u, n, t, b, v, C, g]
  ), O = $e(
    () => Xr.toArray(e).filter(Wt),
    [e]
  ), E = (I) => {
    const D = m.current;
    if (!D) return;
    const T = Array.from(D.children).map((A) => A.querySelector('[role="menuitem"]')).filter(
      (A) => A != null && !A.hasAttribute("disabled") && A.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const A = document.getElementById(`${u}-submenu-${g}`);
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
          I.preventDefault(), C(), c?.(), D.querySelector(`[data-index="${g}"]`)?.focus();
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
        D.querySelector(
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
  return /* @__PURE__ */ M(
    "nav",
    {
      ref: y,
      "aria-label": s,
      className: [
        pt.root,
        a ? pt.vertical : pt.horizontal,
        r ? pt.responsive : null,
        r && f ? pt.mobileOpen : null,
        n ? pt.flyoutRoot : null,
        d
      ].filter(Boolean).join(" "),
      ..._,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": f,
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
            onKeyDown: E,
            children: /* @__PURE__ */ o(vo.Provider, { value: S, children: O.map(
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
const Lw = "_popup_uiejp_1", Rw = "_menu_uiejp_22", ns = {
  popup: Lw,
  menu: Rw
}, Xa = ir(null);
function Z$() {
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
        zw,
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
function J$({ children: e }) {
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
    const c = (_) => {
      const u = document.querySelector(`.${ns.popup}`);
      u && !u.contains(_.target) && r();
    }, s = (_) => {
      _.key === "Escape" && (_.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = $e(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ M(Xa.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Pw, { state: t, onClose: r }) : null
  ] });
}
const jw = "_root_rgcia_1", Bw = "_list_rgcia_9", Fw = "_item_rgcia_14", Hw = "_trigger_rgcia_18", Uw = "_disabled_rgcia_45", Ww = "_expanded_rgcia_52", qw = "_selected_rgcia_56", Kw = "_icon_rgcia_61", Gw = "_text_rgcia_72", Vw = "_caret_rgcia_79", Yw = "_open_rgcia_86", Xw = "_submenu_rgcia_90", Zw = "_iconOnly_rgcia_172", Jw = "_stacked_rgcia_201", Lt = {
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
  return n ? /* @__PURE__ */ o("span", { className: Lt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: Lt.icon,
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
  const { text: a, value: i, path: c, disabled: s } = n, l = $e(
    () => Xr.toArray(n.children).filter(Wt),
    [n.children]
  ), d = l.length > 0, _ = !!s, u = n.match ?? r.match, y = n.expanded !== void 0, [m, g] = W(
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
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [f, x] = W(
    n.defaultSelected ?? !1
  ), N = !h && c ? e2(c, u) : !1, v = n.selected ?? (h ? f : N || f), [, C] = W(0);
  be(() => {
    if (!c) return;
    const F = () => C((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [c]);
  const S = $e(
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
  const O = B(
    (F) => {
      if (_) {
        F.preventDefault();
        return;
      }
      const X = { text: a, value: i, path: c };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), h || x(!0), n.onSelectedChange?.(!0);
    },
    [_, a, i, c, r, n, h]
  ), E = B(() => {
    _ || (p || r.notifyOpened(e, t), b(!p));
  }, [_, p, r, e, t, b]), I = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), d ? E() : F.target.click()) : F.key === "Escape" && p ? (F.preventDefault(), b(!1)) : F.key === "ArrowRight" && d && !p ? (F.preventDefault(), r.notifyOpened(e, t), b(!0)) : F.key === "ArrowLeft" && p && (F.preventDefault(), b(!1));
    },
    [d, E, p, b, r, e, t]
  ), D = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [Lt.caret, p ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(De, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, T = n.template ?? /* @__PURE__ */ M(st, { children: [
    /* @__PURE__ */ o(
      t2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: Lt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: Lt.text, children: a }),
    D
  ] }), w = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, A = [
    Lt.trigger,
    _ ? Lt.disabled : null,
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
      "aria-disabled": _ || void 0,
      disabled: _,
      tabIndex: _ ? -1 : 0,
      className: A,
      onClick: E,
      onKeyDown: I,
      children: T
    }
  ) : c && !_ ? /* @__PURE__ */ o(
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
      onClick: O,
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
      "aria-disabled": _ || void 0,
      disabled: _,
      tabIndex: _ ? -1 : 0,
      className: A,
      onClick: O,
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
  return /* @__PURE__ */ M(
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
function Q$(e) {
  if (!Bn(wo)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(fs, { itemKey: e.text, ancestors: [], props: e });
}
function eO({
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
  const _ = lt(), [u, y] = W(0), m = ne(/* @__PURE__ */ new Set()), g = B(
    (N) => c?.(N),
    [c]
  ), p = B(
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
        const v = N.target, C = b(N.currentTarget), S = C.indexOf(v);
        if (S === -1) return;
        N.preventDefault();
        const O = N.key === "ArrowDown" ? 1 : -1;
        C[(S + O + C.length) % C.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = b(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, f = $e(
    () => ({
      baseId: _,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: a,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: m,
      emit: g,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      _,
      t,
      n,
      r,
      i,
      a,
      u,
      g,
      p
    ]
  ), x = $e(
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
      children: /* @__PURE__ */ o("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ o(wo.Provider, { value: f, children: x.map((N, v) => /* @__PURE__ */ o(
        fs,
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
function tO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = lt(), c = `${i}-menu`, s = ne(null), l = ne(null), [d, _] = W(!1), [u, y] = W(-1), m = t, g = e.map((v, C) => v.disabled ? -1 : C).filter((v) => v >= 0), p = B(
    (v) => {
      if (v.disabled) return;
      const C = {
        text: v.text,
        path: v.path
      };
      n?.(C), _(!1), l.current?.focus();
    },
    [n]
  ), b = B(() => {
    y(g[0] ?? -1), _(!0);
  }, [g]), h = B(() => {
    _(!1), y(-1), l.current?.focus();
  }, []);
  be(() => {
    if (!d) return;
    const v = (C) => {
      s.current && !s.current.contains(C.target) && (_(!1), y(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [d]), be(() => {
    if (!d) return;
    const v = (C) => {
      C.key === "Escape" && (C.preventDefault(), h());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [d, h]);
  const f = (v) => {
    if (g.length === 0) return;
    const C = g.indexOf(u), S = C === -1 ? 0 : (C + v + g.length) % g.length, O = g[S];
    O != null && y(O);
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
        v.preventDefault(), f(1);
        break;
      case "ArrowUp":
        v.preventDefault(), f(-1);
        break;
      case "Home":
        v.preventDefault(), g[0] != null && y(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && y(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const C = e[u];
          C && !C.disabled && p(C);
        }
        break;
      case "Tab":
        _(!1), y(-1);
        break;
    }
  }, N = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), f(1);
        break;
      case "ArrowUp":
        v.preventDefault(), f(-1);
        break;
      case "Home":
        v.preventDefault(), g[0] != null && y(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && y(g[g.length - 1]);
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
        _(!1), y(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [En.root, a].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
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
            children: m ?? /* @__PURE__ */ M("span", { className: En.defaultTrigger, children: [
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
              const S = !!v.disabled, O = C === u;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${i}-item-${C}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [
                    En.item,
                    O ? En.active : null,
                    S ? En.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || p(v);
                  },
                  onMouseEnter: () => {
                    S || y(C);
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
const f2 = "_root_vv0xs_1", _2 = "_bottomRight_vv0xs_11", p2 = "_bottomLeft_vv0xs_16", h2 = "_topRight_vv0xs_21", m2 = "_topLeft_vv0xs_26", g2 = "_menu_vv0xs_31", y2 = "_itemWrapper_vv0xs_48", b2 = "_tooltip_vv0xs_54", x2 = "_main_vv0xs_76", v2 = "_mainIcon_vv0xs_104", w2 = "_mainOpen_vv0xs_109", k2 = "_item_vv0xs_48", N2 = "_disabled_vv0xs_141", S2 = "_itemIcon_vv0xs_148", qt = {
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
  itemIcon: S2
};
function nO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${lt()}-menu`, d = ne(null), _ = ne(null), [u, y] = W(!1), m = B(
    (h) => {
      if (h.disabled) return;
      const f = { text: h.text, value: h.value };
      r?.(f), y(!1), _.current?.focus();
    },
    [r]
  );
  be(() => {
    if (!u) return;
    const h = (f) => {
      d.current && !d.current.contains(f.target) && y(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [u]), be(() => {
    if (!u) return;
    const h = (f) => {
      f.key === "Escape" && (y(!1), _.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [u]);
  const g = c === "bottom-right" ? qt.bottomRight : c === "bottom-left" ? qt.bottomLeft : c === "top-right" ? qt.topRight : qt.topLeft, p = (h) => {
    !u && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), y(!0)) : u && h.key === "Escape" && (h.preventDefault(), y(!1));
  }, b = (h) => {
    h.key === "Escape" && (h.preventDefault(), y(!1), _.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: d,
      className: [qt.root, g, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": a,
            className: qt.menu,
            onKeyDown: b,
            children: e.map((h, f) => {
              const x = !!h.disabled;
              return /* @__PURE__ */ M("div", { className: qt.itemWrapper, children: [
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
              ] }, `${h.text}-${f}`);
            })
          }
        ) : null,
        /* @__PURE__ */ o(
          "button",
          {
            ref: _,
            type: "button",
            className: qt.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => y((h) => !h),
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
const $2 = "_root_1eyur_1", O2 = "_list_1eyur_5", E2 = "_item_1eyur_15", T2 = "_link_1eyur_22", C2 = "_linkButton_1eyur_23", A2 = "_current_1eyur_24", M2 = "_disabled_1eyur_68", D2 = "_icon_1eyur_74", I2 = "_text_1eyur_81", z2 = "_separator_1eyur_85", _t = {
  root: $2,
  list: O2,
  item: E2,
  link: T2,
  linkButton: C2,
  current: A2,
  disabled: M2,
  icon: D2,
  text: I2,
  separator: z2
};
function rO({
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
        return /* @__PURE__ */ M("li", { className: _t.item, children: [
          l ? d ? /* @__PURE__ */ M(
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
          ) : c.path ? /* @__PURE__ */ M(
            "a",
            {
              href: c.path,
              className: _t.link,
              "aria-current": "page",
              onClick: (_) => {
                _.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ M(
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
          ) : d ? /* @__PURE__ */ M(
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
          ) : c.path ? /* @__PURE__ */ M(
            "a",
            {
              href: c.path,
              className: _t.link,
              onClick: (_) => {
                _.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: c.icon }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ M(
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
const L2 = "_link_tmy3k_1", R2 = {
  link: L2
}, oO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ M(st, { children: [
    n != null && /* @__PURE__ */ o(De, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [R2.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: _, ...u } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: c,
        className: l,
        href: _,
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
function sO({
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
  className: _
}) {
  const u = a ?? i ?? !1, y = t ?? n, m = y !== void 0, [g, p] = W(() => Math.min(Math.max(0, y ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, m ? y : g),
    Math.max(0, e.length - 1)
  ), f = ne(null), x = B(
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
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), O = document.activeElement, E = O ? S.indexOf(O) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), S.length === 0) return;
      const I = E === -1 ? 0 : (E + 1) % S.length, D = S[I];
      D && D.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), S.length === 0) return;
      const I = E === -1 ? S.length - 1 : (E - 1 + S.length) % S.length, D = S[I];
      D && D.focus();
    } else C.key === "Home" ? (C.preventDefault(), S[0]?.focus()) : C.key === "End" && (C.preventDefault(), S[S.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": d,
      className: [Kt.root, _].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ o("ol", { ref: f, role: "list", className: Kt.list, children: e.map((C, S) => {
        const O = S === h, E = S < h, I = N(S, C);
        return /* @__PURE__ */ M(
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
              /* @__PURE__ */ M(
                "button",
                {
                  type: "button",
                  "data-step": S,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    Kt.step,
                    O ? Kt.active : null,
                    E ? Kt.completed : null,
                    I ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || x(S);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Kt.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ o("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(De, { icon: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ o("span", { className: Kt.icon, children: C.icon }) : /* @__PURE__ */ o("span", { className: Kt.number, children: S + 1 }) }),
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
const Z2 = "_root_12hod_1", J2 = "_horizontal_12hod_13", Q2 = "_vertical_12hod_17", ek = "_pane_12hod_21", tk = "_handle_12hod_31", nk = "_handleHorizontal_12hod_51", rk = "_handleVertical_12hod_57", ok = "_handleGrip_12hod_63", sk = "_handleCollapseHint_12hod_75", ak = "_collapseBtn_12hod_79", lk = "_collapseBtnCollapsed_12hod_109", un = {
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
function Ln(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function aO({
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
  const d = e ?? t ?? "horizontal", _ = d === "horizontal", u = ne(null), y = B(() => {
    const w = n.length;
    if (w === 0) return [];
    const k = n.map((R) => R.size ? Fr(R.size, 100 / w) : 100 / w), A = k.reduce((R, z) => R + z, 0);
    return Math.abs(A - 100) > 0.01 && A > 0 ? k.map((R) => R / A * 100) : k;
  }, [n]), [m, g] = W(() => y()), [p, b] = W(
    () => n.map((w) => !!w.collapsed)
  ), h = ne(m);
  be(() => {
    b(n.map((w) => !!w.collapsed));
  }, [n]);
  const f = B(
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
      const k = !p[w];
      v(w, k) && (k ? (h.current = [...m], b((A) => {
        const R = [...A];
        return R[w] !== void 0 && (R[w] = !0), R;
      }), g((A) => {
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
      }), g(() => {
        const A = [...h.current];
        return A.length !== n.length ? n.map(() => 100 / n.length) : A;
      })));
    },
    [p, m, n.length, v]
  ), S = ne(
    null
  ), O = B(
    (w, k, A) => {
      const R = u.current;
      if (!R) return null;
      const z = R.getBoundingClientRect();
      let j;
      if (_) {
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
    [_, m]
  ), E = (w, k) => {
    k.preventDefault();
    const A = k.currentTarget;
    A.focus(), typeof A.setPointerCapture == "function" && A.setPointerCapture(k.pointerId), S.current = { handleIndex: w, pointerId: k.pointerId };
  }, I = (w) => {
    if (!S.current || S.current.pointerId !== w.pointerId)
      return;
    w.preventDefault();
    const k = S.current.handleIndex, A = O(k, w.clientX, w.clientY);
    if (A == null) return;
    const R = f(), z = x(), j = R[k] ?? 0, F = z[k] ?? 100, X = k + 1, ie = R[X] ?? 0, te = z[X] ?? 100, we = m[k] ?? 0, ae = m[X] ?? 0, _e = we + ae;
    if (_e <= 0) return;
    let K = Ln(A, j, F), me = _e - K;
    if (me < ie) {
      if (me = ie, K = _e - me, K < j || K > F) return;
    } else if (me > te && (me = te, K = _e - me, K < j || K > F))
      return;
    K = Ln(K, j, F), me = _e - K, N(k, K) && g((ue) => {
      const xe = [...ue];
      return xe[k] = K, xe[X] = me, xe;
    });
  }, D = (w) => {
    !S.current || S.current.pointerId !== w.pointerId || (S.current = null);
  }, T = (w, k) => {
    const A = f(), R = x(), z = w, j = w + 1, F = m[z] ?? 0, X = m[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[z]?.collapsible, ae = !!n[j]?.collapsible;
    if (_ ? k.key === "ArrowLeft" ? te = -5 : k.key === "ArrowRight" && (te = 5) : k.key === "ArrowUp" ? te = -5 : k.key === "ArrowDown" && (te = 5), k.key === "Home") {
      k.preventDefault();
      let _e = A[z] ?? 0, K = ie - _e;
      if (K = Ln(
        K,
        A[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = Ln(_e, A[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
      g((me) => {
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
      g((me) => {
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
      g((Me) => {
        const G = [...Me];
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
        _ ? un.horizontal : un.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((w, k) => {
        const A = !!p[k], R = A ? 0 : m[k] ?? 100 / n.length, z = A ? { display: "none" } : _ ? {
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
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
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
                    children: _ ? "◀" : "▲"
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
                    children: _ ? "▶" : "▼"
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
                children: _ ? "▶" : "▼"
              }
            )
          ) : null,
          X ? /* @__PURE__ */ M(
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
                _ ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => E(k, te),
              onPointerMove: I,
              onPointerUp: D,
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
const ik = "_root_1w3wd_1", ck = "_list_1w3wd_5", dk = "_vertical_1w3wd_14", uk = "_horizontal_1w3wd_20", fk = "_item_1w3wd_28", _k = "_link_1w3wd_32", pk = "_active_1w3wd_57", yr = {
  root: ik,
  list: ck,
  vertical: dk,
  horizontal: uk,
  item: fk,
  link: _k,
  active: pk
};
function lO({
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
  const d = t ?? n, _ = r ?? a ?? "vertical", [u, y] = W(
    () => e[0]?.selector ?? null
  ), m = ne(u);
  m.current = u;
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
        const f = b;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
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
    let h = null;
    const f = /* @__PURE__ */ new Map(), x = () => {
      let v = null, C = null;
      for (const O of e) {
        const E = document.querySelector(O.selector);
        if (!E) continue;
        f.set(O.selector, E);
        const I = E.getBoundingClientRect();
        let D = I.top;
        if (b !== window) {
          const T = b.getBoundingClientRect();
          D = I.top - T.top;
        }
        D <= 80 ? (!C || D > C.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (C = { sel: O.selector, el: E }) : (!v || D < v.top) && (v = { sel: O.selector, top: D });
      }
      const S = C?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== m.current && y(S);
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
        const S = C.filter((O) => O.isIntersecting).sort((O, E) => O.boundingClientRect.top - E.boundingClientRect.top);
        if (S[0]) {
          const O = S[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === O) {
              y(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && O.id === E.selector.slice(1)) {
              y(E.selector);
              break;
            }
          }
        } else
          x();
      }, v);
      for (const C of e) {
        const S = document.querySelector(C.selector);
        S && (h.observe(S), f.set(C.selector, S));
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
      className: [yr.root, yr[_], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: yr.list, children: e.map((p) => {
        const b = p.selector === u;
        return /* @__PURE__ */ o("li", { className: yr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [yr.link, b ? yr.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const f = document.querySelector(p.selector);
              g(p, f);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const hk = "_root_1bfit_1", mk = "_viewport_1bfit_17", gk = "_slide_1bfit_24", yk = "_active_1bfit_33", bk = "_arrow_1bfit_37", xk = "_prev_1bfit_71", vk = "_next_1bfit_75", wk = "_pauseBtn_1bfit_79", kk = "_indicators_1bfit_110", Nk = "_indicator_1bfit_110", Sk = "_indicatorActive_1bfit_145", fn = {
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
  indicatorActive: Sk
};
function iO({
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
  showArrows: _,
  ShowArrows: u,
  showIndicators: y,
  ShowIndicators: m,
  onChange: g,
  Change: p,
  ariaLabel: b = "Carousel",
  className: h
}) {
  const f = t ?? n, x = f !== void 0, [N, v] = W(() => Math.min(Math.max(0, f ?? r), Math.max(0, e.length - 1))), C = x ? f : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), O = a ?? i ?? !1, E = c ?? s ?? 3e3, I = l ?? d ?? !0, D = _ ?? u ?? !0, T = y ?? m ?? !0, [w, k] = W(!1), [A, R] = W(!1), z = w || A, j = ne(null), F = lt(), X = B(
    (xe) => {
      const pe = e.length === 0 ? 0 : (xe % e.length + e.length) % e.length;
      x || v(pe), (g ?? p)?.(pe);
    },
    [x, g, p, e.length]
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
    if (!O || z || e.length <= 1) return;
    const xe = setInterval(() => {
      X(S + 1);
    }, E);
    return () => clearInterval(xe);
  }, [O, z, E, S, X, e.length]);
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
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [fn.root, h].filter(Boolean).join(" "),
      onKeyDown: ae,
      onMouseEnter: _e,
      onMouseLeave: K,
      onFocusCapture: me,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ o("div", { id: F, className: fn.viewport, children: e.map((xe, pe) => {
          const Me = pe === S;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${pe + 1} of ${e.length}`,
              "aria-hidden": Me ? void 0 : !0,
              hidden: !Me,
              className: [fn.slide, Me ? fn.active : null].filter(Boolean).join(" "),
              children: xe
            },
            pe
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ M(st, { children: [
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
        O ? /* @__PURE__ */ o(
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
              const Me = pe === S;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    fn.indicator,
                    Me ? fn.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${pe + 1}`,
                  "aria-current": Me ? "true" : void 0,
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
const $k = "_root_1aa5u_1", Ok = "_group_1aa5u_20", Ek = "_itemWrapper_1aa5u_30", Tk = "_treeitem_1aa5u_34", Ck = "_disabled_1aa5u_50", Ak = "_selected_1aa5u_60", Mk = "_caret_1aa5u_66", Dk = "_caretIcon_1aa5u_113", Ik = "_caretOpen_1aa5u_120", zk = "_caretPlaceholder_1aa5u_124", Lk = "_label_1aa5u_130", Rk = "_loading_1aa5u_137", Pk = "_loadingRow_1aa5u_143", jk = "_empty_1aa5u_149", Bk = "_checkbox_1aa5u_155", Dt = {
  root: $k,
  group: Ok,
  itemWrapper: Ek,
  treeitem: Tk,
  disabled: Ck,
  selected: Ak,
  caret: Mk,
  caretIcon: Dk,
  caretOpen: Ik,
  caretPlaceholder: zk,
  label: Lk,
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
function cO({
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
  selectedItem: _,
  SelectedItem: u,
  selectedItems: y,
  SelectedItems: m,
  defaultSelectedItem: g,
  defaultSelectedItems: p,
  onChange: b,
  Change: h,
  onExpand: f,
  Expand: x,
  onCollapse: N,
  Collapse: v,
  loadChildData: C,
  LoadChildData: S,
  template: O,
  Template: E,
  itemTemplate: I,
  ItemTemplate: D,
  ariaLabel: T,
  AriaLabel: w,
  allowCheckBoxes: k = !1,
  checkedKeys: A,
  defaultCheckedKeys: R,
  onCheckedChange: z,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = a ?? i ?? "text", we = c ?? s ?? "id", ae = l ?? d ?? "single", _e = T ?? w ?? "Tree", K = C ?? S, me = O ?? E ?? I ?? D, ue = B(
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
  ), Me = B(
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
    () => Me(X)
  ), [re, Ae] = W(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = W(() => /* @__PURE__ */ new Set()), Ge = _ ?? u, Qe = y ?? m, bt = ae === "multiple" ? Qe !== void 0 : Ge !== void 0, Z = B(() => {
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
  ]), [L, Y] = W(
    () => Z()
  ), Q = $e(() => {
    if (ae === "multiple") {
      if (Qe !== void 0) {
        const q = Qe;
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
    Qe,
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
      const Ne = G.has(ee), ke = f ?? x, Ce = N ?? v, Ke = pe(q), dt = re.get(ee) ?? Ke, Et = !(dt !== void 0 && dt.length > 0) && K != null;
      if (Ne) {
        Oe((ht) => {
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
          }), Oe((Tt) => {
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
      Oe((ht) => {
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
      f,
      x,
      N,
      v
    ]
  ), Ze = $e(() => {
    const q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ue(Ke);
        q.has(Be) || q.set(Be, []), ee.set(Be, Ce), Ke.disabled && de.add(Be);
        const ot = re.get(Be) ?? pe(Ke);
        ot && ot.length > 0 && (q.set(
          Be,
          ot.map((Et) => ue(Et))
        ), Ne(ot, Be));
      }
    };
    return Ne(X, null), { childrenOf: q, parentOf: ee, disabledKeys: de };
  }, [X, re, ue, pe]), et = B(
    (q) => {
      const ee = [], de = [...Ze.childrenOf.get(q) ?? []];
      for (; de.length > 0; ) {
        const Ne = de.pop();
        ee.push(Ne), de.push(...Ze.childrenOf.get(Ne) ?? []);
      }
      return ee;
    },
    [Ze]
  ), [rt, Xt] = W(
    () => new Set(R ?? [])
  ), oe = A !== void 0 ? new Set(A) : rt, Le = B(
    (q) => {
      const ee = Ze.disabledKeys;
      return et(q).filter((de) => !ee.has(de));
    },
    [et, Ze]
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
  ), Ie = $e(() => {
    const q = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, Ke) => {
        const Be = ue(Ce), dt = xe(Ce), ot = re.get(Be) ?? pe(Ce);
        let Et;
        re.has(Be) ? Et = re.get(Be).length > 0 : ot !== void 0 ? Et = ot.length > 0 : K ? Et = !0 : Et = !1;
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
          const hn = re.get(Be) ?? ot;
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
        const ke = (Ot.current + q.key).toLowerCase();
        Ot.current = ke, ct.current && clearTimeout(ct.current), ct.current = setTimeout(() => {
          Ot.current = "";
        }, 500);
        const Ce = ee >= 0 ? ee + 1 : 0, dt = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((ot) => ot.text.toLowerCase().startsWith(ke));
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
  }, [qe, Ie]), Xe = (q, ee, de) => /* @__PURE__ */ o("ul", { role: "group", className: Dt.group, children: q.map((Ne, ke) => {
    const Ce = ue(Ne), Ke = xe(Ne), Be = re.get(Ce) ?? pe(Ne);
    let dt;
    re.has(Ce) ? dt = re.get(Ce).length > 0 : Be !== void 0 ? dt = Be.length > 0 : K ? dt = !0 : dt = !1;
    const ot = G.has(Ce), Et = Q.has(Ce), ht = !!Ne.disabled, ze = fe.has(Ce), Tt = qe === Ce, Zt = q.length, hn = ke + 1, Cn = me ? me(Ne) : Ke, Fn = k ? {
      checked: Nt(Ce),
      indeterminate: Rt(Ce)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: Dt.itemWrapper, children: [
      /* @__PURE__ */ M(
        "div",
        {
          role: "treeitem",
          "data-key": Ce,
          tabIndex: Tt ? 0 : -1,
          "aria-expanded": dt ? ot : void 0,
          "aria-selected": Et,
          "aria-level": ee,
          "aria-setsize": Zt,
          "aria-posinset": hn,
          "aria-disabled": ht || void 0,
          "aria-busy": ze || void 0,
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
            k ? /* @__PURE__ */ o(
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
                "aria-label": `${ot ? "Collapse" : "Expand"} ${Ke}`,
                "aria-expanded": ot,
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
                      ot ? Dt.caretOpen : null
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
            ze ? /* @__PURE__ */ o("span", { className: Dt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && ot ? ze ? /* @__PURE__ */ o("div", { className: Dt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : re.has(Ce) && re.get(Ce).length > 0 ? Xe(
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
function dO({
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
  onSourceChange: _,
  SourceChange: u,
  onTargetChange: y,
  TargetChange: m,
  keyProperty: g,
  KeyProperty: p,
  onMove: b,
  Move: h,
  ariaLabel: f,
  AriaLabel: x,
  className: N
}) {
  const v = g ?? p ?? "id", C = f ?? x ?? "PickList", S = e ?? t ?? a ?? i ?? l ?? d ?? [], O = n ?? r ?? c ?? s ?? [], [E, I] = W(() => [
    ...S
  ]), [D, T] = W(() => [
    ...O
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
    const L = O.findIndex((Y) => !Y.disabled);
    return L >= 0 ? L : 0;
  }), ie = $e(
    () => E.map((L, Y) => L.disabled ? -1 : Y).filter((L) => L >= 0),
    [E]
  ), te = $e(
    () => D.map((L, Y) => L.disabled ? -1 : Y).filter((L) => L >= 0),
    [D]
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
    if (F >= D.length) {
      const L = te[te.length - 1];
      X(L ?? 0);
    } else if (D.length > 0 && te.length > 0 && !te.includes(F)) {
      const L = te[0];
      L !== void 0 && X(L);
    }
  }, [F, D.length, te]), be(() => {
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
        D.some(
          (le) => It(le, v) === Q && !le.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [D, v]);
  const we = B(
    (L) => {
      (_ ?? u)?.(L);
    },
    [_, u]
  ), ae = B(
    (L) => {
      (y ?? m)?.(L);
    },
    [y, m]
  ), _e = B(
    (L) => {
      (b ?? h)?.(L);
    },
    [b, h]
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
      const Y = D[L];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      R((ge) => {
        const le = new Set(ge);
        return le.has(Q) ? le.delete(Q) : le.add(Q), le;
      }), X(L);
    },
    [D, v]
  ), ue = B(() => {
    const L = [], Y = [];
    for (const Ee of E) {
      const je = It(Ee, v);
      w.has(je) && !Ee.disabled ? L.push(Ee) : Y.push(Ee);
    }
    if (L.length === 0) return;
    const Q = Y, ge = [...D, ...L];
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
    D,
    w,
    v,
    we,
    ae,
    _e
  ]), xe = B(() => {
    const L = [], Y = [];
    for (const Ee of D) {
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
    D,
    A,
    v,
    we,
    ae,
    _e
  ]), pe = B(() => {
    const L = E.filter((ge) => !ge.disabled);
    if (L.length === 0) return;
    const Y = E.filter((ge) => !!ge.disabled), Q = [...D, ...L];
    I(Y), T(Q), k(/* @__PURE__ */ new Set()), we(Y), ae(Q), _e({
      source: Y,
      target: Q,
      moved: L,
      direction: "allToTarget"
    });
  }, [
    E,
    D,
    v,
    we,
    ae,
    _e
  ]), Me = B(() => {
    const L = D.filter((ge) => !ge.disabled);
    if (L.length === 0) return;
    const Y = D.filter((ge) => !!ge.disabled), Q = [...E, ...L];
    T(Y), I(Q), R(/* @__PURE__ */ new Set()), we(Q), ae(Y), _e({
      source: Q,
      target: Y,
      moved: L,
      direction: "allToSource"
    });
  }, [E, D, we, ae, _e]), G = B(() => {
    if (A.size === 0) return;
    const L = [...D], Y = A, Q = [];
    for (let le = 1; le < L.length; le++) {
      const Ee = L[le], je = L[le - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), et = It(je, v);
      Y.has(Ze) && !Y.has(et) && !Ee.disabled && !je.disabled && (L[le - 1] = Ee, L[le] = je, Q.push(Ee));
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
    D,
    A,
    v,
    E,
    ae,
    _e
  ]), Oe = B(() => {
    if (A.size === 0) return;
    const L = [...D], Y = A, Q = [];
    for (let le = L.length - 2; le >= 0; le--) {
      const Ee = L[le], je = L[le + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), et = It(je, v);
      Y.has(Ze) && !Y.has(et) && !Ee.disabled && !je.disabled && (L[le] = je, L[le + 1] = Ee, Q.push(Ee));
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
    D,
    A,
    v,
    E,
    ae,
    _e
  ]), re = w.size > 0, Ae = A.size > 0, fe = ne(""), Fe = ne(
    null
  ), Ge = ne(""), Qe = ne(
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
          (et) => ho(E[et]).toLowerCase().startsWith(le)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [E, ie, z, K]
  ), it = B(
    (L) => {
      if (D.length === 0) return;
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
        Ge.current = le, Qe.current && clearTimeout(Qe.current), Qe.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (et) => ho(D[et]).toLowerCase().startsWith(le)
        );
        Ze != null && X(Ze);
        return;
      }
      ge >= 0 && X(ge);
    },
    [D, te, F, me]
  ), bt = ne(null), Z = ne(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [nt.root, N].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ M("div", { className: nt.panel, children: [
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
              onKeyDown: At,
              children: E.length === 0 ? (
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
                      nt.option,
                      ge ? nt.selected : null,
                      le ? nt.active : null,
                      Ee ? nt.disabled : null
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
        /* @__PURE__ */ M("div", { className: nt.controls, children: [
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
              className: nt.btn,
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
              className: nt.btn,
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
              className: nt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: D.filter((L) => !L.disabled).length === 0,
              onClick: Me,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: nt.panel, children: [
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
              ) : D.map((L, Y) => {
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
                      nt.option,
                      ge ? nt.selected : null,
                      le ? nt.active : null,
                      Ee ? nt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => me(Y),
                    children: ho(L)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: nt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: nt.btn,
                "aria-label": "Move up",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
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
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
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
function uO({
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
  const [d, _] = W(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? d, y = (p) => {
    n || _(p), r?.(p);
  }, m = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (p, b) => {
    const h = new Date(u);
    return h.setDate(u.getDate() - u.getDay() + b), h;
  }) : Array.from({ length: 30 }, (p, b) => {
    const h = new Date(u);
    return h.setDate(1 + b), h;
  }), g = Array.from({ length: 12 }, (p, b) => 8 + b);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Gt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ M("div", { className: Gt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(u);
                p.setDate(p.getDate() - 7), y(p);
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
        /* @__PURE__ */ M("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Gt.timeCol, role: "presentation", children: g.map((p) => /* @__PURE__ */ M("div", { className: Gt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          m.map((p) => /* @__PURE__ */ M(
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
function fO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: a
}) {
  const [i, c] = W(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Tn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: Tn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Tn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: Tn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ M(
          "div",
          {
            className: Tn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Tn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ M("div", { className: Tn.timelineCell, role: "gridcell", children: [
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
const kN = "_root_4b64f_1", NN = "_fields_4b64f_6", SN = "_chip_4b64f_13", $N = "_table_4b64f_35", ON = "_totalRow_4b64f_55", EN = "_total_4b64f_55", br = {
  root: kN,
  fields: NN,
  chip: SN,
  table: $N,
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
function _O({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, _ = (b, h, f) => {
    const x = b === "row" ? s.filter((C) => C.property !== h) : s, N = b === "col" ? l.filter((C) => C.property !== h) : l, v = b === "agg" ? d.filter((C) => !(C.property === h && C.aggregate === f)) : d;
    a?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (b, h) => h.map((f) => String(b[f.property])).join(""), y = [
    ...new Set(s.length ? e.map((b) => u(b, s)) : [""])
  ].sort(), m = [
    ...new Set(l.length ? e.map((b) => u(b, l)) : [""])
  ].sort(), g = (b, h, f) => {
    const x = e.filter(
      (v) => u(v, s) === b && u(v, l) === h
    ), N = x.map((v) => Number(v[f.property])).filter((v) => !Number.isNaN(v));
    return !N.length && f.aggregate !== "Count" ? 0 : mo[f.aggregate](
      f.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, p = (b, h, f, x) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: br.chip,
      "aria-label": `Remove ${b} field ${f}`,
      onClick: () => _(b, h, x),
      children: [
        f,
        x ? ` (${x})` : ""
      ]
    },
    `${b}-${f}-${x ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [br.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: br.fields, children: [
      s.map((b) => p("row", b.property, b.title ?? b.property)),
      l.map((b) => p("col", b.property, b.title ?? b.property)),
      d.map(
        (b) => p("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: br.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        m.map((b) => /* @__PURE__ */ o("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        y.map((b) => /* @__PURE__ */ M("tr", { children: [
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
                  (f) => u(f, s) === b && u(f, l) === h
                ).map((f) => Number(f[d[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ M("tr", { className: br.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          m.map((b) => /* @__PURE__ */ o("td", { children: d.length ? Hr(
            mo[d[0].aggregate](
              e.filter((h) => u(h, l) === b).map((h) => Number(h[d[0].property])).filter((h) => !Number.isNaN(h))
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
const TN = "_root_1r7co_1", CN = "_reverse_1r7co_10", AN = "_item_1r7co_14", MN = "_marker_1r7co_35", DN = "_body_1r7co_46", IN = "_label_1r7co_50", zN = "_content_1r7co_56", rr = {
  root: TN,
  reverse: CN,
  item: AN,
  marker: MN,
  body: DN,
  label: IN,
  content: zN
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
      className: [rr.root, t ? rr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: a.map((i, c) => /* @__PURE__ */ M("li", { className: rr.item, children: [
        /* @__PURE__ */ o("span", { className: rr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: rr.body, children: [
          /* @__PURE__ */ o("div", { className: rr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: rr.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const LN = "_root_rm4d8_1", RN = "_header_rm4d8_13", PN = "_headCell_rm4d8_22", jN = "_row_rm4d8_32", BN = "_cell_rm4d8_37", Ur = {
  root: LN,
  header: RN,
  headCell: PN,
  row: jN,
  cell: BN
};
function hO({
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
  ), [d, _] = W(0), u = ne(/* @__PURE__ */ new Set()), y = Math.ceil(n / t), m = Math.max(0, Math.floor(d / t) - 3), g = Math.min(e, m + y + 6), p = B(
    (h, f) => {
      let x = !1;
      for (let N = h; N < f; N++)
        !s.has(N) && !u.current.has(N) && (x = !0);
      if (x) {
        for (let N = h; N < f; N++) u.current.add(N);
        r({ skip: h, top: f }).then((N) => {
          l((v) => {
            const C = new Map(v);
            return N.forEach((S, O) => C.set(h + O, S)), C;
          });
          for (let v = h; v < f; v++) u.current.delete(v);
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
    const f = s.get(h) ?? {};
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
              children: String(f[x.property] ?? "")
            },
            x.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Ur.root, c].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (h) => _(h.target.scrollTop),
      onKeyDown: (h) => {
        const f = h.currentTarget;
        h.key === "ArrowDown" ? (h.preventDefault(), f.scrollTop += t) : h.key === "ArrowUp" ? (h.preventDefault(), f.scrollTop -= t) : h.key === "PageDown" ? (h.preventDefault(), f.scrollTop += n) : h.key === "PageUp" && (h.preventDefault(), f.scrollTop -= n);
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
    constructor(s, l, d, _) {
      if (this.version = s, this.errorCorrectionLevel = l, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (_ < -1 || _ > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let u = [];
      for (let m = 0; m < this.size; m++) u.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(d);
      if (this.drawCodewords(y), _ == -1) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const p = this.getPenaltyScore();
          p < m && (_ = g, m = p), this.applyMask(g);
        }
      }
      a(0 <= _ && _ <= 7), this.mask = _, this.applyMask(_), this.drawFormatBits(_), this.isFunction = [];
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
    static encodeSegments(s, l, d = 1, _ = 40, u = -1, y = !0) {
      if (!(t.MIN_VERSION <= d && d <= _ && _ <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let m, g;
      for (m = d; ; m++) {
        const f = t.getNumDataCodewords(m, l) * 8, x = i.getTotalBits(s, m);
        if (x <= f) {
          g = x;
          break;
        }
        if (m >= _)
          throw new RangeError("Data too long");
      }
      for (const f of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        y && g <= t.getNumDataCodewords(m, f) * 8 && (l = f);
      let p = [];
      for (const f of s) {
        n(f.mode.modeBits, 4, p), n(f.numChars, f.mode.numCharCountBits(m), p);
        for (const x of f.getData()) p.push(x);
      }
      a(p.length == g);
      const b = t.getNumDataCodewords(m, l) * 8;
      a(p.length <= b), n(0, Math.min(4, b - p.length), p), n(0, (8 - p.length % 8) % 8, p), a(p.length % 8 == 0);
      for (let f = 236; p.length < b; f ^= 253)
        n(f, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (f, x) => h[x >>> 3] |= f << 7 - (x & 7)
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
        for (let _ = 0; _ < l; _++)
          d == 0 && _ == 0 || d == 0 && _ == l - 1 || d == l - 1 && _ == 0 || this.drawAlignmentPattern(s[d], s[_]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const l = this.errorCorrectionLevel.formatBits << 3 | s;
      let d = l;
      for (let u = 0; u < 10; u++) d = d << 1 ^ (d >>> 9) * 1335;
      const _ = (l << 10 | d) ^ 21522;
      a(_ >>> 15 == 0);
      for (let u = 0; u <= 5; u++)
        this.setFunctionModule(8, u, r(_, u));
      this.setFunctionModule(8, 7, r(_, 6)), this.setFunctionModule(8, 8, r(_, 7)), this.setFunctionModule(7, 8, r(_, 8));
      for (let u = 9; u < 15; u++)
        this.setFunctionModule(14 - u, 8, r(_, u));
      for (let u = 0; u < 8; u++)
        this.setFunctionModule(this.size - 1 - u, 8, r(_, u));
      for (let u = 8; u < 15; u++)
        this.setFunctionModule(8, this.size - 15 + u, r(_, u));
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
        const _ = r(l, d), u = this.size - 11 + d % 3, y = Math.floor(d / 3);
        this.setFunctionModule(u, y, _), this.setFunctionModule(y, u, _);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let _ = -4; _ <= 4; _++) {
          const u = Math.max(Math.abs(_), Math.abs(d)), y = s + _, m = l + d;
          0 <= y && y < this.size && 0 <= m && m < this.size && this.setFunctionModule(y, m, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, l) {
      for (let d = -2; d <= 2; d++)
        for (let _ = -2; _ <= 2; _++)
          this.setFunctionModule(
            s + _,
            l + d,
            Math.max(Math.abs(_), Math.abs(d)) != 1
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
      const _ = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], u = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], y = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), m = _ - y % _, g = Math.floor(y / _);
      let p = [];
      const b = t.reedSolomonComputeDivisor(u);
      for (let f = 0, x = 0; f < _; f++) {
        let N = s.slice(
          x,
          x + g - u + (f < m ? 0 : 1)
        );
        x += N.length;
        const v = t.reedSolomonComputeRemainder(N, b);
        f < m && N.push(0), p.push(N.concat(v));
      }
      let h = [];
      for (let f = 0; f < p[0].length; f++)
        p.forEach((x, N) => {
          (f != g - u || N >= m) && h.push(x[f]);
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
        for (let _ = 0; _ < this.size; _++)
          for (let u = 0; u < 2; u++) {
            const y = d - u, g = (d + 1 & 2) == 0 ? this.size - 1 - _ : _;
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
          let _;
          switch (s) {
            case 0:
              _ = (d + l) % 2 == 0;
              break;
            case 1:
              _ = l % 2 == 0;
              break;
            case 2:
              _ = d % 3 == 0;
              break;
            case 3:
              _ = (d + l) % 3 == 0;
              break;
            case 4:
              _ = (Math.floor(d / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              _ = d * l % 2 + d * l % 3 == 0;
              break;
            case 6:
              _ = (d * l % 2 + d * l % 3) % 2 == 0;
              break;
            case 7:
              _ = ((d + l) % 2 + d * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][d] && _ && (this.modules[l][d] = !this.modules[l][d]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let u = 0; u < this.size; u++) {
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[u][p] == y ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), y || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), y = this.modules[u][p], m = 1);
        s += this.finderPenaltyTerminateAndCount(y, m, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][u] == y ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), y || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), y = this.modules[p][u], m = 1);
        s += this.finderPenaltyTerminateAndCount(y, m, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let y = 0; y < this.size - 1; y++) {
          const m = this.modules[u][y];
          m == this.modules[u][y + 1] && m == this.modules[u + 1][y] && m == this.modules[u + 1][y + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const u of this.modules)
        l = u.reduce((y, m) => y + (m ? 1 : 0), l);
      const d = this.size * this.size, _ = Math.ceil(Math.abs(l * 20 - d * 10) / d) - 1;
      return a(0 <= _ && _ <= 9), s += _ * t.PENALTY_N4, a(0 <= s && s <= 2568888), s;
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
        for (let _ = this.size - 7; d.length < s; _ -= l)
          d.splice(1, 0, _);
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
      for (let _ = 0; _ < s - 1; _++) l.push(0);
      l.push(1);
      let d = 1;
      for (let _ = 0; _ < s; _++) {
        for (let u = 0; u < l.length; u++)
          l[u] = t.reedSolomonMultiply(l[u], d), u + 1 < l.length && (l[u] ^= l[u + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let d = l.map((_) => 0);
      for (const _ of s) {
        const u = _ ^ d.shift();
        d.push(0), l.forEach(
          (y, m) => d[m] ^= t.reedSolomonMultiply(y, u)
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
      for (let _ = 7; _ >= 0; _--)
        d = d << 1 ^ (d >>> 7) * 285, d ^= (l >>> _ & 1) * s;
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
        const _ = Math.min(s.length - d, 3);
        n(parseInt(s.substring(d, d + _), 10), _ * 3 + 1, l), d += _;
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
        let _ = i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d)) * 45;
        _ += i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d + 1)), n(_, 11, l);
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
      for (const _ of s) {
        const u = _.mode.numCharCountBits(l);
        if (_.numChars >= 1 << u) return 1 / 0;
        d += 4 + u + _.bitData.length;
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
function mO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = ne(null), _ = cs("(prefers-color-scheme: dark)"), [u, y] = W(null);
  be(() => {
    const N = document.documentElement;
    y(N.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      y(N.dataset.theme ?? null);
    });
    return v.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const m = $e(() => {
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
    const N = d.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const C = getComputedStyle(N), S = C.getPropertyValue("--dx-text-color").trim() || "#000", O = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    WN(v, m, t, p, S, O);
  }, [n, m, t, p, _, u]), m === null)
    return /* @__PURE__ */ o("div", { className: b, role: "img", "aria-label": l, "data-qr-error": "true" });
  const h = m.size + p * 2, f = t / h;
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
            x: (v + p) * f,
            y: (N + p) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${v}-${N}`
        )
      );
  return /* @__PURE__ */ M(
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
function gO({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: a,
  className: i
}) {
  const c = a ?? `Barcode ${e}`, s = $e(() => {
    const l = [];
    let d = 0;
    for (const _ of VN(e)) {
      const u = va[_] ?? va[0];
      for (let y = 0; y < u.length; y++) {
        const m = Number(u[y]);
        y % 2 === 0 && l.push({ x: d, w: m }), d += m;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [xa.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
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
const YN = "_root_16i43_1", XN = "_svg_16i43_10", ZN = "_gridline_16i43_15", JN = "_tickLabel_16i43_21", QN = "_axisTitle_16i43_27", eS = "_dataLabel_16i43_34", tS = "_gaugeValue_16i43_40", nS = "_legend_16i43_47", rS = "_legendItem_16i43_55", oS = "_swatch_16i43_63", sS = "_tooltip_16i43_70", aS = "_visuallyHidden_16i43_84", Je = {
  root: YN,
  svg: XN,
  gridline: ZN,
  tickLabel: JN,
  axisTitle: QN,
  dataLabel: eS,
  gaugeValue: tS,
  legend: nS,
  legendItem: rS,
  swatch: oS,
  tooltip: sS,
  visuallyHidden: aS
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
]), lS = /* @__PURE__ */ new Set([...Ja, "heatmap"]);
function iS(e, t, n) {
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
function pn(e, t, n) {
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
const Ut = (e) => e * Math.PI / 180;
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
function Qa(e) {
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
  const i = rs(a).filter((_) => !Number.isNaN(_.val));
  if (i.length === 0) return null;
  const c = i.map((_) => _.cat);
  let s;
  if (t.type === "trendline") {
    const _ = i.length, u = i.map((f, x) => x), y = i.map((f) => f.val), m = u.reduce((f, x) => f + x, 0) / _, g = y.reduce((f, x) => f + x, 0) / _;
    let p = 0, b = 0;
    for (let f = 0; f < _; f++)
      p += (u[f] - m) * (y[f] - g), b += (u[f] - m) * (u[f] - m);
    const h = b === 0 ? 0 : p / b;
    s = c.map((f, x) => ({
      cat: f,
      val: g + h * (x - m)
    }));
  } else {
    const _ = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((u, y) => {
      if (y + 1 < _) return null;
      const m = i.slice(y + 1 - _, y + 1);
      return {
        cat: u.cat,
        val: m.reduce((g, p) => g + p.val, 0) / _
      };
    }).filter((u) => u != null);
  }
  if (s.length === 0) return null;
  const l = {
    ...t,
    stack: void 0,
    categoryProperty: "__cat",
    valueProperty: "__val",
    data: s.map((_, u) => ({
      __cat: _.cat,
      __val: _.val,
      __item: i[u + (i.length - s.length)]?.item
    })),
    markers: { ...t.markers ?? {}, visible: t.markers?.visible ?? !1 }
  }, d = rs(l).map((_) => ({
    ..._,
    item: _.item.__item ?? _.item
  }));
  return el(e, l, n, d, r);
}
function fS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((u, y) => [u, y])), s = n.map((u) => {
    const y = c.get(u.cat) ?? 0, m = u.min, g = u.max;
    return typeof m != "number" || Number.isNaN(m) || typeof g != "number" || Number.isNaN(g) ? null : { x: r(y), lo: a(m), hi: a(g) };
  });
  if (s.some((u) => u == null)) return null;
  const l = s.map((u) => `L ${u.x} ${u.hi}`).join(" "), d = [...s].reverse().map((u) => `L ${u.x} ${u.lo}`).join(" "), _ = s[0];
  return /* @__PURE__ */ o(
    "path",
    {
      d: `M ${_.x} ${_.hi} ${l} ${d} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function _S(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s } = e, l = i.l + c / 2, d = i.t + s / 2, _ = Math.min(c, s) / 3, u = t.type === "donut" ? t.innerRadius ?? _ * 0.5 : 0, y = r.reduce((g, p) => g + (Number(p.val) || 0), 0);
  let m = -90;
  return pn(
    n,
    t,
    r.map((g, p) => {
      const b = y ? g.val / y * 360 : 0, h = m, f = m + b;
      m = f;
      const x = b > 180 ? 1 : 0, N = l + _ * Math.cos(Ut(h)), v = d + _ * Math.sin(Ut(h)), C = l + _ * Math.cos(Ut(f)), S = d + _ * Math.sin(Ut(f)), O = l + u * Math.cos(Ut(f)), E = d + u * Math.sin(Ut(f)), I = l + u * Math.cos(Ut(h)), D = d + u * Math.sin(Ut(h)), T = u ? `M ${N} ${v} A ${_} ${_} 0 ${x} 1 ${C} ${S} L ${O} ${E} A ${u} ${u} 0 ${x} 0 ${I} ${D} Z` : `M ${l} ${d} L ${N} ${v} A ${_} ${_} 0 ${x} 1 ${C} ${S} Z`, w = (h + f) / 2, k = l + (_ + 12) * Math.cos(Ut(w)), A = d + (_ + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: T,
            fill: a,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, A, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: k,
            y: A,
            textAnchor: "middle",
            className: Je.dataLabel,
            children: g.val
          }
        )
      ] }, p);
    })
  );
}
function pS(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: _ } = e, u = new Map(_.map((y, m) => [y, m]));
  return pn(
    n,
    t,
    r.map((y, m) => {
      const g = u.get(y.cat) ?? 0, p = Number(r[m].cat), b = Number.isNaN(p) ? l(g) : i.l + (p - s.min) / (s.max - s.min || 1) * c, h = d(y.val), f = t.type === "bubble" && y.size !== void 0 ? Math.max(4, Math.min(12, y.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        So(b, h, a, t, f),
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
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, _ = new Map(l.map((g, p) => [g, p])), u = (g) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let b = 0; b < n; b++) {
      const h = d[b];
      if (h?.stack !== t.stack) continue;
      const f = h.data.find(
        (x) => String(x[h.categoryProperty] ?? "") === g
      );
      f && (p += Number(f[h.valueProperty]) || 0);
    }
    return p;
  }, y = r.map((g, p) => {
    const b = _.get(g.cat) ?? 0, h = u(g.cat);
    return `${p === 0 ? "M" : "L"} ${c(b)} ${s(h + g.val)}`;
  }).join(" "), m = r.map((g, p) => {
    const b = _.get(g.cat) ?? 0, h = u(g.cat);
    return `${p === 0 ? "M" : "L"} ${c(b)} ${s(h)}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(st, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${y} L ${c(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${c(0)} ${s(u(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      fS(e, t, r),
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
        const b = _.get(g.cat) ?? 0, h = u(g.cat), f = c(b), x = s(h + g.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          So(f, x, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: f - 12,
              y: x - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                f,
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
              x: f,
              y: x - 8,
              textAnchor: "middle",
              className: Je.dataLabel,
              children: Yr(e, g.val)
            }
          )
        ] }, p);
      })
    ] })
  );
}
function hS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: _, categories: u, series: y } = e, m = new Map(u.map((p, b) => [p, b])), g = t.type === "bar";
  return pn(
    n,
    t,
    r.map((p, b) => {
      const h = m.get(p.cat) ?? 0;
      let f = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const A = y[k];
          if (A?.stack !== t.stack) continue;
          const R = A.data.find(
            (z) => String(z[A.categoryProperty] ?? "") === p.cat
          );
          R && (f += Number(R[A.valueProperty]) || 0);
        }
      const x = f + p.val, N = typeof p.min == "number" && !Number.isNaN(p.min) && typeof p.max == "number" && !Number.isNaN(p.max), v = y.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, C = c / Math.max(1, u.length), S = g ? 18 : Math.max(12, C / (t.stack ? 1 : y.length) - 4), O = g ? i.l + f / (l.max - l.min || 1) * c : d(h) - S / 2 + (t.stack ? 0 : n % v * S), E = g ? i.t + h * s / Math.max(1, u.length) + 4 : _(N ? f + p.max : x), I = g ? N ? (p.max - p.min) / (l.max - l.min || 1) * c : p.val / (l.max - l.min || 1) * c : S - 4, D = g ? 16 : N ? _(f + p.min) - _(f + p.max) : _(f) - _(x), T = g ? i.l + (f + (N ? p.min : 0)) / (l.max - l.min || 1) * c : O, w = g ? i.t + h * s / Math.max(1, u.length) + 4 : E;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: T,
            y: w,
            width: g ? I : S - 4,
            height: D,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              T + (g ? I : S) / 2,
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
            x: T + (g ? I : S) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: Je.dataLabel,
            children: Yr(e, p.val)
          }
        )
      ] }, b);
    })
  );
}
function mS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: _, hideTip: u } = e, y = i.l + c / 2, m = i.t + s * 0.78, g = Math.min(c, s) * 0.36, p = 135, b = 270, h = r.reduce((C, S) => C + (Number(S.val) || 0), 0), f = l.max - l.min || 1, x = Math.min(1, Math.max(0, (h - l.min) / f)), N = (C, S) => {
    const [O, E] = [
      y + g * Math.cos(Ut(C)),
      m + g * Math.sin(Ut(C))
    ], [I, D] = [
      y + g * Math.cos(Ut(S)),
      m + g * Math.sin(Ut(S))
    ], T = S - C > 180 ? 1 : 0;
    return `M ${O} ${E} A ${g} ${g} 0 ${T} 1 ${I} ${D}`;
  }, v = Number(h.toFixed(2));
  return pn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ M("g", { role: "listitem", children: [
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
      /* @__PURE__ */ o("text", { x: y, y: m - 4, textAnchor: "middle", className: Je.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(p, p + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && _(y, m - g, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
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
          className: Je.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function _s(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (u) => Ut(-90 + 360 * u / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (u, y) => {
    const m = d(u);
    return [
      i + s * y * Math.cos(m),
      c + s * y * Math.sin(m)
    ];
  } };
}
function gS(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: a } = _s(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: _, radius: u, angleFor: y, vertexFor: m } = _s(e), g = e.scale.max || 1, p = (h) => r.find((f) => f.cat === h)?.val ?? 0, b = i.map((h, f) => {
    const x = Math.min(1, Math.max(0, p(h) / g)), [N, v] = m(f, x);
    return `${N},${v}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(st, { children: [
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
      i.map((h, f) => {
        const x = Math.min(1, Math.max(0, p(h) / g)), [N, v] = m(f, x), [C, S] = m(f, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
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
                const O = r.find((E) => E.cat === h);
                O && e.handleClick(t, O.cat, O.val, O.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (u + 14) * Math.cos(y(f)),
              y: _ + (u + 14) * Math.sin(y(f)) + 4,
              textAnchor: "middle",
              className: Je.tickLabel,
              children: h
            }
          )
        ] }, h);
      })
    ] })
  );
}
function bS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: _ } = e, u = r, y = Math.max(1, ...u.map((p) => Number(p.val) || 0)), m = s / Math.max(1, u.length), g = i.l + c / 2;
  return pn(
    n,
    t,
    u.map((p, b) => {
      const f = Math.max(0, Number(p.val) || 0) / y * c, x = u[b + 1], N = x ? Math.max(0, Number(x.val) || 0) / y * c : f * 0.7, v = i.t + b * m + 2, C = Math.max(4, m - 6), S = 1 - b * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - f / 2} ${v} L ${g + f / 2} ${v} L ${g + N / 2} ${v + C} L ${g - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, v, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => _(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: g,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: Je.dataLabel,
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
function xS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: _, hideTip: u } = e, y = [];
  t.data.forEach((x) => {
    const N = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    y.includes(N) || y.push(N);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), g = m.length ? Math.min(...m) : 0, p = m.length ? Math.max(...m) : 1, b = c / Math.max(1, l.length), h = s / Math.max(1, y.length), f = (x) => p === g ? 0.6 : 0.15 + 0.85 * ((x - g) / (p - g));
  return pn(
    n,
    t,
    /* @__PURE__ */ M(st, { children: [
      y.map((x, N) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * h + h / 2 + 4,
          textAnchor: "end",
          className: Je.tickLabel,
          children: x
        },
        x
      )),
      r.map((x, N) => {
        const v = t.data[N], C = l.indexOf(x.cat), S = y.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (C < 0 || S < 0) return null;
        const O = i.l + C * b, E = i.t + S * h;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: O + 1,
              y: E + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, h - 2),
              fill: a,
              fillOpacity: f(x.val),
              onMouseEnter: () => d && _(O + b / 2, E, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: O + b / 2,
              y: E + h / 2 + 4,
              textAnchor: "middle",
              className: Je.dataLabel,
              children: x.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function vS(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((m, g) => [m, g])), d = e.plotW / Math.max(1, s.length), _ = Math.max(8, Math.min(28, d / 2 - 4)), u = t.upColor ?? a, y = t.downColor ?? "var(--dx-danger-color)";
  return pn(
    n,
    t,
    r.map((m, g) => {
      const p = l.get(m.cat) ?? 0, b = i(p), h = m.close ?? m.val, f = typeof m.open == "number" && !Number.isNaN(m.open) && typeof m.high == "number" && !Number.isNaN(m.high) && typeof m.low == "number" && !Number.isNaN(m.low) && typeof h == "number" && !Number.isNaN(h), x = f && h >= m.open, N = `${t.title ?? m.cat}: O ${m.open ?? "–"} H ${m.high ?? "–"} L ${m.low ?? "–"} C ${h}`;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        f && t.type === "candlestick" && /* @__PURE__ */ M(st, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: b,
              y1: c(m.high),
              x2: b,
              y2: c(m.low),
              stroke: x ? u : y,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: b - _ / 2,
              y: c(Math.max(m.open, h)),
              width: _,
              height: Math.max(
                2,
                c(Math.min(m.open, h)) - c(Math.max(m.open, h))
              ),
              fill: x ? u : "none",
              stroke: x ? u : y,
              strokeWidth: 1.5
            }
          )
        ] }),
        f && t.type === "ohlc" && /* @__PURE__ */ M(st, { children: [
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
              x1: b - _ / 2,
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
              x2: b + _ / 2,
              y2: c(h),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        f && t.type === "highlow" && /* @__PURE__ */ o(
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
        !f && So(b, c(h), a, t, 4),
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
            className: Je.dataLabel,
            children: Yr(e, h)
          }
        )
      ] }, g);
    })
  );
}
function wS(e, t, n, r, a) {
  const i = e.reduce((g, p) => g + Math.max(0, p.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((g, p) => ({ ...g, i: p }));
  let d = t, _ = n, u = r, y = a;
  const m = (g, p) => {
    const b = g.reduce((x, N) => x + Math.max(0, N.val), 0) * c;
    if (b <= 0) return Number.POSITIVE_INFINITY;
    const h = Math.max(...g.map((x) => Math.max(0, x.val))) * c, f = Math.min(...g.map((x) => Math.max(0, x.val))) * c;
    return Math.max(
      p * p * h / (b * b),
      b * b / (p * p * (f || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const g = Math.min(u, y), p = [];
    let b = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const f = [...p, l[0]], x = m(f, g);
      if (x <= b)
        b = x, p.push(l.shift());
      else break;
    }
    p.length === 0 && p.push(l.shift());
    const h = p.reduce((f, x) => f + Math.max(0, x.val), 0) * c;
    if (u >= y) {
      const f = h / y;
      let x = _;
      for (const N of p) {
        const v = Math.max(0, N.val) * c / f;
        s[N.i] = { x: d, y: x, w: f, h: v }, x += v;
      }
      d += f, u -= f;
    } else {
      const f = h / u;
      let x = d;
      for (const N of p) {
        const v = Math.max(0, N.val) * c / f;
        s[N.i] = { x, y: _, w: v, h: f }, x += v;
      }
      _ += f, y -= f;
    }
  }
  return s;
}
function tl(e, t, n, r, a, i, c, s, l, d, _) {
  const u = e.colorFor, y = s.map((p) => ({
    cat: String(p[t.categoryProperty] ?? ""),
    val: Number(p[t.valueProperty]),
    item: p
  })), m = wS(y, r, a, i, c), g = t.childrenProperty ?? "children";
  y.forEach((p, b) => {
    const h = m[b], f = s[b]?.[g], x = Array.isArray(f) ? f : [];
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
        _
      );
      return;
    }
    const N = d.n++;
    _.push({
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
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: _ } = e, u = { n: 0 }, y = [];
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
    u,
    y
  ), pn(
    n,
    t,
    y.map((m, g) => /* @__PURE__ */ M("g", { role: "listitem", children: [
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
          onMouseLeave: () => _(),
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
          className: Je.dataLabel,
          children: m.cat
        }
      )
    ] }, g))
  );
}
function NS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: _ } = e, u = r, y = Math.max(1, ...u.map((p) => Math.max(0, p.val))), m = s / Math.max(1, u.length), g = i.l + c / 2;
  return pn(
    n,
    t,
    u.map((p, b) => {
      const f = Math.max(0, p.val) / y * c, x = u[b + 1], N = x ? Math.max(0, x.val) / y * c : f, v = i.t + b * m + 2, C = Math.max(4, m - 6);
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - f / 2} ${v} L ${g + f / 2} ${v} L ${g + N / 2} ${v + C} L ${g - N / 2} ${v + C} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(g, v, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => _(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: g,
            y: v + C / 2 + 4,
            textAnchor: "middle",
            className: Je.dataLabel,
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
function SS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: _ } = _s(e), u = (g) => {
    let p = 0;
    for (const b of d)
      if (b.type === "spider") {
        for (const h of b.data)
          if (String(h[b.categoryProperty] ?? "") === g) {
            const f = Number(h[b.valueProperty]);
            Number.isNaN(f) || (p = Math.max(p, f));
          }
      }
    return p || 1;
  }, y = (g) => r.find((p) => p.cat === g)?.val ?? 0, m = i.map((g, p) => {
    const b = Math.min(
      1,
      Math.max(0, y(g) / u(g))
    ), [h, f] = _(p, b);
    return `${h},${f}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(st, { children: [
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
        const b = Math.min(
          1,
          Math.max(0, y(g) / u(g))
        ), [h, f] = _(p, b), [x, N] = _(p, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          So(h, f, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: h,
              cy: f,
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
              className: Je.dataLabel,
              children: y(g)
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x,
              y: N + 4,
              textAnchor: "middle",
              className: Je.tickLabel,
              children: g
            }
          )
        ] }, g);
      })
    ] })
  );
}
function $S(e, t, n) {
  const r = rs(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return _S(e, t, n, r, a);
    case "scatter":
    case "bubble":
      return pS(e, t, n, r, a);
    case "line":
    case "area":
      return el(e, t, n, r, a);
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
    case "spider":
      return SS(e, t, n, r, a);
    default:
      return hS(e, t, n, r, a);
  }
}
function yO({
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
  className: _
}) {
  const [u, y] = W(
    null
  ), m = $e(() => {
    const T = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const k of w.data) T.add(String(k[w.categoryProperty] ?? ""));
    return [...T];
  }, [e]), g = $e(() => {
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
  }, [e, c]), p = $e(() => {
    const T = g.flatMap(
      (k) => k.data.flatMap((A) => [
        Number(A[k.valueProperty]),
        ...k.openProperty ? [Number(A[k.openProperty])] : [],
        ...k.highProperty ? [Number(A[k.highProperty])] : [],
        ...k.lowProperty ? [Number(A[k.lowProperty])] : [],
        ...k.closeProperty ? [Number(A[k.closeProperty])] : []
      ])
    ).filter((k) => !Number.isNaN(k)), w = /* @__PURE__ */ new Map();
    for (const k of g) {
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
  }, [g]), b = r?.min ?? (p.length ? Math.min(0, ...p) : 0), h = r?.max ?? (p.length ? Math.max(...p) : 10), f = $e(
    () => iS(b, h, r?.step),
    [b, h, r?.step]
  ), x = { t: 16, r: 16, b: 40, l: 56 }, N = t - x.l - x.r, v = n - x.t - x.b, C = (T) => x.l + T / Math.max(1, m.length - 1) * N, S = (T) => x.t + (1 - (T - f.min) / (f.max - f.min || 1)) * v, O = (T, w) => w.color ?? ka[T % ka.length], E = e.some((T) => Ja.has(T.type)), I = e.some((T) => lS.has(T.type)), D = {
    categories: m,
    scale: f,
    pad: x,
    plotW: N,
    plotH: v,
    xFor: C,
    yFor: S,
    colorFor: O,
    tooltipVisible: s,
    percent: c,
    showTip: (T, w, k) => y({ x: T, y: w, text: k }),
    hideTip: () => y(null),
    handleClick: (T, w, k, A) => l?.({
      seriesTitle: T.title ?? "",
      category: w,
      value: k,
      item: A
    }),
    series: g
  };
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [Je.root, _].filter(Boolean).join(" "),
      role: "img",
      "aria-label": d,
      "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: Je.svg,
            role: "presentation",
            children: [
              E && r?.gridlines !== !1 && f.ticks.map((T) => /* @__PURE__ */ o(
                "line",
                {
                  x1: x.l,
                  x2: x.l + N,
                  y1: S(T),
                  y2: S(T),
                  className: Je.gridline
                },
                T
              )),
              I && a?.gridlines && m.map((T, w) => /* @__PURE__ */ o(
                "line",
                {
                  x1: C(w),
                  x2: C(w),
                  y1: x.t,
                  y2: x.t + v,
                  className: Je.gridline
                },
                w
              )),
              E && f.ticks.map((T) => /* @__PURE__ */ o(
                "text",
                {
                  x: x.l - 8,
                  y: S(T) + 4,
                  textAnchor: "end",
                  className: Je.tickLabel,
                  children: c ? `${T}%` : T
                },
                T
              )),
              I && m.map((T, w) => /* @__PURE__ */ o(
                "text",
                {
                  x: C(w),
                  y: x.t + v + 16,
                  textAnchor: "middle",
                  className: Je.tickLabel,
                  children: T
                },
                T
              )),
              E && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: x.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${x.t + v / 2})`,
                  className: Je.axisTitle,
                  children: r.title
                }
              ),
              I && a?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: x.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Je.axisTitle,
                  children: a.title
                }
              ),
              (e.some((T) => T.type === "radar") || e.some((T) => T.type === "spider")) && gS(D),
              g.map((T, w) => $S(D, T, w))
            ]
          }
        ),
        u && /* @__PURE__ */ o(
          "div",
          {
            className: Je.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ o("div", { className: Je.legend, children: e.map((T, w) => /* @__PURE__ */ M("span", { className: Je.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: Je.swatch,
              style: { backgroundColor: O(w, T) },
              "aria-hidden": "true"
            }
          ),
          T.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ M(
          "table",
          {
            className: Je.visuallyHidden,
            id: `${d.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: d }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (T) => T.data.map((w, k) => /* @__PURE__ */ M("tr", { children: [
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
function bO({ query: e, children: t }) {
  return cs(e) ? /* @__PURE__ */ o(st, { children: t }) : null;
}
function xO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function vO() {
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
  i$ as AIChat,
  gp as ALERT_ICON,
  A$ as Accordion,
  p$ as Alert,
  s$ as ArcGauge,
  I$ as AutoComplete,
  b$ as AutoGrid,
  T$ as Avatar,
  CS as Badge,
  gO as Barcode,
  v$ as Body,
  rO as Breadcrumb,
  ln as Button,
  TS as Card,
  iO as Carousel,
  yO as Chart,
  iu as CheckBox,
  L$ as CheckBoxList,
  H$ as ColorPicker,
  g$ as Column,
  J$ as ContextMenuProvider,
  Tr as DEFAULT_OPERATOR_BY_TYPE,
  $v as DEFAULT_PALETTE,
  R0 as DEFAULT_THEMES,
  VS as DataFilter,
  YS as DataGrid,
  XS as DataList,
  U$ as DatePicker,
  Ca as Dialog,
  t$ as DialogProvider,
  D$ as DropDown,
  X$ as DropZone,
  IS as EmptyState,
  $a as FILTER_OPERATORS,
  nO as FabMenu,
  ar as Field,
  LS as Fieldset,
  a0 as Footer,
  RS as Form,
  zS as FormField,
  fO as Gantt,
  c0 as Header,
  u$ as HtmlEditor,
  De as Icon,
  no as Input,
  ZS as Label,
  x$ as Layout,
  l$ as LinearGauge,
  oO as Link,
  z$ as ListBox,
  xO as LiveRegion,
  c$ as Login,
  d$ as Markdown,
  B$ as Mask,
  bO as MediaQuery,
  zw as Menu,
  Ya as MenuItem,
  F$ as Numeric,
  Wc as Pager,
  eO as PanelMenu,
  Q$ as PanelMenuItem,
  jf as Password,
  dO as PickList,
  _O as Pivot,
  _$ as PopupProvider,
  tO as ProfileMenu,
  k$ as Progress,
  mO as QRCode,
  a$ as RadialGauge,
  R$ as RadioButtonList,
  o$ as RangeNavigator,
  W$ as Rating,
  m$ as Row,
  uO as Scheduler,
  G$ as SecurityCode,
  lr as Select,
  P$ as SelectBar,
  v0 as Sidebar,
  w$ as SidebarToggle,
  V$ as SignaturePad,
  h$ as Skeleton,
  q$ as Slider,
  j$ as SplitButton,
  aO as Splitter,
  y$ as Stack,
  MS as Stat,
  sO as Steps,
  JS as Switch,
  DS as Table,
  C$ as Tabs,
  Aa as Text,
  M$ as TextArea,
  ls as TextBox,
  N$ as ThemeSwitcher,
  S$ as ThemeToggle,
  K$ as TimeSpanPicker,
  pO as Timeline,
  r$ as ToastProvider,
  lO as Toc,
  W0 as ToggleButton,
  QS as Tooltip,
  cO as Tree,
  Y$ as Upload,
  hO as VirtualGrid,
  Jc as aggregateValue,
  Ea as applyFilters,
  Zc as applyGridState,
  Os as collectGroupKeys,
  or as columnValue,
  WS as compare,
  KS as custom,
  Vc as cycleSort,
  Ts as defaultOperatorForType,
  jS as email,
  da as formatMasked,
  bo as formatValue,
  O$ as getAppearance,
  yo as getByPath,
  $$ as getTheme,
  qc as groupItems,
  AS as iconNames,
  Oa as matchesFilters,
  HS as maxLength,
  FS as minLength,
  Xc as paginate,
  BS as pattern,
  US as range,
  E_ as renderMarkdown,
  PS as required,
  qS as requiredTrue,
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
  Z$ as useContextMenu,
  e$ as useDialog,
  Xi as useFormContext,
  GS as useFormField,
  vO as useLiveRegion,
  cs as useMediaQuery,
  f$ as usePopup,
  E$ as useThemeService,
  n$ as useToast
};
