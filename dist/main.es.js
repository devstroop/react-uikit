import { jsx as o, jsxs as M, Fragment as rt } from "react/jsx-runtime";
import { forwardRef as Le, useId as Pe, isValidElement as gt, cloneElement as Ps, useState as W, useRef as Q, useCallback as R, useMemo as be, useContext as hn, createContext as Ln, useEffect as _e, Fragment as Ls, useLayoutEffect as zs, Children as os, useImperativeHandle as Rs } from "react";
function rs(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Vr = "_button_eyvws_1", Gr = "_filled_eyvws_36", Xr = "_flat_eyvws_55", Yr = "_outlined_eyvws_58", Zr = "_text_eyvws_63", Jr = "_loading_eyvws_506", Qr = "_spinner_eyvws_509", eo = "_xs_eyvws_525", to = "_sm_eyvws_531", no = "_md_eyvws_537", so = "_lg_eyvws_543", ro = "_xl_eyvws_549", oo = "_iconOnly_eyvws_555", lo = "_fullWidth_eyvws_585", Yt = {
  button: Vr,
  filled: Gr,
  flat: Xr,
  outlined: Yr,
  text: Zr,
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
  loading: Jr,
  spinner: Qr,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: eo,
  sm: to,
  md: no,
  lg: so,
  xl: ro,
  iconOnly: oo,
  fullWidth: lo
};
function ao(e, t) {
  const n = t, s = e ?? "filled";
  return { variant: s === "filled" || s === "flat" || s === "outlined" || s === "text" ? s : "filled", style: n ?? "primary" };
}
const Pn = Le(
  function(t, n) {
    const {
      variant: s = "filled",
      severity: l,
      shade: i = "default",
      size: d = "md",
      fullWidth: r = !1,
      iconOnly: a = !1,
      loading: c = !1,
      visible: f = !0,
      className: u,
      disabled: k,
      children: v,
      ...b
    } = t;
    if (f === !1) return null;
    const p = ao(s, l), h = p.style === "light" || p.style === "dark" ? null : rs(i), _ = [
      Yt.button,
      Yt[p.variant],
      Yt[`style-${p.style}`],
      h ? Yt[h] : null,
      Yt[d],
      r ? Yt.fullWidth : null,
      a ? Yt.iconOnly : null,
      c ? Yt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), m = /* @__PURE__ */ M(rt, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Yt.spinner }) : null,
      v
    ] }), w = t.href;
    if (w != null) {
      const { onClick: $, ...C } = b, z = k || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: w,
          className: _,
          "aria-disabled": z || void 0,
          "aria-busy": c || void 0,
          onClick: (D) => {
            if (z) {
              D.preventDefault();
              return;
            }
            $?.(D);
          },
          ...C,
          children: m
        }
      );
    }
    const { type: y = "button", ...N } = b;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: y,
        className: _,
        disabled: k || c,
        "aria-busy": c || void 0,
        ...N,
        children: m
      }
    );
  }
), io = "_card_4vcae_1", co = "_elevated_4vcae_8", uo = "_filled_4vcae_13", fo = "_outlined_4vcae_18", _o = "_interactive_4vcae_22", ho = "_text_4vcae_30", po = "_header_4vcae_46", mo = "_body_4vcae_53", go = "_footer_4vcae_63", Fn = {
  card: io,
  elevated: co,
  filled: uo,
  outlined: fo,
  interactive: _o,
  text: ho,
  header: po,
  body: mo,
  footer: go
}, A2 = Le(function({
  variant: t = "elevated",
  header: n,
  footer: s,
  className: l,
  visible: i = !0,
  children: d,
  onKeyDown: r,
  ...a
}, c) {
  if (i === !1) return null;
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
          r?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [Fn.card, Fn[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Fn.header, children: n }),
          /* @__PURE__ */ o("div", { className: Fn.body, children: d }),
          s != null && /* @__PURE__ */ o("div", { className: Fn.footer, children: s })
        ]
      }
    )
  );
});
function $r(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const bo = "_badge_1fy6d_1", yo = "_xs_1fy6d_21", xo = "_sm_1fy6d_26", vo = "_md_1fy6d_31", ko = "_lg_1fy6d_36", wo = "_xl_1fy6d_41", $o = "_neutral_1fy6d_47", No = "_primary_1fy6d_52", Oo = "_secondary_1fy6d_61", So = "_light_1fy6d_66", Co = "_base_1fy6d_71", Do = "_dark_1fy6d_76", zo = "_info_1fy6d_81", Eo = "_success_1fy6d_86", Mo = "_warning_1fy6d_95", Io = "_danger_1fy6d_104", jo = "_filled_1fy6d_111", Ao = "_outlined_1fy6d_161", To = "_text_1fy6d_213", Hn = {
  badge: bo,
  xs: yo,
  sm: xo,
  md: vo,
  lg: ko,
  xl: wo,
  neutral: $o,
  primary: No,
  secondary: Oo,
  light: So,
  base: Co,
  dark: Do,
  info: zo,
  success: Eo,
  warning: Mo,
  danger: Io,
  filled: jo,
  outlined: Ao,
  text: To,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, T2 = Le(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: s,
  size: l = "md",
  className: i,
  visible: d = !0,
  children: r,
  ...a
}, c) {
  if (d === !1) return null;
  const f = t, u = $r(n, "filled"), k = rs(s);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        Hn.badge,
        Hn[l],
        Hn[f],
        Hn[u],
        k ? Hn[k] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}), Po = "_icon_vn4jx_5", Lo = "_xs_vn4jx_24", Ro = "_sm_vn4jx_28", Bo = "_md_vn4jx_23", Fo = "_lg_vn4jx_36", Ho = "_xl_vn4jx_40", Us = {
  icon: Po,
  xs: Lo,
  sm: Ro,
  md: Bo,
  lg: Fo,
  xl: Ho
}, P2 = [
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
], ke = Le(function({ icon: t, size: n, color: s, className: l, style: i, ...d }, r) {
  const a = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: r,
      className: [Us.icon, a ? Us[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...a || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...s === void 0 ? null : { color: s },
        ...i
      },
      "aria-hidden": "true",
      ...d,
      children: t
    }
  );
}), qo = "_stat_sjin9_1", Ko = "_label_sjin9_8", Wo = "_row_sjin9_16", Uo = "_value_sjin9_22", Vo = "_delta_sjin9_28", Go = "_success_sjin9_33", Xo = "_danger_sjin9_37", Yo = "_neutral_sjin9_41", Zo = "_hint_sjin9_45", bn = {
  stat: qo,
  label: Ko,
  row: Wo,
  value: Uo,
  delta: Vo,
  success: Go,
  danger: Xo,
  neutral: Yo,
  hint: Zo
}, L2 = Le(function({ label: t, value: n, delta: s, deltaTone: l = "neutral", hint: i, className: d, ...r }, a) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: a,
      className: [bn.stat, d].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: bn.label, children: t }),
        /* @__PURE__ */ M("div", { className: bn.row, children: [
          /* @__PURE__ */ o("div", { className: bn.value, children: n }),
          s != null && /* @__PURE__ */ o("div", { className: [bn.delta, bn[l]].join(" "), children: s })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: bn.hint, children: i })
      ]
    }
  );
}), Jo = "_wrap_ipozk_1", Qo = "_table_ipozk_8", el = "_caption_ipozk_14", tl = "_none_ipozk_51", nl = "_horizontal_ipozk_57", sl = "_vertical_ipozk_67", rl = "_alternating_ipozk_85", ol = "_start_ipozk_89", ll = "_center_ipozk_93", al = "_end_ipozk_97", il = "_empty_ipozk_101", an = {
  wrap: Jo,
  table: Qo,
  caption: el,
  none: tl,
  horizontal: nl,
  vertical: sl,
  alternating: rl,
  start: ol,
  center: ll,
  end: al,
  empty: il
};
function R2({
  columns: e,
  rows: t,
  rowKey: n,
  empty: s,
  caption: l,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: r,
  visible: a = !0
}) {
  if (a === !1) return null;
  const c = i === "default" || i === "both" ? "" : an[i];
  return /* @__PURE__ */ M("div", { className: [an.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          an.table,
          c,
          d ? an.alternating : ""
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
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? an[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && s != null && /* @__PURE__ */ o("div", { className: an.empty, children: s })
  ] });
}
const cl = "_emptyState_1swxw_1", dl = "_icon_1swxw_13", ul = "_title_1swxw_18", fl = "_description_1swxw_24", _l = "_action_1swxw_30", qn = {
  emptyState: cl,
  icon: dl,
  title: ul,
  description: fl,
  action: _l
};
function B2({
  icon: e,
  title: t,
  description: n,
  action: s,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [qn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: qn.icon, children: e }),
    /* @__PURE__ */ o("div", { className: qn.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: qn.description, children: n }),
    s != null && /* @__PURE__ */ o("div", { className: qn.action, children: s })
  ] });
}
const hl = "_field_149oz_1", pl = "_label_149oz_8", ml = "_required_149oz_14", gl = "_hint_149oz_19", bl = "_error_149oz_24", Kn = {
  field: hl,
  label: pl,
  required: ml,
  hint: gl,
  error: bl
};
function F2({
  label: e,
  htmlFor: t,
  required: n,
  hint: s,
  supporting: l,
  error: i,
  children: d,
  className: r,
  visible: a = !0
}) {
  const c = s ?? l, f = Pe(), u = Pe(), k = Pe();
  if (a === !1) return null;
  const v = i != null ? u : c != null ? k : null, b = typeof d == "function" ? d({ inputId: f, hintId: k, errorId: u }) : d, p = gt(b) && typeof b.props.id == "string" ? b.props.id : void 0, g = p ?? t ?? f, h = gt(b) && (v != null || p == null && typeof b.type == "string"), _ = p != null || t != null || h, m = h && gt(b) ? Ps(b, {
    id: g,
    "aria-describedby": v != null ? [
      b.props["aria-describedby"],
      v
    ].filter((w) => typeof w == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ M("div", { className: [Kn.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: Kn.label,
        htmlFor: _ ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Kn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    m,
    i != null ? /* @__PURE__ */ o("div", { id: u, className: Kn.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ o("div", { id: k, className: Kn.hint, children: c }) : null
  ] });
}
const yl = "_formfield_6e25e_1", xl = "_content_6e25e_8", vl = "_floating_6e25e_43", kl = "_label_6e25e_111", wl = "_start_6e25e_132", $l = "_required_6e25e_169", Nl = "_end_6e25e_175", Ol = "_filled_6e25e_192", Sl = "_flat_6e25e_199", Cl = "_helper_6e25e_206", Dl = "_invalid_6e25e_211", Kt = {
  formfield: yl,
  content: xl,
  floating: vl,
  label: kl,
  start: wl,
  required: $l,
  end: Nl,
  filled: Ol,
  flat: Sl,
  helper: Cl,
  invalid: Dl
};
function H2({
  text: e,
  start: t,
  end: n,
  helper: s,
  component: l,
  allowFloatingLabel: i = !0,
  variant: d = "outlined",
  invalid: r = !1,
  required: a = !1,
  children: c,
  className: f,
  visible: u = !0
}) {
  const k = Pe(), v = Pe();
  if (u === !1) return null;
  const b = l ?? k, p = typeof c == "function" ? c({
    inputId: b
  }) : c, g = gt(p) ? p.type : null, h = typeof g == "string", _ = gt(p) && typeof g != "symbol", m = gt(p) ? p.props : null, w = typeof m?.id == "string" ? m.id : void 0, y = h && gt(p) ? p.type.toLowerCase() : null, N = y != null && (y === "input" ? typeof m?.type != "string" || m.type.toLowerCase() !== "hidden" : y === "button" || y === "meter" || y === "output" || y === "progress" || y === "select" || y === "textarea"), $ = _ && (s != null || r || w == null && N), C = w != null || l != null || $, z = y === "input" && typeof m?.type == "string" ? m.type.toLowerCase() : null, D = y === "textarea" || y === "input" && (z == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(z)), E = $ && gt(p) ? Ps(
    p,
    {
      id: w ?? b,
      ...i && D && m?.placeholder == null ? { placeholder: " " } : {},
      ...s != null ? {
        "aria-describedby": [
          m?.["aria-describedby"],
          v
        ].filter((x) => typeof x == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : p, O = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: Kt.label,
      htmlFor: C ? w ?? b : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ o("span", { className: Kt.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        Kt.formfield,
        Kt[d],
        i ? Kt.floating : null,
        r ? Kt.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : O,
        /* @__PURE__ */ M("div", { className: Kt.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Kt.start, children: t }),
          E,
          i ? O : null,
          n != null && /* @__PURE__ */ o("div", { className: Kt.end, children: n })
        ] }),
        s != null && /* @__PURE__ */ o("div", { id: v, className: Kt.helper, children: s })
      ]
    }
  );
}
const zl = "_fieldset_8x01p_1", El = "_legend_8x01p_11", Ml = "_legendText_8x01p_20", Il = "_toggle_8x01p_24", jl = "_content_8x01p_45", Al = "_summary_8x01p_49", yn = {
  fieldset: zl,
  legend: El,
  legendText: Ml,
  toggle: Il,
  content: jl,
  summary: Al
};
function q2({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: s,
  allowCollapse: l = !1,
  collapsed: i,
  defaultCollapsed: d = !1,
  summary: r,
  expandTitle: a,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: k,
  onCollapse: v,
  children: b,
  className: p,
  visible: g = !0
}) {
  const h = Pe(), [_, m] = W(d);
  if (g === !1) return null;
  const w = i ?? _, y = l ? `${h}-content` : void 0, N = () => {
    const O = !w;
    i === void 0 && m(O), O ? v?.() : k?.();
  }, $ = l || e != null || n != null || t != null, C = l ? w : !1, z = l && w && r != null, D = C ? a ?? "Expand" : c ?? "Collapse", E = C ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [yn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: yn.legend, children: l ? /* @__PURE__ */ M(rt, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: yn.toggle,
              title: D,
              "aria-label": e == null ? E : void 0,
              "aria-expanded": !C,
              "aria-controls": y,
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
        ] }) : /* @__PURE__ */ M(rt, { children: [
          n != null && /* @__PURE__ */ o(ke, { icon: n, color: s, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: yn.content,
            id: y,
            hidden: C,
            children: b
          }
        ),
        z ? /* @__PURE__ */ o("div", { className: yn.summary, children: r }) : null
      ]
    }
  );
}
const Tl = "_form_abp5n_1", Pl = {
  form: Tl
}, Nr = Ln(null);
function Ll() {
  const e = hn(Nr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function K2({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: s,
  method: l,
  children: i,
  className: d
}) {
  const [r, a] = W({}), [c, f] = W(0), u = Q(r);
  u.current = r;
  const k = R((m) => {
    a(
      (w) => w[m.name] === m ? w : { ...w, [m.name]: m }
    );
  }, []), v = R((m) => {
    a((w) => {
      if (!(m in w)) return w;
      const y = { ...w };
      return delete y[m], y;
    });
  }, []), b = R(() => {
    const m = {};
    for (const w of Object.values(u.current)) {
      const y = w.validate();
      y.length > 0 && (m[w.name] = y);
    }
    return m;
  }, []), p = R(() => {
    const m = b();
    f((w) => w + 1), Object.keys(m).length === 0 ? t?.(e) : n?.(m);
  }, [b, e, t, n]), g = (m) => {
    s != null && l != null || (m.preventDefault(), p());
  }, h = be(
    () => ({ registerField: k, unregisterField: v, submit: p, submitCount: c }),
    [k, v, p, c]
  ), _ = [Pl.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Nr.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: g,
      action: s,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const Sn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", W2 = (e = "Required") => (t) => Sn(t) ? e : null, U2 = (e = "Invalid email") => (t) => Sn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, V2 = (e, t = "Invalid format") => (n) => Sn(n) || e.test(String(n)) ? null : t, G2 = (e, t = `Minimum ${e} characters`) => (n) => Sn(n) || String(n).length >= e ? null : t, X2 = (e, t = `Maximum ${e} characters`) => (n) => Sn(n) || String(n).length <= e ? null : t, Y2 = (e, t, n = `Between ${e} and ${t}`) => (s) => {
  if (Sn(s)) return null;
  const l = Number(s);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, Z2 = (e, t = "Values do not match") => (n, s) => {
  if (Sn(n)) return null;
  const l = typeof e == "function" ? e(s) : e;
  return n === l ? null : t;
}, J2 = (e = "Required") => (t) => t === !0 ? null : e, Q2 = (e) => (t, n) => e(t, n);
function Rl(e, t, n) {
  return e.map((s) => s(t, n)).filter((s) => s != null);
}
function ek(e, t) {
  const { registerField: n, unregisterField: s, submitCount: l } = Ll(), [i, d] = W(t?.initialValue), [r, a] = W(!1), [c, f] = W(!1), u = Q(() => []);
  u.current = () => Rl(t?.validate ?? [], i), _e(() => (n({ name: e, validate: () => u.current() }), () => s(e)), [e, n, s]), _e(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const k = r && !c ? u.current() : [];
  return { value: i, setValue: (b) => {
    d(b), f(!0);
  }, errors: k };
}
const Bl = "_select_1xe98_1", Fl = "_invalid_1xe98_33", Hl = "_xs_1xe98_40", ql = "_sm_1xe98_48", Kl = "_md_1xe98_56", Wl = "_lg_1xe98_62", Ul = "_xl_1xe98_68", $s = {
  select: Bl,
  invalid: Fl,
  xs: Hl,
  sm: ql,
  md: Kl,
  lg: Wl,
  xl: Ul
}, On = Le(
  function({ size: t = "md", invalid: n = !1, options: s, children: l, className: i, ...d }, r) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: r,
        "data-size": t,
        className: [
          $s.select,
          $s[t],
          n ? $s.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
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
), Or = [
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
], Wn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Vl = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Gl(e) {
  return Vl.includes(e);
}
function gs(e, t) {
  return t.split(".").reduce((n, s) => {
    if (n != null)
      return n[s];
  }, e);
}
function Vs(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function ns(e, t) {
  const n = Vs(e), s = Vs(t);
  if (typeof n == "number" && typeof s == "number") return n - s;
  const l = String(n ?? ""), i = String(s ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function ks(e) {
  if (e.secondOperator == null) return !1;
  if (Gl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Gs(e, t, n) {
  const s = gs(t, e.property), l = Xs(
    s,
    e.value,
    e.operator,
    n
  );
  if (!ks(e)) return l;
  const i = Xs(
    s,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function Xs(e, t, n, s) {
  const l = s === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), r = i(t);
  switch (n) {
    case "Equals":
      return d === r || Array.isArray(d) && d.some((a) => i(a) === r);
    case "NotEquals":
      return d !== r && !(Array.isArray(d) && d.some((a) => i(a) === r));
    case "LessThan":
      return ns(d, r) < 0;
    case "LessThanOrEquals":
      return ns(d, r) <= 0;
    case "GreaterThan":
      return ns(d, r) > 0;
    case "GreaterThanOrEquals":
      return ns(d, r) >= 0;
    case "Contains":
      return typeof d == "string" && typeof r == "string" && d.includes(r);
    case "StartsWith":
      return typeof d == "string" && typeof r == "string" && d.startsWith(r);
    case "EndsWith":
      return typeof d == "string" && typeof r == "string" && d.endsWith(r);
    case "DoesNotContain":
      return typeof d == "string" && typeof r == "string" && !d.includes(r);
    case "In":
      return Array.isArray(r) && r.some((a) => i(a) === d);
    case "NotIn":
      return Array.isArray(r) && !r.some((a) => i(a) === d);
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
function Bs(e) {
  return "filters" in e;
}
function Sr(e, t, n = {}) {
  const s = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Bs(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? s;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => Sr(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", Gs(t, e, l);
}
function Cr(e, t, n = {}) {
  return e.filter((s) => Sr(s, t, n));
}
function Xl(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Ct(e) {
  return typeof e == "string" ? `"${Xl(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(Ct).join(", ")}]` : `"${String(e)}"`;
}
function Yl(e) {
  const t = (l, i) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${Ct(i)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${Ct(i)})`;
      case "LessThan":
        return `${e.property}.LessThan(${Ct(i)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${Ct(i)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${Ct(i)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${Ct(i)})`;
      case "Contains":
        return `${e.property}.Contains(${Ct(i)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${Ct(i)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${Ct(i)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${Ct(i)})`;
      case "In":
        return `${e.property}.In(${Ct(i)})`;
      case "NotIn":
        return `!${e.property}.In(${Ct(i)})`;
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
  const n = e.logicalOperator ?? "And", s = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    s,
    e.secondValue
  )})`;
}
function Zl(e) {
  return Bs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Zl).filter(Boolean).join(` ${e.operator} `)})` : Yl(e);
}
function Jl(e) {
  return e.replace(/'/g, "''");
}
const Ql = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function ea(e, t) {
  const n = e.property, s = t === "CaseInsensitive", l = (c) => s ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${Jl(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", k = u && s ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${Ql[c]} ${u && s ? l(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${k} in (${f.map((v) => i(v)).join(", ")})` : `${k} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${k} in (${f.map((v) => i(v)).join(", ")}))` : `not(${k} in (${i(f)}))`;
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
    return d(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${r} ${d(
    a,
    e.secondValue
  )})`;
}
function ta(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Bs(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => ta(l, { caseSensitivity: n })).filter(Boolean).join(` ${s} `)})`;
  }
  return ea(e, n);
}
function na(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, s) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = ns(
        gs(n, l.property),
        gs(s, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const sa = "_filter_1dvqt_1", ra = "_rows_1dvqt_9", oa = "_row_1dvqt_9", la = "_join_1dvqt_21", aa = "_property_1dvqt_30", ia = "_operator_1dvqt_34", ca = "_value_1dvqt_38", da = "_remove_1dvqt_42", ua = "_bar_1dvqt_58", fa = "_add_1dvqt_64", _a = "_custom_1dvqt_78", ha = "_summary_1dvqt_82", pa = "_second_1dvqt_87", ma = "_secondAdd_1dvqt_91", ga = "_addSecond_1dvqt_95", ba = "_joinSelect_1dvqt_109", Xe = {
  filter: sa,
  rows: ra,
  row: oa,
  join: la,
  property: aa,
  operator: ia,
  value: ca,
  remove: da,
  bar: ua,
  add: fa,
  custom: _a,
  summary: ha,
  second: pa,
  secondAdd: ma,
  addSecond: ga,
  joinSelect: ba
}, Un = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Ys = {
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
function Zs({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(rt, { children: e.editor({ value: t, onChange: n }) });
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      On,
      {
        "aria-label": e.title ?? e.name,
        className: Xe.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (s === "boolean")
    return /* @__PURE__ */ o(
      On,
      {
        "aria-label": e.title ?? e.name,
        className: Xe.value,
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
  const l = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Xe.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        s === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function tk({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: l = !1,
  className: i,
  viewChanged: d,
  items: r,
  children: a
}) {
  const [c, f] = W(
    () => s != null && s.length > 0 ? s.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Wn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (h, _) => {
    f(
      (m) => m.map((w) => w.id === h ? { ...w, ..._ } : w)
    );
  }, k = () => {
    const h = c[c.length - 1], _ = Math.max(0, ...c.map((w) => w.id)) + 1, m = e[0];
    f((w) => [
      ...w,
      {
        id: _,
        property: h?.property ?? m?.name ?? "",
        operator: Wn[e.find(
          (y) => y.name === (h?.property ?? m?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (h) => {
    f(
      (_) => _.length > 1 ? _.filter((m) => m.id !== h) : _
    );
  }, b = be(() => {
    const h = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !Un.includes(_.operator)) continue;
      const w = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: y } = _;
      y != null && ks(_) && (w.secondOperator = y, w.secondValue = _.secondValue, w.logicalOperator = _.logicalOperator ?? "And"), h.push(w);
    }
    return h;
  }, [c]), p = be(() => r == null || b.length === 0 ? r : Cr(r, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [r, b, t, n]);
  _e(() => {
    d != null && r != null && d(p ?? []);
  }, [p]);
  const g = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ M("div", { className: [Xe.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: Xe.rows, role: "group", "aria-label": "Filter conditions", children: c.map((h, _) => {
      const m = g(h.property), w = l ? [Wn[m.type ?? "string"]] : Or, y = !Un.includes(h.operator), N = h.secondOperator != null;
      return /* @__PURE__ */ M(Ls, { children: [
        /* @__PURE__ */ M("div", { className: Xe.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: Xe.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            On,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Xe.property,
              value: h.property,
              onChange: ($) => {
                const C = e.find(
                  (z) => z.name === $.target.value
                );
                u(h.id, {
                  property: $.target.value,
                  operator: Wn[C?.type ?? "string"],
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
            On,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: Xe.operator,
              value: h.operator,
              onChange: ($) => {
                const C = $.target.value;
                u(
                  h.id,
                  Un.includes(C) ? {
                    operator: C,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: C }
                );
              },
              options: w.map(($) => ({
                value: $,
                label: Ys[$]
              }))
            }
          ),
          y ? /* @__PURE__ */ o(
            Zs,
            {
              property: m,
              value: h.value,
              onChange: ($) => u(h.id, { value: $ })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Xe.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => v(h.id),
              children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
            }
          )
        ] }),
        y ? N ? /* @__PURE__ */ M(
          "div",
          {
            className: [Xe.row, Xe.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                On,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: Xe.joinSelect,
                  value: h.logicalOperator ?? "And",
                  onChange: ($) => u(h.id, {
                    logicalOperator: $.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                On,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: Xe.operator,
                  value: h.secondOperator,
                  onChange: ($) => {
                    const C = $.target.value;
                    u(
                      h.id,
                      Un.includes(C) ? { secondOperator: C, secondValue: void 0 } : { secondOperator: C }
                    );
                  },
                  options: w.map(($) => ({
                    value: $,
                    label: Ys[$]
                  }))
                }
              ),
              h.secondOperator == null || !Un.includes(h.secondOperator) ? /* @__PURE__ */ o(
                Zs,
                {
                  property: m,
                  value: h.secondValue,
                  onChange: ($) => u(h.id, { secondValue: $ })
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
              secondOperator: Wn[m.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ M("div", { className: Xe.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: Xe.add, onClick: k, children: "Add filter" }),
      a != null ? /* @__PURE__ */ o("div", { className: Xe.custom, children: a }) : null,
      r != null ? /* @__PURE__ */ M("span", { className: Xe.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const ya = "_pager_1du31_1", xa = "_alignLeft_1du31_10", va = "_alignCenter_1du31_14", ka = "_alignRight_1du31_18", wa = "_alignJustify_1du31_22", $a = "_summary_1du31_26", Na = "_controls_1du31_31", Oa = "_button_1du31_37", Sa = "_active_1du31_73", Ca = "_ellipsis_1du31_85", Da = "_size_1du31_91", ht = {
  pager: ya,
  alignLeft: xa,
  alignCenter: va,
  alignRight: ka,
  alignJustify: wa,
  summary: $a,
  controls: Na,
  button: Oa,
  active: Sa,
  ellipsis: Ca,
  size: Da
};
function za(e, t, n, s) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(s));
}
function Js(e, t) {
  return e.replace("{0}", String(t));
}
function Ea(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (r, a) => a + 1);
  const s = Math.floor(n / 2);
  let l = Math.max(1, e - s);
  const i = Math.min(t, l + n - 1);
  l = Math.max(1, i - n + 1);
  const d = [];
  for (let r = l; r <= i; r++) d.push(r);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), i < t - 1 && d.push("ellipsis"), i < t && d.push(t), d;
}
function Ma({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: i = 5,
  alwaysVisible: d = !1,
  horizontalAlign: r = "left",
  showPagingSummary: a,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: k = "Items per page",
  firstPageTitle: v = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: m,
  onPageSizeChange: w,
  ariaLabel: y = "Pagination",
  className: N,
  visible: $ = !0
}) {
  const C = n ?? s, [z, D] = W(C), E = n !== void 0, O = E ? C : z, x = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, O), x), T = a ?? !0, A = d || x > 1, j = Ea(S, x, i), F = R(
    (Y) => {
      const me = Math.min(Math.max(1, Y), x);
      E || D(me);
      const de = (me - 1) * t;
      m?.({
        page: me,
        skip: de,
        top: t,
        pageCount: x,
        pageSize: t
      });
    },
    [E, m, x, t]
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
  return $ === !1 || !A ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [ht.pager, L, N].filter(Boolean).join(" "),
      "aria-label": y,
      children: [
        T && /* @__PURE__ */ o("span", { className: ht.summary, "aria-live": "polite", children: u ? u(V) : za(f, S, x, e) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: ht.controls,
            role: "group",
            "aria-label": y,
            onKeyDown: ee,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: S <= 1,
                  onClick: () => F(1),
                  "aria-label": v,
                  title: v,
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
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              j.map(
                (Y, me) => Y === "ellipsis" ? /* @__PURE__ */ o("span", { className: ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${me}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": Y,
                    className: [ht.button, Y === S ? ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": Y === S ? "page" : void 0,
                    "aria-label": Js(_, Y),
                    title: Js(h, Y),
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
                  "aria-label": g,
                  title: g,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ M("label", { className: ht.size, children: [
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
function Es(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: s, showSummary: l, ...i } = e;
  return /* @__PURE__ */ o(
    Ma,
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
      ...i
    }
  );
}
const Dr = "";
function Ia(e, t, n, s, l) {
  if (t.length === 0) return e.map((r) => ({ type: "row", row: r }));
  const i = (r) => n.find((a) => a.property === r), d = (r, a, c) => {
    const f = t[a];
    if (f === void 0)
      return r.map((p) => ({ type: "row", row: p }));
    const u = i(f), k = /* @__PURE__ */ new Map(), v = [];
    r.forEach((p) => {
      const g = String(l(p, f) ?? ""), h = k.get(g);
      h ? h.push(p) : (k.set(g, [p]), v.push(g));
    });
    const b = [];
    return v.forEach((p) => {
      const g = k.get(p), h = [...c, p].join(Dr), _ = g[0], m = _ !== void 0 ? l(_, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: h,
          display: bs(m, u?.format),
          property: f,
          title: u?.title ?? f,
          count: g.length,
          level: a
        }
      }), s.has(h) && b.push(...d(g, a + 1, [...c, p]));
    }), b;
  };
  return d(e, 0, []);
}
function Qs(e, t, n) {
  const s = /* @__PURE__ */ new Set(), l = (i, d, r) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const k = String(n(u, a) ?? ""), v = c.get(k);
      v ? v.push(u) : (c.set(k, [u]), f.push(k));
    }), f.forEach((u) => {
      const k = [...r, u].join(Dr);
      s.add(k), l(c.get(u), d + 1, [...r, u]);
    });
  };
  return l(e, 0, []), s;
}
function ls(e, t) {
  return e.property ?? `col-${t}`;
}
function ja(e, t) {
  const n = {};
  let s = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = s === 0 ? "0px" : `${s}px`;
    const d = t[l] ?? i.width ?? "8rem";
    s += parseFloat(d);
  }), n;
}
function Aa(e, t) {
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
    return gs(e, t);
}
function bs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const er = [
  "Ascending",
  "Descending",
  null
];
function Ta(e, t, n = {}) {
  const s = e.find((i) => i.property === t), l = er[(s ? er.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Pa(e, t) {
  return na(e, t);
}
function La(e, t, n) {
  const s = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), s), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: s,
    pageNumber: l,
    total: e.length
  };
}
function Ra(e, t, n = {}) {
  const s = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, a]) => ({
      property: r,
      operator: a.operator ?? "Contains",
      value: Aa(
        a.value,
        n.types?.[r] ?? "string"
      )
    })
  ), l = s.length > 0 ? Cr(
    e,
    { operator: n.logicalOperator ?? "And", filters: s },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Pa(l, t.sorts);
  return {
    ...La(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function tr(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Ba(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const s = [];
  switch (e.forEach((l) => {
    const i = n(l, t.property);
    if (i == null || i === "") return;
    const d = Number(i);
    Number.isFinite(d) && s.push(d);
  }), t.type) {
    case "sum":
      return s.length > 0 ? s.reduce((l, i) => l + i, 0) : void 0;
    case "avg":
      return s.length > 0 ? s.reduce((l, i) => l + i, 0) / s.length : void 0;
    case "min":
      return s.length > 0 ? Math.min(...s) : void 0;
    case "max":
      return s.length > 0 ? Math.max(...s) : void 0;
    default:
      return;
  }
}
function Fa(e, t, n = Nn) {
  const s = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => s(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => s(bs(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Ha = "_grid_13rur_1", qa = "_toolbar_13rur_8", Ka = "_picker_13rur_13", Wa = "_pickerButton_13rur_17", Ua = "_pickerPanel_13rur_31", Va = "_pickerItem_13rur_46", Ga = "_groupPanel_13rur_55", Xa = "_groupPanelActive_13rur_66", Ya = "_groupPanelText_13rur_70", Za = "_groupChip_13rur_74", Ja = "_groupRemove_13rur_85", Qa = "_groupRow_13rur_94", ei = "_groupCell_13rur_98", ti = "_groupToggle_13rur_104", ni = "_editRow_13rur_117", si = "_editCell_13rur_121", ri = "_editInput_13rur_127", oi = "_commandCell_13rur_137", li = "_commandButton_13rur_144", ai = "_data_13rur_159", ii = "_table_13rur_166", ci = "_header_13rur_172", di = "_center_13rur_185", ui = "_right_13rur_189", fi = "_sortButton_13rur_193", _i = "_sortIndicator_13rur_211", hi = "_sortIndex_13rur_215", pi = "_cell_13rur_226", mi = "_clickable_13rur_241", gi = "_frozen_13rur_249", bi = "_selected_13rur_255", yi = "_resizeHandle_13rur_263", xi = "_filterCell_13rur_281", vi = "_filterSelect_13rur_290", ki = "_filterInput_13rur_300", wi = "_empty_13rur_311", $i = "_loading_13rur_317", Ni = "_visuallyHidden_13rur_331", Oi = "_virtualScroller_13rur_340", Si = "_spacerRow_13rur_345", Ci = "_footerRow_13rur_350", Di = "_footerCell_13rur_354", zi = "_footerValue_13rur_361", pe = {
  grid: Ha,
  toolbar: qa,
  picker: Ka,
  pickerButton: Wa,
  pickerPanel: Ua,
  pickerItem: Va,
  groupPanel: Ga,
  groupPanelActive: Xa,
  groupPanelText: Ya,
  groupChip: Za,
  groupRemove: Ja,
  groupRow: Qa,
  groupCell: ei,
  groupToggle: ti,
  editRow: ni,
  editCell: si,
  editInput: ri,
  commandCell: oi,
  commandButton: li,
  data: ai,
  table: ii,
  header: ci,
  center: di,
  right: ui,
  sortButton: fi,
  sortIndicator: _i,
  sortIndex: hi,
  cell: pi,
  clickable: mi,
  frozen: gi,
  selected: bi,
  resizeHandle: yi,
  filterCell: xi,
  filterSelect: vi,
  filterInput: ki,
  empty: wi,
  loading: $i,
  visuallyHidden: Ni,
  virtualScroller: Oi,
  spacerRow: Si,
  footerRow: Ci,
  footerCell: Di,
  footerValue: zi
}, Ei = {
  Ascending: "ascending",
  Descending: "descending"
};
function nr(e, t) {
  return e.filterable ?? t;
}
function Mi(e, t) {
  return e.sortable ?? t;
}
function Ii(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function nk({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: s = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: k = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: p = !0,
  selectionMode: g = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: m = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: y = !1,
  allowColumnReorder: N = !1,
  allowGrouping: $ = !1,
  groupPanelText: C = "Drag a column header here to group",
  groupExpanded: z = !0,
  aggregates: D,
  showExportButton: E = !1,
  exportFileName: O = "grid-data",
  serverMode: x = !1,
  totalCount: S,
  onRangeChange: T,
  virtualize: A = !1,
  virtualRowHeight: j = 40,
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
  ), [ve, Be] = W(1), [we, ot] = W(f), [tt, Ze] = W(
    () => e.map((P, B) => ls(P, B))
  ), [Nt, bt] = W(
    () => new Set(
      e.map((P, B) => P.visible !== !1 ? ls(P, B) : "").filter(Boolean)
    )
  ), [lt, G] = W({}), [I, U] = W(!1), [Z, he] = W([]), [te, ye] = W(
    null
  ), [ze, Fe] = W(null), [He, nt] = W({}), [on, J] = W(0), [Se, dt] = W(F), Et = Q(null), ut = Q(null), Ce = be(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((B, ae) => P.set(ls(B, ae), B)), P;
  }, [e]), Ae = be(
    () => tt.filter((P) => Nt.has(P)).map((P) => ({ key: P, column: Ce.get(P) })).filter(
      (P) => P.column != null
    ),
    [tt, Nt, Ce]
  ), Mt = be(
    () => ja(Ae, lt),
    [Ae, lt]
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
    return Ra(
      t,
      {
        sorts: oe,
        filters: Oe,
        pageNumber: ve,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? we : Number.MAX_SAFE_INTEGER
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
    c
  ]), K = Q(T);
  _e(() => {
    K.current = T;
  });
  const le = be(
    () => [...Oe.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, B]) => ({
      property: P,
      operator: B.operator ?? tr(
        e.find((ae) => ae.property === P)?.type ?? "string"
      ),
      value: B.value ?? ""
    })),
    [Oe, e]
  );
  _e(() => {
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
  const Ie = be(() => new Set(Z), [Z]), Te = be(() => te || (z ? Qs(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), [te, z, Je.items, Z]), Ft = be(
    () => Ia(Je.items, Z, e, Te, Nn),
    [Je.items, Z, e, Te]
  ), st = be(
    () => Z.length > 0 ? Ae.filter(
      (P) => P.column.property == null || !Ie.has(P.column.property)
    ) : Ae,
    [Ae, Z, Ie]
  ), H = (P) => {
    P !== "" && $e(Ta(oe, P, { multi: l }));
  }, X = (P, B) => {
    Ye((ae) => {
      const ce = new Map(ae);
      return ce.set(P, B), ce;
    }), Be(1);
  }, ne = (P) => {
    ot(P), Be(1);
  }, ge = (P) => {
    if (g === "None") return;
    const B = n(P), ae = h ?? [];
    let ce;
    g === "Single" ? ce = ae.length === 1 && ae[0] === B ? [] : [B] : ce = ae.includes(B) ? ae.filter((Re) => Re !== B) : [...ae, B], _?.(ce);
  }, fe = (P) => {
    se?.(P);
  }, xe = (P, B, ae) => {
    Et.current = { key: P, startX: B, startWidth: ae };
  }, Me = (P) => {
    const B = Et.current;
    if (!B) return;
    const ae = P - B.startX, ce = Math.max(48, B.startWidth + ae);
    G((Re) => ({ ...Re, [B.key]: `${ce}px` }));
  }, Ee = () => {
    Et.current = null;
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
  }, Ht = (P) => {
    ye((B) => {
      const ae = B ?? (z ? Qs(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), ce = new Set(ae);
      return ce.has(P) ? ce.delete(P) : ce.add(P), ce;
    });
  }, Tt = (P) => {
    const B = {};
    e.forEach((ae) => {
      ae.property && (B[ae.property] = Nn(P, ae.property));
    }), nt(B), Fe(String(n(P)));
  }, ln = () => {
    const P = {};
    e.forEach((B) => {
      B.property && B.type === "boolean" && (P[B.property] = !1);
    }), nt(P), Fe("__new__");
  }, Rn = () => {
    Fe(null), nt({});
  }, Bn = (P) => {
    if (ze === "__new__") {
      const B = Object.fromEntries(
        e.filter((ae) => ae.property).map((ae) => [ae.property, He[ae.property]])
      );
      Y?.(B);
    } else if (P != null) {
      const B = { ...P, ...He };
      ee?.(P, B);
    }
    Rn();
  }, mn = c && (v === "Top" || v === "TopAndBottom"), qs = c && (v === "Bottom" || v === "TopAndBottom"), Hr = d && e.some((P) => nr(P, d)), qr = (P, B, ae) => P.render ? P.render(B, { index: 0 }) : bs(Nn(B, P.property), P.format), Kr = (P) => {
    const B = [pe.cell];
    return P.align === "center" && B.push(pe.center), P.align === "right" && B.push(pe.right), P.frozen && B.push(pe.frozen), B.join(" ");
  }, Ks = x ? t : Je.filtered, Wr = () => {
    const P = Fa(
      Ks,
      st.map((Re) => Re.column)
    ), B = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ae = URL.createObjectURL(B), ce = document.createElement("a");
    ce.href = ae, ce.download = `${O}.csv`, document.body.appendChild(ce), ce.click(), ce.remove(), URL.revokeObjectURL(ae);
  }, Cn = Ft.length, gn = be(() => {
    if (!A || Cn === 0)
      return { start: 0, end: Cn, top: 0, bottom: 0 };
    const P = 5, B = Math.max(
      0,
      Math.floor(on / j) - P
    ), ae = Math.ceil(Se / j) + P * 2, ce = Math.min(Cn, B + ae), Re = B * j, Pt = Math.max(0, (Cn - ce) * j);
    return { start: B, end: ce, top: Re, bottom: Pt };
  }, [A, Cn, on, j, Se]), ws = st.length + (yt ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [pe.grid, ie].filter(Boolean).join(" "), children: [
    mn && /* @__PURE__ */ o(
      Es,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: u,
        pageNumbersCount: k,
        showSummary: b,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${qs ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    ),
    ($ || V || m || E) && /* @__PURE__ */ M("div", { className: pe.toolbar, children: [
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
            return /* @__PURE__ */ M("span", { className: pe.groupChip, children: [
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
      m && /* @__PURE__ */ M("div", { className: pe.picker, children: [
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
              const ae = ls(P, B);
              return /* @__PURE__ */ M("label", { className: pe.pickerItem, children: [
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
          onClick: Wr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [pe.data, A ? pe.virtualScroller : ""].filter(Boolean).join(" "),
        style: A ? { maxHeight: F } : void 0,
        onScroll: A ? (P) => {
          J(P.currentTarget.scrollTop), dt(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: pe.table,
              role: "grid",
              "aria-rowcount": (A ? Cn : Je.total) + 1,
              "aria-label": q,
              "aria-busy": de || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
                  st.map(({ key: P, column: B }) => /* @__PURE__ */ o(
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
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    st.map(({ key: P, column: B }) => {
                      const ae = Mi(B, s), ce = oe.find((_t) => _t.property === B.property), Re = ce ? oe.indexOf(ce) + 1 : 0, Pt = B.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": ae && ce ? Ei[ce.sortOrder] : "none",
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
                            ae ? /* @__PURE__ */ M(
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
                                  Re > 1 && i && /* @__PURE__ */ o("span", { className: pe.sortIndex, children: Re })
                                ]
                              }
                            ) : B.title ?? B.property,
                            y && /* @__PURE__ */ o(
                              "span",
                              {
                                className: pe.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${B.title ?? B.property}`,
                                onMouseDown: (_t) => {
                                  _t.preventDefault(), _t.stopPropagation();
                                  const Dn = lt[P] ?? B.width, qt = Dn ? parseFloat(Dn) : 96;
                                  xe(
                                    P,
                                    _t.clientX,
                                    Number.isFinite(qt) ? qt : 96
                                  );
                                },
                                onMouseMove: (_t) => {
                                  Et.current?.key === P && Me(_t.clientX);
                                },
                                onMouseUp: Ee,
                                onMouseLeave: () => {
                                  Et.current?.key === P && Ee();
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
                  Hr && /* @__PURE__ */ o("tr", { children: st.map(({ key: P, column: B }) => {
                    if (!nr(B, d))
                      return /* @__PURE__ */ o("td", { className: pe.filterCell }, P);
                    const ae = Oe.get(B.property ?? "");
                    return /* @__PURE__ */ M("td", { className: pe.filterCell, children: [
                      /* @__PURE__ */ M(
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
                          value: ae?.operator ?? tr(B.type ?? "string"),
                          onChange: (ce) => X(B.property ?? "", {
                            ...ae,
                            operator: ce.target.value
                          }),
                          "aria-label": `${B.title ?? B.property} operator`,
                          children: Or.filter((ce) => ce !== "Custom").map(
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
                /* @__PURE__ */ M("tbody", { children: [
                  ze === "__new__" && /* @__PURE__ */ M("tr", { className: pe.editRow, children: [
                    st.map(({ key: P, column: B }) => /* @__PURE__ */ o("td", { className: pe.editCell, children: B.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: pe.editInput,
                        type: B.type === "number" ? "number" : B.type === "boolean" ? "checkbox" : "text",
                        checked: B.type === "boolean" ? !!He[B.property] : void 0,
                        value: B.type === "boolean" ? void 0 : String(He[B.property] ?? ""),
                        onChange: (ae) => nt((ce) => ({
                          ...ce,
                          [B.property]: B.type === "boolean" ? ae.target.checked : ae.target.value
                        })),
                        "aria-label": `${B.title ?? B.property} (new)`
                      }
                    ) }, P)),
                    yt && /* @__PURE__ */ M("td", { className: pe.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: pe.commandButton,
                          onClick: () => Bn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: pe.commandButton,
                          onClick: Rn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  gn.top > 0 && /* @__PURE__ */ o("tr", { className: pe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: ws,
                      style: { height: gn.top }
                    }
                  ) }),
                  Ft.slice(gn.start, gn.end).map((P, B) => {
                    const ae = gn.start + B, ce = A ? ae + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const qt = Te.has(P.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: pe.groupRow,
                          "aria-rowindex": ce,
                          children: /* @__PURE__ */ o("td", { colSpan: ws, className: pe.groupCell, children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: pe.groupToggle,
                              "aria-expanded": qt,
                              style: {
                                paddingInlineStart: `${P.group.level * 16}px`
                              },
                              onClick: () => Ht(P.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: qt ? "▼" : "▶" }),
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
                    const Re = P.row, Pt = n(Re), _t = (h ?? []).includes(Pt), Dn = ze != null && ze === String(Pt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": ce,
                        className: [
                          se || g !== "None" ? pe.clickable : "",
                          _t ? pe.selected : "",
                          Dn ? pe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": g !== "None" ? _t : void 0,
                        onClick: se || g !== "None" ? (qt) => {
                          Ii(qt.target) || (fe(Re), ge(Re));
                        } : void 0,
                        children: [
                          st.map(({ key: qt, column: xt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Kr(xt),
                              style: xt.frozen ? { left: Mt[qt] } : void 0,
                              children: Dn && xt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: pe.editInput,
                                  type: xt.type === "number" ? "number" : xt.type === "boolean" ? "checkbox" : "text",
                                  checked: xt.type === "boolean" ? !!He[xt.property] : void 0,
                                  value: xt.type === "boolean" ? void 0 : String(He[xt.property] ?? ""),
                                  onChange: (Ws) => nt((Ur) => ({
                                    ...Ur,
                                    [xt.property]: xt.type === "boolean" ? Ws.target.checked : Ws.target.value
                                  })),
                                  "aria-label": `${xt.title ?? xt.property} (edit)`
                                }
                              ) : qr(xt, Re)
                            },
                            qt
                          )),
                          yt && /* @__PURE__ */ o("td", { className: pe.commandCell, children: Dn ? /* @__PURE__ */ M(rt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: () => Bn(Re),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: Rn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(rt, { children: [
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
                      colSpan: ws,
                      style: { height: gn.bottom }
                    }
                  ) })
                ] }),
                D && D.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ M("tr", { className: pe.footerRow, children: [
                  st.map(({ key: P, column: B }) => {
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
                        children: ae.map((ce, Re) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: pe.footerValue,
                            children: [
                              ce.title ? `${ce.title}: ` : "",
                              bs(
                                Ba(Ks, ce, Nn),
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
    qs && /* @__PURE__ */ o(
      Es,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: u,
        pageNumbersCount: k,
        showSummary: b,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${mn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    )
  ] });
}
const ji = "_wrap_avqds_1", Ai = "_grid_avqds_7", Ti = "_stacked_avqds_13", Pi = "_item_avqds_19", Li = "_empty_avqds_25", Vn = {
  wrap: ji,
  grid: Ai,
  stacked: Ti,
  item: Pi,
  empty: Li
};
function sk({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: s = !1,
  itemTemplate: l,
  emptyMessage: i = "No records found",
  emptyTemplate: d,
  loadingTemplate: r,
  isLoading: a = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [k, v] = W(1), [b, p] = W(t), g = e.length, h = Math.max(1, Math.ceil(g / b)), _ = Math.min(Math.max(1, k), h), m = be(() => {
    const y = (_ - 1) * b;
    return e.slice(y, y + b);
  }, [e, _, b]), w = s ? Vn.grid : Vn.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Vn.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && r != null ? r : g === 0 ? d ?? /* @__PURE__ */ o("div", { className: Vn.empty, children: i }) : /* @__PURE__ */ o("div", { className: w, children: m.map((y, N) => /* @__PURE__ */ o("div", { className: Vn.item, children: l ? l(y, N) : String(y) }, N)) }),
        /* @__PURE__ */ o(
          Es,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: b,
            count: g,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: v,
            onPageSizeChange: (y) => {
              p(y), v(1);
            }
          }
        )
      ]
    }
  );
}
const Ri = "_label_1qfpw_1", Bi = {
  label: Ri
}, rk = Le(function({ className: t, children: n, ...s }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [Bi.label, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}), Fi = "_textbox_oly89_1", Hi = "_invalid_oly89_37", qi = "_xs_oly89_44", Ki = "_sm_oly89_50", Wi = "_md_oly89_56", Ui = "_lg_oly89_62", Vi = "_xl_oly89_68", Ns = {
  textbox: Fi,
  invalid: Hi,
  xs: qi,
  sm: Ki,
  md: Wi,
  lg: Ui,
  xl: Vi
}, Gi = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    visible: l = !0,
    type: i = "text",
    ...d
  }, r) {
    return l === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: r,
        type: i,
        "data-size": t,
        className: [
          Ns.textbox,
          Ns[t],
          n ? Ns.invalid : null,
          s
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), ok = Gi, Xi = "_checkbox_1bb6c_1", Yi = {
  checkbox: Xi
}, lk = Le(
  function({ className: t, indeterminate: n = !1, ...s }, l) {
    const i = Q(null);
    return _e(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Yi.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), Zi = {
  switch: "_switch_19gf1_1"
}, ak = Le(function({ className: t, ...n }, s) {
  const [l, i] = W(
    !!n.defaultChecked
  ), d = n.checked ?? l;
  return /* @__PURE__ */ o(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": d,
      className: [Zi.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (r) => {
        n.checked === void 0 && i(r.target.checked), n.onChange?.(r);
      }
    }
  );
}), Ji = "_trigger_1jlxf_1", Qi = "_tooltip_1jlxf_7", ec = "_top_1jlxf_34", tc = "_right_1jlxf_40", nc = "_bottom_1jlxf_46", sc = "_left_1jlxf_52", rc = "_arrow_1jlxf_58", oc = "_floating_1jlxf_70", cn = {
  trigger: Ji,
  tooltip: Qi,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: ec,
  right: tc,
  bottom: nc,
  left: sc,
  arrow: rc,
  floating: oc,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, as = 8;
function lc(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + as,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - as,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + as,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - as,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function ik({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: s = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const r = Pe(), a = Q(null), c = Q(null), f = Q(() => {
  }), [u, k] = W(!1), [v, b] = W(null), p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, g = () => {
    p(), a.current = window.setTimeout(() => {
      a.current = null, k(!0);
    }, s);
  }, h = () => {
    p(), k(!1);
  };
  if (_e(() => () => p(), []), _e(() => {
    if (!u || l == null) return;
    const m = window.setTimeout(() => k(!1), l);
    return () => window.clearTimeout(m);
  }, [u, l]), _e(() => {
    if (i || !u) return;
    const m = (w) => {
      w.key === "Escape" && h();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [i, u]), _e(() => {
    if (!i) return;
    let m = null, w = null;
    const y = () => {
      m !== null && (window.clearTimeout(m), m = null);
    }, N = () => {
      y(), w = null, b(null);
    };
    f.current = N;
    const $ = (x) => {
      y(), w = x, m = window.setTimeout(() => {
        m = null, b(x);
      }, s);
    }, C = (x) => x instanceof Element ? x.closest(i) : null, z = (x) => {
      const S = C(x.target);
      !S || S === w || $(S);
    }, D = (x) => {
      const S = C(x.target);
      if (!S || S !== w) return;
      const T = x.relatedTarget;
      T instanceof Element && S.contains(T) || N();
    }, E = (x) => {
      x.key === "Escape" && N();
    }, O = () => N();
    return document.addEventListener("mouseover", z), document.addEventListener("mouseout", D), document.addEventListener("focusin", z), document.addEventListener("focusout", D), document.addEventListener("keydown", E), document.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      y(), document.removeEventListener("mouseover", z), document.removeEventListener("mouseout", D), document.removeEventListener("focusin", z), document.removeEventListener("focusout", D), document.removeEventListener("keydown", E), document.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O), w = null, b(null);
    };
  }, [i, s]), _e(() => {
    if (!i || v === null || l == null) return;
    const m = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(m);
  }, [i, v, l]), zs(() => {
    const m = v;
    if (!m) return;
    const w = m.getAttribute("aria-describedby");
    return m.setAttribute(
      "aria-describedby",
      [w, r].filter(Boolean).join(" ")
    ), () => {
      w == null ? m.removeAttribute("aria-describedby") : m.setAttribute("aria-describedby", w);
    };
  }, [v, r]), zs(() => {
    const m = c.current, w = v;
    !m || !w || Object.assign(
      m.style,
      lc(w.getBoundingClientRect(), n)
    );
  }, [v, n]), i)
    return v ? /* @__PURE__ */ M(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: r,
        className: [
          cn.tooltip,
          cn[n],
          cn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: cn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = gt(t) ? Ps(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? r : null
    ].filter((m) => typeof m == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [cn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: g,
        onMouseLeave: h,
        onFocus: g,
        onBlur: h,
        children: [
          _,
          u && /* @__PURE__ */ M(
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
const ac = "_dialog_xijci_1", ic = "_sm_xijci_72", cc = "_resizable_xijci_78", dc = "_md_xijci_81", uc = "_lg_xijci_85", fc = "_header_xijci_89", _c = "_title_xijci_100", hc = "_description_xijci_107", pc = "_close_xijci_114", mc = "_body_xijci_144", gc = "_footer_xijci_156", Zt = {
  dialog: ac,
  "se-dialog-in": "_se-dialog-in_xijci_1",
  sm: ic,
  resizable: cc,
  md: dc,
  lg: uc,
  header: fc,
  title: _c,
  description: hc,
  close: pc,
  body: mc,
  footer: gc
};
function bc({
  open: e,
  onClose: t,
  title: n,
  description: s,
  children: l,
  footer: i,
  size: d = "md",
  width: r,
  height: a,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  canClose: k,
  className: v
}) {
  const b = Q(null), p = Pe(), g = Pe(), h = Q(t);
  _e(() => {
    h.current = t;
  });
  const _ = Q(k);
  _e(() => {
    _.current = k;
  });
  const m = Q(f);
  _e(() => {
    m.current = f;
  });
  const w = Q(!1), y = Q(!1), N = R(() => {
    if (w.current) return;
    const z = _.current?.();
    if (z instanceof Promise) {
      z.then((D) => {
        D && !w.current && (w.current = !0, h.current());
      });
      return;
    }
    z !== !1 && (w.current = !0, h.current());
  }, []), $ = R(() => {
    if (y.current) {
      y.current = !1;
      return;
    }
    h.current();
  }, []), C = R(
    (z) => {
      if (z.key !== "Tab" || !b.current) return;
      const D = Array.from(
        b.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (O) => O.offsetWidth > 0 || O.offsetHeight > 0 || O === document.activeElement
      );
      if (D.length === 0) {
        z.preventDefault();
        return;
      }
      const E = D.indexOf(document.activeElement);
      if (z.shiftKey) {
        if (E <= 0) {
          z.preventDefault();
          const O = D[D.length - 1];
          O && O.focus();
        }
      } else if (E === -1 || E === D.length - 1) {
        z.preventDefault();
        const O = D[0];
        O && O.focus();
      }
    },
    []
  );
  return _e(() => {
    const z = b.current;
    if (z)
      if (e && !z.open) {
        const D = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        z.showModal(), (z.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? z.querySelector("button"))?.focus();
        const O = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const x = (S) => {
          S.preventDefault(), m.current && N();
        };
        return z.addEventListener("cancel", x), () => {
          z.removeEventListener("cancel", x), document.body.style.overflow = O, D?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && (y.current = w.current, w.current = !1, z.close());
  }, [e, N]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: b,
      className: [
        Zt.dialog,
        Zt[d],
        u ? Zt.resizable : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: $,
      onClick: (z) => {
        z.target === b.current && c && N();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": s ? g : void 0,
      onKeyDown: C,
      children: [
        n && /* @__PURE__ */ M("header", { className: Zt.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ o("h2", { id: p, className: Zt.title, children: n }),
            s && /* @__PURE__ */ o("p", { id: g, className: Zt.description, children: s })
          ] }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Zt.close,
              onClick: () => {
                N();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: Zt.body, children: l }),
        i && /* @__PURE__ */ o("footer", { className: Zt.footer, children: i })
      ]
    }
  );
}
const yc = "_typography_1jy8x_1", xc = "_h1_1jy8x_39", vc = "_h2_1jy8x_45", kc = "_h3_1jy8x_51", wc = "_h4_1jy8x_57", $c = "_h5_1jy8x_63", Nc = "_h6_1jy8x_69", Oc = "_button_1jy8x_99", Sc = "_caption_1jy8x_106", Cc = "_overline_1jy8x_112", Os = {
  typography: yc,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: xc,
  h2: vc,
  h3: kc,
  h4: wc,
  h5: $c,
  h6: Nc,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Oc,
  caption: Sc,
  overline: Cc,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Dc = {
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
}, zc = {
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
}, Ec = {
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
}, Mc = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ic = Le(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: s,
  text: l,
  visible: i = !0,
  className: d,
  children: r,
  ...a
}, c) {
  if (i === !1) return null;
  const f = n === "Auto" ? Dc[t] : Ec[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: c,
      className: [
        Os.typography,
        Os[zc[t]],
        s ? Os[Mc[s]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? r
    }
  );
}), zr = Ln(null);
function ck() {
  const e = hn(zr);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function dk({ children: e }) {
  const [t, n] = W([]), s = Q(0), l = be(
    () => ({
      confirm: (r = {}) => new Promise((a) => {
        s.current += 1;
        const c = s.current;
        n((f) => [...f, { seq: c, kind: "confirm", options: r, resolve: a }]);
      }),
      alert: (r = {}) => new Promise((a) => {
        s.current += 1;
        const c = s.current;
        n((f) => [...f, { seq: c, kind: "alert", options: r, resolve: a }]);
      })
    }),
    []
  ), i = t[0], d = (r) => {
    i && (i.kind === "confirm" ? i.resolve(r) : i.resolve(), n((a) => a.slice(1)));
  };
  return /* @__PURE__ */ M(zr.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      bc,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: i?.options.title ?? (i?.kind === "confirm" ? "Confirm" : "Alert"),
        size: i?.options.size,
        footer: i?.kind === "confirm" ? /* @__PURE__ */ M(rt, { children: [
          /* @__PURE__ */ o(Pn, { variant: "text", onClick: () => d(!1), children: i.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            Pn,
            {
              severity: i.options.tone ?? "primary",
              onClick: () => d(!0),
              children: i.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ o(Pn, { onClick: () => d(!0), children: i?.kind === "alert" ? i.options.okText ?? "OK" : "OK" }),
        children: i?.options.message != null && /* @__PURE__ */ o(Ic, { textStyle: "Body1", children: i.options.message })
      },
      i?.seq ?? 0
    )
  ] });
}
const jc = "_viewport_11t1p_1", Ac = "_topLeft_11t1p_13", Tc = "_topRight_11t1p_20", Pc = "_bottomLeft_11t1p_25", Lc = "_toast_11t1p_30", Rc = "_leaving_11t1p_61", Bc = "_info_11t1p_77", Fc = "_success_11t1p_86", Hc = "_warning_11t1p_95", qc = "_danger_11t1p_104", Kc = "_content_11t1p_113", Wc = "_title_11t1p_118", Uc = "_description_11t1p_141", Vc = "_dismiss_11t1p_148", Gc = "_actions_11t1p_169", Xc = "_action_11t1p_169", Yc = "_cancel_11t1p_177", Zc = "_progress_11t1p_215", Ot = {
  viewport: jc,
  topLeft: Ac,
  topRight: Tc,
  bottomLeft: Pc,
  toast: Lc,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Rc,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Bc,
  success: Fc,
  warning: Hc,
  danger: qc,
  content: Kc,
  title: Wc,
  description: Uc,
  dismiss: Vc,
  actions: Gc,
  action: Xc,
  cancel: Yc,
  progress: Zc,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Er = Ln(null);
function uk() {
  const e = hn(Er);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Jc = 200, Qc = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function fk({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: s = !0,
  className: l
}) {
  const [i, d] = W([]), [r, a] = W(!1), c = Q([]), f = Q(/* @__PURE__ */ new Map()), u = Q(!1), k = Q(0), v = (O) => {
    u.current = O, a(O);
  }, b = R((O) => {
    const x = f.current.get(O);
    x && (window.clearTimeout(x.timeoutId), x.remaining = Math.max(
      0,
      x.remaining - (Date.now() - x.startedAt)
    ));
  }, []), p = R((O) => {
    const x = f.current.get(O);
    x && (window.clearTimeout(x.timeoutId), f.current.delete(O));
  }, []), g = R(
    (O) => {
      p(O), d((x) => {
        const S = x.filter((T) => T.id !== O);
        return c.current = S, S;
      });
    },
    [p]
  ), h = R(
    (O) => {
      const x = c.current.find((S) => S.id === O);
      !x || x.leaving || (x.onAutoClose?.(), g(O));
    },
    [g]
  ), _ = R(
    (O) => {
      const x = f.current.get(O);
      !x || x.remaining <= 0 || (x.startedAt = Date.now(), x.timeoutId = window.setTimeout(() => h(O), x.remaining));
    },
    [h]
  ), m = R(() => {
    u.current || f.current.forEach((O, x) => b(x)), v(!0);
  }, [b]), w = R(() => {
    f.current.forEach((O, x) => _(x)), v(!1);
  }, [_]);
  _e(() => {
    if (!s) return;
    const O = () => {
      document.hidden ? m() : w();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [s, m, w]);
  const y = R(
    (O) => {
      const x = c.current.find((S) => S.id === O);
      !x || x.leaving || (x.onDismiss?.(), d((S) => {
        const T = S.map(
          (A) => A.id === O ? { ...A, leaving: !0 } : A
        );
        return c.current = T, T;
      }), window.setTimeout(() => g(O), Jc));
    },
    [g]
  ), N = R(
    (O) => {
      if (O.durationMs <= 0) return;
      const x = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(O.id, x), u.current || _(O.id);
    },
    [_]
  ), $ = R(
    (O) => {
      const x = c.current.find((T) => T.id === O.id), S = {
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
      d((T) => {
        const A = x ? T.map(
          (j) => j.id === S.id ? { ...S, leaving: !1 } : j
        ) : [...T, S];
        return c.current = A, A;
      }), x && p(S.id), N(S);
    },
    [t, n, N, p]
  ), C = be(() => ({ toast: $ }), [$]), z = be(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((O) => O.position)])),
    [n, i]
  ), D = s ? m : void 0, E = s ? w : void 0;
  return /* @__PURE__ */ M(Er.Provider, { value: C, children: [
    e,
    z.map((O) => /* @__PURE__ */ o(
      "div",
      {
        className: [Ot.viewport, Ot[Qc[O]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: D,
        onMouseLeave: E,
        children: i.filter((x) => x.position === O).map((x) => /* @__PURE__ */ M(
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
            onClick: x.closeOnClick ? () => y(x.id) : void 0,
            children: [
              /* @__PURE__ */ M("div", { className: Ot.content, children: [
                /* @__PURE__ */ o("div", { className: Ot.title, children: x.title }),
                x.description && /* @__PURE__ */ o("div", { className: Ot.description, children: x.description }),
                (x.action || x.cancel) && /* @__PURE__ */ M("div", { className: Ot.actions, children: [
                  x.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.action,
                      onClick: () => {
                        x.action?.onClick?.(), y(x.id);
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
                        x.cancel?.onClick?.(), y(x.id);
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
                  onClick: () => y(x.id),
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
const ed = "_alert_146r9_1", td = "_xs_146r9_28", nd = "_sm_146r9_38", sd = "_lg_146r9_48", rd = "_xl_146r9_58", od = "_primary_146r9_69", ld = "_secondary_146r9_74", ad = "_light_146r9_79", id = "_base_146r9_84", cd = "_dark_146r9_89", dd = "_info_146r9_94", ud = "_success_146r9_99", fd = "_warning_146r9_104", _d = "_danger_146r9_109", hd = "_flat_146r9_116", pd = "_outlined_146r9_123", md = "_filled_146r9_132", gd = "_text_146r9_139", bd = "_icon_146r9_181", yd = "_content_146r9_192", xd = "_title_146r9_197", vd = "_body_146r9_203", kd = "_dismiss_146r9_209", Wt = {
  alert: ed,
  xs: td,
  sm: nd,
  lg: sd,
  xl: rd,
  primary: od,
  secondary: ld,
  light: ad,
  base: id,
  dark: cd,
  info: dd,
  success: ud,
  warning: fd,
  danger: _d,
  flat: hd,
  outlined: pd,
  filled: md,
  text: gd,
  icon: bd,
  content: yd,
  title: xd,
  body: vd,
  dismiss: kd,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, wd = {
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
function _k({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: s = "md",
  title: l,
  icon: i,
  showIcon: d = !0,
  children: r,
  dismissible: a = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: u,
  className: k,
  ...v
}) {
  const [b, p] = W(!1);
  if (f === !1 || f === void 0 && b)
    return null;
  const g = () => {
    f === void 0 && p(!0), c?.(), u?.(!1);
  }, h = e, _ = $r(t, "filled"), m = rs(n), w = i ?? (d ? /* @__PURE__ */ o(ke, { icon: wd[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...v,
      className: [
        Wt.alert,
        Wt[h],
        Wt[_],
        m ? Wt[m] : null,
        Wt[s],
        k
      ].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ o("span", { className: Wt.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ M("div", { className: Wt.content, children: [
          l && /* @__PURE__ */ o("div", { className: Wt.title, children: l }),
          r && /* @__PURE__ */ o("div", { className: Wt.body, children: r })
        ] }),
        a && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Wt.dismiss,
            onClick: g,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const $d = "_skeleton_1xyce_1", Nd = "_text_1xyce_35", Od = "_circle_1xyce_40", Sd = "_rect_1xyce_44", sr = {
  skeleton: $d,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: Nd,
  circle: Od,
  rect: Sd
};
function hk({
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
      className: [sr.skeleton, sr[e], s].filter(Boolean).join(" "),
      style: l
    }
  );
}
function ys(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const Cd = "_row_juebr_1", Dd = "_start_juebr_14", zd = "_center_juebr_18", Ed = "_end_juebr_22", Md = "_stretch_juebr_26", Id = "_baseline_juebr_30", jd = "_normal_juebr_34", Ad = "_noWrap_juebr_90", Td = "_wrapReverse_juebr_94", is = {
  row: Cd,
  start: Dd,
  center: zd,
  end: Ed,
  stretch: Md,
  baseline: Id,
  normal: jd,
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
  noWrap: Ad,
  wrapReverse: Td
};
function rr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function pk({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: s = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...r
}) {
  const a = e != null ? ys(e) : null, c = t != null ? ys(t) : null, f = {
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
        is.row,
        is[n],
        is[`justify-${s}`],
        rr(l) != null ? is[rr(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...r
    }
  );
}
const Pd = "_column_sh0ss_1", Ld = "_Size1_sh0ss_15", Rd = "_Size2_sh0ss_24", Bd = "_Size3_sh0ss_33", Fd = "_Size4_sh0ss_42", Hd = "_Size5_sh0ss_51", qd = "_Size6_sh0ss_60", Kd = "_Size7_sh0ss_69", Wd = "_Size8_sh0ss_78", Ud = "_Size9_sh0ss_87", Vd = "_Size10_sh0ss_96", Gd = "_Size11_sh0ss_105", Xd = "_Size12_sh0ss_114", Yd = "_Offset0_sh0ss_119", Zd = "_Offset1_sh0ss_122", Jd = "_Offset2_sh0ss_127", Qd = "_Offset3_sh0ss_132", eu = "_Offset4_sh0ss_137", tu = "_Offset5_sh0ss_142", nu = "_Offset6_sh0ss_147", su = "_Offset7_sh0ss_152", ru = "_Offset8_sh0ss_157", ou = "_Offset9_sh0ss_162", lu = "_Offset10_sh0ss_167", au = "_Offset11_sh0ss_172", iu = "_Offset12_sh0ss_177", cu = "_OrderFirst_sh0ss_182", du = "_OrderLast_sh0ss_185", uu = "_Order0_sh0ss_188", fu = "_Order1_sh0ss_191", _u = "_Order2_sh0ss_194", hu = "_Order3_sh0ss_197", pu = "_Order4_sh0ss_200", mu = "_Order5_sh0ss_203", gu = "_Order6_sh0ss_206", bu = "_Order7_sh0ss_209", yu = "_Order8_sh0ss_212", xu = "_Order9_sh0ss_215", vu = "_Order10_sh0ss_218", ku = "_Order11_sh0ss_221", wu = "_Order12_sh0ss_224", $u = "_xsSize1_sh0ss_229", Nu = "_xsSize2_sh0ss_238", Ou = "_xsSize3_sh0ss_247", Su = "_xsSize4_sh0ss_256", Cu = "_xsSize5_sh0ss_265", Du = "_xsSize6_sh0ss_274", zu = "_xsSize7_sh0ss_283", Eu = "_xsSize8_sh0ss_292", Mu = "_xsSize9_sh0ss_301", Iu = "_xsSize10_sh0ss_310", ju = "_xsSize11_sh0ss_321", Au = "_xsSize12_sh0ss_332", Tu = "_xsOffset0_sh0ss_337", Pu = "_xsOffset1_sh0ss_340", Lu = "_xsOffset2_sh0ss_345", Ru = "_xsOffset3_sh0ss_350", Bu = "_xsOffset4_sh0ss_355", Fu = "_xsOffset5_sh0ss_360", Hu = "_xsOffset6_sh0ss_365", qu = "_xsOffset7_sh0ss_370", Ku = "_xsOffset8_sh0ss_375", Wu = "_xsOffset9_sh0ss_380", Uu = "_xsOffset10_sh0ss_385", Vu = "_xsOffset11_sh0ss_391", Gu = "_xsOffset12_sh0ss_397", Xu = "_xsOrderFirst_sh0ss_403", Yu = "_xsOrderLast_sh0ss_406", Zu = "_xsOrder0_sh0ss_409", Ju = "_xsOrder1_sh0ss_412", Qu = "_xsOrder2_sh0ss_415", ef = "_xsOrder3_sh0ss_418", tf = "_xsOrder4_sh0ss_421", nf = "_xsOrder5_sh0ss_424", sf = "_xsOrder6_sh0ss_427", rf = "_xsOrder7_sh0ss_430", of = "_xsOrder8_sh0ss_433", lf = "_xsOrder9_sh0ss_436", af = "_xsOrder10_sh0ss_439", cf = "_xsOrder11_sh0ss_442", df = "_xsOrder12_sh0ss_445", uf = "_smSize1_sh0ss_451", ff = "_smSize2_sh0ss_460", _f = "_smSize3_sh0ss_469", hf = "_smSize4_sh0ss_478", pf = "_smSize5_sh0ss_487", mf = "_smSize6_sh0ss_496", gf = "_smSize7_sh0ss_505", bf = "_smSize8_sh0ss_514", yf = "_smSize9_sh0ss_523", xf = "_smSize10_sh0ss_532", vf = "_smSize11_sh0ss_543", kf = "_smSize12_sh0ss_554", wf = "_smOffset0_sh0ss_559", $f = "_smOffset1_sh0ss_562", Nf = "_smOffset2_sh0ss_567", Of = "_smOffset3_sh0ss_572", Sf = "_smOffset4_sh0ss_577", Cf = "_smOffset5_sh0ss_582", Df = "_smOffset6_sh0ss_587", zf = "_smOffset7_sh0ss_592", Ef = "_smOffset8_sh0ss_597", Mf = "_smOffset9_sh0ss_602", If = "_smOffset10_sh0ss_607", jf = "_smOffset11_sh0ss_613", Af = "_smOffset12_sh0ss_619", Tf = "_smOrderFirst_sh0ss_625", Pf = "_smOrderLast_sh0ss_628", Lf = "_smOrder0_sh0ss_631", Rf = "_smOrder1_sh0ss_634", Bf = "_smOrder2_sh0ss_637", Ff = "_smOrder3_sh0ss_640", Hf = "_smOrder4_sh0ss_643", qf = "_smOrder5_sh0ss_646", Kf = "_smOrder6_sh0ss_649", Wf = "_smOrder7_sh0ss_652", Uf = "_smOrder8_sh0ss_655", Vf = "_smOrder9_sh0ss_658", Gf = "_smOrder10_sh0ss_661", Xf = "_smOrder11_sh0ss_664", Yf = "_smOrder12_sh0ss_667", Zf = "_mdSize1_sh0ss_673", Jf = "_mdSize2_sh0ss_682", Qf = "_mdSize3_sh0ss_691", e_ = "_mdSize4_sh0ss_700", t_ = "_mdSize5_sh0ss_709", n_ = "_mdSize6_sh0ss_718", s_ = "_mdSize7_sh0ss_727", r_ = "_mdSize8_sh0ss_736", o_ = "_mdSize9_sh0ss_745", l_ = "_mdSize10_sh0ss_754", a_ = "_mdSize11_sh0ss_765", i_ = "_mdSize12_sh0ss_776", c_ = "_mdOffset0_sh0ss_781", d_ = "_mdOffset1_sh0ss_784", u_ = "_mdOffset2_sh0ss_789", f_ = "_mdOffset3_sh0ss_794", __ = "_mdOffset4_sh0ss_799", h_ = "_mdOffset5_sh0ss_804", p_ = "_mdOffset6_sh0ss_809", m_ = "_mdOffset7_sh0ss_814", g_ = "_mdOffset8_sh0ss_819", b_ = "_mdOffset9_sh0ss_824", y_ = "_mdOffset10_sh0ss_829", x_ = "_mdOffset11_sh0ss_835", v_ = "_mdOffset12_sh0ss_841", k_ = "_mdOrderFirst_sh0ss_847", w_ = "_mdOrderLast_sh0ss_850", $_ = "_mdOrder0_sh0ss_853", N_ = "_mdOrder1_sh0ss_856", O_ = "_mdOrder2_sh0ss_859", S_ = "_mdOrder3_sh0ss_862", C_ = "_mdOrder4_sh0ss_865", D_ = "_mdOrder5_sh0ss_868", z_ = "_mdOrder6_sh0ss_871", E_ = "_mdOrder7_sh0ss_874", M_ = "_mdOrder8_sh0ss_877", I_ = "_mdOrder9_sh0ss_880", j_ = "_mdOrder10_sh0ss_883", A_ = "_mdOrder11_sh0ss_886", T_ = "_mdOrder12_sh0ss_889", P_ = "_lgSize1_sh0ss_895", L_ = "_lgSize2_sh0ss_904", R_ = "_lgSize3_sh0ss_913", B_ = "_lgSize4_sh0ss_922", F_ = "_lgSize5_sh0ss_931", H_ = "_lgSize6_sh0ss_940", q_ = "_lgSize7_sh0ss_949", K_ = "_lgSize8_sh0ss_958", W_ = "_lgSize9_sh0ss_967", U_ = "_lgSize10_sh0ss_976", V_ = "_lgSize11_sh0ss_987", G_ = "_lgSize12_sh0ss_998", X_ = "_lgOffset0_sh0ss_1003", Y_ = "_lgOffset1_sh0ss_1006", Z_ = "_lgOffset2_sh0ss_1011", J_ = "_lgOffset3_sh0ss_1016", Q_ = "_lgOffset4_sh0ss_1021", eh = "_lgOffset5_sh0ss_1026", th = "_lgOffset6_sh0ss_1031", nh = "_lgOffset7_sh0ss_1036", sh = "_lgOffset8_sh0ss_1041", rh = "_lgOffset9_sh0ss_1046", oh = "_lgOffset10_sh0ss_1051", lh = "_lgOffset11_sh0ss_1057", ah = "_lgOffset12_sh0ss_1063", ih = "_lgOrderFirst_sh0ss_1069", ch = "_lgOrderLast_sh0ss_1072", dh = "_lgOrder0_sh0ss_1075", uh = "_lgOrder1_sh0ss_1078", fh = "_lgOrder2_sh0ss_1081", _h = "_lgOrder3_sh0ss_1084", hh = "_lgOrder4_sh0ss_1087", ph = "_lgOrder5_sh0ss_1090", mh = "_lgOrder6_sh0ss_1093", gh = "_lgOrder7_sh0ss_1096", bh = "_lgOrder8_sh0ss_1099", yh = "_lgOrder9_sh0ss_1102", xh = "_lgOrder10_sh0ss_1105", vh = "_lgOrder11_sh0ss_1108", kh = "_lgOrder12_sh0ss_1111", wh = "_xlSize1_sh0ss_1117", $h = "_xlSize2_sh0ss_1126", Nh = "_xlSize3_sh0ss_1135", Oh = "_xlSize4_sh0ss_1144", Sh = "_xlSize5_sh0ss_1153", Ch = "_xlSize6_sh0ss_1162", Dh = "_xlSize7_sh0ss_1171", zh = "_xlSize8_sh0ss_1180", Eh = "_xlSize9_sh0ss_1189", Mh = "_xlSize10_sh0ss_1198", Ih = "_xlSize11_sh0ss_1209", jh = "_xlSize12_sh0ss_1220", Ah = "_xlOffset0_sh0ss_1225", Th = "_xlOffset1_sh0ss_1228", Ph = "_xlOffset2_sh0ss_1233", Lh = "_xlOffset3_sh0ss_1238", Rh = "_xlOffset4_sh0ss_1243", Bh = "_xlOffset5_sh0ss_1248", Fh = "_xlOffset6_sh0ss_1253", Hh = "_xlOffset7_sh0ss_1258", qh = "_xlOffset8_sh0ss_1263", Kh = "_xlOffset9_sh0ss_1268", Wh = "_xlOffset10_sh0ss_1273", Uh = "_xlOffset11_sh0ss_1279", Vh = "_xlOffset12_sh0ss_1285", Gh = "_xlOrderFirst_sh0ss_1291", Xh = "_xlOrderLast_sh0ss_1294", Yh = "_xlOrder0_sh0ss_1297", Zh = "_xlOrder1_sh0ss_1300", Jh = "_xlOrder2_sh0ss_1303", Qh = "_xlOrder3_sh0ss_1306", ep = "_xlOrder4_sh0ss_1309", tp = "_xlOrder5_sh0ss_1312", np = "_xlOrder6_sh0ss_1315", sp = "_xlOrder7_sh0ss_1318", rp = "_xlOrder8_sh0ss_1321", op = "_xlOrder9_sh0ss_1324", lp = "_xlOrder10_sh0ss_1327", ap = "_xlOrder11_sh0ss_1330", ip = "_xlOrder12_sh0ss_1333", cp = "_xxSize1_sh0ss_1339", dp = "_xxSize2_sh0ss_1348", up = "_xxSize3_sh0ss_1357", fp = "_xxSize4_sh0ss_1366", _p = "_xxSize5_sh0ss_1375", hp = "_xxSize6_sh0ss_1384", pp = "_xxSize7_sh0ss_1393", mp = "_xxSize8_sh0ss_1402", gp = "_xxSize9_sh0ss_1411", bp = "_xxSize10_sh0ss_1420", yp = "_xxSize11_sh0ss_1431", xp = "_xxSize12_sh0ss_1442", vp = "_xxOffset0_sh0ss_1447", kp = "_xxOffset1_sh0ss_1450", wp = "_xxOffset2_sh0ss_1455", $p = "_xxOffset3_sh0ss_1460", Np = "_xxOffset4_sh0ss_1465", Op = "_xxOffset5_sh0ss_1470", Sp = "_xxOffset6_sh0ss_1475", Cp = "_xxOffset7_sh0ss_1480", Dp = "_xxOffset8_sh0ss_1485", zp = "_xxOffset9_sh0ss_1490", Ep = "_xxOffset10_sh0ss_1495", Mp = "_xxOffset11_sh0ss_1501", Ip = "_xxOffset12_sh0ss_1507", jp = "_xxOrderFirst_sh0ss_1513", Ap = "_xxOrderLast_sh0ss_1516", Tp = "_xxOrder0_sh0ss_1519", Pp = "_xxOrder1_sh0ss_1522", Lp = "_xxOrder2_sh0ss_1525", Rp = "_xxOrder3_sh0ss_1528", Bp = "_xxOrder4_sh0ss_1531", Fp = "_xxOrder5_sh0ss_1534", Hp = "_xxOrder6_sh0ss_1537", qp = "_xxOrder7_sh0ss_1540", Kp = "_xxOrder8_sh0ss_1543", Wp = "_xxOrder9_sh0ss_1546", Up = "_xxOrder10_sh0ss_1549", Vp = "_xxOrder11_sh0ss_1552", Gp = "_xxOrder12_sh0ss_1555", cs = {
  column: Pd,
  Size1: Ld,
  Size2: Rd,
  Size3: Bd,
  Size4: Fd,
  Size5: Hd,
  Size6: qd,
  Size7: Kd,
  Size8: Wd,
  Size9: Ud,
  Size10: Vd,
  Size11: Gd,
  Size12: Xd,
  Offset0: Yd,
  Offset1: Zd,
  Offset2: Jd,
  Offset3: Qd,
  Offset4: eu,
  Offset5: tu,
  Offset6: nu,
  Offset7: su,
  Offset8: ru,
  Offset9: ou,
  Offset10: lu,
  Offset11: au,
  Offset12: iu,
  OrderFirst: cu,
  OrderLast: du,
  Order0: uu,
  Order1: fu,
  Order2: _u,
  Order3: hu,
  Order4: pu,
  Order5: mu,
  Order6: gu,
  Order7: bu,
  Order8: yu,
  Order9: xu,
  Order10: vu,
  Order11: ku,
  Order12: wu,
  xsSize1: $u,
  xsSize2: Nu,
  xsSize3: Ou,
  xsSize4: Su,
  xsSize5: Cu,
  xsSize6: Du,
  xsSize7: zu,
  xsSize8: Eu,
  xsSize9: Mu,
  xsSize10: Iu,
  xsSize11: ju,
  xsSize12: Au,
  xsOffset0: Tu,
  xsOffset1: Pu,
  xsOffset2: Lu,
  xsOffset3: Ru,
  xsOffset4: Bu,
  xsOffset5: Fu,
  xsOffset6: Hu,
  xsOffset7: qu,
  xsOffset8: Ku,
  xsOffset9: Wu,
  xsOffset10: Uu,
  xsOffset11: Vu,
  xsOffset12: Gu,
  xsOrderFirst: Xu,
  xsOrderLast: Yu,
  xsOrder0: Zu,
  xsOrder1: Ju,
  xsOrder2: Qu,
  xsOrder3: ef,
  xsOrder4: tf,
  xsOrder5: nf,
  xsOrder6: sf,
  xsOrder7: rf,
  xsOrder8: of,
  xsOrder9: lf,
  xsOrder10: af,
  xsOrder11: cf,
  xsOrder12: df,
  smSize1: uf,
  smSize2: ff,
  smSize3: _f,
  smSize4: hf,
  smSize5: pf,
  smSize6: mf,
  smSize7: gf,
  smSize8: bf,
  smSize9: yf,
  smSize10: xf,
  smSize11: vf,
  smSize12: kf,
  smOffset0: wf,
  smOffset1: $f,
  smOffset2: Nf,
  smOffset3: Of,
  smOffset4: Sf,
  smOffset5: Cf,
  smOffset6: Df,
  smOffset7: zf,
  smOffset8: Ef,
  smOffset9: Mf,
  smOffset10: If,
  smOffset11: jf,
  smOffset12: Af,
  smOrderFirst: Tf,
  smOrderLast: Pf,
  smOrder0: Lf,
  smOrder1: Rf,
  smOrder2: Bf,
  smOrder3: Ff,
  smOrder4: Hf,
  smOrder5: qf,
  smOrder6: Kf,
  smOrder7: Wf,
  smOrder8: Uf,
  smOrder9: Vf,
  smOrder10: Gf,
  smOrder11: Xf,
  smOrder12: Yf,
  mdSize1: Zf,
  mdSize2: Jf,
  mdSize3: Qf,
  mdSize4: e_,
  mdSize5: t_,
  mdSize6: n_,
  mdSize7: s_,
  mdSize8: r_,
  mdSize9: o_,
  mdSize10: l_,
  mdSize11: a_,
  mdSize12: i_,
  mdOffset0: c_,
  mdOffset1: d_,
  mdOffset2: u_,
  mdOffset3: f_,
  mdOffset4: __,
  mdOffset5: h_,
  mdOffset6: p_,
  mdOffset7: m_,
  mdOffset8: g_,
  mdOffset9: b_,
  mdOffset10: y_,
  mdOffset11: x_,
  mdOffset12: v_,
  mdOrderFirst: k_,
  mdOrderLast: w_,
  mdOrder0: $_,
  mdOrder1: N_,
  mdOrder2: O_,
  mdOrder3: S_,
  mdOrder4: C_,
  mdOrder5: D_,
  mdOrder6: z_,
  mdOrder7: E_,
  mdOrder8: M_,
  mdOrder9: I_,
  mdOrder10: j_,
  mdOrder11: A_,
  mdOrder12: T_,
  lgSize1: P_,
  lgSize2: L_,
  lgSize3: R_,
  lgSize4: B_,
  lgSize5: F_,
  lgSize6: H_,
  lgSize7: q_,
  lgSize8: K_,
  lgSize9: W_,
  lgSize10: U_,
  lgSize11: V_,
  lgSize12: G_,
  lgOffset0: X_,
  lgOffset1: Y_,
  lgOffset2: Z_,
  lgOffset3: J_,
  lgOffset4: Q_,
  lgOffset5: eh,
  lgOffset6: th,
  lgOffset7: nh,
  lgOffset8: sh,
  lgOffset9: rh,
  lgOffset10: oh,
  lgOffset11: lh,
  lgOffset12: ah,
  lgOrderFirst: ih,
  lgOrderLast: ch,
  lgOrder0: dh,
  lgOrder1: uh,
  lgOrder2: fh,
  lgOrder3: _h,
  lgOrder4: hh,
  lgOrder5: ph,
  lgOrder6: mh,
  lgOrder7: gh,
  lgOrder8: bh,
  lgOrder9: yh,
  lgOrder10: xh,
  lgOrder11: vh,
  lgOrder12: kh,
  xlSize1: wh,
  xlSize2: $h,
  xlSize3: Nh,
  xlSize4: Oh,
  xlSize5: Sh,
  xlSize6: Ch,
  xlSize7: Dh,
  xlSize8: zh,
  xlSize9: Eh,
  xlSize10: Mh,
  xlSize11: Ih,
  xlSize12: jh,
  xlOffset0: Ah,
  xlOffset1: Th,
  xlOffset2: Ph,
  xlOffset3: Lh,
  xlOffset4: Rh,
  xlOffset5: Bh,
  xlOffset6: Fh,
  xlOffset7: Hh,
  xlOffset8: qh,
  xlOffset9: Kh,
  xlOffset10: Wh,
  xlOffset11: Uh,
  xlOffset12: Vh,
  xlOrderFirst: Gh,
  xlOrderLast: Xh,
  xlOrder0: Yh,
  xlOrder1: Zh,
  xlOrder2: Jh,
  xlOrder3: Qh,
  xlOrder4: ep,
  xlOrder5: tp,
  xlOrder6: np,
  xlOrder7: sp,
  xlOrder8: rp,
  xlOrder9: op,
  xlOrder10: lp,
  xlOrder11: ap,
  xlOrder12: ip,
  xxSize1: cp,
  xxSize2: dp,
  xxSize3: up,
  xxSize4: fp,
  xxSize5: _p,
  xxSize6: hp,
  xxSize7: pp,
  xxSize8: mp,
  xxSize9: gp,
  xxSize10: bp,
  xxSize11: yp,
  xxSize12: xp,
  xxOffset0: vp,
  xxOffset1: kp,
  xxOffset2: wp,
  xxOffset3: $p,
  xxOffset4: Np,
  xxOffset5: Op,
  xxOffset6: Sp,
  xxOffset7: Cp,
  xxOffset8: Dp,
  xxOffset9: zp,
  xxOffset10: Ep,
  xxOffset11: Mp,
  xxOffset12: Ip,
  xxOrderFirst: jp,
  xxOrderLast: Ap,
  xxOrder0: Tp,
  xxOrder1: Pp,
  xxOrder2: Lp,
  xxOrder3: Rp,
  xxOrder4: Bp,
  xxOrder5: Fp,
  xxOrder6: Hp,
  xxOrder7: qp,
  xxOrder8: Kp,
  xxOrder9: Wp,
  xxOrder10: Up,
  xxOrder11: Vp,
  xxOrder12: Gp
}, Xp = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Yp(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Zp(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Jp(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Qp(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Jp(n, t), `${e}Order${t}`);
}
function mk({ className: e, style: t, ...n }) {
  const s = [cs.column], l = { ...t };
  for (const [E, O, x, S] of Xp) {
    const T = n[O], A = n[x], j = n[S];
    if (T != null) {
      Yp(O, T);
      const F = cs[`${E}Size${T}`];
      F && s.push(F);
    }
    if (A != null) {
      Zp(x, A);
      const F = cs[`${E}Offset${A}`];
      F && s.push(F);
    }
    if (j != null) {
      const F = cs[Qp(E, j, S)];
      F && s.push(F);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: r,
    offsetXs: a,
    sizeSm: c,
    offsetSm: f,
    sizeMd: u,
    offsetMd: k,
    sizeLg: v,
    offsetLg: b,
    sizeXl: p,
    offsetXl: g,
    sizeXx: h,
    offsetXx: _,
    order: m,
    orderXs: w,
    orderSm: y,
    orderMd: N,
    orderLg: $,
    orderXl: C,
    orderXx: z,
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
const em = "_stack_bmbbp_1", Gn = {
  stack: em,
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
function or(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function gk({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: s = 16,
  align: l,
  justify: i,
  className: d,
  style: r,
  ...a
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...s != null ? { gap: ys(s) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Gn.stack,
        Gn[`dir-${c}`],
        or(n) !== "wrap" ? Gn[`wrap-${or(n)}`] : null,
        l != null ? Gn[`align-${l}`] : null,
        i != null ? Gn[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const tm = "_autogrid_16x9f_1", nm = {
  autogrid: tm
};
function bk({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: s,
  visible: l = !0,
  ...i
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: ys(t) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [nm.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
    }
  );
}
const sm = "_layout_fxvw1_1", rm = "_row_fxvw1_7", om = "_grid_fxvw1_21", lm = "_gridRight_fxvw1_27", am = "_gridHeader_fxvw1_31", im = "_gridFooter_fxvw1_36", cm = "_gridContents_fxvw1_41", dm = "_gridBody_fxvw1_45", Jt = {
  layout: sm,
  row: rm,
  grid: om,
  gridRight: lm,
  gridHeader: am,
  gridFooter: im,
  gridContents: cm,
  gridBody: dm
}, um = "_footer_3be5w_1", fm = "_sticky_3be5w_9", lr = {
  footer: um,
  sticky: fm
};
function _m({
  sticky: e = !1,
  className: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [lr.footer, e ? lr.sticky : null, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}
const hm = "_header_1tw8b_1", pm = "_sticky_1tw8b_9", ar = {
  header: hm,
  sticky: pm
};
function mm({
  sticky: e = !1,
  className: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [ar.header, e ? ar.sticky : null, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}
const gm = "_sidebar_175d5_1", bm = "_sticky_175d5_23", ym = "_left_175d5_41", xm = "_right_175d5_45", vm = "_start_175d5_50", km = "_end_175d5_54", wm = "_fullHeight_175d5_60", $m = "_collapsed_175d5_64", Nm = "_responsive_175d5_72", Om = "_overlay_175d5_80", Sm = "_mask_175d5_108", dn = {
  sidebar: gm,
  sticky: bm,
  left: ym,
  right: xm,
  start: vm,
  end: km,
  fullHeight: wm,
  collapsed: $m,
  responsive: Nm,
  overlay: Om,
  mask: Sm
};
function Cm({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: s = !1,
  fullHeight: l = !1,
  sticky: i = !1,
  onClose: d,
  className: r,
  children: a,
  ...c
}) {
  return _e(() => {
    if (!s || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [s, t, d]), /* @__PURE__ */ M(rt, { children: [
    s && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${dn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
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
          i && !s && !l ? dn.sticky : null,
          r
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: a
      }
    )
  ] });
}
function yk(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(rt, { children: e.children });
  const { className: t, children: n, ...s } = e, l = [], i = [], d = [], r = [], a = [], c = [];
  os.forEach(n, (k) => {
    if (!gt(k)) {
      d.push(k);
      return;
    }
    if (k.type === mm)
      l.push(k);
    else if (k.type === _m)
      i.push(k);
    else if (k.type === Cm) {
      const v = k, b = v.props.position;
      c.push(v), (b === "right" || b === "end" ? a : r).push(v);
    } else
      d.push(k);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const k = u ? a : r;
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          Jt.layout,
          Jt.grid,
          u ? Jt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...s,
        children: [
          l.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridHeader, children: l }),
          /* @__PURE__ */ M("div", { className: Jt.gridContents, children: [
            k,
            /* @__PURE__ */ o("div", { className: Jt.gridBody, children: d })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Jt.layout, t].filter(Boolean).join(" "),
      ...s,
      children: [
        l,
        /* @__PURE__ */ M("div", { className: Jt.row, children: [
          r,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const Dm = "_body_1ge00_4", zm = "_bare_1ge00_12", ir = {
  body: Dm,
  bare: zm
};
function xk({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: s,
  ...l
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [ir.body, t ? null : ir.bare, n].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}
const Em = "_toggle_lxnk5_1", Mm = {
  toggle: Em
};
function vk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: s = "button",
  children: l,
  ...i
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: s,
      "aria-label": t,
      className: [Mm.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ o(ke, { icon: e, size: 20 })
    }
  );
}
const Im = "_track_14127_1", jm = "_bar_14127_31", Am = "_primary_14127_39", Tm = "_success_14127_43", Pm = "_warning_14127_47", Lm = "_danger_14127_51", Rm = "_indeterminate_14127_149", Bm = "_circular_14127_163", Fm = "_fill_14127_203", St = {
  track: Im,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: jm,
  primary: Am,
  success: Tm,
  warning: Pm,
  danger: Lm,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Rm,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Bm,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Fm,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function kk({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: s,
  indeterminate: l = !1,
  variant: i = "linear",
  size: d = "md",
  className: r,
  visible: a = !0,
  ...c
}) {
  if (a === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const v = typeof d == "string", b = 2, p = 10.5, g = 2 * Math.PI * p, h = g * (l ? 0.75 : 1), _ = l ? 0 : g * (1 - u / 100), m = rs(s);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: v ? void 0 : d,
        height: v ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          St.circular,
          St[n],
          m ? St[m] : null,
          v ? St[`circular-${d}`] : null,
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
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: St.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: b,
              strokeDasharray: `${h} ${g}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const k = rs(s);
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
        typeof d == "string" ? St[`linear-${d}`] : null,
        l ? St.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...c,
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
const Hm = "_wrapper_tk30z_1", qm = {
  wrapper: Hm
}, Km = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Mr = "dx-palette", Wm = "data-palette";
function Um(e, t) {
  const n = e === void 0 ? Mr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(n);
      return s != null && t.includes(s) ? s : void 0;
    } catch {
      return;
    }
}
function Vm(e, t) {
  const n = e === void 0 ? Mr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function wk({
  themes: e = Km,
  value: t,
  defaultValue: n,
  storageKey: s,
  attribute: l = Wm,
  onChange: i,
  label: d = "Theme",
  placeholder: r = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, k] = W(void 0), v = t !== void 0, b = t ?? u ?? Um(s, e) ?? n, p = b ?? "", g = Q(void 0);
  _e(() => {
    if (v) return;
    const _ = document.documentElement;
    if (b === void 0) {
      g.current !== void 0 && _.getAttribute(l) === g.current && (_.removeAttribute(l), g.current = void 0);
      return;
    }
    _.setAttribute(l, b), g.current = b;
  }, [b, l, v]);
  const h = (_) => {
    const m = _.target.value;
    v || (k(m), Vm(s, m)), i?.(m);
  };
  return /* @__PURE__ */ M("label", { className: [qm.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ M(On, { id: a, size: c, value: p, onChange: h, children: [
      b === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: r }),
      b !== void 0 && !e.includes(b) && /* @__PURE__ */ o("option", { value: b, children: b }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function Gm(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Ir(e) {
  const [t, n] = W(() => Gm(e));
  return _e(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const s = window.matchMedia(e);
    n(s.matches);
    const l = (i) => n(i.matches);
    return typeof s.addEventListener == "function" ? (s.addEventListener("change", l), () => s.removeEventListener("change", l)) : (s.addListener(l), () => s.removeListener(l));
  }, [e]), t;
}
const Xm = "_pressed_12x15_8", Ym = {
  pressed: Xm
}, Zm = Le(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: s,
    toggleVariant: l,
    toggleSeverity: i = "primary",
    toggleShade: d = "darker",
    toggleContent: r,
    size: a = "md",
    className: c,
    onClick: f,
    children: u,
    variant: k,
    severity: v,
    shade: b,
    ...p
  }, g) {
    const [h, _] = W(n), m = t ?? h, w = (y) => {
      const N = !m;
      t === void 0 && _(N), s?.(N), f?.(y);
    };
    return /* @__PURE__ */ o(
      Pn,
      {
        ...p,
        ref: g,
        variant: m && l ? l : k,
        severity: m ? i : v,
        shade: m ? d : b,
        size: a,
        "aria-pressed": m,
        className: [m ? Ym.pressed : null, c].filter(Boolean).join(" "),
        onClick: w,
        children: m && r !== void 0 ? r : u
      }
    );
  }
), jr = "dx-theme";
function Jm(e) {
  const t = e === void 0 ? jr : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Qm(e, t) {
  const n = e === void 0 ? jr : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function $k({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: s,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: r
}) {
  const a = Ir("(prefers-color-scheme: dark)"), [c, f] = W(void 0), u = e !== void 0, k = e ?? c ?? Jm(n) ?? t ?? "system", v = k === "system" ? a ? "dark" : "light" : k;
  return _e(() => {
    if (!u) {
      if (k === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = k;
    }
  }, [k, u]), /* @__PURE__ */ o(
    Zm,
    {
      id: i,
      size: r,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: v === "dark",
      onChange: (p) => {
        const g = p ? "dark" : "light";
        u || (f(g), Qm(n, g)), s?.(g);
      },
      toggleContent: /* @__PURE__ */ o(ke, { icon: "light_mode", size: r ?? "md" }),
      children: /* @__PURE__ */ o(ke, { icon: "dark_mode", size: r ?? "md" })
    }
  );
}
function e1(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, s = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(s);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(s - 8, n >>> 0, !0), i.setUint32(s - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], r = Array.from(
    { length: 64 },
    (p, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), a = (p, g) => p + g | 0, c = (p, g) => p << g | p >>> 32 - g;
  let f = 1732584193, u = 4023233417, k = 2562383102, v = 271733878;
  for (let p = 0; p < s; p += 64) {
    const g = [];
    for (let y = 0; y < 16; y += 1)
      g.push(i.getUint32(p + y * 4, !0));
    let h = f, _ = u, m = k, w = v;
    for (let y = 0; y < 64; y += 1) {
      let N, $;
      y < 16 ? (N = _ & m | ~_ & w, $ = y) : y < 32 ? (N = w & _ | ~w & m, $ = (5 * y + 1) % 16) : y < 48 ? (N = _ ^ m ^ w, $ = (3 * y + 5) % 16) : (N = m ^ (_ | ~w), $ = 7 * y % 16), N = a(a(a(N, h), r[y]), g[$]), h = w, w = m, m = _, _ = a(_, c(N, d[Math.floor(y / 16) * 4 + y % 4]));
    }
    f = a(f, h), u = a(u, _), k = a(k, m), v = a(v, w);
  }
  const b = (p) => {
    let g = "";
    for (let h = 0; h < 4; h += 1)
      g += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return b(f) + b(u) + b(k) + b(v);
}
const t1 = "_avatar_1mhfr_1", n1 = "_xs_1mhfr_12", s1 = "_sm_1mhfr_18", r1 = "_md_1mhfr_24", o1 = "_lg_1mhfr_30", l1 = "_xl_1mhfr_36", a1 = "_initials_1mhfr_42", i1 = "_image_1mhfr_57", c1 = "_status_1mhfr_64", d1 = "_online_1mhfr_84", u1 = "_offline_1mhfr_88", f1 = "_away_1mhfr_92", zn = {
  avatar: t1,
  xs: n1,
  sm: s1,
  md: r1,
  lg: o1,
  xl: l1,
  initials: a1,
  image: i1,
  status: c1,
  online: d1,
  offline: u1,
  away: f1
}, _1 = {
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
function h1(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function p1(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ms[t % ms.length] ?? ms[0];
}
function Nk({
  name: e,
  src: t,
  email: n,
  gravatarDefault: s = "retro",
  gravatarRating: l = "g",
  alt: i,
  size: d = "md",
  status: r,
  className: a
}) {
  const c = be(() => e ? h1(e) : "?", [e]), f = be(() => e ? p1(e) : ms[0], [e]), u = be(() => {
    if (t != null || n == null) return;
    const w = n.trim().toLowerCase();
    return w === "" ? void 0 : `https://secure.gravatar.com/avatar/${e1(w)}?d=${s}&s=${_1[d]}&r=${l}`;
  }, [t, n, s, l, d]), k = t ?? u, [v, b] = W(null), p = k != null && v !== k, g = p && i === "", h = i ?? e ?? "avatar", _ = r ? `${h}, ${r}` : h, m = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: zn.image,
        src: k,
        alt: g ? "" : r ? _ : h,
        onError: () => b(k ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: zn.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        zn.avatar,
        zn[d],
        r ? zn[r] : null,
        a
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        m,
        r && /* @__PURE__ */ o("span", { className: zn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const m1 = "_root_zzwfz_1", g1 = "_left_zzwfz_6", b1 = "_right_zzwfz_7", y1 = "_panel_zzwfz_12", x1 = "_bottom_zzwfz_20", v1 = "_tabList_zzwfz_24", k1 = "_underline_zzwfz_53", w1 = "_pills_zzwfz_72", $1 = "_tab_zzwfz_24", N1 = "_active_zzwfz_113", O1 = "_disabled_zzwfz_139", Qt = {
  root: m1,
  left: g1,
  right: b1,
  panel: y1,
  bottom: x1,
  tabList: v1,
  underline: k1,
  pills: w1,
  tab: $1,
  active: N1,
  disabled: O1
};
function Ok({
  items: e,
  value: t,
  defaultValue: n,
  onChange: s,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const r = Pe(), a = Q(null), [c, f] = W(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, k = i === "left" || i === "right", v = (g) => {
    f(g), s?.(g);
  }, b = (g) => {
    const h = e.filter((w) => !w.disabled), _ = h.findIndex((w) => w.key === u);
    let m = -1;
    g.key === "ArrowRight" || k && g.key === "ArrowDown" ? m = (_ + 1) % h.length : g.key === "ArrowLeft" || k && g.key === "ArrowUp" ? m = (_ - 1 + h.length) % h.length : g.key === "Home" ? m = 0 : g.key === "End" && (m = h.length - 1), m >= 0 && (g.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[m]?.key ?? "")}"]`
    )?.focus(), v(h[m]?.key ?? ""));
  }, p = e.find((g) => g.key === u);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Qt.root, Qt[i], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Qt.tabList, Qt[l], Qt[i]].filter(Boolean).join(" "),
            onKeyDown: b,
            children: e.map((g) => {
              const h = g.key === u;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": h,
                  "aria-controls": `${r}-panel-${g.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Qt.tab,
                    h ? Qt.active : null,
                    g.disabled ? Qt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => v(g.key),
                  children: g.label
                },
                g.key
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
const S1 = "_root_1l1j2_1", C1 = "_item_1l1j2_9", D1 = "_heading_1l1j2_13", z1 = "_trigger_1l1j2_17", E1 = "_disabled_1l1j2_34", M1 = "_title_1l1j2_48", I1 = "_chevron_1l1j2_52", j1 = "_open_1l1j2_59", A1 = "_content_1l1j2_63", en = {
  root: S1,
  item: C1,
  heading: D1,
  trigger: z1,
  disabled: E1,
  title: M1,
  chevron: I1,
  open: j1,
  content: A1
};
function Sk({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: s,
  onChange: l,
  className: i
}) {
  const d = Pe(), [r, a] = W(
    s ?? []
  ), c = n ?? r, f = (u) => {
    const k = c.includes(u) ? c.filter((v) => v !== u) : t ? [...c, u] : [u];
    a(k), l?.(k);
  };
  return /* @__PURE__ */ o("div", { className: [en.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const k = c.includes(u.key), v = `${d}-panel-${u.key}`, b = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ M("div", { className: en.item, children: [
      /* @__PURE__ */ o("h3", { className: en.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": k,
          "aria-controls": v,
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
          id: v,
          role: "region",
          "aria-labelledby": b,
          hidden: !k,
          className: en.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const T1 = "_textarea_l7fsl_1", P1 = "_invalid_l7fsl_27", L1 = "_xs_l7fsl_34", R1 = "_sm_l7fsl_39", B1 = "_md_l7fsl_44", F1 = "_lg_l7fsl_49", H1 = "_xl_l7fsl_54", ds = {
  textarea: T1,
  invalid: P1,
  xs: L1,
  sm: R1,
  md: B1,
  lg: F1,
  xl: H1,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, Ck = Le(
  function({ size: t = "md", resize: n = "none", invalid: s = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          ds.textarea,
          ds[t],
          ds[`resize-${n}`],
          s ? ds.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...i
      }
    );
  }
), q1 = "_root_xyp2i_1", K1 = "_trigger_xyp2i_9", W1 = "_invalid_xyp2i_40", U1 = "_placeholder_xyp2i_47", V1 = "_label_xyp2i_54", G1 = "_chevron_xyp2i_60", X1 = "_chevronOpen_xyp2i_70", Y1 = "_menu_xyp2i_74", Z1 = "_option_xyp2i_89", J1 = "_disabled_xyp2i_100", Q1 = "_active_xyp2i_104", eg = "_selected_xyp2i_105", tg = "_header_xyp2i_115", ng = "_xs_xyp2i_122", sg = "_sm_xyp2i_128", rg = "_md_xyp2i_134", og = "_lg_xyp2i_140", lg = "_xl_xyp2i_146", pt = {
  root: q1,
  trigger: K1,
  invalid: W1,
  placeholder: U1,
  label: V1,
  chevron: G1,
  chevronOpen: X1,
  menu: Y1,
  option: Z1,
  disabled: J1,
  active: Q1,
  selected: eg,
  header: tg,
  xs: ng,
  sm: sg,
  md: rg,
  lg: og,
  xl: lg
}, ag = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Dk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  placeholder: l = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: r = !1,
  className: a,
  ...c
}) {
  const f = Pe(), u = `${f}-listbox`, k = Q(null), v = Q(null), [b, p] = W(
    n
  ), [g, h] = W(!1), _ = t ?? b, m = e.map(
    (x, S) => x.label === "" || x.disabled ? -1 : S
  ).filter((x) => x >= 0), w = e.findIndex(
    (x) => x.value === _
  ), [y, N] = W(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), $ = R(() => {
    if (r) return;
    const x = w >= 0 && m.includes(w) ? w : m[0];
    N(x ?? -1), h(!0);
  }, [r, w, m]), C = R(() => {
    h(!1), v.current?.focus();
  }, []);
  _e(() => {
    if (!g) return;
    const x = (S) => {
      k.current && !k.current.contains(S.target) && h(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [g]);
  const z = (x) => {
    p(x), s?.(x), h(!1), v.current?.focus();
  }, D = (x) => {
    if (m.length === 0) return;
    const S = m.includes(y) ? m.indexOf(y) : 0, T = m[(S + x + m.length) % m.length];
    T != null && N(T);
  }, E = (x) => {
    if (!g) {
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
        x.preventDefault(), m[0] != null && N(m[0]);
        break;
      case "End":
        x.preventDefault(), m[m.length - 1] != null && N(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        x.preventDefault(), y >= 0 && e[y] && m.includes(y) && z(e[y]?.value ?? "");
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
  return /* @__PURE__ */ M(
    "div",
    {
      ref: k,
      className: [pt.root, a].filter(Boolean).join(" "),
      onKeyDown: E,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: v,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": g,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: r,
            className: [
              pt.trigger,
              pt[i],
              g ? pt.open : null,
              d ? pt.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? h(!1) : $(),
            ...c,
            children: [
              /* @__PURE__ */ o("span", { className: O ? pt.label : pt.placeholder, children: O ? O.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [pt.chevron, g ? pt.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: ag },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ o(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": y >= 0 ? `${f}-option-${y}` : void 0,
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
                    S === y ? pt.active : null,
                    x.value === _ ? pt.selected : null,
                    x.disabled ? pt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    x.disabled || z(x.value);
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
const ig = "_root_1ma8a_1", cg = "_wrap_1ma8a_9", dg = "_input_1ma8a_26", ug = "_invalid_1ma8a_31", fg = "_clear_1ma8a_58", _g = "_menu_1ma8a_83", hg = "_option_1ma8a_98", pg = "_disabled_1ma8a_109", mg = "_active_1ma8a_113", gg = "_empty_1ma8a_123", bg = "_xs_1ma8a_129", yg = "_sm_1ma8a_136", xg = "_md_1ma8a_143", vg = "_lg_1ma8a_150", kg = "_xl_1ma8a_157", It = {
  root: ig,
  wrap: cg,
  input: dg,
  invalid: ug,
  clear: fg,
  menu: _g,
  option: hg,
  disabled: pg,
  active: mg,
  empty: gg,
  xs: bg,
  sm: yg,
  md: xg,
  lg: vg,
  xl: kg
}, wg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function zk({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: s,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: r = !1,
  disabled: a = !1,
  filter: c = wg,
  className: f,
  ...u
}) {
  const k = Pe(), v = `${k}-listbox`, b = Q(null), p = Q(null), [g, h] = W(n), [_, m] = W(!1), w = t ?? g, y = be(
    () => w.trim() === "" ? [...e] : e.filter((j) => c(j, w)),
    [e, w, c]
  ), N = y.map((j, F) => j.disabled ? -1 : F).filter((j) => j >= 0), [$, C] = W(-1), z = (j) => {
    h(j), s?.(j);
  }, D = (j) => {
    z(j.label), l?.(j.value, j), m(!1);
  }, E = (j) => {
    if (N.length === 0) return;
    const F = N.includes($) ? N.indexOf($) : j === 1 ? -1 : 0, L = N[(F + j + N.length) % N.length];
    L != null && C(L);
  }, O = (j) => {
    a || (z(j.target.value), m(!0), C(-1));
  }, x = () => {
    a || w !== "" && m(!0);
  }, S = (j) => {
    b.current && !b.current.contains(j.relatedTarget) && m(!1);
  }, T = (j) => {
    if (!a)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), _ ? E(1) : (m(!0), C(N[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), _ && E(-1);
          break;
        case "Enter":
          j.preventDefault(), _ && $ >= 0 && y[$] && D(y[$]);
          break;
        case "Escape":
          j.preventDefault(), m(!1);
          break;
        case "Tab":
          _ && $ >= 0 && y[$] && D(y[$]), m(!1);
          break;
      }
  }, A = () => {
    z(""), C(-1), m(!0), p.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: b,
      className: [It.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [It.wrap, It[d], r ? It.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: p,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": v,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && $ >= 0 ? `${k}-option-${$}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: a,
                  value: w,
                  placeholder: i,
                  className: It.input,
                  onChange: O,
                  onFocus: x,
                  onBlur: S,
                  onKeyDown: T,
                  ...u
                }
              ),
              w !== "" && !a && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: It.clear,
                  "aria-label": "Clear",
                  onClick: A,
                  children: /* @__PURE__ */ o(ke, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && (y.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: v, className: It.menu, children: /* @__PURE__ */ o("div", { className: It.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: v, role: "listbox", className: It.menu, children: y.map((j, F) => /* @__PURE__ */ o(
          "div",
          {
            id: `${k}-option-${F}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              It.option,
              F === $ ? It.active : null,
              j.disabled ? It.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || D(j);
            },
            onMouseDown: (L) => {
              L.preventDefault(), j.disabled || D(j);
            },
            onMouseEnter: () => {
              j.disabled || C(F);
            },
            children: j.label
          },
          j.value
        )) }))
      ]
    }
  );
}
const $g = "_box_muvqe_1", Ng = "_option_muvqe_12", Og = "_disabled_muvqe_23", Sg = "_selected_muvqe_27", Cg = "_active_muvqe_33", Xn = {
  box: $g,
  option: Ng,
  disabled: Og,
  selected: Sg,
  active: Cg
};
function Ek({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: s = !1,
  onChange: l,
  className: i,
  style: d,
  ...r
}) {
  const a = Pe(), [c, f] = W(() => {
    const y = n;
    return y == null ? [] : Array.isArray(y) ? [...y] : [y];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], k = e.findIndex((y) => !y.disabled), [v, b] = W(
    () => k >= 0 ? k : 0
  ), p = Q(""), g = Q(null), h = (y) => {
    f(y), l?.(s ? y : y[0] ?? "");
  }, _ = e.map((y, N) => y.disabled ? -1 : N).filter((y) => y >= 0), m = (y) => {
    const N = e[y];
    if (!(!N || N.disabled))
      if (b(y), s) {
        const $ = u.includes(N.value) ? u.filter((C) => C !== N.value) : [...u, N.value];
        h($);
      } else
        h([N.value]);
  }, w = (y) => {
    if (_.length === 0) return;
    const N = _.includes(v) ? v : _[0];
    let $ = -1;
    if (y.key === "ArrowDown")
      $ = _[(_.indexOf(N) + 1) % _.length];
    else if (y.key === "ArrowUp")
      $ = _[(_.indexOf(N) - 1 + _.length) % _.length];
    else if (y.key === "Home")
      $ = _[0];
    else if (y.key === "End")
      $ = _[_.length - 1];
    else if (y.key === "Enter" || y.key === " ") {
      y.preventDefault(), m(N);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(y.key)) {
      y.preventDefault();
      const C = (p.current + y.key).toLowerCase();
      p.current = C, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const z = [..._, ..._], D = _.indexOf(N) + 1, E = z.slice(D).find((O) => e[O]?.label.toLowerCase().startsWith(C));
      E != null && b(E);
      return;
    }
    $ >= 0 && (y.preventDefault(), b($), s || h([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[v] ? `${a}-option-${v}` : void 0,
      style: d,
      className: [Xn.box, i].filter(Boolean).join(" "),
      onKeyDown: w,
      ...r,
      children: e.map((y, N) => {
        const $ = u.includes(y.value), C = N === v;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${a}-option-${N}`,
            role: "option",
            "aria-selected": $,
            "aria-disabled": y.disabled || void 0,
            className: [
              Xn.option,
              $ ? Xn.selected : null,
              C ? Xn.active : null,
              y.disabled ? Xn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(N),
            children: y.label
          },
          y.value
        );
      })
    }
  );
}
const Dg = "_group_oinj7_1", zg = "_legend_oinj7_8", Eg = "_list_oinj7_16", Mg = "_item_oinj7_25", Ig = "_disabled_oinj7_32", jg = "_label_oinj7_37", Ag = "_checkbox_oinj7_48", xn = {
  group: Dg,
  legend: zg,
  list: Eg,
  item: Mg,
  disabled: Ig,
  label: jg,
  checkbox: Ag
};
function Mk({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: s,
  legend: l,
  name: i,
  className: d
}) {
  const [r, a] = W(() => [
    ...n
  ]), c = t ?? r, f = (u, k) => {
    const v = k ? [...c, u] : c.filter((b) => b !== u);
    a(v), s?.(v);
  };
  return /* @__PURE__ */ M("fieldset", { className: [xn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: xn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: xn.list, children: e.map((u) => {
      const k = c.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [xn.item, u.disabled ? xn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: xn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: xn.checkbox,
                name: i,
                value: u.value,
                checked: k,
                disabled: u.disabled,
                onChange: (v) => f(u.value, v.target.checked)
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
const Tg = "_group_46668_1", Pg = "_legend_46668_8", Lg = "_list_46668_16", Rg = "_item_46668_25", Bg = "_disabled_46668_32", Fg = "_label_46668_37", Hg = "_radio_46668_48", vn = {
  group: Tg,
  legend: Pg,
  list: Lg,
  item: Rg,
  disabled: Bg,
  label: Fg,
  radio: Hg
};
function Ik({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  legend: l,
  name: i,
  className: d
}) {
  const [r, a] = W(
    n
  ), c = t ?? r, f = (u) => {
    a(u), s?.(u);
  };
  return /* @__PURE__ */ M("fieldset", { className: [vn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: vn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: vn.list, children: e.map((u) => {
      const k = u.value === c;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [vn.item, u.disabled ? vn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: vn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: vn.radio,
                name: i,
                value: u.value,
                checked: k,
                disabled: u.disabled,
                onChange: (v) => f(v.target.value)
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
const qg = "_bar_9zyxn_1", Kg = "_vertical_9zyxn_12", Wg = "_option_9zyxn_17", Ug = "_selected_9zyxn_40", Vg = "_sm_9zyxn_56", Gg = "_md_9zyxn_62", Xg = "_lg_9zyxn_68", En = {
  bar: qg,
  vertical: Kg,
  option: Wg,
  selected: Ug,
  sm: Vg,
  md: Gg,
  lg: Xg
};
function cr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function jk(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: s,
    multiple: l,
    orientation: i = "horizontal",
    onChange: d,
    size: r = "md",
    className: a,
    ...c
  } = e, f = l ?? !1, [u, k] = W(s ?? (f ? [] : t[0]?.value)), v = n ?? u, b = l === !0 || l === void 0 && Array.isArray(v), p = (h) => {
    if (!b) {
      k(h), d?.(h);
      return;
    }
    const _ = cr(v), m = _.includes(h) ? _.filter((w) => w !== h) : [..._, h];
    k(m), d?.(m);
  }, g = (h) => b ? cr(v).includes(h) : v === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        En.bar,
        En[r],
        i === "vertical" ? En.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((h) => {
        const _ = g(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: h.disabled,
            className: [
              En.option,
              _ ? En.selected : null,
              h.disabled ? En.disabled : null
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
const Yg = "_root_11hdr_1", Zg = "_action_11hdr_10", Jg = "_caret_11hdr_15", Qg = "_sm_11hdr_49", e0 = "_md_11hdr_53", t0 = "_lg_11hdr_57", n0 = "_fullWidth_11hdr_62", s0 = "_menu_11hdr_70", r0 = "_item_11hdr_83", o0 = "_itemIcon_11hdr_105", l0 = "_disabled_11hdr_110", a0 = "_active_11hdr_114", i0 = "_danger_11hdr_123", Lt = {
  root: Yg,
  action: Zg,
  caret: Jg,
  sm: Qg,
  md: e0,
  lg: t0,
  fullWidth: n0,
  menu: s0,
  item: r0,
  itemIcon: o0,
  disabled: l0,
  active: a0,
  danger: i0
}, Ak = Le(
  function({
    label: t,
    onClick: n,
    items: s = [],
    severity: l = "primary",
    variant: i = "filled",
    shade: d = "default",
    size: r = "md",
    loading: a = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: k,
    "aria-label": v,
    openAriaLabel: b = "More actions",
    ...p
  }, g) {
    const _ = `${Pe()}-menu`, m = Q(null), w = Q(null), y = Q([]), [N, $] = W(!1), [C, z] = W(-1), D = u || a, E = be(
      () => s.map((L, V) => L.disabled ? -1 : V).filter((L) => L >= 0),
      [s]
    ), O = R(() => {
      D || (z(E[0] ?? -1), $(!0));
    }, [D, E]), x = R(() => {
      $(!1), w.current?.focus();
    }, []);
    _e(() => {
      if (!N) return;
      const L = (V) => {
        m.current && !m.current.contains(V.target) && $(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [N]), _e(() => {
      N && (D || !c) && $(!1);
    }, [N, D, c]);
    const S = Q(N);
    if (_e(() => {
      const L = S.current;
      if (S.current = N, !N || L) return;
      const V = E.includes(C) ? C : E[0] ?? -1;
      V >= 0 && y.current[V]?.focus();
    }, [N, C, E]), c === !1) return null;
    const T = (L) => {
      const V = s[L];
      !V || V.disabled || (V.onClick?.(), $(!1), w.current?.focus());
    }, A = (L) => {
      if (E.length === 0) return;
      const V = E.includes(C) ? E.indexOf(C) : L === 1 ? -1 : 0, ee = E[(V + L + E.length) % E.length];
      ee != null && (z(ee), y.current[ee]?.focus());
    }, j = (L) => {
      const V = L === "first" ? E[0] : E[E.length - 1];
      V != null && (z(V), y.current[V]?.focus());
    }, F = (L) => {
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), A(1);
          break;
        case "ArrowUp":
          L.preventDefault(), A(-1);
          break;
        case "Home":
          L.preventDefault(), j("first");
          break;
        case "End":
          L.preventDefault(), j("last");
          break;
        case "Escape":
          L.preventDefault(), x();
          break;
        case "Tab":
          $(!1);
          break;
      }
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (L) => {
          m.current = L, typeof g == "function" ? g(L) : g && (g.current = L);
        },
        className: [
          Lt.root,
          Lt[r],
          f ? Lt.fullWidth : null,
          k
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            Pn,
            {
              className: Lt.action,
              variant: i,
              severity: l,
              shade: d,
              size: r,
              loading: a,
              disabled: u,
              "aria-label": v,
              onClick: () => {
                N && $(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            Pn,
            {
              ref: w,
              className: Lt.caret,
              variant: i,
              severity: l,
              shade: d,
              size: r,
              disabled: D,
              "aria-haspopup": "menu",
              "aria-expanded": N,
              "aria-controls": _,
              "aria-label": b,
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
              "aria-label": b,
              className: Lt.menu,
              onKeyDown: F,
              ...p,
              children: s.map((L, V) => /* @__PURE__ */ M(
                "button",
                {
                  ref: (ee) => {
                    y.current[V] = ee;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: V === C ? 0 : -1,
                  disabled: L.disabled,
                  className: [
                    Lt.item,
                    V === C ? Lt.active : null,
                    L.danger ? Lt.danger : null,
                    L.disabled ? Lt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(V),
                  onMouseEnter: () => {
                    L.disabled || z(V);
                  },
                  children: [
                    L.icon ? /* @__PURE__ */ o("span", { className: Lt.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: L.icon, size: 16 }) }) : null,
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
), c0 = "_wrapper_1ulz6_1", d0 = "_input_1ulz6_8", u0 = "_invalid_1ulz6_38", f0 = "_toggle_1ulz6_45", _0 = "_xs_1ulz6_80", h0 = "_sm_1ulz6_86", p0 = "_md_1ulz6_92", m0 = "_lg_1ulz6_98", g0 = "_xl_1ulz6_104", Yn = {
  wrapper: c0,
  input: d0,
  invalid: u0,
  toggle: f0,
  xs: _0,
  sm: h0,
  md: p0,
  lg: m0,
  xl: g0
}, Tk = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...r
  }, a) {
    const [c, f] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Yn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Yn.input,
              Yn[t],
              n ? Yn.invalid : null,
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
            className: Yn.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : i,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ o(ke, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), b0 = "_mask_rcv90_1", y0 = "_invalid_rcv90_31", x0 = "_xs_rcv90_38", v0 = "_sm_rcv90_44", k0 = "_md_rcv90_50", w0 = "_lg_rcv90_56", $0 = "_xl_rcv90_62", Ss = {
  mask: b0,
  invalid: y0,
  xs: x0,
  sm: v0,
  md: k0,
  lg: w0,
  xl: $0
};
function dr(e, t) {
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
const Pk = Le(function({
  size: t = "md",
  invalid: n = !1,
  mask: s,
  value: l,
  defaultValue: i = "",
  onChange: d,
  className: r,
  onKeyDown: a,
  ...c
}, f) {
  const [u, k] = W(i ?? ""), v = l !== void 0, b = v ? l ?? "" : u, p = (_) => {
    const m = dr(_, s);
    return v || k(m), d?.(m), m;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const m = _.currentTarget.selectionStart ?? b.length, w = b[m - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            _.preventDefault();
            const y = b.replace(/\D/g, "");
            p(dr(y.slice(0, -1), s));
          }
        }
        a?.(_);
      },
      className: [
        Ss.mask,
        Ss[t],
        n ? Ss.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), N0 = "_wrapper_12jdf_1", O0 = "_input_12jdf_8", S0 = "_invalid_12jdf_38", C0 = "_button_12jdf_45", D0 = "_up_12jdf_77", z0 = "_down_12jdf_82", E0 = "_xs_12jdf_87", M0 = "_sm_12jdf_93", I0 = "_md_12jdf_99", j0 = "_lg_12jdf_105", A0 = "_xl_12jdf_111", un = {
  wrapper: N0,
  input: O0,
  invalid: S0,
  button: C0,
  up: D0,
  down: z0,
  xs: E0,
  sm: M0,
  md: I0,
  lg: j0,
  xl: A0
};
function Ms(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function T0(e) {
  let t = "", n = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? t += s : s === "." && !n ? (n = !0, t += s) : s === "-" && t.length === 0 && (t += s);
  return t;
}
function Ar(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function P0(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function L0(e, t, n, s, l) {
  const d = Ms(e) ?? n ?? 0;
  let r;
  return n === void 0 ? r = d + t * l : t > 0 ? r = n + Math.ceil((d - n + 1e-9) / l) * l : r = n + Math.floor((d - n - 1e-9) / l) * l, Ar(r, n, s);
}
const Lk = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    disabled: l,
    value: i,
    defaultValue: d,
    onChange: r,
    min: a,
    max: c,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: v,
    onKeyDown: b,
    ...p
  }, g) {
    const [h, _] = W(
      d != null ? String(d) : ""
    ), m = i !== void 0, w = m ? i == null ? "" : String(i) : h, y = (E) => {
      m || _(E), r?.(Ms(E));
    }, N = (E) => {
      m || _(String(E)), r?.(E);
    }, $ = (E) => {
      l || N(L0(w, E, a, c, f));
    }, C = (E) => {
      y(T0(E.target.value));
    }, z = (E) => {
      E.key === "ArrowUp" ? (E.preventDefault(), $(1)) : E.key === "ArrowDown" && (E.preventDefault(), $(-1)), b?.(E);
    }, D = (E) => {
      const O = Ms(w);
      O === null ? (m || _(""), r?.(null)) : N(Ar(P0(O, a, f), a, c)), v?.(E);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: un.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: g,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: w,
            disabled: l,
            onChange: C,
            onKeyDown: z,
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
            "aria-label": u,
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
}, R0 = [
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
function Is(e) {
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
function B0({ r: e, g: t, b: n }) {
  const s = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${s(e)}${s(t)}${s(n)}`;
}
function F0({ r: e, g: t, b: n }) {
  const s = e / 255, l = t / 255, i = n / 255, d = Math.max(s, l, i), r = Math.min(s, l, i), a = d - r;
  let c = 0;
  return a !== 0 && (d === s ? c = (l - i) / a % 6 : d === l ? c = (i - s) / a + 2 : c = (s - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function Mn({ h: e, s: t, v: n }) {
  const s = n * t, l = e / 60, i = s * (1 - Math.abs(l % 2 - 1));
  let d = 0, r = 0, a = 0;
  l < 1 ? (d = s, r = i) : l < 2 ? (d = i, r = s) : l < 3 ? (r = s, a = i) : l < 4 ? (r = i, a = s) : l < 5 ? (d = i, a = s) : (d = s, a = i);
  const c = n - s;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((r + c) * 255),
    b: Math.round((a + c) * 255),
    a: 1
  };
}
function H0(e) {
  const t = Is(e);
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
function ur({ r: e, g: t, b: n, a: s }) {
  return s >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(s * 100) / 100})`;
}
const Rk = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: s = !0,
  palette: l = R0,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: r = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: k,
  onChange: v,
  onValueChange: b,
  onOpen: p,
  onClose: g
}) => {
  const h = Q(null), _ = Q(null), m = Q(null), w = Q(null), y = Q(null), N = Pe(), $ = Q(null), C = be(
    () => H0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [z, D] = W(!1), [E, O] = W(null), x = E ?? C, S = be(() => F0(x), [x]), T = R(
    (G) => {
      const I = ur(G);
      v?.(I), b?.(I);
    },
    [v, b]
  ), A = R(
    (G, I) => {
      O(G), I && !i && T(G);
    },
    [i, T]
  ), j = R(() => {
    D(!1), O(null), g?.(), _.current?.focus();
  }, [g]), F = R(() => {
    r || (O(C), D(!0), p?.());
  }, [r, C, p]), L = R(() => {
    z ? j() : F();
  }, [z, j, F]), V = R(
    (G, I) => {
      const U = m.current;
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
    A({ ...Mn(I), a: x.a }, !0);
  }, me = (G) => {
    if ($.current !== "sat") return;
    G.preventDefault();
    const I = V(G.clientX, G.clientY);
    A({ ...Mn(I), a: x.a }, !0);
  }, de = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "hue";
    const I = ee(G.clientX, w.current);
    A(
      { ...Mn({ ...S, h: I * 360 }), a: x.a },
      !0
    );
  }, re = (G) => {
    if ($.current !== "hue") return;
    G.preventDefault();
    const I = ee(G.clientX, w.current);
    A(
      { ...Mn({ ...S, h: I * 360 }), a: x.a },
      !0
    );
  }, q = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "alpha";
    const I = ee(G.clientX, y.current);
    A({ ...x, a: I }, !0);
  }, ie = (G) => {
    if ($.current !== "alpha") return;
    G.preventDefault();
    const I = ee(G.clientX, y.current);
    A({ ...x, a: I }, !0);
  }, se = () => {
    $.current = null;
  }, ue = R(
    (G, I) => {
      const U = {
        h: S.h,
        s: Dt(S.s + G, 0, 1),
        v: Dt(S.v + I, 0, 1)
      };
      A({ ...Mn(U), a: x.a }, !0);
    },
    [S, x.a, A]
  ), oe = R(
    (G) => {
      const I = (S.h + G + 360) % 360;
      A({ ...Mn({ ...S, h: I }), a: x.a }, !0);
    },
    [S, x.a, A]
  ), $e = R(
    (G) => {
      A({ ...x, a: Dt(x.a + G, 0, 1) }, !0);
    },
    [x, A]
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
      const te = Is(I);
      te && A({ ...te, a: x.a }, !0);
      return;
    }
    const U = I.replace(/[^\d.]/g, ""), Z = Number.parseFloat(U);
    if (Number.isNaN(Z)) return;
    if (G === "a") {
      const te = U.includes(".") ? Dt(Z, 0, 1) : Dt(Z / 100, 0, 1);
      A({ ...x, a: te }, !0);
      return;
    }
    const he = { r: 255, g: 255, b: 255 };
    A(
      { ...x, [G]: Dt(Z, 0, he[G]) },
      !0
    );
  }, Be = () => {
    E && (T(E), O(null), D(!1), g?.(), _.current?.focus());
  };
  _e(() => {
    if (!z) return;
    const G = (I) => {
      h.current && !h.current.contains(I.target) && j();
    };
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, [z, j]), _e(() => {
    if (!z) return;
    const G = (I) => {
      I.key === "Escape" && j();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [z, j]);
  const we = f === "xs" ? Ne["dx-colorpicker-trigger-xs"] : f === "sm" ? Ne["dx-colorpicker-trigger-sm"] : f === "lg" ? Ne["dx-colorpicker-trigger-lg"] : f === "xl" ? Ne["dx-colorpicker-trigger-xl"] : Ne["dx-colorpicker-trigger"], ot = ur(x), tt = B0(x), Ze = { x: S.s * 100, y: (1 - S.v) * 100 }, Nt = S.h / 360 * 100, bt = x.a * 100, lt = /* @__PURE__ */ M("div", { className: Ne["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : u,
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
        tabIndex: r ? -1 : u,
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
        ref: y,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(bt),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : u,
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
    n && /* @__PURE__ */ M("div", { className: Ne["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Ne["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: tt,
            onChange: (G) => ve("hex", G.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
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
      /* @__PURE__ */ M("label", { className: Ne["dx-colorpicker-rgba-field"], children: [
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
        tabIndex: r ? -1 : u,
        style: { backgroundColor: G },
        onClick: () => {
          const I = Is(G);
          i ? A({ ...I, a: x.a }, !1) : (O(null), T({ ...I, a: x.a }), D(!1), g?.(), _.current?.focus());
        }
      },
      G
    )) }),
    i && /* @__PURE__ */ o("div", { className: Ne["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Ne["dx-colorpicker-ok"],
        onClick: Be,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      ref: h,
      className: [
        Ne["dx-colorpicker"],
        z ? Ne["dx-colorpicker-open"] : null,
        a ? Ne["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: _,
            type: "button",
            className: [Ne["dx-colorpicker-trigger"], we].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": z,
            "aria-controls": N,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: u,
            onClick: L,
            onKeyDown: (G) => {
              G.key === "Escape" && z && (G.preventDefault(), j());
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
              c && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        z && /* @__PURE__ */ o(
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
}, q0 = 42;
function zt(e) {
  return String(e).padStart(2, "0");
}
function $t(e) {
  return `${e.year}-${zt(e.month)}-${zt(e.day)}`;
}
function K0(e, t) {
  const n = $t(e);
  return t ? `${n} ${zt(e.hour)}:${zt(e.minute)}:${zt(e.second)}` : n;
}
function js(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), s = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (s < 1 || s > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, s - 1, l, i, d, r);
  return a.getFullYear() !== n || a.getMonth() !== s - 1 || a.getDate() !== l ? null : { year: n, month: s, day: l, hour: i, minute: d, second: r };
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
function us(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), s = n.getFullYear(), l = n.getMonth() + 1, i = new Date(s, l, 0).getDate();
  return {
    year: s,
    month: l,
    day: Math.min(e.day, i),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function fr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const _r = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => zt(e.year % 100),
  MM: (e) => zt(e.month),
  M: (e) => String(e.month),
  dd: (e) => zt(e.day),
  d: (e) => String(e.day),
  HH: (e) => zt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => zt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => zt(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, W0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], U0 = ["y", "M", "d", "H", "m", "s"];
function fs(e, t, n) {
  const s = new Date(
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
    for (const a of W0)
      if (t.startsWith(a, i)) {
        l += _r[a](e, s, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const r = t[i];
    if (U0.includes(r)) {
      l += _r[r](e, s, n), i += 1;
      continue;
    }
    l += r, i += 1;
  }
  return l;
}
const V0 = [
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
function G0(e, t) {
  const n = {};
  let s = 0, l = 0;
  for (; l < t.length; ) {
    let r = null;
    for (const a of V0)
      if (t.startsWith(a, l)) {
        r = a;
        break;
      }
    if (r) {
      const a = e.slice(s, s + r.length);
      if (!/^\d+$/.test(a)) return null;
      const c = Number(a);
      switch (r) {
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
      s += r.length, l += r.length;
      continue;
    }
    if (e[s] !== t[l]) return null;
    s += 1, l += 1;
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
function Zn(e, t) {
  const n = js(e);
  return n || G0(e, t);
}
function X0(e, t, n) {
  return t && $t(e) < $t(t) ? t : n && $t(e) > $t(n) ? n : e;
}
const Y0 = ["hour", "minute", "second"];
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
const Bk = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: s,
    defaultValue: l,
    format: i = "yyyy-MM-dd",
    min: d,
    max: r,
    showTime: a = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: k,
    locale: v = "en-US",
    onChange: b,
    onValueChange: p,
    onOpen: g,
    onClose: h,
    disabled: _,
    readOnly: m,
    placeholder: w,
    ariaLabel: y,
    triggerLabel: N,
    clearLabel: $,
    tabIndex: C,
    className: z,
    onBlur: D,
    onKeyDown: E,
    ...O
  }, x) {
    const S = Q(null), T = Q(null), A = Q(null), j = Q(null), F = Pe(), L = s !== void 0, [V, ee] = W(
      () => l != null ? fs(
        Zn(l, i) ?? fn(),
        i,
        v
      ) : ""
    ), [Y, me] = W(!1), [de, re] = W(null), [q, ie] = W(() => {
      const K = s !== void 0 ? s ?? "" : l ?? "";
      if (K) {
        const le = Zn(K, i);
        if (le) return le;
      }
      return fn();
    }), se = be(() => d ? js(d) : null, [d]), ue = be(() => r ? js(r) : null, [r]), oe = be(
      () => new Set(k ?? []),
      [k]
    ), $e = be(() => {
      const K = L ? s ?? "" : V;
      return K ? Zn(K, i) : null;
    }, [s, V, L, i]), Oe = R(
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
        L || ee(K ? fs(K, i, v) : "");
        const le = K ? K0(K, a) : "";
        b?.(le), p?.(le);
      },
      [L, i, v, a, b, p]
    ), Be = R(
      (K) => {
        T.current = K, typeof x == "function" ? x(K) : x && (x.current = K);
      },
      [x]
    ), we = R(() => {
      me(!1), re(null), h?.(), u || A.current?.focus();
    }, [u, h]), ot = R(() => {
      if (_) return;
      const K = $e ?? fn();
      re(K), ie(Ye(K)), me(!0), g?.();
    }, [_, $e, Ye, g]), tt = R(() => {
      Y ? we() : ot();
    }, [Y, we, ot]), Ze = R((K) => {
      j.current?.querySelector(
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
          const Te = Ie ?? $e ?? fn(), st = Math.min(K === "hour" ? 23 : 59, Math.max(0, Te[K] + le));
          return { ...Te, [K]: st };
        });
      },
      [$e]
    ), lt = R(
      (K, le) => {
        const Ie = le.replace(/\D/g, ""), Te = Ie === "" ? 0 : Number(Ie), Ft = K === "hour" ? 23 : 59;
        re((st) => ({ ...st ?? $e ?? fn(), [K]: Math.min(Ft, Te) }));
      },
      [$e]
    ), G = R(() => {
      de && (ve(de), we());
    }, [de, ve, we]), I = R(() => {
      if (Y) return;
      const K = Zn(V, i);
      ve(K ? X0(K, se, ue) : null);
    }, [Y, V, i, se, ue, ve]), U = (K) => {
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
          le = tn(q, -fr(q)), K.preventDefault();
          break;
        case "End":
          le = tn(q, 6 - fr(q)), K.preventDefault();
          break;
        case "PageUp":
          le = us(q, K.shiftKey ? -12 : -1), K.preventDefault();
          break;
        case "PageDown":
          le = us(q, K.shiftKey ? 12 : 1), K.preventDefault();
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
    _e(() => {
      if (!Y) return;
      const K = (le) => {
        S.current && !S.current.contains(le.target) && we();
      };
      return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
    }, [Y, we]), _e(() => {
      if (!Y) return;
      const K = (le) => {
        le.key === "Escape" && we();
      };
      return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
    }, [Y, we]);
    const ye = () => {
      L || ee(""), b?.(""), p?.(""), T.current?.focus();
    }, ze = Y && de ? fs(de, i, v) : L ? s ? fs(
      Zn(s, i) ?? fn(),
      i,
      v
    ) : "" : V, Fe = L ? !!s : V.length > 0, He = u || Y, nt = { year: q.year, month: q.month }, on = new Date(nt.year, nt.month - 1, 1).getDay(), J = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let K = 0; K < q0; K += 1)
      Se.push(tn(J, K - on));
    const dt = de ? $t(de) : $e ? $t($e) : null, Et = $t(fn()), ut = `${nt.year}-${zt(nt.month)}`, Ce = be(
      () => new Intl.DateTimeFormat(v, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [v]
    ), Ae = new Intl.DateTimeFormat(v, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), Mt = Array.from(
      { length: 7 },
      (K, le) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
        new Date(2021, 0, 3 + le)
      )
    ), yt = t === "xs" ? De["dx-datepicker-input--xs"] : t === "sm" ? De["dx-datepicker-input--sm"] : t === "lg" ? De["dx-datepicker-input--lg"] : t === "xl" ? De["dx-datepicker-input--xl"] : De["dx-datepicker-input--md"], Je = /* @__PURE__ */ M(
      "div",
      {
        className: De["dx-datepicker-calendar"],
        "aria-label": y ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: De["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const K = Ye(us(q, -1));
                  ie(K), setTimeout(() => Ze(K), 0);
                },
                children: /* @__PURE__ */ o(ke, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: De["dx-datepicker-title"], children: Ae }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const K = Ye(us(q, 1));
                  ie(K), setTimeout(() => Ze(K), 0);
                },
                children: /* @__PURE__ */ o(ke, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
            "div",
            {
              ref: j,
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
                      const Te = $t(Ie), Ft = Oe(Ie), st = Te.startsWith(ut);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Te,
                          tabIndex: Te === $t(q) ? 0 : -1,
                          "aria-selected": Te === dt || void 0,
                          "aria-disabled": Ft || void 0,
                          "aria-label": Ce.format(
                            new Date(Ie.year, Ie.month - 1, Ie.day)
                          ),
                          className: [
                            De["dx-datepicker-day"],
                            st ? null : De["dx-datepicker-day--outside"],
                            Te === Et ? De["dx-datepicker-day--today"] : null,
                            Te === dt ? De["dx-datepicker-day--selected"] : null,
                            Ft ? De["dx-datepicker-day--disabled"] : null
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
          a && /* @__PURE__ */ M("div", { className: De["dx-datepicker-time"], children: [
            Y0.map((K) => /* @__PURE__ */ M("label", { className: De["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: De["dx-datepicker-time-label"], children: _s(K) }),
              /* @__PURE__ */ M("div", { className: De["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: De["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _s(K),
                    value: zt(
                      (de ?? $e ?? fn())[K]
                    ),
                    onChange: (le) => lt(K, le.target.value),
                    onKeyDown: (le) => {
                      le.key === "ArrowUp" ? (le.preventDefault(), bt(K, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), bt(K, -1)) : le.key === "Enter" && (le.preventDefault(), G());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: De["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_s(K).toLowerCase()}`,
                      onClick: () => bt(K, 1),
                      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_s(K).toLowerCase()}`,
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: S,
        className: [
          De["dx-datepicker"],
          u ? De["dx-datepicker-inline"] : null,
          z
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ M(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Be,
                type: "text",
                autoComplete: "off",
                value: ze,
                disabled: _,
                readOnly: m,
                placeholder: w,
                tabIndex: C,
                role: c ? void 0 : "combobox",
                "aria-label": y ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : He,
                "aria-controls": c ? void 0 : F,
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
                  c || tt();
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
                  c ? De["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: ye,
                children: /* @__PURE__ */ o(ke, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ o(
              "button",
              {
                ref: A,
                type: "button",
                className: [De["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": N ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": F,
                disabled: _,
                onClick: tt,
                children: /* @__PURE__ */ o(ke, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          He && /* @__PURE__ */ o(
            "div",
            {
              id: F,
              role: u ? void 0 : "dialog",
              "aria-label": u ? void 0 : y ?? "Date picker",
              className: u ? void 0 : De["dx-datepicker-popup"],
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
}, Fk = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: s = !1,
  ariaLabel: l = "Rating",
  clearLabel: i = "Clear",
  rateLabel: d = "Rate",
  tabIndex: r = 0,
  className: a,
  onChange: c,
  onValueChange: f
}) => {
  const [u, k] = W(e), v = R(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), b = R(
    (_) => {
      c?.(_), f?.(_);
    },
    [c, f]
  ), p = R(
    (_) => {
      n || s || (b(_), k(_));
    },
    [n, s, b]
  ), g = (_) => {
    if (n || s) return;
    const m = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), p(v(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), p(v(m - 1));
        break;
      case "Home":
        _.preventDefault(), p(1);
        break;
      case "End":
        _.preventDefault(), p(t);
        break;
    }
  }, h = Array.from({ length: t }, (_, m) => m + 1);
  return /* @__PURE__ */ M(
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
      onKeyDown: g,
      children: [
        !n && !s && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: _n["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? r : -1,
            disabled: s,
            onClick: () => p(0),
            children: /* @__PURE__ */ o(ke, { icon: "block", size: 16 })
          }
        ),
        h.map((_) => {
          const m = _ <= e, w = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: w ? r : -1,
              "aria-disabled": s || n || void 0,
              disabled: s || n,
              className: [
                _n["dx-rating-item"],
                m ? _n["dx-rating-item-filled"] : null
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
function Ut(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const Hk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: s = 0,
  max: l = 100,
  step: i = 1,
  range: d = !1,
  orientation: r = "horizontal",
  disabled: a = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: k = 0,
  className: v,
  onChange: b,
  onInput: p,
  onValueChange: g,
  onInputChange: h
}) => {
  const _ = Q(null), m = Q(
    null
  ), [w, y] = W(null), N = w ?? e, $ = be(
    () => Ut(N, s, l),
    [N, s, l]
  ), C = be(
    () => Ut(d ? t : $, s, l),
    [d, t, $, s, l]
  ), z = be(
    () => Ut(d ? Math.max(n, C) : $, s, l),
    [d, n, C, $, s, l]
  ), D = R(
    (q) => {
      const ie = l - s;
      return ie <= 0 ? 0 : (Ut(q, s, l) - s) / ie * 100;
    },
    [s, l]
  ), E = R(
    (q, ie) => {
      const se = _.current;
      if (!se) return s;
      const ue = se.getBoundingClientRect();
      let oe;
      r === "vertical" ? oe = 1 - (ie - ue.top) / ue.height : oe = (q - ue.left) / ue.width;
      const $e = s + Ut(oe, 0, 1) * (l - s);
      return i > 0 ? Ut(Math.round($e / i) * i, s, l) : Ut($e, s, l);
    },
    [s, l, i, r]
  ), O = R(
    (q) => {
      typeof q == "number" && y(q), b?.(q), g?.(q);
    },
    [b, g]
  ), x = R(
    (q) => {
      typeof q == "number" && y(q), p?.(q), h?.(q);
    },
    [p, h]
  ), S = R(
    (q, ie, se) => {
      const ue = E(ie, se);
      let oe;
      d ? q === "min" ? oe = { min: Math.min(ue, z), max: z } : oe = { min: C, max: Math.max(ue, C) } : oe = ue, x(oe), m.current === null && O(oe);
    },
    [d, E, C, z, x, O]
  ), T = R(
    (q, ie) => {
      const se = (i > 0 ? i : 1) * ie;
      let ue;
      d ? q === "min" ? ue = {
        min: Ut(C + se, s, z),
        max: z
      } : ue = {
        min: C,
        max: Ut(z + se, C, l)
      } : ue = Ut($ + se, s, l), O(ue);
    },
    [d, i, s, l, C, z, $, O]
  ), A = (q, ie) => {
    if (!a)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), T(q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), T(q, 1);
          break;
        case "Home":
          ie.preventDefault(), O(d ? q === "min" ? { min: s, max: z } : { min: C, max: C } : s);
          break;
        case "End":
          ie.preventDefault(), O(d ? q === "min" ? { min: z, max: z } : { min: C, max: l } : l);
          break;
      }
  }, j = (q, ie) => {
    a || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), m.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, F = (q) => {
    !m.current || m.current.pointerId !== q.pointerId || (q.preventDefault(), S(m.current.key, q.clientX, q.clientY));
  }, L = (q) => {
    !m.current || m.current.pointerId !== q.pointerId || (m.current = null, q.preventDefault(), O(d ? { min: C, max: z } : $));
  }, [V, ee] = W(null), Y = D(C), me = D(z), de = d ? Y : 0, re = me;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        kn["dx-slider"],
        r === "vertical" ? kn["dx-slider-vertical"] : null,
        a ? kn["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: _, className: kn["dx-slider-track"], children: [
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
            "aria-label": d ? f : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && V === "max" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${Y}% - 8px)` } : { left: `calc(${Y}% - 8px)` },
            onKeyDown: (q) => A("min", q),
            onPointerDown: (q) => j("min", q),
            onPointerMove: F,
            onPointerUp: L,
            onFocus: () => ee("min")
          }
        ),
        d && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(z),
            "aria-orientation": r,
            "aria-label": u,
            "aria-disabled": a || void 0,
            tabIndex: a || V === "min" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${me}% - 8px)` } : { left: `calc(${me}% - 8px)` },
            onKeyDown: (q) => A("max", q),
            onPointerDown: (q) => j("max", q),
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
}, Z0 = "-10675199.02:48:05.4775808", J0 = "10675199.02:48:05.4775808", sn = 86400, rn = 3600, Rt = 60, Cs = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, hr = {
  days: sn,
  hours: rn,
  minutes: Rt,
  seconds: 1
}, Q0 = {
  day: sn,
  hour: rn,
  minute: Rt,
  second: 1
};
function In(e) {
  return String(e).padStart(2, "0");
}
function ss(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, s = t;
  s.startsWith("-") ? (n = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (l) {
    if (!l.slice(1).some((u) => u != null)) return null;
    const r = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (r * sn + a * rn + c * Rt + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    s
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, r = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return r > 23 || a > 59 || c > 59 ? null : n * (d * sn + r * rn + a * Rt + c + f);
  }
  return null;
}
function eb(e) {
  return e.days * sn + e.hours * rn + e.minutes * Rt + e.seconds;
}
function pr(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / sn);
  t %= sn;
  const s = Math.floor(t / rn);
  t %= rn;
  const l = Math.floor(t / Rt), i = Math.round(t % Rt * 1e9) / 1e9;
  return { days: n, hours: s, minutes: l, seconds: i };
}
function As(e, t) {
  const n = e < 0;
  let s = Math.abs(e);
  t === "minute" ? s = Math.round(s / Rt) * Rt : t === "hour" ? s = Math.round(s / rn) * rn : t === "day" && (s = Math.round(s / sn) * sn);
  let l = Math.round(s % Rt);
  const i = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(s / Rt) + i, r = d % 60, a = Math.floor(d / 60), c = a % 24, f = Math.floor(a / 24), u = n ? "-" : "", k = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${k}${In(c)}`;
    case "minute":
      return `${u}${k}${In(c)}:${In(r)}`;
    default:
      return `${u}${k}${In(c)}:${In(r)}:${In(l)}`;
  }
}
function mr(e, t = "second") {
  const n = ss(e);
  return n === null ? "" : As(n, t);
}
function Ds(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const qk = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: s,
    defaultValue: l,
    min: i = Z0,
    max: d = J0,
    step: r = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: k = !0,
    allowClear: v = !1,
    inline: b = !1,
    onChange: p,
    onValueChange: g,
    onOpen: h,
    onClose: _,
    disabled: m,
    placeholder: w,
    ariaLabel: y,
    triggerLabel: N,
    clearLabel: $,
    tabIndex: C,
    className: z,
    onBlur: D,
    onKeyDown: E,
    ...O
  }, x) {
    const S = Q(null), T = Q(null), A = Q(null), j = Pe(), F = s !== void 0, [L, V] = W(
      () => l != null ? mr(l, a) : ""
    ), [ee, Y] = W(!1), [me, de] = W(null), [re, q] = W(null), ie = be(
      () => ss(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), se = be(
      () => ss(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ue = be(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), oe = be(() => {
      const J = F ? s ?? "" : L;
      return J ? ss(J) : null;
    }, [s, L, F]), $e = R(
      (J) => {
        const Se = J === null ? "" : As(J, a);
        F || V(Se), p?.(Se), g?.(Se);
      },
      [F, a, p, g]
    ), Oe = R(
      (J) => {
        J && me !== null && $e(me), Y(!1), de(null), q(null), _?.(), b || A.current?.focus();
      },
      [b, me, $e, _]
    ), Ye = R(() => {
      m || (de(oe ?? 0), Y(!0), h?.());
    }, [m, oe, h]), ve = R(() => {
      ee ? Oe(!1) : Ye();
    }, [ee, Oe, Ye]), Be = R(
      (J, Se) => {
        de((dt) => {
          const ut = (dt ?? oe ?? 0) + Se * ue * hr[J];
          return Ds(ut, ie, se);
        });
      },
      [oe, ue, ie, se]
    ), we = R(
      (J) => {
        const Se = re?.[J];
        if (Se == null) return;
        const dt = Number.parseFloat(Se), Et = Number.isNaN(dt) ? 0 : dt;
        de((ut) => {
          const Ce = ut ?? oe ?? 0, Ae = pr(Ce);
          Ae[J] = Et;
          const yt = (Ce < 0 ? -1 : 1) * eb(Ae);
          return Ds(yt, ie, se);
        }), q(null);
      },
      [re, oe, ie, se]
    ), ot = (J, Se) => {
      q((dt) => ({ ...dt ?? {}, [J]: Se }));
    }, tt = (J, Se) => {
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
      const J = ss(L);
      $e(J !== null ? Ds(J, ie, se) : null);
    }, [ee, L, ie, se, $e]), Nt = (J) => {
      F || V(J.target.value);
    }, bt = (J) => {
      J.key === "Enter" ? (J.preventDefault(), ee ? Oe(!0) : Ze()) : J.key === "Escape" && ee ? (J.preventDefault(), Oe(!1)) : J.key === "ArrowDown" && !ee ? (J.preventDefault(), Ye()) : J.key === "Tab" && ee && Y(!1), E?.(J);
    }, lt = (J) => {
      Ze(), D?.(J);
    }, G = () => {
      F || V(""), p?.(""), g?.(""), T.current?.focus();
    };
    _e(() => {
      if (!ee) return;
      const J = (Se) => {
        S.current && !S.current.contains(Se.target) && Oe(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [ee, Oe]), _e(() => {
      if (!ee) return;
      const J = (Se) => {
        Se.key === "Escape" && Oe(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [ee, Oe]), _e(() => {
      if (b && me !== null) {
        const J = oe;
        (J === null || Math.abs(me - J) > 1e-9) && $e(me);
      }
    }, [b, me, oe, $e]);
    const I = R(
      (J) => {
        T.current = J, typeof x == "function" ? x(J) : x && (x.current = J);
      },
      [x]
    ), U = F ? s ? mr(s, a) : "" : L, Z = F ? !!s : L.length > 0, he = b || ee, te = me ?? oe ?? 0, ye = pr(te), ze = Q0[a], He = ["days", "hours", "minutes", "seconds"].filter(
      (J) => hr[J] >= ze && (J === "days" ? c : J === "hours" ? f : J === "minutes" ? u : k)
    ), nt = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], on = /* @__PURE__ */ M("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: As(te, a) }),
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-units"], children: He.map((J) => /* @__PURE__ */ M("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: qe["dx-timespanpicker-unit-label"], children: Cs[J] }),
        /* @__PURE__ */ M("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: re?.[J] ?? String(ye[J]),
              onChange: (Se) => ot(J, Se.target.value),
              onKeyDown: (Se) => tt(J, Se),
              onBlur: () => we(J)
            }
          ),
          /* @__PURE__ */ M("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Cs[J].toLowerCase()}`,
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
                "aria-label": `Decrease ${Cs[J].toLowerCase()}`,
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: S,
        className: [
          qe["dx-timespanpicker"],
          b ? qe["dx-timespanpicker-inline"] : null,
          z
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ M(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: I,
                type: "text",
                autoComplete: "off",
                value: U,
                disabled: m,
                placeholder: w,
                tabIndex: C,
                role: "combobox",
                "aria-label": y ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": j,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  nt,
                  n ? qe["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Nt,
                onKeyDown: bt,
                onBlur: lt,
                ...O
              }
            ),
            v && !m && Z && /* @__PURE__ */ o(
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
                ref: A,
                type: "button",
                className: [qe["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": N ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": j,
                disabled: m,
                onClick: ve,
                children: /* @__PURE__ */ o(ke, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          he && /* @__PURE__ */ o(
            "div",
            {
              id: j,
              role: b ? void 0 : "dialog",
              "aria-label": y ?? "Time span picker",
              className: b ? void 0 : qe["dx-timespanpicker-popup"],
              children: on
            }
          )
        ]
      }
    );
  }
), tb = "_wrapper_ou9x5_1", nb = "_cells_ou9x5_8", sb = "_cell_ou9x5_8", rb = "_invalid_ou9x5_63", ob = "_live_ou9x5_73", wn = {
  wrapper: tb,
  cells: nb,
  cell: sb,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: rb,
  live: ob
};
function gr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Kk = Le(
  function({
    length: t = 6,
    value: n,
    defaultValue: s,
    onChange: l,
    invalid: i = !1,
    size: d = "md",
    autoFocus: r = !1,
    disabled: a = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": k
  }, v) {
    const b = Pe(), p = n !== void 0, [g, h] = W(gr(s).join("")), _ = p ? gr(n).join("") : g, m = Array.from({ length: t }, (O, x) => _[x] ?? ""), w = Q([]), [y, N] = W(""), $ = (O) => {
      p || h(O), l?.(O);
    }, C = (O) => {
      const x = w.current[O];
      x && !x.disabled && (x.focus(), x.select());
    }, z = (O, x) => {
      const S = x.replace(/\D/g, "").slice(-1), T = _.split("");
      if (S) {
        T[O] = S;
        const A = T.join("").slice(0, t);
        $(A), A.length < t ? C(O + 1) : f && N("Code complete");
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
      const T = _.split("");
      let A = 0;
      for (let F = 0; F < S.length && O + F < t; F++)
        T[O + F] = S[F] ?? "", A++;
      const j = T.join("");
      $(j), j.length >= t ? f && N("Code complete") : C(O + A);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [wn.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [wn.cells, wn[d]].join(" "), children: m.map((O, x) => /* @__PURE__ */ o(
            "input",
            {
              ref: (S) => {
                w.current[x] = S, x === 0 && v && (typeof v == "function" ? v(S) : v.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: O,
              disabled: a,
              "aria-label": `Digit ${x + 1} of ${t}`,
              "aria-invalid": i && O !== "" ? !0 : void 0,
              autoFocus: r && x === 0,
              className: [
                wn.cell,
                wn[`cell-${d}`],
                i ? wn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => z(x, S.target.value),
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
              id: `${b}-live`,
              role: "status",
              "aria-live": "polite",
              className: wn.live,
              children: y
            }
          )
        ]
      }
    );
  }
), lb = "_wrapper_6lcd5_1", ab = "_header_6lcd5_7", ib = "_label_6lcd5_15", cb = "_clear_6lcd5_22", db = "_canvas_6lcd5_53", ub = "_disabled_6lcd5_69", jn = {
  wrapper: lb,
  header: ab,
  label: ib,
  clear: cb,
  canvas: db,
  disabled: ub
}, Wk = Le(
  function({
    value: t,
    defaultValue: n,
    onChange: s,
    penColor: l = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: r = "Signature",
    width: a,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, k) {
    const v = Q(null), b = Q(!1), p = Q(!1), g = Q({ x: 0, y: 0 });
    _e(() => {
      const $ = v.current;
      if (!$) return;
      const C = window.devicePixelRatio || 1, z = Math.round((a ?? $.clientWidth) * C), D = Math.round(c * C);
      ($.width !== z || $.height !== D) && ($.width = z, $.height = D);
      const E = $.getContext("2d");
      if (!E) return;
      E.setTransform(C, 0, 0, C, 0, 0), E.lineWidth = i, E.strokeStyle = l, E.lineCap = "round", E.lineJoin = "round";
      const O = t ?? n;
      if (O) {
        const x = new Image();
        x.onload = () => {
          E.drawImage(x, 0, 0, $.clientWidth, c);
        }, x.src = O;
      }
    }, [t, n, l, i, a, c]);
    const h = () => {
      const $ = v.current;
      if (!$) return;
      const C = $.toDataURL("image/png");
      s?.(C);
    }, _ = () => {
      const $ = v.current;
      if (!$) return;
      const C = $.getContext("2d");
      C && C.clearRect(0, 0, $.width, $.height), s?.("");
    };
    Rs(k, () => ({
      clear: _,
      toDataURL: ($ = "image/png", C) => v.current?.toDataURL($, C) ?? ""
    }));
    const m = ($) => {
      const C = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - C.left, y: $.clientY - C.top };
    }, w = ($) => {
      f || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), b.current = !0, p.current = !1, g.current = m($));
    }, y = ($) => {
      if (!b.current) return;
      $.preventDefault();
      const C = $.currentTarget.getContext("2d");
      if (!C) return;
      const z = m($);
      C.beginPath(), C.moveTo(g.current.x, g.current.y), C.lineTo(z.x, z.y), C.stroke(), g.current = z, p.current = !0;
    }, N = ($) => {
      b.current && ($.preventDefault(), b.current = !1, p.current && h());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          jn.wrapper,
          u,
          f ? jn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: jn.header, children: [
            /* @__PURE__ */ o("span", { className: jn.label, children: r }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: jn.clear,
                onClick: _,
                disabled: f,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: v,
              role: "img",
              "aria-label": r,
              "aria-disabled": f || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${c}px`
              },
              className: jn.canvas,
              onPointerDown: w,
              onPointerMove: y,
              onPointerUp: N,
              onPointerCancel: N
            }
          )
        ]
      }
    );
  }
), fb = "_wrapper_dsvd2_1", _b = "_trigger_dsvd2_7", hb = "_list_dsvd2_35", pb = "_row_dsvd2_44", mb = "_name_dsvd2_59", gb = "_size_dsvd2_68", bb = "_progress_dsvd2_74", yb = "_fill_dsvd2_82", xb = "_status_dsvd2_99", vb = "_remove_dsvd2_106", Vt = {
  wrapper: fb,
  trigger: _b,
  list: hb,
  row: pb,
  name: mb,
  size: gb,
  progress: bb,
  fill: yb,
  status: xb,
  remove: vb
};
function br(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Uk = Le(function({
  url: t,
  multiple: n = !1,
  parameterName: s = "files",
  auto: l = !0,
  headers: i,
  accept: d,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: c = "Upload",
  children: f,
  onProgress: u,
  onComplete: k,
  onError: v
}, b) {
  const p = Q(null), [g, h] = W([]), _ = Q(/* @__PURE__ */ new Map()), m = (C, z) => {
    h(
      (D) => D.map((E) => E.file.name === C ? { ...E, ...z } : E)
    );
  }, w = (C) => {
    if (!t) return;
    const z = new XMLHttpRequest();
    _.current.set(C.file.name, z);
    const D = new FormData();
    if (D.append(s, C.file), z.upload.addEventListener("progress", (E) => {
      if (!E.lengthComputable) return;
      const O = Math.round(E.loaded / E.total * 100);
      m(C.file.name, { state: "uploading", progress: O }), u?.(C.file.name, O);
    }), z.addEventListener("load", () => {
      z.status >= 200 && z.status < 300 ? (m(C.file.name, { state: "complete", progress: 100 }), k?.(C.file.name)) : (m(C.file.name, {
        state: "error",
        message: `HTTP ${z.status}`
      }), v?.(C.file.name, `HTTP ${z.status}`));
    }), z.addEventListener("error", () => {
      m(C.file.name, { state: "error", message: "Network error" }), v?.(C.file.name, "Network error");
    }), i)
      for (const [E, O] of Object.entries(i))
        z.setRequestHeader(E, O);
    z.open("POST", t), z.send(D), m(C.file.name, { state: "uploading", progress: 0 });
  }, y = (C) => {
    if (!C) return;
    const z = [...C], D = [];
    let E = Math.max(0, r - g.length);
    for (const x of z) {
      if (a != null && x.size > a) {
        v?.(
          x.name,
          `File too large (maximum ${br(a)})`
        );
        continue;
      }
      if (E <= 0) {
        v?.(x.name, `Too many files (maximum ${r})`);
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
  }, $ = f ?? /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: Vt.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ o(ke, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return Rs(b, () => ({
    open: () => p.current?.click(),
    upload: () => g.forEach((C) => C.state === "pending" ? w(C) : null)
  })), /* @__PURE__ */ M("div", { className: Vt.wrapper, children: [
    $,
    /* @__PURE__ */ o(
      "input",
      {
        ref: p,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (C) => y(C.target.files)
      }
    ),
    !f && g.length > 0 && /* @__PURE__ */ o("ul", { className: Vt.list, children: g.map(({ file: C, state: z, progress: D, message: E }) => /* @__PURE__ */ M(
      "li",
      {
        className: Vt.row,
        "data-state": z,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Vt.name, children: C.name }),
          /* @__PURE__ */ o("span", { className: Vt.size, children: br(C.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Vt.progress,
              role: "progressbar",
              "aria-label": `${C.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": D,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: Vt.fill,
                  style: { width: `${D}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: Vt.status, role: "status", children: z === "uploading" ? "Uploading" : z === "complete" ? "Complete" : z === "error" ? E ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.remove,
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
}), kb = "_zone_nl0bz_1", wb = "_dragging_nl0bz_23", $b = "_caption_nl0bz_28", Nb = "_browse_nl0bz_40", Ob = "_disabled_nl0bz_67", Jn = {
  zone: kb,
  dragging: wb,
  caption: $b,
  browse: Nb,
  disabled: Ob
};
function Sb(e, t) {
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
const Vk = Le(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: s,
    label: l = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: d = "Browse",
    disabled: r = !1,
    className: a
  }, c) {
    const f = Q(null), [u, k] = W(!1), v = (_) => {
      if (!_ || _.length === 0) return;
      const m = [..._].filter((w) => Sb(w, t ?? ""));
      m.length !== 0 && s?.(m);
    }, b = (_) => {
      r || (_.preventDefault(), k(!0));
    }, p = (_) => {
      r || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", k(!0));
    }, g = (_) => {
      r || _.currentTarget.contains(_.relatedTarget) || k(!1);
    }, h = (_) => {
      r || (_.preventDefault(), k(!1), v(_.dataTransfer.files));
    };
    return Rs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": r || void 0,
        className: [
          Jn.zone,
          u ? Jn.dragging : null,
          r ? Jn.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: p,
        onDragLeave: g,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Jn.caption, children: u ? i : l }),
          !r && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Jn.browse,
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
                v(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), Cb = "_root_1a92d_1", Db = "_menubar_1a92d_5", zb = "_horizontal_1a92d_15", Eb = "_vertical_1a92d_20", Mb = "_itemWrapper_1a92d_25", Ib = "_item_1a92d_25", jb = "_disabled_1a92d_61", Ab = "_icon_1a92d_68", Tb = "_text_1a92d_75", Pb = "_caret_1a92d_79", Lb = "_hasChildren_1a92d_85", Rb = "_submenu_1a92d_94", Bb = "_submenuItem_1a92d_118", Fb = "_flyout_1a92d_155", Hb = "_hamburger_1a92d_175", qb = "_responsive_1a92d_198", Kb = "_mobileOpen_1a92d_207", Ue = {
  root: Cb,
  menubar: Db,
  horizontal: zb,
  vertical: Eb,
  itemWrapper: Mb,
  item: Ib,
  disabled: jb,
  icon: Ab,
  text: Tb,
  caret: Pb,
  hasChildren: Lb,
  submenu: Rb,
  submenuItem: Bb,
  flyout: Fb,
  hamburger: Hb,
  responsive: qb,
  mobileOpen: Kb
}, xs = Ln(null);
function Wb(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), s = e.replace(/^#?\/?/, "");
  return t === "prefix" ? s === "" ? !1 : n === s || n.startsWith(`${s}/`) : n === s;
}
function Ub(e, t, n, s, l) {
  const [i, d] = W(n), r = e ? t ?? !1 : i, a = R(
    (c) => {
      e || d(c), s?.(c);
    },
    [e, s]
  );
  return _e(() => {
    l > 0 && a(!1);
  }, [l]), [r, a];
}
function Vb({
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
function Tr(e) {
  return gt(e) && e.type === Pr;
}
function Fs({
  itemKey: e,
  props: t
}) {
  const n = hn(xs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: s, value: l, path: i, disabled: d, template: r } = t, a = be(
    () => os.toArray(t.children).filter(gt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [k, v] = Ub(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, p = Q(0), h = (b && !u ? n.openKey === e : null) ?? k, _ = R(
    (A) => {
      b && !u ? n.setOpenKey(A ? e : null) : (v(A), b && n.setOpenKey(null));
    },
    [b, u, n, e, v]
  ), [, m] = W(0);
  _e(() => {
    if (!i) return;
    const A = () => m((j) => j + 1);
    return window.addEventListener("hashchange", A), () => window.removeEventListener("hashchange", A);
  }, [i]);
  const w = i && !c ? Wb(i, t.match) : !1, y = R(
    (A) => {
      if (f) {
        A.preventDefault();
        return;
      }
      const j = { text: s, value: l, path: i };
      [n.emit(j), t.onClick?.(j)].includes(!1) && A.preventDefault(), n.closeAll();
    },
    [f, s, l, i, n, t]
  ), N = R(() => {
    if (!f) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [f, h, _, n.clickToOpen]), $ = R(() => {
    !c || f || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [c, f, n.clickToOpen, _]), C = R(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), z = `${n.baseId}-submenu-${e}`, [D, E] = W(null);
  _e(() => {
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
  ), x = c ? /* @__PURE__ */ o("span", { className: Ue.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    ke,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, S = r ?? /* @__PURE__ */ M(rt, { children: [
    /* @__PURE__ */ o(
      Vb,
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
  if (c) {
    let A = function(j) {
      const F = Array.from(j.currentTarget.children).map((ee) => ee.querySelector('[role="menuitem"]')).filter(
        (ee) => ee != null && ee.getAttribute("aria-disabled") !== "true" && !ee.hasAttribute("disabled")
      ), L = document.activeElement, V = L ? F.indexOf(L) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (V === -1 ? F[0] : F[(V + 1) % F.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (V === -1 ? F[F.length - 1] : F[(V - 1 + F.length) % F.length])?.focus()) : j.key === "ArrowRight" ? L?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), L.getAttribute("aria-expanded") !== "true" && L.click(), document.getElementById(
        L.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ M(
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
              "data-top": b ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": f || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": z,
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
              id: z,
              role: "menu",
              "aria-label": s,
              className: [
                Ue.submenu,
                n.flyout && !b ? Ue.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: A,
              children: /* @__PURE__ */ o(xs.Provider, { value: O, children: a.map(
                (j, F) => Tr(j) ? /* @__PURE__ */ o(
                  Fs,
                  {
                    itemKey: `${e}-${F}`,
                    props: j.props
                  },
                  `${e}-${F}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Ls, { children: j }, `${e}-custom-${F}`)
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
    "aria-current": w ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Ue.submenuItem, f ? Ue.disabled : null].filter(Boolean).join(" "),
    onClick: y
  };
  return i && !f ? /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...T, children: S }) }) : /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...T, children: S }) });
}
function Pr(e) {
  if (!hn(xs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Fs, { itemKey: e.text, props: e });
}
function Gb({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: s = !0,
  isContextMenu: l = !1,
  onClick: i,
  onClose: d,
  ariaLabel: r = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: c,
  ...f
}) {
  const u = Pe(), k = Q(null), v = Q(null), [b, p] = W(null), [g, h] = W(0), [_, m] = W(!1), w = Q(null), y = R(
    (D) => i?.(D),
    [i]
  ), N = R(() => {
    p(null), h((D) => D + 1);
  }, []);
  _e(() => {
    if (b == null) return;
    const D = (E) => {
      k.current && !k.current.contains(E.target) && N();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [b, N]), _e(() => {
    w.current != null && b === w.current && (document.getElementById(`${u}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), w.current = null);
  }, [b, u]);
  const $ = be(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: g,
      emit: y,
      closeAll: N,
      openKey: b,
      setOpenKey: p
    }),
    [u, n, t, g, y, N, b]
  ), C = be(
    () => os.toArray(e).filter(gt),
    [e]
  ), z = (D) => {
    const E = v.current;
    if (!E) return;
    const O = Array.from(E.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const T = document.getElementById(`${u}-submenu-${b}`);
      if (T) {
        const A = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (L) => L.getAttribute("aria-disabled") !== "true" && !L.hasAttribute("disabled")
        ), j = document.activeElement, F = j ? A.indexOf(j) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (F === -1 ? A[0] : A[(F + 1) % A.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (F === -1 ? A[A.length - 1] : A[(F - 1 + A.length) % A.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), N(), d?.(), E.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (D.key === "Enter" || D.key === " ") return;
      }
      if (D.key === "Escape") {
        D.preventDefault(), N(), d?.();
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
        const T = x?.getAttribute("data-index");
        if (T == null) return;
        E.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (D.preventDefault(), w.current = T, p(T));
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
      const T = O.map((j) => j.textContent ?? ""), A = S === -1 ? 0 : (S + 1) % O.length;
      for (let j = 0; j < O.length; j++) {
        const F = (A + j) % O.length;
        if (T[F]?.toLowerCase().startsWith(D.key.toLowerCase())) {
          D.preventDefault(), O[F]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ M(
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
        c
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
            onClick: () => m((D) => !D),
            children: /* @__PURE__ */ o(ke, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: v,
            role: l ? "menu" : "menubar",
            "aria-label": r,
            className: Ue.menubar,
            onKeyDown: z,
            children: /* @__PURE__ */ o(xs.Provider, { value: $, children: C.map(
              (D, E) => Tr(D) ? /* @__PURE__ */ o(
                Fs,
                {
                  itemKey: String(E),
                  props: D.props
                },
                `top-${E}`
              ) : /* @__PURE__ */ o(Ls, { children: D }, `top-custom-${E}`)
            ) })
          }
        )
      ]
    }
  );
}
const Xb = "_popup_uiejp_1", Yb = "_menu_uiejp_22", Ts = {
  popup: Xb,
  menu: Yb
}, Lr = Ln(null);
function Gk() {
  const e = hn(Lr);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Rr(e) {
  return e.map((t, n) => {
    const { children: s, ...l } = t;
    return /* @__PURE__ */ o(Pr, { ...l, children: s ? Rr(s) : void 0 }, `${t.text}-${n}`);
  });
}
function Zb({ state: e, onClose: t }) {
  const n = Q(null), [s, l] = W({ left: e.x, top: e.y });
  zs(() => {
    const d = n.current;
    if (!d) return;
    const r = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - r.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - r.height))
    });
  }, [e.x, e.y, e.options]), _e(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = R(
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
      className: Ts.popup,
      style: { left: s.left, top: s.top },
      children: /* @__PURE__ */ o("div", { className: Ts.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Gb,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Rr(e.options.items ?? [])
        }
      ) })
    }
  );
}
function Xk({ children: e }) {
  const [t, n] = W(null), s = R(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (d, r) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: r });
    },
    []
  );
  _e(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Ts.popup}`);
      u && !u.contains(f.target) && s();
    }, r = (f) => {
      f.key === "Escape" && (f.preventDefault(), s());
    }, a = () => s(), c = () => s();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", r, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", r, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, s]);
  const i = be(
    () => ({ open: l, close: s, isOpen: t != null }),
    [l, s, t]
  );
  return /* @__PURE__ */ M(Lr.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Zb, { state: t, onClose: s }) : null
  ] });
}
const Jb = "_root_rgcia_1", Qb = "_list_rgcia_9", ey = "_item_rgcia_14", ty = "_trigger_rgcia_18", ny = "_disabled_rgcia_45", sy = "_expanded_rgcia_52", ry = "_selected_rgcia_56", oy = "_icon_rgcia_61", ly = "_text_rgcia_72", ay = "_caret_rgcia_79", iy = "_open_rgcia_86", cy = "_submenu_rgcia_90", dy = "_iconOnly_rgcia_172", uy = "_stacked_rgcia_201", ct = {
  root: Jb,
  list: Qb,
  item: ey,
  trigger: ty,
  disabled: ny,
  expanded: sy,
  selected: ry,
  icon: oy,
  text: ly,
  caret: ay,
  open: iy,
  submenu: cy,
  iconOnly: dy,
  stacked: uy
}, vs = Ln(null);
function fy() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function _y(e, t) {
  const n = fy(), s = e.replace(/^#?\/?/, "");
  return t === "prefix" ? s === "" ? !1 : s === "/" ? n === "" || n === "/" : n === s || n.startsWith(`${s}/`) : n === s;
}
function hy({
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
function Hs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const s = hn(vs);
  if (!s) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: r } = n, a = be(
    () => os.toArray(n.children).filter(gt),
    [n.children]
  ), c = a.length > 0, f = !!r, u = n.match ?? s.match, k = n.expanded !== void 0, [v, b] = W(
    n.defaultExpanded ?? !1
  ), p = k ? n.expanded ?? !1 : v, g = R(
    (L) => {
      k || b(L), n.onExpandedChange?.(L);
    },
    [k, n]
  );
  _e(() => {
    s.collapseSignal > 0 && !s.collapseSkipRef.current.has(e) && g(!1);
  }, [s.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, m] = W(
    n.defaultSelected ?? !1
  ), w = !h && d ? _y(d, u) : !1, y = n.selected ?? (h ? _ : w || _), [, N] = W(0);
  _e(() => {
    if (!d) return;
    const L = () => N((V) => V + 1);
    return window.addEventListener("hashchange", L), () => window.removeEventListener("hashchange", L);
  }, [d]);
  const $ = be(
    () => ({
      ...s,
      level: s.level + 1,
      openAncestors: () => {
        g(!0), s.openAncestors();
      }
    }),
    [s, g]
  );
  _e(() => {
    w && t.length > 0 && $.openAncestors();
  }, []);
  const C = R(
    (L) => {
      if (f) {
        L.preventDefault();
        return;
      }
      const V = { text: l, value: i, path: d };
      [s.emit(V), n.onClick?.(V)].includes(!1) && L.preventDefault(), h || m(!0), n.onSelectedChange?.(!0);
    },
    [f, l, i, d, s, n, h]
  ), z = R(() => {
    f || (p || s.notifyOpened(e, t), g(!p));
  }, [f, p, s, e, t, g]), D = R(
    (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), c ? z() : L.target.click()) : L.key === "Escape" && p ? (L.preventDefault(), g(!1)) : L.key === "ArrowRight" && c && !p ? (L.preventDefault(), s.notifyOpened(e, t), g(!0)) : L.key === "ArrowLeft" && p && (L.preventDefault(), g(!1));
    },
    [c, z, p, g, s, e, t]
  ), E = c && s.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [ct.caret, p ? ct.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, O = n.template ?? /* @__PURE__ */ M(rt, { children: [
    /* @__PURE__ */ o(
      hy,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    s.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: ct.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: ct.text, children: l }),
    E
  ] }), x = `${s.baseId}-panel-${e}`, S = `${s.baseId}-trigger-${e}`, T = [
    ct.trigger,
    f ? ct.disabled : null,
    p ? ct.expanded : null,
    y ? ct.selected : null
  ].filter(Boolean).join(" "), A = s.level > 0 ? "menuitem" : void 0, j = c ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: A,
      "aria-expanded": p,
      "aria-controls": x,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: z,
      onKeyDown: D,
      children: O
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: S,
      role: A,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": y ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: C,
      onKeyDown: D,
      children: O
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: A,
      "aria-current": y ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: C,
      onKeyDown: D,
      children: O
    }
  ), F = c ? s.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: x,
      role: "menu",
      "aria-labelledby": S,
      className: ct.submenu,
      hidden: s.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(vs.Provider, { value: $, children: a.map((L, V) => /* @__PURE__ */ o(
        Hs,
        {
          itemKey: `${e}-${V}`,
          ancestors: [...t, e],
          props: L.props
        },
        `${e}-${V}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: ct.item,
      style: { "--dx-panelmenu-level": s.level },
      "data-dx-panelmenu-item": "",
      "data-level": s.level,
      children: [
        j,
        F
      ]
    }
  );
}
function Yk(e) {
  if (!hn(vs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(Hs, { itemKey: e.text, ancestors: [], props: e });
}
function Zk({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: s = !0,
  match: l = "prefix",
  renderMode: i = "client",
  onClick: d,
  ariaLabel: r = "Panel menu",
  className: a,
  ...c
}) {
  const f = Pe(), [u, k] = W(0), v = Q(/* @__PURE__ */ new Set()), b = R(
    (w) => d?.(w),
    [d]
  ), p = R(
    (w, y) => {
      t || (v.current = /* @__PURE__ */ new Set([w, ...y]), k((N) => N + 1));
    },
    [t]
  ), g = (w) => Array.from(
    w.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (y) => !y.hasAttribute("disabled") && y.getAttribute("aria-disabled") !== "true" && y.closest("[hidden]") == null
  ), h = (w) => {
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const y = w.target, N = g(w.currentTarget), $ = N.indexOf(y);
        if ($ === -1) return;
        w.preventDefault();
        const C = w.key === "ArrowDown" ? 1 : -1;
        N[($ + C + N.length) % N.length]?.focus();
      } else if (w.key === "Home" || w.key === "End") {
        const y = g(w.currentTarget);
        w.preventDefault(), (w.key === "Home" ? y[0] : y[y.length - 1])?.focus();
      }
    }
  }, _ = be(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: s,
      renderMode: i,
      match: l,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: v,
      emit: b,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      s,
      i,
      l,
      u,
      b,
      p
    ]
  ), m = be(
    () => os.toArray(e).filter(gt),
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
      ...c,
      children: /* @__PURE__ */ o("div", { className: ct.list, role: "presentation", children: /* @__PURE__ */ o(vs.Provider, { value: _, children: m.map((w, y) => /* @__PURE__ */ o(
        Hs,
        {
          itemKey: String(y),
          ancestors: [],
          props: w.props
        },
        `top-${y}`
      )) }) })
    }
  );
}
const py = "_root_5numg_1", my = "_trigger_5numg_7", gy = "_defaultTrigger_5numg_40", by = "_avatar_5numg_46", yy = "_menu_5numg_58", xy = "_item_5numg_74", vy = "_disabled_5numg_88", ky = "_active_5numg_97", wy = "_icon_5numg_107", $y = "_text_5numg_114", Gt = {
  root: py,
  trigger: my,
  defaultTrigger: gy,
  avatar: by,
  menu: yy,
  item: xy,
  disabled: vy,
  active: ky,
  icon: wy,
  text: $y
};
function Jk({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: s = "Profile menu",
  className: l
}) {
  const i = Pe(), d = `${i}-menu`, r = Q(null), a = Q(null), [c, f] = W(!1), [u, k] = W(-1), v = t, b = e.map((y, N) => y.disabled ? -1 : N).filter((y) => y >= 0), p = R(
    (y) => {
      if (y.disabled) return;
      const N = {
        text: y.text,
        path: y.path
      };
      n?.(N), f(!1), a.current?.focus();
    },
    [n]
  ), g = R(() => {
    k(b[0] ?? -1), f(!0);
  }, [b]), h = R(() => {
    f(!1), k(-1), a.current?.focus();
  }, []);
  _e(() => {
    if (!c) return;
    const y = (N) => {
      r.current && !r.current.contains(N.target) && (f(!1), k(-1));
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [c]), _e(() => {
    if (!c) return;
    const y = (N) => {
      N.key === "Escape" && (N.preventDefault(), h());
    };
    return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [c, h]);
  const _ = (y) => {
    if (b.length === 0) return;
    const N = b.indexOf(u), $ = N === -1 ? 0 : (N + y + b.length) % b.length, C = b[$];
    C != null && k(C);
  }, m = (y) => {
    if (!c) {
      (y.key === "ArrowDown" || y.key === "Enter" || y.key === " ") && (y.preventDefault(), g());
      return;
    }
    switch (y.key) {
      case "Escape":
        y.preventDefault(), h();
        break;
      case "ArrowDown":
        y.preventDefault(), _(1);
        break;
      case "ArrowUp":
        y.preventDefault(), _(-1);
        break;
      case "Home":
        y.preventDefault(), b[0] != null && k(b[0]);
        break;
      case "End":
        y.preventDefault(), b[b.length - 1] != null && k(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (y.preventDefault(), u >= 0) {
          const N = e[u];
          N && !N.disabled && p(N);
        }
        break;
      case "Tab":
        f(!1), k(-1);
        break;
    }
  }, w = (y) => {
    switch (y.key) {
      case "ArrowDown":
        y.preventDefault(), _(1);
        break;
      case "ArrowUp":
        y.preventDefault(), _(-1);
        break;
      case "Home":
        y.preventDefault(), b[0] != null && k(b[0]);
        break;
      case "End":
        y.preventDefault(), b[b.length - 1] != null && k(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (y.preventDefault(), u >= 0) {
          const N = e[u];
          N && !N.disabled && p(N);
        }
        break;
      case "Escape":
        y.preventDefault(), h();
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
      className: [Gt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": s, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": s,
            className: Gt.trigger,
            onClick: () => c ? h() : g(),
            onKeyDown: m,
            children: v ?? /* @__PURE__ */ M("span", { className: Gt.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Gt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ o("span", { children: "Profile" })
            ] })
          }
        ),
        c ? /* @__PURE__ */ o(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": s,
            "aria-activedescendant": u >= 0 ? `${i}-item-${u}` : void 0,
            className: Gt.menu,
            onKeyDown: w,
            tabIndex: -1,
            children: e.map((y, N) => {
              const $ = !!y.disabled, C = N === u;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${i}-item-${N}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [
                    Gt.item,
                    C ? Gt.active : null,
                    $ ? Gt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || p(y);
                  },
                  onMouseEnter: () => {
                    $ || k(N);
                  },
                  children: [
                    y.icon ? /* @__PURE__ */ o("span", { className: Gt.icon, "aria-hidden": "true", children: y.icon }) : null,
                    /* @__PURE__ */ o("span", { className: Gt.text, children: y.text })
                  ]
                },
                `${y.text}-${N}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Ny = "_root_vv0xs_1", Oy = "_bottomRight_vv0xs_11", Sy = "_bottomLeft_vv0xs_16", Cy = "_topRight_vv0xs_21", Dy = "_topLeft_vv0xs_26", zy = "_menu_vv0xs_31", Ey = "_itemWrapper_vv0xs_48", My = "_tooltip_vv0xs_54", Iy = "_main_vv0xs_76", jy = "_mainIcon_vv0xs_104", Ay = "_mainOpen_vv0xs_109", Ty = "_item_vv0xs_48", Py = "_disabled_vv0xs_141", Ly = "_itemIcon_vv0xs_148", vt = {
  root: Ny,
  bottomRight: Oy,
  bottomLeft: Sy,
  topRight: Cy,
  topLeft: Dy,
  menu: zy,
  itemWrapper: Ey,
  tooltip: My,
  main: Iy,
  mainIcon: jy,
  mainOpen: Ay,
  item: Ty,
  disabled: Py,
  itemIcon: Ly
};
function Qk({
  items: e,
  position: t,
  icon: n = "+",
  onClick: s,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${Pe()}-menu`, c = Q(null), f = Q(null), [u, k] = W(!1), v = R(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      s?.(_), k(!1), f.current?.focus();
    },
    [s]
  );
  _e(() => {
    if (!u) return;
    const h = (_) => {
      c.current && !c.current.contains(_.target) && k(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [u]), _e(() => {
    if (!u) return;
    const h = (_) => {
      _.key === "Escape" && (k(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [u]);
  const b = d === "bottom-right" ? vt.bottomRight : d === "bottom-left" ? vt.bottomLeft : d === "top-right" ? vt.topRight : vt.topLeft, p = (h) => {
    !u && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), k(!0)) : u && h.key === "Escape" && (h.preventDefault(), k(!1));
  }, g = (h) => {
    h.key === "Escape" && (h.preventDefault(), k(!1), f.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [vt.root, b, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: vt.menu,
            onKeyDown: g,
            children: e.map((h, _) => {
              const m = !!h.disabled;
              return /* @__PURE__ */ M("div", { className: vt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: vt.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": m || void 0,
                    title: h.text,
                    disabled: m,
                    tabIndex: m ? -1 : 0,
                    className: [vt.item, m ? vt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => v(h),
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
            "aria-controls": a,
            "aria-label": l,
            onClick: () => k((h) => !h),
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
const Ry = "_root_1eyur_1", By = "_list_1eyur_5", Fy = "_item_1eyur_15", Hy = "_link_1eyur_22", qy = "_linkButton_1eyur_23", Ky = "_current_1eyur_24", Wy = "_disabled_1eyur_68", Uy = "_icon_1eyur_74", Vy = "_text_1eyur_81", Gy = "_separator_1eyur_85", Ke = {
  root: Ry,
  list: By,
  item: Fy,
  link: Hy,
  linkButton: qy,
  current: Ky,
  disabled: Wy,
  icon: Uy,
  text: Vy,
  separator: Gy
};
function ew({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: s
}) {
  const l = t, i = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [Ke.root, s].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Ke.list, children: e.map((d, r) => {
        const a = r === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: Ke.item, children: [
          a ? c ? /* @__PURE__ */ M(
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
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: Ke.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
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
          ) : c ? /* @__PURE__ */ M(
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
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: Ke.link,
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Ke.linkButton,
              tabIndex: 0,
              onClick: () => i(d),
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: Ke.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: Ke.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ o("span", { className: Ke.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${r}`);
      }) })
    }
  );
}
const Xy = "_link_tmy3k_1", Yy = {
  link: Xy
}, tw = Le(function({ children: t, icon: n, visible: s = !0, className: l, ...i }, d) {
  if (s === !1) return null;
  const r = /* @__PURE__ */ M(rt, { children: [
    n != null && /* @__PURE__ */ o(ke, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [Yy.link, l].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...u } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        className: a,
        href: f,
        ...u,
        children: r
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
      children: r
    }
  );
}), Zy = "_root_dnkuu_1", Jy = "_list_dnkuu_5", Qy = "_item_dnkuu_15", ex = "_connector_dnkuu_21", tx = "_connectorCompleted_dnkuu_30", nx = "_step_dnkuu_34", sx = "_active_dnkuu_69", rx = "_completed_dnkuu_75", ox = "_circle_dnkuu_79", lx = "_check_dnkuu_109", ax = "_icon_dnkuu_114", ix = "_number_dnkuu_119", cx = "_text_dnkuu_124", kt = {
  root: Zy,
  list: Jy,
  item: Qy,
  connector: ex,
  connectorCompleted: tx,
  step: nx,
  active: sx,
  completed: rx,
  circle: ox,
  check: lx,
  icon: ax,
  number: ix,
  text: cx
};
function nw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: s = 0,
  linear: l,
  Linear: i,
  onChange: d,
  Change: r,
  onSelectedIndexChange: a,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? i ?? !1, k = t ?? n, v = k !== void 0, [b, p] = W(() => Math.min(Math.max(0, k ?? s), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, v ? k : b),
    Math.max(0, e.length - 1)
  ), _ = Q(null), m = R(
    (N) => {
      const $ = Math.min(
        Math.max(0, N),
        Math.max(0, e.length - 1)
      );
      v || p($), (d ?? r ?? a)?.($);
    },
    [v, d, r, a, e.length]
  ), w = R(
    (N, $) => !!($.disabled || u && N > h + 1),
    [u, h]
  ), y = (N) => {
    const $ = Array.from(
      N.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), C = document.activeElement, z = C ? $.indexOf(C) : -1;
    if (N.key === "ArrowRight" || N.key === "ArrowDown") {
      if (N.preventDefault(), $.length === 0) return;
      const D = z === -1 ? 0 : (z + 1) % $.length, E = $[D];
      E && E.focus();
    } else if (N.key === "ArrowLeft" || N.key === "ArrowUp") {
      if (N.preventDefault(), $.length === 0) return;
      const D = z === -1 ? $.length - 1 : (z - 1 + $.length) % $.length, E = $[D];
      E && E.focus();
    } else N.key === "Home" ? (N.preventDefault(), $[0]?.focus()) : N.key === "End" && (N.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": c,
      className: [kt.root, f].filter(Boolean).join(" "),
      onKeyDown: y,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: kt.list, children: e.map((N, $) => {
        const C = $ === h, z = $ < h, D = w($, N);
        return /* @__PURE__ */ M(
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
                    z ? kt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ M(
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
                    z ? kt.completed : null,
                    D ? kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || m($);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: kt.circle, "aria-hidden": "true", children: z ? /* @__PURE__ */ o("span", { className: kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "check", size: "sm" }) }) : N.icon ? /* @__PURE__ */ o("span", { className: kt.icon, children: N.icon }) : /* @__PURE__ */ o("span", { className: kt.number, children: $ + 1 }) }),
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
const dx = "_root_12hod_1", ux = "_horizontal_12hod_13", fx = "_vertical_12hod_17", _x = "_pane_12hod_21", hx = "_handle_12hod_31", px = "_handleHorizontal_12hod_51", mx = "_handleVertical_12hod_57", gx = "_handleGrip_12hod_63", bx = "_handleCollapseHint_12hod_75", yx = "_collapseBtn_12hod_79", xx = "_collapseBtnCollapsed_12hod_109", jt = {
  root: dx,
  horizontal: ux,
  vertical: fx,
  pane: _x,
  handle: hx,
  handleHorizontal: px,
  handleVertical: mx,
  handleGrip: gx,
  handleCollapseHint: bx,
  collapseBtn: yx,
  collapseBtnCollapsed: xx
};
function Qn(e, t) {
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
function sw({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: s,
  Resize: l,
  onCollapse: i,
  Collapse: d,
  ariaLabel: r = "Splitter",
  className: a
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = Q(null), k = R(() => {
    const x = n.length;
    if (x === 0) return [];
    const S = n.map((A) => A.size ? Qn(A.size, 100 / x) : 100 / x), T = S.reduce((A, j) => A + j, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? S.map((A) => A / T * 100) : S;
  }, [n]), [v, b] = W(() => k()), [p, g] = W(
    () => n.map((x) => !!x.collapsed)
  ), h = Q(v);
  _e(() => {
    g(n.map((x) => !!x.collapsed));
  }, [n]);
  const _ = R(
    () => n.map((x) => Qn(x.min, 0)),
    [n]
  ), m = R(
    () => n.map((x) => Qn(x.max, 100)),
    [n]
  ), w = R(
    (x, S) => {
      const T = { paneIndex: x, newSize: S, cancel: !1 };
      return (s ?? l)?.(T), !T.cancel;
    },
    [s, l]
  ), y = R(
    (x, S) => {
      const T = { paneIndex: x, collapse: S, cancel: !1 };
      return (i ?? d)?.(T), !T.cancel;
    },
    [i, d]
  ), N = R(
    (x) => {
      const S = !p[x];
      y(x, S) && (S ? (h.current = [...v], g((T) => {
        const A = [...T];
        return A[x] !== void 0 && (A[x] = !0), A;
      }), b((T) => {
        const A = [...T], j = A[x] ?? 0, F = x < A.length - 1 ? x + 1 : x - 1;
        if (F >= 0 && F < A.length) {
          const L = A[F] ?? 0;
          A[F] = L + j, A[x] = 0;
        } else
          A[x] = 0;
        return A;
      })) : (g((T) => {
        const A = [...T];
        return A[x] !== void 0 && (A[x] = !1), A;
      }), b(() => {
        const T = [...h.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [p, v, n.length, y]
  ), $ = Q(
    null
  ), C = R(
    (x, S, T) => {
      const A = u.current;
      if (!A) return null;
      const j = A.getBoundingClientRect();
      let F;
      if (f) {
        if (j.width === 0) return null;
        F = (S - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        F = (T - j.top) / j.height * 100;
      }
      let L = 0;
      for (let ee = 0; ee < x; ee++) {
        const Y = v[ee];
        Y !== void 0 && (L += Y);
      }
      return F - L;
    },
    [f, v]
  ), z = (x, S) => {
    S.preventDefault();
    const T = S.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(S.pointerId), $.current = { handleIndex: x, pointerId: S.pointerId };
  }, D = (x) => {
    if (!$.current || $.current.pointerId !== x.pointerId)
      return;
    x.preventDefault();
    const S = $.current.handleIndex, T = C(S, x.clientX, x.clientY);
    if (T == null) return;
    const A = _(), j = m(), F = A[S] ?? 0, L = j[S] ?? 100, V = S + 1, ee = A[V] ?? 0, Y = j[V] ?? 100, me = v[S] ?? 0, de = v[V] ?? 0, re = me + de;
    if (re <= 0) return;
    let q = nn(T, F, L), ie = re - q;
    if (ie < ee) {
      if (ie = ee, q = re - ie, q < F || q > L) return;
    } else if (ie > Y && (ie = Y, q = re - ie, q < F || q > L))
      return;
    q = nn(q, F, L), ie = re - q, w(S, q) && b((se) => {
      const ue = [...se];
      return ue[S] = q, ue[V] = ie, ue;
    });
  }, E = (x) => {
    !$.current || $.current.pointerId !== x.pointerId || ($.current = null);
  }, O = (x, S) => {
    const T = _(), A = m(), j = x, F = x + 1, L = v[j] ?? 0, V = v[F] ?? 0, ee = L + V;
    let Y = 0;
    const me = !!n[j]?.collapsible, de = !!n[F]?.collapsible;
    if (f ? S.key === "ArrowLeft" ? Y = -5 : S.key === "ArrowRight" && (Y = 5) : S.key === "ArrowUp" ? Y = -5 : S.key === "ArrowDown" && (Y = 5), S.key === "Home") {
      S.preventDefault();
      let re = T[j] ?? 0, q = ee - re;
      if (q = nn(
        q,
        T[F] ?? 0,
        A[F] ?? 100
      ), re = ee - q, re = nn(re, T[j] ?? 0, A[j] ?? 100), !w(j, re)) return;
      b((ie) => {
        const se = [...ie];
        return se[j] = re, se[F] = q, se;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let re = A[j] ?? 100;
      re = Math.min(re, ee - (T[F] ?? 0));
      let q = ee - re;
      if (q = nn(
        q,
        T[F] ?? 0,
        A[F] ?? 100
      ), re = ee - q, re = nn(re, T[j] ?? 0, A[j] ?? 100), !w(j, re)) return;
      b((ie) => {
        const se = [...ie];
        return se[j] = re, se[F] = q, se;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (me || de)) {
      S.preventDefault(), N(me ? j : F);
      return;
    }
    if (Y !== 0) {
      S.preventDefault();
      let re = L + Y, q = ee - re;
      const ie = T[j] ?? 0, se = A[j] ?? 100, ue = T[F] ?? 0, oe = A[F] ?? 100;
      if (re = nn(re, ie, se), q = ee - re, (q < ue || q > oe) && (q = nn(q, ue, oe), re = ee - q, re = nn(re, ie, se), q = ee - re), !w(j, re)) return;
      b(($e) => {
        const Oe = [...$e];
        return Oe[j] = re, Oe[F] = q, Oe;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      className: [
        jt.root,
        f ? jt.horizontal : jt.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: n.map((x, S) => {
        const T = !!p[S], A = T ? 0 : v[S] ?? 100 / n.length, j = T ? { display: "none" } : f ? {
          flexBasis: `${A}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${A}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = Qn(x.min, 0), L = Qn(x.max, 100), V = S < n.length - 1, ee = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": x.label ?? `Pane ${S + 1}`,
              className: jt.pane,
              style: j,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : x.children,
                x.collapsible && !T ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: jt.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !T,
                    onClick: () => N(S),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                x.collapsible && T ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: jt.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !T,
                    onClick: () => N(S),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && x.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: jt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => N(S),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          V ? /* @__PURE__ */ M(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": F,
              "aria-valuemax": L,
              "aria-valuenow": Math.round(A),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: T || p[S + 1] ? -1 : 0,
              className: [
                jt.handle,
                f ? jt.handleHorizontal : jt.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (Y) => z(S, Y),
              onPointerMove: D,
              onPointerUp: E,
              onKeyDown: (Y) => O(S, Y),
              children: [
                /* @__PURE__ */ o("span", { className: jt.handleGrip, "aria-hidden": "true" }),
                (x.collapsible || ee) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: jt.handleCollapseHint,
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
const vx = "_root_1w3wd_1", kx = "_list_1w3wd_5", wx = "_vertical_1w3wd_14", $x = "_horizontal_1w3wd_20", Nx = "_item_1w3wd_28", Ox = "_link_1w3wd_32", Sx = "_active_1w3wd_57", An = {
  root: vx,
  list: kx,
  vertical: wx,
  horizontal: $x,
  item: Nx,
  link: Ox,
  active: Sx
};
function rw({
  items: e,
  selector: t,
  Selector: n,
  orientation: s,
  Orientation: l,
  onClick: i,
  Click: d,
  ariaLabel: r = "Table of contents",
  className: a
}) {
  const c = t ?? n, f = s ?? l ?? "vertical", [u, k] = W(
    () => e[0]?.selector ?? null
  ), v = Q(u);
  v.current = u;
  const b = R(
    (p, g) => {
      if (k(p.selector), (i ?? d)?.({ text: p.text, selector: p.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const _ = g;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return _e(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (c) {
        const y = document.querySelector(c);
        if (y) return y;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), m = () => {
      let y = null, N = null;
      for (const C of e) {
        const z = document.querySelector(C.selector);
        if (!z) continue;
        _.set(C.selector, z);
        const D = z.getBoundingClientRect();
        let E = D.top;
        if (g !== window) {
          const O = g.getBoundingClientRect();
          E = D.top - O.top;
        }
        E <= 80 ? (!N || E > N.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (N = { sel: C.selector, el: z }) : (!y || E < y.top) && (y = { sel: C.selector, top: E });
      }
      const $ = N?.sel ?? y?.sel ?? e[0]?.selector ?? null;
      $ && $ !== v.current && k($);
    }, w = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const y = g === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: g,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((N) => {
        const $ = N.filter((C) => C.isIntersecting).sort((C, z) => C.boundingClientRect.top - z.boundingClientRect.top);
        if ($[0]) {
          const C = $[0].target;
          for (const z of e) {
            if (document.querySelector(z.selector) === C) {
              k(z.selector);
              break;
            }
            if (z.selector.startsWith("#") && C.id === z.selector.slice(1)) {
              k(z.selector);
              break;
            }
          }
        } else
          m();
      }, y);
      for (const N of e) {
        const $ = document.querySelector(N.selector);
        $ && (h.observe($), _.set(N.selector, $));
      }
    }
    return g === window ? (window.addEventListener("scroll", w, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", w), h?.disconnect();
    }) : (g.addEventListener("scroll", w, {
      passive: !0
    }), m(), () => {
      g.removeEventListener("scroll", w), h?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": r,
      className: [An.root, An[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: An.list, children: e.map((p) => {
        const g = p.selector === u;
        return /* @__PURE__ */ o("li", { className: An.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [An.link, g ? An.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const _ = document.querySelector(p.selector);
              b(p, _);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const Cx = "_root_1bfit_1", Dx = "_viewport_1bfit_17", zx = "_slide_1bfit_24", Ex = "_active_1bfit_33", Mx = "_arrow_1bfit_37", Ix = "_prev_1bfit_71", jx = "_next_1bfit_75", Ax = "_pauseBtn_1bfit_79", Tx = "_indicators_1bfit_110", Px = "_indicator_1bfit_110", Lx = "_indicatorActive_1bfit_145", At = {
  root: Cx,
  viewport: Dx,
  slide: zx,
  active: Ex,
  arrow: Mx,
  prev: Ix,
  next: jx,
  pauseBtn: Ax,
  indicators: Tx,
  indicator: Px,
  indicatorActive: Lx
};
function ow({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: s = 0,
  auto: l,
  Auto: i,
  interval: d,
  Interval: r,
  pauseOnHover: a,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: u,
  showIndicators: k,
  ShowIndicators: v,
  onChange: b,
  Change: p,
  ariaLabel: g = "Carousel",
  className: h
}) {
  const _ = t ?? n, m = _ !== void 0, [w, y] = W(() => Math.min(Math.max(0, _ ?? s), Math.max(0, e.length - 1))), N = m ? _ : w, $ = e.length === 0 ? 0 : Math.min(Math.max(0, N), e.length - 1), C = l ?? i ?? !1, z = d ?? r ?? 3e3, D = a ?? c ?? !0, E = f ?? u ?? !0, O = k ?? v ?? !0, [x, S] = W(!1), [T, A] = W(!1), j = x || T, F = Q(null), L = Pe(), V = R(
    (ue) => {
      const oe = e.length === 0 ? 0 : (ue % e.length + e.length) % e.length;
      m || y(oe), (b ?? p)?.(oe);
    },
    [m, b, p, e.length]
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
  _e(() => {
    if (!C || j || e.length <= 1) return;
    const ue = setInterval(() => {
      V($ + 1);
    }, z);
    return () => clearInterval(ue);
  }, [C, j, z, $, V, e.length]);
  const de = (ue) => {
    e.length !== 0 && (ue.key === "ArrowLeft" ? (ue.preventDefault(), ee()) : ue.key === "ArrowRight" ? (ue.preventDefault(), Y()) : ue.key === "Home" ? (ue.preventDefault(), me(0)) : ue.key === "End" && (ue.preventDefault(), me(e.length - 1)));
  }, re = () => {
    D && C && A(!0);
  }, q = () => {
    D && C && A(!1);
  }, ie = () => {
    D && C && A(!0);
  }, se = () => {
    D && C && A(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: F,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [At.root, h].filter(Boolean).join(" "),
      onKeyDown: de,
      onMouseEnter: re,
      onMouseLeave: q,
      onFocusCapture: ie,
      onBlurCapture: se,
      children: [
        /* @__PURE__ */ o("div", { id: L, className: At.viewport, children: e.map((ue, oe) => {
          const $e = oe === $;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${oe + 1} of ${e.length}`,
              "aria-hidden": $e ? void 0 : !0,
              hidden: !$e,
              className: [At.slide, $e ? At.active : null].filter(Boolean).join(" "),
              children: ue
            },
            oe
          );
        }) }),
        E && e.length > 1 ? /* @__PURE__ */ M(rt, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [At.arrow, At.prev].filter(Boolean).join(" "),
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
              className: [At.arrow, At.next].filter(Boolean).join(" "),
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
            className: At.pauseBtn,
            "aria-label": x ? "Resume" : "Pause",
            "aria-pressed": x,
            onClick: () => S((ue) => !ue),
            children: x ? "▶" : "⏸"
          }
        ) : null,
        O && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: At.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ue, oe) => {
              const $e = oe === $;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    At.indicator,
                    $e ? At.indicatorActive : null
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
const Rx = "_root_1aa5u_1", Bx = "_group_1aa5u_20", Fx = "_itemWrapper_1aa5u_30", Hx = "_treeitem_1aa5u_34", qx = "_disabled_1aa5u_50", Kx = "_selected_1aa5u_60", Wx = "_caret_1aa5u_66", Ux = "_caretIcon_1aa5u_113", Vx = "_caretOpen_1aa5u_120", Gx = "_caretPlaceholder_1aa5u_124", Xx = "_label_1aa5u_130", Yx = "_loading_1aa5u_137", Zx = "_loadingRow_1aa5u_143", Jx = "_empty_1aa5u_149", Qx = "_checkbox_1aa5u_155", at = {
  root: Rx,
  group: Bx,
  itemWrapper: Fx,
  treeitem: Hx,
  disabled: qx,
  selected: Kx,
  caret: Wx,
  caretIcon: Ux,
  caretOpen: Vx,
  caretPlaceholder: Gx,
  label: Xx,
  loading: Yx,
  loadingRow: Zx,
  empty: Jx,
  checkbox: Qx
};
function ev({
  indeterminate: e,
  ...t
}) {
  const n = Q(null);
  return _e(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function lw({
  data: e,
  Data: t,
  children: n,
  Children: s,
  textProperty: l,
  TextProperty: i,
  keyProperty: d,
  KeyProperty: r,
  selectionMode: a,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: k,
  SelectedItems: v,
  defaultSelectedItem: b,
  defaultSelectedItems: p,
  onChange: g,
  Change: h,
  onExpand: _,
  Expand: m,
  onCollapse: w,
  Collapse: y,
  loadChildData: N,
  LoadChildData: $,
  template: C,
  Template: z,
  itemTemplate: D,
  ItemTemplate: E,
  ariaLabel: O,
  AriaLabel: x,
  allowCheckBoxes: S = !1,
  checkedKeys: T,
  defaultCheckedKeys: A,
  onCheckedChange: j,
  allowCheckChildren: F = !0,
  className: L
}) {
  const V = e ?? t ?? [], ee = n ?? s, Y = l ?? i ?? "text", me = d ?? r ?? "id", de = a ?? c ?? "single", re = O ?? x ?? "Tree", q = N ?? $, ie = C ?? z ?? D ?? E, se = R(
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
        for (const fe of ge) {
          const xe = se(fe);
          fe.expanded && X.add(xe);
          const Me = oe(fe);
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
  ), [we, ot] = W(() => /* @__PURE__ */ new Set()), tt = f ?? u, Ze = k ?? v, lt = de === "multiple" ? Ze !== void 0 : tt !== void 0, G = R(() => {
    if (de === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((ne) => se(ne)));
      const H = /* @__PURE__ */ new Set(), X = (ne) => {
        for (const ge of ne) {
          ge.selected && H.add(se(ge));
          const fe = oe(ge);
          fe && X(fe);
        }
      };
      return X(V), H;
    } else {
      if (b) return /* @__PURE__ */ new Set([se(b)]);
      let H = null;
      const X = (ne) => {
        for (const ge of ne) {
          if (ge.selected)
            return H = se(ge), !0;
          const fe = oe(ge);
          if (fe && X(fe)) return !0;
        }
        return !1;
      };
      return X(V), H ? /* @__PURE__ */ new Set([H]) : /* @__PURE__ */ new Set();
    }
  }, [
    de,
    b,
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
      if (tt !== void 0) {
        const H = tt;
        return H ? /* @__PURE__ */ new Set([se(H)]) : /* @__PURE__ */ new Set();
      }
      return I;
    }
  }, [
    de,
    Ze,
    tt,
    I,
    se
  ]), he = R(
    (H) => {
      let X;
      const ne = (ge) => {
        for (const fe of ge) {
          if (se(fe) === H)
            return X = fe, !0;
          const Me = ve.get(se(fe)) ?? oe(fe);
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
        const fe = se(ge);
        H.set(fe, ge);
        const Me = ve.get(fe) ?? oe(ge);
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
          const fe = g ?? h;
          if (fe) {
            const xe = te(), Me = [];
            for (const Ee of ge) {
              const Ve = xe.get(Ee) ?? he(Ee);
              Ve && Me.push(Ve);
            }
            fe({ item: H, selectedItems: Me });
          }
        } else if (!Z.has(X) || Z.size !== 1 || !Z.has(X)) {
          lt || U(/* @__PURE__ */ new Set([X]));
          const fe = g ?? h;
          fe && fe({ item: H, selectedItem: H });
        } else {
          const fe = g ?? h;
          fe && fe({ item: H, selectedItem: H });
        }
    },
    [
      se,
      de,
      Z,
      lt,
      g,
      h,
      te,
      he
    ]
  ), ze = R(
    async (H) => {
      const X = se(H);
      if (!!H.disabled) return;
      const ge = Oe.has(X), fe = _ ?? m, xe = w ?? y, Me = oe(H), Ve = ve.get(X) ?? Me, ft = !(Ve !== void 0 && Ve.length > 0) && q != null;
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
          Be((Ht) => {
            const Tt = new Map(Ht);
            return Tt.set(X, Ge), Tt;
          }), Ye((Ht) => {
            const Tt = new Set(Ht);
            return Tt.add(X), Tt;
          }), fe?.({ item: H });
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
      }), fe?.({ item: H });
    },
    [
      se,
      Oe,
      oe,
      ve,
      q,
      we,
      _,
      m,
      w,
      y
    ]
  ), Fe = be(() => {
    const H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), ge = (fe, xe) => {
      for (const Me of fe) {
        const Ee = se(Me);
        H.has(Ee) || H.set(Ee, []), X.set(Ee, xe), Me.disabled && ne.add(Ee);
        const Qe = ve.get(Ee) ?? oe(Me);
        Qe && Qe.length > 0 && (H.set(
          Ee,
          Qe.map((ft) => se(ft))
        ), ge(Qe, Ee));
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
  ), [nt, on] = W(
    () => new Set(A ?? [])
  ), J = T !== void 0 ? new Set(T) : nt, Se = R(
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
  ), Et = R(
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
      T === void 0 && on(ne), j?.([...ne]);
    },
    [
      S,
      F,
      T,
      J,
      Se,
      se,
      dt,
      j
    ]
  ), Ce = be(() => {
    const H = [], X = (ne, ge, fe) => {
      ne.forEach((xe, Me) => {
        const Ee = se(xe), Ve = ue(xe), Qe = ve.get(Ee) ?? oe(xe);
        let ft;
        ve.has(Ee) ? ft = ve.get(Ee).length > 0 : Qe !== void 0 ? ft = Qe.length > 0 : q ? ft = !0 : ft = !1;
        const et = Oe.has(Ee), Ge = !!xe.disabled, Ht = ne.length, Tt = Me + 1;
        if (H.push({
          item: xe,
          key: Ee,
          text: Ve,
          level: ge,
          posInSet: Tt,
          setSize: Ht,
          hasChildren: ft,
          expanded: et,
          parentKey: fe,
          disabled: Ge
        }), ft && et) {
          const ln = ve.get(Ee) ?? Qe;
          ln && ln.length > 0 && X(ln, ge + 1, Ee);
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
  ]), [Ae, Mt] = W(
    () => Ce[0]?.key ?? null
  ), yt = Q(""), Je = Q(null), K = Q(null);
  _e(() => {
    if (!Ae && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    } else if (Ae && !Ce.some((H) => H.key === Ae)) {
      const H = Ce[0];
      Mt(H ? H.key : null);
    }
  }, [Ce, Ae]), _e(() => {
    if (Ae) {
      const H = K.current?.querySelector(
        `[data-key="${CSS.escape(Ae)}"]`
      );
      let X = null;
      H || (X = K.current?.querySelector(
        `[data-key="${Ae}"]`
      ) ?? null);
      const ne = H ?? X;
      ne && document.activeElement !== ne && K.current?.contains(document.activeElement) && ne.focus();
    }
  }, [Ae]);
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
      const X = Ae ? Ce.findIndex((fe) => fe.key === Ae) : -1, ne = X >= 0 ? Ce[X] : void 0;
      let ge = null;
      if (H.key === "ArrowDown") {
        if (H.preventDefault(), X === -1)
          ge = Ce[0]?.key ?? null;
        else {
          const fe = (X + 1) % Ce.length, xe = Ce[fe];
          xe && (ge = xe.key);
        }
        ge && le(ge);
        return;
      }
      if (H.key === "ArrowUp") {
        if (H.preventDefault(), X === -1) {
          const fe = Ce[Ce.length - 1];
          fe && (ge = fe.key);
        } else {
          const fe = (X - 1 + Ce.length) % Ce.length, xe = Ce[fe];
          xe && (ge = xe.key);
        }
        ge && le(ge);
        return;
      }
      if (H.key === "ArrowRight") {
        if (H.preventDefault(), !ne) return;
        if (ne.hasChildren && !ne.expanded)
          ze(ne.item);
        else if (ne.hasChildren && ne.expanded) {
          const fe = X + 1, xe = Ce[fe];
          xe && xe.parentKey === ne.key && le(xe.key);
        }
        return;
      }
      if (H.key === "ArrowLeft") {
        if (H.preventDefault(), !ne) return;
        if (ne.hasChildren && ne.expanded)
          ze(ne.item);
        else {
          const fe = Ie(ne.key);
          fe && le(fe);
        }
        return;
      }
      if (H.key === "Home") {
        H.preventDefault();
        const fe = Ce[0];
        fe && le(fe.key);
        return;
      }
      if (H.key === "End") {
        H.preventDefault();
        const fe = Ce[Ce.length - 1];
        fe && le(fe.key);
        return;
      }
      if (H.key === "Enter" || H.key === " ") {
        if (H.key === " " && H.target?.tagName === "INPUT" || (H.preventDefault(), !ne)) return;
        if (H.key === " " && S) {
          const fe = he(ne.key);
          fe && ut(fe);
          return;
        }
        ye(ne.item);
        return;
      }
      if (H.key.length === 1 && /^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const fe = (yt.current + H.key).toLowerCase();
        yt.current = fe, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          yt.current = "";
        }, 500);
        const xe = X >= 0 ? X + 1 : 0, Ve = [...Ce, ...Ce].slice(xe, xe + Ce.length).find((Qe) => Qe.text.toLowerCase().startsWith(fe));
        Ve && le(Ve.key);
        return;
      }
    },
    [
      Ce,
      Ae,
      le,
      ze,
      ye,
      Ie,
      S,
      ut
    ]
  ), Ft = R(() => {
    if (!Ae && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    }
  }, [Ae, Ce]), st = (H, X, ne) => /* @__PURE__ */ o("ul", { role: "group", className: at.group, children: H.map((ge, fe) => {
    const xe = se(ge), Me = ue(ge), Ee = ve.get(xe) ?? oe(ge);
    let Ve;
    ve.has(xe) ? Ve = ve.get(xe).length > 0 : Ee !== void 0 ? Ve = Ee.length > 0 : q ? Ve = !0 : Ve = !1;
    const Qe = Oe.has(xe), ft = Z.has(xe), et = !!ge.disabled, Ge = we.has(xe), Ht = Ae === xe, Tt = H.length, ln = fe + 1, Rn = ie ? ie(ge) : Me, Bn = S ? {
      checked: dt(xe),
      indeterminate: Et(xe)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: at.itemWrapper, children: [
      /* @__PURE__ */ M(
        "div",
        {
          role: "treeitem",
          "data-key": xe,
          tabIndex: Ht ? 0 : -1,
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
            Ht ? at.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            le(xe), et || ye(ge);
          },
          onFocus: () => Mt(xe),
          children: [
            S ? /* @__PURE__ */ o(
              ev,
              {
                className: at.checkbox,
                checked: Bn?.checked ?? !1,
                indeterminate: Bn?.indeterminate ?? !1,
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
                  mn.stopPropagation(), le(xe), ze(ge);
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
            /* @__PURE__ */ o("span", { className: at.label, children: Rn }),
            Ge ? /* @__PURE__ */ o("span", { className: at.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      Ve && Qe ? Ge ? /* @__PURE__ */ o("div", { className: at.loadingRow, "aria-busy": "true", children: "Loading…" }) : Ee && Ee.length > 0 ? st(Ee, X + 1) : ve.has(xe) && ve.get(xe).length > 0 ? st(
        ve.get(xe),
        X + 1
      ) : (Ee && Ee.length === 0, null) : null
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
      onFocus: Ft,
      children: V.length === 0 ? /* @__PURE__ */ o("div", { className: at.empty, children: "No items" }) : st(V, 1)
    }
  );
}
const tv = "_root_10fdq_1", nv = "_panel_10fdq_8", sv = "_header_10fdq_19", rv = "_listbox_10fdq_28", ov = "_option_10fdq_42", lv = "_disabled_10fdq_57", av = "_active_10fdq_66", iv = "_selected_10fdq_70", cv = "_empty_10fdq_86", dv = "_controls_10fdq_93", uv = "_reorder_10fdq_102", fv = "_btn_10fdq_110", je = {
  root: tv,
  panel: nv,
  header: sv,
  listbox: rv,
  option: ov,
  disabled: lv,
  active: av,
  selected: iv,
  empty: cv,
  controls: dv,
  reorder: uv,
  btn: fv
};
function it(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function hs(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function aw({
  source: e,
  Source: t,
  target: n,
  Target: s,
  value: l,
  Value: i,
  targetValue: d,
  TargetValue: r,
  data: a,
  Data: c,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: k,
  TargetChange: v,
  keyProperty: b,
  KeyProperty: p,
  onMove: g,
  Move: h,
  ariaLabel: _,
  AriaLabel: m,
  className: w
}) {
  const y = b ?? p ?? "id", N = _ ?? m ?? "PickList", $ = e ?? t ?? l ?? i ?? a ?? c ?? [], C = n ?? s ?? d ?? r ?? [], [z, D] = W(() => [
    ...$
  ]), [E, O] = W(() => [
    ...C
  ]);
  _e(() => {
    const I = e ?? t ?? l ?? i ?? a ?? c;
    I !== void 0 && D([...I]);
  }, [e, t, l, i, a, c]), _e(() => {
    const I = n ?? s ?? d ?? r;
    I !== void 0 && O([...I]);
  }, [n, s, d, r]);
  const [x, S] = W(
    () => /* @__PURE__ */ new Set()
  ), [T, A] = W(
    () => /* @__PURE__ */ new Set()
  ), [j, F] = W(() => {
    const I = $.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), [L, V] = W(() => {
    const I = C.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), ee = be(
    () => z.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [z]
  ), Y = be(
    () => E.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [E]
  );
  _e(() => {
    if (j >= z.length) {
      const I = ee[ee.length - 1];
      F(I ?? 0);
    } else if (z.length > 0 && ee.length > 0 && !ee.includes(j)) {
      const I = ee[0];
      I !== void 0 && F(I);
    }
  }, [j, z.length, ee]), _e(() => {
    if (L >= E.length) {
      const I = Y[Y.length - 1];
      V(I ?? 0);
    } else if (E.length > 0 && Y.length > 0 && !Y.includes(L)) {
      const I = Y[0];
      I !== void 0 && V(I);
    }
  }, [L, E.length, Y]), _e(() => {
    S((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const Z of I)
        z.some(
          (te) => it(te, y) === Z && !te.disabled
        ) && U.add(Z);
      return U;
    });
  }, [z, y]), _e(() => {
    A((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const Z of I)
        E.some(
          (te) => it(te, y) === Z && !te.disabled
        ) && U.add(Z);
      return U;
    });
  }, [E, y]);
  const me = R(
    (I) => {
      (f ?? u)?.(I);
    },
    [f, u]
  ), de = R(
    (I) => {
      (k ?? v)?.(I);
    },
    [k, v]
  ), re = R(
    (I) => {
      (g ?? h)?.(I);
    },
    [g, h]
  ), q = R(
    (I) => {
      const U = z[I];
      if (!U || U.disabled) return;
      const Z = it(U, y);
      S((he) => {
        const te = new Set(he);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), F(I);
    },
    [z, y]
  ), ie = R(
    (I) => {
      const U = E[I];
      if (!U || U.disabled) return;
      const Z = it(U, y);
      A((he) => {
        const te = new Set(he);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), V(I);
    },
    [E, y]
  ), se = R(() => {
    const I = [], U = [];
    for (const ye of z) {
      const ze = it(ye, y);
      x.has(ze) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const Z = U, he = [...E, ...I];
    D(Z), O(he), S(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, y)));
    A(te), me(Z), de(he), re({
      source: Z,
      target: he,
      moved: I,
      direction: "toTarget"
    });
  }, [
    z,
    E,
    x,
    y,
    me,
    de,
    re
  ]), ue = R(() => {
    const I = [], U = [];
    for (const ye of E) {
      const ze = it(ye, y);
      T.has(ze) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const Z = U, he = [...z, ...I];
    O(Z), D(he), A(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, y)));
    S(te), me(he), de(Z), re({
      source: he,
      target: Z,
      moved: I,
      direction: "toSource"
    });
  }, [
    z,
    E,
    T,
    y,
    me,
    de,
    re
  ]), oe = R(() => {
    const I = z.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = z.filter((he) => !!he.disabled), Z = [...E, ...I];
    D(U), O(Z), S(/* @__PURE__ */ new Set()), me(U), de(Z), re({
      source: U,
      target: Z,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    z,
    E,
    y,
    me,
    de,
    re
  ]), $e = R(() => {
    const I = E.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = E.filter((he) => !!he.disabled), Z = [...z, ...I];
    O(U), D(Z), A(/* @__PURE__ */ new Set()), me(Z), de(U), re({
      source: Z,
      target: U,
      moved: I,
      direction: "allToSource"
    });
  }, [z, E, me, de, re]), Oe = R(() => {
    if (T.size === 0) return;
    const I = [...E], U = T, Z = [];
    for (let te = 1; te < I.length; te++) {
      const ye = I[te], ze = I[te - 1];
      if (!ye || !ze) continue;
      const Fe = it(ye, y), He = it(ze, y);
      U.has(Fe) && !U.has(He) && !ye.disabled && !ze.disabled && (I[te - 1] = ye, I[te] = ze, Z.push(ye));
    }
    if (Z.length === 0) return;
    O(I), de(I), re({ source: z, target: I, moved: Z, direction: "up" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, y) === he
      );
      te >= 0 && V(te);
    }
  }, [
    E,
    T,
    y,
    z,
    de,
    re
  ]), Ye = R(() => {
    if (T.size === 0) return;
    const I = [...E], U = T, Z = [];
    for (let te = I.length - 2; te >= 0; te--) {
      const ye = I[te], ze = I[te + 1];
      if (!ye || !ze) continue;
      const Fe = it(ye, y), He = it(ze, y);
      U.has(Fe) && !U.has(He) && !ye.disabled && !ze.disabled && (I[te] = ze, I[te + 1] = ye, Z.push(ye));
    }
    if (Z.length === 0) return;
    O(I), de(I), re({ source: z, target: I, moved: Z, direction: "down" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, y) === he
      );
      te >= 0 && V(te);
    }
  }, [
    E,
    T,
    y,
    z,
    de,
    re
  ]), ve = x.size > 0, Be = T.size > 0, we = Q(""), ot = Q(
    null
  ), tt = Q(""), Ze = Q(
    null
  ), Nt = R(
    (I) => {
      if (z.length === 0) return;
      const U = ee;
      if (U.length === 0) return;
      const Z = U.includes(j) ? j : U[0] ?? 0;
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
        const ye = [...U, ...U], ze = U.indexOf(Z) + 1, Fe = ye.slice(ze).find(
          (He) => hs(z[He]).toLowerCase().startsWith(te)
        );
        Fe != null && F(Fe);
        return;
      }
      he >= 0 && F(he);
    },
    [z, ee, j, q]
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
        const te = (tt.current + I.key).toLowerCase();
        tt.current = te, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          tt.current = "";
        }, 500);
        const ye = [...U, ...U], ze = U.indexOf(Z) + 1, Fe = ye.slice(ze).find(
          (He) => hs(E[He]).toLowerCase().startsWith(te)
        );
        Fe != null && V(Fe);
        return;
      }
      he >= 0 && V(he);
    },
    [E, Y, L, ie]
  ), lt = Q(null), G = Q(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [je.root, w].filter(Boolean).join(" "),
      "aria-label": N,
      children: [
        /* @__PURE__ */ M("div", { className: je.panel, children: [
          /* @__PURE__ */ o("div", { className: je.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: lt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: je.listbox,
              onKeyDown: Nt,
              children: z.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: je.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : z.map((I, U) => {
                const Z = it(I, y), he = x.has(Z), te = U === j, ye = !!I.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": he,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": te || void 0,
                    className: [
                      je.option,
                      he ? je.selected : null,
                      te ? je.active : null,
                      ye ? je.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => q(U),
                    children: hs(I)
                  },
                  Z
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: je.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: je.btn,
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
              className: je.btn,
              "aria-label": "Move all to target",
              "aria-disabled": z.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: z.filter((I) => !I.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: je.btn,
              "aria-label": "Move all",
              "aria-disabled": z.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: z.filter((I) => !I.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: je.btn,
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
              className: je.btn,
              "aria-label": "Move all to source",
              "aria-disabled": E.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: E.filter((I) => !I.disabled).length === 0,
              onClick: $e,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: je.panel, children: [
          /* @__PURE__ */ o("div", { className: je.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: G,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: je.listbox,
              onKeyDown: bt,
              children: E.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: je.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : E.map((I, U) => {
                const Z = it(I, y), he = T.has(Z), te = U === L, ye = !!I.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": he,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": te || void 0,
                    className: [
                      je.option,
                      he ? je.selected : null,
                      te ? je.active : null,
                      ye ? je.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(U),
                    children: hs(I)
                  },
                  Z
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: je.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: je.btn,
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
                className: je.btn,
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
const _v = "_root_1qxsp_1", hv = "_header_1qxsp_8", pv = "_title_1qxsp_15", mv = "_navBtn_1qxsp_20", gv = "_resources_1qxsp_39", bv = "_resource_1qxsp_39", yv = "_grid_1qxsp_50", xv = "_timeCol_1qxsp_55", vv = "_timeCell_1qxsp_61", kv = "_dayCol_1qxsp_66", wv = "_dayHeader_1qxsp_73", $v = "_slot_1qxsp_81", Nv = "_event_1qxsp_91", wt = {
  root: _v,
  header: hv,
  title: pv,
  navBtn: mv,
  resources: gv,
  resource: bv,
  grid: yv,
  timeCol: xv,
  timeCell: vv,
  dayCol: kv,
  dayHeader: wv,
  slot: $v,
  event: Nv
};
function yr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function iw({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: s,
  resources: l,
  onEventClick: i,
  onSlotClick: d,
  ariaLabel: r = "Scheduler",
  className: a
}) {
  const [c, f] = W(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, k = (p) => {
    n || f(p), s?.(p);
  }, v = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (p, g) => {
    const h = new Date(u);
    return h.setDate(u.getDate() - u.getDay() + g), h;
  }) : Array.from({ length: 30 }, (p, g) => {
    const h = new Date(u);
    return h.setDate(1 + g), h;
  }), b = Array.from({ length: 12 }, (p, g) => 8 + g);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [wt.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ M("div", { className: wt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: wt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(u);
                p.setDate(p.getDate() - 7), k(p);
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
        /* @__PURE__ */ M("div", { className: wt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: wt.timeCol, role: "presentation", children: b.map((p) => /* @__PURE__ */ M("div", { className: wt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          v.map((p) => /* @__PURE__ */ M(
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
                b.map((g) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: wt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(p);
                      h.setHours(g), d?.({ date: h });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === p.toDateString()).map((g) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: wt.event,
                    "aria-label": `${g.title} ${yr(g.start)} - ${yr(g.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: g }),
                    children: g.title
                  },
                  g.id
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
const Ov = "_root_dj5ne_1", Sv = "_header_dj5ne_8", Cv = "_headerCell_dj5ne_15", Dv = "_timeline_dj5ne_21", zv = "_row_dj5ne_26", Ev = "_taskName_dj5ne_32", Mv = "_timelineCell_dj5ne_37", Iv = "_bar_dj5ne_43", jv = "_progress_dj5ne_56", Av = "_dep_dj5ne_61", Xt = {
  root: Ov,
  header: Sv,
  headerCell: Cv,
  timeline: Dv,
  row: zv,
  taskName: Ev,
  timelineCell: Mv,
  bar: Iv,
  progress: jv,
  dep: Av
};
function cw({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: s = "Gantt",
  className: l
}) {
  const [i, d] = W(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Xt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": s,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: Xt.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Xt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: Xt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ M(
          "div",
          {
            className: Xt.row,
            role: "row",
            "aria-selected": i === r.id,
            children: [
              /* @__PURE__ */ o("div", { className: Xt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ M("div", { className: Xt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Xt.bar,
                    role: "button",
                    "aria-label": `${r.name} ${r.start.toLocaleDateString()} - ${r.end.toLocaleDateString()}${r.progress !== void 0 ? `, ${r.progress}% complete` : ""}`,
                    "aria-pressed": i === r.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(r.id), n?.({ task: r });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(r.id), n?.({ task: r }));
                    },
                    children: /* @__PURE__ */ o(
                      "div",
                      {
                        className: Xt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((a) => /* @__PURE__ */ o("svg", { className: Xt.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
const Tv = "_root_4b64f_1", Pv = "_fields_4b64f_6", Lv = "_chip_4b64f_13", Rv = "_table_4b64f_35", Bv = "_totalRow_4b64f_55", Fv = "_total_4b64f_55", Tn = {
  root: Tv,
  fields: Pv,
  chip: Lv,
  table: Rv,
  totalRow: Bv,
  total: Fv
}, ps = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function es(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function dw({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: s = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const r = t, a = n, c = s, f = (g, h, _) => {
    const m = g === "row" ? r.filter((N) => N.property !== h) : r, w = g === "col" ? a.filter((N) => N.property !== h) : a, y = g === "agg" ? c.filter((N) => !(N.property === h && N.aggregate === _)) : c;
    l?.({
      rowFields: m,
      columnFields: w,
      aggregateFields: y
    });
  }, u = (g, h) => h.map((_) => String(g[_.property])).join(""), k = [
    ...new Set(r.length ? e.map((g) => u(g, r)) : [""])
  ].sort(), v = [
    ...new Set(a.length ? e.map((g) => u(g, a)) : [""])
  ].sort(), b = (g, h, _) => {
    const m = e.filter(
      (y) => u(y, r) === g && u(y, a) === h
    ), w = m.map((y) => Number(y[_.property])).filter((y) => !Number.isNaN(y));
    return !w.length && _.aggregate !== "Count" ? 0 : ps[_.aggregate](
      _.aggregate === "Count" ? m.map(() => 1) : w
    );
  }, p = (g, h, _, m) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: Tn.chip,
      "aria-label": `Remove ${g} field ${_}`,
      onClick: () => f(g, h, m),
      children: [
        _,
        m ? ` (${m})` : ""
      ]
    },
    `${g}-${_}-${m ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [Tn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: Tn.fields, children: [
      r.map((g) => p("row", g.property, g.title ?? g.property)),
      a.map((g) => p("col", g.property, g.title ?? g.property)),
      c.map(
        (g) => p("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: Tn.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: r.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        v.map((g) => /* @__PURE__ */ o("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        k.map((g) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: g || "—" }),
          v.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: es(
                b(
                  g,
                  h,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? es(b(g, h, c[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: Tn.total, children: c.length ? es(
            ps[c[0].aggregate](
              v.flatMap(
                (h) => e.filter(
                  (_) => u(_, r) === g && u(_, a) === h
                ).map((_) => Number(_[c[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ M("tr", { className: Tn.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          v.map((g) => /* @__PURE__ */ o("td", { children: c.length ? es(
            ps[c[0].aggregate](
              e.filter((h) => u(h, a) === g).map((h) => Number(h[c[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, g)),
          /* @__PURE__ */ o("td", { children: c.length ? es(
            ps[c[0].aggregate](
              e.map((g) => Number(g[c[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Hv = "_root_1r7co_1", qv = "_reverse_1r7co_10", Kv = "_item_1r7co_14", Wv = "_marker_1r7co_35", Uv = "_body_1r7co_46", Vv = "_label_1r7co_50", Gv = "_content_1r7co_56", $n = {
  root: Hv,
  reverse: qv,
  item: Kv,
  marker: Wv,
  body: Uv,
  label: Vv,
  content: Gv
};
function uw({
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
      children: l.map((i, d) => /* @__PURE__ */ M("li", { className: $n.item, children: [
        /* @__PURE__ */ o("span", { className: $n.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: $n.body, children: [
          /* @__PURE__ */ o("div", { className: $n.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: $n.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const Xv = "_root_rm4d8_1", Yv = "_header_rm4d8_13", Zv = "_headCell_rm4d8_22", Jv = "_row_rm4d8_32", Qv = "_cell_rm4d8_37", ts = {
  root: Xv,
  header: Yv,
  headCell: Zv,
  row: Jv,
  cell: Qv
};
function fw({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: s,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [r, a] = W(
    /* @__PURE__ */ new Map()
  ), [c, f] = W(0), u = Q(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), v = Math.max(0, Math.floor(c / t) - 3), b = Math.min(e, v + k + 6), p = R(
    (h, _) => {
      let m = !1;
      for (let w = h; w < _; w++)
        !r.has(w) && !u.current.has(w) && (m = !0);
      if (m) {
        for (let w = h; w < _; w++) u.current.add(w);
        s({ skip: h, top: _ }).then((w) => {
          a((y) => {
            const N = new Map(y);
            return w.forEach(($, C) => N.set(h + C, $)), N;
          });
          for (let y = h; y < _; y++) u.current.delete(y);
        });
      }
    },
    [r, s]
  );
  _e(() => {
    p(v, b);
  }, [v, b]);
  const g = [];
  for (let h = v; h < b; h++) {
    const _ = r.get(h) ?? {};
    g.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: ts.row,
          role: "row",
          style: { height: t },
          children: l.map((m) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: ts.cell,
              style: m.width ? { width: m.width } : void 0,
              children: String(_[m.property] ?? "")
            },
            m.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [ts.root, d].filter(Boolean).join(" "),
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
        /* @__PURE__ */ o("div", { style: { height: v * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: ts.header, role: "row", children: l.map((h) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: ts.headCell,
            style: {
              height: t,
              ...h.width ? { width: h.width } : {}
            },
            children: h.title ?? h.property
          },
          h.property
        )) }),
        g,
        /* @__PURE__ */ o(
          "div",
          {
            style: { height: Math.max(0, (e - b) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var Bt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(r, a, c, f) {
      if (this.version = r, this.errorCorrectionLevel = a, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let u = [];
      for (let v = 0; v < this.size; v++) u.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(c);
      if (this.drawCodewords(k), f == -1) {
        let v = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const p = this.getPenaltyScore();
          p < v && (f = b, v = p), this.applyMask(b);
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
      const c = e.QrSegment.makeSegments(r);
      return t.encodeSegments(c, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(r, a) {
      const c = e.QrSegment.makeBytes(r);
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
    static encodeSegments(r, a, c = 1, f = 40, u = -1, k = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let v, b;
      for (v = c; ; v++) {
        const _ = t.getNumDataCodewords(v, a) * 8, m = i.getTotalBits(r, v);
        if (m <= _) {
          b = m;
          break;
        }
        if (v >= f)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && b <= t.getNumDataCodewords(v, _) * 8 && (a = _);
      let p = [];
      for (const _ of r) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(v), p);
        for (const m of _.getData()) p.push(m);
      }
      l(p.length == b);
      const g = t.getNumDataCodewords(v, a) * 8;
      l(p.length <= g), n(0, Math.min(4, g - p.length), p), n(0, (8 - p.length % 8) % 8, p), l(p.length % 8 == 0);
      for (let _ = 236; p.length < g; _ ^= 253)
        n(_, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (_, m) => h[m >>> 3] |= _ << 7 - (m & 7)
      ), new t(v, a, h, u);
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
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), a = r.length;
      for (let c = 0; c < a; c++)
        for (let f = 0; f < a; f++)
          c == 0 && f == 0 || c == 0 && f == a - 1 || c == a - 1 && f == 0 || this.drawAlignmentPattern(r[c], r[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const a = this.errorCorrectionLevel.formatBits << 3 | r;
      let c = a;
      for (let u = 0; u < 10; u++) c = c << 1 ^ (c >>> 9) * 1335;
      const f = (a << 10 | c) ^ 21522;
      l(f >>> 15 == 0);
      for (let u = 0; u <= 5; u++)
        this.setFunctionModule(8, u, s(f, u));
      this.setFunctionModule(8, 7, s(f, 6)), this.setFunctionModule(8, 8, s(f, 7)), this.setFunctionModule(7, 8, s(f, 8));
      for (let u = 9; u < 15; u++)
        this.setFunctionModule(14 - u, 8, s(f, u));
      for (let u = 0; u < 8; u++)
        this.setFunctionModule(this.size - 1 - u, 8, s(f, u));
      for (let u = 8; u < 15; u++)
        this.setFunctionModule(8, this.size - 15 + u, s(f, u));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let r = this.version;
      for (let c = 0; c < 12; c++) r = r << 1 ^ (r >>> 11) * 7973;
      const a = this.version << 12 | r;
      l(a >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = s(a, c), u = this.size - 11 + c % 3, k = Math.floor(c / 3);
        this.setFunctionModule(u, k, f), this.setFunctionModule(k, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, a) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), k = r + f, v = a + c;
          0 <= k && k < this.size && 0 <= v && v < this.size && this.setFunctionModule(k, v, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, a) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            r + f,
            a + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(r, a, c) {
      this.modules[a][r] = c, this.isFunction[a][r] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(r) {
      const a = this.version, c = this.errorCorrectionLevel;
      if (r.length != t.getNumDataCodewords(a, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], k = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), v = f - k % f, b = Math.floor(k / f);
      let p = [];
      const g = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, m = 0; _ < f; _++) {
        let w = r.slice(
          m,
          m + b - u + (_ < v ? 0 : 1)
        );
        m += w.length;
        const y = t.reedSolomonComputeRemainder(w, g);
        _ < v && w.push(0), p.push(w.concat(y));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((m, w) => {
          (_ != b - u || w >= v) && h.push(m[_]);
        });
      return l(h.length == k), h;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const k = c - u, b = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[b][k] && a < r.length * 8 && (this.modules[b][k] = s(r[a >>> 3], 7 - (a & 7)), a++);
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
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (r) {
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
      let r = 0;
      for (let u = 0; u < this.size; u++) {
        let k = !1, v = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[u][p] == k ? (v++, v == 5 ? r += t.PENALTY_N1 : v > 5 && r++) : (this.finderPenaltyAddHistory(v, b), k || (r += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), k = this.modules[u][p], v = 1);
        r += this.finderPenaltyTerminateAndCount(k, v, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let k = !1, v = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][u] == k ? (v++, v == 5 ? r += t.PENALTY_N1 : v > 5 && r++) : (this.finderPenaltyAddHistory(v, b), k || (r += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), k = this.modules[p][u], v = 1);
        r += this.finderPenaltyTerminateAndCount(k, v, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let k = 0; k < this.size - 1; k++) {
          const v = this.modules[u][k];
          v == this.modules[u][k + 1] && v == this.modules[u + 1][k] && v == this.modules[u + 1][k + 1] && (r += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((k, v) => k + (v ? 1 : 0), a);
      const c = this.size * this.size, f = Math.ceil(Math.abs(a * 20 - c * 10) / c) - 1;
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
        let c = [6];
        for (let f = this.size - 7; c.length < r; f -= a)
          c.splice(1, 0, f);
        return c;
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
        const c = Math.floor(r / 7) + 2;
        a -= (25 * c - 10) * c - 55, r >= 7 && (a -= 36);
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
      let c = 1;
      for (let f = 0; f < r; f++) {
        for (let u = 0; u < a.length; u++)
          a[u] = t.reedSolomonMultiply(a[u], c), u + 1 < a.length && (a[u] ^= a[u + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, a) {
      let c = a.map((f) => 0);
      for (const f of r) {
        const u = f ^ c.shift();
        c.push(0), a.forEach(
          (k, v) => c[v] ^= t.reedSolomonMultiply(k, u)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(r, a) {
      if (r >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (a >>> f & 1) * r;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(r) {
      const a = r[1];
      l(a <= this.size * 3);
      const c = a > 0 && r[2] == a && r[3] == a * 3 && r[4] == a && r[5] == a;
      return (c && r[0] >= a * 4 && r[6] >= a ? 1 : 0) + (c && r[6] >= a * 4 && r[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(r, a, c) {
      return r && (this.finderPenaltyAddHistory(a, c), a = 0), a += this.size, this.finderPenaltyAddHistory(a, c), this.finderPenaltyCountPatterns(c);
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
  function n(d, r, a) {
    if (r < 0 || r > 31 || d >>> r)
      throw new RangeError("Value out of range");
    for (let c = r - 1; c >= 0; c--)
      a.push(d >>> c & 1);
  }
  function s(d, r) {
    return (d >>> r & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(r, a, c) {
      if (this.mode = r, this.numChars = a, this.bitData = c, a < 0) throw new RangeError("Invalid argument");
      this.bitData = c.slice();
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
      for (const c of r) n(c, 8, a);
      return new i(i.Mode.BYTE, r.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!i.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let c = 0; c < r.length; ) {
        const f = Math.min(r.length - c, 3);
        n(parseInt(r.substring(c, c + f), 10), f * 3 + 1, a), c += f;
      }
      return new i(i.Mode.NUMERIC, r.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(r) {
      if (!i.isAlphanumeric(r))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], c;
      for (c = 0; c + 2 <= r.length; c += 2) {
        let f = i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(c)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(c + 1)), n(f, 11, a);
      }
      return c < r.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(c)),
        6,
        a
      ), new i(i.Mode.ALPHANUMERIC, r.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(r) {
      return r == "" ? [] : i.isNumeric(r) ? [i.makeNumeric(r)] : i.isAlphanumeric(r) ? [i.makeAlphanumeric(r)] : [i.makeBytes(i.toUtf8ByteArray(r))];
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
      return new i(i.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(r) {
      return i.NUMERIC_REGEX.test(r);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(r) {
      return i.ALPHANUMERIC_REGEX.test(r);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(r, a) {
      let c = 0;
      for (const f of r) {
        const u = f.mode.numCharCountBits(a);
        if (f.numChars >= 1 << u) return 1 / 0;
        c += 4 + u + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let a = [];
      for (let c = 0; c < r.length; c++)
        r.charAt(c) != "%" ? a.push(r.charCodeAt(c)) : (a.push(parseInt(r.substring(c + 1, c + 3), 16)), c += 2);
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
})(Bt || (Bt = {}));
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
})(Bt || (Bt = {}));
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
})(Bt || (Bt = {}));
const e2 = "_root_1leml_1", t2 = {
  root: e2
}, n2 = {
  low: Bt.QrCode.Ecc.LOW,
  medium: Bt.QrCode.Ecc.MEDIUM,
  quartile: Bt.QrCode.Ecc.QUARTILE,
  high: Bt.QrCode.Ecc.HIGH
};
function _w({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: s = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: r
}) {
  const a = i ?? `QR code for ${e}`, c = Q(null), f = Ir("(prefers-color-scheme: dark)"), [u, k] = W(null);
  _e(() => {
    const w = document.documentElement;
    k(w.dataset.theme ?? null);
    const y = new MutationObserver(() => {
      k(w.dataset.theme ?? null);
    });
    return y.observe(w, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => y.disconnect();
  }, []);
  const v = be(() => {
    try {
      return Bt.QrCode.encodeText(e, n2[s]);
    } catch {
      return null;
    }
  }, [e, s]), b = Q(null);
  _e(() => {
    if (v !== null) {
      b.current = null;
      return;
    }
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), (b.current?.value !== e || b.current?.onError !== r) && (b.current = { value: e, onError: r }, r?.(w));
  }, [v, e, r]);
  const p = Math.max(0, Math.floor(l)), g = [t2.root, d].filter(Boolean).join(" ");
  if (_e(() => {
    if (n !== "canvas" || v === null) return;
    const w = c.current, y = w?.getContext("2d");
    if (!w || !y) return;
    const N = getComputedStyle(w), $ = N.getPropertyValue("--dx-text-color").trim() || "#000", C = N.getPropertyValue("--dx-surface-color").trim() || "#fff";
    s2(y, v, t, p, $, C);
  }, [n, v, t, p, f, u]), v === null)
    return /* @__PURE__ */ o("div", { className: g, role: "img", "aria-label": a, "data-qr-error": "true" });
  const h = v.size + p * 2, _ = t / h;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: c,
        className: g,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const m = [];
  for (let w = 0; w < v.size; w++)
    for (let y = 0; y < v.size; y++)
      v.getModule(y, w) && m.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (y + p) * _,
            y: (w + p) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${y}-${w}`
        )
      );
  return /* @__PURE__ */ M(
    "svg",
    {
      className: g,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: m })
      ]
    }
  );
}
function s2(e, t, n, s, l, i) {
  const d = n / (t.size + s * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let r = 0; r < t.size; r++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, r) && e.fillRect((a + s) * d, (r + s) * d, d + 0.5, d + 0.5);
}
const r2 = "_root_1v9la_1", o2 = "_value_1v9la_9", xr = {
  root: r2,
  value: o2
}, vr = [
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
], kr = 104, l2 = 106;
function a2(e) {
  const t = [kr];
  for (let s = 0; s < e.length; s++) {
    const l = e.charCodeAt(s);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = kr;
  for (let s = 1; s < t.length; s++) n += s * t[s];
  return t.push(n % 103, l2), t;
}
function hw({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: s = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, r = be(() => {
    const a = [];
    let c = 0;
    for (const f of a2(e)) {
      const u = vr[f] ?? vr[0];
      for (let k = 0; k < u.length; k++) {
        const v = Number(u[k]);
        k % 2 === 0 && a.push({ x: c, w: v }), c += v;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [xr.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${r.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
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
          r.modules.map((a, c) => /* @__PURE__ */ o(
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
    s && /* @__PURE__ */ o("span", { className: xr.value, children: e })
  ] });
}
const i2 = "_root_16i43_1", c2 = "_svg_16i43_10", d2 = "_gridline_16i43_15", u2 = "_tickLabel_16i43_21", f2 = "_axisTitle_16i43_27", _2 = "_dataLabel_16i43_34", h2 = "_gaugeValue_16i43_40", p2 = "_legend_16i43_47", m2 = "_legendItem_16i43_55", g2 = "_swatch_16i43_63", b2 = "_tooltip_16i43_70", y2 = "_visuallyHidden_16i43_84", We = {
  root: i2,
  svg: c2,
  gridline: d2,
  tickLabel: u2,
  axisTitle: f2,
  dataLabel: _2,
  gaugeValue: h2,
  legend: p2,
  legendItem: m2,
  swatch: g2,
  tooltip: b2,
  visuallyHidden: y2
}, wr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Br = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), x2 = /* @__PURE__ */ new Set([...Br, "heatmap"]);
function v2(e, t, n) {
  const s = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(s / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, r = [];
  for (let a = i; a <= d + 1e-9; a += l)
    r.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: r };
}
function k2(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
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
const mt = (e) => e * Math.PI / 180;
function w2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r } = e, a = i.l + d / 2, c = i.t + r / 2, f = Math.min(d, r) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, k = s.reduce((b, p) => b + (Number(p.val) || 0), 0);
  let v = -90;
  return pn(
    n,
    t,
    s.map((b, p) => {
      const g = k ? b.val / k * 360 : 0, h = v, _ = v + g;
      v = _;
      const m = g > 180 ? 1 : 0, w = a + f * Math.cos(mt(h)), y = c + f * Math.sin(mt(h)), N = a + f * Math.cos(mt(_)), $ = c + f * Math.sin(mt(_)), C = a + u * Math.cos(mt(_)), z = c + u * Math.sin(mt(_)), D = a + u * Math.cos(mt(h)), E = c + u * Math.sin(mt(h)), O = u ? `M ${w} ${y} A ${f} ${f} 0 ${m} 1 ${N} ${$} L ${C} ${z} A ${u} ${u} 0 ${m} 0 ${D} ${E} Z` : `M ${a} ${c} L ${w} ${y} A ${f} ${f} 0 ${m} 1 ${N} ${$} Z`, x = (h + _) / 2, S = a + (f + 12) * Math.cos(mt(x)), T = c + (f + 12) * Math.sin(mt(x));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: O,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(S, T, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: S,
            y: T,
            textAnchor: "middle",
            className: We.dataLabel,
            children: b.val
          }
        )
      ] }, p);
    })
  );
}
function $2(e, t, n, s, l) {
  const { pad: i, plotW: d, scale: r, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((k, v) => [k, v]));
  return pn(
    n,
    t,
    s.map((k, v) => {
      const b = u.get(k.cat) ?? 0, p = Number(s[v].cat), g = Number.isNaN(p) ? a(b) : i.l + (p - r.min) / (r.max - r.min || 1) * d, h = c(k.val), _ = t.type === "bubble" && k.size !== void 0 ? Math.max(4, Math.min(12, k.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            cx: g,
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
            cx: g,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(g, h, `${t.title ?? k.cat}: ${k.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, k.cat, k.val, k.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, v);
    })
  );
}
function N2(e, t, n, s, l) {
  const { scale: i, xFor: d, yFor: r, categories: a, series: c } = e, f = new Map(a.map((b, p) => [b, p])), u = (b) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let g = 0; g < n; g++) {
      const h = c[g];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (m) => String(m[h.categoryProperty] ?? "") === b
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, k = s.map((b) => {
    const p = f.get(b.cat) ?? 0, g = u(b.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${r(g + b.val)}`;
  }).join(" "), v = s.map((b) => {
    const p = f.get(b.cat) ?? 0, g = u(b.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${r(g)}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(rt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${k} L ${d(s.length - 1)} ${r(u(s[s.length - 1].cat))} L ${d(0)} ${r(u(s[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: k, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: v, fill: "none", stroke: "transparent" }),
      s.map((b, p) => {
        const g = f.get(b.cat) ?? 0, h = u(b.cat), _ = d(g), m = r(h + b.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: _,
              cy: m,
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
              y: m - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(_, m, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: _,
              y: m - 8,
              textAnchor: "middle",
              className: We.dataLabel,
              children: b.val
            }
          )
        ] }, p);
      })
    ] })
  );
}
function O2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, scale: a, xFor: c, yFor: f, categories: u, series: k } = e, v = new Map(u.map((p, g) => [p, g])), b = t.type === "bar";
  return pn(
    n,
    t,
    s.map((p, g) => {
      const h = v.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let x = 0; x < n; x++) {
          const S = k[x];
          if (S?.stack !== t.stack) continue;
          const T = S.data.find(
            (A) => String(A[S.categoryProperty] ?? "") === p.cat
          );
          T && (_ += Number(T[S.valueProperty]) || 0);
        }
      const m = _ + p.val, w = k.filter(
        (x) => !x.stack || x.stack === t.stack
      ).length, y = d / Math.max(1, u.length), N = b ? 18 : Math.max(12, y / (t.stack ? 1 : k.length) - 4), $ = b ? i.l + _ / (a.max - a.min || 1) * d : c(h) - N / 2 + (t.stack ? 0 : n % w * N), C = b ? i.t + h * r / Math.max(1, u.length) + 4 : f(m), z = b ? p.val / (a.max - a.min || 1) * d : N - 4, D = b ? 16 : f(_) - f(m), E = b ? i.l + _ / (a.max - a.min || 1) * d : $, O = b ? i.t + h * r / Math.max(1, u.length) + 4 : C;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: E,
            y: O,
            width: b ? z : N - 4,
            height: D,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              E + (b ? z : N) / 2,
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
            x: E + (b ? z : N) / 2,
            y: O - 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: p.val
          }
        )
      ] }, g);
    })
  );
}
function S2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, k = i.l + d / 2, v = i.t + r * 0.78, b = Math.min(d, r) * 0.36, p = 135, g = 270, h = s.reduce((N, $) => N + (Number($.val) || 0), 0), _ = a.max - a.min || 1, m = Math.min(1, Math.max(0, (h - a.min) / _)), w = (N, $) => {
    const [C, z] = [
      k + b * Math.cos(mt(N)),
      v + b * Math.sin(mt(N))
    ], [D, E] = [
      k + b * Math.cos(mt($)),
      v + b * Math.sin(mt($))
    ], O = $ - N > 180 ? 1 : 0;
    return `M ${C} ${z} A ${b} ${b} 0 ${O} 1 ${D} ${E}`;
  }, y = Number(h.toFixed(2));
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
          d: w(p, p + g),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      m > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: w(p, p + g * m),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: k, y: v - 4, textAnchor: "middle", className: We.gaugeValue, children: y }),
      /* @__PURE__ */ o(
        "path",
        {
          d: w(p, p + g),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(k, v - b, `${t.title ?? "Value"}: ${y}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, s[0]?.cat ?? "", h, s[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: k,
          y: v + b + 18,
          textAnchor: "middle",
          className: We.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Fr(e) {
  const { pad: t, plotW: n, plotH: s, categories: l } = e, i = t.l + n / 2, d = t.t + s / 2, r = Math.min(n, s) / 2 - 24, a = Math.max(3, l.length), c = (u) => mt(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: r, angleFor: c, vertexFor: (u, k) => {
    const v = c(u);
    return [
      i + r * k * Math.cos(v),
      d + r * k * Math.sin(v)
    ];
  } };
}
function C2(e) {
  const { categories: t } = e, { cx: n, cy: s, vertexFor: l } = Fr(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((r, a) => l(a, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, r) => {
      const [a, c] = l(r, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: s,
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
function D2(e, t, n, s, l) {
  const { categories: i, tooltipVisible: d, showTip: r, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: k, vertexFor: v } = Fr(e), b = e.scale.max || 1, p = (h) => s.find((_) => _.cat === h)?.val ?? 0, g = i.map((h, _) => {
    const m = Math.min(1, Math.max(0, p(h) / b)), [w, y] = v(_, m);
    return `${w},${y}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(rt, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: g,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((h, _) => {
        const m = Math.min(1, Math.max(0, p(h) / b)), [w, y] = v(_, m), [N, $] = v(_, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: w,
              cy: y,
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
              cy: y,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && r(N, $, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const C = s.find((z) => z.cat === h);
                C && e.handleClick(t, C.cat, C.val, C.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: c + (u + 14) * Math.cos(k(_)),
              y: f + (u + 14) * Math.sin(k(_)) + 4,
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
function z2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, tooltipVisible: a, showTip: c, hideTip: f } = e, u = s, k = Math.max(1, ...u.map((p) => Number(p.val) || 0)), v = r / Math.max(1, u.length), b = i.l + d / 2;
  return pn(
    n,
    t,
    u.map((p, g) => {
      const _ = Math.max(0, Number(p.val) || 0) / k * d, m = u[g + 1], w = m ? Math.max(0, Number(m.val) || 0) / k * d : _ * 0.7, y = i.t + g * v + 2, N = Math.max(4, v - 6), $ = 1 - g * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - _ / 2} ${y} L ${b + _ / 2} ${y} L ${b + w / 2} ${y + N} L ${b - w / 2} ${y + N} Z`,
            fill: l,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(b, y, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: b,
            y: y + N / 2 + 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, g);
    })
  );
}
function E2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, k = [];
  t.data.forEach((m) => {
    const w = t.rowProperty ? String(m[t.rowProperty] ?? "") : "All";
    k.includes(w) || k.push(w);
  });
  const v = s.map((m) => m.val).filter((m) => Number.isFinite(m)), b = v.length ? Math.min(...v) : 0, p = v.length ? Math.max(...v) : 1, g = d / Math.max(1, a.length), h = r / Math.max(1, k.length), _ = (m) => p === b ? 0.6 : 0.15 + 0.85 * ((m - b) / (p - b));
  return pn(
    n,
    t,
    /* @__PURE__ */ M(rt, { children: [
      k.map((m, w) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + w * h + h / 2 + 4,
          textAnchor: "end",
          className: We.tickLabel,
          children: m
        },
        m
      )),
      s.map((m, w) => {
        const y = t.data[w], N = a.indexOf(m.cat), $ = k.indexOf(
          t.rowProperty && y ? String(y[t.rowProperty] ?? "") : "All"
        );
        if (N < 0 || $ < 0) return null;
        const C = i.l + N * g, z = i.t + $ * h;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: C + 1,
              y: z + 1,
              width: Math.max(1, g - 2),
              height: Math.max(1, h - 2),
              fill: l,
              fillOpacity: _(m.val),
              onMouseEnter: () => c && f(C + g / 2, z, `${t.title ?? m.cat}: ${m.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, m.cat, m.val, m.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: C + g / 2,
              y: z + h / 2 + 4,
              textAnchor: "middle",
              className: We.dataLabel,
              children: m.val
            }
          )
        ] }, w);
      })
    ] })
  );
}
function M2(e, t, n) {
  const s = k2(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return w2(e, t, n, s, l);
    case "scatter":
    case "bubble":
      return $2(e, t, n, s, l);
    case "line":
    case "area":
      return N2(e, t, n, s, l);
    case "gauge":
      return S2(e, t, n, s, l);
    case "radar":
      return D2(e, t, n, s, l);
    case "funnel":
      return z2(e, t, n, s, l);
    case "heatmap":
      return E2(e, t, n, s, l);
    default:
      return O2(e, t, n, s, l);
  }
}
function pw({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: s,
  categoryAxis: l,
  showLegend: i = !0,
  tooltipVisible: d = !0,
  onSeriesClick: r,
  ariaLabel: a = "Chart",
  className: c
}) {
  const [f, u] = W(
    null
  ), k = be(() => {
    const D = /* @__PURE__ */ new Set();
    for (const E of e)
      for (const O of E.data) D.add(String(O[E.categoryProperty] ?? ""));
    return [...D];
  }, [e]), v = be(() => {
    const D = e.flatMap((O) => O.data.map((x) => Number(x[O.valueProperty]))).filter((O) => !Number.isNaN(O)), E = /* @__PURE__ */ new Map();
    for (const O of e) {
      if (!O.stack) continue;
      let x = E.get(O.stack);
      x || E.set(O.stack, x = /* @__PURE__ */ new Map());
      for (const S of O.data) {
        const T = String(S[O.categoryProperty] ?? ""), A = Number(S[O.valueProperty]);
        Number.isNaN(A) || x.set(T, (x.get(T) ?? 0) + A);
      }
    }
    for (const O of E.values()) D.push(...O.values());
    return D;
  }, [e]), b = s?.min ?? (v.length ? Math.min(0, ...v) : 0), p = s?.max ?? (v.length ? Math.max(...v) : 10), g = be(
    () => v2(b, p, s?.step),
    [b, p, s?.step]
  ), h = { t: 16, r: 16, b: 40, l: 56 }, _ = t - h.l - h.r, m = n - h.t - h.b, w = (D) => h.l + D / Math.max(1, k.length - 1) * _, y = (D) => h.t + (1 - (D - g.min) / (g.max - g.min || 1)) * m, N = (D, E) => E.color ?? wr[D % wr.length], $ = e.some((D) => Br.has(D.type)), C = e.some((D) => x2.has(D.type)), z = {
    categories: k,
    scale: g,
    pad: h,
    plotW: _,
    plotH: m,
    xFor: w,
    yFor: y,
    colorFor: N,
    tooltipVisible: d,
    showTip: (D, E, O) => u({ x: D, y: E, text: O }),
    hideTip: () => u(null),
    handleClick: (D, E, O, x) => r?.({
      seriesTitle: D.title ?? "",
      category: E,
      value: O,
      item: x
    }),
    series: e
  };
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [We.root, c].filter(Boolean).join(" "),
      role: "img",
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: We.svg,
            role: "presentation",
            children: [
              $ && s?.gridlines !== !1 && g.ticks.map((D) => /* @__PURE__ */ o(
                "line",
                {
                  x1: h.l,
                  x2: h.l + _,
                  y1: y(D),
                  y2: y(D),
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
                  y2: h.t + m,
                  className: We.gridline
                },
                E
              )),
              $ && g.ticks.map((D) => /* @__PURE__ */ o(
                "text",
                {
                  x: h.l - 8,
                  y: y(D) + 4,
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
                  y: h.t + m + 16,
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
                  y: h.t + m / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${h.t + m / 2})`,
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
              e.some((D) => D.type === "radar") && C2(z),
              e.map((D, E) => M2(z, D, E))
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
        i && /* @__PURE__ */ o("div", { className: We.legend, children: e.map((D, E) => /* @__PURE__ */ M("span", { className: We.legendItem, children: [
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
        /* @__PURE__ */ M(
          "table",
          {
            className: We.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: a }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (D) => D.data.map((E, O) => /* @__PURE__ */ M("tr", { children: [
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
function mw() {
  const e = Q(null);
  return _e(() => {
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
  wd as ALERT_ICON,
  Sk as Accordion,
  _k as Alert,
  zk as AutoComplete,
  bk as AutoGrid,
  Nk as Avatar,
  T2 as Badge,
  hw as Barcode,
  xk as Body,
  ew as Breadcrumb,
  Pn as Button,
  A2 as Card,
  ow as Carousel,
  pw as Chart,
  lk as CheckBox,
  Mk as CheckBoxList,
  Rk as ColorPicker,
  mk as Column,
  Xk as ContextMenuProvider,
  Wn as DEFAULT_OPERATOR_BY_TYPE,
  R0 as DEFAULT_PALETTE,
  Km as DEFAULT_THEMES,
  tk as DataFilter,
  nk as DataGrid,
  sk as DataList,
  Bk as DatePicker,
  bc as Dialog,
  dk as DialogProvider,
  Dk as DropDown,
  Vk as DropZone,
  B2 as EmptyState,
  Or as FILTER_OPERATORS,
  Qk as FabMenu,
  F2 as Field,
  q2 as Fieldset,
  _m as Footer,
  K2 as Form,
  H2 as FormField,
  cw as Gantt,
  mm as Header,
  ke as Icon,
  ok as Input,
  rk as Label,
  yk as Layout,
  tw as Link,
  Ek as ListBox,
  Pk as Mask,
  Gb as Menu,
  Pr as MenuItem,
  Lk as Numeric,
  Ma as Pager,
  Zk as PanelMenu,
  Yk as PanelMenuItem,
  Tk as Password,
  aw as PickList,
  dw as Pivot,
  Jk as ProfileMenu,
  kk as Progress,
  _w as QRCode,
  Ik as RadioButtonList,
  Fk as Rating,
  pk as Row,
  iw as Scheduler,
  Kk as SecurityCode,
  On as Select,
  jk as SelectBar,
  Cm as Sidebar,
  vk as SidebarToggle,
  Wk as SignaturePad,
  hk as Skeleton,
  Hk as Slider,
  Ak as SplitButton,
  sw as Splitter,
  gk as Stack,
  L2 as Stat,
  nw as Steps,
  ak as Switch,
  R2 as Table,
  Ok as Tabs,
  Ic as Text,
  Ck as TextArea,
  Gi as TextBox,
  wk as ThemeSwitcher,
  $k as ThemeToggle,
  qk as TimeSpanPicker,
  uw as Timeline,
  fk as ToastProvider,
  rw as Toc,
  Zm as ToggleButton,
  ik as Tooltip,
  lw as Tree,
  Uk as Upload,
  fw as VirtualGrid,
  Ba as aggregateValue,
  Cr as applyFilters,
  Ra as applyGridState,
  Qs as collectGroupKeys,
  Nn as columnValue,
  Z2 as compare,
  Q2 as custom,
  Ta as cycleSort,
  tr as defaultOperatorForType,
  U2 as email,
  dr as formatMasked,
  bs as formatValue,
  gs as getByPath,
  Ia as groupItems,
  P2 as iconNames,
  Sr as matchesFilters,
  X2 as maxLength,
  G2 as minLength,
  La as paginate,
  V2 as pattern,
  Y2 as range,
  W2 as required,
  J2 as requiredTrue,
  $r as resolveVariant,
  Rl as runValidators,
  rs as shadeClass,
  na as sortItems,
  Pa as sortedItems,
  Fa as toCsv,
  Zl as toFilterString,
  ta as toODataFilterString,
  Gk as useContextMenu,
  ck as useDialog,
  Ll as useFormContext,
  ek as useFormField,
  mw as useLiveRegion,
  Ir as useMediaQuery,
  uk as useToast
};
