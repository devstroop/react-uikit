import { jsx as o, jsxs as M, Fragment as tt } from "react/jsx-runtime";
import { forwardRef as Le, useId as Pe, isValidElement as gt, cloneElement as Hr, useState as W, useRef as Q, useCallback as R, useMemo as be, useContext as hn, createContext as Rn, useEffect as fe, Fragment as qr, useLayoutEffect as Mr, Children as ar, useImperativeHandle as Kr } from "react";
function lr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const oo = "_button_eyvws_1", lo = "_filled_eyvws_36", ao = "_flat_eyvws_55", io = "_outlined_eyvws_58", co = "_text_eyvws_63", uo = "_loading_eyvws_506", fo = "_spinner_eyvws_509", _o = "_xs_eyvws_525", ho = "_sm_eyvws_531", po = "_md_eyvws_537", mo = "_lg_eyvws_543", go = "_xl_eyvws_549", bo = "_iconOnly_eyvws_555", yo = "_fullWidth_eyvws_585", Yt = {
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
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const Ln = Le(
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
      disabled: k,
      children: v,
      ...b
    } = t;
    if (f === !1) return null;
    const p = xo(r, l), h = p.style === "light" || p.style === "dark" ? null : lr(i), _ = [
      Yt.button,
      Yt[p.variant],
      Yt[`style-${p.style}`],
      h ? Yt[h] : null,
      Yt[d],
      s ? Yt.fullWidth : null,
      a ? Yt.iconOnly : null,
      c ? Yt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), m = /* @__PURE__ */ M(tt, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Yt.spinner }) : null,
      v
    ] }), w = t.href;
    if (w != null) {
      const { onClick: $, ...C } = b, E = k || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: w,
          className: _,
          "aria-disabled": E || void 0,
          "aria-busy": c || void 0,
          onClick: (D) => {
            if (E) {
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
), vo = "_card_4vcae_1", ko = "_elevated_4vcae_8", wo = "_filled_4vcae_13", $o = "_outlined_4vcae_18", No = "_interactive_4vcae_22", Oo = "_text_4vcae_30", So = "_header_4vcae_46", Co = "_body_4vcae_53", Do = "_footer_4vcae_63", qn = {
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
    /* @__PURE__ */ M(
      "div",
      {
        ref: c,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (u) => {
          s?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [qn.card, qn[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: qn.header, children: n }),
          /* @__PURE__ */ o("div", { className: qn.body, children: d }),
          r != null && /* @__PURE__ */ o("div", { className: qn.footer, children: r })
        ]
      }
    )
  );
});
function Is(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Eo = "_badge_1fy6d_1", zo = "_xs_1fy6d_21", Mo = "_sm_1fy6d_26", Io = "_md_1fy6d_31", Ao = "_lg_1fy6d_36", jo = "_xl_1fy6d_41", To = "_neutral_1fy6d_47", Po = "_primary_1fy6d_52", Lo = "_secondary_1fy6d_61", Ro = "_light_1fy6d_66", Bo = "_base_1fy6d_71", Fo = "_dark_1fy6d_76", Ho = "_info_1fy6d_81", qo = "_success_1fy6d_86", Ko = "_warning_1fy6d_95", Wo = "_danger_1fy6d_104", Uo = "_filled_1fy6d_111", Vo = "_outlined_1fy6d_161", Go = "_text_1fy6d_213", Kn = {
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
  shade: r,
  size: l = "md",
  className: i,
  visible: d = !0,
  children: s,
  ...a
}, c) {
  if (d === !1) return null;
  const f = t, u = Is(n, "filled"), k = lr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        Kn.badge,
        Kn[l],
        Kn[f],
        Kn[u],
        k ? Kn[k] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: s
    }
  );
}), Xo = "_icon_vn4jx_5", Yo = "_xs_vn4jx_24", Zo = "_sm_vn4jx_28", Jo = "_md_vn4jx_23", Qo = "_lg_vn4jx_36", el = "_xl_vn4jx_40", Qr = {
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
], ke = Le(function({ icon: t, size: n, color: r, className: l, style: i, ...d }, s) {
  const a = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [Qr.icon, a ? Qr[n] : null, l].filter(Boolean).join(" "),
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
}), tl = "_stat_sjin9_1", nl = "_label_sjin9_8", rl = "_row_sjin9_16", sl = "_value_sjin9_22", ol = "_delta_sjin9_28", ll = "_success_sjin9_33", al = "_danger_sjin9_37", il = "_neutral_sjin9_41", cl = "_hint_sjin9_45", bn = {
  stat: tl,
  label: nl,
  row: rl,
  value: sl,
  delta: ol,
  success: ll,
  danger: al,
  neutral: il,
  hint: cl
}, Q2 = Le(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...s }, a) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: a,
      className: [bn.stat, d].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: bn.label, children: t }),
        /* @__PURE__ */ M("div", { className: bn.row, children: [
          /* @__PURE__ */ o("div", { className: bn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [bn.delta, bn[l]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: bn.hint, children: i })
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
  empty: r,
  caption: l,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: s,
  visible: a = !0
}) {
  if (a === !1) return null;
  const c = i === "default" || i === "both" ? "" : an[i];
  return /* @__PURE__ */ M("div", { className: [an.wrap, s].filter(Boolean).join(" "), children: [
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
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: an.empty, children: r })
  ] });
}
const vl = "_emptyState_1swxw_1", kl = "_icon_1swxw_13", wl = "_title_1swxw_18", $l = "_description_1swxw_24", Nl = "_action_1swxw_30", Wn = {
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
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [Wn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Wn.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Wn.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Wn.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Wn.action, children: r })
  ] });
}
const Ol = "_field_149oz_1", Sl = "_label_149oz_8", Cl = "_required_149oz_14", Dl = "_hint_149oz_19", El = "_error_149oz_24", Un = {
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
  hint: r,
  supporting: l,
  error: i,
  children: d,
  className: s,
  visible: a = !0
}) {
  const c = r ?? l, f = Pe(), u = Pe(), k = Pe();
  if (a === !1) return null;
  const v = i != null ? u : c != null ? k : null, b = typeof d == "function" ? d({ inputId: f, hintId: k, errorId: u }) : d, p = gt(b) && typeof b.props.id == "string" ? b.props.id : void 0, g = p ?? t ?? f, h = gt(b) && (v != null || p == null && typeof b.type == "string"), _ = p != null || t != null || h, m = h && gt(b) ? Hr(b, {
    id: g,
    "aria-describedby": v != null ? [
      b.props["aria-describedby"],
      v
    ].filter((w) => typeof w == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ M("div", { className: [Un.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: Un.label,
        htmlFor: _ ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Un.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    m,
    i != null ? /* @__PURE__ */ o("div", { id: u, className: Un.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ o("div", { id: k, className: Un.hint, children: c }) : null
  ] });
}
const zl = "_formfield_6e25e_1", Ml = "_content_6e25e_8", Il = "_floating_6e25e_43", Al = "_label_6e25e_111", jl = "_start_6e25e_132", Tl = "_required_6e25e_169", Pl = "_end_6e25e_175", Ll = "_filled_6e25e_192", Rl = "_flat_6e25e_199", Bl = "_helper_6e25e_206", Fl = "_invalid_6e25e_211", Kt = {
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
function rk({
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
  const k = Pe(), v = Pe();
  if (u === !1) return null;
  const b = l ?? k, p = typeof c == "function" ? c({
    inputId: b
  }) : c, g = gt(p) ? p.type : null, h = typeof g == "string", _ = gt(p) && typeof g != "symbol", m = gt(p) ? p.props : null, w = typeof m?.id == "string" ? m.id : void 0, y = h && gt(p) ? p.type.toLowerCase() : null, N = y != null && (y === "input" ? typeof m?.type != "string" || m.type.toLowerCase() !== "hidden" : y === "button" || y === "meter" || y === "output" || y === "progress" || y === "select" || y === "textarea"), $ = _ && (r != null || s || w == null && N), C = w != null || l != null || $, E = y === "input" && typeof m?.type == "string" ? m.type.toLowerCase() : null, D = y === "textarea" || y === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), z = $ && gt(p) ? Hr(
    p,
    {
      id: w ?? b,
      ...i && D && m?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          m?.["aria-describedby"],
          v
        ].filter((x) => typeof x == "string").join(" ")
      } : {},
      ...s ? {
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
        s ? Kt.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : O,
        /* @__PURE__ */ M("div", { className: Kt.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Kt.start, children: t }),
          z,
          i ? O : null,
          n != null && /* @__PURE__ */ o("div", { className: Kt.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: v, className: Kt.helper, children: r })
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
function sk({
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
  }, $ = l || e != null || n != null || t != null, C = l ? w : !1, E = l && w && s != null, D = C ? a ?? "Expand" : c ?? "Collapse", z = C ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [yn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: yn.legend, children: l ? /* @__PURE__ */ M(tt, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: yn.toggle,
              title: D,
              "aria-label": e == null ? z : void 0,
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
                n != null && /* @__PURE__ */ o(ke, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(tt, { children: [
          n != null && /* @__PURE__ */ o(ke, { icon: n, color: r, "aria-hidden": "true" }),
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
        E ? /* @__PURE__ */ o("div", { className: yn.summary, children: s }) : null
      ]
    }
  );
}
const Gl = "_form_abp5n_1", Xl = {
  form: Gl
}, As = Rn(null);
function Yl() {
  const e = hn(As);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function ok({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: i,
  className: d
}) {
  const [s, a] = W({}), [c, f] = W(0), u = Q(s);
  u.current = s;
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
    r != null && l != null || (m.preventDefault(), p());
  }, h = be(
    () => ({ registerField: k, unregisterField: v, submit: p, submitCount: c }),
    [k, v, p, c]
  ), _ = [Xl.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(As.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: g,
      action: r,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const Sn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", lk = (e = "Required") => (t) => Sn(t) ? e : null, ak = (e = "Invalid email") => (t) => Sn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, ik = (e, t = "Invalid format") => (n) => Sn(n) || e.test(String(n)) ? null : t, ck = (e, t = `Minimum ${e} characters`) => (n) => Sn(n) || String(n).length >= e ? null : t, dk = (e, t = `Maximum ${e} characters`) => (n) => Sn(n) || String(n).length <= e ? null : t, uk = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (Sn(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, fk = (e, t = "Values do not match") => (n, r) => {
  if (Sn(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, _k = (e = "Required") => (t) => t === !0 ? null : e, hk = (e) => (t, n) => e(t, n);
function Zl(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function pk(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Yl(), [i, d] = W(t?.initialValue), [s, a] = W(!1), [c, f] = W(!1), u = Q(() => []);
  u.current = () => Zl(t?.validate ?? [], i), fe(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), fe(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const k = s && !c ? u.current() : [];
  return { value: i, setValue: (b) => {
    d(b), f(!0);
  }, errors: k };
}
const Jl = "_select_1xe98_1", Ql = "_invalid_1xe98_33", ea = "_xs_1xe98_40", ta = "_sm_1xe98_48", na = "_md_1xe98_56", ra = "_lg_1xe98_62", sa = "_xl_1xe98_68", Or = {
  select: Jl,
  invalid: Ql,
  xs: ea,
  sm: ta,
  md: na,
  lg: ra,
  xl: sa
}, On = Le(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          Or.select,
          Or[t],
          n ? Or.invalid : null,
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
), js = [
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
], Vn = {
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
function yr(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function es(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function sr(e, t) {
  const n = es(e), r = es(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function $r(e) {
  if (e.secondOperator == null) return !1;
  if (la(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function ts(e, t, n) {
  const r = yr(t, e.property), l = ns(
    r,
    e.value,
    e.operator,
    n
  );
  if (!$r(e)) return l;
  const i = ns(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function ns(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), s = i(t);
  switch (n) {
    case "Equals":
      return d === s || Array.isArray(d) && d.some((a) => i(a) === s);
    case "NotEquals":
      return d !== s && !(Array.isArray(d) && d.some((a) => i(a) === s));
    case "LessThan":
      return sr(d, s) < 0;
    case "LessThanOrEquals":
      return sr(d, s) <= 0;
    case "GreaterThan":
      return sr(d, s) > 0;
    case "GreaterThanOrEquals":
      return sr(d, s) >= 0;
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
function Wr(e) {
  return "filters" in e;
}
function Ts(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Wr(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => Ts(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", ts(t, e, l);
}
function Ps(e, t, n = {}) {
  return e.filter((r) => Ts(r, t, n));
}
function aa(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Ct(e) {
  return typeof e == "string" ? `"${aa(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(Ct).join(", ")}]` : `"${String(e)}"`;
}
function ia(e) {
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
  if (!$r(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function ca(e) {
  return Wr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ca).filter(Boolean).join(` ${e.operator} `)})` : ia(e);
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
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${da(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", k = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${ua[c]} ${u && r ? l(i(f)) : i(f)}`;
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
  if (!$r(e))
    return d(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${s} ${d(
    a,
    e.secondValue
  )})`;
}
function _a(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Wr(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => _a(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return fa(e, n);
}
function ha(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = sr(
        yr(n, l.property),
        yr(r, l.property)
      );
      if (d !== 0) return d * i;
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
}, Gn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], rs = {
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
function ss({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(tt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
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
  if (r === "boolean")
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
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Xe.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        r === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function mk({
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
  const [c, f] = W(
    () => r != null && r.length > 0 ? r.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Vn[e[0]?.type ?? "string"],
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
        operator: Vn[e.find(
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
      if (_.property === "" || (_.value == null || _.value === "") && !Gn.includes(_.operator)) continue;
      const w = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: y } = _;
      y != null && $r(_) && (w.secondOperator = y, w.secondValue = _.secondValue, w.logicalOperator = _.logicalOperator ?? "And"), h.push(w);
    }
    return h;
  }, [c]), p = be(() => s == null || b.length === 0 ? s : Ps(s, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [s, b, t, n]);
  fe(() => {
    d != null && s != null && d(p ?? []);
  }, [p]);
  const g = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ M("div", { className: [Xe.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: Xe.rows, role: "group", "aria-label": "Filter conditions", children: c.map((h, _) => {
      const m = g(h.property), w = l ? [Vn[m.type ?? "string"]] : js, y = !Gn.includes(h.operator), N = h.secondOperator != null;
      return /* @__PURE__ */ M(qr, { children: [
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
                  (E) => E.name === $.target.value
                );
                u(h.id, {
                  property: $.target.value,
                  operator: Vn[C?.type ?? "string"],
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
                  Gn.includes(C) ? {
                    operator: C,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: C }
                );
              },
              options: w.map(($) => ({
                value: $,
                label: rs[$]
              }))
            }
          ),
          y ? /* @__PURE__ */ o(
            ss,
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
                      Gn.includes(C) ? { secondOperator: C, secondValue: void 0 } : { secondOperator: C }
                    );
                  },
                  options: w.map(($) => ({
                    value: $,
                    label: rs[$]
                  }))
                }
              ),
              h.secondOperator == null || !Gn.includes(h.secondOperator) ? /* @__PURE__ */ o(
                ss,
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
              secondOperator: Vn[m.type ?? "string"],
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
      s != null ? /* @__PURE__ */ M("span", { className: Xe.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        s.length
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
function Ha(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function os(e, t) {
  return e.replace("{0}", String(t));
}
function qa(e, t, n) {
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
function Ka({
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
  const C = n ?? r, [E, D] = W(C), z = n !== void 0, O = z ? C : E, x = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, O), x), T = a ?? !0, j = d || x > 1, A = qa(S, x, i), F = R(
    (Y) => {
      const me = Math.min(Math.max(1, Y), x);
      z || D(me);
      const de = (me - 1) * t;
      m?.({
        page: me,
        skip: de,
        top: t,
        pageCount: x,
        pageSize: t
      });
    },
    [z, m, x, t]
  ), L = s === "center" ? ht.alignCenter : s === "right" ? ht.alignRight : s === "justify" ? ht.alignJustify : ht.alignLeft, V = {
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
  return $ === !1 || !j ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [ht.pager, L, N].filter(Boolean).join(" "),
      "aria-label": y,
      children: [
        T && /* @__PURE__ */ o("span", { className: ht.summary, "aria-live": "polite", children: u ? u(V) : Ha(f, S, x, e) }),
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
              A.map(
                (Y, me) => Y === "ellipsis" ? /* @__PURE__ */ o("span", { className: ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${me}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": Y,
                    className: [ht.button, Y === S ? ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": Y === S ? "page" : void 0,
                    "aria-label": os(_, Y),
                    title: os(h, Y),
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
function Ir(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ o(
    Ka,
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
const Ls = "";
function Wa(e, t, n, r, l) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const i = (s) => n.find((a) => a.property === s), d = (s, a, c) => {
    const f = t[a];
    if (f === void 0)
      return s.map((p) => ({ type: "row", row: p }));
    const u = i(f), k = /* @__PURE__ */ new Map(), v = [];
    s.forEach((p) => {
      const g = String(l(p, f) ?? ""), h = k.get(g);
      h ? h.push(p) : (k.set(g, [p]), v.push(g));
    });
    const b = [];
    return v.forEach((p) => {
      const g = k.get(p), h = [...c, p].join(Ls), _ = g[0], m = _ !== void 0 ? l(_, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: h,
          display: xr(m, u?.format),
          property: f,
          title: u?.title ?? f,
          count: g.length,
          level: a
        }
      }), r.has(h) && b.push(...d(g, a + 1, [...c, p]));
    }), b;
  };
  return d(e, 0, []);
}
function ls(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, s) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const k = String(n(u, a) ?? ""), v = c.get(k);
      v ? v.push(u) : (c.set(k, [u]), f.push(k));
    }), f.forEach((u) => {
      const k = [...s, u].join(Ls);
      r.add(k), l(c.get(u), d + 1, [...s, u]);
    });
  };
  return l(e, 0, []), r;
}
function ir(e, t) {
  return e.property ?? `col-${t}`;
}
function Ua(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
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
    return yr(e, t);
}
function xr(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const as = [
  "Ascending",
  "Descending",
  null
];
function Ga(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = as[(r ? as.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Xa(e, t) {
  return ha(e, t);
}
function Ya(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Za(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, a]) => ({
      property: s,
      operator: a.operator ?? "Contains",
      value: Va(
        a.value,
        n.types?.[s] ?? "string"
      )
    })
  ), l = r.length > 0 ? Ps(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Xa(l, t.sorts);
  return {
    ...Ya(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function is(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Ja(e, t, n) {
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
function Qa(e, t, n = Nn) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(xr(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const ei = "_grid_13rur_1", ti = "_toolbar_13rur_8", ni = "_picker_13rur_13", ri = "_pickerButton_13rur_17", si = "_pickerPanel_13rur_31", oi = "_pickerItem_13rur_46", li = "_groupPanel_13rur_55", ai = "_groupPanelActive_13rur_66", ii = "_groupPanelText_13rur_70", ci = "_groupChip_13rur_74", di = "_groupRemove_13rur_85", ui = "_groupRow_13rur_94", fi = "_groupCell_13rur_98", _i = "_groupToggle_13rur_104", hi = "_editRow_13rur_117", pi = "_editCell_13rur_121", mi = "_editInput_13rur_127", gi = "_commandCell_13rur_137", bi = "_commandButton_13rur_144", yi = "_data_13rur_159", xi = "_table_13rur_166", vi = "_header_13rur_172", ki = "_center_13rur_185", wi = "_right_13rur_189", $i = "_sortButton_13rur_193", Ni = "_sortIndicator_13rur_211", Oi = "_sortIndex_13rur_215", Si = "_cell_13rur_226", Ci = "_clickable_13rur_241", Di = "_frozen_13rur_249", Ei = "_selected_13rur_255", zi = "_resizeHandle_13rur_263", Mi = "_filterCell_13rur_281", Ii = "_filterSelect_13rur_290", Ai = "_filterInput_13rur_300", ji = "_empty_13rur_311", Ti = "_loading_13rur_317", Pi = "_visuallyHidden_13rur_331", Li = "_virtualScroller_13rur_340", Ri = "_spacerRow_13rur_345", Bi = "_footerRow_13rur_350", Fi = "_footerCell_13rur_354", Hi = "_footerValue_13rur_361", pe = {
  grid: ei,
  toolbar: ti,
  picker: ni,
  pickerButton: ri,
  pickerPanel: si,
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
function cs(e, t) {
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
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
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
  groupExpanded: E = !0,
  aggregates: D,
  showExportButton: z = !1,
  exportFileName: O = "grid-data",
  serverMode: x = !1,
  totalCount: S,
  onRangeChange: T,
  virtualize: j = !1,
  virtualRowHeight: A = 40,
  virtualHeight: F = 480,
  editMode: L = "None",
  allowRowCreate: V = !1,
  onRowUpdate: ee,
  onRowCreate: Y,
  onRowDelete: me,
  isLoading: de = !1,
  empty: se = "No records found",
  ariaLabel: q,
  className: ie,
  onRowClick: re
}) {
  const ue = q != null ? `${q} ` : "", [oe, $e] = W([]), [Oe, Ye] = W(
    /* @__PURE__ */ new Map()
  ), [ve, Be] = W(1), [we, ot] = W(f), [nt, Ze] = W(
    () => e.map((P, B) => ir(P, B))
  ), [Nt, bt] = W(
    () => new Set(
      e.map((P, B) => P.visible !== !1 ? ir(P, B) : "").filter(Boolean)
    )
  ), [lt, G] = W({}), [I, U] = W(!1), [Z, he] = W([]), [te, ye] = W(
    null
  ), [Ee, Fe] = W(null), [He, rt] = W({}), [on, J] = W(0), [Se, dt] = W(F), zt = Q(null), ut = Q(null), Ce = be(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((B, ae) => P.set(ir(B, ae), B)), P;
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
        pageSize: c ? we : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: a,
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
    a,
    s,
    e,
    x,
    S,
    c
  ]), K = Q(T);
  fe(() => {
    K.current = T;
  });
  const le = be(
    () => [...Oe.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, B]) => ({
      property: P,
      operator: B.operator ?? is(
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
  const Ie = be(() => new Set(Z), [Z]), Te = be(() => te || (E ? ls(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), [te, E, Je.items, Z]), Ft = be(
    () => Wa(Je.items, Z, e, Te, Nn),
    [Je.items, Z, e, Te]
  ), st = be(
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
    if (g === "None") return;
    const B = n(P), ae = h ?? [];
    let ce;
    g === "Single" ? ce = ae.length === 1 && ae[0] === B ? [] : [B] : ce = ae.includes(B) ? ae.filter((Re) => Re !== B) : [...ae, B], _?.(ce);
  }, _e = (P) => {
    re?.(P);
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
  }, Ht = (P) => {
    ye((B) => {
      const ae = B ?? (E ? ls(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), ce = new Set(ae);
      return ce.has(P) ? ce.delete(P) : ce.add(P), ce;
    });
  }, Tt = (P) => {
    const B = {};
    e.forEach((ae) => {
      ae.property && (B[ae.property] = Nn(P, ae.property));
    }), rt(B), Fe(String(n(P)));
  }, ln = () => {
    const P = {};
    e.forEach((B) => {
      B.property && B.type === "boolean" && (P[B.property] = !1);
    }), rt(P), Fe("__new__");
  }, Fn = () => {
    Fe(null), rt({});
  }, Hn = (P) => {
    if (Ee === "__new__") {
      const B = Object.fromEntries(
        e.filter((ae) => ae.property).map((ae) => [ae.property, He[ae.property]])
      );
      Y?.(B);
    } else if (P != null) {
      const B = { ...P, ...He };
      ee?.(P, B);
    }
    Fn();
  }, mn = c && (v === "Top" || v === "TopAndBottom"), Yr = c && (v === "Bottom" || v === "TopAndBottom"), eo = d && e.some((P) => cs(P, d)), to = (P, B, ae) => P.render ? P.render(B, { index: 0 }) : xr(Nn(B, P.property), P.format), no = (P) => {
    const B = [pe.cell];
    return P.align === "center" && B.push(pe.center), P.align === "right" && B.push(pe.right), P.frozen && B.push(pe.frozen), B.join(" ");
  }, Zr = x ? t : Je.filtered, ro = () => {
    const P = Qa(
      Zr,
      st.map((Re) => Re.column)
    ), B = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ae = URL.createObjectURL(B), ce = document.createElement("a");
    ce.href = ae, ce.download = `${O}.csv`, document.body.appendChild(ce), ce.click(), ce.remove(), URL.revokeObjectURL(ae);
  }, Cn = Ft.length, gn = be(() => {
    if (!j || Cn === 0)
      return { start: 0, end: Cn, top: 0, bottom: 0 };
    const P = 5, B = Math.max(
      0,
      Math.floor(on / A) - P
    ), ae = Math.ceil(Se / A) + P * 2, ce = Math.min(Cn, B + ae), Re = B * A, Pt = Math.max(0, (Cn - ce) * A);
    return { start: B, end: ce, top: Re, bottom: Pt };
  }, [j, Cn, on, A, Se]), Nr = st.length + (yt ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [pe.grid, ie].filter(Boolean).join(" "), children: [
    mn && /* @__PURE__ */ o(
      Ir,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: u,
        pageNumbersCount: k,
        showSummary: b,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${Yr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    ),
    ($ || V || m || z) && /* @__PURE__ */ M("div", { className: pe.toolbar, children: [
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
              const ae = ir(P, B);
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
      z && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: pe.pickerButton,
          onClick: ro,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [pe.data, j ? pe.virtualScroller : ""].filter(Boolean).join(" "),
        style: j ? { maxHeight: F } : void 0,
        onScroll: j ? (P) => {
          J(P.currentTarget.scrollTop), dt(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: pe.table,
              role: "grid",
              "aria-rowcount": (j ? Cn : Je.total) + 1,
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
                      const ae = Ki(B, r), ce = oe.find((_t) => _t.property === B.property), Re = ce ? oe.indexOf(ce) + 1 : 0, Pt = B.align ?? "left";
                      return /* @__PURE__ */ M(
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
                  eo && /* @__PURE__ */ o("tr", { children: st.map(({ key: P, column: B }) => {
                    if (!cs(B, d))
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
                          value: ae?.operator ?? is(B.type ?? "string"),
                          onChange: (ce) => X(B.property ?? "", {
                            ...ae,
                            operator: ce.target.value
                          }),
                          "aria-label": `${B.title ?? B.property} operator`,
                          children: js.filter((ce) => ce !== "Custom").map(
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
                  Ee === "__new__" && /* @__PURE__ */ M("tr", { className: pe.editRow, children: [
                    st.map(({ key: P, column: B }) => /* @__PURE__ */ o("td", { className: pe.editCell, children: B.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: pe.editInput,
                        type: B.type === "number" ? "number" : B.type === "boolean" ? "checkbox" : "text",
                        checked: B.type === "boolean" ? !!He[B.property] : void 0,
                        value: B.type === "boolean" ? void 0 : String(He[B.property] ?? ""),
                        onChange: (ae) => rt((ce) => ({
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
                          onClick: () => Hn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: pe.commandButton,
                          onClick: Fn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  gn.top > 0 && /* @__PURE__ */ o("tr", { className: pe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Nr,
                      style: { height: gn.top }
                    }
                  ) }),
                  Ft.slice(gn.start, gn.end).map((P, B) => {
                    const ae = gn.start + B, ce = j ? ae + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const qt = Te.has(P.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: pe.groupRow,
                          "aria-rowindex": ce,
                          children: /* @__PURE__ */ o("td", { colSpan: Nr, className: pe.groupCell, children: /* @__PURE__ */ M(
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
                    const Re = P.row, Pt = n(Re), _t = (h ?? []).includes(Pt), Dn = Ee != null && Ee === String(Pt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": ce,
                        className: [
                          re || g !== "None" ? pe.clickable : "",
                          _t ? pe.selected : "",
                          Dn ? pe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": g !== "None" ? _t : void 0,
                        onClick: re || g !== "None" ? (qt) => {
                          Wi(qt.target) || (_e(Re), ge(Re));
                        } : void 0,
                        children: [
                          st.map(({ key: qt, column: xt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: no(xt),
                              style: xt.frozen ? { left: Mt[qt] } : void 0,
                              children: Dn && xt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: pe.editInput,
                                  type: xt.type === "number" ? "number" : xt.type === "boolean" ? "checkbox" : "text",
                                  checked: xt.type === "boolean" ? !!He[xt.property] : void 0,
                                  value: xt.type === "boolean" ? void 0 : String(He[xt.property] ?? ""),
                                  onChange: (Jr) => rt((so) => ({
                                    ...so,
                                    [xt.property]: xt.type === "boolean" ? Jr.target.checked : Jr.target.value
                                  })),
                                  "aria-label": `${xt.title ?? xt.property} (edit)`
                                }
                              ) : to(xt, Re)
                            },
                            qt
                          )),
                          yt && /* @__PURE__ */ o("td", { className: pe.commandCell, children: Dn ? /* @__PURE__ */ M(tt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: () => Hn(Re),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: pe.commandButton,
                                onClick: Fn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(tt, { children: [
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
                      colSpan: Nr,
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
                              xr(
                                Ja(Zr, ce, Nn),
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
          Je.items.length === 0 && !de && /* @__PURE__ */ o("div", { className: pe.empty, children: se }),
          de && /* @__PURE__ */ o("div", { className: pe.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Yr && /* @__PURE__ */ o(
      Ir,
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
const Ui = "_wrap_avqds_1", Vi = "_grid_avqds_7", Gi = "_stacked_avqds_13", Xi = "_item_avqds_19", Yi = "_empty_avqds_25", Xn = {
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
  const [k, v] = W(1), [b, p] = W(t), g = e.length, h = Math.max(1, Math.ceil(g / b)), _ = Math.min(Math.max(1, k), h), m = be(() => {
    const y = (_ - 1) * b;
    return e.slice(y, y + b);
  }, [e, _, b]), w = r ? Xn.grid : Xn.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Xn.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && s != null ? s : g === 0 ? d ?? /* @__PURE__ */ o("div", { className: Xn.empty, children: i }) : /* @__PURE__ */ o("div", { className: w, children: m.map((y, N) => /* @__PURE__ */ o("div", { className: Xn.item, children: l ? l(y, N) : String(y) }, N)) }),
        /* @__PURE__ */ o(
          Ir,
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
const Zi = "_label_1qfpw_1", Ji = {
  label: Zi
}, yk = Le(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [Ji.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Qi = "_textbox_oly89_1", ec = "_invalid_oly89_37", tc = "_xs_oly89_44", nc = "_sm_oly89_50", rc = "_md_oly89_56", sc = "_lg_oly89_62", oc = "_xl_oly89_68", Sr = {
  textbox: Qi,
  invalid: ec,
  xs: tc,
  sm: nc,
  md: rc,
  lg: sc,
  xl: oc
}, lc = Le(
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
          Sr.textbox,
          Sr[t],
          n ? Sr.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), xk = lc, ac = "_checkbox_1bb6c_1", ic = {
  checkbox: ac
}, vk = Le(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const i = Q(null);
    return fe(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [ic.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), cc = {
  switch: "_switch_19gf1_1"
}, kk = Le(function({ className: t, ...n }, r) {
  const [l, i] = W(
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
      className: [cc.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && i(s.target.checked), n.onChange?.(s);
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
}, cr = 8;
function bc(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + cr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - cr,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + cr,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - cr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function wk({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const s = Pe(), a = Q(null), c = Q(null), f = Q(() => {
  }), [u, k] = W(!1), [v, b] = W(null), p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, g = () => {
    p(), a.current = window.setTimeout(() => {
      a.current = null, k(!0);
    }, r);
  }, h = () => {
    p(), k(!1);
  };
  if (fe(() => () => p(), []), fe(() => {
    if (!u || l == null) return;
    const m = window.setTimeout(() => k(!1), l);
    return () => window.clearTimeout(m);
  }, [u, l]), fe(() => {
    if (i || !u) return;
    const m = (w) => {
      w.key === "Escape" && h();
    };
    return window.addEventListener("keydown", m), () => window.removeEventListener("keydown", m);
  }, [i, u]), fe(() => {
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
      }, r);
    }, C = (x) => x instanceof Element ? x.closest(i) : null, E = (x) => {
      const S = C(x.target);
      !S || S === w || $(S);
    }, D = (x) => {
      const S = C(x.target);
      if (!S || S !== w) return;
      const T = x.relatedTarget;
      T instanceof Element && S.contains(T) || N();
    }, z = (x) => {
      x.key === "Escape" && N();
    }, O = () => N();
    return document.addEventListener("mouseover", E), document.addEventListener("mouseout", D), document.addEventListener("focusin", E), document.addEventListener("focusout", D), document.addEventListener("keydown", z), document.addEventListener("scroll", O, !0), window.addEventListener("resize", O), () => {
      y(), document.removeEventListener("mouseover", E), document.removeEventListener("mouseout", D), document.removeEventListener("focusin", E), document.removeEventListener("focusout", D), document.removeEventListener("keydown", z), document.removeEventListener("scroll", O, !0), window.removeEventListener("resize", O), w = null, b(null);
    };
  }, [i, r]), fe(() => {
    if (!i || v === null || l == null) return;
    const m = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(m);
  }, [i, v, l]), Mr(() => {
    const m = v;
    if (!m) return;
    const w = m.getAttribute("aria-describedby");
    return m.setAttribute(
      "aria-describedby",
      [w, s].filter(Boolean).join(" ")
    ), () => {
      w == null ? m.removeAttribute("aria-describedby") : m.setAttribute("aria-describedby", w);
    };
  }, [v, s]), Mr(() => {
    const m = c.current, w = v;
    !m || !w || Object.assign(
      m.style,
      bc(w.getBoundingClientRect(), n)
    );
  }, [v, n]), i)
    return v ? /* @__PURE__ */ M(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: s,
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
  const _ = gt(t) ? Hr(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? s : null
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
              id: s,
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
const yc = "_dialog_xijci_1", xc = "_sm_xijci_72", vc = "_resizable_xijci_78", kc = "_md_xijci_81", wc = "_lg_xijci_85", $c = "_header_xijci_89", Nc = "_title_xijci_100", Oc = "_description_xijci_107", Sc = "_close_xijci_114", Cc = "_body_xijci_144", Dc = "_footer_xijci_156", Zt = {
  dialog: yc,
  "se-dialog-in": "_se-dialog-in_xijci_1",
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
  description: r,
  children: l,
  footer: i,
  size: d = "md",
  width: s,
  height: a,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  canClose: k,
  className: v
}) {
  const b = Q(null), p = Pe(), g = Pe(), h = Q(t);
  fe(() => {
    h.current = t;
  });
  const _ = Q(k);
  fe(() => {
    _.current = k;
  });
  const m = Q(f);
  fe(() => {
    m.current = f;
  });
  const w = Q(!1), y = Q(!1), N = R(() => {
    if (w.current) return;
    const E = _.current?.();
    if (E instanceof Promise) {
      E.then((D) => {
        D && !w.current && (w.current = !0, h.current());
      });
      return;
    }
    E !== !1 && (w.current = !0, h.current());
  }, []), $ = R(() => {
    if (y.current) {
      y.current = !1;
      return;
    }
    h.current();
  }, []), C = R(
    (E) => {
      if (E.key !== "Tab" || !b.current) return;
      const D = Array.from(
        b.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (O) => O.offsetWidth > 0 || O.offsetHeight > 0 || O === document.activeElement
      );
      if (D.length === 0) {
        E.preventDefault();
        return;
      }
      const z = D.indexOf(document.activeElement);
      if (E.shiftKey) {
        if (z <= 0) {
          E.preventDefault();
          const O = D[D.length - 1];
          O && O.focus();
        }
      } else if (z === -1 || z === D.length - 1) {
        E.preventDefault();
        const O = D[0];
        O && O.focus();
      }
    },
    []
  );
  return fe(() => {
    const E = b.current;
    if (E)
      if (e && !E.open) {
        const D = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        E.showModal(), (E.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? E.querySelector("button"))?.focus();
        const O = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const x = (S) => {
          S.preventDefault(), m.current && N();
        };
        return E.addEventListener("cancel", x), () => {
          E.removeEventListener("cancel", x), document.body.style.overflow = O, D?.focus({ preventScroll: !0 });
        };
      } else !e && E.open && (y.current = w.current, w.current = !1, E.close());
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
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: $,
      onClick: (E) => {
        E.target === b.current && c && N();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": r ? g : void 0,
      onKeyDown: C,
      children: [
        n && /* @__PURE__ */ M("header", { className: Zt.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ o("h2", { id: p, className: Zt.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: g, className: Zt.description, children: r })
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
const zc = "_typography_1jy8x_1", Mc = "_h1_1jy8x_39", Ic = "_h2_1jy8x_45", Ac = "_h3_1jy8x_51", jc = "_h4_1jy8x_57", Tc = "_h5_1jy8x_63", Pc = "_h6_1jy8x_69", Lc = "_button_1jy8x_99", Rc = "_caption_1jy8x_106", Bc = "_overline_1jy8x_112", Cr = {
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
  textAlign: r,
  text: l,
  visible: i = !0,
  className: d,
  children: s,
  ...a
}, c) {
  if (i === !1) return null;
  const f = n === "Auto" ? Fc[t] : qc[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: c,
      className: [
        Cr.typography,
        Cr[Hc[t]],
        r ? Cr[Kc[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? s
    }
  );
}), Rs = Rn(null);
function $k() {
  const e = hn(Rs);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function Nk({ children: e }) {
  const [t, n] = W([]), r = Q(0), l = be(
    () => ({
      confirm: (s = {}) => new Promise((a) => {
        r.current += 1;
        const c = r.current;
        n((f) => [...f, { seq: c, kind: "confirm", options: s, resolve: a }]);
      }),
      alert: (s = {}) => new Promise((a) => {
        r.current += 1;
        const c = r.current;
        n((f) => [...f, { seq: c, kind: "alert", options: s, resolve: a }]);
      })
    }),
    []
  ), i = t[0], d = (s) => {
    i && (i.kind === "confirm" ? i.resolve(s) : i.resolve(), n((a) => a.slice(1)));
  };
  return /* @__PURE__ */ M(Rs.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ec,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: i?.options.title ?? (i?.kind === "confirm" ? "Confirm" : "Alert"),
        size: i?.options.size,
        footer: i?.kind === "confirm" ? /* @__PURE__ */ M(tt, { children: [
          /* @__PURE__ */ o(Ln, { variant: "text", onClick: () => d(!1), children: i.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            Ln,
            {
              severity: i.options.tone ?? "primary",
              onClick: () => d(!0),
              children: i.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ o(Ln, { onClick: () => d(!0), children: i?.kind === "alert" ? i.options.okText ?? "OK" : "OK" }),
        children: i?.options.message != null && /* @__PURE__ */ o(Wc, { textStyle: "Body1", children: i.options.message })
      },
      i?.seq ?? 0
    )
  ] });
}
const Uc = "_viewport_11t1p_1", Vc = "_topLeft_11t1p_13", Gc = "_topRight_11t1p_20", Xc = "_bottomLeft_11t1p_25", Yc = "_toast_11t1p_30", Zc = "_leaving_11t1p_61", Jc = "_info_11t1p_77", Qc = "_success_11t1p_86", ed = "_warning_11t1p_95", td = "_danger_11t1p_104", nd = "_content_11t1p_113", rd = "_title_11t1p_118", sd = "_description_11t1p_141", od = "_dismiss_11t1p_148", ld = "_actions_11t1p_169", ad = "_action_11t1p_169", id = "_cancel_11t1p_177", cd = "_progress_11t1p_215", Ot = {
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
  title: rd,
  description: sd,
  dismiss: od,
  actions: ld,
  action: ad,
  cancel: id,
  progress: cd,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Bs = Rn(null);
function Ok() {
  const e = hn(Bs);
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
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = W([]), [s, a] = W(!1), c = Q([]), f = Q(/* @__PURE__ */ new Map()), u = Q(!1), k = Q(0), v = (O) => {
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
  fe(() => {
    if (!r) return;
    const O = () => {
      document.hidden ? m() : w();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [r, m, w]);
  const y = R(
    (O) => {
      const x = c.current.find((S) => S.id === O);
      !x || x.leaving || (x.onDismiss?.(), d((S) => {
        const T = S.map(
          (j) => j.id === O ? { ...j, leaving: !0 } : j
        );
        return c.current = T, T;
      }), window.setTimeout(() => g(O), dd));
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
        const j = x ? T.map(
          (A) => A.id === S.id ? { ...S, leaving: !1 } : A
        ) : [...T, S];
        return c.current = j, j;
      }), x && p(S.id), N(S);
    },
    [t, n, N, p]
  ), C = be(() => ({ toast: $ }), [$]), E = be(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((O) => O.position)])),
    [n, i]
  ), D = r ? m : void 0, z = r ? w : void 0;
  return /* @__PURE__ */ M(Bs.Provider, { value: C, children: [
    e,
    E.map((O) => /* @__PURE__ */ o(
      "div",
      {
        className: [Ot.viewport, Ot[ud[O]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: D,
        onMouseLeave: z,
        children: i.filter((x) => x.position === O).map((x) => /* @__PURE__ */ M(
          "div",
          {
            role: x.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
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
const fd = "_alert_146r9_1", _d = "_xs_146r9_28", hd = "_sm_146r9_38", pd = "_lg_146r9_48", md = "_xl_146r9_58", gd = "_primary_146r9_69", bd = "_secondary_146r9_74", yd = "_light_146r9_79", xd = "_base_146r9_84", vd = "_dark_146r9_89", kd = "_info_146r9_94", wd = "_success_146r9_99", $d = "_warning_146r9_104", Nd = "_danger_146r9_109", Od = "_flat_146r9_116", Sd = "_outlined_146r9_123", Cd = "_filled_146r9_132", Dd = "_text_146r9_139", Ed = "_icon_146r9_181", zd = "_content_146r9_192", Md = "_title_146r9_197", Id = "_body_146r9_203", Ad = "_dismiss_146r9_209", Wt = {
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
  size: r = "md",
  title: l,
  icon: i,
  showIcon: d = !0,
  children: s,
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
  }, h = e, _ = Is(t, "filled"), m = lr(n), w = i ?? (d ? /* @__PURE__ */ o(ke, { icon: jd[e] }) : null);
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
        Wt[r],
        k
      ].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ o("span", { className: Wt.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ M("div", { className: Wt.content, children: [
          l && /* @__PURE__ */ o("div", { className: Wt.title, children: l }),
          s && /* @__PURE__ */ o("div", { className: Wt.body, children: s })
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
const Td = "_skeleton_1xyce_1", Pd = "_text_1xyce_35", Ld = "_circle_1xyce_40", Rd = "_rect_1xyce_44", ds = {
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
function vr(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const Bd = "_row_juebr_1", Fd = "_start_juebr_14", Hd = "_center_juebr_18", qd = "_end_juebr_22", Kd = "_stretch_juebr_26", Wd = "_baseline_juebr_30", Ud = "_normal_juebr_34", Vd = "_noWrap_juebr_90", Gd = "_wrapReverse_juebr_94", dr = {
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
function us(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Ek({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...s
}) {
  const a = e != null ? vr(e) : null, c = t != null ? vr(t) : null, f = {
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
        dr.row,
        dr[n],
        dr[`justify-${r}`],
        us(l) != null ? dr[us(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const Xd = "_column_sh0ss_1", Yd = "_Size1_sh0ss_15", Zd = "_Size2_sh0ss_24", Jd = "_Size3_sh0ss_33", Qd = "_Size4_sh0ss_42", eu = "_Size5_sh0ss_51", tu = "_Size6_sh0ss_60", nu = "_Size7_sh0ss_69", ru = "_Size8_sh0ss_78", su = "_Size9_sh0ss_87", ou = "_Size10_sh0ss_96", lu = "_Size11_sh0ss_105", au = "_Size12_sh0ss_114", iu = "_Offset0_sh0ss_119", cu = "_Offset1_sh0ss_122", du = "_Offset2_sh0ss_127", uu = "_Offset3_sh0ss_132", fu = "_Offset4_sh0ss_137", _u = "_Offset5_sh0ss_142", hu = "_Offset6_sh0ss_147", pu = "_Offset7_sh0ss_152", mu = "_Offset8_sh0ss_157", gu = "_Offset9_sh0ss_162", bu = "_Offset10_sh0ss_167", yu = "_Offset11_sh0ss_172", xu = "_Offset12_sh0ss_177", vu = "_OrderFirst_sh0ss_182", ku = "_OrderLast_sh0ss_185", wu = "_Order0_sh0ss_188", $u = "_Order1_sh0ss_191", Nu = "_Order2_sh0ss_194", Ou = "_Order3_sh0ss_197", Su = "_Order4_sh0ss_200", Cu = "_Order5_sh0ss_203", Du = "_Order6_sh0ss_206", Eu = "_Order7_sh0ss_209", zu = "_Order8_sh0ss_212", Mu = "_Order9_sh0ss_215", Iu = "_Order10_sh0ss_218", Au = "_Order11_sh0ss_221", ju = "_Order12_sh0ss_224", Tu = "_xsSize1_sh0ss_229", Pu = "_xsSize2_sh0ss_238", Lu = "_xsSize3_sh0ss_247", Ru = "_xsSize4_sh0ss_256", Bu = "_xsSize5_sh0ss_265", Fu = "_xsSize6_sh0ss_274", Hu = "_xsSize7_sh0ss_283", qu = "_xsSize8_sh0ss_292", Ku = "_xsSize9_sh0ss_301", Wu = "_xsSize10_sh0ss_310", Uu = "_xsSize11_sh0ss_321", Vu = "_xsSize12_sh0ss_332", Gu = "_xsOffset0_sh0ss_337", Xu = "_xsOffset1_sh0ss_340", Yu = "_xsOffset2_sh0ss_345", Zu = "_xsOffset3_sh0ss_350", Ju = "_xsOffset4_sh0ss_355", Qu = "_xsOffset5_sh0ss_360", ef = "_xsOffset6_sh0ss_365", tf = "_xsOffset7_sh0ss_370", nf = "_xsOffset8_sh0ss_375", rf = "_xsOffset9_sh0ss_380", sf = "_xsOffset10_sh0ss_385", of = "_xsOffset11_sh0ss_391", lf = "_xsOffset12_sh0ss_397", af = "_xsOrderFirst_sh0ss_403", cf = "_xsOrderLast_sh0ss_406", df = "_xsOrder0_sh0ss_409", uf = "_xsOrder1_sh0ss_412", ff = "_xsOrder2_sh0ss_415", _f = "_xsOrder3_sh0ss_418", hf = "_xsOrder4_sh0ss_421", pf = "_xsOrder5_sh0ss_424", mf = "_xsOrder6_sh0ss_427", gf = "_xsOrder7_sh0ss_430", bf = "_xsOrder8_sh0ss_433", yf = "_xsOrder9_sh0ss_436", xf = "_xsOrder10_sh0ss_439", vf = "_xsOrder11_sh0ss_442", kf = "_xsOrder12_sh0ss_445", wf = "_smSize1_sh0ss_451", $f = "_smSize2_sh0ss_460", Nf = "_smSize3_sh0ss_469", Of = "_smSize4_sh0ss_478", Sf = "_smSize5_sh0ss_487", Cf = "_smSize6_sh0ss_496", Df = "_smSize7_sh0ss_505", Ef = "_smSize8_sh0ss_514", zf = "_smSize9_sh0ss_523", Mf = "_smSize10_sh0ss_532", If = "_smSize11_sh0ss_543", Af = "_smSize12_sh0ss_554", jf = "_smOffset0_sh0ss_559", Tf = "_smOffset1_sh0ss_562", Pf = "_smOffset2_sh0ss_567", Lf = "_smOffset3_sh0ss_572", Rf = "_smOffset4_sh0ss_577", Bf = "_smOffset5_sh0ss_582", Ff = "_smOffset6_sh0ss_587", Hf = "_smOffset7_sh0ss_592", qf = "_smOffset8_sh0ss_597", Kf = "_smOffset9_sh0ss_602", Wf = "_smOffset10_sh0ss_607", Uf = "_smOffset11_sh0ss_613", Vf = "_smOffset12_sh0ss_619", Gf = "_smOrderFirst_sh0ss_625", Xf = "_smOrderLast_sh0ss_628", Yf = "_smOrder0_sh0ss_631", Zf = "_smOrder1_sh0ss_634", Jf = "_smOrder2_sh0ss_637", Qf = "_smOrder3_sh0ss_640", e_ = "_smOrder4_sh0ss_643", t_ = "_smOrder5_sh0ss_646", n_ = "_smOrder6_sh0ss_649", r_ = "_smOrder7_sh0ss_652", s_ = "_smOrder8_sh0ss_655", o_ = "_smOrder9_sh0ss_658", l_ = "_smOrder10_sh0ss_661", a_ = "_smOrder11_sh0ss_664", i_ = "_smOrder12_sh0ss_667", c_ = "_mdSize1_sh0ss_673", d_ = "_mdSize2_sh0ss_682", u_ = "_mdSize3_sh0ss_691", f_ = "_mdSize4_sh0ss_700", __ = "_mdSize5_sh0ss_709", h_ = "_mdSize6_sh0ss_718", p_ = "_mdSize7_sh0ss_727", m_ = "_mdSize8_sh0ss_736", g_ = "_mdSize9_sh0ss_745", b_ = "_mdSize10_sh0ss_754", y_ = "_mdSize11_sh0ss_765", x_ = "_mdSize12_sh0ss_776", v_ = "_mdOffset0_sh0ss_781", k_ = "_mdOffset1_sh0ss_784", w_ = "_mdOffset2_sh0ss_789", $_ = "_mdOffset3_sh0ss_794", N_ = "_mdOffset4_sh0ss_799", O_ = "_mdOffset5_sh0ss_804", S_ = "_mdOffset6_sh0ss_809", C_ = "_mdOffset7_sh0ss_814", D_ = "_mdOffset8_sh0ss_819", E_ = "_mdOffset9_sh0ss_824", z_ = "_mdOffset10_sh0ss_829", M_ = "_mdOffset11_sh0ss_835", I_ = "_mdOffset12_sh0ss_841", A_ = "_mdOrderFirst_sh0ss_847", j_ = "_mdOrderLast_sh0ss_850", T_ = "_mdOrder0_sh0ss_853", P_ = "_mdOrder1_sh0ss_856", L_ = "_mdOrder2_sh0ss_859", R_ = "_mdOrder3_sh0ss_862", B_ = "_mdOrder4_sh0ss_865", F_ = "_mdOrder5_sh0ss_868", H_ = "_mdOrder6_sh0ss_871", q_ = "_mdOrder7_sh0ss_874", K_ = "_mdOrder8_sh0ss_877", W_ = "_mdOrder9_sh0ss_880", U_ = "_mdOrder10_sh0ss_883", V_ = "_mdOrder11_sh0ss_886", G_ = "_mdOrder12_sh0ss_889", X_ = "_lgSize1_sh0ss_895", Y_ = "_lgSize2_sh0ss_904", Z_ = "_lgSize3_sh0ss_913", J_ = "_lgSize4_sh0ss_922", Q_ = "_lgSize5_sh0ss_931", eh = "_lgSize6_sh0ss_940", th = "_lgSize7_sh0ss_949", nh = "_lgSize8_sh0ss_958", rh = "_lgSize9_sh0ss_967", sh = "_lgSize10_sh0ss_976", oh = "_lgSize11_sh0ss_987", lh = "_lgSize12_sh0ss_998", ah = "_lgOffset0_sh0ss_1003", ih = "_lgOffset1_sh0ss_1006", ch = "_lgOffset2_sh0ss_1011", dh = "_lgOffset3_sh0ss_1016", uh = "_lgOffset4_sh0ss_1021", fh = "_lgOffset5_sh0ss_1026", _h = "_lgOffset6_sh0ss_1031", hh = "_lgOffset7_sh0ss_1036", ph = "_lgOffset8_sh0ss_1041", mh = "_lgOffset9_sh0ss_1046", gh = "_lgOffset10_sh0ss_1051", bh = "_lgOffset11_sh0ss_1057", yh = "_lgOffset12_sh0ss_1063", xh = "_lgOrderFirst_sh0ss_1069", vh = "_lgOrderLast_sh0ss_1072", kh = "_lgOrder0_sh0ss_1075", wh = "_lgOrder1_sh0ss_1078", $h = "_lgOrder2_sh0ss_1081", Nh = "_lgOrder3_sh0ss_1084", Oh = "_lgOrder4_sh0ss_1087", Sh = "_lgOrder5_sh0ss_1090", Ch = "_lgOrder6_sh0ss_1093", Dh = "_lgOrder7_sh0ss_1096", Eh = "_lgOrder8_sh0ss_1099", zh = "_lgOrder9_sh0ss_1102", Mh = "_lgOrder10_sh0ss_1105", Ih = "_lgOrder11_sh0ss_1108", Ah = "_lgOrder12_sh0ss_1111", jh = "_xlSize1_sh0ss_1117", Th = "_xlSize2_sh0ss_1126", Ph = "_xlSize3_sh0ss_1135", Lh = "_xlSize4_sh0ss_1144", Rh = "_xlSize5_sh0ss_1153", Bh = "_xlSize6_sh0ss_1162", Fh = "_xlSize7_sh0ss_1171", Hh = "_xlSize8_sh0ss_1180", qh = "_xlSize9_sh0ss_1189", Kh = "_xlSize10_sh0ss_1198", Wh = "_xlSize11_sh0ss_1209", Uh = "_xlSize12_sh0ss_1220", Vh = "_xlOffset0_sh0ss_1225", Gh = "_xlOffset1_sh0ss_1228", Xh = "_xlOffset2_sh0ss_1233", Yh = "_xlOffset3_sh0ss_1238", Zh = "_xlOffset4_sh0ss_1243", Jh = "_xlOffset5_sh0ss_1248", Qh = "_xlOffset6_sh0ss_1253", ep = "_xlOffset7_sh0ss_1258", tp = "_xlOffset8_sh0ss_1263", np = "_xlOffset9_sh0ss_1268", rp = "_xlOffset10_sh0ss_1273", sp = "_xlOffset11_sh0ss_1279", op = "_xlOffset12_sh0ss_1285", lp = "_xlOrderFirst_sh0ss_1291", ap = "_xlOrderLast_sh0ss_1294", ip = "_xlOrder0_sh0ss_1297", cp = "_xlOrder1_sh0ss_1300", dp = "_xlOrder2_sh0ss_1303", up = "_xlOrder3_sh0ss_1306", fp = "_xlOrder4_sh0ss_1309", _p = "_xlOrder5_sh0ss_1312", hp = "_xlOrder6_sh0ss_1315", pp = "_xlOrder7_sh0ss_1318", mp = "_xlOrder8_sh0ss_1321", gp = "_xlOrder9_sh0ss_1324", bp = "_xlOrder10_sh0ss_1327", yp = "_xlOrder11_sh0ss_1330", xp = "_xlOrder12_sh0ss_1333", vp = "_xxSize1_sh0ss_1339", kp = "_xxSize2_sh0ss_1348", wp = "_xxSize3_sh0ss_1357", $p = "_xxSize4_sh0ss_1366", Np = "_xxSize5_sh0ss_1375", Op = "_xxSize6_sh0ss_1384", Sp = "_xxSize7_sh0ss_1393", Cp = "_xxSize8_sh0ss_1402", Dp = "_xxSize9_sh0ss_1411", Ep = "_xxSize10_sh0ss_1420", zp = "_xxSize11_sh0ss_1431", Mp = "_xxSize12_sh0ss_1442", Ip = "_xxOffset0_sh0ss_1447", Ap = "_xxOffset1_sh0ss_1450", jp = "_xxOffset2_sh0ss_1455", Tp = "_xxOffset3_sh0ss_1460", Pp = "_xxOffset4_sh0ss_1465", Lp = "_xxOffset5_sh0ss_1470", Rp = "_xxOffset6_sh0ss_1475", Bp = "_xxOffset7_sh0ss_1480", Fp = "_xxOffset8_sh0ss_1485", Hp = "_xxOffset9_sh0ss_1490", qp = "_xxOffset10_sh0ss_1495", Kp = "_xxOffset11_sh0ss_1501", Wp = "_xxOffset12_sh0ss_1507", Up = "_xxOrderFirst_sh0ss_1513", Vp = "_xxOrderLast_sh0ss_1516", Gp = "_xxOrder0_sh0ss_1519", Xp = "_xxOrder1_sh0ss_1522", Yp = "_xxOrder2_sh0ss_1525", Zp = "_xxOrder3_sh0ss_1528", Jp = "_xxOrder4_sh0ss_1531", Qp = "_xxOrder5_sh0ss_1534", em = "_xxOrder6_sh0ss_1537", tm = "_xxOrder7_sh0ss_1540", nm = "_xxOrder8_sh0ss_1543", rm = "_xxOrder9_sh0ss_1546", sm = "_xxOrder10_sh0ss_1549", om = "_xxOrder11_sh0ss_1552", lm = "_xxOrder12_sh0ss_1555", ur = {
  column: Xd,
  Size1: Yd,
  Size2: Zd,
  Size3: Jd,
  Size4: Qd,
  Size5: eu,
  Size6: tu,
  Size7: nu,
  Size8: ru,
  Size9: su,
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
  xsOffset9: rf,
  xsOffset10: sf,
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
  smOrder7: r_,
  smOrder8: s_,
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
  lgSize9: rh,
  lgSize10: sh,
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
  xlOffset10: rp,
  xlOffset11: sp,
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
  xxOrder9: rm,
  xxOrder10: sm,
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
  const r = [ur.column], l = { ...t };
  for (const [z, O, x, S] of am) {
    const T = n[O], j = n[x], A = n[S];
    if (T != null) {
      im(O, T);
      const F = ur[`${z}Size${T}`];
      F && r.push(F);
    }
    if (j != null) {
      cm(x, j);
      const F = ur[`${z}Offset${j}`];
      F && r.push(F);
    }
    if (A != null) {
      const F = ur[um(z, A, S)];
      F && r.push(F);
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
    orderXx: E,
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
const fm = "_stack_bmbbp_1", Yn = {
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
function fs(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Mk({
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
    ...r != null ? { gap: vr(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Yn.stack,
        Yn[`dir-${c}`],
        fs(n) !== "wrap" ? Yn[`wrap-${fs(n)}`] : null,
        l != null ? Yn[`align-${l}`] : null,
        i != null ? Yn[`justify-${i}`] : null,
        d
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
  style: r,
  visible: l = !0,
  ...i
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: vr(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [hm.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
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
}, wm = "_footer_3be5w_1", $m = "_sticky_3be5w_9", _s = {
  footer: wm,
  sticky: $m
};
function Nm({
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
const Om = "_header_1tw8b_1", Sm = "_sticky_1tw8b_9", hs = {
  header: Om,
  sticky: Sm
};
function Cm({
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
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: i = !1,
  onClose: d,
  className: s,
  children: a,
  ...c
}) {
  return fe(() => {
    if (!r || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ M(tt, { children: [
    r && t ? /* @__PURE__ */ o(
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
          r ? [dn.overlay, "se-sidebar--overlay"] : null,
          l ? dn.fullHeight : null,
          i && !r && !l ? dn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: a
      }
    )
  ] });
}
function Ak(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(tt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], s = [], a = [], c = [];
  ar.forEach(n, (k) => {
    if (!gt(k)) {
      d.push(k);
      return;
    }
    if (k.type === Cm)
      l.push(k);
    else if (k.type === Nm)
      i.push(k);
    else if (k.type === Bm) {
      const v = k, b = v.props.position;
      c.push(v), (b === "right" || b === "end" ? a : s).push(v);
    } else
      d.push(k);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const k = u ? a : s;
    return /* @__PURE__ */ M(
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
      ...r,
      children: [
        l,
        /* @__PURE__ */ M("div", { className: Jt.row, children: [
          s,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const Fm = "_body_1ge00_4", Hm = "_bare_1ge00_12", ps = {
  body: Fm,
  bare: Hm
};
function jk({
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
const qm = "_toggle_lxnk5_1", Km = {
  toggle: qm
};
function Tk({
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
      className: [Km.toggle, n].filter(Boolean).join(" "),
      ...i,
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
    const v = typeof d == "string", b = 2, p = 10.5, g = 2 * Math.PI * p, h = g * (l ? 0.75 : 1), _ = l ? 0 : g * (1 - u / 100), m = lr(r);
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
  const k = lr(r);
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
        s
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
const e1 = "_wrapper_tk30z_1", t1 = {
  wrapper: e1
}, n1 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Fs = "dx-palette", r1 = "data-palette";
function s1(e, t) {
  const n = e === void 0 ? Fs : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function o1(e, t) {
  const n = e === void 0 ? Fs : e;
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
  storageKey: r,
  attribute: l = r1,
  onChange: i,
  label: d = "Theme",
  placeholder: s = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, k] = W(void 0), v = t !== void 0, b = t ?? u ?? s1(r, e) ?? n, p = b ?? "", g = Q(void 0);
  fe(() => {
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
    v || (k(m), o1(r, m)), i?.(m);
  };
  return /* @__PURE__ */ M("label", { className: [t1.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ M(On, { id: a, size: c, value: p, onChange: h, children: [
      b === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      b !== void 0 && !e.includes(b) && /* @__PURE__ */ o("option", { value: b, children: b }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function l1(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Ur(e) {
  const [t, n] = W(() => l1(e));
  return fe(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const a1 = "_pressed_12x15_8", i1 = {
  pressed: a1
}, c1 = Le(
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
    variant: k,
    severity: v,
    shade: b,
    ...p
  }, g) {
    const [h, _] = W(n), m = t ?? h, w = (y) => {
      const N = !m;
      t === void 0 && _(N), r?.(N), f?.(y);
    };
    return /* @__PURE__ */ o(
      Ln,
      {
        ...p,
        ref: g,
        variant: m && l ? l : k,
        severity: m ? i : v,
        shade: m ? d : b,
        size: a,
        "aria-pressed": m,
        className: [m ? i1.pressed : null, c].filter(Boolean).join(" "),
        onClick: w,
        children: m && s !== void 0 ? s : u
      }
    );
  }
), Hs = "dx-theme";
function d1(e) {
  const t = e === void 0 ? Hs : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function u1(e, t) {
  const n = e === void 0 ? Hs : e;
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
  onChange: r,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: s
}) {
  const a = Ur("(prefers-color-scheme: dark)"), [c, f] = W(void 0), u = e !== void 0, k = e ?? c ?? d1(n) ?? t ?? "system", v = k === "system" ? a ? "dark" : "light" : k;
  return fe(() => {
    if (!u) {
      if (k === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = k;
    }
  }, [k, u]), /* @__PURE__ */ o(
    c1,
    {
      id: i,
      size: s,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: v === "dark",
      onChange: (p) => {
        const g = p ? "dark" : "light";
        u || (f(g), u1(n, g)), r?.(g);
      },
      toggleContent: /* @__PURE__ */ o(ke, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(ke, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const qs = "dx-palette", Ks = "dx-theme", Ar = "data-palette", jr = "data-theme", Tr = /* @__PURE__ */ new Set();
function f1() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Ar), t = document.documentElement.getAttribute(jr);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function Vr(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Ar) : document.documentElement.setAttribute(Ar, e.theme), e.appearance == null ? document.documentElement.removeAttribute(jr) : document.documentElement.setAttribute(jr, e.appearance));
}
function Ws(e, t) {
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
let En = null;
function Bn() {
  if (!En) {
    const e = f1(), t = ms(qs), n = ms(Ks);
    En = {
      theme: e.theme ?? t,
      appearance: e.appearance ?? (n === "light" || n === "dark" ? n : null)
    }, (En.theme != null || En.appearance != null) && Vr(En);
  }
  return En;
}
function Us() {
  const e = Bn();
  Tr.forEach((t) => t({ ...e }));
}
function gs(e) {
  return Tr.add(e), () => {
    Tr.delete(e);
  };
}
function Bk() {
  return Bn().theme;
}
function _1(e) {
  const t = Bn();
  t.theme !== e && (t.theme = e, Vr(t), Ws(qs, e), Us());
}
function Fk() {
  return Bn().appearance;
}
function h1(e) {
  const t = Bn();
  t.appearance !== e && (t.appearance = e, Vr(t), Ws(Ks, e), Us());
}
function Hk() {
  const [, e] = W(0);
  fe(() => gs(() => e((n) => n + 1)), []);
  const t = Bn();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: _1,
    setAppearance: h1,
    subscribe: gs
  };
}
function p1(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (p, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), a = (p, g) => p + g | 0, c = (p, g) => p << g | p >>> 32 - g;
  let f = 1732584193, u = 4023233417, k = 2562383102, v = 271733878;
  for (let p = 0; p < r; p += 64) {
    const g = [];
    for (let y = 0; y < 16; y += 1)
      g.push(i.getUint32(p + y * 4, !0));
    let h = f, _ = u, m = k, w = v;
    for (let y = 0; y < 64; y += 1) {
      let N, $;
      y < 16 ? (N = _ & m | ~_ & w, $ = y) : y < 32 ? (N = w & _ | ~w & m, $ = (5 * y + 1) % 16) : y < 48 ? (N = _ ^ m ^ w, $ = (3 * y + 5) % 16) : (N = m ^ (_ | ~w), $ = 7 * y % 16), N = a(a(a(N, h), s[y]), g[$]), h = w, w = m, m = _, _ = a(_, c(N, d[Math.floor(y / 16) * 4 + y % 4]));
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
}, br = [
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
  return br[t % br.length] ?? br[0];
}
function qk({
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
  const c = be(() => e ? D1(e) : "?", [e]), f = be(() => e ? E1(e) : br[0], [e]), u = be(() => {
    if (t != null || n == null) return;
    const w = n.trim().toLowerCase();
    return w === "" ? void 0 : `https://secure.gravatar.com/avatar/${p1(w)}?d=${r}&s=${C1[d]}&r=${l}`;
  }, [t, n, r, l, d]), k = t ?? u, [v, b] = W(null), p = k != null && v !== k, g = p && i === "", h = i ?? e ?? "avatar", _ = s ? `${h}, ${s}` : h, m = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: zn.image,
        src: k,
        alt: g ? "" : s ? _ : h,
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
        s ? zn[s] : null,
        a
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        m,
        s && /* @__PURE__ */ o("span", { className: zn.status, "aria-hidden": "true" })
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
  onChange: r,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const s = Pe(), a = Q(null), [c, f] = W(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, k = i === "left" || i === "right", v = (g) => {
    f(g), r?.(g);
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
                  id: `${s}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": h,
                  "aria-controls": `${s}-panel-${g.key}`,
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
  defaultValue: r,
  onChange: l,
  className: i
}) {
  const d = Pe(), [s, a] = W(
    r ?? []
  ), c = n ?? s, f = (u) => {
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
const Z1 = "_textarea_l7fsl_1", J1 = "_invalid_l7fsl_27", Q1 = "_xs_l7fsl_34", eg = "_sm_l7fsl_39", tg = "_md_l7fsl_44", ng = "_lg_l7fsl_49", rg = "_xl_l7fsl_54", fr = {
  textarea: Z1,
  invalid: J1,
  xs: Q1,
  sm: eg,
  md: tg,
  lg: ng,
  xl: rg,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, Uk = Le(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          fr.textarea,
          fr[t],
          fr[`resize-${n}`],
          r ? fr.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), sg = "_root_xyp2i_1", og = "_trigger_xyp2i_9", lg = "_invalid_xyp2i_40", ag = "_placeholder_xyp2i_47", ig = "_label_xyp2i_54", cg = "_chevron_xyp2i_60", dg = "_chevronOpen_xyp2i_70", ug = "_menu_xyp2i_74", fg = "_option_xyp2i_89", _g = "_disabled_xyp2i_100", hg = "_active_xyp2i_104", pg = "_selected_xyp2i_105", mg = "_header_xyp2i_115", gg = "_xs_xyp2i_122", bg = "_sm_xyp2i_128", yg = "_md_xyp2i_134", xg = "_lg_xyp2i_140", vg = "_xl_xyp2i_146", pt = {
  root: sg,
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
  onChange: r,
  placeholder: l = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: s = !1,
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
    if (s) return;
    const x = w >= 0 && m.includes(w) ? w : m[0];
    N(x ?? -1), h(!0);
  }, [s, w, m]), C = R(() => {
    h(!1), v.current?.focus();
  }, []);
  fe(() => {
    if (!g) return;
    const x = (S) => {
      k.current && !k.current.contains(S.target) && h(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [g]);
  const E = (x) => {
    p(x), r?.(x), h(!1), v.current?.focus();
  }, D = (x) => {
    if (m.length === 0) return;
    const S = m.includes(y) ? m.indexOf(y) : 0, T = m[(S + x + m.length) % m.length];
    T != null && N(T);
  }, z = (x) => {
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
        x.preventDefault(), y >= 0 && e[y] && m.includes(y) && E(e[y]?.value ?? "");
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
      onKeyDown: z,
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
            disabled: s,
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
                  style: { backgroundImage: kg },
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
                    x.disabled || E(x.value);
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
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: s = !1,
  disabled: a = !1,
  filter: c = Lg,
  className: f,
  ...u
}) {
  const k = Pe(), v = `${k}-listbox`, b = Q(null), p = Q(null), [g, h] = W(n), [_, m] = W(!1), w = t ?? g, y = be(
    () => w.trim() === "" ? [...e] : e.filter((A) => c(A, w)),
    [e, w, c]
  ), N = y.map((A, F) => A.disabled ? -1 : F).filter((A) => A >= 0), [$, C] = W(-1), E = (A) => {
    h(A), r?.(A);
  }, D = (A) => {
    E(A.label), l?.(A.value, A), m(!1);
  }, z = (A) => {
    if (N.length === 0) return;
    const F = N.includes($) ? N.indexOf($) : A === 1 ? -1 : 0, L = N[(F + A + N.length) % N.length];
    L != null && C(L);
  }, O = (A) => {
    a || (E(A.target.value), m(!0), C(-1));
  }, x = () => {
    a || w !== "" && m(!0);
  }, S = (A) => {
    b.current && !b.current.contains(A.relatedTarget) && m(!1);
  }, T = (A) => {
    if (!a)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), _ ? z(1) : (m(!0), C(N[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), _ && z(-1);
          break;
        case "Enter":
          A.preventDefault(), _ && $ >= 0 && y[$] && D(y[$]);
          break;
        case "Escape":
          A.preventDefault(), m(!1);
          break;
        case "Tab":
          _ && $ >= 0 && y[$] && D(y[$]), m(!1);
          break;
      }
  }, j = () => {
    E(""), C(-1), m(!0), p.current?.focus();
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
            className: [It.wrap, It[d], s ? It.invalid : null].filter(Boolean).join(" "),
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
                  "aria-invalid": s || void 0,
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
                  onClick: j,
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
        ) : /* @__PURE__ */ o("div", { id: v, role: "listbox", className: It.menu, children: y.map((A, F) => /* @__PURE__ */ o(
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
const Rg = "_box_muvqe_1", Bg = "_option_muvqe_12", Fg = "_disabled_muvqe_23", Hg = "_selected_muvqe_27", qg = "_active_muvqe_33", Zn = {
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
  multiple: r = !1,
  onChange: l,
  className: i,
  style: d,
  ...s
}) {
  const a = Pe(), [c, f] = W(() => {
    const y = n;
    return y == null ? [] : Array.isArray(y) ? [...y] : [y];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], k = e.findIndex((y) => !y.disabled), [v, b] = W(
    () => k >= 0 ? k : 0
  ), p = Q(""), g = Q(null), h = (y) => {
    f(y), l?.(r ? y : y[0] ?? "");
  }, _ = e.map((y, N) => y.disabled ? -1 : N).filter((y) => y >= 0), m = (y) => {
    const N = e[y];
    if (!(!N || N.disabled))
      if (b(y), r) {
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
      const E = [..._, ..._], D = _.indexOf(N) + 1, z = E.slice(D).find((O) => e[O]?.label.toLowerCase().startsWith(C));
      z != null && b(z);
      return;
    }
    $ >= 0 && (y.preventDefault(), b($), r || h([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[v] ? `${a}-option-${v}` : void 0,
      style: d,
      className: [Zn.box, i].filter(Boolean).join(" "),
      onKeyDown: w,
      ...s,
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
              Zn.option,
              $ ? Zn.selected : null,
              C ? Zn.active : null,
              y.disabled ? Zn.disabled : null
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
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [s, a] = W(() => [
    ...n
  ]), c = t ?? s, f = (u, k) => {
    const v = k ? [...c, u] : c.filter((b) => b !== u);
    a(v), r?.(v);
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
const Zg = "_group_46668_1", Jg = "_legend_46668_8", Qg = "_list_46668_16", e0 = "_item_46668_25", t0 = "_disabled_46668_32", n0 = "_label_46668_37", r0 = "_radio_46668_48", vn = {
  group: Zg,
  legend: Jg,
  list: Qg,
  item: e0,
  disabled: t0,
  label: n0,
  radio: r0
};
function Zk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [s, a] = W(
    n
  ), c = t ?? s, f = (u) => {
    a(u), r?.(u);
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
const s0 = "_bar_9zyxn_1", o0 = "_vertical_9zyxn_12", l0 = "_option_9zyxn_17", a0 = "_selected_9zyxn_40", i0 = "_sm_9zyxn_56", c0 = "_md_9zyxn_62", d0 = "_lg_9zyxn_68", Mn = {
  bar: s0,
  vertical: o0,
  option: l0,
  selected: a0,
  sm: i0,
  md: c0,
  lg: d0
};
function bs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Jk(e) {
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
  } = e, f = l ?? !1, [u, k] = W(r ?? (f ? [] : t[0]?.value)), v = n ?? u, b = l === !0 || l === void 0 && Array.isArray(v), p = (h) => {
    if (!b) {
      k(h), d?.(h);
      return;
    }
    const _ = bs(v), m = _.includes(h) ? _.filter((w) => w !== h) : [..._, h];
    k(m), d?.(m);
  }, g = (h) => b ? bs(v).includes(h) : v === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        Mn.bar,
        Mn[s],
        i === "vertical" ? Mn.vertical : null,
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
const u0 = "_root_11hdr_1", f0 = "_action_11hdr_10", _0 = "_caret_11hdr_15", h0 = "_sm_11hdr_49", p0 = "_md_11hdr_53", m0 = "_lg_11hdr_57", g0 = "_fullWidth_11hdr_62", b0 = "_menu_11hdr_70", y0 = "_item_11hdr_83", x0 = "_itemIcon_11hdr_105", v0 = "_disabled_11hdr_110", k0 = "_active_11hdr_114", w0 = "_danger_11hdr_123", Lt = {
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
    items: r = [],
    severity: l = "primary",
    variant: i = "filled",
    shade: d = "default",
    size: s = "md",
    loading: a = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: k,
    "aria-label": v,
    openAriaLabel: b = "More actions",
    ...p
  }, g) {
    const _ = `${Pe()}-menu`, m = Q(null), w = Q(null), y = Q([]), [N, $] = W(!1), [C, E] = W(-1), D = u || a, z = be(
      () => r.map((L, V) => L.disabled ? -1 : V).filter((L) => L >= 0),
      [r]
    ), O = R(() => {
      D || (E(z[0] ?? -1), $(!0));
    }, [D, z]), x = R(() => {
      $(!1), w.current?.focus();
    }, []);
    fe(() => {
      if (!N) return;
      const L = (V) => {
        m.current && !m.current.contains(V.target) && $(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [N]), fe(() => {
      N && (D || !c) && $(!1);
    }, [N, D, c]);
    const S = Q(N);
    if (fe(() => {
      const L = S.current;
      if (S.current = N, !N || L) return;
      const V = z.includes(C) ? C : z[0] ?? -1;
      V >= 0 && y.current[V]?.focus();
    }, [N, C, z]), c === !1) return null;
    const T = (L) => {
      const V = r[L];
      !V || V.disabled || (V.onClick?.(), $(!1), w.current?.focus());
    }, j = (L) => {
      if (z.length === 0) return;
      const V = z.includes(C) ? z.indexOf(C) : L === 1 ? -1 : 0, ee = z[(V + L + z.length) % z.length];
      ee != null && (E(ee), y.current[ee]?.focus());
    }, A = (L) => {
      const V = L === "first" ? z[0] : z[z.length - 1];
      V != null && (E(V), y.current[V]?.focus());
    }, F = (L) => {
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), j(1);
          break;
        case "ArrowUp":
          L.preventDefault(), j(-1);
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (L) => {
          m.current = L, typeof g == "function" ? g(L) : g && (g.current = L);
        },
        className: [
          Lt.root,
          Lt[s],
          f ? Lt.fullWidth : null,
          k
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            Ln,
            {
              className: Lt.action,
              variant: i,
              severity: l,
              shade: d,
              size: s,
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
            Ln,
            {
              ref: w,
              className: Lt.caret,
              variant: i,
              severity: l,
              shade: d,
              size: s,
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
              children: r.map((L, V) => /* @__PURE__ */ M(
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
                    L.disabled || E(V);
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
), $0 = "_wrapper_1ulz6_1", N0 = "_input_1ulz6_8", O0 = "_invalid_1ulz6_38", S0 = "_toggle_1ulz6_45", C0 = "_xs_1ulz6_80", D0 = "_sm_1ulz6_86", E0 = "_md_1ulz6_92", z0 = "_lg_1ulz6_98", M0 = "_xl_1ulz6_104", Jn = {
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
    className: r,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...s
  }, a) {
    const [c, f] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Jn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Jn.input,
              Jn[t],
              n ? Jn.invalid : null,
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
            className: Jn.toggle,
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
), I0 = "_mask_rcv90_1", A0 = "_invalid_rcv90_31", j0 = "_xs_rcv90_38", T0 = "_sm_rcv90_44", P0 = "_md_rcv90_50", L0 = "_lg_rcv90_56", R0 = "_xl_rcv90_62", Dr = {
  mask: I0,
  invalid: A0,
  xs: j0,
  sm: T0,
  md: P0,
  lg: L0,
  xl: R0
};
function ys(e, t) {
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
const tw = Le(function({
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
  const [u, k] = W(i ?? ""), v = l !== void 0, b = v ? l ?? "" : u, p = (_) => {
    const m = ys(_, r);
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
            p(ys(y.slice(0, -1), r));
          }
        }
        a?.(_);
      },
      className: [
        Dr.mask,
        Dr[t],
        n ? Dr.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
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
function Pr(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Z0(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Vs(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function J0(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Q0(e, t, n, r, l) {
  const d = Pr(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = d + t * l : t > 0 ? s = n + Math.ceil((d - n + 1e-9) / l) * l : s = n + Math.floor((d - n - 1e-9) / l) * l, Vs(s, n, r);
}
const nw = Le(
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
    decrementLabel: k = "Decrement",
    onBlur: v,
    onKeyDown: b,
    ...p
  }, g) {
    const [h, _] = W(
      d != null ? String(d) : ""
    ), m = i !== void 0, w = m ? i == null ? "" : String(i) : h, y = (z) => {
      m || _(z), s?.(Pr(z));
    }, N = (z) => {
      m || _(String(z)), s?.(z);
    }, $ = (z) => {
      l || N(Q0(w, z, a, c, f));
    }, C = (z) => {
      y(Z0(z.target.value));
    }, E = (z) => {
      z.key === "ArrowUp" ? (z.preventDefault(), $(1)) : z.key === "ArrowDown" && (z.preventDefault(), $(-1)), b?.(z);
    }, D = (z) => {
      const O = Pr(w);
      O === null ? (m || _(""), s?.(null)) : N(Vs(J0(O, a, f), a, c)), v?.(z);
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
            onKeyDown: E,
            onBlur: D,
            className: [
              un.input,
              un[t],
              n ? un.invalid : null,
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
function Lr(e) {
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
function tb({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function nb({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, i = n / 255, d = Math.max(r, l, i), s = Math.min(r, l, i), a = d - s;
  let c = 0;
  return a !== 0 && (d === r ? c = (l - i) / a % 6 : d === l ? c = (i - r) / a + 2 : c = (r - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function In({ h: e, s: t, v: n }) {
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
function rb(e) {
  const t = Lr(e);
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
function xs({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const rw = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = eb,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: s = !1,
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
    () => rb(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, D] = W(!1), [z, O] = W(null), x = z ?? C, S = be(() => nb(x), [x]), T = R(
    (G) => {
      const I = xs(G);
      v?.(I), b?.(I);
    },
    [v, b]
  ), j = R(
    (G, I) => {
      O(G), I && !i && T(G);
    },
    [i, T]
  ), A = R(() => {
    D(!1), O(null), g?.(), _.current?.focus();
  }, [g]), F = R(() => {
    s || (O(C), D(!0), p?.());
  }, [s, C, p]), L = R(() => {
    E ? A() : F();
  }, [E, A, F]), V = R(
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
    if (s) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "sat";
    const I = V(G.clientX, G.clientY);
    j({ ...In(I), a: x.a }, !0);
  }, me = (G) => {
    if ($.current !== "sat") return;
    G.preventDefault();
    const I = V(G.clientX, G.clientY);
    j({ ...In(I), a: x.a }, !0);
  }, de = (G) => {
    if (s) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "hue";
    const I = ee(G.clientX, w.current);
    j(
      { ...In({ ...S, h: I * 360 }), a: x.a },
      !0
    );
  }, se = (G) => {
    if ($.current !== "hue") return;
    G.preventDefault();
    const I = ee(G.clientX, w.current);
    j(
      { ...In({ ...S, h: I * 360 }), a: x.a },
      !0
    );
  }, q = (G) => {
    if (s) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "alpha";
    const I = ee(G.clientX, y.current);
    j({ ...x, a: I }, !0);
  }, ie = (G) => {
    if ($.current !== "alpha") return;
    G.preventDefault();
    const I = ee(G.clientX, y.current);
    j({ ...x, a: I }, !0);
  }, re = () => {
    $.current = null;
  }, ue = R(
    (G, I) => {
      const U = {
        h: S.h,
        s: Dt(S.s + G, 0, 1),
        v: Dt(S.v + I, 0, 1)
      };
      j({ ...In(U), a: x.a }, !0);
    },
    [S, x.a, j]
  ), oe = R(
    (G) => {
      const I = (S.h + G + 360) % 360;
      j({ ...In({ ...S, h: I }), a: x.a }, !0);
    },
    [S, x.a, j]
  ), $e = R(
    (G) => {
      j({ ...x, a: Dt(x.a + G, 0, 1) }, !0);
    },
    [x, j]
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
      const te = Lr(I);
      te && j({ ...te, a: x.a }, !0);
      return;
    }
    const U = I.replace(/[^\d.]/g, ""), Z = Number.parseFloat(U);
    if (Number.isNaN(Z)) return;
    if (G === "a") {
      const te = U.includes(".") ? Dt(Z, 0, 1) : Dt(Z / 100, 0, 1);
      j({ ...x, a: te }, !0);
      return;
    }
    const he = { r: 255, g: 255, b: 255 };
    j(
      { ...x, [G]: Dt(Z, 0, he[G]) },
      !0
    );
  }, Be = () => {
    z && (T(z), O(null), D(!1), g?.(), _.current?.focus());
  };
  fe(() => {
    if (!E) return;
    const G = (I) => {
      h.current && !h.current.contains(I.target) && A();
    };
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, [E, A]), fe(() => {
    if (!E) return;
    const G = (I) => {
      I.key === "Escape" && A();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [E, A]);
  const we = f === "xs" ? Ne["dx-colorpicker-trigger-xs"] : f === "sm" ? Ne["dx-colorpicker-trigger-sm"] : f === "lg" ? Ne["dx-colorpicker-trigger-lg"] : f === "xl" ? Ne["dx-colorpicker-trigger-xl"] : Ne["dx-colorpicker-trigger"], ot = xs(x), nt = tb(x), Ze = { x: S.s * 100, y: (1 - S.v) * 100 }, Nt = S.h / 360 * 100, bt = x.a * 100, lt = /* @__PURE__ */ M("div", { className: Ne["dx-colorpicker-panel"], children: [
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
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Ne["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
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
        ref: w,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Ne["dx-hue-picker"],
        onKeyDown: (G) => Ye(G, "hue"),
        onPointerDown: de,
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
        ref: y,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(bt),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Ne["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (G) => Ye(G, "alpha"),
        onPointerDown: q,
        onPointerMove: ie,
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
            value: nt,
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
          const I = Lr(G);
          i ? j({ ...I, a: x.a }, !1) : (O(null), T({ ...I, a: x.a }), D(!1), g?.(), _.current?.focus());
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
        E ? Ne["dx-colorpicker-open"] : null,
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
            "aria-expanded": E,
            "aria-controls": N,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: u,
            onClick: L,
            onKeyDown: (G) => {
              G.key === "Escape" && E && (G.preventDefault(), A());
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
        E && /* @__PURE__ */ o(
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
}, sb = 42;
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
function Rr(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, r - 1, l, i, d, s);
  return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== l ? null : { year: n, month: r, day: l, hour: i, minute: d, second: s };
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
function _r(e, t) {
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
function vs(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ks = {
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
function hr(e, t, n) {
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
    for (const a of lb)
      if (t.startsWith(a, i)) {
        l += ks[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const s = t[i];
    if (ab.includes(s)) {
      l += ks[s](e, r, n), i += 1;
      continue;
    }
    l += s, i += 1;
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
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let s = null;
    for (const a of ib)
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
function Qn(e, t) {
  const n = Rr(e);
  return n || cb(e, t);
}
function db(e, t, n) {
  return t && $t(e) < $t(t) ? t : n && $t(e) > $t(n) ? n : e;
}
const ub = ["hour", "minute", "second"];
function pr(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const sw = Le(
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
    className: E,
    onBlur: D,
    onKeyDown: z,
    ...O
  }, x) {
    const S = Q(null), T = Q(null), j = Q(null), A = Q(null), F = Pe(), L = r !== void 0, [V, ee] = W(
      () => l != null ? hr(
        Qn(l, i) ?? fn(),
        i,
        v
      ) : ""
    ), [Y, me] = W(!1), [de, se] = W(null), [q, ie] = W(() => {
      const K = r !== void 0 ? r ?? "" : l ?? "";
      if (K) {
        const le = Qn(K, i);
        if (le) return le;
      }
      return fn();
    }), re = be(() => d ? Rr(d) : null, [d]), ue = be(() => s ? Rr(s) : null, [s]), oe = be(
      () => new Set(k ?? []),
      [k]
    ), $e = be(() => {
      const K = L ? r ?? "" : V;
      return K ? Qn(K, i) : null;
    }, [r, V, L, i]), Oe = R(
      (K) => {
        const le = $t(K);
        return !!(oe.has(le) || re && le < $t(re) || ue && le > $t(ue));
      },
      [oe, re, ue]
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
        L || ee(K ? hr(K, i, v) : "");
        const le = K ? ob(K, a) : "";
        b?.(le), p?.(le);
      },
      [L, i, v, a, b, p]
    ), Be = R(
      (K) => {
        T.current = K, typeof x == "function" ? x(K) : x && (x.current = K);
      },
      [x]
    ), we = R(() => {
      me(!1), se(null), h?.(), u || j.current?.focus();
    }, [u, h]), ot = R(() => {
      if (_) return;
      const K = $e ?? fn();
      se(K), ie(Ye(K)), me(!0), g?.();
    }, [_, $e, Ye, g]), nt = R(() => {
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
        se(Te), a || (ve(Te), we());
      },
      [Oe, de, $e, a, ve, we]
    ), bt = R(
      (K, le) => {
        se((Ie) => {
          const Te = Ie ?? $e ?? fn(), st = Math.min(K === "hour" ? 23 : 59, Math.max(0, Te[K] + le));
          return { ...Te, [K]: st };
        });
      },
      [$e]
    ), lt = R(
      (K, le) => {
        const Ie = le.replace(/\D/g, ""), Te = Ie === "" ? 0 : Number(Ie), Ft = K === "hour" ? 23 : 59;
        se((st) => ({ ...st ?? $e ?? fn(), [K]: Math.min(Ft, Te) }));
      },
      [$e]
    ), G = R(() => {
      de && (ve(de), we());
    }, [de, ve, we]), I = R(() => {
      if (Y) return;
      const K = Qn(V, i);
      ve(K ? db(K, re, ue) : null);
    }, [Y, V, i, re, ue, ve]), U = (K) => {
      const le = K.target.value;
      L || ee(le), Y && se(null);
    }, Z = (K) => {
      K.key === "Enter" ? (K.preventDefault(), Y ? de && (ve(de), we()) : I()) : K.key === "Escape" ? Y && (K.preventDefault(), we()) : K.key === "ArrowDown" && !Y ? (K.preventDefault(), ot()) : K.key === "Tab" && Y && me(!1), z?.(K);
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
          le = tn(q, -vs(q)), K.preventDefault();
          break;
        case "End":
          le = tn(q, 6 - vs(q)), K.preventDefault();
          break;
        case "PageUp":
          le = _r(q, K.shiftKey ? -12 : -1), K.preventDefault();
          break;
        case "PageDown":
          le = _r(q, K.shiftKey ? 12 : 1), K.preventDefault();
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
      L || ee(""), b?.(""), p?.(""), T.current?.focus();
    }, Ee = Y && de ? hr(de, i, v) : L ? r ? hr(
      Qn(r, i) ?? fn(),
      i,
      v
    ) : "" : V, Fe = L ? !!r : V.length > 0, He = u || Y, rt = { year: q.year, month: q.month }, on = new Date(rt.year, rt.month - 1, 1).getDay(), J = {
      year: rt.year,
      month: rt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let K = 0; K < sb; K += 1)
      Se.push(tn(J, K - on));
    const dt = de ? $t(de) : $e ? $t($e) : null, zt = $t(fn()), ut = `${rt.year}-${Et(rt.month)}`, Ce = be(
      () => new Intl.DateTimeFormat(v, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [v]
    ), je = new Intl.DateTimeFormat(v, {
      month: "long",
      year: "numeric"
    }).format(new Date(rt.year, rt.month - 1, 1)), Mt = Array.from(
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
                  const K = Ye(_r(q, -1));
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
                  const K = Ye(_r(q, 1));
                  ie(K), setTimeout(() => Ze(K), 0);
                },
                children: /* @__PURE__ */ o(ke, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
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
                            Te === zt ? De["dx-datepicker-day--today"] : null,
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
            ub.map((K) => /* @__PURE__ */ M("label", { className: De["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: De["dx-datepicker-time-label"], children: pr(K) }),
              /* @__PURE__ */ M("div", { className: De["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: De["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": pr(K),
                    value: Et(
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
                      "aria-label": `Increase ${pr(K).toLowerCase()}`,
                      onClick: () => bt(K, 1),
                      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${pr(K).toLowerCase()}`,
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
          E
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ M(tt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Be,
                type: "text",
                autoComplete: "off",
                value: Ee,
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
                  c || nt();
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
                ref: j,
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
}, ow = ({
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
      n || r || (b(_), k(_));
    },
    [n, r, b]
  ), g = (_) => {
    if (n || r) return;
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
        r ? _n["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: _n["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
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
              tabIndex: w ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
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
const lw = ({
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
    () => Ut(N, r, l),
    [N, r, l]
  ), C = be(
    () => Ut(d ? t : $, r, l),
    [d, t, $, r, l]
  ), E = be(
    () => Ut(d ? Math.max(n, C) : $, r, l),
    [d, n, C, $, r, l]
  ), D = R(
    (q) => {
      const ie = l - r;
      return ie <= 0 ? 0 : (Ut(q, r, l) - r) / ie * 100;
    },
    [r, l]
  ), z = R(
    (q, ie) => {
      const re = _.current;
      if (!re) return r;
      const ue = re.getBoundingClientRect();
      let oe;
      s === "vertical" ? oe = 1 - (ie - ue.top) / ue.height : oe = (q - ue.left) / ue.width;
      const $e = r + Ut(oe, 0, 1) * (l - r);
      return i > 0 ? Ut(Math.round($e / i) * i, r, l) : Ut($e, r, l);
    },
    [r, l, i, s]
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
    (q, ie, re) => {
      const ue = z(ie, re);
      let oe;
      d ? q === "min" ? oe = { min: Math.min(ue, E), max: E } : oe = { min: C, max: Math.max(ue, C) } : oe = ue, x(oe), m.current === null && O(oe);
    },
    [d, z, C, E, x, O]
  ), T = R(
    (q, ie) => {
      const re = (i > 0 ? i : 1) * ie;
      let ue;
      d ? q === "min" ? ue = {
        min: Ut(C + re, r, E),
        max: E
      } : ue = {
        min: C,
        max: Ut(E + re, C, l)
      } : ue = Ut($ + re, r, l), O(ue);
    },
    [d, i, r, l, C, E, $, O]
  ), j = (q, ie) => {
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
          ie.preventDefault(), O(d ? q === "min" ? { min: r, max: E } : { min: C, max: C } : r);
          break;
        case "End":
          ie.preventDefault(), O(d ? q === "min" ? { min: E, max: E } : { min: C, max: l } : l);
          break;
      }
  }, A = (q, ie) => {
    a || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), m.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, F = (q) => {
    !m.current || m.current.pointerId !== q.pointerId || (q.preventDefault(), S(m.current.key, q.clientX, q.clientY));
  }, L = (q) => {
    !m.current || m.current.pointerId !== q.pointerId || (m.current = null, q.preventDefault(), O(d ? { min: C, max: E } : $));
  }, [V, ee] = W(null), Y = D(C), me = D(E), de = d ? Y : 0, se = me;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        kn["dx-slider"],
        s === "vertical" ? kn["dx-slider-vertical"] : null,
        a ? kn["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: _, className: kn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: kn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${de}%`, height: `${se - de}%` } : { left: `${de}%`, width: `${se - de}%` }
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
            tabIndex: a || d && V === "max" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${Y}% - 8px)` } : { left: `calc(${Y}% - 8px)` },
            onKeyDown: (q) => j("min", q),
            onPointerDown: (q) => A("min", q),
            onPointerMove: F,
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
            "aria-valuenow": Math.round(E),
            "aria-orientation": s,
            "aria-label": u,
            "aria-disabled": a || void 0,
            tabIndex: a || V === "min" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${me}% - 8px)` } : { left: `calc(${me}% - 8px)` },
            onKeyDown: (q) => j("max", q),
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
}, fb = "-10675199.02:48:05.4775808", _b = "10675199.02:48:05.4775808", rn = 86400, sn = 3600, Rt = 60, Er = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, ws = {
  days: rn,
  hours: sn,
  minutes: Rt,
  seconds: 1
}, hb = {
  day: rn,
  hour: sn,
  minute: Rt,
  second: 1
};
function An(e) {
  return String(e).padStart(2, "0");
}
function or(e) {
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
    return n * (s * rn + a * sn + c * Rt + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || a > 59 || c > 59 ? null : n * (d * rn + s * sn + a * Rt + c + f);
  }
  return null;
}
function pb(e) {
  return e.days * rn + e.hours * sn + e.minutes * Rt + e.seconds;
}
function $s(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / rn);
  t %= rn;
  const r = Math.floor(t / sn);
  t %= sn;
  const l = Math.floor(t / Rt), i = Math.round(t % Rt * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Br(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / Rt) * Rt : t === "hour" ? r = Math.round(r / sn) * sn : t === "day" && (r = Math.round(r / rn) * rn);
  let l = Math.round(r % Rt);
  const i = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / Rt) + i, s = d % 60, a = Math.floor(d / 60), c = a % 24, f = Math.floor(a / 24), u = n ? "-" : "", k = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${k}${An(c)}`;
    case "minute":
      return `${u}${k}${An(c)}:${An(s)}`;
    default:
      return `${u}${k}${An(c)}:${An(s)}:${An(l)}`;
  }
}
function Ns(e, t = "second") {
  const n = or(e);
  return n === null ? "" : Br(n, t);
}
function zr(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const aw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = fb,
    max: d = _b,
    step: s = "1",
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
    className: E,
    onBlur: D,
    onKeyDown: z,
    ...O
  }, x) {
    const S = Q(null), T = Q(null), j = Q(null), A = Pe(), F = r !== void 0, [L, V] = W(
      () => l != null ? Ns(l, a) : ""
    ), [ee, Y] = W(!1), [me, de] = W(null), [se, q] = W(null), ie = be(
      () => or(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), re = be(
      () => or(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ue = be(() => {
      const J = Number.parseFloat(s);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [s]), oe = be(() => {
      const J = F ? r ?? "" : L;
      return J ? or(J) : null;
    }, [r, L, F]), $e = R(
      (J) => {
        const Se = J === null ? "" : Br(J, a);
        F || V(Se), p?.(Se), g?.(Se);
      },
      [F, a, p, g]
    ), Oe = R(
      (J) => {
        J && me !== null && $e(me), Y(!1), de(null), q(null), _?.(), b || j.current?.focus();
      },
      [b, me, $e, _]
    ), Ye = R(() => {
      m || (de(oe ?? 0), Y(!0), h?.());
    }, [m, oe, h]), ve = R(() => {
      ee ? Oe(!1) : Ye();
    }, [ee, Oe, Ye]), Be = R(
      (J, Se) => {
        de((dt) => {
          const ut = (dt ?? oe ?? 0) + Se * ue * ws[J];
          return zr(ut, ie, re);
        });
      },
      [oe, ue, ie, re]
    ), we = R(
      (J) => {
        const Se = se?.[J];
        if (Se == null) return;
        const dt = Number.parseFloat(Se), zt = Number.isNaN(dt) ? 0 : dt;
        de((ut) => {
          const Ce = ut ?? oe ?? 0, je = $s(Ce);
          je[J] = zt;
          const yt = (Ce < 0 ? -1 : 1) * pb(je);
          return zr(yt, ie, re);
        }), q(null);
      },
      [se, oe, ie, re]
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
          Se.preventDefault(), we(J), de(re);
          break;
        case "Enter":
          Se.preventDefault(), we(J), Oe(!0);
          break;
      }
    }, Ze = R(() => {
      if (ee) return;
      const J = or(L);
      $e(J !== null ? zr(J, ie, re) : null);
    }, [ee, L, ie, re, $e]), Nt = (J) => {
      F || V(J.target.value);
    }, bt = (J) => {
      J.key === "Enter" ? (J.preventDefault(), ee ? Oe(!0) : Ze()) : J.key === "Escape" && ee ? (J.preventDefault(), Oe(!1)) : J.key === "ArrowDown" && !ee ? (J.preventDefault(), Ye()) : J.key === "Tab" && ee && Y(!1), z?.(J);
    }, lt = (J) => {
      Ze(), D?.(J);
    }, G = () => {
      F || V(""), p?.(""), g?.(""), T.current?.focus();
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
    ), U = F ? r ? Ns(r, a) : "" : L, Z = F ? !!r : L.length > 0, he = b || ee, te = me ?? oe ?? 0, ye = $s(te), Ee = hb[a], He = ["days", "hours", "minutes", "seconds"].filter(
      (J) => ws[J] >= Ee && (J === "days" ? c : J === "hours" ? f : J === "minutes" ? u : k)
    ), rt = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], on = /* @__PURE__ */ M("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: Br(te, a) }),
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-units"], children: He.map((J) => /* @__PURE__ */ M("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: qe["dx-timespanpicker-unit-label"], children: Er[J] }),
        /* @__PURE__ */ M("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: se?.[J] ?? String(ye[J]),
              onChange: (Se) => ot(J, Se.target.value),
              onKeyDown: (Se) => nt(J, Se),
              onBlur: () => we(J)
            }
          ),
          /* @__PURE__ */ M("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Er[J].toLowerCase()}`,
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
                "aria-label": `Decrease ${Er[J].toLowerCase()}`,
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
          E
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ M(tt, { children: [
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
                "aria-controls": A,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  rt,
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
                ref: j,
                type: "button",
                className: [qe["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": N ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": A,
                disabled: m,
                onClick: ve,
                children: /* @__PURE__ */ o(ke, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          he && /* @__PURE__ */ o(
            "div",
            {
              id: A,
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
function Os(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const iw = Le(
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
    "aria-label": k
  }, v) {
    const b = Pe(), p = n !== void 0, [g, h] = W(Os(r).join("")), _ = p ? Os(n).join("") : g, m = Array.from({ length: t }, (O, x) => _[x] ?? ""), w = Q([]), [y, N] = W(""), $ = (O) => {
      p || h(O), l?.(O);
    }, C = (O) => {
      const x = w.current[O];
      x && !x.disabled && (x.focus(), x.select());
    }, E = (O, x) => {
      const S = x.replace(/\D/g, "").slice(-1), T = _.split("");
      if (S) {
        T[O] = S;
        const j = T.join("").slice(0, t);
        $(j), j.length < t ? C(O + 1) : f && N("Code complete");
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
    }, z = (O, x) => {
      x.preventDefault();
      const S = x.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const T = _.split("");
      let j = 0;
      for (let F = 0; F < S.length && O + F < t; F++)
        T[O + F] = S[F] ?? "", j++;
      const A = T.join("");
      $(A), A.length >= t ? f && N("Code complete") : C(O + j);
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
              autoFocus: s && x === 0,
              className: [
                wn.cell,
                wn[`cell-${d}`],
                i ? wn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => E(x, S.target.value),
              onKeyDown: (S) => D(x, S),
              onPaste: (S) => z(x, S),
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
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: s = "Signature",
    width: a,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, k) {
    const v = Q(null), b = Q(!1), p = Q(!1), g = Q({ x: 0, y: 0 });
    fe(() => {
      const $ = v.current;
      if (!$) return;
      const C = window.devicePixelRatio || 1, E = Math.round((a ?? $.clientWidth) * C), D = Math.round(c * C);
      ($.width !== E || $.height !== D) && ($.width = E, $.height = D);
      const z = $.getContext("2d");
      if (!z) return;
      z.setTransform(C, 0, 0, C, 0, 0), z.lineWidth = i, z.strokeStyle = l, z.lineCap = "round", z.lineJoin = "round";
      const O = t ?? n;
      if (O) {
        const x = new Image();
        x.onload = () => {
          z.drawImage(x, 0, 0, $.clientWidth, c);
        }, x.src = O;
      }
    }, [t, n, l, i, a, c]);
    const h = () => {
      const $ = v.current;
      if (!$) return;
      const C = $.toDataURL("image/png");
      r?.(C);
    }, _ = () => {
      const $ = v.current;
      if (!$) return;
      const C = $.getContext("2d");
      C && C.clearRect(0, 0, $.width, $.height), r?.("");
    };
    Kr(k, () => ({
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
      const E = m($);
      C.beginPath(), C.moveTo(g.current.x, g.current.y), C.lineTo(E.x, E.y), C.stroke(), g.current = E, p.current = !0;
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
            /* @__PURE__ */ o("span", { className: jn.label, children: s }),
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
              "aria-label": s,
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
), Sb = "_wrapper_dsvd2_1", Cb = "_trigger_dsvd2_7", Db = "_list_dsvd2_35", Eb = "_row_dsvd2_44", zb = "_name_dsvd2_59", Mb = "_size_dsvd2_68", Ib = "_progress_dsvd2_74", Ab = "_fill_dsvd2_82", jb = "_status_dsvd2_99", Tb = "_remove_dsvd2_106", Vt = {
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
function Ss(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const dw = Le(function({
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
  onComplete: k,
  onError: v
}, b) {
  const p = Q(null), [g, h] = W([]), _ = Q(/* @__PURE__ */ new Map()), m = (C, E) => {
    h(
      (D) => D.map((z) => z.file.name === C ? { ...z, ...E } : z)
    );
  }, w = (C) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    _.current.set(C.file.name, E);
    const D = new FormData();
    if (D.append(r, C.file), E.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const O = Math.round(z.loaded / z.total * 100);
      m(C.file.name, { state: "uploading", progress: O }), u?.(C.file.name, O);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (m(C.file.name, { state: "complete", progress: 100 }), k?.(C.file.name)) : (m(C.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), v?.(C.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      m(C.file.name, { state: "error", message: "Network error" }), v?.(C.file.name, "Network error");
    }), i)
      for (const [z, O] of Object.entries(i))
        E.setRequestHeader(z, O);
    E.open("POST", t), E.send(D), m(C.file.name, { state: "uploading", progress: 0 });
  }, y = (C) => {
    if (!C) return;
    const E = [...C], D = [];
    let z = Math.max(0, s - g.length);
    for (const x of E) {
      if (a != null && x.size > a) {
        v?.(
          x.name,
          `File too large (maximum ${Ss(a)})`
        );
        continue;
      }
      if (z <= 0) {
        v?.(x.name, `Too many files (maximum ${s})`);
        continue;
      }
      z -= 1, D.push(x);
    }
    const O = D.map((x) => ({
      file: x,
      state: "pending",
      progress: 0
    }));
    h((x) => [...x, ...O]), p.current && (p.current.value = ""), l && O.forEach(w);
  }, N = (C) => {
    _.current.get(C)?.abort(), _.current.delete(C), h((D) => D.filter((z) => z.file.name !== C));
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
  return Kr(b, () => ({
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
    !f && g.length > 0 && /* @__PURE__ */ o("ul", { className: Vt.list, children: g.map(({ file: C, state: E, progress: D, message: z }) => /* @__PURE__ */ M(
      "li",
      {
        className: Vt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Vt.name, children: C.name }),
          /* @__PURE__ */ o("span", { className: Vt.size, children: Ss(C.size) }),
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
          /* @__PURE__ */ o("span", { className: Vt.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? z ?? "Failed" : "Pending" }),
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
}), Pb = "_zone_nl0bz_1", Lb = "_dragging_nl0bz_23", Rb = "_caption_nl0bz_28", Bb = "_browse_nl0bz_40", Fb = "_disabled_nl0bz_67", er = {
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
      const r = n.slice(0, -1);
      return e.type.startsWith(r);
    }
    return e.type === n;
  }) : !0;
}
const uw = Le(
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
    const f = Q(null), [u, k] = W(!1), v = (_) => {
      if (!_ || _.length === 0) return;
      const m = [..._].filter((w) => Hb(w, t ?? ""));
      m.length !== 0 && r?.(m);
    }, b = (_) => {
      s || (_.preventDefault(), k(!0));
    }, p = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", k(!0));
    }, g = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || k(!1);
    }, h = (_) => {
      s || (_.preventDefault(), k(!1), v(_.dataTransfer.files));
    };
    return Kr(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": s || void 0,
        className: [
          er.zone,
          u ? er.dragging : null,
          s ? er.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: p,
        onDragLeave: g,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: er.caption, children: u ? i : l }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: er.browse,
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
), qb = "_root_1a92d_1", Kb = "_menubar_1a92d_5", Wb = "_horizontal_1a92d_15", Ub = "_vertical_1a92d_20", Vb = "_itemWrapper_1a92d_25", Gb = "_item_1a92d_25", Xb = "_disabled_1a92d_61", Yb = "_icon_1a92d_68", Zb = "_text_1a92d_75", Jb = "_caret_1a92d_79", Qb = "_hasChildren_1a92d_85", ey = "_submenu_1a92d_94", ty = "_submenuItem_1a92d_118", ny = "_flyout_1a92d_155", ry = "_hamburger_1a92d_175", sy = "_responsive_1a92d_198", oy = "_mobileOpen_1a92d_207", Ue = {
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
  hamburger: ry,
  responsive: sy,
  mobileOpen: oy
}, kr = Rn(null);
function ly(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function ay(e, t, n, r, l) {
  const [i, d] = W(n), s = e ? t ?? !1 : i, a = R(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return fe(() => {
    l > 0 && a(!1);
  }, [l]), [s, a];
}
function iy({
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
function Gs(e) {
  return gt(e) && e.type === Xs;
}
function Gr({
  itemKey: e,
  props: t
}) {
  const n = hn(kr);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: s } = t, a = be(
    () => ar.toArray(t.children).filter(gt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [k, v] = ay(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, p = Q(0), h = (b && !u ? n.openKey === e : null) ?? k, _ = R(
    (j) => {
      b && !u ? n.setOpenKey(j ? e : null) : (v(j), b && n.setOpenKey(null));
    },
    [b, u, n, e, v]
  ), [, m] = W(0);
  fe(() => {
    if (!i) return;
    const j = () => m((A) => A + 1);
    return window.addEventListener("hashchange", j), () => window.removeEventListener("hashchange", j);
  }, [i]);
  const w = i && !c ? ly(i, t.match) : !1, y = R(
    (j) => {
      if (f) {
        j.preventDefault();
        return;
      }
      const A = { text: r, value: l, path: i };
      [n.emit(A), t.onClick?.(A)].includes(!1) && j.preventDefault(), n.closeAll();
    },
    [f, r, l, i, n, t]
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
  }, [n.clickToOpen, _]), E = `${n.baseId}-submenu-${e}`, [D, z] = W(null);
  fe(() => {
    n.closeSignal > 0 && z(null);
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
      setOpenKey: z
    }),
    [n, D]
  ), x = c ? /* @__PURE__ */ o("span", { className: Ue.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    ke,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, S = s ?? /* @__PURE__ */ M(tt, { children: [
    /* @__PURE__ */ o(
      iy,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: Ue.text, children: r }),
    x
  ] });
  if (c) {
    let j = function(A) {
      const F = Array.from(A.currentTarget.children).map((ee) => ee.querySelector('[role="menuitem"]')).filter(
        (ee) => ee != null && ee.getAttribute("aria-disabled") !== "true" && !ee.hasAttribute("disabled")
      ), L = document.activeElement, V = L ? F.indexOf(L) : -1;
      A.key === "ArrowDown" ? (A.preventDefault(), A.stopPropagation(), (V === -1 ? F[0] : F[(V + 1) % F.length])?.focus()) : A.key === "ArrowUp" ? (A.preventDefault(), A.stopPropagation(), (V === -1 ? F[F.length - 1] : F[(V - 1 + F.length) % F.length])?.focus()) : A.key === "ArrowRight" ? L?.getAttribute("aria-haspopup") === "menu" && (A.preventDefault(), A.stopPropagation(), L.getAttribute("aria-expanded") !== "true" && L.click(), document.getElementById(
        L.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (A.key === "ArrowLeft" || A.key === "Escape") && (A.preventDefault(), A.stopPropagation(), _(!1));
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
              "aria-controls": E,
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
              id: E,
              role: "menu",
              "aria-label": r,
              className: [
                Ue.submenu,
                n.flyout && !b ? Ue.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: j,
              children: /* @__PURE__ */ o(kr.Provider, { value: O, children: a.map(
                (A, F) => Gs(A) ? /* @__PURE__ */ o(
                  Gr,
                  {
                    itemKey: `${e}-${F}`,
                    props: A.props
                  },
                  `${e}-${F}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(qr, { children: A }, `${e}-custom-${F}`)
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
function Xs(e) {
  if (!hn(kr)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Gr, { itemKey: e.text, props: e });
}
function cy({
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
  const u = Pe(), k = Q(null), v = Q(null), [b, p] = W(null), [g, h] = W(0), [_, m] = W(!1), w = Q(null), y = R(
    (D) => i?.(D),
    [i]
  ), N = R(() => {
    p(null), h((D) => D + 1);
  }, []);
  fe(() => {
    if (b == null) return;
    const D = (z) => {
      k.current && !k.current.contains(z.target) && N();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [b, N]), fe(() => {
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
    () => ar.toArray(e).filter(gt),
    [e]
  ), E = (D) => {
    const z = v.current;
    if (!z) return;
    const O = Array.from(z.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const T = document.getElementById(`${u}-submenu-${b}`);
      if (T) {
        const j = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (L) => L.getAttribute("aria-disabled") !== "true" && !L.hasAttribute("disabled")
        ), A = document.activeElement, F = A ? j.indexOf(A) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (F === -1 ? j[0] : j[(F + 1) % j.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (F === -1 ? j[j.length - 1] : j[(F - 1 + j.length) % j.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), N(), d?.(), z.querySelector(`[data-index="${b}"]`)?.focus();
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
        z.querySelector(
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
      const T = O.map((A) => A.textContent ?? ""), j = S === -1 ? 0 : (S + 1) % O.length;
      for (let A = 0; A < O.length; A++) {
        const F = (j + A) % O.length;
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
      "aria-label": s,
      className: [
        Ue.root,
        l ? Ue.vertical : Ue.horizontal,
        r ? Ue.responsive : null,
        r && _ ? Ue.mobileOpen : null,
        n ? Ue.flyoutRoot : null,
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
            "aria-label": s,
            className: Ue.menubar,
            onKeyDown: E,
            children: /* @__PURE__ */ o(kr.Provider, { value: $, children: C.map(
              (D, z) => Gs(D) ? /* @__PURE__ */ o(
                Gr,
                {
                  itemKey: String(z),
                  props: D.props
                },
                `top-${z}`
              ) : /* @__PURE__ */ o(qr, { children: D }, `top-custom-${z}`)
            ) })
          }
        )
      ]
    }
  );
}
const dy = "_popup_uiejp_1", uy = "_menu_uiejp_22", Fr = {
  popup: dy,
  menu: uy
}, Ys = Rn(null);
function fw() {
  const e = hn(Ys);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Zs(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ o(Xs, { ...l, children: r ? Zs(r) : void 0 }, `${t.text}-${n}`);
  });
}
function fy({ state: e, onClose: t }) {
  const n = Q(null), [r, l] = W({ left: e.x, top: e.y });
  Mr(() => {
    const d = n.current;
    if (!d) return;
    const s = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), fe(() => {
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
      className: Fr.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: Fr.menu, children: e.options.content ?? /* @__PURE__ */ o(
        cy,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Zs(e.options.items ?? [])
        }
      ) })
    }
  );
}
function _w({ children: e }) {
  const [t, n] = W(null), r = R(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (d, s) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: s });
    },
    []
  );
  fe(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Fr.popup}`);
      u && !u.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, a = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const i = be(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ M(Ys.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(fy, { state: t, onClose: r }) : null
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
}, wr = Rn(null);
function Sy() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Cy(e, t) {
  const n = Sy(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
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
function Xr({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = hn(wr);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: s } = n, a = be(
    () => ar.toArray(n.children).filter(gt),
    [n.children]
  ), c = a.length > 0, f = !!s, u = n.match ?? r.match, k = n.expanded !== void 0, [v, b] = W(
    n.defaultExpanded ?? !1
  ), p = k ? n.expanded ?? !1 : v, g = R(
    (L) => {
      k || b(L), n.onExpandedChange?.(L);
    },
    [k, n]
  );
  fe(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && g(!1);
  }, [r.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, m] = W(
    n.defaultSelected ?? !1
  ), w = !h && d ? Cy(d, u) : !1, y = n.selected ?? (h ? _ : w || _), [, N] = W(0);
  fe(() => {
    if (!d) return;
    const L = () => N((V) => V + 1);
    return window.addEventListener("hashchange", L), () => window.removeEventListener("hashchange", L);
  }, [d]);
  const $ = be(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        g(!0), r.openAncestors();
      }
    }),
    [r, g]
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
      const V = { text: l, value: i, path: d };
      [r.emit(V), n.onClick?.(V)].includes(!1) && L.preventDefault(), h || m(!0), n.onSelectedChange?.(!0);
    },
    [f, l, i, d, r, n, h]
  ), E = R(() => {
    f || (p || r.notifyOpened(e, t), g(!p));
  }, [f, p, r, e, t, g]), D = R(
    (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), c ? E() : L.target.click()) : L.key === "Escape" && p ? (L.preventDefault(), g(!1)) : L.key === "ArrowRight" && c && !p ? (L.preventDefault(), r.notifyOpened(e, t), g(!0)) : L.key === "ArrowLeft" && p && (L.preventDefault(), g(!1));
    },
    [c, E, p, g, r, e, t]
  ), z = c && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [ct.caret, p ? ct.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(ke, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, O = n.template ?? /* @__PURE__ */ M(tt, { children: [
    /* @__PURE__ */ o(
      Dy,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: ct.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: ct.text, children: l }),
    z
  ] }), x = `${r.baseId}-panel-${e}`, S = `${r.baseId}-trigger-${e}`, T = [
    ct.trigger,
    f ? ct.disabled : null,
    p ? ct.expanded : null,
    y ? ct.selected : null
  ].filter(Boolean).join(" "), j = r.level > 0 ? "menuitem" : void 0, A = c ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: j,
      "aria-expanded": p,
      "aria-controls": x,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: E,
      onKeyDown: D,
      children: O
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: S,
      role: j,
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
      role: j,
      "aria-current": y ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: T,
      onClick: C,
      onKeyDown: D,
      children: O
    }
  ), F = c ? r.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: x,
      role: "menu",
      "aria-labelledby": S,
      className: ct.submenu,
      hidden: r.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ o(wr.Provider, { value: $, children: a.map((L, V) => /* @__PURE__ */ o(
        Xr,
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
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        A,
        F
      ]
    }
  );
}
function hw(e) {
  if (!hn(wr)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(Xr, { itemKey: e.text, ancestors: [], props: e });
}
function pw({
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
      showArrow: r,
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
      r,
      i,
      l,
      u,
      b,
      p
    ]
  ), m = be(
    () => ar.toArray(e).filter(gt),
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
        a
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      ...c,
      children: /* @__PURE__ */ o("div", { className: ct.list, role: "presentation", children: /* @__PURE__ */ o(wr.Provider, { value: _, children: m.map((w, y) => /* @__PURE__ */ o(
        Xr,
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
const Ey = "_root_5numg_1", zy = "_trigger_5numg_7", My = "_defaultTrigger_5numg_40", Iy = "_avatar_5numg_46", Ay = "_menu_5numg_58", jy = "_item_5numg_74", Ty = "_disabled_5numg_88", Py = "_active_5numg_97", Ly = "_icon_5numg_107", Ry = "_text_5numg_114", Gt = {
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
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = Pe(), d = `${i}-menu`, s = Q(null), a = Q(null), [c, f] = W(!1), [u, k] = W(-1), v = t, b = e.map((y, N) => y.disabled ? -1 : N).filter((y) => y >= 0), p = R(
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
  fe(() => {
    if (!c) return;
    const y = (N) => {
      s.current && !s.current.contains(N.target) && (f(!1), k(-1));
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [c]), fe(() => {
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
      ref: s,
      className: [Gt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
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
            "aria-label": r,
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
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${Pe()}-menu`, c = Q(null), f = Q(null), [u, k] = W(!1), v = R(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      r?.(_), k(!1), f.current?.focus();
    },
    [r]
  );
  fe(() => {
    if (!u) return;
    const h = (_) => {
      c.current && !c.current.contains(_.target) && k(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [u]), fe(() => {
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
const ex = "_root_1eyur_1", tx = "_list_1eyur_5", nx = "_item_1eyur_15", rx = "_link_1eyur_22", sx = "_linkButton_1eyur_23", ox = "_current_1eyur_24", lx = "_disabled_1eyur_68", ax = "_icon_1eyur_74", ix = "_text_1eyur_81", cx = "_separator_1eyur_85", Ke = {
  root: ex,
  list: tx,
  item: nx,
  link: rx,
  linkButton: sx,
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
  className: r
}) {
  const l = t, i = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [Ke.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Ke.list, children: e.map((d, s) => {
        const a = s === e.length - 1, c = !!d.disabled;
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
        ] }, `${d.text}-${s}`);
      }) })
    }
  );
}
const dx = "_link_tmy3k_1", ux = {
  link: dx
}, yw = Le(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ M(tt, { children: [
    n != null && /* @__PURE__ */ o(ke, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [ux.link, l].filter(Boolean).join(" ");
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
  defaultIndex: r = 0,
  linear: l,
  Linear: i,
  onChange: d,
  Change: s,
  onSelectedIndexChange: a,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? i ?? !1, k = t ?? n, v = k !== void 0, [b, p] = W(() => Math.min(Math.max(0, k ?? r), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, v ? k : b),
    Math.max(0, e.length - 1)
  ), _ = Q(null), m = R(
    (N) => {
      const $ = Math.min(
        Math.max(0, N),
        Math.max(0, e.length - 1)
      );
      v || p($), (d ?? s ?? a)?.($);
    },
    [v, d, s, a, e.length]
  ), w = R(
    (N, $) => !!($.disabled || u && N > h + 1),
    [u, h]
  ), y = (N) => {
    const $ = Array.from(
      N.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), C = document.activeElement, E = C ? $.indexOf(C) : -1;
    if (N.key === "ArrowRight" || N.key === "ArrowDown") {
      if (N.preventDefault(), $.length === 0) return;
      const D = E === -1 ? 0 : (E + 1) % $.length, z = $[D];
      z && z.focus();
    } else if (N.key === "ArrowLeft" || N.key === "ArrowUp") {
      if (N.preventDefault(), $.length === 0) return;
      const D = E === -1 ? $.length - 1 : (E - 1 + $.length) % $.length, z = $[D];
      z && z.focus();
    } else N.key === "Home" ? (N.preventDefault(), $[0]?.focus()) : N.key === "End" && (N.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": c,
      className: [kt.root, f].filter(Boolean).join(" "),
      onKeyDown: y,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: kt.list, children: e.map((N, $) => {
        const C = $ === h, E = $ < h, D = w($, N);
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
                    E ? kt.connectorCompleted : null
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
                    E ? kt.completed : null,
                    D ? kt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || m($);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: kt.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ o("span", { className: kt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(ke, { icon: "check", size: "sm" }) }) : N.icon ? /* @__PURE__ */ o("span", { className: kt.icon, children: N.icon }) : /* @__PURE__ */ o("span", { className: kt.number, children: $ + 1 }) }),
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
function tr(e, t) {
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
function vw({
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
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = Q(null), k = R(() => {
    const x = n.length;
    if (x === 0) return [];
    const S = n.map((j) => j.size ? tr(j.size, 100 / x) : 100 / x), T = S.reduce((j, A) => j + A, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? S.map((j) => j / T * 100) : S;
  }, [n]), [v, b] = W(() => k()), [p, g] = W(
    () => n.map((x) => !!x.collapsed)
  ), h = Q(v);
  fe(() => {
    g(n.map((x) => !!x.collapsed));
  }, [n]);
  const _ = R(
    () => n.map((x) => tr(x.min, 0)),
    [n]
  ), m = R(
    () => n.map((x) => tr(x.max, 100)),
    [n]
  ), w = R(
    (x, S) => {
      const T = { paneIndex: x, newSize: S, cancel: !1 };
      return (r ?? l)?.(T), !T.cancel;
    },
    [r, l]
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
        const j = [...T];
        return j[x] !== void 0 && (j[x] = !0), j;
      }), b((T) => {
        const j = [...T], A = j[x] ?? 0, F = x < j.length - 1 ? x + 1 : x - 1;
        if (F >= 0 && F < j.length) {
          const L = j[F] ?? 0;
          j[F] = L + A, j[x] = 0;
        } else
          j[x] = 0;
        return j;
      })) : (g((T) => {
        const j = [...T];
        return j[x] !== void 0 && (j[x] = !1), j;
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
      const j = u.current;
      if (!j) return null;
      const A = j.getBoundingClientRect();
      let F;
      if (f) {
        if (A.width === 0) return null;
        F = (S - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        F = (T - A.top) / A.height * 100;
      }
      let L = 0;
      for (let ee = 0; ee < x; ee++) {
        const Y = v[ee];
        Y !== void 0 && (L += Y);
      }
      return F - L;
    },
    [f, v]
  ), E = (x, S) => {
    S.preventDefault();
    const T = S.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(S.pointerId), $.current = { handleIndex: x, pointerId: S.pointerId };
  }, D = (x) => {
    if (!$.current || $.current.pointerId !== x.pointerId)
      return;
    x.preventDefault();
    const S = $.current.handleIndex, T = C(S, x.clientX, x.clientY);
    if (T == null) return;
    const j = _(), A = m(), F = j[S] ?? 0, L = A[S] ?? 100, V = S + 1, ee = j[V] ?? 0, Y = A[V] ?? 100, me = v[S] ?? 0, de = v[V] ?? 0, se = me + de;
    if (se <= 0) return;
    let q = nn(T, F, L), ie = se - q;
    if (ie < ee) {
      if (ie = ee, q = se - ie, q < F || q > L) return;
    } else if (ie > Y && (ie = Y, q = se - ie, q < F || q > L))
      return;
    q = nn(q, F, L), ie = se - q, w(S, q) && b((re) => {
      const ue = [...re];
      return ue[S] = q, ue[V] = ie, ue;
    });
  }, z = (x) => {
    !$.current || $.current.pointerId !== x.pointerId || ($.current = null);
  }, O = (x, S) => {
    const T = _(), j = m(), A = x, F = x + 1, L = v[A] ?? 0, V = v[F] ?? 0, ee = L + V;
    let Y = 0;
    const me = !!n[A]?.collapsible, de = !!n[F]?.collapsible;
    if (f ? S.key === "ArrowLeft" ? Y = -5 : S.key === "ArrowRight" && (Y = 5) : S.key === "ArrowUp" ? Y = -5 : S.key === "ArrowDown" && (Y = 5), S.key === "Home") {
      S.preventDefault();
      let se = T[A] ?? 0, q = ee - se;
      if (q = nn(
        q,
        T[F] ?? 0,
        j[F] ?? 100
      ), se = ee - q, se = nn(se, T[A] ?? 0, j[A] ?? 100), !w(A, se)) return;
      b((ie) => {
        const re = [...ie];
        return re[A] = se, re[F] = q, re;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let se = j[A] ?? 100;
      se = Math.min(se, ee - (T[F] ?? 0));
      let q = ee - se;
      if (q = nn(
        q,
        T[F] ?? 0,
        j[F] ?? 100
      ), se = ee - q, se = nn(se, T[A] ?? 0, j[A] ?? 100), !w(A, se)) return;
      b((ie) => {
        const re = [...ie];
        return re[A] = se, re[F] = q, re;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (me || de)) {
      S.preventDefault(), N(me ? A : F);
      return;
    }
    if (Y !== 0) {
      S.preventDefault();
      let se = L + Y, q = ee - se;
      const ie = T[A] ?? 0, re = j[A] ?? 100, ue = T[F] ?? 0, oe = j[F] ?? 100;
      if (se = nn(se, ie, re), q = ee - se, (q < ue || q > oe) && (q = nn(q, ue, oe), se = ee - q, se = nn(se, ie, re), q = ee - se), !w(A, se)) return;
      b(($e) => {
        const Oe = [...$e];
        return Oe[A] = se, Oe[F] = q, Oe;
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
        a
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((x, S) => {
        const T = !!p[S], j = T ? 0 : v[S] ?? 100 / n.length, A = T ? { display: "none" } : f ? {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = tr(x.min, 0), L = tr(x.max, 100), V = S < n.length - 1, ee = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": x.label ?? `Pane ${S + 1}`,
              className: At.pane,
              style: A,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : x.children,
                x.collapsible && !T ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: At.collapseBtn,
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
                    className: At.collapseBtn,
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
                className: At.collapseBtnCollapsed,
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
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: T || p[S + 1] ? -1 : 0,
              className: [
                At.handle,
                f ? At.handleHorizontal : At.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (Y) => E(S, Y),
              onPointerMove: D,
              onPointerUp: z,
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
  orientation: r,
  Orientation: l,
  onClick: i,
  Click: d,
  ariaLabel: s = "Table of contents",
  className: a
}) {
  const c = t ?? n, f = r ?? l ?? "vertical", [u, k] = W(
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
  return fe(() => {
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
        const E = document.querySelector(C.selector);
        if (!E) continue;
        _.set(C.selector, E);
        const D = E.getBoundingClientRect();
        let z = D.top;
        if (g !== window) {
          const O = g.getBoundingClientRect();
          z = D.top - O.top;
        }
        z <= 80 ? (!N || z > N.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (N = { sel: C.selector, el: E }) : (!y || z < y.top) && (y = { sel: C.selector, top: z });
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
        const $ = N.filter((C) => C.isIntersecting).sort((C, E) => C.boundingClientRect.top - E.boundingClientRect.top);
        if ($[0]) {
          const C = $[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === C) {
              k(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && C.id === E.selector.slice(1)) {
              k(E.selector);
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
      "aria-label": s,
      className: [Tn.root, Tn[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: Tn.list, children: e.map((p) => {
        const g = p.selector === u;
        return /* @__PURE__ */ o("li", { className: Tn.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [Tn.link, g ? Tn.active : null].filter(Boolean).join(" "),
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
  defaultIndex: r = 0,
  auto: l,
  Auto: i,
  interval: d,
  Interval: s,
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
  const _ = t ?? n, m = _ !== void 0, [w, y] = W(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), N = m ? _ : w, $ = e.length === 0 ? 0 : Math.min(Math.max(0, N), e.length - 1), C = l ?? i ?? !1, E = d ?? s ?? 3e3, D = a ?? c ?? !0, z = f ?? u ?? !0, O = k ?? v ?? !0, [x, S] = W(!1), [T, j] = W(!1), A = x || T, F = Q(null), L = Pe(), V = R(
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
  fe(() => {
    if (!C || A || e.length <= 1) return;
    const ue = setInterval(() => {
      V($ + 1);
    }, E);
    return () => clearInterval(ue);
  }, [C, A, E, $, V, e.length]);
  const de = (ue) => {
    e.length !== 0 && (ue.key === "ArrowLeft" ? (ue.preventDefault(), ee()) : ue.key === "ArrowRight" ? (ue.preventDefault(), Y()) : ue.key === "Home" ? (ue.preventDefault(), me(0)) : ue.key === "End" && (ue.preventDefault(), me(e.length - 1)));
  }, se = () => {
    D && C && j(!0);
  }, q = () => {
    D && C && j(!1);
  }, ie = () => {
    D && C && j(!0);
  }, re = () => {
    D && C && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: F,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [jt.root, h].filter(Boolean).join(" "),
      onKeyDown: de,
      onMouseEnter: se,
      onMouseLeave: q,
      onFocusCapture: ie,
      onBlurCapture: re,
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
        z && e.length > 1 ? /* @__PURE__ */ M(tt, { children: [
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
const ev = "_root_1aa5u_1", tv = "_group_1aa5u_20", nv = "_itemWrapper_1aa5u_30", rv = "_treeitem_1aa5u_34", sv = "_disabled_1aa5u_50", ov = "_selected_1aa5u_60", lv = "_caret_1aa5u_66", av = "_caretIcon_1aa5u_113", iv = "_caretOpen_1aa5u_120", cv = "_caretPlaceholder_1aa5u_124", dv = "_label_1aa5u_130", uv = "_loading_1aa5u_137", fv = "_loadingRow_1aa5u_143", _v = "_empty_1aa5u_149", hv = "_checkbox_1aa5u_155", at = {
  root: ev,
  group: tv,
  itemWrapper: nv,
  treeitem: rv,
  disabled: sv,
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
  Children: r,
  textProperty: l,
  TextProperty: i,
  keyProperty: d,
  KeyProperty: s,
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
  Template: E,
  itemTemplate: D,
  ItemTemplate: z,
  ariaLabel: O,
  AriaLabel: x,
  allowCheckBoxes: S = !1,
  checkedKeys: T,
  defaultCheckedKeys: j,
  onCheckedChange: A,
  allowCheckChildren: F = !0,
  className: L
}) {
  const V = e ?? t ?? [], ee = n ?? r, Y = l ?? i ?? "text", me = d ?? s ?? "id", de = a ?? c ?? "single", se = O ?? x ?? "Tree", q = N ?? $, ie = C ?? E ?? D ?? z, re = R(
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
          const xe = re(_e);
          _e.expanded && X.add(xe);
          const Me = oe(_e);
          Me && Me.length > 0 && ne(Me);
        }
      };
      return ne(H), X;
    },
    [re, oe]
  ), [Oe, Ye] = W(
    () => $e(V)
  ), [ve, Be] = W(
    () => /* @__PURE__ */ new Map()
  ), [we, ot] = W(() => /* @__PURE__ */ new Set()), nt = f ?? u, Ze = k ?? v, lt = de === "multiple" ? Ze !== void 0 : nt !== void 0, G = R(() => {
    if (de === "multiple") {
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
      if (b) return /* @__PURE__ */ new Set([re(b)]);
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
    de,
    b,
    p,
    re,
    oe,
    V
  ]), [I, U] = W(
    () => G()
  ), Z = be(() => {
    if (de === "multiple") {
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
    de,
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
        if (de === "multiple") {
          const ge = new Set(Z);
          ge.has(X) ? ge.delete(X) : ge.add(X), lt || U(ge);
          const _e = g ?? h;
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
          const _e = g ?? h;
          _e && _e({ item: H, selectedItem: H });
        } else {
          const _e = g ?? h;
          _e && _e({ item: H, selectedItem: H });
        }
    },
    [
      re,
      de,
      Z,
      lt,
      g,
      h,
      te,
      he
    ]
  ), Ee = R(
    async (H) => {
      const X = re(H);
      if (!!H.disabled) return;
      const ge = Oe.has(X), _e = _ ?? m, xe = w ?? y, Me = oe(H), Ve = ve.get(X) ?? Me, ft = !(Ve !== void 0 && Ve.length > 0) && q != null;
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
      q,
      we,
      _,
      m,
      w,
      y
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
  ), [rt, on] = W(
    () => new Set(j ?? [])
  ), J = T !== void 0 ? new Set(T) : rt, Se = R(
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
      const X = re(H), ne = new Set(J);
      if (ne.has(X) || dt(X)) {
        if (ne.delete(X), F)
          for (const ge of Se(X)) ne.delete(ge);
      } else if (ne.add(X), F)
        for (const ge of Se(X)) ne.add(ge);
      T === void 0 && on(ne), A?.([...ne]);
    },
    [
      S,
      F,
      T,
      J,
      Se,
      re,
      dt,
      A
    ]
  ), Ce = be(() => {
    const H = [], X = (ne, ge, _e) => {
      ne.forEach((xe, Me) => {
        const ze = re(xe), Ve = ue(xe), Qe = ve.get(ze) ?? oe(xe);
        let ft;
        ve.has(ze) ? ft = ve.get(ze).length > 0 : Qe !== void 0 ? ft = Qe.length > 0 : q ? ft = !0 : ft = !1;
        const et = Oe.has(ze), Ge = !!xe.disabled, Ht = ne.length, Tt = Me + 1;
        if (H.push({
          item: xe,
          key: ze,
          text: Ve,
          level: ge,
          posInSet: Tt,
          setSize: Ht,
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
    re,
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
  ), Ft = R(() => {
    if (!je && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    }
  }, [je, Ce]), st = (H, X, ne) => /* @__PURE__ */ o("ul", { role: "group", className: at.group, children: H.map((ge, _e) => {
    const xe = re(ge), Me = ue(ge), ze = ve.get(xe) ?? oe(ge);
    let Ve;
    ve.has(xe) ? Ve = ve.get(xe).length > 0 : ze !== void 0 ? Ve = ze.length > 0 : q ? Ve = !0 : Ve = !1;
    const Qe = Oe.has(xe), ft = Z.has(xe), et = !!ge.disabled, Ge = we.has(xe), Ht = je === xe, Tt = H.length, ln = _e + 1, Fn = ie ? ie(ge) : Me, Hn = S ? {
      checked: dt(xe),
      indeterminate: zt(xe)
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
              pv,
              {
                className: at.checkbox,
                checked: Hn?.checked ?? !1,
                indeterminate: Hn?.indeterminate ?? !1,
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
            /* @__PURE__ */ o("span", { className: at.label, children: Fn }),
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
      ref: K,
      role: "tree",
      "aria-label": se,
      "aria-multiselectable": de === "multiple" || void 0,
      tabIndex: 0,
      className: [at.root, L].filter(Boolean).join(" "),
      onKeyDown: Te,
      onFocus: Ft,
      children: V.length === 0 ? /* @__PURE__ */ o("div", { className: at.empty, children: "No items" }) : st(V, 1)
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
function mr(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Nw({
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
  const y = b ?? p ?? "id", N = _ ?? m ?? "PickList", $ = e ?? t ?? l ?? i ?? a ?? c ?? [], C = n ?? r ?? d ?? s ?? [], [E, D] = W(() => [
    ...$
  ]), [z, O] = W(() => [
    ...C
  ]);
  fe(() => {
    const I = e ?? t ?? l ?? i ?? a ?? c;
    I !== void 0 && D([...I]);
  }, [e, t, l, i, a, c]), fe(() => {
    const I = n ?? r ?? d ?? s;
    I !== void 0 && O([...I]);
  }, [n, r, d, s]);
  const [x, S] = W(
    () => /* @__PURE__ */ new Set()
  ), [T, j] = W(
    () => /* @__PURE__ */ new Set()
  ), [A, F] = W(() => {
    const I = $.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), [L, V] = W(() => {
    const I = C.findIndex((U) => !U.disabled);
    return I >= 0 ? I : 0;
  }), ee = be(
    () => E.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [E]
  ), Y = be(
    () => z.map((I, U) => I.disabled ? -1 : U).filter((I) => I >= 0),
    [z]
  );
  fe(() => {
    if (A >= E.length) {
      const I = ee[ee.length - 1];
      F(I ?? 0);
    } else if (E.length > 0 && ee.length > 0 && !ee.includes(A)) {
      const I = ee[0];
      I !== void 0 && F(I);
    }
  }, [A, E.length, ee]), fe(() => {
    if (L >= z.length) {
      const I = Y[Y.length - 1];
      V(I ?? 0);
    } else if (z.length > 0 && Y.length > 0 && !Y.includes(L)) {
      const I = Y[0];
      I !== void 0 && V(I);
    }
  }, [L, z.length, Y]), fe(() => {
    S((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const Z of I)
        E.some(
          (te) => it(te, y) === Z && !te.disabled
        ) && U.add(Z);
      return U;
    });
  }, [E, y]), fe(() => {
    j((I) => {
      const U = /* @__PURE__ */ new Set();
      for (const Z of I)
        z.some(
          (te) => it(te, y) === Z && !te.disabled
        ) && U.add(Z);
      return U;
    });
  }, [z, y]);
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
  ), se = R(
    (I) => {
      (g ?? h)?.(I);
    },
    [g, h]
  ), q = R(
    (I) => {
      const U = E[I];
      if (!U || U.disabled) return;
      const Z = it(U, y);
      S((he) => {
        const te = new Set(he);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), F(I);
    },
    [E, y]
  ), ie = R(
    (I) => {
      const U = z[I];
      if (!U || U.disabled) return;
      const Z = it(U, y);
      j((he) => {
        const te = new Set(he);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), V(I);
    },
    [z, y]
  ), re = R(() => {
    const I = [], U = [];
    for (const ye of E) {
      const Ee = it(ye, y);
      x.has(Ee) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const Z = U, he = [...z, ...I];
    D(Z), O(he), S(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, y)));
    j(te), me(Z), de(he), se({
      source: Z,
      target: he,
      moved: I,
      direction: "toTarget"
    });
  }, [
    E,
    z,
    x,
    y,
    me,
    de,
    se
  ]), ue = R(() => {
    const I = [], U = [];
    for (const ye of z) {
      const Ee = it(ye, y);
      T.has(Ee) && !ye.disabled ? I.push(ye) : U.push(ye);
    }
    if (I.length === 0) return;
    const Z = U, he = [...E, ...I];
    O(Z), D(he), j(/* @__PURE__ */ new Set());
    const te = new Set(I.map((ye) => it(ye, y)));
    S(te), me(he), de(Z), se({
      source: he,
      target: Z,
      moved: I,
      direction: "toSource"
    });
  }, [
    E,
    z,
    T,
    y,
    me,
    de,
    se
  ]), oe = R(() => {
    const I = E.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = E.filter((he) => !!he.disabled), Z = [...z, ...I];
    D(U), O(Z), S(/* @__PURE__ */ new Set()), me(U), de(Z), se({
      source: U,
      target: Z,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    E,
    z,
    y,
    me,
    de,
    se
  ]), $e = R(() => {
    const I = z.filter((he) => !he.disabled);
    if (I.length === 0) return;
    const U = z.filter((he) => !!he.disabled), Z = [...E, ...I];
    O(U), D(Z), j(/* @__PURE__ */ new Set()), me(Z), de(U), se({
      source: Z,
      target: U,
      moved: I,
      direction: "allToSource"
    });
  }, [E, z, me, de, se]), Oe = R(() => {
    if (T.size === 0) return;
    const I = [...z], U = T, Z = [];
    for (let te = 1; te < I.length; te++) {
      const ye = I[te], Ee = I[te - 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, y), He = it(Ee, y);
      U.has(Fe) && !U.has(He) && !ye.disabled && !Ee.disabled && (I[te - 1] = ye, I[te] = Ee, Z.push(ye));
    }
    if (Z.length === 0) return;
    O(I), de(I), se({ source: E, target: I, moved: Z, direction: "up" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, y) === he
      );
      te >= 0 && V(te);
    }
  }, [
    z,
    T,
    y,
    E,
    de,
    se
  ]), Ye = R(() => {
    if (T.size === 0) return;
    const I = [...z], U = T, Z = [];
    for (let te = I.length - 2; te >= 0; te--) {
      const ye = I[te], Ee = I[te + 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, y), He = it(Ee, y);
      U.has(Fe) && !U.has(He) && !ye.disabled && !Ee.disabled && (I[te] = Ee, I[te + 1] = ye, Z.push(ye));
    }
    if (Z.length === 0) return;
    O(I), de(I), se({ source: E, target: I, moved: Z, direction: "down" });
    const he = Array.from(U)[0];
    if (he) {
      const te = I.findIndex(
        (ye) => it(ye, y) === he
      );
      te >= 0 && V(te);
    }
  }, [
    z,
    T,
    y,
    E,
    de,
    se
  ]), ve = x.size > 0, Be = T.size > 0, we = Q(""), ot = Q(
    null
  ), nt = Q(""), Ze = Q(
    null
  ), Nt = R(
    (I) => {
      if (E.length === 0) return;
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
          (He) => mr(E[He]).toLowerCase().startsWith(te)
        );
        Fe != null && F(Fe);
        return;
      }
      he >= 0 && F(he);
    },
    [E, ee, A, q]
  ), bt = R(
    (I) => {
      if (z.length === 0) return;
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
          (He) => mr(z[He]).toLowerCase().startsWith(te)
        );
        Fe != null && V(Fe);
        return;
      }
      he >= 0 && V(he);
    },
    [z, Y, L, ie]
  ), lt = Q(null), G = Q(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Ae.root, w].filter(Boolean).join(" "),
      "aria-label": N,
      children: [
        /* @__PURE__ */ M("div", { className: Ae.panel, children: [
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
                const Z = it(I, y), he = x.has(Z), te = U === A, ye = !!I.disabled;
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
                    children: mr(I)
                  },
                  Z
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: Ae.controls, children: [
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
              "aria-disabled": E.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: E.filter((I) => !I.disabled).length === 0,
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
              "aria-disabled": E.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: E.filter((I) => !I.disabled).length === 0,
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
              "aria-disabled": z.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: z.filter((I) => !I.disabled).length === 0,
              onClick: $e,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: Ae.panel, children: [
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
              children: z.length === 0 ? (
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
              ) : z.map((I, U) => {
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
                      Ae.option,
                      he ? Ae.selected : null,
                      te ? Ae.active : null,
                      ye ? Ae.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(U),
                    children: mr(I)
                  },
                  Z
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: Ae.reorder, children: [
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
function Cs(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ow({
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
  const [c, f] = W(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, k = (p) => {
    n || f(p), r?.(p);
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
      "aria-label": s,
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
                    "aria-label": `${g.title} ${Cs(g.start)} - ${Cs(g.end)}`,
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
const Fv = "_root_dj5ne_1", Hv = "_header_dj5ne_8", qv = "_headerCell_dj5ne_15", Kv = "_timeline_dj5ne_21", Wv = "_row_dj5ne_26", Uv = "_taskName_dj5ne_32", Vv = "_timelineCell_dj5ne_37", Gv = "_bar_dj5ne_43", Xv = "_progress_dj5ne_56", Yv = "_dep_dj5ne_61", Xt = {
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
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [i, d] = W(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Xt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
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
        e.map((s) => /* @__PURE__ */ M(
          "div",
          {
            className: Xt.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Xt.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ M("div", { className: Xt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Xt.bar,
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
                        className: Xt.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((a) => /* @__PURE__ */ o("svg", { className: Xt.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
const Zv = "_root_4b64f_1", Jv = "_fields_4b64f_6", Qv = "_chip_4b64f_13", e2 = "_table_4b64f_35", t2 = "_totalRow_4b64f_55", n2 = "_total_4b64f_55", Pn = {
  root: Zv,
  fields: Jv,
  chip: Qv,
  table: e2,
  totalRow: t2,
  total: n2
}, gr = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function nr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Cw({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const s = t, a = n, c = r, f = (g, h, _) => {
    const m = g === "row" ? s.filter((N) => N.property !== h) : s, w = g === "col" ? a.filter((N) => N.property !== h) : a, y = g === "agg" ? c.filter((N) => !(N.property === h && N.aggregate === _)) : c;
    l?.({
      rowFields: m,
      columnFields: w,
      aggregateFields: y
    });
  }, u = (g, h) => h.map((_) => String(g[_.property])).join(""), k = [
    ...new Set(s.length ? e.map((g) => u(g, s)) : [""])
  ].sort(), v = [
    ...new Set(a.length ? e.map((g) => u(g, a)) : [""])
  ].sort(), b = (g, h, _) => {
    const m = e.filter(
      (y) => u(y, s) === g && u(y, a) === h
    ), w = m.map((y) => Number(y[_.property])).filter((y) => !Number.isNaN(y));
    return !w.length && _.aggregate !== "Count" ? 0 : gr[_.aggregate](
      _.aggregate === "Count" ? m.map(() => 1) : w
    );
  }, p = (g, h, _, m) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: Pn.chip,
      "aria-label": `Remove ${g} field ${_}`,
      onClick: () => f(g, h, m),
      children: [
        _,
        m ? ` (${m})` : ""
      ]
    },
    `${g}-${_}-${m ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [Pn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: Pn.fields, children: [
      s.map((g) => p("row", g.property, g.title ?? g.property)),
      a.map((g) => p("col", g.property, g.title ?? g.property)),
      c.map(
        (g) => p("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: Pn.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        v.map((g) => /* @__PURE__ */ o("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        k.map((g) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: g || "—" }),
          v.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: nr(
                b(
                  g,
                  h,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? nr(b(g, h, c[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: Pn.total, children: c.length ? nr(
            gr[c[0].aggregate](
              v.flatMap(
                (h) => e.filter(
                  (_) => u(_, s) === g && u(_, a) === h
                ).map((_) => Number(_[c[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ M("tr", { className: Pn.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          v.map((g) => /* @__PURE__ */ o("td", { children: c.length ? nr(
            gr[c[0].aggregate](
              e.filter((h) => u(h, a) === g).map((h) => Number(h[c[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, g)),
          /* @__PURE__ */ o("td", { children: c.length ? nr(
            gr[c[0].aggregate](
              e.map((g) => Number(g[c[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const r2 = "_root_1r7co_1", s2 = "_reverse_1r7co_10", o2 = "_item_1r7co_14", l2 = "_marker_1r7co_35", a2 = "_body_1r7co_46", i2 = "_label_1r7co_50", c2 = "_content_1r7co_56", $n = {
  root: r2,
  reverse: s2,
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
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [$n.root, t ? $n.reverse : "", r].filter(Boolean).join(" "),
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
const d2 = "_root_rm4d8_1", u2 = "_header_rm4d8_13", f2 = "_headCell_rm4d8_22", _2 = "_row_rm4d8_32", h2 = "_cell_rm4d8_37", rr = {
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
  loadData: r,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [s, a] = W(
    /* @__PURE__ */ new Map()
  ), [c, f] = W(0), u = Q(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), v = Math.max(0, Math.floor(c / t) - 3), b = Math.min(e, v + k + 6), p = R(
    (h, _) => {
      let m = !1;
      for (let w = h; w < _; w++)
        !s.has(w) && !u.current.has(w) && (m = !0);
      if (m) {
        for (let w = h; w < _; w++) u.current.add(w);
        r({ skip: h, top: _ }).then((w) => {
          a((y) => {
            const N = new Map(y);
            return w.forEach(($, C) => N.set(h + C, $)), N;
          });
          for (let y = h; y < _; y++) u.current.delete(y);
        });
      }
    },
    [s, r]
  );
  fe(() => {
    p(v, b);
  }, [v, b]);
  const g = [];
  for (let h = v; h < b; h++) {
    const _ = s.get(h) ?? {};
    g.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: rr.row,
          role: "row",
          style: { height: t },
          children: l.map((m) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: rr.cell,
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
      className: [rr.root, d].filter(Boolean).join(" "),
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
        /* @__PURE__ */ o("div", { className: rr.header, role: "row", children: l.map((h) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: rr.headCell,
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
    constructor(s, a, c, f) {
      if (this.version = s, this.errorCorrectionLevel = a, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
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
    static encodeSegments(s, a, c = 1, f = 40, u = -1, k = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let v, b;
      for (v = c; ; v++) {
        const _ = t.getNumDataCodewords(v, a) * 8, m = i.getTotalBits(s, v);
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
      for (const _ of s) {
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
        const f = r(a, c), u = this.size - 11 + c % 3, k = Math.floor(c / 3);
        this.setFunctionModule(u, k, f), this.setFunctionModule(k, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, a) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), k = s + f, v = a + c;
          0 <= k && k < this.size && 0 <= v && v < this.size && this.setFunctionModule(k, v, u != 2 && u != 4);
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
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], k = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), v = f - k % f, b = Math.floor(k / f);
      let p = [];
      const g = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, m = 0; _ < f; _++) {
        let w = s.slice(
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
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const k = c - u, b = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[b][k] && a < s.length * 8 && (this.modules[b][k] = r(s[a >>> 3], 7 - (a & 7)), a++);
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
        let k = !1, v = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[u][p] == k ? (v++, v == 5 ? s += t.PENALTY_N1 : v > 5 && s++) : (this.finderPenaltyAddHistory(v, b), k || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), k = this.modules[u][p], v = 1);
        s += this.finderPenaltyTerminateAndCount(k, v, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let k = !1, v = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][u] == k ? (v++, v == 5 ? s += t.PENALTY_N1 : v > 5 && s++) : (this.finderPenaltyAddHistory(v, b), k || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), k = this.modules[p][u], v = 1);
        s += this.finderPenaltyTerminateAndCount(k, v, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let k = 0; k < this.size - 1; k++) {
          const v = this.modules[u][k];
          v == this.modules[u][k + 1] && v == this.modules[u + 1][k] && v == this.modules[u + 1][k + 1] && (s += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((k, v) => k + (v ? 1 : 0), a);
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
          (k, v) => c[v] ^= t.reedSolomonMultiply(k, u)
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
const p2 = "_root_1leml_1", m2 = {
  root: p2
}, g2 = {
  low: Bt.QrCode.Ecc.LOW,
  medium: Bt.QrCode.Ecc.MEDIUM,
  quartile: Bt.QrCode.Ecc.QUARTILE,
  high: Bt.QrCode.Ecc.HIGH
};
function zw({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: s
}) {
  const a = i ?? `QR code for ${e}`, c = Q(null), f = Ur("(prefers-color-scheme: dark)"), [u, k] = W(null);
  fe(() => {
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
      return Bt.QrCode.encodeText(e, g2[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = Q(null);
  fe(() => {
    if (v !== null) {
      b.current = null;
      return;
    }
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), (b.current?.value !== e || b.current?.onError !== s) && (b.current = { value: e, onError: s }, s?.(w));
  }, [v, e, s]);
  const p = Math.max(0, Math.floor(l)), g = [m2.root, d].filter(Boolean).join(" ");
  if (fe(() => {
    if (n !== "canvas" || v === null) return;
    const w = c.current, y = w?.getContext("2d");
    if (!w || !y) return;
    const N = getComputedStyle(w), $ = N.getPropertyValue("--dx-text-color").trim() || "#000", C = N.getPropertyValue("--dx-surface-color").trim() || "#fff";
    b2(y, v, t, p, $, C);
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
function b2(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let s = 0; s < t.size; s++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, s) && e.fillRect((a + r) * d, (s + r) * d, d + 0.5, d + 0.5);
}
const y2 = "_root_1v9la_1", x2 = "_value_1v9la_9", Ds = {
  root: y2,
  value: x2
}, Es = [
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
], zs = 104, v2 = 106;
function k2(e) {
  const t = [zs];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = zs;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, v2), t;
}
function Mw({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, s = be(() => {
    const a = [];
    let c = 0;
    for (const f of k2(e)) {
      const u = Es[f] ?? Es[0];
      for (let k = 0; k < u.length; k++) {
        const v = Number(u[k]);
        k % 2 === 0 && a.push({ x: c, w: v }), c += v;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [Ds.root, i].filter(Boolean).join(" "), children: [
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
    r && /* @__PURE__ */ o("span", { className: Ds.value, children: e })
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
}, Ms = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Js = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), j2 = /* @__PURE__ */ new Set([...Js, "heatmap"]);
function T2(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, s = [];
  for (let a = i; a <= d + 1e-9; a += l)
    s.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: s };
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
function L2(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s } = e, a = i.l + d / 2, c = i.t + s / 2, f = Math.min(d, s) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, k = r.reduce((b, p) => b + (Number(p.val) || 0), 0);
  let v = -90;
  return pn(
    n,
    t,
    r.map((b, p) => {
      const g = k ? b.val / k * 360 : 0, h = v, _ = v + g;
      v = _;
      const m = g > 180 ? 1 : 0, w = a + f * Math.cos(mt(h)), y = c + f * Math.sin(mt(h)), N = a + f * Math.cos(mt(_)), $ = c + f * Math.sin(mt(_)), C = a + u * Math.cos(mt(_)), E = c + u * Math.sin(mt(_)), D = a + u * Math.cos(mt(h)), z = c + u * Math.sin(mt(h)), O = u ? `M ${w} ${y} A ${f} ${f} 0 ${m} 1 ${N} ${$} L ${C} ${E} A ${u} ${u} 0 ${m} 0 ${D} ${z} Z` : `M ${a} ${c} L ${w} ${y} A ${f} ${f} 0 ${m} 1 ${N} ${$} Z`, x = (h + _) / 2, S = a + (f + 12) * Math.cos(mt(x)), T = c + (f + 12) * Math.sin(mt(x));
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
function R2(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: s, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((k, v) => [k, v]));
  return pn(
    n,
    t,
    r.map((k, v) => {
      const b = u.get(k.cat) ?? 0, p = Number(r[v].cat), g = Number.isNaN(p) ? a(b) : i.l + (p - s.min) / (s.max - s.min || 1) * d, h = c(k.val), _ = t.type === "bubble" && k.size !== void 0 ? Math.max(4, Math.min(12, k.size / 10)) : 4;
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
function B2(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: s, categories: a, series: c } = e, f = new Map(a.map((b, p) => [b, p])), u = (b) => {
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
  }, k = r.map((b) => {
    const p = f.get(b.cat) ?? 0, g = u(b.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${s(g + b.val)}`;
  }).join(" "), v = r.map((b) => {
    const p = f.get(b.cat) ?? 0, g = u(b.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${s(g)}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(tt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${k} L ${d(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${d(0)} ${s(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: k, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: v, fill: "none", stroke: "transparent" }),
      r.map((b, p) => {
        const g = f.get(b.cat) ?? 0, h = u(b.cat), _ = d(g), m = s(h + b.val);
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
function F2(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, scale: a, xFor: c, yFor: f, categories: u, series: k } = e, v = new Map(u.map((p, g) => [p, g])), b = t.type === "bar";
  return pn(
    n,
    t,
    r.map((p, g) => {
      const h = v.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let x = 0; x < n; x++) {
          const S = k[x];
          if (S?.stack !== t.stack) continue;
          const T = S.data.find(
            (j) => String(j[S.categoryProperty] ?? "") === p.cat
          );
          T && (_ += Number(T[S.valueProperty]) || 0);
        }
      const m = _ + p.val, w = k.filter(
        (x) => !x.stack || x.stack === t.stack
      ).length, y = d / Math.max(1, u.length), N = b ? 18 : Math.max(12, y / (t.stack ? 1 : k.length) - 4), $ = b ? i.l + _ / (a.max - a.min || 1) * d : c(h) - N / 2 + (t.stack ? 0 : n % w * N), C = b ? i.t + h * s / Math.max(1, u.length) + 4 : f(m), E = b ? p.val / (a.max - a.min || 1) * d : N - 4, D = b ? 16 : f(_) - f(m), z = b ? i.l + _ / (a.max - a.min || 1) * d : $, O = b ? i.t + h * s / Math.max(1, u.length) + 4 : C;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: z,
            y: O,
            width: b ? E : N - 4,
            height: D,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              z + (b ? E : N) / 2,
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
            x: z + (b ? E : N) / 2,
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
function H2(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, k = i.l + d / 2, v = i.t + s * 0.78, b = Math.min(d, s) * 0.36, p = 135, g = 270, h = r.reduce((N, $) => N + (Number($.val) || 0), 0), _ = a.max - a.min || 1, m = Math.min(1, Math.max(0, (h - a.min) / _)), w = (N, $) => {
    const [C, E] = [
      k + b * Math.cos(mt(N)),
      v + b * Math.sin(mt(N))
    ], [D, z] = [
      k + b * Math.cos(mt($)),
      v + b * Math.sin(mt($))
    ], O = $ - N > 180 ? 1 : 0;
    return `M ${C} ${E} A ${b} ${b} 0 ${O} 1 ${D} ${z}`;
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
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", h, r[0]?.item ?? {}),
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
function Qs(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, s = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (u) => mt(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: s, angleFor: c, vertexFor: (u, k) => {
    const v = c(u);
    return [
      i + s * k * Math.cos(v),
      d + s * k * Math.sin(v)
    ];
  } };
}
function q2(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Qs(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
function K2(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: s, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: k, vertexFor: v } = Qs(e), b = e.scale.max || 1, p = (h) => r.find((_) => _.cat === h)?.val ?? 0, g = i.map((h, _) => {
    const m = Math.min(1, Math.max(0, p(h) / b)), [w, y] = v(_, m);
    return `${w},${y}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ M(tt, { children: [
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
              onMouseEnter: () => d && s(N, $, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const C = r.find((E) => E.cat === h);
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
function W2(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, tooltipVisible: a, showTip: c, hideTip: f } = e, u = r, k = Math.max(1, ...u.map((p) => Number(p.val) || 0)), v = s / Math.max(1, u.length), b = i.l + d / 2;
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
function U2(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: s, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, k = [];
  t.data.forEach((m) => {
    const w = t.rowProperty ? String(m[t.rowProperty] ?? "") : "All";
    k.includes(w) || k.push(w);
  });
  const v = r.map((m) => m.val).filter((m) => Number.isFinite(m)), b = v.length ? Math.min(...v) : 0, p = v.length ? Math.max(...v) : 1, g = d / Math.max(1, a.length), h = s / Math.max(1, k.length), _ = (m) => p === b ? 0.6 : 0.15 + 0.85 * ((m - b) / (p - b));
  return pn(
    n,
    t,
    /* @__PURE__ */ M(tt, { children: [
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
      r.map((m, w) => {
        const y = t.data[w], N = a.indexOf(m.cat), $ = k.indexOf(
          t.rowProperty && y ? String(y[t.rowProperty] ?? "") : "All"
        );
        if (N < 0 || $ < 0) return null;
        const C = i.l + N * g, E = i.t + $ * h;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: C + 1,
              y: E + 1,
              width: Math.max(1, g - 2),
              height: Math.max(1, h - 2),
              fill: l,
              fillOpacity: _(m.val),
              onMouseEnter: () => c && f(C + g / 2, E, `${t.title ?? m.cat}: ${m.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, m.cat, m.val, m.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: C + g / 2,
              y: E + h / 2 + 4,
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
function V2(e, t, n) {
  const r = P2(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return L2(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return R2(e, t, n, r, l);
    case "line":
    case "area":
      return B2(e, t, n, r, l);
    case "gauge":
      return H2(e, t, n, r, l);
    case "radar":
      return K2(e, t, n, r, l);
    case "funnel":
      return W2(e, t, n, r, l);
    case "heatmap":
      return U2(e, t, n, r, l);
    default:
      return F2(e, t, n, r, l);
  }
}
function Iw({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: i = !0,
  tooltipVisible: d = !0,
  onSeriesClick: s,
  ariaLabel: a = "Chart",
  className: c
}) {
  const [f, u] = W(
    null
  ), k = be(() => {
    const D = /* @__PURE__ */ new Set();
    for (const z of e)
      for (const O of z.data) D.add(String(O[z.categoryProperty] ?? ""));
    return [...D];
  }, [e]), v = be(() => {
    const D = e.flatMap((O) => O.data.map((x) => Number(x[O.valueProperty]))).filter((O) => !Number.isNaN(O)), z = /* @__PURE__ */ new Map();
    for (const O of e) {
      if (!O.stack) continue;
      let x = z.get(O.stack);
      x || z.set(O.stack, x = /* @__PURE__ */ new Map());
      for (const S of O.data) {
        const T = String(S[O.categoryProperty] ?? ""), j = Number(S[O.valueProperty]);
        Number.isNaN(j) || x.set(T, (x.get(T) ?? 0) + j);
      }
    }
    for (const O of z.values()) D.push(...O.values());
    return D;
  }, [e]), b = r?.min ?? (v.length ? Math.min(0, ...v) : 0), p = r?.max ?? (v.length ? Math.max(...v) : 10), g = be(
    () => T2(b, p, r?.step),
    [b, p, r?.step]
  ), h = { t: 16, r: 16, b: 40, l: 56 }, _ = t - h.l - h.r, m = n - h.t - h.b, w = (D) => h.l + D / Math.max(1, k.length - 1) * _, y = (D) => h.t + (1 - (D - g.min) / (g.max - g.min || 1)) * m, N = (D, z) => z.color ?? Ms[D % Ms.length], $ = e.some((D) => Js.has(D.type)), C = e.some((D) => j2.has(D.type)), E = {
    categories: k,
    scale: g,
    pad: h,
    plotW: _,
    plotH: m,
    xFor: w,
    yFor: y,
    colorFor: N,
    tooltipVisible: d,
    showTip: (D, z, O) => u({ x: D, y: z, text: O }),
    hideTip: () => u(null),
    handleClick: (D, z, O, x) => s?.({
      seriesTitle: D.title ?? "",
      category: z,
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
              $ && r?.gridlines !== !1 && g.ticks.map((D) => /* @__PURE__ */ o(
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
              C && l?.gridlines && k.map((D, z) => /* @__PURE__ */ o(
                "line",
                {
                  x1: w(z),
                  x2: w(z),
                  y1: h.t,
                  y2: h.t + m,
                  className: We.gridline
                },
                z
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
              C && k.map((D, z) => /* @__PURE__ */ o(
                "text",
                {
                  x: w(z),
                  y: h.t + m + 16,
                  textAnchor: "middle",
                  className: We.tickLabel,
                  children: D
                },
                D
              )),
              $ && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: h.t + m / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${h.t + m / 2})`,
                  className: We.axisTitle,
                  children: r.title
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
              e.some((D) => D.type === "radar") && q2(E),
              e.map((D, z) => V2(E, D, z))
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
        i && /* @__PURE__ */ o("div", { className: We.legend, children: e.map((D, z) => /* @__PURE__ */ M("span", { className: We.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: We.swatch,
              style: { backgroundColor: N(z, D) },
              "aria-hidden": "true"
            }
          ),
          D.title ?? `Series ${z + 1}`
        ] }, z)) }),
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
                (D) => D.data.map((z, O) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ o("td", { children: D.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: D.rowProperty ? `${String(z[D.rowProperty] ?? "")} / ${String(z[D.categoryProperty] ?? "")}` : String(z[D.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(z[D.valueProperty] ?? "") })
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
  return Ur(e) ? /* @__PURE__ */ o(tt, { children: t }) : null;
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
  Ln as Button,
  Y2 as Card,
  ww as Carousel,
  Iw as Chart,
  vk as CheckBox,
  Yk as CheckBoxList,
  rw as ColorPicker,
  zk as Column,
  _w as ContextMenuProvider,
  Vn as DEFAULT_OPERATOR_BY_TYPE,
  eb as DEFAULT_PALETTE,
  n1 as DEFAULT_THEMES,
  mk as DataFilter,
  gk as DataGrid,
  bk as DataList,
  sw as DatePicker,
  Ec as Dialog,
  Nk as DialogProvider,
  Vk as DropDown,
  uw as DropZone,
  tk as EmptyState,
  js as FILTER_OPERATORS,
  gw as FabMenu,
  nk as Field,
  sk as Fieldset,
  Nm as Footer,
  ok as Form,
  rk as FormField,
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
  Xs as MenuItem,
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
  On as Select,
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
  Ps as applyFilters,
  Za as applyGridState,
  ls as collectGroupKeys,
  Nn as columnValue,
  fk as compare,
  hk as custom,
  Ga as cycleSort,
  is as defaultOperatorForType,
  ak as email,
  ys as formatMasked,
  xr as formatValue,
  Fk as getAppearance,
  yr as getByPath,
  Bk as getTheme,
  Wa as groupItems,
  J2 as iconNames,
  Ts as matchesFilters,
  dk as maxLength,
  ck as minLength,
  Ya as paginate,
  ik as pattern,
  uk as range,
  lk as required,
  _k as requiredTrue,
  Is as resolveVariant,
  Zl as runValidators,
  h1 as setAppearance,
  _1 as setTheme,
  lr as shadeClass,
  ha as sortItems,
  Xa as sortedItems,
  gs as subscribe,
  Qa as toCsv,
  ca as toFilterString,
  _a as toODataFilterString,
  fw as useContextMenu,
  $k as useDialog,
  Yl as useFormContext,
  pk as useFormField,
  Tw as useLiveRegion,
  Ur as useMediaQuery,
  Hk as useThemeService,
  Ok as useToast
};
