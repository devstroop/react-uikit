import { jsx as s, jsxs as D, Fragment as pt } from "react/jsx-runtime";
import { forwardRef as st, useId as ot, isValidElement as qt, cloneElement as eo, useState as q, useRef as oe, useCallback as B, useMemo as Oe, useContext as jn, createContext as ar, useEffect as ve, Fragment as to, useLayoutEffect as Fs, useImperativeHandle as vs, Children as Vr } from "react";
function Gr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const ea = "_button_eyvws_1", ta = "_filled_eyvws_36", na = "_flat_eyvws_55", ra = "_outlined_eyvws_58", sa = "_text_eyvws_63", oa = "_loading_eyvws_506", la = "_spinner_eyvws_509", aa = "_xs_eyvws_525", ia = "_sm_eyvws_531", ca = "_md_eyvws_537", da = "_lg_eyvws_543", ua = "_xl_eyvws_549", fa = "_iconOnly_eyvws_555", _a = "_fullWidth_eyvws_585", Cn = {
  button: ea,
  filled: ta,
  flat: na,
  outlined: ra,
  text: sa,
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
  loading: oa,
  spinner: la,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: aa,
  sm: ia,
  md: ca,
  lg: da,
  xl: ua,
  iconOnly: fa,
  fullWidth: _a
};
function pa(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const an = st(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: i = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: a = !1,
      loading: c = !1,
      visible: f = !0,
      className: u,
      disabled: x,
      children: g,
      ...h
    } = t;
    if (f === !1) return null;
    const m = pa(r, l), p = m.style === "light" || m.style === "dark" ? null : Gr(i), _ = [
      Cn.button,
      Cn[m.variant],
      Cn[`style-${m.style}`],
      p ? Cn[p] : null,
      Cn[d],
      o ? Cn.fullWidth : null,
      a ? Cn.iconOnly : null,
      c ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), b = /* @__PURE__ */ D(pt, { children: [
      c ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      g
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...C } = h, A = x || c;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: N,
          className: _,
          "aria-disabled": A || void 0,
          "aria-busy": c || void 0,
          onClick: (I) => {
            if (A) {
              I.preventDefault();
              return;
            }
            S?.(I);
          },
          ...C,
          children: b
        }
      );
    }
    const { type: v = "button", ...E } = h;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: x || c,
        "aria-busy": c || void 0,
        ...E,
        children: b
      }
    );
  }
), ma = "_card_4vcae_1", ha = "_elevated_4vcae_8", ga = "_filled_4vcae_13", ba = "_outlined_4vcae_18", ya = "_interactive_4vcae_22", xa = "_text_4vcae_30", va = "_header_4vcae_46", wa = "_body_4vcae_53", ka = "_footer_4vcae_63", Nr = {
  card: ma,
  elevated: ha,
  filled: ga,
  outlined: ba,
  interactive: ya,
  text: xa,
  header: va,
  body: wa,
  footer: ka
}, _S = st(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: i = !0,
  children: d,
  onKeyDown: o,
  ...a
}, c) {
  if (i === !1) return null;
  const f = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "div",
      {
        ref: c,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (u) => {
          o?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [Nr.card, Nr[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: Nr.header, children: n }),
          /* @__PURE__ */ s("div", { className: Nr.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: Nr.footer, children: r })
        ]
      }
    )
  );
});
function yl(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Na = "_badge_1fy6d_1", Sa = "_xs_1fy6d_21", Oa = "_sm_1fy6d_26", $a = "_md_1fy6d_31", Ea = "_lg_1fy6d_36", Ta = "_xl_1fy6d_41", Ca = "_neutral_1fy6d_47", Aa = "_primary_1fy6d_52", Da = "_secondary_1fy6d_61", Ma = "_light_1fy6d_66", Ia = "_base_1fy6d_71", za = "_dark_1fy6d_76", La = "_info_1fy6d_81", Ra = "_success_1fy6d_86", Pa = "_warning_1fy6d_95", ja = "_danger_1fy6d_104", Ba = "_filled_1fy6d_111", Fa = "_outlined_1fy6d_161", Ha = "_text_1fy6d_213", Sr = {
  badge: Na,
  xs: Sa,
  sm: Oa,
  md: $a,
  lg: Ea,
  xl: Ta,
  neutral: Ca,
  primary: Aa,
  secondary: Da,
  light: Ma,
  base: Ia,
  dark: za,
  info: La,
  success: Ra,
  warning: Pa,
  danger: ja,
  filled: Ba,
  outlined: Fa,
  text: Ha,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, pS = st(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: i,
  visible: d = !0,
  children: o,
  ...a
}, c) {
  if (d === !1) return null;
  const f = t, u = yl(n, "filled"), x = Gr(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: [
        Sr.badge,
        Sr[l],
        Sr[f],
        Sr[u],
        x ? Sr[x] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Ua = "_icon_vn4jx_5", qa = "_xs_vn4jx_24", Wa = "_sm_vn4jx_28", Ka = "_md_vn4jx_23", Ga = "_lg_vn4jx_36", Va = "_xl_vn4jx_40", ho = {
  icon: Ua,
  xs: qa,
  sm: Wa,
  md: Ka,
  lg: Ga,
  xl: Va
}, mS = [
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
], Me = st(function({ icon: t, size: n, color: r, className: l, style: i, ...d }, o) {
  const a = typeof n == "string";
  return /* @__PURE__ */ s(
    "span",
    {
      ref: o,
      className: [ho.icon, a ? ho[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...a || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...r === void 0 ? null : { color: r },
        ...i
      },
      "aria-hidden": "true",
      ...d,
      children: t
    }
  );
}), Ya = "_stat_sjin9_1", Xa = "_label_sjin9_8", Za = "_row_sjin9_16", Ja = "_value_sjin9_22", Qa = "_delta_sjin9_28", ei = "_success_sjin9_33", ti = "_danger_sjin9_37", ni = "_neutral_sjin9_41", ri = "_hint_sjin9_45", Xn = {
  stat: Ya,
  label: Xa,
  row: Za,
  value: Ja,
  delta: Qa,
  success: ei,
  danger: ti,
  neutral: ni,
  hint: ri
}, hS = st(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...o }, a) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: a,
      className: [Xn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: Xn.label, children: t }),
        /* @__PURE__ */ D("div", { className: Xn.row, children: [
          /* @__PURE__ */ s("div", { className: Xn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [Xn.delta, Xn[l]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ s("div", { className: Xn.hint, children: i })
      ]
    }
  );
}), si = "_wrap_ipozk_1", oi = "_table_ipozk_8", li = "_caption_ipozk_14", ai = "_none_ipozk_51", ii = "_horizontal_ipozk_57", ci = "_vertical_ipozk_67", di = "_alternating_ipozk_85", ui = "_start_ipozk_89", fi = "_center_ipozk_93", _i = "_end_ipozk_97", pi = "_empty_ipozk_101", Fn = {
  wrap: si,
  table: oi,
  caption: li,
  none: ai,
  horizontal: ii,
  vertical: ci,
  alternating: di,
  start: ui,
  center: fi,
  end: _i,
  empty: pi
};
function gS({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: a = !0
}) {
  if (a === !1) return null;
  const c = i === "default" || i === "both" ? "" : Fn[i];
  return /* @__PURE__ */ D("div", { className: [Fn.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "table",
      {
        className: [
          Fn.table,
          c,
          d ? Fn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ s("caption", { className: Fn.caption, children: l }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "th",
            {
              className: f.align != null ? Fn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((f) => /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
            "td",
            {
              className: u.align != null ? Fn[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: Fn.empty, children: r })
  ] });
}
const mi = "_emptyState_1swxw_1", hi = "_icon_1swxw_13", gi = "_title_1swxw_18", bi = "_description_1swxw_24", yi = "_action_1swxw_30", Or = {
  emptyState: mi,
  icon: hi,
  title: gi,
  description: bi,
  action: yi
};
function bS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [Or.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Or.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Or.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Or.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Or.action, children: r })
  ] });
}
const xi = "_field_149oz_1", vi = "_label_149oz_8", wi = "_required_149oz_14", ki = "_hint_149oz_19", Ni = "_error_149oz_24", $r = {
  field: xi,
  label: vi,
  required: wi,
  hint: ki,
  error: Ni
};
function or({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: i,
  children: d,
  className: o,
  visible: a = !0
}) {
  const c = r ?? l, f = ot(), u = ot(), x = ot();
  if (a === !1) return null;
  const g = i != null ? u : c != null ? x : null, h = typeof d == "function" ? d({ inputId: f, hintId: x, errorId: u }) : d, m = qt(h) && typeof h.props.id == "string" ? h.props.id : void 0, y = m ?? t ?? f, p = qt(h) && (g != null || m == null && typeof h.type == "string"), _ = m != null || t != null || p, b = p && qt(h) ? eo(h, {
    id: y,
    "aria-describedby": g != null ? [
      h.props["aria-describedby"],
      g
    ].filter((N) => typeof N == "string").join(" ") || void 0 : h.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : h.props["aria-invalid"]
  }) : h;
  return /* @__PURE__ */ D("div", { className: [$r.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: $r.label,
        htmlFor: _ ? y : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: $r.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    b,
    i != null ? /* @__PURE__ */ s("div", { id: u, className: $r.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ s("div", { id: x, className: $r.hint, children: c }) : null
  ] });
}
const Si = "_formfield_6e25e_1", Oi = "_content_6e25e_8", $i = "_floating_6e25e_43", Ei = "_label_6e25e_111", Ti = "_start_6e25e_132", Ci = "_required_6e25e_169", Ai = "_end_6e25e_175", Di = "_filled_6e25e_192", Mi = "_flat_6e25e_199", Ii = "_helper_6e25e_206", zi = "_invalid_6e25e_211", kn = {
  formfield: Si,
  content: Oi,
  floating: $i,
  label: Ei,
  start: Ti,
  required: Ci,
  end: Ai,
  filled: Di,
  flat: Mi,
  helper: Ii,
  invalid: zi
};
function yS({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: i = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: a = !1,
  children: c,
  className: f,
  visible: u = !0
}) {
  const x = ot(), g = ot();
  if (u === !1) return null;
  const h = l ?? x, m = typeof c == "function" ? c({
    inputId: h
  }) : c, y = qt(m) ? m.type : null, p = typeof y == "string", _ = qt(m) && typeof y != "symbol", b = qt(m) ? m.props : null, N = typeof b?.id == "string" ? b.id : void 0, v = p && qt(m) ? m.type.toLowerCase() : null, E = v != null && (v === "input" ? typeof b?.type != "string" || b.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = _ && (r != null || o || N == null && E), C = N != null || l != null || S, A = v === "input" && typeof b?.type == "string" ? b.type.toLowerCase() : null, I = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), M = S && qt(m) ? eo(
    m,
    {
      id: N ?? h,
      ...i && I && b?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          b?.["aria-describedby"],
          g
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, $ = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: kn.label,
      htmlFor: C ? N ?? h : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ s("span", { className: kn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [
        kn.formfield,
        kn[d],
        i ? kn.floating : null,
        o ? kn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : $,
        /* @__PURE__ */ D("div", { className: kn.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: kn.start, children: t }),
          M,
          i ? $ : null,
          n != null && /* @__PURE__ */ s("div", { className: kn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: g, className: kn.helper, children: r })
      ]
    }
  );
}
const Li = "_fieldset_8x01p_1", Ri = "_legend_8x01p_11", Pi = "_legendText_8x01p_20", ji = "_toggle_8x01p_24", Bi = "_content_8x01p_45", Fi = "_summary_8x01p_49", Zn = {
  fieldset: Li,
  legend: Ri,
  legendText: Pi,
  toggle: ji,
  content: Bi,
  summary: Fi
};
function xS({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: i,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: a,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: x,
  onCollapse: g,
  children: h,
  className: m,
  visible: y = !0
}) {
  const p = ot(), [_, b] = q(d);
  if (y === !1) return null;
  const N = i ?? _, v = l ? `${p}-content` : void 0, E = () => {
    const $ = !N;
    i === void 0 && b($), $ ? g?.() : x?.();
  }, S = l || e != null || n != null || t != null, C = l ? N : !1, A = l && N && o != null, I = C ? a ?? "Expand" : c ?? "Collapse", M = C ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [Zn.fieldset, m].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ s("legend", { className: Zn.legend, children: l ? /* @__PURE__ */ D(pt, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: Zn.toggle,
              title: I,
              "aria-label": e == null ? M : void 0,
              "aria-expanded": !C,
              "aria-controls": v,
              onClick: E,
              children: [
                /* @__PURE__ */ s(
                  Me,
                  {
                    icon: C ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ s("span", { className: Zn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(pt, { children: [
          n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ s("span", { className: Zn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: Zn.content,
            id: v,
            hidden: C,
            children: h
          }
        ),
        A ? /* @__PURE__ */ s("div", { className: Zn.summary, children: o }) : null
      ]
    }
  );
}
const Hi = "_form_abp5n_1", Ui = {
  form: Hi
}, xl = ar(null);
function qi() {
  const e = jn(xl);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function vS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: i,
  className: d
}) {
  const [o, a] = q({}), [c, f] = q(0), u = oe(o);
  u.current = o;
  const x = B((b) => {
    a(
      (N) => N[b.name] === b ? N : { ...N, [b.name]: b }
    );
  }, []), g = B((b) => {
    a((N) => {
      if (!(b in N)) return N;
      const v = { ...N };
      return delete v[b], v;
    });
  }, []), h = B(() => {
    const b = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (b[N.name] = v);
    }
    return b;
  }, []), m = B(() => {
    const b = h();
    f((N) => N + 1), Object.keys(b).length === 0 ? t?.(e) : n?.(b);
  }, [h, e, t, n]), y = (b) => {
    r != null && l != null || (b.preventDefault(), m());
  }, p = Oe(
    () => ({ registerField: x, unregisterField: g, submit: m, submitCount: c }),
    [x, g, m, c]
  ), _ = [Ui.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(xl.Provider, { value: p, children: /* @__PURE__ */ s(
    "form",
    {
      className: _,
      onSubmit: y,
      action: r,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const ir = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", wS = (e = "Required") => (t) => ir(t) ? e : null, kS = (e = "Invalid email") => (t) => ir(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, NS = (e, t = "Invalid format") => (n) => ir(n) || e.test(String(n)) ? null : t, SS = (e, t = `Minimum ${e} characters`) => (n) => ir(n) || String(n).length >= e ? null : t, OS = (e, t = `Maximum ${e} characters`) => (n) => ir(n) || String(n).length <= e ? null : t, $S = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ir(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, ES = (e, t = "Values do not match") => (n, r) => {
  if (ir(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, TS = (e = "Required") => (t) => t === !0 ? null : e, CS = (e) => (t, n) => e(t, n);
function Wi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function AS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = qi(), [i, d] = q(t?.initialValue), [o, a] = q(!1), [c, f] = q(!1), u = oe(() => []);
  u.current = () => Wi(t?.validate ?? [], i), ve(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ve(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const x = o && !c ? u.current() : [];
  return { value: i, setValue: (h) => {
    d(h), f(!0);
  }, errors: x };
}
const Ki = "_select_1xe98_1", Gi = "_invalid_1xe98_33", Vi = "_xs_1xe98_40", Yi = "_sm_1xe98_48", Xi = "_md_1xe98_56", Zi = "_lg_1xe98_62", Ji = "_xl_1xe98_68", Ts = {
  select: Ki,
  invalid: Gi,
  xs: Vi,
  sm: Yi,
  md: Xi,
  lg: Zi,
  xl: Ji
}, lr = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          Ts.select,
          Ts[t],
          n ? Ts.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((a) => /* @__PURE__ */ s(
          "option",
          {
            value: a.value,
            disabled: a.disabled,
            children: a.label
          },
          a.value
        )) : l
      }
    );
  }
), vl = [
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
], Er = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Qi = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function ec(e) {
  return Qi.includes(e);
}
function ms(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function go(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Ur(e, t) {
  const n = go(e), r = go(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function ws(e) {
  if (e.secondOperator == null) return !1;
  if (ec(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function bo(e, t, n) {
  const r = ms(t, e.property), l = yo(
    r,
    e.value,
    e.operator,
    n
  );
  if (!ws(e)) return l;
  const i = yo(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function yo(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), o = i(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => i(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => i(a) === o));
    case "LessThan":
      return Ur(d, o) < 0;
    case "LessThanOrEquals":
      return Ur(d, o) <= 0;
    case "GreaterThan":
      return Ur(d, o) > 0;
    case "GreaterThanOrEquals":
      return Ur(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((a) => i(a) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((a) => i(a) === d);
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
function no(e) {
  return "filters" in e;
}
function wl(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (no(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => wl(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", bo(t, e, l);
}
function kl(e, t, n = {}) {
  return e.filter((r) => wl(r, t, n));
}
function tc(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${tc(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function nc(e) {
  const t = (l, i) => {
    switch (l) {
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
  if (!ws(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function rc(e) {
  return no(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(rc).filter(Boolean).join(` ${e.operator} `)})` : nc(e);
}
function sc(e) {
  return e.replace(/'/g, "''");
}
const oc = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function lc(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${sc(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", x = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${oc[c]} ${u && r ? l(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${x} in (${f.map((g) => i(g)).join(", ")})` : `${x} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${x} in (${f.map((g) => i(g)).join(", ")}))` : `not(${x} in (${i(f)}))`;
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
  if (!ws(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function ac(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (no(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => ac(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return lc(e, n);
}
function ic(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = Ur(
        ms(n, l.property),
        ms(r, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const cc = "_filter_1dvqt_1", dc = "_rows_1dvqt_9", uc = "_row_1dvqt_9", fc = "_join_1dvqt_21", _c = "_property_1dvqt_30", pc = "_operator_1dvqt_34", mc = "_value_1dvqt_38", hc = "_remove_1dvqt_42", gc = "_bar_1dvqt_58", bc = "_add_1dvqt_64", yc = "_custom_1dvqt_78", xc = "_summary_1dvqt_82", vc = "_second_1dvqt_87", wc = "_secondAdd_1dvqt_91", kc = "_addSecond_1dvqt_95", Nc = "_joinSelect_1dvqt_109", ht = {
  filter: cc,
  rows: dc,
  row: uc,
  join: fc,
  property: _c,
  operator: pc,
  value: mc,
  remove: hc,
  bar: gc,
  add: bc,
  custom: yc,
  summary: xc,
  second: vc,
  secondAdd: wc,
  addSecond: kc,
  joinSelect: Nc
}, Tr = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], xo = {
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
function vo({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(pt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      lr,
      {
        "aria-label": e.title ?? e.name,
        className: ht.value,
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
        className: ht.value,
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
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: ht.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        r === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function DS({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: i,
  viewChanged: d,
  items: o,
  children: a
}) {
  const [c, f] = q(
    () => r != null && r.length > 0 ? r.map((p, _) => ({ id: _, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Er[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, _) => {
    f(
      (b) => b.map((N) => N.id === p ? { ...N, ..._ } : N)
    );
  }, x = () => {
    const p = c[c.length - 1], _ = Math.max(0, ...c.map((N) => N.id)) + 1, b = e[0];
    f((N) => [
      ...N,
      {
        id: _,
        property: p?.property ?? b?.name ?? "",
        operator: Er[e.find(
          (v) => v.name === (p?.property ?? b?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, g = (p) => {
    f(
      (_) => _.length > 1 ? _.filter((b) => b.id !== p) : _
    );
  }, h = Oe(() => {
    const p = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !Tr.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && ws(_) && (N.secondOperator = v, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), p.push(N);
    }
    return p;
  }, [c]), m = Oe(() => o == null || h.length === 0 ? o : kl(o, {
    operator: t,
    filters: h
  }, {
    caseSensitivity: n
  }), [o, h, t, n]);
  ve(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const y = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ D("div", { className: [ht.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: ht.rows, role: "group", "aria-label": "Filter conditions", children: c.map((p, _) => {
      const b = y(p.property), N = l ? [Er[b.type ?? "string"]] : vl, v = !Tr.includes(p.operator), E = p.secondOperator != null;
      return /* @__PURE__ */ D(to, { children: [
        /* @__PURE__ */ D("div", { className: ht.row, children: [
          _ > 0 ? /* @__PURE__ */ s("span", { className: ht.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            lr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: ht.property,
              value: p.property,
              onChange: (S) => {
                const C = e.find(
                  (A) => A.name === S.target.value
                );
                u(p.id, {
                  property: S.target.value,
                  operator: Er[C?.type ?? "string"],
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
              className: ht.operator,
              value: p.operator,
              onChange: (S) => {
                const C = S.target.value;
                u(
                  p.id,
                  Tr.includes(C) ? {
                    operator: C,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: C }
                );
              },
              options: N.map((S) => ({
                value: S,
                label: xo[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ s(
            vo,
            {
              property: b,
              value: p.value,
              onChange: (S) => u(p.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: ht.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => g(p.id),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? E ? /* @__PURE__ */ D(
          "div",
          {
            className: [ht.row, ht.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                lr,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: ht.joinSelect,
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
                  className: ht.operator,
                  value: p.secondOperator,
                  onChange: (S) => {
                    const C = S.target.value;
                    u(
                      p.id,
                      Tr.includes(C) ? { secondOperator: C, secondValue: void 0 } : { secondOperator: C }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: xo[S]
                  }))
                }
              ),
              p.secondOperator == null || !Tr.includes(p.secondOperator) ? /* @__PURE__ */ s(
                vo,
                {
                  property: b,
                  value: p.secondValue,
                  onChange: (S) => u(p.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: ht.remove,
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
        ) : /* @__PURE__ */ s("div", { className: ht.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: ht.addSecond,
            onClick: () => u(p.id, {
              secondOperator: Er[b.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ D("div", { className: ht.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: ht.add, onClick: x, children: "Add filter" }),
      a != null ? /* @__PURE__ */ s("div", { className: ht.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ D("span", { className: ht.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const Sc = "_pager_1du31_1", Oc = "_alignLeft_1du31_10", $c = "_alignCenter_1du31_14", Ec = "_alignRight_1du31_18", Tc = "_alignJustify_1du31_22", Cc = "_summary_1du31_26", Ac = "_controls_1du31_31", Dc = "_button_1du31_37", Mc = "_active_1du31_73", Ic = "_ellipsis_1du31_85", zc = "_size_1du31_91", Ft = {
  pager: Sc,
  alignLeft: Oc,
  alignCenter: $c,
  alignRight: Ec,
  alignJustify: Tc,
  summary: Cc,
  controls: Ac,
  button: Dc,
  active: Mc,
  ellipsis: Ic,
  size: zc
};
function Lc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function wo(e, t) {
  return e.replace("{0}", String(t));
}
function Rc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, a) => a + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const i = Math.min(t, l + n - 1);
  l = Math.max(1, i - n + 1);
  const d = [];
  for (let o = l; o <= i; o++) d.push(o);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), i < t - 1 && d.push("ellipsis"), i < t && d.push(t), d;
}
function Pc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: i = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: a,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: x = "Items per page",
  firstPageTitle: g = "First page",
  prevPageTitle: h = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: y = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: b,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: E,
  visible: S = !0
}) {
  const C = n ?? r, [A, I] = q(C), M = n !== void 0, $ = M ? C : A, w = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, $), w), T = a ?? !0, R = d || w > 1, z = Rc(k, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      M || I(we);
      const le = (we - 1) * t;
      b?.({
        page: we,
        skip: le,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [M, b, w, t]
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
    ), le = we.indexOf(document.activeElement);
    le !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[le + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[le - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return S === !1 || !R ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ft.pager, F, E].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        T && /* @__PURE__ */ s("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : Lc(f, k, w, e) }),
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
                  "aria-label": g,
                  title: g,
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
                  "aria-label": h,
                  title: h,
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
                    "aria-label": wo(_, te),
                    title: wo(p, te),
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
                  "aria-label": m,
                  title: m,
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
                  "aria-label": y,
                  title: y,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ D("label", { className: Ft.size, children: [
          /* @__PURE__ */ s("span", { children: x }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (te) => N?.(Number(te.target.value)),
              "aria-label": x,
              children: l.map((te) => /* @__PURE__ */ s("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function Hs(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ s(
    Pc,
    {
      page: t,
      showPagingSummary: l,
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
const Nl = "";
function jc(e, t, n, r, l) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const i = (o) => n.find((a) => a.property === o), d = (o, a, c) => {
    const f = t[a];
    if (f === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const u = i(f), x = /* @__PURE__ */ new Map(), g = [];
    o.forEach((m) => {
      const y = String(l(m, f) ?? ""), p = x.get(y);
      p ? p.push(m) : (x.set(y, [m]), g.push(y));
    });
    const h = [];
    return g.forEach((m) => {
      const y = x.get(m), p = [...c, m].join(Nl), _ = y[0], b = _ !== void 0 ? l(_, f) : void 0;
      h.push({
        type: "group",
        group: {
          key: p,
          display: hs(b, u?.format),
          property: f,
          title: u?.title ?? f,
          count: y.length,
          level: a
        }
      }), r.has(p) && h.push(...d(y, a + 1, [...c, m]));
    }), h;
  };
  return d(e, 0, []);
}
function ko(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, o) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const x = String(n(u, a) ?? ""), g = c.get(x);
      g ? g.push(u) : (c.set(x, [u]), f.push(x));
    }), f.forEach((u) => {
      const x = [...o, u].join(Nl);
      r.add(x), l(c.get(u), d + 1, [...o, u]);
    });
  };
  return l(e, 0, []), r;
}
function Qr(e, t) {
  return e.property ?? `col-${t}`;
}
function Bc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Fc(e, t) {
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
function rr(e, t) {
  if (t != null)
    return ms(e, t);
}
function hs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const No = [
  "Ascending",
  "Descending",
  null
];
function Hc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = No[(r ? No.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Uc(e, t) {
  return ic(e, t);
}
function qc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Wc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: Fc(
        a.value,
        n.types?.[o] ?? "string"
      )
    })
  ), l = r.length > 0 ? kl(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Uc(l, t.sorts);
  return {
    ...qc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function So(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Kc(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const i = n(l, t.property);
    if (i == null || i === "") return;
    const d = Number(i);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, i) => l + i, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, i) => l + i, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Gc(e, t, n = rr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(hs(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Vc = "_grid_13rur_1", Yc = "_toolbar_13rur_8", Xc = "_picker_13rur_13", Zc = "_pickerButton_13rur_17", Jc = "_pickerPanel_13rur_31", Qc = "_pickerItem_13rur_46", ed = "_groupPanel_13rur_55", td = "_groupPanelActive_13rur_66", nd = "_groupPanelText_13rur_70", rd = "_groupChip_13rur_74", sd = "_groupRemove_13rur_85", od = "_groupRow_13rur_94", ld = "_groupCell_13rur_98", ad = "_groupToggle_13rur_104", id = "_editRow_13rur_117", cd = "_editCell_13rur_121", dd = "_editInput_13rur_127", ud = "_commandCell_13rur_137", fd = "_commandButton_13rur_144", _d = "_data_13rur_159", pd = "_table_13rur_166", md = "_header_13rur_172", hd = "_center_13rur_185", gd = "_right_13rur_189", bd = "_sortButton_13rur_193", yd = "_sortIndicator_13rur_211", xd = "_sortIndex_13rur_215", vd = "_cell_13rur_226", wd = "_clickable_13rur_241", kd = "_frozen_13rur_249", Nd = "_selected_13rur_255", Sd = "_resizeHandle_13rur_263", Od = "_filterCell_13rur_281", $d = "_filterSelect_13rur_290", Ed = "_filterInput_13rur_300", Td = "_empty_13rur_311", Cd = "_loading_13rur_317", Ad = "_visuallyHidden_13rur_331", Dd = "_virtualScroller_13rur_340", Md = "_spacerRow_13rur_345", Id = "_footerRow_13rur_350", zd = "_footerCell_13rur_354", Ld = "_footerValue_13rur_361", Se = {
  grid: Vc,
  toolbar: Yc,
  picker: Xc,
  pickerButton: Zc,
  pickerPanel: Jc,
  pickerItem: Qc,
  groupPanel: ed,
  groupPanelActive: td,
  groupPanelText: nd,
  groupChip: rd,
  groupRemove: sd,
  groupRow: od,
  groupCell: ld,
  groupToggle: ad,
  editRow: id,
  editCell: cd,
  editInput: dd,
  commandCell: ud,
  commandButton: fd,
  data: _d,
  table: pd,
  header: md,
  center: hd,
  right: gd,
  sortButton: bd,
  sortIndicator: yd,
  sortIndex: xd,
  cell: vd,
  clickable: wd,
  frozen: kd,
  selected: Nd,
  resizeHandle: Sd,
  filterCell: Od,
  filterSelect: $d,
  filterInput: Ed,
  empty: Td,
  loading: Cd,
  visuallyHidden: Ad,
  virtualScroller: Dd,
  spacerRow: Md,
  footerRow: Id,
  footerCell: zd,
  footerValue: Ld
}, Rd = {
  Ascending: "ascending",
  Descending: "descending"
};
function Oo(e, t) {
  return e.filterable ?? t;
}
function Pd(e, t) {
  return e.sortable ?? t;
}
function jd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function MS({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: x = 5,
  pagerPosition: g = "Bottom",
  showPagingSummary: h = !0,
  showPageSizeSelector: m = !0,
  selectionMode: y = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: b = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: E = !1,
  allowGrouping: S = !1,
  groupPanelText: C = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: I,
  showExportButton: M = !1,
  exportFileName: $ = "grid-data",
  serverMode: w = !1,
  totalCount: k,
  onRangeChange: T,
  virtualize: R = !1,
  virtualRowHeight: z = 40,
  virtualHeight: j = 480,
  editMode: F = "None",
  allowRowCreate: X = !1,
  onRowUpdate: ie,
  onRowCreate: te,
  onRowDelete: we,
  isLoading: le = !1,
  empty: _e = "No records found",
  ariaLabel: K,
  className: he,
  onRowClick: ue
}) {
  const ye = K != null ? `${K} ` : "", [pe, De] = q([]), [G, $e] = q(
    /* @__PURE__ */ new Map()
  ), [ne, Ae] = q(1), [fe, Fe] = q(f), [Ge, Je] = q(
    () => e.map((H, U) => Qr(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? Qr(H, U) : "").filter(Boolean)
    )
  ), [yt, Z] = q({}), [L, Y] = q(!1), [Q, ge] = q([]), [ae, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, re] = q(0), [Le, Nt] = q(j), Rt = oe(null), xt = oe(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, be) => H.set(Qr(U, be), U)), H;
  }, [e]), We = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => Bc(We, yt),
    [We, yt]
  ), $t = F !== "None" || we != null || X, at = Oe(() => {
    if (w) {
      const H = k ?? t.length, U = Math.max(1, Math.ceil(H / fe));
      return {
        items: [...t],
        filtered: [...t],
        total: H,
        pageCount: U,
        pageNumber: ne,
        pageSize: fe,
        sorts: pe,
        filters: G
      };
    }
    return Wc(
      t,
      {
        sorts: pe,
        filters: G,
        pageNumber: ne,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? fe : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: a,
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
    ne,
    fe,
    a,
    o,
    e,
    w,
    k,
    c
  ]), V = oe(T);
  ve(() => {
    V.current = T;
  });
  const me = Oe(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? So(
        e.find((be) => be.property === H)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [G, e]
  );
  ve(() => {
    !w || V.current == null || V.current({
      start: (ne - 1) * fe,
      count: fe,
      pageNumber: ne,
      pageSize: fe,
      sorts: pe,
      filters: me,
      logicalOperator: a
    });
  }, [
    w,
    ne,
    fe,
    pe,
    me,
    a
  ]);
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => ae || (A ? ko(at.items, Q, rr) : /* @__PURE__ */ new Set()), [ae, A, at.items, Q]), Pt = Oe(
    () => jc(at.items, Q, e, Ye, rr),
    [at.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? We.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : We,
    [We, Q, Ve]
  ), W = (H) => {
    H !== "" && De(Hc(pe, H, { multi: l }));
  }, ee = (H, U) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(H, U), xe;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (y === "None") return;
    const U = n(H), be = p ?? [];
    let xe;
    y === "Single" ? xe = be.length === 1 && be[0] === U ? [] : [U] : xe = be.includes(U) ? be.filter((et) => et !== U) : [...be, U], _?.(xe);
  }, ke = (H) => {
    ue?.(H);
  }, Ce = (H, U, be) => {
    Rt.current = { key: H, startX: U, startWidth: be };
  }, Ke = (H) => {
    const U = Rt.current;
    if (!U) return;
    const be = H - U.startX, xe = Math.max(48, U.startWidth + be);
    Z((et) => ({ ...et, [U.key]: `${xe}px` }));
  }, Be = () => {
    Rt.current = null;
  }, it = (H) => {
    xt.current = H;
  }, rt = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Je((be) => {
      const xe = [...be], et = xe.indexOf(U), Dt = xe.indexOf(H);
      return et < 0 || Dt < 0 ? be : (xe.splice(et, 1), xe.splice(Dt, 0, U), xe);
    });
  }, Et = (H) => {
    lt((U) => {
      const be = new Set(U);
      return be.has(H) ? be.delete(H) : be.add(H), be;
    });
  }, mt = () => {
    const H = xt.current;
    if (xt.current = null, !H || !S) return;
    const be = Ie.get(H)?.property;
    be && (ge(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Ee(null));
  }, ze = (H) => {
    ge((U) => U.filter((be) => be !== H)), Ee(null);
  }, Tt = (H) => {
    Ee((U) => {
      const be = U ?? (A ? ko(at.items, Q, rr) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(H) ? xe.delete(H) : xe.add(H), xe;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((be) => {
      be.property && (U[be.property] = rr(H, be.property));
    }), nt(U), Ze(String(n(H)));
  }, pn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), nt(H), Ze("__new__");
  }, Tn = () => {
    Ze(null), nt({});
  }, Bn = (H) => {
    if (je === "__new__") {
      const U = Object.fromEntries(
        e.filter((be) => be.property).map((be) => [be.property, Qe[be.property]])
      );
      te?.(U);
    } else if (H != null) {
      const U = { ...H, ...Qe };
      ie?.(H, U);
    }
    Tn();
  }, wn = c && (g === "Top" || g === "TopAndBottom"), Yr = c && (g === "Bottom" || g === "TopAndBottom"), ks = d && e.some((H) => Oo(H, d)), Ns = (H, U, be) => H.render ? H.render(U, { index: 0 }) : hs(rr(U, H.property), H.format), Ss = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, mn = w ? t : at.filtered, Xr = () => {
    const H = Gc(
      mn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(U), xe = document.createElement("a");
    xe.href = be, xe.download = `${$}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, hn = Pt.length, jt = Oe(() => {
    if (!R || hn === 0)
      return { start: 0, end: hn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / z) - H
    ), be = Math.ceil(Le / z) + H * 2, xe = Math.min(hn, U + be), et = U * z, Dt = Math.max(0, (hn - xe) * z);
    return { start: U, end: xe, top: et, bottom: Dt };
  }, [R, hn, Xt, z, Le]), kr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Se.grid, he].filter(Boolean).join(" "), children: [
    wn && /* @__PURE__ */ s(
      Hs,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: h,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${Yr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || b || M) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
      S && /* @__PURE__ */ s(
        "div",
        {
          className: [
            Se.groupPanel,
            Q.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: S ? (H) => H.preventDefault() : void 0,
          onDrop: S ? mt : void 0,
          children: Q.length > 0 ? Q.map((H) => {
            const U = e.find((be) => be.property === H)?.title ?? H;
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
          }) : /* @__PURE__ */ s("span", { className: Se.groupPanelText, children: C })
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
      b && /* @__PURE__ */ D("div", { className: Se.picker, children: [
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
              const be = Qr(H, U);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: At.has(be),
                    onChange: () => Et(be)
                  }
                ),
                H.title ?? H.property
              ] }, be);
            })
          }
        )
      ] }),
      M && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Xr,
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
          re(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ D(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (R ? hn : at.total) + 1,
              "aria-label": K,
              "aria-busy": le || void 0,
              children: [
                /* @__PURE__ */ D("colgroup", { children: [
                  Xe.map(({ key: H, column: U }) => /* @__PURE__ */ s(
                    "col",
                    {
                      style: {
                        width: yt[H] ?? U.width,
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
                      const be = Pd(U, r), xe = pe.find((wt) => wt.property === U.property), et = xe ? pe.indexOf(xe) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": be && xe ? Rd[xe.sortOrder] : "none",
                          className: [
                            Se.header,
                            Dt === "center" ? Se.center : "",
                            Dt === "right" ? Se.right : "",
                            U.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: E || S || void 0,
                          onDragStart: E || S ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), it(H);
                          } : void 0,
                          onDragOver: E ? (wt) => wt.preventDefault() : void 0,
                          onDrop: E ? () => rt(H) : void 0,
                          children: [
                            be ? /* @__PURE__ */ D(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => U.property != null && W(U.property),
                                "aria-label": xe ? xe.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  xe && /* @__PURE__ */ s(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: xe.sortOrder === "Ascending" ? "▲" : "▼"
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
                                  const gn = yt[H] ?? U.width, Ct = gn ? parseFloat(gn) : 96;
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
                  ks && /* @__PURE__ */ s("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!Oo(U, d))
                      return /* @__PURE__ */ s("td", { className: Se.filterCell }, H);
                    const be = G.get(U.property ?? "");
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
                          value: be?.operator ?? So(U.type ?? "string"),
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: vl.filter((xe) => xe !== "Custom").map(
                            (xe) => /* @__PURE__ */ s("option", { value: xe, children: xe }, xe)
                          )
                        }
                      ),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          className: Se.filterInput,
                          value: be?.value ?? "",
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            value: xe.target.value
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
                        onChange: (be) => nt((xe) => ({
                          ...xe,
                          [U.property]: U.type === "boolean" ? be.target.checked : be.target.value
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
                          onClick: () => Bn(),
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
                      colSpan: kr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const be = jt.start + U, xe = R ? be + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ s(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ s("td", { colSpan: kr, className: Se.groupCell, children: /* @__PURE__ */ D(
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
                        "aria-rowindex": xe,
                        className: [
                          ue || y !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          gn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": y !== "None" ? wt : void 0,
                        onClick: ue || y !== "None" ? (Ct) => {
                          jd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: Ss(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: gn && gt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((Os) => ({
                                    ...Os,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : Ns(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ s("td", { className: Se.commandCell, children: gn ? /* @__PURE__ */ D(pt, { children: [
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Bn(et),
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
                          ] }) : /* @__PURE__ */ D(pt, { children: [
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
                      colSpan: kr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                I && I.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const be = I.filter(
                      (xe) => xe.property === U.property
                    );
                    return /* @__PURE__ */ s(
                      "td",
                      {
                        className: [
                          Se.footerCell,
                          U.align === "right" ? Se.right : "",
                          U.align === "center" ? Se.center : ""
                        ].filter(Boolean).join(" "),
                        children: be.map((xe, et) => /* @__PURE__ */ D(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              hs(
                                Kc(mn, xe, rr),
                                xe.format
                              )
                            ]
                          },
                          `${xe.property}-${xe.type}-${et}`
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
          at.items.length === 0 && !le && /* @__PURE__ */ s("div", { className: Se.empty, children: _e }),
          le && /* @__PURE__ */ s("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Yr && /* @__PURE__ */ s(
      Hs,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: h,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const Bd = "_wrap_avqds_1", Fd = "_grid_avqds_7", Hd = "_stacked_avqds_13", Ud = "_item_avqds_19", qd = "_empty_avqds_25", Cr = {
  wrap: Bd,
  grid: Fd,
  stacked: Hd,
  item: Ud,
  empty: qd
};
function IS({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: i = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: a = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [x, g] = q(1), [h, m] = q(t), y = e.length, p = Math.max(1, Math.ceil(y / h)), _ = Math.min(Math.max(1, x), p), b = Oe(() => {
    const v = (_ - 1) * h;
    return e.slice(v, v + h);
  }, [e, _, h]), N = r ? Cr.grid : Cr.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Cr.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && o != null ? o : y === 0 ? d ?? /* @__PURE__ */ s("div", { className: Cr.empty, children: i }) : /* @__PURE__ */ s("div", { className: N, children: b.map((v, E) => /* @__PURE__ */ s("div", { className: Cr.item, children: l ? l(v, E) : String(v) }, E)) }),
        /* @__PURE__ */ s(
          Hs,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: h,
            count: y,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: g,
            onPageSizeChange: (v) => {
              m(v), g(1);
            }
          }
        )
      ]
    }
  );
}
const Wd = "_label_1qfpw_1", Kd = {
  label: Wd
}, zS = st(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: l,
      className: [Kd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Gd = "_textbox_oly89_1", Vd = "_invalid_oly89_37", Yd = "_xs_oly89_44", Xd = "_sm_oly89_50", Zd = "_md_oly89_56", Jd = "_lg_oly89_62", Qd = "_xl_oly89_68", Cs = {
  textbox: Gd,
  invalid: Vd,
  xs: Yd,
  sm: Xd,
  md: Zd,
  lg: Jd,
  xl: Qd
}, ro = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: i = "text",
    ...d
  }, o) {
    return l === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: i,
        "data-size": t,
        className: [
          Cs.textbox,
          Cs[t],
          n ? Cs.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), es = ro, eu = "_checkbox_1bb6c_1", tu = {
  checkbox: eu
}, nu = st(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const i = oe(null);
    return ve(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ s(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [tu.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), ru = {
  switch: "_switch_19gf1_1"
}, LS = st(function({ className: t, ...n }, r) {
  const [l, i] = q(
    !!n.defaultChecked
  ), d = n.checked ?? l;
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": d,
      className: [ru.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (o) => {
        n.checked === void 0 && i(o.target.checked), n.onChange?.(o);
      }
    }
  );
}), su = "_trigger_1jlxf_1", ou = "_tooltip_1jlxf_7", lu = "_top_1jlxf_34", au = "_right_1jlxf_40", iu = "_bottom_1jlxf_46", cu = "_left_1jlxf_52", du = "_arrow_1jlxf_58", uu = "_floating_1jlxf_70", Hn = {
  trigger: su,
  tooltip: ou,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: lu,
  right: au,
  bottom: iu,
  left: cu,
  arrow: du,
  floating: uu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, ts = 8;
function fu(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + ts,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - ts,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + ts,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - ts,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function RS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const o = ot(), a = oe(null), c = oe(null), f = oe(() => {
  }), [u, x] = q(!1), [g, h] = q(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, y = () => {
    m(), a.current = window.setTimeout(() => {
      a.current = null, x(!0);
    }, r);
  }, p = () => {
    m(), x(!1);
  };
  if (ve(() => () => m(), []), ve(() => {
    if (!u || l == null) return;
    const b = window.setTimeout(() => x(!1), l);
    return () => window.clearTimeout(b);
  }, [u, l]), ve(() => {
    if (i || !u) return;
    const b = (N) => {
      N.key === "Escape" && p();
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [i, u]), ve(() => {
    if (!i) return;
    let b = null, N = null;
    const v = () => {
      b !== null && (window.clearTimeout(b), b = null);
    }, E = () => {
      v(), N = null, h(null);
    };
    f.current = E;
    const S = (w) => {
      v(), N = w, b = window.setTimeout(() => {
        b = null, h(w);
      }, r);
    }, C = (w) => w instanceof Element ? w.closest(i) : null, A = (w) => {
      const k = C(w.target);
      !k || k === N || S(k);
    }, I = (w) => {
      const k = C(w.target);
      if (!k || k !== N) return;
      const T = w.relatedTarget;
      T instanceof Element && k.contains(T) || E();
    }, M = (w) => {
      w.key === "Escape" && E();
    }, $ = () => E();
    return document.addEventListener("mouseover", A), document.addEventListener("mouseout", I), document.addEventListener("focusin", A), document.addEventListener("focusout", I), document.addEventListener("keydown", M), document.addEventListener("scroll", $, !0), window.addEventListener("resize", $), () => {
      v(), document.removeEventListener("mouseover", A), document.removeEventListener("mouseout", I), document.removeEventListener("focusin", A), document.removeEventListener("focusout", I), document.removeEventListener("keydown", M), document.removeEventListener("scroll", $, !0), window.removeEventListener("resize", $), N = null, h(null);
    };
  }, [i, r]), ve(() => {
    if (!i || g === null || l == null) return;
    const b = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(b);
  }, [i, g, l]), Fs(() => {
    const b = g;
    if (!b) return;
    const N = b.getAttribute("aria-describedby");
    return b.setAttribute(
      "aria-describedby",
      [N, o].filter(Boolean).join(" ")
    ), () => {
      N == null ? b.removeAttribute("aria-describedby") : b.setAttribute("aria-describedby", N);
    };
  }, [g, o]), Fs(() => {
    const b = c.current, N = g;
    !b || !N || Object.assign(
      b.style,
      fu(N.getBoundingClientRect(), n)
    );
  }, [g, n]), i)
    return g ? /* @__PURE__ */ D(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: o,
        className: [
          Hn.tooltip,
          Hn[n],
          Hn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ s("span", { className: Hn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = qt(t) ? eo(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? o : null
    ].filter((b) => typeof b == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "span",
      {
        className: [Hn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: y,
        onMouseLeave: p,
        onFocus: y,
        onBlur: p,
        children: [
          _,
          u && /* @__PURE__ */ D(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [Hn.tooltip, Hn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ s("span", { className: Hn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const _u = "_dialog_1t7pw_1", pu = "_sm_1t7pw_104", mu = "_resizable_1t7pw_110", hu = "_md_1t7pw_113", gu = "_lg_1t7pw_117", bu = "_header_1t7pw_121", yu = "_title_1t7pw_132", xu = "_description_1t7pw_139", vu = "_close_1t7pw_146", wu = "_body_1t7pw_176", ku = "_footer_1t7pw_188", bn = {
  dialog: _u,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: pu,
  resizable: mu,
  md: hu,
  lg: gu,
  header: bu,
  title: yu,
  description: xu,
  close: vu,
  body: wu,
  footer: ku
};
function Sl({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: i,
  size: d = "md",
  width: o,
  height: a,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: x = null,
  showCloseButton: g = !0,
  showMask: h = !0,
  canClose: m,
  className: y
}) {
  const p = oe(null), _ = ot(), b = ot(), N = oe(t);
  ve(() => {
    N.current = t;
  });
  const v = oe(m);
  ve(() => {
    v.current = m;
  });
  const E = oe(f);
  ve(() => {
    E.current = f;
  });
  const S = oe(!1), C = oe(!1), A = B(() => {
    if (S.current) return;
    const $ = v.current?.();
    if ($ instanceof Promise) {
      $.then((w) => {
        w && !S.current && (S.current = !0, N.current());
      });
      return;
    }
    $ !== !1 && (S.current = !0, N.current());
  }, []), I = B(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    N.current();
  }, []), M = B(
    ($) => {
      if ($.key !== "Tab" || !p.current) return;
      const w = Array.from(
        p.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (T) => T.offsetWidth > 0 || T.offsetHeight > 0 || T === document.activeElement
      );
      if (w.length === 0) {
        $.preventDefault();
        return;
      }
      const k = w.indexOf(document.activeElement);
      if ($.shiftKey) {
        if (k <= 0) {
          $.preventDefault();
          const T = w[w.length - 1];
          T && T.focus();
        }
      } else if (k === -1 || k === w.length - 1) {
        $.preventDefault();
        const T = w[0];
        T && T.focus();
      }
    },
    []
  );
  return ve(() => {
    const $ = p.current;
    if ($)
      if (e && !$.open) {
        const w = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        $.showModal(), ($.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? $.querySelector("button"))?.focus();
        const T = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const R = (z) => {
          z.preventDefault(), E.current && A();
        };
        return $.addEventListener("cancel", R), () => {
          $.removeEventListener("cancel", R), document.body.style.overflow = T, w?.focus({ preventScroll: !0 });
        };
      } else !e && $.open && (C.current = S.current, S.current = !1, $.close());
  }, [e, A]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: p,
      className: [
        bn.dialog,
        bn[d],
        u ? bn.resizable : null,
        x ? bn[`side-${x}`] : null,
        h === !1 ? bn["no-mask"] : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: I,
      onClick: ($) => {
        $.target === p.current && c && A();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? b : void 0,
      onKeyDown: M,
      children: [
        n && /* @__PURE__ */ D("header", { className: bn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ s("h2", { id: _, className: bn.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: b, className: bn.description, children: r })
          ] }),
          g !== !1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: bn.close,
              onClick: () => {
                A();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: bn.body, children: l }),
        i && /* @__PURE__ */ s("footer", { className: bn.footer, children: i })
      ]
    }
  );
}
const Nu = "_typography_1jy8x_1", Su = "_h1_1jy8x_39", Ou = "_h2_1jy8x_45", $u = "_h3_1jy8x_51", Eu = "_h4_1jy8x_57", Tu = "_h5_1jy8x_63", Cu = "_h6_1jy8x_69", Au = "_button_1jy8x_99", Du = "_caption_1jy8x_106", Mu = "_overline_1jy8x_112", As = {
  typography: Nu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Su,
  h2: Ou,
  h3: $u,
  h4: Eu,
  h5: Tu,
  h6: Cu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Au,
  caption: Du,
  overline: Mu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Iu = {
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
}, zu = {
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
}, Lu = {
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
}, Ru = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ol = st(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: i = !0,
  className: d,
  children: o,
  ...a
}, c) {
  if (i === !1) return null;
  const f = n === "Auto" ? Iu[t] : Lu[n];
  return /* @__PURE__ */ s(
    f,
    {
      ref: c,
      className: [
        As.typography,
        As[zu[t]],
        r ? As[Ru[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? o
    }
  );
}), $l = ar(null);
function PS() {
  const e = jn($l);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function jS({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = oe(0), i = () => (l.current += 1, l.current), d = oe([]);
  d.current = t;
  const o = (x) => {
    const g = d.current[0];
    g && (g.kind === "confirm" ? g.resolve(!!x) : g.kind === "alert" ? g.resolve() : g.resolve(x), n((h) => h.slice(1)));
  }, a = Oe(
    () => ({
      confirm: (x = {}) => new Promise((g) => {
        n((h) => [
          ...h,
          { seq: i(), kind: "confirm", options: x, resolve: g }
        ]);
      }),
      alert: (x = {}) => new Promise((g) => {
        n((h) => [
          ...h,
          { seq: i(), kind: "alert", options: x, resolve: g }
        ]);
      }),
      open: (x = {}) => new Promise((g) => {
        n((h) => [
          ...h,
          { seq: i(), kind: "custom", options: x, resolve: g }
        ]);
      }),
      openSide: ({ position: x, showMask: g = !0, ...h }) => new Promise((m) => {
        n((y) => [
          ...y,
          {
            seq: i(),
            kind: "custom",
            options: { ...h, side: x, showMask: g },
            resolve: m
          }
        ]);
      }),
      close: (x) => o(x),
      closeAll: () => {
        n((x) => (x.forEach((g) => {
          g.kind === "confirm" ? g.resolve(!1) : g.kind === "alert" ? g.resolve() : g.resolve(void 0);
        }), []));
      },
      refresh: () => r((x) => x + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), c = t[0];
  function f(x) {
    c && (c.kind === "confirm" ? c.resolve(!!x) : c.kind === "alert" ? c.resolve() : c.resolve(x), n((g) => g.slice(1)));
  }
  const u = c?.kind === "custom" ? c.options : null;
  return /* @__PURE__ */ D($l.Provider, { value: a, children: [
    e,
    /* @__PURE__ */ s(
      Sl,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: c?.kind === "custom" ? u?.title ?? "Dialog" : c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        description: u?.description,
        size: c?.kind === "custom" ? u?.size : c?.options.size,
        width: u?.width,
        height: u?.height,
        side: u?.side ?? null,
        showCloseButton: u?.showCloseButton,
        showMask: u?.showMask,
        closeOnOverlayClick: u?.closeOnOverlayClick,
        closeOnEsc: u?.closeOnEsc,
        className: u?.className,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ D(pt, { children: [
          /* @__PURE__ */ s(an, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            an,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ s(an, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ s(an, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ s(Ol, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Pu = "_viewport_11t1p_1", ju = "_topLeft_11t1p_13", Bu = "_topRight_11t1p_20", Fu = "_bottomLeft_11t1p_25", Hu = "_toast_11t1p_30", Uu = "_leaving_11t1p_61", qu = "_info_11t1p_77", Wu = "_success_11t1p_86", Ku = "_warning_11t1p_95", Gu = "_danger_11t1p_104", Vu = "_content_11t1p_113", Yu = "_title_11t1p_118", Xu = "_description_11t1p_141", Zu = "_dismiss_11t1p_148", Ju = "_actions_11t1p_169", Qu = "_action_11t1p_169", ef = "_cancel_11t1p_177", tf = "_progress_11t1p_215", en = {
  viewport: Pu,
  topLeft: ju,
  topRight: Bu,
  bottomLeft: Fu,
  toast: Hu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Uu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: qu,
  success: Wu,
  warning: Ku,
  danger: Gu,
  content: Vu,
  title: Yu,
  description: Xu,
  dismiss: Zu,
  actions: Ju,
  action: Qu,
  cancel: ef,
  progress: tf,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, El = ar(null);
function BS() {
  const e = jn(El);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const nf = 200, rf = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function FS({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = q([]), [o, a] = q(!1), c = oe([]), f = oe(/* @__PURE__ */ new Map()), u = oe(!1), x = oe(0), g = (k) => {
    u.current = k, a(k);
  }, h = B((k) => {
    const T = f.current.get(k);
    T && (window.clearTimeout(T.timeoutId), T.remaining = Math.max(
      0,
      T.remaining - (Date.now() - T.startedAt)
    ));
  }, []), m = B((k) => {
    const T = f.current.get(k);
    T && (window.clearTimeout(T.timeoutId), f.current.delete(k));
  }, []), y = B(
    (k) => {
      m(k), d((T) => {
        const R = T.filter((z) => z.id !== k);
        return c.current = R, R;
      });
    },
    [m]
  ), p = B(
    (k) => {
      const T = c.current.find((R) => R.id === k);
      !T || T.leaving || (T.onAutoClose?.(), y(k));
    },
    [y]
  ), _ = B(
    (k) => {
      const T = f.current.get(k);
      !T || T.remaining <= 0 || (T.startedAt = Date.now(), T.timeoutId = window.setTimeout(() => p(k), T.remaining));
    },
    [p]
  ), b = B(() => {
    u.current || f.current.forEach((k, T) => h(T)), g(!0);
  }, [h]), N = B(() => {
    f.current.forEach((k, T) => _(T)), g(!1);
  }, [_]);
  ve(() => {
    if (!r) return;
    const k = () => {
      document.hidden ? b() : N();
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, [r, b, N]);
  const v = B(
    (k) => {
      const T = c.current.find((R) => R.id === k);
      !T || T.leaving || (T.onDismiss?.(), d((R) => {
        const z = R.map(
          (j) => j.id === k ? { ...j, leaving: !0 } : j
        );
        return c.current = z, z;
      }), window.setTimeout(() => y(k), nf));
    },
    [y]
  ), E = B(
    (k) => {
      if (k.durationMs <= 0) return;
      const T = {
        remaining: k.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(k.id, T), u.current || _(k.id);
    },
    [_]
  ), S = B(
    (k) => {
      const T = c.current.find((z) => z.id === k.id), R = {
        id: k.id ?? ++x.current,
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
      d((z) => {
        const j = T ? z.map(
          (F) => F.id === R.id ? { ...R, leaving: !1 } : F
        ) : [...z, R];
        return c.current = j, j;
      }), T && m(R.id), E(R);
    },
    [t, n, E, m]
  ), C = B(
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
  ), A = B(
    (k) => (T, R) => C({ severity: k, summary: T, detail: R }),
    [C]
  ), I = Oe(
    () => ({
      toast: S,
      notify: C,
      notifyInfo: A("info"),
      notifySuccess: A("success"),
      notifyWarning: A("warning"),
      notifyError: A("danger")
    }),
    [S, C, A]
  ), M = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((k) => k.position)])),
    [n, i]
  ), $ = r ? b : void 0, w = r ? N : void 0;
  return /* @__PURE__ */ D(El.Provider, { value: I, children: [
    e,
    M.map((k) => /* @__PURE__ */ s(
      "div",
      {
        className: [en.viewport, en[rf[k]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: $,
        onMouseLeave: w,
        children: i.filter((T) => T.position === k).map((T) => /* @__PURE__ */ D(
          "div",
          {
            role: T.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": T.closeOnClick ? "true" : "false",
            className: [
              en.toast,
              en[T.severity],
              T.leaving ? en.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: T.click || T.closeOnClick ? () => {
              T.click?.(T.payload), T.closeOnClick && v(T.id);
            } : void 0,
            children: [
              /* @__PURE__ */ D("div", { className: en.content, children: [
                /* @__PURE__ */ s("div", { className: en.title, children: T.title }),
                T.description && /* @__PURE__ */ s("div", { className: en.description, children: T.description }),
                (T.action || T.cancel) && /* @__PURE__ */ D("div", { className: en.actions, children: [
                  T.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: en.action,
                      onClick: () => {
                        T.action?.onClick?.(), v(T.id);
                      },
                      children: T.action.label
                    }
                  ),
                  T.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: en.cancel,
                      onClick: () => {
                        T.cancel?.onClick?.(), v(T.id);
                      },
                      children: T.cancel.label
                    }
                  )
                ] })
              ] }),
              T.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: en.dismiss,
                  onClick: () => v(T.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              ),
              T.showProgress && T.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: en.progress,
                  style: { animationDuration: `${T.durationMs}ms` }
                }
              )
            ]
          },
          T.id
        ))
      },
      k
    ))
  ] });
}
const sf = "_gauge_pyq6q_3", of = "_value_pyq6q_11", lf = "_tick_pyq6q_16", Ln = {
  gauge: sf,
  value: of,
  tick: lf
}, ns = 150, $o = 240;
function Eo(e, t, n, r) {
  const l = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(l), t + n * Math.sin(l)];
}
function To(e, t, n, r, l) {
  const [i, d] = Eo(e, t, n, r), [o, a] = Eo(e, t, n, l), c = l - r > 180 ? 1 : 0;
  return `M ${i} ${d} A ${n} ${n} 0 ${c} 1 ${o} ${a}`;
}
function af(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const l of t)
    e >= l.offset && (r = l.color);
  return r;
}
function HS({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: l,
  colorStops: i,
  size: d = 200,
  showValue: o = !0,
  formatValue: a = (u) => String(Math.round(u * 100) / 100),
  ariaLabel: c = "Gauge",
  className: f
}) {
  const u = n - t || 1, x = Math.max(0, Math.min(1, (e - t) / u)), g = "var(--dx-border-color)", h = l ?? "var(--dx-primary-color)", m = 100, y = 96, p = 80, _ = ns + $o * x;
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": c,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Ln.gauge, f].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ s(
            "path",
            {
              d: To(m, y, p, ns, ns + $o),
              fill: "none",
              stroke: g,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          x > 0 && /* @__PURE__ */ s(
            "path",
            {
              d: To(m, y, p, ns, _),
              fill: "none",
              stroke: af(x, i, h),
              strokeWidth: r,
              strokeLinecap: "round"
            }
          )
        ] }),
        o && /* @__PURE__ */ s("div", { className: Ln.value, children: a(e) })
      ]
    }
  );
}
function xr(e, t, n, r) {
  const l = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(l), t + n * Math.sin(l)];
}
function Co(e, t, n, r, l) {
  const [i, d] = xr(e, t, n, r), [o, a] = xr(e, t, n, l), c = l - r > 180 ? 1 : 0;
  return `M ${i} ${d} A ${n} ${n} 0 ${c} 1 ${o} ${a}`;
}
function cf(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, l) => e + (t - e) * l / (n - 1)
  );
}
function US({
  value: e,
  min: t = 0,
  max: n = 100,
  startAngle: r = 0,
  endAngle: l = 360,
  ticks: i = {},
  ranges: d = [],
  pointers: o = [],
  color: a,
  size: c = 200,
  showValue: f = !0,
  formatValue: u = (h) => String(Math.round(h * 100) / 100),
  ariaLabel: x = "Gauge",
  className: g
}) {
  const h = n - t || 1, m = (M) => Math.max(0, Math.min(1, (M - t) / h)), p = l - r >= 360 ? r + 359.999 : l, _ = (M) => r + (p - r) * m(M), b = a ?? "var(--dx-primary-color)", N = "var(--dx-border-color)", { count: v = 8, showLabels: E = !0 } = i, S = 100, C = 100, A = 78, I = (M, $, w) => {
    const [k, T] = xr(S, C, A - 14, _(M));
    return /* @__PURE__ */ s("g", { children: /* @__PURE__ */ s(
      "line",
      {
        x1: S,
        y1: C,
        x2: k,
        y2: T,
        stroke: $,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, w);
  };
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": x,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Ln.gauge, g].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ D("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ s(
            "path",
            {
              d: Co(S, C, A, r, p),
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          d.map((M, $) => /* @__PURE__ */ s(
            "path",
            {
              d: Co(
                S,
                C,
                A,
                _(Math.max(t, M.from)),
                _(Math.min(n, M.to))
              ),
              fill: "none",
              stroke: M.color,
              strokeWidth: 12
            },
            `range-${$}`
          )),
          v > 0 && cf(t, n, v).map((M, $) => {
            const [w, k] = xr(S, C, A - 10, _(M)), [T, R] = xr(S, C, A - 16, _(M)), [z, j] = xr(S, C, A - 26, _(M));
            return /* @__PURE__ */ D("g", { children: [
              /* @__PURE__ */ s(
                "line",
                {
                  x1: w,
                  y1: k,
                  x2: T,
                  y2: R,
                  stroke: N,
                  strokeWidth: 1.5
                }
              ),
              E && /* @__PURE__ */ s(
                "text",
                {
                  x: z,
                  y: j + 4,
                  textAnchor: "middle",
                  className: Ln.tick,
                  children: M
                }
              )
            ] }, $);
          }),
          I(e, b, "value"),
          o.map(
            (M, $) => I(M.value, M.color ?? b, `extra-${$}`)
          ),
          /* @__PURE__ */ s("circle", { cx: S, cy: C, r: 7, fill: b })
        ] }),
        f && /* @__PURE__ */ s("div", { className: Ln.value, children: u(e) })
      ]
    }
  );
}
function df(e, t, n) {
  return n <= 1 ? [e] : Array.from(
    { length: n },
    (r, l) => e + (t - e) * l / (n - 1)
  );
}
function qS({
  value: e,
  min: t = 0,
  max: n = 100,
  orientation: r = "horizontal",
  ticks: l = {},
  ranges: i = [],
  color: d,
  length: o,
  thickness: a = 20,
  showValue: c = !0,
  formatValue: f = (g) => String(Math.round(g * 100) / 100),
  ariaLabel: u = "Gauge",
  className: x
}) {
  const g = n - t || 1, h = r === "vertical", m = o ?? (h ? 220 : 280), { count: y = 5, showLabels: p = !0 } = l, _ = d ?? "var(--dx-primary-color)", b = "var(--dx-border-color)", N = 8, v = (I) => {
    const $ = (Math.max(t, Math.min(n, I)) - t) / g;
    return h ? m - N - $ * (m - N * 2) : N + $ * (m - N * 2);
  }, E = () => y <= 0 ? null : df(t, n, y).map((I, M) => {
    const $ = v(I);
    return /* @__PURE__ */ D("g", { children: [
      h ? /* @__PURE__ */ s(
        "line",
        {
          x1: -6,
          y1: $,
          x2: 0,
          y2: $,
          stroke: b,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ s(
        "line",
        {
          x1: $,
          y1: -6,
          x2: $,
          y2: 0,
          stroke: b,
          strokeWidth: 1.5
        }
      ),
      p && (h ? /* @__PURE__ */ s("text", { x: -10, y: $ + 4, textAnchor: "end", className: Ln.tick, children: I }) : /* @__PURE__ */ s("text", { x: $, y: -10, textAnchor: "middle", className: Ln.tick, children: I }))
    ] }, M);
  }), S = () => i.map((I, M) => {
    const $ = v(I.from), w = v(I.to), k = Math.min($, w), T = Math.abs(w - $);
    return h ? /* @__PURE__ */ s(
      "rect",
      {
        x: -a / 2,
        y: k,
        width: a,
        height: T,
        fill: I.color,
        opacity: 0.35
      },
      M
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: k,
        y: -a / 2,
        width: T,
        height: a,
        fill: I.color,
        opacity: 0.35
      },
      M
    );
  }), C = v(e), A = /* @__PURE__ */ D("g", { children: [
    S(),
    h ? /* @__PURE__ */ s(
      "rect",
      {
        x: -a / 2,
        y: N,
        width: a,
        height: m - N * 2,
        rx: a / 2,
        fill: "none",
        stroke: b,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: N,
        y: -a / 2,
        width: m - N * 2,
        height: a,
        rx: a / 2,
        fill: "none",
        stroke: b,
        strokeWidth: 2
      }
    ),
    h ? /* @__PURE__ */ s(
      "rect",
      {
        x: -a / 2,
        y: C,
        width: a,
        height: m - N - C,
        rx: a / 2,
        fill: _
      }
    ) : /* @__PURE__ */ s(
      "rect",
      {
        x: N,
        y: -a / 2,
        width: Math.max(0, C - N),
        height: a,
        rx: a / 2,
        fill: _
      }
    ),
    h ? /* @__PURE__ */ s(
      "path",
      {
        d: `M ${-a / 2 - 10} ${C} L ${-a / 2 - 2} ${C - 5} L ${-a / 2 - 2} ${C + 5} Z`,
        fill: _
      }
    ) : /* @__PURE__ */ s(
      "path",
      {
        d: `M ${C} ${-a / 2 - 10} L ${C - 5} ${-a / 2 - 2} L ${C + 5} ${-a / 2 - 2} Z`,
        fill: _
      }
    ),
    E()
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      role: "meter",
      "aria-label": u,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [Ln.gauge, x].filter(Boolean).join(" "),
      children: [
        h ? /* @__PURE__ */ s(
          "svg",
          {
            width: a + 64,
            height: m + 8,
            viewBox: `${-a / 2 - 56} -16 ${a + 64} ${m + 24}`,
            "aria-hidden": "true",
            children: A
          }
        ) : /* @__PURE__ */ s(
          "svg",
          {
            width: m,
            height: a + 48,
            viewBox: `0 -24 ${m} ${a + 56}`,
            "aria-hidden": "true",
            children: A
          }
        ),
        c && /* @__PURE__ */ s("div", { className: Ln.value, children: f(e) })
      ]
    }
  );
}
const uf = "_chat_1apnf_3", ff = "_messages_1apnf_9", _f = "_message_1apnf_9", pf = "_user_1apnf_29", mf = "_assistant_1apnf_35", hf = "_system_1apnf_40", gf = "_typing_1apnf_46", bf = "_inputRow_1apnf_51", ur = {
  chat: uf,
  messages: ff,
  message: _f,
  user: pf,
  assistant: mf,
  system: hf,
  typing: gf,
  inputRow: bf
};
function WS({
  messages: e = [],
  onSend: t,
  placeholder: n = "Type a message…",
  sendText: r = "Send",
  inputLabel: l = "Message",
  ariaLabel: i = "Chat",
  messageTemplate: d,
  inputTemplate: o,
  loading: a = !1,
  disabled: c = !1,
  className: f
}) {
  const [u, x] = q(""), g = a || c, h = u.trim().length > 0 && !g, m = (p) => {
    p.preventDefault();
    const _ = u.trim();
    !_ || g || (x(""), t?.(_));
  }, y = /* @__PURE__ */ D("form", { className: ur.inputRow, onSubmit: (p) => {
    m(p);
  }, children: [
    /* @__PURE__ */ s(
      ro,
      {
        value: u,
        placeholder: n,
        "aria-label": l,
        disabled: g,
        onChange: (p) => x(p.target.value)
      }
    ),
    /* @__PURE__ */ s(an, { type: "submit", disabled: !h, loading: a, children: r })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      className: [ur.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: ur.messages, children: [
          e.map(
            (p, _) => d ? /* @__PURE__ */ s("div", { children: d(p, _) }, _) : /* @__PURE__ */ s(
              "div",
              {
                className: [ur.message, ur[p.role]].filter(Boolean).join(" "),
                children: p.content
              },
              _
            )
          ),
          a && /* @__PURE__ */ s("div", { className: ur.typing, children: "…" })
        ] }),
        o ? o(y) : y
      ]
    }
  );
}
const yf = "_wrapper_1ulz6_1", xf = "_input_1ulz6_8", vf = "_invalid_1ulz6_38", wf = "_toggle_1ulz6_45", kf = "_xs_1ulz6_80", Nf = "_sm_1ulz6_86", Sf = "_md_1ulz6_92", Of = "_lg_1ulz6_98", $f = "_xl_1ulz6_104", Ar = {
  wrapper: yf,
  input: xf,
  invalid: vf,
  toggle: wf,
  xs: kf,
  sm: Nf,
  md: Sf,
  lg: Of,
  xl: $f
}, Ef = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, a) {
    const [c, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Ar.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Ar.input,
              Ar[t],
              n ? Ar.invalid : null,
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
            className: Ar.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : i,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ s(Me, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Tf = "_login_30qie_3", Cf = "_title_30qie_9", Af = "_remember_30qie_14", Df = "_link_30qie_21", Dr = {
  login: Tf,
  title: Cf,
  remember: Af,
  link: Df
}, so = "dx-login-username";
function Mf(e) {
  const t = e === void 0 ? so : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function If(e, t) {
  const n = e === void 0 ? so : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function zf(e) {
  const t = e === void 0 ? so : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function KS({
  action: e,
  method: t = "post",
  onLogin: n,
  onRegister: r,
  onForgotPassword: l,
  registerContent: i,
  forgotPasswordContent: d,
  rememberMe: o = !0,
  loading: a = !1,
  title: c,
  usernameLabel: f = "Username",
  passwordLabel: u = "Password",
  submitText: x = "Sign in",
  storageKey: g,
  className: h
}) {
  const [m, y] = q(() => Mf(g) ?? ""), [p, _] = q(""), [b, N] = q(!1), [v, E] = q(!1), [S, C] = q({}), A = a || v, I = e != null && n == null, M = async ($) => {
    I || $.preventDefault();
    const w = {};
    if (m.trim() || (w.username = "Username is required."), p || (w.password = "Password is required."), C(w), !(w.username || w.password || !n)) {
      E(!0);
      try {
        await n({
          username: m.trim(),
          password: p,
          rememberMe: b
        }), b ? If(g, m.trim()) : zf(g);
      } finally {
        E(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [Dr.login, h].filter(Boolean).join(" "),
      action: I ? e : void 0,
      method: I ? t : void 0,
      noValidate: !0,
      onSubmit: ($) => {
        M($);
      },
      children: [
        c != null && /* @__PURE__ */ s("div", { className: Dr.title, children: c }),
        /* @__PURE__ */ s(or, { label: f, required: !0, error: S.username, children: ({ inputId: $ }) => /* @__PURE__ */ s(
          ro,
          {
            id: $,
            value: m,
            autoComplete: "username",
            disabled: A,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (w) => {
              y(w.target.value), C((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ s(or, { label: u, required: !0, error: S.password, children: ({ inputId: $ }) => /* @__PURE__ */ s(
          Ef,
          {
            id: $,
            value: p,
            autoComplete: "current-password",
            disabled: A,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (w) => {
              _(w.target.value), C((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        o && /* @__PURE__ */ D("label", { className: Dr.remember, children: [
          /* @__PURE__ */ s(
            nu,
            {
              checked: b,
              disabled: A,
              onChange: ($) => N($.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ s(an, { type: "submit", loading: A, disabled: A, children: x }),
        (d ?? l) && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Dr.link,
            onClick: () => l?.(),
            children: d ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ s(
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
function Ao(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Lf(e) {
  if (Array.isArray(e)) return e;
}
function Rf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, l, i, d, o = [], a = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(a = (r = i.call(n)).done) && (o.push(r.value), o.length !== t); a = !0) ;
    } catch (f) {
      c = !0, l = f;
    } finally {
      try {
        if (!a && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw l;
      }
    }
    return o;
  }
}
function Pf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jf(e, t) {
  return Lf(e) || Rf(e, t) || Bf(e, t) || Pf();
}
function Bf(e, t) {
  if (e) {
    if (typeof e == "string") return Ao(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ao(e, t) : void 0;
  }
}
const Tl = Object.entries, Do = Object.setPrototypeOf, Ff = Object.isFrozen, Hf = Object.getPrototypeOf, Uf = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, yr = Object.create, Cl = typeof Reflect < "u" && Reflect, Us = Cl.apply, qs = Cl.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
Us || (Us = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) l[i - 2] = arguments[i];
  return t.apply(n, l);
});
qs || (qs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const sr = bt(Array.prototype.forEach), qf = bt(Array.prototype.lastIndexOf), Mo = bt(Array.prototype.pop), Mr = bt(Array.prototype.push), Wf = bt(Array.prototype.splice), vr = Array.isArray, qr = bt(String.prototype.toLowerCase), Ds = bt(String.prototype.toString), Io = bt(String.prototype.match), Ir = bt(String.prototype.replace), zo = bt(String.prototype.indexOf), Kf = bt(String.prototype.trim), Gf = bt(Number.prototype.toString), Vf = bt(Boolean.prototype.toString), Lo = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), Ro = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Vt = bt(Object.prototype.hasOwnProperty), zr = bt(Object.prototype.toString), zt = bt(RegExp.prototype.test), Un = Yf(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return Us(e, t, r);
  };
}
function Yf(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return qs(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qr;
  if (Do && Do(e, null), !vr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const i = n(l);
      i !== l && (Ff(t) || (t[r] = i), l = i);
    }
    e[l] = !0;
  }
  return e;
}
function Xf(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = yr(null);
  for (const r of Tl(e)) {
    var n = jf(r, 2);
    const l = n[0], i = n[1];
    Vt(e, l) && (vr(i) ? t[l] = Xf(i) : i && typeof i == "object" && i.constructor === Object ? t[l] = sn(i) : t[l] = i);
  }
  return t;
}
function Zf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Gf(e);
    case "boolean":
      return Vf(e);
    case "bigint":
      return Lo ? Lo(e) : "0";
    case "symbol":
      return Ro ? Ro(e) : "Symbol()";
    case "undefined":
      return zr(e);
    case "function":
    case "object": {
      if (e === null) return zr(e);
      const t = e, n = _n(t, "toString");
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
function _n(e, t) {
  for (; e !== null; ) {
    const r = Uf(e, t);
    if (r) {
      if (r.get) return bt(r.get);
      if (typeof r.value == "function") return bt(r.value);
    }
    e = Hf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Jf(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Po = kt([
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
]), Ms = kt([
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
]), Is = kt([
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
]), Qf = kt([
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
]), zs = kt([
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
]), e_ = kt([
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
]), jo = kt(["#text"]), Bo = kt([
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
]), Ls = kt([
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
]), Fo = kt([
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
]), rs = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), t_ = Ot(/{{[\w\W]*|^[\w\W]*}}/g), n_ = Ot(/<%[\w\W]*|^[\w\W]*%>/g), r_ = Ot(/\${[\w\W]*/g), s_ = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), o_ = Ot(/^aria-[\-\w]+$/), Ho = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), l_ = Ot(/^(?:\w+script|data):/i), a_ = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), i_ = Ot(/^html$/i), c_ = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Uo = Ot(/<[/\w!]/g), qo = Ot(/<[/\w]/g), d_ = Ot(/<\/no(script|embed|frames)/i), u_ = Ot(/\/>/i), tn = {
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
}, Al = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], f_ = kt(qe({}, Al)), __ = (function() {
  const e = {};
  return sr(Al, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), p_ = function() {
  return typeof window > "u" ? null : window;
}, m_ = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let r = null;
  const l = "data-tt-policy-suffix";
  n && n.hasAttribute(l) && (r = n.getAttribute(l));
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
}, Wo = function() {
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
}, qn = function(t, n, r, l) {
  return Vt(t, n) && vr(t[n]) ? qe(l.base ? sn(l.base) : {}, t[n], l.transform) : r;
}, Rs = function(t, n, r) {
  const l = Vt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? sn(l) : r();
};
function Dl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p_();
  const t = (se) => Dl(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, d = e.Node, o = e.Element, a = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = o.prototype, x = _n(u, "cloneNode"), g = _n(u, "remove"), h = _n(u, "removeAttributeNode"), m = _n(u, "nextSibling"), y = _n(u, "childNodes"), p = _n(u, "parentNode"), _ = _n(u, "shadowRoot"), b = _n(u, "attributes"), N = d && d.prototype ? _n(d.prototype, "nodeType") : null, v = d && d.prototype ? _n(d.prototype, "nodeName") : null, E = d && d.prototype ? _n(d.prototype, "ownerDocument") : null, S = function(O) {
    return N ? N(O) : O.nodeType;
  }, C = function(O) {
    return v ? v(O) : O.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let A, I = "", M, $ = !1, w = 0;
  const k = function() {
    if (w > 0) throw Un('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, T = function(O) {
    k(), w++;
    try {
      return A.createHTML(O);
    } finally {
      w--;
    }
  }, R = function(O) {
    k(), w++;
    try {
      return A.createScriptURL(O);
    } finally {
      w--;
    }
  }, z = function() {
    return $ || (M = m_(f, l), $ = !0), M;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let le = Wo();
  t.isSupported = typeof Tl == "function" && typeof p == "function" && F && F.createHTMLDocument !== void 0;
  const _e = t_, K = n_, he = r_, ue = s_, ye = o_, pe = l_, De = a_, G = c_;
  let $e = Ho, ne = null;
  const Ae = qe({}, [
    ...Po,
    ...Ms,
    ...Is,
    ...zs,
    ...jo
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...Bo,
    ...Ls,
    ...Fo,
    ...rs
  ]);
  let Ge = Object.seal(yr(null, {
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
  const lt = Object.seal(yr(null, {
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
  let yt = !0, Z = !0, L = !1, Y = !0, Q = !1, ge = !0, ae = !1, Ee = !1, je = null, Ze = null, Qe = !1, nt = !1, Xt = !1, re = !1, Le = !0, Nt = !1;
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
  let at = null;
  const V = qe({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let me = null;
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
  ], Ds), ke = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ce = qe({}, ke);
  const Ke = kt(["annotation-xml"]);
  let Be = qe({}, Ke);
  const it = qe({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let rt = null;
  const Et = ["application/xhtml+xml", "text/html"], mt = "text/html";
  let ze = null, Tt = null;
  const Zt = n.createElement("form"), pn = function(O) {
    return O instanceof RegExp || O instanceof Function;
  }, Tn = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === O) return;
    (!O || typeof O != "object") && (O = {}), O = sn(O), rt = Et.indexOf(O.PARSER_MEDIA_TYPE) === -1 ? mt : O.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? Ds : qr, ne = qn(O, "ALLOWED_TAGS", Ae, { transform: ze }), fe = qn(O, "ALLOWED_ATTR", Fe, { transform: ze }), de = qn(O, "ALLOWED_NAMESPACES", Ne, { transform: Ds }), me = qn(O, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), at = qn(O, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = qn(O, "FORBID_CONTENTS", $t, { transform: ze }), Je = qn(O, "FORBID_TAGS", sn({}), { transform: ze }), At = qn(O, "FORBID_ATTR", sn({}), { transform: ze }), We = Vt(O, "USE_PROFILES") ? O.USE_PROFILES && typeof O.USE_PROFILES == "object" ? sn(O.USE_PROFILES) : O.USE_PROFILES : !1, yt = O.ALLOW_ARIA_ATTR !== !1, Z = O.ALLOW_DATA_ATTR !== !1, L = O.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = O.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = O.SAFE_FOR_TEMPLATES || !1, ge = O.SAFE_FOR_XML !== !1, ae = O.WHOLE_DOCUMENT || !1, nt = O.RETURN_DOM || !1, Xt = O.RETURN_DOM_FRAGMENT || !1, re = O.RETURN_TRUSTED_TYPE || !1, Qe = O.FORCE_BODY || !1, Le = O.SANITIZE_DOM !== !1, Nt = O.SANITIZE_NAMED_PROPS || !1, xt = O.KEEP_CONTENT !== !1, Ie = O.IN_PLACE || !1, $e = Jf(O.ALLOWED_URI_REGEXP) ? O.ALLOWED_URI_REGEXP : Ho, W = typeof O.NAMESPACE == "string" ? O.NAMESPACE : Xe, Ce = Rs(O, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = Rs(O, "HTML_INTEGRATION_POINTS", () => qe({}, Ke));
    const P = Rs(O, "CUSTOM_ELEMENT_HANDLING", () => yr(null));
    if (Ge = yr(null), Vt(P, "tagNameCheck") && pn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && pn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), We && (ne = qe({}, jo), fe = yr(null), We.html === !0 && (qe(ne, Po), qe(fe, Bo)), We.svg === !0 && (qe(ne, Ms), qe(fe, Ls), qe(fe, rs)), We.svgFilters === !0 && (qe(ne, Is), qe(fe, Ls), qe(fe, rs)), We.mathMl === !0 && (qe(ne, zs), qe(fe, Fo), qe(fe, rs))), lt.tagCheck = null, lt.attributeCheck = null, Vt(O, "ADD_TAGS") && (typeof O.ADD_TAGS == "function" ? lt.tagCheck = O.ADD_TAGS : vr(O.ADD_TAGS) && (ne === Ae && (ne = sn(ne)), qe(ne, O.ADD_TAGS, ze))), Vt(O, "ADD_ATTR") && (typeof O.ADD_ATTR == "function" ? lt.attributeCheck = O.ADD_ATTR : vr(O.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, O.ADD_ATTR, ze))), Vt(O, "ADD_FORBID_CONTENTS") && vr(O.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, O.ADD_FORBID_CONTENTS, ze)), xt && (ne["#text"] = !0), ae && qe(ne, [
      "html",
      "head",
      "body"
    ]), ne.table && (qe(ne, ["tbody"]), delete Je.tbody), O.TRUSTED_TYPES_POLICY) {
      if (typeof O.TRUSTED_TYPES_POLICY.createHTML != "function") throw Un('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof O.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Un('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = A;
      A = O.TRUSTED_TYPES_POLICY;
      try {
        I = T("");
      } catch (ce) {
        throw A = J, ce;
      }
    } else O.TRUSTED_TYPES_POLICY === null ? (A = void 0, I = "") : (A === void 0 && (A = z()), A && typeof I == "string" && (I = T("")));
    kt && kt(O), Tt = O;
  }, Bn = qe({}, [
    ...Ms,
    ...Is,
    ...Qf
  ]), wn = qe({}, [...zs, ...e_]), Yr = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "svg" : P.namespaceURI === Ye ? O === "svg" && (J === "annotation-xml" || Ce[J]) : !!Bn[O];
  }, ks = function(O, P, J) {
    return P.namespaceURI === Xe ? O === "math" : P.namespaceURI === Pt ? O === "math" && Be[J] : !!wn[O];
  }, Ns = function(O, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !wn[O] && (it[O] || !Bn[O]);
  }, Ss = function(O) {
    let P = p(O);
    (!P || !P.tagName) && (P = {
      namespaceURI: W,
      tagName: "template"
    });
    const J = qr(O.tagName), ce = qr(P.tagName);
    return de[O.namespaceURI] ? O.namespaceURI === Pt ? Yr(J, P, ce) : O.namespaceURI === Ye ? ks(J, P, ce) : O.namespaceURI === Xe ? Ns(J, P, ce) : !!(rt === "application/xhtml+xml" && de[O.namespaceURI]) : !1;
  }, mn = function(O) {
    Mr(t.removed, { element: O });
    try {
      p(O).removeChild(O);
    } catch {
      if (g(O), !p(O)) throw Un("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Xr = function(O, P, J) {
    try {
      h(O, P);
    } catch {
      try {
        O.removeAttribute(J);
      } catch {
      }
    }
  }, hn = function(O) {
    H(O);
    const P = y(O);
    if (P) {
      const ce = [];
      sr(P, (Te) => {
        Mr(ce, Te);
      }), sr(ce, (Te) => {
        try {
          g(Te);
        } catch {
        }
      });
    }
    const J = b(O);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Xr(O, Te, Pe);
    }
  }, jt = function(O, P, J) {
    if (!J) try {
      J = P.getAttributeNode(O);
    } catch {
      J = null;
    }
    Mr(t.removed, {
      attribute: J || null,
      from: P
    });
    try {
      J ? h(P, J) : P.removeAttribute(O);
    } catch {
      try {
        P.removeAttribute(O);
      } catch {
      }
    }
    if (O === "is")
      if (nt || Xt) try {
        mn(P);
      } catch {
      }
      else try {
        P.setAttribute(O, "");
      } catch {
      }
  }, kr = function(O) {
    const P = b(O);
    if (P)
      for (let J = P.length - 1; J >= 0; --J) {
        const ce = P[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Xr(O, ce, Te);
      }
  }, H = function(O) {
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop();
      S(J) === tn.element && kr(J);
      const ce = y(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function(O, P) {
    return ge ? O === "patchsrc" ? !0 : O === "for" && P !== "label" && P !== "output" : !1;
  }, be = function(O) {
    if (!ge) return;
    const P = [O];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(qo, J.data)) {
        try {
          g(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = ze(C(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = y(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) P.push(Te[Pe]);
    }
  }, xe = function(O) {
    let P = null, J = null;
    if (Qe) O = "<remove></remove>" + O;
    else {
      const Pe = Io(O, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && W === Xe && (O = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + O + "</body></html>");
    const ce = A ? T(O) : O;
    if (W === Xe) try {
      P = new c().parseFromString(ce, rt);
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
    return O && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), W === Xe ? te.call(P, ae ? "html" : "body")[0] : ae ? P.documentElement : Te;
  }, et = function(O) {
    const P = E ? E(O) : O.ownerDocument;
    return X.call(P || O, O, a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION, null);
  }, Dt = function(O) {
    return O = Ir(O, _e, " "), O = Ir(O, K, " "), O = Ir(O, he, " "), O;
  }, wt = function(O) {
    var P;
    O.normalize();
    const J = E ? E(O) : O.ownerDocument, ce = X.call(J || O, O, a.SHOW_TEXT | a.SHOW_COMMENT | a.SHOW_CDATA_SECTION | a.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (P = O.querySelectorAll) === null || P === void 0 ? void 0 : P.call(O, "template");
    Pe && sr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, gn = function(O) {
    const P = v ? v(O) : null;
    return typeof P != "string" || ze(P) !== "form" ? !1 : typeof O.nodeName != "string" || typeof O.textContent != "string" || typeof O.removeChild != "function" || O.attributes !== b(O) || typeof O.removeAttribute != "function" || typeof O.removeAttributeNode != "function" || typeof O.getAttributeNode != "function" || typeof O.setAttribute != "function" || typeof O.namespaceURI != "string" || typeof O.insertBefore != "function" || typeof O.hasChildNodes != "function" || O.nodeType !== N(O) || O.childNodes !== y(O);
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
  const Os = function(O, P) {
    return !!(ge && O.hasChildNodes() && !gt(O.firstElementChild) && zt(Uo, O.textContent) && zt(Uo, O.innerHTML) || ge && O.namespaceURI === Xe && f_[P] && (gt(O.firstElementChild) || typeof O.textContent == "string" && zt(__[P], O.textContent)) || O.nodeType === tn.processingInstruction || ge && O.nodeType === tn.comment && zt(qo, O.data));
  }, Zr = function(O, P) {
    if (O instanceof RegExp) return zt(O, P);
    if (O instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!O(P, ...ce);
    }
    return !1;
  }, Xl = function(O, P, J) {
    if (!Je[P] && _o(P) && Zr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = p(O), Te = y(O);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ct = O === J ? x(Te[He], !0) : Te[He];
          ce.insertBefore(ct, m(O));
        }
      }
    }
    return mn(O), !0;
  }, co = function(O, P, J, ce) {
    return O.length === 0 ? P : P === J || P === ce ? sn(P) : P;
  }, cr = function(O, P) {
    return O === P || p(O) !== null ? !1 : (Ie && H(O), !0);
  }, uo = function(O, P) {
    if (Jt(le.beforeSanitizeElements, O, null), cr(O, P)) return !0;
    if (gn(O))
      return mn(O), !0;
    const J = ze(C(O));
    if (ne = co(le.uponSanitizeElement, ne, Ae, je), Jt(le.uponSanitizeElement, O, {
      tagName: J,
      allowedTags: ne
    }), cr(O, P)) return !0;
    if (Os(O, J))
      return mn(O), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !ne[J]) {
      const ce = Xl(O, J, P);
      return ce === !1 && (Jt(le.afterSanitizeElements, O, null), cr(O, P)) ? !0 : ce;
    }
    if (S(O) === tn.element && !Ss(O) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(d_, O.innerHTML))
      return mn(O), !0;
    if (Q && O.nodeType === tn.text) {
      const ce = Dt(O.textContent);
      O.textContent !== ce && (Mr(t.removed, { element: O.cloneNode() }), O.textContent = ce);
    }
    return Jt(le.afterSanitizeElements, O, null), cr(O, P);
  }, fo = function(O, P, J) {
    if (At[P] || U(P, O) || Le && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || lt.attributeCheck instanceof Function && lt.attributeCheck(P, O);
    return Z && zt(ue, P) || yt && zt(ye, P) ? !0 : ce ? me[P] || zt($e, Ir(J, De, "")) || (P === "src" || P === "xlink:href" || P === "href") && O !== "script" && zo(J, "data:") === 0 && at[O] || L && !zt(pe, Ir(J, De, "")) ? !0 : !J : _o(O) && Zr(Ge.tagNameCheck, O) && Zr(Ge.attributeNameCheck, P, O) || P === "is" && Ge.allowCustomizedBuiltInElements && Zr(Ge.tagNameCheck, J);
  }, Zl = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), _o = function(O) {
    return !Zl[qr(O)] && zt(G, O);
  }, Jl = function(O, P, J, ce) {
    if (A && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(O, P)) {
      case "TrustedHTML":
        return T(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, Ql = function(O, P, J, ce) {
    try {
      return J ? O.setAttributeNS(J, P, ce) : O.setAttribute(P, ce), gn(O) ? (mn(O), !1) : !0;
    } catch {
      return jt(P, O), !1;
    }
  }, po = function(O, P) {
    if (Jt(le.beforeSanitizeAttributes, O, null), cr(O, P)) return;
    const J = O.attributes;
    if (!J || gn(O)) return;
    fe = co(le.uponSanitizeAttribute, fe, Fe, Ze);
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
      const He = J[Te], ct = He.name, cn = He.namespaceURI, Qt = He.value, dr = ze(ct), Es = Qt;
      let Bt = ct === "value" ? Es : Kf(Es), mo = !1;
      if (ce.attrName = dr, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(le.uponSanitizeAttribute, O, ce), Bt = ce.attrValue, Nt && (dr === "id" || dr === "name") && zo(Bt, Rt) !== 0 && (jt(ct, O, He), Bt = Rt + Bt, mo = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ct, O, He);
        continue;
      }
      if (dr === "attributename" && Io(Bt, "href")) {
        jt(ct, O, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ct, O, He);
          continue;
        }
        if (!Y && zt(u_, Bt)) {
          jt(ct, O, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !fo(Pe, dr, Bt)) {
          jt(ct, O, He);
          continue;
        }
        Bt = Jl(Pe, dr, cn, Bt), Bt !== Es && Ql(O, ct, cn, Bt) && mo && Mo(t.removed);
      }
    }
    Jt(le.afterSanitizeAttributes, O, null), cr(O, P);
  }, Jr = function(O) {
    let P = null;
    const J = et(O);
    for (Jt(le.beforeSanitizeShadowDOM, O, null); P = J.nextNode(); )
      if (Jt(le.uponSanitizeShadowNode, P, null), uo(P, O), po(P, O), Ct(P.content) && Jr(P.content), S(P) === tn.element) {
        const ce = _(P);
        Ct(ce) && ($s(ce), Jr(ce));
      }
    Jt(le.afterSanitizeShadowDOM, O, null);
  }, $s = function(O) {
    const P = [{
      node: O,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        Jr(J.shadow);
        continue;
      }
      const ce = J.node, Te = S(ce) === tn.element, Pe = y(ce);
      if (Pe) for (let He = Pe.length - 1; He >= 0; --He) P.push({
        node: Pe[He],
        shadow: null
      });
      if (Te) {
        const He = v ? v(ce) : null;
        if (typeof He == "string" && ze(He) === "template") {
          const ct = ce.content;
          Ct(ct) && P.push({
            node: ct,
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
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = Zf(se), typeof se != "string"))
      throw Un("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (ne = je, fe = Ze) : Tn(O), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (ne = sn(ne)), le.uponSanitizeAttribute.length > 0 && (fe = sn(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      be(se);
      const cn = C(se);
      if (typeof cn == "string") {
        const Qt = ze(cn);
        if (!ne[Qt] || Je[Qt])
          throw hn(se), Un("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(se))
        throw hn(se), Un("root node is clobbered and cannot be sanitized in-place");
      try {
        $s(se);
      } catch (Qt) {
        throw hn(se), Qt;
      }
    } else if (gt(se))
      P = xe("<!---->"), J = P.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), $s(P);
    else {
      if (!nt && !Q && !ae && se.indexOf("<") === -1) return A && re ? T(se) : se;
      if (P = xe(se), !P) return nt ? null : re ? I : "";
    }
    P && Qe && mn(P.firstChild);
    const He = Pe ? se : P;
    try {
      const cn = et(He);
      for (; ce = cn.nextNode(); )
        uo(ce, He), po(ce, He), Ct(ce.content) && Jr(ce.content);
    } catch (cn) {
      throw Pe && (hn(se), sr(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), cn;
    }
    if (Pe) {
      let cn = !1;
      if (sr(t.removed, (Qt) => {
        Qt.element && (Qt.element === se && (cn = !0), H(Qt.element));
      }), cn) throw Un("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(se), se;
    }
    if (nt) {
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ct = ae ? P.outerHTML : P.innerHTML;
    return ae && ne["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(i_, P.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ct), Q && (ct = Dt(ct)), A && re ? T(ct) : ct;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(se), Ee = !0, je = ne, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, A = M, I = "";
  }, t.isValidAttribute = function(se, O, P) {
    Tt || Tn({});
    const J = ze(se), ce = ze(O);
    return fo(J, ce, P);
  }, t.addHook = function(se, O) {
    typeof O == "function" && Vt(le, se) && Mr(le[se], O);
  }, t.removeHook = function(se, O) {
    if (Vt(le, se)) {
      if (O !== void 0) {
        const P = qf(le[se], O);
        return P === -1 ? void 0 : Wf(le[se], P, 1)[0];
      }
      return Mo(le[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(le, se) && (le[se] = []);
  }, t.removeAllHooks = function() {
    le = Wo();
  }, t;
}
var Ml = Dl();
function Kr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function h_(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ss = "\0";
function os(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (l, i) => (n.push(`<code>${Kr(i)}</code>`), `${ss}${n.length - 1}${ss}`));
  return t || (r = Kr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (l, i, d) => {
      const o = h_(d);
      return o == null ? i : `<a href="${Kr(o)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ss}(\\d+)${ss}`, "g"),
    (l, i) => n[Number(i)] ?? ""
  ), r;
}
function g_(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), l = (a) => r[a] ?? "", i = [];
  let d = 0;
  const o = (a, c) => {
    const f = c ? "ol" : "ul";
    i.push(
      `<${f}>${a.map((u) => `<li>${os(u, n)}</li>`).join("")}</${f}>`
    );
  };
  for (; d < r.length; ) {
    const a = l(d) ?? "";
    if (/^\s*$/.test(a)) {
      d += 1;
      continue;
    }
    const c = /^(#{1,6})\s+(.*)$/.exec(a), f = c?.[1], u = c?.[2];
    if (f !== void 0 && u !== void 0) {
      i.push(
        `<h${f.length}>${os(u.trim(), n)}</h${f.length}>`
      ), d += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(a)) {
      const m = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(a)?.[2] ?? "", y = [];
      for (d += 1; d < r.length; ) {
        const _ = l(d) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(_)) break;
        y.push(_), d += 1;
      }
      d += 1;
      const p = m ? ` class="language-${Kr(m)}"` : "";
      i.push(
        `<pre><code${p}>${Kr(y.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(a)) {
      const m = [];
      for (; d < r.length && /^>\s?(.*)$/.test(l(d)); )
        m.push(/^>\s?(.*)$/.exec(l(d))?.[1] ?? ""), d += 1;
      i.push(
        `<blockquote>${m.map((y) => `<p>${os(y, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(a.trim())) {
      i.push("<hr>"), d += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(a)) {
      const m = [];
      for (; d < r.length; ) {
        const p = /^\s*[-*+]\s+(.*)$/.exec(l(d))?.[1];
        if (p === void 0) break;
        m.push(p), d += 1;
      }
      o(m, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(a)) {
      const m = [];
      for (; d < r.length; ) {
        const p = /^\s*\d+[.)]\s+(.*)$/.exec(l(d))?.[1];
        if (p === void 0) break;
        m.push(p), d += 1;
      }
      o(m, !0);
      continue;
    }
    const h = [];
    for (; d < r.length && !/^\s*$/.test(l(d)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      l(d)
    ); )
      h.push(l(d)), d += 1;
    i.push(`<p>${os(h.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const b_ = "_markdown_1vu4b_3", y_ = "_resize_1vu4b_61", Ko = {
  markdown: b_,
  resize: y_
};
function GS({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: l
}) {
  const i = Oe(
    () => Ml.sanitize(g_(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Ko.markdown, n ? Ko.resize : "", l].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const x_ = "_editor_2a7al_3", v_ = "_toolbar_2a7al_13", w_ = "_tool_2a7al_13", k_ = "_separator_2a7al_56", N_ = "_area_2a7al_63", S_ = "_source_2a7al_73", O_ = "_alignGlyph_2a7al_84", $_ = "_colorInput_2a7al_89", E_ = "_select_2a7al_98", St = {
  editor: x_,
  toolbar: v_,
  tool: w_,
  separator: k_,
  area: N_,
  source: S_,
  alignGlyph: O_,
  colorInput: $_,
  select: E_
}, T_ = [
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
], Go = {
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
}, C_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], A_ = ["1", "2", "3", "4", "5", "6", "7"], D_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Ws(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function M_(e) {
  return Ws("formatBlock", `<${e}>`) || Ws("formatBlock", e);
}
function I_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const VS = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: l,
    toolbar: i = T_,
    imageUpload: d,
    readOnly: o = !1,
    disabled: a = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: u = !0
  }, x) {
    const [g, h] = q(!1), [m, y] = q(n), [p, _] = q(
      null
    ), [b, N] = q(""), [v, E] = q(""), [S, C] = q(2), [A, I] = q(2), [M, $] = q(!1), w = oe(null), k = oe(null), T = oe(n), R = B(
      (G) => u ? Ml.sanitize(G) : G,
      [u]
    );
    ve(() => {
      const G = w.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (T.current = t);
    }, [t]);
    const z = B(
      (G) => {
        T.current = R(G), r?.(T.current);
      },
      [R, r]
    ), j = B(
      (G, $e) => {
        if (o || a) return !1;
        w.current?.focus();
        const ne = Ws(G, $e);
        if (ne) {
          const Ae = w.current;
          Ae && z(Ae.innerHTML);
        }
        return ne;
      },
      [z, o, a]
    ), F = B(
      () => w.current?.innerHTML ?? T.current,
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
    vs(x, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = Go[G];
        !$e || o || a || j($e.command);
      },
      [j, o, a]
    ), le = B(() => {
      o || a || (g ? (h(!1), z(m)) : (y(w.current?.innerHTML ?? ""), h(!0)));
    }, [g, m, z, o, a]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || o || a) return;
        const $e = G.key.toLowerCase(), ne = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        ne && (G.preventDefault(), we(ne));
      },
      [we, o, a]
    ), K = B(() => {
      const G = w.current;
      G && z(G.innerHTML);
    }, [z]), he = B(() => {
      b.trim() && (j("createLink", b.trim()), N(""), _(null));
    }, [b, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), E(""), _(null));
    }, [v, j]), ye = B(
      async (G) => {
        if (d) {
          $(!0);
          try {
            const $e = new FormData();
            $e.append(d.parameterName ?? "file", G);
            const ne = await fetch(d.url, {
              method: "POST",
              headers: d.headers,
              body: $e
            });
            if (!ne.ok)
              throw new Error(`Upload failed: ${ne.status}`);
            const fe = (ne.headers.get("content-type") ?? "").includes("application/json") ? await ne.json() : await ne.text(), Fe = (d.parseUrl ?? I_)(fe);
            j("insertImage", Fe);
          } catch ($e) {
            l?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            $(!1), _(null);
          }
        }
      },
      [d, l, j]
    ), pe = B(() => {
      const G = Math.max(1, Math.min(10, Math.floor(S) || 1)), $e = Math.max(1, Math.min(10, Math.floor(A) || 1)), ne = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: G }, () => `<tr>${ne}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Ae}</tbody></table>`), _(null);
    }, [S, A, j]), De = (G, $e) => {
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && G.onExecute(te);
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
            "aria-pressed": g,
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: le,
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
              disabled: a,
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? D_ : G === "fontName" ? C_ : A_;
        return /* @__PURE__ */ D(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: a,
            defaultValue: "",
            className: St.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || o || a || (G === "formatBlock" ? M_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && (N(""), _("link"));
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && (E(""), _("image"));
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && (C(2), I(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ne = Go[G];
      return ne ? /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: St.tool,
          "aria-label": ne.label,
          disabled: a,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => we(G),
          children: ne.glyph
        },
        G
      ) : null;
    };
    return /* @__PURE__ */ D("div", { className: [St.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ s(
        "div",
        {
          role: "toolbar",
          "aria-label": `${c} toolbar`,
          className: St.toolbar,
          children: i.map((G, $e) => De(G, $e))
        }
      ),
      g ? /* @__PURE__ */ s(
        "textarea",
        {
          className: St.source,
          "aria-label": `${c} source`,
          value: m,
          disabled: a,
          readOnly: o,
          onChange: (G) => {
            y(G.target.value), z(G.target.value);
          }
        }
      ) : /* @__PURE__ */ s(
        "div",
        {
          ref: w,
          className: St.area,
          contentEditable: !o && !a,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": c,
          "aria-multiline": "true",
          "aria-readonly": o || void 0,
          "aria-disabled": a || void 0,
          dangerouslySetInnerHTML: { __html: T.current },
          onInput: K,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ D(
        Sl,
        {
          open: p !== null,
          onClose: () => _(null),
          title: p === "link" ? "Insert link" : p === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ s(an, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            p === "link" && /* @__PURE__ */ s(an, { onClick: he, children: "Insert" }),
            p === "image" && /* @__PURE__ */ s(an, { onClick: ue, disabled: M, children: "Insert" }),
            p === "table" && /* @__PURE__ */ s(an, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            p === "link" && /* @__PURE__ */ s(or, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ s(
              es,
              {
                id: G,
                value: b,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            p === "image" && /* @__PURE__ */ D(pt, { children: [
              /* @__PURE__ */ s(or, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ s(
                es,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => E($e.target.value)
                }
              ) }),
              d && /* @__PURE__ */ s(or, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ s(
                "input",
                {
                  id: G,
                  ref: k,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const ne = $e.target.files?.[0];
                    ne && ye(ne), $e.target.value = "";
                  }
                }
              ) }),
              M && /* @__PURE__ */ s(Ol, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            p === "table" && /* @__PURE__ */ D(pt, { children: [
              /* @__PURE__ */ s(or, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ s(
                es,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => C(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ s(or, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ s(
                es,
                {
                  id: G,
                  type: "number",
                  value: String(A),
                  onChange: ($e) => I(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), z_ = "_popup_ve7kd_4", Il = {
  popup: z_
}, zl = ar(null);
function YS() {
  const e = jn(zl);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Vo(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function L_({ state: e }) {
  const t = oe(null), [n, r] = q(null);
  return ve(() => {
    const l = t.current;
    if (!l) return;
    const i = e.anchor.getBoundingClientRect(), d = l.getBoundingClientRect(), o = Math.max(
      0,
      Math.min(i.left, window.innerWidth - d.width)
    );
    let a = i.bottom + 4;
    a + d.height > window.innerHeight && i.top - 4 - d.height >= 0 && (a = i.top - 4 - d.height), r({ left: o, top: Math.max(0, a) });
  }, [e]), ve(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [Il.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Vo(e.width),
        height: Vo(e.height)
      },
      children: e.content
    }
  );
}
function XS({ children: e }) {
  const [t, n] = q(null), r = oe(0), l = oe(null), i = B(() => {
    l.current?.(), l.current = null;
  }, []), d = B(() => {
    n((c) => c && (c.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), o = B(
    (c) => {
      r.current += 1;
      const f = r.current;
      l.current = c.onClose ?? null, n({
        ...c,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), c.onOpen?.();
      let u = !1;
      return () => {
        u || (u = !0, n((x) => x?.seq !== f ? x : (x.invoker && document.body.contains(x.invoker) && x.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  ve(() => {
    if (!t) return;
    const c = (g) => {
      const h = document.querySelector(`.${Il.popup}`);
      h && !h.contains(g.target) && d();
    }, f = (g) => {
      g.key === "Escape" && (g.preventDefault(), d());
    }, u = () => d(), x = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", x), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", x);
    };
  }, [t, d]);
  const a = Oe(
    () => ({ open: o, close: d, isOpen: t != null }),
    [o, d, t]
  );
  return /* @__PURE__ */ D(zl.Provider, { value: a, children: [
    e,
    t && /* @__PURE__ */ s(L_, { state: t }, t.seq)
  ] });
}
const R_ = "_alert_146r9_1", P_ = "_xs_146r9_28", j_ = "_sm_146r9_38", B_ = "_lg_146r9_48", F_ = "_xl_146r9_58", H_ = "_primary_146r9_69", U_ = "_secondary_146r9_74", q_ = "_light_146r9_79", W_ = "_base_146r9_84", K_ = "_dark_146r9_89", G_ = "_info_146r9_94", V_ = "_success_146r9_99", Y_ = "_warning_146r9_104", X_ = "_danger_146r9_109", Z_ = "_flat_146r9_116", J_ = "_outlined_146r9_123", Q_ = "_filled_146r9_132", ep = "_text_146r9_139", tp = "_icon_146r9_181", np = "_content_146r9_192", rp = "_title_146r9_197", sp = "_body_146r9_203", op = "_dismiss_146r9_209", Nn = {
  alert: R_,
  xs: P_,
  sm: j_,
  lg: B_,
  xl: F_,
  primary: H_,
  secondary: U_,
  light: q_,
  base: W_,
  dark: K_,
  info: G_,
  success: V_,
  warning: Y_,
  danger: X_,
  flat: Z_,
  outlined: J_,
  filled: Q_,
  text: ep,
  icon: tp,
  content: np,
  title: rp,
  body: sp,
  dismiss: op,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, lp = {
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
function ZS({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: i,
  showIcon: d = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: u,
  className: x,
  ...g
}) {
  const [h, m] = q(!1);
  if (f === !1 || f === void 0 && h)
    return null;
  const y = () => {
    f === void 0 && m(!0), c?.(), u?.(!1);
  }, p = e, _ = yl(t, "filled"), b = Gr(n), N = i ?? (d ? /* @__PURE__ */ s(Me, { icon: lp[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...g,
      className: [
        Nn.alert,
        Nn[p],
        Nn[_],
        b ? Nn[b] : null,
        Nn[r],
        x
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ s("span", { className: Nn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ D("div", { className: Nn.content, children: [
          l && /* @__PURE__ */ s("div", { className: Nn.title, children: l }),
          o && /* @__PURE__ */ s("div", { className: Nn.body, children: o })
        ] }),
        a && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Nn.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const ap = "_skeleton_1xyce_1", ip = "_text_1xyce_35", cp = "_circle_1xyce_40", dp = "_rect_1xyce_44", Yo = {
  skeleton: ap,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: ip,
  circle: cp,
  rect: dp
};
function JS({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [Yo.skeleton, Yo[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function gs(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const up = "_row_juebr_1", fp = "_start_juebr_14", _p = "_center_juebr_18", pp = "_end_juebr_22", mp = "_stretch_juebr_26", hp = "_baseline_juebr_30", gp = "_normal_juebr_34", bp = "_noWrap_juebr_90", yp = "_wrapReverse_juebr_94", ls = {
  row: up,
  start: fp,
  center: _p,
  end: pp,
  stretch: mp,
  baseline: hp,
  normal: gp,
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
  noWrap: bp,
  wrapReverse: yp
};
function Xo(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function QS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...o
}) {
  const a = e != null ? gs(e) : null, c = t != null ? gs(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...a ? {
      columnGap: a,
      "--dx-col-gap": a
    } : {},
    ...c ? { rowGap: c } : {},
    ...d
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        ls.row,
        ls[n],
        ls[`justify-${r}`],
        Xo(l) != null ? ls[Xo(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const xp = "_column_sh0ss_1", vp = "_Size1_sh0ss_15", wp = "_Size2_sh0ss_24", kp = "_Size3_sh0ss_33", Np = "_Size4_sh0ss_42", Sp = "_Size5_sh0ss_51", Op = "_Size6_sh0ss_60", $p = "_Size7_sh0ss_69", Ep = "_Size8_sh0ss_78", Tp = "_Size9_sh0ss_87", Cp = "_Size10_sh0ss_96", Ap = "_Size11_sh0ss_105", Dp = "_Size12_sh0ss_114", Mp = "_Offset0_sh0ss_119", Ip = "_Offset1_sh0ss_122", zp = "_Offset2_sh0ss_127", Lp = "_Offset3_sh0ss_132", Rp = "_Offset4_sh0ss_137", Pp = "_Offset5_sh0ss_142", jp = "_Offset6_sh0ss_147", Bp = "_Offset7_sh0ss_152", Fp = "_Offset8_sh0ss_157", Hp = "_Offset9_sh0ss_162", Up = "_Offset10_sh0ss_167", qp = "_Offset11_sh0ss_172", Wp = "_Offset12_sh0ss_177", Kp = "_OrderFirst_sh0ss_182", Gp = "_OrderLast_sh0ss_185", Vp = "_Order0_sh0ss_188", Yp = "_Order1_sh0ss_191", Xp = "_Order2_sh0ss_194", Zp = "_Order3_sh0ss_197", Jp = "_Order4_sh0ss_200", Qp = "_Order5_sh0ss_203", em = "_Order6_sh0ss_206", tm = "_Order7_sh0ss_209", nm = "_Order8_sh0ss_212", rm = "_Order9_sh0ss_215", sm = "_Order10_sh0ss_218", om = "_Order11_sh0ss_221", lm = "_Order12_sh0ss_224", am = "_xsSize1_sh0ss_229", im = "_xsSize2_sh0ss_238", cm = "_xsSize3_sh0ss_247", dm = "_xsSize4_sh0ss_256", um = "_xsSize5_sh0ss_265", fm = "_xsSize6_sh0ss_274", _m = "_xsSize7_sh0ss_283", pm = "_xsSize8_sh0ss_292", mm = "_xsSize9_sh0ss_301", hm = "_xsSize10_sh0ss_310", gm = "_xsSize11_sh0ss_321", bm = "_xsSize12_sh0ss_332", ym = "_xsOffset0_sh0ss_337", xm = "_xsOffset1_sh0ss_340", vm = "_xsOffset2_sh0ss_345", wm = "_xsOffset3_sh0ss_350", km = "_xsOffset4_sh0ss_355", Nm = "_xsOffset5_sh0ss_360", Sm = "_xsOffset6_sh0ss_365", Om = "_xsOffset7_sh0ss_370", $m = "_xsOffset8_sh0ss_375", Em = "_xsOffset9_sh0ss_380", Tm = "_xsOffset10_sh0ss_385", Cm = "_xsOffset11_sh0ss_391", Am = "_xsOffset12_sh0ss_397", Dm = "_xsOrderFirst_sh0ss_403", Mm = "_xsOrderLast_sh0ss_406", Im = "_xsOrder0_sh0ss_409", zm = "_xsOrder1_sh0ss_412", Lm = "_xsOrder2_sh0ss_415", Rm = "_xsOrder3_sh0ss_418", Pm = "_xsOrder4_sh0ss_421", jm = "_xsOrder5_sh0ss_424", Bm = "_xsOrder6_sh0ss_427", Fm = "_xsOrder7_sh0ss_430", Hm = "_xsOrder8_sh0ss_433", Um = "_xsOrder9_sh0ss_436", qm = "_xsOrder10_sh0ss_439", Wm = "_xsOrder11_sh0ss_442", Km = "_xsOrder12_sh0ss_445", Gm = "_smSize1_sh0ss_451", Vm = "_smSize2_sh0ss_460", Ym = "_smSize3_sh0ss_469", Xm = "_smSize4_sh0ss_478", Zm = "_smSize5_sh0ss_487", Jm = "_smSize6_sh0ss_496", Qm = "_smSize7_sh0ss_505", eh = "_smSize8_sh0ss_514", th = "_smSize9_sh0ss_523", nh = "_smSize10_sh0ss_532", rh = "_smSize11_sh0ss_543", sh = "_smSize12_sh0ss_554", oh = "_smOffset0_sh0ss_559", lh = "_smOffset1_sh0ss_562", ah = "_smOffset2_sh0ss_567", ih = "_smOffset3_sh0ss_572", ch = "_smOffset4_sh0ss_577", dh = "_smOffset5_sh0ss_582", uh = "_smOffset6_sh0ss_587", fh = "_smOffset7_sh0ss_592", _h = "_smOffset8_sh0ss_597", ph = "_smOffset9_sh0ss_602", mh = "_smOffset10_sh0ss_607", hh = "_smOffset11_sh0ss_613", gh = "_smOffset12_sh0ss_619", bh = "_smOrderFirst_sh0ss_625", yh = "_smOrderLast_sh0ss_628", xh = "_smOrder0_sh0ss_631", vh = "_smOrder1_sh0ss_634", wh = "_smOrder2_sh0ss_637", kh = "_smOrder3_sh0ss_640", Nh = "_smOrder4_sh0ss_643", Sh = "_smOrder5_sh0ss_646", Oh = "_smOrder6_sh0ss_649", $h = "_smOrder7_sh0ss_652", Eh = "_smOrder8_sh0ss_655", Th = "_smOrder9_sh0ss_658", Ch = "_smOrder10_sh0ss_661", Ah = "_smOrder11_sh0ss_664", Dh = "_smOrder12_sh0ss_667", Mh = "_mdSize1_sh0ss_673", Ih = "_mdSize2_sh0ss_682", zh = "_mdSize3_sh0ss_691", Lh = "_mdSize4_sh0ss_700", Rh = "_mdSize5_sh0ss_709", Ph = "_mdSize6_sh0ss_718", jh = "_mdSize7_sh0ss_727", Bh = "_mdSize8_sh0ss_736", Fh = "_mdSize9_sh0ss_745", Hh = "_mdSize10_sh0ss_754", Uh = "_mdSize11_sh0ss_765", qh = "_mdSize12_sh0ss_776", Wh = "_mdOffset0_sh0ss_781", Kh = "_mdOffset1_sh0ss_784", Gh = "_mdOffset2_sh0ss_789", Vh = "_mdOffset3_sh0ss_794", Yh = "_mdOffset4_sh0ss_799", Xh = "_mdOffset5_sh0ss_804", Zh = "_mdOffset6_sh0ss_809", Jh = "_mdOffset7_sh0ss_814", Qh = "_mdOffset8_sh0ss_819", e1 = "_mdOffset9_sh0ss_824", t1 = "_mdOffset10_sh0ss_829", n1 = "_mdOffset11_sh0ss_835", r1 = "_mdOffset12_sh0ss_841", s1 = "_mdOrderFirst_sh0ss_847", o1 = "_mdOrderLast_sh0ss_850", l1 = "_mdOrder0_sh0ss_853", a1 = "_mdOrder1_sh0ss_856", i1 = "_mdOrder2_sh0ss_859", c1 = "_mdOrder3_sh0ss_862", d1 = "_mdOrder4_sh0ss_865", u1 = "_mdOrder5_sh0ss_868", f1 = "_mdOrder6_sh0ss_871", _1 = "_mdOrder7_sh0ss_874", p1 = "_mdOrder8_sh0ss_877", m1 = "_mdOrder9_sh0ss_880", h1 = "_mdOrder10_sh0ss_883", g1 = "_mdOrder11_sh0ss_886", b1 = "_mdOrder12_sh0ss_889", y1 = "_lgSize1_sh0ss_895", x1 = "_lgSize2_sh0ss_904", v1 = "_lgSize3_sh0ss_913", w1 = "_lgSize4_sh0ss_922", k1 = "_lgSize5_sh0ss_931", N1 = "_lgSize6_sh0ss_940", S1 = "_lgSize7_sh0ss_949", O1 = "_lgSize8_sh0ss_958", $1 = "_lgSize9_sh0ss_967", E1 = "_lgSize10_sh0ss_976", T1 = "_lgSize11_sh0ss_987", C1 = "_lgSize12_sh0ss_998", A1 = "_lgOffset0_sh0ss_1003", D1 = "_lgOffset1_sh0ss_1006", M1 = "_lgOffset2_sh0ss_1011", I1 = "_lgOffset3_sh0ss_1016", z1 = "_lgOffset4_sh0ss_1021", L1 = "_lgOffset5_sh0ss_1026", R1 = "_lgOffset6_sh0ss_1031", P1 = "_lgOffset7_sh0ss_1036", j1 = "_lgOffset8_sh0ss_1041", B1 = "_lgOffset9_sh0ss_1046", F1 = "_lgOffset10_sh0ss_1051", H1 = "_lgOffset11_sh0ss_1057", U1 = "_lgOffset12_sh0ss_1063", q1 = "_lgOrderFirst_sh0ss_1069", W1 = "_lgOrderLast_sh0ss_1072", K1 = "_lgOrder0_sh0ss_1075", G1 = "_lgOrder1_sh0ss_1078", V1 = "_lgOrder2_sh0ss_1081", Y1 = "_lgOrder3_sh0ss_1084", X1 = "_lgOrder4_sh0ss_1087", Z1 = "_lgOrder5_sh0ss_1090", J1 = "_lgOrder6_sh0ss_1093", Q1 = "_lgOrder7_sh0ss_1096", eg = "_lgOrder8_sh0ss_1099", tg = "_lgOrder9_sh0ss_1102", ng = "_lgOrder10_sh0ss_1105", rg = "_lgOrder11_sh0ss_1108", sg = "_lgOrder12_sh0ss_1111", og = "_xlSize1_sh0ss_1117", lg = "_xlSize2_sh0ss_1126", ag = "_xlSize3_sh0ss_1135", ig = "_xlSize4_sh0ss_1144", cg = "_xlSize5_sh0ss_1153", dg = "_xlSize6_sh0ss_1162", ug = "_xlSize7_sh0ss_1171", fg = "_xlSize8_sh0ss_1180", _g = "_xlSize9_sh0ss_1189", pg = "_xlSize10_sh0ss_1198", mg = "_xlSize11_sh0ss_1209", hg = "_xlSize12_sh0ss_1220", gg = "_xlOffset0_sh0ss_1225", bg = "_xlOffset1_sh0ss_1228", yg = "_xlOffset2_sh0ss_1233", xg = "_xlOffset3_sh0ss_1238", vg = "_xlOffset4_sh0ss_1243", wg = "_xlOffset5_sh0ss_1248", kg = "_xlOffset6_sh0ss_1253", Ng = "_xlOffset7_sh0ss_1258", Sg = "_xlOffset8_sh0ss_1263", Og = "_xlOffset9_sh0ss_1268", $g = "_xlOffset10_sh0ss_1273", Eg = "_xlOffset11_sh0ss_1279", Tg = "_xlOffset12_sh0ss_1285", Cg = "_xlOrderFirst_sh0ss_1291", Ag = "_xlOrderLast_sh0ss_1294", Dg = "_xlOrder0_sh0ss_1297", Mg = "_xlOrder1_sh0ss_1300", Ig = "_xlOrder2_sh0ss_1303", zg = "_xlOrder3_sh0ss_1306", Lg = "_xlOrder4_sh0ss_1309", Rg = "_xlOrder5_sh0ss_1312", Pg = "_xlOrder6_sh0ss_1315", jg = "_xlOrder7_sh0ss_1318", Bg = "_xlOrder8_sh0ss_1321", Fg = "_xlOrder9_sh0ss_1324", Hg = "_xlOrder10_sh0ss_1327", Ug = "_xlOrder11_sh0ss_1330", qg = "_xlOrder12_sh0ss_1333", Wg = "_xxSize1_sh0ss_1339", Kg = "_xxSize2_sh0ss_1348", Gg = "_xxSize3_sh0ss_1357", Vg = "_xxSize4_sh0ss_1366", Yg = "_xxSize5_sh0ss_1375", Xg = "_xxSize6_sh0ss_1384", Zg = "_xxSize7_sh0ss_1393", Jg = "_xxSize8_sh0ss_1402", Qg = "_xxSize9_sh0ss_1411", eb = "_xxSize10_sh0ss_1420", tb = "_xxSize11_sh0ss_1431", nb = "_xxSize12_sh0ss_1442", rb = "_xxOffset0_sh0ss_1447", sb = "_xxOffset1_sh0ss_1450", ob = "_xxOffset2_sh0ss_1455", lb = "_xxOffset3_sh0ss_1460", ab = "_xxOffset4_sh0ss_1465", ib = "_xxOffset5_sh0ss_1470", cb = "_xxOffset6_sh0ss_1475", db = "_xxOffset7_sh0ss_1480", ub = "_xxOffset8_sh0ss_1485", fb = "_xxOffset9_sh0ss_1490", _b = "_xxOffset10_sh0ss_1495", pb = "_xxOffset11_sh0ss_1501", mb = "_xxOffset12_sh0ss_1507", hb = "_xxOrderFirst_sh0ss_1513", gb = "_xxOrderLast_sh0ss_1516", bb = "_xxOrder0_sh0ss_1519", yb = "_xxOrder1_sh0ss_1522", xb = "_xxOrder2_sh0ss_1525", vb = "_xxOrder3_sh0ss_1528", wb = "_xxOrder4_sh0ss_1531", kb = "_xxOrder5_sh0ss_1534", Nb = "_xxOrder6_sh0ss_1537", Sb = "_xxOrder7_sh0ss_1540", Ob = "_xxOrder8_sh0ss_1543", $b = "_xxOrder9_sh0ss_1546", Eb = "_xxOrder10_sh0ss_1549", Tb = "_xxOrder11_sh0ss_1552", Cb = "_xxOrder12_sh0ss_1555", as = {
  column: xp,
  Size1: vp,
  Size2: wp,
  Size3: kp,
  Size4: Np,
  Size5: Sp,
  Size6: Op,
  Size7: $p,
  Size8: Ep,
  Size9: Tp,
  Size10: Cp,
  Size11: Ap,
  Size12: Dp,
  Offset0: Mp,
  Offset1: Ip,
  Offset2: zp,
  Offset3: Lp,
  Offset4: Rp,
  Offset5: Pp,
  Offset6: jp,
  Offset7: Bp,
  Offset8: Fp,
  Offset9: Hp,
  Offset10: Up,
  Offset11: qp,
  Offset12: Wp,
  OrderFirst: Kp,
  OrderLast: Gp,
  Order0: Vp,
  Order1: Yp,
  Order2: Xp,
  Order3: Zp,
  Order4: Jp,
  Order5: Qp,
  Order6: em,
  Order7: tm,
  Order8: nm,
  Order9: rm,
  Order10: sm,
  Order11: om,
  Order12: lm,
  xsSize1: am,
  xsSize2: im,
  xsSize3: cm,
  xsSize4: dm,
  xsSize5: um,
  xsSize6: fm,
  xsSize7: _m,
  xsSize8: pm,
  xsSize9: mm,
  xsSize10: hm,
  xsSize11: gm,
  xsSize12: bm,
  xsOffset0: ym,
  xsOffset1: xm,
  xsOffset2: vm,
  xsOffset3: wm,
  xsOffset4: km,
  xsOffset5: Nm,
  xsOffset6: Sm,
  xsOffset7: Om,
  xsOffset8: $m,
  xsOffset9: Em,
  xsOffset10: Tm,
  xsOffset11: Cm,
  xsOffset12: Am,
  xsOrderFirst: Dm,
  xsOrderLast: Mm,
  xsOrder0: Im,
  xsOrder1: zm,
  xsOrder2: Lm,
  xsOrder3: Rm,
  xsOrder4: Pm,
  xsOrder5: jm,
  xsOrder6: Bm,
  xsOrder7: Fm,
  xsOrder8: Hm,
  xsOrder9: Um,
  xsOrder10: qm,
  xsOrder11: Wm,
  xsOrder12: Km,
  smSize1: Gm,
  smSize2: Vm,
  smSize3: Ym,
  smSize4: Xm,
  smSize5: Zm,
  smSize6: Jm,
  smSize7: Qm,
  smSize8: eh,
  smSize9: th,
  smSize10: nh,
  smSize11: rh,
  smSize12: sh,
  smOffset0: oh,
  smOffset1: lh,
  smOffset2: ah,
  smOffset3: ih,
  smOffset4: ch,
  smOffset5: dh,
  smOffset6: uh,
  smOffset7: fh,
  smOffset8: _h,
  smOffset9: ph,
  smOffset10: mh,
  smOffset11: hh,
  smOffset12: gh,
  smOrderFirst: bh,
  smOrderLast: yh,
  smOrder0: xh,
  smOrder1: vh,
  smOrder2: wh,
  smOrder3: kh,
  smOrder4: Nh,
  smOrder5: Sh,
  smOrder6: Oh,
  smOrder7: $h,
  smOrder8: Eh,
  smOrder9: Th,
  smOrder10: Ch,
  smOrder11: Ah,
  smOrder12: Dh,
  mdSize1: Mh,
  mdSize2: Ih,
  mdSize3: zh,
  mdSize4: Lh,
  mdSize5: Rh,
  mdSize6: Ph,
  mdSize7: jh,
  mdSize8: Bh,
  mdSize9: Fh,
  mdSize10: Hh,
  mdSize11: Uh,
  mdSize12: qh,
  mdOffset0: Wh,
  mdOffset1: Kh,
  mdOffset2: Gh,
  mdOffset3: Vh,
  mdOffset4: Yh,
  mdOffset5: Xh,
  mdOffset6: Zh,
  mdOffset7: Jh,
  mdOffset8: Qh,
  mdOffset9: e1,
  mdOffset10: t1,
  mdOffset11: n1,
  mdOffset12: r1,
  mdOrderFirst: s1,
  mdOrderLast: o1,
  mdOrder0: l1,
  mdOrder1: a1,
  mdOrder2: i1,
  mdOrder3: c1,
  mdOrder4: d1,
  mdOrder5: u1,
  mdOrder6: f1,
  mdOrder7: _1,
  mdOrder8: p1,
  mdOrder9: m1,
  mdOrder10: h1,
  mdOrder11: g1,
  mdOrder12: b1,
  lgSize1: y1,
  lgSize2: x1,
  lgSize3: v1,
  lgSize4: w1,
  lgSize5: k1,
  lgSize6: N1,
  lgSize7: S1,
  lgSize8: O1,
  lgSize9: $1,
  lgSize10: E1,
  lgSize11: T1,
  lgSize12: C1,
  lgOffset0: A1,
  lgOffset1: D1,
  lgOffset2: M1,
  lgOffset3: I1,
  lgOffset4: z1,
  lgOffset5: L1,
  lgOffset6: R1,
  lgOffset7: P1,
  lgOffset8: j1,
  lgOffset9: B1,
  lgOffset10: F1,
  lgOffset11: H1,
  lgOffset12: U1,
  lgOrderFirst: q1,
  lgOrderLast: W1,
  lgOrder0: K1,
  lgOrder1: G1,
  lgOrder2: V1,
  lgOrder3: Y1,
  lgOrder4: X1,
  lgOrder5: Z1,
  lgOrder6: J1,
  lgOrder7: Q1,
  lgOrder8: eg,
  lgOrder9: tg,
  lgOrder10: ng,
  lgOrder11: rg,
  lgOrder12: sg,
  xlSize1: og,
  xlSize2: lg,
  xlSize3: ag,
  xlSize4: ig,
  xlSize5: cg,
  xlSize6: dg,
  xlSize7: ug,
  xlSize8: fg,
  xlSize9: _g,
  xlSize10: pg,
  xlSize11: mg,
  xlSize12: hg,
  xlOffset0: gg,
  xlOffset1: bg,
  xlOffset2: yg,
  xlOffset3: xg,
  xlOffset4: vg,
  xlOffset5: wg,
  xlOffset6: kg,
  xlOffset7: Ng,
  xlOffset8: Sg,
  xlOffset9: Og,
  xlOffset10: $g,
  xlOffset11: Eg,
  xlOffset12: Tg,
  xlOrderFirst: Cg,
  xlOrderLast: Ag,
  xlOrder0: Dg,
  xlOrder1: Mg,
  xlOrder2: Ig,
  xlOrder3: zg,
  xlOrder4: Lg,
  xlOrder5: Rg,
  xlOrder6: Pg,
  xlOrder7: jg,
  xlOrder8: Bg,
  xlOrder9: Fg,
  xlOrder10: Hg,
  xlOrder11: Ug,
  xlOrder12: qg,
  xxSize1: Wg,
  xxSize2: Kg,
  xxSize3: Gg,
  xxSize4: Vg,
  xxSize5: Yg,
  xxSize6: Xg,
  xxSize7: Zg,
  xxSize8: Jg,
  xxSize9: Qg,
  xxSize10: eb,
  xxSize11: tb,
  xxSize12: nb,
  xxOffset0: rb,
  xxOffset1: sb,
  xxOffset2: ob,
  xxOffset3: lb,
  xxOffset4: ab,
  xxOffset5: ib,
  xxOffset6: cb,
  xxOffset7: db,
  xxOffset8: ub,
  xxOffset9: fb,
  xxOffset10: _b,
  xxOffset11: pb,
  xxOffset12: mb,
  xxOrderFirst: hb,
  xxOrderLast: gb,
  xxOrder0: bb,
  xxOrder1: yb,
  xxOrder2: xb,
  xxOrder3: vb,
  xxOrder4: wb,
  xxOrder5: kb,
  xxOrder6: Nb,
  xxOrder7: Sb,
  xxOrder8: Ob,
  xxOrder9: $b,
  xxOrder10: Eb,
  xxOrder11: Tb,
  xxOrder12: Cb
}, Ab = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Db(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Mb(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Ib(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function zb(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Ib(n, t), `${e}Order${t}`);
}
function eO({ className: e, style: t, ...n }) {
  const r = [as.column], l = { ...t };
  for (const [M, $, w, k] of Ab) {
    const T = n[$], R = n[w], z = n[k];
    if (T != null) {
      Db($, T);
      const j = as[`${M}Size${T}`];
      j && r.push(j);
    }
    if (R != null) {
      Mb(w, R);
      const j = as[`${M}Offset${R}`];
      j && r.push(j);
    }
    if (z != null) {
      const j = as[zb(M, z, k)];
      j && r.push(j);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: o,
    offsetXs: a,
    sizeSm: c,
    offsetSm: f,
    sizeMd: u,
    offsetMd: x,
    sizeLg: g,
    offsetLg: h,
    sizeXl: m,
    offsetXl: y,
    sizeXx: p,
    offsetXx: _,
    order: b,
    orderXs: N,
    orderSm: v,
    orderMd: E,
    orderLg: S,
    orderXl: C,
    orderXx: A,
    ...I
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...I
    }
  );
}
const Lb = "_stack_bmbbp_1", Lr = {
  stack: Lb,
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
function Zo(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function tO({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: l,
  justify: i,
  className: d,
  style: o,
  ...a
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: gs(r) } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Lr.stack,
        Lr[`dir-${c}`],
        Zo(n) !== "wrap" ? Lr[`wrap-${Zo(n)}`] : null,
        l != null ? Lr[`align-${l}`] : null,
        i != null ? Lr[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const Rb = "_autogrid_16x9f_1", Pb = {
  autogrid: Rb
};
function nO({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: l = !0,
  ...i
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: gs(t) } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Pb.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
    }
  );
}
const jb = "_layout_fxvw1_1", Bb = "_row_fxvw1_7", Fb = "_grid_fxvw1_21", Hb = "_gridRight_fxvw1_27", Ub = "_gridHeader_fxvw1_31", qb = "_gridFooter_fxvw1_36", Wb = "_gridContents_fxvw1_41", Kb = "_gridBody_fxvw1_45", An = {
  layout: jb,
  row: Bb,
  grid: Fb,
  gridRight: Hb,
  gridHeader: Ub,
  gridFooter: qb,
  gridContents: Wb,
  gridBody: Kb
}, Gb = "_footer_3be5w_1", Vb = "_sticky_3be5w_9", Jo = {
  footer: Gb,
  sticky: Vb
};
function Yb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [Jo.footer, e ? Jo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Xb = "_header_1tw8b_1", Zb = "_sticky_1tw8b_9", Qo = {
  header: Xb,
  sticky: Zb
};
function Jb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [Qo.header, e ? Qo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Qb = "_sidebar_175d5_1", ey = "_sticky_175d5_23", ty = "_left_175d5_41", ny = "_right_175d5_45", ry = "_start_175d5_50", sy = "_end_175d5_54", oy = "_fullHeight_175d5_60", ly = "_collapsed_175d5_64", ay = "_responsive_175d5_72", iy = "_overlay_175d5_80", cy = "_mask_175d5_108", Wn = {
  sidebar: Qb,
  sticky: ey,
  left: ty,
  right: ny,
  start: ry,
  end: sy,
  fullHeight: oy,
  collapsed: ly,
  responsive: ay,
  overlay: iy,
  mask: cy
};
function dy({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: i = !1,
  onClose: d,
  className: o,
  children: a,
  ...c
}) {
  return ve(() => {
    if (!r || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ D(pt, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${Wn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ s(
      "aside",
      {
        className: [
          Wn.sidebar,
          Wn[e],
          t ? null : Wn.collapsed,
          n ? Wn.responsive : null,
          r ? [Wn.overlay, "se-sidebar--overlay"] : null,
          l ? Wn.fullHeight : null,
          i && !r && !l ? Wn.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: a
      }
    )
  ] });
}
function rO(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(pt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], o = [], a = [], c = [];
  Vr.forEach(n, (x) => {
    if (!qt(x)) {
      d.push(x);
      return;
    }
    if (x.type === Jb)
      l.push(x);
    else if (x.type === Yb)
      i.push(x);
    else if (x.type === dy) {
      const g = x, h = g.props.position;
      c.push(g), (h === "right" || h === "end" ? a : o).push(g);
    } else
      d.push(x);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const x = u ? a : o;
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
          l.length > 0 && /* @__PURE__ */ s("div", { className: An.gridHeader, children: l }),
          /* @__PURE__ */ D("div", { className: An.gridContents, children: [
            x,
            /* @__PURE__ */ s("div", { className: An.gridBody, children: d })
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
        l,
        /* @__PURE__ */ D("div", { className: An.row, children: [
          o,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const uy = "_body_1ge00_4", fy = "_bare_1ge00_12", el = {
  body: uy,
  bare: fy
};
function sO({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [el.body, t ? null : el.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const _y = "_toggle_lxnk5_1", py = {
  toggle: _y
};
function oO({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [py.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ s(Me, { icon: e, size: 20 })
    }
  );
}
const my = "_track_14127_1", hy = "_bar_14127_31", gy = "_primary_14127_39", by = "_success_14127_43", yy = "_warning_14127_47", xy = "_danger_14127_51", vy = "_indeterminate_14127_149", wy = "_circular_14127_163", ky = "_fill_14127_203", nn = {
  track: my,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: hy,
  primary: gy,
  success: by,
  warning: yy,
  danger: xy,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: vy,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: wy,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: ky,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function lO({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: i = "linear",
  size: d = "md",
  className: o,
  visible: a = !0,
  ...c
}) {
  if (a === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const g = typeof d == "string", h = 2, m = 10.5, y = 2 * Math.PI * m, p = y * (l ? 0.75 : 1), _ = l ? 0 : y * (1 - u / 100), b = Gr(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: g ? void 0 : d,
        height: g ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          nn.circular,
          nn[n],
          b ? nn[b] : null,
          g ? nn[`circular-${d}`] : null,
          l ? nn.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: h
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: h,
              strokeDasharray: `${p} ${y}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const x = Gr(r);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        nn.track,
        nn[n],
        x ? nn[x] : null,
        typeof d == "string" ? nn[`linear-${d}`] : null,
        l ? nn.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: nn.bar,
          style: l ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Ny = "_wrapper_tk30z_1", Sy = {
  wrapper: Ny
}, Oy = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Ll = "dx-palette", $y = "data-palette";
function Ey(e, t) {
  const n = e === void 0 ? Ll : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function Ty(e, t) {
  const n = e === void 0 ? Ll : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function aO({
  themes: e = Oy,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = $y,
  onChange: i,
  label: d = "Theme",
  placeholder: o = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, x] = q(void 0), g = t !== void 0, h = t ?? u ?? Ey(r, e) ?? n, m = h ?? "", y = oe(void 0);
  ve(() => {
    if (g) return;
    const _ = document.documentElement;
    if (h === void 0) {
      y.current !== void 0 && _.getAttribute(l) === y.current && (_.removeAttribute(l), y.current = void 0);
      return;
    }
    _.setAttribute(l, h), y.current = h;
  }, [h, l, g]);
  const p = (_) => {
    const b = _.target.value;
    g || (x(b), Ty(r, b)), i?.(b);
  };
  return /* @__PURE__ */ D("label", { className: [Sy.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ D(lr, { id: a, size: c, value: m, onChange: p, children: [
      h === void 0 && /* @__PURE__ */ s("option", { value: "", disabled: !0, children: o }),
      h !== void 0 && !e.includes(h) && /* @__PURE__ */ s("option", { value: h, children: h }),
      e.map((_) => /* @__PURE__ */ s("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function Cy(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function oo(e) {
  const [t, n] = q(() => Cy(e));
  return ve(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const Ay = "_pressed_12x15_8", Dy = {
  pressed: Ay
}, My = st(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: l,
    toggleSeverity: i = "primary",
    toggleShade: d = "darker",
    toggleContent: o,
    size: a = "md",
    className: c,
    onClick: f,
    children: u,
    variant: x,
    severity: g,
    shade: h,
    ...m
  }, y) {
    const [p, _] = q(n), b = t ?? p, N = (v) => {
      const E = !b;
      t === void 0 && _(E), r?.(E), f?.(v);
    };
    return /* @__PURE__ */ s(
      an,
      {
        ...m,
        ref: y,
        variant: b && l ? l : x,
        severity: b ? i : g,
        shade: b ? d : h,
        size: a,
        "aria-pressed": b,
        className: [b ? Dy.pressed : null, c].filter(Boolean).join(" "),
        onClick: N,
        children: b && o !== void 0 ? o : u
      }
    );
  }
), Rl = "dx-theme";
function Iy(e) {
  const t = e === void 0 ? Rl : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function zy(e, t) {
  const n = e === void 0 ? Rl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function iO({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: o
}) {
  const a = oo("(prefers-color-scheme: dark)"), [c, f] = q(void 0), u = e !== void 0, x = e ?? c ?? Iy(n) ?? t ?? "system", g = x === "system" ? a ? "dark" : "light" : x;
  return ve(() => {
    if (!u) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, u]), /* @__PURE__ */ s(
    My,
    {
      id: i,
      size: o,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: g === "dark",
      onChange: (m) => {
        const y = m ? "dark" : "light";
        u || (f(y), zy(n, y)), r?.(y);
      },
      toggleContent: /* @__PURE__ */ s(Me, { icon: "light_mode", size: o ?? "md" }),
      children: /* @__PURE__ */ s(Me, { icon: "dark_mode", size: o ?? "md" })
    }
  );
}
const Pl = "dx-palette", jl = "dx-theme", Ks = "data-palette", Gs = "data-theme", Vs = /* @__PURE__ */ new Set();
function Ly() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Ks), t = document.documentElement.getAttribute(Gs);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function lo(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Ks) : document.documentElement.setAttribute(Ks, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Gs) : document.documentElement.setAttribute(Gs, e.appearance));
}
function Bl(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function tl(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let nl = !1;
function wr() {
  const e = Ly();
  if (!nl) {
    nl = !0;
    const t = tl(Pl), n = tl(jl), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && lo(l), l;
  }
  return e;
}
function Fl() {
  const e = wr();
  Vs.forEach((t) => t({ ...e }));
}
function rl(e) {
  return Vs.add(e), () => {
    Vs.delete(e);
  };
}
function cO() {
  return wr().theme;
}
function Ry(e) {
  const t = wr();
  t.theme !== e && (t.theme = e, lo(t), Bl(Pl, e), Fl());
}
function dO() {
  return wr().appearance;
}
function Py(e) {
  const t = wr();
  t.appearance !== e && (t.appearance = e, lo(t), Bl(jl, e), Fl());
}
function uO() {
  const [, e] = q(0);
  ve(() => rl(() => e((n) => n + 1)), []);
  const t = wr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: Ry,
    setAppearance: Py,
    subscribe: rl
  };
}
function jy(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, y) => Math.floor(Math.abs(Math.sin(y + 1)) * 4294967296)
  ), a = (m, y) => m + y | 0, c = (m, y) => m << y | m >>> 32 - y;
  let f = 1732584193, u = 4023233417, x = 2562383102, g = 271733878;
  for (let m = 0; m < r; m += 64) {
    const y = [];
    for (let v = 0; v < 16; v += 1)
      y.push(i.getUint32(m + v * 4, !0));
    let p = f, _ = u, b = x, N = g;
    for (let v = 0; v < 64; v += 1) {
      let E, S;
      v < 16 ? (E = _ & b | ~_ & N, S = v) : v < 32 ? (E = N & _ | ~N & b, S = (5 * v + 1) % 16) : v < 48 ? (E = _ ^ b ^ N, S = (3 * v + 5) % 16) : (E = b ^ (_ | ~N), S = 7 * v % 16), E = a(a(a(E, p), o[v]), y[S]), p = N, N = b, b = _, _ = a(_, c(E, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = a(f, p), u = a(u, _), x = a(x, b), g = a(g, N);
  }
  const h = (m) => {
    let y = "";
    for (let p = 0; p < 4; p += 1)
      y += `0${(m >>> p * 8 & 255).toString(16)}`.slice(-2);
    return y;
  };
  return h(f) + h(u) + h(x) + h(g);
}
const By = "_avatar_1mhfr_1", Fy = "_xs_1mhfr_12", Hy = "_sm_1mhfr_18", Uy = "_md_1mhfr_24", qy = "_lg_1mhfr_30", Wy = "_xl_1mhfr_36", Ky = "_initials_1mhfr_42", Gy = "_image_1mhfr_57", Vy = "_status_1mhfr_64", Yy = "_online_1mhfr_84", Xy = "_offline_1mhfr_88", Zy = "_away_1mhfr_92", fr = {
  avatar: By,
  xs: Fy,
  sm: Hy,
  md: Uy,
  lg: qy,
  xl: Wy,
  initials: Ky,
  image: Gy,
  status: Vy,
  online: Yy,
  offline: Xy,
  away: Zy
}, Jy = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, ps = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Qy(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function e0(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ps[t % ps.length] ?? ps[0];
}
function fO({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: i,
  size: d = "md",
  status: o,
  className: a
}) {
  const c = Oe(() => e ? Qy(e) : "?", [e]), f = Oe(() => e ? e0(e) : ps[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${jy(N)}?d=${r}&s=${Jy[d]}&r=${l}`;
  }, [t, n, r, l, d]), x = t ?? u, [g, h] = q(null), m = x != null && g !== x, y = m && i === "", p = i ?? e ?? "avatar", _ = o ? `${p}, ${o}` : p, b = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: fr.image,
        src: x,
        alt: y ? "" : o ? _ : p,
        onError: () => h(x ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: fr.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ D(
    "span",
    {
      className: [
        fr.avatar,
        fr[d],
        o ? fr[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : _,
      children: [
        b,
        o && /* @__PURE__ */ s("span", { className: fr.status, "aria-hidden": "true" })
      ]
    }
  );
}
const t0 = "_root_zzwfz_1", n0 = "_left_zzwfz_6", r0 = "_right_zzwfz_7", s0 = "_panel_zzwfz_12", o0 = "_bottom_zzwfz_20", l0 = "_tabList_zzwfz_24", a0 = "_underline_zzwfz_53", i0 = "_pills_zzwfz_72", c0 = "_tab_zzwfz_24", d0 = "_active_zzwfz_113", u0 = "_disabled_zzwfz_139", Dn = {
  root: t0,
  left: n0,
  right: r0,
  panel: s0,
  bottom: o0,
  tabList: l0,
  underline: a0,
  pills: i0,
  tab: c0,
  active: d0,
  disabled: u0
};
function _O({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const o = ot(), a = oe(null), [c, f] = q(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, x = i === "left" || i === "right", g = (y) => {
    f(y), r?.(y);
  }, h = (y) => {
    const p = e.filter((N) => !N.disabled), _ = p.findIndex((N) => N.key === u);
    let b = -1;
    y.key === "ArrowRight" || x && y.key === "ArrowDown" ? b = (_ + 1) % p.length : y.key === "ArrowLeft" || x && y.key === "ArrowUp" ? b = (_ - 1 + p.length) % p.length : y.key === "Home" ? b = 0 : y.key === "End" && (b = p.length - 1), b >= 0 && (y.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[b]?.key ?? "")}"]`
    )?.focus(), g(p[b]?.key ?? ""));
  }, m = e.find((y) => y.key === u);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Dn.root, Dn[i], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Dn.tabList, Dn[l], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: h,
            children: e.map((y) => {
              const p = y.key === u;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": p,
                  "aria-controls": `${o}-panel-${y.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    Dn.tab,
                    p ? Dn.active : null,
                    y.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => g(y.key),
                  children: y.label
                },
                y.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${m.key}`,
            "aria-labelledby": `${o}-tab-${m.key}`,
            className: Dn.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const f0 = "_root_1l1j2_1", _0 = "_item_1l1j2_9", p0 = "_heading_1l1j2_13", m0 = "_trigger_1l1j2_17", h0 = "_disabled_1l1j2_34", g0 = "_title_1l1j2_48", b0 = "_chevron_1l1j2_52", y0 = "_open_1l1j2_59", x0 = "_content_1l1j2_63", Mn = {
  root: f0,
  item: _0,
  heading: p0,
  trigger: m0,
  disabled: h0,
  title: g0,
  chevron: b0,
  open: y0,
  content: x0
};
function pO({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: i
}) {
  const d = ot(), [o, a] = q(
    r ?? []
  ), c = n ?? o, f = (u) => {
    const x = c.includes(u) ? c.filter((g) => g !== u) : t ? [...c, u] : [u];
    a(x), l?.(x);
  };
  return /* @__PURE__ */ s("div", { className: [Mn.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const x = c.includes(u.key), g = `${d}-panel-${u.key}`, h = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ D("div", { className: Mn.item, children: [
      /* @__PURE__ */ s("h3", { className: Mn.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: h,
          "aria-expanded": x,
          "aria-controls": g,
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
                className: [Mn.chevron, x ? Mn.open : null].filter(Boolean).join(" "),
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
          id: g,
          role: "region",
          "aria-labelledby": h,
          hidden: !x,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const v0 = "_textarea_l7fsl_1", w0 = "_invalid_l7fsl_27", k0 = "_xs_l7fsl_34", N0 = "_sm_l7fsl_39", S0 = "_md_l7fsl_44", O0 = "_lg_l7fsl_49", $0 = "_xl_l7fsl_54", is = {
  textarea: v0,
  invalid: w0,
  xs: k0,
  sm: N0,
  md: S0,
  lg: O0,
  xl: $0,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, mO = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          is.textarea,
          is[t],
          is[`resize-${n}`],
          r ? is.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), E0 = "_root_xyp2i_1", T0 = "_trigger_xyp2i_9", C0 = "_invalid_xyp2i_40", A0 = "_placeholder_xyp2i_47", D0 = "_label_xyp2i_54", M0 = "_chevron_xyp2i_60", I0 = "_chevronOpen_xyp2i_70", z0 = "_menu_xyp2i_74", L0 = "_option_xyp2i_89", R0 = "_disabled_xyp2i_100", P0 = "_active_xyp2i_104", j0 = "_selected_xyp2i_105", B0 = "_header_xyp2i_115", F0 = "_xs_xyp2i_122", H0 = "_sm_xyp2i_128", U0 = "_md_xyp2i_134", q0 = "_lg_xyp2i_140", W0 = "_xl_xyp2i_146", Ht = {
  root: E0,
  trigger: T0,
  invalid: C0,
  placeholder: A0,
  label: D0,
  chevron: M0,
  chevronOpen: I0,
  menu: z0,
  option: L0,
  disabled: R0,
  active: P0,
  selected: j0,
  header: B0,
  xs: F0,
  sm: H0,
  md: U0,
  lg: q0,
  xl: W0
}, K0 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function hO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: a,
  ...c
}) {
  const f = ot(), u = `${f}-listbox`, x = oe(null), g = oe(null), [h, m] = q(
    n
  ), [y, p] = q(!1), _ = t ?? h, b = e.map(
    (w, k) => w.label === "" || w.disabled ? -1 : k
  ).filter((w) => w >= 0), N = e.findIndex(
    (w) => w.value === _
  ), [v, E] = q(
    () => b.includes(0) ? 0 : b[0] ?? -1
  ), S = B(() => {
    if (o) return;
    const w = N >= 0 && b.includes(N) ? N : b[0];
    E(w ?? -1), p(!0);
  }, [o, N, b]), C = B(() => {
    p(!1), g.current?.focus();
  }, []);
  ve(() => {
    if (!y) return;
    const w = (k) => {
      x.current && !x.current.contains(k.target) && p(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [y]);
  const A = (w) => {
    m(w), r?.(w), p(!1), g.current?.focus();
  }, I = (w) => {
    if (b.length === 0) return;
    const k = b.includes(v) ? b.indexOf(v) : 0, T = b[(k + w + b.length) % b.length];
    T != null && E(T);
  }, M = (w) => {
    if (!y) {
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
        w.preventDefault(), b[0] != null && E(b[0]);
        break;
      case "End":
        w.preventDefault(), b[b.length - 1] != null && E(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        w.preventDefault(), v >= 0 && e[v] && b.includes(v) && A(e[v]?.value ?? "");
        break;
      case "Escape":
        w.preventDefault(), C();
        break;
      case "Tab":
        p(!1);
        break;
    }
  }, $ = e.find(
    (w) => w.value === _
  );
  return /* @__PURE__ */ D(
    "div",
    {
      ref: x,
      className: [Ht.root, a].filter(Boolean).join(" "),
      onKeyDown: M,
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: g,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              Ht.trigger,
              Ht[i],
              y ? Ht.open : null,
              d ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? p(!1) : S(),
            ...c,
            children: [
              /* @__PURE__ */ s("span", { className: $ ? Ht.label : Ht.placeholder, children: $ ? $.label : l }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [Ht.chevron, y ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: K0 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        y && /* @__PURE__ */ s(
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
                    w.disabled || A(w.value);
                  },
                  onMouseEnter: () => {
                    !w.disabled && w.label !== "" && E(k);
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
const G0 = "_root_1ma8a_1", V0 = "_wrap_1ma8a_9", Y0 = "_input_1ma8a_26", X0 = "_invalid_1ma8a_31", Z0 = "_clear_1ma8a_58", J0 = "_menu_1ma8a_83", Q0 = "_option_1ma8a_98", ex = "_disabled_1ma8a_109", tx = "_active_1ma8a_113", nx = "_empty_1ma8a_123", rx = "_xs_1ma8a_129", sx = "_sm_1ma8a_136", ox = "_md_1ma8a_143", lx = "_lg_1ma8a_150", ax = "_xl_1ma8a_157", dn = {
  root: G0,
  wrap: V0,
  input: Y0,
  invalid: X0,
  clear: Z0,
  menu: J0,
  option: Q0,
  disabled: ex,
  active: tx,
  empty: nx,
  xs: rx,
  sm: sx,
  md: ox,
  lg: lx,
  xl: ax
}, ix = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function gO({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: c = ix,
  className: f,
  ...u
}) {
  const x = ot(), g = `${x}-listbox`, h = oe(null), m = oe(null), [y, p] = q(n), [_, b] = q(!1), N = t ?? y, v = Oe(
    () => N.trim() === "" ? [...e] : e.filter((z) => c(z, N)),
    [e, N, c]
  ), E = v.map((z, j) => z.disabled ? -1 : j).filter((z) => z >= 0), [S, C] = q(-1), A = (z) => {
    p(z), r?.(z);
  }, I = (z) => {
    A(z.label), l?.(z.value, z), b(!1);
  }, M = (z) => {
    if (E.length === 0) return;
    const j = E.includes(S) ? E.indexOf(S) : z === 1 ? -1 : 0, F = E[(j + z + E.length) % E.length];
    F != null && C(F);
  }, $ = (z) => {
    a || (A(z.target.value), b(!0), C(-1));
  }, w = () => {
    a || N !== "" && b(!0);
  }, k = (z) => {
    h.current && !h.current.contains(z.relatedTarget) && b(!1);
  }, T = (z) => {
    if (!a)
      switch (z.key) {
        case "ArrowDown":
          z.preventDefault(), _ ? M(1) : (b(!0), C(E[0] ?? -1));
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
    A(""), C(-1), b(!0), m.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: h,
      className: [dn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: [dn.wrap, dn[d], o ? dn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": g,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && S >= 0 ? `${x}-option-${S}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: N,
                  placeholder: i,
                  className: dn.input,
                  onChange: $,
                  onFocus: w,
                  onBlur: k,
                  onKeyDown: T,
                  ...u
                }
              ),
              N !== "" && !a && /* @__PURE__ */ s(
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
          /* @__PURE__ */ s("div", { id: g, className: dn.menu, children: /* @__PURE__ */ s("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ s("div", { id: g, role: "listbox", className: dn.menu, children: v.map((z, j) => /* @__PURE__ */ s(
          "div",
          {
            id: `${x}-option-${j}`,
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
              z.disabled || C(j);
            },
            children: z.label
          },
          z.value
        )) }))
      ]
    }
  );
}
const cx = "_box_muvqe_1", dx = "_option_muvqe_12", ux = "_disabled_muvqe_23", fx = "_selected_muvqe_27", _x = "_active_muvqe_33", Rr = {
  box: cx,
  option: dx,
  disabled: ux,
  selected: fx,
  active: _x
};
function bO({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: i,
  style: d,
  ...o
}) {
  const a = ot(), [c, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], x = e.findIndex((v) => !v.disabled), [g, h] = q(
    () => x >= 0 ? x : 0
  ), m = oe(""), y = oe(null), p = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, E) => v.disabled ? -1 : E).filter((v) => v >= 0), b = (v) => {
    const E = e[v];
    if (!(!E || E.disabled))
      if (h(v), r) {
        const S = u.includes(E.value) ? u.filter((C) => C !== E.value) : [...u, E.value];
        p(S);
      } else
        p([E.value]);
  }, N = (v) => {
    if (_.length === 0) return;
    const E = _.includes(g) ? g : _[0];
    let S = -1;
    if (v.key === "ArrowDown")
      S = _[(_.indexOf(E) + 1) % _.length];
    else if (v.key === "ArrowUp")
      S = _[(_.indexOf(E) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      S = _[0];
    else if (v.key === "End")
      S = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), b(E);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const C = (m.current + v.key).toLowerCase();
      m.current = C, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [..._, ..._], I = _.indexOf(E) + 1, M = A.slice(I).find(($) => e[$]?.label.toLowerCase().startsWith(C));
      M != null && h(M);
      return;
    }
    S >= 0 && (v.preventDefault(), h(S), r || p([e[S]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[g] ? `${a}-option-${g}` : void 0,
      style: d,
      className: [Rr.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...o,
      children: e.map((v, E) => {
        const S = u.includes(v.value), C = E === g;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${a}-option-${E}`,
            role: "option",
            "aria-selected": S,
            "aria-disabled": v.disabled || void 0,
            className: [
              Rr.option,
              S ? Rr.selected : null,
              C ? Rr.active : null,
              v.disabled ? Rr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b(E),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const px = "_group_oinj7_1", mx = "_legend_oinj7_8", hx = "_list_oinj7_16", gx = "_item_oinj7_25", bx = "_disabled_oinj7_32", yx = "_label_oinj7_37", xx = "_checkbox_oinj7_48", Jn = {
  group: px,
  legend: mx,
  list: hx,
  item: gx,
  disabled: bx,
  label: yx,
  checkbox: xx
};
function yO({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [o, a] = q(() => [
    ...n
  ]), c = t ?? o, f = (u, x) => {
    const g = x ? [...c, u] : c.filter((h) => h !== u);
    a(g), r?.(g);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Jn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: Jn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: Jn.list, children: e.map((u) => {
      const x = c.includes(u.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Jn.item, u.disabled ? Jn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Jn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: Jn.checkbox,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (g) => f(u.value, g.target.checked)
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
const vx = "_group_46668_1", wx = "_legend_46668_8", kx = "_list_46668_16", Nx = "_item_46668_25", Sx = "_disabled_46668_32", Ox = "_label_46668_37", $x = "_radio_46668_48", Qn = {
  group: vx,
  legend: wx,
  list: kx,
  item: Nx,
  disabled: Sx,
  label: Ox,
  radio: $x
};
function xO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [o, a] = q(
    n
  ), c = t ?? o, f = (u) => {
    a(u), r?.(u);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Qn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: Qn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: Qn.list, children: e.map((u) => {
      const x = u.value === c;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Qn.item, u.disabled ? Qn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Qn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: Qn.radio,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (g) => f(g.target.value)
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
const Ex = "_bar_9zyxn_1", Tx = "_vertical_9zyxn_12", Cx = "_option_9zyxn_17", Ax = "_selected_9zyxn_40", Dx = "_sm_9zyxn_56", Mx = "_md_9zyxn_62", Ix = "_lg_9zyxn_68", _r = {
  bar: Ex,
  vertical: Tx,
  option: Cx,
  selected: Ax,
  sm: Dx,
  md: Mx,
  lg: Ix
};
function sl(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function vO(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: i = "horizontal",
    onChange: d,
    size: o = "md",
    className: a,
    ...c
  } = e, f = l ?? !1, [u, x] = q(r ?? (f ? [] : t[0]?.value)), g = n ?? u, h = l === !0 || l === void 0 && Array.isArray(g), m = (p) => {
    if (!h) {
      x(p), d?.(p);
      return;
    }
    const _ = sl(g), b = _.includes(p) ? _.filter((N) => N !== p) : [..._, p];
    x(b), d?.(b);
  }, y = (p) => h ? sl(g).includes(p) : g === p;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        _r.bar,
        _r[o],
        i === "vertical" ? _r.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((p) => {
        const _ = y(p.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: p.disabled,
            className: [
              _r.option,
              _ ? _r.selected : null,
              p.disabled ? _r.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(p.value),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const zx = "_root_11hdr_1", Lx = "_action_11hdr_10", Rx = "_caret_11hdr_15", Px = "_sm_11hdr_49", jx = "_md_11hdr_53", Bx = "_lg_11hdr_57", Fx = "_fullWidth_11hdr_62", Hx = "_menu_11hdr_70", Ux = "_item_11hdr_83", qx = "_itemIcon_11hdr_105", Wx = "_disabled_11hdr_110", Kx = "_active_11hdr_114", Gx = "_danger_11hdr_123", yn = {
  root: zx,
  action: Lx,
  caret: Rx,
  sm: Px,
  md: jx,
  lg: Bx,
  fullWidth: Fx,
  menu: Hx,
  item: Ux,
  itemIcon: qx,
  disabled: Wx,
  active: Kx,
  danger: Gx
}, wO = st(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: l = "primary",
    variant: i = "filled",
    shade: d = "default",
    size: o = "md",
    loading: a = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: x,
    "aria-label": g,
    openAriaLabel: h = "More actions",
    ...m
  }, y) {
    const _ = `${ot()}-menu`, b = oe(null), N = oe(null), v = oe([]), [E, S] = q(!1), [C, A] = q(-1), I = u || a, M = Oe(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), $ = B(() => {
      I || (A(M[0] ?? -1), S(!0));
    }, [I, M]), w = B(() => {
      S(!1), N.current?.focus();
    }, []);
    ve(() => {
      if (!E) return;
      const F = (X) => {
        b.current && !b.current.contains(X.target) && S(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [E]), ve(() => {
      E && (I || !c) && S(!1);
    }, [E, I, c]);
    const k = oe(E);
    if (ve(() => {
      const F = k.current;
      if (k.current = E, !E || F) return;
      const X = M.includes(C) ? C : M[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [E, C, M]), c === !1) return null;
    const T = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), S(!1), N.current?.focus());
    }, R = (F) => {
      if (M.length === 0) return;
      const X = M.includes(C) ? M.indexOf(C) : F === 1 ? -1 : 0, ie = M[(X + F + M.length) % M.length];
      ie != null && (A(ie), v.current[ie]?.focus());
    }, z = (F) => {
      const X = F === "first" ? M[0] : M[M.length - 1];
      X != null && (A(X), v.current[X]?.focus());
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
          b.current = F, typeof y == "function" ? y(F) : y && (y.current = F);
        },
        className: [
          yn.root,
          yn[o],
          f ? yn.fullWidth : null,
          x
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            an,
            {
              className: yn.action,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              loading: a,
              disabled: u,
              "aria-label": g,
              onClick: () => {
                E && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ s(
            an,
            {
              ref: N,
              className: yn.caret,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              disabled: I,
              "aria-haspopup": "menu",
              "aria-expanded": E,
              "aria-controls": _,
              "aria-label": h,
              onClick: () => E ? S(!1) : $(),
              onKeyDown: (F) => {
                !E && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), $());
              },
              children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          E && /* @__PURE__ */ s(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": h,
              className: yn.menu,
              onKeyDown: j,
              ...m,
              children: r.map((F, X) => /* @__PURE__ */ D(
                "button",
                {
                  ref: (ie) => {
                    v.current[X] = ie;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: X === C ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    yn.item,
                    X === C ? yn.active : null,
                    F.danger ? yn.danger : null,
                    F.disabled ? yn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(X),
                  onMouseEnter: () => {
                    F.disabled || A(X);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ s("span", { className: yn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: F.icon, size: 16 }) }) : null,
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
), Vx = "_mask_rcv90_1", Yx = "_invalid_rcv90_31", Xx = "_xs_rcv90_38", Zx = "_sm_rcv90_44", Jx = "_md_rcv90_50", Qx = "_lg_rcv90_56", ev = "_xl_rcv90_62", Ps = {
  mask: Vx,
  invalid: Yx,
  xs: Xx,
  sm: Zx,
  md: Jx,
  lg: Qx,
  xl: ev
};
function ol(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const l of t)
    if (l === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += l;
    else
      break;
  return r;
}
const kO = st(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: i = "",
  onChange: d,
  className: o,
  onKeyDown: a,
  ...c
}, f) {
  const [u, x] = q(i ?? ""), g = l !== void 0, h = g ? l ?? "" : u, m = (_) => {
    const b = ol(_, r);
    return g || x(b), d?.(b), b;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: h,
      onChange: (_) => {
        m(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const b = _.currentTarget.selectionStart ?? h.length, N = h[b - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const v = h.replace(/\D/g, "");
            m(ol(v.slice(0, -1), r));
          }
        }
        a?.(_);
      },
      className: [
        Ps.mask,
        Ps[t],
        n ? Ps.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), tv = "_wrapper_12jdf_1", nv = "_input_12jdf_8", rv = "_invalid_12jdf_38", sv = "_button_12jdf_45", ov = "_up_12jdf_77", lv = "_down_12jdf_82", av = "_xs_12jdf_87", iv = "_sm_12jdf_93", cv = "_md_12jdf_99", dv = "_lg_12jdf_105", uv = "_xl_12jdf_111", Kn = {
  wrapper: tv,
  input: nv,
  invalid: rv,
  button: sv,
  up: ov,
  down: lv,
  xs: av,
  sm: iv,
  md: cv,
  lg: dv,
  xl: uv
};
function Ys(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function fv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Hl(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function _v(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function pv(e, t, n, r, l) {
  const d = Ys(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * l : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / l) * l : o = n + Math.floor((d - n - 1e-9) / l) * l, Hl(o, n, r);
}
const NO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: i,
    defaultValue: d,
    onChange: o,
    min: a,
    max: c,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: x = "Decrement",
    onBlur: g,
    onKeyDown: h,
    ...m
  }, y) {
    const [p, _] = q(
      d != null ? String(d) : ""
    ), b = i !== void 0, N = b ? i == null ? "" : String(i) : p, v = (M) => {
      b || _(M), o?.(Ys(M));
    }, E = (M) => {
      b || _(String(M)), o?.(M);
    }, S = (M) => {
      l || E(pv(N, M, a, c, f));
    }, C = (M) => {
      v(fv(M.target.value));
    }, A = (M) => {
      M.key === "ArrowUp" ? (M.preventDefault(), S(1)) : M.key === "ArrowDown" && (M.preventDefault(), S(-1)), h?.(M);
    }, I = (M) => {
      const $ = Ys(N);
      $ === null ? (b || _(""), o?.(null)) : E(Hl(_v($, a, f), a, c)), g?.(M);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Kn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: y,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: l,
            onChange: C,
            onKeyDown: A,
            onBlur: I,
            className: [
              Kn.input,
              Kn[t],
              n ? Kn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Kn.button, Kn.up].join(" "),
            "aria-label": u,
            disabled: l,
            onClick: () => S(1),
            children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Kn.button, Kn.down].join(" "),
            "aria-label": x,
            disabled: l,
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
}, mv = [
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
function Xs(e) {
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
function hv({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function gv({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, i = n / 255, d = Math.max(r, l, i), o = Math.min(r, l, i), a = d - o;
  let c = 0;
  return a !== 0 && (d === r ? c = (l - i) / a % 6 : d === l ? c = (i - r) / a + 2 : c = (r - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function pr({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, i = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, o = 0, a = 0;
  l < 1 ? (d = r, o = i) : l < 2 ? (d = i, o = r) : l < 3 ? (o = r, a = i) : l < 4 ? (o = i, a = r) : l < 5 ? (d = i, a = r) : (d = r, a = i);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((o + c) * 255),
    b: Math.round((a + c) * 255),
    a: 1
  };
}
function bv(e) {
  const t = Xs(e);
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
function ll({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const SO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = mv,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: x,
  onChange: g,
  onValueChange: h,
  onOpen: m,
  onClose: y
}) => {
  const p = oe(null), _ = oe(null), b = oe(null), N = oe(null), v = oe(null), E = ot(), S = oe(null), C = Oe(
    () => bv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, I] = q(!1), [M, $] = q(null), w = M ?? C, k = Oe(() => gv(w), [w]), T = B(
    (Z) => {
      const L = ll(Z);
      g?.(L), h?.(L);
    },
    [g, h]
  ), R = B(
    (Z, L) => {
      $(Z), L && !i && T(Z);
    },
    [i, T]
  ), z = B(() => {
    I(!1), $(null), y?.(), _.current?.focus();
  }, [y]), j = B(() => {
    o || ($(C), I(!0), m?.());
  }, [o, C, m]), F = B(() => {
    A ? z() : j();
  }, [A, z, j]), X = B(
    (Z, L) => {
      const Y = b.current;
      if (!Y) return k;
      const Q = Y.getBoundingClientRect(), ge = on((Z - Q.left) / Q.width, 0, 1), ae = on(1 - (L - Q.top) / Q.height, 0, 1);
      return { h: k.h, s: ge, v: ae };
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
    R({ ...pr(L), a: w.a }, !0);
  }, we = (Z) => {
    if (S.current !== "sat") return;
    Z.preventDefault();
    const L = X(Z.clientX, Z.clientY);
    R({ ...pr(L), a: w.a }, !0);
  }, le = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "hue";
    const L = ie(Z.clientX, N.current);
    R(
      { ...pr({ ...k, h: L * 360 }), a: w.a },
      !0
    );
  }, _e = (Z) => {
    if (S.current !== "hue") return;
    Z.preventDefault();
    const L = ie(Z.clientX, N.current);
    R(
      { ...pr({ ...k, h: L * 360 }), a: w.a },
      !0
    );
  }, K = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "alpha";
    const L = ie(Z.clientX, v.current);
    R({ ...w, a: L }, !0);
  }, he = (Z) => {
    if (S.current !== "alpha") return;
    Z.preventDefault();
    const L = ie(Z.clientX, v.current);
    R({ ...w, a: L }, !0);
  }, ue = () => {
    S.current = null;
  }, ye = B(
    (Z, L) => {
      const Y = {
        h: k.h,
        s: on(k.s + Z, 0, 1),
        v: on(k.v + L, 0, 1)
      };
      R({ ...pr(Y), a: w.a }, !0);
    },
    [k, w.a, R]
  ), pe = B(
    (Z) => {
      const L = (k.h + Z + 360) % 360;
      R({ ...pr({ ...k, h: L }), a: w.a }, !0);
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
        Z.preventDefault(), ye(-0.05, 0);
        break;
      case "ArrowRight":
        Z.preventDefault(), ye(0.05, 0);
        break;
      case "ArrowUp":
        Z.preventDefault(), ye(0, 0.05);
        break;
      case "ArrowDown":
        Z.preventDefault(), ye(0, -0.05);
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
  }, ne = (Z, L) => {
    if (Z === "hex") {
      const ae = Xs(L);
      ae && R({ ...ae, a: w.a }, !0);
      return;
    }
    const Y = L.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const ae = Y.includes(".") ? on(Q, 0, 1) : on(Q / 100, 0, 1);
      R({ ...w, a: ae }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    R(
      { ...w, [Z]: on(Q, 0, ge[Z]) },
      !0
    );
  }, Ae = () => {
    M && (T(M), $(null), I(!1), y?.(), _.current?.focus());
  };
  ve(() => {
    if (!A) return;
    const Z = (L) => {
      p.current && !p.current.contains(L.target) && z();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [A, z]), ve(() => {
    if (!A) return;
    const Z = (L) => {
      L.key === "Escape" && z();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [A, z]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = ll(w), Ge = hv(w), Je = { x: k.s * 100, y: (1 - k.v) * 100 }, At = k.h / 360 * 100, lt = w.a * 100, yt = /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
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
        onPointerDown: le,
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
        onPointerMove: he,
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
            onChange: (Z) => ne("hex", Z.target.value)
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
            onChange: (Z) => ne("r", Z.target.value)
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
            onChange: (Z) => ne("g", Z.target.value)
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
            onChange: (Z) => ne("b", Z.target.value)
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
            onChange: (Z) => ne("a", Z.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ s("div", { className: Re["dx-colorpicker-palette"], children: l.map((Z) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const L = Xs(Z);
          i ? R({ ...L, a: w.a }, !1) : ($(null), T({ ...L, a: w.a }), I(!1), y?.(), _.current?.focus());
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
        A ? Re["dx-colorpicker-open"] : null,
        a ? Re["dx-colorpicker-invalid"] : null,
        x
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: _,
            type: "button",
            className: [Re["dx-colorpicker-trigger"], fe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": A,
            "aria-controls": E,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && A && (Z.preventDefault(), z());
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
              c && /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ s(
          "div",
          {
            id: E,
            role: "dialog",
            "aria-label": "Choose color",
            className: Re["dx-colorpicker-popup"],
            children: yt
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
}, yv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function xv(e, t) {
  const n = Yt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function Zs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, r - 1, l, i, d, o);
  return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== l ? null : { year: n, month: r, day: l, hour: i, minute: d, second: o };
}
function Gn() {
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
function cs(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, i = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, i),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function al(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const il = {
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
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, vv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], wv = ["y", "M", "d", "H", "m", "s"];
function ds(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", i = 0;
  for (; i < t.length; ) {
    let d = !1;
    for (const a of vv)
      if (t.startsWith(a, i)) {
        l += il[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[i];
    if (wv.includes(o)) {
      l += il[o](e, r, n), i += 1;
      continue;
    }
    l += o, i += 1;
  }
  return l;
}
const kv = [
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
function Nv(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const a of kv)
      if (t.startsWith(a, l)) {
        o = a;
        break;
      }
    if (o) {
      const a = e.slice(r, r + o.length);
      if (!/^\d+$/.test(a)) return null;
      const c = Number(a);
      switch (o) {
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
      r += o.length, l += o.length;
      continue;
    }
    if (e[r] !== t[l]) return null;
    r += 1, l += 1;
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
function Pr(e, t) {
  const n = Zs(e);
  return n || Nv(e, t);
}
function Sv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Ov = ["hour", "minute", "second"];
function us(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const OO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: i = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: a = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: x,
    locale: g = "en-US",
    onChange: h,
    onValueChange: m,
    onOpen: y,
    onClose: p,
    disabled: _,
    readOnly: b,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: E,
    clearLabel: S,
    tabIndex: C,
    className: A,
    onBlur: I,
    onKeyDown: M,
    ...$
  }, w) {
    const k = oe(null), T = oe(null), R = oe(null), z = oe(null), j = ot(), F = r !== void 0, [X, ie] = q(
      () => l != null ? ds(
        Pr(l, i) ?? Gn(),
        i,
        g
      ) : ""
    ), [te, we] = q(!1), [le, _e] = q(null), [K, he] = q(() => {
      const V = r !== void 0 ? r ?? "" : l ?? "";
      if (V) {
        const me = Pr(V, i);
        if (me) return me;
      }
      return Gn();
    }), ue = Oe(() => d ? Zs(d) : null, [d]), ye = Oe(() => o ? Zs(o) : null, [o]), pe = Oe(
      () => new Set(x ?? []),
      [x]
    ), De = Oe(() => {
      const V = F ? r ?? "" : X;
      return V ? Pr(V, i) : null;
    }, [r, X, F, i]), G = B(
      (V) => {
        const me = Yt(V);
        return !!(pe.has(me) || ue && me < Yt(ue) || ye && me > Yt(ye));
      },
      [pe, ue, ye]
    ), $e = B(
      (V) => {
        if (!G(V)) return V;
        for (let me = 1; me <= 366; me += 1) {
          const Ve = In(V, me);
          if (!G(Ve)) return Ve;
          const Ye = In(V, -me);
          if (!G(Ye)) return Ye;
        }
        return V;
      },
      [G]
    ), ne = B(
      (V) => {
        F || ie(V ? ds(V, i, g) : "");
        const me = V ? xv(V, a) : "";
        h?.(me), m?.(me);
      },
      [F, i, g, a, h, m]
    ), Ae = B(
      (V) => {
        T.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), p?.(), u || R.current?.focus();
    }, [u, p]), Fe = B(() => {
      if (_) return;
      const V = De ?? Gn();
      _e(V), he($e(V)), we(!0), y?.();
    }, [_, De, $e, y]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Je = B((V) => {
      z.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), At = B(
      (V) => {
        if (G(V)) return;
        const me = le ?? De, Ye = {
          ...a ? {
            hour: me?.hour ?? 0,
            minute: me?.minute ?? 0,
            second: me?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: V.year,
          month: V.month,
          day: V.day
        };
        _e(Ye), a || (ne(Ye), fe());
      },
      [G, le, De, a, ne, fe]
    ), lt = B(
      (V, me) => {
        _e((Ve) => {
          const Ye = Ve ?? De ?? Gn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + me));
          return { ...Ye, [V]: Xe };
        });
      },
      [De]
    ), yt = B(
      (V, me) => {
        const Ve = me.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? De ?? Gn(), [V]: Math.min(Pt, Ye) }));
      },
      [De]
    ), Z = B(() => {
      le && (ne(le), fe());
    }, [le, ne, fe]), L = B(() => {
      if (te) return;
      const V = Pr(X, i);
      ne(V ? Sv(V, ue, ye) : null);
    }, [te, X, i, ue, ye, ne]), Y = (V) => {
      const me = V.target.value;
      F || ie(me), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? le && (ne(le), fe()) : L()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), M?.(V);
    }, ge = (V) => {
      L(), I?.(V);
    }, ae = (V) => {
      let me = null;
      switch (V.key) {
        case "ArrowLeft":
          me = In(K, -1), V.preventDefault();
          break;
        case "ArrowRight":
          me = In(K, 1), V.preventDefault();
          break;
        case "ArrowUp":
          me = In(K, -7), V.preventDefault();
          break;
        case "ArrowDown":
          me = In(K, 7), V.preventDefault();
          break;
        case "Home":
          me = In(K, -al(K)), V.preventDefault();
          break;
        case "End":
          me = In(K, 6 - al(K)), V.preventDefault();
          break;
        case "PageUp":
          me = cs(K, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          me = cs(K, V.shiftKey ? 12 : 1), V.preventDefault();
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
      if (me) {
        const Ve = $e(me);
        he(Ve), setTimeout(() => Je(Ve), 0);
      }
    };
    ve(() => {
      if (!te) return;
      const V = (me) => {
        k.current && !k.current.contains(me.target) && fe();
      };
      return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
    }, [te, fe]), ve(() => {
      if (!te) return;
      const V = (me) => {
        me.key === "Escape" && fe();
      };
      return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
    }, [te, fe]);
    const Ee = () => {
      F || ie(""), h?.(""), m?.(""), T.current?.focus();
    }, je = te && le ? ds(le, i, g) : F ? r ? ds(
      Pr(r, i) ?? Gn(),
      i,
      g
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: K.year, month: K.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), re = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < yv; V += 1)
      Le.push(In(re, V - Xt));
    const Nt = le ? Yt(le) : De ? Yt(De) : null, Rt = Yt(Gn()), xt = `${nt.year}-${ln(nt.month)}`, Ie = Oe(
      () => new Intl.DateTimeFormat(g, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [g]
    ), We = new Intl.DateTimeFormat(g, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, me) => new Intl.DateTimeFormat(g, { weekday: "short" }).format(
        new Date(2021, 0, 3 + me)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], at = /* @__PURE__ */ D(
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
                  const V = $e(cs(K, -1));
                  he(V), setTimeout(() => Je(V), 0);
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
                  const V = $e(cs(K, 1));
                  he(V), setTimeout(() => Je(V), 0);
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
              onKeyDown: ae,
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
                Array.from({ length: 6 }, (V, me) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: Le.slice(me * 7, me * 7 + 7).map((Ve) => {
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
                          onFocus: () => he(Ve),
                          children: Ve.day
                        },
                        Ye
                      );
                    })
                  },
                  me
                ))
              ]
            }
          ),
          a && /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time"], children: [
            Ov.map((V) => /* @__PURE__ */ D("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-time-label"], children: us(V) }),
              /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": us(V),
                    value: ln(
                      (le ?? De ?? Gn())[V]
                    ),
                    onChange: (me) => yt(V, me.target.value),
                    onKeyDown: (me) => {
                      me.key === "ArrowUp" ? (me.preventDefault(), lt(V, 1)) : me.key === "ArrowDown" ? (me.preventDefault(), lt(V, -1)) : me.key === "Enter" && (me.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${us(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${us(V).toLowerCase()}`,
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
          A
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: b,
                placeholder: N,
                tabIndex: C,
                role: c ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : Qe,
                "aria-controls": c ? void 0 : j,
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
                  c || Ge();
                },
                ...$
              }
            ),
            f && !_ && Ze && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  c ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
                onClick: Ee,
                children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ s(
              "button",
              {
                ref: R,
                type: "button",
                className: [Ue["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": E ?? "Open calendar",
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
              children: at
            }
          )
        ]
      }
    );
  }
), Vn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, $O = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: i = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: c,
  onValueChange: f
}) => {
  const [u, x] = q(e), g = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), h = B(
    (_) => {
      c?.(_), f?.(_);
    },
    [c, f]
  ), m = B(
    (_) => {
      n || r || (h(_), x(_));
    },
    [n, r, h]
  ), y = (_) => {
    if (n || r) return;
    const b = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), m(g(b + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), m(g(b - 1));
        break;
      case "Home":
        _.preventDefault(), m(1);
        break;
      case "End":
        _.preventDefault(), m(t);
        break;
    }
  }, p = Array.from({ length: t }, (_, b) => b + 1);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        Vn["dx-rating"],
        n ? Vn["dx-rating-readonly"] : null,
        r ? Vn["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: y,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Vn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => m(0),
            children: /* @__PURE__ */ s(Me, { icon: "block", size: 16 })
          }
        ),
        p.map((_) => {
          const b = _ <= e, N = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": b,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: N ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Vn["dx-rating-item"],
                b ? Vn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(_),
              onFocus: () => x(_),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: Vn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s(Me, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: Vn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "star", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, er = {
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
const EO = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: i = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: x = 0,
  className: g,
  onChange: h,
  onInput: m,
  onValueChange: y,
  onInputChange: p
}) => {
  const _ = oe(null), b = oe(
    null
  ), [N, v] = q(null), E = N ?? e, S = Oe(
    () => Sn(E, r, l),
    [E, r, l]
  ), C = Oe(
    () => Sn(d ? t : S, r, l),
    [d, t, S, r, l]
  ), A = Oe(
    () => Sn(d ? Math.max(n, C) : S, r, l),
    [d, n, C, S, r, l]
  ), I = B(
    (K) => {
      const he = l - r;
      return he <= 0 ? 0 : (Sn(K, r, l) - r) / he * 100;
    },
    [r, l]
  ), M = B(
    (K, he) => {
      const ue = _.current;
      if (!ue) return r;
      const ye = ue.getBoundingClientRect();
      let pe;
      o === "vertical" ? pe = 1 - (he - ye.top) / ye.height : pe = (K - ye.left) / ye.width;
      const De = r + Sn(pe, 0, 1) * (l - r);
      return i > 0 ? Sn(Math.round(De / i) * i, r, l) : Sn(De, r, l);
    },
    [r, l, i, o]
  ), $ = B(
    (K) => {
      typeof K == "number" && v(K), h?.(K), y?.(K);
    },
    [h, y]
  ), w = B(
    (K) => {
      typeof K == "number" && v(K), m?.(K), p?.(K);
    },
    [m, p]
  ), k = B(
    (K, he, ue) => {
      const ye = M(he, ue);
      let pe;
      d ? K === "min" ? pe = { min: Math.min(ye, A), max: A } : pe = { min: C, max: Math.max(ye, C) } : pe = ye, w(pe), b.current === null && $(pe);
    },
    [d, M, C, A, w, $]
  ), T = B(
    (K, he) => {
      const ue = (i > 0 ? i : 1) * he;
      let ye;
      d ? K === "min" ? ye = {
        min: Sn(C + ue, r, A),
        max: A
      } : ye = {
        min: C,
        max: Sn(A + ue, C, l)
      } : ye = Sn(S + ue, r, l), $(ye);
    },
    [d, i, r, l, C, A, S, $]
  ), R = (K, he) => {
    if (!a)
      switch (he.key) {
        case "ArrowLeft":
        case "ArrowDown":
          he.preventDefault(), T(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          he.preventDefault(), T(K, 1);
          break;
        case "Home":
          he.preventDefault(), $(d ? K === "min" ? { min: r, max: A } : { min: C, max: C } : r);
          break;
        case "End":
          he.preventDefault(), $(d ? K === "min" ? { min: A, max: A } : { min: C, max: l } : l);
          break;
      }
  }, z = (K, he) => {
    a || (he.preventDefault(), he.currentTarget.focus(), typeof he.currentTarget.setPointerCapture == "function" && he.currentTarget.setPointerCapture(he.pointerId), b.current = { key: K, pointerId: he.pointerId }, k(K, he.clientX, he.clientY));
  }, j = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (K.preventDefault(), k(b.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (b.current = null, K.preventDefault(), $(d ? { min: C, max: A } : S));
  }, [X, ie] = q(null), te = I(C), we = I(A), le = d ? te : 0, _e = we;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        er["dx-slider"],
        o === "vertical" ? er["dx-slider-vertical"] : null,
        a ? er["dx-slider-disabled"] : null,
        g
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: _, className: er["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: er["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${le}%`, height: `${_e - le}%` } : { left: `${le}%`, width: `${_e - le}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(C),
            "aria-orientation": o,
            "aria-label": d ? f : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && X === "max" ? -1 : x,
            className: er["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (K) => R("min", K),
            onPointerDown: (K) => z("min", K),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("min")
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(A),
            "aria-orientation": o,
            "aria-label": u,
            "aria-disabled": a || void 0,
            tabIndex: a || X === "min" ? -1 : x,
            className: er["dx-slider-handle"],
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
}, dt = {
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
}, $v = "-10675199.02:48:05.4775808", Ev = "10675199.02:48:05.4775808", Rn = 86400, Pn = 3600, xn = 60, js = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, cl = {
  days: Rn,
  hours: Pn,
  minutes: xn,
  seconds: 1
}, Tv = {
  day: Rn,
  hour: Pn,
  minute: xn,
  second: 1
};
function mr(e) {
  return String(e).padStart(2, "0");
}
function Wr(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((u) => u != null)) return null;
    const o = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (o * Rn + a * Pn + c * xn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, o = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return o > 23 || a > 59 || c > 59 ? null : n * (d * Rn + o * Pn + a * xn + c + f);
  }
  return null;
}
function Cv(e) {
  return e.days * Rn + e.hours * Pn + e.minutes * xn + e.seconds;
}
function dl(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Rn);
  t %= Rn;
  const r = Math.floor(t / Pn);
  t %= Pn;
  const l = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Js(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / xn) * xn : t === "hour" ? r = Math.round(r / Pn) * Pn : t === "day" && (r = Math.round(r / Rn) * Rn);
  let l = Math.round(r % xn);
  const i = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / xn) + i, o = d % 60, a = Math.floor(d / 60), c = a % 24, f = Math.floor(a / 24), u = n ? "-" : "", x = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${x}${mr(c)}`;
    case "minute":
      return `${u}${x}${mr(c)}:${mr(o)}`;
    default:
      return `${u}${x}${mr(c)}:${mr(o)}:${mr(l)}`;
  }
}
function ul(e, t = "second") {
  const n = Wr(e);
  return n === null ? "" : Js(n, t);
}
function Bs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const TO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = $v,
    max: d = Ev,
    step: o = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: x = !0,
    allowClear: g = !1,
    inline: h = !1,
    onChange: m,
    onValueChange: y,
    onOpen: p,
    onClose: _,
    disabled: b,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: E,
    clearLabel: S,
    tabIndex: C,
    className: A,
    onBlur: I,
    onKeyDown: M,
    ...$
  }, w) {
    const k = oe(null), T = oe(null), R = oe(null), z = ot(), j = r !== void 0, [F, X] = q(
      () => l != null ? ul(l, a) : ""
    ), [ie, te] = q(!1), [we, le] = q(null), [_e, K] = q(null), he = Oe(
      () => Wr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => Wr(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ye = Oe(() => {
      const re = Number.parseFloat(o);
      return Number.isNaN(re) || re <= 0 ? 1 : re;
    }, [o]), pe = Oe(() => {
      const re = j ? r ?? "" : F;
      return re ? Wr(re) : null;
    }, [r, F, j]), De = B(
      (re) => {
        const Le = re === null ? "" : Js(re, a);
        j || X(Le), m?.(Le), y?.(Le);
      },
      [j, a, m, y]
    ), G = B(
      (re) => {
        re && we !== null && De(we), te(!1), le(null), K(null), _?.(), h || R.current?.focus();
      },
      [h, we, De, _]
    ), $e = B(() => {
      b || (le(pe ?? 0), te(!0), p?.());
    }, [b, pe, p]), ne = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (re, Le) => {
        le((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * ye * cl[re];
          return Bs(xt, he, ue);
        });
      },
      [pe, ye, he, ue]
    ), fe = B(
      (re) => {
        const Le = _e?.[re];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        le((xt) => {
          const Ie = xt ?? pe ?? 0, We = dl(Ie);
          We[re] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * Cv(We);
          return Bs($t, he, ue);
        }), K(null);
      },
      [_e, pe, he, ue]
    ), Fe = (re, Le) => {
      K((Nt) => ({ ...Nt ?? {}, [re]: Le }));
    }, Ge = (re, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), fe(re), Ae(re, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), fe(re), Ae(re, -1);
          break;
        case "Home":
          Le.preventDefault(), fe(re), le(he);
          break;
        case "End":
          Le.preventDefault(), fe(re), le(ue);
          break;
        case "Enter":
          Le.preventDefault(), fe(re), G(!0);
          break;
      }
    }, Je = B(() => {
      if (ie) return;
      const re = Wr(F);
      De(re !== null ? Bs(re, he, ue) : null);
    }, [ie, F, he, ue, De]), At = (re) => {
      j || X(re.target.value);
    }, lt = (re) => {
      re.key === "Enter" ? (re.preventDefault(), ie ? G(!0) : Je()) : re.key === "Escape" && ie ? (re.preventDefault(), G(!1)) : re.key === "ArrowDown" && !ie ? (re.preventDefault(), $e()) : re.key === "Tab" && ie && te(!1), M?.(re);
    }, yt = (re) => {
      Je(), I?.(re);
    }, Z = () => {
      j || X(""), m?.(""), y?.(""), T.current?.focus();
    };
    ve(() => {
      if (!ie) return;
      const re = (Le) => {
        k.current && !k.current.contains(Le.target) && G(!1);
      };
      return document.addEventListener("mousedown", re), () => document.removeEventListener("mousedown", re);
    }, [ie, G]), ve(() => {
      if (!ie) return;
      const re = (Le) => {
        Le.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
    }, [ie, G]), ve(() => {
      if (h && we !== null) {
        const re = pe;
        (re === null || Math.abs(we - re) > 1e-9) && De(we);
      }
    }, [h, we, pe, De]);
    const L = B(
      (re) => {
        T.current = re, typeof w == "function" ? w(re) : w && (w.current = re);
      },
      [w]
    ), Y = j ? r ? ul(r, a) : "" : F, Q = j ? !!r : F.length > 0, ge = h || ie, ae = we ?? pe ?? 0, Ee = dl(ae), je = Tv[a], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (re) => cl[re] >= je && (re === "days" ? c : re === "hours" ? f : re === "minutes" ? u : x)
    ), nt = t === "xs" ? dt["dx-timespanpicker-input--xs"] : t === "sm" ? dt["dx-timespanpicker-input--sm"] : t === "lg" ? dt["dx-timespanpicker-input--lg"] : t === "xl" ? dt["dx-timespanpicker-input--xl"] : dt["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ D("div", { className: dt["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-preview"], "aria-live": "polite", children: Js(ae, a) }),
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-units"], children: Qe.map((re) => /* @__PURE__ */ D("label", { className: dt["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: dt["dx-timespanpicker-unit-label"], children: js[re] }),
        /* @__PURE__ */ D("span", { className: dt["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: dt["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: _e?.[re] ?? String(Ee[re]),
              onChange: (Le) => Fe(re, Le.target.value),
              onKeyDown: (Le) => Ge(re, Le),
              onBlur: () => fe(re)
            }
          ),
          /* @__PURE__ */ D("span", { className: dt["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${js[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, 1);
                },
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${js[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, -1);
                },
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, re)) }),
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: dt["dx-timespanpicker-ok"],
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
          dt["dx-timespanpicker"],
          h ? dt["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !h && /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: L,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: b,
                placeholder: N,
                tabIndex: C,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                "aria-invalid": n || void 0,
                className: [
                  dt["dx-timespanpicker-input"],
                  nt,
                  n ? dt["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: lt,
                onBlur: yt,
                ...$
              }
            ),
            g && !b && Q && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: dt["dx-timespanpicker-clear"],
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
                className: [dt["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": E ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": z,
                disabled: b,
                onClick: ne,
                children: /* @__PURE__ */ s(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ s(
            "div",
            {
              id: z,
              role: h ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: h ? void 0 : dt["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), Av = "_wrapper_ou9x5_1", Dv = "_cells_ou9x5_8", Mv = "_cell_ou9x5_8", Iv = "_invalid_ou9x5_63", zv = "_live_ou9x5_73", tr = {
  wrapper: Av,
  cells: Dv,
  cell: Mv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Iv,
  live: zv
};
function fl(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const CO = st(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: i = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": x
  }, g) {
    const h = ot(), m = n !== void 0, [y, p] = q(fl(r).join("")), _ = m ? fl(n).join("") : y, b = Array.from({ length: t }, ($, w) => _[w] ?? ""), N = oe([]), [v, E] = q(""), S = ($) => {
      m || p($), l?.($);
    }, C = ($) => {
      const w = N.current[$];
      w && !w.disabled && (w.focus(), w.select());
    }, A = ($, w) => {
      const k = w.replace(/\D/g, "").slice(-1), T = _.split("");
      if (k) {
        T[$] = k;
        const R = T.join("").slice(0, t);
        S(R), R.length < t ? C($ + 1) : f && E("Code complete");
      }
    }, I = ($, w) => {
      if (w.key === "Backspace") {
        if (w.preventDefault(), _[$]) {
          const k = _.split("");
          k[$] = "", S(k.join(""));
        } else if ($ > 0) {
          const k = _.split("");
          k[$ - 1] = "", S(k.join("")), C($ - 1);
        }
      } else w.key === "ArrowLeft" && $ > 0 ? (w.preventDefault(), C($ - 1)) : w.key === "ArrowRight" && $ < t - 1 ? (w.preventDefault(), C($ + 1)) : w.key === "Home" ? (w.preventDefault(), C(0)) : w.key === "End" && (w.preventDefault(), C(t - 1));
    }, M = ($, w) => {
      w.preventDefault();
      const k = w.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const T = _.split("");
      let R = 0;
      for (let j = 0; j < k.length && $ + j < t; j++)
        T[$ + j] = k[j] ?? "", R++;
      const z = T.join("");
      S(z), z.length >= t ? f && E("Code complete") : C($ + R);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [tr.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [tr.cells, tr[d]].join(" "), children: b.map(($, w) => /* @__PURE__ */ s(
            "input",
            {
              ref: (k) => {
                N.current[w] = k, w === 0 && g && (typeof g == "function" ? g(k) : g.current = k);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: $,
              disabled: a,
              "aria-label": `Digit ${w + 1} of ${t}`,
              "aria-invalid": i && $ !== "" ? !0 : void 0,
              autoFocus: o && w === 0,
              className: [
                tr.cell,
                tr[`cell-${d}`],
                i ? tr.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (k) => A(w, k.target.value),
              onKeyDown: (k) => I(w, k),
              onPaste: (k) => M(w, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                f && E("");
              }
            },
            w
          )) }),
          f && /* @__PURE__ */ s(
            "span",
            {
              id: `${h}-live`,
              role: "status",
              "aria-live": "polite",
              className: tr.live,
              children: v
            }
          )
        ]
      }
    );
  }
), Lv = "_wrapper_6lcd5_1", Rv = "_header_6lcd5_7", Pv = "_label_6lcd5_15", jv = "_clear_6lcd5_22", Bv = "_canvas_6lcd5_53", Fv = "_disabled_6lcd5_69", hr = {
  wrapper: Lv,
  header: Rv,
  label: Pv,
  clear: jv,
  canvas: Bv,
  disabled: Fv
}, AO = st(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, x) {
    const g = oe(null), h = oe(!1), m = oe(!1), y = oe({ x: 0, y: 0 });
    ve(() => {
      const S = g.current;
      if (!S) return;
      const C = window.devicePixelRatio || 1, A = Math.round((a ?? S.clientWidth) * C), I = Math.round(c * C);
      (S.width !== A || S.height !== I) && (S.width = A, S.height = I);
      const M = S.getContext("2d");
      if (!M) return;
      M.setTransform(C, 0, 0, C, 0, 0), M.lineWidth = i, M.strokeStyle = l, M.lineCap = "round", M.lineJoin = "round";
      const $ = t ?? n;
      if ($) {
        const w = new Image();
        w.onload = () => {
          M.drawImage(w, 0, 0, S.clientWidth, c);
        }, w.src = $;
      }
    }, [t, n, l, i, a, c]);
    const p = () => {
      const S = g.current;
      if (!S) return;
      const C = S.toDataURL("image/png");
      r?.(C);
    }, _ = () => {
      const S = g.current;
      if (!S) return;
      const C = S.getContext("2d");
      C && C.clearRect(0, 0, S.width, S.height), r?.("");
    };
    vs(x, () => ({
      clear: _,
      toDataURL: (S = "image/png", C) => g.current?.toDataURL(S, C) ?? ""
    }));
    const b = (S) => {
      const C = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - C.left, y: S.clientY - C.top };
    }, N = (S) => {
      f || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), h.current = !0, m.current = !1, y.current = b(S));
    }, v = (S) => {
      if (!h.current) return;
      S.preventDefault();
      const C = S.currentTarget.getContext("2d");
      if (!C) return;
      const A = b(S);
      C.beginPath(), C.moveTo(y.current.x, y.current.y), C.lineTo(A.x, A.y), C.stroke(), y.current = A, m.current = !0;
    }, E = (S) => {
      h.current && (S.preventDefault(), h.current = !1, m.current && p());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          hr.wrapper,
          u,
          f ? hr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: hr.header, children: [
            /* @__PURE__ */ s("span", { className: hr.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: hr.clear,
                onClick: _,
                disabled: f,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: g,
              role: "img",
              "aria-label": o,
              "aria-disabled": f || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${c}px`
              },
              className: hr.canvas,
              onPointerDown: N,
              onPointerMove: v,
              onPointerUp: E,
              onPointerCancel: E
            }
          )
        ]
      }
    );
  }
), Hv = "_wrapper_dsvd2_1", Uv = "_trigger_dsvd2_7", qv = "_list_dsvd2_35", Wv = "_row_dsvd2_44", Kv = "_name_dsvd2_59", Gv = "_size_dsvd2_68", Vv = "_progress_dsvd2_74", Yv = "_fill_dsvd2_82", Xv = "_status_dsvd2_99", Zv = "_remove_dsvd2_106", On = {
  wrapper: Hv,
  trigger: Uv,
  list: qv,
  row: Wv,
  name: Kv,
  size: Gv,
  progress: Vv,
  fill: Yv,
  status: Xv,
  remove: Zv
};
function _l(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const DO = st(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: i,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: c = "Upload",
  children: f,
  onProgress: u,
  onComplete: x,
  onError: g
}, h) {
  const m = oe(null), [y, p] = q([]), _ = oe(/* @__PURE__ */ new Map()), b = (C, A) => {
    p(
      (I) => I.map((M) => M.file.name === C ? { ...M, ...A } : M)
    );
  }, N = (C) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    _.current.set(C.file.name, A);
    const I = new FormData();
    if (I.append(r, C.file), A.upload.addEventListener("progress", (M) => {
      if (!M.lengthComputable) return;
      const $ = Math.round(M.loaded / M.total * 100);
      b(C.file.name, { state: "uploading", progress: $ }), u?.(C.file.name, $);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (b(C.file.name, { state: "complete", progress: 100 }), x?.(C.file.name)) : (b(C.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), g?.(C.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      b(C.file.name, { state: "error", message: "Network error" }), g?.(C.file.name, "Network error");
    }), i)
      for (const [M, $] of Object.entries(i))
        A.setRequestHeader(M, $);
    A.open("POST", t), A.send(I), b(C.file.name, { state: "uploading", progress: 0 });
  }, v = (C) => {
    if (!C) return;
    const A = [...C], I = [];
    let M = Math.max(0, o - y.length);
    for (const w of A) {
      if (a != null && w.size > a) {
        g?.(
          w.name,
          `File too large (maximum ${_l(a)})`
        );
        continue;
      }
      if (M <= 0) {
        g?.(w.name, `Too many files (maximum ${o})`);
        continue;
      }
      M -= 1, I.push(w);
    }
    const $ = I.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    p((w) => [...w, ...$]), m.current && (m.current.value = ""), l && $.forEach(N);
  }, E = (C) => {
    _.current.get(C)?.abort(), _.current.delete(C), p((I) => I.filter((M) => M.file.name !== C));
  }, S = f ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: On.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ s(Me, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return vs(h, () => ({
    open: () => m.current?.click(),
    upload: () => y.forEach((C) => C.state === "pending" ? N(C) : null)
  })), /* @__PURE__ */ D("div", { className: On.wrapper, children: [
    S,
    /* @__PURE__ */ s(
      "input",
      {
        ref: m,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (C) => v(C.target.files)
      }
    ),
    !f && y.length > 0 && /* @__PURE__ */ s("ul", { className: On.list, children: y.map(({ file: C, state: A, progress: I, message: M }) => /* @__PURE__ */ D(
      "li",
      {
        className: On.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: On.name, children: C.name }),
          /* @__PURE__ */ s("span", { className: On.size, children: _l(C.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${C.name} upload progress`,
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
          /* @__PURE__ */ s("span", { className: On.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? M ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${C.name}`,
              onClick: () => E(C.name),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      C.name
    )) })
  ] });
}), Jv = "_zone_nl0bz_1", Qv = "_dragging_nl0bz_23", e2 = "_caption_nl0bz_28", t2 = "_browse_nl0bz_40", n2 = "_disabled_nl0bz_67", jr = {
  zone: Jv,
  dragging: Qv,
  caption: e2,
  browse: t2,
  disabled: n2
};
function r2(e, t) {
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
const MO = st(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: a
  }, c) {
    const f = oe(null), [u, x] = q(!1), g = (_) => {
      if (!_ || _.length === 0) return;
      const b = [..._].filter((N) => r2(N, t ?? ""));
      b.length !== 0 && r?.(b);
    }, h = (_) => {
      o || (_.preventDefault(), x(!0));
    }, m = (_) => {
      o || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", x(!0));
    }, y = (_) => {
      o || _.currentTarget.contains(_.relatedTarget) || x(!1);
    }, p = (_) => {
      o || (_.preventDefault(), x(!1), g(_.dataTransfer.files));
    };
    return vs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": o || void 0,
        className: [
          jr.zone,
          u ? jr.dragging : null,
          o ? jr.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: h,
        onDragOver: m,
        onDragLeave: y,
        onDrop: p,
        children: [
          /* @__PURE__ */ s("p", { className: jr.caption, children: u ? i : l }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: jr.browse,
              onClick: () => f.current?.click(),
              children: d
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
                g(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), s2 = "_root_1a92d_1", o2 = "_menubar_1a92d_5", l2 = "_horizontal_1a92d_15", a2 = "_vertical_1a92d_20", i2 = "_itemWrapper_1a92d_25", c2 = "_item_1a92d_25", d2 = "_disabled_1a92d_61", u2 = "_icon_1a92d_68", f2 = "_text_1a92d_75", _2 = "_caret_1a92d_79", p2 = "_hasChildren_1a92d_85", m2 = "_submenu_1a92d_94", h2 = "_submenuItem_1a92d_118", g2 = "_flyout_1a92d_155", b2 = "_hamburger_1a92d_175", y2 = "_responsive_1a92d_198", x2 = "_mobileOpen_1a92d_207", _t = {
  root: s2,
  menubar: o2,
  horizontal: l2,
  vertical: a2,
  itemWrapper: i2,
  item: c2,
  disabled: d2,
  icon: u2,
  text: f2,
  caret: _2,
  hasChildren: p2,
  submenu: m2,
  submenuItem: h2,
  flyout: g2,
  hamburger: b2,
  responsive: y2,
  mobileOpen: x2
}, bs = ar(null);
function v2(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function w2(e, t, n, r, l) {
  const [i, d] = q(n), o = e ? t ?? !1 : i, a = B(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return ve(() => {
    l > 0 && a(!1);
  }, [l]), [o, a];
}
function k2({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: _t.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Ul(e) {
  return qt(e) && e.type === ql;
}
function ao({
  itemKey: e,
  props: t
}) {
  const n = jn(bs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: o } = t, a = Oe(
    () => Vr.toArray(t.children).filter(qt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [x, g] = w2(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), h = n.level === 0, m = oe(0), p = (h && !u ? n.openKey === e : null) ?? x, _ = B(
    (R) => {
      h && !u ? n.setOpenKey(R ? e : null) : (g(R), h && n.setOpenKey(null));
    },
    [h, u, n, e, g]
  ), [, b] = q(0);
  ve(() => {
    if (!i) return;
    const R = () => b((z) => z + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const N = i && !c ? v2(i, t.match) : !1, v = B(
    (R) => {
      if (f) {
        R.preventDefault();
        return;
      }
      const z = { text: r, value: l, path: i };
      [n.emit(z), t.onClick?.(z)].includes(!1) && R.preventDefault(), n.closeAll();
    },
    [f, r, l, i, n, t]
  ), E = B(() => {
    if (!f) {
      if (p && (Date.now() - m.current < 600 || !n.clickToOpen)) {
        m.current = 0;
        return;
      }
      _(!p);
    }
  }, [f, p, _, n.clickToOpen]), S = B(() => {
    !c || f || n.clickToOpen || (m.current = Date.now(), _(!0));
  }, [c, f, n.clickToOpen, _]), C = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), A = `${n.baseId}-submenu-${e}`, [I, M] = q(null);
  ve(() => {
    n.closeSignal > 0 && M(null);
  }, [n.closeSignal]);
  const $ = Oe(
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
  ), w = c ? /* @__PURE__ */ s("span", { className: _t.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    Me,
    {
      icon: n.flyout && !h ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, k = o ?? /* @__PURE__ */ D(pt, { children: [
    /* @__PURE__ */ s(
      k2,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: _t.text, children: r }),
    w
  ] });
  if (c) {
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
        className: _t.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : S,
        onMouseLeave: n.clickToOpen ? void 0 : C,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": h ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": f || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
              "aria-controls": A,
              tabIndex: f ? -1 : 0,
              disabled: f,
              className: [
                _t.item,
                f ? _t.disabled : null,
                _t.hasChildren
              ].filter(Boolean).join(" "),
              onClick: E,
              children: k
            }
          ),
          p ? /* @__PURE__ */ s(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": r,
              className: [
                _t.submenu,
                n.flyout && !h ? _t.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: R,
              children: /* @__PURE__ */ s(bs.Provider, { value: $, children: a.map(
                (z, j) => Ul(z) ? /* @__PURE__ */ s(
                  ao,
                  {
                    itemKey: `${e}-${j}`,
                    props: z.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(to, { children: z }, `${e}-custom-${j}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const T = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [_t.submenuItem, f ? _t.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return i && !f ? /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: i, target: t.target, ...T, children: k }) }) : /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: f, ...T, children: k }) });
}
function ql(e) {
  if (!jn(bs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(ao, { itemKey: e.text, props: e });
}
function N2({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: i,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: c,
  ...f
}) {
  const u = ot(), x = oe(null), g = oe(null), [h, m] = q(null), [y, p] = q(0), [_, b] = q(!1), N = oe(null), v = B(
    (I) => i?.(I),
    [i]
  ), E = B(() => {
    m(null), p((I) => I + 1);
  }, []);
  ve(() => {
    if (h == null) return;
    const I = (M) => {
      x.current && !x.current.contains(M.target) && E();
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, [h, E]), ve(() => {
    N.current != null && h === N.current && (document.getElementById(`${u}-submenu-${h}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [h, u]);
  const S = Oe(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: v,
      closeAll: E,
      openKey: h,
      setOpenKey: m
    }),
    [u, n, t, y, v, E, h]
  ), C = Oe(
    () => Vr.toArray(e).filter(qt),
    [e]
  ), A = (I) => {
    const M = g.current;
    if (!M) return;
    const $ = Array.from(M.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (h != null) {
      const T = document.getElementById(`${u}-submenu-${h}`);
      if (T) {
        const R = Array.from(
          T.querySelectorAll('[role="menuitem"]')
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
          I.preventDefault(), E(), d?.(), M.querySelector(`[data-index="${h}"]`)?.focus();
          return;
        }
        if (I.key === "Enter" || I.key === " ") return;
      }
      if (I.key === "Escape") {
        I.preventDefault(), E(), d?.();
        return;
      }
    }
    const w = document.activeElement, k = w ? $.indexOf(w) : -1;
    if (I.key === "ArrowRight") {
      if (I.preventDefault(), $.length === 0) return;
      $[k === -1 ? 0 : (k + 1) % $.length]?.focus();
      return;
    }
    if (I.key === "ArrowLeft") {
      if (I.preventDefault(), $.length === 0) return;
      $[k === -1 ? $.length - 1 : (k - 1 + $.length) % $.length]?.focus();
      return;
    }
    if (I.key === "ArrowDown") {
      if (k >= 0) {
        const T = w?.getAttribute("data-index");
        if (T == null) return;
        M.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), N.current = T, m(T));
      }
      return;
    }
    if (I.key === "Home") {
      I.preventDefault(), $[0]?.focus();
      return;
    }
    if (I.key === "End") {
      I.preventDefault(), $[$.length - 1]?.focus();
      return;
    }
    if (I.key.length === 1 && !I.ctrlKey && !I.metaKey) {
      const T = $.map((z) => z.textContent ?? ""), R = k === -1 ? 0 : (k + 1) % $.length;
      for (let z = 0; z < $.length; z++) {
        const j = (R + z) % $.length;
        if (T[j]?.toLowerCase().startsWith(I.key.toLowerCase())) {
          I.preventDefault(), $[j]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: x,
      "aria-label": o,
      className: [
        _t.root,
        l ? _t.vertical : _t.horizontal,
        r ? _t.responsive : null,
        r && _ ? _t.mobileOpen : null,
        n ? _t.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": _,
            className: _t.hamburger,
            onClick: () => b((I) => !I),
            children: /* @__PURE__ */ s(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: g,
            role: l ? "menu" : "menubar",
            "aria-label": o,
            className: _t.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ s(bs.Provider, { value: S, children: C.map(
              (I, M) => Ul(I) ? /* @__PURE__ */ s(
                ao,
                {
                  itemKey: String(M),
                  props: I.props
                },
                `top-${M}`
              ) : /* @__PURE__ */ s(to, { children: I }, `top-custom-${M}`)
            ) })
          }
        )
      ]
    }
  );
}
const S2 = "_popup_uiejp_1", O2 = "_menu_uiejp_22", Qs = {
  popup: S2,
  menu: O2
}, Wl = ar(null);
function IO() {
  const e = jn(Wl);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Kl(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ s(ql, { ...l, children: r ? Kl(r) : void 0 }, `${t.text}-${n}`);
  });
}
function $2({ state: e, onClose: t }) {
  const n = oe(null), [r, l] = q({ left: e.x, top: e.y });
  Fs(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), ve(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = B(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: Qs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: Qs.menu, children: e.options.content ?? /* @__PURE__ */ s(
        N2,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Kl(e.options.items ?? [])
        }
      ) })
    }
  );
}
function zO({ children: e }) {
  const [t, n] = q(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = B(
    (d, o) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: o });
    },
    []
  );
  ve(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Qs.popup}`);
      u && !u.contains(f.target) && r();
    }, o = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, a = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const i = Oe(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ D(Wl.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ s($2, { state: t, onClose: r }) : null
  ] });
}
const E2 = "_root_rgcia_1", T2 = "_list_rgcia_9", C2 = "_item_rgcia_14", A2 = "_trigger_rgcia_18", D2 = "_disabled_rgcia_45", M2 = "_expanded_rgcia_52", I2 = "_selected_rgcia_56", z2 = "_icon_rgcia_61", L2 = "_text_rgcia_72", R2 = "_caret_rgcia_79", P2 = "_open_rgcia_86", j2 = "_submenu_rgcia_90", B2 = "_iconOnly_rgcia_172", F2 = "_stacked_rgcia_201", Lt = {
  root: E2,
  list: T2,
  item: C2,
  trigger: A2,
  disabled: D2,
  expanded: M2,
  selected: I2,
  icon: z2,
  text: L2,
  caret: R2,
  open: P2,
  submenu: j2,
  iconOnly: B2,
  stacked: F2
}, ys = ar(null);
function H2() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function U2(e, t) {
  const n = H2(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function q2({
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
function io({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = jn(ys);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: o } = n, a = Oe(
    () => Vr.toArray(n.children).filter(qt),
    [n.children]
  ), c = a.length > 0, f = !!o, u = n.match ?? r.match, x = n.expanded !== void 0, [g, h] = q(
    n.defaultExpanded ?? !1
  ), m = x ? n.expanded ?? !1 : g, y = B(
    (F) => {
      x || h(F), n.onExpandedChange?.(F);
    },
    [x, n]
  );
  ve(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && y(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, b] = q(
    n.defaultSelected ?? !1
  ), N = !p && d ? U2(d, u) : !1, v = n.selected ?? (p ? _ : N || _), [, E] = q(0);
  ve(() => {
    if (!d) return;
    const F = () => E((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [d]);
  const S = Oe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        y(!0), r.openAncestors();
      }
    }),
    [r, y]
  );
  ve(() => {
    N && t.length > 0 && S.openAncestors();
  }, []);
  const C = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const X = { text: l, value: i, path: d };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), p || b(!0), n.onSelectedChange?.(!0);
    },
    [f, l, i, d, r, n, p]
  ), A = B(() => {
    f || (m || r.notifyOpened(e, t), y(!m));
  }, [f, m, r, e, t, y]), I = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? A() : F.target.click()) : F.key === "Escape" && m ? (F.preventDefault(), y(!1)) : F.key === "ArrowRight" && c && !m ? (F.preventDefault(), r.notifyOpened(e, t), y(!0)) : F.key === "ArrowLeft" && m && (F.preventDefault(), y(!1));
    },
    [c, A, m, y, r, e, t]
  ), M = c && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [Lt.caret, m ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, $ = n.template ?? /* @__PURE__ */ D(pt, { children: [
    /* @__PURE__ */ s(
      q2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: Lt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: Lt.text, children: l }),
    M
  ] }), w = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, T = [
    Lt.trigger,
    f ? Lt.disabled : null,
    m ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), R = r.level > 0 ? "menuitem" : void 0, z = c ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: k,
      role: R,
      "aria-expanded": m,
      "aria-controls": w,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: A,
      onKeyDown: I,
      children: $
    }
  ) : d && !f ? /* @__PURE__ */ s(
    "a",
    {
      id: k,
      role: R,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: C,
      onKeyDown: I,
      children: $
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
      className: T,
      onClick: C,
      onKeyDown: I,
      children: $
    }
  ), j = c ? r.renderMode === "server" && !m ? null : /* @__PURE__ */ s(
    "div",
    {
      id: w,
      role: "menu",
      "aria-labelledby": k,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ s(ys.Provider, { value: S, children: a.map((F, X) => /* @__PURE__ */ s(
        io,
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
function LO(e) {
  if (!jn(ys)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(io, { itemKey: e.text, ancestors: [], props: e });
}
function RO({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: i = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: a,
  ...c
}) {
  const f = ot(), [u, x] = q(0), g = oe(/* @__PURE__ */ new Set()), h = B(
    (N) => d?.(N),
    [d]
  ), m = B(
    (N, v) => {
      t || (g.current = /* @__PURE__ */ new Set([N, ...v]), x((E) => E + 1));
    },
    [t]
  ), y = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, E = y(N.currentTarget), S = E.indexOf(v);
        if (S === -1) return;
        N.preventDefault();
        const C = N.key === "ArrowDown" ? 1 : -1;
        E[(S + C + E.length) % E.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = y(N.currentTarget);
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
      match: l,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: g,
      emit: h,
      notifyOpened: m,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      r,
      i,
      l,
      u,
      h,
      m
    ]
  ), b = Oe(
    () => Vr.toArray(e).filter(qt),
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
        a
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...c,
      children: /* @__PURE__ */ s("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ s(ys.Provider, { value: _, children: b.map((N, v) => /* @__PURE__ */ s(
        io,
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
const W2 = "_root_5numg_1", K2 = "_trigger_5numg_7", G2 = "_defaultTrigger_5numg_40", V2 = "_avatar_5numg_46", Y2 = "_menu_5numg_58", X2 = "_item_5numg_74", Z2 = "_disabled_5numg_88", J2 = "_active_5numg_97", Q2 = "_icon_5numg_107", ew = "_text_5numg_114", $n = {
  root: W2,
  trigger: K2,
  defaultTrigger: G2,
  avatar: V2,
  menu: Y2,
  item: X2,
  disabled: Z2,
  active: J2,
  icon: Q2,
  text: ew
};
function PO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = ot(), d = `${i}-menu`, o = oe(null), a = oe(null), [c, f] = q(!1), [u, x] = q(-1), g = t, h = e.map((v, E) => v.disabled ? -1 : E).filter((v) => v >= 0), m = B(
    (v) => {
      if (v.disabled) return;
      const E = {
        text: v.text,
        path: v.path
      };
      n?.(E), f(!1), a.current?.focus();
    },
    [n]
  ), y = B(() => {
    x(h[0] ?? -1), f(!0);
  }, [h]), p = B(() => {
    f(!1), x(-1), a.current?.focus();
  }, []);
  ve(() => {
    if (!c) return;
    const v = (E) => {
      o.current && !o.current.contains(E.target) && (f(!1), x(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [c]), ve(() => {
    if (!c) return;
    const v = (E) => {
      E.key === "Escape" && (E.preventDefault(), p());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [c, p]);
  const _ = (v) => {
    if (h.length === 0) return;
    const E = h.indexOf(u), S = E === -1 ? 0 : (E + v + h.length) % h.length, C = h[S];
    C != null && x(C);
  }, b = (v) => {
    if (!c) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), y());
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
        v.preventDefault(), h[0] != null && x(h[0]);
        break;
      case "End":
        v.preventDefault(), h[h.length - 1] != null && x(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const E = e[u];
          E && !E.disabled && m(E);
        }
        break;
      case "Tab":
        f(!1), x(-1);
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
        v.preventDefault(), h[0] != null && x(h[0]);
        break;
      case "End":
        v.preventDefault(), h[h.length - 1] != null && x(h[h.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const E = e[u];
          E && !E.disabled && m(E);
        }
        break;
      case "Escape":
        v.preventDefault(), p();
        break;
      case "Tab":
        f(!1), x(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: [$n.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ D("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: $n.trigger,
            onClick: () => c ? p() : y(),
            onKeyDown: b,
            children: g ?? /* @__PURE__ */ D("span", { className: $n.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: $n.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        c ? /* @__PURE__ */ s(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": u >= 0 ? `${i}-item-${u}` : void 0,
            className: $n.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((v, E) => {
              const S = !!v.disabled, C = E === u;
              return /* @__PURE__ */ D(
                "div",
                {
                  id: `${i}-item-${E}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [
                    $n.item,
                    C ? $n.active : null,
                    S ? $n.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || m(v);
                  },
                  onMouseEnter: () => {
                    S || x(E);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ s("span", { className: $n.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ s("span", { className: $n.text, children: v.text })
                  ]
                },
                `${v.text}-${E}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const tw = "_root_vv0xs_1", nw = "_bottomRight_vv0xs_11", rw = "_bottomLeft_vv0xs_16", sw = "_topRight_vv0xs_21", ow = "_topLeft_vv0xs_26", lw = "_menu_vv0xs_31", aw = "_itemWrapper_vv0xs_48", iw = "_tooltip_vv0xs_54", cw = "_main_vv0xs_76", dw = "_mainIcon_vv0xs_104", uw = "_mainOpen_vv0xs_109", fw = "_item_vv0xs_48", _w = "_disabled_vv0xs_141", pw = "_itemIcon_vv0xs_148", Wt = {
  root: tw,
  bottomRight: nw,
  bottomLeft: rw,
  topRight: sw,
  topLeft: ow,
  menu: lw,
  itemWrapper: aw,
  tooltip: iw,
  main: cw,
  mainIcon: dw,
  mainOpen: uw,
  item: fw,
  disabled: _w,
  itemIcon: pw
};
function jO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${ot()}-menu`, c = oe(null), f = oe(null), [u, x] = q(!1), g = B(
    (p) => {
      if (p.disabled) return;
      const _ = { text: p.text, value: p.value };
      r?.(_), x(!1), f.current?.focus();
    },
    [r]
  );
  ve(() => {
    if (!u) return;
    const p = (_) => {
      c.current && !c.current.contains(_.target) && x(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]), ve(() => {
    if (!u) return;
    const p = (_) => {
      _.key === "Escape" && (x(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [u]);
  const h = d === "bottom-right" ? Wt.bottomRight : d === "bottom-left" ? Wt.bottomLeft : d === "top-right" ? Wt.topRight : Wt.topLeft, m = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), x(!0)) : u && p.key === "Escape" && (p.preventDefault(), x(!1));
  }, y = (p) => {
    p.key === "Escape" && (p.preventDefault(), x(!1), f.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: c,
      className: [Wt.root, h, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ s(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: Wt.menu,
            onKeyDown: y,
            children: e.map((p, _) => {
              const b = !!p.disabled;
              return /* @__PURE__ */ D("div", { className: Wt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: Wt.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": b || void 0,
                    title: p.text,
                    disabled: b,
                    tabIndex: b ? -1 : 0,
                    className: [Wt.item, b ? Wt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => g(p),
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
            "aria-controls": a,
            "aria-label": l,
            onClick: () => x((p) => !p),
            onKeyDown: m,
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
const mw = "_root_1eyur_1", hw = "_list_1eyur_5", gw = "_item_1eyur_15", bw = "_link_1eyur_22", yw = "_linkButton_1eyur_23", xw = "_current_1eyur_24", vw = "_disabled_1eyur_68", ww = "_icon_1eyur_74", kw = "_text_1eyur_81", Nw = "_separator_1eyur_85", ut = {
  root: mw,
  list: hw,
  item: gw,
  link: bw,
  linkButton: yw,
  current: xw,
  disabled: vw,
  icon: ww,
  text: kw,
  separator: Nw
};
function BO({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, i = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [ut.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: ut.list, children: e.map((d, o) => {
        const a = o === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ D("li", { className: ut.item, children: [
          a ? c ? /* @__PURE__ */ D(
            "span",
            {
              className: [ut.current, ut.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ D(
            "a",
            {
              href: d.path,
              className: ut.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "span",
            {
              className: ut.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : c ? /* @__PURE__ */ D(
            "span",
            {
              className: [ut.link, ut.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ D(
            "a",
            {
              href: d.path,
              className: ut.link,
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: ut.linkButton,
              tabIndex: 0,
              onClick: () => i(d),
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ s("span", { className: ut.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const Sw = "_link_tmy3k_1", Ow = {
  link: Sw
}, FO = st(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ D(pt, { children: [
    n != null && /* @__PURE__ */ s(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [Ow.link, l].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...u } = i;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: d,
        className: a,
        href: f,
        ...u,
        children: o
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: d,
      type: "button",
      className: a,
      ...i,
      children: o
    }
  );
}), $w = "_root_dnkuu_1", Ew = "_list_dnkuu_5", Tw = "_item_dnkuu_15", Cw = "_connector_dnkuu_21", Aw = "_connectorCompleted_dnkuu_30", Dw = "_step_dnkuu_34", Mw = "_active_dnkuu_69", Iw = "_completed_dnkuu_75", zw = "_circle_dnkuu_79", Lw = "_check_dnkuu_109", Rw = "_icon_dnkuu_114", Pw = "_number_dnkuu_119", jw = "_text_dnkuu_124", Kt = {
  root: $w,
  list: Ew,
  item: Tw,
  connector: Cw,
  connectorCompleted: Aw,
  step: Dw,
  active: Mw,
  completed: Iw,
  circle: zw,
  check: Lw,
  icon: Rw,
  number: Pw,
  text: jw
};
function HO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: i,
  onChange: d,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? i ?? !1, x = t ?? n, g = x !== void 0, [h, m] = q(() => Math.min(Math.max(0, x ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, g ? x : h),
    Math.max(0, e.length - 1)
  ), _ = oe(null), b = B(
    (E) => {
      const S = Math.min(
        Math.max(0, E),
        Math.max(0, e.length - 1)
      );
      g || m(S), (d ?? o ?? a)?.(S);
    },
    [g, d, o, a, e.length]
  ), N = B(
    (E, S) => !!(S.disabled || u && E > p + 1),
    [u, p]
  ), v = (E) => {
    const S = Array.from(
      E.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), C = document.activeElement, A = C ? S.indexOf(C) : -1;
    if (E.key === "ArrowRight" || E.key === "ArrowDown") {
      if (E.preventDefault(), S.length === 0) return;
      const I = A === -1 ? 0 : (A + 1) % S.length, M = S[I];
      M && M.focus();
    } else if (E.key === "ArrowLeft" || E.key === "ArrowUp") {
      if (E.preventDefault(), S.length === 0) return;
      const I = A === -1 ? S.length - 1 : (A - 1 + S.length) % S.length, M = S[I];
      M && M.focus();
    } else E.key === "Home" ? (E.preventDefault(), S[0]?.focus()) : E.key === "End" && (E.preventDefault(), S[S.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": c,
      className: [Kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ s("ol", { ref: _, role: "list", className: Kt.list, children: e.map((E, S) => {
        const C = S === p, A = S < p, I = N(S, E);
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
                    A ? Kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ D(
                "button",
                {
                  type: "button",
                  "data-step": S,
                  "aria-current": C ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    Kt.step,
                    C ? Kt.active : null,
                    A ? Kt.completed : null,
                    I ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || b(S);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: Kt.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ s("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "check", size: "sm" }) }) : E.icon ? /* @__PURE__ */ s("span", { className: Kt.icon, children: E.icon }) : /* @__PURE__ */ s("span", { className: Kt.number, children: S + 1 }) }),
                    /* @__PURE__ */ s("span", { className: Kt.text, children: E.text })
                  ]
                }
              )
            ]
          },
          `${E.text}-${S}`
        );
      }) })
    }
  );
}
const Bw = "_root_12hod_1", Fw = "_horizontal_12hod_13", Hw = "_vertical_12hod_17", Uw = "_pane_12hod_21", qw = "_handle_12hod_31", Ww = "_handleHorizontal_12hod_51", Kw = "_handleVertical_12hod_57", Gw = "_handleGrip_12hod_63", Vw = "_handleCollapseHint_12hod_75", Yw = "_collapseBtn_12hod_79", Xw = "_collapseBtnCollapsed_12hod_109", un = {
  root: Bw,
  horizontal: Fw,
  vertical: Hw,
  pane: Uw,
  handle: qw,
  handleHorizontal: Ww,
  handleVertical: Kw,
  handleGrip: Gw,
  handleCollapseHint: Vw,
  collapseBtn: Yw,
  collapseBtnCollapsed: Xw
};
function Br(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const l = parseFloat(n.slice(0, -1));
    return Number.isNaN(l) ? t : l;
  }
  if (n.endsWith("px")) {
    const l = parseFloat(n.slice(0, -2));
    return Number.isNaN(l) ? t : l;
  }
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function zn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function UO({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: i,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = oe(null), x = B(() => {
    const w = n.length;
    if (w === 0) return [];
    const k = n.map((R) => R.size ? Br(R.size, 100 / w) : 100 / w), T = k.reduce((R, z) => R + z, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? k.map((R) => R / T * 100) : k;
  }, [n]), [g, h] = q(() => x()), [m, y] = q(
    () => n.map((w) => !!w.collapsed)
  ), p = oe(g);
  ve(() => {
    y(n.map((w) => !!w.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((w) => Br(w.min, 0)),
    [n]
  ), b = B(
    () => n.map((w) => Br(w.max, 100)),
    [n]
  ), N = B(
    (w, k) => {
      const T = { paneIndex: w, newSize: k, cancel: !1 };
      return (r ?? l)?.(T), !T.cancel;
    },
    [r, l]
  ), v = B(
    (w, k) => {
      const T = { paneIndex: w, collapse: k, cancel: !1 };
      return (i ?? d)?.(T), !T.cancel;
    },
    [i, d]
  ), E = B(
    (w) => {
      const k = !m[w];
      v(w, k) && (k ? (p.current = [...g], y((T) => {
        const R = [...T];
        return R[w] !== void 0 && (R[w] = !0), R;
      }), h((T) => {
        const R = [...T], z = R[w] ?? 0, j = w < R.length - 1 ? w + 1 : w - 1;
        if (j >= 0 && j < R.length) {
          const F = R[j] ?? 0;
          R[j] = F + z, R[w] = 0;
        } else
          R[w] = 0;
        return R;
      })) : (y((T) => {
        const R = [...T];
        return R[w] !== void 0 && (R[w] = !1), R;
      }), h(() => {
        const T = [...p.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [m, g, n.length, v]
  ), S = oe(
    null
  ), C = B(
    (w, k, T) => {
      const R = u.current;
      if (!R) return null;
      const z = R.getBoundingClientRect();
      let j;
      if (f) {
        if (z.width === 0) return null;
        j = (k - z.left) / z.width * 100;
      } else {
        if (z.height === 0) return null;
        j = (T - z.top) / z.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < w; ie++) {
        const te = g[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, g]
  ), A = (w, k) => {
    k.preventDefault();
    const T = k.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(k.pointerId), S.current = { handleIndex: w, pointerId: k.pointerId };
  }, I = (w) => {
    if (!S.current || S.current.pointerId !== w.pointerId)
      return;
    w.preventDefault();
    const k = S.current.handleIndex, T = C(k, w.clientX, w.clientY);
    if (T == null) return;
    const R = _(), z = b(), j = R[k] ?? 0, F = z[k] ?? 100, X = k + 1, ie = R[X] ?? 0, te = z[X] ?? 100, we = g[k] ?? 0, le = g[X] ?? 0, _e = we + le;
    if (_e <= 0) return;
    let K = zn(T, j, F), he = _e - K;
    if (he < ie) {
      if (he = ie, K = _e - he, K < j || K > F) return;
    } else if (he > te && (he = te, K = _e - he, K < j || K > F))
      return;
    K = zn(K, j, F), he = _e - K, N(k, K) && h((ue) => {
      const ye = [...ue];
      return ye[k] = K, ye[X] = he, ye;
    });
  }, M = (w) => {
    !S.current || S.current.pointerId !== w.pointerId || (S.current = null);
  }, $ = (w, k) => {
    const T = _(), R = b(), z = w, j = w + 1, F = g[z] ?? 0, X = g[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[z]?.collapsible, le = !!n[j]?.collapsible;
    if (f ? k.key === "ArrowLeft" ? te = -5 : k.key === "ArrowRight" && (te = 5) : k.key === "ArrowUp" ? te = -5 : k.key === "ArrowDown" && (te = 5), k.key === "Home") {
      k.preventDefault();
      let _e = T[z] ?? 0, K = ie - _e;
      if (K = zn(
        K,
        T[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, T[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
      h((he) => {
        const ue = [...he];
        return ue[z] = _e, ue[j] = K, ue;
      });
      return;
    }
    if (k.key === "End") {
      k.preventDefault();
      let _e = R[z] ?? 100;
      _e = Math.min(_e, ie - (T[j] ?? 0));
      let K = ie - _e;
      if (K = zn(
        K,
        T[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, T[z] ?? 0, R[z] ?? 100), !N(z, _e)) return;
      h((he) => {
        const ue = [...he];
        return ue[z] = _e, ue[j] = K, ue;
      });
      return;
    }
    if ((k.key === "Enter" || k.key === " ") && (we || le)) {
      k.preventDefault(), E(we ? z : j);
      return;
    }
    if (te !== 0) {
      k.preventDefault();
      let _e = F + te, K = ie - _e;
      const he = T[z] ?? 0, ue = R[z] ?? 100, ye = T[j] ?? 0, pe = R[j] ?? 100;
      if (_e = zn(_e, he, ue), K = ie - _e, (K < ye || K > pe) && (K = zn(K, ye, pe), _e = ie - K, _e = zn(_e, he, ue), K = ie - _e), !N(z, _e)) return;
      h((De) => {
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
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((w, k) => {
        const T = !!m[k], R = T ? 0 : g[k] ?? 100 / n.length, z = T ? { display: "none" } : f ? {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Br(w.min, 0), F = Br(w.max, 100), X = k < n.length - 1, ie = !!n[k + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": w.label ?? `Pane ${k + 1}`,
              className: un.pane,
              style: z,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : w.children,
                w.collapsible && !T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Collapse pane ${k + 1}`,
                    "aria-expanded": !T,
                    onClick: () => E(k),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                w.collapsible && T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Expand pane ${k + 1}`,
                    "aria-expanded": !T,
                    onClick: () => E(k),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && w.collapsible ? (
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
                onClick: () => E(k),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          X ? /* @__PURE__ */ D(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": j,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(R),
              "aria-label": `Resize handle ${k + 1}`,
              tabIndex: T || m[k + 1] ? -1 : 0,
              className: [
                un.handle,
                f ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => A(k, te),
              onPointerMove: I,
              onPointerUp: M,
              onKeyDown: (te) => $(k, te),
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
const Zw = "_root_1w3wd_1", Jw = "_list_1w3wd_5", Qw = "_vertical_1w3wd_14", ek = "_horizontal_1w3wd_20", tk = "_item_1w3wd_28", nk = "_link_1w3wd_32", rk = "_active_1w3wd_57", gr = {
  root: Zw,
  list: Jw,
  vertical: Qw,
  horizontal: ek,
  item: tk,
  link: nk,
  active: rk
};
function qO({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: i,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const c = t ?? n, f = r ?? l ?? "vertical", [u, x] = q(
    () => e[0]?.selector ?? null
  ), g = oe(u);
  g.current = u;
  const h = B(
    (m, y) => {
      if (x(m.selector), (i ?? d)?.({ text: m.text, selector: m.selector }), y) {
        try {
          y.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          y.scrollIntoView();
        }
        const _ = y;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return ve(() => {
    if (e.length === 0) return;
    const y = (() => {
      if (c) {
        const v = document.querySelector(c);
        if (v) return v;
      }
      return window;
    })();
    let p = null;
    const _ = /* @__PURE__ */ new Map(), b = () => {
      let v = null, E = null;
      for (const C of e) {
        const A = document.querySelector(C.selector);
        if (!A) continue;
        _.set(C.selector, A);
        const I = A.getBoundingClientRect();
        let M = I.top;
        if (y !== window) {
          const $ = y.getBoundingClientRect();
          M = I.top - $.top;
        }
        M <= 80 ? (!E || M > E.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && (E = { sel: C.selector, el: A }) : (!v || M < v.top) && (v = { sel: C.selector, top: M });
      }
      const S = E?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== g.current && x(S);
    }, N = () => {
      b();
    };
    if (typeof IntersectionObserver < "u") {
      const v = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver((E) => {
        const S = E.filter((C) => C.isIntersecting).sort((C, A) => C.boundingClientRect.top - A.boundingClientRect.top);
        if (S[0]) {
          const C = S[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === C) {
              x(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && C.id === A.selector.slice(1)) {
              x(A.selector);
              break;
            }
          }
        } else
          b();
      }, v);
      for (const E of e) {
        const S = document.querySelector(E.selector);
        S && (p.observe(S), _.set(E.selector, S));
      }
    }
    return y === window ? (window.addEventListener("scroll", N, { passive: !0 }), b(), () => {
      window.removeEventListener("scroll", N), p?.disconnect();
    }) : (y.addEventListener("scroll", N, {
      passive: !0
    }), b(), () => {
      y.removeEventListener("scroll", N), p?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [gr.root, gr[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: gr.list, children: e.map((m) => {
        const y = m.selector === u;
        return /* @__PURE__ */ s("li", { className: gr.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [gr.link, y ? gr.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(m.selector);
              h(m, _);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const sk = "_root_1bfit_1", ok = "_viewport_1bfit_17", lk = "_slide_1bfit_24", ak = "_active_1bfit_33", ik = "_arrow_1bfit_37", ck = "_prev_1bfit_71", dk = "_next_1bfit_75", uk = "_pauseBtn_1bfit_79", fk = "_indicators_1bfit_110", _k = "_indicator_1bfit_110", pk = "_indicatorActive_1bfit_145", fn = {
  root: sk,
  viewport: ok,
  slide: lk,
  active: ak,
  arrow: ik,
  prev: ck,
  next: dk,
  pauseBtn: uk,
  indicators: fk,
  indicator: _k,
  indicatorActive: pk
};
function WO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: i,
  interval: d,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: u,
  showIndicators: x,
  ShowIndicators: g,
  onChange: h,
  Change: m,
  ariaLabel: y = "Carousel",
  className: p
}) {
  const _ = t ?? n, b = _ !== void 0, [N, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), E = b ? _ : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, E), e.length - 1), C = l ?? i ?? !1, A = d ?? o ?? 3e3, I = a ?? c ?? !0, M = f ?? u ?? !0, $ = x ?? g ?? !0, [w, k] = q(!1), [T, R] = q(!1), z = w || T, j = oe(null), F = ot(), X = B(
    (ye) => {
      const pe = e.length === 0 ? 0 : (ye % e.length + e.length) % e.length;
      b || v(pe), (h ?? m)?.(pe);
    },
    [b, h, m, e.length]
  ), ie = B(() => {
    X(S - 1);
  }, [X, S]), te = B(() => {
    X(S + 1);
  }, [X, S]), we = B(
    (ye) => {
      X(ye);
    },
    [X]
  );
  ve(() => {
    if (!C || z || e.length <= 1) return;
    const ye = setInterval(() => {
      X(S + 1);
    }, A);
    return () => clearInterval(ye);
  }, [C, z, A, S, X, e.length]);
  const le = (ye) => {
    e.length !== 0 && (ye.key === "ArrowLeft" ? (ye.preventDefault(), ie()) : ye.key === "ArrowRight" ? (ye.preventDefault(), te()) : ye.key === "Home" ? (ye.preventDefault(), we(0)) : ye.key === "End" && (ye.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    I && C && R(!0);
  }, K = () => {
    I && C && R(!1);
  }, he = () => {
    I && C && R(!0);
  }, ue = () => {
    I && C && R(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ D(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [fn.root, p].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: _e,
      onMouseLeave: K,
      onFocusCapture: he,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: fn.viewport, children: e.map((ye, pe) => {
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
              children: ye
            },
            pe
          );
        }) }),
        M && e.length > 1 ? /* @__PURE__ */ D(pt, { children: [
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
        C ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: fn.pauseBtn,
            "aria-label": w ? "Resume" : "Pause",
            "aria-pressed": w,
            onClick: () => k((ye) => !ye),
            children: w ? "▶" : "⏸"
          }
        ) : null,
        $ && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: fn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ye, pe) => {
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
const mk = "_root_1aa5u_1", hk = "_group_1aa5u_20", gk = "_itemWrapper_1aa5u_30", bk = "_treeitem_1aa5u_34", yk = "_disabled_1aa5u_50", xk = "_selected_1aa5u_60", vk = "_caret_1aa5u_66", wk = "_caretIcon_1aa5u_113", kk = "_caretOpen_1aa5u_120", Nk = "_caretPlaceholder_1aa5u_124", Sk = "_label_1aa5u_130", Ok = "_loading_1aa5u_137", $k = "_loadingRow_1aa5u_143", Ek = "_empty_1aa5u_149", Tk = "_checkbox_1aa5u_155", Mt = {
  root: mk,
  group: hk,
  itemWrapper: gk,
  treeitem: bk,
  disabled: yk,
  selected: xk,
  caret: vk,
  caretIcon: wk,
  caretOpen: kk,
  caretPlaceholder: Nk,
  label: Sk,
  loading: Ok,
  loadingRow: $k,
  empty: Ek,
  checkbox: Tk
};
function Ck({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ve(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function KO({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: i,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: x,
  SelectedItems: g,
  defaultSelectedItem: h,
  defaultSelectedItems: m,
  onChange: y,
  Change: p,
  onExpand: _,
  Expand: b,
  onCollapse: N,
  Collapse: v,
  loadChildData: E,
  LoadChildData: S,
  template: C,
  Template: A,
  itemTemplate: I,
  ItemTemplate: M,
  ariaLabel: $,
  AriaLabel: w,
  allowCheckBoxes: k = !1,
  checkedKeys: T,
  defaultCheckedKeys: R,
  onCheckedChange: z,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = l ?? i ?? "text", we = d ?? o ?? "id", le = a ?? c ?? "single", _e = $ ?? w ?? "Tree", K = E ?? S, he = C ?? A ?? I ?? M, ue = B(
    (W) => {
      const ee = W[we];
      return ee != null ? String(ee) : String(W.id ?? "");
    },
    [we]
  ), ye = B(
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
  ), [ne, Ae] = q(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = q(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = x ?? g, yt = le === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
    if (le === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((de) => ue(de)));
      const W = /* @__PURE__ */ new Set(), ee = (de) => {
        for (const Ne of de) {
          Ne.selected && W.add(ue(Ne));
          const ke = pe(Ne);
          ke && ee(ke);
        }
      };
      return ee(X), W;
    } else {
      if (h) return /* @__PURE__ */ new Set([ue(h)]);
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
    le,
    h,
    m,
    ue,
    pe,
    X
  ]), [L, Y] = q(
    () => Z()
  ), Q = Oe(() => {
    if (le === "multiple") {
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
    le,
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
          const Ke = ne.get(ue(ke)) ?? pe(ke);
          if (Ke && de(Ke)) return !0;
        }
        return !1;
      };
      if (de(X), !ee) {
        for (const Ne of ne.values())
          if (de(Ne)) break;
      }
      return ee;
    },
    [X, ne, ue, pe]
  ), ae = B(() => {
    const W = /* @__PURE__ */ new Map(), ee = (de) => {
      for (const Ne of de) {
        const ke = ue(Ne);
        W.set(ke, Ne);
        const Ke = ne.get(ke) ?? pe(Ne);
        Ke && ee(Ke);
      }
    };
    return ee(X), W;
  }, [X, ne, ue, pe]), Ee = B(
    (W) => {
      const ee = ue(W);
      if (!W.disabled)
        if (le === "multiple") {
          const Ne = new Set(Q);
          Ne.has(ee) ? Ne.delete(ee) : Ne.add(ee), yt || Y(Ne);
          const ke = y ?? p;
          if (ke) {
            const Ce = ae(), Ke = [];
            for (const Be of Ne) {
              const it = Ce.get(Be) ?? ge(Be);
              it && Ke.push(it);
            }
            ke({ item: W, selectedItems: Ke });
          }
        } else if (!Q.has(ee) || Q.size !== 1 || !Q.has(ee)) {
          yt || Y(/* @__PURE__ */ new Set([ee]));
          const ke = y ?? p;
          ke && ke({ item: W, selectedItem: W });
        } else {
          const ke = y ?? p;
          ke && ke({ item: W, selectedItem: W });
        }
    },
    [
      ue,
      le,
      Q,
      yt,
      y,
      p,
      ae,
      ge
    ]
  ), je = B(
    async (W) => {
      const ee = ue(W);
      if (!!W.disabled) return;
      const Ne = G.has(ee), ke = _ ?? b, Ce = N ?? v, Ke = pe(W), it = ne.get(ee) ?? Ke, Et = !(it !== void 0 && it.length > 0) && K != null;
      if (Ne) {
        $e((mt) => {
          const ze = new Set(mt);
          return ze.delete(ee), ze;
        }), Ce?.({ item: W });
        return;
      }
      if (Et) {
        if (fe.has(ee)) return;
        Fe((mt) => {
          const ze = new Set(mt);
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
          Fe((mt) => {
            const ze = new Set(mt);
            return ze.delete(ee), ze;
          });
        }
        return;
      }
      $e((mt) => {
        const ze = new Set(mt);
        return ze.add(ee), ze;
      }), ke?.({ item: W });
    },
    [
      ue,
      G,
      pe,
      ne,
      K,
      fe,
      _,
      b,
      N,
      v
    ]
  ), Ze = Oe(() => {
    const W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const Ke of ke) {
        const Be = ue(Ke);
        W.has(Be) || W.set(Be, []), ee.set(Be, Ce), Ke.disabled && de.add(Be);
        const rt = ne.get(Be) ?? pe(Ke);
        rt && rt.length > 0 && (W.set(
          Be,
          rt.map((Et) => ue(Et))
        ), Ne(rt, Be));
      }
    };
    return Ne(X, null), { childrenOf: W, parentOf: ee, disabledKeys: de };
  }, [X, ne, ue, pe]), Qe = B(
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
  ), re = T !== void 0 ? new Set(T) : nt, Le = B(
    (W) => {
      const ee = Ze.disabledKeys;
      return Qe(W).filter((de) => !ee.has(de));
    },
    [Qe, Ze]
  ), Nt = B(
    (W) => {
      if (re.has(W)) return !0;
      if (!k || !j) return !1;
      const ee = Le(W);
      return ee.length > 0 && ee.every((de) => re.has(de));
    },
    [re, k, j, Le]
  ), Rt = B(
    (W) => {
      if (!k || !j || re.has(W))
        return !1;
      const ee = Le(W);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => re.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [re, k, j, Le]
  ), xt = B(
    (W) => {
      if (!k || W.disabled) return;
      const ee = ue(W), de = new Set(re);
      if (de.has(ee) || Nt(ee)) {
        if (de.delete(ee), j)
          for (const Ne of Le(ee)) de.delete(Ne);
      } else if (de.add(ee), j)
        for (const Ne of Le(ee)) de.add(Ne);
      T === void 0 && Xt(de), z?.([...de]);
    },
    [
      k,
      j,
      T,
      re,
      Le,
      ue,
      Nt,
      z
    ]
  ), Ie = Oe(() => {
    const W = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, Ke) => {
        const Be = ue(Ce), it = ye(Ce), rt = ne.get(Be) ?? pe(Ce);
        let Et;
        ne.has(Be) ? Et = ne.get(Be).length > 0 : rt !== void 0 ? Et = rt.length > 0 : K ? Et = !0 : Et = !1;
        const mt = G.has(Be), ze = !!Ce.disabled, Tt = de.length, Zt = Ke + 1;
        if (W.push({
          item: Ce,
          key: Be,
          text: it,
          level: Ne,
          posInSet: Zt,
          setSize: Tt,
          hasChildren: Et,
          expanded: mt,
          parentKey: ke,
          disabled: ze
        }), Et && mt) {
          const pn = ne.get(Be) ?? rt;
          pn && pn.length > 0 && ee(pn, Ne + 1, Be);
        }
      });
    };
    return ee(X, 1, null), W;
  }, [
    X,
    ue,
    ye,
    pe,
    ne,
    G,
    K,
    fe
  ]), [We, vt] = q(
    () => Ie[0]?.key ?? null
  ), $t = oe(""), at = oe(null), V = oe(null);
  ve(() => {
    if (!We && Ie.length > 0) {
      const W = Ie[0];
      W && vt(W.key);
    } else if (We && !Ie.some((W) => W.key === We)) {
      const W = Ie[0];
      vt(W ? W.key : null);
    }
  }, [Ie, We]), ve(() => {
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
  const me = B((W) => {
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
        Ne && me(Ne);
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
        Ne && me(Ne);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !de) return;
        if (de.hasChildren && !de.expanded)
          je(de.item);
        else if (de.hasChildren && de.expanded) {
          const ke = ee + 1, Ce = Ie[ke];
          Ce && Ce.parentKey === de.key && me(Ce.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !de) return;
        if (de.hasChildren && de.expanded)
          je(de.item);
        else {
          const ke = Ve(de.key);
          ke && me(ke);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const ke = Ie[0];
        ke && me(ke.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const ke = Ie[Ie.length - 1];
        ke && me(ke.key);
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
        $t.current = ke, at.current && clearTimeout(at.current), at.current = setTimeout(() => {
          $t.current = "";
        }, 500);
        const Ce = ee >= 0 ? ee + 1 : 0, it = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((rt) => rt.text.toLowerCase().startsWith(ke));
        it && me(it.key);
        return;
      }
    },
    [
      Ie,
      We,
      me,
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
    const Ce = ue(Ne), Ke = ye(Ne), Be = ne.get(Ce) ?? pe(Ne);
    let it;
    ne.has(Ce) ? it = ne.get(Ce).length > 0 : Be !== void 0 ? it = Be.length > 0 : K ? it = !0 : it = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), mt = !!Ne.disabled, ze = fe.has(Ce), Tt = We === Ce, Zt = W.length, pn = ke + 1, Tn = he ? he(Ne) : Ke, Bn = k ? {
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
          "aria-expanded": it ? rt : void 0,
          "aria-selected": Et,
          "aria-level": ee,
          "aria-setsize": Zt,
          "aria-posinset": pn,
          "aria-disabled": mt || void 0,
          "aria-busy": ze || void 0,
          className: [
            Mt.treeitem,
            Et ? Mt.selected : null,
            mt ? Mt.disabled : null,
            Tt ? Mt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            me(Ce), mt || Ee(Ne);
          },
          onFocus: () => vt(Ce),
          children: [
            k ? /* @__PURE__ */ s(
              Ck,
              {
                className: Mt.checkbox,
                checked: Bn?.checked ?? !1,
                indeterminate: Bn?.indeterminate ?? !1,
                disabled: mt,
                "aria-label": `Select ${Ke}`,
                onClick: (wn) => wn.stopPropagation(),
                onChange: () => xt(Ne)
              }
            ) : null,
            it ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Mt.caret,
                "aria-label": `${rt ? "Collapse" : "Expand"} ${Ke}`,
                "aria-expanded": rt,
                tabIndex: -1,
                disabled: mt,
                onClick: (wn) => {
                  wn.stopPropagation(), me(Ce), je(Ne);
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
      it && rt ? ze ? /* @__PURE__ */ s("div", { className: Mt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : ne.has(Ce) && ne.get(Ce).length > 0 ? Xe(
        ne.get(Ce),
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
      "aria-multiselectable": le === "multiple" || void 0,
      tabIndex: 0,
      className: [Mt.root, F].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: X.length === 0 ? /* @__PURE__ */ s("div", { className: Mt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const Ak = "_root_10fdq_1", Dk = "_panel_10fdq_8", Mk = "_header_10fdq_19", Ik = "_listbox_10fdq_28", zk = "_option_10fdq_42", Lk = "_disabled_10fdq_57", Rk = "_active_10fdq_66", Pk = "_selected_10fdq_70", jk = "_empty_10fdq_86", Bk = "_controls_10fdq_93", Fk = "_reorder_10fdq_102", Hk = "_btn_10fdq_110", tt = {
  root: Ak,
  panel: Dk,
  header: Mk,
  listbox: Ik,
  option: zk,
  disabled: Lk,
  active: Rk,
  selected: Pk,
  empty: jk,
  controls: Bk,
  reorder: Fk,
  btn: Hk
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function fs(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function GO({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: i,
  targetValue: d,
  TargetValue: o,
  data: a,
  Data: c,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: x,
  TargetChange: g,
  keyProperty: h,
  KeyProperty: m,
  onMove: y,
  Move: p,
  ariaLabel: _,
  AriaLabel: b,
  className: N
}) {
  const v = h ?? m ?? "id", E = _ ?? b ?? "PickList", S = e ?? t ?? l ?? i ?? a ?? c ?? [], C = n ?? r ?? d ?? o ?? [], [A, I] = q(() => [
    ...S
  ]), [M, $] = q(() => [
    ...C
  ]);
  ve(() => {
    const L = e ?? t ?? l ?? i ?? a ?? c;
    L !== void 0 && I([...L]);
  }, [e, t, l, i, a, c]), ve(() => {
    const L = n ?? r ?? d ?? o;
    L !== void 0 && $([...L]);
  }, [n, r, d, o]);
  const [w, k] = q(
    () => /* @__PURE__ */ new Set()
  ), [T, R] = q(
    () => /* @__PURE__ */ new Set()
  ), [z, j] = q(() => {
    const L = S.findIndex((Y) => !Y.disabled);
    return L >= 0 ? L : 0;
  }), [F, X] = q(() => {
    const L = C.findIndex((Y) => !Y.disabled);
    return L >= 0 ? L : 0;
  }), ie = Oe(
    () => A.map((L, Y) => L.disabled ? -1 : Y).filter((L) => L >= 0),
    [A]
  ), te = Oe(
    () => M.map((L, Y) => L.disabled ? -1 : Y).filter((L) => L >= 0),
    [M]
  );
  ve(() => {
    if (z >= A.length) {
      const L = ie[ie.length - 1];
      j(L ?? 0);
    } else if (A.length > 0 && ie.length > 0 && !ie.includes(z)) {
      const L = ie[0];
      L !== void 0 && j(L);
    }
  }, [z, A.length, ie]), ve(() => {
    if (F >= M.length) {
      const L = te[te.length - 1];
      X(L ?? 0);
    } else if (M.length > 0 && te.length > 0 && !te.includes(F)) {
      const L = te[0];
      L !== void 0 && X(L);
    }
  }, [F, M.length, te]), ve(() => {
    k((L) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of L)
        A.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [A, v]), ve(() => {
    R((L) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of L)
        M.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [M, v]);
  const we = B(
    (L) => {
      (f ?? u)?.(L);
    },
    [f, u]
  ), le = B(
    (L) => {
      (x ?? g)?.(L);
    },
    [x, g]
  ), _e = B(
    (L) => {
      (y ?? p)?.(L);
    },
    [y, p]
  ), K = B(
    (L) => {
      const Y = A[L];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      k((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), j(L);
    },
    [A, v]
  ), he = B(
    (L) => {
      const Y = M[L];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      R((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), X(L);
    },
    [M, v]
  ), ue = B(() => {
    const L = [], Y = [];
    for (const Ee of A) {
      const je = It(Ee, v);
      w.has(je) && !Ee.disabled ? L.push(Ee) : Y.push(Ee);
    }
    if (L.length === 0) return;
    const Q = Y, ge = [...M, ...L];
    I(Q), $(ge), k(/* @__PURE__ */ new Set());
    const ae = new Set(L.map((Ee) => It(Ee, v)));
    R(ae), we(Q), le(ge), _e({
      source: Q,
      target: ge,
      moved: L,
      direction: "toTarget"
    });
  }, [
    A,
    M,
    w,
    v,
    we,
    le,
    _e
  ]), ye = B(() => {
    const L = [], Y = [];
    for (const Ee of M) {
      const je = It(Ee, v);
      T.has(je) && !Ee.disabled ? L.push(Ee) : Y.push(Ee);
    }
    if (L.length === 0) return;
    const Q = Y, ge = [...A, ...L];
    $(Q), I(ge), R(/* @__PURE__ */ new Set());
    const ae = new Set(L.map((Ee) => It(Ee, v)));
    k(ae), we(ge), le(Q), _e({
      source: ge,
      target: Q,
      moved: L,
      direction: "toSource"
    });
  }, [
    A,
    M,
    T,
    v,
    we,
    le,
    _e
  ]), pe = B(() => {
    const L = A.filter((ge) => !ge.disabled);
    if (L.length === 0) return;
    const Y = A.filter((ge) => !!ge.disabled), Q = [...M, ...L];
    I(Y), $(Q), k(/* @__PURE__ */ new Set()), we(Y), le(Q), _e({
      source: Y,
      target: Q,
      moved: L,
      direction: "allToTarget"
    });
  }, [
    A,
    M,
    v,
    we,
    le,
    _e
  ]), De = B(() => {
    const L = M.filter((ge) => !ge.disabled);
    if (L.length === 0) return;
    const Y = M.filter((ge) => !!ge.disabled), Q = [...A, ...L];
    $(Y), I(Q), R(/* @__PURE__ */ new Set()), we(Q), le(Y), _e({
      source: Q,
      target: Y,
      moved: L,
      direction: "allToSource"
    });
  }, [A, M, we, le, _e]), G = B(() => {
    if (T.size === 0) return;
    const L = [...M], Y = T, Q = [];
    for (let ae = 1; ae < L.length; ae++) {
      const Ee = L[ae], je = L[ae - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (L[ae - 1] = Ee, L[ae] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    $(L), le(L), _e({ source: A, target: L, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = L.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    M,
    T,
    v,
    A,
    le,
    _e
  ]), $e = B(() => {
    if (T.size === 0) return;
    const L = [...M], Y = T, Q = [];
    for (let ae = L.length - 2; ae >= 0; ae--) {
      const Ee = L[ae], je = L[ae + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (L[ae] = je, L[ae + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    $(L), le(L), _e({ source: A, target: L, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = L.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    M,
    T,
    v,
    A,
    le,
    _e
  ]), ne = w.size > 0, Ae = T.size > 0, fe = oe(""), Fe = oe(
    null
  ), Ge = oe(""), Je = oe(
    null
  ), At = B(
    (L) => {
      if (A.length === 0) return;
      const Y = ie;
      if (Y.length === 0) return;
      const Q = Y.includes(z) ? z : Y[0] ?? 0;
      let ge = -1;
      if (L.key === "ArrowDown") {
        L.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "ArrowUp") {
        L.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "Home")
        L.preventDefault(), ge = Y[0] ?? 0;
      else if (L.key === "End")
        L.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (L.key === "Enter" || L.key === " ") {
        L.preventDefault(), K(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(L.key)) {
        L.preventDefault();
        const ae = (fe.current + L.key).toLowerCase();
        fe.current = ae, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => fs(A[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [A, ie, z, K]
  ), lt = B(
    (L) => {
      if (M.length === 0) return;
      const Y = te;
      if (Y.length === 0) return;
      const Q = Y.includes(F) ? F : Y[0] ?? 0;
      let ge = -1;
      if (L.key === "ArrowDown") {
        L.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "ArrowUp") {
        L.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (L.key === "Home")
        L.preventDefault(), ge = Y[0] ?? 0;
      else if (L.key === "End")
        L.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (L.key === "Enter" || L.key === " ") {
        L.preventDefault(), he(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(L.key)) {
        L.preventDefault();
        const ae = (Ge.current + L.key).toLowerCase();
        Ge.current = ae, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => fs(M[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && X(Ze);
        return;
      }
      ge >= 0 && X(ge);
    },
    [M, te, F, he]
  ), yt = oe(null), Z = oe(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [tt.root, N].filter(Boolean).join(" "),
      "aria-label": E,
      children: [
        /* @__PURE__ */ D("div", { className: tt.panel, children: [
          /* @__PURE__ */ s("div", { className: tt.header, children: "Source" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: yt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: tt.listbox,
              onKeyDown: At,
              children: A.length === 0 ? (
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
              ) : A.map((L, Y) => {
                const Q = It(L, v), ge = w.has(Q), ae = Y === z, Ee = !!L.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": ae || void 0,
                    className: [
                      tt.option,
                      ge ? tt.selected : null,
                      ae ? tt.active : null,
                      Ee ? tt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => K(Y),
                    children: fs(L)
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
              "aria-disabled": !ne || void 0,
              disabled: !ne,
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
              "aria-disabled": A.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: A.filter((L) => !L.disabled).length === 0,
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
              "aria-disabled": A.filter((L) => !L.disabled).length === 0 || void 0,
              disabled: A.filter((L) => !L.disabled).length === 0,
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
              onClick: ye,
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
                const Q = It(L, v), ge = T.has(Q), ae = Y === F, Ee = !!L.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": ae || void 0,
                    className: [
                      tt.option,
                      ge ? tt.selected : null,
                      ae ? tt.active : null,
                      Ee ? tt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => he(Y),
                    children: fs(L)
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
const Uk = "_root_1qxsp_1", qk = "_header_1qxsp_8", Wk = "_title_1qxsp_15", Kk = "_navBtn_1qxsp_20", Gk = "_resources_1qxsp_39", Vk = "_resource_1qxsp_39", Yk = "_grid_1qxsp_50", Xk = "_timeCol_1qxsp_55", Zk = "_timeCell_1qxsp_61", Jk = "_dayCol_1qxsp_66", Qk = "_dayHeader_1qxsp_73", eN = "_slot_1qxsp_81", tN = "_event_1qxsp_91", Gt = {
  root: Uk,
  header: qk,
  title: Wk,
  navBtn: Kk,
  resources: Gk,
  resource: Vk,
  grid: Yk,
  timeCol: Xk,
  timeCell: Zk,
  dayCol: Jk,
  dayHeader: Qk,
  slot: eN,
  event: tN
};
function pl(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function VO({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: i,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [c, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, x = (m) => {
    n || f(m), r?.(m);
  }, g = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, y) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + y), p;
  }) : Array.from({ length: 30 }, (m, y) => {
    const p = new Date(u);
    return p.setDate(1 + y), p;
  }), h = Array.from({ length: 12 }, (m, y) => 8 + y);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Gt.root, a].filter(Boolean).join(" "),
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
                const m = new Date(u);
                m.setDate(m.getDate() - 7), x(m);
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
                const m = new Date(u);
                m.setDate(m.getDate() + 7), x(m);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: Gt.resources, children: l.map((m) => /* @__PURE__ */ s(
          "div",
          {
            className: Gt.resource,
            role: "presentation",
            "aria-label": m.name,
            children: m.name
          },
          m.id
        )) }),
        /* @__PURE__ */ D("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: Gt.timeCol, role: "presentation", children: h.map((m) => /* @__PURE__ */ D("div", { className: Gt.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          g.map((m) => /* @__PURE__ */ D(
            "div",
            {
              className: Gt.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: Gt.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                h.map((y) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(m);
                      p.setHours(y), d?.({ date: p });
                    }
                  },
                  y
                )),
                e.filter((y) => y.start.toDateString() === m.toDateString()).map((y) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${y.title} ${pl(y.start)} - ${pl(y.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: y }),
                    children: y.title
                  },
                  y.id
                ))
              ]
            },
            m.toISOString()
          ))
        ] })
      ]
    }
  );
}
const nN = "_root_dj5ne_1", rN = "_header_dj5ne_8", sN = "_headerCell_dj5ne_15", oN = "_timeline_dj5ne_21", lN = "_row_dj5ne_26", aN = "_taskName_dj5ne_32", iN = "_timelineCell_dj5ne_37", cN = "_bar_dj5ne_43", dN = "_progress_dj5ne_56", uN = "_dep_dj5ne_61", En = {
  root: nN,
  header: rN,
  headerCell: sN,
  timeline: oN,
  row: lN,
  taskName: aN,
  timelineCell: iN,
  bar: cN,
  progress: dN,
  dep: uN
};
function YO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [i, d] = q(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [En.root, l].filter(Boolean).join(" "),
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
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(o.id), n?.({ task: o }));
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
                o.dependencies?.map((a) => /* @__PURE__ */ s("svg", { className: En.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, a))
              ] })
            ]
          },
          o.id
        ))
      ]
    }
  );
}
const fN = "_root_4b64f_1", _N = "_fields_4b64f_6", pN = "_chip_4b64f_13", mN = "_table_4b64f_35", hN = "_totalRow_4b64f_55", gN = "_total_4b64f_55", br = {
  root: fN,
  fields: _N,
  chip: pN,
  table: mN,
  totalRow: hN,
  total: gN
}, _s = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Fr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function XO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const o = t, a = n, c = r, f = (y, p, _) => {
    const b = y === "row" ? o.filter((E) => E.property !== p) : o, N = y === "col" ? a.filter((E) => E.property !== p) : a, v = y === "agg" ? c.filter((E) => !(E.property === p && E.aggregate === _)) : c;
    l?.({
      rowFields: b,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (y, p) => p.map((_) => String(y[_.property])).join(""), x = [
    ...new Set(o.length ? e.map((y) => u(y, o)) : [""])
  ].sort(), g = [
    ...new Set(a.length ? e.map((y) => u(y, a)) : [""])
  ].sort(), h = (y, p, _) => {
    const b = e.filter(
      (v) => u(v, o) === y && u(v, a) === p
    ), N = b.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !N.length && _.aggregate !== "Count" ? 0 : _s[_.aggregate](
      _.aggregate === "Count" ? b.map(() => 1) : N
    );
  }, m = (y, p, _, b) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: br.chip,
      "aria-label": `Remove ${y} field ${_}`,
      onClick: () => f(y, p, b),
      children: [
        _,
        b ? ` (${b})` : ""
      ]
    },
    `${y}-${_}-${b ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [br.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: br.fields, children: [
      o.map((y) => m("row", y.property, y.title ?? y.property)),
      a.map((y) => m("col", y.property, y.title ?? y.property)),
      c.map(
        (y) => m("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: br.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        g.map((y) => /* @__PURE__ */ s("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        x.map((y) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: y || "—" }),
          g.map((p) => /* @__PURE__ */ s(
            "td",
            {
              title: Fr(
                h(
                  y,
                  p,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? Fr(h(y, p, c[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ s("td", { className: br.total, children: c.length ? Fr(
            _s[c[0].aggregate](
              g.flatMap(
                (p) => e.filter(
                  (_) => u(_, o) === y && u(_, a) === p
                ).map((_) => Number(_[c[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ D("tr", { className: br.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          g.map((y) => /* @__PURE__ */ s("td", { children: c.length ? Fr(
            _s[c[0].aggregate](
              e.filter((p) => u(p, a) === y).map((p) => Number(p[c[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, y)),
          /* @__PURE__ */ s("td", { children: c.length ? Fr(
            _s[c[0].aggregate](
              e.map((y) => Number(y[c[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const bN = "_root_1r7co_1", yN = "_reverse_1r7co_10", xN = "_item_1r7co_14", vN = "_marker_1r7co_35", wN = "_body_1r7co_46", kN = "_label_1r7co_50", NN = "_content_1r7co_56", nr = {
  root: bN,
  reverse: yN,
  item: xN,
  marker: vN,
  body: wN,
  label: kN,
  content: NN
};
function ZO({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [nr.root, t ? nr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((i, d) => /* @__PURE__ */ D("li", { className: nr.item, children: [
        /* @__PURE__ */ s("span", { className: nr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: nr.body, children: [
          /* @__PURE__ */ s("div", { className: nr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ s("div", { className: nr.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const SN = "_root_rm4d8_1", ON = "_header_rm4d8_13", $N = "_headCell_rm4d8_22", EN = "_row_rm4d8_32", TN = "_cell_rm4d8_37", Hr = {
  root: SN,
  header: ON,
  headCell: $N,
  row: EN,
  cell: TN
};
function JO({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [o, a] = q(
    /* @__PURE__ */ new Map()
  ), [c, f] = q(0), u = oe(/* @__PURE__ */ new Set()), x = Math.ceil(n / t), g = Math.max(0, Math.floor(c / t) - 3), h = Math.min(e, g + x + 6), m = B(
    (p, _) => {
      let b = !1;
      for (let N = p; N < _; N++)
        !o.has(N) && !u.current.has(N) && (b = !0);
      if (b) {
        for (let N = p; N < _; N++) u.current.add(N);
        r({ skip: p, top: _ }).then((N) => {
          a((v) => {
            const E = new Map(v);
            return N.forEach((S, C) => E.set(p + C, S)), E;
          });
          for (let v = p; v < _; v++) u.current.delete(v);
        });
      }
    },
    [o, r]
  );
  ve(() => {
    m(g, h);
  }, [g, h]);
  const y = [];
  for (let p = g; p < h; p++) {
    const _ = o.get(p) ?? {};
    y.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Hr.row,
          role: "row",
          style: { height: t },
          children: l.map((b) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Hr.cell,
              style: b.width ? { width: b.width } : void 0,
              children: String(_[b.property] ?? "")
            },
            b.property
          ))
        },
        p
      )
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Hr.root, d].filter(Boolean).join(" "),
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
        /* @__PURE__ */ s("div", { style: { height: g * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Hr.header, role: "row", children: l.map((p) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Hr.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
        )) }),
        y,
        /* @__PURE__ */ s(
          "div",
          {
            style: { height: Math.max(0, (e - h) * t) },
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
    constructor(o, a, c, f) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let u = [];
      for (let g = 0; g < this.size; g++) u.push(!1);
      for (let g = 0; g < this.size; g++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const x = this.addEccAndInterleave(c);
      if (this.drawCodewords(x), f == -1) {
        let g = 1e9;
        for (let h = 0; h < 8; h++) {
          this.applyMask(h), this.drawFormatBits(h);
          const m = this.getPenaltyScore();
          m < g && (f = h, g = m), this.applyMask(h);
        }
      }
      l(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(o, a) {
      const c = e.QrSegment.makeSegments(o);
      return t.encodeSegments(c, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, a) {
      const c = e.QrSegment.makeBytes(o);
      return t.encodeSegments([c], a);
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
    static encodeSegments(o, a, c = 1, f = 40, u = -1, x = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let g, h;
      for (g = c; ; g++) {
        const _ = t.getNumDataCodewords(g, a) * 8, b = i.getTotalBits(o, g);
        if (b <= _) {
          h = b;
          break;
        }
        if (g >= f)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && h <= t.getNumDataCodewords(g, _) * 8 && (a = _);
      let m = [];
      for (const _ of o) {
        n(_.mode.modeBits, 4, m), n(_.numChars, _.mode.numCharCountBits(g), m);
        for (const b of _.getData()) m.push(b);
      }
      l(m.length == h);
      const y = t.getNumDataCodewords(g, a) * 8;
      l(m.length <= y), n(0, Math.min(4, y - m.length), m), n(0, (8 - m.length % 8) % 8, m), l(m.length % 8 == 0);
      for (let _ = 236; m.length < y; _ ^= 253)
        n(_, 8, m);
      let p = [];
      for (; p.length * 8 < m.length; ) p.push(0);
      return m.forEach(
        (_, b) => p[b >>> 3] |= _ << 7 - (b & 7)
      ), new t(g, a, p, u);
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
    getModule(o, a) {
      return 0 <= o && o < this.size && 0 <= a && a < this.size && this.modules[a][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), a = o.length;
      for (let c = 0; c < a; c++)
        for (let f = 0; f < a; f++)
          c == 0 && f == 0 || c == 0 && f == a - 1 || c == a - 1 && f == 0 || this.drawAlignmentPattern(o[c], o[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let c = a;
      for (let u = 0; u < 10; u++) c = c << 1 ^ (c >>> 9) * 1335;
      const f = (a << 10 | c) ^ 21522;
      l(f >>> 15 == 0);
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
      for (let c = 0; c < 12; c++) o = o << 1 ^ (o >>> 11) * 7973;
      const a = this.version << 12 | o;
      l(a >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = r(a, c), u = this.size - 11 + c % 3, x = Math.floor(c / 3);
        this.setFunctionModule(u, x, f), this.setFunctionModule(x, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), x = o + f, g = a + c;
          0 <= x && x < this.size && 0 <= g && g < this.size && this.setFunctionModule(x, g, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            o + f,
            a + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, a, c) {
      this.modules[a][o] = c, this.isFunction[a][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const a = this.version, c = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(a, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], x = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), g = f - x % f, h = Math.floor(x / f);
      let m = [];
      const y = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, b = 0; _ < f; _++) {
        let N = o.slice(
          b,
          b + h - u + (_ < g ? 0 : 1)
        );
        b += N.length;
        const v = t.reedSolomonComputeRemainder(N, y);
        _ < g && N.push(0), m.push(N.concat(v));
      }
      let p = [];
      for (let _ = 0; _ < m[0].length; _++)
        m.forEach((b, N) => {
          (_ != h - u || N >= g) && p.push(b[_]);
        });
      return l(p.length == x), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const x = c - u, h = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[h][x] && a < o.length * 8 && (this.modules[h][x] = r(o[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (o) {
            case 0:
              f = (c + a) % 2 == 0;
              break;
            case 1:
              f = a % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + a) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              f = c * a % 2 + c * a % 3 == 0;
              break;
            case 6:
              f = (c * a % 2 + c * a % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + a) % 2 + c * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][c] && f && (this.modules[a][c] = !this.modules[a][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let u = 0; u < this.size; u++) {
        let x = !1, g = 0, h = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == x ? (g++, g == 5 ? o += t.PENALTY_N1 : g > 5 && o++) : (this.finderPenaltyAddHistory(g, h), x || (o += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), x = this.modules[u][m], g = 1);
        o += this.finderPenaltyTerminateAndCount(x, g, h) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let x = !1, g = 0, h = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == x ? (g++, g == 5 ? o += t.PENALTY_N1 : g > 5 && o++) : (this.finderPenaltyAddHistory(g, h), x || (o += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), x = this.modules[m][u], g = 1);
        o += this.finderPenaltyTerminateAndCount(x, g, h) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let x = 0; x < this.size - 1; x++) {
          const g = this.modules[u][x];
          g == this.modules[u][x + 1] && g == this.modules[u + 1][x] && g == this.modules[u + 1][x + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((x, g) => x + (g ? 1 : 0), a);
      const c = this.size * this.size, f = Math.ceil(Math.abs(a * 20 - c * 10) / c) - 1;
      return l(0 <= f && f <= 9), o += f * t.PENALTY_N4, l(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, a = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < o; f -= a)
          c.splice(1, 0, f);
        return c;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const c = Math.floor(o / 7) + 2;
        a -= (25 * c - 10) * c - 55, o >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, a) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let f = 0; f < o - 1; f++) a.push(0);
      a.push(1);
      let c = 1;
      for (let f = 0; f < o; f++) {
        for (let u = 0; u < a.length; u++)
          a[u] = t.reedSolomonMultiply(a[u], c), u + 1 < a.length && (a[u] ^= a[u + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let c = a.map((f) => 0);
      for (const f of o) {
        const u = f ^ c.shift();
        c.push(0), a.forEach(
          (x, g) => c[g] ^= t.reedSolomonMultiply(x, u)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, a) {
      if (o >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (a >>> f & 1) * o;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const a = o[1];
      l(a <= this.size * 3);
      const c = a > 0 && o[2] == a && o[3] == a * 3 && o[4] == a && o[5] == a;
      return (c && o[0] >= a * 4 && o[6] >= a ? 1 : 0) + (c && o[6] >= a * 4 && o[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, a, c) {
      return o && (this.finderPenaltyAddHistory(a, c), a = 0), a += this.size, this.finderPenaltyAddHistory(a, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, a) {
      a[0] == 0 && (o += this.size), a.pop(), a.unshift(o);
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
  function n(d, o, a) {
    if (o < 0 || o > 31 || d >>> o)
      throw new RangeError("Value out of range");
    for (let c = o - 1; c >= 0; c--)
      a.push(d >>> c & 1);
  }
  function r(d, o) {
    return (d >>> o & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, a, c) {
      if (this.mode = o, this.numChars = a, this.bitData = c, a < 0) throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let a = [];
      for (const c of o) n(c, 8, a);
      return new i(i.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!i.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let c = 0; c < o.length; ) {
        const f = Math.min(o.length - c, 3);
        n(parseInt(o.substring(c, c + f), 10), f * 3 + 1, a), c += f;
      }
      return new i(i.Mode.NUMERIC, o.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!i.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], c;
      for (c = 0; c + 2 <= o.length; c += 2) {
        let f = i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c + 1)), n(f, 11, a);
      }
      return c < o.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)),
        6,
        a
      ), new i(i.Mode.ALPHANUMERIC, o.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : i.isNumeric(o) ? [i.makeNumeric(o)] : i.isAlphanumeric(o) ? [i.makeAlphanumeric(o)] : [i.makeBytes(i.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let a = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, a);
      else if (o < 16384)
        n(2, 2, a), n(o, 14, a);
      else if (o < 1e6)
        n(6, 3, a), n(o, 21, a);
      else throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, a);
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
    static getTotalBits(o, a) {
      let c = 0;
      for (const f of o) {
        const u = f.mode.numCharCountBits(a);
        if (f.numChars >= 1 << u) return 1 / 0;
        c += 4 + u + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let a = [];
      for (let c = 0; c < o.length; c++)
        o.charAt(c) != "%" ? a.push(o.charCodeAt(c)) : (a.push(parseInt(o.substring(c + 1, c + 3), 16)), c += 2);
      return a;
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
      constructor(l, i) {
        this.ordinal = l, this.formatBits = i;
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
      constructor(l, i) {
        this.modeBits = l, this.numBitsCharCount = i;
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
      numCharCountBits(l) {
        return this.numBitsCharCount[Math.floor((l + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(vn || (vn = {}));
const CN = "_root_1leml_1", AN = {
  root: CN
}, DN = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function QO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: o
}) {
  const a = i ?? `QR code for ${e}`, c = oe(null), f = oo("(prefers-color-scheme: dark)"), [u, x] = q(null);
  ve(() => {
    const N = document.documentElement;
    x(N.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      x(N.dataset.theme ?? null);
    });
    return v.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const g = Oe(() => {
    try {
      return vn.QrCode.encodeText(e, DN[r]);
    } catch {
      return null;
    }
  }, [e, r]), h = oe(null);
  ve(() => {
    if (g !== null) {
      h.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (h.current?.value !== e || h.current?.onError !== o) && (h.current = { value: e, onError: o }, o?.(N));
  }, [g, e, o]);
  const m = Math.max(0, Math.floor(l)), y = [AN.root, d].filter(Boolean).join(" ");
  if (ve(() => {
    if (n !== "canvas" || g === null) return;
    const N = c.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const E = getComputedStyle(N), S = E.getPropertyValue("--dx-text-color").trim() || "#000", C = E.getPropertyValue("--dx-surface-color").trim() || "#fff";
    MN(v, g, t, m, S, C);
  }, [n, g, t, m, f, u]), g === null)
    return /* @__PURE__ */ s("div", { className: y, role: "img", "aria-label": a, "data-qr-error": "true" });
  const p = g.size + m * 2, _ = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: c,
        className: y,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const b = [];
  for (let N = 0; N < g.size; N++)
    for (let v = 0; v < g.size; v++)
      g.getModule(v, N) && b.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (v + m) * _,
            y: (N + m) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${N}`
        )
      );
  return /* @__PURE__ */ D(
    "svg",
    {
      className: y,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: b })
      ]
    }
  );
}
function MN(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const IN = "_root_1v9la_1", zN = "_value_1v9la_9", ml = {
  root: IN,
  value: zN
}, hl = [
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
], gl = 104, LN = 106;
function RN(e) {
  const t = [gl];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = gl;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, LN), t;
}
function e$({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, o = Oe(() => {
    const a = [];
    let c = 0;
    for (const f of RN(e)) {
      const u = hl[f] ?? hl[0];
      for (let x = 0; x < u.length; x++) {
        const g = Number(u[x]);
        x % 2 === 0 && a.push({ x: c, w: g }), c += g;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [ml.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${o.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
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
          o.modules.map((a, c) => /* @__PURE__ */ s(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ s("span", { className: ml.value, children: e })
  ] });
}
const PN = "_root_16i43_1", jN = "_svg_16i43_10", BN = "_gridline_16i43_15", FN = "_tickLabel_16i43_21", HN = "_axisTitle_16i43_27", UN = "_dataLabel_16i43_34", qN = "_gaugeValue_16i43_40", WN = "_legend_16i43_47", KN = "_legendItem_16i43_55", GN = "_swatch_16i43_63", VN = "_tooltip_16i43_70", YN = "_visuallyHidden_16i43_84", ft = {
  root: PN,
  svg: jN,
  gridline: BN,
  tickLabel: FN,
  axisTitle: HN,
  dataLabel: UN,
  gaugeValue: qN,
  legend: WN,
  legendItem: KN,
  swatch: GN,
  tooltip: VN,
  visuallyHidden: YN
}, bl = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Gl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), XN = /* @__PURE__ */ new Set([...Gl, "heatmap"]);
function ZN(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, o = [];
  for (let a = i; a <= d + 1e-9; a += l)
    o.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: o };
}
function JN(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    min: e.minProperty != null ? Number(t[e.minProperty]) : void 0,
    max: e.maxProperty != null ? Number(t[e.maxProperty]) : void 0,
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function Yn(e, t, n) {
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
function Vl(e, t, n, r, l) {
  const i = r.markers ?? {};
  if (i.visible === !1) return null;
  const d = i.shape ?? "circle", o = i.size ?? l, a = "var(--dx-surface-color)";
  return d === "square" ? /* @__PURE__ */ s(
    "rect",
    {
      x: e - o,
      y: t - o,
      width: o * 2,
      height: o * 2,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : d === "diamond" ? /* @__PURE__ */ s(
    "path",
    {
      d: `M ${e} ${t - o} L ${e + o} ${t} L ${e} ${t + o} L ${e - o} ${t} Z`,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : d === "triangle" ? /* @__PURE__ */ s(
    "path",
    {
      d: `M ${e} ${t - o} L ${e + o} ${t + o} L ${e - o} ${t + o} Z`,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : /* @__PURE__ */ s(
    "circle",
    {
      cx: e,
      cy: t,
      r: o,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  );
}
function QN(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function xs(e, t) {
  return e.percent ? `${t}%` : String(t);
}
function eS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: l, categories: i } = e, d = new Map(i.map((u, x) => [u, x])), o = n.map((u) => {
    const x = d.get(u.cat) ?? 0, g = u.min, h = u.max;
    return typeof g != "number" || Number.isNaN(g) || typeof h != "number" || Number.isNaN(h) ? null : { x: r(x), lo: l(g), hi: l(h) };
  });
  if (o.some((u) => u == null)) return null;
  const a = o.map((u) => `L ${u.x} ${u.hi}`).join(" "), c = [...o].reverse().map((u) => `L ${u.x} ${u.lo}`).join(" "), f = o[0];
  return /* @__PURE__ */ s(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${a} ${c} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function tS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o } = e, a = i.l + d / 2, c = i.t + o / 2, f = Math.min(d, o) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, x = r.reduce((h, m) => h + (Number(m.val) || 0), 0);
  let g = -90;
  return Yn(
    n,
    t,
    r.map((h, m) => {
      const y = x ? h.val / x * 360 : 0, p = g, _ = g + y;
      g = _;
      const b = y > 180 ? 1 : 0, N = a + f * Math.cos(Ut(p)), v = c + f * Math.sin(Ut(p)), E = a + f * Math.cos(Ut(_)), S = c + f * Math.sin(Ut(_)), C = a + u * Math.cos(Ut(_)), A = c + u * Math.sin(Ut(_)), I = a + u * Math.cos(Ut(p)), M = c + u * Math.sin(Ut(p)), $ = u ? `M ${N} ${v} A ${f} ${f} 0 ${b} 1 ${E} ${S} L ${C} ${A} A ${u} ${u} 0 ${b} 0 ${I} ${M} Z` : `M ${a} ${c} L ${N} ${v} A ${f} ${f} 0 ${b} 1 ${E} ${S} Z`, w = (p + _) / 2, k = a + (f + 12) * Math.cos(Ut(w)), T = c + (f + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: $,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, T, `${t.title ?? h.cat}: ${h.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: k,
            y: T,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: h.val
          }
        )
      ] }, m);
    })
  );
}
function nS(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: o, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((x, g) => [x, g]));
  return Yn(
    n,
    t,
    r.map((x, g) => {
      const h = u.get(x.cat) ?? 0, m = Number(r[g].cat), y = Number.isNaN(m) ? a(h) : i.l + (m - o.min) / (o.max - o.min || 1) * d, p = c(x.val), _ = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        Vl(y, p, l, t, _),
        /* @__PURE__ */ s(
          "circle",
          {
            cx: y,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(y, p, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, g);
    })
  );
}
function rS(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: o, categories: a, series: c } = e, f = new Map(a.map((h, m) => [h, m])), u = (h) => {
    if (!t.stack) return i.min;
    let m = 0;
    for (let y = 0; y < n; y++) {
      const p = c[y];
      if (p?.stack !== t.stack) continue;
      const _ = p.data.find(
        (b) => String(b[p.categoryProperty] ?? "") === h
      );
      _ && (m += Number(_[p.valueProperty]) || 0);
    }
    return m;
  }, x = r.map((h) => {
    const m = f.get(h.cat) ?? 0, y = u(h.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(y + h.val)}`;
  }).join(" "), g = r.map((h) => {
    const m = f.get(h.cat) ?? 0, y = u(h.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(y)}`;
  }).join(" ");
  return Yn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      t.type === "area" && /* @__PURE__ */ s(
        "path",
        {
          d: `${x} L ${d(r.length - 1)} ${o(u(r[r.length - 1].cat))} L ${d(0)} ${o(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      eS(e, t, r),
      /* @__PURE__ */ s(
        "path",
        {
          d: x,
          fill: "none",
          stroke: l,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: QN(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ s("path", { d: g, fill: "none", stroke: "transparent" }),
      r.map((h, m) => {
        const y = f.get(h.cat) ?? 0, p = u(h.cat), _ = d(y), b = o(p + h.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          Vl(_, b, l, t, 4),
          /* @__PURE__ */ s(
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
                `${t.title ?? h.cat}: ${xs(e, h.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, h.cat, h.val, h.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: _,
              y: b - 8,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: xs(e, h.val)
            }
          )
        ] }, m);
      })
    ] })
  );
}
function sS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, xFor: c, yFor: f, categories: u, series: x } = e, g = new Map(u.map((m, y) => [m, y])), h = t.type === "bar";
  return Yn(
    n,
    t,
    r.map((m, y) => {
      const p = g.get(m.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const T = x[k];
          if (T?.stack !== t.stack) continue;
          const R = T.data.find(
            (z) => String(z[T.categoryProperty] ?? "") === m.cat
          );
          R && (_ += Number(R[T.valueProperty]) || 0);
        }
      const b = _ + m.val, N = typeof m.min == "number" && !Number.isNaN(m.min) && typeof m.max == "number" && !Number.isNaN(m.max), v = x.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, E = d / Math.max(1, u.length), S = h ? 18 : Math.max(12, E / (t.stack ? 1 : x.length) - 4), C = h ? i.l + _ / (a.max - a.min || 1) * d : c(p) - S / 2 + (t.stack ? 0 : n % v * S), A = h ? i.t + p * o / Math.max(1, u.length) + 4 : f(N ? _ + m.max : b), I = h ? N ? (m.max - m.min) / (a.max - a.min || 1) * d : m.val / (a.max - a.min || 1) * d : S - 4, M = h ? 16 : N ? f(_ + m.min) - f(_ + m.max) : f(_) - f(b), $ = h ? i.l + (_ + (N ? m.min : 0)) / (a.max - a.min || 1) * d : C, w = h ? i.t + p * o / Math.max(1, u.length) + 4 : A;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "rect",
          {
            x: $,
            y: w,
            width: h ? I : S - 4,
            height: M,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              $ + (h ? I : S) / 2,
              w,
              `${t.title ?? m.cat}: ${xs(e, m.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: $ + (h ? I : S) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: xs(e, m.val)
          }
        )
      ] }, y);
    })
  );
}
function oS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = i.l + d / 2, g = i.t + o * 0.78, h = Math.min(d, o) * 0.36, m = 135, y = 270, p = r.reduce((E, S) => E + (Number(S.val) || 0), 0), _ = a.max - a.min || 1, b = Math.min(1, Math.max(0, (p - a.min) / _)), N = (E, S) => {
    const [C, A] = [
      x + h * Math.cos(Ut(E)),
      g + h * Math.sin(Ut(E))
    ], [I, M] = [
      x + h * Math.cos(Ut(S)),
      g + h * Math.sin(Ut(S))
    ], $ = S - E > 180 ? 1 : 0;
    return `M ${C} ${A} A ${h} ${h} 0 ${$} 1 ${I} ${M}`;
  }, v = Number(p.toFixed(2));
  return Yn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + y),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      b > 0 && /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + y * b),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s("text", { x, y: g - 4, textAnchor: "middle", className: ft.gaugeValue, children: v }),
      /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + y),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(x, g - h, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", p, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ s(
        "text",
        {
          x,
          y: g + h + 18,
          textAnchor: "middle",
          className: ft.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Yl(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, o = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (u) => Ut(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: o, angleFor: c, vertexFor: (u, x) => {
    const g = c(u);
    return [
      i + o * x * Math.cos(g),
      d + o * x * Math.sin(g)
    ];
  } };
}
function lS(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Yl(e);
  return /* @__PURE__ */ D("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ s(
      "polygon",
      {
        points: t.map((o, a) => l(a, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, o) => {
      const [a, c] = l(o, 1);
      return /* @__PURE__ */ s(
        "line",
        {
          x1: n,
          y1: r,
          x2: a,
          y2: c,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function aS(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: x, vertexFor: g } = Yl(e), h = e.scale.max || 1, m = (p) => r.find((_) => _.cat === p)?.val ?? 0, y = i.map((p, _) => {
    const b = Math.min(1, Math.max(0, m(p) / h)), [N, v] = g(_, b);
    return `${N},${v}`;
  }).join(" ");
  return Yn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      /* @__PURE__ */ s(
        "polygon",
        {
          points: y,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((p, _) => {
        const b = Math.min(1, Math.max(0, m(p) / h)), [N, v] = g(_, b), [E, S] = g(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "circle",
            {
              cx: N,
              cy: v,
              r: 3.5,
              fill: l,
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
              onMouseEnter: () => d && o(E, S, `${t.title ?? p}: ${m(p)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const C = r.find((A) => A.cat === p);
                C && e.handleClick(t, C.cat, C.val, C.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s(
            "text",
            {
              x: c + (u + 14) * Math.cos(x(_)),
              y: f + (u + 14) * Math.sin(x(_)) + 4,
              textAnchor: "middle",
              className: ft.tickLabel,
              children: p
            }
          )
        ] }, p);
      })
    ] })
  );
}
function iS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, tooltipVisible: a, showTip: c, hideTip: f } = e, u = r, x = Math.max(1, ...u.map((m) => Number(m.val) || 0)), g = o / Math.max(1, u.length), h = i.l + d / 2;
  return Yn(
    n,
    t,
    u.map((m, y) => {
      const _ = Math.max(0, Number(m.val) || 0) / x * d, b = u[y + 1], N = b ? Math.max(0, Number(b.val) || 0) / x * d : _ * 0.7, v = i.t + y * g + 2, E = Math.max(4, g - 6), S = 1 - y * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: `M ${h - _ / 2} ${v} L ${h + _ / 2} ${v} L ${h + N / 2} ${v + E} L ${h - N / 2} ${v + E} Z`,
            fill: l,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(h, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: h,
            y: v + E / 2 + 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: [
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, y);
    })
  );
}
function cS(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = [];
  t.data.forEach((b) => {
    const N = t.rowProperty ? String(b[t.rowProperty] ?? "") : "All";
    x.includes(N) || x.push(N);
  });
  const g = r.map((b) => b.val).filter((b) => Number.isFinite(b)), h = g.length ? Math.min(...g) : 0, m = g.length ? Math.max(...g) : 1, y = d / Math.max(1, a.length), p = o / Math.max(1, x.length), _ = (b) => m === h ? 0.6 : 0.15 + 0.85 * ((b - h) / (m - h));
  return Yn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      x.map((b, N) => /* @__PURE__ */ s(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * p + p / 2 + 4,
          textAnchor: "end",
          className: ft.tickLabel,
          children: b
        },
        b
      )),
      r.map((b, N) => {
        const v = t.data[N], E = a.indexOf(b.cat), S = x.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (E < 0 || S < 0) return null;
        const C = i.l + E * y, A = i.t + S * p;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "rect",
            {
              x: C + 1,
              y: A + 1,
              width: Math.max(1, y - 2),
              height: Math.max(1, p - 2),
              fill: l,
              fillOpacity: _(b.val),
              onMouseEnter: () => c && f(C + y / 2, A, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: C + y / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: b.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function dS(e, t, n) {
  const r = JN(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return tS(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return nS(e, t, n, r, l);
    case "line":
    case "area":
      return rS(e, t, n, r, l);
    case "gauge":
      return oS(e, t, n, r, l);
    case "radar":
      return aS(e, t, n, r, l);
    case "funnel":
      return iS(e, t, n, r, l);
    case "heatmap":
      return cS(e, t, n, r, l);
    default:
      return sS(e, t, n, r, l);
  }
}
function t$({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: i = !0,
  stacked100Percent: d = !1,
  tooltipVisible: o = !0,
  onSeriesClick: a,
  ariaLabel: c = "Chart",
  className: f
}) {
  const [u, x] = q(
    null
  ), g = Oe(() => {
    const $ = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const k of w.data) $.add(String(k[w.categoryProperty] ?? ""));
    return [...$];
  }, [e]), h = Oe(() => {
    if (!d) return e;
    const $ = /* @__PURE__ */ new Map();
    for (const w of e)
      if (w.stack)
        for (const k of w.data) {
          const T = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = Number(k[w.valueProperty]);
          Number.isNaN(R) || $.set(T, ($.get(T) ?? 0) + R);
        }
    return e.map((w) => w.stack ? {
      ...w,
      data: w.data.map((k) => {
        const T = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = $.get(T) ?? 0, z = Number(k[w.valueProperty]);
        return {
          ...k,
          [w.valueProperty]: R > 0 && !Number.isNaN(z) ? z / R * 100 : 0
        };
      })
    } : w);
  }, [e, d]), m = Oe(() => {
    const $ = h.flatMap((k) => k.data.map((T) => Number(T[k.valueProperty]))).filter((k) => !Number.isNaN(k)), w = /* @__PURE__ */ new Map();
    for (const k of h) {
      if (!k.stack) continue;
      let T = w.get(k.stack);
      T || w.set(k.stack, T = /* @__PURE__ */ new Map());
      for (const R of k.data) {
        const z = String(R[k.categoryProperty] ?? ""), j = Number(R[k.valueProperty]);
        Number.isNaN(j) || T.set(z, (T.get(z) ?? 0) + j);
      }
    }
    for (const k of w.values()) $.push(...k.values());
    return $;
  }, [h]), y = r?.min ?? (m.length ? Math.min(0, ...m) : 0), p = r?.max ?? (m.length ? Math.max(...m) : 10), _ = Oe(
    () => ZN(y, p, r?.step),
    [y, p, r?.step]
  ), b = { t: 16, r: 16, b: 40, l: 56 }, N = t - b.l - b.r, v = n - b.t - b.b, E = ($) => b.l + $ / Math.max(1, g.length - 1) * N, S = ($) => b.t + (1 - ($ - _.min) / (_.max - _.min || 1)) * v, C = ($, w) => w.color ?? bl[$ % bl.length], A = e.some(($) => Gl.has($.type)), I = e.some(($) => XN.has($.type)), M = {
    categories: g,
    scale: _,
    pad: b,
    plotW: N,
    plotH: v,
    xFor: E,
    yFor: S,
    colorFor: C,
    tooltipVisible: o,
    percent: d,
    showTip: ($, w, k) => x({ x: $, y: w, text: k }),
    hideTip: () => x(null),
    handleClick: ($, w, k, T) => a?.({
      seriesTitle: $.title ?? "",
      category: w,
      value: k,
      item: T
    }),
    series: h
  };
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [ft.root, f].filter(Boolean).join(" "),
      role: "img",
      "aria-label": c,
      "aria-describedby": `${c.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: ft.svg,
            role: "presentation",
            children: [
              A && r?.gridlines !== !1 && _.ticks.map(($) => /* @__PURE__ */ s(
                "line",
                {
                  x1: b.l,
                  x2: b.l + N,
                  y1: S($),
                  y2: S($),
                  className: ft.gridline
                },
                $
              )),
              I && l?.gridlines && g.map(($, w) => /* @__PURE__ */ s(
                "line",
                {
                  x1: E(w),
                  x2: E(w),
                  y1: b.t,
                  y2: b.t + v,
                  className: ft.gridline
                },
                w
              )),
              A && _.ticks.map(($) => /* @__PURE__ */ s(
                "text",
                {
                  x: b.l - 8,
                  y: S($) + 4,
                  textAnchor: "end",
                  className: ft.tickLabel,
                  children: d ? `${$}%` : $
                },
                $
              )),
              I && g.map(($, w) => /* @__PURE__ */ s(
                "text",
                {
                  x: E(w),
                  y: b.t + v + 16,
                  textAnchor: "middle",
                  className: ft.tickLabel,
                  children: $
                },
                $
              )),
              A && r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: b.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${b.t + v / 2})`,
                  className: ft.axisTitle,
                  children: r.title
                }
              ),
              I && l?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: b.l + N / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ft.axisTitle,
                  children: l.title
                }
              ),
              e.some(($) => $.type === "radar") && lS(M),
              h.map(($, w) => dS(M, $, w))
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: ft.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ s("div", { className: ft.legend, children: e.map(($, w) => /* @__PURE__ */ D("span", { className: ft.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: ft.swatch,
              style: { backgroundColor: C(w, $) },
              "aria-hidden": "true"
            }
          ),
          $.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: ft.visuallyHidden,
            id: `${c.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: c }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                ($) => $.data.map((w, k) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ s("td", { children: $.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: $.rowProperty ? `${String(w[$.rowProperty] ?? "")} / ${String(w[$.categoryProperty] ?? "")}` : String(w[$.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(w[$.valueProperty] ?? "") })
                ] }, `${$.title}-${k}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function n$({ query: e, children: t }) {
  return oo(e) ? /* @__PURE__ */ s(pt, { children: t }) : null;
}
function r$({ children: e, className: t }) {
  return /* @__PURE__ */ s("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function s$() {
  const e = oe(null);
  return ve(() => {
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
  WS as AIChat,
  lp as ALERT_ICON,
  pO as Accordion,
  ZS as Alert,
  HS as ArcGauge,
  gO as AutoComplete,
  nO as AutoGrid,
  fO as Avatar,
  pS as Badge,
  e$ as Barcode,
  sO as Body,
  BO as Breadcrumb,
  an as Button,
  _S as Card,
  WO as Carousel,
  t$ as Chart,
  nu as CheckBox,
  yO as CheckBoxList,
  SO as ColorPicker,
  eO as Column,
  zO as ContextMenuProvider,
  Er as DEFAULT_OPERATOR_BY_TYPE,
  mv as DEFAULT_PALETTE,
  Oy as DEFAULT_THEMES,
  DS as DataFilter,
  MS as DataGrid,
  IS as DataList,
  OO as DatePicker,
  Sl as Dialog,
  jS as DialogProvider,
  hO as DropDown,
  MO as DropZone,
  bS as EmptyState,
  vl as FILTER_OPERATORS,
  jO as FabMenu,
  or as Field,
  xS as Fieldset,
  Yb as Footer,
  vS as Form,
  yS as FormField,
  YO as Gantt,
  Jb as Header,
  VS as HtmlEditor,
  Me as Icon,
  es as Input,
  zS as Label,
  rO as Layout,
  qS as LinearGauge,
  FO as Link,
  bO as ListBox,
  r$ as LiveRegion,
  KS as Login,
  GS as Markdown,
  kO as Mask,
  n$ as MediaQuery,
  N2 as Menu,
  ql as MenuItem,
  NO as Numeric,
  Pc as Pager,
  RO as PanelMenu,
  LO as PanelMenuItem,
  Ef as Password,
  GO as PickList,
  XO as Pivot,
  XS as PopupProvider,
  PO as ProfileMenu,
  lO as Progress,
  QO as QRCode,
  US as RadialGauge,
  xO as RadioButtonList,
  $O as Rating,
  QS as Row,
  VO as Scheduler,
  CO as SecurityCode,
  lr as Select,
  vO as SelectBar,
  dy as Sidebar,
  oO as SidebarToggle,
  AO as SignaturePad,
  JS as Skeleton,
  EO as Slider,
  wO as SplitButton,
  UO as Splitter,
  tO as Stack,
  hS as Stat,
  HO as Steps,
  LS as Switch,
  gS as Table,
  _O as Tabs,
  Ol as Text,
  mO as TextArea,
  ro as TextBox,
  aO as ThemeSwitcher,
  iO as ThemeToggle,
  TO as TimeSpanPicker,
  ZO as Timeline,
  FS as ToastProvider,
  qO as Toc,
  My as ToggleButton,
  RS as Tooltip,
  KO as Tree,
  DO as Upload,
  JO as VirtualGrid,
  Kc as aggregateValue,
  kl as applyFilters,
  Wc as applyGridState,
  ko as collectGroupKeys,
  rr as columnValue,
  ES as compare,
  CS as custom,
  Hc as cycleSort,
  So as defaultOperatorForType,
  kS as email,
  ol as formatMasked,
  hs as formatValue,
  dO as getAppearance,
  ms as getByPath,
  cO as getTheme,
  jc as groupItems,
  mS as iconNames,
  wl as matchesFilters,
  OS as maxLength,
  SS as minLength,
  qc as paginate,
  NS as pattern,
  $S as range,
  g_ as renderMarkdown,
  wS as required,
  TS as requiredTrue,
  yl as resolveVariant,
  Wi as runValidators,
  Py as setAppearance,
  Ry as setTheme,
  Gr as shadeClass,
  ic as sortItems,
  Uc as sortedItems,
  rl as subscribe,
  Gc as toCsv,
  rc as toFilterString,
  ac as toODataFilterString,
  IO as useContextMenu,
  PS as useDialog,
  qi as useFormContext,
  AS as useFormField,
  s$ as useLiveRegion,
  oo as useMediaQuery,
  YS as usePopup,
  uO as useThemeService,
  BS as useToast
};
