import { jsx as o, jsxs as D, Fragment as pt } from "react/jsx-runtime";
import { forwardRef as st, useId as ot, isValidElement as qt, cloneElement as Zs, useState as q, useRef as oe, useCallback as B, useMemo as Oe, useContext as Pn, createContext as lr, useEffect as ve, Fragment as Js, useLayoutEffect as Ps, useImperativeHandle as bs, Children as Kr } from "react";
function Wr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Gl = "_button_eyvws_1", Vl = "_filled_eyvws_36", Yl = "_flat_eyvws_55", Xl = "_outlined_eyvws_58", Zl = "_text_eyvws_63", Jl = "_loading_eyvws_506", Ql = "_spinner_eyvws_509", ea = "_xs_eyvws_525", ta = "_sm_eyvws_531", na = "_md_eyvws_537", ra = "_lg_eyvws_543", sa = "_xl_eyvws_549", oa = "_iconOnly_eyvws_555", la = "_fullWidth_eyvws_585", Cn = {
  button: Gl,
  filled: Vl,
  flat: Yl,
  outlined: Xl,
  text: Zl,
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
  loading: Jl,
  spinner: Ql,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: ea,
  sm: ta,
  md: na,
  lg: ra,
  xl: sa,
  iconOnly: oa,
  fullWidth: la
};
function aa(e, t) {
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
      fullWidth: s = !1,
      iconOnly: a = !1,
      loading: c = !1,
      visible: f = !0,
      className: u,
      disabled: x,
      children: h,
      ...g
    } = t;
    if (f === !1) return null;
    const m = aa(r, l), p = m.style === "light" || m.style === "dark" ? null : Wr(i), _ = [
      Cn.button,
      Cn[m.variant],
      Cn[`style-${m.style}`],
      p ? Cn[p] : null,
      Cn[d],
      s ? Cn.fullWidth : null,
      a ? Cn.iconOnly : null,
      c ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), b = /* @__PURE__ */ D(pt, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      h
    ] }), O = t.href;
    if (O != null) {
      const { onClick: S, ...C } = g, A = x || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: O,
          className: _,
          "aria-disabled": A || void 0,
          "aria-busy": c || void 0,
          onClick: (L) => {
            if (A) {
              L.preventDefault();
              return;
            }
            S?.(L);
          },
          ...C,
          children: b
        }
      );
    }
    const { type: v = "button", ...$ } = g;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: x || c,
        "aria-busy": c || void 0,
        ...$,
        children: b
      }
    );
  }
), ia = "_card_4vcae_1", ca = "_elevated_4vcae_8", da = "_filled_4vcae_13", ua = "_outlined_4vcae_18", fa = "_interactive_4vcae_22", _a = "_text_4vcae_30", pa = "_header_4vcae_46", ma = "_body_4vcae_53", ha = "_footer_4vcae_63", wr = {
  card: ia,
  elevated: ca,
  filled: da,
  outlined: ua,
  interactive: fa,
  text: _a,
  header: pa,
  body: ma,
  footer: ha
}, eS = st(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: i = !0,
  children: d,
  onKeyDown: s,
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
          s?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [wr.card, wr[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: wr.header, children: n }),
          /* @__PURE__ */ o("div", { className: wr.body, children: d }),
          r != null && /* @__PURE__ */ o("div", { className: wr.footer, children: r })
        ]
      }
    )
  );
});
function fl(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const ga = "_badge_1fy6d_1", ba = "_xs_1fy6d_21", ya = "_sm_1fy6d_26", xa = "_md_1fy6d_31", va = "_lg_1fy6d_36", wa = "_xl_1fy6d_41", ka = "_neutral_1fy6d_47", Na = "_primary_1fy6d_52", Sa = "_secondary_1fy6d_61", Oa = "_light_1fy6d_66", $a = "_base_1fy6d_71", Ea = "_dark_1fy6d_76", Ta = "_info_1fy6d_81", Ca = "_success_1fy6d_86", Aa = "_warning_1fy6d_95", Da = "_danger_1fy6d_104", Ma = "_filled_1fy6d_111", Ia = "_outlined_1fy6d_161", za = "_text_1fy6d_213", kr = {
  badge: ga,
  xs: ba,
  sm: ya,
  md: xa,
  lg: va,
  xl: wa,
  neutral: ka,
  primary: Na,
  secondary: Sa,
  light: Oa,
  base: $a,
  dark: Ea,
  info: Ta,
  success: Ca,
  warning: Aa,
  danger: Da,
  filled: Ma,
  outlined: Ia,
  text: za,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, tS = st(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: i,
  visible: d = !0,
  children: s,
  ...a
}, c) {
  if (d === !1) return null;
  const f = t, u = fl(n, "filled"), x = Wr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        kr.badge,
        kr[l],
        kr[f],
        kr[u],
        x ? kr[x] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: s
    }
  );
}), La = "_icon_vn4jx_5", Ra = "_xs_vn4jx_24", Pa = "_sm_vn4jx_28", ja = "_md_vn4jx_23", Ba = "_lg_vn4jx_36", Fa = "_xl_vn4jx_40", _o = {
  icon: La,
  xs: Ra,
  sm: Pa,
  md: ja,
  lg: Ba,
  xl: Fa
}, nS = [
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
], Me = st(function({ icon: t, size: n, color: r, className: l, style: i, ...d }, s) {
  const a = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [_o.icon, a ? _o[n] : null, l].filter(Boolean).join(" "),
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
}), Ha = "_stat_sjin9_1", Ua = "_label_sjin9_8", qa = "_row_sjin9_16", Wa = "_value_sjin9_22", Ka = "_delta_sjin9_28", Ga = "_success_sjin9_33", Va = "_danger_sjin9_37", Ya = "_neutral_sjin9_41", Xa = "_hint_sjin9_45", Yn = {
  stat: Ha,
  label: Ua,
  row: qa,
  value: Wa,
  delta: Ka,
  success: Ga,
  danger: Va,
  neutral: Ya,
  hint: Xa
}, rS = st(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...s }, a) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: a,
      className: [Yn.stat, d].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Yn.label, children: t }),
        /* @__PURE__ */ D("div", { className: Yn.row, children: [
          /* @__PURE__ */ o("div", { className: Yn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Yn.delta, Yn[l]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: Yn.hint, children: i })
      ]
    }
  );
}), Za = "_wrap_ipozk_1", Ja = "_table_ipozk_8", Qa = "_caption_ipozk_14", ei = "_none_ipozk_51", ti = "_horizontal_ipozk_57", ni = "_vertical_ipozk_67", ri = "_alternating_ipozk_85", si = "_start_ipozk_89", oi = "_center_ipozk_93", li = "_end_ipozk_97", ai = "_empty_ipozk_101", Bn = {
  wrap: Za,
  table: Ja,
  caption: Qa,
  none: ei,
  horizontal: ti,
  vertical: ni,
  alternating: ri,
  start: si,
  center: oi,
  end: li,
  empty: ai
};
function sS({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: s,
  visible: a = !0
}) {
  if (a === !1) return null;
  const c = i === "default" || i === "both" ? "" : Bn[i];
  return /* @__PURE__ */ D("div", { className: [Bn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "table",
      {
        className: [
          Bn.table,
          c,
          d ? Bn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ o("caption", { className: Bn.caption, children: l }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Bn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? Bn[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Bn.empty, children: r })
  ] });
}
const ii = "_emptyState_1swxw_1", ci = "_icon_1swxw_13", di = "_title_1swxw_18", ui = "_description_1swxw_24", fi = "_action_1swxw_30", Nr = {
  emptyState: ii,
  icon: ci,
  title: di,
  description: ui,
  action: fi
};
function oS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ D("div", { className: [Nr.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Nr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Nr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Nr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Nr.action, children: r })
  ] });
}
const _i = "_field_149oz_1", pi = "_label_149oz_8", mi = "_required_149oz_14", hi = "_hint_149oz_19", gi = "_error_149oz_24", Sr = {
  field: _i,
  label: pi,
  required: mi,
  hint: hi,
  error: gi
};
function sr({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: i,
  children: d,
  className: s,
  visible: a = !0
}) {
  const c = r ?? l, f = ot(), u = ot(), x = ot();
  if (a === !1) return null;
  const h = i != null ? u : c != null ? x : null, g = typeof d == "function" ? d({ inputId: f, hintId: x, errorId: u }) : d, m = qt(g) && typeof g.props.id == "string" ? g.props.id : void 0, y = m ?? t ?? f, p = qt(g) && (h != null || m == null && typeof g.type == "string"), _ = m != null || t != null || p, b = p && qt(g) ? Zs(g, {
    id: y,
    "aria-describedby": h != null ? [
      g.props["aria-describedby"],
      h
    ].filter((O) => typeof O == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ D("div", { className: [Sr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Sr.label,
        htmlFor: _ ? y : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Sr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    b,
    i != null ? /* @__PURE__ */ o("div", { id: u, className: Sr.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ o("div", { id: x, className: Sr.hint, children: c }) : null
  ] });
}
const bi = "_formfield_6e25e_1", yi = "_content_6e25e_8", xi = "_floating_6e25e_43", vi = "_label_6e25e_111", wi = "_start_6e25e_132", ki = "_required_6e25e_169", Ni = "_end_6e25e_175", Si = "_filled_6e25e_192", Oi = "_flat_6e25e_199", $i = "_helper_6e25e_206", Ei = "_invalid_6e25e_211", kn = {
  formfield: bi,
  content: yi,
  floating: xi,
  label: vi,
  start: wi,
  required: ki,
  end: Ni,
  filled: Si,
  flat: Oi,
  helper: $i,
  invalid: Ei
};
function lS({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: i = !0,
  variant: d = "outlined",
  invalid: s = !1,
  required: a = !1,
  children: c,
  className: f,
  visible: u = !0
}) {
  const x = ot(), h = ot();
  if (u === !1) return null;
  const g = l ?? x, m = typeof c == "function" ? c({
    inputId: g
  }) : c, y = qt(m) ? m.type : null, p = typeof y == "string", _ = qt(m) && typeof y != "symbol", b = qt(m) ? m.props : null, O = typeof b?.id == "string" ? b.id : void 0, v = p && qt(m) ? m.type.toLowerCase() : null, $ = v != null && (v === "input" ? typeof b?.type != "string" || b.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = _ && (r != null || s || O == null && $), C = O != null || l != null || S, A = v === "input" && typeof b?.type == "string" ? b.type.toLowerCase() : null, L = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), z = S && qt(m) ? Zs(
    m,
    {
      id: O ?? g,
      ...i && L && b?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          b?.["aria-describedby"],
          h
        ].filter((w) => typeof w == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, T = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: kn.label,
      htmlFor: C ? O ?? g : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ o("span", { className: kn.required, "aria-hidden": "true", children: "*" })
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
        s ? kn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : T,
        /* @__PURE__ */ D("div", { className: kn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: kn.start, children: t }),
          z,
          i ? T : null,
          n != null && /* @__PURE__ */ o("div", { className: kn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: h, className: kn.helper, children: r })
      ]
    }
  );
}
const Ti = "_fieldset_8x01p_1", Ci = "_legend_8x01p_11", Ai = "_legendText_8x01p_20", Di = "_toggle_8x01p_24", Mi = "_content_8x01p_45", Ii = "_summary_8x01p_49", Xn = {
  fieldset: Ti,
  legend: Ci,
  legendText: Ai,
  toggle: Di,
  content: Mi,
  summary: Ii
};
function aS({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: i,
  defaultCollapsed: d = !1,
  summary: s,
  expandTitle: a,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: x,
  onCollapse: h,
  children: g,
  className: m,
  visible: y = !0
}) {
  const p = ot(), [_, b] = q(d);
  if (y === !1) return null;
  const O = i ?? _, v = l ? `${p}-content` : void 0, $ = () => {
    const T = !O;
    i === void 0 && b(T), T ? h?.() : x?.();
  }, S = l || e != null || n != null || t != null, C = l ? O : !1, A = l && O && s != null, L = C ? a ?? "Expand" : c ?? "Collapse", z = C ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [Xn.fieldset, m].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ o("legend", { className: Xn.legend, children: l ? /* @__PURE__ */ D(pt, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: Xn.toggle,
              title: L,
              "aria-label": e == null ? z : void 0,
              "aria-expanded": !C,
              "aria-controls": v,
              onClick: $,
              children: [
                /* @__PURE__ */ o(
                  Me,
                  {
                    icon: C ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Me, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: Xn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(pt, { children: [
          n != null && /* @__PURE__ */ o(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Xn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Xn.content,
            id: v,
            hidden: C,
            children: g
          }
        ),
        A ? /* @__PURE__ */ o("div", { className: Xn.summary, children: s }) : null
      ]
    }
  );
}
const zi = "_form_abp5n_1", Li = {
  form: zi
}, _l = lr(null);
function Ri() {
  const e = Pn(_l);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function iS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: i,
  className: d
}) {
  const [s, a] = q({}), [c, f] = q(0), u = oe(s);
  u.current = s;
  const x = B((b) => {
    a(
      (O) => O[b.name] === b ? O : { ...O, [b.name]: b }
    );
  }, []), h = B((b) => {
    a((O) => {
      if (!(b in O)) return O;
      const v = { ...O };
      return delete v[b], v;
    });
  }, []), g = B(() => {
    const b = {};
    for (const O of Object.values(u.current)) {
      const v = O.validate();
      v.length > 0 && (b[O.name] = v);
    }
    return b;
  }, []), m = B(() => {
    const b = g();
    f((O) => O + 1), Object.keys(b).length === 0 ? t?.(e) : n?.(b);
  }, [g, e, t, n]), y = (b) => {
    r != null && l != null || (b.preventDefault(), m());
  }, p = Oe(
    () => ({ registerField: x, unregisterField: h, submit: m, submitCount: c }),
    [x, h, m, c]
  ), _ = [Li.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(_l.Provider, { value: p, children: /* @__PURE__ */ o(
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
const ar = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", cS = (e = "Required") => (t) => ar(t) ? e : null, dS = (e = "Invalid email") => (t) => ar(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, uS = (e, t = "Invalid format") => (n) => ar(n) || e.test(String(n)) ? null : t, fS = (e, t = `Minimum ${e} characters`) => (n) => ar(n) || String(n).length >= e ? null : t, _S = (e, t = `Maximum ${e} characters`) => (n) => ar(n) || String(n).length <= e ? null : t, pS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ar(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, mS = (e, t = "Values do not match") => (n, r) => {
  if (ar(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, hS = (e = "Required") => (t) => t === !0 ? null : e, gS = (e) => (t, n) => e(t, n);
function Pi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function bS(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Ri(), [i, d] = q(t?.initialValue), [s, a] = q(!1), [c, f] = q(!1), u = oe(() => []);
  u.current = () => Pi(t?.validate ?? [], i), ve(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ve(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const x = s && !c ? u.current() : [];
  return { value: i, setValue: (g) => {
    d(g), f(!0);
  }, errors: x };
}
const ji = "_select_1xe98_1", Bi = "_invalid_1xe98_33", Fi = "_xs_1xe98_40", Hi = "_sm_1xe98_48", Ui = "_md_1xe98_56", qi = "_lg_1xe98_62", Wi = "_xl_1xe98_68", Os = {
  select: ji,
  invalid: Bi,
  xs: Fi,
  sm: Hi,
  md: Ui,
  lg: qi,
  xl: Wi
}, or = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          Os.select,
          Os[t],
          n ? Os.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((a) => /* @__PURE__ */ o(
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
), pl = [
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
], Or = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Ki = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Gi(e) {
  return Ki.includes(e);
}
function fs(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function po(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Fr(e, t) {
  const n = po(e), r = po(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function ys(e) {
  if (e.secondOperator == null) return !1;
  if (Gi(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function mo(e, t, n) {
  const r = fs(t, e.property), l = ho(
    r,
    e.value,
    e.operator,
    n
  );
  if (!ys(e)) return l;
  const i = ho(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function ho(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), s = i(t);
  switch (n) {
    case "Equals":
      return d === s || Array.isArray(d) && d.some((a) => i(a) === s);
    case "NotEquals":
      return d !== s && !(Array.isArray(d) && d.some((a) => i(a) === s));
    case "LessThan":
      return Fr(d, s) < 0;
    case "LessThanOrEquals":
      return Fr(d, s) <= 0;
    case "GreaterThan":
      return Fr(d, s) > 0;
    case "GreaterThanOrEquals":
      return Fr(d, s) >= 0;
    case "Contains":
      return typeof d == "string" && typeof s == "string" && d.includes(s);
    case "StartsWith":
      return typeof d == "string" && typeof s == "string" && d.startsWith(s);
    case "EndsWith":
      return typeof d == "string" && typeof s == "string" && d.endsWith(s);
    case "DoesNotContain":
      return typeof d == "string" && typeof s == "string" && !d.includes(s);
    case "In":
      return Array.isArray(s) && s.some((a) => i(a) === d);
    case "NotIn":
      return Array.isArray(s) && !s.some((a) => i(a) === d);
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
function Qs(e) {
  return "filters" in e;
}
function ml(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Qs(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => ml(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", mo(t, e, l);
}
function hl(e, t, n = {}) {
  return e.filter((r) => ml(r, t, n));
}
function Vi(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${Vi(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function Yi(e) {
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
  if (!ys(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function Xi(e) {
  return Qs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Xi).filter(Boolean).join(` ${e.operator} `)})` : Yi(e);
}
function Zi(e) {
  return e.replace(/'/g, "''");
}
const Ji = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Qi(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${Zi(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", x = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${Ji[c]} ${u && r ? l(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${x} in (${f.map((h) => i(h)).join(", ")})` : `${x} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${x} in (${f.map((h) => i(h)).join(", ")}))` : `not(${x} in (${i(f)}))`;
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
  if (!ys(e))
    return d(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${s} ${d(
    a,
    e.secondValue
  )})`;
}
function ec(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Qs(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => ec(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Qi(e, n);
}
function tc(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = Fr(
        fs(n, l.property),
        fs(r, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const nc = "_filter_1dvqt_1", rc = "_rows_1dvqt_9", sc = "_row_1dvqt_9", oc = "_join_1dvqt_21", lc = "_property_1dvqt_30", ac = "_operator_1dvqt_34", ic = "_value_1dvqt_38", cc = "_remove_1dvqt_42", dc = "_bar_1dvqt_58", uc = "_add_1dvqt_64", fc = "_custom_1dvqt_78", _c = "_summary_1dvqt_82", pc = "_second_1dvqt_87", mc = "_secondAdd_1dvqt_91", hc = "_addSecond_1dvqt_95", gc = "_joinSelect_1dvqt_109", ht = {
  filter: nc,
  rows: rc,
  row: sc,
  join: oc,
  property: lc,
  operator: ac,
  value: ic,
  remove: cc,
  bar: dc,
  add: uc,
  custom: fc,
  summary: _c,
  second: pc,
  secondAdd: mc,
  addSecond: hc,
  joinSelect: gc
}, $r = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], go = {
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
function bo({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(pt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      or,
      {
        "aria-label": e.title ?? e.name,
        className: ht.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      or,
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
  return /* @__PURE__ */ o(
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
function yS({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: i,
  viewChanged: d,
  items: s,
  children: a
}) {
  const [c, f] = q(
    () => r != null && r.length > 0 ? r.map((p, _) => ({ id: _, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Or[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, _) => {
    f(
      (b) => b.map((O) => O.id === p ? { ...O, ..._ } : O)
    );
  }, x = () => {
    const p = c[c.length - 1], _ = Math.max(0, ...c.map((O) => O.id)) + 1, b = e[0];
    f((O) => [
      ...O,
      {
        id: _,
        property: p?.property ?? b?.name ?? "",
        operator: Or[e.find(
          (v) => v.name === (p?.property ?? b?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (p) => {
    f(
      (_) => _.length > 1 ? _.filter((b) => b.id !== p) : _
    );
  }, g = Oe(() => {
    const p = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !$r.includes(_.operator)) continue;
      const O = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && ys(_) && (O.secondOperator = v, O.secondValue = _.secondValue, O.logicalOperator = _.logicalOperator ?? "And"), p.push(O);
    }
    return p;
  }, [c]), m = Oe(() => s == null || g.length === 0 ? s : hl(s, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [s, g, t, n]);
  ve(() => {
    d != null && s != null && d(m ?? []);
  }, [m]);
  const y = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ D("div", { className: [ht.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: ht.rows, role: "group", "aria-label": "Filter conditions", children: c.map((p, _) => {
      const b = y(p.property), O = l ? [Or[b.type ?? "string"]] : pl, v = !$r.includes(p.operator), $ = p.secondOperator != null;
      return /* @__PURE__ */ D(Js, { children: [
        /* @__PURE__ */ D("div", { className: ht.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: ht.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            or,
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
                  operator: Or[C?.type ?? "string"],
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
            or,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: ht.operator,
              value: p.operator,
              onChange: (S) => {
                const C = S.target.value;
                u(
                  p.id,
                  $r.includes(C) ? {
                    operator: C,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: C }
                );
              },
              options: O.map((S) => ({
                value: S,
                label: go[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            bo,
            {
              property: b,
              value: p.value,
              onChange: (S) => u(p.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: ht.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => h(p.id),
              children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? $ ? /* @__PURE__ */ D(
          "div",
          {
            className: [ht.row, ht.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                or,
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
              /* @__PURE__ */ o(
                or,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: ht.operator,
                  value: p.secondOperator,
                  onChange: (S) => {
                    const C = S.target.value;
                    u(
                      p.id,
                      $r.includes(C) ? { secondOperator: C, secondValue: void 0 } : { secondOperator: C }
                    );
                  },
                  options: O.map((S) => ({
                    value: S,
                    label: go[S]
                  }))
                }
              ),
              p.secondOperator == null || !$r.includes(p.secondOperator) ? /* @__PURE__ */ o(
                bo,
                {
                  property: b,
                  value: p.secondValue,
                  onChange: (S) => u(p.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ o(
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
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: ht.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: ht.addSecond,
            onClick: () => u(p.id, {
              secondOperator: Or[b.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ D("div", { className: ht.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: ht.add, onClick: x, children: "Add filter" }),
      a != null ? /* @__PURE__ */ o("div", { className: ht.custom, children: a }) : null,
      s != null ? /* @__PURE__ */ D("span", { className: ht.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const bc = "_pager_1du31_1", yc = "_alignLeft_1du31_10", xc = "_alignCenter_1du31_14", vc = "_alignRight_1du31_18", wc = "_alignJustify_1du31_22", kc = "_summary_1du31_26", Nc = "_controls_1du31_31", Sc = "_button_1du31_37", Oc = "_active_1du31_73", $c = "_ellipsis_1du31_85", Ec = "_size_1du31_91", Ft = {
  pager: bc,
  alignLeft: yc,
  alignCenter: xc,
  alignRight: vc,
  alignJustify: wc,
  summary: kc,
  controls: Nc,
  button: Sc,
  active: Oc,
  ellipsis: $c,
  size: Ec
};
function Tc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function yo(e, t) {
  return e.replace("{0}", String(t));
}
function Cc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (s, a) => a + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const i = Math.min(t, l + n - 1);
  l = Math.max(1, i - n + 1);
  const d = [];
  for (let s = l; s <= i; s++) d.push(s);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), i < t - 1 && d.push("ellipsis"), i < t && d.push(t), d;
}
function Ac({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: i = 5,
  alwaysVisible: d = !1,
  horizontalAlign: s = "left",
  showPagingSummary: a,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: x = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: y = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: b,
  onPageSizeChange: O,
  ariaLabel: v = "Pagination",
  className: $,
  visible: S = !0
}) {
  const C = n ?? r, [A, L] = q(C), z = n !== void 0, T = z ? C : A, w = Math.max(1, Math.ceil(e / t)), k = Math.min(Math.max(1, T), w), E = a ?? !0, R = d || w > 1, I = Cc(k, w, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), w);
      z || L(we);
      const le = (we - 1) * t;
      b?.({
        page: we,
        skip: le,
        top: t,
        pageCount: w,
        pageSize: t
      });
    },
    [z, b, w, t]
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
    ), le = we.indexOf(document.activeElement);
    le !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[le + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[le - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return S === !1 || !R ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [Ft.pager, F, $].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        E && /* @__PURE__ */ o("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : Tc(f, k, w, e) }),
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
                  "aria-label": h,
                  title: h,
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
              I.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === k ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === k ? "page" : void 0,
                    "aria-label": yo(_, te),
                    title: yo(p, te),
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
                  "aria-label": m,
                  title: m,
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
                  "aria-label": y,
                  title: y,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ D("label", { className: Ft.size, children: [
          /* @__PURE__ */ o("span", { children: x }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (te) => O?.(Number(te.target.value)),
              "aria-label": x,
              children: l.map((te) => /* @__PURE__ */ o("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function js(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ o(
    Ac,
    {
      page: t,
      showPagingSummary: l,
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
const gl = "";
function Dc(e, t, n, r, l) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((a) => a.property === s), d = (s, a, c) => {
    const f = t[a];
    if (f === void 0)
      return s.map((m) => ({ type: "row", row: m }));
    const u = i(f), x = /* @__PURE__ */ new Map(), h = [];
    s.forEach((m) => {
      const y = String(l(m, f) ?? ""), p = x.get(y);
      p ? p.push(m) : (x.set(y, [m]), h.push(y));
    });
    const g = [];
    return h.forEach((m) => {
      const y = x.get(m), p = [...c, m].join(gl), _ = y[0], b = _ !== void 0 ? l(_, f) : void 0;
      g.push({
        type: "group",
        group: {
          key: p,
          display: _s(b, u?.format),
          property: f,
          title: u?.title ?? f,
          count: y.length,
          level: a
        }
      }), r.has(p) && g.push(...d(y, a + 1, [...c, m]));
    }), g;
  };
  return d(e, 0, []);
}
function xo(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, s) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const x = String(n(u, a) ?? ""), h = c.get(x);
      h ? h.push(u) : (c.set(x, [u]), f.push(x));
    }), f.forEach((u) => {
      const x = [...s, u].join(gl);
      r.add(x), l(c.get(u), d + 1, [...s, u]);
    });
  };
  return l(e, 0, []), r;
}
function Zr(e, t) {
  return e.property ?? `col-${t}`;
}
function Mc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Ic(e, t) {
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
function nr(e, t) {
  if (t != null)
    return fs(e, t);
}
function _s(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const vo = [
  "Ascending",
  "Descending",
  null
];
function zc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = vo[(r ? vo.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Lc(e, t) {
  return tc(e, t);
}
function Rc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Pc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, a]) => ({
      property: s,
      operator: a.operator ?? "Contains",
      value: Ic(
        a.value,
        n.types?.[s] ?? "string"
      )
    })
  ), l = r.length > 0 ? hl(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Lc(l, t.sorts);
  return {
    ...Rc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function wo(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function jc(e, t, n) {
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
function Bc(e, t, n = nr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(_s(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Fc = "_grid_13rur_1", Hc = "_toolbar_13rur_8", Uc = "_picker_13rur_13", qc = "_pickerButton_13rur_17", Wc = "_pickerPanel_13rur_31", Kc = "_pickerItem_13rur_46", Gc = "_groupPanel_13rur_55", Vc = "_groupPanelActive_13rur_66", Yc = "_groupPanelText_13rur_70", Xc = "_groupChip_13rur_74", Zc = "_groupRemove_13rur_85", Jc = "_groupRow_13rur_94", Qc = "_groupCell_13rur_98", ed = "_groupToggle_13rur_104", td = "_editRow_13rur_117", nd = "_editCell_13rur_121", rd = "_editInput_13rur_127", sd = "_commandCell_13rur_137", od = "_commandButton_13rur_144", ld = "_data_13rur_159", ad = "_table_13rur_166", id = "_header_13rur_172", cd = "_center_13rur_185", dd = "_right_13rur_189", ud = "_sortButton_13rur_193", fd = "_sortIndicator_13rur_211", _d = "_sortIndex_13rur_215", pd = "_cell_13rur_226", md = "_clickable_13rur_241", hd = "_frozen_13rur_249", gd = "_selected_13rur_255", bd = "_resizeHandle_13rur_263", yd = "_filterCell_13rur_281", xd = "_filterSelect_13rur_290", vd = "_filterInput_13rur_300", wd = "_empty_13rur_311", kd = "_loading_13rur_317", Nd = "_visuallyHidden_13rur_331", Sd = "_virtualScroller_13rur_340", Od = "_spacerRow_13rur_345", $d = "_footerRow_13rur_350", Ed = "_footerCell_13rur_354", Td = "_footerValue_13rur_361", Se = {
  grid: Fc,
  toolbar: Hc,
  picker: Uc,
  pickerButton: qc,
  pickerPanel: Wc,
  pickerItem: Kc,
  groupPanel: Gc,
  groupPanelActive: Vc,
  groupPanelText: Yc,
  groupChip: Xc,
  groupRemove: Zc,
  groupRow: Jc,
  groupCell: Qc,
  groupToggle: ed,
  editRow: td,
  editCell: nd,
  editInput: rd,
  commandCell: sd,
  commandButton: od,
  data: ld,
  table: ad,
  header: id,
  center: cd,
  right: dd,
  sortButton: ud,
  sortIndicator: fd,
  sortIndex: _d,
  cell: pd,
  clickable: md,
  frozen: hd,
  selected: gd,
  resizeHandle: bd,
  filterCell: yd,
  filterSelect: xd,
  filterInput: vd,
  empty: wd,
  loading: kd,
  visuallyHidden: Nd,
  virtualScroller: Sd,
  spacerRow: Od,
  footerRow: $d,
  footerCell: Ed,
  footerValue: Td
}, Cd = {
  Ascending: "ascending",
  Descending: "descending"
};
function ko(e, t) {
  return e.filterable ?? t;
}
function Ad(e, t) {
  return e.sortable ?? t;
}
function Dd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function xS({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: x = 5,
  pagerPosition: h = "Bottom",
  showPagingSummary: g = !0,
  showPageSizeSelector: m = !0,
  selectionMode: y = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: b = !1,
  columnPickerText: O = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: S = !1,
  groupPanelText: C = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: L,
  showExportButton: z = !1,
  exportFileName: T = "grid-data",
  serverMode: w = !1,
  totalCount: k,
  onRangeChange: E,
  virtualize: R = !1,
  virtualRowHeight: I = 40,
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
    () => e.map((H, U) => Zr(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? Zr(H, U) : "").filter(Boolean)
    )
  ), [yt, Z] = q({}), [M, Y] = q(!1), [Q, ge] = q([]), [ae, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, re] = q(0), [Le, Nt] = q(j), Rt = oe(null), xt = oe(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, be) => H.set(Zr(U, be), U)), H;
  }, [e]), We = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => Mc(We, yt),
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
    return Pc(
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
    ne,
    fe,
    a,
    s,
    e,
    w,
    k,
    c
  ]), V = oe(E);
  ve(() => {
    V.current = E;
  });
  const me = Oe(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? wo(
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
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => ae || (A ? xo(at.items, Q, nr) : /* @__PURE__ */ new Set()), [ae, A, at.items, Q]), Pt = Oe(
    () => Dc(at.items, Q, e, Ye, nr),
    [at.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? We.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : We,
    [We, Q, Ve]
  ), W = (H) => {
    H !== "" && De(zc(pe, H, { multi: l }));
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
      const be = U ?? (A ? xo(at.items, Q, nr) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(H) ? xe.delete(H) : xe.add(H), xe;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((be) => {
      be.property && (U[be.property] = nr(H, be.property));
    }), nt(U), Ze(String(n(H)));
  }, pn = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), nt(H), Ze("__new__");
  }, Tn = () => {
    Ze(null), nt({});
  }, jn = (H) => {
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
  }, wn = c && (h === "Top" || h === "TopAndBottom"), Gr = c && (h === "Bottom" || h === "TopAndBottom"), xs = d && e.some((H) => ko(H, d)), vs = (H, U, be) => H.render ? H.render(U, { index: 0 }) : _s(nr(U, H.property), H.format), ws = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, mn = w ? t : at.filtered, Vr = () => {
    const H = Bc(
      mn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(U), xe = document.createElement("a");
    xe.href = be, xe.download = `${T}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, hn = Pt.length, jt = Oe(() => {
    if (!R || hn === 0)
      return { start: 0, end: hn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / I) - H
    ), be = Math.ceil(Le / I) + H * 2, xe = Math.min(hn, U + be), et = U * I, Dt = Math.max(0, (hn - xe) * I);
    return { start: U, end: xe, top: et, bottom: Dt };
  }, [R, hn, Xt, I, Le]), vr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ D("div", { className: [Se.grid, he].filter(Boolean).join(" "), children: [
    wn && /* @__PURE__ */ o(
      js,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: g,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${Gr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || b || z) && /* @__PURE__ */ D("div", { className: Se.toolbar, children: [
      S && /* @__PURE__ */ o(
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
          }) : /* @__PURE__ */ o("span", { className: Se.groupPanelText, children: C })
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
            "aria-expanded": M,
            onClick: () => Y((H) => !H),
            children: O
          }
        ),
        M && /* @__PURE__ */ o(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": O,
            children: e.map((H, U) => {
              const be = Zr(H, U);
              return /* @__PURE__ */ D("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ o(
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
      z && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Vr,
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
                  Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o(
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
                  $t && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ D("thead", { children: [
                  /* @__PURE__ */ D("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const be = Ad(U, r), xe = pe.find((wt) => wt.property === U.property), et = xe ? pe.indexOf(xe) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ D(
                        "th",
                        {
                          "aria-sort": be && xe ? Cd[xe.sortOrder] : "none",
                          className: [
                            Se.header,
                            Dt === "center" ? Se.center : "",
                            Dt === "right" ? Se.right : "",
                            U.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: $ || S || void 0,
                          onDragStart: $ || S ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), it(H);
                          } : void 0,
                          onDragOver: $ ? (wt) => wt.preventDefault() : void 0,
                          onDrop: $ ? () => rt(H) : void 0,
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
                                  xe && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: xe.sortOrder === "Ascending" ? "▲" : "▼"
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
                    $t && /* @__PURE__ */ o("th", { className: Se.header, scope: "col", children: "Actions" })
                  ] }),
                  xs && /* @__PURE__ */ o("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!ko(U, d))
                      return /* @__PURE__ */ o("td", { className: Se.filterCell }, H);
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
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${U.property}`,
                          className: Se.filterSelect,
                          value: be?.operator ?? wo(U.type ?? "string"),
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: pl.filter((xe) => xe !== "Custom").map(
                            (xe) => /* @__PURE__ */ o("option", { value: xe, children: xe }, xe)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
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
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o("td", { className: Se.editCell, children: U.property && /* @__PURE__ */ o(
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
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: () => jn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
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
                  jt.top > 0 && /* @__PURE__ */ o("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: vr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const be = jt.start + U, xe = R ? be + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ o("td", { colSpan: vr, className: Se.groupCell, children: /* @__PURE__ */ D(
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
                          Dd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: ws(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: gn && gt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((ks) => ({
                                    ...ks,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : vs(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ o("td", { className: Se.commandCell, children: gn ? /* @__PURE__ */ D(pt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => jn(et),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: Tn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ D(pt, { children: [
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
                      colSpan: vr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                L && L.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ D("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const be = L.filter(
                      (xe) => xe.property === U.property
                    );
                    return /* @__PURE__ */ o(
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
                              _s(
                                jc(mn, xe, nr),
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
                  $t && /* @__PURE__ */ o("td", { className: Se.footerCell })
                ] }) })
              ]
            }
          ),
          at.items.length === 0 && !le && /* @__PURE__ */ o("div", { className: Se.empty, children: _e }),
          le && /* @__PURE__ */ o("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Gr && /* @__PURE__ */ o(
      js,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: g,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const Md = "_wrap_avqds_1", Id = "_grid_avqds_7", zd = "_stacked_avqds_13", Ld = "_item_avqds_19", Rd = "_empty_avqds_25", Er = {
  wrap: Md,
  grid: Id,
  stacked: zd,
  item: Ld,
  empty: Rd
};
function vS({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: i = "No records found",
  emptyTemplate: d,
  loadingTemplate: s,
  isLoading: a = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [x, h] = q(1), [g, m] = q(t), y = e.length, p = Math.max(1, Math.ceil(y / g)), _ = Math.min(Math.max(1, x), p), b = Oe(() => {
    const v = (_ - 1) * g;
    return e.slice(v, v + g);
  }, [e, _, g]), O = r ? Er.grid : Er.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Er.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && s != null ? s : y === 0 ? d ?? /* @__PURE__ */ o("div", { className: Er.empty, children: i }) : /* @__PURE__ */ o("div", { className: O, children: b.map((v, $) => /* @__PURE__ */ o("div", { className: Er.item, children: l ? l(v, $) : String(v) }, $)) }),
        /* @__PURE__ */ o(
          js,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: g,
            count: y,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: h,
            onPageSizeChange: (v) => {
              m(v), h(1);
            }
          }
        )
      ]
    }
  );
}
const Pd = "_label_1qfpw_1", jd = {
  label: Pd
}, wS = st(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [jd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Bd = "_textbox_oly89_1", Fd = "_invalid_oly89_37", Hd = "_xs_oly89_44", Ud = "_sm_oly89_50", qd = "_md_oly89_56", Wd = "_lg_oly89_62", Kd = "_xl_oly89_68", $s = {
  textbox: Bd,
  invalid: Fd,
  xs: Hd,
  sm: Ud,
  md: qd,
  lg: Wd,
  xl: Kd
}, eo = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: i = "text",
    ...d
  }, s) {
    return l === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: s,
        type: i,
        "data-size": t,
        className: [
          $s.textbox,
          $s[t],
          n ? $s.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Jr = eo, Gd = "_checkbox_1bb6c_1", Vd = {
  checkbox: Gd
}, Yd = st(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const i = oe(null);
    return ve(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Vd.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), Xd = {
  switch: "_switch_19gf1_1"
}, kS = st(function({ className: t, ...n }, r) {
  const [l, i] = q(
    !!n.defaultChecked
  ), d = n.checked ?? l;
  return /* @__PURE__ */ o(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": d,
      className: [Xd.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && i(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), Zd = "_trigger_1jlxf_1", Jd = "_tooltip_1jlxf_7", Qd = "_top_1jlxf_34", eu = "_right_1jlxf_40", tu = "_bottom_1jlxf_46", nu = "_left_1jlxf_52", ru = "_arrow_1jlxf_58", su = "_floating_1jlxf_70", Fn = {
  trigger: Zd,
  tooltip: Jd,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: Qd,
  right: eu,
  bottom: tu,
  left: nu,
  arrow: ru,
  floating: su,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, Qr = 8;
function ou(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + Qr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - Qr,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + Qr,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - Qr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function NS({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const s = ot(), a = oe(null), c = oe(null), f = oe(() => {
  }), [u, x] = q(!1), [h, g] = q(null), m = () => {
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
    const b = (O) => {
      O.key === "Escape" && p();
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [i, u]), ve(() => {
    if (!i) return;
    let b = null, O = null;
    const v = () => {
      b !== null && (window.clearTimeout(b), b = null);
    }, $ = () => {
      v(), O = null, g(null);
    };
    f.current = $;
    const S = (w) => {
      v(), O = w, b = window.setTimeout(() => {
        b = null, g(w);
      }, r);
    }, C = (w) => w instanceof Element ? w.closest(i) : null, A = (w) => {
      const k = C(w.target);
      !k || k === O || S(k);
    }, L = (w) => {
      const k = C(w.target);
      if (!k || k !== O) return;
      const E = w.relatedTarget;
      E instanceof Element && k.contains(E) || $();
    }, z = (w) => {
      w.key === "Escape" && $();
    }, T = () => $();
    return document.addEventListener("mouseover", A), document.addEventListener("mouseout", L), document.addEventListener("focusin", A), document.addEventListener("focusout", L), document.addEventListener("keydown", z), document.addEventListener("scroll", T, !0), window.addEventListener("resize", T), () => {
      v(), document.removeEventListener("mouseover", A), document.removeEventListener("mouseout", L), document.removeEventListener("focusin", A), document.removeEventListener("focusout", L), document.removeEventListener("keydown", z), document.removeEventListener("scroll", T, !0), window.removeEventListener("resize", T), O = null, g(null);
    };
  }, [i, r]), ve(() => {
    if (!i || h === null || l == null) return;
    const b = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(b);
  }, [i, h, l]), Ps(() => {
    const b = h;
    if (!b) return;
    const O = b.getAttribute("aria-describedby");
    return b.setAttribute(
      "aria-describedby",
      [O, s].filter(Boolean).join(" ")
    ), () => {
      O == null ? b.removeAttribute("aria-describedby") : b.setAttribute("aria-describedby", O);
    };
  }, [h, s]), Ps(() => {
    const b = c.current, O = h;
    !b || !O || Object.assign(
      b.style,
      ou(O.getBoundingClientRect(), n)
    );
  }, [h, n]), i)
    return h ? /* @__PURE__ */ D(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: s,
        className: [
          Fn.tooltip,
          Fn[n],
          Fn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: Fn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = qt(t) ? Zs(t, {
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
        className: [Fn.trigger, d].filter(Boolean).join(" "),
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
              id: s,
              className: [Fn.tooltip, Fn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: Fn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const lu = "_dialog_1t7pw_1", au = "_sm_1t7pw_104", iu = "_resizable_1t7pw_110", cu = "_md_1t7pw_113", du = "_lg_1t7pw_117", uu = "_header_1t7pw_121", fu = "_title_1t7pw_132", _u = "_description_1t7pw_139", pu = "_close_1t7pw_146", mu = "_body_1t7pw_176", hu = "_footer_1t7pw_188", bn = {
  dialog: lu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: au,
  resizable: iu,
  md: cu,
  lg: du,
  header: uu,
  title: fu,
  description: _u,
  close: pu,
  body: mu,
  footer: hu
};
function bl({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: i,
  size: d = "md",
  width: s,
  height: a,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: x = null,
  showCloseButton: h = !0,
  showMask: g = !0,
  canClose: m,
  className: y
}) {
  const p = oe(null), _ = ot(), b = ot(), O = oe(t);
  ve(() => {
    O.current = t;
  });
  const v = oe(m);
  ve(() => {
    v.current = m;
  });
  const $ = oe(f);
  ve(() => {
    $.current = f;
  });
  const S = oe(!1), C = oe(!1), A = B(() => {
    if (S.current) return;
    const T = v.current?.();
    if (T instanceof Promise) {
      T.then((w) => {
        w && !S.current && (S.current = !0, O.current());
      });
      return;
    }
    T !== !1 && (S.current = !0, O.current());
  }, []), L = B(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    O.current();
  }, []), z = B(
    (T) => {
      if (T.key !== "Tab" || !p.current) return;
      const w = Array.from(
        p.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (E) => E.offsetWidth > 0 || E.offsetHeight > 0 || E === document.activeElement
      );
      if (w.length === 0) {
        T.preventDefault();
        return;
      }
      const k = w.indexOf(document.activeElement);
      if (T.shiftKey) {
        if (k <= 0) {
          T.preventDefault();
          const E = w[w.length - 1];
          E && E.focus();
        }
      } else if (k === -1 || k === w.length - 1) {
        T.preventDefault();
        const E = w[0];
        E && E.focus();
      }
    },
    []
  );
  return ve(() => {
    const T = p.current;
    if (T)
      if (e && !T.open) {
        const w = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        T.showModal(), (T.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? T.querySelector("button"))?.focus();
        const E = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const R = (I) => {
          I.preventDefault(), $.current && A();
        };
        return T.addEventListener("cancel", R), () => {
          T.removeEventListener("cancel", R), document.body.style.overflow = E, w?.focus({ preventScroll: !0 });
        };
      } else !e && T.open && (C.current = S.current, S.current = !1, T.close());
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
        g === !1 ? bn["no-mask"] : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: L,
      onClick: (T) => {
        T.target === p.current && c && A();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? b : void 0,
      onKeyDown: z,
      children: [
        n && /* @__PURE__ */ D("header", { className: bn.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ o("h2", { id: _, className: bn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: b, className: bn.description, children: r })
          ] }),
          h !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: bn.close,
              onClick: () => {
                A();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: bn.body, children: l }),
        i && /* @__PURE__ */ o("footer", { className: bn.footer, children: i })
      ]
    }
  );
}
const gu = "_typography_1jy8x_1", bu = "_h1_1jy8x_39", yu = "_h2_1jy8x_45", xu = "_h3_1jy8x_51", vu = "_h4_1jy8x_57", wu = "_h5_1jy8x_63", ku = "_h6_1jy8x_69", Nu = "_button_1jy8x_99", Su = "_caption_1jy8x_106", Ou = "_overline_1jy8x_112", Es = {
  typography: gu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: bu,
  h2: yu,
  h3: xu,
  h4: vu,
  h5: wu,
  h6: ku,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Nu,
  caption: Su,
  overline: Ou,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, $u = {
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
}, Eu = {
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
}, Tu = {
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
}, Cu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, yl = st(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: i = !0,
  className: d,
  children: s,
  ...a
}, c) {
  if (i === !1) return null;
  const f = n === "Auto" ? $u[t] : Tu[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: c,
      className: [
        Es.typography,
        Es[Eu[t]],
        r ? Es[Cu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? s
    }
  );
}), xl = lr(null);
function SS() {
  const e = Pn(xl);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function OS({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = oe(0), i = () => (l.current += 1, l.current), d = oe([]);
  d.current = t;
  const s = (x) => {
    const h = d.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!x) : h.kind === "alert" ? h.resolve() : h.resolve(x), n((g) => g.slice(1)));
  }, a = Oe(
    () => ({
      confirm: (x = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "confirm", options: x, resolve: h }
        ]);
      }),
      alert: (x = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "alert", options: x, resolve: h }
        ]);
      }),
      open: (x = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "custom", options: x, resolve: h }
        ]);
      }),
      openSide: ({ position: x, showMask: h = !0, ...g }) => new Promise((m) => {
        n((y) => [
          ...y,
          {
            seq: i(),
            kind: "custom",
            options: { ...g, side: x, showMask: h },
            resolve: m
          }
        ]);
      }),
      close: (x) => s(x),
      closeAll: () => {
        n((x) => (x.forEach((h) => {
          h.kind === "confirm" ? h.resolve(!1) : h.kind === "alert" ? h.resolve() : h.resolve(void 0);
        }), []));
      },
      refresh: () => r((x) => x + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), c = t[0];
  function f(x) {
    c && (c.kind === "confirm" ? c.resolve(!!x) : c.kind === "alert" ? c.resolve() : c.resolve(x), n((h) => h.slice(1)));
  }
  const u = c?.kind === "custom" ? c.options : null;
  return /* @__PURE__ */ D(xl.Provider, { value: a, children: [
    e,
    /* @__PURE__ */ o(
      bl,
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
          /* @__PURE__ */ o(an, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            an,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ o(an, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(an, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ o(yl, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Au = "_viewport_11t1p_1", Du = "_topLeft_11t1p_13", Mu = "_topRight_11t1p_20", Iu = "_bottomLeft_11t1p_25", zu = "_toast_11t1p_30", Lu = "_leaving_11t1p_61", Ru = "_info_11t1p_77", Pu = "_success_11t1p_86", ju = "_warning_11t1p_95", Bu = "_danger_11t1p_104", Fu = "_content_11t1p_113", Hu = "_title_11t1p_118", Uu = "_description_11t1p_141", qu = "_dismiss_11t1p_148", Wu = "_actions_11t1p_169", Ku = "_action_11t1p_169", Gu = "_cancel_11t1p_177", Vu = "_progress_11t1p_215", en = {
  viewport: Au,
  topLeft: Du,
  topRight: Mu,
  bottomLeft: Iu,
  toast: zu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Lu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Ru,
  success: Pu,
  warning: ju,
  danger: Bu,
  content: Fu,
  title: Hu,
  description: Uu,
  dismiss: qu,
  actions: Wu,
  action: Ku,
  cancel: Gu,
  progress: Vu,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, vl = lr(null);
function $S() {
  const e = Pn(vl);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Yu = 200, Xu = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function ES({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = q([]), [s, a] = q(!1), c = oe([]), f = oe(/* @__PURE__ */ new Map()), u = oe(!1), x = oe(0), h = (k) => {
    u.current = k, a(k);
  }, g = B((k) => {
    const E = f.current.get(k);
    E && (window.clearTimeout(E.timeoutId), E.remaining = Math.max(
      0,
      E.remaining - (Date.now() - E.startedAt)
    ));
  }, []), m = B((k) => {
    const E = f.current.get(k);
    E && (window.clearTimeout(E.timeoutId), f.current.delete(k));
  }, []), y = B(
    (k) => {
      m(k), d((E) => {
        const R = E.filter((I) => I.id !== k);
        return c.current = R, R;
      });
    },
    [m]
  ), p = B(
    (k) => {
      const E = c.current.find((R) => R.id === k);
      !E || E.leaving || (E.onAutoClose?.(), y(k));
    },
    [y]
  ), _ = B(
    (k) => {
      const E = f.current.get(k);
      !E || E.remaining <= 0 || (E.startedAt = Date.now(), E.timeoutId = window.setTimeout(() => p(k), E.remaining));
    },
    [p]
  ), b = B(() => {
    u.current || f.current.forEach((k, E) => g(E)), h(!0);
  }, [g]), O = B(() => {
    f.current.forEach((k, E) => _(E)), h(!1);
  }, [_]);
  ve(() => {
    if (!r) return;
    const k = () => {
      document.hidden ? b() : O();
    };
    return document.addEventListener("visibilitychange", k), () => document.removeEventListener("visibilitychange", k);
  }, [r, b, O]);
  const v = B(
    (k) => {
      const E = c.current.find((R) => R.id === k);
      !E || E.leaving || (E.onDismiss?.(), d((R) => {
        const I = R.map(
          (j) => j.id === k ? { ...j, leaving: !0 } : j
        );
        return c.current = I, I;
      }), window.setTimeout(() => y(k), Yu));
    },
    [y]
  ), $ = B(
    (k) => {
      if (k.durationMs <= 0) return;
      const E = {
        remaining: k.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(k.id, E), u.current || _(k.id);
    },
    [_]
  ), S = B(
    (k) => {
      const E = c.current.find((I) => I.id === k.id), R = {
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
      d((I) => {
        const j = E ? I.map(
          (F) => F.id === R.id ? { ...R, leaving: !1 } : F
        ) : [...I, R];
        return c.current = j, j;
      }), E && m(R.id), $(R);
    },
    [t, n, $, m]
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
    (k) => (E, R) => C({ severity: k, summary: E, detail: R }),
    [C]
  ), L = Oe(
    () => ({
      toast: S,
      notify: C,
      notifyInfo: A("info"),
      notifySuccess: A("success"),
      notifyWarning: A("warning"),
      notifyError: A("danger")
    }),
    [S, C, A]
  ), z = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((k) => k.position)])),
    [n, i]
  ), T = r ? b : void 0, w = r ? O : void 0;
  return /* @__PURE__ */ D(vl.Provider, { value: L, children: [
    e,
    z.map((k) => /* @__PURE__ */ o(
      "div",
      {
        className: [en.viewport, en[Xu[k]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: T,
        onMouseLeave: w,
        children: i.filter((E) => E.position === k).map((E) => /* @__PURE__ */ D(
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
              E.click?.(E.payload), E.closeOnClick && v(E.id);
            } : void 0,
            children: [
              /* @__PURE__ */ D("div", { className: en.content, children: [
                /* @__PURE__ */ o("div", { className: en.title, children: E.title }),
                E.description && /* @__PURE__ */ o("div", { className: en.description, children: E.description }),
                (E.action || E.cancel) && /* @__PURE__ */ D("div", { className: en.actions, children: [
                  E.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.action,
                      onClick: () => {
                        E.action?.onClick?.(), v(E.id);
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
                        E.cancel?.onClick?.(), v(E.id);
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
                  onClick: () => v(E.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
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
      k
    ))
  ] });
}
const Zu = "_chat_1apnf_3", Ju = "_messages_1apnf_9", Qu = "_message_1apnf_9", ef = "_user_1apnf_29", tf = "_assistant_1apnf_35", nf = "_system_1apnf_40", rf = "_typing_1apnf_46", sf = "_inputRow_1apnf_51", dr = {
  chat: Zu,
  messages: Ju,
  message: Qu,
  user: ef,
  assistant: tf,
  system: nf,
  typing: rf,
  inputRow: sf
};
function TS({
  messages: e = [],
  onSend: t,
  placeholder: n = "Type a message…",
  sendText: r = "Send",
  inputLabel: l = "Message",
  ariaLabel: i = "Chat",
  messageTemplate: d,
  inputTemplate: s,
  loading: a = !1,
  disabled: c = !1,
  className: f
}) {
  const [u, x] = q(""), h = a || c, g = u.trim().length > 0 && !h, m = (p) => {
    p.preventDefault();
    const _ = u.trim();
    !_ || h || (x(""), t?.(_));
  }, y = /* @__PURE__ */ D("form", { className: dr.inputRow, onSubmit: (p) => {
    m(p);
  }, children: [
    /* @__PURE__ */ o(
      eo,
      {
        value: u,
        placeholder: n,
        "aria-label": l,
        disabled: h,
        onChange: (p) => x(p.target.value)
      }
    ),
    /* @__PURE__ */ o(an, { type: "submit", disabled: !g, loading: a, children: r })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      className: [dr.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: dr.messages, children: [
          e.map(
            (p, _) => d ? /* @__PURE__ */ o("div", { children: d(p, _) }, _) : /* @__PURE__ */ o(
              "div",
              {
                className: [dr.message, dr[p.role]].filter(Boolean).join(" "),
                children: p.content
              },
              _
            )
          ),
          a && /* @__PURE__ */ o("div", { className: dr.typing, children: "…" })
        ] }),
        s ? s(y) : y
      ]
    }
  );
}
const of = "_wrapper_1ulz6_1", lf = "_input_1ulz6_8", af = "_invalid_1ulz6_38", cf = "_toggle_1ulz6_45", df = "_xs_1ulz6_80", uf = "_sm_1ulz6_86", ff = "_md_1ulz6_92", _f = "_lg_1ulz6_98", pf = "_xl_1ulz6_104", Tr = {
  wrapper: of,
  input: lf,
  invalid: af,
  toggle: cf,
  xs: df,
  sm: uf,
  md: ff,
  lg: _f,
  xl: pf
}, mf = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...s
  }, a) {
    const [c, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Tr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Tr.input,
              Tr[t],
              n ? Tr.invalid : null,
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
            className: Tr.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : i,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ o(Me, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), hf = "_login_30qie_3", gf = "_title_30qie_9", bf = "_remember_30qie_14", yf = "_link_30qie_21", Cr = {
  login: hf,
  title: gf,
  remember: bf,
  link: yf
}, to = "dx-login-username";
function xf(e) {
  const t = e === void 0 ? to : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function vf(e, t) {
  const n = e === void 0 ? to : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function wf(e) {
  const t = e === void 0 ? to : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function CS({
  action: e,
  method: t = "post",
  onLogin: n,
  onRegister: r,
  onForgotPassword: l,
  registerContent: i,
  forgotPasswordContent: d,
  rememberMe: s = !0,
  loading: a = !1,
  title: c,
  usernameLabel: f = "Username",
  passwordLabel: u = "Password",
  submitText: x = "Sign in",
  storageKey: h,
  className: g
}) {
  const [m, y] = q(() => xf(h) ?? ""), [p, _] = q(""), [b, O] = q(!1), [v, $] = q(!1), [S, C] = q({}), A = a || v, L = e != null && n == null, z = async (T) => {
    L || T.preventDefault();
    const w = {};
    if (m.trim() || (w.username = "Username is required."), p || (w.password = "Password is required."), C(w), !(w.username || w.password || !n)) {
      $(!0);
      try {
        await n({
          username: m.trim(),
          password: p,
          rememberMe: b
        }), b ? vf(h, m.trim()) : wf(h);
      } finally {
        $(!1);
      }
    }
  };
  return /* @__PURE__ */ D(
    "form",
    {
      className: [Cr.login, g].filter(Boolean).join(" "),
      action: L ? e : void 0,
      method: L ? t : void 0,
      noValidate: !0,
      onSubmit: (T) => {
        z(T);
      },
      children: [
        c != null && /* @__PURE__ */ o("div", { className: Cr.title, children: c }),
        /* @__PURE__ */ o(sr, { label: f, required: !0, error: S.username, children: ({ inputId: T }) => /* @__PURE__ */ o(
          eo,
          {
            id: T,
            value: m,
            autoComplete: "username",
            disabled: A,
            "aria-invalid": S.username ? !0 : void 0,
            onChange: (w) => {
              y(w.target.value), C((k) => ({ ...k, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(sr, { label: u, required: !0, error: S.password, children: ({ inputId: T }) => /* @__PURE__ */ o(
          mf,
          {
            id: T,
            value: p,
            autoComplete: "current-password",
            disabled: A,
            "aria-invalid": S.password ? !0 : void 0,
            onChange: (w) => {
              _(w.target.value), C((k) => ({ ...k, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ D("label", { className: Cr.remember, children: [
          /* @__PURE__ */ o(
            Yd,
            {
              checked: b,
              disabled: A,
              onChange: (T) => O(T.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(an, { type: "submit", loading: A, disabled: A, children: x }),
        (d ?? l) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Cr.link,
            onClick: () => l?.(),
            children: d ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Cr.link,
            onClick: () => r?.(),
            children: i ?? "Create account"
          }
        )
      ]
    }
  );
}
function No(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kf(e) {
  if (Array.isArray(e)) return e;
}
function Nf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, l, i, d, s = [], a = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(a = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); a = !0) ;
    } catch (f) {
      c = !0, l = f;
    } finally {
      try {
        if (!a && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw l;
      }
    }
    return s;
  }
}
function Sf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Of(e, t) {
  return kf(e) || Nf(e, t) || $f(e, t) || Sf();
}
function $f(e, t) {
  if (e) {
    if (typeof e == "string") return No(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? No(e, t) : void 0;
  }
}
const wl = Object.entries, So = Object.setPrototypeOf, Ef = Object.isFrozen, Tf = Object.getPrototypeOf, Cf = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, br = Object.create, kl = typeof Reflect < "u" && Reflect, Bs = kl.apply, Fs = kl.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
Bs || (Bs = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) l[i - 2] = arguments[i];
  return t.apply(n, l);
});
Fs || (Fs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const rr = bt(Array.prototype.forEach), Af = bt(Array.prototype.lastIndexOf), Oo = bt(Array.prototype.pop), Ar = bt(Array.prototype.push), Df = bt(Array.prototype.splice), yr = Array.isArray, Hr = bt(String.prototype.toLowerCase), Ts = bt(String.prototype.toString), $o = bt(String.prototype.match), Dr = bt(String.prototype.replace), Eo = bt(String.prototype.indexOf), Mf = bt(String.prototype.trim), If = bt(Number.prototype.toString), zf = bt(Boolean.prototype.toString), To = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), Co = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Vt = bt(Object.prototype.hasOwnProperty), Mr = bt(Object.prototype.toString), zt = bt(RegExp.prototype.test), Hn = Lf(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return Bs(e, t, r);
  };
}
function Lf(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Fs(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hr;
  if (So && So(e, null), !yr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const i = n(l);
      i !== l && (Ef(t) || (t[r] = i), l = i);
    }
    e[l] = !0;
  }
  return e;
}
function Rf(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = br(null);
  for (const r of wl(e)) {
    var n = Of(r, 2);
    const l = n[0], i = n[1];
    Vt(e, l) && (yr(i) ? t[l] = Rf(i) : i && typeof i == "object" && i.constructor === Object ? t[l] = sn(i) : t[l] = i);
  }
  return t;
}
function Pf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return If(e);
    case "boolean":
      return zf(e);
    case "bigint":
      return To ? To(e) : "0";
    case "symbol":
      return Co ? Co(e) : "Symbol()";
    case "undefined":
      return Mr(e);
    case "function":
    case "object": {
      if (e === null) return Mr(e);
      const t = e, n = _n(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Mr(r);
      }
      return Mr(e);
    }
    default:
      return Mr(e);
  }
}
function _n(e, t) {
  for (; e !== null; ) {
    const r = Cf(e, t);
    if (r) {
      if (r.get) return bt(r.get);
      if (typeof r.value == "function") return bt(r.value);
    }
    e = Tf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function jf(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ao = kt([
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
]), Cs = kt([
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
]), As = kt([
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
]), Bf = kt([
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
]), Ds = kt([
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
]), Ff = kt([
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
]), Do = kt(["#text"]), Mo = kt([
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
]), Ms = kt([
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
]), Io = kt([
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
]), es = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Hf = Ot(/{{[\w\W]*|^[\w\W]*}}/g), Uf = Ot(/<%[\w\W]*|^[\w\W]*%>/g), qf = Ot(/\${[\w\W]*/g), Wf = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), Kf = Ot(/^aria-[\-\w]+$/), zo = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Gf = Ot(/^(?:\w+script|data):/i), Vf = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Yf = Ot(/^html$/i), Xf = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Lo = Ot(/<[/\w!]/g), Ro = Ot(/<[/\w]/g), Zf = Ot(/<\/no(script|embed|frames)/i), Jf = Ot(/\/>/i), tn = {
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
}, Nl = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], Qf = kt(qe({}, Nl)), e_ = (function() {
  const e = {};
  return rr(Nl, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), t_ = function() {
  return typeof window > "u" ? null : window;
}, n_ = function(t, n) {
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
}, Po = function() {
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
}, Un = function(t, n, r, l) {
  return Vt(t, n) && yr(t[n]) ? qe(l.base ? sn(l.base) : {}, t[n], l.transform) : r;
}, Is = function(t, n, r) {
  const l = Vt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? sn(l) : r();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t_();
  const t = (se) => Sl(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, d = e.Node, s = e.Element, a = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = s.prototype, x = _n(u, "cloneNode"), h = _n(u, "remove"), g = _n(u, "removeAttributeNode"), m = _n(u, "nextSibling"), y = _n(u, "childNodes"), p = _n(u, "parentNode"), _ = _n(u, "shadowRoot"), b = _n(u, "attributes"), O = d && d.prototype ? _n(d.prototype, "nodeType") : null, v = d && d.prototype ? _n(d.prototype, "nodeName") : null, $ = d && d.prototype ? _n(d.prototype, "ownerDocument") : null, S = function(N) {
    return O ? O(N) : N.nodeType;
  }, C = function(N) {
    return v ? v(N) : N.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let A, L = "", z, T = !1, w = 0;
  const k = function() {
    if (w > 0) throw Hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, E = function(N) {
    k(), w++;
    try {
      return A.createHTML(N);
    } finally {
      w--;
    }
  }, R = function(N) {
    k(), w++;
    try {
      return A.createScriptURL(N);
    } finally {
      w--;
    }
  }, I = function() {
    return T || (z = n_(f, l), T = !0), z;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let le = Po();
  t.isSupported = typeof wl == "function" && typeof p == "function" && F && F.createHTMLDocument !== void 0;
  const _e = Hf, K = Uf, he = qf, ue = Wf, ye = Kf, pe = Gf, De = Vf, G = Xf;
  let $e = zo, ne = null;
  const Ae = qe({}, [
    ...Ao,
    ...Cs,
    ...As,
    ...Ds,
    ...Do
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...Mo,
    ...Ms,
    ...Io,
    ...es
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
  })), Je = null, At = null;
  const lt = Object.seal(br(null, {
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
  let yt = !0, Z = !0, M = !1, Y = !0, Q = !1, ge = !0, ae = !1, Ee = !1, je = null, Ze = null, Qe = !1, nt = !1, Xt = !1, re = !1, Le = !0, Nt = !1;
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
  ], Ts), ke = kt([
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
  const Zt = n.createElement("form"), pn = function(N) {
    return N instanceof RegExp || N instanceof Function;
  }, Tn = function() {
    let N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === N) return;
    (!N || typeof N != "object") && (N = {}), N = sn(N), rt = Et.indexOf(N.PARSER_MEDIA_TYPE) === -1 ? mt : N.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? Ts : Hr, ne = Un(N, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Un(N, "ALLOWED_ATTR", Fe, { transform: ze }), de = Un(N, "ALLOWED_NAMESPACES", Ne, { transform: Ts }), me = Un(N, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), at = Un(N, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Un(N, "FORBID_CONTENTS", $t, { transform: ze }), Je = Un(N, "FORBID_TAGS", sn({}), { transform: ze }), At = Un(N, "FORBID_ATTR", sn({}), { transform: ze }), We = Vt(N, "USE_PROFILES") ? N.USE_PROFILES && typeof N.USE_PROFILES == "object" ? sn(N.USE_PROFILES) : N.USE_PROFILES : !1, yt = N.ALLOW_ARIA_ATTR !== !1, Z = N.ALLOW_DATA_ATTR !== !1, M = N.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = N.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = N.SAFE_FOR_TEMPLATES || !1, ge = N.SAFE_FOR_XML !== !1, ae = N.WHOLE_DOCUMENT || !1, nt = N.RETURN_DOM || !1, Xt = N.RETURN_DOM_FRAGMENT || !1, re = N.RETURN_TRUSTED_TYPE || !1, Qe = N.FORCE_BODY || !1, Le = N.SANITIZE_DOM !== !1, Nt = N.SANITIZE_NAMED_PROPS || !1, xt = N.KEEP_CONTENT !== !1, Ie = N.IN_PLACE || !1, $e = jf(N.ALLOWED_URI_REGEXP) ? N.ALLOWED_URI_REGEXP : zo, W = typeof N.NAMESPACE == "string" ? N.NAMESPACE : Xe, Ce = Is(N, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = Is(N, "HTML_INTEGRATION_POINTS", () => qe({}, Ke));
    const P = Is(N, "CUSTOM_ELEMENT_HANDLING", () => br(null));
    if (Ge = br(null), Vt(P, "tagNameCheck") && pn(P.tagNameCheck) && (Ge.tagNameCheck = P.tagNameCheck), Vt(P, "attributeNameCheck") && pn(P.attributeNameCheck) && (Ge.attributeNameCheck = P.attributeNameCheck), Vt(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), We && (ne = qe({}, Do), fe = br(null), We.html === !0 && (qe(ne, Ao), qe(fe, Mo)), We.svg === !0 && (qe(ne, Cs), qe(fe, Ms), qe(fe, es)), We.svgFilters === !0 && (qe(ne, As), qe(fe, Ms), qe(fe, es)), We.mathMl === !0 && (qe(ne, Ds), qe(fe, Io), qe(fe, es))), lt.tagCheck = null, lt.attributeCheck = null, Vt(N, "ADD_TAGS") && (typeof N.ADD_TAGS == "function" ? lt.tagCheck = N.ADD_TAGS : yr(N.ADD_TAGS) && (ne === Ae && (ne = sn(ne)), qe(ne, N.ADD_TAGS, ze))), Vt(N, "ADD_ATTR") && (typeof N.ADD_ATTR == "function" ? lt.attributeCheck = N.ADD_ATTR : yr(N.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, N.ADD_ATTR, ze))), Vt(N, "ADD_FORBID_CONTENTS") && yr(N.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, N.ADD_FORBID_CONTENTS, ze)), xt && (ne["#text"] = !0), ae && qe(ne, [
      "html",
      "head",
      "body"
    ]), ne.table && (qe(ne, ["tbody"]), delete Je.tbody), N.TRUSTED_TYPES_POLICY) {
      if (typeof N.TRUSTED_TYPES_POLICY.createHTML != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof N.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = A;
      A = N.TRUSTED_TYPES_POLICY;
      try {
        L = E("");
      } catch (ce) {
        throw A = J, ce;
      }
    } else N.TRUSTED_TYPES_POLICY === null ? (A = void 0, L = "") : (A === void 0 && (A = I()), A && typeof L == "string" && (L = E("")));
    kt && kt(N), Tt = N;
  }, jn = qe({}, [
    ...Cs,
    ...As,
    ...Bf
  ]), wn = qe({}, [...Ds, ...Ff]), Gr = function(N, P, J) {
    return P.namespaceURI === Xe ? N === "svg" : P.namespaceURI === Ye ? N === "svg" && (J === "annotation-xml" || Ce[J]) : !!jn[N];
  }, xs = function(N, P, J) {
    return P.namespaceURI === Xe ? N === "math" : P.namespaceURI === Pt ? N === "math" && Be[J] : !!wn[N];
  }, vs = function(N, P, J) {
    return P.namespaceURI === Pt && !Be[J] || P.namespaceURI === Ye && !Ce[J] ? !1 : !wn[N] && (it[N] || !jn[N]);
  }, ws = function(N) {
    let P = p(N);
    (!P || !P.tagName) && (P = {
      namespaceURI: W,
      tagName: "template"
    });
    const J = Hr(N.tagName), ce = Hr(P.tagName);
    return de[N.namespaceURI] ? N.namespaceURI === Pt ? Gr(J, P, ce) : N.namespaceURI === Ye ? xs(J, P, ce) : N.namespaceURI === Xe ? vs(J, P, ce) : !!(rt === "application/xhtml+xml" && de[N.namespaceURI]) : !1;
  }, mn = function(N) {
    Ar(t.removed, { element: N });
    try {
      p(N).removeChild(N);
    } catch {
      if (h(N), !p(N)) throw Hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Vr = function(N, P, J) {
    try {
      g(N, P);
    } catch {
      try {
        N.removeAttribute(J);
      } catch {
      }
    }
  }, hn = function(N) {
    H(N);
    const P = y(N);
    if (P) {
      const ce = [];
      rr(P, (Te) => {
        Ar(ce, Te);
      }), rr(ce, (Te) => {
        try {
          h(Te);
        } catch {
        }
      });
    }
    const J = b(N);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Vr(N, Te, Pe);
    }
  }, jt = function(N, P, J) {
    if (!J) try {
      J = P.getAttributeNode(N);
    } catch {
      J = null;
    }
    Ar(t.removed, {
      attribute: J || null,
      from: P
    });
    try {
      J ? g(P, J) : P.removeAttribute(N);
    } catch {
      try {
        P.removeAttribute(N);
      } catch {
      }
    }
    if (N === "is")
      if (nt || Xt) try {
        mn(P);
      } catch {
      }
      else try {
        P.setAttribute(N, "");
      } catch {
      }
  }, vr = function(N) {
    const P = b(N);
    if (P)
      for (let J = P.length - 1; J >= 0; --J) {
        const ce = P[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Vr(N, ce, Te);
      }
  }, H = function(N) {
    const P = [N];
    for (; P.length > 0; ) {
      const J = P.pop();
      S(J) === tn.element && vr(J);
      const ce = y(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) P.push(ce[Te]);
    }
  }, U = function(N, P) {
    return ge ? N === "patchsrc" ? !0 : N === "for" && P !== "label" && P !== "output" : !1;
  }, be = function(N) {
    if (!ge) return;
    const P = [N];
    for (; P.length > 0; ) {
      const J = P.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Ro, J.data)) {
        try {
          h(J);
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
  }, xe = function(N) {
    let P = null, J = null;
    if (Qe) N = "<remove></remove>" + N;
    else {
      const Pe = $o(N, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && W === Xe && (N = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + N + "</body></html>");
    const ce = A ? E(N) : N;
    if (W === Xe) try {
      P = new c().parseFromString(ce, rt);
    } catch {
    }
    if (!P || !P.documentElement) {
      P = F.createDocument(W, "template", null);
      try {
        P.documentElement.innerHTML = ee ? L : ce;
      } catch {
      }
    }
    const Te = P.body || P.documentElement;
    return N && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), W === Xe ? te.call(P, ae ? "html" : "body")[0] : ae ? P.documentElement : Te;
  }, et = function(N) {
    const P = $ ? $(N) : N.ownerDocument;
    return X.call(P || N, N, a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION, null);
  }, Dt = function(N) {
    return N = Dr(N, _e, " "), N = Dr(N, K, " "), N = Dr(N, he, " "), N;
  }, wt = function(N) {
    var P;
    N.normalize();
    const J = $ ? $(N) : N.ownerDocument, ce = X.call(J || N, N, a.SHOW_TEXT | a.SHOW_COMMENT | a.SHOW_CDATA_SECTION | a.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (P = N.querySelectorAll) === null || P === void 0 ? void 0 : P.call(N, "template");
    Pe && rr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, gn = function(N) {
    const P = v ? v(N) : null;
    return typeof P != "string" || ze(P) !== "form" ? !1 : typeof N.nodeName != "string" || typeof N.textContent != "string" || typeof N.removeChild != "function" || N.attributes !== b(N) || typeof N.removeAttribute != "function" || typeof N.removeAttributeNode != "function" || typeof N.getAttributeNode != "function" || typeof N.setAttribute != "function" || typeof N.namespaceURI != "string" || typeof N.insertBefore != "function" || typeof N.hasChildNodes != "function" || N.nodeType !== O(N) || N.childNodes !== y(N);
  }, Ct = function(N) {
    if (!O || typeof N != "object" || N === null) return !1;
    try {
      return O(N) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, gt = function(N) {
    if (!O || typeof N != "object" || N === null) return !1;
    try {
      return typeof O(N) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(se, N, P) {
    se.length !== 0 && rr(se, (J) => {
      J.call(t, N, P, Tt);
    });
  }
  const ks = function(N, P) {
    return !!(ge && N.hasChildNodes() && !gt(N.firstElementChild) && zt(Lo, N.textContent) && zt(Lo, N.innerHTML) || ge && N.namespaceURI === Xe && Qf[P] && (gt(N.firstElementChild) || typeof N.textContent == "string" && zt(e_[P], N.textContent)) || N.nodeType === tn.processingInstruction || ge && N.nodeType === tn.comment && zt(Ro, N.data));
  }, Yr = function(N, P) {
    if (N instanceof RegExp) return zt(N, P);
    if (N instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!N(P, ...ce);
    }
    return !1;
  }, Ul = function(N, P, J) {
    if (!Je[P] && co(P) && Yr(Ge.tagNameCheck, P)) return !1;
    if (xt && !vt[P]) {
      const ce = p(N), Te = y(N);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ct = N === J ? x(Te[He], !0) : Te[He];
          ce.insertBefore(ct, m(N));
        }
      }
    }
    return mn(N), !0;
  }, lo = function(N, P, J, ce) {
    return N.length === 0 ? P : P === J || P === ce ? sn(P) : P;
  }, ir = function(N, P) {
    return N === P || p(N) !== null ? !1 : (Ie && H(N), !0);
  }, ao = function(N, P) {
    if (Jt(le.beforeSanitizeElements, N, null), ir(N, P)) return !0;
    if (gn(N))
      return mn(N), !0;
    const J = ze(C(N));
    if (ne = lo(le.uponSanitizeElement, ne, Ae, je), Jt(le.uponSanitizeElement, N, {
      tagName: J,
      allowedTags: ne
    }), ir(N, P)) return !0;
    if (ks(N, J))
      return mn(N), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !ne[J]) {
      const ce = Ul(N, J, P);
      return ce === !1 && (Jt(le.afterSanitizeElements, N, null), ir(N, P)) ? !0 : ce;
    }
    if (S(N) === tn.element && !ws(N) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(Zf, N.innerHTML))
      return mn(N), !0;
    if (Q && N.nodeType === tn.text) {
      const ce = Dt(N.textContent);
      N.textContent !== ce && (Ar(t.removed, { element: N.cloneNode() }), N.textContent = ce);
    }
    return Jt(le.afterSanitizeElements, N, null), ir(N, P);
  }, io = function(N, P, J) {
    if (At[P] || U(P, N) || Le && (P === "id" || P === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[P] || lt.attributeCheck instanceof Function && lt.attributeCheck(P, N);
    return Z && zt(ue, P) || yt && zt(ye, P) ? !0 : ce ? me[P] || zt($e, Dr(J, De, "")) || (P === "src" || P === "xlink:href" || P === "href") && N !== "script" && Eo(J, "data:") === 0 && at[N] || M && !zt(pe, Dr(J, De, "")) ? !0 : !J : co(N) && Yr(Ge.tagNameCheck, N) && Yr(Ge.attributeNameCheck, P, N) || P === "is" && Ge.allowCustomizedBuiltInElements && Yr(Ge.tagNameCheck, J);
  }, ql = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), co = function(N) {
    return !ql[Hr(N)] && zt(G, N);
  }, Wl = function(N, P, J, ce) {
    if (A && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(N, P)) {
      case "TrustedHTML":
        return E(ce);
      case "TrustedScriptURL":
        return R(ce);
    }
    return ce;
  }, Kl = function(N, P, J, ce) {
    try {
      return J ? N.setAttributeNS(J, P, ce) : N.setAttribute(P, ce), gn(N) ? (mn(N), !1) : !0;
    } catch {
      return jt(P, N), !1;
    }
  }, uo = function(N, P) {
    if (Jt(le.beforeSanitizeAttributes, N, null), ir(N, P)) return;
    const J = N.attributes;
    if (!J || gn(N)) return;
    fe = lo(le.uponSanitizeAttribute, fe, Fe, Ze);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = ze(N.nodeName);
    for (; Te--; ) {
      const He = J[Te], ct = He.name, cn = He.namespaceURI, Qt = He.value, cr = ze(ct), Ss = Qt;
      let Bt = ct === "value" ? Ss : Mf(Ss), fo = !1;
      if (ce.attrName = cr, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(le.uponSanitizeAttribute, N, ce), Bt = ce.attrValue, Nt && (cr === "id" || cr === "name") && Eo(Bt, Rt) !== 0 && (jt(ct, N, He), Bt = Rt + Bt, fo = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ct, N, He);
        continue;
      }
      if (cr === "attributename" && $o(Bt, "href")) {
        jt(ct, N, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ct, N, He);
          continue;
        }
        if (!Y && zt(Jf, Bt)) {
          jt(ct, N, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !io(Pe, cr, Bt)) {
          jt(ct, N, He);
          continue;
        }
        Bt = Wl(Pe, cr, cn, Bt), Bt !== Ss && Kl(N, ct, cn, Bt) && fo && Oo(t.removed);
      }
    }
    Jt(le.afterSanitizeAttributes, N, null), ir(N, P);
  }, Xr = function(N) {
    let P = null;
    const J = et(N);
    for (Jt(le.beforeSanitizeShadowDOM, N, null); P = J.nextNode(); )
      if (Jt(le.uponSanitizeShadowNode, P, null), ao(P, N), uo(P, N), Ct(P.content) && Xr(P.content), S(P) === tn.element) {
        const ce = _(P);
        Ct(ce) && (Ns(ce), Xr(ce));
      }
    Jt(le.afterSanitizeShadowDOM, N, null);
  }, Ns = function(N) {
    const P = [{
      node: N,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const J = P.pop();
      if (J.shadow) {
        Xr(J.shadow);
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
    let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, J = null, ce = null, Te = null;
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = Pf(se), typeof se != "string"))
      throw Hn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (ne = je, fe = Ze) : Tn(N), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (ne = sn(ne)), le.uponSanitizeAttribute.length > 0 && (fe = sn(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      be(se);
      const cn = C(se);
      if (typeof cn == "string") {
        const Qt = ze(cn);
        if (!ne[Qt] || Je[Qt])
          throw hn(se), Hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (gn(se))
        throw hn(se), Hn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ns(se);
      } catch (Qt) {
        throw hn(se), Qt;
      }
    } else if (gt(se))
      P = xe("<!---->"), J = P.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? P = J : P.appendChild(J), Ns(P);
    else {
      if (!nt && !Q && !ae && se.indexOf("<") === -1) return A && re ? E(se) : se;
      if (P = xe(se), !P) return nt ? null : re ? L : "";
    }
    P && Qe && mn(P.firstChild);
    const He = Pe ? se : P;
    try {
      const cn = et(He);
      for (; ce = cn.nextNode(); )
        ao(ce, He), uo(ce, He), Ct(ce.content) && Xr(ce.content);
    } catch (cn) {
      throw Pe && (hn(se), rr(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), cn;
    }
    if (Pe) {
      let cn = !1;
      if (rr(t.removed, (Qt) => {
        Qt.element && (Qt.element === se && (cn = !0), H(Qt.element));
      }), cn) throw Hn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(se), se;
    }
    if (nt) {
      if (Q && wt(P), Xt)
        for (Te = ie.call(P.ownerDocument); P.firstChild; ) Te.appendChild(P.firstChild);
      else Te = P;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ct = ae ? P.outerHTML : P.innerHTML;
    return ae && ne["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(Yf, P.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ct), Q && (ct = Dt(ct)), A && re ? E(ct) : ct;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(se), Ee = !0, je = ne, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, A = z, L = "";
  }, t.isValidAttribute = function(se, N, P) {
    Tt || Tn({});
    const J = ze(se), ce = ze(N);
    return io(J, ce, P);
  }, t.addHook = function(se, N) {
    typeof N == "function" && Vt(le, se) && Ar(le[se], N);
  }, t.removeHook = function(se, N) {
    if (Vt(le, se)) {
      if (N !== void 0) {
        const P = Af(le[se], N);
        return P === -1 ? void 0 : Df(le[se], P, 1)[0];
      }
      return Oo(le[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(le, se) && (le[se] = []);
  }, t.removeAllHooks = function() {
    le = Po();
  }, t;
}
var Ol = Sl();
function qr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function r_(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ts = "\0";
function ns(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (l, i) => (n.push(`<code>${qr(i)}</code>`), `${ts}${n.length - 1}${ts}`));
  return t || (r = qr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (l, i, d) => {
      const s = r_(d);
      return s == null ? i : `<a href="${qr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ts}(\\d+)${ts}`, "g"),
    (l, i) => n[Number(i)] ?? ""
  ), r;
}
function s_(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), l = (a) => r[a] ?? "", i = [];
  let d = 0;
  const s = (a, c) => {
    const f = c ? "ol" : "ul";
    i.push(
      `<${f}>${a.map((u) => `<li>${ns(u, n)}</li>`).join("")}</${f}>`
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
        `<h${f.length}>${ns(u.trim(), n)}</h${f.length}>`
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
      const p = m ? ` class="language-${qr(m)}"` : "";
      i.push(
        `<pre><code${p}>${qr(y.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(a)) {
      const m = [];
      for (; d < r.length && /^>\s?(.*)$/.test(l(d)); )
        m.push(/^>\s?(.*)$/.exec(l(d))?.[1] ?? ""), d += 1;
      i.push(
        `<blockquote>${m.map((y) => `<p>${ns(y, n)}</p>`).join("")}</blockquote>`
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
      s(m, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(a)) {
      const m = [];
      for (; d < r.length; ) {
        const p = /^\s*\d+[.)]\s+(.*)$/.exec(l(d))?.[1];
        if (p === void 0) break;
        m.push(p), d += 1;
      }
      s(m, !0);
      continue;
    }
    const g = [];
    for (; d < r.length && !/^\s*$/.test(l(d)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      l(d)
    ); )
      g.push(l(d)), d += 1;
    i.push(`<p>${ns(g.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const o_ = "_markdown_1vu4b_3", l_ = "_resize_1vu4b_61", jo = {
  markdown: o_,
  resize: l_
};
function AS({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: l
}) {
  const i = Oe(
    () => Ol.sanitize(s_(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: [jo.markdown, n ? jo.resize : "", l].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const a_ = "_editor_2a7al_3", i_ = "_toolbar_2a7al_13", c_ = "_tool_2a7al_13", d_ = "_separator_2a7al_56", u_ = "_area_2a7al_63", f_ = "_source_2a7al_73", __ = "_alignGlyph_2a7al_84", p_ = "_colorInput_2a7al_89", m_ = "_select_2a7al_98", St = {
  editor: a_,
  toolbar: i_,
  tool: c_,
  separator: d_,
  area: u_,
  source: f_,
  alignGlyph: __,
  colorInput: p_,
  select: m_
}, h_ = [
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
], Bo = {
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
}, g_ = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], b_ = ["1", "2", "3", "4", "5", "6", "7"], y_ = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Hs(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function x_(e) {
  return Hs("formatBlock", `<${e}>`) || Hs("formatBlock", e);
}
function v_(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const DS = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: l,
    toolbar: i = h_,
    imageUpload: d,
    readOnly: s = !1,
    disabled: a = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: u = !0
  }, x) {
    const [h, g] = q(!1), [m, y] = q(n), [p, _] = q(
      null
    ), [b, O] = q(""), [v, $] = q(""), [S, C] = q(2), [A, L] = q(2), [z, T] = q(!1), w = oe(null), k = oe(null), E = oe(n), R = B(
      (G) => u ? Ol.sanitize(G) : G,
      [u]
    );
    ve(() => {
      const G = w.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (E.current = t);
    }, [t]);
    const I = B(
      (G) => {
        E.current = R(G), r?.(E.current);
      },
      [R, r]
    ), j = B(
      (G, $e) => {
        if (s || a) return !1;
        w.current?.focus();
        const ne = Hs(G, $e);
        if (ne) {
          const Ae = w.current;
          Ae && I(Ae.innerHTML);
        }
        return ne;
      },
      [I, s, a]
    ), F = B(
      () => w.current?.innerHTML ?? E.current,
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
    bs(x, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = Bo[G];
        !$e || s || a || j($e.command);
      },
      [j, s, a]
    ), le = B(() => {
      s || a || (h ? (g(!1), I(m)) : (y(w.current?.innerHTML ?? ""), g(!0)));
    }, [h, m, I, s, a]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || s || a) return;
        const $e = G.key.toLowerCase(), ne = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        ne && (G.preventDefault(), we(ne));
      },
      [we, s, a]
    ), K = B(() => {
      const G = w.current;
      G && I(G.innerHTML);
    }, [I]), he = B(() => {
      b.trim() && (j("createLink", b.trim()), O(""), _(null));
    }, [b, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), $(""), _(null));
    }, [v, j]), ye = B(
      async (G) => {
        if (d) {
          T(!0);
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
            const fe = (ne.headers.get("content-type") ?? "").includes("application/json") ? await ne.json() : await ne.text(), Fe = (d.parseUrl ?? v_)(fe);
            j("insertImage", Fe);
          } catch ($e) {
            l?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            T(!1), _(null);
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !a && G.onExecute(te);
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
            "aria-pressed": h,
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
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? y_ : G === "fontName" ? g_ : b_;
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
              !Fe.target.value || s || a || (G === "formatBlock" ? x_(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !a && (O(""), _("link"));
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !a && ($(""), _("image"));
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
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !a && (C(2), L(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ne = Bo[G];
      return ne ? /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${c} toolbar`,
          className: St.toolbar,
          children: i.map((G, $e) => De(G, $e))
        }
      ),
      h ? /* @__PURE__ */ o(
        "textarea",
        {
          className: St.source,
          "aria-label": `${c} source`,
          value: m,
          disabled: a,
          readOnly: s,
          onChange: (G) => {
            y(G.target.value), I(G.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: w,
          className: St.area,
          contentEditable: !s && !a,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": c,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": a || void 0,
          dangerouslySetInnerHTML: { __html: E.current },
          onInput: K,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ D(
        bl,
        {
          open: p !== null,
          onClose: () => _(null),
          title: p === "link" ? "Insert link" : p === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ o(an, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            p === "link" && /* @__PURE__ */ o(an, { onClick: he, children: "Insert" }),
            p === "image" && /* @__PURE__ */ o(an, { onClick: ue, disabled: z, children: "Insert" }),
            p === "table" && /* @__PURE__ */ o(an, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            p === "link" && /* @__PURE__ */ o(sr, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ o(
              Jr,
              {
                id: G,
                value: b,
                placeholder: "https://",
                onChange: ($e) => O($e.target.value)
              }
            ) }),
            p === "image" && /* @__PURE__ */ D(pt, { children: [
              /* @__PURE__ */ o(sr, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ o(
                Jr,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => $($e.target.value)
                }
              ) }),
              d && /* @__PURE__ */ o(sr, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ o(
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
              z && /* @__PURE__ */ o(yl, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            p === "table" && /* @__PURE__ */ D(pt, { children: [
              /* @__PURE__ */ o(sr, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ o(
                Jr,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => C(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(sr, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ o(
                Jr,
                {
                  id: G,
                  type: "number",
                  value: String(A),
                  onChange: ($e) => L(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), w_ = "_popup_ve7kd_4", $l = {
  popup: w_
}, El = lr(null);
function MS() {
  const e = Pn(El);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Fo(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function k_({ state: e }) {
  const t = oe(null), [n, r] = q(null);
  return ve(() => {
    const l = t.current;
    if (!l) return;
    const i = e.anchor.getBoundingClientRect(), d = l.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - d.width)
    );
    let a = i.bottom + 4;
    a + d.height > window.innerHeight && i.top - 4 - d.height >= 0 && (a = i.top - 4 - d.height), r({ left: s, top: Math.max(0, a) });
  }, [e]), ve(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [$l.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Fo(e.width),
        height: Fo(e.height)
      },
      children: e.content
    }
  );
}
function IS({ children: e }) {
  const [t, n] = q(null), r = oe(0), l = oe(null), i = B(() => {
    l.current?.(), l.current = null;
  }, []), d = B(() => {
    n((c) => c && (c.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = B(
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
    const c = (h) => {
      const g = document.querySelector(`.${$l.popup}`);
      g && !g.contains(h.target) && d();
    }, f = (h) => {
      h.key === "Escape" && (h.preventDefault(), d());
    }, u = () => d(), x = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", x), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", x);
    };
  }, [t, d]);
  const a = Oe(
    () => ({ open: s, close: d, isOpen: t != null }),
    [s, d, t]
  );
  return /* @__PURE__ */ D(El.Provider, { value: a, children: [
    e,
    t && /* @__PURE__ */ o(k_, { state: t }, t.seq)
  ] });
}
const N_ = "_alert_146r9_1", S_ = "_xs_146r9_28", O_ = "_sm_146r9_38", $_ = "_lg_146r9_48", E_ = "_xl_146r9_58", T_ = "_primary_146r9_69", C_ = "_secondary_146r9_74", A_ = "_light_146r9_79", D_ = "_base_146r9_84", M_ = "_dark_146r9_89", I_ = "_info_146r9_94", z_ = "_success_146r9_99", L_ = "_warning_146r9_104", R_ = "_danger_146r9_109", P_ = "_flat_146r9_116", j_ = "_outlined_146r9_123", B_ = "_filled_146r9_132", F_ = "_text_146r9_139", H_ = "_icon_146r9_181", U_ = "_content_146r9_192", q_ = "_title_146r9_197", W_ = "_body_146r9_203", K_ = "_dismiss_146r9_209", Nn = {
  alert: N_,
  xs: S_,
  sm: O_,
  lg: $_,
  xl: E_,
  primary: T_,
  secondary: C_,
  light: A_,
  base: D_,
  dark: M_,
  info: I_,
  success: z_,
  warning: L_,
  danger: R_,
  flat: P_,
  outlined: j_,
  filled: B_,
  text: F_,
  icon: H_,
  content: U_,
  title: q_,
  body: W_,
  dismiss: K_,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, G_ = {
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
function zS({
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
  children: s,
  dismissible: a = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: u,
  className: x,
  ...h
}) {
  const [g, m] = q(!1);
  if (f === !1 || f === void 0 && g)
    return null;
  const y = () => {
    f === void 0 && m(!0), c?.(), u?.(!1);
  }, p = e, _ = fl(t, "filled"), b = Wr(n), O = i ?? (d ? /* @__PURE__ */ o(Me, { icon: G_[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        Nn.alert,
        Nn[p],
        Nn[_],
        b ? Nn[b] : null,
        Nn[r],
        x
      ].filter(Boolean).join(" "),
      children: [
        O != null && /* @__PURE__ */ o("span", { className: Nn.icon, "aria-hidden": "true", children: O }),
        /* @__PURE__ */ D("div", { className: Nn.content, children: [
          l && /* @__PURE__ */ o("div", { className: Nn.title, children: l }),
          s && /* @__PURE__ */ o("div", { className: Nn.body, children: s })
        ] }),
        a && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Nn.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const V_ = "_skeleton_1xyce_1", Y_ = "_text_1xyce_35", X_ = "_circle_1xyce_40", Z_ = "_rect_1xyce_44", Ho = {
  skeleton: V_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: Y_,
  circle: X_,
  rect: Z_
};
function LS({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: [Ho.skeleton, Ho[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function ps(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const J_ = "_row_juebr_1", Q_ = "_start_juebr_14", ep = "_center_juebr_18", tp = "_end_juebr_22", np = "_stretch_juebr_26", rp = "_baseline_juebr_30", sp = "_normal_juebr_34", op = "_noWrap_juebr_90", lp = "_wrapReverse_juebr_94", rs = {
  row: J_,
  start: Q_,
  center: ep,
  end: tp,
  stretch: np,
  baseline: rp,
  normal: sp,
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
  noWrap: op,
  wrapReverse: lp
};
function Uo(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function RS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...s
}) {
  const a = e != null ? ps(e) : null, c = t != null ? ps(t) : null, f = {
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
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        rs.row,
        rs[n],
        rs[`justify-${r}`],
        Uo(l) != null ? rs[Uo(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const ap = "_column_sh0ss_1", ip = "_Size1_sh0ss_15", cp = "_Size2_sh0ss_24", dp = "_Size3_sh0ss_33", up = "_Size4_sh0ss_42", fp = "_Size5_sh0ss_51", _p = "_Size6_sh0ss_60", pp = "_Size7_sh0ss_69", mp = "_Size8_sh0ss_78", hp = "_Size9_sh0ss_87", gp = "_Size10_sh0ss_96", bp = "_Size11_sh0ss_105", yp = "_Size12_sh0ss_114", xp = "_Offset0_sh0ss_119", vp = "_Offset1_sh0ss_122", wp = "_Offset2_sh0ss_127", kp = "_Offset3_sh0ss_132", Np = "_Offset4_sh0ss_137", Sp = "_Offset5_sh0ss_142", Op = "_Offset6_sh0ss_147", $p = "_Offset7_sh0ss_152", Ep = "_Offset8_sh0ss_157", Tp = "_Offset9_sh0ss_162", Cp = "_Offset10_sh0ss_167", Ap = "_Offset11_sh0ss_172", Dp = "_Offset12_sh0ss_177", Mp = "_OrderFirst_sh0ss_182", Ip = "_OrderLast_sh0ss_185", zp = "_Order0_sh0ss_188", Lp = "_Order1_sh0ss_191", Rp = "_Order2_sh0ss_194", Pp = "_Order3_sh0ss_197", jp = "_Order4_sh0ss_200", Bp = "_Order5_sh0ss_203", Fp = "_Order6_sh0ss_206", Hp = "_Order7_sh0ss_209", Up = "_Order8_sh0ss_212", qp = "_Order9_sh0ss_215", Wp = "_Order10_sh0ss_218", Kp = "_Order11_sh0ss_221", Gp = "_Order12_sh0ss_224", Vp = "_xsSize1_sh0ss_229", Yp = "_xsSize2_sh0ss_238", Xp = "_xsSize3_sh0ss_247", Zp = "_xsSize4_sh0ss_256", Jp = "_xsSize5_sh0ss_265", Qp = "_xsSize6_sh0ss_274", em = "_xsSize7_sh0ss_283", tm = "_xsSize8_sh0ss_292", nm = "_xsSize9_sh0ss_301", rm = "_xsSize10_sh0ss_310", sm = "_xsSize11_sh0ss_321", om = "_xsSize12_sh0ss_332", lm = "_xsOffset0_sh0ss_337", am = "_xsOffset1_sh0ss_340", im = "_xsOffset2_sh0ss_345", cm = "_xsOffset3_sh0ss_350", dm = "_xsOffset4_sh0ss_355", um = "_xsOffset5_sh0ss_360", fm = "_xsOffset6_sh0ss_365", _m = "_xsOffset7_sh0ss_370", pm = "_xsOffset8_sh0ss_375", mm = "_xsOffset9_sh0ss_380", hm = "_xsOffset10_sh0ss_385", gm = "_xsOffset11_sh0ss_391", bm = "_xsOffset12_sh0ss_397", ym = "_xsOrderFirst_sh0ss_403", xm = "_xsOrderLast_sh0ss_406", vm = "_xsOrder0_sh0ss_409", wm = "_xsOrder1_sh0ss_412", km = "_xsOrder2_sh0ss_415", Nm = "_xsOrder3_sh0ss_418", Sm = "_xsOrder4_sh0ss_421", Om = "_xsOrder5_sh0ss_424", $m = "_xsOrder6_sh0ss_427", Em = "_xsOrder7_sh0ss_430", Tm = "_xsOrder8_sh0ss_433", Cm = "_xsOrder9_sh0ss_436", Am = "_xsOrder10_sh0ss_439", Dm = "_xsOrder11_sh0ss_442", Mm = "_xsOrder12_sh0ss_445", Im = "_smSize1_sh0ss_451", zm = "_smSize2_sh0ss_460", Lm = "_smSize3_sh0ss_469", Rm = "_smSize4_sh0ss_478", Pm = "_smSize5_sh0ss_487", jm = "_smSize6_sh0ss_496", Bm = "_smSize7_sh0ss_505", Fm = "_smSize8_sh0ss_514", Hm = "_smSize9_sh0ss_523", Um = "_smSize10_sh0ss_532", qm = "_smSize11_sh0ss_543", Wm = "_smSize12_sh0ss_554", Km = "_smOffset0_sh0ss_559", Gm = "_smOffset1_sh0ss_562", Vm = "_smOffset2_sh0ss_567", Ym = "_smOffset3_sh0ss_572", Xm = "_smOffset4_sh0ss_577", Zm = "_smOffset5_sh0ss_582", Jm = "_smOffset6_sh0ss_587", Qm = "_smOffset7_sh0ss_592", eh = "_smOffset8_sh0ss_597", th = "_smOffset9_sh0ss_602", nh = "_smOffset10_sh0ss_607", rh = "_smOffset11_sh0ss_613", sh = "_smOffset12_sh0ss_619", oh = "_smOrderFirst_sh0ss_625", lh = "_smOrderLast_sh0ss_628", ah = "_smOrder0_sh0ss_631", ih = "_smOrder1_sh0ss_634", ch = "_smOrder2_sh0ss_637", dh = "_smOrder3_sh0ss_640", uh = "_smOrder4_sh0ss_643", fh = "_smOrder5_sh0ss_646", _h = "_smOrder6_sh0ss_649", ph = "_smOrder7_sh0ss_652", mh = "_smOrder8_sh0ss_655", hh = "_smOrder9_sh0ss_658", gh = "_smOrder10_sh0ss_661", bh = "_smOrder11_sh0ss_664", yh = "_smOrder12_sh0ss_667", xh = "_mdSize1_sh0ss_673", vh = "_mdSize2_sh0ss_682", wh = "_mdSize3_sh0ss_691", kh = "_mdSize4_sh0ss_700", Nh = "_mdSize5_sh0ss_709", Sh = "_mdSize6_sh0ss_718", Oh = "_mdSize7_sh0ss_727", $h = "_mdSize8_sh0ss_736", Eh = "_mdSize9_sh0ss_745", Th = "_mdSize10_sh0ss_754", Ch = "_mdSize11_sh0ss_765", Ah = "_mdSize12_sh0ss_776", Dh = "_mdOffset0_sh0ss_781", Mh = "_mdOffset1_sh0ss_784", Ih = "_mdOffset2_sh0ss_789", zh = "_mdOffset3_sh0ss_794", Lh = "_mdOffset4_sh0ss_799", Rh = "_mdOffset5_sh0ss_804", Ph = "_mdOffset6_sh0ss_809", jh = "_mdOffset7_sh0ss_814", Bh = "_mdOffset8_sh0ss_819", Fh = "_mdOffset9_sh0ss_824", Hh = "_mdOffset10_sh0ss_829", Uh = "_mdOffset11_sh0ss_835", qh = "_mdOffset12_sh0ss_841", Wh = "_mdOrderFirst_sh0ss_847", Kh = "_mdOrderLast_sh0ss_850", Gh = "_mdOrder0_sh0ss_853", Vh = "_mdOrder1_sh0ss_856", Yh = "_mdOrder2_sh0ss_859", Xh = "_mdOrder3_sh0ss_862", Zh = "_mdOrder4_sh0ss_865", Jh = "_mdOrder5_sh0ss_868", Qh = "_mdOrder6_sh0ss_871", e1 = "_mdOrder7_sh0ss_874", t1 = "_mdOrder8_sh0ss_877", n1 = "_mdOrder9_sh0ss_880", r1 = "_mdOrder10_sh0ss_883", s1 = "_mdOrder11_sh0ss_886", o1 = "_mdOrder12_sh0ss_889", l1 = "_lgSize1_sh0ss_895", a1 = "_lgSize2_sh0ss_904", i1 = "_lgSize3_sh0ss_913", c1 = "_lgSize4_sh0ss_922", d1 = "_lgSize5_sh0ss_931", u1 = "_lgSize6_sh0ss_940", f1 = "_lgSize7_sh0ss_949", _1 = "_lgSize8_sh0ss_958", p1 = "_lgSize9_sh0ss_967", m1 = "_lgSize10_sh0ss_976", h1 = "_lgSize11_sh0ss_987", g1 = "_lgSize12_sh0ss_998", b1 = "_lgOffset0_sh0ss_1003", y1 = "_lgOffset1_sh0ss_1006", x1 = "_lgOffset2_sh0ss_1011", v1 = "_lgOffset3_sh0ss_1016", w1 = "_lgOffset4_sh0ss_1021", k1 = "_lgOffset5_sh0ss_1026", N1 = "_lgOffset6_sh0ss_1031", S1 = "_lgOffset7_sh0ss_1036", O1 = "_lgOffset8_sh0ss_1041", $1 = "_lgOffset9_sh0ss_1046", E1 = "_lgOffset10_sh0ss_1051", T1 = "_lgOffset11_sh0ss_1057", C1 = "_lgOffset12_sh0ss_1063", A1 = "_lgOrderFirst_sh0ss_1069", D1 = "_lgOrderLast_sh0ss_1072", M1 = "_lgOrder0_sh0ss_1075", I1 = "_lgOrder1_sh0ss_1078", z1 = "_lgOrder2_sh0ss_1081", L1 = "_lgOrder3_sh0ss_1084", R1 = "_lgOrder4_sh0ss_1087", P1 = "_lgOrder5_sh0ss_1090", j1 = "_lgOrder6_sh0ss_1093", B1 = "_lgOrder7_sh0ss_1096", F1 = "_lgOrder8_sh0ss_1099", H1 = "_lgOrder9_sh0ss_1102", U1 = "_lgOrder10_sh0ss_1105", q1 = "_lgOrder11_sh0ss_1108", W1 = "_lgOrder12_sh0ss_1111", K1 = "_xlSize1_sh0ss_1117", G1 = "_xlSize2_sh0ss_1126", V1 = "_xlSize3_sh0ss_1135", Y1 = "_xlSize4_sh0ss_1144", X1 = "_xlSize5_sh0ss_1153", Z1 = "_xlSize6_sh0ss_1162", J1 = "_xlSize7_sh0ss_1171", Q1 = "_xlSize8_sh0ss_1180", eg = "_xlSize9_sh0ss_1189", tg = "_xlSize10_sh0ss_1198", ng = "_xlSize11_sh0ss_1209", rg = "_xlSize12_sh0ss_1220", sg = "_xlOffset0_sh0ss_1225", og = "_xlOffset1_sh0ss_1228", lg = "_xlOffset2_sh0ss_1233", ag = "_xlOffset3_sh0ss_1238", ig = "_xlOffset4_sh0ss_1243", cg = "_xlOffset5_sh0ss_1248", dg = "_xlOffset6_sh0ss_1253", ug = "_xlOffset7_sh0ss_1258", fg = "_xlOffset8_sh0ss_1263", _g = "_xlOffset9_sh0ss_1268", pg = "_xlOffset10_sh0ss_1273", mg = "_xlOffset11_sh0ss_1279", hg = "_xlOffset12_sh0ss_1285", gg = "_xlOrderFirst_sh0ss_1291", bg = "_xlOrderLast_sh0ss_1294", yg = "_xlOrder0_sh0ss_1297", xg = "_xlOrder1_sh0ss_1300", vg = "_xlOrder2_sh0ss_1303", wg = "_xlOrder3_sh0ss_1306", kg = "_xlOrder4_sh0ss_1309", Ng = "_xlOrder5_sh0ss_1312", Sg = "_xlOrder6_sh0ss_1315", Og = "_xlOrder7_sh0ss_1318", $g = "_xlOrder8_sh0ss_1321", Eg = "_xlOrder9_sh0ss_1324", Tg = "_xlOrder10_sh0ss_1327", Cg = "_xlOrder11_sh0ss_1330", Ag = "_xlOrder12_sh0ss_1333", Dg = "_xxSize1_sh0ss_1339", Mg = "_xxSize2_sh0ss_1348", Ig = "_xxSize3_sh0ss_1357", zg = "_xxSize4_sh0ss_1366", Lg = "_xxSize5_sh0ss_1375", Rg = "_xxSize6_sh0ss_1384", Pg = "_xxSize7_sh0ss_1393", jg = "_xxSize8_sh0ss_1402", Bg = "_xxSize9_sh0ss_1411", Fg = "_xxSize10_sh0ss_1420", Hg = "_xxSize11_sh0ss_1431", Ug = "_xxSize12_sh0ss_1442", qg = "_xxOffset0_sh0ss_1447", Wg = "_xxOffset1_sh0ss_1450", Kg = "_xxOffset2_sh0ss_1455", Gg = "_xxOffset3_sh0ss_1460", Vg = "_xxOffset4_sh0ss_1465", Yg = "_xxOffset5_sh0ss_1470", Xg = "_xxOffset6_sh0ss_1475", Zg = "_xxOffset7_sh0ss_1480", Jg = "_xxOffset8_sh0ss_1485", Qg = "_xxOffset9_sh0ss_1490", eb = "_xxOffset10_sh0ss_1495", tb = "_xxOffset11_sh0ss_1501", nb = "_xxOffset12_sh0ss_1507", rb = "_xxOrderFirst_sh0ss_1513", sb = "_xxOrderLast_sh0ss_1516", ob = "_xxOrder0_sh0ss_1519", lb = "_xxOrder1_sh0ss_1522", ab = "_xxOrder2_sh0ss_1525", ib = "_xxOrder3_sh0ss_1528", cb = "_xxOrder4_sh0ss_1531", db = "_xxOrder5_sh0ss_1534", ub = "_xxOrder6_sh0ss_1537", fb = "_xxOrder7_sh0ss_1540", _b = "_xxOrder8_sh0ss_1543", pb = "_xxOrder9_sh0ss_1546", mb = "_xxOrder10_sh0ss_1549", hb = "_xxOrder11_sh0ss_1552", gb = "_xxOrder12_sh0ss_1555", ss = {
  column: ap,
  Size1: ip,
  Size2: cp,
  Size3: dp,
  Size4: up,
  Size5: fp,
  Size6: _p,
  Size7: pp,
  Size8: mp,
  Size9: hp,
  Size10: gp,
  Size11: bp,
  Size12: yp,
  Offset0: xp,
  Offset1: vp,
  Offset2: wp,
  Offset3: kp,
  Offset4: Np,
  Offset5: Sp,
  Offset6: Op,
  Offset7: $p,
  Offset8: Ep,
  Offset9: Tp,
  Offset10: Cp,
  Offset11: Ap,
  Offset12: Dp,
  OrderFirst: Mp,
  OrderLast: Ip,
  Order0: zp,
  Order1: Lp,
  Order2: Rp,
  Order3: Pp,
  Order4: jp,
  Order5: Bp,
  Order6: Fp,
  Order7: Hp,
  Order8: Up,
  Order9: qp,
  Order10: Wp,
  Order11: Kp,
  Order12: Gp,
  xsSize1: Vp,
  xsSize2: Yp,
  xsSize3: Xp,
  xsSize4: Zp,
  xsSize5: Jp,
  xsSize6: Qp,
  xsSize7: em,
  xsSize8: tm,
  xsSize9: nm,
  xsSize10: rm,
  xsSize11: sm,
  xsSize12: om,
  xsOffset0: lm,
  xsOffset1: am,
  xsOffset2: im,
  xsOffset3: cm,
  xsOffset4: dm,
  xsOffset5: um,
  xsOffset6: fm,
  xsOffset7: _m,
  xsOffset8: pm,
  xsOffset9: mm,
  xsOffset10: hm,
  xsOffset11: gm,
  xsOffset12: bm,
  xsOrderFirst: ym,
  xsOrderLast: xm,
  xsOrder0: vm,
  xsOrder1: wm,
  xsOrder2: km,
  xsOrder3: Nm,
  xsOrder4: Sm,
  xsOrder5: Om,
  xsOrder6: $m,
  xsOrder7: Em,
  xsOrder8: Tm,
  xsOrder9: Cm,
  xsOrder10: Am,
  xsOrder11: Dm,
  xsOrder12: Mm,
  smSize1: Im,
  smSize2: zm,
  smSize3: Lm,
  smSize4: Rm,
  smSize5: Pm,
  smSize6: jm,
  smSize7: Bm,
  smSize8: Fm,
  smSize9: Hm,
  smSize10: Um,
  smSize11: qm,
  smSize12: Wm,
  smOffset0: Km,
  smOffset1: Gm,
  smOffset2: Vm,
  smOffset3: Ym,
  smOffset4: Xm,
  smOffset5: Zm,
  smOffset6: Jm,
  smOffset7: Qm,
  smOffset8: eh,
  smOffset9: th,
  smOffset10: nh,
  smOffset11: rh,
  smOffset12: sh,
  smOrderFirst: oh,
  smOrderLast: lh,
  smOrder0: ah,
  smOrder1: ih,
  smOrder2: ch,
  smOrder3: dh,
  smOrder4: uh,
  smOrder5: fh,
  smOrder6: _h,
  smOrder7: ph,
  smOrder8: mh,
  smOrder9: hh,
  smOrder10: gh,
  smOrder11: bh,
  smOrder12: yh,
  mdSize1: xh,
  mdSize2: vh,
  mdSize3: wh,
  mdSize4: kh,
  mdSize5: Nh,
  mdSize6: Sh,
  mdSize7: Oh,
  mdSize8: $h,
  mdSize9: Eh,
  mdSize10: Th,
  mdSize11: Ch,
  mdSize12: Ah,
  mdOffset0: Dh,
  mdOffset1: Mh,
  mdOffset2: Ih,
  mdOffset3: zh,
  mdOffset4: Lh,
  mdOffset5: Rh,
  mdOffset6: Ph,
  mdOffset7: jh,
  mdOffset8: Bh,
  mdOffset9: Fh,
  mdOffset10: Hh,
  mdOffset11: Uh,
  mdOffset12: qh,
  mdOrderFirst: Wh,
  mdOrderLast: Kh,
  mdOrder0: Gh,
  mdOrder1: Vh,
  mdOrder2: Yh,
  mdOrder3: Xh,
  mdOrder4: Zh,
  mdOrder5: Jh,
  mdOrder6: Qh,
  mdOrder7: e1,
  mdOrder8: t1,
  mdOrder9: n1,
  mdOrder10: r1,
  mdOrder11: s1,
  mdOrder12: o1,
  lgSize1: l1,
  lgSize2: a1,
  lgSize3: i1,
  lgSize4: c1,
  lgSize5: d1,
  lgSize6: u1,
  lgSize7: f1,
  lgSize8: _1,
  lgSize9: p1,
  lgSize10: m1,
  lgSize11: h1,
  lgSize12: g1,
  lgOffset0: b1,
  lgOffset1: y1,
  lgOffset2: x1,
  lgOffset3: v1,
  lgOffset4: w1,
  lgOffset5: k1,
  lgOffset6: N1,
  lgOffset7: S1,
  lgOffset8: O1,
  lgOffset9: $1,
  lgOffset10: E1,
  lgOffset11: T1,
  lgOffset12: C1,
  lgOrderFirst: A1,
  lgOrderLast: D1,
  lgOrder0: M1,
  lgOrder1: I1,
  lgOrder2: z1,
  lgOrder3: L1,
  lgOrder4: R1,
  lgOrder5: P1,
  lgOrder6: j1,
  lgOrder7: B1,
  lgOrder8: F1,
  lgOrder9: H1,
  lgOrder10: U1,
  lgOrder11: q1,
  lgOrder12: W1,
  xlSize1: K1,
  xlSize2: G1,
  xlSize3: V1,
  xlSize4: Y1,
  xlSize5: X1,
  xlSize6: Z1,
  xlSize7: J1,
  xlSize8: Q1,
  xlSize9: eg,
  xlSize10: tg,
  xlSize11: ng,
  xlSize12: rg,
  xlOffset0: sg,
  xlOffset1: og,
  xlOffset2: lg,
  xlOffset3: ag,
  xlOffset4: ig,
  xlOffset5: cg,
  xlOffset6: dg,
  xlOffset7: ug,
  xlOffset8: fg,
  xlOffset9: _g,
  xlOffset10: pg,
  xlOffset11: mg,
  xlOffset12: hg,
  xlOrderFirst: gg,
  xlOrderLast: bg,
  xlOrder0: yg,
  xlOrder1: xg,
  xlOrder2: vg,
  xlOrder3: wg,
  xlOrder4: kg,
  xlOrder5: Ng,
  xlOrder6: Sg,
  xlOrder7: Og,
  xlOrder8: $g,
  xlOrder9: Eg,
  xlOrder10: Tg,
  xlOrder11: Cg,
  xlOrder12: Ag,
  xxSize1: Dg,
  xxSize2: Mg,
  xxSize3: Ig,
  xxSize4: zg,
  xxSize5: Lg,
  xxSize6: Rg,
  xxSize7: Pg,
  xxSize8: jg,
  xxSize9: Bg,
  xxSize10: Fg,
  xxSize11: Hg,
  xxSize12: Ug,
  xxOffset0: qg,
  xxOffset1: Wg,
  xxOffset2: Kg,
  xxOffset3: Gg,
  xxOffset4: Vg,
  xxOffset5: Yg,
  xxOffset6: Xg,
  xxOffset7: Zg,
  xxOffset8: Jg,
  xxOffset9: Qg,
  xxOffset10: eb,
  xxOffset11: tb,
  xxOffset12: nb,
  xxOrderFirst: rb,
  xxOrderLast: sb,
  xxOrder0: ob,
  xxOrder1: lb,
  xxOrder2: ab,
  xxOrder3: ib,
  xxOrder4: cb,
  xxOrder5: db,
  xxOrder6: ub,
  xxOrder7: fb,
  xxOrder8: _b,
  xxOrder9: pb,
  xxOrder10: mb,
  xxOrder11: hb,
  xxOrder12: gb
}, bb = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function yb(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function xb(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function vb(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function wb(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (vb(n, t), `${e}Order${t}`);
}
function PS({ className: e, style: t, ...n }) {
  const r = [ss.column], l = { ...t };
  for (const [z, T, w, k] of bb) {
    const E = n[T], R = n[w], I = n[k];
    if (E != null) {
      yb(T, E);
      const j = ss[`${z}Size${E}`];
      j && r.push(j);
    }
    if (R != null) {
      xb(w, R);
      const j = ss[`${z}Offset${R}`];
      j && r.push(j);
    }
    if (I != null) {
      const j = ss[wb(z, I, k)];
      j && r.push(j);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: s,
    offsetXs: a,
    sizeSm: c,
    offsetSm: f,
    sizeMd: u,
    offsetMd: x,
    sizeLg: h,
    offsetLg: g,
    sizeXl: m,
    offsetXl: y,
    sizeXx: p,
    offsetXx: _,
    order: b,
    orderXs: O,
    orderSm: v,
    orderMd: $,
    orderLg: S,
    orderXl: C,
    orderXx: A,
    ...L
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...L
    }
  );
}
const kb = "_stack_bmbbp_1", Ir = {
  stack: kb,
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
function qo(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function jS({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: l,
  justify: i,
  className: d,
  style: s,
  ...a
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: ps(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Ir.stack,
        Ir[`dir-${c}`],
        qo(n) !== "wrap" ? Ir[`wrap-${qo(n)}`] : null,
        l != null ? Ir[`align-${l}`] : null,
        i != null ? Ir[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const Nb = "_autogrid_16x9f_1", Sb = {
  autogrid: Nb
};
function BS({
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
    ...t != null ? { gap: ps(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Sb.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
    }
  );
}
const Ob = "_layout_fxvw1_1", $b = "_row_fxvw1_7", Eb = "_grid_fxvw1_21", Tb = "_gridRight_fxvw1_27", Cb = "_gridHeader_fxvw1_31", Ab = "_gridFooter_fxvw1_36", Db = "_gridContents_fxvw1_41", Mb = "_gridBody_fxvw1_45", An = {
  layout: Ob,
  row: $b,
  grid: Eb,
  gridRight: Tb,
  gridHeader: Cb,
  gridFooter: Ab,
  gridContents: Db,
  gridBody: Mb
}, Ib = "_footer_3be5w_1", zb = "_sticky_3be5w_9", Wo = {
  footer: Ib,
  sticky: zb
};
function Lb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [Wo.footer, e ? Wo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Rb = "_header_1tw8b_1", Pb = "_sticky_1tw8b_9", Ko = {
  header: Rb,
  sticky: Pb
};
function jb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [Ko.header, e ? Ko.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Bb = "_sidebar_175d5_1", Fb = "_sticky_175d5_23", Hb = "_left_175d5_41", Ub = "_right_175d5_45", qb = "_start_175d5_50", Wb = "_end_175d5_54", Kb = "_fullHeight_175d5_60", Gb = "_collapsed_175d5_64", Vb = "_responsive_175d5_72", Yb = "_overlay_175d5_80", Xb = "_mask_175d5_108", qn = {
  sidebar: Bb,
  sticky: Fb,
  left: Hb,
  right: Ub,
  start: qb,
  end: Wb,
  fullHeight: Kb,
  collapsed: Gb,
  responsive: Vb,
  overlay: Yb,
  mask: Xb
};
function Zb({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: i = !1,
  onClose: d,
  className: s,
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
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${qn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          qn.sidebar,
          qn[e],
          t ? null : qn.collapsed,
          n ? qn.responsive : null,
          r ? [qn.overlay, "se-sidebar--overlay"] : null,
          l ? qn.fullHeight : null,
          i && !r && !l ? qn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: a
      }
    )
  ] });
}
function FS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(pt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], s = [], a = [], c = [];
  Kr.forEach(n, (x) => {
    if (!qt(x)) {
      d.push(x);
      return;
    }
    if (x.type === jb)
      l.push(x);
    else if (x.type === Lb)
      i.push(x);
    else if (x.type === Zb) {
      const h = x, g = h.props.position;
      c.push(h), (g === "right" || g === "end" ? a : s).push(h);
    } else
      d.push(x);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const x = u ? a : s;
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
          l.length > 0 && /* @__PURE__ */ o("div", { className: An.gridHeader, children: l }),
          /* @__PURE__ */ D("div", { className: An.gridContents, children: [
            x,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: d })
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
        l,
        /* @__PURE__ */ D("div", { className: An.row, children: [
          s,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const Jb = "_body_1ge00_4", Qb = "_bare_1ge00_12", Go = {
  body: Jb,
  bare: Qb
};
function HS({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [Go.body, t ? null : Go.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const ey = "_toggle_lxnk5_1", ty = {
  toggle: ey
};
function US({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...i
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [ty.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ o(Me, { icon: e, size: 20 })
    }
  );
}
const ny = "_track_14127_1", ry = "_bar_14127_31", sy = "_primary_14127_39", oy = "_success_14127_43", ly = "_warning_14127_47", ay = "_danger_14127_51", iy = "_indeterminate_14127_149", cy = "_circular_14127_163", dy = "_fill_14127_203", nn = {
  track: ny,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: ry,
  primary: sy,
  success: oy,
  warning: ly,
  danger: ay,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: iy,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: cy,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: dy,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function qS({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: i = "linear",
  size: d = "md",
  className: s,
  visible: a = !0,
  ...c
}) {
  if (a === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const h = typeof d == "string", g = 2, m = 10.5, y = 2 * Math.PI * m, p = y * (l ? 0.75 : 1), _ = l ? 0 : y * (1 - u / 100), b = Wr(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: h ? void 0 : d,
        height: h ? void 0 : d,
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
          h ? nn[`circular-${d}`] : null,
          l ? nn.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: g
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: g,
              strokeDasharray: `${p} ${y}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const x = Wr(r);
  return /* @__PURE__ */ o(
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
        s
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: nn.bar,
          style: l ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const uy = "_wrapper_tk30z_1", fy = {
  wrapper: uy
}, _y = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Tl = "dx-palette", py = "data-palette";
function my(e, t) {
  const n = e === void 0 ? Tl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function hy(e, t) {
  const n = e === void 0 ? Tl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function WS({
  themes: e = _y,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = py,
  onChange: i,
  label: d = "Theme",
  placeholder: s = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, x] = q(void 0), h = t !== void 0, g = t ?? u ?? my(r, e) ?? n, m = g ?? "", y = oe(void 0);
  ve(() => {
    if (h) return;
    const _ = document.documentElement;
    if (g === void 0) {
      y.current !== void 0 && _.getAttribute(l) === y.current && (_.removeAttribute(l), y.current = void 0);
      return;
    }
    _.setAttribute(l, g), y.current = g;
  }, [g, l, h]);
  const p = (_) => {
    const b = _.target.value;
    h || (x(b), hy(r, b)), i?.(b);
  };
  return /* @__PURE__ */ D("label", { className: [fy.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ D(or, { id: a, size: c, value: m, onChange: p, children: [
      g === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      g !== void 0 && !e.includes(g) && /* @__PURE__ */ o("option", { value: g, children: g }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function gy(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function no(e) {
  const [t, n] = q(() => gy(e));
  return ve(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const by = "_pressed_12x15_8", yy = {
  pressed: by
}, xy = st(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: l,
    toggleSeverity: i = "primary",
    toggleShade: d = "darker",
    toggleContent: s,
    size: a = "md",
    className: c,
    onClick: f,
    children: u,
    variant: x,
    severity: h,
    shade: g,
    ...m
  }, y) {
    const [p, _] = q(n), b = t ?? p, O = (v) => {
      const $ = !b;
      t === void 0 && _($), r?.($), f?.(v);
    };
    return /* @__PURE__ */ o(
      an,
      {
        ...m,
        ref: y,
        variant: b && l ? l : x,
        severity: b ? i : h,
        shade: b ? d : g,
        size: a,
        "aria-pressed": b,
        className: [b ? yy.pressed : null, c].filter(Boolean).join(" "),
        onClick: O,
        children: b && s !== void 0 ? s : u
      }
    );
  }
), Cl = "dx-theme";
function vy(e) {
  const t = e === void 0 ? Cl : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function wy(e, t) {
  const n = e === void 0 ? Cl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function KS({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: s
}) {
  const a = no("(prefers-color-scheme: dark)"), [c, f] = q(void 0), u = e !== void 0, x = e ?? c ?? vy(n) ?? t ?? "system", h = x === "system" ? a ? "dark" : "light" : x;
  return ve(() => {
    if (!u) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, u]), /* @__PURE__ */ o(
    xy,
    {
      id: i,
      size: s,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: h === "dark",
      onChange: (m) => {
        const y = m ? "dark" : "light";
        u || (f(y), wy(n, y)), r?.(y);
      },
      toggleContent: /* @__PURE__ */ o(Me, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Me, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Al = "dx-palette", Dl = "dx-theme", Us = "data-palette", qs = "data-theme", Ws = /* @__PURE__ */ new Set();
function ky() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Us), t = document.documentElement.getAttribute(qs);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function ro(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Us) : document.documentElement.setAttribute(Us, e.theme), e.appearance == null ? document.documentElement.removeAttribute(qs) : document.documentElement.setAttribute(qs, e.appearance));
}
function Ml(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function Vo(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let Yo = !1;
function xr() {
  const e = ky();
  if (!Yo) {
    Yo = !0;
    const t = Vo(Al), n = Vo(Dl), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && ro(l), l;
  }
  return e;
}
function Il() {
  const e = xr();
  Ws.forEach((t) => t({ ...e }));
}
function Xo(e) {
  return Ws.add(e), () => {
    Ws.delete(e);
  };
}
function GS() {
  return xr().theme;
}
function Ny(e) {
  const t = xr();
  t.theme !== e && (t.theme = e, ro(t), Ml(Al, e), Il());
}
function VS() {
  return xr().appearance;
}
function Sy(e) {
  const t = xr();
  t.appearance !== e && (t.appearance = e, ro(t), Ml(Dl, e), Il());
}
function YS() {
  const [, e] = q(0);
  ve(() => Xo(() => e((n) => n + 1)), []);
  const t = xr();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: Ny,
    setAppearance: Sy,
    subscribe: Xo
  };
}
function Oy(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (m, y) => Math.floor(Math.abs(Math.sin(y + 1)) * 4294967296)
  ), a = (m, y) => m + y | 0, c = (m, y) => m << y | m >>> 32 - y;
  let f = 1732584193, u = 4023233417, x = 2562383102, h = 271733878;
  for (let m = 0; m < r; m += 64) {
    const y = [];
    for (let v = 0; v < 16; v += 1)
      y.push(i.getUint32(m + v * 4, !0));
    let p = f, _ = u, b = x, O = h;
    for (let v = 0; v < 64; v += 1) {
      let $, S;
      v < 16 ? ($ = _ & b | ~_ & O, S = v) : v < 32 ? ($ = O & _ | ~O & b, S = (5 * v + 1) % 16) : v < 48 ? ($ = _ ^ b ^ O, S = (3 * v + 5) % 16) : ($ = b ^ (_ | ~O), S = 7 * v % 16), $ = a(a(a($, p), s[v]), y[S]), p = O, O = b, b = _, _ = a(_, c($, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = a(f, p), u = a(u, _), x = a(x, b), h = a(h, O);
  }
  const g = (m) => {
    let y = "";
    for (let p = 0; p < 4; p += 1)
      y += `0${(m >>> p * 8 & 255).toString(16)}`.slice(-2);
    return y;
  };
  return g(f) + g(u) + g(x) + g(h);
}
const $y = "_avatar_1mhfr_1", Ey = "_xs_1mhfr_12", Ty = "_sm_1mhfr_18", Cy = "_md_1mhfr_24", Ay = "_lg_1mhfr_30", Dy = "_xl_1mhfr_36", My = "_initials_1mhfr_42", Iy = "_image_1mhfr_57", zy = "_status_1mhfr_64", Ly = "_online_1mhfr_84", Ry = "_offline_1mhfr_88", Py = "_away_1mhfr_92", ur = {
  avatar: $y,
  xs: Ey,
  sm: Ty,
  md: Cy,
  lg: Ay,
  xl: Dy,
  initials: My,
  image: Iy,
  status: zy,
  online: Ly,
  offline: Ry,
  away: Py
}, jy = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, us = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function By(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Fy(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return us[t % us.length] ?? us[0];
}
function XS({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: i,
  size: d = "md",
  status: s,
  className: a
}) {
  const c = Oe(() => e ? By(e) : "?", [e]), f = Oe(() => e ? Fy(e) : us[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const O = n.trim().toLowerCase();
    return O === "" ? void 0 : `https://secure.gravatar.com/avatar/${Oy(O)}?d=${r}&s=${jy[d]}&r=${l}`;
  }, [t, n, r, l, d]), x = t ?? u, [h, g] = q(null), m = x != null && h !== x, y = m && i === "", p = i ?? e ?? "avatar", _ = s ? `${p}, ${s}` : p, b = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: ur.image,
        src: x,
        alt: y ? "" : s ? _ : p,
        onError: () => g(x ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: ur.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ D(
    "span",
    {
      className: [
        ur.avatar,
        ur[d],
        s ? ur[s] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : _,
      children: [
        b,
        s && /* @__PURE__ */ o("span", { className: ur.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Hy = "_root_zzwfz_1", Uy = "_left_zzwfz_6", qy = "_right_zzwfz_7", Wy = "_panel_zzwfz_12", Ky = "_bottom_zzwfz_20", Gy = "_tabList_zzwfz_24", Vy = "_underline_zzwfz_53", Yy = "_pills_zzwfz_72", Xy = "_tab_zzwfz_24", Zy = "_active_zzwfz_113", Jy = "_disabled_zzwfz_139", Dn = {
  root: Hy,
  left: Uy,
  right: qy,
  panel: Wy,
  bottom: Ky,
  tabList: Gy,
  underline: Vy,
  pills: Yy,
  tab: Xy,
  active: Zy,
  disabled: Jy
};
function ZS({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const s = ot(), a = oe(null), [c, f] = q(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, x = i === "left" || i === "right", h = (y) => {
    f(y), r?.(y);
  }, g = (y) => {
    const p = e.filter((O) => !O.disabled), _ = p.findIndex((O) => O.key === u);
    let b = -1;
    y.key === "ArrowRight" || x && y.key === "ArrowDown" ? b = (_ + 1) % p.length : y.key === "ArrowLeft" || x && y.key === "ArrowUp" ? b = (_ - 1 + p.length) % p.length : y.key === "Home" ? b = 0 : y.key === "End" && (b = p.length - 1), b >= 0 && (y.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[b]?.key ?? "")}"]`
    )?.focus(), h(p[b]?.key ?? ""));
  }, m = e.find((y) => y.key === u);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Dn.root, Dn[i], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Dn.tabList, Dn[l], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: g,
            children: e.map((y) => {
              const p = y.key === u;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": p,
                  "aria-controls": `${s}-panel-${y.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    Dn.tab,
                    p ? Dn.active : null,
                    y.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => h(y.key),
                  children: y.label
                },
                y.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ o(
          "div",
          {
            role: "tabpanel",
            id: `${s}-panel-${m.key}`,
            "aria-labelledby": `${s}-tab-${m.key}`,
            className: Dn.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const Qy = "_root_1l1j2_1", e0 = "_item_1l1j2_9", t0 = "_heading_1l1j2_13", n0 = "_trigger_1l1j2_17", r0 = "_disabled_1l1j2_34", s0 = "_title_1l1j2_48", o0 = "_chevron_1l1j2_52", l0 = "_open_1l1j2_59", a0 = "_content_1l1j2_63", Mn = {
  root: Qy,
  item: e0,
  heading: t0,
  trigger: n0,
  disabled: r0,
  title: s0,
  chevron: o0,
  open: l0,
  content: a0
};
function JS({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: i
}) {
  const d = ot(), [s, a] = q(
    r ?? []
  ), c = n ?? s, f = (u) => {
    const x = c.includes(u) ? c.filter((h) => h !== u) : t ? [...c, u] : [u];
    a(x), l?.(x);
  };
  return /* @__PURE__ */ o("div", { className: [Mn.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const x = c.includes(u.key), h = `${d}-panel-${u.key}`, g = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ D("div", { className: Mn.item, children: [
      /* @__PURE__ */ o("h3", { className: Mn.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: g,
          "aria-expanded": x,
          "aria-controls": h,
          disabled: u.disabled,
          className: [
            Mn.trigger,
            u.disabled ? Mn.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(u.key),
          children: [
            /* @__PURE__ */ o("span", { className: Mn.title, children: u.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [Mn.chevron, x ? Mn.open : null].filter(Boolean).join(" "),
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
          id: h,
          role: "region",
          "aria-labelledby": g,
          hidden: !x,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const i0 = "_textarea_l7fsl_1", c0 = "_invalid_l7fsl_27", d0 = "_xs_l7fsl_34", u0 = "_sm_l7fsl_39", f0 = "_md_l7fsl_44", _0 = "_lg_l7fsl_49", p0 = "_xl_l7fsl_54", os = {
  textarea: i0,
  invalid: c0,
  xs: d0,
  sm: u0,
  md: f0,
  lg: _0,
  xl: p0,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, QS = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          os.textarea,
          os[t],
          os[`resize-${n}`],
          r ? os.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), m0 = "_root_xyp2i_1", h0 = "_trigger_xyp2i_9", g0 = "_invalid_xyp2i_40", b0 = "_placeholder_xyp2i_47", y0 = "_label_xyp2i_54", x0 = "_chevron_xyp2i_60", v0 = "_chevronOpen_xyp2i_70", w0 = "_menu_xyp2i_74", k0 = "_option_xyp2i_89", N0 = "_disabled_xyp2i_100", S0 = "_active_xyp2i_104", O0 = "_selected_xyp2i_105", $0 = "_header_xyp2i_115", E0 = "_xs_xyp2i_122", T0 = "_sm_xyp2i_128", C0 = "_md_xyp2i_134", A0 = "_lg_xyp2i_140", D0 = "_xl_xyp2i_146", Ht = {
  root: m0,
  trigger: h0,
  invalid: g0,
  placeholder: b0,
  label: y0,
  chevron: x0,
  chevronOpen: v0,
  menu: w0,
  option: k0,
  disabled: N0,
  active: S0,
  selected: O0,
  header: $0,
  xs: E0,
  sm: T0,
  md: C0,
  lg: A0,
  xl: D0
}, M0 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function eO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: s = !1,
  className: a,
  ...c
}) {
  const f = ot(), u = `${f}-listbox`, x = oe(null), h = oe(null), [g, m] = q(
    n
  ), [y, p] = q(!1), _ = t ?? g, b = e.map(
    (w, k) => w.label === "" || w.disabled ? -1 : k
  ).filter((w) => w >= 0), O = e.findIndex(
    (w) => w.value === _
  ), [v, $] = q(
    () => b.includes(0) ? 0 : b[0] ?? -1
  ), S = B(() => {
    if (s) return;
    const w = O >= 0 && b.includes(O) ? O : b[0];
    $(w ?? -1), p(!0);
  }, [s, O, b]), C = B(() => {
    p(!1), h.current?.focus();
  }, []);
  ve(() => {
    if (!y) return;
    const w = (k) => {
      x.current && !x.current.contains(k.target) && p(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [y]);
  const A = (w) => {
    m(w), r?.(w), p(!1), h.current?.focus();
  }, L = (w) => {
    if (b.length === 0) return;
    const k = b.includes(v) ? b.indexOf(v) : 0, E = b[(k + w + b.length) % b.length];
    E != null && $(E);
  }, z = (w) => {
    if (!y) {
      w.key === "ArrowDown" && (w.preventDefault(), S());
      return;
    }
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), L(1);
        break;
      case "ArrowUp":
        w.preventDefault(), L(-1);
        break;
      case "Home":
        w.preventDefault(), b[0] != null && $(b[0]);
        break;
      case "End":
        w.preventDefault(), b[b.length - 1] != null && $(b[b.length - 1]);
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
  }, T = e.find(
    (w) => w.value === _
  );
  return /* @__PURE__ */ D(
    "div",
    {
      ref: x,
      className: [Ht.root, a].filter(Boolean).join(" "),
      onKeyDown: z,
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: h,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: s,
            className: [
              Ht.trigger,
              Ht[i],
              y ? Ht.open : null,
              d ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? p(!1) : S(),
            ...c,
            children: [
              /* @__PURE__ */ o("span", { className: T ? Ht.label : Ht.placeholder, children: T ? T.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [Ht.chevron, y ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: M0 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        y && /* @__PURE__ */ o(
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
                    w.disabled || A(w.value);
                  },
                  onMouseEnter: () => {
                    !w.disabled && w.label !== "" && $(k);
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
const I0 = "_root_1ma8a_1", z0 = "_wrap_1ma8a_9", L0 = "_input_1ma8a_26", R0 = "_invalid_1ma8a_31", P0 = "_clear_1ma8a_58", j0 = "_menu_1ma8a_83", B0 = "_option_1ma8a_98", F0 = "_disabled_1ma8a_109", H0 = "_active_1ma8a_113", U0 = "_empty_1ma8a_123", q0 = "_xs_1ma8a_129", W0 = "_sm_1ma8a_136", K0 = "_md_1ma8a_143", G0 = "_lg_1ma8a_150", V0 = "_xl_1ma8a_157", dn = {
  root: I0,
  wrap: z0,
  input: L0,
  invalid: R0,
  clear: P0,
  menu: j0,
  option: B0,
  disabled: F0,
  active: H0,
  empty: U0,
  xs: q0,
  sm: W0,
  md: K0,
  lg: G0,
  xl: V0
}, Y0 = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function tO({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: s = !1,
  disabled: a = !1,
  filter: c = Y0,
  className: f,
  ...u
}) {
  const x = ot(), h = `${x}-listbox`, g = oe(null), m = oe(null), [y, p] = q(n), [_, b] = q(!1), O = t ?? y, v = Oe(
    () => O.trim() === "" ? [...e] : e.filter((I) => c(I, O)),
    [e, O, c]
  ), $ = v.map((I, j) => I.disabled ? -1 : j).filter((I) => I >= 0), [S, C] = q(-1), A = (I) => {
    p(I), r?.(I);
  }, L = (I) => {
    A(I.label), l?.(I.value, I), b(!1);
  }, z = (I) => {
    if ($.length === 0) return;
    const j = $.includes(S) ? $.indexOf(S) : I === 1 ? -1 : 0, F = $[(j + I + $.length) % $.length];
    F != null && C(F);
  }, T = (I) => {
    a || (A(I.target.value), b(!0), C(-1));
  }, w = () => {
    a || O !== "" && b(!0);
  }, k = (I) => {
    g.current && !g.current.contains(I.relatedTarget) && b(!1);
  }, E = (I) => {
    if (!a)
      switch (I.key) {
        case "ArrowDown":
          I.preventDefault(), _ ? z(1) : (b(!0), C($[0] ?? -1));
          break;
        case "ArrowUp":
          I.preventDefault(), _ && z(-1);
          break;
        case "Enter":
          I.preventDefault(), _ && S >= 0 && v[S] && L(v[S]);
          break;
        case "Escape":
          I.preventDefault(), b(!1);
          break;
        case "Tab":
          _ && S >= 0 && v[S] && L(v[S]), b(!1);
          break;
      }
  }, R = () => {
    A(""), C(-1), b(!0), m.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: g,
      className: [dn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: [dn.wrap, dn[d], s ? dn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": h,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && S >= 0 ? `${x}-option-${S}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: a,
                  value: O,
                  placeholder: i,
                  className: dn.input,
                  onChange: T,
                  onFocus: w,
                  onBlur: k,
                  onKeyDown: E,
                  ...u
                }
              ),
              O !== "" && !a && /* @__PURE__ */ o(
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
          /* @__PURE__ */ o("div", { id: h, className: dn.menu, children: /* @__PURE__ */ o("div", { className: dn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: h, role: "listbox", className: dn.menu, children: v.map((I, j) => /* @__PURE__ */ o(
          "div",
          {
            id: `${x}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": I.disabled || void 0,
            className: [
              dn.option,
              j === S ? dn.active : null,
              I.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              I.disabled || L(I);
            },
            onMouseDown: (F) => {
              F.preventDefault(), I.disabled || L(I);
            },
            onMouseEnter: () => {
              I.disabled || C(j);
            },
            children: I.label
          },
          I.value
        )) }))
      ]
    }
  );
}
const X0 = "_box_muvqe_1", Z0 = "_option_muvqe_12", J0 = "_disabled_muvqe_23", Q0 = "_selected_muvqe_27", ex = "_active_muvqe_33", zr = {
  box: X0,
  option: Z0,
  disabled: J0,
  selected: Q0,
  active: ex
};
function nO({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: i,
  style: d,
  ...s
}) {
  const a = ot(), [c, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], x = e.findIndex((v) => !v.disabled), [h, g] = q(
    () => x >= 0 ? x : 0
  ), m = oe(""), y = oe(null), p = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), b = (v) => {
    const $ = e[v];
    if (!(!$ || $.disabled))
      if (g(v), r) {
        const S = u.includes($.value) ? u.filter((C) => C !== $.value) : [...u, $.value];
        p(S);
      } else
        p([$.value]);
  }, O = (v) => {
    if (_.length === 0) return;
    const $ = _.includes(h) ? h : _[0];
    let S = -1;
    if (v.key === "ArrowDown")
      S = _[(_.indexOf($) + 1) % _.length];
    else if (v.key === "ArrowUp")
      S = _[(_.indexOf($) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      S = _[0];
    else if (v.key === "End")
      S = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), b($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const C = (m.current + v.key).toLowerCase();
      m.current = C, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [..._, ..._], L = _.indexOf($) + 1, z = A.slice(L).find((T) => e[T]?.label.toLowerCase().startsWith(C));
      z != null && g(z);
      return;
    }
    S >= 0 && (v.preventDefault(), g(S), r || p([e[S]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[h] ? `${a}-option-${h}` : void 0,
      style: d,
      className: [zr.box, i].filter(Boolean).join(" "),
      onKeyDown: O,
      ...s,
      children: e.map((v, $) => {
        const S = u.includes(v.value), C = $ === h;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${a}-option-${$}`,
            role: "option",
            "aria-selected": S,
            "aria-disabled": v.disabled || void 0,
            className: [
              zr.option,
              S ? zr.selected : null,
              C ? zr.active : null,
              v.disabled ? zr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => b($),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const tx = "_group_oinj7_1", nx = "_legend_oinj7_8", rx = "_list_oinj7_16", sx = "_item_oinj7_25", ox = "_disabled_oinj7_32", lx = "_label_oinj7_37", ax = "_checkbox_oinj7_48", Zn = {
  group: tx,
  legend: nx,
  list: rx,
  item: sx,
  disabled: ox,
  label: lx,
  checkbox: ax
};
function rO({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [s, a] = q(() => [
    ...n
  ]), c = t ?? s, f = (u, x) => {
    const h = x ? [...c, u] : c.filter((g) => g !== u);
    a(h), r?.(h);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Zn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: Zn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: Zn.list, children: e.map((u) => {
      const x = c.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Zn.item, u.disabled ? Zn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Zn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Zn.checkbox,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (h) => f(u.value, h.target.checked)
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
const ix = "_group_46668_1", cx = "_legend_46668_8", dx = "_list_46668_16", ux = "_item_46668_25", fx = "_disabled_46668_32", _x = "_label_46668_37", px = "_radio_46668_48", Jn = {
  group: ix,
  legend: cx,
  list: dx,
  item: ux,
  disabled: fx,
  label: _x,
  radio: px
};
function sO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [s, a] = q(
    n
  ), c = t ?? s, f = (u) => {
    a(u), r?.(u);
  };
  return /* @__PURE__ */ D("fieldset", { className: [Jn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: Jn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: Jn.list, children: e.map((u) => {
      const x = u.value === c;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Jn.item, u.disabled ? Jn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: Jn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: Jn.radio,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (h) => f(h.target.value)
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
const mx = "_bar_9zyxn_1", hx = "_vertical_9zyxn_12", gx = "_option_9zyxn_17", bx = "_selected_9zyxn_40", yx = "_sm_9zyxn_56", xx = "_md_9zyxn_62", vx = "_lg_9zyxn_68", fr = {
  bar: mx,
  vertical: hx,
  option: gx,
  selected: bx,
  sm: yx,
  md: xx,
  lg: vx
};
function Zo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function oO(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: i = "horizontal",
    onChange: d,
    size: s = "md",
    className: a,
    ...c
  } = e, f = l ?? !1, [u, x] = q(r ?? (f ? [] : t[0]?.value)), h = n ?? u, g = l === !0 || l === void 0 && Array.isArray(h), m = (p) => {
    if (!g) {
      x(p), d?.(p);
      return;
    }
    const _ = Zo(h), b = _.includes(p) ? _.filter((O) => O !== p) : [..._, p];
    x(b), d?.(b);
  }, y = (p) => g ? Zo(h).includes(p) : h === p;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        fr.bar,
        fr[s],
        i === "vertical" ? fr.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((p) => {
        const _ = y(p.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: p.disabled,
            className: [
              fr.option,
              _ ? fr.selected : null,
              p.disabled ? fr.disabled : null
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
const wx = "_root_11hdr_1", kx = "_action_11hdr_10", Nx = "_caret_11hdr_15", Sx = "_sm_11hdr_49", Ox = "_md_11hdr_53", $x = "_lg_11hdr_57", Ex = "_fullWidth_11hdr_62", Tx = "_menu_11hdr_70", Cx = "_item_11hdr_83", Ax = "_itemIcon_11hdr_105", Dx = "_disabled_11hdr_110", Mx = "_active_11hdr_114", Ix = "_danger_11hdr_123", yn = {
  root: wx,
  action: kx,
  caret: Nx,
  sm: Sx,
  md: Ox,
  lg: $x,
  fullWidth: Ex,
  menu: Tx,
  item: Cx,
  itemIcon: Ax,
  disabled: Dx,
  active: Mx,
  danger: Ix
}, lO = st(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: l = "primary",
    variant: i = "filled",
    shade: d = "default",
    size: s = "md",
    loading: a = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: x,
    "aria-label": h,
    openAriaLabel: g = "More actions",
    ...m
  }, y) {
    const _ = `${ot()}-menu`, b = oe(null), O = oe(null), v = oe([]), [$, S] = q(!1), [C, A] = q(-1), L = u || a, z = Oe(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), T = B(() => {
      L || (A(z[0] ?? -1), S(!0));
    }, [L, z]), w = B(() => {
      S(!1), O.current?.focus();
    }, []);
    ve(() => {
      if (!$) return;
      const F = (X) => {
        b.current && !b.current.contains(X.target) && S(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [$]), ve(() => {
      $ && (L || !c) && S(!1);
    }, [$, L, c]);
    const k = oe($);
    if (ve(() => {
      const F = k.current;
      if (k.current = $, !$ || F) return;
      const X = z.includes(C) ? C : z[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [$, C, z]), c === !1) return null;
    const E = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), S(!1), O.current?.focus());
    }, R = (F) => {
      if (z.length === 0) return;
      const X = z.includes(C) ? z.indexOf(C) : F === 1 ? -1 : 0, ie = z[(X + F + z.length) % z.length];
      ie != null && (A(ie), v.current[ie]?.focus());
    }, I = (F) => {
      const X = F === "first" ? z[0] : z[z.length - 1];
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
          F.preventDefault(), I("first");
          break;
        case "End":
          F.preventDefault(), I("last");
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
          yn[s],
          f ? yn.fullWidth : null,
          x
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            an,
            {
              className: yn.action,
              variant: i,
              severity: l,
              shade: d,
              size: s,
              loading: a,
              disabled: u,
              "aria-label": h,
              onClick: () => {
                $ && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            an,
            {
              ref: O,
              className: yn.caret,
              variant: i,
              severity: l,
              shade: d,
              size: s,
              disabled: L,
              "aria-haspopup": "menu",
              "aria-expanded": $,
              "aria-controls": _,
              "aria-label": g,
              onClick: () => $ ? S(!1) : T(),
              onKeyDown: (F) => {
                !$ && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), T());
              },
              children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          $ && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
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
                  onClick: () => E(X),
                  onMouseEnter: () => {
                    F.disabled || A(X);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ o("span", { className: yn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: F.icon, size: 16 }) }) : null,
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
), zx = "_mask_rcv90_1", Lx = "_invalid_rcv90_31", Rx = "_xs_rcv90_38", Px = "_sm_rcv90_44", jx = "_md_rcv90_50", Bx = "_lg_rcv90_56", Fx = "_xl_rcv90_62", zs = {
  mask: zx,
  invalid: Lx,
  xs: Rx,
  sm: Px,
  md: jx,
  lg: Bx,
  xl: Fx
};
function Jo(e, t) {
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
const aO = st(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: i = "",
  onChange: d,
  className: s,
  onKeyDown: a,
  ...c
}, f) {
  const [u, x] = q(i ?? ""), h = l !== void 0, g = h ? l ?? "" : u, m = (_) => {
    const b = Jo(_, r);
    return h || x(b), d?.(b), b;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (_) => {
        m(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const b = _.currentTarget.selectionStart ?? g.length, O = g[b - 1];
          if (O !== void 0 && !/\d/.test(O)) {
            _.preventDefault();
            const v = g.replace(/\D/g, "");
            m(Jo(v.slice(0, -1), r));
          }
        }
        a?.(_);
      },
      className: [
        zs.mask,
        zs[t],
        n ? zs.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), Hx = "_wrapper_12jdf_1", Ux = "_input_12jdf_8", qx = "_invalid_12jdf_38", Wx = "_button_12jdf_45", Kx = "_up_12jdf_77", Gx = "_down_12jdf_82", Vx = "_xs_12jdf_87", Yx = "_sm_12jdf_93", Xx = "_md_12jdf_99", Zx = "_lg_12jdf_105", Jx = "_xl_12jdf_111", Wn = {
  wrapper: Hx,
  input: Ux,
  invalid: qx,
  button: Wx,
  up: Kx,
  down: Gx,
  xs: Vx,
  sm: Yx,
  md: Xx,
  lg: Zx,
  xl: Jx
};
function Ks(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Qx(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function zl(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function ev(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function tv(e, t, n, r, l) {
  const d = Ks(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = d + t * l : t > 0 ? s = n + Math.ceil((d - n + 1e-9) / l) * l : s = n + Math.floor((d - n - 1e-9) / l) * l, zl(s, n, r);
}
const iO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: i,
    defaultValue: d,
    onChange: s,
    min: a,
    max: c,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: x = "Decrement",
    onBlur: h,
    onKeyDown: g,
    ...m
  }, y) {
    const [p, _] = q(
      d != null ? String(d) : ""
    ), b = i !== void 0, O = b ? i == null ? "" : String(i) : p, v = (z) => {
      b || _(z), s?.(Ks(z));
    }, $ = (z) => {
      b || _(String(z)), s?.(z);
    }, S = (z) => {
      l || $(tv(O, z, a, c, f));
    }, C = (z) => {
      v(Qx(z.target.value));
    }, A = (z) => {
      z.key === "ArrowUp" ? (z.preventDefault(), S(1)) : z.key === "ArrowDown" && (z.preventDefault(), S(-1)), g?.(z);
    }, L = (z) => {
      const T = Ks(O);
      T === null ? (b || _(""), s?.(null)) : $(zl(ev(T, a, f), a, c)), h?.(z);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Wn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: y,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: O,
            disabled: l,
            onChange: C,
            onKeyDown: A,
            onBlur: L,
            className: [
              Wn.input,
              Wn[t],
              n ? Wn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Wn.button, Wn.up].join(" "),
            "aria-label": u,
            disabled: l,
            onClick: () => S(1),
            children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Wn.button, Wn.down].join(" "),
            "aria-label": x,
            disabled: l,
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
}, nv = [
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
function Gs(e) {
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
function rv({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function sv({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, i = n / 255, d = Math.max(r, l, i), s = Math.min(r, l, i), a = d - s;
  let c = 0;
  return a !== 0 && (d === r ? c = (l - i) / a % 6 : d === l ? c = (i - r) / a + 2 : c = (r - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function _r({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, i = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, s = 0, a = 0;
  l < 1 ? (d = r, s = i) : l < 2 ? (d = i, s = r) : l < 3 ? (s = r, a = i) : l < 4 ? (s = i, a = r) : l < 5 ? (d = i, a = r) : (d = r, a = i);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((s + c) * 255),
    b: Math.round((a + c) * 255),
    a: 1
  };
}
function ov(e) {
  const t = Gs(e);
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
function Qo({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const cO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = nv,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: s = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: x,
  onChange: h,
  onValueChange: g,
  onOpen: m,
  onClose: y
}) => {
  const p = oe(null), _ = oe(null), b = oe(null), O = oe(null), v = oe(null), $ = ot(), S = oe(null), C = Oe(
    () => ov(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, L] = q(!1), [z, T] = q(null), w = z ?? C, k = Oe(() => sv(w), [w]), E = B(
    (Z) => {
      const M = Qo(Z);
      h?.(M), g?.(M);
    },
    [h, g]
  ), R = B(
    (Z, M) => {
      T(Z), M && !i && E(Z);
    },
    [i, E]
  ), I = B(() => {
    L(!1), T(null), y?.(), _.current?.focus();
  }, [y]), j = B(() => {
    s || (T(C), L(!0), m?.());
  }, [s, C, m]), F = B(() => {
    A ? I() : j();
  }, [A, I, j]), X = B(
    (Z, M) => {
      const Y = b.current;
      if (!Y) return k;
      const Q = Y.getBoundingClientRect(), ge = on((Z - Q.left) / Q.width, 0, 1), ae = on(1 - (M - Q.top) / Q.height, 0, 1);
      return { h: k.h, s: ge, v: ae };
    },
    [k]
  ), ie = B(
    (Z, M) => {
      if (!M) return 0;
      const Y = M.getBoundingClientRect();
      return on((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "sat";
    const M = X(Z.clientX, Z.clientY);
    R({ ..._r(M), a: w.a }, !0);
  }, we = (Z) => {
    if (S.current !== "sat") return;
    Z.preventDefault();
    const M = X(Z.clientX, Z.clientY);
    R({ ..._r(M), a: w.a }, !0);
  }, le = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "hue";
    const M = ie(Z.clientX, O.current);
    R(
      { ..._r({ ...k, h: M * 360 }), a: w.a },
      !0
    );
  }, _e = (Z) => {
    if (S.current !== "hue") return;
    Z.preventDefault();
    const M = ie(Z.clientX, O.current);
    R(
      { ..._r({ ...k, h: M * 360 }), a: w.a },
      !0
    );
  }, K = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "alpha";
    const M = ie(Z.clientX, v.current);
    R({ ...w, a: M }, !0);
  }, he = (Z) => {
    if (S.current !== "alpha") return;
    Z.preventDefault();
    const M = ie(Z.clientX, v.current);
    R({ ...w, a: M }, !0);
  }, ue = () => {
    S.current = null;
  }, ye = B(
    (Z, M) => {
      const Y = {
        h: k.h,
        s: on(k.s + Z, 0, 1),
        v: on(k.v + M, 0, 1)
      };
      R({ ..._r(Y), a: w.a }, !0);
    },
    [k, w.a, R]
  ), pe = B(
    (Z) => {
      const M = (k.h + Z + 360) % 360;
      R({ ..._r({ ...k, h: M }), a: w.a }, !0);
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
        Z.preventDefault(), I();
        break;
    }
  }, $e = (Z, M) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), M === "hue" ? pe(-6) : De(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), M === "hue" ? pe(6) : De(0.05);
        break;
      case "Escape":
        Z.preventDefault(), I();
        break;
    }
  }, ne = (Z, M) => {
    if (Z === "hex") {
      const ae = Gs(M);
      ae && R({ ...ae, a: w.a }, !0);
      return;
    }
    const Y = M.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
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
    z && (E(z), T(null), L(!1), y?.(), _.current?.focus());
  };
  ve(() => {
    if (!A) return;
    const Z = (M) => {
      p.current && !p.current.contains(M.target) && I();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [A, I]), ve(() => {
    if (!A) return;
    const Z = (M) => {
      M.key === "Escape" && I();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [A, I]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = Qo(w), Ge = rv(w), Je = { x: k.s * 100, y: (1 - k.v) * 100 }, At = k.h / 360 * 100, lt = w.a * 100, yt = /* @__PURE__ */ D("div", { className: Re["dx-colorpicker-panel"], children: [
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
        ref: O,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(k.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-hue-picker"],
        onKeyDown: (Z) => $e(Z, "hue"),
        onPointerDown: le,
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
        "aria-valuenow": Math.round(lt),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${k.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => $e(Z, "alpha"),
        onPointerDown: K,
        onPointerMove: he,
        onPointerUp: ue,
        children: /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
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
            onChange: (Z) => ne("r", Z.target.value)
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
            onChange: (Z) => ne("g", Z.target.value)
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
            onChange: (Z) => ne("b", Z.target.value)
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
            onChange: (Z) => ne("a", Z.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Re["dx-colorpicker-palette"], children: l.map((Z) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const M = Gs(Z);
          i ? R({ ...M, a: w.a }, !1) : (T(null), E({ ...M, a: w.a }), L(!1), y?.(), _.current?.focus());
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
            "aria-controls": $,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && A && (Z.preventDefault(), I());
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
              c && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ o(
          "div",
          {
            id: $,
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
}, lv = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function av(e, t) {
  const n = Yt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function Vs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, r - 1, l, i, d, s);
  return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== l ? null : { year: n, month: r, day: l, hour: i, minute: d, second: s };
}
function Kn() {
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
function ls(e, t) {
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
function el(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const tl = {
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
}, iv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], cv = ["y", "M", "d", "H", "m", "s"];
function as(e, t, n) {
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
    for (const a of iv)
      if (t.startsWith(a, i)) {
        l += tl[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const s = t[i];
    if (cv.includes(s)) {
      l += tl[s](e, r, n), i += 1;
      continue;
    }
    l += s, i += 1;
  }
  return l;
}
const dv = [
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
function uv(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let s = null;
    for (const a of dv)
      if (t.startsWith(a, l)) {
        s = a;
        break;
      }
    if (s) {
      const a = e.slice(r, r + s.length);
      if (!/^\d+$/.test(a)) return null;
      const c = Number(a);
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
      r += s.length, l += s.length;
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
function Lr(e, t) {
  const n = Vs(e);
  return n || uv(e, t);
}
function fv(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const _v = ["hour", "minute", "second"];
function is(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const dO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: i = "yyyy-MM-dd",
    min: d,
    max: s,
    showTime: a = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: x,
    locale: h = "en-US",
    onChange: g,
    onValueChange: m,
    onOpen: y,
    onClose: p,
    disabled: _,
    readOnly: b,
    placeholder: O,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: S,
    tabIndex: C,
    className: A,
    onBlur: L,
    onKeyDown: z,
    ...T
  }, w) {
    const k = oe(null), E = oe(null), R = oe(null), I = oe(null), j = ot(), F = r !== void 0, [X, ie] = q(
      () => l != null ? as(
        Lr(l, i) ?? Kn(),
        i,
        h
      ) : ""
    ), [te, we] = q(!1), [le, _e] = q(null), [K, he] = q(() => {
      const V = r !== void 0 ? r ?? "" : l ?? "";
      if (V) {
        const me = Lr(V, i);
        if (me) return me;
      }
      return Kn();
    }), ue = Oe(() => d ? Vs(d) : null, [d]), ye = Oe(() => s ? Vs(s) : null, [s]), pe = Oe(
      () => new Set(x ?? []),
      [x]
    ), De = Oe(() => {
      const V = F ? r ?? "" : X;
      return V ? Lr(V, i) : null;
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
        F || ie(V ? as(V, i, h) : "");
        const me = V ? av(V, a) : "";
        g?.(me), m?.(me);
      },
      [F, i, h, a, g, m]
    ), Ae = B(
      (V) => {
        E.current = V, typeof w == "function" ? w(V) : w && (w.current = V);
      },
      [w]
    ), fe = B(() => {
      we(!1), _e(null), p?.(), u || R.current?.focus();
    }, [u, p]), Fe = B(() => {
      if (_) return;
      const V = De ?? Kn();
      _e(V), he($e(V)), we(!0), y?.();
    }, [_, De, $e, y]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Je = B((V) => {
      I.current?.querySelector(
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
          const Ye = Ve ?? De ?? Kn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + me));
          return { ...Ye, [V]: Xe };
        });
      },
      [De]
    ), yt = B(
      (V, me) => {
        const Ve = me.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? De ?? Kn(), [V]: Math.min(Pt, Ye) }));
      },
      [De]
    ), Z = B(() => {
      le && (ne(le), fe());
    }, [le, ne, fe]), M = B(() => {
      if (te) return;
      const V = Lr(X, i);
      ne(V ? fv(V, ue, ye) : null);
    }, [te, X, i, ue, ye, ne]), Y = (V) => {
      const me = V.target.value;
      F || ie(me), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? le && (ne(le), fe()) : M()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), z?.(V);
    }, ge = (V) => {
      M(), L?.(V);
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
          me = In(K, -el(K)), V.preventDefault();
          break;
        case "End":
          me = In(K, 6 - el(K)), V.preventDefault();
          break;
        case "PageUp":
          me = ls(K, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          me = ls(K, V.shiftKey ? 12 : 1), V.preventDefault();
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
      F || ie(""), g?.(""), m?.(""), E.current?.focus();
    }, je = te && le ? as(le, i, h) : F ? r ? as(
      Lr(r, i) ?? Kn(),
      i,
      h
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: K.year, month: K.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), re = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < lv; V += 1)
      Le.push(In(re, V - Xt));
    const Nt = le ? Yt(le) : De ? Yt(De) : null, Rt = Yt(Kn()), xt = `${nt.year}-${ln(nt.month)}`, Ie = Oe(
      () => new Intl.DateTimeFormat(h, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [h]
    ), We = new Intl.DateTimeFormat(h, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, me) => new Intl.DateTimeFormat(h, { weekday: "short" }).format(
        new Date(2021, 0, 3 + me)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], at = /* @__PURE__ */ D(
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
                  const V = $e(ls(K, -1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ o(Me, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-title"], children: We }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const V = $e(ls(K, 1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ o(Me, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
            "div",
            {
              ref: I,
              role: "grid",
              className: Ue["dx-datepicker-grid"],
              onKeyDown: ae,
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
                Array.from({ length: 6 }, (V, me) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: Le.slice(me * 7, me * 7 + 7).map((Ve) => {
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
            _v.map((V) => /* @__PURE__ */ D("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-time-label"], children: is(V) }),
              /* @__PURE__ */ D("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": is(V),
                    value: ln(
                      (le ?? De ?? Kn())[V]
                    ),
                    onChange: (me) => yt(V, me.target.value),
                    onKeyDown: (me) => {
                      me.key === "ArrowUp" ? (me.preventDefault(), lt(V, 1)) : me.key === "ArrowDown" ? (me.preventDefault(), lt(V, -1)) : me.key === "Enter" && (me.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${is(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${is(V).toLowerCase()}`,
                      onClick: () => lt(V, -1),
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
          A
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: b,
                placeholder: O,
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
                ...T
              }
            ),
            f && !_ && Ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  c ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
                onClick: Ee,
                children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ o(
              "button",
              {
                ref: R,
                type: "button",
                className: [Ue["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open calendar",
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
              children: at
            }
          )
        ]
      }
    );
  }
), Gn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, uO = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: i = "Clear",
  rateLabel: d = "Rate",
  tabIndex: s = 0,
  className: a,
  onChange: c,
  onValueChange: f
}) => {
  const [u, x] = q(e), h = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), g = B(
    (_) => {
      c?.(_), f?.(_);
    },
    [c, f]
  ), m = B(
    (_) => {
      n || r || (g(_), x(_));
    },
    [n, r, g]
  ), y = (_) => {
    if (n || r) return;
    const b = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), m(h(b + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), m(h(b - 1));
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
        Gn["dx-rating"],
        n ? Gn["dx-rating-readonly"] : null,
        r ? Gn["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: y,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Gn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => m(0),
            children: /* @__PURE__ */ o(Me, { icon: "block", size: 16 })
          }
        ),
        p.map((_) => {
          const b = _ <= e, O = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": b,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: O ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Gn["dx-rating-item"],
                b ? Gn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(_),
              onFocus: () => x(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Gn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Me, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Gn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "star", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, Qn = {
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
const fO = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: i = 1,
  range: d = !1,
  orientation: s = "horizontal",
  disabled: a = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: x = 0,
  className: h,
  onChange: g,
  onInput: m,
  onValueChange: y,
  onInputChange: p
}) => {
  const _ = oe(null), b = oe(
    null
  ), [O, v] = q(null), $ = O ?? e, S = Oe(
    () => Sn($, r, l),
    [$, r, l]
  ), C = Oe(
    () => Sn(d ? t : S, r, l),
    [d, t, S, r, l]
  ), A = Oe(
    () => Sn(d ? Math.max(n, C) : S, r, l),
    [d, n, C, S, r, l]
  ), L = B(
    (K) => {
      const he = l - r;
      return he <= 0 ? 0 : (Sn(K, r, l) - r) / he * 100;
    },
    [r, l]
  ), z = B(
    (K, he) => {
      const ue = _.current;
      if (!ue) return r;
      const ye = ue.getBoundingClientRect();
      let pe;
      s === "vertical" ? pe = 1 - (he - ye.top) / ye.height : pe = (K - ye.left) / ye.width;
      const De = r + Sn(pe, 0, 1) * (l - r);
      return i > 0 ? Sn(Math.round(De / i) * i, r, l) : Sn(De, r, l);
    },
    [r, l, i, s]
  ), T = B(
    (K) => {
      typeof K == "number" && v(K), g?.(K), y?.(K);
    },
    [g, y]
  ), w = B(
    (K) => {
      typeof K == "number" && v(K), m?.(K), p?.(K);
    },
    [m, p]
  ), k = B(
    (K, he, ue) => {
      const ye = z(he, ue);
      let pe;
      d ? K === "min" ? pe = { min: Math.min(ye, A), max: A } : pe = { min: C, max: Math.max(ye, C) } : pe = ye, w(pe), b.current === null && T(pe);
    },
    [d, z, C, A, w, T]
  ), E = B(
    (K, he) => {
      const ue = (i > 0 ? i : 1) * he;
      let ye;
      d ? K === "min" ? ye = {
        min: Sn(C + ue, r, A),
        max: A
      } : ye = {
        min: C,
        max: Sn(A + ue, C, l)
      } : ye = Sn(S + ue, r, l), T(ye);
    },
    [d, i, r, l, C, A, S, T]
  ), R = (K, he) => {
    if (!a)
      switch (he.key) {
        case "ArrowLeft":
        case "ArrowDown":
          he.preventDefault(), E(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          he.preventDefault(), E(K, 1);
          break;
        case "Home":
          he.preventDefault(), T(d ? K === "min" ? { min: r, max: A } : { min: C, max: C } : r);
          break;
        case "End":
          he.preventDefault(), T(d ? K === "min" ? { min: A, max: A } : { min: C, max: l } : l);
          break;
      }
  }, I = (K, he) => {
    a || (he.preventDefault(), he.currentTarget.focus(), typeof he.currentTarget.setPointerCapture == "function" && he.currentTarget.setPointerCapture(he.pointerId), b.current = { key: K, pointerId: he.pointerId }, k(K, he.clientX, he.clientY));
  }, j = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (K.preventDefault(), k(b.current.key, K.clientX, K.clientY));
  }, F = (K) => {
    !b.current || b.current.pointerId !== K.pointerId || (b.current = null, K.preventDefault(), T(d ? { min: C, max: A } : S));
  }, [X, ie] = q(null), te = L(C), we = L(A), le = d ? te : 0, _e = we;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Qn["dx-slider"],
        s === "vertical" ? Qn["dx-slider-vertical"] : null,
        a ? Qn["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: _, className: Qn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: Qn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${le}%`, height: `${_e - le}%` } : { left: `${le}%`, width: `${_e - le}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(C),
            "aria-orientation": s,
            "aria-label": d ? f : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && X === "max" ? -1 : x,
            className: Qn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (K) => R("min", K),
            onPointerDown: (K) => I("min", K),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("min")
          }
        ),
        d && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(A),
            "aria-orientation": s,
            "aria-label": u,
            "aria-disabled": a || void 0,
            tabIndex: a || X === "min" ? -1 : x,
            className: Qn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
            onKeyDown: (K) => R("max", K),
            onPointerDown: (K) => I("max", K),
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
}, pv = "-10675199.02:48:05.4775808", mv = "10675199.02:48:05.4775808", Ln = 86400, Rn = 3600, xn = 60, Ls = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, nl = {
  days: Ln,
  hours: Rn,
  minutes: xn,
  seconds: 1
}, hv = {
  day: Ln,
  hour: Rn,
  minute: xn,
  second: 1
};
function pr(e) {
  return String(e).padStart(2, "0");
}
function Ur(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((u) => u != null)) return null;
    const s = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (s * Ln + a * Rn + c * xn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || a > 59 || c > 59 ? null : n * (d * Ln + s * Rn + a * xn + c + f);
  }
  return null;
}
function gv(e) {
  return e.days * Ln + e.hours * Rn + e.minutes * xn + e.seconds;
}
function rl(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Ln);
  t %= Ln;
  const r = Math.floor(t / Rn);
  t %= Rn;
  const l = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Ys(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / xn) * xn : t === "hour" ? r = Math.round(r / Rn) * Rn : t === "day" && (r = Math.round(r / Ln) * Ln);
  let l = Math.round(r % xn);
  const i = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / xn) + i, s = d % 60, a = Math.floor(d / 60), c = a % 24, f = Math.floor(a / 24), u = n ? "-" : "", x = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${x}${pr(c)}`;
    case "minute":
      return `${u}${x}${pr(c)}:${pr(s)}`;
    default:
      return `${u}${x}${pr(c)}:${pr(s)}:${pr(l)}`;
  }
}
function sl(e, t = "second") {
  const n = Ur(e);
  return n === null ? "" : Ys(n, t);
}
function Rs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const _O = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = pv,
    max: d = mv,
    step: s = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: x = !0,
    allowClear: h = !1,
    inline: g = !1,
    onChange: m,
    onValueChange: y,
    onOpen: p,
    onClose: _,
    disabled: b,
    placeholder: O,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: S,
    tabIndex: C,
    className: A,
    onBlur: L,
    onKeyDown: z,
    ...T
  }, w) {
    const k = oe(null), E = oe(null), R = oe(null), I = ot(), j = r !== void 0, [F, X] = q(
      () => l != null ? sl(l, a) : ""
    ), [ie, te] = q(!1), [we, le] = q(null), [_e, K] = q(null), he = Oe(
      () => Ur(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => Ur(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ye = Oe(() => {
      const re = Number.parseFloat(s);
      return Number.isNaN(re) || re <= 0 ? 1 : re;
    }, [s]), pe = Oe(() => {
      const re = j ? r ?? "" : F;
      return re ? Ur(re) : null;
    }, [r, F, j]), De = B(
      (re) => {
        const Le = re === null ? "" : Ys(re, a);
        j || X(Le), m?.(Le), y?.(Le);
      },
      [j, a, m, y]
    ), G = B(
      (re) => {
        re && we !== null && De(we), te(!1), le(null), K(null), _?.(), g || R.current?.focus();
      },
      [g, we, De, _]
    ), $e = B(() => {
      b || (le(pe ?? 0), te(!0), p?.());
    }, [b, pe, p]), ne = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (re, Le) => {
        le((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * ye * nl[re];
          return Rs(xt, he, ue);
        });
      },
      [pe, ye, he, ue]
    ), fe = B(
      (re) => {
        const Le = _e?.[re];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        le((xt) => {
          const Ie = xt ?? pe ?? 0, We = rl(Ie);
          We[re] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * gv(We);
          return Rs($t, he, ue);
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
      const re = Ur(F);
      De(re !== null ? Rs(re, he, ue) : null);
    }, [ie, F, he, ue, De]), At = (re) => {
      j || X(re.target.value);
    }, lt = (re) => {
      re.key === "Enter" ? (re.preventDefault(), ie ? G(!0) : Je()) : re.key === "Escape" && ie ? (re.preventDefault(), G(!1)) : re.key === "ArrowDown" && !ie ? (re.preventDefault(), $e()) : re.key === "Tab" && ie && te(!1), z?.(re);
    }, yt = (re) => {
      Je(), L?.(re);
    }, Z = () => {
      j || X(""), m?.(""), y?.(""), E.current?.focus();
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
      if (g && we !== null) {
        const re = pe;
        (re === null || Math.abs(we - re) > 1e-9) && De(we);
      }
    }, [g, we, pe, De]);
    const M = B(
      (re) => {
        E.current = re, typeof w == "function" ? w(re) : w && (w.current = re);
      },
      [w]
    ), Y = j ? r ? sl(r, a) : "" : F, Q = j ? !!r : F.length > 0, ge = g || ie, ae = we ?? pe ?? 0, Ee = rl(ae), je = hv[a], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (re) => nl[re] >= je && (re === "days" ? c : re === "hours" ? f : re === "minutes" ? u : x)
    ), nt = t === "xs" ? dt["dx-timespanpicker-input--xs"] : t === "sm" ? dt["dx-timespanpicker-input--sm"] : t === "lg" ? dt["dx-timespanpicker-input--lg"] : t === "xl" ? dt["dx-timespanpicker-input--xl"] : dt["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ D("div", { className: dt["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: dt["dx-timespanpicker-preview"], "aria-live": "polite", children: Ys(ae, a) }),
      /* @__PURE__ */ o("div", { className: dt["dx-timespanpicker-units"], children: Qe.map((re) => /* @__PURE__ */ D("label", { className: dt["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: dt["dx-timespanpicker-unit-label"], children: Ls[re] }),
        /* @__PURE__ */ D("span", { className: dt["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
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
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ls[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, 1);
                },
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Ls[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, -1);
                },
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, re)) }),
      /* @__PURE__ */ o("div", { className: dt["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
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
          g ? dt["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !g && /* @__PURE__ */ D(pt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: M,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: b,
                placeholder: O,
                tabIndex: C,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": I,
                "aria-invalid": n || void 0,
                className: [
                  dt["dx-timespanpicker-input"],
                  nt,
                  n ? dt["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: lt,
                onBlur: yt,
                ...T
              }
            ),
            h && !b && Q && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: dt["dx-timespanpicker-clear"],
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
                className: [dt["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": I,
                disabled: b,
                onClick: ne,
                children: /* @__PURE__ */ o(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ o(
            "div",
            {
              id: I,
              role: g ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: g ? void 0 : dt["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), bv = "_wrapper_ou9x5_1", yv = "_cells_ou9x5_8", xv = "_cell_ou9x5_8", vv = "_invalid_ou9x5_63", wv = "_live_ou9x5_73", er = {
  wrapper: bv,
  cells: yv,
  cell: xv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: vv,
  live: wv
};
function ol(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const pO = st(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: i = !1,
    size: d = "md",
    autoFocus: s = !1,
    disabled: a = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": x
  }, h) {
    const g = ot(), m = n !== void 0, [y, p] = q(ol(r).join("")), _ = m ? ol(n).join("") : y, b = Array.from({ length: t }, (T, w) => _[w] ?? ""), O = oe([]), [v, $] = q(""), S = (T) => {
      m || p(T), l?.(T);
    }, C = (T) => {
      const w = O.current[T];
      w && !w.disabled && (w.focus(), w.select());
    }, A = (T, w) => {
      const k = w.replace(/\D/g, "").slice(-1), E = _.split("");
      if (k) {
        E[T] = k;
        const R = E.join("").slice(0, t);
        S(R), R.length < t ? C(T + 1) : f && $("Code complete");
      }
    }, L = (T, w) => {
      if (w.key === "Backspace") {
        if (w.preventDefault(), _[T]) {
          const k = _.split("");
          k[T] = "", S(k.join(""));
        } else if (T > 0) {
          const k = _.split("");
          k[T - 1] = "", S(k.join("")), C(T - 1);
        }
      } else w.key === "ArrowLeft" && T > 0 ? (w.preventDefault(), C(T - 1)) : w.key === "ArrowRight" && T < t - 1 ? (w.preventDefault(), C(T + 1)) : w.key === "Home" ? (w.preventDefault(), C(0)) : w.key === "End" && (w.preventDefault(), C(t - 1));
    }, z = (T, w) => {
      w.preventDefault();
      const k = w.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const E = _.split("");
      let R = 0;
      for (let j = 0; j < k.length && T + j < t; j++)
        E[T + j] = k[j] ?? "", R++;
      const I = E.join("");
      S(I), I.length >= t ? f && $("Code complete") : C(T + R);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [er.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [er.cells, er[d]].join(" "), children: b.map((T, w) => /* @__PURE__ */ o(
            "input",
            {
              ref: (k) => {
                O.current[w] = k, w === 0 && h && (typeof h == "function" ? h(k) : h.current = k);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: T,
              disabled: a,
              "aria-label": `Digit ${w + 1} of ${t}`,
              "aria-invalid": i && T !== "" ? !0 : void 0,
              autoFocus: s && w === 0,
              className: [
                er.cell,
                er[`cell-${d}`],
                i ? er.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (k) => A(w, k.target.value),
              onKeyDown: (k) => L(w, k),
              onPaste: (k) => z(w, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                f && $("");
              }
            },
            w
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${g}-live`,
              role: "status",
              "aria-live": "polite",
              className: er.live,
              children: v
            }
          )
        ]
      }
    );
  }
), kv = "_wrapper_6lcd5_1", Nv = "_header_6lcd5_7", Sv = "_label_6lcd5_15", Ov = "_clear_6lcd5_22", $v = "_canvas_6lcd5_53", Ev = "_disabled_6lcd5_69", mr = {
  wrapper: kv,
  header: Nv,
  label: Sv,
  clear: Ov,
  canvas: $v,
  disabled: Ev
}, mO = st(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: s = "Signature",
    width: a,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, x) {
    const h = oe(null), g = oe(!1), m = oe(!1), y = oe({ x: 0, y: 0 });
    ve(() => {
      const S = h.current;
      if (!S) return;
      const C = window.devicePixelRatio || 1, A = Math.round((a ?? S.clientWidth) * C), L = Math.round(c * C);
      (S.width !== A || S.height !== L) && (S.width = A, S.height = L);
      const z = S.getContext("2d");
      if (!z) return;
      z.setTransform(C, 0, 0, C, 0, 0), z.lineWidth = i, z.strokeStyle = l, z.lineCap = "round", z.lineJoin = "round";
      const T = t ?? n;
      if (T) {
        const w = new Image();
        w.onload = () => {
          z.drawImage(w, 0, 0, S.clientWidth, c);
        }, w.src = T;
      }
    }, [t, n, l, i, a, c]);
    const p = () => {
      const S = h.current;
      if (!S) return;
      const C = S.toDataURL("image/png");
      r?.(C);
    }, _ = () => {
      const S = h.current;
      if (!S) return;
      const C = S.getContext("2d");
      C && C.clearRect(0, 0, S.width, S.height), r?.("");
    };
    bs(x, () => ({
      clear: _,
      toDataURL: (S = "image/png", C) => h.current?.toDataURL(S, C) ?? ""
    }));
    const b = (S) => {
      const C = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - C.left, y: S.clientY - C.top };
    }, O = (S) => {
      f || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), g.current = !0, m.current = !1, y.current = b(S));
    }, v = (S) => {
      if (!g.current) return;
      S.preventDefault();
      const C = S.currentTarget.getContext("2d");
      if (!C) return;
      const A = b(S);
      C.beginPath(), C.moveTo(y.current.x, y.current.y), C.lineTo(A.x, A.y), C.stroke(), y.current = A, m.current = !0;
    }, $ = (S) => {
      g.current && (S.preventDefault(), g.current = !1, m.current && p());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          mr.wrapper,
          u,
          f ? mr.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: mr.header, children: [
            /* @__PURE__ */ o("span", { className: mr.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: mr.clear,
                onClick: _,
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
              "aria-disabled": f || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${c}px`
              },
              className: mr.canvas,
              onPointerDown: O,
              onPointerMove: v,
              onPointerUp: $,
              onPointerCancel: $
            }
          )
        ]
      }
    );
  }
), Tv = "_wrapper_dsvd2_1", Cv = "_trigger_dsvd2_7", Av = "_list_dsvd2_35", Dv = "_row_dsvd2_44", Mv = "_name_dsvd2_59", Iv = "_size_dsvd2_68", zv = "_progress_dsvd2_74", Lv = "_fill_dsvd2_82", Rv = "_status_dsvd2_99", Pv = "_remove_dsvd2_106", On = {
  wrapper: Tv,
  trigger: Cv,
  list: Av,
  row: Dv,
  name: Mv,
  size: Iv,
  progress: zv,
  fill: Lv,
  status: Rv,
  remove: Pv
};
function ll(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const hO = st(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: i,
  accept: d,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: c = "Upload",
  children: f,
  onProgress: u,
  onComplete: x,
  onError: h
}, g) {
  const m = oe(null), [y, p] = q([]), _ = oe(/* @__PURE__ */ new Map()), b = (C, A) => {
    p(
      (L) => L.map((z) => z.file.name === C ? { ...z, ...A } : z)
    );
  }, O = (C) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    _.current.set(C.file.name, A);
    const L = new FormData();
    if (L.append(r, C.file), A.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const T = Math.round(z.loaded / z.total * 100);
      b(C.file.name, { state: "uploading", progress: T }), u?.(C.file.name, T);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (b(C.file.name, { state: "complete", progress: 100 }), x?.(C.file.name)) : (b(C.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), h?.(C.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      b(C.file.name, { state: "error", message: "Network error" }), h?.(C.file.name, "Network error");
    }), i)
      for (const [z, T] of Object.entries(i))
        A.setRequestHeader(z, T);
    A.open("POST", t), A.send(L), b(C.file.name, { state: "uploading", progress: 0 });
  }, v = (C) => {
    if (!C) return;
    const A = [...C], L = [];
    let z = Math.max(0, s - y.length);
    for (const w of A) {
      if (a != null && w.size > a) {
        h?.(
          w.name,
          `File too large (maximum ${ll(a)})`
        );
        continue;
      }
      if (z <= 0) {
        h?.(w.name, `Too many files (maximum ${s})`);
        continue;
      }
      z -= 1, L.push(w);
    }
    const T = L.map((w) => ({
      file: w,
      state: "pending",
      progress: 0
    }));
    p((w) => [...w, ...T]), m.current && (m.current.value = ""), l && T.forEach(O);
  }, $ = (C) => {
    _.current.get(C)?.abort(), _.current.delete(C), p((L) => L.filter((z) => z.file.name !== C));
  }, S = f ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: On.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ o(Me, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return bs(g, () => ({
    open: () => m.current?.click(),
    upload: () => y.forEach((C) => C.state === "pending" ? O(C) : null)
  })), /* @__PURE__ */ D("div", { className: On.wrapper, children: [
    S,
    /* @__PURE__ */ o(
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
    !f && y.length > 0 && /* @__PURE__ */ o("ul", { className: On.list, children: y.map(({ file: C, state: A, progress: L, message: z }) => /* @__PURE__ */ D(
      "li",
      {
        className: On.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: On.name, children: C.name }),
          /* @__PURE__ */ o("span", { className: On.size, children: ll(C.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${C.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": L,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: On.fill,
                  style: { width: `${L}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: On.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? z ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${C.name}`,
              onClick: () => $(C.name),
              children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      C.name
    )) })
  ] });
}), jv = "_zone_nl0bz_1", Bv = "_dragging_nl0bz_23", Fv = "_caption_nl0bz_28", Hv = "_browse_nl0bz_40", Uv = "_disabled_nl0bz_67", Rr = {
  zone: jv,
  dragging: Bv,
  caption: Fv,
  browse: Hv,
  disabled: Uv
};
function qv(e, t) {
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
const gO = st(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: d = "Browse",
    disabled: s = !1,
    className: a
  }, c) {
    const f = oe(null), [u, x] = q(!1), h = (_) => {
      if (!_ || _.length === 0) return;
      const b = [..._].filter((O) => qv(O, t ?? ""));
      b.length !== 0 && r?.(b);
    }, g = (_) => {
      s || (_.preventDefault(), x(!0));
    }, m = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", x(!0));
    }, y = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || x(!1);
    }, p = (_) => {
      s || (_.preventDefault(), x(!1), h(_.dataTransfer.files));
    };
    return bs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": s || void 0,
        className: [
          Rr.zone,
          u ? Rr.dragging : null,
          s ? Rr.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: g,
        onDragOver: m,
        onDragLeave: y,
        onDrop: p,
        children: [
          /* @__PURE__ */ o("p", { className: Rr.caption, children: u ? i : l }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Rr.browse,
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
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (_) => {
                h(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), Wv = "_root_1a92d_1", Kv = "_menubar_1a92d_5", Gv = "_horizontal_1a92d_15", Vv = "_vertical_1a92d_20", Yv = "_itemWrapper_1a92d_25", Xv = "_item_1a92d_25", Zv = "_disabled_1a92d_61", Jv = "_icon_1a92d_68", Qv = "_text_1a92d_75", ew = "_caret_1a92d_79", tw = "_hasChildren_1a92d_85", nw = "_submenu_1a92d_94", rw = "_submenuItem_1a92d_118", sw = "_flyout_1a92d_155", ow = "_hamburger_1a92d_175", lw = "_responsive_1a92d_198", aw = "_mobileOpen_1a92d_207", _t = {
  root: Wv,
  menubar: Kv,
  horizontal: Gv,
  vertical: Vv,
  itemWrapper: Yv,
  item: Xv,
  disabled: Zv,
  icon: Jv,
  text: Qv,
  caret: ew,
  hasChildren: tw,
  submenu: nw,
  submenuItem: rw,
  flyout: sw,
  hamburger: ow,
  responsive: lw,
  mobileOpen: aw
}, ms = lr(null);
function iw(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function cw(e, t, n, r, l) {
  const [i, d] = q(n), s = e ? t ?? !1 : i, a = B(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return ve(() => {
    l > 0 && a(!1);
  }, [l]), [s, a];
}
function dw({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: _t.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Ll(e) {
  return qt(e) && e.type === Rl;
}
function so({
  itemKey: e,
  props: t
}) {
  const n = Pn(ms);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: s } = t, a = Oe(
    () => Kr.toArray(t.children).filter(qt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [x, h] = cw(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, m = oe(0), p = (g && !u ? n.openKey === e : null) ?? x, _ = B(
    (R) => {
      g && !u ? n.setOpenKey(R ? e : null) : (h(R), g && n.setOpenKey(null));
    },
    [g, u, n, e, h]
  ), [, b] = q(0);
  ve(() => {
    if (!i) return;
    const R = () => b((I) => I + 1);
    return window.addEventListener("hashchange", R), () => window.removeEventListener("hashchange", R);
  }, [i]);
  const O = i && !c ? iw(i, t.match) : !1, v = B(
    (R) => {
      if (f) {
        R.preventDefault();
        return;
      }
      const I = { text: r, value: l, path: i };
      [n.emit(I), t.onClick?.(I)].includes(!1) && R.preventDefault(), n.closeAll();
    },
    [f, r, l, i, n, t]
  ), $ = B(() => {
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
  }, [n.clickToOpen, _]), A = `${n.baseId}-submenu-${e}`, [L, z] = q(null);
  ve(() => {
    n.closeSignal > 0 && z(null);
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
      openKey: L,
      setOpenKey: z
    }),
    [n, L]
  ), w = c ? /* @__PURE__ */ o("span", { className: _t.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Me,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, k = s ?? /* @__PURE__ */ D(pt, { children: [
    /* @__PURE__ */ o(
      dw,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: _t.text, children: r }),
    w
  ] });
  if (c) {
    let R = function(I) {
      const j = Array.from(I.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      I.key === "ArrowDown" ? (I.preventDefault(), I.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : I.key === "ArrowUp" ? (I.preventDefault(), I.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : I.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), I.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (I.key === "ArrowLeft" || I.key === "Escape") && (I.preventDefault(), I.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: _t.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : S,
        onMouseLeave: n.clickToOpen ? void 0 : C,
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
              onClick: $,
              children: k
            }
          ),
          p ? /* @__PURE__ */ o(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": r,
              className: [
                _t.submenu,
                n.flyout && !g ? _t.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: R,
              children: /* @__PURE__ */ o(ms.Provider, { value: T, children: a.map(
                (I, j) => Ll(I) ? /* @__PURE__ */ o(
                  so,
                  {
                    itemKey: `${e}-${j}`,
                    props: I.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Js, { children: I }, `${e}-custom-${j}`)
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
    "aria-disabled": f || void 0,
    "aria-current": O ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [_t.submenuItem, f ? _t.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return i && !f ? /* @__PURE__ */ o("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...E, children: k }) }) : /* @__PURE__ */ o("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...E, children: k }) });
}
function Rl(e) {
  if (!Pn(ms)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(so, { itemKey: e.text, props: e });
}
function uw({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: i,
  onClose: d,
  ariaLabel: s = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: c,
  ...f
}) {
  const u = ot(), x = oe(null), h = oe(null), [g, m] = q(null), [y, p] = q(0), [_, b] = q(!1), O = oe(null), v = B(
    (L) => i?.(L),
    [i]
  ), $ = B(() => {
    m(null), p((L) => L + 1);
  }, []);
  ve(() => {
    if (g == null) return;
    const L = (z) => {
      x.current && !x.current.contains(z.target) && $();
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [g, $]), ve(() => {
    O.current != null && g === O.current && (document.getElementById(`${u}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), O.current = null);
  }, [g, u]);
  const S = Oe(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: v,
      closeAll: $,
      openKey: g,
      setOpenKey: m
    }),
    [u, n, t, y, v, $, g]
  ), C = Oe(
    () => Kr.toArray(e).filter(qt),
    [e]
  ), A = (L) => {
    const z = h.current;
    if (!z) return;
    const T = Array.from(z.children).map((E) => E.querySelector('[role="menuitem"]')).filter(
      (E) => E != null && !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const E = document.getElementById(`${u}-submenu-${g}`);
      if (E) {
        const R = Array.from(
          E.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), I = document.activeElement, j = I ? R.indexOf(I) : -1;
        if (L.key === "ArrowDown") {
          L.preventDefault(), (j === -1 ? R[0] : R[(j + 1) % R.length])?.focus();
          return;
        }
        if (L.key === "ArrowUp") {
          L.preventDefault(), (j === -1 ? R[R.length - 1] : R[(j - 1 + R.length) % R.length])?.focus();
          return;
        }
        if (L.key === "Escape") {
          L.preventDefault(), $(), d?.(), z.querySelector(`[data-index="${g}"]`)?.focus();
          return;
        }
        if (L.key === "Enter" || L.key === " ") return;
      }
      if (L.key === "Escape") {
        L.preventDefault(), $(), d?.();
        return;
      }
    }
    const w = document.activeElement, k = w ? T.indexOf(w) : -1;
    if (L.key === "ArrowRight") {
      if (L.preventDefault(), T.length === 0) return;
      T[k === -1 ? 0 : (k + 1) % T.length]?.focus();
      return;
    }
    if (L.key === "ArrowLeft") {
      if (L.preventDefault(), T.length === 0) return;
      T[k === -1 ? T.length - 1 : (k - 1 + T.length) % T.length]?.focus();
      return;
    }
    if (L.key === "ArrowDown") {
      if (k >= 0) {
        const E = w?.getAttribute("data-index");
        if (E == null) return;
        z.querySelector(
          `[data-index="${E}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), O.current = E, m(E));
      }
      return;
    }
    if (L.key === "Home") {
      L.preventDefault(), T[0]?.focus();
      return;
    }
    if (L.key === "End") {
      L.preventDefault(), T[T.length - 1]?.focus();
      return;
    }
    if (L.key.length === 1 && !L.ctrlKey && !L.metaKey) {
      const E = T.map((I) => I.textContent ?? ""), R = k === -1 ? 0 : (k + 1) % T.length;
      for (let I = 0; I < T.length; I++) {
        const j = (R + I) % T.length;
        if (E[j]?.toLowerCase().startsWith(L.key.toLowerCase())) {
          L.preventDefault(), T[j]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: x,
      "aria-label": s,
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
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": _,
            className: _t.hamburger,
            onClick: () => b((L) => !L),
            children: /* @__PURE__ */ o(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: h,
            role: l ? "menu" : "menubar",
            "aria-label": s,
            className: _t.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ o(ms.Provider, { value: S, children: C.map(
              (L, z) => Ll(L) ? /* @__PURE__ */ o(
                so,
                {
                  itemKey: String(z),
                  props: L.props
                },
                `top-${z}`
              ) : /* @__PURE__ */ o(Js, { children: L }, `top-custom-${z}`)
            ) })
          }
        )
      ]
    }
  );
}
const fw = "_popup_uiejp_1", _w = "_menu_uiejp_22", Xs = {
  popup: fw,
  menu: _w
}, Pl = lr(null);
function bO() {
  const e = Pn(Pl);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function jl(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ o(Rl, { ...l, children: r ? jl(r) : void 0 }, `${t.text}-${n}`);
  });
}
function pw({ state: e, onClose: t }) {
  const n = oe(null), [r, l] = q({ left: e.x, top: e.y });
  Ps(() => {
    const d = n.current;
    if (!d) return;
    const s = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
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
  return /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: Xs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: Xs.menu, children: e.options.content ?? /* @__PURE__ */ o(
        uw,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: jl(e.options.items ?? [])
        }
      ) })
    }
  );
}
function yO({ children: e }) {
  const [t, n] = q(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = B(
    (d, s) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: s });
    },
    []
  );
  ve(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Xs.popup}`);
      u && !u.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, a = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const i = Oe(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ D(Pl.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(pw, { state: t, onClose: r }) : null
  ] });
}
const mw = "_root_rgcia_1", hw = "_list_rgcia_9", gw = "_item_rgcia_14", bw = "_trigger_rgcia_18", yw = "_disabled_rgcia_45", xw = "_expanded_rgcia_52", vw = "_selected_rgcia_56", ww = "_icon_rgcia_61", kw = "_text_rgcia_72", Nw = "_caret_rgcia_79", Sw = "_open_rgcia_86", Ow = "_submenu_rgcia_90", $w = "_iconOnly_rgcia_172", Ew = "_stacked_rgcia_201", Lt = {
  root: mw,
  list: hw,
  item: gw,
  trigger: bw,
  disabled: yw,
  expanded: xw,
  selected: vw,
  icon: ww,
  text: kw,
  caret: Nw,
  open: Sw,
  submenu: Ow,
  iconOnly: $w,
  stacked: Ew
}, hs = lr(null);
function Tw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Cw(e, t) {
  const n = Tw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Aw({
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
function oo({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Pn(hs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: s } = n, a = Oe(
    () => Kr.toArray(n.children).filter(qt),
    [n.children]
  ), c = a.length > 0, f = !!s, u = n.match ?? r.match, x = n.expanded !== void 0, [h, g] = q(
    n.defaultExpanded ?? !1
  ), m = x ? n.expanded ?? !1 : h, y = B(
    (F) => {
      x || g(F), n.onExpandedChange?.(F);
    },
    [x, n]
  );
  ve(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && y(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, b] = q(
    n.defaultSelected ?? !1
  ), O = !p && d ? Cw(d, u) : !1, v = n.selected ?? (p ? _ : O || _), [, $] = q(0);
  ve(() => {
    if (!d) return;
    const F = () => $((X) => X + 1);
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
    O && t.length > 0 && S.openAncestors();
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
  }, [f, m, r, e, t, y]), L = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? A() : F.target.click()) : F.key === "Escape" && m ? (F.preventDefault(), y(!1)) : F.key === "ArrowRight" && c && !m ? (F.preventDefault(), r.notifyOpened(e, t), y(!0)) : F.key === "ArrowLeft" && m && (F.preventDefault(), y(!1));
    },
    [c, A, m, y, r, e, t]
  ), z = c && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [Lt.caret, m ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, T = n.template ?? /* @__PURE__ */ D(pt, { children: [
    /* @__PURE__ */ o(
      Aw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: Lt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: Lt.text, children: l }),
    z
  ] }), w = `${r.baseId}-panel-${e}`, k = `${r.baseId}-trigger-${e}`, E = [
    Lt.trigger,
    f ? Lt.disabled : null,
    m ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), R = r.level > 0 ? "menuitem" : void 0, I = c ? /* @__PURE__ */ o(
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
      className: E,
      onClick: A,
      onKeyDown: L,
      children: T
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: k,
      role: R,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: E,
      onClick: C,
      onKeyDown: L,
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
      className: E,
      onClick: C,
      onKeyDown: L,
      children: T
    }
  ), j = c ? r.renderMode === "server" && !m ? null : /* @__PURE__ */ o(
    "div",
    {
      id: w,
      role: "menu",
      "aria-labelledby": k,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ o(hs.Provider, { value: S, children: a.map((F, X) => /* @__PURE__ */ o(
        oo,
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
        I,
        j
      ]
    }
  );
}
function xO(e) {
  if (!Pn(hs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(oo, { itemKey: e.text, ancestors: [], props: e });
}
function vO({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: i = "client",
  onClick: d,
  ariaLabel: s = "Panel menu",
  className: a,
  ...c
}) {
  const f = ot(), [u, x] = q(0), h = oe(/* @__PURE__ */ new Set()), g = B(
    (O) => d?.(O),
    [d]
  ), m = B(
    (O, v) => {
      t || (h.current = /* @__PURE__ */ new Set([O, ...v]), x(($) => $ + 1));
    },
    [t]
  ), y = (O) => Array.from(
    O.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (O) => {
    if (!(O.key === "Enter" || O.key === " ")) {
      if (O.key === "ArrowDown" || O.key === "ArrowUp") {
        const v = O.target, $ = y(O.currentTarget), S = $.indexOf(v);
        if (S === -1) return;
        O.preventDefault();
        const C = O.key === "ArrowDown" ? 1 : -1;
        $[(S + C + $.length) % $.length]?.focus();
      } else if (O.key === "Home" || O.key === "End") {
        const v = y(O.currentTarget);
        O.preventDefault(), (O.key === "Home" ? v[0] : v[v.length - 1])?.focus();
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
      collapseSkipRef: h,
      emit: g,
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
      g,
      m
    ]
  ), b = Oe(
    () => Kr.toArray(e).filter(qt),
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
        a
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...c,
      children: /* @__PURE__ */ o("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ o(hs.Provider, { value: _, children: b.map((O, v) => /* @__PURE__ */ o(
        oo,
        {
          itemKey: String(v),
          ancestors: [],
          props: O.props
        },
        `top-${v}`
      )) }) })
    }
  );
}
const Dw = "_root_5numg_1", Mw = "_trigger_5numg_7", Iw = "_defaultTrigger_5numg_40", zw = "_avatar_5numg_46", Lw = "_menu_5numg_58", Rw = "_item_5numg_74", Pw = "_disabled_5numg_88", jw = "_active_5numg_97", Bw = "_icon_5numg_107", Fw = "_text_5numg_114", $n = {
  root: Dw,
  trigger: Mw,
  defaultTrigger: Iw,
  avatar: zw,
  menu: Lw,
  item: Rw,
  disabled: Pw,
  active: jw,
  icon: Bw,
  text: Fw
};
function wO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = ot(), d = `${i}-menu`, s = oe(null), a = oe(null), [c, f] = q(!1), [u, x] = q(-1), h = t, g = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), m = B(
    (v) => {
      if (v.disabled) return;
      const $ = {
        text: v.text,
        path: v.path
      };
      n?.($), f(!1), a.current?.focus();
    },
    [n]
  ), y = B(() => {
    x(g[0] ?? -1), f(!0);
  }, [g]), p = B(() => {
    f(!1), x(-1), a.current?.focus();
  }, []);
  ve(() => {
    if (!c) return;
    const v = ($) => {
      s.current && !s.current.contains($.target) && (f(!1), x(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [c]), ve(() => {
    if (!c) return;
    const v = ($) => {
      $.key === "Escape" && ($.preventDefault(), p());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [c, p]);
  const _ = (v) => {
    if (g.length === 0) return;
    const $ = g.indexOf(u), S = $ === -1 ? 0 : ($ + v + g.length) % g.length, C = g[S];
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
        v.preventDefault(), g[0] != null && x(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && x(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
        }
        break;
      case "Tab":
        f(!1), x(-1);
        break;
    }
  }, O = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), _(1);
        break;
      case "ArrowUp":
        v.preventDefault(), _(-1);
        break;
      case "Home":
        v.preventDefault(), g[0] != null && x(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && x(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
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
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [$n.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ D("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
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
            children: h ?? /* @__PURE__ */ D("span", { className: $n.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: $n.avatar, "aria-hidden": "true", children: "●" }),
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
            "aria-activedescendant": u >= 0 ? `${i}-item-${u}` : void 0,
            className: $n.menu,
            onKeyDown: O,
            tabIndex: -1,
            children: e.map((v, $) => {
              const S = !!v.disabled, C = $ === u;
              return /* @__PURE__ */ D(
                "div",
                {
                  id: `${i}-item-${$}`,
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
                    S || x($);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ o("span", { className: $n.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ o("span", { className: $n.text, children: v.text })
                  ]
                },
                `${v.text}-${$}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Hw = "_root_vv0xs_1", Uw = "_bottomRight_vv0xs_11", qw = "_bottomLeft_vv0xs_16", Ww = "_topRight_vv0xs_21", Kw = "_topLeft_vv0xs_26", Gw = "_menu_vv0xs_31", Vw = "_itemWrapper_vv0xs_48", Yw = "_tooltip_vv0xs_54", Xw = "_main_vv0xs_76", Zw = "_mainIcon_vv0xs_104", Jw = "_mainOpen_vv0xs_109", Qw = "_item_vv0xs_48", e2 = "_disabled_vv0xs_141", t2 = "_itemIcon_vv0xs_148", Wt = {
  root: Hw,
  bottomRight: Uw,
  bottomLeft: qw,
  topRight: Ww,
  topLeft: Kw,
  menu: Gw,
  itemWrapper: Vw,
  tooltip: Yw,
  main: Xw,
  mainIcon: Zw,
  mainOpen: Jw,
  item: Qw,
  disabled: e2,
  itemIcon: t2
};
function kO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${ot()}-menu`, c = oe(null), f = oe(null), [u, x] = q(!1), h = B(
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
  const g = d === "bottom-right" ? Wt.bottomRight : d === "bottom-left" ? Wt.bottomLeft : d === "top-right" ? Wt.topRight : Wt.topLeft, m = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), x(!0)) : u && p.key === "Escape" && (p.preventDefault(), x(!1));
  }, y = (p) => {
    p.key === "Escape" && (p.preventDefault(), x(!1), f.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: c,
      className: [Wt.root, g, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
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
                /* @__PURE__ */ o("span", { className: Wt.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ o(
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
                    onClick: () => h(p),
                    children: /* @__PURE__ */ o("span", { className: Wt.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${_}`);
            })
          }
        ) : null,
        /* @__PURE__ */ o(
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
            children: /* @__PURE__ */ o(
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
const n2 = "_root_1eyur_1", r2 = "_list_1eyur_5", s2 = "_item_1eyur_15", o2 = "_link_1eyur_22", l2 = "_linkButton_1eyur_23", a2 = "_current_1eyur_24", i2 = "_disabled_1eyur_68", c2 = "_icon_1eyur_74", d2 = "_text_1eyur_81", u2 = "_separator_1eyur_85", ut = {
  root: n2,
  list: r2,
  item: s2,
  link: o2,
  linkButton: l2,
  current: a2,
  disabled: i2,
  icon: c2,
  text: d2,
  separator: u2
};
function NO({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, i = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [ut.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: ut.list, children: e.map((d, s) => {
        const a = s === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ D("li", { className: ut.item, children: [
          a ? c ? /* @__PURE__ */ D(
            "span",
            {
              className: [ut.current, ut.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
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
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "span",
            {
              className: ut.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
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
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
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
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
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
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ o("span", { className: ut.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${s}`);
      }) })
    }
  );
}
const f2 = "_link_tmy3k_1", _2 = {
  link: f2
}, SO = st(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ D(pt, { children: [
    n != null && /* @__PURE__ */ o(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [_2.link, l].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...u } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        className: a,
        href: f,
        ...u,
        children: s
      }
    );
  }
  return /* @__PURE__ */ o(
    "button",
    {
      ref: d,
      type: "button",
      className: a,
      ...i,
      children: s
    }
  );
}), p2 = "_root_dnkuu_1", m2 = "_list_dnkuu_5", h2 = "_item_dnkuu_15", g2 = "_connector_dnkuu_21", b2 = "_connectorCompleted_dnkuu_30", y2 = "_step_dnkuu_34", x2 = "_active_dnkuu_69", v2 = "_completed_dnkuu_75", w2 = "_circle_dnkuu_79", k2 = "_check_dnkuu_109", N2 = "_icon_dnkuu_114", S2 = "_number_dnkuu_119", O2 = "_text_dnkuu_124", Kt = {
  root: p2,
  list: m2,
  item: h2,
  connector: g2,
  connectorCompleted: b2,
  step: y2,
  active: x2,
  completed: v2,
  circle: w2,
  check: k2,
  icon: N2,
  number: S2,
  text: O2
};
function OO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: i,
  onChange: d,
  Change: s,
  onSelectedIndexChange: a,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? i ?? !1, x = t ?? n, h = x !== void 0, [g, m] = q(() => Math.min(Math.max(0, x ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, h ? x : g),
    Math.max(0, e.length - 1)
  ), _ = oe(null), b = B(
    ($) => {
      const S = Math.min(
        Math.max(0, $),
        Math.max(0, e.length - 1)
      );
      h || m(S), (d ?? s ?? a)?.(S);
    },
    [h, d, s, a, e.length]
  ), O = B(
    ($, S) => !!(S.disabled || u && $ > p + 1),
    [u, p]
  ), v = ($) => {
    const S = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((L) => L.getAttribute("aria-disabled") !== "true" && !L.disabled), C = document.activeElement, A = C ? S.indexOf(C) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), S.length === 0) return;
      const L = A === -1 ? 0 : (A + 1) % S.length, z = S[L];
      z && z.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), S.length === 0) return;
      const L = A === -1 ? S.length - 1 : (A - 1 + S.length) % S.length, z = S[L];
      z && z.focus();
    } else $.key === "Home" ? ($.preventDefault(), S[0]?.focus()) : $.key === "End" && ($.preventDefault(), S[S.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": c,
      className: [Kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: Kt.list, children: e.map(($, S) => {
        const C = S === p, A = S < p, L = O(S, $);
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
                  "aria-disabled": L ? "true" : void 0,
                  disabled: L,
                  tabIndex: L ? -1 : 0,
                  className: [
                    Kt.step,
                    C ? Kt.active : null,
                    A ? Kt.completed : null,
                    L ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    L || b(S);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Kt.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ o("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "check", size: "sm" }) }) : $.icon ? /* @__PURE__ */ o("span", { className: Kt.icon, children: $.icon }) : /* @__PURE__ */ o("span", { className: Kt.number, children: S + 1 }) }),
                    /* @__PURE__ */ o("span", { className: Kt.text, children: $.text })
                  ]
                }
              )
            ]
          },
          `${$.text}-${S}`
        );
      }) })
    }
  );
}
const $2 = "_root_12hod_1", E2 = "_horizontal_12hod_13", T2 = "_vertical_12hod_17", C2 = "_pane_12hod_21", A2 = "_handle_12hod_31", D2 = "_handleHorizontal_12hod_51", M2 = "_handleVertical_12hod_57", I2 = "_handleGrip_12hod_63", z2 = "_handleCollapseHint_12hod_75", L2 = "_collapseBtn_12hod_79", R2 = "_collapseBtnCollapsed_12hod_109", un = {
  root: $2,
  horizontal: E2,
  vertical: T2,
  pane: C2,
  handle: A2,
  handleHorizontal: D2,
  handleVertical: M2,
  handleGrip: I2,
  handleCollapseHint: z2,
  collapseBtn: L2,
  collapseBtnCollapsed: R2
};
function Pr(e, t) {
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
function $O({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: i,
  Collapse: d,
  ariaLabel: s = "Splitter",
  className: a
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = oe(null), x = B(() => {
    const w = n.length;
    if (w === 0) return [];
    const k = n.map((R) => R.size ? Pr(R.size, 100 / w) : 100 / w), E = k.reduce((R, I) => R + I, 0);
    return Math.abs(E - 100) > 0.01 && E > 0 ? k.map((R) => R / E * 100) : k;
  }, [n]), [h, g] = q(() => x()), [m, y] = q(
    () => n.map((w) => !!w.collapsed)
  ), p = oe(h);
  ve(() => {
    y(n.map((w) => !!w.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((w) => Pr(w.min, 0)),
    [n]
  ), b = B(
    () => n.map((w) => Pr(w.max, 100)),
    [n]
  ), O = B(
    (w, k) => {
      const E = { paneIndex: w, newSize: k, cancel: !1 };
      return (r ?? l)?.(E), !E.cancel;
    },
    [r, l]
  ), v = B(
    (w, k) => {
      const E = { paneIndex: w, collapse: k, cancel: !1 };
      return (i ?? d)?.(E), !E.cancel;
    },
    [i, d]
  ), $ = B(
    (w) => {
      const k = !m[w];
      v(w, k) && (k ? (p.current = [...h], y((E) => {
        const R = [...E];
        return R[w] !== void 0 && (R[w] = !0), R;
      }), g((E) => {
        const R = [...E], I = R[w] ?? 0, j = w < R.length - 1 ? w + 1 : w - 1;
        if (j >= 0 && j < R.length) {
          const F = R[j] ?? 0;
          R[j] = F + I, R[w] = 0;
        } else
          R[w] = 0;
        return R;
      })) : (y((E) => {
        const R = [...E];
        return R[w] !== void 0 && (R[w] = !1), R;
      }), g(() => {
        const E = [...p.current];
        return E.length !== n.length ? n.map(() => 100 / n.length) : E;
      })));
    },
    [m, h, n.length, v]
  ), S = oe(
    null
  ), C = B(
    (w, k, E) => {
      const R = u.current;
      if (!R) return null;
      const I = R.getBoundingClientRect();
      let j;
      if (f) {
        if (I.width === 0) return null;
        j = (k - I.left) / I.width * 100;
      } else {
        if (I.height === 0) return null;
        j = (E - I.top) / I.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < w; ie++) {
        const te = h[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, h]
  ), A = (w, k) => {
    k.preventDefault();
    const E = k.currentTarget;
    E.focus(), typeof E.setPointerCapture == "function" && E.setPointerCapture(k.pointerId), S.current = { handleIndex: w, pointerId: k.pointerId };
  }, L = (w) => {
    if (!S.current || S.current.pointerId !== w.pointerId)
      return;
    w.preventDefault();
    const k = S.current.handleIndex, E = C(k, w.clientX, w.clientY);
    if (E == null) return;
    const R = _(), I = b(), j = R[k] ?? 0, F = I[k] ?? 100, X = k + 1, ie = R[X] ?? 0, te = I[X] ?? 100, we = h[k] ?? 0, le = h[X] ?? 0, _e = we + le;
    if (_e <= 0) return;
    let K = zn(E, j, F), he = _e - K;
    if (he < ie) {
      if (he = ie, K = _e - he, K < j || K > F) return;
    } else if (he > te && (he = te, K = _e - he, K < j || K > F))
      return;
    K = zn(K, j, F), he = _e - K, O(k, K) && g((ue) => {
      const ye = [...ue];
      return ye[k] = K, ye[X] = he, ye;
    });
  }, z = (w) => {
    !S.current || S.current.pointerId !== w.pointerId || (S.current = null);
  }, T = (w, k) => {
    const E = _(), R = b(), I = w, j = w + 1, F = h[I] ?? 0, X = h[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[I]?.collapsible, le = !!n[j]?.collapsible;
    if (f ? k.key === "ArrowLeft" ? te = -5 : k.key === "ArrowRight" && (te = 5) : k.key === "ArrowUp" ? te = -5 : k.key === "ArrowDown" && (te = 5), k.key === "Home") {
      k.preventDefault();
      let _e = E[I] ?? 0, K = ie - _e;
      if (K = zn(
        K,
        E[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, E[I] ?? 0, R[I] ?? 100), !O(I, _e)) return;
      g((he) => {
        const ue = [...he];
        return ue[I] = _e, ue[j] = K, ue;
      });
      return;
    }
    if (k.key === "End") {
      k.preventDefault();
      let _e = R[I] ?? 100;
      _e = Math.min(_e, ie - (E[j] ?? 0));
      let K = ie - _e;
      if (K = zn(
        K,
        E[j] ?? 0,
        R[j] ?? 100
      ), _e = ie - K, _e = zn(_e, E[I] ?? 0, R[I] ?? 100), !O(I, _e)) return;
      g((he) => {
        const ue = [...he];
        return ue[I] = _e, ue[j] = K, ue;
      });
      return;
    }
    if ((k.key === "Enter" || k.key === " ") && (we || le)) {
      k.preventDefault(), $(we ? I : j);
      return;
    }
    if (te !== 0) {
      k.preventDefault();
      let _e = F + te, K = ie - _e;
      const he = E[I] ?? 0, ue = R[I] ?? 100, ye = E[j] ?? 0, pe = R[j] ?? 100;
      if (_e = zn(_e, he, ue), K = ie - _e, (K < ye || K > pe) && (K = zn(K, ye, pe), _e = ie - K, _e = zn(_e, he, ue), K = ie - _e), !O(I, _e)) return;
      g((De) => {
        const G = [...De];
        return G[I] = _e, G[j] = K, G;
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
        a
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((w, k) => {
        const E = !!m[k], R = E ? 0 : h[k] ?? 100 / n.length, I = E ? { display: "none" } : f ? {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${R}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Pr(w.min, 0), F = Pr(w.max, 100), X = k < n.length - 1, ie = !!n[k + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": w.label ?? `Pane ${k + 1}`,
              className: un.pane,
              style: I,
              "data-collapsed": E ? "true" : void 0,
              children: [
                E ? null : w.children,
                w.collapsible && !E ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Collapse pane ${k + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(k),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                w.collapsible && E ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: un.collapseBtn,
                    "aria-label": `Expand pane ${k + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(k),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          E && w.collapsible ? (
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
                onClick: () => $(k),
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
              tabIndex: E || m[k + 1] ? -1 : 0,
              className: [
                un.handle,
                f ? un.handleHorizontal : un.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => A(k, te),
              onPointerMove: L,
              onPointerUp: z,
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
const P2 = "_root_1w3wd_1", j2 = "_list_1w3wd_5", B2 = "_vertical_1w3wd_14", F2 = "_horizontal_1w3wd_20", H2 = "_item_1w3wd_28", U2 = "_link_1w3wd_32", q2 = "_active_1w3wd_57", hr = {
  root: P2,
  list: j2,
  vertical: B2,
  horizontal: F2,
  item: H2,
  link: U2,
  active: q2
};
function EO({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: i,
  Click: d,
  ariaLabel: s = "Table of contents",
  className: a
}) {
  const c = t ?? n, f = r ?? l ?? "vertical", [u, x] = q(
    () => e[0]?.selector ?? null
  ), h = oe(u);
  h.current = u;
  const g = B(
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
      let v = null, $ = null;
      for (const C of e) {
        const A = document.querySelector(C.selector);
        if (!A) continue;
        _.set(C.selector, A);
        const L = A.getBoundingClientRect();
        let z = L.top;
        if (y !== window) {
          const T = y.getBoundingClientRect();
          z = L.top - T.top;
        }
        z <= 80 ? (!$ || z > $.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && ($ = { sel: C.selector, el: A }) : (!v || z < v.top) && (v = { sel: C.selector, top: z });
      }
      const S = $?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== h.current && x(S);
    }, O = () => {
      b();
    };
    if (typeof IntersectionObserver < "u") {
      const v = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver(($) => {
        const S = $.filter((C) => C.isIntersecting).sort((C, A) => C.boundingClientRect.top - A.boundingClientRect.top);
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
      for (const $ of e) {
        const S = document.querySelector($.selector);
        S && (p.observe(S), _.set($.selector, S));
      }
    }
    return y === window ? (window.addEventListener("scroll", O, { passive: !0 }), b(), () => {
      window.removeEventListener("scroll", O), p?.disconnect();
    }) : (y.addEventListener("scroll", O, {
      passive: !0
    }), b(), () => {
      y.removeEventListener("scroll", O), p?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [hr.root, hr[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: hr.list, children: e.map((m) => {
        const y = m.selector === u;
        return /* @__PURE__ */ o("li", { className: hr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [hr.link, y ? hr.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(m.selector);
              g(m, _);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const W2 = "_root_1bfit_1", K2 = "_viewport_1bfit_17", G2 = "_slide_1bfit_24", V2 = "_active_1bfit_33", Y2 = "_arrow_1bfit_37", X2 = "_prev_1bfit_71", Z2 = "_next_1bfit_75", J2 = "_pauseBtn_1bfit_79", Q2 = "_indicators_1bfit_110", ek = "_indicator_1bfit_110", tk = "_indicatorActive_1bfit_145", fn = {
  root: W2,
  viewport: K2,
  slide: G2,
  active: V2,
  arrow: Y2,
  prev: X2,
  next: Z2,
  pauseBtn: J2,
  indicators: Q2,
  indicator: ek,
  indicatorActive: tk
};
function TO({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: i,
  interval: d,
  Interval: s,
  pauseOnHover: a,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: u,
  showIndicators: x,
  ShowIndicators: h,
  onChange: g,
  Change: m,
  ariaLabel: y = "Carousel",
  className: p
}) {
  const _ = t ?? n, b = _ !== void 0, [O, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), $ = b ? _ : O, S = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), C = l ?? i ?? !1, A = d ?? s ?? 3e3, L = a ?? c ?? !0, z = f ?? u ?? !0, T = x ?? h ?? !0, [w, k] = q(!1), [E, R] = q(!1), I = w || E, j = oe(null), F = ot(), X = B(
    (ye) => {
      const pe = e.length === 0 ? 0 : (ye % e.length + e.length) % e.length;
      b || v(pe), (g ?? m)?.(pe);
    },
    [b, g, m, e.length]
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
    if (!C || I || e.length <= 1) return;
    const ye = setInterval(() => {
      X(S + 1);
    }, A);
    return () => clearInterval(ye);
  }, [C, I, A, S, X, e.length]);
  const le = (ye) => {
    e.length !== 0 && (ye.key === "ArrowLeft" ? (ye.preventDefault(), ie()) : ye.key === "ArrowRight" ? (ye.preventDefault(), te()) : ye.key === "Home" ? (ye.preventDefault(), we(0)) : ye.key === "End" && (ye.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    L && C && R(!0);
  }, K = () => {
    L && C && R(!1);
  }, he = () => {
    L && C && R(!0);
  }, ue = () => {
    L && C && R(!1);
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
        /* @__PURE__ */ o("div", { id: F, className: fn.viewport, children: e.map((ye, pe) => {
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
              children: ye
            },
            pe
          );
        }) }),
        z && e.length > 1 ? /* @__PURE__ */ D(pt, { children: [
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
        C ? /* @__PURE__ */ o(
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
        T && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: fn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ye, pe) => {
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
const nk = "_root_1aa5u_1", rk = "_group_1aa5u_20", sk = "_itemWrapper_1aa5u_30", ok = "_treeitem_1aa5u_34", lk = "_disabled_1aa5u_50", ak = "_selected_1aa5u_60", ik = "_caret_1aa5u_66", ck = "_caretIcon_1aa5u_113", dk = "_caretOpen_1aa5u_120", uk = "_caretPlaceholder_1aa5u_124", fk = "_label_1aa5u_130", _k = "_loading_1aa5u_137", pk = "_loadingRow_1aa5u_143", mk = "_empty_1aa5u_149", hk = "_checkbox_1aa5u_155", Mt = {
  root: nk,
  group: rk,
  itemWrapper: sk,
  treeitem: ok,
  disabled: lk,
  selected: ak,
  caret: ik,
  caretIcon: ck,
  caretOpen: dk,
  caretPlaceholder: uk,
  label: fk,
  loading: _k,
  loadingRow: pk,
  empty: mk,
  checkbox: hk
};
function gk({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ve(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function CO({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: i,
  keyProperty: d,
  KeyProperty: s,
  selectionMode: a,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: x,
  SelectedItems: h,
  defaultSelectedItem: g,
  defaultSelectedItems: m,
  onChange: y,
  Change: p,
  onExpand: _,
  Expand: b,
  onCollapse: O,
  Collapse: v,
  loadChildData: $,
  LoadChildData: S,
  template: C,
  Template: A,
  itemTemplate: L,
  ItemTemplate: z,
  ariaLabel: T,
  AriaLabel: w,
  allowCheckBoxes: k = !1,
  checkedKeys: E,
  defaultCheckedKeys: R,
  onCheckedChange: I,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = l ?? i ?? "text", we = d ?? s ?? "id", le = a ?? c ?? "single", _e = T ?? w ?? "Tree", K = $ ?? S, he = C ?? A ?? L ?? z, ue = B(
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
  ), [fe, Fe] = q(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = x ?? h, yt = le === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
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
      if (g) return /* @__PURE__ */ new Set([ue(g)]);
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
    g,
    m,
    ue,
    pe,
    X
  ]), [M, Y] = q(
    () => Z()
  ), Q = Oe(() => {
    if (le === "multiple") {
      if (Je !== void 0) {
        const W = Je;
        return W ? new Set(W.map((ee) => ue(ee))) : /* @__PURE__ */ new Set();
      }
      return M;
    } else {
      if (Ge !== void 0) {
        const W = Ge;
        return W ? /* @__PURE__ */ new Set([ue(W)]) : /* @__PURE__ */ new Set();
      }
      return M;
    }
  }, [
    le,
    Je,
    Ge,
    M,
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
      const Ne = G.has(ee), ke = _ ?? b, Ce = O ?? v, Ke = pe(W), it = ne.get(ee) ?? Ke, Et = !(it !== void 0 && it.length > 0) && K != null;
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
      O,
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
  ), re = E !== void 0 ? new Set(E) : nt, Le = B(
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
      E === void 0 && Xt(de), I?.([...de]);
    },
    [
      k,
      j,
      E,
      re,
      Le,
      ue,
      Nt,
      I
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
  }, [We, Ie]), Xe = (W, ee, de) => /* @__PURE__ */ o("ul", { role: "group", className: Mt.group, children: W.map((Ne, ke) => {
    const Ce = ue(Ne), Ke = ye(Ne), Be = ne.get(Ce) ?? pe(Ne);
    let it;
    ne.has(Ce) ? it = ne.get(Ce).length > 0 : Be !== void 0 ? it = Be.length > 0 : K ? it = !0 : it = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), mt = !!Ne.disabled, ze = fe.has(Ce), Tt = We === Ce, Zt = W.length, pn = ke + 1, Tn = he ? he(Ne) : Ke, jn = k ? {
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
            k ? /* @__PURE__ */ o(
              gk,
              {
                className: Mt.checkbox,
                checked: jn?.checked ?? !1,
                indeterminate: jn?.indeterminate ?? !1,
                disabled: mt,
                "aria-label": `Select ${Ke}`,
                onClick: (wn) => wn.stopPropagation(),
                onChange: () => xt(Ne)
              }
            ) : null,
            it ? /* @__PURE__ */ o(
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
            /* @__PURE__ */ o("span", { className: Mt.label, children: Tn }),
            ze ? /* @__PURE__ */ o("span", { className: Mt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      it && rt ? ze ? /* @__PURE__ */ o("div", { className: Mt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : ne.has(Ce) && ne.get(Ce).length > 0 ? Xe(
        ne.get(Ce),
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
      "aria-multiselectable": le === "multiple" || void 0,
      tabIndex: 0,
      className: [Mt.root, F].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: X.length === 0 ? /* @__PURE__ */ o("div", { className: Mt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const bk = "_root_10fdq_1", yk = "_panel_10fdq_8", xk = "_header_10fdq_19", vk = "_listbox_10fdq_28", wk = "_option_10fdq_42", kk = "_disabled_10fdq_57", Nk = "_active_10fdq_66", Sk = "_selected_10fdq_70", Ok = "_empty_10fdq_86", $k = "_controls_10fdq_93", Ek = "_reorder_10fdq_102", Tk = "_btn_10fdq_110", tt = {
  root: bk,
  panel: yk,
  header: xk,
  listbox: vk,
  option: wk,
  disabled: kk,
  active: Nk,
  selected: Sk,
  empty: Ok,
  controls: $k,
  reorder: Ek,
  btn: Tk
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function cs(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function AO({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: i,
  targetValue: d,
  TargetValue: s,
  data: a,
  Data: c,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: x,
  TargetChange: h,
  keyProperty: g,
  KeyProperty: m,
  onMove: y,
  Move: p,
  ariaLabel: _,
  AriaLabel: b,
  className: O
}) {
  const v = g ?? m ?? "id", $ = _ ?? b ?? "PickList", S = e ?? t ?? l ?? i ?? a ?? c ?? [], C = n ?? r ?? d ?? s ?? [], [A, L] = q(() => [
    ...S
  ]), [z, T] = q(() => [
    ...C
  ]);
  ve(() => {
    const M = e ?? t ?? l ?? i ?? a ?? c;
    M !== void 0 && L([...M]);
  }, [e, t, l, i, a, c]), ve(() => {
    const M = n ?? r ?? d ?? s;
    M !== void 0 && T([...M]);
  }, [n, r, d, s]);
  const [w, k] = q(
    () => /* @__PURE__ */ new Set()
  ), [E, R] = q(
    () => /* @__PURE__ */ new Set()
  ), [I, j] = q(() => {
    const M = S.findIndex((Y) => !Y.disabled);
    return M >= 0 ? M : 0;
  }), [F, X] = q(() => {
    const M = C.findIndex((Y) => !Y.disabled);
    return M >= 0 ? M : 0;
  }), ie = Oe(
    () => A.map((M, Y) => M.disabled ? -1 : Y).filter((M) => M >= 0),
    [A]
  ), te = Oe(
    () => z.map((M, Y) => M.disabled ? -1 : Y).filter((M) => M >= 0),
    [z]
  );
  ve(() => {
    if (I >= A.length) {
      const M = ie[ie.length - 1];
      j(M ?? 0);
    } else if (A.length > 0 && ie.length > 0 && !ie.includes(I)) {
      const M = ie[0];
      M !== void 0 && j(M);
    }
  }, [I, A.length, ie]), ve(() => {
    if (F >= z.length) {
      const M = te[te.length - 1];
      X(M ?? 0);
    } else if (z.length > 0 && te.length > 0 && !te.includes(F)) {
      const M = te[0];
      M !== void 0 && X(M);
    }
  }, [F, z.length, te]), ve(() => {
    k((M) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of M)
        A.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [A, v]), ve(() => {
    R((M) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of M)
        z.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [z, v]);
  const we = B(
    (M) => {
      (f ?? u)?.(M);
    },
    [f, u]
  ), le = B(
    (M) => {
      (x ?? h)?.(M);
    },
    [x, h]
  ), _e = B(
    (M) => {
      (y ?? p)?.(M);
    },
    [y, p]
  ), K = B(
    (M) => {
      const Y = A[M];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      k((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), j(M);
    },
    [A, v]
  ), he = B(
    (M) => {
      const Y = z[M];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      R((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), X(M);
    },
    [z, v]
  ), ue = B(() => {
    const M = [], Y = [];
    for (const Ee of A) {
      const je = It(Ee, v);
      w.has(je) && !Ee.disabled ? M.push(Ee) : Y.push(Ee);
    }
    if (M.length === 0) return;
    const Q = Y, ge = [...z, ...M];
    L(Q), T(ge), k(/* @__PURE__ */ new Set());
    const ae = new Set(M.map((Ee) => It(Ee, v)));
    R(ae), we(Q), le(ge), _e({
      source: Q,
      target: ge,
      moved: M,
      direction: "toTarget"
    });
  }, [
    A,
    z,
    w,
    v,
    we,
    le,
    _e
  ]), ye = B(() => {
    const M = [], Y = [];
    for (const Ee of z) {
      const je = It(Ee, v);
      E.has(je) && !Ee.disabled ? M.push(Ee) : Y.push(Ee);
    }
    if (M.length === 0) return;
    const Q = Y, ge = [...A, ...M];
    T(Q), L(ge), R(/* @__PURE__ */ new Set());
    const ae = new Set(M.map((Ee) => It(Ee, v)));
    k(ae), we(ge), le(Q), _e({
      source: ge,
      target: Q,
      moved: M,
      direction: "toSource"
    });
  }, [
    A,
    z,
    E,
    v,
    we,
    le,
    _e
  ]), pe = B(() => {
    const M = A.filter((ge) => !ge.disabled);
    if (M.length === 0) return;
    const Y = A.filter((ge) => !!ge.disabled), Q = [...z, ...M];
    L(Y), T(Q), k(/* @__PURE__ */ new Set()), we(Y), le(Q), _e({
      source: Y,
      target: Q,
      moved: M,
      direction: "allToTarget"
    });
  }, [
    A,
    z,
    v,
    we,
    le,
    _e
  ]), De = B(() => {
    const M = z.filter((ge) => !ge.disabled);
    if (M.length === 0) return;
    const Y = z.filter((ge) => !!ge.disabled), Q = [...A, ...M];
    T(Y), L(Q), R(/* @__PURE__ */ new Set()), we(Q), le(Y), _e({
      source: Q,
      target: Y,
      moved: M,
      direction: "allToSource"
    });
  }, [A, z, we, le, _e]), G = B(() => {
    if (E.size === 0) return;
    const M = [...z], Y = E, Q = [];
    for (let ae = 1; ae < M.length; ae++) {
      const Ee = M[ae], je = M[ae - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (M[ae - 1] = Ee, M[ae] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    T(M), le(M), _e({ source: A, target: M, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = M.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    z,
    E,
    v,
    A,
    le,
    _e
  ]), $e = B(() => {
    if (E.size === 0) return;
    const M = [...z], Y = E, Q = [];
    for (let ae = M.length - 2; ae >= 0; ae--) {
      const Ee = M[ae], je = M[ae + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (M[ae] = je, M[ae + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    T(M), le(M), _e({ source: A, target: M, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = M.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    z,
    E,
    v,
    A,
    le,
    _e
  ]), ne = w.size > 0, Ae = E.size > 0, fe = oe(""), Fe = oe(
    null
  ), Ge = oe(""), Je = oe(
    null
  ), At = B(
    (M) => {
      if (A.length === 0) return;
      const Y = ie;
      if (Y.length === 0) return;
      const Q = Y.includes(I) ? I : Y[0] ?? 0;
      let ge = -1;
      if (M.key === "ArrowDown") {
        M.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (M.key === "ArrowUp") {
        M.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (M.key === "Home")
        M.preventDefault(), ge = Y[0] ?? 0;
      else if (M.key === "End")
        M.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (M.key === "Enter" || M.key === " ") {
        M.preventDefault(), K(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const ae = (fe.current + M.key).toLowerCase();
        fe.current = ae, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => cs(A[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [A, ie, I, K]
  ), lt = B(
    (M) => {
      if (z.length === 0) return;
      const Y = te;
      if (Y.length === 0) return;
      const Q = Y.includes(F) ? F : Y[0] ?? 0;
      let ge = -1;
      if (M.key === "ArrowDown") {
        M.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (M.key === "ArrowUp") {
        M.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (M.key === "Home")
        M.preventDefault(), ge = Y[0] ?? 0;
      else if (M.key === "End")
        M.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (M.key === "Enter" || M.key === " ") {
        M.preventDefault(), he(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const ae = (Ge.current + M.key).toLowerCase();
        Ge.current = ae, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => cs(z[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && X(Ze);
        return;
      }
      ge >= 0 && X(ge);
    },
    [z, te, F, he]
  ), yt = oe(null), Z = oe(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [tt.root, O].filter(Boolean).join(" "),
      "aria-label": $,
      children: [
        /* @__PURE__ */ D("div", { className: tt.panel, children: [
          /* @__PURE__ */ o("div", { className: tt.header, children: "Source" }),
          /* @__PURE__ */ o(
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
              ) : A.map((M, Y) => {
                const Q = It(M, v), ge = w.has(Q), ae = Y === I, Ee = !!M.disabled;
                return /* @__PURE__ */ o(
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
                    children: cs(M)
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
              "aria-disabled": !ne || void 0,
              disabled: !ne,
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
              "aria-disabled": A.filter((M) => !M.disabled).length === 0 || void 0,
              disabled: A.filter((M) => !M.disabled).length === 0,
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
              "aria-disabled": A.filter((M) => !M.disabled).length === 0 || void 0,
              disabled: A.filter((M) => !M.disabled).length === 0,
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
              onClick: ye,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": z.filter((M) => !M.disabled).length === 0 || void 0,
              disabled: z.filter((M) => !M.disabled).length === 0,
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
              onKeyDown: lt,
              children: z.length === 0 ? (
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
              ) : z.map((M, Y) => {
                const Q = It(M, v), ge = E.has(Q), ae = Y === F, Ee = !!M.disabled;
                return /* @__PURE__ */ o(
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
                    children: cs(M)
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
const Ck = "_root_1qxsp_1", Ak = "_header_1qxsp_8", Dk = "_title_1qxsp_15", Mk = "_navBtn_1qxsp_20", Ik = "_resources_1qxsp_39", zk = "_resource_1qxsp_39", Lk = "_grid_1qxsp_50", Rk = "_timeCol_1qxsp_55", Pk = "_timeCell_1qxsp_61", jk = "_dayCol_1qxsp_66", Bk = "_dayHeader_1qxsp_73", Fk = "_slot_1qxsp_81", Hk = "_event_1qxsp_91", Gt = {
  root: Ck,
  header: Ak,
  title: Dk,
  navBtn: Mk,
  resources: Ik,
  resource: zk,
  grid: Lk,
  timeCol: Rk,
  timeCell: Pk,
  dayCol: jk,
  dayHeader: Bk,
  slot: Fk,
  event: Hk
};
function al(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function DO({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: i,
  onSlotClick: d,
  ariaLabel: s = "Scheduler",
  className: a
}) {
  const [c, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, x = (m) => {
    n || f(m), r?.(m);
  }, h = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, y) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + y), p;
  }) : Array.from({ length: 30 }, (m, y) => {
    const p = new Date(u);
    return p.setDate(1 + y), p;
  }), g = Array.from({ length: 12 }, (m, y) => 8 + y);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Gt.root, a].filter(Boolean).join(" "),
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
                const m = new Date(u);
                m.setDate(m.getDate() - 7), x(m);
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
                const m = new Date(u);
                m.setDate(m.getDate() + 7), x(m);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: Gt.resources, children: l.map((m) => /* @__PURE__ */ o(
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
          /* @__PURE__ */ o("div", { className: Gt.timeCol, role: "presentation", children: g.map((m) => /* @__PURE__ */ D("div", { className: Gt.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          h.map((m) => /* @__PURE__ */ D(
            "div",
            {
              className: Gt.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: Gt.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                g.map((y) => /* @__PURE__ */ o(
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
                e.filter((y) => y.start.toDateString() === m.toDateString()).map((y) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${y.title} ${al(y.start)} - ${al(y.end)}`,
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
const Uk = "_root_dj5ne_1", qk = "_header_dj5ne_8", Wk = "_headerCell_dj5ne_15", Kk = "_timeline_dj5ne_21", Gk = "_row_dj5ne_26", Vk = "_taskName_dj5ne_32", Yk = "_timelineCell_dj5ne_37", Xk = "_bar_dj5ne_43", Zk = "_progress_dj5ne_56", Jk = "_dep_dj5ne_61", En = {
  root: Uk,
  header: qk,
  headerCell: Wk,
  timeline: Kk,
  row: Gk,
  taskName: Vk,
  timelineCell: Yk,
  bar: Xk,
  progress: Zk,
  dep: Jk
};
function MO({
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
          /* @__PURE__ */ o("div", { className: En.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: En.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ D(
          "div",
          {
            className: En.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: En.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ D("div", { className: En.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: En.bar,
                    role: "button",
                    "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
                    "aria-pressed": i === s.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(s.id), n?.({ task: s });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(s.id), n?.({ task: s }));
                    },
                    children: /* @__PURE__ */ o(
                      "div",
                      {
                        className: En.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((a) => /* @__PURE__ */ o("svg", { className: En.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
          s.id
        ))
      ]
    }
  );
}
const Qk = "_root_4b64f_1", eN = "_fields_4b64f_6", tN = "_chip_4b64f_13", nN = "_table_4b64f_35", rN = "_totalRow_4b64f_55", sN = "_total_4b64f_55", gr = {
  root: Qk,
  fields: eN,
  chip: tN,
  table: nN,
  totalRow: rN,
  total: sN
}, ds = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function jr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function IO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const s = t, a = n, c = r, f = (y, p, _) => {
    const b = y === "row" ? s.filter(($) => $.property !== p) : s, O = y === "col" ? a.filter(($) => $.property !== p) : a, v = y === "agg" ? c.filter(($) => !($.property === p && $.aggregate === _)) : c;
    l?.({
      rowFields: b,
      columnFields: O,
      aggregateFields: v
    });
  }, u = (y, p) => p.map((_) => String(y[_.property])).join(""), x = [
    ...new Set(s.length ? e.map((y) => u(y, s)) : [""])
  ].sort(), h = [
    ...new Set(a.length ? e.map((y) => u(y, a)) : [""])
  ].sort(), g = (y, p, _) => {
    const b = e.filter(
      (v) => u(v, s) === y && u(v, a) === p
    ), O = b.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !O.length && _.aggregate !== "Count" ? 0 : ds[_.aggregate](
      _.aggregate === "Count" ? b.map(() => 1) : O
    );
  }, m = (y, p, _, b) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: gr.chip,
      "aria-label": `Remove ${y} field ${_}`,
      onClick: () => f(y, p, b),
      children: [
        _,
        b ? ` (${b})` : ""
      ]
    },
    `${y}-${_}-${b ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [gr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: gr.fields, children: [
      s.map((y) => m("row", y.property, y.title ?? y.property)),
      a.map((y) => m("col", y.property, y.title ?? y.property)),
      c.map(
        (y) => m("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: gr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        h.map((y) => /* @__PURE__ */ o("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        x.map((y) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: y || "—" }),
          h.map((p) => /* @__PURE__ */ o(
            "td",
            {
              title: jr(
                g(
                  y,
                  p,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? jr(g(y, p, c[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ o("td", { className: gr.total, children: c.length ? jr(
            ds[c[0].aggregate](
              h.flatMap(
                (p) => e.filter(
                  (_) => u(_, s) === y && u(_, a) === p
                ).map((_) => Number(_[c[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ D("tr", { className: gr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          h.map((y) => /* @__PURE__ */ o("td", { children: c.length ? jr(
            ds[c[0].aggregate](
              e.filter((p) => u(p, a) === y).map((p) => Number(p[c[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, y)),
          /* @__PURE__ */ o("td", { children: c.length ? jr(
            ds[c[0].aggregate](
              e.map((y) => Number(y[c[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const oN = "_root_1r7co_1", lN = "_reverse_1r7co_10", aN = "_item_1r7co_14", iN = "_marker_1r7co_35", cN = "_body_1r7co_46", dN = "_label_1r7co_50", uN = "_content_1r7co_56", tr = {
  root: oN,
  reverse: lN,
  item: aN,
  marker: iN,
  body: cN,
  label: dN,
  content: uN
};
function zO({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [tr.root, t ? tr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((i, d) => /* @__PURE__ */ D("li", { className: tr.item, children: [
        /* @__PURE__ */ o("span", { className: tr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: tr.body, children: [
          /* @__PURE__ */ o("div", { className: tr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: tr.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const fN = "_root_rm4d8_1", _N = "_header_rm4d8_13", pN = "_headCell_rm4d8_22", mN = "_row_rm4d8_32", hN = "_cell_rm4d8_37", Br = {
  root: fN,
  header: _N,
  headCell: pN,
  row: mN,
  cell: hN
};
function LO({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [s, a] = q(
    /* @__PURE__ */ new Map()
  ), [c, f] = q(0), u = oe(/* @__PURE__ */ new Set()), x = Math.ceil(n / t), h = Math.max(0, Math.floor(c / t) - 3), g = Math.min(e, h + x + 6), m = B(
    (p, _) => {
      let b = !1;
      for (let O = p; O < _; O++)
        !s.has(O) && !u.current.has(O) && (b = !0);
      if (b) {
        for (let O = p; O < _; O++) u.current.add(O);
        r({ skip: p, top: _ }).then((O) => {
          a((v) => {
            const $ = new Map(v);
            return O.forEach((S, C) => $.set(p + C, S)), $;
          });
          for (let v = p; v < _; v++) u.current.delete(v);
        });
      }
    },
    [s, r]
  );
  ve(() => {
    m(h, g);
  }, [h, g]);
  const y = [];
  for (let p = h; p < g; p++) {
    const _ = s.get(p) ?? {};
    y.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Br.row,
          role: "row",
          style: { height: t },
          children: l.map((b) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Br.cell,
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
      className: [Br.root, d].filter(Boolean).join(" "),
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
        /* @__PURE__ */ o("div", { style: { height: h * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: Br.header, role: "row", children: l.map((p) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: Br.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
        )) }),
        y,
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
var vn;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, a, c, f) {
      if (this.version = s, this.errorCorrectionLevel = a, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let u = [];
      for (let h = 0; h < this.size; h++) u.push(!1);
      for (let h = 0; h < this.size; h++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const x = this.addEccAndInterleave(c);
      if (this.drawCodewords(x), f == -1) {
        let h = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const m = this.getPenaltyScore();
          m < h && (f = g, h = m), this.applyMask(g);
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
    static encodeText(s, a) {
      const c = e.QrSegment.makeSegments(s);
      return t.encodeSegments(c, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, a) {
      const c = e.QrSegment.makeBytes(s);
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
    static encodeSegments(s, a, c = 1, f = 40, u = -1, x = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let h, g;
      for (h = c; ; h++) {
        const _ = t.getNumDataCodewords(h, a) * 8, b = i.getTotalBits(s, h);
        if (b <= _) {
          g = b;
          break;
        }
        if (h >= f)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && g <= t.getNumDataCodewords(h, _) * 8 && (a = _);
      let m = [];
      for (const _ of s) {
        n(_.mode.modeBits, 4, m), n(_.numChars, _.mode.numCharCountBits(h), m);
        for (const b of _.getData()) m.push(b);
      }
      l(m.length == g);
      const y = t.getNumDataCodewords(h, a) * 8;
      l(m.length <= y), n(0, Math.min(4, y - m.length), m), n(0, (8 - m.length % 8) % 8, m), l(m.length % 8 == 0);
      for (let _ = 236; m.length < y; _ ^= 253)
        n(_, 8, m);
      let p = [];
      for (; p.length * 8 < m.length; ) p.push(0);
      return m.forEach(
        (_, b) => p[b >>> 3] |= _ << 7 - (b & 7)
      ), new t(h, a, p, u);
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
    getModule(s, a) {
      return 0 <= s && s < this.size && 0 <= a && a < this.size && this.modules[a][s];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), a = s.length;
      for (let c = 0; c < a; c++)
        for (let f = 0; f < a; f++)
          c == 0 && f == 0 || c == 0 && f == a - 1 || c == a - 1 && f == 0 || this.drawAlignmentPattern(s[c], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const a = this.errorCorrectionLevel.formatBits << 3 | s;
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
      let s = this.version;
      for (let c = 0; c < 12; c++) s = s << 1 ^ (s >>> 11) * 7973;
      const a = this.version << 12 | s;
      l(a >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = r(a, c), u = this.size - 11 + c % 3, x = Math.floor(c / 3);
        this.setFunctionModule(u, x, f), this.setFunctionModule(x, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, a) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), x = s + f, h = a + c;
          0 <= x && x < this.size && 0 <= h && h < this.size && this.setFunctionModule(x, h, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, a) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            a + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, a, c) {
      this.modules[a][s] = c, this.isFunction[a][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const a = this.version, c = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(a, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], x = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), h = f - x % f, g = Math.floor(x / f);
      let m = [];
      const y = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, b = 0; _ < f; _++) {
        let O = s.slice(
          b,
          b + g - u + (_ < h ? 0 : 1)
        );
        b += O.length;
        const v = t.reedSolomonComputeRemainder(O, y);
        _ < h && O.push(0), m.push(O.concat(v));
      }
      let p = [];
      for (let _ = 0; _ < m[0].length; _++)
        m.forEach((b, O) => {
          (_ != g - u || O >= h) && p.push(b[_]);
        });
      return l(p.length == x), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const x = c - u, g = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[g][x] && a < s.length * 8 && (this.modules[g][x] = r(s[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (s) {
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
      let s = 0;
      for (let u = 0; u < this.size; u++) {
        let x = !1, h = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == x ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, g), x || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), x = this.modules[u][m], h = 1);
        s += this.finderPenaltyTerminateAndCount(x, h, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let x = !1, h = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == x ? (h++, h == 5 ? s += t.PENALTY_N1 : h > 5 && s++) : (this.finderPenaltyAddHistory(h, g), x || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), x = this.modules[m][u], h = 1);
        s += this.finderPenaltyTerminateAndCount(x, h, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let x = 0; x < this.size - 1; x++) {
          const h = this.modules[u][x];
          h == this.modules[u][x + 1] && h == this.modules[u + 1][x] && h == this.modules[u + 1][x + 1] && (s += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((x, h) => x + (h ? 1 : 0), a);
      const c = this.size * this.size, f = Math.ceil(Math.abs(a * 20 - c * 10) / c) - 1;
      return l(0 <= f && f <= 9), s += f * t.PENALTY_N4, l(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const s = Math.floor(this.version / 7) + 2, a = Math.floor(
          (this.version * 8 + s * 3 + 5) / (s * 4 - 4)
        ) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < s; f -= a)
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
      let a = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const c = Math.floor(s / 7) + 2;
        a -= (25 * c - 10) * c - 55, s >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, a) {
      return Math.floor(t.getNumRawDataModules(s) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][s] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let f = 0; f < s - 1; f++) a.push(0);
      a.push(1);
      let c = 1;
      for (let f = 0; f < s; f++) {
        for (let u = 0; u < a.length; u++)
          a[u] = t.reedSolomonMultiply(a[u], c), u + 1 < a.length && (a[u] ^= a[u + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, a) {
      let c = a.map((f) => 0);
      for (const f of s) {
        const u = f ^ c.shift();
        c.push(0), a.forEach(
          (x, h) => c[h] ^= t.reedSolomonMultiply(x, u)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, a) {
      if (s >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (a >>> f & 1) * s;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const a = s[1];
      l(a <= this.size * 3);
      const c = a > 0 && s[2] == a && s[3] == a * 3 && s[4] == a && s[5] == a;
      return (c && s[0] >= a * 4 && s[6] >= a ? 1 : 0) + (c && s[6] >= a * 4 && s[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, a, c) {
      return s && (this.finderPenaltyAddHistory(a, c), a = 0), a += this.size, this.finderPenaltyAddHistory(a, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, a) {
      a[0] == 0 && (s += this.size), a.pop(), a.unshift(s);
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
  function n(d, s, a) {
    if (s < 0 || s > 31 || d >>> s)
      throw new RangeError("Value out of range");
    for (let c = s - 1; c >= 0; c--)
      a.push(d >>> c & 1);
  }
  function r(d, s) {
    return (d >>> s & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, a, c) {
      if (this.mode = s, this.numChars = a, this.bitData = c, a < 0) throw new RangeError("Invalid argument");
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
      let a = [];
      for (const c of s) n(c, 8, a);
      return new i(i.Mode.BYTE, s.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!i.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let c = 0; c < s.length; ) {
        const f = Math.min(s.length - c, 3);
        n(parseInt(s.substring(c, c + f), 10), f * 3 + 1, a), c += f;
      }
      return new i(i.Mode.NUMERIC, s.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!i.isAlphanumeric(s))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], c;
      for (c = 0; c + 2 <= s.length; c += 2) {
        let f = i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c + 1)), n(f, 11, a);
      }
      return c < s.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)),
        6,
        a
      ), new i(i.Mode.ALPHANUMERIC, s.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : i.isNumeric(s) ? [i.makeNumeric(s)] : i.isAlphanumeric(s) ? [i.makeAlphanumeric(s)] : [i.makeBytes(i.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let a = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128) n(s, 8, a);
      else if (s < 16384)
        n(2, 2, a), n(s, 14, a);
      else if (s < 1e6)
        n(6, 3, a), n(s, 21, a);
      else throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, a);
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
    static getTotalBits(s, a) {
      let c = 0;
      for (const f of s) {
        const u = f.mode.numCharCountBits(a);
        if (f.numChars >= 1 << u) return 1 / 0;
        c += 4 + u + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let a = [];
      for (let c = 0; c < s.length; c++)
        s.charAt(c) != "%" ? a.push(s.charCodeAt(c)) : (a.push(parseInt(s.substring(c + 1, c + 3), 16)), c += 2);
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
const gN = "_root_1leml_1", bN = {
  root: gN
}, yN = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function RO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: s
}) {
  const a = i ?? `QR code for ${e}`, c = oe(null), f = no("(prefers-color-scheme: dark)"), [u, x] = q(null);
  ve(() => {
    const O = document.documentElement;
    x(O.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      x(O.dataset.theme ?? null);
    });
    return v.observe(O, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const h = Oe(() => {
    try {
      return vn.QrCode.encodeText(e, yN[r]);
    } catch {
      return null;
    }
  }, [e, r]), g = oe(null);
  ve(() => {
    if (h !== null) {
      g.current = null;
      return;
    }
    const O = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(O), (g.current?.value !== e || g.current?.onError !== s) && (g.current = { value: e, onError: s }, s?.(O));
  }, [h, e, s]);
  const m = Math.max(0, Math.floor(l)), y = [bN.root, d].filter(Boolean).join(" ");
  if (ve(() => {
    if (n !== "canvas" || h === null) return;
    const O = c.current, v = O?.getContext("2d");
    if (!O || !v) return;
    const $ = getComputedStyle(O), S = $.getPropertyValue("--dx-text-color").trim() || "#000", C = $.getPropertyValue("--dx-surface-color").trim() || "#fff";
    xN(v, h, t, m, S, C);
  }, [n, h, t, m, f, u]), h === null)
    return /* @__PURE__ */ o("div", { className: y, role: "img", "aria-label": a, "data-qr-error": "true" });
  const p = h.size + m * 2, _ = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ o(
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
  for (let O = 0; O < h.size; O++)
    for (let v = 0; v < h.size; v++)
      h.getModule(v, O) && b.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (v + m) * _,
            y: (O + m) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${O}`
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
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: b })
      ]
    }
  );
}
function xN(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let s = 0; s < t.size; s++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, s) && e.fillRect((a + r) * d, (s + r) * d, d + 0.5, d + 0.5);
}
const vN = "_root_1v9la_1", wN = "_value_1v9la_9", il = {
  root: vN,
  value: wN
}, cl = [
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
], dl = 104, kN = 106;
function NN(e) {
  const t = [dl];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = dl;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, kN), t;
}
function PO({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, s = Oe(() => {
    const a = [];
    let c = 0;
    for (const f of NN(e)) {
      const u = cl[f] ?? cl[0];
      for (let x = 0; x < u.length; x++) {
        const h = Number(u[x]);
        x % 2 === 0 && a.push({ x: c, w: h }), c += h;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [il.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
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
          s.modules.map((a, c) => /* @__PURE__ */ o(
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
    r && /* @__PURE__ */ o("span", { className: il.value, children: e })
  ] });
}
const SN = "_root_16i43_1", ON = "_svg_16i43_10", $N = "_gridline_16i43_15", EN = "_tickLabel_16i43_21", TN = "_axisTitle_16i43_27", CN = "_dataLabel_16i43_34", AN = "_gaugeValue_16i43_40", DN = "_legend_16i43_47", MN = "_legendItem_16i43_55", IN = "_swatch_16i43_63", zN = "_tooltip_16i43_70", LN = "_visuallyHidden_16i43_84", ft = {
  root: SN,
  svg: ON,
  gridline: $N,
  tickLabel: EN,
  axisTitle: TN,
  dataLabel: CN,
  gaugeValue: AN,
  legend: DN,
  legendItem: MN,
  swatch: IN,
  tooltip: zN,
  visuallyHidden: LN
}, ul = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Bl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), RN = /* @__PURE__ */ new Set([...Bl, "heatmap"]);
function PN(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, s = [];
  for (let a = i; a <= d + 1e-9; a += l)
    s.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: s };
}
function jN(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    min: e.minProperty != null ? Number(t[e.minProperty]) : void 0,
    max: e.maxProperty != null ? Number(t[e.maxProperty]) : void 0,
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function Vn(e, t, n) {
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
function Fl(e, t, n, r, l) {
  const i = r.markers ?? {};
  if (i.visible === !1) return null;
  const d = i.shape ?? "circle", s = i.size ?? l, a = "var(--dx-surface-color)";
  return d === "square" ? /* @__PURE__ */ o(
    "rect",
    {
      x: e - s,
      y: t - s,
      width: s * 2,
      height: s * 2,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : d === "diamond" ? /* @__PURE__ */ o(
    "path",
    {
      d: `M ${e} ${t - s} L ${e + s} ${t} L ${e} ${t + s} L ${e - s} ${t} Z`,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : d === "triangle" ? /* @__PURE__ */ o(
    "path",
    {
      d: `M ${e} ${t - s} L ${e + s} ${t + s} L ${e - s} ${t + s} Z`,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  ) : /* @__PURE__ */ o(
    "circle",
    {
      cx: e,
      cy: t,
      r: s,
      fill: n,
      stroke: a,
      strokeWidth: 1.5
    }
  );
}
function BN(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function gs(e, t) {
  return e.percent ? `${t}%` : String(t);
}
function FN(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: l, categories: i } = e, d = new Map(i.map((u, x) => [u, x])), s = n.map((u) => {
    const x = d.get(u.cat) ?? 0, h = u.min, g = u.max;
    return typeof h != "number" || Number.isNaN(h) || typeof g != "number" || Number.isNaN(g) ? null : { x: r(x), lo: l(h), hi: l(g) };
  });
  if (s.some((u) => u == null)) return null;
  const a = s.map((u) => `L ${u.x} ${u.hi}`).join(" "), c = [...s].reverse().map((u) => `L ${u.x} ${u.lo}`).join(" "), f = s[0];
  return /* @__PURE__ */ o(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${a} ${c} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function HN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s } = e, a = i.l + d / 2, c = i.t + s / 2, f = Math.min(d, s) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, x = r.reduce((g, m) => g + (Number(m.val) || 0), 0);
  let h = -90;
  return Vn(
    n,
    t,
    r.map((g, m) => {
      const y = x ? g.val / x * 360 : 0, p = h, _ = h + y;
      h = _;
      const b = y > 180 ? 1 : 0, O = a + f * Math.cos(Ut(p)), v = c + f * Math.sin(Ut(p)), $ = a + f * Math.cos(Ut(_)), S = c + f * Math.sin(Ut(_)), C = a + u * Math.cos(Ut(_)), A = c + u * Math.sin(Ut(_)), L = a + u * Math.cos(Ut(p)), z = c + u * Math.sin(Ut(p)), T = u ? `M ${O} ${v} A ${f} ${f} 0 ${b} 1 ${$} ${S} L ${C} ${A} A ${u} ${u} 0 ${b} 0 ${L} ${z} Z` : `M ${a} ${c} L ${O} ${v} A ${f} ${f} 0 ${b} 1 ${$} ${S} Z`, w = (p + _) / 2, k = a + (f + 12) * Math.cos(Ut(w)), E = c + (f + 12) * Math.sin(Ut(w));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: T,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, E, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: k,
            y: E,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: g.val
          }
        )
      ] }, m);
    })
  );
}
function UN(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: s, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((x, h) => [x, h]));
  return Vn(
    n,
    t,
    r.map((x, h) => {
      const g = u.get(x.cat) ?? 0, m = Number(r[h].cat), y = Number.isNaN(m) ? a(g) : i.l + (m - s.min) / (s.max - s.min || 1) * d, p = c(x.val), _ = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        Fl(y, p, l, t, _),
        /* @__PURE__ */ o(
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
      ] }, h);
    })
  );
}
function qN(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: s, categories: a, series: c } = e, f = new Map(a.map((g, m) => [g, m])), u = (g) => {
    if (!t.stack) return i.min;
    let m = 0;
    for (let y = 0; y < n; y++) {
      const p = c[y];
      if (p?.stack !== t.stack) continue;
      const _ = p.data.find(
        (b) => String(b[p.categoryProperty] ?? "") === g
      );
      _ && (m += Number(_[p.valueProperty]) || 0);
    }
    return m;
  }, x = r.map((g) => {
    const m = f.get(g.cat) ?? 0, y = u(g.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${s(y + g.val)}`;
  }).join(" "), h = r.map((g) => {
    const m = f.get(g.cat) ?? 0, y = u(g.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${s(y)}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${x} L ${d(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${d(0)} ${s(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      FN(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: x,
          fill: "none",
          stroke: l,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: BN(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: h, fill: "none", stroke: "transparent" }),
      r.map((g, m) => {
        const y = f.get(g.cat) ?? 0, p = u(g.cat), _ = d(y), b = s(p + g.val);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          Fl(_, b, l, t, 4),
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
                `${t.title ?? g.cat}: ${gs(e, g.val)}`
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
              y: b - 8,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: gs(e, g.val)
            }
          )
        ] }, m);
      })
    ] })
  );
}
function WN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, scale: a, xFor: c, yFor: f, categories: u, series: x } = e, h = new Map(u.map((m, y) => [m, y])), g = t.type === "bar";
  return Vn(
    n,
    t,
    r.map((m, y) => {
      const p = h.get(m.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const E = x[k];
          if (E?.stack !== t.stack) continue;
          const R = E.data.find(
            (I) => String(I[E.categoryProperty] ?? "") === m.cat
          );
          R && (_ += Number(R[E.valueProperty]) || 0);
        }
      const b = _ + m.val, O = typeof m.min == "number" && !Number.isNaN(m.min) && typeof m.max == "number" && !Number.isNaN(m.max), v = x.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, $ = d / Math.max(1, u.length), S = g ? 18 : Math.max(12, $ / (t.stack ? 1 : x.length) - 4), C = g ? i.l + _ / (a.max - a.min || 1) * d : c(p) - S / 2 + (t.stack ? 0 : n % v * S), A = g ? i.t + p * s / Math.max(1, u.length) + 4 : f(O ? _ + m.max : b), L = g ? O ? (m.max - m.min) / (a.max - a.min || 1) * d : m.val / (a.max - a.min || 1) * d : S - 4, z = g ? 16 : O ? f(_ + m.min) - f(_ + m.max) : f(_) - f(b), T = g ? i.l + (_ + (O ? m.min : 0)) / (a.max - a.min || 1) * d : C, w = g ? i.t + p * s / Math.max(1, u.length) + 4 : A;
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: T,
            y: w,
            width: g ? L : S - 4,
            height: z,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              T + (g ? L : S) / 2,
              w,
              `${t.title ?? m.cat}: ${gs(e, m.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: T + (g ? L : S) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: gs(e, m.val)
          }
        )
      ] }, y);
    })
  );
}
function KN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = i.l + d / 2, h = i.t + s * 0.78, g = Math.min(d, s) * 0.36, m = 135, y = 270, p = r.reduce(($, S) => $ + (Number(S.val) || 0), 0), _ = a.max - a.min || 1, b = Math.min(1, Math.max(0, (p - a.min) / _)), O = ($, S) => {
    const [C, A] = [
      x + g * Math.cos(Ut($)),
      h + g * Math.sin(Ut($))
    ], [L, z] = [
      x + g * Math.cos(Ut(S)),
      h + g * Math.sin(Ut(S))
    ], T = S - $ > 180 ? 1 : 0;
    return `M ${C} ${A} A ${g} ${g} 0 ${T} 1 ${L} ${z}`;
  }, v = Number(p.toFixed(2));
  return Vn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ D("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: O(m, m + y),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      b > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: O(m, m + y * b),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x, y: h - 4, textAnchor: "middle", className: ft.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: O(m, m + y),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(x, h - g, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", p, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x,
          y: h + g + 18,
          textAnchor: "middle",
          className: ft.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Hl(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, s = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (u) => Ut(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: s, angleFor: c, vertexFor: (u, x) => {
    const h = c(u);
    return [
      i + s * x * Math.cos(h),
      d + s * x * Math.sin(h)
    ];
  } };
}
function GN(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Hl(e);
  return /* @__PURE__ */ D("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((s, a) => l(a, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, s) => {
      const [a, c] = l(s, 1);
      return /* @__PURE__ */ o(
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
function VN(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: s, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: x, vertexFor: h } = Hl(e), g = e.scale.max || 1, m = (p) => r.find((_) => _.cat === p)?.val ?? 0, y = i.map((p, _) => {
    const b = Math.min(1, Math.max(0, m(p) / g)), [O, v] = h(_, b);
    return `${O},${v}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      /* @__PURE__ */ o(
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
        const b = Math.min(1, Math.max(0, m(p) / g)), [O, v] = h(_, b), [$, S] = h(_, 1);
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: O,
              cy: v,
              r: 3.5,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: O,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && s($, S, `${t.title ?? p}: ${m(p)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const C = r.find((A) => A.cat === p);
                C && e.handleClick(t, C.cat, C.val, C.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
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
function YN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, tooltipVisible: a, showTip: c, hideTip: f } = e, u = r, x = Math.max(1, ...u.map((m) => Number(m.val) || 0)), h = s / Math.max(1, u.length), g = i.l + d / 2;
  return Vn(
    n,
    t,
    u.map((m, y) => {
      const _ = Math.max(0, Number(m.val) || 0) / x * d, b = u[y + 1], O = b ? Math.max(0, Number(b.val) || 0) / x * d : _ * 0.7, v = i.t + y * h + 2, $ = Math.max(4, h - 6), S = 1 - y * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ D("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - _ / 2} ${v} L ${g + _ / 2} ${v} L ${g + O / 2} ${v + $} L ${g - O / 2} ${v + $} Z`,
            fill: l,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(g, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ D(
          "text",
          {
            x: g,
            y: v + $ / 2 + 4,
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
function XN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = [];
  t.data.forEach((b) => {
    const O = t.rowProperty ? String(b[t.rowProperty] ?? "") : "All";
    x.includes(O) || x.push(O);
  });
  const h = r.map((b) => b.val).filter((b) => Number.isFinite(b)), g = h.length ? Math.min(...h) : 0, m = h.length ? Math.max(...h) : 1, y = d / Math.max(1, a.length), p = s / Math.max(1, x.length), _ = (b) => m === g ? 0.6 : 0.15 + 0.85 * ((b - g) / (m - g));
  return Vn(
    n,
    t,
    /* @__PURE__ */ D(pt, { children: [
      x.map((b, O) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + O * p + p / 2 + 4,
          textAnchor: "end",
          className: ft.tickLabel,
          children: b
        },
        b
      )),
      r.map((b, O) => {
        const v = t.data[O], $ = a.indexOf(b.cat), S = x.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if ($ < 0 || S < 0) return null;
        const C = i.l + $ * y, A = i.t + S * p;
        return /* @__PURE__ */ D("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
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
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: C + y / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: b.val
            }
          )
        ] }, O);
      })
    ] })
  );
}
function ZN(e, t, n) {
  const r = jN(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return HN(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return UN(e, t, n, r, l);
    case "line":
    case "area":
      return qN(e, t, n, r, l);
    case "gauge":
      return KN(e, t, n, r, l);
    case "radar":
      return VN(e, t, n, r, l);
    case "funnel":
      return YN(e, t, n, r, l);
    case "heatmap":
      return XN(e, t, n, r, l);
    default:
      return WN(e, t, n, r, l);
  }
}
function jO({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: i = !0,
  stacked100Percent: d = !1,
  tooltipVisible: s = !0,
  onSeriesClick: a,
  ariaLabel: c = "Chart",
  className: f
}) {
  const [u, x] = q(
    null
  ), h = Oe(() => {
    const T = /* @__PURE__ */ new Set();
    for (const w of e)
      for (const k of w.data) T.add(String(k[w.categoryProperty] ?? ""));
    return [...T];
  }, [e]), g = Oe(() => {
    if (!d) return e;
    const T = /* @__PURE__ */ new Map();
    for (const w of e)
      if (w.stack)
        for (const k of w.data) {
          const E = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = Number(k[w.valueProperty]);
          Number.isNaN(R) || T.set(E, (T.get(E) ?? 0) + R);
        }
    return e.map((w) => w.stack ? {
      ...w,
      data: w.data.map((k) => {
        const E = `${w.stack}\0${String(k[w.categoryProperty] ?? "")}`, R = T.get(E) ?? 0, I = Number(k[w.valueProperty]);
        return {
          ...k,
          [w.valueProperty]: R > 0 && !Number.isNaN(I) ? I / R * 100 : 0
        };
      })
    } : w);
  }, [e, d]), m = Oe(() => {
    const T = g.flatMap((k) => k.data.map((E) => Number(E[k.valueProperty]))).filter((k) => !Number.isNaN(k)), w = /* @__PURE__ */ new Map();
    for (const k of g) {
      if (!k.stack) continue;
      let E = w.get(k.stack);
      E || w.set(k.stack, E = /* @__PURE__ */ new Map());
      for (const R of k.data) {
        const I = String(R[k.categoryProperty] ?? ""), j = Number(R[k.valueProperty]);
        Number.isNaN(j) || E.set(I, (E.get(I) ?? 0) + j);
      }
    }
    for (const k of w.values()) T.push(...k.values());
    return T;
  }, [g]), y = r?.min ?? (m.length ? Math.min(0, ...m) : 0), p = r?.max ?? (m.length ? Math.max(...m) : 10), _ = Oe(
    () => PN(y, p, r?.step),
    [y, p, r?.step]
  ), b = { t: 16, r: 16, b: 40, l: 56 }, O = t - b.l - b.r, v = n - b.t - b.b, $ = (T) => b.l + T / Math.max(1, h.length - 1) * O, S = (T) => b.t + (1 - (T - _.min) / (_.max - _.min || 1)) * v, C = (T, w) => w.color ?? ul[T % ul.length], A = e.some((T) => Bl.has(T.type)), L = e.some((T) => RN.has(T.type)), z = {
    categories: h,
    scale: _,
    pad: b,
    plotW: O,
    plotH: v,
    xFor: $,
    yFor: S,
    colorFor: C,
    tooltipVisible: s,
    percent: d,
    showTip: (T, w, k) => x({ x: T, y: w, text: k }),
    hideTip: () => x(null),
    handleClick: (T, w, k, E) => a?.({
      seriesTitle: T.title ?? "",
      category: w,
      value: k,
      item: E
    }),
    series: g
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
              A && r?.gridlines !== !1 && _.ticks.map((T) => /* @__PURE__ */ o(
                "line",
                {
                  x1: b.l,
                  x2: b.l + O,
                  y1: S(T),
                  y2: S(T),
                  className: ft.gridline
                },
                T
              )),
              L && l?.gridlines && h.map((T, w) => /* @__PURE__ */ o(
                "line",
                {
                  x1: $(w),
                  x2: $(w),
                  y1: b.t,
                  y2: b.t + v,
                  className: ft.gridline
                },
                w
              )),
              A && _.ticks.map((T) => /* @__PURE__ */ o(
                "text",
                {
                  x: b.l - 8,
                  y: S(T) + 4,
                  textAnchor: "end",
                  className: ft.tickLabel,
                  children: d ? `${T}%` : T
                },
                T
              )),
              L && h.map((T, w) => /* @__PURE__ */ o(
                "text",
                {
                  x: $(w),
                  y: b.t + v + 16,
                  textAnchor: "middle",
                  className: ft.tickLabel,
                  children: T
                },
                T
              )),
              A && r?.title && /* @__PURE__ */ o(
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
              L && l?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: b.l + O / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ft.axisTitle,
                  children: l.title
                }
              ),
              e.some((T) => T.type === "radar") && GN(z),
              g.map((T, w) => ZN(z, T, w))
            ]
          }
        ),
        u && /* @__PURE__ */ o(
          "div",
          {
            className: ft.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ o("div", { className: ft.legend, children: e.map((T, w) => /* @__PURE__ */ D("span", { className: ft.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: ft.swatch,
              style: { backgroundColor: C(w, T) },
              "aria-hidden": "true"
            }
          ),
          T.title ?? `Series ${w + 1}`
        ] }, w)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: ft.visuallyHidden,
            id: `${c.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: c }),
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
function BO({ query: e, children: t }) {
  return no(e) ? /* @__PURE__ */ o(pt, { children: t }) : null;
}
function FO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function HO() {
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
  TS as AIChat,
  G_ as ALERT_ICON,
  JS as Accordion,
  zS as Alert,
  tO as AutoComplete,
  BS as AutoGrid,
  XS as Avatar,
  tS as Badge,
  PO as Barcode,
  HS as Body,
  NO as Breadcrumb,
  an as Button,
  eS as Card,
  TO as Carousel,
  jO as Chart,
  Yd as CheckBox,
  rO as CheckBoxList,
  cO as ColorPicker,
  PS as Column,
  yO as ContextMenuProvider,
  Or as DEFAULT_OPERATOR_BY_TYPE,
  nv as DEFAULT_PALETTE,
  _y as DEFAULT_THEMES,
  yS as DataFilter,
  xS as DataGrid,
  vS as DataList,
  dO as DatePicker,
  bl as Dialog,
  OS as DialogProvider,
  eO as DropDown,
  gO as DropZone,
  oS as EmptyState,
  pl as FILTER_OPERATORS,
  kO as FabMenu,
  sr as Field,
  aS as Fieldset,
  Lb as Footer,
  iS as Form,
  lS as FormField,
  MO as Gantt,
  jb as Header,
  DS as HtmlEditor,
  Me as Icon,
  Jr as Input,
  wS as Label,
  FS as Layout,
  SO as Link,
  nO as ListBox,
  FO as LiveRegion,
  CS as Login,
  AS as Markdown,
  aO as Mask,
  BO as MediaQuery,
  uw as Menu,
  Rl as MenuItem,
  iO as Numeric,
  Ac as Pager,
  vO as PanelMenu,
  xO as PanelMenuItem,
  mf as Password,
  AO as PickList,
  IO as Pivot,
  IS as PopupProvider,
  wO as ProfileMenu,
  qS as Progress,
  RO as QRCode,
  sO as RadioButtonList,
  uO as Rating,
  RS as Row,
  DO as Scheduler,
  pO as SecurityCode,
  or as Select,
  oO as SelectBar,
  Zb as Sidebar,
  US as SidebarToggle,
  mO as SignaturePad,
  LS as Skeleton,
  fO as Slider,
  lO as SplitButton,
  $O as Splitter,
  jS as Stack,
  rS as Stat,
  OO as Steps,
  kS as Switch,
  sS as Table,
  ZS as Tabs,
  yl as Text,
  QS as TextArea,
  eo as TextBox,
  WS as ThemeSwitcher,
  KS as ThemeToggle,
  _O as TimeSpanPicker,
  zO as Timeline,
  ES as ToastProvider,
  EO as Toc,
  xy as ToggleButton,
  NS as Tooltip,
  CO as Tree,
  hO as Upload,
  LO as VirtualGrid,
  jc as aggregateValue,
  hl as applyFilters,
  Pc as applyGridState,
  xo as collectGroupKeys,
  nr as columnValue,
  mS as compare,
  gS as custom,
  zc as cycleSort,
  wo as defaultOperatorForType,
  dS as email,
  Jo as formatMasked,
  _s as formatValue,
  VS as getAppearance,
  fs as getByPath,
  GS as getTheme,
  Dc as groupItems,
  nS as iconNames,
  ml as matchesFilters,
  _S as maxLength,
  fS as minLength,
  Rc as paginate,
  uS as pattern,
  pS as range,
  s_ as renderMarkdown,
  cS as required,
  hS as requiredTrue,
  fl as resolveVariant,
  Pi as runValidators,
  Sy as setAppearance,
  Ny as setTheme,
  Wr as shadeClass,
  tc as sortItems,
  Lc as sortedItems,
  Xo as subscribe,
  Bc as toCsv,
  Xi as toFilterString,
  ec as toODataFilterString,
  bO as useContextMenu,
  SS as useDialog,
  Ri as useFormContext,
  bS as useFormField,
  HO as useLiveRegion,
  no as useMediaQuery,
  MS as usePopup,
  YS as useThemeService,
  $S as useToast
};
