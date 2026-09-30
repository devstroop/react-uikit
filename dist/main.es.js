import { jsx as o, jsxs as z, Fragment as rt } from "react/jsx-runtime";
import { forwardRef as Le, useId as Pe, isValidElement as gt, cloneElement as Ps, useState as U, useRef as Q, useCallback as R, useMemo as xe, useContext as hn, createContext as Ln, useEffect as ge, Fragment as Ls, useLayoutEffect as Es, Children as os, useImperativeHandle as Rs } from "react";
function rs(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Vr = "_button_6me6w_1", Gr = "_filled_6me6w_36", Xr = "_flat_6me6w_55", Yr = "_outlined_6me6w_58", Zr = "_text_6me6w_63", Jr = "_loading_6me6w_506", Qr = "_spinner_6me6w_509", eo = "_xs_6me6w_525", to = "_sm_6me6w_531", no = "_md_6me6w_537", so = "_lg_6me6w_543", ro = "_xl_6me6w_549", oo = "_iconOnly_6me6w_555", lo = "_fullWidth_6me6w_585", Yt = {
  button: Vr,
  filled: Gr,
  flat: Xr,
  outlined: Yr,
  text: Zr,
  "style-primary": "_style-primary_6me6w_82",
  "style-secondary": "_style-secondary_6me6w_101",
  "style-base": "_style-base_6me6w_119",
  "style-light": "_style-light_6me6w_139",
  "style-dark": "_style-dark_6me6w_157",
  "style-danger": "_style-danger_6me6w_176",
  "style-success": "_style-success_6me6w_195",
  "style-warning": "_style-warning_6me6w_214",
  "style-info": "_style-info_6me6w_233",
  "shade-lighter": "_shade-lighter_6me6w_418",
  "shade-light": "_shade-light_6me6w_418",
  "shade-dark": "_shade-dark_6me6w_428",
  "shade-darker": "_shade-darker_6me6w_432",
  loading: Jr,
  spinner: Qr,
  "dx-spin": "_dx-spin_6me6w_1",
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
      visible: u = !0,
      className: f,
      disabled: w,
      children: v,
      ...y
    } = t;
    if (u === !1) return null;
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
      f
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ z(rt, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Yt.spinner }) : null,
      v
    ] }), k = t.href;
    if (k != null) {
      const { onClick: $, ...O } = y, M = w || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: k,
          className: _,
          "aria-disabled": M || void 0,
          "aria-busy": c || void 0,
          onClick: (E) => {
            if (M) {
              E.preventDefault();
              return;
            }
            $?.(E);
          },
          ...O,
          children: x
        }
      );
    }
    const { type: g = "button", ...N } = y;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: g,
        className: _,
        disabled: w || c,
        "aria-busy": c || void 0,
        ...N,
        children: x
      }
    );
  }
), io = "_card_16nyh_1", co = "_elevated_16nyh_8", uo = "_filled_16nyh_13", fo = "_outlined_16nyh_18", _o = "_interactive_16nyh_22", ho = "_text_16nyh_30", po = "_header_16nyh_46", mo = "_body_16nyh_53", go = "_footer_16nyh_63", Fn = {
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
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z(
      "div",
      {
        ref: c,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          r?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
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
const xo = "_badge_1fy6d_1", yo = "_xs_1fy6d_21", bo = "_sm_1fy6d_26", vo = "_md_1fy6d_31", wo = "_lg_1fy6d_36", ko = "_xl_1fy6d_41", $o = "_neutral_1fy6d_47", No = "_primary_1fy6d_52", Oo = "_secondary_1fy6d_61", So = "_light_1fy6d_66", Co = "_base_1fy6d_71", Do = "_dark_1fy6d_76", Eo = "_info_1fy6d_81", zo = "_success_1fy6d_86", Mo = "_warning_1fy6d_95", jo = "_danger_1fy6d_104", Io = "_filled_1fy6d_111", Ao = "_outlined_1fy6d_161", To = "_text_1fy6d_213", Hn = {
  badge: xo,
  xs: yo,
  sm: bo,
  md: vo,
  lg: wo,
  xl: ko,
  neutral: $o,
  primary: No,
  secondary: Oo,
  light: So,
  base: Co,
  dark: Do,
  info: Eo,
  success: zo,
  warning: Mo,
  danger: jo,
  filled: Io,
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
  const u = t, f = $r(n, "filled"), w = rs(s);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        Hn.badge,
        Hn[l],
        Hn[u],
        Hn[f],
        w ? Hn[w] : null,
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
], we = Le(function({ icon: t, size: n, color: s, className: l, style: i, ...d }, r) {
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
}), qo = "_stat_sjin9_1", Ko = "_label_sjin9_8", Wo = "_row_sjin9_16", Uo = "_value_sjin9_22", Vo = "_delta_sjin9_28", Go = "_success_sjin9_33", Xo = "_danger_sjin9_37", Yo = "_neutral_sjin9_41", Zo = "_hint_sjin9_45", xn = {
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
  return /* @__PURE__ */ z(
    "div",
    {
      ref: a,
      className: [xn.stat, d].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ o("div", { className: xn.label, children: t }),
        /* @__PURE__ */ z("div", { className: xn.row, children: [
          /* @__PURE__ */ o("div", { className: xn.value, children: n }),
          s != null && /* @__PURE__ */ o("div", { className: [xn.delta, xn[l]].join(" "), children: s })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: xn.hint, children: i })
      ]
    }
  );
}), Jo = "_wrap_1cwp9_1", Qo = "_table_1cwp9_8", el = "_caption_1cwp9_14", tl = "_none_1cwp9_51", nl = "_horizontal_1cwp9_57", sl = "_vertical_1cwp9_67", rl = "_alternating_1cwp9_85", ol = "_start_1cwp9_89", ll = "_center_1cwp9_93", al = "_end_1cwp9_97", il = "_empty_1cwp9_101", an = {
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
  return /* @__PURE__ */ z("div", { className: [an.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z(
      "table",
      {
        className: [
          an.table,
          c,
          d ? an.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ o("caption", { className: an.caption, children: l }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "th",
            {
              className: u.align != null ? an[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((u) => /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "td",
            {
              className: f.align != null ? an[f.align] : void 0,
              children: f.render != null ? f.render(u) : u[f.key]
            },
            f.key
          )) }, n(u))) })
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
  return i === !1 ? null : /* @__PURE__ */ z("div", { className: [qn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: qn.icon, children: e }),
    /* @__PURE__ */ o("div", { className: qn.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: qn.description, children: n }),
    s != null && /* @__PURE__ */ o("div", { className: qn.action, children: s })
  ] });
}
const hl = "_field_149oz_1", pl = "_label_149oz_8", ml = "_required_149oz_14", gl = "_hint_149oz_19", xl = "_error_149oz_24", Kn = {
  field: hl,
  label: pl,
  required: ml,
  hint: gl,
  error: xl
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
  const c = s ?? l, u = Pe(), f = Pe(), w = Pe();
  if (a === !1) return null;
  const v = i != null ? f : c != null ? w : null, y = typeof d == "function" ? d({ inputId: u, hintId: w, errorId: f }) : d, p = gt(y) && typeof y.props.id == "string" ? y.props.id : void 0, m = p ?? t ?? u, h = gt(y) && (v != null || p == null && typeof y.type == "string"), _ = p != null || t != null || h, x = h && gt(y) ? Ps(y, {
    id: m,
    "aria-describedby": v != null ? [
      y.props["aria-describedby"],
      v
    ].filter((k) => typeof k == "string").join(" ") || void 0 : y.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : y.props["aria-invalid"]
  }) : y;
  return /* @__PURE__ */ z("div", { className: [Kn.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ z(
      "label",
      {
        className: Kn.label,
        htmlFor: _ ? m : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Kn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    i != null ? /* @__PURE__ */ o("div", { id: f, className: Kn.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ o("div", { id: w, className: Kn.hint, children: c }) : null
  ] });
}
const yl = "_formfield_od5e8_1", bl = "_content_od5e8_8", vl = "_floating_od5e8_43", wl = "_label_od5e8_111", kl = "_start_od5e8_132", $l = "_required_od5e8_169", Nl = "_end_od5e8_175", Ol = "_filled_od5e8_192", Sl = "_flat_od5e8_199", Cl = "_helper_od5e8_206", Dl = "_invalid_od5e8_211", Kt = {
  formfield: yl,
  content: bl,
  floating: vl,
  label: wl,
  start: kl,
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
  className: u,
  visible: f = !0
}) {
  const w = Pe(), v = Pe();
  if (f === !1) return null;
  const y = l ?? w, p = typeof c == "function" ? c({
    inputId: y
  }) : c, m = gt(p) ? p.type : null, h = typeof m == "string", _ = gt(p) && typeof m != "symbol", x = gt(p) ? p.props : null, k = typeof x?.id == "string" ? x.id : void 0, g = h && gt(p) ? p.type.toLowerCase() : null, N = g != null && (g === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : g === "button" || g === "meter" || g === "output" || g === "progress" || g === "select" || g === "textarea"), $ = _ && (s != null || r || k == null && N), O = k != null || l != null || $, M = g === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, E = g === "textarea" || g === "input" && (M == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(M)), D = $ && gt(p) ? Ps(
    p,
    {
      id: k ?? y,
      ...i && E && x?.placeholder == null ? { placeholder: " " } : {},
      ...s != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          v
        ].filter((b) => typeof b == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : p, S = e != null ? /* @__PURE__ */ z(
    "label",
    {
      className: Kt.label,
      htmlFor: O ? k ?? y : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ o("span", { className: Kt.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ z(
    "div",
    {
      className: [
        Kt.formfield,
        Kt[d],
        i ? Kt.floating : null,
        r ? Kt.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        i ? null : S,
        /* @__PURE__ */ z("div", { className: Kt.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: Kt.start, children: t }),
          D,
          i ? S : null,
          n != null && /* @__PURE__ */ o("div", { className: Kt.end, children: n })
        ] }),
        s != null && /* @__PURE__ */ o("div", { id: v, className: Kt.helper, children: s })
      ]
    }
  );
}
const El = "_fieldset_uoyhf_1", zl = "_legend_uoyhf_11", Ml = "_legendText_uoyhf_20", jl = "_toggle_uoyhf_24", Il = "_content_uoyhf_45", Al = "_summary_uoyhf_49", yn = {
  fieldset: El,
  legend: zl,
  legendText: Ml,
  toggle: jl,
  content: Il,
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
  expandAriaLabel: u,
  collapseAriaLabel: f,
  onExpand: w,
  onCollapse: v,
  children: y,
  className: p,
  visible: m = !0
}) {
  const h = Pe(), [_, x] = U(d);
  if (m === !1) return null;
  const k = i ?? _, g = l ? `${h}-content` : void 0, N = () => {
    const S = !k;
    i === void 0 && x(S), S ? v?.() : w?.();
  }, $ = l || e != null || n != null || t != null, O = l ? k : !1, M = l && k && r != null, E = O ? a ?? "Expand" : c ?? "Collapse", D = O ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ z(
    "fieldset",
    {
      className: [yn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ o("legend", { className: yn.legend, children: l ? /* @__PURE__ */ z(rt, { children: [
          /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              className: yn.toggle,
              title: E,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !O,
              "aria-controls": g,
              onClick: N,
              children: [
                /* @__PURE__ */ o(
                  we,
                  {
                    icon: O ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(we, { icon: n, color: s, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ z(rt, { children: [
          n != null && /* @__PURE__ */ o(we, { icon: n, color: s, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: yn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: yn.content,
            id: g,
            hidden: O,
            children: y
          }
        ),
        M ? /* @__PURE__ */ o("div", { className: yn.summary, children: r }) : null
      ]
    }
  );
}
const Tl = "_form_19k3s_1", Pl = {
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
  const [r, a] = U({}), [c, u] = U(0), f = Q(r);
  f.current = r;
  const w = R((x) => {
    a(
      (k) => k[x.name] === x ? k : { ...k, [x.name]: x }
    );
  }, []), v = R((x) => {
    a((k) => {
      if (!(x in k)) return k;
      const g = { ...k };
      return delete g[x], g;
    });
  }, []), y = R(() => {
    const x = {};
    for (const k of Object.values(f.current)) {
      const g = k.validate();
      g.length > 0 && (x[k.name] = g);
    }
    return x;
  }, []), p = R(() => {
    const x = y();
    u((k) => k + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [y, e, t, n]), m = (x) => {
    s != null && l != null || (x.preventDefault(), p());
  }, h = xe(
    () => ({ registerField: w, unregisterField: v, submit: p, submitCount: c }),
    [w, v, p, c]
  ), _ = [Pl.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(Nr.Provider, { value: h, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: m,
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
function ew(e, t) {
  const { registerField: n, unregisterField: s, submitCount: l } = Ll(), [i, d] = U(t?.initialValue), [r, a] = U(!1), [c, u] = U(!1), f = Q(() => []);
  f.current = () => Rl(t?.validate ?? [], i), ge(() => (n({ name: e, validate: () => f.current() }), () => s(e)), [e, n, s]), ge(() => {
    l > 0 && (a(!0), u(!1));
  }, [l]);
  const w = r && !c ? f.current() : [];
  return { value: i, setValue: (y) => {
    d(y), u(!0);
  }, errors: w };
}
const Bl = "_select_1vjst_1", Fl = "_invalid_1vjst_33", Hl = "_xs_1vjst_40", ql = "_sm_1vjst_48", Kl = "_md_1vjst_56", Wl = "_lg_1vjst_62", Ul = "_xl_1vjst_68", $s = {
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
function ws(e) {
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
  if (!ws(e)) return l;
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
  if (!ws(e))
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
  const n = e.property, s = t === "CaseInsensitive", l = (c) => s ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${Jl(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, u) => {
    const f = typeof u == "string", w = f && s ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${w} ${Ql[c]} ${f && s ? l(i(u)) : i(u)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(u))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(u))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(u))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(u))}))`;
      case "In":
        return Array.isArray(u) ? `${w} in (${u.map((v) => i(v)).join(", ")})` : `${w} in (${i(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${w} in (${u.map((v) => i(v)).join(", ")}))` : `not(${w} in (${i(u)}))`;
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
const sa = "_filter_79035_1", ra = "_rows_79035_9", oa = "_row_79035_9", la = "_join_79035_21", aa = "_property_79035_30", ia = "_operator_79035_34", ca = "_value_79035_38", da = "_remove_79035_42", ua = "_bar_79035_58", fa = "_add_79035_64", _a = "_custom_79035_78", ha = "_summary_79035_82", pa = "_second_79035_87", ma = "_secondAdd_79035_91", ga = "_addSecond_79035_95", xa = "_joinSelect_79035_109", Xe = {
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
  joinSelect: xa
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
function tw({
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
  const [c, u] = U(
    () => s != null && s.length > 0 ? s.map((h, _) => ({ id: _, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Wn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (h, _) => {
    u(
      (x) => x.map((k) => k.id === h ? { ...k, ..._ } : k)
    );
  }, w = () => {
    const h = c[c.length - 1], _ = Math.max(0, ...c.map((k) => k.id)) + 1, x = e[0];
    u((k) => [
      ...k,
      {
        id: _,
        property: h?.property ?? x?.name ?? "",
        operator: Wn[e.find(
          (g) => g.name === (h?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (h) => {
    u(
      (_) => _.length > 1 ? _.filter((x) => x.id !== h) : _
    );
  }, y = xe(() => {
    const h = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !Un.includes(_.operator)) continue;
      const k = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: g } = _;
      g != null && ws(_) && (k.secondOperator = g, k.secondValue = _.secondValue, k.logicalOperator = _.logicalOperator ?? "And"), h.push(k);
    }
    return h;
  }, [c]), p = xe(() => r == null || y.length === 0 ? r : Cr(r, {
    operator: t,
    filters: y
  }, {
    caseSensitivity: n
  }), [r, y, t, n]);
  ge(() => {
    d != null && r != null && d(p ?? []);
  }, [p]);
  const m = (h) => e.find((_) => _.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ z("div", { className: [Xe.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: Xe.rows, role: "group", "aria-label": "Filter conditions", children: c.map((h, _) => {
      const x = m(h.property), k = l ? [Wn[x.type ?? "string"]] : Or, g = !Un.includes(h.operator), N = h.secondOperator != null;
      return /* @__PURE__ */ z(Ls, { children: [
        /* @__PURE__ */ z("div", { className: Xe.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: Xe.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            On,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Xe.property,
              value: h.property,
              onChange: ($) => {
                const O = e.find(
                  (M) => M.name === $.target.value
                );
                f(h.id, {
                  property: $.target.value,
                  operator: Wn[O?.type ?? "string"],
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
                const O = $.target.value;
                f(
                  h.id,
                  Un.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: k.map(($) => ({
                value: $,
                label: Ys[$]
              }))
            }
          ),
          g ? /* @__PURE__ */ o(
            Zs,
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
              className: Xe.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => v(h.id),
              children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
            }
          )
        ] }),
        g ? N ? /* @__PURE__ */ z(
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
                On,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: Xe.operator,
                  value: h.secondOperator,
                  onChange: ($) => {
                    const O = $.target.value;
                    f(
                      h.id,
                      Un.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: k.map(($) => ({
                    value: $,
                    label: Ys[$]
                  }))
                }
              ),
              h.secondOperator == null || !Un.includes(h.secondOperator) ? /* @__PURE__ */ o(
                Zs,
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
                  className: Xe.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => f(h.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: Xe.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Xe.addSecond,
            onClick: () => f(h.id, {
              secondOperator: Wn[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ z("div", { className: Xe.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: Xe.add, onClick: w, children: "Add filter" }),
      a != null ? /* @__PURE__ */ o("div", { className: Xe.custom, children: a }) : null,
      r != null ? /* @__PURE__ */ z("span", { className: Xe.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const ya = "_pager_15t5w_1", ba = "_alignLeft_15t5w_10", va = "_alignCenter_15t5w_14", wa = "_alignRight_15t5w_18", ka = "_alignJustify_15t5w_22", $a = "_summary_15t5w_26", Na = "_controls_15t5w_31", Oa = "_button_15t5w_37", Sa = "_active_15t5w_73", Ca = "_ellipsis_15t5w_85", Da = "_size_15t5w_91", ht = {
  pager: ya,
  alignLeft: ba,
  alignCenter: va,
  alignRight: wa,
  alignJustify: ka,
  summary: $a,
  controls: Na,
  button: Oa,
  active: Sa,
  ellipsis: Ca,
  size: Da
};
function Ea(e, t, n, s) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(s));
}
function Js(e, t) {
  return e.replace("{0}", String(t));
}
function za(e, t, n) {
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
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: f,
  pageSizeText: w = "Items per page",
  firstPageTitle: v = "First page",
  prevPageTitle: y = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: x,
  onPageSizeChange: k,
  ariaLabel: g = "Pagination",
  className: N,
  visible: $ = !0
}) {
  const O = n ?? s, [M, E] = U(O), D = n !== void 0, S = D ? O : M, b = Math.max(1, Math.ceil(e / t)), C = Math.min(Math.max(1, S), b), A = a ?? !0, T = d || b > 1, I = za(C, b, i), F = R(
    (Y) => {
      const pe = Math.min(Math.max(1, Y), b);
      D || E(pe);
      const de = (pe - 1) * t;
      x?.({
        page: pe,
        skip: de,
        top: t,
        pageCount: b,
        pageSize: t
      });
    },
    [D, x, b, t]
  ), L = r === "center" ? ht.alignCenter : r === "right" ? ht.alignRight : r === "justify" ? ht.alignJustify : ht.alignLeft, V = {
    count: e,
    pageNumber: C,
    pageSize: t,
    pageCount: b
  }, ee = (Y) => {
    const pe = Array.from(
      Y.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), de = pe.indexOf(document.activeElement);
    de !== -1 && (Y.key === "ArrowRight" || Y.key === "ArrowDown" ? (Y.preventDefault(), (pe[de + 1] ?? pe[0])?.focus()) : Y.key === "ArrowLeft" || Y.key === "ArrowUp" ? (Y.preventDefault(), (pe[de - 1] ?? pe[pe.length - 1])?.focus()) : Y.key === "Home" ? (Y.preventDefault(), pe[0]?.focus()) : Y.key === "End" && (Y.preventDefault(), pe[pe.length - 1]?.focus()));
  };
  return $ === !1 || !T ? null : /* @__PURE__ */ z(
    "nav",
    {
      className: [ht.pager, L, N].filter(Boolean).join(" "),
      "aria-label": g,
      children: [
        A && /* @__PURE__ */ o("span", { className: ht.summary, "aria-live": "polite", children: f ? f(V) : Ea(u, C, b, e) }),
        /* @__PURE__ */ z(
          "div",
          {
            className: ht.controls,
            role: "group",
            "aria-label": g,
            onKeyDown: ee,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: C <= 1,
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
                  disabled: C <= 1,
                  onClick: () => F(C - 1),
                  "aria-label": y,
                  title: y,
                  children: "‹"
                }
              ),
              I.map(
                (Y, pe) => Y === "ellipsis" ? /* @__PURE__ */ o("span", { className: ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${pe}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": Y,
                    className: [ht.button, Y === C ? ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": Y === C ? "page" : void 0,
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
                  disabled: C >= b,
                  onClick: () => F(C + 1),
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
                  disabled: C >= b,
                  onClick: () => F(b),
                  "aria-label": m,
                  title: m,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ z("label", { className: ht.size, children: [
          /* @__PURE__ */ o("span", { children: w }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (Y) => k?.(Number(Y.target.value)),
              "aria-label": w,
              children: l.map((Y) => /* @__PURE__ */ o("option", { value: Y, children: Y }, Y))
            }
          )
        ] })
      ]
    }
  );
}
function zs(e) {
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
function ja(e, t, n, s, l) {
  if (t.length === 0) return e.map((r) => ({ type: "row", row: r }));
  const i = (r) => n.find((a) => a.property === r), d = (r, a, c) => {
    const u = t[a];
    if (u === void 0)
      return r.map((p) => ({ type: "row", row: p }));
    const f = i(u), w = /* @__PURE__ */ new Map(), v = [];
    r.forEach((p) => {
      const m = String(l(p, u) ?? ""), h = w.get(m);
      h ? h.push(p) : (w.set(m, [p]), v.push(m));
    });
    const y = [];
    return v.forEach((p) => {
      const m = w.get(p), h = [...c, p].join(Dr), _ = m[0], x = _ !== void 0 ? l(_, u) : void 0;
      y.push({
        type: "group",
        group: {
          key: h,
          display: xs(x, f?.format),
          property: u,
          title: f?.title ?? u,
          count: m.length,
          level: a
        }
      }), s.has(h) && y.push(...d(m, a + 1, [...c, p]));
    }), y;
  };
  return d(e, 0, []);
}
function Qs(e, t, n) {
  const s = /* @__PURE__ */ new Set(), l = (i, d, r) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), u = [];
    i.forEach((f) => {
      const w = String(n(f, a) ?? ""), v = c.get(w);
      v ? v.push(f) : (c.set(w, [f]), u.push(w));
    }), u.forEach((f) => {
      const w = [...r, f].join(Dr);
      s.add(w), l(c.get(f), d + 1, [...r, f]);
    });
  };
  return l(e, 0, []), s;
}
function ls(e, t) {
  return e.property ?? `col-${t}`;
}
function Ia(e, t) {
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
function xs(e, t) {
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
      t.map((d) => s(xs(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Ha = "_grid_1z0kw_1", qa = "_toolbar_1z0kw_8", Ka = "_picker_1z0kw_13", Wa = "_pickerButton_1z0kw_17", Ua = "_pickerPanel_1z0kw_31", Va = "_pickerItem_1z0kw_46", Ga = "_groupPanel_1z0kw_55", Xa = "_groupPanelActive_1z0kw_66", Ya = "_groupPanelText_1z0kw_70", Za = "_groupChip_1z0kw_74", Ja = "_groupRemove_1z0kw_85", Qa = "_groupRow_1z0kw_94", ei = "_groupCell_1z0kw_98", ti = "_groupToggle_1z0kw_103", ni = "_editRow_1z0kw_116", si = "_editCell_1z0kw_120", ri = "_editInput_1z0kw_125", oi = "_commandCell_1z0kw_135", li = "_commandButton_1z0kw_141", ai = "_data_1z0kw_156", ii = "_table_1z0kw_163", ci = "_header_1z0kw_169", di = "_center_1z0kw_181", ui = "_right_1z0kw_185", fi = "_sortButton_1z0kw_189", _i = "_sortIndicator_1z0kw_207", hi = "_sortIndex_1z0kw_211", pi = "_cell_1z0kw_222", mi = "_clickable_1z0kw_236", gi = "_frozen_1z0kw_244", xi = "_selected_1z0kw_250", yi = "_resizeHandle_1z0kw_258", bi = "_filterCell_1z0kw_276", vi = "_filterSelect_1z0kw_284", wi = "_filterInput_1z0kw_294", ki = "_empty_1z0kw_305", $i = "_loading_1z0kw_311", Ni = "_visuallyHidden_1z0kw_325", Oi = "_virtualScroller_1z0kw_334", Si = "_spacerRow_1z0kw_339", Ci = "_footerRow_1z0kw_344", Di = "_footerCell_1z0kw_348", Ei = "_footerValue_1z0kw_355", he = {
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
  selected: xi,
  resizeHandle: yi,
  filterCell: bi,
  filterSelect: vi,
  filterInput: wi,
  empty: ki,
  loading: $i,
  visuallyHidden: Ni,
  virtualScroller: Oi,
  spacerRow: Si,
  footerRow: Ci,
  footerCell: Di,
  footerValue: Ei
}, zi = {
  Ascending: "ascending",
  Descending: "descending"
};
function nr(e, t) {
  return e.filterable ?? t;
}
function Mi(e, t) {
  return e.sortable ?? t;
}
function ji(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function nw({
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
  pageSize: u = 10,
  pageSizeOptions: f,
  pageNumbersCount: w = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: y = !0,
  showPageSizeSelector: p = !0,
  selectionMode: m = "None",
  selectedKeys: h,
  onSelectionChange: _,
  showColumnPicker: x = !1,
  columnPickerText: k = "Columns",
  allowColumnResize: g = !1,
  allowColumnReorder: N = !1,
  allowGrouping: $ = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: M = !0,
  aggregates: E,
  showExportButton: D = !1,
  exportFileName: S = "grid-data",
  serverMode: b = !1,
  totalCount: C,
  onRangeChange: A,
  virtualize: T = !1,
  virtualRowHeight: I = 40,
  virtualHeight: F = 480,
  editMode: L = "None",
  allowRowCreate: V = !1,
  onRowUpdate: ee,
  onRowCreate: Y,
  onRowDelete: pe,
  isLoading: de = !1,
  empty: re = "No records found",
  ariaLabel: q,
  className: ie,
  onRowClick: se
}) {
  const ue = q != null ? `${q} ` : "", [oe, $e] = U([]), [Oe, Ye] = U(
    /* @__PURE__ */ new Map()
  ), [ve, Be] = U(1), [ke, ot] = U(u), [tt, Ze] = U(
    () => e.map((P, B) => ls(P, B))
  ), [Nt, xt] = U(
    () => new Set(
      e.map((P, B) => P.visible !== !1 ? ls(P, B) : "").filter(Boolean)
    )
  ), [lt, G] = U({}), [j, W] = U(!1), [Z, _e] = U([]), [te, ye] = U(
    null
  ), [Ee, Fe] = U(null), [He, nt] = U({}), [on, J] = U(0), [Se, dt] = U(F), zt = Q(null), ut = Q(null), Ce = xe(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((B, ae) => P.set(ls(B, ae), B)), P;
  }, [e]), Ae = xe(
    () => tt.filter((P) => Nt.has(P)).map((P) => ({ key: P, column: Ce.get(P) })).filter(
      (P) => P.column != null
    ),
    [tt, Nt, Ce]
  ), Mt = xe(
    () => Ia(Ae, lt),
    [Ae, lt]
  ), yt = L !== "None" || pe != null || V, Je = xe(() => {
    if (b) {
      const P = C ?? t.length, B = Math.max(1, Math.ceil(P / ke));
      return {
        items: [...t],
        filtered: [...t],
        total: P,
        pageCount: B,
        pageNumber: ve,
        pageSize: ke,
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
        pageSize: c ? ke : Number.MAX_SAFE_INTEGER
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
    ke,
    a,
    r,
    e,
    b,
    C,
    c
  ]), K = Q(A);
  ge(() => {
    K.current = A;
  });
  const le = xe(
    () => [...Oe.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, B]) => ({
      property: P,
      operator: B.operator ?? tr(
        e.find((ae) => ae.property === P)?.type ?? "string"
      ),
      value: B.value ?? ""
    })),
    [Oe, e]
  );
  ge(() => {
    !b || K.current == null || K.current({
      start: (ve - 1) * ke,
      count: ke,
      pageNumber: ve,
      pageSize: ke,
      sorts: oe,
      filters: le,
      logicalOperator: a
    });
  }, [
    b,
    ve,
    ke,
    oe,
    le,
    a
  ]);
  const je = xe(() => new Set(Z), [Z]), Te = xe(() => te || (M ? Qs(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), [te, M, Je.items, Z]), Ft = xe(
    () => ja(Je.items, Z, e, Te, Nn),
    [Je.items, Z, e, Te]
  ), st = xe(
    () => Z.length > 0 ? Ae.filter(
      (P) => P.column.property == null || !je.has(P.column.property)
    ) : Ae,
    [Ae, Z, je]
  ), H = (P) => {
    P !== "" && $e(Ta(oe, P, { multi: l }));
  }, X = (P, B) => {
    Ye((ae) => {
      const ce = new Map(ae);
      return ce.set(P, B), ce;
    }), Be(1);
  }, ne = (P) => {
    ot(P), Be(1);
  }, me = (P) => {
    if (m === "None") return;
    const B = n(P), ae = h ?? [];
    let ce;
    m === "Single" ? ce = ae.length === 1 && ae[0] === B ? [] : [B] : ce = ae.includes(B) ? ae.filter((Re) => Re !== B) : [...ae, B], _?.(ce);
  }, fe = (P) => {
    se?.(P);
  }, be = (P, B, ae) => {
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
    xt((B) => {
      const ae = new Set(B);
      return ae.has(P) ? ae.delete(P) : ae.add(P), ae;
    });
  }, et = () => {
    const P = ut.current;
    if (ut.current = null, !P || !$) return;
    const ae = Ce.get(P)?.property;
    ae && (_e(
      (ce) => ce.includes(ae) ? ce : [...ce, ae]
    ), ye(null));
  }, Ge = (P) => {
    _e((B) => B.filter((ae) => ae !== P)), ye(null);
  }, Ht = (P) => {
    ye((B) => {
      const ae = B ?? (M ? Qs(Je.items, Z, Nn) : /* @__PURE__ */ new Set()), ce = new Set(ae);
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
    if (Ee === "__new__") {
      const B = Object.fromEntries(
        e.filter((ae) => ae.property).map((ae) => [ae.property, He[ae.property]])
      );
      Y?.(B);
    } else if (P != null) {
      const B = { ...P, ...He };
      ee?.(P, B);
    }
    Rn();
  }, mn = c && (v === "Top" || v === "TopAndBottom"), qs = c && (v === "Bottom" || v === "TopAndBottom"), Hr = d && e.some((P) => nr(P, d)), qr = (P, B, ae) => P.render ? P.render(B, { index: 0 }) : xs(Nn(B, P.property), P.format), Kr = (P) => {
    const B = [he.cell];
    return P.align === "center" && B.push(he.center), P.align === "right" && B.push(he.right), P.frozen && B.push(he.frozen), B.join(" ");
  }, Ks = b ? t : Je.filtered, Wr = () => {
    const P = Fa(
      Ks,
      st.map((Re) => Re.column)
    ), B = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ae = URL.createObjectURL(B), ce = document.createElement("a");
    ce.href = ae, ce.download = `${S}.csv`, document.body.appendChild(ce), ce.click(), ce.remove(), URL.revokeObjectURL(ae);
  }, Cn = Ft.length, gn = xe(() => {
    if (!T || Cn === 0)
      return { start: 0, end: Cn, top: 0, bottom: 0 };
    const P = 5, B = Math.max(
      0,
      Math.floor(on / I) - P
    ), ae = Math.ceil(Se / I) + P * 2, ce = Math.min(Cn, B + ae), Re = B * I, Pt = Math.max(0, (Cn - ce) * I);
    return { start: B, end: ce, top: Re, bottom: Pt };
  }, [T, Cn, on, I, Se]), ks = st.length + (yt ? 1 : 0);
  return /* @__PURE__ */ z("div", { className: [he.grid, ie].filter(Boolean).join(" "), children: [
    mn && /* @__PURE__ */ o(
      zs,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: f,
        pageNumbersCount: w,
        showSummary: y,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${qs ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    ),
    ($ || V || x || D) && /* @__PURE__ */ z("div", { className: he.toolbar, children: [
      $ && /* @__PURE__ */ o(
        "div",
        {
          className: [
            he.groupPanel,
            Z.length > 0 ? he.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (P) => P.preventDefault() : void 0,
          onDrop: $ ? et : void 0,
          children: Z.length > 0 ? Z.map((P) => {
            const B = e.find((ae) => ae.property === P)?.title ?? P;
            return /* @__PURE__ */ z("span", { className: he.groupChip, children: [
              B,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: he.groupRemove,
                  onClick: () => Ge(P),
                  "aria-label": `Remove group by ${B}`,
                  children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
                }
              )
            ] }, P);
          }) : /* @__PURE__ */ o("span", { className: he.groupPanelText, children: O })
        }
      ),
      V && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: he.pickerButton,
          onClick: ln,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ z("div", { className: he.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: he.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": j,
            onClick: () => W((P) => !P),
            children: k
          }
        ),
        j && /* @__PURE__ */ o(
          "div",
          {
            className: he.pickerPanel,
            role: "menu",
            "aria-label": k,
            children: e.map((P, B) => {
              const ae = ls(P, B);
              return /* @__PURE__ */ z("label", { className: he.pickerItem, children: [
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
      D && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: he.pickerButton,
          onClick: Wr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ z(
      "div",
      {
        className: [he.data, T ? he.virtualScroller : ""].filter(Boolean).join(" "),
        style: T ? { maxHeight: F } : void 0,
        onScroll: T ? (P) => {
          J(P.currentTarget.scrollTop), dt(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ z(
            "table",
            {
              className: he.table,
              role: "grid",
              "aria-rowcount": (T ? Cn : Je.total) + 1,
              "aria-label": q,
              "aria-busy": de || void 0,
              children: [
                /* @__PURE__ */ z("colgroup", { children: [
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
                /* @__PURE__ */ z("thead", { children: [
                  /* @__PURE__ */ z("tr", { children: [
                    st.map(({ key: P, column: B }) => {
                      const ae = Mi(B, s), ce = oe.find((_t) => _t.property === B.property), Re = ce ? oe.indexOf(ce) + 1 : 0, Pt = B.align ?? "left";
                      return /* @__PURE__ */ z(
                        "th",
                        {
                          "aria-sort": ae && ce ? zi[ce.sortOrder] : "none",
                          className: [
                            he.header,
                            Pt === "center" ? he.center : "",
                            Pt === "right" ? he.right : "",
                            B.frozen ? he.frozen : ""
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
                                className: he.sortButton,
                                onClick: () => B.property != null && H(B.property),
                                "aria-label": ce ? ce.sortOrder === "Ascending" ? `Sort ${B.title ?? B.property} descending` : `Sort ${B.title ?? B.property} ascending` : `Sort ${B.title ?? B.property} ascending`,
                                children: [
                                  B.title ?? B.property,
                                  ce && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: he.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ce.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  Re > 1 && i && /* @__PURE__ */ o("span", { className: he.sortIndex, children: Re })
                                ]
                              }
                            ) : B.title ?? B.property,
                            g && /* @__PURE__ */ o(
                              "span",
                              {
                                className: he.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${B.title ?? B.property}`,
                                onMouseDown: (_t) => {
                                  _t.preventDefault(), _t.stopPropagation();
                                  const Dn = lt[P] ?? B.width, qt = Dn ? parseFloat(Dn) : 96;
                                  be(
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
                    yt && /* @__PURE__ */ o("th", { className: he.header, scope: "col", children: "Actions" })
                  ] }),
                  Hr && /* @__PURE__ */ o("tr", { children: st.map(({ key: P, column: B }) => {
                    if (!nr(B, d))
                      return /* @__PURE__ */ o("td", { className: he.filterCell }, P);
                    const ae = Oe.get(B.property ?? "");
                    return /* @__PURE__ */ z("td", { className: he.filterCell, children: [
                      /* @__PURE__ */ z(
                        "label",
                        {
                          className: he.visuallyHidden,
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
                          className: he.filterSelect,
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
                          className: he.filterInput,
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
                  Ee === "__new__" && /* @__PURE__ */ z("tr", { className: he.editRow, children: [
                    st.map(({ key: P, column: B }) => /* @__PURE__ */ o("td", { className: he.editCell, children: B.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: he.editInput,
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
                    yt && /* @__PURE__ */ z("td", { className: he.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: he.commandButton,
                          onClick: () => Bn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: he.commandButton,
                          onClick: Rn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  gn.top > 0 && /* @__PURE__ */ o("tr", { className: he.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: ks,
                      style: { height: gn.top }
                    }
                  ) }),
                  Ft.slice(gn.start, gn.end).map((P, B) => {
                    const ae = gn.start + B, ce = T ? ae + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const qt = Te.has(P.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: he.groupRow,
                          "aria-rowindex": ce,
                          children: /* @__PURE__ */ o("td", { colSpan: ks, className: he.groupCell, children: /* @__PURE__ */ z(
                            "button",
                            {
                              type: "button",
                              className: he.groupToggle,
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
                    return /* @__PURE__ */ z(
                      "tr",
                      {
                        "aria-rowindex": ce,
                        className: [
                          se || m !== "None" ? he.clickable : "",
                          _t ? he.selected : "",
                          Dn ? he.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": m !== "None" ? _t : void 0,
                        onClick: se || m !== "None" ? (qt) => {
                          ji(qt.target) || (fe(Re), me(Re));
                        } : void 0,
                        children: [
                          st.map(({ key: qt, column: bt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Kr(bt),
                              style: bt.frozen ? { left: Mt[qt] } : void 0,
                              children: Dn && bt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: he.editInput,
                                  type: bt.type === "number" ? "number" : bt.type === "boolean" ? "checkbox" : "text",
                                  checked: bt.type === "boolean" ? !!He[bt.property] : void 0,
                                  value: bt.type === "boolean" ? void 0 : String(He[bt.property] ?? ""),
                                  onChange: (Ws) => nt((Ur) => ({
                                    ...Ur,
                                    [bt.property]: bt.type === "boolean" ? Ws.target.checked : Ws.target.value
                                  })),
                                  "aria-label": `${bt.title ?? bt.property} (edit)`
                                }
                              ) : qr(bt, Re)
                            },
                            qt
                          )),
                          yt && /* @__PURE__ */ o("td", { className: he.commandCell, children: Dn ? /* @__PURE__ */ z(rt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => Bn(Re),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: Rn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ z(rt, { children: [
                            L !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => Tt(Re),
                                children: "Edit"
                              }
                            ),
                            pe && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => pe(Re),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Pt
                    );
                  }),
                  gn.bottom > 0 && /* @__PURE__ */ o("tr", { className: he.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: ks,
                      style: { height: gn.bottom }
                    }
                  ) })
                ] }),
                E && E.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ z("tr", { className: he.footerRow, children: [
                  st.map(({ key: P, column: B }) => {
                    const ae = E.filter(
                      (ce) => ce.property === B.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          he.footerCell,
                          B.align === "right" ? he.right : "",
                          B.align === "center" ? he.center : ""
                        ].filter(Boolean).join(" "),
                        children: ae.map((ce, Re) => /* @__PURE__ */ z(
                          "div",
                          {
                            className: he.footerValue,
                            children: [
                              ce.title ? `${ce.title}: ` : "",
                              xs(
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
                  yt && /* @__PURE__ */ o("td", { className: he.footerCell })
                ] }) })
              ]
            }
          ),
          Je.items.length === 0 && !de && /* @__PURE__ */ o("div", { className: he.empty, children: re }),
          de && /* @__PURE__ */ o("div", { className: he.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    qs && /* @__PURE__ */ o(
      zs,
      {
        pageNumber: Je.pageNumber,
        pageSize: Je.pageSize,
        count: Je.total,
        pageSizeOptions: f,
        pageNumbersCount: w,
        showSummary: y,
        showPageSizeSelector: p,
        ariaLabel: `${ue}${mn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Be,
        onPageSizeChange: ne
      }
    )
  ] });
}
const Ii = "_wrap_1e4xo_1", Ai = "_grid_1e4xo_7", Ti = "_stacked_1e4xo_13", Pi = "_item_1e4xo_19", Li = "_empty_1e4xo_25", Vn = {
  wrap: Ii,
  grid: Ai,
  stacked: Ti,
  item: Pi,
  empty: Li
};
function sw({
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
  className: u,
  ariaLabel: f = "Data list"
}) {
  const [w, v] = U(1), [y, p] = U(t), m = e.length, h = Math.max(1, Math.ceil(m / y)), _ = Math.min(Math.max(1, w), h), x = xe(() => {
    const g = (_ - 1) * y;
    return e.slice(g, g + y);
  }, [e, _, y]), k = s ? Vn.grid : Vn.stacked;
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Vn.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        a && r != null ? r : m === 0 ? d ?? /* @__PURE__ */ o("div", { className: Vn.empty, children: i }) : /* @__PURE__ */ o("div", { className: k, children: x.map((g, N) => /* @__PURE__ */ o("div", { className: Vn.item, children: l ? l(g, N) : String(g) }, N)) }),
        /* @__PURE__ */ o(
          zs,
          {
            ariaLabel: `${f} Pagination`,
            pageNumber: _,
            pageSize: y,
            count: m,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: v,
            onPageSizeChange: (g) => {
              p(g), v(1);
            }
          }
        )
      ]
    }
  );
}
const Ri = "_label_1qfpw_1", Bi = {
  label: Ri
}, rw = Le(function({ className: t, children: n, ...s }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [Bi.label, t].filter(Boolean).join(" "),
      ...s,
      children: n
    }
  );
}), Fi = "_textbox_1wq7t_1", Hi = "_invalid_1wq7t_37", qi = "_xs_1wq7t_44", Ki = "_sm_1wq7t_50", Wi = "_md_1wq7t_56", Ui = "_lg_1wq7t_62", Vi = "_xl_1wq7t_68", Ns = {
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
), ow = Gi, Xi = "_checkbox_e1een_1", Yi = {
  checkbox: Xi
}, lw = Le(
  function({ className: t, indeterminate: n = !1, ...s }, l) {
    const i = Q(null);
    return ge(() => {
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
  switch: "_switch_luh7n_1"
}, aw = Le(function({ className: t, ...n }, s) {
  return /* @__PURE__ */ o(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [Zi.switch, t].filter(Boolean).join(" "),
      ...n
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
function iw({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: s = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const r = Pe(), a = Q(null), c = Q(null), u = Q(null), [f, w] = U(!1), [v, y] = U(null), p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), c.current !== null && (window.clearTimeout(c.current), c.current = null);
  }, m = () => {
    a.current = window.setTimeout(() => {
      w(!0), l != null && (c.current = window.setTimeout(() => w(!1), l));
    }, s);
  }, h = () => {
    p(), w(!1);
  };
  if (ge(() => () => p(), []), ge(() => {
    if (i || !f) return;
    const x = (k) => {
      k.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [i, f]), ge(() => {
    if (!i) return;
    let x = null, k = null, g = null;
    const N = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, $ = () => {
      k !== null && (window.clearTimeout(k), k = null);
    }, O = () => {
      N(), $(), g = null, y(null);
    }, M = (A) => {
      N(), $(), g = A, x = window.setTimeout(() => {
        x = null, y(A), l != null && (k = window.setTimeout(O, l));
      }, s);
    }, E = (A) => A instanceof Element ? A.closest(i) : null, D = (A) => {
      const T = E(A.target);
      !T || T === g || M(T);
    }, S = (A) => {
      const T = E(A.target);
      if (!T || T !== g) return;
      const I = A.relatedTarget;
      I instanceof Element && T.contains(I) || O();
    }, b = (A) => {
      A.key === "Escape" && O();
    }, C = () => O();
    return document.addEventListener("mouseover", D), document.addEventListener("mouseout", S), document.addEventListener("focusin", D), document.addEventListener("focusout", S), document.addEventListener("keydown", b), document.addEventListener("scroll", C, !0), window.addEventListener("resize", C), () => {
      N(), $(), document.removeEventListener("mouseover", D), document.removeEventListener("mouseout", S), document.removeEventListener("focusin", D), document.removeEventListener("focusout", S), document.removeEventListener("keydown", b), document.removeEventListener("scroll", C, !0), window.removeEventListener("resize", C), g = null, y(null);
    };
  }, [i, s, l]), Es(() => {
    const x = v;
    if (!x) return;
    const k = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [k, r].filter(Boolean).join(" ")
    ), () => {
      k == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", k);
    };
  }, [v, r]), Es(() => {
    const x = u.current, k = v;
    !x || !k || Object.assign(
      x.style,
      lc(k.getBoundingClientRect(), n)
    );
  }, [v, n]), i)
    return v ? /* @__PURE__ */ z(
      "span",
      {
        ref: u,
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
      f ? r : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ z(
      "span",
      {
        className: [cn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: m,
        onMouseLeave: h,
        onFocus: m,
        onBlur: h,
        children: [
          _,
          f && /* @__PURE__ */ z(
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
const ac = "_dialog_xvua2_1", ic = "_sm_xvua2_72", cc = "_resizable_xvua2_78", dc = "_md_xvua2_81", uc = "_lg_xvua2_85", fc = "_header_xvua2_89", _c = "_title_xvua2_100", hc = "_description_xvua2_107", pc = "_close_xvua2_114", mc = "_body_xvua2_144", gc = "_footer_xvua2_156", Zt = {
  dialog: ac,
  "se-dialog-in": "_se-dialog-in_xvua2_1",
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
function xc({
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
  closeOnEsc: u = !0,
  resizable: f = !1,
  canClose: w,
  className: v
}) {
  const y = Q(null), p = Pe(), m = Pe(), h = Q(t);
  ge(() => {
    h.current = t;
  });
  const _ = Q(w);
  ge(() => {
    _.current = w;
  });
  const x = Q(u);
  ge(() => {
    x.current = u;
  });
  const k = Q(!1), g = Q(!1), N = R(() => {
    if (k.current) return;
    const O = _.current?.();
    if (O instanceof Promise) {
      O.then((M) => {
        M && !k.current && (k.current = !0, h.current());
      });
      return;
    }
    O !== !1 && (k.current = !0, h.current());
  }, []), $ = R(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    h.current();
  }, []);
  return ge(() => {
    const O = y.current;
    if (O)
      if (e && !O.open) {
        const M = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        O.showModal(), (O.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? O.querySelector("button"))?.focus();
        const D = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const S = (b) => {
          b.preventDefault(), x.current && N();
        };
        return O.addEventListener("cancel", S), () => {
          O.removeEventListener("cancel", S), document.body.style.overflow = D, M?.focus({ preventScroll: !0 });
        };
      } else !e && O.open && (g.current = k.current, k.current = !1, O.close());
  }, [e, N]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ z(
    "dialog",
    {
      ref: y,
      className: [
        Zt.dialog,
        Zt[d],
        f ? Zt.resizable : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: $,
      onClick: (O) => {
        O.target === y.current && c && N();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": s ? m : void 0,
      children: [
        n && /* @__PURE__ */ z("header", { className: Zt.header, children: [
          /* @__PURE__ */ z("div", { children: [
            /* @__PURE__ */ o("h2", { id: p, className: Zt.title, children: n }),
            s && /* @__PURE__ */ o("p", { id: m, className: Zt.description, children: s })
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
              children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: Zt.body, children: l }),
        i && /* @__PURE__ */ o("footer", { className: Zt.footer, children: i })
      ]
    }
  );
}
const yc = "_typography_1jy8x_1", bc = "_h1_1jy8x_39", vc = "_h2_1jy8x_45", wc = "_h3_1jy8x_51", kc = "_h4_1jy8x_57", $c = "_h5_1jy8x_63", Nc = "_h6_1jy8x_69", Oc = "_button_1jy8x_99", Sc = "_caption_1jy8x_106", Cc = "_overline_1jy8x_112", Os = {
  typography: yc,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: bc,
  h2: vc,
  h3: wc,
  h4: kc,
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
}, Ec = {
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
}, zc = {
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
}, jc = Le(function({
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
  const u = n === "Auto" ? Dc[t] : zc[n];
  return /* @__PURE__ */ o(
    u,
    {
      ref: c,
      className: [
        Os.typography,
        Os[Ec[t]],
        s ? Os[Mc[s]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? r
    }
  );
}), Er = Ln(null);
function cw() {
  const e = hn(Er);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function dw({ children: e }) {
  const [t, n] = U([]), s = Q(0), l = xe(
    () => ({
      confirm: (r = {}) => new Promise((a) => {
        s.current += 1;
        const c = s.current;
        n((u) => [...u, { seq: c, kind: "confirm", options: r, resolve: a }]);
      }),
      alert: (r = {}) => new Promise((a) => {
        s.current += 1;
        const c = s.current;
        n((u) => [...u, { seq: c, kind: "alert", options: r, resolve: a }]);
      })
    }),
    []
  ), i = t[0], d = (r) => {
    i && (i.kind === "confirm" ? i.resolve(r) : i.resolve(), n((a) => a.slice(1)));
  };
  return /* @__PURE__ */ z(Er.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      xc,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: i?.options.title ?? (i?.kind === "confirm" ? "Confirm" : "Alert"),
        size: i?.options.size,
        footer: i?.kind === "confirm" ? /* @__PURE__ */ z(rt, { children: [
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
        children: i?.options.message != null && /* @__PURE__ */ o(jc, { textStyle: "Body1", children: i.options.message })
      },
      i?.seq ?? 0
    )
  ] });
}
const Ic = "_viewport_1wx9a_1", Ac = "_topLeft_1wx9a_13", Tc = "_topRight_1wx9a_20", Pc = "_bottomLeft_1wx9a_25", Lc = "_toast_1wx9a_30", Rc = "_leaving_1wx9a_61", Bc = "_info_1wx9a_77", Fc = "_success_1wx9a_86", Hc = "_warning_1wx9a_95", qc = "_danger_1wx9a_104", Kc = "_content_1wx9a_113", Wc = "_title_1wx9a_118", Uc = "_description_1wx9a_141", Vc = "_dismiss_1wx9a_148", Gc = "_actions_1wx9a_169", Xc = "_action_1wx9a_169", Yc = "_cancel_1wx9a_177", Zc = "_progress_1wx9a_215", Ot = {
  viewport: Ic,
  topLeft: Ac,
  topRight: Tc,
  bottomLeft: Pc,
  toast: Lc,
  "se-toast-in": "_se-toast-in_1wx9a_1",
  leaving: Rc,
  "se-toast-out": "_se-toast-out_1wx9a_1",
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
  "se-toast-progress": "_se-toast-progress_1wx9a_1"
}, zr = Ln(null);
function uw() {
  const e = hn(zr);
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
function fw({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: s = !0,
  className: l
}) {
  const [i, d] = U([]), [r, a] = U(!1), c = Q([]), u = Q(/* @__PURE__ */ new Map()), f = Q(!1), w = Q(0), v = (S) => {
    f.current = S, a(S);
  }, y = R((S) => {
    const b = u.current.get(S);
    b && (window.clearTimeout(b.timeoutId), b.remaining = Math.max(
      0,
      b.remaining - (Date.now() - b.startedAt)
    ));
  }, []), p = R((S) => {
    const b = u.current.get(S);
    b && (window.clearTimeout(b.timeoutId), u.current.delete(S));
  }, []), m = R(
    (S) => {
      p(S), d((b) => {
        const C = b.filter((A) => A.id !== S);
        return c.current = C, C;
      });
    },
    [p]
  ), h = R(
    (S) => {
      const b = c.current.find((C) => C.id === S);
      !b || b.leaving || (b.onAutoClose?.(), m(S));
    },
    [m]
  ), _ = R(
    (S) => {
      const b = u.current.get(S);
      !b || b.remaining <= 0 || (b.startedAt = Date.now(), b.timeoutId = window.setTimeout(() => h(S), b.remaining));
    },
    [h]
  ), x = R(() => {
    f.current || u.current.forEach((S, b) => y(b)), v(!0);
  }, [y]), k = R(() => {
    u.current.forEach((S, b) => _(b)), v(!1);
  }, [_]);
  ge(() => {
    if (!s) return;
    const S = () => {
      document.hidden ? x() : k();
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, [s, x, k]);
  const g = R(
    (S) => {
      const b = c.current.find((C) => C.id === S);
      !b || b.leaving || (b.onDismiss?.(), d((C) => {
        const A = C.map(
          (T) => T.id === S ? { ...T, leaving: !0 } : T
        );
        return c.current = A, A;
      }), window.setTimeout(() => m(S), Jc));
    },
    [m]
  ), N = R(
    (S) => {
      if (S.durationMs <= 0) return;
      const b = {
        remaining: S.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(S.id, b), f.current || _(S.id);
    },
    [_]
  ), $ = R(
    (S) => {
      const b = c.current.find((A) => A.id === S.id), C = {
        id: S.id ?? ++w.current,
        title: S.title,
        description: S.description,
        severity: S.severity ?? "info",
        durationMs: S.durationMs ?? t,
        action: S.action,
        cancel: S.cancel,
        dismissible: S.dismissible ?? !0,
        closeOnClick: S.closeOnClick ?? !1,
        showProgress: S.showProgress ?? !1,
        position: S.position ?? n,
        onDismiss: S.onDismiss,
        onAutoClose: S.onAutoClose
      };
      d((A) => {
        const T = b ? A.map(
          (I) => I.id === C.id ? { ...C, leaving: !1 } : I
        ) : [...A, C];
        return c.current = T, T;
      }), b && p(C.id), N(C);
    },
    [t, n, N, p]
  ), O = xe(() => ({ toast: $ }), [$]), M = xe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((S) => S.position)])),
    [n, i]
  ), E = s ? x : void 0, D = s ? k : void 0;
  return /* @__PURE__ */ z(zr.Provider, { value: O, children: [
    e,
    M.map((S) => /* @__PURE__ */ o(
      "div",
      {
        className: [Ot.viewport, Ot[Qc[S]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: E,
        onMouseLeave: D,
        children: i.filter((b) => b.position === S).map((b) => /* @__PURE__ */ z(
          "div",
          {
            role: b.severity === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": b.closeOnClick ? "true" : "false",
            className: [
              Ot.toast,
              Ot[b.severity],
              b.leaving ? Ot.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: b.closeOnClick ? () => g(b.id) : void 0,
            children: [
              /* @__PURE__ */ z("div", { className: Ot.content, children: [
                /* @__PURE__ */ o("div", { className: Ot.title, children: b.title }),
                b.description && /* @__PURE__ */ o("div", { className: Ot.description, children: b.description }),
                (b.action || b.cancel) && /* @__PURE__ */ z("div", { className: Ot.actions, children: [
                  b.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.action,
                      onClick: () => {
                        b.action?.onClick?.(), g(b.id);
                      },
                      children: b.action.label
                    }
                  ),
                  b.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Ot.cancel,
                      onClick: () => {
                        b.cancel?.onClick?.(), g(b.id);
                      },
                      children: b.cancel.label
                    }
                  )
                ] })
              ] }),
              b.dismissible && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ot.dismiss,
                  onClick: () => g(b.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
                }
              ),
              b.showProgress && b.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: Ot.progress,
                  style: { animationDuration: `${b.durationMs}ms` }
                }
              )
            ]
          },
          b.id
        ))
      },
      S
    ))
  ] });
}
const ed = "_alert_1td44_1", td = "_xs_1td44_28", nd = "_sm_1td44_38", sd = "_lg_1td44_48", rd = "_xl_1td44_58", od = "_primary_1td44_69", ld = "_secondary_1td44_74", ad = "_light_1td44_79", id = "_base_1td44_84", cd = "_dark_1td44_89", dd = "_info_1td44_94", ud = "_success_1td44_99", fd = "_warning_1td44_104", _d = "_danger_1td44_109", hd = "_flat_1td44_116", pd = "_outlined_1td44_123", md = "_filled_1td44_132", gd = "_text_1td44_139", xd = "_icon_1td44_181", yd = "_content_1td44_192", bd = "_title_1td44_197", vd = "_body_1td44_203", wd = "_dismiss_1td44_209", Wt = {
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
  icon: xd,
  content: yd,
  title: bd,
  body: vd,
  dismiss: wd,
  "shade-lighter": "_shade-lighter_1td44_453",
  "shade-light": "_shade-light_1td44_453",
  "shade-dark": "_shade-dark_1td44_463",
  "shade-darker": "_shade-darker_1td44_467"
}, kd = {
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
function _w({
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
  visible: u,
  onVisibleChange: f,
  className: w,
  ...v
}) {
  const [y, p] = U(!1);
  if (u === !1 || u === void 0 && y)
    return null;
  const m = () => {
    u === void 0 && p(!0), c?.(), f?.(!1);
  }, h = e, _ = $r(t, "filled"), x = rs(n), k = i ?? (d ? /* @__PURE__ */ o(we, { icon: kd[e] }) : null);
  return /* @__PURE__ */ z(
    "div",
    {
      role: "alert",
      ...v,
      className: [
        Wt.alert,
        Wt[h],
        Wt[_],
        x ? Wt[x] : null,
        Wt[s],
        w
      ].filter(Boolean).join(" "),
      children: [
        k != null && /* @__PURE__ */ o("span", { className: Wt.icon, "aria-hidden": "true", children: k }),
        /* @__PURE__ */ z("div", { className: Wt.content, children: [
          l && /* @__PURE__ */ o("div", { className: Wt.title, children: l }),
          r && /* @__PURE__ */ o("div", { className: Wt.body, children: r })
        ] }),
        a && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Wt.dismiss,
            onClick: m,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
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
function hw({
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
const Cd = "_row_juebr_1", Dd = "_start_juebr_14", Ed = "_center_juebr_18", zd = "_end_juebr_22", Md = "_stretch_juebr_26", jd = "_baseline_juebr_30", Id = "_normal_juebr_34", Ad = "_noWrap_juebr_90", Td = "_wrapReverse_juebr_94", is = {
  row: Cd,
  start: Dd,
  center: Ed,
  end: zd,
  stretch: Md,
  baseline: jd,
  normal: Id,
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
function pw({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: s = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...r
}) {
  const a = e != null ? ys(e) : null, c = t != null ? ys(t) : null, u = {
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
      style: u,
      ...r
    }
  );
}
const Pd = "_column_sh0ss_1", Ld = "_Size1_sh0ss_15", Rd = "_Size2_sh0ss_24", Bd = "_Size3_sh0ss_33", Fd = "_Size4_sh0ss_42", Hd = "_Size5_sh0ss_51", qd = "_Size6_sh0ss_60", Kd = "_Size7_sh0ss_69", Wd = "_Size8_sh0ss_78", Ud = "_Size9_sh0ss_87", Vd = "_Size10_sh0ss_96", Gd = "_Size11_sh0ss_105", Xd = "_Size12_sh0ss_114", Yd = "_Offset0_sh0ss_119", Zd = "_Offset1_sh0ss_122", Jd = "_Offset2_sh0ss_127", Qd = "_Offset3_sh0ss_132", eu = "_Offset4_sh0ss_137", tu = "_Offset5_sh0ss_142", nu = "_Offset6_sh0ss_147", su = "_Offset7_sh0ss_152", ru = "_Offset8_sh0ss_157", ou = "_Offset9_sh0ss_162", lu = "_Offset10_sh0ss_167", au = "_Offset11_sh0ss_172", iu = "_Offset12_sh0ss_177", cu = "_OrderFirst_sh0ss_182", du = "_OrderLast_sh0ss_185", uu = "_Order0_sh0ss_188", fu = "_Order1_sh0ss_191", _u = "_Order2_sh0ss_194", hu = "_Order3_sh0ss_197", pu = "_Order4_sh0ss_200", mu = "_Order5_sh0ss_203", gu = "_Order6_sh0ss_206", xu = "_Order7_sh0ss_209", yu = "_Order8_sh0ss_212", bu = "_Order9_sh0ss_215", vu = "_Order10_sh0ss_218", wu = "_Order11_sh0ss_221", ku = "_Order12_sh0ss_224", $u = "_xsSize1_sh0ss_229", Nu = "_xsSize2_sh0ss_238", Ou = "_xsSize3_sh0ss_247", Su = "_xsSize4_sh0ss_256", Cu = "_xsSize5_sh0ss_265", Du = "_xsSize6_sh0ss_274", Eu = "_xsSize7_sh0ss_283", zu = "_xsSize8_sh0ss_292", Mu = "_xsSize9_sh0ss_301", ju = "_xsSize10_sh0ss_310", Iu = "_xsSize11_sh0ss_321", Au = "_xsSize12_sh0ss_332", Tu = "_xsOffset0_sh0ss_337", Pu = "_xsOffset1_sh0ss_340", Lu = "_xsOffset2_sh0ss_345", Ru = "_xsOffset3_sh0ss_350", Bu = "_xsOffset4_sh0ss_355", Fu = "_xsOffset5_sh0ss_360", Hu = "_xsOffset6_sh0ss_365", qu = "_xsOffset7_sh0ss_370", Ku = "_xsOffset8_sh0ss_375", Wu = "_xsOffset9_sh0ss_380", Uu = "_xsOffset10_sh0ss_385", Vu = "_xsOffset11_sh0ss_391", Gu = "_xsOffset12_sh0ss_397", Xu = "_xsOrderFirst_sh0ss_403", Yu = "_xsOrderLast_sh0ss_406", Zu = "_xsOrder0_sh0ss_409", Ju = "_xsOrder1_sh0ss_412", Qu = "_xsOrder2_sh0ss_415", ef = "_xsOrder3_sh0ss_418", tf = "_xsOrder4_sh0ss_421", nf = "_xsOrder5_sh0ss_424", sf = "_xsOrder6_sh0ss_427", rf = "_xsOrder7_sh0ss_430", of = "_xsOrder8_sh0ss_433", lf = "_xsOrder9_sh0ss_436", af = "_xsOrder10_sh0ss_439", cf = "_xsOrder11_sh0ss_442", df = "_xsOrder12_sh0ss_445", uf = "_smSize1_sh0ss_451", ff = "_smSize2_sh0ss_460", _f = "_smSize3_sh0ss_469", hf = "_smSize4_sh0ss_478", pf = "_smSize5_sh0ss_487", mf = "_smSize6_sh0ss_496", gf = "_smSize7_sh0ss_505", xf = "_smSize8_sh0ss_514", yf = "_smSize9_sh0ss_523", bf = "_smSize10_sh0ss_532", vf = "_smSize11_sh0ss_543", wf = "_smSize12_sh0ss_554", kf = "_smOffset0_sh0ss_559", $f = "_smOffset1_sh0ss_562", Nf = "_smOffset2_sh0ss_567", Of = "_smOffset3_sh0ss_572", Sf = "_smOffset4_sh0ss_577", Cf = "_smOffset5_sh0ss_582", Df = "_smOffset6_sh0ss_587", Ef = "_smOffset7_sh0ss_592", zf = "_smOffset8_sh0ss_597", Mf = "_smOffset9_sh0ss_602", jf = "_smOffset10_sh0ss_607", If = "_smOffset11_sh0ss_613", Af = "_smOffset12_sh0ss_619", Tf = "_smOrderFirst_sh0ss_625", Pf = "_smOrderLast_sh0ss_628", Lf = "_smOrder0_sh0ss_631", Rf = "_smOrder1_sh0ss_634", Bf = "_smOrder2_sh0ss_637", Ff = "_smOrder3_sh0ss_640", Hf = "_smOrder4_sh0ss_643", qf = "_smOrder5_sh0ss_646", Kf = "_smOrder6_sh0ss_649", Wf = "_smOrder7_sh0ss_652", Uf = "_smOrder8_sh0ss_655", Vf = "_smOrder9_sh0ss_658", Gf = "_smOrder10_sh0ss_661", Xf = "_smOrder11_sh0ss_664", Yf = "_smOrder12_sh0ss_667", Zf = "_mdSize1_sh0ss_673", Jf = "_mdSize2_sh0ss_682", Qf = "_mdSize3_sh0ss_691", e_ = "_mdSize4_sh0ss_700", t_ = "_mdSize5_sh0ss_709", n_ = "_mdSize6_sh0ss_718", s_ = "_mdSize7_sh0ss_727", r_ = "_mdSize8_sh0ss_736", o_ = "_mdSize9_sh0ss_745", l_ = "_mdSize10_sh0ss_754", a_ = "_mdSize11_sh0ss_765", i_ = "_mdSize12_sh0ss_776", c_ = "_mdOffset0_sh0ss_781", d_ = "_mdOffset1_sh0ss_784", u_ = "_mdOffset2_sh0ss_789", f_ = "_mdOffset3_sh0ss_794", __ = "_mdOffset4_sh0ss_799", h_ = "_mdOffset5_sh0ss_804", p_ = "_mdOffset6_sh0ss_809", m_ = "_mdOffset7_sh0ss_814", g_ = "_mdOffset8_sh0ss_819", x_ = "_mdOffset9_sh0ss_824", y_ = "_mdOffset10_sh0ss_829", b_ = "_mdOffset11_sh0ss_835", v_ = "_mdOffset12_sh0ss_841", w_ = "_mdOrderFirst_sh0ss_847", k_ = "_mdOrderLast_sh0ss_850", $_ = "_mdOrder0_sh0ss_853", N_ = "_mdOrder1_sh0ss_856", O_ = "_mdOrder2_sh0ss_859", S_ = "_mdOrder3_sh0ss_862", C_ = "_mdOrder4_sh0ss_865", D_ = "_mdOrder5_sh0ss_868", E_ = "_mdOrder6_sh0ss_871", z_ = "_mdOrder7_sh0ss_874", M_ = "_mdOrder8_sh0ss_877", j_ = "_mdOrder9_sh0ss_880", I_ = "_mdOrder10_sh0ss_883", A_ = "_mdOrder11_sh0ss_886", T_ = "_mdOrder12_sh0ss_889", P_ = "_lgSize1_sh0ss_895", L_ = "_lgSize2_sh0ss_904", R_ = "_lgSize3_sh0ss_913", B_ = "_lgSize4_sh0ss_922", F_ = "_lgSize5_sh0ss_931", H_ = "_lgSize6_sh0ss_940", q_ = "_lgSize7_sh0ss_949", K_ = "_lgSize8_sh0ss_958", W_ = "_lgSize9_sh0ss_967", U_ = "_lgSize10_sh0ss_976", V_ = "_lgSize11_sh0ss_987", G_ = "_lgSize12_sh0ss_998", X_ = "_lgOffset0_sh0ss_1003", Y_ = "_lgOffset1_sh0ss_1006", Z_ = "_lgOffset2_sh0ss_1011", J_ = "_lgOffset3_sh0ss_1016", Q_ = "_lgOffset4_sh0ss_1021", eh = "_lgOffset5_sh0ss_1026", th = "_lgOffset6_sh0ss_1031", nh = "_lgOffset7_sh0ss_1036", sh = "_lgOffset8_sh0ss_1041", rh = "_lgOffset9_sh0ss_1046", oh = "_lgOffset10_sh0ss_1051", lh = "_lgOffset11_sh0ss_1057", ah = "_lgOffset12_sh0ss_1063", ih = "_lgOrderFirst_sh0ss_1069", ch = "_lgOrderLast_sh0ss_1072", dh = "_lgOrder0_sh0ss_1075", uh = "_lgOrder1_sh0ss_1078", fh = "_lgOrder2_sh0ss_1081", _h = "_lgOrder3_sh0ss_1084", hh = "_lgOrder4_sh0ss_1087", ph = "_lgOrder5_sh0ss_1090", mh = "_lgOrder6_sh0ss_1093", gh = "_lgOrder7_sh0ss_1096", xh = "_lgOrder8_sh0ss_1099", yh = "_lgOrder9_sh0ss_1102", bh = "_lgOrder10_sh0ss_1105", vh = "_lgOrder11_sh0ss_1108", wh = "_lgOrder12_sh0ss_1111", kh = "_xlSize1_sh0ss_1117", $h = "_xlSize2_sh0ss_1126", Nh = "_xlSize3_sh0ss_1135", Oh = "_xlSize4_sh0ss_1144", Sh = "_xlSize5_sh0ss_1153", Ch = "_xlSize6_sh0ss_1162", Dh = "_xlSize7_sh0ss_1171", Eh = "_xlSize8_sh0ss_1180", zh = "_xlSize9_sh0ss_1189", Mh = "_xlSize10_sh0ss_1198", jh = "_xlSize11_sh0ss_1209", Ih = "_xlSize12_sh0ss_1220", Ah = "_xlOffset0_sh0ss_1225", Th = "_xlOffset1_sh0ss_1228", Ph = "_xlOffset2_sh0ss_1233", Lh = "_xlOffset3_sh0ss_1238", Rh = "_xlOffset4_sh0ss_1243", Bh = "_xlOffset5_sh0ss_1248", Fh = "_xlOffset6_sh0ss_1253", Hh = "_xlOffset7_sh0ss_1258", qh = "_xlOffset8_sh0ss_1263", Kh = "_xlOffset9_sh0ss_1268", Wh = "_xlOffset10_sh0ss_1273", Uh = "_xlOffset11_sh0ss_1279", Vh = "_xlOffset12_sh0ss_1285", Gh = "_xlOrderFirst_sh0ss_1291", Xh = "_xlOrderLast_sh0ss_1294", Yh = "_xlOrder0_sh0ss_1297", Zh = "_xlOrder1_sh0ss_1300", Jh = "_xlOrder2_sh0ss_1303", Qh = "_xlOrder3_sh0ss_1306", ep = "_xlOrder4_sh0ss_1309", tp = "_xlOrder5_sh0ss_1312", np = "_xlOrder6_sh0ss_1315", sp = "_xlOrder7_sh0ss_1318", rp = "_xlOrder8_sh0ss_1321", op = "_xlOrder9_sh0ss_1324", lp = "_xlOrder10_sh0ss_1327", ap = "_xlOrder11_sh0ss_1330", ip = "_xlOrder12_sh0ss_1333", cp = "_xxSize1_sh0ss_1339", dp = "_xxSize2_sh0ss_1348", up = "_xxSize3_sh0ss_1357", fp = "_xxSize4_sh0ss_1366", _p = "_xxSize5_sh0ss_1375", hp = "_xxSize6_sh0ss_1384", pp = "_xxSize7_sh0ss_1393", mp = "_xxSize8_sh0ss_1402", gp = "_xxSize9_sh0ss_1411", xp = "_xxSize10_sh0ss_1420", yp = "_xxSize11_sh0ss_1431", bp = "_xxSize12_sh0ss_1442", vp = "_xxOffset0_sh0ss_1447", wp = "_xxOffset1_sh0ss_1450", kp = "_xxOffset2_sh0ss_1455", $p = "_xxOffset3_sh0ss_1460", Np = "_xxOffset4_sh0ss_1465", Op = "_xxOffset5_sh0ss_1470", Sp = "_xxOffset6_sh0ss_1475", Cp = "_xxOffset7_sh0ss_1480", Dp = "_xxOffset8_sh0ss_1485", Ep = "_xxOffset9_sh0ss_1490", zp = "_xxOffset10_sh0ss_1495", Mp = "_xxOffset11_sh0ss_1501", jp = "_xxOffset12_sh0ss_1507", Ip = "_xxOrderFirst_sh0ss_1513", Ap = "_xxOrderLast_sh0ss_1516", Tp = "_xxOrder0_sh0ss_1519", Pp = "_xxOrder1_sh0ss_1522", Lp = "_xxOrder2_sh0ss_1525", Rp = "_xxOrder3_sh0ss_1528", Bp = "_xxOrder4_sh0ss_1531", Fp = "_xxOrder5_sh0ss_1534", Hp = "_xxOrder6_sh0ss_1537", qp = "_xxOrder7_sh0ss_1540", Kp = "_xxOrder8_sh0ss_1543", Wp = "_xxOrder9_sh0ss_1546", Up = "_xxOrder10_sh0ss_1549", Vp = "_xxOrder11_sh0ss_1552", Gp = "_xxOrder12_sh0ss_1555", cs = {
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
  Order7: xu,
  Order8: yu,
  Order9: bu,
  Order10: vu,
  Order11: wu,
  Order12: ku,
  xsSize1: $u,
  xsSize2: Nu,
  xsSize3: Ou,
  xsSize4: Su,
  xsSize5: Cu,
  xsSize6: Du,
  xsSize7: Eu,
  xsSize8: zu,
  xsSize9: Mu,
  xsSize10: ju,
  xsSize11: Iu,
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
  smSize8: xf,
  smSize9: yf,
  smSize10: bf,
  smSize11: vf,
  smSize12: wf,
  smOffset0: kf,
  smOffset1: $f,
  smOffset2: Nf,
  smOffset3: Of,
  smOffset4: Sf,
  smOffset5: Cf,
  smOffset6: Df,
  smOffset7: Ef,
  smOffset8: zf,
  smOffset9: Mf,
  smOffset10: jf,
  smOffset11: If,
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
  mdOffset9: x_,
  mdOffset10: y_,
  mdOffset11: b_,
  mdOffset12: v_,
  mdOrderFirst: w_,
  mdOrderLast: k_,
  mdOrder0: $_,
  mdOrder1: N_,
  mdOrder2: O_,
  mdOrder3: S_,
  mdOrder4: C_,
  mdOrder5: D_,
  mdOrder6: E_,
  mdOrder7: z_,
  mdOrder8: M_,
  mdOrder9: j_,
  mdOrder10: I_,
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
  lgOrder8: xh,
  lgOrder9: yh,
  lgOrder10: bh,
  lgOrder11: vh,
  lgOrder12: wh,
  xlSize1: kh,
  xlSize2: $h,
  xlSize3: Nh,
  xlSize4: Oh,
  xlSize5: Sh,
  xlSize6: Ch,
  xlSize7: Dh,
  xlSize8: Eh,
  xlSize9: zh,
  xlSize10: Mh,
  xlSize11: jh,
  xlSize12: Ih,
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
  xxSize10: xp,
  xxSize11: yp,
  xxSize12: bp,
  xxOffset0: vp,
  xxOffset1: wp,
  xxOffset2: kp,
  xxOffset3: $p,
  xxOffset4: Np,
  xxOffset5: Op,
  xxOffset6: Sp,
  xxOffset7: Cp,
  xxOffset8: Dp,
  xxOffset9: Ep,
  xxOffset10: zp,
  xxOffset11: Mp,
  xxOffset12: jp,
  xxOrderFirst: Ip,
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
function mw({ className: e, style: t, ...n }) {
  const s = [cs.column], l = { ...t };
  for (const [D, S, b, C] of Xp) {
    const A = n[S], T = n[b], I = n[C];
    if (A != null) {
      Yp(S, A);
      const F = cs[`${D}Size${A}`];
      F && s.push(F);
    }
    if (T != null) {
      Zp(b, T);
      const F = cs[`${D}Offset${T}`];
      F && s.push(F);
    }
    if (I != null) {
      const F = cs[Qp(D, I, C)];
      F && s.push(F);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: r,
    offsetXs: a,
    sizeSm: c,
    offsetSm: u,
    sizeMd: f,
    offsetMd: w,
    sizeLg: v,
    offsetLg: y,
    sizeXl: p,
    offsetXl: m,
    sizeXx: h,
    offsetXx: _,
    order: x,
    orderXs: k,
    orderSm: g,
    orderMd: N,
    orderLg: $,
    orderXl: O,
    orderXx: M,
    ...E
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...s, e].filter(Boolean).join(" "),
      style: l,
      ...E
    }
  );
}
const em = "_stack_umuag_1", Gn = {
  stack: em,
  "dir-row": "_dir-row_umuag_5",
  "dir-row-reverse": "_dir-row-reverse_umuag_9",
  "dir-column": "_dir-column_umuag_13",
  "dir-column-reverse": "_dir-column-reverse_umuag_17",
  "wrap-nowrap": "_wrap-nowrap_umuag_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_umuag_25",
  "align-start": "_align-start_umuag_29",
  "align-center": "_align-center_umuag_33",
  "align-end": "_align-end_umuag_37",
  "align-stretch": "_align-stretch_umuag_41",
  "align-baseline": "_align-baseline_umuag_45",
  "align-normal": "_align-normal_umuag_49",
  "justify-start": "_justify-start_umuag_53",
  "justify-center": "_justify-center_umuag_57",
  "justify-end": "_justify-end_umuag_61",
  "justify-between": "_justify-between_umuag_65",
  "justify-around": "_justify-around_umuag_69",
  "justify-evenly": "_justify-evenly_umuag_73",
  "justify-normal": "_justify-normal_umuag_77",
  "justify-space-between": "_justify-space-between_umuag_84",
  "justify-space-around": "_justify-space-around_umuag_88",
  "justify-space-evenly": "_justify-space-evenly_umuag_92"
};
function or(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function gw({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: s = 8,
  align: l,
  justify: i,
  className: d,
  style: r,
  ...a
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", u = {
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
      style: u,
      ...a
    }
  );
}
const tm = "_autogrid_16x9f_1", nm = {
  autogrid: tm
};
function xw({
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
}, um = "_footer_1thaw_1", fm = "_sticky_1thaw_9", lr = {
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
const hm = "_header_wh9gi_1", pm = "_sticky_wh9gi_9", ar = {
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
const gm = "_sidebar_1a2mp_1", xm = "_sticky_1a2mp_23", ym = "_left_1a2mp_41", bm = "_right_1a2mp_45", vm = "_start_1a2mp_50", wm = "_end_1a2mp_54", km = "_fullHeight_1a2mp_60", $m = "_collapsed_1a2mp_64", Nm = "_responsive_1a2mp_72", Om = "_overlay_1a2mp_80", Sm = "_mask_1a2mp_108", dn = {
  sidebar: gm,
  sticky: xm,
  left: ym,
  right: bm,
  start: vm,
  end: wm,
  fullHeight: km,
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
  return ge(() => {
    if (!s || !t || d == null) return;
    const u = (f) => {
      f.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [s, t, d]), /* @__PURE__ */ z(rt, { children: [
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
function yw(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(rt, { children: e.children });
  const { className: t, children: n, ...s } = e, l = [], i = [], d = [], r = [], a = [], c = [];
  os.forEach(n, (w) => {
    if (!gt(w)) {
      d.push(w);
      return;
    }
    if (w.type === mm)
      l.push(w);
    else if (w.type === _m)
      i.push(w);
    else if (w.type === Cm) {
      const v = w, y = v.props.position;
      c.push(v), (y === "right" || y === "end" ? a : r).push(v);
    } else
      d.push(w);
  });
  const u = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const w = f ? a : r;
    return /* @__PURE__ */ z(
      "div",
      {
        className: [
          Jt.layout,
          Jt.grid,
          f ? Jt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...s,
        children: [
          l.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridHeader, children: l }),
          /* @__PURE__ */ z("div", { className: Jt.gridContents, children: [
            w,
            /* @__PURE__ */ o("div", { className: Jt.gridBody, children: d })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: Jt.gridFooter, children: i })
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
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const Dm = "_body_1ge00_4", Em = "_bare_1ge00_12", ir = {
  body: Dm,
  bare: Em
};
function bw({
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
const zm = "_toggle_lxnk5_1", Mm = {
  toggle: zm
};
function vw({
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
      children: l ?? /* @__PURE__ */ o(we, { icon: e, size: 20 })
    }
  );
}
const jm = "_track_14127_1", Im = "_bar_14127_31", Am = "_primary_14127_39", Tm = "_success_14127_43", Pm = "_warning_14127_47", Lm = "_danger_14127_51", Rm = "_indeterminate_14127_149", Bm = "_circular_14127_163", Fm = "_fill_14127_203", St = {
  track: jm,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Im,
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
function ww({
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
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, f = t > 0 ? u / t * 100 : 0;
  if (i === "circular") {
    const v = typeof d == "string", y = 2, p = 10.5, m = 2 * Math.PI * p, h = m * (l ? 0.75 : 1), _ = l ? 0 : m * (1 - f / 100), x = rs(s);
    return /* @__PURE__ */ z(
      "svg",
      {
        width: v ? void 0 : d,
        height: v ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          St.circular,
          St[n],
          x ? St[x] : null,
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
              strokeWidth: y
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: St.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: y,
              strokeDasharray: `${h} ${m}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const w = rs(s);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        St.track,
        St[n],
        w ? St[w] : null,
        typeof d == "string" ? St[`linear-${d}`] : null,
        l ? St.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: St.bar,
          style: l ? void 0 : { width: `${f}%` }
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
function kw({
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
  className: u
}) {
  const [f, w] = U(void 0), v = t !== void 0, y = t ?? f ?? Um(s, e) ?? n, p = y ?? "", m = Q(void 0);
  ge(() => {
    if (v) return;
    const _ = document.documentElement;
    if (y === void 0) {
      m.current !== void 0 && _.getAttribute(l) === m.current && (_.removeAttribute(l), m.current = void 0);
      return;
    }
    _.setAttribute(l, y), m.current = y;
  }, [y, l, v]);
  const h = (_) => {
    const x = _.target.value;
    v || (w(x), Vm(s, x)), i?.(x);
  };
  return /* @__PURE__ */ z("label", { className: [qm.wrapper, u].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ z(On, { id: a, size: c, value: p, onChange: h, children: [
      y === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: r }),
      y !== void 0 && !e.includes(y) && /* @__PURE__ */ o("option", { value: y, children: y }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function Gm(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function jr(e) {
  const [t, n] = U(() => Gm(e));
  return ge(() => {
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
    onClick: u,
    children: f,
    variant: w,
    severity: v,
    shade: y,
    ...p
  }, m) {
    const [h, _] = U(n), x = t ?? h, k = (g) => {
      const N = !x;
      t === void 0 && _(N), s?.(N), u?.(g);
    };
    return /* @__PURE__ */ o(
      Pn,
      {
        ...p,
        ref: m,
        variant: x && l ? l : w,
        severity: x ? i : v,
        shade: x ? d : y,
        size: a,
        "aria-pressed": x,
        className: [x ? Ym.pressed : null, c].filter(Boolean).join(" "),
        onClick: k,
        children: x && r !== void 0 ? r : f
      }
    );
  }
), Ir = "dx-theme";
function Jm(e) {
  const t = e === void 0 ? Ir : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Qm(e, t) {
  const n = e === void 0 ? Ir : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function $w({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: s,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: r
}) {
  const a = jr("(prefers-color-scheme: dark)"), [c, u] = U(void 0), f = e !== void 0, w = e ?? c ?? Jm(n) ?? t ?? "system", v = w === "system" ? a ? "dark" : "light" : w;
  return ge(() => {
    if (!f) {
      if (w === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = w;
    }
  }, [w, f]), /* @__PURE__ */ o(
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
        const m = p ? "dark" : "light";
        f || (u(m), Qm(n, m)), s?.(m);
      },
      toggleContent: /* @__PURE__ */ o(we, { icon: "light_mode", size: r ?? "md" }),
      children: /* @__PURE__ */ o(we, { icon: "dark_mode", size: r ?? "md" })
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
    (p, m) => Math.floor(Math.abs(Math.sin(m + 1)) * 4294967296)
  ), a = (p, m) => p + m | 0, c = (p, m) => p << m | p >>> 32 - m;
  let u = 1732584193, f = 4023233417, w = 2562383102, v = 271733878;
  for (let p = 0; p < s; p += 64) {
    const m = [];
    for (let g = 0; g < 16; g += 1)
      m.push(i.getUint32(p + g * 4, !0));
    let h = u, _ = f, x = w, k = v;
    for (let g = 0; g < 64; g += 1) {
      let N, $;
      g < 16 ? (N = _ & x | ~_ & k, $ = g) : g < 32 ? (N = k & _ | ~k & x, $ = (5 * g + 1) % 16) : g < 48 ? (N = _ ^ x ^ k, $ = (3 * g + 5) % 16) : (N = x ^ (_ | ~k), $ = 7 * g % 16), N = a(a(a(N, h), r[g]), m[$]), h = k, k = x, x = _, _ = a(_, c(N, d[Math.floor(g / 16) * 4 + g % 4]));
    }
    u = a(u, h), f = a(f, _), w = a(w, x), v = a(v, k);
  }
  const y = (p) => {
    let m = "";
    for (let h = 0; h < 4; h += 1)
      m += `0${(p >>> h * 8 & 255).toString(16)}`.slice(-2);
    return m;
  };
  return y(u) + y(f) + y(w) + y(v);
}
const t1 = "_avatar_yj2hz_1", n1 = "_xs_yj2hz_12", s1 = "_sm_yj2hz_18", r1 = "_md_yj2hz_24", o1 = "_lg_yj2hz_30", l1 = "_xl_yj2hz_36", a1 = "_initials_yj2hz_42", i1 = "_image_yj2hz_57", c1 = "_status_yj2hz_64", d1 = "_online_yj2hz_84", u1 = "_offline_yj2hz_88", f1 = "_away_yj2hz_92", En = {
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
function Nw({
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
  const c = xe(() => e ? h1(e) : "?", [e]), u = xe(() => e ? p1(e) : ms[0], [e]), f = xe(() => {
    if (t != null || n == null) return;
    const k = n.trim().toLowerCase();
    return k === "" ? void 0 : `https://secure.gravatar.com/avatar/${e1(k)}?d=${s}&s=${_1[d]}&r=${l}`;
  }, [t, n, s, l, d]), w = t ?? f, [v, y] = U(null), p = w != null && v !== w, m = p && i === "", h = i ?? e ?? "avatar", _ = r ? `${h}, ${r}` : h, x = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: En.image,
        src: w,
        alt: m ? "" : r ? _ : h,
        onError: () => y(w ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: En.initials,
      style: { background: u },
      children: c
    }
  );
  return /* @__PURE__ */ z(
    "span",
    {
      className: [
        En.avatar,
        En[d],
        r ? En[r] : null,
        a
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : _,
      children: [
        x,
        r && /* @__PURE__ */ o("span", { className: En.status, "aria-hidden": "true" })
      ]
    }
  );
}
const m1 = "_root_iy2gv_1", g1 = "_left_iy2gv_6", x1 = "_right_iy2gv_7", y1 = "_panel_iy2gv_12", b1 = "_bottom_iy2gv_20", v1 = "_tabList_iy2gv_24", w1 = "_underline_iy2gv_53", k1 = "_pills_iy2gv_72", $1 = "_tab_iy2gv_24", N1 = "_active_iy2gv_113", O1 = "_disabled_iy2gv_139", Qt = {
  root: m1,
  left: g1,
  right: x1,
  panel: y1,
  bottom: b1,
  tabList: v1,
  underline: w1,
  pills: k1,
  tab: $1,
  active: N1,
  disabled: O1
};
function Ow({
  items: e,
  value: t,
  defaultValue: n,
  onChange: s,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const r = Pe(), a = Q(null), [c, u] = U(
    n ?? e[0]?.key ?? ""
  ), f = t ?? c, w = i === "left" || i === "right", v = (m) => {
    u(m), s?.(m);
  }, y = (m) => {
    const h = e.filter((k) => !k.disabled), _ = h.findIndex((k) => k.key === f);
    let x = -1;
    m.key === "ArrowRight" || w && m.key === "ArrowDown" ? x = (_ + 1) % h.length : m.key === "ArrowLeft" || w && m.key === "ArrowUp" ? x = (_ - 1 + h.length) % h.length : m.key === "Home" ? x = 0 : m.key === "End" && (x = h.length - 1), x >= 0 && (m.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[x]?.key ?? "")}"]`
    )?.focus(), v(h[x]?.key ?? ""));
  }, p = e.find((m) => m.key === f);
  return /* @__PURE__ */ z(
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
            onKeyDown: y,
            children: e.map((m) => {
              const h = m.key === f;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${m.key}`,
                  "data-tab-key": m.key,
                  "aria-selected": h,
                  "aria-controls": `${r}-panel-${m.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: m.disabled,
                  className: [
                    Qt.tab,
                    h ? Qt.active : null,
                    m.disabled ? Qt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => v(m.key),
                  children: m.label
                },
                m.key
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
const S1 = "_root_19pqr_1", C1 = "_item_19pqr_9", D1 = "_heading_19pqr_13", E1 = "_trigger_19pqr_17", z1 = "_disabled_19pqr_34", M1 = "_title_19pqr_48", j1 = "_chevron_19pqr_52", I1 = "_open_19pqr_59", A1 = "_content_19pqr_63", en = {
  root: S1,
  item: C1,
  heading: D1,
  trigger: E1,
  disabled: z1,
  title: M1,
  chevron: j1,
  open: I1,
  content: A1
};
function Sw({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: s,
  onChange: l,
  className: i
}) {
  const d = Pe(), [r, a] = U(
    s ?? []
  ), c = n ?? r, u = (f) => {
    const w = c.includes(f) ? c.filter((v) => v !== f) : t ? [...c, f] : [f];
    a(w), l?.(w);
  };
  return /* @__PURE__ */ o("div", { className: [en.root, i].filter(Boolean).join(" "), children: e.map((f) => {
    const w = c.includes(f.key), v = `${d}-panel-${f.key}`, y = `${d}-trigger-${f.key}`;
    return /* @__PURE__ */ z("div", { className: en.item, children: [
      /* @__PURE__ */ o("h3", { className: en.heading, children: /* @__PURE__ */ z(
        "button",
        {
          type: "button",
          id: y,
          "aria-expanded": w,
          "aria-controls": v,
          disabled: f.disabled,
          className: [
            en.trigger,
            f.disabled ? en.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(f.key),
          children: [
            /* @__PURE__ */ o("span", { className: en.title, children: f.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [en.chevron, w ? en.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: 12 })
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
          "aria-labelledby": y,
          hidden: !w,
          className: en.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const T1 = "_textarea_1uei3_1", P1 = "_invalid_1uei3_27", L1 = "_xs_1uei3_34", R1 = "_sm_1uei3_39", B1 = "_md_1uei3_44", F1 = "_lg_1uei3_49", H1 = "_xl_1uei3_54", ds = {
  textarea: T1,
  invalid: P1,
  xs: L1,
  sm: R1,
  md: B1,
  lg: F1,
  xl: H1,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, Cw = Le(
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
), q1 = "_root_14lh8_1", K1 = "_trigger_14lh8_9", W1 = "_invalid_14lh8_40", U1 = "_placeholder_14lh8_47", V1 = "_label_14lh8_54", G1 = "_chevron_14lh8_60", X1 = "_chevronOpen_14lh8_70", Y1 = "_menu_14lh8_74", Z1 = "_option_14lh8_89", J1 = "_disabled_14lh8_100", Q1 = "_active_14lh8_104", eg = "_selected_14lh8_105", tg = "_header_14lh8_115", ng = "_xs_14lh8_122", sg = "_sm_14lh8_128", rg = "_md_14lh8_134", og = "_lg_14lh8_140", lg = "_xl_14lh8_146", pt = {
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
function Dw({
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
  const u = Pe(), f = `${u}-listbox`, w = Q(null), v = Q(null), [y, p] = U(
    n
  ), [m, h] = U(!1), _ = t ?? y, x = e.map(
    (b, C) => b.label === "" || b.disabled ? -1 : C
  ).filter((b) => b >= 0), k = e.findIndex(
    (b) => b.value === _
  ), [g, N] = U(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), $ = R(() => {
    if (r) return;
    const b = k >= 0 && x.includes(k) ? k : x[0];
    N(b ?? -1), h(!0);
  }, [r, k, x]), O = R(() => {
    h(!1), v.current?.focus();
  }, []);
  ge(() => {
    if (!m) return;
    const b = (C) => {
      w.current && !w.current.contains(C.target) && h(!1);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [m]);
  const M = (b) => {
    p(b), s?.(b), h(!1), v.current?.focus();
  }, E = (b) => {
    if (x.length === 0) return;
    const C = x.includes(g) ? x.indexOf(g) : 0, A = x[(C + b + x.length) % x.length];
    A != null && N(A);
  }, D = (b) => {
    if (!m) {
      b.key === "ArrowDown" && (b.preventDefault(), $());
      return;
    }
    switch (b.key) {
      case "ArrowDown":
        b.preventDefault(), E(1);
        break;
      case "ArrowUp":
        b.preventDefault(), E(-1);
        break;
      case "Home":
        b.preventDefault(), x[0] != null && N(x[0]);
        break;
      case "End":
        b.preventDefault(), x[x.length - 1] != null && N(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        b.preventDefault(), g >= 0 && e[g] && x.includes(g) && M(e[g]?.value ?? "");
        break;
      case "Escape":
        b.preventDefault(), O();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, S = e.find(
    (b) => b.value === _
  );
  return /* @__PURE__ */ z(
    "div",
    {
      ref: w,
      className: [pt.root, a].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ z(
          "button",
          {
            ref: v,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": m,
            "aria-controls": f,
            "aria-invalid": d || void 0,
            disabled: r,
            className: [
              pt.trigger,
              pt[i],
              m ? pt.open : null,
              d ? pt.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => m ? h(!1) : $(),
            ...c,
            children: [
              /* @__PURE__ */ o("span", { className: S ? pt.label : pt.placeholder, children: S ? S.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [pt.chevron, m ? pt.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: ag },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        m && /* @__PURE__ */ o(
          "div",
          {
            id: f,
            role: "listbox",
            "aria-activedescendant": g >= 0 ? `${u}-option-${g}` : void 0,
            className: pt.menu,
            children: e.map(
              (b, C) => b.label === "" ? /* @__PURE__ */ o(
                "div",
                {
                  className: pt.header,
                  role: "presentation",
                  children: b.value
                },
                b.value
              ) : /* @__PURE__ */ o(
                "div",
                {
                  id: `${u}-option-${C}`,
                  role: "option",
                  "aria-selected": b.value === _,
                  "aria-disabled": b.disabled || void 0,
                  className: [
                    pt.option,
                    C === g ? pt.active : null,
                    b.value === _ ? pt.selected : null,
                    b.disabled ? pt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    b.disabled || M(b.value);
                  },
                  onMouseEnter: () => {
                    !b.disabled && b.label !== "" && N(C);
                  },
                  children: b.label
                },
                b.value
              )
            )
          }
        )
      ]
    }
  );
}
const ig = "_root_1efx9_1", cg = "_wrap_1efx9_9", dg = "_input_1efx9_26", ug = "_invalid_1efx9_31", fg = "_clear_1efx9_58", _g = "_menu_1efx9_83", hg = "_option_1efx9_98", pg = "_disabled_1efx9_109", mg = "_active_1efx9_113", gg = "_empty_1efx9_123", xg = "_xs_1efx9_129", yg = "_sm_1efx9_136", bg = "_md_1efx9_143", vg = "_lg_1efx9_150", wg = "_xl_1efx9_157", jt = {
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
  xs: xg,
  sm: yg,
  md: bg,
  lg: vg,
  xl: wg
}, kg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Ew({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: s,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: r = !1,
  disabled: a = !1,
  filter: c = kg,
  className: u,
  ...f
}) {
  const w = Pe(), v = `${w}-listbox`, y = Q(null), p = Q(null), [m, h] = U(n), [_, x] = U(!1), k = t ?? m, g = xe(
    () => k.trim() === "" ? [...e] : e.filter((I) => c(I, k)),
    [e, k, c]
  ), N = g.map((I, F) => I.disabled ? -1 : F).filter((I) => I >= 0), [$, O] = U(-1), M = (I) => {
    h(I), s?.(I);
  }, E = (I) => {
    M(I.label), l?.(I.value, I), x(!1);
  }, D = (I) => {
    if (N.length === 0) return;
    const F = N.includes($) ? N.indexOf($) : I === 1 ? -1 : 0, L = N[(F + I + N.length) % N.length];
    L != null && O(L);
  }, S = (I) => {
    a || (M(I.target.value), x(!0), O(-1));
  }, b = () => {
    a || k !== "" && x(!0);
  }, C = (I) => {
    y.current && !y.current.contains(I.relatedTarget) && x(!1);
  }, A = (I) => {
    if (!a)
      switch (I.key) {
        case "ArrowDown":
          I.preventDefault(), _ ? D(1) : (x(!0), O(N[0] ?? -1));
          break;
        case "ArrowUp":
          I.preventDefault(), _ && D(-1);
          break;
        case "Enter":
          I.preventDefault(), _ && $ >= 0 && g[$] && E(g[$]);
          break;
        case "Escape":
          I.preventDefault(), x(!1);
          break;
        case "Tab":
          _ && $ >= 0 && g[$] && E(g[$]), x(!1);
          break;
      }
  }, T = () => {
    M(""), O(-1), x(!0), p.current?.focus();
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: y,
      className: [jt.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ z(
          "div",
          {
            className: [jt.wrap, jt[d], r ? jt.invalid : null].filter(Boolean).join(" "),
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
                  "aria-activedescendant": _ && $ >= 0 ? `${w}-option-${$}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: a,
                  value: k,
                  placeholder: i,
                  className: jt.input,
                  onChange: S,
                  onFocus: b,
                  onBlur: C,
                  onKeyDown: A,
                  ...f
                }
              ),
              k !== "" && !a && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: jt.clear,
                  "aria-label": "Clear",
                  onClick: T,
                  children: /* @__PURE__ */ o(we, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && (g.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: v, className: jt.menu, children: /* @__PURE__ */ o("div", { className: jt.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: v, role: "listbox", className: jt.menu, children: g.map((I, F) => /* @__PURE__ */ o(
          "div",
          {
            id: `${w}-option-${F}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": I.disabled || void 0,
            className: [
              jt.option,
              F === $ ? jt.active : null,
              I.disabled ? jt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              I.disabled || E(I);
            },
            onMouseDown: (L) => {
              L.preventDefault(), I.disabled || E(I);
            },
            onMouseEnter: () => {
              I.disabled || O(F);
            },
            children: I.label
          },
          I.value
        )) }))
      ]
    }
  );
}
const $g = "_box_1v93g_1", Ng = "_option_1v93g_12", Og = "_disabled_1v93g_23", Sg = "_selected_1v93g_27", Cg = "_active_1v93g_33", Xn = {
  box: $g,
  option: Ng,
  disabled: Og,
  selected: Sg,
  active: Cg
};
function zw({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: s = !1,
  onChange: l,
  className: i,
  style: d,
  ...r
}) {
  const a = Pe(), [c, u] = U(() => {
    const g = n;
    return g == null ? [] : Array.isArray(g) ? [...g] : [g];
  }), f = t == null ? c : Array.isArray(t) ? t : [t], w = e.findIndex((g) => !g.disabled), [v, y] = U(
    () => w >= 0 ? w : 0
  ), p = Q(""), m = Q(null), h = (g) => {
    u(g), l?.(s ? g : g[0] ?? "");
  }, _ = e.map((g, N) => g.disabled ? -1 : N).filter((g) => g >= 0), x = (g) => {
    const N = e[g];
    if (!(!N || N.disabled))
      if (y(g), s) {
        const $ = f.includes(N.value) ? f.filter((O) => O !== N.value) : [...f, N.value];
        h($);
      } else
        h([N.value]);
  }, k = (g) => {
    if (_.length === 0) return;
    const N = _.includes(v) ? v : _[0];
    let $ = -1;
    if (g.key === "ArrowDown")
      $ = _[(_.indexOf(N) + 1) % _.length];
    else if (g.key === "ArrowUp")
      $ = _[(_.indexOf(N) - 1 + _.length) % _.length];
    else if (g.key === "Home")
      $ = _[0];
    else if (g.key === "End")
      $ = _[_.length - 1];
    else if (g.key === "Enter" || g.key === " ") {
      g.preventDefault(), x(N);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(g.key)) {
      g.preventDefault();
      const O = (p.current + g.key).toLowerCase();
      p.current = O, m.current && clearTimeout(m.current), m.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const M = [..._, ..._], E = _.indexOf(N) + 1, D = M.slice(E).find((S) => e[S]?.label.toLowerCase().startsWith(O));
      D != null && y(D);
      return;
    }
    $ >= 0 && (g.preventDefault(), y($), s || h([e[$]?.value ?? ""]));
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
      onKeyDown: k,
      ...r,
      children: e.map((g, N) => {
        const $ = f.includes(g.value), O = N === v;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${a}-option-${N}`,
            role: "option",
            "aria-selected": $,
            "aria-disabled": g.disabled || void 0,
            className: [
              Xn.option,
              $ ? Xn.selected : null,
              O ? Xn.active : null,
              g.disabled ? Xn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(N),
            children: g.label
          },
          g.value
        );
      })
    }
  );
}
const Dg = "_group_1gpkr_1", Eg = "_legend_1gpkr_8", zg = "_list_1gpkr_16", Mg = "_item_1gpkr_25", jg = "_disabled_1gpkr_32", Ig = "_label_1gpkr_37", Ag = "_checkbox_1gpkr_48", bn = {
  group: Dg,
  legend: Eg,
  list: zg,
  item: Mg,
  disabled: jg,
  label: Ig,
  checkbox: Ag
};
function Mw({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: s,
  legend: l,
  name: i,
  className: d
}) {
  const [r, a] = U(() => [
    ...n
  ]), c = t ?? r, u = (f, w) => {
    const v = w ? [...c, f] : c.filter((y) => y !== f);
    a(v), s?.(v);
  };
  return /* @__PURE__ */ z("fieldset", { className: [bn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: bn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: bn.list, children: e.map((f) => {
      const w = c.includes(f.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [bn.item, f.disabled ? bn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ z("label", { className: bn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: bn.checkbox,
                name: i,
                value: f.value,
                checked: w,
                disabled: f.disabled,
                onChange: (v) => u(f.value, v.target.checked)
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
const Tg = "_group_141lw_1", Pg = "_legend_141lw_8", Lg = "_list_141lw_16", Rg = "_item_141lw_25", Bg = "_disabled_141lw_32", Fg = "_label_141lw_37", Hg = "_radio_141lw_48", vn = {
  group: Tg,
  legend: Pg,
  list: Lg,
  item: Rg,
  disabled: Bg,
  label: Fg,
  radio: Hg
};
function jw({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  legend: l,
  name: i,
  className: d
}) {
  const [r, a] = U(
    n
  ), c = t ?? r, u = (f) => {
    a(f), s?.(f);
  };
  return /* @__PURE__ */ z("fieldset", { className: [vn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: vn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: vn.list, children: e.map((f) => {
      const w = f.value === c;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [vn.item, f.disabled ? vn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ z("label", { className: vn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: vn.radio,
                name: i,
                value: f.value,
                checked: w,
                disabled: f.disabled,
                onChange: (v) => u(v.target.value)
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
const qg = "_bar_pche0_1", Kg = "_vertical_pche0_12", Wg = "_option_pche0_17", Ug = "_selected_pche0_40", Vg = "_sm_pche0_56", Gg = "_md_pche0_62", Xg = "_lg_pche0_68", zn = {
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
function Iw(e) {
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
  } = e, u = l ?? !1, [f, w] = U(s ?? (u ? [] : t[0]?.value)), v = n ?? f, y = l === !0 || l === void 0 && Array.isArray(v), p = (h) => {
    if (!y) {
      w(h), d?.(h);
      return;
    }
    const _ = cr(v), x = _.includes(h) ? _.filter((k) => k !== h) : [..._, h];
    w(x), d?.(x);
  }, m = (h) => y ? cr(v).includes(h) : v === h;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        zn.bar,
        zn[r],
        i === "vertical" ? zn.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((h) => {
        const _ = m(h.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: h.disabled,
            className: [
              zn.option,
              _ ? zn.selected : null,
              h.disabled ? zn.disabled : null
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
const Yg = "_root_1iekv_1", Zg = "_action_1iekv_10", Jg = "_caret_1iekv_15", Qg = "_sm_1iekv_49", e0 = "_md_1iekv_53", t0 = "_lg_1iekv_57", n0 = "_fullWidth_1iekv_62", s0 = "_menu_1iekv_70", r0 = "_item_1iekv_83", o0 = "_itemIcon_1iekv_105", l0 = "_disabled_1iekv_110", a0 = "_active_1iekv_114", i0 = "_danger_1iekv_123", Lt = {
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
}, Aw = Le(
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
    fullWidth: u = !1,
    disabled: f = !1,
    className: w,
    "aria-label": v,
    openAriaLabel: y = "More actions",
    ...p
  }, m) {
    const _ = `${Pe()}-menu`, x = Q(null), k = Q(null), g = Q([]), [N, $] = U(!1), [O, M] = U(-1), E = f || a, D = xe(
      () => s.map((L, V) => L.disabled ? -1 : V).filter((L) => L >= 0),
      [s]
    ), S = R(() => {
      E || (M(D[0] ?? -1), $(!0));
    }, [E, D]), b = R(() => {
      $(!1), k.current?.focus();
    }, []);
    ge(() => {
      if (!N) return;
      const L = (V) => {
        x.current && !x.current.contains(V.target) && $(!1);
      };
      return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
    }, [N]), ge(() => {
      N && (E || !c) && $(!1);
    }, [N, E, c]);
    const C = Q(N);
    if (ge(() => {
      const L = C.current;
      if (C.current = N, !N || L) return;
      const V = D.includes(O) ? O : D[0] ?? -1;
      V >= 0 && g.current[V]?.focus();
    }, [N, O, D]), c === !1) return null;
    const A = (L) => {
      const V = s[L];
      !V || V.disabled || (V.onClick?.(), $(!1), k.current?.focus());
    }, T = (L) => {
      if (D.length === 0) return;
      const V = D.includes(O) ? D.indexOf(O) : L === 1 ? -1 : 0, ee = D[(V + L + D.length) % D.length];
      ee != null && (M(ee), g.current[ee]?.focus());
    }, I = (L) => {
      const V = L === "first" ? D[0] : D[D.length - 1];
      V != null && (M(V), g.current[V]?.focus());
    }, F = (L) => {
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), T(1);
          break;
        case "ArrowUp":
          L.preventDefault(), T(-1);
          break;
        case "Home":
          L.preventDefault(), I("first");
          break;
        case "End":
          L.preventDefault(), I("last");
          break;
        case "Escape":
          L.preventDefault(), b();
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
          x.current = L, typeof m == "function" ? m(L) : m && (m.current = L);
        },
        className: [
          Lt.root,
          Lt[r],
          u ? Lt.fullWidth : null,
          w
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
              disabled: f,
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
              ref: k,
              className: Lt.caret,
              variant: i,
              severity: l,
              shade: d,
              size: r,
              disabled: E,
              "aria-haspopup": "menu",
              "aria-expanded": N,
              "aria-controls": _,
              "aria-label": y,
              onClick: () => N ? $(!1) : S(),
              onKeyDown: (L) => {
                !N && (L.key === "ArrowDown" || L.key === "ArrowUp") && (L.preventDefault(), S());
              },
              children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          N && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": y,
              className: Lt.menu,
              onKeyDown: F,
              ...p,
              children: s.map((L, V) => /* @__PURE__ */ z(
                "button",
                {
                  ref: (ee) => {
                    g.current[V] = ee;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: V === O ? 0 : -1,
                  disabled: L.disabled,
                  className: [
                    Lt.item,
                    V === O ? Lt.active : null,
                    L.danger ? Lt.danger : null,
                    L.disabled ? Lt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => A(V),
                  onMouseEnter: () => {
                    L.disabled || M(V);
                  },
                  children: [
                    L.icon ? /* @__PURE__ */ o("span", { className: Lt.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(we, { icon: L.icon, size: 16 }) }) : null,
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
), c0 = "_wrapper_eg26m_1", d0 = "_input_eg26m_8", u0 = "_invalid_eg26m_38", f0 = "_toggle_eg26m_45", _0 = "_xs_eg26m_80", h0 = "_sm_eg26m_86", p0 = "_md_eg26m_92", m0 = "_lg_eg26m_98", g0 = "_xl_eg26m_104", Yn = {
  wrapper: c0,
  input: d0,
  invalid: u0,
  toggle: f0,
  xs: _0,
  sm: h0,
  md: p0,
  lg: m0,
  xl: g0
}, Tw = Le(
  function({
    size: t = "md",
    invalid: n = !1,
    className: s,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...r
  }, a) {
    const [c, u] = U(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ z("div", { className: Yn.wrapper, "data-size": t, children: [
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
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ o(we, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), x0 = "_mask_1pv7j_1", y0 = "_invalid_1pv7j_31", b0 = "_xs_1pv7j_38", v0 = "_sm_1pv7j_44", w0 = "_md_1pv7j_50", k0 = "_lg_1pv7j_56", $0 = "_xl_1pv7j_62", Ss = {
  mask: x0,
  invalid: y0,
  xs: b0,
  sm: v0,
  md: w0,
  lg: k0,
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
const Pw = Le(function({
  size: t = "md",
  invalid: n = !1,
  mask: s,
  value: l,
  defaultValue: i = "",
  onChange: d,
  className: r,
  onKeyDown: a,
  ...c
}, u) {
  const [f, w] = U(i ?? ""), v = l !== void 0, y = v ? l ?? "" : f, p = (_) => {
    const x = dr(_, s);
    return v || w(x), d?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: y,
      onChange: (_) => {
        p(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const x = _.currentTarget.selectionStart ?? y.length, k = y[x - 1];
          if (k !== void 0 && !/\d/.test(k)) {
            _.preventDefault();
            const g = y.replace(/\D/g, "");
            p(dr(g.slice(0, -1), s));
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
}), N0 = "_wrapper_1sqbd_1", O0 = "_input_1sqbd_8", S0 = "_invalid_1sqbd_38", C0 = "_button_1sqbd_45", D0 = "_up_1sqbd_77", E0 = "_down_1sqbd_82", z0 = "_xs_1sqbd_87", M0 = "_sm_1sqbd_93", j0 = "_md_1sqbd_99", I0 = "_lg_1sqbd_105", A0 = "_xl_1sqbd_111", un = {
  wrapper: N0,
  input: O0,
  invalid: S0,
  button: C0,
  up: D0,
  down: E0,
  xs: z0,
  sm: M0,
  md: j0,
  lg: I0,
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
const Lw = Le(
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
    step: u = 1,
    incrementLabel: f = "Increment",
    decrementLabel: w = "Decrement",
    onBlur: v,
    onKeyDown: y,
    ...p
  }, m) {
    const [h, _] = U(
      d != null ? String(d) : ""
    ), x = i !== void 0, k = x ? i == null ? "" : String(i) : h, g = (D) => {
      x || _(D), r?.(Ms(D));
    }, N = (D) => {
      x || _(String(D)), r?.(D);
    }, $ = (D) => {
      l || N(L0(k, D, a, c, u));
    }, O = (D) => {
      g(T0(D.target.value));
    }, M = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), $(1)) : D.key === "ArrowDown" && (D.preventDefault(), $(-1)), y?.(D);
    }, E = (D) => {
      const S = Ms(k);
      S === null ? (x || _(""), r?.(null)) : N(Ar(P0(S, a, u), a, c)), v?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ z("div", { className: un.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: m,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: k,
            disabled: l,
            onChange: O,
            onKeyDown: M,
            onBlur: E,
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
            "aria-label": f,
            disabled: l,
            onClick: () => $(1),
            children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [un.button, un.down].join(" "),
            "aria-label": w,
            disabled: l,
            onClick: () => $(-1),
            children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: 14 })
          }
        )
      ] })
    );
  }
), Ne = {
  "dx-colorpicker": "_dx-colorpicker_1hcsq_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_1hcsq_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_1hcsq_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_1hcsq_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_1hcsq_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_1hcsq_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_1hcsq_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_1hcsq_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_1hcsq_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_1hcsq_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_1hcsq_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_1hcsq_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_1hcsq_133",
  "dx-saturation-picker": "_dx-saturation-picker_1hcsq_138",
  "dx-hue-picker": "_dx-hue-picker_1hcsq_149",
  "dx-alpha-picker": "_dx-alpha-picker_1hcsq_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_1hcsq_155",
  "dx-hue-indicator": "_dx-hue-indicator_1hcsq_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_1hcsq_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_1hcsq_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_1hcsq_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_1hcsq_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_1hcsq_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_1hcsq_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_1hcsq_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_1hcsq_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_1hcsq_300"
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
function js(e) {
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
  const t = js(e);
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
const Rw = ({
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
  size: u = "md",
  tabIndex: f = 0,
  className: w,
  onChange: v,
  onValueChange: y,
  onOpen: p,
  onClose: m
}) => {
  const h = Q(null), _ = Q(null), x = Q(null), k = Q(null), g = Q(null), N = Pe(), $ = Q(null), O = xe(
    () => H0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [M, E] = U(!1), [D, S] = U(null), b = D ?? O, C = xe(() => F0(b), [b]), A = R(
    (G) => {
      const j = ur(G);
      v?.(j), y?.(j);
    },
    [v, y]
  ), T = R(
    (G, j) => {
      S(G), j && !i && A(G);
    },
    [i, A]
  ), I = R(() => {
    E(!1), S(null), m?.(), _.current?.focus();
  }, [m]), F = R(() => {
    r || (S(O), E(!0), p?.());
  }, [r, O, p]), L = R(() => {
    M ? I() : F();
  }, [M, I, F]), V = R(
    (G, j) => {
      const W = x.current;
      if (!W) return C;
      const Z = W.getBoundingClientRect(), _e = Dt((G - Z.left) / Z.width, 0, 1), te = Dt(1 - (j - Z.top) / Z.height, 0, 1);
      return { h: C.h, s: _e, v: te };
    },
    [C]
  ), ee = R(
    (G, j) => {
      if (!j) return 0;
      const W = j.getBoundingClientRect();
      return Dt((G - W.left) / W.width, 0, 1);
    },
    []
  ), Y = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "sat";
    const j = V(G.clientX, G.clientY);
    T({ ...Mn(j), a: b.a }, !0);
  }, pe = (G) => {
    if ($.current !== "sat") return;
    G.preventDefault();
    const j = V(G.clientX, G.clientY);
    T({ ...Mn(j), a: b.a }, !0);
  }, de = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "hue";
    const j = ee(G.clientX, k.current);
    T(
      { ...Mn({ ...C, h: j * 360 }), a: b.a },
      !0
    );
  }, re = (G) => {
    if ($.current !== "hue") return;
    G.preventDefault();
    const j = ee(G.clientX, k.current);
    T(
      { ...Mn({ ...C, h: j * 360 }), a: b.a },
      !0
    );
  }, q = (G) => {
    if (r) return;
    G.preventDefault(), G.currentTarget.setPointerCapture(G.pointerId), $.current = "alpha";
    const j = ee(G.clientX, g.current);
    T({ ...b, a: j }, !0);
  }, ie = (G) => {
    if ($.current !== "alpha") return;
    G.preventDefault();
    const j = ee(G.clientX, g.current);
    T({ ...b, a: j }, !0);
  }, se = () => {
    $.current = null;
  }, ue = R(
    (G, j) => {
      const W = {
        h: C.h,
        s: Dt(C.s + G, 0, 1),
        v: Dt(C.v + j, 0, 1)
      };
      T({ ...Mn(W), a: b.a }, !0);
    },
    [C, b.a, T]
  ), oe = R(
    (G) => {
      const j = (C.h + G + 360) % 360;
      T({ ...Mn({ ...C, h: j }), a: b.a }, !0);
    },
    [C, b.a, T]
  ), $e = R(
    (G) => {
      T({ ...b, a: Dt(b.a + G, 0, 1) }, !0);
    },
    [b, T]
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
        G.preventDefault(), I();
        break;
    }
  }, Ye = (G, j) => {
    switch (G.key) {
      case "ArrowLeft":
        G.preventDefault(), j === "hue" ? oe(-6) : $e(-0.05);
        break;
      case "ArrowRight":
        G.preventDefault(), j === "hue" ? oe(6) : $e(0.05);
        break;
      case "Escape":
        G.preventDefault(), I();
        break;
    }
  }, ve = (G, j) => {
    if (G === "hex") {
      const te = js(j);
      te && T({ ...te, a: b.a }, !0);
      return;
    }
    const W = j.replace(/[^\d.]/g, ""), Z = Number.parseFloat(W);
    if (Number.isNaN(Z)) return;
    if (G === "a") {
      const te = W.includes(".") ? Dt(Z, 0, 1) : Dt(Z / 100, 0, 1);
      T({ ...b, a: te }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    T(
      { ...b, [G]: Dt(Z, 0, _e[G]) },
      !0
    );
  }, Be = () => {
    D && (A(D), S(null), E(!1), m?.(), _.current?.focus());
  };
  ge(() => {
    if (!M) return;
    const G = (j) => {
      h.current && !h.current.contains(j.target) && I();
    };
    return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
  }, [M, I]), ge(() => {
    if (!M) return;
    const G = (j) => {
      j.key === "Escape" && I();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [M, I]);
  const ke = u === "xs" ? Ne["dx-colorpicker-trigger-xs"] : u === "sm" ? Ne["dx-colorpicker-trigger-sm"] : u === "lg" ? Ne["dx-colorpicker-trigger-lg"] : u === "xl" ? Ne["dx-colorpicker-trigger-xl"] : Ne["dx-colorpicker-trigger"], ot = ur(b), tt = B0(b), Ze = { x: C.s * 100, y: (1 - C.v) * 100 }, Nt = C.h / 360 * 100, xt = b.a * 100, lt = /* @__PURE__ */ z("div", { className: Ne["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(C.s * 100),
        "aria-valuetext": `Saturation ${Math.round(C.s * 100)}%, value ${Math.round(C.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : f,
        className: Ne["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${C.h}, 100%, 50%)`
        },
        onKeyDown: Oe,
        onPointerDown: Y,
        onPointerMove: pe,
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
        ref: k,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(C.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : f,
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
        ref: g,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(xt),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : f,
        className: Ne["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${C.h}, 100%, 50%))`
        },
        onKeyDown: (G) => Ye(G, "alpha"),
        onPointerDown: q,
        onPointerMove: ie,
        onPointerUp: se,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Ne["dx-alpha-indicator"],
            style: { left: `${xt}%` },
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
            value: tt,
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
            value: b.r,
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
            value: b.g,
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
            value: b.b,
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
            value: Math.round(b.a * 100),
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
        tabIndex: r ? -1 : f,
        style: { backgroundColor: G },
        onClick: () => {
          const j = js(G);
          i ? T({ ...j, a: b.a }, !1) : (S(null), A({ ...j, a: b.a }), E(!1), m?.(), _.current?.focus());
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
  return /* @__PURE__ */ z(
    "div",
    {
      ref: h,
      className: [
        Ne["dx-colorpicker"],
        M ? Ne["dx-colorpicker-open"] : null,
        a ? Ne["dx-colorpicker-invalid"] : null,
        w
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ z(
          "button",
          {
            ref: _,
            type: "button",
            className: [Ne["dx-colorpicker-trigger"], ke].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": M,
            "aria-controls": N,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: f,
            onClick: L,
            onKeyDown: (G) => {
              G.key === "Escape" && M && (G.preventDefault(), I());
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
              d && /* @__PURE__ */ o("span", { className: Ne["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: 14 }) })
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
  "dx-datepicker": "_dx-datepicker_8hjlr_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_8hjlr_9",
  "dx-datepicker-input": "_dx-datepicker-input_8hjlr_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_8hjlr_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_8hjlr_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_8hjlr_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_8hjlr_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_8hjlr_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_8hjlr_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_8hjlr_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_8hjlr_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_8hjlr_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_8hjlr_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_8hjlr_161",
  "dx-datepicker-header": "_dx-datepicker-header_8hjlr_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_8hjlr_175",
  "dx-datepicker-title": "_dx-datepicker-title_8hjlr_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_8hjlr_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_8hjlr_214",
  "dx-datepicker-row": "_dx-datepicker-row_8hjlr_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_8hjlr_220",
  "dx-datepicker-day": "_dx-datepicker-day_8hjlr_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_8hjlr_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_8hjlr_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_8hjlr_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_8hjlr_276",
  "dx-datepicker-time": "_dx-datepicker-time_8hjlr_282",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_8hjlr_291",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_8hjlr_297",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_8hjlr_302",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_8hjlr_306",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_8hjlr_326",
  "dx-datepicker-ok": "_dx-datepicker-ok_8hjlr_354"
}, q0 = 42;
function Et(e) {
  return String(e).padStart(2, "0");
}
function $t(e) {
  return `${e.year}-${Et(e.month)}-${Et(e.day)}`;
}
function K0(e, t) {
  const n = $t(e);
  return t ? `${n} ${Et(e.hour)}:${Et(e.minute)}:${Et(e.second)}` : n;
}
function Is(e) {
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
  const n = Is(e);
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
const Bw = Le(
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
    allowClear: u = !1,
    inline: f = !1,
    disabledDates: w,
    locale: v = "en-US",
    onChange: y,
    onValueChange: p,
    onOpen: m,
    onClose: h,
    disabled: _,
    readOnly: x,
    placeholder: k,
    ariaLabel: g,
    triggerLabel: N,
    clearLabel: $,
    tabIndex: O,
    className: M,
    onBlur: E,
    onKeyDown: D,
    ...S
  }, b) {
    const C = Q(null), A = Q(null), T = Q(null), I = Q(null), F = Pe(), L = s !== void 0, [V, ee] = U(
      () => l != null ? fs(
        Zn(l, i) ?? fn(),
        i,
        v
      ) : ""
    ), [Y, pe] = U(!1), [de, re] = U(null), [q, ie] = U(() => {
      const K = s !== void 0 ? s ?? "" : l ?? "";
      if (K) {
        const le = Zn(K, i);
        if (le) return le;
      }
      return fn();
    }), se = xe(() => d ? Is(d) : null, [d]), ue = xe(() => r ? Is(r) : null, [r]), oe = xe(
      () => new Set(w ?? []),
      [w]
    ), $e = xe(() => {
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
          const je = tn(K, le);
          if (!Oe(je)) return je;
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
        y?.(le), p?.(le);
      },
      [L, i, v, a, y, p]
    ), Be = R(
      (K) => {
        A.current = K, typeof b == "function" ? b(K) : b && (b.current = K);
      },
      [b]
    ), ke = R(() => {
      pe(!1), re(null), h?.(), f || T.current?.focus();
    }, [f, h]), ot = R(() => {
      if (_) return;
      const K = $e ?? fn();
      re(K), ie(Ye(K)), pe(!0), m?.();
    }, [_, $e, Ye, m]), tt = R(() => {
      Y ? ke() : ot();
    }, [Y, ke, ot]), Ze = R((K) => {
      I.current?.querySelector(
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
        re(Te), a || (ve(Te), ke());
      },
      [Oe, de, $e, a, ve, ke]
    ), xt = R(
      (K, le) => {
        re((je) => {
          const Te = je ?? $e ?? fn(), st = Math.min(K === "hour" ? 23 : 59, Math.max(0, Te[K] + le));
          return { ...Te, [K]: st };
        });
      },
      [$e]
    ), lt = R(
      (K, le) => {
        const je = le.replace(/\D/g, ""), Te = je === "" ? 0 : Number(je), Ft = K === "hour" ? 23 : 59;
        re((st) => ({ ...st ?? $e ?? fn(), [K]: Math.min(Ft, Te) }));
      },
      [$e]
    ), G = R(() => {
      de && (ve(de), ke());
    }, [de, ve, ke]), j = R(() => {
      if (Y) return;
      const K = Zn(V, i);
      ve(K ? X0(K, se, ue) : null);
    }, [Y, V, i, se, ue, ve]), W = (K) => {
      const le = K.target.value;
      L || ee(le), Y && re(null);
    }, Z = (K) => {
      K.key === "Enter" ? (K.preventDefault(), Y ? de && (ve(de), ke()) : j()) : K.key === "Escape" ? Y && (K.preventDefault(), ke()) : K.key === "ArrowDown" && !Y ? (K.preventDefault(), ot()) : K.key === "Tab" && Y && pe(!1), D?.(K);
    }, _e = (K) => {
      j(), E?.(K);
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
          K.preventDefault(), ke();
          break;
        case "Tab":
          pe(!1);
          break;
      }
      if (le) {
        const je = Ye(le);
        ie(je), setTimeout(() => Ze(je), 0);
      }
    };
    ge(() => {
      if (!Y) return;
      const K = (le) => {
        C.current && !C.current.contains(le.target) && ke();
      };
      return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
    }, [Y, ke]), ge(() => {
      if (!Y) return;
      const K = (le) => {
        le.key === "Escape" && ke();
      };
      return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
    }, [Y, ke]);
    const ye = () => {
      L || ee(""), y?.(""), p?.(""), A.current?.focus();
    }, Ee = Y && de ? fs(de, i, v) : L ? s ? fs(
      Zn(s, i) ?? fn(),
      i,
      v
    ) : "" : V, Fe = L ? !!s : V.length > 0, He = f || Y, nt = { year: q.year, month: q.month }, on = new Date(nt.year, nt.month - 1, 1).getDay(), J = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let K = 0; K < q0; K += 1)
      Se.push(tn(J, K - on));
    const dt = de ? $t(de) : $e ? $t($e) : null, zt = $t(fn()), ut = `${nt.year}-${Et(nt.month)}`, Ce = xe(
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
    ), yt = t === "xs" ? De["dx-datepicker-input--xs"] : t === "sm" ? De["dx-datepicker-input--sm"] : t === "lg" ? De["dx-datepicker-input--lg"] : t === "xl" ? De["dx-datepicker-input--xl"] : De["dx-datepicker-input--md"], Je = /* @__PURE__ */ z(
      "div",
      {
        className: De["dx-datepicker-calendar"],
        "aria-label": g ?? "Date picker",
        children: [
          /* @__PURE__ */ z("div", { className: De["dx-datepicker-header"], children: [
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
                children: /* @__PURE__ */ o(we, { icon: "chevron_left", size: 16 })
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
                children: /* @__PURE__ */ o(we, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ z(
            "div",
            {
              ref: I,
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
                    children: Se.slice(le * 7, le * 7 + 7).map((je) => {
                      const Te = $t(je), Ft = Oe(je), st = Te.startsWith(ut);
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
                            new Date(je.year, je.month - 1, je.day)
                          ),
                          className: [
                            De["dx-datepicker-day"],
                            st ? null : De["dx-datepicker-day--outside"],
                            Te === zt ? De["dx-datepicker-day--today"] : null,
                            Te === dt ? De["dx-datepicker-day--selected"] : null,
                            Ft ? De["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Nt(je),
                          onFocus: () => ie(je),
                          children: je.day
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
            Y0.map((K) => /* @__PURE__ */ z("label", { className: De["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: De["dx-datepicker-time-label"], children: _s(K) }),
              /* @__PURE__ */ z("div", { className: De["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: De["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _s(K),
                    value: Et(
                      (de ?? $e ?? fn())[K]
                    ),
                    onChange: (le) => lt(K, le.target.value),
                    onKeyDown: (le) => {
                      le.key === "ArrowUp" ? (le.preventDefault(), xt(K, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), xt(K, -1)) : le.key === "Enter" && (le.preventDefault(), G());
                    }
                  }
                ),
                /* @__PURE__ */ z("span", { className: De["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_s(K).toLowerCase()}`,
                      onClick: () => xt(K, 1),
                      children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_s(K).toLowerCase()}`,
                      onClick: () => xt(K, -1),
                      children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: 11 })
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
        ref: C,
        className: [
          De["dx-datepicker"],
          f ? De["dx-datepicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ z(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Be,
                type: "text",
                autoComplete: "off",
                value: Ee,
                disabled: _,
                readOnly: x,
                placeholder: k,
                tabIndex: O,
                role: c ? void 0 : "combobox",
                "aria-label": g ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : He,
                "aria-controls": c ? void 0 : F,
                "aria-invalid": n || void 0,
                className: [
                  De["dx-datepicker-input"],
                  yt,
                  n ? De["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: W,
                onKeyDown: Z,
                onBlur: _e,
                onClick: () => {
                  c || tt();
                },
                ...S
              }
            ),
            u && !_ && Fe && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  De["dx-datepicker-clear"],
                  c ? De["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: ye,
                children: /* @__PURE__ */ o(we, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ o(
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
                onClick: tt,
                children: /* @__PURE__ */ o(we, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          He && /* @__PURE__ */ o(
            "div",
            {
              id: F,
              role: f ? void 0 : "dialog",
              "aria-label": f ? void 0 : g ?? "Date picker",
              className: f ? void 0 : De["dx-datepicker-popup"],
              children: Je
            }
          )
        ]
      }
    );
  }
), _n = {
  "dx-rating": "_dx-rating_1x39v_1",
  "dx-rating-item": "_dx-rating-item_1x39v_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_1x39v_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_1x39v_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_1x39v_51",
  "dx-rating-clear": "_dx-rating-clear_1x39v_55",
  "dx-rating-readonly": "_dx-rating-readonly_1x39v_87",
  "dx-rating-disabled": "_dx-rating-disabled_1x39v_96"
}, Fw = ({
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
  onValueChange: u
}) => {
  const [f, w] = U(e), v = R(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), y = R(
    (_) => {
      c?.(_), u?.(_);
    },
    [c, u]
  ), p = R(
    (_) => {
      n || s || (y(_), w(_));
    },
    [n, s, y]
  ), m = (_) => {
    if (n || s) return;
    const x = f > 0 ? f : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), p(v(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), p(v(x - 1));
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
        _n["dx-rating"],
        n ? _n["dx-rating-readonly"] : null,
        s ? _n["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: m,
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
            children: /* @__PURE__ */ o(we, { icon: "block", size: 16 })
          }
        ),
        h.map((_) => {
          const x = _ <= e, k = _ === (e > 0 ? e : f);
          return /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: k ? r : -1,
              "aria-disabled": s || n || void 0,
              disabled: s || n,
              className: [
                _n["dx-rating-item"],
                x ? _n["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(_),
              onFocus: () => w(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: _n["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(we, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: _n["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(we, { icon: "star", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, wn = {
  "dx-slider": "_dx-slider_1jrpw_1",
  "dx-slider-track": "_dx-slider-track_1jrpw_9",
  "dx-slider-range": "_dx-slider-range_1jrpw_17",
  "dx-slider-handle": "_dx-slider-handle_1jrpw_26",
  "dx-slider-vertical": "_dx-slider-vertical_1jrpw_58",
  "dx-slider-disabled": "_dx-slider-disabled_1jrpw_84"
};
function Ut(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const Hw = ({
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
  minLabel: u = "Min",
  maxLabel: f = "Max",
  tabIndex: w = 0,
  className: v,
  onChange: y,
  onInput: p,
  onValueChange: m,
  onInputChange: h
}) => {
  const _ = Q(null), x = Q(
    null
  ), [k, g] = U(null), N = k ?? e, $ = xe(
    () => Ut(N, s, l),
    [N, s, l]
  ), O = xe(
    () => Ut(d ? t : $, s, l),
    [d, t, $, s, l]
  ), M = xe(
    () => Ut(d ? Math.max(n, O) : $, s, l),
    [d, n, O, $, s, l]
  ), E = R(
    (q) => {
      const ie = l - s;
      return ie <= 0 ? 0 : (Ut(q, s, l) - s) / ie * 100;
    },
    [s, l]
  ), D = R(
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
  ), S = R(
    (q) => {
      typeof q == "number" && g(q), y?.(q), m?.(q);
    },
    [y, m]
  ), b = R(
    (q) => {
      typeof q == "number" && g(q), p?.(q), h?.(q);
    },
    [p, h]
  ), C = R(
    (q, ie, se) => {
      const ue = D(ie, se);
      let oe;
      d ? q === "min" ? oe = { min: Math.min(ue, M), max: M } : oe = { min: O, max: Math.max(ue, O) } : oe = ue, b(oe), x.current === null && S(oe);
    },
    [d, D, O, M, b, S]
  ), A = R(
    (q, ie) => {
      const se = (i > 0 ? i : 1) * ie;
      let ue;
      d ? q === "min" ? ue = {
        min: Ut(O + se, s, M),
        max: M
      } : ue = {
        min: O,
        max: Ut(M + se, O, l)
      } : ue = Ut($ + se, s, l), S(ue);
    },
    [d, i, s, l, O, M, $, S]
  ), T = (q, ie) => {
    if (!a)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), A(q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), A(q, 1);
          break;
        case "Home":
          ie.preventDefault(), S(d ? q === "min" ? { min: s, max: M } : { min: O, max: O } : s);
          break;
        case "End":
          ie.preventDefault(), S(d ? q === "min" ? { min: M, max: M } : { min: O, max: l } : l);
          break;
      }
  }, I = (q, ie) => {
    a || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), x.current = { key: q, pointerId: ie.pointerId }, C(q, ie.clientX, ie.clientY));
  }, F = (q) => {
    !x.current || x.current.pointerId !== q.pointerId || (q.preventDefault(), C(x.current.key, q.clientX, q.clientY));
  }, L = (q) => {
    !x.current || x.current.pointerId !== q.pointerId || (x.current = null, q.preventDefault(), S(d ? { min: O, max: M } : $));
  }, [V, ee] = U(null), Y = E(O), pe = E(M), de = d ? Y : 0, re = pe;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        wn["dx-slider"],
        r === "vertical" ? wn["dx-slider-vertical"] : null,
        a ? wn["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ z("div", { ref: _, className: wn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: wn["dx-slider-range"],
            style: r === "vertical" ? { bottom: `${de}%`, height: `${re - de}%` } : { left: `${de}%`, width: `${re - de}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(O),
            "aria-orientation": r,
            "aria-label": d ? u : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && V === "max" ? -1 : w,
            className: wn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${Y}% - 8px)` } : { left: `calc(${Y}% - 8px)` },
            onKeyDown: (q) => T("min", q),
            onPointerDown: (q) => I("min", q),
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
            "aria-valuenow": Math.round(M),
            "aria-orientation": r,
            "aria-label": f,
            "aria-disabled": a || void 0,
            tabIndex: a || V === "min" ? -1 : w,
            className: wn["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${pe}% - 8px)` } : { left: `calc(${pe}% - 8px)` },
            onKeyDown: (q) => T("max", q),
            onPointerDown: (q) => I("max", q),
            onPointerMove: F,
            onPointerUp: L,
            onFocus: () => ee("max")
          }
        )
      ] })
    }
  );
}, qe = {
  "dx-timespanpicker": "_dx-timespanpicker_gg8fw_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_gg8fw_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_gg8fw_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_gg8fw_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_gg8fw_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_gg8fw_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_gg8fw_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_gg8fw_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_gg8fw_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_gg8fw_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_gg8fw_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_gg8fw_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_gg8fw_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_gg8fw_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_gg8fw_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_gg8fw_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_gg8fw_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_gg8fw_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_gg8fw_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_gg8fw_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_gg8fw_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_gg8fw_250"
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
function jn(e) {
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
    if (!l.slice(1).some((f) => f != null)) return null;
    const r = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, u = l[4] != null ? Number(l[4]) : 0;
    return n * (r * sn + a * rn + c * Rt + u);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    s
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, r = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, u = i[5] != null ? +`0.${i[5]}` : 0;
    return r > 23 || a > 59 || c > 59 ? null : n * (d * sn + r * rn + a * Rt + c + u);
  }
  return null;
}
function ex(e) {
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
  const d = Math.floor(s / Rt) + i, r = d % 60, a = Math.floor(d / 60), c = a % 24, u = Math.floor(a / 24), f = n ? "-" : "", w = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${w}${jn(c)}`;
    case "minute":
      return `${f}${w}${jn(c)}:${jn(r)}`;
    default:
      return `${f}${w}${jn(c)}:${jn(r)}:${jn(l)}`;
  }
}
function mr(e, t = "second") {
  const n = ss(e);
  return n === null ? "" : As(n, t);
}
function Ds(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const qw = Le(
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
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: w = !0,
    allowClear: v = !1,
    inline: y = !1,
    onChange: p,
    onValueChange: m,
    onOpen: h,
    onClose: _,
    disabled: x,
    placeholder: k,
    ariaLabel: g,
    triggerLabel: N,
    clearLabel: $,
    tabIndex: O,
    className: M,
    onBlur: E,
    onKeyDown: D,
    ...S
  }, b) {
    const C = Q(null), A = Q(null), T = Q(null), I = Pe(), F = s !== void 0, [L, V] = U(
      () => l != null ? mr(l, a) : ""
    ), [ee, Y] = U(!1), [pe, de] = U(null), [re, q] = U(null), ie = xe(
      () => ss(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), se = xe(
      () => ss(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ue = xe(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), oe = xe(() => {
      const J = F ? s ?? "" : L;
      return J ? ss(J) : null;
    }, [s, L, F]), $e = R(
      (J) => {
        const Se = J === null ? "" : As(J, a);
        F || V(Se), p?.(Se), m?.(Se);
      },
      [F, a, p, m]
    ), Oe = R(
      (J) => {
        J && pe !== null && $e(pe), Y(!1), de(null), q(null), _?.(), y || T.current?.focus();
      },
      [y, pe, $e, _]
    ), Ye = R(() => {
      x || (de(oe ?? 0), Y(!0), h?.());
    }, [x, oe, h]), ve = R(() => {
      ee ? Oe(!1) : Ye();
    }, [ee, Oe, Ye]), Be = R(
      (J, Se) => {
        de((dt) => {
          const ut = (dt ?? oe ?? 0) + Se * ue * hr[J];
          return Ds(ut, ie, se);
        });
      },
      [oe, ue, ie, se]
    ), ke = R(
      (J) => {
        const Se = re?.[J];
        if (Se == null) return;
        const dt = Number.parseFloat(Se), zt = Number.isNaN(dt) ? 0 : dt;
        de((ut) => {
          const Ce = ut ?? oe ?? 0, Ae = pr(Ce);
          Ae[J] = zt;
          const yt = (Ce < 0 ? -1 : 1) * ex(Ae);
          return Ds(yt, ie, se);
        }), q(null);
      },
      [re, oe, ie, se]
    ), ot = (J, Se) => {
      q((dt) => ({ ...dt ?? {}, [J]: Se }));
    }, tt = (J, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), ke(J), Be(J, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), ke(J), Be(J, -1);
          break;
        case "Home":
          Se.preventDefault(), ke(J), de(ie);
          break;
        case "End":
          Se.preventDefault(), ke(J), de(se);
          break;
        case "Enter":
          Se.preventDefault(), ke(J), Oe(!0);
          break;
      }
    }, Ze = R(() => {
      if (ee) return;
      const J = ss(L);
      $e(J !== null ? Ds(J, ie, se) : null);
    }, [ee, L, ie, se, $e]), Nt = (J) => {
      F || V(J.target.value);
    }, xt = (J) => {
      J.key === "Enter" ? (J.preventDefault(), ee ? Oe(!0) : Ze()) : J.key === "Escape" && ee ? (J.preventDefault(), Oe(!1)) : J.key === "ArrowDown" && !ee ? (J.preventDefault(), Ye()) : J.key === "Tab" && ee && Y(!1), D?.(J);
    }, lt = (J) => {
      Ze(), E?.(J);
    }, G = () => {
      F || V(""), p?.(""), m?.(""), A.current?.focus();
    };
    ge(() => {
      if (!ee) return;
      const J = (Se) => {
        C.current && !C.current.contains(Se.target) && Oe(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [ee, Oe]), ge(() => {
      if (!ee) return;
      const J = (Se) => {
        Se.key === "Escape" && Oe(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [ee, Oe]), ge(() => {
      if (y && pe !== null) {
        const J = oe;
        (J === null || Math.abs(pe - J) > 1e-9) && $e(pe);
      }
    }, [y, pe, oe, $e]);
    const j = R(
      (J) => {
        A.current = J, typeof b == "function" ? b(J) : b && (b.current = J);
      },
      [b]
    ), W = F ? s ? mr(s, a) : "" : L, Z = F ? !!s : L.length > 0, _e = y || ee, te = pe ?? oe ?? 0, ye = pr(te), Ee = Q0[a], He = ["days", "hours", "minutes", "seconds"].filter(
      (J) => hr[J] >= Ee && (J === "days" ? c : J === "hours" ? u : J === "minutes" ? f : w)
    ), nt = t === "xs" ? qe["dx-timespanpicker-input--xs"] : t === "sm" ? qe["dx-timespanpicker-input--sm"] : t === "lg" ? qe["dx-timespanpicker-input--lg"] : t === "xl" ? qe["dx-timespanpicker-input--xl"] : qe["dx-timespanpicker-input--md"], on = /* @__PURE__ */ z("div", { className: qe["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-preview"], "aria-live": "polite", children: As(te, a) }),
      /* @__PURE__ */ o("div", { className: qe["dx-timespanpicker-units"], children: He.map((J) => /* @__PURE__ */ z("label", { className: qe["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: qe["dx-timespanpicker-unit-label"], children: Cs[J] }),
        /* @__PURE__ */ z("span", { className: qe["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: qe["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: re?.[J] ?? String(ye[J]),
              onChange: (Se) => ot(J, Se.target.value),
              onKeyDown: (Se) => tt(J, Se),
              onBlur: () => ke(J)
            }
          ),
          /* @__PURE__ */ z("span", { className: qe["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Cs[J].toLowerCase()}`,
                onClick: () => {
                  ke(J), Be(J, 1);
                },
                children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Cs[J].toLowerCase()}`,
                onClick: () => {
                  ke(J), Be(J, -1);
                },
                children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: 11 })
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
        ref: C,
        className: [
          qe["dx-timespanpicker"],
          y ? qe["dx-timespanpicker-inline"] : null,
          M
        ].filter(Boolean).join(" "),
        children: [
          !y && /* @__PURE__ */ z(rt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: j,
                type: "text",
                autoComplete: "off",
                value: W,
                disabled: x,
                placeholder: k,
                tabIndex: O,
                role: "combobox",
                "aria-label": g ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": I,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-timespanpicker-input"],
                  nt,
                  n ? qe["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Nt,
                onKeyDown: xt,
                onBlur: lt,
                ...S
              }
            ),
            v && !x && Z && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
                onClick: G,
                children: /* @__PURE__ */ o(we, { icon: "close", size: 14 })
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
                "aria-controls": I,
                disabled: x,
                onClick: ve,
                children: /* @__PURE__ */ o(we, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ o(
            "div",
            {
              id: I,
              role: y ? void 0 : "dialog",
              "aria-label": g ?? "Time span picker",
              className: y ? void 0 : qe["dx-timespanpicker-popup"],
              children: on
            }
          )
        ]
      }
    );
  }
), tx = "_wrapper_1153f_1", nx = "_cells_1153f_8", sx = "_cell_1153f_8", rx = "_invalid_1153f_63", ox = "_live_1153f_73", kn = {
  wrapper: tx,
  cells: nx,
  cell: sx,
  "cell-sm": "_cell-sm_1153f_45",
  "cell-md": "_cell-md_1153f_51",
  "cell-lg": "_cell-lg_1153f_57",
  invalid: rx,
  live: ox
};
function gr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Kw = Le(
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
    liveAnnounce: u = !0,
    className: f,
    "aria-label": w
  }, v) {
    const y = Pe(), p = n !== void 0, [m, h] = U(gr(s).join("")), _ = p ? gr(n).join("") : m, x = Array.from({ length: t }, (S, b) => _[b] ?? ""), k = Q([]), [g, N] = U(""), $ = (S) => {
      p || h(S), l?.(S);
    }, O = (S) => {
      const b = k.current[S];
      b && !b.disabled && (b.focus(), b.select());
    }, M = (S, b) => {
      const C = b.replace(/\D/g, "").slice(-1), A = _.split("");
      if (C) {
        A[S] = C;
        const T = A.join("").slice(0, t);
        $(T), T.length < t ? O(S + 1) : u && N("Code complete");
      }
    }, E = (S, b) => {
      if (b.key === "Backspace") {
        if (b.preventDefault(), _[S]) {
          const C = _.split("");
          C[S] = "", $(C.join(""));
        } else if (S > 0) {
          const C = _.split("");
          C[S - 1] = "", $(C.join("")), O(S - 1);
        }
      } else b.key === "ArrowLeft" && S > 0 ? (b.preventDefault(), O(S - 1)) : b.key === "ArrowRight" && S < t - 1 ? (b.preventDefault(), O(S + 1)) : b.key === "Home" ? (b.preventDefault(), O(0)) : b.key === "End" && (b.preventDefault(), O(t - 1));
    }, D = (S, b) => {
      b.preventDefault();
      const C = b.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!C) return;
      const A = _.split("");
      let T = 0;
      for (let F = 0; F < C.length && S + F < t; F++)
        A[S + F] = C[F] ?? "", T++;
      const I = A.join("");
      $(I), I.length >= t ? u && N("Code complete") : O(S + T);
    };
    return /* @__PURE__ */ z(
      "div",
      {
        className: [kn.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": w ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [kn.cells, kn[d]].join(" "), children: x.map((S, b) => /* @__PURE__ */ o(
            "input",
            {
              ref: (C) => {
                k.current[b] = C, b === 0 && v && (typeof v == "function" ? v(C) : v.current = C);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: S,
              disabled: a,
              "aria-label": `Digit ${b + 1} of ${t}`,
              "aria-invalid": i && S !== "" ? !0 : void 0,
              autoFocus: r && b === 0,
              className: [
                kn.cell,
                kn[`cell-${d}`],
                i ? kn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (C) => M(b, C.target.value),
              onKeyDown: (C) => E(b, C),
              onPaste: (C) => D(b, C),
              onFocus: (C) => C.target.select(),
              onBlur: () => {
                u && N("");
              }
            },
            b
          )) }),
          u && /* @__PURE__ */ o(
            "span",
            {
              id: `${y}-live`,
              role: "status",
              "aria-live": "polite",
              className: kn.live,
              children: g
            }
          )
        ]
      }
    );
  }
), lx = "_wrapper_1xm7x_1", ax = "_header_1xm7x_7", ix = "_label_1xm7x_15", cx = "_clear_1xm7x_22", dx = "_canvas_1xm7x_53", ux = "_disabled_1xm7x_69", In = {
  wrapper: lx,
  header: ax,
  label: ix,
  clear: cx,
  canvas: dx,
  disabled: ux
}, Ww = Le(
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
    disabled: u = !1,
    className: f
  }, w) {
    const v = Q(null), y = Q(!1), p = Q(!1), m = Q({ x: 0, y: 0 });
    ge(() => {
      const $ = v.current;
      if (!$) return;
      const O = window.devicePixelRatio || 1, M = Math.round((a ?? $.clientWidth) * O), E = Math.round(c * O);
      ($.width !== M || $.height !== E) && ($.width = M, $.height = E);
      const D = $.getContext("2d");
      if (!D) return;
      D.setTransform(O, 0, 0, O, 0, 0), D.lineWidth = i, D.strokeStyle = l, D.lineCap = "round", D.lineJoin = "round";
      const S = t ?? n;
      if (S) {
        const b = new Image();
        b.onload = () => {
          D.drawImage(b, 0, 0, $.clientWidth, c);
        }, b.src = S;
      }
    }, [t, n, l, i, a, c]);
    const h = () => {
      const $ = v.current;
      if (!$) return;
      const O = $.toDataURL("image/png");
      s?.(O);
    }, _ = () => {
      const $ = v.current;
      if (!$) return;
      const O = $.getContext("2d");
      O && O.clearRect(0, 0, $.width, $.height), s?.("");
    };
    Rs(w, () => ({
      clear: _,
      toDataURL: ($ = "image/png", O) => v.current?.toDataURL($, O) ?? ""
    }));
    const x = ($) => {
      const O = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - O.left, y: $.clientY - O.top };
    }, k = ($) => {
      u || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), y.current = !0, p.current = !1, m.current = x($));
    }, g = ($) => {
      if (!y.current) return;
      $.preventDefault();
      const O = $.currentTarget.getContext("2d");
      if (!O) return;
      const M = x($);
      O.beginPath(), O.moveTo(m.current.x, m.current.y), O.lineTo(M.x, M.y), O.stroke(), m.current = M, p.current = !0;
    }, N = ($) => {
      y.current && ($.preventDefault(), y.current = !1, p.current && h());
    };
    return /* @__PURE__ */ z(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          In.wrapper,
          f,
          u ? In.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ z("div", { className: In.header, children: [
            /* @__PURE__ */ o("span", { className: In.label, children: r }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: In.clear,
                onClick: _,
                disabled: u,
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
              "aria-disabled": u || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${c}px`
              },
              className: In.canvas,
              onPointerDown: k,
              onPointerMove: g,
              onPointerUp: N,
              onPointerCancel: N
            }
          )
        ]
      }
    );
  }
), fx = "_wrapper_1a2s6_1", _x = "_trigger_1a2s6_7", hx = "_list_1a2s6_35", px = "_row_1a2s6_44", mx = "_name_1a2s6_59", gx = "_size_1a2s6_68", xx = "_progress_1a2s6_74", yx = "_fill_1a2s6_82", bx = "_status_1a2s6_99", vx = "_remove_1a2s6_106", Vt = {
  wrapper: fx,
  trigger: _x,
  list: hx,
  row: px,
  name: mx,
  size: gx,
  progress: xx,
  fill: yx,
  status: bx,
  remove: vx
};
function xr(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Uw = Le(function({
  url: t,
  multiple: n = !1,
  parameterName: s = "files",
  auto: l = !0,
  headers: i,
  accept: d,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: c = "Upload",
  children: u,
  onProgress: f,
  onComplete: w,
  onError: v
}, y) {
  const p = Q(null), [m, h] = U([]), _ = Q(/* @__PURE__ */ new Map()), x = (O, M) => {
    h(
      (E) => E.map((D) => D.file.name === O ? { ...D, ...M } : D)
    );
  }, k = (O) => {
    if (!t) return;
    const M = new XMLHttpRequest();
    _.current.set(O.file.name, M);
    const E = new FormData();
    if (E.append(s, O.file), M.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const S = Math.round(D.loaded / D.total * 100);
      x(O.file.name, { state: "uploading", progress: S }), f?.(O.file.name, S);
    }), M.addEventListener("load", () => {
      M.status >= 200 && M.status < 300 ? (x(O.file.name, { state: "complete", progress: 100 }), w?.(O.file.name)) : (x(O.file.name, {
        state: "error",
        message: `HTTP ${M.status}`
      }), v?.(O.file.name, `HTTP ${M.status}`));
    }), M.addEventListener("error", () => {
      x(O.file.name, { state: "error", message: "Network error" }), v?.(O.file.name, "Network error");
    }), i)
      for (const [D, S] of Object.entries(i))
        M.setRequestHeader(D, S);
    M.open("POST", t), M.send(E), x(O.file.name, { state: "uploading", progress: 0 });
  }, g = (O) => {
    if (!O) return;
    const M = [...O], E = [];
    let D = Math.max(0, r - m.length);
    for (const b of M) {
      if (a != null && b.size > a) {
        v?.(
          b.name,
          `File too large (maximum ${xr(a)})`
        );
        continue;
      }
      if (D <= 0) {
        v?.(b.name, `Too many files (maximum ${r})`);
        continue;
      }
      D -= 1, E.push(b);
    }
    const S = E.map((b) => ({
      file: b,
      state: "pending",
      progress: 0
    }));
    h((b) => [...b, ...S]), p.current && (p.current.value = ""), l && S.forEach(k);
  }, N = (O) => {
    _.current.get(O)?.abort(), _.current.delete(O), h((E) => E.filter((D) => D.file.name !== O));
  }, $ = u ?? /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      className: Vt.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ o(we, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return Rs(y, () => ({
    open: () => p.current?.click(),
    upload: () => m.forEach((O) => O.state === "pending" ? k(O) : null)
  })), /* @__PURE__ */ z("div", { className: Vt.wrapper, children: [
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
        onChange: (O) => g(O.target.files)
      }
    ),
    !u && m.length > 0 && /* @__PURE__ */ o("ul", { className: Vt.list, children: m.map(({ file: O, state: M, progress: E, message: D }) => /* @__PURE__ */ z(
      "li",
      {
        className: Vt.row,
        "data-state": M,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Vt.name, children: O.name }),
          /* @__PURE__ */ o("span", { className: Vt.size, children: xr(O.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Vt.progress,
              role: "progressbar",
              "aria-label": `${O.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": E,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: Vt.fill,
                  style: { width: `${E}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: Vt.status, role: "status", children: M === "uploading" ? "Uploading" : M === "complete" ? "Complete" : M === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Vt.remove,
              "aria-label": `Remove ${O.name}`,
              onClick: () => N(O.name),
              children: /* @__PURE__ */ o(we, { icon: "close", size: 14 })
            }
          )
        ]
      },
      O.name
    )) })
  ] });
}), wx = "_zone_jvpj4_1", kx = "_dragging_jvpj4_23", $x = "_caption_jvpj4_28", Nx = "_browse_jvpj4_40", Ox = "_disabled_jvpj4_67", Jn = {
  zone: wx,
  dragging: kx,
  caption: $x,
  browse: Nx,
  disabled: Ox
};
function Sx(e, t) {
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
const Vw = Le(
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
    const u = Q(null), [f, w] = U(!1), v = (_) => {
      if (!_ || _.length === 0) return;
      const x = [..._].filter((k) => Sx(k, t ?? ""));
      x.length !== 0 && s?.(x);
    }, y = (_) => {
      r || (_.preventDefault(), w(!0));
    }, p = (_) => {
      r || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", w(!0));
    }, m = (_) => {
      r || _.currentTarget.contains(_.relatedTarget) || w(!1);
    }, h = (_) => {
      r || (_.preventDefault(), w(!1), v(_.dataTransfer.files));
    };
    return Rs(c, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ z(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": r || void 0,
        className: [
          Jn.zone,
          f ? Jn.dragging : null,
          r ? Jn.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: y,
        onDragOver: p,
        onDragLeave: m,
        onDrop: h,
        children: [
          /* @__PURE__ */ o("p", { className: Jn.caption, children: f ? i : l }),
          !r && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Jn.browse,
              onClick: () => u.current?.click(),
              children: d
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
                v(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), Cx = "_root_1i8uw_1", Dx = "_menubar_1i8uw_5", Ex = "_horizontal_1i8uw_15", zx = "_vertical_1i8uw_20", Mx = "_itemWrapper_1i8uw_25", jx = "_item_1i8uw_25", Ix = "_disabled_1i8uw_61", Ax = "_icon_1i8uw_68", Tx = "_text_1i8uw_75", Px = "_caret_1i8uw_79", Lx = "_hasChildren_1i8uw_85", Rx = "_submenu_1i8uw_94", Bx = "_submenuItem_1i8uw_118", Fx = "_flyout_1i8uw_155", Hx = "_hamburger_1i8uw_175", qx = "_responsive_1i8uw_198", Kx = "_mobileOpen_1i8uw_207", Ue = {
  root: Cx,
  menubar: Dx,
  horizontal: Ex,
  vertical: zx,
  itemWrapper: Mx,
  item: jx,
  disabled: Ix,
  icon: Ax,
  text: Tx,
  caret: Px,
  hasChildren: Lx,
  submenu: Rx,
  submenuItem: Bx,
  flyout: Fx,
  hamburger: Hx,
  responsive: qx,
  mobileOpen: Kx
}, bs = Ln(null);
function Wx(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), s = e.replace(/^#?\/?/, "");
  return t === "prefix" ? s === "" ? !1 : n === s || n.startsWith(`${s}/`) : n === s;
}
function Ux(e, t, n, s, l) {
  const [i, d] = U(n), r = e ? t ?? !1 : i, a = R(
    (c) => {
      e || d(c), s?.(c);
    },
    [e, s]
  );
  return ge(() => {
    l > 0 && a(!1);
  }, [l]), [r, a];
}
function Vx({
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
      children: /* @__PURE__ */ o(we, { icon: e, size: 16 })
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
  const n = hn(bs);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: s, value: l, path: i, disabled: d, template: r } = t, a = xe(
    () => os.toArray(t.children).filter(gt),
    [t.children]
  ), c = a.length > 0, u = !!d, f = t.open !== void 0, [w, v] = Ux(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), y = n.level === 0, p = Q(0), h = (y && !f ? n.openKey === e : null) ?? w, _ = R(
    (T) => {
      y && !f ? n.setOpenKey(T ? e : null) : (v(T), y && n.setOpenKey(null));
    },
    [y, f, n, e, v]
  ), [, x] = U(0);
  ge(() => {
    if (!i) return;
    const T = () => x((I) => I + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [i]);
  const k = i && !c ? Wx(i, t.match) : !1, g = R(
    (T) => {
      if (u) {
        T.preventDefault();
        return;
      }
      const I = { text: s, value: l, path: i };
      [n.emit(I), t.onClick?.(I)].includes(!1) && T.preventDefault(), n.closeAll();
    },
    [u, s, l, i, n, t]
  ), N = R(() => {
    if (!u) {
      if (h && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      _(!h);
    }
  }, [u, h, _, n.clickToOpen]), $ = R(() => {
    !c || u || n.clickToOpen || (p.current = Date.now(), _(!0));
  }, [c, u, n.clickToOpen, _]), O = R(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), M = `${n.baseId}-submenu-${e}`, [E, D] = U(null);
  ge(() => {
    n.closeSignal > 0 && D(null);
  }, [n.closeSignal]);
  const S = xe(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: E,
      setOpenKey: D
    }),
    [n, E]
  ), b = c ? /* @__PURE__ */ o("span", { className: Ue.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    we,
    {
      icon: n.flyout && !y ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, C = r ?? /* @__PURE__ */ z(rt, { children: [
    /* @__PURE__ */ o(
      Vx,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: Ue.text, children: s }),
    b
  ] });
  if (c) {
    let T = function(I) {
      const F = Array.from(I.currentTarget.children).map((ee) => ee.querySelector('[role="menuitem"]')).filter(
        (ee) => ee != null && ee.getAttribute("aria-disabled") !== "true" && !ee.hasAttribute("disabled")
      ), L = document.activeElement, V = L ? F.indexOf(L) : -1;
      I.key === "ArrowDown" ? (I.preventDefault(), I.stopPropagation(), (V === -1 ? F[0] : F[(V + 1) % F.length])?.focus()) : I.key === "ArrowUp" ? (I.preventDefault(), I.stopPropagation(), (V === -1 ? F[F.length - 1] : F[(V - 1 + F.length) % F.length])?.focus()) : I.key === "ArrowRight" ? L?.getAttribute("aria-haspopup") === "menu" && (I.preventDefault(), I.stopPropagation(), L.getAttribute("aria-expanded") !== "true" && L.click(), document.getElementById(
        L.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (I.key === "ArrowLeft" || I.key === "Escape") && (I.preventDefault(), I.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ z(
      "div",
      {
        className: Ue.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : $,
        onMouseLeave: n.clickToOpen ? void 0 : O,
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
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": M,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                Ue.item,
                u ? Ue.disabled : null,
                Ue.hasChildren
              ].filter(Boolean).join(" "),
              onClick: N,
              children: C
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
                n.flyout && !y ? Ue.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: T,
              children: /* @__PURE__ */ o(bs.Provider, { value: S, children: a.map(
                (I, F) => Tr(I) ? /* @__PURE__ */ o(
                  Fs,
                  {
                    itemKey: `${e}-${F}`,
                    props: I.props
                  },
                  `${e}-${F}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Ls, { children: I }, `${e}-custom-${F}`)
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
    "aria-disabled": u || void 0,
    "aria-current": k ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Ue.submenuItem, u ? Ue.disabled : null].filter(Boolean).join(" "),
    onClick: g
  };
  return i && !u ? /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...A, children: C }) }) : /* @__PURE__ */ o("div", { className: Ue.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: u, ...A, children: C }) });
}
function Pr(e) {
  if (!hn(bs)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Fs, { itemKey: e.text, props: e });
}
function Gx({
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
  ...u
}) {
  const f = Pe(), w = Q(null), v = Q(null), [y, p] = U(null), [m, h] = U(0), [_, x] = U(!1), k = Q(null), g = R(
    (E) => i?.(E),
    [i]
  ), N = R(() => {
    p(null), h((E) => E + 1);
  }, []);
  ge(() => {
    if (y == null) return;
    const E = (D) => {
      w.current && !w.current.contains(D.target) && N();
    };
    return document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, [y, N]), ge(() => {
    k.current != null && y === k.current && (document.getElementById(`${f}-submenu-${y}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), k.current = null);
  }, [y, f]);
  const $ = xe(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: m,
      emit: g,
      closeAll: N,
      openKey: y,
      setOpenKey: p
    }),
    [f, n, t, m, g, N, y]
  ), O = xe(
    () => os.toArray(e).filter(gt),
    [e]
  ), M = (E) => {
    const D = v.current;
    if (!D) return;
    const S = Array.from(D.children).map((A) => A.querySelector('[role="menuitem"]')).filter(
      (A) => A != null && !A.hasAttribute("disabled") && A.getAttribute("aria-disabled") !== "true"
    );
    if (y != null) {
      const A = document.getElementById(`${f}-submenu-${y}`);
      if (A) {
        const T = Array.from(
          A.querySelectorAll('[role="menuitem"]')
        ).filter(
          (L) => L.getAttribute("aria-disabled") !== "true" && !L.hasAttribute("disabled")
        ), I = document.activeElement, F = I ? T.indexOf(I) : -1;
        if (E.key === "ArrowDown") {
          E.preventDefault(), (F === -1 ? T[0] : T[(F + 1) % T.length])?.focus();
          return;
        }
        if (E.key === "ArrowUp") {
          E.preventDefault(), (F === -1 ? T[T.length - 1] : T[(F - 1 + T.length) % T.length])?.focus();
          return;
        }
        if (E.key === "Escape") {
          E.preventDefault(), N(), d?.(), D.querySelector(`[data-index="${y}"]`)?.focus();
          return;
        }
        if (E.key === "Enter" || E.key === " ") return;
      }
      if (E.key === "Escape") {
        E.preventDefault(), N(), d?.();
        return;
      }
    }
    const b = document.activeElement, C = b ? S.indexOf(b) : -1;
    if (E.key === "ArrowRight") {
      if (E.preventDefault(), S.length === 0) return;
      S[C === -1 ? 0 : (C + 1) % S.length]?.focus();
      return;
    }
    if (E.key === "ArrowLeft") {
      if (E.preventDefault(), S.length === 0) return;
      S[C === -1 ? S.length - 1 : (C - 1 + S.length) % S.length]?.focus();
      return;
    }
    if (E.key === "ArrowDown") {
      if (C >= 0) {
        const A = b?.getAttribute("data-index");
        if (A == null) return;
        D.querySelector(
          `[data-index="${A}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (E.preventDefault(), k.current = A, p(A));
      }
      return;
    }
    if (E.key === "Home") {
      E.preventDefault(), S[0]?.focus();
      return;
    }
    if (E.key === "End") {
      E.preventDefault(), S[S.length - 1]?.focus();
      return;
    }
    if (E.key.length === 1 && !E.ctrlKey && !E.metaKey) {
      const A = S.map((I) => I.textContent ?? ""), T = C === -1 ? 0 : (C + 1) % S.length;
      for (let I = 0; I < S.length; I++) {
        const F = (T + I) % S.length;
        if (A[F]?.toLowerCase().startsWith(E.key.toLowerCase())) {
          E.preventDefault(), S[F]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ z(
    "nav",
    {
      ref: w,
      "aria-label": r,
      className: [
        Ue.root,
        l ? Ue.vertical : Ue.horizontal,
        s ? Ue.responsive : null,
        s && _ ? Ue.mobileOpen : null,
        n ? Ue.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        s ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": _,
            className: Ue.hamburger,
            onClick: () => x((E) => !E),
            children: /* @__PURE__ */ o(we, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: v,
            role: l ? "menu" : "menubar",
            "aria-label": r,
            className: Ue.menubar,
            onKeyDown: M,
            children: /* @__PURE__ */ o(bs.Provider, { value: $, children: O.map(
              (E, D) => Tr(E) ? /* @__PURE__ */ o(
                Fs,
                {
                  itemKey: String(D),
                  props: E.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ o(Ls, { children: E }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const Xx = "_popup_i0121_1", Yx = "_menu_i0121_22", Ts = {
  popup: Xx,
  menu: Yx
}, Lr = Ln(null);
function Gw() {
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
function Zx({ state: e, onClose: t }) {
  const n = Q(null), [s, l] = U({ left: e.x, top: e.y });
  Es(() => {
    const d = n.current;
    if (!d) return;
    const r = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - r.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - r.height))
    });
  }, [e.x, e.y, e.options]), ge(() => {
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
        Gx,
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
function Xw({ children: e }) {
  const [t, n] = U(null), s = R(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (d, r) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: r });
    },
    []
  );
  ge(() => {
    if (!t) return;
    const d = (u) => {
      const f = document.querySelector(`.${Ts.popup}`);
      f && !f.contains(u.target) && s();
    }, r = (u) => {
      u.key === "Escape" && (u.preventDefault(), s());
    }, a = () => s(), c = () => s();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", r, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", r, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, s]);
  const i = xe(
    () => ({ open: l, close: s, isOpen: t != null }),
    [l, s, t]
  );
  return /* @__PURE__ */ z(Lr.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(Zx, { state: t, onClose: s }) : null
  ] });
}
const Jx = "_root_muh2y_1", Qx = "_list_muh2y_9", ey = "_item_muh2y_14", ty = "_trigger_muh2y_18", ny = "_disabled_muh2y_45", sy = "_expanded_muh2y_52", ry = "_selected_muh2y_56", oy = "_icon_muh2y_61", ly = "_text_muh2y_72", ay = "_caret_muh2y_79", iy = "_open_muh2y_86", cy = "_submenu_muh2y_90", dy = "_iconOnly_muh2y_172", uy = "_stacked_muh2y_201", ct = {
  root: Jx,
  list: Qx,
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
      children: /* @__PURE__ */ o(we, { icon: e, size: 16 })
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
  const { text: l, value: i, path: d, disabled: r } = n, a = xe(
    () => os.toArray(n.children).filter(gt),
    [n.children]
  ), c = a.length > 0, u = !!r, f = n.match ?? s.match, w = n.expanded !== void 0, [v, y] = U(
    n.defaultExpanded ?? !1
  ), p = w ? n.expanded ?? !1 : v, m = R(
    (L) => {
      w || y(L), n.onExpandedChange?.(L);
    },
    [w, n]
  );
  ge(() => {
    s.collapseSignal > 0 && !s.collapseSkipRef.current.has(e) && m(!1);
  }, [s.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, x] = U(
    n.defaultSelected ?? !1
  ), k = !h && d ? _y(d, f) : !1, g = n.selected ?? (h ? _ : k || _), [, N] = U(0);
  ge(() => {
    if (!d) return;
    const L = () => N((V) => V + 1);
    return window.addEventListener("hashchange", L), () => window.removeEventListener("hashchange", L);
  }, [d]);
  const $ = xe(
    () => ({
      ...s,
      level: s.level + 1,
      openAncestors: () => {
        m(!0), s.openAncestors();
      }
    }),
    [s, m]
  );
  ge(() => {
    k && t.length > 0 && $.openAncestors();
  }, []);
  const O = R(
    (L) => {
      if (u) {
        L.preventDefault();
        return;
      }
      const V = { text: l, value: i, path: d };
      [s.emit(V), n.onClick?.(V)].includes(!1) && L.preventDefault(), h || x(!0), n.onSelectedChange?.(!0);
    },
    [u, l, i, d, s, n, h]
  ), M = R(() => {
    u || (p || s.notifyOpened(e, t), m(!p));
  }, [u, p, s, e, t, m]), E = R(
    (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), c ? M() : L.target.click()) : L.key === "Escape" && p ? (L.preventDefault(), m(!1)) : L.key === "ArrowRight" && c && !p ? (L.preventDefault(), s.notifyOpened(e, t), m(!0)) : L.key === "ArrowLeft" && p && (L.preventDefault(), m(!1));
    },
    [c, M, p, m, s, e, t]
  ), D = c && s.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [ct.caret, p ? ct.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, S = n.template ?? /* @__PURE__ */ z(rt, { children: [
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
    D
  ] }), b = `${s.baseId}-panel-${e}`, C = `${s.baseId}-trigger-${e}`, A = [
    ct.trigger,
    u ? ct.disabled : null,
    p ? ct.expanded : null,
    g ? ct.selected : null
  ].filter(Boolean).join(" "), T = s.level > 0 ? "menuitem" : void 0, I = c ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: C,
      role: T,
      "aria-expanded": p,
      "aria-controls": b,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: A,
      onClick: M,
      onKeyDown: E,
      children: S
    }
  ) : d && !u ? /* @__PURE__ */ o(
    "a",
    {
      id: C,
      role: T,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": g ? "page" : void 0,
      tabIndex: 0,
      className: A,
      onClick: O,
      onKeyDown: E,
      children: S
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: C,
      role: T,
      "aria-current": g ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: A,
      onClick: O,
      onKeyDown: E,
      children: S
    }
  ), F = c ? s.renderMode === "server" && !p ? null : /* @__PURE__ */ o(
    "div",
    {
      id: b,
      role: "menu",
      "aria-labelledby": C,
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
  return /* @__PURE__ */ z(
    "div",
    {
      className: ct.item,
      style: { "--dx-panelmenu-level": s.level },
      "data-dx-panelmenu-item": "",
      "data-level": s.level,
      children: [
        I,
        F
      ]
    }
  );
}
function Yw(e) {
  if (!hn(vs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(Hs, { itemKey: e.text, ancestors: [], props: e });
}
function Zw({
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
  const u = Pe(), [f, w] = U(0), v = Q(/* @__PURE__ */ new Set()), y = R(
    (k) => d?.(k),
    [d]
  ), p = R(
    (k, g) => {
      t || (v.current = /* @__PURE__ */ new Set([k, ...g]), w((N) => N + 1));
    },
    [t]
  ), m = (k) => Array.from(
    k.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true" && g.closest("[hidden]") == null
  ), h = (k) => {
    if (!(k.key === "Enter" || k.key === " ")) {
      if (k.key === "ArrowDown" || k.key === "ArrowUp") {
        const g = k.target, N = m(k.currentTarget), $ = N.indexOf(g);
        if ($ === -1) return;
        k.preventDefault();
        const O = k.key === "ArrowDown" ? 1 : -1;
        N[($ + O + N.length) % N.length]?.focus();
      } else if (k.key === "Home" || k.key === "End") {
        const g = m(k.currentTarget);
        k.preventDefault(), (k.key === "Home" ? g[0] : g[g.length - 1])?.focus();
      }
    }
  }, _ = xe(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: s,
      renderMode: i,
      match: l,
      level: 0,
      collapseSignal: f,
      collapseSkipRef: v,
      emit: y,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      n,
      s,
      i,
      l,
      f,
      y,
      p
    ]
  ), x = xe(
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
      children: /* @__PURE__ */ o("div", { className: ct.list, role: "presentation", children: /* @__PURE__ */ o(vs.Provider, { value: _, children: x.map((k, g) => /* @__PURE__ */ o(
        Hs,
        {
          itemKey: String(g),
          ancestors: [],
          props: k.props
        },
        `top-${g}`
      )) }) })
    }
  );
}
const py = "_root_17uy3_1", my = "_trigger_17uy3_7", gy = "_defaultTrigger_17uy3_40", xy = "_avatar_17uy3_46", yy = "_menu_17uy3_58", by = "_item_17uy3_74", vy = "_disabled_17uy3_88", wy = "_active_17uy3_97", ky = "_icon_17uy3_107", $y = "_text_17uy3_114", Gt = {
  root: py,
  trigger: my,
  defaultTrigger: gy,
  avatar: xy,
  menu: yy,
  item: by,
  disabled: vy,
  active: wy,
  icon: ky,
  text: $y
};
function Jw({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: s = "Profile menu",
  className: l
}) {
  const i = Pe(), d = `${i}-menu`, r = Q(null), a = Q(null), [c, u] = U(!1), [f, w] = U(-1), v = t, y = e.map((g, N) => g.disabled ? -1 : N).filter((g) => g >= 0), p = R(
    (g) => {
      if (g.disabled) return;
      const N = {
        text: g.text,
        path: g.path
      };
      n?.(N), u(!1), a.current?.focus();
    },
    [n]
  ), m = R(() => {
    w(y[0] ?? -1), u(!0);
  }, [y]), h = R(() => {
    u(!1), w(-1), a.current?.focus();
  }, []);
  ge(() => {
    if (!c) return;
    const g = (N) => {
      r.current && !r.current.contains(N.target) && (u(!1), w(-1));
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [c]), ge(() => {
    if (!c) return;
    const g = (N) => {
      N.key === "Escape" && (N.preventDefault(), h());
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [c, h]);
  const _ = (g) => {
    if (y.length === 0) return;
    const N = y.indexOf(f), $ = N === -1 ? 0 : (N + g + y.length) % y.length, O = y[$];
    O != null && w(O);
  }, x = (g) => {
    if (!c) {
      (g.key === "ArrowDown" || g.key === "Enter" || g.key === " ") && (g.preventDefault(), m());
      return;
    }
    switch (g.key) {
      case "Escape":
        g.preventDefault(), h();
        break;
      case "ArrowDown":
        g.preventDefault(), _(1);
        break;
      case "ArrowUp":
        g.preventDefault(), _(-1);
        break;
      case "Home":
        g.preventDefault(), y[0] != null && w(y[0]);
        break;
      case "End":
        g.preventDefault(), y[y.length - 1] != null && w(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (g.preventDefault(), f >= 0) {
          const N = e[f];
          N && !N.disabled && p(N);
        }
        break;
      case "Tab":
        u(!1), w(-1);
        break;
    }
  }, k = (g) => {
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), _(1);
        break;
      case "ArrowUp":
        g.preventDefault(), _(-1);
        break;
      case "Home":
        g.preventDefault(), y[0] != null && w(y[0]);
        break;
      case "End":
        g.preventDefault(), y[y.length - 1] != null && w(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        if (g.preventDefault(), f >= 0) {
          const N = e[f];
          N && !N.disabled && p(N);
        }
        break;
      case "Escape":
        g.preventDefault(), h();
        break;
      case "Tab":
        u(!1), w(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      className: [Gt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ z("nav", { "aria-label": s, children: [
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
            onClick: () => c ? h() : m(),
            onKeyDown: x,
            children: v ?? /* @__PURE__ */ z("span", { className: Gt.defaultTrigger, children: [
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
            "aria-activedescendant": f >= 0 ? `${i}-item-${f}` : void 0,
            className: Gt.menu,
            onKeyDown: k,
            tabIndex: -1,
            children: e.map((g, N) => {
              const $ = !!g.disabled, O = N === f;
              return /* @__PURE__ */ z(
                "div",
                {
                  id: `${i}-item-${N}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [
                    Gt.item,
                    O ? Gt.active : null,
                    $ ? Gt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || p(g);
                  },
                  onMouseEnter: () => {
                    $ || w(N);
                  },
                  children: [
                    g.icon ? /* @__PURE__ */ o("span", { className: Gt.icon, "aria-hidden": "true", children: g.icon }) : null,
                    /* @__PURE__ */ o("span", { className: Gt.text, children: g.text })
                  ]
                },
                `${g.text}-${N}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Ny = "_root_mr5x2_1", Oy = "_bottomRight_mr5x2_11", Sy = "_bottomLeft_mr5x2_16", Cy = "_topRight_mr5x2_21", Dy = "_topLeft_mr5x2_26", Ey = "_menu_mr5x2_31", zy = "_itemWrapper_mr5x2_48", My = "_tooltip_mr5x2_54", jy = "_main_mr5x2_76", Iy = "_mainIcon_mr5x2_104", Ay = "_mainOpen_mr5x2_109", Ty = "_item_mr5x2_48", Py = "_disabled_mr5x2_141", Ly = "_itemIcon_mr5x2_148", vt = {
  root: Ny,
  bottomRight: Oy,
  bottomLeft: Sy,
  topRight: Cy,
  topLeft: Dy,
  menu: Ey,
  itemWrapper: zy,
  tooltip: My,
  main: jy,
  mainIcon: Iy,
  mainOpen: Ay,
  item: Ty,
  disabled: Py,
  itemIcon: Ly
};
function Qw({
  items: e,
  position: t,
  icon: n = "+",
  onClick: s,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${Pe()}-menu`, c = Q(null), u = Q(null), [f, w] = U(!1), v = R(
    (h) => {
      if (h.disabled) return;
      const _ = { text: h.text, value: h.value };
      s?.(_), w(!1), u.current?.focus();
    },
    [s]
  );
  ge(() => {
    if (!f) return;
    const h = (_) => {
      c.current && !c.current.contains(_.target) && w(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [f]), ge(() => {
    if (!f) return;
    const h = (_) => {
      _.key === "Escape" && (w(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [f]);
  const y = d === "bottom-right" ? vt.bottomRight : d === "bottom-left" ? vt.bottomLeft : d === "top-right" ? vt.topRight : vt.topLeft, p = (h) => {
    !f && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), w(!0)) : f && h.key === "Escape" && (h.preventDefault(), w(!1));
  }, m = (h) => {
    h.key === "Escape" && (h.preventDefault(), w(!1), u.current?.focus());
  };
  return /* @__PURE__ */ z(
    "div",
    {
      ref: c,
      className: [vt.root, y, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ o(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: vt.menu,
            onKeyDown: m,
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
            ref: u,
            type: "button",
            className: vt.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": a,
            "aria-label": l,
            onClick: () => w((h) => !h),
            onKeyDown: p,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [vt.mainIcon, f ? vt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const Ry = "_root_mmfam_1", By = "_list_mmfam_5", Fy = "_item_mmfam_15", Hy = "_link_mmfam_22", qy = "_linkButton_mmfam_23", Ky = "_current_mmfam_24", Wy = "_disabled_mmfam_68", Uy = "_icon_mmfam_74", Vy = "_text_mmfam_81", Gy = "_separator_mmfam_85", Ke = {
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
function ek({
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
        return /* @__PURE__ */ z("li", { className: Ke.item, children: [
          a ? c ? /* @__PURE__ */ z(
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
              onClick: (u) => {
                u.preventDefault(), i(d);
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
          ) : c ? /* @__PURE__ */ z(
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
              onClick: (u) => {
                u.preventDefault(), i(d);
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
const Xy = "_link_1uj11_1", Yy = {
  link: Xy
}, tk = Le(function({ children: t, icon: n, visible: s = !0, className: l, ...i }, d) {
  if (s === !1) return null;
  const r = /* @__PURE__ */ z(rt, { children: [
    n != null && /* @__PURE__ */ o(we, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [Yy.link, l].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: u, ...f } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        className: a,
        href: u,
        ...f,
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
}), Zy = "_root_vw8ny_1", Jy = "_list_vw8ny_5", Qy = "_item_vw8ny_15", eb = "_connector_vw8ny_21", tb = "_connectorCompleted_vw8ny_30", nb = "_step_vw8ny_34", sb = "_active_vw8ny_69", rb = "_completed_vw8ny_75", ob = "_circle_vw8ny_79", lb = "_check_vw8ny_109", ab = "_icon_vw8ny_114", ib = "_number_vw8ny_119", cb = "_text_vw8ny_124", wt = {
  root: Zy,
  list: Jy,
  item: Qy,
  connector: eb,
  connectorCompleted: tb,
  step: nb,
  active: sb,
  completed: rb,
  circle: ob,
  check: lb,
  icon: ab,
  number: ib,
  text: cb
};
function nk({
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
  className: u
}) {
  const f = l ?? i ?? !1, w = t ?? n, v = w !== void 0, [y, p] = U(() => Math.min(Math.max(0, w ?? s), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, v ? w : y),
    Math.max(0, e.length - 1)
  ), _ = Q(null), x = R(
    (N) => {
      const $ = Math.min(
        Math.max(0, N),
        Math.max(0, e.length - 1)
      );
      v || p($), (d ?? r ?? a)?.($);
    },
    [v, d, r, a, e.length]
  ), k = R(
    (N, $) => !!($.disabled || f && N > h + 1),
    [f, h]
  ), g = (N) => {
    const $ = Array.from(
      N.currentTarget.querySelectorAll("button[data-step]")
    ).filter((E) => E.getAttribute("aria-disabled") !== "true" && !E.disabled), O = document.activeElement, M = O ? $.indexOf(O) : -1;
    if (N.key === "ArrowRight" || N.key === "ArrowDown") {
      if (N.preventDefault(), $.length === 0) return;
      const E = M === -1 ? 0 : (M + 1) % $.length, D = $[E];
      D && D.focus();
    } else if (N.key === "ArrowLeft" || N.key === "ArrowUp") {
      if (N.preventDefault(), $.length === 0) return;
      const E = M === -1 ? $.length - 1 : (M - 1 + $.length) % $.length, D = $[E];
      D && D.focus();
    } else N.key === "Home" ? (N.preventDefault(), $[0]?.focus()) : N.key === "End" && (N.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": c,
      className: [wt.root, u].filter(Boolean).join(" "),
      onKeyDown: g,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: wt.list, children: e.map((N, $) => {
        const O = $ === h, M = $ < h, E = k($, N);
        return /* @__PURE__ */ z(
          "li",
          {
            role: "listitem",
            className: wt.item,
            children: [
              $ > 0 ? /* @__PURE__ */ o(
                "span",
                {
                  className: [
                    wt.connector,
                    M ? wt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ z(
                "button",
                {
                  type: "button",
                  "data-step": $,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": E ? "true" : void 0,
                  disabled: E,
                  tabIndex: E ? -1 : 0,
                  className: [
                    wt.step,
                    O ? wt.active : null,
                    M ? wt.completed : null,
                    E ? wt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    E || x($);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: wt.circle, "aria-hidden": "true", children: M ? /* @__PURE__ */ o("span", { className: wt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(we, { icon: "check", size: "sm" }) }) : N.icon ? /* @__PURE__ */ o("span", { className: wt.icon, children: N.icon }) : /* @__PURE__ */ o("span", { className: wt.number, children: $ + 1 }) }),
                    /* @__PURE__ */ o("span", { className: wt.text, children: N.text })
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
const db = "_root_aojj4_1", ub = "_horizontal_aojj4_13", fb = "_vertical_aojj4_17", _b = "_pane_aojj4_21", hb = "_handle_aojj4_31", pb = "_handleHorizontal_aojj4_51", mb = "_handleVertical_aojj4_57", gb = "_handleGrip_aojj4_63", xb = "_handleCollapseHint_aojj4_75", yb = "_collapseBtn_aojj4_79", bb = "_collapseBtnCollapsed_aojj4_109", It = {
  root: db,
  horizontal: ub,
  vertical: fb,
  pane: _b,
  handle: hb,
  handleHorizontal: pb,
  handleVertical: mb,
  handleGrip: gb,
  handleCollapseHint: xb,
  collapseBtn: yb,
  collapseBtnCollapsed: bb
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
function sk({
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
  const c = e ?? t ?? "horizontal", u = c === "horizontal", f = Q(null), w = R(() => {
    const b = n.length;
    if (b === 0) return [];
    const C = n.map((T) => T.size ? Qn(T.size, 100 / b) : 100 / b), A = C.reduce((T, I) => T + I, 0);
    return Math.abs(A - 100) > 0.01 && A > 0 ? C.map((T) => T / A * 100) : C;
  }, [n]), [v, y] = U(() => w()), [p, m] = U(
    () => n.map((b) => !!b.collapsed)
  ), h = Q(v);
  ge(() => {
    m(n.map((b) => !!b.collapsed));
  }, [n]);
  const _ = R(
    () => n.map((b) => Qn(b.min, 0)),
    [n]
  ), x = R(
    () => n.map((b) => Qn(b.max, 100)),
    [n]
  ), k = R(
    (b, C) => {
      const A = { paneIndex: b, newSize: C, cancel: !1 };
      return (s ?? l)?.(A), !A.cancel;
    },
    [s, l]
  ), g = R(
    (b, C) => {
      const A = { paneIndex: b, collapse: C, cancel: !1 };
      return (i ?? d)?.(A), !A.cancel;
    },
    [i, d]
  ), N = R(
    (b) => {
      const C = !p[b];
      g(b, C) && (C ? (h.current = [...v], m((A) => {
        const T = [...A];
        return T[b] !== void 0 && (T[b] = !0), T;
      }), y((A) => {
        const T = [...A], I = T[b] ?? 0, F = b < T.length - 1 ? b + 1 : b - 1;
        if (F >= 0 && F < T.length) {
          const L = T[F] ?? 0;
          T[F] = L + I, T[b] = 0;
        } else
          T[b] = 0;
        return T;
      })) : (m((A) => {
        const T = [...A];
        return T[b] !== void 0 && (T[b] = !1), T;
      }), y(() => {
        const A = [...h.current];
        return A.length !== n.length ? n.map(() => 100 / n.length) : A;
      })));
    },
    [p, v, n.length, g]
  ), $ = Q(
    null
  ), O = R(
    (b, C, A) => {
      const T = f.current;
      if (!T) return null;
      const I = T.getBoundingClientRect();
      let F;
      if (u) {
        if (I.width === 0) return null;
        F = (C - I.left) / I.width * 100;
      } else {
        if (I.height === 0) return null;
        F = (A - I.top) / I.height * 100;
      }
      let L = 0;
      for (let ee = 0; ee < b; ee++) {
        const Y = v[ee];
        Y !== void 0 && (L += Y);
      }
      return F - L;
    },
    [u, v]
  ), M = (b, C) => {
    C.preventDefault();
    const A = C.currentTarget;
    A.focus(), typeof A.setPointerCapture == "function" && A.setPointerCapture(C.pointerId), $.current = { handleIndex: b, pointerId: C.pointerId };
  }, E = (b) => {
    if (!$.current || $.current.pointerId !== b.pointerId)
      return;
    b.preventDefault();
    const C = $.current.handleIndex, A = O(C, b.clientX, b.clientY);
    if (A == null) return;
    const T = _(), I = x(), F = T[C] ?? 0, L = I[C] ?? 100, V = C + 1, ee = T[V] ?? 0, Y = I[V] ?? 100, pe = v[C] ?? 0, de = v[V] ?? 0, re = pe + de;
    if (re <= 0) return;
    let q = nn(A, F, L), ie = re - q;
    if (ie < ee) {
      if (ie = ee, q = re - ie, q < F || q > L) return;
    } else if (ie > Y && (ie = Y, q = re - ie, q < F || q > L))
      return;
    q = nn(q, F, L), ie = re - q, k(C, q) && y((se) => {
      const ue = [...se];
      return ue[C] = q, ue[V] = ie, ue;
    });
  }, D = (b) => {
    !$.current || $.current.pointerId !== b.pointerId || ($.current = null);
  }, S = (b, C) => {
    const A = _(), T = x(), I = b, F = b + 1, L = v[I] ?? 0, V = v[F] ?? 0, ee = L + V;
    let Y = 0;
    const pe = !!n[I]?.collapsible, de = !!n[F]?.collapsible;
    if (u ? C.key === "ArrowLeft" ? Y = -5 : C.key === "ArrowRight" && (Y = 5) : C.key === "ArrowUp" ? Y = -5 : C.key === "ArrowDown" && (Y = 5), C.key === "Home") {
      C.preventDefault();
      let re = A[I] ?? 0, q = ee - re;
      if (q = nn(
        q,
        A[F] ?? 0,
        T[F] ?? 100
      ), re = ee - q, re = nn(re, A[I] ?? 0, T[I] ?? 100), !k(I, re)) return;
      y((ie) => {
        const se = [...ie];
        return se[I] = re, se[F] = q, se;
      });
      return;
    }
    if (C.key === "End") {
      C.preventDefault();
      let re = T[I] ?? 100;
      re = Math.min(re, ee - (A[F] ?? 0));
      let q = ee - re;
      if (q = nn(
        q,
        A[F] ?? 0,
        T[F] ?? 100
      ), re = ee - q, re = nn(re, A[I] ?? 0, T[I] ?? 100), !k(I, re)) return;
      y((ie) => {
        const se = [...ie];
        return se[I] = re, se[F] = q, se;
      });
      return;
    }
    if ((C.key === "Enter" || C.key === " ") && (pe || de)) {
      C.preventDefault(), N(pe ? I : F);
      return;
    }
    if (Y !== 0) {
      C.preventDefault();
      let re = L + Y, q = ee - re;
      const ie = A[I] ?? 0, se = T[I] ?? 100, ue = A[F] ?? 0, oe = T[F] ?? 100;
      if (re = nn(re, ie, se), q = ee - re, (q < ue || q > oe) && (q = nn(q, ue, oe), re = ee - q, re = nn(re, ie, se), q = ee - re), !k(I, re)) return;
      y(($e) => {
        const Oe = [...$e];
        return Oe[I] = re, Oe[F] = q, Oe;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: f,
      className: [
        It.root,
        u ? It.horizontal : It.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: n.map((b, C) => {
        const A = !!p[C], T = A ? 0 : v[C] ?? 100 / n.length, I = A ? { display: "none" } : u ? {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, F = Qn(b.min, 0), L = Qn(b.max, 100), V = C < n.length - 1, ee = !!n[C + 1]?.collapsible;
        return /* @__PURE__ */ z("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ z(
            "div",
            {
              role: "group",
              "aria-label": b.label ?? `Pane ${C + 1}`,
              className: It.pane,
              style: I,
              "data-collapsed": A ? "true" : void 0,
              children: [
                A ? null : b.children,
                b.collapsible && !A ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: It.collapseBtn,
                    "aria-label": `Collapse pane ${C + 1}`,
                    "aria-expanded": !A,
                    onClick: () => N(C),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                b.collapsible && A ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: It.collapseBtn,
                    "aria-label": `Expand pane ${C + 1}`,
                    "aria-expanded": !A,
                    onClick: () => N(C),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          A && b.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: It.collapseBtnCollapsed,
                "aria-label": `Expand pane ${C + 1}`,
                "aria-expanded": "false",
                onClick: () => N(C),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          V ? /* @__PURE__ */ z(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": F,
              "aria-valuemax": L,
              "aria-valuenow": Math.round(T),
              "aria-label": `Resize handle ${C + 1}`,
              tabIndex: A || p[C + 1] ? -1 : 0,
              className: [
                It.handle,
                u ? It.handleHorizontal : It.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (Y) => M(C, Y),
              onPointerMove: E,
              onPointerUp: D,
              onKeyDown: (Y) => S(C, Y),
              children: [
                /* @__PURE__ */ o("span", { className: It.handleGrip, "aria-hidden": "true" }),
                (b.collapsible || ee) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: It.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, C);
      })
    }
  );
}
const vb = "_root_jq7vb_1", wb = "_list_jq7vb_5", kb = "_vertical_jq7vb_14", $b = "_horizontal_jq7vb_20", Nb = "_item_jq7vb_28", Ob = "_link_jq7vb_32", Sb = "_active_jq7vb_57", An = {
  root: vb,
  list: wb,
  vertical: kb,
  horizontal: $b,
  item: Nb,
  link: Ob,
  active: Sb
};
function rk({
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
  const c = t ?? n, u = s ?? l ?? "vertical", [f, w] = U(
    () => e[0]?.selector ?? null
  ), v = Q(f);
  v.current = f;
  const y = R(
    (p, m) => {
      if (w(p.selector), (i ?? d)?.({ text: p.text, selector: p.selector }), m) {
        try {
          m.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          m.scrollIntoView();
        }
        const _ = m;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return ge(() => {
    if (e.length === 0) return;
    const m = (() => {
      if (c) {
        const g = document.querySelector(c);
        if (g) return g;
      }
      return window;
    })();
    let h = null;
    const _ = /* @__PURE__ */ new Map(), x = () => {
      let g = null, N = null;
      for (const O of e) {
        const M = document.querySelector(O.selector);
        if (!M) continue;
        _.set(O.selector, M);
        const E = M.getBoundingClientRect();
        let D = E.top;
        if (m !== window) {
          const S = m.getBoundingClientRect();
          D = E.top - S.top;
        }
        D <= 80 ? (!N || D > N.el.getBoundingClientRect().top - (m !== window ? m.getBoundingClientRect().top : 0)) && (N = { sel: O.selector, el: M }) : (!g || D < g.top) && (g = { sel: O.selector, top: D });
      }
      const $ = N?.sel ?? g?.sel ?? e[0]?.selector ?? null;
      $ && $ !== v.current && w($);
    }, k = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const g = m === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: m,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((N) => {
        const $ = N.filter((O) => O.isIntersecting).sort((O, M) => O.boundingClientRect.top - M.boundingClientRect.top);
        if ($[0]) {
          const O = $[0].target;
          for (const M of e) {
            if (document.querySelector(M.selector) === O) {
              w(M.selector);
              break;
            }
            if (M.selector.startsWith("#") && O.id === M.selector.slice(1)) {
              w(M.selector);
              break;
            }
          }
        } else
          x();
      }, g);
      for (const N of e) {
        const $ = document.querySelector(N.selector);
        $ && (h.observe($), _.set(N.selector, $));
      }
    }
    return m === window ? (window.addEventListener("scroll", k, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", k), h?.disconnect();
    }) : (m.addEventListener("scroll", k, {
      passive: !0
    }), x(), () => {
      m.removeEventListener("scroll", k), h?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": r,
      className: [An.root, An[u], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: An.list, children: e.map((p) => {
        const m = p.selector === f;
        return /* @__PURE__ */ o("li", { className: An.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [An.link, m ? An.active : null].filter(Boolean).join(" "),
            "aria-current": m ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const _ = document.querySelector(p.selector);
              y(p, _);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const Cb = "_root_1l31x_1", Db = "_viewport_1l31x_17", Eb = "_slide_1l31x_24", zb = "_active_1l31x_33", Mb = "_arrow_1l31x_37", jb = "_prev_1l31x_71", Ib = "_next_1l31x_75", Ab = "_pauseBtn_1l31x_79", Tb = "_indicators_1l31x_110", Pb = "_indicator_1l31x_110", Lb = "_indicatorActive_1l31x_145", At = {
  root: Cb,
  viewport: Db,
  slide: Eb,
  active: zb,
  arrow: Mb,
  prev: jb,
  next: Ib,
  pauseBtn: Ab,
  indicators: Tb,
  indicator: Pb,
  indicatorActive: Lb
};
function ok({
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
  showArrows: u,
  ShowArrows: f,
  showIndicators: w,
  ShowIndicators: v,
  onChange: y,
  Change: p,
  ariaLabel: m = "Carousel",
  className: h
}) {
  const _ = t ?? n, x = _ !== void 0, [k, g] = U(() => Math.min(Math.max(0, _ ?? s), Math.max(0, e.length - 1))), N = x ? _ : k, $ = e.length === 0 ? 0 : Math.min(Math.max(0, N), e.length - 1), O = l ?? i ?? !1, M = d ?? r ?? 3e3, E = a ?? c ?? !0, D = u ?? f ?? !0, S = w ?? v ?? !0, [b, C] = U(!1), [A, T] = U(!1), I = b || A, F = Q(null), L = Pe(), V = R(
    (ue) => {
      const oe = e.length === 0 ? 0 : (ue % e.length + e.length) % e.length;
      x || g(oe), (y ?? p)?.(oe);
    },
    [x, y, p, e.length]
  ), ee = R(() => {
    V($ - 1);
  }, [V, $]), Y = R(() => {
    V($ + 1);
  }, [V, $]), pe = R(
    (ue) => {
      V(ue);
    },
    [V]
  );
  ge(() => {
    if (!O || I || e.length <= 1) return;
    const ue = setInterval(() => {
      V($ + 1);
    }, M);
    return () => clearInterval(ue);
  }, [O, I, M, $, V, e.length]);
  const de = (ue) => {
    e.length !== 0 && (ue.key === "ArrowLeft" ? (ue.preventDefault(), ee()) : ue.key === "ArrowRight" ? (ue.preventDefault(), Y()) : ue.key === "Home" ? (ue.preventDefault(), pe(0)) : ue.key === "End" && (ue.preventDefault(), pe(e.length - 1)));
  }, re = () => {
    E && O && T(!0);
  }, q = () => {
    E && O && T(!1);
  }, ie = () => {
    E && O && T(!0);
  }, se = () => {
    E && O && T(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ z(
    "div",
    {
      ref: F,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": m,
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
        D && e.length > 1 ? /* @__PURE__ */ z(rt, { children: [
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
        O ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: At.pauseBtn,
            "aria-label": b ? "Resume" : "Pause",
            "aria-pressed": b,
            onClick: () => C((ue) => !ue),
            children: b ? "▶" : "⏸"
          }
        ) : null,
        S && e.length > 1 ? /* @__PURE__ */ o(
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
                  onClick: () => pe(oe)
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
const Rb = "_root_1y840_1", Bb = "_group_1y840_20", Fb = "_itemWrapper_1y840_30", Hb = "_treeitem_1y840_34", qb = "_disabled_1y840_50", Kb = "_selected_1y840_60", Wb = "_caret_1y840_66", Ub = "_caretIcon_1y840_113", Vb = "_caretOpen_1y840_120", Gb = "_caretPlaceholder_1y840_124", Xb = "_label_1y840_130", Yb = "_loading_1y840_137", Zb = "_loadingRow_1y840_143", Jb = "_empty_1y840_149", Qb = "_checkbox_1y840_155", at = {
  root: Rb,
  group: Bb,
  itemWrapper: Fb,
  treeitem: Hb,
  disabled: qb,
  selected: Kb,
  caret: Wb,
  caretIcon: Ub,
  caretOpen: Vb,
  caretPlaceholder: Gb,
  label: Xb,
  loading: Yb,
  loadingRow: Zb,
  empty: Jb,
  checkbox: Qb
};
function ev({
  indeterminate: e,
  ...t
}) {
  const n = Q(null);
  return ge(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function lk({
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
  selectedItem: u,
  SelectedItem: f,
  selectedItems: w,
  SelectedItems: v,
  defaultSelectedItem: y,
  defaultSelectedItems: p,
  onChange: m,
  Change: h,
  onExpand: _,
  Expand: x,
  onCollapse: k,
  Collapse: g,
  loadChildData: N,
  LoadChildData: $,
  template: O,
  Template: M,
  itemTemplate: E,
  ItemTemplate: D,
  ariaLabel: S,
  AriaLabel: b,
  allowCheckBoxes: C = !1,
  checkedKeys: A,
  defaultCheckedKeys: T,
  onCheckedChange: I,
  allowCheckChildren: F = !0,
  className: L
}) {
  const V = e ?? t ?? [], ee = n ?? s, Y = l ?? i ?? "text", pe = d ?? r ?? "id", de = a ?? c ?? "single", re = S ?? b ?? "Tree", q = N ?? $, ie = O ?? M ?? E ?? D, se = R(
    (H) => {
      const X = H[pe];
      return X != null ? String(X) : String(H.id ?? "");
    },
    [pe]
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
      const X = /* @__PURE__ */ new Set(), ne = (me) => {
        for (const fe of me) {
          const be = se(fe);
          fe.expanded && X.add(be);
          const Me = oe(fe);
          Me && Me.length > 0 && ne(Me);
        }
      };
      return ne(H), X;
    },
    [se, oe]
  ), [Oe, Ye] = U(
    () => $e(V)
  ), [ve, Be] = U(
    () => /* @__PURE__ */ new Map()
  ), [ke, ot] = U(() => /* @__PURE__ */ new Set()), tt = u ?? f, Ze = w ?? v, lt = de === "multiple" ? Ze !== void 0 : tt !== void 0, G = R(() => {
    if (de === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((ne) => se(ne)));
      const H = /* @__PURE__ */ new Set(), X = (ne) => {
        for (const me of ne) {
          me.selected && H.add(se(me));
          const fe = oe(me);
          fe && X(fe);
        }
      };
      return X(V), H;
    } else {
      if (y) return /* @__PURE__ */ new Set([se(y)]);
      let H = null;
      const X = (ne) => {
        for (const me of ne) {
          if (me.selected)
            return H = se(me), !0;
          const fe = oe(me);
          if (fe && X(fe)) return !0;
        }
        return !1;
      };
      return X(V), H ? /* @__PURE__ */ new Set([H]) : /* @__PURE__ */ new Set();
    }
  }, [
    de,
    y,
    p,
    se,
    oe,
    V
  ]), [j, W] = U(
    () => G()
  ), Z = xe(() => {
    if (de === "multiple") {
      if (Ze !== void 0) {
        const H = Ze;
        return H ? new Set(H.map((X) => se(X))) : /* @__PURE__ */ new Set();
      }
      return j;
    } else {
      if (tt !== void 0) {
        const H = tt;
        return H ? /* @__PURE__ */ new Set([se(H)]) : /* @__PURE__ */ new Set();
      }
      return j;
    }
  }, [
    de,
    Ze,
    tt,
    j,
    se
  ]), _e = R(
    (H) => {
      let X;
      const ne = (me) => {
        for (const fe of me) {
          if (se(fe) === H)
            return X = fe, !0;
          const Me = ve.get(se(fe)) ?? oe(fe);
          if (Me && ne(Me)) return !0;
        }
        return !1;
      };
      if (ne(V), !X) {
        for (const me of ve.values())
          if (ne(me)) break;
      }
      return X;
    },
    [V, ve, se, oe]
  ), te = R(() => {
    const H = /* @__PURE__ */ new Map(), X = (ne) => {
      for (const me of ne) {
        const fe = se(me);
        H.set(fe, me);
        const Me = ve.get(fe) ?? oe(me);
        Me && X(Me);
      }
    };
    return X(V), H;
  }, [V, ve, se, oe]), ye = R(
    (H) => {
      const X = se(H);
      if (!H.disabled)
        if (de === "multiple") {
          const me = new Set(Z);
          me.has(X) ? me.delete(X) : me.add(X), lt || W(me);
          const fe = m ?? h;
          if (fe) {
            const be = te(), Me = [];
            for (const ze of me) {
              const Ve = be.get(ze) ?? _e(ze);
              Ve && Me.push(Ve);
            }
            fe({ item: H, selectedItems: Me });
          }
        } else if (!Z.has(X) || Z.size !== 1 || !Z.has(X)) {
          lt || W(/* @__PURE__ */ new Set([X]));
          const fe = m ?? h;
          fe && fe({ item: H, selectedItem: H });
        } else {
          const fe = m ?? h;
          fe && fe({ item: H, selectedItem: H });
        }
    },
    [
      se,
      de,
      Z,
      lt,
      m,
      h,
      te,
      _e
    ]
  ), Ee = R(
    async (H) => {
      const X = se(H);
      if (!!H.disabled) return;
      const me = Oe.has(X), fe = _ ?? x, be = k ?? g, Me = oe(H), Ve = ve.get(X) ?? Me, ft = !(Ve !== void 0 && Ve.length > 0) && q != null;
      if (me) {
        Ye((et) => {
          const Ge = new Set(et);
          return Ge.delete(X), Ge;
        }), be?.({ item: H });
        return;
      }
      if (ft) {
        if (ke.has(X)) return;
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
      ke,
      _,
      x,
      k,
      g
    ]
  ), Fe = xe(() => {
    const H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), me = (fe, be) => {
      for (const Me of fe) {
        const ze = se(Me);
        H.has(ze) || H.set(ze, []), X.set(ze, be), Me.disabled && ne.add(ze);
        const Qe = ve.get(ze) ?? oe(Me);
        Qe && Qe.length > 0 && (H.set(
          ze,
          Qe.map((ft) => se(ft))
        ), me(Qe, ze));
      }
    };
    return me(V, null), { childrenOf: H, parentOf: X, disabledKeys: ne };
  }, [V, ve, se, oe]), He = R(
    (H) => {
      const X = [], ne = [...Fe.childrenOf.get(H) ?? []];
      for (; ne.length > 0; ) {
        const me = ne.pop();
        X.push(me), ne.push(...Fe.childrenOf.get(me) ?? []);
      }
      return X;
    },
    [Fe]
  ), [nt, on] = U(
    () => new Set(T ?? [])
  ), J = A !== void 0 ? new Set(A) : nt, Se = R(
    (H) => {
      const X = Fe.disabledKeys;
      return He(H).filter((ne) => !X.has(ne));
    },
    [He, Fe]
  ), dt = R(
    (H) => {
      if (J.has(H)) return !0;
      if (!C || !F) return !1;
      const X = Se(H);
      return X.length > 0 && X.every((ne) => J.has(ne));
    },
    [J, C, F, Se]
  ), zt = R(
    (H) => {
      if (!C || !F || J.has(H))
        return !1;
      const X = Se(H);
      if (X.length === 0) return !1;
      const ne = X.filter((me) => J.has(me)).length;
      return ne > 0 && ne < X.length;
    },
    [J, C, F, Se]
  ), ut = R(
    (H) => {
      if (!C || H.disabled) return;
      const X = se(H), ne = new Set(J);
      if (ne.has(X) || dt(X)) {
        if (ne.delete(X), F)
          for (const me of Se(X)) ne.delete(me);
      } else if (ne.add(X), F)
        for (const me of Se(X)) ne.add(me);
      A === void 0 && on(ne), I?.([...ne]);
    },
    [
      C,
      F,
      A,
      J,
      Se,
      se,
      dt,
      I
    ]
  ), Ce = xe(() => {
    const H = [], X = (ne, me, fe) => {
      ne.forEach((be, Me) => {
        const ze = se(be), Ve = ue(be), Qe = ve.get(ze) ?? oe(be);
        let ft;
        ve.has(ze) ? ft = ve.get(ze).length > 0 : Qe !== void 0 ? ft = Qe.length > 0 : q ? ft = !0 : ft = !1;
        const et = Oe.has(ze), Ge = !!be.disabled, Ht = ne.length, Tt = Me + 1;
        if (H.push({
          item: be,
          key: ze,
          text: Ve,
          level: me,
          posInSet: Tt,
          setSize: Ht,
          hasChildren: ft,
          expanded: et,
          parentKey: fe,
          disabled: Ge
        }), ft && et) {
          const ln = ve.get(ze) ?? Qe;
          ln && ln.length > 0 && X(ln, me + 1, ze);
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
    ke
  ]), [Ae, Mt] = U(
    () => Ce[0]?.key ?? null
  ), yt = Q(""), Je = Q(null), K = Q(null);
  ge(() => {
    if (!Ae && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    } else if (Ae && !Ce.some((H) => H.key === Ae)) {
      const H = Ce[0];
      Mt(H ? H.key : null);
    }
  }, [Ce, Ae]), ge(() => {
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
  }, []), je = R(
    (H) => Ce.find((ne) => ne.key === H)?.parentKey ?? null,
    [Ce]
  ), Te = R(
    (H) => {
      if (Ce.length === 0) return;
      const X = Ae ? Ce.findIndex((fe) => fe.key === Ae) : -1, ne = X >= 0 ? Ce[X] : void 0;
      let me = null;
      if (H.key === "ArrowDown") {
        if (H.preventDefault(), X === -1)
          me = Ce[0]?.key ?? null;
        else {
          const fe = (X + 1) % Ce.length, be = Ce[fe];
          be && (me = be.key);
        }
        me && le(me);
        return;
      }
      if (H.key === "ArrowUp") {
        if (H.preventDefault(), X === -1) {
          const fe = Ce[Ce.length - 1];
          fe && (me = fe.key);
        } else {
          const fe = (X - 1 + Ce.length) % Ce.length, be = Ce[fe];
          be && (me = be.key);
        }
        me && le(me);
        return;
      }
      if (H.key === "ArrowRight") {
        if (H.preventDefault(), !ne) return;
        if (ne.hasChildren && !ne.expanded)
          Ee(ne.item);
        else if (ne.hasChildren && ne.expanded) {
          const fe = X + 1, be = Ce[fe];
          be && be.parentKey === ne.key && le(be.key);
        }
        return;
      }
      if (H.key === "ArrowLeft") {
        if (H.preventDefault(), !ne) return;
        if (ne.hasChildren && ne.expanded)
          Ee(ne.item);
        else {
          const fe = je(ne.key);
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
        if (H.key === " " && C) {
          const fe = _e(ne.key);
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
        const be = X >= 0 ? X + 1 : 0, Ve = [...Ce, ...Ce].slice(be, be + Ce.length).find((Qe) => Qe.text.toLowerCase().startsWith(fe));
        Ve && le(Ve.key);
        return;
      }
    },
    [
      Ce,
      Ae,
      le,
      Ee,
      ye,
      je,
      C,
      ut
    ]
  ), Ft = R(() => {
    if (!Ae && Ce.length > 0) {
      const H = Ce[0];
      H && Mt(H.key);
    }
  }, [Ae, Ce]), st = (H, X, ne) => /* @__PURE__ */ o("ul", { role: "group", className: at.group, children: H.map((me, fe) => {
    const be = se(me), Me = ue(me), ze = ve.get(be) ?? oe(me);
    let Ve;
    ve.has(be) ? Ve = ve.get(be).length > 0 : ze !== void 0 ? Ve = ze.length > 0 : q ? Ve = !0 : Ve = !1;
    const Qe = Oe.has(be), ft = Z.has(be), et = !!me.disabled, Ge = ke.has(be), Ht = Ae === be, Tt = H.length, ln = fe + 1, Rn = ie ? ie(me) : Me, Bn = C ? {
      checked: dt(be),
      indeterminate: zt(be)
    } : null;
    return /* @__PURE__ */ z("li", { role: "none", className: at.itemWrapper, children: [
      /* @__PURE__ */ z(
        "div",
        {
          role: "treeitem",
          "data-key": be,
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
            le(be), et || ye(me);
          },
          onFocus: () => Mt(be),
          children: [
            C ? /* @__PURE__ */ o(
              ev,
              {
                className: at.checkbox,
                checked: Bn?.checked ?? !1,
                indeterminate: Bn?.indeterminate ?? !1,
                disabled: et,
                "aria-label": `Select ${Me}`,
                onClick: (mn) => mn.stopPropagation(),
                onChange: () => ut(me)
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
                  mn.stopPropagation(), le(be), Ee(me);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      at.caretIcon,
                      Qe ? at.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(we, { icon: "chevron_right", size: 10 })
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
      Ve && Qe ? Ge ? /* @__PURE__ */ o("div", { className: at.loadingRow, "aria-busy": "true", children: "Loading…" }) : ze && ze.length > 0 ? st(ze, X + 1) : ve.has(be) && ve.get(be).length > 0 ? st(
        ve.get(be),
        X + 1
      ) : (ze && ze.length === 0, null) : null
    ] }, be);
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
const tv = "_root_864uw_1", nv = "_panel_864uw_8", sv = "_header_864uw_19", rv = "_listbox_864uw_28", ov = "_option_864uw_42", lv = "_disabled_864uw_57", av = "_active_864uw_66", iv = "_selected_864uw_70", cv = "_empty_864uw_86", dv = "_controls_864uw_93", uv = "_reorder_864uw_102", fv = "_btn_864uw_110", Ie = {
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
function ak({
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
  onSourceChange: u,
  SourceChange: f,
  onTargetChange: w,
  TargetChange: v,
  keyProperty: y,
  KeyProperty: p,
  onMove: m,
  Move: h,
  ariaLabel: _,
  AriaLabel: x,
  className: k
}) {
  const g = y ?? p ?? "id", N = _ ?? x ?? "PickList", $ = e ?? t ?? l ?? i ?? a ?? c ?? [], O = n ?? s ?? d ?? r ?? [], [M, E] = U(() => [
    ...$
  ]), [D, S] = U(() => [
    ...O
  ]);
  ge(() => {
    const j = e ?? t ?? l ?? i ?? a ?? c;
    j !== void 0 && E([...j]);
  }, [e, t, l, i, a, c]), ge(() => {
    const j = n ?? s ?? d ?? r;
    j !== void 0 && S([...j]);
  }, [n, s, d, r]);
  const [b, C] = U(
    () => /* @__PURE__ */ new Set()
  ), [A, T] = U(
    () => /* @__PURE__ */ new Set()
  ), [I, F] = U(() => {
    const j = $.findIndex((W) => !W.disabled);
    return j >= 0 ? j : 0;
  }), [L, V] = U(() => {
    const j = O.findIndex((W) => !W.disabled);
    return j >= 0 ? j : 0;
  }), ee = xe(
    () => M.map((j, W) => j.disabled ? -1 : W).filter((j) => j >= 0),
    [M]
  ), Y = xe(
    () => D.map((j, W) => j.disabled ? -1 : W).filter((j) => j >= 0),
    [D]
  );
  ge(() => {
    if (I >= M.length) {
      const j = ee[ee.length - 1];
      F(j ?? 0);
    } else if (M.length > 0 && ee.length > 0 && !ee.includes(I)) {
      const j = ee[0];
      j !== void 0 && F(j);
    }
  }, [I, M.length, ee]), ge(() => {
    if (L >= D.length) {
      const j = Y[Y.length - 1];
      V(j ?? 0);
    } else if (D.length > 0 && Y.length > 0 && !Y.includes(L)) {
      const j = Y[0];
      j !== void 0 && V(j);
    }
  }, [L, D.length, Y]), ge(() => {
    C((j) => {
      const W = /* @__PURE__ */ new Set();
      for (const Z of j)
        M.some(
          (te) => it(te, g) === Z && !te.disabled
        ) && W.add(Z);
      return W;
    });
  }, [M, g]), ge(() => {
    T((j) => {
      const W = /* @__PURE__ */ new Set();
      for (const Z of j)
        D.some(
          (te) => it(te, g) === Z && !te.disabled
        ) && W.add(Z);
      return W;
    });
  }, [D, g]);
  const pe = R(
    (j) => {
      (u ?? f)?.(j);
    },
    [u, f]
  ), de = R(
    (j) => {
      (w ?? v)?.(j);
    },
    [w, v]
  ), re = R(
    (j) => {
      (m ?? h)?.(j);
    },
    [m, h]
  ), q = R(
    (j) => {
      const W = M[j];
      if (!W || W.disabled) return;
      const Z = it(W, g);
      C((_e) => {
        const te = new Set(_e);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), F(j);
    },
    [M, g]
  ), ie = R(
    (j) => {
      const W = D[j];
      if (!W || W.disabled) return;
      const Z = it(W, g);
      T((_e) => {
        const te = new Set(_e);
        return te.has(Z) ? te.delete(Z) : te.add(Z), te;
      }), V(j);
    },
    [D, g]
  ), se = R(() => {
    const j = [], W = [];
    for (const ye of M) {
      const Ee = it(ye, g);
      b.has(Ee) && !ye.disabled ? j.push(ye) : W.push(ye);
    }
    if (j.length === 0) return;
    const Z = W, _e = [...D, ...j];
    E(Z), S(_e), C(/* @__PURE__ */ new Set());
    const te = new Set(j.map((ye) => it(ye, g)));
    T(te), pe(Z), de(_e), re({
      source: Z,
      target: _e,
      moved: j,
      direction: "toTarget"
    });
  }, [
    M,
    D,
    b,
    g,
    pe,
    de,
    re
  ]), ue = R(() => {
    const j = [], W = [];
    for (const ye of D) {
      const Ee = it(ye, g);
      A.has(Ee) && !ye.disabled ? j.push(ye) : W.push(ye);
    }
    if (j.length === 0) return;
    const Z = W, _e = [...M, ...j];
    S(Z), E(_e), T(/* @__PURE__ */ new Set());
    const te = new Set(j.map((ye) => it(ye, g)));
    C(te), pe(_e), de(Z), re({
      source: _e,
      target: Z,
      moved: j,
      direction: "toSource"
    });
  }, [
    M,
    D,
    A,
    g,
    pe,
    de,
    re
  ]), oe = R(() => {
    const j = M.filter((_e) => !_e.disabled);
    if (j.length === 0) return;
    const W = M.filter((_e) => !!_e.disabled), Z = [...D, ...j];
    E(W), S(Z), C(/* @__PURE__ */ new Set()), pe(W), de(Z), re({
      source: W,
      target: Z,
      moved: j,
      direction: "allToTarget"
    });
  }, [
    M,
    D,
    g,
    pe,
    de,
    re
  ]), $e = R(() => {
    const j = D.filter((_e) => !_e.disabled);
    if (j.length === 0) return;
    const W = D.filter((_e) => !!_e.disabled), Z = [...M, ...j];
    S(W), E(Z), T(/* @__PURE__ */ new Set()), pe(Z), de(W), re({
      source: Z,
      target: W,
      moved: j,
      direction: "allToSource"
    });
  }, [M, D, pe, de, re]), Oe = R(() => {
    if (A.size === 0) return;
    const j = [...D], W = A, Z = [];
    for (let te = 1; te < j.length; te++) {
      const ye = j[te], Ee = j[te - 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, g), He = it(Ee, g);
      W.has(Fe) && !W.has(He) && !ye.disabled && !Ee.disabled && (j[te - 1] = ye, j[te] = Ee, Z.push(ye));
    }
    if (Z.length === 0) return;
    S(j), de(j), re({ source: M, target: j, moved: Z, direction: "up" });
    const _e = Array.from(W)[0];
    if (_e) {
      const te = j.findIndex(
        (ye) => it(ye, g) === _e
      );
      te >= 0 && V(te);
    }
  }, [
    D,
    A,
    g,
    M,
    de,
    re
  ]), Ye = R(() => {
    if (A.size === 0) return;
    const j = [...D], W = A, Z = [];
    for (let te = j.length - 2; te >= 0; te--) {
      const ye = j[te], Ee = j[te + 1];
      if (!ye || !Ee) continue;
      const Fe = it(ye, g), He = it(Ee, g);
      W.has(Fe) && !W.has(He) && !ye.disabled && !Ee.disabled && (j[te] = Ee, j[te + 1] = ye, Z.push(ye));
    }
    if (Z.length === 0) return;
    S(j), de(j), re({ source: M, target: j, moved: Z, direction: "down" });
    const _e = Array.from(W)[0];
    if (_e) {
      const te = j.findIndex(
        (ye) => it(ye, g) === _e
      );
      te >= 0 && V(te);
    }
  }, [
    D,
    A,
    g,
    M,
    de,
    re
  ]), ve = b.size > 0, Be = A.size > 0, ke = Q(""), ot = Q(
    null
  ), tt = Q(""), Ze = Q(
    null
  ), Nt = R(
    (j) => {
      if (M.length === 0) return;
      const W = ee;
      if (W.length === 0) return;
      const Z = W.includes(I) ? I : W[0] ?? 0;
      let _e = -1;
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const te = W.indexOf(Z);
        _e = W[(te + 1) % W.length] ?? W[0] ?? 0;
      } else if (j.key === "ArrowUp") {
        j.preventDefault();
        const te = W.indexOf(Z);
        _e = W[(te - 1 + W.length) % W.length] ?? W[0] ?? 0;
      } else if (j.key === "Home")
        j.preventDefault(), _e = W[0] ?? 0;
      else if (j.key === "End")
        j.preventDefault(), _e = W[W.length - 1] ?? 0;
      else if (j.key === "Enter" || j.key === " ") {
        j.preventDefault(), q(Z);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(j.key)) {
        j.preventDefault();
        const te = (ke.current + j.key).toLowerCase();
        ke.current = te, ot.current && clearTimeout(ot.current), ot.current = setTimeout(() => {
          ke.current = "";
        }, 500);
        const ye = [...W, ...W], Ee = W.indexOf(Z) + 1, Fe = ye.slice(Ee).find(
          (He) => hs(M[He]).toLowerCase().startsWith(te)
        );
        Fe != null && F(Fe);
        return;
      }
      _e >= 0 && F(_e);
    },
    [M, ee, I, q]
  ), xt = R(
    (j) => {
      if (D.length === 0) return;
      const W = Y;
      if (W.length === 0) return;
      const Z = W.includes(L) ? L : W[0] ?? 0;
      let _e = -1;
      if (j.key === "ArrowDown") {
        j.preventDefault();
        const te = W.indexOf(Z);
        _e = W[(te + 1) % W.length] ?? W[0] ?? 0;
      } else if (j.key === "ArrowUp") {
        j.preventDefault();
        const te = W.indexOf(Z);
        _e = W[(te - 1 + W.length) % W.length] ?? W[0] ?? 0;
      } else if (j.key === "Home")
        j.preventDefault(), _e = W[0] ?? 0;
      else if (j.key === "End")
        j.preventDefault(), _e = W[W.length - 1] ?? 0;
      else if (j.key === "Enter" || j.key === " ") {
        j.preventDefault(), ie(Z);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(j.key)) {
        j.preventDefault();
        const te = (tt.current + j.key).toLowerCase();
        tt.current = te, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          tt.current = "";
        }, 500);
        const ye = [...W, ...W], Ee = W.indexOf(Z) + 1, Fe = ye.slice(Ee).find(
          (He) => hs(D[He]).toLowerCase().startsWith(te)
        );
        Fe != null && V(Fe);
        return;
      }
      _e >= 0 && V(_e);
    },
    [D, Y, L, ie]
  ), lt = Q(null), G = Q(null);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Ie.root, k].filter(Boolean).join(" "),
      "aria-label": N,
      children: [
        /* @__PURE__ */ z("div", { className: Ie.panel, children: [
          /* @__PURE__ */ o("div", { className: Ie.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: lt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Ie.listbox,
              onKeyDown: Nt,
              children: M.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Ie.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : M.map((j, W) => {
                const Z = it(j, g), _e = b.has(Z), te = W === I, ye = !!j.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": te || void 0,
                    className: [
                      Ie.option,
                      _e ? Ie.selected : null,
                      te ? Ie.active : null,
                      ye ? Ie.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => q(W),
                    children: hs(j)
                  },
                  Z
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ z("div", { className: Ie.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ie.btn,
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
              className: Ie.btn,
              "aria-label": "Move all to target",
              "aria-disabled": M.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: M.filter((j) => !j.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ie.btn,
              "aria-label": "Move all",
              "aria-disabled": M.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: M.filter((j) => !j.disabled).length === 0,
              onClick: oe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ie.btn,
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
              className: Ie.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((j) => !j.disabled).length === 0 || void 0,
              disabled: D.filter((j) => !j.disabled).length === 0,
              onClick: $e,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ z("div", { className: Ie.panel, children: [
          /* @__PURE__ */ o("div", { className: Ie.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: G,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Ie.listbox,
              onKeyDown: xt,
              children: D.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Ie.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : D.map((j, W) => {
                const Z = it(j, g), _e = A.has(Z), te = W === L, ye = !!j.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": te || void 0,
                    className: [
                      Ie.option,
                      _e ? Ie.selected : null,
                      te ? Ie.active : null,
                      ye ? Ie.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(W),
                    children: hs(j)
                  },
                  Z
                );
              })
            }
          ),
          /* @__PURE__ */ z("div", { className: Ie.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ie.btn,
                "aria-label": "Move up",
                "aria-disabled": !Be || void 0,
                disabled: !Be,
                onClick: Oe,
                children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ie.btn,
                "aria-label": "Move down",
                "aria-disabled": !Be || void 0,
                disabled: !Be,
                onClick: Ye,
                children: /* @__PURE__ */ o(we, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const _v = "_root_1spxj_1", hv = "_header_1spxj_8", pv = "_title_1spxj_15", mv = "_navBtn_1spxj_20", gv = "_resources_1spxj_39", xv = "_resource_1spxj_39", yv = "_grid_1spxj_50", bv = "_timeCol_1spxj_55", vv = "_timeCell_1spxj_61", wv = "_dayCol_1spxj_66", kv = "_dayHeader_1spxj_73", $v = "_slot_1spxj_81", Nv = "_event_1spxj_91", kt = {
  root: _v,
  header: hv,
  title: pv,
  navBtn: mv,
  resources: gv,
  resource: xv,
  grid: yv,
  timeCol: bv,
  timeCell: vv,
  dayCol: wv,
  dayHeader: kv,
  slot: $v,
  event: Nv
};
function yr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function ik({
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
  const [c, u] = U(
    n ?? /* @__PURE__ */ new Date()
  ), f = n ?? c, w = (p) => {
    n || u(p), s?.(p);
  }, v = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (p, m) => {
    const h = new Date(f);
    return h.setDate(f.getDate() - f.getDay() + m), h;
  }) : Array.from({ length: 30 }, (p, m) => {
    const h = new Date(f);
    return h.setDate(1 + m), h;
  }), y = Array.from({ length: 12 }, (p, m) => 8 + m);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [kt.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ z("div", { className: kt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: kt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() - 7), w(p);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: kt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: kt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() + 7), w(p);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: kt.resources, children: l.map((p) => /* @__PURE__ */ o(
          "div",
          {
            className: kt.resource,
            role: "presentation",
            "aria-label": p.name,
            children: p.name
          },
          p.id
        )) }),
        /* @__PURE__ */ z("div", { className: kt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: kt.timeCol, role: "presentation", children: y.map((p) => /* @__PURE__ */ z("div", { className: kt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          v.map((p) => /* @__PURE__ */ z(
            "div",
            {
              className: kt.dayCol,
              role: "presentation",
              title: p.toLocaleDateString(),
              onClick: () => d?.({ date: p }),
              tabIndex: 0,
              "aria-label": p.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: kt.dayHeader, children: p.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                y.map((m) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: kt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(p);
                      h.setHours(m), d?.({ date: h });
                    }
                  },
                  m
                )),
                e.filter((m) => m.start.toDateString() === p.toDateString()).map((m) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: kt.event,
                    "aria-label": `${m.title} ${yr(m.start)} - ${yr(m.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: m }),
                    children: m.title
                  },
                  m.id
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
const Ov = "_root_153eg_1", Sv = "_header_153eg_8", Cv = "_headerCell_153eg_15", Dv = "_timeline_153eg_21", Ev = "_row_153eg_26", zv = "_taskName_153eg_32", Mv = "_timelineCell_153eg_37", jv = "_bar_153eg_43", Iv = "_progress_153eg_56", Av = "_dep_153eg_61", Xt = {
  root: Ov,
  header: Sv,
  headerCell: Cv,
  timeline: Dv,
  row: Ev,
  taskName: zv,
  timelineCell: Mv,
  bar: jv,
  progress: Iv,
  dep: Av
};
function ck({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: s = "Gantt",
  className: l
}) {
  const [i, d] = U(null);
  return /* @__PURE__ */ z(
    "div",
    {
      className: [Xt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": s,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ z("div", { className: Xt.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Xt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ z("div", { className: Xt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ z(
          "div",
          {
            className: Xt.row,
            role: "row",
            "aria-selected": i === r.id,
            children: [
              /* @__PURE__ */ o("div", { className: Xt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ z("div", { className: Xt.timelineCell, role: "gridcell", children: [
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
const Tv = "_root_l9zve_1", Pv = "_fields_l9zve_6", Lv = "_chip_l9zve_13", Rv = "_table_l9zve_35", Bv = "_totalRow_l9zve_55", Fv = "_total_l9zve_55", Tn = {
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
function dk({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: s = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const r = t, a = n, c = s, u = (m, h, _) => {
    const x = m === "row" ? r.filter((N) => N.property !== h) : r, k = m === "col" ? a.filter((N) => N.property !== h) : a, g = m === "agg" ? c.filter((N) => !(N.property === h && N.aggregate === _)) : c;
    l?.({
      rowFields: x,
      columnFields: k,
      aggregateFields: g
    });
  }, f = (m, h) => h.map((_) => String(m[_.property])).join(""), w = [
    ...new Set(r.length ? e.map((m) => f(m, r)) : [""])
  ].sort(), v = [
    ...new Set(a.length ? e.map((m) => f(m, a)) : [""])
  ].sort(), y = (m, h, _) => {
    const x = e.filter(
      (g) => f(g, r) === m && f(g, a) === h
    ), k = x.map((g) => Number(g[_.property])).filter((g) => !Number.isNaN(g));
    return !k.length && _.aggregate !== "Count" ? 0 : ps[_.aggregate](
      _.aggregate === "Count" ? x.map(() => 1) : k
    );
  }, p = (m, h, _, x) => /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      className: Tn.chip,
      "aria-label": `Remove ${m} field ${_}`,
      onClick: () => u(m, h, x),
      children: [
        _,
        x ? ` (${x})` : ""
      ]
    },
    `${m}-${_}-${x ?? ""}`
  );
  return /* @__PURE__ */ z("div", { className: [Tn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z("div", { className: Tn.fields, children: [
      r.map((m) => p("row", m.property, m.title ?? m.property)),
      a.map((m) => p("col", m.property, m.title ?? m.property)),
      c.map(
        (m) => p("agg", m.property, m.title ?? m.property, m.aggregate)
      )
    ] }),
    /* @__PURE__ */ z("table", { className: Tn.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ z("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: r.map((m) => m.title ?? m.property).join(" / ") || "Total" }),
        v.map((m) => /* @__PURE__ */ o("th", { scope: "col", children: m || "—" }, m)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ z("tbody", { children: [
        w.map((m) => /* @__PURE__ */ z("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: m || "—" }),
          v.map((h) => /* @__PURE__ */ o(
            "td",
            {
              title: es(
                y(
                  m,
                  h,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? es(y(m, h, c[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ o("td", { className: Tn.total, children: c.length ? es(
            ps[c[0].aggregate](
              v.flatMap(
                (h) => e.filter(
                  (_) => f(_, r) === m && f(_, a) === h
                ).map((_) => Number(_[c[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, m)),
        /* @__PURE__ */ z("tr", { className: Tn.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          v.map((m) => /* @__PURE__ */ o("td", { children: c.length ? es(
            ps[c[0].aggregate](
              e.filter((h) => f(h, a) === m).map((h) => Number(h[c[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, m)),
          /* @__PURE__ */ o("td", { children: c.length ? es(
            ps[c[0].aggregate](
              e.map((m) => Number(m[c[0].property])).filter((m) => !Number.isNaN(m))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Hv = "_root_13gvl_1", qv = "_reverse_13gvl_10", Kv = "_item_13gvl_14", Wv = "_marker_13gvl_35", Uv = "_body_13gvl_46", Vv = "_label_13gvl_50", Gv = "_content_13gvl_56", $n = {
  root: Hv,
  reverse: qv,
  item: Kv,
  marker: Wv,
  body: Uv,
  label: Vv,
  content: Gv
};
function uk({
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
      children: l.map((i, d) => /* @__PURE__ */ z("li", { className: $n.item, children: [
        /* @__PURE__ */ o("span", { className: $n.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ z("div", { className: $n.body, children: [
          /* @__PURE__ */ o("div", { className: $n.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: $n.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const Xv = "_root_4ls7q_1", Yv = "_header_4ls7q_13", Zv = "_headCell_4ls7q_22", Jv = "_row_4ls7q_32", Qv = "_cell_4ls7q_37", ts = {
  root: Xv,
  header: Yv,
  headCell: Zv,
  row: Jv,
  cell: Qv
};
function fk({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: s,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [r, a] = U(
    /* @__PURE__ */ new Map()
  ), [c, u] = U(0), f = Q(/* @__PURE__ */ new Set()), w = Math.ceil(n / t), v = Math.max(0, Math.floor(c / t) - 3), y = Math.min(e, v + w + 6), p = R(
    (h, _) => {
      let x = !1;
      for (let k = h; k < _; k++)
        !r.has(k) && !f.current.has(k) && (x = !0);
      if (x) {
        for (let k = h; k < _; k++) f.current.add(k);
        s({ skip: h, top: _ }).then((k) => {
          a((g) => {
            const N = new Map(g);
            return k.forEach(($, O) => N.set(h + O, $)), N;
          });
          for (let g = h; g < _; g++) f.current.delete(g);
        });
      }
    },
    [r, s]
  );
  ge(() => {
    p(v, y);
  }, [v, y]);
  const m = [];
  for (let h = v; h < y; h++) {
    const _ = r.get(h) ?? {};
    m.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: ts.row,
          role: "row",
          style: { height: t },
          children: l.map((x) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: ts.cell,
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
      className: [ts.root, d].filter(Boolean).join(" "),
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
        m,
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
var Bt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(r, a, c, u) {
      if (this.version = r, this.errorCorrectionLevel = a, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let f = [];
      for (let v = 0; v < this.size; v++) f.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const w = this.addEccAndInterleave(c);
      if (this.drawCodewords(w), u == -1) {
        let v = 1e9;
        for (let y = 0; y < 8; y++) {
          this.applyMask(y), this.drawFormatBits(y);
          const p = this.getPenaltyScore();
          p < v && (u = y, v = p), this.applyMask(y);
        }
      }
      l(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
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
    static encodeSegments(r, a, c = 1, u = 40, f = -1, w = !0) {
      if (!(t.MIN_VERSION <= c && c <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let v, y;
      for (v = c; ; v++) {
        const _ = t.getNumDataCodewords(v, a) * 8, x = i.getTotalBits(r, v);
        if (x <= _) {
          y = x;
          break;
        }
        if (v >= u)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        w && y <= t.getNumDataCodewords(v, _) * 8 && (a = _);
      let p = [];
      for (const _ of r) {
        n(_.mode.modeBits, 4, p), n(_.numChars, _.mode.numCharCountBits(v), p);
        for (const x of _.getData()) p.push(x);
      }
      l(p.length == y);
      const m = t.getNumDataCodewords(v, a) * 8;
      l(p.length <= m), n(0, Math.min(4, m - p.length), p), n(0, (8 - p.length % 8) % 8, p), l(p.length % 8 == 0);
      for (let _ = 236; p.length < m; _ ^= 253)
        n(_, 8, p);
      let h = [];
      for (; h.length * 8 < p.length; ) h.push(0);
      return p.forEach(
        (_, x) => h[x >>> 3] |= _ << 7 - (x & 7)
      ), new t(v, a, h, f);
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
        for (let u = 0; u < a; u++)
          c == 0 && u == 0 || c == 0 && u == a - 1 || c == a - 1 && u == 0 || this.drawAlignmentPattern(r[c], r[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const a = this.errorCorrectionLevel.formatBits << 3 | r;
      let c = a;
      for (let f = 0; f < 10; f++) c = c << 1 ^ (c >>> 9) * 1335;
      const u = (a << 10 | c) ^ 21522;
      l(u >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, s(u, f));
      this.setFunctionModule(8, 7, s(u, 6)), this.setFunctionModule(8, 8, s(u, 7)), this.setFunctionModule(7, 8, s(u, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, s(u, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, s(u, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, s(u, f));
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
        const u = s(a, c), f = this.size - 11 + c % 3, w = Math.floor(c / 3);
        this.setFunctionModule(f, w, u), this.setFunctionModule(w, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, a) {
      for (let c = -4; c <= 4; c++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(c)), w = r + u, v = a + c;
          0 <= w && w < this.size && 0 <= v && v < this.size && this.setFunctionModule(w, v, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, a) {
      for (let c = -2; c <= 2; c++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            r + u,
            a + c,
            Math.max(Math.abs(u), Math.abs(c)) != 1
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
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], f = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], w = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), v = u - w % u, y = Math.floor(w / u);
      let p = [];
      const m = t.reedSolomonComputeDivisor(f);
      for (let _ = 0, x = 0; _ < u; _++) {
        let k = r.slice(
          x,
          x + y - f + (_ < v ? 0 : 1)
        );
        x += k.length;
        const g = t.reedSolomonComputeRemainder(k, m);
        _ < v && k.push(0), p.push(k.concat(g));
      }
      let h = [];
      for (let _ = 0; _ < p[0].length; _++)
        p.forEach((x, k) => {
          (_ != y - f || k >= v) && h.push(x[_]);
        });
      return l(h.length == w), h;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let u = 0; u < this.size; u++)
          for (let f = 0; f < 2; f++) {
            const w = c - f, y = (c + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[y][w] && a < r.length * 8 && (this.modules[y][w] = s(r[a >>> 3], 7 - (a & 7)), a++);
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
          let u;
          switch (r) {
            case 0:
              u = (c + a) % 2 == 0;
              break;
            case 1:
              u = a % 2 == 0;
              break;
            case 2:
              u = c % 3 == 0;
              break;
            case 3:
              u = (c + a) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(c / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              u = c * a % 2 + c * a % 3 == 0;
              break;
            case 6:
              u = (c * a % 2 + c * a % 3) % 2 == 0;
              break;
            case 7:
              u = ((c + a) % 2 + c * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][c] && u && (this.modules[a][c] = !this.modules[a][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let f = 0; f < this.size; f++) {
        let w = !1, v = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[f][p] == w ? (v++, v == 5 ? r += t.PENALTY_N1 : v > 5 && r++) : (this.finderPenaltyAddHistory(v, y), w || (r += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), w = this.modules[f][p], v = 1);
        r += this.finderPenaltyTerminateAndCount(w, v, y) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let w = !1, v = 0, y = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][f] == w ? (v++, v == 5 ? r += t.PENALTY_N1 : v > 5 && r++) : (this.finderPenaltyAddHistory(v, y), w || (r += this.finderPenaltyCountPatterns(y) * t.PENALTY_N3), w = this.modules[p][f], v = 1);
        r += this.finderPenaltyTerminateAndCount(w, v, y) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let w = 0; w < this.size - 1; w++) {
          const v = this.modules[f][w];
          v == this.modules[f][w + 1] && v == this.modules[f + 1][w] && v == this.modules[f + 1][w + 1] && (r += t.PENALTY_N2);
        }
      let a = 0;
      for (const f of this.modules)
        a = f.reduce((w, v) => w + (v ? 1 : 0), a);
      const c = this.size * this.size, u = Math.ceil(Math.abs(a * 20 - c * 10) / c) - 1;
      return l(0 <= u && u <= 9), r += u * t.PENALTY_N4, l(0 <= r && r <= 2568888), r;
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
        for (let u = this.size - 7; c.length < r; u -= a)
          c.splice(1, 0, u);
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
      for (let u = 0; u < r - 1; u++) a.push(0);
      a.push(1);
      let c = 1;
      for (let u = 0; u < r; u++) {
        for (let f = 0; f < a.length; f++)
          a[f] = t.reedSolomonMultiply(a[f], c), f + 1 < a.length && (a[f] ^= a[f + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, a) {
      let c = a.map((u) => 0);
      for (const u of r) {
        const f = u ^ c.shift();
        c.push(0), a.forEach(
          (w, v) => c[v] ^= t.reedSolomonMultiply(w, f)
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
      for (let u = 7; u >= 0; u--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (a >>> u & 1) * r;
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
        const u = Math.min(r.length - c, 3);
        n(parseInt(r.substring(c, c + u), 10), u * 3 + 1, a), c += u;
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
        let u = i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(c)) * 45;
        u += i.ALPHANUMERIC_CHARSET.indexOf(r.charAt(c + 1)), n(u, 11, a);
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
      for (const u of r) {
        const f = u.mode.numCharCountBits(a);
        if (u.numChars >= 1 << f) return 1 / 0;
        c += 4 + f + u.bitData.length;
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
function _k({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: s = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: r
}) {
  const a = i ?? `QR code for ${e}`, c = Q(null), u = jr("(prefers-color-scheme: dark)"), [f, w] = U(null);
  ge(() => {
    const k = document.documentElement;
    w(k.dataset.theme ?? null);
    const g = new MutationObserver(() => {
      w(k.dataset.theme ?? null);
    });
    return g.observe(k, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => g.disconnect();
  }, []);
  const v = xe(() => {
    try {
      return Bt.QrCode.encodeText(e, n2[s]);
    } catch {
      return null;
    }
  }, [e, s]), y = Q(null);
  ge(() => {
    if (v !== null) {
      y.current = null;
      return;
    }
    const k = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(k), (y.current?.value !== e || y.current?.onError !== r) && (y.current = { value: e, onError: r }, r?.(k));
  }, [v, e, r]);
  const p = Math.max(0, Math.floor(l)), m = [t2.root, d].filter(Boolean).join(" ");
  if (ge(() => {
    if (n !== "canvas" || v === null) return;
    const k = c.current, g = k?.getContext("2d");
    if (!k || !g) return;
    const N = getComputedStyle(k), $ = N.getPropertyValue("--dx-text-color").trim() || "#000", O = N.getPropertyValue("--dx-surface-color").trim() || "#fff";
    s2(g, v, t, p, $, O);
  }, [n, v, t, p, u, f]), v === null)
    return /* @__PURE__ */ o("div", { className: m, role: "img", "aria-label": a, "data-qr-error": "true" });
  const h = v.size + p * 2, _ = t / h;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: c,
        className: m,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const x = [];
  for (let k = 0; k < v.size; k++)
    for (let g = 0; g < v.size; g++)
      v.getModule(g, k) && x.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (g + p) * _,
            y: (k + p) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${g}-${k}`
        )
      );
  return /* @__PURE__ */ z(
    "svg",
    {
      className: m,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: x })
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
const r2 = "_root_1v9la_1", o2 = "_value_1v9la_9", br = {
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
], wr = 104, l2 = 106;
function a2(e) {
  const t = [wr];
  for (let s = 0; s < e.length; s++) {
    const l = e.charCodeAt(s);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = wr;
  for (let s = 1; s < t.length; s++) n += s * t[s];
  return t.push(n % 103, l2), t;
}
function hk({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: s = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, r = xe(() => {
    const a = [];
    let c = 0;
    for (const u of a2(e)) {
      const f = vr[u] ?? vr[0];
      for (let w = 0; w < f.length; w++) {
        const v = Number(f[w]);
        w % 2 === 0 && a.push({ x: c, w: v }), c += v;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ z("span", { className: [br.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ z(
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
    s && /* @__PURE__ */ o("span", { className: br.value, children: e })
  ] });
}
const i2 = "_root_1ytp2_1", c2 = "_svg_1ytp2_10", d2 = "_gridline_1ytp2_15", u2 = "_tickLabel_1ytp2_21", f2 = "_axisTitle_1ytp2_27", _2 = "_dataLabel_1ytp2_34", h2 = "_gaugeValue_1ytp2_40", p2 = "_legend_1ytp2_47", m2 = "_legendItem_1ytp2_55", g2 = "_swatch_1ytp2_63", x2 = "_tooltip_1ytp2_70", y2 = "_visuallyHidden_1ytp2_84", We = {
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
  tooltip: x2,
  visuallyHidden: y2
}, kr = [
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
]), b2 = /* @__PURE__ */ new Set([...Br, "heatmap"]);
function v2(e, t, n) {
  const s = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(s / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, r = [];
  for (let a = i; a <= d + 1e-9; a += l)
    r.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: r };
}
function w2(e) {
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
function k2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r } = e, a = i.l + d / 2, c = i.t + r / 2, u = Math.min(d, r) / 3, f = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, w = s.reduce((y, p) => y + (Number(p.val) || 0), 0);
  let v = -90;
  return pn(
    n,
    t,
    s.map((y, p) => {
      const m = w ? y.val / w * 360 : 0, h = v, _ = v + m;
      v = _;
      const x = m > 180 ? 1 : 0, k = a + u * Math.cos(mt(h)), g = c + u * Math.sin(mt(h)), N = a + u * Math.cos(mt(_)), $ = c + u * Math.sin(mt(_)), O = a + f * Math.cos(mt(_)), M = c + f * Math.sin(mt(_)), E = a + f * Math.cos(mt(h)), D = c + f * Math.sin(mt(h)), S = f ? `M ${k} ${g} A ${u} ${u} 0 ${x} 1 ${N} ${$} L ${O} ${M} A ${f} ${f} 0 ${x} 0 ${E} ${D} Z` : `M ${a} ${c} L ${k} ${g} A ${u} ${u} 0 ${x} 1 ${N} ${$} Z`, b = (h + _) / 2, C = a + (u + 12) * Math.cos(mt(b)), A = c + (u + 12) * Math.sin(mt(b));
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: S,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(C, A, `${t.title ?? y.cat}: ${y.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, y.cat, y.val, y.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: C,
            y: A,
            textAnchor: "middle",
            className: We.dataLabel,
            children: y.val
          }
        )
      ] }, p);
    })
  );
}
function $2(e, t, n, s, l) {
  const { pad: i, plotW: d, scale: r, xFor: a, yFor: c, categories: u } = e, f = new Map(u.map((w, v) => [w, v]));
  return pn(
    n,
    t,
    s.map((w, v) => {
      const y = f.get(w.cat) ?? 0, p = Number(s[v].cat), m = Number.isNaN(p) ? a(y) : i.l + (p - r.min) / (r.max - r.min || 1) * d, h = c(w.val), _ = t.type === "bubble" && w.size !== void 0 ? Math.max(4, Math.min(12, w.size / 10)) : 4;
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            cx: m,
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
            cx: m,
            cy: h,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(m, h, `${t.title ?? w.cat}: ${w.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, w.cat, w.val, w.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, v);
    })
  );
}
function N2(e, t, n, s, l) {
  const { scale: i, xFor: d, yFor: r, categories: a, series: c } = e, u = new Map(a.map((y, p) => [y, p])), f = (y) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let m = 0; m < n; m++) {
      const h = c[m];
      if (h?.stack !== t.stack) continue;
      const _ = h.data.find(
        (x) => String(x[h.categoryProperty] ?? "") === y
      );
      _ && (p += Number(_[h.valueProperty]) || 0);
    }
    return p;
  }, w = s.map((y) => {
    const p = u.get(y.cat) ?? 0, m = f(y.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${r(m + y.val)}`;
  }).join(" "), v = s.map((y) => {
    const p = u.get(y.cat) ?? 0, m = f(y.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${r(m)}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ z(rt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${w} L ${d(s.length - 1)} ${r(f(s[s.length - 1].cat))} L ${d(0)} ${r(f(s[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: w, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: v, fill: "none", stroke: "transparent" }),
      s.map((y, p) => {
        const m = u.get(y.cat) ?? 0, h = f(y.cat), _ = d(m), x = r(h + y.val);
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
              onMouseEnter: () => e.tooltipVisible && e.showTip(_, x, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
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
              children: y.val
            }
          )
        ] }, p);
      })
    ] })
  );
}
function O2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, scale: a, xFor: c, yFor: u, categories: f, series: w } = e, v = new Map(f.map((p, m) => [p, m])), y = t.type === "bar";
  return pn(
    n,
    t,
    s.map((p, m) => {
      const h = v.get(p.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let b = 0; b < n; b++) {
          const C = w[b];
          if (C?.stack !== t.stack) continue;
          const A = C.data.find(
            (T) => String(T[C.categoryProperty] ?? "") === p.cat
          );
          A && (_ += Number(A[C.valueProperty]) || 0);
        }
      const x = _ + p.val, k = w.filter(
        (b) => !b.stack || b.stack === t.stack
      ).length, g = d / Math.max(1, f.length), N = y ? 18 : Math.max(12, g / (t.stack ? 1 : w.length) - 4), $ = y ? i.l + _ / (a.max - a.min || 1) * d : c(h) - N / 2 + (t.stack ? 0 : n % k * N), O = y ? i.t + h * r / Math.max(1, f.length) + 4 : u(x), M = y ? p.val / (a.max - a.min || 1) * d : N - 4, E = y ? 16 : u(_) - u(x), D = y ? i.l + _ / (a.max - a.min || 1) * d : $, S = y ? i.t + h * r / Math.max(1, f.length) + 4 : O;
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: D,
            y: S,
            width: y ? M : N - 4,
            height: E,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              D + (y ? M : N) / 2,
              S,
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
            x: D + (y ? M : N) / 2,
            y: S - 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: p.val
          }
        )
      ] }, m);
    })
  );
}
function S2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, scale: a, tooltipVisible: c, showTip: u, hideTip: f } = e, w = i.l + d / 2, v = i.t + r * 0.78, y = Math.min(d, r) * 0.36, p = 135, m = 270, h = s.reduce((N, $) => N + (Number($.val) || 0), 0), _ = a.max - a.min || 1, x = Math.min(1, Math.max(0, (h - a.min) / _)), k = (N, $) => {
    const [O, M] = [
      w + y * Math.cos(mt(N)),
      v + y * Math.sin(mt(N))
    ], [E, D] = [
      w + y * Math.cos(mt($)),
      v + y * Math.sin(mt($))
    ], S = $ - N > 180 ? 1 : 0;
    return `M ${O} ${M} A ${y} ${y} 0 ${S} 1 ${E} ${D}`;
  }, g = Number(h.toFixed(2));
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
          d: k(p, p + m),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      x > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: k(p, p + m * x),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: w, y: v - 4, textAnchor: "middle", className: We.gaugeValue, children: g }),
      /* @__PURE__ */ o(
        "path",
        {
          d: k(p, p + m),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && u(w, v - y, `${t.title ?? "Value"}: ${g}`),
          onMouseLeave: () => f(),
          onClick: () => e.handleClick(t, s[0]?.cat ?? "", h, s[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: w,
          y: v + y + 18,
          textAnchor: "middle",
          className: We.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Fr(e) {
  const { pad: t, plotW: n, plotH: s, categories: l } = e, i = t.l + n / 2, d = t.t + s / 2, r = Math.min(n, s) / 2 - 24, a = Math.max(3, l.length), c = (f) => mt(-90 + 360 * f / a);
  return { cx: i, cy: d, radius: r, angleFor: c, vertexFor: (f, w) => {
    const v = c(f);
    return [
      i + r * w * Math.cos(v),
      d + r * w * Math.sin(v)
    ];
  } };
}
function C2(e) {
  const { categories: t } = e, { cx: n, cy: s, vertexFor: l } = Fr(e);
  return /* @__PURE__ */ z("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
  const { categories: i, tooltipVisible: d, showTip: r, hideTip: a } = e, { cx: c, cy: u, radius: f, angleFor: w, vertexFor: v } = Fr(e), y = e.scale.max || 1, p = (h) => s.find((_) => _.cat === h)?.val ?? 0, m = i.map((h, _) => {
    const x = Math.min(1, Math.max(0, p(h) / y)), [k, g] = v(_, x);
    return `${k},${g}`;
  }).join(" ");
  return pn(
    n,
    t,
    /* @__PURE__ */ z(rt, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: m,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((h, _) => {
        const x = Math.min(1, Math.max(0, p(h) / y)), [k, g] = v(_, x), [N, $] = v(_, 1);
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: k,
              cy: g,
              r: 3.5,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: k,
              cy: g,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && r(N, $, `${t.title ?? h}: ${p(h)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const O = s.find((M) => M.cat === h);
                O && e.handleClick(t, O.cat, O.val, O.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: c + (f + 14) * Math.cos(w(_)),
              y: u + (f + 14) * Math.sin(w(_)) + 4,
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
function E2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, tooltipVisible: a, showTip: c, hideTip: u } = e, f = s, w = Math.max(1, ...f.map((p) => Number(p.val) || 0)), v = r / Math.max(1, f.length), y = i.l + d / 2;
  return pn(
    n,
    t,
    f.map((p, m) => {
      const _ = Math.max(0, Number(p.val) || 0) / w * d, x = f[m + 1], k = x ? Math.max(0, Number(x.val) || 0) / w * d : _ * 0.7, g = i.t + m * v + 2, N = Math.max(4, v - 6), $ = 1 - m * (0.45 / Math.max(1, f.length));
      return /* @__PURE__ */ z("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${y - _ / 2} ${g} L ${y + _ / 2} ${g} L ${y + k / 2} ${g + N} L ${y - k / 2} ${g + N} Z`,
            fill: l,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(y, g, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ z(
          "text",
          {
            x: y,
            y: g + N / 2 + 4,
            textAnchor: "middle",
            className: We.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, m);
    })
  );
}
function z2(e, t, n, s, l) {
  const { pad: i, plotW: d, plotH: r, categories: a, tooltipVisible: c, showTip: u, hideTip: f } = e, w = [];
  t.data.forEach((x) => {
    const k = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    w.includes(k) || w.push(k);
  });
  const v = s.map((x) => x.val).filter((x) => Number.isFinite(x)), y = v.length ? Math.min(...v) : 0, p = v.length ? Math.max(...v) : 1, m = d / Math.max(1, a.length), h = r / Math.max(1, w.length), _ = (x) => p === y ? 0.6 : 0.15 + 0.85 * ((x - y) / (p - y));
  return pn(
    n,
    t,
    /* @__PURE__ */ z(rt, { children: [
      w.map((x, k) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + k * h + h / 2 + 4,
          textAnchor: "end",
          className: We.tickLabel,
          children: x
        },
        x
      )),
      s.map((x, k) => {
        const g = t.data[k], N = a.indexOf(x.cat), $ = w.indexOf(
          t.rowProperty && g ? String(g[t.rowProperty] ?? "") : "All"
        );
        if (N < 0 || $ < 0) return null;
        const O = i.l + N * m, M = i.t + $ * h;
        return /* @__PURE__ */ z("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: O + 1,
              y: M + 1,
              width: Math.max(1, m - 2),
              height: Math.max(1, h - 2),
              fill: l,
              fillOpacity: _(x.val),
              onMouseEnter: () => c && u(O + m / 2, M, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: O + m / 2,
              y: M + h / 2 + 4,
              textAnchor: "middle",
              className: We.dataLabel,
              children: x.val
            }
          )
        ] }, k);
      })
    ] })
  );
}
function M2(e, t, n) {
  const s = w2(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return k2(e, t, n, s, l);
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
      return E2(e, t, n, s, l);
    case "heatmap":
      return z2(e, t, n, s, l);
    default:
      return O2(e, t, n, s, l);
  }
}
function pk({
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
  const [u, f] = U(
    null
  ), w = xe(() => {
    const E = /* @__PURE__ */ new Set();
    for (const D of e)
      for (const S of D.data) E.add(String(S[D.categoryProperty] ?? ""));
    return [...E];
  }, [e]), v = xe(() => {
    const E = e.flatMap((S) => S.data.map((b) => Number(b[S.valueProperty]))).filter((S) => !Number.isNaN(S)), D = /* @__PURE__ */ new Map();
    for (const S of e) {
      if (!S.stack) continue;
      let b = D.get(S.stack);
      b || D.set(S.stack, b = /* @__PURE__ */ new Map());
      for (const C of S.data) {
        const A = String(C[S.categoryProperty] ?? ""), T = Number(C[S.valueProperty]);
        Number.isNaN(T) || b.set(A, (b.get(A) ?? 0) + T);
      }
    }
    for (const S of D.values()) E.push(...S.values());
    return E;
  }, [e]), y = s?.min ?? (v.length ? Math.min(0, ...v) : 0), p = s?.max ?? (v.length ? Math.max(...v) : 10), m = xe(
    () => v2(y, p, s?.step),
    [y, p, s?.step]
  ), h = { t: 16, r: 16, b: 40, l: 56 }, _ = t - h.l - h.r, x = n - h.t - h.b, k = (E) => h.l + E / Math.max(1, w.length - 1) * _, g = (E) => h.t + (1 - (E - m.min) / (m.max - m.min || 1)) * x, N = (E, D) => D.color ?? kr[E % kr.length], $ = e.some((E) => Br.has(E.type)), O = e.some((E) => b2.has(E.type)), M = {
    categories: w,
    scale: m,
    pad: h,
    plotW: _,
    plotH: x,
    xFor: k,
    yFor: g,
    colorFor: N,
    tooltipVisible: d,
    showTip: (E, D, S) => f({ x: E, y: D, text: S }),
    hideTip: () => f(null),
    handleClick: (E, D, S, b) => r?.({
      seriesTitle: E.title ?? "",
      category: D,
      value: S,
      item: b
    }),
    series: e
  };
  return /* @__PURE__ */ z(
    "figure",
    {
      className: [We.root, c].filter(Boolean).join(" "),
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
              $ && s?.gridlines !== !1 && m.ticks.map((E) => /* @__PURE__ */ o(
                "line",
                {
                  x1: h.l,
                  x2: h.l + _,
                  y1: g(E),
                  y2: g(E),
                  className: We.gridline
                },
                E
              )),
              O && l?.gridlines && w.map((E, D) => /* @__PURE__ */ o(
                "line",
                {
                  x1: k(D),
                  x2: k(D),
                  y1: h.t,
                  y2: h.t + x,
                  className: We.gridline
                },
                D
              )),
              $ && m.ticks.map((E) => /* @__PURE__ */ o(
                "text",
                {
                  x: h.l - 8,
                  y: g(E) + 4,
                  textAnchor: "end",
                  className: We.tickLabel,
                  children: E
                },
                E
              )),
              O && w.map((E, D) => /* @__PURE__ */ o(
                "text",
                {
                  x: k(D),
                  y: h.t + x + 16,
                  textAnchor: "middle",
                  className: We.tickLabel,
                  children: E
                },
                E
              )),
              $ && s?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: h.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${h.t + x / 2})`,
                  className: We.axisTitle,
                  children: s.title
                }
              ),
              O && l?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: h.l + _ / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: We.axisTitle,
                  children: l.title
                }
              ),
              e.some((E) => E.type === "radar") && C2(M),
              e.map((E, D) => M2(M, E, D))
            ]
          }
        ),
        u && /* @__PURE__ */ o(
          "div",
          {
            className: We.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ o("div", { className: We.legend, children: e.map((E, D) => /* @__PURE__ */ z("span", { className: We.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: We.swatch,
              style: { backgroundColor: N(D, E) },
              "aria-hidden": "true"
            }
          ),
          E.title ?? `Series ${D + 1}`
        ] }, D)) }),
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
                (E) => E.data.map((D, S) => /* @__PURE__ */ z("tr", { children: [
                  /* @__PURE__ */ o("td", { children: E.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: E.rowProperty ? `${String(D[E.rowProperty] ?? "")} / ${String(D[E.categoryProperty] ?? "")}` : String(D[E.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(D[E.valueProperty] ?? "") })
                ] }, `${E.title}-${S}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  kd as ALERT_ICON,
  Sw as Accordion,
  _w as Alert,
  Ew as AutoComplete,
  xw as AutoGrid,
  Nw as Avatar,
  T2 as Badge,
  hk as Barcode,
  bw as Body,
  ek as Breadcrumb,
  Pn as Button,
  A2 as Card,
  ok as Carousel,
  pk as Chart,
  lw as CheckBox,
  Mw as CheckBoxList,
  Rw as ColorPicker,
  mw as Column,
  Xw as ContextMenuProvider,
  Wn as DEFAULT_OPERATOR_BY_TYPE,
  R0 as DEFAULT_PALETTE,
  Km as DEFAULT_THEMES,
  tw as DataFilter,
  nw as DataGrid,
  sw as DataList,
  Bw as DatePicker,
  xc as Dialog,
  dw as DialogProvider,
  Dw as DropDown,
  Vw as DropZone,
  B2 as EmptyState,
  Or as FILTER_OPERATORS,
  Qw as FabMenu,
  F2 as Field,
  q2 as Fieldset,
  _m as Footer,
  K2 as Form,
  H2 as FormField,
  ck as Gantt,
  mm as Header,
  we as Icon,
  ow as Input,
  rw as Label,
  yw as Layout,
  tk as Link,
  zw as ListBox,
  Pw as Mask,
  Gx as Menu,
  Pr as MenuItem,
  Lw as Numeric,
  Ma as Pager,
  Zw as PanelMenu,
  Yw as PanelMenuItem,
  Tw as Password,
  ak as PickList,
  dk as Pivot,
  Jw as ProfileMenu,
  ww as Progress,
  _k as QRCode,
  jw as RadioButtonList,
  Fw as Rating,
  pw as Row,
  ik as Scheduler,
  Kw as SecurityCode,
  On as Select,
  Iw as SelectBar,
  Cm as Sidebar,
  vw as SidebarToggle,
  Ww as SignaturePad,
  hw as Skeleton,
  Hw as Slider,
  Aw as SplitButton,
  sk as Splitter,
  gw as Stack,
  L2 as Stat,
  nk as Steps,
  aw as Switch,
  R2 as Table,
  Ow as Tabs,
  jc as Text,
  Cw as TextArea,
  Gi as TextBox,
  kw as ThemeSwitcher,
  $w as ThemeToggle,
  qw as TimeSpanPicker,
  uk as Timeline,
  fw as ToastProvider,
  rk as Toc,
  Zm as ToggleButton,
  iw as Tooltip,
  lk as Tree,
  Uw as Upload,
  fk as VirtualGrid,
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
  xs as formatValue,
  gs as getByPath,
  ja as groupItems,
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
  Gw as useContextMenu,
  cw as useDialog,
  Ll as useFormContext,
  ew as useFormField,
  jr as useMediaQuery,
  uw as useToast
};
