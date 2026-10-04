import { jsx as o, jsxs as M, Fragment as kt } from "react/jsx-runtime";
import { forwardRef as rt, useId as nt, isValidElement as Ut, cloneElement as Hs, useState as K, useRef as re, useCallback as B, useMemo as Se, useContext as Ln, createContext as or, useEffect as be, Fragment as Us, useLayoutEffect as As, Children as Hr, useImperativeHandle as qs } from "react";
function Fr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Cl = "_button_eyvws_1", Dl = "_filled_eyvws_36", Ml = "_flat_eyvws_55", Il = "_outlined_eyvws_58", zl = "_text_eyvws_63", Ll = "_loading_eyvws_506", Rl = "_spinner_eyvws_509", Pl = "_xs_eyvws_525", jl = "_sm_eyvws_531", Bl = "_md_eyvws_537", Fl = "_lg_eyvws_543", Hl = "_xl_eyvws_549", Ul = "_iconOnly_eyvws_555", ql = "_fullWidth_eyvws_585", En = {
  button: Cl,
  filled: Dl,
  flat: Ml,
  outlined: Il,
  text: zl,
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
  loading: Ll,
  spinner: Rl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: Pl,
  sm: jl,
  md: Bl,
  lg: Fl,
  xl: Hl,
  iconOnly: Ul,
  fullWidth: ql
};
function Kl(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const rr = rt(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: a = "default",
      size: d = "md",
      fullWidth: s = !1,
      iconOnly: i = !1,
      loading: c = !1,
      visible: f = !0,
      className: u,
      disabled: x,
      children: g,
      ...y
    } = t;
    if (f === !1) return null;
    const m = Kl(r, l), _ = m.style === "light" || m.style === "dark" ? null : Fr(a), p = [
      En.button,
      En[m.variant],
      En[`style-${m.style}`],
      _ ? En[_] : null,
      En[d],
      s ? En.fullWidth : null,
      i ? En.iconOnly : null,
      c ? En.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), v = /* @__PURE__ */ M(kt, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: En.spinner }) : null,
      g
    ] }), S = t.href;
    if (S != null) {
      const { onClick: k, ...E } = y, C = x || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: S,
          className: p,
          "aria-disabled": C || void 0,
          "aria-busy": c || void 0,
          onClick: (A) => {
            if (C) {
              A.preventDefault();
              return;
            }
            k?.(A);
          },
          ...E,
          children: v
        }
      );
    }
    const { type: h = "button", ...$ } = y;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: h,
        className: p,
        disabled: x || c,
        "aria-busy": c || void 0,
        ...$,
        children: v
      }
    );
  }
), Wl = "_card_4vcae_1", Gl = "_elevated_4vcae_8", Vl = "_filled_4vcae_13", Yl = "_outlined_4vcae_18", Xl = "_interactive_4vcae_22", Zl = "_text_4vcae_30", Jl = "_header_4vcae_46", Ql = "_body_4vcae_53", ea = "_footer_4vcae_63", xr = {
  card: Wl,
  elevated: Gl,
  filled: Vl,
  outlined: Yl,
  interactive: Xl,
  text: Zl,
  header: Jl,
  body: Ql,
  footer: ea
}, fO = rt(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: a = !0,
  children: d,
  onKeyDown: s,
  ...i
}, c) {
  if (a === !1) return null;
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
        onKeyDown: (u) => {
          s?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [xr.card, xr[t], l].filter(Boolean).join(" "),
        ...i,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: xr.header, children: n }),
          /* @__PURE__ */ o("div", { className: xr.body, children: d }),
          r != null && /* @__PURE__ */ o("div", { className: xr.footer, children: r })
        ]
      }
    )
  );
});
function el(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const ta = "_badge_1fy6d_1", na = "_xs_1fy6d_21", ra = "_sm_1fy6d_26", sa = "_md_1fy6d_31", oa = "_lg_1fy6d_36", la = "_xl_1fy6d_41", aa = "_neutral_1fy6d_47", ia = "_primary_1fy6d_52", ca = "_secondary_1fy6d_61", da = "_light_1fy6d_66", ua = "_base_1fy6d_71", fa = "_dark_1fy6d_76", _a = "_info_1fy6d_81", pa = "_success_1fy6d_86", ha = "_warning_1fy6d_95", ma = "_danger_1fy6d_104", ga = "_filled_1fy6d_111", ba = "_outlined_1fy6d_161", ya = "_text_1fy6d_213", vr = {
  badge: ta,
  xs: na,
  sm: ra,
  md: sa,
  lg: oa,
  xl: la,
  neutral: aa,
  primary: ia,
  secondary: ca,
  light: da,
  base: ua,
  dark: fa,
  info: _a,
  success: pa,
  warning: ha,
  danger: ma,
  filled: ga,
  outlined: ba,
  text: ya,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, _O = rt(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: a,
  visible: d = !0,
  children: s,
  ...i
}, c) {
  if (d === !1) return null;
  const f = t, u = el(n, "filled"), x = Fr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        vr.badge,
        vr[l],
        vr[f],
        vr[u],
        x ? vr[x] : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: s
    }
  );
}), xa = "_icon_vn4jx_5", va = "_xs_vn4jx_24", wa = "_sm_vn4jx_28", ka = "_md_vn4jx_23", Oa = "_lg_vn4jx_36", Sa = "_xl_vn4jx_40", no = {
  icon: xa,
  xs: va,
  sm: wa,
  md: ka,
  lg: Oa,
  xl: Sa
}, pO = [
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
], Te = rt(function({ icon: t, size: n, color: r, className: l, style: a, ...d }, s) {
  const i = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [no.icon, i ? no[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...i || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...r === void 0 ? null : { color: r },
        ...a
      },
      "aria-hidden": "true",
      ...d,
      children: t
    }
  );
}), Na = "_stat_sjin9_1", $a = "_label_sjin9_8", Ea = "_row_sjin9_16", Ta = "_value_sjin9_22", Aa = "_delta_sjin9_28", Ca = "_success_sjin9_33", Da = "_danger_sjin9_37", Ma = "_neutral_sjin9_41", Ia = "_hint_sjin9_45", Gn = {
  stat: Na,
  label: $a,
  row: Ea,
  value: Ta,
  delta: Aa,
  success: Ca,
  danger: Da,
  neutral: Ma,
  hint: Ia
}, hO = rt(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: a, className: d, ...s }, i) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: i,
      className: [Gn.stat, d].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Gn.label, children: t }),
        /* @__PURE__ */ M("div", { className: Gn.row, children: [
          /* @__PURE__ */ o("div", { className: Gn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Gn.delta, Gn[l]].join(" "), children: r })
        ] }),
        a != null && /* @__PURE__ */ o("div", { className: Gn.hint, children: a })
      ]
    }
  );
}), za = "_wrap_ipozk_1", La = "_table_ipozk_8", Ra = "_caption_ipozk_14", Pa = "_none_ipozk_51", ja = "_horizontal_ipozk_57", Ba = "_vertical_ipozk_67", Fa = "_alternating_ipozk_85", Ha = "_start_ipozk_89", Ua = "_center_ipozk_93", qa = "_end_ipozk_97", Ka = "_empty_ipozk_101", Pn = {
  wrap: za,
  table: La,
  caption: Ra,
  none: Pa,
  horizontal: ja,
  vertical: Ba,
  alternating: Fa,
  start: Ha,
  center: Ua,
  end: qa,
  empty: Ka
};
function mO({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: a = "default",
  allowAlternatingRows: d = !0,
  className: s,
  visible: i = !0
}) {
  if (i === !1) return null;
  const c = a === "default" || a === "both" ? "" : Pn[a];
  return /* @__PURE__ */ M("div", { className: [Pn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          Pn.table,
          c,
          d ? Pn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ o("caption", { className: Pn.caption, children: l }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Pn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? Pn[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Pn.empty, children: r })
  ] });
}
const Wa = "_emptyState_1swxw_1", Ga = "_icon_1swxw_13", Va = "_title_1swxw_18", Ya = "_description_1swxw_24", Xa = "_action_1swxw_30", wr = {
  emptyState: Wa,
  icon: Ga,
  title: Va,
  description: Ya,
  action: Xa
};
function gO({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: a = !0
}) {
  return a === !1 ? null : /* @__PURE__ */ M("div", { className: [wr.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: wr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: wr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: wr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: wr.action, children: r })
  ] });
}
const Za = "_field_149oz_1", Ja = "_label_149oz_8", Qa = "_required_149oz_14", ei = "_hint_149oz_19", ti = "_error_149oz_24", kr = {
  field: Za,
  label: Ja,
  required: Qa,
  hint: ei,
  error: ti
};
function bO({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: a,
  children: d,
  className: s,
  visible: i = !0
}) {
  const c = r ?? l, f = nt(), u = nt(), x = nt();
  if (i === !1) return null;
  const g = a != null ? u : c != null ? x : null, y = typeof d == "function" ? d({ inputId: f, hintId: x, errorId: u }) : d, m = Ut(y) && typeof y.props.id == "string" ? y.props.id : void 0, b = m ?? t ?? f, _ = Ut(y) && (g != null || m == null && typeof y.type == "string"), p = m != null || t != null || _, v = _ && Ut(y) ? Hs(y, {
    id: b,
    "aria-describedby": g != null ? [
      y.props["aria-describedby"],
      g
    ].filter((S) => typeof S == "string").join(" ") || void 0 : y.props["aria-describedby"],
    "aria-invalid": a != null ? !0 : y.props["aria-invalid"]
  }) : y;
  return /* @__PURE__ */ M("div", { className: [kr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: kr.label,
        htmlFor: p ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: kr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    v,
    a != null ? /* @__PURE__ */ o("div", { id: u, className: kr.error, "aria-live": "polite", children: a }) : c != null ? /* @__PURE__ */ o("div", { id: x, className: kr.hint, children: c }) : null
  ] });
}
const ni = "_formfield_6e25e_1", ri = "_content_6e25e_8", si = "_floating_6e25e_43", oi = "_label_6e25e_111", li = "_start_6e25e_132", ai = "_required_6e25e_169", ii = "_end_6e25e_175", ci = "_filled_6e25e_192", di = "_flat_6e25e_199", ui = "_helper_6e25e_206", fi = "_invalid_6e25e_211", vn = {
  formfield: ni,
  content: ri,
  floating: si,
  label: oi,
  start: li,
  required: ai,
  end: ii,
  filled: ci,
  flat: di,
  helper: ui,
  invalid: fi
};
function yO({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: a = !0,
  variant: d = "outlined",
  invalid: s = !1,
  required: i = !1,
  children: c,
  className: f,
  visible: u = !0
}) {
  const x = nt(), g = nt();
  if (u === !1) return null;
  const y = l ?? x, m = typeof c == "function" ? c({
    inputId: y
  }) : c, b = Ut(m) ? m.type : null, _ = typeof b == "string", p = Ut(m) && typeof b != "symbol", v = Ut(m) ? m.props : null, S = typeof v?.id == "string" ? v.id : void 0, h = _ && Ut(m) ? m.type.toLowerCase() : null, $ = h != null && (h === "input" ? typeof v?.type != "string" || v.type.toLowerCase() !== "hidden" : h === "button" || h === "meter" || h === "output" || h === "progress" || h === "select" || h === "textarea"), k = p && (r != null || s || S == null && $), E = S != null || l != null || k, C = h === "input" && typeof v?.type == "string" ? v.type.toLowerCase() : null, A = h === "textarea" || h === "input" && (C == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(C)), D = k && Ut(m) ? Hs(
    m,
    {
      id: S ?? y,
      ...a && A && v?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          v?.["aria-describedby"],
          g
        ].filter((O) => typeof O == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, z = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: vn.label,
      htmlFor: E ? S ?? y : void 0,
      children: [
        e,
        i === !0 && /* @__PURE__ */ o("span", { className: vn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        vn.formfield,
        vn[d],
        a ? vn.floating : null,
        s ? vn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        a ? null : z,
        /* @__PURE__ */ M("div", { className: vn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: vn.start, children: t }),
          D,
          a ? z : null,
          n != null && /* @__PURE__ */ o("div", { className: vn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: g, className: vn.helper, children: r })
      ]
    }
  );
}
const _i = "_fieldset_8x01p_1", pi = "_legend_8x01p_11", hi = "_legendText_8x01p_20", mi = "_toggle_8x01p_24", gi = "_content_8x01p_45", bi = "_summary_8x01p_49", Vn = {
  fieldset: _i,
  legend: pi,
  legendText: hi,
  toggle: mi,
  content: gi,
  summary: bi
};
function xO({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: a,
  defaultCollapsed: d = !1,
  summary: s,
  expandTitle: i,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: x,
  onCollapse: g,
  children: y,
  className: m,
  visible: b = !0
}) {
  const _ = nt(), [p, v] = K(d);
  if (b === !1) return null;
  const S = a ?? p, h = l ? `${_}-content` : void 0, $ = () => {
    const z = !S;
    a === void 0 && v(z), z ? g?.() : x?.();
  }, k = l || e != null || n != null || t != null, E = l ? S : !1, C = l && S && s != null, A = E ? i ?? "Expand" : c ?? "Collapse", D = E ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [Vn.fieldset, m].filter(Boolean).join(" "),
      children: [
        k ? /* @__PURE__ */ o("legend", { className: Vn.legend, children: l ? /* @__PURE__ */ M(kt, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Vn.toggle,
              title: A,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !E,
              "aria-controls": h,
              onClick: $,
              children: [
                /* @__PURE__ */ o(
                  Te,
                  {
                    icon: E ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Te, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: Vn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(kt, { children: [
          n != null && /* @__PURE__ */ o(Te, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Vn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Vn.content,
            id: h,
            hidden: E,
            children: y
          }
        ),
        C ? /* @__PURE__ */ o("div", { className: Vn.summary, children: s }) : null
      ]
    }
  );
}
const yi = "_form_abp5n_1", xi = {
  form: yi
}, tl = or(null);
function vi() {
  const e = Ln(tl);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function vO({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: a,
  className: d
}) {
  const [s, i] = K({}), [c, f] = K(0), u = re(s);
  u.current = s;
  const x = B((v) => {
    i(
      (S) => S[v.name] === v ? S : { ...S, [v.name]: v }
    );
  }, []), g = B((v) => {
    i((S) => {
      if (!(v in S)) return S;
      const h = { ...S };
      return delete h[v], h;
    });
  }, []), y = B(() => {
    const v = {};
    for (const S of Object.values(u.current)) {
      const h = S.validate();
      h.length > 0 && (v[S.name] = h);
    }
    return v;
  }, []), m = B(() => {
    const v = y();
    f((S) => S + 1), Object.keys(v).length === 0 ? t?.(e) : n?.(v);
  }, [y, e, t, n]), b = (v) => {
    r != null && l != null || (v.preventDefault(), m());
  }, _ = Se(
    () => ({ registerField: x, unregisterField: g, submit: m, submitCount: c }),
    [x, g, m, c]
  ), p = [xi.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(tl.Provider, { value: _, children: /* @__PURE__ */ o(
    "form",
    {
      className: p,
      onSubmit: b,
      action: r,
      method: l,
      noValidate: !0,
      children: a
    }
  ) });
}
const lr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", wO = (e = "Required") => (t) => lr(t) ? e : null, kO = (e = "Invalid email") => (t) => lr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, OO = (e, t = "Invalid format") => (n) => lr(n) || e.test(String(n)) ? null : t, SO = (e, t = `Minimum ${e} characters`) => (n) => lr(n) || String(n).length >= e ? null : t, NO = (e, t = `Maximum ${e} characters`) => (n) => lr(n) || String(n).length <= e ? null : t, $O = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (lr(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, EO = (e, t = "Values do not match") => (n, r) => {
  if (lr(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, TO = (e = "Required") => (t) => t === !0 ? null : e, AO = (e) => (t, n) => e(t, n);
function wi(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function CO(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = vi(), [a, d] = K(t?.initialValue), [s, i] = K(!1), [c, f] = K(!1), u = re(() => []);
  u.current = () => wi(t?.validate ?? [], a), be(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), be(() => {
    l > 0 && (i(!0), f(!1));
  }, [l]);
  const x = s && !c ? u.current() : [];
  return { value: a, setValue: (y) => {
    d(y), f(!0);
  }, errors: x };
}
const ki = "_select_1xe98_1", Oi = "_invalid_1xe98_33", Si = "_xs_1xe98_40", Ni = "_sm_1xe98_48", $i = "_md_1xe98_56", Ei = "_lg_1xe98_62", Ti = "_xl_1xe98_68", gs = {
  select: ki,
  invalid: Oi,
  xs: Si,
  sm: Ni,
  md: $i,
  lg: Ei,
  xl: Ti
}, sr = rt(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: a, ...d }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          gs.select,
          gs[t],
          n ? gs.invalid : null,
          a
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((i) => /* @__PURE__ */ o(
          "option",
          {
            value: i.value,
            disabled: i.disabled,
            children: i.label
          },
          i.value
        )) : l
      }
    );
  }
), nl = [
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
}, Ai = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Ci(e) {
  return Ai.includes(e);
}
function os(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function ro(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Pr(e, t) {
  const n = ro(e), r = ro(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), a = String(r ?? "");
  return l < a ? -1 : l > a ? 1 : 0;
}
function ds(e) {
  if (e.secondOperator == null) return !1;
  if (Ci(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function so(e, t, n) {
  const r = os(t, e.property), l = oo(
    r,
    e.value,
    e.operator,
    n
  );
  if (!ds(e)) return l;
  const a = oo(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && a : l || a;
}
function oo(e, t, n, r) {
  const l = r === "CaseInsensitive", a = (i) => l && typeof i == "string" ? i.toLowerCase() : i, d = a(e), s = a(t);
  switch (n) {
    case "Equals":
      return d === s || Array.isArray(d) && d.some((i) => a(i) === s);
    case "NotEquals":
      return d !== s && !(Array.isArray(d) && d.some((i) => a(i) === s));
    case "LessThan":
      return Pr(d, s) < 0;
    case "LessThanOrEquals":
      return Pr(d, s) <= 0;
    case "GreaterThan":
      return Pr(d, s) > 0;
    case "GreaterThanOrEquals":
      return Pr(d, s) >= 0;
    case "Contains":
      return typeof d == "string" && typeof s == "string" && d.includes(s);
    case "StartsWith":
      return typeof d == "string" && typeof s == "string" && d.startsWith(s);
    case "EndsWith":
      return typeof d == "string" && typeof s == "string" && d.endsWith(s);
    case "DoesNotContain":
      return typeof d == "string" && typeof s == "string" && !d.includes(s);
    case "In":
      return Array.isArray(s) && s.some((i) => a(i) === d);
    case "NotIn":
      return Array.isArray(s) && !s.some((i) => a(i) === d);
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
function Ks(e) {
  return "filters" in e;
}
function rl(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Ks(t)) {
    if (t.filters.length === 0) return !0;
    const a = t.operator ?? r;
    return t.filters[a === "Or" ? "some" : "every"](
      (d) => rl(e, d, { logicalOperator: a, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", so(t, e, l);
}
function sl(e, t, n = {}) {
  return e.filter((r) => rl(r, t, n));
}
function Di(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function nn(e) {
  return typeof e == "string" ? `"${Di(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(nn).join(", ")}]` : `"${String(e)}"`;
}
function Mi(e) {
  const t = (l, a) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${nn(a)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${nn(a)})`;
      case "LessThan":
        return `${e.property}.LessThan(${nn(a)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${nn(a)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${nn(a)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${nn(a)})`;
      case "Contains":
        return `${e.property}.Contains(${nn(a)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${nn(a)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${nn(a)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${nn(a)})`;
      case "In":
        return `${e.property}.In(${nn(a)})`;
      case "NotIn":
        return `!${e.property}.In(${nn(a)})`;
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
  if (!ds(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function Ii(e) {
  return Ks(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Ii).filter(Boolean).join(` ${e.operator} `)})` : Mi(e);
}
function zi(e) {
  return e.replace(/'/g, "''");
}
const Li = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Ri(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, a = (c) => typeof c == "string" ? `'${zi(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", x = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${Li[c]} ${u && r ? l(a(f)) : a(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(a(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(a(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(a(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(a(f))}))`;
      case "In":
        return Array.isArray(f) ? `${x} in (${f.map((g) => a(g)).join(", ")})` : `${x} in (${a(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${x} in (${f.map((g) => a(g)).join(", ")}))` : `not(${x} in (${a(f)}))`;
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
  if (!ds(e))
    return d(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", i = e.secondOperator;
  return `(${d(e.operator, e.value)} ${s} ${d(
    i,
    e.secondValue
  )})`;
}
function Pi(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Ks(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Pi(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Ri(e, n);
}
function ji(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const a = l.sortOrder === "Ascending" ? 1 : -1, d = Pr(
        os(n, l.property),
        os(r, l.property)
      );
      if (d !== 0) return d * a;
    }
    return 0;
  });
}
const Bi = "_filter_1dvqt_1", Fi = "_rows_1dvqt_9", Hi = "_row_1dvqt_9", Ui = "_join_1dvqt_21", qi = "_property_1dvqt_30", Ki = "_operator_1dvqt_34", Wi = "_value_1dvqt_38", Gi = "_remove_1dvqt_42", Vi = "_bar_1dvqt_58", Yi = "_add_1dvqt_64", Xi = "_custom_1dvqt_78", Zi = "_summary_1dvqt_82", Ji = "_second_1dvqt_87", Qi = "_secondAdd_1dvqt_91", ec = "_addSecond_1dvqt_95", tc = "_joinSelect_1dvqt_109", pt = {
  filter: Bi,
  rows: Fi,
  row: Hi,
  join: Ui,
  property: qi,
  operator: Ki,
  value: Wi,
  remove: Gi,
  bar: Vi,
  add: Yi,
  custom: Xi,
  summary: Zi,
  second: Ji,
  secondAdd: Qi,
  addSecond: ec,
  joinSelect: tc
}, Sr = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], lo = {
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
function ao({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(kt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      sr,
      {
        "aria-label": e.title ?? e.name,
        className: pt.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (a) => n(a.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      sr,
      {
        "aria-label": e.title ?? e.name,
        className: pt.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (a) => {
          a.target.value === "" ? n(void 0) : n(a.target.value === "true");
        }
      }
    );
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: pt.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (a) => n(
        r === "number" && a.target.value !== "" ? Number(a.target.value) : a.target.value
      )
    }
  );
}
function DO({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: a,
  viewChanged: d,
  items: s,
  children: i
}) {
  const [c, f] = K(
    () => r != null && r.length > 0 ? r.map((_, p) => ({ id: p, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Or[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (_, p) => {
    f(
      (v) => v.map((S) => S.id === _ ? { ...S, ...p } : S)
    );
  }, x = () => {
    const _ = c[c.length - 1], p = Math.max(0, ...c.map((S) => S.id)) + 1, v = e[0];
    f((S) => [
      ...S,
      {
        id: p,
        property: _?.property ?? v?.name ?? "",
        operator: Or[e.find(
          (h) => h.name === (_?.property ?? v?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, g = (_) => {
    f(
      (p) => p.length > 1 ? p.filter((v) => v.id !== _) : p
    );
  }, y = Se(() => {
    const _ = [];
    for (const p of c) {
      if (p.property === "" || (p.value == null || p.value === "") && !Sr.includes(p.operator)) continue;
      const S = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: h } = p;
      h != null && ds(p) && (S.secondOperator = h, S.secondValue = p.secondValue, S.logicalOperator = p.logicalOperator ?? "And"), _.push(S);
    }
    return _;
  }, [c]), m = Se(() => s == null || y.length === 0 ? s : sl(s, {
    operator: t,
    filters: y
  }, {
    caseSensitivity: n
  }), [s, y, t, n]);
  be(() => {
    d != null && s != null && d(m ?? []);
  }, [m]);
  const b = (_) => e.find((p) => p.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ M("div", { className: [pt.filter, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: pt.rows, role: "group", "aria-label": "Filter conditions", children: c.map((_, p) => {
      const v = b(_.property), S = l ? [Or[v.type ?? "string"]] : nl, h = !Sr.includes(_.operator), $ = _.secondOperator != null;
      return /* @__PURE__ */ M(Us, { children: [
        /* @__PURE__ */ M("div", { className: pt.row, children: [
          p > 0 ? /* @__PURE__ */ o("span", { className: pt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            sr,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: pt.property,
              value: _.property,
              onChange: (k) => {
                const E = e.find(
                  (C) => C.name === k.target.value
                );
                u(_.id, {
                  property: k.target.value,
                  operator: Or[E?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((k) => ({
                value: k.name,
                label: k.title ?? k.name
              }))
            }
          ),
          /* @__PURE__ */ o(
            sr,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: pt.operator,
              value: _.operator,
              onChange: (k) => {
                const E = k.target.value;
                u(
                  _.id,
                  Sr.includes(E) ? {
                    operator: E,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: E }
                );
              },
              options: S.map((k) => ({
                value: k,
                label: lo[k]
              }))
            }
          ),
          h ? /* @__PURE__ */ o(
            ao,
            {
              property: v,
              value: _.value,
              onChange: (k) => u(_.id, { value: k })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: pt.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => g(_.id),
              children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
            }
          )
        ] }),
        h ? $ ? /* @__PURE__ */ M(
          "div",
          {
            className: [pt.row, pt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                sr,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: pt.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (k) => u(_.id, {
                    logicalOperator: k.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                sr,
                {
                  "aria-label": `Condition ${p + 1} second operator`,
                  className: pt.operator,
                  value: _.secondOperator,
                  onChange: (k) => {
                    const E = k.target.value;
                    u(
                      _.id,
                      Sr.includes(E) ? { secondOperator: E, secondValue: void 0 } : { secondOperator: E }
                    );
                  },
                  options: S.map((k) => ({
                    value: k,
                    label: lo[k]
                  }))
                }
              ),
              _.secondOperator == null || !Sr.includes(_.secondOperator) ? /* @__PURE__ */ o(
                ao,
                {
                  property: v,
                  value: _.secondValue,
                  onChange: (k) => u(_.id, { secondValue: k })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: pt.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => u(_.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: pt.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: pt.addSecond,
            onClick: () => u(_.id, {
              secondOperator: Or[v.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ M("div", { className: pt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: pt.add, onClick: x, children: "Add filter" }),
      i != null ? /* @__PURE__ */ o("div", { className: pt.custom, children: i }) : null,
      s != null ? /* @__PURE__ */ M("span", { className: pt.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const nc = "_pager_1du31_1", rc = "_alignLeft_1du31_10", sc = "_alignCenter_1du31_14", oc = "_alignRight_1du31_18", lc = "_alignJustify_1du31_22", ac = "_summary_1du31_26", ic = "_controls_1du31_31", cc = "_button_1du31_37", dc = "_active_1du31_73", uc = "_ellipsis_1du31_85", fc = "_size_1du31_91", Bt = {
  pager: nc,
  alignLeft: rc,
  alignCenter: sc,
  alignRight: oc,
  alignJustify: lc,
  summary: ac,
  controls: ic,
  button: cc,
  active: dc,
  ellipsis: uc,
  size: fc
};
function _c(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function io(e, t) {
  return e.replace("{0}", String(t));
}
function pc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (s, i) => i + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const a = Math.min(t, l + n - 1);
  l = Math.max(1, a - n + 1);
  const d = [];
  for (let s = l; s <= a; s++) d.push(s);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), a < t - 1 && d.push("ellipsis"), a < t && d.push(t), d;
}
function hc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: a = 5,
  alwaysVisible: d = !1,
  horizontalAlign: s = "left",
  showPagingSummary: i,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: x = "Items per page",
  firstPageTitle: g = "First page",
  prevPageTitle: y = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: v,
  onPageSizeChange: S,
  ariaLabel: h = "Pagination",
  className: $,
  visible: k = !0
}) {
  const E = n ?? r, [C, A] = K(E), D = n !== void 0, z = D ? E : C, O = Math.max(1, Math.ceil(e / t)), N = Math.min(Math.max(1, z), O), T = i ?? !0, P = d || O > 1, L = pc(N, O, a), H = B(
    (ee) => {
      const we = Math.min(Math.max(1, ee), O);
      D || A(we);
      const se = (we - 1) * t;
      v?.({
        page: we,
        skip: se,
        top: t,
        pageCount: O,
        pageSize: t
      });
    },
    [D, v, O, t]
  ), F = s === "center" ? Bt.alignCenter : s === "right" ? Bt.alignRight : s === "justify" ? Bt.alignJustify : Bt.alignLeft, Y = {
    count: e,
    pageNumber: N,
    pageSize: t,
    pageCount: O
  }, ae = (ee) => {
    const we = Array.from(
      ee.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), se = we.indexOf(document.activeElement);
    se !== -1 && (ee.key === "ArrowRight" || ee.key === "ArrowDown" ? (ee.preventDefault(), (we[se + 1] ?? we[0])?.focus()) : ee.key === "ArrowLeft" || ee.key === "ArrowUp" ? (ee.preventDefault(), (we[se - 1] ?? we[we.length - 1])?.focus()) : ee.key === "Home" ? (ee.preventDefault(), we[0]?.focus()) : ee.key === "End" && (ee.preventDefault(), we[we.length - 1]?.focus()));
  };
  return k === !1 || !P ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [Bt.pager, F, $].filter(Boolean).join(" "),
      "aria-label": h,
      children: [
        T && /* @__PURE__ */ o("span", { className: Bt.summary, "aria-live": "polite", children: u ? u(Y) : _c(f, N, O, e) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: Bt.controls,
            role: "group",
            "aria-label": h,
            onKeyDown: ae,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Bt.button,
                  disabled: N <= 1,
                  onClick: () => H(1),
                  "aria-label": g,
                  title: g,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Bt.button,
                  disabled: N <= 1,
                  onClick: () => H(N - 1),
                  "aria-label": y,
                  title: y,
                  children: "‹"
                }
              ),
              L.map(
                (ee, we) => ee === "ellipsis" ? /* @__PURE__ */ o("span", { className: Bt.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": ee,
                    className: [Bt.button, ee === N ? Bt.active : ""].filter(Boolean).join(" "),
                    "aria-current": ee === N ? "page" : void 0,
                    "aria-label": io(p, ee),
                    title: io(_, ee),
                    onClick: () => H(ee),
                    children: ee
                  },
                  ee
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Bt.button,
                  disabled: N >= O,
                  onClick: () => H(N + 1),
                  "aria-label": m,
                  title: m,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Bt.button,
                  disabled: N >= O,
                  onClick: () => H(O),
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ M("label", { className: Bt.size, children: [
          /* @__PURE__ */ o("span", { children: x }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (ee) => S?.(Number(ee.target.value)),
              "aria-label": x,
              children: l.map((ee) => /* @__PURE__ */ o("option", { value: ee, children: ee }, ee))
            }
          )
        ] })
      ]
    }
  );
}
function Cs(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...a } = e;
  return /* @__PURE__ */ o(
    hc,
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
      ...a
    }
  );
}
const ol = "";
function mc(e, t, n, r, l) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const a = (s) => n.find((i) => i.property === s), d = (s, i, c) => {
    const f = t[i];
    if (f === void 0)
      return s.map((m) => ({ type: "row", row: m }));
    const u = a(f), x = /* @__PURE__ */ new Map(), g = [];
    s.forEach((m) => {
      const b = String(l(m, f) ?? ""), _ = x.get(b);
      _ ? _.push(m) : (x.set(b, [m]), g.push(b));
    });
    const y = [];
    return g.forEach((m) => {
      const b = x.get(m), _ = [...c, m].join(ol), p = b[0], v = p !== void 0 ? l(p, f) : void 0;
      y.push({
        type: "group",
        group: {
          key: _,
          display: ls(v, u?.format),
          property: f,
          title: u?.title ?? f,
          count: b.length,
          level: i
        }
      }), r.has(_) && y.push(...d(b, i + 1, [...c, m]));
    }), y;
  };
  return d(e, 0, []);
}
function co(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (a, d, s) => {
    const i = t[d];
    if (i === void 0 || a.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    a.forEach((u) => {
      const x = String(n(u, i) ?? ""), g = c.get(x);
      g ? g.push(u) : (c.set(x, [u]), f.push(x));
    }), f.forEach((u) => {
      const x = [...s, u].join(ol);
      r.add(x), l(c.get(u), d + 1, [...s, u]);
    });
  };
  return l(e, 0, []), r;
}
function Gr(e, t) {
  return e.property ?? `col-${t}`;
}
function gc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: a }) => {
    if (!a.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? a.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function bc(e, t) {
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
function tr(e, t) {
  if (t != null)
    return os(e, t);
}
function ls(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const uo = [
  "Ascending",
  "Descending",
  null
];
function yc(e, t, n = {}) {
  const r = e.find((a) => a.property === t), l = uo[(r ? uo.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((a) => a.property !== t) : n.multi ? [
    ...e.filter((a) => a.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function xc(e, t) {
  return ji(e, t);
}
function vc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), a = (l - 1) * n;
  return {
    items: e.slice(a, a + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function wc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, i]) => ({
      property: s,
      operator: i.operator ?? "Contains",
      value: bc(
        i.value,
        n.types?.[s] ?? "string"
      )
    })
  ), l = r.length > 0 ? sl(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, a = xc(l, t.sorts);
  return {
    ...vc(a, t.pageNumber, t.pageSize),
    filtered: a,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function fo(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function kc(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const a = n(l, t.property);
    if (a == null || a === "") return;
    const d = Number(a);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, a) => l + a, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, a) => l + a, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Oc(e, t, n = tr) {
  const r = (a) => /["\r\n,]/.test(a) ? `"${a.replace(/"/g, '""')}"` : a, l = [
    t.map((a) => r(a.title ?? a.property ?? "")).join(",")
  ];
  return e.forEach((a) => {
    l.push(
      t.map((d) => r(ls(n(a, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Sc = "_grid_13rur_1", Nc = "_toolbar_13rur_8", $c = "_picker_13rur_13", Ec = "_pickerButton_13rur_17", Tc = "_pickerPanel_13rur_31", Ac = "_pickerItem_13rur_46", Cc = "_groupPanel_13rur_55", Dc = "_groupPanelActive_13rur_66", Mc = "_groupPanelText_13rur_70", Ic = "_groupChip_13rur_74", zc = "_groupRemove_13rur_85", Lc = "_groupRow_13rur_94", Rc = "_groupCell_13rur_98", Pc = "_groupToggle_13rur_104", jc = "_editRow_13rur_117", Bc = "_editCell_13rur_121", Fc = "_editInput_13rur_127", Hc = "_commandCell_13rur_137", Uc = "_commandButton_13rur_144", qc = "_data_13rur_159", Kc = "_table_13rur_166", Wc = "_header_13rur_172", Gc = "_center_13rur_185", Vc = "_right_13rur_189", Yc = "_sortButton_13rur_193", Xc = "_sortIndicator_13rur_211", Zc = "_sortIndex_13rur_215", Jc = "_cell_13rur_226", Qc = "_clickable_13rur_241", ed = "_frozen_13rur_249", td = "_selected_13rur_255", nd = "_resizeHandle_13rur_263", rd = "_filterCell_13rur_281", sd = "_filterSelect_13rur_290", od = "_filterInput_13rur_300", ld = "_empty_13rur_311", ad = "_loading_13rur_317", id = "_visuallyHidden_13rur_331", cd = "_virtualScroller_13rur_340", dd = "_spacerRow_13rur_345", ud = "_footerRow_13rur_350", fd = "_footerCell_13rur_354", _d = "_footerValue_13rur_361", Oe = {
  grid: Sc,
  toolbar: Nc,
  picker: $c,
  pickerButton: Ec,
  pickerPanel: Tc,
  pickerItem: Ac,
  groupPanel: Cc,
  groupPanelActive: Dc,
  groupPanelText: Mc,
  groupChip: Ic,
  groupRemove: zc,
  groupRow: Lc,
  groupCell: Rc,
  groupToggle: Pc,
  editRow: jc,
  editCell: Bc,
  editInput: Fc,
  commandCell: Hc,
  commandButton: Uc,
  data: qc,
  table: Kc,
  header: Wc,
  center: Gc,
  right: Vc,
  sortButton: Yc,
  sortIndicator: Xc,
  sortIndex: Zc,
  cell: Jc,
  clickable: Qc,
  frozen: ed,
  selected: td,
  resizeHandle: nd,
  filterCell: rd,
  filterSelect: sd,
  filterInput: od,
  empty: ld,
  loading: ad,
  visuallyHidden: id,
  virtualScroller: cd,
  spacerRow: dd,
  footerRow: ud,
  footerCell: fd,
  footerValue: _d
}, pd = {
  Ascending: "ascending",
  Descending: "descending"
};
function _o(e, t) {
  return e.filterable ?? t;
}
function hd(e, t) {
  return e.sortable ?? t;
}
function md(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function MO({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: a = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: x = 5,
  pagerPosition: g = "Bottom",
  showPagingSummary: y = !0,
  showPageSizeSelector: m = !0,
  selectionMode: b = "None",
  selectedKeys: _,
  onSelectionChange: p,
  showColumnPicker: v = !1,
  columnPickerText: S = "Columns",
  allowColumnResize: h = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: k = !1,
  groupPanelText: E = "Drag a column header here to group",
  groupExpanded: C = !0,
  aggregates: A,
  showExportButton: D = !1,
  exportFileName: z = "grid-data",
  serverMode: O = !1,
  totalCount: N,
  onRangeChange: T,
  virtualize: P = !1,
  virtualRowHeight: L = 40,
  virtualHeight: H = 480,
  editMode: F = "None",
  allowRowCreate: Y = !1,
  onRowUpdate: ae,
  onRowCreate: ee,
  onRowDelete: we,
  isLoading: se = !1,
  empty: de = "No records found",
  ariaLabel: G,
  className: me,
  onRowClick: ce
}) {
  const xe = G != null ? `${G} ` : "", [_e, Ae] = K([]), [Ie, st] = K(
    /* @__PURE__ */ new Map()
  ), [ue, Ye] = K(1), [ye, ht] = K(f), [qe, Xe] = K(
    () => e.map((j, U) => Gr(j, U))
  ), [At, ot] = K(
    () => new Set(
      e.map((j, U) => j.visible !== !1 ? Gr(j, U) : "").filter(Boolean)
    )
  ), [bt, X] = K({}), [I, V] = K(!1), [J, pe] = K([]), [oe, Ne] = K(
    null
  ), [Re, Ve] = K(null), [Ze, et] = K({}), [Yt, te] = K(0), [Me, Ot] = K(H), Lt = re(null), yt = re(null), Ce = Se(() => {
    const j = /* @__PURE__ */ new Map();
    return e.forEach((U, he) => j.set(Gr(U, he), U)), j;
  }, [e]), He = Se(
    () => qe.filter((j) => At.has(j)).map((j) => ({ key: j, column: Ce.get(j) })).filter(
      (j) => j.column != null
    ),
    [qe, At, Ce]
  ), xt = Se(
    () => gc(He, bt),
    [He, bt]
  ), Nt = F !== "None" || we != null || Y, lt = Se(() => {
    if (O) {
      const j = N ?? t.length, U = Math.max(1, Math.ceil(j / ye));
      return {
        items: [...t],
        filtered: [...t],
        total: j,
        pageCount: U,
        pageNumber: ue,
        pageSize: ye,
        sorts: _e,
        filters: Ie
      };
    }
    return wc(
      t,
      {
        sorts: _e,
        filters: Ie,
        pageNumber: ue,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? ye : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: i,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((j) => j.type != null && j.property != null).map((j) => [
            j.property,
            j.type
          ])
        )
      }
    );
  }, [
    t,
    _e,
    Ie,
    ue,
    ye,
    i,
    s,
    e,
    O,
    N,
    c
  ]), W = re(T);
  be(() => {
    W.current = T;
  });
  const fe = Se(
    () => [...Ie.entries()].filter(([, j]) => j.value !== "" && j.value !== void 0).map(([j, U]) => ({
      property: j,
      operator: U.operator ?? fo(
        e.find((he) => he.property === j)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [Ie, e]
  );
  be(() => {
    !O || W.current == null || W.current({
      start: (ue - 1) * ye,
      count: ye,
      pageNumber: ue,
      pageSize: ye,
      sorts: _e,
      filters: fe,
      logicalOperator: i
    });
  }, [
    O,
    ue,
    ye,
    _e,
    fe,
    i
  ]);
  const Ke = Se(() => new Set(J), [J]), We = Se(() => oe || (C ? co(lt.items, J, tr) : /* @__PURE__ */ new Set()), [oe, C, lt.items, J]), Rt = Se(
    () => mc(lt.items, J, e, We, tr),
    [lt.items, J, e, We]
  ), Ge = Se(
    () => J.length > 0 ? He.filter(
      (j) => j.column.property == null || !Ke.has(j.column.property)
    ) : He,
    [He, J, Ke]
  ), q = (j) => {
    j !== "" && Ae(yc(_e, j, { multi: l }));
  }, Q = (j, U) => {
    st((he) => {
      const ge = new Map(he);
      return ge.set(j, U), ge;
    }), Ye(1);
  }, ie = (j) => {
    ht(j), Ye(1);
  }, ke = (j) => {
    if (b === "None") return;
    const U = n(j), he = _ ?? [];
    let ge;
    b === "Single" ? ge = he.length === 1 && he[0] === U ? [] : [U] : ge = he.includes(U) ? he.filter((Je) => Je !== U) : [...he, U], p?.(ge);
  }, ve = (j) => {
    ce?.(j);
  }, Ee = (j, U, he) => {
    Lt.current = { key: j, startX: U, startWidth: he };
  }, Ue = (j) => {
    const U = Lt.current;
    if (!U) return;
    const he = j - U.startX, ge = Math.max(48, U.startWidth + he);
    X((Je) => ({ ...Je, [U.key]: `${ge}px` }));
  }, Pe = () => {
    Lt.current = null;
  }, at = (j) => {
    yt.current = j;
  }, tt = (j) => {
    const U = yt.current;
    yt.current = null, !(!U || U === j) && Xe((he) => {
      const ge = [...he], Je = ge.indexOf(U), Ct = ge.indexOf(j);
      return Je < 0 || Ct < 0 ? he : (ge.splice(Je, 1), ge.splice(Ct, 0, U), ge);
    });
  }, $t = (j) => {
    ot((U) => {
      const he = new Set(U);
      return he.has(j) ? he.delete(j) : he.add(j), he;
    });
  }, _t = () => {
    const j = yt.current;
    if (yt.current = null, !j || !k) return;
    const he = Ce.get(j)?.property;
    he && (pe(
      (ge) => ge.includes(he) ? ge : [...ge, he]
    ), Ne(null));
  }, De = (j) => {
    pe((U) => U.filter((he) => he !== j)), Ne(null);
  }, Et = (j) => {
    Ne((U) => {
      const he = U ?? (C ? co(lt.items, J, tr) : /* @__PURE__ */ new Set()), ge = new Set(he);
      return ge.has(j) ? ge.delete(j) : ge.add(j), ge;
    });
  }, Xt = (j) => {
    const U = {};
    e.forEach((he) => {
      he.property && (U[he.property] = tr(j, he.property));
    }), et(U), Ve(String(n(j)));
  }, fn = () => {
    const j = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (j[U.property] = !1);
    }), et(j), Ve("__new__");
  }, $n = () => {
    Ve(null), et({});
  }, Rn = (j) => {
    if (Re === "__new__") {
      const U = Object.fromEntries(
        e.filter((he) => he.property).map((he) => [he.property, Ze[he.property]])
      );
      ee?.(U);
    } else if (j != null) {
      const U = { ...j, ...Ze };
      ae?.(j, U);
    }
    $n();
  }, xn = c && (g === "Top" || g === "TopAndBottom"), Ur = c && (g === "Bottom" || g === "TopAndBottom"), us = d && e.some((j) => _o(j, d)), fs = (j, U, he) => j.render ? j.render(U, { index: 0 }) : ls(tr(U, j.property), j.format), _s = (j) => {
    const U = [Oe.cell];
    return j.align === "center" && U.push(Oe.center), j.align === "right" && U.push(Oe.right), j.frozen && U.push(Oe.frozen), U.join(" ");
  }, _n = O ? t : lt.filtered, qr = () => {
    const j = Oc(
      _n,
      Ge.map((Je) => Je.column)
    ), U = new Blob([`\uFEFF${j}`], {
      type: "text/csv;charset=utf-8"
    }), he = URL.createObjectURL(U), ge = document.createElement("a");
    ge.href = he, ge.download = `${z}.csv`, document.body.appendChild(ge), ge.click(), ge.remove(), URL.revokeObjectURL(he);
  }, pn = Rt.length, Pt = Se(() => {
    if (!P || pn === 0)
      return { start: 0, end: pn, top: 0, bottom: 0 };
    const j = 5, U = Math.max(
      0,
      Math.floor(Yt / L) - j
    ), he = Math.ceil(Me / L) + j * 2, ge = Math.min(pn, U + he), Je = U * L, Ct = Math.max(0, (pn - ge) * L);
    return { start: U, end: ge, top: Je, bottom: Ct };
  }, [P, pn, Yt, L, Me]), yr = Ge.length + (Nt ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [Oe.grid, me].filter(Boolean).join(" "), children: [
    xn && /* @__PURE__ */ o(
      Cs,
      {
        pageNumber: lt.pageNumber,
        pageSize: lt.pageSize,
        count: lt.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: y,
        showPageSizeSelector: m,
        ariaLabel: `${xe}${Ur ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ye,
        onPageSizeChange: ie
      }
    ),
    (k || Y || v || D) && /* @__PURE__ */ M("div", { className: Oe.toolbar, children: [
      k && /* @__PURE__ */ o(
        "div",
        {
          className: [
            Oe.groupPanel,
            J.length > 0 ? Oe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: k ? (j) => j.preventDefault() : void 0,
          onDrop: k ? _t : void 0,
          children: J.length > 0 ? J.map((j) => {
            const U = e.find((he) => he.property === j)?.title ?? j;
            return /* @__PURE__ */ M("span", { className: Oe.groupChip, children: [
              U,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Oe.groupRemove,
                  onClick: () => De(j),
                  "aria-label": `Remove group by ${U}`,
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ] }, j);
          }) : /* @__PURE__ */ o("span", { className: Oe.groupPanelText, children: E })
        }
      ),
      Y && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: fn,
          children: "Add row"
        }
      ),
      v && /* @__PURE__ */ M("div", { className: Oe.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Oe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": I,
            onClick: () => V((j) => !j),
            children: S
          }
        ),
        I && /* @__PURE__ */ o(
          "div",
          {
            className: Oe.pickerPanel,
            role: "menu",
            "aria-label": S,
            children: e.map((j, U) => {
              const he = Gr(j, U);
              return /* @__PURE__ */ M("label", { className: Oe.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: At.has(he),
                    onChange: () => $t(he)
                  }
                ),
                j.title ?? j.property
              ] }, he);
            })
          }
        )
      ] }),
      D && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: qr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [Oe.data, P ? Oe.virtualScroller : ""].filter(Boolean).join(" "),
        style: P ? { maxHeight: H } : void 0,
        onScroll: P ? (j) => {
          te(j.currentTarget.scrollTop), Ot(j.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: Oe.table,
              role: "grid",
              "aria-rowcount": (P ? pn : lt.total) + 1,
              "aria-label": G,
              "aria-busy": se || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
                  Ge.map(({ key: j, column: U }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: bt[j] ?? U.width,
                        minWidth: U.minWidth,
                        maxWidth: U.maxWidth
                      }
                    },
                    j
                  )),
                  Nt && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    Ge.map(({ key: j, column: U }) => {
                      const he = hd(U, r), ge = _e.find((vt) => vt.property === U.property), Je = ge ? _e.indexOf(ge) + 1 : 0, Ct = U.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": he && ge ? pd[ge.sortOrder] : "none",
                          className: [
                            Oe.header,
                            Ct === "center" ? Oe.center : "",
                            Ct === "right" ? Oe.right : "",
                            U.frozen ? Oe.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: xt[j] } : void 0,
                          scope: "col",
                          draggable: $ || k || void 0,
                          onDragStart: $ || k ? (vt) => {
                            vt.dataTransfer && (vt.dataTransfer.effectAllowed = "move"), at(j);
                          } : void 0,
                          onDragOver: $ ? (vt) => vt.preventDefault() : void 0,
                          onDrop: $ ? () => tt(j) : void 0,
                          children: [
                            he ? /* @__PURE__ */ M(
                              "button",
                              {
                                type: "button",
                                className: Oe.sortButton,
                                onClick: () => U.property != null && q(U.property),
                                "aria-label": ge ? ge.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  ge && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Oe.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ge.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  Je > 1 && a && /* @__PURE__ */ o("span", { className: Oe.sortIndex, children: Je })
                                ]
                              }
                            ) : U.title ?? U.property,
                            h && /* @__PURE__ */ o(
                              "span",
                              {
                                className: Oe.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${U.title ?? U.property}`,
                                onMouseDown: (vt) => {
                                  vt.preventDefault(), vt.stopPropagation();
                                  const hn = bt[j] ?? U.width, Tt = hn ? parseFloat(hn) : 96;
                                  Ee(
                                    j,
                                    vt.clientX,
                                    Number.isFinite(Tt) ? Tt : 96
                                  );
                                },
                                onMouseMove: (vt) => {
                                  Lt.current?.key === j && Ue(vt.clientX);
                                },
                                onMouseUp: Pe,
                                onMouseLeave: () => {
                                  Lt.current?.key === j && Pe();
                                }
                              }
                            )
                          ]
                        },
                        j
                      );
                    }),
                    Nt && /* @__PURE__ */ o("th", { className: Oe.header, scope: "col", children: "Actions" })
                  ] }),
                  us && /* @__PURE__ */ o("tr", { children: Ge.map(({ key: j, column: U }) => {
                    if (!_o(U, d))
                      return /* @__PURE__ */ o("td", { className: Oe.filterCell }, j);
                    const he = Ie.get(U.property ?? "");
                    return /* @__PURE__ */ M("td", { className: Oe.filterCell, children: [
                      /* @__PURE__ */ M(
                        "label",
                        {
                          className: Oe.visuallyHidden,
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
                          className: Oe.filterSelect,
                          value: he?.operator ?? fo(U.type ?? "string"),
                          onChange: (ge) => Q(U.property ?? "", {
                            ...he,
                            operator: ge.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: nl.filter((ge) => ge !== "Custom").map(
                            (ge) => /* @__PURE__ */ o("option", { value: ge, children: ge }, ge)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: Oe.filterInput,
                          value: he?.value ?? "",
                          onChange: (ge) => Q(U.property ?? "", {
                            ...he,
                            value: ge.target.value
                          }),
                          placeholder: `Filter ${U.title ?? U.property}`,
                          "aria-label": `${U.title ?? U.property} value`
                        }
                      )
                    ] }, j);
                  }) })
                ] }),
                /* @__PURE__ */ M("tbody", { children: [
                  Re === "__new__" && /* @__PURE__ */ M("tr", { className: Oe.editRow, children: [
                    Ge.map(({ key: j, column: U }) => /* @__PURE__ */ o("td", { className: Oe.editCell, children: U.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Oe.editInput,
                        type: U.type === "number" ? "number" : U.type === "boolean" ? "checkbox" : "text",
                        checked: U.type === "boolean" ? !!Ze[U.property] : void 0,
                        value: U.type === "boolean" ? void 0 : String(Ze[U.property] ?? ""),
                        onChange: (he) => et((ge) => ({
                          ...ge,
                          [U.property]: U.type === "boolean" ? he.target.checked : he.target.value
                        })),
                        "aria-label": `${U.title ?? U.property} (new)`
                      }
                    ) }, j)),
                    Nt && /* @__PURE__ */ M("td", { className: Oe.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: () => Rn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: $n,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  Pt.top > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: yr,
                      style: { height: Pt.top }
                    }
                  ) }),
                  Rt.slice(Pt.start, Pt.end).map((j, U) => {
                    const he = Pt.start + U, ge = P ? he + 2 : void 0;
                    if (j.type === "group" && j.group) {
                      const Tt = We.has(j.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Oe.groupRow,
                          "aria-rowindex": ge,
                          children: /* @__PURE__ */ o("td", { colSpan: yr, className: Oe.groupCell, children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: Oe.groupToggle,
                              "aria-expanded": Tt,
                              style: {
                                paddingInlineStart: `${j.group.level * 16}px`
                              },
                              onClick: () => Et(j.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Tt ? "▼" : "▶" }),
                                j.group.title,
                                ": ",
                                j.group.display,
                                " (",
                                j.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${j.group.key}`
                      );
                    }
                    const Je = j.row, Ct = n(Je), vt = (_ ?? []).includes(Ct), hn = Re != null && Re === String(Ct);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": ge,
                        className: [
                          ce || b !== "None" ? Oe.clickable : "",
                          vt ? Oe.selected : "",
                          hn ? Oe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? vt : void 0,
                        onClick: ce || b !== "None" ? (Tt) => {
                          md(Tt.target) || (ve(Je), ke(Je));
                        } : void 0,
                        children: [
                          Ge.map(({ key: Tt, column: mt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: _s(mt),
                              style: mt.frozen ? { left: xt[Tt] } : void 0,
                              children: hn && mt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Oe.editInput,
                                  type: mt.type === "number" ? "number" : mt.type === "boolean" ? "checkbox" : "text",
                                  checked: mt.type === "boolean" ? !!Ze[mt.property] : void 0,
                                  value: mt.type === "boolean" ? void 0 : String(Ze[mt.property] ?? ""),
                                  onChange: (Zt) => et((ps) => ({
                                    ...ps,
                                    [mt.property]: mt.type === "boolean" ? Zt.target.checked : Zt.target.value
                                  })),
                                  "aria-label": `${mt.title ?? mt.property} (edit)`
                                }
                              ) : fs(mt, Je)
                            },
                            Tt
                          )),
                          Nt && /* @__PURE__ */ o("td", { className: Oe.commandCell, children: hn ? /* @__PURE__ */ M(kt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => Rn(Je),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: $n,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(kt, { children: [
                            F !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => Xt(Je),
                                children: "Edit"
                              }
                            ),
                            we && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => we(Je),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Ct
                    );
                  }),
                  Pt.bottom > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: yr,
                      style: { height: Pt.bottom }
                    }
                  ) })
                ] }),
                A && A.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ M("tr", { className: Oe.footerRow, children: [
                  Ge.map(({ key: j, column: U }) => {
                    const he = A.filter(
                      (ge) => ge.property === U.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Oe.footerCell,
                          U.align === "right" ? Oe.right : "",
                          U.align === "center" ? Oe.center : ""
                        ].filter(Boolean).join(" "),
                        children: he.map((ge, Je) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: Oe.footerValue,
                            children: [
                              ge.title ? `${ge.title}: ` : "",
                              ls(
                                kc(_n, ge, tr),
                                ge.format
                              )
                            ]
                          },
                          `${ge.property}-${ge.type}-${Je}`
                        ))
                      },
                      j
                    );
                  }),
                  Nt && /* @__PURE__ */ o("td", { className: Oe.footerCell })
                ] }) })
              ]
            }
          ),
          lt.items.length === 0 && !se && /* @__PURE__ */ o("div", { className: Oe.empty, children: de }),
          se && /* @__PURE__ */ o("div", { className: Oe.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Ur && /* @__PURE__ */ o(
      Cs,
      {
        pageNumber: lt.pageNumber,
        pageSize: lt.pageSize,
        count: lt.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: y,
        showPageSizeSelector: m,
        ariaLabel: `${xe}${xn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ye,
        onPageSizeChange: ie
      }
    )
  ] });
}
const gd = "_wrap_avqds_1", bd = "_grid_avqds_7", yd = "_stacked_avqds_13", xd = "_item_avqds_19", vd = "_empty_avqds_25", Nr = {
  wrap: gd,
  grid: bd,
  stacked: yd,
  item: xd,
  empty: vd
};
function IO({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: a = "No records found",
  emptyTemplate: d,
  loadingTemplate: s,
  isLoading: i = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [x, g] = K(1), [y, m] = K(t), b = e.length, _ = Math.max(1, Math.ceil(b / y)), p = Math.min(Math.max(1, x), _), v = Se(() => {
    const h = (p - 1) * y;
    return e.slice(h, h + y);
  }, [e, p, y]), S = r ? Nr.grid : Nr.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Nr.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        i && s != null ? s : b === 0 ? d ?? /* @__PURE__ */ o("div", { className: Nr.empty, children: a }) : /* @__PURE__ */ o("div", { className: S, children: v.map((h, $) => /* @__PURE__ */ o("div", { className: Nr.item, children: l ? l(h, $) : String(h) }, $)) }),
        /* @__PURE__ */ o(
          Cs,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: p,
            pageSize: y,
            count: b,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: g,
            onPageSizeChange: (h) => {
              m(h), g(1);
            }
          }
        )
      ]
    }
  );
}
const wd = "_label_1qfpw_1", kd = {
  label: wd
}, zO = rt(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [kd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Od = "_textbox_oly89_1", Sd = "_invalid_oly89_37", Nd = "_xs_oly89_44", $d = "_sm_oly89_50", Ed = "_md_oly89_56", Td = "_lg_oly89_62", Ad = "_xl_oly89_68", bs = {
  textbox: Od,
  invalid: Sd,
  xs: Nd,
  sm: $d,
  md: Ed,
  lg: Td,
  xl: Ad
}, Cd = rt(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: a = "text",
    ...d
  }, s) {
    return l === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: s,
        type: a,
        "data-size": t,
        className: [
          bs.textbox,
          bs[t],
          n ? bs.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), LO = Cd, Dd = "_checkbox_1bb6c_1", Md = {
  checkbox: Dd
}, RO = rt(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const a = re(null);
    return be(() => {
      a.current && (a.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          a.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Md.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), Id = {
  switch: "_switch_19gf1_1"
}, PO = rt(function({ className: t, ...n }, r) {
  const [l, a] = K(
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
      className: [Id.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && a(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), zd = "_trigger_1jlxf_1", Ld = "_tooltip_1jlxf_7", Rd = "_top_1jlxf_34", Pd = "_right_1jlxf_40", jd = "_bottom_1jlxf_46", Bd = "_left_1jlxf_52", Fd = "_arrow_1jlxf_58", Hd = "_floating_1jlxf_70", jn = {
  trigger: zd,
  tooltip: Ld,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: Rd,
  right: Pd,
  bottom: jd,
  left: Bd,
  arrow: Fd,
  floating: Hd,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, Vr = 8;
function Ud(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + Vr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - Vr,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + Vr,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - Vr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function jO({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: a,
  className: d
}) {
  const s = nt(), i = re(null), c = re(null), f = re(() => {
  }), [u, x] = K(!1), [g, y] = K(null), m = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, b = () => {
    m(), i.current = window.setTimeout(() => {
      i.current = null, x(!0);
    }, r);
  }, _ = () => {
    m(), x(!1);
  };
  if (be(() => () => m(), []), be(() => {
    if (!u || l == null) return;
    const v = window.setTimeout(() => x(!1), l);
    return () => window.clearTimeout(v);
  }, [u, l]), be(() => {
    if (a || !u) return;
    const v = (S) => {
      S.key === "Escape" && _();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [a, u]), be(() => {
    if (!a) return;
    let v = null, S = null;
    const h = () => {
      v !== null && (window.clearTimeout(v), v = null);
    }, $ = () => {
      h(), S = null, y(null);
    };
    f.current = $;
    const k = (O) => {
      h(), S = O, v = window.setTimeout(() => {
        v = null, y(O);
      }, r);
    }, E = (O) => O instanceof Element ? O.closest(a) : null, C = (O) => {
      const N = E(O.target);
      !N || N === S || k(N);
    }, A = (O) => {
      const N = E(O.target);
      if (!N || N !== S) return;
      const T = O.relatedTarget;
      T instanceof Element && N.contains(T) || $();
    }, D = (O) => {
      O.key === "Escape" && $();
    }, z = () => $();
    return document.addEventListener("mouseover", C), document.addEventListener("mouseout", A), document.addEventListener("focusin", C), document.addEventListener("focusout", A), document.addEventListener("keydown", D), document.addEventListener("scroll", z, !0), window.addEventListener("resize", z), () => {
      h(), document.removeEventListener("mouseover", C), document.removeEventListener("mouseout", A), document.removeEventListener("focusin", C), document.removeEventListener("focusout", A), document.removeEventListener("keydown", D), document.removeEventListener("scroll", z, !0), window.removeEventListener("resize", z), S = null, y(null);
    };
  }, [a, r]), be(() => {
    if (!a || g === null || l == null) return;
    const v = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(v);
  }, [a, g, l]), As(() => {
    const v = g;
    if (!v) return;
    const S = v.getAttribute("aria-describedby");
    return v.setAttribute(
      "aria-describedby",
      [S, s].filter(Boolean).join(" ")
    ), () => {
      S == null ? v.removeAttribute("aria-describedby") : v.setAttribute("aria-describedby", S);
    };
  }, [g, s]), As(() => {
    const v = c.current, S = g;
    !v || !S || Object.assign(
      v.style,
      Ud(S.getBoundingClientRect(), n)
    );
  }, [g, n]), a)
    return g ? /* @__PURE__ */ M(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: s,
        className: [
          jn.tooltip,
          jn[n],
          jn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: jn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const p = Ut(t) ? Hs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? s : null
    ].filter((v) => typeof v == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [jn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: _,
        onFocus: b,
        onBlur: _,
        children: [
          p,
          u && /* @__PURE__ */ M(
            "span",
            {
              role: "tooltip",
              id: s,
              className: [jn.tooltip, jn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: jn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const qd = "_dialog_1t7pw_1", Kd = "_sm_1t7pw_104", Wd = "_resizable_1t7pw_110", Gd = "_md_1t7pw_113", Vd = "_lg_1t7pw_117", Yd = "_header_1t7pw_121", Xd = "_title_1t7pw_132", Zd = "_description_1t7pw_139", Jd = "_close_1t7pw_146", Qd = "_body_1t7pw_176", eu = "_footer_1t7pw_188", mn = {
  dialog: qd,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: Kd,
  resizable: Wd,
  md: Gd,
  lg: Vd,
  header: Yd,
  title: Xd,
  description: Zd,
  close: Jd,
  body: Qd,
  footer: eu
};
function tu({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: a,
  size: d = "md",
  width: s,
  height: i,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: x = null,
  showCloseButton: g = !0,
  showMask: y = !0,
  canClose: m,
  className: b
}) {
  const _ = re(null), p = nt(), v = nt(), S = re(t);
  be(() => {
    S.current = t;
  });
  const h = re(m);
  be(() => {
    h.current = m;
  });
  const $ = re(f);
  be(() => {
    $.current = f;
  });
  const k = re(!1), E = re(!1), C = B(() => {
    if (k.current) return;
    const z = h.current?.();
    if (z instanceof Promise) {
      z.then((O) => {
        O && !k.current && (k.current = !0, S.current());
      });
      return;
    }
    z !== !1 && (k.current = !0, S.current());
  }, []), A = B(() => {
    if (E.current) {
      E.current = !1;
      return;
    }
    S.current();
  }, []), D = B(
    (z) => {
      if (z.key !== "Tab" || !_.current) return;
      const O = Array.from(
        _.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (T) => T.offsetWidth > 0 || T.offsetHeight > 0 || T === document.activeElement
      );
      if (O.length === 0) {
        z.preventDefault();
        return;
      }
      const N = O.indexOf(document.activeElement);
      if (z.shiftKey) {
        if (N <= 0) {
          z.preventDefault();
          const T = O[O.length - 1];
          T && T.focus();
        }
      } else if (N === -1 || N === O.length - 1) {
        z.preventDefault();
        const T = O[0];
        T && T.focus();
      }
    },
    []
  );
  return be(() => {
    const z = _.current;
    if (z)
      if (e && !z.open) {
        const O = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        z.showModal(), (z.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? z.querySelector("button"))?.focus();
        const T = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const P = (L) => {
          L.preventDefault(), $.current && C();
        };
        return z.addEventListener("cancel", P), () => {
          z.removeEventListener("cancel", P), document.body.style.overflow = T, O?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && (E.current = k.current, k.current = !1, z.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: _,
      className: [
        mn.dialog,
        mn[d],
        u ? mn.resizable : null,
        x ? mn[`side-${x}`] : null,
        y === !1 ? mn["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: i ?? void 0
      },
      onClose: A,
      onClick: (z) => {
        z.target === _.current && c && C();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": r ? v : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ M("header", { className: mn.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ o("h2", { id: p, className: mn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: v, className: mn.description, children: r })
          ] }),
          g !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: mn.close,
              onClick: () => {
                C();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: mn.body, children: l }),
        a && /* @__PURE__ */ o("footer", { className: mn.footer, children: a })
      ]
    }
  );
}
const nu = "_typography_1jy8x_1", ru = "_h1_1jy8x_39", su = "_h2_1jy8x_45", ou = "_h3_1jy8x_51", lu = "_h4_1jy8x_57", au = "_h5_1jy8x_63", iu = "_h6_1jy8x_69", cu = "_button_1jy8x_99", du = "_caption_1jy8x_106", uu = "_overline_1jy8x_112", ys = {
  typography: nu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: ru,
  h2: su,
  h3: ou,
  h4: lu,
  h5: au,
  h6: iu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: cu,
  caption: du,
  overline: uu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, fu = {
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
}, _u = {
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
}, pu = {
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
}, hu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, mu = rt(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: a = !0,
  className: d,
  children: s,
  ...i
}, c) {
  if (a === !1) return null;
  const f = n === "Auto" ? fu[t] : pu[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: c,
      className: [
        ys.typography,
        ys[_u[t]],
        r ? ys[hu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...i,
      children: l ?? s
    }
  );
}), ll = or(null);
function BO() {
  const e = Ln(ll);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function FO({ children: e }) {
  const [t, n] = K([]), [, r] = K(0), l = re(0), a = () => (l.current += 1, l.current), d = re([]);
  d.current = t;
  const s = (x) => {
    const g = d.current[0];
    g && (g.kind === "confirm" ? g.resolve(!!x) : g.kind === "alert" ? g.resolve() : g.resolve(x), n((y) => y.slice(1)));
  }, i = Se(
    () => ({
      confirm: (x = {}) => new Promise((g) => {
        n((y) => [
          ...y,
          { seq: a(), kind: "confirm", options: x, resolve: g }
        ]);
      }),
      alert: (x = {}) => new Promise((g) => {
        n((y) => [
          ...y,
          { seq: a(), kind: "alert", options: x, resolve: g }
        ]);
      }),
      open: (x = {}) => new Promise((g) => {
        n((y) => [
          ...y,
          { seq: a(), kind: "custom", options: x, resolve: g }
        ]);
      }),
      openSide: ({ position: x, showMask: g = !0, ...y }) => new Promise((m) => {
        n((b) => [
          ...b,
          {
            seq: a(),
            kind: "custom",
            options: { ...y, side: x, showMask: g },
            resolve: m
          }
        ]);
      }),
      close: (x) => s(x),
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
  return /* @__PURE__ */ M(ll.Provider, { value: i, children: [
    e,
    /* @__PURE__ */ o(
      tu,
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
        footer: c?.kind === "confirm" ? /* @__PURE__ */ M(kt, { children: [
          /* @__PURE__ */ o(rr, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            rr,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ o(rr, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(rr, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ o(mu, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const gu = "_viewport_11t1p_1", bu = "_topLeft_11t1p_13", yu = "_topRight_11t1p_20", xu = "_bottomLeft_11t1p_25", vu = "_toast_11t1p_30", wu = "_leaving_11t1p_61", ku = "_info_11t1p_77", Ou = "_success_11t1p_86", Su = "_warning_11t1p_95", Nu = "_danger_11t1p_104", $u = "_content_11t1p_113", Eu = "_title_11t1p_118", Tu = "_description_11t1p_141", Au = "_dismiss_11t1p_148", Cu = "_actions_11t1p_169", Du = "_action_11t1p_169", Mu = "_cancel_11t1p_177", Iu = "_progress_11t1p_215", Qt = {
  viewport: gu,
  topLeft: bu,
  topRight: yu,
  bottomLeft: xu,
  toast: vu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: wu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: ku,
  success: Ou,
  warning: Su,
  danger: Nu,
  content: $u,
  title: Eu,
  description: Tu,
  dismiss: Au,
  actions: Cu,
  action: Du,
  cancel: Mu,
  progress: Iu,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, al = or(null);
function HO() {
  const e = Ln(al);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const zu = 200, Lu = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function UO({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [a, d] = K([]), [s, i] = K(!1), c = re([]), f = re(/* @__PURE__ */ new Map()), u = re(!1), x = re(0), g = (N) => {
    u.current = N, i(N);
  }, y = B((N) => {
    const T = f.current.get(N);
    T && (window.clearTimeout(T.timeoutId), T.remaining = Math.max(
      0,
      T.remaining - (Date.now() - T.startedAt)
    ));
  }, []), m = B((N) => {
    const T = f.current.get(N);
    T && (window.clearTimeout(T.timeoutId), f.current.delete(N));
  }, []), b = B(
    (N) => {
      m(N), d((T) => {
        const P = T.filter((L) => L.id !== N);
        return c.current = P, P;
      });
    },
    [m]
  ), _ = B(
    (N) => {
      const T = c.current.find((P) => P.id === N);
      !T || T.leaving || (T.onAutoClose?.(), b(N));
    },
    [b]
  ), p = B(
    (N) => {
      const T = f.current.get(N);
      !T || T.remaining <= 0 || (T.startedAt = Date.now(), T.timeoutId = window.setTimeout(() => _(N), T.remaining));
    },
    [_]
  ), v = B(() => {
    u.current || f.current.forEach((N, T) => y(T)), g(!0);
  }, [y]), S = B(() => {
    f.current.forEach((N, T) => p(T)), g(!1);
  }, [p]);
  be(() => {
    if (!r) return;
    const N = () => {
      document.hidden ? v() : S();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [r, v, S]);
  const h = B(
    (N) => {
      const T = c.current.find((P) => P.id === N);
      !T || T.leaving || (T.onDismiss?.(), d((P) => {
        const L = P.map(
          (H) => H.id === N ? { ...H, leaving: !0 } : H
        );
        return c.current = L, L;
      }), window.setTimeout(() => b(N), zu));
    },
    [b]
  ), $ = B(
    (N) => {
      if (N.durationMs <= 0) return;
      const T = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(N.id, T), u.current || p(N.id);
    },
    [p]
  ), k = B(
    (N) => {
      const T = c.current.find((L) => L.id === N.id), P = {
        id: N.id ?? ++x.current,
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
      d((L) => {
        const H = T ? L.map(
          (F) => F.id === P.id ? { ...P, leaving: !1 } : F
        ) : [...L, P];
        return c.current = H, H;
      }), T && m(P.id), $(P);
    },
    [t, n, $, m]
  ), E = B(
    (N) => {
      k({
        severity: N.severity ?? "info",
        title: N.summary ?? N.summaryContent,
        description: N.detail ?? N.detailContent,
        durationMs: N.duration,
        click: N.click,
        closeOnClick: N.closeOnClick,
        payload: N.payload
      });
    },
    [k]
  ), C = B(
    (N) => (T, P) => E({ severity: N, summary: T, detail: P }),
    [E]
  ), A = Se(
    () => ({
      toast: k,
      notify: E,
      notifyInfo: C("info"),
      notifySuccess: C("success"),
      notifyWarning: C("warning"),
      notifyError: C("danger")
    }),
    [k, E, C]
  ), D = Se(
    () => Array.from(/* @__PURE__ */ new Set([n, ...a.map((N) => N.position)])),
    [n, a]
  ), z = r ? v : void 0, O = r ? S : void 0;
  return /* @__PURE__ */ M(al.Provider, { value: A, children: [
    e,
    D.map((N) => /* @__PURE__ */ o(
      "div",
      {
        className: [Qt.viewport, Qt[Lu[N]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: z,
        onMouseLeave: O,
        children: a.filter((T) => T.position === N).map((T) => /* @__PURE__ */ M(
          "div",
          {
            role: T.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
            "data-clickable": T.closeOnClick ? "true" : "false",
            className: [
              Qt.toast,
              Qt[T.severity],
              T.leaving ? Qt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: T.click || T.closeOnClick ? () => {
              T.click?.(T.payload), T.closeOnClick && h(T.id);
            } : void 0,
            children: [
              /* @__PURE__ */ M("div", { className: Qt.content, children: [
                /* @__PURE__ */ o("div", { className: Qt.title, children: T.title }),
                T.description && /* @__PURE__ */ o("div", { className: Qt.description, children: T.description }),
                (T.action || T.cancel) && /* @__PURE__ */ M("div", { className: Qt.actions, children: [
                  T.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Qt.action,
                      onClick: () => {
                        T.action?.onClick?.(), h(T.id);
                      },
                      children: T.action.label
                    }
                  ),
                  T.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Qt.cancel,
                      onClick: () => {
                        T.cancel?.onClick?.(), h(T.id);
                      },
                      children: T.cancel.label
                    }
                  )
                ] })
              ] }),
              T.dismissible && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Qt.dismiss,
                  onClick: () => h(T.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              ),
              T.showProgress && T.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: Qt.progress,
                  style: { animationDuration: `${T.durationMs}ms` }
                }
              )
            ]
          },
          T.id
        ))
      },
      N
    ))
  ] });
}
function po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ru(e) {
  if (Array.isArray(e)) return e;
}
function Pu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, l, a, d, s = [], i = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(i = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); i = !0) ;
    } catch (f) {
      c = !0, l = f;
    } finally {
      try {
        if (!i && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw l;
      }
    }
    return s;
  }
}
function ju() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bu(e, t) {
  return Ru(e) || Pu(e, t) || Fu(e, t) || ju();
}
function Fu(e, t) {
  if (e) {
    if (typeof e == "string") return po(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? po(e, t) : void 0;
  }
}
const il = Object.entries, ho = Object.setPrototypeOf, Hu = Object.isFrozen, Uu = Object.getPrototypeOf, qu = Object.getOwnPropertyDescriptor;
let wt = Object.freeze, St = Object.seal, mr = Object.create, cl = typeof Reflect < "u" && Reflect, Ds = cl.apply, Ms = cl.construct;
wt || (wt = function(t) {
  return t;
});
St || (St = function(t) {
  return t;
});
Ds || (Ds = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) l[a - 2] = arguments[a];
  return t.apply(n, l);
});
Ms || (Ms = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const nr = gt(Array.prototype.forEach), Ku = gt(Array.prototype.lastIndexOf), mo = gt(Array.prototype.pop), $r = gt(Array.prototype.push), Wu = gt(Array.prototype.splice), gr = Array.isArray, jr = gt(String.prototype.toLowerCase), xs = gt(String.prototype.toString), go = gt(String.prototype.match), Er = gt(String.prototype.replace), bo = gt(String.prototype.indexOf), Gu = gt(String.prototype.trim), Vu = gt(Number.prototype.toString), Yu = gt(Boolean.prototype.toString), yo = typeof BigInt > "u" ? null : gt(BigInt.prototype.toString), xo = typeof Symbol > "u" ? null : gt(Symbol.prototype.toString), Gt = gt(Object.prototype.hasOwnProperty), Tr = gt(Object.prototype.toString), It = gt(RegExp.prototype.test), Bn = Xu(TypeError);
function gt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return Ds(e, t, r);
  };
}
function Xu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Ms(e, n);
  };
}
function Fe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jr;
  if (ho && ho(e, null), !gr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const a = n(l);
      a !== l && (Hu(t) || (t[r] = a), l = a);
    }
    e[l] = !0;
  }
  return e;
}
function Zu(e) {
  for (let t = 0; t < e.length; t++) Gt(e, t) || (e[t] = null);
  return e;
}
function rn(e) {
  const t = mr(null);
  for (const r of il(e)) {
    var n = Bu(r, 2);
    const l = n[0], a = n[1];
    Gt(e, l) && (gr(a) ? t[l] = Zu(a) : a && typeof a == "object" && a.constructor === Object ? t[l] = rn(a) : t[l] = a);
  }
  return t;
}
function Ju(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Vu(e);
    case "boolean":
      return Yu(e);
    case "bigint":
      return yo ? yo(e) : "0";
    case "symbol":
      return xo ? xo(e) : "Symbol()";
    case "undefined":
      return Tr(e);
    case "function":
    case "object": {
      if (e === null) return Tr(e);
      const t = e, n = un(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Tr(r);
      }
      return Tr(e);
    }
    default:
      return Tr(e);
  }
}
function un(e, t) {
  for (; e !== null; ) {
    const r = qu(e, t);
    if (r) {
      if (r.get) return gt(r.get);
      if (typeof r.value == "function") return gt(r.value);
    }
    e = Uu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Qu(e) {
  try {
    return It(e, ""), !0;
  } catch {
    return !1;
  }
}
const vo = wt([
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
]), vs = wt([
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
]), ws = wt([
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
]), ef = wt([
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
]), ks = wt([
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
]), tf = wt([
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
]), wo = wt(["#text"]), ko = wt([
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
]), Os = wt([
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
]), Oo = wt([
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
]), Yr = wt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), nf = St(/{{[\w\W]*|^[\w\W]*}}/g), rf = St(/<%[\w\W]*|^[\w\W]*%>/g), sf = St(/\${[\w\W]*/g), of = St(/^data-[\-\w.\u00B7-\uFFFF]+$/), lf = St(/^aria-[\-\w]+$/), So = St(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), af = St(/^(?:\w+script|data):/i), cf = St(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), df = St(/^html$/i), uf = St(/^[a-z][.\w]*(-[.\w]+)+$/i), No = St(/<[/\w!]/g), $o = St(/<[/\w]/g), ff = St(/<\/no(script|embed|frames)/i), _f = St(/\/>/i), en = {
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
}, dl = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], pf = wt(Fe({}, dl)), hf = (function() {
  const e = {};
  return nr(dl, (t) => {
    e[t] = St(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), wt(e);
})(), mf = function() {
  return typeof window > "u" ? null : window;
}, gf = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let r = null;
  const l = "data-tt-policy-suffix";
  n && n.hasAttribute(l) && (r = n.getAttribute(l));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(a, {
      createHTML(d) {
        return d;
      },
      createScriptURL(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Eo = function() {
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
}, Fn = function(t, n, r, l) {
  return Gt(t, n) && gr(t[n]) ? Fe(l.base ? rn(l.base) : {}, t[n], l.transform) : r;
}, Ss = function(t, n, r) {
  const l = Gt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? rn(l) : r();
};
function ul() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mf();
  const t = (ne) => ul(ne);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, d = e.Node, s = e.Element, i = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = s.prototype, x = un(u, "cloneNode"), g = un(u, "remove"), y = un(u, "removeAttributeNode"), m = un(u, "nextSibling"), b = un(u, "childNodes"), _ = un(u, "parentNode"), p = un(u, "shadowRoot"), v = un(u, "attributes"), S = d && d.prototype ? un(d.prototype, "nodeType") : null, h = d && d.prototype ? un(d.prototype, "nodeName") : null, $ = d && d.prototype ? un(d.prototype, "ownerDocument") : null, k = function(w) {
    return S ? S(w) : w.nodeType;
  }, E = function(w) {
    return h ? h(w) : w.nodeName;
  };
  if (typeof a == "function") {
    const ne = n.createElement("template");
    ne.content && ne.content.ownerDocument && (n = ne.content.ownerDocument);
  }
  let C, A = "", D, z = !1, O = 0;
  const N = function() {
    if (O > 0) throw Bn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, T = function(w) {
    N(), O++;
    try {
      return C.createHTML(w);
    } finally {
      O--;
    }
  }, P = function(w) {
    N(), O++;
    try {
      return C.createScriptURL(w);
    } finally {
      O--;
    }
  }, L = function() {
    return z || (D = gf(f, l), z = !0), D;
  }, H = n, F = H.implementation, Y = H.createNodeIterator, ae = H.createDocumentFragment, ee = H.getElementsByTagName, we = r.importNode;
  let se = Eo();
  t.isSupported = typeof il == "function" && typeof _ == "function" && F && F.createHTMLDocument !== void 0;
  const de = nf, G = rf, me = sf, ce = of, xe = lf, _e = af, Ae = cf, Ie = uf;
  let st = So, ue = null;
  const Ye = Fe({}, [
    ...vo,
    ...vs,
    ...ws,
    ...ks,
    ...wo
  ]);
  let ye = null;
  const ht = Fe({}, [
    ...ko,
    ...Os,
    ...Oo,
    ...Yr
  ]);
  let qe = Object.seal(mr(null, {
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
  })), Xe = null, At = null;
  const ot = Object.seal(mr(null, {
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
  let bt = !0, X = !0, I = !1, V = !0, J = !1, pe = !0, oe = !1, Ne = !1, Re = null, Ve = null, Ze = !1, et = !1, Yt = !1, te = !1, Me = !0, Ot = !1;
  const Lt = "user-content-";
  let yt = !0, Ce = !1, He = {}, xt = null;
  const Nt = Fe({}, [
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
  let lt = null;
  const W = Fe({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let fe = null;
  const Ke = Fe({}, [
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
  ]), We = "http://www.w3.org/1998/Math/MathML", Rt = "http://www.w3.org/2000/svg", Ge = "http://www.w3.org/1999/xhtml";
  let q = Ge, Q = !1, ie = null;
  const ke = Fe({}, [
    We,
    Rt,
    Ge
  ], xs), ve = wt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ee = Fe({}, ve);
  const Ue = wt(["annotation-xml"]);
  let Pe = Fe({}, Ue);
  const at = Fe({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let tt = null;
  const $t = ["application/xhtml+xml", "text/html"], _t = "text/html";
  let De = null, Et = null;
  const Xt = n.createElement("form"), fn = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, $n = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Et && Et === w) return;
    (!w || typeof w != "object") && (w = {}), w = rn(w), tt = $t.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? _t : w.PARSER_MEDIA_TYPE, De = tt === "application/xhtml+xml" ? xs : jr, ue = Fn(w, "ALLOWED_TAGS", Ye, { transform: De }), ye = Fn(w, "ALLOWED_ATTR", ht, { transform: De }), ie = Fn(w, "ALLOWED_NAMESPACES", ke, { transform: xs }), fe = Fn(w, "ADD_URI_SAFE_ATTR", Ke, {
      transform: De,
      base: Ke
    }), lt = Fn(w, "ADD_DATA_URI_TAGS", W, {
      transform: De,
      base: W
    }), xt = Fn(w, "FORBID_CONTENTS", Nt, { transform: De }), Xe = Fn(w, "FORBID_TAGS", rn({}), { transform: De }), At = Fn(w, "FORBID_ATTR", rn({}), { transform: De }), He = Gt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? rn(w.USE_PROFILES) : w.USE_PROFILES : !1, bt = w.ALLOW_ARIA_ATTR !== !1, X = w.ALLOW_DATA_ATTR !== !1, I = w.ALLOW_UNKNOWN_PROTOCOLS || !1, V = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = w.SAFE_FOR_TEMPLATES || !1, pe = w.SAFE_FOR_XML !== !1, oe = w.WHOLE_DOCUMENT || !1, et = w.RETURN_DOM || !1, Yt = w.RETURN_DOM_FRAGMENT || !1, te = w.RETURN_TRUSTED_TYPE || !1, Ze = w.FORCE_BODY || !1, Me = w.SANITIZE_DOM !== !1, Ot = w.SANITIZE_NAMED_PROPS || !1, yt = w.KEEP_CONTENT !== !1, Ce = w.IN_PLACE || !1, st = Qu(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : So, q = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Ge, Ee = Ss(w, "MATHML_TEXT_INTEGRATION_POINTS", () => Fe({}, ve)), Pe = Ss(w, "HTML_INTEGRATION_POINTS", () => Fe({}, Ue));
    const R = Ss(w, "CUSTOM_ELEMENT_HANDLING", () => mr(null));
    if (qe = mr(null), Gt(R, "tagNameCheck") && fn(R.tagNameCheck) && (qe.tagNameCheck = R.tagNameCheck), Gt(R, "attributeNameCheck") && fn(R.attributeNameCheck) && (qe.attributeNameCheck = R.attributeNameCheck), Gt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (qe.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), St(qe), J && (X = !1), Yt && (et = !0), He && (ue = Fe({}, wo), ye = mr(null), He.html === !0 && (Fe(ue, vo), Fe(ye, ko)), He.svg === !0 && (Fe(ue, vs), Fe(ye, Os), Fe(ye, Yr)), He.svgFilters === !0 && (Fe(ue, ws), Fe(ye, Os), Fe(ye, Yr)), He.mathMl === !0 && (Fe(ue, ks), Fe(ye, Oo), Fe(ye, Yr))), ot.tagCheck = null, ot.attributeCheck = null, Gt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? ot.tagCheck = w.ADD_TAGS : gr(w.ADD_TAGS) && (ue === Ye && (ue = rn(ue)), Fe(ue, w.ADD_TAGS, De))), Gt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? ot.attributeCheck = w.ADD_ATTR : gr(w.ADD_ATTR) && (ye === ht && (ye = rn(ye)), Fe(ye, w.ADD_ATTR, De))), Gt(w, "ADD_FORBID_CONTENTS") && gr(w.ADD_FORBID_CONTENTS) && (xt === Nt && (xt = rn(xt)), Fe(xt, w.ADD_FORBID_CONTENTS, De)), yt && (ue["#text"] = !0), oe && Fe(ue, [
      "html",
      "head",
      "body"
    ]), ue.table && (Fe(ue, ["tbody"]), delete Xe.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function") throw Bn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Bn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const Z = C;
      C = w.TRUSTED_TYPES_POLICY;
      try {
        A = T("");
      } catch (le) {
        throw C = Z, le;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (C = void 0, A = "") : (C === void 0 && (C = L()), C && typeof A == "string" && (A = T("")));
    wt && wt(w), Et = w;
  }, Rn = Fe({}, [
    ...vs,
    ...ws,
    ...ef
  ]), xn = Fe({}, [...ks, ...tf]), Ur = function(w, R, Z) {
    return R.namespaceURI === Ge ? w === "svg" : R.namespaceURI === We ? w === "svg" && (Z === "annotation-xml" || Ee[Z]) : !!Rn[w];
  }, us = function(w, R, Z) {
    return R.namespaceURI === Ge ? w === "math" : R.namespaceURI === Rt ? w === "math" && Pe[Z] : !!xn[w];
  }, fs = function(w, R, Z) {
    return R.namespaceURI === Rt && !Pe[Z] || R.namespaceURI === We && !Ee[Z] ? !1 : !xn[w] && (at[w] || !Rn[w]);
  }, _s = function(w) {
    let R = _(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: q,
      tagName: "template"
    });
    const Z = jr(w.tagName), le = jr(R.tagName);
    return ie[w.namespaceURI] ? w.namespaceURI === Rt ? Ur(Z, R, le) : w.namespaceURI === We ? us(Z, R, le) : w.namespaceURI === Ge ? fs(Z, R, le) : !!(tt === "application/xhtml+xml" && ie[w.namespaceURI]) : !1;
  }, _n = function(w) {
    $r(t.removed, { element: w });
    try {
      _(w).removeChild(w);
    } catch {
      if (g(w), !_(w)) throw Bn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, qr = function(w, R, Z) {
    try {
      y(w, R);
    } catch {
      try {
        w.removeAttribute(Z);
      } catch {
      }
    }
  }, pn = function(w) {
    j(w);
    const R = b(w);
    if (R) {
      const le = [];
      nr(R, ($e) => {
        $r(le, $e);
      }), nr(le, ($e) => {
        try {
          g($e);
        } catch {
        }
      });
    }
    const Z = v(w);
    if (Z) for (let le = Z.length - 1; le >= 0; --le) {
      const $e = Z[le], Le = $e && $e.name;
      typeof Le == "string" && qr(w, $e, Le);
    }
  }, Pt = function(w, R, Z) {
    if (!Z) try {
      Z = R.getAttributeNode(w);
    } catch {
      Z = null;
    }
    $r(t.removed, {
      attribute: Z || null,
      from: R
    });
    try {
      Z ? y(R, Z) : R.removeAttribute(w);
    } catch {
      try {
        R.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (et || Yt) try {
        _n(R);
      } catch {
      }
      else try {
        R.setAttribute(w, "");
      } catch {
      }
  }, yr = function(w) {
    const R = v(w);
    if (R)
      for (let Z = R.length - 1; Z >= 0; --Z) {
        const le = R[Z], $e = le && le.name;
        typeof $e != "string" || ye[De($e)] || qr(w, le, $e);
      }
  }, j = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const Z = R.pop();
      k(Z) === en.element && yr(Z);
      const le = b(Z);
      if (le) for (let $e = le.length - 1; $e >= 0; --$e) R.push(le[$e]);
    }
  }, U = function(w, R) {
    return pe ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, he = function(w) {
    if (!pe) return;
    const R = [w];
    for (; R.length > 0; ) {
      const Z = R.pop(), le = k(Z);
      if (le === en.processingInstruction || le === en.comment && It($o, Z.data)) {
        try {
          g(Z);
        } catch {
        }
        continue;
      }
      if (le === en.element) {
        const Le = Z, je = De(E(Z));
        try {
          Le.hasAttribute && Le.hasAttribute("patchsrc") && Le.removeAttribute("patchsrc"), Le.hasAttribute && Le.hasAttribute("for") && U("for", je) && Le.removeAttribute("for");
        } catch {
        }
      }
      const $e = b(Z);
      if ($e) for (let Le = $e.length - 1; Le >= 0; --Le) R.push($e[Le]);
    }
  }, ge = function(w) {
    let R = null, Z = null;
    if (Ze) w = "<remove></remove>" + w;
    else {
      const Le = go(w, /^[\r\n\t ]+/);
      Z = Le && Le[0];
    }
    tt === "application/xhtml+xml" && q === Ge && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const le = C ? T(w) : w;
    if (q === Ge) try {
      R = new c().parseFromString(le, tt);
    } catch {
    }
    if (!R || !R.documentElement) {
      R = F.createDocument(q, "template", null);
      try {
        R.documentElement.innerHTML = Q ? A : le;
      } catch {
      }
    }
    const $e = R.body || R.documentElement;
    return w && Z && $e.insertBefore(n.createTextNode(Z), $e.childNodes[0] || null), q === Ge ? ee.call(R, oe ? "html" : "body")[0] : oe ? R.documentElement : $e;
  }, Je = function(w) {
    const R = $ ? $(w) : w.ownerDocument;
    return Y.call(R || w, w, i.SHOW_ELEMENT | i.SHOW_COMMENT | i.SHOW_TEXT | i.SHOW_PROCESSING_INSTRUCTION | i.SHOW_CDATA_SECTION, null);
  }, Ct = function(w) {
    return w = Er(w, de, " "), w = Er(w, G, " "), w = Er(w, me, " "), w;
  }, vt = function(w) {
    var R;
    w.normalize();
    const Z = $ ? $(w) : w.ownerDocument, le = Y.call(Z || w, w, i.SHOW_TEXT | i.SHOW_COMMENT | i.SHOW_CDATA_SECTION | i.SHOW_PROCESSING_INSTRUCTION, null);
    let $e = le.nextNode();
    for (; $e; )
      $e.data = Ct($e.data), $e = le.nextNode();
    const Le = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    Le && nr(Le, (je) => {
      Tt(je.content) && vt(je.content);
    });
  }, hn = function(w) {
    const R = h ? h(w) : null;
    return typeof R != "string" || De(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== v(w) || typeof w.removeAttribute != "function" || typeof w.removeAttributeNode != "function" || typeof w.getAttributeNode != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== S(w) || w.childNodes !== b(w);
  }, Tt = function(w) {
    if (!S || typeof w != "object" || w === null) return !1;
    try {
      return S(w) === en.documentFragment;
    } catch {
      return !1;
    }
  }, mt = function(w) {
    if (!S || typeof w != "object" || w === null) return !1;
    try {
      return typeof S(w) == "number";
    } catch {
      return !1;
    }
  };
  function Zt(ne, w, R) {
    ne.length !== 0 && nr(ne, (Z) => {
      Z.call(t, w, R, Et);
    });
  }
  const ps = function(w, R) {
    return !!(pe && w.hasChildNodes() && !mt(w.firstElementChild) && It(No, w.textContent) && It(No, w.innerHTML) || pe && w.namespaceURI === Ge && pf[R] && (mt(w.firstElementChild) || typeof w.textContent == "string" && It(hf[R], w.textContent)) || w.nodeType === en.processingInstruction || pe && w.nodeType === en.comment && It($o, w.data));
  }, Kr = function(w, R) {
    if (w instanceof RegExp) return It(w, R);
    if (w instanceof Function) {
      for (var Z = arguments.length, le = new Array(Z > 2 ? Z - 2 : 0), $e = 2; $e < Z; $e++) le[$e - 2] = arguments[$e];
      return !!w(R, ...le);
    }
    return !1;
  }, $l = function(w, R, Z) {
    if (!Xe[R] && Qs(R) && Kr(qe.tagNameCheck, R)) return !1;
    if (yt && !xt[R]) {
      const le = _(w), $e = b(w);
      if ($e && le) {
        const Le = $e.length;
        for (let je = Le - 1; je >= 0; --je) {
          const it = w === Z ? x($e[je], !0) : $e[je];
          le.insertBefore(it, m(w));
        }
      }
    }
    return _n(w), !0;
  }, Xs = function(w, R, Z, le) {
    return w.length === 0 ? R : R === Z || R === le ? rn(R) : R;
  }, ar = function(w, R) {
    return w === R || _(w) !== null ? !1 : (Ce && j(w), !0);
  }, Zs = function(w, R) {
    if (Zt(se.beforeSanitizeElements, w, null), ar(w, R)) return !0;
    if (hn(w))
      return _n(w), !0;
    const Z = De(E(w));
    if (ue = Xs(se.uponSanitizeElement, ue, Ye, Re), Zt(se.uponSanitizeElement, w, {
      tagName: Z,
      allowedTags: ue
    }), ar(w, R)) return !0;
    if (ps(w, Z))
      return _n(w), !0;
    if (Xe[Z] || !(ot.tagCheck instanceof Function && ot.tagCheck(Z)) && !ue[Z]) {
      const le = $l(w, Z, R);
      return le === !1 && (Zt(se.afterSanitizeElements, w, null), ar(w, R)) ? !0 : le;
    }
    if (k(w) === en.element && !_s(w) || (Z === "noscript" || Z === "noembed" || Z === "noframes") && It(ff, w.innerHTML))
      return _n(w), !0;
    if (J && w.nodeType === en.text) {
      const le = Ct(w.textContent);
      w.textContent !== le && ($r(t.removed, { element: w.cloneNode() }), w.textContent = le);
    }
    return Zt(se.afterSanitizeElements, w, null), ar(w, R);
  }, Js = function(w, R, Z) {
    if (At[R] || U(R, w) || Me && (R === "id" || R === "name") && (Z in n || Z in Xt)) return !1;
    const le = ye[R] || ot.attributeCheck instanceof Function && ot.attributeCheck(R, w);
    return X && It(ce, R) || bt && It(xe, R) ? !0 : le ? fe[R] || It(st, Er(Z, Ae, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && bo(Z, "data:") === 0 && lt[w] || I && !It(_e, Er(Z, Ae, "")) ? !0 : !Z : Qs(w) && Kr(qe.tagNameCheck, w) && Kr(qe.attributeNameCheck, R, w) || R === "is" && qe.allowCustomizedBuiltInElements && Kr(qe.tagNameCheck, Z);
  }, El = Fe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Qs = function(w) {
    return !El[jr(w)] && It(Ie, w);
  }, Tl = function(w, R, Z, le) {
    if (C && typeof f == "object" && typeof f.getAttributeType == "function" && !Z) switch (f.getAttributeType(w, R)) {
      case "TrustedHTML":
        return T(le);
      case "TrustedScriptURL":
        return P(le);
    }
    return le;
  }, Al = function(w, R, Z, le) {
    try {
      return Z ? w.setAttributeNS(Z, R, le) : w.setAttribute(R, le), hn(w) ? (_n(w), !1) : !0;
    } catch {
      return Pt(R, w), !1;
    }
  }, eo = function(w, R) {
    if (Zt(se.beforeSanitizeAttributes, w, null), ar(w, R)) return;
    const Z = w.attributes;
    if (!Z || hn(w)) return;
    ye = Xs(se.uponSanitizeAttribute, ye, ht, Ve);
    const le = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let $e = Z.length;
    const Le = De(w.nodeName);
    for (; $e--; ) {
      const je = Z[$e], it = je.name, ln = je.namespaceURI, Jt = je.value, ir = De(it), ms = Jt;
      let jt = it === "value" ? ms : Gu(ms), to = !1;
      if (le.attrName = ir, le.attrValue = jt, le.keepAttr = !0, le.forceKeepAttr = void 0, Zt(se.uponSanitizeAttribute, w, le), jt = le.attrValue, Ot && (ir === "id" || ir === "name") && bo(jt, Lt) !== 0 && (Pt(it, w, je), jt = Lt + jt, to = !0), pe && It(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, jt)) {
        Pt(it, w, je);
        continue;
      }
      if (ir === "attributename" && go(jt, "href")) {
        Pt(it, w, je);
        continue;
      }
      if (!le.forceKeepAttr) {
        if (!le.keepAttr) {
          Pt(it, w, je);
          continue;
        }
        if (!V && It(_f, jt)) {
          Pt(it, w, je);
          continue;
        }
        if (J && (jt = Ct(jt)), !Js(Le, ir, jt)) {
          Pt(it, w, je);
          continue;
        }
        jt = Tl(Le, ir, ln, jt), jt !== ms && Al(w, it, ln, jt) && to && mo(t.removed);
      }
    }
    Zt(se.afterSanitizeAttributes, w, null), ar(w, R);
  }, Wr = function(w) {
    let R = null;
    const Z = Je(w);
    for (Zt(se.beforeSanitizeShadowDOM, w, null); R = Z.nextNode(); )
      if (Zt(se.uponSanitizeShadowNode, R, null), Zs(R, w), eo(R, w), Tt(R.content) && Wr(R.content), k(R) === en.element) {
        const le = p(R);
        Tt(le) && (hs(le), Wr(le));
      }
    Zt(se.afterSanitizeShadowDOM, w, null);
  }, hs = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const Z = R.pop();
      if (Z.shadow) {
        Wr(Z.shadow);
        continue;
      }
      const le = Z.node, $e = k(le) === en.element, Le = b(le);
      if (Le) for (let je = Le.length - 1; je >= 0; --je) R.push({
        node: Le[je],
        shadow: null
      });
      if ($e) {
        const je = h ? h(le) : null;
        if (typeof je == "string" && De(je) === "template") {
          const it = le.content;
          Tt(it) && R.push({
            node: it,
            shadow: null
          });
        }
      }
      if ($e) {
        const je = p(le);
        Tt(je) && R.push({
          node: null,
          shadow: je
        }, {
          node: je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ne) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, Z = null, le = null, $e = null;
    if (Q = !ne, Q && (ne = "<!-->"), typeof ne != "string" && !mt(ne) && (ne = Ju(ne), typeof ne != "string"))
      throw Bn("dirty is not a string, aborting");
    if (!t.isSupported) return ne;
    Ne ? (ue = Re, ye = Ve) : $n(w), (se.uponSanitizeElement.length > 0 || se.uponSanitizeAttribute.length > 0) && (ue = rn(ue)), se.uponSanitizeAttribute.length > 0 && (ye = rn(ye)), t.removed = [];
    const Le = Ce && typeof ne != "string" && mt(ne);
    if (Le) {
      he(ne);
      const ln = E(ne);
      if (typeof ln == "string") {
        const Jt = De(ln);
        if (!ue[Jt] || Xe[Jt])
          throw pn(ne), Bn("root node is forbidden and cannot be sanitized in-place");
      }
      if (hn(ne))
        throw pn(ne), Bn("root node is clobbered and cannot be sanitized in-place");
      try {
        hs(ne);
      } catch (Jt) {
        throw pn(ne), Jt;
      }
    } else if (mt(ne))
      R = ge("<!---->"), Z = R.ownerDocument.importNode(ne, !0), Z.nodeType === en.element && Z.nodeName === "BODY" || Z.nodeName === "HTML" ? R = Z : R.appendChild(Z), hs(R);
    else {
      if (!et && !J && !oe && ne.indexOf("<") === -1) return C && te ? T(ne) : ne;
      if (R = ge(ne), !R) return et ? null : te ? A : "";
    }
    R && Ze && _n(R.firstChild);
    const je = Le ? ne : R;
    try {
      const ln = Je(je);
      for (; le = ln.nextNode(); )
        Zs(le, je), eo(le, je), Tt(le.content) && Wr(le.content);
    } catch (ln) {
      throw Le && (pn(ne), nr(t.removed, (Jt) => {
        Jt.element && j(Jt.element);
      })), ln;
    }
    if (Le) {
      let ln = !1;
      if (nr(t.removed, (Jt) => {
        Jt.element && (Jt.element === ne && (ln = !0), j(Jt.element));
      }), ln) throw Bn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return J && vt(ne), ne;
    }
    if (et) {
      if (J && vt(R), Yt)
        for ($e = ae.call(R.ownerDocument); R.firstChild; ) $e.appendChild(R.firstChild);
      else $e = R;
      return (ye.shadowroot || ye.shadowrootmode) && ($e = we.call(r, $e, !0)), $e;
    }
    let it = oe ? R.outerHTML : R.innerHTML;
    return oe && ue["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && It(df, R.ownerDocument.doctype.name) && (it = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + it), J && (it = Ct(it)), C && te ? T(it) : it;
  }, t.setConfig = function() {
    let ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $n(ne), Ne = !0, Re = ue, Ve = ye;
  }, t.clearConfig = function() {
    Et = null, Ne = !1, Re = null, Ve = null, C = D, A = "";
  }, t.isValidAttribute = function(ne, w, R) {
    Et || $n({});
    const Z = De(ne), le = De(w);
    return Js(Z, le, R);
  }, t.addHook = function(ne, w) {
    typeof w == "function" && Gt(se, ne) && $r(se[ne], w);
  }, t.removeHook = function(ne, w) {
    if (Gt(se, ne)) {
      if (w !== void 0) {
        const R = Ku(se[ne], w);
        return R === -1 ? void 0 : Wu(se[ne], R, 1)[0];
      }
      return mo(se[ne]);
    }
  }, t.removeHooks = function(ne) {
    Gt(se, ne) && (se[ne] = []);
  }, t.removeAllHooks = function() {
    se = Eo();
  }, t;
}
var bf = ul();
const yf = "_editor_1783g_3", xf = "_toolbar_1783g_13", vf = "_tool_1783g_13", wf = "_separator_1783g_56", kf = "_area_1783g_63", Of = "_source_1783g_73", Yn = {
  editor: yf,
  toolbar: xf,
  tool: vf,
  separator: wf,
  area: kf,
  source: Of
}, Sf = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "separator",
  "undo",
  "redo",
  "removeFormat",
  "separator",
  "source"
], Ns = {
  bold: { label: "Bold", glyph: /* @__PURE__ */ o("b", { children: "B" }), command: "bold" },
  italic: { label: "Italic", glyph: /* @__PURE__ */ o("i", { children: "I" }), command: "italic" },
  underline: { label: "Underline", glyph: /* @__PURE__ */ o("u", { children: "U" }), command: "underline" },
  strikethrough: {
    label: "Strikethrough",
    glyph: /* @__PURE__ */ o("s", { children: "S" }),
    command: "strikeThrough"
  },
  undo: { label: "Undo", glyph: "↺", command: "undo" },
  redo: { label: "Redo", glyph: "↻", command: "redo" },
  removeFormat: {
    label: "Remove formatting",
    glyph: "Tₓ",
    command: "removeFormat"
  },
  source: { label: "Source", glyph: "</>", command: "source" }
};
function Nf(e) {
  if (typeof document > "u") return !1;
  const t = document.execCommand;
  if (typeof t != "function") return !1;
  try {
    return t.call(document, e);
  } catch {
    return !1;
  }
}
function qO({
  value: e,
  defaultValue: t = "",
  onChange: n,
  toolbar: r = Sf,
  readOnly: l = !1,
  disabled: a = !1,
  ariaLabel: d = "HTML editor",
  className: s,
  sanitize: i = !0
}) {
  const [c, f] = K(!1), [u, x] = K(t), g = re(null), y = re(t), m = B(
    (h) => i ? bf.sanitize(h) : h,
    [i]
  );
  be(() => {
    const h = g.current;
    e !== void 0 && h && h.innerHTML !== e && (h.innerHTML = e), e !== void 0 && (y.current = e);
  }, [e]);
  const b = B(
    (h) => {
      y.current = m(h), n?.(y.current);
    },
    [m, n]
  ), _ = B(
    (h) => {
      if (!(l || a) && (g.current?.focus(), Nf(Ns[h].command))) {
        const $ = g.current;
        $ && b($.innerHTML);
      }
    },
    [b, l, a]
  ), p = B(() => {
    l || a || (c ? (f(!1), b(u)) : (x(g.current?.innerHTML ?? ""), f(!0)));
  }, [c, u, m, b, l, a]), v = B(
    (h) => {
      if (!(h.ctrlKey || h.metaKey) || l || a) return;
      const $ = h.key.toLowerCase(), k = $ === "b" ? "bold" : $ === "i" ? "italic" : $ === "u" ? "underline" : null;
      k && (h.preventDefault(), _(k));
    },
    [_, l, a]
  ), S = B(() => {
    const h = g.current;
    h && b(h.innerHTML);
  }, [b]);
  return /* @__PURE__ */ M("div", { className: [Yn.editor, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o(
      "div",
      {
        role: "toolbar",
        "aria-label": `${d} toolbar`,
        className: Yn.toolbar,
        children: r.map(
          (h, $) => h === "separator" ? /* @__PURE__ */ o(
            "span",
            {
              role: "separator",
              className: Yn.separator
            },
            `sep-${$}`
          ) : h === "source" ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Yn.tool,
              "aria-label": "Source",
              "aria-pressed": c,
              disabled: a,
              onMouseDown: (k) => k.preventDefault(),
              onClick: p,
              children: "</>"
            },
            "source"
          ) : /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Yn.tool,
              "aria-label": Ns[h].label,
              disabled: a,
              onMouseDown: (k) => k.preventDefault(),
              onClick: () => _(h),
              children: Ns[h].glyph
            },
            h
          )
        )
      }
    ),
    c ? /* @__PURE__ */ o(
      "textarea",
      {
        className: Yn.source,
        "aria-label": `${d} source`,
        value: u,
        disabled: a,
        readOnly: l,
        onChange: (h) => {
          x(h.target.value), b(h.target.value);
        }
      }
    ) : /* @__PURE__ */ o(
      "div",
      {
        ref: g,
        className: Yn.area,
        contentEditable: !l && !a,
        suppressContentEditableWarning: !0,
        role: "textbox",
        "aria-label": d,
        "aria-multiline": "true",
        "aria-readonly": l || void 0,
        "aria-disabled": a || void 0,
        dangerouslySetInnerHTML: { __html: y.current },
        onInput: S,
        onKeyDown: v
      }
    )
  ] });
}
const $f = "_popup_ve7kd_4", fl = {
  popup: $f
}, _l = or(null);
function KO() {
  const e = Ln(_l);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function To(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Ef({ state: e }) {
  const t = re(null), [n, r] = K(null);
  return be(() => {
    const l = t.current;
    if (!l) return;
    const a = e.anchor.getBoundingClientRect(), d = l.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(a.left, window.innerWidth - d.width)
    );
    let i = a.bottom + 4;
    i + d.height > window.innerHeight && a.top - 4 - d.height >= 0 && (i = a.top - 4 - d.height), r({ left: s, top: Math.max(0, i) });
  }, [e]), be(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [fl.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: To(e.width),
        height: To(e.height)
      },
      children: e.content
    }
  );
}
function WO({ children: e }) {
  const [t, n] = K(null), r = re(0), l = re(null), a = B(() => {
    l.current?.(), l.current = null;
  }, []), d = B(() => {
    n((c) => c && (c.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), a(), null));
  }, [a]), s = B(
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
        u || (u = !0, n((x) => x?.seq !== f ? x : (x.invoker && document.body.contains(x.invoker) && x.invoker.focus({ preventScroll: !0 }), a(), null)));
      };
    },
    [a]
  );
  be(() => {
    if (!t) return;
    const c = (g) => {
      const y = document.querySelector(`.${fl.popup}`);
      y && !y.contains(g.target) && d();
    }, f = (g) => {
      g.key === "Escape" && (g.preventDefault(), d());
    }, u = () => d(), x = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", x), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", x);
    };
  }, [t, d]);
  const i = Se(
    () => ({ open: s, close: d, isOpen: t != null }),
    [s, d, t]
  );
  return /* @__PURE__ */ M(_l.Provider, { value: i, children: [
    e,
    t && /* @__PURE__ */ o(Ef, { state: t }, t.seq)
  ] });
}
const Tf = "_alert_146r9_1", Af = "_xs_146r9_28", Cf = "_sm_146r9_38", Df = "_lg_146r9_48", Mf = "_xl_146r9_58", If = "_primary_146r9_69", zf = "_secondary_146r9_74", Lf = "_light_146r9_79", Rf = "_base_146r9_84", Pf = "_dark_146r9_89", jf = "_info_146r9_94", Bf = "_success_146r9_99", Ff = "_warning_146r9_104", Hf = "_danger_146r9_109", Uf = "_flat_146r9_116", qf = "_outlined_146r9_123", Kf = "_filled_146r9_132", Wf = "_text_146r9_139", Gf = "_icon_146r9_181", Vf = "_content_146r9_192", Yf = "_title_146r9_197", Xf = "_body_146r9_203", Zf = "_dismiss_146r9_209", wn = {
  alert: Tf,
  xs: Af,
  sm: Cf,
  lg: Df,
  xl: Mf,
  primary: If,
  secondary: zf,
  light: Lf,
  base: Rf,
  dark: Pf,
  info: jf,
  success: Bf,
  warning: Ff,
  danger: Hf,
  flat: Uf,
  outlined: qf,
  filled: Kf,
  text: Wf,
  icon: Gf,
  content: Vf,
  title: Yf,
  body: Xf,
  dismiss: Zf,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, Jf = {
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
function GO({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: a,
  showIcon: d = !0,
  children: s,
  dismissible: i = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: u,
  className: x,
  ...g
}) {
  const [y, m] = K(!1);
  if (f === !1 || f === void 0 && y)
    return null;
  const b = () => {
    f === void 0 && m(!0), c?.(), u?.(!1);
  }, _ = e, p = el(t, "filled"), v = Fr(n), S = a ?? (d ? /* @__PURE__ */ o(Te, { icon: Jf[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...g,
      className: [
        wn.alert,
        wn[_],
        wn[p],
        v ? wn[v] : null,
        wn[r],
        x
      ].filter(Boolean).join(" "),
      children: [
        S != null && /* @__PURE__ */ o("span", { className: wn.icon, "aria-hidden": "true", children: S }),
        /* @__PURE__ */ M("div", { className: wn.content, children: [
          l && /* @__PURE__ */ o("div", { className: wn.title, children: l }),
          s && /* @__PURE__ */ o("div", { className: wn.body, children: s })
        ] }),
        i && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: wn.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Qf = "_skeleton_1xyce_1", e_ = "_text_1xyce_35", t_ = "_circle_1xyce_40", n_ = "_rect_1xyce_44", Ao = {
  skeleton: Qf,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: e_,
  circle: t_,
  rect: n_
};
function VO({
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
      className: [Ao.skeleton, Ao[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function as(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const r_ = "_row_juebr_1", s_ = "_start_juebr_14", o_ = "_center_juebr_18", l_ = "_end_juebr_22", a_ = "_stretch_juebr_26", i_ = "_baseline_juebr_30", c_ = "_normal_juebr_34", d_ = "_noWrap_juebr_90", u_ = "_wrapReverse_juebr_94", Xr = {
  row: r_,
  start: s_,
  center: o_,
  end: l_,
  stretch: a_,
  baseline: i_,
  normal: c_,
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
  noWrap: d_,
  wrapReverse: u_
};
function Co(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function YO({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: a,
  style: d,
  ...s
}) {
  const i = e != null ? as(e) : null, c = t != null ? as(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...i ? {
      columnGap: i,
      "--dx-col-gap": i
    } : {},
    ...c ? { rowGap: c } : {},
    ...d
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Xr.row,
        Xr[n],
        Xr[`justify-${r}`],
        Co(l) != null ? Xr[Co(l)] : null,
        a
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const f_ = "_column_sh0ss_1", __ = "_Size1_sh0ss_15", p_ = "_Size2_sh0ss_24", h_ = "_Size3_sh0ss_33", m_ = "_Size4_sh0ss_42", g_ = "_Size5_sh0ss_51", b_ = "_Size6_sh0ss_60", y_ = "_Size7_sh0ss_69", x_ = "_Size8_sh0ss_78", v_ = "_Size9_sh0ss_87", w_ = "_Size10_sh0ss_96", k_ = "_Size11_sh0ss_105", O_ = "_Size12_sh0ss_114", S_ = "_Offset0_sh0ss_119", N_ = "_Offset1_sh0ss_122", $_ = "_Offset2_sh0ss_127", E_ = "_Offset3_sh0ss_132", T_ = "_Offset4_sh0ss_137", A_ = "_Offset5_sh0ss_142", C_ = "_Offset6_sh0ss_147", D_ = "_Offset7_sh0ss_152", M_ = "_Offset8_sh0ss_157", I_ = "_Offset9_sh0ss_162", z_ = "_Offset10_sh0ss_167", L_ = "_Offset11_sh0ss_172", R_ = "_Offset12_sh0ss_177", P_ = "_OrderFirst_sh0ss_182", j_ = "_OrderLast_sh0ss_185", B_ = "_Order0_sh0ss_188", F_ = "_Order1_sh0ss_191", H_ = "_Order2_sh0ss_194", U_ = "_Order3_sh0ss_197", q_ = "_Order4_sh0ss_200", K_ = "_Order5_sh0ss_203", W_ = "_Order6_sh0ss_206", G_ = "_Order7_sh0ss_209", V_ = "_Order8_sh0ss_212", Y_ = "_Order9_sh0ss_215", X_ = "_Order10_sh0ss_218", Z_ = "_Order11_sh0ss_221", J_ = "_Order12_sh0ss_224", Q_ = "_xsSize1_sh0ss_229", ep = "_xsSize2_sh0ss_238", tp = "_xsSize3_sh0ss_247", np = "_xsSize4_sh0ss_256", rp = "_xsSize5_sh0ss_265", sp = "_xsSize6_sh0ss_274", op = "_xsSize7_sh0ss_283", lp = "_xsSize8_sh0ss_292", ap = "_xsSize9_sh0ss_301", ip = "_xsSize10_sh0ss_310", cp = "_xsSize11_sh0ss_321", dp = "_xsSize12_sh0ss_332", up = "_xsOffset0_sh0ss_337", fp = "_xsOffset1_sh0ss_340", _p = "_xsOffset2_sh0ss_345", pp = "_xsOffset3_sh0ss_350", hp = "_xsOffset4_sh0ss_355", mp = "_xsOffset5_sh0ss_360", gp = "_xsOffset6_sh0ss_365", bp = "_xsOffset7_sh0ss_370", yp = "_xsOffset8_sh0ss_375", xp = "_xsOffset9_sh0ss_380", vp = "_xsOffset10_sh0ss_385", wp = "_xsOffset11_sh0ss_391", kp = "_xsOffset12_sh0ss_397", Op = "_xsOrderFirst_sh0ss_403", Sp = "_xsOrderLast_sh0ss_406", Np = "_xsOrder0_sh0ss_409", $p = "_xsOrder1_sh0ss_412", Ep = "_xsOrder2_sh0ss_415", Tp = "_xsOrder3_sh0ss_418", Ap = "_xsOrder4_sh0ss_421", Cp = "_xsOrder5_sh0ss_424", Dp = "_xsOrder6_sh0ss_427", Mp = "_xsOrder7_sh0ss_430", Ip = "_xsOrder8_sh0ss_433", zp = "_xsOrder9_sh0ss_436", Lp = "_xsOrder10_sh0ss_439", Rp = "_xsOrder11_sh0ss_442", Pp = "_xsOrder12_sh0ss_445", jp = "_smSize1_sh0ss_451", Bp = "_smSize2_sh0ss_460", Fp = "_smSize3_sh0ss_469", Hp = "_smSize4_sh0ss_478", Up = "_smSize5_sh0ss_487", qp = "_smSize6_sh0ss_496", Kp = "_smSize7_sh0ss_505", Wp = "_smSize8_sh0ss_514", Gp = "_smSize9_sh0ss_523", Vp = "_smSize10_sh0ss_532", Yp = "_smSize11_sh0ss_543", Xp = "_smSize12_sh0ss_554", Zp = "_smOffset0_sh0ss_559", Jp = "_smOffset1_sh0ss_562", Qp = "_smOffset2_sh0ss_567", eh = "_smOffset3_sh0ss_572", th = "_smOffset4_sh0ss_577", nh = "_smOffset5_sh0ss_582", rh = "_smOffset6_sh0ss_587", sh = "_smOffset7_sh0ss_592", oh = "_smOffset8_sh0ss_597", lh = "_smOffset9_sh0ss_602", ah = "_smOffset10_sh0ss_607", ih = "_smOffset11_sh0ss_613", ch = "_smOffset12_sh0ss_619", dh = "_smOrderFirst_sh0ss_625", uh = "_smOrderLast_sh0ss_628", fh = "_smOrder0_sh0ss_631", _h = "_smOrder1_sh0ss_634", ph = "_smOrder2_sh0ss_637", hh = "_smOrder3_sh0ss_640", mh = "_smOrder4_sh0ss_643", gh = "_smOrder5_sh0ss_646", bh = "_smOrder6_sh0ss_649", yh = "_smOrder7_sh0ss_652", xh = "_smOrder8_sh0ss_655", vh = "_smOrder9_sh0ss_658", wh = "_smOrder10_sh0ss_661", kh = "_smOrder11_sh0ss_664", Oh = "_smOrder12_sh0ss_667", Sh = "_mdSize1_sh0ss_673", Nh = "_mdSize2_sh0ss_682", $h = "_mdSize3_sh0ss_691", Eh = "_mdSize4_sh0ss_700", Th = "_mdSize5_sh0ss_709", Ah = "_mdSize6_sh0ss_718", Ch = "_mdSize7_sh0ss_727", Dh = "_mdSize8_sh0ss_736", Mh = "_mdSize9_sh0ss_745", Ih = "_mdSize10_sh0ss_754", zh = "_mdSize11_sh0ss_765", Lh = "_mdSize12_sh0ss_776", Rh = "_mdOffset0_sh0ss_781", Ph = "_mdOffset1_sh0ss_784", jh = "_mdOffset2_sh0ss_789", Bh = "_mdOffset3_sh0ss_794", Fh = "_mdOffset4_sh0ss_799", Hh = "_mdOffset5_sh0ss_804", Uh = "_mdOffset6_sh0ss_809", qh = "_mdOffset7_sh0ss_814", Kh = "_mdOffset8_sh0ss_819", Wh = "_mdOffset9_sh0ss_824", Gh = "_mdOffset10_sh0ss_829", Vh = "_mdOffset11_sh0ss_835", Yh = "_mdOffset12_sh0ss_841", Xh = "_mdOrderFirst_sh0ss_847", Zh = "_mdOrderLast_sh0ss_850", Jh = "_mdOrder0_sh0ss_853", Qh = "_mdOrder1_sh0ss_856", em = "_mdOrder2_sh0ss_859", tm = "_mdOrder3_sh0ss_862", nm = "_mdOrder4_sh0ss_865", rm = "_mdOrder5_sh0ss_868", sm = "_mdOrder6_sh0ss_871", om = "_mdOrder7_sh0ss_874", lm = "_mdOrder8_sh0ss_877", am = "_mdOrder9_sh0ss_880", im = "_mdOrder10_sh0ss_883", cm = "_mdOrder11_sh0ss_886", dm = "_mdOrder12_sh0ss_889", um = "_lgSize1_sh0ss_895", fm = "_lgSize2_sh0ss_904", _m = "_lgSize3_sh0ss_913", pm = "_lgSize4_sh0ss_922", hm = "_lgSize5_sh0ss_931", mm = "_lgSize6_sh0ss_940", gm = "_lgSize7_sh0ss_949", bm = "_lgSize8_sh0ss_958", ym = "_lgSize9_sh0ss_967", xm = "_lgSize10_sh0ss_976", vm = "_lgSize11_sh0ss_987", wm = "_lgSize12_sh0ss_998", km = "_lgOffset0_sh0ss_1003", Om = "_lgOffset1_sh0ss_1006", Sm = "_lgOffset2_sh0ss_1011", Nm = "_lgOffset3_sh0ss_1016", $m = "_lgOffset4_sh0ss_1021", Em = "_lgOffset5_sh0ss_1026", Tm = "_lgOffset6_sh0ss_1031", Am = "_lgOffset7_sh0ss_1036", Cm = "_lgOffset8_sh0ss_1041", Dm = "_lgOffset9_sh0ss_1046", Mm = "_lgOffset10_sh0ss_1051", Im = "_lgOffset11_sh0ss_1057", zm = "_lgOffset12_sh0ss_1063", Lm = "_lgOrderFirst_sh0ss_1069", Rm = "_lgOrderLast_sh0ss_1072", Pm = "_lgOrder0_sh0ss_1075", jm = "_lgOrder1_sh0ss_1078", Bm = "_lgOrder2_sh0ss_1081", Fm = "_lgOrder3_sh0ss_1084", Hm = "_lgOrder4_sh0ss_1087", Um = "_lgOrder5_sh0ss_1090", qm = "_lgOrder6_sh0ss_1093", Km = "_lgOrder7_sh0ss_1096", Wm = "_lgOrder8_sh0ss_1099", Gm = "_lgOrder9_sh0ss_1102", Vm = "_lgOrder10_sh0ss_1105", Ym = "_lgOrder11_sh0ss_1108", Xm = "_lgOrder12_sh0ss_1111", Zm = "_xlSize1_sh0ss_1117", Jm = "_xlSize2_sh0ss_1126", Qm = "_xlSize3_sh0ss_1135", e1 = "_xlSize4_sh0ss_1144", t1 = "_xlSize5_sh0ss_1153", n1 = "_xlSize6_sh0ss_1162", r1 = "_xlSize7_sh0ss_1171", s1 = "_xlSize8_sh0ss_1180", o1 = "_xlSize9_sh0ss_1189", l1 = "_xlSize10_sh0ss_1198", a1 = "_xlSize11_sh0ss_1209", i1 = "_xlSize12_sh0ss_1220", c1 = "_xlOffset0_sh0ss_1225", d1 = "_xlOffset1_sh0ss_1228", u1 = "_xlOffset2_sh0ss_1233", f1 = "_xlOffset3_sh0ss_1238", _1 = "_xlOffset4_sh0ss_1243", p1 = "_xlOffset5_sh0ss_1248", h1 = "_xlOffset6_sh0ss_1253", m1 = "_xlOffset7_sh0ss_1258", g1 = "_xlOffset8_sh0ss_1263", b1 = "_xlOffset9_sh0ss_1268", y1 = "_xlOffset10_sh0ss_1273", x1 = "_xlOffset11_sh0ss_1279", v1 = "_xlOffset12_sh0ss_1285", w1 = "_xlOrderFirst_sh0ss_1291", k1 = "_xlOrderLast_sh0ss_1294", O1 = "_xlOrder0_sh0ss_1297", S1 = "_xlOrder1_sh0ss_1300", N1 = "_xlOrder2_sh0ss_1303", $1 = "_xlOrder3_sh0ss_1306", E1 = "_xlOrder4_sh0ss_1309", T1 = "_xlOrder5_sh0ss_1312", A1 = "_xlOrder6_sh0ss_1315", C1 = "_xlOrder7_sh0ss_1318", D1 = "_xlOrder8_sh0ss_1321", M1 = "_xlOrder9_sh0ss_1324", I1 = "_xlOrder10_sh0ss_1327", z1 = "_xlOrder11_sh0ss_1330", L1 = "_xlOrder12_sh0ss_1333", R1 = "_xxSize1_sh0ss_1339", P1 = "_xxSize2_sh0ss_1348", j1 = "_xxSize3_sh0ss_1357", B1 = "_xxSize4_sh0ss_1366", F1 = "_xxSize5_sh0ss_1375", H1 = "_xxSize6_sh0ss_1384", U1 = "_xxSize7_sh0ss_1393", q1 = "_xxSize8_sh0ss_1402", K1 = "_xxSize9_sh0ss_1411", W1 = "_xxSize10_sh0ss_1420", G1 = "_xxSize11_sh0ss_1431", V1 = "_xxSize12_sh0ss_1442", Y1 = "_xxOffset0_sh0ss_1447", X1 = "_xxOffset1_sh0ss_1450", Z1 = "_xxOffset2_sh0ss_1455", J1 = "_xxOffset3_sh0ss_1460", Q1 = "_xxOffset4_sh0ss_1465", eg = "_xxOffset5_sh0ss_1470", tg = "_xxOffset6_sh0ss_1475", ng = "_xxOffset7_sh0ss_1480", rg = "_xxOffset8_sh0ss_1485", sg = "_xxOffset9_sh0ss_1490", og = "_xxOffset10_sh0ss_1495", lg = "_xxOffset11_sh0ss_1501", ag = "_xxOffset12_sh0ss_1507", ig = "_xxOrderFirst_sh0ss_1513", cg = "_xxOrderLast_sh0ss_1516", dg = "_xxOrder0_sh0ss_1519", ug = "_xxOrder1_sh0ss_1522", fg = "_xxOrder2_sh0ss_1525", _g = "_xxOrder3_sh0ss_1528", pg = "_xxOrder4_sh0ss_1531", hg = "_xxOrder5_sh0ss_1534", mg = "_xxOrder6_sh0ss_1537", gg = "_xxOrder7_sh0ss_1540", bg = "_xxOrder8_sh0ss_1543", yg = "_xxOrder9_sh0ss_1546", xg = "_xxOrder10_sh0ss_1549", vg = "_xxOrder11_sh0ss_1552", wg = "_xxOrder12_sh0ss_1555", Zr = {
  column: f_,
  Size1: __,
  Size2: p_,
  Size3: h_,
  Size4: m_,
  Size5: g_,
  Size6: b_,
  Size7: y_,
  Size8: x_,
  Size9: v_,
  Size10: w_,
  Size11: k_,
  Size12: O_,
  Offset0: S_,
  Offset1: N_,
  Offset2: $_,
  Offset3: E_,
  Offset4: T_,
  Offset5: A_,
  Offset6: C_,
  Offset7: D_,
  Offset8: M_,
  Offset9: I_,
  Offset10: z_,
  Offset11: L_,
  Offset12: R_,
  OrderFirst: P_,
  OrderLast: j_,
  Order0: B_,
  Order1: F_,
  Order2: H_,
  Order3: U_,
  Order4: q_,
  Order5: K_,
  Order6: W_,
  Order7: G_,
  Order8: V_,
  Order9: Y_,
  Order10: X_,
  Order11: Z_,
  Order12: J_,
  xsSize1: Q_,
  xsSize2: ep,
  xsSize3: tp,
  xsSize4: np,
  xsSize5: rp,
  xsSize6: sp,
  xsSize7: op,
  xsSize8: lp,
  xsSize9: ap,
  xsSize10: ip,
  xsSize11: cp,
  xsSize12: dp,
  xsOffset0: up,
  xsOffset1: fp,
  xsOffset2: _p,
  xsOffset3: pp,
  xsOffset4: hp,
  xsOffset5: mp,
  xsOffset6: gp,
  xsOffset7: bp,
  xsOffset8: yp,
  xsOffset9: xp,
  xsOffset10: vp,
  xsOffset11: wp,
  xsOffset12: kp,
  xsOrderFirst: Op,
  xsOrderLast: Sp,
  xsOrder0: Np,
  xsOrder1: $p,
  xsOrder2: Ep,
  xsOrder3: Tp,
  xsOrder4: Ap,
  xsOrder5: Cp,
  xsOrder6: Dp,
  xsOrder7: Mp,
  xsOrder8: Ip,
  xsOrder9: zp,
  xsOrder10: Lp,
  xsOrder11: Rp,
  xsOrder12: Pp,
  smSize1: jp,
  smSize2: Bp,
  smSize3: Fp,
  smSize4: Hp,
  smSize5: Up,
  smSize6: qp,
  smSize7: Kp,
  smSize8: Wp,
  smSize9: Gp,
  smSize10: Vp,
  smSize11: Yp,
  smSize12: Xp,
  smOffset0: Zp,
  smOffset1: Jp,
  smOffset2: Qp,
  smOffset3: eh,
  smOffset4: th,
  smOffset5: nh,
  smOffset6: rh,
  smOffset7: sh,
  smOffset8: oh,
  smOffset9: lh,
  smOffset10: ah,
  smOffset11: ih,
  smOffset12: ch,
  smOrderFirst: dh,
  smOrderLast: uh,
  smOrder0: fh,
  smOrder1: _h,
  smOrder2: ph,
  smOrder3: hh,
  smOrder4: mh,
  smOrder5: gh,
  smOrder6: bh,
  smOrder7: yh,
  smOrder8: xh,
  smOrder9: vh,
  smOrder10: wh,
  smOrder11: kh,
  smOrder12: Oh,
  mdSize1: Sh,
  mdSize2: Nh,
  mdSize3: $h,
  mdSize4: Eh,
  mdSize5: Th,
  mdSize6: Ah,
  mdSize7: Ch,
  mdSize8: Dh,
  mdSize9: Mh,
  mdSize10: Ih,
  mdSize11: zh,
  mdSize12: Lh,
  mdOffset0: Rh,
  mdOffset1: Ph,
  mdOffset2: jh,
  mdOffset3: Bh,
  mdOffset4: Fh,
  mdOffset5: Hh,
  mdOffset6: Uh,
  mdOffset7: qh,
  mdOffset8: Kh,
  mdOffset9: Wh,
  mdOffset10: Gh,
  mdOffset11: Vh,
  mdOffset12: Yh,
  mdOrderFirst: Xh,
  mdOrderLast: Zh,
  mdOrder0: Jh,
  mdOrder1: Qh,
  mdOrder2: em,
  mdOrder3: tm,
  mdOrder4: nm,
  mdOrder5: rm,
  mdOrder6: sm,
  mdOrder7: om,
  mdOrder8: lm,
  mdOrder9: am,
  mdOrder10: im,
  mdOrder11: cm,
  mdOrder12: dm,
  lgSize1: um,
  lgSize2: fm,
  lgSize3: _m,
  lgSize4: pm,
  lgSize5: hm,
  lgSize6: mm,
  lgSize7: gm,
  lgSize8: bm,
  lgSize9: ym,
  lgSize10: xm,
  lgSize11: vm,
  lgSize12: wm,
  lgOffset0: km,
  lgOffset1: Om,
  lgOffset2: Sm,
  lgOffset3: Nm,
  lgOffset4: $m,
  lgOffset5: Em,
  lgOffset6: Tm,
  lgOffset7: Am,
  lgOffset8: Cm,
  lgOffset9: Dm,
  lgOffset10: Mm,
  lgOffset11: Im,
  lgOffset12: zm,
  lgOrderFirst: Lm,
  lgOrderLast: Rm,
  lgOrder0: Pm,
  lgOrder1: jm,
  lgOrder2: Bm,
  lgOrder3: Fm,
  lgOrder4: Hm,
  lgOrder5: Um,
  lgOrder6: qm,
  lgOrder7: Km,
  lgOrder8: Wm,
  lgOrder9: Gm,
  lgOrder10: Vm,
  lgOrder11: Ym,
  lgOrder12: Xm,
  xlSize1: Zm,
  xlSize2: Jm,
  xlSize3: Qm,
  xlSize4: e1,
  xlSize5: t1,
  xlSize6: n1,
  xlSize7: r1,
  xlSize8: s1,
  xlSize9: o1,
  xlSize10: l1,
  xlSize11: a1,
  xlSize12: i1,
  xlOffset0: c1,
  xlOffset1: d1,
  xlOffset2: u1,
  xlOffset3: f1,
  xlOffset4: _1,
  xlOffset5: p1,
  xlOffset6: h1,
  xlOffset7: m1,
  xlOffset8: g1,
  xlOffset9: b1,
  xlOffset10: y1,
  xlOffset11: x1,
  xlOffset12: v1,
  xlOrderFirst: w1,
  xlOrderLast: k1,
  xlOrder0: O1,
  xlOrder1: S1,
  xlOrder2: N1,
  xlOrder3: $1,
  xlOrder4: E1,
  xlOrder5: T1,
  xlOrder6: A1,
  xlOrder7: C1,
  xlOrder8: D1,
  xlOrder9: M1,
  xlOrder10: I1,
  xlOrder11: z1,
  xlOrder12: L1,
  xxSize1: R1,
  xxSize2: P1,
  xxSize3: j1,
  xxSize4: B1,
  xxSize5: F1,
  xxSize6: H1,
  xxSize7: U1,
  xxSize8: q1,
  xxSize9: K1,
  xxSize10: W1,
  xxSize11: G1,
  xxSize12: V1,
  xxOffset0: Y1,
  xxOffset1: X1,
  xxOffset2: Z1,
  xxOffset3: J1,
  xxOffset4: Q1,
  xxOffset5: eg,
  xxOffset6: tg,
  xxOffset7: ng,
  xxOffset8: rg,
  xxOffset9: sg,
  xxOffset10: og,
  xxOffset11: lg,
  xxOffset12: ag,
  xxOrderFirst: ig,
  xxOrderLast: cg,
  xxOrder0: dg,
  xxOrder1: ug,
  xxOrder2: fg,
  xxOrder3: _g,
  xxOrder4: pg,
  xxOrder5: hg,
  xxOrder6: mg,
  xxOrder7: gg,
  xxOrder8: bg,
  xxOrder9: yg,
  xxOrder10: xg,
  xxOrder11: vg,
  xxOrder12: wg
}, kg = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Og(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Sg(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Ng(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function $g(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Ng(n, t), `${e}Order${t}`);
}
function XO({ className: e, style: t, ...n }) {
  const r = [Zr.column], l = { ...t };
  for (const [D, z, O, N] of kg) {
    const T = n[z], P = n[O], L = n[N];
    if (T != null) {
      Og(z, T);
      const H = Zr[`${D}Size${T}`];
      H && r.push(H);
    }
    if (P != null) {
      Sg(O, P);
      const H = Zr[`${D}Offset${P}`];
      H && r.push(H);
    }
    if (L != null) {
      const H = Zr[$g(D, L, N)];
      H && r.push(H);
    }
  }
  const {
    size: a,
    offset: d,
    sizeXs: s,
    offsetXs: i,
    sizeSm: c,
    offsetSm: f,
    sizeMd: u,
    offsetMd: x,
    sizeLg: g,
    offsetLg: y,
    sizeXl: m,
    offsetXl: b,
    sizeXx: _,
    offsetXx: p,
    order: v,
    orderXs: S,
    orderSm: h,
    orderMd: $,
    orderLg: k,
    orderXl: E,
    orderXx: C,
    ...A
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...A
    }
  );
}
const Eg = "_stack_bmbbp_1", Ar = {
  stack: Eg,
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
function Do(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function ZO({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: l,
  justify: a,
  className: d,
  style: s,
  ...i
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: as(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Ar.stack,
        Ar[`dir-${c}`],
        Do(n) !== "wrap" ? Ar[`wrap-${Do(n)}`] : null,
        l != null ? Ar[`align-${l}`] : null,
        a != null ? Ar[`justify-${a}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const Tg = "_autogrid_16x9f_1", Ag = {
  autogrid: Tg
};
function JO({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: as(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Ag.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const Cg = "_layout_fxvw1_1", Dg = "_row_fxvw1_7", Mg = "_grid_fxvw1_21", Ig = "_gridRight_fxvw1_27", zg = "_gridHeader_fxvw1_31", Lg = "_gridFooter_fxvw1_36", Rg = "_gridContents_fxvw1_41", Pg = "_gridBody_fxvw1_45", Tn = {
  layout: Cg,
  row: Dg,
  grid: Mg,
  gridRight: Ig,
  gridHeader: zg,
  gridFooter: Lg,
  gridContents: Rg,
  gridBody: Pg
}, jg = "_footer_3be5w_1", Bg = "_sticky_3be5w_9", Mo = {
  footer: jg,
  sticky: Bg
};
function Fg({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [Mo.footer, e ? Mo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Hg = "_header_1tw8b_1", Ug = "_sticky_1tw8b_9", Io = {
  header: Hg,
  sticky: Ug
};
function qg({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [Io.header, e ? Io.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Kg = "_sidebar_175d5_1", Wg = "_sticky_175d5_23", Gg = "_left_175d5_41", Vg = "_right_175d5_45", Yg = "_start_175d5_50", Xg = "_end_175d5_54", Zg = "_fullHeight_175d5_60", Jg = "_collapsed_175d5_64", Qg = "_responsive_175d5_72", eb = "_overlay_175d5_80", tb = "_mask_175d5_108", Hn = {
  sidebar: Kg,
  sticky: Wg,
  left: Gg,
  right: Vg,
  start: Yg,
  end: Xg,
  fullHeight: Zg,
  collapsed: Jg,
  responsive: Qg,
  overlay: eb,
  mask: tb
};
function nb({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: a = !1,
  onClose: d,
  className: s,
  children: i,
  ...c
}) {
  return be(() => {
    if (!r || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ M(kt, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${Hn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          Hn.sidebar,
          Hn[e],
          t ? null : Hn.collapsed,
          n ? Hn.responsive : null,
          r ? [Hn.overlay, "se-sidebar--overlay"] : null,
          l ? Hn.fullHeight : null,
          a && !r && !l ? Hn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: i
      }
    )
  ] });
}
function QO(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(kt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], a = [], d = [], s = [], i = [], c = [];
  Hr.forEach(n, (x) => {
    if (!Ut(x)) {
      d.push(x);
      return;
    }
    if (x.type === qg)
      l.push(x);
    else if (x.type === Fg)
      a.push(x);
    else if (x.type === nb) {
      const g = x, y = g.props.position;
      c.push(g), (y === "right" || y === "end" ? i : s).push(g);
    } else
      d.push(x);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const x = u ? i : s;
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          Tn.layout,
          Tn.grid,
          u ? Tn.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          l.length > 0 && /* @__PURE__ */ o("div", { className: Tn.gridHeader, children: l }),
          /* @__PURE__ */ M("div", { className: Tn.gridContents, children: [
            x,
            /* @__PURE__ */ o("div", { className: Tn.gridBody, children: d })
          ] }),
          a.length > 0 && /* @__PURE__ */ o("div", { className: Tn.gridFooter, children: a })
        ]
      }
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Tn.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        l,
        /* @__PURE__ */ M("div", { className: Tn.row, children: [
          s,
          d,
          i
        ] }),
        a
      ]
    }
  );
}
const rb = "_body_1ge00_4", sb = "_bare_1ge00_12", zo = {
  body: rb,
  bare: sb
};
function eS({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [zo.body, t ? null : zo.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const ob = "_toggle_lxnk5_1", lb = {
  toggle: ob
};
function tS({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [lb.toggle, n].filter(Boolean).join(" "),
      ...a,
      children: l ?? /* @__PURE__ */ o(Te, { icon: e, size: 20 })
    }
  );
}
const ab = "_track_14127_1", ib = "_bar_14127_31", cb = "_primary_14127_39", db = "_success_14127_43", ub = "_warning_14127_47", fb = "_danger_14127_51", _b = "_indeterminate_14127_149", pb = "_circular_14127_163", hb = "_fill_14127_203", tn = {
  track: ab,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: ib,
  primary: cb,
  success: db,
  warning: ub,
  danger: fb,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: _b,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: pb,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: hb,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function nS({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: a = "linear",
  size: d = "md",
  className: s,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (a === "circular") {
    const g = typeof d == "string", y = 2, m = 10.5, b = 2 * Math.PI * m, _ = b * (l ? 0.75 : 1), p = l ? 0 : b * (1 - u / 100), v = Fr(r);
    return /* @__PURE__ */ M(
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
          tn.circular,
          tn[n],
          v ? tn[v] : null,
          g ? tn[`circular-${d}`] : null,
          l ? tn.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: tn.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: y
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: tn.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: y,
              strokeDasharray: `${_} ${b}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const x = Fr(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        tn.track,
        tn[n],
        x ? tn[x] : null,
        typeof d == "string" ? tn[`linear-${d}`] : null,
        l ? tn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: tn.bar,
          style: l ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const mb = "_wrapper_tk30z_1", gb = {
  wrapper: mb
}, bb = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], pl = "dx-palette", yb = "data-palette";
function xb(e, t) {
  const n = e === void 0 ? pl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function vb(e, t) {
  const n = e === void 0 ? pl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function rS({
  themes: e = bb,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = yb,
  onChange: a,
  label: d = "Theme",
  placeholder: s = "Theme…",
  id: i,
  size: c = "md",
  className: f
}) {
  const [u, x] = K(void 0), g = t !== void 0, y = t ?? u ?? xb(r, e) ?? n, m = y ?? "", b = re(void 0);
  be(() => {
    if (g) return;
    const p = document.documentElement;
    if (y === void 0) {
      b.current !== void 0 && p.getAttribute(l) === b.current && (p.removeAttribute(l), b.current = void 0);
      return;
    }
    p.setAttribute(l, y), b.current = y;
  }, [y, l, g]);
  const _ = (p) => {
    const v = p.target.value;
    g || (x(v), vb(r, v)), a?.(v);
  };
  return /* @__PURE__ */ M("label", { className: [gb.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ M(sr, { id: i, size: c, value: m, onChange: _, children: [
      y === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      y !== void 0 && !e.includes(y) && /* @__PURE__ */ o("option", { value: y, children: y }),
      e.map((p) => /* @__PURE__ */ o("option", { value: p, children: p }, p))
    ] })
  ] });
}
function wb(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Ws(e) {
  const [t, n] = K(() => wb(e));
  return be(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (a) => n(a.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const kb = "_pressed_12x15_8", Ob = {
  pressed: kb
}, Sb = rt(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: l,
    toggleSeverity: a = "primary",
    toggleShade: d = "darker",
    toggleContent: s,
    size: i = "md",
    className: c,
    onClick: f,
    children: u,
    variant: x,
    severity: g,
    shade: y,
    ...m
  }, b) {
    const [_, p] = K(n), v = t ?? _, S = (h) => {
      const $ = !v;
      t === void 0 && p($), r?.($), f?.(h);
    };
    return /* @__PURE__ */ o(
      rr,
      {
        ...m,
        ref: b,
        variant: v && l ? l : x,
        severity: v ? a : g,
        shade: v ? d : y,
        size: i,
        "aria-pressed": v,
        className: [v ? Ob.pressed : null, c].filter(Boolean).join(" "),
        onClick: S,
        children: v && s !== void 0 ? s : u
      }
    );
  }
), hl = "dx-theme";
function Nb(e) {
  const t = e === void 0 ? hl : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function $b(e, t) {
  const n = e === void 0 ? hl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function sS({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: a,
  className: d,
  size: s
}) {
  const i = Ws("(prefers-color-scheme: dark)"), [c, f] = K(void 0), u = e !== void 0, x = e ?? c ?? Nb(n) ?? t ?? "system", g = x === "system" ? i ? "dark" : "light" : x;
  return be(() => {
    if (!u) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, u]), /* @__PURE__ */ o(
    Sb,
    {
      id: a,
      size: s,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: g === "dark",
      onChange: (m) => {
        const b = m ? "dark" : "light";
        u || (f(b), $b(n, b)), r?.(b);
      },
      toggleContent: /* @__PURE__ */ o(Te, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Te, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const ml = "dx-palette", gl = "dx-theme", Is = "data-palette", zs = "data-theme", Ls = /* @__PURE__ */ new Set();
function Eb() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Is), t = document.documentElement.getAttribute(zs);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function Gs(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Is) : document.documentElement.setAttribute(Is, e.theme), e.appearance == null ? document.documentElement.removeAttribute(zs) : document.documentElement.setAttribute(zs, e.appearance));
}
function bl(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function Lo(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let Ro = !1;
function br() {
  const e = Eb();
  if (!Ro) {
    Ro = !0;
    const t = Lo(ml), n = Lo(gl), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && Gs(l), l;
  }
  return e;
}
function yl() {
  const e = br();
  Ls.forEach((t) => t({ ...e }));
}
function Po(e) {
  return Ls.add(e), () => {
    Ls.delete(e);
  };
}
function oS() {
  return br().theme;
}
function Tb(e) {
  const t = br();
  t.theme !== e && (t.theme = e, Gs(t), bl(ml, e), yl());
}
function lS() {
  return br().appearance;
}
function Ab(e) {
  const t = br();
  t.appearance !== e && (t.appearance = e, Gs(t), bl(gl, e), yl());
}
function aS() {
  const [, e] = K(0);
  be(() => Po(() => e((n) => n + 1)), []);
  const t = br();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: Tb,
    setAppearance: Ab,
    subscribe: Po
  };
}
function Cb(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const a = new DataView(l.buffer);
  a.setUint32(r - 8, n >>> 0, !0), a.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (m, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), i = (m, b) => m + b | 0, c = (m, b) => m << b | m >>> 32 - b;
  let f = 1732584193, u = 4023233417, x = 2562383102, g = 271733878;
  for (let m = 0; m < r; m += 64) {
    const b = [];
    for (let h = 0; h < 16; h += 1)
      b.push(a.getUint32(m + h * 4, !0));
    let _ = f, p = u, v = x, S = g;
    for (let h = 0; h < 64; h += 1) {
      let $, k;
      h < 16 ? ($ = p & v | ~p & S, k = h) : h < 32 ? ($ = S & p | ~S & v, k = (5 * h + 1) % 16) : h < 48 ? ($ = p ^ v ^ S, k = (3 * h + 5) % 16) : ($ = v ^ (p | ~S), k = 7 * h % 16), $ = i(i(i($, _), s[h]), b[k]), _ = S, S = v, v = p, p = i(p, c($, d[Math.floor(h / 16) * 4 + h % 4]));
    }
    f = i(f, _), u = i(u, p), x = i(x, v), g = i(g, S);
  }
  const y = (m) => {
    let b = "";
    for (let _ = 0; _ < 4; _ += 1)
      b += `0${(m >>> _ * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return y(f) + y(u) + y(x) + y(g);
}
const Db = "_avatar_1mhfr_1", Mb = "_xs_1mhfr_12", Ib = "_sm_1mhfr_18", zb = "_md_1mhfr_24", Lb = "_lg_1mhfr_30", Rb = "_xl_1mhfr_36", Pb = "_initials_1mhfr_42", jb = "_image_1mhfr_57", Bb = "_status_1mhfr_64", Fb = "_online_1mhfr_84", Hb = "_offline_1mhfr_88", Ub = "_away_1mhfr_92", cr = {
  avatar: Db,
  xs: Mb,
  sm: Ib,
  md: zb,
  lg: Lb,
  xl: Rb,
  initials: Pb,
  image: jb,
  status: Bb,
  online: Fb,
  offline: Hb,
  away: Ub
}, qb = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, ss = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Kb(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Wb(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ss[t % ss.length] ?? ss[0];
}
function iS({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: a,
  size: d = "md",
  status: s,
  className: i
}) {
  const c = Se(() => e ? Kb(e) : "?", [e]), f = Se(() => e ? Wb(e) : ss[0], [e]), u = Se(() => {
    if (t != null || n == null) return;
    const S = n.trim().toLowerCase();
    return S === "" ? void 0 : `https://secure.gravatar.com/avatar/${Cb(S)}?d=${r}&s=${qb[d]}&r=${l}`;
  }, [t, n, r, l, d]), x = t ?? u, [g, y] = K(null), m = x != null && g !== x, b = m && a === "", _ = a ?? e ?? "avatar", p = s ? `${_}, ${s}` : _, v = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: cr.image,
        src: x,
        alt: b ? "" : s ? p : _,
        onError: () => y(x ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: cr.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        cr.avatar,
        cr[d],
        s ? cr[s] : null,
        i
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : p,
      children: [
        v,
        s && /* @__PURE__ */ o("span", { className: cr.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Gb = "_root_zzwfz_1", Vb = "_left_zzwfz_6", Yb = "_right_zzwfz_7", Xb = "_panel_zzwfz_12", Zb = "_bottom_zzwfz_20", Jb = "_tabList_zzwfz_24", Qb = "_underline_zzwfz_53", ey = "_pills_zzwfz_72", ty = "_tab_zzwfz_24", ny = "_active_zzwfz_113", ry = "_disabled_zzwfz_139", An = {
  root: Gb,
  left: Vb,
  right: Yb,
  panel: Xb,
  bottom: Zb,
  tabList: Jb,
  underline: Qb,
  pills: ey,
  tab: ty,
  active: ny,
  disabled: ry
};
function cS({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: a = "top",
  className: d
}) {
  const s = nt(), i = re(null), [c, f] = K(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, x = a === "left" || a === "right", g = (b) => {
    f(b), r?.(b);
  }, y = (b) => {
    const _ = e.filter((S) => !S.disabled), p = _.findIndex((S) => S.key === u);
    let v = -1;
    b.key === "ArrowRight" || x && b.key === "ArrowDown" ? v = (p + 1) % _.length : b.key === "ArrowLeft" || x && b.key === "ArrowUp" ? v = (p - 1 + _.length) % _.length : b.key === "Home" ? v = 0 : b.key === "End" && (v = _.length - 1), v >= 0 && (b.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[v]?.key ?? "")}"]`
    )?.focus(), g(_[v]?.key ?? ""));
  }, m = e.find((b) => b.key === u);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [An.root, An[a], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: i,
            role: "tablist",
            className: [An.tabList, An[l], An[a]].filter(Boolean).join(" "),
            onKeyDown: y,
            children: e.map((b) => {
              const _ = b.key === u;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${b.key}`,
                  "data-tab-key": b.key,
                  "aria-selected": _,
                  "aria-controls": `${s}-panel-${b.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: b.disabled,
                  className: [
                    An.tab,
                    _ ? An.active : null,
                    b.disabled ? An.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => g(b.key),
                  children: b.label
                },
                b.key
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
            className: An.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const sy = "_root_1l1j2_1", oy = "_item_1l1j2_9", ly = "_heading_1l1j2_13", ay = "_trigger_1l1j2_17", iy = "_disabled_1l1j2_34", cy = "_title_1l1j2_48", dy = "_chevron_1l1j2_52", uy = "_open_1l1j2_59", fy = "_content_1l1j2_63", Cn = {
  root: sy,
  item: oy,
  heading: ly,
  trigger: ay,
  disabled: iy,
  title: cy,
  chevron: dy,
  open: uy,
  content: fy
};
function dS({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: a
}) {
  const d = nt(), [s, i] = K(
    r ?? []
  ), c = n ?? s, f = (u) => {
    const x = c.includes(u) ? c.filter((g) => g !== u) : t ? [...c, u] : [u];
    i(x), l?.(x);
  };
  return /* @__PURE__ */ o("div", { className: [Cn.root, a].filter(Boolean).join(" "), children: e.map((u) => {
    const x = c.includes(u.key), g = `${d}-panel-${u.key}`, y = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ M("div", { className: Cn.item, children: [
      /* @__PURE__ */ o("h3", { className: Cn.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: y,
          "aria-expanded": x,
          "aria-controls": g,
          disabled: u.disabled,
          className: [
            Cn.trigger,
            u.disabled ? Cn.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(u.key),
          children: [
            /* @__PURE__ */ o("span", { className: Cn.title, children: u.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [Cn.chevron, x ? Cn.open : null].filter(Boolean).join(" "),
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
          id: g,
          role: "region",
          "aria-labelledby": y,
          hidden: !x,
          className: Cn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const _y = "_textarea_l7fsl_1", py = "_invalid_l7fsl_27", hy = "_xs_l7fsl_34", my = "_sm_l7fsl_39", gy = "_md_l7fsl_44", by = "_lg_l7fsl_49", yy = "_xl_l7fsl_54", Jr = {
  textarea: _y,
  invalid: py,
  xs: hy,
  sm: my,
  md: gy,
  lg: by,
  xl: yy,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, uS = rt(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...a }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          Jr.textarea,
          Jr[t],
          Jr[`resize-${n}`],
          r ? Jr.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    );
  }
), xy = "_root_xyp2i_1", vy = "_trigger_xyp2i_9", wy = "_invalid_xyp2i_40", ky = "_placeholder_xyp2i_47", Oy = "_label_xyp2i_54", Sy = "_chevron_xyp2i_60", Ny = "_chevronOpen_xyp2i_70", $y = "_menu_xyp2i_74", Ey = "_option_xyp2i_89", Ty = "_disabled_xyp2i_100", Ay = "_active_xyp2i_104", Cy = "_selected_xyp2i_105", Dy = "_header_xyp2i_115", My = "_xs_xyp2i_122", Iy = "_sm_xyp2i_128", zy = "_md_xyp2i_134", Ly = "_lg_xyp2i_140", Ry = "_xl_xyp2i_146", Ft = {
  root: xy,
  trigger: vy,
  invalid: wy,
  placeholder: ky,
  label: Oy,
  chevron: Sy,
  chevronOpen: Ny,
  menu: $y,
  option: Ey,
  disabled: Ty,
  active: Ay,
  selected: Cy,
  header: Dy,
  xs: My,
  sm: Iy,
  md: zy,
  lg: Ly,
  xl: Ry
}, Py = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function fS({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: a = "md",
  invalid: d = !1,
  disabled: s = !1,
  className: i,
  ...c
}) {
  const f = nt(), u = `${f}-listbox`, x = re(null), g = re(null), [y, m] = K(
    n
  ), [b, _] = K(!1), p = t ?? y, v = e.map(
    (O, N) => O.label === "" || O.disabled ? -1 : N
  ).filter((O) => O >= 0), S = e.findIndex(
    (O) => O.value === p
  ), [h, $] = K(
    () => v.includes(0) ? 0 : v[0] ?? -1
  ), k = B(() => {
    if (s) return;
    const O = S >= 0 && v.includes(S) ? S : v[0];
    $(O ?? -1), _(!0);
  }, [s, S, v]), E = B(() => {
    _(!1), g.current?.focus();
  }, []);
  be(() => {
    if (!b) return;
    const O = (N) => {
      x.current && !x.current.contains(N.target) && _(!1);
    };
    return document.addEventListener("mousedown", O), () => document.removeEventListener("mousedown", O);
  }, [b]);
  const C = (O) => {
    m(O), r?.(O), _(!1), g.current?.focus();
  }, A = (O) => {
    if (v.length === 0) return;
    const N = v.includes(h) ? v.indexOf(h) : 0, T = v[(N + O + v.length) % v.length];
    T != null && $(T);
  }, D = (O) => {
    if (!b) {
      O.key === "ArrowDown" && (O.preventDefault(), k());
      return;
    }
    switch (O.key) {
      case "ArrowDown":
        O.preventDefault(), A(1);
        break;
      case "ArrowUp":
        O.preventDefault(), A(-1);
        break;
      case "Home":
        O.preventDefault(), v[0] != null && $(v[0]);
        break;
      case "End":
        O.preventDefault(), v[v.length - 1] != null && $(v[v.length - 1]);
        break;
      case "Enter":
      case " ":
        O.preventDefault(), h >= 0 && e[h] && v.includes(h) && C(e[h]?.value ?? "");
        break;
      case "Escape":
        O.preventDefault(), E();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, z = e.find(
    (O) => O.value === p
  );
  return /* @__PURE__ */ M(
    "div",
    {
      ref: x,
      className: [Ft.root, i].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: g,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": b,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: s,
            className: [
              Ft.trigger,
              Ft[a],
              b ? Ft.open : null,
              d ? Ft.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => b ? _(!1) : k(),
            ...c,
            children: [
              /* @__PURE__ */ o("span", { className: z ? Ft.label : Ft.placeholder, children: z ? z.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [Ft.chevron, b ? Ft.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Py },
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
            "aria-activedescendant": h >= 0 ? `${f}-option-${h}` : void 0,
            className: Ft.menu,
            children: e.map(
              (O, N) => O.label === "" ? /* @__PURE__ */ o(
                "div",
                {
                  className: Ft.header,
                  role: "presentation",
                  children: O.value
                },
                O.value
              ) : /* @__PURE__ */ o(
                "div",
                {
                  id: `${f}-option-${N}`,
                  role: "option",
                  "aria-selected": O.value === p,
                  "aria-disabled": O.disabled || void 0,
                  className: [
                    Ft.option,
                    N === h ? Ft.active : null,
                    O.value === p ? Ft.selected : null,
                    O.disabled ? Ft.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    O.disabled || C(O.value);
                  },
                  onMouseEnter: () => {
                    !O.disabled && O.label !== "" && $(N);
                  },
                  children: O.label
                },
                O.value
              )
            )
          }
        )
      ]
    }
  );
}
const jy = "_root_1ma8a_1", By = "_wrap_1ma8a_9", Fy = "_input_1ma8a_26", Hy = "_invalid_1ma8a_31", Uy = "_clear_1ma8a_58", qy = "_menu_1ma8a_83", Ky = "_option_1ma8a_98", Wy = "_disabled_1ma8a_109", Gy = "_active_1ma8a_113", Vy = "_empty_1ma8a_123", Yy = "_xs_1ma8a_129", Xy = "_sm_1ma8a_136", Zy = "_md_1ma8a_143", Jy = "_lg_1ma8a_150", Qy = "_xl_1ma8a_157", an = {
  root: jy,
  wrap: By,
  input: Fy,
  invalid: Hy,
  clear: Uy,
  menu: qy,
  option: Ky,
  disabled: Wy,
  active: Gy,
  empty: Vy,
  xs: Yy,
  sm: Xy,
  md: Zy,
  lg: Jy,
  xl: Qy
}, e0 = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function _S({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: a = "",
  size: d = "md",
  invalid: s = !1,
  disabled: i = !1,
  filter: c = e0,
  className: f,
  ...u
}) {
  const x = nt(), g = `${x}-listbox`, y = re(null), m = re(null), [b, _] = K(n), [p, v] = K(!1), S = t ?? b, h = Se(
    () => S.trim() === "" ? [...e] : e.filter((L) => c(L, S)),
    [e, S, c]
  ), $ = h.map((L, H) => L.disabled ? -1 : H).filter((L) => L >= 0), [k, E] = K(-1), C = (L) => {
    _(L), r?.(L);
  }, A = (L) => {
    C(L.label), l?.(L.value, L), v(!1);
  }, D = (L) => {
    if ($.length === 0) return;
    const H = $.includes(k) ? $.indexOf(k) : L === 1 ? -1 : 0, F = $[(H + L + $.length) % $.length];
    F != null && E(F);
  }, z = (L) => {
    i || (C(L.target.value), v(!0), E(-1));
  }, O = () => {
    i || S !== "" && v(!0);
  }, N = (L) => {
    y.current && !y.current.contains(L.relatedTarget) && v(!1);
  }, T = (L) => {
    if (!i)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), p ? D(1) : (v(!0), E($[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), p && D(-1);
          break;
        case "Enter":
          L.preventDefault(), p && k >= 0 && h[k] && A(h[k]);
          break;
        case "Escape":
          L.preventDefault(), v(!1);
          break;
        case "Tab":
          p && k >= 0 && h[k] && A(h[k]), v(!1);
          break;
      }
  }, P = () => {
    C(""), E(-1), v(!0), m.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: y,
      className: [an.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [an.wrap, an[d], s ? an.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": p,
                  "aria-controls": g,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && k >= 0 ? `${x}-option-${k}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: i,
                  value: S,
                  placeholder: a,
                  className: an.input,
                  onChange: z,
                  onFocus: O,
                  onBlur: N,
                  onKeyDown: T,
                  ...u
                }
              ),
              S !== "" && !i && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: an.clear,
                  "aria-label": "Clear",
                  onClick: P,
                  children: /* @__PURE__ */ o(Te, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && (h.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: g, className: an.menu, children: /* @__PURE__ */ o("div", { className: an.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: g, role: "listbox", className: an.menu, children: h.map((L, H) => /* @__PURE__ */ o(
          "div",
          {
            id: `${x}-option-${H}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              an.option,
              H === k ? an.active : null,
              L.disabled ? an.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              L.disabled || A(L);
            },
            onMouseDown: (F) => {
              F.preventDefault(), L.disabled || A(L);
            },
            onMouseEnter: () => {
              L.disabled || E(H);
            },
            children: L.label
          },
          L.value
        )) }))
      ]
    }
  );
}
const t0 = "_box_muvqe_1", n0 = "_option_muvqe_12", r0 = "_disabled_muvqe_23", s0 = "_selected_muvqe_27", o0 = "_active_muvqe_33", Cr = {
  box: t0,
  option: n0,
  disabled: r0,
  selected: s0,
  active: o0
};
function pS({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: a,
  style: d,
  ...s
}) {
  const i = nt(), [c, f] = K(() => {
    const h = n;
    return h == null ? [] : Array.isArray(h) ? [...h] : [h];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], x = e.findIndex((h) => !h.disabled), [g, y] = K(
    () => x >= 0 ? x : 0
  ), m = re(""), b = re(null), _ = (h) => {
    f(h), l?.(r ? h : h[0] ?? "");
  }, p = e.map((h, $) => h.disabled ? -1 : $).filter((h) => h >= 0), v = (h) => {
    const $ = e[h];
    if (!(!$ || $.disabled))
      if (y(h), r) {
        const k = u.includes($.value) ? u.filter((E) => E !== $.value) : [...u, $.value];
        _(k);
      } else
        _([$.value]);
  }, S = (h) => {
    if (p.length === 0) return;
    const $ = p.includes(g) ? g : p[0];
    let k = -1;
    if (h.key === "ArrowDown")
      k = p[(p.indexOf($) + 1) % p.length];
    else if (h.key === "ArrowUp")
      k = p[(p.indexOf($) - 1 + p.length) % p.length];
    else if (h.key === "Home")
      k = p[0];
    else if (h.key === "End")
      k = p[p.length - 1];
    else if (h.key === "Enter" || h.key === " ") {
      h.preventDefault(), v($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(h.key)) {
      h.preventDefault();
      const E = (m.current + h.key).toLowerCase();
      m.current = E, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const C = [...p, ...p], A = p.indexOf($) + 1, D = C.slice(A).find((z) => e[z]?.label.toLowerCase().startsWith(E));
      D != null && y(D);
      return;
    }
    k >= 0 && (h.preventDefault(), y(k), r || _([e[k]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[g] ? `${i}-option-${g}` : void 0,
      style: d,
      className: [Cr.box, a].filter(Boolean).join(" "),
      onKeyDown: S,
      ...s,
      children: e.map((h, $) => {
        const k = u.includes(h.value), E = $ === g;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${i}-option-${$}`,
            role: "option",
            "aria-selected": k,
            "aria-disabled": h.disabled || void 0,
            className: [
              Cr.option,
              k ? Cr.selected : null,
              E ? Cr.active : null,
              h.disabled ? Cr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => v($),
            children: h.label
          },
          h.value
        );
      })
    }
  );
}
const l0 = "_group_oinj7_1", a0 = "_legend_oinj7_8", i0 = "_list_oinj7_16", c0 = "_item_oinj7_25", d0 = "_disabled_oinj7_32", u0 = "_label_oinj7_37", f0 = "_checkbox_oinj7_48", Xn = {
  group: l0,
  legend: a0,
  list: i0,
  item: c0,
  disabled: d0,
  label: u0,
  checkbox: f0
};
function hS({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: a,
  className: d
}) {
  const [s, i] = K(() => [
    ...n
  ]), c = t ?? s, f = (u, x) => {
    const g = x ? [...c, u] : c.filter((y) => y !== u);
    i(g), r?.(g);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Xn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: Xn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: Xn.list, children: e.map((u) => {
      const x = c.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Xn.item, u.disabled ? Xn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Xn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Xn.checkbox,
                name: a,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (g) => f(u.value, g.target.checked)
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
const _0 = "_group_46668_1", p0 = "_legend_46668_8", h0 = "_list_46668_16", m0 = "_item_46668_25", g0 = "_disabled_46668_32", b0 = "_label_46668_37", y0 = "_radio_46668_48", Zn = {
  group: _0,
  legend: p0,
  list: h0,
  item: m0,
  disabled: g0,
  label: b0,
  radio: y0
};
function mS({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: a,
  className: d
}) {
  const [s, i] = K(
    n
  ), c = t ?? s, f = (u) => {
    i(u), r?.(u);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Zn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: Zn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: Zn.list, children: e.map((u) => {
      const x = u.value === c;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Zn.item, u.disabled ? Zn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Zn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: Zn.radio,
                name: a,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (g) => f(g.target.value)
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
const x0 = "_bar_9zyxn_1", v0 = "_vertical_9zyxn_12", w0 = "_option_9zyxn_17", k0 = "_selected_9zyxn_40", O0 = "_sm_9zyxn_56", S0 = "_md_9zyxn_62", N0 = "_lg_9zyxn_68", dr = {
  bar: x0,
  vertical: v0,
  option: w0,
  selected: k0,
  sm: O0,
  md: S0,
  lg: N0
};
function jo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function gS(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: a = "horizontal",
    onChange: d,
    size: s = "md",
    className: i,
    ...c
  } = e, f = l ?? !1, [u, x] = K(r ?? (f ? [] : t[0]?.value)), g = n ?? u, y = l === !0 || l === void 0 && Array.isArray(g), m = (_) => {
    if (!y) {
      x(_), d?.(_);
      return;
    }
    const p = jo(g), v = p.includes(_) ? p.filter((S) => S !== _) : [...p, _];
    x(v), d?.(v);
  }, b = (_) => y ? jo(g).includes(_) : g === _;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        dr.bar,
        dr[s],
        a === "vertical" ? dr.vertical : null,
        i
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((_) => {
        const p = b(_.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: _.disabled,
            className: [
              dr.option,
              p ? dr.selected : null,
              _.disabled ? dr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const $0 = "_root_11hdr_1", E0 = "_action_11hdr_10", T0 = "_caret_11hdr_15", A0 = "_sm_11hdr_49", C0 = "_md_11hdr_53", D0 = "_lg_11hdr_57", M0 = "_fullWidth_11hdr_62", I0 = "_menu_11hdr_70", z0 = "_item_11hdr_83", L0 = "_itemIcon_11hdr_105", R0 = "_disabled_11hdr_110", P0 = "_active_11hdr_114", j0 = "_danger_11hdr_123", gn = {
  root: $0,
  action: E0,
  caret: T0,
  sm: A0,
  md: C0,
  lg: D0,
  fullWidth: M0,
  menu: I0,
  item: z0,
  itemIcon: L0,
  disabled: R0,
  active: P0,
  danger: j0
}, bS = rt(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: l = "primary",
    variant: a = "filled",
    shade: d = "default",
    size: s = "md",
    loading: i = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: x,
    "aria-label": g,
    openAriaLabel: y = "More actions",
    ...m
  }, b) {
    const p = `${nt()}-menu`, v = re(null), S = re(null), h = re([]), [$, k] = K(!1), [E, C] = K(-1), A = u || i, D = Se(
      () => r.map((F, Y) => F.disabled ? -1 : Y).filter((F) => F >= 0),
      [r]
    ), z = B(() => {
      A || (C(D[0] ?? -1), k(!0));
    }, [A, D]), O = B(() => {
      k(!1), S.current?.focus();
    }, []);
    be(() => {
      if (!$) return;
      const F = (Y) => {
        v.current && !v.current.contains(Y.target) && k(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [$]), be(() => {
      $ && (A || !c) && k(!1);
    }, [$, A, c]);
    const N = re($);
    if (be(() => {
      const F = N.current;
      if (N.current = $, !$ || F) return;
      const Y = D.includes(E) ? E : D[0] ?? -1;
      Y >= 0 && h.current[Y]?.focus();
    }, [$, E, D]), c === !1) return null;
    const T = (F) => {
      const Y = r[F];
      !Y || Y.disabled || (Y.onClick?.(), k(!1), S.current?.focus());
    }, P = (F) => {
      if (D.length === 0) return;
      const Y = D.includes(E) ? D.indexOf(E) : F === 1 ? -1 : 0, ae = D[(Y + F + D.length) % D.length];
      ae != null && (C(ae), h.current[ae]?.focus());
    }, L = (F) => {
      const Y = F === "first" ? D[0] : D[D.length - 1];
      Y != null && (C(Y), h.current[Y]?.focus());
    }, H = (F) => {
      switch (F.key) {
        case "ArrowDown":
          F.preventDefault(), P(1);
          break;
        case "ArrowUp":
          F.preventDefault(), P(-1);
          break;
        case "Home":
          F.preventDefault(), L("first");
          break;
        case "End":
          F.preventDefault(), L("last");
          break;
        case "Escape":
          F.preventDefault(), O();
          break;
        case "Tab":
          k(!1);
          break;
      }
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (F) => {
          v.current = F, typeof b == "function" ? b(F) : b && (b.current = F);
        },
        className: [
          gn.root,
          gn[s],
          f ? gn.fullWidth : null,
          x
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            rr,
            {
              className: gn.action,
              variant: a,
              severity: l,
              shade: d,
              size: s,
              loading: i,
              disabled: u,
              "aria-label": g,
              onClick: () => {
                $ && k(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            rr,
            {
              ref: S,
              className: gn.caret,
              variant: a,
              severity: l,
              shade: d,
              size: s,
              disabled: A,
              "aria-haspopup": "menu",
              "aria-expanded": $,
              "aria-controls": p,
              "aria-label": y,
              onClick: () => $ ? k(!1) : z(),
              onKeyDown: (F) => {
                !$ && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), z());
              },
              children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          $ && /* @__PURE__ */ o(
            "div",
            {
              id: p,
              role: "menu",
              tabIndex: -1,
              "aria-label": y,
              className: gn.menu,
              onKeyDown: H,
              ...m,
              children: r.map((F, Y) => /* @__PURE__ */ M(
                "button",
                {
                  ref: (ae) => {
                    h.current[Y] = ae;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: Y === E ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    gn.item,
                    Y === E ? gn.active : null,
                    F.danger ? gn.danger : null,
                    F.disabled ? gn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(Y),
                  onMouseEnter: () => {
                    F.disabled || C(Y);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ o("span", { className: gn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: F.icon, size: 16 }) }) : null,
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
), B0 = "_wrapper_1ulz6_1", F0 = "_input_1ulz6_8", H0 = "_invalid_1ulz6_38", U0 = "_toggle_1ulz6_45", q0 = "_xs_1ulz6_80", K0 = "_sm_1ulz6_86", W0 = "_md_1ulz6_92", G0 = "_lg_1ulz6_98", V0 = "_xl_1ulz6_104", Dr = {
  wrapper: B0,
  input: F0,
  invalid: H0,
  toggle: U0,
  xs: q0,
  sm: K0,
  md: W0,
  lg: G0,
  xl: V0
}, yS = rt(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: a = "Show password",
    hideLabel: d = "Hide password",
    ...s
  }, i) {
    const [c, f] = K(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Dr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: i,
            type: c ? "text" : "password",
            disabled: l,
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
            "aria-pressed": c,
            "aria-label": c ? d : a,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ o(Te, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Y0 = "_mask_rcv90_1", X0 = "_invalid_rcv90_31", Z0 = "_xs_rcv90_38", J0 = "_sm_rcv90_44", Q0 = "_md_rcv90_50", ex = "_lg_rcv90_56", tx = "_xl_rcv90_62", $s = {
  mask: Y0,
  invalid: X0,
  xs: Z0,
  sm: J0,
  md: Q0,
  lg: ex,
  xl: tx
};
function Bo(e, t) {
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
const xS = rt(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: a = "",
  onChange: d,
  className: s,
  onKeyDown: i,
  ...c
}, f) {
  const [u, x] = K(a ?? ""), g = l !== void 0, y = g ? l ?? "" : u, m = (p) => {
    const v = Bo(p, r);
    return g || x(v), d?.(v), v;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: y,
      onChange: (p) => {
        m(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const v = p.currentTarget.selectionStart ?? y.length, S = y[v - 1];
          if (S !== void 0 && !/\d/.test(S)) {
            p.preventDefault();
            const h = y.replace(/\D/g, "");
            m(Bo(h.slice(0, -1), r));
          }
        }
        i?.(p);
      },
      className: [
        $s.mask,
        $s[t],
        n ? $s.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), nx = "_wrapper_12jdf_1", rx = "_input_12jdf_8", sx = "_invalid_12jdf_38", ox = "_button_12jdf_45", lx = "_up_12jdf_77", ax = "_down_12jdf_82", ix = "_xs_12jdf_87", cx = "_sm_12jdf_93", dx = "_md_12jdf_99", ux = "_lg_12jdf_105", fx = "_xl_12jdf_111", Un = {
  wrapper: nx,
  input: rx,
  invalid: sx,
  button: ox,
  up: lx,
  down: ax,
  xs: ix,
  sm: cx,
  md: dx,
  lg: ux,
  xl: fx
};
function Rs(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function _x(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function xl(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function px(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function hx(e, t, n, r, l) {
  const d = Rs(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = d + t * l : t > 0 ? s = n + Math.ceil((d - n + 1e-9) / l) * l : s = n + Math.floor((d - n - 1e-9) / l) * l, xl(s, n, r);
}
const vS = rt(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: a,
    defaultValue: d,
    onChange: s,
    min: i,
    max: c,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: x = "Decrement",
    onBlur: g,
    onKeyDown: y,
    ...m
  }, b) {
    const [_, p] = K(
      d != null ? String(d) : ""
    ), v = a !== void 0, S = v ? a == null ? "" : String(a) : _, h = (D) => {
      v || p(D), s?.(Rs(D));
    }, $ = (D) => {
      v || p(String(D)), s?.(D);
    }, k = (D) => {
      l || $(hx(S, D, i, c, f));
    }, E = (D) => {
      h(_x(D.target.value));
    }, C = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), k(1)) : D.key === "ArrowDown" && (D.preventDefault(), k(-1)), y?.(D);
    }, A = (D) => {
      const z = Rs(S);
      z === null ? (v || p(""), s?.(null)) : $(xl(px(z, i, f), i, c)), g?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Un.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: b,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: S,
            disabled: l,
            onChange: E,
            onKeyDown: C,
            onBlur: A,
            className: [
              Un.input,
              Un[t],
              n ? Un.invalid : null,
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
            className: [Un.button, Un.up].join(" "),
            "aria-label": u,
            disabled: l,
            onClick: () => k(1),
            children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Un.button, Un.down].join(" "),
            "aria-label": x,
            disabled: l,
            onClick: () => k(-1),
            children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 14 })
          }
        )
      ] })
    );
  }
), ze = {
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
}, mx = [
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
function Ps(e) {
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
function gx({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function bx({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, a = n / 255, d = Math.max(r, l, a), s = Math.min(r, l, a), i = d - s;
  let c = 0;
  return i !== 0 && (d === r ? c = (l - a) / i % 6 : d === l ? c = (a - r) / i + 2 : c = (r - l) / i + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : i / d,
    v: d
  };
}
function ur({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, a = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, s = 0, i = 0;
  l < 1 ? (d = r, s = a) : l < 2 ? (d = a, s = r) : l < 3 ? (s = r, i = a) : l < 4 ? (s = a, i = r) : l < 5 ? (d = a, i = r) : (d = r, i = a);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((s + c) * 255),
    b: Math.round((i + c) * 255),
    a: 1
  };
}
function yx(e) {
  const t = Ps(e);
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
function Fo({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const wS = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = mx,
  showButton: a = !1,
  showArrow: d = !0,
  disabled: s = !1,
  invalid: i = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: x,
  onChange: g,
  onValueChange: y,
  onOpen: m,
  onClose: b
}) => {
  const _ = re(null), p = re(null), v = re(null), S = re(null), h = re(null), $ = nt(), k = re(null), E = Se(
    () => yx(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, A] = K(!1), [D, z] = K(null), O = D ?? E, N = Se(() => bx(O), [O]), T = B(
    (X) => {
      const I = Fo(X);
      g?.(I), y?.(I);
    },
    [g, y]
  ), P = B(
    (X, I) => {
      z(X), I && !a && T(X);
    },
    [a, T]
  ), L = B(() => {
    A(!1), z(null), b?.(), p.current?.focus();
  }, [b]), H = B(() => {
    s || (z(E), A(!0), m?.());
  }, [s, E, m]), F = B(() => {
    C ? L() : H();
  }, [C, L, H]), Y = B(
    (X, I) => {
      const V = v.current;
      if (!V) return N;
      const J = V.getBoundingClientRect(), pe = sn((X - J.left) / J.width, 0, 1), oe = sn(1 - (I - J.top) / J.height, 0, 1);
      return { h: N.h, s: pe, v: oe };
    },
    [N]
  ), ae = B(
    (X, I) => {
      if (!I) return 0;
      const V = I.getBoundingClientRect();
      return sn((X - V.left) / V.width, 0, 1);
    },
    []
  ), ee = (X) => {
    if (s) return;
    X.preventDefault(), X.currentTarget.setPointerCapture(X.pointerId), k.current = "sat";
    const I = Y(X.clientX, X.clientY);
    P({ ...ur(I), a: O.a }, !0);
  }, we = (X) => {
    if (k.current !== "sat") return;
    X.preventDefault();
    const I = Y(X.clientX, X.clientY);
    P({ ...ur(I), a: O.a }, !0);
  }, se = (X) => {
    if (s) return;
    X.preventDefault(), X.currentTarget.setPointerCapture(X.pointerId), k.current = "hue";
    const I = ae(X.clientX, S.current);
    P(
      { ...ur({ ...N, h: I * 360 }), a: O.a },
      !0
    );
  }, de = (X) => {
    if (k.current !== "hue") return;
    X.preventDefault();
    const I = ae(X.clientX, S.current);
    P(
      { ...ur({ ...N, h: I * 360 }), a: O.a },
      !0
    );
  }, G = (X) => {
    if (s) return;
    X.preventDefault(), X.currentTarget.setPointerCapture(X.pointerId), k.current = "alpha";
    const I = ae(X.clientX, h.current);
    P({ ...O, a: I }, !0);
  }, me = (X) => {
    if (k.current !== "alpha") return;
    X.preventDefault();
    const I = ae(X.clientX, h.current);
    P({ ...O, a: I }, !0);
  }, ce = () => {
    k.current = null;
  }, xe = B(
    (X, I) => {
      const V = {
        h: N.h,
        s: sn(N.s + X, 0, 1),
        v: sn(N.v + I, 0, 1)
      };
      P({ ...ur(V), a: O.a }, !0);
    },
    [N, O.a, P]
  ), _e = B(
    (X) => {
      const I = (N.h + X + 360) % 360;
      P({ ...ur({ ...N, h: I }), a: O.a }, !0);
    },
    [N, O.a, P]
  ), Ae = B(
    (X) => {
      P({ ...O, a: sn(O.a + X, 0, 1) }, !0);
    },
    [O, P]
  ), Ie = (X) => {
    switch (X.key) {
      case "ArrowLeft":
        X.preventDefault(), xe(-0.05, 0);
        break;
      case "ArrowRight":
        X.preventDefault(), xe(0.05, 0);
        break;
      case "ArrowUp":
        X.preventDefault(), xe(0, 0.05);
        break;
      case "ArrowDown":
        X.preventDefault(), xe(0, -0.05);
        break;
      case "Escape":
        X.preventDefault(), L();
        break;
    }
  }, st = (X, I) => {
    switch (X.key) {
      case "ArrowLeft":
        X.preventDefault(), I === "hue" ? _e(-6) : Ae(-0.05);
        break;
      case "ArrowRight":
        X.preventDefault(), I === "hue" ? _e(6) : Ae(0.05);
        break;
      case "Escape":
        X.preventDefault(), L();
        break;
    }
  }, ue = (X, I) => {
    if (X === "hex") {
      const oe = Ps(I);
      oe && P({ ...oe, a: O.a }, !0);
      return;
    }
    const V = I.replace(/[^\d.]/g, ""), J = Number.parseFloat(V);
    if (Number.isNaN(J)) return;
    if (X === "a") {
      const oe = V.includes(".") ? sn(J, 0, 1) : sn(J / 100, 0, 1);
      P({ ...O, a: oe }, !0);
      return;
    }
    const pe = { r: 255, g: 255, b: 255 };
    P(
      { ...O, [X]: sn(J, 0, pe[X]) },
      !0
    );
  }, Ye = () => {
    D && (T(D), z(null), A(!1), b?.(), p.current?.focus());
  };
  be(() => {
    if (!C) return;
    const X = (I) => {
      _.current && !_.current.contains(I.target) && L();
    };
    return document.addEventListener("mousedown", X), () => document.removeEventListener("mousedown", X);
  }, [C, L]), be(() => {
    if (!C) return;
    const X = (I) => {
      I.key === "Escape" && L();
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [C, L]);
  const ye = f === "xs" ? ze["dx-colorpicker-trigger-xs"] : f === "sm" ? ze["dx-colorpicker-trigger-sm"] : f === "lg" ? ze["dx-colorpicker-trigger-lg"] : f === "xl" ? ze["dx-colorpicker-trigger-xl"] : ze["dx-colorpicker-trigger"], ht = Fo(O), qe = gx(O), Xe = { x: N.s * 100, y: (1 - N.v) * 100 }, At = N.h / 360 * 100, ot = O.a * 100, bt = /* @__PURE__ */ M("div", { className: ze["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(N.s * 100),
        "aria-valuetext": `Saturation ${Math.round(N.s * 100)}%, value ${Math.round(N.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: ze["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${N.h}, 100%, 50%)`
        },
        onKeyDown: Ie,
        onPointerDown: ee,
        onPointerMove: we,
        onPointerUp: ce,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: ze["dx-saturation-indicator"],
            style: { left: `${Xe.x}%`, top: `${Xe.y}%` },
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
        "aria-valuenow": Math.round(N.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: ze["dx-hue-picker"],
        onKeyDown: (X) => st(X, "hue"),
        onPointerDown: se,
        onPointerMove: de,
        onPointerUp: ce,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: ze["dx-hue-indicator"],
            style: { left: `${At}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: h,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(ot),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: ze["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (X) => st(X, "alpha"),
        onPointerDown: G,
        onPointerMove: me,
        onPointerUp: ce,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: ze["dx-alpha-indicator"],
            style: { left: `${ot}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ M("div", { className: ze["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: ze["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: ze["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: qe,
            onChange: (X) => ue("hex", X.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: ze["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: ze["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: O.r,
            onChange: (X) => ue("r", X.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: ze["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: ze["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: O.g,
            onChange: (X) => ue("g", X.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: ze["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: ze["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: O.b,
            onChange: (X) => ue("b", X.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: ze["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: ze["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(O.a * 100),
            onChange: (X) => ue("a", X.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: ze["dx-colorpicker-palette"], children: l.map((X) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: ze["dx-colorpicker-swatch"],
        "aria-label": X,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        style: { backgroundColor: X },
        onClick: () => {
          const I = Ps(X);
          a ? P({ ...I, a: O.a }, !1) : (z(null), T({ ...I, a: O.a }), A(!1), b?.(), p.current?.focus());
        }
      },
      X
    )) }),
    a && /* @__PURE__ */ o("div", { className: ze["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: ze["dx-colorpicker-ok"],
        onClick: Ye,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      ref: _,
      className: [
        ze["dx-colorpicker"],
        C ? ze["dx-colorpicker-open"] : null,
        i ? ze["dx-colorpicker-invalid"] : null,
        x
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: p,
            type: "button",
            className: [ze["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": C,
            "aria-controls": $,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: u,
            onClick: F,
            onKeyDown: (X) => {
              X.key === "Escape" && C && (X.preventDefault(), L());
            },
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: ze["dx-colorpicker-value"],
                  style: { backgroundColor: ht },
                  "aria-hidden": "true"
                }
              ),
              c && /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ o("span", { className: ze["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        C && /* @__PURE__ */ o(
          "div",
          {
            id: $,
            role: "dialog",
            "aria-label": "Choose color",
            className: ze["dx-colorpicker-popup"],
            children: bt
          }
        )
      ]
    }
  );
}, Be = {
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
}, xx = 42;
function on(e) {
  return String(e).padStart(2, "0");
}
function Vt(e) {
  return `${e.year}-${on(e.month)}-${on(e.day)}`;
}
function vx(e, t) {
  const n = Vt(e);
  return t ? `${n} ${on(e.hour)}:${on(e.minute)}:${on(e.second)}` : n;
}
function js(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), a = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const i = new Date(n, r - 1, l, a, d, s);
  return i.getFullYear() !== n || i.getMonth() !== r - 1 || i.getDate() !== l ? null : { year: n, month: r, day: l, hour: a, minute: d, second: s };
}
function qn() {
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
function Dn(e, t) {
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
function Qr(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, a = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, a),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Ho(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Uo = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => on(e.year % 100),
  MM: (e) => on(e.month),
  M: (e) => String(e.month),
  dd: (e) => on(e.day),
  d: (e) => String(e.day),
  HH: (e) => on(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => on(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => on(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, wx = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], kx = ["y", "M", "d", "H", "m", "s"];
function es(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", a = 0;
  for (; a < t.length; ) {
    let d = !1;
    for (const i of wx)
      if (t.startsWith(i, a)) {
        l += Uo[i](e, r, n), a += i.length, d = !0;
        break;
      }
    if (d) continue;
    const s = t[a];
    if (kx.includes(s)) {
      l += Uo[s](e, r, n), a += 1;
      continue;
    }
    l += s, a += 1;
  }
  return l;
}
const Ox = [
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
function Sx(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let s = null;
    for (const i of Ox)
      if (t.startsWith(i, l)) {
        s = i;
        break;
      }
    if (s) {
      const i = e.slice(r, r + s.length);
      if (!/^\d+$/.test(i)) return null;
      const c = Number(i);
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
  const a = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (a.month < 1 || a.month > 12 || a.day < 1 || a.day > 31)
    return null;
  const d = new Date(
    a.year,
    a.month - 1,
    a.day,
    a.hour,
    a.minute,
    a.second
  );
  return d.getFullYear() !== a.year || d.getMonth() !== a.month - 1 || d.getDate() !== a.day ? null : a;
}
function Mr(e, t) {
  const n = js(e);
  return n || Sx(e, t);
}
function Nx(e, t, n) {
  return t && Vt(e) < Vt(t) ? t : n && Vt(e) > Vt(n) ? n : e;
}
const $x = ["hour", "minute", "second"];
function ts(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const kS = rt(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: a = "yyyy-MM-dd",
    min: d,
    max: s,
    showTime: i = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: x,
    locale: g = "en-US",
    onChange: y,
    onValueChange: m,
    onOpen: b,
    onClose: _,
    disabled: p,
    readOnly: v,
    placeholder: S,
    ariaLabel: h,
    triggerLabel: $,
    clearLabel: k,
    tabIndex: E,
    className: C,
    onBlur: A,
    onKeyDown: D,
    ...z
  }, O) {
    const N = re(null), T = re(null), P = re(null), L = re(null), H = nt(), F = r !== void 0, [Y, ae] = K(
      () => l != null ? es(
        Mr(l, a) ?? qn(),
        a,
        g
      ) : ""
    ), [ee, we] = K(!1), [se, de] = K(null), [G, me] = K(() => {
      const W = r !== void 0 ? r ?? "" : l ?? "";
      if (W) {
        const fe = Mr(W, a);
        if (fe) return fe;
      }
      return qn();
    }), ce = Se(() => d ? js(d) : null, [d]), xe = Se(() => s ? js(s) : null, [s]), _e = Se(
      () => new Set(x ?? []),
      [x]
    ), Ae = Se(() => {
      const W = F ? r ?? "" : Y;
      return W ? Mr(W, a) : null;
    }, [r, Y, F, a]), Ie = B(
      (W) => {
        const fe = Vt(W);
        return !!(_e.has(fe) || ce && fe < Vt(ce) || xe && fe > Vt(xe));
      },
      [_e, ce, xe]
    ), st = B(
      (W) => {
        if (!Ie(W)) return W;
        for (let fe = 1; fe <= 366; fe += 1) {
          const Ke = Dn(W, fe);
          if (!Ie(Ke)) return Ke;
          const We = Dn(W, -fe);
          if (!Ie(We)) return We;
        }
        return W;
      },
      [Ie]
    ), ue = B(
      (W) => {
        F || ae(W ? es(W, a, g) : "");
        const fe = W ? vx(W, i) : "";
        y?.(fe), m?.(fe);
      },
      [F, a, g, i, y, m]
    ), Ye = B(
      (W) => {
        T.current = W, typeof O == "function" ? O(W) : O && (O.current = W);
      },
      [O]
    ), ye = B(() => {
      we(!1), de(null), _?.(), u || P.current?.focus();
    }, [u, _]), ht = B(() => {
      if (p) return;
      const W = Ae ?? qn();
      de(W), me(st(W)), we(!0), b?.();
    }, [p, Ae, st, b]), qe = B(() => {
      ee ? ye() : ht();
    }, [ee, ye, ht]), Xe = B((W) => {
      L.current?.querySelector(
        `[data-date="${Vt(W)}"]`
      )?.focus();
    }, []), At = B(
      (W) => {
        if (Ie(W)) return;
        const fe = se ?? Ae, We = {
          ...i ? {
            hour: fe?.hour ?? 0,
            minute: fe?.minute ?? 0,
            second: fe?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: W.year,
          month: W.month,
          day: W.day
        };
        de(We), i || (ue(We), ye());
      },
      [Ie, se, Ae, i, ue, ye]
    ), ot = B(
      (W, fe) => {
        de((Ke) => {
          const We = Ke ?? Ae ?? qn(), Ge = Math.min(W === "hour" ? 23 : 59, Math.max(0, We[W] + fe));
          return { ...We, [W]: Ge };
        });
      },
      [Ae]
    ), bt = B(
      (W, fe) => {
        const Ke = fe.replace(/\D/g, ""), We = Ke === "" ? 0 : Number(Ke), Rt = W === "hour" ? 23 : 59;
        de((Ge) => ({ ...Ge ?? Ae ?? qn(), [W]: Math.min(Rt, We) }));
      },
      [Ae]
    ), X = B(() => {
      se && (ue(se), ye());
    }, [se, ue, ye]), I = B(() => {
      if (ee) return;
      const W = Mr(Y, a);
      ue(W ? Nx(W, ce, xe) : null);
    }, [ee, Y, a, ce, xe, ue]), V = (W) => {
      const fe = W.target.value;
      F || ae(fe), ee && de(null);
    }, J = (W) => {
      W.key === "Enter" ? (W.preventDefault(), ee ? se && (ue(se), ye()) : I()) : W.key === "Escape" ? ee && (W.preventDefault(), ye()) : W.key === "ArrowDown" && !ee ? (W.preventDefault(), ht()) : W.key === "Tab" && ee && we(!1), D?.(W);
    }, pe = (W) => {
      I(), A?.(W);
    }, oe = (W) => {
      let fe = null;
      switch (W.key) {
        case "ArrowLeft":
          fe = Dn(G, -1), W.preventDefault();
          break;
        case "ArrowRight":
          fe = Dn(G, 1), W.preventDefault();
          break;
        case "ArrowUp":
          fe = Dn(G, -7), W.preventDefault();
          break;
        case "ArrowDown":
          fe = Dn(G, 7), W.preventDefault();
          break;
        case "Home":
          fe = Dn(G, -Ho(G)), W.preventDefault();
          break;
        case "End":
          fe = Dn(G, 6 - Ho(G)), W.preventDefault();
          break;
        case "PageUp":
          fe = Qr(G, W.shiftKey ? -12 : -1), W.preventDefault();
          break;
        case "PageDown":
          fe = Qr(G, W.shiftKey ? 12 : 1), W.preventDefault();
          break;
        case "Enter":
        case " ":
          W.preventDefault(), At(G);
          break;
        case "Escape":
          W.preventDefault(), ye();
          break;
        case "Tab":
          we(!1);
          break;
      }
      if (fe) {
        const Ke = st(fe);
        me(Ke), setTimeout(() => Xe(Ke), 0);
      }
    };
    be(() => {
      if (!ee) return;
      const W = (fe) => {
        N.current && !N.current.contains(fe.target) && ye();
      };
      return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
    }, [ee, ye]), be(() => {
      if (!ee) return;
      const W = (fe) => {
        fe.key === "Escape" && ye();
      };
      return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
    }, [ee, ye]);
    const Ne = () => {
      F || ae(""), y?.(""), m?.(""), T.current?.focus();
    }, Re = ee && se ? es(se, a, g) : F ? r ? es(
      Mr(r, a) ?? qn(),
      a,
      g
    ) : "" : Y, Ve = F ? !!r : Y.length > 0, Ze = u || ee, et = { year: G.year, month: G.month }, Yt = new Date(et.year, et.month - 1, 1).getDay(), te = {
      year: et.year,
      month: et.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Me = [];
    for (let W = 0; W < xx; W += 1)
      Me.push(Dn(te, W - Yt));
    const Ot = se ? Vt(se) : Ae ? Vt(Ae) : null, Lt = Vt(qn()), yt = `${et.year}-${on(et.month)}`, Ce = Se(
      () => new Intl.DateTimeFormat(g, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [g]
    ), He = new Intl.DateTimeFormat(g, {
      month: "long",
      year: "numeric"
    }).format(new Date(et.year, et.month - 1, 1)), xt = Array.from(
      { length: 7 },
      (W, fe) => new Intl.DateTimeFormat(g, { weekday: "short" }).format(
        new Date(2021, 0, 3 + fe)
      )
    ), Nt = t === "xs" ? Be["dx-datepicker-input--xs"] : t === "sm" ? Be["dx-datepicker-input--sm"] : t === "lg" ? Be["dx-datepicker-input--lg"] : t === "xl" ? Be["dx-datepicker-input--xl"] : Be["dx-datepicker-input--md"], lt = /* @__PURE__ */ M(
      "div",
      {
        className: Be["dx-datepicker-calendar"],
        "aria-label": h ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: Be["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Be["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const W = st(Qr(G, -1));
                  me(W), setTimeout(() => Xe(W), 0);
                },
                children: /* @__PURE__ */ o(Te, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: Be["dx-datepicker-title"], children: He }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Be["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const W = st(Qr(G, 1));
                  me(W), setTimeout(() => Xe(W), 0);
                },
                children: /* @__PURE__ */ o(Te, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
            "div",
            {
              ref: L,
              role: "grid",
              className: Be["dx-datepicker-grid"],
              onKeyDown: oe,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: Be["dx-datepicker-week-row"], children: xt.map((W) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: Be["dx-datepicker-weekday"],
                    children: W
                  },
                  W
                )) }),
                Array.from({ length: 6 }, (W, fe) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: Be["dx-datepicker-row"],
                    children: Me.slice(fe * 7, fe * 7 + 7).map((Ke) => {
                      const We = Vt(Ke), Rt = Ie(Ke), Ge = We.startsWith(yt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": We,
                          tabIndex: We === Vt(G) ? 0 : -1,
                          "aria-selected": We === Ot || void 0,
                          "aria-disabled": Rt || void 0,
                          "aria-label": Ce.format(
                            new Date(Ke.year, Ke.month - 1, Ke.day)
                          ),
                          className: [
                            Be["dx-datepicker-day"],
                            Ge ? null : Be["dx-datepicker-day--outside"],
                            We === Lt ? Be["dx-datepicker-day--today"] : null,
                            We === Ot ? Be["dx-datepicker-day--selected"] : null,
                            Rt ? Be["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => At(Ke),
                          onFocus: () => me(Ke),
                          children: Ke.day
                        },
                        We
                      );
                    })
                  },
                  fe
                ))
              ]
            }
          ),
          i && /* @__PURE__ */ M("div", { className: Be["dx-datepicker-time"], children: [
            $x.map((W) => /* @__PURE__ */ M("label", { className: Be["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Be["dx-datepicker-time-label"], children: ts(W) }),
              /* @__PURE__ */ M("div", { className: Be["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Be["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": ts(W),
                    value: on(
                      (se ?? Ae ?? qn())[W]
                    ),
                    onChange: (fe) => bt(W, fe.target.value),
                    onKeyDown: (fe) => {
                      fe.key === "ArrowUp" ? (fe.preventDefault(), ot(W, 1)) : fe.key === "ArrowDown" ? (fe.preventDefault(), ot(W, -1)) : fe.key === "Enter" && (fe.preventDefault(), X());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: Be["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${ts(W).toLowerCase()}`,
                      onClick: () => ot(W, 1),
                      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${ts(W).toLowerCase()}`,
                      onClick: () => ot(W, -1),
                      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, W)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Be["dx-datepicker-ok"],
                onClick: X,
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
        ref: N,
        className: [
          Be["dx-datepicker"],
          u ? Be["dx-datepicker-inline"] : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ M(kt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ye,
                type: "text",
                autoComplete: "off",
                value: Re,
                disabled: p,
                readOnly: v,
                placeholder: S,
                tabIndex: E,
                role: c ? void 0 : "combobox",
                "aria-label": h ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : Ze,
                "aria-controls": c ? void 0 : H,
                "aria-invalid": n || void 0,
                className: [
                  Be["dx-datepicker-input"],
                  Nt,
                  n ? Be["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: V,
                onKeyDown: J,
                onBlur: pe,
                onClick: () => {
                  c || qe();
                },
                ...z
              }
            ),
            f && !p && Ve && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  Be["dx-datepicker-clear"],
                  c ? Be["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": k ?? "Clear",
                onClick: Ne,
                children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ o(
              "button",
              {
                ref: P,
                type: "button",
                className: [Be["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": H,
                disabled: p,
                onClick: qe,
                children: /* @__PURE__ */ o(Te, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          Ze && /* @__PURE__ */ o(
            "div",
            {
              id: H,
              role: u ? void 0 : "dialog",
              "aria-label": u ? void 0 : h ?? "Date picker",
              className: u ? void 0 : Be["dx-datepicker-popup"],
              children: lt
            }
          )
        ]
      }
    );
  }
), Kn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, OS = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: a = "Clear",
  rateLabel: d = "Rate",
  tabIndex: s = 0,
  className: i,
  onChange: c,
  onValueChange: f
}) => {
  const [u, x] = K(e), g = B(
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), y = B(
    (p) => {
      c?.(p), f?.(p);
    },
    [c, f]
  ), m = B(
    (p) => {
      n || r || (y(p), x(p));
    },
    [n, r, y]
  ), b = (p) => {
    if (n || r) return;
    const v = u > 0 ? u : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), m(g(v + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), m(g(v - 1));
        break;
      case "Home":
        p.preventDefault(), m(1);
        break;
      case "End":
        p.preventDefault(), m(t);
        break;
    }
  }, _ = Array.from({ length: t }, (p, v) => v + 1);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        Kn["dx-rating"],
        n ? Kn["dx-rating-readonly"] : null,
        r ? Kn["dx-rating-disabled"] : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Kn["dx-rating-clear"],
            "aria-label": a,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => m(0),
            children: /* @__PURE__ */ o(Te, { icon: "block", size: 16 })
          }
        ),
        _.map((p) => {
          const v = p <= e, S = p === (e > 0 ? e : u);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": v,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${d} ${p}`,
              tabIndex: S ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Kn["dx-rating-item"],
                v ? Kn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(p),
              onFocus: () => x(p),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Kn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Te, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Kn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "star", size: 20 }) })
              ]
            },
            p
          );
        })
      ]
    }
  );
}, Jn = {
  "dx-slider": "_dx-slider_18zjj_1",
  "dx-slider-track": "_dx-slider-track_18zjj_9",
  "dx-slider-range": "_dx-slider-range_18zjj_17",
  "dx-slider-handle": "_dx-slider-handle_18zjj_26",
  "dx-slider-vertical": "_dx-slider-vertical_18zjj_58",
  "dx-slider-disabled": "_dx-slider-disabled_18zjj_84"
};
function kn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const SS = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: a = 1,
  range: d = !1,
  orientation: s = "horizontal",
  disabled: i = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: x = 0,
  className: g,
  onChange: y,
  onInput: m,
  onValueChange: b,
  onInputChange: _
}) => {
  const p = re(null), v = re(
    null
  ), [S, h] = K(null), $ = S ?? e, k = Se(
    () => kn($, r, l),
    [$, r, l]
  ), E = Se(
    () => kn(d ? t : k, r, l),
    [d, t, k, r, l]
  ), C = Se(
    () => kn(d ? Math.max(n, E) : k, r, l),
    [d, n, E, k, r, l]
  ), A = B(
    (G) => {
      const me = l - r;
      return me <= 0 ? 0 : (kn(G, r, l) - r) / me * 100;
    },
    [r, l]
  ), D = B(
    (G, me) => {
      const ce = p.current;
      if (!ce) return r;
      const xe = ce.getBoundingClientRect();
      let _e;
      s === "vertical" ? _e = 1 - (me - xe.top) / xe.height : _e = (G - xe.left) / xe.width;
      const Ae = r + kn(_e, 0, 1) * (l - r);
      return a > 0 ? kn(Math.round(Ae / a) * a, r, l) : kn(Ae, r, l);
    },
    [r, l, a, s]
  ), z = B(
    (G) => {
      typeof G == "number" && h(G), y?.(G), b?.(G);
    },
    [y, b]
  ), O = B(
    (G) => {
      typeof G == "number" && h(G), m?.(G), _?.(G);
    },
    [m, _]
  ), N = B(
    (G, me, ce) => {
      const xe = D(me, ce);
      let _e;
      d ? G === "min" ? _e = { min: Math.min(xe, C), max: C } : _e = { min: E, max: Math.max(xe, E) } : _e = xe, O(_e), v.current === null && z(_e);
    },
    [d, D, E, C, O, z]
  ), T = B(
    (G, me) => {
      const ce = (a > 0 ? a : 1) * me;
      let xe;
      d ? G === "min" ? xe = {
        min: kn(E + ce, r, C),
        max: C
      } : xe = {
        min: E,
        max: kn(C + ce, E, l)
      } : xe = kn(k + ce, r, l), z(xe);
    },
    [d, a, r, l, E, C, k, z]
  ), P = (G, me) => {
    if (!i)
      switch (me.key) {
        case "ArrowLeft":
        case "ArrowDown":
          me.preventDefault(), T(G, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          me.preventDefault(), T(G, 1);
          break;
        case "Home":
          me.preventDefault(), z(d ? G === "min" ? { min: r, max: C } : { min: E, max: E } : r);
          break;
        case "End":
          me.preventDefault(), z(d ? G === "min" ? { min: C, max: C } : { min: E, max: l } : l);
          break;
      }
  }, L = (G, me) => {
    i || (me.preventDefault(), me.currentTarget.focus(), typeof me.currentTarget.setPointerCapture == "function" && me.currentTarget.setPointerCapture(me.pointerId), v.current = { key: G, pointerId: me.pointerId }, N(G, me.clientX, me.clientY));
  }, H = (G) => {
    !v.current || v.current.pointerId !== G.pointerId || (G.preventDefault(), N(v.current.key, G.clientX, G.clientY));
  }, F = (G) => {
    !v.current || v.current.pointerId !== G.pointerId || (v.current = null, G.preventDefault(), z(d ? { min: E, max: C } : k));
  }, [Y, ae] = K(null), ee = A(E), we = A(C), se = d ? ee : 0, de = we;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Jn["dx-slider"],
        s === "vertical" ? Jn["dx-slider-vertical"] : null,
        i ? Jn["dx-slider-disabled"] : null,
        g
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: p, className: Jn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: Jn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${se}%`, height: `${de - se}%` } : { left: `${se}%`, width: `${de - se}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(E),
            "aria-orientation": s,
            "aria-label": d ? f : c,
            "aria-disabled": i || void 0,
            tabIndex: i || d && Y === "max" ? -1 : x,
            className: Jn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${ee}% - 8px)` } : { left: `calc(${ee}% - 8px)` },
            onKeyDown: (G) => P("min", G),
            onPointerDown: (G) => L("min", G),
            onPointerMove: H,
            onPointerUp: F,
            onFocus: () => ae("min")
          }
        ),
        d && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(C),
            "aria-orientation": s,
            "aria-label": u,
            "aria-disabled": i || void 0,
            tabIndex: i || Y === "min" ? -1 : x,
            className: Jn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
            onKeyDown: (G) => P("max", G),
            onPointerDown: (G) => L("max", G),
            onPointerMove: H,
            onPointerUp: F,
            onFocus: () => ae("max")
          }
        )
      ] })
    }
  );
}, ct = {
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
}, Ex = "-10675199.02:48:05.4775808", Tx = "10675199.02:48:05.4775808", In = 86400, zn = 3600, bn = 60, Es = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, qo = {
  days: In,
  hours: zn,
  minutes: bn,
  seconds: 1
}, Ax = {
  day: In,
  hour: zn,
  minute: bn,
  second: 1
};
function fr(e) {
  return String(e).padStart(2, "0");
}
function Br(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((u) => u != null)) return null;
    const s = l[1] != null ? Number(l[1]) : 0, i = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (s * In + i * zn + c * bn + f);
  }
  const a = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (a) {
    const d = a[1] != null ? Number(a[1]) : 0, s = Number(a[2]), i = Number(a[3]), c = a[4] != null ? Number(a[4]) : 0, f = a[5] != null ? +`0.${a[5]}` : 0;
    return s > 23 || i > 59 || c > 59 ? null : n * (d * In + s * zn + i * bn + c + f);
  }
  return null;
}
function Cx(e) {
  return e.days * In + e.hours * zn + e.minutes * bn + e.seconds;
}
function Ko(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / In);
  t %= In;
  const r = Math.floor(t / zn);
  t %= zn;
  const l = Math.floor(t / bn), a = Math.round(t % bn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: a };
}
function Bs(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / bn) * bn : t === "hour" ? r = Math.round(r / zn) * zn : t === "day" && (r = Math.round(r / In) * In);
  let l = Math.round(r % bn);
  const a = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / bn) + a, s = d % 60, i = Math.floor(d / 60), c = i % 24, f = Math.floor(i / 24), u = n ? "-" : "", x = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${x}${fr(c)}`;
    case "minute":
      return `${u}${x}${fr(c)}:${fr(s)}`;
    default:
      return `${u}${x}${fr(c)}:${fr(s)}:${fr(l)}`;
  }
}
function Wo(e, t = "second") {
  const n = Br(e);
  return n === null ? "" : Bs(n, t);
}
function Ts(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const NS = rt(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: a = Ex,
    max: d = Tx,
    step: s = "1",
    precision: i = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: x = !0,
    allowClear: g = !1,
    inline: y = !1,
    onChange: m,
    onValueChange: b,
    onOpen: _,
    onClose: p,
    disabled: v,
    placeholder: S,
    ariaLabel: h,
    triggerLabel: $,
    clearLabel: k,
    tabIndex: E,
    className: C,
    onBlur: A,
    onKeyDown: D,
    ...z
  }, O) {
    const N = re(null), T = re(null), P = re(null), L = nt(), H = r !== void 0, [F, Y] = K(
      () => l != null ? Wo(l, i) : ""
    ), [ae, ee] = K(!1), [we, se] = K(null), [de, G] = K(null), me = Se(
      () => Br(a) ?? -Number.MAX_SAFE_INTEGER,
      [a]
    ), ce = Se(
      () => Br(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), xe = Se(() => {
      const te = Number.parseFloat(s);
      return Number.isNaN(te) || te <= 0 ? 1 : te;
    }, [s]), _e = Se(() => {
      const te = H ? r ?? "" : F;
      return te ? Br(te) : null;
    }, [r, F, H]), Ae = B(
      (te) => {
        const Me = te === null ? "" : Bs(te, i);
        H || Y(Me), m?.(Me), b?.(Me);
      },
      [H, i, m, b]
    ), Ie = B(
      (te) => {
        te && we !== null && Ae(we), ee(!1), se(null), G(null), p?.(), y || P.current?.focus();
      },
      [y, we, Ae, p]
    ), st = B(() => {
      v || (se(_e ?? 0), ee(!0), _?.());
    }, [v, _e, _]), ue = B(() => {
      ae ? Ie(!1) : st();
    }, [ae, Ie, st]), Ye = B(
      (te, Me) => {
        se((Ot) => {
          const yt = (Ot ?? _e ?? 0) + Me * xe * qo[te];
          return Ts(yt, me, ce);
        });
      },
      [_e, xe, me, ce]
    ), ye = B(
      (te) => {
        const Me = de?.[te];
        if (Me == null) return;
        const Ot = Number.parseFloat(Me), Lt = Number.isNaN(Ot) ? 0 : Ot;
        se((yt) => {
          const Ce = yt ?? _e ?? 0, He = Ko(Ce);
          He[te] = Lt;
          const Nt = (Ce < 0 ? -1 : 1) * Cx(He);
          return Ts(Nt, me, ce);
        }), G(null);
      },
      [de, _e, me, ce]
    ), ht = (te, Me) => {
      G((Ot) => ({ ...Ot ?? {}, [te]: Me }));
    }, qe = (te, Me) => {
      switch (Me.key) {
        case "ArrowUp":
          Me.preventDefault(), ye(te), Ye(te, 1);
          break;
        case "ArrowDown":
          Me.preventDefault(), ye(te), Ye(te, -1);
          break;
        case "Home":
          Me.preventDefault(), ye(te), se(me);
          break;
        case "End":
          Me.preventDefault(), ye(te), se(ce);
          break;
        case "Enter":
          Me.preventDefault(), ye(te), Ie(!0);
          break;
      }
    }, Xe = B(() => {
      if (ae) return;
      const te = Br(F);
      Ae(te !== null ? Ts(te, me, ce) : null);
    }, [ae, F, me, ce, Ae]), At = (te) => {
      H || Y(te.target.value);
    }, ot = (te) => {
      te.key === "Enter" ? (te.preventDefault(), ae ? Ie(!0) : Xe()) : te.key === "Escape" && ae ? (te.preventDefault(), Ie(!1)) : te.key === "ArrowDown" && !ae ? (te.preventDefault(), st()) : te.key === "Tab" && ae && ee(!1), D?.(te);
    }, bt = (te) => {
      Xe(), A?.(te);
    }, X = () => {
      H || Y(""), m?.(""), b?.(""), T.current?.focus();
    };
    be(() => {
      if (!ae) return;
      const te = (Me) => {
        N.current && !N.current.contains(Me.target) && Ie(!1);
      };
      return document.addEventListener("mousedown", te), () => document.removeEventListener("mousedown", te);
    }, [ae, Ie]), be(() => {
      if (!ae) return;
      const te = (Me) => {
        Me.key === "Escape" && Ie(!1);
      };
      return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
    }, [ae, Ie]), be(() => {
      if (y && we !== null) {
        const te = _e;
        (te === null || Math.abs(we - te) > 1e-9) && Ae(we);
      }
    }, [y, we, _e, Ae]);
    const I = B(
      (te) => {
        T.current = te, typeof O == "function" ? O(te) : O && (O.current = te);
      },
      [O]
    ), V = H ? r ? Wo(r, i) : "" : F, J = H ? !!r : F.length > 0, pe = y || ae, oe = we ?? _e ?? 0, Ne = Ko(oe), Re = Ax[i], Ze = ["days", "hours", "minutes", "seconds"].filter(
      (te) => qo[te] >= Re && (te === "days" ? c : te === "hours" ? f : te === "minutes" ? u : x)
    ), et = t === "xs" ? ct["dx-timespanpicker-input--xs"] : t === "sm" ? ct["dx-timespanpicker-input--sm"] : t === "lg" ? ct["dx-timespanpicker-input--lg"] : t === "xl" ? ct["dx-timespanpicker-input--xl"] : ct["dx-timespanpicker-input--md"], Yt = /* @__PURE__ */ M("div", { className: ct["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: ct["dx-timespanpicker-preview"], "aria-live": "polite", children: Bs(oe, i) }),
      /* @__PURE__ */ o("div", { className: ct["dx-timespanpicker-units"], children: Ze.map((te) => /* @__PURE__ */ M("label", { className: ct["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: ct["dx-timespanpicker-unit-label"], children: Es[te] }),
        /* @__PURE__ */ M("span", { className: ct["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: ct["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: de?.[te] ?? String(Ne[te]),
              onChange: (Me) => ht(te, Me.target.value),
              onKeyDown: (Me) => qe(te, Me),
              onBlur: () => ye(te)
            }
          ),
          /* @__PURE__ */ M("span", { className: ct["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Es[te].toLowerCase()}`,
                onClick: () => {
                  ye(te), Ye(te, 1);
                },
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Es[te].toLowerCase()}`,
                onClick: () => {
                  ye(te), Ye(te, -1);
                },
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, te)) }),
      /* @__PURE__ */ o("div", { className: ct["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: ct["dx-timespanpicker-ok"],
          onClick: () => Ie(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ M(
      "div",
      {
        ref: N,
        className: [
          ct["dx-timespanpicker"],
          y ? ct["dx-timespanpicker-inline"] : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !y && /* @__PURE__ */ M(kt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: I,
                type: "text",
                autoComplete: "off",
                value: V,
                disabled: v,
                placeholder: S,
                tabIndex: E,
                role: "combobox",
                "aria-label": h ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ae,
                "aria-controls": L,
                "aria-invalid": n || void 0,
                className: [
                  ct["dx-timespanpicker-input"],
                  et,
                  n ? ct["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: ot,
                onBlur: bt,
                ...z
              }
            ),
            g && !v && J && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: ct["dx-timespanpicker-clear"],
                "aria-label": k ?? "Clear",
                onClick: X,
                children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: P,
                type: "button",
                className: [ct["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ae,
                "aria-controls": L,
                disabled: v,
                onClick: ue,
                children: /* @__PURE__ */ o(Te, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          pe && /* @__PURE__ */ o(
            "div",
            {
              id: L,
              role: y ? void 0 : "dialog",
              "aria-label": h ?? "Time span picker",
              className: y ? void 0 : ct["dx-timespanpicker-popup"],
              children: Yt
            }
          )
        ]
      }
    );
  }
), Dx = "_wrapper_ou9x5_1", Mx = "_cells_ou9x5_8", Ix = "_cell_ou9x5_8", zx = "_invalid_ou9x5_63", Lx = "_live_ou9x5_73", Qn = {
  wrapper: Dx,
  cells: Mx,
  cell: Ix,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: zx,
  live: Lx
};
function Go(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const $S = rt(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: a = !1,
    size: d = "md",
    autoFocus: s = !1,
    disabled: i = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": x
  }, g) {
    const y = nt(), m = n !== void 0, [b, _] = K(Go(r).join("")), p = m ? Go(n).join("") : b, v = Array.from({ length: t }, (z, O) => p[O] ?? ""), S = re([]), [h, $] = K(""), k = (z) => {
      m || _(z), l?.(z);
    }, E = (z) => {
      const O = S.current[z];
      O && !O.disabled && (O.focus(), O.select());
    }, C = (z, O) => {
      const N = O.replace(/\D/g, "").slice(-1), T = p.split("");
      if (N) {
        T[z] = N;
        const P = T.join("").slice(0, t);
        k(P), P.length < t ? E(z + 1) : f && $("Code complete");
      }
    }, A = (z, O) => {
      if (O.key === "Backspace") {
        if (O.preventDefault(), p[z]) {
          const N = p.split("");
          N[z] = "", k(N.join(""));
        } else if (z > 0) {
          const N = p.split("");
          N[z - 1] = "", k(N.join("")), E(z - 1);
        }
      } else O.key === "ArrowLeft" && z > 0 ? (O.preventDefault(), E(z - 1)) : O.key === "ArrowRight" && z < t - 1 ? (O.preventDefault(), E(z + 1)) : O.key === "Home" ? (O.preventDefault(), E(0)) : O.key === "End" && (O.preventDefault(), E(t - 1));
    }, D = (z, O) => {
      O.preventDefault();
      const N = O.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const T = p.split("");
      let P = 0;
      for (let H = 0; H < N.length && z + H < t; H++)
        T[z + H] = N[H] ?? "", P++;
      const L = T.join("");
      k(L), L.length >= t ? f && $("Code complete") : E(z + P);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [Qn.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? c,
        "data-invalid": a || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [Qn.cells, Qn[d]].join(" "), children: v.map((z, O) => /* @__PURE__ */ o(
            "input",
            {
              ref: (N) => {
                S.current[O] = N, O === 0 && g && (typeof g == "function" ? g(N) : g.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: z,
              disabled: i,
              "aria-label": `Digit ${O + 1} of ${t}`,
              "aria-invalid": a && z !== "" ? !0 : void 0,
              autoFocus: s && O === 0,
              className: [
                Qn.cell,
                Qn[`cell-${d}`],
                a ? Qn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (N) => C(O, N.target.value),
              onKeyDown: (N) => A(O, N),
              onPaste: (N) => D(O, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                f && $("");
              }
            },
            O
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${y}-live`,
              role: "status",
              "aria-live": "polite",
              className: Qn.live,
              children: h
            }
          )
        ]
      }
    );
  }
), Rx = "_wrapper_6lcd5_1", Px = "_header_6lcd5_7", jx = "_label_6lcd5_15", Bx = "_clear_6lcd5_22", Fx = "_canvas_6lcd5_53", Hx = "_disabled_6lcd5_69", _r = {
  wrapper: Rx,
  header: Px,
  label: jx,
  clear: Bx,
  canvas: Fx,
  disabled: Hx
}, ES = rt(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: a = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: s = "Signature",
    width: i,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, x) {
    const g = re(null), y = re(!1), m = re(!1), b = re({ x: 0, y: 0 });
    be(() => {
      const k = g.current;
      if (!k) return;
      const E = window.devicePixelRatio || 1, C = Math.round((i ?? k.clientWidth) * E), A = Math.round(c * E);
      (k.width !== C || k.height !== A) && (k.width = C, k.height = A);
      const D = k.getContext("2d");
      if (!D) return;
      D.setTransform(E, 0, 0, E, 0, 0), D.lineWidth = a, D.strokeStyle = l, D.lineCap = "round", D.lineJoin = "round";
      const z = t ?? n;
      if (z) {
        const O = new Image();
        O.onload = () => {
          D.drawImage(O, 0, 0, k.clientWidth, c);
        }, O.src = z;
      }
    }, [t, n, l, a, i, c]);
    const _ = () => {
      const k = g.current;
      if (!k) return;
      const E = k.toDataURL("image/png");
      r?.(E);
    }, p = () => {
      const k = g.current;
      if (!k) return;
      const E = k.getContext("2d");
      E && E.clearRect(0, 0, k.width, k.height), r?.("");
    };
    qs(x, () => ({
      clear: p,
      toDataURL: (k = "image/png", E) => g.current?.toDataURL(k, E) ?? ""
    }));
    const v = (k) => {
      const E = k.currentTarget.getBoundingClientRect();
      return { x: k.clientX - E.left, y: k.clientY - E.top };
    }, S = (k) => {
      f || (k.preventDefault(), typeof k.currentTarget.setPointerCapture == "function" && k.currentTarget.setPointerCapture(k.pointerId), y.current = !0, m.current = !1, b.current = v(k));
    }, h = (k) => {
      if (!y.current) return;
      k.preventDefault();
      const E = k.currentTarget.getContext("2d");
      if (!E) return;
      const C = v(k);
      E.beginPath(), E.moveTo(b.current.x, b.current.y), E.lineTo(C.x, C.y), E.stroke(), b.current = C, m.current = !0;
    }, $ = (k) => {
      y.current && (k.preventDefault(), y.current = !1, m.current && _());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          _r.wrapper,
          u,
          f ? _r.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: _r.header, children: [
            /* @__PURE__ */ o("span", { className: _r.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _r.clear,
                onClick: p,
                disabled: f,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: g,
              role: "img",
              "aria-label": s,
              "aria-disabled": f || void 0,
              style: {
                width: i ? `${i}px` : void 0,
                height: `${c}px`
              },
              className: _r.canvas,
              onPointerDown: S,
              onPointerMove: h,
              onPointerUp: $,
              onPointerCancel: $
            }
          )
        ]
      }
    );
  }
), Ux = "_wrapper_dsvd2_1", qx = "_trigger_dsvd2_7", Kx = "_list_dsvd2_35", Wx = "_row_dsvd2_44", Gx = "_name_dsvd2_59", Vx = "_size_dsvd2_68", Yx = "_progress_dsvd2_74", Xx = "_fill_dsvd2_82", Zx = "_status_dsvd2_99", Jx = "_remove_dsvd2_106", On = {
  wrapper: Ux,
  trigger: qx,
  list: Kx,
  row: Wx,
  name: Gx,
  size: Vx,
  progress: Yx,
  fill: Xx,
  status: Zx,
  remove: Jx
};
function Vo(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const TS = rt(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: a,
  accept: d,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: i,
  chooseText: c = "Upload",
  children: f,
  onProgress: u,
  onComplete: x,
  onError: g
}, y) {
  const m = re(null), [b, _] = K([]), p = re(/* @__PURE__ */ new Map()), v = (E, C) => {
    _(
      (A) => A.map((D) => D.file.name === E ? { ...D, ...C } : D)
    );
  }, S = (E) => {
    if (!t) return;
    const C = new XMLHttpRequest();
    p.current.set(E.file.name, C);
    const A = new FormData();
    if (A.append(r, E.file), C.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const z = Math.round(D.loaded / D.total * 100);
      v(E.file.name, { state: "uploading", progress: z }), u?.(E.file.name, z);
    }), C.addEventListener("load", () => {
      C.status >= 200 && C.status < 300 ? (v(E.file.name, { state: "complete", progress: 100 }), x?.(E.file.name)) : (v(E.file.name, {
        state: "error",
        message: `HTTP ${C.status}`
      }), g?.(E.file.name, `HTTP ${C.status}`));
    }), C.addEventListener("error", () => {
      v(E.file.name, { state: "error", message: "Network error" }), g?.(E.file.name, "Network error");
    }), a)
      for (const [D, z] of Object.entries(a))
        C.setRequestHeader(D, z);
    C.open("POST", t), C.send(A), v(E.file.name, { state: "uploading", progress: 0 });
  }, h = (E) => {
    if (!E) return;
    const C = [...E], A = [];
    let D = Math.max(0, s - b.length);
    for (const O of C) {
      if (i != null && O.size > i) {
        g?.(
          O.name,
          `File too large (maximum ${Vo(i)})`
        );
        continue;
      }
      if (D <= 0) {
        g?.(O.name, `Too many files (maximum ${s})`);
        continue;
      }
      D -= 1, A.push(O);
    }
    const z = A.map((O) => ({
      file: O,
      state: "pending",
      progress: 0
    }));
    _((O) => [...O, ...z]), m.current && (m.current.value = ""), l && z.forEach(S);
  }, $ = (E) => {
    p.current.get(E)?.abort(), p.current.delete(E), _((A) => A.filter((D) => D.file.name !== E));
  }, k = f ?? /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: On.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ o(Te, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return qs(y, () => ({
    open: () => m.current?.click(),
    upload: () => b.forEach((E) => E.state === "pending" ? S(E) : null)
  })), /* @__PURE__ */ M("div", { className: On.wrapper, children: [
    k,
    /* @__PURE__ */ o(
      "input",
      {
        ref: m,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (E) => h(E.target.files)
      }
    ),
    !f && b.length > 0 && /* @__PURE__ */ o("ul", { className: On.list, children: b.map(({ file: E, state: C, progress: A, message: D }) => /* @__PURE__ */ M(
      "li",
      {
        className: On.row,
        "data-state": C,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: On.name, children: E.name }),
          /* @__PURE__ */ o("span", { className: On.size, children: Vo(E.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${E.name} upload progress`,
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
          /* @__PURE__ */ o("span", { className: On.status, role: "status", children: C === "uploading" ? "Uploading" : C === "complete" ? "Complete" : C === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${E.name}`,
              onClick: () => $(E.name),
              children: /* @__PURE__ */ o(Te, { icon: "close", size: 14 })
            }
          )
        ]
      },
      E.name
    )) })
  ] });
}), Qx = "_zone_nl0bz_1", ev = "_dragging_nl0bz_23", tv = "_caption_nl0bz_28", nv = "_browse_nl0bz_40", rv = "_disabled_nl0bz_67", Ir = {
  zone: Qx,
  dragging: ev,
  caption: tv,
  browse: nv,
  disabled: rv
};
function sv(e, t) {
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
const AS = rt(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: a = "Drop to attach",
    browseText: d = "Browse",
    disabled: s = !1,
    className: i
  }, c) {
    const f = re(null), [u, x] = K(!1), g = (p) => {
      if (!p || p.length === 0) return;
      const v = [...p].filter((S) => sv(S, t ?? ""));
      v.length !== 0 && r?.(v);
    }, y = (p) => {
      s || (p.preventDefault(), x(!0));
    }, m = (p) => {
      s || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", x(!0));
    }, b = (p) => {
      s || p.currentTarget.contains(p.relatedTarget) || x(!1);
    }, _ = (p) => {
      s || (p.preventDefault(), x(!1), g(p.dataTransfer.files));
    };
    return qs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": s || void 0,
        className: [
          Ir.zone,
          u ? Ir.dragging : null,
          s ? Ir.disabled : null,
          i
        ].filter(Boolean).join(" "),
        onDragEnter: y,
        onDragOver: m,
        onDragLeave: b,
        onDrop: _,
        children: [
          /* @__PURE__ */ o("p", { className: Ir.caption, children: u ? a : l }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ir.browse,
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
              onChange: (p) => {
                g(p.target.files), p.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), ov = "_root_1a92d_1", lv = "_menubar_1a92d_5", av = "_horizontal_1a92d_15", iv = "_vertical_1a92d_20", cv = "_itemWrapper_1a92d_25", dv = "_item_1a92d_25", uv = "_disabled_1a92d_61", fv = "_icon_1a92d_68", _v = "_text_1a92d_75", pv = "_caret_1a92d_79", hv = "_hasChildren_1a92d_85", mv = "_submenu_1a92d_94", gv = "_submenuItem_1a92d_118", bv = "_flyout_1a92d_155", yv = "_hamburger_1a92d_175", xv = "_responsive_1a92d_198", vv = "_mobileOpen_1a92d_207", ft = {
  root: ov,
  menubar: lv,
  horizontal: av,
  vertical: iv,
  itemWrapper: cv,
  item: dv,
  disabled: uv,
  icon: fv,
  text: _v,
  caret: pv,
  hasChildren: hv,
  submenu: mv,
  submenuItem: gv,
  flyout: bv,
  hamburger: yv,
  responsive: xv,
  mobileOpen: vv
}, is = or(null);
function wv(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function kv(e, t, n, r, l) {
  const [a, d] = K(n), s = e ? t ?? !1 : a, i = B(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return be(() => {
    l > 0 && i(!1);
  }, [l]), [s, i];
}
function Ov({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: ft.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: ft.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Te, { icon: e, size: 16 })
    }
  ) : null;
}
function vl(e) {
  return Ut(e) && e.type === wl;
}
function Vs({
  itemKey: e,
  props: t
}) {
  const n = Ln(is);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: a, disabled: d, template: s } = t, i = Se(
    () => Hr.toArray(t.children).filter(Ut),
    [t.children]
  ), c = i.length > 0, f = !!d, u = t.open !== void 0, [x, g] = kv(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), y = n.level === 0, m = re(0), _ = (y && !u ? n.openKey === e : null) ?? x, p = B(
    (P) => {
      y && !u ? n.setOpenKey(P ? e : null) : (g(P), y && n.setOpenKey(null));
    },
    [y, u, n, e, g]
  ), [, v] = K(0);
  be(() => {
    if (!a) return;
    const P = () => v((L) => L + 1);
    return window.addEventListener("hashchange", P), () => window.removeEventListener("hashchange", P);
  }, [a]);
  const S = a && !c ? wv(a, t.match) : !1, h = B(
    (P) => {
      if (f) {
        P.preventDefault();
        return;
      }
      const L = { text: r, value: l, path: a };
      [n.emit(L), t.onClick?.(L)].includes(!1) && P.preventDefault(), n.closeAll();
    },
    [f, r, l, a, n, t]
  ), $ = B(() => {
    if (!f) {
      if (_ && (Date.now() - m.current < 600 || !n.clickToOpen)) {
        m.current = 0;
        return;
      }
      p(!_);
    }
  }, [f, _, p, n.clickToOpen]), k = B(() => {
    !c || f || n.clickToOpen || (m.current = Date.now(), p(!0));
  }, [c, f, n.clickToOpen, p]), E = B(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), C = `${n.baseId}-submenu-${e}`, [A, D] = K(null);
  be(() => {
    n.closeSignal > 0 && D(null);
  }, [n.closeSignal]);
  const z = Se(
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
  ), O = c ? /* @__PURE__ */ o("span", { className: ft.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Te,
    {
      icon: n.flyout && !y ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, N = s ?? /* @__PURE__ */ M(kt, { children: [
    /* @__PURE__ */ o(
      Ov,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: ft.text, children: r }),
    O
  ] });
  if (c) {
    let P = function(L) {
      const H = Array.from(L.currentTarget.children).map((ae) => ae.querySelector('[role="menuitem"]')).filter(
        (ae) => ae != null && ae.getAttribute("aria-disabled") !== "true" && !ae.hasAttribute("disabled")
      ), F = document.activeElement, Y = F ? H.indexOf(F) : -1;
      L.key === "ArrowDown" ? (L.preventDefault(), L.stopPropagation(), (Y === -1 ? H[0] : H[(Y + 1) % H.length])?.focus()) : L.key === "ArrowUp" ? (L.preventDefault(), L.stopPropagation(), (Y === -1 ? H[H.length - 1] : H[(Y - 1 + H.length) % H.length])?.focus()) : L.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), L.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (L.key === "ArrowLeft" || L.key === "Escape") && (L.preventDefault(), L.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: ft.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : k,
        onMouseLeave: n.clickToOpen ? void 0 : E,
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
              "aria-expanded": _,
              "aria-controls": C,
              tabIndex: f ? -1 : 0,
              disabled: f,
              className: [
                ft.item,
                f ? ft.disabled : null,
                ft.hasChildren
              ].filter(Boolean).join(" "),
              onClick: $,
              children: N
            }
          ),
          _ ? /* @__PURE__ */ o(
            "div",
            {
              id: C,
              role: "menu",
              "aria-label": r,
              className: [
                ft.submenu,
                n.flyout && !y ? ft.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: P,
              children: /* @__PURE__ */ o(is.Provider, { value: z, children: i.map(
                (L, H) => vl(L) ? /* @__PURE__ */ o(
                  Vs,
                  {
                    itemKey: `${e}-${H}`,
                    props: L.props
                  },
                  `${e}-${H}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Us, { children: L }, `${e}-custom-${H}`)
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
    "aria-current": S ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [ft.submenuItem, f ? ft.disabled : null].filter(Boolean).join(" "),
    onClick: h
  };
  return a && !f ? /* @__PURE__ */ o("div", { className: ft.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: a, target: t.target, ...T, children: N }) }) : /* @__PURE__ */ o("div", { className: ft.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...T, children: N }) });
}
function wl(e) {
  if (!Ln(is)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Vs, { itemKey: e.text, props: e });
}
function Sv({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: a,
  onClose: d,
  ariaLabel: s = "Menu",
  toggleAriaLabel: i = "Toggle menu",
  className: c,
  ...f
}) {
  const u = nt(), x = re(null), g = re(null), [y, m] = K(null), [b, _] = K(0), [p, v] = K(!1), S = re(null), h = B(
    (A) => a?.(A),
    [a]
  ), $ = B(() => {
    m(null), _((A) => A + 1);
  }, []);
  be(() => {
    if (y == null) return;
    const A = (D) => {
      x.current && !x.current.contains(D.target) && $();
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, [y, $]), be(() => {
    S.current != null && y === S.current && (document.getElementById(`${u}-submenu-${y}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), S.current = null);
  }, [y, u]);
  const k = Se(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: b,
      emit: h,
      closeAll: $,
      openKey: y,
      setOpenKey: m
    }),
    [u, n, t, b, h, $, y]
  ), E = Se(
    () => Hr.toArray(e).filter(Ut),
    [e]
  ), C = (A) => {
    const D = g.current;
    if (!D) return;
    const z = Array.from(D.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (y != null) {
      const T = document.getElementById(`${u}-submenu-${y}`);
      if (T) {
        const P = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), L = document.activeElement, H = L ? P.indexOf(L) : -1;
        if (A.key === "ArrowDown") {
          A.preventDefault(), (H === -1 ? P[0] : P[(H + 1) % P.length])?.focus();
          return;
        }
        if (A.key === "ArrowUp") {
          A.preventDefault(), (H === -1 ? P[P.length - 1] : P[(H - 1 + P.length) % P.length])?.focus();
          return;
        }
        if (A.key === "Escape") {
          A.preventDefault(), $(), d?.(), D.querySelector(`[data-index="${y}"]`)?.focus();
          return;
        }
        if (A.key === "Enter" || A.key === " ") return;
      }
      if (A.key === "Escape") {
        A.preventDefault(), $(), d?.();
        return;
      }
    }
    const O = document.activeElement, N = O ? z.indexOf(O) : -1;
    if (A.key === "ArrowRight") {
      if (A.preventDefault(), z.length === 0) return;
      z[N === -1 ? 0 : (N + 1) % z.length]?.focus();
      return;
    }
    if (A.key === "ArrowLeft") {
      if (A.preventDefault(), z.length === 0) return;
      z[N === -1 ? z.length - 1 : (N - 1 + z.length) % z.length]?.focus();
      return;
    }
    if (A.key === "ArrowDown") {
      if (N >= 0) {
        const T = O?.getAttribute("data-index");
        if (T == null) return;
        D.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (A.preventDefault(), S.current = T, m(T));
      }
      return;
    }
    if (A.key === "Home") {
      A.preventDefault(), z[0]?.focus();
      return;
    }
    if (A.key === "End") {
      A.preventDefault(), z[z.length - 1]?.focus();
      return;
    }
    if (A.key.length === 1 && !A.ctrlKey && !A.metaKey) {
      const T = z.map((L) => L.textContent ?? ""), P = N === -1 ? 0 : (N + 1) % z.length;
      for (let L = 0; L < z.length; L++) {
        const H = (P + L) % z.length;
        if (T[H]?.toLowerCase().startsWith(A.key.toLowerCase())) {
          A.preventDefault(), z[H]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ M(
    "nav",
    {
      ref: x,
      "aria-label": s,
      className: [
        ft.root,
        l ? ft.vertical : ft.horizontal,
        r ? ft.responsive : null,
        r && p ? ft.mobileOpen : null,
        n ? ft.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": i,
            "aria-expanded": p,
            className: ft.hamburger,
            onClick: () => v((A) => !A),
            children: /* @__PURE__ */ o(Te, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: g,
            role: l ? "menu" : "menubar",
            "aria-label": s,
            className: ft.menubar,
            onKeyDown: C,
            children: /* @__PURE__ */ o(is.Provider, { value: k, children: E.map(
              (A, D) => vl(A) ? /* @__PURE__ */ o(
                Vs,
                {
                  itemKey: String(D),
                  props: A.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ o(Us, { children: A }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const Nv = "_popup_uiejp_1", $v = "_menu_uiejp_22", Fs = {
  popup: Nv,
  menu: $v
}, kl = or(null);
function CS() {
  const e = Ln(kl);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Ol(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ o(wl, { ...l, children: r ? Ol(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Ev({ state: e, onClose: t }) {
  const n = re(null), [r, l] = K({ left: e.x, top: e.y });
  As(() => {
    const d = n.current;
    if (!d) return;
    const s = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), be(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const a = B(
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
      className: Fs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: Fs.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Sv,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: a,
          onClose: t,
          children: Ol(e.options.items ?? [])
        }
      ) })
    }
  );
}
function DS({ children: e }) {
  const [t, n] = K(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = B(
    (d, s) => {
      d.preventDefault();
      const i = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: i, options: s });
    },
    []
  );
  be(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Fs.popup}`);
      u && !u.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, i = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", i), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", i), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const a = Se(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ M(kl.Provider, { value: a, children: [
    e,
    t ? /* @__PURE__ */ o(Ev, { state: t, onClose: r }) : null
  ] });
}
const Tv = "_root_rgcia_1", Av = "_list_rgcia_9", Cv = "_item_rgcia_14", Dv = "_trigger_rgcia_18", Mv = "_disabled_rgcia_45", Iv = "_expanded_rgcia_52", zv = "_selected_rgcia_56", Lv = "_icon_rgcia_61", Rv = "_text_rgcia_72", Pv = "_caret_rgcia_79", jv = "_open_rgcia_86", Bv = "_submenu_rgcia_90", Fv = "_iconOnly_rgcia_172", Hv = "_stacked_rgcia_201", zt = {
  root: Tv,
  list: Av,
  item: Cv,
  trigger: Dv,
  disabled: Mv,
  expanded: Iv,
  selected: zv,
  icon: Lv,
  text: Rv,
  caret: Pv,
  open: jv,
  submenu: Bv,
  iconOnly: Fv,
  stacked: Hv
}, cs = or(null);
function Uv() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function qv(e, t) {
  const n = Uv(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Kv({
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
      children: /* @__PURE__ */ o(Te, { icon: e, size: 16 })
    }
  ) : null;
}
function Ys({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Ln(cs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: a, path: d, disabled: s } = n, i = Se(
    () => Hr.toArray(n.children).filter(Ut),
    [n.children]
  ), c = i.length > 0, f = !!s, u = n.match ?? r.match, x = n.expanded !== void 0, [g, y] = K(
    n.defaultExpanded ?? !1
  ), m = x ? n.expanded ?? !1 : g, b = B(
    (F) => {
      x || y(F), n.onExpandedChange?.(F);
    },
    [x, n]
  );
  be(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && b(!1);
  }, [r.collapseSignal]);
  const _ = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, v] = K(
    n.defaultSelected ?? !1
  ), S = !_ && d ? qv(d, u) : !1, h = n.selected ?? (_ ? p : S || p), [, $] = K(0);
  be(() => {
    if (!d) return;
    const F = () => $((Y) => Y + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [d]);
  const k = Se(
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
    S && t.length > 0 && k.openAncestors();
  }, []);
  const E = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const Y = { text: l, value: a, path: d };
      [r.emit(Y), n.onClick?.(Y)].includes(!1) && F.preventDefault(), _ || v(!0), n.onSelectedChange?.(!0);
    },
    [f, l, a, d, r, n, _]
  ), C = B(() => {
    f || (m || r.notifyOpened(e, t), b(!m));
  }, [f, m, r, e, t, b]), A = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? C() : F.target.click()) : F.key === "Escape" && m ? (F.preventDefault(), b(!1)) : F.key === "ArrowRight" && c && !m ? (F.preventDefault(), r.notifyOpened(e, t), b(!0)) : F.key === "ArrowLeft" && m && (F.preventDefault(), b(!1));
    },
    [c, C, m, b, r, e, t]
  ), D = c && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [zt.caret, m ? zt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, z = n.template ?? /* @__PURE__ */ M(kt, { children: [
    /* @__PURE__ */ o(
      Kv,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: zt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: zt.text, children: l }),
    D
  ] }), O = `${r.baseId}-panel-${e}`, N = `${r.baseId}-trigger-${e}`, T = [
    zt.trigger,
    f ? zt.disabled : null,
    m ? zt.expanded : null,
    h ? zt.selected : null
  ].filter(Boolean).join(" "), P = r.level > 0 ? "menuitem" : void 0, L = c ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: N,
      role: P,
      "aria-expanded": m,
      "aria-controls": O,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: C,
      onKeyDown: A,
      children: z
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: N,
      role: P,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": h ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: E,
      onKeyDown: A,
      children: z
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: N,
      role: P,
      "aria-current": h ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: E,
      onKeyDown: A,
      children: z
    }
  ), H = c ? r.renderMode === "server" && !m ? null : /* @__PURE__ */ o(
    "div",
    {
      id: O,
      role: "menu",
      "aria-labelledby": N,
      className: zt.submenu,
      hidden: r.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ o(cs.Provider, { value: k, children: i.map((F, Y) => /* @__PURE__ */ o(
        Ys,
        {
          itemKey: `${e}-${Y}`,
          ancestors: [...t, e],
          props: F.props
        },
        `${e}-${Y}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: zt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        L,
        H
      ]
    }
  );
}
function MS(e) {
  if (!Ln(cs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(Ys, { itemKey: e.text, ancestors: [], props: e });
}
function IS({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: a = "client",
  onClick: d,
  ariaLabel: s = "Panel menu",
  className: i,
  ...c
}) {
  const f = nt(), [u, x] = K(0), g = re(/* @__PURE__ */ new Set()), y = B(
    (S) => d?.(S),
    [d]
  ), m = B(
    (S, h) => {
      t || (g.current = /* @__PURE__ */ new Set([S, ...h]), x(($) => $ + 1));
    },
    [t]
  ), b = (S) => Array.from(
    S.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (h) => !h.hasAttribute("disabled") && h.getAttribute("aria-disabled") !== "true" && h.closest("[hidden]") == null
  ), _ = (S) => {
    if (!(S.key === "Enter" || S.key === " ")) {
      if (S.key === "ArrowDown" || S.key === "ArrowUp") {
        const h = S.target, $ = b(S.currentTarget), k = $.indexOf(h);
        if (k === -1) return;
        S.preventDefault();
        const E = S.key === "ArrowDown" ? 1 : -1;
        $[(k + E + $.length) % $.length]?.focus();
      } else if (S.key === "Home" || S.key === "End") {
        const h = b(S.currentTarget);
        S.preventDefault(), (S.key === "Home" ? h[0] : h[h.length - 1])?.focus();
      }
    }
  }, p = Se(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: a,
      match: l,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: g,
      emit: y,
      notifyOpened: m,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      r,
      a,
      l,
      u,
      y,
      m
    ]
  ), v = Se(
    () => Hr.toArray(e).filter(Ut),
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
        i
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      ...c,
      children: /* @__PURE__ */ o("div", { className: zt.list, role: "presentation", children: /* @__PURE__ */ o(cs.Provider, { value: p, children: v.map((S, h) => /* @__PURE__ */ o(
        Ys,
        {
          itemKey: String(h),
          ancestors: [],
          props: S.props
        },
        `top-${h}`
      )) }) })
    }
  );
}
const Wv = "_root_5numg_1", Gv = "_trigger_5numg_7", Vv = "_defaultTrigger_5numg_40", Yv = "_avatar_5numg_46", Xv = "_menu_5numg_58", Zv = "_item_5numg_74", Jv = "_disabled_5numg_88", Qv = "_active_5numg_97", e2 = "_icon_5numg_107", t2 = "_text_5numg_114", Sn = {
  root: Wv,
  trigger: Gv,
  defaultTrigger: Vv,
  avatar: Yv,
  menu: Xv,
  item: Zv,
  disabled: Jv,
  active: Qv,
  icon: e2,
  text: t2
};
function zS({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const a = nt(), d = `${a}-menu`, s = re(null), i = re(null), [c, f] = K(!1), [u, x] = K(-1), g = t, y = e.map((h, $) => h.disabled ? -1 : $).filter((h) => h >= 0), m = B(
    (h) => {
      if (h.disabled) return;
      const $ = {
        text: h.text,
        path: h.path
      };
      n?.($), f(!1), i.current?.focus();
    },
    [n]
  ), b = B(() => {
    x(y[0] ?? -1), f(!0);
  }, [y]), _ = B(() => {
    f(!1), x(-1), i.current?.focus();
  }, []);
  be(() => {
    if (!c) return;
    const h = ($) => {
      s.current && !s.current.contains($.target) && (f(!1), x(-1));
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [c]), be(() => {
    if (!c) return;
    const h = ($) => {
      $.key === "Escape" && ($.preventDefault(), _());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [c, _]);
  const p = (h) => {
    if (y.length === 0) return;
    const $ = y.indexOf(u), k = $ === -1 ? 0 : ($ + h + y.length) % y.length, E = y[k];
    E != null && x(E);
  }, v = (h) => {
    if (!c) {
      (h.key === "ArrowDown" || h.key === "Enter" || h.key === " ") && (h.preventDefault(), b());
      return;
    }
    switch (h.key) {
      case "Escape":
        h.preventDefault(), _();
        break;
      case "ArrowDown":
        h.preventDefault(), p(1);
        break;
      case "ArrowUp":
        h.preventDefault(), p(-1);
        break;
      case "Home":
        h.preventDefault(), y[0] != null && x(y[0]);
        break;
      case "End":
        h.preventDefault(), y[y.length - 1] != null && x(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (h.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
        }
        break;
      case "Tab":
        f(!1), x(-1);
        break;
    }
  }, S = (h) => {
    switch (h.key) {
      case "ArrowDown":
        h.preventDefault(), p(1);
        break;
      case "ArrowUp":
        h.preventDefault(), p(-1);
        break;
      case "Home":
        h.preventDefault(), y[0] != null && x(y[0]);
        break;
      case "End":
        h.preventDefault(), y[y.length - 1] != null && x(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (h.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
        }
        break;
      case "Escape":
        h.preventDefault(), _();
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
      className: [Sn.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: i,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: Sn.trigger,
            onClick: () => c ? _() : b(),
            onKeyDown: v,
            children: g ?? /* @__PURE__ */ M("span", { className: Sn.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Sn.avatar, "aria-hidden": "true", children: "●" }),
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
            "aria-activedescendant": u >= 0 ? `${a}-item-${u}` : void 0,
            className: Sn.menu,
            onKeyDown: S,
            tabIndex: -1,
            children: e.map((h, $) => {
              const k = !!h.disabled, E = $ === u;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${a}-item-${$}`,
                  role: "menuitem",
                  "aria-disabled": k || void 0,
                  tabIndex: k ? -1 : 0,
                  className: [
                    Sn.item,
                    E ? Sn.active : null,
                    k ? Sn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    k || m(h);
                  },
                  onMouseEnter: () => {
                    k || x($);
                  },
                  children: [
                    h.icon ? /* @__PURE__ */ o("span", { className: Sn.icon, "aria-hidden": "true", children: h.icon }) : null,
                    /* @__PURE__ */ o("span", { className: Sn.text, children: h.text })
                  ]
                },
                `${h.text}-${$}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const n2 = "_root_vv0xs_1", r2 = "_bottomRight_vv0xs_11", s2 = "_bottomLeft_vv0xs_16", o2 = "_topRight_vv0xs_21", l2 = "_topLeft_vv0xs_26", a2 = "_menu_vv0xs_31", i2 = "_itemWrapper_vv0xs_48", c2 = "_tooltip_vv0xs_54", d2 = "_main_vv0xs_76", u2 = "_mainIcon_vv0xs_104", f2 = "_mainOpen_vv0xs_109", _2 = "_item_vv0xs_48", p2 = "_disabled_vv0xs_141", h2 = "_itemIcon_vv0xs_148", qt = {
  root: n2,
  bottomRight: r2,
  bottomLeft: s2,
  topRight: o2,
  topLeft: l2,
  menu: a2,
  itemWrapper: i2,
  tooltip: c2,
  main: d2,
  mainIcon: u2,
  mainOpen: f2,
  item: _2,
  disabled: p2,
  itemIcon: h2
};
function LS({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: a
}) {
  const d = t ?? "bottom-right", i = `${nt()}-menu`, c = re(null), f = re(null), [u, x] = K(!1), g = B(
    (_) => {
      if (_.disabled) return;
      const p = { text: _.text, value: _.value };
      r?.(p), x(!1), f.current?.focus();
    },
    [r]
  );
  be(() => {
    if (!u) return;
    const _ = (p) => {
      c.current && !c.current.contains(p.target) && x(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [u]), be(() => {
    if (!u) return;
    const _ = (p) => {
      p.key === "Escape" && (x(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [u]);
  const y = d === "bottom-right" ? qt.bottomRight : d === "bottom-left" ? qt.bottomLeft : d === "top-right" ? qt.topRight : qt.topLeft, m = (_) => {
    !u && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), x(!0)) : u && _.key === "Escape" && (_.preventDefault(), x(!1));
  }, b = (_) => {
    _.key === "Escape" && (_.preventDefault(), x(!1), f.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [qt.root, y, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            className: qt.menu,
            onKeyDown: b,
            children: e.map((_, p) => {
              const v = !!_.disabled;
              return /* @__PURE__ */ M("div", { className: qt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: qt.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": v || void 0,
                    title: _.text,
                    disabled: v,
                    tabIndex: v ? -1 : 0,
                    className: [qt.item, v ? qt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => g(_),
                    children: /* @__PURE__ */ o("span", { className: qt.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${p}`);
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
            "aria-controls": i,
            "aria-label": l,
            onClick: () => x((_) => !_),
            onKeyDown: m,
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
const m2 = "_root_1eyur_1", g2 = "_list_1eyur_5", b2 = "_item_1eyur_15", y2 = "_link_1eyur_22", x2 = "_linkButton_1eyur_23", v2 = "_current_1eyur_24", w2 = "_disabled_1eyur_68", k2 = "_icon_1eyur_74", O2 = "_text_1eyur_81", S2 = "_separator_1eyur_85", dt = {
  root: m2,
  list: g2,
  item: b2,
  link: y2,
  linkButton: x2,
  current: v2,
  disabled: w2,
  icon: k2,
  text: O2,
  separator: S2
};
function RS({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, a = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [dt.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: dt.list, children: e.map((d, s) => {
        const i = s === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: dt.item, children: [
          i ? c ? /* @__PURE__ */ M(
            "span",
            {
              className: [dt.current, dt.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: dt.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: dt.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), a(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: dt.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: dt.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "span",
            {
              className: dt.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: dt.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : c ? /* @__PURE__ */ M(
            "span",
            {
              className: [dt.link, dt.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: dt.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: dt.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: dt.link,
              onClick: (f) => {
                f.preventDefault(), a(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: dt.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: dt.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: dt.linkButton,
              tabIndex: 0,
              onClick: () => a(d),
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: dt.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: dt.text, children: d.text })
              ]
            }
          ),
          i ? null : /* @__PURE__ */ o("span", { className: dt.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${s}`);
      }) })
    }
  );
}
const N2 = "_link_tmy3k_1", $2 = {
  link: N2
}, PS = rt(function({ children: t, icon: n, visible: r = !0, className: l, ...a }, d) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ M(kt, { children: [
    n != null && /* @__PURE__ */ o(Te, { icon: n, "aria-hidden": "true" }),
    t
  ] }), i = [$2.link, l].filter(Boolean).join(" ");
  if (a.href != null) {
    const { href: f, ...u } = a;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        className: i,
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
      className: i,
      ...a,
      children: s
    }
  );
}), E2 = "_root_dnkuu_1", T2 = "_list_dnkuu_5", A2 = "_item_dnkuu_15", C2 = "_connector_dnkuu_21", D2 = "_connectorCompleted_dnkuu_30", M2 = "_step_dnkuu_34", I2 = "_active_dnkuu_69", z2 = "_completed_dnkuu_75", L2 = "_circle_dnkuu_79", R2 = "_check_dnkuu_109", P2 = "_icon_dnkuu_114", j2 = "_number_dnkuu_119", B2 = "_text_dnkuu_124", Kt = {
  root: E2,
  list: T2,
  item: A2,
  connector: C2,
  connectorCompleted: D2,
  step: M2,
  active: I2,
  completed: z2,
  circle: L2,
  check: R2,
  icon: P2,
  number: j2,
  text: B2
};
function jS({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: a,
  onChange: d,
  Change: s,
  onSelectedIndexChange: i,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? a ?? !1, x = t ?? n, g = x !== void 0, [y, m] = K(() => Math.min(Math.max(0, x ?? r), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, g ? x : y),
    Math.max(0, e.length - 1)
  ), p = re(null), v = B(
    ($) => {
      const k = Math.min(
        Math.max(0, $),
        Math.max(0, e.length - 1)
      );
      g || m(k), (d ?? s ?? i)?.(k);
    },
    [g, d, s, i, e.length]
  ), S = B(
    ($, k) => !!(k.disabled || u && $ > _ + 1),
    [u, _]
  ), h = ($) => {
    const k = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((A) => A.getAttribute("aria-disabled") !== "true" && !A.disabled), E = document.activeElement, C = E ? k.indexOf(E) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), k.length === 0) return;
      const A = C === -1 ? 0 : (C + 1) % k.length, D = k[A];
      D && D.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), k.length === 0) return;
      const A = C === -1 ? k.length - 1 : (C - 1 + k.length) % k.length, D = k[A];
      D && D.focus();
    } else $.key === "Home" ? ($.preventDefault(), k[0]?.focus()) : $.key === "End" && ($.preventDefault(), k[k.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": c,
      className: [Kt.root, f].filter(Boolean).join(" "),
      onKeyDown: h,
      children: /* @__PURE__ */ o("ol", { ref: p, role: "list", className: Kt.list, children: e.map(($, k) => {
        const E = k === _, C = k < _, A = S(k, $);
        return /* @__PURE__ */ M(
          "li",
          {
            role: "listitem",
            className: Kt.item,
            children: [
              k > 0 ? /* @__PURE__ */ o(
                "span",
                {
                  className: [
                    Kt.connector,
                    C ? Kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ M(
                "button",
                {
                  type: "button",
                  "data-step": k,
                  "aria-current": E ? "step" : void 0,
                  "aria-disabled": A ? "true" : void 0,
                  disabled: A,
                  tabIndex: A ? -1 : 0,
                  className: [
                    Kt.step,
                    E ? Kt.active : null,
                    C ? Kt.completed : null,
                    A ? Kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    A || v(k);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Kt.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ o("span", { className: Kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Te, { icon: "check", size: "sm" }) }) : $.icon ? /* @__PURE__ */ o("span", { className: Kt.icon, children: $.icon }) : /* @__PURE__ */ o("span", { className: Kt.number, children: k + 1 }) }),
                    /* @__PURE__ */ o("span", { className: Kt.text, children: $.text })
                  ]
                }
              )
            ]
          },
          `${$.text}-${k}`
        );
      }) })
    }
  );
}
const F2 = "_root_12hod_1", H2 = "_horizontal_12hod_13", U2 = "_vertical_12hod_17", q2 = "_pane_12hod_21", K2 = "_handle_12hod_31", W2 = "_handleHorizontal_12hod_51", G2 = "_handleVertical_12hod_57", V2 = "_handleGrip_12hod_63", Y2 = "_handleCollapseHint_12hod_75", X2 = "_collapseBtn_12hod_79", Z2 = "_collapseBtnCollapsed_12hod_109", cn = {
  root: F2,
  horizontal: H2,
  vertical: U2,
  pane: q2,
  handle: K2,
  handleHorizontal: W2,
  handleVertical: G2,
  handleGrip: V2,
  handleCollapseHint: Y2,
  collapseBtn: X2,
  collapseBtnCollapsed: Z2
};
function zr(e, t) {
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
function Mn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function BS({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: a,
  Collapse: d,
  ariaLabel: s = "Splitter",
  className: i
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = re(null), x = B(() => {
    const O = n.length;
    if (O === 0) return [];
    const N = n.map((P) => P.size ? zr(P.size, 100 / O) : 100 / O), T = N.reduce((P, L) => P + L, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? N.map((P) => P / T * 100) : N;
  }, [n]), [g, y] = K(() => x()), [m, b] = K(
    () => n.map((O) => !!O.collapsed)
  ), _ = re(g);
  be(() => {
    b(n.map((O) => !!O.collapsed));
  }, [n]);
  const p = B(
    () => n.map((O) => zr(O.min, 0)),
    [n]
  ), v = B(
    () => n.map((O) => zr(O.max, 100)),
    [n]
  ), S = B(
    (O, N) => {
      const T = { paneIndex: O, newSize: N, cancel: !1 };
      return (r ?? l)?.(T), !T.cancel;
    },
    [r, l]
  ), h = B(
    (O, N) => {
      const T = { paneIndex: O, collapse: N, cancel: !1 };
      return (a ?? d)?.(T), !T.cancel;
    },
    [a, d]
  ), $ = B(
    (O) => {
      const N = !m[O];
      h(O, N) && (N ? (_.current = [...g], b((T) => {
        const P = [...T];
        return P[O] !== void 0 && (P[O] = !0), P;
      }), y((T) => {
        const P = [...T], L = P[O] ?? 0, H = O < P.length - 1 ? O + 1 : O - 1;
        if (H >= 0 && H < P.length) {
          const F = P[H] ?? 0;
          P[H] = F + L, P[O] = 0;
        } else
          P[O] = 0;
        return P;
      })) : (b((T) => {
        const P = [...T];
        return P[O] !== void 0 && (P[O] = !1), P;
      }), y(() => {
        const T = [..._.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [m, g, n.length, h]
  ), k = re(
    null
  ), E = B(
    (O, N, T) => {
      const P = u.current;
      if (!P) return null;
      const L = P.getBoundingClientRect();
      let H;
      if (f) {
        if (L.width === 0) return null;
        H = (N - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        H = (T - L.top) / L.height * 100;
      }
      let F = 0;
      for (let ae = 0; ae < O; ae++) {
        const ee = g[ae];
        ee !== void 0 && (F += ee);
      }
      return H - F;
    },
    [f, g]
  ), C = (O, N) => {
    N.preventDefault();
    const T = N.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(N.pointerId), k.current = { handleIndex: O, pointerId: N.pointerId };
  }, A = (O) => {
    if (!k.current || k.current.pointerId !== O.pointerId)
      return;
    O.preventDefault();
    const N = k.current.handleIndex, T = E(N, O.clientX, O.clientY);
    if (T == null) return;
    const P = p(), L = v(), H = P[N] ?? 0, F = L[N] ?? 100, Y = N + 1, ae = P[Y] ?? 0, ee = L[Y] ?? 100, we = g[N] ?? 0, se = g[Y] ?? 0, de = we + se;
    if (de <= 0) return;
    let G = Mn(T, H, F), me = de - G;
    if (me < ae) {
      if (me = ae, G = de - me, G < H || G > F) return;
    } else if (me > ee && (me = ee, G = de - me, G < H || G > F))
      return;
    G = Mn(G, H, F), me = de - G, S(N, G) && y((ce) => {
      const xe = [...ce];
      return xe[N] = G, xe[Y] = me, xe;
    });
  }, D = (O) => {
    !k.current || k.current.pointerId !== O.pointerId || (k.current = null);
  }, z = (O, N) => {
    const T = p(), P = v(), L = O, H = O + 1, F = g[L] ?? 0, Y = g[H] ?? 0, ae = F + Y;
    let ee = 0;
    const we = !!n[L]?.collapsible, se = !!n[H]?.collapsible;
    if (f ? N.key === "ArrowLeft" ? ee = -5 : N.key === "ArrowRight" && (ee = 5) : N.key === "ArrowUp" ? ee = -5 : N.key === "ArrowDown" && (ee = 5), N.key === "Home") {
      N.preventDefault();
      let de = T[L] ?? 0, G = ae - de;
      if (G = Mn(
        G,
        T[H] ?? 0,
        P[H] ?? 100
      ), de = ae - G, de = Mn(de, T[L] ?? 0, P[L] ?? 100), !S(L, de)) return;
      y((me) => {
        const ce = [...me];
        return ce[L] = de, ce[H] = G, ce;
      });
      return;
    }
    if (N.key === "End") {
      N.preventDefault();
      let de = P[L] ?? 100;
      de = Math.min(de, ae - (T[H] ?? 0));
      let G = ae - de;
      if (G = Mn(
        G,
        T[H] ?? 0,
        P[H] ?? 100
      ), de = ae - G, de = Mn(de, T[L] ?? 0, P[L] ?? 100), !S(L, de)) return;
      y((me) => {
        const ce = [...me];
        return ce[L] = de, ce[H] = G, ce;
      });
      return;
    }
    if ((N.key === "Enter" || N.key === " ") && (we || se)) {
      N.preventDefault(), $(we ? L : H);
      return;
    }
    if (ee !== 0) {
      N.preventDefault();
      let de = F + ee, G = ae - de;
      const me = T[L] ?? 0, ce = P[L] ?? 100, xe = T[H] ?? 0, _e = P[H] ?? 100;
      if (de = Mn(de, me, ce), G = ae - de, (G < xe || G > _e) && (G = Mn(G, xe, _e), de = ae - G, de = Mn(de, me, ce), G = ae - de), !S(L, de)) return;
      y((Ae) => {
        const Ie = [...Ae];
        return Ie[L] = de, Ie[H] = G, Ie;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      className: [
        cn.root,
        f ? cn.horizontal : cn.vertical,
        i
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((O, N) => {
        const T = !!m[N], P = T ? 0 : g[N] ?? 100 / n.length, L = T ? { display: "none" } : f ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, H = zr(O.min, 0), F = zr(O.max, 100), Y = N < n.length - 1, ae = !!n[N + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": O.label ?? `Pane ${N + 1}`,
              className: cn.pane,
              style: L,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : O.children,
                O.collapsible && !T ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: cn.collapseBtn,
                    "aria-label": `Collapse pane ${N + 1}`,
                    "aria-expanded": !T,
                    onClick: () => $(N),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                O.collapsible && T ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: cn.collapseBtn,
                    "aria-label": `Expand pane ${N + 1}`,
                    "aria-expanded": !T,
                    onClick: () => $(N),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && O.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: cn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${N + 1}`,
                "aria-expanded": "false",
                onClick: () => $(N),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          Y ? /* @__PURE__ */ M(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": H,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(P),
              "aria-label": `Resize handle ${N + 1}`,
              tabIndex: T || m[N + 1] ? -1 : 0,
              className: [
                cn.handle,
                f ? cn.handleHorizontal : cn.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (ee) => C(N, ee),
              onPointerMove: A,
              onPointerUp: D,
              onKeyDown: (ee) => z(N, ee),
              children: [
                /* @__PURE__ */ o("span", { className: cn.handleGrip, "aria-hidden": "true" }),
                (O.collapsible || ae) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: cn.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, N);
      })
    }
  );
}
const J2 = "_root_1w3wd_1", Q2 = "_list_1w3wd_5", ew = "_vertical_1w3wd_14", tw = "_horizontal_1w3wd_20", nw = "_item_1w3wd_28", rw = "_link_1w3wd_32", sw = "_active_1w3wd_57", pr = {
  root: J2,
  list: Q2,
  vertical: ew,
  horizontal: tw,
  item: nw,
  link: rw,
  active: sw
};
function FS({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: a,
  Click: d,
  ariaLabel: s = "Table of contents",
  className: i
}) {
  const c = t ?? n, f = r ?? l ?? "vertical", [u, x] = K(
    () => e[0]?.selector ?? null
  ), g = re(u);
  g.current = u;
  const y = B(
    (m, b) => {
      if (x(m.selector), (a ?? d)?.({ text: m.text, selector: m.selector }), b) {
        try {
          b.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          b.scrollIntoView();
        }
        const p = b;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [a, d]
  );
  return be(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (c) {
        const h = document.querySelector(c);
        if (h) return h;
      }
      return window;
    })();
    let _ = null;
    const p = /* @__PURE__ */ new Map(), v = () => {
      let h = null, $ = null;
      for (const E of e) {
        const C = document.querySelector(E.selector);
        if (!C) continue;
        p.set(E.selector, C);
        const A = C.getBoundingClientRect();
        let D = A.top;
        if (b !== window) {
          const z = b.getBoundingClientRect();
          D = A.top - z.top;
        }
        D <= 80 ? (!$ || D > $.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && ($ = { sel: E.selector, el: C }) : (!h || D < h.top) && (h = { sel: E.selector, top: D });
      }
      const k = $?.sel ?? h?.sel ?? e[0]?.selector ?? null;
      k && k !== g.current && x(k);
    }, S = () => {
      v();
    };
    if (typeof IntersectionObserver < "u") {
      const h = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver(($) => {
        const k = $.filter((E) => E.isIntersecting).sort((E, C) => E.boundingClientRect.top - C.boundingClientRect.top);
        if (k[0]) {
          const E = k[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === E) {
              x(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && E.id === C.selector.slice(1)) {
              x(C.selector);
              break;
            }
          }
        } else
          v();
      }, h);
      for (const $ of e) {
        const k = document.querySelector($.selector);
        k && (_.observe(k), p.set($.selector, k));
      }
    }
    return b === window ? (window.addEventListener("scroll", S, { passive: !0 }), v(), () => {
      window.removeEventListener("scroll", S), _?.disconnect();
    }) : (b.addEventListener("scroll", S, {
      passive: !0
    }), v(), () => {
      b.removeEventListener("scroll", S), _?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [pr.root, pr[f], i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: pr.list, children: e.map((m) => {
        const b = m.selector === u;
        return /* @__PURE__ */ o("li", { className: pr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [pr.link, b ? pr.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const p = document.querySelector(m.selector);
              y(m, p);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const ow = "_root_1bfit_1", lw = "_viewport_1bfit_17", aw = "_slide_1bfit_24", iw = "_active_1bfit_33", cw = "_arrow_1bfit_37", dw = "_prev_1bfit_71", uw = "_next_1bfit_75", fw = "_pauseBtn_1bfit_79", _w = "_indicators_1bfit_110", pw = "_indicator_1bfit_110", hw = "_indicatorActive_1bfit_145", dn = {
  root: ow,
  viewport: lw,
  slide: aw,
  active: iw,
  arrow: cw,
  prev: dw,
  next: uw,
  pauseBtn: fw,
  indicators: _w,
  indicator: pw,
  indicatorActive: hw
};
function HS({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: a,
  interval: d,
  Interval: s,
  pauseOnHover: i,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: u,
  showIndicators: x,
  ShowIndicators: g,
  onChange: y,
  Change: m,
  ariaLabel: b = "Carousel",
  className: _
}) {
  const p = t ?? n, v = p !== void 0, [S, h] = K(() => Math.min(Math.max(0, p ?? r), Math.max(0, e.length - 1))), $ = v ? p : S, k = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), E = l ?? a ?? !1, C = d ?? s ?? 3e3, A = i ?? c ?? !0, D = f ?? u ?? !0, z = x ?? g ?? !0, [O, N] = K(!1), [T, P] = K(!1), L = O || T, H = re(null), F = nt(), Y = B(
    (xe) => {
      const _e = e.length === 0 ? 0 : (xe % e.length + e.length) % e.length;
      v || h(_e), (y ?? m)?.(_e);
    },
    [v, y, m, e.length]
  ), ae = B(() => {
    Y(k - 1);
  }, [Y, k]), ee = B(() => {
    Y(k + 1);
  }, [Y, k]), we = B(
    (xe) => {
      Y(xe);
    },
    [Y]
  );
  be(() => {
    if (!E || L || e.length <= 1) return;
    const xe = setInterval(() => {
      Y(k + 1);
    }, C);
    return () => clearInterval(xe);
  }, [E, L, C, k, Y, e.length]);
  const se = (xe) => {
    e.length !== 0 && (xe.key === "ArrowLeft" ? (xe.preventDefault(), ae()) : xe.key === "ArrowRight" ? (xe.preventDefault(), ee()) : xe.key === "Home" ? (xe.preventDefault(), we(0)) : xe.key === "End" && (xe.preventDefault(), we(e.length - 1)));
  }, de = () => {
    A && E && P(!0);
  }, G = () => {
    A && E && P(!1);
  }, me = () => {
    A && E && P(!0);
  }, ce = () => {
    A && E && P(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: H,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [dn.root, _].filter(Boolean).join(" "),
      onKeyDown: se,
      onMouseEnter: de,
      onMouseLeave: G,
      onFocusCapture: me,
      onBlurCapture: ce,
      children: [
        /* @__PURE__ */ o("div", { id: F, className: dn.viewport, children: e.map((xe, _e) => {
          const Ae = _e === k;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${_e + 1} of ${e.length}`,
              "aria-hidden": Ae ? void 0 : !0,
              hidden: !Ae,
              className: [dn.slide, Ae ? dn.active : null].filter(Boolean).join(" "),
              children: xe
            },
            _e
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ M(kt, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [dn.arrow, dn.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": F,
              onClick: ae,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [dn.arrow, dn.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": F,
              onClick: ee,
              children: "›"
            }
          )
        ] }) : null,
        E ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: dn.pauseBtn,
            "aria-label": O ? "Resume" : "Pause",
            "aria-pressed": O,
            onClick: () => N((xe) => !xe),
            children: O ? "▶" : "⏸"
          }
        ) : null,
        z && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: dn.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((xe, _e) => {
              const Ae = _e === k;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    dn.indicator,
                    Ae ? dn.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${_e + 1}`,
                  "aria-current": Ae ? "true" : void 0,
                  "aria-controls": F,
                  onClick: () => we(_e)
                },
                _e
              );
            })
          }
        ) : null
      ]
    }
  );
}
const mw = "_root_1aa5u_1", gw = "_group_1aa5u_20", bw = "_itemWrapper_1aa5u_30", yw = "_treeitem_1aa5u_34", xw = "_disabled_1aa5u_50", vw = "_selected_1aa5u_60", ww = "_caret_1aa5u_66", kw = "_caretIcon_1aa5u_113", Ow = "_caretOpen_1aa5u_120", Sw = "_caretPlaceholder_1aa5u_124", Nw = "_label_1aa5u_130", $w = "_loading_1aa5u_137", Ew = "_loadingRow_1aa5u_143", Tw = "_empty_1aa5u_149", Aw = "_checkbox_1aa5u_155", Dt = {
  root: mw,
  group: gw,
  itemWrapper: bw,
  treeitem: yw,
  disabled: xw,
  selected: vw,
  caret: ww,
  caretIcon: kw,
  caretOpen: Ow,
  caretPlaceholder: Sw,
  label: Nw,
  loading: $w,
  loadingRow: Ew,
  empty: Tw,
  checkbox: Aw
};
function Cw({
  indeterminate: e,
  ...t
}) {
  const n = re(null);
  return be(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function US({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: a,
  keyProperty: d,
  KeyProperty: s,
  selectionMode: i,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: x,
  SelectedItems: g,
  defaultSelectedItem: y,
  defaultSelectedItems: m,
  onChange: b,
  Change: _,
  onExpand: p,
  Expand: v,
  onCollapse: S,
  Collapse: h,
  loadChildData: $,
  LoadChildData: k,
  template: E,
  Template: C,
  itemTemplate: A,
  ItemTemplate: D,
  ariaLabel: z,
  AriaLabel: O,
  allowCheckBoxes: N = !1,
  checkedKeys: T,
  defaultCheckedKeys: P,
  onCheckedChange: L,
  allowCheckChildren: H = !0,
  className: F
}) {
  const Y = e ?? t ?? [], ae = n ?? r, ee = l ?? a ?? "text", we = d ?? s ?? "id", se = i ?? c ?? "single", de = z ?? O ?? "Tree", G = $ ?? k, me = E ?? C ?? A ?? D, ce = B(
    (q) => {
      const Q = q[we];
      return Q != null ? String(Q) : String(q.id ?? "");
    },
    [we]
  ), xe = B(
    (q) => {
      const Q = q[ee];
      if (Q != null) return String(Q);
      const ie = q.text;
      return ie != null ? String(ie) : "";
    },
    [ee]
  ), _e = B(
    (q) => {
      if (ae) {
        const ie = ae(q);
        if (ie !== void 0) return ie;
      }
      const Q = q.children;
      if (Array.isArray(Q)) return Q;
    },
    [ae]
  ), Ae = B(
    (q) => {
      const Q = /* @__PURE__ */ new Set(), ie = (ke) => {
        for (const ve of ke) {
          const Ee = ce(ve);
          ve.expanded && Q.add(Ee);
          const Ue = _e(ve);
          Ue && Ue.length > 0 && ie(Ue);
        }
      };
      return ie(q), Q;
    },
    [ce, _e]
  ), [Ie, st] = K(
    () => Ae(Y)
  ), [ue, Ye] = K(
    () => /* @__PURE__ */ new Map()
  ), [ye, ht] = K(() => /* @__PURE__ */ new Set()), qe = f ?? u, Xe = x ?? g, bt = se === "multiple" ? Xe !== void 0 : qe !== void 0, X = B(() => {
    if (se === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((ie) => ce(ie)));
      const q = /* @__PURE__ */ new Set(), Q = (ie) => {
        for (const ke of ie) {
          ke.selected && q.add(ce(ke));
          const ve = _e(ke);
          ve && Q(ve);
        }
      };
      return Q(Y), q;
    } else {
      if (y) return /* @__PURE__ */ new Set([ce(y)]);
      let q = null;
      const Q = (ie) => {
        for (const ke of ie) {
          if (ke.selected)
            return q = ce(ke), !0;
          const ve = _e(ke);
          if (ve && Q(ve)) return !0;
        }
        return !1;
      };
      return Q(Y), q ? /* @__PURE__ */ new Set([q]) : /* @__PURE__ */ new Set();
    }
  }, [
    se,
    y,
    m,
    ce,
    _e,
    Y
  ]), [I, V] = K(
    () => X()
  ), J = Se(() => {
    if (se === "multiple") {
      if (Xe !== void 0) {
        const q = Xe;
        return q ? new Set(q.map((Q) => ce(Q))) : /* @__PURE__ */ new Set();
      }
      return I;
    } else {
      if (qe !== void 0) {
        const q = qe;
        return q ? /* @__PURE__ */ new Set([ce(q)]) : /* @__PURE__ */ new Set();
      }
      return I;
    }
  }, [
    se,
    Xe,
    qe,
    I,
    ce
  ]), pe = B(
    (q) => {
      let Q;
      const ie = (ke) => {
        for (const ve of ke) {
          if (ce(ve) === q)
            return Q = ve, !0;
          const Ue = ue.get(ce(ve)) ?? _e(ve);
          if (Ue && ie(Ue)) return !0;
        }
        return !1;
      };
      if (ie(Y), !Q) {
        for (const ke of ue.values())
          if (ie(ke)) break;
      }
      return Q;
    },
    [Y, ue, ce, _e]
  ), oe = B(() => {
    const q = /* @__PURE__ */ new Map(), Q = (ie) => {
      for (const ke of ie) {
        const ve = ce(ke);
        q.set(ve, ke);
        const Ue = ue.get(ve) ?? _e(ke);
        Ue && Q(Ue);
      }
    };
    return Q(Y), q;
  }, [Y, ue, ce, _e]), Ne = B(
    (q) => {
      const Q = ce(q);
      if (!q.disabled)
        if (se === "multiple") {
          const ke = new Set(J);
          ke.has(Q) ? ke.delete(Q) : ke.add(Q), bt || V(ke);
          const ve = b ?? _;
          if (ve) {
            const Ee = oe(), Ue = [];
            for (const Pe of ke) {
              const at = Ee.get(Pe) ?? pe(Pe);
              at && Ue.push(at);
            }
            ve({ item: q, selectedItems: Ue });
          }
        } else if (!J.has(Q) || J.size !== 1 || !J.has(Q)) {
          bt || V(/* @__PURE__ */ new Set([Q]));
          const ve = b ?? _;
          ve && ve({ item: q, selectedItem: q });
        } else {
          const ve = b ?? _;
          ve && ve({ item: q, selectedItem: q });
        }
    },
    [
      ce,
      se,
      J,
      bt,
      b,
      _,
      oe,
      pe
    ]
  ), Re = B(
    async (q) => {
      const Q = ce(q);
      if (!!q.disabled) return;
      const ke = Ie.has(Q), ve = p ?? v, Ee = S ?? h, Ue = _e(q), at = ue.get(Q) ?? Ue, $t = !(at !== void 0 && at.length > 0) && G != null;
      if (ke) {
        st((_t) => {
          const De = new Set(_t);
          return De.delete(Q), De;
        }), Ee?.({ item: q });
        return;
      }
      if ($t) {
        if (ye.has(Q)) return;
        ht((_t) => {
          const De = new Set(_t);
          return De.add(Q), De;
        });
        try {
          const De = await G(q);
          Ye((Et) => {
            const Xt = new Map(Et);
            return Xt.set(Q, De), Xt;
          }), st((Et) => {
            const Xt = new Set(Et);
            return Xt.add(Q), Xt;
          }), ve?.({ item: q });
        } catch {
        } finally {
          ht((_t) => {
            const De = new Set(_t);
            return De.delete(Q), De;
          });
        }
        return;
      }
      st((_t) => {
        const De = new Set(_t);
        return De.add(Q), De;
      }), ve?.({ item: q });
    },
    [
      ce,
      Ie,
      _e,
      ue,
      G,
      ye,
      p,
      v,
      S,
      h
    ]
  ), Ve = Se(() => {
    const q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Set(), ke = (ve, Ee) => {
      for (const Ue of ve) {
        const Pe = ce(Ue);
        q.has(Pe) || q.set(Pe, []), Q.set(Pe, Ee), Ue.disabled && ie.add(Pe);
        const tt = ue.get(Pe) ?? _e(Ue);
        tt && tt.length > 0 && (q.set(
          Pe,
          tt.map(($t) => ce($t))
        ), ke(tt, Pe));
      }
    };
    return ke(Y, null), { childrenOf: q, parentOf: Q, disabledKeys: ie };
  }, [Y, ue, ce, _e]), Ze = B(
    (q) => {
      const Q = [], ie = [...Ve.childrenOf.get(q) ?? []];
      for (; ie.length > 0; ) {
        const ke = ie.pop();
        Q.push(ke), ie.push(...Ve.childrenOf.get(ke) ?? []);
      }
      return Q;
    },
    [Ve]
  ), [et, Yt] = K(
    () => new Set(P ?? [])
  ), te = T !== void 0 ? new Set(T) : et, Me = B(
    (q) => {
      const Q = Ve.disabledKeys;
      return Ze(q).filter((ie) => !Q.has(ie));
    },
    [Ze, Ve]
  ), Ot = B(
    (q) => {
      if (te.has(q)) return !0;
      if (!N || !H) return !1;
      const Q = Me(q);
      return Q.length > 0 && Q.every((ie) => te.has(ie));
    },
    [te, N, H, Me]
  ), Lt = B(
    (q) => {
      if (!N || !H || te.has(q))
        return !1;
      const Q = Me(q);
      if (Q.length === 0) return !1;
      const ie = Q.filter((ke) => te.has(ke)).length;
      return ie > 0 && ie < Q.length;
    },
    [te, N, H, Me]
  ), yt = B(
    (q) => {
      if (!N || q.disabled) return;
      const Q = ce(q), ie = new Set(te);
      if (ie.has(Q) || Ot(Q)) {
        if (ie.delete(Q), H)
          for (const ke of Me(Q)) ie.delete(ke);
      } else if (ie.add(Q), H)
        for (const ke of Me(Q)) ie.add(ke);
      T === void 0 && Yt(ie), L?.([...ie]);
    },
    [
      N,
      H,
      T,
      te,
      Me,
      ce,
      Ot,
      L
    ]
  ), Ce = Se(() => {
    const q = [], Q = (ie, ke, ve) => {
      ie.forEach((Ee, Ue) => {
        const Pe = ce(Ee), at = xe(Ee), tt = ue.get(Pe) ?? _e(Ee);
        let $t;
        ue.has(Pe) ? $t = ue.get(Pe).length > 0 : tt !== void 0 ? $t = tt.length > 0 : G ? $t = !0 : $t = !1;
        const _t = Ie.has(Pe), De = !!Ee.disabled, Et = ie.length, Xt = Ue + 1;
        if (q.push({
          item: Ee,
          key: Pe,
          text: at,
          level: ke,
          posInSet: Xt,
          setSize: Et,
          hasChildren: $t,
          expanded: _t,
          parentKey: ve,
          disabled: De
        }), $t && _t) {
          const fn = ue.get(Pe) ?? tt;
          fn && fn.length > 0 && Q(fn, ke + 1, Pe);
        }
      });
    };
    return Q(Y, 1, null), q;
  }, [
    Y,
    ce,
    xe,
    _e,
    ue,
    Ie,
    G,
    ye
  ]), [He, xt] = K(
    () => Ce[0]?.key ?? null
  ), Nt = re(""), lt = re(null), W = re(null);
  be(() => {
    if (!He && Ce.length > 0) {
      const q = Ce[0];
      q && xt(q.key);
    } else if (He && !Ce.some((q) => q.key === He)) {
      const q = Ce[0];
      xt(q ? q.key : null);
    }
  }, [Ce, He]), be(() => {
    if (He) {
      const q = W.current?.querySelector(
        `[data-key="${CSS.escape(He)}"]`
      );
      let Q = null;
      q || (Q = W.current?.querySelector(
        `[data-key="${He}"]`
      ) ?? null);
      const ie = q ?? Q;
      ie && document.activeElement !== ie && W.current?.contains(document.activeElement) && ie.focus();
    }
  }, [He]);
  const fe = B((q) => {
    xt(q), requestAnimationFrame(() => {
      const Q = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(q) : q;
      let ie = W.current?.querySelector(
        `[data-key="${Q}"]`
      );
      ie || (ie = W.current?.querySelector(`[data-key="${q}"]`) ?? null), ie?.focus();
    });
  }, []), Ke = B(
    (q) => Ce.find((ie) => ie.key === q)?.parentKey ?? null,
    [Ce]
  ), We = B(
    (q) => {
      if (Ce.length === 0) return;
      const Q = He ? Ce.findIndex((ve) => ve.key === He) : -1, ie = Q >= 0 ? Ce[Q] : void 0;
      let ke = null;
      if (q.key === "ArrowDown") {
        if (q.preventDefault(), Q === -1)
          ke = Ce[0]?.key ?? null;
        else {
          const ve = (Q + 1) % Ce.length, Ee = Ce[ve];
          Ee && (ke = Ee.key);
        }
        ke && fe(ke);
        return;
      }
      if (q.key === "ArrowUp") {
        if (q.preventDefault(), Q === -1) {
          const ve = Ce[Ce.length - 1];
          ve && (ke = ve.key);
        } else {
          const ve = (Q - 1 + Ce.length) % Ce.length, Ee = Ce[ve];
          Ee && (ke = Ee.key);
        }
        ke && fe(ke);
        return;
      }
      if (q.key === "ArrowRight") {
        if (q.preventDefault(), !ie) return;
        if (ie.hasChildren && !ie.expanded)
          Re(ie.item);
        else if (ie.hasChildren && ie.expanded) {
          const ve = Q + 1, Ee = Ce[ve];
          Ee && Ee.parentKey === ie.key && fe(Ee.key);
        }
        return;
      }
      if (q.key === "ArrowLeft") {
        if (q.preventDefault(), !ie) return;
        if (ie.hasChildren && ie.expanded)
          Re(ie.item);
        else {
          const ve = Ke(ie.key);
          ve && fe(ve);
        }
        return;
      }
      if (q.key === "Home") {
        q.preventDefault();
        const ve = Ce[0];
        ve && fe(ve.key);
        return;
      }
      if (q.key === "End") {
        q.preventDefault();
        const ve = Ce[Ce.length - 1];
        ve && fe(ve.key);
        return;
      }
      if (q.key === "Enter" || q.key === " ") {
        if (q.key === " " && q.target?.tagName === "INPUT" || (q.preventDefault(), !ie)) return;
        if (q.key === " " && N) {
          const ve = pe(ie.key);
          ve && yt(ve);
          return;
        }
        Ne(ie.item);
        return;
      }
      if (q.key.length === 1 && /^[a-zA-Z0-9]$/.test(q.key)) {
        q.preventDefault();
        const ve = (Nt.current + q.key).toLowerCase();
        Nt.current = ve, lt.current && clearTimeout(lt.current), lt.current = setTimeout(() => {
          Nt.current = "";
        }, 500);
        const Ee = Q >= 0 ? Q + 1 : 0, at = [...Ce, ...Ce].slice(Ee, Ee + Ce.length).find((tt) => tt.text.toLowerCase().startsWith(ve));
        at && fe(at.key);
        return;
      }
    },
    [
      Ce,
      He,
      fe,
      Re,
      Ne,
      Ke,
      N,
      yt
    ]
  ), Rt = B(() => {
    if (!He && Ce.length > 0) {
      const q = Ce[0];
      q && xt(q.key);
    }
  }, [He, Ce]), Ge = (q, Q, ie) => /* @__PURE__ */ o("ul", { role: "group", className: Dt.group, children: q.map((ke, ve) => {
    const Ee = ce(ke), Ue = xe(ke), Pe = ue.get(Ee) ?? _e(ke);
    let at;
    ue.has(Ee) ? at = ue.get(Ee).length > 0 : Pe !== void 0 ? at = Pe.length > 0 : G ? at = !0 : at = !1;
    const tt = Ie.has(Ee), $t = J.has(Ee), _t = !!ke.disabled, De = ye.has(Ee), Et = He === Ee, Xt = q.length, fn = ve + 1, $n = me ? me(ke) : Ue, Rn = N ? {
      checked: Ot(Ee),
      indeterminate: Lt(Ee)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: Dt.itemWrapper, children: [
      /* @__PURE__ */ M(
        "div",
        {
          role: "treeitem",
          "data-key": Ee,
          tabIndex: Et ? 0 : -1,
          "aria-expanded": at ? tt : void 0,
          "aria-selected": $t,
          "aria-level": Q,
          "aria-setsize": Xt,
          "aria-posinset": fn,
          "aria-disabled": _t || void 0,
          "aria-busy": De || void 0,
          className: [
            Dt.treeitem,
            $t ? Dt.selected : null,
            _t ? Dt.disabled : null,
            Et ? Dt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            fe(Ee), _t || Ne(ke);
          },
          onFocus: () => xt(Ee),
          children: [
            N ? /* @__PURE__ */ o(
              Cw,
              {
                className: Dt.checkbox,
                checked: Rn?.checked ?? !1,
                indeterminate: Rn?.indeterminate ?? !1,
                disabled: _t,
                "aria-label": `Select ${Ue}`,
                onClick: (xn) => xn.stopPropagation(),
                onChange: () => yt(ke)
              }
            ) : null,
            at ? /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Dt.caret,
                "aria-label": `${tt ? "Collapse" : "Expand"} ${Ue}`,
                "aria-expanded": tt,
                tabIndex: -1,
                disabled: _t,
                onClick: (xn) => {
                  xn.stopPropagation(), fe(Ee), Re(ke);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Dt.caretIcon,
                      tt ? Dt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(Te, { icon: "chevron_right", size: 10 })
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
            /* @__PURE__ */ o("span", { className: Dt.label, children: $n }),
            De ? /* @__PURE__ */ o("span", { className: Dt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      at && tt ? De ? /* @__PURE__ */ o("div", { className: Dt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Pe && Pe.length > 0 ? Ge(Pe, Q + 1) : ue.has(Ee) && ue.get(Ee).length > 0 ? Ge(
        ue.get(Ee),
        Q + 1
      ) : (Pe && Pe.length === 0, null) : null
    ] }, Ee);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: W,
      role: "tree",
      "aria-label": de,
      "aria-multiselectable": se === "multiple" || void 0,
      tabIndex: 0,
      className: [Dt.root, F].filter(Boolean).join(" "),
      onKeyDown: We,
      onFocus: Rt,
      children: Y.length === 0 ? /* @__PURE__ */ o("div", { className: Dt.empty, children: "No items" }) : Ge(Y, 1)
    }
  );
}
const Dw = "_root_10fdq_1", Mw = "_panel_10fdq_8", Iw = "_header_10fdq_19", zw = "_listbox_10fdq_28", Lw = "_option_10fdq_42", Rw = "_disabled_10fdq_57", Pw = "_active_10fdq_66", jw = "_selected_10fdq_70", Bw = "_empty_10fdq_86", Fw = "_controls_10fdq_93", Hw = "_reorder_10fdq_102", Uw = "_btn_10fdq_110", Qe = {
  root: Dw,
  panel: Mw,
  header: Iw,
  listbox: zw,
  option: Lw,
  disabled: Rw,
  active: Pw,
  selected: jw,
  empty: Bw,
  controls: Fw,
  reorder: Hw,
  btn: Uw
};
function Mt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ns(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function qS({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: a,
  targetValue: d,
  TargetValue: s,
  data: i,
  Data: c,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: x,
  TargetChange: g,
  keyProperty: y,
  KeyProperty: m,
  onMove: b,
  Move: _,
  ariaLabel: p,
  AriaLabel: v,
  className: S
}) {
  const h = y ?? m ?? "id", $ = p ?? v ?? "PickList", k = e ?? t ?? l ?? a ?? i ?? c ?? [], E = n ?? r ?? d ?? s ?? [], [C, A] = K(() => [
    ...k
  ]), [D, z] = K(() => [
    ...E
  ]);
  be(() => {
    const I = e ?? t ?? l ?? a ?? i ?? c;
    I !== void 0 && A([...I]);
  }, [e, t, l, a, i, c]), be(() => {
    const I = n ?? r ?? d ?? s;
    I !== void 0 && z([...I]);
  }, [n, r, d, s]);
  const [O, N] = K(
    () => /* @__PURE__ */ new Set()
  ), [T, P] = K(
    () => /* @__PURE__ */ new Set()
  ), [L, H] = K(() => {
    const I = k.findIndex((V) => !V.disabled);
    return I >= 0 ? I : 0;
  }), [F, Y] = K(() => {
    const I = E.findIndex((V) => !V.disabled);
    return I >= 0 ? I : 0;
  }), ae = Se(
    () => C.map((I, V) => I.disabled ? -1 : V).filter((I) => I >= 0),
    [C]
  ), ee = Se(
    () => D.map((I, V) => I.disabled ? -1 : V).filter((I) => I >= 0),
    [D]
  );
  be(() => {
    if (L >= C.length) {
      const I = ae[ae.length - 1];
      H(I ?? 0);
    } else if (C.length > 0 && ae.length > 0 && !ae.includes(L)) {
      const I = ae[0];
      I !== void 0 && H(I);
    }
  }, [L, C.length, ae]), be(() => {
    if (F >= D.length) {
      const I = ee[ee.length - 1];
      Y(I ?? 0);
    } else if (D.length > 0 && ee.length > 0 && !ee.includes(F)) {
      const I = ee[0];
      I !== void 0 && Y(I);
    }
  }, [F, D.length, ee]), be(() => {
    N((I) => {
      const V = /* @__PURE__ */ new Set();
      for (const J of I)
        C.some(
          (oe) => Mt(oe, h) === J && !oe.disabled
        ) && V.add(J);
      return V;
    });
  }, [C, h]), be(() => {
    P((I) => {
      const V = /* @__PURE__ */ new Set();
      for (const J of I)
        D.some(
          (oe) => Mt(oe, h) === J && !oe.disabled
        ) && V.add(J);
      return V;
    });
  }, [D, h]);
  const we = B(
    (I) => {
      (f ?? u)?.(I);
    },
    [f, u]
  ), se = B(
    (I) => {
      (x ?? g)?.(I);
    },
    [x, g]
  ), de = B(
    (I) => {
      (b ?? _)?.(I);
    },
    [b, _]
  ), G = B(
    (I) => {
      const V = C[I];
      if (!V || V.disabled) return;
      const J = Mt(V, h);
      N((pe) => {
        const oe = new Set(pe);
        return oe.has(J) ? oe.delete(J) : oe.add(J), oe;
      }), H(I);
    },
    [C, h]
  ), me = B(
    (I) => {
      const V = D[I];
      if (!V || V.disabled) return;
      const J = Mt(V, h);
      P((pe) => {
        const oe = new Set(pe);
        return oe.has(J) ? oe.delete(J) : oe.add(J), oe;
      }), Y(I);
    },
    [D, h]
  ), ce = B(() => {
    const I = [], V = [];
    for (const Ne of C) {
      const Re = Mt(Ne, h);
      O.has(Re) && !Ne.disabled ? I.push(Ne) : V.push(Ne);
    }
    if (I.length === 0) return;
    const J = V, pe = [...D, ...I];
    A(J), z(pe), N(/* @__PURE__ */ new Set());
    const oe = new Set(I.map((Ne) => Mt(Ne, h)));
    P(oe), we(J), se(pe), de({
      source: J,
      target: pe,
      moved: I,
      direction: "toTarget"
    });
  }, [
    C,
    D,
    O,
    h,
    we,
    se,
    de
  ]), xe = B(() => {
    const I = [], V = [];
    for (const Ne of D) {
      const Re = Mt(Ne, h);
      T.has(Re) && !Ne.disabled ? I.push(Ne) : V.push(Ne);
    }
    if (I.length === 0) return;
    const J = V, pe = [...C, ...I];
    z(J), A(pe), P(/* @__PURE__ */ new Set());
    const oe = new Set(I.map((Ne) => Mt(Ne, h)));
    N(oe), we(pe), se(J), de({
      source: pe,
      target: J,
      moved: I,
      direction: "toSource"
    });
  }, [
    C,
    D,
    T,
    h,
    we,
    se,
    de
  ]), _e = B(() => {
    const I = C.filter((pe) => !pe.disabled);
    if (I.length === 0) return;
    const V = C.filter((pe) => !!pe.disabled), J = [...D, ...I];
    A(V), z(J), N(/* @__PURE__ */ new Set()), we(V), se(J), de({
      source: V,
      target: J,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    C,
    D,
    h,
    we,
    se,
    de
  ]), Ae = B(() => {
    const I = D.filter((pe) => !pe.disabled);
    if (I.length === 0) return;
    const V = D.filter((pe) => !!pe.disabled), J = [...C, ...I];
    z(V), A(J), P(/* @__PURE__ */ new Set()), we(J), se(V), de({
      source: J,
      target: V,
      moved: I,
      direction: "allToSource"
    });
  }, [C, D, we, se, de]), Ie = B(() => {
    if (T.size === 0) return;
    const I = [...D], V = T, J = [];
    for (let oe = 1; oe < I.length; oe++) {
      const Ne = I[oe], Re = I[oe - 1];
      if (!Ne || !Re) continue;
      const Ve = Mt(Ne, h), Ze = Mt(Re, h);
      V.has(Ve) && !V.has(Ze) && !Ne.disabled && !Re.disabled && (I[oe - 1] = Ne, I[oe] = Re, J.push(Ne));
    }
    if (J.length === 0) return;
    z(I), se(I), de({ source: C, target: I, moved: J, direction: "up" });
    const pe = Array.from(V)[0];
    if (pe) {
      const oe = I.findIndex(
        (Ne) => Mt(Ne, h) === pe
      );
      oe >= 0 && Y(oe);
    }
  }, [
    D,
    T,
    h,
    C,
    se,
    de
  ]), st = B(() => {
    if (T.size === 0) return;
    const I = [...D], V = T, J = [];
    for (let oe = I.length - 2; oe >= 0; oe--) {
      const Ne = I[oe], Re = I[oe + 1];
      if (!Ne || !Re) continue;
      const Ve = Mt(Ne, h), Ze = Mt(Re, h);
      V.has(Ve) && !V.has(Ze) && !Ne.disabled && !Re.disabled && (I[oe] = Re, I[oe + 1] = Ne, J.push(Ne));
    }
    if (J.length === 0) return;
    z(I), se(I), de({ source: C, target: I, moved: J, direction: "down" });
    const pe = Array.from(V)[0];
    if (pe) {
      const oe = I.findIndex(
        (Ne) => Mt(Ne, h) === pe
      );
      oe >= 0 && Y(oe);
    }
  }, [
    D,
    T,
    h,
    C,
    se,
    de
  ]), ue = O.size > 0, Ye = T.size > 0, ye = re(""), ht = re(
    null
  ), qe = re(""), Xe = re(
    null
  ), At = B(
    (I) => {
      if (C.length === 0) return;
      const V = ae;
      if (V.length === 0) return;
      const J = V.includes(L) ? L : V[0] ?? 0;
      let pe = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const oe = V.indexOf(J);
        pe = V[(oe + 1) % V.length] ?? V[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const oe = V.indexOf(J);
        pe = V[(oe - 1 + V.length) % V.length] ?? V[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), pe = V[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), pe = V[V.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), G(J);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const oe = (ye.current + I.key).toLowerCase();
        ye.current = oe, ht.current && clearTimeout(ht.current), ht.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const Ne = [...V, ...V], Re = V.indexOf(J) + 1, Ve = Ne.slice(Re).find(
          (Ze) => ns(C[Ze]).toLowerCase().startsWith(oe)
        );
        Ve != null && H(Ve);
        return;
      }
      pe >= 0 && H(pe);
    },
    [C, ae, L, G]
  ), ot = B(
    (I) => {
      if (D.length === 0) return;
      const V = ee;
      if (V.length === 0) return;
      const J = V.includes(F) ? F : V[0] ?? 0;
      let pe = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const oe = V.indexOf(J);
        pe = V[(oe + 1) % V.length] ?? V[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const oe = V.indexOf(J);
        pe = V[(oe - 1 + V.length) % V.length] ?? V[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), pe = V[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), pe = V[V.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), me(J);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const oe = (qe.current + I.key).toLowerCase();
        qe.current = oe, Xe.current && clearTimeout(Xe.current), Xe.current = setTimeout(() => {
          qe.current = "";
        }, 500);
        const Ne = [...V, ...V], Re = V.indexOf(J) + 1, Ve = Ne.slice(Re).find(
          (Ze) => ns(D[Ze]).toLowerCase().startsWith(oe)
        );
        Ve != null && Y(Ve);
        return;
      }
      pe >= 0 && Y(pe);
    },
    [D, ee, F, me]
  ), bt = re(null), X = re(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Qe.root, S].filter(Boolean).join(" "),
      "aria-label": $,
      children: [
        /* @__PURE__ */ M("div", { className: Qe.panel, children: [
          /* @__PURE__ */ o("div", { className: Qe.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: bt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Qe.listbox,
              onKeyDown: At,
              children: C.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Qe.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : C.map((I, V) => {
                const J = Mt(I, h), pe = O.has(J), oe = V === L, Ne = !!I.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": pe,
                    "aria-disabled": Ne || void 0,
                    tabIndex: -1,
                    "data-active": oe || void 0,
                    className: [
                      Qe.option,
                      pe ? Qe.selected : null,
                      oe ? Qe.active : null,
                      Ne ? Qe.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => G(V),
                    children: ns(I)
                  },
                  J
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: Qe.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qe.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !ue || void 0,
              disabled: !ue,
              onClick: ce,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qe.btn,
              "aria-label": "Move all to target",
              "aria-disabled": C.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: C.filter((I) => !I.disabled).length === 0,
              onClick: _e,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qe.btn,
              "aria-label": "Move all",
              "aria-disabled": C.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: C.filter((I) => !I.disabled).length === 0,
              onClick: _e,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qe.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Ye || void 0,
              disabled: !Ye,
              onClick: xe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qe.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: D.filter((I) => !I.disabled).length === 0,
              onClick: Ae,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: Qe.panel, children: [
          /* @__PURE__ */ o("div", { className: Qe.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: X,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Qe.listbox,
              onKeyDown: ot,
              children: D.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Qe.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : D.map((I, V) => {
                const J = Mt(I, h), pe = T.has(J), oe = V === F, Ne = !!I.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": pe,
                    "aria-disabled": Ne || void 0,
                    tabIndex: -1,
                    "data-active": oe || void 0,
                    className: [
                      Qe.option,
                      pe ? Qe.selected : null,
                      oe ? Qe.active : null,
                      Ne ? Qe.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => me(V),
                    children: ns(I)
                  },
                  J
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: Qe.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Qe.btn,
                "aria-label": "Move up",
                "aria-disabled": !Ye || void 0,
                disabled: !Ye,
                onClick: Ie,
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Qe.btn,
                "aria-label": "Move down",
                "aria-disabled": !Ye || void 0,
                disabled: !Ye,
                onClick: st,
                children: /* @__PURE__ */ o(Te, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const qw = "_root_1qxsp_1", Kw = "_header_1qxsp_8", Ww = "_title_1qxsp_15", Gw = "_navBtn_1qxsp_20", Vw = "_resources_1qxsp_39", Yw = "_resource_1qxsp_39", Xw = "_grid_1qxsp_50", Zw = "_timeCol_1qxsp_55", Jw = "_timeCell_1qxsp_61", Qw = "_dayCol_1qxsp_66", ek = "_dayHeader_1qxsp_73", tk = "_slot_1qxsp_81", nk = "_event_1qxsp_91", Wt = {
  root: qw,
  header: Kw,
  title: Ww,
  navBtn: Gw,
  resources: Vw,
  resource: Yw,
  grid: Xw,
  timeCol: Zw,
  timeCell: Jw,
  dayCol: Qw,
  dayHeader: ek,
  slot: tk,
  event: nk
};
function Yo(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function KS({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: a,
  onSlotClick: d,
  ariaLabel: s = "Scheduler",
  className: i
}) {
  const [c, f] = K(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, x = (m) => {
    n || f(m), r?.(m);
  }, g = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, b) => {
    const _ = new Date(u);
    return _.setDate(u.getDate() - u.getDay() + b), _;
  }) : Array.from({ length: 30 }, (m, b) => {
    const _ = new Date(u);
    return _.setDate(1 + b), _;
  }), y = Array.from({ length: 12 }, (m, b) => 8 + b);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Wt.root, i].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ M("div", { className: Wt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Wt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const m = new Date(u);
                m.setDate(m.getDate() - 7), x(m);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Wt.title, children: u.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Wt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const m = new Date(u);
                m.setDate(m.getDate() + 7), x(m);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: Wt.resources, children: l.map((m) => /* @__PURE__ */ o(
          "div",
          {
            className: Wt.resource,
            role: "presentation",
            "aria-label": m.name,
            children: m.name
          },
          m.id
        )) }),
        /* @__PURE__ */ M("div", { className: Wt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Wt.timeCol, role: "presentation", children: y.map((m) => /* @__PURE__ */ M("div", { className: Wt.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          g.map((m) => /* @__PURE__ */ M(
            "div",
            {
              className: Wt.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: Wt.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                y.map((b) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: Wt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(m);
                      _.setHours(b), d?.({ date: _ });
                    }
                  },
                  b
                )),
                e.filter((b) => b.start.toDateString() === m.toDateString()).map((b) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: Wt.event,
                    "aria-label": `${b.title} ${Yo(b.start)} - ${Yo(b.end)}`,
                    "aria-pressed": !1,
                    onClick: () => a?.({ event: b }),
                    children: b.title
                  },
                  b.id
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
const rk = "_root_dj5ne_1", sk = "_header_dj5ne_8", ok = "_headerCell_dj5ne_15", lk = "_timeline_dj5ne_21", ak = "_row_dj5ne_26", ik = "_taskName_dj5ne_32", ck = "_timelineCell_dj5ne_37", dk = "_bar_dj5ne_43", uk = "_progress_dj5ne_56", fk = "_dep_dj5ne_61", Nn = {
  root: rk,
  header: sk,
  headerCell: ok,
  timeline: lk,
  row: ak,
  taskName: ik,
  timelineCell: ck,
  bar: dk,
  progress: uk,
  dep: fk
};
function WS({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [a, d] = K(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Nn.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: Nn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Nn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: Nn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ M(
          "div",
          {
            className: Nn.row,
            role: "row",
            "aria-selected": a === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Nn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ M("div", { className: Nn.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Nn.bar,
                    role: "button",
                    "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
                    "aria-pressed": a === s.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(s.id), n?.({ task: s });
                    },
                    onKeyDown: (i) => {
                      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), d(s.id), n?.({ task: s }));
                    },
                    children: /* @__PURE__ */ o(
                      "div",
                      {
                        className: Nn.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((i) => /* @__PURE__ */ o("svg", { className: Nn.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, i))
              ] })
            ]
          },
          s.id
        ))
      ]
    }
  );
}
const _k = "_root_4b64f_1", pk = "_fields_4b64f_6", hk = "_chip_4b64f_13", mk = "_table_4b64f_35", gk = "_totalRow_4b64f_55", bk = "_total_4b64f_55", hr = {
  root: _k,
  fields: pk,
  chip: hk,
  table: mk,
  totalRow: gk,
  total: bk
}, rs = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Lr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function GS({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: a = "Pivot table",
  className: d
}) {
  const s = t, i = n, c = r, f = (b, _, p) => {
    const v = b === "row" ? s.filter(($) => $.property !== _) : s, S = b === "col" ? i.filter(($) => $.property !== _) : i, h = b === "agg" ? c.filter(($) => !($.property === _ && $.aggregate === p)) : c;
    l?.({
      rowFields: v,
      columnFields: S,
      aggregateFields: h
    });
  }, u = (b, _) => _.map((p) => String(b[p.property])).join(""), x = [
    ...new Set(s.length ? e.map((b) => u(b, s)) : [""])
  ].sort(), g = [
    ...new Set(i.length ? e.map((b) => u(b, i)) : [""])
  ].sort(), y = (b, _, p) => {
    const v = e.filter(
      (h) => u(h, s) === b && u(h, i) === _
    ), S = v.map((h) => Number(h[p.property])).filter((h) => !Number.isNaN(h));
    return !S.length && p.aggregate !== "Count" ? 0 : rs[p.aggregate](
      p.aggregate === "Count" ? v.map(() => 1) : S
    );
  }, m = (b, _, p, v) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: hr.chip,
      "aria-label": `Remove ${b} field ${p}`,
      onClick: () => f(b, _, v),
      children: [
        p,
        v ? ` (${v})` : ""
      ]
    },
    `${b}-${p}-${v ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [hr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: hr.fields, children: [
      s.map((b) => m("row", b.property, b.title ?? b.property)),
      i.map((b) => m("col", b.property, b.title ?? b.property)),
      c.map(
        (b) => m("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: hr.table, role: "grid", "aria-label": a, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        g.map((b) => /* @__PURE__ */ o("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        x.map((b) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: b || "—" }),
          g.map((_) => /* @__PURE__ */ o(
            "td",
            {
              title: Lr(
                y(
                  b,
                  _,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? Lr(y(b, _, c[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ o("td", { className: hr.total, children: c.length ? Lr(
            rs[c[0].aggregate](
              g.flatMap(
                (_) => e.filter(
                  (p) => u(p, s) === b && u(p, i) === _
                ).map((p) => Number(p[c[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ M("tr", { className: hr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          g.map((b) => /* @__PURE__ */ o("td", { children: c.length ? Lr(
            rs[c[0].aggregate](
              e.filter((_) => u(_, i) === b).map((_) => Number(_[c[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, b)),
          /* @__PURE__ */ o("td", { children: c.length ? Lr(
            rs[c[0].aggregate](
              e.map((b) => Number(b[c[0].property])).filter((b) => !Number.isNaN(b))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const yk = "_root_1r7co_1", xk = "_reverse_1r7co_10", vk = "_item_1r7co_14", wk = "_marker_1r7co_35", kk = "_body_1r7co_46", Ok = "_label_1r7co_50", Sk = "_content_1r7co_56", er = {
  root: yk,
  reverse: xk,
  item: vk,
  marker: wk,
  body: kk,
  label: Ok,
  content: Sk
};
function VS({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [er.root, t ? er.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((a, d) => /* @__PURE__ */ M("li", { className: er.item, children: [
        /* @__PURE__ */ o("span", { className: er.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: er.body, children: [
          /* @__PURE__ */ o("div", { className: er.label, children: a.label }),
          a.content !== void 0 && /* @__PURE__ */ o("div", { className: er.content, children: a.content })
        ] })
      ] }, d))
    }
  );
}
const Nk = "_root_rm4d8_1", $k = "_header_rm4d8_13", Ek = "_headCell_rm4d8_22", Tk = "_row_rm4d8_32", Ak = "_cell_rm4d8_37", Rr = {
  root: Nk,
  header: $k,
  headCell: Ek,
  row: Tk,
  cell: Ak
};
function YS({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: a = "Virtual grid",
  className: d
}) {
  const [s, i] = K(
    /* @__PURE__ */ new Map()
  ), [c, f] = K(0), u = re(/* @__PURE__ */ new Set()), x = Math.ceil(n / t), g = Math.max(0, Math.floor(c / t) - 3), y = Math.min(e, g + x + 6), m = B(
    (_, p) => {
      let v = !1;
      for (let S = _; S < p; S++)
        !s.has(S) && !u.current.has(S) && (v = !0);
      if (v) {
        for (let S = _; S < p; S++) u.current.add(S);
        r({ skip: _, top: p }).then((S) => {
          i((h) => {
            const $ = new Map(h);
            return S.forEach((k, E) => $.set(_ + E, k)), $;
          });
          for (let h = _; h < p; h++) u.current.delete(h);
        });
      }
    },
    [s, r]
  );
  be(() => {
    m(g, y);
  }, [g, y]);
  const b = [];
  for (let _ = g; _ < y; _++) {
    const p = s.get(_) ?? {};
    b.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Rr.row,
          role: "row",
          style: { height: t },
          children: l.map((v) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Rr.cell,
              style: v.width ? { width: v.width } : void 0,
              children: String(p[v.property] ?? "")
            },
            v.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Rr.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": a,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (_) => f(_.target.scrollTop),
      onKeyDown: (_) => {
        const p = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), p.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), p.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), p.scrollTop += n) : _.key === "PageUp" && (_.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: g * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: Rr.header, role: "row", children: l.map((_) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: Rr.headCell,
            style: {
              height: t,
              ..._.width ? { width: _.width } : {}
            },
            children: _.title ?? _.property
          },
          _.property
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
var yn;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, i, c, f) {
      if (this.version = s, this.errorCorrectionLevel = i, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let u = [];
      for (let g = 0; g < this.size; g++) u.push(!1);
      for (let g = 0; g < this.size; g++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const x = this.addEccAndInterleave(c);
      if (this.drawCodewords(x), f == -1) {
        let g = 1e9;
        for (let y = 0; y < 8; y++) {
          this.applyMask(y), this.drawFormatBits(y);
          const m = this.getPenaltyScore();
          m < g && (f = y, g = m), this.applyMask(y);
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
    static encodeText(s, i) {
      const c = e.QrSegment.makeSegments(s);
      return t.encodeSegments(c, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, i) {
      const c = e.QrSegment.makeBytes(s);
      return t.encodeSegments([c], i);
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
    static encodeSegments(s, i, c = 1, f = 40, u = -1, x = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let g, y;
      for (g = c; ; g++) {
        const p = t.getNumDataCodewords(g, i) * 8, v = a.getTotalBits(s, g);
        if (v <= p) {
          y = v;
          break;
        }
        if (g >= f)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && y <= t.getNumDataCodewords(g, p) * 8 && (i = p);
      let m = [];
      for (const p of s) {
        n(p.mode.modeBits, 4, m), n(p.numChars, p.mode.numCharCountBits(g), m);
        for (const v of p.getData()) m.push(v);
      }
      l(m.length == y);
      const b = t.getNumDataCodewords(g, i) * 8;
      l(m.length <= b), n(0, Math.min(4, b - m.length), m), n(0, (8 - m.length % 8) % 8, m), l(m.length % 8 == 0);
      for (let p = 236; m.length < b; p ^= 253)
        n(p, 8, m);
      let _ = [];
      for (; _.length * 8 < m.length; ) _.push(0);
      return m.forEach(
        (p, v) => _[v >>> 3] |= p << 7 - (v & 7)
      ), new t(g, i, _, u);
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
    getModule(s, i) {
      return 0 <= s && s < this.size && 0 <= i && i < this.size && this.modules[i][s];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), i = s.length;
      for (let c = 0; c < i; c++)
        for (let f = 0; f < i; f++)
          c == 0 && f == 0 || c == 0 && f == i - 1 || c == i - 1 && f == 0 || this.drawAlignmentPattern(s[c], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const i = this.errorCorrectionLevel.formatBits << 3 | s;
      let c = i;
      for (let u = 0; u < 10; u++) c = c << 1 ^ (c >>> 9) * 1335;
      const f = (i << 10 | c) ^ 21522;
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
      const i = this.version << 12 | s;
      l(i >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = r(i, c), u = this.size - 11 + c % 3, x = Math.floor(c / 3);
        this.setFunctionModule(u, x, f), this.setFunctionModule(x, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, i) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), x = s + f, g = i + c;
          0 <= x && x < this.size && 0 <= g && g < this.size && this.setFunctionModule(x, g, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, i) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            i + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, i, c) {
      this.modules[i][s] = c, this.isFunction[i][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const i = this.version, c = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(i, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][i], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][i], x = Math.floor(
        t.getNumRawDataModules(i) / 8
      ), g = f - x % f, y = Math.floor(x / f);
      let m = [];
      const b = t.reedSolomonComputeDivisor(u);
      for (let p = 0, v = 0; p < f; p++) {
        let S = s.slice(
          v,
          v + y - u + (p < g ? 0 : 1)
        );
        v += S.length;
        const h = t.reedSolomonComputeRemainder(S, b);
        p < g && S.push(0), m.push(S.concat(h));
      }
      let _ = [];
      for (let p = 0; p < m[0].length; p++)
        m.forEach((v, S) => {
          (p != y - u || S >= g) && _.push(v[p]);
        });
      return l(_.length == x), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const x = c - u, y = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[y][x] && i < s.length * 8 && (this.modules[y][x] = r(s[i >>> 3], 7 - (i & 7)), i++);
          }
      }
      l(i == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7) throw new RangeError("Mask value out of range");
      for (let i = 0; i < this.size; i++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (s) {
            case 0:
              f = (c + i) % 2 == 0;
              break;
            case 1:
              f = i % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + i) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              f = c * i % 2 + c * i % 3 == 0;
              break;
            case 6:
              f = (c * i % 2 + c * i % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + i) % 2 + c * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][c] && f && (this.modules[i][c] = !this.modules[i][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let u = 0; u < this.size; u++) {
        let x = !1, g = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == x ? (g++, g == 5 ? s += t.PENALTY_N1 : g > 5 && s++) : (this.finderPenaltyAddHistory(g, y), x || (s += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), x = this.modules[u][m], g = 1);
        s += this.finderPenaltyTerminateAndCount(x, g, y) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let x = !1, g = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == x ? (g++, g == 5 ? s += t.PENALTY_N1 : g > 5 && s++) : (this.finderPenaltyAddHistory(g, y), x || (s += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), x = this.modules[m][u], g = 1);
        s += this.finderPenaltyTerminateAndCount(x, g, y) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let x = 0; x < this.size - 1; x++) {
          const g = this.modules[u][x];
          g == this.modules[u][x + 1] && g == this.modules[u + 1][x] && g == this.modules[u + 1][x + 1] && (s += t.PENALTY_N2);
        }
      let i = 0;
      for (const u of this.modules)
        i = u.reduce((x, g) => x + (g ? 1 : 0), i);
      const c = this.size * this.size, f = Math.ceil(Math.abs(i * 20 - c * 10) / c) - 1;
      return l(0 <= f && f <= 9), s += f * t.PENALTY_N4, l(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const s = Math.floor(this.version / 7) + 2, i = Math.floor(
          (this.version * 8 + s * 3 + 5) / (s * 4 - 4)
        ) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < s; f -= i)
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
      let i = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const c = Math.floor(s / 7) + 2;
        i -= (25 * c - 10) * c - 55, s >= 7 && (i -= 36);
      }
      return l(208 <= i && i <= 29648), i;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, i) {
      return Math.floor(t.getNumRawDataModules(s) / 8) - t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][s] * t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let i = [];
      for (let f = 0; f < s - 1; f++) i.push(0);
      i.push(1);
      let c = 1;
      for (let f = 0; f < s; f++) {
        for (let u = 0; u < i.length; u++)
          i[u] = t.reedSolomonMultiply(i[u], c), u + 1 < i.length && (i[u] ^= i[u + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, i) {
      let c = i.map((f) => 0);
      for (const f of s) {
        const u = f ^ c.shift();
        c.push(0), i.forEach(
          (x, g) => c[g] ^= t.reedSolomonMultiply(x, u)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, i) {
      if (s >>> 8 || i >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (i >>> f & 1) * s;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const i = s[1];
      l(i <= this.size * 3);
      const c = i > 0 && s[2] == i && s[3] == i * 3 && s[4] == i && s[5] == i;
      return (c && s[0] >= i * 4 && s[6] >= i ? 1 : 0) + (c && s[6] >= i * 4 && s[0] >= i ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, i, c) {
      return s && (this.finderPenaltyAddHistory(i, c), i = 0), i += this.size, this.finderPenaltyAddHistory(i, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, i) {
      i[0] == 0 && (s += this.size), i.pop(), i.unshift(s);
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
  function n(d, s, i) {
    if (s < 0 || s > 31 || d >>> s)
      throw new RangeError("Value out of range");
    for (let c = s - 1; c >= 0; c--)
      i.push(d >>> c & 1);
  }
  function r(d, s) {
    return (d >>> s & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class a {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, i, c) {
      if (this.mode = s, this.numChars = i, this.bitData = c, i < 0) throw new RangeError("Invalid argument");
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
      let i = [];
      for (const c of s) n(c, 8, i);
      return new a(a.Mode.BYTE, s.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!a.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let c = 0; c < s.length; ) {
        const f = Math.min(s.length - c, 3);
        n(parseInt(s.substring(c, c + f), 10), f * 3 + 1, i), c += f;
      }
      return new a(a.Mode.NUMERIC, s.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!a.isAlphanumeric(s))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let i = [], c;
      for (c = 0; c + 2 <= s.length; c += 2) {
        let f = a.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)) * 45;
        f += a.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c + 1)), n(f, 11, i);
      }
      return c < s.length && n(
        a.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)),
        6,
        i
      ), new a(a.Mode.ALPHANUMERIC, s.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : a.isNumeric(s) ? [a.makeNumeric(s)] : a.isAlphanumeric(s) ? [a.makeAlphanumeric(s)] : [a.makeBytes(a.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let i = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128) n(s, 8, i);
      else if (s < 16384)
        n(2, 2, i), n(s, 14, i);
      else if (s < 1e6)
        n(6, 3, i), n(s, 21, i);
      else throw new RangeError("ECI assignment value out of range");
      return new a(a.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return a.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return a.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, i) {
      let c = 0;
      for (const f of s) {
        const u = f.mode.numCharCountBits(i);
        if (f.numChars >= 1 << u) return 1 / 0;
        c += 4 + u + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let i = [];
      for (let c = 0; c < s.length; c++)
        s.charAt(c) != "%" ? i.push(s.charCodeAt(c)) : (i.push(parseInt(s.substring(c + 1, c + 3), 16)), c += 2);
      return i;
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
  e.QrSegment = a;
})(yn || (yn = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, a) {
        this.ordinal = l, this.formatBits = a;
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
})(yn || (yn = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(l, a) {
        this.modeBits = l, this.numBitsCharCount = a;
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
})(yn || (yn = {}));
const Ck = "_root_1leml_1", Dk = {
  root: Ck
}, Mk = {
  low: yn.QrCode.Ecc.LOW,
  medium: yn.QrCode.Ecc.MEDIUM,
  quartile: yn.QrCode.Ecc.QUARTILE,
  high: yn.QrCode.Ecc.HIGH
};
function XS({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: a,
  className: d,
  onError: s
}) {
  const i = a ?? `QR code for ${e}`, c = re(null), f = Ws("(prefers-color-scheme: dark)"), [u, x] = K(null);
  be(() => {
    const S = document.documentElement;
    x(S.dataset.theme ?? null);
    const h = new MutationObserver(() => {
      x(S.dataset.theme ?? null);
    });
    return h.observe(S, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => h.disconnect();
  }, []);
  const g = Se(() => {
    try {
      return yn.QrCode.encodeText(e, Mk[r]);
    } catch {
      return null;
    }
  }, [e, r]), y = re(null);
  be(() => {
    if (g !== null) {
      y.current = null;
      return;
    }
    const S = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(S), (y.current?.value !== e || y.current?.onError !== s) && (y.current = { value: e, onError: s }, s?.(S));
  }, [g, e, s]);
  const m = Math.max(0, Math.floor(l)), b = [Dk.root, d].filter(Boolean).join(" ");
  if (be(() => {
    if (n !== "canvas" || g === null) return;
    const S = c.current, h = S?.getContext("2d");
    if (!S || !h) return;
    const $ = getComputedStyle(S), k = $.getPropertyValue("--dx-text-color").trim() || "#000", E = $.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Ik(h, g, t, m, k, E);
  }, [n, g, t, m, f, u]), g === null)
    return /* @__PURE__ */ o("div", { className: b, role: "img", "aria-label": i, "data-qr-error": "true" });
  const _ = g.size + m * 2, p = t / _;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: c,
        className: b,
        width: t,
        height: t,
        role: "img",
        "aria-label": i,
        "data-value": e
      }
    );
  const v = [];
  for (let S = 0; S < g.size; S++)
    for (let h = 0; h < g.size; h++)
      g.getModule(h, S) && v.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (h + m) * p,
            y: (S + m) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${h}-${S}`
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
      "aria-label": i,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: v })
      ]
    }
  );
}
function Ik(e, t, n, r, l, a) {
  const d = n / (t.size + r * 2);
  e.fillStyle = a, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let s = 0; s < t.size; s++)
    for (let i = 0; i < t.size; i++)
      t.getModule(i, s) && e.fillRect((i + r) * d, (s + r) * d, d + 0.5, d + 0.5);
}
const zk = "_root_1v9la_1", Lk = "_value_1v9la_9", Xo = {
  root: zk,
  value: Lk
}, Zo = [
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
], Jo = 104, Rk = 106;
function Pk(e) {
  const t = [Jo];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = Jo;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, Rk), t;
}
function ZS({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: a
}) {
  const d = l ?? `Barcode ${e}`, s = Se(() => {
    const i = [];
    let c = 0;
    for (const f of Pk(e)) {
      const u = Zo[f] ?? Zo[0];
      for (let x = 0; x < u.length; x++) {
        const g = Number(u[x]);
        x % 2 === 0 && i.push({ x: c, w: g }), c += g;
      }
    }
    return { modules: i, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [Xo.root, a].filter(Boolean).join(" "), children: [
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
          s.modules.map((i, c) => /* @__PURE__ */ o(
            "rect",
            {
              x: i.x,
              y: 0,
              width: i.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ o("span", { className: Xo.value, children: e })
  ] });
}
const jk = "_root_16i43_1", Bk = "_svg_16i43_10", Fk = "_gridline_16i43_15", Hk = "_tickLabel_16i43_21", Uk = "_axisTitle_16i43_27", qk = "_dataLabel_16i43_34", Kk = "_gaugeValue_16i43_40", Wk = "_legend_16i43_47", Gk = "_legendItem_16i43_55", Vk = "_swatch_16i43_63", Yk = "_tooltip_16i43_70", Xk = "_visuallyHidden_16i43_84", ut = {
  root: jk,
  svg: Bk,
  gridline: Fk,
  tickLabel: Hk,
  axisTitle: Uk,
  dataLabel: qk,
  gaugeValue: Kk,
  legend: Wk,
  legendItem: Gk,
  swatch: Vk,
  tooltip: Yk,
  visuallyHidden: Xk
}, Qo = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Sl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), Zk = /* @__PURE__ */ new Set([...Sl, "heatmap"]);
function Jk(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), a = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, s = [];
  for (let i = a; i <= d + 1e-9; i += l)
    s.push(Number(i.toFixed(6)));
  return { min: a, max: d, step: l, ticks: s };
}
function Qk(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function Wn(e, t, n) {
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
const Ht = (e) => e * Math.PI / 180;
function eO(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s } = e, i = a.l + d / 2, c = a.t + s / 2, f = Math.min(d, s) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, x = r.reduce((y, m) => y + (Number(m.val) || 0), 0);
  let g = -90;
  return Wn(
    n,
    t,
    r.map((y, m) => {
      const b = x ? y.val / x * 360 : 0, _ = g, p = g + b;
      g = p;
      const v = b > 180 ? 1 : 0, S = i + f * Math.cos(Ht(_)), h = c + f * Math.sin(Ht(_)), $ = i + f * Math.cos(Ht(p)), k = c + f * Math.sin(Ht(p)), E = i + u * Math.cos(Ht(p)), C = c + u * Math.sin(Ht(p)), A = i + u * Math.cos(Ht(_)), D = c + u * Math.sin(Ht(_)), z = u ? `M ${S} ${h} A ${f} ${f} 0 ${v} 1 ${$} ${k} L ${E} ${C} A ${u} ${u} 0 ${v} 0 ${A} ${D} Z` : `M ${i} ${c} L ${S} ${h} A ${f} ${f} 0 ${v} 1 ${$} ${k} Z`, O = (_ + p) / 2, N = i + (f + 12) * Math.cos(Ht(O)), T = c + (f + 12) * Math.sin(Ht(O));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: z,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(N, T, `${t.title ?? y.cat}: ${y.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, y.cat, y.val, y.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: N,
            y: T,
            textAnchor: "middle",
            className: ut.dataLabel,
            children: y.val
          }
        )
      ] }, m);
    })
  );
}
function tO(e, t, n, r, l) {
  const { pad: a, plotW: d, scale: s, xFor: i, yFor: c, categories: f } = e, u = new Map(f.map((x, g) => [x, g]));
  return Wn(
    n,
    t,
    r.map((x, g) => {
      const y = u.get(x.cat) ?? 0, m = Number(r[g].cat), b = Number.isNaN(m) ? i(y) : a.l + (m - s.min) / (s.max - s.min || 1) * d, _ = c(x.val), p = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            cx: b,
            cy: _,
            r: p,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: b,
            cy: _,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, _, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, g);
    })
  );
}
function nO(e, t, n, r, l) {
  const { scale: a, xFor: d, yFor: s, categories: i, series: c } = e, f = new Map(i.map((y, m) => [y, m])), u = (y) => {
    if (!t.stack) return a.min;
    let m = 0;
    for (let b = 0; b < n; b++) {
      const _ = c[b];
      if (_?.stack !== t.stack) continue;
      const p = _.data.find(
        (v) => String(v[_.categoryProperty] ?? "") === y
      );
      p && (m += Number(p[_.valueProperty]) || 0);
    }
    return m;
  }, x = r.map((y) => {
    const m = f.get(y.cat) ?? 0, b = u(y.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${s(b + y.val)}`;
  }).join(" "), g = r.map((y) => {
    const m = f.get(y.cat) ?? 0, b = u(y.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${s(b)}`;
  }).join(" ");
  return Wn(
    n,
    t,
    /* @__PURE__ */ M(kt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${x} L ${d(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${d(0)} ${s(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: x, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: g, fill: "none", stroke: "transparent" }),
      r.map((y, m) => {
        const b = f.get(y.cat) ?? 0, _ = u(y.cat), p = d(b), v = s(_ + y.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: p,
              cy: v,
              r: 4,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: p - 12,
              y: v - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(p, v, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: p,
              y: v - 8,
              textAnchor: "middle",
              className: ut.dataLabel,
              children: y.val
            }
          )
        ] }, m);
      })
    ] })
  );
}
function rO(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, scale: i, xFor: c, yFor: f, categories: u, series: x } = e, g = new Map(u.map((m, b) => [m, b])), y = t.type === "bar";
  return Wn(
    n,
    t,
    r.map((m, b) => {
      const _ = g.get(m.cat) ?? 0;
      let p = 0;
      if (t.stack)
        for (let O = 0; O < n; O++) {
          const N = x[O];
          if (N?.stack !== t.stack) continue;
          const T = N.data.find(
            (P) => String(P[N.categoryProperty] ?? "") === m.cat
          );
          T && (p += Number(T[N.valueProperty]) || 0);
        }
      const v = p + m.val, S = x.filter(
        (O) => !O.stack || O.stack === t.stack
      ).length, h = d / Math.max(1, u.length), $ = y ? 18 : Math.max(12, h / (t.stack ? 1 : x.length) - 4), k = y ? a.l + p / (i.max - i.min || 1) * d : c(_) - $ / 2 + (t.stack ? 0 : n % S * $), E = y ? a.t + _ * s / Math.max(1, u.length) + 4 : f(v), C = y ? m.val / (i.max - i.min || 1) * d : $ - 4, A = y ? 16 : f(p) - f(v), D = y ? a.l + p / (i.max - i.min || 1) * d : k, z = y ? a.t + _ * s / Math.max(1, u.length) + 4 : E;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: D,
            y: z,
            width: y ? C : $ - 4,
            height: A,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              D + (y ? C : $) / 2,
              z,
              `${t.title ?? m.cat}: ${m.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: D + (y ? C : $) / 2,
            y: z - 4,
            textAnchor: "middle",
            className: ut.dataLabel,
            children: m.val
          }
        )
      ] }, b);
    })
  );
}
function sO(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, scale: i, tooltipVisible: c, showTip: f, hideTip: u } = e, x = a.l + d / 2, g = a.t + s * 0.78, y = Math.min(d, s) * 0.36, m = 135, b = 270, _ = r.reduce(($, k) => $ + (Number(k.val) || 0), 0), p = i.max - i.min || 1, v = Math.min(1, Math.max(0, (_ - i.min) / p)), S = ($, k) => {
    const [E, C] = [
      x + y * Math.cos(Ht($)),
      g + y * Math.sin(Ht($))
    ], [A, D] = [
      x + y * Math.cos(Ht(k)),
      g + y * Math.sin(Ht(k))
    ], z = k - $ > 180 ? 1 : 0;
    return `M ${E} ${C} A ${y} ${y} 0 ${z} 1 ${A} ${D}`;
  }, h = Number(_.toFixed(2));
  return Wn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ M("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: S(m, m + b),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      v > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: S(m, m + b * v),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x, y: g - 4, textAnchor: "middle", className: ut.gaugeValue, children: h }),
      /* @__PURE__ */ o(
        "path",
        {
          d: S(m, m + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(x, g - y, `${t.title ?? "Value"}: ${h}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", _, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x,
          y: g + y + 18,
          textAnchor: "middle",
          className: ut.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Nl(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, a = t.l + n / 2, d = t.t + r / 2, s = Math.min(n, r) / 2 - 24, i = Math.max(3, l.length), c = (u) => Ht(-90 + 360 * u / i);
  return { cx: a, cy: d, radius: s, angleFor: c, vertexFor: (u, x) => {
    const g = c(u);
    return [
      a + s * x * Math.cos(g),
      d + s * x * Math.sin(g)
    ];
  } };
}
function oO(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Nl(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((s, i) => l(i, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, s) => {
      const [i, c] = l(s, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: r,
          x2: i,
          y2: c,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function lO(e, t, n, r, l) {
  const { categories: a, tooltipVisible: d, showTip: s, hideTip: i } = e, { cx: c, cy: f, radius: u, angleFor: x, vertexFor: g } = Nl(e), y = e.scale.max || 1, m = (_) => r.find((p) => p.cat === _)?.val ?? 0, b = a.map((_, p) => {
    const v = Math.min(1, Math.max(0, m(_) / y)), [S, h] = g(p, v);
    return `${S},${h}`;
  }).join(" ");
  return Wn(
    n,
    t,
    /* @__PURE__ */ M(kt, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: b,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      a.map((_, p) => {
        const v = Math.min(1, Math.max(0, m(_) / y)), [S, h] = g(p, v), [$, k] = g(p, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: S,
              cy: h,
              r: 3.5,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: S,
              cy: h,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && s($, k, `${t.title ?? _}: ${m(_)}`),
              onMouseLeave: () => i(),
              onClick: () => {
                const E = r.find((C) => C.cat === _);
                E && e.handleClick(t, E.cat, E.val, E.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: c + (u + 14) * Math.cos(x(p)),
              y: f + (u + 14) * Math.sin(x(p)) + 4,
              textAnchor: "middle",
              className: ut.tickLabel,
              children: _
            }
          )
        ] }, _);
      })
    ] })
  );
}
function aO(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, tooltipVisible: i, showTip: c, hideTip: f } = e, u = r, x = Math.max(1, ...u.map((m) => Number(m.val) || 0)), g = s / Math.max(1, u.length), y = a.l + d / 2;
  return Wn(
    n,
    t,
    u.map((m, b) => {
      const p = Math.max(0, Number(m.val) || 0) / x * d, v = u[b + 1], S = v ? Math.max(0, Number(v.val) || 0) / x * d : p * 0.7, h = a.t + b * g + 2, $ = Math.max(4, g - 6), k = 1 - b * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${y - p / 2} ${h} L ${y + p / 2} ${h} L ${y + S / 2} ${h + $} L ${y - S / 2} ${h + $} Z`,
            fill: l,
            fillOpacity: k,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => i && c(y, h, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: y,
            y: h + $ / 2 + 4,
            textAnchor: "middle",
            className: ut.dataLabel,
            children: [
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function iO(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, categories: i, tooltipVisible: c, showTip: f, hideTip: u } = e, x = [];
  t.data.forEach((v) => {
    const S = t.rowProperty ? String(v[t.rowProperty] ?? "") : "All";
    x.includes(S) || x.push(S);
  });
  const g = r.map((v) => v.val).filter((v) => Number.isFinite(v)), y = g.length ? Math.min(...g) : 0, m = g.length ? Math.max(...g) : 1, b = d / Math.max(1, i.length), _ = s / Math.max(1, x.length), p = (v) => m === y ? 0.6 : 0.15 + 0.85 * ((v - y) / (m - y));
  return Wn(
    n,
    t,
    /* @__PURE__ */ M(kt, { children: [
      x.map((v, S) => /* @__PURE__ */ o(
        "text",
        {
          x: a.l - 8,
          y: a.t + S * _ + _ / 2 + 4,
          textAnchor: "end",
          className: ut.tickLabel,
          children: v
        },
        v
      )),
      r.map((v, S) => {
        const h = t.data[S], $ = i.indexOf(v.cat), k = x.indexOf(
          t.rowProperty && h ? String(h[t.rowProperty] ?? "") : "All"
        );
        if ($ < 0 || k < 0) return null;
        const E = a.l + $ * b, C = a.t + k * _;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: E + 1,
              y: C + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, _ - 2),
              fill: l,
              fillOpacity: p(v.val),
              onMouseEnter: () => c && f(E + b / 2, C, `${t.title ?? v.cat}: ${v.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, v.cat, v.val, v.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: E + b / 2,
              y: C + _ / 2 + 4,
              textAnchor: "middle",
              className: ut.dataLabel,
              children: v.val
            }
          )
        ] }, S);
      })
    ] })
  );
}
function cO(e, t, n) {
  const r = Qk(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return eO(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return tO(e, t, n, r, l);
    case "line":
    case "area":
      return nO(e, t, n, r, l);
    case "gauge":
      return sO(e, t, n, r, l);
    case "radar":
      return lO(e, t, n, r, l);
    case "funnel":
      return aO(e, t, n, r, l);
    case "heatmap":
      return iO(e, t, n, r, l);
    default:
      return rO(e, t, n, r, l);
  }
}
function JS({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: a = !0,
  tooltipVisible: d = !0,
  onSeriesClick: s,
  ariaLabel: i = "Chart",
  className: c
}) {
  const [f, u] = K(
    null
  ), x = Se(() => {
    const A = /* @__PURE__ */ new Set();
    for (const D of e)
      for (const z of D.data) A.add(String(z[D.categoryProperty] ?? ""));
    return [...A];
  }, [e]), g = Se(() => {
    const A = e.flatMap((z) => z.data.map((O) => Number(O[z.valueProperty]))).filter((z) => !Number.isNaN(z)), D = /* @__PURE__ */ new Map();
    for (const z of e) {
      if (!z.stack) continue;
      let O = D.get(z.stack);
      O || D.set(z.stack, O = /* @__PURE__ */ new Map());
      for (const N of z.data) {
        const T = String(N[z.categoryProperty] ?? ""), P = Number(N[z.valueProperty]);
        Number.isNaN(P) || O.set(T, (O.get(T) ?? 0) + P);
      }
    }
    for (const z of D.values()) A.push(...z.values());
    return A;
  }, [e]), y = r?.min ?? (g.length ? Math.min(0, ...g) : 0), m = r?.max ?? (g.length ? Math.max(...g) : 10), b = Se(
    () => Jk(y, m, r?.step),
    [y, m, r?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, p = t - _.l - _.r, v = n - _.t - _.b, S = (A) => _.l + A / Math.max(1, x.length - 1) * p, h = (A) => _.t + (1 - (A - b.min) / (b.max - b.min || 1)) * v, $ = (A, D) => D.color ?? Qo[A % Qo.length], k = e.some((A) => Sl.has(A.type)), E = e.some((A) => Zk.has(A.type)), C = {
    categories: x,
    scale: b,
    pad: _,
    plotW: p,
    plotH: v,
    xFor: S,
    yFor: h,
    colorFor: $,
    tooltipVisible: d,
    showTip: (A, D, z) => u({ x: A, y: D, text: z }),
    hideTip: () => u(null),
    handleClick: (A, D, z, O) => s?.({
      seriesTitle: A.title ?? "",
      category: D,
      value: z,
      item: O
    }),
    series: e
  };
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [ut.root, c].filter(Boolean).join(" "),
      role: "img",
      "aria-label": i,
      "aria-describedby": `${i.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: ut.svg,
            role: "presentation",
            children: [
              k && r?.gridlines !== !1 && b.ticks.map((A) => /* @__PURE__ */ o(
                "line",
                {
                  x1: _.l,
                  x2: _.l + p,
                  y1: h(A),
                  y2: h(A),
                  className: ut.gridline
                },
                A
              )),
              E && l?.gridlines && x.map((A, D) => /* @__PURE__ */ o(
                "line",
                {
                  x1: S(D),
                  x2: S(D),
                  y1: _.t,
                  y2: _.t + v,
                  className: ut.gridline
                },
                D
              )),
              k && b.ticks.map((A) => /* @__PURE__ */ o(
                "text",
                {
                  x: _.l - 8,
                  y: h(A) + 4,
                  textAnchor: "end",
                  className: ut.tickLabel,
                  children: A
                },
                A
              )),
              E && x.map((A, D) => /* @__PURE__ */ o(
                "text",
                {
                  x: S(D),
                  y: _.t + v + 16,
                  textAnchor: "middle",
                  className: ut.tickLabel,
                  children: A
                },
                A
              )),
              k && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: _.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + v / 2})`,
                  className: ut.axisTitle,
                  children: r.title
                }
              ),
              E && l?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: _.l + p / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ut.axisTitle,
                  children: l.title
                }
              ),
              e.some((A) => A.type === "radar") && oO(C),
              e.map((A, D) => cO(C, A, D))
            ]
          }
        ),
        f && /* @__PURE__ */ o(
          "div",
          {
            className: ut.tooltip,
            style: { left: f.x, top: f.y - 28 },
            children: f.text
          }
        ),
        a && /* @__PURE__ */ o("div", { className: ut.legend, children: e.map((A, D) => /* @__PURE__ */ M("span", { className: ut.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: ut.swatch,
              style: { backgroundColor: $(D, A) },
              "aria-hidden": "true"
            }
          ),
          A.title ?? `Series ${D + 1}`
        ] }, D)) }),
        /* @__PURE__ */ M(
          "table",
          {
            className: ut.visuallyHidden,
            id: `${i.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: i }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (A) => A.data.map((D, z) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ o("td", { children: A.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: A.rowProperty ? `${String(D[A.rowProperty] ?? "")} / ${String(D[A.categoryProperty] ?? "")}` : String(D[A.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(D[A.valueProperty] ?? "") })
                ] }, `${A.title}-${z}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function QS({ query: e, children: t }) {
  return Ws(e) ? /* @__PURE__ */ o(kt, { children: t }) : null;
}
function eN({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function tN() {
  const e = re(null);
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
  Jf as ALERT_ICON,
  dS as Accordion,
  GO as Alert,
  _S as AutoComplete,
  JO as AutoGrid,
  iS as Avatar,
  _O as Badge,
  ZS as Barcode,
  eS as Body,
  RS as Breadcrumb,
  rr as Button,
  fO as Card,
  HS as Carousel,
  JS as Chart,
  RO as CheckBox,
  hS as CheckBoxList,
  wS as ColorPicker,
  XO as Column,
  DS as ContextMenuProvider,
  Or as DEFAULT_OPERATOR_BY_TYPE,
  mx as DEFAULT_PALETTE,
  bb as DEFAULT_THEMES,
  DO as DataFilter,
  MO as DataGrid,
  IO as DataList,
  kS as DatePicker,
  tu as Dialog,
  FO as DialogProvider,
  fS as DropDown,
  AS as DropZone,
  gO as EmptyState,
  nl as FILTER_OPERATORS,
  LS as FabMenu,
  bO as Field,
  xO as Fieldset,
  Fg as Footer,
  vO as Form,
  yO as FormField,
  WS as Gantt,
  qg as Header,
  qO as HtmlEditor,
  Te as Icon,
  LO as Input,
  zO as Label,
  QO as Layout,
  PS as Link,
  pS as ListBox,
  eN as LiveRegion,
  xS as Mask,
  QS as MediaQuery,
  Sv as Menu,
  wl as MenuItem,
  vS as Numeric,
  hc as Pager,
  IS as PanelMenu,
  MS as PanelMenuItem,
  yS as Password,
  qS as PickList,
  GS as Pivot,
  WO as PopupProvider,
  zS as ProfileMenu,
  nS as Progress,
  XS as QRCode,
  mS as RadioButtonList,
  OS as Rating,
  YO as Row,
  KS as Scheduler,
  $S as SecurityCode,
  sr as Select,
  gS as SelectBar,
  nb as Sidebar,
  tS as SidebarToggle,
  ES as SignaturePad,
  VO as Skeleton,
  SS as Slider,
  bS as SplitButton,
  BS as Splitter,
  ZO as Stack,
  hO as Stat,
  jS as Steps,
  PO as Switch,
  mO as Table,
  cS as Tabs,
  mu as Text,
  uS as TextArea,
  Cd as TextBox,
  rS as ThemeSwitcher,
  sS as ThemeToggle,
  NS as TimeSpanPicker,
  VS as Timeline,
  UO as ToastProvider,
  FS as Toc,
  Sb as ToggleButton,
  jO as Tooltip,
  US as Tree,
  TS as Upload,
  YS as VirtualGrid,
  kc as aggregateValue,
  sl as applyFilters,
  wc as applyGridState,
  co as collectGroupKeys,
  tr as columnValue,
  EO as compare,
  AO as custom,
  yc as cycleSort,
  fo as defaultOperatorForType,
  kO as email,
  Bo as formatMasked,
  ls as formatValue,
  lS as getAppearance,
  os as getByPath,
  oS as getTheme,
  mc as groupItems,
  pO as iconNames,
  rl as matchesFilters,
  NO as maxLength,
  SO as minLength,
  vc as paginate,
  OO as pattern,
  $O as range,
  wO as required,
  TO as requiredTrue,
  el as resolveVariant,
  wi as runValidators,
  Ab as setAppearance,
  Tb as setTheme,
  Fr as shadeClass,
  ji as sortItems,
  xc as sortedItems,
  Po as subscribe,
  Oc as toCsv,
  Ii as toFilterString,
  Pi as toODataFilterString,
  CS as useContextMenu,
  BO as useDialog,
  vi as useFormContext,
  CO as useFormField,
  tN as useLiveRegion,
  Ws as useMediaQuery,
  KO as usePopup,
  aS as useThemeService,
  HO as useToast
};
