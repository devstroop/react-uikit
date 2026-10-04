import { jsx as o, jsxs as z, Fragment as tt } from "react/jsx-runtime";
import { forwardRef as Le, useId as Pe, isValidElement as gt, cloneElement as Fr, useState as q, useRef as Z, useCallback as R, useMemo as be, useContext as on, createContext as Cn, useEffect as ie, Fragment as Hr, useLayoutEffect as zr, Children as lr, useImperativeHandle as qr } from "react";
function or(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const io = "_button_eyvws_1", co = "_filled_eyvws_36", uo = "_flat_eyvws_55", fo = "_outlined_eyvws_58", _o = "_text_eyvws_63", ho = "_loading_eyvws_506", po = "_spinner_eyvws_509", mo = "_xs_eyvws_525", go = "_sm_eyvws_531", bo = "_md_eyvws_537", yo = "_lg_eyvws_543", xo = "_xl_eyvws_549", vo = "_iconOnly_eyvws_555", ko = "_fullWidth_eyvws_585", Zt = {
  button: io,
  filled: co,
  flat: uo,
  outlined: fo,
  text: _o,
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
  loading: ho,
  spinner: po,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: mo,
  sm: go,
  md: bo,
  lg: yo,
  xl: xo,
  iconOnly: vo,
  fullWidth: ko
};
function wo(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const On = Le(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: c = "default",
      size: d = "md",
      fullWidth: s = !1,
      iconOnly: i = !1,
      loading: a = !1,
      visible: f = !0,
      className: u,
      disabled: b,
      children: m,
      ...g
    } = t;
    if (f === !1) return null;
    const p = wo(r, l), h = p.style === "light" || p.style === "dark" ? null : or(c), _ = [
      Zt.button,
      Zt[p.variant],
      Zt[`style-${p.style}`],
      h ? Zt[h] : null,
      Zt[d],
      s ? Zt.fullWidth : null,
      i ? Zt.iconOnly : null,
      a ? Zt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ z(tt, { children: [
      a ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Zt.spinner }) : null,
      m
    ] }), $ = t.href;
    if ($ != null) {
      const { onClick: N, ...S } = g, M = b || a;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: $,
          className: _,
          "aria-disabled": M || void 0,
          "aria-busy": a || void 0,
          onClick: (D) => {
            if (M) {
              D.preventDefault();
              return;
            }
            N?.(D);
          },
          ...S,
          children: x
        }
      );
    }
    const { type: v = "button", ...O } = g;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: b || a,
        "aria-busy": a || void 0,
        ...O,
        children: x
      }
    );
  }
), $o = "_card_4vcae_1", No = "_elevated_4vcae_8", Oo = "_filled_4vcae_13", So = "_outlined_4vcae_18", Co = "_interactive_4vcae_22", Do = "_text_4vcae_30", Eo = "_header_4vcae_46", zo = "_body_4vcae_53", Mo = "_footer_4vcae_63", Hn = {
  card: $o,
  elevated: No,
  filled: Oo,
  outlined: So,
  interactive: Co,
  text: Do,
  header: Eo,
  body: zo,
  footer: Mo
}, tk = Le(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: c = !0,
  children: d,
  onKeyDown: s,
  ...i
}, a) {
  if (c === !1) return null;
  const f = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z(
      "div",
      {
        ref: a,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (u) => {
          s?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [Hn.card, Hn[t], l].filter(Boolean).join(" "),
        ...i,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Hn.header, children: n }),
          /* @__PURE__ */ o("div", { className: Hn.body, children: d }),
          r != null && /* @__PURE__ */ o("div", { className: Hn.footer, children: r })
        ]
      }
    )
  );
});
function As(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Io = "_badge_1fy6d_1", Ao = "_xs_1fy6d_21", jo = "_sm_1fy6d_26", To = "_md_1fy6d_31", Po = "_lg_1fy6d_36", Lo = "_xl_1fy6d_41", Ro = "_neutral_1fy6d_47", Bo = "_primary_1fy6d_52", Fo = "_secondary_1fy6d_61", Ho = "_light_1fy6d_66", qo = "_base_1fy6d_71", Ko = "_dark_1fy6d_76", Wo = "_info_1fy6d_81", Uo = "_success_1fy6d_86", Vo = "_warning_1fy6d_95", Go = "_danger_1fy6d_104", Xo = "_filled_1fy6d_111", Yo = "_outlined_1fy6d_161", Zo = "_text_1fy6d_213", qn = {
  badge: Io,
  xs: Ao,
  sm: jo,
  md: To,
  lg: Po,
  xl: Lo,
  neutral: Ro,
  primary: Bo,
  secondary: Fo,
  light: Ho,
  base: qo,
  dark: Ko,
  info: Wo,
  success: Uo,
  warning: Vo,
  danger: Go,
  filled: Xo,
  outlined: Yo,
  text: Zo,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, nk = Le(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: c,
  visible: d = !0,
  children: s,
  ...i
}, a) {
  if (d === !1) return null;
  const f = t, u = As(n, "filled"), b = or(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: a,
      className: [
        qn.badge,
        qn[l],
        qn[f],
        qn[u],
        b ? qn[b] : null,
        c
      ].filter(Boolean).join(" "),
      ...i,
      children: s
    }
  );
}), Jo = "_icon_vn4jx_5", Qo = "_xs_vn4jx_24", el = "_sm_vn4jx_28", tl = "_md_vn4jx_23", nl = "_lg_vn4jx_36", rl = "_xl_vn4jx_40", Jr = {
  icon: Jo,
  xs: Qo,
  sm: el,
  md: tl,
  lg: nl,
  xl: rl
}, rk = [
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
], ke = Le(function({ icon: t, size: n, color: r, className: l, style: c, ...d }, s) {
  const i = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [Jr.icon, i ? Jr[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...i || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...r === void 0 ? null : { color: r },
        ...c
      },
      "aria-hidden": "true",
      ...d,
      children: t
    }
  );
}), sl = "_stat_sjin9_1", ol = "_label_sjin9_8", ll = "_row_sjin9_16", al = "_value_sjin9_22", il = "_delta_sjin9_28", cl = "_success_sjin9_33", dl = "_danger_sjin9_37", ul = "_neutral_sjin9_41", fl = "_hint_sjin9_45", bn = {
  stat: sl,
  label: ol,
  row: ll,
  value: al,
  delta: il,
  success: cl,
  danger: dl,
  neutral: ul,
  hint: fl
}, sk = Le(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: c, className: d, ...s }, i) {
  return /* @__PURE__ */ z(
    "div",
    {
      ref: i,
      className: [bn.stat, d].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: bn.label, children: t }),
        /* @__PURE__ */ z("div", { className: bn.row, children: [
          /* @__PURE__ */ o("div", { className: bn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [bn.delta, bn[l]].join(" "), children: r })
        ] }),
        c != null && /* @__PURE__ */ o("div", { className: bn.hint, children: c })
      ]
    }
  );
}), _l = "_wrap_ipozk_1", hl = "_table_ipozk_8", pl = "_caption_ipozk_14", ml = "_none_ipozk_51", gl = "_horizontal_ipozk_57", bl = "_vertical_ipozk_67", yl = "_alternating_ipozk_85", xl = "_start_ipozk_89", vl = "_center_ipozk_93", kl = "_end_ipozk_97", wl = "_empty_ipozk_101", cn = {
  wrap: _l,
  table: hl,
  caption: pl,
  none: ml,
  horizontal: gl,
  vertical: bl,
  alternating: yl,
  start: xl,
  center: vl,
  end: kl,
  empty: wl
};
function ok({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: c = "default",
  allowAlternatingRows: d = !0,
  className: s,
  visible: i = !0
}) {
  if (i === !1) return null;
  const a = c === "default" || c === "both" ? "" : cn[c];
  return /* @__PURE__ */ z("div", { className: [cn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z(
      "table",
      {
        className: [
          cn.table,
          a,
          d ? cn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ o("caption", { className: cn.caption, children: l }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? cn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? cn[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: cn.empty, children: r })
  ] });
}
const $l = "_emptyState_1swxw_1", Nl = "_icon_1swxw_13", Ol = "_title_1swxw_18", Sl = "_description_1swxw_24", Cl = "_action_1swxw_30", Kn = {
  emptyState: $l,
  icon: Nl,
  title: Ol,
  description: Sl,
  action: Cl
};
function lk({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ z("div", { className: [Kn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Kn.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Kn.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Kn.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Kn.action, children: r })
  ] });
}
const Dl = "_field_149oz_1", El = "_label_149oz_8", zl = "_required_149oz_14", Ml = "_hint_149oz_19", Il = "_error_149oz_24", Wn = {
  field: Dl,
  label: El,
  required: zl,
  hint: Ml,
  error: Il
};
function ak({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: c,
  children: d,
  className: s,
  visible: i = !0
}) {
  const a = r ?? l, f = Pe(), u = Pe(), b = Pe();
  if (i === !1) return null;
  const m = c != null ? u : a != null ? b : null, g = typeof d == "function" ? d({ inputId: f, hintId: b, errorId: u }) : d, p = gt(g) && typeof g.props.id == "string" ? g.props.id : void 0, y = p ?? t ?? f, h = gt(g) && (m != null || p == null && typeof g.type == "string"), _ = p != null || t != null || h, x = h && gt(g) ? Fr(g, {
    id: y,
    "aria-describedby": m != null ? [
      g.props["aria-describedby"],
      m
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ z("div", { className: [Wn.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ z(
      "label",
      {
        className: Wn.label,
        htmlFor: _ ? y : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Wn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    c != null ? /* @__PURE__ */ o("div", { id: u, className: Wn.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ o("div", { id: b, className: Wn.hint, children: a }) : null
  ] });
}
const Al = "_formfield_6e25e_1", jl = "_content_6e25e_8", Tl = "_floating_6e25e_43", Pl = "_label_6e25e_111", Ll = "_start_6e25e_132", Rl = "_required_6e25e_169", Bl = "_end_6e25e_175", Fl = "_filled_6e25e_192", Hl = "_flat_6e25e_199", ql = "_helper_6e25e_206", Kl = "_invalid_6e25e_211", Wt = {
  formfield: Al,
  content: jl,
  floating: Tl,
  label: Pl,
  start: Ll,
  required: Rl,
  end: Bl,
  filled: Fl,
  flat: Hl,
  helper: ql,
  invalid: Kl
};
function ik({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: c = !0,
  variant: d = "outlined",
  invalid: s = !1,
  required: i = !1,
  children: a,
  className: f,
  visible: u = !0
}) {
  const b = Pe(), m = Pe();
  if (u === !1) return null;
  const g = l ?? b, p = typeof a == "function" ? a({
    inputId: g
  }) : a, y = gt(p) ? p.type : null, h = typeof y == "string", _ = gt(p) && typeof y != "symbol", x = gt(p) ? p.props : null, $ = typeof x?.id == "string" ? x.id : void 0, v = h && gt(p) ? p.type.toLowerCase() : null, O = v != null && (v === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), N = _ && (r != null || s || $ == null && O), S = $ != null || l != null || N, M = v === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, D = v === "textarea" || v === "input" && (M == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(M)), E = N && gt(p) ? Fr(
    p,
    {
      id: $ ?? g,
      ...c && D && x?.placeholder == null ? { placeholder: " " } : {},
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
  ) : p, A = e != null ? /* @__PURE__ */ z(
    "label",
    {
      className: Wt.label,
      htmlFor: S ? $ ?? g : void 0,
      children: [
        e,
        i === !0 && /* @__PURE__ */ o("span", { className: Wt.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ z(
    "div",
    {
      className: [
        Wt.formfield,
        Wt[d],
        c ? Wt.floating : null,
        s ? Wt.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        c ? null : A,
        /* @__PURE__ */ z("div", { className: Wt.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Wt.start, children: t }),
          E,
          c ? A : null,
          n != null && /* @__PURE__ */ o("div", { className: Wt.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: m, className: Wt.helper, children: r })
      ]
    }
  );
}
const Wl = "_fieldset_8x01p_1", Ul = "_legend_8x01p_11", Vl = "_legendText_8x01p_20", Gl = "_toggle_8x01p_24", Xl = "_content_8x01p_45", Yl = "_summary_8x01p_49", yn = {
  fieldset: Wl,
  legend: Ul,
  legendText: Vl,
  toggle: Gl,
  content: Xl,
  summary: Yl
};
function ck({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: c,
  defaultCollapsed: d = !1,
  summary: s,
  expandTitle: i,
  collapseTitle: a,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: b,
  onCollapse: m,
  children: g,
  className: p,
  visible: y = !0
}) {
  const h = Pe(), [_, x] = q(d);
  if (y === !1) return null;
  const $ = c ?? _, v = l ? `${h}-content` : void 0, O = () => {
    const A = !$;
    c === void 0 && x(A), A ? m?.() : b?.();
  }, N = l || e != null || n != null || t != null, S = l ? $ : !1, M = l && $ && s != null, D = S ? i ?? "Expand" : a ?? "Collapse", E = S ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ z(
    "fieldset",
    {
      className: [yn.fieldset, p].filter(Boolean).join(" "),
      children: [
        N ? /* @__PURE__ */ o("legend", { className: yn.legend, children: l ? /* @__PURE__ */ z(tt, { children: [
          /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              className: yn.toggle,
              title: D,
              "aria-label": e == null ? E : void 0,
              "aria-expanded": !S,
              "aria-controls": v,
              onClick: O,
              children: [
                /* @__PURE__ */ o(
                  ke,
                  {
                    icon: S ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(ke, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ z(tt, { children: [
          n != null && /* @__PURE__ */ o(ke, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: yn.content,
            id: v,
            hidden: S,
            children: g
          }
        ),
        M ? /* @__PURE__ */ o("div", { className: yn.summary, children: s }) : null
      ]
    }
  );
}
const Zl = "_form_abp5n_1", Jl = {
  form: Zl
}, js = Cn(null);
function Ql() {
  const e = on(js);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function dk({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: c,
  className: d
}) {
  const [s, i] = q({}), [a, f] = q(0), u = Z(s);
  u.current = s;
  const b = R((x) => {
    i(
      ($) => $[x.name] === x ? $ : { ...$, [x.name]: x }
    );
  }, []), m = R((x) => {
    i(($) => {
      if (!(x in $)) return $;
      const v = { ...$ };
      return delete v[x], v;
    });
  }, []), g = R(() => {
    const x = {};
    for (const $ of Object.values(u.current)) {
      const v = $.validate();
      v.length > 0 && (x[$.name] = v);
    }
    return x;
  }, []), p = R(() => {
    const x = g();
    f(($) => $ + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [g, e, t, n]), y = (x) => {
    r != null && l != null || (x.preventDefault(), p());
  }, h = be(
    () => ({ registerField: b, unregisterField: m, submit: p, submitCount: a }),
    [b, m, p, a]
  ), _ = [Jl.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(js.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: y,
      action: r,
      method: l,
      noValidate: !0,
      children: c
    }
  ) });
}
const Dn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", uk = (e = "Required") => (t) => Dn(t) ? e : null, fk = (e = "Invalid email") => (t) => Dn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, _k = (e, t = "Invalid format") => (n) => Dn(n) || e.test(String(n)) ? null : t, hk = (e, t = `Minimum ${e} characters`) => (n) => Dn(n) || String(n).length >= e ? null : t, pk = (e, t = `Maximum ${e} characters`) => (n) => Dn(n) || String(n).length <= e ? null : t, mk = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (Dn(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, gk = (e, t = "Values do not match") => (n, r) => {
  if (Dn(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, bk = (e = "Required") => (t) => t === !0 ? null : e, yk = (e) => (t, n) => e(t, n);
function ea(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function xk(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Ql(), [c, d] = q(t?.initialValue), [s, i] = q(!1), [a, f] = q(!1), u = Z(() => []);
  u.current = () => ea(t?.validate ?? [], c), ie(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ie(() => {
    l > 0 && (i(!0), f(!1));
  }, [l]);
  const b = s && !a ? u.current() : [];
  return { value: c, setValue: (g) => {
    d(g), f(!0);
  }, errors: b };
}
const ta = "_select_1xe98_1", na = "_invalid_1xe98_33", ra = "_xs_1xe98_40", sa = "_sm_1xe98_48", oa = "_md_1xe98_56", la = "_lg_1xe98_62", aa = "_xl_1xe98_68", Nr = {
  select: ta,
  invalid: na,
  xs: ra,
  sm: sa,
  md: oa,
  lg: la,
  xl: aa
}, Sn = Le(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: c, ...d }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          Nr.select,
          Nr[t],
          n ? Nr.invalid : null,
          c
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
), Ts = [
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
], Un = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, ia = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function ca(e) {
  return ia.includes(e);
}
function br(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function Qr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function rr(e, t) {
  const n = Qr(e), r = Qr(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), c = String(r ?? "");
  return l < c ? -1 : l > c ? 1 : 0;
}
function wr(e) {
  if (e.secondOperator == null) return !1;
  if (ca(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function es(e, t, n) {
  const r = br(t, e.property), l = ts(
    r,
    e.value,
    e.operator,
    n
  );
  if (!wr(e)) return l;
  const c = ts(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && c : l || c;
}
function ts(e, t, n, r) {
  const l = r === "CaseInsensitive", c = (i) => l && typeof i == "string" ? i.toLowerCase() : i, d = c(e), s = c(t);
  switch (n) {
    case "Equals":
      return d === s || Array.isArray(d) && d.some((i) => c(i) === s);
    case "NotEquals":
      return d !== s && !(Array.isArray(d) && d.some((i) => c(i) === s));
    case "LessThan":
      return rr(d, s) < 0;
    case "LessThanOrEquals":
      return rr(d, s) <= 0;
    case "GreaterThan":
      return rr(d, s) > 0;
    case "GreaterThanOrEquals":
      return rr(d, s) >= 0;
    case "Contains":
      return typeof d == "string" && typeof s == "string" && d.includes(s);
    case "StartsWith":
      return typeof d == "string" && typeof s == "string" && d.startsWith(s);
    case "EndsWith":
      return typeof d == "string" && typeof s == "string" && d.endsWith(s);
    case "DoesNotContain":
      return typeof d == "string" && typeof s == "string" && !d.includes(s);
    case "In":
      return Array.isArray(s) && s.some((i) => c(i) === d);
    case "NotIn":
      return Array.isArray(s) && !s.some((i) => c(i) === d);
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
function Kr(e) {
  return "filters" in e;
}
function Ps(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Kr(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? r;
    return t.filters[c === "Or" ? "some" : "every"](
      (d) => Ps(e, d, { logicalOperator: c, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", es(t, e, l);
}
function Ls(e, t, n = {}) {
  return e.filter((r) => Ps(r, t, n));
}
function da(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Ct(e) {
  return typeof e == "string" ? `"${da(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(Ct).join(", ")}]` : `"${String(e)}"`;
}
function ua(e) {
  const t = (l, c) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${Ct(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${Ct(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${Ct(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${Ct(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${Ct(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${Ct(c)})`;
      case "Contains":
        return `${e.property}.Contains(${Ct(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${Ct(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${Ct(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${Ct(c)})`;
      case "In":
        return `${e.property}.In(${Ct(c)})`;
      case "NotIn":
        return `!${e.property}.In(${Ct(c)})`;
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
  if (!wr(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function fa(e) {
  return Kr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(fa).filter(Boolean).join(` ${e.operator} `)})` : ua(e);
}
function _a(e) {
  return e.replace(/'/g, "''");
}
const ha = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function pa(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (a) => r ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${_a(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), d = (a, f) => {
    const u = typeof f == "string", b = u && r ? l(n) : n;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${b} ${ha[a]} ${u && r ? l(c(f)) : c(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(c(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(c(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(c(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(c(f))}))`;
      case "In":
        return Array.isArray(f) ? `${b} in (${f.map((m) => c(m)).join(", ")})` : `${b} in (${c(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${b} in (${f.map((m) => c(m)).join(", ")}))` : `not(${b} in (${c(f)}))`;
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
  if (!wr(e))
    return d(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", i = e.secondOperator;
  return `(${d(e.operator, e.value)} ${s} ${d(
    i,
    e.secondValue
  )})`;
}
function ma(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Kr(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => ma(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return pa(e, n);
}
function ga(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const c = l.sortOrder === "Ascending" ? 1 : -1, d = rr(
        br(n, l.property),
        br(r, l.property)
      );
      if (d !== 0) return d * c;
    }
    return 0;
  });
}
const ba = "_filter_1dvqt_1", ya = "_rows_1dvqt_9", xa = "_row_1dvqt_9", va = "_join_1dvqt_21", ka = "_property_1dvqt_30", wa = "_operator_1dvqt_34", $a = "_value_1dvqt_38", Na = "_remove_1dvqt_42", Oa = "_bar_1dvqt_58", Sa = "_add_1dvqt_64", Ca = "_custom_1dvqt_78", Da = "_summary_1dvqt_82", Ea = "_second_1dvqt_87", za = "_secondAdd_1dvqt_91", Ma = "_addSecond_1dvqt_95", Ia = "_joinSelect_1dvqt_109", Xe = {
  filter: ba,
  rows: ya,
  row: xa,
  join: va,
  property: ka,
  operator: wa,
  value: $a,
  remove: Na,
  bar: Oa,
  add: Sa,
  custom: Ca,
  summary: Da,
  second: Ea,
  secondAdd: za,
  addSecond: Ma,
  joinSelect: Ia
}, Vn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], ns = {
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
function rs({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(tt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      Sn,
      {
        "aria-label": e.title ?? e.name,
        className: Xe.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => n(c.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      Sn,
      {
        "aria-label": e.title ?? e.name,
        className: Xe.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (c) => {
          c.target.value === "" ? n(void 0) : n(c.target.value === "true");
        }
      }
    );
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Xe.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        r === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function vk({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: c,
  viewChanged: d,
  items: s,
  children: i
}) {
  const [a, f] = q(
    () => r != null && r.length > 0 ? r.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Un[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (h, _) => {
    f(
      (x) => x.map(($) => $.id === h ? { ...$, ..._ } : $)
    );
  }, b = () => {
    const h = a[a.length - 1], _ = Math.max(0, ...a.map(($) => $.id)) + 1, x = e[0];
    f(($) => [
      ...$,
      {
        id: _,
        property: h?.property ?? x?.name ?? "",
        operator: Un[e.find(
          (v) => v.name === (h?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (h) => {
    f(
      (_) => _.length > 1 ? _.filter((x) => x.id !== h) : _
    );
  }, g = be(() => {
    const h = [];
    for (const _ of a) {
      if (_.property === "" || (_.value == null || _.value === "") && !Vn.includes(_.operator)) continue;
      const $ = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && wr(_) && ($.secondOperator = v, $.secondValue = _.secondValue, $.logicalOperator = _.logicalOperator ?? "And"), h.push($);
    }
    return h;
  }, [a]), p = be(() => s == null || g.length === 0 ? s : Ls(s, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [s, g, t, n]);
  ie(() => {
    d != null && s != null && d(p ?? []);
  }, [p]);
  const y = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ z("div", { className: [Xe.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: Xe.rows, role: "group", "aria-label": "Filter conditions", children: a.map((h, _) => {
      const x = y(h.property), $ = l ? [Un[x.type ?? "string"]] : Ts, v = !Vn.includes(h.operator), O = h.secondOperator != null;
      return /* @__PURE__ */ z(Hr, { children: [
        /* @__PURE__ */ z("div", { className: Xe.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: Xe.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            Sn,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Xe.property,
              value: h.property,
              onChange: (N) => {
                const S = e.find(
                  (M) => M.name === N.target.value
                );
                u(h.id, {
                  property: N.target.value,
                  operator: Un[S?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((N) => ({
                value: N.name,
                label: N.title ?? N.name
              }))
            }
          ),
          /* @__PURE__ */ o(
            Sn,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: Xe.operator,
              value: h.operator,
              onChange: (N) => {
                const S = N.target.value;
                u(
                  h.id,
                  Vn.includes(S) ? {
                    operator: S,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: S }
                );
              },
              options: $.map((N) => ({
                value: N,
                label: ns[N]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            rs,
            {
              property: x,
              value: h.value,
              onChange: (N) => u(h.id, { value: N })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Xe.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => m(h.id),
              children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? O ? /* @__PURE__ */ z(
          "div",
          {
            className: [Xe.row, Xe.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                Sn,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: Xe.joinSelect,
                  value: h.logicalOperator ?? "And",
                  onChange: (N) => u(h.id, {
                    logicalOperator: N.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                Sn,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: Xe.operator,
                  value: h.secondOperator,
                  onChange: (N) => {
                    const S = N.target.value;
                    u(
                      h.id,
                      Vn.includes(S) ? { secondOperator: S, secondValue: void 0 } : { secondOperator: S }
                    );
                  },
                  options: $.map((N) => ({
                    value: N,
                    label: ns[N]
                  }))
                }
              ),
              h.secondOperator == null || !Vn.includes(h.secondOperator) ? /* @__PURE__ */ o(
                rs,
                {
                  property: x,
                  value: h.secondValue,
                  onChange: (N) => u(h.id, { secondValue: N })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Xe.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => u(h.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: Xe.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Xe.addSecond,
            onClick: () => u(h.id, {
              secondOperator: Un[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ z("div", { className: Xe.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: Xe.add, onClick: b, children: "Add filter" }),
      i != null ? /* @__PURE__ */ o("div", { className: Xe.custom, children: i }) : null,
      s != null ? /* @__PURE__ */ z("span", { className: Xe.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Aa = "_pager_1du31_1", ja = "_alignLeft_1du31_10", Ta = "_alignCenter_1du31_14", Pa = "_alignRight_1du31_18", La = "_alignJustify_1du31_22", Ra = "_summary_1du31_26", Ba = "_controls_1du31_31", Fa = "_button_1du31_37", Ha = "_active_1du31_73", qa = "_ellipsis_1du31_85", Ka = "_size_1du31_91", ht = {
  pager: Aa,
  alignLeft: ja,
  alignCenter: Ta,
  alignRight: Pa,
  alignJustify: La,
  summary: Ra,
  controls: Ba,
  button: Fa,
  active: Ha,
  ellipsis: qa,
  size: Ka
};
function Wa(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function ss(e, t) {
  return e.replace("{0}", String(t));
}
function Ua(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (s, i) => i + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const c = Math.min(t, l + n - 1);
  l = Math.max(1, c - n + 1);
  const d = [];
  for (let s = l; s <= c; s++) d.push(s);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), c < t - 1 && d.push("ellipsis"), c < t && d.push(t), d;
}
function Va({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: c = 5,
  alwaysVisible: d = !1,
  horizontalAlign: s = "left",
  showPagingSummary: i,
  showPageSizeSelector: a = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: b = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: y = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: x,
  onPageSizeChange: $,
  ariaLabel: v = "Pagination",
  className: O,
  visible: N = !0
}) {
  const S = n ?? r, [M, D] = q(S), E = n !== void 0, A = E ? S : M, k = Math.max(1, Math.ceil(e / t)), w = Math.min(Math.max(1, A), k), C = i ?? !0, T = d || k > 1, j = Ua(w, k, c), B = R(
    (Y) => {
      const me = Math.min(Math.max(1, Y), k);
      E || D(me);
      const ue = (me - 1) * t;
      x?.({
        page: me,
        skip: ue,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [E, x, k, t]
  ), L = s === "center" ? ht.alignCenter : s === "right" ? ht.alignRight : s === "justify" ? ht.alignJustify : ht.alignLeft, V = {
    count: e,
    pageNumber: w,
    pageSize: t,
    pageCount: k
  }, ee = (Y) => {
    const me = Array.from(
      Y.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), ue = me.indexOf(document.activeElement);
    ue !== -1 && (Y.key === "ArrowRight" || Y.key === "ArrowDown" ? (Y.preventDefault(), (me[ue + 1] ?? me[0])?.focus()) : Y.key === "ArrowLeft" || Y.key === "ArrowUp" ? (Y.preventDefault(), (me[ue - 1] ?? me[me.length - 1])?.focus()) : Y.key === "Home" ? (Y.preventDefault(), me[0]?.focus()) : Y.key === "End" && (Y.preventDefault(), me[me.length - 1]?.focus()));
  };
  return N === !1 || !T ? null : /* @__PURE__ */ z(
    "nav",
    {
      className: [ht.pager, L, O].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        C && /* @__PURE__ */ o("span", { className: ht.summary, "aria-live": "polite", children: u ? u(V) : Wa(f, w, k, e) }),
        /* @__PURE__ */ z(
          "div",
          {
            className: ht.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: ee,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: w <= 1,
                  onClick: () => B(1),
                  "aria-label": m,
                  title: m,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: w <= 1,
                  onClick: () => B(w - 1),
                  "aria-label": g,
                  title: g,
                  children: "‹"
                }
              ),
              j.map(
                (Y, me) => Y === "ellipsis" ? /* @__PURE__ */ o("span", { className: ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${me}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": Y,
                    className: [ht.button, Y === w ? ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": Y === w ? "page" : void 0,
                    "aria-label": ss(_, Y),
                    title: ss(h, Y),
                    onClick: () => B(Y),
                    children: Y
                  },
                  Y
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: w >= k,
                  onClick: () => B(w + 1),
                  "aria-label": p,
                  title: p,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: w >= k,
                  onClick: () => B(k),
                  "aria-label": y,
                  title: y,
                  children: "»"
                }
              )
            ]
          }
        ),
        a && l && l.length > 0 && /* @__PURE__ */ z("label", { className: ht.size, children: [
          /* @__PURE__ */ o("span", { children: b }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (Y) => $?.(Number(Y.target.value)),
              "aria-label": b,
              children: l.map((Y) => /* @__PURE__ */ o("option", { value: Y, children: Y }, Y))
            }
          )
        ] })
      ]
    }
  );
}
function Mr(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...c } = e;
  return /* @__PURE__ */ o(
    Va,
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
      ...c
    }
  );
}
const Rs = "";
function Ga(e, t, n, r, l) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const c = (s) => n.find((i) => i.property === s), d = (s, i, a) => {
    const f = t[i];
    if (f === void 0)
      return s.map((p) => ({ type: "row", row: p }));
    const u = c(f), b = /* @__PURE__ */ new Map(), m = [];
    s.forEach((p) => {
      const y = String(l(p, f) ?? ""), h = b.get(y);
      h ? h.push(p) : (b.set(y, [p]), m.push(y));
    });
    const g = [];
    return m.forEach((p) => {
      const y = b.get(p), h = [...a, p].join(Rs), _ = y[0], x = _ !== void 0 ? l(_, f) : void 0;
      g.push({
        type: "group",
        group: {
          key: h,
          display: yr(x, u?.format),
          property: f,
          title: u?.title ?? f,
          count: y.length,
          level: i
        }
      }), r.has(h) && g.push(...d(y, i + 1, [...a, p]));
    }), g;
  };
  return d(e, 0, []);
}
function os(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (c, d, s) => {
    const i = t[d];
    if (i === void 0 || c.length === 0) return;
    const a = /* @__PURE__ */ new Map(), f = [];
    c.forEach((u) => {
      const b = String(n(u, i) ?? ""), m = a.get(b);
      m ? m.push(u) : (a.set(b, [u]), f.push(b));
    }), f.forEach((u) => {
      const b = [...s, u].join(Rs);
      r.add(b), l(a.get(u), d + 1, [...s, u]);
    });
  };
  return l(e, 0, []), r;
}
function ar(e, t) {
  return e.property ?? `col-${t}`;
}
function Xa(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: c }) => {
    if (!c.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? c.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Ya(e, t) {
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
function Nn(e, t) {
  if (t != null)
    return br(e, t);
}
function yr(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const ls = [
  "Ascending",
  "Descending",
  null
];
function Za(e, t, n = {}) {
  const r = e.find((c) => c.property === t), l = ls[(r ? ls.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Ja(e, t) {
  return ga(e, t);
}
function Qa(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), c = (l - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function ei(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, i]) => ({
      property: s,
      operator: i.operator ?? "Contains",
      value: Ya(
        i.value,
        n.types?.[s] ?? "string"
      )
    })
  ), l = r.length > 0 ? Ls(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = Ja(l, t.sorts);
  return {
    ...Qa(c, t.pageNumber, t.pageSize),
    filtered: c,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function as(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function ti(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const c = n(l, t.property);
    if (c == null || c === "") return;
    const d = Number(c);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, c) => l + c, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, c) => l + c, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function ni(e, t, n = Nn) {
  const r = (c) => /["\r\n,]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c, l = [
    t.map((c) => r(c.title ?? c.property ?? "")).join(",")
  ];
  return e.forEach((c) => {
    l.push(
      t.map((d) => r(yr(n(c, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const ri = "_grid_13rur_1", si = "_toolbar_13rur_8", oi = "_picker_13rur_13", li = "_pickerButton_13rur_17", ai = "_pickerPanel_13rur_31", ii = "_pickerItem_13rur_46", ci = "_groupPanel_13rur_55", di = "_groupPanelActive_13rur_66", ui = "_groupPanelText_13rur_70", fi = "_groupChip_13rur_74", _i = "_groupRemove_13rur_85", hi = "_groupRow_13rur_94", pi = "_groupCell_13rur_98", mi = "_groupToggle_13rur_104", gi = "_editRow_13rur_117", bi = "_editCell_13rur_121", yi = "_editInput_13rur_127", xi = "_commandCell_13rur_137", vi = "_commandButton_13rur_144", ki = "_data_13rur_159", wi = "_table_13rur_166", $i = "_header_13rur_172", Ni = "_center_13rur_185", Oi = "_right_13rur_189", Si = "_sortButton_13rur_193", Ci = "_sortIndicator_13rur_211", Di = "_sortIndex_13rur_215", Ei = "_cell_13rur_226", zi = "_clickable_13rur_241", Mi = "_frozen_13rur_249", Ii = "_selected_13rur_255", Ai = "_resizeHandle_13rur_263", ji = "_filterCell_13rur_281", Ti = "_filterSelect_13rur_290", Pi = "_filterInput_13rur_300", Li = "_empty_13rur_311", Ri = "_loading_13rur_317", Bi = "_visuallyHidden_13rur_331", Fi = "_virtualScroller_13rur_340", Hi = "_spacerRow_13rur_345", qi = "_footerRow_13rur_350", Ki = "_footerCell_13rur_354", Wi = "_footerValue_13rur_361", pe = {
  grid: ri,
  toolbar: si,
  picker: oi,
  pickerButton: li,
  pickerPanel: ai,
  pickerItem: ii,
  groupPanel: ci,
  groupPanelActive: di,
  groupPanelText: ui,
  groupChip: fi,
  groupRemove: _i,
  groupRow: hi,
  groupCell: pi,
  groupToggle: mi,
  editRow: gi,
  editCell: bi,
  editInput: yi,
  commandCell: xi,
  commandButton: vi,
  data: ki,
  table: wi,
  header: $i,
  center: Ni,
  right: Oi,
  sortButton: Si,
  sortIndicator: Ci,
  sortIndex: Di,
  cell: Ei,
  clickable: zi,
  frozen: Mi,
  selected: Ii,
  resizeHandle: Ai,
  filterCell: ji,
  filterSelect: Ti,
  filterInput: Pi,
  empty: Li,
  loading: Ri,
  visuallyHidden: Bi,
  virtualScroller: Fi,
  spacerRow: Hi,
  footerRow: qi,
  footerCell: Ki,
  footerValue: Wi
}, Ui = {
  Ascending: "ascending",
  Descending: "descending"
};
function is(e, t) {
  return e.filterable ?? t;
}
function Vi(e, t) {
  return e.sortable ?? t;
}
function Gi(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function kk({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: c = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: a = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: b = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: g = !0,
  showPageSizeSelector: p = !0,
  selectionMode: y = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: x = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: O = !1,
  allowGrouping: N = !1,
  groupPanelText: S = "Drag a column header here to group",
  groupExpanded: M = !0,
  aggregates: D,
  showExportButton: E = !1,
  exportFileName: A = "grid-data",
  serverMode: k = !1,
  totalCount: w,
  onRangeChange: C,
  virtualize: T = !1,
  virtualRowHeight: j = 40,
  virtualHeight: B = 480,
  editMode: L = "None",
  allowRowCreate: V = !1,
  onRowUpdate: ee,
  onRowCreate: Y,
  onRowDelete: me,
  isLoading: ue = !1,
  empty: se = "No records found",
  ariaLabel: K,
  className: ce,
  onRowClick: re
}) {
  const fe = K != null ? `${K} ` : "", [oe, $e] = q([]), [Oe, Ye] = q(
    /* @__PURE__ */ new Map()
  ), [ve, Be] = q(1), [we, ot] = q(f), [nt, Ze] = q(
    () => e.map((P, F) => ar(P, F))
  ), [Nt, bt] = q(
    () => new Set(
      e.map((P, F) => P.visible !== !1 ? ar(P, F) : "").filter(Boolean)
    )
  ), [lt, G] = q({}), [I, U] = q(!1), [J, he] = q([]), [te, ye] = q(
    null
  ), [Ee, Fe] = q(null), [He, rt] = q({}), [ln, Q] = q(0), [Se, dt] = q(B), zt = Z(null), ut = Z(null), Ce = be(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((F, ae) => P.set(ar(F, ae), F)), P;
  }, [e]), je = be(
    () => nt.filter((P) => Nt.has(P)).map((P) => ({ key: P, column: Ce.get(P) })).filter(
      (P) => P.column != null
    ),
    [nt, Nt, Ce]
  ), Mt = be(
    () => Xa(je, lt),
    [je, lt]
  ), yt = L !== "None" || me != null || V, Je = be(() => {
    if (k) {
      const P = w ?? t.length, F = Math.max(1, Math.ceil(P / we));
      return {
        items: [...t],
        filtered: [...t],
        total: P,
        pageCount: F,
        pageNumber: ve,
        pageSize: we,
        sorts: oe,
        filters: Oe
      };
    }
    return ei(
      t,
      {
        sorts: oe,
        filters: Oe,
        pageNumber: ve,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: a ? we : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: i,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((P) => P.type != null && P.property != null).map((P) => [
            P.property,
            P.type
          ])
        )
      }
    );
  }, [
    t,
    oe,
    Oe,
    ve,
    we,
    i,
    s,
    e,
    k,
    w,
    a
  ]), W = Z(C);
  ie(() => {
    W.current = C;
  });
  const le = be(
    () => [...Oe.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, F]) => ({
      property: P,
      operator: F.operator ?? as(
        e.find((ae) => ae.property === P)?.type ?? "string"
      ),
      value: F.value ?? ""
    })),
    [Oe, e]
  );
  ie(() => {
    !k || W.current == null || W.current({
      start: (ve - 1) * we,
      count: we,
      pageNumber: ve,
      pageSize: we,
      sorts: oe,
      filters: le,
      logicalOperator: i
    });
  }, [
    k,
    ve,
    we,
    oe,
    le,
    i
  ]);
  const Ie = be(() => new Set(J), [J]), Te = be(() => te || (M ? os(Je.items, J, Nn) : /* @__PURE__ */ new Set()), [te, M, Je.items, J]), Ht = be(
    () => Ga(Je.items, J, e, Te, Nn),
    [Je.items, J, e, Te]
  ), st = be(
    () => J.length > 0 ? je.filter(
      (P) => P.column.property == null || !Ie.has(P.column.property)
    ) : je,
    [je, J, Ie]
  ), H = (P) => {
    P !== "" && $e(Za(oe, P, { multi: l }));
  }, X = (P, F) => {
    Ye((ae) => {
      const de = new Map(ae);
      return de.set(P, F), de;
    }), Be(1);
  }, ne = (P) => {
    ot(P), Be(1);
  }, ge = (P) => {
    if (y === "None") return;
    const F = n(P), ae = h ?? [];
    let de;
    y === "Single" ? de = ae.length === 1 && ae[0] === F ? [] : [F] : de = ae.includes(F) ? ae.filter((Re) => Re !== F) : [...ae, F], _?.(de);
  }, _e = (P) => {
    re?.(P);
  }, xe = (P, F, ae) => {
    zt.current = { key: P, startX: F, startWidth: ae };
  }, Me = (P) => {
    const F = zt.current;
    if (!F) return;
    const ae = P - F.startX, de = Math.max(48, F.startWidth + ae);
    G((Re) => ({ ...Re, [F.key]: `${de}px` }));
  }, ze = () => {
    zt.current = null;
  }, Ve = (P) => {
    ut.current = P;
  }, Qe = (P) => {
    const F = ut.current;
    ut.current = null, !(!F || F === P) && Ze((ae) => {
      const de = [...ae], Re = de.indexOf(F), Pt = de.indexOf(P);
      return Re < 0 || Pt < 0 ? ae : (de.splice(Re, 1), de.splice(Pt, 0, F), de);
    });
  }, ft = (P) => {
    bt((F) => {
      const ae = new Set(F);
      return ae.has(P) ? ae.delete(P) : ae.add(P), ae;
    });
  }, et = () => {
    const P = ut.current;
    if (ut.current = null, !P || !N) return;
    const ae = Ce.get(P)?.property;
    ae && (he(
      (de) => de.includes(ae) ? de : [...de, ae]
    ), ye(null));
  }, Ge = (P) => {
    he((F) => F.filter((ae) => ae !== P)), ye(null);
  }, qt = (P) => {
    ye((F) => {
      const ae = F ?? (M ? os(Je.items, J, Nn) : /* @__PURE__ */ new Set()), de = new Set(ae);
      return de.has(P) ? de.delete(P) : de.add(P), de;
    });
  }, Tt = (P) => {
    const F = {};
    e.forEach((ae) => {
      ae.property && (F[ae.property] = Nn(P, ae.property));
    }), rt(F), Fe(String(n(P)));
  }, an = () => {
    const P = {};
    e.forEach((F) => {
      F.property && F.type === "boolean" && (P[F.property] = !1);
    }), rt(P), Fe("__new__");
  }, Bn = () => {
    Fe(null), rt({});
  }, Fn = (P) => {
    if (Ee === "__new__") {
      const F = Object.fromEntries(
        e.filter((ae) => ae.property).map((ae) => [ae.property, He[ae.property]])
      );
      Y?.(F);
    } else if (P != null) {
      const F = { ...P, ...He };
      ee?.(P, F);
    }
    Bn();
  }, mn = a && (m === "Top" || m === "TopAndBottom"), Xr = a && (m === "Bottom" || m === "TopAndBottom"), ro = d && e.some((P) => is(P, d)), so = (P, F, ae) => P.render ? P.render(F, { index: 0 }) : yr(Nn(F, P.property), P.format), oo = (P) => {
    const F = [pe.cell];
    return P.align === "center" && F.push(pe.center), P.align === "right" && F.push(pe.right), P.frozen && F.push(pe.frozen), F.join(" ");
  }, Yr = k ? t : Je.filtered, lo = () => {
    const P = ni(
      Yr,
      st.map((Re) => Re.column)
    ), F = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ae = URL.createObjectURL(F), de = document.createElement("a");
    de.href = ae, de.download = `${A}.csv`, document.body.appendChild(de), de.click(), de.remove(), URL.revokeObjectURL(ae);
  }, En = Ht.length, gn = be(() => {
    if (!T || En === 0)
      return { start: 0, end: En, top: 0, bottom: 0 };
    const P = 5, F = Math.max(
      0,
      Math.floor(ln / j) - P
    ), ae = Math.ceil(Se / j) + P * 2, de = Math.min(En, F + ae), Re = F * j, Pt = Math.max(0, (En - de) * j);
    return { start: F, end: de, top: Re, bottom: Pt };
  }, [T, En, ln, j, Se]), $r = st.length + (yt ? 1 : 0);
  return /* @__PURE__ */ z("div", { className: [pe.grid, ce].filter(Boolean).join(" "), children: [
    mn && /* @__PURE__ */ o(
      Mr,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: u,
        pageNumbersCount: b,
        showSummary: g,
        showPageSizeSelector: p,
        ariaLabel: `${fe}${Xr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    ),
    (N || V || x || E) && /* @__PURE__ */ z("div", { className: pe.toolbar, children: [
      N && /* @__PURE__ */ o(
        "div",
        {
          className: [
            pe.groupPanel,
            J.length > 0 ? pe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: N ? (P) => P.preventDefault() : void 0,
          onDrop: N ? et : void 0,
          children: J.length > 0 ? J.map((P) => {
            const F = e.find((ae) => ae.property === P)?.title ?? P;
            return /* @__PURE__ */ z("span", { className: pe.groupChip, children: [
              F,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: pe.groupRemove,
                  onClick: () => Ge(P),
                  "aria-label": `Remove group by ${F}`,
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              )
            ] }, P);
          }) : /* @__PURE__ */ o("span", { className: pe.groupPanelText, children: S })
        }
      ),
      V && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: pe.pickerButton,
          onClick: an,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ z("div", { className: pe.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: pe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": I,
            onClick: () => U((P) => !P),
            children: $
          }
        ),
        I && /* @__PURE__ */ o(
          "div",
          {
            className: pe.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((P, F) => {
              const ae = ar(P, F);
              return /* @__PURE__ */ z("label", { className: pe.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Nt.has(ae),
                    onChange: () => ft(ae)
                  }
                ),
                P.title ?? P.property
              ] }, ae);
            })
          }
        )
      ] }),
      E && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: pe.pickerButton,
          onClick: lo,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ z(
      "div",
      {
        className: [pe.data, T ? pe.virtualScroller : ""].filter(Boolean).join(" "),
        style: T ? { maxHeight: B } : void 0,
        onScroll: T ? (P) => {
          Q(P.currentTarget.scrollTop), dt(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ z(
            "table",
            {
              className: pe.table,
              role: "grid",
              "aria-rowcount": (T ? En : Je.total) + 1,
              "aria-label": K,
              "aria-busy": ue || void 0,
              children: [
                /* @__PURE__ */ z("colgroup", { children: [
                  st.map(({ key: P, column: F }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: lt[P] ?? F.width,
                        minWidth: F.minWidth,
                        maxWidth: F.maxWidth
                      }
                    },
                    P
                  )),
                  yt && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ z("thead", { children: [
                  /* @__PURE__ */ z("tr", { children: [
                    st.map(({ key: P, column: F }) => {
                      const ae = Vi(F, r), de = oe.find((_t) => _t.property === F.property), Re = de ? oe.indexOf(de) + 1 : 0, Pt = F.align ?? "left";
                      return /* @__PURE__ */ z(
                        "th",
                        {
                          "aria-sort": ae && de ? Ui[de.sortOrder] : "none",
                          className: [
                            pe.header,
                            Pt === "center" ? pe.center : "",
                            Pt === "right" ? pe.right : "",
                            F.frozen ? pe.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: F.frozen ? { left: Mt[P] } : void 0,
                          scope: "col",
                          draggable: O || N || void 0,
                          onDragStart: O || N ? (_t) => {
                            _t.dataTransfer && (_t.dataTransfer.effectAllowed = "move"), Ve(P);
                          } : void 0,
                          onDragOver: O ? (_t) => _t.preventDefault() : void 0,
                          onDrop: O ? () => Qe(P) : void 0,
                          children: [
                            ae ? /* @__PURE__ */ z(
                              "button",
                              {
                                type: "button",
                                className: pe.sortButton,
                                onClick: () => F.property != null && H(F.property),
                                "aria-label": de ? de.sortOrder === "Ascending" ? `Sort ${F.title ?? F.property} descending` : `Sort ${F.title ?? F.property} ascending` : `Sort ${F.title ?? F.property} ascending`,
                                children: [
                                  F.title ?? F.property,
                                  de && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: pe.sortIndicator,
                                      "aria-hidden": "true",
                                      children: de.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  Re > 1 && c && /* @__PURE__ */ o("span", { className: pe.sortIndex, children: Re })
                                ]
                              }
                            ) : F.title ?? F.property,
                            v && /* @__PURE__ */ o(
                              "span",
                              {
                                className: pe.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${F.title ?? F.property}`,
                                onMouseDown: (_t) => {
                                  _t.preventDefault(), _t.stopPropagation();
                                  const zn = lt[P] ?? F.width, Kt = zn ? parseFloat(zn) : 96;
                                  xe(
                                    P,
                                    _t.clientX,
                                    Number.isFinite(Kt) ? Kt : 96
                                  );
                                },
                                onMouseMove: (_t) => {
                                  zt.current?.key === P && Me(_t.clientX);
                                },
                                onMouseUp: ze,
                                onMouseLeave: () => {
                                  zt.current?.key === P && ze();
                                }
                              }
                            )
                          ]
                        },
                        P
                      );
                    }),
                    yt && /* @__PURE__ */ o("th", { className: pe.header, scope: "col", children: "Actions" })
                  ] }),
                  ro && /* @__PURE__ */ o("tr", { children: st.map(({ key: P, column: F }) => {
                    if (!is(F, d))
                      return /* @__PURE__ */ o("td", { className: pe.filterCell }, P);
                    const ae = Oe.get(F.property ?? "");
                    return /* @__PURE__ */ z("td", { className: pe.filterCell, children: [
                      /* @__PURE__ */ z(
                        "label",
                        {
                          className: pe.visuallyHidden,
                          htmlFor: `df-${F.property}`,
                          children: [
                            "Filter ",
                            F.title ?? F.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${F.property}`,
                          className: pe.filterSelect,
                          value: ae?.operator ?? as(F.type ?? "string"),
                          onChange: (de) => X(F.property ?? "", {
                            ...ae,
                            operator: de.target.value
                          }),
                          "aria-label": `${F.title ?? F.property} operator`,
                          children: Ts.filter((de) => de !== "Custom").map(
                            (de) => /* @__PURE__ */ o("option", { value: de, children: de }, de)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: pe.filterInput,
                          value: ae?.value ?? "",
                          onChange: (de) => X(F.property ?? "", {
                            ...ae,
                            value: de.target.value
                          }),
                          placeholder: `Filter ${F.title ?? F.property}`,
                          "aria-label": `${F.title ?? F.property} value`
                        }
                      )
                    ] }, P);
                  }) })
                ] }),
                /* @__PURE__ */ z("tbody", { children: [
                  Ee === "__new__" && /* @__PURE__ */ z("tr", { className: pe.editRow, children: [
                    st.map(({ key: P, column: F }) => /* @__PURE__ */ o("td", { className: pe.editCell, children: F.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: pe.editInput,
                        type: F.type === "number" ? "number" : F.type === "boolean" ? "checkbox" : "text",
                        checked: F.type === "boolean" ? !!He[F.property] : void 0,
                        value: F.type === "boolean" ? void 0 : String(He[F.property] ?? ""),
                        onChange: (ae) => rt((de) => ({
                          ...de,
                          [F.property]: F.type === "boolean" ? ae.target.checked : ae.target.value
                        })),
                        "aria-label": `${F.title ?? F.property} (new)`
                      }
                    ) }, P)),
                    yt && /* @__PURE__ */ z("td", { className: pe.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: pe.commandButton,
                          onClick: () => Fn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: pe.commandButton,
                          onClick: Bn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  gn.top > 0 && /* @__PURE__ */ o("tr", { className: pe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: $r,
                      style: { height: gn.top }
                    }
                  ) }),
                  Ht.slice(gn.start, gn.end).map((P, F) => {
                    const ae = gn.start + F, de = T ? ae + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const Kt = Te.has(P.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: pe.groupRow,
                          "aria-rowindex": de,
                          children: /* @__PURE__ */ o("td", { colSpan: $r, className: pe.groupCell, children: /* @__PURE__ */ z(
                            "button",
                            {
                              type: "button",
                              className: pe.groupToggle,
                              "aria-expanded": Kt,
                              style: {
                                paddingInlineStart: `${P.group.level * 16}px`
                              },
                              onClick: () => qt(P.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Kt ? "▼" : "▶" }),
                                P.group.title,
                                ": ",
                                P.group.display,
                                " (",
                                P.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${P.group.key}`
                      );
                    }
                    const Re = P.row, Pt = n(Re), _t = (h ?? []).includes(Pt), zn = Ee != null && Ee === String(Pt);
                    return /* @__PURE__ */ z(
                      "tr",
                      {
                        "aria-rowindex": de,
                        className: [
                          re || y !== "None" ? pe.clickable : "",
                          _t ? pe.selected : "",
                          zn ? pe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": y !== "None" ? _t : void 0,
                        onClick: re || y !== "None" ? (Kt) => {
                          Gi(Kt.target) || (_e(Re), ge(Re));
                        } : void 0,
                        children: [
                          st.map(({ key: Kt, column: xt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: oo(xt),
                              style: xt.frozen ? { left: Mt[Kt] } : void 0,
                              children: zn && xt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: pe.editInput,
                                  type: xt.type === "number" ? "number" : xt.type === "boolean" ? "checkbox" : "text",
                                  checked: xt.type === "boolean" ? !!He[xt.property] : void 0,
                                  value: xt.type === "boolean" ? void 0 : String(He[xt.property] ?? ""),
                                  onChange: (Zr) => rt((ao) => ({
                                    ...ao,
                                    [xt.property]: xt.type === "boolean" ? Zr.target.checked : Zr.target.value
                                  })),
                                  "aria-label": `${xt.title ?? xt.property} (edit)`
                                }
                              ) : so(xt, Re)
                            },
                            Kt
                          )),
                          yt && /* @__PURE__ */ o("td", { className: pe.commandCell, children: zn ? /* @__PURE__ */ z(tt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: () => Fn(Re),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: Bn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ z(tt, { children: [
                            L !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: () => Tt(Re),
                                children: "Edit"
                              }
                            ),
                            me && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: () => me(Re),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Pt
                    );
                  }),
                  gn.bottom > 0 && /* @__PURE__ */ o("tr", { className: pe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: $r,
                      style: { height: gn.bottom }
                    }
                  ) })
                ] }),
                D && D.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ z("tr", { className: pe.footerRow, children: [
                  st.map(({ key: P, column: F }) => {
                    const ae = D.filter(
                      (de) => de.property === F.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          pe.footerCell,
                          F.align === "right" ? pe.right : "",
                          F.align === "center" ? pe.center : ""
                        ].filter(Boolean).join(" "),
                        children: ae.map((de, Re) => /* @__PURE__ */ z(
                          "div",
                          {
                            className: pe.footerValue,
                            children: [
                              de.title ? `${de.title}: ` : "",
                              yr(
                                ti(Yr, de, Nn),
                                de.format
                              )
                            ]
                          },
                          `${de.property}-${de.type}-${Re}`
                        ))
                      },
                      P
                    );
                  }),
                  yt && /* @__PURE__ */ o("td", { className: pe.footerCell })
                ] }) })
              ]
            }
          ),
          Je.items.length === 0 && !ue && /* @__PURE__ */ o("div", { className: pe.empty, children: se }),
          ue && /* @__PURE__ */ o("div", { className: pe.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Xr && /* @__PURE__ */ o(
      Mr,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: u,
        pageNumbersCount: b,
        showSummary: g,
        showPageSizeSelector: p,
        ariaLabel: `${fe}${mn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    )
  ] });
}
const Xi = "_wrap_avqds_1", Yi = "_grid_avqds_7", Zi = "_stacked_avqds_13", Ji = "_item_avqds_19", Qi = "_empty_avqds_25", Gn = {
  wrap: Xi,
  grid: Yi,
  stacked: Zi,
  item: Ji,
  empty: Qi
};
function wk({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: c = "No records found",
  emptyTemplate: d,
  loadingTemplate: s,
  isLoading: i = !1,
  showPageSizeSelector: a = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [b, m] = q(1), [g, p] = q(t), y = e.length, h = Math.max(1, Math.ceil(y / g)), _ = Math.min(Math.max(1, b), h), x = be(() => {
    const v = (_ - 1) * g;
    return e.slice(v, v + g);
  }, [e, _, g]), $ = r ? Gn.grid : Gn.stacked;
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Gn.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        i && s != null ? s : y === 0 ? d ?? /* @__PURE__ */ o("div", { className: Gn.empty, children: c }) : /* @__PURE__ */ o("div", { className: $, children: x.map((v, O) => /* @__PURE__ */ o("div", { className: Gn.item, children: l ? l(v, O) : String(v) }, O)) }),
        /* @__PURE__ */ o(
          Mr,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: g,
            count: y,
            pageSizeOptions: n,
            showPageSizeSelector: a,
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
const ec = "_label_1qfpw_1", tc = {
  label: ec
}, $k = Le(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [tc.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), nc = "_textbox_oly89_1", rc = "_invalid_oly89_37", sc = "_xs_oly89_44", oc = "_sm_oly89_50", lc = "_md_oly89_56", ac = "_lg_oly89_62", ic = "_xl_oly89_68", Or = {
  textbox: nc,
  invalid: rc,
  xs: sc,
  sm: oc,
  md: lc,
  lg: ac,
  xl: ic
}, cc = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: c = "text",
    ...d
  }, s) {
    return l === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: s,
        type: c,
        "data-size": t,
        className: [
          Or.textbox,
          Or[t],
          n ? Or.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Nk = cc, dc = "_checkbox_1bb6c_1", uc = {
  checkbox: dc
}, Ok = Le(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const c = Z(null);
    return ie(() => {
      c.current && (c.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          c.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [uc.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), fc = {
  switch: "_switch_19gf1_1"
}, Sk = Le(function({ className: t, ...n }, r) {
  const [l, c] = q(
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
      className: [fc.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && c(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), _c = "_trigger_1jlxf_1", hc = "_tooltip_1jlxf_7", pc = "_top_1jlxf_34", mc = "_right_1jlxf_40", gc = "_bottom_1jlxf_46", bc = "_left_1jlxf_52", yc = "_arrow_1jlxf_58", xc = "_floating_1jlxf_70", dn = {
  trigger: _c,
  tooltip: hc,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: pc,
  right: mc,
  bottom: gc,
  left: bc,
  arrow: yc,
  floating: xc,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, ir = 8;
function vc(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + ir,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - ir,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + ir,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - ir,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function Ck({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: c,
  className: d
}) {
  const s = Pe(), i = Z(null), a = Z(null), f = Z(() => {
  }), [u, b] = q(!1), [m, g] = q(null), p = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, y = () => {
    p(), i.current = window.setTimeout(() => {
      i.current = null, b(!0);
    }, r);
  }, h = () => {
    p(), b(!1);
  };
  if (ie(() => () => p(), []), ie(() => {
    if (!u || l == null) return;
    const x = window.setTimeout(() => b(!1), l);
    return () => window.clearTimeout(x);
  }, [u, l]), ie(() => {
    if (c || !u) return;
    const x = ($) => {
      $.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [c, u]), ie(() => {
    if (!c) return;
    let x = null, $ = null;
    const v = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, O = () => {
      v(), $ = null, g(null);
    };
    f.current = O;
    const N = (k) => {
      v(), $ = k, x = window.setTimeout(() => {
        x = null, g(k);
      }, r);
    }, S = (k) => k instanceof Element ? k.closest(c) : null, M = (k) => {
      const w = S(k.target);
      !w || w === $ || N(w);
    }, D = (k) => {
      const w = S(k.target);
      if (!w || w !== $) return;
      const C = k.relatedTarget;
      C instanceof Element && w.contains(C) || O();
    }, E = (k) => {
      k.key === "Escape" && O();
    }, A = () => O();
    return document.addEventListener("mouseover", M), document.addEventListener("mouseout", D), document.addEventListener("focusin", M), document.addEventListener("focusout", D), document.addEventListener("keydown", E), document.addEventListener("scroll", A, !0), window.addEventListener("resize", A), () => {
      v(), document.removeEventListener("mouseover", M), document.removeEventListener("mouseout", D), document.removeEventListener("focusin", M), document.removeEventListener("focusout", D), document.removeEventListener("keydown", E), document.removeEventListener("scroll", A, !0), window.removeEventListener("resize", A), $ = null, g(null);
    };
  }, [c, r]), ie(() => {
    if (!c || m === null || l == null) return;
    const x = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(x);
  }, [c, m, l]), zr(() => {
    const x = m;
    if (!x) return;
    const $ = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [$, s].filter(Boolean).join(" ")
    ), () => {
      $ == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", $);
    };
  }, [m, s]), zr(() => {
    const x = a.current, $ = m;
    !x || !$ || Object.assign(
      x.style,
      vc($.getBoundingClientRect(), n)
    );
  }, [m, n]), c)
    return m ? /* @__PURE__ */ z(
      "span",
      {
        ref: a,
        role: "tooltip",
        id: s,
        className: [
          dn.tooltip,
          dn[n],
          dn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: dn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = gt(t) ? Fr(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? s : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z(
      "span",
      {
        className: [dn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: y,
        onMouseLeave: h,
        onFocus: y,
        onBlur: h,
        children: [
          _,
          u && /* @__PURE__ */ z(
            "span",
            {
              role: "tooltip",
              id: s,
              className: [dn.tooltip, dn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: dn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const kc = "_dialog_1t7pw_1", wc = "_sm_1t7pw_104", $c = "_resizable_1t7pw_110", Nc = "_md_1t7pw_113", Oc = "_lg_1t7pw_117", Sc = "_header_1t7pw_121", Cc = "_title_1t7pw_132", Dc = "_description_1t7pw_139", Ec = "_close_1t7pw_146", zc = "_body_1t7pw_176", Mc = "_footer_1t7pw_188", Lt = {
  dialog: kc,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: wc,
  resizable: $c,
  md: Nc,
  lg: Oc,
  header: Sc,
  title: Cc,
  description: Dc,
  close: Ec,
  body: zc,
  footer: Mc
};
function Ic({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: c,
  size: d = "md",
  width: s,
  height: i,
  closeOnOverlayClick: a = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: b = null,
  showCloseButton: m = !0,
  showMask: g = !0,
  canClose: p,
  className: y
}) {
  const h = Z(null), _ = Pe(), x = Pe(), $ = Z(t);
  ie(() => {
    $.current = t;
  });
  const v = Z(p);
  ie(() => {
    v.current = p;
  });
  const O = Z(f);
  ie(() => {
    O.current = f;
  });
  const N = Z(!1), S = Z(!1), M = R(() => {
    if (N.current) return;
    const A = v.current?.();
    if (A instanceof Promise) {
      A.then((k) => {
        k && !N.current && (N.current = !0, $.current());
      });
      return;
    }
    A !== !1 && (N.current = !0, $.current());
  }, []), D = R(() => {
    if (S.current) {
      S.current = !1;
      return;
    }
    $.current();
  }, []), E = R(
    (A) => {
      if (A.key !== "Tab" || !h.current) return;
      const k = Array.from(
        h.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (C) => C.offsetWidth > 0 || C.offsetHeight > 0 || C === document.activeElement
      );
      if (k.length === 0) {
        A.preventDefault();
        return;
      }
      const w = k.indexOf(document.activeElement);
      if (A.shiftKey) {
        if (w <= 0) {
          A.preventDefault();
          const C = k[k.length - 1];
          C && C.focus();
        }
      } else if (w === -1 || w === k.length - 1) {
        A.preventDefault();
        const C = k[0];
        C && C.focus();
      }
    },
    []
  );
  return ie(() => {
    const A = h.current;
    if (A)
      if (e && !A.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        A.showModal(), (A.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? A.querySelector("button"))?.focus();
        const C = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const T = (j) => {
          j.preventDefault(), O.current && M();
        };
        return A.addEventListener("cancel", T), () => {
          A.removeEventListener("cancel", T), document.body.style.overflow = C, k?.focus({ preventScroll: !0 });
        };
      } else !e && A.open && (S.current = N.current, N.current = !1, A.close());
  }, [e, M]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ z(
    "dialog",
    {
      ref: h,
      className: [
        Lt.dialog,
        Lt[d],
        u ? Lt.resizable : null,
        b ? Lt[`side-${b}`] : null,
        g === !1 ? Lt["no-mask"] : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: i ?? void 0
      },
      onClose: D,
      onClick: (A) => {
        A.target === h.current && a && M();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: E,
      children: [
        n && /* @__PURE__ */ z("header", { className: Lt.header, children: [
          /* @__PURE__ */ z("div", { children: [
            /* @__PURE__ */ o("h2", { id: _, className: Lt.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: x, className: Lt.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Lt.close,
              onClick: () => {
                M();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: Lt.body, children: l }),
        c && /* @__PURE__ */ o("footer", { className: Lt.footer, children: c })
      ]
    }
  );
}
const Ac = "_typography_1jy8x_1", jc = "_h1_1jy8x_39", Tc = "_h2_1jy8x_45", Pc = "_h3_1jy8x_51", Lc = "_h4_1jy8x_57", Rc = "_h5_1jy8x_63", Bc = "_h6_1jy8x_69", Fc = "_button_1jy8x_99", Hc = "_caption_1jy8x_106", qc = "_overline_1jy8x_112", Sr = {
  typography: Ac,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: jc,
  h2: Tc,
  h3: Pc,
  h4: Lc,
  h5: Rc,
  h6: Bc,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Fc,
  caption: Hc,
  overline: qc,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Kc = {
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
}, Wc = {
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
}, Uc = {
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
}, Vc = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Gc = Le(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: c = !0,
  className: d,
  children: s,
  ...i
}, a) {
  if (c === !1) return null;
  const f = n === "Auto" ? Kc[t] : Uc[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: a,
      className: [
        Sr.typography,
        Sr[Wc[t]],
        r ? Sr[Vc[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...i,
      children: l ?? s
    }
  );
}), Bs = Cn(null);
function Dk() {
  const e = on(Bs);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function Ek({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = Z(0), c = () => (l.current += 1, l.current), d = Z([]);
  d.current = t;
  const s = (b) => {
    const m = d.current[0];
    m && (m.kind === "confirm" ? m.resolve(!!b) : m.kind === "alert" ? m.resolve() : m.resolve(b), n((g) => g.slice(1)));
  }, i = be(
    () => ({
      confirm: (b = {}) => new Promise((m) => {
        n((g) => [
          ...g,
          { seq: c(), kind: "confirm", options: b, resolve: m }
        ]);
      }),
      alert: (b = {}) => new Promise((m) => {
        n((g) => [
          ...g,
          { seq: c(), kind: "alert", options: b, resolve: m }
        ]);
      }),
      open: (b = {}) => new Promise((m) => {
        n((g) => [
          ...g,
          { seq: c(), kind: "custom", options: b, resolve: m }
        ]);
      }),
      openSide: ({ position: b, showMask: m = !0, ...g }) => new Promise((p) => {
        n((y) => [
          ...y,
          {
            seq: c(),
            kind: "custom",
            options: { ...g, side: b, showMask: m },
            resolve: p
          }
        ]);
      }),
      close: (b) => s(b),
      closeAll: () => {
        n((b) => (b.forEach((m) => {
          m.kind === "confirm" ? m.resolve(!1) : m.kind === "alert" ? m.resolve() : m.resolve(void 0);
        }), []));
      },
      refresh: () => r((b) => b + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), a = t[0];
  function f(b) {
    a && (a.kind === "confirm" ? a.resolve(!!b) : a.kind === "alert" ? a.resolve() : a.resolve(b), n((m) => m.slice(1)));
  }
  const u = a?.kind === "custom" ? a.options : null;
  return /* @__PURE__ */ z(Bs.Provider, { value: i, children: [
    e,
    /* @__PURE__ */ o(
      Ic,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: a?.kind === "custom" ? u?.title ?? "Dialog" : a?.options.title ?? (a?.kind === "confirm" ? "Confirm" : "Alert"),
        description: u?.description,
        size: a?.kind === "custom" ? u?.size : a?.options.size,
        width: u?.width,
        height: u?.height,
        side: u?.side ?? null,
        showCloseButton: u?.showCloseButton,
        showMask: u?.showMask,
        closeOnOverlayClick: u?.closeOnOverlayClick,
        closeOnEsc: u?.closeOnEsc,
        className: u?.className,
        footer: a?.kind === "confirm" ? /* @__PURE__ */ z(tt, { children: [
          /* @__PURE__ */ o(On, { variant: "text", onClick: () => f(!1), children: a.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            On,
            {
              severity: a.options.tone ?? "primary",
              onClick: () => f(!0),
              children: a.options.confirmText ?? "Confirm"
            }
          )
        ] }) : a?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ o(On, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(On, { onClick: () => f(!0), children: a?.kind === "alert" ? a.options.okText ?? "OK" : "OK" }),
        children: a?.kind === "custom" ? u?.content : a?.options.message != null && /* @__PURE__ */ o(Gc, { textStyle: "Body1", children: a.options.message })
      },
      a?.seq ?? 0
    )
  ] });
}
const Xc = "_viewport_11t1p_1", Yc = "_topLeft_11t1p_13", Zc = "_topRight_11t1p_20", Jc = "_bottomLeft_11t1p_25", Qc = "_toast_11t1p_30", ed = "_leaving_11t1p_61", td = "_info_11t1p_77", nd = "_success_11t1p_86", rd = "_warning_11t1p_95", sd = "_danger_11t1p_104", od = "_content_11t1p_113", ld = "_title_11t1p_118", ad = "_description_11t1p_141", id = "_dismiss_11t1p_148", cd = "_actions_11t1p_169", dd = "_action_11t1p_169", ud = "_cancel_11t1p_177", fd = "_progress_11t1p_215", Ot = {
  viewport: Xc,
  topLeft: Yc,
  topRight: Zc,
  bottomLeft: Jc,
  toast: Qc,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: ed,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: td,
  success: nd,
  warning: rd,
  danger: sd,
  content: od,
  title: ld,
  description: ad,
  dismiss: id,
  actions: cd,
  action: dd,
  cancel: ud,
  progress: fd,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Fs = Cn(null);
function zk() {
  const e = on(Fs);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const _d = 200, hd = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Mk({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [c, d] = q([]), [s, i] = q(!1), a = Z([]), f = Z(/* @__PURE__ */ new Map()), u = Z(!1), b = Z(0), m = (w) => {
    u.current = w, i(w);
  }, g = R((w) => {
    const C = f.current.get(w);
    C && (window.clearTimeout(C.timeoutId), C.remaining = Math.max(
      0,
      C.remaining - (Date.now() - C.startedAt)
    ));
  }, []), p = R((w) => {
    const C = f.current.get(w);
    C && (window.clearTimeout(C.timeoutId), f.current.delete(w));
  }, []), y = R(
    (w) => {
      p(w), d((C) => {
        const T = C.filter((j) => j.id !== w);
        return a.current = T, T;
      });
    },
    [p]
  ), h = R(
    (w) => {
      const C = a.current.find((T) => T.id === w);
      !C || C.leaving || (C.onAutoClose?.(), y(w));
    },
    [y]
  ), _ = R(
    (w) => {
      const C = f.current.get(w);
      !C || C.remaining <= 0 || (C.startedAt = Date.now(), C.timeoutId = window.setTimeout(() => h(w), C.remaining));
    },
    [h]
  ), x = R(() => {
    u.current || f.current.forEach((w, C) => g(C)), m(!0);
  }, [g]), $ = R(() => {
    f.current.forEach((w, C) => _(C)), m(!1);
  }, [_]);
  ie(() => {
    if (!r) return;
    const w = () => {
      document.hidden ? x() : $();
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, [r, x, $]);
  const v = R(
    (w) => {
      const C = a.current.find((T) => T.id === w);
      !C || C.leaving || (C.onDismiss?.(), d((T) => {
        const j = T.map(
          (B) => B.id === w ? { ...B, leaving: !0 } : B
        );
        return a.current = j, j;
      }), window.setTimeout(() => y(w), _d));
    },
    [y]
  ), O = R(
    (w) => {
      if (w.durationMs <= 0) return;
      const C = {
        remaining: w.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(w.id, C), u.current || _(w.id);
    },
    [_]
  ), N = R(
    (w) => {
      const C = a.current.find((j) => j.id === w.id), T = {
        id: w.id ?? ++b.current,
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
      d((j) => {
        const B = C ? j.map(
          (L) => L.id === T.id ? { ...T, leaving: !1 } : L
        ) : [...j, T];
        return a.current = B, B;
      }), C && p(T.id), O(T);
    },
    [t, n, O, p]
  ), S = R(
    (w) => {
      N({
        severity: w.severity ?? "info",
        title: w.summary ?? w.summaryContent,
        description: w.detail ?? w.detailContent,
        durationMs: w.duration,
        click: w.click,
        closeOnClick: w.closeOnClick,
        payload: w.payload
      });
    },
    [N]
  ), M = R(
    (w) => (C, T) => S({ severity: w, summary: C, detail: T }),
    [S]
  ), D = be(
    () => ({
      toast: N,
      notify: S,
      notifyInfo: M("info"),
      notifySuccess: M("success"),
      notifyWarning: M("warning"),
      notifyError: M("danger")
    }),
    [N, S, M]
  ), E = be(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map((w) => w.position)])),
    [n, c]
  ), A = r ? x : void 0, k = r ? $ : void 0;
  return /* @__PURE__ */ z(Fs.Provider, { value: D, children: [
    e,
    E.map((w) => /* @__PURE__ */ o(
      "div",
      {
        className: [Ot.viewport, Ot[hd[w]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: A,
        onMouseLeave: k,
        children: c.filter((C) => C.position === w).map((C) => /* @__PURE__ */ z(
          "div",
          {
            role: C.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
            "data-clickable": C.closeOnClick ? "true" : "false",
            className: [
              Ot.toast,
              Ot[C.severity],
              C.leaving ? Ot.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: C.click || C.closeOnClick ? () => {
              C.click?.(C.payload), C.closeOnClick && v(C.id);
            } : void 0,
            children: [
              /* @__PURE__ */ z("div", { className: Ot.content, children: [
                /* @__PURE__ */ o("div", { className: Ot.title, children: C.title }),
                C.description && /* @__PURE__ */ o("div", { className: Ot.description, children: C.description }),
                (C.action || C.cancel) && /* @__PURE__ */ z("div", { className: Ot.actions, children: [
                  C.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.action,
                      onClick: () => {
                        C.action?.onClick?.(), v(C.id);
                      },
                      children: C.action.label
                    }
                  ),
                  C.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.cancel,
                      onClick: () => {
                        C.cancel?.onClick?.(), v(C.id);
                      },
                      children: C.cancel.label
                    }
                  )
                ] })
              ] }),
              C.dismissible && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ot.dismiss,
                  onClick: () => v(C.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              ),
              C.showProgress && C.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: Ot.progress,
                  style: { animationDuration: `${C.durationMs}ms` }
                }
              )
            ]
          },
          C.id
        ))
      },
      w
    ))
  ] });
}
const pd = "_popup_1dyq3_4", Hs = {
  popup: pd
}, qs = Cn(null);
function Ik() {
  const e = on(qs);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function cs(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function md({ state: e }) {
  const t = Z(null), [n, r] = q(null);
  return ie(() => {
    const l = t.current;
    if (!l) return;
    const c = e.anchor.getBoundingClientRect(), d = l.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(c.left, window.innerWidth - d.width)
    );
    let i = c.bottom + 4;
    i + d.height > window.innerHeight && c.top - 4 - d.height >= 0 && (i = c.top - 4 - d.height), r({ left: s, top: Math.max(0, i) });
  }, [e]), ie(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [Hs.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: cs(e.width),
        height: cs(e.height)
      },
      children: e.content
    }
  );
}
function Ak({ children: e }) {
  const [t, n] = q(null), r = Z(0), l = Z(null), c = R(() => {
    l.current?.(), l.current = null;
  }, []), d = R(() => {
    n((a) => a && (a.invoker && document.body.contains(a.invoker) && a.invoker.focus({ preventScroll: !0 }), c(), null));
  }, [c]), s = R(
    (a) => {
      r.current += 1;
      const f = r.current;
      l.current = a.onClose ?? null, n({
        ...a,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), a.onOpen?.();
      let u = !1;
      return () => {
        u || (u = !0, n((b) => b?.seq !== f ? b : (b.invoker && document.body.contains(b.invoker) && b.invoker.focus({ preventScroll: !0 }), c(), null)));
      };
    },
    [c]
  );
  ie(() => {
    if (!t) return;
    const a = (m) => {
      const g = document.querySelector(`.${Hs.popup}`);
      g && !g.contains(m.target) && d();
    }, f = (m) => {
      m.key === "Escape" && (m.preventDefault(), d());
    }, u = () => d(), b = () => d();
    return document.addEventListener("pointerdown", a, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", b), () => {
      document.removeEventListener("pointerdown", a, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", b);
    };
  }, [t, d]);
  const i = be(
    () => ({ open: s, close: d, isOpen: t != null }),
    [s, d, t]
  );
  return /* @__PURE__ */ z(qs.Provider, { value: i, children: [
    e,
    t && /* @__PURE__ */ o(md, { state: t }, t.seq)
  ] });
}
const gd = "_alert_146r9_1", bd = "_xs_146r9_28", yd = "_sm_146r9_38", xd = "_lg_146r9_48", vd = "_xl_146r9_58", kd = "_primary_146r9_69", wd = "_secondary_146r9_74", $d = "_light_146r9_79", Nd = "_base_146r9_84", Od = "_dark_146r9_89", Sd = "_info_146r9_94", Cd = "_success_146r9_99", Dd = "_warning_146r9_104", Ed = "_danger_146r9_109", zd = "_flat_146r9_116", Md = "_outlined_146r9_123", Id = "_filled_146r9_132", Ad = "_text_146r9_139", jd = "_icon_146r9_181", Td = "_content_146r9_192", Pd = "_title_146r9_197", Ld = "_body_146r9_203", Rd = "_dismiss_146r9_209", Ut = {
  alert: gd,
  xs: bd,
  sm: yd,
  lg: xd,
  xl: vd,
  primary: kd,
  secondary: wd,
  light: $d,
  base: Nd,
  dark: Od,
  info: Sd,
  success: Cd,
  warning: Dd,
  danger: Ed,
  flat: zd,
  outlined: Md,
  filled: Id,
  text: Ad,
  icon: jd,
  content: Td,
  title: Pd,
  body: Ld,
  dismiss: Rd,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, Bd = {
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
function jk({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: c,
  showIcon: d = !0,
  children: s,
  dismissible: i = !0,
  onDismiss: a,
  visible: f,
  onVisibleChange: u,
  className: b,
  ...m
}) {
  const [g, p] = q(!1);
  if (f === !1 || f === void 0 && g)
    return null;
  const y = () => {
    f === void 0 && p(!0), a?.(), u?.(!1);
  }, h = e, _ = As(t, "filled"), x = or(n), $ = c ?? (d ? /* @__PURE__ */ o(ke, { icon: Bd[e] }) : null);
  return /* @__PURE__ */ z(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        Ut.alert,
        Ut[h],
        Ut[_],
        x ? Ut[x] : null,
        Ut[r],
        b
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ o("span", { className: Ut.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ z("div", { className: Ut.content, children: [
          l && /* @__PURE__ */ o("div", { className: Ut.title, children: l }),
          s && /* @__PURE__ */ o("div", { className: Ut.body, children: s })
        ] }),
        i && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ut.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Fd = "_skeleton_1xyce_1", Hd = "_text_1xyce_35", qd = "_circle_1xyce_40", Kd = "_rect_1xyce_44", ds = {
  skeleton: Fd,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: Hd,
  circle: qd,
  rect: Kd
};
function Tk({
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
      className: [ds.skeleton, ds[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function xr(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const Wd = "_row_juebr_1", Ud = "_start_juebr_14", Vd = "_center_juebr_18", Gd = "_end_juebr_22", Xd = "_stretch_juebr_26", Yd = "_baseline_juebr_30", Zd = "_normal_juebr_34", Jd = "_noWrap_juebr_90", Qd = "_wrapReverse_juebr_94", cr = {
  row: Wd,
  start: Ud,
  center: Vd,
  end: Gd,
  stretch: Xd,
  baseline: Yd,
  normal: Zd,
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
  noWrap: Jd,
  wrapReverse: Qd
};
function us(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Pk({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: c,
  style: d,
  ...s
}) {
  const i = e != null ? xr(e) : null, a = t != null ? xr(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...i ? {
      columnGap: i,
      "--dx-col-gap": i
    } : {},
    ...a ? { rowGap: a } : {},
    ...d
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        cr.row,
        cr[n],
        cr[`justify-${r}`],
        us(l) != null ? cr[us(l)] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const eu = "_column_sh0ss_1", tu = "_Size1_sh0ss_15", nu = "_Size2_sh0ss_24", ru = "_Size3_sh0ss_33", su = "_Size4_sh0ss_42", ou = "_Size5_sh0ss_51", lu = "_Size6_sh0ss_60", au = "_Size7_sh0ss_69", iu = "_Size8_sh0ss_78", cu = "_Size9_sh0ss_87", du = "_Size10_sh0ss_96", uu = "_Size11_sh0ss_105", fu = "_Size12_sh0ss_114", _u = "_Offset0_sh0ss_119", hu = "_Offset1_sh0ss_122", pu = "_Offset2_sh0ss_127", mu = "_Offset3_sh0ss_132", gu = "_Offset4_sh0ss_137", bu = "_Offset5_sh0ss_142", yu = "_Offset6_sh0ss_147", xu = "_Offset7_sh0ss_152", vu = "_Offset8_sh0ss_157", ku = "_Offset9_sh0ss_162", wu = "_Offset10_sh0ss_167", $u = "_Offset11_sh0ss_172", Nu = "_Offset12_sh0ss_177", Ou = "_OrderFirst_sh0ss_182", Su = "_OrderLast_sh0ss_185", Cu = "_Order0_sh0ss_188", Du = "_Order1_sh0ss_191", Eu = "_Order2_sh0ss_194", zu = "_Order3_sh0ss_197", Mu = "_Order4_sh0ss_200", Iu = "_Order5_sh0ss_203", Au = "_Order6_sh0ss_206", ju = "_Order7_sh0ss_209", Tu = "_Order8_sh0ss_212", Pu = "_Order9_sh0ss_215", Lu = "_Order10_sh0ss_218", Ru = "_Order11_sh0ss_221", Bu = "_Order12_sh0ss_224", Fu = "_xsSize1_sh0ss_229", Hu = "_xsSize2_sh0ss_238", qu = "_xsSize3_sh0ss_247", Ku = "_xsSize4_sh0ss_256", Wu = "_xsSize5_sh0ss_265", Uu = "_xsSize6_sh0ss_274", Vu = "_xsSize7_sh0ss_283", Gu = "_xsSize8_sh0ss_292", Xu = "_xsSize9_sh0ss_301", Yu = "_xsSize10_sh0ss_310", Zu = "_xsSize11_sh0ss_321", Ju = "_xsSize12_sh0ss_332", Qu = "_xsOffset0_sh0ss_337", ef = "_xsOffset1_sh0ss_340", tf = "_xsOffset2_sh0ss_345", nf = "_xsOffset3_sh0ss_350", rf = "_xsOffset4_sh0ss_355", sf = "_xsOffset5_sh0ss_360", of = "_xsOffset6_sh0ss_365", lf = "_xsOffset7_sh0ss_370", af = "_xsOffset8_sh0ss_375", cf = "_xsOffset9_sh0ss_380", df = "_xsOffset10_sh0ss_385", uf = "_xsOffset11_sh0ss_391", ff = "_xsOffset12_sh0ss_397", _f = "_xsOrderFirst_sh0ss_403", hf = "_xsOrderLast_sh0ss_406", pf = "_xsOrder0_sh0ss_409", mf = "_xsOrder1_sh0ss_412", gf = "_xsOrder2_sh0ss_415", bf = "_xsOrder3_sh0ss_418", yf = "_xsOrder4_sh0ss_421", xf = "_xsOrder5_sh0ss_424", vf = "_xsOrder6_sh0ss_427", kf = "_xsOrder7_sh0ss_430", wf = "_xsOrder8_sh0ss_433", $f = "_xsOrder9_sh0ss_436", Nf = "_xsOrder10_sh0ss_439", Of = "_xsOrder11_sh0ss_442", Sf = "_xsOrder12_sh0ss_445", Cf = "_smSize1_sh0ss_451", Df = "_smSize2_sh0ss_460", Ef = "_smSize3_sh0ss_469", zf = "_smSize4_sh0ss_478", Mf = "_smSize5_sh0ss_487", If = "_smSize6_sh0ss_496", Af = "_smSize7_sh0ss_505", jf = "_smSize8_sh0ss_514", Tf = "_smSize9_sh0ss_523", Pf = "_smSize10_sh0ss_532", Lf = "_smSize11_sh0ss_543", Rf = "_smSize12_sh0ss_554", Bf = "_smOffset0_sh0ss_559", Ff = "_smOffset1_sh0ss_562", Hf = "_smOffset2_sh0ss_567", qf = "_smOffset3_sh0ss_572", Kf = "_smOffset4_sh0ss_577", Wf = "_smOffset5_sh0ss_582", Uf = "_smOffset6_sh0ss_587", Vf = "_smOffset7_sh0ss_592", Gf = "_smOffset8_sh0ss_597", Xf = "_smOffset9_sh0ss_602", Yf = "_smOffset10_sh0ss_607", Zf = "_smOffset11_sh0ss_613", Jf = "_smOffset12_sh0ss_619", Qf = "_smOrderFirst_sh0ss_625", e_ = "_smOrderLast_sh0ss_628", t_ = "_smOrder0_sh0ss_631", n_ = "_smOrder1_sh0ss_634", r_ = "_smOrder2_sh0ss_637", s_ = "_smOrder3_sh0ss_640", o_ = "_smOrder4_sh0ss_643", l_ = "_smOrder5_sh0ss_646", a_ = "_smOrder6_sh0ss_649", i_ = "_smOrder7_sh0ss_652", c_ = "_smOrder8_sh0ss_655", d_ = "_smOrder9_sh0ss_658", u_ = "_smOrder10_sh0ss_661", f_ = "_smOrder11_sh0ss_664", __ = "_smOrder12_sh0ss_667", h_ = "_mdSize1_sh0ss_673", p_ = "_mdSize2_sh0ss_682", m_ = "_mdSize3_sh0ss_691", g_ = "_mdSize4_sh0ss_700", b_ = "_mdSize5_sh0ss_709", y_ = "_mdSize6_sh0ss_718", x_ = "_mdSize7_sh0ss_727", v_ = "_mdSize8_sh0ss_736", k_ = "_mdSize9_sh0ss_745", w_ = "_mdSize10_sh0ss_754", $_ = "_mdSize11_sh0ss_765", N_ = "_mdSize12_sh0ss_776", O_ = "_mdOffset0_sh0ss_781", S_ = "_mdOffset1_sh0ss_784", C_ = "_mdOffset2_sh0ss_789", D_ = "_mdOffset3_sh0ss_794", E_ = "_mdOffset4_sh0ss_799", z_ = "_mdOffset5_sh0ss_804", M_ = "_mdOffset6_sh0ss_809", I_ = "_mdOffset7_sh0ss_814", A_ = "_mdOffset8_sh0ss_819", j_ = "_mdOffset9_sh0ss_824", T_ = "_mdOffset10_sh0ss_829", P_ = "_mdOffset11_sh0ss_835", L_ = "_mdOffset12_sh0ss_841", R_ = "_mdOrderFirst_sh0ss_847", B_ = "_mdOrderLast_sh0ss_850", F_ = "_mdOrder0_sh0ss_853", H_ = "_mdOrder1_sh0ss_856", q_ = "_mdOrder2_sh0ss_859", K_ = "_mdOrder3_sh0ss_862", W_ = "_mdOrder4_sh0ss_865", U_ = "_mdOrder5_sh0ss_868", V_ = "_mdOrder6_sh0ss_871", G_ = "_mdOrder7_sh0ss_874", X_ = "_mdOrder8_sh0ss_877", Y_ = "_mdOrder9_sh0ss_880", Z_ = "_mdOrder10_sh0ss_883", J_ = "_mdOrder11_sh0ss_886", Q_ = "_mdOrder12_sh0ss_889", eh = "_lgSize1_sh0ss_895", th = "_lgSize2_sh0ss_904", nh = "_lgSize3_sh0ss_913", rh = "_lgSize4_sh0ss_922", sh = "_lgSize5_sh0ss_931", oh = "_lgSize6_sh0ss_940", lh = "_lgSize7_sh0ss_949", ah = "_lgSize8_sh0ss_958", ih = "_lgSize9_sh0ss_967", ch = "_lgSize10_sh0ss_976", dh = "_lgSize11_sh0ss_987", uh = "_lgSize12_sh0ss_998", fh = "_lgOffset0_sh0ss_1003", _h = "_lgOffset1_sh0ss_1006", hh = "_lgOffset2_sh0ss_1011", ph = "_lgOffset3_sh0ss_1016", mh = "_lgOffset4_sh0ss_1021", gh = "_lgOffset5_sh0ss_1026", bh = "_lgOffset6_sh0ss_1031", yh = "_lgOffset7_sh0ss_1036", xh = "_lgOffset8_sh0ss_1041", vh = "_lgOffset9_sh0ss_1046", kh = "_lgOffset10_sh0ss_1051", wh = "_lgOffset11_sh0ss_1057", $h = "_lgOffset12_sh0ss_1063", Nh = "_lgOrderFirst_sh0ss_1069", Oh = "_lgOrderLast_sh0ss_1072", Sh = "_lgOrder0_sh0ss_1075", Ch = "_lgOrder1_sh0ss_1078", Dh = "_lgOrder2_sh0ss_1081", Eh = "_lgOrder3_sh0ss_1084", zh = "_lgOrder4_sh0ss_1087", Mh = "_lgOrder5_sh0ss_1090", Ih = "_lgOrder6_sh0ss_1093", Ah = "_lgOrder7_sh0ss_1096", jh = "_lgOrder8_sh0ss_1099", Th = "_lgOrder9_sh0ss_1102", Ph = "_lgOrder10_sh0ss_1105", Lh = "_lgOrder11_sh0ss_1108", Rh = "_lgOrder12_sh0ss_1111", Bh = "_xlSize1_sh0ss_1117", Fh = "_xlSize2_sh0ss_1126", Hh = "_xlSize3_sh0ss_1135", qh = "_xlSize4_sh0ss_1144", Kh = "_xlSize5_sh0ss_1153", Wh = "_xlSize6_sh0ss_1162", Uh = "_xlSize7_sh0ss_1171", Vh = "_xlSize8_sh0ss_1180", Gh = "_xlSize9_sh0ss_1189", Xh = "_xlSize10_sh0ss_1198", Yh = "_xlSize11_sh0ss_1209", Zh = "_xlSize12_sh0ss_1220", Jh = "_xlOffset0_sh0ss_1225", Qh = "_xlOffset1_sh0ss_1228", ep = "_xlOffset2_sh0ss_1233", tp = "_xlOffset3_sh0ss_1238", np = "_xlOffset4_sh0ss_1243", rp = "_xlOffset5_sh0ss_1248", sp = "_xlOffset6_sh0ss_1253", op = "_xlOffset7_sh0ss_1258", lp = "_xlOffset8_sh0ss_1263", ap = "_xlOffset9_sh0ss_1268", ip = "_xlOffset10_sh0ss_1273", cp = "_xlOffset11_sh0ss_1279", dp = "_xlOffset12_sh0ss_1285", up = "_xlOrderFirst_sh0ss_1291", fp = "_xlOrderLast_sh0ss_1294", _p = "_xlOrder0_sh0ss_1297", hp = "_xlOrder1_sh0ss_1300", pp = "_xlOrder2_sh0ss_1303", mp = "_xlOrder3_sh0ss_1306", gp = "_xlOrder4_sh0ss_1309", bp = "_xlOrder5_sh0ss_1312", yp = "_xlOrder6_sh0ss_1315", xp = "_xlOrder7_sh0ss_1318", vp = "_xlOrder8_sh0ss_1321", kp = "_xlOrder9_sh0ss_1324", wp = "_xlOrder10_sh0ss_1327", $p = "_xlOrder11_sh0ss_1330", Np = "_xlOrder12_sh0ss_1333", Op = "_xxSize1_sh0ss_1339", Sp = "_xxSize2_sh0ss_1348", Cp = "_xxSize3_sh0ss_1357", Dp = "_xxSize4_sh0ss_1366", Ep = "_xxSize5_sh0ss_1375", zp = "_xxSize6_sh0ss_1384", Mp = "_xxSize7_sh0ss_1393", Ip = "_xxSize8_sh0ss_1402", Ap = "_xxSize9_sh0ss_1411", jp = "_xxSize10_sh0ss_1420", Tp = "_xxSize11_sh0ss_1431", Pp = "_xxSize12_sh0ss_1442", Lp = "_xxOffset0_sh0ss_1447", Rp = "_xxOffset1_sh0ss_1450", Bp = "_xxOffset2_sh0ss_1455", Fp = "_xxOffset3_sh0ss_1460", Hp = "_xxOffset4_sh0ss_1465", qp = "_xxOffset5_sh0ss_1470", Kp = "_xxOffset6_sh0ss_1475", Wp = "_xxOffset7_sh0ss_1480", Up = "_xxOffset8_sh0ss_1485", Vp = "_xxOffset9_sh0ss_1490", Gp = "_xxOffset10_sh0ss_1495", Xp = "_xxOffset11_sh0ss_1501", Yp = "_xxOffset12_sh0ss_1507", Zp = "_xxOrderFirst_sh0ss_1513", Jp = "_xxOrderLast_sh0ss_1516", Qp = "_xxOrder0_sh0ss_1519", em = "_xxOrder1_sh0ss_1522", tm = "_xxOrder2_sh0ss_1525", nm = "_xxOrder3_sh0ss_1528", rm = "_xxOrder4_sh0ss_1531", sm = "_xxOrder5_sh0ss_1534", om = "_xxOrder6_sh0ss_1537", lm = "_xxOrder7_sh0ss_1540", am = "_xxOrder8_sh0ss_1543", im = "_xxOrder9_sh0ss_1546", cm = "_xxOrder10_sh0ss_1549", dm = "_xxOrder11_sh0ss_1552", um = "_xxOrder12_sh0ss_1555", dr = {
  column: eu,
  Size1: tu,
  Size2: nu,
  Size3: ru,
  Size4: su,
  Size5: ou,
  Size6: lu,
  Size7: au,
  Size8: iu,
  Size9: cu,
  Size10: du,
  Size11: uu,
  Size12: fu,
  Offset0: _u,
  Offset1: hu,
  Offset2: pu,
  Offset3: mu,
  Offset4: gu,
  Offset5: bu,
  Offset6: yu,
  Offset7: xu,
  Offset8: vu,
  Offset9: ku,
  Offset10: wu,
  Offset11: $u,
  Offset12: Nu,
  OrderFirst: Ou,
  OrderLast: Su,
  Order0: Cu,
  Order1: Du,
  Order2: Eu,
  Order3: zu,
  Order4: Mu,
  Order5: Iu,
  Order6: Au,
  Order7: ju,
  Order8: Tu,
  Order9: Pu,
  Order10: Lu,
  Order11: Ru,
  Order12: Bu,
  xsSize1: Fu,
  xsSize2: Hu,
  xsSize3: qu,
  xsSize4: Ku,
  xsSize5: Wu,
  xsSize6: Uu,
  xsSize7: Vu,
  xsSize8: Gu,
  xsSize9: Xu,
  xsSize10: Yu,
  xsSize11: Zu,
  xsSize12: Ju,
  xsOffset0: Qu,
  xsOffset1: ef,
  xsOffset2: tf,
  xsOffset3: nf,
  xsOffset4: rf,
  xsOffset5: sf,
  xsOffset6: of,
  xsOffset7: lf,
  xsOffset8: af,
  xsOffset9: cf,
  xsOffset10: df,
  xsOffset11: uf,
  xsOffset12: ff,
  xsOrderFirst: _f,
  xsOrderLast: hf,
  xsOrder0: pf,
  xsOrder1: mf,
  xsOrder2: gf,
  xsOrder3: bf,
  xsOrder4: yf,
  xsOrder5: xf,
  xsOrder6: vf,
  xsOrder7: kf,
  xsOrder8: wf,
  xsOrder9: $f,
  xsOrder10: Nf,
  xsOrder11: Of,
  xsOrder12: Sf,
  smSize1: Cf,
  smSize2: Df,
  smSize3: Ef,
  smSize4: zf,
  smSize5: Mf,
  smSize6: If,
  smSize7: Af,
  smSize8: jf,
  smSize9: Tf,
  smSize10: Pf,
  smSize11: Lf,
  smSize12: Rf,
  smOffset0: Bf,
  smOffset1: Ff,
  smOffset2: Hf,
  smOffset3: qf,
  smOffset4: Kf,
  smOffset5: Wf,
  smOffset6: Uf,
  smOffset7: Vf,
  smOffset8: Gf,
  smOffset9: Xf,
  smOffset10: Yf,
  smOffset11: Zf,
  smOffset12: Jf,
  smOrderFirst: Qf,
  smOrderLast: e_,
  smOrder0: t_,
  smOrder1: n_,
  smOrder2: r_,
  smOrder3: s_,
  smOrder4: o_,
  smOrder5: l_,
  smOrder6: a_,
  smOrder7: i_,
  smOrder8: c_,
  smOrder9: d_,
  smOrder10: u_,
  smOrder11: f_,
  smOrder12: __,
  mdSize1: h_,
  mdSize2: p_,
  mdSize3: m_,
  mdSize4: g_,
  mdSize5: b_,
  mdSize6: y_,
  mdSize7: x_,
  mdSize8: v_,
  mdSize9: k_,
  mdSize10: w_,
  mdSize11: $_,
  mdSize12: N_,
  mdOffset0: O_,
  mdOffset1: S_,
  mdOffset2: C_,
  mdOffset3: D_,
  mdOffset4: E_,
  mdOffset5: z_,
  mdOffset6: M_,
  mdOffset7: I_,
  mdOffset8: A_,
  mdOffset9: j_,
  mdOffset10: T_,
  mdOffset11: P_,
  mdOffset12: L_,
  mdOrderFirst: R_,
  mdOrderLast: B_,
  mdOrder0: F_,
  mdOrder1: H_,
  mdOrder2: q_,
  mdOrder3: K_,
  mdOrder4: W_,
  mdOrder5: U_,
  mdOrder6: V_,
  mdOrder7: G_,
  mdOrder8: X_,
  mdOrder9: Y_,
  mdOrder10: Z_,
  mdOrder11: J_,
  mdOrder12: Q_,
  lgSize1: eh,
  lgSize2: th,
  lgSize3: nh,
  lgSize4: rh,
  lgSize5: sh,
  lgSize6: oh,
  lgSize7: lh,
  lgSize8: ah,
  lgSize9: ih,
  lgSize10: ch,
  lgSize11: dh,
  lgSize12: uh,
  lgOffset0: fh,
  lgOffset1: _h,
  lgOffset2: hh,
  lgOffset3: ph,
  lgOffset4: mh,
  lgOffset5: gh,
  lgOffset6: bh,
  lgOffset7: yh,
  lgOffset8: xh,
  lgOffset9: vh,
  lgOffset10: kh,
  lgOffset11: wh,
  lgOffset12: $h,
  lgOrderFirst: Nh,
  lgOrderLast: Oh,
  lgOrder0: Sh,
  lgOrder1: Ch,
  lgOrder2: Dh,
  lgOrder3: Eh,
  lgOrder4: zh,
  lgOrder5: Mh,
  lgOrder6: Ih,
  lgOrder7: Ah,
  lgOrder8: jh,
  lgOrder9: Th,
  lgOrder10: Ph,
  lgOrder11: Lh,
  lgOrder12: Rh,
  xlSize1: Bh,
  xlSize2: Fh,
  xlSize3: Hh,
  xlSize4: qh,
  xlSize5: Kh,
  xlSize6: Wh,
  xlSize7: Uh,
  xlSize8: Vh,
  xlSize9: Gh,
  xlSize10: Xh,
  xlSize11: Yh,
  xlSize12: Zh,
  xlOffset0: Jh,
  xlOffset1: Qh,
  xlOffset2: ep,
  xlOffset3: tp,
  xlOffset4: np,
  xlOffset5: rp,
  xlOffset6: sp,
  xlOffset7: op,
  xlOffset8: lp,
  xlOffset9: ap,
  xlOffset10: ip,
  xlOffset11: cp,
  xlOffset12: dp,
  xlOrderFirst: up,
  xlOrderLast: fp,
  xlOrder0: _p,
  xlOrder1: hp,
  xlOrder2: pp,
  xlOrder3: mp,
  xlOrder4: gp,
  xlOrder5: bp,
  xlOrder6: yp,
  xlOrder7: xp,
  xlOrder8: vp,
  xlOrder9: kp,
  xlOrder10: wp,
  xlOrder11: $p,
  xlOrder12: Np,
  xxSize1: Op,
  xxSize2: Sp,
  xxSize3: Cp,
  xxSize4: Dp,
  xxSize5: Ep,
  xxSize6: zp,
  xxSize7: Mp,
  xxSize8: Ip,
  xxSize9: Ap,
  xxSize10: jp,
  xxSize11: Tp,
  xxSize12: Pp,
  xxOffset0: Lp,
  xxOffset1: Rp,
  xxOffset2: Bp,
  xxOffset3: Fp,
  xxOffset4: Hp,
  xxOffset5: qp,
  xxOffset6: Kp,
  xxOffset7: Wp,
  xxOffset8: Up,
  xxOffset9: Vp,
  xxOffset10: Gp,
  xxOffset11: Xp,
  xxOffset12: Yp,
  xxOrderFirst: Zp,
  xxOrderLast: Jp,
  xxOrder0: Qp,
  xxOrder1: em,
  xxOrder2: tm,
  xxOrder3: nm,
  xxOrder4: rm,
  xxOrder5: sm,
  xxOrder6: om,
  xxOrder7: lm,
  xxOrder8: am,
  xxOrder9: im,
  xxOrder10: cm,
  xxOrder11: dm,
  xxOrder12: um
}, fm = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function _m(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function hm(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function pm(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function mm(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (pm(n, t), `${e}Order${t}`);
}
function Lk({ className: e, style: t, ...n }) {
  const r = [dr.column], l = { ...t };
  for (const [E, A, k, w] of fm) {
    const C = n[A], T = n[k], j = n[w];
    if (C != null) {
      _m(A, C);
      const B = dr[`${E}Size${C}`];
      B && r.push(B);
    }
    if (T != null) {
      hm(k, T);
      const B = dr[`${E}Offset${T}`];
      B && r.push(B);
    }
    if (j != null) {
      const B = dr[mm(E, j, w)];
      B && r.push(B);
    }
  }
  const {
    size: c,
    offset: d,
    sizeXs: s,
    offsetXs: i,
    sizeSm: a,
    offsetSm: f,
    sizeMd: u,
    offsetMd: b,
    sizeLg: m,
    offsetLg: g,
    sizeXl: p,
    offsetXl: y,
    sizeXx: h,
    offsetXx: _,
    order: x,
    orderXs: $,
    orderSm: v,
    orderMd: O,
    orderLg: N,
    orderXl: S,
    orderXx: M,
    ...D
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...D
    }
  );
}
const gm = "_stack_bmbbp_1", Xn = {
  stack: gm,
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
function fs(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Rk({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: l,
  justify: c,
  className: d,
  style: s,
  ...i
}) {
  const a = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: xr(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Xn.stack,
        Xn[`dir-${a}`],
        fs(n) !== "wrap" ? Xn[`wrap-${fs(n)}`] : null,
        l != null ? Xn[`align-${l}`] : null,
        c != null ? Xn[`justify-${c}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const bm = "_autogrid_16x9f_1", ym = {
  autogrid: bm
};
function Bk({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: l = !0,
  ...c
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: xr(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [ym.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...c
    }
  );
}
const xm = "_layout_fxvw1_1", vm = "_row_fxvw1_7", km = "_grid_fxvw1_21", wm = "_gridRight_fxvw1_27", $m = "_gridHeader_fxvw1_31", Nm = "_gridFooter_fxvw1_36", Om = "_gridContents_fxvw1_41", Sm = "_gridBody_fxvw1_45", Jt = {
  layout: xm,
  row: vm,
  grid: km,
  gridRight: wm,
  gridHeader: $m,
  gridFooter: Nm,
  gridContents: Om,
  gridBody: Sm
}, Cm = "_footer_3be5w_1", Dm = "_sticky_3be5w_9", _s = {
  footer: Cm,
  sticky: Dm
};
function Em({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [_s.footer, e ? _s.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const zm = "_header_1tw8b_1", Mm = "_sticky_1tw8b_9", hs = {
  header: zm,
  sticky: Mm
};
function Im({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [hs.header, e ? hs.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Am = "_sidebar_175d5_1", jm = "_sticky_175d5_23", Tm = "_left_175d5_41", Pm = "_right_175d5_45", Lm = "_start_175d5_50", Rm = "_end_175d5_54", Bm = "_fullHeight_175d5_60", Fm = "_collapsed_175d5_64", Hm = "_responsive_175d5_72", qm = "_overlay_175d5_80", Km = "_mask_175d5_108", un = {
  sidebar: Am,
  sticky: jm,
  left: Tm,
  right: Pm,
  start: Lm,
  end: Rm,
  fullHeight: Bm,
  collapsed: Fm,
  responsive: Hm,
  overlay: qm,
  mask: Km
};
function Wm({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: c = !1,
  onClose: d,
  className: s,
  children: i,
  ...a
}) {
  return ie(() => {
    if (!r || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ z(tt, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${un.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          un.sidebar,
          un[e],
          t ? null : un.collapsed,
          n ? un.responsive : null,
          r ? [un.overlay, "se-sidebar--overlay"] : null,
          l ? un.fullHeight : null,
          c && !r && !l ? un.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: i
      }
    )
  ] });
}
function Fk(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(tt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], c = [], d = [], s = [], i = [], a = [];
  lr.forEach(n, (b) => {
    if (!gt(b)) {
      d.push(b);
      return;
    }
    if (b.type === Im)
      l.push(b);
    else if (b.type === Em)
      c.push(b);
    else if (b.type === Wm) {
      const m = b, g = m.props.position;
      a.push(m), (g === "right" || g === "end" ? i : s).push(m);
    } else
      d.push(b);
  });
  const f = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const b = u ? i : s;
    return /* @__PURE__ */ z(
      "div",
      {
        className: [
          Jt.layout,
          Jt.grid,
          u ? Jt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          l.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridHeader, children: l }),
          /* @__PURE__ */ z("div", { className: Jt.gridContents, children: [
            b,
            /* @__PURE__ */ o("div", { className: Jt.gridBody, children: d })
          ] }),
          c.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Jt.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        l,
        /* @__PURE__ */ z("div", { className: Jt.row, children: [
          s,
          d,
          i
        ] }),
        c
      ]
    }
  );
}
const Um = "_body_1ge00_4", Vm = "_bare_1ge00_12", ps = {
  body: Um,
  bare: Vm
};
function Hk({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [ps.body, t ? null : ps.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const Gm = "_toggle_lxnk5_1", Xm = {
  toggle: Gm
};
function qk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...c
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [Xm.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: l ?? /* @__PURE__ */ o(ke, { icon: e, size: 20 })
    }
  );
}
const Ym = "_track_14127_1", Zm = "_bar_14127_31", Jm = "_primary_14127_39", Qm = "_success_14127_43", e1 = "_warning_14127_47", t1 = "_danger_14127_51", n1 = "_indeterminate_14127_149", r1 = "_circular_14127_163", s1 = "_fill_14127_203", St = {
  track: Ym,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Zm,
  primary: Jm,
  success: Qm,
  warning: e1,
  danger: t1,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: n1,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: r1,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: s1,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function Kk({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: c = "linear",
  size: d = "md",
  className: s,
  visible: i = !0,
  ...a
}) {
  if (i === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (c === "circular") {
    const m = typeof d == "string", g = 2, p = 10.5, y = 2 * Math.PI * p, h = y * (l ? 0.75 : 1), _ = l ? 0 : y * (1 - u / 100), x = or(r);
    return /* @__PURE__ */ z(
      "svg",
      {
        width: m ? void 0 : d,
        height: m ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          St.circular,
          St[n],
          x ? St[x] : null,
          m ? St[`circular-${d}`] : null,
          l ? St.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: St.track,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: g
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: St.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: g,
              strokeDasharray: `${h} ${y}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const b = or(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        St.track,
        St[n],
        b ? St[b] : null,
        typeof d == "string" ? St[`linear-${d}`] : null,
        l ? St.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: St.bar,
          style: l ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const o1 = "_wrapper_tk30z_1", l1 = {
  wrapper: o1
}, a1 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Ks = "dx-palette", i1 = "data-palette";
function c1(e, t) {
  const n = e === void 0 ? Ks : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function d1(e, t) {
  const n = e === void 0 ? Ks : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Wk({
  themes: e = a1,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = i1,
  onChange: c,
  label: d = "Theme",
  placeholder: s = "Theme…",
  id: i,
  size: a = "md",
  className: f
}) {
  const [u, b] = q(void 0), m = t !== void 0, g = t ?? u ?? c1(r, e) ?? n, p = g ?? "", y = Z(void 0);
  ie(() => {
    if (m) return;
    const _ = document.documentElement;
    if (g === void 0) {
      y.current !== void 0 && _.getAttribute(l) === y.current && (_.removeAttribute(l), y.current = void 0);
      return;
    }
    _.setAttribute(l, g), y.current = g;
  }, [g, l, m]);
  const h = (_) => {
    const x = _.target.value;
    m || (b(x), d1(r, x)), c?.(x);
  };
  return /* @__PURE__ */ z("label", { className: [l1.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ z(Sn, { id: i, size: a, value: p, onChange: h, children: [
      g === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      g !== void 0 && !e.includes(g) && /* @__PURE__ */ o("option", { value: g, children: g }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function u1(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Wr(e) {
  const [t, n] = q(() => u1(e));
  return ie(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (c) => n(c.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const f1 = "_pressed_12x15_8", _1 = {
  pressed: f1
}, h1 = Le(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: l,
    toggleSeverity: c = "primary",
    toggleShade: d = "darker",
    toggleContent: s,
    size: i = "md",
    className: a,
    onClick: f,
    children: u,
    variant: b,
    severity: m,
    shade: g,
    ...p
  }, y) {
    const [h, _] = q(n), x = t ?? h, $ = (v) => {
      const O = !x;
      t === void 0 && _(O), r?.(O), f?.(v);
    };
    return /* @__PURE__ */ o(
      On,
      {
        ...p,
        ref: y,
        variant: x && l ? l : b,
        severity: x ? c : m,
        shade: x ? d : g,
        size: i,
        "aria-pressed": x,
        className: [x ? _1.pressed : null, a].filter(Boolean).join(" "),
        onClick: $,
        children: x && s !== void 0 ? s : u
      }
    );
  }
), Ws = "dx-theme";
function p1(e) {
  const t = e === void 0 ? Ws : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function m1(e, t) {
  const n = e === void 0 ? Ws : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Uk({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: c,
  className: d,
  size: s
}) {
  const i = Wr("(prefers-color-scheme: dark)"), [a, f] = q(void 0), u = e !== void 0, b = e ?? a ?? p1(n) ?? t ?? "system", m = b === "system" ? i ? "dark" : "light" : b;
  return ie(() => {
    if (!u) {
      if (b === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = b;
    }
  }, [b, u]), /* @__PURE__ */ o(
    h1,
    {
      id: c,
      size: s,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: m === "dark",
      onChange: (p) => {
        const y = p ? "dark" : "light";
        u || (f(y), m1(n, y)), r?.(y);
      },
      toggleContent: /* @__PURE__ */ o(ke, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(ke, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Us = "dx-palette", Vs = "dx-theme", Ir = "data-palette", Ar = "data-theme", jr = /* @__PURE__ */ new Set();
function g1() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Ir), t = document.documentElement.getAttribute(Ar);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function Ur(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Ir) : document.documentElement.setAttribute(Ir, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Ar) : document.documentElement.setAttribute(Ar, e.appearance));
}
function Gs(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function ms(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let gs = !1;
function Rn() {
  const e = g1();
  if (!gs) {
    gs = !0;
    const t = ms(Us), n = ms(Vs), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && Ur(l), l;
  }
  return e;
}
function Xs() {
  const e = Rn();
  jr.forEach((t) => t({ ...e }));
}
function bs(e) {
  return jr.add(e), () => {
    jr.delete(e);
  };
}
function Vk() {
  return Rn().theme;
}
function b1(e) {
  const t = Rn();
  t.theme !== e && (t.theme = e, Ur(t), Gs(Us, e), Xs());
}
function Gk() {
  return Rn().appearance;
}
function y1(e) {
  const t = Rn();
  t.appearance !== e && (t.appearance = e, Ur(t), Gs(Vs, e), Xs());
}
function Xk() {
  const [, e] = q(0);
  ie(() => bs(() => e((n) => n + 1)), []);
  const t = Rn();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: b1,
    setAppearance: y1,
    subscribe: bs
  };
}
function x1(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const c = new DataView(l.buffer);
  c.setUint32(r - 8, n >>> 0, !0), c.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (p, y) => Math.floor(Math.abs(Math.sin(y + 1)) * 4294967296)
  ), i = (p, y) => p + y | 0, a = (p, y) => p << y | p >>> 32 - y;
  let f = 1732584193, u = 4023233417, b = 2562383102, m = 271733878;
  for (let p = 0; p < r; p += 64) {
    const y = [];
    for (let v = 0; v < 16; v += 1)
      y.push(c.getUint32(p + v * 4, !0));
    let h = f, _ = u, x = b, $ = m;
    for (let v = 0; v < 64; v += 1) {
      let O, N;
      v < 16 ? (O = _ & x | ~_ & $, N = v) : v < 32 ? (O = $ & _ | ~$ & x, N = (5 * v + 1) % 16) : v < 48 ? (O = _ ^ x ^ $, N = (3 * v + 5) % 16) : (O = x ^ (_ | ~$), N = 7 * v % 16), O = i(i(i(O, h), s[v]), y[N]), h = $, $ = x, x = _, _ = i(_, a(O, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = i(f, h), u = i(u, _), b = i(b, x), m = i(m, $);
  }
  const g = (p) => {
    let y = "";
    for (let h = 0; h < 4; h += 1)
      y += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return y;
  };
  return g(f) + g(u) + g(b) + g(m);
}
const v1 = "_avatar_1mhfr_1", k1 = "_xs_1mhfr_12", w1 = "_sm_1mhfr_18", $1 = "_md_1mhfr_24", N1 = "_lg_1mhfr_30", O1 = "_xl_1mhfr_36", S1 = "_initials_1mhfr_42", C1 = "_image_1mhfr_57", D1 = "_status_1mhfr_64", E1 = "_online_1mhfr_84", z1 = "_offline_1mhfr_88", M1 = "_away_1mhfr_92", Mn = {
  avatar: v1,
  xs: k1,
  sm: w1,
  md: $1,
  lg: N1,
  xl: O1,
  initials: S1,
  image: C1,
  status: D1,
  online: E1,
  offline: z1,
  away: M1
}, I1 = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, gr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function A1(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function j1(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return gr[t % gr.length] ?? gr[0];
}
function Yk({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: c,
  size: d = "md",
  status: s,
  className: i
}) {
  const a = be(() => e ? A1(e) : "?", [e]), f = be(() => e ? j1(e) : gr[0], [e]), u = be(() => {
    if (t != null || n == null) return;
    const $ = n.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${x1($)}?d=${r}&s=${I1[d]}&r=${l}`;
  }, [t, n, r, l, d]), b = t ?? u, [m, g] = q(null), p = b != null && m !== b, y = p && c === "", h = c ?? e ?? "avatar", _ = s ? `${h}, ${s}` : h, x = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: Mn.image,
        src: b,
        alt: y ? "" : s ? _ : h,
        onError: () => g(b ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: Mn.initials,
      style: { background: f },
      children: a
    }
  );
  return /* @__PURE__ */ z(
    "span",
    {
      className: [
        Mn.avatar,
        Mn[d],
        s ? Mn[s] : null,
        i
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        x,
        s && /* @__PURE__ */ o("span", { className: Mn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const T1 = "_root_zzwfz_1", P1 = "_left_zzwfz_6", L1 = "_right_zzwfz_7", R1 = "_panel_zzwfz_12", B1 = "_bottom_zzwfz_20", F1 = "_tabList_zzwfz_24", H1 = "_underline_zzwfz_53", q1 = "_pills_zzwfz_72", K1 = "_tab_zzwfz_24", W1 = "_active_zzwfz_113", U1 = "_disabled_zzwfz_139", Qt = {
  root: T1,
  left: P1,
  right: L1,
  panel: R1,
  bottom: B1,
  tabList: F1,
  underline: H1,
  pills: q1,
  tab: K1,
  active: W1,
  disabled: U1
};
function Zk({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: c = "top",
  className: d
}) {
  const s = Pe(), i = Z(null), [a, f] = q(
    n ?? e[0]?.key ?? ""
  ), u = t ?? a, b = c === "left" || c === "right", m = (y) => {
    f(y), r?.(y);
  }, g = (y) => {
    const h = e.filter(($) => !$.disabled), _ = h.findIndex(($) => $.key === u);
    let x = -1;
    y.key === "ArrowRight" || b && y.key === "ArrowDown" ? x = (_ + 1) % h.length : y.key === "ArrowLeft" || b && y.key === "ArrowUp" ? x = (_ - 1 + h.length) % h.length : y.key === "Home" ? x = 0 : y.key === "End" && (x = h.length - 1), x >= 0 && (y.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[x]?.key ?? "")}"]`
    )?.focus(), m(h[x]?.key ?? ""));
  }, p = e.find((y) => y.key === u);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Qt.root, Qt[c], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: i,
            role: "tablist",
            className: [Qt.tabList, Qt[l], Qt[c]].filter(Boolean).join(" "),
            onKeyDown: g,
            children: e.map((y) => {
              const h = y.key === u;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": h,
                  "aria-controls": `${s}-panel-${y.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    Qt.tab,
                    h ? Qt.active : null,
                    y.disabled ? Qt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => m(y.key),
                  children: y.label
                },
                y.key
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
            className: Qt.panel,
            children: p.content
          }
        )
      ]
    }
  );
}
const V1 = "_root_1l1j2_1", G1 = "_item_1l1j2_9", X1 = "_heading_1l1j2_13", Y1 = "_trigger_1l1j2_17", Z1 = "_disabled_1l1j2_34", J1 = "_title_1l1j2_48", Q1 = "_chevron_1l1j2_52", eg = "_open_1l1j2_59", tg = "_content_1l1j2_63", en = {
  root: V1,
  item: G1,
  heading: X1,
  trigger: Y1,
  disabled: Z1,
  title: J1,
  chevron: Q1,
  open: eg,
  content: tg
};
function Jk({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: c
}) {
  const d = Pe(), [s, i] = q(
    r ?? []
  ), a = n ?? s, f = (u) => {
    const b = a.includes(u) ? a.filter((m) => m !== u) : t ? [...a, u] : [u];
    i(b), l?.(b);
  };
  return /* @__PURE__ */ o("div", { className: [en.root, c].filter(Boolean).join(" "), children: e.map((u) => {
    const b = a.includes(u.key), m = `${d}-panel-${u.key}`, g = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ z("div", { className: en.item, children: [
      /* @__PURE__ */ o("h3", { className: en.heading, children: /* @__PURE__ */ z(
        "button",
        {
          type: "button",
          id: g,
          "aria-expanded": b,
          "aria-controls": m,
          disabled: u.disabled,
          className: [
            en.trigger,
            u.disabled ? en.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(u.key),
          children: [
            /* @__PURE__ */ o("span", { className: en.title, children: u.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [en.chevron, b ? en.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 12 })
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
          hidden: !b,
          className: en.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const ng = "_textarea_l7fsl_1", rg = "_invalid_l7fsl_27", sg = "_xs_l7fsl_34", og = "_sm_l7fsl_39", lg = "_md_l7fsl_44", ag = "_lg_l7fsl_49", ig = "_xl_l7fsl_54", ur = {
  textarea: ng,
  invalid: rg,
  xs: sg,
  sm: og,
  md: lg,
  lg: ag,
  xl: ig,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, Qk = Le(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...c }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          ur.textarea,
          ur[t],
          ur[`resize-${n}`],
          r ? ur.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...c
      }
    );
  }
), cg = "_root_xyp2i_1", dg = "_trigger_xyp2i_9", ug = "_invalid_xyp2i_40", fg = "_placeholder_xyp2i_47", _g = "_label_xyp2i_54", hg = "_chevron_xyp2i_60", pg = "_chevronOpen_xyp2i_70", mg = "_menu_xyp2i_74", gg = "_option_xyp2i_89", bg = "_disabled_xyp2i_100", yg = "_active_xyp2i_104", xg = "_selected_xyp2i_105", vg = "_header_xyp2i_115", kg = "_xs_xyp2i_122", wg = "_sm_xyp2i_128", $g = "_md_xyp2i_134", Ng = "_lg_xyp2i_140", Og = "_xl_xyp2i_146", pt = {
  root: cg,
  trigger: dg,
  invalid: ug,
  placeholder: fg,
  label: _g,
  chevron: hg,
  chevronOpen: pg,
  menu: mg,
  option: gg,
  disabled: bg,
  active: yg,
  selected: xg,
  header: vg,
  xs: kg,
  sm: wg,
  md: $g,
  lg: Ng,
  xl: Og
}, Sg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function ew({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: c = "md",
  invalid: d = !1,
  disabled: s = !1,
  className: i,
  ...a
}) {
  const f = Pe(), u = `${f}-listbox`, b = Z(null), m = Z(null), [g, p] = q(
    n
  ), [y, h] = q(!1), _ = t ?? g, x = e.map(
    (k, w) => k.label === "" || k.disabled ? -1 : w
  ).filter((k) => k >= 0), $ = e.findIndex(
    (k) => k.value === _
  ), [v, O] = q(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), N = R(() => {
    if (s) return;
    const k = $ >= 0 && x.includes($) ? $ : x[0];
    O(k ?? -1), h(!0);
  }, [s, $, x]), S = R(() => {
    h(!1), m.current?.focus();
  }, []);
  ie(() => {
    if (!y) return;
    const k = (w) => {
      b.current && !b.current.contains(w.target) && h(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [y]);
  const M = (k) => {
    p(k), r?.(k), h(!1), m.current?.focus();
  }, D = (k) => {
    if (x.length === 0) return;
    const w = x.includes(v) ? x.indexOf(v) : 0, C = x[(w + k + x.length) % x.length];
    C != null && O(C);
  }, E = (k) => {
    if (!y) {
      k.key === "ArrowDown" && (k.preventDefault(), N());
      return;
    }
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), D(1);
        break;
      case "ArrowUp":
        k.preventDefault(), D(-1);
        break;
      case "Home":
        k.preventDefault(), x[0] != null && O(x[0]);
        break;
      case "End":
        k.preventDefault(), x[x.length - 1] != null && O(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), v >= 0 && e[v] && x.includes(v) && M(e[v]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), S();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, A = e.find(
    (k) => k.value === _
  );
  return /* @__PURE__ */ z(
    "div",
    {
      ref: b,
      className: [pt.root, i].filter(Boolean).join(" "),
      onKeyDown: E,
      children: [
        /* @__PURE__ */ z(
          "button",
          {
            ref: m,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: s,
            className: [
              pt.trigger,
              pt[c],
              y ? pt.open : null,
              d ? pt.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? h(!1) : N(),
            ...a,
            children: [
              /* @__PURE__ */ o("span", { className: A ? pt.label : pt.placeholder, children: A ? A.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [pt.chevron, y ? pt.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Sg },
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
            className: pt.menu,
            children: e.map(
              (k, w) => k.label === "" ? /* @__PURE__ */ o(
                "div",
                {
                  className: pt.header,
                  role: "presentation",
                  children: k.value
                },
                k.value
              ) : /* @__PURE__ */ o(
                "div",
                {
                  id: `${f}-option-${w}`,
                  role: "option",
                  "aria-selected": k.value === _,
                  "aria-disabled": k.disabled || void 0,
                  className: [
                    pt.option,
                    w === v ? pt.active : null,
                    k.value === _ ? pt.selected : null,
                    k.disabled ? pt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    k.disabled || M(k.value);
                  },
                  onMouseEnter: () => {
                    !k.disabled && k.label !== "" && O(w);
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
const Cg = "_root_1ma8a_1", Dg = "_wrap_1ma8a_9", Eg = "_input_1ma8a_26", zg = "_invalid_1ma8a_31", Mg = "_clear_1ma8a_58", Ig = "_menu_1ma8a_83", Ag = "_option_1ma8a_98", jg = "_disabled_1ma8a_109", Tg = "_active_1ma8a_113", Pg = "_empty_1ma8a_123", Lg = "_xs_1ma8a_129", Rg = "_sm_1ma8a_136", Bg = "_md_1ma8a_143", Fg = "_lg_1ma8a_150", Hg = "_xl_1ma8a_157", It = {
  root: Cg,
  wrap: Dg,
  input: Eg,
  invalid: zg,
  clear: Mg,
  menu: Ig,
  option: Ag,
  disabled: jg,
  active: Tg,
  empty: Pg,
  xs: Lg,
  sm: Rg,
  md: Bg,
  lg: Fg,
  xl: Hg
}, qg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function tw({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: c = "",
  size: d = "md",
  invalid: s = !1,
  disabled: i = !1,
  filter: a = qg,
  className: f,
  ...u
}) {
  const b = Pe(), m = `${b}-listbox`, g = Z(null), p = Z(null), [y, h] = q(n), [_, x] = q(!1), $ = t ?? y, v = be(
    () => $.trim() === "" ? [...e] : e.filter((j) => a(j, $)),
    [e, $, a]
  ), O = v.map((j, B) => j.disabled ? -1 : B).filter((j) => j >= 0), [N, S] = q(-1), M = (j) => {
    h(j), r?.(j);
  }, D = (j) => {
    M(j.label), l?.(j.value, j), x(!1);
  }, E = (j) => {
    if (O.length === 0) return;
    const B = O.includes(N) ? O.indexOf(N) : j === 1 ? -1 : 0, L = O[(B + j + O.length) % O.length];
    L != null && S(L);
  }, A = (j) => {
    i || (M(j.target.value), x(!0), S(-1));
  }, k = () => {
    i || $ !== "" && x(!0);
  }, w = (j) => {
    g.current && !g.current.contains(j.relatedTarget) && x(!1);
  }, C = (j) => {
    if (!i)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), _ ? E(1) : (x(!0), S(O[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), _ && E(-1);
          break;
        case "Enter":
          j.preventDefault(), _ && N >= 0 && v[N] && D(v[N]);
          break;
        case "Escape":
          j.preventDefault(), x(!1);
          break;
        case "Tab":
          _ && N >= 0 && v[N] && D(v[N]), x(!1);
          break;
      }
  }, T = () => {
    M(""), S(-1), x(!0), p.current?.focus();
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: g,
      className: [It.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ z(
          "div",
          {
            className: [It.wrap, It[d], s ? It.invalid : null].filter(Boolean).join(" "),
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
                  "aria-activedescendant": _ && N >= 0 ? `${b}-option-${N}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: i,
                  value: $,
                  placeholder: c,
                  className: It.input,
                  onChange: A,
                  onFocus: k,
                  onBlur: w,
                  onKeyDown: C,
                  ...u
                }
              ),
              $ !== "" && !i && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: It.clear,
                  "aria-label": "Clear",
                  onClick: T,
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: m, className: It.menu, children: /* @__PURE__ */ o("div", { className: It.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: It.menu, children: v.map((j, B) => /* @__PURE__ */ o(
          "div",
          {
            id: `${b}-option-${B}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              It.option,
              B === N ? It.active : null,
              j.disabled ? It.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || D(j);
            },
            onMouseDown: (L) => {
              L.preventDefault(), j.disabled || D(j);
            },
            onMouseEnter: () => {
              j.disabled || S(B);
            },
            children: j.label
          },
          j.value
        )) }))
      ]
    }
  );
}
const Kg = "_box_muvqe_1", Wg = "_option_muvqe_12", Ug = "_disabled_muvqe_23", Vg = "_selected_muvqe_27", Gg = "_active_muvqe_33", Yn = {
  box: Kg,
  option: Wg,
  disabled: Ug,
  selected: Vg,
  active: Gg
};
function nw({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: c,
  style: d,
  ...s
}) {
  const i = Pe(), [a, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? a : Array.isArray(t) ? t : [t], b = e.findIndex((v) => !v.disabled), [m, g] = q(
    () => b >= 0 ? b : 0
  ), p = Z(""), y = Z(null), h = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, O) => v.disabled ? -1 : O).filter((v) => v >= 0), x = (v) => {
    const O = e[v];
    if (!(!O || O.disabled))
      if (g(v), r) {
        const N = u.includes(O.value) ? u.filter((S) => S !== O.value) : [...u, O.value];
        h(N);
      } else
        h([O.value]);
  }, $ = (v) => {
    if (_.length === 0) return;
    const O = _.includes(m) ? m : _[0];
    let N = -1;
    if (v.key === "ArrowDown")
      N = _[(_.indexOf(O) + 1) % _.length];
    else if (v.key === "ArrowUp")
      N = _[(_.indexOf(O) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      N = _[0];
    else if (v.key === "End")
      N = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), x(O);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const S = (p.current + v.key).toLowerCase();
      p.current = S, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const M = [..._, ..._], D = _.indexOf(O) + 1, E = M.slice(D).find((A) => e[A]?.label.toLowerCase().startsWith(S));
      E != null && g(E);
      return;
    }
    N >= 0 && (v.preventDefault(), g(N), r || h([e[N]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[m] ? `${i}-option-${m}` : void 0,
      style: d,
      className: [Yn.box, c].filter(Boolean).join(" "),
      onKeyDown: $,
      ...s,
      children: e.map((v, O) => {
        const N = u.includes(v.value), S = O === m;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${i}-option-${O}`,
            role: "option",
            "aria-selected": N,
            "aria-disabled": v.disabled || void 0,
            className: [
              Yn.option,
              N ? Yn.selected : null,
              S ? Yn.active : null,
              v.disabled ? Yn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(O),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const Xg = "_group_oinj7_1", Yg = "_legend_oinj7_8", Zg = "_list_oinj7_16", Jg = "_item_oinj7_25", Qg = "_disabled_oinj7_32", e0 = "_label_oinj7_37", t0 = "_checkbox_oinj7_48", xn = {
  group: Xg,
  legend: Yg,
  list: Zg,
  item: Jg,
  disabled: Qg,
  label: e0,
  checkbox: t0
};
function rw({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: c,
  className: d
}) {
  const [s, i] = q(() => [
    ...n
  ]), a = t ?? s, f = (u, b) => {
    const m = b ? [...a, u] : a.filter((g) => g !== u);
    i(m), r?.(m);
  };
  return /* @__PURE__ */ z("fieldset", { className: [xn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: xn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: xn.list, children: e.map((u) => {
      const b = a.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [xn.item, u.disabled ? xn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ z("label", { className: xn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: xn.checkbox,
                name: c,
                value: u.value,
                checked: b,
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
const n0 = "_group_46668_1", r0 = "_legend_46668_8", s0 = "_list_46668_16", o0 = "_item_46668_25", l0 = "_disabled_46668_32", a0 = "_label_46668_37", i0 = "_radio_46668_48", vn = {
  group: n0,
  legend: r0,
  list: s0,
  item: o0,
  disabled: l0,
  label: a0,
  radio: i0
};
function sw({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: c,
  className: d
}) {
  const [s, i] = q(
    n
  ), a = t ?? s, f = (u) => {
    i(u), r?.(u);
  };
  return /* @__PURE__ */ z("fieldset", { className: [vn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: vn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: vn.list, children: e.map((u) => {
      const b = u.value === a;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [vn.item, u.disabled ? vn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ z("label", { className: vn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: vn.radio,
                name: c,
                value: u.value,
                checked: b,
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
const c0 = "_bar_9zyxn_1", d0 = "_vertical_9zyxn_12", u0 = "_option_9zyxn_17", f0 = "_selected_9zyxn_40", _0 = "_sm_9zyxn_56", h0 = "_md_9zyxn_62", p0 = "_lg_9zyxn_68", In = {
  bar: c0,
  vertical: d0,
  option: u0,
  selected: f0,
  sm: _0,
  md: h0,
  lg: p0
};
function ys(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ow(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: c = "horizontal",
    onChange: d,
    size: s = "md",
    className: i,
    ...a
  } = e, f = l ?? !1, [u, b] = q(r ?? (f ? [] : t[0]?.value)), m = n ?? u, g = l === !0 || l === void 0 && Array.isArray(m), p = (h) => {
    if (!g) {
      b(h), d?.(h);
      return;
    }
    const _ = ys(m), x = _.includes(h) ? _.filter(($) => $ !== h) : [..._, h];
    b(x), d?.(x);
  }, y = (h) => g ? ys(m).includes(h) : m === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        In.bar,
        In[s],
        c === "vertical" ? In.vertical : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: t.map((h) => {
        const _ = y(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: h.disabled,
            className: [
              In.option,
              _ ? In.selected : null,
              h.disabled ? In.disabled : null
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
const m0 = "_root_11hdr_1", g0 = "_action_11hdr_10", b0 = "_caret_11hdr_15", y0 = "_sm_11hdr_49", x0 = "_md_11hdr_53", v0 = "_lg_11hdr_57", k0 = "_fullWidth_11hdr_62", w0 = "_menu_11hdr_70", $0 = "_item_11hdr_83", N0 = "_itemIcon_11hdr_105", O0 = "_disabled_11hdr_110", S0 = "_active_11hdr_114", C0 = "_danger_11hdr_123", Rt = {
  root: m0,
  action: g0,
  caret: b0,
  sm: y0,
  md: x0,
  lg: v0,
  fullWidth: k0,
  menu: w0,
  item: $0,
  itemIcon: N0,
  disabled: O0,
  active: S0,
  danger: C0
}, lw = Le(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: l = "primary",
    variant: c = "filled",
    shade: d = "default",
    size: s = "md",
    loading: i = !1,
    visible: a = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: b,
    "aria-label": m,
    openAriaLabel: g = "More actions",
    ...p
  }, y) {
    const _ = `${Pe()}-menu`, x = Z(null), $ = Z(null), v = Z([]), [O, N] = q(!1), [S, M] = q(-1), D = u || i, E = be(
      () => r.map((L, V) => L.disabled ? -1 : V).filter((L) => L >= 0),
      [r]
    ), A = R(() => {
      D || (M(E[0] ?? -1), N(!0));
    }, [D, E]), k = R(() => {
      N(!1), $.current?.focus();
    }, []);
    ie(() => {
      if (!O) return;
      const L = (V) => {
        x.current && !x.current.contains(V.target) && N(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [O]), ie(() => {
      O && (D || !a) && N(!1);
    }, [O, D, a]);
    const w = Z(O);
    if (ie(() => {
      const L = w.current;
      if (w.current = O, !O || L) return;
      const V = E.includes(S) ? S : E[0] ?? -1;
      V >= 0 && v.current[V]?.focus();
    }, [O, S, E]), a === !1) return null;
    const C = (L) => {
      const V = r[L];
      !V || V.disabled || (V.onClick?.(), N(!1), $.current?.focus());
    }, T = (L) => {
      if (E.length === 0) return;
      const V = E.includes(S) ? E.indexOf(S) : L === 1 ? -1 : 0, ee = E[(V + L + E.length) % E.length];
      ee != null && (M(ee), v.current[ee]?.focus());
    }, j = (L) => {
      const V = L === "first" ? E[0] : E[E.length - 1];
      V != null && (M(V), v.current[V]?.focus());
    }, B = (L) => {
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), T(1);
          break;
        case "ArrowUp":
          L.preventDefault(), T(-1);
          break;
        case "Home":
          L.preventDefault(), j("first");
          break;
        case "End":
          L.preventDefault(), j("last");
          break;
        case "Escape":
          L.preventDefault(), k();
          break;
        case "Tab":
          N(!1);
          break;
      }
    };
    return /* @__PURE__ */ z(
      "div",
      {
        ref: (L) => {
          x.current = L, typeof y == "function" ? y(L) : y && (y.current = L);
        },
        className: [
          Rt.root,
          Rt[s],
          f ? Rt.fullWidth : null,
          b
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            On,
            {
              className: Rt.action,
              variant: c,
              severity: l,
              shade: d,
              size: s,
              loading: i,
              disabled: u,
              "aria-label": m,
              onClick: () => {
                O && N(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            On,
            {
              ref: $,
              className: Rt.caret,
              variant: c,
              severity: l,
              shade: d,
              size: s,
              disabled: D,
              "aria-haspopup": "menu",
              "aria-expanded": O,
              "aria-controls": _,
              "aria-label": g,
              onClick: () => O ? N(!1) : A(),
              onKeyDown: (L) => {
                !O && (L.key === "ArrowDown" || L.key === "ArrowUp") && (L.preventDefault(), A());
              },
              children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          O && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
              className: Rt.menu,
              onKeyDown: B,
              ...p,
              children: r.map((L, V) => /* @__PURE__ */ z(
                "button",
                {
                  ref: (ee) => {
                    v.current[V] = ee;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: V === S ? 0 : -1,
                  disabled: L.disabled,
                  className: [
                    Rt.item,
                    V === S ? Rt.active : null,
                    L.danger ? Rt.danger : null,
                    L.disabled ? Rt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => C(V),
                  onMouseEnter: () => {
                    L.disabled || M(V);
                  },
                  children: [
                    L.icon ? /* @__PURE__ */ o("span", { className: Rt.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: L.icon, size: 16 }) }) : null,
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
), D0 = "_wrapper_1ulz6_1", E0 = "_input_1ulz6_8", z0 = "_invalid_1ulz6_38", M0 = "_toggle_1ulz6_45", I0 = "_xs_1ulz6_80", A0 = "_sm_1ulz6_86", j0 = "_md_1ulz6_92", T0 = "_lg_1ulz6_98", P0 = "_xl_1ulz6_104", Zn = {
  wrapper: D0,
  input: E0,
  invalid: z0,
  toggle: M0,
  xs: I0,
  sm: A0,
  md: j0,
  lg: T0,
  xl: P0
}, aw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: c = "Show password",
    hideLabel: d = "Hide password",
    ...s
  }, i) {
    const [a, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ z("div", { className: Zn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: i,
            type: a ? "text" : "password",
            disabled: l,
            className: [
              Zn.input,
              Zn[t],
              n ? Zn.invalid : null,
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
            className: Zn.toggle,
            "aria-pressed": a,
            "aria-label": a ? d : c,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ o(ke, { icon: a ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), L0 = "_mask_rcv90_1", R0 = "_invalid_rcv90_31", B0 = "_xs_rcv90_38", F0 = "_sm_rcv90_44", H0 = "_md_rcv90_50", q0 = "_lg_rcv90_56", K0 = "_xl_rcv90_62", Cr = {
  mask: L0,
  invalid: R0,
  xs: B0,
  sm: F0,
  md: H0,
  lg: q0,
  xl: K0
};
function xs(e, t) {
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
const iw = Le(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: c = "",
  onChange: d,
  className: s,
  onKeyDown: i,
  ...a
}, f) {
  const [u, b] = q(c ?? ""), m = l !== void 0, g = m ? l ?? "" : u, p = (_) => {
    const x = xs(_, r);
    return m || b(x), d?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const x = _.currentTarget.selectionStart ?? g.length, $ = g[x - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            _.preventDefault();
            const v = g.replace(/\D/g, "");
            p(xs(v.slice(0, -1), r));
          }
        }
        i?.(_);
      },
      className: [
        Cr.mask,
        Cr[t],
        n ? Cr.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...a
    }
  );
}), W0 = "_wrapper_12jdf_1", U0 = "_input_12jdf_8", V0 = "_invalid_12jdf_38", G0 = "_button_12jdf_45", X0 = "_up_12jdf_77", Y0 = "_down_12jdf_82", Z0 = "_xs_12jdf_87", J0 = "_sm_12jdf_93", Q0 = "_md_12jdf_99", eb = "_lg_12jdf_105", tb = "_xl_12jdf_111", fn = {
  wrapper: W0,
  input: U0,
  invalid: V0,
  button: G0,
  up: X0,
  down: Y0,
  xs: Z0,
  sm: J0,
  md: Q0,
  lg: eb,
  xl: tb
};
function Tr(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function nb(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Ys(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function rb(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function sb(e, t, n, r, l) {
  const d = Tr(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = d + t * l : t > 0 ? s = n + Math.ceil((d - n + 1e-9) / l) * l : s = n + Math.floor((d - n - 1e-9) / l) * l, Ys(s, n, r);
}
const cw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: c,
    defaultValue: d,
    onChange: s,
    min: i,
    max: a,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: b = "Decrement",
    onBlur: m,
    onKeyDown: g,
    ...p
  }, y) {
    const [h, _] = q(
      d != null ? String(d) : ""
    ), x = c !== void 0, $ = x ? c == null ? "" : String(c) : h, v = (E) => {
      x || _(E), s?.(Tr(E));
    }, O = (E) => {
      x || _(String(E)), s?.(E);
    }, N = (E) => {
      l || O(sb($, E, i, a, f));
    }, S = (E) => {
      v(nb(E.target.value));
    }, M = (E) => {
      E.key === "ArrowUp" ? (E.preventDefault(), N(1)) : E.key === "ArrowDown" && (E.preventDefault(), N(-1)), g?.(E);
    }, D = (E) => {
      const A = Tr($);
      A === null ? (x || _(""), s?.(null)) : O(Ys(rb(A, i, f), i, a)), m?.(E);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ z("div", { className: fn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: y,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: $,
            disabled: l,
            onChange: S,
            onKeyDown: M,
            onBlur: D,
            className: [
              fn.input,
              fn[t],
              n ? fn.invalid : null,
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
            className: [fn.button, fn.up].join(" "),
            "aria-label": u,
            disabled: l,
            onClick: () => N(1),
            children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [fn.button, fn.down].join(" "),
            "aria-label": b,
            disabled: l,
            onClick: () => N(-1),
            children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 14 })
          }
        )
      ] })
    );
  }
), Ne = {
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
}, ob = [
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
function Dt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Pr(e) {
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
function lb({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function ab({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, c = n / 255, d = Math.max(r, l, c), s = Math.min(r, l, c), i = d - s;
  let a = 0;
  return i !== 0 && (d === r ? a = (l - c) / i % 6 : d === l ? a = (c - r) / i + 2 : a = (r - l) / i + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: d === 0 ? 0 : i / d,
    v: d
  };
}
function An({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, c = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, s = 0, i = 0;
  l < 1 ? (d = r, s = c) : l < 2 ? (d = c, s = r) : l < 3 ? (s = r, i = c) : l < 4 ? (s = c, i = r) : l < 5 ? (d = c, i = r) : (d = r, i = c);
  const a = n - r;
  return {
    r: Math.round((d + a) * 255),
    g: Math.round((s + a) * 255),
    b: Math.round((i + a) * 255),
    a: 1
  };
}
function ib(e) {
  const t = Pr(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: Dt(Number(n[1]), 0, 255),
    g: Dt(Number(n[2]), 0, 255),
    b: Dt(Number(n[3]), 0, 255),
    a: n[4] != null ? Dt(Number(n[4]), 0, 1) : 1
  } : null;
}
function vs({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const dw = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = ob,
  showButton: c = !1,
  showArrow: d = !0,
  disabled: s = !1,
  invalid: i = !1,
  placeholder: a = "",
  size: f = "md",
  tabIndex: u = 0,
  className: b,
  onChange: m,
  onValueChange: g,
  onOpen: p,
  onClose: y
}) => {
  const h = Z(null), _ = Z(null), x = Z(null), $ = Z(null), v = Z(null), O = Pe(), N = Z(null), S = be(
    () => ib(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, D] = q(!1), [E, A] = q(null), k = E ?? S, w = be(() => ab(k), [k]), C = R(
    (G) => {
      const I = vs(G);
      m?.(I), g?.(I);
    },
    [m, g]
  ), T = R(
    (G, I) => {
      A(G), I && !c && C(G);
    },
    [c, C]
  ), j = R(() => {
    D(!1), A(null), y?.(), _.current?.focus();
  }, [y]), B = R(() => {
    s || (A(S), D(!0), p?.());
  }, [s, S, p]), L = R(() => {
    M ? j() : B();
  }, [M, j, B]), V = R(
    (G, I) => {
      const U = x.current;
      if (!U) return w;
      const J = U.getBoundingClientRect(), he = Dt((G - J.left) / J.width, 0, 1), te = Dt(1 - (I - J.top) / J.height, 0, 1);
      return { h: w.h, s: he, v: te };
    },
    [w]
  ), ee = R(
    (G, I) => {
      if (!I) return 0;
      const U = I.getBoundingClientRect();
      return Dt((G - U.left) / U.width, 0, 1);
    },
    []
  ), Y = (G) => {
    if (s) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), N.current = "sat";
    const I = V(G.clientX, G.clientY);
    T({ ...An(I), a: k.a }, !0);
  }, me = (G) => {
    if (N.current !== "sat") return;
    G.preventDefault();
    const I = V(G.clientX, G.clientY);
    T({ ...An(I), a: k.a }, !0);
  }, ue = (G) => {
    if (s) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), N.current = "hue";
    const I = ee(G.clientX, $.current);
    T(
      { ...An({ ...w, h: I * 360 }), a: k.a },
      !0
    );
  }, se = (G) => {
    if (N.current !== "hue") return;
    G.preventDefault();
    const I = ee(G.clientX, $.current);
    T(
      { ...An({ ...w, h: I * 360 }), a: k.a },
      !0
    );
  }, K = (G) => {
    if (s) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), N.current = "alpha";
    const I = ee(G.clientX, v.current);
    T({ ...k, a: I }, !0);
  }, ce = (G) => {
    if (N.current !== "alpha") return;
    G.preventDefault();
    const I = ee(G.clientX, v.current);
    T({ ...k, a: I }, !0);
  }, re = () => {
    N.current = null;
  }, fe = R(
    (G, I) => {
      const U = {
        h: w.h,
        s: Dt(w.s + G, 0, 1),
        v: Dt(w.v + I, 0, 1)
      };
      T({ ...An(U), a: k.a }, !0);
    },
    [w, k.a, T]
  ), oe = R(
    (G) => {
      const I = (w.h + G + 360) % 360;
      T({ ...An({ ...w, h: I }), a: k.a }, !0);
    },
    [w, k.a, T]
  ), $e = R(
    (G) => {
      T({ ...k, a: Dt(k.a + G, 0, 1) }, !0);
    },
    [k, T]
  ), Oe = (G) => {
    switch (G.key) {
      case "ArrowLeft":
        G.preventDefault(), fe(-0.05, 0);
        break;
      case "ArrowRight":
        G.preventDefault(), fe(0.05, 0);
        break;
      case "ArrowUp":
        G.preventDefault(), fe(0, 0.05);
        break;
      case "ArrowDown":
        G.preventDefault(), fe(0, -0.05);
        break;
      case "Escape":
        G.preventDefault(), j();
        break;
    }
  }, Ye = (G, I) => {
    switch (G.key) {
      case "ArrowLeft":
        G.preventDefault(), I === "hue" ? oe(-6) : $e(-0.05);
        break;
      case "ArrowRight":
        G.preventDefault(), I === "hue" ? oe(6) : $e(0.05);
        break;
      case "Escape":
        G.preventDefault(), j();
        break;
    }
  }, ve = (G, I) => {
    if (G === "hex") {
      const te = Pr(I);
      te && T({ ...te, a: k.a }, !0);
      return;
    }
    const U = I.replace(/[^\d.]/g, ""), J = Number.parseFloat(U);
    if (Number.isNaN(J)) return;
    if (G === "a") {
      const te = U.includes(".") ? Dt(J, 0, 1) : Dt(J / 100, 0, 1);
      T({ ...k, a: te }, !0);
      return;
    }
    const he = { r: 255, g: 255, b: 255 };
    T(
      { ...k, [G]: Dt(J, 0, he[G]) },
      !0
    );
  }, Be = () => {
    E && (C(E), A(null), D(!1), y?.(), _.current?.focus());
  };
  ie(() => {
    if (!M) return;
    const G = (I) => {
      h.current && !h.current.contains(I.target) && j();
    };
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, [M, j]), ie(() => {
    if (!M) return;
    const G = (I) => {
      I.key === "Escape" && j();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [M, j]);
  const we = f === "xs" ? Ne["dx-colorpicker-trigger-xs"] : f === "sm" ? Ne["dx-colorpicker-trigger-sm"] : f === "lg" ? Ne["dx-colorpicker-trigger-lg"] : f === "xl" ? Ne["dx-colorpicker-trigger-xl"] : Ne["dx-colorpicker-trigger"], ot = vs(k), nt = lb(k), Ze = { x: w.s * 100, y: (1 - w.v) * 100 }, Nt = w.h / 360 * 100, bt = k.a * 100, lt = /* @__PURE__ */ z("div", { className: Ne["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(w.s * 100),
        "aria-valuetext": `Saturation ${Math.round(w.s * 100)}%, value ${Math.round(w.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Ne["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${w.h}, 100%, 50%)`
        },
        onKeyDown: Oe,
        onPointerDown: Y,
        onPointerMove: me,
        onPointerUp: re,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Ne["dx-saturation-indicator"],
            style: { left: `${Ze.x}%`, top: `${Ze.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: $,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(w.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Ne["dx-hue-picker"],
        onKeyDown: (G) => Ye(G, "hue"),
        onPointerDown: ue,
        onPointerMove: se,
        onPointerUp: re,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Ne["dx-hue-indicator"],
            style: { left: `${Nt}%` },
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
        "aria-valuenow": Math.round(bt),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Ne["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${w.h}, 100%, 50%))`
        },
        onKeyDown: (G) => Ye(G, "alpha"),
        onPointerDown: K,
        onPointerMove: ce,
        onPointerUp: re,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Ne["dx-alpha-indicator"],
            style: { left: `${bt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ z("div", { className: Ne["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ z("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Ne["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: nt,
            onChange: (G) => ve("hex", G.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ z("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Ne["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: k.r,
            onChange: (G) => ve("r", G.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ z("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Ne["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: k.g,
            onChange: (G) => ve("g", G.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ z("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Ne["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: k.b,
            onChange: (G) => ve("b", G.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ z("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Ne["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(k.a * 100),
            onChange: (G) => ve("a", G.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Ne["dx-colorpicker-palette"], children: l.map((G) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Ne["dx-colorpicker-swatch"],
        "aria-label": G,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        style: { backgroundColor: G },
        onClick: () => {
          const I = Pr(G);
          c ? T({ ...I, a: k.a }, !1) : (A(null), C({ ...I, a: k.a }), D(!1), y?.(), _.current?.focus());
        }
      },
      G
    )) }),
    c && /* @__PURE__ */ o("div", { className: Ne["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Ne["dx-colorpicker-ok"],
        onClick: Be,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ z(
    "div",
    {
      ref: h,
      className: [
        Ne["dx-colorpicker"],
        M ? Ne["dx-colorpicker-open"] : null,
        i ? Ne["dx-colorpicker-invalid"] : null,
        b
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ z(
          "button",
          {
            ref: _,
            type: "button",
            className: [Ne["dx-colorpicker-trigger"], we].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": M,
            "aria-controls": O,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: u,
            onClick: L,
            onKeyDown: (G) => {
              G.key === "Escape" && M && (G.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: Ne["dx-colorpicker-value"],
                  style: { backgroundColor: ot },
                  "aria-hidden": "true"
                }
              ),
              a && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-text"], children: a }),
              d && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        M && /* @__PURE__ */ o(
          "div",
          {
            id: O,
            role: "dialog",
            "aria-label": "Choose color",
            className: Ne["dx-colorpicker-popup"],
            children: lt
          }
        )
      ]
    }
  );
}, De = {
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
}, cb = 42;
function Et(e) {
  return String(e).padStart(2, "0");
}
function $t(e) {
  return `${e.year}-${Et(e.month)}-${Et(e.day)}`;
}
function db(e, t) {
  const n = $t(e);
  return t ? `${n} ${Et(e.hour)}:${Et(e.minute)}:${Et(e.second)}` : n;
}
function Lr(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const i = new Date(n, r - 1, l, c, d, s);
  return i.getFullYear() !== n || i.getMonth() !== r - 1 || i.getDate() !== l ? null : { year: n, month: r, day: l, hour: c, minute: d, second: s };
}
function _n() {
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
function tn(e, t) {
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
function fr(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, c = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function ks(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ws = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => Et(e.year % 100),
  MM: (e) => Et(e.month),
  M: (e) => String(e.month),
  dd: (e) => Et(e.day),
  d: (e) => String(e.day),
  HH: (e) => Et(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Et(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Et(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, ub = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], fb = ["y", "M", "d", "H", "m", "s"];
function _r(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", c = 0;
  for (; c < t.length; ) {
    let d = !1;
    for (const i of ub)
      if (t.startsWith(i, c)) {
        l += ws[i](e, r, n), c += i.length, d = !0;
        break;
      }
    if (d) continue;
    const s = t[c];
    if (fb.includes(s)) {
      l += ws[s](e, r, n), c += 1;
      continue;
    }
    l += s, c += 1;
  }
  return l;
}
const _b = [
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
function hb(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let s = null;
    for (const i of _b)
      if (t.startsWith(i, l)) {
        s = i;
        break;
      }
    if (s) {
      const i = e.slice(r, r + s.length);
      if (!/^\d+$/.test(i)) return null;
      const a = Number(i);
      switch (s) {
        case "yyyy":
          n.year = a;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + a;
          break;
        case "MM":
        case "M":
          n.month = a;
          break;
        case "dd":
        case "d":
          n.day = a;
          break;
        case "HH":
        case "H":
          n.hour = a;
          break;
        case "mm":
        case "m":
          n.minute = a;
          break;
        case "ss":
        case "s":
          n.second = a;
          break;
      }
      r += s.length, l += s.length;
      continue;
    }
    if (e[r] !== t[l]) return null;
    r += 1, l += 1;
  }
  const c = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (c.month < 1 || c.month > 12 || c.day < 1 || c.day > 31)
    return null;
  const d = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return d.getFullYear() !== c.year || d.getMonth() !== c.month - 1 || d.getDate() !== c.day ? null : c;
}
function Jn(e, t) {
  const n = Lr(e);
  return n || hb(e, t);
}
function pb(e, t, n) {
  return t && $t(e) < $t(t) ? t : n && $t(e) > $t(n) ? n : e;
}
const mb = ["hour", "minute", "second"];
function hr(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const uw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: c = "yyyy-MM-dd",
    min: d,
    max: s,
    showTime: i = !1,
    showButton: a = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: b,
    locale: m = "en-US",
    onChange: g,
    onValueChange: p,
    onOpen: y,
    onClose: h,
    disabled: _,
    readOnly: x,
    placeholder: $,
    ariaLabel: v,
    triggerLabel: O,
    clearLabel: N,
    tabIndex: S,
    className: M,
    onBlur: D,
    onKeyDown: E,
    ...A
  }, k) {
    const w = Z(null), C = Z(null), T = Z(null), j = Z(null), B = Pe(), L = r !== void 0, [V, ee] = q(
      () => l != null ? _r(
        Jn(l, c) ?? _n(),
        c,
        m
      ) : ""
    ), [Y, me] = q(!1), [ue, se] = q(null), [K, ce] = q(() => {
      const W = r !== void 0 ? r ?? "" : l ?? "";
      if (W) {
        const le = Jn(W, c);
        if (le) return le;
      }
      return _n();
    }), re = be(() => d ? Lr(d) : null, [d]), fe = be(() => s ? Lr(s) : null, [s]), oe = be(
      () => new Set(b ?? []),
      [b]
    ), $e = be(() => {
      const W = L ? r ?? "" : V;
      return W ? Jn(W, c) : null;
    }, [r, V, L, c]), Oe = R(
      (W) => {
        const le = $t(W);
        return !!(oe.has(le) || re && le < $t(re) || fe && le > $t(fe));
      },
      [oe, re, fe]
    ), Ye = R(
      (W) => {
        if (!Oe(W)) return W;
        for (let le = 1; le <= 366; le += 1) {
          const Ie = tn(W, le);
          if (!Oe(Ie)) return Ie;
          const Te = tn(W, -le);
          if (!Oe(Te)) return Te;
        }
        return W;
      },
      [Oe]
    ), ve = R(
      (W) => {
        L || ee(W ? _r(W, c, m) : "");
        const le = W ? db(W, i) : "";
        g?.(le), p?.(le);
      },
      [L, c, m, i, g, p]
    ), Be = R(
      (W) => {
        C.current = W, typeof k == "function" ? k(W) : k && (k.current = W);
      },
      [k]
    ), we = R(() => {
      me(!1), se(null), h?.(), u || T.current?.focus();
    }, [u, h]), ot = R(() => {
      if (_) return;
      const W = $e ?? _n();
      se(W), ce(Ye(W)), me(!0), y?.();
    }, [_, $e, Ye, y]), nt = R(() => {
      Y ? we() : ot();
    }, [Y, we, ot]), Ze = R((W) => {
      j.current?.querySelector(
        `[data-date="${$t(W)}"]`
      )?.focus();
    }, []), Nt = R(
      (W) => {
        if (Oe(W)) return;
        const le = ue ?? $e, Te = {
          ...i ? {
            hour: le?.hour ?? 0,
            minute: le?.minute ?? 0,
            second: le?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: W.year,
          month: W.month,
          day: W.day
        };
        se(Te), i || (ve(Te), we());
      },
      [Oe, ue, $e, i, ve, we]
    ), bt = R(
      (W, le) => {
        se((Ie) => {
          const Te = Ie ?? $e ?? _n(), st = Math.min(W === "hour" ? 23 : 59, Math.max(0, Te[W] + le));
          return { ...Te, [W]: st };
        });
      },
      [$e]
    ), lt = R(
      (W, le) => {
        const Ie = le.replace(/\D/g, ""), Te = Ie === "" ? 0 : Number(Ie), Ht = W === "hour" ? 23 : 59;
        se((st) => ({ ...st ?? $e ?? _n(), [W]: Math.min(Ht, Te) }));
      },
      [$e]
    ), G = R(() => {
      ue && (ve(ue), we());
    }, [ue, ve, we]), I = R(() => {
      if (Y) return;
      const W = Jn(V, c);
      ve(W ? pb(W, re, fe) : null);
    }, [Y, V, c, re, fe, ve]), U = (W) => {
      const le = W.target.value;
      L || ee(le), Y && se(null);
    }, J = (W) => {
      W.key === "Enter" ? (W.preventDefault(), Y ? ue && (ve(ue), we()) : I()) : W.key === "Escape" ? Y && (W.preventDefault(), we()) : W.key === "ArrowDown" && !Y ? (W.preventDefault(), ot()) : W.key === "Tab" && Y && me(!1), E?.(W);
    }, he = (W) => {
      I(), D?.(W);
    }, te = (W) => {
      let le = null;
      switch (W.key) {
        case "ArrowLeft":
          le = tn(K, -1), W.preventDefault();
          break;
        case "ArrowRight":
          le = tn(K, 1), W.preventDefault();
          break;
        case "ArrowUp":
          le = tn(K, -7), W.preventDefault();
          break;
        case "ArrowDown":
          le = tn(K, 7), W.preventDefault();
          break;
        case "Home":
          le = tn(K, -ks(K)), W.preventDefault();
          break;
        case "End":
          le = tn(K, 6 - ks(K)), W.preventDefault();
          break;
        case "PageUp":
          le = fr(K, W.shiftKey ? -12 : -1), W.preventDefault();
          break;
        case "PageDown":
          le = fr(K, W.shiftKey ? 12 : 1), W.preventDefault();
          break;
        case "Enter":
        case " ":
          W.preventDefault(), Nt(K);
          break;
        case "Escape":
          W.preventDefault(), we();
          break;
        case "Tab":
          me(!1);
          break;
      }
      if (le) {
        const Ie = Ye(le);
        ce(Ie), setTimeout(() => Ze(Ie), 0);
      }
    };
    ie(() => {
      if (!Y) return;
      const W = (le) => {
        w.current && !w.current.contains(le.target) && we();
      };
      return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
    }, [Y, we]), ie(() => {
      if (!Y) return;
      const W = (le) => {
        le.key === "Escape" && we();
      };
      return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
    }, [Y, we]);
    const ye = () => {
      L || ee(""), g?.(""), p?.(""), C.current?.focus();
    }, Ee = Y && ue ? _r(ue, c, m) : L ? r ? _r(
      Jn(r, c) ?? _n(),
      c,
      m
    ) : "" : V, Fe = L ? !!r : V.length > 0, He = u || Y, rt = { year: K.year, month: K.month }, ln = new Date(rt.year, rt.month - 1, 1).getDay(), Q = {
      year: rt.year,
      month: rt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let W = 0; W < cb; W += 1)
      Se.push(tn(Q, W - ln));
    const dt = ue ? $t(ue) : $e ? $t($e) : null, zt = $t(_n()), ut = `${rt.year}-${Et(rt.month)}`, Ce = be(
      () => new Intl.DateTimeFormat(m, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [m]
    ), je = new Intl.DateTimeFormat(m, {
      month: "long",
      year: "numeric"
    }).format(new Date(rt.year, rt.month - 1, 1)), Mt = Array.from(
      { length: 7 },
      (W, le) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + le)
      )
    ), yt = t === "xs" ? De["dx-datepicker-input--xs"] : t === "sm" ? De["dx-datepicker-input--sm"] : t === "lg" ? De["dx-datepicker-input--lg"] : t === "xl" ? De["dx-datepicker-input--xl"] : De["dx-datepicker-input--md"], Je = /* @__PURE__ */ z(
      "div",
      {
        className: De["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ z("div", { className: De["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const W = Ye(fr(K, -1));
                  ce(W), setTimeout(() => Ze(W), 0);
                },
                children: /* @__PURE__ */ o(ke, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: De["dx-datepicker-title"], children: je }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const W = Ye(fr(K, 1));
                  ce(W), setTimeout(() => Ze(W), 0);
                },
                children: /* @__PURE__ */ o(ke, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ z(
            "div",
            {
              ref: j,
              role: "grid",
              className: De["dx-datepicker-grid"],
              onKeyDown: te,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: De["dx-datepicker-week-row"], children: Mt.map((W) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: De["dx-datepicker-weekday"],
                    children: W
                  },
                  W
                )) }),
                Array.from({ length: 6 }, (W, le) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: De["dx-datepicker-row"],
                    children: Se.slice(le * 7, le * 7 + 7).map((Ie) => {
                      const Te = $t(Ie), Ht = Oe(Ie), st = Te.startsWith(ut);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Te,
                          tabIndex: Te === $t(K) ? 0 : -1,
                          "aria-selected": Te === dt || void 0,
                          "aria-disabled": Ht || void 0,
                          "aria-label": Ce.format(
                            new Date(Ie.year, Ie.month - 1, Ie.day)
                          ),
                          className: [
                            De["dx-datepicker-day"],
                            st ? null : De["dx-datepicker-day--outside"],
                            Te === zt ? De["dx-datepicker-day--today"] : null,
                            Te === dt ? De["dx-datepicker-day--selected"] : null,
                            Ht ? De["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Nt(Ie),
                          onFocus: () => ce(Ie),
                          children: Ie.day
                        },
                        Te
                      );
                    })
                  },
                  le
                ))
              ]
            }
          ),
          i && /* @__PURE__ */ z("div", { className: De["dx-datepicker-time"], children: [
            mb.map((W) => /* @__PURE__ */ z("label", { className: De["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: De["dx-datepicker-time-label"], children: hr(W) }),
              /* @__PURE__ */ z("div", { className: De["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: De["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": hr(W),
                    value: Et(
                      (ue ?? $e ?? _n())[W]
                    ),
                    onChange: (le) => lt(W, le.target.value),
                    onKeyDown: (le) => {
                      le.key === "ArrowUp" ? (le.preventDefault(), bt(W, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), bt(W, -1)) : le.key === "Enter" && (le.preventDefault(), G());
                    }
                  }
                ),
                /* @__PURE__ */ z("span", { className: De["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${hr(W).toLowerCase()}`,
                      onClick: () => bt(W, 1),
                      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${hr(W).toLowerCase()}`,
                      onClick: () => bt(W, -1),
                      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, W)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-ok"],
                onClick: G,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ z(
      "div",
      {
        ref: w,
        className: [
          De["dx-datepicker"],
          u ? De["dx-datepicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ z(tt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Be,
                type: "text",
                autoComplete: "off",
                value: Ee,
                disabled: _,
                readOnly: x,
                placeholder: $,
                tabIndex: S,
                role: a ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": a ? void 0 : "dialog",
                "aria-expanded": a ? void 0 : He,
                "aria-controls": a ? void 0 : B,
                "aria-invalid": n || void 0,
                className: [
                  De["dx-datepicker-input"],
                  yt,
                  n ? De["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: U,
                onKeyDown: J,
                onBlur: he,
                onClick: () => {
                  a || nt();
                },
                ...A
              }
            ),
            f && !_ && Fe && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  De["dx-datepicker-clear"],
                  a ? De["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": N ?? "Clear",
                onClick: ye,
                children: /* @__PURE__ */ o(ke, { icon: "close", size: 14 })
              }
            ),
            a && /* @__PURE__ */ o(
              "button",
              {
                ref: T,
                type: "button",
                className: [De["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": O ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": B,
                disabled: _,
                onClick: nt,
                children: /* @__PURE__ */ o(ke, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          He && /* @__PURE__ */ o(
            "div",
            {
              id: B,
              role: u ? void 0 : "dialog",
              "aria-label": u ? void 0 : v ?? "Date picker",
              className: u ? void 0 : De["dx-datepicker-popup"],
              children: Je
            }
          )
        ]
      }
    );
  }
), hn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, fw = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: c = "Clear",
  rateLabel: d = "Rate",
  tabIndex: s = 0,
  className: i,
  onChange: a,
  onValueChange: f
}) => {
  const [u, b] = q(e), m = R(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), g = R(
    (_) => {
      a?.(_), f?.(_);
    },
    [a, f]
  ), p = R(
    (_) => {
      n || r || (g(_), b(_));
    },
    [n, r, g]
  ), y = (_) => {
    if (n || r) return;
    const x = u > 0 ? u : 1;
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
  return /* @__PURE__ */ z(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        hn["dx-rating"],
        n ? hn["dx-rating-readonly"] : null,
        r ? hn["dx-rating-disabled"] : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: y,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: hn["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => p(0),
            children: /* @__PURE__ */ o(ke, { icon: "block", size: 16 })
          }
        ),
        h.map((_) => {
          const x = _ <= e, $ = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: $ ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                hn["dx-rating-item"],
                x ? hn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(_),
              onFocus: () => b(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: hn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(ke, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: hn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "star", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, kn = {
  "dx-slider": "_dx-slider_18zjj_1",
  "dx-slider-track": "_dx-slider-track_18zjj_9",
  "dx-slider-range": "_dx-slider-range_18zjj_17",
  "dx-slider-handle": "_dx-slider-handle_18zjj_26",
  "dx-slider-vertical": "_dx-slider-vertical_18zjj_58",
  "dx-slider-disabled": "_dx-slider-disabled_18zjj_84"
};
function Vt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const _w = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: c = 1,
  range: d = !1,
  orientation: s = "horizontal",
  disabled: i = !1,
  label: a = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: b = 0,
  className: m,
  onChange: g,
  onInput: p,
  onValueChange: y,
  onInputChange: h
}) => {
  const _ = Z(null), x = Z(
    null
  ), [$, v] = q(null), O = $ ?? e, N = be(
    () => Vt(O, r, l),
    [O, r, l]
  ), S = be(
    () => Vt(d ? t : N, r, l),
    [d, t, N, r, l]
  ), M = be(
    () => Vt(d ? Math.max(n, S) : N, r, l),
    [d, n, S, N, r, l]
  ), D = R(
    (K) => {
      const ce = l - r;
      return ce <= 0 ? 0 : (Vt(K, r, l) - r) / ce * 100;
    },
    [r, l]
  ), E = R(
    (K, ce) => {
      const re = _.current;
      if (!re) return r;
      const fe = re.getBoundingClientRect();
      let oe;
      s === "vertical" ? oe = 1 - (ce - fe.top) / fe.height : oe = (K - fe.left) / fe.width;
      const $e = r + Vt(oe, 0, 1) * (l - r);
      return c > 0 ? Vt(Math.round($e / c) * c, r, l) : Vt($e, r, l);
    },
    [r, l, c, s]
  ), A = R(
    (K) => {
      typeof K == "number" && v(K), g?.(K), y?.(K);
    },
    [g, y]
  ), k = R(
    (K) => {
      typeof K == "number" && v(K), p?.(K), h?.(K);
    },
    [p, h]
  ), w = R(
    (K, ce, re) => {
      const fe = E(ce, re);
      let oe;
      d ? K === "min" ? oe = { min: Math.min(fe, M), max: M } : oe = { min: S, max: Math.max(fe, S) } : oe = fe, k(oe), x.current === null && A(oe);
    },
    [d, E, S, M, k, A]
  ), C = R(
    (K, ce) => {
      const re = (c > 0 ? c : 1) * ce;
      let fe;
      d ? K === "min" ? fe = {
        min: Vt(S + re, r, M),
        max: M
      } : fe = {
        min: S,
        max: Vt(M + re, S, l)
      } : fe = Vt(N + re, r, l), A(fe);
    },
    [d, c, r, l, S, M, N, A]
  ), T = (K, ce) => {
    if (!i)
      switch (ce.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ce.preventDefault(), C(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ce.preventDefault(), C(K, 1);
          break;
        case "Home":
          ce.preventDefault(), A(d ? K === "min" ? { min: r, max: M } : { min: S, max: S } : r);
          break;
        case "End":
          ce.preventDefault(), A(d ? K === "min" ? { min: M, max: M } : { min: S, max: l } : l);
          break;
      }
  }, j = (K, ce) => {
    i || (ce.preventDefault(), ce.currentTarget.focus(), typeof ce.currentTarget.setPointerCapture == "function" && ce.currentTarget.setPointerCapture(ce.pointerId), x.current = { key: K, pointerId: ce.pointerId }, w(K, ce.clientX, ce.clientY));
  }, B = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (K.preventDefault(), w(x.current.key, K.clientX, K.clientY));
  }, L = (K) => {
    !x.current || x.current.pointerId !== K.pointerId || (x.current = null, K.preventDefault(), A(d ? { min: S, max: M } : N));
  }, [V, ee] = q(null), Y = D(S), me = D(M), ue = d ? Y : 0, se = me;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        kn["dx-slider"],
        s === "vertical" ? kn["dx-slider-vertical"] : null,
        i ? kn["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ z("div", { ref: _, className: kn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: kn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${ue}%`, height: `${se - ue}%` } : { left: `${ue}%`, width: `${se - ue}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(S),
            "aria-orientation": s,
            "aria-label": d ? f : a,
            "aria-disabled": i || void 0,
            tabIndex: i || d && V === "max" ? -1 : b,
            className: kn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${Y}% - 8px)` } : { left: `calc(${Y}% - 8px)` },
            onKeyDown: (K) => T("min", K),
            onPointerDown: (K) => j("min", K),
            onPointerMove: B,
            onPointerUp: L,
            onFocus: () => ee("min")
          }
        ),
        d && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(M),
            "aria-orientation": s,
            "aria-label": u,
            "aria-disabled": i || void 0,
            tabIndex: i || V === "min" ? -1 : b,
            className: kn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${me}% - 8px)` } : { left: `calc(${me}% - 8px)` },
            onKeyDown: (K) => T("max", K),
            onPointerDown: (K) => j("max", K),
            onPointerMove: B,
            onPointerUp: L,
            onFocus: () => ee("max")
          }
        )
      ] })
    }
  );
}, qe = {
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
}, gb = "-10675199.02:48:05.4775808", bb = "10675199.02:48:05.4775808", rn = 86400, sn = 3600, Bt = 60, Dr = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, $s = {
  days: rn,
  hours: sn,
  minutes: Bt,
  seconds: 1
}, yb = {
  day: rn,
  hour: sn,
  minute: Bt,
  second: 1
};
function jn(e) {
  return String(e).padStart(2, "0");
}
function sr(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((u) => u != null)) return null;
    const s = l[1] != null ? Number(l[1]) : 0, i = l[2] != null ? Number(l[2]) : 0, a = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (s * rn + i * sn + a * Bt + f);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (c) {
    const d = c[1] != null ? Number(c[1]) : 0, s = Number(c[2]), i = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, f = c[5] != null ? +`0.${c[5]}` : 0;
    return s > 23 || i > 59 || a > 59 ? null : n * (d * rn + s * sn + i * Bt + a + f);
  }
  return null;
}
function xb(e) {
  return e.days * rn + e.hours * sn + e.minutes * Bt + e.seconds;
}
function Ns(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / rn);
  t %= rn;
  const r = Math.floor(t / sn);
  t %= sn;
  const l = Math.floor(t / Bt), c = Math.round(t % Bt * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: c };
}
function Rr(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / Bt) * Bt : t === "hour" ? r = Math.round(r / sn) * sn : t === "day" && (r = Math.round(r / rn) * rn);
  let l = Math.round(r % Bt);
  const c = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / Bt) + c, s = d % 60, i = Math.floor(d / 60), a = i % 24, f = Math.floor(i / 24), u = n ? "-" : "", b = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${b}${jn(a)}`;
    case "minute":
      return `${u}${b}${jn(a)}:${jn(s)}`;
    default:
      return `${u}${b}${jn(a)}:${jn(s)}:${jn(l)}`;
  }
}
function Os(e, t = "second") {
  const n = sr(e);
  return n === null ? "" : Rr(n, t);
}
function Er(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const hw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: c = gb,
    max: d = bb,
    step: s = "1",
    precision: i = "second",
    showDays: a = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: b = !0,
    allowClear: m = !1,
    inline: g = !1,
    onChange: p,
    onValueChange: y,
    onOpen: h,
    onClose: _,
    disabled: x,
    placeholder: $,
    ariaLabel: v,
    triggerLabel: O,
    clearLabel: N,
    tabIndex: S,
    className: M,
    onBlur: D,
    onKeyDown: E,
    ...A
  }, k) {
    const w = Z(null), C = Z(null), T = Z(null), j = Pe(), B = r !== void 0, [L, V] = q(
      () => l != null ? Os(l, i) : ""
    ), [ee, Y] = q(!1), [me, ue] = q(null), [se, K] = q(null), ce = be(
      () => sr(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), re = be(
      () => sr(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), fe = be(() => {
      const Q = Number.parseFloat(s);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [s]), oe = be(() => {
      const Q = B ? r ?? "" : L;
      return Q ? sr(Q) : null;
    }, [r, L, B]), $e = R(
      (Q) => {
        const Se = Q === null ? "" : Rr(Q, i);
        B || V(Se), p?.(Se), y?.(Se);
      },
      [B, i, p, y]
    ), Oe = R(
      (Q) => {
        Q && me !== null && $e(me), Y(!1), ue(null), K(null), _?.(), g || T.current?.focus();
      },
      [g, me, $e, _]
    ), Ye = R(() => {
      x || (ue(oe ?? 0), Y(!0), h?.());
    }, [x, oe, h]), ve = R(() => {
      ee ? Oe(!1) : Ye();
    }, [ee, Oe, Ye]), Be = R(
      (Q, Se) => {
        ue((dt) => {
          const ut = (dt ?? oe ?? 0) + Se * fe * $s[Q];
          return Er(ut, ce, re);
        });
      },
      [oe, fe, ce, re]
    ), we = R(
      (Q) => {
        const Se = se?.[Q];
        if (Se == null) return;
        const dt = Number.parseFloat(Se), zt = Number.isNaN(dt) ? 0 : dt;
        ue((ut) => {
          const Ce = ut ?? oe ?? 0, je = Ns(Ce);
          je[Q] = zt;
          const yt = (Ce < 0 ? -1 : 1) * xb(je);
          return Er(yt, ce, re);
        }), K(null);
      },
      [se, oe, ce, re]
    ), ot = (Q, Se) => {
      K((dt) => ({ ...dt ?? {}, [Q]: Se }));
    }, nt = (Q, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), we(Q), Be(Q, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), we(Q), Be(Q, -1);
          break;
        case "Home":
          Se.preventDefault(), we(Q), ue(ce);
          break;
        case "End":
          Se.preventDefault(), we(Q), ue(re);
          break;
        case "Enter":
          Se.preventDefault(), we(Q), Oe(!0);
          break;
      }
    }, Ze = R(() => {
      if (ee) return;
      const Q = sr(L);
      $e(Q !== null ? Er(Q, ce, re) : null);
    }, [ee, L, ce, re, $e]), Nt = (Q) => {
      B || V(Q.target.value);
    }, bt = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), ee ? Oe(!0) : Ze()) : Q.key === "Escape" && ee ? (Q.preventDefault(), Oe(!1)) : Q.key === "ArrowDown" && !ee ? (Q.preventDefault(), Ye()) : Q.key === "Tab" && ee && Y(!1), E?.(Q);
    }, lt = (Q) => {
      Ze(), D?.(Q);
    }, G = () => {
      B || V(""), p?.(""), y?.(""), C.current?.focus();
    };
    ie(() => {
      if (!ee) return;
      const Q = (Se) => {
        w.current && !w.current.contains(Se.target) && Oe(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [ee, Oe]), ie(() => {
      if (!ee) return;
      const Q = (Se) => {
        Se.key === "Escape" && Oe(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [ee, Oe]), ie(() => {
      if (g && me !== null) {
        const Q = oe;
        (Q === null || Math.abs(me - Q) > 1e-9) && $e(me);
      }
    }, [g, me, oe, $e]);
    const I = R(
      (Q) => {
        C.current = Q, typeof k == "function" ? k(Q) : k && (k.current = Q);
      },
      [k]
    ), U = B ? r ? Os(r, i) : "" : L, J = B ? !!r : L.length > 0, he = g || ee, te = me ?? oe ?? 0, ye = Ns(te), Ee = yb[i], He = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => $s[Q] >= Ee && (Q === "days" ? a : Q === "hours" ? f : Q === "minutes" ? u : b)
    ), rt = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], ln = /* @__PURE__ */ z("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: Rr(te, i) }),
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-units"], children: He.map((Q) => /* @__PURE__ */ z("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: qe["dx-timespanpicker-unit-label"], children: Dr[Q] }),
        /* @__PURE__ */ z("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: se?.[Q] ?? String(ye[Q]),
              onChange: (Se) => ot(Q, Se.target.value),
              onKeyDown: (Se) => nt(Q, Se),
              onBlur: () => we(Q)
            }
          ),
          /* @__PURE__ */ z("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Dr[Q].toLowerCase()}`,
                onClick: () => {
                  we(Q), Be(Q, 1);
                },
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Dr[Q].toLowerCase()}`,
                onClick: () => {
                  we(Q), Be(Q, -1);
                },
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: qe["dx-timespanpicker-ok"],
          onClick: () => Oe(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ z(
      "div",
      {
        ref: w,
        className: [
          qe["dx-timespanpicker"],
          g ? qe["dx-timespanpicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !g && /* @__PURE__ */ z(tt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: I,
                type: "text",
                autoComplete: "off",
                value: U,
                disabled: x,
                placeholder: $,
                tabIndex: S,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": j,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  rt,
                  n ? qe["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Nt,
                onKeyDown: bt,
                onBlur: lt,
                ...A
              }
            ),
            m && !x && J && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-timespanpicker-clear"],
                "aria-label": N ?? "Clear",
                onClick: G,
                children: /* @__PURE__ */ o(ke, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: T,
                type: "button",
                className: [qe["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": O ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": j,
                disabled: x,
                onClick: ve,
                children: /* @__PURE__ */ o(ke, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          he && /* @__PURE__ */ o(
            "div",
            {
              id: j,
              role: g ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: g ? void 0 : qe["dx-timespanpicker-popup"],
              children: ln
            }
          )
        ]
      }
    );
  }
), vb = "_wrapper_ou9x5_1", kb = "_cells_ou9x5_8", wb = "_cell_ou9x5_8", $b = "_invalid_ou9x5_63", Nb = "_live_ou9x5_73", wn = {
  wrapper: vb,
  cells: kb,
  cell: wb,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: $b,
  live: Nb
};
function Ss(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const pw = Le(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: c = !1,
    size: d = "md",
    autoFocus: s = !1,
    disabled: i = !1,
    label: a = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": b
  }, m) {
    const g = Pe(), p = n !== void 0, [y, h] = q(Ss(r).join("")), _ = p ? Ss(n).join("") : y, x = Array.from({ length: t }, (A, k) => _[k] ?? ""), $ = Z([]), [v, O] = q(""), N = (A) => {
      p || h(A), l?.(A);
    }, S = (A) => {
      const k = $.current[A];
      k && !k.disabled && (k.focus(), k.select());
    }, M = (A, k) => {
      const w = k.replace(/\D/g, "").slice(-1), C = _.split("");
      if (w) {
        C[A] = w;
        const T = C.join("").slice(0, t);
        N(T), T.length < t ? S(A + 1) : f && O("Code complete");
      }
    }, D = (A, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), _[A]) {
          const w = _.split("");
          w[A] = "", N(w.join(""));
        } else if (A > 0) {
          const w = _.split("");
          w[A - 1] = "", N(w.join("")), S(A - 1);
        }
      } else k.key === "ArrowLeft" && A > 0 ? (k.preventDefault(), S(A - 1)) : k.key === "ArrowRight" && A < t - 1 ? (k.preventDefault(), S(A + 1)) : k.key === "Home" ? (k.preventDefault(), S(0)) : k.key === "End" && (k.preventDefault(), S(t - 1));
    }, E = (A, k) => {
      k.preventDefault();
      const w = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!w) return;
      const C = _.split("");
      let T = 0;
      for (let B = 0; B < w.length && A + B < t; B++)
        C[A + B] = w[B] ?? "", T++;
      const j = C.join("");
      N(j), j.length >= t ? f && O("Code complete") : S(A + T);
    };
    return /* @__PURE__ */ z(
      "div",
      {
        className: [wn.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": b ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [wn.cells, wn[d]].join(" "), children: x.map((A, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (w) => {
                $.current[k] = w, k === 0 && m && (typeof m == "function" ? m(w) : m.current = w);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: A,
              disabled: i,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": c && A !== "" ? !0 : void 0,
              autoFocus: s && k === 0,
              className: [
                wn.cell,
                wn[`cell-${d}`],
                c ? wn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (w) => M(k, w.target.value),
              onKeyDown: (w) => D(k, w),
              onPaste: (w) => E(k, w),
              onFocus: (w) => w.target.select(),
              onBlur: () => {
                f && O("");
              }
            },
            k
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${g}-live`,
              role: "status",
              "aria-live": "polite",
              className: wn.live,
              children: v
            }
          )
        ]
      }
    );
  }
), Ob = "_wrapper_6lcd5_1", Sb = "_header_6lcd5_7", Cb = "_label_6lcd5_15", Db = "_clear_6lcd5_22", Eb = "_canvas_6lcd5_53", zb = "_disabled_6lcd5_69", Tn = {
  wrapper: Ob,
  header: Sb,
  label: Cb,
  clear: Db,
  canvas: Eb,
  disabled: zb
}, mw = Le(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: s = "Signature",
    width: i,
    height: a = 140,
    disabled: f = !1,
    className: u
  }, b) {
    const m = Z(null), g = Z(!1), p = Z(!1), y = Z({ x: 0, y: 0 });
    ie(() => {
      const N = m.current;
      if (!N) return;
      const S = window.devicePixelRatio || 1, M = Math.round((i ?? N.clientWidth) * S), D = Math.round(a * S);
      (N.width !== M || N.height !== D) && (N.width = M, N.height = D);
      const E = N.getContext("2d");
      if (!E) return;
      E.setTransform(S, 0, 0, S, 0, 0), E.lineWidth = c, E.strokeStyle = l, E.lineCap = "round", E.lineJoin = "round";
      const A = t ?? n;
      if (A) {
        const k = new Image();
        k.onload = () => {
          E.drawImage(k, 0, 0, N.clientWidth, a);
        }, k.src = A;
      }
    }, [t, n, l, c, i, a]);
    const h = () => {
      const N = m.current;
      if (!N) return;
      const S = N.toDataURL("image/png");
      r?.(S);
    }, _ = () => {
      const N = m.current;
      if (!N) return;
      const S = N.getContext("2d");
      S && S.clearRect(0, 0, N.width, N.height), r?.("");
    };
    qr(b, () => ({
      clear: _,
      toDataURL: (N = "image/png", S) => m.current?.toDataURL(N, S) ?? ""
    }));
    const x = (N) => {
      const S = N.currentTarget.getBoundingClientRect();
      return { x: N.clientX - S.left, y: N.clientY - S.top };
    }, $ = (N) => {
      f || (N.preventDefault(), typeof N.currentTarget.setPointerCapture == "function" && N.currentTarget.setPointerCapture(N.pointerId), g.current = !0, p.current = !1, y.current = x(N));
    }, v = (N) => {
      if (!g.current) return;
      N.preventDefault();
      const S = N.currentTarget.getContext("2d");
      if (!S) return;
      const M = x(N);
      S.beginPath(), S.moveTo(y.current.x, y.current.y), S.lineTo(M.x, M.y), S.stroke(), y.current = M, p.current = !0;
    }, O = (N) => {
      g.current && (N.preventDefault(), g.current = !1, p.current && h());
    };
    return /* @__PURE__ */ z(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          Tn.wrapper,
          u,
          f ? Tn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ z("div", { className: Tn.header, children: [
            /* @__PURE__ */ o("span", { className: Tn.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Tn.clear,
                onClick: _,
                disabled: f,
                children: d
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
                width: i ? `${i}px` : void 0,
                height: `${a}px`
              },
              className: Tn.canvas,
              onPointerDown: $,
              onPointerMove: v,
              onPointerUp: O,
              onPointerCancel: O
            }
          )
        ]
      }
    );
  }
), Mb = "_wrapper_dsvd2_1", Ib = "_trigger_dsvd2_7", Ab = "_list_dsvd2_35", jb = "_row_dsvd2_44", Tb = "_name_dsvd2_59", Pb = "_size_dsvd2_68", Lb = "_progress_dsvd2_74", Rb = "_fill_dsvd2_82", Bb = "_status_dsvd2_99", Fb = "_remove_dsvd2_106", Gt = {
  wrapper: Mb,
  trigger: Ib,
  list: Ab,
  row: jb,
  name: Tb,
  size: Pb,
  progress: Lb,
  fill: Rb,
  status: Bb,
  remove: Fb
};
function Cs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const gw = Le(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: c,
  accept: d,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: i,
  chooseText: a = "Upload",
  children: f,
  onProgress: u,
  onComplete: b,
  onError: m
}, g) {
  const p = Z(null), [y, h] = q([]), _ = Z(/* @__PURE__ */ new Map()), x = (S, M) => {
    h(
      (D) => D.map((E) => E.file.name === S ? { ...E, ...M } : E)
    );
  }, $ = (S) => {
    if (!t) return;
    const M = new XMLHttpRequest();
    _.current.set(S.file.name, M);
    const D = new FormData();
    if (D.append(r, S.file), M.upload.addEventListener("progress", (E) => {
      if (!E.lengthComputable) return;
      const A = Math.round(E.loaded / E.total * 100);
      x(S.file.name, { state: "uploading", progress: A }), u?.(S.file.name, A);
    }), M.addEventListener("load", () => {
      M.status >= 200 && M.status < 300 ? (x(S.file.name, { state: "complete", progress: 100 }), b?.(S.file.name)) : (x(S.file.name, {
        state: "error",
        message: `HTTP ${M.status}`
      }), m?.(S.file.name, `HTTP ${M.status}`));
    }), M.addEventListener("error", () => {
      x(S.file.name, { state: "error", message: "Network error" }), m?.(S.file.name, "Network error");
    }), c)
      for (const [E, A] of Object.entries(c))
        M.setRequestHeader(E, A);
    M.open("POST", t), M.send(D), x(S.file.name, { state: "uploading", progress: 0 });
  }, v = (S) => {
    if (!S) return;
    const M = [...S], D = [];
    let E = Math.max(0, s - y.length);
    for (const k of M) {
      if (i != null && k.size > i) {
        m?.(
          k.name,
          `File too large (maximum ${Cs(i)})`
        );
        continue;
      }
      if (E <= 0) {
        m?.(k.name, `Too many files (maximum ${s})`);
        continue;
      }
      E -= 1, D.push(k);
    }
    const A = D.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    h((k) => [...k, ...A]), p.current && (p.current.value = ""), l && A.forEach($);
  }, O = (S) => {
    _.current.get(S)?.abort(), _.current.delete(S), h((D) => D.filter((E) => E.file.name !== S));
  }, N = f ?? /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      className: Gt.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ o(ke, { icon: "upload", size: 14 }),
        a
      ]
    }
  );
  return qr(g, () => ({
    open: () => p.current?.click(),
    upload: () => y.forEach((S) => S.state === "pending" ? $(S) : null)
  })), /* @__PURE__ */ z("div", { className: Gt.wrapper, children: [
    N,
    /* @__PURE__ */ o(
      "input",
      {
        ref: p,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (S) => v(S.target.files)
      }
    ),
    !f && y.length > 0 && /* @__PURE__ */ o("ul", { className: Gt.list, children: y.map(({ file: S, state: M, progress: D, message: E }) => /* @__PURE__ */ z(
      "li",
      {
        className: Gt.row,
        "data-state": M,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Gt.name, children: S.name }),
          /* @__PURE__ */ o("span", { className: Gt.size, children: Cs(S.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Gt.progress,
              role: "progressbar",
              "aria-label": `${S.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": D,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: Gt.fill,
                  style: { width: `${D}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: Gt.status, role: "status", children: M === "uploading" ? "Uploading" : M === "complete" ? "Complete" : M === "error" ? E ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.remove,
              "aria-label": `Remove ${S.name}`,
              onClick: () => O(S.name),
              children: /* @__PURE__ */ o(ke, { icon: "close", size: 14 })
            }
          )
        ]
      },
      S.name
    )) })
  ] });
}), Hb = "_zone_nl0bz_1", qb = "_dragging_nl0bz_23", Kb = "_caption_nl0bz_28", Wb = "_browse_nl0bz_40", Ub = "_disabled_nl0bz_67", Qn = {
  zone: Hb,
  dragging: qb,
  caption: Kb,
  browse: Wb,
  disabled: Ub
};
function Vb(e, t) {
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
const bw = Le(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: d = "Browse",
    disabled: s = !1,
    className: i
  }, a) {
    const f = Z(null), [u, b] = q(!1), m = (_) => {
      if (!_ || _.length === 0) return;
      const x = [..._].filter(($) => Vb($, t ?? ""));
      x.length !== 0 && r?.(x);
    }, g = (_) => {
      s || (_.preventDefault(), b(!0));
    }, p = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", b(!0));
    }, y = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || b(!1);
    }, h = (_) => {
      s || (_.preventDefault(), b(!1), m(_.dataTransfer.files));
    };
    return qr(a, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ z(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": s || void 0,
        className: [
          Qn.zone,
          u ? Qn.dragging : null,
          s ? Qn.disabled : null,
          i
        ].filter(Boolean).join(" "),
        onDragEnter: g,
        onDragOver: p,
        onDragLeave: y,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Qn.caption, children: u ? c : l }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qn.browse,
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
                m(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), Gb = "_root_1a92d_1", Xb = "_menubar_1a92d_5", Yb = "_horizontal_1a92d_15", Zb = "_vertical_1a92d_20", Jb = "_itemWrapper_1a92d_25", Qb = "_item_1a92d_25", ey = "_disabled_1a92d_61", ty = "_icon_1a92d_68", ny = "_text_1a92d_75", ry = "_caret_1a92d_79", sy = "_hasChildren_1a92d_85", oy = "_submenu_1a92d_94", ly = "_submenuItem_1a92d_118", ay = "_flyout_1a92d_155", iy = "_hamburger_1a92d_175", cy = "_responsive_1a92d_198", dy = "_mobileOpen_1a92d_207", Ue = {
  root: Gb,
  menubar: Xb,
  horizontal: Yb,
  vertical: Zb,
  itemWrapper: Jb,
  item: Qb,
  disabled: ey,
  icon: ty,
  text: ny,
  caret: ry,
  hasChildren: sy,
  submenu: oy,
  submenuItem: ly,
  flyout: ay,
  hamburger: iy,
  responsive: cy,
  mobileOpen: dy
}, vr = Cn(null);
function uy(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function fy(e, t, n, r, l) {
  const [c, d] = q(n), s = e ? t ?? !1 : c, i = R(
    (a) => {
      e || d(a), r?.(a);
    },
    [e, r]
  );
  return ie(() => {
    l > 0 && i(!1);
  }, [l]), [s, i];
}
function _y({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: Ue.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: Ue.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(ke, { icon: e, size: 16 })
    }
  ) : null;
}
function Zs(e) {
  return gt(e) && e.type === Js;
}
function Vr({
  itemKey: e,
  props: t
}) {
  const n = on(vr);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: c, disabled: d, template: s } = t, i = be(
    () => lr.toArray(t.children).filter(gt),
    [t.children]
  ), a = i.length > 0, f = !!d, u = t.open !== void 0, [b, m] = fy(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, p = Z(0), h = (g && !u ? n.openKey === e : null) ?? b, _ = R(
    (T) => {
      g && !u ? n.setOpenKey(T ? e : null) : (m(T), g && n.setOpenKey(null));
    },
    [g, u, n, e, m]
  ), [, x] = q(0);
  ie(() => {
    if (!c) return;
    const T = () => x((j) => j + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [c]);
  const $ = c && !a ? uy(c, t.match) : !1, v = R(
    (T) => {
      if (f) {
        T.preventDefault();
        return;
      }
      const j = { text: r, value: l, path: c };
      [n.emit(j), t.onClick?.(j)].includes(!1) && T.preventDefault(), n.closeAll();
    },
    [f, r, l, c, n, t]
  ), O = R(() => {
    if (!f) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [f, h, _, n.clickToOpen]), N = R(() => {
    !a || f || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [a, f, n.clickToOpen, _]), S = R(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), M = `${n.baseId}-submenu-${e}`, [D, E] = q(null);
  ie(() => {
    n.closeSignal > 0 && E(null);
  }, [n.closeSignal]);
  const A = be(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: D,
      setOpenKey: E
    }),
    [n, D]
  ), k = a ? /* @__PURE__ */ o("span", { className: Ue.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    ke,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, w = s ?? /* @__PURE__ */ z(tt, { children: [
    /* @__PURE__ */ o(
      _y,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: Ue.text, children: r }),
    k
  ] });
  if (a) {
    let T = function(j) {
      const B = Array.from(j.currentTarget.children).map((ee) => ee.querySelector('[role="menuitem"]')).filter(
        (ee) => ee != null && ee.getAttribute("aria-disabled") !== "true" && !ee.hasAttribute("disabled")
      ), L = document.activeElement, V = L ? B.indexOf(L) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (V === -1 ? B[0] : B[(V + 1) % B.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (V === -1 ? B[B.length - 1] : B[(V - 1 + B.length) % B.length])?.focus()) : j.key === "ArrowRight" ? L?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), L.getAttribute("aria-expanded") !== "true" && L.click(), document.getElementById(
        L.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ z(
      "div",
      {
        className: Ue.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : N,
        onMouseLeave: n.clickToOpen ? void 0 : S,
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
              "aria-expanded": h,
              "aria-controls": M,
              tabIndex: f ? -1 : 0,
              disabled: f,
              className: [
                Ue.item,
                f ? Ue.disabled : null,
                Ue.hasChildren
              ].filter(Boolean).join(" "),
              onClick: O,
              children: w
            }
          ),
          h ? /* @__PURE__ */ o(
            "div",
            {
              id: M,
              role: "menu",
              "aria-label": r,
              className: [
                Ue.submenu,
                n.flyout && !g ? Ue.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: T,
              children: /* @__PURE__ */ o(vr.Provider, { value: A, children: i.map(
                (j, B) => Zs(j) ? /* @__PURE__ */ o(
                  Vr,
                  {
                    itemKey: `${e}-${B}`,
                    props: j.props
                  },
                  `${e}-${B}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Hr, { children: j }, `${e}-custom-${B}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const C = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": $ ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Ue.submenuItem, f ? Ue.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return c && !f ? /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: c, target: t.target, ...C, children: w }) }) : /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...C, children: w }) });
}
function Js(e) {
  if (!on(vr)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Vr, { itemKey: e.text, props: e });
}
function hy({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: c,
  onClose: d,
  ariaLabel: s = "Menu",
  toggleAriaLabel: i = "Toggle menu",
  className: a,
  ...f
}) {
  const u = Pe(), b = Z(null), m = Z(null), [g, p] = q(null), [y, h] = q(0), [_, x] = q(!1), $ = Z(null), v = R(
    (D) => c?.(D),
    [c]
  ), O = R(() => {
    p(null), h((D) => D + 1);
  }, []);
  ie(() => {
    if (g == null) return;
    const D = (E) => {
      b.current && !b.current.contains(E.target) && O();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [g, O]), ie(() => {
    $.current != null && g === $.current && (document.getElementById(`${u}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), $.current = null);
  }, [g, u]);
  const N = be(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: v,
      closeAll: O,
      openKey: g,
      setOpenKey: p
    }),
    [u, n, t, y, v, O, g]
  ), S = be(
    () => lr.toArray(e).filter(gt),
    [e]
  ), M = (D) => {
    const E = m.current;
    if (!E) return;
    const A = Array.from(E.children).map((C) => C.querySelector('[role="menuitem"]')).filter(
      (C) => C != null && !C.hasAttribute("disabled") && C.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const C = document.getElementById(`${u}-submenu-${g}`);
      if (C) {
        const T = Array.from(
          C.querySelectorAll('[role="menuitem"]')
        ).filter(
          (L) => L.getAttribute("aria-disabled") !== "true" && !L.hasAttribute("disabled")
        ), j = document.activeElement, B = j ? T.indexOf(j) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (B === -1 ? T[0] : T[(B + 1) % T.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (B === -1 ? T[T.length - 1] : T[(B - 1 + T.length) % T.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), O(), d?.(), E.querySelector(`[data-index="${g}"]`)?.focus();
          return;
        }
        if (D.key === "Enter" || D.key === " ") return;
      }
      if (D.key === "Escape") {
        D.preventDefault(), O(), d?.();
        return;
      }
    }
    const k = document.activeElement, w = k ? A.indexOf(k) : -1;
    if (D.key === "ArrowRight") {
      if (D.preventDefault(), A.length === 0) return;
      A[w === -1 ? 0 : (w + 1) % A.length]?.focus();
      return;
    }
    if (D.key === "ArrowLeft") {
      if (D.preventDefault(), A.length === 0) return;
      A[w === -1 ? A.length - 1 : (w - 1 + A.length) % A.length]?.focus();
      return;
    }
    if (D.key === "ArrowDown") {
      if (w >= 0) {
        const C = k?.getAttribute("data-index");
        if (C == null) return;
        E.querySelector(
          `[data-index="${C}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (D.preventDefault(), $.current = C, p(C));
      }
      return;
    }
    if (D.key === "Home") {
      D.preventDefault(), A[0]?.focus();
      return;
    }
    if (D.key === "End") {
      D.preventDefault(), A[A.length - 1]?.focus();
      return;
    }
    if (D.key.length === 1 && !D.ctrlKey && !D.metaKey) {
      const C = A.map((j) => j.textContent ?? ""), T = w === -1 ? 0 : (w + 1) % A.length;
      for (let j = 0; j < A.length; j++) {
        const B = (T + j) % A.length;
        if (C[B]?.toLowerCase().startsWith(D.key.toLowerCase())) {
          D.preventDefault(), A[B]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ z(
    "nav",
    {
      ref: b,
      "aria-label": s,
      className: [
        Ue.root,
        l ? Ue.vertical : Ue.horizontal,
        r ? Ue.responsive : null,
        r && _ ? Ue.mobileOpen : null,
        n ? Ue.flyoutRoot : null,
        a
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": i,
            "aria-expanded": _,
            className: Ue.hamburger,
            onClick: () => x((D) => !D),
            children: /* @__PURE__ */ o(ke, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: m,
            role: l ? "menu" : "menubar",
            "aria-label": s,
            className: Ue.menubar,
            onKeyDown: M,
            children: /* @__PURE__ */ o(vr.Provider, { value: N, children: S.map(
              (D, E) => Zs(D) ? /* @__PURE__ */ o(
                Vr,
                {
                  itemKey: String(E),
                  props: D.props
                },
                `top-${E}`
              ) : /* @__PURE__ */ o(Hr, { children: D }, `top-custom-${E}`)
            ) })
          }
        )
      ]
    }
  );
}
const py = "_popup_uiejp_1", my = "_menu_uiejp_22", Br = {
  popup: py,
  menu: my
}, Qs = Cn(null);
function yw() {
  const e = on(Qs);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function eo(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ o(Js, { ...l, children: r ? eo(r) : void 0 }, `${t.text}-${n}`);
  });
}
function gy({ state: e, onClose: t }) {
  const n = Z(null), [r, l] = q({ left: e.x, top: e.y });
  zr(() => {
    const d = n.current;
    if (!d) return;
    const s = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), ie(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const c = R(
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
      className: Br.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: Br.menu, children: e.options.content ?? /* @__PURE__ */ o(
        hy,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: c,
          onClose: t,
          children: eo(e.options.items ?? [])
        }
      ) })
    }
  );
}
function xw({ children: e }) {
  const [t, n] = q(null), r = R(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (d, s) => {
      d.preventDefault();
      const i = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: i, options: s });
    },
    []
  );
  ie(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Br.popup}`);
      u && !u.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, i = () => r(), a = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", i), window.addEventListener("hashchange", a), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", i), window.removeEventListener("hashchange", a);
    };
  }, [t, r]);
  const c = be(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ z(Qs.Provider, { value: c, children: [
    e,
    t ? /* @__PURE__ */ o(gy, { state: t, onClose: r }) : null
  ] });
}
const by = "_root_rgcia_1", yy = "_list_rgcia_9", xy = "_item_rgcia_14", vy = "_trigger_rgcia_18", ky = "_disabled_rgcia_45", wy = "_expanded_rgcia_52", $y = "_selected_rgcia_56", Ny = "_icon_rgcia_61", Oy = "_text_rgcia_72", Sy = "_caret_rgcia_79", Cy = "_open_rgcia_86", Dy = "_submenu_rgcia_90", Ey = "_iconOnly_rgcia_172", zy = "_stacked_rgcia_201", ct = {
  root: by,
  list: yy,
  item: xy,
  trigger: vy,
  disabled: ky,
  expanded: wy,
  selected: $y,
  icon: Ny,
  text: Oy,
  caret: Sy,
  open: Cy,
  submenu: Dy,
  iconOnly: Ey,
  stacked: zy
}, kr = Cn(null);
function My() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Iy(e, t) {
  const n = My(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function Ay({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ o("span", { className: ct.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: ct.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(ke, { icon: e, size: 16 })
    }
  ) : null;
}
function Gr({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = on(kr);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: c, path: d, disabled: s } = n, i = be(
    () => lr.toArray(n.children).filter(gt),
    [n.children]
  ), a = i.length > 0, f = !!s, u = n.match ?? r.match, b = n.expanded !== void 0, [m, g] = q(
    n.defaultExpanded ?? !1
  ), p = b ? n.expanded ?? !1 : m, y = R(
    (L) => {
      b || g(L), n.onExpandedChange?.(L);
    },
    [b, n]
  );
  ie(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && y(!1);
  }, [r.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, x] = q(
    n.defaultSelected ?? !1
  ), $ = !h && d ? Iy(d, u) : !1, v = n.selected ?? (h ? _ : $ || _), [, O] = q(0);
  ie(() => {
    if (!d) return;
    const L = () => O((V) => V + 1);
    return window.addEventListener("hashchange", L), () => window.removeEventListener("hashchange", L);
  }, [d]);
  const N = be(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        y(!0), r.openAncestors();
      }
    }),
    [r, y]
  );
  ie(() => {
    $ && t.length > 0 && N.openAncestors();
  }, []);
  const S = R(
    (L) => {
      if (f) {
        L.preventDefault();
        return;
      }
      const V = { text: l, value: c, path: d };
      [r.emit(V), n.onClick?.(V)].includes(!1) && L.preventDefault(), h || x(!0), n.onSelectedChange?.(!0);
    },
    [f, l, c, d, r, n, h]
  ), M = R(() => {
    f || (p || r.notifyOpened(e, t), y(!p));
  }, [f, p, r, e, t, y]), D = R(
    (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), a ? M() : L.target.click()) : L.key === "Escape" && p ? (L.preventDefault(), y(!1)) : L.key === "ArrowRight" && a && !p ? (L.preventDefault(), r.notifyOpened(e, t), y(!0)) : L.key === "ArrowLeft" && p && (L.preventDefault(), y(!1));
    },
    [a, M, p, y, r, e, t]
  ), E = a && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [ct.caret, p ? ct.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, A = n.template ?? /* @__PURE__ */ z(tt, { children: [
    /* @__PURE__ */ o(
      Ay,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: ct.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: ct.text, children: l }),
    E
  ] }), k = `${r.baseId}-panel-${e}`, w = `${r.baseId}-trigger-${e}`, C = [
    ct.trigger,
    f ? ct.disabled : null,
    p ? ct.expanded : null,
    v ? ct.selected : null
  ].filter(Boolean).join(" "), T = r.level > 0 ? "menuitem" : void 0, j = a ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: w,
      role: T,
      "aria-expanded": p,
      "aria-controls": k,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: C,
      onClick: M,
      onKeyDown: D,
      children: A
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: w,
      role: T,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: C,
      onClick: S,
      onKeyDown: D,
      children: A
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: w,
      role: T,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: C,
      onClick: S,
      onKeyDown: D,
      children: A
    }
  ), B = a ? r.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: k,
      role: "menu",
      "aria-labelledby": w,
      className: ct.submenu,
      hidden: r.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(kr.Provider, { value: N, children: i.map((L, V) => /* @__PURE__ */ o(
        Gr,
        {
          itemKey: `${e}-${V}`,
          ancestors: [...t, e],
          props: L.props
        },
        `${e}-${V}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ z(
    "div",
    {
      className: ct.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        j,
        B
      ]
    }
  );
}
function vw(e) {
  if (!on(kr)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(Gr, { itemKey: e.text, ancestors: [], props: e });
}
function kw({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: c = "client",
  onClick: d,
  ariaLabel: s = "Panel menu",
  className: i,
  ...a
}) {
  const f = Pe(), [u, b] = q(0), m = Z(/* @__PURE__ */ new Set()), g = R(
    ($) => d?.($),
    [d]
  ), p = R(
    ($, v) => {
      t || (m.current = /* @__PURE__ */ new Set([$, ...v]), b((O) => O + 1));
    },
    [t]
  ), y = ($) => Array.from(
    $.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), h = ($) => {
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "ArrowDown" || $.key === "ArrowUp") {
        const v = $.target, O = y($.currentTarget), N = O.indexOf(v);
        if (N === -1) return;
        $.preventDefault();
        const S = $.key === "ArrowDown" ? 1 : -1;
        O[(N + S + O.length) % O.length]?.focus();
      } else if ($.key === "Home" || $.key === "End") {
        const v = y($.currentTarget);
        $.preventDefault(), ($.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, _ = be(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: c,
      match: l,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: m,
      emit: g,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      r,
      c,
      l,
      u,
      g,
      p
    ]
  ), x = be(
    () => lr.toArray(e).filter(gt),
    [e]
  );
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [
        ct.root,
        n === "icon" ? ct.iconOnly : null,
        n === "stacked" ? ct.stacked : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      ...a,
      children: /* @__PURE__ */ o("div", { className: ct.list, role: "presentation", children: /* @__PURE__ */ o(kr.Provider, { value: _, children: x.map(($, v) => /* @__PURE__ */ o(
        Gr,
        {
          itemKey: String(v),
          ancestors: [],
          props: $.props
        },
        `top-${v}`
      )) }) })
    }
  );
}
const jy = "_root_5numg_1", Ty = "_trigger_5numg_7", Py = "_defaultTrigger_5numg_40", Ly = "_avatar_5numg_46", Ry = "_menu_5numg_58", By = "_item_5numg_74", Fy = "_disabled_5numg_88", Hy = "_active_5numg_97", qy = "_icon_5numg_107", Ky = "_text_5numg_114", Xt = {
  root: jy,
  trigger: Ty,
  defaultTrigger: Py,
  avatar: Ly,
  menu: Ry,
  item: By,
  disabled: Fy,
  active: Hy,
  icon: qy,
  text: Ky
};
function ww({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const c = Pe(), d = `${c}-menu`, s = Z(null), i = Z(null), [a, f] = q(!1), [u, b] = q(-1), m = t, g = e.map((v, O) => v.disabled ? -1 : O).filter((v) => v >= 0), p = R(
    (v) => {
      if (v.disabled) return;
      const O = {
        text: v.text,
        path: v.path
      };
      n?.(O), f(!1), i.current?.focus();
    },
    [n]
  ), y = R(() => {
    b(g[0] ?? -1), f(!0);
  }, [g]), h = R(() => {
    f(!1), b(-1), i.current?.focus();
  }, []);
  ie(() => {
    if (!a) return;
    const v = (O) => {
      s.current && !s.current.contains(O.target) && (f(!1), b(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [a]), ie(() => {
    if (!a) return;
    const v = (O) => {
      O.key === "Escape" && (O.preventDefault(), h());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [a, h]);
  const _ = (v) => {
    if (g.length === 0) return;
    const O = g.indexOf(u), N = O === -1 ? 0 : (O + v + g.length) % g.length, S = g[N];
    S != null && b(S);
  }, x = (v) => {
    if (!a) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), y());
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
        v.preventDefault(), g[0] != null && b(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && b(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const O = e[u];
          O && !O.disabled && p(O);
        }
        break;
      case "Tab":
        f(!1), b(-1);
        break;
    }
  }, $ = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), _(1);
        break;
      case "ArrowUp":
        v.preventDefault(), _(-1);
        break;
      case "Home":
        v.preventDefault(), g[0] != null && b(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && b(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const O = e[u];
          O && !O.disabled && p(O);
        }
        break;
      case "Escape":
        v.preventDefault(), h();
        break;
      case "Tab":
        f(!1), b(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [Xt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ z("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: i,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": d,
            "aria-label": r,
            className: Xt.trigger,
            onClick: () => a ? h() : y(),
            onKeyDown: x,
            children: m ?? /* @__PURE__ */ z("span", { className: Xt.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Xt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ o("span", { children: "Profile" })
            ] })
          }
        ),
        a ? /* @__PURE__ */ o(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": u >= 0 ? `${c}-item-${u}` : void 0,
            className: Xt.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((v, O) => {
              const N = !!v.disabled, S = O === u;
              return /* @__PURE__ */ z(
                "div",
                {
                  id: `${c}-item-${O}`,
                  role: "menuitem",
                  "aria-disabled": N || void 0,
                  tabIndex: N ? -1 : 0,
                  className: [
                    Xt.item,
                    S ? Xt.active : null,
                    N ? Xt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    N || p(v);
                  },
                  onMouseEnter: () => {
                    N || b(O);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ o("span", { className: Xt.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ o("span", { className: Xt.text, children: v.text })
                  ]
                },
                `${v.text}-${O}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Wy = "_root_vv0xs_1", Uy = "_bottomRight_vv0xs_11", Vy = "_bottomLeft_vv0xs_16", Gy = "_topRight_vv0xs_21", Xy = "_topLeft_vv0xs_26", Yy = "_menu_vv0xs_31", Zy = "_itemWrapper_vv0xs_48", Jy = "_tooltip_vv0xs_54", Qy = "_main_vv0xs_76", ex = "_mainIcon_vv0xs_104", tx = "_mainOpen_vv0xs_109", nx = "_item_vv0xs_48", rx = "_disabled_vv0xs_141", sx = "_itemIcon_vv0xs_148", vt = {
  root: Wy,
  bottomRight: Uy,
  bottomLeft: Vy,
  topRight: Gy,
  topLeft: Xy,
  menu: Yy,
  itemWrapper: Zy,
  tooltip: Jy,
  main: Qy,
  mainIcon: ex,
  mainOpen: tx,
  item: nx,
  disabled: rx,
  itemIcon: sx
};
function $w({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: c
}) {
  const d = t ?? "bottom-right", i = `${Pe()}-menu`, a = Z(null), f = Z(null), [u, b] = q(!1), m = R(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      r?.(_), b(!1), f.current?.focus();
    },
    [r]
  );
  ie(() => {
    if (!u) return;
    const h = (_) => {
      a.current && !a.current.contains(_.target) && b(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [u]), ie(() => {
    if (!u) return;
    const h = (_) => {
      _.key === "Escape" && (b(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [u]);
  const g = d === "bottom-right" ? vt.bottomRight : d === "bottom-left" ? vt.bottomLeft : d === "top-right" ? vt.topRight : vt.topLeft, p = (h) => {
    !u && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), b(!0)) : u && h.key === "Escape" && (h.preventDefault(), b(!1));
  }, y = (h) => {
    h.key === "Escape" && (h.preventDefault(), b(!1), f.current?.focus());
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: a,
      className: [vt.root, g, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            className: vt.menu,
            onKeyDown: y,
            children: e.map((h, _) => {
              const x = !!h.disabled;
              return /* @__PURE__ */ z("div", { className: vt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: vt.tooltip, "aria-hidden": "true", children: h.text }),
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
                    className: [vt.item, x ? vt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => m(h),
                    children: /* @__PURE__ */ o("span", { className: vt.itemIcon, "aria-hidden": "true", children: h.icon ?? "•" })
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
            className: vt.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": i,
            "aria-label": l,
            onClick: () => b((h) => !h),
            onKeyDown: p,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [vt.mainIcon, u ? vt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const ox = "_root_1eyur_1", lx = "_list_1eyur_5", ax = "_item_1eyur_15", ix = "_link_1eyur_22", cx = "_linkButton_1eyur_23", dx = "_current_1eyur_24", ux = "_disabled_1eyur_68", fx = "_icon_1eyur_74", _x = "_text_1eyur_81", hx = "_separator_1eyur_85", Ke = {
  root: ox,
  list: lx,
  item: ax,
  link: ix,
  linkButton: cx,
  current: dx,
  disabled: ux,
  icon: fx,
  text: _x,
  separator: hx
};
function Nw({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, c = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [Ke.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Ke.list, children: e.map((d, s) => {
        const i = s === e.length - 1, a = !!d.disabled;
        return /* @__PURE__ */ z("li", { className: Ke.item, children: [
          i ? a ? /* @__PURE__ */ z(
            "span",
            {
              className: [Ke.current, Ke.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ z(
            "a",
            {
              href: d.path,
              className: Ke.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ z(
            "span",
            {
              className: Ke.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : a ? /* @__PURE__ */ z(
            "span",
            {
              className: [Ke.link, Ke.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ z(
            "a",
            {
              href: d.path,
              className: Ke.link,
              onClick: (f) => {
                f.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              className: Ke.linkButton,
              tabIndex: 0,
              onClick: () => c(d),
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ),
          i ? null : /* @__PURE__ */ o("span", { className: Ke.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${s}`);
      }) })
    }
  );
}
const px = "_link_tmy3k_1", mx = {
  link: px
}, Ow = Le(function({ children: t, icon: n, visible: r = !0, className: l, ...c }, d) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ z(tt, { children: [
    n != null && /* @__PURE__ */ o(ke, { icon: n, "aria-hidden": "true" }),
    t
  ] }), i = [mx.link, l].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: f, ...u } = c;
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
      ...c,
      children: s
    }
  );
}), gx = "_root_dnkuu_1", bx = "_list_dnkuu_5", yx = "_item_dnkuu_15", xx = "_connector_dnkuu_21", vx = "_connectorCompleted_dnkuu_30", kx = "_step_dnkuu_34", wx = "_active_dnkuu_69", $x = "_completed_dnkuu_75", Nx = "_circle_dnkuu_79", Ox = "_check_dnkuu_109", Sx = "_icon_dnkuu_114", Cx = "_number_dnkuu_119", Dx = "_text_dnkuu_124", kt = {
  root: gx,
  list: bx,
  item: yx,
  connector: xx,
  connectorCompleted: vx,
  step: kx,
  active: wx,
  completed: $x,
  circle: Nx,
  check: Ox,
  icon: Sx,
  number: Cx,
  text: Dx
};
function Sw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: c,
  onChange: d,
  Change: s,
  onSelectedIndexChange: i,
  ariaLabel: a = "Steps",
  className: f
}) {
  const u = l ?? c ?? !1, b = t ?? n, m = b !== void 0, [g, p] = q(() => Math.min(Math.max(0, b ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, m ? b : g),
    Math.max(0, e.length - 1)
  ), _ = Z(null), x = R(
    (O) => {
      const N = Math.min(
        Math.max(0, O),
        Math.max(0, e.length - 1)
      );
      m || p(N), (d ?? s ?? i)?.(N);
    },
    [m, d, s, i, e.length]
  ), $ = R(
    (O, N) => !!(N.disabled || u && O > h + 1),
    [u, h]
  ), v = (O) => {
    const N = Array.from(
      O.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), S = document.activeElement, M = S ? N.indexOf(S) : -1;
    if (O.key === "ArrowRight" || O.key === "ArrowDown") {
      if (O.preventDefault(), N.length === 0) return;
      const D = M === -1 ? 0 : (M + 1) % N.length, E = N[D];
      E && E.focus();
    } else if (O.key === "ArrowLeft" || O.key === "ArrowUp") {
      if (O.preventDefault(), N.length === 0) return;
      const D = M === -1 ? N.length - 1 : (M - 1 + N.length) % N.length, E = N[D];
      E && E.focus();
    } else O.key === "Home" ? (O.preventDefault(), N[0]?.focus()) : O.key === "End" && (O.preventDefault(), N[N.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": a,
      className: [kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: kt.list, children: e.map((O, N) => {
        const S = N === h, M = N < h, D = $(N, O);
        return /* @__PURE__ */ z(
          "li",
          {
            role: "listitem",
            className: kt.item,
            children: [
              N > 0 ? /* @__PURE__ */ o(
                "span",
                {
                  className: [
                    kt.connector,
                    M ? kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ z(
                "button",
                {
                  type: "button",
                  "data-step": N,
                  "aria-current": S ? "step" : void 0,
                  "aria-disabled": D ? "true" : void 0,
                  disabled: D,
                  tabIndex: D ? -1 : 0,
                  className: [
                    kt.step,
                    S ? kt.active : null,
                    M ? kt.completed : null,
                    D ? kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || x(N);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: kt.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ o("span", { className: kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "check", size: "sm" }) }) : O.icon ? /* @__PURE__ */ o("span", { className: kt.icon, children: O.icon }) : /* @__PURE__ */ o("span", { className: kt.number, children: N + 1 }) }),
                    /* @__PURE__ */ o("span", { className: kt.text, children: O.text })
                  ]
                }
              )
            ]
          },
          `${O.text}-${N}`
        );
      }) })
    }
  );
}
const Ex = "_root_12hod_1", zx = "_horizontal_12hod_13", Mx = "_vertical_12hod_17", Ix = "_pane_12hod_21", Ax = "_handle_12hod_31", jx = "_handleHorizontal_12hod_51", Tx = "_handleVertical_12hod_57", Px = "_handleGrip_12hod_63", Lx = "_handleCollapseHint_12hod_75", Rx = "_collapseBtn_12hod_79", Bx = "_collapseBtnCollapsed_12hod_109", At = {
  root: Ex,
  horizontal: zx,
  vertical: Mx,
  pane: Ix,
  handle: Ax,
  handleHorizontal: jx,
  handleVertical: Tx,
  handleGrip: Px,
  handleCollapseHint: Lx,
  collapseBtn: Rx,
  collapseBtnCollapsed: Bx
};
function er(e, t) {
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
function nn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Cw({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: c,
  Collapse: d,
  ariaLabel: s = "Splitter",
  className: i
}) {
  const a = e ?? t ?? "horizontal", f = a === "horizontal", u = Z(null), b = R(() => {
    const k = n.length;
    if (k === 0) return [];
    const w = n.map((T) => T.size ? er(T.size, 100 / k) : 100 / k), C = w.reduce((T, j) => T + j, 0);
    return Math.abs(C - 100) > 0.01 && C > 0 ? w.map((T) => T / C * 100) : w;
  }, [n]), [m, g] = q(() => b()), [p, y] = q(
    () => n.map((k) => !!k.collapsed)
  ), h = Z(m);
  ie(() => {
    y(n.map((k) => !!k.collapsed));
  }, [n]);
  const _ = R(
    () => n.map((k) => er(k.min, 0)),
    [n]
  ), x = R(
    () => n.map((k) => er(k.max, 100)),
    [n]
  ), $ = R(
    (k, w) => {
      const C = { paneIndex: k, newSize: w, cancel: !1 };
      return (r ?? l)?.(C), !C.cancel;
    },
    [r, l]
  ), v = R(
    (k, w) => {
      const C = { paneIndex: k, collapse: w, cancel: !1 };
      return (c ?? d)?.(C), !C.cancel;
    },
    [c, d]
  ), O = R(
    (k) => {
      const w = !p[k];
      v(k, w) && (w ? (h.current = [...m], y((C) => {
        const T = [...C];
        return T[k] !== void 0 && (T[k] = !0), T;
      }), g((C) => {
        const T = [...C], j = T[k] ?? 0, B = k < T.length - 1 ? k + 1 : k - 1;
        if (B >= 0 && B < T.length) {
          const L = T[B] ?? 0;
          T[B] = L + j, T[k] = 0;
        } else
          T[k] = 0;
        return T;
      })) : (y((C) => {
        const T = [...C];
        return T[k] !== void 0 && (T[k] = !1), T;
      }), g(() => {
        const C = [...h.current];
        return C.length !== n.length ? n.map(() => 100 / n.length) : C;
      })));
    },
    [p, m, n.length, v]
  ), N = Z(
    null
  ), S = R(
    (k, w, C) => {
      const T = u.current;
      if (!T) return null;
      const j = T.getBoundingClientRect();
      let B;
      if (f) {
        if (j.width === 0) return null;
        B = (w - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        B = (C - j.top) / j.height * 100;
      }
      let L = 0;
      for (let ee = 0; ee < k; ee++) {
        const Y = m[ee];
        Y !== void 0 && (L += Y);
      }
      return B - L;
    },
    [f, m]
  ), M = (k, w) => {
    w.preventDefault();
    const C = w.currentTarget;
    C.focus(), typeof C.setPointerCapture == "function" && C.setPointerCapture(w.pointerId), N.current = { handleIndex: k, pointerId: w.pointerId };
  }, D = (k) => {
    if (!N.current || N.current.pointerId !== k.pointerId)
      return;
    k.preventDefault();
    const w = N.current.handleIndex, C = S(w, k.clientX, k.clientY);
    if (C == null) return;
    const T = _(), j = x(), B = T[w] ?? 0, L = j[w] ?? 100, V = w + 1, ee = T[V] ?? 0, Y = j[V] ?? 100, me = m[w] ?? 0, ue = m[V] ?? 0, se = me + ue;
    if (se <= 0) return;
    let K = nn(C, B, L), ce = se - K;
    if (ce < ee) {
      if (ce = ee, K = se - ce, K < B || K > L) return;
    } else if (ce > Y && (ce = Y, K = se - ce, K < B || K > L))
      return;
    K = nn(K, B, L), ce = se - K, $(w, K) && g((re) => {
      const fe = [...re];
      return fe[w] = K, fe[V] = ce, fe;
    });
  }, E = (k) => {
    !N.current || N.current.pointerId !== k.pointerId || (N.current = null);
  }, A = (k, w) => {
    const C = _(), T = x(), j = k, B = k + 1, L = m[j] ?? 0, V = m[B] ?? 0, ee = L + V;
    let Y = 0;
    const me = !!n[j]?.collapsible, ue = !!n[B]?.collapsible;
    if (f ? w.key === "ArrowLeft" ? Y = -5 : w.key === "ArrowRight" && (Y = 5) : w.key === "ArrowUp" ? Y = -5 : w.key === "ArrowDown" && (Y = 5), w.key === "Home") {
      w.preventDefault();
      let se = C[j] ?? 0, K = ee - se;
      if (K = nn(
        K,
        C[B] ?? 0,
        T[B] ?? 100
      ), se = ee - K, se = nn(se, C[j] ?? 0, T[j] ?? 100), !$(j, se)) return;
      g((ce) => {
        const re = [...ce];
        return re[j] = se, re[B] = K, re;
      });
      return;
    }
    if (w.key === "End") {
      w.preventDefault();
      let se = T[j] ?? 100;
      se = Math.min(se, ee - (C[B] ?? 0));
      let K = ee - se;
      if (K = nn(
        K,
        C[B] ?? 0,
        T[B] ?? 100
      ), se = ee - K, se = nn(se, C[j] ?? 0, T[j] ?? 100), !$(j, se)) return;
      g((ce) => {
        const re = [...ce];
        return re[j] = se, re[B] = K, re;
      });
      return;
    }
    if ((w.key === "Enter" || w.key === " ") && (me || ue)) {
      w.preventDefault(), O(me ? j : B);
      return;
    }
    if (Y !== 0) {
      w.preventDefault();
      let se = L + Y, K = ee - se;
      const ce = C[j] ?? 0, re = T[j] ?? 100, fe = C[B] ?? 0, oe = T[B] ?? 100;
      if (se = nn(se, ce, re), K = ee - se, (K < fe || K > oe) && (K = nn(K, fe, oe), se = ee - K, se = nn(se, ce, re), K = ee - se), !$(j, se)) return;
      g(($e) => {
        const Oe = [...$e];
        return Oe[j] = se, Oe[B] = K, Oe;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      className: [
        At.root,
        f ? At.horizontal : At.vertical,
        i
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((k, w) => {
        const C = !!p[w], T = C ? 0 : m[w] ?? 100 / n.length, j = C ? { display: "none" } : f ? {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, B = er(k.min, 0), L = er(k.max, 100), V = w < n.length - 1, ee = !!n[w + 1]?.collapsible;
        return /* @__PURE__ */ z("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ z(
            "div",
            {
              role: "group",
              "aria-label": k.label ?? `Pane ${w + 1}`,
              className: At.pane,
              style: j,
              "data-collapsed": C ? "true" : void 0,
              children: [
                C ? null : k.children,
                k.collapsible && !C ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: At.collapseBtn,
                    "aria-label": `Collapse pane ${w + 1}`,
                    "aria-expanded": !C,
                    onClick: () => O(w),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                k.collapsible && C ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: At.collapseBtn,
                    "aria-label": `Expand pane ${w + 1}`,
                    "aria-expanded": !C,
                    onClick: () => O(w),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          C && k.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: At.collapseBtnCollapsed,
                "aria-label": `Expand pane ${w + 1}`,
                "aria-expanded": "false",
                onClick: () => O(w),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          V ? /* @__PURE__ */ z(
            "div",
            {
              role: "separator",
              "aria-orientation": a,
              "aria-valuemin": B,
              "aria-valuemax": L,
              "aria-valuenow": Math.round(T),
              "aria-label": `Resize handle ${w + 1}`,
              tabIndex: C || p[w + 1] ? -1 : 0,
              className: [
                At.handle,
                f ? At.handleHorizontal : At.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (Y) => M(w, Y),
              onPointerMove: D,
              onPointerUp: E,
              onKeyDown: (Y) => A(w, Y),
              children: [
                /* @__PURE__ */ o("span", { className: At.handleGrip, "aria-hidden": "true" }),
                (k.collapsible || ee) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: At.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, w);
      })
    }
  );
}
const Fx = "_root_1w3wd_1", Hx = "_list_1w3wd_5", qx = "_vertical_1w3wd_14", Kx = "_horizontal_1w3wd_20", Wx = "_item_1w3wd_28", Ux = "_link_1w3wd_32", Vx = "_active_1w3wd_57", Pn = {
  root: Fx,
  list: Hx,
  vertical: qx,
  horizontal: Kx,
  item: Wx,
  link: Ux,
  active: Vx
};
function Dw({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: c,
  Click: d,
  ariaLabel: s = "Table of contents",
  className: i
}) {
  const a = t ?? n, f = r ?? l ?? "vertical", [u, b] = q(
    () => e[0]?.selector ?? null
  ), m = Z(u);
  m.current = u;
  const g = R(
    (p, y) => {
      if (b(p.selector), (c ?? d)?.({ text: p.text, selector: p.selector }), y) {
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
    [c, d]
  );
  return ie(() => {
    if (e.length === 0) return;
    const y = (() => {
      if (a) {
        const v = document.querySelector(a);
        if (v) return v;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), x = () => {
      let v = null, O = null;
      for (const S of e) {
        const M = document.querySelector(S.selector);
        if (!M) continue;
        _.set(S.selector, M);
        const D = M.getBoundingClientRect();
        let E = D.top;
        if (y !== window) {
          const A = y.getBoundingClientRect();
          E = D.top - A.top;
        }
        E <= 80 ? (!O || E > O.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && (O = { sel: S.selector, el: M }) : (!v || E < v.top) && (v = { sel: S.selector, top: E });
      }
      const N = O?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      N && N !== m.current && b(N);
    }, $ = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const v = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((O) => {
        const N = O.filter((S) => S.isIntersecting).sort((S, M) => S.boundingClientRect.top - M.boundingClientRect.top);
        if (N[0]) {
          const S = N[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === S) {
              b(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && S.id === M.selector.slice(1)) {
              b(M.selector);
              break;
            }
          }
        } else
          x();
      }, v);
      for (const O of e) {
        const N = document.querySelector(O.selector);
        N && (h.observe(N), _.set(O.selector, N));
      }
    }
    return y === window ? (window.addEventListener("scroll", $, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", $), h?.disconnect();
    }) : (y.addEventListener("scroll", $, {
      passive: !0
    }), x(), () => {
      y.removeEventListener("scroll", $), h?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [Pn.root, Pn[f], i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Pn.list, children: e.map((p) => {
        const y = p.selector === u;
        return /* @__PURE__ */ o("li", { className: Pn.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [Pn.link, y ? Pn.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
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
const Gx = "_root_1bfit_1", Xx = "_viewport_1bfit_17", Yx = "_slide_1bfit_24", Zx = "_active_1bfit_33", Jx = "_arrow_1bfit_37", Qx = "_prev_1bfit_71", ev = "_next_1bfit_75", tv = "_pauseBtn_1bfit_79", nv = "_indicators_1bfit_110", rv = "_indicator_1bfit_110", sv = "_indicatorActive_1bfit_145", jt = {
  root: Gx,
  viewport: Xx,
  slide: Yx,
  active: Zx,
  arrow: Jx,
  prev: Qx,
  next: ev,
  pauseBtn: tv,
  indicators: nv,
  indicator: rv,
  indicatorActive: sv
};
function Ew({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: c,
  interval: d,
  Interval: s,
  pauseOnHover: i,
  PauseOnHover: a,
  showArrows: f,
  ShowArrows: u,
  showIndicators: b,
  ShowIndicators: m,
  onChange: g,
  Change: p,
  ariaLabel: y = "Carousel",
  className: h
}) {
  const _ = t ?? n, x = _ !== void 0, [$, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), O = x ? _ : $, N = e.length === 0 ? 0 : Math.min(Math.max(0, O), e.length - 1), S = l ?? c ?? !1, M = d ?? s ?? 3e3, D = i ?? a ?? !0, E = f ?? u ?? !0, A = b ?? m ?? !0, [k, w] = q(!1), [C, T] = q(!1), j = k || C, B = Z(null), L = Pe(), V = R(
    (fe) => {
      const oe = e.length === 0 ? 0 : (fe % e.length + e.length) % e.length;
      x || v(oe), (g ?? p)?.(oe);
    },
    [x, g, p, e.length]
  ), ee = R(() => {
    V(N - 1);
  }, [V, N]), Y = R(() => {
    V(N + 1);
  }, [V, N]), me = R(
    (fe) => {
      V(fe);
    },
    [V]
  );
  ie(() => {
    if (!S || j || e.length <= 1) return;
    const fe = setInterval(() => {
      V(N + 1);
    }, M);
    return () => clearInterval(fe);
  }, [S, j, M, N, V, e.length]);
  const ue = (fe) => {
    e.length !== 0 && (fe.key === "ArrowLeft" ? (fe.preventDefault(), ee()) : fe.key === "ArrowRight" ? (fe.preventDefault(), Y()) : fe.key === "Home" ? (fe.preventDefault(), me(0)) : fe.key === "End" && (fe.preventDefault(), me(e.length - 1)));
  }, se = () => {
    D && S && T(!0);
  }, K = () => {
    D && S && T(!1);
  }, ce = () => {
    D && S && T(!0);
  }, re = () => {
    D && S && T(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ z(
    "div",
    {
      ref: B,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [jt.root, h].filter(Boolean).join(" "),
      onKeyDown: ue,
      onMouseEnter: se,
      onMouseLeave: K,
      onFocusCapture: ce,
      onBlurCapture: re,
      children: [
        /* @__PURE__ */ o("div", { id: L, className: jt.viewport, children: e.map((fe, oe) => {
          const $e = oe === N;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${oe + 1} of ${e.length}`,
              "aria-hidden": $e ? void 0 : !0,
              hidden: !$e,
              className: [jt.slide, $e ? jt.active : null].filter(Boolean).join(" "),
              children: fe
            },
            oe
          );
        }) }),
        E && e.length > 1 ? /* @__PURE__ */ z(tt, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [jt.arrow, jt.prev].filter(Boolean).join(" "),
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
              className: [jt.arrow, jt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": L,
              onClick: Y,
              children: "›"
            }
          )
        ] }) : null,
        S ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: jt.pauseBtn,
            "aria-label": k ? "Resume" : "Pause",
            "aria-pressed": k,
            onClick: () => w((fe) => !fe),
            children: k ? "▶" : "⏸"
          }
        ) : null,
        A && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: jt.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((fe, oe) => {
              const $e = oe === N;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    jt.indicator,
                    $e ? jt.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${oe + 1}`,
                  "aria-current": $e ? "true" : void 0,
                  "aria-controls": L,
                  onClick: () => me(oe)
                },
                oe
              );
            })
          }
        ) : null
      ]
    }
  );
}
const ov = "_root_1aa5u_1", lv = "_group_1aa5u_20", av = "_itemWrapper_1aa5u_30", iv = "_treeitem_1aa5u_34", cv = "_disabled_1aa5u_50", dv = "_selected_1aa5u_60", uv = "_caret_1aa5u_66", fv = "_caretIcon_1aa5u_113", _v = "_caretOpen_1aa5u_120", hv = "_caretPlaceholder_1aa5u_124", pv = "_label_1aa5u_130", mv = "_loading_1aa5u_137", gv = "_loadingRow_1aa5u_143", bv = "_empty_1aa5u_149", yv = "_checkbox_1aa5u_155", at = {
  root: ov,
  group: lv,
  itemWrapper: av,
  treeitem: iv,
  disabled: cv,
  selected: dv,
  caret: uv,
  caretIcon: fv,
  caretOpen: _v,
  caretPlaceholder: hv,
  label: pv,
  loading: mv,
  loadingRow: gv,
  empty: bv,
  checkbox: yv
};
function xv({
  indeterminate: e,
  ...t
}) {
  const n = Z(null);
  return ie(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function zw({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: c,
  keyProperty: d,
  KeyProperty: s,
  selectionMode: i,
  SelectionMode: a,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: b,
  SelectedItems: m,
  defaultSelectedItem: g,
  defaultSelectedItems: p,
  onChange: y,
  Change: h,
  onExpand: _,
  Expand: x,
  onCollapse: $,
  Collapse: v,
  loadChildData: O,
  LoadChildData: N,
  template: S,
  Template: M,
  itemTemplate: D,
  ItemTemplate: E,
  ariaLabel: A,
  AriaLabel: k,
  allowCheckBoxes: w = !1,
  checkedKeys: C,
  defaultCheckedKeys: T,
  onCheckedChange: j,
  allowCheckChildren: B = !0,
  className: L
}) {
  const V = e ?? t ?? [], ee = n ?? r, Y = l ?? c ?? "text", me = d ?? s ?? "id", ue = i ?? a ?? "single", se = A ?? k ?? "Tree", K = O ?? N, ce = S ?? M ?? D ?? E, re = R(
    (H) => {
      const X = H[me];
      return X != null ? String(X) : String(H.id ?? "");
    },
    [me]
  ), fe = R(
    (H) => {
      const X = H[Y];
      if (X != null) return String(X);
      const ne = H.text;
      return ne != null ? String(ne) : "";
    },
    [Y]
  ), oe = R(
    (H) => {
      if (ee) {
        const ne = ee(H);
        if (ne !== void 0) return ne;
      }
      const X = H.children;
      if (Array.isArray(X)) return X;
    },
    [ee]
  ), $e = R(
    (H) => {
      const X = /* @__PURE__ */ new Set(), ne = (ge) => {
        for (const _e of ge) {
          const xe = re(_e);
          _e.expanded && X.add(xe);
          const Me = oe(_e);
          Me && Me.length > 0 && ne(Me);
        }
      };
      return ne(H), X;
    },
    [re, oe]
  ), [Oe, Ye] = q(
    () => $e(V)
  ), [ve, Be] = q(
    () => /* @__PURE__ */ new Map()
  ), [we, ot] = q(() => /* @__PURE__ */ new Set()), nt = f ?? u, Ze = b ?? m, lt = ue === "multiple" ? Ze !== void 0 : nt !== void 0, G = R(() => {
    if (ue === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((ne) => re(ne)));
      const H = /* @__PURE__ */ new Set(), X = (ne) => {
        for (const ge of ne) {
          ge.selected && H.add(re(ge));
          const _e = oe(ge);
          _e && X(_e);
        }
      };
      return X(V), H;
    } else {
      if (g) return /* @__PURE__ */ new Set([re(g)]);
      let H = null;
      const X = (ne) => {
        for (const ge of ne) {
          if (ge.selected)
            return H = re(ge), !0;
          const _e = oe(ge);
          if (_e && X(_e)) return !0;
        }
        return !1;
      };
      return X(V), H ? /* @__PURE__ */ new Set([H]) : /* @__PURE__ */ new Set();
    }
  }, [
    ue,
    g,
    p,
    re,
    oe,
    V
  ]), [I, U] = q(
    () => G()
  ), J = be(() => {
    if (ue === "multiple") {
      if (Ze !== void 0) {
        const H = Ze;
        return H ? new Set(H.map((X) => re(X))) : /* @__PURE__ */ new Set();
      }
      return I;
    } else {
      if (nt !== void 0) {
        const H = nt;
        return H ? /* @__PURE__ */ new Set([re(H)]) : /* @__PURE__ */ new Set();
      }
      return I;
    }
  }, [
    ue,
    Ze,
    nt,
    I,
    re
  ]), he = R(
    (H) => {
      let X;
      const ne = (ge) => {
        for (const _e of ge) {
          if (re(_e) === H)
            return X = _e, !0;
          const Me = ve.get(re(_e)) ?? oe(_e);
          if (Me && ne(Me)) return !0;
        }
        return !1;
      };
      if (ne(V), !X) {
        for (const ge of ve.values())
          if (ne(ge)) break;
      }
      return X;
    },
    [V, ve, re, oe]
  ), te = R(() => {
    const H = /* @__PURE__ */ new Map(), X = (ne) => {
      for (const ge of ne) {
        const _e = re(ge);
        H.set(_e, ge);
        const Me = ve.get(_e) ?? oe(ge);
        Me && X(Me);
      }
    };
    return X(V), H;
  }, [V, ve, re, oe]), ye = R(
    (H) => {
      const X = re(H);
      if (!H.disabled)
        if (ue === "multiple") {
          const ge = new Set(J);
          ge.has(X) ? ge.delete(X) : ge.add(X), lt || U(ge);
          const _e = y ?? h;
          if (_e) {
            const xe = te(), Me = [];
            for (const ze of ge) {
              const Ve = xe.get(ze) ?? he(ze);
              Ve && Me.push(Ve);
            }
            _e({ item: H, selectedItems: Me });
          }
        } else if (!J.has(X) || J.size !== 1 || !J.has(X)) {
          lt || U(/* @__PURE__ */ new Set([X]));
          const _e = y ?? h;
          _e && _e({ item: H, selectedItem: H });
        } else {
          const _e = y ?? h;
          _e && _e({ item: H, selectedItem: H });
        }
    },
    [
      re,
      ue,
      J,
      lt,
      y,
      h,
      te,
      he
    ]
  ), Ee = R(
    async (H) => {
      const X = re(H);
      if (!!H.disabled) return;
      const ge = Oe.has(X), _e = _ ?? x, xe = $ ?? v, Me = oe(H), Ve = ve.get(X) ?? Me, ft = !(Ve !== void 0 && Ve.length > 0) && K != null;
      if (ge) {
        Ye((et) => {
          const Ge = new Set(et);
          return Ge.delete(X), Ge;
        }), xe?.({ item: H });
        return;
      }
      if (ft) {
        if (we.has(X)) return;
        ot((et) => {
          const Ge = new Set(et);
          return Ge.add(X), Ge;
        });
        try {
          const Ge = await K(H);
          Be((qt) => {
            const Tt = new Map(qt);
            return Tt.set(X, Ge), Tt;
          }), Ye((qt) => {
            const Tt = new Set(qt);
            return Tt.add(X), Tt;
          }), _e?.({ item: H });
        } catch {
        } finally {
          ot((et) => {
            const Ge = new Set(et);
            return Ge.delete(X), Ge;
          });
        }
        return;
      }
      Ye((et) => {
        const Ge = new Set(et);
        return Ge.add(X), Ge;
      }), _e?.({ item: H });
    },
    [
      re,
      Oe,
      oe,
      ve,
      K,
      we,
      _,
      x,
      $,
      v
    ]
  ), Fe = be(() => {
    const H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), ge = (_e, xe) => {
      for (const Me of _e) {
        const ze = re(Me);
        H.has(ze) || H.set(ze, []), X.set(ze, xe), Me.disabled && ne.add(ze);
        const Qe = ve.get(ze) ?? oe(Me);
        Qe && Qe.length > 0 && (H.set(
          ze,
          Qe.map((ft) => re(ft))
        ), ge(Qe, ze));
      }
    };
    return ge(V, null), { childrenOf: H, parentOf: X, disabledKeys: ne };
  }, [V, ve, re, oe]), He = R(
    (H) => {
      const X = [], ne = [...Fe.childrenOf.get(H) ?? []];
      for (; ne.length > 0; ) {
        const ge = ne.pop();
        X.push(ge), ne.push(...Fe.childrenOf.get(ge) ?? []);
      }
      return X;
    },
    [Fe]
  ), [rt, ln] = q(
    () => new Set(T ?? [])
  ), Q = C !== void 0 ? new Set(C) : rt, Se = R(
    (H) => {
      const X = Fe.disabledKeys;
      return He(H).filter((ne) => !X.has(ne));
    },
    [He, Fe]
  ), dt = R(
    (H) => {
      if (Q.has(H)) return !0;
      if (!w || !B) return !1;
      const X = Se(H);
      return X.length > 0 && X.every((ne) => Q.has(ne));
    },
    [Q, w, B, Se]
  ), zt = R(
    (H) => {
      if (!w || !B || Q.has(H))
        return !1;
      const X = Se(H);
      if (X.length === 0) return !1;
      const ne = X.filter((ge) => Q.has(ge)).length;
      return ne > 0 && ne < X.length;
    },
    [Q, w, B, Se]
  ), ut = R(
    (H) => {
      if (!w || H.disabled) return;
      const X = re(H), ne = new Set(Q);
      if (ne.has(X) || dt(X)) {
        if (ne.delete(X), B)
          for (const ge of Se(X)) ne.delete(ge);
      } else if (ne.add(X), B)
        for (const ge of Se(X)) ne.add(ge);
      C === void 0 && ln(ne), j?.([...ne]);
    },
    [
      w,
      B,
      C,
      Q,
      Se,
      re,
      dt,
      j
    ]
  ), Ce = be(() => {
    const H = [], X = (ne, ge, _e) => {
      ne.forEach((xe, Me) => {
        const ze = re(xe), Ve = fe(xe), Qe = ve.get(ze) ?? oe(xe);
        let ft;
        ve.has(ze) ? ft = ve.get(ze).length > 0 : Qe !== void 0 ? ft = Qe.length > 0 : K ? ft = !0 : ft = !1;
        const et = Oe.has(ze), Ge = !!xe.disabled, qt = ne.length, Tt = Me + 1;
        if (H.push({
          item: xe,
          key: ze,
          text: Ve,
          level: ge,
          posInSet: Tt,
          setSize: qt,
          hasChildren: ft,
          expanded: et,
          parentKey: _e,
          disabled: Ge
        }), ft && et) {
          const an = ve.get(ze) ?? Qe;
          an && an.length > 0 && X(an, ge + 1, ze);
        }
      });
    };
    return X(V, 1, null), H;
  }, [
    V,
    re,
    fe,
    oe,
    ve,
    Oe,
    K,
    we
  ]), [je, Mt] = q(
    () => Ce[0]?.key ?? null
  ), yt = Z(""), Je = Z(null), W = Z(null);
  ie(() => {
    if (!je && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    } else if (je && !Ce.some((H) => H.key === je)) {
      const H = Ce[0];
      Mt(H ? H.key : null);
    }
  }, [Ce, je]), ie(() => {
    if (je) {
      const H = W.current?.querySelector(
        `[data-key="${CSS.escape(je)}"]`
      );
      let X = null;
      H || (X = W.current?.querySelector(
        `[data-key="${je}"]`
      ) ?? null);
      const ne = H ?? X;
      ne && document.activeElement !== ne && W.current?.contains(document.activeElement) && ne.focus();
    }
  }, [je]);
  const le = R((H) => {
    Mt(H), requestAnimationFrame(() => {
      const X = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(H) : H;
      let ne = W.current?.querySelector(
        `[data-key="${X}"]`
      );
      ne || (ne = W.current?.querySelector(`[data-key="${H}"]`) ?? null), ne?.focus();
    });
  }, []), Ie = R(
    (H) => Ce.find((ne) => ne.key === H)?.parentKey ?? null,
    [Ce]
  ), Te = R(
    (H) => {
      if (Ce.length === 0) return;
      const X = je ? Ce.findIndex((_e) => _e.key === je) : -1, ne = X >= 0 ? Ce[X] : void 0;
      let ge = null;
      if (H.key === "ArrowDown") {
        if (H.preventDefault(), X === -1)
          ge = Ce[0]?.key ?? null;
        else {
          const _e = (X + 1) % Ce.length, xe = Ce[_e];
          xe && (ge = xe.key);
        }
        ge && le(ge);
        return;
      }
      if (H.key === "ArrowUp") {
        if (H.preventDefault(), X === -1) {
          const _e = Ce[Ce.length - 1];
          _e && (ge = _e.key);
        } else {
          const _e = (X - 1 + Ce.length) % Ce.length, xe = Ce[_e];
          xe && (ge = xe.key);
        }
        ge && le(ge);
        return;
      }
      if (H.key === "ArrowRight") {
        if (H.preventDefault(), !ne) return;
        if (ne.hasChildren && !ne.expanded)
          Ee(ne.item);
        else if (ne.hasChildren && ne.expanded) {
          const _e = X + 1, xe = Ce[_e];
          xe && xe.parentKey === ne.key && le(xe.key);
        }
        return;
      }
      if (H.key === "ArrowLeft") {
        if (H.preventDefault(), !ne) return;
        if (ne.hasChildren && ne.expanded)
          Ee(ne.item);
        else {
          const _e = Ie(ne.key);
          _e && le(_e);
        }
        return;
      }
      if (H.key === "Home") {
        H.preventDefault();
        const _e = Ce[0];
        _e && le(_e.key);
        return;
      }
      if (H.key === "End") {
        H.preventDefault();
        const _e = Ce[Ce.length - 1];
        _e && le(_e.key);
        return;
      }
      if (H.key === "Enter" || H.key === " ") {
        if (H.key === " " && H.target?.tagName === "INPUT" || (H.preventDefault(), !ne)) return;
        if (H.key === " " && w) {
          const _e = he(ne.key);
          _e && ut(_e);
          return;
        }
        ye(ne.item);
        return;
      }
      if (H.key.length === 1 && /^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const _e = (yt.current + H.key).toLowerCase();
        yt.current = _e, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          yt.current = "";
        }, 500);
        const xe = X >= 0 ? X + 1 : 0, Ve = [...Ce, ...Ce].slice(xe, xe + Ce.length).find((Qe) => Qe.text.toLowerCase().startsWith(_e));
        Ve && le(Ve.key);
        return;
      }
    },
    [
      Ce,
      je,
      le,
      Ee,
      ye,
      Ie,
      w,
      ut
    ]
  ), Ht = R(() => {
    if (!je && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    }
  }, [je, Ce]), st = (H, X, ne) => /* @__PURE__ */ o("ul", { role: "group", className: at.group, children: H.map((ge, _e) => {
    const xe = re(ge), Me = fe(ge), ze = ve.get(xe) ?? oe(ge);
    let Ve;
    ve.has(xe) ? Ve = ve.get(xe).length > 0 : ze !== void 0 ? Ve = ze.length > 0 : K ? Ve = !0 : Ve = !1;
    const Qe = Oe.has(xe), ft = J.has(xe), et = !!ge.disabled, Ge = we.has(xe), qt = je === xe, Tt = H.length, an = _e + 1, Bn = ce ? ce(ge) : Me, Fn = w ? {
      checked: dt(xe),
      indeterminate: zt(xe)
    } : null;
    return /* @__PURE__ */ z("li", { role: "none", className: at.itemWrapper, children: [
      /* @__PURE__ */ z(
        "div",
        {
          role: "treeitem",
          "data-key": xe,
          tabIndex: qt ? 0 : -1,
          "aria-expanded": Ve ? Qe : void 0,
          "aria-selected": ft,
          "aria-level": X,
          "aria-setsize": Tt,
          "aria-posinset": an,
          "aria-disabled": et || void 0,
          "aria-busy": Ge || void 0,
          className: [
            at.treeitem,
            ft ? at.selected : null,
            et ? at.disabled : null,
            qt ? at.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            le(xe), et || ye(ge);
          },
          onFocus: () => Mt(xe),
          children: [
            w ? /* @__PURE__ */ o(
              xv,
              {
                className: at.checkbox,
                checked: Fn?.checked ?? !1,
                indeterminate: Fn?.indeterminate ?? !1,
                disabled: et,
                "aria-label": `Select ${Me}`,
                onClick: (mn) => mn.stopPropagation(),
                onChange: () => ut(ge)
              }
            ) : null,
            Ve ? /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: at.caret,
                "aria-label": `${Qe ? "Collapse" : "Expand"} ${Me}`,
                "aria-expanded": Qe,
                tabIndex: -1,
                disabled: et,
                onClick: (mn) => {
                  mn.stopPropagation(), le(xe), Ee(ge);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      at.caretIcon,
                      Qe ? at.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(ke, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ o(
              "span",
              {
                className: at.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ o("span", { className: at.label, children: Bn }),
            Ge ? /* @__PURE__ */ o("span", { className: at.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      Ve && Qe ? Ge ? /* @__PURE__ */ o("div", { className: at.loadingRow, "aria-busy": "true", children: "Loading…" }) : ze && ze.length > 0 ? st(ze, X + 1) : ve.has(xe) && ve.get(xe).length > 0 ? st(
        ve.get(xe),
        X + 1
      ) : (ze && ze.length === 0, null) : null
    ] }, xe);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: W,
      role: "tree",
      "aria-label": se,
      "aria-multiselectable": ue === "multiple" || void 0,
      tabIndex: 0,
      className: [at.root, L].filter(Boolean).join(" "),
      onKeyDown: Te,
      onFocus: Ht,
      children: V.length === 0 ? /* @__PURE__ */ o("div", { className: at.empty, children: "No items" }) : st(V, 1)
    }
  );
}
const vv = "_root_10fdq_1", kv = "_panel_10fdq_8", wv = "_header_10fdq_19", $v = "_listbox_10fdq_28", Nv = "_option_10fdq_42", Ov = "_disabled_10fdq_57", Sv = "_active_10fdq_66", Cv = "_selected_10fdq_70", Dv = "_empty_10fdq_86", Ev = "_controls_10fdq_93", zv = "_reorder_10fdq_102", Mv = "_btn_10fdq_110", Ae = {
  root: vv,
  panel: kv,
  header: wv,
  listbox: $v,
  option: Nv,
  disabled: Ov,
  active: Sv,
  selected: Cv,
  empty: Dv,
  controls: Ev,
  reorder: zv,
  btn: Mv
};
function it(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function pr(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Mw({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: c,
  targetValue: d,
  TargetValue: s,
  data: i,
  Data: a,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: b,
  TargetChange: m,
  keyProperty: g,
  KeyProperty: p,
  onMove: y,
  Move: h,
  ariaLabel: _,
  AriaLabel: x,
  className: $
}) {
  const v = g ?? p ?? "id", O = _ ?? x ?? "PickList", N = e ?? t ?? l ?? c ?? i ?? a ?? [], S = n ?? r ?? d ?? s ?? [], [M, D] = q(() => [
    ...N
  ]), [E, A] = q(() => [
    ...S
  ]);
  ie(() => {
    const I = e ?? t ?? l ?? c ?? i ?? a;
    I !== void 0 && D([...I]);
  }, [e, t, l, c, i, a]), ie(() => {
    const I = n ?? r ?? d ?? s;
    I !== void 0 && A([...I]);
  }, [n, r, d, s]);
  const [k, w] = q(
    () => /* @__PURE__ */ new Set()
  ), [C, T] = q(
    () => /* @__PURE__ */ new Set()
  ), [j, B] = q(() => {
    const I = N.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), [L, V] = q(() => {
    const I = S.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), ee = be(
    () => M.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [M]
  ), Y = be(
    () => E.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [E]
  );
  ie(() => {
    if (j >= M.length) {
      const I = ee[ee.length - 1];
      B(I ?? 0);
    } else if (M.length > 0 && ee.length > 0 && !ee.includes(j)) {
      const I = ee[0];
      I !== void 0 && B(I);
    }
  }, [j, M.length, ee]), ie(() => {
    if (L >= E.length) {
      const I = Y[Y.length - 1];
      V(I ?? 0);
    } else if (E.length > 0 && Y.length > 0 && !Y.includes(L)) {
      const I = Y[0];
      I !== void 0 && V(I);
    }
  }, [L, E.length, Y]), ie(() => {
    w((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const J of I)
        M.some(
          (te) => it(te, v) === J && !te.disabled
        ) && U.add(J);
      return U;
    });
  }, [M, v]), ie(() => {
    T((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const J of I)
        E.some(
          (te) => it(te, v) === J && !te.disabled
        ) && U.add(J);
      return U;
    });
  }, [E, v]);
  const me = R(
    (I) => {
      (f ?? u)?.(I);
    },
    [f, u]
  ), ue = R(
    (I) => {
      (b ?? m)?.(I);
    },
    [b, m]
  ), se = R(
    (I) => {
      (y ?? h)?.(I);
    },
    [y, h]
  ), K = R(
    (I) => {
      const U = M[I];
      if (!U || U.disabled) return;
      const J = it(U, v);
      w((he) => {
        const te = new Set(he);
        return te.has(J) ? te.delete(J) : te.add(J), te;
      }), B(I);
    },
    [M, v]
  ), ce = R(
    (I) => {
      const U = E[I];
      if (!U || U.disabled) return;
      const J = it(U, v);
      T((he) => {
        const te = new Set(he);
        return te.has(J) ? te.delete(J) : te.add(J), te;
      }), V(I);
    },
    [E, v]
  ), re = R(() => {
    const I = [], U = [];
    for (const ye of M) {
      const Ee = it(ye, v);
      k.has(Ee) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const J = U, he = [...E, ...I];
    D(J), A(he), w(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, v)));
    T(te), me(J), ue(he), se({
      source: J,
      target: he,
      moved: I,
      direction: "toTarget"
    });
  }, [
    M,
    E,
    k,
    v,
    me,
    ue,
    se
  ]), fe = R(() => {
    const I = [], U = [];
    for (const ye of E) {
      const Ee = it(ye, v);
      C.has(Ee) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const J = U, he = [...M, ...I];
    A(J), D(he), T(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, v)));
    w(te), me(he), ue(J), se({
      source: he,
      target: J,
      moved: I,
      direction: "toSource"
    });
  }, [
    M,
    E,
    C,
    v,
    me,
    ue,
    se
  ]), oe = R(() => {
    const I = M.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = M.filter((he) => !!he.disabled), J = [...E, ...I];
    D(U), A(J), w(/* @__PURE__ */ new Set()), me(U), ue(J), se({
      source: U,
      target: J,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    M,
    E,
    v,
    me,
    ue,
    se
  ]), $e = R(() => {
    const I = E.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = E.filter((he) => !!he.disabled), J = [...M, ...I];
    A(U), D(J), T(/* @__PURE__ */ new Set()), me(J), ue(U), se({
      source: J,
      target: U,
      moved: I,
      direction: "allToSource"
    });
  }, [M, E, me, ue, se]), Oe = R(() => {
    if (C.size === 0) return;
    const I = [...E], U = C, J = [];
    for (let te = 1; te < I.length; te++) {
      const ye = I[te], Ee = I[te - 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, v), He = it(Ee, v);
      U.has(Fe) && !U.has(He) && !ye.disabled && !Ee.disabled && (I[te - 1] = ye, I[te] = Ee, J.push(ye));
    }
    if (J.length === 0) return;
    A(I), ue(I), se({ source: M, target: I, moved: J, direction: "up" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, v) === he
      );
      te >= 0 && V(te);
    }
  }, [
    E,
    C,
    v,
    M,
    ue,
    se
  ]), Ye = R(() => {
    if (C.size === 0) return;
    const I = [...E], U = C, J = [];
    for (let te = I.length - 2; te >= 0; te--) {
      const ye = I[te], Ee = I[te + 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, v), He = it(Ee, v);
      U.has(Fe) && !U.has(He) && !ye.disabled && !Ee.disabled && (I[te] = Ee, I[te + 1] = ye, J.push(ye));
    }
    if (J.length === 0) return;
    A(I), ue(I), se({ source: M, target: I, moved: J, direction: "down" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, v) === he
      );
      te >= 0 && V(te);
    }
  }, [
    E,
    C,
    v,
    M,
    ue,
    se
  ]), ve = k.size > 0, Be = C.size > 0, we = Z(""), ot = Z(
    null
  ), nt = Z(""), Ze = Z(
    null
  ), Nt = R(
    (I) => {
      if (M.length === 0) return;
      const U = ee;
      if (U.length === 0) return;
      const J = U.includes(j) ? j : U[0] ?? 0;
      let he = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const te = U.indexOf(J);
        he = U[(te + 1) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const te = U.indexOf(J);
        he = U[(te - 1 + U.length) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), he = U[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), he = U[U.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), K(J);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const te = (we.current + I.key).toLowerCase();
        we.current = te, ot.current && clearTimeout(ot.current), ot.current = setTimeout(() => {
          we.current = "";
        }, 500);
        const ye = [...U, ...U], Ee = U.indexOf(J) + 1, Fe = ye.slice(Ee).find(
          (He) => pr(M[He]).toLowerCase().startsWith(te)
        );
        Fe != null && B(Fe);
        return;
      }
      he >= 0 && B(he);
    },
    [M, ee, j, K]
  ), bt = R(
    (I) => {
      if (E.length === 0) return;
      const U = Y;
      if (U.length === 0) return;
      const J = U.includes(L) ? L : U[0] ?? 0;
      let he = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const te = U.indexOf(J);
        he = U[(te + 1) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const te = U.indexOf(J);
        he = U[(te - 1 + U.length) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), he = U[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), he = U[U.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), ce(J);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const te = (nt.current + I.key).toLowerCase();
        nt.current = te, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          nt.current = "";
        }, 500);
        const ye = [...U, ...U], Ee = U.indexOf(J) + 1, Fe = ye.slice(Ee).find(
          (He) => pr(E[He]).toLowerCase().startsWith(te)
        );
        Fe != null && V(Fe);
        return;
      }
      he >= 0 && V(he);
    },
    [E, Y, L, ce]
  ), lt = Z(null), G = Z(null);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Ae.root, $].filter(Boolean).join(" "),
      "aria-label": O,
      children: [
        /* @__PURE__ */ z("div", { className: Ae.panel, children: [
          /* @__PURE__ */ o("div", { className: Ae.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: lt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Ae.listbox,
              onKeyDown: Nt,
              children: M.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Ae.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : M.map((I, U) => {
                const J = it(I, v), he = k.has(J), te = U === j, ye = !!I.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": he,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": te || void 0,
                    className: [
                      Ae.option,
                      he ? Ae.selected : null,
                      te ? Ae.active : null,
                      ye ? Ae.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => K(U),
                    children: pr(I)
                  },
                  J
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ z("div", { className: Ae.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ae.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !ve || void 0,
              disabled: !ve,
              onClick: re,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ae.btn,
              "aria-label": "Move all to target",
              "aria-disabled": M.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: M.filter((I) => !I.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ae.btn,
              "aria-label": "Move all",
              "aria-disabled": M.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: M.filter((I) => !I.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ae.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Be || void 0,
              disabled: !Be,
              onClick: fe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ae.btn,
              "aria-label": "Move all to source",
              "aria-disabled": E.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: E.filter((I) => !I.disabled).length === 0,
              onClick: $e,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ z("div", { className: Ae.panel, children: [
          /* @__PURE__ */ o("div", { className: Ae.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: G,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Ae.listbox,
              onKeyDown: bt,
              children: E.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Ae.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : E.map((I, U) => {
                const J = it(I, v), he = C.has(J), te = U === L, ye = !!I.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": he,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": te || void 0,
                    className: [
                      Ae.option,
                      he ? Ae.selected : null,
                      te ? Ae.active : null,
                      ye ? Ae.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ce(U),
                    children: pr(I)
                  },
                  J
                );
              })
            }
          ),
          /* @__PURE__ */ z("div", { className: Ae.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ae.btn,
                "aria-label": "Move up",
                "aria-disabled": !Be || void 0,
                disabled: !Be,
                onClick: Oe,
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ae.btn,
                "aria-label": "Move down",
                "aria-disabled": !Be || void 0,
                disabled: !Be,
                onClick: Ye,
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Iv = "_root_1qxsp_1", Av = "_header_1qxsp_8", jv = "_title_1qxsp_15", Tv = "_navBtn_1qxsp_20", Pv = "_resources_1qxsp_39", Lv = "_resource_1qxsp_39", Rv = "_grid_1qxsp_50", Bv = "_timeCol_1qxsp_55", Fv = "_timeCell_1qxsp_61", Hv = "_dayCol_1qxsp_66", qv = "_dayHeader_1qxsp_73", Kv = "_slot_1qxsp_81", Wv = "_event_1qxsp_91", wt = {
  root: Iv,
  header: Av,
  title: jv,
  navBtn: Tv,
  resources: Pv,
  resource: Lv,
  grid: Rv,
  timeCol: Bv,
  timeCell: Fv,
  dayCol: Hv,
  dayHeader: qv,
  slot: Kv,
  event: Wv
};
function Ds(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Iw({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: c,
  onSlotClick: d,
  ariaLabel: s = "Scheduler",
  className: i
}) {
  const [a, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? a, b = (p) => {
    n || f(p), r?.(p);
  }, m = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (p, y) => {
    const h = new Date(u);
    return h.setDate(u.getDate() - u.getDay() + y), h;
  }) : Array.from({ length: 30 }, (p, y) => {
    const h = new Date(u);
    return h.setDate(1 + y), h;
  }), g = Array.from({ length: 12 }, (p, y) => 8 + y);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [wt.root, i].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ z("div", { className: wt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: wt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(u);
                p.setDate(p.getDate() - 7), b(p);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: wt.title, children: u.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: wt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const p = new Date(u);
                p.setDate(p.getDate() + 7), b(p);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: wt.resources, children: l.map((p) => /* @__PURE__ */ o(
          "div",
          {
            className: wt.resource,
            role: "presentation",
            "aria-label": p.name,
            children: p.name
          },
          p.id
        )) }),
        /* @__PURE__ */ z("div", { className: wt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: wt.timeCol, role: "presentation", children: g.map((p) => /* @__PURE__ */ z("div", { className: wt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          m.map((p) => /* @__PURE__ */ z(
            "div",
            {
              className: wt.dayCol,
              role: "presentation",
              title: p.toLocaleDateString(),
              onClick: () => d?.({ date: p }),
              tabIndex: 0,
              "aria-label": p.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: wt.dayHeader, children: p.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                g.map((y) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: wt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(p);
                      h.setHours(y), d?.({ date: h });
                    }
                  },
                  y
                )),
                e.filter((y) => y.start.toDateString() === p.toDateString()).map((y) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: wt.event,
                    "aria-label": `${y.title} ${Ds(y.start)} - ${Ds(y.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: y }),
                    children: y.title
                  },
                  y.id
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
const Uv = "_root_dj5ne_1", Vv = "_header_dj5ne_8", Gv = "_headerCell_dj5ne_15", Xv = "_timeline_dj5ne_21", Yv = "_row_dj5ne_26", Zv = "_taskName_dj5ne_32", Jv = "_timelineCell_dj5ne_37", Qv = "_bar_dj5ne_43", e2 = "_progress_dj5ne_56", t2 = "_dep_dj5ne_61", Yt = {
  root: Uv,
  header: Vv,
  headerCell: Gv,
  timeline: Xv,
  row: Yv,
  taskName: Zv,
  timelineCell: Jv,
  bar: Qv,
  progress: e2,
  dep: t2
};
function Aw({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [c, d] = q(null);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Yt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ z("div", { className: Yt.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Yt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ z("div", { className: Yt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ z(
          "div",
          {
            className: Yt.row,
            role: "row",
            "aria-selected": c === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Yt.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ z("div", { className: Yt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Yt.bar,
                    role: "button",
                    "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
                    "aria-pressed": c === s.id,
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
                        className: Yt.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((i) => /* @__PURE__ */ o("svg", { className: Yt.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
const n2 = "_root_4b64f_1", r2 = "_fields_4b64f_6", s2 = "_chip_4b64f_13", o2 = "_table_4b64f_35", l2 = "_totalRow_4b64f_55", a2 = "_total_4b64f_55", Ln = {
  root: n2,
  fields: r2,
  chip: s2,
  table: o2,
  totalRow: l2,
  total: a2
}, mr = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function tr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function jw({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: c = "Pivot table",
  className: d
}) {
  const s = t, i = n, a = r, f = (y, h, _) => {
    const x = y === "row" ? s.filter((O) => O.property !== h) : s, $ = y === "col" ? i.filter((O) => O.property !== h) : i, v = y === "agg" ? a.filter((O) => !(O.property === h && O.aggregate === _)) : a;
    l?.({
      rowFields: x,
      columnFields: $,
      aggregateFields: v
    });
  }, u = (y, h) => h.map((_) => String(y[_.property])).join(""), b = [
    ...new Set(s.length ? e.map((y) => u(y, s)) : [""])
  ].sort(), m = [
    ...new Set(i.length ? e.map((y) => u(y, i)) : [""])
  ].sort(), g = (y, h, _) => {
    const x = e.filter(
      (v) => u(v, s) === y && u(v, i) === h
    ), $ = x.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !$.length && _.aggregate !== "Count" ? 0 : mr[_.aggregate](
      _.aggregate === "Count" ? x.map(() => 1) : $
    );
  }, p = (y, h, _, x) => /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      className: Ln.chip,
      "aria-label": `Remove ${y} field ${_}`,
      onClick: () => f(y, h, x),
      children: [
        _,
        x ? ` (${x})` : ""
      ]
    },
    `${y}-${_}-${x ?? ""}`
  );
  return /* @__PURE__ */ z("div", { className: [Ln.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z("div", { className: Ln.fields, children: [
      s.map((y) => p("row", y.property, y.title ?? y.property)),
      i.map((y) => p("col", y.property, y.title ?? y.property)),
      a.map(
        (y) => p("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ z("table", { className: Ln.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ z("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        m.map((y) => /* @__PURE__ */ o("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ z("tbody", { children: [
        b.map((y) => /* @__PURE__ */ z("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: y || "—" }),
          m.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: tr(
                g(
                  y,
                  h,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? tr(g(y, h, a[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: Ln.total, children: a.length ? tr(
            mr[a[0].aggregate](
              m.flatMap(
                (h) => e.filter(
                  (_) => u(_, s) === y && u(_, i) === h
                ).map((_) => Number(_[a[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ z("tr", { className: Ln.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          m.map((y) => /* @__PURE__ */ o("td", { children: a.length ? tr(
            mr[a[0].aggregate](
              e.filter((h) => u(h, i) === y).map((h) => Number(h[a[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, y)),
          /* @__PURE__ */ o("td", { children: a.length ? tr(
            mr[a[0].aggregate](
              e.map((y) => Number(y[a[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const i2 = "_root_1r7co_1", c2 = "_reverse_1r7co_10", d2 = "_item_1r7co_14", u2 = "_marker_1r7co_35", f2 = "_body_1r7co_46", _2 = "_label_1r7co_50", h2 = "_content_1r7co_56", $n = {
  root: i2,
  reverse: c2,
  item: d2,
  marker: u2,
  body: f2,
  label: _2,
  content: h2
};
function Tw({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [$n.root, t ? $n.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((c, d) => /* @__PURE__ */ z("li", { className: $n.item, children: [
        /* @__PURE__ */ o("span", { className: $n.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ z("div", { className: $n.body, children: [
          /* @__PURE__ */ o("div", { className: $n.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ o("div", { className: $n.content, children: c.content })
        ] })
      ] }, d))
    }
  );
}
const p2 = "_root_rm4d8_1", m2 = "_header_rm4d8_13", g2 = "_headCell_rm4d8_22", b2 = "_row_rm4d8_32", y2 = "_cell_rm4d8_37", nr = {
  root: p2,
  header: m2,
  headCell: g2,
  row: b2,
  cell: y2
};
function Pw({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: c = "Virtual grid",
  className: d
}) {
  const [s, i] = q(
    /* @__PURE__ */ new Map()
  ), [a, f] = q(0), u = Z(/* @__PURE__ */ new Set()), b = Math.ceil(n / t), m = Math.max(0, Math.floor(a / t) - 3), g = Math.min(e, m + b + 6), p = R(
    (h, _) => {
      let x = !1;
      for (let $ = h; $ < _; $++)
        !s.has($) && !u.current.has($) && (x = !0);
      if (x) {
        for (let $ = h; $ < _; $++) u.current.add($);
        r({ skip: h, top: _ }).then(($) => {
          i((v) => {
            const O = new Map(v);
            return $.forEach((N, S) => O.set(h + S, N)), O;
          });
          for (let v = h; v < _; v++) u.current.delete(v);
        });
      }
    },
    [s, r]
  );
  ie(() => {
    p(m, g);
  }, [m, g]);
  const y = [];
  for (let h = m; h < g; h++) {
    const _ = s.get(h) ?? {};
    y.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: nr.row,
          role: "row",
          style: { height: t },
          children: l.map((x) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: nr.cell,
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
  return /* @__PURE__ */ z(
    "div",
    {
      className: [nr.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
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
        /* @__PURE__ */ o("div", { className: nr.header, role: "row", children: l.map((h) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: nr.headCell,
            style: {
              height: t,
              ...h.width ? { width: h.width } : {}
            },
            children: h.title ?? h.property
          },
          h.property
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
var Ft;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, i, a, f) {
      if (this.version = s, this.errorCorrectionLevel = i, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let u = [];
      for (let m = 0; m < this.size; m++) u.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const b = this.addEccAndInterleave(a);
      if (this.drawCodewords(b), f == -1) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const p = this.getPenaltyScore();
          p < m && (f = g, m = p), this.applyMask(g);
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
      const a = e.QrSegment.makeSegments(s);
      return t.encodeSegments(a, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, i) {
      const a = e.QrSegment.makeBytes(s);
      return t.encodeSegments([a], i);
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
    static encodeSegments(s, i, a = 1, f = 40, u = -1, b = !0) {
      if (!(t.MIN_VERSION <= a && a <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let m, g;
      for (m = a; ; m++) {
        const _ = t.getNumDataCodewords(m, i) * 8, x = c.getTotalBits(s, m);
        if (x <= _) {
          g = x;
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
        b && g <= t.getNumDataCodewords(m, _) * 8 && (i = _);
      let p = [];
      for (const _ of s) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(m), p);
        for (const x of _.getData()) p.push(x);
      }
      l(p.length == g);
      const y = t.getNumDataCodewords(m, i) * 8;
      l(p.length <= y), n(0, Math.min(4, y - p.length), p), n(0, (8 - p.length % 8) % 8, p), l(p.length % 8 == 0);
      for (let _ = 236; p.length < y; _ ^= 253)
        n(_, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (_, x) => h[x >>> 3] |= _ << 7 - (x & 7)
      ), new t(m, i, h, u);
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
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), i = s.length;
      for (let a = 0; a < i; a++)
        for (let f = 0; f < i; f++)
          a == 0 && f == 0 || a == 0 && f == i - 1 || a == i - 1 && f == 0 || this.drawAlignmentPattern(s[a], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const i = this.errorCorrectionLevel.formatBits << 3 | s;
      let a = i;
      for (let u = 0; u < 10; u++) a = a << 1 ^ (a >>> 9) * 1335;
      const f = (i << 10 | a) ^ 21522;
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
      for (let a = 0; a < 12; a++) s = s << 1 ^ (s >>> 11) * 7973;
      const i = this.version << 12 | s;
      l(i >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const f = r(i, a), u = this.size - 11 + a % 3, b = Math.floor(a / 3);
        this.setFunctionModule(u, b, f), this.setFunctionModule(b, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, i) {
      for (let a = -4; a <= 4; a++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(a)), b = s + f, m = i + a;
          0 <= b && b < this.size && 0 <= m && m < this.size && this.setFunctionModule(b, m, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, i) {
      for (let a = -2; a <= 2; a++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            i + a,
            Math.max(Math.abs(f), Math.abs(a)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, i, a) {
      this.modules[i][s] = a, this.isFunction[i][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const i = this.version, a = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(i, a))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][i], u = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][i], b = Math.floor(
        t.getNumRawDataModules(i) / 8
      ), m = f - b % f, g = Math.floor(b / f);
      let p = [];
      const y = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, x = 0; _ < f; _++) {
        let $ = s.slice(
          x,
          x + g - u + (_ < m ? 0 : 1)
        );
        x += $.length;
        const v = t.reedSolomonComputeRemainder($, y);
        _ < m && $.push(0), p.push($.concat(v));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((x, $) => {
          (_ != g - u || $ >= m) && h.push(x[_]);
        });
      return l(h.length == b), h;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const b = a - u, g = (a + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[g][b] && i < s.length * 8 && (this.modules[g][b] = r(s[i >>> 3], 7 - (i & 7)), i++);
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
        for (let a = 0; a < this.size; a++) {
          let f;
          switch (s) {
            case 0:
              f = (a + i) % 2 == 0;
              break;
            case 1:
              f = i % 2 == 0;
              break;
            case 2:
              f = a % 3 == 0;
              break;
            case 3:
              f = (a + i) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(a / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              f = a * i % 2 + a * i % 3 == 0;
              break;
            case 6:
              f = (a * i % 2 + a * i % 3) % 2 == 0;
              break;
            case 7:
              f = ((a + i) % 2 + a * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][a] && f && (this.modules[i][a] = !this.modules[i][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let u = 0; u < this.size; u++) {
        let b = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[u][p] == b ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), b || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), b = this.modules[u][p], m = 1);
        s += this.finderPenaltyTerminateAndCount(b, m, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let b = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][u] == b ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, g), b || (s += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), b = this.modules[p][u], m = 1);
        s += this.finderPenaltyTerminateAndCount(b, m, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let b = 0; b < this.size - 1; b++) {
          const m = this.modules[u][b];
          m == this.modules[u][b + 1] && m == this.modules[u + 1][b] && m == this.modules[u + 1][b + 1] && (s += t.PENALTY_N2);
        }
      let i = 0;
      for (const u of this.modules)
        i = u.reduce((b, m) => b + (m ? 1 : 0), i);
      const a = this.size * this.size, f = Math.ceil(Math.abs(i * 20 - a * 10) / a) - 1;
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
        let a = [6];
        for (let f = this.size - 7; a.length < s; f -= i)
          a.splice(1, 0, f);
        return a;
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
        const a = Math.floor(s / 7) + 2;
        i -= (25 * a - 10) * a - 55, s >= 7 && (i -= 36);
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
      let a = 1;
      for (let f = 0; f < s; f++) {
        for (let u = 0; u < i.length; u++)
          i[u] = t.reedSolomonMultiply(i[u], a), u + 1 < i.length && (i[u] ^= i[u + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, i) {
      let a = i.map((f) => 0);
      for (const f of s) {
        const u = f ^ a.shift();
        a.push(0), i.forEach(
          (b, m) => a[m] ^= t.reedSolomonMultiply(b, u)
        );
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, i) {
      if (s >>> 8 || i >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let f = 7; f >= 0; f--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (i >>> f & 1) * s;
      return l(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const i = s[1];
      l(i <= this.size * 3);
      const a = i > 0 && s[2] == i && s[3] == i * 3 && s[4] == i && s[5] == i;
      return (a && s[0] >= i * 4 && s[6] >= i ? 1 : 0) + (a && s[6] >= i * 4 && s[0] >= i ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, i, a) {
      return s && (this.finderPenaltyAddHistory(i, a), i = 0), i += this.size, this.finderPenaltyAddHistory(i, a), this.finderPenaltyCountPatterns(a);
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
    for (let a = s - 1; a >= 0; a--)
      i.push(d >>> a & 1);
  }
  function r(d, s) {
    return (d >>> s & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, i, a) {
      if (this.mode = s, this.numChars = i, this.bitData = a, i < 0) throw new RangeError("Invalid argument");
      this.bitData = a.slice();
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
      for (const a of s) n(a, 8, i);
      return new c(c.Mode.BYTE, s.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!c.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let a = 0; a < s.length; ) {
        const f = Math.min(s.length - a, 3);
        n(parseInt(s.substring(a, a + f), 10), f * 3 + 1, i), a += f;
      }
      return new c(c.Mode.NUMERIC, s.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!c.isAlphanumeric(s))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let i = [], a;
      for (a = 0; a + 2 <= s.length; a += 2) {
        let f = c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(a)) * 45;
        f += c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(a + 1)), n(f, 11, i);
      }
      return a < s.length && n(
        c.ALPHANUMERIC_CHARSET.indexOf(s.charAt(a)),
        6,
        i
      ), new c(c.Mode.ALPHANUMERIC, s.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : c.isNumeric(s) ? [c.makeNumeric(s)] : c.isAlphanumeric(s) ? [c.makeAlphanumeric(s)] : [c.makeBytes(c.toUtf8ByteArray(s))];
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
      return new c(c.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return c.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return c.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, i) {
      let a = 0;
      for (const f of s) {
        const u = f.mode.numCharCountBits(i);
        if (f.numChars >= 1 << u) return 1 / 0;
        a += 4 + u + f.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let i = [];
      for (let a = 0; a < s.length; a++)
        s.charAt(a) != "%" ? i.push(s.charCodeAt(a)) : (i.push(parseInt(s.substring(a + 1, a + 3), 16)), a += 2);
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
  e.QrSegment = c;
})(Ft || (Ft = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, c) {
        this.ordinal = l, this.formatBits = c;
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
})(Ft || (Ft = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(l, c) {
        this.modeBits = l, this.numBitsCharCount = c;
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
})(Ft || (Ft = {}));
const x2 = "_root_1leml_1", v2 = {
  root: x2
}, k2 = {
  low: Ft.QrCode.Ecc.LOW,
  medium: Ft.QrCode.Ecc.MEDIUM,
  quartile: Ft.QrCode.Ecc.QUARTILE,
  high: Ft.QrCode.Ecc.HIGH
};
function Lw({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: c,
  className: d,
  onError: s
}) {
  const i = c ?? `QR code for ${e}`, a = Z(null), f = Wr("(prefers-color-scheme: dark)"), [u, b] = q(null);
  ie(() => {
    const $ = document.documentElement;
    b($.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      b($.dataset.theme ?? null);
    });
    return v.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const m = be(() => {
    try {
      return Ft.QrCode.encodeText(e, k2[r]);
    } catch {
      return null;
    }
  }, [e, r]), g = Z(null);
  ie(() => {
    if (m !== null) {
      g.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (g.current?.value !== e || g.current?.onError !== s) && (g.current = { value: e, onError: s }, s?.($));
  }, [m, e, s]);
  const p = Math.max(0, Math.floor(l)), y = [v2.root, d].filter(Boolean).join(" ");
  if (ie(() => {
    if (n !== "canvas" || m === null) return;
    const $ = a.current, v = $?.getContext("2d");
    if (!$ || !v) return;
    const O = getComputedStyle($), N = O.getPropertyValue("--dx-text-color").trim() || "#000", S = O.getPropertyValue("--dx-surface-color").trim() || "#fff";
    w2(v, m, t, p, N, S);
  }, [n, m, t, p, f, u]), m === null)
    return /* @__PURE__ */ o("div", { className: y, role: "img", "aria-label": i, "data-qr-error": "true" });
  const h = m.size + p * 2, _ = t / h;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: a,
        className: y,
        width: t,
        height: t,
        role: "img",
        "aria-label": i,
        "data-value": e
      }
    );
  const x = [];
  for (let $ = 0; $ < m.size; $++)
    for (let v = 0; v < m.size; v++)
      m.getModule(v, $) && x.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (v + p) * _,
            y: ($ + p) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${$}`
        )
      );
  return /* @__PURE__ */ z(
    "svg",
    {
      className: y,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": i,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function w2(e, t, n, r, l, c) {
  const d = n / (t.size + r * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let s = 0; s < t.size; s++)
    for (let i = 0; i < t.size; i++)
      t.getModule(i, s) && e.fillRect((i + r) * d, (s + r) * d, d + 0.5, d + 0.5);
}
const $2 = "_root_1v9la_1", N2 = "_value_1v9la_9", Es = {
  root: $2,
  value: N2
}, zs = [
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
], Ms = 104, O2 = 106;
function S2(e) {
  const t = [Ms];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = Ms;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, O2), t;
}
function Rw({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: c
}) {
  const d = l ?? `Barcode ${e}`, s = be(() => {
    const i = [];
    let a = 0;
    for (const f of S2(e)) {
      const u = zs[f] ?? zs[0];
      for (let b = 0; b < u.length; b++) {
        const m = Number(u[b]);
        b % 2 === 0 && i.push({ x: a, w: m }), a += m;
      }
    }
    return { modules: i, total: a };
  }, [e]);
  return /* @__PURE__ */ z("span", { className: [Es.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z(
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
          s.modules.map((i, a) => /* @__PURE__ */ o(
            "rect",
            {
              x: i.x,
              y: 0,
              width: i.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            a
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ o("span", { className: Es.value, children: e })
  ] });
}
const C2 = "_root_16i43_1", D2 = "_svg_16i43_10", E2 = "_gridline_16i43_15", z2 = "_tickLabel_16i43_21", M2 = "_axisTitle_16i43_27", I2 = "_dataLabel_16i43_34", A2 = "_gaugeValue_16i43_40", j2 = "_legend_16i43_47", T2 = "_legendItem_16i43_55", P2 = "_swatch_16i43_63", L2 = "_tooltip_16i43_70", R2 = "_visuallyHidden_16i43_84", We = {
  root: C2,
  svg: D2,
  gridline: E2,
  tickLabel: z2,
  axisTitle: M2,
  dataLabel: I2,
  gaugeValue: A2,
  legend: j2,
  legendItem: T2,
  swatch: P2,
  tooltip: L2,
  visuallyHidden: R2
}, Is = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], to = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), B2 = /* @__PURE__ */ new Set([...to, "heatmap"]);
function F2(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), c = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, s = [];
  for (let i = c; i <= d + 1e-9; i += l)
    s.push(Number(i.toFixed(6)));
  return { min: c, max: d, step: l, ticks: s };
}
function H2(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function pn(e, t, n) {
  return /* @__PURE__ */ z(
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
const mt = (e) => e * Math.PI / 180;
function q2(e, t, n, r, l) {
  const { pad: c, plotW: d, plotH: s } = e, i = c.l + d / 2, a = c.t + s / 2, f = Math.min(d, s) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, b = r.reduce((g, p) => g + (Number(p.val) || 0), 0);
  let m = -90;
  return pn(
    n,
    t,
    r.map((g, p) => {
      const y = b ? g.val / b * 360 : 0, h = m, _ = m + y;
      m = _;
      const x = y > 180 ? 1 : 0, $ = i + f * Math.cos(mt(h)), v = a + f * Math.sin(mt(h)), O = i + f * Math.cos(mt(_)), N = a + f * Math.sin(mt(_)), S = i + u * Math.cos(mt(_)), M = a + u * Math.sin(mt(_)), D = i + u * Math.cos(mt(h)), E = a + u * Math.sin(mt(h)), A = u ? `M ${$} ${v} A ${f} ${f} 0 ${x} 1 ${O} ${N} L ${S} ${M} A ${u} ${u} 0 ${x} 0 ${D} ${E} Z` : `M ${i} ${a} L ${$} ${v} A ${f} ${f} 0 ${x} 1 ${O} ${N} Z`, k = (h + _) / 2, w = i + (f + 12) * Math.cos(mt(k)), C = a + (f + 12) * Math.sin(mt(k));
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: A,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(w, C, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: w,
            y: C,
            textAnchor: "middle",
            className: We.dataLabel,
            children: g.val
          }
        )
      ] }, p);
    })
  );
}
function K2(e, t, n, r, l) {
  const { pad: c, plotW: d, scale: s, xFor: i, yFor: a, categories: f } = e, u = new Map(f.map((b, m) => [b, m]));
  return pn(
    n,
    t,
    r.map((b, m) => {
      const g = u.get(b.cat) ?? 0, p = Number(r[m].cat), y = Number.isNaN(p) ? i(g) : c.l + (p - s.min) / (s.max - s.min || 1) * d, h = a(b.val), _ = t.type === "bubble" && b.size !== void 0 ? Math.max(4, Math.min(12, b.size / 10)) : 4;
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            cx: y,
            cy: h,
            r: _,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: y,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(y, h, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, m);
    })
  );
}
function W2(e, t, n, r, l) {
  const { scale: c, xFor: d, yFor: s, categories: i, series: a } = e, f = new Map(i.map((g, p) => [g, p])), u = (g) => {
    if (!t.stack) return c.min;
    let p = 0;
    for (let y = 0; y < n; y++) {
      const h = a[y];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (x) => String(x[h.categoryProperty] ?? "") === g
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, b = r.map((g) => {
    const p = f.get(g.cat) ?? 0, y = u(g.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${s(y + g.val)}`;
  }).join(" "), m = r.map((g) => {
    const p = f.get(g.cat) ?? 0, y = u(g.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${s(y)}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ z(tt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${b} L ${d(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${d(0)} ${s(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: b, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: m, fill: "none", stroke: "transparent" }),
      r.map((g, p) => {
        const y = f.get(g.cat) ?? 0, h = u(g.cat), _ = d(y), x = s(h + g.val);
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: _,
              cy: x,
              r: 4,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: _ - 12,
              y: x - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(_, x, `${t.title ?? g.cat}: ${g.val}`),
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
              className: We.dataLabel,
              children: g.val
            }
          )
        ] }, p);
      })
    ] })
  );
}
function U2(e, t, n, r, l) {
  const { pad: c, plotW: d, plotH: s, scale: i, xFor: a, yFor: f, categories: u, series: b } = e, m = new Map(u.map((p, y) => [p, y])), g = t.type === "bar";
  return pn(
    n,
    t,
    r.map((p, y) => {
      const h = m.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const w = b[k];
          if (w?.stack !== t.stack) continue;
          const C = w.data.find(
            (T) => String(T[w.categoryProperty] ?? "") === p.cat
          );
          C && (_ += Number(C[w.valueProperty]) || 0);
        }
      const x = _ + p.val, $ = b.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, v = d / Math.max(1, u.length), O = g ? 18 : Math.max(12, v / (t.stack ? 1 : b.length) - 4), N = g ? c.l + _ / (i.max - i.min || 1) * d : a(h) - O / 2 + (t.stack ? 0 : n % $ * O), S = g ? c.t + h * s / Math.max(1, u.length) + 4 : f(x), M = g ? p.val / (i.max - i.min || 1) * d : O - 4, D = g ? 16 : f(_) - f(x), E = g ? c.l + _ / (i.max - i.min || 1) * d : N, A = g ? c.t + h * s / Math.max(1, u.length) + 4 : S;
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: E,
            y: A,
            width: g ? M : O - 4,
            height: D,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              E + (g ? M : O) / 2,
              A,
              `${t.title ?? p.cat}: ${p.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: E + (g ? M : O) / 2,
            y: A - 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: p.val
          }
        )
      ] }, y);
    })
  );
}
function V2(e, t, n, r, l) {
  const { pad: c, plotW: d, plotH: s, scale: i, tooltipVisible: a, showTip: f, hideTip: u } = e, b = c.l + d / 2, m = c.t + s * 0.78, g = Math.min(d, s) * 0.36, p = 135, y = 270, h = r.reduce((O, N) => O + (Number(N.val) || 0), 0), _ = i.max - i.min || 1, x = Math.min(1, Math.max(0, (h - i.min) / _)), $ = (O, N) => {
    const [S, M] = [
      b + g * Math.cos(mt(O)),
      m + g * Math.sin(mt(O))
    ], [D, E] = [
      b + g * Math.cos(mt(N)),
      m + g * Math.sin(mt(N))
    ], A = N - O > 180 ? 1 : 0;
    return `M ${S} ${M} A ${g} ${g} 0 ${A} 1 ${D} ${E}`;
  }, v = Number(h.toFixed(2));
  return pn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ z("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: $(p, p + y),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      x > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: $(p, p + y * x),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: b, y: m - 4, textAnchor: "middle", className: We.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: $(p, p + y),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => a && f(b, m - g, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", h, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: b,
          y: m + g + 18,
          textAnchor: "middle",
          className: We.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function no(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, c = t.l + n / 2, d = t.t + r / 2, s = Math.min(n, r) / 2 - 24, i = Math.max(3, l.length), a = (u) => mt(-90 + 360 * u / i);
  return { cx: c, cy: d, radius: s, angleFor: a, vertexFor: (u, b) => {
    const m = a(u);
    return [
      c + s * b * Math.cos(m),
      d + s * b * Math.sin(m)
    ];
  } };
}
function G2(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = no(e);
  return /* @__PURE__ */ z("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
      const [i, a] = l(s, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: r,
          x2: i,
          y2: a,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function X2(e, t, n, r, l) {
  const { categories: c, tooltipVisible: d, showTip: s, hideTip: i } = e, { cx: a, cy: f, radius: u, angleFor: b, vertexFor: m } = no(e), g = e.scale.max || 1, p = (h) => r.find((_) => _.cat === h)?.val ?? 0, y = c.map((h, _) => {
    const x = Math.min(1, Math.max(0, p(h) / g)), [$, v] = m(_, x);
    return `${$},${v}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ z(tt, { children: [
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
      c.map((h, _) => {
        const x = Math.min(1, Math.max(0, p(h) / g)), [$, v] = m(_, x), [O, N] = m(_, 1);
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: $,
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
              cx: $,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && s(O, N, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => i(),
              onClick: () => {
                const S = r.find((M) => M.cat === h);
                S && e.handleClick(t, S.cat, S.val, S.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: a + (u + 14) * Math.cos(b(_)),
              y: f + (u + 14) * Math.sin(b(_)) + 4,
              textAnchor: "middle",
              className: We.tickLabel,
              children: h
            }
          )
        ] }, h);
      })
    ] })
  );
}
function Y2(e, t, n, r, l) {
  const { pad: c, plotW: d, plotH: s, tooltipVisible: i, showTip: a, hideTip: f } = e, u = r, b = Math.max(1, ...u.map((p) => Number(p.val) || 0)), m = s / Math.max(1, u.length), g = c.l + d / 2;
  return pn(
    n,
    t,
    u.map((p, y) => {
      const _ = Math.max(0, Number(p.val) || 0) / b * d, x = u[y + 1], $ = x ? Math.max(0, Number(x.val) || 0) / b * d : _ * 0.7, v = c.t + y * m + 2, O = Math.max(4, m - 6), N = 1 - y * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${g - _ / 2} ${v} L ${g + _ / 2} ${v} L ${g + $ / 2} ${v + O} L ${g - $ / 2} ${v + O} Z`,
            fill: l,
            fillOpacity: N,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => i && a(g, v, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ z(
          "text",
          {
            x: g,
            y: v + O / 2 + 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, y);
    })
  );
}
function Z2(e, t, n, r, l) {
  const { pad: c, plotW: d, plotH: s, categories: i, tooltipVisible: a, showTip: f, hideTip: u } = e, b = [];
  t.data.forEach((x) => {
    const $ = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    b.includes($) || b.push($);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), g = m.length ? Math.min(...m) : 0, p = m.length ? Math.max(...m) : 1, y = d / Math.max(1, i.length), h = s / Math.max(1, b.length), _ = (x) => p === g ? 0.6 : 0.15 + 0.85 * ((x - g) / (p - g));
  return pn(
    n,
    t,
    /* @__PURE__ */ z(tt, { children: [
      b.map((x, $) => /* @__PURE__ */ o(
        "text",
        {
          x: c.l - 8,
          y: c.t + $ * h + h / 2 + 4,
          textAnchor: "end",
          className: We.tickLabel,
          children: x
        },
        x
      )),
      r.map((x, $) => {
        const v = t.data[$], O = i.indexOf(x.cat), N = b.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (O < 0 || N < 0) return null;
        const S = c.l + O * y, M = c.t + N * h;
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: S + 1,
              y: M + 1,
              width: Math.max(1, y - 2),
              height: Math.max(1, h - 2),
              fill: l,
              fillOpacity: _(x.val),
              onMouseEnter: () => a && f(S + y / 2, M, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: S + y / 2,
              y: M + h / 2 + 4,
              textAnchor: "middle",
              className: We.dataLabel,
              children: x.val
            }
          )
        ] }, $);
      })
    ] })
  );
}
function J2(e, t, n) {
  const r = H2(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return q2(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return K2(e, t, n, r, l);
    case "line":
    case "area":
      return W2(e, t, n, r, l);
    case "gauge":
      return V2(e, t, n, r, l);
    case "radar":
      return X2(e, t, n, r, l);
    case "funnel":
      return Y2(e, t, n, r, l);
    case "heatmap":
      return Z2(e, t, n, r, l);
    default:
      return U2(e, t, n, r, l);
  }
}
function Bw({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: c = !0,
  tooltipVisible: d = !0,
  onSeriesClick: s,
  ariaLabel: i = "Chart",
  className: a
}) {
  const [f, u] = q(
    null
  ), b = be(() => {
    const D = /* @__PURE__ */ new Set();
    for (const E of e)
      for (const A of E.data) D.add(String(A[E.categoryProperty] ?? ""));
    return [...D];
  }, [e]), m = be(() => {
    const D = e.flatMap((A) => A.data.map((k) => Number(k[A.valueProperty]))).filter((A) => !Number.isNaN(A)), E = /* @__PURE__ */ new Map();
    for (const A of e) {
      if (!A.stack) continue;
      let k = E.get(A.stack);
      k || E.set(A.stack, k = /* @__PURE__ */ new Map());
      for (const w of A.data) {
        const C = String(w[A.categoryProperty] ?? ""), T = Number(w[A.valueProperty]);
        Number.isNaN(T) || k.set(C, (k.get(C) ?? 0) + T);
      }
    }
    for (const A of E.values()) D.push(...A.values());
    return D;
  }, [e]), g = r?.min ?? (m.length ? Math.min(0, ...m) : 0), p = r?.max ?? (m.length ? Math.max(...m) : 10), y = be(
    () => F2(g, p, r?.step),
    [g, p, r?.step]
  ), h = { t: 16, r: 16, b: 40, l: 56 }, _ = t - h.l - h.r, x = n - h.t - h.b, $ = (D) => h.l + D / Math.max(1, b.length - 1) * _, v = (D) => h.t + (1 - (D - y.min) / (y.max - y.min || 1)) * x, O = (D, E) => E.color ?? Is[D % Is.length], N = e.some((D) => to.has(D.type)), S = e.some((D) => B2.has(D.type)), M = {
    categories: b,
    scale: y,
    pad: h,
    plotW: _,
    plotH: x,
    xFor: $,
    yFor: v,
    colorFor: O,
    tooltipVisible: d,
    showTip: (D, E, A) => u({ x: D, y: E, text: A }),
    hideTip: () => u(null),
    handleClick: (D, E, A, k) => s?.({
      seriesTitle: D.title ?? "",
      category: E,
      value: A,
      item: k
    }),
    series: e
  };
  return /* @__PURE__ */ z(
    "figure",
    {
      className: [We.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": i,
      "aria-describedby": `${i.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ z(
          "svg",
          {
            width: t,
            height: n,
            className: We.svg,
            role: "presentation",
            children: [
              N && r?.gridlines !== !1 && y.ticks.map((D) => /* @__PURE__ */ o(
                "line",
                {
                  x1: h.l,
                  x2: h.l + _,
                  y1: v(D),
                  y2: v(D),
                  className: We.gridline
                },
                D
              )),
              S && l?.gridlines && b.map((D, E) => /* @__PURE__ */ o(
                "line",
                {
                  x1: $(E),
                  x2: $(E),
                  y1: h.t,
                  y2: h.t + x,
                  className: We.gridline
                },
                E
              )),
              N && y.ticks.map((D) => /* @__PURE__ */ o(
                "text",
                {
                  x: h.l - 8,
                  y: v(D) + 4,
                  textAnchor: "end",
                  className: We.tickLabel,
                  children: D
                },
                D
              )),
              S && b.map((D, E) => /* @__PURE__ */ o(
                "text",
                {
                  x: $(E),
                  y: h.t + x + 16,
                  textAnchor: "middle",
                  className: We.tickLabel,
                  children: D
                },
                D
              )),
              N && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: h.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${h.t + x / 2})`,
                  className: We.axisTitle,
                  children: r.title
                }
              ),
              S && l?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: h.l + _ / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: We.axisTitle,
                  children: l.title
                }
              ),
              e.some((D) => D.type === "radar") && G2(M),
              e.map((D, E) => J2(M, D, E))
            ]
          }
        ),
        f && /* @__PURE__ */ o(
          "div",
          {
            className: We.tooltip,
            style: { left: f.x, top: f.y - 28 },
            children: f.text
          }
        ),
        c && /* @__PURE__ */ o("div", { className: We.legend, children: e.map((D, E) => /* @__PURE__ */ z("span", { className: We.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: We.swatch,
              style: { backgroundColor: O(E, D) },
              "aria-hidden": "true"
            }
          ),
          D.title ?? `Series ${E + 1}`
        ] }, E)) }),
        /* @__PURE__ */ z(
          "table",
          {
            className: We.visuallyHidden,
            id: `${i.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: i }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ z("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (D) => D.data.map((E, A) => /* @__PURE__ */ z("tr", { children: [
                  /* @__PURE__ */ o("td", { children: D.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: D.rowProperty ? `${String(E[D.rowProperty] ?? "")} / ${String(E[D.categoryProperty] ?? "")}` : String(E[D.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(E[D.valueProperty] ?? "") })
                ] }, `${D.title}-${A}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function Fw({ query: e, children: t }) {
  return Wr(e) ? /* @__PURE__ */ o(tt, { children: t }) : null;
}
function Hw({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function qw() {
  const e = Z(null);
  return ie(() => {
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
  }, []), R((t) => {
    const n = e.current;
    n && (n.textContent = t);
  }, []);
}
export {
  Bd as ALERT_ICON,
  Jk as Accordion,
  jk as Alert,
  tw as AutoComplete,
  Bk as AutoGrid,
  Yk as Avatar,
  nk as Badge,
  Rw as Barcode,
  Hk as Body,
  Nw as Breadcrumb,
  On as Button,
  tk as Card,
  Ew as Carousel,
  Bw as Chart,
  Ok as CheckBox,
  rw as CheckBoxList,
  dw as ColorPicker,
  Lk as Column,
  xw as ContextMenuProvider,
  Un as DEFAULT_OPERATOR_BY_TYPE,
  ob as DEFAULT_PALETTE,
  a1 as DEFAULT_THEMES,
  vk as DataFilter,
  kk as DataGrid,
  wk as DataList,
  uw as DatePicker,
  Ic as Dialog,
  Ek as DialogProvider,
  ew as DropDown,
  bw as DropZone,
  lk as EmptyState,
  Ts as FILTER_OPERATORS,
  $w as FabMenu,
  ak as Field,
  ck as Fieldset,
  Em as Footer,
  dk as Form,
  ik as FormField,
  Aw as Gantt,
  Im as Header,
  ke as Icon,
  Nk as Input,
  $k as Label,
  Fk as Layout,
  Ow as Link,
  nw as ListBox,
  Hw as LiveRegion,
  iw as Mask,
  Fw as MediaQuery,
  hy as Menu,
  Js as MenuItem,
  cw as Numeric,
  Va as Pager,
  kw as PanelMenu,
  vw as PanelMenuItem,
  aw as Password,
  Mw as PickList,
  jw as Pivot,
  Ak as PopupProvider,
  ww as ProfileMenu,
  Kk as Progress,
  Lw as QRCode,
  sw as RadioButtonList,
  fw as Rating,
  Pk as Row,
  Iw as Scheduler,
  pw as SecurityCode,
  Sn as Select,
  ow as SelectBar,
  Wm as Sidebar,
  qk as SidebarToggle,
  mw as SignaturePad,
  Tk as Skeleton,
  _w as Slider,
  lw as SplitButton,
  Cw as Splitter,
  Rk as Stack,
  sk as Stat,
  Sw as Steps,
  Sk as Switch,
  ok as Table,
  Zk as Tabs,
  Gc as Text,
  Qk as TextArea,
  cc as TextBox,
  Wk as ThemeSwitcher,
  Uk as ThemeToggle,
  hw as TimeSpanPicker,
  Tw as Timeline,
  Mk as ToastProvider,
  Dw as Toc,
  h1 as ToggleButton,
  Ck as Tooltip,
  zw as Tree,
  gw as Upload,
  Pw as VirtualGrid,
  ti as aggregateValue,
  Ls as applyFilters,
  ei as applyGridState,
  os as collectGroupKeys,
  Nn as columnValue,
  gk as compare,
  yk as custom,
  Za as cycleSort,
  as as defaultOperatorForType,
  fk as email,
  xs as formatMasked,
  yr as formatValue,
  Gk as getAppearance,
  br as getByPath,
  Vk as getTheme,
  Ga as groupItems,
  rk as iconNames,
  Ps as matchesFilters,
  pk as maxLength,
  hk as minLength,
  Qa as paginate,
  _k as pattern,
  mk as range,
  uk as required,
  bk as requiredTrue,
  As as resolveVariant,
  ea as runValidators,
  y1 as setAppearance,
  b1 as setTheme,
  or as shadeClass,
  ga as sortItems,
  Ja as sortedItems,
  bs as subscribe,
  ni as toCsv,
  fa as toFilterString,
  ma as toODataFilterString,
  yw as useContextMenu,
  Dk as useDialog,
  Ql as useFormContext,
  xk as useFormField,
  qw as useLiveRegion,
  Wr as useMediaQuery,
  Ik as usePopup,
  Xk as useThemeService,
  zk as useToast
};
