import { jsx as o, jsxs as z, Fragment as tt } from "react/jsx-runtime";
import { forwardRef as Le, useId as Pe, isValidElement as gt, cloneElement as Fs, useState as W, useRef as Q, useCallback as R, useMemo as be, useContext as hn, createContext as Ln, useEffect as fe, Fragment as Hs, useLayoutEffect as zs, Children as ls, useImperativeHandle as qs } from "react";
function os(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const oo = "_button_eyvws_1", lo = "_filled_eyvws_36", ao = "_flat_eyvws_55", io = "_outlined_eyvws_58", co = "_text_eyvws_63", uo = "_loading_eyvws_506", fo = "_spinner_eyvws_509", _o = "_xs_eyvws_525", ho = "_sm_eyvws_531", po = "_md_eyvws_537", mo = "_lg_eyvws_543", go = "_xl_eyvws_549", bo = "_iconOnly_eyvws_555", yo = "_fullWidth_eyvws_585", Zt = {
  button: oo,
  filled: lo,
  flat: ao,
  outlined: io,
  text: co,
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
  loading: uo,
  spinner: fo,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: _o,
  sm: ho,
  md: po,
  lg: mo,
  xl: go,
  iconOnly: bo,
  fullWidth: yo
};
function xo(e, t) {
  const n = t, s = e ?? "filled";
  return { variant: s === "filled" || s === "flat" || s === "outlined" || s === "text" ? s : "filled", style: n ?? "primary" };
}
const On = Le(
  function(t, n) {
    const {
      variant: s = "filled",
      severity: l,
      shade: c = "default",
      size: u = "md",
      fullWidth: r = !1,
      iconOnly: a = !1,
      loading: i = !1,
      visible: f = !0,
      className: d,
      disabled: k,
      children: g,
      ...m
    } = t;
    if (f === !1) return null;
    const p = xo(s, l), h = p.style === "light" || p.style === "dark" ? null : os(c), _ = [
      Zt.button,
      Zt[p.variant],
      Zt[`style-${p.style}`],
      h ? Zt[h] : null,
      Zt[u],
      r ? Zt.fullWidth : null,
      a ? Zt.iconOnly : null,
      i ? Zt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      d
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ z(tt, { children: [
      i ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Zt.spinner }) : null,
      g
    ] }), w = t.href;
    if (w != null) {
      const { onClick: $, ...C } = m, M = k || i;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: w,
          className: _,
          "aria-disabled": M || void 0,
          "aria-busy": i || void 0,
          onClick: (D) => {
            if (M) {
              D.preventDefault();
              return;
            }
            $?.(D);
          },
          ...C,
          children: y
        }
      );
    }
    const { type: v = "button", ...N } = m;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: k || i,
        "aria-busy": i || void 0,
        ...N,
        children: y
      }
    );
  }
), vo = "_card_4vcae_1", ko = "_elevated_4vcae_8", wo = "_filled_4vcae_13", $o = "_outlined_4vcae_18", No = "_interactive_4vcae_22", Oo = "_text_4vcae_30", So = "_header_4vcae_46", Co = "_body_4vcae_53", Do = "_footer_4vcae_63", Hn = {
  card: vo,
  elevated: ko,
  filled: wo,
  outlined: $o,
  interactive: No,
  text: Oo,
  header: So,
  body: Co,
  footer: Do
}, Y2 = Le(function({
  variant: t = "elevated",
  header: n,
  footer: s,
  className: l,
  visible: c = !0,
  children: u,
  onKeyDown: r,
  ...a
}, i) {
  if (c === !1) return null;
  const f = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z(
      "div",
      {
        ref: i,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (d) => {
          r?.(d), !(!f || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [Hn.card, Hn[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Hn.header, children: n }),
          /* @__PURE__ */ o("div", { className: Hn.body, children: u }),
          s != null && /* @__PURE__ */ o("div", { className: Hn.footer, children: s })
        ]
      }
    )
  );
});
function Ir(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Eo = "_badge_1fy6d_1", zo = "_xs_1fy6d_21", Mo = "_sm_1fy6d_26", Io = "_md_1fy6d_31", Ao = "_lg_1fy6d_36", jo = "_xl_1fy6d_41", To = "_neutral_1fy6d_47", Po = "_primary_1fy6d_52", Lo = "_secondary_1fy6d_61", Ro = "_light_1fy6d_66", Bo = "_base_1fy6d_71", Fo = "_dark_1fy6d_76", Ho = "_info_1fy6d_81", qo = "_success_1fy6d_86", Ko = "_warning_1fy6d_95", Wo = "_danger_1fy6d_104", Uo = "_filled_1fy6d_111", Vo = "_outlined_1fy6d_161", Go = "_text_1fy6d_213", qn = {
  badge: Eo,
  xs: zo,
  sm: Mo,
  md: Io,
  lg: Ao,
  xl: jo,
  neutral: To,
  primary: Po,
  secondary: Lo,
  light: Ro,
  base: Bo,
  dark: Fo,
  info: Ho,
  success: qo,
  warning: Ko,
  danger: Wo,
  filled: Uo,
  outlined: Vo,
  text: Go,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, Z2 = Le(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: s,
  size: l = "md",
  className: c,
  visible: u = !0,
  children: r,
  ...a
}, i) {
  if (u === !1) return null;
  const f = t, d = Ir(n, "filled"), k = os(s);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: i,
      className: [
        qn.badge,
        qn[l],
        qn[f],
        qn[d],
        k ? qn[k] : null,
        c
      ].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}), Xo = "_icon_vn4jx_5", Yo = "_xs_vn4jx_24", Zo = "_sm_vn4jx_28", Jo = "_md_vn4jx_23", Qo = "_lg_vn4jx_36", el = "_xl_vn4jx_40", Js = {
  icon: Xo,
  xs: Yo,
  sm: Zo,
  md: Jo,
  lg: Qo,
  xl: el
}, J2 = [
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
], ke = Le(function({ icon: t, size: n, color: s, className: l, style: c, ...u }, r) {
  const a = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: r,
      className: [Js.icon, a ? Js[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...a || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...s === void 0 ? null : { color: s },
        ...c
      },
      "aria-hidden": "true",
      ...u,
      children: t
    }
  );
}), tl = "_stat_sjin9_1", nl = "_label_sjin9_8", sl = "_row_sjin9_16", rl = "_value_sjin9_22", ol = "_delta_sjin9_28", ll = "_success_sjin9_33", al = "_danger_sjin9_37", il = "_neutral_sjin9_41", cl = "_hint_sjin9_45", bn = {
  stat: tl,
  label: nl,
  row: sl,
  value: rl,
  delta: ol,
  success: ll,
  danger: al,
  neutral: il,
  hint: cl
}, Q2 = Le(function({ label: t, value: n, delta: s, deltaTone: l = "neutral", hint: c, className: u, ...r }, a) {
  return /* @__PURE__ */ z(
    "div",
    {
      ref: a,
      className: [bn.stat, u].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: bn.label, children: t }),
        /* @__PURE__ */ z("div", { className: bn.row, children: [
          /* @__PURE__ */ o("div", { className: bn.value, children: n }),
          s != null && /* @__PURE__ */ o("div", { className: [bn.delta, bn[l]].join(" "), children: s })
        ] }),
        c != null && /* @__PURE__ */ o("div", { className: bn.hint, children: c })
      ]
    }
  );
}), dl = "_wrap_ipozk_1", ul = "_table_ipozk_8", fl = "_caption_ipozk_14", _l = "_none_ipozk_51", hl = "_horizontal_ipozk_57", pl = "_vertical_ipozk_67", ml = "_alternating_ipozk_85", gl = "_start_ipozk_89", bl = "_center_ipozk_93", yl = "_end_ipozk_97", xl = "_empty_ipozk_101", an = {
  wrap: dl,
  table: ul,
  caption: fl,
  none: _l,
  horizontal: hl,
  vertical: pl,
  alternating: ml,
  start: gl,
  center: bl,
  end: yl,
  empty: xl
};
function ek({
  columns: e,
  rows: t,
  rowKey: n,
  empty: s,
  caption: l,
  gridLines: c = "default",
  allowAlternatingRows: u = !0,
  className: r,
  visible: a = !0
}) {
  if (a === !1) return null;
  const i = c === "default" || c === "both" ? "" : an[c];
  return /* @__PURE__ */ z("div", { className: [an.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z(
      "table",
      {
        className: [
          an.table,
          i,
          u ? an.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ o("caption", { className: an.caption, children: l }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? an[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((d) => /* @__PURE__ */ o(
            "td",
            {
              className: d.align != null ? an[d.align] : void 0,
              children: d.render != null ? d.render(f) : f[d.key]
            },
            d.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && s != null && /* @__PURE__ */ o("div", { className: an.empty, children: s })
  ] });
}
const vl = "_emptyState_1swxw_1", kl = "_icon_1swxw_13", wl = "_title_1swxw_18", $l = "_description_1swxw_24", Nl = "_action_1swxw_30", Kn = {
  emptyState: vl,
  icon: kl,
  title: wl,
  description: $l,
  action: Nl
};
function tk({
  icon: e,
  title: t,
  description: n,
  action: s,
  className: l,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ z("div", { className: [Kn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Kn.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Kn.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Kn.description, children: n }),
    s != null && /* @__PURE__ */ o("div", { className: Kn.action, children: s })
  ] });
}
const Ol = "_field_149oz_1", Sl = "_label_149oz_8", Cl = "_required_149oz_14", Dl = "_hint_149oz_19", El = "_error_149oz_24", Wn = {
  field: Ol,
  label: Sl,
  required: Cl,
  hint: Dl,
  error: El
};
function nk({
  label: e,
  htmlFor: t,
  required: n,
  hint: s,
  supporting: l,
  error: c,
  children: u,
  className: r,
  visible: a = !0
}) {
  const i = s ?? l, f = Pe(), d = Pe(), k = Pe();
  if (a === !1) return null;
  const g = c != null ? d : i != null ? k : null, m = typeof u == "function" ? u({ inputId: f, hintId: k, errorId: d }) : u, p = gt(m) && typeof m.props.id == "string" ? m.props.id : void 0, b = p ?? t ?? f, h = gt(m) && (g != null || p == null && typeof m.type == "string"), _ = p != null || t != null || h, y = h && gt(m) ? Fs(m, {
    id: b,
    "aria-describedby": g != null ? [
      m.props["aria-describedby"],
      g
    ].filter((w) => typeof w == "string").join(" ") || void 0 : m.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : m.props["aria-invalid"]
  }) : m;
  return /* @__PURE__ */ z("div", { className: [Wn.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ z(
      "label",
      {
        className: Wn.label,
        htmlFor: _ ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Wn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    c != null ? /* @__PURE__ */ o("div", { id: d, className: Wn.error, "aria-live": "polite", children: c }) : i != null ? /* @__PURE__ */ o("div", { id: k, className: Wn.hint, children: i }) : null
  ] });
}
const zl = "_formfield_6e25e_1", Ml = "_content_6e25e_8", Il = "_floating_6e25e_43", Al = "_label_6e25e_111", jl = "_start_6e25e_132", Tl = "_required_6e25e_169", Pl = "_end_6e25e_175", Ll = "_filled_6e25e_192", Rl = "_flat_6e25e_199", Bl = "_helper_6e25e_206", Fl = "_invalid_6e25e_211", Wt = {
  formfield: zl,
  content: Ml,
  floating: Il,
  label: Al,
  start: jl,
  required: Tl,
  end: Pl,
  filled: Ll,
  flat: Rl,
  helper: Bl,
  invalid: Fl
};
function sk({
  text: e,
  start: t,
  end: n,
  helper: s,
  component: l,
  allowFloatingLabel: c = !0,
  variant: u = "outlined",
  invalid: r = !1,
  required: a = !1,
  children: i,
  className: f,
  visible: d = !0
}) {
  const k = Pe(), g = Pe();
  if (d === !1) return null;
  const m = l ?? k, p = typeof i == "function" ? i({
    inputId: m
  }) : i, b = gt(p) ? p.type : null, h = typeof b == "string", _ = gt(p) && typeof b != "symbol", y = gt(p) ? p.props : null, w = typeof y?.id == "string" ? y.id : void 0, v = h && gt(p) ? p.type.toLowerCase() : null, N = v != null && (v === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), $ = _ && (s != null || r || w == null && N), C = w != null || l != null || $, M = v === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, D = v === "textarea" || v === "input" && (M == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(M)), E = $ && gt(p) ? Fs(
    p,
    {
      id: w ?? m,
      ...c && D && y?.placeholder == null ? { placeholder: " " } : {},
      ...s != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          g
        ].filter((x) => typeof x == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : p, O = e != null ? /* @__PURE__ */ z(
    "label",
    {
      className: Wt.label,
      htmlFor: C ? w ?? m : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ o("span", { className: Wt.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ z(
    "div",
    {
      className: [
        Wt.formfield,
        Wt[u],
        c ? Wt.floating : null,
        r ? Wt.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        c ? null : O,
        /* @__PURE__ */ z("div", { className: Wt.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Wt.start, children: t }),
          E,
          c ? O : null,
          n != null && /* @__PURE__ */ o("div", { className: Wt.end, children: n })
        ] }),
        s != null && /* @__PURE__ */ o("div", { id: g, className: Wt.helper, children: s })
      ]
    }
  );
}
const Hl = "_fieldset_8x01p_1", ql = "_legend_8x01p_11", Kl = "_legendText_8x01p_20", Wl = "_toggle_8x01p_24", Ul = "_content_8x01p_45", Vl = "_summary_8x01p_49", yn = {
  fieldset: Hl,
  legend: ql,
  legendText: Kl,
  toggle: Wl,
  content: Ul,
  summary: Vl
};
function rk({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: s,
  allowCollapse: l = !1,
  collapsed: c,
  defaultCollapsed: u = !1,
  summary: r,
  expandTitle: a,
  collapseTitle: i,
  expandAriaLabel: f,
  collapseAriaLabel: d,
  onExpand: k,
  onCollapse: g,
  children: m,
  className: p,
  visible: b = !0
}) {
  const h = Pe(), [_, y] = W(u);
  if (b === !1) return null;
  const w = c ?? _, v = l ? `${h}-content` : void 0, N = () => {
    const O = !w;
    c === void 0 && y(O), O ? g?.() : k?.();
  }, $ = l || e != null || n != null || t != null, C = l ? w : !1, M = l && w && r != null, D = C ? a ?? "Expand" : i ?? "Collapse", E = C ? f ?? "Expand" : d ?? "Collapse";
  return /* @__PURE__ */ z(
    "fieldset",
    {
      className: [yn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: yn.legend, children: l ? /* @__PURE__ */ z(tt, { children: [
          /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              className: yn.toggle,
              title: D,
              "aria-label": e == null ? E : void 0,
              "aria-expanded": !C,
              "aria-controls": v,
              onClick: N,
              children: [
                /* @__PURE__ */ o(
                  ke,
                  {
                    icon: C ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(ke, { icon: n, color: s, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ z(tt, { children: [
          n != null && /* @__PURE__ */ o(ke, { icon: n, color: s, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: yn.content,
            id: v,
            hidden: C,
            children: m
          }
        ),
        M ? /* @__PURE__ */ o("div", { className: yn.summary, children: r }) : null
      ]
    }
  );
}
const Gl = "_form_abp5n_1", Xl = {
  form: Gl
}, Ar = Ln(null);
function Yl() {
  const e = hn(Ar);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function ok({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: s,
  method: l,
  children: c,
  className: u
}) {
  const [r, a] = W({}), [i, f] = W(0), d = Q(r);
  d.current = r;
  const k = R((y) => {
    a(
      (w) => w[y.name] === y ? w : { ...w, [y.name]: y }
    );
  }, []), g = R((y) => {
    a((w) => {
      if (!(y in w)) return w;
      const v = { ...w };
      return delete v[y], v;
    });
  }, []), m = R(() => {
    const y = {};
    for (const w of Object.values(d.current)) {
      const v = w.validate();
      v.length > 0 && (y[w.name] = v);
    }
    return y;
  }, []), p = R(() => {
    const y = m();
    f((w) => w + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [m, e, t, n]), b = (y) => {
    s != null && l != null || (y.preventDefault(), p());
  }, h = be(
    () => ({ registerField: k, unregisterField: g, submit: p, submitCount: i }),
    [k, g, p, i]
  ), _ = [Xl.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Ar.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: b,
      action: s,
      method: l,
      noValidate: !0,
      children: c
    }
  ) });
}
const Cn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", lk = (e = "Required") => (t) => Cn(t) ? e : null, ak = (e = "Invalid email") => (t) => Cn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, ik = (e, t = "Invalid format") => (n) => Cn(n) || e.test(String(n)) ? null : t, ck = (e, t = `Minimum ${e} characters`) => (n) => Cn(n) || String(n).length >= e ? null : t, dk = (e, t = `Maximum ${e} characters`) => (n) => Cn(n) || String(n).length <= e ? null : t, uk = (e, t, n = `Between ${e} and ${t}`) => (s) => {
  if (Cn(s)) return null;
  const l = Number(s);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, fk = (e, t = "Values do not match") => (n, s) => {
  if (Cn(n)) return null;
  const l = typeof e == "function" ? e(s) : e;
  return n === l ? null : t;
}, _k = (e = "Required") => (t) => t === !0 ? null : e, hk = (e) => (t, n) => e(t, n);
function Zl(e, t, n) {
  return e.map((s) => s(t, n)).filter((s) => s != null);
}
function pk(e, t) {
  const { registerField: n, unregisterField: s, submitCount: l } = Yl(), [c, u] = W(t?.initialValue), [r, a] = W(!1), [i, f] = W(!1), d = Q(() => []);
  d.current = () => Zl(t?.validate ?? [], c), fe(() => (n({ name: e, validate: () => d.current() }), () => s(e)), [e, n, s]), fe(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const k = r && !i ? d.current() : [];
  return { value: c, setValue: (m) => {
    u(m), f(!0);
  }, errors: k };
}
const Jl = "_select_1xe98_1", Ql = "_invalid_1xe98_33", ea = "_xs_1xe98_40", ta = "_sm_1xe98_48", na = "_md_1xe98_56", sa = "_lg_1xe98_62", ra = "_xl_1xe98_68", Ns = {
  select: Jl,
  invalid: Ql,
  xs: ea,
  sm: ta,
  md: na,
  lg: sa,
  xl: ra
}, Sn = Le(
  function({ size: t = "md", invalid: n = !1, options: s, children: l, className: c, ...u }, r) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: r,
        "data-size": t,
        className: [
          Ns.select,
          Ns[t],
          n ? Ns.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...u,
        children: s != null ? s.map((a) => /* @__PURE__ */ o(
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
), jr = [
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
}, oa = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function la(e) {
  return oa.includes(e);
}
function bs(e, t) {
  return t.split(".").reduce((n, s) => {
    if (n != null)
      return n[s];
  }, e);
}
function Qs(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function ss(e, t) {
  const n = Qs(e), s = Qs(t);
  if (typeof n == "number" && typeof s == "number") return n - s;
  const l = String(n ?? ""), c = String(s ?? "");
  return l < c ? -1 : l > c ? 1 : 0;
}
function ws(e) {
  if (e.secondOperator == null) return !1;
  if (la(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function er(e, t, n) {
  const s = bs(t, e.property), l = tr(
    s,
    e.value,
    e.operator,
    n
  );
  if (!ws(e)) return l;
  const c = tr(
    s,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && c : l || c;
}
function tr(e, t, n, s) {
  const l = s === "CaseInsensitive", c = (a) => l && typeof a == "string" ? a.toLowerCase() : a, u = c(e), r = c(t);
  switch (n) {
    case "Equals":
      return u === r || Array.isArray(u) && u.some((a) => c(a) === r);
    case "NotEquals":
      return u !== r && !(Array.isArray(u) && u.some((a) => c(a) === r));
    case "LessThan":
      return ss(u, r) < 0;
    case "LessThanOrEquals":
      return ss(u, r) <= 0;
    case "GreaterThan":
      return ss(u, r) > 0;
    case "GreaterThanOrEquals":
      return ss(u, r) >= 0;
    case "Contains":
      return typeof u == "string" && typeof r == "string" && u.includes(r);
    case "StartsWith":
      return typeof u == "string" && typeof r == "string" && u.startsWith(r);
    case "EndsWith":
      return typeof u == "string" && typeof r == "string" && u.endsWith(r);
    case "DoesNotContain":
      return typeof u == "string" && typeof r == "string" && !u.includes(r);
    case "In":
      return Array.isArray(r) && r.some((a) => c(a) === u);
    case "NotIn":
      return Array.isArray(r) && !r.some((a) => c(a) === u);
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
function Tr(e, t, n = {}) {
  const s = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Ks(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? s;
    return t.filters[c === "Or" ? "some" : "every"](
      (u) => Tr(e, u, { logicalOperator: c, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", er(t, e, l);
}
function Pr(e, t, n = {}) {
  return e.filter((s) => Tr(s, t, n));
}
function aa(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Ct(e) {
  return typeof e == "string" ? `"${aa(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(Ct).join(", ")}]` : `"${String(e)}"`;
}
function ia(e) {
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
  if (!ws(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", s = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    s,
    e.secondValue
  )})`;
}
function ca(e) {
  return Ks(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ca).filter(Boolean).join(` ${e.operator} `)})` : ia(e);
}
function da(e) {
  return e.replace(/'/g, "''");
}
const ua = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function fa(e, t) {
  const n = e.property, s = t === "CaseInsensitive", l = (i) => s ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${da(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, f) => {
    const d = typeof f == "string", k = d && s ? l(n) : n;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${ua[i]} ${d && s ? l(c(f)) : c(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(c(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(c(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(c(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(c(f))}))`;
      case "In":
        return Array.isArray(f) ? `${k} in (${f.map((g) => c(g)).join(", ")})` : `${k} in (${c(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${k} in (${f.map((g) => c(g)).join(", ")}))` : `not(${k} in (${c(f)}))`;
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
    return u(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${u(e.operator, e.value)} ${r} ${u(
    a,
    e.secondValue
  )})`;
}
function _a(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Ks(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => _a(l, { caseSensitivity: n })).filter(Boolean).join(` ${s} `)})`;
  }
  return fa(e, n);
}
function ha(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, s) => {
    for (const l of t) {
      const c = l.sortOrder === "Ascending" ? 1 : -1, u = ss(
        bs(n, l.property),
        bs(s, l.property)
      );
      if (u !== 0) return u * c;
    }
    return 0;
  });
}
const pa = "_filter_1dvqt_1", ma = "_rows_1dvqt_9", ga = "_row_1dvqt_9", ba = "_join_1dvqt_21", ya = "_property_1dvqt_30", xa = "_operator_1dvqt_34", va = "_value_1dvqt_38", ka = "_remove_1dvqt_42", wa = "_bar_1dvqt_58", $a = "_add_1dvqt_64", Na = "_custom_1dvqt_78", Oa = "_summary_1dvqt_82", Sa = "_second_1dvqt_87", Ca = "_secondAdd_1dvqt_91", Da = "_addSecond_1dvqt_95", Ea = "_joinSelect_1dvqt_109", Xe = {
  filter: pa,
  rows: ma,
  row: ga,
  join: ba,
  property: ya,
  operator: xa,
  value: va,
  remove: ka,
  bar: wa,
  add: $a,
  custom: Na,
  summary: Oa,
  second: Sa,
  secondAdd: Ca,
  addSecond: Da,
  joinSelect: Ea
}, Vn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], nr = {
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
function sr({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(tt, { children: e.editor({ value: t, onChange: n }) });
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
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
  if (s === "boolean")
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
  const l = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Xe.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        s === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function mk({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: l = !1,
  className: c,
  viewChanged: u,
  items: r,
  children: a
}) {
  const [i, f] = W(
    () => s != null && s.length > 0 ? s.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Un[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (h, _) => {
    f(
      (y) => y.map((w) => w.id === h ? { ...w, ..._ } : w)
    );
  }, k = () => {
    const h = i[i.length - 1], _ = Math.max(0, ...i.map((w) => w.id)) + 1, y = e[0];
    f((w) => [
      ...w,
      {
        id: _,
        property: h?.property ?? y?.name ?? "",
        operator: Un[e.find(
          (v) => v.name === (h?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, g = (h) => {
    f(
      (_) => _.length > 1 ? _.filter((y) => y.id !== h) : _
    );
  }, m = be(() => {
    const h = [];
    for (const _ of i) {
      if (_.property === "" || (_.value == null || _.value === "") && !Vn.includes(_.operator)) continue;
      const w = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && ws(_) && (w.secondOperator = v, w.secondValue = _.secondValue, w.logicalOperator = _.logicalOperator ?? "And"), h.push(w);
    }
    return h;
  }, [i]), p = be(() => r == null || m.length === 0 ? r : Pr(r, {
    operator: t,
    filters: m
  }, {
    caseSensitivity: n
  }), [r, m, t, n]);
  fe(() => {
    u != null && r != null && u(p ?? []);
  }, [p]);
  const b = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ z("div", { className: [Xe.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: Xe.rows, role: "group", "aria-label": "Filter conditions", children: i.map((h, _) => {
      const y = b(h.property), w = l ? [Un[y.type ?? "string"]] : jr, v = !Vn.includes(h.operator), N = h.secondOperator != null;
      return /* @__PURE__ */ z(Hs, { children: [
        /* @__PURE__ */ z("div", { className: Xe.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: Xe.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            Sn,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Xe.property,
              value: h.property,
              onChange: ($) => {
                const C = e.find(
                  (M) => M.name === $.target.value
                );
                d(h.id, {
                  property: $.target.value,
                  operator: Un[C?.type ?? "string"],
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
            Sn,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: Xe.operator,
              value: h.operator,
              onChange: ($) => {
                const C = $.target.value;
                d(
                  h.id,
                  Vn.includes(C) ? {
                    operator: C,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: C }
                );
              },
              options: w.map(($) => ({
                value: $,
                label: nr[$]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            sr,
            {
              property: y,
              value: h.value,
              onChange: ($) => d(h.id, { value: $ })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Xe.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => g(h.id),
              children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? N ? /* @__PURE__ */ z(
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
                  onChange: ($) => d(h.id, {
                    logicalOperator: $.target.value
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
                  onChange: ($) => {
                    const C = $.target.value;
                    d(
                      h.id,
                      Vn.includes(C) ? { secondOperator: C, secondValue: void 0 } : { secondOperator: C }
                    );
                  },
                  options: w.map(($) => ({
                    value: $,
                    label: nr[$]
                  }))
                }
              ),
              h.secondOperator == null || !Vn.includes(h.secondOperator) ? /* @__PURE__ */ o(
                sr,
                {
                  property: y,
                  value: h.secondValue,
                  onChange: ($) => d(h.id, { secondValue: $ })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Xe.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => d(h.id, {
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
            onClick: () => d(h.id, {
              secondOperator: Un[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ z("div", { className: Xe.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: Xe.add, onClick: k, children: "Add filter" }),
      a != null ? /* @__PURE__ */ o("div", { className: Xe.custom, children: a }) : null,
      r != null ? /* @__PURE__ */ z("span", { className: Xe.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const za = "_pager_1du31_1", Ma = "_alignLeft_1du31_10", Ia = "_alignCenter_1du31_14", Aa = "_alignRight_1du31_18", ja = "_alignJustify_1du31_22", Ta = "_summary_1du31_26", Pa = "_controls_1du31_31", La = "_button_1du31_37", Ra = "_active_1du31_73", Ba = "_ellipsis_1du31_85", Fa = "_size_1du31_91", ht = {
  pager: za,
  alignLeft: Ma,
  alignCenter: Ia,
  alignRight: Aa,
  alignJustify: ja,
  summary: Ta,
  controls: Pa,
  button: La,
  active: Ra,
  ellipsis: Ba,
  size: Fa
};
function Ha(e, t, n, s) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(s));
}
function rr(e, t) {
  return e.replace("{0}", String(t));
}
function qa(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (r, a) => a + 1);
  const s = Math.floor(n / 2);
  let l = Math.max(1, e - s);
  const c = Math.min(t, l + n - 1);
  l = Math.max(1, c - n + 1);
  const u = [];
  for (let r = l; r <= c; r++) u.push(r);
  return l > 2 && u.unshift("ellipsis"), l > 1 && u.unshift(1), c < t - 1 && u.push("ellipsis"), c < t && u.push(t), u;
}
function Ka({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: c = 5,
  alwaysVisible: u = !1,
  horizontalAlign: r = "left",
  showPagingSummary: a,
  showPageSizeSelector: i = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: d,
  pageSizeText: k = "Items per page",
  firstPageTitle: g = "First page",
  prevPageTitle: m = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: y,
  onPageSizeChange: w,
  ariaLabel: v = "Pagination",
  className: N,
  visible: $ = !0
}) {
  const C = n ?? s, [M, D] = W(C), E = n !== void 0, O = E ? C : M, x = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, O), x), j = a ?? !0, T = u || x > 1, A = qa(S, x, c), F = R(
    (Y) => {
      const me = Math.min(Math.max(1, Y), x);
      E || D(me);
      const de = (me - 1) * t;
      y?.({
        page: me,
        skip: de,
        top: t,
        pageCount: x,
        pageSize: t
      });
    },
    [E, y, x, t]
  ), L = r === "center" ? ht.alignCenter : r === "right" ? ht.alignRight : r === "justify" ? ht.alignJustify : ht.alignLeft, V = {
    count: e,
    pageNumber: S,
    pageSize: t,
    pageCount: x
  }, ee = (Y) => {
    const me = Array.from(
      Y.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), de = me.indexOf(document.activeElement);
    de !== -1 && (Y.key === "ArrowRight" || Y.key === "ArrowDown" ? (Y.preventDefault(), (me[de + 1] ?? me[0])?.focus()) : Y.key === "ArrowLeft" || Y.key === "ArrowUp" ? (Y.preventDefault(), (me[de - 1] ?? me[me.length - 1])?.focus()) : Y.key === "Home" ? (Y.preventDefault(), me[0]?.focus()) : Y.key === "End" && (Y.preventDefault(), me[me.length - 1]?.focus()));
  };
  return $ === !1 || !T ? null : /* @__PURE__ */ z(
    "nav",
    {
      className: [ht.pager, L, N].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        j && /* @__PURE__ */ o("span", { className: ht.summary, "aria-live": "polite", children: d ? d(V) : Ha(f, S, x, e) }),
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
                  disabled: S <= 1,
                  onClick: () => F(1),
                  "aria-label": g,
                  title: g,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: S <= 1,
                  onClick: () => F(S - 1),
                  "aria-label": m,
                  title: m,
                  children: "‹"
                }
              ),
              A.map(
                (Y, me) => Y === "ellipsis" ? /* @__PURE__ */ o("span", { className: ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${me}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": Y,
                    className: [ht.button, Y === S ? ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": Y === S ? "page" : void 0,
                    "aria-label": rr(_, Y),
                    title: rr(h, Y),
                    onClick: () => F(Y),
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
                  disabled: S >= x,
                  onClick: () => F(S + 1),
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
                  disabled: S >= x,
                  onClick: () => F(x),
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        i && l && l.length > 0 && /* @__PURE__ */ z("label", { className: ht.size, children: [
          /* @__PURE__ */ o("span", { children: k }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (Y) => w?.(Number(Y.target.value)),
              "aria-label": k,
              children: l.map((Y) => /* @__PURE__ */ o("option", { value: Y, children: Y }, Y))
            }
          )
        ] })
      ]
    }
  );
}
function Ms(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: s, showSummary: l, ...c } = e;
  return /* @__PURE__ */ o(
    Ka,
    {
      page: t,
      showPagingSummary: l,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: s ? (r) => s({
        count: r.count,
        pageNumber: r.pageNumber,
        pageSize: r.pageSize
      }) : void 0,
      onPageChange: n ? (r) => n(r.page) : void 0,
      ...c
    }
  );
}
const Lr = "";
function Wa(e, t, n, s, l) {
  if (t.length === 0) return e.map((r) => ({ type: "row", row: r }));
  const c = (r) => n.find((a) => a.property === r), u = (r, a, i) => {
    const f = t[a];
    if (f === void 0)
      return r.map((p) => ({ type: "row", row: p }));
    const d = c(f), k = /* @__PURE__ */ new Map(), g = [];
    r.forEach((p) => {
      const b = String(l(p, f) ?? ""), h = k.get(b);
      h ? h.push(p) : (k.set(b, [p]), g.push(b));
    });
    const m = [];
    return g.forEach((p) => {
      const b = k.get(p), h = [...i, p].join(Lr), _ = b[0], y = _ !== void 0 ? l(_, f) : void 0;
      m.push({
        type: "group",
        group: {
          key: h,
          display: ys(y, d?.format),
          property: f,
          title: d?.title ?? f,
          count: b.length,
          level: a
        }
      }), s.has(h) && m.push(...u(b, a + 1, [...i, p]));
    }), m;
  };
  return u(e, 0, []);
}
function or(e, t, n) {
  const s = /* @__PURE__ */ new Set(), l = (c, u, r) => {
    const a = t[u];
    if (a === void 0 || c.length === 0) return;
    const i = /* @__PURE__ */ new Map(), f = [];
    c.forEach((d) => {
      const k = String(n(d, a) ?? ""), g = i.get(k);
      g ? g.push(d) : (i.set(k, [d]), f.push(k));
    }), f.forEach((d) => {
      const k = [...r, d].join(Lr);
      s.add(k), l(i.get(d), u + 1, [...r, d]);
    });
  };
  return l(e, 0, []), s;
}
function as(e, t) {
  return e.property ?? `col-${t}`;
}
function Ua(e, t) {
  const n = {};
  let s = 0;
  return e.forEach(({ key: l, column: c }) => {
    if (!c.frozen) return;
    n[l] = s === 0 ? "0px" : `${s}px`;
    const u = t[l] ?? c.width ?? "8rem";
    s += parseFloat(u);
  }), n;
}
function Va(e, t) {
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
    return bs(e, t);
}
function ys(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const lr = [
  "Ascending",
  "Descending",
  null
];
function Ga(e, t, n = {}) {
  const s = e.find((c) => c.property === t), l = lr[(s ? lr.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Xa(e, t) {
  return ha(e, t);
}
function Ya(e, t, n) {
  const s = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), s), c = (l - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: s,
    pageNumber: l,
    total: e.length
  };
}
function Za(e, t, n = {}) {
  const s = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, a]) => ({
      property: r,
      operator: a.operator ?? "Contains",
      value: Va(
        a.value,
        n.types?.[r] ?? "string"
      )
    })
  ), l = s.length > 0 ? Pr(
    e,
    { operator: n.logicalOperator ?? "And", filters: s },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = Xa(l, t.sorts);
  return {
    ...Ya(c, t.pageNumber, t.pageSize),
    filtered: c,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function ar(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Ja(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const s = [];
  switch (e.forEach((l) => {
    const c = n(l, t.property);
    if (c == null || c === "") return;
    const u = Number(c);
    Number.isFinite(u) && s.push(u);
  }), t.type) {
    case "sum":
      return s.length > 0 ? s.reduce((l, c) => l + c, 0) : void 0;
    case "avg":
      return s.length > 0 ? s.reduce((l, c) => l + c, 0) / s.length : void 0;
    case "min":
      return s.length > 0 ? Math.min(...s) : void 0;
    case "max":
      return s.length > 0 ? Math.max(...s) : void 0;
    default:
      return;
  }
}
function Qa(e, t, n = Nn) {
  const s = (c) => /["\r\n,]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c, l = [
    t.map((c) => s(c.title ?? c.property ?? "")).join(",")
  ];
  return e.forEach((c) => {
    l.push(
      t.map((u) => s(ys(n(c, u.property), u.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const ei = "_grid_13rur_1", ti = "_toolbar_13rur_8", ni = "_picker_13rur_13", si = "_pickerButton_13rur_17", ri = "_pickerPanel_13rur_31", oi = "_pickerItem_13rur_46", li = "_groupPanel_13rur_55", ai = "_groupPanelActive_13rur_66", ii = "_groupPanelText_13rur_70", ci = "_groupChip_13rur_74", di = "_groupRemove_13rur_85", ui = "_groupRow_13rur_94", fi = "_groupCell_13rur_98", _i = "_groupToggle_13rur_104", hi = "_editRow_13rur_117", pi = "_editCell_13rur_121", mi = "_editInput_13rur_127", gi = "_commandCell_13rur_137", bi = "_commandButton_13rur_144", yi = "_data_13rur_159", xi = "_table_13rur_166", vi = "_header_13rur_172", ki = "_center_13rur_185", wi = "_right_13rur_189", $i = "_sortButton_13rur_193", Ni = "_sortIndicator_13rur_211", Oi = "_sortIndex_13rur_215", Si = "_cell_13rur_226", Ci = "_clickable_13rur_241", Di = "_frozen_13rur_249", Ei = "_selected_13rur_255", zi = "_resizeHandle_13rur_263", Mi = "_filterCell_13rur_281", Ii = "_filterSelect_13rur_290", Ai = "_filterInput_13rur_300", ji = "_empty_13rur_311", Ti = "_loading_13rur_317", Pi = "_visuallyHidden_13rur_331", Li = "_virtualScroller_13rur_340", Ri = "_spacerRow_13rur_345", Bi = "_footerRow_13rur_350", Fi = "_footerCell_13rur_354", Hi = "_footerValue_13rur_361", pe = {
  grid: ei,
  toolbar: ti,
  picker: ni,
  pickerButton: si,
  pickerPanel: ri,
  pickerItem: oi,
  groupPanel: li,
  groupPanelActive: ai,
  groupPanelText: ii,
  groupChip: ci,
  groupRemove: di,
  groupRow: ui,
  groupCell: fi,
  groupToggle: _i,
  editRow: hi,
  editCell: pi,
  editInput: mi,
  commandCell: gi,
  commandButton: bi,
  data: yi,
  table: xi,
  header: vi,
  center: ki,
  right: wi,
  sortButton: $i,
  sortIndicator: Ni,
  sortIndex: Oi,
  cell: Si,
  clickable: Ci,
  frozen: Di,
  selected: Ei,
  resizeHandle: zi,
  filterCell: Mi,
  filterSelect: Ii,
  filterInput: Ai,
  empty: ji,
  loading: Ti,
  visuallyHidden: Pi,
  virtualScroller: Li,
  spacerRow: Ri,
  footerRow: Bi,
  footerCell: Fi,
  footerValue: Hi
}, qi = {
  Ascending: "ascending",
  Descending: "descending"
};
function ir(e, t) {
  return e.filterable ?? t;
}
function Ki(e, t) {
  return e.sortable ?? t;
}
function Wi(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function gk({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: s = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: c = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: i = !1,
  pageSize: f = 10,
  pageSizeOptions: d,
  pageNumbersCount: k = 5,
  pagerPosition: g = "Bottom",
  showPagingSummary: m = !0,
  showPageSizeSelector: p = !0,
  selectionMode: b = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: y = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: N = !1,
  allowGrouping: $ = !1,
  groupPanelText: C = "Drag a column header here to group",
  groupExpanded: M = !0,
  aggregates: D,
  showExportButton: E = !1,
  exportFileName: O = "grid-data",
  serverMode: x = !1,
  totalCount: S,
  onRangeChange: j,
  virtualize: T = !1,
  virtualRowHeight: A = 40,
  virtualHeight: F = 480,
  editMode: L = "None",
  allowRowCreate: V = !1,
  onRowUpdate: ee,
  onRowCreate: Y,
  onRowDelete: me,
  isLoading: de = !1,
  empty: re = "No records found",
  ariaLabel: q,
  className: ie,
  onRowClick: se
}) {
  const ue = q != null ? `${q} ` : "", [oe, $e] = W([]), [Oe, Ye] = W(
    /* @__PURE__ */ new Map()
  ), [ve, Be] = W(1), [we, ot] = W(f), [nt, Ze] = W(
    () => e.map((P, B) => as(P, B))
  ), [Nt, bt] = W(
    () => new Set(
      e.map((P, B) => P.visible !== !1 ? as(P, B) : "").filter(Boolean)
    )
  ), [lt, G] = W({}), [I, U] = W(!1), [Z, he] = W([]), [te, ye] = W(
    null
  ), [Ee, Fe] = W(null), [He, st] = W({}), [on, J] = W(0), [Se, dt] = W(F), zt = Q(null), ut = Q(null), Ce = be(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((B, ae) => P.set(as(B, ae), B)), P;
  }, [e]), je = be(
    () => nt.filter((P) => Nt.has(P)).map((P) => ({ key: P, column: Ce.get(P) })).filter(
      (P) => P.column != null
    ),
    [nt, Nt, Ce]
  ), Mt = be(
    () => Ua(je, lt),
    [je, lt]
  ), yt = L !== "None" || me != null || V, Je = be(() => {
    if (x) {
      const P = S ?? t.length, B = Math.max(1, Math.ceil(P / we));
      return {
        items: [...t],
        filtered: [...t],
        total: P,
        pageCount: B,
        pageNumber: ve,
        pageSize: we,
        sorts: oe,
        filters: Oe
      };
    }
    return Za(
      t,
      {
        sorts: oe,
        filters: Oe,
        pageNumber: ve,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: i ? we : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: a,
        caseSensitivity: r,
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
    a,
    r,
    e,
    x,
    S,
    i
  ]), K = Q(j);
  fe(() => {
    K.current = j;
  });
  const le = be(
    () => [...Oe.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, B]) => ({
      property: P,
      operator: B.operator ?? ar(
        e.find((ae) => ae.property === P)?.type ?? "string"
      ),
      value: B.value ?? ""
    })),
    [Oe, e]
  );
  fe(() => {
    !x || K.current == null || K.current({
      start: (ve - 1) * we,
      count: we,
      pageNumber: ve,
      pageSize: we,
      sorts: oe,
      filters: le,
      logicalOperator: a
    });
  }, [
    x,
    ve,
    we,
    oe,
    le,
    a
  ]);
  const Ie = be(() => new Set(Z), [Z]), Te = be(() => te || (M ? or(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), [te, M, Je.items, Z]), Ht = be(
    () => Wa(Je.items, Z, e, Te, Nn),
    [Je.items, Z, e, Te]
  ), rt = be(
    () => Z.length > 0 ? je.filter(
      (P) => P.column.property == null || !Ie.has(P.column.property)
    ) : je,
    [je, Z, Ie]
  ), H = (P) => {
    P !== "" && $e(Ga(oe, P, { multi: l }));
  }, X = (P, B) => {
    Ye((ae) => {
      const ce = new Map(ae);
      return ce.set(P, B), ce;
    }), Be(1);
  }, ne = (P) => {
    ot(P), Be(1);
  }, ge = (P) => {
    if (b === "None") return;
    const B = n(P), ae = h ?? [];
    let ce;
    b === "Single" ? ce = ae.length === 1 && ae[0] === B ? [] : [B] : ce = ae.includes(B) ? ae.filter((Re) => Re !== B) : [...ae, B], _?.(ce);
  }, _e = (P) => {
    se?.(P);
  }, xe = (P, B, ae) => {
    zt.current = { key: P, startX: B, startWidth: ae };
  }, Me = (P) => {
    const B = zt.current;
    if (!B) return;
    const ae = P - B.startX, ce = Math.max(48, B.startWidth + ae);
    G((Re) => ({ ...Re, [B.key]: `${ce}px` }));
  }, ze = () => {
    zt.current = null;
  }, Ve = (P) => {
    ut.current = P;
  }, Qe = (P) => {
    const B = ut.current;
    ut.current = null, !(!B || B === P) && Ze((ae) => {
      const ce = [...ae], Re = ce.indexOf(B), Pt = ce.indexOf(P);
      return Re < 0 || Pt < 0 ? ae : (ce.splice(Re, 1), ce.splice(Pt, 0, B), ce);
    });
  }, ft = (P) => {
    bt((B) => {
      const ae = new Set(B);
      return ae.has(P) ? ae.delete(P) : ae.add(P), ae;
    });
  }, et = () => {
    const P = ut.current;
    if (ut.current = null, !P || !$) return;
    const ae = Ce.get(P)?.property;
    ae && (he(
      (ce) => ce.includes(ae) ? ce : [...ce, ae]
    ), ye(null));
  }, Ge = (P) => {
    he((B) => B.filter((ae) => ae !== P)), ye(null);
  }, qt = (P) => {
    ye((B) => {
      const ae = B ?? (M ? or(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), ce = new Set(ae);
      return ce.has(P) ? ce.delete(P) : ce.add(P), ce;
    });
  }, Tt = (P) => {
    const B = {};
    e.forEach((ae) => {
      ae.property && (B[ae.property] = Nn(P, ae.property));
    }), st(B), Fe(String(n(P)));
  }, ln = () => {
    const P = {};
    e.forEach((B) => {
      B.property && B.type === "boolean" && (P[B.property] = !1);
    }), st(P), Fe("__new__");
  }, Bn = () => {
    Fe(null), st({});
  }, Fn = (P) => {
    if (Ee === "__new__") {
      const B = Object.fromEntries(
        e.filter((ae) => ae.property).map((ae) => [ae.property, He[ae.property]])
      );
      Y?.(B);
    } else if (P != null) {
      const B = { ...P, ...He };
      ee?.(P, B);
    }
    Bn();
  }, mn = i && (g === "Top" || g === "TopAndBottom"), Xs = i && (g === "Bottom" || g === "TopAndBottom"), eo = u && e.some((P) => ir(P, u)), to = (P, B, ae) => P.render ? P.render(B, { index: 0 }) : ys(Nn(B, P.property), P.format), no = (P) => {
    const B = [pe.cell];
    return P.align === "center" && B.push(pe.center), P.align === "right" && B.push(pe.right), P.frozen && B.push(pe.frozen), B.join(" ");
  }, Ys = x ? t : Je.filtered, so = () => {
    const P = Qa(
      Ys,
      rt.map((Re) => Re.column)
    ), B = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ae = URL.createObjectURL(B), ce = document.createElement("a");
    ce.href = ae, ce.download = `${O}.csv`, document.body.appendChild(ce), ce.click(), ce.remove(), URL.revokeObjectURL(ae);
  }, Dn = Ht.length, gn = be(() => {
    if (!T || Dn === 0)
      return { start: 0, end: Dn, top: 0, bottom: 0 };
    const P = 5, B = Math.max(
      0,
      Math.floor(on / A) - P
    ), ae = Math.ceil(Se / A) + P * 2, ce = Math.min(Dn, B + ae), Re = B * A, Pt = Math.max(0, (Dn - ce) * A);
    return { start: B, end: ce, top: Re, bottom: Pt };
  }, [T, Dn, on, A, Se]), $s = rt.length + (yt ? 1 : 0);
  return /* @__PURE__ */ z("div", { className: [pe.grid, ie].filter(Boolean).join(" "), children: [
    mn && /* @__PURE__ */ o(
      Ms,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: d,
        pageNumbersCount: k,
        showSummary: m,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${Xs ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    ),
    ($ || V || y || E) && /* @__PURE__ */ z("div", { className: pe.toolbar, children: [
      $ && /* @__PURE__ */ o(
        "div",
        {
          className: [
            pe.groupPanel,
            Z.length > 0 ? pe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (P) => P.preventDefault() : void 0,
          onDrop: $ ? et : void 0,
          children: Z.length > 0 ? Z.map((P) => {
            const B = e.find((ae) => ae.property === P)?.title ?? P;
            return /* @__PURE__ */ z("span", { className: pe.groupChip, children: [
              B,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: pe.groupRemove,
                  onClick: () => Ge(P),
                  "aria-label": `Remove group by ${B}`,
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              )
            ] }, P);
          }) : /* @__PURE__ */ o("span", { className: pe.groupPanelText, children: C })
        }
      ),
      V && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: pe.pickerButton,
          onClick: ln,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ z("div", { className: pe.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: pe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": I,
            onClick: () => U((P) => !P),
            children: w
          }
        ),
        I && /* @__PURE__ */ o(
          "div",
          {
            className: pe.pickerPanel,
            role: "menu",
            "aria-label": w,
            children: e.map((P, B) => {
              const ae = as(P, B);
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
          onClick: so,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ z(
      "div",
      {
        className: [pe.data, T ? pe.virtualScroller : ""].filter(Boolean).join(" "),
        style: T ? { maxHeight: F } : void 0,
        onScroll: T ? (P) => {
          J(P.currentTarget.scrollTop), dt(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ z(
            "table",
            {
              className: pe.table,
              role: "grid",
              "aria-rowcount": (T ? Dn : Je.total) + 1,
              "aria-label": q,
              "aria-busy": de || void 0,
              children: [
                /* @__PURE__ */ z("colgroup", { children: [
                  rt.map(({ key: P, column: B }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: lt[P] ?? B.width,
                        minWidth: B.minWidth,
                        maxWidth: B.maxWidth
                      }
                    },
                    P
                  )),
                  yt && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ z("thead", { children: [
                  /* @__PURE__ */ z("tr", { children: [
                    rt.map(({ key: P, column: B }) => {
                      const ae = Ki(B, s), ce = oe.find((_t) => _t.property === B.property), Re = ce ? oe.indexOf(ce) + 1 : 0, Pt = B.align ?? "left";
                      return /* @__PURE__ */ z(
                        "th",
                        {
                          "aria-sort": ae && ce ? qi[ce.sortOrder] : "none",
                          className: [
                            pe.header,
                            Pt === "center" ? pe.center : "",
                            Pt === "right" ? pe.right : "",
                            B.frozen ? pe.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: B.frozen ? { left: Mt[P] } : void 0,
                          scope: "col",
                          draggable: N || $ || void 0,
                          onDragStart: N || $ ? (_t) => {
                            _t.dataTransfer && (_t.dataTransfer.effectAllowed = "move"), Ve(P);
                          } : void 0,
                          onDragOver: N ? (_t) => _t.preventDefault() : void 0,
                          onDrop: N ? () => Qe(P) : void 0,
                          children: [
                            ae ? /* @__PURE__ */ z(
                              "button",
                              {
                                type: "button",
                                className: pe.sortButton,
                                onClick: () => B.property != null && H(B.property),
                                "aria-label": ce ? ce.sortOrder === "Ascending" ? `Sort ${B.title ?? B.property} descending` : `Sort ${B.title ?? B.property} ascending` : `Sort ${B.title ?? B.property} ascending`,
                                children: [
                                  B.title ?? B.property,
                                  ce && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: pe.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ce.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  Re > 1 && c && /* @__PURE__ */ o("span", { className: pe.sortIndex, children: Re })
                                ]
                              }
                            ) : B.title ?? B.property,
                            v && /* @__PURE__ */ o(
                              "span",
                              {
                                className: pe.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${B.title ?? B.property}`,
                                onMouseDown: (_t) => {
                                  _t.preventDefault(), _t.stopPropagation();
                                  const En = lt[P] ?? B.width, Kt = En ? parseFloat(En) : 96;
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
                  eo && /* @__PURE__ */ o("tr", { children: rt.map(({ key: P, column: B }) => {
                    if (!ir(B, u))
                      return /* @__PURE__ */ o("td", { className: pe.filterCell }, P);
                    const ae = Oe.get(B.property ?? "");
                    return /* @__PURE__ */ z("td", { className: pe.filterCell, children: [
                      /* @__PURE__ */ z(
                        "label",
                        {
                          className: pe.visuallyHidden,
                          htmlFor: `df-${B.property}`,
                          children: [
                            "Filter ",
                            B.title ?? B.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${B.property}`,
                          className: pe.filterSelect,
                          value: ae?.operator ?? ar(B.type ?? "string"),
                          onChange: (ce) => X(B.property ?? "", {
                            ...ae,
                            operator: ce.target.value
                          }),
                          "aria-label": `${B.title ?? B.property} operator`,
                          children: jr.filter((ce) => ce !== "Custom").map(
                            (ce) => /* @__PURE__ */ o("option", { value: ce, children: ce }, ce)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: pe.filterInput,
                          value: ae?.value ?? "",
                          onChange: (ce) => X(B.property ?? "", {
                            ...ae,
                            value: ce.target.value
                          }),
                          placeholder: `Filter ${B.title ?? B.property}`,
                          "aria-label": `${B.title ?? B.property} value`
                        }
                      )
                    ] }, P);
                  }) })
                ] }),
                /* @__PURE__ */ z("tbody", { children: [
                  Ee === "__new__" && /* @__PURE__ */ z("tr", { className: pe.editRow, children: [
                    rt.map(({ key: P, column: B }) => /* @__PURE__ */ o("td", { className: pe.editCell, children: B.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: pe.editInput,
                        type: B.type === "number" ? "number" : B.type === "boolean" ? "checkbox" : "text",
                        checked: B.type === "boolean" ? !!He[B.property] : void 0,
                        value: B.type === "boolean" ? void 0 : String(He[B.property] ?? ""),
                        onChange: (ae) => st((ce) => ({
                          ...ce,
                          [B.property]: B.type === "boolean" ? ae.target.checked : ae.target.value
                        })),
                        "aria-label": `${B.title ?? B.property} (new)`
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
                      colSpan: $s,
                      style: { height: gn.top }
                    }
                  ) }),
                  Ht.slice(gn.start, gn.end).map((P, B) => {
                    const ae = gn.start + B, ce = T ? ae + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const Kt = Te.has(P.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: pe.groupRow,
                          "aria-rowindex": ce,
                          children: /* @__PURE__ */ o("td", { colSpan: $s, className: pe.groupCell, children: /* @__PURE__ */ z(
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
                    const Re = P.row, Pt = n(Re), _t = (h ?? []).includes(Pt), En = Ee != null && Ee === String(Pt);
                    return /* @__PURE__ */ z(
                      "tr",
                      {
                        "aria-rowindex": ce,
                        className: [
                          se || b !== "None" ? pe.clickable : "",
                          _t ? pe.selected : "",
                          En ? pe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? _t : void 0,
                        onClick: se || b !== "None" ? (Kt) => {
                          Wi(Kt.target) || (_e(Re), ge(Re));
                        } : void 0,
                        children: [
                          rt.map(({ key: Kt, column: xt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: no(xt),
                              style: xt.frozen ? { left: Mt[Kt] } : void 0,
                              children: En && xt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: pe.editInput,
                                  type: xt.type === "number" ? "number" : xt.type === "boolean" ? "checkbox" : "text",
                                  checked: xt.type === "boolean" ? !!He[xt.property] : void 0,
                                  value: xt.type === "boolean" ? void 0 : String(He[xt.property] ?? ""),
                                  onChange: (Zs) => st((ro) => ({
                                    ...ro,
                                    [xt.property]: xt.type === "boolean" ? Zs.target.checked : Zs.target.value
                                  })),
                                  "aria-label": `${xt.title ?? xt.property} (edit)`
                                }
                              ) : to(xt, Re)
                            },
                            Kt
                          )),
                          yt && /* @__PURE__ */ o("td", { className: pe.commandCell, children: En ? /* @__PURE__ */ z(tt, { children: [
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
                      colSpan: $s,
                      style: { height: gn.bottom }
                    }
                  ) })
                ] }),
                D && D.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ z("tr", { className: pe.footerRow, children: [
                  rt.map(({ key: P, column: B }) => {
                    const ae = D.filter(
                      (ce) => ce.property === B.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          pe.footerCell,
                          B.align === "right" ? pe.right : "",
                          B.align === "center" ? pe.center : ""
                        ].filter(Boolean).join(" "),
                        children: ae.map((ce, Re) => /* @__PURE__ */ z(
                          "div",
                          {
                            className: pe.footerValue,
                            children: [
                              ce.title ? `${ce.title}: ` : "",
                              ys(
                                Ja(Ys, ce, Nn),
                                ce.format
                              )
                            ]
                          },
                          `${ce.property}-${ce.type}-${Re}`
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
          Je.items.length === 0 && !de && /* @__PURE__ */ o("div", { className: pe.empty, children: re }),
          de && /* @__PURE__ */ o("div", { className: pe.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Xs && /* @__PURE__ */ o(
      Ms,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: d,
        pageNumbersCount: k,
        showSummary: m,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${mn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    )
  ] });
}
const Ui = "_wrap_avqds_1", Vi = "_grid_avqds_7", Gi = "_stacked_avqds_13", Xi = "_item_avqds_19", Yi = "_empty_avqds_25", Gn = {
  wrap: Ui,
  grid: Vi,
  stacked: Gi,
  item: Xi,
  empty: Yi
};
function bk({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: s = !1,
  itemTemplate: l,
  emptyMessage: c = "No records found",
  emptyTemplate: u,
  loadingTemplate: r,
  isLoading: a = !1,
  showPageSizeSelector: i = !0,
  className: f,
  ariaLabel: d = "Data list"
}) {
  const [k, g] = W(1), [m, p] = W(t), b = e.length, h = Math.max(1, Math.ceil(b / m)), _ = Math.min(Math.max(1, k), h), y = be(() => {
    const v = (_ - 1) * m;
    return e.slice(v, v + m);
  }, [e, _, m]), w = s ? Gn.grid : Gn.stacked;
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Gn.wrap, f].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        a && r != null ? r : b === 0 ? u ?? /* @__PURE__ */ o("div", { className: Gn.empty, children: c }) : /* @__PURE__ */ o("div", { className: w, children: y.map((v, N) => /* @__PURE__ */ o("div", { className: Gn.item, children: l ? l(v, N) : String(v) }, N)) }),
        /* @__PURE__ */ o(
          Ms,
          {
            ariaLabel: `${d} Pagination`,
            pageNumber: _,
            pageSize: m,
            count: b,
            pageSizeOptions: n,
            showPageSizeSelector: i,
            onPageChange: g,
            onPageSizeChange: (v) => {
              p(v), g(1);
            }
          }
        )
      ]
    }
  );
}
const Zi = "_label_1qfpw_1", Ji = {
  label: Zi
}, yk = Le(function({ className: t, children: n, ...s }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [Ji.label, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}), Qi = "_textbox_oly89_1", ec = "_invalid_oly89_37", tc = "_xs_oly89_44", nc = "_sm_oly89_50", sc = "_md_oly89_56", rc = "_lg_oly89_62", oc = "_xl_oly89_68", Os = {
  textbox: Qi,
  invalid: ec,
  xs: tc,
  sm: nc,
  md: sc,
  lg: rc,
  xl: oc
}, lc = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    visible: l = !0,
    type: c = "text",
    ...u
  }, r) {
    return l === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: r,
        type: c,
        "data-size": t,
        className: [
          Os.textbox,
          Os[t],
          n ? Os.invalid : null,
          s
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...u
      }
    );
  }
), xk = lc, ac = "_checkbox_1bb6c_1", ic = {
  checkbox: ac
}, vk = Le(
  function({ className: t, indeterminate: n = !1, ...s }, l) {
    const c = Q(null);
    return fe(() => {
      c.current && (c.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (u) => {
          c.current = u, typeof l == "function" ? l(u) : l && (l.current = u);
        },
        type: "checkbox",
        className: [ic.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), cc = {
  switch: "_switch_19gf1_1"
}, kk = Le(function({ className: t, ...n }, s) {
  const [l, c] = W(
    !!n.defaultChecked
  ), u = n.checked ?? l;
  return /* @__PURE__ */ o(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": u,
      className: [cc.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (r) => {
        n.checked === void 0 && c(r.target.checked), n.onChange?.(r);
      }
    }
  );
}), dc = "_trigger_1jlxf_1", uc = "_tooltip_1jlxf_7", fc = "_top_1jlxf_34", _c = "_right_1jlxf_40", hc = "_bottom_1jlxf_46", pc = "_left_1jlxf_52", mc = "_arrow_1jlxf_58", gc = "_floating_1jlxf_70", cn = {
  trigger: dc,
  tooltip: uc,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: fc,
  right: _c,
  bottom: hc,
  left: pc,
  arrow: mc,
  floating: gc,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, is = 8;
function bc(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + is,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - is,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + is,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - is,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function wk({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: s = 300,
  durationMs: l,
  targetSelector: c,
  className: u
}) {
  const r = Pe(), a = Q(null), i = Q(null), f = Q(() => {
  }), [d, k] = W(!1), [g, m] = W(null), p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, b = () => {
    p(), a.current = window.setTimeout(() => {
      a.current = null, k(!0);
    }, s);
  }, h = () => {
    p(), k(!1);
  };
  if (fe(() => () => p(), []), fe(() => {
    if (!d || l == null) return;
    const y = window.setTimeout(() => k(!1), l);
    return () => window.clearTimeout(y);
  }, [d, l]), fe(() => {
    if (c || !d) return;
    const y = (w) => {
      w.key === "Escape" && h();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [c, d]), fe(() => {
    if (!c) return;
    let y = null, w = null;
    const v = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, N = () => {
      v(), w = null, m(null);
    };
    f.current = N;
    const $ = (x) => {
      v(), w = x, y = window.setTimeout(() => {
        y = null, m(x);
      }, s);
    }, C = (x) => x instanceof Element ? x.closest(c) : null, M = (x) => {
      const S = C(x.target);
      !S || S === w || $(S);
    }, D = (x) => {
      const S = C(x.target);
      if (!S || S !== w) return;
      const j = x.relatedTarget;
      j instanceof Element && S.contains(j) || N();
    }, E = (x) => {
      x.key === "Escape" && N();
    }, O = () => N();
    return document.addEventListener("mouseover", M), document.addEventListener("mouseout", D), document.addEventListener("focusin", M), document.addEventListener("focusout", D), document.addEventListener("keydown", E), document.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      v(), document.removeEventListener("mouseover", M), document.removeEventListener("mouseout", D), document.removeEventListener("focusin", M), document.removeEventListener("focusout", D), document.removeEventListener("keydown", E), document.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O), w = null, m(null);
    };
  }, [c, s]), fe(() => {
    if (!c || g === null || l == null) return;
    const y = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(y);
  }, [c, g, l]), zs(() => {
    const y = g;
    if (!y) return;
    const w = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [w, r].filter(Boolean).join(" ")
    ), () => {
      w == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", w);
    };
  }, [g, r]), zs(() => {
    const y = i.current, w = g;
    !y || !w || Object.assign(
      y.style,
      bc(w.getBoundingClientRect(), n)
    );
  }, [g, n]), c)
    return g ? /* @__PURE__ */ z(
      "span",
      {
        ref: i,
        role: "tooltip",
        id: r,
        className: [
          cn.tooltip,
          cn[n],
          cn.floating,
          u
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: cn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = gt(t) ? Fs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      d ? r : null
    ].filter((y) => typeof y == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z(
      "span",
      {
        className: [cn.trigger, u].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: h,
        onFocus: b,
        onBlur: h,
        children: [
          _,
          d && /* @__PURE__ */ z(
            "span",
            {
              role: "tooltip",
              id: r,
              className: [cn.tooltip, cn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: cn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const yc = "_dialog_1t7pw_1", xc = "_sm_1t7pw_104", vc = "_resizable_1t7pw_110", kc = "_md_1t7pw_113", wc = "_lg_1t7pw_117", $c = "_header_1t7pw_121", Nc = "_title_1t7pw_132", Oc = "_description_1t7pw_139", Sc = "_close_1t7pw_146", Cc = "_body_1t7pw_176", Dc = "_footer_1t7pw_188", Lt = {
  dialog: yc,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: xc,
  resizable: vc,
  md: kc,
  lg: wc,
  header: $c,
  title: Nc,
  description: Oc,
  close: Sc,
  body: Cc,
  footer: Dc
};
function Ec({
  open: e,
  onClose: t,
  title: n,
  description: s,
  children: l,
  footer: c,
  size: u = "md",
  width: r,
  height: a,
  closeOnOverlayClick: i = !0,
  closeOnEsc: f = !0,
  resizable: d = !1,
  side: k = null,
  showCloseButton: g = !0,
  showMask: m = !0,
  canClose: p,
  className: b
}) {
  const h = Q(null), _ = Pe(), y = Pe(), w = Q(t);
  fe(() => {
    w.current = t;
  });
  const v = Q(p);
  fe(() => {
    v.current = p;
  });
  const N = Q(f);
  fe(() => {
    N.current = f;
  });
  const $ = Q(!1), C = Q(!1), M = R(() => {
    if ($.current) return;
    const O = v.current?.();
    if (O instanceof Promise) {
      O.then((x) => {
        x && !$.current && ($.current = !0, w.current());
      });
      return;
    }
    O !== !1 && ($.current = !0, w.current());
  }, []), D = R(() => {
    if (C.current) {
      C.current = !1;
      return;
    }
    w.current();
  }, []), E = R(
    (O) => {
      if (O.key !== "Tab" || !h.current) return;
      const x = Array.from(
        h.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (j) => j.offsetWidth > 0 || j.offsetHeight > 0 || j === document.activeElement
      );
      if (x.length === 0) {
        O.preventDefault();
        return;
      }
      const S = x.indexOf(document.activeElement);
      if (O.shiftKey) {
        if (S <= 0) {
          O.preventDefault();
          const j = x[x.length - 1];
          j && j.focus();
        }
      } else if (S === -1 || S === x.length - 1) {
        O.preventDefault();
        const j = x[0];
        j && j.focus();
      }
    },
    []
  );
  return fe(() => {
    const O = h.current;
    if (O)
      if (e && !O.open) {
        const x = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        O.showModal(), (O.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? O.querySelector("button"))?.focus();
        const j = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const T = (A) => {
          A.preventDefault(), N.current && M();
        };
        return O.addEventListener("cancel", T), () => {
          O.removeEventListener("cancel", T), document.body.style.overflow = j, x?.focus({ preventScroll: !0 });
        };
      } else !e && O.open && (C.current = $.current, $.current = !1, O.close());
  }, [e, M]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ z(
    "dialog",
    {
      ref: h,
      className: [
        Lt.dialog,
        Lt[u],
        d ? Lt.resizable : null,
        k ? Lt[`side-${k}`] : null,
        m === !1 ? Lt["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: D,
      onClick: (O) => {
        O.target === h.current && i && M();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": s ? y : void 0,
      onKeyDown: E,
      children: [
        n && /* @__PURE__ */ z("header", { className: Lt.header, children: [
          /* @__PURE__ */ z("div", { children: [
            /* @__PURE__ */ o("h2", { id: _, className: Lt.title, children: n }),
            s && /* @__PURE__ */ o("p", { id: y, className: Lt.description, children: s })
          ] }),
          g !== !1 && /* @__PURE__ */ o(
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
const zc = "_typography_1jy8x_1", Mc = "_h1_1jy8x_39", Ic = "_h2_1jy8x_45", Ac = "_h3_1jy8x_51", jc = "_h4_1jy8x_57", Tc = "_h5_1jy8x_63", Pc = "_h6_1jy8x_69", Lc = "_button_1jy8x_99", Rc = "_caption_1jy8x_106", Bc = "_overline_1jy8x_112", Ss = {
  typography: zc,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Mc,
  h2: Ic,
  h3: Ac,
  h4: jc,
  h5: Tc,
  h6: Pc,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Lc,
  caption: Rc,
  overline: Bc,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Fc = {
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
}, Hc = {
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
}, qc = {
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
}, Kc = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Wc = Le(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: s,
  text: l,
  visible: c = !0,
  className: u,
  children: r,
  ...a
}, i) {
  if (c === !1) return null;
  const f = n === "Auto" ? Fc[t] : qc[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: i,
      className: [
        Ss.typography,
        Ss[Hc[t]],
        s ? Ss[Kc[s]] : null,
        u
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? r
    }
  );
}), Rr = Ln(null);
function $k() {
  const e = hn(Rr);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function Nk({ children: e }) {
  const [t, n] = W([]), [, s] = W(0), l = Q(0), c = () => (l.current += 1, l.current), u = Q([]);
  u.current = t;
  const r = (k) => {
    const g = u.current[0];
    g && (g.kind === "confirm" ? g.resolve(!!k) : g.kind === "alert" ? g.resolve() : g.resolve(k), n((m) => m.slice(1)));
  }, a = be(
    () => ({
      confirm: (k = {}) => new Promise((g) => {
        n((m) => [
          ...m,
          { seq: c(), kind: "confirm", options: k, resolve: g }
        ]);
      }),
      alert: (k = {}) => new Promise((g) => {
        n((m) => [
          ...m,
          { seq: c(), kind: "alert", options: k, resolve: g }
        ]);
      }),
      open: (k = {}) => new Promise((g) => {
        n((m) => [
          ...m,
          { seq: c(), kind: "custom", options: k, resolve: g }
        ]);
      }),
      openSide: ({ position: k, showMask: g = !0, ...m }) => new Promise((p) => {
        n((b) => [
          ...b,
          {
            seq: c(),
            kind: "custom",
            options: { ...m, side: k, showMask: g },
            resolve: p
          }
        ]);
      }),
      close: (k) => r(k),
      closeAll: () => {
        n((k) => (k.forEach((g) => {
          g.kind === "confirm" ? g.resolve(!1) : g.kind === "alert" ? g.resolve() : g.resolve(void 0);
        }), []));
      },
      refresh: () => s((k) => k + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), i = t[0];
  function f(k) {
    i && (i.kind === "confirm" ? i.resolve(!!k) : i.kind === "alert" ? i.resolve() : i.resolve(k), n((g) => g.slice(1)));
  }
  const d = i?.kind === "custom" ? i.options : null;
  return /* @__PURE__ */ z(Rr.Provider, { value: a, children: [
    e,
    /* @__PURE__ */ o(
      Ec,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: i?.kind === "custom" ? d?.title ?? "Dialog" : i?.options.title ?? (i?.kind === "confirm" ? "Confirm" : "Alert"),
        description: d?.description,
        size: i?.kind === "custom" ? d?.size : i?.options.size,
        width: d?.width,
        height: d?.height,
        side: d?.side ?? null,
        showCloseButton: d?.showCloseButton,
        showMask: d?.showMask,
        closeOnOverlayClick: d?.closeOnOverlayClick,
        closeOnEsc: d?.closeOnEsc,
        className: d?.className,
        footer: i?.kind === "confirm" ? /* @__PURE__ */ z(tt, { children: [
          /* @__PURE__ */ o(On, { variant: "text", onClick: () => f(!1), children: i.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            On,
            {
              severity: i.options.tone ?? "primary",
              onClick: () => f(!0),
              children: i.options.confirmText ?? "Confirm"
            }
          )
        ] }) : i?.kind === "custom" ? d?.footer ?? /* @__PURE__ */ o(On, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(On, { onClick: () => f(!0), children: i?.kind === "alert" ? i.options.okText ?? "OK" : "OK" }),
        children: i?.kind === "custom" ? d?.content : i?.options.message != null && /* @__PURE__ */ o(Wc, { textStyle: "Body1", children: i.options.message })
      },
      i?.seq ?? 0
    )
  ] });
}
const Uc = "_viewport_11t1p_1", Vc = "_topLeft_11t1p_13", Gc = "_topRight_11t1p_20", Xc = "_bottomLeft_11t1p_25", Yc = "_toast_11t1p_30", Zc = "_leaving_11t1p_61", Jc = "_info_11t1p_77", Qc = "_success_11t1p_86", ed = "_warning_11t1p_95", td = "_danger_11t1p_104", nd = "_content_11t1p_113", sd = "_title_11t1p_118", rd = "_description_11t1p_141", od = "_dismiss_11t1p_148", ld = "_actions_11t1p_169", ad = "_action_11t1p_169", id = "_cancel_11t1p_177", cd = "_progress_11t1p_215", Ot = {
  viewport: Uc,
  topLeft: Vc,
  topRight: Gc,
  bottomLeft: Xc,
  toast: Yc,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Zc,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Jc,
  success: Qc,
  warning: ed,
  danger: td,
  content: nd,
  title: sd,
  description: rd,
  dismiss: od,
  actions: ld,
  action: ad,
  cancel: id,
  progress: cd,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Br = Ln(null);
function Ok() {
  const e = hn(Br);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const dd = 200, ud = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Sk({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: s = !0,
  className: l
}) {
  const [c, u] = W([]), [r, a] = W(!1), i = Q([]), f = Q(/* @__PURE__ */ new Map()), d = Q(!1), k = Q(0), g = (O) => {
    d.current = O, a(O);
  }, m = R((O) => {
    const x = f.current.get(O);
    x && (window.clearTimeout(x.timeoutId), x.remaining = Math.max(
      0,
      x.remaining - (Date.now() - x.startedAt)
    ));
  }, []), p = R((O) => {
    const x = f.current.get(O);
    x && (window.clearTimeout(x.timeoutId), f.current.delete(O));
  }, []), b = R(
    (O) => {
      p(O), u((x) => {
        const S = x.filter((j) => j.id !== O);
        return i.current = S, S;
      });
    },
    [p]
  ), h = R(
    (O) => {
      const x = i.current.find((S) => S.id === O);
      !x || x.leaving || (x.onAutoClose?.(), b(O));
    },
    [b]
  ), _ = R(
    (O) => {
      const x = f.current.get(O);
      !x || x.remaining <= 0 || (x.startedAt = Date.now(), x.timeoutId = window.setTimeout(() => h(O), x.remaining));
    },
    [h]
  ), y = R(() => {
    d.current || f.current.forEach((O, x) => m(x)), g(!0);
  }, [m]), w = R(() => {
    f.current.forEach((O, x) => _(x)), g(!1);
  }, [_]);
  fe(() => {
    if (!s) return;
    const O = () => {
      document.hidden ? y() : w();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [s, y, w]);
  const v = R(
    (O) => {
      const x = i.current.find((S) => S.id === O);
      !x || x.leaving || (x.onDismiss?.(), u((S) => {
        const j = S.map(
          (T) => T.id === O ? { ...T, leaving: !0 } : T
        );
        return i.current = j, j;
      }), window.setTimeout(() => b(O), dd));
    },
    [b]
  ), N = R(
    (O) => {
      if (O.durationMs <= 0) return;
      const x = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(O.id, x), d.current || _(O.id);
    },
    [_]
  ), $ = R(
    (O) => {
      const x = i.current.find((j) => j.id === O.id), S = {
        id: O.id ?? ++k.current,
        title: O.title,
        description: O.description,
        severity: O.severity ?? "info",
        durationMs: O.durationMs ?? t,
        action: O.action,
        cancel: O.cancel,
        dismissible: O.dismissible ?? !0,
        closeOnClick: O.closeOnClick ?? !1,
        showProgress: O.showProgress ?? !1,
        position: O.position ?? n,
        onDismiss: O.onDismiss,
        onAutoClose: O.onAutoClose
      };
      u((j) => {
        const T = x ? j.map(
          (A) => A.id === S.id ? { ...S, leaving: !1 } : A
        ) : [...j, S];
        return i.current = T, T;
      }), x && p(S.id), N(S);
    },
    [t, n, N, p]
  ), C = be(() => ({ toast: $ }), [$]), M = be(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map((O) => O.position)])),
    [n, c]
  ), D = s ? y : void 0, E = s ? w : void 0;
  return /* @__PURE__ */ z(Br.Provider, { value: C, children: [
    e,
    M.map((O) => /* @__PURE__ */ o(
      "div",
      {
        className: [Ot.viewport, Ot[ud[O]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: D,
        onMouseLeave: E,
        children: c.filter((x) => x.position === O).map((x) => /* @__PURE__ */ z(
          "div",
          {
            role: x.severity === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": x.closeOnClick ? "true" : "false",
            className: [
              Ot.toast,
              Ot[x.severity],
              x.leaving ? Ot.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: x.closeOnClick ? () => v(x.id) : void 0,
            children: [
              /* @__PURE__ */ z("div", { className: Ot.content, children: [
                /* @__PURE__ */ o("div", { className: Ot.title, children: x.title }),
                x.description && /* @__PURE__ */ o("div", { className: Ot.description, children: x.description }),
                (x.action || x.cancel) && /* @__PURE__ */ z("div", { className: Ot.actions, children: [
                  x.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.action,
                      onClick: () => {
                        x.action?.onClick?.(), v(x.id);
                      },
                      children: x.action.label
                    }
                  ),
                  x.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.cancel,
                      onClick: () => {
                        x.cancel?.onClick?.(), v(x.id);
                      },
                      children: x.cancel.label
                    }
                  )
                ] })
              ] }),
              x.dismissible && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ot.dismiss,
                  onClick: () => v(x.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              ),
              x.showProgress && x.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: Ot.progress,
                  style: { animationDuration: `${x.durationMs}ms` }
                }
              )
            ]
          },
          x.id
        ))
      },
      O
    ))
  ] });
}
const fd = "_alert_146r9_1", _d = "_xs_146r9_28", hd = "_sm_146r9_38", pd = "_lg_146r9_48", md = "_xl_146r9_58", gd = "_primary_146r9_69", bd = "_secondary_146r9_74", yd = "_light_146r9_79", xd = "_base_146r9_84", vd = "_dark_146r9_89", kd = "_info_146r9_94", wd = "_success_146r9_99", $d = "_warning_146r9_104", Nd = "_danger_146r9_109", Od = "_flat_146r9_116", Sd = "_outlined_146r9_123", Cd = "_filled_146r9_132", Dd = "_text_146r9_139", Ed = "_icon_146r9_181", zd = "_content_146r9_192", Md = "_title_146r9_197", Id = "_body_146r9_203", Ad = "_dismiss_146r9_209", Ut = {
  alert: fd,
  xs: _d,
  sm: hd,
  lg: pd,
  xl: md,
  primary: gd,
  secondary: bd,
  light: yd,
  base: xd,
  dark: vd,
  info: kd,
  success: wd,
  warning: $d,
  danger: Nd,
  flat: Od,
  outlined: Sd,
  filled: Cd,
  text: Dd,
  icon: Ed,
  content: zd,
  title: Md,
  body: Id,
  dismiss: Ad,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, jd = {
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
function Ck({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: s = "md",
  title: l,
  icon: c,
  showIcon: u = !0,
  children: r,
  dismissible: a = !0,
  onDismiss: i,
  visible: f,
  onVisibleChange: d,
  className: k,
  ...g
}) {
  const [m, p] = W(!1);
  if (f === !1 || f === void 0 && m)
    return null;
  const b = () => {
    f === void 0 && p(!0), i?.(), d?.(!1);
  }, h = e, _ = Ir(t, "filled"), y = os(n), w = c ?? (u ? /* @__PURE__ */ o(ke, { icon: jd[e] }) : null);
  return /* @__PURE__ */ z(
    "div",
    {
      role: "alert",
      ...g,
      className: [
        Ut.alert,
        Ut[h],
        Ut[_],
        y ? Ut[y] : null,
        Ut[s],
        k
      ].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ o("span", { className: Ut.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ z("div", { className: Ut.content, children: [
          l && /* @__PURE__ */ o("div", { className: Ut.title, children: l }),
          r && /* @__PURE__ */ o("div", { className: Ut.body, children: r })
        ] }),
        a && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ut.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Td = "_skeleton_1xyce_1", Pd = "_text_1xyce_35", Ld = "_circle_1xyce_40", Rd = "_rect_1xyce_44", cr = {
  skeleton: Td,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: Pd,
  circle: Ld,
  rect: Rd
};
function Dk({
  variant: e = "text",
  width: t,
  height: n,
  className: s
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: [cr.skeleton, cr[e], s].filter(Boolean).join(" "),
      style: l
    }
  );
}
function xs(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const Bd = "_row_juebr_1", Fd = "_start_juebr_14", Hd = "_center_juebr_18", qd = "_end_juebr_22", Kd = "_stretch_juebr_26", Wd = "_baseline_juebr_30", Ud = "_normal_juebr_34", Vd = "_noWrap_juebr_90", Gd = "_wrapReverse_juebr_94", cs = {
  row: Bd,
  start: Fd,
  center: Hd,
  end: qd,
  stretch: Kd,
  baseline: Wd,
  normal: Ud,
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
  noWrap: Vd,
  wrapReverse: Gd
};
function dr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Ek({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: s = "start",
  wrap: l = !0,
  className: c,
  style: u,
  ...r
}) {
  const a = e != null ? xs(e) : null, i = t != null ? xs(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...a ? {
      columnGap: a,
      "--dx-col-gap": a
    } : {},
    ...i ? { rowGap: i } : {},
    ...u
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        cs.row,
        cs[n],
        cs[`justify-${s}`],
        dr(l) != null ? cs[dr(l)] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...r
    }
  );
}
const Xd = "_column_sh0ss_1", Yd = "_Size1_sh0ss_15", Zd = "_Size2_sh0ss_24", Jd = "_Size3_sh0ss_33", Qd = "_Size4_sh0ss_42", eu = "_Size5_sh0ss_51", tu = "_Size6_sh0ss_60", nu = "_Size7_sh0ss_69", su = "_Size8_sh0ss_78", ru = "_Size9_sh0ss_87", ou = "_Size10_sh0ss_96", lu = "_Size11_sh0ss_105", au = "_Size12_sh0ss_114", iu = "_Offset0_sh0ss_119", cu = "_Offset1_sh0ss_122", du = "_Offset2_sh0ss_127", uu = "_Offset3_sh0ss_132", fu = "_Offset4_sh0ss_137", _u = "_Offset5_sh0ss_142", hu = "_Offset6_sh0ss_147", pu = "_Offset7_sh0ss_152", mu = "_Offset8_sh0ss_157", gu = "_Offset9_sh0ss_162", bu = "_Offset10_sh0ss_167", yu = "_Offset11_sh0ss_172", xu = "_Offset12_sh0ss_177", vu = "_OrderFirst_sh0ss_182", ku = "_OrderLast_sh0ss_185", wu = "_Order0_sh0ss_188", $u = "_Order1_sh0ss_191", Nu = "_Order2_sh0ss_194", Ou = "_Order3_sh0ss_197", Su = "_Order4_sh0ss_200", Cu = "_Order5_sh0ss_203", Du = "_Order6_sh0ss_206", Eu = "_Order7_sh0ss_209", zu = "_Order8_sh0ss_212", Mu = "_Order9_sh0ss_215", Iu = "_Order10_sh0ss_218", Au = "_Order11_sh0ss_221", ju = "_Order12_sh0ss_224", Tu = "_xsSize1_sh0ss_229", Pu = "_xsSize2_sh0ss_238", Lu = "_xsSize3_sh0ss_247", Ru = "_xsSize4_sh0ss_256", Bu = "_xsSize5_sh0ss_265", Fu = "_xsSize6_sh0ss_274", Hu = "_xsSize7_sh0ss_283", qu = "_xsSize8_sh0ss_292", Ku = "_xsSize9_sh0ss_301", Wu = "_xsSize10_sh0ss_310", Uu = "_xsSize11_sh0ss_321", Vu = "_xsSize12_sh0ss_332", Gu = "_xsOffset0_sh0ss_337", Xu = "_xsOffset1_sh0ss_340", Yu = "_xsOffset2_sh0ss_345", Zu = "_xsOffset3_sh0ss_350", Ju = "_xsOffset4_sh0ss_355", Qu = "_xsOffset5_sh0ss_360", ef = "_xsOffset6_sh0ss_365", tf = "_xsOffset7_sh0ss_370", nf = "_xsOffset8_sh0ss_375", sf = "_xsOffset9_sh0ss_380", rf = "_xsOffset10_sh0ss_385", of = "_xsOffset11_sh0ss_391", lf = "_xsOffset12_sh0ss_397", af = "_xsOrderFirst_sh0ss_403", cf = "_xsOrderLast_sh0ss_406", df = "_xsOrder0_sh0ss_409", uf = "_xsOrder1_sh0ss_412", ff = "_xsOrder2_sh0ss_415", _f = "_xsOrder3_sh0ss_418", hf = "_xsOrder4_sh0ss_421", pf = "_xsOrder5_sh0ss_424", mf = "_xsOrder6_sh0ss_427", gf = "_xsOrder7_sh0ss_430", bf = "_xsOrder8_sh0ss_433", yf = "_xsOrder9_sh0ss_436", xf = "_xsOrder10_sh0ss_439", vf = "_xsOrder11_sh0ss_442", kf = "_xsOrder12_sh0ss_445", wf = "_smSize1_sh0ss_451", $f = "_smSize2_sh0ss_460", Nf = "_smSize3_sh0ss_469", Of = "_smSize4_sh0ss_478", Sf = "_smSize5_sh0ss_487", Cf = "_smSize6_sh0ss_496", Df = "_smSize7_sh0ss_505", Ef = "_smSize8_sh0ss_514", zf = "_smSize9_sh0ss_523", Mf = "_smSize10_sh0ss_532", If = "_smSize11_sh0ss_543", Af = "_smSize12_sh0ss_554", jf = "_smOffset0_sh0ss_559", Tf = "_smOffset1_sh0ss_562", Pf = "_smOffset2_sh0ss_567", Lf = "_smOffset3_sh0ss_572", Rf = "_smOffset4_sh0ss_577", Bf = "_smOffset5_sh0ss_582", Ff = "_smOffset6_sh0ss_587", Hf = "_smOffset7_sh0ss_592", qf = "_smOffset8_sh0ss_597", Kf = "_smOffset9_sh0ss_602", Wf = "_smOffset10_sh0ss_607", Uf = "_smOffset11_sh0ss_613", Vf = "_smOffset12_sh0ss_619", Gf = "_smOrderFirst_sh0ss_625", Xf = "_smOrderLast_sh0ss_628", Yf = "_smOrder0_sh0ss_631", Zf = "_smOrder1_sh0ss_634", Jf = "_smOrder2_sh0ss_637", Qf = "_smOrder3_sh0ss_640", e_ = "_smOrder4_sh0ss_643", t_ = "_smOrder5_sh0ss_646", n_ = "_smOrder6_sh0ss_649", s_ = "_smOrder7_sh0ss_652", r_ = "_smOrder8_sh0ss_655", o_ = "_smOrder9_sh0ss_658", l_ = "_smOrder10_sh0ss_661", a_ = "_smOrder11_sh0ss_664", i_ = "_smOrder12_sh0ss_667", c_ = "_mdSize1_sh0ss_673", d_ = "_mdSize2_sh0ss_682", u_ = "_mdSize3_sh0ss_691", f_ = "_mdSize4_sh0ss_700", __ = "_mdSize5_sh0ss_709", h_ = "_mdSize6_sh0ss_718", p_ = "_mdSize7_sh0ss_727", m_ = "_mdSize8_sh0ss_736", g_ = "_mdSize9_sh0ss_745", b_ = "_mdSize10_sh0ss_754", y_ = "_mdSize11_sh0ss_765", x_ = "_mdSize12_sh0ss_776", v_ = "_mdOffset0_sh0ss_781", k_ = "_mdOffset1_sh0ss_784", w_ = "_mdOffset2_sh0ss_789", $_ = "_mdOffset3_sh0ss_794", N_ = "_mdOffset4_sh0ss_799", O_ = "_mdOffset5_sh0ss_804", S_ = "_mdOffset6_sh0ss_809", C_ = "_mdOffset7_sh0ss_814", D_ = "_mdOffset8_sh0ss_819", E_ = "_mdOffset9_sh0ss_824", z_ = "_mdOffset10_sh0ss_829", M_ = "_mdOffset11_sh0ss_835", I_ = "_mdOffset12_sh0ss_841", A_ = "_mdOrderFirst_sh0ss_847", j_ = "_mdOrderLast_sh0ss_850", T_ = "_mdOrder0_sh0ss_853", P_ = "_mdOrder1_sh0ss_856", L_ = "_mdOrder2_sh0ss_859", R_ = "_mdOrder3_sh0ss_862", B_ = "_mdOrder4_sh0ss_865", F_ = "_mdOrder5_sh0ss_868", H_ = "_mdOrder6_sh0ss_871", q_ = "_mdOrder7_sh0ss_874", K_ = "_mdOrder8_sh0ss_877", W_ = "_mdOrder9_sh0ss_880", U_ = "_mdOrder10_sh0ss_883", V_ = "_mdOrder11_sh0ss_886", G_ = "_mdOrder12_sh0ss_889", X_ = "_lgSize1_sh0ss_895", Y_ = "_lgSize2_sh0ss_904", Z_ = "_lgSize3_sh0ss_913", J_ = "_lgSize4_sh0ss_922", Q_ = "_lgSize5_sh0ss_931", eh = "_lgSize6_sh0ss_940", th = "_lgSize7_sh0ss_949", nh = "_lgSize8_sh0ss_958", sh = "_lgSize9_sh0ss_967", rh = "_lgSize10_sh0ss_976", oh = "_lgSize11_sh0ss_987", lh = "_lgSize12_sh0ss_998", ah = "_lgOffset0_sh0ss_1003", ih = "_lgOffset1_sh0ss_1006", ch = "_lgOffset2_sh0ss_1011", dh = "_lgOffset3_sh0ss_1016", uh = "_lgOffset4_sh0ss_1021", fh = "_lgOffset5_sh0ss_1026", _h = "_lgOffset6_sh0ss_1031", hh = "_lgOffset7_sh0ss_1036", ph = "_lgOffset8_sh0ss_1041", mh = "_lgOffset9_sh0ss_1046", gh = "_lgOffset10_sh0ss_1051", bh = "_lgOffset11_sh0ss_1057", yh = "_lgOffset12_sh0ss_1063", xh = "_lgOrderFirst_sh0ss_1069", vh = "_lgOrderLast_sh0ss_1072", kh = "_lgOrder0_sh0ss_1075", wh = "_lgOrder1_sh0ss_1078", $h = "_lgOrder2_sh0ss_1081", Nh = "_lgOrder3_sh0ss_1084", Oh = "_lgOrder4_sh0ss_1087", Sh = "_lgOrder5_sh0ss_1090", Ch = "_lgOrder6_sh0ss_1093", Dh = "_lgOrder7_sh0ss_1096", Eh = "_lgOrder8_sh0ss_1099", zh = "_lgOrder9_sh0ss_1102", Mh = "_lgOrder10_sh0ss_1105", Ih = "_lgOrder11_sh0ss_1108", Ah = "_lgOrder12_sh0ss_1111", jh = "_xlSize1_sh0ss_1117", Th = "_xlSize2_sh0ss_1126", Ph = "_xlSize3_sh0ss_1135", Lh = "_xlSize4_sh0ss_1144", Rh = "_xlSize5_sh0ss_1153", Bh = "_xlSize6_sh0ss_1162", Fh = "_xlSize7_sh0ss_1171", Hh = "_xlSize8_sh0ss_1180", qh = "_xlSize9_sh0ss_1189", Kh = "_xlSize10_sh0ss_1198", Wh = "_xlSize11_sh0ss_1209", Uh = "_xlSize12_sh0ss_1220", Vh = "_xlOffset0_sh0ss_1225", Gh = "_xlOffset1_sh0ss_1228", Xh = "_xlOffset2_sh0ss_1233", Yh = "_xlOffset3_sh0ss_1238", Zh = "_xlOffset4_sh0ss_1243", Jh = "_xlOffset5_sh0ss_1248", Qh = "_xlOffset6_sh0ss_1253", ep = "_xlOffset7_sh0ss_1258", tp = "_xlOffset8_sh0ss_1263", np = "_xlOffset9_sh0ss_1268", sp = "_xlOffset10_sh0ss_1273", rp = "_xlOffset11_sh0ss_1279", op = "_xlOffset12_sh0ss_1285", lp = "_xlOrderFirst_sh0ss_1291", ap = "_xlOrderLast_sh0ss_1294", ip = "_xlOrder0_sh0ss_1297", cp = "_xlOrder1_sh0ss_1300", dp = "_xlOrder2_sh0ss_1303", up = "_xlOrder3_sh0ss_1306", fp = "_xlOrder4_sh0ss_1309", _p = "_xlOrder5_sh0ss_1312", hp = "_xlOrder6_sh0ss_1315", pp = "_xlOrder7_sh0ss_1318", mp = "_xlOrder8_sh0ss_1321", gp = "_xlOrder9_sh0ss_1324", bp = "_xlOrder10_sh0ss_1327", yp = "_xlOrder11_sh0ss_1330", xp = "_xlOrder12_sh0ss_1333", vp = "_xxSize1_sh0ss_1339", kp = "_xxSize2_sh0ss_1348", wp = "_xxSize3_sh0ss_1357", $p = "_xxSize4_sh0ss_1366", Np = "_xxSize5_sh0ss_1375", Op = "_xxSize6_sh0ss_1384", Sp = "_xxSize7_sh0ss_1393", Cp = "_xxSize8_sh0ss_1402", Dp = "_xxSize9_sh0ss_1411", Ep = "_xxSize10_sh0ss_1420", zp = "_xxSize11_sh0ss_1431", Mp = "_xxSize12_sh0ss_1442", Ip = "_xxOffset0_sh0ss_1447", Ap = "_xxOffset1_sh0ss_1450", jp = "_xxOffset2_sh0ss_1455", Tp = "_xxOffset3_sh0ss_1460", Pp = "_xxOffset4_sh0ss_1465", Lp = "_xxOffset5_sh0ss_1470", Rp = "_xxOffset6_sh0ss_1475", Bp = "_xxOffset7_sh0ss_1480", Fp = "_xxOffset8_sh0ss_1485", Hp = "_xxOffset9_sh0ss_1490", qp = "_xxOffset10_sh0ss_1495", Kp = "_xxOffset11_sh0ss_1501", Wp = "_xxOffset12_sh0ss_1507", Up = "_xxOrderFirst_sh0ss_1513", Vp = "_xxOrderLast_sh0ss_1516", Gp = "_xxOrder0_sh0ss_1519", Xp = "_xxOrder1_sh0ss_1522", Yp = "_xxOrder2_sh0ss_1525", Zp = "_xxOrder3_sh0ss_1528", Jp = "_xxOrder4_sh0ss_1531", Qp = "_xxOrder5_sh0ss_1534", em = "_xxOrder6_sh0ss_1537", tm = "_xxOrder7_sh0ss_1540", nm = "_xxOrder8_sh0ss_1543", sm = "_xxOrder9_sh0ss_1546", rm = "_xxOrder10_sh0ss_1549", om = "_xxOrder11_sh0ss_1552", lm = "_xxOrder12_sh0ss_1555", ds = {
  column: Xd,
  Size1: Yd,
  Size2: Zd,
  Size3: Jd,
  Size4: Qd,
  Size5: eu,
  Size6: tu,
  Size7: nu,
  Size8: su,
  Size9: ru,
  Size10: ou,
  Size11: lu,
  Size12: au,
  Offset0: iu,
  Offset1: cu,
  Offset2: du,
  Offset3: uu,
  Offset4: fu,
  Offset5: _u,
  Offset6: hu,
  Offset7: pu,
  Offset8: mu,
  Offset9: gu,
  Offset10: bu,
  Offset11: yu,
  Offset12: xu,
  OrderFirst: vu,
  OrderLast: ku,
  Order0: wu,
  Order1: $u,
  Order2: Nu,
  Order3: Ou,
  Order4: Su,
  Order5: Cu,
  Order6: Du,
  Order7: Eu,
  Order8: zu,
  Order9: Mu,
  Order10: Iu,
  Order11: Au,
  Order12: ju,
  xsSize1: Tu,
  xsSize2: Pu,
  xsSize3: Lu,
  xsSize4: Ru,
  xsSize5: Bu,
  xsSize6: Fu,
  xsSize7: Hu,
  xsSize8: qu,
  xsSize9: Ku,
  xsSize10: Wu,
  xsSize11: Uu,
  xsSize12: Vu,
  xsOffset0: Gu,
  xsOffset1: Xu,
  xsOffset2: Yu,
  xsOffset3: Zu,
  xsOffset4: Ju,
  xsOffset5: Qu,
  xsOffset6: ef,
  xsOffset7: tf,
  xsOffset8: nf,
  xsOffset9: sf,
  xsOffset10: rf,
  xsOffset11: of,
  xsOffset12: lf,
  xsOrderFirst: af,
  xsOrderLast: cf,
  xsOrder0: df,
  xsOrder1: uf,
  xsOrder2: ff,
  xsOrder3: _f,
  xsOrder4: hf,
  xsOrder5: pf,
  xsOrder6: mf,
  xsOrder7: gf,
  xsOrder8: bf,
  xsOrder9: yf,
  xsOrder10: xf,
  xsOrder11: vf,
  xsOrder12: kf,
  smSize1: wf,
  smSize2: $f,
  smSize3: Nf,
  smSize4: Of,
  smSize5: Sf,
  smSize6: Cf,
  smSize7: Df,
  smSize8: Ef,
  smSize9: zf,
  smSize10: Mf,
  smSize11: If,
  smSize12: Af,
  smOffset0: jf,
  smOffset1: Tf,
  smOffset2: Pf,
  smOffset3: Lf,
  smOffset4: Rf,
  smOffset5: Bf,
  smOffset6: Ff,
  smOffset7: Hf,
  smOffset8: qf,
  smOffset9: Kf,
  smOffset10: Wf,
  smOffset11: Uf,
  smOffset12: Vf,
  smOrderFirst: Gf,
  smOrderLast: Xf,
  smOrder0: Yf,
  smOrder1: Zf,
  smOrder2: Jf,
  smOrder3: Qf,
  smOrder4: e_,
  smOrder5: t_,
  smOrder6: n_,
  smOrder7: s_,
  smOrder8: r_,
  smOrder9: o_,
  smOrder10: l_,
  smOrder11: a_,
  smOrder12: i_,
  mdSize1: c_,
  mdSize2: d_,
  mdSize3: u_,
  mdSize4: f_,
  mdSize5: __,
  mdSize6: h_,
  mdSize7: p_,
  mdSize8: m_,
  mdSize9: g_,
  mdSize10: b_,
  mdSize11: y_,
  mdSize12: x_,
  mdOffset0: v_,
  mdOffset1: k_,
  mdOffset2: w_,
  mdOffset3: $_,
  mdOffset4: N_,
  mdOffset5: O_,
  mdOffset6: S_,
  mdOffset7: C_,
  mdOffset8: D_,
  mdOffset9: E_,
  mdOffset10: z_,
  mdOffset11: M_,
  mdOffset12: I_,
  mdOrderFirst: A_,
  mdOrderLast: j_,
  mdOrder0: T_,
  mdOrder1: P_,
  mdOrder2: L_,
  mdOrder3: R_,
  mdOrder4: B_,
  mdOrder5: F_,
  mdOrder6: H_,
  mdOrder7: q_,
  mdOrder8: K_,
  mdOrder9: W_,
  mdOrder10: U_,
  mdOrder11: V_,
  mdOrder12: G_,
  lgSize1: X_,
  lgSize2: Y_,
  lgSize3: Z_,
  lgSize4: J_,
  lgSize5: Q_,
  lgSize6: eh,
  lgSize7: th,
  lgSize8: nh,
  lgSize9: sh,
  lgSize10: rh,
  lgSize11: oh,
  lgSize12: lh,
  lgOffset0: ah,
  lgOffset1: ih,
  lgOffset2: ch,
  lgOffset3: dh,
  lgOffset4: uh,
  lgOffset5: fh,
  lgOffset6: _h,
  lgOffset7: hh,
  lgOffset8: ph,
  lgOffset9: mh,
  lgOffset10: gh,
  lgOffset11: bh,
  lgOffset12: yh,
  lgOrderFirst: xh,
  lgOrderLast: vh,
  lgOrder0: kh,
  lgOrder1: wh,
  lgOrder2: $h,
  lgOrder3: Nh,
  lgOrder4: Oh,
  lgOrder5: Sh,
  lgOrder6: Ch,
  lgOrder7: Dh,
  lgOrder8: Eh,
  lgOrder9: zh,
  lgOrder10: Mh,
  lgOrder11: Ih,
  lgOrder12: Ah,
  xlSize1: jh,
  xlSize2: Th,
  xlSize3: Ph,
  xlSize4: Lh,
  xlSize5: Rh,
  xlSize6: Bh,
  xlSize7: Fh,
  xlSize8: Hh,
  xlSize9: qh,
  xlSize10: Kh,
  xlSize11: Wh,
  xlSize12: Uh,
  xlOffset0: Vh,
  xlOffset1: Gh,
  xlOffset2: Xh,
  xlOffset3: Yh,
  xlOffset4: Zh,
  xlOffset5: Jh,
  xlOffset6: Qh,
  xlOffset7: ep,
  xlOffset8: tp,
  xlOffset9: np,
  xlOffset10: sp,
  xlOffset11: rp,
  xlOffset12: op,
  xlOrderFirst: lp,
  xlOrderLast: ap,
  xlOrder0: ip,
  xlOrder1: cp,
  xlOrder2: dp,
  xlOrder3: up,
  xlOrder4: fp,
  xlOrder5: _p,
  xlOrder6: hp,
  xlOrder7: pp,
  xlOrder8: mp,
  xlOrder9: gp,
  xlOrder10: bp,
  xlOrder11: yp,
  xlOrder12: xp,
  xxSize1: vp,
  xxSize2: kp,
  xxSize3: wp,
  xxSize4: $p,
  xxSize5: Np,
  xxSize6: Op,
  xxSize7: Sp,
  xxSize8: Cp,
  xxSize9: Dp,
  xxSize10: Ep,
  xxSize11: zp,
  xxSize12: Mp,
  xxOffset0: Ip,
  xxOffset1: Ap,
  xxOffset2: jp,
  xxOffset3: Tp,
  xxOffset4: Pp,
  xxOffset5: Lp,
  xxOffset6: Rp,
  xxOffset7: Bp,
  xxOffset8: Fp,
  xxOffset9: Hp,
  xxOffset10: qp,
  xxOffset11: Kp,
  xxOffset12: Wp,
  xxOrderFirst: Up,
  xxOrderLast: Vp,
  xxOrder0: Gp,
  xxOrder1: Xp,
  xxOrder2: Yp,
  xxOrder3: Zp,
  xxOrder4: Jp,
  xxOrder5: Qp,
  xxOrder6: em,
  xxOrder7: tm,
  xxOrder8: nm,
  xxOrder9: sm,
  xxOrder10: rm,
  xxOrder11: om,
  xxOrder12: lm
}, am = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function im(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function cm(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function dm(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function um(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (dm(n, t), `${e}Order${t}`);
}
function zk({ className: e, style: t, ...n }) {
  const s = [ds.column], l = { ...t };
  for (const [E, O, x, S] of am) {
    const j = n[O], T = n[x], A = n[S];
    if (j != null) {
      im(O, j);
      const F = ds[`${E}Size${j}`];
      F && s.push(F);
    }
    if (T != null) {
      cm(x, T);
      const F = ds[`${E}Offset${T}`];
      F && s.push(F);
    }
    if (A != null) {
      const F = ds[um(E, A, S)];
      F && s.push(F);
    }
  }
  const {
    size: c,
    offset: u,
    sizeXs: r,
    offsetXs: a,
    sizeSm: i,
    offsetSm: f,
    sizeMd: d,
    offsetMd: k,
    sizeLg: g,
    offsetLg: m,
    sizeXl: p,
    offsetXl: b,
    sizeXx: h,
    offsetXx: _,
    order: y,
    orderXs: w,
    orderSm: v,
    orderMd: N,
    orderLg: $,
    orderXl: C,
    orderXx: M,
    ...D
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...s, e].filter(Boolean).join(" "),
      style: l,
      ...D
    }
  );
}
const fm = "_stack_bmbbp_1", Xn = {
  stack: fm,
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
function ur(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Mk({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: s = 16,
  align: l,
  justify: c,
  className: u,
  style: r,
  ...a
}) {
  const i = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...s != null ? { gap: xs(s) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Xn.stack,
        Xn[`dir-${i}`],
        ur(n) !== "wrap" ? Xn[`wrap-${ur(n)}`] : null,
        l != null ? Xn[`align-${l}`] : null,
        c != null ? Xn[`justify-${c}`] : null,
        u
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const _m = "_autogrid_16x9f_1", hm = {
  autogrid: _m
};
function Ik({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: s,
  visible: l = !0,
  ...c
}) {
  if (l === !1) return null;
  const u = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: xs(t) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [hm.autogrid, n].filter(Boolean).join(" "),
      style: u,
      ...c
    }
  );
}
const pm = "_layout_fxvw1_1", mm = "_row_fxvw1_7", gm = "_grid_fxvw1_21", bm = "_gridRight_fxvw1_27", ym = "_gridHeader_fxvw1_31", xm = "_gridFooter_fxvw1_36", vm = "_gridContents_fxvw1_41", km = "_gridBody_fxvw1_45", Jt = {
  layout: pm,
  row: mm,
  grid: gm,
  gridRight: bm,
  gridHeader: ym,
  gridFooter: xm,
  gridContents: vm,
  gridBody: km
}, wm = "_footer_3be5w_1", $m = "_sticky_3be5w_9", fr = {
  footer: wm,
  sticky: $m
};
function Nm({
  sticky: e = !1,
  className: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [fr.footer, e ? fr.sticky : null, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}
const Om = "_header_1tw8b_1", Sm = "_sticky_1tw8b_9", _r = {
  header: Om,
  sticky: Sm
};
function Cm({
  sticky: e = !1,
  className: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [_r.header, e ? _r.sticky : null, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}
const Dm = "_sidebar_175d5_1", Em = "_sticky_175d5_23", zm = "_left_175d5_41", Mm = "_right_175d5_45", Im = "_start_175d5_50", Am = "_end_175d5_54", jm = "_fullHeight_175d5_60", Tm = "_collapsed_175d5_64", Pm = "_responsive_175d5_72", Lm = "_overlay_175d5_80", Rm = "_mask_175d5_108", dn = {
  sidebar: Dm,
  sticky: Em,
  left: zm,
  right: Mm,
  start: Im,
  end: Am,
  fullHeight: jm,
  collapsed: Tm,
  responsive: Pm,
  overlay: Lm,
  mask: Rm
};
function Bm({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: s = !1,
  fullHeight: l = !1,
  sticky: c = !1,
  onClose: u,
  className: r,
  children: a,
  ...i
}) {
  return fe(() => {
    if (!s || !t || u == null) return;
    const f = (d) => {
      d.key === "Escape" && u();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [s, t, u]), /* @__PURE__ */ z(tt, { children: [
    s && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${dn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: u
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          dn.sidebar,
          dn[e],
          t ? null : dn.collapsed,
          n ? dn.responsive : null,
          s ? [dn.overlay, "se-sidebar--overlay"] : null,
          l ? dn.fullHeight : null,
          c && !s && !l ? dn.sticky : null,
          r
        ].flat().filter(Boolean).join(" "),
        ...i,
        children: a
      }
    )
  ] });
}
function Ak(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(tt, { children: e.children });
  const { className: t, children: n, ...s } = e, l = [], c = [], u = [], r = [], a = [], i = [];
  ls.forEach(n, (k) => {
    if (!gt(k)) {
      u.push(k);
      return;
    }
    if (k.type === Cm)
      l.push(k);
    else if (k.type === Nm)
      c.push(k);
    else if (k.type === Bm) {
      const g = k, m = g.props.position;
      i.push(g), (m === "right" || m === "end" ? a : r).push(g);
    } else
      u.push(k);
  });
  const f = i.length === 1 && i[0]?.props.fullHeight === !0 ? i[0] : null, d = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const k = d ? a : r;
    return /* @__PURE__ */ z(
      "div",
      {
        className: [
          Jt.layout,
          Jt.grid,
          d ? Jt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...s,
        children: [
          l.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridHeader, children: l }),
          /* @__PURE__ */ z("div", { className: Jt.gridContents, children: [
            k,
            /* @__PURE__ */ o("div", { className: Jt.gridBody, children: u })
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
      ...s,
      children: [
        l,
        /* @__PURE__ */ z("div", { className: Jt.row, children: [
          r,
          u,
          a
        ] }),
        c
      ]
    }
  );
}
const Fm = "_body_1ge00_4", Hm = "_bare_1ge00_12", hr = {
  body: Fm,
  bare: Hm
};
function jk({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: s,
  ...l
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [hr.body, t ? null : hr.bare, n].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}
const qm = "_toggle_lxnk5_1", Km = {
  toggle: qm
};
function Tk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: s = "button",
  children: l,
  ...c
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: s,
      "aria-label": t,
      className: [Km.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: l ?? /* @__PURE__ */ o(ke, { icon: e, size: 20 })
    }
  );
}
const Wm = "_track_14127_1", Um = "_bar_14127_31", Vm = "_primary_14127_39", Gm = "_success_14127_43", Xm = "_warning_14127_47", Ym = "_danger_14127_51", Zm = "_indeterminate_14127_149", Jm = "_circular_14127_163", Qm = "_fill_14127_203", St = {
  track: Wm,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Um,
  primary: Vm,
  success: Gm,
  warning: Xm,
  danger: Ym,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Zm,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Jm,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Qm,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function Pk({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: s,
  indeterminate: l = !1,
  variant: c = "linear",
  size: u = "md",
  className: r,
  visible: a = !0,
  ...i
}) {
  if (a === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? f / t * 100 : 0;
  if (c === "circular") {
    const g = typeof u == "string", m = 2, p = 10.5, b = 2 * Math.PI * p, h = b * (l ? 0.75 : 1), _ = l ? 0 : b * (1 - d / 100), y = os(s);
    return /* @__PURE__ */ z(
      "svg",
      {
        width: g ? void 0 : u,
        height: g ? void 0 : u,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...i,
        className: [
          St.circular,
          St[n],
          y ? St[y] : null,
          g ? St[`circular-${u}`] : null,
          l ? St.indeterminate : null,
          r
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: St.track,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: m
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: St.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: m,
              strokeDasharray: `${h} ${b}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const k = os(s);
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
        k ? St[k] : null,
        typeof u == "string" ? St[`linear-${u}`] : null,
        l ? St.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: St.bar,
          style: l ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
const e1 = "_wrapper_tk30z_1", t1 = {
  wrapper: e1
}, n1 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Fr = "dx-palette", s1 = "data-palette";
function r1(e, t) {
  const n = e === void 0 ? Fr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(n);
      return s != null && t.includes(s) ? s : void 0;
    } catch {
      return;
    }
}
function o1(e, t) {
  const n = e === void 0 ? Fr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Lk({
  themes: e = n1,
  value: t,
  defaultValue: n,
  storageKey: s,
  attribute: l = s1,
  onChange: c,
  label: u = "Theme",
  placeholder: r = "Theme…",
  id: a,
  size: i = "md",
  className: f
}) {
  const [d, k] = W(void 0), g = t !== void 0, m = t ?? d ?? r1(s, e) ?? n, p = m ?? "", b = Q(void 0);
  fe(() => {
    if (g) return;
    const _ = document.documentElement;
    if (m === void 0) {
      b.current !== void 0 && _.getAttribute(l) === b.current && (_.removeAttribute(l), b.current = void 0);
      return;
    }
    _.setAttribute(l, m), b.current = m;
  }, [m, l, g]);
  const h = (_) => {
    const y = _.target.value;
    g || (k(y), o1(s, y)), c?.(y);
  };
  return /* @__PURE__ */ z("label", { className: [t1.wrapper, f].filter(Boolean).join(" "), children: [
    u,
    /* @__PURE__ */ z(Sn, { id: a, size: i, value: p, onChange: h, children: [
      m === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: r }),
      m !== void 0 && !e.includes(m) && /* @__PURE__ */ o("option", { value: m, children: m }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function l1(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Ws(e) {
  const [t, n] = W(() => l1(e));
  return fe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const s = window.matchMedia(e);
    n(s.matches);
    const l = (c) => n(c.matches);
    return typeof s.addEventListener == "function" ? (s.addEventListener("change", l), () => s.removeEventListener("change", l)) : (s.addListener(l), () => s.removeListener(l));
  }, [e]), t;
}
const a1 = "_pressed_12x15_8", i1 = {
  pressed: a1
}, c1 = Le(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: s,
    toggleVariant: l,
    toggleSeverity: c = "primary",
    toggleShade: u = "darker",
    toggleContent: r,
    size: a = "md",
    className: i,
    onClick: f,
    children: d,
    variant: k,
    severity: g,
    shade: m,
    ...p
  }, b) {
    const [h, _] = W(n), y = t ?? h, w = (v) => {
      const N = !y;
      t === void 0 && _(N), s?.(N), f?.(v);
    };
    return /* @__PURE__ */ o(
      On,
      {
        ...p,
        ref: b,
        variant: y && l ? l : k,
        severity: y ? c : g,
        shade: y ? u : m,
        size: a,
        "aria-pressed": y,
        className: [y ? i1.pressed : null, i].filter(Boolean).join(" "),
        onClick: w,
        children: y && r !== void 0 ? r : d
      }
    );
  }
), Hr = "dx-theme";
function d1(e) {
  const t = e === void 0 ? Hr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function u1(e, t) {
  const n = e === void 0 ? Hr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Rk({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: s,
  label: l = "Dark mode",
  id: c,
  className: u,
  size: r
}) {
  const a = Ws("(prefers-color-scheme: dark)"), [i, f] = W(void 0), d = e !== void 0, k = e ?? i ?? d1(n) ?? t ?? "system", g = k === "system" ? a ? "dark" : "light" : k;
  return fe(() => {
    if (!d) {
      if (k === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = k;
    }
  }, [k, d]), /* @__PURE__ */ o(
    c1,
    {
      id: c,
      size: r,
      className: u,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: g === "dark",
      onChange: (p) => {
        const b = p ? "dark" : "light";
        d || (f(b), u1(n, b)), s?.(b);
      },
      toggleContent: /* @__PURE__ */ o(ke, { icon: "light_mode", size: r ?? "md" }),
      children: /* @__PURE__ */ o(ke, { icon: "dark_mode", size: r ?? "md" })
    }
  );
}
const qr = "dx-palette", Kr = "dx-theme", Is = "data-palette", As = "data-theme", js = /* @__PURE__ */ new Set();
function f1() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Is), t = document.documentElement.getAttribute(As);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function Us(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Is) : document.documentElement.setAttribute(Is, e.theme), e.appearance == null ? document.documentElement.removeAttribute(As) : document.documentElement.setAttribute(As, e.appearance));
}
function Wr(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function pr(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let mr = !1;
function Rn() {
  const e = f1();
  if (!mr) {
    mr = !0;
    const t = pr(qr), n = pr(Kr), s = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: s };
    return (l.theme != null || l.appearance != null) && Us(l), l;
  }
  return e;
}
function Ur() {
  const e = Rn();
  js.forEach((t) => t({ ...e }));
}
function gr(e) {
  return js.add(e), () => {
    js.delete(e);
  };
}
function Bk() {
  return Rn().theme;
}
function _1(e) {
  const t = Rn();
  t.theme !== e && (t.theme = e, Us(t), Wr(qr, e), Ur());
}
function Fk() {
  return Rn().appearance;
}
function h1(e) {
  const t = Rn();
  t.appearance !== e && (t.appearance = e, Us(t), Wr(Kr, e), Ur());
}
function Hk() {
  const [, e] = W(0);
  fe(() => gr(() => e((n) => n + 1)), []);
  const t = Rn();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: _1,
    setAppearance: h1,
    subscribe: gr
  };
}
function p1(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, s = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(s);
  l.set(t), l[t.length] = 128;
  const c = new DataView(l.buffer);
  c.setUint32(s - 8, n >>> 0, !0), c.setUint32(s - 4, Math.floor(n / 4294967296), !0);
  const u = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], r = Array.from(
    { length: 64 },
    (p, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), a = (p, b) => p + b | 0, i = (p, b) => p << b | p >>> 32 - b;
  let f = 1732584193, d = 4023233417, k = 2562383102, g = 271733878;
  for (let p = 0; p < s; p += 64) {
    const b = [];
    for (let v = 0; v < 16; v += 1)
      b.push(c.getUint32(p + v * 4, !0));
    let h = f, _ = d, y = k, w = g;
    for (let v = 0; v < 64; v += 1) {
      let N, $;
      v < 16 ? (N = _ & y | ~_ & w, $ = v) : v < 32 ? (N = w & _ | ~w & y, $ = (5 * v + 1) % 16) : v < 48 ? (N = _ ^ y ^ w, $ = (3 * v + 5) % 16) : (N = y ^ (_ | ~w), $ = 7 * v % 16), N = a(a(a(N, h), r[v]), b[$]), h = w, w = y, y = _, _ = a(_, i(N, u[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = a(f, h), d = a(d, _), k = a(k, y), g = a(g, w);
  }
  const m = (p) => {
    let b = "";
    for (let h = 0; h < 4; h += 1)
      b += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return m(f) + m(d) + m(k) + m(g);
}
const m1 = "_avatar_1mhfr_1", g1 = "_xs_1mhfr_12", b1 = "_sm_1mhfr_18", y1 = "_md_1mhfr_24", x1 = "_lg_1mhfr_30", v1 = "_xl_1mhfr_36", k1 = "_initials_1mhfr_42", w1 = "_image_1mhfr_57", $1 = "_status_1mhfr_64", N1 = "_online_1mhfr_84", O1 = "_offline_1mhfr_88", S1 = "_away_1mhfr_92", zn = {
  avatar: m1,
  xs: g1,
  sm: b1,
  md: y1,
  lg: x1,
  xl: v1,
  initials: k1,
  image: w1,
  status: $1,
  online: N1,
  offline: O1,
  away: S1
}, C1 = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, gs = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function D1(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function E1(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return gs[t % gs.length] ?? gs[0];
}
function qk({
  name: e,
  src: t,
  email: n,
  gravatarDefault: s = "retro",
  gravatarRating: l = "g",
  alt: c,
  size: u = "md",
  status: r,
  className: a
}) {
  const i = be(() => e ? D1(e) : "?", [e]), f = be(() => e ? E1(e) : gs[0], [e]), d = be(() => {
    if (t != null || n == null) return;
    const w = n.trim().toLowerCase();
    return w === "" ? void 0 : `https://secure.gravatar.com/avatar/${p1(w)}?d=${s}&s=${C1[u]}&r=${l}`;
  }, [t, n, s, l, u]), k = t ?? d, [g, m] = W(null), p = k != null && g !== k, b = p && c === "", h = c ?? e ?? "avatar", _ = r ? `${h}, ${r}` : h, y = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: zn.image,
        src: k,
        alt: b ? "" : r ? _ : h,
        onError: () => m(k ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: zn.initials,
      style: { background: f },
      children: i
    }
  );
  return /* @__PURE__ */ z(
    "span",
    {
      className: [
        zn.avatar,
        zn[u],
        r ? zn[r] : null,
        a
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        y,
        r && /* @__PURE__ */ o("span", { className: zn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const z1 = "_root_zzwfz_1", M1 = "_left_zzwfz_6", I1 = "_right_zzwfz_7", A1 = "_panel_zzwfz_12", j1 = "_bottom_zzwfz_20", T1 = "_tabList_zzwfz_24", P1 = "_underline_zzwfz_53", L1 = "_pills_zzwfz_72", R1 = "_tab_zzwfz_24", B1 = "_active_zzwfz_113", F1 = "_disabled_zzwfz_139", Qt = {
  root: z1,
  left: M1,
  right: I1,
  panel: A1,
  bottom: j1,
  tabList: T1,
  underline: P1,
  pills: L1,
  tab: R1,
  active: B1,
  disabled: F1
};
function Kk({
  items: e,
  value: t,
  defaultValue: n,
  onChange: s,
  variant: l = "underline",
  position: c = "top",
  className: u
}) {
  const r = Pe(), a = Q(null), [i, f] = W(
    n ?? e[0]?.key ?? ""
  ), d = t ?? i, k = c === "left" || c === "right", g = (b) => {
    f(b), s?.(b);
  }, m = (b) => {
    const h = e.filter((w) => !w.disabled), _ = h.findIndex((w) => w.key === d);
    let y = -1;
    b.key === "ArrowRight" || k && b.key === "ArrowDown" ? y = (_ + 1) % h.length : b.key === "ArrowLeft" || k && b.key === "ArrowUp" ? y = (_ - 1 + h.length) % h.length : b.key === "Home" ? y = 0 : b.key === "End" && (y = h.length - 1), y >= 0 && (b.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[y]?.key ?? "")}"]`
    )?.focus(), g(h[y]?.key ?? ""));
  }, p = e.find((b) => b.key === d);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Qt.root, Qt[c], u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Qt.tabList, Qt[l], Qt[c]].filter(Boolean).join(" "),
            onKeyDown: m,
            children: e.map((b) => {
              const h = b.key === d;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${b.key}`,
                  "data-tab-key": b.key,
                  "aria-selected": h,
                  "aria-controls": `${r}-panel-${b.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: b.disabled,
                  className: [
                    Qt.tab,
                    h ? Qt.active : null,
                    b.disabled ? Qt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => g(b.key),
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
            id: `${r}-panel-${p.key}`,
            "aria-labelledby": `${r}-tab-${p.key}`,
            className: Qt.panel,
            children: p.content
          }
        )
      ]
    }
  );
}
const H1 = "_root_1l1j2_1", q1 = "_item_1l1j2_9", K1 = "_heading_1l1j2_13", W1 = "_trigger_1l1j2_17", U1 = "_disabled_1l1j2_34", V1 = "_title_1l1j2_48", G1 = "_chevron_1l1j2_52", X1 = "_open_1l1j2_59", Y1 = "_content_1l1j2_63", en = {
  root: H1,
  item: q1,
  heading: K1,
  trigger: W1,
  disabled: U1,
  title: V1,
  chevron: G1,
  open: X1,
  content: Y1
};
function Wk({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: s,
  onChange: l,
  className: c
}) {
  const u = Pe(), [r, a] = W(
    s ?? []
  ), i = n ?? r, f = (d) => {
    const k = i.includes(d) ? i.filter((g) => g !== d) : t ? [...i, d] : [d];
    a(k), l?.(k);
  };
  return /* @__PURE__ */ o("div", { className: [en.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const k = i.includes(d.key), g = `${u}-panel-${d.key}`, m = `${u}-trigger-${d.key}`;
    return /* @__PURE__ */ z("div", { className: en.item, children: [
      /* @__PURE__ */ o("h3", { className: en.heading, children: /* @__PURE__ */ z(
        "button",
        {
          type: "button",
          id: m,
          "aria-expanded": k,
          "aria-controls": g,
          disabled: d.disabled,
          className: [
            en.trigger,
            d.disabled ? en.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(d.key),
          children: [
            /* @__PURE__ */ o("span", { className: en.title, children: d.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [en.chevron, k ? en.open : null].filter(Boolean).join(" "),
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
          id: g,
          role: "region",
          "aria-labelledby": m,
          hidden: !k,
          className: en.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const Z1 = "_textarea_l7fsl_1", J1 = "_invalid_l7fsl_27", Q1 = "_xs_l7fsl_34", eg = "_sm_l7fsl_39", tg = "_md_l7fsl_44", ng = "_lg_l7fsl_49", sg = "_xl_l7fsl_54", us = {
  textarea: Z1,
  invalid: J1,
  xs: Q1,
  sm: eg,
  md: tg,
  lg: ng,
  xl: sg,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, Uk = Le(
  function({ size: t = "md", resize: n = "none", invalid: s = !1, className: l, ...c }, u) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: u,
        "data-size": t,
        className: [
          us.textarea,
          us[t],
          us[`resize-${n}`],
          s ? us.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...c
      }
    );
  }
), rg = "_root_xyp2i_1", og = "_trigger_xyp2i_9", lg = "_invalid_xyp2i_40", ag = "_placeholder_xyp2i_47", ig = "_label_xyp2i_54", cg = "_chevron_xyp2i_60", dg = "_chevronOpen_xyp2i_70", ug = "_menu_xyp2i_74", fg = "_option_xyp2i_89", _g = "_disabled_xyp2i_100", hg = "_active_xyp2i_104", pg = "_selected_xyp2i_105", mg = "_header_xyp2i_115", gg = "_xs_xyp2i_122", bg = "_sm_xyp2i_128", yg = "_md_xyp2i_134", xg = "_lg_xyp2i_140", vg = "_xl_xyp2i_146", pt = {
  root: rg,
  trigger: og,
  invalid: lg,
  placeholder: ag,
  label: ig,
  chevron: cg,
  chevronOpen: dg,
  menu: ug,
  option: fg,
  disabled: _g,
  active: hg,
  selected: pg,
  header: mg,
  xs: gg,
  sm: bg,
  md: yg,
  lg: xg,
  xl: vg
}, kg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Vk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  placeholder: l = "Select…",
  size: c = "md",
  invalid: u = !1,
  disabled: r = !1,
  className: a,
  ...i
}) {
  const f = Pe(), d = `${f}-listbox`, k = Q(null), g = Q(null), [m, p] = W(
    n
  ), [b, h] = W(!1), _ = t ?? m, y = e.map(
    (x, S) => x.label === "" || x.disabled ? -1 : S
  ).filter((x) => x >= 0), w = e.findIndex(
    (x) => x.value === _
  ), [v, N] = W(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), $ = R(() => {
    if (r) return;
    const x = w >= 0 && y.includes(w) ? w : y[0];
    N(x ?? -1), h(!0);
  }, [r, w, y]), C = R(() => {
    h(!1), g.current?.focus();
  }, []);
  fe(() => {
    if (!b) return;
    const x = (S) => {
      k.current && !k.current.contains(S.target) && h(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [b]);
  const M = (x) => {
    p(x), s?.(x), h(!1), g.current?.focus();
  }, D = (x) => {
    if (y.length === 0) return;
    const S = y.includes(v) ? y.indexOf(v) : 0, j = y[(S + x + y.length) % y.length];
    j != null && N(j);
  }, E = (x) => {
    if (!b) {
      x.key === "ArrowDown" && (x.preventDefault(), $());
      return;
    }
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), D(1);
        break;
      case "ArrowUp":
        x.preventDefault(), D(-1);
        break;
      case "Home":
        x.preventDefault(), y[0] != null && N(y[0]);
        break;
      case "End":
        x.preventDefault(), y[y.length - 1] != null && N(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        x.preventDefault(), v >= 0 && e[v] && y.includes(v) && M(e[v]?.value ?? "");
        break;
      case "Escape":
        x.preventDefault(), C();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, O = e.find(
    (x) => x.value === _
  );
  return /* @__PURE__ */ z(
    "div",
    {
      ref: k,
      className: [pt.root, a].filter(Boolean).join(" "),
      onKeyDown: E,
      children: [
        /* @__PURE__ */ z(
          "button",
          {
            ref: g,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": b,
            "aria-controls": d,
            "aria-invalid": u || void 0,
            disabled: r,
            className: [
              pt.trigger,
              pt[c],
              b ? pt.open : null,
              u ? pt.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => b ? h(!1) : $(),
            ...i,
            children: [
              /* @__PURE__ */ o("span", { className: O ? pt.label : pt.placeholder, children: O ? O.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [pt.chevron, b ? pt.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: kg },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        b && /* @__PURE__ */ o(
          "div",
          {
            id: d,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
            className: pt.menu,
            children: e.map(
              (x, S) => x.label === "" ? /* @__PURE__ */ o(
                "div",
                {
                  className: pt.header,
                  role: "presentation",
                  children: x.value
                },
                x.value
              ) : /* @__PURE__ */ o(
                "div",
                {
                  id: `${f}-option-${S}`,
                  role: "option",
                  "aria-selected": x.value === _,
                  "aria-disabled": x.disabled || void 0,
                  className: [
                    pt.option,
                    S === v ? pt.active : null,
                    x.value === _ ? pt.selected : null,
                    x.disabled ? pt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    x.disabled || M(x.value);
                  },
                  onMouseEnter: () => {
                    !x.disabled && x.label !== "" && N(S);
                  },
                  children: x.label
                },
                x.value
              )
            )
          }
        )
      ]
    }
  );
}
const wg = "_root_1ma8a_1", $g = "_wrap_1ma8a_9", Ng = "_input_1ma8a_26", Og = "_invalid_1ma8a_31", Sg = "_clear_1ma8a_58", Cg = "_menu_1ma8a_83", Dg = "_option_1ma8a_98", Eg = "_disabled_1ma8a_109", zg = "_active_1ma8a_113", Mg = "_empty_1ma8a_123", Ig = "_xs_1ma8a_129", Ag = "_sm_1ma8a_136", jg = "_md_1ma8a_143", Tg = "_lg_1ma8a_150", Pg = "_xl_1ma8a_157", It = {
  root: wg,
  wrap: $g,
  input: Ng,
  invalid: Og,
  clear: Sg,
  menu: Cg,
  option: Dg,
  disabled: Eg,
  active: zg,
  empty: Mg,
  xs: Ig,
  sm: Ag,
  md: jg,
  lg: Tg,
  xl: Pg
}, Lg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Gk({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: s,
  onSelect: l,
  placeholder: c = "",
  size: u = "md",
  invalid: r = !1,
  disabled: a = !1,
  filter: i = Lg,
  className: f,
  ...d
}) {
  const k = Pe(), g = `${k}-listbox`, m = Q(null), p = Q(null), [b, h] = W(n), [_, y] = W(!1), w = t ?? b, v = be(
    () => w.trim() === "" ? [...e] : e.filter((A) => i(A, w)),
    [e, w, i]
  ), N = v.map((A, F) => A.disabled ? -1 : F).filter((A) => A >= 0), [$, C] = W(-1), M = (A) => {
    h(A), s?.(A);
  }, D = (A) => {
    M(A.label), l?.(A.value, A), y(!1);
  }, E = (A) => {
    if (N.length === 0) return;
    const F = N.includes($) ? N.indexOf($) : A === 1 ? -1 : 0, L = N[(F + A + N.length) % N.length];
    L != null && C(L);
  }, O = (A) => {
    a || (M(A.target.value), y(!0), C(-1));
  }, x = () => {
    a || w !== "" && y(!0);
  }, S = (A) => {
    m.current && !m.current.contains(A.relatedTarget) && y(!1);
  }, j = (A) => {
    if (!a)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), _ ? E(1) : (y(!0), C(N[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), _ && E(-1);
          break;
        case "Enter":
          A.preventDefault(), _ && $ >= 0 && v[$] && D(v[$]);
          break;
        case "Escape":
          A.preventDefault(), y(!1);
          break;
        case "Tab":
          _ && $ >= 0 && v[$] && D(v[$]), y(!1);
          break;
      }
  }, T = () => {
    M(""), C(-1), y(!0), p.current?.focus();
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: m,
      className: [It.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ z(
          "div",
          {
            className: [It.wrap, It[u], r ? It.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: p,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": g,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && $ >= 0 ? `${k}-option-${$}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: a,
                  value: w,
                  placeholder: c,
                  className: It.input,
                  onChange: O,
                  onFocus: x,
                  onBlur: S,
                  onKeyDown: j,
                  ...d
                }
              ),
              w !== "" && !a && /* @__PURE__ */ o(
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
          /* @__PURE__ */ o("div", { id: g, className: It.menu, children: /* @__PURE__ */ o("div", { className: It.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: g, role: "listbox", className: It.menu, children: v.map((A, F) => /* @__PURE__ */ o(
          "div",
          {
            id: `${k}-option-${F}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": A.disabled || void 0,
            className: [
              It.option,
              F === $ ? It.active : null,
              A.disabled ? It.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              A.disabled || D(A);
            },
            onMouseDown: (L) => {
              L.preventDefault(), A.disabled || D(A);
            },
            onMouseEnter: () => {
              A.disabled || C(F);
            },
            children: A.label
          },
          A.value
        )) }))
      ]
    }
  );
}
const Rg = "_box_muvqe_1", Bg = "_option_muvqe_12", Fg = "_disabled_muvqe_23", Hg = "_selected_muvqe_27", qg = "_active_muvqe_33", Yn = {
  box: Rg,
  option: Bg,
  disabled: Fg,
  selected: Hg,
  active: qg
};
function Xk({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: s = !1,
  onChange: l,
  className: c,
  style: u,
  ...r
}) {
  const a = Pe(), [i, f] = W(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), d = t == null ? i : Array.isArray(t) ? t : [t], k = e.findIndex((v) => !v.disabled), [g, m] = W(
    () => k >= 0 ? k : 0
  ), p = Q(""), b = Q(null), h = (v) => {
    f(v), l?.(s ? v : v[0] ?? "");
  }, _ = e.map((v, N) => v.disabled ? -1 : N).filter((v) => v >= 0), y = (v) => {
    const N = e[v];
    if (!(!N || N.disabled))
      if (m(v), s) {
        const $ = d.includes(N.value) ? d.filter((C) => C !== N.value) : [...d, N.value];
        h($);
      } else
        h([N.value]);
  }, w = (v) => {
    if (_.length === 0) return;
    const N = _.includes(g) ? g : _[0];
    let $ = -1;
    if (v.key === "ArrowDown")
      $ = _[(_.indexOf(N) + 1) % _.length];
    else if (v.key === "ArrowUp")
      $ = _[(_.indexOf(N) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      $ = _[0];
    else if (v.key === "End")
      $ = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), y(N);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const C = (p.current + v.key).toLowerCase();
      p.current = C, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const M = [..._, ..._], D = _.indexOf(N) + 1, E = M.slice(D).find((O) => e[O]?.label.toLowerCase().startsWith(C));
      E != null && m(E);
      return;
    }
    $ >= 0 && (v.preventDefault(), m($), s || h([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[g] ? `${a}-option-${g}` : void 0,
      style: u,
      className: [Yn.box, c].filter(Boolean).join(" "),
      onKeyDown: w,
      ...r,
      children: e.map((v, N) => {
        const $ = d.includes(v.value), C = N === g;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${a}-option-${N}`,
            role: "option",
            "aria-selected": $,
            "aria-disabled": v.disabled || void 0,
            className: [
              Yn.option,
              $ ? Yn.selected : null,
              C ? Yn.active : null,
              v.disabled ? Yn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y(N),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const Kg = "_group_oinj7_1", Wg = "_legend_oinj7_8", Ug = "_list_oinj7_16", Vg = "_item_oinj7_25", Gg = "_disabled_oinj7_32", Xg = "_label_oinj7_37", Yg = "_checkbox_oinj7_48", xn = {
  group: Kg,
  legend: Wg,
  list: Ug,
  item: Vg,
  disabled: Gg,
  label: Xg,
  checkbox: Yg
};
function Yk({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: s,
  legend: l,
  name: c,
  className: u
}) {
  const [r, a] = W(() => [
    ...n
  ]), i = t ?? r, f = (d, k) => {
    const g = k ? [...i, d] : i.filter((m) => m !== d);
    a(g), s?.(g);
  };
  return /* @__PURE__ */ z("fieldset", { className: [xn.group, u].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: xn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: xn.list, children: e.map((d) => {
      const k = i.includes(d.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [xn.item, d.disabled ? xn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ z("label", { className: xn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: xn.checkbox,
                name: c,
                value: d.value,
                checked: k,
                disabled: d.disabled,
                onChange: (g) => f(d.value, g.target.checked)
              }
            ),
            /* @__PURE__ */ o("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const Zg = "_group_46668_1", Jg = "_legend_46668_8", Qg = "_list_46668_16", e0 = "_item_46668_25", t0 = "_disabled_46668_32", n0 = "_label_46668_37", s0 = "_radio_46668_48", vn = {
  group: Zg,
  legend: Jg,
  list: Qg,
  item: e0,
  disabled: t0,
  label: n0,
  radio: s0
};
function Zk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  legend: l,
  name: c,
  className: u
}) {
  const [r, a] = W(
    n
  ), i = t ?? r, f = (d) => {
    a(d), s?.(d);
  };
  return /* @__PURE__ */ z("fieldset", { className: [vn.group, u].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: vn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: vn.list, children: e.map((d) => {
      const k = d.value === i;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [vn.item, d.disabled ? vn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ z("label", { className: vn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: vn.radio,
                name: c,
                value: d.value,
                checked: k,
                disabled: d.disabled,
                onChange: (g) => f(g.target.value)
              }
            ),
            /* @__PURE__ */ o("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const r0 = "_bar_9zyxn_1", o0 = "_vertical_9zyxn_12", l0 = "_option_9zyxn_17", a0 = "_selected_9zyxn_40", i0 = "_sm_9zyxn_56", c0 = "_md_9zyxn_62", d0 = "_lg_9zyxn_68", Mn = {
  bar: r0,
  vertical: o0,
  option: l0,
  selected: a0,
  sm: i0,
  md: c0,
  lg: d0
};
function br(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Jk(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: s,
    multiple: l,
    orientation: c = "horizontal",
    onChange: u,
    size: r = "md",
    className: a,
    ...i
  } = e, f = l ?? !1, [d, k] = W(s ?? (f ? [] : t[0]?.value)), g = n ?? d, m = l === !0 || l === void 0 && Array.isArray(g), p = (h) => {
    if (!m) {
      k(h), u?.(h);
      return;
    }
    const _ = br(g), y = _.includes(h) ? _.filter((w) => w !== h) : [..._, h];
    k(y), u?.(y);
  }, b = (h) => m ? br(g).includes(h) : g === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        Mn.bar,
        Mn[r],
        c === "vertical" ? Mn.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((h) => {
        const _ = b(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: h.disabled,
            className: [
              Mn.option,
              _ ? Mn.selected : null,
              h.disabled ? Mn.disabled : null
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
const u0 = "_root_11hdr_1", f0 = "_action_11hdr_10", _0 = "_caret_11hdr_15", h0 = "_sm_11hdr_49", p0 = "_md_11hdr_53", m0 = "_lg_11hdr_57", g0 = "_fullWidth_11hdr_62", b0 = "_menu_11hdr_70", y0 = "_item_11hdr_83", x0 = "_itemIcon_11hdr_105", v0 = "_disabled_11hdr_110", k0 = "_active_11hdr_114", w0 = "_danger_11hdr_123", Rt = {
  root: u0,
  action: f0,
  caret: _0,
  sm: h0,
  md: p0,
  lg: m0,
  fullWidth: g0,
  menu: b0,
  item: y0,
  itemIcon: x0,
  disabled: v0,
  active: k0,
  danger: w0
}, Qk = Le(
  function({
    label: t,
    onClick: n,
    items: s = [],
    severity: l = "primary",
    variant: c = "filled",
    shade: u = "default",
    size: r = "md",
    loading: a = !1,
    visible: i = !0,
    fullWidth: f = !1,
    disabled: d = !1,
    className: k,
    "aria-label": g,
    openAriaLabel: m = "More actions",
    ...p
  }, b) {
    const _ = `${Pe()}-menu`, y = Q(null), w = Q(null), v = Q([]), [N, $] = W(!1), [C, M] = W(-1), D = d || a, E = be(
      () => s.map((L, V) => L.disabled ? -1 : V).filter((L) => L >= 0),
      [s]
    ), O = R(() => {
      D || (M(E[0] ?? -1), $(!0));
    }, [D, E]), x = R(() => {
      $(!1), w.current?.focus();
    }, []);
    fe(() => {
      if (!N) return;
      const L = (V) => {
        y.current && !y.current.contains(V.target) && $(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [N]), fe(() => {
      N && (D || !i) && $(!1);
    }, [N, D, i]);
    const S = Q(N);
    if (fe(() => {
      const L = S.current;
      if (S.current = N, !N || L) return;
      const V = E.includes(C) ? C : E[0] ?? -1;
      V >= 0 && v.current[V]?.focus();
    }, [N, C, E]), i === !1) return null;
    const j = (L) => {
      const V = s[L];
      !V || V.disabled || (V.onClick?.(), $(!1), w.current?.focus());
    }, T = (L) => {
      if (E.length === 0) return;
      const V = E.includes(C) ? E.indexOf(C) : L === 1 ? -1 : 0, ee = E[(V + L + E.length) % E.length];
      ee != null && (M(ee), v.current[ee]?.focus());
    }, A = (L) => {
      const V = L === "first" ? E[0] : E[E.length - 1];
      V != null && (M(V), v.current[V]?.focus());
    }, F = (L) => {
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), T(1);
          break;
        case "ArrowUp":
          L.preventDefault(), T(-1);
          break;
        case "Home":
          L.preventDefault(), A("first");
          break;
        case "End":
          L.preventDefault(), A("last");
          break;
        case "Escape":
          L.preventDefault(), x();
          break;
        case "Tab":
          $(!1);
          break;
      }
    };
    return /* @__PURE__ */ z(
      "div",
      {
        ref: (L) => {
          y.current = L, typeof b == "function" ? b(L) : b && (b.current = L);
        },
        className: [
          Rt.root,
          Rt[r],
          f ? Rt.fullWidth : null,
          k
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            On,
            {
              className: Rt.action,
              variant: c,
              severity: l,
              shade: u,
              size: r,
              loading: a,
              disabled: d,
              "aria-label": g,
              onClick: () => {
                N && $(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            On,
            {
              ref: w,
              className: Rt.caret,
              variant: c,
              severity: l,
              shade: u,
              size: r,
              disabled: D,
              "aria-haspopup": "menu",
              "aria-expanded": N,
              "aria-controls": _,
              "aria-label": m,
              onClick: () => N ? $(!1) : O(),
              onKeyDown: (L) => {
                !N && (L.key === "ArrowDown" || L.key === "ArrowUp") && (L.preventDefault(), O());
              },
              children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          N && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": m,
              className: Rt.menu,
              onKeyDown: F,
              ...p,
              children: s.map((L, V) => /* @__PURE__ */ z(
                "button",
                {
                  ref: (ee) => {
                    v.current[V] = ee;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: V === C ? 0 : -1,
                  disabled: L.disabled,
                  className: [
                    Rt.item,
                    V === C ? Rt.active : null,
                    L.danger ? Rt.danger : null,
                    L.disabled ? Rt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => j(V),
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
), $0 = "_wrapper_1ulz6_1", N0 = "_input_1ulz6_8", O0 = "_invalid_1ulz6_38", S0 = "_toggle_1ulz6_45", C0 = "_xs_1ulz6_80", D0 = "_sm_1ulz6_86", E0 = "_md_1ulz6_92", z0 = "_lg_1ulz6_98", M0 = "_xl_1ulz6_104", Zn = {
  wrapper: $0,
  input: N0,
  invalid: O0,
  toggle: S0,
  xs: C0,
  sm: D0,
  md: E0,
  lg: z0,
  xl: M0
}, ew = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    disabled: l,
    showLabel: c = "Show password",
    hideLabel: u = "Hide password",
    ...r
  }, a) {
    const [i, f] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ z("div", { className: Zn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: a,
            type: i ? "text" : "password",
            disabled: l,
            className: [
              Zn.input,
              Zn[t],
              n ? Zn.invalid : null,
              s
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...r
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Zn.toggle,
            "aria-pressed": i,
            "aria-label": i ? u : c,
            disabled: l,
            onClick: () => f((d) => !d),
            children: /* @__PURE__ */ o(ke, { icon: i ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), I0 = "_mask_rcv90_1", A0 = "_invalid_rcv90_31", j0 = "_xs_rcv90_38", T0 = "_sm_rcv90_44", P0 = "_md_rcv90_50", L0 = "_lg_rcv90_56", R0 = "_xl_rcv90_62", Cs = {
  mask: I0,
  invalid: A0,
  xs: j0,
  sm: T0,
  md: P0,
  lg: L0,
  xl: R0
};
function yr(e, t) {
  let n = e.replace(/\D/g, ""), s = "";
  for (const l of t)
    if (l === "#") {
      if (n.length === 0) break;
      s += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      s += l;
    else
      break;
  return s;
}
const tw = Le(function({
  size: t = "md",
  invalid: n = !1,
  mask: s,
  value: l,
  defaultValue: c = "",
  onChange: u,
  className: r,
  onKeyDown: a,
  ...i
}, f) {
  const [d, k] = W(c ?? ""), g = l !== void 0, m = g ? l ?? "" : d, p = (_) => {
    const y = yr(_, s);
    return g || k(y), u?.(y), y;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: m,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const y = _.currentTarget.selectionStart ?? m.length, w = m[y - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            _.preventDefault();
            const v = m.replace(/\D/g, "");
            p(yr(v.slice(0, -1), s));
          }
        }
        a?.(_);
      },
      className: [
        Cs.mask,
        Cs[t],
        n ? Cs.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...i
    }
  );
}), B0 = "_wrapper_12jdf_1", F0 = "_input_12jdf_8", H0 = "_invalid_12jdf_38", q0 = "_button_12jdf_45", K0 = "_up_12jdf_77", W0 = "_down_12jdf_82", U0 = "_xs_12jdf_87", V0 = "_sm_12jdf_93", G0 = "_md_12jdf_99", X0 = "_lg_12jdf_105", Y0 = "_xl_12jdf_111", un = {
  wrapper: B0,
  input: F0,
  invalid: H0,
  button: q0,
  up: K0,
  down: W0,
  xs: U0,
  sm: V0,
  md: G0,
  lg: X0,
  xl: Y0
};
function Ts(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Z0(e) {
  let t = "", n = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? t += s : s === "." && !n ? (n = !0, t += s) : s === "-" && t.length === 0 && (t += s);
  return t;
}
function Vr(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function J0(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Q0(e, t, n, s, l) {
  const u = Ts(e) ?? n ?? 0;
  let r;
  return n === void 0 ? r = u + t * l : t > 0 ? r = n + Math.ceil((u - n + 1e-9) / l) * l : r = n + Math.floor((u - n - 1e-9) / l) * l, Vr(r, n, s);
}
const nw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    disabled: l,
    value: c,
    defaultValue: u,
    onChange: r,
    min: a,
    max: i,
    step: f = 1,
    incrementLabel: d = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: g,
    onKeyDown: m,
    ...p
  }, b) {
    const [h, _] = W(
      u != null ? String(u) : ""
    ), y = c !== void 0, w = y ? c == null ? "" : String(c) : h, v = (E) => {
      y || _(E), r?.(Ts(E));
    }, N = (E) => {
      y || _(String(E)), r?.(E);
    }, $ = (E) => {
      l || N(Q0(w, E, a, i, f));
    }, C = (E) => {
      v(Z0(E.target.value));
    }, M = (E) => {
      E.key === "ArrowUp" ? (E.preventDefault(), $(1)) : E.key === "ArrowDown" && (E.preventDefault(), $(-1)), m?.(E);
    }, D = (E) => {
      const O = Ts(w);
      O === null ? (y || _(""), r?.(null)) : N(Vr(J0(O, a, f), a, i)), g?.(E);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ z("div", { className: un.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: b,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: w,
            disabled: l,
            onChange: C,
            onKeyDown: M,
            onBlur: D,
            className: [
              un.input,
              un[t],
              n ? un.invalid : null,
              s
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...p
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [un.button, un.up].join(" "),
            "aria-label": d,
            disabled: l,
            onClick: () => $(1),
            children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [un.button, un.down].join(" "),
            "aria-label": k,
            disabled: l,
            onClick: () => $(-1),
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
}, eb = [
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
function Ps(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((s) => s + s).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function tb({ r: e, g: t, b: n }) {
  const s = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${s(e)}${s(t)}${s(n)}`;
}
function nb({ r: e, g: t, b: n }) {
  const s = e / 255, l = t / 255, c = n / 255, u = Math.max(s, l, c), r = Math.min(s, l, c), a = u - r;
  let i = 0;
  return a !== 0 && (u === s ? i = (l - c) / a % 6 : u === l ? i = (c - s) / a + 2 : i = (s - l) / a + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: u === 0 ? 0 : a / u,
    v: u
  };
}
function In({ h: e, s: t, v: n }) {
  const s = n * t, l = e / 60, c = s * (1 - Math.abs(l % 2 - 1));
  let u = 0, r = 0, a = 0;
  l < 1 ? (u = s, r = c) : l < 2 ? (u = c, r = s) : l < 3 ? (r = s, a = c) : l < 4 ? (r = c, a = s) : l < 5 ? (u = c, a = s) : (u = s, a = c);
  const i = n - s;
  return {
    r: Math.round((u + i) * 255),
    g: Math.round((r + i) * 255),
    b: Math.round((a + i) * 255),
    a: 1
  };
}
function sb(e) {
  const t = Ps(e);
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
function xr({ r: e, g: t, b: n, a: s }) {
  return s >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(s * 100) / 100})`;
}
const sw = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: s = !0,
  palette: l = eb,
  showButton: c = !1,
  showArrow: u = !0,
  disabled: r = !1,
  invalid: a = !1,
  placeholder: i = "",
  size: f = "md",
  tabIndex: d = 0,
  className: k,
  onChange: g,
  onValueChange: m,
  onOpen: p,
  onClose: b
}) => {
  const h = Q(null), _ = Q(null), y = Q(null), w = Q(null), v = Q(null), N = Pe(), $ = Q(null), C = be(
    () => sb(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, D] = W(!1), [E, O] = W(null), x = E ?? C, S = be(() => nb(x), [x]), j = R(
    (G) => {
      const I = xr(G);
      g?.(I), m?.(I);
    },
    [g, m]
  ), T = R(
    (G, I) => {
      O(G), I && !c && j(G);
    },
    [c, j]
  ), A = R(() => {
    D(!1), O(null), b?.(), _.current?.focus();
  }, [b]), F = R(() => {
    r || (O(C), D(!0), p?.());
  }, [r, C, p]), L = R(() => {
    M ? A() : F();
  }, [M, A, F]), V = R(
    (G, I) => {
      const U = y.current;
      if (!U) return S;
      const Z = U.getBoundingClientRect(), he = Dt((G - Z.left) / Z.width, 0, 1), te = Dt(1 - (I - Z.top) / Z.height, 0, 1);
      return { h: S.h, s: he, v: te };
    },
    [S]
  ), ee = R(
    (G, I) => {
      if (!I) return 0;
      const U = I.getBoundingClientRect();
      return Dt((G - U.left) / U.width, 0, 1);
    },
    []
  ), Y = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "sat";
    const I = V(G.clientX, G.clientY);
    T({ ...In(I), a: x.a }, !0);
  }, me = (G) => {
    if ($.current !== "sat") return;
    G.preventDefault();
    const I = V(G.clientX, G.clientY);
    T({ ...In(I), a: x.a }, !0);
  }, de = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "hue";
    const I = ee(G.clientX, w.current);
    T(
      { ...In({ ...S, h: I * 360 }), a: x.a },
      !0
    );
  }, re = (G) => {
    if ($.current !== "hue") return;
    G.preventDefault();
    const I = ee(G.clientX, w.current);
    T(
      { ...In({ ...S, h: I * 360 }), a: x.a },
      !0
    );
  }, q = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "alpha";
    const I = ee(G.clientX, v.current);
    T({ ...x, a: I }, !0);
  }, ie = (G) => {
    if ($.current !== "alpha") return;
    G.preventDefault();
    const I = ee(G.clientX, v.current);
    T({ ...x, a: I }, !0);
  }, se = () => {
    $.current = null;
  }, ue = R(
    (G, I) => {
      const U = {
        h: S.h,
        s: Dt(S.s + G, 0, 1),
        v: Dt(S.v + I, 0, 1)
      };
      T({ ...In(U), a: x.a }, !0);
    },
    [S, x.a, T]
  ), oe = R(
    (G) => {
      const I = (S.h + G + 360) % 360;
      T({ ...In({ ...S, h: I }), a: x.a }, !0);
    },
    [S, x.a, T]
  ), $e = R(
    (G) => {
      T({ ...x, a: Dt(x.a + G, 0, 1) }, !0);
    },
    [x, T]
  ), Oe = (G) => {
    switch (G.key) {
      case "ArrowLeft":
        G.preventDefault(), ue(-0.05, 0);
        break;
      case "ArrowRight":
        G.preventDefault(), ue(0.05, 0);
        break;
      case "ArrowUp":
        G.preventDefault(), ue(0, 0.05);
        break;
      case "ArrowDown":
        G.preventDefault(), ue(0, -0.05);
        break;
      case "Escape":
        G.preventDefault(), A();
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
        G.preventDefault(), A();
        break;
    }
  }, ve = (G, I) => {
    if (G === "hex") {
      const te = Ps(I);
      te && T({ ...te, a: x.a }, !0);
      return;
    }
    const U = I.replace(/[^\d.]/g, ""), Z = Number.parseFloat(U);
    if (Number.isNaN(Z)) return;
    if (G === "a") {
      const te = U.includes(".") ? Dt(Z, 0, 1) : Dt(Z / 100, 0, 1);
      T({ ...x, a: te }, !0);
      return;
    }
    const he = { r: 255, g: 255, b: 255 };
    T(
      { ...x, [G]: Dt(Z, 0, he[G]) },
      !0
    );
  }, Be = () => {
    E && (j(E), O(null), D(!1), b?.(), _.current?.focus());
  };
  fe(() => {
    if (!M) return;
    const G = (I) => {
      h.current && !h.current.contains(I.target) && A();
    };
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, [M, A]), fe(() => {
    if (!M) return;
    const G = (I) => {
      I.key === "Escape" && A();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [M, A]);
  const we = f === "xs" ? Ne["dx-colorpicker-trigger-xs"] : f === "sm" ? Ne["dx-colorpicker-trigger-sm"] : f === "lg" ? Ne["dx-colorpicker-trigger-lg"] : f === "xl" ? Ne["dx-colorpicker-trigger-xl"] : Ne["dx-colorpicker-trigger"], ot = xr(x), nt = tb(x), Ze = { x: S.s * 100, y: (1 - S.v) * 100 }, Nt = S.h / 360 * 100, bt = x.a * 100, lt = /* @__PURE__ */ z("div", { className: Ne["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Ne["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
        },
        onKeyDown: Oe,
        onPointerDown: Y,
        onPointerMove: me,
        onPointerUp: se,
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
        ref: w,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Ne["dx-hue-picker"],
        onKeyDown: (G) => Ye(G, "hue"),
        onPointerDown: de,
        onPointerMove: re,
        onPointerUp: se,
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
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Ne["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (G) => Ye(G, "alpha"),
        onPointerDown: q,
        onPointerMove: ie,
        onPointerUp: se,
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
            value: x.r,
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
            value: x.g,
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
            value: x.b,
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
            value: Math.round(x.a * 100),
            onChange: (G) => ve("a", G.target.value)
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ o("div", { className: Ne["dx-colorpicker-palette"], children: l.map((G) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Ne["dx-colorpicker-swatch"],
        "aria-label": G,
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        style: { backgroundColor: G },
        onClick: () => {
          const I = Ps(G);
          c ? T({ ...I, a: x.a }, !1) : (O(null), j({ ...I, a: x.a }), D(!1), b?.(), _.current?.focus());
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
        a ? Ne["dx-colorpicker-invalid"] : null,
        k
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
            "aria-controls": N,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: d,
            onClick: L,
            onKeyDown: (G) => {
              G.key === "Escape" && M && (G.preventDefault(), A());
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
              i && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-text"], children: i }),
              u && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        M && /* @__PURE__ */ o(
          "div",
          {
            id: N,
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
}, rb = 42;
function Et(e) {
  return String(e).padStart(2, "0");
}
function $t(e) {
  return `${e.year}-${Et(e.month)}-${Et(e.day)}`;
}
function ob(e, t) {
  const n = $t(e);
  return t ? `${n} ${Et(e.hour)}:${Et(e.minute)}:${Et(e.second)}` : n;
}
function Ls(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), s = Number(t[2]), l = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, u = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (s < 1 || s > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, s - 1, l, c, u, r);
  return a.getFullYear() !== n || a.getMonth() !== s - 1 || a.getDate() !== l ? null : { year: n, month: s, day: l, hour: c, minute: u, second: r };
}
function fn() {
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
function fs(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), s = n.getFullYear(), l = n.getMonth() + 1, c = new Date(s, l, 0).getDate();
  return {
    year: s,
    month: l,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function vr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const kr = {
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
}, lb = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], ab = ["y", "M", "d", "H", "m", "s"];
function _s(e, t, n) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", c = 0;
  for (; c < t.length; ) {
    let u = !1;
    for (const a of lb)
      if (t.startsWith(a, c)) {
        l += kr[a](e, s, n), c += a.length, u = !0;
        break;
      }
    if (u) continue;
    const r = t[c];
    if (ab.includes(r)) {
      l += kr[r](e, s, n), c += 1;
      continue;
    }
    l += r, c += 1;
  }
  return l;
}
const ib = [
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
function cb(e, t) {
  const n = {};
  let s = 0, l = 0;
  for (; l < t.length; ) {
    let r = null;
    for (const a of ib)
      if (t.startsWith(a, l)) {
        r = a;
        break;
      }
    if (r) {
      const a = e.slice(s, s + r.length);
      if (!/^\d+$/.test(a)) return null;
      const i = Number(a);
      switch (r) {
        case "yyyy":
          n.year = i;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + i;
          break;
        case "MM":
        case "M":
          n.month = i;
          break;
        case "dd":
        case "d":
          n.day = i;
          break;
        case "HH":
        case "H":
          n.hour = i;
          break;
        case "mm":
        case "m":
          n.minute = i;
          break;
        case "ss":
        case "s":
          n.second = i;
          break;
      }
      s += r.length, l += r.length;
      continue;
    }
    if (e[s] !== t[l]) return null;
    s += 1, l += 1;
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
  const u = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return u.getFullYear() !== c.year || u.getMonth() !== c.month - 1 || u.getDate() !== c.day ? null : c;
}
function Jn(e, t) {
  const n = Ls(e);
  return n || cb(e, t);
}
function db(e, t, n) {
  return t && $t(e) < $t(t) ? t : n && $t(e) > $t(n) ? n : e;
}
const ub = ["hour", "minute", "second"];
function hs(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const rw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: s,
    defaultValue: l,
    format: c = "yyyy-MM-dd",
    min: u,
    max: r,
    showTime: a = !1,
    showButton: i = !0,
    allowClear: f = !1,
    inline: d = !1,
    disabledDates: k,
    locale: g = "en-US",
    onChange: m,
    onValueChange: p,
    onOpen: b,
    onClose: h,
    disabled: _,
    readOnly: y,
    placeholder: w,
    ariaLabel: v,
    triggerLabel: N,
    clearLabel: $,
    tabIndex: C,
    className: M,
    onBlur: D,
    onKeyDown: E,
    ...O
  }, x) {
    const S = Q(null), j = Q(null), T = Q(null), A = Q(null), F = Pe(), L = s !== void 0, [V, ee] = W(
      () => l != null ? _s(
        Jn(l, c) ?? fn(),
        c,
        g
      ) : ""
    ), [Y, me] = W(!1), [de, re] = W(null), [q, ie] = W(() => {
      const K = s !== void 0 ? s ?? "" : l ?? "";
      if (K) {
        const le = Jn(K, c);
        if (le) return le;
      }
      return fn();
    }), se = be(() => u ? Ls(u) : null, [u]), ue = be(() => r ? Ls(r) : null, [r]), oe = be(
      () => new Set(k ?? []),
      [k]
    ), $e = be(() => {
      const K = L ? s ?? "" : V;
      return K ? Jn(K, c) : null;
    }, [s, V, L, c]), Oe = R(
      (K) => {
        const le = $t(K);
        return !!(oe.has(le) || se && le < $t(se) || ue && le > $t(ue));
      },
      [oe, se, ue]
    ), Ye = R(
      (K) => {
        if (!Oe(K)) return K;
        for (let le = 1; le <= 366; le += 1) {
          const Ie = tn(K, le);
          if (!Oe(Ie)) return Ie;
          const Te = tn(K, -le);
          if (!Oe(Te)) return Te;
        }
        return K;
      },
      [Oe]
    ), ve = R(
      (K) => {
        L || ee(K ? _s(K, c, g) : "");
        const le = K ? ob(K, a) : "";
        m?.(le), p?.(le);
      },
      [L, c, g, a, m, p]
    ), Be = R(
      (K) => {
        j.current = K, typeof x == "function" ? x(K) : x && (x.current = K);
      },
      [x]
    ), we = R(() => {
      me(!1), re(null), h?.(), d || T.current?.focus();
    }, [d, h]), ot = R(() => {
      if (_) return;
      const K = $e ?? fn();
      re(K), ie(Ye(K)), me(!0), b?.();
    }, [_, $e, Ye, b]), nt = R(() => {
      Y ? we() : ot();
    }, [Y, we, ot]), Ze = R((K) => {
      A.current?.querySelector(
        `[data-date="${$t(K)}"]`
      )?.focus();
    }, []), Nt = R(
      (K) => {
        if (Oe(K)) return;
        const le = de ?? $e, Te = {
          ...a ? {
            hour: le?.hour ?? 0,
            minute: le?.minute ?? 0,
            second: le?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: K.year,
          month: K.month,
          day: K.day
        };
        re(Te), a || (ve(Te), we());
      },
      [Oe, de, $e, a, ve, we]
    ), bt = R(
      (K, le) => {
        re((Ie) => {
          const Te = Ie ?? $e ?? fn(), rt = Math.min(K === "hour" ? 23 : 59, Math.max(0, Te[K] + le));
          return { ...Te, [K]: rt };
        });
      },
      [$e]
    ), lt = R(
      (K, le) => {
        const Ie = le.replace(/\D/g, ""), Te = Ie === "" ? 0 : Number(Ie), Ht = K === "hour" ? 23 : 59;
        re((rt) => ({ ...rt ?? $e ?? fn(), [K]: Math.min(Ht, Te) }));
      },
      [$e]
    ), G = R(() => {
      de && (ve(de), we());
    }, [de, ve, we]), I = R(() => {
      if (Y) return;
      const K = Jn(V, c);
      ve(K ? db(K, se, ue) : null);
    }, [Y, V, c, se, ue, ve]), U = (K) => {
      const le = K.target.value;
      L || ee(le), Y && re(null);
    }, Z = (K) => {
      K.key === "Enter" ? (K.preventDefault(), Y ? de && (ve(de), we()) : I()) : K.key === "Escape" ? Y && (K.preventDefault(), we()) : K.key === "ArrowDown" && !Y ? (K.preventDefault(), ot()) : K.key === "Tab" && Y && me(!1), E?.(K);
    }, he = (K) => {
      I(), D?.(K);
    }, te = (K) => {
      let le = null;
      switch (K.key) {
        case "ArrowLeft":
          le = tn(q, -1), K.preventDefault();
          break;
        case "ArrowRight":
          le = tn(q, 1), K.preventDefault();
          break;
        case "ArrowUp":
          le = tn(q, -7), K.preventDefault();
          break;
        case "ArrowDown":
          le = tn(q, 7), K.preventDefault();
          break;
        case "Home":
          le = tn(q, -vr(q)), K.preventDefault();
          break;
        case "End":
          le = tn(q, 6 - vr(q)), K.preventDefault();
          break;
        case "PageUp":
          le = fs(q, K.shiftKey ? -12 : -1), K.preventDefault();
          break;
        case "PageDown":
          le = fs(q, K.shiftKey ? 12 : 1), K.preventDefault();
          break;
        case "Enter":
        case " ":
          K.preventDefault(), Nt(q);
          break;
        case "Escape":
          K.preventDefault(), we();
          break;
        case "Tab":
          me(!1);
          break;
      }
      if (le) {
        const Ie = Ye(le);
        ie(Ie), setTimeout(() => Ze(Ie), 0);
      }
    };
    fe(() => {
      if (!Y) return;
      const K = (le) => {
        S.current && !S.current.contains(le.target) && we();
      };
      return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
    }, [Y, we]), fe(() => {
      if (!Y) return;
      const K = (le) => {
        le.key === "Escape" && we();
      };
      return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
    }, [Y, we]);
    const ye = () => {
      L || ee(""), m?.(""), p?.(""), j.current?.focus();
    }, Ee = Y && de ? _s(de, c, g) : L ? s ? _s(
      Jn(s, c) ?? fn(),
      c,
      g
    ) : "" : V, Fe = L ? !!s : V.length > 0, He = d || Y, st = { year: q.year, month: q.month }, on = new Date(st.year, st.month - 1, 1).getDay(), J = {
      year: st.year,
      month: st.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let K = 0; K < rb; K += 1)
      Se.push(tn(J, K - on));
    const dt = de ? $t(de) : $e ? $t($e) : null, zt = $t(fn()), ut = `${st.year}-${Et(st.month)}`, Ce = be(
      () => new Intl.DateTimeFormat(g, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [g]
    ), je = new Intl.DateTimeFormat(g, {
      month: "long",
      year: "numeric"
    }).format(new Date(st.year, st.month - 1, 1)), Mt = Array.from(
      { length: 7 },
      (K, le) => new Intl.DateTimeFormat(g, { weekday: "short" }).format(
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
                  const K = Ye(fs(q, -1));
                  ie(K), setTimeout(() => Ze(K), 0);
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
                  const K = Ye(fs(q, 1));
                  ie(K), setTimeout(() => Ze(K), 0);
                },
                children: /* @__PURE__ */ o(ke, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ z(
            "div",
            {
              ref: A,
              role: "grid",
              className: De["dx-datepicker-grid"],
              onKeyDown: te,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: De["dx-datepicker-week-row"], children: Mt.map((K) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: De["dx-datepicker-weekday"],
                    children: K
                  },
                  K
                )) }),
                Array.from({ length: 6 }, (K, le) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: De["dx-datepicker-row"],
                    children: Se.slice(le * 7, le * 7 + 7).map((Ie) => {
                      const Te = $t(Ie), Ht = Oe(Ie), rt = Te.startsWith(ut);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Te,
                          tabIndex: Te === $t(q) ? 0 : -1,
                          "aria-selected": Te === dt || void 0,
                          "aria-disabled": Ht || void 0,
                          "aria-label": Ce.format(
                            new Date(Ie.year, Ie.month - 1, Ie.day)
                          ),
                          className: [
                            De["dx-datepicker-day"],
                            rt ? null : De["dx-datepicker-day--outside"],
                            Te === zt ? De["dx-datepicker-day--today"] : null,
                            Te === dt ? De["dx-datepicker-day--selected"] : null,
                            Ht ? De["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Nt(Ie),
                          onFocus: () => ie(Ie),
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
          a && /* @__PURE__ */ z("div", { className: De["dx-datepicker-time"], children: [
            ub.map((K) => /* @__PURE__ */ z("label", { className: De["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: De["dx-datepicker-time-label"], children: hs(K) }),
              /* @__PURE__ */ z("div", { className: De["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: De["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": hs(K),
                    value: Et(
                      (de ?? $e ?? fn())[K]
                    ),
                    onChange: (le) => lt(K, le.target.value),
                    onKeyDown: (le) => {
                      le.key === "ArrowUp" ? (le.preventDefault(), bt(K, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), bt(K, -1)) : le.key === "Enter" && (le.preventDefault(), G());
                    }
                  }
                ),
                /* @__PURE__ */ z("span", { className: De["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${hs(K).toLowerCase()}`,
                      onClick: () => bt(K, 1),
                      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${hs(K).toLowerCase()}`,
                      onClick: () => bt(K, -1),
                      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, K)),
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
        ref: S,
        className: [
          De["dx-datepicker"],
          d ? De["dx-datepicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !d && /* @__PURE__ */ z(tt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Be,
                type: "text",
                autoComplete: "off",
                value: Ee,
                disabled: _,
                readOnly: y,
                placeholder: w,
                tabIndex: C,
                role: i ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": i ? void 0 : "dialog",
                "aria-expanded": i ? void 0 : He,
                "aria-controls": i ? void 0 : F,
                "aria-invalid": n || void 0,
                className: [
                  De["dx-datepicker-input"],
                  yt,
                  n ? De["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: U,
                onKeyDown: Z,
                onBlur: he,
                onClick: () => {
                  i || nt();
                },
                ...O
              }
            ),
            f && !_ && Fe && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  De["dx-datepicker-clear"],
                  i ? De["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: ye,
                children: /* @__PURE__ */ o(ke, { icon: "close", size: 14 })
              }
            ),
            i && /* @__PURE__ */ o(
              "button",
              {
                ref: T,
                type: "button",
                className: [De["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": N ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": F,
                disabled: _,
                onClick: nt,
                children: /* @__PURE__ */ o(ke, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          He && /* @__PURE__ */ o(
            "div",
            {
              id: F,
              role: d ? void 0 : "dialog",
              "aria-label": d ? void 0 : v ?? "Date picker",
              className: d ? void 0 : De["dx-datepicker-popup"],
              children: Je
            }
          )
        ]
      }
    );
  }
), _n = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, ow = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: s = !1,
  ariaLabel: l = "Rating",
  clearLabel: c = "Clear",
  rateLabel: u = "Rate",
  tabIndex: r = 0,
  className: a,
  onChange: i,
  onValueChange: f
}) => {
  const [d, k] = W(e), g = R(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), m = R(
    (_) => {
      i?.(_), f?.(_);
    },
    [i, f]
  ), p = R(
    (_) => {
      n || s || (m(_), k(_));
    },
    [n, s, m]
  ), b = (_) => {
    if (n || s) return;
    const y = d > 0 ? d : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), p(g(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), p(g(y - 1));
        break;
      case "Home":
        _.preventDefault(), p(1);
        break;
      case "End":
        _.preventDefault(), p(t);
        break;
    }
  }, h = Array.from({ length: t }, (_, y) => y + 1);
  return /* @__PURE__ */ z(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        _n["dx-rating"],
        n ? _n["dx-rating-readonly"] : null,
        s ? _n["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !n && !s && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: _n["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? r : -1,
            disabled: s,
            onClick: () => p(0),
            children: /* @__PURE__ */ o(ke, { icon: "block", size: 16 })
          }
        ),
        h.map((_) => {
          const y = _ <= e, w = _ === (e > 0 ? e : d);
          return /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${u} ${_}`,
              tabIndex: w ? r : -1,
              "aria-disabled": s || n || void 0,
              disabled: s || n,
              className: [
                _n["dx-rating-item"],
                y ? _n["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(_),
              onFocus: () => k(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: _n["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(ke, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: _n["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "star", size: 20 }) })
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
const lw = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: s = 0,
  max: l = 100,
  step: c = 1,
  range: u = !1,
  orientation: r = "horizontal",
  disabled: a = !1,
  label: i = "Value",
  minLabel: f = "Min",
  maxLabel: d = "Max",
  tabIndex: k = 0,
  className: g,
  onChange: m,
  onInput: p,
  onValueChange: b,
  onInputChange: h
}) => {
  const _ = Q(null), y = Q(
    null
  ), [w, v] = W(null), N = w ?? e, $ = be(
    () => Vt(N, s, l),
    [N, s, l]
  ), C = be(
    () => Vt(u ? t : $, s, l),
    [u, t, $, s, l]
  ), M = be(
    () => Vt(u ? Math.max(n, C) : $, s, l),
    [u, n, C, $, s, l]
  ), D = R(
    (q) => {
      const ie = l - s;
      return ie <= 0 ? 0 : (Vt(q, s, l) - s) / ie * 100;
    },
    [s, l]
  ), E = R(
    (q, ie) => {
      const se = _.current;
      if (!se) return s;
      const ue = se.getBoundingClientRect();
      let oe;
      r === "vertical" ? oe = 1 - (ie - ue.top) / ue.height : oe = (q - ue.left) / ue.width;
      const $e = s + Vt(oe, 0, 1) * (l - s);
      return c > 0 ? Vt(Math.round($e / c) * c, s, l) : Vt($e, s, l);
    },
    [s, l, c, r]
  ), O = R(
    (q) => {
      typeof q == "number" && v(q), m?.(q), b?.(q);
    },
    [m, b]
  ), x = R(
    (q) => {
      typeof q == "number" && v(q), p?.(q), h?.(q);
    },
    [p, h]
  ), S = R(
    (q, ie, se) => {
      const ue = E(ie, se);
      let oe;
      u ? q === "min" ? oe = { min: Math.min(ue, M), max: M } : oe = { min: C, max: Math.max(ue, C) } : oe = ue, x(oe), y.current === null && O(oe);
    },
    [u, E, C, M, x, O]
  ), j = R(
    (q, ie) => {
      const se = (c > 0 ? c : 1) * ie;
      let ue;
      u ? q === "min" ? ue = {
        min: Vt(C + se, s, M),
        max: M
      } : ue = {
        min: C,
        max: Vt(M + se, C, l)
      } : ue = Vt($ + se, s, l), O(ue);
    },
    [u, c, s, l, C, M, $, O]
  ), T = (q, ie) => {
    if (!a)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), j(q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), j(q, 1);
          break;
        case "Home":
          ie.preventDefault(), O(u ? q === "min" ? { min: s, max: M } : { min: C, max: C } : s);
          break;
        case "End":
          ie.preventDefault(), O(u ? q === "min" ? { min: M, max: M } : { min: C, max: l } : l);
          break;
      }
  }, A = (q, ie) => {
    a || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, F = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (q.preventDefault(), S(y.current.key, q.clientX, q.clientY));
  }, L = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (y.current = null, q.preventDefault(), O(u ? { min: C, max: M } : $));
  }, [V, ee] = W(null), Y = D(C), me = D(M), de = u ? Y : 0, re = me;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        kn["dx-slider"],
        r === "vertical" ? kn["dx-slider-vertical"] : null,
        a ? kn["dx-slider-disabled"] : null,
        g
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ z("div", { ref: _, className: kn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: kn["dx-slider-range"],
            style: r === "vertical" ? { bottom: `${de}%`, height: `${re - de}%` } : { left: `${de}%`, width: `${re - de}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(C),
            "aria-orientation": r,
            "aria-label": u ? f : i,
            "aria-disabled": a || void 0,
            tabIndex: a || u && V === "max" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${Y}% - 8px)` } : { left: `calc(${Y}% - 8px)` },
            onKeyDown: (q) => T("min", q),
            onPointerDown: (q) => A("min", q),
            onPointerMove: F,
            onPointerUp: L,
            onFocus: () => ee("min")
          }
        ),
        u && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(M),
            "aria-orientation": r,
            "aria-label": d,
            "aria-disabled": a || void 0,
            tabIndex: a || V === "min" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${me}% - 8px)` } : { left: `calc(${me}% - 8px)` },
            onKeyDown: (q) => T("max", q),
            onPointerDown: (q) => A("max", q),
            onPointerMove: F,
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
}, fb = "-10675199.02:48:05.4775808", _b = "10675199.02:48:05.4775808", sn = 86400, rn = 3600, Bt = 60, Ds = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, wr = {
  days: sn,
  hours: rn,
  minutes: Bt,
  seconds: 1
}, hb = {
  day: sn,
  hour: rn,
  minute: Bt,
  second: 1
};
function An(e) {
  return String(e).padStart(2, "0");
}
function rs(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, s = t;
  s.startsWith("-") ? (n = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (l) {
    if (!l.slice(1).some((d) => d != null)) return null;
    const r = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, i = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (r * sn + a * rn + i * Bt + f);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    s
  );
  if (c) {
    const u = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), a = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, f = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || a > 59 || i > 59 ? null : n * (u * sn + r * rn + a * Bt + i + f);
  }
  return null;
}
function pb(e) {
  return e.days * sn + e.hours * rn + e.minutes * Bt + e.seconds;
}
function $r(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / sn);
  t %= sn;
  const s = Math.floor(t / rn);
  t %= rn;
  const l = Math.floor(t / Bt), c = Math.round(t % Bt * 1e9) / 1e9;
  return { days: n, hours: s, minutes: l, seconds: c };
}
function Rs(e, t) {
  const n = e < 0;
  let s = Math.abs(e);
  t === "minute" ? s = Math.round(s / Bt) * Bt : t === "hour" ? s = Math.round(s / rn) * rn : t === "day" && (s = Math.round(s / sn) * sn);
  let l = Math.round(s % Bt);
  const c = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const u = Math.floor(s / Bt) + c, r = u % 60, a = Math.floor(u / 60), i = a % 24, f = Math.floor(a / 24), d = n ? "-" : "", k = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${d}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${k}${An(i)}`;
    case "minute":
      return `${d}${k}${An(i)}:${An(r)}`;
    default:
      return `${d}${k}${An(i)}:${An(r)}:${An(l)}`;
  }
}
function Nr(e, t = "second") {
  const n = rs(e);
  return n === null ? "" : Rs(n, t);
}
function Es(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const aw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: s,
    defaultValue: l,
    min: c = fb,
    max: u = _b,
    step: r = "1",
    precision: a = "second",
    showDays: i = !0,
    showHours: f = !0,
    showMinutes: d = !0,
    showSeconds: k = !0,
    allowClear: g = !1,
    inline: m = !1,
    onChange: p,
    onValueChange: b,
    onOpen: h,
    onClose: _,
    disabled: y,
    placeholder: w,
    ariaLabel: v,
    triggerLabel: N,
    clearLabel: $,
    tabIndex: C,
    className: M,
    onBlur: D,
    onKeyDown: E,
    ...O
  }, x) {
    const S = Q(null), j = Q(null), T = Q(null), A = Pe(), F = s !== void 0, [L, V] = W(
      () => l != null ? Nr(l, a) : ""
    ), [ee, Y] = W(!1), [me, de] = W(null), [re, q] = W(null), ie = be(
      () => rs(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), se = be(
      () => rs(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), ue = be(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), oe = be(() => {
      const J = F ? s ?? "" : L;
      return J ? rs(J) : null;
    }, [s, L, F]), $e = R(
      (J) => {
        const Se = J === null ? "" : Rs(J, a);
        F || V(Se), p?.(Se), b?.(Se);
      },
      [F, a, p, b]
    ), Oe = R(
      (J) => {
        J && me !== null && $e(me), Y(!1), de(null), q(null), _?.(), m || T.current?.focus();
      },
      [m, me, $e, _]
    ), Ye = R(() => {
      y || (de(oe ?? 0), Y(!0), h?.());
    }, [y, oe, h]), ve = R(() => {
      ee ? Oe(!1) : Ye();
    }, [ee, Oe, Ye]), Be = R(
      (J, Se) => {
        de((dt) => {
          const ut = (dt ?? oe ?? 0) + Se * ue * wr[J];
          return Es(ut, ie, se);
        });
      },
      [oe, ue, ie, se]
    ), we = R(
      (J) => {
        const Se = re?.[J];
        if (Se == null) return;
        const dt = Number.parseFloat(Se), zt = Number.isNaN(dt) ? 0 : dt;
        de((ut) => {
          const Ce = ut ?? oe ?? 0, je = $r(Ce);
          je[J] = zt;
          const yt = (Ce < 0 ? -1 : 1) * pb(je);
          return Es(yt, ie, se);
        }), q(null);
      },
      [re, oe, ie, se]
    ), ot = (J, Se) => {
      q((dt) => ({ ...dt ?? {}, [J]: Se }));
    }, nt = (J, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), we(J), Be(J, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), we(J), Be(J, -1);
          break;
        case "Home":
          Se.preventDefault(), we(J), de(ie);
          break;
        case "End":
          Se.preventDefault(), we(J), de(se);
          break;
        case "Enter":
          Se.preventDefault(), we(J), Oe(!0);
          break;
      }
    }, Ze = R(() => {
      if (ee) return;
      const J = rs(L);
      $e(J !== null ? Es(J, ie, se) : null);
    }, [ee, L, ie, se, $e]), Nt = (J) => {
      F || V(J.target.value);
    }, bt = (J) => {
      J.key === "Enter" ? (J.preventDefault(), ee ? Oe(!0) : Ze()) : J.key === "Escape" && ee ? (J.preventDefault(), Oe(!1)) : J.key === "ArrowDown" && !ee ? (J.preventDefault(), Ye()) : J.key === "Tab" && ee && Y(!1), E?.(J);
    }, lt = (J) => {
      Ze(), D?.(J);
    }, G = () => {
      F || V(""), p?.(""), b?.(""), j.current?.focus();
    };
    fe(() => {
      if (!ee) return;
      const J = (Se) => {
        S.current && !S.current.contains(Se.target) && Oe(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [ee, Oe]), fe(() => {
      if (!ee) return;
      const J = (Se) => {
        Se.key === "Escape" && Oe(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [ee, Oe]), fe(() => {
      if (m && me !== null) {
        const J = oe;
        (J === null || Math.abs(me - J) > 1e-9) && $e(me);
      }
    }, [m, me, oe, $e]);
    const I = R(
      (J) => {
        j.current = J, typeof x == "function" ? x(J) : x && (x.current = J);
      },
      [x]
    ), U = F ? s ? Nr(s, a) : "" : L, Z = F ? !!s : L.length > 0, he = m || ee, te = me ?? oe ?? 0, ye = $r(te), Ee = hb[a], He = ["days", "hours", "minutes", "seconds"].filter(
      (J) => wr[J] >= Ee && (J === "days" ? i : J === "hours" ? f : J === "minutes" ? d : k)
    ), st = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], on = /* @__PURE__ */ z("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: Rs(te, a) }),
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-units"], children: He.map((J) => /* @__PURE__ */ z("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: qe["dx-timespanpicker-unit-label"], children: Ds[J] }),
        /* @__PURE__ */ z("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: re?.[J] ?? String(ye[J]),
              onChange: (Se) => ot(J, Se.target.value),
              onKeyDown: (Se) => nt(J, Se),
              onBlur: () => we(J)
            }
          ),
          /* @__PURE__ */ z("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ds[J].toLowerCase()}`,
                onClick: () => {
                  we(J), Be(J, 1);
                },
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Ds[J].toLowerCase()}`,
                onClick: () => {
                  we(J), Be(J, -1);
                },
                children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, J)) }),
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
        ref: S,
        className: [
          qe["dx-timespanpicker"],
          m ? qe["dx-timespanpicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !m && /* @__PURE__ */ z(tt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: I,
                type: "text",
                autoComplete: "off",
                value: U,
                disabled: y,
                placeholder: w,
                tabIndex: C,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": A,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  st,
                  n ? qe["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Nt,
                onKeyDown: bt,
                onBlur: lt,
                ...O
              }
            ),
            g && !y && Z && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
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
                "aria-label": N ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": A,
                disabled: y,
                onClick: ve,
                children: /* @__PURE__ */ o(ke, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          he && /* @__PURE__ */ o(
            "div",
            {
              id: A,
              role: m ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: m ? void 0 : qe["dx-timespanpicker-popup"],
              children: on
            }
          )
        ]
      }
    );
  }
), mb = "_wrapper_ou9x5_1", gb = "_cells_ou9x5_8", bb = "_cell_ou9x5_8", yb = "_invalid_ou9x5_63", xb = "_live_ou9x5_73", wn = {
  wrapper: mb,
  cells: gb,
  cell: bb,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: yb,
  live: xb
};
function Or(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const iw = Le(
  function({
    length: t = 6,
    value: n,
    defaultValue: s,
    onChange: l,
    invalid: c = !1,
    size: u = "md",
    autoFocus: r = !1,
    disabled: a = !1,
    label: i = "Security code",
    liveAnnounce: f = !0,
    className: d,
    "aria-label": k
  }, g) {
    const m = Pe(), p = n !== void 0, [b, h] = W(Or(s).join("")), _ = p ? Or(n).join("") : b, y = Array.from({ length: t }, (O, x) => _[x] ?? ""), w = Q([]), [v, N] = W(""), $ = (O) => {
      p || h(O), l?.(O);
    }, C = (O) => {
      const x = w.current[O];
      x && !x.disabled && (x.focus(), x.select());
    }, M = (O, x) => {
      const S = x.replace(/\D/g, "").slice(-1), j = _.split("");
      if (S) {
        j[O] = S;
        const T = j.join("").slice(0, t);
        $(T), T.length < t ? C(O + 1) : f && N("Code complete");
      }
    }, D = (O, x) => {
      if (x.key === "Backspace") {
        if (x.preventDefault(), _[O]) {
          const S = _.split("");
          S[O] = "", $(S.join(""));
        } else if (O > 0) {
          const S = _.split("");
          S[O - 1] = "", $(S.join("")), C(O - 1);
        }
      } else x.key === "ArrowLeft" && O > 0 ? (x.preventDefault(), C(O - 1)) : x.key === "ArrowRight" && O < t - 1 ? (x.preventDefault(), C(O + 1)) : x.key === "Home" ? (x.preventDefault(), C(0)) : x.key === "End" && (x.preventDefault(), C(t - 1));
    }, E = (O, x) => {
      x.preventDefault();
      const S = x.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const j = _.split("");
      let T = 0;
      for (let F = 0; F < S.length && O + F < t; F++)
        j[O + F] = S[F] ?? "", T++;
      const A = j.join("");
      $(A), A.length >= t ? f && N("Code complete") : C(O + T);
    };
    return /* @__PURE__ */ z(
      "div",
      {
        className: [wn.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [wn.cells, wn[u]].join(" "), children: y.map((O, x) => /* @__PURE__ */ o(
            "input",
            {
              ref: (S) => {
                w.current[x] = S, x === 0 && g && (typeof g == "function" ? g(S) : g.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: O,
              disabled: a,
              "aria-label": `Digit ${x + 1} of ${t}`,
              "aria-invalid": c && O !== "" ? !0 : void 0,
              autoFocus: r && x === 0,
              className: [
                wn.cell,
                wn[`cell-${u}`],
                c ? wn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => M(x, S.target.value),
              onKeyDown: (S) => D(x, S),
              onPaste: (S) => E(x, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                f && N("");
              }
            },
            x
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${m}-live`,
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
), vb = "_wrapper_6lcd5_1", kb = "_header_6lcd5_7", wb = "_label_6lcd5_15", $b = "_clear_6lcd5_22", Nb = "_canvas_6lcd5_53", Ob = "_disabled_6lcd5_69", jn = {
  wrapper: vb,
  header: kb,
  label: wb,
  clear: $b,
  canvas: Nb,
  disabled: Ob
}, cw = Le(
  function({
    value: t,
    defaultValue: n,
    onChange: s,
    penColor: l = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: r = "Signature",
    width: a,
    height: i = 140,
    disabled: f = !1,
    className: d
  }, k) {
    const g = Q(null), m = Q(!1), p = Q(!1), b = Q({ x: 0, y: 0 });
    fe(() => {
      const $ = g.current;
      if (!$) return;
      const C = window.devicePixelRatio || 1, M = Math.round((a ?? $.clientWidth) * C), D = Math.round(i * C);
      ($.width !== M || $.height !== D) && ($.width = M, $.height = D);
      const E = $.getContext("2d");
      if (!E) return;
      E.setTransform(C, 0, 0, C, 0, 0), E.lineWidth = c, E.strokeStyle = l, E.lineCap = "round", E.lineJoin = "round";
      const O = t ?? n;
      if (O) {
        const x = new Image();
        x.onload = () => {
          E.drawImage(x, 0, 0, $.clientWidth, i);
        }, x.src = O;
      }
    }, [t, n, l, c, a, i]);
    const h = () => {
      const $ = g.current;
      if (!$) return;
      const C = $.toDataURL("image/png");
      s?.(C);
    }, _ = () => {
      const $ = g.current;
      if (!$) return;
      const C = $.getContext("2d");
      C && C.clearRect(0, 0, $.width, $.height), s?.("");
    };
    qs(k, () => ({
      clear: _,
      toDataURL: ($ = "image/png", C) => g.current?.toDataURL($, C) ?? ""
    }));
    const y = ($) => {
      const C = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - C.left, y: $.clientY - C.top };
    }, w = ($) => {
      f || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), m.current = !0, p.current = !1, b.current = y($));
    }, v = ($) => {
      if (!m.current) return;
      $.preventDefault();
      const C = $.currentTarget.getContext("2d");
      if (!C) return;
      const M = y($);
      C.beginPath(), C.moveTo(b.current.x, b.current.y), C.lineTo(M.x, M.y), C.stroke(), b.current = M, p.current = !0;
    }, N = ($) => {
      m.current && ($.preventDefault(), m.current = !1, p.current && h());
    };
    return /* @__PURE__ */ z(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          jn.wrapper,
          d,
          f ? jn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ z("div", { className: jn.header, children: [
            /* @__PURE__ */ o("span", { className: jn.label, children: r }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: jn.clear,
                onClick: _,
                disabled: f,
                children: u
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: g,
              role: "img",
              "aria-label": r,
              "aria-disabled": f || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${i}px`
              },
              className: jn.canvas,
              onPointerDown: w,
              onPointerMove: v,
              onPointerUp: N,
              onPointerCancel: N
            }
          )
        ]
      }
    );
  }
), Sb = "_wrapper_dsvd2_1", Cb = "_trigger_dsvd2_7", Db = "_list_dsvd2_35", Eb = "_row_dsvd2_44", zb = "_name_dsvd2_59", Mb = "_size_dsvd2_68", Ib = "_progress_dsvd2_74", Ab = "_fill_dsvd2_82", jb = "_status_dsvd2_99", Tb = "_remove_dsvd2_106", Gt = {
  wrapper: Sb,
  trigger: Cb,
  list: Db,
  row: Eb,
  name: zb,
  size: Mb,
  progress: Ib,
  fill: Ab,
  status: jb,
  remove: Tb
};
function Sr(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const dw = Le(function({
  url: t,
  multiple: n = !1,
  parameterName: s = "files",
  auto: l = !0,
  headers: c,
  accept: u,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: i = "Upload",
  children: f,
  onProgress: d,
  onComplete: k,
  onError: g
}, m) {
  const p = Q(null), [b, h] = W([]), _ = Q(/* @__PURE__ */ new Map()), y = (C, M) => {
    h(
      (D) => D.map((E) => E.file.name === C ? { ...E, ...M } : E)
    );
  }, w = (C) => {
    if (!t) return;
    const M = new XMLHttpRequest();
    _.current.set(C.file.name, M);
    const D = new FormData();
    if (D.append(s, C.file), M.upload.addEventListener("progress", (E) => {
      if (!E.lengthComputable) return;
      const O = Math.round(E.loaded / E.total * 100);
      y(C.file.name, { state: "uploading", progress: O }), d?.(C.file.name, O);
    }), M.addEventListener("load", () => {
      M.status >= 200 && M.status < 300 ? (y(C.file.name, { state: "complete", progress: 100 }), k?.(C.file.name)) : (y(C.file.name, {
        state: "error",
        message: `HTTP ${M.status}`
      }), g?.(C.file.name, `HTTP ${M.status}`));
    }), M.addEventListener("error", () => {
      y(C.file.name, { state: "error", message: "Network error" }), g?.(C.file.name, "Network error");
    }), c)
      for (const [E, O] of Object.entries(c))
        M.setRequestHeader(E, O);
    M.open("POST", t), M.send(D), y(C.file.name, { state: "uploading", progress: 0 });
  }, v = (C) => {
    if (!C) return;
    const M = [...C], D = [];
    let E = Math.max(0, r - b.length);
    for (const x of M) {
      if (a != null && x.size > a) {
        g?.(
          x.name,
          `File too large (maximum ${Sr(a)})`
        );
        continue;
      }
      if (E <= 0) {
        g?.(x.name, `Too many files (maximum ${r})`);
        continue;
      }
      E -= 1, D.push(x);
    }
    const O = D.map((x) => ({
      file: x,
      state: "pending",
      progress: 0
    }));
    h((x) => [...x, ...O]), p.current && (p.current.value = ""), l && O.forEach(w);
  }, N = (C) => {
    _.current.get(C)?.abort(), _.current.delete(C), h((D) => D.filter((E) => E.file.name !== C));
  }, $ = f ?? /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      className: Gt.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ o(ke, { icon: "upload", size: 14 }),
        i
      ]
    }
  );
  return qs(m, () => ({
    open: () => p.current?.click(),
    upload: () => b.forEach((C) => C.state === "pending" ? w(C) : null)
  })), /* @__PURE__ */ z("div", { className: Gt.wrapper, children: [
    $,
    /* @__PURE__ */ o(
      "input",
      {
        ref: p,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: u,
        "data-testid": "upload-input",
        onChange: (C) => v(C.target.files)
      }
    ),
    !f && b.length > 0 && /* @__PURE__ */ o("ul", { className: Gt.list, children: b.map(({ file: C, state: M, progress: D, message: E }) => /* @__PURE__ */ z(
      "li",
      {
        className: Gt.row,
        "data-state": M,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Gt.name, children: C.name }),
          /* @__PURE__ */ o("span", { className: Gt.size, children: Sr(C.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Gt.progress,
              role: "progressbar",
              "aria-label": `${C.name} upload progress`,
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
              "aria-label": `Remove ${C.name}`,
              onClick: () => N(C.name),
              children: /* @__PURE__ */ o(ke, { icon: "close", size: 14 })
            }
          )
        ]
      },
      C.name
    )) })
  ] });
}), Pb = "_zone_nl0bz_1", Lb = "_dragging_nl0bz_23", Rb = "_caption_nl0bz_28", Bb = "_browse_nl0bz_40", Fb = "_disabled_nl0bz_67", Qn = {
  zone: Pb,
  dragging: Lb,
  caption: Rb,
  browse: Bb,
  disabled: Fb
};
function Hb(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith("."))
      return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const s = n.slice(0, -1);
      return e.type.startsWith(s);
    }
    return e.type === n;
  }) : !0;
}
const uw = Le(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: s,
    label: l = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: u = "Browse",
    disabled: r = !1,
    className: a
  }, i) {
    const f = Q(null), [d, k] = W(!1), g = (_) => {
      if (!_ || _.length === 0) return;
      const y = [..._].filter((w) => Hb(w, t ?? ""));
      y.length !== 0 && s?.(y);
    }, m = (_) => {
      r || (_.preventDefault(), k(!0));
    }, p = (_) => {
      r || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", k(!0));
    }, b = (_) => {
      r || _.currentTarget.contains(_.relatedTarget) || k(!1);
    }, h = (_) => {
      r || (_.preventDefault(), k(!1), g(_.dataTransfer.files));
    };
    return qs(i, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ z(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": r || void 0,
        className: [
          Qn.zone,
          d ? Qn.dragging : null,
          r ? Qn.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: m,
        onDragOver: p,
        onDragLeave: b,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Qn.caption, children: d ? c : l }),
          !r && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Qn.browse,
              onClick: () => f.current?.click(),
              children: u
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
                g(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), qb = "_root_1a92d_1", Kb = "_menubar_1a92d_5", Wb = "_horizontal_1a92d_15", Ub = "_vertical_1a92d_20", Vb = "_itemWrapper_1a92d_25", Gb = "_item_1a92d_25", Xb = "_disabled_1a92d_61", Yb = "_icon_1a92d_68", Zb = "_text_1a92d_75", Jb = "_caret_1a92d_79", Qb = "_hasChildren_1a92d_85", ey = "_submenu_1a92d_94", ty = "_submenuItem_1a92d_118", ny = "_flyout_1a92d_155", sy = "_hamburger_1a92d_175", ry = "_responsive_1a92d_198", oy = "_mobileOpen_1a92d_207", Ue = {
  root: qb,
  menubar: Kb,
  horizontal: Wb,
  vertical: Ub,
  itemWrapper: Vb,
  item: Gb,
  disabled: Xb,
  icon: Yb,
  text: Zb,
  caret: Jb,
  hasChildren: Qb,
  submenu: ey,
  submenuItem: ty,
  flyout: ny,
  hamburger: sy,
  responsive: ry,
  mobileOpen: oy
}, vs = Ln(null);
function ly(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), s = e.replace(/^#?\/?/, "");
  return t === "prefix" ? s === "" ? !1 : n === s || n.startsWith(`${s}/`) : n === s;
}
function ay(e, t, n, s, l) {
  const [c, u] = W(n), r = e ? t ?? !1 : c, a = R(
    (i) => {
      e || u(i), s?.(i);
    },
    [e, s]
  );
  return fe(() => {
    l > 0 && a(!1);
  }, [l]), [r, a];
}
function iy({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: s
}) {
  return n ? /* @__PURE__ */ o("span", { className: Ue.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: s ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: Ue.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(ke, { icon: e, size: 16 })
    }
  ) : null;
}
function Gr(e) {
  return gt(e) && e.type === Xr;
}
function Vs({
  itemKey: e,
  props: t
}) {
  const n = hn(vs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: s, value: l, path: c, disabled: u, template: r } = t, a = be(
    () => ls.toArray(t.children).filter(gt),
    [t.children]
  ), i = a.length > 0, f = !!u, d = t.open !== void 0, [k, g] = ay(
    d,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), m = n.level === 0, p = Q(0), h = (m && !d ? n.openKey === e : null) ?? k, _ = R(
    (T) => {
      m && !d ? n.setOpenKey(T ? e : null) : (g(T), m && n.setOpenKey(null));
    },
    [m, d, n, e, g]
  ), [, y] = W(0);
  fe(() => {
    if (!c) return;
    const T = () => y((A) => A + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [c]);
  const w = c && !i ? ly(c, t.match) : !1, v = R(
    (T) => {
      if (f) {
        T.preventDefault();
        return;
      }
      const A = { text: s, value: l, path: c };
      [n.emit(A), t.onClick?.(A)].includes(!1) && T.preventDefault(), n.closeAll();
    },
    [f, s, l, c, n, t]
  ), N = R(() => {
    if (!f) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [f, h, _, n.clickToOpen]), $ = R(() => {
    !i || f || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [i, f, n.clickToOpen, _]), C = R(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), M = `${n.baseId}-submenu-${e}`, [D, E] = W(null);
  fe(() => {
    n.closeSignal > 0 && E(null);
  }, [n.closeSignal]);
  const O = be(
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
  ), x = i ? /* @__PURE__ */ o("span", { className: Ue.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    ke,
    {
      icon: n.flyout && !m ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, S = r ?? /* @__PURE__ */ z(tt, { children: [
    /* @__PURE__ */ o(
      iy,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: Ue.text, children: s }),
    x
  ] });
  if (i) {
    let T = function(A) {
      const F = Array.from(A.currentTarget.children).map((ee) => ee.querySelector('[role="menuitem"]')).filter(
        (ee) => ee != null && ee.getAttribute("aria-disabled") !== "true" && !ee.hasAttribute("disabled")
      ), L = document.activeElement, V = L ? F.indexOf(L) : -1;
      A.key === "ArrowDown" ? (A.preventDefault(), A.stopPropagation(), (V === -1 ? F[0] : F[(V + 1) % F.length])?.focus()) : A.key === "ArrowUp" ? (A.preventDefault(), A.stopPropagation(), (V === -1 ? F[F.length - 1] : F[(V - 1 + F.length) % F.length])?.focus()) : A.key === "ArrowRight" ? L?.getAttribute("aria-haspopup") === "menu" && (A.preventDefault(), A.stopPropagation(), L.getAttribute("aria-expanded") !== "true" && L.click(), document.getElementById(
        L.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (A.key === "ArrowLeft" || A.key === "Escape") && (A.preventDefault(), A.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ z(
      "div",
      {
        className: Ue.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : $,
        onMouseLeave: n.clickToOpen ? void 0 : C,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": m ? "true" : void 0,
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
              onClick: N,
              children: S
            }
          ),
          h ? /* @__PURE__ */ o(
            "div",
            {
              id: M,
              role: "menu",
              "aria-label": s,
              className: [
                Ue.submenu,
                n.flyout && !m ? Ue.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: T,
              children: /* @__PURE__ */ o(vs.Provider, { value: O, children: a.map(
                (A, F) => Gr(A) ? /* @__PURE__ */ o(
                  Vs,
                  {
                    itemKey: `${e}-${F}`,
                    props: A.props
                  },
                  `${e}-${F}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Hs, { children: A }, `${e}-custom-${F}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const j = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": w ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Ue.submenuItem, f ? Ue.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return c && !f ? /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: c, target: t.target, ...j, children: S }) }) : /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...j, children: S }) });
}
function Xr(e) {
  if (!hn(vs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Vs, { itemKey: e.text, props: e });
}
function cy({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: s = !0,
  isContextMenu: l = !1,
  onClick: c,
  onClose: u,
  ariaLabel: r = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: i,
  ...f
}) {
  const d = Pe(), k = Q(null), g = Q(null), [m, p] = W(null), [b, h] = W(0), [_, y] = W(!1), w = Q(null), v = R(
    (D) => c?.(D),
    [c]
  ), N = R(() => {
    p(null), h((D) => D + 1);
  }, []);
  fe(() => {
    if (m == null) return;
    const D = (E) => {
      k.current && !k.current.contains(E.target) && N();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [m, N]), fe(() => {
    w.current != null && m === w.current && (document.getElementById(`${d}-submenu-${m}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), w.current = null);
  }, [m, d]);
  const $ = be(
    () => ({
      baseId: d,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: b,
      emit: v,
      closeAll: N,
      openKey: m,
      setOpenKey: p
    }),
    [d, n, t, b, v, N, m]
  ), C = be(
    () => ls.toArray(e).filter(gt),
    [e]
  ), M = (D) => {
    const E = g.current;
    if (!E) return;
    const O = Array.from(E.children).map((j) => j.querySelector('[role="menuitem"]')).filter(
      (j) => j != null && !j.hasAttribute("disabled") && j.getAttribute("aria-disabled") !== "true"
    );
    if (m != null) {
      const j = document.getElementById(`${d}-submenu-${m}`);
      if (j) {
        const T = Array.from(
          j.querySelectorAll('[role="menuitem"]')
        ).filter(
          (L) => L.getAttribute("aria-disabled") !== "true" && !L.hasAttribute("disabled")
        ), A = document.activeElement, F = A ? T.indexOf(A) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (F === -1 ? T[0] : T[(F + 1) % T.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (F === -1 ? T[T.length - 1] : T[(F - 1 + T.length) % T.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), N(), u?.(), E.querySelector(`[data-index="${m}"]`)?.focus();
          return;
        }
        if (D.key === "Enter" || D.key === " ") return;
      }
      if (D.key === "Escape") {
        D.preventDefault(), N(), u?.();
        return;
      }
    }
    const x = document.activeElement, S = x ? O.indexOf(x) : -1;
    if (D.key === "ArrowRight") {
      if (D.preventDefault(), O.length === 0) return;
      O[S === -1 ? 0 : (S + 1) % O.length]?.focus();
      return;
    }
    if (D.key === "ArrowLeft") {
      if (D.preventDefault(), O.length === 0) return;
      O[S === -1 ? O.length - 1 : (S - 1 + O.length) % O.length]?.focus();
      return;
    }
    if (D.key === "ArrowDown") {
      if (S >= 0) {
        const j = x?.getAttribute("data-index");
        if (j == null) return;
        E.querySelector(
          `[data-index="${j}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (D.preventDefault(), w.current = j, p(j));
      }
      return;
    }
    if (D.key === "Home") {
      D.preventDefault(), O[0]?.focus();
      return;
    }
    if (D.key === "End") {
      D.preventDefault(), O[O.length - 1]?.focus();
      return;
    }
    if (D.key.length === 1 && !D.ctrlKey && !D.metaKey) {
      const j = O.map((A) => A.textContent ?? ""), T = S === -1 ? 0 : (S + 1) % O.length;
      for (let A = 0; A < O.length; A++) {
        const F = (T + A) % O.length;
        if (j[F]?.toLowerCase().startsWith(D.key.toLowerCase())) {
          D.preventDefault(), O[F]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ z(
    "nav",
    {
      ref: k,
      "aria-label": r,
      className: [
        Ue.root,
        l ? Ue.vertical : Ue.horizontal,
        s ? Ue.responsive : null,
        s && _ ? Ue.mobileOpen : null,
        n ? Ue.flyoutRoot : null,
        i
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        s ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": _,
            className: Ue.hamburger,
            onClick: () => y((D) => !D),
            children: /* @__PURE__ */ o(ke, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: g,
            role: l ? "menu" : "menubar",
            "aria-label": r,
            className: Ue.menubar,
            onKeyDown: M,
            children: /* @__PURE__ */ o(vs.Provider, { value: $, children: C.map(
              (D, E) => Gr(D) ? /* @__PURE__ */ o(
                Vs,
                {
                  itemKey: String(E),
                  props: D.props
                },
                `top-${E}`
              ) : /* @__PURE__ */ o(Hs, { children: D }, `top-custom-${E}`)
            ) })
          }
        )
      ]
    }
  );
}
const dy = "_popup_uiejp_1", uy = "_menu_uiejp_22", Bs = {
  popup: dy,
  menu: uy
}, Yr = Ln(null);
function fw() {
  const e = hn(Yr);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Zr(e) {
  return e.map((t, n) => {
    const { children: s, ...l } = t;
    return /* @__PURE__ */ o(Xr, { ...l, children: s ? Zr(s) : void 0 }, `${t.text}-${n}`);
  });
}
function fy({ state: e, onClose: t }) {
  const n = Q(null), [s, l] = W({ left: e.x, top: e.y });
  zs(() => {
    const u = n.current;
    if (!u) return;
    const r = u.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - r.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - r.height))
    });
  }, [e.x, e.y, e.options]), fe(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const c = R(
    (u) => {
      e.options.onClick?.(u);
    },
    [e.options]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: Bs.popup,
      style: { left: s.left, top: s.top },
      children: /* @__PURE__ */ o("div", { className: Bs.menu, children: e.options.content ?? /* @__PURE__ */ o(
        cy,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: c,
          onClose: t,
          children: Zr(e.options.items ?? [])
        }
      ) })
    }
  );
}
function _w({ children: e }) {
  const [t, n] = W(null), s = R(() => {
    n((u) => (u?.invoker && document.body.contains(u.invoker) && u.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (u, r) => {
      u.preventDefault();
      const a = u.currentTarget ?? u.target;
      n({ x: u.clientX, y: u.clientY, invoker: a, options: r });
    },
    []
  );
  fe(() => {
    if (!t) return;
    const u = (f) => {
      const d = document.querySelector(`.${Bs.popup}`);
      d && !d.contains(f.target) && s();
    }, r = (f) => {
      f.key === "Escape" && (f.preventDefault(), s());
    }, a = () => s(), i = () => s();
    return document.addEventListener("pointerdown", u, !0), document.addEventListener("keydown", r, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", i), () => {
      document.removeEventListener("pointerdown", u, !0), document.removeEventListener("keydown", r, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", i);
    };
  }, [t, s]);
  const c = be(
    () => ({ open: l, close: s, isOpen: t != null }),
    [l, s, t]
  );
  return /* @__PURE__ */ z(Yr.Provider, { value: c, children: [
    e,
    t ? /* @__PURE__ */ o(fy, { state: t, onClose: s }) : null
  ] });
}
const _y = "_root_rgcia_1", hy = "_list_rgcia_9", py = "_item_rgcia_14", my = "_trigger_rgcia_18", gy = "_disabled_rgcia_45", by = "_expanded_rgcia_52", yy = "_selected_rgcia_56", xy = "_icon_rgcia_61", vy = "_text_rgcia_72", ky = "_caret_rgcia_79", wy = "_open_rgcia_86", $y = "_submenu_rgcia_90", Ny = "_iconOnly_rgcia_172", Oy = "_stacked_rgcia_201", ct = {
  root: _y,
  list: hy,
  item: py,
  trigger: my,
  disabled: gy,
  expanded: by,
  selected: yy,
  icon: xy,
  text: vy,
  caret: ky,
  open: wy,
  submenu: $y,
  iconOnly: Ny,
  stacked: Oy
}, ks = Ln(null);
function Sy() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Cy(e, t) {
  const n = Sy(), s = e.replace(/^#?\/?/, "");
  return t === "prefix" ? s === "" ? !1 : s === "/" ? n === "" || n === "/" : n === s || n.startsWith(`${s}/`) : n === s;
}
function Dy({
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
function Gs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const s = hn(ks);
  if (!s) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: c, path: u, disabled: r } = n, a = be(
    () => ls.toArray(n.children).filter(gt),
    [n.children]
  ), i = a.length > 0, f = !!r, d = n.match ?? s.match, k = n.expanded !== void 0, [g, m] = W(
    n.defaultExpanded ?? !1
  ), p = k ? n.expanded ?? !1 : g, b = R(
    (L) => {
      k || m(L), n.onExpandedChange?.(L);
    },
    [k, n]
  );
  fe(() => {
    s.collapseSignal > 0 && !s.collapseSkipRef.current.has(e) && b(!1);
  }, [s.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, y] = W(
    n.defaultSelected ?? !1
  ), w = !h && u ? Cy(u, d) : !1, v = n.selected ?? (h ? _ : w || _), [, N] = W(0);
  fe(() => {
    if (!u) return;
    const L = () => N((V) => V + 1);
    return window.addEventListener("hashchange", L), () => window.removeEventListener("hashchange", L);
  }, [u]);
  const $ = be(
    () => ({
      ...s,
      level: s.level + 1,
      openAncestors: () => {
        b(!0), s.openAncestors();
      }
    }),
    [s, b]
  );
  fe(() => {
    w && t.length > 0 && $.openAncestors();
  }, []);
  const C = R(
    (L) => {
      if (f) {
        L.preventDefault();
        return;
      }
      const V = { text: l, value: c, path: u };
      [s.emit(V), n.onClick?.(V)].includes(!1) && L.preventDefault(), h || y(!0), n.onSelectedChange?.(!0);
    },
    [f, l, c, u, s, n, h]
  ), M = R(() => {
    f || (p || s.notifyOpened(e, t), b(!p));
  }, [f, p, s, e, t, b]), D = R(
    (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), i ? M() : L.target.click()) : L.key === "Escape" && p ? (L.preventDefault(), b(!1)) : L.key === "ArrowRight" && i && !p ? (L.preventDefault(), s.notifyOpened(e, t), b(!0)) : L.key === "ArrowLeft" && p && (L.preventDefault(), b(!1));
    },
    [i, M, p, b, s, e, t]
  ), E = i && s.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [ct.caret, p ? ct.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, O = n.template ?? /* @__PURE__ */ z(tt, { children: [
    /* @__PURE__ */ o(
      Dy,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    s.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: ct.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: ct.text, children: l }),
    E
  ] }), x = `${s.baseId}-panel-${e}`, S = `${s.baseId}-trigger-${e}`, j = [
    ct.trigger,
    f ? ct.disabled : null,
    p ? ct.expanded : null,
    v ? ct.selected : null
  ].filter(Boolean).join(" "), T = s.level > 0 ? "menuitem" : void 0, A = i ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: T,
      "aria-expanded": p,
      "aria-controls": x,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: j,
      onClick: M,
      onKeyDown: D,
      children: O
    }
  ) : u && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: S,
      role: T,
      href: u,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: j,
      onClick: C,
      onKeyDown: D,
      children: O
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: T,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: j,
      onClick: C,
      onKeyDown: D,
      children: O
    }
  ), F = i ? s.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: x,
      role: "menu",
      "aria-labelledby": S,
      className: ct.submenu,
      hidden: s.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(ks.Provider, { value: $, children: a.map((L, V) => /* @__PURE__ */ o(
        Gs,
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
      style: { "--dx-panelmenu-level": s.level },
      "data-dx-panelmenu-item": "",
      "data-level": s.level,
      children: [
        A,
        F
      ]
    }
  );
}
function hw(e) {
  if (!hn(ks)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(Gs, { itemKey: e.text, ancestors: [], props: e });
}
function pw({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: s = !0,
  match: l = "prefix",
  renderMode: c = "client",
  onClick: u,
  ariaLabel: r = "Panel menu",
  className: a,
  ...i
}) {
  const f = Pe(), [d, k] = W(0), g = Q(/* @__PURE__ */ new Set()), m = R(
    (w) => u?.(w),
    [u]
  ), p = R(
    (w, v) => {
      t || (g.current = /* @__PURE__ */ new Set([w, ...v]), k((N) => N + 1));
    },
    [t]
  ), b = (w) => Array.from(
    w.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), h = (w) => {
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const v = w.target, N = b(w.currentTarget), $ = N.indexOf(v);
        if ($ === -1) return;
        w.preventDefault();
        const C = w.key === "ArrowDown" ? 1 : -1;
        N[($ + C + N.length) % N.length]?.focus();
      } else if (w.key === "Home" || w.key === "End") {
        const v = b(w.currentTarget);
        w.preventDefault(), (w.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, _ = be(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: s,
      renderMode: c,
      match: l,
      level: 0,
      collapseSignal: d,
      collapseSkipRef: g,
      emit: m,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      s,
      c,
      l,
      d,
      m,
      p
    ]
  ), y = be(
    () => ls.toArray(e).filter(gt),
    [e]
  );
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": r,
      className: [
        ct.root,
        n === "icon" ? ct.iconOnly : null,
        n === "stacked" ? ct.stacked : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      ...i,
      children: /* @__PURE__ */ o("div", { className: ct.list, role: "presentation", children: /* @__PURE__ */ o(ks.Provider, { value: _, children: y.map((w, v) => /* @__PURE__ */ o(
        Gs,
        {
          itemKey: String(v),
          ancestors: [],
          props: w.props
        },
        `top-${v}`
      )) }) })
    }
  );
}
const Ey = "_root_5numg_1", zy = "_trigger_5numg_7", My = "_defaultTrigger_5numg_40", Iy = "_avatar_5numg_46", Ay = "_menu_5numg_58", jy = "_item_5numg_74", Ty = "_disabled_5numg_88", Py = "_active_5numg_97", Ly = "_icon_5numg_107", Ry = "_text_5numg_114", Xt = {
  root: Ey,
  trigger: zy,
  defaultTrigger: My,
  avatar: Iy,
  menu: Ay,
  item: jy,
  disabled: Ty,
  active: Py,
  icon: Ly,
  text: Ry
};
function mw({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: s = "Profile menu",
  className: l
}) {
  const c = Pe(), u = `${c}-menu`, r = Q(null), a = Q(null), [i, f] = W(!1), [d, k] = W(-1), g = t, m = e.map((v, N) => v.disabled ? -1 : N).filter((v) => v >= 0), p = R(
    (v) => {
      if (v.disabled) return;
      const N = {
        text: v.text,
        path: v.path
      };
      n?.(N), f(!1), a.current?.focus();
    },
    [n]
  ), b = R(() => {
    k(m[0] ?? -1), f(!0);
  }, [m]), h = R(() => {
    f(!1), k(-1), a.current?.focus();
  }, []);
  fe(() => {
    if (!i) return;
    const v = (N) => {
      r.current && !r.current.contains(N.target) && (f(!1), k(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [i]), fe(() => {
    if (!i) return;
    const v = (N) => {
      N.key === "Escape" && (N.preventDefault(), h());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [i, h]);
  const _ = (v) => {
    if (m.length === 0) return;
    const N = m.indexOf(d), $ = N === -1 ? 0 : (N + v + m.length) % m.length, C = m[$];
    C != null && k(C);
  }, y = (v) => {
    if (!i) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), b());
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
        v.preventDefault(), m[0] != null && k(m[0]);
        break;
      case "End":
        v.preventDefault(), m[m.length - 1] != null && k(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), d >= 0) {
          const N = e[d];
          N && !N.disabled && p(N);
        }
        break;
      case "Tab":
        f(!1), k(-1);
        break;
    }
  }, w = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), _(1);
        break;
      case "ArrowUp":
        v.preventDefault(), _(-1);
        break;
      case "Home":
        v.preventDefault(), m[0] != null && k(m[0]);
        break;
      case "End":
        v.preventDefault(), m[m.length - 1] != null && k(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), d >= 0) {
          const N = e[d];
          N && !N.disabled && p(N);
        }
        break;
      case "Escape":
        v.preventDefault(), h();
        break;
      case "Tab":
        f(!1), k(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: [Xt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ z("nav", { "aria-label": s, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": i,
            "aria-controls": u,
            "aria-label": s,
            className: Xt.trigger,
            onClick: () => i ? h() : b(),
            onKeyDown: y,
            children: g ?? /* @__PURE__ */ z("span", { className: Xt.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Xt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ o("span", { children: "Profile" })
            ] })
          }
        ),
        i ? /* @__PURE__ */ o(
          "div",
          {
            id: u,
            role: "menu",
            "aria-label": s,
            "aria-activedescendant": d >= 0 ? `${c}-item-${d}` : void 0,
            className: Xt.menu,
            onKeyDown: w,
            tabIndex: -1,
            children: e.map((v, N) => {
              const $ = !!v.disabled, C = N === d;
              return /* @__PURE__ */ z(
                "div",
                {
                  id: `${c}-item-${N}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [
                    Xt.item,
                    C ? Xt.active : null,
                    $ ? Xt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || p(v);
                  },
                  onMouseEnter: () => {
                    $ || k(N);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ o("span", { className: Xt.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ o("span", { className: Xt.text, children: v.text })
                  ]
                },
                `${v.text}-${N}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const By = "_root_vv0xs_1", Fy = "_bottomRight_vv0xs_11", Hy = "_bottomLeft_vv0xs_16", qy = "_topRight_vv0xs_21", Ky = "_topLeft_vv0xs_26", Wy = "_menu_vv0xs_31", Uy = "_itemWrapper_vv0xs_48", Vy = "_tooltip_vv0xs_54", Gy = "_main_vv0xs_76", Xy = "_mainIcon_vv0xs_104", Yy = "_mainOpen_vv0xs_109", Zy = "_item_vv0xs_48", Jy = "_disabled_vv0xs_141", Qy = "_itemIcon_vv0xs_148", vt = {
  root: By,
  bottomRight: Fy,
  bottomLeft: Hy,
  topRight: qy,
  topLeft: Ky,
  menu: Wy,
  itemWrapper: Uy,
  tooltip: Vy,
  main: Gy,
  mainIcon: Xy,
  mainOpen: Yy,
  item: Zy,
  disabled: Jy,
  itemIcon: Qy
};
function gw({
  items: e,
  position: t,
  icon: n = "+",
  onClick: s,
  ariaLabel: l = "Open menu",
  className: c
}) {
  const u = t ?? "bottom-right", a = `${Pe()}-menu`, i = Q(null), f = Q(null), [d, k] = W(!1), g = R(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      s?.(_), k(!1), f.current?.focus();
    },
    [s]
  );
  fe(() => {
    if (!d) return;
    const h = (_) => {
      i.current && !i.current.contains(_.target) && k(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [d]), fe(() => {
    if (!d) return;
    const h = (_) => {
      _.key === "Escape" && (k(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [d]);
  const m = u === "bottom-right" ? vt.bottomRight : u === "bottom-left" ? vt.bottomLeft : u === "top-right" ? vt.topRight : vt.topLeft, p = (h) => {
    !d && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), k(!0)) : d && h.key === "Escape" && (h.preventDefault(), k(!1));
  }, b = (h) => {
    h.key === "Escape" && (h.preventDefault(), k(!1), f.current?.focus());
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: i,
      className: [vt.root, m, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        d ? /* @__PURE__ */ o(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: vt.menu,
            onKeyDown: b,
            children: e.map((h, _) => {
              const y = !!h.disabled;
              return /* @__PURE__ */ z("div", { className: vt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: vt.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": y || void 0,
                    title: h.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [vt.item, y ? vt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => g(h),
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
            "aria-expanded": d,
            "aria-controls": a,
            "aria-label": l,
            onClick: () => k((h) => !h),
            onKeyDown: p,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [vt.mainIcon, d ? vt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const ex = "_root_1eyur_1", tx = "_list_1eyur_5", nx = "_item_1eyur_15", sx = "_link_1eyur_22", rx = "_linkButton_1eyur_23", ox = "_current_1eyur_24", lx = "_disabled_1eyur_68", ax = "_icon_1eyur_74", ix = "_text_1eyur_81", cx = "_separator_1eyur_85", Ke = {
  root: ex,
  list: tx,
  item: nx,
  link: sx,
  linkButton: rx,
  current: ox,
  disabled: lx,
  icon: ax,
  text: ix,
  separator: cx
};
function bw({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: s
}) {
  const l = t, c = (u) => {
    u.disabled || l?.({ text: u.text, path: u.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [Ke.root, s].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Ke.list, children: e.map((u, r) => {
        const a = r === e.length - 1, i = !!u.disabled;
        return /* @__PURE__ */ z("li", { className: Ke.item, children: [
          a ? i ? /* @__PURE__ */ z(
            "span",
            {
              className: [Ke.current, Ke.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                u.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: u.icon }) : null,
                u.text
              ]
            }
          ) : u.path ? /* @__PURE__ */ z(
            "a",
            {
              href: u.path,
              className: Ke.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), c(u);
              },
              children: [
                u.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: u.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: u.text })
              ]
            }
          ) : /* @__PURE__ */ z(
            "span",
            {
              className: Ke.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                u.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: u.icon }) : null,
                u.text
              ]
            }
          ) : i ? /* @__PURE__ */ z(
            "span",
            {
              className: [Ke.link, Ke.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                u.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: u.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: u.text })
              ]
            }
          ) : u.path ? /* @__PURE__ */ z(
            "a",
            {
              href: u.path,
              className: Ke.link,
              onClick: (f) => {
                f.preventDefault(), c(u);
              },
              children: [
                u.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: u.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: u.text })
              ]
            }
          ) : /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              className: Ke.linkButton,
              tabIndex: 0,
              onClick: () => c(u),
              children: [
                u.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: u.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: u.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ o("span", { className: Ke.separator, "aria-hidden": "true", children: "/" })
        ] }, `${u.text}-${r}`);
      }) })
    }
  );
}
const dx = "_link_tmy3k_1", ux = {
  link: dx
}, yw = Le(function({ children: t, icon: n, visible: s = !0, className: l, ...c }, u) {
  if (s === !1) return null;
  const r = /* @__PURE__ */ z(tt, { children: [
    n != null && /* @__PURE__ */ o(ke, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [ux.link, l].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: f, ...d } = c;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: u,
        className: a,
        href: f,
        ...d,
        children: r
      }
    );
  }
  return /* @__PURE__ */ o(
    "button",
    {
      ref: u,
      type: "button",
      className: a,
      ...c,
      children: r
    }
  );
}), fx = "_root_dnkuu_1", _x = "_list_dnkuu_5", hx = "_item_dnkuu_15", px = "_connector_dnkuu_21", mx = "_connectorCompleted_dnkuu_30", gx = "_step_dnkuu_34", bx = "_active_dnkuu_69", yx = "_completed_dnkuu_75", xx = "_circle_dnkuu_79", vx = "_check_dnkuu_109", kx = "_icon_dnkuu_114", wx = "_number_dnkuu_119", $x = "_text_dnkuu_124", kt = {
  root: fx,
  list: _x,
  item: hx,
  connector: px,
  connectorCompleted: mx,
  step: gx,
  active: bx,
  completed: yx,
  circle: xx,
  check: vx,
  icon: kx,
  number: wx,
  text: $x
};
function xw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: s = 0,
  linear: l,
  Linear: c,
  onChange: u,
  Change: r,
  onSelectedIndexChange: a,
  ariaLabel: i = "Steps",
  className: f
}) {
  const d = l ?? c ?? !1, k = t ?? n, g = k !== void 0, [m, p] = W(() => Math.min(Math.max(0, k ?? s), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, g ? k : m),
    Math.max(0, e.length - 1)
  ), _ = Q(null), y = R(
    (N) => {
      const $ = Math.min(
        Math.max(0, N),
        Math.max(0, e.length - 1)
      );
      g || p($), (u ?? r ?? a)?.($);
    },
    [g, u, r, a, e.length]
  ), w = R(
    (N, $) => !!($.disabled || d && N > h + 1),
    [d, h]
  ), v = (N) => {
    const $ = Array.from(
      N.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), C = document.activeElement, M = C ? $.indexOf(C) : -1;
    if (N.key === "ArrowRight" || N.key === "ArrowDown") {
      if (N.preventDefault(), $.length === 0) return;
      const D = M === -1 ? 0 : (M + 1) % $.length, E = $[D];
      E && E.focus();
    } else if (N.key === "ArrowLeft" || N.key === "ArrowUp") {
      if (N.preventDefault(), $.length === 0) return;
      const D = M === -1 ? $.length - 1 : (M - 1 + $.length) % $.length, E = $[D];
      E && E.focus();
    } else N.key === "Home" ? (N.preventDefault(), $[0]?.focus()) : N.key === "End" && (N.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": i,
      className: [kt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: kt.list, children: e.map((N, $) => {
        const C = $ === h, M = $ < h, D = w($, N);
        return /* @__PURE__ */ z(
          "li",
          {
            role: "listitem",
            className: kt.item,
            children: [
              $ > 0 ? /* @__PURE__ */ o(
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
                  "data-step": $,
                  "aria-current": C ? "step" : void 0,
                  "aria-disabled": D ? "true" : void 0,
                  disabled: D,
                  tabIndex: D ? -1 : 0,
                  className: [
                    kt.step,
                    C ? kt.active : null,
                    M ? kt.completed : null,
                    D ? kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || y($);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: kt.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ o("span", { className: kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "check", size: "sm" }) }) : N.icon ? /* @__PURE__ */ o("span", { className: kt.icon, children: N.icon }) : /* @__PURE__ */ o("span", { className: kt.number, children: $ + 1 }) }),
                    /* @__PURE__ */ o("span", { className: kt.text, children: N.text })
                  ]
                }
              )
            ]
          },
          `${N.text}-${$}`
        );
      }) })
    }
  );
}
const Nx = "_root_12hod_1", Ox = "_horizontal_12hod_13", Sx = "_vertical_12hod_17", Cx = "_pane_12hod_21", Dx = "_handle_12hod_31", Ex = "_handleHorizontal_12hod_51", zx = "_handleVertical_12hod_57", Mx = "_handleGrip_12hod_63", Ix = "_handleCollapseHint_12hod_75", Ax = "_collapseBtn_12hod_79", jx = "_collapseBtnCollapsed_12hod_109", At = {
  root: Nx,
  horizontal: Ox,
  vertical: Sx,
  pane: Cx,
  handle: Dx,
  handleHorizontal: Ex,
  handleVertical: zx,
  handleGrip: Mx,
  handleCollapseHint: Ix,
  collapseBtn: Ax,
  collapseBtnCollapsed: jx
};
function es(e, t) {
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
  const s = parseFloat(n);
  return Number.isNaN(s) ? t : s;
}
function nn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function vw({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: s,
  Resize: l,
  onCollapse: c,
  Collapse: u,
  ariaLabel: r = "Splitter",
  className: a
}) {
  const i = e ?? t ?? "horizontal", f = i === "horizontal", d = Q(null), k = R(() => {
    const x = n.length;
    if (x === 0) return [];
    const S = n.map((T) => T.size ? es(T.size, 100 / x) : 100 / x), j = S.reduce((T, A) => T + A, 0);
    return Math.abs(j - 100) > 0.01 && j > 0 ? S.map((T) => T / j * 100) : S;
  }, [n]), [g, m] = W(() => k()), [p, b] = W(
    () => n.map((x) => !!x.collapsed)
  ), h = Q(g);
  fe(() => {
    b(n.map((x) => !!x.collapsed));
  }, [n]);
  const _ = R(
    () => n.map((x) => es(x.min, 0)),
    [n]
  ), y = R(
    () => n.map((x) => es(x.max, 100)),
    [n]
  ), w = R(
    (x, S) => {
      const j = { paneIndex: x, newSize: S, cancel: !1 };
      return (s ?? l)?.(j), !j.cancel;
    },
    [s, l]
  ), v = R(
    (x, S) => {
      const j = { paneIndex: x, collapse: S, cancel: !1 };
      return (c ?? u)?.(j), !j.cancel;
    },
    [c, u]
  ), N = R(
    (x) => {
      const S = !p[x];
      v(x, S) && (S ? (h.current = [...g], b((j) => {
        const T = [...j];
        return T[x] !== void 0 && (T[x] = !0), T;
      }), m((j) => {
        const T = [...j], A = T[x] ?? 0, F = x < T.length - 1 ? x + 1 : x - 1;
        if (F >= 0 && F < T.length) {
          const L = T[F] ?? 0;
          T[F] = L + A, T[x] = 0;
        } else
          T[x] = 0;
        return T;
      })) : (b((j) => {
        const T = [...j];
        return T[x] !== void 0 && (T[x] = !1), T;
      }), m(() => {
        const j = [...h.current];
        return j.length !== n.length ? n.map(() => 100 / n.length) : j;
      })));
    },
    [p, g, n.length, v]
  ), $ = Q(
    null
  ), C = R(
    (x, S, j) => {
      const T = d.current;
      if (!T) return null;
      const A = T.getBoundingClientRect();
      let F;
      if (f) {
        if (A.width === 0) return null;
        F = (S - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        F = (j - A.top) / A.height * 100;
      }
      let L = 0;
      for (let ee = 0; ee < x; ee++) {
        const Y = g[ee];
        Y !== void 0 && (L += Y);
      }
      return F - L;
    },
    [f, g]
  ), M = (x, S) => {
    S.preventDefault();
    const j = S.currentTarget;
    j.focus(), typeof j.setPointerCapture == "function" && j.setPointerCapture(S.pointerId), $.current = { handleIndex: x, pointerId: S.pointerId };
  }, D = (x) => {
    if (!$.current || $.current.pointerId !== x.pointerId)
      return;
    x.preventDefault();
    const S = $.current.handleIndex, j = C(S, x.clientX, x.clientY);
    if (j == null) return;
    const T = _(), A = y(), F = T[S] ?? 0, L = A[S] ?? 100, V = S + 1, ee = T[V] ?? 0, Y = A[V] ?? 100, me = g[S] ?? 0, de = g[V] ?? 0, re = me + de;
    if (re <= 0) return;
    let q = nn(j, F, L), ie = re - q;
    if (ie < ee) {
      if (ie = ee, q = re - ie, q < F || q > L) return;
    } else if (ie > Y && (ie = Y, q = re - ie, q < F || q > L))
      return;
    q = nn(q, F, L), ie = re - q, w(S, q) && m((se) => {
      const ue = [...se];
      return ue[S] = q, ue[V] = ie, ue;
    });
  }, E = (x) => {
    !$.current || $.current.pointerId !== x.pointerId || ($.current = null);
  }, O = (x, S) => {
    const j = _(), T = y(), A = x, F = x + 1, L = g[A] ?? 0, V = g[F] ?? 0, ee = L + V;
    let Y = 0;
    const me = !!n[A]?.collapsible, de = !!n[F]?.collapsible;
    if (f ? S.key === "ArrowLeft" ? Y = -5 : S.key === "ArrowRight" && (Y = 5) : S.key === "ArrowUp" ? Y = -5 : S.key === "ArrowDown" && (Y = 5), S.key === "Home") {
      S.preventDefault();
      let re = j[A] ?? 0, q = ee - re;
      if (q = nn(
        q,
        j[F] ?? 0,
        T[F] ?? 100
      ), re = ee - q, re = nn(re, j[A] ?? 0, T[A] ?? 100), !w(A, re)) return;
      m((ie) => {
        const se = [...ie];
        return se[A] = re, se[F] = q, se;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let re = T[A] ?? 100;
      re = Math.min(re, ee - (j[F] ?? 0));
      let q = ee - re;
      if (q = nn(
        q,
        j[F] ?? 0,
        T[F] ?? 100
      ), re = ee - q, re = nn(re, j[A] ?? 0, T[A] ?? 100), !w(A, re)) return;
      m((ie) => {
        const se = [...ie];
        return se[A] = re, se[F] = q, se;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (me || de)) {
      S.preventDefault(), N(me ? A : F);
      return;
    }
    if (Y !== 0) {
      S.preventDefault();
      let re = L + Y, q = ee - re;
      const ie = j[A] ?? 0, se = T[A] ?? 100, ue = j[F] ?? 0, oe = T[F] ?? 100;
      if (re = nn(re, ie, se), q = ee - re, (q < ue || q > oe) && (q = nn(q, ue, oe), re = ee - q, re = nn(re, ie, se), q = ee - re), !w(A, re)) return;
      m(($e) => {
        const Oe = [...$e];
        return Oe[A] = re, Oe[F] = q, Oe;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: d,
      className: [
        At.root,
        f ? At.horizontal : At.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: n.map((x, S) => {
        const j = !!p[S], T = j ? 0 : g[S] ?? 100 / n.length, A = j ? { display: "none" } : f ? {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = es(x.min, 0), L = es(x.max, 100), V = S < n.length - 1, ee = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ z("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ z(
            "div",
            {
              role: "group",
              "aria-label": x.label ?? `Pane ${S + 1}`,
              className: At.pane,
              style: A,
              "data-collapsed": j ? "true" : void 0,
              children: [
                j ? null : x.children,
                x.collapsible && !j ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: At.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !j,
                    onClick: () => N(S),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                x.collapsible && j ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: At.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !j,
                    onClick: () => N(S),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          j && x.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: At.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => N(S),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          V ? /* @__PURE__ */ z(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": F,
              "aria-valuemax": L,
              "aria-valuenow": Math.round(T),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: j || p[S + 1] ? -1 : 0,
              className: [
                At.handle,
                f ? At.handleHorizontal : At.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (Y) => M(S, Y),
              onPointerMove: D,
              onPointerUp: E,
              onKeyDown: (Y) => O(S, Y),
              children: [
                /* @__PURE__ */ o("span", { className: At.handleGrip, "aria-hidden": "true" }),
                (x.collapsible || ee) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: At.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, S);
      })
    }
  );
}
const Tx = "_root_1w3wd_1", Px = "_list_1w3wd_5", Lx = "_vertical_1w3wd_14", Rx = "_horizontal_1w3wd_20", Bx = "_item_1w3wd_28", Fx = "_link_1w3wd_32", Hx = "_active_1w3wd_57", Tn = {
  root: Tx,
  list: Px,
  vertical: Lx,
  horizontal: Rx,
  item: Bx,
  link: Fx,
  active: Hx
};
function kw({
  items: e,
  selector: t,
  Selector: n,
  orientation: s,
  Orientation: l,
  onClick: c,
  Click: u,
  ariaLabel: r = "Table of contents",
  className: a
}) {
  const i = t ?? n, f = s ?? l ?? "vertical", [d, k] = W(
    () => e[0]?.selector ?? null
  ), g = Q(d);
  g.current = d;
  const m = R(
    (p, b) => {
      if (k(p.selector), (c ?? u)?.({ text: p.text, selector: p.selector }), b) {
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
    [c, u]
  );
  return fe(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (i) {
        const v = document.querySelector(i);
        if (v) return v;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), y = () => {
      let v = null, N = null;
      for (const C of e) {
        const M = document.querySelector(C.selector);
        if (!M) continue;
        _.set(C.selector, M);
        const D = M.getBoundingClientRect();
        let E = D.top;
        if (b !== window) {
          const O = b.getBoundingClientRect();
          E = D.top - O.top;
        }
        E <= 80 ? (!N || E > N.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (N = { sel: C.selector, el: M }) : (!v || E < v.top) && (v = { sel: C.selector, top: E });
      }
      const $ = N?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      $ && $ !== g.current && k($);
    }, w = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const v = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((N) => {
        const $ = N.filter((C) => C.isIntersecting).sort((C, M) => C.boundingClientRect.top - M.boundingClientRect.top);
        if ($[0]) {
          const C = $[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === C) {
              k(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && C.id === M.selector.slice(1)) {
              k(M.selector);
              break;
            }
          }
        } else
          y();
      }, v);
      for (const N of e) {
        const $ = document.querySelector(N.selector);
        $ && (h.observe($), _.set(N.selector, $));
      }
    }
    return b === window ? (window.addEventListener("scroll", w, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", w), h?.disconnect();
    }) : (b.addEventListener("scroll", w, {
      passive: !0
    }), y(), () => {
      b.removeEventListener("scroll", w), h?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": r,
      className: [Tn.root, Tn[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Tn.list, children: e.map((p) => {
        const b = p.selector === d;
        return /* @__PURE__ */ o("li", { className: Tn.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [Tn.link, b ? Tn.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const _ = document.querySelector(p.selector);
              m(p, _);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const qx = "_root_1bfit_1", Kx = "_viewport_1bfit_17", Wx = "_slide_1bfit_24", Ux = "_active_1bfit_33", Vx = "_arrow_1bfit_37", Gx = "_prev_1bfit_71", Xx = "_next_1bfit_75", Yx = "_pauseBtn_1bfit_79", Zx = "_indicators_1bfit_110", Jx = "_indicator_1bfit_110", Qx = "_indicatorActive_1bfit_145", jt = {
  root: qx,
  viewport: Kx,
  slide: Wx,
  active: Ux,
  arrow: Vx,
  prev: Gx,
  next: Xx,
  pauseBtn: Yx,
  indicators: Zx,
  indicator: Jx,
  indicatorActive: Qx
};
function ww({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: s = 0,
  auto: l,
  Auto: c,
  interval: u,
  Interval: r,
  pauseOnHover: a,
  PauseOnHover: i,
  showArrows: f,
  ShowArrows: d,
  showIndicators: k,
  ShowIndicators: g,
  onChange: m,
  Change: p,
  ariaLabel: b = "Carousel",
  className: h
}) {
  const _ = t ?? n, y = _ !== void 0, [w, v] = W(() => Math.min(Math.max(0, _ ?? s), Math.max(0, e.length - 1))), N = y ? _ : w, $ = e.length === 0 ? 0 : Math.min(Math.max(0, N), e.length - 1), C = l ?? c ?? !1, M = u ?? r ?? 3e3, D = a ?? i ?? !0, E = f ?? d ?? !0, O = k ?? g ?? !0, [x, S] = W(!1), [j, T] = W(!1), A = x || j, F = Q(null), L = Pe(), V = R(
    (ue) => {
      const oe = e.length === 0 ? 0 : (ue % e.length + e.length) % e.length;
      y || v(oe), (m ?? p)?.(oe);
    },
    [y, m, p, e.length]
  ), ee = R(() => {
    V($ - 1);
  }, [V, $]), Y = R(() => {
    V($ + 1);
  }, [V, $]), me = R(
    (ue) => {
      V(ue);
    },
    [V]
  );
  fe(() => {
    if (!C || A || e.length <= 1) return;
    const ue = setInterval(() => {
      V($ + 1);
    }, M);
    return () => clearInterval(ue);
  }, [C, A, M, $, V, e.length]);
  const de = (ue) => {
    e.length !== 0 && (ue.key === "ArrowLeft" ? (ue.preventDefault(), ee()) : ue.key === "ArrowRight" ? (ue.preventDefault(), Y()) : ue.key === "Home" ? (ue.preventDefault(), me(0)) : ue.key === "End" && (ue.preventDefault(), me(e.length - 1)));
  }, re = () => {
    D && C && T(!0);
  }, q = () => {
    D && C && T(!1);
  }, ie = () => {
    D && C && T(!0);
  }, se = () => {
    D && C && T(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ z(
    "div",
    {
      ref: F,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [jt.root, h].filter(Boolean).join(" "),
      onKeyDown: de,
      onMouseEnter: re,
      onMouseLeave: q,
      onFocusCapture: ie,
      onBlurCapture: se,
      children: [
        /* @__PURE__ */ o("div", { id: L, className: jt.viewport, children: e.map((ue, oe) => {
          const $e = oe === $;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${oe + 1} of ${e.length}`,
              "aria-hidden": $e ? void 0 : !0,
              hidden: !$e,
              className: [jt.slide, $e ? jt.active : null].filter(Boolean).join(" "),
              children: ue
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
        C ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: jt.pauseBtn,
            "aria-label": x ? "Resume" : "Pause",
            "aria-pressed": x,
            onClick: () => S((ue) => !ue),
            children: x ? "▶" : "⏸"
          }
        ) : null,
        O && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: jt.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ue, oe) => {
              const $e = oe === $;
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
const ev = "_root_1aa5u_1", tv = "_group_1aa5u_20", nv = "_itemWrapper_1aa5u_30", sv = "_treeitem_1aa5u_34", rv = "_disabled_1aa5u_50", ov = "_selected_1aa5u_60", lv = "_caret_1aa5u_66", av = "_caretIcon_1aa5u_113", iv = "_caretOpen_1aa5u_120", cv = "_caretPlaceholder_1aa5u_124", dv = "_label_1aa5u_130", uv = "_loading_1aa5u_137", fv = "_loadingRow_1aa5u_143", _v = "_empty_1aa5u_149", hv = "_checkbox_1aa5u_155", at = {
  root: ev,
  group: tv,
  itemWrapper: nv,
  treeitem: sv,
  disabled: rv,
  selected: ov,
  caret: lv,
  caretIcon: av,
  caretOpen: iv,
  caretPlaceholder: cv,
  label: dv,
  loading: uv,
  loadingRow: fv,
  empty: _v,
  checkbox: hv
};
function pv({
  indeterminate: e,
  ...t
}) {
  const n = Q(null);
  return fe(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function $w({
  data: e,
  Data: t,
  children: n,
  Children: s,
  textProperty: l,
  TextProperty: c,
  keyProperty: u,
  KeyProperty: r,
  selectionMode: a,
  SelectionMode: i,
  selectedItem: f,
  SelectedItem: d,
  selectedItems: k,
  SelectedItems: g,
  defaultSelectedItem: m,
  defaultSelectedItems: p,
  onChange: b,
  Change: h,
  onExpand: _,
  Expand: y,
  onCollapse: w,
  Collapse: v,
  loadChildData: N,
  LoadChildData: $,
  template: C,
  Template: M,
  itemTemplate: D,
  ItemTemplate: E,
  ariaLabel: O,
  AriaLabel: x,
  allowCheckBoxes: S = !1,
  checkedKeys: j,
  defaultCheckedKeys: T,
  onCheckedChange: A,
  allowCheckChildren: F = !0,
  className: L
}) {
  const V = e ?? t ?? [], ee = n ?? s, Y = l ?? c ?? "text", me = u ?? r ?? "id", de = a ?? i ?? "single", re = O ?? x ?? "Tree", q = N ?? $, ie = C ?? M ?? D ?? E, se = R(
    (H) => {
      const X = H[me];
      return X != null ? String(X) : String(H.id ?? "");
    },
    [me]
  ), ue = R(
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
          const xe = se(_e);
          _e.expanded && X.add(xe);
          const Me = oe(_e);
          Me && Me.length > 0 && ne(Me);
        }
      };
      return ne(H), X;
    },
    [se, oe]
  ), [Oe, Ye] = W(
    () => $e(V)
  ), [ve, Be] = W(
    () => /* @__PURE__ */ new Map()
  ), [we, ot] = W(() => /* @__PURE__ */ new Set()), nt = f ?? d, Ze = k ?? g, lt = de === "multiple" ? Ze !== void 0 : nt !== void 0, G = R(() => {
    if (de === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((ne) => se(ne)));
      const H = /* @__PURE__ */ new Set(), X = (ne) => {
        for (const ge of ne) {
          ge.selected && H.add(se(ge));
          const _e = oe(ge);
          _e && X(_e);
        }
      };
      return X(V), H;
    } else {
      if (m) return /* @__PURE__ */ new Set([se(m)]);
      let H = null;
      const X = (ne) => {
        for (const ge of ne) {
          if (ge.selected)
            return H = se(ge), !0;
          const _e = oe(ge);
          if (_e && X(_e)) return !0;
        }
        return !1;
      };
      return X(V), H ? /* @__PURE__ */ new Set([H]) : /* @__PURE__ */ new Set();
    }
  }, [
    de,
    m,
    p,
    se,
    oe,
    V
  ]), [I, U] = W(
    () => G()
  ), Z = be(() => {
    if (de === "multiple") {
      if (Ze !== void 0) {
        const H = Ze;
        return H ? new Set(H.map((X) => se(X))) : /* @__PURE__ */ new Set();
      }
      return I;
    } else {
      if (nt !== void 0) {
        const H = nt;
        return H ? /* @__PURE__ */ new Set([se(H)]) : /* @__PURE__ */ new Set();
      }
      return I;
    }
  }, [
    de,
    Ze,
    nt,
    I,
    se
  ]), he = R(
    (H) => {
      let X;
      const ne = (ge) => {
        for (const _e of ge) {
          if (se(_e) === H)
            return X = _e, !0;
          const Me = ve.get(se(_e)) ?? oe(_e);
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
    [V, ve, se, oe]
  ), te = R(() => {
    const H = /* @__PURE__ */ new Map(), X = (ne) => {
      for (const ge of ne) {
        const _e = se(ge);
        H.set(_e, ge);
        const Me = ve.get(_e) ?? oe(ge);
        Me && X(Me);
      }
    };
    return X(V), H;
  }, [V, ve, se, oe]), ye = R(
    (H) => {
      const X = se(H);
      if (!H.disabled)
        if (de === "multiple") {
          const ge = new Set(Z);
          ge.has(X) ? ge.delete(X) : ge.add(X), lt || U(ge);
          const _e = b ?? h;
          if (_e) {
            const xe = te(), Me = [];
            for (const ze of ge) {
              const Ve = xe.get(ze) ?? he(ze);
              Ve && Me.push(Ve);
            }
            _e({ item: H, selectedItems: Me });
          }
        } else if (!Z.has(X) || Z.size !== 1 || !Z.has(X)) {
          lt || U(/* @__PURE__ */ new Set([X]));
          const _e = b ?? h;
          _e && _e({ item: H, selectedItem: H });
        } else {
          const _e = b ?? h;
          _e && _e({ item: H, selectedItem: H });
        }
    },
    [
      se,
      de,
      Z,
      lt,
      b,
      h,
      te,
      he
    ]
  ), Ee = R(
    async (H) => {
      const X = se(H);
      if (!!H.disabled) return;
      const ge = Oe.has(X), _e = _ ?? y, xe = w ?? v, Me = oe(H), Ve = ve.get(X) ?? Me, ft = !(Ve !== void 0 && Ve.length > 0) && q != null;
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
          const Ge = await q(H);
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
      se,
      Oe,
      oe,
      ve,
      q,
      we,
      _,
      y,
      w,
      v
    ]
  ), Fe = be(() => {
    const H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), ge = (_e, xe) => {
      for (const Me of _e) {
        const ze = se(Me);
        H.has(ze) || H.set(ze, []), X.set(ze, xe), Me.disabled && ne.add(ze);
        const Qe = ve.get(ze) ?? oe(Me);
        Qe && Qe.length > 0 && (H.set(
          ze,
          Qe.map((ft) => se(ft))
        ), ge(Qe, ze));
      }
    };
    return ge(V, null), { childrenOf: H, parentOf: X, disabledKeys: ne };
  }, [V, ve, se, oe]), He = R(
    (H) => {
      const X = [], ne = [...Fe.childrenOf.get(H) ?? []];
      for (; ne.length > 0; ) {
        const ge = ne.pop();
        X.push(ge), ne.push(...Fe.childrenOf.get(ge) ?? []);
      }
      return X;
    },
    [Fe]
  ), [st, on] = W(
    () => new Set(T ?? [])
  ), J = j !== void 0 ? new Set(j) : st, Se = R(
    (H) => {
      const X = Fe.disabledKeys;
      return He(H).filter((ne) => !X.has(ne));
    },
    [He, Fe]
  ), dt = R(
    (H) => {
      if (J.has(H)) return !0;
      if (!S || !F) return !1;
      const X = Se(H);
      return X.length > 0 && X.every((ne) => J.has(ne));
    },
    [J, S, F, Se]
  ), zt = R(
    (H) => {
      if (!S || !F || J.has(H))
        return !1;
      const X = Se(H);
      if (X.length === 0) return !1;
      const ne = X.filter((ge) => J.has(ge)).length;
      return ne > 0 && ne < X.length;
    },
    [J, S, F, Se]
  ), ut = R(
    (H) => {
      if (!S || H.disabled) return;
      const X = se(H), ne = new Set(J);
      if (ne.has(X) || dt(X)) {
        if (ne.delete(X), F)
          for (const ge of Se(X)) ne.delete(ge);
      } else if (ne.add(X), F)
        for (const ge of Se(X)) ne.add(ge);
      j === void 0 && on(ne), A?.([...ne]);
    },
    [
      S,
      F,
      j,
      J,
      Se,
      se,
      dt,
      A
    ]
  ), Ce = be(() => {
    const H = [], X = (ne, ge, _e) => {
      ne.forEach((xe, Me) => {
        const ze = se(xe), Ve = ue(xe), Qe = ve.get(ze) ?? oe(xe);
        let ft;
        ve.has(ze) ? ft = ve.get(ze).length > 0 : Qe !== void 0 ? ft = Qe.length > 0 : q ? ft = !0 : ft = !1;
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
          const ln = ve.get(ze) ?? Qe;
          ln && ln.length > 0 && X(ln, ge + 1, ze);
        }
      });
    };
    return X(V, 1, null), H;
  }, [
    V,
    se,
    ue,
    oe,
    ve,
    Oe,
    q,
    we
  ]), [je, Mt] = W(
    () => Ce[0]?.key ?? null
  ), yt = Q(""), Je = Q(null), K = Q(null);
  fe(() => {
    if (!je && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    } else if (je && !Ce.some((H) => H.key === je)) {
      const H = Ce[0];
      Mt(H ? H.key : null);
    }
  }, [Ce, je]), fe(() => {
    if (je) {
      const H = K.current?.querySelector(
        `[data-key="${CSS.escape(je)}"]`
      );
      let X = null;
      H || (X = K.current?.querySelector(
        `[data-key="${je}"]`
      ) ?? null);
      const ne = H ?? X;
      ne && document.activeElement !== ne && K.current?.contains(document.activeElement) && ne.focus();
    }
  }, [je]);
  const le = R((H) => {
    Mt(H), requestAnimationFrame(() => {
      const X = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(H) : H;
      let ne = K.current?.querySelector(
        `[data-key="${X}"]`
      );
      ne || (ne = K.current?.querySelector(`[data-key="${H}"]`) ?? null), ne?.focus();
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
        if (H.key === " " && S) {
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
      S,
      ut
    ]
  ), Ht = R(() => {
    if (!je && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    }
  }, [je, Ce]), rt = (H, X, ne) => /* @__PURE__ */ o("ul", { role: "group", className: at.group, children: H.map((ge, _e) => {
    const xe = se(ge), Me = ue(ge), ze = ve.get(xe) ?? oe(ge);
    let Ve;
    ve.has(xe) ? Ve = ve.get(xe).length > 0 : ze !== void 0 ? Ve = ze.length > 0 : q ? Ve = !0 : Ve = !1;
    const Qe = Oe.has(xe), ft = Z.has(xe), et = !!ge.disabled, Ge = we.has(xe), qt = je === xe, Tt = H.length, ln = _e + 1, Bn = ie ? ie(ge) : Me, Fn = S ? {
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
          "aria-posinset": ln,
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
            S ? /* @__PURE__ */ o(
              pv,
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
      Ve && Qe ? Ge ? /* @__PURE__ */ o("div", { className: at.loadingRow, "aria-busy": "true", children: "Loading…" }) : ze && ze.length > 0 ? rt(ze, X + 1) : ve.has(xe) && ve.get(xe).length > 0 ? rt(
        ve.get(xe),
        X + 1
      ) : (ze && ze.length === 0, null) : null
    ] }, xe);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: K,
      role: "tree",
      "aria-label": re,
      "aria-multiselectable": de === "multiple" || void 0,
      tabIndex: 0,
      className: [at.root, L].filter(Boolean).join(" "),
      onKeyDown: Te,
      onFocus: Ht,
      children: V.length === 0 ? /* @__PURE__ */ o("div", { className: at.empty, children: "No items" }) : rt(V, 1)
    }
  );
}
const mv = "_root_10fdq_1", gv = "_panel_10fdq_8", bv = "_header_10fdq_19", yv = "_listbox_10fdq_28", xv = "_option_10fdq_42", vv = "_disabled_10fdq_57", kv = "_active_10fdq_66", wv = "_selected_10fdq_70", $v = "_empty_10fdq_86", Nv = "_controls_10fdq_93", Ov = "_reorder_10fdq_102", Sv = "_btn_10fdq_110", Ae = {
  root: mv,
  panel: gv,
  header: bv,
  listbox: yv,
  option: xv,
  disabled: vv,
  active: kv,
  selected: wv,
  empty: $v,
  controls: Nv,
  reorder: Ov,
  btn: Sv
};
function it(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ps(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Nw({
  source: e,
  Source: t,
  target: n,
  Target: s,
  value: l,
  Value: c,
  targetValue: u,
  TargetValue: r,
  data: a,
  Data: i,
  onSourceChange: f,
  SourceChange: d,
  onTargetChange: k,
  TargetChange: g,
  keyProperty: m,
  KeyProperty: p,
  onMove: b,
  Move: h,
  ariaLabel: _,
  AriaLabel: y,
  className: w
}) {
  const v = m ?? p ?? "id", N = _ ?? y ?? "PickList", $ = e ?? t ?? l ?? c ?? a ?? i ?? [], C = n ?? s ?? u ?? r ?? [], [M, D] = W(() => [
    ...$
  ]), [E, O] = W(() => [
    ...C
  ]);
  fe(() => {
    const I = e ?? t ?? l ?? c ?? a ?? i;
    I !== void 0 && D([...I]);
  }, [e, t, l, c, a, i]), fe(() => {
    const I = n ?? s ?? u ?? r;
    I !== void 0 && O([...I]);
  }, [n, s, u, r]);
  const [x, S] = W(
    () => /* @__PURE__ */ new Set()
  ), [j, T] = W(
    () => /* @__PURE__ */ new Set()
  ), [A, F] = W(() => {
    const I = $.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), [L, V] = W(() => {
    const I = C.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), ee = be(
    () => M.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [M]
  ), Y = be(
    () => E.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [E]
  );
  fe(() => {
    if (A >= M.length) {
      const I = ee[ee.length - 1];
      F(I ?? 0);
    } else if (M.length > 0 && ee.length > 0 && !ee.includes(A)) {
      const I = ee[0];
      I !== void 0 && F(I);
    }
  }, [A, M.length, ee]), fe(() => {
    if (L >= E.length) {
      const I = Y[Y.length - 1];
      V(I ?? 0);
    } else if (E.length > 0 && Y.length > 0 && !Y.includes(L)) {
      const I = Y[0];
      I !== void 0 && V(I);
    }
  }, [L, E.length, Y]), fe(() => {
    S((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const Z of I)
        M.some(
          (te) => it(te, v) === Z && !te.disabled
        ) && U.add(Z);
      return U;
    });
  }, [M, v]), fe(() => {
    T((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const Z of I)
        E.some(
          (te) => it(te, v) === Z && !te.disabled
        ) && U.add(Z);
      return U;
    });
  }, [E, v]);
  const me = R(
    (I) => {
      (f ?? d)?.(I);
    },
    [f, d]
  ), de = R(
    (I) => {
      (k ?? g)?.(I);
    },
    [k, g]
  ), re = R(
    (I) => {
      (b ?? h)?.(I);
    },
    [b, h]
  ), q = R(
    (I) => {
      const U = M[I];
      if (!U || U.disabled) return;
      const Z = it(U, v);
      S((he) => {
        const te = new Set(he);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), F(I);
    },
    [M, v]
  ), ie = R(
    (I) => {
      const U = E[I];
      if (!U || U.disabled) return;
      const Z = it(U, v);
      T((he) => {
        const te = new Set(he);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), V(I);
    },
    [E, v]
  ), se = R(() => {
    const I = [], U = [];
    for (const ye of M) {
      const Ee = it(ye, v);
      x.has(Ee) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const Z = U, he = [...E, ...I];
    D(Z), O(he), S(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, v)));
    T(te), me(Z), de(he), re({
      source: Z,
      target: he,
      moved: I,
      direction: "toTarget"
    });
  }, [
    M,
    E,
    x,
    v,
    me,
    de,
    re
  ]), ue = R(() => {
    const I = [], U = [];
    for (const ye of E) {
      const Ee = it(ye, v);
      j.has(Ee) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const Z = U, he = [...M, ...I];
    O(Z), D(he), T(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, v)));
    S(te), me(he), de(Z), re({
      source: he,
      target: Z,
      moved: I,
      direction: "toSource"
    });
  }, [
    M,
    E,
    j,
    v,
    me,
    de,
    re
  ]), oe = R(() => {
    const I = M.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = M.filter((he) => !!he.disabled), Z = [...E, ...I];
    D(U), O(Z), S(/* @__PURE__ */ new Set()), me(U), de(Z), re({
      source: U,
      target: Z,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    M,
    E,
    v,
    me,
    de,
    re
  ]), $e = R(() => {
    const I = E.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = E.filter((he) => !!he.disabled), Z = [...M, ...I];
    O(U), D(Z), T(/* @__PURE__ */ new Set()), me(Z), de(U), re({
      source: Z,
      target: U,
      moved: I,
      direction: "allToSource"
    });
  }, [M, E, me, de, re]), Oe = R(() => {
    if (j.size === 0) return;
    const I = [...E], U = j, Z = [];
    for (let te = 1; te < I.length; te++) {
      const ye = I[te], Ee = I[te - 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, v), He = it(Ee, v);
      U.has(Fe) && !U.has(He) && !ye.disabled && !Ee.disabled && (I[te - 1] = ye, I[te] = Ee, Z.push(ye));
    }
    if (Z.length === 0) return;
    O(I), de(I), re({ source: M, target: I, moved: Z, direction: "up" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, v) === he
      );
      te >= 0 && V(te);
    }
  }, [
    E,
    j,
    v,
    M,
    de,
    re
  ]), Ye = R(() => {
    if (j.size === 0) return;
    const I = [...E], U = j, Z = [];
    for (let te = I.length - 2; te >= 0; te--) {
      const ye = I[te], Ee = I[te + 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, v), He = it(Ee, v);
      U.has(Fe) && !U.has(He) && !ye.disabled && !Ee.disabled && (I[te] = Ee, I[te + 1] = ye, Z.push(ye));
    }
    if (Z.length === 0) return;
    O(I), de(I), re({ source: M, target: I, moved: Z, direction: "down" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, v) === he
      );
      te >= 0 && V(te);
    }
  }, [
    E,
    j,
    v,
    M,
    de,
    re
  ]), ve = x.size > 0, Be = j.size > 0, we = Q(""), ot = Q(
    null
  ), nt = Q(""), Ze = Q(
    null
  ), Nt = R(
    (I) => {
      if (M.length === 0) return;
      const U = ee;
      if (U.length === 0) return;
      const Z = U.includes(A) ? A : U[0] ?? 0;
      let he = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const te = U.indexOf(Z);
        he = U[(te + 1) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const te = U.indexOf(Z);
        he = U[(te - 1 + U.length) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), he = U[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), he = U[U.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), q(Z);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const te = (we.current + I.key).toLowerCase();
        we.current = te, ot.current && clearTimeout(ot.current), ot.current = setTimeout(() => {
          we.current = "";
        }, 500);
        const ye = [...U, ...U], Ee = U.indexOf(Z) + 1, Fe = ye.slice(Ee).find(
          (He) => ps(M[He]).toLowerCase().startsWith(te)
        );
        Fe != null && F(Fe);
        return;
      }
      he >= 0 && F(he);
    },
    [M, ee, A, q]
  ), bt = R(
    (I) => {
      if (E.length === 0) return;
      const U = Y;
      if (U.length === 0) return;
      const Z = U.includes(L) ? L : U[0] ?? 0;
      let he = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const te = U.indexOf(Z);
        he = U[(te + 1) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const te = U.indexOf(Z);
        he = U[(te - 1 + U.length) % U.length] ?? U[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), he = U[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), he = U[U.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), ie(Z);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const te = (nt.current + I.key).toLowerCase();
        nt.current = te, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          nt.current = "";
        }, 500);
        const ye = [...U, ...U], Ee = U.indexOf(Z) + 1, Fe = ye.slice(Ee).find(
          (He) => ps(E[He]).toLowerCase().startsWith(te)
        );
        Fe != null && V(Fe);
        return;
      }
      he >= 0 && V(he);
    },
    [E, Y, L, ie]
  ), lt = Q(null), G = Q(null);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Ae.root, w].filter(Boolean).join(" "),
      "aria-label": N,
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
                const Z = it(I, v), he = x.has(Z), te = U === A, ye = !!I.disabled;
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
                    onClick: () => q(U),
                    children: ps(I)
                  },
                  Z
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
              onClick: se,
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
              onClick: ue,
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
                const Z = it(I, v), he = j.has(Z), te = U === L, ye = !!I.disabled;
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
                    onClick: () => ie(U),
                    children: ps(I)
                  },
                  Z
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
const Cv = "_root_1qxsp_1", Dv = "_header_1qxsp_8", Ev = "_title_1qxsp_15", zv = "_navBtn_1qxsp_20", Mv = "_resources_1qxsp_39", Iv = "_resource_1qxsp_39", Av = "_grid_1qxsp_50", jv = "_timeCol_1qxsp_55", Tv = "_timeCell_1qxsp_61", Pv = "_dayCol_1qxsp_66", Lv = "_dayHeader_1qxsp_73", Rv = "_slot_1qxsp_81", Bv = "_event_1qxsp_91", wt = {
  root: Cv,
  header: Dv,
  title: Ev,
  navBtn: zv,
  resources: Mv,
  resource: Iv,
  grid: Av,
  timeCol: jv,
  timeCell: Tv,
  dayCol: Pv,
  dayHeader: Lv,
  slot: Rv,
  event: Bv
};
function Cr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ow({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: s,
  resources: l,
  onEventClick: c,
  onSlotClick: u,
  ariaLabel: r = "Scheduler",
  className: a
}) {
  const [i, f] = W(
    n ?? /* @__PURE__ */ new Date()
  ), d = n ?? i, k = (p) => {
    n || f(p), s?.(p);
  }, g = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (p, b) => {
    const h = new Date(d);
    return h.setDate(d.getDate() - d.getDay() + b), h;
  }) : Array.from({ length: 30 }, (p, b) => {
    const h = new Date(d);
    return h.setDate(1 + b), h;
  }), m = Array.from({ length: 12 }, (p, b) => 8 + b);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [wt.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ z("div", { className: wt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: wt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(d);
                p.setDate(p.getDate() - 7), k(p);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: wt.title, children: d.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: wt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const p = new Date(d);
                p.setDate(p.getDate() + 7), k(p);
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
          /* @__PURE__ */ o("div", { className: wt.timeCol, role: "presentation", children: m.map((p) => /* @__PURE__ */ z("div", { className: wt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          g.map((p) => /* @__PURE__ */ z(
            "div",
            {
              className: wt.dayCol,
              role: "presentation",
              title: p.toLocaleDateString(),
              onClick: () => u?.({ date: p }),
              tabIndex: 0,
              "aria-label": p.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: wt.dayHeader, children: p.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                m.map((b) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: wt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(p);
                      h.setHours(b), u?.({ date: h });
                    }
                  },
                  b
                )),
                e.filter((b) => b.start.toDateString() === p.toDateString()).map((b) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: wt.event,
                    "aria-label": `${b.title} ${Cr(b.start)} - ${Cr(b.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: b }),
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
const Fv = "_root_dj5ne_1", Hv = "_header_dj5ne_8", qv = "_headerCell_dj5ne_15", Kv = "_timeline_dj5ne_21", Wv = "_row_dj5ne_26", Uv = "_taskName_dj5ne_32", Vv = "_timelineCell_dj5ne_37", Gv = "_bar_dj5ne_43", Xv = "_progress_dj5ne_56", Yv = "_dep_dj5ne_61", Yt = {
  root: Fv,
  header: Hv,
  headerCell: qv,
  timeline: Kv,
  row: Wv,
  taskName: Uv,
  timelineCell: Vv,
  bar: Gv,
  progress: Xv,
  dep: Yv
};
function Sw({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: s = "Gantt",
  className: l
}) {
  const [c, u] = W(null);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Yt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": s,
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
        e.map((r) => /* @__PURE__ */ z(
          "div",
          {
            className: Yt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ o("div", { className: Yt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ z("div", { className: Yt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Yt.bar,
                    role: "button",
                    "aria-label": `${r.name} ${r.start.toLocaleDateString()} - ${r.end.toLocaleDateString()}${r.progress !== void 0 ? `, ${r.progress}% complete` : ""}`,
                    "aria-pressed": c === r.id,
                    tabIndex: 0,
                    onClick: () => {
                      u(r.id), n?.({ task: r });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), u(r.id), n?.({ task: r }));
                    },
                    children: /* @__PURE__ */ o(
                      "div",
                      {
                        className: Yt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((a) => /* @__PURE__ */ o("svg", { className: Yt.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
          r.id
        ))
      ]
    }
  );
}
const Zv = "_root_4b64f_1", Jv = "_fields_4b64f_6", Qv = "_chip_4b64f_13", e2 = "_table_4b64f_35", t2 = "_totalRow_4b64f_55", n2 = "_total_4b64f_55", Pn = {
  root: Zv,
  fields: Jv,
  chip: Qv,
  table: e2,
  totalRow: t2,
  total: n2
}, ms = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function ts(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Cw({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: s = [],
  onFieldsChange: l,
  ariaLabel: c = "Pivot table",
  className: u
}) {
  const r = t, a = n, i = s, f = (b, h, _) => {
    const y = b === "row" ? r.filter((N) => N.property !== h) : r, w = b === "col" ? a.filter((N) => N.property !== h) : a, v = b === "agg" ? i.filter((N) => !(N.property === h && N.aggregate === _)) : i;
    l?.({
      rowFields: y,
      columnFields: w,
      aggregateFields: v
    });
  }, d = (b, h) => h.map((_) => String(b[_.property])).join(""), k = [
    ...new Set(r.length ? e.map((b) => d(b, r)) : [""])
  ].sort(), g = [
    ...new Set(a.length ? e.map((b) => d(b, a)) : [""])
  ].sort(), m = (b, h, _) => {
    const y = e.filter(
      (v) => d(v, r) === b && d(v, a) === h
    ), w = y.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !w.length && _.aggregate !== "Count" ? 0 : ms[_.aggregate](
      _.aggregate === "Count" ? y.map(() => 1) : w
    );
  }, p = (b, h, _, y) => /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      className: Pn.chip,
      "aria-label": `Remove ${b} field ${_}`,
      onClick: () => f(b, h, y),
      children: [
        _,
        y ? ` (${y})` : ""
      ]
    },
    `${b}-${_}-${y ?? ""}`
  );
  return /* @__PURE__ */ z("div", { className: [Pn.root, u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z("div", { className: Pn.fields, children: [
      r.map((b) => p("row", b.property, b.title ?? b.property)),
      a.map((b) => p("col", b.property, b.title ?? b.property)),
      i.map(
        (b) => p("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ z("table", { className: Pn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ z("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: r.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        g.map((b) => /* @__PURE__ */ o("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ z("tbody", { children: [
        k.map((b) => /* @__PURE__ */ z("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: b || "—" }),
          g.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: ts(
                m(
                  b,
                  h,
                  i[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: i.length ? ts(m(b, h, i[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: Pn.total, children: i.length ? ts(
            ms[i[0].aggregate](
              g.flatMap(
                (h) => e.filter(
                  (_) => d(_, r) === b && d(_, a) === h
                ).map((_) => Number(_[i[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ z("tr", { className: Pn.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          g.map((b) => /* @__PURE__ */ o("td", { children: i.length ? ts(
            ms[i[0].aggregate](
              e.filter((h) => d(h, a) === b).map((h) => Number(h[i[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, b)),
          /* @__PURE__ */ o("td", { children: i.length ? ts(
            ms[i[0].aggregate](
              e.map((b) => Number(b[i[0].property])).filter((b) => !Number.isNaN(b))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const s2 = "_root_1r7co_1", r2 = "_reverse_1r7co_10", o2 = "_item_1r7co_14", l2 = "_marker_1r7co_35", a2 = "_body_1r7co_46", i2 = "_label_1r7co_50", c2 = "_content_1r7co_56", $n = {
  root: s2,
  reverse: r2,
  item: o2,
  marker: l2,
  body: a2,
  label: i2,
  content: c2
};
function Dw({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: s
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [$n.root, t ? $n.reverse : "", s].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((c, u) => /* @__PURE__ */ z("li", { className: $n.item, children: [
        /* @__PURE__ */ o("span", { className: $n.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ z("div", { className: $n.body, children: [
          /* @__PURE__ */ o("div", { className: $n.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ o("div", { className: $n.content, children: c.content })
        ] })
      ] }, u))
    }
  );
}
const d2 = "_root_rm4d8_1", u2 = "_header_rm4d8_13", f2 = "_headCell_rm4d8_22", _2 = "_row_rm4d8_32", h2 = "_cell_rm4d8_37", ns = {
  root: d2,
  header: u2,
  headCell: f2,
  row: _2,
  cell: h2
};
function Ew({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: s,
  columns: l = [],
  ariaLabel: c = "Virtual grid",
  className: u
}) {
  const [r, a] = W(
    /* @__PURE__ */ new Map()
  ), [i, f] = W(0), d = Q(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), g = Math.max(0, Math.floor(i / t) - 3), m = Math.min(e, g + k + 6), p = R(
    (h, _) => {
      let y = !1;
      for (let w = h; w < _; w++)
        !r.has(w) && !d.current.has(w) && (y = !0);
      if (y) {
        for (let w = h; w < _; w++) d.current.add(w);
        s({ skip: h, top: _ }).then((w) => {
          a((v) => {
            const N = new Map(v);
            return w.forEach(($, C) => N.set(h + C, $)), N;
          });
          for (let v = h; v < _; v++) d.current.delete(v);
        });
      }
    },
    [r, s]
  );
  fe(() => {
    p(g, m);
  }, [g, m]);
  const b = [];
  for (let h = g; h < m; h++) {
    const _ = r.get(h) ?? {};
    b.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: ns.row,
          role: "row",
          style: { height: t },
          children: l.map((y) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: ns.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(_[y.property] ?? "")
            },
            y.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ z(
    "div",
    {
      className: [ns.root, u].filter(Boolean).join(" "),
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
        /* @__PURE__ */ o("div", { style: { height: g * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: ns.header, role: "row", children: l.map((h) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: ns.headCell,
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
            style: { height: Math.max(0, (e - m) * t) },
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
    constructor(r, a, i, f) {
      if (this.version = r, this.errorCorrectionLevel = a, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let d = [];
      for (let g = 0; g < this.size; g++) d.push(!1);
      for (let g = 0; g < this.size; g++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(i);
      if (this.drawCodewords(k), f == -1) {
        let g = 1e9;
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m);
          const p = this.getPenaltyScore();
          p < g && (f = m, g = p), this.applyMask(m);
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
    static encodeText(r, a) {
      const i = e.QrSegment.makeSegments(r);
      return t.encodeSegments(i, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(r, a) {
      const i = e.QrSegment.makeBytes(r);
      return t.encodeSegments([i], a);
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
    static encodeSegments(r, a, i = 1, f = 40, d = -1, k = !0) {
      if (!(t.MIN_VERSION <= i && i <= f && f <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let g, m;
      for (g = i; ; g++) {
        const _ = t.getNumDataCodewords(g, a) * 8, y = c.getTotalBits(r, g);
        if (y <= _) {
          m = y;
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
        k && m <= t.getNumDataCodewords(g, _) * 8 && (a = _);
      let p = [];
      for (const _ of r) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(g), p);
        for (const y of _.getData()) p.push(y);
      }
      l(p.length == m);
      const b = t.getNumDataCodewords(g, a) * 8;
      l(p.length <= b), n(0, Math.min(4, b - p.length), p), n(0, (8 - p.length % 8) % 8, p), l(p.length % 8 == 0);
      for (let _ = 236; p.length < b; _ ^= 253)
        n(_, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (_, y) => h[y >>> 3] |= _ << 7 - (y & 7)
      ), new t(g, a, h, d);
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
    getModule(r, a) {
      return 0 <= r && r < this.size && 0 <= a && a < this.size && this.modules[a][r];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++)
        this.setFunctionModule(6, i, i % 2 == 0), this.setFunctionModule(i, 6, i % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), a = r.length;
      for (let i = 0; i < a; i++)
        for (let f = 0; f < a; f++)
          i == 0 && f == 0 || i == 0 && f == a - 1 || i == a - 1 && f == 0 || this.drawAlignmentPattern(r[i], r[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const a = this.errorCorrectionLevel.formatBits << 3 | r;
      let i = a;
      for (let d = 0; d < 10; d++) i = i << 1 ^ (i >>> 9) * 1335;
      const f = (a << 10 | i) ^ 21522;
      l(f >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, s(f, d));
      this.setFunctionModule(8, 7, s(f, 6)), this.setFunctionModule(8, 8, s(f, 7)), this.setFunctionModule(7, 8, s(f, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, s(f, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, s(f, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, s(f, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let r = this.version;
      for (let i = 0; i < 12; i++) r = r << 1 ^ (r >>> 11) * 7973;
      const a = this.version << 12 | r;
      l(a >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const f = s(a, i), d = this.size - 11 + i % 3, k = Math.floor(i / 3);
        this.setFunctionModule(d, k, f), this.setFunctionModule(k, d, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, a) {
      for (let i = -4; i <= 4; i++)
        for (let f = -4; f <= 4; f++) {
          const d = Math.max(Math.abs(f), Math.abs(i)), k = r + f, g = a + i;
          0 <= k && k < this.size && 0 <= g && g < this.size && this.setFunctionModule(k, g, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, a) {
      for (let i = -2; i <= 2; i++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            r + f,
            a + i,
            Math.max(Math.abs(f), Math.abs(i)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(r, a, i) {
      this.modules[a][r] = i, this.isFunction[a][r] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(r) {
      const a = this.version, i = this.errorCorrectionLevel;
      if (r.length != t.getNumDataCodewords(a, i))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a], d = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a], k = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), g = f - k % f, m = Math.floor(k / f);
      let p = [];
      const b = t.reedSolomonComputeDivisor(d);
      for (let _ = 0, y = 0; _ < f; _++) {
        let w = r.slice(
          y,
          y + m - d + (_ < g ? 0 : 1)
        );
        y += w.length;
        const v = t.reedSolomonComputeRemainder(w, b);
        _ < g && w.push(0), p.push(w.concat(v));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((y, w) => {
          (_ != m - d || w >= g) && h.push(y[_]);
        });
      return l(h.length == k), h;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let i = this.size - 1; i >= 1; i -= 2) {
        i == 6 && (i = 5);
        for (let f = 0; f < this.size; f++)
          for (let d = 0; d < 2; d++) {
            const k = i - d, m = (i + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[m][k] && a < r.length * 8 && (this.modules[m][k] = s(r[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == r.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(r) {
      if (r < 0 || r > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let i = 0; i < this.size; i++) {
          let f;
          switch (r) {
            case 0:
              f = (i + a) % 2 == 0;
              break;
            case 1:
              f = a % 2 == 0;
              break;
            case 2:
              f = i % 3 == 0;
              break;
            case 3:
              f = (i + a) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(i / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              f = i * a % 2 + i * a % 3 == 0;
              break;
            case 6:
              f = (i * a % 2 + i * a % 3) % 2 == 0;
              break;
            case 7:
              f = ((i + a) % 2 + i * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][i] && f && (this.modules[a][i] = !this.modules[a][i]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let d = 0; d < this.size; d++) {
        let k = !1, g = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[d][p] == k ? (g++, g == 5 ? r += t.PENALTY_N1 : g > 5 && r++) : (this.finderPenaltyAddHistory(g, m), k || (r += this.finderPenaltyCountPatterns(m) * t.PENALTY_N3), k = this.modules[d][p], g = 1);
        r += this.finderPenaltyTerminateAndCount(k, g, m) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let k = !1, g = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][d] == k ? (g++, g == 5 ? r += t.PENALTY_N1 : g > 5 && r++) : (this.finderPenaltyAddHistory(g, m), k || (r += this.finderPenaltyCountPatterns(m) * t.PENALTY_N3), k = this.modules[p][d], g = 1);
        r += this.finderPenaltyTerminateAndCount(k, g, m) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let k = 0; k < this.size - 1; k++) {
          const g = this.modules[d][k];
          g == this.modules[d][k + 1] && g == this.modules[d + 1][k] && g == this.modules[d + 1][k + 1] && (r += t.PENALTY_N2);
        }
      let a = 0;
      for (const d of this.modules)
        a = d.reduce((k, g) => k + (g ? 1 : 0), a);
      const i = this.size * this.size, f = Math.ceil(Math.abs(a * 20 - i * 10) / i) - 1;
      return l(0 <= f && f <= 9), r += f * t.PENALTY_N4, l(0 <= r && r <= 2568888), r;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const r = Math.floor(this.version / 7) + 2, a = Math.floor(
          (this.version * 8 + r * 3 + 5) / (r * 4 - 4)
        ) * 2;
        let i = [6];
        for (let f = this.size - 7; i.length < r; f -= a)
          i.splice(1, 0, f);
        return i;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(r) {
      if (r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * r + 128) * r + 64;
      if (r >= 2) {
        const i = Math.floor(r / 7) + 2;
        a -= (25 * i - 10) * i - 55, r >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(r, a) {
      return Math.floor(t.getNumRawDataModules(r) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][r] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][r];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(r) {
      if (r < 1 || r > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let f = 0; f < r - 1; f++) a.push(0);
      a.push(1);
      let i = 1;
      for (let f = 0; f < r; f++) {
        for (let d = 0; d < a.length; d++)
          a[d] = t.reedSolomonMultiply(a[d], i), d + 1 < a.length && (a[d] ^= a[d + 1]);
        i = t.reedSolomonMultiply(i, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, a) {
      let i = a.map((f) => 0);
      for (const f of r) {
        const d = f ^ i.shift();
        i.push(0), a.forEach(
          (k, g) => i[g] ^= t.reedSolomonMultiply(k, d)
        );
      }
      return i;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(r, a) {
      if (r >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let i = 0;
      for (let f = 7; f >= 0; f--)
        i = i << 1 ^ (i >>> 7) * 285, i ^= (a >>> f & 1) * r;
      return l(i >>> 8 == 0), i;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(r) {
      const a = r[1];
      l(a <= this.size * 3);
      const i = a > 0 && r[2] == a && r[3] == a * 3 && r[4] == a && r[5] == a;
      return (i && r[0] >= a * 4 && r[6] >= a ? 1 : 0) + (i && r[6] >= a * 4 && r[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(r, a, i) {
      return r && (this.finderPenaltyAddHistory(a, i), a = 0), a += this.size, this.finderPenaltyAddHistory(a, i), this.finderPenaltyCountPatterns(i);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(r, a) {
      a[0] == 0 && (r += this.size), a.pop(), a.unshift(r);
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
  function n(u, r, a) {
    if (r < 0 || r > 31 || u >>> r)
      throw new RangeError("Value out of range");
    for (let i = r - 1; i >= 0; i--)
      a.push(u >>> i & 1);
  }
  function s(u, r) {
    return (u >>> r & 1) != 0;
  }
  function l(u) {
    if (!u) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(r, a, i) {
      if (this.mode = r, this.numChars = a, this.bitData = i, a < 0) throw new RangeError("Invalid argument");
      this.bitData = i.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(r) {
      let a = [];
      for (const i of r) n(i, 8, a);
      return new c(c.Mode.BYTE, r.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!c.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let i = 0; i < r.length; ) {
        const f = Math.min(r.length - i, 3);
        n(parseInt(r.substring(i, i + f), 10), f * 3 + 1, a), i += f;
      }
      return new c(c.Mode.NUMERIC, r.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(r) {
      if (!c.isAlphanumeric(r))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], i;
      for (i = 0; i + 2 <= r.length; i += 2) {
        let f = c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(i)) * 45;
        f += c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(i + 1)), n(f, 11, a);
      }
      return i < r.length && n(
        c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(i)),
        6,
        a
      ), new c(c.Mode.ALPHANUMERIC, r.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(r) {
      return r == "" ? [] : c.isNumeric(r) ? [c.makeNumeric(r)] : c.isAlphanumeric(r) ? [c.makeAlphanumeric(r)] : [c.makeBytes(c.toUtf8ByteArray(r))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(r) {
      let a = [];
      if (r < 0)
        throw new RangeError("ECI assignment value out of range");
      if (r < 128) n(r, 8, a);
      else if (r < 16384)
        n(2, 2, a), n(r, 14, a);
      else if (r < 1e6)
        n(6, 3, a), n(r, 21, a);
      else throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(r) {
      return c.NUMERIC_REGEX.test(r);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(r) {
      return c.ALPHANUMERIC_REGEX.test(r);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(r, a) {
      let i = 0;
      for (const f of r) {
        const d = f.mode.numCharCountBits(a);
        if (f.numChars >= 1 << d) return 1 / 0;
        i += 4 + d + f.bitData.length;
      }
      return i;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let a = [];
      for (let i = 0; i < r.length; i++)
        r.charAt(i) != "%" ? a.push(r.charCodeAt(i)) : (a.push(parseInt(r.substring(i + 1, i + 3), 16)), i += 2);
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
const p2 = "_root_1leml_1", m2 = {
  root: p2
}, g2 = {
  low: Ft.QrCode.Ecc.LOW,
  medium: Ft.QrCode.Ecc.MEDIUM,
  quartile: Ft.QrCode.Ecc.QUARTILE,
  high: Ft.QrCode.Ecc.HIGH
};
function zw({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: s = "medium",
  margin: l = 4,
  ariaLabel: c,
  className: u,
  onError: r
}) {
  const a = c ?? `QR code for ${e}`, i = Q(null), f = Ws("(prefers-color-scheme: dark)"), [d, k] = W(null);
  fe(() => {
    const w = document.documentElement;
    k(w.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      k(w.dataset.theme ?? null);
    });
    return v.observe(w, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const g = be(() => {
    try {
      return Ft.QrCode.encodeText(e, g2[s]);
    } catch {
      return null;
    }
  }, [e, s]), m = Q(null);
  fe(() => {
    if (g !== null) {
      m.current = null;
      return;
    }
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), (m.current?.value !== e || m.current?.onError !== r) && (m.current = { value: e, onError: r }, r?.(w));
  }, [g, e, r]);
  const p = Math.max(0, Math.floor(l)), b = [m2.root, u].filter(Boolean).join(" ");
  if (fe(() => {
    if (n !== "canvas" || g === null) return;
    const w = i.current, v = w?.getContext("2d");
    if (!w || !v) return;
    const N = getComputedStyle(w), $ = N.getPropertyValue("--dx-text-color").trim() || "#000", C = N.getPropertyValue("--dx-surface-color").trim() || "#fff";
    b2(v, g, t, p, $, C);
  }, [n, g, t, p, f, d]), g === null)
    return /* @__PURE__ */ o("div", { className: b, role: "img", "aria-label": a, "data-qr-error": "true" });
  const h = g.size + p * 2, _ = t / h;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: i,
        className: b,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const y = [];
  for (let w = 0; w < g.size; w++)
    for (let v = 0; v < g.size; v++)
      g.getModule(v, w) && y.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (v + p) * _,
            y: (w + p) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${w}`
        )
      );
  return /* @__PURE__ */ z(
    "svg",
    {
      className: b,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function b2(e, t, n, s, l, c) {
  const u = n / (t.size + s * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let r = 0; r < t.size; r++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, r) && e.fillRect((a + s) * u, (r + s) * u, u + 0.5, u + 0.5);
}
const y2 = "_root_1v9la_1", x2 = "_value_1v9la_9", Dr = {
  root: y2,
  value: x2
}, Er = [
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
], zr = 104, v2 = 106;
function k2(e) {
  const t = [zr];
  for (let s = 0; s < e.length; s++) {
    const l = e.charCodeAt(s);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = zr;
  for (let s = 1; s < t.length; s++) n += s * t[s];
  return t.push(n % 103, v2), t;
}
function Mw({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: s = !1,
  ariaLabel: l,
  className: c
}) {
  const u = l ?? `Barcode ${e}`, r = be(() => {
    const a = [];
    let i = 0;
    for (const f of k2(e)) {
      const d = Er[f] ?? Er[0];
      for (let k = 0; k < d.length; k++) {
        const g = Number(d[k]);
        k % 2 === 0 && a.push({ x: i, w: g }), i += g;
      }
    }
    return { modules: a, total: i };
  }, [e]);
  return /* @__PURE__ */ z("span", { className: [Dr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${r.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": u,
        "data-value": e,
        children: [
          /* @__PURE__ */ o(
            "rect",
            {
              width: r.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          r.modules.map((a, i) => /* @__PURE__ */ o(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            i
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ o("span", { className: Dr.value, children: e })
  ] });
}
const w2 = "_root_16i43_1", $2 = "_svg_16i43_10", N2 = "_gridline_16i43_15", O2 = "_tickLabel_16i43_21", S2 = "_axisTitle_16i43_27", C2 = "_dataLabel_16i43_34", D2 = "_gaugeValue_16i43_40", E2 = "_legend_16i43_47", z2 = "_legendItem_16i43_55", M2 = "_swatch_16i43_63", I2 = "_tooltip_16i43_70", A2 = "_visuallyHidden_16i43_84", We = {
  root: w2,
  svg: $2,
  gridline: N2,
  tickLabel: O2,
  axisTitle: S2,
  dataLabel: C2,
  gaugeValue: D2,
  legend: E2,
  legendItem: z2,
  swatch: M2,
  tooltip: I2,
  visuallyHidden: A2
}, Mr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Jr = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), j2 = /* @__PURE__ */ new Set([...Jr, "heatmap"]);
function T2(e, t, n) {
  const s = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(s / 4))), c = Math.floor(e / l) * l, u = Math.ceil(t / l) * l, r = [];
  for (let a = c; a <= u + 1e-9; a += l)
    r.push(Number(a.toFixed(6)));
  return { min: c, max: u, step: l, ticks: r };
}
function P2(e) {
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
function L2(e, t, n, s, l) {
  const { pad: c, plotW: u, plotH: r } = e, a = c.l + u / 2, i = c.t + r / 2, f = Math.min(u, r) / 3, d = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, k = s.reduce((m, p) => m + (Number(p.val) || 0), 0);
  let g = -90;
  return pn(
    n,
    t,
    s.map((m, p) => {
      const b = k ? m.val / k * 360 : 0, h = g, _ = g + b;
      g = _;
      const y = b > 180 ? 1 : 0, w = a + f * Math.cos(mt(h)), v = i + f * Math.sin(mt(h)), N = a + f * Math.cos(mt(_)), $ = i + f * Math.sin(mt(_)), C = a + d * Math.cos(mt(_)), M = i + d * Math.sin(mt(_)), D = a + d * Math.cos(mt(h)), E = i + d * Math.sin(mt(h)), O = d ? `M ${w} ${v} A ${f} ${f} 0 ${y} 1 ${N} ${$} L ${C} ${M} A ${d} ${d} 0 ${y} 0 ${D} ${E} Z` : `M ${a} ${i} L ${w} ${v} A ${f} ${f} 0 ${y} 1 ${N} ${$} Z`, x = (h + _) / 2, S = a + (f + 12) * Math.cos(mt(x)), j = i + (f + 12) * Math.sin(mt(x));
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: O,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(S, j, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: S,
            y: j,
            textAnchor: "middle",
            className: We.dataLabel,
            children: m.val
          }
        )
      ] }, p);
    })
  );
}
function R2(e, t, n, s, l) {
  const { pad: c, plotW: u, scale: r, xFor: a, yFor: i, categories: f } = e, d = new Map(f.map((k, g) => [k, g]));
  return pn(
    n,
    t,
    s.map((k, g) => {
      const m = d.get(k.cat) ?? 0, p = Number(s[g].cat), b = Number.isNaN(p) ? a(m) : c.l + (p - r.min) / (r.max - r.min || 1) * u, h = i(k.val), _ = t.type === "bubble" && k.size !== void 0 ? Math.max(4, Math.min(12, k.size / 10)) : 4;
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            cx: b,
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
            cx: b,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, h, `${t.title ?? k.cat}: ${k.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, k.cat, k.val, k.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, g);
    })
  );
}
function B2(e, t, n, s, l) {
  const { scale: c, xFor: u, yFor: r, categories: a, series: i } = e, f = new Map(a.map((m, p) => [m, p])), d = (m) => {
    if (!t.stack) return c.min;
    let p = 0;
    for (let b = 0; b < n; b++) {
      const h = i[b];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (y) => String(y[h.categoryProperty] ?? "") === m
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, k = s.map((m) => {
    const p = f.get(m.cat) ?? 0, b = d(m.cat);
    return `${p === 0 ? "M" : "L"} ${u(p)} ${r(b + m.val)}`;
  }).join(" "), g = s.map((m) => {
    const p = f.get(m.cat) ?? 0, b = d(m.cat);
    return `${p === 0 ? "M" : "L"} ${u(p)} ${r(b)}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ z(tt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${k} L ${u(s.length - 1)} ${r(d(s[s.length - 1].cat))} L ${u(0)} ${r(d(s[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: k, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: g, fill: "none", stroke: "transparent" }),
      s.map((m, p) => {
        const b = f.get(m.cat) ?? 0, h = d(m.cat), _ = u(b), y = r(h + m.val);
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: _,
              cy: y,
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
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(_, y, `${t.title ?? m.cat}: ${m.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, m.cat, m.val, m.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: _,
              y: y - 8,
              textAnchor: "middle",
              className: We.dataLabel,
              children: m.val
            }
          )
        ] }, p);
      })
    ] })
  );
}
function F2(e, t, n, s, l) {
  const { pad: c, plotW: u, plotH: r, scale: a, xFor: i, yFor: f, categories: d, series: k } = e, g = new Map(d.map((p, b) => [p, b])), m = t.type === "bar";
  return pn(
    n,
    t,
    s.map((p, b) => {
      const h = g.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let x = 0; x < n; x++) {
          const S = k[x];
          if (S?.stack !== t.stack) continue;
          const j = S.data.find(
            (T) => String(T[S.categoryProperty] ?? "") === p.cat
          );
          j && (_ += Number(j[S.valueProperty]) || 0);
        }
      const y = _ + p.val, w = k.filter(
        (x) => !x.stack || x.stack === t.stack
      ).length, v = u / Math.max(1, d.length), N = m ? 18 : Math.max(12, v / (t.stack ? 1 : k.length) - 4), $ = m ? c.l + _ / (a.max - a.min || 1) * u : i(h) - N / 2 + (t.stack ? 0 : n % w * N), C = m ? c.t + h * r / Math.max(1, d.length) + 4 : f(y), M = m ? p.val / (a.max - a.min || 1) * u : N - 4, D = m ? 16 : f(_) - f(y), E = m ? c.l + _ / (a.max - a.min || 1) * u : $, O = m ? c.t + h * r / Math.max(1, d.length) + 4 : C;
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: E,
            y: O,
            width: m ? M : N - 4,
            height: D,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              E + (m ? M : N) / 2,
              O,
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
            x: E + (m ? M : N) / 2,
            y: O - 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: p.val
          }
        )
      ] }, b);
    })
  );
}
function H2(e, t, n, s, l) {
  const { pad: c, plotW: u, plotH: r, scale: a, tooltipVisible: i, showTip: f, hideTip: d } = e, k = c.l + u / 2, g = c.t + r * 0.78, m = Math.min(u, r) * 0.36, p = 135, b = 270, h = s.reduce((N, $) => N + (Number($.val) || 0), 0), _ = a.max - a.min || 1, y = Math.min(1, Math.max(0, (h - a.min) / _)), w = (N, $) => {
    const [C, M] = [
      k + m * Math.cos(mt(N)),
      g + m * Math.sin(mt(N))
    ], [D, E] = [
      k + m * Math.cos(mt($)),
      g + m * Math.sin(mt($))
    ], O = $ - N > 180 ? 1 : 0;
    return `M ${C} ${M} A ${m} ${m} 0 ${O} 1 ${D} ${E}`;
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
          d: w(p, p + b),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: w(p, p + b * y),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: k, y: g - 4, textAnchor: "middle", className: We.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: w(p, p + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => i && f(k, g - m, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => d(),
          onClick: () => e.handleClick(t, s[0]?.cat ?? "", h, s[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: k,
          y: g + m + 18,
          textAnchor: "middle",
          className: We.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Qr(e) {
  const { pad: t, plotW: n, plotH: s, categories: l } = e, c = t.l + n / 2, u = t.t + s / 2, r = Math.min(n, s) / 2 - 24, a = Math.max(3, l.length), i = (d) => mt(-90 + 360 * d / a);
  return { cx: c, cy: u, radius: r, angleFor: i, vertexFor: (d, k) => {
    const g = i(d);
    return [
      c + r * k * Math.cos(g),
      u + r * k * Math.sin(g)
    ];
  } };
}
function q2(e) {
  const { categories: t } = e, { cx: n, cy: s, vertexFor: l } = Qr(e);
  return /* @__PURE__ */ z("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((u) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((r, a) => l(a, u).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      u
    )),
    t.map((u, r) => {
      const [a, i] = l(r, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: s,
          x2: a,
          y2: i,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        u
      );
    })
  ] });
}
function K2(e, t, n, s, l) {
  const { categories: c, tooltipVisible: u, showTip: r, hideTip: a } = e, { cx: i, cy: f, radius: d, angleFor: k, vertexFor: g } = Qr(e), m = e.scale.max || 1, p = (h) => s.find((_) => _.cat === h)?.val ?? 0, b = c.map((h, _) => {
    const y = Math.min(1, Math.max(0, p(h) / m)), [w, v] = g(_, y);
    return `${w},${v}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ z(tt, { children: [
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
      c.map((h, _) => {
        const y = Math.min(1, Math.max(0, p(h) / m)), [w, v] = g(_, y), [N, $] = g(_, 1);
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: w,
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
              cx: w,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => u && r(N, $, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const C = s.find((M) => M.cat === h);
                C && e.handleClick(t, C.cat, C.val, C.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: i + (d + 14) * Math.cos(k(_)),
              y: f + (d + 14) * Math.sin(k(_)) + 4,
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
function W2(e, t, n, s, l) {
  const { pad: c, plotW: u, plotH: r, tooltipVisible: a, showTip: i, hideTip: f } = e, d = s, k = Math.max(1, ...d.map((p) => Number(p.val) || 0)), g = r / Math.max(1, d.length), m = c.l + u / 2;
  return pn(
    n,
    t,
    d.map((p, b) => {
      const _ = Math.max(0, Number(p.val) || 0) / k * u, y = d[b + 1], w = y ? Math.max(0, Number(y.val) || 0) / k * u : _ * 0.7, v = c.t + b * g + 2, N = Math.max(4, g - 6), $ = 1 - b * (0.45 / Math.max(1, d.length));
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${m - _ / 2} ${v} L ${m + _ / 2} ${v} L ${m + w / 2} ${v + N} L ${m - w / 2} ${v + N} Z`,
            fill: l,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && i(m, v, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ z(
          "text",
          {
            x: m,
            y: v + N / 2 + 4,
            textAnchor: "middle",
            className: We.dataLabel,
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
function U2(e, t, n, s, l) {
  const { pad: c, plotW: u, plotH: r, categories: a, tooltipVisible: i, showTip: f, hideTip: d } = e, k = [];
  t.data.forEach((y) => {
    const w = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    k.includes(w) || k.push(w);
  });
  const g = s.map((y) => y.val).filter((y) => Number.isFinite(y)), m = g.length ? Math.min(...g) : 0, p = g.length ? Math.max(...g) : 1, b = u / Math.max(1, a.length), h = r / Math.max(1, k.length), _ = (y) => p === m ? 0.6 : 0.15 + 0.85 * ((y - m) / (p - m));
  return pn(
    n,
    t,
    /* @__PURE__ */ z(tt, { children: [
      k.map((y, w) => /* @__PURE__ */ o(
        "text",
        {
          x: c.l - 8,
          y: c.t + w * h + h / 2 + 4,
          textAnchor: "end",
          className: We.tickLabel,
          children: y
        },
        y
      )),
      s.map((y, w) => {
        const v = t.data[w], N = a.indexOf(y.cat), $ = k.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (N < 0 || $ < 0) return null;
        const C = c.l + N * b, M = c.t + $ * h;
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: C + 1,
              y: M + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, h - 2),
              fill: l,
              fillOpacity: _(y.val),
              onMouseEnter: () => i && f(C + b / 2, M, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => d(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: C + b / 2,
              y: M + h / 2 + 4,
              textAnchor: "middle",
              className: We.dataLabel,
              children: y.val
            }
          )
        ] }, w);
      })
    ] })
  );
}
function V2(e, t, n) {
  const s = P2(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return L2(e, t, n, s, l);
    case "scatter":
    case "bubble":
      return R2(e, t, n, s, l);
    case "line":
    case "area":
      return B2(e, t, n, s, l);
    case "gauge":
      return H2(e, t, n, s, l);
    case "radar":
      return K2(e, t, n, s, l);
    case "funnel":
      return W2(e, t, n, s, l);
    case "heatmap":
      return U2(e, t, n, s, l);
    default:
      return F2(e, t, n, s, l);
  }
}
function Iw({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: s,
  categoryAxis: l,
  showLegend: c = !0,
  tooltipVisible: u = !0,
  onSeriesClick: r,
  ariaLabel: a = "Chart",
  className: i
}) {
  const [f, d] = W(
    null
  ), k = be(() => {
    const D = /* @__PURE__ */ new Set();
    for (const E of e)
      for (const O of E.data) D.add(String(O[E.categoryProperty] ?? ""));
    return [...D];
  }, [e]), g = be(() => {
    const D = e.flatMap((O) => O.data.map((x) => Number(x[O.valueProperty]))).filter((O) => !Number.isNaN(O)), E = /* @__PURE__ */ new Map();
    for (const O of e) {
      if (!O.stack) continue;
      let x = E.get(O.stack);
      x || E.set(O.stack, x = /* @__PURE__ */ new Map());
      for (const S of O.data) {
        const j = String(S[O.categoryProperty] ?? ""), T = Number(S[O.valueProperty]);
        Number.isNaN(T) || x.set(j, (x.get(j) ?? 0) + T);
      }
    }
    for (const O of E.values()) D.push(...O.values());
    return D;
  }, [e]), m = s?.min ?? (g.length ? Math.min(0, ...g) : 0), p = s?.max ?? (g.length ? Math.max(...g) : 10), b = be(
    () => T2(m, p, s?.step),
    [m, p, s?.step]
  ), h = { t: 16, r: 16, b: 40, l: 56 }, _ = t - h.l - h.r, y = n - h.t - h.b, w = (D) => h.l + D / Math.max(1, k.length - 1) * _, v = (D) => h.t + (1 - (D - b.min) / (b.max - b.min || 1)) * y, N = (D, E) => E.color ?? Mr[D % Mr.length], $ = e.some((D) => Jr.has(D.type)), C = e.some((D) => j2.has(D.type)), M = {
    categories: k,
    scale: b,
    pad: h,
    plotW: _,
    plotH: y,
    xFor: w,
    yFor: v,
    colorFor: N,
    tooltipVisible: u,
    showTip: (D, E, O) => d({ x: D, y: E, text: O }),
    hideTip: () => d(null),
    handleClick: (D, E, O, x) => r?.({
      seriesTitle: D.title ?? "",
      category: E,
      value: O,
      item: x
    }),
    series: e
  };
  return /* @__PURE__ */ z(
    "figure",
    {
      className: [We.root, i].filter(Boolean).join(" "),
      role: "img",
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ z(
          "svg",
          {
            width: t,
            height: n,
            className: We.svg,
            role: "presentation",
            children: [
              $ && s?.gridlines !== !1 && b.ticks.map((D) => /* @__PURE__ */ o(
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
              C && l?.gridlines && k.map((D, E) => /* @__PURE__ */ o(
                "line",
                {
                  x1: w(E),
                  x2: w(E),
                  y1: h.t,
                  y2: h.t + y,
                  className: We.gridline
                },
                E
              )),
              $ && b.ticks.map((D) => /* @__PURE__ */ o(
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
              C && k.map((D, E) => /* @__PURE__ */ o(
                "text",
                {
                  x: w(E),
                  y: h.t + y + 16,
                  textAnchor: "middle",
                  className: We.tickLabel,
                  children: D
                },
                D
              )),
              $ && s?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: h.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${h.t + y / 2})`,
                  className: We.axisTitle,
                  children: s.title
                }
              ),
              C && l?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: h.l + _ / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: We.axisTitle,
                  children: l.title
                }
              ),
              e.some((D) => D.type === "radar") && q2(M),
              e.map((D, E) => V2(M, D, E))
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
              style: { backgroundColor: N(E, D) },
              "aria-hidden": "true"
            }
          ),
          D.title ?? `Series ${E + 1}`
        ] }, E)) }),
        /* @__PURE__ */ z(
          "table",
          {
            className: We.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: a }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ z("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (D) => D.data.map((E, O) => /* @__PURE__ */ z("tr", { children: [
                  /* @__PURE__ */ o("td", { children: D.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: D.rowProperty ? `${String(E[D.rowProperty] ?? "")} / ${String(E[D.categoryProperty] ?? "")}` : String(E[D.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(E[D.valueProperty] ?? "") })
                ] }, `${D.title}-${O}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function Aw({ query: e, children: t }) {
  return Ws(e) ? /* @__PURE__ */ o(tt, { children: t }) : null;
}
function jw({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function Tw() {
  const e = Q(null);
  return fe(() => {
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
  jd as ALERT_ICON,
  Wk as Accordion,
  Ck as Alert,
  Gk as AutoComplete,
  Ik as AutoGrid,
  qk as Avatar,
  Z2 as Badge,
  Mw as Barcode,
  jk as Body,
  bw as Breadcrumb,
  On as Button,
  Y2 as Card,
  ww as Carousel,
  Iw as Chart,
  vk as CheckBox,
  Yk as CheckBoxList,
  sw as ColorPicker,
  zk as Column,
  _w as ContextMenuProvider,
  Un as DEFAULT_OPERATOR_BY_TYPE,
  eb as DEFAULT_PALETTE,
  n1 as DEFAULT_THEMES,
  mk as DataFilter,
  gk as DataGrid,
  bk as DataList,
  rw as DatePicker,
  Ec as Dialog,
  Nk as DialogProvider,
  Vk as DropDown,
  uw as DropZone,
  tk as EmptyState,
  jr as FILTER_OPERATORS,
  gw as FabMenu,
  nk as Field,
  rk as Fieldset,
  Nm as Footer,
  ok as Form,
  sk as FormField,
  Sw as Gantt,
  Cm as Header,
  ke as Icon,
  xk as Input,
  yk as Label,
  Ak as Layout,
  yw as Link,
  Xk as ListBox,
  jw as LiveRegion,
  tw as Mask,
  Aw as MediaQuery,
  cy as Menu,
  Xr as MenuItem,
  nw as Numeric,
  Ka as Pager,
  pw as PanelMenu,
  hw as PanelMenuItem,
  ew as Password,
  Nw as PickList,
  Cw as Pivot,
  mw as ProfileMenu,
  Pk as Progress,
  zw as QRCode,
  Zk as RadioButtonList,
  ow as Rating,
  Ek as Row,
  Ow as Scheduler,
  iw as SecurityCode,
  Sn as Select,
  Jk as SelectBar,
  Bm as Sidebar,
  Tk as SidebarToggle,
  cw as SignaturePad,
  Dk as Skeleton,
  lw as Slider,
  Qk as SplitButton,
  vw as Splitter,
  Mk as Stack,
  Q2 as Stat,
  xw as Steps,
  kk as Switch,
  ek as Table,
  Kk as Tabs,
  Wc as Text,
  Uk as TextArea,
  lc as TextBox,
  Lk as ThemeSwitcher,
  Rk as ThemeToggle,
  aw as TimeSpanPicker,
  Dw as Timeline,
  Sk as ToastProvider,
  kw as Toc,
  c1 as ToggleButton,
  wk as Tooltip,
  $w as Tree,
  dw as Upload,
  Ew as VirtualGrid,
  Ja as aggregateValue,
  Pr as applyFilters,
  Za as applyGridState,
  or as collectGroupKeys,
  Nn as columnValue,
  fk as compare,
  hk as custom,
  Ga as cycleSort,
  ar as defaultOperatorForType,
  ak as email,
  yr as formatMasked,
  ys as formatValue,
  Fk as getAppearance,
  bs as getByPath,
  Bk as getTheme,
  Wa as groupItems,
  J2 as iconNames,
  Tr as matchesFilters,
  dk as maxLength,
  ck as minLength,
  Ya as paginate,
  ik as pattern,
  uk as range,
  lk as required,
  _k as requiredTrue,
  Ir as resolveVariant,
  Zl as runValidators,
  h1 as setAppearance,
  _1 as setTheme,
  os as shadeClass,
  ha as sortItems,
  Xa as sortedItems,
  gr as subscribe,
  Qa as toCsv,
  ca as toFilterString,
  _a as toODataFilterString,
  fw as useContextMenu,
  $k as useDialog,
  Yl as useFormContext,
  pk as useFormField,
  Tw as useLiveRegion,
  Ws as useMediaQuery,
  Hk as useThemeService,
  Ok as useToast
};
