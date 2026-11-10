import { jsx as o, jsxs as A, Fragment as ot } from "react/jsx-runtime";
import { forwardRef as at, useId as ct, isValidElement as Kt, cloneElement as as, useState as W, useRef as ce, useEffect as Se, useCallback as q, useMemo as $e, useContext as An, createContext as dr, Fragment as ls, useLayoutEffect as Go, useImperativeHandle as $o, Children as Zr } from "react";
function Xr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const ll = "_button_1aval_1", il = "_filled_1aval_37", cl = "_flat_1aval_56", dl = "_outlined_1aval_59", ul = "_text_1aval_64", fl = "_loading_1aval_507", pl = "_spinner_1aval_510", hl = "_xs_1aval_526", _l = "_sm_1aval_532", ml = "_md_1aval_538", gl = "_lg_1aval_544", yl = "_xl_1aval_550", bl = "_iconOnly_1aval_556", xl = "_fullWidth_1aval_586", Dn = {
  button: ll,
  filled: il,
  flat: cl,
  outlined: dl,
  text: ul,
  "style-primary": "_style-primary_1aval_83",
  "style-secondary": "_style-secondary_1aval_102",
  "style-base": "_style-base_1aval_120",
  "style-light": "_style-light_1aval_140",
  "style-dark": "_style-dark_1aval_158",
  "style-danger": "_style-danger_1aval_177",
  "style-success": "_style-success_1aval_196",
  "style-warning": "_style-warning_1aval_215",
  "style-info": "_style-info_1aval_234",
  "shade-lighter": "_shade-lighter_1aval_419",
  "shade-light": "_shade-light_1aval_419",
  "shade-dark": "_shade-dark_1aval_429",
  "shade-darker": "_shade-darker_1aval_433",
  loading: fl,
  spinner: pl,
  "dx-spin": "_dx-spin_1aval_1",
  xs: hl,
  sm: _l,
  md: ml,
  lg: gl,
  xl: yl,
  iconOnly: bl,
  fullWidth: xl
};
function vl(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const dn = at(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: a,
      shade: i = "default",
      size: c = "md",
      fullWidth: s = !1,
      iconOnly: l = !1,
      loading: d = !1,
      visible: f = !0,
      className: p,
      disabled: g,
      children: _,
      ...b
    } = t;
    if (f === !1) return null;
    const h = vl(r, a), m = h.style === "light" || h.style === "dark" ? null : Xr(i), u = [
      Dn.button,
      Dn[h.variant],
      Dn[`style-${h.style}`],
      m ? Dn[m] : null,
      Dn[c],
      s ? Dn.fullWidth : null,
      l ? Dn.iconOnly : null,
      d ? Dn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      p
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ A(ot, { children: [
      d ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Dn.spinner }) : null,
      _
    ] }), $ = t.href;
    if ($ != null) {
      const { onClick: w, ...S } = b, O = g || d;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: $,
          className: u,
          "aria-disabled": O || void 0,
          "aria-busy": d || void 0,
          onClick: (P) => {
            if (O) {
              P.preventDefault();
              return;
            }
            w?.(P);
          },
          ...S,
          children: y
        }
      );
    }
    const { type: x = "button", ...k } = b;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: x,
        className: u,
        disabled: g || d,
        "aria-busy": d || void 0,
        ...k,
        children: y
      }
    );
  }
), wl = "_card_4vcae_1", kl = "_elevated_4vcae_8", Nl = "_filled_4vcae_13", Sl = "_outlined_4vcae_18", $l = "_interactive_4vcae_22", Ol = "_text_4vcae_30", El = "_header_4vcae_46", Cl = "_body_4vcae_53", Tl = "_footer_4vcae_63", Er = {
  card: wl,
  elevated: kl,
  filled: Nl,
  outlined: Sl,
  interactive: $l,
  text: Ol,
  header: El,
  body: Cl,
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
  const f = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ A(
      "div",
      {
        ref: d,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (p) => {
          s?.(p), !(!f || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
        },
        className: [Er.card, Er[t], a].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: Er.header, children: n }),
          /* @__PURE__ */ o("div", { className: Er.body, children: c }),
          r != null && /* @__PURE__ */ o("div", { className: Er.footer, children: r })
        ]
      }
    )
  );
});
function $a(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Ml = "_badge_1t0as_1", Al = "_xs_1t0as_21", Dl = "_sm_1t0as_26", Il = "_md_1t0as_31", zl = "_lg_1t0as_36", Ll = "_xl_1t0as_41", Pl = "_neutral_1t0as_47", Rl = "_primary_1t0as_52", jl = "_secondary_1t0as_61", Bl = "_light_1t0as_66", Fl = "_base_1t0as_71", Hl = "_dark_1t0as_76", Ul = "_info_1t0as_81", ql = "_success_1t0as_86", Wl = "_warning_1t0as_95", Kl = "_danger_1t0as_104", Gl = "_filled_1t0as_111", Vl = "_outlined_1t0as_161", Yl = "_text_1t0as_213", Cr = {
  badge: Ml,
  xs: Al,
  sm: Dl,
  md: Il,
  lg: zl,
  xl: Ll,
  neutral: Pl,
  primary: Rl,
  secondary: jl,
  light: Bl,
  base: Fl,
  dark: Hl,
  info: Ul,
  success: ql,
  warning: Wl,
  danger: Kl,
  filled: Gl,
  outlined: Vl,
  text: Yl,
  "shade-lighter": "_shade-lighter_1t0as_486",
  "shade-light": "_shade-light_1t0as_486",
  "shade-dark": "_shade-dark_1t0as_494",
  "shade-darker": "_shade-darker_1t0as_498"
}, MS = at(function({
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
  const f = t, p = $a(n, "filled"), g = Xr(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: d,
      className: [
        Cr.badge,
        Cr[a],
        Cr[f],
        Cr[p],
        g ? Cr[g] : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), Xl = "_icon_vn4jx_5", Zl = "_xs_vn4jx_24", Jl = "_sm_vn4jx_28", Ql = "_md_vn4jx_23", ei = "_lg_vn4jx_36", ti = "_xl_vn4jx_40", ws = {
  icon: Xl,
  xs: Zl,
  sm: Jl,
  md: Ql,
  lg: ei,
  xl: ti
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
], Ce = at(function({ icon: t, size: n, color: r, className: a, style: i, ...c }, s) {
  const l = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [ws.icon, l ? ws[n] : null, a].filter(Boolean).join(" "),
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
}), ni = "_stat_sjin9_1", ri = "_label_sjin9_8", oi = "_row_sjin9_16", si = "_value_sjin9_22", ai = "_delta_sjin9_28", li = "_success_sjin9_33", ii = "_danger_sjin9_37", ci = "_neutral_sjin9_41", di = "_hint_sjin9_45", er = {
  stat: ni,
  label: ri,
  row: oi,
  value: si,
  delta: ai,
  success: li,
  danger: ii,
  neutral: ci,
  hint: di
}, DS = at(function({ label: t, value: n, delta: r, deltaTone: a = "neutral", hint: i, className: c, ...s }, l) {
  return /* @__PURE__ */ A(
    "div",
    {
      ref: l,
      className: [er.stat, c].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: er.label, children: t }),
        /* @__PURE__ */ A("div", { className: er.row, children: [
          /* @__PURE__ */ o("div", { className: er.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [er.delta, er[a]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ o("div", { className: er.hint, children: i })
      ]
    }
  );
}), ui = "_wrap_ipozk_1", fi = "_table_ipozk_8", pi = "_caption_ipozk_14", hi = "_none_ipozk_51", _i = "_horizontal_ipozk_57", mi = "_vertical_ipozk_67", gi = "_alternating_ipozk_85", yi = "_start_ipozk_89", bi = "_center_ipozk_93", xi = "_end_ipozk_97", vi = "_empty_ipozk_101", Un = {
  wrap: ui,
  table: fi,
  caption: pi,
  none: hi,
  horizontal: _i,
  vertical: mi,
  alternating: gi,
  start: yi,
  center: bi,
  end: xi,
  empty: vi
};
function IS({
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
  const d = i === "default" || i === "both" ? "" : Un[i];
  return /* @__PURE__ */ A("div", { className: [Un.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ A(
      "table",
      {
        className: [
          Un.table,
          d,
          c ? Un.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          a != null && /* @__PURE__ */ o("caption", { className: Un.caption, children: a }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Un[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((p) => /* @__PURE__ */ o(
            "td",
            {
              className: p.align != null ? Un[p.align] : void 0,
              children: p.render != null ? p.render(f) : f[p.key]
            },
            p.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Un.empty, children: r })
  ] });
}
const wi = "_emptyState_1swxw_1", ki = "_icon_1swxw_13", Ni = "_title_1swxw_18", Si = "_description_1swxw_24", $i = "_action_1swxw_30", Tr = {
  emptyState: wi,
  icon: ki,
  title: Ni,
  description: Si,
  action: $i
};
function zS({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: a,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ A("div", { className: [Tr.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: Tr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: Tr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: Tr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: Tr.action, children: r })
  ] });
}
const Oi = "_field_149oz_1", Ei = "_label_149oz_8", Ci = "_required_149oz_14", Ti = "_hint_149oz_19", Mi = "_error_149oz_24", Mr = {
  field: Oi,
  label: Ei,
  required: Ci,
  hint: Ti,
  error: Mi
};
function cr({
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
  const d = r ?? a, f = ct(), p = ct(), g = ct();
  if (l === !1) return null;
  const _ = i != null ? p : d != null ? g : null, b = typeof c == "function" ? c({ inputId: f, hintId: g, errorId: p }) : c, h = Kt(b) && typeof b.props.id == "string" ? b.props.id : void 0, v = h ?? t ?? f, m = Kt(b) && (_ != null || h == null && typeof b.type == "string"), u = h != null || t != null || m, y = m && Kt(b) ? as(b, {
    id: v,
    "aria-describedby": _ != null ? [
      b.props["aria-describedby"],
      _
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ A("div", { className: [Mr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ A(
      "label",
      {
        className: Mr.label,
        htmlFor: u ? v : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: Mr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    i != null ? /* @__PURE__ */ o("div", { id: p, className: Mr.error, "aria-live": "polite", children: i }) : d != null ? /* @__PURE__ */ o("div", { id: g, className: Mr.hint, children: d }) : null
  ] });
}
const Ai = "_formfield_6e25e_1", Di = "_content_6e25e_8", Ii = "_floating_6e25e_43", zi = "_label_6e25e_111", Li = "_start_6e25e_132", Pi = "_required_6e25e_169", Ri = "_end_6e25e_175", ji = "_filled_6e25e_192", Bi = "_flat_6e25e_199", Fi = "_helper_6e25e_206", Hi = "_invalid_6e25e_211", $n = {
  formfield: Ai,
  content: Di,
  floating: Ii,
  label: zi,
  start: Li,
  required: Pi,
  end: Ri,
  filled: ji,
  flat: Bi,
  helper: Fi,
  invalid: Hi
};
function LS({
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
  className: f,
  visible: p = !0
}) {
  const g = ct(), _ = ct();
  if (p === !1) return null;
  const b = a ?? g, h = typeof d == "function" ? d({
    inputId: b
  }) : d, v = Kt(h) ? h.type : null, m = typeof v == "string", u = Kt(h) && typeof v != "symbol", y = Kt(h) ? h.props : null, $ = typeof y?.id == "string" ? y.id : void 0, x = m && Kt(h) ? h.type.toLowerCase() : null, k = x != null && (x === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : x === "button" || x === "meter" || x === "output" || x === "progress" || x === "select" || x === "textarea"), w = u && (r != null || s || $ == null && k), S = $ != null || a != null || w, O = x === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, P = x === "textarea" || x === "input" && (O == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(O)), D = w && Kt(h) ? as(
    h,
    {
      id: $ ?? b,
      ...i && P && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          _
        ].filter((C) => typeof C == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : h, I = e != null ? /* @__PURE__ */ A(
    "label",
    {
      className: $n.label,
      htmlFor: S ? $ ?? b : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ o("span", { className: $n.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ A(
    "div",
    {
      className: [
        $n.formfield,
        $n[c],
        i ? $n.floating : null,
        s ? $n.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : I,
        /* @__PURE__ */ A("div", { className: $n.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: $n.start, children: t }),
          D,
          i ? I : null,
          n != null && /* @__PURE__ */ o("div", { className: $n.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: _, className: $n.helper, children: r })
      ]
    }
  );
}
const Ui = "_fieldset_8x01p_1", qi = "_legend_8x01p_11", Wi = "_legendText_8x01p_20", Ki = "_toggle_8x01p_24", Gi = "_content_8x01p_45", Vi = "_summary_8x01p_49", tr = {
  fieldset: Ui,
  legend: qi,
  legendText: Wi,
  toggle: Ki,
  content: Gi,
  summary: Vi
};
function PS({
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
  expandAriaLabel: f,
  collapseAriaLabel: p,
  onExpand: g,
  onCollapse: _,
  children: b,
  className: h,
  visible: v = !0
}) {
  const m = ct(), [u, y] = W(c);
  if (v === !1) return null;
  const $ = i ?? u, x = a ? `${m}-content` : void 0, k = () => {
    const I = !$;
    i === void 0 && y(I), I ? _?.() : g?.();
  }, w = a || e != null || n != null || t != null, S = a ? $ : !1, O = a && $ && s != null, P = S ? l ?? "Expand" : d ?? "Collapse", D = S ? f ?? "Expand" : p ?? "Collapse";
  return /* @__PURE__ */ A(
    "fieldset",
    {
      className: [tr.fieldset, h].filter(Boolean).join(" "),
      children: [
        w ? /* @__PURE__ */ o("legend", { className: tr.legend, children: a ? /* @__PURE__ */ A(ot, { children: [
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: tr.toggle,
              title: P,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !S,
              "aria-controls": x,
              onClick: k,
              children: [
                /* @__PURE__ */ o(
                  Ce,
                  {
                    icon: S ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Ce, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: tr.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ A(ot, { children: [
          n != null && /* @__PURE__ */ o(Ce, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: tr.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: tr.content,
            id: x,
            hidden: S,
            children: b
          }
        ),
        O ? /* @__PURE__ */ o("div", { className: tr.summary, children: s }) : null
      ]
    }
  );
}
const Yi = "_form_abp5n_1", Xi = {
  form: Yi
}, is = dr(null);
function RS() {
  const e = An(is);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function jS({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: a,
  children: i,
  className: c
}) {
  const [s, l] = W({}), [d, f] = W(0), [p, g] = W(0), _ = ce(s);
  Se(() => {
    _.current = s;
  });
  const b = q((k) => {
    l(
      (w) => w[k.name] === k ? w : { ...w, [k.name]: k }
    );
  }, []), h = q((k) => {
    l((w) => {
      if (!(k in w)) return w;
      const S = { ...w };
      return delete S[k], S;
    });
  }, []), v = q(() => {
    const k = {};
    for (const w of Object.values(_.current)) {
      const S = w.validate();
      S.length > 0 && (k[w.name] = S);
    }
    return k;
  }, []), m = q(() => {
    const k = v();
    f((w) => w + 1), Object.keys(k).length === 0 ? t?.(e) : n?.(k);
  }, [v, e, t, n]), u = (k) => {
    r != null && a != null || (k.preventDefault(), m());
  }, y = q(() => {
    g((k) => k + 1), f(0);
  }, []), $ = $e(
    () => ({
      registerField: b,
      unregisterField: h,
      submit: m,
      submitCount: d,
      reset: y,
      resetCount: p
    }),
    [b, h, m, d, y, p]
  ), x = [Xi.form, c].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(is.Provider, { value: $, children: /* @__PURE__ */ o(
    "form",
    {
      className: x,
      onSubmit: u,
      action: r,
      method: a,
      noValidate: !0,
      children: i
    }
  ) });
}
const ur = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", BS = (e = "Required") => (t) => ur(t) ? e : null, FS = (e = "Invalid email") => (t) => ur(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, HS = (e, t = "Invalid format") => (n) => {
  if (ur(n)) return null;
  const r = e.lastIndex;
  e.lastIndex = 0;
  const a = e.test(String(n));
  return e.lastIndex = r, a ? null : t;
}, US = (e, t = `Minimum ${e} characters`) => (n) => ur(n) || String(n).length >= e ? null : t, qS = (e, t = `Maximum ${e} characters`) => (n) => ur(n) || String(n).length <= e ? null : t, WS = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (ur(r)) return null;
  const a = Number(r);
  return !Number.isNaN(a) && a >= e && a <= t ? null : n;
}, KS = (e, t = "Values do not match") => (n, r) => {
  if (ur(n)) return null;
  const a = typeof e == "function" ? e(r) : e;
  return n === a ? null : t;
}, GS = (e = "Required") => (t) => t === !0 ? null : e, VS = (e) => (t, n) => e(t, n);
function ks(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function YS(e, t) {
  const n = An(is), r = n?.registerField, a = n?.unregisterField, i = n?.submitCount ?? 0, c = n?.resetCount ?? 0, [s, l] = W(t?.initialValue), [d, f] = W(!1), [p, g] = W(!1), _ = ce(() => []);
  Se(() => {
    _.current = () => ks(t?.validate ?? [], s);
  }), Se(() => {
    if (!(!r || !a))
      return r({ name: e, validate: () => _.current() }), () => a(e);
  }, [e, r, a]);
  const [b, h] = W(c), [v, m] = W(i);
  c !== b && (h(c), l(t?.initialValue), f(!1), g(!1)), i !== v && (m(i), i > 0 && (f(!0), g(!1)));
  const u = d && !p ? ks(t?.validate ?? [], s) : [];
  return { value: s, setValue: ($) => {
    l($), g(!0);
  }, errors: u };
}
const Zi = "_select_1xe98_1", Ji = "_invalid_1xe98_33", Qi = "_xs_1xe98_40", ec = "_sm_1xe98_48", tc = "_md_1xe98_56", nc = "_lg_1xe98_62", rc = "_xl_1xe98_68", zo = {
  select: Zi,
  invalid: Ji,
  xs: Qi,
  sm: ec,
  md: tc,
  lg: nc,
  xl: rc
}, kr = at(
  function({ size: t = "md", invalid: n = !1, options: r, children: a, className: i, ...c }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          zo.select,
          zo[t],
          n ? zo.invalid : null,
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
), Oa = [
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
], Ar = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, oc = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function sc(e) {
  return oc.includes(e);
}
function go(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function Ns(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Kr(e, t) {
  const n = Ns(e), r = Ns(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const a = String(n ?? ""), i = String(r ?? "");
  return a < i ? -1 : a > i ? 1 : 0;
}
function Oo(e) {
  if (e.secondOperator == null) return !1;
  if (sc(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Ss(e, t, n) {
  const r = go(t, e.property), a = $s(
    r,
    e.value,
    e.operator,
    n
  );
  if (!Oo(e)) return a;
  const i = $s(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? a && i : a || i;
}
function $s(e, t, n, r) {
  const a = r === "CaseInsensitive", i = (l) => a && typeof l == "string" ? l.toLowerCase() : l, c = i(e), s = i(t);
  switch (n) {
    case "Equals":
      return c === s || Array.isArray(c) && c.some((l) => i(l) === s);
    case "NotEquals":
      return c !== s && !(Array.isArray(c) && c.some((l) => i(l) === s));
    case "LessThan":
      return Kr(c, s) < 0;
    case "LessThanOrEquals":
      return Kr(c, s) <= 0;
    case "GreaterThan":
      return Kr(c, s) > 0;
    case "GreaterThanOrEquals":
      return Kr(c, s) >= 0;
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
function cs(e) {
  return "filters" in e;
}
function Ea(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (cs(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (c) => Ea(e, c, { logicalOperator: i, caseSensitivity: a })
    );
  }
  return t.operator === "Custom", Ss(t, e, a);
}
function Ca(e, t, n = {}) {
  return e.filter((r) => Ea(r, t, n));
}
function ac(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function sn(e) {
  return typeof e == "string" ? `"${ac(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(sn).join(", ")}]` : `"${String(e)}"`;
}
function lc(e) {
  const t = (a, i) => {
    switch (a) {
      case "Equals":
        return `${e.property}.Equals(${sn(i)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${sn(i)})`;
      case "LessThan":
        return `${e.property}.LessThan(${sn(i)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${sn(i)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${sn(i)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${sn(i)})`;
      case "Contains":
        return `${e.property}.Contains(${sn(i)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${sn(i)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${sn(i)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${sn(i)})`;
      case "In":
        return `${e.property}.In(${sn(i)})`;
      case "NotIn":
        return `!${e.property}.In(${sn(i)})`;
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
  if (!Oo(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function ic(e) {
  return cs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ic).filter(Boolean).join(` ${e.operator} `)})` : lc(e);
}
function cc(e) {
  return e.replace(/'/g, "''");
}
const dc = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function uc(e, t) {
  const n = e.property, r = t === "CaseInsensitive", a = (d) => r ? `tolower(${d})` : d, i = (d) => typeof d == "string" ? `'${cc(d)}'` : d instanceof Date ? `'${d.toISOString()}'` : String(d ?? ""), c = (d, f) => {
    const p = typeof f == "string", g = p && r ? a(n) : n;
    switch (d) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${g} ${dc[d]} ${p && r ? a(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(i(f))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(i(f))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${g} in (${f.map((_) => i(_)).join(", ")})` : `${g} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${g} in (${f.map((_) => i(_)).join(", ")}))` : `not(${g} in (${i(f)}))`;
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
  if (!Oo(e))
    return c(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${c(e.operator, e.value)} ${s} ${c(
    l,
    e.secondValue
  )})`;
}
function fc(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (cs(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => fc(a, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return uc(e, n);
}
function pc(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const a of t) {
      const i = a.sortOrder === "Ascending" ? 1 : -1, c = Kr(
        go(n, a.property),
        go(r, a.property)
      );
      if (c !== 0) return c * i;
    }
    return 0;
  });
}
const hc = "_filter_1dvqt_1", _c = "_rows_1dvqt_9", mc = "_row_1dvqt_9", gc = "_join_1dvqt_21", yc = "_property_1dvqt_30", bc = "_operator_1dvqt_34", xc = "_value_1dvqt_38", vc = "_remove_1dvqt_42", wc = "_bar_1dvqt_58", kc = "_add_1dvqt_64", Nc = "_custom_1dvqt_78", Sc = "_summary_1dvqt_82", $c = "_second_1dvqt_87", Oc = "_secondAdd_1dvqt_91", Ec = "_addSecond_1dvqt_95", Cc = "_joinSelect_1dvqt_109", vt = {
  filter: hc,
  rows: _c,
  row: mc,
  join: gc,
  property: yc,
  operator: bc,
  value: xc,
  remove: vc,
  bar: wc,
  add: kc,
  custom: Nc,
  summary: Sc,
  second: $c,
  secondAdd: Oc,
  addSecond: Ec,
  joinSelect: Cc
}, Dr = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Os = {
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
function Es({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(ot, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      kr,
      {
        "aria-label": e.title ?? e.name,
        className: vt.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      kr,
      {
        "aria-label": e.title ?? e.name,
        className: vt.value,
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
      className: vt.value,
      ...a,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        r === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function XS({
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
  const [d, f] = W(
    () => r != null && r.length > 0 ? r.map((m, u) => ({ id: u, ...m })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Ar[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), p = (m, u) => {
    f(
      (y) => y.map(($) => $.id === m ? { ...$, ...u } : $)
    );
  }, g = () => {
    const m = d[d.length - 1], u = Math.max(0, ...d.map(($) => $.id)) + 1, y = e[0];
    f(($) => [
      ...$,
      {
        id: u,
        property: m?.property ?? y?.name ?? "",
        operator: Ar[e.find(
          (x) => x.name === (m?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, _ = (m) => {
    f(
      (u) => u.length > 1 ? u.filter((y) => y.id !== m) : u
    );
  }, b = $e(() => {
    const m = [];
    for (const u of d) {
      if (u.property === "" || (u.value == null || u.value === "") && !Dr.includes(u.operator)) continue;
      const $ = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: x } = u;
      x != null && Oo(u) && ($.secondOperator = x, $.secondValue = u.secondValue, $.logicalOperator = u.logicalOperator ?? "And"), m.push($);
    }
    return m;
  }, [d]), h = $e(() => s == null || b.length === 0 ? s : Ca(s, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [s, b, t, n]);
  Se(() => {
    c != null && s != null && c(h ?? []);
  }, [h]);
  const v = (m) => e.find((u) => u.name === m) ?? { name: m, type: "string" };
  return /* @__PURE__ */ A("div", { className: [vt.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: vt.rows, role: "group", "aria-label": "Filter conditions", children: d.map((m, u) => {
      const y = v(m.property), $ = a ? [Ar[y.type ?? "string"]] : Oa, x = !Dr.includes(m.operator), k = m.secondOperator != null;
      return /* @__PURE__ */ A(ls, { children: [
        /* @__PURE__ */ A("div", { className: vt.row, children: [
          u > 0 ? /* @__PURE__ */ o("span", { className: vt.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            kr,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: vt.property,
              value: m.property,
              onChange: (w) => {
                const S = e.find(
                  (O) => O.name === w.target.value
                );
                p(m.id, {
                  property: w.target.value,
                  operator: Ar[S?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((w) => ({
                value: w.name,
                label: w.title ?? w.name
              }))
            }
          ),
          /* @__PURE__ */ o(
            kr,
            {
              "aria-label": `Condition ${u + 1} operator`,
              className: vt.operator,
              value: m.operator,
              onChange: (w) => {
                const S = w.target.value;
                p(
                  m.id,
                  Dr.includes(S) ? {
                    operator: S,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: S }
                );
              },
              options: $.map((w) => ({
                value: w,
                label: Os[w]
              }))
            }
          ),
          x ? /* @__PURE__ */ o(
            Es,
            {
              property: y,
              value: m.value,
              onChange: (w) => p(m.id, { value: w })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vt.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => _(m.id),
              children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
            }
          )
        ] }),
        x ? k ? /* @__PURE__ */ A(
          "div",
          {
            className: [vt.row, vt.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                kr,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: vt.joinSelect,
                  value: m.logicalOperator ?? "And",
                  onChange: (w) => p(m.id, {
                    logicalOperator: w.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                kr,
                {
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: vt.operator,
                  value: m.secondOperator,
                  onChange: (w) => {
                    const S = w.target.value;
                    p(
                      m.id,
                      Dr.includes(S) ? { secondOperator: S, secondValue: void 0 } : { secondOperator: S }
                    );
                  },
                  options: $.map((w) => ({
                    value: w,
                    label: Os[w]
                  }))
                }
              ),
              m.secondOperator == null || !Dr.includes(m.secondOperator) ? /* @__PURE__ */ o(
                Es,
                {
                  property: y,
                  value: m.secondValue,
                  onChange: (w) => p(m.id, { secondValue: w })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: vt.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
                  onClick: () => p(m.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: vt.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: vt.addSecond,
            onClick: () => p(m.id, {
              secondOperator: Ar[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, m.id);
    }) }),
    /* @__PURE__ */ A("div", { className: vt.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: vt.add, onClick: g, children: "Add filter" }),
      l != null ? /* @__PURE__ */ o("div", { className: vt.custom, children: l }) : null,
      s != null ? /* @__PURE__ */ A("span", { className: vt.summary, "aria-live": "polite", children: [
        h?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const Tc = "_pager_1du31_1", Mc = "_alignLeft_1du31_10", Ac = "_alignCenter_1du31_14", Dc = "_alignRight_1du31_18", Ic = "_alignJustify_1du31_22", zc = "_summary_1du31_26", Lc = "_controls_1du31_31", Pc = "_button_1du31_37", Rc = "_active_1du31_73", jc = "_ellipsis_1du31_85", Bc = "_size_1du31_91", Ut = {
  pager: Tc,
  alignLeft: Mc,
  alignCenter: Ac,
  alignRight: Dc,
  alignJustify: Ic,
  summary: zc,
  controls: Lc,
  button: Pc,
  active: Rc,
  ellipsis: jc,
  size: Bc
};
function Fc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Cs(e, t) {
  return e.replace("{0}", String(t));
}
function Hc(e, t, n) {
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
function Uc({
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
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: p,
  pageSizeText: g = "Items per page",
  firstPageTitle: _ = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: h = "Next page",
  lastPageTitle: v = "Last page",
  pageTitleFormat: m = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: y,
  onPageSizeChange: $,
  ariaLabel: x = "Pagination",
  className: k,
  visible: w = !0
}) {
  const S = n ?? r, [O, P] = W(S), D = n !== void 0, I = D ? S : O, C = Math.max(1, Math.ceil(e / t)), N = Math.min(Math.max(1, I), C), T = l ?? !0, M = c || C > 1, L = Hc(N, C, i), z = q(
    (re) => {
      const B = Math.min(Math.max(1, re), C);
      D || P(B);
      const H = (B - 1) * t;
      y?.({
        page: B,
        skip: H,
        top: t,
        pageCount: C,
        pageSize: t
      });
    },
    [D, y, C, t]
  ), F = s === "center" ? Ut.alignCenter : s === "right" ? Ut.alignRight : s === "justify" ? Ut.alignJustify : Ut.alignLeft, V = {
    count: e,
    pageNumber: N,
    pageSize: t,
    pageCount: C
  }, ne = (re) => {
    const B = Array.from(
      re.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), H = B.indexOf(document.activeElement);
    H !== -1 && (re.key === "ArrowRight" || re.key === "ArrowDown" ? (re.preventDefault(), (B[H + 1] ?? B[0])?.focus()) : re.key === "ArrowLeft" || re.key === "ArrowUp" ? (re.preventDefault(), (B[H - 1] ?? B[B.length - 1])?.focus()) : re.key === "Home" ? (re.preventDefault(), B[0]?.focus()) : re.key === "End" && (re.preventDefault(), B[B.length - 1]?.focus()));
  };
  return w === !1 || !M ? null : /* @__PURE__ */ A(
    "nav",
    {
      className: [Ut.pager, F, k].filter(Boolean).join(" "),
      "aria-label": x,
      children: [
        T && /* @__PURE__ */ o("span", { className: Ut.summary, "aria-live": "polite", children: p ? p(V) : Fc(f, N, C, e) }),
        /* @__PURE__ */ A(
          "div",
          {
            className: Ut.controls,
            role: "group",
            "aria-label": x,
            onKeyDown: ne,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N <= 1,
                  onClick: () => z(1),
                  "aria-label": _,
                  title: _,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N <= 1,
                  onClick: () => z(N - 1),
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              L.map(
                (re, B) => re === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ut.ellipsis, "aria-hidden": "true", children: "…" }, `e${B}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": re,
                    className: [Ut.button, re === N ? Ut.active : ""].filter(Boolean).join(" "),
                    "aria-current": re === N ? "page" : void 0,
                    "aria-label": Cs(u, re),
                    title: Cs(m, re),
                    onClick: () => z(re),
                    children: re
                  },
                  re
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N >= C,
                  onClick: () => z(N + 1),
                  "aria-label": h,
                  title: h,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ut.button,
                  disabled: N >= C,
                  onClick: () => z(C),
                  "aria-label": v,
                  title: v,
                  children: "»"
                }
              )
            ]
          }
        ),
        d && a && a.length > 0 && /* @__PURE__ */ A("label", { className: Ut.size, children: [
          /* @__PURE__ */ o("span", { children: g }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (re) => $?.(Number(re.target.value)),
              "aria-label": g,
              children: a.map((re) => /* @__PURE__ */ o("option", { value: re, children: re }, re))
            }
          )
        ] })
      ]
    }
  );
}
function Vo(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: a, ...i } = e;
  return /* @__PURE__ */ o(
    Uc,
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
    const f = t[l];
    if (f === void 0)
      return s.map((h) => ({ type: "row", row: h }));
    const p = i(f), g = /* @__PURE__ */ new Map(), _ = [];
    s.forEach((h) => {
      const v = String(a(h, f) ?? ""), m = g.get(v);
      m ? m.push(h) : (g.set(v, [h]), _.push(v));
    });
    const b = [];
    return _.forEach((h) => {
      const v = g.get(h), m = [...d, h].join(Ta), u = v[0], y = u !== void 0 ? a(u, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: m,
          display: yo(y, p?.format),
          property: f,
          title: p?.title ?? f,
          count: v.length,
          level: l
        }
      }), r.has(m) && b.push(...c(v, l + 1, [...d, h]));
    }), b;
  };
  return c(e, 0, []);
}
function Ts(e, t, n) {
  const r = /* @__PURE__ */ new Set(), a = (i, c, s) => {
    const l = t[c];
    if (l === void 0 || i.length === 0) return;
    const d = /* @__PURE__ */ new Map(), f = [];
    i.forEach((p) => {
      const g = String(n(p, l) ?? ""), _ = d.get(g);
      _ ? _.push(p) : (d.set(g, [p]), f.push(g));
    }), f.forEach((p) => {
      const g = [...s, p].join(Ta);
      r.add(g), a(d.get(p), c + 1, [...s, p]);
    });
  };
  return a(e, 0, []), r;
}
function to(e, t) {
  return e.property ?? `col-${t}`;
}
function Wc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: a, column: i }) => {
    if (!i.frozen) return;
    n[a] = r === 0 ? "0px" : `${r}px`;
    const c = t[a] ?? i.width ?? "8rem";
    r += parseFloat(c);
  }), n;
}
function Kc(e, t) {
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
function lr(e, t) {
  if (t != null)
    return go(e, t);
}
function yo(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Ms = [
  "Ascending",
  "Descending",
  null
];
function Gc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), a = Ms[(r ? Ms.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return a == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: a }
  ] : [{ property: t, sortOrder: a }];
}
function Vc(e, t) {
  return pc(e, t);
}
function Yc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), a = Math.min(Math.max(1, t), r), i = (a - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: a,
    total: e.length
  };
}
function Xc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, l]) => ({
      property: s,
      operator: l.operator ?? "Contains",
      value: Kc(
        l.value,
        n.types?.[s] ?? "string"
      )
    })
  ), a = r.length > 0 ? Ca(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Vc(a, t.sorts);
  return {
    ...Yc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function As(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Zc(e, t, n) {
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
function Jc(e, t, n = lr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, a = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    a.push(
      t.map((c) => r(yo(n(i, c.property), c.format))).join(",")
    );
  }), `${a.join(`\r
`)}\r
`;
}
const Qc = "_grid_xrf2a_1", ed = "_toolbar_xrf2a_8", td = "_picker_xrf2a_13", nd = "_pickerButton_xrf2a_17", rd = "_pickerPanel_xrf2a_31", od = "_pickerItem_xrf2a_46", sd = "_groupPanel_xrf2a_55", ad = "_groupPanelActive_xrf2a_66", ld = "_groupPanelText_xrf2a_70", id = "_groupChip_xrf2a_74", cd = "_groupRemove_xrf2a_85", dd = "_groupRow_xrf2a_94", ud = "_groupCell_xrf2a_98", fd = "_groupToggle_xrf2a_104", pd = "_editRow_xrf2a_117", hd = "_editCell_xrf2a_121", _d = "_editInput_xrf2a_127", md = "_commandCell_xrf2a_137", gd = "_commandButton_xrf2a_144", yd = "_data_xrf2a_159", bd = "_table_xrf2a_166", xd = "_header_xrf2a_172", vd = "_center_xrf2a_185", wd = "_right_xrf2a_189", kd = "_sortButton_xrf2a_193", Nd = "_sortIndicator_xrf2a_211", Sd = "_sortIndex_xrf2a_215", $d = "_cell_xrf2a_226", Od = "_clickable_xrf2a_241", Ed = "_frozen_xrf2a_249", Cd = "_selected_xrf2a_255", Td = "_resizeHandle_xrf2a_263", Md = "_filterCell_xrf2a_281", Ad = "_filterSelect_xrf2a_292", Dd = "_filterInput_xrf2a_303", Id = "_empty_xrf2a_314", zd = "_loading_xrf2a_320", Ld = "_visuallyHidden_xrf2a_334", Pd = "_virtualScroller_xrf2a_343", Rd = "_spacerRow_xrf2a_348", jd = "_footerRow_xrf2a_353", Bd = "_footerCell_xrf2a_357", Fd = "_footerValue_xrf2a_364", Ee = {
  grid: Qc,
  toolbar: ed,
  picker: td,
  pickerButton: nd,
  pickerPanel: rd,
  pickerItem: od,
  groupPanel: sd,
  groupPanelActive: ad,
  groupPanelText: ld,
  groupChip: id,
  groupRemove: cd,
  groupRow: dd,
  groupCell: ud,
  groupToggle: fd,
  editRow: pd,
  editCell: hd,
  editInput: _d,
  commandCell: md,
  commandButton: gd,
  data: yd,
  table: bd,
  header: xd,
  center: vd,
  right: wd,
  sortButton: kd,
  sortIndicator: Nd,
  sortIndex: Sd,
  cell: $d,
  clickable: Od,
  frozen: Ed,
  selected: Cd,
  resizeHandle: Td,
  filterCell: Md,
  filterSelect: Ad,
  filterInput: Dd,
  empty: Id,
  loading: zd,
  visuallyHidden: Ld,
  virtualScroller: Pd,
  spacerRow: Rd,
  footerRow: jd,
  footerCell: Bd,
  footerValue: Fd
}, Hd = {
  Ascending: "ascending",
  Descending: "descending"
};
function Ds(e, t) {
  return e.filterable ?? t;
}
function Ud(e, t) {
  return e.sortable ?? t;
}
function qd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function ZS({
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
  pageSize: f = 10,
  pageSizeOptions: p,
  pageNumbersCount: g = 5,
  pagerPosition: _ = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: h = !0,
  selectionMode: v = "None",
  selectedKeys: m,
  onSelectionChange: u,
  showColumnPicker: y = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: k = !1,
  allowGrouping: w = !1,
  groupPanelText: S = "Drag a column header here to group",
  groupExpanded: O = !0,
  aggregates: P,
  showExportButton: D = !1,
  exportFileName: I = "grid-data",
  serverMode: C = !1,
  totalCount: N,
  onRangeChange: T,
  virtualize: M = !1,
  virtualRowHeight: L = 40,
  virtualHeight: z = 480,
  editMode: F = "None",
  allowRowCreate: V = !1,
  onRowUpdate: ne,
  onRowCreate: re,
  onRowDelete: B,
  isLoading: H = !1,
  empty: ie = "No records found",
  ariaLabel: Y,
  className: G,
  onRowClick: X
}) {
  const _e = Y != null ? `${Y} ` : "", [te, ge] = W([]), [Z, Oe] = W(
    /* @__PURE__ */ new Map()
  ), [ae, De] = W(1), [be, We] = W(f), [Je, Ge] = W(
    () => e.map((K, J) => to(K, J))
  ), [Qe, He] = W(
    () => new Set(
      e.map((K, J) => K.visible !== !1 ? to(K, J) : "").filter(Boolean)
    )
  ), [gt, oe] = W({}), [Te, lt] = W(!1), [ze, st] = W([]), [Xe, Ct] = W(
    null
  ), [yt, it] = W(null), [ft, Ve] = W({}), [Tt, le] = W(0), [Le, wt] = W(z), Mt = ce(null), bt = ce(null), R = $e(() => {
    const K = /* @__PURE__ */ new Map();
    return e.forEach((J, xe) => K.set(to(J, xe), J)), K;
  }, [e]), Q = $e(
    () => Je.filter((K) => Qe.has(K)).map((K) => ({ key: K, column: R.get(K) })).filter(
      (K) => K.column != null
    ),
    [Je, Qe, R]
  ), ye = $e(
    () => Wc(Q, gt),
    [Q, gt]
  ), ke = F !== "None" || B != null || V, pe = $e(() => {
    if (C) {
      const K = N ?? t.length, J = Math.max(1, Math.ceil(K / be));
      return {
        items: [...t],
        filtered: [...t],
        total: K,
        pageCount: J,
        pageNumber: ae,
        pageSize: be,
        sorts: te,
        filters: Z
      };
    }
    return Xc(
      t,
      {
        sorts: te,
        filters: Z,
        pageNumber: ae,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: d ? be : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: l,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((K) => K.type != null && K.property != null).map((K) => [
            K.property,
            K.type
          ])
        )
      }
    );
  }, [
    t,
    te,
    Z,
    ae,
    be,
    l,
    s,
    e,
    C,
    N,
    d
  ]), U = ce(T);
  Se(() => {
    U.current = T;
  });
  const he = $e(
    () => [...Z.entries()].filter(([, K]) => K.value !== "" && K.value !== void 0).map(([K, J]) => ({
      property: K,
      operator: J.operator ?? As(
        e.find((xe) => xe.property === K)?.type ?? "string"
      ),
      value: J.value ?? ""
    })),
    [Z, e]
  );
  Se(() => {
    !C || U.current == null || U.current({
      start: (ae - 1) * be,
      count: be,
      pageNumber: ae,
      pageSize: be,
      sorts: te,
      filters: he,
      logicalOperator: l
    });
  }, [
    C,
    ae,
    be,
    te,
    he,
    l
  ]);
  const Re = $e(() => new Set(ze), [ze]), Ie = $e(() => Xe || (O ? Ts(pe.items, ze, lr) : /* @__PURE__ */ new Set()), [Xe, O, pe.items, ze]), It = $e(
    () => qc(pe.items, ze, e, Ie, lr),
    [pe.items, ze, e, Ie]
  ), et = $e(
    () => ze.length > 0 ? Q.filter(
      (K) => K.column.property == null || !Re.has(K.column.property)
    ) : Q,
    [Q, ze, Re]
  ), gn = (K) => {
    K !== "" && ge(Gc(te, K, { multi: a }));
  }, Sn = (K, J) => {
    Oe((xe) => {
      const ve = new Map(xe);
      return ve.set(K, J), ve;
    }), De(1);
  }, ee = (K) => {
    We(K), De(1);
  }, de = (K) => {
    if (v === "None") return;
    const J = n(K), xe = m ?? [];
    let ve;
    v === "Single" ? ve = xe.length === 1 && xe[0] === J ? [] : [J] : ve = xe.includes(J) ? xe.filter((nt) => nt !== J) : [...xe, J], u?.(ve);
  }, me = (K) => {
    X?.(K);
  }, Ne = (K, J, xe) => {
    Mt.current = { key: K, startX: J, startWidth: xe };
  }, we = (K) => {
    const J = Mt.current;
    if (!J) return;
    const xe = K - J.startX, ve = Math.max(48, J.startWidth + xe);
    oe((nt) => ({ ...nt, [J.key]: `${ve}px` }));
  }, Ae = () => {
    Mt.current = null;
  }, Ye = (K) => {
    bt.current = K;
  }, Fe = (K) => {
    const J = bt.current;
    bt.current = null, !(!J || J === K) && Ge((xe) => {
      const ve = [...xe], nt = ve.indexOf(J), zt = ve.indexOf(K);
      return nt < 0 || zt < 0 ? xe : (ve.splice(nt, 1), ve.splice(zt, 0, J), ve);
    });
  }, dt = (K) => {
    He((J) => {
      const xe = new Set(J);
      return xe.has(K) ? xe.delete(K) : xe.add(K), xe;
    });
  }, xt = () => {
    const K = bt.current;
    if (bt.current = null, !K || !w) return;
    const xe = R.get(K)?.property;
    xe && (st(
      (ve) => ve.includes(xe) ? ve : [...ve, xe]
    ), Ct(null));
  }, je = (K) => {
    st((J) => J.filter((xe) => xe !== K)), Ct(null);
  }, tt = (K) => {
    Ct((J) => {
      const xe = J ?? (O ? Ts(pe.items, ze, lr) : /* @__PURE__ */ new Set()), ve = new Set(xe);
      return ve.has(K) ? ve.delete(K) : ve.add(K), ve;
    });
  }, ut = (K) => {
    const J = {};
    e.forEach((xe) => {
      xe.property && (J[xe.property] = lr(K, xe.property));
    }), Ve(J), it(String(n(K)));
  }, Qt = () => {
    const K = {};
    e.forEach((J) => {
      J.property && J.type === "boolean" && (K[J.property] = !1);
    }), Ve(K), it("__new__");
  }, At = () => {
    it(null), Ve({});
  }, un = (K) => {
    if (yt === "__new__") {
      const J = Object.fromEntries(
        e.filter((xe) => xe.property).map((xe) => [xe.property, ft[xe.property]])
      );
      re?.(J);
    } else if (K != null) {
      const J = { ...K, ...ft };
      ne?.(K, J);
    }
    At();
  }, Jn = d && (_ === "Top" || _ === "TopAndBottom"), Qn = d && (_ === "Bottom" || _ === "TopAndBottom"), Hn = c && e.some((K) => Ds(K, c)), To = (K, J, xe) => K.render ? K.render(J, { index: 0 }) : yo(lr(J, K.property), K.format), Mo = (K) => {
    const J = [Ee.cell];
    return K.align === "center" && J.push(Ee.center), K.align === "right" && J.push(Ee.right), K.frozen && J.push(Ee.frozen), J.join(" ");
  }, yn = C ? t : pe.filtered, Jr = () => {
    const K = Jc(
      yn,
      et.map((nt) => nt.column)
    ), J = new Blob([`\uFEFF${K}`], {
      type: "text/csv;charset=utf-8"
    }), xe = URL.createObjectURL(J), ve = document.createElement("a");
    ve.href = xe, ve.download = `${I}.csv`, document.body.appendChild(ve), ve.click(), ve.remove(), URL.revokeObjectURL(xe);
  }, bn = It.length, Ft = $e(() => {
    if (!M || bn === 0)
      return { start: 0, end: bn, top: 0, bottom: 0 };
    const K = 5, J = Math.max(
      0,
      Math.floor(Tt / L) - K
    ), xe = Math.ceil(Le / L) + K * 2, ve = Math.min(bn, J + xe), nt = J * L, zt = Math.max(0, (bn - ve) * L);
    return { start: J, end: ve, top: nt, bottom: zt };
  }, [M, bn, Tt, L, Le]), Or = et.length + (ke ? 1 : 0);
  return /* @__PURE__ */ A("div", { className: [Ee.grid, G].filter(Boolean).join(" "), children: [
    Jn && /* @__PURE__ */ o(
      Vo,
      {
        pageNumber: pe.pageNumber,
        pageSize: pe.pageSize,
        count: pe.total,
        pageSizeOptions: p,
        pageNumbersCount: g,
        showSummary: b,
        showPageSizeSelector: h,
        ariaLabel: `${_e}${Qn ? "Pagination (top)" : "Pagination"}`,
        onPageChange: De,
        onPageSizeChange: ee
      }
    ),
    (w || V || y || D) && /* @__PURE__ */ A("div", { className: Ee.toolbar, children: [
      w && // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- drop target for drag-to-group (pointer affordance)
      /* @__PURE__ */ o(
        "div",
        {
          className: [
            Ee.groupPanel,
            ze.length > 0 ? Ee.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: w ? (K) => K.preventDefault() : void 0,
          onDrop: w ? xt : void 0,
          children: ze.length > 0 ? ze.map((K) => {
            const J = e.find((xe) => xe.property === K)?.title ?? K;
            return /* @__PURE__ */ A("span", { className: Ee.groupChip, children: [
              J,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ee.groupRemove,
                  onClick: () => je(K),
                  "aria-label": `Remove group by ${J}`,
                  children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
                }
              )
            ] }, K);
          }) : /* @__PURE__ */ o("span", { className: Ee.groupPanelText, children: S })
        }
      ),
      V && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ee.pickerButton,
          onClick: Qt,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ A("div", { className: Ee.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ee.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Te,
            onClick: () => lt((K) => !K),
            children: $
          }
        ),
        Te && /* @__PURE__ */ o(
          "div",
          {
            className: Ee.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((K, J) => {
              const xe = to(K, J);
              return /* @__PURE__ */ A("label", { className: Ee.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: Qe.has(xe),
                    onChange: () => dt(xe)
                  }
                ),
                K.title ?? K.property
              ] }, xe);
            })
          }
        )
      ] }),
      D && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ee.pickerButton,
          onClick: Jr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ A(
      "div",
      {
        className: [Ee.data, M ? Ee.virtualScroller : ""].filter(Boolean).join(" "),
        style: M ? { maxHeight: z } : void 0,
        onScroll: M ? (K) => {
          le(K.currentTarget.scrollTop), wt(K.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ A(
            "table",
            {
              className: Ee.table,
              role: "grid",
              "aria-rowcount": (M ? bn : pe.total) + 1,
              "aria-label": Y,
              "aria-busy": H || void 0,
              children: [
                /* @__PURE__ */ A("colgroup", { children: [
                  et.map(({ key: K, column: J }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: gt[K] ?? J.width,
                        minWidth: J.minWidth,
                        maxWidth: J.maxWidth
                      }
                    },
                    K
                  )),
                  ke && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ A("thead", { children: [
                  /* @__PURE__ */ A("tr", { children: [
                    et.map(({ key: K, column: J }) => {
                      const xe = Ud(J, r), ve = te.find((St) => St.property === J.property), nt = ve ? te.indexOf(ve) + 1 : 0, zt = J.align ?? "left";
                      return /* @__PURE__ */ A(
                        "th",
                        {
                          "aria-sort": xe && ve ? Hd[ve.sortOrder] : "none",
                          className: [
                            Ee.header,
                            zt === "center" ? Ee.center : "",
                            zt === "right" ? Ee.right : "",
                            J.frozen ? Ee.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: J.frozen ? { left: ye[K] } : void 0,
                          scope: "col",
                          draggable: k || w || void 0,
                          onDragStart: k || w ? (St) => {
                            St.dataTransfer && (St.dataTransfer.effectAllowed = "move"), Ye(K);
                          } : void 0,
                          onDragOver: k ? (St) => St.preventDefault() : void 0,
                          onDrop: k ? () => Fe(K) : void 0,
                          children: [
                            xe ? /* @__PURE__ */ A(
                              "button",
                              {
                                type: "button",
                                className: Ee.sortButton,
                                onClick: () => J.property != null && gn(J.property),
                                "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${J.title ?? J.property} descending` : `Sort ${J.title ?? J.property} ascending` : `Sort ${J.title ?? J.property} ascending`,
                                children: [
                                  J.title ?? J.property,
                                  ve && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Ee.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ve.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  nt > 1 && i && /* @__PURE__ */ o("span", { className: Ee.sortIndex, children: nt })
                                ]
                              }
                            ) : J.title ?? J.property,
                            x && // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- pointer-drag column resize; keyboard column resize is not implemented
                            /* @__PURE__ */ o(
                              "span",
                              {
                                className: Ee.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${J.title ?? J.property}`,
                                onMouseDown: (St) => {
                                  St.preventDefault(), St.stopPropagation();
                                  const xn = gt[K] ?? J.width, Dt = xn ? parseFloat(xn) : 96;
                                  Ne(
                                    K,
                                    St.clientX,
                                    Number.isFinite(Dt) ? Dt : 96
                                  );
                                },
                                onMouseMove: (St) => {
                                  Mt.current?.key === K && we(St.clientX);
                                },
                                onMouseUp: Ae,
                                onMouseLeave: () => {
                                  Mt.current?.key === K && Ae();
                                }
                              }
                            )
                          ]
                        },
                        K
                      );
                    }),
                    ke && /* @__PURE__ */ o("th", { className: Ee.header, scope: "col", children: "Actions" })
                  ] }),
                  Hn && /* @__PURE__ */ o("tr", { children: et.map(({ key: K, column: J }) => {
                    if (!Ds(J, c))
                      return /* @__PURE__ */ o("td", { className: Ee.filterCell }, K);
                    const xe = Z.get(J.property ?? "");
                    return /* @__PURE__ */ A("td", { className: Ee.filterCell, children: [
                      /* @__PURE__ */ A(
                        "label",
                        {
                          className: Ee.visuallyHidden,
                          htmlFor: `df-${J.property}`,
                          children: [
                            "Filter ",
                            J.title ?? J.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${J.property}`,
                          className: Ee.filterSelect,
                          value: xe?.operator ?? As(J.type ?? "string"),
                          onChange: (ve) => Sn(J.property ?? "", {
                            ...xe,
                            operator: ve.target.value
                          }),
                          "aria-label": `${J.title ?? J.property} operator`,
                          children: Oa.filter((ve) => ve !== "Custom").map(
                            (ve) => /* @__PURE__ */ o("option", { value: ve, children: ve }, ve)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: Ee.filterInput,
                          value: xe?.value ?? "",
                          onChange: (ve) => Sn(J.property ?? "", {
                            ...xe,
                            value: ve.target.value
                          }),
                          placeholder: `Filter ${J.title ?? J.property}`,
                          "aria-label": `${J.title ?? J.property} value`
                        }
                      )
                    ] }, K);
                  }) })
                ] }),
                /* @__PURE__ */ A("tbody", { children: [
                  yt === "__new__" && /* @__PURE__ */ A("tr", { className: Ee.editRow, children: [
                    et.map(({ key: K, column: J }) => /* @__PURE__ */ o("td", { className: Ee.editCell, children: J.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Ee.editInput,
                        type: J.type === "number" ? "number" : J.type === "boolean" ? "checkbox" : "text",
                        checked: J.type === "boolean" ? !!ft[J.property] : void 0,
                        value: J.type === "boolean" ? void 0 : String(ft[J.property] ?? ""),
                        onChange: (xe) => Ve((ve) => ({
                          ...ve,
                          [J.property]: J.type === "boolean" ? xe.target.checked : xe.target.value
                        })),
                        "aria-label": `${J.title ?? J.property} (new)`
                      }
                    ) }, K)),
                    ke && /* @__PURE__ */ A("td", { className: Ee.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Ee.commandButton,
                          onClick: () => un(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Ee.commandButton,
                          onClick: At,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  Ft.top > 0 && /* @__PURE__ */ o("tr", { className: Ee.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Or,
                      style: { height: Ft.top }
                    }
                  ) }),
                  It.slice(Ft.start, Ft.end).map((K, J) => {
                    const xe = Ft.start + J, ve = M ? xe + 2 : void 0;
                    if (K.type === "group" && K.group) {
                      const Dt = Ie.has(K.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Ee.groupRow,
                          "aria-rowindex": ve,
                          children: /* @__PURE__ */ o("td", { colSpan: Or, className: Ee.groupCell, children: /* @__PURE__ */ A(
                            "button",
                            {
                              type: "button",
                              className: Ee.groupToggle,
                              "aria-expanded": Dt,
                              style: {
                                paddingInlineStart: `${K.group.level * 16}px`
                              },
                              onClick: () => tt(K.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Dt ? "▼" : "▶" }),
                                K.group.title,
                                ": ",
                                K.group.display,
                                " (",
                                K.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${K.group.key}`
                      );
                    }
                    const nt = K.row, zt = n(nt), St = (m ?? []).includes(zt), xn = yt != null && yt === String(zt);
                    return /* @__PURE__ */ A(
                      "tr",
                      {
                        "aria-rowindex": ve,
                        className: [
                          X || v !== "None" ? Ee.clickable : "",
                          St ? Ee.selected : "",
                          xn ? Ee.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": v !== "None" ? St : void 0,
                        onClick: X || v !== "None" ? (Dt) => {
                          qd(Dt.target) || (me(nt), de(nt));
                        } : void 0,
                        children: [
                          et.map(({ key: Dt, column: kt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: Mo(kt),
                              style: kt.frozen ? { left: ye[Dt] } : void 0,
                              children: xn && kt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Ee.editInput,
                                  type: kt.type === "number" ? "number" : kt.type === "boolean" ? "checkbox" : "text",
                                  checked: kt.type === "boolean" ? !!ft[kt.property] : void 0,
                                  value: kt.type === "boolean" ? void 0 : String(ft[kt.property] ?? ""),
                                  onChange: (en) => Ve((Ao) => ({
                                    ...Ao,
                                    [kt.property]: kt.type === "boolean" ? en.target.checked : en.target.value
                                  })),
                                  "aria-label": `${kt.title ?? kt.property} (edit)`
                                }
                              ) : To(kt, nt)
                            },
                            Dt
                          )),
                          ke && /* @__PURE__ */ o("td", { className: Ee.commandCell, children: xn ? /* @__PURE__ */ A(ot, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Ee.commandButton,
                                onClick: () => un(nt),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Ee.commandButton,
                                onClick: At,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ A(ot, { children: [
                            F !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Ee.commandButton,
                                onClick: () => ut(nt),
                                children: "Edit"
                              }
                            ),
                            B && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Ee.commandButton,
                                onClick: () => B(nt),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      zt
                    );
                  }),
                  Ft.bottom > 0 && /* @__PURE__ */ o("tr", { className: Ee.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: Or,
                      style: { height: Ft.bottom }
                    }
                  ) })
                ] }),
                P && P.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ A("tr", { className: Ee.footerRow, children: [
                  et.map(({ key: K, column: J }) => {
                    const xe = P.filter(
                      (ve) => ve.property === J.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Ee.footerCell,
                          J.align === "right" ? Ee.right : "",
                          J.align === "center" ? Ee.center : ""
                        ].filter(Boolean).join(" "),
                        children: xe.map((ve, nt) => /* @__PURE__ */ A(
                          "div",
                          {
                            className: Ee.footerValue,
                            children: [
                              ve.title ? `${ve.title}: ` : "",
                              yo(
                                Zc(yn, ve, lr),
                                ve.format
                              )
                            ]
                          },
                          `${ve.property}-${ve.type}-${nt}`
                        ))
                      },
                      K
                    );
                  }),
                  ke && /* @__PURE__ */ o("td", { className: Ee.footerCell })
                ] }) })
              ]
            }
          ),
          pe.items.length === 0 && !H && /* @__PURE__ */ o("div", { className: Ee.empty, children: ie }),
          H && /* @__PURE__ */ o("div", { className: Ee.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Qn && /* @__PURE__ */ o(
      Vo,
      {
        pageNumber: pe.pageNumber,
        pageSize: pe.pageSize,
        count: pe.total,
        pageSizeOptions: p,
        pageNumbersCount: g,
        showSummary: b,
        showPageSizeSelector: h,
        ariaLabel: `${_e}${Jn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: De,
        onPageSizeChange: ee
      }
    )
  ] });
}
const Wd = "_wrap_avqds_1", Kd = "_grid_avqds_7", Gd = "_stacked_avqds_13", Vd = "_item_avqds_19", Yd = "_empty_avqds_25", Ir = {
  wrap: Wd,
  grid: Kd,
  stacked: Gd,
  item: Vd,
  empty: Yd
};
function JS({
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
  className: f,
  ariaLabel: p = "Data list"
}) {
  const [g, _] = W(1), [b, h] = W(t), v = e.length, m = Math.max(1, Math.ceil(v / b)), u = Math.min(Math.max(1, g), m), y = $e(() => {
    const x = (u - 1) * b;
    return e.slice(x, x + b);
  }, [e, u, b]), $ = r ? Ir.grid : Ir.stacked;
  return /* @__PURE__ */ A(
    "div",
    {
      className: [Ir.wrap, f].filter(Boolean).join(" "),
      "aria-label": p,
      children: [
        l && s != null ? s : v === 0 ? c ?? /* @__PURE__ */ o("div", { className: Ir.empty, children: i }) : /* @__PURE__ */ o("div", { className: $, children: y.map((x, k) => /* @__PURE__ */ o("div", { className: Ir.item, children: a ? a(x, k) : String(x) }, k)) }),
        /* @__PURE__ */ o(
          Vo,
          {
            ariaLabel: `${p} Pagination`,
            pageNumber: u,
            pageSize: b,
            count: v,
            pageSizeOptions: n,
            showPageSizeSelector: d,
            onPageChange: _,
            onPageSizeChange: (x) => {
              h(x), _(1);
            }
          }
        )
      ]
    }
  );
}
const Xd = "_label_1qfpw_1", Zd = {
  label: Xd
}, QS = at(function({ className: t, children: n, ...r }, a) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: a,
      className: [Zd.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Jd = "_textbox_oly89_1", Qd = "_invalid_oly89_37", eu = "_xs_oly89_44", tu = "_sm_oly89_50", nu = "_md_oly89_56", ru = "_lg_oly89_62", ou = "_xl_oly89_68", Lo = {
  textbox: Jd,
  invalid: Qd,
  xs: eu,
  sm: tu,
  md: nu,
  lg: ru,
  xl: ou
}, ds = at(
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
          Lo.textbox,
          Lo[t],
          n ? Lo.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...c
      }
    );
  }
), no = ds, su = "_checkbox_1bb6c_1", au = {
  checkbox: su
}, lu = at(
  function({ className: t, indeterminate: n = !1, ...r }, a) {
    const i = ce(null);
    return Se(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (c) => {
          i.current = c, typeof a == "function" ? a(c) : a && (a.current = c);
        },
        type: "checkbox",
        className: [au.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), iu = {
  switch: "_switch_19gf1_1"
}, e$ = at(function({ className: t, ...n }, r) {
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
      className: [iu.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && i(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), cu = "_trigger_1jlxf_1", du = "_tooltip_1jlxf_7", uu = "_top_1jlxf_34", fu = "_right_1jlxf_40", pu = "_bottom_1jlxf_46", hu = "_left_1jlxf_52", _u = "_arrow_1jlxf_58", mu = "_floating_1jlxf_70", qn = {
  trigger: cu,
  tooltip: du,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: uu,
  right: fu,
  bottom: pu,
  left: hu,
  arrow: _u,
  floating: mu,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, ro = 8;
function gu(e, t) {
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
function t$({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: a,
  targetSelector: i,
  className: c
}) {
  const s = ct(), l = ce(null), d = ce(null), f = ce(() => {
  }), [p, g] = W(!1), [_, b] = W(null), h = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null);
  }, v = () => {
    h(), l.current = window.setTimeout(() => {
      l.current = null, g(!0);
    }, r);
  }, m = () => {
    h(), g(!1);
  };
  if (Se(() => () => h(), []), Se(() => {
    if (!p || a == null) return;
    const y = window.setTimeout(() => g(!1), a);
    return () => window.clearTimeout(y);
  }, [p, a]), Se(() => {
    if (i || !p) return;
    const y = ($) => {
      $.key === "Escape" && m();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [i, p]), Se(() => {
    if (!i) return;
    let y = null, $ = null;
    const x = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, k = () => {
      x(), $ = null, b(null);
    };
    f.current = k;
    const w = (C) => {
      x(), $ = C, y = window.setTimeout(() => {
        y = null, b(C);
      }, r);
    }, S = (C) => C instanceof Element ? C.closest(i) : null, O = (C) => {
      const N = S(C.target);
      !N || N === $ || w(N);
    }, P = (C) => {
      const N = S(C.target);
      if (!N || N !== $) return;
      const T = C.relatedTarget;
      T instanceof Element && N.contains(T) || k();
    }, D = (C) => {
      C.key === "Escape" && k();
    }, I = () => k();
    return document.addEventListener("mouseover", O), document.addEventListener("mouseout", P), document.addEventListener("focusin", O), document.addEventListener("focusout", P), document.addEventListener("keydown", D), document.addEventListener("scroll", I, !0), window.addEventListener("resize", I), () => {
      x(), document.removeEventListener("mouseover", O), document.removeEventListener("mouseout", P), document.removeEventListener("focusin", O), document.removeEventListener("focusout", P), document.removeEventListener("keydown", D), document.removeEventListener("scroll", I, !0), window.removeEventListener("resize", I), $ = null, b(null);
    };
  }, [i, r]), Se(() => {
    if (!i || _ === null || a == null) return;
    const y = window.setTimeout(() => f.current(), a);
    return () => window.clearTimeout(y);
  }, [i, _, a]), Go(() => {
    const y = _;
    if (!y) return;
    const $ = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [$, s].filter(Boolean).join(" ")
    ), () => {
      $ == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", $);
    };
  }, [_, s]), Go(() => {
    const y = d.current, $ = _;
    !y || !$ || Object.assign(
      y.style,
      gu($.getBoundingClientRect(), n)
    );
  }, [_, n]), i)
    return _ ? /* @__PURE__ */ A(
      "span",
      {
        ref: d,
        role: "tooltip",
        id: s,
        className: [
          qn.tooltip,
          qn[n],
          qn.floating,
          c
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: qn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const u = Kt(t) ? as(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      p ? s : null
    ].filter((y) => typeof y == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ A(
      "span",
      {
        className: [qn.trigger, c].filter(Boolean).join(" "),
        onMouseEnter: v,
        onMouseLeave: m,
        onFocus: v,
        onBlur: m,
        children: [
          u,
          p && /* @__PURE__ */ A(
            "span",
            {
              role: "tooltip",
              id: s,
              className: [qn.tooltip, qn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: qn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const yu = "_dialog_1t7pw_1", bu = "_sm_1t7pw_104", xu = "_resizable_1t7pw_110", vu = "_md_1t7pw_113", wu = "_lg_1t7pw_117", ku = "_header_1t7pw_121", Nu = "_title_1t7pw_132", Su = "_description_1t7pw_139", $u = "_close_1t7pw_146", Ou = "_body_1t7pw_176", Eu = "_footer_1t7pw_188", vn = {
  dialog: yu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: bu,
  resizable: xu,
  md: vu,
  lg: wu,
  header: ku,
  title: Nu,
  description: Su,
  close: $u,
  body: Ou,
  footer: Eu
};
function Ma({
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
  closeOnEsc: f = !0,
  resizable: p = !1,
  side: g = null,
  showCloseButton: _ = !0,
  showMask: b = !0,
  canClose: h,
  className: v
}) {
  const m = ce(null), u = ct(), y = ct(), $ = ce(t);
  Se(() => {
    $.current = t;
  });
  const x = ce(h);
  Se(() => {
    x.current = h;
  });
  const k = ce(f);
  Se(() => {
    k.current = f;
  });
  const w = ce(!1), S = ce(!1), O = q(() => {
    if (w.current) return;
    const I = x.current?.();
    if (I instanceof Promise) {
      I.then((C) => {
        C && !w.current && (w.current = !0, $.current());
      });
      return;
    }
    I !== !1 && (w.current = !0, $.current());
  }, []), P = q(() => {
    if (S.current) {
      S.current = !1;
      return;
    }
    $.current();
  }, []), D = q(
    (I) => {
      if (I.key !== "Tab" || !m.current) return;
      const C = Array.from(
        m.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (T) => T.offsetWidth > 0 || T.offsetHeight > 0 || T === document.activeElement
      );
      if (C.length === 0) {
        I.preventDefault();
        return;
      }
      const N = C.indexOf(document.activeElement);
      if (I.shiftKey) {
        if (N <= 0) {
          I.preventDefault();
          const T = C[C.length - 1];
          T && T.focus();
        }
      } else if (N === -1 || N === C.length - 1) {
        I.preventDefault();
        const T = C[0];
        T && T.focus();
      }
    },
    []
  );
  return Se(() => {
    const I = m.current;
    if (I)
      if (e && !I.open) {
        const C = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        I.showModal(), (I.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? I.querySelector("button"))?.focus();
        const T = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const M = (L) => {
          L.preventDefault(), k.current && O();
        };
        return I.addEventListener("cancel", M), () => {
          I.removeEventListener("cancel", M), document.body.style.overflow = T, C?.focus({ preventScroll: !0 });
        };
      } else !e && I.open && (S.current = w.current, w.current = !1, I.close());
  }, [e, O]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button. The dialog's own
  // onKeyDown={keepFocusInside} satisfies the keyboard-listener rules.
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- backdrop click closes the dialog; ESC and the close button are the keyboard paths
  /* @__PURE__ */ A(
    "dialog",
    {
      ref: m,
      className: [
        vn.dialog,
        vn[c],
        p ? vn.resizable : null,
        g ? vn[`side-${g}`] : null,
        b === !1 ? vn["no-mask"] : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: P,
      onClick: (I) => {
        I.target === m.current && d && O();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? u : void 0,
      "aria-describedby": r ? y : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ A("header", { className: vn.header, children: [
          /* @__PURE__ */ A("div", { children: [
            /* @__PURE__ */ o("h2", { id: u, className: vn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: y, className: vn.description, children: r })
          ] }),
          _ !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: vn.close,
              onClick: () => {
                O();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: vn.body, children: a }),
        i && /* @__PURE__ */ o("footer", { className: vn.footer, children: i })
      ]
    }
  );
}
const Cu = "_typography_1jy8x_1", Tu = "_h1_1jy8x_39", Mu = "_h2_1jy8x_45", Au = "_h3_1jy8x_51", Du = "_h4_1jy8x_57", Iu = "_h5_1jy8x_63", zu = "_h6_1jy8x_69", Lu = "_button_1jy8x_99", Pu = "_caption_1jy8x_106", Ru = "_overline_1jy8x_112", Po = {
  typography: Cu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Tu,
  h2: Mu,
  h3: Au,
  h4: Du,
  h5: Iu,
  h6: zu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Lu,
  caption: Pu,
  overline: Ru,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, ju = {
  displayH1: "h1",
  displayH2: "h2",
  displayH3: "h3",
  displayH4: "h4",
  displayH5: "h5",
  displayH6: "h6",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  // Radzen parity: subtitles render as h6.
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  overline: "span"
}, Bu = {
  displayH1: "display-1",
  displayH2: "display-2",
  displayH3: "display-3",
  displayH4: "display-4",
  displayH5: "display-5",
  displayH6: "display-6",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "subtitle-1",
  subtitle2: "subtitle-2",
  body1: "body-1",
  body2: "body-2",
  button: "button",
  caption: "caption",
  overline: "overline"
}, Fu = {
  div: "div",
  span: "span",
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  a: "a",
  button: "button",
  pre: "pre",
  strong: "strong"
}, Hu = {
  left: "align-left",
  right: "align-right",
  center: "align-center",
  justify: "align-justify",
  start: "align-left",
  end: "align-right",
  justifyAll: "align-justify"
}, Aa = at(function({
  textStyle: t = "body1",
  tagName: n = "auto",
  textAlign: r,
  text: a,
  visible: i = !0,
  className: c,
  children: s,
  ...l
}, d) {
  if (i === !1) return null;
  const f = n === "auto" ? ju[t] : Fu[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: d,
      className: [
        Po.typography,
        Po[Bu[t]],
        r ? Po[Hu[r]] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: a ?? s
    }
  );
}), Da = dr(null);
function n$() {
  const e = An(Da);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function r$({ children: e }) {
  const [t, n] = W([]), [, r] = W(0), a = ce(0), i = () => (a.current += 1, a.current), c = ce([]);
  Se(() => {
    c.current = t;
  });
  const s = (g) => {
    const _ = c.current[0];
    _ && (_.kind === "confirm" ? _.resolve(!!g) : _.kind === "alert" ? _.resolve() : _.resolve(g), n((b) => b.slice(1)));
  }, l = $e(
    () => ({
      confirm: (g = {}) => new Promise((_) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "confirm", options: g, resolve: _ }
        ]);
      }),
      alert: (g = {}) => new Promise((_) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "alert", options: g, resolve: _ }
        ]);
      }),
      open: (g = {}) => new Promise((_) => {
        n((b) => [
          ...b,
          { seq: i(), kind: "custom", options: g, resolve: _ }
        ]);
      }),
      openSide: ({ position: g, showMask: _ = !0, ...b }) => new Promise((h) => {
        n((v) => [
          ...v,
          {
            seq: i(),
            kind: "custom",
            options: { ...b, side: g, showMask: _ },
            resolve: h
          }
        ]);
      }),
      close: (g) => s(g),
      closeAll: () => {
        n((g) => (g.forEach((_) => {
          _.kind === "confirm" ? _.resolve(!1) : _.kind === "alert" ? _.resolve() : _.resolve(void 0);
        }), []));
      },
      refresh: () => r((g) => g + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    []
  ), d = t[0];
  function f(g) {
    d && (d.kind === "confirm" ? d.resolve(!!g) : d.kind === "alert" ? d.resolve() : d.resolve(g), n((_) => _.slice(1)));
  }
  const p = d?.kind === "custom" ? d.options : null;
  return /* @__PURE__ */ A(Da.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ o(
      Ma,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: d?.kind === "custom" ? p?.title ?? "Dialog" : d?.options.title ?? (d?.kind === "confirm" ? "Confirm" : "Alert"),
        description: p?.description,
        size: d?.kind === "custom" ? p?.size : d?.options.size,
        width: p?.width,
        height: p?.height,
        side: p?.side ?? null,
        showCloseButton: p?.showCloseButton,
        showMask: p?.showMask,
        closeOnOverlayClick: p?.closeOnOverlayClick,
        closeOnEsc: p?.closeOnEsc,
        className: p?.className,
        footer: d?.kind === "confirm" ? /* @__PURE__ */ A(ot, { children: [
          /* @__PURE__ */ o(dn, { variant: "text", onClick: () => f(!1), children: d.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            dn,
            {
              severity: d.options.tone ?? "primary",
              onClick: () => f(!0),
              children: d.options.confirmText ?? "Confirm"
            }
          )
        ] }) : d?.kind === "custom" ? p?.footer ?? /* @__PURE__ */ o(dn, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(dn, { onClick: () => f(!0), children: d?.kind === "alert" ? d.options.okText ?? "OK" : "OK" }),
        children: d?.kind === "custom" ? p?.content : d?.options.message != null && /* @__PURE__ */ o(Aa, { textStyle: "body1", children: d.options.message })
      },
      d?.seq ?? 0
    )
  ] });
}
const Uu = "_viewport_11t1p_1", qu = "_topLeft_11t1p_13", Wu = "_topRight_11t1p_20", Ku = "_bottomLeft_11t1p_25", Gu = "_toast_11t1p_30", Vu = "_leaving_11t1p_61", Yu = "_info_11t1p_77", Xu = "_success_11t1p_86", Zu = "_warning_11t1p_95", Ju = "_danger_11t1p_104", Qu = "_content_11t1p_113", ef = "_title_11t1p_118", tf = "_description_11t1p_141", nf = "_dismiss_11t1p_148", rf = "_actions_11t1p_169", of = "_action_11t1p_169", sf = "_cancel_11t1p_177", af = "_progress_11t1p_215", nn = {
  viewport: Uu,
  topLeft: qu,
  topRight: Wu,
  bottomLeft: Ku,
  toast: Gu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Vu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Yu,
  success: Xu,
  warning: Zu,
  danger: Ju,
  content: Qu,
  title: ef,
  description: tf,
  dismiss: nf,
  actions: rf,
  action: of,
  cancel: sf,
  progress: af,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, Ia = dr(null);
function o$() {
  const e = An(Ia);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const lf = 200, cf = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function s$({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: a
}) {
  const [i, c] = W([]), [s, l] = W(!1), d = ce([]), f = ce(/* @__PURE__ */ new Map()), p = ce(!1), g = ce(0), _ = (N) => {
    p.current = N, l(N);
  }, b = q((N) => {
    const T = f.current.get(N);
    T && (window.clearTimeout(T.timeoutId), T.remaining = Math.max(
      0,
      T.remaining - (Date.now() - T.startedAt)
    ));
  }, []), h = q((N) => {
    const T = f.current.get(N);
    T && (window.clearTimeout(T.timeoutId), f.current.delete(N));
  }, []), v = q(
    (N) => {
      h(N), c((T) => {
        const M = T.filter((L) => L.id !== N);
        return d.current = M, M;
      });
    },
    [h]
  ), m = q(
    (N) => {
      const T = d.current.find((M) => M.id === N);
      !T || T.leaving || (T.onAutoClose?.(), v(N));
    },
    [v]
  ), u = q(
    (N) => {
      const T = f.current.get(N);
      !T || T.remaining <= 0 || (T.startedAt = Date.now(), T.timeoutId = window.setTimeout(() => m(N), T.remaining));
    },
    [m]
  ), y = q(() => {
    p.current || f.current.forEach((N, T) => b(T)), _(!0);
  }, [b]), $ = q(() => {
    f.current.forEach((N, T) => u(T)), _(!1);
  }, [u]);
  Se(() => {
    if (!r) return;
    const N = () => {
      document.hidden ? y() : $();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [r, y, $]);
  const x = q(
    (N) => {
      const T = d.current.find((M) => M.id === N);
      !T || T.leaving || (T.onDismiss?.(), c((M) => {
        const L = M.map(
          (z) => z.id === N ? { ...z, leaving: !0 } : z
        );
        return d.current = L, L;
      }), window.setTimeout(() => v(N), lf));
    },
    [v]
  ), k = q(
    (N) => {
      if (N.durationMs <= 0) return;
      const T = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(N.id, T), p.current || u(N.id);
    },
    [u]
  ), w = q(
    (N) => {
      const T = d.current.find((L) => L.id === N.id), M = {
        id: N.id ?? ++g.current,
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
      c((L) => {
        const z = T ? L.map(
          (F) => F.id === M.id ? { ...M, leaving: !1 } : F
        ) : [...L, M];
        return d.current = z, z;
      }), T && h(M.id), k(M);
    },
    [t, n, k, h]
  ), S = q(
    (N) => {
      w({
        severity: N.severity ?? "info",
        title: N.summary ?? N.summaryContent,
        description: N.detail ?? N.detailContent,
        durationMs: N.duration,
        click: N.click,
        closeOnClick: N.closeOnClick,
        payload: N.payload
      });
    },
    [w]
  ), O = q(
    (N) => (T, M) => S({ severity: N, summary: T, detail: M }),
    [S]
  ), P = $e(
    () => ({
      toast: w,
      notify: S,
      notifyInfo: O("info"),
      notifySuccess: O("success"),
      notifyWarning: O("warning"),
      notifyError: O("danger")
    }),
    [w, S, O]
  ), D = $e(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((N) => N.position)])),
    [n, i]
  ), I = r ? y : void 0, C = r ? $ : void 0;
  return /* @__PURE__ */ A(Ia.Provider, { value: P, children: [
    e,
    D.map((N) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- hover listeners pause auto-dismiss; the live region itself is not interactive
      /* @__PURE__ */ o(
        "div",
        {
          className: [nn.viewport, nn[cf[N]], a].filter(Boolean).join(" "),
          "aria-live": "polite",
          "aria-atomic": "false",
          onMouseEnter: I,
          onMouseLeave: C,
          children: i.filter((T) => T.position === N).map((T) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- click-to-close is a pointer affordance; the dismiss button provides the keyboard path
            /* @__PURE__ */ A(
              "div",
              {
                role: T.severity === "danger" ? "alert" : "status",
                "data-paused": s ? "true" : "false",
                "data-clickable": T.closeOnClick ? "true" : "false",
                className: [
                  nn.toast,
                  nn[T.severity],
                  T.leaving ? nn.leaving : ""
                ].filter(Boolean).join(" "),
                onClick: T.click || T.closeOnClick ? () => {
                  T.click?.(T.payload), T.closeOnClick && x(T.id);
                } : void 0,
                children: [
                  /* @__PURE__ */ A("div", { className: nn.content, children: [
                    /* @__PURE__ */ o("div", { className: nn.title, children: T.title }),
                    T.description && /* @__PURE__ */ o("div", { className: nn.description, children: T.description }),
                    (T.action || T.cancel) && /* @__PURE__ */ A("div", { className: nn.actions, children: [
                      T.action && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: nn.action,
                          onClick: () => {
                            T.action?.onClick?.(), x(T.id);
                          },
                          children: T.action.label
                        }
                      ),
                      T.cancel && /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: nn.cancel,
                          onClick: () => {
                            T.cancel?.onClick?.(), x(T.id);
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
                      className: nn.dismiss,
                      onClick: () => x(T.id),
                      "aria-label": "Dismiss notification",
                      children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
                    }
                  ),
                  T.showProgress && T.durationMs > 0 && /* @__PURE__ */ o(
                    "div",
                    {
                      className: nn.progress,
                      style: { animationDuration: `${T.durationMs}ms` }
                    }
                  )
                ]
              },
              T.id
            )
          ))
        },
        N
      )
    ))
  ] });
}
const df = "_navigator_848v2_3", uf = "_track_848v2_9", ff = "_spark_848v2_19", pf = "_window_848v2_28", hf = "_handle_848v2_37", Wn = {
  navigator: df,
  track: uf,
  spark: ff,
  window: pf,
  handle: hf
};
function Is(e, t, n, r, a) {
  let i = Math.max(n, Math.min(r, e)), c = Math.max(n, Math.min(r, t));
  if (c - i < a) {
    const s = (i + c) / 2;
    i = Math.max(n, s - a / 2), c = Math.min(r, i + a), i = Math.max(n, c - a);
  }
  return i > c && ([i, c] = [c, i]), { start: i, end: c };
}
function a$({
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
  const d = n !== void 0, [f, p] = W(
    () => r && Is(
      r.start,
      r.end,
      e,
      t,
      c
    ) || {
      start: e,
      end: t
    }
  ), g = d && n ? n : f, _ = ce(null), b = ce(null), h = q(
    (S) => {
      const O = Is(S.start, S.end, e, t, c);
      d || p(O), a?.(O);
    },
    [d, e, t, c, a]
  ), v = q(
    (S) => {
      const O = b.current;
      if (!O) return e;
      const P = O.getBoundingClientRect(), D = P.width > 0 ? (S - P.left) / P.width : 0;
      return e + Math.max(0, Math.min(1, D)) * (t - e || 1);
    },
    [e, t]
  ), m = q(
    (S) => (Math.max(e, Math.min(t, S)) - e) / (t - e || 1) * 100,
    [e, t]
  );
  Se(() => {
    const S = (P) => {
      const D = _.current;
      if (!D) return;
      const I = v(P.clientX);
      if (D.mode === "start") h({ start: I, end: g.end });
      else if (D.mode === "end") h({ start: g.start, end: I });
      else {
        const C = g.end - g.start, N = I - D.grabOffset;
        h({ start: N, end: N + C });
      }
    }, O = () => {
      _.current = null;
    };
    return document.addEventListener("pointermove", S), document.addEventListener("pointerup", O), () => {
      document.removeEventListener("pointermove", S), document.removeEventListener("pointerup", O);
    };
  }, [h, v, g]);
  const u = (S, O) => {
    O.preventDefault(), O.target.focus?.(), _.current = { mode: S, grabOffset: 0 };
  }, y = (S) => {
    const O = v(S.clientX);
    if (O >= g.start && O <= g.end)
      _.current = { mode: "pan", grabOffset: O - g.start };
    else {
      const P = Math.abs(O - g.start), D = Math.abs(O - g.end);
      P <= D ? h({ start: O, end: g.end }) : h({ start: g.start, end: O });
    }
  }, $ = (t - e || 1) / 100, x = (S) => (O) => {
    const P = O.shiftKey ? $ * 10 : $;
    O.key === "ArrowLeft" || O.key === "ArrowDown" ? (O.preventDefault(), h(
      S === "start" ? { start: g.start - P, end: g.end } : { start: g.start, end: g.end - P }
    )) : O.key === "ArrowRight" || O.key === "ArrowUp" ? (O.preventDefault(), h(
      S === "start" ? { start: g.start + P, end: g.end } : { start: g.start, end: g.end + P }
    )) : O.key === "Home" ? (O.preventDefault(), h(
      S === "start" ? { start: e, end: g.end } : { start: g.start, end: t }
    )) : O.key === "End" && (O.preventDefault(), h(
      S === "start" ? { start: g.end - c, end: g.end } : { start: g.start, end: t }
    ));
  }, k = m(g.start), w = Math.max(0, m(g.end) - k);
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Wn.navigator, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: /* @__PURE__ */ A("div", { ref: b, className: Wn.track, onPointerDown: y, children: [
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
                points: i.map((S, O) => {
                  const P = O / (i.length - 1) * 100, D = Math.max(...i), I = Math.min(...i), C = D === I ? 12 : 22 - (S - I) / (D - I) * 20;
                  return `${P},${C}`;
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
            style: { left: `${k}%`, width: `${w}%` }
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
            "aria-valuenow": Math.round(g.start * 100) / 100,
            className: [Wn.handle, Wn.handleStart].filter(Boolean).join(" "),
            style: { left: `${k}%` },
            onPointerDown: (S) => u("start", S),
            onKeyDown: x("start")
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
            "aria-valuenow": Math.round(g.end * 100) / 100,
            className: [Wn.handle, Wn.handleEnd].filter(Boolean).join(" "),
            style: { left: `${k + w}%` },
            onPointerDown: (S) => u("end", S),
            onKeyDown: x("end")
          }
        )
      ] })
    }
  );
}
const _f = "_gauge_pyq6q_3", mf = "_value_pyq6q_11", gf = "_tick_pyq6q_16", jn = {
  gauge: _f,
  value: mf,
  tick: gf
}, oo = 150, zs = 240;
function Ls(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Ps(e, t, n, r, a) {
  const [i, c] = Ls(e, t, n, r), [s, l] = Ls(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function yf(e, t, n) {
  if (!t || t.length === 0) return n;
  let r = n;
  for (const a of t)
    e >= a.offset && (r = a.color);
  return r;
}
function l$({
  value: e,
  min: t = 0,
  max: n = 100,
  arcWidth: r = 16,
  color: a,
  colorStops: i,
  size: c = 200,
  showValue: s = !0,
  formatValue: l = (p) => String(Math.round(p * 100) / 100),
  ariaLabel: d = "Gauge",
  className: f
}) {
  const p = n - t || 1, g = Math.max(0, Math.min(1, (e - t) / p)), _ = "var(--dx-border-color)", b = a ?? "var(--dx-primary-color)", h = 100, v = 96, m = 80, u = oo + zs * g;
  return /* @__PURE__ */ A(
    "div",
    {
      role: "meter",
      "aria-label": d,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [jn.gauge, f].filter(Boolean).join(" "),
      style: { width: c },
      children: [
        /* @__PURE__ */ A("svg", { viewBox: "0 0 200 130", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Ps(h, v, m, oo, oo + zs),
              fill: "none",
              stroke: _,
              strokeWidth: r,
              strokeLinecap: "round"
            }
          ),
          g > 0 && /* @__PURE__ */ o(
            "path",
            {
              d: Ps(h, v, m, oo, u),
              fill: "none",
              stroke: yf(g, i, b),
              strokeWidth: r,
              strokeLinecap: "round"
            }
          )
        ] }),
        s && /* @__PURE__ */ o("div", { className: jn.value, children: l(e) })
      ]
    }
  );
}
function za(e, t, n, r) {
  if (n <= 0) return [];
  if (r && r > 0) {
    const a = Math.floor((t - e) / r + 1e-9);
    return Array.from(
      { length: a + 1 },
      (i, c) => Number((e + c * r).toFixed(6))
    );
  }
  return n === 1 ? [e] : Array.from(
    { length: n },
    (a, i) => e + (t - e) * i / (n - 1)
  );
}
const bo = (e) => new Intl.NumberFormat(void 0, { maximumFractionDigits: 2 }).format(e);
function Nr(e, t, n, r) {
  const a = (r - 90) * Math.PI / 180;
  return [e + n * Math.cos(a), t + n * Math.sin(a)];
}
function Rs(e, t, n, r, a) {
  const [i, c] = Nr(e, t, n, r), [s, l] = Nr(e, t, n, a), d = a - r > 180 ? 1 : 0;
  return `M ${i} ${c} A ${n} ${n} 0 ${d} 1 ${s} ${l}`;
}
function i$({
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
  showValue: f = !0,
  formatValue: p = (b) => String(Math.round(b * 100) / 100),
  ariaLabel: g = "Gauge",
  className: _
}) {
  const b = n - t || 1, h = (I) => Math.max(0, Math.min(1, (I - t) / b)), m = a - r >= 360 ? r + 359.999 : a, u = (I) => r + (m - r) * h(I), y = l ?? "var(--dx-primary-color)", $ = "var(--dx-border-color)", { count: x = 8, step: k, showLabels: w = !0 } = i, S = 100, O = 100, P = 78, D = (I, C, N) => {
    const [T, M] = Nr(S, O, P - 14, u(I));
    return /* @__PURE__ */ o("g", { children: /* @__PURE__ */ o(
      "line",
      {
        x1: S,
        y1: O,
        x2: T,
        y2: M,
        stroke: C,
        strokeWidth: 4,
        strokeLinecap: "round"
      }
    ) }, N);
  };
  return /* @__PURE__ */ A(
    "div",
    {
      role: "meter",
      "aria-label": g,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [jn.gauge, _].filter(Boolean).join(" "),
      style: { width: d },
      children: [
        /* @__PURE__ */ A("svg", { viewBox: "0 0 200 200", width: "100%", "aria-hidden": "true", children: [
          /* @__PURE__ */ o(
            "path",
            {
              d: Rs(S, O, P, r, m),
              fill: "none",
              stroke: $,
              strokeWidth: 12,
              strokeLinecap: "round"
            }
          ),
          c.map((I, C) => /* @__PURE__ */ o(
            "path",
            {
              d: Rs(
                S,
                O,
                P,
                u(Math.max(t, I.from)),
                u(Math.min(n, I.to))
              ),
              fill: "none",
              stroke: I.color,
              strokeWidth: 12
            },
            `range-${C}`
          )),
          za(t, n, x, k).map((I, C) => {
            const [N, T] = Nr(S, O, P - 10, u(I)), [M, L] = Nr(S, O, P - 16, u(I)), [z, F] = Nr(S, O, P - 26, u(I));
            return /* @__PURE__ */ A("g", { children: [
              /* @__PURE__ */ o(
                "line",
                {
                  x1: N,
                  y1: T,
                  x2: M,
                  y2: L,
                  stroke: $,
                  strokeWidth: 1.5
                }
              ),
              w && /* @__PURE__ */ o(
                "text",
                {
                  x: z,
                  y: F + 4,
                  textAnchor: "middle",
                  className: jn.tick,
                  children: bo(I)
                }
              )
            ] }, C);
          }),
          D(e, y, "value"),
          s.map(
            (I, C) => D(I.value, I.color ?? y, `extra-${C}`)
          ),
          /* @__PURE__ */ o("circle", { cx: S, cy: O, r: 7, fill: y })
        ] }),
        f && /* @__PURE__ */ o("div", { className: jn.value, children: p(e) })
      ]
    }
  );
}
function c$({
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
  formatValue: f = (_) => String(Math.round(_ * 100) / 100),
  ariaLabel: p = "Gauge",
  className: g
}) {
  const _ = n - t || 1, b = r === "vertical", h = s ?? (b ? 220 : 280), { count: v = 5, step: m, showLabels: u = !0 } = a, y = c ?? "var(--dx-primary-color)", $ = "var(--dx-border-color)", x = 8, k = (D) => {
    const C = (Math.max(t, Math.min(n, D)) - t) / _;
    return b ? h - x - C * (h - x * 2) : x + C * (h - x * 2);
  }, w = () => za(t, n, v, m).map((D, I) => {
    const C = k(D);
    return /* @__PURE__ */ A("g", { children: [
      b ? /* @__PURE__ */ o(
        "line",
        {
          x1: -6,
          y1: C,
          x2: 0,
          y2: C,
          stroke: $,
          strokeWidth: 1.5
        }
      ) : /* @__PURE__ */ o(
        "line",
        {
          x1: C,
          y1: -6,
          x2: C,
          y2: 0,
          stroke: $,
          strokeWidth: 1.5
        }
      ),
      u && (b ? /* @__PURE__ */ o("text", { x: -10, y: C + 4, textAnchor: "end", className: jn.tick, children: bo(D) }) : /* @__PURE__ */ o("text", { x: C, y: -10, textAnchor: "middle", className: jn.tick, children: bo(D) }))
    ] }, I);
  }), S = () => i.map((D, I) => {
    const C = k(D.from), N = k(D.to), T = Math.min(C, N), M = Math.abs(N - C);
    return b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: T,
        width: l,
        height: M,
        fill: D.color,
        opacity: 0.35
      },
      I
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x: T,
        y: -l / 2,
        width: M,
        height: l,
        fill: D.color,
        opacity: 0.35
      },
      I
    );
  }), O = k(e), P = /* @__PURE__ */ A("g", { children: [
    S(),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: x,
        width: l,
        height: h - x * 2,
        rx: l / 2,
        fill: "none",
        stroke: $,
        strokeWidth: 2
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x,
        y: -l / 2,
        width: h - x * 2,
        height: l,
        rx: l / 2,
        fill: "none",
        stroke: $,
        strokeWidth: 2
      }
    ),
    b ? /* @__PURE__ */ o(
      "rect",
      {
        x: -l / 2,
        y: O,
        width: l,
        height: h - x - O,
        rx: l / 2,
        fill: y
      }
    ) : /* @__PURE__ */ o(
      "rect",
      {
        x,
        y: -l / 2,
        width: Math.max(0, O - x),
        height: l,
        rx: l / 2,
        fill: y
      }
    ),
    b ? /* @__PURE__ */ o(
      "path",
      {
        d: `M ${-l / 2 - 10} ${O} L ${-l / 2 - 2} ${O - 5} L ${-l / 2 - 2} ${O + 5} Z`,
        fill: y
      }
    ) : /* @__PURE__ */ o(
      "path",
      {
        d: `M ${O} ${-l / 2 - 10} L ${O - 5} ${-l / 2 - 2} L ${O + 5} ${-l / 2 - 2} Z`,
        fill: y
      }
    ),
    w()
  ] });
  return /* @__PURE__ */ A(
    "div",
    {
      role: "meter",
      "aria-label": p,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": n,
      className: [jn.gauge, g].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ o(
          "svg",
          {
            width: l + 64,
            height: h + 8,
            viewBox: `${-l / 2 - 56} -16 ${l + 64} ${h + 24}`,
            "aria-hidden": "true",
            children: P
          }
        ) : /* @__PURE__ */ o(
          "svg",
          {
            width: h,
            height: l + 48,
            viewBox: `0 -24 ${h} ${l + 56}`,
            "aria-hidden": "true",
            children: P
          }
        ),
        d && /* @__PURE__ */ o("div", { className: jn.value, children: f(e) })
      ]
    }
  );
}
const bf = "_chat_1apnf_3", xf = "_messages_1apnf_9", vf = "_message_1apnf_9", wf = "_user_1apnf_29", kf = "_assistant_1apnf_35", Nf = "_system_1apnf_40", Sf = "_typing_1apnf_46", $f = "_inputRow_1apnf_51", hr = {
  chat: bf,
  messages: xf,
  message: vf,
  user: wf,
  assistant: kf,
  system: Nf,
  typing: Sf,
  inputRow: $f
};
function d$({
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
  className: f
}) {
  const [p, g] = W(""), _ = l || d, b = p.trim().length > 0 && !_, h = (m) => {
    m.preventDefault();
    const u = p.trim();
    !u || _ || (g(""), t?.(u));
  }, v = /* @__PURE__ */ A("form", { className: hr.inputRow, onSubmit: (m) => {
    h(m);
  }, children: [
    /* @__PURE__ */ o(
      ds,
      {
        value: p,
        placeholder: n,
        "aria-label": a,
        disabled: _,
        onChange: (m) => g(m.target.value)
      }
    ),
    /* @__PURE__ */ o(dn, { type: "submit", disabled: !b, loading: l, children: r })
  ] });
  return /* @__PURE__ */ A(
    "div",
    {
      className: [hr.chat, f].filter(Boolean).join(" "),
      role: "log",
      "aria-label": i,
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ A("div", { className: hr.messages, children: [
          e.map(
            (m, u) => c ? /* @__PURE__ */ o("div", { children: c(m, u) }, u) : /* @__PURE__ */ o(
              "div",
              {
                className: [hr.message, hr[m.role]].filter(Boolean).join(" "),
                children: m.content
              },
              u
            )
          ),
          l && /* @__PURE__ */ o("div", { className: hr.typing, children: "…" })
        ] }),
        s ? s(v) : v
      ]
    }
  );
}
const Of = "_wrapper_1ulz6_1", Ef = "_input_1ulz6_8", Cf = "_invalid_1ulz6_38", Tf = "_toggle_1ulz6_45", Mf = "_xs_1ulz6_80", Af = "_sm_1ulz6_86", Df = "_md_1ulz6_92", If = "_lg_1ulz6_98", zf = "_xl_1ulz6_104", zr = {
  wrapper: Of,
  input: Ef,
  invalid: Cf,
  toggle: Tf,
  xs: Mf,
  sm: Af,
  md: Df,
  lg: If,
  xl: zf
}, Lf = at(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: a,
    showLabel: i = "Show password",
    hideLabel: c = "Hide password",
    ...s
  }, l) {
    const [d, f] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ A("div", { className: zr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: l,
            type: d ? "text" : "password",
            disabled: a,
            className: [
              zr.input,
              zr[t],
              n ? zr.invalid : null,
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
            className: zr.toggle,
            "aria-pressed": d,
            "aria-label": d ? c : i,
            disabled: a,
            onClick: () => f((p) => !p),
            children: /* @__PURE__ */ o(Ce, { icon: d ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), Pf = "_login_30qie_3", Rf = "_title_30qie_9", jf = "_remember_30qie_14", Bf = "_link_30qie_21", Lr = {
  login: Pf,
  title: Rf,
  remember: jf,
  link: Bf
}, us = "dx-login-username";
function Ff(e) {
  const t = e === void 0 ? us : e;
  if (t !== null)
    try {
      return typeof localStorage > "u" ? void 0 : localStorage.getItem(t) ?? void 0;
    } catch {
      return;
    }
}
function Hf(e, t) {
  const n = e === void 0 ? us : e;
  if (n !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.setItem(n, t);
    } catch {
    }
}
function Uf(e) {
  const t = e === void 0 ? us : e;
  if (t !== null)
    try {
      if (typeof localStorage > "u") return;
      localStorage.removeItem(t);
    } catch {
    }
}
function u$({
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
  usernameLabel: f = "Username",
  passwordLabel: p = "Password",
  submitText: g = "Sign in",
  storageKey: _,
  className: b
}) {
  const [h, v] = W(() => Ff(_) ?? ""), [m, u] = W(""), [y, $] = W(!1), [x, k] = W(!1), [w, S] = W({}), O = l || x, P = e != null && n == null, D = async (I) => {
    P || I.preventDefault();
    const C = {};
    if (h.trim() || (C.username = "Username is required."), m || (C.password = "Password is required."), S(C), !(C.username || C.password || !n)) {
      k(!0);
      try {
        await n({
          username: h.trim(),
          password: m,
          rememberMe: y
        }), y ? Hf(_, h.trim()) : Uf(_);
      } finally {
        k(!1);
      }
    }
  };
  return /* @__PURE__ */ A(
    "form",
    {
      className: [Lr.login, b].filter(Boolean).join(" "),
      action: P ? e : void 0,
      method: P ? t : void 0,
      noValidate: !0,
      onSubmit: (I) => {
        D(I);
      },
      children: [
        d != null && /* @__PURE__ */ o("div", { className: Lr.title, children: d }),
        /* @__PURE__ */ o(cr, { label: f, required: !0, error: w.username, children: ({ inputId: I }) => /* @__PURE__ */ o(
          ds,
          {
            id: I,
            value: h,
            autoComplete: "username",
            disabled: O,
            "aria-invalid": w.username ? !0 : void 0,
            onChange: (C) => {
              v(C.target.value), S((N) => ({ ...N, username: void 0 }));
            }
          }
        ) }),
        /* @__PURE__ */ o(cr, { label: p, required: !0, error: w.password, children: ({ inputId: I }) => /* @__PURE__ */ o(
          Lf,
          {
            id: I,
            value: m,
            autoComplete: "current-password",
            disabled: O,
            "aria-invalid": w.password ? !0 : void 0,
            onChange: (C) => {
              u(C.target.value), S((N) => ({ ...N, password: void 0 }));
            }
          }
        ) }),
        s && /* @__PURE__ */ A("label", { className: Lr.remember, children: [
          /* @__PURE__ */ o(
            lu,
            {
              checked: y,
              disabled: O,
              onChange: (I) => $(I.target.checked)
            }
          ),
          " ",
          "Remember me"
        ] }),
        /* @__PURE__ */ o(dn, { type: "submit", loading: O, disabled: O, children: g }),
        (c ?? a) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Lr.link,
            onClick: () => a?.(),
            children: c ?? "Forgot password?"
          }
        ),
        (i ?? r) && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Lr.link,
            onClick: () => r?.(),
            children: i ?? "Create account"
          }
        )
      ]
    }
  );
}
function js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qf(e) {
  if (Array.isArray(e)) return e;
}
function Wf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, c, s = [], l = !0, d = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (f) {
      d = !0, a = f;
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
function Kf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gf(e, t) {
  return qf(e) || Wf(e, t) || Vf(e, t) || Kf();
}
function Vf(e, t) {
  if (e) {
    if (typeof e == "string") return js(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? js(e, t) : void 0;
  }
}
const La = Object.entries, Bs = Object.setPrototypeOf, Yf = Object.isFrozen, Xf = Object.getPrototypeOf, Zf = Object.getOwnPropertyDescriptor;
let $t = Object.freeze, Et = Object.seal, wr = Object.create, Pa = typeof Reflect < "u" && Reflect, Yo = Pa.apply, Xo = Pa.construct;
$t || ($t = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
Yo || (Yo = function(t, n) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return t.apply(n, a);
});
Xo || (Xo = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
  return new t(...r);
});
const ir = Nt(Array.prototype.forEach), Jf = Nt(Array.prototype.lastIndexOf), Fs = Nt(Array.prototype.pop), Pr = Nt(Array.prototype.push), Qf = Nt(Array.prototype.splice), Sr = Array.isArray, Gr = Nt(String.prototype.toLowerCase), Ro = Nt(String.prototype.toString), Hs = Nt(String.prototype.match), Rr = Nt(String.prototype.replace), Us = Nt(String.prototype.indexOf), ep = Nt(String.prototype.trim), tp = Nt(Number.prototype.toString), np = Nt(Boolean.prototype.toString), qs = typeof BigInt > "u" ? null : Nt(BigInt.prototype.toString), Ws = typeof Symbol > "u" ? null : Nt(Symbol.prototype.toString), Xt = Nt(Object.prototype.hasOwnProperty), jr = Nt(Object.prototype.toString), Rt = Nt(RegExp.prototype.test), Kn = rp(TypeError);
function Nt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return Yo(e, t, r);
  };
}
function rp(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Xo(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gr;
  if (Bs && Bs(e, null), !Sr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let a = t[r];
    if (typeof a == "string") {
      const i = n(a);
      i !== a && (Yf(t) || (t[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function op(e) {
  for (let t = 0; t < e.length; t++) Xt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = wr(null);
  for (const r of La(e)) {
    var n = Gf(r, 2);
    const a = n[0], i = n[1];
    Xt(e, a) && (Sr(i) ? t[a] = op(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = an(i) : t[a] = i);
  }
  return t;
}
function sp(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return tp(e);
    case "boolean":
      return np(e);
    case "bigint":
      return qs ? qs(e) : "0";
    case "symbol":
      return Ws ? Ws(e) : "Symbol()";
    case "undefined":
      return jr(e);
    case "function":
    case "object": {
      if (e === null) return jr(e);
      const t = e, n = mn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : jr(r);
      }
      return jr(e);
    }
    default:
      return jr(e);
  }
}
function mn(e, t) {
  for (; e !== null; ) {
    const r = Zf(e, t);
    if (r) {
      if (r.get) return Nt(r.get);
      if (typeof r.value == "function") return Nt(r.value);
    }
    e = Xf(e);
  }
  function n() {
    return null;
  }
  return n;
}
function ap(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ks = $t([
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
]), jo = $t([
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
]), Bo = $t([
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
]), lp = $t([
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
]), Fo = $t([
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
]), ip = $t([
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
]), Gs = $t(["#text"]), Vs = $t([
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
]), Ho = $t([
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
]), Ys = $t([
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
]), so = $t([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), cp = Et(/{{[\w\W]*|^[\w\W]*}}/g), dp = Et(/<%[\w\W]*|^[\w\W]*%>/g), up = Et(/\${[\w\W]*/g), fp = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), pp = Et(/^aria-[\-\w]+$/), Xs = Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hp = Et(/^(?:\w+script|data):/i), _p = Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), mp = Et(/^html$/i), gp = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Zs = Et(/<[/\w!]/g), Js = Et(/<[/\w]/g), yp = Et(/<\/no(script|embed|frames)/i), bp = Et(/\/>/i), rn = {
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
}, Ra = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], xp = $t(Ke({}, Ra)), vp = (function() {
  const e = {};
  return ir(Ra, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), $t(e);
})(), wp = function() {
  return typeof window > "u" ? null : window;
}, kp = function(t, n) {
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
}, Qs = function() {
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
}, Gn = function(t, n, r, a) {
  return Xt(t, n) && Sr(t[n]) ? Ke(a.base ? an(a.base) : {}, t[n], a.transform) : r;
}, Uo = function(t, n, r) {
  const a = Xt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : r();
};
function ja() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wp();
  const t = (ue) => ja(ue);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== rn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, s = e.Element, l = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, f = e.trustedTypes, p = s.prototype, g = mn(p, "cloneNode"), _ = mn(p, "remove"), b = mn(p, "removeAttributeNode"), h = mn(p, "nextSibling"), v = mn(p, "childNodes"), m = mn(p, "parentNode"), u = mn(p, "shadowRoot"), y = mn(p, "attributes"), $ = c && c.prototype ? mn(c.prototype, "nodeType") : null, x = c && c.prototype ? mn(c.prototype, "nodeName") : null, k = c && c.prototype ? mn(c.prototype, "ownerDocument") : null, w = function(E) {
    return $ ? $(E) : E.nodeType;
  }, S = function(E) {
    return x ? x(E) : E.nodeName;
  };
  if (typeof i == "function") {
    const ue = n.createElement("template");
    ue.content && ue.content.ownerDocument && (n = ue.content.ownerDocument);
  }
  let O, P = "", D, I = !1, C = 0;
  const N = function() {
    if (C > 0) throw Kn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, T = function(E) {
    N(), C++;
    try {
      return O.createHTML(E);
    } finally {
      C--;
    }
  }, M = function(E) {
    N(), C++;
    try {
      return O.createScriptURL(E);
    } finally {
      C--;
    }
  }, L = function() {
    return I || (D = kp(f, a), I = !0), D;
  }, z = n, F = z.implementation, V = z.createNodeIterator, ne = z.createDocumentFragment, re = z.getElementsByTagName, B = r.importNode;
  let H = Qs();
  t.isSupported = typeof La == "function" && typeof m == "function" && F && F.createHTMLDocument !== void 0;
  const ie = cp, Y = dp, G = up, X = fp, _e = pp, te = hp, ge = _p, Z = gp;
  let Oe = Xs, ae = null;
  const De = Ke({}, [
    ...Ks,
    ...jo,
    ...Bo,
    ...Fo,
    ...Gs
  ]);
  let be = null;
  const We = Ke({}, [
    ...Vs,
    ...Ho,
    ...Ys,
    ...so
  ]);
  let Je = Object.seal(wr(null, {
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
  })), Ge = null, Qe = null;
  const He = Object.seal(wr(null, {
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
  let gt = !0, oe = !0, Te = !1, lt = !0, ze = !1, st = !0, Xe = !1, Ct = !1, yt = null, it = null, ft = !1, Ve = !1, Tt = !1, le = !1, Le = !0, wt = !1;
  const Mt = "user-content-";
  let bt = !0, R = !1, Q = {}, ye = null;
  const ke = Ke({}, [
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
  let pe = null;
  const U = Ke({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let he = null;
  const Re = Ke({}, [
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
  ]), Ie = "http://www.w3.org/1998/Math/MathML", It = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let gn = et, Sn = !1, ee = null;
  const de = Ke({}, [
    Ie,
    It,
    et
  ], Ro), me = $t([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ne = Ke({}, me);
  const we = $t(["annotation-xml"]);
  let Ae = Ke({}, we);
  const Ye = Ke({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let Fe = null;
  const dt = ["application/xhtml+xml", "text/html"], xt = "text/html";
  let je = null, tt = null;
  const ut = n.createElement("form"), Qt = function(E) {
    return E instanceof RegExp || E instanceof Function;
  }, At = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (tt && tt === E) return;
    (!E || typeof E != "object") && (E = {}), E = an(E), Fe = dt.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? xt : E.PARSER_MEDIA_TYPE, je = Fe === "application/xhtml+xml" ? Ro : Gr, ae = Gn(E, "ALLOWED_TAGS", De, { transform: je }), be = Gn(E, "ALLOWED_ATTR", We, { transform: je }), ee = Gn(E, "ALLOWED_NAMESPACES", de, { transform: Ro }), he = Gn(E, "ADD_URI_SAFE_ATTR", Re, {
      transform: je,
      base: Re
    }), pe = Gn(E, "ADD_DATA_URI_TAGS", U, {
      transform: je,
      base: U
    }), ye = Gn(E, "FORBID_CONTENTS", ke, { transform: je }), Ge = Gn(E, "FORBID_TAGS", an({}), { transform: je }), Qe = Gn(E, "FORBID_ATTR", an({}), { transform: je }), Q = Xt(E, "USE_PROFILES") ? E.USE_PROFILES && typeof E.USE_PROFILES == "object" ? an(E.USE_PROFILES) : E.USE_PROFILES : !1, gt = E.ALLOW_ARIA_ATTR !== !1, oe = E.ALLOW_DATA_ATTR !== !1, Te = E.ALLOW_UNKNOWN_PROTOCOLS || !1, lt = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = E.SAFE_FOR_TEMPLATES || !1, st = E.SAFE_FOR_XML !== !1, Xe = E.WHOLE_DOCUMENT || !1, Ve = E.RETURN_DOM || !1, Tt = E.RETURN_DOM_FRAGMENT || !1, le = E.RETURN_TRUSTED_TYPE || !1, ft = E.FORCE_BODY || !1, Le = E.SANITIZE_DOM !== !1, wt = E.SANITIZE_NAMED_PROPS || !1, bt = E.KEEP_CONTENT !== !1, R = E.IN_PLACE || !1, Oe = ap(E.ALLOWED_URI_REGEXP) ? E.ALLOWED_URI_REGEXP : Xs, gn = typeof E.NAMESPACE == "string" ? E.NAMESPACE : et, Ne = Uo(E, "MATHML_TEXT_INTEGRATION_POINTS", () => Ke({}, me)), Ae = Uo(E, "HTML_INTEGRATION_POINTS", () => Ke({}, we));
    const j = Uo(E, "CUSTOM_ELEMENT_HANDLING", () => wr(null));
    if (Je = wr(null), Xt(j, "tagNameCheck") && Qt(j.tagNameCheck) && (Je.tagNameCheck = j.tagNameCheck), Xt(j, "attributeNameCheck") && Qt(j.attributeNameCheck) && (Je.attributeNameCheck = j.attributeNameCheck), Xt(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (Je.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), Et(Je), ze && (oe = !1), Tt && (Ve = !0), Q && (ae = Ke({}, Gs), be = wr(null), Q.html === !0 && (Ke(ae, Ks), Ke(be, Vs)), Q.svg === !0 && (Ke(ae, jo), Ke(be, Ho), Ke(be, so)), Q.svgFilters === !0 && (Ke(ae, Bo), Ke(be, Ho), Ke(be, so)), Q.mathMl === !0 && (Ke(ae, Fo), Ke(be, Ys), Ke(be, so))), He.tagCheck = null, He.attributeCheck = null, Xt(E, "ADD_TAGS") && (typeof E.ADD_TAGS == "function" ? He.tagCheck = E.ADD_TAGS : Sr(E.ADD_TAGS) && (ae === De && (ae = an(ae)), Ke(ae, E.ADD_TAGS, je))), Xt(E, "ADD_ATTR") && (typeof E.ADD_ATTR == "function" ? He.attributeCheck = E.ADD_ATTR : Sr(E.ADD_ATTR) && (be === We && (be = an(be)), Ke(be, E.ADD_ATTR, je))), Xt(E, "ADD_FORBID_CONTENTS") && Sr(E.ADD_FORBID_CONTENTS) && (ye === ke && (ye = an(ye)), Ke(ye, E.ADD_FORBID_CONTENTS, je)), bt && (ae["#text"] = !0), Xe && Ke(ae, [
      "html",
      "head",
      "body"
    ]), ae.table && (Ke(ae, ["tbody"]), delete Ge.tbody), E.TRUSTED_TYPES_POLICY) {
      if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function") throw Kn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Kn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const se = O;
      O = E.TRUSTED_TYPES_POLICY;
      try {
        P = T("");
      } catch (fe) {
        throw O = se, fe;
      }
    } else E.TRUSTED_TYPES_POLICY === null ? (O = void 0, P = "") : (O === void 0 && (O = L()), O && typeof P == "string" && (P = T("")));
    $t && $t(E), tt = E;
  }, un = Ke({}, [
    ...jo,
    ...Bo,
    ...lp
  ]), Jn = Ke({}, [...Fo, ...ip]), Qn = function(E, j, se) {
    return j.namespaceURI === et ? E === "svg" : j.namespaceURI === Ie ? E === "svg" && (se === "annotation-xml" || Ne[se]) : !!un[E];
  }, Hn = function(E, j, se) {
    return j.namespaceURI === et ? E === "math" : j.namespaceURI === It ? E === "math" && Ae[se] : !!Jn[E];
  }, To = function(E, j, se) {
    return j.namespaceURI === It && !Ae[se] || j.namespaceURI === Ie && !Ne[se] ? !1 : !Jn[E] && (Ye[E] || !un[E]);
  }, Mo = function(E) {
    let j = m(E);
    (!j || !j.tagName) && (j = {
      namespaceURI: gn,
      tagName: "template"
    });
    const se = Gr(E.tagName), fe = Gr(j.tagName);
    return ee[E.namespaceURI] ? E.namespaceURI === It ? Qn(se, j, fe) : E.namespaceURI === Ie ? Hn(se, j, fe) : E.namespaceURI === et ? To(se, j, fe) : !!(Fe === "application/xhtml+xml" && ee[E.namespaceURI]) : !1;
  }, yn = function(E) {
    Pr(t.removed, { element: E });
    try {
      m(E).removeChild(E);
    } catch {
      if (_(E), !m(E)) throw Kn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Jr = function(E, j, se) {
    try {
      b(E, j);
    } catch {
      try {
        E.removeAttribute(se);
      } catch {
      }
    }
  }, bn = function(E) {
    K(E);
    const j = v(E);
    if (j) {
      const fe = [];
      ir(j, (Me) => {
        Pr(fe, Me);
      }), ir(fe, (Me) => {
        try {
          _(Me);
        } catch {
        }
      });
    }
    const se = y(E);
    if (se) for (let fe = se.length - 1; fe >= 0; --fe) {
      const Me = se[fe], Be = Me && Me.name;
      typeof Be == "string" && Jr(E, Me, Be);
    }
  }, Ft = function(E, j, se) {
    if (!se) try {
      se = j.getAttributeNode(E);
    } catch {
      se = null;
    }
    Pr(t.removed, {
      attribute: se || null,
      from: j
    });
    try {
      se ? b(j, se) : j.removeAttribute(E);
    } catch {
      try {
        j.removeAttribute(E);
      } catch {
      }
    }
    if (E === "is")
      if (Ve || Tt) try {
        yn(j);
      } catch {
      }
      else try {
        j.setAttribute(E, "");
      } catch {
      }
  }, Or = function(E) {
    const j = y(E);
    if (j)
      for (let se = j.length - 1; se >= 0; --se) {
        const fe = j[se], Me = fe && fe.name;
        typeof Me != "string" || be[je(Me)] || Jr(E, fe, Me);
      }
  }, K = function(E) {
    const j = [E];
    for (; j.length > 0; ) {
      const se = j.pop();
      w(se) === rn.element && Or(se);
      const fe = v(se);
      if (fe) for (let Me = fe.length - 1; Me >= 0; --Me) j.push(fe[Me]);
    }
  }, J = function(E, j) {
    return st ? E === "patchsrc" ? !0 : E === "for" && j !== "label" && j !== "output" : !1;
  }, xe = function(E) {
    if (!st) return;
    const j = [E];
    for (; j.length > 0; ) {
      const se = j.pop(), fe = w(se);
      if (fe === rn.processingInstruction || fe === rn.comment && Rt(Js, se.data)) {
        try {
          _(se);
        } catch {
        }
        continue;
      }
      if (fe === rn.element) {
        const Be = se, Ue = je(S(se));
        try {
          Be.hasAttribute && Be.hasAttribute("patchsrc") && Be.removeAttribute("patchsrc"), Be.hasAttribute && Be.hasAttribute("for") && J("for", Ue) && Be.removeAttribute("for");
        } catch {
        }
      }
      const Me = v(se);
      if (Me) for (let Be = Me.length - 1; Be >= 0; --Be) j.push(Me[Be]);
    }
  }, ve = function(E) {
    let j = null, se = null;
    if (ft) E = "<remove></remove>" + E;
    else {
      const Be = Hs(E, /^[\r\n\t ]+/);
      se = Be && Be[0];
    }
    Fe === "application/xhtml+xml" && gn === et && (E = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + E + "</body></html>");
    const fe = O ? T(E) : E;
    if (gn === et) try {
      j = new d().parseFromString(fe, Fe);
    } catch {
    }
    if (!j || !j.documentElement) {
      j = F.createDocument(gn, "template", null);
      try {
        j.documentElement.innerHTML = Sn ? P : fe;
      } catch {
      }
    }
    const Me = j.body || j.documentElement;
    return E && se && Me.insertBefore(n.createTextNode(se), Me.childNodes[0] || null), gn === et ? re.call(j, Xe ? "html" : "body")[0] : Xe ? j.documentElement : Me;
  }, nt = function(E) {
    const j = k ? k(E) : E.ownerDocument;
    return V.call(j || E, E, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
  }, zt = function(E) {
    return E = Rr(E, ie, " "), E = Rr(E, Y, " "), E = Rr(E, G, " "), E;
  }, St = function(E) {
    var j;
    E.normalize();
    const se = k ? k(E) : E.ownerDocument, fe = V.call(se || E, E, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null);
    let Me = fe.nextNode();
    for (; Me; )
      Me.data = zt(Me.data), Me = fe.nextNode();
    const Be = (j = E.querySelectorAll) === null || j === void 0 ? void 0 : j.call(E, "template");
    Be && ir(Be, (Ue) => {
      Dt(Ue.content) && St(Ue.content);
    });
  }, xn = function(E) {
    const j = x ? x(E) : null;
    return typeof j != "string" || je(j) !== "form" ? !1 : typeof E.nodeName != "string" || typeof E.textContent != "string" || typeof E.removeChild != "function" || E.attributes !== y(E) || typeof E.removeAttribute != "function" || typeof E.removeAttributeNode != "function" || typeof E.getAttributeNode != "function" || typeof E.setAttribute != "function" || typeof E.namespaceURI != "string" || typeof E.insertBefore != "function" || typeof E.hasChildNodes != "function" || E.nodeType !== $(E) || E.childNodes !== v(E);
  }, Dt = function(E) {
    if (!$ || typeof E != "object" || E === null) return !1;
    try {
      return $(E) === rn.documentFragment;
    } catch {
      return !1;
    }
  }, kt = function(E) {
    if (!$ || typeof E != "object" || E === null) return !1;
    try {
      return typeof $(E) == "number";
    } catch {
      return !1;
    }
  };
  function en(ue, E, j) {
    ue.length !== 0 && ir(ue, (se) => {
      se.call(t, E, j, tt);
    });
  }
  const Ao = function(E, j) {
    return !!(st && E.hasChildNodes() && !kt(E.firstElementChild) && Rt(Zs, E.textContent) && Rt(Zs, E.innerHTML) || st && E.namespaceURI === et && xp[j] && (kt(E.firstElementChild) || typeof E.textContent == "string" && Rt(vp[j], E.textContent)) || E.nodeType === rn.processingInstruction || st && E.nodeType === rn.comment && Rt(Js, E.data));
  }, Qr = function(E, j) {
    if (E instanceof RegExp) return Rt(E, j);
    if (E instanceof Function) {
      for (var se = arguments.length, fe = new Array(se > 2 ? se - 2 : 0), Me = 2; Me < se; Me++) fe[Me - 2] = arguments[Me];
      return !!E(j, ...fe);
    }
    return !1;
  }, rl = function(E, j, se) {
    if (!Ge[j] && bs(j) && Qr(Je.tagNameCheck, j)) return !1;
    if (bt && !ye[j]) {
      const fe = m(E), Me = v(E);
      if (Me && fe) {
        const Be = Me.length;
        for (let Ue = Be - 1; Ue >= 0; --Ue) {
          const pt = E === se ? g(Me[Ue], !0) : Me[Ue];
          fe.insertBefore(pt, h(E));
        }
      }
    }
    return yn(E), !0;
  }, ms = function(E, j, se, fe) {
    return E.length === 0 ? j : j === se || j === fe ? an(j) : j;
  }, fr = function(E, j) {
    return E === j || m(E) !== null ? !1 : (R && K(E), !0);
  }, gs = function(E, j) {
    if (en(H.beforeSanitizeElements, E, null), fr(E, j)) return !0;
    if (xn(E))
      return yn(E), !0;
    const se = je(S(E));
    if (ae = ms(H.uponSanitizeElement, ae, De, yt), en(H.uponSanitizeElement, E, {
      tagName: se,
      allowedTags: ae
    }), fr(E, j)) return !0;
    if (Ao(E, se))
      return yn(E), !0;
    if (Ge[se] || !(He.tagCheck instanceof Function && He.tagCheck(se)) && !ae[se]) {
      const fe = rl(E, se, j);
      return fe === !1 && (en(H.afterSanitizeElements, E, null), fr(E, j)) ? !0 : fe;
    }
    if (w(E) === rn.element && !Mo(E) || (se === "noscript" || se === "noembed" || se === "noframes") && Rt(yp, E.innerHTML))
      return yn(E), !0;
    if (ze && E.nodeType === rn.text) {
      const fe = zt(E.textContent);
      E.textContent !== fe && (Pr(t.removed, { element: E.cloneNode() }), E.textContent = fe);
    }
    return en(H.afterSanitizeElements, E, null), fr(E, j);
  }, ys = function(E, j, se) {
    if (Qe[j] || J(j, E) || Le && (j === "id" || j === "name") && (se in n || se in ut)) return !1;
    const fe = be[j] || He.attributeCheck instanceof Function && He.attributeCheck(j, E);
    return oe && Rt(X, j) || gt && Rt(_e, j) ? !0 : fe ? he[j] || Rt(Oe, Rr(se, ge, "")) || (j === "src" || j === "xlink:href" || j === "href") && E !== "script" && Us(se, "data:") === 0 && pe[E] || Te && !Rt(te, Rr(se, ge, "")) ? !0 : !se : bs(E) && Qr(Je.tagNameCheck, E) && Qr(Je.attributeNameCheck, j, E) || j === "is" && Je.allowCustomizedBuiltInElements && Qr(Je.tagNameCheck, se);
  }, ol = Ke({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), bs = function(E) {
    return !ol[Gr(E)] && Rt(Z, E);
  }, sl = function(E, j, se, fe) {
    if (O && typeof f == "object" && typeof f.getAttributeType == "function" && !se) switch (f.getAttributeType(E, j)) {
      case "TrustedHTML":
        return T(fe);
      case "TrustedScriptURL":
        return M(fe);
    }
    return fe;
  }, al = function(E, j, se, fe) {
    try {
      return se ? E.setAttributeNS(se, j, fe) : E.setAttribute(j, fe), xn(E) ? (yn(E), !1) : !0;
    } catch {
      return Ft(j, E), !1;
    }
  }, xs = function(E, j) {
    if (en(H.beforeSanitizeAttributes, E, null), fr(E, j)) return;
    const se = E.attributes;
    if (!se || xn(E)) return;
    be = ms(H.uponSanitizeAttribute, be, We, it);
    const fe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let Me = se.length;
    const Be = je(E.nodeName);
    for (; Me--; ) {
      const Ue = se[Me], pt = Ue.name, fn = Ue.namespaceURI, tn = Ue.value, pr = je(pt), Io = tn;
      let Ht = pt === "value" ? Io : ep(Io), vs = !1;
      if (fe.attrName = pr, fe.attrValue = Ht, fe.keepAttr = !0, fe.forceKeepAttr = void 0, en(H.uponSanitizeAttribute, E, fe), Ht = fe.attrValue, wt && (pr === "id" || pr === "name") && Us(Ht, Mt) !== 0 && (Ft(pt, E, Ue), Ht = Mt + Ht, vs = !0), st && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ht)) {
        Ft(pt, E, Ue);
        continue;
      }
      if (pr === "attributename" && Hs(Ht, "href")) {
        Ft(pt, E, Ue);
        continue;
      }
      if (!fe.forceKeepAttr) {
        if (!fe.keepAttr) {
          Ft(pt, E, Ue);
          continue;
        }
        if (!lt && Rt(bp, Ht)) {
          Ft(pt, E, Ue);
          continue;
        }
        if (ze && (Ht = zt(Ht)), !ys(Be, pr, Ht)) {
          Ft(pt, E, Ue);
          continue;
        }
        Ht = sl(Be, pr, fn, Ht), Ht !== Io && al(E, pt, fn, Ht) && vs && Fs(t.removed);
      }
    }
    en(H.afterSanitizeAttributes, E, null), fr(E, j);
  }, eo = function(E) {
    let j = null;
    const se = nt(E);
    for (en(H.beforeSanitizeShadowDOM, E, null); j = se.nextNode(); )
      if (en(H.uponSanitizeShadowNode, j, null), gs(j, E), xs(j, E), Dt(j.content) && eo(j.content), w(j) === rn.element) {
        const fe = u(j);
        Dt(fe) && (Do(fe), eo(fe));
      }
    en(H.afterSanitizeShadowDOM, E, null);
  }, Do = function(E) {
    const j = [{
      node: E,
      shadow: null
    }];
    for (; j.length > 0; ) {
      const se = j.pop();
      if (se.shadow) {
        eo(se.shadow);
        continue;
      }
      const fe = se.node, Me = w(fe) === rn.element, Be = v(fe);
      if (Be) for (let Ue = Be.length - 1; Ue >= 0; --Ue) j.push({
        node: Be[Ue],
        shadow: null
      });
      if (Me) {
        const Ue = x ? x(fe) : null;
        if (typeof Ue == "string" && je(Ue) === "template") {
          const pt = fe.content;
          Dt(pt) && j.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Me) {
        const Ue = u(fe);
        Dt(Ue) && j.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ue) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, se = null, fe = null, Me = null;
    if (Sn = !ue, Sn && (ue = "<!-->"), typeof ue != "string" && !kt(ue) && (ue = sp(ue), typeof ue != "string"))
      throw Kn("dirty is not a string, aborting");
    if (!t.isSupported) return ue;
    Ct ? (ae = yt, be = it) : At(E), (H.uponSanitizeElement.length > 0 || H.uponSanitizeAttribute.length > 0) && (ae = an(ae)), H.uponSanitizeAttribute.length > 0 && (be = an(be)), t.removed = [];
    const Be = R && typeof ue != "string" && kt(ue);
    if (Be) {
      xe(ue);
      const fn = S(ue);
      if (typeof fn == "string") {
        const tn = je(fn);
        if (!ae[tn] || Ge[tn])
          throw bn(ue), Kn("root node is forbidden and cannot be sanitized in-place");
      }
      if (xn(ue))
        throw bn(ue), Kn("root node is clobbered and cannot be sanitized in-place");
      try {
        Do(ue);
      } catch (tn) {
        throw bn(ue), tn;
      }
    } else if (kt(ue))
      j = ve("<!---->"), se = j.ownerDocument.importNode(ue, !0), se.nodeType === rn.element && se.nodeName === "BODY" || se.nodeName === "HTML" ? j = se : j.appendChild(se), Do(j);
    else {
      if (!Ve && !ze && !Xe && ue.indexOf("<") === -1) return O && le ? T(ue) : ue;
      if (j = ve(ue), !j) return Ve ? null : le ? P : "";
    }
    j && ft && yn(j.firstChild);
    const Ue = Be ? ue : j;
    try {
      const fn = nt(Ue);
      for (; fe = fn.nextNode(); )
        gs(fe, Ue), xs(fe, Ue), Dt(fe.content) && eo(fe.content);
    } catch (fn) {
      throw Be && (bn(ue), ir(t.removed, (tn) => {
        tn.element && K(tn.element);
      })), fn;
    }
    if (Be) {
      let fn = !1;
      if (ir(t.removed, (tn) => {
        tn.element && (tn.element === ue && (fn = !0), K(tn.element));
      }), fn) throw Kn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ze && St(ue), ue;
    }
    if (Ve) {
      if (ze && St(j), Tt)
        for (Me = ne.call(j.ownerDocument); j.firstChild; ) Me.appendChild(j.firstChild);
      else Me = j;
      return (be.shadowroot || be.shadowrootmode) && (Me = B.call(r, Me, !0)), Me;
    }
    let pt = Xe ? j.outerHTML : j.innerHTML;
    return Xe && ae["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && Rt(mp, j.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + pt), ze && (pt = zt(pt)), O && le ? T(pt) : pt;
  }, t.setConfig = function() {
    let ue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(ue), Ct = !0, yt = ae, it = be;
  }, t.clearConfig = function() {
    tt = null, Ct = !1, yt = null, it = null, O = D, P = "";
  }, t.isValidAttribute = function(ue, E, j) {
    tt || At({});
    const se = je(ue), fe = je(E);
    return ys(se, fe, j);
  }, t.addHook = function(ue, E) {
    typeof E == "function" && Xt(H, ue) && Pr(H[ue], E);
  }, t.removeHook = function(ue, E) {
    if (Xt(H, ue)) {
      if (E !== void 0) {
        const j = Jf(H[ue], E);
        return j === -1 ? void 0 : Qf(H[ue], j, 1)[0];
      }
      return Fs(H[ue]);
    }
  }, t.removeHooks = function(ue) {
    Xt(H, ue) && (H[ue] = []);
  }, t.removeAllHooks = function() {
    H = Qs();
  }, t;
}
var Ba = ja();
function Yr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Np(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const ao = "\0";
function lo(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (a, i) => (n.push(`<code>${Yr(i)}</code>`), `${ao}${n.length - 1}${ao}`));
  return t || (r = Yr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g,
    (a, i, c) => {
      const s = Np(c);
      return s == null ? i : `<a href="${Yr(s)}">${i}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${ao}(\\d+)${ao}`, "g"),
    (a, i) => n[Number(i)] ?? ""
  ), r;
}
function Sp(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), a = (l) => r[l] ?? "", i = [];
  let c = 0;
  const s = (l, d) => {
    const f = d ? "ol" : "ul";
    i.push(
      `<${f}>${l.map((p) => `<li>${lo(p, n)}</li>`).join("")}</${f}>`
    );
  };
  for (; c < r.length; ) {
    const l = a(c) ?? "";
    if (/^\s*$/.test(l)) {
      c += 1;
      continue;
    }
    const d = /^(#{1,6})\s+(.*)$/.exec(l), f = d?.[1], p = d?.[2];
    if (f !== void 0 && p !== void 0) {
      i.push(
        `<h${f.length}>${lo(p.trim(), n)}</h${f.length}>`
      ), c += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(l)) {
      const h = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(l)?.[2] ?? "", v = [];
      for (c += 1; c < r.length; ) {
        const u = a(c) ?? "";
        if (/^(`{3,}|~{3,})\s*$/.test(u)) break;
        v.push(u), c += 1;
      }
      c += 1;
      const m = h ? ` class="language-${Yr(h)}"` : "";
      i.push(
        `<pre><code${m}>${Yr(v.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(l)) {
      const h = [];
      for (; c < r.length && /^>\s?(.*)$/.test(a(c)); )
        h.push(/^>\s?(.*)$/.exec(a(c))?.[1] ?? ""), c += 1;
      i.push(
        `<blockquote>${h.map((v) => `<p>${lo(v, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(l.trim())) {
      i.push("<hr>"), c += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(l)) {
      const h = [];
      for (; c < r.length; ) {
        const m = /^\s*[-*+]\s+(.*)$/.exec(a(c))?.[1];
        if (m === void 0) break;
        h.push(m), c += 1;
      }
      s(h, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(l)) {
      const h = [];
      for (; c < r.length; ) {
        const m = /^\s*\d+[.)]\s+(.*)$/.exec(a(c))?.[1];
        if (m === void 0) break;
        h.push(m), c += 1;
      }
      s(h, !0);
      continue;
    }
    const b = [];
    for (; c < r.length && !/^\s*$/.test(a(c)) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      a(c)
    ); )
      b.push(a(c)), c += 1;
    i.push(`<p>${lo(b.join(`
`), n)}</p>`);
  }
  return i.join(`
`);
}
const $p = "_markdown_oj741_3", Op = "_resize_oj741_61", ea = {
  markdown: $p,
  resize: Op
};
function f$({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: a
}) {
  const i = $e(
    () => Ba.sanitize(Sp(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: [ea.markdown, n ? ea.resize : "", a].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: i }
    }
  );
}
const Ep = "_editor_2a7al_3", Cp = "_toolbar_2a7al_13", Tp = "_tool_2a7al_13", Mp = "_separator_2a7al_56", Ap = "_area_2a7al_63", Dp = "_source_2a7al_73", Ip = "_alignGlyph_2a7al_84", zp = "_colorInput_2a7al_89", Lp = "_select_2a7al_98", Ot = {
  editor: Ep,
  toolbar: Cp,
  tool: Tp,
  separator: Mp,
  area: Ap,
  source: Dp,
  alignGlyph: Ip,
  colorInput: zp,
  select: Lp
}, Pp = [
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
], ta = {
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
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "left" }, children: "≡" }),
    command: "justifyLeft"
  },
  justifyCenter: {
    label: "Align center",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "center" }, children: "≡" }),
    command: "justifyCenter"
  },
  justifyRight: {
    label: "Align right",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "right" }, children: "≡" }),
    command: "justifyRight"
  },
  justifyFull: {
    label: "Justify",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "justify" }, children: "≡" }),
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
}, Rp = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], jp = ["1", "2", "3", "4", "5", "6", "7"], Bp = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Zo(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function Fp(e) {
  return Zo("formatBlock", `<${e}>`) || Zo("formatBlock", e);
}
function Hp(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const p$ = at(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: a,
    toolbar: i = Pp,
    imageUpload: c,
    readOnly: s = !1,
    disabled: l = !1,
    ariaLabel: d = "HTML editor",
    className: f,
    sanitize: p = !0
  }, g) {
    const [_, b] = W(!1), [h, v] = W(n), [m, u] = W(
      null
    ), [y, $] = W(""), [x, k] = W(""), [w, S] = W(2), [O, P] = W(2), [D, I] = W(!1), C = ce(null), N = ce(null), T = ce(n), M = q(
      (Z) => p ? Ba.sanitize(Z) : Z,
      [p]
    );
    Se(() => {
      const Z = C.current;
      t !== void 0 && Z && Z.innerHTML !== t && (Z.innerHTML = t), t !== void 0 && (T.current = t);
    }, [t]);
    const L = q(
      (Z) => {
        T.current = M(Z), r?.(T.current);
      },
      [M, r]
    ), z = q(
      (Z, Oe) => {
        if (s || l) return !1;
        C.current?.focus();
        const ae = Zo(Z, Oe);
        if (ae) {
          const De = C.current;
          De && L(De.innerHTML);
        }
        return ae;
      },
      [L, s, l]
    ), F = q(
      () => C.current?.innerHTML ?? T.current,
      []
    ), V = q(
      (Z) => {
        z("insertHTML", Z);
      },
      [z]
    ), ne = q(() => {
      C.current?.focus();
    }, []), re = $e(
      () => ({
        execCommand: z,
        getHtml: F,
        insertHtml: V,
        focus: ne
      }),
      [z, F, V, ne]
    );
    $o(g, () => ({ execCommand: z, getHtml: F }), [
      z,
      F
    ]);
    const B = q(
      (Z) => {
        const Oe = ta[Z];
        !Oe || s || l || z(Oe.command);
      },
      [z, s, l]
    ), H = q(() => {
      s || l || (_ ? (b(!1), L(h)) : (v(C.current?.innerHTML ?? ""), b(!0)));
    }, [_, h, L, s, l]), ie = q(
      (Z) => {
        if (!(Z.ctrlKey || Z.metaKey) || s || l) return;
        const Oe = Z.key.toLowerCase(), ae = Oe === "b" ? "bold" : Oe === "i" ? "italic" : Oe === "u" ? "underline" : null;
        ae && (Z.preventDefault(), B(ae));
      },
      [B, s, l]
    ), Y = q(() => {
      const Z = C.current;
      Z && L(Z.innerHTML);
    }, [L]), G = q(() => {
      y.trim() && (z("createLink", y.trim()), $(""), u(null));
    }, [y, z]), X = q(() => {
      x.trim() && (z("insertImage", x.trim()), k(""), u(null));
    }, [x, z]), _e = q(
      async (Z) => {
        if (c) {
          I(!0);
          try {
            const Oe = new FormData();
            Oe.append(c.parameterName ?? "file", Z);
            const ae = await fetch(c.url, {
              method: "POST",
              headers: c.headers,
              body: Oe
            });
            if (!ae.ok)
              throw new Error(`Upload failed: ${ae.status}`);
            const be = (ae.headers.get("content-type") ?? "").includes("application/json") ? await ae.json() : await ae.text(), We = (c.parseUrl ?? Hp)(be);
            z("insertImage", We);
          } catch (Oe) {
            a?.(Oe instanceof Error ? Oe.message : "Image upload failed");
          } finally {
            I(!1), u(null);
          }
        }
      },
      [c, a, z]
    ), te = q(() => {
      const Z = Math.max(1, Math.min(10, Math.floor(w) || 1)), Oe = Math.max(1, Math.min(10, Math.floor(O) || 1)), ae = Array.from({ length: Oe }, () => "<td><br></td>").join(
        ""
      ), De = Array.from({ length: Z }, () => `<tr>${ae}</tr>`).join(
        ""
      );
      z("insertHTML", `<table><tbody>${De}</tbody></table>`), u(null);
    }, [w, O, z]), ge = (Z, Oe) => {
      if (Z === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: Ot.separator
          },
          `sep-${Oe}`
        );
      if (typeof Z == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": Z.label,
            title: Z.title ?? Z.label,
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && Z.onExecute(re);
            },
            children: Z.glyph ?? Z.label
          },
          Z.id
        );
      if (Z === "source")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Source",
            "aria-pressed": _,
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: H,
            children: "</>"
          },
          "source"
        );
      if (Z === "foreColor" || Z === "backgroundColor") {
        const De = Z === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ A("label", { className: Ot.tool, title: De, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": De,
              disabled: l,
              className: Ot.colorInput,
              onMouseDown: (be) => be.preventDefault(),
              onChange: (be) => z(
                Z === "foreColor" ? "foreColor" : "hiliteColor",
                be.target.value
              )
            }
          )
        ] }, Z);
      }
      if (Z === "formatBlock" || Z === "fontName" || Z === "fontSize") {
        const De = Z === "formatBlock" ? "Format block" : Z === "fontName" ? "Font name" : "Font size", be = Z === "formatBlock" ? Bp : Z === "fontName" ? Rp : jp;
        return /* @__PURE__ */ A(
          "select",
          {
            "aria-label": De,
            title: De,
            disabled: l,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (We) => We.preventDefault(),
            onChange: (We) => {
              !We.target.value || s || l || (Z === "formatBlock" ? Fp(We.target.value) : z(Z === "fontName" ? "fontName" : "fontSize", We.target.value), We.target.value = "");
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", disabled: !0, children: Z === "formatBlock" ? "¶" : Z === "fontName" ? "Aa" : "12" }),
              be.map((We) => /* @__PURE__ */ o("option", { value: We, children: We }, We))
            ]
          },
          Z
        );
      }
      if (Z === "link")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert link",
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && ($(""), u("link"));
            },
            children: "🔗"
          },
          "link"
        );
      if (Z === "image")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert image",
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && (k(""), u("image"));
            },
            children: "🖼"
          },
          "image"
        );
      if (Z === "table")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert table",
            disabled: l,
            onMouseDown: (De) => De.preventDefault(),
            onClick: () => {
              !s && !l && (S(2), P(2), u("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ae = ta[Z];
      return ae ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ot.tool,
          "aria-label": ae.label,
          disabled: l,
          onMouseDown: (De) => De.preventDefault(),
          onClick: () => B(Z),
          children: ae.glyph
        },
        Z
      ) : null;
    };
    return /* @__PURE__ */ A("div", { className: [Ot.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${d} toolbar`,
          className: Ot.toolbar,
          children: i.map((Z, Oe) => ge(Z, Oe))
        }
      ),
      _ ? /* @__PURE__ */ o(
        "textarea",
        {
          className: Ot.source,
          "aria-label": `${d} source`,
          value: h,
          disabled: l,
          readOnly: s,
          onChange: (Z) => {
            v(Z.target.value), L(Z.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: C,
          className: Ot.area,
          contentEditable: !s && !l,
          suppressContentEditableWarning: !0,
          role: "textbox",
          tabIndex: 0,
          "aria-label": d,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": l || void 0,
          dangerouslySetInnerHTML: { __html: T.current },
          onInput: Y,
          onKeyDown: ie
        }
      ),
      /* @__PURE__ */ A(
        Ma,
        {
          open: m !== null,
          onClose: () => u(null),
          title: m === "link" ? "Insert link" : m === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ A(ot, { children: [
            /* @__PURE__ */ o(dn, { variant: "text", onClick: () => u(null), children: "Cancel" }),
            m === "link" && /* @__PURE__ */ o(dn, { onClick: G, children: "Insert" }),
            m === "image" && /* @__PURE__ */ o(dn, { onClick: X, disabled: D, children: "Insert" }),
            m === "table" && /* @__PURE__ */ o(dn, { onClick: te, children: "Insert" })
          ] }),
          children: [
            m === "link" && /* @__PURE__ */ o(cr, { label: "URL", required: !0, children: ({ inputId: Z }) => /* @__PURE__ */ o(
              no,
              {
                id: Z,
                value: y,
                placeholder: "https://",
                onChange: (Oe) => $(Oe.target.value)
              }
            ) }),
            m === "image" && /* @__PURE__ */ A(ot, { children: [
              /* @__PURE__ */ o(cr, { label: "Image URL", children: ({ inputId: Z }) => /* @__PURE__ */ o(
                no,
                {
                  id: Z,
                  value: x,
                  placeholder: "https://",
                  onChange: (Oe) => k(Oe.target.value)
                }
              ) }),
              c && /* @__PURE__ */ o(cr, { label: "Or upload a file", children: ({ inputId: Z }) => /* @__PURE__ */ o(
                "input",
                {
                  id: Z,
                  ref: N,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: (Oe) => {
                    const ae = Oe.target.files?.[0];
                    ae && _e(ae), Oe.target.value = "";
                  }
                }
              ) }),
              D && /* @__PURE__ */ o(Aa, { textStyle: "body2", children: "Uploading…" })
            ] }),
            m === "table" && /* @__PURE__ */ A(ot, { children: [
              /* @__PURE__ */ o(cr, { label: "Rows", children: ({ inputId: Z }) => /* @__PURE__ */ o(
                no,
                {
                  id: Z,
                  type: "number",
                  value: String(w),
                  onChange: (Oe) => S(Number(Oe.target.value))
                }
              ) }),
              /* @__PURE__ */ o(cr, { label: "Columns", children: ({ inputId: Z }) => /* @__PURE__ */ o(
                no,
                {
                  id: Z,
                  type: "number",
                  value: String(O),
                  onChange: (Oe) => P(Number(Oe.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), Up = "_popup_ve7kd_4", Fa = {
  popup: Up
}, Ha = dr(null);
function h$() {
  const e = An(Ha);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function na(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function qp({ state: e }) {
  const t = ce(null), [n, r] = W(null);
  return Se(() => {
    const a = t.current;
    if (!a) return;
    const i = e.anchor.getBoundingClientRect(), c = a.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(i.left, window.innerWidth - c.width)
    );
    let l = i.bottom + 4;
    l + c.height > window.innerHeight && i.top - 4 - c.height >= 0 && (l = i.top - 4 - c.height), r({ left: s, top: Math.max(0, l) });
  }, [e]), Se(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [Fa.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: na(e.width),
        height: na(e.height)
      },
      children: e.content
    }
  );
}
function _$({ children: e }) {
  const [t, n] = W(null), r = ce(0), a = ce(null), i = q(() => {
    a.current?.(), a.current = null;
  }, []), c = q(() => {
    n((d) => d && (d.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), s = q(
    (d) => {
      r.current += 1;
      const f = r.current;
      a.current = d.onClose ?? null, n({
        ...d,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), d.onOpen?.();
      let p = !1;
      return () => {
        p || (p = !0, n((g) => g?.seq !== f ? g : (g.invoker && document.body.contains(g.invoker) && g.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  Se(() => {
    if (!t) return;
    const d = (_) => {
      const b = document.querySelector(`.${Fa.popup}`);
      b && !b.contains(_.target) && c();
    }, f = (_) => {
      _.key === "Escape" && (_.preventDefault(), c());
    }, p = () => c(), g = () => c();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", p), window.addEventListener("hashchange", g), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", p), window.removeEventListener("hashchange", g);
    };
  }, [t, c]);
  const l = $e(
    () => ({ open: s, close: c, isOpen: t != null }),
    [s, c, t]
  );
  return /* @__PURE__ */ A(Ha.Provider, { value: l, children: [
    e,
    t && /* @__PURE__ */ o(qp, { state: t }, t.seq)
  ] });
}
const Wp = "_alert_146r9_1", Kp = "_xs_146r9_28", Gp = "_sm_146r9_38", Vp = "_lg_146r9_48", Yp = "_xl_146r9_58", Xp = "_primary_146r9_69", Zp = "_secondary_146r9_74", Jp = "_light_146r9_79", Qp = "_base_146r9_84", eh = "_dark_146r9_89", th = "_info_146r9_94", nh = "_success_146r9_99", rh = "_warning_146r9_104", oh = "_danger_146r9_109", sh = "_flat_146r9_116", ah = "_outlined_146r9_123", lh = "_filled_146r9_132", ih = "_text_146r9_139", ch = "_icon_146r9_181", dh = "_content_146r9_192", uh = "_title_146r9_197", fh = "_body_146r9_203", ph = "_dismiss_146r9_209", On = {
  alert: Wp,
  xs: Kp,
  sm: Gp,
  lg: Vp,
  xl: Yp,
  primary: Xp,
  secondary: Zp,
  light: Jp,
  base: Qp,
  dark: eh,
  info: th,
  success: nh,
  warning: rh,
  danger: oh,
  flat: sh,
  outlined: ah,
  filled: lh,
  text: ih,
  icon: ch,
  content: dh,
  title: uh,
  body: fh,
  dismiss: ph,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, hh = {
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
function m$({
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
  visible: f,
  onVisibleChange: p,
  className: g,
  ..._
}) {
  const [b, h] = W(!1);
  if (f === !1 || f === void 0 && b)
    return null;
  const v = () => {
    f === void 0 && h(!0), d?.(), p?.(!1);
  }, m = e, u = $a(t, "filled"), y = Xr(n), $ = i ?? (c ? /* @__PURE__ */ o(Ce, { icon: hh[e] }) : null);
  return /* @__PURE__ */ A(
    "div",
    {
      role: "alert",
      ..._,
      className: [
        On.alert,
        On[m],
        On[u],
        y ? On[y] : null,
        On[r],
        g
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ o("span", { className: On.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ A("div", { className: On.content, children: [
          a && /* @__PURE__ */ o("div", { className: On.title, children: a }),
          s && /* @__PURE__ */ o("div", { className: On.body, children: s })
        ] }),
        l && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: On.dismiss,
            onClick: v,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const _h = "_skeleton_1xyce_1", mh = "_text_1xyce_35", gh = "_circle_1xyce_40", yh = "_rect_1xyce_44", ra = {
  skeleton: _h,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: mh,
  circle: gh,
  rect: yh
};
function g$({
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
      className: [ra.skeleton, ra[e], r].filter(Boolean).join(" "),
      style: a
    }
  );
}
function xo(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const bh = "_row_juebr_1", xh = "_start_juebr_14", vh = "_center_juebr_18", wh = "_end_juebr_22", kh = "_stretch_juebr_26", Nh = "_baseline_juebr_30", Sh = "_normal_juebr_34", $h = "_noWrap_juebr_90", Oh = "_wrapReverse_juebr_94", io = {
  row: bh,
  start: xh,
  center: vh,
  end: wh,
  stretch: kh,
  baseline: Nh,
  normal: Sh,
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
  noWrap: $h,
  wrapReverse: Oh
};
function oa(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function y$({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: a = !0,
  className: i,
  style: c,
  ...s
}) {
  const l = e != null ? xo(e) : null, d = t != null ? xo(t) : null, f = {
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
        oa(a) != null ? io[oa(a)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const Eh = "_column_sh0ss_1", Ch = "_Size1_sh0ss_15", Th = "_Size2_sh0ss_24", Mh = "_Size3_sh0ss_33", Ah = "_Size4_sh0ss_42", Dh = "_Size5_sh0ss_51", Ih = "_Size6_sh0ss_60", zh = "_Size7_sh0ss_69", Lh = "_Size8_sh0ss_78", Ph = "_Size9_sh0ss_87", Rh = "_Size10_sh0ss_96", jh = "_Size11_sh0ss_105", Bh = "_Size12_sh0ss_114", Fh = "_Offset0_sh0ss_119", Hh = "_Offset1_sh0ss_122", Uh = "_Offset2_sh0ss_127", qh = "_Offset3_sh0ss_132", Wh = "_Offset4_sh0ss_137", Kh = "_Offset5_sh0ss_142", Gh = "_Offset6_sh0ss_147", Vh = "_Offset7_sh0ss_152", Yh = "_Offset8_sh0ss_157", Xh = "_Offset9_sh0ss_162", Zh = "_Offset10_sh0ss_167", Jh = "_Offset11_sh0ss_172", Qh = "_Offset12_sh0ss_177", e_ = "_OrderFirst_sh0ss_182", t_ = "_OrderLast_sh0ss_185", n_ = "_Order0_sh0ss_188", r_ = "_Order1_sh0ss_191", o_ = "_Order2_sh0ss_194", s_ = "_Order3_sh0ss_197", a_ = "_Order4_sh0ss_200", l_ = "_Order5_sh0ss_203", i_ = "_Order6_sh0ss_206", c_ = "_Order7_sh0ss_209", d_ = "_Order8_sh0ss_212", u_ = "_Order9_sh0ss_215", f_ = "_Order10_sh0ss_218", p_ = "_Order11_sh0ss_221", h_ = "_Order12_sh0ss_224", __ = "_xsSize1_sh0ss_229", m_ = "_xsSize2_sh0ss_238", g_ = "_xsSize3_sh0ss_247", y_ = "_xsSize4_sh0ss_256", b_ = "_xsSize5_sh0ss_265", x_ = "_xsSize6_sh0ss_274", v_ = "_xsSize7_sh0ss_283", w_ = "_xsSize8_sh0ss_292", k_ = "_xsSize9_sh0ss_301", N_ = "_xsSize10_sh0ss_310", S_ = "_xsSize11_sh0ss_321", $_ = "_xsSize12_sh0ss_332", O_ = "_xsOffset0_sh0ss_337", E_ = "_xsOffset1_sh0ss_340", C_ = "_xsOffset2_sh0ss_345", T_ = "_xsOffset3_sh0ss_350", M_ = "_xsOffset4_sh0ss_355", A_ = "_xsOffset5_sh0ss_360", D_ = "_xsOffset6_sh0ss_365", I_ = "_xsOffset7_sh0ss_370", z_ = "_xsOffset8_sh0ss_375", L_ = "_xsOffset9_sh0ss_380", P_ = "_xsOffset10_sh0ss_385", R_ = "_xsOffset11_sh0ss_391", j_ = "_xsOffset12_sh0ss_397", B_ = "_xsOrderFirst_sh0ss_403", F_ = "_xsOrderLast_sh0ss_406", H_ = "_xsOrder0_sh0ss_409", U_ = "_xsOrder1_sh0ss_412", q_ = "_xsOrder2_sh0ss_415", W_ = "_xsOrder3_sh0ss_418", K_ = "_xsOrder4_sh0ss_421", G_ = "_xsOrder5_sh0ss_424", V_ = "_xsOrder6_sh0ss_427", Y_ = "_xsOrder7_sh0ss_430", X_ = "_xsOrder8_sh0ss_433", Z_ = "_xsOrder9_sh0ss_436", J_ = "_xsOrder10_sh0ss_439", Q_ = "_xsOrder11_sh0ss_442", em = "_xsOrder12_sh0ss_445", tm = "_smSize1_sh0ss_451", nm = "_smSize2_sh0ss_460", rm = "_smSize3_sh0ss_469", om = "_smSize4_sh0ss_478", sm = "_smSize5_sh0ss_487", am = "_smSize6_sh0ss_496", lm = "_smSize7_sh0ss_505", im = "_smSize8_sh0ss_514", cm = "_smSize9_sh0ss_523", dm = "_smSize10_sh0ss_532", um = "_smSize11_sh0ss_543", fm = "_smSize12_sh0ss_554", pm = "_smOffset0_sh0ss_559", hm = "_smOffset1_sh0ss_562", _m = "_smOffset2_sh0ss_567", mm = "_smOffset3_sh0ss_572", gm = "_smOffset4_sh0ss_577", ym = "_smOffset5_sh0ss_582", bm = "_smOffset6_sh0ss_587", xm = "_smOffset7_sh0ss_592", vm = "_smOffset8_sh0ss_597", wm = "_smOffset9_sh0ss_602", km = "_smOffset10_sh0ss_607", Nm = "_smOffset11_sh0ss_613", Sm = "_smOffset12_sh0ss_619", $m = "_smOrderFirst_sh0ss_625", Om = "_smOrderLast_sh0ss_628", Em = "_smOrder0_sh0ss_631", Cm = "_smOrder1_sh0ss_634", Tm = "_smOrder2_sh0ss_637", Mm = "_smOrder3_sh0ss_640", Am = "_smOrder4_sh0ss_643", Dm = "_smOrder5_sh0ss_646", Im = "_smOrder6_sh0ss_649", zm = "_smOrder7_sh0ss_652", Lm = "_smOrder8_sh0ss_655", Pm = "_smOrder9_sh0ss_658", Rm = "_smOrder10_sh0ss_661", jm = "_smOrder11_sh0ss_664", Bm = "_smOrder12_sh0ss_667", Fm = "_mdSize1_sh0ss_673", Hm = "_mdSize2_sh0ss_682", Um = "_mdSize3_sh0ss_691", qm = "_mdSize4_sh0ss_700", Wm = "_mdSize5_sh0ss_709", Km = "_mdSize6_sh0ss_718", Gm = "_mdSize7_sh0ss_727", Vm = "_mdSize8_sh0ss_736", Ym = "_mdSize9_sh0ss_745", Xm = "_mdSize10_sh0ss_754", Zm = "_mdSize11_sh0ss_765", Jm = "_mdSize12_sh0ss_776", Qm = "_mdOffset0_sh0ss_781", e1 = "_mdOffset1_sh0ss_784", t1 = "_mdOffset2_sh0ss_789", n1 = "_mdOffset3_sh0ss_794", r1 = "_mdOffset4_sh0ss_799", o1 = "_mdOffset5_sh0ss_804", s1 = "_mdOffset6_sh0ss_809", a1 = "_mdOffset7_sh0ss_814", l1 = "_mdOffset8_sh0ss_819", i1 = "_mdOffset9_sh0ss_824", c1 = "_mdOffset10_sh0ss_829", d1 = "_mdOffset11_sh0ss_835", u1 = "_mdOffset12_sh0ss_841", f1 = "_mdOrderFirst_sh0ss_847", p1 = "_mdOrderLast_sh0ss_850", h1 = "_mdOrder0_sh0ss_853", _1 = "_mdOrder1_sh0ss_856", m1 = "_mdOrder2_sh0ss_859", g1 = "_mdOrder3_sh0ss_862", y1 = "_mdOrder4_sh0ss_865", b1 = "_mdOrder5_sh0ss_868", x1 = "_mdOrder6_sh0ss_871", v1 = "_mdOrder7_sh0ss_874", w1 = "_mdOrder8_sh0ss_877", k1 = "_mdOrder9_sh0ss_880", N1 = "_mdOrder10_sh0ss_883", S1 = "_mdOrder11_sh0ss_886", $1 = "_mdOrder12_sh0ss_889", O1 = "_lgSize1_sh0ss_895", E1 = "_lgSize2_sh0ss_904", C1 = "_lgSize3_sh0ss_913", T1 = "_lgSize4_sh0ss_922", M1 = "_lgSize5_sh0ss_931", A1 = "_lgSize6_sh0ss_940", D1 = "_lgSize7_sh0ss_949", I1 = "_lgSize8_sh0ss_958", z1 = "_lgSize9_sh0ss_967", L1 = "_lgSize10_sh0ss_976", P1 = "_lgSize11_sh0ss_987", R1 = "_lgSize12_sh0ss_998", j1 = "_lgOffset0_sh0ss_1003", B1 = "_lgOffset1_sh0ss_1006", F1 = "_lgOffset2_sh0ss_1011", H1 = "_lgOffset3_sh0ss_1016", U1 = "_lgOffset4_sh0ss_1021", q1 = "_lgOffset5_sh0ss_1026", W1 = "_lgOffset6_sh0ss_1031", K1 = "_lgOffset7_sh0ss_1036", G1 = "_lgOffset8_sh0ss_1041", V1 = "_lgOffset9_sh0ss_1046", Y1 = "_lgOffset10_sh0ss_1051", X1 = "_lgOffset11_sh0ss_1057", Z1 = "_lgOffset12_sh0ss_1063", J1 = "_lgOrderFirst_sh0ss_1069", Q1 = "_lgOrderLast_sh0ss_1072", eg = "_lgOrder0_sh0ss_1075", tg = "_lgOrder1_sh0ss_1078", ng = "_lgOrder2_sh0ss_1081", rg = "_lgOrder3_sh0ss_1084", og = "_lgOrder4_sh0ss_1087", sg = "_lgOrder5_sh0ss_1090", ag = "_lgOrder6_sh0ss_1093", lg = "_lgOrder7_sh0ss_1096", ig = "_lgOrder8_sh0ss_1099", cg = "_lgOrder9_sh0ss_1102", dg = "_lgOrder10_sh0ss_1105", ug = "_lgOrder11_sh0ss_1108", fg = "_lgOrder12_sh0ss_1111", pg = "_xlSize1_sh0ss_1117", hg = "_xlSize2_sh0ss_1126", _g = "_xlSize3_sh0ss_1135", mg = "_xlSize4_sh0ss_1144", gg = "_xlSize5_sh0ss_1153", yg = "_xlSize6_sh0ss_1162", bg = "_xlSize7_sh0ss_1171", xg = "_xlSize8_sh0ss_1180", vg = "_xlSize9_sh0ss_1189", wg = "_xlSize10_sh0ss_1198", kg = "_xlSize11_sh0ss_1209", Ng = "_xlSize12_sh0ss_1220", Sg = "_xlOffset0_sh0ss_1225", $g = "_xlOffset1_sh0ss_1228", Og = "_xlOffset2_sh0ss_1233", Eg = "_xlOffset3_sh0ss_1238", Cg = "_xlOffset4_sh0ss_1243", Tg = "_xlOffset5_sh0ss_1248", Mg = "_xlOffset6_sh0ss_1253", Ag = "_xlOffset7_sh0ss_1258", Dg = "_xlOffset8_sh0ss_1263", Ig = "_xlOffset9_sh0ss_1268", zg = "_xlOffset10_sh0ss_1273", Lg = "_xlOffset11_sh0ss_1279", Pg = "_xlOffset12_sh0ss_1285", Rg = "_xlOrderFirst_sh0ss_1291", jg = "_xlOrderLast_sh0ss_1294", Bg = "_xlOrder0_sh0ss_1297", Fg = "_xlOrder1_sh0ss_1300", Hg = "_xlOrder2_sh0ss_1303", Ug = "_xlOrder3_sh0ss_1306", qg = "_xlOrder4_sh0ss_1309", Wg = "_xlOrder5_sh0ss_1312", Kg = "_xlOrder6_sh0ss_1315", Gg = "_xlOrder7_sh0ss_1318", Vg = "_xlOrder8_sh0ss_1321", Yg = "_xlOrder9_sh0ss_1324", Xg = "_xlOrder10_sh0ss_1327", Zg = "_xlOrder11_sh0ss_1330", Jg = "_xlOrder12_sh0ss_1333", Qg = "_xxSize1_sh0ss_1339", e0 = "_xxSize2_sh0ss_1348", t0 = "_xxSize3_sh0ss_1357", n0 = "_xxSize4_sh0ss_1366", r0 = "_xxSize5_sh0ss_1375", o0 = "_xxSize6_sh0ss_1384", s0 = "_xxSize7_sh0ss_1393", a0 = "_xxSize8_sh0ss_1402", l0 = "_xxSize9_sh0ss_1411", i0 = "_xxSize10_sh0ss_1420", c0 = "_xxSize11_sh0ss_1431", d0 = "_xxSize12_sh0ss_1442", u0 = "_xxOffset0_sh0ss_1447", f0 = "_xxOffset1_sh0ss_1450", p0 = "_xxOffset2_sh0ss_1455", h0 = "_xxOffset3_sh0ss_1460", _0 = "_xxOffset4_sh0ss_1465", m0 = "_xxOffset5_sh0ss_1470", g0 = "_xxOffset6_sh0ss_1475", y0 = "_xxOffset7_sh0ss_1480", b0 = "_xxOffset8_sh0ss_1485", x0 = "_xxOffset9_sh0ss_1490", v0 = "_xxOffset10_sh0ss_1495", w0 = "_xxOffset11_sh0ss_1501", k0 = "_xxOffset12_sh0ss_1507", N0 = "_xxOrderFirst_sh0ss_1513", S0 = "_xxOrderLast_sh0ss_1516", $0 = "_xxOrder0_sh0ss_1519", O0 = "_xxOrder1_sh0ss_1522", E0 = "_xxOrder2_sh0ss_1525", C0 = "_xxOrder3_sh0ss_1528", T0 = "_xxOrder4_sh0ss_1531", M0 = "_xxOrder5_sh0ss_1534", A0 = "_xxOrder6_sh0ss_1537", D0 = "_xxOrder7_sh0ss_1540", I0 = "_xxOrder8_sh0ss_1543", z0 = "_xxOrder9_sh0ss_1546", L0 = "_xxOrder10_sh0ss_1549", P0 = "_xxOrder11_sh0ss_1552", R0 = "_xxOrder12_sh0ss_1555", co = {
  column: Eh,
  Size1: Ch,
  Size2: Th,
  Size3: Mh,
  Size4: Ah,
  Size5: Dh,
  Size6: Ih,
  Size7: zh,
  Size8: Lh,
  Size9: Ph,
  Size10: Rh,
  Size11: jh,
  Size12: Bh,
  Offset0: Fh,
  Offset1: Hh,
  Offset2: Uh,
  Offset3: qh,
  Offset4: Wh,
  Offset5: Kh,
  Offset6: Gh,
  Offset7: Vh,
  Offset8: Yh,
  Offset9: Xh,
  Offset10: Zh,
  Offset11: Jh,
  Offset12: Qh,
  OrderFirst: e_,
  OrderLast: t_,
  Order0: n_,
  Order1: r_,
  Order2: o_,
  Order3: s_,
  Order4: a_,
  Order5: l_,
  Order6: i_,
  Order7: c_,
  Order8: d_,
  Order9: u_,
  Order10: f_,
  Order11: p_,
  Order12: h_,
  xsSize1: __,
  xsSize2: m_,
  xsSize3: g_,
  xsSize4: y_,
  xsSize5: b_,
  xsSize6: x_,
  xsSize7: v_,
  xsSize8: w_,
  xsSize9: k_,
  xsSize10: N_,
  xsSize11: S_,
  xsSize12: $_,
  xsOffset0: O_,
  xsOffset1: E_,
  xsOffset2: C_,
  xsOffset3: T_,
  xsOffset4: M_,
  xsOffset5: A_,
  xsOffset6: D_,
  xsOffset7: I_,
  xsOffset8: z_,
  xsOffset9: L_,
  xsOffset10: P_,
  xsOffset11: R_,
  xsOffset12: j_,
  xsOrderFirst: B_,
  xsOrderLast: F_,
  xsOrder0: H_,
  xsOrder1: U_,
  xsOrder2: q_,
  xsOrder3: W_,
  xsOrder4: K_,
  xsOrder5: G_,
  xsOrder6: V_,
  xsOrder7: Y_,
  xsOrder8: X_,
  xsOrder9: Z_,
  xsOrder10: J_,
  xsOrder11: Q_,
  xsOrder12: em,
  smSize1: tm,
  smSize2: nm,
  smSize3: rm,
  smSize4: om,
  smSize5: sm,
  smSize6: am,
  smSize7: lm,
  smSize8: im,
  smSize9: cm,
  smSize10: dm,
  smSize11: um,
  smSize12: fm,
  smOffset0: pm,
  smOffset1: hm,
  smOffset2: _m,
  smOffset3: mm,
  smOffset4: gm,
  smOffset5: ym,
  smOffset6: bm,
  smOffset7: xm,
  smOffset8: vm,
  smOffset9: wm,
  smOffset10: km,
  smOffset11: Nm,
  smOffset12: Sm,
  smOrderFirst: $m,
  smOrderLast: Om,
  smOrder0: Em,
  smOrder1: Cm,
  smOrder2: Tm,
  smOrder3: Mm,
  smOrder4: Am,
  smOrder5: Dm,
  smOrder6: Im,
  smOrder7: zm,
  smOrder8: Lm,
  smOrder9: Pm,
  smOrder10: Rm,
  smOrder11: jm,
  smOrder12: Bm,
  mdSize1: Fm,
  mdSize2: Hm,
  mdSize3: Um,
  mdSize4: qm,
  mdSize5: Wm,
  mdSize6: Km,
  mdSize7: Gm,
  mdSize8: Vm,
  mdSize9: Ym,
  mdSize10: Xm,
  mdSize11: Zm,
  mdSize12: Jm,
  mdOffset0: Qm,
  mdOffset1: e1,
  mdOffset2: t1,
  mdOffset3: n1,
  mdOffset4: r1,
  mdOffset5: o1,
  mdOffset6: s1,
  mdOffset7: a1,
  mdOffset8: l1,
  mdOffset9: i1,
  mdOffset10: c1,
  mdOffset11: d1,
  mdOffset12: u1,
  mdOrderFirst: f1,
  mdOrderLast: p1,
  mdOrder0: h1,
  mdOrder1: _1,
  mdOrder2: m1,
  mdOrder3: g1,
  mdOrder4: y1,
  mdOrder5: b1,
  mdOrder6: x1,
  mdOrder7: v1,
  mdOrder8: w1,
  mdOrder9: k1,
  mdOrder10: N1,
  mdOrder11: S1,
  mdOrder12: $1,
  lgSize1: O1,
  lgSize2: E1,
  lgSize3: C1,
  lgSize4: T1,
  lgSize5: M1,
  lgSize6: A1,
  lgSize7: D1,
  lgSize8: I1,
  lgSize9: z1,
  lgSize10: L1,
  lgSize11: P1,
  lgSize12: R1,
  lgOffset0: j1,
  lgOffset1: B1,
  lgOffset2: F1,
  lgOffset3: H1,
  lgOffset4: U1,
  lgOffset5: q1,
  lgOffset6: W1,
  lgOffset7: K1,
  lgOffset8: G1,
  lgOffset9: V1,
  lgOffset10: Y1,
  lgOffset11: X1,
  lgOffset12: Z1,
  lgOrderFirst: J1,
  lgOrderLast: Q1,
  lgOrder0: eg,
  lgOrder1: tg,
  lgOrder2: ng,
  lgOrder3: rg,
  lgOrder4: og,
  lgOrder5: sg,
  lgOrder6: ag,
  lgOrder7: lg,
  lgOrder8: ig,
  lgOrder9: cg,
  lgOrder10: dg,
  lgOrder11: ug,
  lgOrder12: fg,
  xlSize1: pg,
  xlSize2: hg,
  xlSize3: _g,
  xlSize4: mg,
  xlSize5: gg,
  xlSize6: yg,
  xlSize7: bg,
  xlSize8: xg,
  xlSize9: vg,
  xlSize10: wg,
  xlSize11: kg,
  xlSize12: Ng,
  xlOffset0: Sg,
  xlOffset1: $g,
  xlOffset2: Og,
  xlOffset3: Eg,
  xlOffset4: Cg,
  xlOffset5: Tg,
  xlOffset6: Mg,
  xlOffset7: Ag,
  xlOffset8: Dg,
  xlOffset9: Ig,
  xlOffset10: zg,
  xlOffset11: Lg,
  xlOffset12: Pg,
  xlOrderFirst: Rg,
  xlOrderLast: jg,
  xlOrder0: Bg,
  xlOrder1: Fg,
  xlOrder2: Hg,
  xlOrder3: Ug,
  xlOrder4: qg,
  xlOrder5: Wg,
  xlOrder6: Kg,
  xlOrder7: Gg,
  xlOrder8: Vg,
  xlOrder9: Yg,
  xlOrder10: Xg,
  xlOrder11: Zg,
  xlOrder12: Jg,
  xxSize1: Qg,
  xxSize2: e0,
  xxSize3: t0,
  xxSize4: n0,
  xxSize5: r0,
  xxSize6: o0,
  xxSize7: s0,
  xxSize8: a0,
  xxSize9: l0,
  xxSize10: i0,
  xxSize11: c0,
  xxSize12: d0,
  xxOffset0: u0,
  xxOffset1: f0,
  xxOffset2: p0,
  xxOffset3: h0,
  xxOffset4: _0,
  xxOffset5: m0,
  xxOffset6: g0,
  xxOffset7: y0,
  xxOffset8: b0,
  xxOffset9: x0,
  xxOffset10: v0,
  xxOffset11: w0,
  xxOffset12: k0,
  xxOrderFirst: N0,
  xxOrderLast: S0,
  xxOrder0: $0,
  xxOrder1: O0,
  xxOrder2: E0,
  xxOrder3: C0,
  xxOrder4: T0,
  xxOrder5: M0,
  xxOrder6: A0,
  xxOrder7: D0,
  xxOrder8: I0,
  xxOrder9: z0,
  xxOrder10: L0,
  xxOrder11: P0,
  xxOrder12: R0
}, j0 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function B0(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function F0(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function H0(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function U0(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (H0(n, t), `${e}Order${t}`);
}
function b$({ className: e, style: t, ...n }) {
  const r = [co.column], a = { ...t };
  for (const [D, I, C, N] of j0) {
    const T = n[I], M = n[C], L = n[N];
    if (T != null) {
      B0(I, T);
      const z = co[`${D}Size${T}`];
      z && r.push(z);
    }
    if (M != null) {
      F0(C, M);
      const z = co[`${D}Offset${M}`];
      z && r.push(z);
    }
    if (L != null) {
      const z = co[U0(D, L, N)];
      z && r.push(z);
    }
  }
  const {
    size: i,
    offset: c,
    sizeXs: s,
    offsetXs: l,
    sizeSm: d,
    offsetSm: f,
    sizeMd: p,
    offsetMd: g,
    sizeLg: _,
    offsetLg: b,
    sizeXl: h,
    offsetXl: v,
    sizeXx: m,
    offsetXx: u,
    order: y,
    orderXs: $,
    orderSm: x,
    orderMd: k,
    orderLg: w,
    orderXl: S,
    orderXx: O,
    ...P
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: a,
      ...P
    }
  );
}
const q0 = "_stack_bmbbp_1", Br = {
  stack: q0,
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
function sa(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function x$({
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
  const d = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: xo(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Br.stack,
        Br[`dir-${d}`],
        sa(n) !== "wrap" ? Br[`wrap-${sa(n)}`] : null,
        a != null ? Br[`align-${a}`] : null,
        i != null ? Br[`justify-${i}`] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const W0 = "_autogrid_16x9f_1", K0 = {
  autogrid: W0
};
function v$({
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
      className: [K0.autogrid, n].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const G0 = "_layout_fxvw1_1", V0 = "_row_fxvw1_7", Y0 = "_grid_fxvw1_21", X0 = "_gridRight_fxvw1_27", Z0 = "_gridHeader_fxvw1_31", J0 = "_gridFooter_fxvw1_36", Q0 = "_gridContents_fxvw1_41", ey = "_gridBody_fxvw1_45", In = {
  layout: G0,
  row: V0,
  grid: Y0,
  gridRight: X0,
  gridHeader: Z0,
  gridFooter: J0,
  gridContents: Q0,
  gridBody: ey
}, ty = "_footer_3be5w_1", ny = "_sticky_3be5w_9", aa = {
  footer: ty,
  sticky: ny
};
function ry({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [aa.footer, e ? aa.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const oy = "_header_1tw8b_1", sy = "_sticky_1tw8b_9", la = {
  header: oy,
  sticky: sy
};
function ay({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [la.header, e ? la.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const ly = "_sidebar_175d5_1", iy = "_sticky_175d5_23", cy = "_left_175d5_41", dy = "_right_175d5_45", uy = "_start_175d5_50", fy = "_end_175d5_54", py = "_fullHeight_175d5_60", hy = "_collapsed_175d5_64", _y = "_responsive_175d5_72", my = "_overlay_175d5_80", gy = "_mask_175d5_108", Vn = {
  sidebar: ly,
  sticky: iy,
  left: cy,
  right: dy,
  start: uy,
  end: fy,
  fullHeight: py,
  collapsed: hy,
  responsive: _y,
  overlay: my,
  mask: gy
};
function yy({
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
  return Se(() => {
    if (!r || !t || c == null) return;
    const f = (p) => {
      p.key === "Escape" && c();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, c]), /* @__PURE__ */ A(ot, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${Vn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: c
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          Vn.sidebar,
          Vn[e],
          t ? null : Vn.collapsed,
          n ? Vn.responsive : null,
          r ? [Vn.overlay, "se-sidebar--overlay"] : null,
          a ? Vn.fullHeight : null,
          i && !r && !a ? Vn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...d,
        children: l
      }
    )
  ] });
}
function w$(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(ot, { children: e.children });
  const { className: t, children: n, ...r } = e, a = [], i = [], c = [], s = [], l = [], d = [];
  Zr.forEach(n, (g) => {
    if (!Kt(g)) {
      c.push(g);
      return;
    }
    if (g.type === ay)
      a.push(g);
    else if (g.type === ry)
      i.push(g);
    else if (g.type === yy) {
      const _ = g, b = _.props.position;
      d.push(_), (b === "right" || b === "end" ? l : s).push(_);
    } else
      c.push(g);
  });
  const f = d.length === 1 && d[0]?.props.fullHeight === !0 ? d[0] : null, p = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const g = p ? l : s;
    return /* @__PURE__ */ A(
      "div",
      {
        className: [
          In.layout,
          In.grid,
          p ? In.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          a.length > 0 && /* @__PURE__ */ o("div", { className: In.gridHeader, children: a }),
          /* @__PURE__ */ A("div", { className: In.gridContents, children: [
            g,
            /* @__PURE__ */ o("div", { className: In.gridBody, children: c })
          ] }),
          i.length > 0 && /* @__PURE__ */ o("div", { className: In.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ A(
    "div",
    {
      className: [In.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        a,
        /* @__PURE__ */ A("div", { className: In.row, children: [
          s,
          c,
          l
        ] }),
        i
      ]
    }
  );
}
const by = "_body_1ge00_4", xy = "_bare_1ge00_12", ia = {
  body: by,
  bare: xy
};
function k$({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [ia.body, t ? null : ia.bare, n].filter(Boolean).join(" "),
      ...a,
      children: r
    }
  );
}
const vy = "_toggle_lxnk5_1", wy = {
  toggle: vy
};
function N$({
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
      className: [wy.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: a ?? /* @__PURE__ */ o(Ce, { icon: e, size: 20 })
    }
  );
}
const ky = "_track_14127_1", Ny = "_bar_14127_31", Sy = "_primary_14127_39", $y = "_success_14127_43", Oy = "_warning_14127_47", Ey = "_danger_14127_51", Cy = "_indeterminate_14127_149", Ty = "_circular_14127_163", My = "_fill_14127_203", on = {
  track: ky,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Ny,
  primary: Sy,
  success: $y,
  warning: Oy,
  danger: Ey,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Cy,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Ty,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: My,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function S$({
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
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const _ = typeof c == "string", b = 2, h = 10.5, v = 2 * Math.PI * h, m = v * (a ? 0.75 : 1), u = a ? 0 : v * (1 - p / 100), y = Xr(r);
    return /* @__PURE__ */ A(
      "svg",
      {
        width: _ ? void 0 : c,
        height: _ ? void 0 : c,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": d["aria-label"],
        "aria-labelledby": d["aria-labelledby"],
        "aria-valuenow": a ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...d,
        className: [
          on.circular,
          on[n],
          y ? on[y] : null,
          _ ? on[`circular-${c}`] : null,
          a ? on.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: on.track,
              cx: 12,
              cy: 12,
              r: h,
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: on.fill,
              cx: 12,
              cy: 12,
              r: h,
              strokeWidth: b,
              strokeDasharray: `${m} ${v}`,
              strokeDashoffset: u
            }
          )
        ]
      }
    );
  }
  const g = Xr(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": a ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        on.track,
        on[n],
        g ? on[g] : null,
        typeof c == "string" ? on[`linear-${c}`] : null,
        a ? on.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...d,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: on.bar,
          style: a ? void 0 : { width: `${p}%` }
        }
      )
    }
  );
}
function Ay(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Eo(e) {
  const [t, n] = W(() => Ay(e));
  return Se(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const a = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", a), () => r.removeEventListener("change", a)) : (r.addListener(a), () => r.removeListener(a));
  }, [e]), t;
}
const Dy = "_pressed_12x15_8", Iy = {
  pressed: Dy
}, zy = at(
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
    onClick: f,
    children: p,
    variant: g,
    severity: _,
    shade: b,
    ...h
  }, v) {
    const [m, u] = W(n), y = t ?? m, $ = (x) => {
      const k = !y;
      t === void 0 && u(k), r?.(k), f?.(x);
    };
    return /* @__PURE__ */ o(
      dn,
      {
        ...h,
        ref: v,
        variant: y && a ? a : g,
        severity: y ? i : _,
        shade: y ? c : b,
        size: l,
        "aria-pressed": y,
        className: [y ? Iy.pressed : null, d].filter(Boolean).join(" "),
        onClick: $,
        children: y && s !== void 0 ? s : p
      }
    );
  }
), Ua = "dx-theme";
function Ly(e) {
  const t = e === void 0 ? Ua : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Py(e, t) {
  const n = e === void 0 ? Ua : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function $$({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: a = "Dark mode",
  id: i,
  className: c,
  size: s
}) {
  const l = Eo("(prefers-color-scheme: dark)"), [d, f] = W(void 0), p = e !== void 0, g = e ?? d ?? Ly(n) ?? t ?? "system", _ = g === "system" ? l ? "dark" : "light" : g;
  return Se(() => {
    if (!p) {
      if (g === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = g;
    }
  }, [g, p]), /* @__PURE__ */ o(
    zy,
    {
      id: i,
      size: s,
      className: c,
      "aria-label": a,
      variant: "text",
      severity: "base",
      pressed: _ === "dark",
      onChange: (h) => {
        const v = h ? "dark" : "light";
        p || (f(v), Py(n, v)), r?.(v);
      },
      toggleContent: /* @__PURE__ */ o(Ce, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Ce, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const qa = "dx-palette", Wa = "dx-theme", Jo = "data-palette", Qo = "data-theme", es = /* @__PURE__ */ new Set();
function Ry() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Jo), t = document.documentElement.getAttribute(Qo);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function fs(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Jo) : document.documentElement.setAttribute(Jo, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Qo) : document.documentElement.setAttribute(Qo, e.appearance));
}
function Ka(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function ca(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let da = !1;
function $r() {
  const e = Ry();
  if (!da) {
    da = !0;
    const t = ca(qa), n = ca(Wa), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), a = { theme: e.theme ?? t, appearance: r };
    return (a.theme != null || a.appearance != null) && fs(a), a;
  }
  return e;
}
function Ga() {
  const e = $r();
  es.forEach((t) => t({ ...e }));
}
function ua(e) {
  return es.add(e), () => {
    es.delete(e);
  };
}
function O$() {
  return $r().theme;
}
function jy(e) {
  const t = $r();
  t.theme !== e && (t.theme = e, fs(t), Ka(qa, e), Ga());
}
function E$() {
  return $r().appearance;
}
function By(e) {
  const t = $r();
  t.appearance !== e && (t.appearance = e, fs(t), Ka(Wa, e), Ga());
}
function C$() {
  const [, e] = W(0);
  Se(() => ua(() => e((n) => n + 1)), []);
  const t = $r();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: jy,
    setAppearance: By,
    subscribe: ua
  };
}
function Fy(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, a = new Uint8Array(r);
  a.set(t), a[t.length] = 128;
  const i = new DataView(a.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const c = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (h, v) => Math.floor(Math.abs(Math.sin(v + 1)) * 4294967296)
  ), l = (h, v) => h + v | 0, d = (h, v) => h << v | h >>> 32 - v;
  let f = 1732584193, p = 4023233417, g = 2562383102, _ = 271733878;
  for (let h = 0; h < r; h += 64) {
    const v = [];
    for (let x = 0; x < 16; x += 1)
      v.push(i.getUint32(h + x * 4, !0));
    let m = f, u = p, y = g, $ = _;
    for (let x = 0; x < 64; x += 1) {
      let k, w;
      x < 16 ? (k = u & y | ~u & $, w = x) : x < 32 ? (k = $ & u | ~$ & y, w = (5 * x + 1) % 16) : x < 48 ? (k = u ^ y ^ $, w = (3 * x + 5) % 16) : (k = y ^ (u | ~$), w = 7 * x % 16), k = l(l(l(k, m), s[x]), v[w]), m = $, $ = y, y = u, u = l(u, d(k, c[Math.floor(x / 16) * 4 + x % 4]));
    }
    f = l(f, m), p = l(p, u), g = l(g, y), _ = l(_, $);
  }
  const b = (h) => {
    let v = "";
    for (let m = 0; m < 4; m += 1)
      v += `0${(h >>> m * 8 & 255).toString(16)}`.slice(-2);
    return v;
  };
  return b(f) + b(p) + b(g) + b(_);
}
const Hy = "_avatar_1mhfr_1", Uy = "_xs_1mhfr_12", qy = "_sm_1mhfr_18", Wy = "_md_1mhfr_24", Ky = "_lg_1mhfr_30", Gy = "_xl_1mhfr_36", Vy = "_initials_1mhfr_42", Yy = "_image_1mhfr_57", Xy = "_status_1mhfr_64", Zy = "_online_1mhfr_84", Jy = "_offline_1mhfr_88", Qy = "_away_1mhfr_92", _r = {
  avatar: Hy,
  xs: Uy,
  sm: qy,
  md: Wy,
  lg: Ky,
  xl: Gy,
  initials: Vy,
  image: Yy,
  status: Xy,
  online: Zy,
  offline: Jy,
  away: Qy
}, eb = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, mo = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function tb(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function nb(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return mo[t % mo.length] ?? mo[0];
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
  const d = $e(() => e ? tb(e) : "?", [e]), f = $e(() => e ? nb(e) : mo[0], [e]), p = $e(() => {
    if (t != null || n == null) return;
    const $ = n.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${Fy($)}?d=${r}&s=${eb[c]}&r=${a}`;
  }, [t, n, r, a, c]), g = t ?? p, [_, b] = W(null), h = g != null && _ !== g, v = h && i === "", m = i ?? e ?? "avatar", u = s ? `${m}, ${s}` : m, y = h ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: _r.image,
        src: g,
        alt: v ? "" : s ? u : m,
        onError: () => b(g ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: _r.initials,
      style: { background: f },
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
      role: h ? void 0 : "img",
      "aria-label": h ? void 0 : u,
      children: [
        y,
        s && /* @__PURE__ */ o("span", { className: _r.status, "aria-hidden": "true" })
      ]
    }
  );
}
const rb = "_root_zzwfz_1", ob = "_left_zzwfz_6", sb = "_right_zzwfz_7", ab = "_panel_zzwfz_12", lb = "_bottom_zzwfz_20", ib = "_tabList_zzwfz_24", cb = "_underline_zzwfz_53", db = "_pills_zzwfz_72", ub = "_tab_zzwfz_24", fb = "_active_zzwfz_113", pb = "_disabled_zzwfz_139", zn = {
  root: rb,
  left: ob,
  right: sb,
  panel: ab,
  bottom: lb,
  tabList: ib,
  underline: cb,
  pills: db,
  tab: ub,
  active: fb,
  disabled: pb
};
function M$({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: a = "underline",
  position: i = "top",
  className: c,
  ariaLabel: s,
  ariaLabelledBy: l
}) {
  const d = ct(), f = ce(null), [p, g] = W(
    n ?? e[0]?.key ?? ""
  ), _ = t ?? p, b = i === "left" || i === "right", h = (u) => {
    g(u), r?.(u);
  }, v = (u) => {
    const y = e.filter((k) => !k.disabled), $ = y.findIndex((k) => k.key === _);
    let x = -1;
    u.key === "ArrowRight" || b && u.key === "ArrowDown" ? x = ($ + 1) % y.length : u.key === "ArrowLeft" || b && u.key === "ArrowUp" ? x = ($ - 1 + y.length) % y.length : u.key === "Home" ? x = 0 : u.key === "End" && (x = y.length - 1), x >= 0 && (u.preventDefault(), f.current?.querySelector(
      `[data-tab-key="${CSS.escape(y[x]?.key ?? "")}"]`
    )?.focus(), h(y[x]?.key ?? ""));
  }, m = e.find((u) => u.key === _);
  return /* @__PURE__ */ A(
    "div",
    {
      className: [zn.root, zn[i], c].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: f,
            role: "tablist",
            "aria-label": s,
            "aria-labelledby": l,
            tabIndex: -1,
            className: [zn.tabList, zn[a], zn[i]].filter(Boolean).join(" "),
            onKeyDown: v,
            children: e.map((u) => {
              const y = u.key === _;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${d}-tab-${u.key}`,
                  "data-tab-key": u.key,
                  "aria-selected": y,
                  "aria-controls": `${d}-panel-${u.key}`,
                  tabIndex: y ? 0 : -1,
                  disabled: u.disabled,
                  className: [
                    zn.tab,
                    y ? zn.active : null,
                    u.disabled ? zn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => h(u.key),
                  children: u.label
                },
                u.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ o(
          "div",
          {
            role: "tabpanel",
            id: `${d}-panel-${m.key}`,
            "aria-labelledby": `${d}-tab-${m.key}`,
            className: zn.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const hb = "_root_1l1j2_1", _b = "_item_1l1j2_9", mb = "_heading_1l1j2_13", gb = "_trigger_1l1j2_17", yb = "_disabled_1l1j2_34", bb = "_title_1l1j2_48", xb = "_chevron_1l1j2_52", vb = "_open_1l1j2_59", wb = "_content_1l1j2_63", Ln = {
  root: hb,
  item: _b,
  heading: mb,
  trigger: gb,
  disabled: yb,
  title: bb,
  chevron: xb,
  open: vb,
  content: wb
};
function A$({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: a,
  className: i
}) {
  const c = ct(), [s, l] = W(
    r ?? []
  ), d = n ?? s, f = (p) => {
    const g = d.includes(p) ? d.filter((_) => _ !== p) : t ? [...d, p] : [p];
    l(g), a?.(g);
  };
  return /* @__PURE__ */ o("div", { className: [Ln.root, i].filter(Boolean).join(" "), children: e.map((p) => {
    const g = d.includes(p.key), _ = `${c}-panel-${p.key}`, b = `${c}-trigger-${p.key}`;
    return /* @__PURE__ */ A("div", { className: Ln.item, children: [
      /* @__PURE__ */ o("h3", { className: Ln.heading, children: /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": g,
          "aria-controls": _,
          disabled: p.disabled,
          className: [
            Ln.trigger,
            p.disabled ? Ln.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(p.key),
          children: [
            /* @__PURE__ */ o("span", { className: Ln.title, children: p.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [Ln.chevron, g ? Ln.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ o(
        "div",
        {
          id: _,
          role: "region",
          "aria-labelledby": b,
          hidden: !g,
          className: Ln.content,
          children: p.content
        }
      )
    ] }, p.key);
  }) });
}
const kb = "_textarea_l7fsl_1", Nb = "_invalid_l7fsl_27", Sb = "_xs_l7fsl_34", $b = "_sm_l7fsl_39", Ob = "_md_l7fsl_44", Eb = "_lg_l7fsl_49", Cb = "_xl_l7fsl_54", uo = {
  textarea: kb,
  invalid: Nb,
  xs: Sb,
  sm: $b,
  md: Ob,
  lg: Eb,
  xl: Cb,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, D$ = at(
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
), Tb = "_root_xyp2i_1", Mb = "_trigger_xyp2i_9", Ab = "_invalid_xyp2i_40", Db = "_placeholder_xyp2i_47", Ib = "_label_xyp2i_54", zb = "_chevron_xyp2i_60", Lb = "_chevronOpen_xyp2i_70", Pb = "_menu_xyp2i_74", Rb = "_option_xyp2i_89", jb = "_disabled_xyp2i_100", Bb = "_active_xyp2i_104", Fb = "_selected_xyp2i_105", Hb = "_header_xyp2i_115", Ub = "_xs_xyp2i_122", qb = "_sm_xyp2i_128", Wb = "_md_xyp2i_134", Kb = "_lg_xyp2i_140", Gb = "_xl_xyp2i_146", qt = {
  root: Tb,
  trigger: Mb,
  invalid: Ab,
  placeholder: Db,
  label: Ib,
  chevron: zb,
  chevronOpen: Lb,
  menu: Pb,
  option: Rb,
  disabled: jb,
  active: Bb,
  selected: Fb,
  header: Hb,
  xs: Ub,
  sm: qb,
  md: Wb,
  lg: Kb,
  xl: Gb
}, Vb = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function I$({
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
  const f = ct(), p = `${f}-listbox`, g = ce(null), _ = ce(null), [b, h] = W(
    n
  ), [v, m] = W(!1), u = t ?? b, y = e.map(
    (C, N) => C.label === "" || C.disabled ? -1 : N
  ).filter((C) => C >= 0), $ = e.findIndex(
    (C) => C.value === u
  ), [x, k] = W(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), w = q(() => {
    if (s) return;
    const C = $ >= 0 && y.includes($) ? $ : y[0];
    k(C ?? -1), m(!0);
  }, [s, $, y]), S = q(() => {
    m(!1), _.current?.focus();
  }, []);
  Se(() => {
    if (!v) return;
    const C = (N) => {
      g.current && !g.current.contains(N.target) && m(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [v]);
  const O = (C) => {
    h(C), r?.(C), m(!1), _.current?.focus();
  }, P = (C) => {
    if (y.length === 0) return;
    const N = y.includes(x) ? y.indexOf(x) : 0, T = y[(N + C + y.length) % y.length];
    T != null && k(T);
  }, D = (C) => {
    if (!v) {
      C.key === "ArrowDown" && (C.preventDefault(), w());
      return;
    }
    switch (C.key) {
      case "ArrowDown":
        C.preventDefault(), P(1);
        break;
      case "ArrowUp":
        C.preventDefault(), P(-1);
        break;
      case "Home":
        C.preventDefault(), y[0] != null && k(y[0]);
        break;
      case "End":
        C.preventDefault(), y[y.length - 1] != null && k(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        C.preventDefault(), x >= 0 && e[x] && y.includes(x) && O(e[x]?.value ?? "");
        break;
      case "Escape":
        C.preventDefault(), S();
        break;
      case "Tab":
        m(!1);
        break;
    }
  }, I = e.find(
    (C) => C.value === u
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- delegates keyboard handling to the trigger and popup; the root has no click semantics of its own
    /* @__PURE__ */ A(
      "div",
      {
        ref: g,
        className: [qt.root, l].filter(Boolean).join(" "),
        onKeyDown: D,
        children: [
          /* @__PURE__ */ A(
            "button",
            {
              ref: _,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": v,
              "aria-controls": p,
              "aria-invalid": c || void 0,
              disabled: s,
              className: [
                qt.trigger,
                qt[i],
                v ? qt.open : null,
                c ? qt.invalid : null
              ].filter(Boolean).join(" "),
              onClick: () => v ? m(!1) : w(),
              ...d,
              children: [
                /* @__PURE__ */ o("span", { className: I ? qt.label : qt.placeholder, children: I ? I.label : a }),
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: [qt.chevron, v ? qt.chevronOpen : null].filter(Boolean).join(" "),
                    style: { backgroundImage: Vb },
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ),
          v && /* @__PURE__ */ o(
            "div",
            {
              id: p,
              role: "listbox",
              "aria-activedescendant": x >= 0 ? `${f}-option-${x}` : void 0,
              tabIndex: -1,
              className: qt.menu,
              children: e.map(
                (C, N) => C.label === "" ? /* @__PURE__ */ o(
                  "div",
                  {
                    className: qt.header,
                    role: "presentation",
                    children: C.value
                  },
                  C.value
                ) : (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option via the root keydown handler
                  /* @__PURE__ */ o(
                    "div",
                    {
                      id: `${f}-option-${N}`,
                      role: "option",
                      tabIndex: -1,
                      "aria-selected": C.value === u,
                      "aria-disabled": C.disabled || void 0,
                      className: [
                        qt.option,
                        N === x ? qt.active : null,
                        C.value === u ? qt.selected : null,
                        C.disabled ? qt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => {
                        C.disabled || O(C.value);
                      },
                      onMouseEnter: () => {
                        !C.disabled && C.label !== "" && k(N);
                      },
                      children: C.label
                    },
                    C.value
                  )
                )
              )
            }
          )
        ]
      }
    )
  );
}
const Yb = "_root_1ma8a_1", Xb = "_wrap_1ma8a_9", Zb = "_input_1ma8a_26", Jb = "_invalid_1ma8a_31", Qb = "_clear_1ma8a_58", ex = "_menu_1ma8a_83", tx = "_option_1ma8a_98", nx = "_disabled_1ma8a_109", rx = "_active_1ma8a_113", ox = "_empty_1ma8a_123", sx = "_xs_1ma8a_129", ax = "_sm_1ma8a_136", lx = "_md_1ma8a_143", ix = "_lg_1ma8a_150", cx = "_xl_1ma8a_157", pn = {
  root: Yb,
  wrap: Xb,
  input: Zb,
  invalid: Jb,
  clear: Qb,
  menu: ex,
  option: tx,
  disabled: nx,
  active: rx,
  empty: ox,
  xs: sx,
  sm: ax,
  md: lx,
  lg: ix,
  xl: cx
}, dx = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function z$({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: a,
  placeholder: i = "",
  size: c = "md",
  invalid: s = !1,
  disabled: l = !1,
  filter: d = dx,
  className: f,
  ...p
}) {
  const g = ct(), _ = `${g}-listbox`, b = ce(null), h = ce(null), [v, m] = W(n), [u, y] = W(!1), $ = t ?? v, x = $e(
    () => $.trim() === "" ? [...e] : e.filter((L) => d(L, $)),
    [e, $, d]
  ), k = x.map((L, z) => L.disabled ? -1 : z).filter((L) => L >= 0), [w, S] = W(-1), O = (L) => {
    m(L), r?.(L);
  }, P = (L) => {
    O(L.label), a?.(L.value, L), y(!1);
  }, D = (L) => {
    if (k.length === 0) return;
    const z = k.includes(w) ? k.indexOf(w) : L === 1 ? -1 : 0, F = k[(z + L + k.length) % k.length];
    F != null && S(F);
  }, I = (L) => {
    l || (O(L.target.value), y(!0), S(-1));
  }, C = () => {
    l || $ !== "" && y(!0);
  }, N = (L) => {
    b.current && !b.current.contains(L.relatedTarget) && y(!1);
  }, T = (L) => {
    if (!l)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), u ? D(1) : (y(!0), S(k[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), u && D(-1);
          break;
        case "Enter":
          L.preventDefault(), u && w >= 0 && x[w] && P(x[w]);
          break;
        case "Escape":
          L.preventDefault(), y(!1);
          break;
        case "Tab":
          u && w >= 0 && x[w] && P(x[w]), y(!1);
          break;
      }
  }, M = () => {
    O(""), S(-1), y(!0), h.current?.focus();
  };
  return /* @__PURE__ */ A(
    "div",
    {
      ref: b,
      className: [pn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ A(
          "div",
          {
            className: [pn.wrap, pn[c], s ? pn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: h,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": u,
                  "aria-controls": _,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": u && w >= 0 ? `${g}-option-${w}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: l,
                  value: $,
                  placeholder: i,
                  className: pn.input,
                  onChange: I,
                  onFocus: C,
                  onBlur: N,
                  onKeyDown: T,
                  ...p
                }
              ),
              $ !== "" && !l && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: pn.clear,
                  "aria-label": "Clear",
                  onClick: M,
                  children: /* @__PURE__ */ o(Ce, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        u && (x.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: _, className: pn.menu, children: /* @__PURE__ */ o("div", { className: pn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: _, role: "listbox", className: pn.menu, children: x.map((L, z) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space select the active option through the input's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${g}-option-${z}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": !1,
              "aria-disabled": L.disabled || void 0,
              className: [
                pn.option,
                z === w ? pn.active : null,
                L.disabled ? pn.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                L.disabled || P(L);
              },
              onMouseDown: (F) => {
                F.preventDefault(), L.disabled || P(L);
              },
              onMouseEnter: () => {
                L.disabled || S(z);
              },
              children: L.label
            },
            L.value
          )
        )) }))
      ]
    }
  );
}
const ux = "_box_muvqe_1", fx = "_option_muvqe_12", px = "_disabled_muvqe_23", hx = "_selected_muvqe_27", _x = "_active_muvqe_33", Fr = {
  box: ux,
  option: fx,
  disabled: px,
  selected: hx,
  active: _x
};
function L$({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: a,
  className: i,
  style: c,
  ...s
}) {
  const l = ct(), [d, f] = W(() => {
    const x = n;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), p = t == null ? d : Array.isArray(t) ? t : [t], g = e.findIndex((x) => !x.disabled), [_, b] = W(
    () => g >= 0 ? g : 0
  ), h = ce(""), v = ce(null), m = (x) => {
    f(x), a?.(r ? x : x[0] ?? "");
  }, u = e.map((x, k) => x.disabled ? -1 : k).filter((x) => x >= 0), y = (x) => {
    const k = e[x];
    if (!(!k || k.disabled))
      if (b(x), r) {
        const w = p.includes(k.value) ? p.filter((S) => S !== k.value) : [...p, k.value];
        m(w);
      } else
        m([k.value]);
  }, $ = (x) => {
    if (u.length === 0) return;
    const k = u.includes(_) ? _ : u[0];
    let w = -1;
    if (x.key === "ArrowDown")
      w = u[(u.indexOf(k) + 1) % u.length];
    else if (x.key === "ArrowUp")
      w = u[(u.indexOf(k) - 1 + u.length) % u.length];
    else if (x.key === "Home")
      w = u[0];
    else if (x.key === "End")
      w = u[u.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), y(k);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const S = (h.current + x.key).toLowerCase();
      h.current = S, v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        h.current = "";
      }, 500);
      const O = [...u, ...u], P = u.indexOf(k) + 1, D = O.slice(P).find((I) => e[I]?.label.toLowerCase().startsWith(S));
      D != null && b(D);
      return;
    }
    w >= 0 && (x.preventDefault(), b(w), r || m([e[w]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[_] ? `${l}-option-${_}` : void 0,
      style: c,
      className: [Fr.box, i].filter(Boolean).join(" "),
      onKeyDown: $,
      ...s,
      children: e.map((x, k) => {
        const w = p.includes(x.value), S = k === _;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by the listbox container's keydown handler
          /* @__PURE__ */ o(
            "div",
            {
              id: `${l}-option-${k}`,
              role: "option",
              tabIndex: -1,
              "aria-selected": w,
              "aria-disabled": x.disabled || void 0,
              className: [
                Fr.option,
                w ? Fr.selected : null,
                S ? Fr.active : null,
                x.disabled ? Fr.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => y(k),
              children: x.label
            },
            x.value
          )
        );
      })
    }
  );
}
const mx = "_group_oinj7_1", gx = "_legend_oinj7_8", yx = "_list_oinj7_16", bx = "_item_oinj7_25", xx = "_disabled_oinj7_32", vx = "_label_oinj7_37", wx = "_checkbox_oinj7_48", nr = {
  group: mx,
  legend: gx,
  list: yx,
  item: bx,
  disabled: xx,
  label: vx,
  checkbox: wx
};
function P$({
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
  ]), d = t ?? s, f = (p, g) => {
    const _ = g ? [...d, p] : d.filter((b) => b !== p);
    l(_), r?.(_);
  };
  return /* @__PURE__ */ A("fieldset", { className: [nr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: nr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: nr.list, children: e.map((p) => {
      const g = d.includes(p.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [nr.item, p.disabled ? nr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ A("label", { className: nr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: nr.checkbox,
                name: i,
                value: p.value,
                checked: g,
                disabled: p.disabled,
                onChange: (_) => f(p.value, _.target.checked)
              }
            ),
            /* @__PURE__ */ o("span", { children: p.label })
          ] })
        },
        p.value
      );
    }) })
  ] });
}
const kx = "_group_46668_1", Nx = "_legend_46668_8", Sx = "_list_46668_16", $x = "_item_46668_25", Ox = "_disabled_46668_32", Ex = "_label_46668_37", Cx = "_radio_46668_48", rr = {
  group: kx,
  legend: Nx,
  list: Sx,
  item: $x,
  disabled: Ox,
  label: Ex,
  radio: Cx
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
  ), d = t ?? s, f = (p) => {
    l(p), r?.(p);
  };
  return /* @__PURE__ */ A("fieldset", { className: [rr.group, c].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ o("legend", { className: rr.legend, children: a }),
    /* @__PURE__ */ o("ul", { className: rr.list, children: e.map((p) => {
      const g = p.value === d;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [rr.item, p.disabled ? rr.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ A("label", { className: rr.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: rr.radio,
                name: i,
                value: p.value,
                checked: g,
                disabled: p.disabled,
                onChange: (_) => f(_.target.value)
              }
            ),
            /* @__PURE__ */ o("span", { children: p.label })
          ] })
        },
        p.value
      );
    }) })
  ] });
}
const Tx = "_bar_9zyxn_1", Mx = "_vertical_9zyxn_12", Ax = "_option_9zyxn_17", Dx = "_selected_9zyxn_40", Ix = "_sm_9zyxn_56", zx = "_md_9zyxn_62", Lx = "_lg_9zyxn_68", mr = {
  bar: Tx,
  vertical: Mx,
  option: Ax,
  selected: Dx,
  sm: Ix,
  md: zx,
  lg: Lx
};
function fa(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function j$(e) {
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
  } = e, f = a ?? !1, [p, g] = W(r ?? (f ? [] : t[0]?.value)), _ = n ?? p, b = a === !0 || a === void 0 && Array.isArray(_), h = (m) => {
    if (!b) {
      g(m), c?.(m);
      return;
    }
    const u = fa(_), y = u.includes(m) ? u.filter(($) => $ !== m) : [...u, m];
    g(y), c?.(y);
  }, v = (m) => b ? fa(_).includes(m) : _ === m;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        mr.bar,
        mr[s],
        i === "vertical" ? mr.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...d,
      children: t.map((m) => {
        const u = v(m.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: m.disabled,
            className: [
              mr.option,
              u ? mr.selected : null,
              m.disabled ? mr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => h(m.value),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const Px = "_root_11hdr_1", Rx = "_action_11hdr_10", jx = "_caret_11hdr_15", Bx = "_sm_11hdr_49", Fx = "_md_11hdr_53", Hx = "_lg_11hdr_57", Ux = "_fullWidth_11hdr_62", qx = "_menu_11hdr_70", Wx = "_item_11hdr_83", Kx = "_itemIcon_11hdr_105", Gx = "_disabled_11hdr_110", Vx = "_active_11hdr_114", Yx = "_danger_11hdr_123", wn = {
  root: Px,
  action: Rx,
  caret: jx,
  sm: Bx,
  md: Fx,
  lg: Hx,
  fullWidth: Ux,
  menu: qx,
  item: Wx,
  itemIcon: Kx,
  disabled: Gx,
  active: Vx,
  danger: Yx
}, B$ = at(
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
    fullWidth: f = !1,
    disabled: p = !1,
    className: g,
    "aria-label": _,
    openAriaLabel: b = "More actions",
    ...h
  }, v) {
    const u = `${ct()}-menu`, y = ce(null), $ = ce(null), x = ce([]), [k, w] = W(!1), [S, O] = W(-1), P = p || l, D = $e(
      () => r.map((F, V) => F.disabled ? -1 : V).filter((F) => F >= 0),
      [r]
    ), I = q(() => {
      P || (O(D[0] ?? -1), w(!0));
    }, [P, D]), C = q(() => {
      w(!1), $.current?.focus();
    }, []);
    Se(() => {
      if (!k) return;
      const F = (V) => {
        y.current && !y.current.contains(V.target) && w(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [k]), Se(() => {
      k && (P || !d) && w(!1);
    }, [k, P, d]);
    const N = ce(k);
    if (Se(() => {
      const F = N.current;
      if (N.current = k, !k || F) return;
      const V = D.includes(S) ? S : D[0] ?? -1;
      V >= 0 && x.current[V]?.focus();
    }, [k, S, D]), d === !1) return null;
    const T = (F) => {
      const V = r[F];
      !V || V.disabled || (V.onClick?.(), w(!1), $.current?.focus());
    }, M = (F) => {
      if (D.length === 0) return;
      const V = D.includes(S) ? D.indexOf(S) : F === 1 ? -1 : 0, ne = D[(V + F + D.length) % D.length];
      ne != null && (O(ne), x.current[ne]?.focus());
    }, L = (F) => {
      const V = F === "first" ? D[0] : D[D.length - 1];
      V != null && (O(V), x.current[V]?.focus());
    }, z = (F) => {
      switch (F.key) {
        case "ArrowDown":
          F.preventDefault(), M(1);
          break;
        case "ArrowUp":
          F.preventDefault(), M(-1);
          break;
        case "Home":
          F.preventDefault(), L("first");
          break;
        case "End":
          F.preventDefault(), L("last");
          break;
        case "Escape":
          F.preventDefault(), C();
          break;
        case "Tab":
          w(!1);
          break;
      }
    };
    return /* @__PURE__ */ A(
      "div",
      {
        ref: (F) => {
          y.current = F, typeof v == "function" ? v(F) : v && (v.current = F);
        },
        className: [
          wn.root,
          wn[s],
          f ? wn.fullWidth : null,
          g
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            dn,
            {
              className: wn.action,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              loading: l,
              disabled: p,
              "aria-label": _,
              onClick: () => {
                k && w(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            dn,
            {
              ref: $,
              className: wn.caret,
              variant: i,
              severity: a,
              shade: c,
              size: s,
              disabled: P,
              "aria-haspopup": "menu",
              "aria-expanded": k,
              "aria-controls": u,
              "aria-label": b,
              onClick: () => k ? w(!1) : I(),
              onKeyDown: (F) => {
                !k && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), I());
              },
              children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          k && /* @__PURE__ */ o(
            "div",
            {
              id: u,
              role: "menu",
              tabIndex: -1,
              "aria-label": b,
              className: wn.menu,
              onKeyDown: z,
              ...h,
              children: r.map((F, V) => /* @__PURE__ */ A(
                "button",
                {
                  ref: (ne) => {
                    x.current[V] = ne;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: V === S ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    wn.item,
                    V === S ? wn.active : null,
                    F.danger ? wn.danger : null,
                    F.disabled ? wn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(V),
                  onMouseEnter: () => {
                    F.disabled || O(V);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ o("span", { className: wn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: F.icon, size: 16 }) }) : null,
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
), Xx = "_mask_rcv90_1", Zx = "_invalid_rcv90_31", Jx = "_xs_rcv90_38", Qx = "_sm_rcv90_44", ev = "_md_rcv90_50", tv = "_lg_rcv90_56", nv = "_xl_rcv90_62", qo = {
  mask: Xx,
  invalid: Zx,
  xs: Jx,
  sm: Qx,
  md: ev,
  lg: tv,
  xl: nv
};
function pa(e, t) {
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
const F$ = at(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: a,
  defaultValue: i = "",
  onChange: c,
  className: s,
  onKeyDown: l,
  ...d
}, f) {
  const [p, g] = W(i ?? ""), _ = a !== void 0, b = _ ? a ?? "" : p, h = (u) => {
    const y = pa(u, r);
    return _ || g(y), c?.(y), y;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (u) => {
        h(u.target.value);
      },
      onKeyDown: (u) => {
        if (u.key === "Backspace") {
          const y = u.currentTarget.selectionStart ?? b.length, $ = b[y - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            u.preventDefault();
            const x = b.replace(/\D/g, "");
            h(pa(x.slice(0, -1), r));
          }
        }
        l?.(u);
      },
      className: [
        qo.mask,
        qo[t],
        n ? qo.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...d
    }
  );
}), rv = "_wrapper_12jdf_1", ov = "_input_12jdf_8", sv = "_invalid_12jdf_38", av = "_button_12jdf_45", lv = "_up_12jdf_77", iv = "_down_12jdf_82", cv = "_xs_12jdf_87", dv = "_sm_12jdf_93", uv = "_md_12jdf_99", fv = "_lg_12jdf_105", pv = "_xl_12jdf_111", Yn = {
  wrapper: rv,
  input: ov,
  invalid: sv,
  button: av,
  up: lv,
  down: iv,
  xs: cv,
  sm: dv,
  md: uv,
  lg: fv,
  xl: pv
};
function ts(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function hv(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Va(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function _v(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function mv(e, t, n, r, a) {
  const c = ts(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = c + t * a : t > 0 ? s = n + Math.ceil((c - n + 1e-9) / a) * a : s = n + Math.floor((c - n - 1e-9) / a) * a, Va(s, n, r);
}
const H$ = at(
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
    step: f = 1,
    incrementLabel: p = "Increment",
    decrementLabel: g = "Decrement",
    onBlur: _,
    onKeyDown: b,
    ...h
  }, v) {
    const [m, u] = W(
      c != null ? String(c) : ""
    ), y = i !== void 0, $ = y ? i == null ? "" : String(i) : m, x = (D) => {
      y || u(D), s?.(ts(D));
    }, k = (D) => {
      y || u(String(D)), s?.(D);
    }, w = (D) => {
      a || k(mv($, D, l, d, f));
    }, S = (D) => {
      x(hv(D.target.value));
    }, O = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), w(1)) : D.key === "ArrowDown" && (D.preventDefault(), w(-1)), b?.(D);
    }, P = (D) => {
      const I = ts($);
      I === null ? (y || u(""), s?.(null)) : k(Va(_v(I, l, f), l, d)), _?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ A("div", { className: Yn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: v,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: $,
            disabled: a,
            onChange: S,
            onKeyDown: O,
            onBlur: P,
            className: [
              Yn.input,
              Yn[t],
              n ? Yn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Yn.button, Yn.up].join(" "),
            "aria-label": p,
            disabled: a,
            onClick: () => w(1),
            children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Yn.button, Yn.down].join(" "),
            "aria-label": g,
            disabled: a,
            onClick: () => w(-1),
            children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: 14 })
          }
        )
      ] })
    );
  }
), Pe = {
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
}, gv = [
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
function ln(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function ns(e) {
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
function yv({ r: e, g: t, b: n }) {
  const r = (a) => Math.round(a).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function bv({ r: e, g: t, b: n }) {
  const r = e / 255, a = t / 255, i = n / 255, c = Math.max(r, a, i), s = Math.min(r, a, i), l = c - s;
  let d = 0;
  return l !== 0 && (c === r ? d = (a - i) / l % 6 : c === a ? d = (i - r) / l + 2 : d = (r - a) / l + 4, d *= 60, d < 0 && (d += 360)), {
    h: d,
    s: c === 0 ? 0 : l / c,
    v: c
  };
}
function gr({ h: e, s: t, v: n }) {
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
function xv(e) {
  const t = ns(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: ln(Number(n[1]), 0, 255),
    g: ln(Number(n[2]), 0, 255),
    b: ln(Number(n[3]), 0, 255),
    a: n[4] != null ? ln(Number(n[4]), 0, 1) : 1
  } : null;
}
function ha({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const U$ = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: a = gv,
  showButton: i = !1,
  showArrow: c = !0,
  disabled: s = !1,
  invalid: l = !1,
  placeholder: d = "",
  size: f = "md",
  tabIndex: p = 0,
  className: g,
  onChange: _,
  onValueChange: b,
  onOpen: h,
  onClose: v
}) => {
  const m = ce(null), u = ce(null), y = ce(null), $ = ce(null), x = ce(null), k = ct(), w = ce(null), S = $e(
    () => xv(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [O, P] = W(!1), [D, I] = W(null), C = D ?? S, N = $e(() => bv(C), [C]), T = q(
    (oe) => {
      const Te = ha(oe);
      _?.(Te), b?.(Te);
    },
    [_, b]
  ), M = q(
    (oe, Te) => {
      I(oe), Te && !i && T(oe);
    },
    [i, T]
  ), L = q(() => {
    P(!1), I(null), v?.(), u.current?.focus();
  }, [v]), z = q(() => {
    s || (I(S), P(!0), h?.());
  }, [s, S, h]), F = q(() => {
    O ? L() : z();
  }, [O, L, z]), V = q(
    (oe, Te) => {
      const lt = y.current;
      if (!lt) return N;
      const ze = lt.getBoundingClientRect(), st = ln((oe - ze.left) / ze.width, 0, 1), Xe = ln(1 - (Te - ze.top) / ze.height, 0, 1);
      return { h: N.h, s: st, v: Xe };
    },
    [N]
  ), ne = q(
    (oe, Te) => {
      if (!Te) return 0;
      const lt = Te.getBoundingClientRect();
      return ln((oe - lt.left) / lt.width, 0, 1);
    },
    []
  ), re = (oe) => {
    if (s) return;
    oe.preventDefault(), oe.currentTarget.setPointerCapture(oe.pointerId), w.current = "sat";
    const Te = V(oe.clientX, oe.clientY);
    M({ ...gr(Te), a: C.a }, !0);
  }, B = (oe) => {
    if (w.current !== "sat") return;
    oe.preventDefault();
    const Te = V(oe.clientX, oe.clientY);
    M({ ...gr(Te), a: C.a }, !0);
  }, H = (oe) => {
    if (s) return;
    oe.preventDefault(), oe.currentTarget.setPointerCapture(oe.pointerId), w.current = "hue";
    const Te = ne(oe.clientX, $.current);
    M(
      { ...gr({ ...N, h: Te * 360 }), a: C.a },
      !0
    );
  }, ie = (oe) => {
    if (w.current !== "hue") return;
    oe.preventDefault();
    const Te = ne(oe.clientX, $.current);
    M(
      { ...gr({ ...N, h: Te * 360 }), a: C.a },
      !0
    );
  }, Y = (oe) => {
    if (s) return;
    oe.preventDefault(), oe.currentTarget.setPointerCapture(oe.pointerId), w.current = "alpha";
    const Te = ne(oe.clientX, x.current);
    M({ ...C, a: Te }, !0);
  }, G = (oe) => {
    if (w.current !== "alpha") return;
    oe.preventDefault();
    const Te = ne(oe.clientX, x.current);
    M({ ...C, a: Te }, !0);
  }, X = () => {
    w.current = null;
  }, _e = q(
    (oe, Te) => {
      const lt = {
        h: N.h,
        s: ln(N.s + oe, 0, 1),
        v: ln(N.v + Te, 0, 1)
      };
      M({ ...gr(lt), a: C.a }, !0);
    },
    [N, C.a, M]
  ), te = q(
    (oe) => {
      const Te = (N.h + oe + 360) % 360;
      M({ ...gr({ ...N, h: Te }), a: C.a }, !0);
    },
    [N, C.a, M]
  ), ge = q(
    (oe) => {
      M({ ...C, a: ln(C.a + oe, 0, 1) }, !0);
    },
    [C, M]
  ), Z = (oe) => {
    switch (oe.key) {
      case "ArrowLeft":
        oe.preventDefault(), _e(-0.05, 0);
        break;
      case "ArrowRight":
        oe.preventDefault(), _e(0.05, 0);
        break;
      case "ArrowUp":
        oe.preventDefault(), _e(0, 0.05);
        break;
      case "ArrowDown":
        oe.preventDefault(), _e(0, -0.05);
        break;
      case "Escape":
        oe.preventDefault(), L();
        break;
    }
  }, Oe = (oe, Te) => {
    switch (oe.key) {
      case "ArrowLeft":
        oe.preventDefault(), Te === "hue" ? te(-6) : ge(-0.05);
        break;
      case "ArrowRight":
        oe.preventDefault(), Te === "hue" ? te(6) : ge(0.05);
        break;
      case "Escape":
        oe.preventDefault(), L();
        break;
    }
  }, ae = (oe, Te) => {
    if (oe === "hex") {
      const Xe = ns(Te);
      Xe && M({ ...Xe, a: C.a }, !0);
      return;
    }
    const lt = Te.replace(/[^\d.]/g, ""), ze = Number.parseFloat(lt);
    if (Number.isNaN(ze)) return;
    if (oe === "a") {
      const Xe = lt.includes(".") ? ln(ze, 0, 1) : ln(ze / 100, 0, 1);
      M({ ...C, a: Xe }, !0);
      return;
    }
    const st = { r: 255, g: 255, b: 255 };
    M(
      { ...C, [oe]: ln(ze, 0, st[oe]) },
      !0
    );
  }, De = () => {
    D && (T(D), I(null), P(!1), v?.(), u.current?.focus());
  };
  Se(() => {
    if (!O) return;
    const oe = (Te) => {
      m.current && !m.current.contains(Te.target) && L();
    };
    return document.addEventListener("mousedown", oe), () => document.removeEventListener("mousedown", oe);
  }, [O, L]), Se(() => {
    if (!O) return;
    const oe = (Te) => {
      Te.key === "Escape" && L();
    };
    return document.addEventListener("keydown", oe), () => document.removeEventListener("keydown", oe);
  }, [O, L]);
  const be = f === "xs" ? Pe["dx-colorpicker-trigger-xs"] : f === "sm" ? Pe["dx-colorpicker-trigger-sm"] : f === "lg" ? Pe["dx-colorpicker-trigger-lg"] : f === "xl" ? Pe["dx-colorpicker-trigger-xl"] : Pe["dx-colorpicker-trigger"], We = ha(C), Je = yv(C), Ge = { x: N.s * 100, y: (1 - N.v) * 100 }, Qe = N.h / 360 * 100, He = C.a * 100, gt = /* @__PURE__ */ A("div", { className: Pe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(N.s * 100),
        "aria-valuetext": `Saturation ${Math.round(N.s * 100)}%, value ${Math.round(N.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${N.h}, 100%, 50%)`
        },
        onKeyDown: Z,
        onPointerDown: re,
        onPointerMove: B,
        onPointerUp: X,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Pe["dx-saturation-indicator"],
            style: { left: `${Ge.x}%`, top: `${Ge.y}%` },
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
        "aria-valuenow": Math.round(N.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-hue-picker"],
        onKeyDown: (oe) => Oe(oe, "hue"),
        onPointerDown: H,
        onPointerMove: ie,
        onPointerUp: X,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Pe["dx-hue-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(He),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        className: Pe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (oe) => Oe(oe, "alpha"),
        onPointerDown: Y,
        onPointerMove: G,
        onPointerUp: X,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Pe["dx-alpha-indicator"],
            style: { left: `${He}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ A("div", { className: Pe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ A("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Je,
            onChange: (oe) => ae("hex", oe.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: C.r,
            onChange: (oe) => ae("r", oe.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: C.g,
            onChange: (oe) => ae("g", oe.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: C.b,
            onChange: (oe) => ae("b", oe.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ A("label", { className: Pe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Pe["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(C.a * 100),
            onChange: (oe) => ae("a", oe.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-palette"], children: a.map((oe) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-swatch"],
        "aria-label": oe,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : p,
        style: { backgroundColor: oe },
        onClick: () => {
          const Te = ns(oe);
          i ? M({ ...Te, a: C.a }, !1) : (I(null), T({ ...Te, a: C.a }), P(!1), v?.(), u.current?.focus());
        }
      },
      oe
    )) }),
    i && /* @__PURE__ */ o("div", { className: Pe["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Pe["dx-colorpicker-ok"],
        onClick: De,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ A(
    "div",
    {
      ref: m,
      className: [
        Pe["dx-colorpicker"],
        O ? Pe["dx-colorpicker-open"] : null,
        l ? Pe["dx-colorpicker-invalid"] : null,
        g
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ A(
          "button",
          {
            ref: u,
            type: "button",
            className: [Pe["dx-colorpicker-trigger"], be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": O,
            "aria-controls": k,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: p,
            onClick: F,
            onKeyDown: (oe) => {
              oe.key === "Escape" && O && (oe.preventDefault(), L());
            },
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: Pe["dx-colorpicker-value"],
                  style: { backgroundColor: We },
                  "aria-hidden": "true"
                }
              ),
              d && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-text"], children: d }),
              c && /* @__PURE__ */ o("span", { className: Pe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        O && /* @__PURE__ */ o(
          "div",
          {
            id: k,
            role: "dialog",
            "aria-label": "Choose color",
            className: Pe["dx-colorpicker-popup"],
            children: gt
          }
        )
      ]
    }
  );
}, qe = {
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
}, vv = 42;
function cn(e) {
  return String(e).padStart(2, "0");
}
function Zt(e) {
  return `${e.year}-${cn(e.month)}-${cn(e.day)}`;
}
function wv(e, t) {
  const n = Zt(e);
  return t ? `${n} ${cn(e.hour)}:${cn(e.minute)}:${cn(e.second)}` : n;
}
function rs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), a = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, c = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || a < 1 || a > 31) return null;
  const l = new Date(n, r - 1, a, i, c, s);
  return l.getFullYear() !== n || l.getMonth() !== r - 1 || l.getDate() !== a ? null : { year: n, month: r, day: a, hour: i, minute: c, second: s };
}
function Xn() {
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
function Pn(e, t) {
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
function _a(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ma = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => cn(e.year % 100),
  MM: (e) => cn(e.month),
  M: (e) => String(e.month),
  dd: (e) => cn(e.day),
  d: (e) => String(e.day),
  HH: (e) => cn(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => cn(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => cn(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((a) => a.type === "dayPeriod")?.value ?? ""
}, kv = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Nv = ["y", "M", "d", "H", "m", "s"];
function po(e, t, n) {
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
    for (const l of kv)
      if (t.startsWith(l, i)) {
        a += ma[l](e, r, n), i += l.length, c = !0;
        break;
      }
    if (c) continue;
    const s = t[i];
    if (Nv.includes(s)) {
      a += ma[s](e, r, n), i += 1;
      continue;
    }
    a += s, i += 1;
  }
  return a;
}
const Sv = [
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
function $v(e, t) {
  const n = {};
  let r = 0, a = 0;
  for (; a < t.length; ) {
    let s = null;
    for (const l of Sv)
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
function Hr(e, t) {
  const n = rs(e);
  return n || $v(e, t);
}
function Ov(e, t, n) {
  return t && Zt(e) < Zt(t) ? t : n && Zt(e) > Zt(n) ? n : e;
}
const Ev = ["hour", "minute", "second"];
function ho(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const q$ = at(
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
    allowClear: f = !1,
    inline: p = !1,
    disabledDates: g,
    locale: _ = "en-US",
    onChange: b,
    onValueChange: h,
    onOpen: v,
    onClose: m,
    disabled: u,
    readOnly: y,
    placeholder: $,
    ariaLabel: x,
    triggerLabel: k,
    clearLabel: w,
    tabIndex: S,
    className: O,
    onBlur: P,
    onKeyDown: D,
    ...I
  }, C) {
    const N = ce(null), T = ce(null), M = ce(null), L = ce(null), z = ct(), F = r !== void 0, [V, ne] = W(
      () => a != null ? po(
        Hr(a, i) ?? Xn(),
        i,
        _
      ) : ""
    ), [re, B] = W(!1), [H, ie] = W(null), [Y, G] = W(() => {
      const U = r !== void 0 ? r ?? "" : a ?? "";
      if (U) {
        const he = Hr(U, i);
        if (he) return he;
      }
      return Xn();
    }), X = $e(() => c ? rs(c) : null, [c]), _e = $e(() => s ? rs(s) : null, [s]), te = $e(
      () => new Set(g ?? []),
      [g]
    ), ge = $e(() => {
      const U = F ? r ?? "" : V;
      return U ? Hr(U, i) : null;
    }, [r, V, F, i]), Z = q(
      (U) => {
        const he = Zt(U);
        return !!(te.has(he) || X && he < Zt(X) || _e && he > Zt(_e));
      },
      [te, X, _e]
    ), Oe = q(
      (U) => {
        if (!Z(U)) return U;
        for (let he = 1; he <= 366; he += 1) {
          const Re = Pn(U, he);
          if (!Z(Re)) return Re;
          const Ie = Pn(U, -he);
          if (!Z(Ie)) return Ie;
        }
        return U;
      },
      [Z]
    ), ae = q(
      (U) => {
        F || ne(U ? po(U, i, _) : "");
        const he = U ? wv(U, l) : "";
        b?.(he), h?.(he);
      },
      [F, i, _, l, b, h]
    ), De = q(
      (U) => {
        T.current = U, typeof C == "function" ? C(U) : C && (C.current = U);
      },
      [C]
    ), be = q(() => {
      B(!1), ie(null), m?.(), p || M.current?.focus();
    }, [p, m]), We = q(() => {
      if (u) return;
      const U = ge ?? Xn();
      ie(U), G(Oe(U)), B(!0), v?.();
    }, [u, ge, Oe, v]), Je = q(() => {
      re ? be() : We();
    }, [re, be, We]), Ge = q((U) => {
      L.current?.querySelector(
        `[data-date="${Zt(U)}"]`
      )?.focus();
    }, []), Qe = q(
      (U) => {
        if (Z(U)) return;
        const he = H ?? ge, Ie = {
          ...l ? {
            hour: he?.hour ?? 0,
            minute: he?.minute ?? 0,
            second: he?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ie(Ie), l || (ae(Ie), be());
      },
      [Z, H, ge, l, ae, be]
    ), He = q(
      (U, he) => {
        ie((Re) => {
          const Ie = Re ?? ge ?? Xn(), et = Math.min(U === "hour" ? 23 : 59, Math.max(0, Ie[U] + he));
          return { ...Ie, [U]: et };
        });
      },
      [ge]
    ), gt = q(
      (U, he) => {
        const Re = he.replace(/\D/g, ""), Ie = Re === "" ? 0 : Number(Re), It = U === "hour" ? 23 : 59;
        ie((et) => ({ ...et ?? ge ?? Xn(), [U]: Math.min(It, Ie) }));
      },
      [ge]
    ), oe = q(() => {
      H && (ae(H), be());
    }, [H, ae, be]), Te = q(() => {
      if (re) return;
      const U = Hr(V, i);
      ae(U ? Ov(U, X, _e) : null);
    }, [re, V, i, X, _e, ae]), lt = (U) => {
      const he = U.target.value;
      F || ne(he), re && ie(null);
    }, ze = (U) => {
      U.key === "Enter" ? (U.preventDefault(), re ? H && (ae(H), be()) : Te()) : U.key === "Escape" ? re && (U.preventDefault(), be()) : U.key === "ArrowDown" && !re ? (U.preventDefault(), We()) : U.key === "Tab" && re && B(!1), D?.(U);
    }, st = (U) => {
      Te(), P?.(U);
    }, Xe = (U) => {
      let he = null;
      switch (U.key) {
        case "ArrowLeft":
          he = Pn(Y, -1), U.preventDefault();
          break;
        case "ArrowRight":
          he = Pn(Y, 1), U.preventDefault();
          break;
        case "ArrowUp":
          he = Pn(Y, -7), U.preventDefault();
          break;
        case "ArrowDown":
          he = Pn(Y, 7), U.preventDefault();
          break;
        case "Home":
          he = Pn(Y, -_a(Y)), U.preventDefault();
          break;
        case "End":
          he = Pn(Y, 6 - _a(Y)), U.preventDefault();
          break;
        case "PageUp":
          he = fo(Y, U.shiftKey ? -12 : -1), U.preventDefault();
          break;
        case "PageDown":
          he = fo(Y, U.shiftKey ? 12 : 1), U.preventDefault();
          break;
        case "Enter":
        case " ":
          U.preventDefault(), Qe(Y);
          break;
        case "Escape":
          U.preventDefault(), be();
          break;
        case "Tab":
          B(!1);
          break;
      }
      if (he) {
        const Re = Oe(he);
        G(Re), setTimeout(() => Ge(Re), 0);
      }
    };
    Se(() => {
      if (!re) return;
      const U = (he) => {
        N.current && !N.current.contains(he.target) && be();
      };
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
    }, [re, be]), Se(() => {
      if (!re) return;
      const U = (he) => {
        he.key === "Escape" && be();
      };
      return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
    }, [re, be]);
    const Ct = () => {
      F || ne(""), b?.(""), h?.(""), T.current?.focus();
    }, yt = re && H ? po(H, i, _) : F ? r ? po(
      Hr(r, i) ?? Xn(),
      i,
      _
    ) : "" : V, it = F ? !!r : V.length > 0, ft = p || re, Ve = { year: Y.year, month: Y.month }, Tt = new Date(Ve.year, Ve.month - 1, 1).getDay(), le = {
      year: Ve.year,
      month: Ve.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let U = 0; U < vv; U += 1)
      Le.push(Pn(le, U - Tt));
    const wt = H ? Zt(H) : ge ? Zt(ge) : null, Mt = Zt(Xn()), bt = `${Ve.year}-${cn(Ve.month)}`, R = $e(
      () => new Intl.DateTimeFormat(_, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [_]
    ), Q = new Intl.DateTimeFormat(_, {
      month: "long",
      year: "numeric"
    }).format(new Date(Ve.year, Ve.month - 1, 1)), ye = Array.from(
      { length: 7 },
      (U, he) => new Intl.DateTimeFormat(_, { weekday: "short" }).format(
        new Date(2021, 0, 3 + he)
      )
    ), ke = t === "xs" ? qe["dx-datepicker-input--xs"] : t === "sm" ? qe["dx-datepicker-input--sm"] : t === "lg" ? qe["dx-datepicker-input--lg"] : t === "xl" ? qe["dx-datepicker-input--xl"] : qe["dx-datepicker-input--md"], pe = /* @__PURE__ */ A(
      "div",
      {
        className: qe["dx-datepicker-calendar"],
        "aria-label": x ?? "Date picker",
        children: [
          /* @__PURE__ */ A("div", { className: qe["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const U = Oe(fo(Y, -1));
                  G(U), setTimeout(() => Ge(U), 0);
                },
                children: /* @__PURE__ */ o(Ce, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: qe["dx-datepicker-title"], children: Q }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const U = Oe(fo(Y, 1));
                  G(U), setTimeout(() => Ge(U), 0);
                },
                children: /* @__PURE__ */ o(Ce, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ A(
            "div",
            {
              ref: L,
              role: "grid",
              tabIndex: -1,
              className: qe["dx-datepicker-grid"],
              onKeyDown: Xe,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: qe["dx-datepicker-week-row"], children: ye.map((U) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: qe["dx-datepicker-weekday"],
                    children: U
                  },
                  U
                )) }),
                Array.from({ length: 6 }, (U, he) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: qe["dx-datepicker-row"],
                    children: Le.slice(he * 7, he * 7 + 7).map((Re) => {
                      const Ie = Zt(Re), It = Z(Re), et = Ie.startsWith(bt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Ie,
                          tabIndex: Ie === Zt(Y) ? 0 : -1,
                          "aria-selected": Ie === wt || void 0,
                          "aria-disabled": It || void 0,
                          "aria-label": R.format(
                            new Date(Re.year, Re.month - 1, Re.day)
                          ),
                          className: [
                            qe["dx-datepicker-day"],
                            et ? null : qe["dx-datepicker-day--outside"],
                            Ie === Mt ? qe["dx-datepicker-day--today"] : null,
                            Ie === wt ? qe["dx-datepicker-day--selected"] : null,
                            It ? qe["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => Qe(Re),
                          onFocus: () => G(Re),
                          children: Re.day
                        },
                        Ie
                      );
                    })
                  },
                  he
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ A("div", { className: qe["dx-datepicker-time"], children: [
            Ev.map((U) => /* @__PURE__ */ A("label", { className: qe["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: qe["dx-datepicker-time-label"], children: ho(U) }),
              /* @__PURE__ */ A("div", { className: qe["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: qe["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": ho(U),
                    value: cn(
                      (H ?? ge ?? Xn())[U]
                    ),
                    onChange: (he) => gt(U, he.target.value),
                    onKeyDown: (he) => {
                      he.key === "ArrowUp" ? (he.preventDefault(), He(U, 1)) : he.key === "ArrowDown" ? (he.preventDefault(), He(U, -1)) : he.key === "Enter" && (he.preventDefault(), oe());
                    }
                  }
                ),
                /* @__PURE__ */ A("span", { className: qe["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${ho(U).toLowerCase()}`,
                      onClick: () => He(U, 1),
                      children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${ho(U).toLowerCase()}`,
                      onClick: () => He(U, -1),
                      children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, U)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: qe["dx-datepicker-ok"],
                onClick: oe,
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
        ref: N,
        className: [
          qe["dx-datepicker"],
          p ? qe["dx-datepicker-inline"] : null,
          O
        ].filter(Boolean).join(" "),
        children: [
          !p && /* @__PURE__ */ A(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: De,
                type: "text",
                autoComplete: "off",
                value: yt,
                disabled: u,
                readOnly: y,
                placeholder: $,
                tabIndex: S,
                role: d ? void 0 : "combobox",
                "aria-label": x ?? "Date",
                "aria-haspopup": d ? void 0 : "dialog",
                "aria-expanded": d ? void 0 : ft,
                "aria-controls": d ? void 0 : z,
                "aria-invalid": n || void 0,
                className: [
                  qe["dx-datepicker-input"],
                  ke,
                  n ? qe["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: lt,
                onKeyDown: ze,
                onBlur: st,
                onClick: () => {
                  d || Je();
                },
                ...I
              }
            ),
            f && !u && it && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  qe["dx-datepicker-clear"],
                  d ? qe["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": w ?? "Clear",
                onClick: Ct,
                children: /* @__PURE__ */ o(Ce, { icon: "close", size: 14 })
              }
            ),
            d && /* @__PURE__ */ o(
              "button",
              {
                ref: M,
                type: "button",
                className: [qe["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": k ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": re,
                "aria-controls": z,
                disabled: u,
                onClick: Je,
                children: /* @__PURE__ */ o(Ce, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          ft && /* @__PURE__ */ o(
            "div",
            {
              id: z,
              role: p ? void 0 : "dialog",
              "aria-label": p ? void 0 : x ?? "Date picker",
              className: p ? void 0 : qe["dx-datepicker-popup"],
              children: pe
            }
          )
        ]
      }
    );
  }
), Zn = {
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
  onValueChange: f
}) => {
  const [p, g] = W(e), _ = q(
    (u) => Math.min(t, Math.max(1, u)),
    [t]
  ), b = q(
    (u) => {
      d?.(u), f?.(u);
    },
    [d, f]
  ), h = q(
    (u) => {
      n || r || (b(u), g(u));
    },
    [n, r, b]
  ), v = (u) => {
    if (n || r) return;
    const y = p > 0 ? p : 1;
    switch (u.key) {
      case "ArrowRight":
      case "ArrowUp":
        u.preventDefault(), h(_(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        u.preventDefault(), h(_(y - 1));
        break;
      case "Home":
        u.preventDefault(), h(1);
        break;
      case "End":
        u.preventDefault(), h(t);
        break;
    }
  }, m = Array.from({ length: t }, (u, y) => y + 1);
  return /* @__PURE__ */ A(
    "div",
    {
      role: "radiogroup",
      tabIndex: -1,
      "aria-label": a,
      "aria-readonly": n || void 0,
      className: [
        Zn["dx-rating"],
        n ? Zn["dx-rating-readonly"] : null,
        r ? Zn["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: v,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Zn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => h(0),
            children: /* @__PURE__ */ o(Ce, { icon: "block", size: 16 })
          }
        ),
        m.map((u) => {
          const y = u <= e, $ = u === (e > 0 ? e : p);
          return /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${c} ${u}`,
              tabIndex: $ ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Zn["dx-rating-item"],
                y ? Zn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => h(u),
              onFocus: () => g(u),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Zn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Ce, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Zn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: "star", size: 20 }) })
              ]
            },
            u
          );
        })
      ]
    }
  );
}, or = {
  "dx-slider": "_dx-slider_18zjj_1",
  "dx-slider-track": "_dx-slider-track_18zjj_9",
  "dx-slider-range": "_dx-slider-range_18zjj_17",
  "dx-slider-handle": "_dx-slider-handle_18zjj_26",
  "dx-slider-vertical": "_dx-slider-vertical_18zjj_58",
  "dx-slider-disabled": "_dx-slider-disabled_18zjj_84"
};
function En(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const K$ = ({
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
  minLabel: f = "Min",
  maxLabel: p = "Max",
  tabIndex: g = 0,
  className: _,
  onChange: b,
  onInput: h,
  onValueChange: v,
  onInputChange: m
}) => {
  const u = ce(null), y = ce(
    null
  ), [$, x] = W(null), k = $ ?? e, w = $e(
    () => En(k, r, a),
    [k, r, a]
  ), S = $e(
    () => En(c ? t : w, r, a),
    [c, t, w, r, a]
  ), O = $e(
    () => En(c ? Math.max(n, S) : w, r, a),
    [c, n, S, w, r, a]
  ), P = q(
    (Y) => {
      const G = a - r;
      return G <= 0 ? 0 : (En(Y, r, a) - r) / G * 100;
    },
    [r, a]
  ), D = q(
    (Y, G) => {
      const X = u.current;
      if (!X) return r;
      const _e = X.getBoundingClientRect();
      let te;
      s === "vertical" ? te = 1 - (G - _e.top) / _e.height : te = (Y - _e.left) / _e.width;
      const ge = r + En(te, 0, 1) * (a - r);
      return i > 0 ? En(Math.round(ge / i) * i, r, a) : En(ge, r, a);
    },
    [r, a, i, s]
  ), I = q(
    (Y) => {
      typeof Y == "number" && x(Y), b?.(Y), v?.(Y);
    },
    [b, v]
  ), C = q(
    (Y) => {
      typeof Y == "number" && x(Y), h?.(Y), m?.(Y);
    },
    [h, m]
  ), N = q(
    (Y, G, X) => {
      const _e = D(G, X);
      let te;
      c ? Y === "min" ? te = { min: Math.min(_e, O), max: O } : te = { min: S, max: Math.max(_e, S) } : te = _e, C(te), y.current === null && I(te);
    },
    [c, D, S, O, C, I]
  ), T = q(
    (Y, G) => {
      const X = (i > 0 ? i : 1) * G;
      let _e;
      c ? Y === "min" ? _e = {
        min: En(S + X, r, O),
        max: O
      } : _e = {
        min: S,
        max: En(O + X, S, a)
      } : _e = En(w + X, r, a), I(_e);
    },
    [c, i, r, a, S, O, w, I]
  ), M = (Y, G) => {
    if (!l)
      switch (G.key) {
        case "ArrowLeft":
        case "ArrowDown":
          G.preventDefault(), T(Y, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          G.preventDefault(), T(Y, 1);
          break;
        case "Home":
          G.preventDefault(), I(c ? Y === "min" ? { min: r, max: O } : { min: S, max: S } : r);
          break;
        case "End":
          G.preventDefault(), I(c ? Y === "min" ? { min: O, max: O } : { min: S, max: a } : a);
          break;
      }
  }, L = (Y, G) => {
    l || (G.preventDefault(), G.currentTarget.focus(), typeof G.currentTarget.setPointerCapture == "function" && G.currentTarget.setPointerCapture(G.pointerId), y.current = { key: Y, pointerId: G.pointerId }, N(Y, G.clientX, G.clientY));
  }, z = (Y) => {
    !y.current || y.current.pointerId !== Y.pointerId || (Y.preventDefault(), N(y.current.key, Y.clientX, Y.clientY));
  }, F = (Y) => {
    !y.current || y.current.pointerId !== Y.pointerId || (y.current = null, Y.preventDefault(), I(c ? { min: S, max: O } : w));
  }, [V, ne] = W(null), re = P(S), B = P(O), H = c ? re : 0, ie = B;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        or["dx-slider"],
        s === "vertical" ? or["dx-slider-vertical"] : null,
        l ? or["dx-slider-disabled"] : null,
        _
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ A("div", { ref: u, className: or["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: or["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${H}%`, height: `${ie - H}%` } : { left: `${H}%`, width: `${ie - H}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(S),
            "aria-orientation": s,
            "aria-label": c ? f : d,
            "aria-disabled": l || void 0,
            tabIndex: l || c && V === "max" ? -1 : g,
            className: or["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${re}% - 8px)` } : { left: `calc(${re}% - 8px)` },
            onKeyDown: (Y) => M("min", Y),
            onPointerDown: (Y) => L("min", Y),
            onPointerMove: z,
            onPointerUp: F,
            onFocus: () => ne("min")
          }
        ),
        c && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-valuenow": Math.round(O),
            "aria-orientation": s,
            "aria-label": p,
            "aria-disabled": l || void 0,
            tabIndex: l || V === "min" ? -1 : g,
            className: or["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${B}% - 8px)` } : { left: `calc(${B}% - 8px)` },
            onKeyDown: (Y) => M("max", Y),
            onPointerDown: (Y) => L("max", Y),
            onPointerMove: z,
            onPointerUp: F,
            onFocus: () => ne("max")
          }
        )
      ] })
    }
  );
}, ht = {
  "dx-timespanpicker": "_dx-timespanpicker_9lmd1_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_9lmd1_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_9lmd1_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_9lmd1_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_9lmd1_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_9lmd1_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_9lmd1_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_9lmd1_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_9lmd1_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_9lmd1_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_9lmd1_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_9lmd1_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_9lmd1_157",
  "dx-timespanpicker-demos": "_dx-timespanpicker-demos_9lmd1_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_9lmd1_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_9lmd1_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_9lmd1_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_9lmd1_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_9lmd1_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_9lmd1_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_9lmd1_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_9lmd1_250"
}, Cv = "-10675199.02:48:05.4775808", Tv = "10675199.02:48:05.4775808", Bn = 86400, Fn = 3600, kn = 60, Wo = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, ga = {
  days: Bn,
  hours: Fn,
  minutes: kn,
  seconds: 1
}, Mv = {
  day: Bn,
  hour: Fn,
  minute: kn,
  second: 1
};
function yr(e) {
  return String(e).padStart(2, "0");
}
function Vr(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const a = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (a) {
    if (!a.slice(1).some((p) => p != null)) return null;
    const s = a[1] != null ? Number(a[1]) : 0, l = a[2] != null ? Number(a[2]) : 0, d = a[3] != null ? Number(a[3]) : 0, f = a[4] != null ? Number(a[4]) : 0;
    return n * (s * Bn + l * Fn + d * kn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const c = i[1] != null ? Number(i[1]) : 0, s = Number(i[2]), l = Number(i[3]), d = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return s > 23 || l > 59 || d > 59 ? null : n * (c * Bn + s * Fn + l * kn + d + f);
  }
  return null;
}
function Av(e) {
  return e.days * Bn + e.hours * Fn + e.minutes * kn + e.seconds;
}
function ya(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Bn);
  t %= Bn;
  const r = Math.floor(t / Fn);
  t %= Fn;
  const a = Math.floor(t / kn), i = Math.round(t % kn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: a, seconds: i };
}
function os(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / kn) * kn : t === "hour" ? r = Math.round(r / Fn) * Fn : t === "day" && (r = Math.round(r / Bn) * Bn);
  let a = Math.round(r % kn);
  const i = a === 60 ? 1 : 0;
  a = a === 60 ? 0 : a;
  const c = Math.floor(r / kn) + i, s = c % 60, l = Math.floor(c / 60), d = l % 24, f = Math.floor(l / 24), p = n ? "-" : "", g = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${p}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${p}${g}${yr(d)}`;
    case "minute":
      return `${p}${g}${yr(d)}:${yr(s)}`;
    default:
      return `${p}${g}${yr(d)}:${yr(s)}:${yr(a)}`;
  }
}
function ba(e, t = "second") {
  const n = Vr(e);
  return n === null ? "" : os(n, t);
}
function Ko(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const G$ = at(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: a,
    min: i = Cv,
    max: c = Tv,
    step: s = "1",
    precision: l = "second",
    showDays: d = !0,
    showHours: f = !0,
    showMinutes: p = !0,
    showSeconds: g = !0,
    allowClear: _ = !1,
    inline: b = !1,
    onChange: h,
    onValueChange: v,
    onOpen: m,
    onClose: u,
    disabled: y,
    placeholder: $,
    ariaLabel: x,
    triggerLabel: k,
    clearLabel: w,
    tabIndex: S,
    className: O,
    onBlur: P,
    onKeyDown: D,
    ...I
  }, C) {
    const N = ce(null), T = ce(null), M = ce(null), L = ct(), z = r !== void 0, [F, V] = W(
      () => a != null ? ba(a, l) : ""
    ), [ne, re] = W(!1), [B, H] = W(null), [ie, Y] = W(null), G = $e(
      () => Vr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), X = $e(
      () => Vr(c) ?? Number.MAX_SAFE_INTEGER,
      [c]
    ), _e = $e(() => {
      const le = Number.parseFloat(s);
      return Number.isNaN(le) || le <= 0 ? 1 : le;
    }, [s]), te = $e(() => {
      const le = z ? r ?? "" : F;
      return le ? Vr(le) : null;
    }, [r, F, z]), ge = q(
      (le) => {
        const Le = le === null ? "" : os(le, l);
        z || V(Le), h?.(Le), v?.(Le);
      },
      [z, l, h, v]
    ), Z = q(
      (le) => {
        le && B !== null && ge(B), re(!1), H(null), Y(null), u?.(), b || M.current?.focus();
      },
      [b, B, ge, u]
    ), Oe = q(() => {
      y || (H(te ?? 0), re(!0), m?.());
    }, [y, te, m]), ae = q(() => {
      ne ? Z(!1) : Oe();
    }, [ne, Z, Oe]), De = q(
      (le, Le) => {
        H((wt) => {
          const bt = (wt ?? te ?? 0) + Le * _e * ga[le];
          return Ko(bt, G, X);
        });
      },
      [te, _e, G, X]
    ), be = q(
      (le) => {
        const Le = ie?.[le];
        if (Le == null) return;
        const wt = Number.parseFloat(Le), Mt = Number.isNaN(wt) ? 0 : wt;
        H((bt) => {
          const R = bt ?? te ?? 0, Q = ya(R);
          Q[le] = Mt;
          const ke = (R < 0 ? -1 : 1) * Av(Q);
          return Ko(ke, G, X);
        }), Y(null);
      },
      [ie, te, G, X]
    ), We = (le, Le) => {
      Y((wt) => ({ ...wt ?? {}, [le]: Le }));
    }, Je = (le, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), be(le), De(le, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), be(le), De(le, -1);
          break;
        case "Home":
          Le.preventDefault(), be(le), H(G);
          break;
        case "End":
          Le.preventDefault(), be(le), H(X);
          break;
        case "Enter":
          Le.preventDefault(), be(le), Z(!0);
          break;
      }
    }, Ge = q(() => {
      if (ne) return;
      const le = Vr(F);
      ge(le !== null ? Ko(le, G, X) : null);
    }, [ne, F, G, X, ge]), Qe = (le) => {
      z || V(le.target.value);
    }, He = (le) => {
      le.key === "Enter" ? (le.preventDefault(), ne ? Z(!0) : Ge()) : le.key === "Escape" && ne ? (le.preventDefault(), Z(!1)) : le.key === "ArrowDown" && !ne ? (le.preventDefault(), Oe()) : le.key === "Tab" && ne && re(!1), D?.(le);
    }, gt = (le) => {
      Ge(), P?.(le);
    }, oe = () => {
      z || V(""), h?.(""), v?.(""), T.current?.focus();
    };
    Se(() => {
      if (!ne) return;
      const le = (Le) => {
        N.current && !N.current.contains(Le.target) && Z(!1);
      };
      return document.addEventListener("mousedown", le), () => document.removeEventListener("mousedown", le);
    }, [ne, Z]), Se(() => {
      if (!ne) return;
      const le = (Le) => {
        Le.key === "Escape" && Z(!1);
      };
      return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
    }, [ne, Z]), Se(() => {
      if (b && B !== null) {
        const le = te;
        (le === null || Math.abs(B - le) > 1e-9) && ge(B);
      }
    }, [b, B, te, ge]);
    const Te = q(
      (le) => {
        T.current = le, typeof C == "function" ? C(le) : C && (C.current = le);
      },
      [C]
    ), lt = z ? r ? ba(r, l) : "" : F, ze = z ? !!r : F.length > 0, st = b || ne, Xe = B ?? te ?? 0, Ct = ya(Xe), yt = Mv[l], ft = ["days", "hours", "minutes", "seconds"].filter(
      (le) => ga[le] >= yt && (le === "days" ? d : le === "hours" ? f : le === "minutes" ? p : g)
    ), Ve = t === "xs" ? ht["dx-timespanpicker-input--xs"] : t === "sm" ? ht["dx-timespanpicker-input--sm"] : t === "lg" ? ht["dx-timespanpicker-input--lg"] : t === "xl" ? ht["dx-timespanpicker-input--xl"] : ht["dx-timespanpicker-input--md"], Tt = /* @__PURE__ */ A("div", { className: ht["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: ht["dx-timespanpicker-demos"], "aria-live": "polite", children: os(Xe, l) }),
      /* @__PURE__ */ o("div", { className: ht["dx-timespanpicker-units"], children: ft.map((le) => /* @__PURE__ */ A("label", { className: ht["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: ht["dx-timespanpicker-unit-label"], children: Wo[le] }),
        /* @__PURE__ */ A("span", { className: ht["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: ht["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ie?.[le] ?? String(Ct[le]),
              onChange: (Le) => We(le, Le.target.value),
              onKeyDown: (Le) => Je(le, Le),
              onBlur: () => be(le)
            }
          ),
          /* @__PURE__ */ A("span", { className: ht["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Wo[le].toLowerCase()}`,
                onClick: () => {
                  be(le), De(le, 1);
                },
                children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Wo[le].toLowerCase()}`,
                onClick: () => {
                  be(le), De(le, -1);
                },
                children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, le)) }),
      /* @__PURE__ */ o("div", { className: ht["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: ht["dx-timespanpicker-ok"],
          onClick: () => Z(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ A(
      "div",
      {
        ref: N,
        className: [
          ht["dx-timespanpicker"],
          b ? ht["dx-timespanpicker-inline"] : null,
          O
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ A(ot, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Te,
                type: "text",
                autoComplete: "off",
                value: lt,
                disabled: y,
                placeholder: $,
                tabIndex: S,
                role: "combobox",
                "aria-label": x ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": L,
                "aria-invalid": n || void 0,
                className: [
                  ht["dx-timespanpicker-input"],
                  Ve,
                  n ? ht["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Qe,
                onKeyDown: He,
                onBlur: gt,
                ...I
              }
            ),
            _ && !y && ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: ht["dx-timespanpicker-clear"],
                "aria-label": w ?? "Clear",
                onClick: oe,
                children: /* @__PURE__ */ o(Ce, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: M,
                type: "button",
                className: [ht["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": k ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": L,
                disabled: y,
                onClick: ae,
                children: /* @__PURE__ */ o(Ce, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          st && /* @__PURE__ */ o(
            "div",
            {
              id: L,
              role: b ? void 0 : "dialog",
              "aria-label": x ?? "Time span picker",
              className: b ? void 0 : ht["dx-timespanpicker-popup"],
              children: Tt
            }
          )
        ]
      }
    );
  }
), Dv = "_wrapper_ou9x5_1", Iv = "_cells_ou9x5_8", zv = "_cell_ou9x5_8", Lv = "_invalid_ou9x5_63", Pv = "_live_ou9x5_73", sr = {
  wrapper: Dv,
  cells: Iv,
  cell: zv,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Lv,
  live: Pv
};
function xa(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const V$ = at(
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
    liveAnnounce: f = !0,
    className: p,
    "aria-label": g
  }, _) {
    const b = ct(), h = n !== void 0, [v, m] = W(xa(r).join("")), u = h ? xa(n).join("") : v, y = Array.from({ length: t }, (I, C) => u[C] ?? ""), $ = ce([]), [x, k] = W(""), w = (I) => {
      h || m(I), a?.(I);
    }, S = (I) => {
      const C = $.current[I];
      C && !C.disabled && (C.focus(), C.select());
    }, O = (I, C) => {
      const N = C.replace(/\D/g, "").slice(-1), T = u.split("");
      if (N) {
        T[I] = N;
        const M = T.join("").slice(0, t);
        w(M), M.length < t ? S(I + 1) : f && k("Code complete");
      }
    }, P = (I, C) => {
      if (C.key === "Backspace") {
        if (C.preventDefault(), u[I]) {
          const N = u.split("");
          N[I] = "", w(N.join(""));
        } else if (I > 0) {
          const N = u.split("");
          N[I - 1] = "", w(N.join("")), S(I - 1);
        }
      } else C.key === "ArrowLeft" && I > 0 ? (C.preventDefault(), S(I - 1)) : C.key === "ArrowRight" && I < t - 1 ? (C.preventDefault(), S(I + 1)) : C.key === "Home" ? (C.preventDefault(), S(0)) : C.key === "End" && (C.preventDefault(), S(t - 1));
    }, D = (I, C) => {
      C.preventDefault();
      const N = C.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const T = u.split("");
      let M = 0;
      for (let z = 0; z < N.length && I + z < t; z++)
        T[I + z] = N[z] ?? "", M++;
      const L = T.join("");
      w(L), L.length >= t ? f && k("Code complete") : S(I + M);
    };
    return /* @__PURE__ */ A(
      "div",
      {
        className: [sr.wrapper, p].filter(Boolean).join(" "),
        role: "group",
        "aria-label": g ?? d,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [sr.cells, sr[c]].join(" "), children: y.map((I, C) => /* @__PURE__ */ o(
            "input",
            {
              ref: (N) => {
                $.current[C] = N, C === 0 && _ && (typeof _ == "function" ? _(N) : _.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: l,
              "aria-label": `Digit ${C + 1} of ${t}`,
              "aria-invalid": i && I !== "" ? !0 : void 0,
              autoFocus: s && C === 0,
              className: [
                sr.cell,
                sr[`cell-${c}`],
                i ? sr.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (N) => O(C, N.target.value),
              onKeyDown: (N) => P(C, N),
              onPaste: (N) => D(C, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                f && k("");
              }
            },
            C
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${b}-live`,
              role: "status",
              "aria-live": "polite",
              className: sr.live,
              children: x
            }
          )
        ]
      }
    );
  }
), Rv = "_wrapper_6lcd5_1", jv = "_header_6lcd5_7", Bv = "_label_6lcd5_15", Fv = "_clear_6lcd5_22", Hv = "_canvas_6lcd5_53", Uv = "_disabled_6lcd5_69", br = {
  wrapper: Rv,
  header: jv,
  label: Bv,
  clear: Fv,
  canvas: Hv,
  disabled: Uv
}, Y$ = at(
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
    disabled: f = !1,
    className: p
  }, g) {
    const _ = ce(null), b = ce(!1), h = ce(!1), v = ce({ x: 0, y: 0 });
    Se(() => {
      const w = _.current;
      if (!w) return;
      const S = window.devicePixelRatio || 1, O = Math.round((l ?? w.clientWidth) * S), P = Math.round(d * S);
      (w.width !== O || w.height !== P) && (w.width = O, w.height = P);
      const D = w.getContext("2d");
      if (!D) return;
      D.setTransform(S, 0, 0, S, 0, 0), D.lineWidth = i, D.strokeStyle = a, D.lineCap = "round", D.lineJoin = "round";
      const I = t ?? n;
      if (I) {
        const C = new Image();
        C.onload = () => {
          D.drawImage(C, 0, 0, w.clientWidth, d);
        }, C.src = I;
      }
    }, [t, n, a, i, l, d]);
    const m = () => {
      const w = _.current;
      if (!w) return;
      const S = w.toDataURL("image/png");
      r?.(S);
    }, u = () => {
      const w = _.current;
      if (!w) return;
      const S = w.getContext("2d");
      S && S.clearRect(0, 0, w.width, w.height), r?.("");
    };
    $o(g, () => ({
      clear: u,
      toDataURL: (w = "image/png", S) => _.current?.toDataURL(w, S) ?? ""
    }));
    const y = (w) => {
      const S = w.currentTarget.getBoundingClientRect();
      return { x: w.clientX - S.left, y: w.clientY - S.top };
    }, $ = (w) => {
      f || (w.preventDefault(), typeof w.currentTarget.setPointerCapture == "function" && w.currentTarget.setPointerCapture(w.pointerId), b.current = !0, h.current = !1, v.current = y(w));
    }, x = (w) => {
      if (!b.current) return;
      w.preventDefault();
      const S = w.currentTarget.getContext("2d");
      if (!S) return;
      const O = y(w);
      S.beginPath(), S.moveTo(v.current.x, v.current.y), S.lineTo(O.x, O.y), S.stroke(), v.current = O, h.current = !0;
    }, k = (w) => {
      b.current && (w.preventDefault(), b.current = !1, h.current && m());
    };
    return /* @__PURE__ */ A(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          br.wrapper,
          p,
          f ? br.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ A("div", { className: br.header, children: [
            /* @__PURE__ */ o("span", { className: br.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: br.clear,
                onClick: u,
                disabled: f,
                children: c
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: _,
              role: "img",
              "aria-label": s,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${d}px`
              },
              className: br.canvas,
              onPointerDown: $,
              onPointerMove: x,
              onPointerUp: k,
              onPointerCancel: k
            }
          )
        ]
      }
    );
  }
), qv = "_wrapper_dsvd2_1", Wv = "_trigger_dsvd2_7", Kv = "_list_dsvd2_35", Gv = "_row_dsvd2_44", Vv = "_name_dsvd2_59", Yv = "_size_dsvd2_68", Xv = "_progress_dsvd2_74", Zv = "_fill_dsvd2_82", Jv = "_status_dsvd2_99", Qv = "_remove_dsvd2_106", Cn = {
  wrapper: qv,
  trigger: Wv,
  list: Kv,
  row: Gv,
  name: Vv,
  size: Yv,
  progress: Xv,
  fill: Zv,
  status: Jv,
  remove: Qv
};
function va(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const X$ = at(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: a = !0,
  headers: i,
  accept: c,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: d = "Upload",
  children: f,
  onProgress: p,
  onComplete: g,
  onError: _
}, b) {
  const h = ce(null), [v, m] = W([]), u = ce(/* @__PURE__ */ new Map()), y = (S, O) => {
    m(
      (P) => P.map((D) => D.file.name === S ? { ...D, ...O } : D)
    );
  }, $ = (S) => {
    if (!t) return;
    const O = new XMLHttpRequest();
    u.current.set(S.file.name, O);
    const P = new FormData();
    if (P.append(r, S.file), O.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const I = Math.round(D.loaded / D.total * 100);
      y(S.file.name, { state: "uploading", progress: I }), p?.(S.file.name, I);
    }), O.addEventListener("load", () => {
      O.status >= 200 && O.status < 300 ? (y(S.file.name, { state: "complete", progress: 100 }), g?.(S.file.name)) : (y(S.file.name, {
        state: "error",
        message: `HTTP ${O.status}`
      }), _?.(S.file.name, `HTTP ${O.status}`));
    }), O.addEventListener("error", () => {
      y(S.file.name, { state: "error", message: "Network error" }), _?.(S.file.name, "Network error");
    }), i)
      for (const [D, I] of Object.entries(i))
        O.setRequestHeader(D, I);
    O.open("POST", t), O.send(P), y(S.file.name, { state: "uploading", progress: 0 });
  }, x = (S) => {
    if (!S) return;
    const O = [...S], P = [];
    let D = Math.max(0, s - v.length);
    for (const C of O) {
      if (l != null && C.size > l) {
        _?.(
          C.name,
          `File too large (maximum ${va(l)})`
        );
        continue;
      }
      if (D <= 0) {
        _?.(C.name, `Too many files (maximum ${s})`);
        continue;
      }
      D -= 1, P.push(C);
    }
    const I = P.map((C) => ({
      file: C,
      state: "pending",
      progress: 0
    }));
    m((C) => [...C, ...I]), h.current && (h.current.value = ""), a && I.forEach($);
  }, k = (S) => {
    u.current.get(S)?.abort(), u.current.delete(S), m((P) => P.filter((D) => D.file.name !== S));
  }, w = f ?? /* @__PURE__ */ A(
    "button",
    {
      type: "button",
      className: Cn.trigger,
      onClick: () => h.current?.click(),
      children: [
        /* @__PURE__ */ o(Ce, { icon: "upload", size: 14 }),
        d
      ]
    }
  );
  return $o(b, () => ({
    open: () => h.current?.click(),
    upload: () => v.forEach((S) => S.state === "pending" ? $(S) : null)
  })), /* @__PURE__ */ A("div", { className: Cn.wrapper, children: [
    w,
    /* @__PURE__ */ o(
      "input",
      {
        ref: h,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: c,
        "data-testid": "upload-input",
        onChange: (S) => x(S.target.files)
      }
    ),
    !f && v.length > 0 && /* @__PURE__ */ o("ul", { className: Cn.list, children: v.map(({ file: S, state: O, progress: P, message: D }) => /* @__PURE__ */ A(
      "li",
      {
        className: Cn.row,
        "data-state": O,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Cn.name, children: S.name }),
          /* @__PURE__ */ o("span", { className: Cn.size, children: va(S.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Cn.progress,
              role: "progressbar",
              "aria-label": `${S.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": P,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: Cn.fill,
                  style: { width: `${P}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: Cn.status, role: "status", children: O === "uploading" ? "Uploading" : O === "complete" ? "Complete" : O === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Cn.remove,
              "aria-label": `Remove ${S.name}`,
              onClick: () => k(S.name),
              children: /* @__PURE__ */ o(Ce, { icon: "close", size: 14 })
            }
          )
        ]
      },
      S.name
    )) })
  ] });
}), e2 = "_zone_nl0bz_1", t2 = "_dragging_nl0bz_23", n2 = "_caption_nl0bz_28", r2 = "_browse_nl0bz_40", o2 = "_disabled_nl0bz_67", Ur = {
  zone: e2,
  dragging: t2,
  caption: n2,
  browse: r2,
  disabled: o2
};
function s2(e, t) {
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
const Z$ = at(
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
    const f = ce(null), [p, g] = W(!1), _ = (u) => {
      if (!u || u.length === 0) return;
      const y = [...u].filter(($) => s2($, t ?? ""));
      y.length !== 0 && r?.(y);
    }, b = (u) => {
      s || (u.preventDefault(), g(!0));
    }, h = (u) => {
      s || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", g(!0));
    }, v = (u) => {
      s || u.currentTarget.contains(u.relatedTarget) || g(!1);
    }, m = (u) => {
      s || (u.preventDefault(), g(!1), _(u.dataTransfer.files));
    };
    return $o(d, () => ({
      open: () => f.current?.click()
    })), // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/role-supports-aria-props -- file-drop target; keyboard users pick files via the browse control; aria-disabled is the only AT-visible disabled signal on a non-form region
    /* @__PURE__ */ A(
      "div",
      {
        role: "region",
        "aria-label": a,
        "aria-disabled": s || void 0,
        className: [
          Ur.zone,
          p ? Ur.dragging : null,
          s ? Ur.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: h,
        onDragLeave: v,
        onDrop: m,
        children: [
          /* @__PURE__ */ o("p", { className: Ur.caption, children: p ? i : a }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Ur.browse,
              onClick: () => f.current?.click(),
              children: c
            }
          ),
          /* @__PURE__ */ o(
            "input",
            {
              ref: f,
              type: "file",
              hidden: !0,
              disabled: s,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (u) => {
                _(u.target.files), u.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), a2 = "_root_1rz3e_1", l2 = "_menubar_1rz3e_5", i2 = "_horizontal_1rz3e_15", c2 = "_vertical_1rz3e_20", d2 = "_itemWrapper_1rz3e_25", u2 = "_item_1rz3e_25", f2 = "_disabled_1rz3e_61", p2 = "_icon_1rz3e_68", h2 = "_text_1rz3e_75", _2 = "_caret_1rz3e_79", m2 = "_hasChildren_1rz3e_85", g2 = "_submenu_1rz3e_91", y2 = "_submenuItem_1rz3e_91", b2 = "_flyout_1rz3e_182", x2 = "_hamburger_1rz3e_202", v2 = "_responsive_1rz3e_225", w2 = "_mobileOpen_1rz3e_234", mt = {
  root: a2,
  menubar: l2,
  horizontal: i2,
  vertical: c2,
  itemWrapper: d2,
  item: u2,
  disabled: f2,
  icon: p2,
  text: h2,
  caret: _2,
  hasChildren: m2,
  submenu: g2,
  submenuItem: y2,
  flyout: b2,
  hamburger: x2,
  responsive: v2,
  mobileOpen: w2
}, vo = dr(null);
function k2(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function N2(e, t, n, r, a) {
  const [i, c] = W(n), s = e ? t ?? !1 : i, l = q(
    (p) => {
      e || c(p), r?.(p);
    },
    [e, r]
  ), [d, f] = W(a);
  return a !== d && (f(a), a > 0 && !e && c(!1)), Se(() => {
    a > 0 && r?.(!1);
  }, [a]), [s, l];
}
function S2({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: mt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: mt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Ce, { icon: e, size: 16 })
    }
  ) : null;
}
function wo(e) {
  return Kt(e) && e.type === Ya;
}
function ps({
  itemKey: e,
  props: t
}) {
  const n = An(vo);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: a, path: i, disabled: c, template: s } = t, l = $e(
    () => Zr.toArray(t.children).filter(Kt),
    [t.children]
  ), d = l.length > 0, f = !!c, p = t.open !== void 0, [g, _] = N2(
    p,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, h = ce(0), m = (b && !p ? n.openKey === e : null) ?? g, u = q(
    (Y) => {
      b && !p ? n.setOpenKey(Y ? e : null) : (_(Y), b && n.setOpenKey(null));
    },
    [b, p, n, e, _]
  ), [, y] = W(0);
  Se(() => {
    if (!i || !n.urlMatching) return;
    const Y = () => y((G) => G + 1);
    return window.addEventListener("hashchange", Y), window.addEventListener("popstate", Y), () => {
      window.removeEventListener("hashchange", Y), window.removeEventListener("popstate", Y);
    };
  }, [i, n.urlMatching]);
  const $ = t.selected !== void 0 || t.onSelectedChange !== void 0, x = t.defaultSelected ?? !1, k = n.urlMatching && !d && !$ && i ? k2(i, t.match) : !1, w = !d && ($ ? t.selected ?? x : k || x || n.clickedKey != null && n.clickedKey === e), S = !f && (n.activeKey === e || n.activeKey == null && n.defaultStopKey === e), O = () => n.setActiveKey(e), P = q(
    (Y) => {
      if (f) {
        Y.preventDefault();
        return;
      }
      const G = { text: r, value: a, path: i };
      [n.emit(G), t.onClick?.(G)].includes(!1) && Y.preventDefault(), $ || n.setClickedKey(e), t.onSelectedChange?.(!0), n.closeAll();
    },
    [f, r, a, i, n, t, $, e]
  ), D = q(() => {
    if (!f) {
      if (m && (Date.now() - h.current < 600 || !n.clickToOpen)) {
        h.current = 0;
        return;
      }
      u(!m);
    }
  }, [f, m, u, n.clickToOpen]), I = q(() => {
    !d || f || n.clickToOpen || (h.current = Date.now(), u(!0));
  }, [d, f, n.clickToOpen, u]), C = q(() => {
    n.clickToOpen || u(!1);
  }, [n.clickToOpen, u]), N = `${n.baseId}-submenu-${e}`, [T, M] = W(null), [L, z] = W(null), F = $e(() => {
    const Y = l.findIndex(
      (G) => wo(G) && !G.props.disabled
    );
    return Y >= 0 ? `${e}-${Y}` : null;
  }, [l, e]), [V, ne] = W(n.closeSignal);
  n.closeSignal !== V && (ne(n.closeSignal), n.closeSignal > 0 && M(null));
  const re = $e(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      urlMatching: n.urlMatching,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: T,
      setOpenKey: M,
      activeKey: L,
      setActiveKey: z,
      clickedKey: n.clickedKey,
      setClickedKey: n.setClickedKey,
      defaultStopKey: F
    }),
    [n, T, L, F]
  ), B = d ? /* @__PURE__ */ o("span", { className: mt.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Ce,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, H = s ?? /* @__PURE__ */ A(ot, { children: [
    /* @__PURE__ */ o(
      S2,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: mt.text, children: r }),
    B
  ] });
  if (d) {
    let Y = function(G) {
      const X = Array.from(G.currentTarget.children).map((ge) => ge.querySelector('[role="menuitem"]')).filter(
        (ge) => ge != null && ge.getAttribute("aria-disabled") !== "true" && !ge.hasAttribute("disabled")
      ), _e = document.activeElement, te = _e ? X.indexOf(_e) : -1;
      G.key === "ArrowDown" ? (G.preventDefault(), G.stopPropagation(), (te === -1 ? X[0] : X[(te + 1) % X.length])?.focus()) : G.key === "ArrowUp" ? (G.preventDefault(), G.stopPropagation(), (te === -1 ? X[X.length - 1] : X[(te - 1 + X.length) % X.length])?.focus()) : G.key === "ArrowRight" ? _e?.getAttribute("aria-haspopup") === "menu" && (G.preventDefault(), G.stopPropagation(), _e.getAttribute("aria-expanded") !== "true" && _e.click(), document.getElementById(
        _e.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (G.key === "ArrowLeft" || G.key === "Escape") && (G.preventDefault(), G.stopPropagation(), u(!1));
    };
    return /* @__PURE__ */ A(
      "div",
      {
        className: mt.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : I,
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
              "aria-expanded": m,
              "aria-controls": N,
              tabIndex: S ? 0 : -1,
              disabled: f,
              className: [
                mt.item,
                f ? mt.disabled : null,
                mt.hasChildren
              ].filter(Boolean).join(" "),
              onClick: D,
              onFocus: O,
              children: H
            }
          ),
          m ? /* @__PURE__ */ o(
            "div",
            {
              id: N,
              role: "menu",
              tabIndex: -1,
              "aria-label": r,
              className: [
                mt.submenu,
                n.flyout && !b ? mt.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: Y,
              children: /* @__PURE__ */ o(vo.Provider, { value: re, children: l.map(
                (G, X) => wo(G) ? /* @__PURE__ */ o(
                  ps,
                  {
                    itemKey: `${e}-${X}`,
                    props: G.props
                  },
                  `${e}-${X}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(ls, { children: G }, `${e}-custom-${X}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const ie = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": w ? "page" : void 0,
    tabIndex: S ? 0 : -1,
    onFocus: O,
    "data-dx-menu-item": "",
    className: [mt.submenuItem, f ? mt.disabled : null].filter(Boolean).join(" "),
    onClick: P
  };
  return i && !f ? /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: i, target: t.target, ...ie, children: H }) }) : /* @__PURE__ */ o("div", { className: mt.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...ie, children: H }) });
}
function Ya(e) {
  if (!An(vo)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(ps, { itemKey: e.text, props: e });
}
function $2({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  urlMatching: a = !0,
  isContextMenu: i = !1,
  onClick: c,
  onClose: s,
  ariaLabel: l = "Menu",
  toggleAriaLabel: d = "Toggle menu",
  className: f,
  ...p
}) {
  const g = ct(), _ = ce(null), b = ce(null), [h, v] = W(null), [m, u] = W(null), [y, $] = W(0), [x, k] = W(!1), [w, S] = W(null), O = ce(null);
  Se(() => {
    if (!a) return;
    const M = () => S(null);
    return window.addEventListener("hashchange", M), window.addEventListener("popstate", M), () => {
      window.removeEventListener("hashchange", M), window.removeEventListener("popstate", M);
    };
  }, [a]);
  const P = q(
    (M) => c?.(M),
    [c]
  ), D = q(() => {
    v(null), $((M) => M + 1);
  }, []);
  Se(() => {
    if (h == null) return;
    const M = (L) => {
      _.current && !_.current.contains(L.target) && D();
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [h, D]), Se(() => {
    O.current != null && h === O.current && (document.getElementById(`${g}-submenu-${h}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), O.current = null);
  }, [h, g]);
  const I = $e(
    () => Zr.toArray(e).filter(Kt),
    [e]
  ), C = $e(() => {
    const M = I.findIndex(
      (L) => wo(L) && !L.props.disabled
    );
    return M >= 0 ? String(M) : null;
  }, [I]), N = $e(
    () => ({
      baseId: g,
      flyout: n,
      urlMatching: a,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: P,
      closeAll: D,
      openKey: h,
      setOpenKey: v,
      activeKey: m,
      setActiveKey: u,
      clickedKey: w,
      setClickedKey: S,
      defaultStopKey: C
    }),
    [
      g,
      n,
      a,
      t,
      y,
      P,
      D,
      h,
      m,
      w,
      C
    ]
  ), T = (M) => {
    const L = b.current;
    if (!L) return;
    const z = Array.from(L.children).map((ne) => ne.querySelector('[role="menuitem"]')).filter(
      (ne) => ne != null && !ne.hasAttribute("disabled") && ne.getAttribute("aria-disabled") !== "true"
    );
    if (h != null) {
      const ne = document.getElementById(`${g}-submenu-${h}`);
      if (ne) {
        const re = Array.from(
          ne.querySelectorAll('[role="menuitem"]')
        ).filter(
          (ie) => ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
        ), B = document.activeElement, H = B ? re.indexOf(B) : -1;
        if (M.key === "ArrowDown") {
          M.preventDefault(), (H === -1 ? re[0] : re[(H + 1) % re.length])?.focus();
          return;
        }
        if (M.key === "ArrowUp") {
          M.preventDefault(), (H === -1 ? re[re.length - 1] : re[(H - 1 + re.length) % re.length])?.focus();
          return;
        }
        if (M.key === "Escape") {
          M.preventDefault(), D(), s?.(), L.querySelector(`[data-index="${h}"]`)?.focus();
          return;
        }
        if (M.key === "Enter" || M.key === " ") return;
      }
      if (M.key === "Escape") {
        M.preventDefault(), D(), s?.();
        return;
      }
    }
    const F = document.activeElement, V = F ? z.indexOf(F) : -1;
    if (M.key === "ArrowRight") {
      if (M.preventDefault(), z.length === 0) return;
      z[V === -1 ? 0 : (V + 1) % z.length]?.focus();
      return;
    }
    if (M.key === "ArrowLeft") {
      if (M.preventDefault(), z.length === 0) return;
      z[V === -1 ? z.length - 1 : (V - 1 + z.length) % z.length]?.focus();
      return;
    }
    if (i && (M.key === "ArrowDown" || M.key === "ArrowUp")) {
      if (M.preventDefault(), z.length === 0) return;
      (M.key === "ArrowDown" ? z[V === -1 ? 0 : (V + 1) % z.length] : z[V === -1 ? z.length - 1 : (V - 1 + z.length) % z.length])?.focus();
      return;
    }
    if (M.key === "ArrowDown") {
      if (V >= 0) {
        const ne = F?.getAttribute("data-index");
        if (ne == null) return;
        L.querySelector(
          `[data-index="${ne}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (M.preventDefault(), O.current = ne, v(ne));
      }
      return;
    }
    if (M.key === "Home") {
      M.preventDefault(), z[0]?.focus();
      return;
    }
    if (M.key === "End") {
      M.preventDefault(), z[z.length - 1]?.focus();
      return;
    }
    if (M.key.length === 1 && !M.ctrlKey && !M.metaKey) {
      const ne = z.map((B) => B.textContent ?? ""), re = V === -1 ? 0 : (V + 1) % z.length;
      for (let B = 0; B < z.length; B++) {
        const H = (re + B) % z.length;
        if (ne[H]?.toLowerCase().startsWith(M.key.toLowerCase())) {
          M.preventDefault(), z[H]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ A(
    "nav",
    {
      ref: _,
      "aria-label": l,
      className: [
        mt.root,
        i ? mt.vertical : mt.horizontal,
        r ? mt.responsive : null,
        r && x ? mt.mobileOpen : null,
        n ? mt.flyoutRoot : null,
        f
      ].filter(Boolean).join(" "),
      ...p,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": d,
            "aria-expanded": x,
            className: mt.hamburger,
            onClick: () => k((M) => !M),
            children: /* @__PURE__ */ o(Ce, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: b,
            role: i ? "menu" : "menubar",
            "aria-label": l,
            className: mt.menubar,
            onKeyDown: T,
            children: /* @__PURE__ */ o(vo.Provider, { value: N, children: I.map(
              (M, L) => wo(M) ? /* @__PURE__ */ o(
                ps,
                {
                  itemKey: String(L),
                  props: M.props
                },
                `top-${L}`
              ) : /* @__PURE__ */ o(ls, { children: M }, `top-custom-${L}`)
            ) })
          }
        )
      ]
    }
  );
}
const O2 = "_popup_18kyn_1", E2 = "_menu_18kyn_22", ss = {
  popup: O2,
  menu: E2
}, Xa = dr(null);
function J$() {
  const e = An(Xa);
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
function C2({ state: e, onClose: t }) {
  const n = ce(null), [r, a] = W({ left: e.x, top: e.y });
  Go(() => {
    const c = n.current;
    if (!c) return;
    const s = c.getBoundingClientRect();
    a({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), Se(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = q(
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
      className: ss.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: ss.menu, children: e.options.content ?? /* @__PURE__ */ o(
        $2,
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
function Q$({ children: e }) {
  const [t, n] = W(null), r = q(() => {
    n((c) => (c?.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), null));
  }, []), a = q(
    (c, s) => {
      c.preventDefault();
      const l = c.currentTarget ?? c.target;
      n({ x: c.clientX, y: c.clientY, invoker: l, options: s });
    },
    []
  );
  Se(() => {
    if (!t) return;
    const c = (f) => {
      const p = document.querySelector(`.${ss.popup}`);
      p && !p.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, l = () => r(), d = () => r();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", d), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", d);
    };
  }, [t, r]);
  const i = $e(
    () => ({ open: a, close: r, isOpen: t != null }),
    [a, r, t]
  );
  return /* @__PURE__ */ A(Xa.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ o(C2, { state: t, onClose: r }) : null
  ] });
}
const T2 = "_root_5srqk_1", M2 = "_list_5srqk_9", A2 = "_item_5srqk_14", D2 = "_trigger_5srqk_18", I2 = "_disabled_5srqk_48", z2 = "_expanded_5srqk_55", L2 = "_selected_5srqk_37", P2 = "_icon_5srqk_80", R2 = "_text_5srqk_96", j2 = "_caret_5srqk_103", B2 = "_open_5srqk_110", F2 = "_submenu_5srqk_114", H2 = "_iconOnly_5srqk_196", U2 = "_stacked_5srqk_225", jt = {
  root: T2,
  list: M2,
  item: A2,
  trigger: D2,
  disabled: I2,
  expanded: z2,
  selected: L2,
  icon: P2,
  text: R2,
  caret: j2,
  open: B2,
  submenu: F2,
  iconOnly: H2,
  stacked: U2
}, ko = dr(null);
function q2() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function W2(e, t) {
  const n = q2(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function K2({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ o("span", { className: jt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: jt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Ce, { icon: e, size: 16 })
    }
  ) : null;
}
function hs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = An(ko);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: a, value: i, path: c, disabled: s } = n, l = $e(
    () => Zr.toArray(n.children).filter(Kt),
    [n.children]
  ), d = l.length > 0, f = !!s, p = n.match ?? r.match, g = n.expanded !== void 0, [_, b] = W(
    n.defaultExpanded ?? !1
  ), h = g ? n.expanded ?? !1 : _, v = q(
    (z) => {
      g || b(z), n.onExpandedChange?.(z);
    },
    [g, n]
  );
  Se(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && v(!1);
  }, [r.collapseSignal]);
  const m = n.onSelectedChange !== void 0 || n.selected !== void 0, u = n.defaultSelected ?? !1, y = !m && c ? W2(c, p) : !1, $ = m ? n.selected ?? u : y || u || r.clickedKey != null && r.clickedKey === e, [, x] = W(0);
  Se(() => {
    if (!c) return;
    const z = () => x((F) => F + 1);
    return window.addEventListener("hashchange", z), window.addEventListener("popstate", z), () => {
      window.removeEventListener("hashchange", z), window.removeEventListener("popstate", z);
    };
  }, [c]);
  const k = $e(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        v(!0), r.openAncestors();
      }
    }),
    [r, v]
  );
  Se(() => {
    y && t.length > 0 && k.openAncestors();
  }, []);
  const w = q(
    (z) => {
      if (f) {
        z.preventDefault();
        return;
      }
      const F = { text: a, value: i, path: c };
      [r.emit(F), n.onClick?.(F)].includes(!1) && z.preventDefault(), m || r.setClickedKey(e), n.onSelectedChange?.(!0);
    },
    [f, a, i, c, r, n, m, e]
  ), S = q(() => {
    f || (h || r.notifyOpened(e, t), v(!h));
  }, [f, h, r, e, t, v]), O = q(
    (z) => {
      z.key === "Enter" || z.key === " " ? (z.preventDefault(), d ? S() : z.target.click()) : z.key === "Escape" && h ? (z.preventDefault(), v(!1)) : z.key === "ArrowRight" && d && !h ? (z.preventDefault(), r.notifyOpened(e, t), v(!0)) : z.key === "ArrowLeft" && h && (z.preventDefault(), v(!1));
    },
    [d, S, h, v, r, e, t]
  ), P = d && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [jt.caret, h ? jt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, D = n.template ?? /* @__PURE__ */ A(ot, { children: [
    /* @__PURE__ */ o(
      K2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: jt.text, "aria-label": a, children: n.icon || n.image ? null : a.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: jt.text, children: a }),
    P
  ] }), I = `${r.baseId}-panel-${e}`, C = `${r.baseId}-trigger-${e}`, N = [
    jt.trigger,
    f ? jt.disabled : null,
    h ? jt.expanded : null,
    $ ? jt.selected : null
  ].filter(Boolean).join(" "), T = r.level > 0 ? "menuitem" : void 0, M = d ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: C,
      role: T,
      "aria-expanded": h,
      "aria-controls": I,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: N,
      onClick: S,
      onKeyDown: O,
      children: D
    }
  ) : c && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: C,
      role: T,
      href: c,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": $ ? "page" : void 0,
      tabIndex: 0,
      className: N,
      onClick: w,
      onKeyDown: O,
      children: D
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: C,
      role: T,
      "aria-current": $ ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: N,
      onClick: w,
      onKeyDown: O,
      children: D
    }
  ), L = d ? r.renderMode === "server" && !h ? null : /* @__PURE__ */ o(
    "div",
    {
      id: I,
      role: "menu",
      "aria-labelledby": C,
      className: jt.submenu,
      hidden: r.renderMode === "client" && !h ? !0 : void 0,
      children: /* @__PURE__ */ o(ko.Provider, { value: k, children: l.map((z, F) => /* @__PURE__ */ o(
        hs,
        {
          itemKey: `${e}-${F}`,
          ancestors: [...t, e],
          props: z.props
        },
        `${e}-${F}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ A(
    "div",
    {
      className: jt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        M,
        L
      ]
    }
  );
}
function eO(e) {
  if (!An(ko)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(hs, { itemKey: e.text, ancestors: [], props: e });
}
function tO({
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
  const f = ct(), [p, g] = W(0), _ = ce(/* @__PURE__ */ new Set()), [b, h] = W(null);
  Se(() => {
    const k = () => h(null);
    return window.addEventListener("hashchange", k), window.addEventListener("popstate", k), () => {
      window.removeEventListener("hashchange", k), window.removeEventListener("popstate", k);
    };
  }, []);
  const v = q(
    (k) => c?.(k),
    [c]
  ), m = q(
    (k, w) => {
      t || (_.current = /* @__PURE__ */ new Set([k, ...w]), g((S) => S + 1));
    },
    [t]
  ), u = (k) => Array.from(
    k.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (w) => !w.hasAttribute("disabled") && w.getAttribute("aria-disabled") !== "true" && w.closest("[hidden]") == null
  ), y = (k) => {
    if (!(k.key === "Enter" || k.key === " ")) {
      if (k.key === "ArrowDown" || k.key === "ArrowUp") {
        const w = k.target, S = u(k.currentTarget), O = S.indexOf(w);
        if (O === -1) return;
        k.preventDefault();
        const P = k.key === "ArrowDown" ? 1 : -1;
        S[(O + P + S.length) % S.length]?.focus();
      } else if (k.key === "Home" || k.key === "End") {
        const w = u(k.currentTarget);
        k.preventDefault(), (k.key === "Home" ? w[0] : w[w.length - 1])?.focus();
      }
    }
  }, $ = $e(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: a,
      level: 0,
      collapseSignal: p,
      collapseSkipRef: _,
      emit: v,
      notifyOpened: m,
      openAncestors: () => {
      },
      clickedKey: b,
      setClickedKey: h
    }),
    [
      f,
      t,
      n,
      r,
      i,
      a,
      p,
      v,
      m,
      b
    ]
  ), x = $e(
    () => Zr.toArray(e).filter(Kt),
    [e]
  );
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- arrow-key navigation is delegated from child links to this nav's keydown handler
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": s,
        className: [
          jt.root,
          n === "icon" ? jt.iconOnly : null,
          n === "stacked" ? jt.stacked : null,
          l
        ].filter(Boolean).join(" "),
        onKeyDown: y,
        ...d,
        children: /* @__PURE__ */ o("div", { className: jt.list, role: "presentation", children: /* @__PURE__ */ o(ko.Provider, { value: $, children: x.map((k, w) => /* @__PURE__ */ o(
          hs,
          {
            itemKey: String(w),
            ancestors: [],
            props: k.props
          },
          `top-${w}`
        )) }) })
      }
    )
  );
}
const G2 = "_root_5numg_1", V2 = "_trigger_5numg_7", Y2 = "_defaultTrigger_5numg_40", X2 = "_avatar_5numg_46", Z2 = "_menu_5numg_58", J2 = "_item_5numg_74", Q2 = "_disabled_5numg_88", ew = "_active_5numg_97", tw = "_icon_5numg_107", nw = "_text_5numg_114", Tn = {
  root: G2,
  trigger: V2,
  defaultTrigger: Y2,
  avatar: X2,
  menu: Z2,
  item: J2,
  disabled: Q2,
  active: ew,
  icon: tw,
  text: nw
};
function nO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: a
}) {
  const i = ct(), c = `${i}-menu`, s = ce(null), l = ce(null), [d, f] = W(!1), [p, g] = W(-1), _ = t, b = e.map((x, k) => x.disabled ? -1 : k).filter((x) => x >= 0), h = q(
    (x) => {
      if (x.disabled) return;
      const k = {
        text: x.text,
        path: x.path
      };
      n?.(k), f(!1), l.current?.focus();
    },
    [n]
  ), v = q(() => {
    g(b[0] ?? -1), f(!0);
  }, [b]), m = q(() => {
    f(!1), g(-1), l.current?.focus();
  }, []);
  Se(() => {
    if (!d) return;
    const x = (k) => {
      s.current && !s.current.contains(k.target) && (f(!1), g(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [d]), Se(() => {
    if (!d) return;
    const x = (k) => {
      k.key === "Escape" && (k.preventDefault(), m());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [d, m]);
  const u = (x) => {
    if (b.length === 0) return;
    const k = b.indexOf(p), w = k === -1 ? 0 : (k + x + b.length) % b.length, S = b[w];
    S != null && g(S);
  }, y = (x) => {
    if (!d) {
      (x.key === "ArrowDown" || x.key === "Enter" || x.key === " ") && (x.preventDefault(), v());
      return;
    }
    switch (x.key) {
      case "Escape":
        x.preventDefault(), m();
        break;
      case "ArrowDown":
        x.preventDefault(), u(1);
        break;
      case "ArrowUp":
        x.preventDefault(), u(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && g(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && g(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), p >= 0) {
          const k = e[p];
          k && !k.disabled && h(k);
        }
        break;
      case "Tab":
        f(!1), g(-1);
        break;
    }
  }, $ = (x) => {
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), u(1);
        break;
      case "ArrowUp":
        x.preventDefault(), u(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && g(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && g(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), p >= 0) {
          const k = e[p];
          k && !k.disabled && h(k);
        }
        break;
      case "Escape":
        x.preventDefault(), m();
        break;
      case "Tab":
        f(!1), g(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [Tn.root, a].filter(Boolean).join(" "),
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
            className: Tn.trigger,
            onClick: () => d ? m() : v(),
            onKeyDown: y,
            children: _ ?? /* @__PURE__ */ A("span", { className: Tn.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: Tn.avatar, "aria-hidden": "true", children: "●" }),
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
            "aria-activedescendant": p >= 0 ? `${i}-item-${p}` : void 0,
            className: Tn.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((x, k) => {
              const w = !!x.disabled, S = k === p;
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleMenuKeyDown on the menu container
                /* @__PURE__ */ A(
                  "div",
                  {
                    id: `${i}-item-${k}`,
                    role: "menuitem",
                    "aria-disabled": w || void 0,
                    tabIndex: w ? -1 : 0,
                    className: [
                      Tn.item,
                      S ? Tn.active : null,
                      w ? Tn.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => {
                      w || h(x);
                    },
                    onMouseEnter: () => {
                      w || g(k);
                    },
                    children: [
                      x.icon ? /* @__PURE__ */ o("span", { className: Tn.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: x.icon, size: "sm" }) }) : null,
                      /* @__PURE__ */ o("span", { className: Tn.text, children: x.text })
                    ]
                  },
                  `${x.text}-${k}`
                )
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const rw = "_root_1o8i4_1", ow = "_bottomRight_1o8i4_11", sw = "_bottomLeft_1o8i4_16", aw = "_topRight_1o8i4_21", lw = "_topLeft_1o8i4_26", iw = "_menu_1o8i4_50", cw = "_itemWrapper_1o8i4_93", dw = "_tooltip_1o8i4_99", uw = "_main_1o8i4_121", fw = "_mainIcon_1o8i4_149", pw = "_mainOpen_1o8i4_154", hw = "_item_1o8i4_93", _w = "_disabled_1o8i4_186", mw = "_itemIcon_1o8i4_193", Gt = {
  root: rw,
  bottomRight: ow,
  bottomLeft: sw,
  topRight: aw,
  topLeft: lw,
  menu: iw,
  itemWrapper: cw,
  tooltip: dw,
  main: uw,
  mainIcon: fw,
  mainOpen: pw,
  item: hw,
  disabled: _w,
  itemIcon: mw
};
function rO({
  items: e,
  position: t,
  icon: n = "add",
  onClick: r,
  ariaLabel: a = "Open menu",
  className: i
}) {
  const c = t ?? "bottom-right", l = `${ct()}-menu`, d = ce(null), f = ce(null), [p, g] = W(!1), _ = q(
    (m) => {
      if (m.disabled) return;
      const u = { text: m.text, value: m.value };
      r?.(u), g(!1), f.current?.focus();
    },
    [r]
  );
  Se(() => {
    if (!p) return;
    const m = (u) => {
      d.current && !d.current.contains(u.target) && g(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [p]), Se(() => {
    if (!p) return;
    const m = (u) => {
      u.key === "Escape" && (g(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [p]);
  const b = c === "bottom-right" ? Gt.bottomRight : c === "bottom-left" ? Gt.bottomLeft : c === "top-right" ? Gt.topRight : Gt.topLeft, h = (m) => {
    !p && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), g(!0)) : p && m.key === "Escape" && (m.preventDefault(), g(!1));
  }, v = (m) => {
    m.key === "Escape" && (m.preventDefault(), g(!1), f.current?.focus());
  };
  return /* @__PURE__ */ A(
    "div",
    {
      ref: d,
      className: [Gt.root, b, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        p ? /* @__PURE__ */ o(
          "div",
          {
            id: l,
            role: "menu",
            tabIndex: -1,
            "aria-label": a,
            className: Gt.menu,
            onKeyDown: v,
            children: e.map((m, u) => {
              const y = !!m.disabled;
              return /* @__PURE__ */ A("div", { className: Gt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: Gt.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": y || void 0,
                    title: m.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [Gt.item, y ? Gt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => _(m),
                    children: /* @__PURE__ */ o("span", { className: Gt.itemIcon, "aria-hidden": "true", children: m.icon ? /* @__PURE__ */ o(Ce, { icon: m.icon, size: 18 }) : /* @__PURE__ */ o("span", { children: "•" }) })
                  }
                )
              ] }, `${m.text}-${u}`);
            })
          }
        ) : null,
        /* @__PURE__ */ o(
          "button",
          {
            ref: f,
            type: "button",
            className: Gt.main,
            "aria-haspopup": "menu",
            "aria-expanded": p,
            "aria-controls": l,
            "aria-label": a,
            onClick: () => g((m) => !m),
            onKeyDown: h,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Gt.mainIcon, p ? Gt.mainOpen : null].filter(Boolean).join(" "),
                children: /* @__PURE__ */ o(Ce, { icon: n, size: 24 })
              }
            )
          }
        )
      ]
    }
  );
}
const gw = "_root_1eyur_1", yw = "_list_1eyur_5", bw = "_item_1eyur_15", xw = "_link_1eyur_22", vw = "_linkButton_1eyur_23", ww = "_current_1eyur_24", kw = "_disabled_1eyur_68", Nw = "_icon_1eyur_74", Sw = "_text_1eyur_81", $w = "_separator_1eyur_85", _t = {
  root: gw,
  list: yw,
  item: bw,
  link: xw,
  linkButton: vw,
  current: ww,
  disabled: kw,
  icon: Nw,
  text: Sw,
  separator: $w
};
function oO({
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
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: c.icon, size: "sm" }) }) : null,
                c.text
              ]
            }
          ) : c.path ? /* @__PURE__ */ A(
            "a",
            {
              href: c.path,
              className: _t.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : /* @__PURE__ */ A("span", { className: _t.current, "aria-current": "page", children: [
            c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: c.icon, size: "sm" }) }) : null,
            c.text
          ] }) : d ? /* @__PURE__ */ A(
            "span",
            {
              className: [_t.link, _t.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: c.icon, size: "sm" }) }) : null,
                /* @__PURE__ */ o("span", { className: _t.text, children: c.text })
              ]
            }
          ) : c.path ? /* @__PURE__ */ A(
            "a",
            {
              href: c.path,
              className: _t.link,
              onClick: (f) => {
                f.preventDefault(), i(c);
              },
              children: [
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: c.icon, size: "sm" }) }) : null,
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
                c.icon ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: c.icon, size: "sm" }) }) : null,
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
const Ow = "_link_tmy3k_1", Ew = {
  link: Ow
}, sO = at(function({ children: t, icon: n, visible: r = !0, className: a, ...i }, c) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ A(ot, { children: [
    n != null && /* @__PURE__ */ o(Ce, { icon: n, "aria-hidden": "true" }),
    t
  ] }), l = [Ew.link, a].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...p } = i;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: c,
        className: l,
        href: f,
        ...p,
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
}), Cw = "_root_dnkuu_1", Tw = "_list_dnkuu_5", Mw = "_item_dnkuu_15", Aw = "_connector_dnkuu_21", Dw = "_connectorCompleted_dnkuu_30", Iw = "_step_dnkuu_34", zw = "_active_dnkuu_69", Lw = "_completed_dnkuu_75", Pw = "_circle_dnkuu_79", Rw = "_check_dnkuu_109", jw = "_icon_dnkuu_114", Bw = "_number_dnkuu_119", Fw = "_text_dnkuu_124", Vt = {
  root: Cw,
  list: Tw,
  item: Mw,
  connector: Aw,
  connectorCompleted: Dw,
  step: Iw,
  active: zw,
  completed: Lw,
  circle: Pw,
  check: Rw,
  icon: jw,
  number: Bw,
  text: Fw
};
function aO({
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
  className: f
}) {
  const p = a ?? i ?? !1, g = t ?? n, _ = g !== void 0, [b, h] = W(() => Math.min(Math.max(0, g ?? r), Math.max(0, e.length - 1))), m = Math.min(
    Math.max(0, _ ? g : b),
    Math.max(0, e.length - 1)
  ), u = ce(null), y = q(
    (k) => {
      const w = Math.min(
        Math.max(0, k),
        Math.max(0, e.length - 1)
      );
      _ || h(w), (c ?? s ?? l)?.(w);
    },
    [_, c, s, l, e.length]
  ), $ = q(
    (k, w) => !!(w.disabled || p && k > m + 1),
    [p, m]
  ), x = (k) => {
    const w = Array.from(
      k.currentTarget.querySelectorAll("button[data-step]")
    ).filter((P) => P.getAttribute("aria-disabled") !== "true" && !P.disabled), S = document.activeElement, O = S ? w.indexOf(S) : -1;
    if (k.key === "ArrowRight" || k.key === "ArrowDown") {
      if (k.preventDefault(), w.length === 0) return;
      const P = O === -1 ? 0 : (O + 1) % w.length, D = w[P];
      D && D.focus();
    } else if (k.key === "ArrowLeft" || k.key === "ArrowUp") {
      if (k.preventDefault(), w.length === 0) return;
      const P = O === -1 ? w.length - 1 : (O - 1 + w.length) % w.length, D = w[P];
      D && D.focus();
    } else k.key === "Home" ? (k.preventDefault(), w[0]?.focus()) : k.key === "End" && (k.preventDefault(), w[w.length - 1]?.focus());
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- Home/End and arrow keys are delegated to the step buttons inside this nav
    /* @__PURE__ */ o(
      "nav",
      {
        "aria-label": d,
        className: [Vt.root, f].filter(Boolean).join(" "),
        onKeyDown: x,
        children: /* @__PURE__ */ o("ol", { ref: u, className: Vt.list, children: e.map((k, w) => {
          const S = w === m, O = w < m, P = $(w, k);
          return /* @__PURE__ */ A("li", { className: Vt.item, children: [
            w > 0 ? /* @__PURE__ */ o(
              "span",
              {
                className: [
                  Vt.connector,
                  O ? Vt.connectorCompleted : null
                ].filter(Boolean).join(" "),
                "aria-hidden": "true"
              }
            ) : null,
            /* @__PURE__ */ A(
              "button",
              {
                type: "button",
                "data-step": w,
                "aria-current": S ? "step" : void 0,
                "aria-disabled": P ? "true" : void 0,
                disabled: P,
                tabIndex: P ? -1 : 0,
                className: [
                  Vt.step,
                  S ? Vt.active : null,
                  O ? Vt.completed : null,
                  P ? Vt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => {
                  P || y(w);
                },
                children: [
                  /* @__PURE__ */ o("span", { className: Vt.circle, "aria-hidden": "true", children: O ? /* @__PURE__ */ o("span", { className: Vt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Ce, { icon: "check", size: "sm" }) }) : k.icon ? /* @__PURE__ */ o("span", { className: Vt.icon, children: /* @__PURE__ */ o(Ce, { icon: k.icon, size: 14 }) }) : /* @__PURE__ */ o("span", { className: Vt.number, children: w + 1 }) }),
                  /* @__PURE__ */ o("span", { className: Vt.text, children: k.text })
                ]
              }
            )
          ] }, `${k.text}-${w}`);
        }) })
      }
    )
  );
}
const Hw = "_root_12hod_1", Uw = "_horizontal_12hod_13", qw = "_vertical_12hod_17", Ww = "_pane_12hod_21", Kw = "_handle_12hod_31", Gw = "_handleHorizontal_12hod_51", Vw = "_handleVertical_12hod_57", Yw = "_handleGrip_12hod_63", Xw = "_handleCollapseHint_12hod_75", Zw = "_collapseBtn_12hod_79", Jw = "_collapseBtnCollapsed_12hod_109", hn = {
  root: Hw,
  horizontal: Uw,
  vertical: qw,
  pane: Ww,
  handle: Kw,
  handleHorizontal: Gw,
  handleVertical: Vw,
  handleGrip: Yw,
  handleCollapseHint: Xw,
  collapseBtn: Zw,
  collapseBtnCollapsed: Jw
};
function qr(e, t) {
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
function Rn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function lO({
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
  const d = e ?? t ?? "horizontal", f = d === "horizontal", p = ce(null), g = q(() => {
    const T = n.length;
    if (T === 0) return [];
    const M = n.map((z) => z.size ? qr(z.size, 100 / T) : 100 / T), L = M.reduce((z, F) => z + F, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? M.map((z) => z / L * 100) : M;
  }, [n]), [_, b] = W(() => g()), [h, v] = W(
    () => n.map((T) => !!T.collapsed)
  ), m = ce(_), [u, y] = W(n);
  n !== u && (y(n), v(n.map((T) => !!T.collapsed)));
  const $ = q(
    () => n.map((T) => qr(T.min, 0)),
    [n]
  ), x = q(
    () => n.map((T) => qr(T.max, 100)),
    [n]
  ), k = q(
    (T, M) => {
      const L = { paneIndex: T, newSize: M, cancel: !1 };
      return (r ?? a)?.(L), !L.cancel;
    },
    [r, a]
  ), w = q(
    (T, M) => {
      const L = { paneIndex: T, collapse: M, cancel: !1 };
      return (i ?? c)?.(L), !L.cancel;
    },
    [i, c]
  ), S = q(
    (T) => {
      const M = !h[T];
      w(T, M) && (M ? (m.current = [..._], v((L) => {
        const z = [...L];
        return z[T] !== void 0 && (z[T] = !0), z;
      }), b((L) => {
        const z = [...L], F = z[T] ?? 0, V = T < z.length - 1 ? T + 1 : T - 1;
        if (V >= 0 && V < z.length) {
          const ne = z[V] ?? 0;
          z[V] = ne + F, z[T] = 0;
        } else
          z[T] = 0;
        return z;
      })) : (v((L) => {
        const z = [...L];
        return z[T] !== void 0 && (z[T] = !1), z;
      }), b(() => {
        const L = [...m.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [h, _, n, w]
  ), O = ce(
    null
  ), P = q(
    (T, M, L) => {
      const z = p.current;
      if (!z) return null;
      const F = z.getBoundingClientRect();
      let V;
      if (f) {
        if (F.width === 0) return null;
        V = (M - F.left) / F.width * 100;
      } else {
        if (F.height === 0) return null;
        V = (L - F.top) / F.height * 100;
      }
      let ne = 0;
      for (let B = 0; B < T; B++) {
        const H = _[B];
        H !== void 0 && (ne += H);
      }
      return V - ne;
    },
    [f, _]
  ), D = (T, M) => {
    M.preventDefault();
    const L = M.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(M.pointerId), O.current = { handleIndex: T, pointerId: M.pointerId };
  }, I = (T) => {
    if (!O.current || O.current.pointerId !== T.pointerId)
      return;
    T.preventDefault();
    const M = O.current.handleIndex, L = P(M, T.clientX, T.clientY);
    if (L == null) return;
    const z = $(), F = x(), V = z[M] ?? 0, ne = F[M] ?? 100, re = M + 1, B = z[re] ?? 0, H = F[re] ?? 100, ie = _[M] ?? 0, Y = _[re] ?? 0, G = ie + Y;
    if (G <= 0) return;
    let X = Rn(L, V, ne), _e = G - X;
    if (_e < B) {
      if (_e = B, X = G - _e, X < V || X > ne) return;
    } else if (_e > H && (_e = H, X = G - _e, X < V || X > ne))
      return;
    X = Rn(X, V, ne), _e = G - X, k(M, X) && b((te) => {
      const ge = [...te];
      return ge[M] = X, ge[re] = _e, ge;
    });
  }, C = (T) => {
    !O.current || O.current.pointerId !== T.pointerId || (O.current = null);
  }, N = (T, M) => {
    const L = $(), z = x(), F = T, V = T + 1, ne = _[F] ?? 0, re = _[V] ?? 0, B = ne + re;
    let H = 0;
    const ie = !!n[F]?.collapsible, Y = !!n[V]?.collapsible;
    if (f ? M.key === "ArrowLeft" ? H = -5 : M.key === "ArrowRight" && (H = 5) : M.key === "ArrowUp" ? H = -5 : M.key === "ArrowDown" && (H = 5), M.key === "Home") {
      M.preventDefault();
      let G = L[F] ?? 0, X = B - G;
      if (X = Rn(
        X,
        L[V] ?? 0,
        z[V] ?? 100
      ), G = B - X, G = Rn(G, L[F] ?? 0, z[F] ?? 100), !k(F, G)) return;
      b((_e) => {
        const te = [..._e];
        return te[F] = G, te[V] = X, te;
      });
      return;
    }
    if (M.key === "End") {
      M.preventDefault();
      let G = z[F] ?? 100;
      G = Math.min(G, B - (L[V] ?? 0));
      let X = B - G;
      if (X = Rn(
        X,
        L[V] ?? 0,
        z[V] ?? 100
      ), G = B - X, G = Rn(G, L[F] ?? 0, z[F] ?? 100), !k(F, G)) return;
      b((_e) => {
        const te = [..._e];
        return te[F] = G, te[V] = X, te;
      });
      return;
    }
    if ((M.key === "Enter" || M.key === " ") && (ie || Y)) {
      M.preventDefault(), S(ie ? F : V);
      return;
    }
    if (H !== 0) {
      M.preventDefault();
      let G = ne + H, X = B - G;
      const _e = L[F] ?? 0, te = z[F] ?? 100, ge = L[V] ?? 0, Z = z[V] ?? 100;
      if (G = Rn(G, _e, te), X = B - G, (X < ge || X > Z) && (X = Rn(X, ge, Z), G = B - X, G = Rn(G, _e, te), X = B - G), !k(F, G)) return;
      b((Oe) => {
        const ae = [...Oe];
        return ae[F] = G, ae[V] = X, ae;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: p,
      className: [
        hn.root,
        f ? hn.horizontal : hn.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((T, M) => {
        const L = !!h[M], z = L ? 0 : _[M] ?? 100 / n.length, F = L ? { display: "none" } : f ? {
          flexBasis: `${z}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${z}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, V = qr(T.min, 0), ne = qr(T.max, 100), re = M < n.length - 1, B = !!n[M + 1]?.collapsible;
        return /* @__PURE__ */ A("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ A(
            "div",
            {
              role: "group",
              "aria-label": T.label ?? `Pane ${M + 1}`,
              className: hn.pane,
              style: F,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : T.children,
                T.collapsible && !L ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: hn.collapseBtn,
                    "aria-label": `Collapse pane ${M + 1}`,
                    "aria-expanded": !L,
                    onClick: () => S(M),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                T.collapsible && L ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: hn.collapseBtn,
                    "aria-label": `Expand pane ${M + 1}`,
                    "aria-expanded": !L,
                    onClick: () => S(M),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && T.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: hn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${M + 1}`,
                "aria-expanded": "false",
                onClick: () => S(M),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          re ? (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- focusable separator with arrow-key resize (handleSeparatorKeyDown); pointer drag is the mouse equivalent
            /* @__PURE__ */ A(
              "div",
              {
                role: "separator",
                "aria-orientation": d,
                "aria-valuemin": V,
                "aria-valuemax": ne,
                "aria-valuenow": Math.round(z),
                "aria-label": `Resize handle ${M + 1}`,
                tabIndex: L || h[M + 1] ? -1 : 0,
                className: [
                  hn.handle,
                  f ? hn.handleHorizontal : hn.handleVertical
                ].filter(Boolean).join(" "),
                onPointerDown: (H) => D(M, H),
                onPointerMove: I,
                onPointerUp: C,
                onKeyDown: (H) => N(M, H),
                children: [
                  /* @__PURE__ */ o("span", { className: hn.handleGrip, "aria-hidden": "true" }),
                  (T.collapsible || B) && /* @__PURE__ */ o(
                    "span",
                    {
                      className: hn.handleCollapseHint,
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            )
          ) : null
        ] }, M);
      })
    }
  );
}
const Qw = "_root_1w3wd_1", ek = "_list_1w3wd_5", tk = "_vertical_1w3wd_14", nk = "_horizontal_1w3wd_20", rk = "_item_1w3wd_28", ok = "_link_1w3wd_32", sk = "_active_1w3wd_57", xr = {
  root: Qw,
  list: ek,
  vertical: tk,
  horizontal: nk,
  item: rk,
  link: ok,
  active: sk
};
function iO({
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
  const d = t ?? n, f = r ?? a ?? "vertical", [p, g] = W(
    () => e[0]?.selector ?? null
  ), _ = ce(p);
  Se(() => {
    _.current = p;
  });
  const b = q(
    (h, v) => {
      if (g(h.selector), (i ?? c)?.({ text: h.text, selector: h.selector }), v) {
        try {
          v.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          v.scrollIntoView();
        }
        const u = v;
        u.getAttribute("tabindex") == null && u.tabIndex === -1 || u.tabIndex < 0 ? (u.getAttribute("tabindex"), u.setAttribute("tabindex", "-1"), u.focus({ preventScroll: !0 })) : u.focus({ preventScroll: !0 });
      }
    },
    [i, c]
  );
  return Se(() => {
    if (e.length === 0) return;
    const v = (() => {
      if (d) {
        const x = document.querySelector(d);
        if (x) return x;
      }
      return window;
    })();
    let m = null;
    const u = /* @__PURE__ */ new Map(), y = () => {
      let x = null, k = null;
      for (const S of e) {
        const O = document.querySelector(S.selector);
        if (!O) continue;
        u.set(S.selector, O);
        const P = O.getBoundingClientRect();
        let D = P.top;
        if (v !== window) {
          const I = v.getBoundingClientRect();
          D = P.top - I.top;
        }
        D <= 80 ? (!k || D > k.el.getBoundingClientRect().top - (v !== window ? v.getBoundingClientRect().top : 0)) && (k = { sel: S.selector, el: O }) : (!x || D < x.top) && (x = { sel: S.selector, top: D });
      }
      const w = k?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      w && w !== _.current && g(w);
    }, $ = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const x = v === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: v,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      m = new IntersectionObserver((k) => {
        const w = k.filter((S) => S.isIntersecting).sort((S, O) => S.boundingClientRect.top - O.boundingClientRect.top);
        if (w[0]) {
          const S = w[0].target;
          for (const O of e) {
            if (document.querySelector(O.selector) === S) {
              g(O.selector);
              break;
            }
            if (O.selector.startsWith("#") && S.id === O.selector.slice(1)) {
              g(O.selector);
              break;
            }
          }
        } else
          y();
      }, x);
      for (const k of e) {
        const w = document.querySelector(k.selector);
        w && (m.observe(w), u.set(k.selector, w));
      }
    }
    return v === window ? (window.addEventListener("scroll", $, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", $), m?.disconnect();
    }) : (v.addEventListener("scroll", $, {
      passive: !0
    }), y(), () => {
      v.removeEventListener("scroll", $), m?.disconnect();
    });
  }, [e, d]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [xr.root, xr[f], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: xr.list, children: e.map((h) => {
        const v = h.selector === p;
        return /* @__PURE__ */ o("li", { className: xr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: h.selector.startsWith("#") || h.selector.startsWith(".") ? h.selector : `#${h.selector}`,
            className: [xr.link, v ? xr.active : null].filter(Boolean).join(" "),
            "aria-current": v ? "location" : void 0,
            onClick: (m) => {
              m.preventDefault();
              const u = document.querySelector(h.selector);
              b(h, u);
            },
            children: h.text
          }
        ) }, `${h.text}-${h.selector}`);
      }) })
    }
  );
}
const ak = "_root_1bfit_1", lk = "_viewport_1bfit_17", ik = "_slide_1bfit_24", ck = "_active_1bfit_33", dk = "_arrow_1bfit_37", uk = "_prev_1bfit_71", fk = "_next_1bfit_75", pk = "_pauseBtn_1bfit_79", hk = "_indicators_1bfit_110", _k = "_indicator_1bfit_110", mk = "_indicatorActive_1bfit_145", _n = {
  root: ak,
  viewport: lk,
  slide: ik,
  active: ck,
  arrow: dk,
  prev: uk,
  next: fk,
  pauseBtn: pk,
  indicators: hk,
  indicator: _k,
  indicatorActive: mk
};
function cO({
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
  showArrows: f,
  ShowArrows: p,
  showIndicators: g,
  ShowIndicators: _,
  onChange: b,
  Change: h,
  ariaLabel: v = "Carousel",
  className: m
}) {
  const u = t ?? n, y = u !== void 0, [$, x] = W(() => Math.min(Math.max(0, u ?? r), Math.max(0, e.length - 1))), k = y ? u : $, w = e.length === 0 ? 0 : Math.min(Math.max(0, k), e.length - 1), S = a ?? i ?? !1, O = c ?? s ?? 3e3, P = l ?? d ?? !0, D = f ?? p ?? !0, I = g ?? _ ?? !0, [C, N] = W(!1), [T, M] = W(!1), L = C || T, z = ce(null), F = ct(), V = q(
    (te) => {
      const ge = e.length === 0 ? 0 : (te % e.length + e.length) % e.length;
      y || x(ge), (b ?? h)?.(ge);
    },
    [y, b, h, e.length]
  ), ne = q(() => {
    V(w - 1);
  }, [V, w]), re = q(() => {
    V(w + 1);
  }, [V, w]), B = q(
    (te) => {
      V(te);
    },
    [V]
  ), H = Eo("(prefers-reduced-motion: reduce)");
  Se(() => {
    if (!S || L || H || e.length <= 1) return;
    const te = setInterval(() => {
      V(w + 1);
    }, O);
    return () => clearInterval(te);
  }, [
    S,
    L,
    H,
    O,
    w,
    V,
    e.length
  ]);
  const ie = (te) => {
    e.length !== 0 && (te.key === "ArrowLeft" ? (te.preventDefault(), ne()) : te.key === "ArrowRight" ? (te.preventDefault(), re()) : te.key === "Home" ? (te.preventDefault(), B(0)) : te.key === "End" && (te.preventDefault(), B(e.length - 1)));
  }, Y = () => {
    P && S && M(!0);
  }, G = () => {
    P && S && M(!1);
  }, X = () => {
    P && S && M(!0);
  }, _e = () => {
    P && S && M(!1);
  };
  return e.length === 0 ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- hover pause/play plus arrow-key handlers; this region is the carousel's keyboard control surface
    /* @__PURE__ */ A(
      "div",
      {
        ref: z,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": v,
        tabIndex: 0,
        className: [_n.root, m].filter(Boolean).join(" "),
        onKeyDown: ie,
        onMouseEnter: Y,
        onMouseLeave: G,
        onFocusCapture: X,
        onBlurCapture: _e,
        children: [
          /* @__PURE__ */ o("div", { id: F, className: _n.viewport, children: e.map((te, ge) => {
            const Z = ge === w;
            return /* @__PURE__ */ o(
              "div",
              {
                role: "group",
                "aria-roledescription": "slide",
                "aria-label": `Slide ${ge + 1} of ${e.length}`,
                "aria-hidden": Z ? void 0 : !0,
                hidden: !Z,
                className: [_n.slide, Z ? _n.active : null].filter(Boolean).join(" "),
                children: te
              },
              ge
            );
          }) }),
          D && e.length > 1 ? /* @__PURE__ */ A(ot, { children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [_n.arrow, _n.prev].filter(Boolean).join(" "),
                "aria-label": "Previous slide",
                "aria-controls": F,
                onClick: ne,
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
                onClick: re,
                children: "›"
              }
            )
          ] }) : null,
          S ? /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: _n.pauseBtn,
              "aria-label": C ? "Resume" : "Pause",
              "aria-pressed": C,
              onClick: () => N((te) => !te),
              children: C ? "▶" : "⏸"
            }
          ) : null,
          I && e.length > 1 ? /* @__PURE__ */ o(
            "div",
            {
              className: _n.indicators,
              role: "group",
              "aria-label": "Slide indicators",
              children: e.map((te, ge) => {
                const Z = ge === w;
                return /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: [
                      _n.indicator,
                      Z ? _n.indicatorActive : null
                    ].filter(Boolean).join(" "),
                    "aria-label": `Go to slide ${ge + 1}`,
                    "aria-current": Z ? "true" : void 0,
                    "aria-controls": F,
                    onClick: () => B(ge)
                  },
                  ge
                );
              })
            }
          ) : null
        ]
      }
    )
  );
}
const gk = "_root_1aa5u_1", yk = "_group_1aa5u_20", bk = "_itemWrapper_1aa5u_30", xk = "_treeitem_1aa5u_34", vk = "_disabled_1aa5u_50", wk = "_selected_1aa5u_60", kk = "_caret_1aa5u_66", Nk = "_caretIcon_1aa5u_113", Sk = "_caretOpen_1aa5u_120", $k = "_caretPlaceholder_1aa5u_124", Ok = "_label_1aa5u_130", Ek = "_loading_1aa5u_137", Ck = "_loadingRow_1aa5u_143", Tk = "_empty_1aa5u_149", Mk = "_checkbox_1aa5u_155", Lt = {
  root: gk,
  group: yk,
  itemWrapper: bk,
  treeitem: xk,
  disabled: vk,
  selected: wk,
  caret: kk,
  caretIcon: Nk,
  caretOpen: Sk,
  caretPlaceholder: $k,
  label: Ok,
  loading: Ek,
  loadingRow: Ck,
  empty: Tk,
  checkbox: Mk
};
function Ak({
  indeterminate: e,
  ...t
}) {
  const n = ce(null);
  return Se(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function dO({
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
  selectedItem: f,
  SelectedItem: p,
  selectedItems: g,
  SelectedItems: _,
  defaultSelectedItem: b,
  defaultSelectedItems: h,
  onChange: v,
  Change: m,
  onExpand: u,
  Expand: y,
  onCollapse: $,
  Collapse: x,
  loadChildData: k,
  LoadChildData: w,
  template: S,
  Template: O,
  itemTemplate: P,
  ItemTemplate: D,
  ariaLabel: I,
  AriaLabel: C,
  allowCheckBoxes: N = !1,
  checkedKeys: T,
  defaultCheckedKeys: M,
  onCheckedChange: L,
  allowCheckChildren: z = !0,
  className: F
}) {
  const V = $e(() => e ?? t ?? [], [e, t]), ne = n ?? r, re = a ?? i ?? "text", B = c ?? s ?? "id", H = l ?? d ?? "single", ie = I ?? C ?? "Tree", Y = k ?? w, G = S ?? O ?? P ?? D, X = q(
    (ee) => {
      const de = ee[B];
      return de != null ? String(de) : String(ee.id ?? "");
    },
    [B]
  ), _e = q(
    (ee) => {
      const de = ee[re];
      if (de != null) return String(de);
      const me = ee.text;
      return me != null ? String(me) : "";
    },
    [re]
  ), te = q(
    (ee) => {
      if (ne) {
        const me = ne(ee);
        if (me !== void 0) return me;
      }
      const de = ee.children;
      if (Array.isArray(de)) return de;
    },
    [ne]
  ), ge = q(
    (ee) => {
      const de = /* @__PURE__ */ new Set(), me = (Ne) => {
        for (const we of Ne) {
          const Ae = X(we);
          we.expanded && de.add(Ae);
          const Ye = te(we);
          Ye && Ye.length > 0 && me(Ye);
        }
      };
      return me(ee), de;
    },
    [X, te]
  ), [Z, Oe] = W(
    () => ge(V)
  ), [ae, De] = W(
    () => /* @__PURE__ */ new Map()
  ), [be, We] = W(() => /* @__PURE__ */ new Set()), Je = f ?? p, Ge = g ?? _, gt = H === "multiple" ? Ge !== void 0 : Je !== void 0, oe = q(() => {
    if (H === "multiple") {
      if (h && h.length > 0)
        return new Set(h.map((me) => X(me)));
      const ee = /* @__PURE__ */ new Set(), de = (me) => {
        for (const Ne of me) {
          Ne.selected && ee.add(X(Ne));
          const we = te(Ne);
          we && de(we);
        }
      };
      return de(V), ee;
    } else {
      if (b) return /* @__PURE__ */ new Set([X(b)]);
      let ee = null;
      const de = (me) => {
        for (const Ne of me) {
          if (Ne.selected)
            return ee = X(Ne), !0;
          const we = te(Ne);
          if (we && de(we)) return !0;
        }
        return !1;
      };
      return de(V), ee ? /* @__PURE__ */ new Set([ee]) : /* @__PURE__ */ new Set();
    }
  }, [
    H,
    b,
    h,
    X,
    te,
    V
  ]), [Te, lt] = W(
    () => oe()
  ), ze = $e(() => {
    if (H === "multiple") {
      if (Ge !== void 0) {
        const ee = Ge;
        return ee ? new Set(ee.map((de) => X(de))) : /* @__PURE__ */ new Set();
      }
      return Te;
    } else {
      if (Je !== void 0) {
        const ee = Je;
        return ee ? /* @__PURE__ */ new Set([X(ee)]) : /* @__PURE__ */ new Set();
      }
      return Te;
    }
  }, [
    H,
    Ge,
    Je,
    Te,
    X
  ]), st = q(
    (ee) => {
      let de;
      const me = (Ne) => {
        for (const we of Ne) {
          if (X(we) === ee)
            return de = we, !0;
          const Ye = ae.get(X(we)) ?? te(we);
          if (Ye && me(Ye)) return !0;
        }
        return !1;
      };
      if (me(V), !de) {
        for (const Ne of ae.values())
          if (me(Ne)) break;
      }
      return de;
    },
    [V, ae, X, te]
  ), Xe = q(() => {
    const ee = /* @__PURE__ */ new Map(), de = (me) => {
      for (const Ne of me) {
        const we = X(Ne);
        ee.set(we, Ne);
        const Ye = ae.get(we) ?? te(Ne);
        Ye && de(Ye);
      }
    };
    return de(V), ee;
  }, [V, ae, X, te]), Ct = q(
    (ee) => {
      const de = X(ee);
      if (!ee.disabled)
        if (H === "multiple") {
          const Ne = new Set(ze);
          Ne.has(de) ? Ne.delete(de) : Ne.add(de), gt || lt(Ne);
          const we = v ?? m;
          if (we) {
            const Ae = Xe(), Ye = [];
            for (const Fe of Ne) {
              const dt = Ae.get(Fe) ?? st(Fe);
              dt && Ye.push(dt);
            }
            we({ item: ee, selectedItems: Ye });
          }
        } else if (!ze.has(de) || ze.size !== 1 || !ze.has(de)) {
          gt || lt(/* @__PURE__ */ new Set([de]));
          const we = v ?? m;
          we && we({ item: ee, selectedItem: ee });
        } else {
          const we = v ?? m;
          we && we({ item: ee, selectedItem: ee });
        }
    },
    [
      X,
      H,
      ze,
      gt,
      v,
      m,
      Xe,
      st
    ]
  ), yt = q(
    async (ee) => {
      const de = X(ee);
      if (!!ee.disabled) return;
      const Ne = Z.has(de), we = u ?? y, Ae = $ ?? x, Ye = te(ee), dt = ae.get(de) ?? Ye, je = !(dt !== void 0 && dt.length > 0) && Y != null;
      if (Ne) {
        Oe((tt) => {
          const ut = new Set(tt);
          return ut.delete(de), ut;
        }), Ae?.({ item: ee });
        return;
      }
      if (je) {
        if (be.has(de)) return;
        We((tt) => {
          const ut = new Set(tt);
          return ut.add(de), ut;
        });
        try {
          const ut = await Y(ee);
          De((Qt) => {
            const At = new Map(Qt);
            return At.set(de, ut), At;
          }), Oe((Qt) => {
            const At = new Set(Qt);
            return At.add(de), At;
          }), we?.({ item: ee });
        } catch {
        } finally {
          We((tt) => {
            const ut = new Set(tt);
            return ut.delete(de), ut;
          });
        }
        return;
      }
      Oe((tt) => {
        const ut = new Set(tt);
        return ut.add(de), ut;
      }), we?.({ item: ee });
    },
    [
      X,
      Z,
      te,
      ae,
      Y,
      be,
      u,
      y,
      $,
      x
    ]
  ), it = $e(() => {
    const ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Set(), Ne = (we, Ae) => {
      for (const Ye of we) {
        const Fe = X(Ye);
        ee.has(Fe) || ee.set(Fe, []), de.set(Fe, Ae), Ye.disabled && me.add(Fe);
        const xt = ae.get(Fe) ?? te(Ye);
        xt && xt.length > 0 && (ee.set(
          Fe,
          xt.map((je) => X(je))
        ), Ne(xt, Fe));
      }
    };
    return Ne(V, null), { childrenOf: ee, parentOf: de, disabledKeys: me };
  }, [V, ae, X, te]), ft = q(
    (ee) => {
      const de = [], me = [...it.childrenOf.get(ee) ?? []];
      for (; me.length > 0; ) {
        const Ne = me.pop();
        de.push(Ne), me.push(...it.childrenOf.get(Ne) ?? []);
      }
      return de;
    },
    [it]
  ), [Ve, Tt] = W(
    () => new Set(M ?? [])
  ), le = $e(
    () => T !== void 0 ? new Set(T) : Ve,
    [T, Ve]
  ), Le = q(
    (ee) => {
      const de = it.disabledKeys;
      return ft(ee).filter((me) => !de.has(me));
    },
    [ft, it]
  ), wt = q(
    (ee) => {
      if (le.has(ee)) return !0;
      if (!N || !z) return !1;
      const de = Le(ee);
      return de.length > 0 && de.every((me) => le.has(me));
    },
    [le, N, z, Le]
  ), Mt = q(
    (ee) => {
      if (!N || !z || le.has(ee))
        return !1;
      const de = Le(ee);
      if (de.length === 0) return !1;
      const me = de.filter((Ne) => le.has(Ne)).length;
      return me > 0 && me < de.length;
    },
    [le, N, z, Le]
  ), bt = q(
    (ee) => {
      if (!N || ee.disabled) return;
      const de = X(ee), me = new Set(le);
      if (me.has(de) || wt(de)) {
        if (me.delete(de), z)
          for (const Ne of Le(de)) me.delete(Ne);
      } else if (me.add(de), z)
        for (const Ne of Le(de)) me.add(Ne);
      T === void 0 && Tt(me), L?.([...me]);
    },
    [
      N,
      z,
      T,
      le,
      Le,
      X,
      wt,
      L
    ]
  ), R = $e(() => {
    const ee = [], de = (me, Ne, we) => {
      me.forEach((Ae, Ye) => {
        const Fe = X(Ae), dt = _e(Ae), xt = ae.get(Fe) ?? te(Ae);
        let je;
        ae.has(Fe) ? je = ae.get(Fe).length > 0 : xt !== void 0 ? je = xt.length > 0 : Y ? je = !0 : je = !1;
        const tt = Z.has(Fe), ut = !!Ae.disabled, Qt = me.length, At = Ye + 1;
        if (ee.push({
          item: Ae,
          key: Fe,
          text: dt,
          level: Ne,
          posInSet: At,
          setSize: Qt,
          hasChildren: je,
          expanded: tt,
          parentKey: we,
          disabled: ut
        }), je && tt) {
          const un = ae.get(Fe) ?? xt;
          un && un.length > 0 && de(un, Ne + 1, Fe);
        }
      });
    };
    return de(V, 1, null), ee;
  }, [
    V,
    X,
    _e,
    te,
    ae,
    Z,
    Y
  ]), [Q, ye] = W(
    () => R[0]?.key ?? null
  ), ke = ce(""), pe = ce(null), U = ce(null), [he, Re] = W({
    key: Q,
    nodes: R
  });
  if (he.key !== Q || he.nodes !== R) {
    if (Re({ key: Q, nodes: R }), !Q && R.length > 0) {
      const ee = R[0];
      ee && ye(ee.key);
    } else if (Q && !R.some((ee) => ee.key === Q)) {
      const ee = R[0];
      ye(ee ? ee.key : null);
    }
  }
  Se(() => {
    if (Q) {
      const ee = U.current?.querySelector(
        `[data-key="${CSS.escape(Q)}"]`
      );
      let de = null;
      ee || (de = U.current?.querySelector(
        `[data-key="${Q}"]`
      ) ?? null);
      const me = ee ?? de;
      me && document.activeElement !== me && U.current?.contains(document.activeElement) && me.focus();
    }
  }, [Q]);
  const Ie = q((ee) => {
    ye(ee), requestAnimationFrame(() => {
      const de = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(ee) : ee;
      let me = U.current?.querySelector(
        `[data-key="${de}"]`
      );
      me || (me = U.current?.querySelector(`[data-key="${ee}"]`) ?? null), me?.focus();
    });
  }, []), It = q(
    (ee) => R.find((me) => me.key === ee)?.parentKey ?? null,
    [R]
  ), et = q(
    (ee) => {
      if (R.length === 0) return;
      const de = Q ? R.findIndex((we) => we.key === Q) : -1, me = de >= 0 ? R[de] : void 0;
      let Ne = null;
      if (ee.key === "ArrowDown") {
        if (ee.preventDefault(), de === -1)
          Ne = R[0]?.key ?? null;
        else {
          const we = (de + 1) % R.length, Ae = R[we];
          Ae && (Ne = Ae.key);
        }
        Ne && Ie(Ne);
        return;
      }
      if (ee.key === "ArrowUp") {
        if (ee.preventDefault(), de === -1) {
          const we = R[R.length - 1];
          we && (Ne = we.key);
        } else {
          const we = (de - 1 + R.length) % R.length, Ae = R[we];
          Ae && (Ne = Ae.key);
        }
        Ne && Ie(Ne);
        return;
      }
      if (ee.key === "ArrowRight") {
        if (ee.preventDefault(), !me) return;
        if (me.hasChildren && !me.expanded)
          yt(me.item);
        else if (me.hasChildren && me.expanded) {
          const we = de + 1, Ae = R[we];
          Ae && Ae.parentKey === me.key && Ie(Ae.key);
        }
        return;
      }
      if (ee.key === "ArrowLeft") {
        if (ee.preventDefault(), !me) return;
        if (me.hasChildren && me.expanded)
          yt(me.item);
        else {
          const we = It(me.key);
          we && Ie(we);
        }
        return;
      }
      if (ee.key === "Home") {
        ee.preventDefault();
        const we = R[0];
        we && Ie(we.key);
        return;
      }
      if (ee.key === "End") {
        ee.preventDefault();
        const we = R[R.length - 1];
        we && Ie(we.key);
        return;
      }
      if (ee.key === "Enter" || ee.key === " ") {
        if (ee.key === " " && ee.target?.tagName === "INPUT" || (ee.preventDefault(), !me)) return;
        if (ee.key === " " && N) {
          const we = st(me.key);
          we && bt(we);
          return;
        }
        Ct(me.item);
        return;
      }
      if (ee.key.length === 1 && /^[a-zA-Z0-9]$/.test(ee.key)) {
        ee.preventDefault();
        const we = (ke.current + ee.key).toLowerCase();
        ke.current = we, pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
          ke.current = "";
        }, 500);
        const Ae = de >= 0 ? de + 1 : 0, dt = [...R, ...R].slice(Ae, Ae + R.length).find((xt) => xt.text.toLowerCase().startsWith(we));
        dt && Ie(dt.key);
        return;
      }
    },
    [
      R,
      Q,
      Ie,
      yt,
      Ct,
      It,
      N,
      bt,
      st
    ]
  ), gn = q(() => {
    if (!Q && R.length > 0) {
      const ee = R[0];
      ee && ye(ee.key);
    }
  }, [Q, R]), Sn = (ee, de, me) => /* @__PURE__ */ o("ul", { role: "group", className: Lt.group, children: ee.map((Ne, we) => {
    const Ae = X(Ne), Ye = _e(Ne), Fe = ae.get(Ae) ?? te(Ne);
    let dt;
    ae.has(Ae) ? dt = ae.get(Ae).length > 0 : Fe !== void 0 ? dt = Fe.length > 0 : Y ? dt = !0 : dt = !1;
    const xt = Z.has(Ae), je = ze.has(Ae), tt = !!Ne.disabled, ut = be.has(Ae), Qt = Q === Ae, At = ee.length, un = we + 1, Jn = G ? G(Ne) : Ye, Qn = N ? {
      checked: wt(Ae),
      indeterminate: Mt(Ae)
    } : null;
    return /* @__PURE__ */ A("li", { role: "none", className: Lt.itemWrapper, children: [
      /* @__PURE__ */ A(
        "div",
        {
          role: "treeitem",
          "data-key": Ae,
          tabIndex: Qt ? 0 : -1,
          "aria-expanded": dt ? xt : void 0,
          "aria-selected": je,
          "aria-level": de,
          "aria-setsize": At,
          "aria-posinset": un,
          "aria-disabled": tt || void 0,
          "aria-busy": ut || void 0,
          className: [
            Lt.treeitem,
            je ? Lt.selected : null,
            tt ? Lt.disabled : null,
            Qt ? Lt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            Ie(Ae), tt || Ct(Ne);
          },
          onFocus: () => ye(Ae),
          children: [
            N ? /* @__PURE__ */ o(
              Ak,
              {
                className: Lt.checkbox,
                checked: Qn?.checked ?? !1,
                indeterminate: Qn?.indeterminate ?? !1,
                disabled: tt,
                "aria-label": `Select ${Ye}`,
                onClick: (Hn) => Hn.stopPropagation(),
                onChange: () => bt(Ne)
              }
            ) : null,
            dt ? /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Lt.caret,
                "aria-label": `${xt ? "Collapse" : "Expand"} ${Ye}`,
                "aria-expanded": xt,
                tabIndex: -1,
                disabled: tt,
                onClick: (Hn) => {
                  Hn.stopPropagation(), Ie(Ae), yt(Ne);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Lt.caretIcon,
                      xt ? Lt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(Ce, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ o(
              "span",
              {
                className: Lt.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ o("span", { className: Lt.label, children: Jn }),
            ut ? /* @__PURE__ */ o("span", { className: Lt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      dt && xt ? ut ? /* @__PURE__ */ o("div", { className: Lt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? Sn(Fe, de + 1) : ae.has(Ae) && ae.get(Ae).length > 0 ? Sn(
        ae.get(Ae),
        de + 1
      ) : (Fe && Fe.length === 0, null) : null
    ] }, Ae);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: U,
      role: "tree",
      "aria-label": ie,
      "aria-multiselectable": H === "multiple" || void 0,
      tabIndex: 0,
      className: [Lt.root, F].filter(Boolean).join(" "),
      onKeyDown: et,
      onFocus: gn,
      children: V.length === 0 ? /* @__PURE__ */ o("div", { className: Lt.empty, children: "No items" }) : Sn(V, 1)
    }
  );
}
const Dk = "_root_10fdq_1", Ik = "_panel_10fdq_8", zk = "_header_10fdq_19", Lk = "_listbox_10fdq_28", Pk = "_option_10fdq_42", Rk = "_disabled_10fdq_57", jk = "_active_10fdq_66", Bk = "_selected_10fdq_70", Fk = "_empty_10fdq_86", Hk = "_controls_10fdq_93", Uk = "_reorder_10fdq_102", qk = "_btn_10fdq_110", rt = {
  root: Dk,
  panel: Ik,
  header: zk,
  listbox: Lk,
  option: Pk,
  disabled: Rk,
  active: jk,
  selected: Bk,
  empty: Fk,
  controls: Hk,
  reorder: Uk,
  btn: qk
};
function Pt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function _o(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function uO({
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
  onSourceChange: f,
  SourceChange: p,
  onTargetChange: g,
  TargetChange: _,
  keyProperty: b,
  KeyProperty: h,
  onMove: v,
  Move: m,
  ariaLabel: u,
  AriaLabel: y,
  className: $
}) {
  const x = b ?? h ?? "id", k = u ?? y ?? "PickList", w = e ?? t ?? a ?? i ?? l ?? d ?? [], S = n ?? r ?? c ?? s ?? [], [O, P] = W(() => [
    ...w
  ]), [D, I] = W(() => [
    ...S
  ]), C = e ?? t ?? a ?? i ?? l ?? d, [N, T] = W(C);
  C !== N && (T(C), C !== void 0 && P([...C]));
  const M = n ?? r ?? c ?? s, [L, z] = W(M);
  M !== L && (z(M), M !== void 0 && I([...M]));
  const [F, V] = W(
    () => /* @__PURE__ */ new Set()
  ), [ne, re] = W(
    () => /* @__PURE__ */ new Set()
  ), [B, H] = W(() => {
    const R = w.findIndex((Q) => !Q.disabled);
    return R >= 0 ? R : 0;
  }), [ie, Y] = W(() => {
    const R = S.findIndex((Q) => !Q.disabled);
    return R >= 0 ? R : 0;
  }), G = $e(
    () => O.map((R, Q) => R.disabled ? -1 : Q).filter((R) => R >= 0),
    [O]
  ), X = $e(
    () => D.map((R, Q) => R.disabled ? -1 : Q).filter((R) => R >= 0),
    [D]
  ), _e = {
    active: B,
    len: O.length,
    idxs: G
  }, [te, ge] = W(_e);
  if (te.active !== _e.active || te.len !== _e.len || te.idxs !== _e.idxs) {
    if (ge(_e), B >= O.length) {
      const R = G[G.length - 1];
      H(R ?? 0);
    } else if (O.length > 0 && G.length > 0 && !G.includes(B)) {
      const R = G[0];
      R !== void 0 && H(R);
    }
  }
  const Z = {
    active: ie,
    len: D.length,
    idxs: X
  }, [Oe, ae] = W(Z);
  if (Oe.active !== Z.active || Oe.len !== Z.len || Oe.idxs !== Z.idxs) {
    if (ae(Z), ie >= D.length) {
      const R = X[X.length - 1];
      Y(R ?? 0);
    } else if (D.length > 0 && X.length > 0 && !X.includes(ie)) {
      const R = X[0];
      R !== void 0 && Y(R);
    }
  }
  const [De, be] = W({
    items: O,
    key: x
  });
  (De.items !== O || De.key !== x) && (be({ items: O, key: x }), V((R) => {
    const Q = /* @__PURE__ */ new Set();
    for (const ye of R)
      O.some(
        (pe) => Pt(pe, x) === ye && !pe.disabled
      ) && Q.add(ye);
    return Q.size === R.size ? R : Q;
  }));
  const [We, Je] = W({
    items: D,
    key: x
  });
  (We.items !== D || We.key !== x) && (Je({ items: D, key: x }), re((R) => {
    const Q = /* @__PURE__ */ new Set();
    for (const ye of R)
      D.some(
        (pe) => Pt(pe, x) === ye && !pe.disabled
      ) && Q.add(ye);
    return Q.size === R.size ? R : Q;
  }));
  const Ge = q(
    (R) => {
      (f ?? p)?.(R);
    },
    [f, p]
  ), Qe = q(
    (R) => {
      (g ?? _)?.(R);
    },
    [g, _]
  ), He = q(
    (R) => {
      (v ?? m)?.(R);
    },
    [v, m]
  ), gt = q(
    (R) => {
      const Q = O[R];
      if (!Q || Q.disabled) return;
      const ye = Pt(Q, x);
      V((ke) => {
        const pe = new Set(ke);
        return pe.has(ye) ? pe.delete(ye) : pe.add(ye), pe;
      }), H(R);
    },
    [O, x]
  ), oe = q(
    (R) => {
      const Q = D[R];
      if (!Q || Q.disabled) return;
      const ye = Pt(Q, x);
      re((ke) => {
        const pe = new Set(ke);
        return pe.has(ye) ? pe.delete(ye) : pe.add(ye), pe;
      }), Y(R);
    },
    [D, x]
  ), Te = q(() => {
    const R = [], Q = [];
    for (const U of O) {
      const he = Pt(U, x);
      F.has(he) && !U.disabled ? R.push(U) : Q.push(U);
    }
    if (R.length === 0) return;
    const ye = Q, ke = [...D, ...R];
    P(ye), I(ke), V(/* @__PURE__ */ new Set());
    const pe = new Set(R.map((U) => Pt(U, x)));
    re(pe), Ge(ye), Qe(ke), He({
      source: ye,
      target: ke,
      moved: R,
      direction: "toTarget"
    });
  }, [
    O,
    D,
    F,
    x,
    Ge,
    Qe,
    He
  ]), lt = q(() => {
    const R = [], Q = [];
    for (const U of D) {
      const he = Pt(U, x);
      ne.has(he) && !U.disabled ? R.push(U) : Q.push(U);
    }
    if (R.length === 0) return;
    const ye = Q, ke = [...O, ...R];
    I(ye), P(ke), re(/* @__PURE__ */ new Set());
    const pe = new Set(R.map((U) => Pt(U, x)));
    V(pe), Ge(ke), Qe(ye), He({
      source: ke,
      target: ye,
      moved: R,
      direction: "toSource"
    });
  }, [
    O,
    D,
    ne,
    x,
    Ge,
    Qe,
    He
  ]), ze = q(() => {
    const R = O.filter((ke) => !ke.disabled);
    if (R.length === 0) return;
    const Q = O.filter((ke) => !!ke.disabled), ye = [...D, ...R];
    P(Q), I(ye), V(/* @__PURE__ */ new Set()), Ge(Q), Qe(ye), He({
      source: Q,
      target: ye,
      moved: R,
      direction: "allToTarget"
    });
  }, [O, D, Ge, Qe, He]), st = q(() => {
    const R = D.filter((ke) => !ke.disabled);
    if (R.length === 0) return;
    const Q = D.filter((ke) => !!ke.disabled), ye = [...O, ...R];
    I(Q), P(ye), re(/* @__PURE__ */ new Set()), Ge(ye), Qe(Q), He({
      source: ye,
      target: Q,
      moved: R,
      direction: "allToSource"
    });
  }, [O, D, Ge, Qe, He]), Xe = q(() => {
    if (ne.size === 0) return;
    const R = [...D], Q = ne, ye = [];
    for (let pe = 1; pe < R.length; pe++) {
      const U = R[pe], he = R[pe - 1];
      if (!U || !he) continue;
      const Re = Pt(U, x), Ie = Pt(he, x);
      Q.has(Re) && !Q.has(Ie) && !U.disabled && !he.disabled && (R[pe - 1] = U, R[pe] = he, ye.push(U));
    }
    if (ye.length === 0) return;
    I(R), Qe(R), He({ source: O, target: R, moved: ye, direction: "up" });
    const ke = Array.from(Q)[0];
    if (ke) {
      const pe = R.findIndex(
        (U) => Pt(U, x) === ke
      );
      pe >= 0 && Y(pe);
    }
  }, [
    D,
    ne,
    x,
    O,
    Qe,
    He
  ]), Ct = q(() => {
    if (ne.size === 0) return;
    const R = [...D], Q = ne, ye = [];
    for (let pe = R.length - 2; pe >= 0; pe--) {
      const U = R[pe], he = R[pe + 1];
      if (!U || !he) continue;
      const Re = Pt(U, x), Ie = Pt(he, x);
      Q.has(Re) && !Q.has(Ie) && !U.disabled && !he.disabled && (R[pe] = he, R[pe + 1] = U, ye.push(U));
    }
    if (ye.length === 0) return;
    I(R), Qe(R), He({ source: O, target: R, moved: ye, direction: "down" });
    const ke = Array.from(Q)[0];
    if (ke) {
      const pe = R.findIndex(
        (U) => Pt(U, x) === ke
      );
      pe >= 0 && Y(pe);
    }
  }, [
    D,
    ne,
    x,
    O,
    Qe,
    He
  ]), yt = F.size > 0, it = ne.size > 0, ft = ce(""), Ve = ce(
    null
  ), Tt = ce(""), le = ce(
    null
  ), Le = q(
    (R) => {
      if (O.length === 0) return;
      const Q = G;
      if (Q.length === 0) return;
      const ye = Q.includes(B) ? B : Q[0] ?? 0;
      let ke = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const pe = Q.indexOf(ye);
        ke = Q[(pe + 1) % Q.length] ?? Q[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const pe = Q.indexOf(ye);
        ke = Q[(pe - 1 + Q.length) % Q.length] ?? Q[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), ke = Q[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), ke = Q[Q.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), gt(ye);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const pe = (ft.current + R.key).toLowerCase();
        ft.current = pe, Ve.current && clearTimeout(Ve.current), Ve.current = setTimeout(() => {
          ft.current = "";
        }, 500);
        const U = [...Q, ...Q], he = Q.indexOf(ye) + 1, Re = U.slice(he).find(
          (Ie) => _o(O[Ie]).toLowerCase().startsWith(pe)
        );
        Re != null && H(Re);
        return;
      }
      ke >= 0 && H(ke);
    },
    [O, G, B, gt]
  ), wt = q(
    (R) => {
      if (D.length === 0) return;
      const Q = X;
      if (Q.length === 0) return;
      const ye = Q.includes(ie) ? ie : Q[0] ?? 0;
      let ke = -1;
      if (R.key === "ArrowDown") {
        R.preventDefault();
        const pe = Q.indexOf(ye);
        ke = Q[(pe + 1) % Q.length] ?? Q[0] ?? 0;
      } else if (R.key === "ArrowUp") {
        R.preventDefault();
        const pe = Q.indexOf(ye);
        ke = Q[(pe - 1 + Q.length) % Q.length] ?? Q[0] ?? 0;
      } else if (R.key === "Home")
        R.preventDefault(), ke = Q[0] ?? 0;
      else if (R.key === "End")
        R.preventDefault(), ke = Q[Q.length - 1] ?? 0;
      else if (R.key === "Enter" || R.key === " ") {
        R.preventDefault(), oe(ye);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const pe = (Tt.current + R.key).toLowerCase();
        Tt.current = pe, le.current && clearTimeout(le.current), le.current = setTimeout(() => {
          Tt.current = "";
        }, 500);
        const U = [...Q, ...Q], he = Q.indexOf(ye) + 1, Re = U.slice(he).find(
          (Ie) => _o(D[Ie]).toLowerCase().startsWith(pe)
        );
        Re != null && Y(Re);
        return;
      }
      ke >= 0 && Y(ke);
    },
    [D, X, ie, oe]
  ), Mt = ce(null), bt = ce(null);
  return /* @__PURE__ */ A(
    "div",
    {
      className: [rt.root, $].filter(Boolean).join(" "),
      "aria-label": k,
      children: [
        /* @__PURE__ */ A("div", { className: rt.panel, children: [
          /* @__PURE__ */ o("div", { className: rt.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: Mt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: rt.listbox,
              onKeyDown: Le,
              children: O.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: rt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : O.map((R, Q) => {
                const ye = Pt(R, x), ke = F.has(ye), pe = Q === B, U = !!R.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleSourceKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": ke,
                      "aria-disabled": U || void 0,
                      tabIndex: -1,
                      "data-active": pe || void 0,
                      className: [
                        rt.option,
                        ke ? rt.selected : null,
                        pe ? rt.active : null,
                        U ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => gt(Q),
                      children: _o(R)
                    },
                    ye
                  )
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ A("div", { className: rt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !yt || void 0,
              disabled: !yt,
              onClick: Te,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all to target",
              "aria-disabled": O.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: O.filter((R) => !R.disabled).length === 0,
              onClick: ze,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all",
              "aria-disabled": O.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: O.filter((R) => !R.disabled).length === 0,
              onClick: ze,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !it || void 0,
              disabled: !it,
              onClick: lt,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: rt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((R) => !R.disabled).length === 0 || void 0,
              disabled: D.filter((R) => !R.disabled).length === 0,
              onClick: st,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ A("div", { className: rt.panel, children: [
          /* @__PURE__ */ o("div", { className: rt.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: bt,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: rt.listbox,
              onKeyDown: wt,
              children: D.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: rt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : D.map((R, Q) => {
                const ye = Pt(R, x), ke = ne.has(ye), pe = Q === ie, U = !!R.disabled;
                return (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- Enter/Space handled by handleTargetKeyDown on the list container
                  /* @__PURE__ */ o(
                    "div",
                    {
                      role: "option",
                      "aria-selected": ke,
                      "aria-disabled": U || void 0,
                      tabIndex: -1,
                      "data-active": pe || void 0,
                      className: [
                        rt.option,
                        ke ? rt.selected : null,
                        pe ? rt.active : null,
                        U ? rt.disabled : null
                      ].filter(Boolean).join(" "),
                      onClick: () => oe(Q),
                      children: _o(R)
                    },
                    ye
                  )
                );
              })
            }
          ),
          /* @__PURE__ */ A("div", { className: rt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: rt.btn,
                "aria-label": "Move up",
                "aria-disabled": !it || void 0,
                disabled: !it,
                onClick: Xe,
                children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: rt.btn,
                "aria-label": "Move down",
                "aria-disabled": !it || void 0,
                disabled: !it,
                onClick: Ct,
                children: /* @__PURE__ */ o(Ce, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Wk = "_root_1qxsp_1", Kk = "_header_1qxsp_8", Gk = "_title_1qxsp_15", Vk = "_navBtn_1qxsp_20", Yk = "_resources_1qxsp_39", Xk = "_resource_1qxsp_39", Zk = "_grid_1qxsp_50", Jk = "_timeCol_1qxsp_55", Qk = "_timeCell_1qxsp_61", eN = "_dayCol_1qxsp_66", tN = "_dayHeader_1qxsp_73", nN = "_slot_1qxsp_81", rN = "_event_1qxsp_91", Yt = {
  root: Wk,
  header: Kk,
  title: Gk,
  navBtn: Vk,
  resources: Yk,
  resource: Xk,
  grid: Zk,
  timeCol: Jk,
  timeCell: Qk,
  dayCol: eN,
  dayHeader: tN,
  slot: nN,
  event: rN
};
function wa(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function fO({
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
  const [d, f] = W(
    n ?? /* @__PURE__ */ new Date()
  ), p = n ?? d, g = (h) => {
    n || f(h), r?.(h);
  }, _ = t === "day" ? [p] : t === "week" ? Array.from({ length: 7 }, (h, v) => {
    const m = new Date(p);
    return m.setDate(p.getDate() - p.getDay() + v), m;
  }) : Array.from({ length: 30 }, (h, v) => {
    const m = new Date(p);
    return m.setDate(1 + v), m;
  }), b = Array.from({ length: 12 }, (h, v) => 8 + v);
  return /* @__PURE__ */ A(
    "div",
    {
      className: [Yt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ A("div", { className: Yt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Yt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const h = new Date(p);
                h.setDate(h.getDate() - 7), g(h);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Yt.title, children: p.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Yt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const h = new Date(p);
                h.setDate(h.getDate() + 7), g(h);
              },
              children: "›"
            }
          )
        ] }),
        a && /* @__PURE__ */ o("div", { className: Yt.resources, children: a.map((h) => /* @__PURE__ */ o("div", { className: Yt.resource, children: h.name }, h.id)) }),
        /* @__PURE__ */ A("div", { className: Yt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Yt.timeCol, role: "presentation", children: b.map((h) => /* @__PURE__ */ A("div", { className: Yt.timeCell, children: [
            h,
            ":00"
          ] }, h)) }),
          _.map((h) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- day-level create affordance for the pointer; hour slots refine it and event buttons inside are the keyboard path
            /* @__PURE__ */ A(
              "div",
              {
                className: Yt.dayCol,
                role: "group",
                title: h.toLocaleDateString(),
                onClick: () => c?.({ date: h }),
                "aria-label": h.toLocaleDateString(),
                children: [
                  /* @__PURE__ */ o("div", { className: Yt.dayHeader, children: h.toLocaleDateString(void 0, {
                    weekday: "short",
                    month: "short",
                    day: "numeric"
                  }) }),
                  b.map((v) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions -- hour slots refine the day-column click for the mouse; event buttons inside are native buttons
                    /* @__PURE__ */ o(
                      "div",
                      {
                        className: Yt.slot,
                        tabIndex: -1,
                        onClick: (m) => {
                          m.stopPropagation();
                          const u = new Date(h);
                          u.setHours(v), c?.({ date: u });
                        }
                      },
                      v
                    )
                  )),
                  e.filter((v) => v.start.toDateString() === h.toDateString()).map((v) => /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: Yt.event,
                      "aria-label": `${v.title} ${wa(v.start)} - ${wa(v.end)}`,
                      "aria-pressed": !1,
                      onClick: () => i?.({ event: v }),
                      children: v.title
                    },
                    v.id
                  ))
                ]
              },
              h.toISOString()
            )
          ))
        ] })
      ]
    }
  );
}
const oN = "_root_dj5ne_1", sN = "_header_dj5ne_8", aN = "_headerCell_dj5ne_15", lN = "_timeline_dj5ne_21", iN = "_row_dj5ne_26", cN = "_taskName_dj5ne_32", dN = "_timelineCell_dj5ne_37", uN = "_bar_dj5ne_43", fN = "_progress_dj5ne_56", pN = "_dep_dj5ne_61", Mn = {
  root: oN,
  header: sN,
  headerCell: aN,
  timeline: lN,
  row: iN,
  taskName: cN,
  timelineCell: dN,
  bar: uN,
  progress: fN,
  dep: pN
};
function pO({
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
      className: [Mn.root, a].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ A("div", { className: Mn.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: Mn.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ A("div", { className: Mn.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ A(
          "div",
          {
            className: Mn.row,
            role: "row",
            "aria-selected": i === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: Mn.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ A("div", { className: Mn.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: Mn.bar,
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
                        className: Mn.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((l) => /* @__PURE__ */ o("svg", { className: Mn.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
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
const hN = "_root_4b64f_1", _N = "_fields_4b64f_6", mN = "_chip_4b64f_13", gN = "_table_4b64f_35", yN = "_totalRow_4b64f_55", bN = "_total_4b64f_55", vr = {
  root: hN,
  fields: _N,
  chip: mN,
  table: gN,
  totalRow: yN,
  total: bN
}, xN = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e),
  First: (e) => e[0] ?? 0,
  Last: (e) => e[e.length - 1] ?? 0
};
function vN(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function hO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: a,
  ariaLabel: i = "Pivot table",
  className: c
}) {
  const s = t, l = n, d = r, f = (u, y, $) => {
    const x = u === "row" ? s.filter((S) => S.property !== y) : s, k = u === "col" ? l.filter((S) => S.property !== y) : l, w = u === "agg" ? d.filter((S) => !(S.property === y && S.aggregate === $)) : d;
    a?.({
      rowFields: x,
      columnFields: k,
      aggregateFields: w
    });
  }, p = (u, y) => y.length === 0 ? "" : y.length === 1 ? String(u[y[0].property]) : y.map(
    ($) => String(u[$.property]).replace(/\\/g, "\\\\").split("").join("\\x01")
  ).join(""), g = [
    ...new Set(s.length ? e.map((u) => p(u, s)) : [""])
  ].sort(), _ = [
    ...new Set(l.length ? e.map((u) => p(u, l)) : [""])
  ].sort(), b = (u, y) => e.filter(
    ($) => (u == null || p($, s) === u) && (y == null || p($, l) === y)
  ), h = (u, y) => {
    if (y.aggregate === "Count") return u.length;
    const $ = u.map((x) => Number(x[y.property])).filter((x) => !Number.isNaN(x));
    return $.length ? xN[y.aggregate]($) : 0;
  }, v = (u) => {
    const y = d.length > 1;
    return d.map(($) => {
      const x = vN(h(u, $));
      return y ? `${x} (${$.aggregate})` : x;
    }).join(", ");
  }, m = (u, y, $, x) => /* @__PURE__ */ A(
    "button",
    {
      type: "button",
      className: vr.chip,
      "aria-label": `Remove ${u} field ${$}`,
      onClick: () => f(u, y, x),
      children: [
        $,
        x ? ` (${x})` : ""
      ]
    },
    `${u}-${$}-${x ?? ""}`
  );
  return /* @__PURE__ */ A("div", { className: [vr.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ A("div", { className: vr.fields, children: [
      s.map((u) => m("row", u.property, u.title ?? u.property)),
      l.map((u) => m("col", u.property, u.title ?? u.property)),
      d.map(
        (u) => m("agg", u.property, u.title ?? u.property, u.aggregate)
      )
    ] }),
    /* @__PURE__ */ A("table", { className: vr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ A("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((u) => u.title ?? u.property).join(" / ") || "Total" }),
        _.map((u) => /* @__PURE__ */ o("th", { scope: "col", children: u || "—" }, u)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ A("tbody", { children: [
        g.map((u) => /* @__PURE__ */ A("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: u || "—" }),
          _.map((y) => /* @__PURE__ */ o(
            "td",
            {
              title: d.length ? v(b(u, y)) : void 0,
              children: d.length ? v(b(u, y)) : ""
            },
            y
          )),
          /* @__PURE__ */ o("td", { className: vr.total, children: d.length ? v(b(u)) : "" })
        ] }, u)),
        /* @__PURE__ */ A("tr", { className: vr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          _.map((u) => /* @__PURE__ */ o("td", { children: d.length ? v(b(void 0, u)) : "" }, u)),
          /* @__PURE__ */ o("td", { children: d.length ? v(e) : "" })
        ] })
      ] })
    ] })
  ] });
}
const wN = "_root_1r7co_1", kN = "_reverse_1r7co_10", NN = "_item_1r7co_14", SN = "_marker_1r7co_35", $N = "_body_1r7co_46", ON = "_label_1r7co_50", EN = "_content_1r7co_56", ar = {
  root: wN,
  reverse: kN,
  item: NN,
  marker: SN,
  body: $N,
  label: ON,
  content: EN
};
function _O({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const a = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [ar.root, t ? ar.reverse : "", r].filter(Boolean).join(" "),
      "aria-label": n,
      children: a.map((i, c) => /* @__PURE__ */ A("li", { className: ar.item, children: [
        /* @__PURE__ */ o("span", { className: ar.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ A("div", { className: ar.body, children: [
          /* @__PURE__ */ o("div", { className: ar.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ o("div", { className: ar.content, children: i.content })
        ] })
      ] }, c))
    }
  );
}
const CN = "_root_rm4d8_1", TN = "_header_rm4d8_13", MN = "_headCell_rm4d8_22", AN = "_row_rm4d8_32", DN = "_cell_rm4d8_37", Wr = {
  root: CN,
  header: TN,
  headCell: MN,
  row: AN,
  cell: DN
};
function mO({
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
  ), [d, f] = W(0), p = ce(/* @__PURE__ */ new Set()), g = Math.ceil(n / t), _ = Math.max(0, Math.floor(d / t) - 3), b = Math.min(e, _ + g + 6), h = q(
    (m, u) => {
      let y = !1;
      for (let $ = m; $ < u; $++)
        !s.has($) && !p.current.has($) && (y = !0);
      if (y) {
        for (let $ = m; $ < u; $++) p.current.add($);
        r({ skip: m, top: u }).then(($) => {
          l((x) => {
            const k = new Map(x);
            return $.forEach((w, S) => k.set(m + S, w)), k;
          });
          for (let x = m; x < u; x++) p.current.delete(x);
        });
      }
    },
    [s, r]
  );
  Se(() => {
    h(_, b);
  }, [_, b, h]);
  const v = [];
  for (let m = _; m < b; m++) {
    const u = s.get(m) ?? {};
    v.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Wr.row,
          role: "row",
          style: { height: t },
          children: a.map((y) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Wr.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(u[y.property] ?? "")
            },
            y.property
          ))
        },
        m
      )
    );
  }
  return /* @__PURE__ */ A(
    "div",
    {
      className: [Wr.root, c].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (m) => f(m.target.scrollTop),
      onKeyDown: (m) => {
        const u = m.currentTarget;
        m.key === "ArrowDown" ? (m.preventDefault(), u.scrollTop += t) : m.key === "ArrowUp" ? (m.preventDefault(), u.scrollTop -= t) : m.key === "PageDown" ? (m.preventDefault(), u.scrollTop += n) : m.key === "PageUp" && (m.preventDefault(), u.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: _ * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: Wr.header, role: "row", children: a.map((m) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: Wr.headCell,
            style: {
              height: t,
              ...m.width ? { width: m.width } : {}
            },
            children: m.title ?? m.property
          },
          m.property
        )) }),
        v,
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
var Nn;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, l, d, f) {
      if (this.version = s, this.errorCorrectionLevel = l, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let p = [];
      for (let _ = 0; _ < this.size; _++) p.push(!1);
      for (let _ = 0; _ < this.size; _++)
        this.modules.push(p.slice()), this.isFunction.push(p.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(d);
      if (this.drawCodewords(g), f == -1) {
        let _ = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const h = this.getPenaltyScore();
          h < _ && (f = b, _ = h), this.applyMask(b);
        }
      }
      a(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
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
    static encodeSegments(s, l, d = 1, f = 40, p = -1, g = !0) {
      if (!(t.MIN_VERSION <= d && d <= f && f <= t.MAX_VERSION) || p < -1 || p > 7)
        throw new RangeError("Invalid value");
      let _, b;
      for (_ = d; ; _++) {
        const u = t.getNumDataCodewords(_, l) * 8, y = i.getTotalBits(s, _);
        if (y <= u) {
          b = y;
          break;
        }
        if (_ >= f)
          throw new RangeError("Data too long");
      }
      for (const u of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        g && b <= t.getNumDataCodewords(_, u) * 8 && (l = u);
      let h = [];
      for (const u of s) {
        n(u.mode.modeBits, 4, h), n(u.numChars, u.mode.numCharCountBits(_), h);
        for (const y of u.getData()) h.push(y);
      }
      a(h.length == b);
      const v = t.getNumDataCodewords(_, l) * 8;
      a(h.length <= v), n(0, Math.min(4, v - h.length), h), n(0, (8 - h.length % 8) % 8, h), a(h.length % 8 == 0);
      for (let u = 236; h.length < v; u ^= 253)
        n(u, 8, h);
      let m = [];
      for (; m.length * 8 < h.length; ) m.push(0);
      return h.forEach(
        (u, y) => m[y >>> 3] |= u << 7 - (y & 7)
      ), new t(_, l, m, p);
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
        for (let f = 0; f < l; f++)
          d == 0 && f == 0 || d == 0 && f == l - 1 || d == l - 1 && f == 0 || this.drawAlignmentPattern(s[d], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const l = this.errorCorrectionLevel.formatBits << 3 | s;
      let d = l;
      for (let p = 0; p < 10; p++) d = d << 1 ^ (d >>> 9) * 1335;
      const f = (l << 10 | d) ^ 21522;
      a(f >>> 15 == 0);
      for (let p = 0; p <= 5; p++)
        this.setFunctionModule(8, p, r(f, p));
      this.setFunctionModule(8, 7, r(f, 6)), this.setFunctionModule(8, 8, r(f, 7)), this.setFunctionModule(7, 8, r(f, 8));
      for (let p = 9; p < 15; p++)
        this.setFunctionModule(14 - p, 8, r(f, p));
      for (let p = 0; p < 8; p++)
        this.setFunctionModule(this.size - 1 - p, 8, r(f, p));
      for (let p = 8; p < 15; p++)
        this.setFunctionModule(8, this.size - 15 + p, r(f, p));
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
        const f = r(l, d), p = this.size - 11 + d % 3, g = Math.floor(d / 3);
        this.setFunctionModule(p, g, f), this.setFunctionModule(g, p, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, l) {
      for (let d = -4; d <= 4; d++)
        for (let f = -4; f <= 4; f++) {
          const p = Math.max(Math.abs(f), Math.abs(d)), g = s + f, _ = l + d;
          0 <= g && g < this.size && 0 <= _ && _ < this.size && this.setFunctionModule(g, _, p != 2 && p != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, l) {
      for (let d = -2; d <= 2; d++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            l + d,
            Math.max(Math.abs(f), Math.abs(d)) != 1
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
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][l], p = t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][l], g = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), _ = f - g % f, b = Math.floor(g / f);
      let h = [];
      const v = t.reedSolomonComputeDivisor(p);
      for (let u = 0, y = 0; u < f; u++) {
        let $ = s.slice(
          y,
          y + b - p + (u < _ ? 0 : 1)
        );
        y += $.length;
        const x = t.reedSolomonComputeRemainder($, v);
        u < _ && $.push(0), h.push($.concat(x));
      }
      let m = [];
      for (let u = 0; u < h[0].length; u++)
        h.forEach((y, $) => {
          (u != b - p || $ >= _) && m.push(y[u]);
        });
      return a(m.length == g), m;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let d = this.size - 1; d >= 1; d -= 2) {
        d == 6 && (d = 5);
        for (let f = 0; f < this.size; f++)
          for (let p = 0; p < 2; p++) {
            const g = d - p, b = (d + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[b][g] && l < s.length * 8 && (this.modules[b][g] = r(s[l >>> 3], 7 - (l & 7)), l++);
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
          let f;
          switch (s) {
            case 0:
              f = (d + l) % 2 == 0;
              break;
            case 1:
              f = l % 2 == 0;
              break;
            case 2:
              f = d % 3 == 0;
              break;
            case 3:
              f = (d + l) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(d / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              f = d * l % 2 + d * l % 3 == 0;
              break;
            case 6:
              f = (d * l % 2 + d * l % 3) % 2 == 0;
              break;
            case 7:
              f = ((d + l) % 2 + d * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][d] && f && (this.modules[l][d] = !this.modules[l][d]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let p = 0; p < this.size; p++) {
        let g = !1, _ = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[p][h] == g ? (_++, _ == 5 ? s += t.PENALTY_N1 : _ > 5 && s++) : (this.finderPenaltyAddHistory(_, b), g || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), g = this.modules[p][h], _ = 1);
        s += this.finderPenaltyTerminateAndCount(g, _, b) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size; p++) {
        let g = !1, _ = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[h][p] == g ? (_++, _ == 5 ? s += t.PENALTY_N1 : _ > 5 && s++) : (this.finderPenaltyAddHistory(_, b), g || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), g = this.modules[h][p], _ = 1);
        s += this.finderPenaltyTerminateAndCount(g, _, b) * t.PENALTY_N3;
      }
      for (let p = 0; p < this.size - 1; p++)
        for (let g = 0; g < this.size - 1; g++) {
          const _ = this.modules[p][g];
          _ == this.modules[p][g + 1] && _ == this.modules[p + 1][g] && _ == this.modules[p + 1][g + 1] && (s += t.PENALTY_N2);
        }
      let l = 0;
      for (const p of this.modules)
        l = p.reduce((g, _) => g + (_ ? 1 : 0), l);
      const d = this.size * this.size, f = Math.ceil(Math.abs(l * 20 - d * 10) / d) - 1;
      return a(0 <= f && f <= 9), s += f * t.PENALTY_N4, a(0 <= s && s <= 2568888), s;
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
        for (let f = this.size - 7; d.length < s; f -= l)
          d.splice(1, 0, f);
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
      for (let f = 0; f < s - 1; f++) l.push(0);
      l.push(1);
      let d = 1;
      for (let f = 0; f < s; f++) {
        for (let p = 0; p < l.length; p++)
          l[p] = t.reedSolomonMultiply(l[p], d), p + 1 < l.length && (l[p] ^= l[p + 1]);
        d = t.reedSolomonMultiply(d, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, l) {
      let d = l.map((f) => 0);
      for (const f of s) {
        const p = f ^ d.shift();
        d.push(0), l.forEach(
          (g, _) => d[_] ^= t.reedSolomonMultiply(g, p)
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
      for (let f = 7; f >= 0; f--)
        d = d << 1 ^ (d >>> 7) * 285, d ^= (l >>> f & 1) * s;
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
        const f = Math.min(s.length - d, 3);
        n(parseInt(s.substring(d, d + f), 10), f * 3 + 1, l), d += f;
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
        let f = i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(s.charAt(d + 1)), n(f, 11, l);
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
      for (const f of s) {
        const p = f.mode.numCharCountBits(l);
        if (f.numChars >= 1 << p) return 1 / 0;
        d += 4 + p + f.bitData.length;
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
})(Nn || (Nn = {}));
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
})(Nn || (Nn = {}));
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
})(Nn || (Nn = {}));
const IN = "_root_1leml_1", zN = {
  root: IN
}, LN = {
  low: Nn.QrCode.Ecc.LOW,
  medium: Nn.QrCode.Ecc.MEDIUM,
  quartile: Nn.QrCode.Ecc.QUARTILE,
  high: Nn.QrCode.Ecc.HIGH
};
function gO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: a = 4,
  ariaLabel: i,
  className: c,
  onError: s
}) {
  const l = i ?? `QR code for ${e}`, d = ce(null), f = Eo("(prefers-color-scheme: dark)"), [p, g] = W(
    () => document.documentElement.dataset.theme ?? null
  );
  Se(() => {
    const $ = document.documentElement, x = new MutationObserver(() => {
      g($.dataset.theme ?? null);
    });
    return x.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => x.disconnect();
  }, []);
  const _ = $e(() => {
    try {
      return Nn.QrCode.encodeText(e, LN[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = ce(null);
  Se(() => {
    if (_ !== null) {
      b.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    (b.current?.value !== e || b.current?.onError !== s) && (b.current = { value: e, onError: s }, s?.($));
  }, [_, e, s]);
  const h = Math.max(0, Math.floor(a)), v = [zN.root, c].filter(Boolean).join(" ");
  if (Se(() => {
    if (n !== "canvas" || _ === null) return;
    const $ = d.current, x = $?.getContext("2d");
    if (!$ || !x) return;
    const k = getComputedStyle($), w = k.getPropertyValue("--dx-text-color").trim() || "#000", S = k.getPropertyValue("--dx-surface-color").trim() || "#fff";
    PN(x, _, t, h, w, S);
  }, [n, _, t, h, f, p]), _ === null)
    return /* @__PURE__ */ o("div", { className: v, role: "img", "aria-label": l, "data-qr-error": "true" });
  const m = _.size + h * 2, u = t / m;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: d,
        className: v,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const y = [];
  for (let $ = 0; $ < _.size; $++)
    for (let x = 0; x < _.size; x++)
      _.getModule(x, $) && y.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (x + h) * u,
            y: ($ + h) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${x}-${$}`
        )
      );
  return /* @__PURE__ */ A(
    "svg",
    {
      className: v,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function PN(e, t, n, r, a, i) {
  const c = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = a;
  for (let s = 0; s < t.size; s++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, s) && e.fillRect((l + r) * c, (s + r) * c, c + 0.5, c + 0.5);
}
const RN = "_root_1v9la_1", jN = "_value_1v9la_9", ka = {
  root: RN,
  value: jN
}, Na = [
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
], Sa = 104, BN = 106;
function FN(e) {
  const t = [Sa];
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t.push(a >= 32 && a <= 126 ? a - 32 : 0);
  }
  let n = Sa;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, BN), t;
}
function yO({
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
    for (const f of FN(e)) {
      const p = Na[f] ?? Na[0];
      for (let g = 0; g < p.length; g++) {
        const _ = Number(p[g]);
        g % 2 === 0 && l.push({ x: d, w: _ }), d += _;
      }
    }
    return { modules: l, total: d };
  }, [e]);
  return /* @__PURE__ */ A("span", { className: [ka.root, i].filter(Boolean).join(" "), children: [
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
    r && /* @__PURE__ */ o("span", { className: ka.value, children: e })
  ] });
}
const HN = "_root_16i43_1", UN = "_svg_16i43_10", qN = "_gridline_16i43_15", WN = "_tickLabel_16i43_21", KN = "_axisTitle_16i43_27", GN = "_dataLabel_16i43_34", VN = "_gaugeValue_16i43_40", YN = "_legend_16i43_47", XN = "_legendItem_16i43_55", ZN = "_swatch_16i43_63", JN = "_tooltip_16i43_70", QN = "_visuallyHidden_16i43_84", Ze = {
  root: HN,
  svg: UN,
  gridline: qN,
  tickLabel: WN,
  axisTitle: KN,
  dataLabel: GN,
  gaugeValue: VN,
  legend: YN,
  legendItem: XN,
  swatch: ZN,
  tooltip: JN,
  visuallyHidden: QN
}, No = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Ja(e, t) {
  return e.color ?? No[t % No.length];
}
const Qa = /* @__PURE__ */ new Set([
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
]), eS = /* @__PURE__ */ new Set([...Qa, "heatmap"]), tS = /* @__PURE__ */ new Set(["bar", "column", "area"]);
function nS(e) {
  const t = Math.pow(10, Math.floor(Math.log10(e))), n = e / t;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * t;
}
const rS = 100, oS = (e) => Math.max(1, Math.ceil(Math.abs(e) / rS));
function sS(e, t, n, r = 4) {
  const a = t - e || 1, i = n ?? nS(a / Math.max(1, r)), c = Math.floor(e / i) * i, s = Math.ceil(t / i) * i, l = Math.round((s - c) / i), d = [];
  for (let f = 0; f <= l; f++)
    d.push(Number((c + f * i).toFixed(6)));
  return { min: c, max: s, step: i, ticks: d };
}
function So(e) {
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
function Jt(e, t, n) {
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
const Wt = (e) => e * Math.PI / 180;
function Co(e, t, n, r, a) {
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
function el(e) {
  if (e != null)
    return typeof e == "string" ? e : e.join(" ");
}
function Bt(e, t) {
  return e.percent ? `${e.fmt(t)}%` : e.fmt(t);
}
const aS = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]);
function lS(e, t, n) {
  if (t.source)
    return e.series.find(
      (a, i) => i !== n && a.title === t.source
    ) ?? null;
  for (let r = n - 1; r >= 0; r--) {
    const a = e.series[r];
    if (a && aS.has(a.type)) return a;
  }
  return null;
}
function iS(e, t, n, r) {
  const a = lS(e, t, n);
  if (!a) return null;
  const i = So(a).filter((f) => !Number.isNaN(f.val));
  if (i.length === 0) return null;
  const c = i.map((f) => f.cat);
  let s;
  if (t.type === "trendline") {
    const f = i.length, p = i.map((u, y) => y), g = i.map((u) => u.val), _ = p.reduce((u, y) => u + y, 0) / f, b = g.reduce((u, y) => u + y, 0) / f;
    let h = 0, v = 0;
    for (let u = 0; u < f; u++)
      h += (p[u] - _) * (g[u] - b), v += (p[u] - _) * (p[u] - _);
    const m = v === 0 ? 0 : h / v;
    s = c.map((u, y) => ({
      cat: u,
      val: b + m * (y - _)
    }));
  } else {
    const f = Math.max(1, Math.floor(t.period ?? 3));
    s = i.map((p, g) => {
      if (g + 1 < f) return null;
      const _ = i.slice(g + 1 - f, g + 1);
      return {
        cat: p.cat,
        val: _.reduce((b, h) => b + h.val, 0) / f
      };
    }).filter((p) => p != null);
  }
  if (s.length === 0) return null;
  const l = {
    ...t,
    stack: void 0,
    categoryProperty: "__cat",
    valueProperty: "__val",
    data: s.map((f, p) => ({
      __cat: f.cat,
      __val: f.val,
      __item: i[p + (i.length - s.length)]?.item
    })),
    markers: { ...t.markers ?? {}, visible: t.markers?.visible ?? !1 }
  }, d = So(l).map((f) => ({
    ...f,
    item: f.item.__item ?? f.item
  }));
  return tl(e, l, n, d, r);
}
function cS(e, t, n) {
  if (n.length === 0) return null;
  const { xFor: r, yFor: a, categories: i } = e, c = new Map(i.map((p, g) => [p, g])), s = n.map((p) => {
    const g = c.get(p.cat) ?? 0, _ = p.min, b = p.max;
    return typeof _ != "number" || Number.isNaN(_) || typeof b != "number" || Number.isNaN(b) ? null : { x: r(g), lo: a(_), hi: a(b) };
  });
  if (s.some((p) => p == null)) return null;
  const l = s.map((p) => `L ${p.x} ${p.hi}`).join(" "), d = [...s].reverse().map((p) => `L ${p.x} ${p.lo}`).join(" "), f = s[0];
  return /* @__PURE__ */ o(
    "path",
    {
      d: `M ${f.x} ${f.hi} ${l} ${d} Z`,
      fill: e.colorFor(0, t),
      fillOpacity: 0.35,
      stroke: "none"
    }
  );
}
function dS(e, t, n, r) {
  const { pad: a, plotW: i, plotH: c } = e, s = a.l + i / 2, l = a.t + c / 2, d = Math.min(i, c) / 3, f = t.type === "donut" ? t.innerRadius ?? d * 0.5 : 0, p = r.reduce((_, b) => _ + (Number(b.val) || 0), 0);
  let g = -90;
  return Jt(
    n,
    t,
    r.map((_, b) => {
      const h = p ? _.val / p * 360 : 0, v = g, m = g + h;
      g = m;
      const u = h > 180 ? 1 : 0, y = s + d * Math.cos(Wt(v)), $ = l + d * Math.sin(Wt(v)), x = s + d * Math.cos(Wt(m)), k = l + d * Math.sin(Wt(m)), w = s + f * Math.cos(Wt(m)), S = l + f * Math.sin(Wt(m)), O = s + f * Math.cos(Wt(v)), P = l + f * Math.sin(Wt(v)), D = f ? `M ${y} ${$} A ${d} ${d} 0 ${u} 1 ${x} ${k} L ${w} ${S} A ${f} ${f} 0 ${u} 0 ${O} ${P} Z` : `M ${s} ${l} L ${y} ${$} A ${d} ${d} 0 ${u} 1 ${x} ${k} Z`, I = (v + m) / 2, C = s + (d + 12) * Math.cos(Wt(I)), N = l + (d + 12) * Math.sin(Wt(I)), T = Ja(t, b);
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: D,
            fill: T,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              C,
              N,
              `${t.title ?? _.cat}: ${Bt(e, _.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, _.cat, _.val, _.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: C,
            y: N,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Bt(e, _.val)
          }
        )
      ] }, b);
    })
  );
}
function uS(e, t, n, r, a) {
  const { pad: i, plotW: c, scale: s, xFor: l, yFor: d, categories: f } = e, p = new Map(f.map((g, _) => [g, _]));
  return Jt(
    n,
    t,
    r.map((g, _) => {
      const b = p.get(g.cat) ?? 0, h = Number(r[_].cat), v = Number.isNaN(h) ? l(b) : i.l + (h - s.min) / (s.max - s.min || 1) * c, m = d(g.val), u = t.type === "bubble" && g.size !== void 0 ? Math.max(4, Math.min(12, g.size / 10)) : 4;
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        Co(v, m, a, t, u),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: v,
            cy: m,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, m, `${t.title ?? g.cat}: ${Bt(e, g.val)}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, _);
    })
  );
}
function tl(e, t, n, r, a) {
  const { scale: i, xFor: c, yFor: s, categories: l, series: d } = e, f = new Map(l.map((b, h) => [b, h])), p = (b) => {
    if (!t.stack) return i.min;
    let h = 0;
    for (let v = 0; v < n; v++) {
      const m = d[v];
      if (m?.stack !== t.stack) continue;
      const u = m.data.find(
        (y) => String(y[m.categoryProperty] ?? "") === b
      );
      u && (h += Number(u[m.valueProperty]) || 0);
    }
    return h;
  }, g = r.map((b, h) => {
    const v = f.get(b.cat) ?? 0, m = p(b.cat);
    return `${h === 0 ? "M" : "L"} ${c(v)} ${s(m + b.val)}`;
  }).join(" "), _ = r.map((b, h) => {
    const v = f.get(b.cat) ?? 0, m = p(b.cat);
    return `${h === 0 ? "M" : "L"} ${c(v)} ${s(m)}`;
  }).join(" ");
  return Jt(
    n,
    t,
    /* @__PURE__ */ A(ot, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${g} L ${c(r.length - 1)} ${s(p(r[r.length - 1].cat))} L ${c(0)} ${s(p(r[0].cat))} Z`,
          fill: a,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      cS(e, t, r),
      /* @__PURE__ */ o(
        "path",
        {
          d: g,
          fill: "none",
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: el(t.dash)
        }
      ),
      t.stack && /* @__PURE__ */ o("path", { d: _, fill: "none", stroke: "transparent" }),
      r.map((b, h) => {
        const v = f.get(b.cat) ?? 0, m = p(b.cat), u = c(v), y = s(m + b.val);
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
          Co(u, y, a, t, 4),
          /* @__PURE__ */ o(
            "rect",
            {
              x: u - 12,
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(
                u,
                y,
                `${t.title ?? b.cat}: ${Bt(e, b.val)}`
              ),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: u,
              y: y - 8,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Bt(e, b.val)
            }
          )
        ] }, h);
      })
    ] })
  );
}
function fS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, xFor: d, yFor: f, categories: p, series: g } = e, _ = new Map(p.map((h, v) => [h, v])), b = t.type === "bar";
  return Jt(
    n,
    t,
    r.map((h, v) => {
      const m = _.get(h.cat) ?? 0;
      let u = 0;
      if (t.stack)
        for (let M = 0; M < n; M++) {
          const L = g[M];
          if (L?.stack !== t.stack) continue;
          const z = L.data.find(
            (F) => String(F[L.categoryProperty] ?? "") === h.cat
          );
          z && (u += Number(z[L.valueProperty]) || 0);
        }
      const y = u + h.val, $ = typeof h.min == "number" && !Number.isNaN(h.min) && typeof h.max == "number" && !Number.isNaN(h.max), x = g.filter(
        (M) => !M.stack || M.stack === t.stack
      ).length, k = c / Math.max(1, p.length), w = b ? 18 : Math.max(12, k / (t.stack ? 1 : x)), S = Math.max(1, w - 4), O = t.stack ? 1 : x, P = b ? i.l + u / (l.max - l.min || 1) * c : (
        // Grouped columns are centred as a block in the band: anchoring on the
        // first bar's left edge pushed the whole group right of its category.
        d(m) - O * w / 2 + n % O * w + (w - S) / 2
      ), D = b ? i.t + m * s / Math.max(1, p.length) + 4 : f($ ? u + h.max : y), I = b ? $ ? (h.max - h.min) / (l.max - l.min || 1) * c : h.val / (l.max - l.min || 1) * c : S, C = b ? 16 : $ ? f(u + h.min) - f(u + h.max) : f(u) - f(y), N = b ? i.l + (u + ($ ? h.min : 0)) / (l.max - l.min || 1) * c : P, T = b ? i.t + m * s / Math.max(1, p.length) + 4 : D;
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: N,
            y: T,
            width: I,
            height: C,
            fill: a,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              N + I / 2,
              T,
              `${t.title ?? h.cat}: ${Bt(e, h.val)}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: N + I / 2,
            y: T - 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Bt(e, h.val)
          }
        )
      ] }, v);
    })
  );
}
function pS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, scale: l, tooltipVisible: d, showTip: f, hideTip: p } = e, g = i.l + c / 2, _ = i.t + s * 0.78, b = Math.min(c, s) * 0.36, h = 135, v = 270, m = r.reduce((k, w) => k + (Number(w.val) || 0), 0), u = l.max - l.min || 1, y = Math.min(1, Math.max(0, (m - l.min) / u)), $ = (k, w) => {
    const [S, O] = [
      g + b * Math.cos(Wt(k)),
      _ + b * Math.sin(Wt(k))
    ], [P, D] = [
      g + b * Math.cos(Wt(w)),
      _ + b * Math.sin(Wt(w))
    ], I = w - k > 180 ? 1 : 0;
    return `M ${S} ${O} A ${b} ${b} 0 ${I} 1 ${P} ${D}`;
  }, x = Number(m.toFixed(2));
  return Jt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ A("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: $(h, h + v),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: $(h, h + v * y),
          fill: "none",
          stroke: a,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: g, y: _ - 4, textAnchor: "middle", className: Ze.gaugeValue, children: x }),
      /* @__PURE__ */ o(
        "path",
        {
          d: $(h, h + v),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => d && f(g, _ - b, `${t.title ?? "Value"}: ${x}`),
          onMouseLeave: () => p(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", m, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: g,
          y: _ + b + 18,
          textAnchor: "middle",
          className: Ze.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function _s(e) {
  const { pad: t, plotW: n, plotH: r, categories: a } = e, i = t.l + n / 2, c = t.t + r / 2, s = Math.min(n, r) / 2 - 24, l = Math.max(3, a.length), d = (p) => Wt(-90 + 360 * p / l);
  return { cx: i, cy: c, radius: s, angleFor: d, vertexFor: (p, g) => {
    const _ = d(p);
    return [
      i + s * g * Math.cos(_),
      c + s * g * Math.sin(_)
    ];
  } };
}
function hS(e) {
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
function _S(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l } = e, { cx: d, cy: f, radius: p, angleFor: g, vertexFor: _ } = _s(e), b = e.scale.max || 1, h = (m) => r.find((u) => u.cat === m)?.val ?? 0, v = i.map((m, u) => {
    const y = Math.min(1, Math.max(0, h(m) / b)), [$, x] = _(u, y);
    return `${$},${x}`;
  }).join(" ");
  return Jt(
    n,
    t,
    /* @__PURE__ */ A(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: v,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: 2
        }
      ),
      i.map((m, u) => {
        const y = Math.min(1, Math.max(0, h(m) / b)), [$, x] = _(u, y), [k, w] = _(u, 1);
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: $,
              cy: x,
              r: 3.5,
              fill: a,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: $,
              cy: x,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(k, w, `${t.title ?? m}: ${h(m)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const S = r.find((O) => O.cat === m);
                S && e.handleClick(t, S.cat, S.val, S.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: d + (p + 14) * Math.cos(g(u)),
              y: f + (p + 14) * Math.sin(g(u)) + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: m
            }
          )
        ] }, m);
      })
    ] })
  );
}
function mS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = r, g = Math.max(1, ...p.map((h) => Number(h.val) || 0)), _ = s / Math.max(1, p.length), b = i.l + c / 2;
  return Jt(
    n,
    t,
    p.map((h, v) => {
      const u = Math.max(0, Number(h.val) || 0) / g * c, y = p[v + 1], $ = y ? Math.max(0, Number(y.val) || 0) / g * c : u * 0.7, x = i.t + v * _ + 2, k = Math.max(4, _ - 6), w = 1 - v * (0.45 / Math.max(1, p.length));
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - u / 2} ${x} L ${b + u / 2} ${x} L ${b + $ / 2} ${x + k} L ${b - $ / 2} ${x + k} Z`,
            fill: a,
            fillOpacity: w,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(b, x, `${t.title ?? h.cat}: ${Bt(e, h.val)}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ A(
          "text",
          {
            x: b,
            y: x + k / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              h.cat,
              " · ",
              Bt(e, h.val)
            ]
          }
        )
      ] }, v);
    })
  );
}
function gS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, categories: l, tooltipVisible: d, showTip: f, hideTip: p } = e, g = [];
  t.data.forEach((y) => {
    const $ = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    g.includes($) || g.push($);
  });
  const _ = r.map((y) => y.val).filter((y) => Number.isFinite(y)), b = _.length ? Math.min(..._) : 0, h = _.length ? Math.max(..._) : 1, v = c / Math.max(1, l.length), m = s / Math.max(1, g.length), u = (y) => Number.isFinite(y) ? h === b ? 0.6 : 0.15 + 0.85 * ((y - b) / (h - b)) : 0.06;
  return Jt(
    n,
    t,
    /* @__PURE__ */ A(ot, { children: [
      g.map((y, $) => /* @__PURE__ */ o(
        "text",
        {
          x: i.l - 8,
          y: i.t + $ * m + m / 2 + 4,
          textAnchor: "end",
          className: Ze.tickLabel,
          children: y
        },
        y
      )),
      r.map((y, $) => {
        const x = t.data[$], k = l.indexOf(y.cat), w = g.indexOf(
          t.rowProperty && x ? String(x[t.rowProperty] ?? "") : "All"
        );
        if (k < 0 || w < 0) return null;
        const S = i.l + k * v, O = i.t + w * m;
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: S + 1,
              y: O + 1,
              width: Math.max(1, v - 2),
              height: Math.max(1, m - 2),
              fill: a,
              fillOpacity: u(y.val),
              onMouseEnter: () => d && f(
                S + v / 2,
                O,
                `${t.title ?? y.cat}: ${Bt(e, y.val)}`
              ),
              onMouseLeave: () => p(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && Number.isFinite(y.val) && /* @__PURE__ */ o(
            "text",
            {
              x: S + v / 2,
              y: O + m / 2 + 4,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Bt(e, y.val)
            }
          )
        ] }, $);
      })
    ] })
  );
}
function yS(e, t, n, r, a) {
  const { xFor: i, yFor: c, categories: s } = e, l = new Map(s.map((_, b) => [_, b])), d = e.plotW / Math.max(1, s.length), f = Math.max(8, Math.min(28, d / 2 - 4)), p = t.upColor ?? a, g = t.downColor ?? "var(--dx-danger-color)";
  return Jt(
    n,
    t,
    r.map((_, b) => {
      const h = l.get(_.cat) ?? 0, v = i(h), m = _.close ?? _.val, u = typeof _.open == "number" && !Number.isNaN(_.open) && typeof _.high == "number" && !Number.isNaN(_.high) && typeof _.low == "number" && !Number.isNaN(_.low) && typeof m == "number" && !Number.isNaN(m), y = u && m >= _.open, $ = `${t.title ?? _.cat}: O ${_.open ?? "–"} H ${_.high ?? "–"} L ${_.low ?? "–"} C ${m}`;
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        u && t.type === "candlestick" && /* @__PURE__ */ A(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: c(_.high),
              x2: v,
              y2: c(_.low),
              stroke: y ? p : g,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: v - f / 2,
              y: c(Math.max(_.open, m)),
              width: f,
              height: Math.max(
                2,
                c(Math.min(_.open, m)) - c(Math.max(_.open, m))
              ),
              fill: y ? p : "none",
              stroke: y ? p : g,
              strokeWidth: 1.5
            }
          )
        ] }),
        u && t.type === "ohlc" && /* @__PURE__ */ A(ot, { children: [
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: c(_.high),
              x2: v,
              y2: c(_.low),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: v - f / 2,
              y1: c(_.open),
              x2: v,
              y2: c(_.open),
              stroke: a,
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "line",
            {
              x1: v,
              y1: c(m),
              x2: v + f / 2,
              y2: c(m),
              stroke: a,
              strokeWidth: 1.5
            }
          )
        ] }),
        u && t.type === "highlow" && /* @__PURE__ */ o(
          "line",
          {
            x1: v,
            y1: c(_.high),
            x2: v,
            y2: c(_.low),
            stroke: a,
            strokeWidth: 2
          }
        ),
        !u && Co(v, c(m), a, t, 4),
        /* @__PURE__ */ o(
          "rect",
          {
            x: v - 14,
            y: c(m) - 14,
            width: 28,
            height: 28,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(v, c(m), $),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, _.cat, m, _.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: v,
            y: c(m) - 8,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: Bt(e, m)
          }
        )
      ] }, b);
    })
  );
}
function bS(e, t, n, r, a) {
  const i = e.reduce((b, h) => b + Math.max(0, h.val), 0);
  if (e.length === 0 || i <= 0 || r <= 0 || a <= 0)
    return e.map(() => ({ x: t, y: n, w: 0, h: 0 }));
  const c = r * a / i, s = [], l = e.map((b, h) => ({ ...b, i: h }));
  let d = t, f = n, p = r, g = a;
  const _ = (b, h) => {
    const v = b.reduce((y, $) => y + Math.max(0, $.val), 0) * c;
    if (v <= 0) return Number.POSITIVE_INFINITY;
    const m = Math.max(...b.map((y) => Math.max(0, y.val))) * c, u = Math.min(...b.map((y) => Math.max(0, y.val))) * c;
    return Math.max(
      h * h * m / (v * v),
      v * v / (h * h * (u || 1e-9))
    );
  };
  for (; l.length > 0; ) {
    const b = Math.min(p, g), h = [];
    let v = Number.POSITIVE_INFINITY;
    for (; l.length > 0; ) {
      const u = [...h, l[0]], y = _(u, b);
      if (y <= v)
        v = y, h.push(l.shift());
      else break;
    }
    h.length === 0 && h.push(l.shift());
    const m = h.reduce((u, y) => u + Math.max(0, y.val), 0) * c;
    if (p >= g) {
      const u = m / g;
      let y = f;
      for (const $ of h) {
        const x = Math.max(0, $.val) * c / u;
        s[$.i] = { x: d, y, w: u, h: x }, y += x;
      }
      d += u, p -= u;
    } else {
      const u = m / p;
      let y = d;
      for (const $ of h) {
        const x = Math.max(0, $.val) * c / u;
        s[$.i] = { x: y, y: f, w: x, h: u }, y += x;
      }
      f += u, g -= u;
    }
  }
  return s;
}
function nl(e, t, n, r, a, i, c, s, l, d, f) {
  const p = e.colorFor, g = s.map((h) => ({
    cat: String(h[t.categoryProperty] ?? ""),
    val: Number(h[t.valueProperty]),
    item: h
  })), _ = bS(g, r, a, i, c), b = t.childrenProperty ?? "children";
  g.forEach((h, v) => {
    const m = _[v], u = s[v]?.[b], y = Array.isArray(u) ? u : [];
    if (y.length > 0 && l < 8) {
      nl(
        e,
        t,
        n,
        m.x,
        m.y,
        m.w,
        m.h,
        y,
        l + 1,
        d,
        f
      );
      return;
    }
    const $ = d.n++;
    f.push({
      ...h,
      color: p(n + $, t),
      x: m.x,
      y: m.y,
      w: m.w,
      h: m.h
    });
  });
}
function xS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = { n: 0 }, g = [];
  return nl(
    e,
    t,
    n,
    i.l,
    i.t,
    c,
    s,
    t.data,
    0,
    p,
    g
  ), Jt(
    n,
    t,
    g.map(
      (_, b) => (
        // A zero or negative leaf still carries a stroke, so it painted as a
        // full-height line at the right edge of the grid rather than nothing.
        _.w < 1 || _.h < 1 ? null : /* @__PURE__ */ A("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: _.x,
              y: _.y,
              width: Math.max(0, _.w),
              height: Math.max(0, _.h),
              fill: _.color,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1,
              onMouseEnter: () => l && d(
                _.x + _.w / 2,
                _.y,
                `${t.title ?? _.cat}: ${Bt(e, _.val)}`
              ),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, _.cat, _.val, _.item),
              style: { cursor: "pointer" }
            }
          ),
          _.w > 28 && _.h > 18 && /* @__PURE__ */ o(
            "text",
            {
              x: _.x + _.w / 2,
              y: _.y + _.h / 2 + 4,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: _.cat
            }
          )
        ] }, b)
      )
    )
  );
}
function vS(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = r, g = (v) => Number.isFinite(v) ? Math.max(0, v) : 0, _ = Math.max(1, ...p.map((v) => g(v.val))), b = s / Math.max(1, p.length), h = i.l + c / 2;
  return Jt(
    n,
    t,
    p.map((v, m) => {
      const u = g(v.val), y = u / _ * c, $ = p[m + 1], x = $ ? g($.val) / _ * c : y, k = i.t + m * b + 2, w = Math.max(4, b - 6);
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${h - y / 2} ${k} L ${h + y / 2} ${k} L ${h + x / 2} ${k + w} L ${h - x / 2} ${k + w} Z`,
            fill: a,
            fillOpacity: 0.9,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => l && d(h, k, `${t.title ?? v.cat}: ${Bt(e, u)}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, v.cat, v.val, v.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ A(
          "text",
          {
            x: h,
            y: k + w / 2 + 4,
            textAnchor: "middle",
            className: Ze.dataLabel,
            children: [
              v.cat,
              " · ",
              Bt(e, u)
            ]
          }
        )
      ] }, m);
    })
  );
}
function wS(e, t, n, r, a) {
  const { categories: i, tooltipVisible: c, showTip: s, hideTip: l, series: d } = e, { vertexFor: f } = _s(e), p = (b) => {
    let h = 0;
    for (const v of d)
      if (v.type === "spider") {
        for (const m of v.data)
          if (String(m[v.categoryProperty] ?? "") === b) {
            const u = Number(m[v.valueProperty]);
            Number.isNaN(u) || (h = Math.max(h, u));
          }
      }
    return h || 1;
  }, g = (b) => r.find((h) => h.cat === b)?.val ?? 0, _ = i.map((b, h) => {
    const v = Math.min(1, Math.max(0, g(b) / p(b))), [m, u] = f(h, v);
    return `${m},${u}`;
  }).join(" ");
  return Jt(
    n,
    t,
    /* @__PURE__ */ A(ot, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: _,
          fill: a,
          fillOpacity: 0.25,
          stroke: a,
          strokeWidth: t.lineWidth ?? 2,
          strokeDasharray: el(t.dash)
        }
      ),
      i.map((b, h) => {
        const v = Math.min(1, Math.max(0, g(b) / p(b))), [m, u] = f(h, v), [y, $] = f(h, 1);
        return /* @__PURE__ */ A("g", { role: "listitem", children: [
          Co(m, u, a, t, 3.5),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: m,
              cy: u,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => c && s(y, $, `${t.title ?? b}: ${g(b)}`),
              onMouseLeave: () => l(),
              onClick: () => {
                const x = r.find((k) => k.cat === b);
                x && e.handleClick(t, x.cat, x.val, x.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: y,
              y: $ + 16,
              textAnchor: "middle",
              className: Ze.dataLabel,
              children: Bt(e, g(b))
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: y,
              y: $ + 4,
              textAnchor: "middle",
              className: Ze.tickLabel,
              children: b
            }
          )
        ] }, b);
      })
    ] })
  );
}
function kS(e, t, n) {
  const { pad: r, plotW: a, plotH: i } = e, c = t.sourceProperty ?? "source", s = t.targetProperty ?? "target", l = t.data.map((N) => ({
    source: String(N[c] ?? ""),
    target: String(N[s] ?? ""),
    value: Number(N[t.valueProperty]),
    item: N
  })).filter(
    (N) => N.source && N.target && N.source !== N.target && N.value > 0
  ), d = [];
  for (const N of l)
    d.includes(N.source) || d.push(N.source), d.includes(N.target) || d.push(N.target);
  const f = /* @__PURE__ */ new Map();
  for (const N of l)
    f.has(N.target) || f.set(N.target, []), f.get(N.target).push(N.source);
  const p = /* @__PURE__ */ new Map(), g = (N, T) => {
    if (p.has(N)) return p.get(N);
    if (T.has(N)) return 0;
    T.add(N);
    const M = f.get(N) ?? [], L = M.length === 0 ? 0 : 1 + Math.max(...M.map((z) => g(z, T)));
    return T.delete(N), p.set(N, L), L;
  }, _ = /* @__PURE__ */ new Map();
  for (const N of d) _.set(N, g(N, /* @__PURE__ */ new Set()));
  const b = Math.max(0, ..._.values()), h = Math.max(
    12,
    Math.min(28, a / Math.max(1, (b + 1) * 8))
  ), v = 10, m = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  for (const N of l)
    u.set(N.source, (u.get(N.source) ?? 0) + N.value), m.set(N.target, (m.get(N.target) ?? 0) + N.value);
  const y = (N) => Math.max(m.get(N) ?? 0, u.get(N) ?? 0), $ = /* @__PURE__ */ new Map();
  for (const N of d) {
    const T = _.get(N);
    $.set(T, ($.get(T) ?? 0) + y(N));
  }
  const x = Math.max(1, ...$.values()), k = (i - v * Math.max(0, d.length - 1)) / x, w = (N) => b === 0 ? r.l : r.l + N / b * (a - h), S = [], O = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
  for (const N of d) {
    const T = _.get(N);
    P.has(T) || P.set(T, []), P.get(T).push(N);
  }
  for (const [N, T] of [...P.entries()].sort(
    (M, L) => M[0] - L[0]
  )) {
    let M = r.t;
    for (const L of T) {
      const z = Math.max(4, y(L) * k), F = {
        id: L,
        depth: N,
        total: y(L),
        x: w(N),
        w: h,
        y: M,
        h: z,
        color: e.colorFor(n + S.length, t)
      };
      S.push(F), O.set(L, F), M += z + v;
    }
  }
  const D = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), C = [];
  for (const N of l) {
    const T = O.get(N.source), M = O.get(N.target), L = Math.max(1, N.value * k), z = T.y + (D.get(N.source) ?? 0), F = M.y + (I.get(N.target) ?? 0);
    D.set(N.source, (D.get(N.source) ?? 0) + L), I.set(N.target, (I.get(N.target) ?? 0) + L), C.push({ source: T, target: M, value: N.value, y0: z, y1: F, h: L });
  }
  return { nodes: S, links: C };
}
function NS(e) {
  const t = e.source.x + e.source.w, n = e.target.x, r = (t + n) / 2;
  return `M ${t} ${e.y0} C ${r} ${e.y0}, ${r} ${e.y1}, ${n} ${e.y1} L ${n} ${e.y1 + e.h} C ${r} ${e.y1 + e.h}, ${r} ${e.y0 + e.h}, ${t} ${e.y0 + e.h} Z`;
}
function SS(e, t, n, r, a) {
  const { tooltipVisible: i, showTip: c, hideTip: s } = e, { nodes: l, links: d } = kS(e, t, n);
  return Jt(
    n,
    t,
    /* @__PURE__ */ A(ot, { children: [
      d.map((f, p) => /* @__PURE__ */ o(
        "path",
        {
          d: NS(f),
          fill: f.source.color,
          fillOpacity: 0.45,
          stroke: "none",
          onMouseEnter: () => i && c(
            (f.source.x + f.source.w + f.target.x) / 2,
            (f.y0 + f.y1) / 2,
            `${f.source.id} → ${f.target.id}: ${f.value}`
          ),
          onMouseLeave: () => s(),
          onClick: () => e.handleClick(
            t,
            `${f.source.id} → ${f.target.id}`,
            f.value,
            {
              source: f.source.id,
              target: f.target.id,
              value: f.value
            }
          ),
          style: { cursor: "pointer" }
        },
        `link-${p}`
      )),
      l.map((f) => /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: f.x,
            y: f.y,
            width: f.w,
            height: f.h,
            fill: f.color,
            onMouseEnter: () => i && c(f.x + f.w / 2, f.y, `${f.id}: ${f.total}`),
            onMouseLeave: () => s(),
            onClick: () => e.handleClick(t, f.id, f.total, { id: f.id }),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ o(
          "text",
          {
            x: f.depth === 0 ? f.x - 6 : f.x + f.w + 6,
            y: f.y + f.h / 2 + 4,
            textAnchor: f.depth === 0 ? "end" : "start",
            className: Ze.dataLabel,
            children: f.id
          }
        )
      ] }, f.id))
    ] })
  );
}
function $S(e, t, n, r, a) {
  const { pad: i, plotW: c, plotH: s, tooltipVisible: l, showTip: d, hideTip: f } = e, p = r.map((P) => ({ x: Number(P.cat), y: P.val })).filter((P) => !Number.isNaN(P.x) && !Number.isNaN(P.y));
  if (p.length === 0) return null;
  let g = Math.min(...p.map((P) => P.x)), _ = Math.max(...p.map((P) => P.x)), b = Math.min(...p.map((P) => P.y)), h = Math.max(...p.map((P) => P.y));
  g === _ && (g -= 0.5, _ += 0.5), b === h && (b -= 0.5, h += 0.5);
  const v = Math.max(4, Math.floor(t.resolution ?? 28)), m = Array.from(
    { length: v + 1 },
    () => Array.from({ length: v + 1 }, () => 0)
  );
  for (const P of p) {
    const D = Math.max(
      0,
      Math.min(v, Math.round((P.x - g) / (_ - g) * v))
    ), I = Math.max(
      0,
      Math.min(v, Math.round((P.y - b) / (h - b) * v))
    );
    m[I][D] += 1;
  }
  let u = 0;
  for (const P of m) for (const D of P) u = Math.max(u, D);
  if (u <= 0) return null;
  const y = Math.max(1, Math.floor(t.levels ?? 5)), $ = Array.from(
    { length: y },
    (P, D) => u * (D + 1) / (y + 1)
  ), x = c / v, k = s / v, w = i.l, S = i.t, O = (P) => {
    const D = [], I = (N, T) => m[T]?.[N] ?? 0, C = (N, T, M, L) => L === M ? (N + T) / 2 : N + (P - M) / (L - M) * (T - N);
    for (let N = 0; N < v; N++)
      for (let T = 0; T < v; T++) {
        const M = I(T, N), L = I(T + 1, N), z = I(T, N + 1), F = I(T + 1, N + 1), V = w + T * x, ne = S + N * k, re = C(V, V + x, M, L), B = C(V, V + x, z, F), H = C(ne, ne + k, M, z), ie = C(ne, ne + k, L, F), Y = (M >= P ? 8 : 0) | (L >= P ? 4 : 0) | (F >= P ? 2 : 0) | (z >= P ? 1 : 0), G = [re, ne], X = [B, ne + k], _e = [V, H], te = [V + x, ie], ge = (Z, Oe) => {
          D.push([Z[0], Z[1], Oe[0], Oe[1]]);
        };
        switch (Y) {
          case 1:
          case 14:
            ge(_e, X);
            break;
          case 2:
          case 13:
            ge(X, te);
            break;
          case 3:
          case 12:
            ge(_e, te);
            break;
          case 4:
          case 11:
            ge(G, te);
            break;
          case 6:
          case 9:
            ge(G, X);
            break;
          case 7:
          case 8:
            ge(G, _e);
            break;
          case 5: {
            (M + L + z + F) / 4 >= P ? (ge(G, _e), ge(X, te)) : (ge(G, te), ge(_e, X));
            break;
          }
          case 10: {
            (M + L + z + F) / 4 >= P ? (ge(G, te), ge(_e, X)) : (ge(G, _e), ge(X, te));
            break;
          }
        }
      }
    return D;
  };
  return Jt(
    n,
    t,
    $.map((P, D) => {
      const I = O(P);
      if (I.length === 0) return null;
      const C = I.map(([T, M, L, z]) => `M ${T} ${M} L ${L} ${z}`).join(" "), N = e.colorFor(n + D, t);
      return /* @__PURE__ */ A("g", { role: "listitem", children: [
        /* @__PURE__ */ o("path", { d: C, fill: "none", stroke: N, strokeWidth: 1.5 }),
        /* @__PURE__ */ o(
          "path",
          {
            d: C,
            fill: "none",
            stroke: "transparent",
            strokeWidth: 12,
            onMouseEnter: () => l && d(
              w + c / 2,
              S + 8,
              `${t.title ?? "Density"} ≥ ${Math.round(P * 100) / 100}`
            ),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, `level ${D + 1}`, P, { threshold: P }),
            style: { cursor: "pointer" }
          }
        )
      ] }, D);
    })
  );
}
function OS(e, t, n) {
  const r = So(t), a = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return dS(e, t, n, r);
    case "scatter":
    case "bubble":
      return uS(e, t, n, r, a);
    case "line":
    case "area":
      return tl(e, t, n, r, a);
    case "gauge":
      return pS(e, t, n, r, a);
    case "radar":
      return _S(e, t, n, r, a);
    case "funnel":
      return mS(e, t, n, r, a);
    case "heatmap":
      return gS(e, t, n, r, a);
    case "candlestick":
    case "ohlc":
    case "highlow":
      return yS(e, t, n, r, a);
    case "trendline":
    case "movingaverage":
      return iS(e, t, n, a);
    case "treemap":
      return xS(e, t, n);
    case "pyramid":
      return vS(e, t, n, r, a);
    case "spider":
      return wS(e, t, n, r, a);
    case "sankey":
      return SS(e, t, n);
    case "contour":
      return $S(e, t, n, r);
    default:
      return fS(e, t, n, r, a);
  }
}
function bO({
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
  className: f
}) {
  const [p, g] = W(
    null
  ), _ = ce(null), b = typeof t == "string" || typeof n == "string", [h, v] = W({
    w: typeof t == "number" ? t : 600,
    h: typeof n == "number" ? n : 400
  });
  Se(() => {
    if (!b || !_.current) return;
    const B = _.current, H = () => {
      const Y = B.clientWidth || 600, G = B.clientHeight || 400;
      v({ w: Y, h: G });
    };
    H();
    const ie = new ResizeObserver(H);
    return ie.observe(B), () => ie.disconnect();
  }, [b]);
  const m = typeof t == "number" ? t : h.w, u = typeof n == "number" ? n : h.h, y = $e(() => {
    const B = /* @__PURE__ */ new Set();
    for (const H of e)
      for (const ie of H.data) B.add(String(ie[H.categoryProperty] ?? ""));
    return [...B];
  }, [e]), $ = $e(() => {
    if (!c) return e;
    const B = /* @__PURE__ */ new Map();
    for (const H of e)
      if (H.stack)
        for (const ie of H.data) {
          const Y = `${H.stack}\0${String(ie[H.categoryProperty] ?? "")}`, G = Number(ie[H.valueProperty]);
          Number.isNaN(G) || B.set(Y, (B.get(Y) ?? 0) + G);
        }
    return e.map((H) => H.stack ? {
      ...H,
      data: H.data.map((ie) => {
        const Y = `${H.stack}\0${String(ie[H.categoryProperty] ?? "")}`, G = B.get(Y) ?? 0, X = Number(ie[H.valueProperty]);
        return {
          ...ie,
          [H.valueProperty]: G > 0 && !Number.isNaN(X) ? X / G * 100 : 0
        };
      })
    } : H);
  }, [e, c]), x = $e(() => {
    const B = $.flatMap(
      (ie) => ie.data.flatMap((Y) => [
        Number(Y[ie.valueProperty]),
        ...ie.openProperty ? [Number(Y[ie.openProperty])] : [],
        ...ie.highProperty ? [Number(Y[ie.highProperty])] : [],
        ...ie.lowProperty ? [Number(Y[ie.lowProperty])] : [],
        ...ie.closeProperty ? [Number(Y[ie.closeProperty])] : [],
        // A range series is drawn between min and max, so both ends belong to
        // the domain — Radzen merges them (`RadzenRangeColumnSeries.razor.cs`).
        ...ie.minProperty ? [Number(Y[ie.minProperty])] : [],
        ...ie.maxProperty ? [Number(Y[ie.maxProperty])] : []
      ])
    ).filter((ie) => !Number.isNaN(ie)), H = /* @__PURE__ */ new Map();
    for (const ie of $) {
      if (!ie.stack) continue;
      let Y = H.get(ie.stack);
      Y || H.set(ie.stack, Y = /* @__PURE__ */ new Map());
      for (const G of ie.data) {
        const X = String(G[ie.categoryProperty] ?? ""), _e = Number(G[ie.valueProperty]);
        Number.isNaN(_e) || Y.set(X, (Y.get(X) ?? 0) + _e);
      }
    }
    for (const ie of H.values()) B.push(...ie.values());
    return B;
  }, [$]), k = { t: 16, r: 16, b: 40, l: 56 }, w = m - k.l - k.r, S = u - k.t - k.b, O = $.some((B) => B.stack ? !0 : B.minProperty && B.maxProperty ? !1 : tS.has(B.type)), P = r?.min ?? (x.length ? O ? Math.min(0, ...x) : Math.min(...x) : 0), D = r?.max ?? (x.length ? Math.max(...x) : 10), I = $e(
    () => sS(P, D, r?.step, oS(S)),
    [P, D, r?.step, S]
  ), C = w / Math.max(1, y.length), N = (B) => k.l + (B + 0.5) * C, T = (B) => k.t + (1 - (B - I.min) / (I.max - I.min || 1)) * S, M = (B, H) => H.color ?? No[B % No.length], L = r?.format ?? bo, z = a?.format ?? ((B) => B), F = e.flatMap(
    (B, H) => B.type === "pie" || B.type === "donut" ? So(B).map((ie, Y) => ({
      key: `${H}-${Y}`,
      label: ie.cat,
      color: Ja(B, Y)
    })) : [
      {
        key: `${H}`,
        label: B.title ?? `Series ${H + 1}`,
        color: M(H, B)
      }
    ]
  ), V = e.some((B) => Qa.has(B.type)), ne = e.some((B) => eS.has(B.type)), re = {
    categories: y,
    scale: I,
    pad: k,
    plotW: w,
    plotH: S,
    xFor: N,
    yFor: T,
    fmt: L,
    colorFor: M,
    tooltipVisible: s,
    percent: c,
    showTip: (B, H, ie) => g({ x: B, y: H, text: ie }),
    hideTip: () => g(null),
    handleClick: (B, H, ie, Y) => l?.({
      seriesTitle: B.title ?? "",
      category: H,
      value: ie,
      item: Y
    }),
    series: $
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: _,
      style: {
        width: typeof t == "string" ? t : void 0,
        height: typeof n == "string" ? n : void 0
      },
      children: /* @__PURE__ */ A(
        "figure",
        {
          className: [Ze.root, f].filter(Boolean).join(" "),
          role: "img",
          "aria-label": d,
          "aria-describedby": `${d.replace(/\s+/g, "-")}-table`,
          children: [
            /* @__PURE__ */ A(
              "svg",
              {
                width: m,
                height: u,
                className: Ze.svg,
                role: "presentation",
                children: [
                  V && r?.gridlines !== !1 && I.ticks.map((B) => /* @__PURE__ */ o(
                    "line",
                    {
                      x1: k.l,
                      x2: k.l + w,
                      y1: T(B),
                      y2: T(B),
                      className: Ze.gridline
                    },
                    B
                  )),
                  ne && a?.gridlines && y.map((B, H) => /* @__PURE__ */ o(
                    "line",
                    {
                      x1: N(H),
                      x2: N(H),
                      y1: k.t,
                      y2: k.t + S,
                      className: Ze.gridline
                    },
                    H
                  )),
                  V && I.ticks.map((B) => /* @__PURE__ */ o(
                    "text",
                    {
                      x: k.l - 8,
                      y: T(B) + 4,
                      textAnchor: "end",
                      className: Ze.tickLabel,
                      children: c ? `${L(B)}%` : L(B)
                    },
                    B
                  )),
                  ne && y.map((B, H) => /* @__PURE__ */ o(
                    "text",
                    {
                      x: N(H),
                      y: k.t + S + 16,
                      textAnchor: "middle",
                      className: Ze.tickLabel,
                      children: z(B)
                    },
                    B
                  )),
                  V && r?.title && /* @__PURE__ */ o(
                    "text",
                    {
                      x: 12,
                      y: k.t + S / 2,
                      textAnchor: "middle",
                      transform: `rotate(-90,12,${k.t + S / 2})`,
                      className: Ze.axisTitle,
                      children: r.title
                    }
                  ),
                  ne && a?.title && /* @__PURE__ */ o(
                    "text",
                    {
                      x: k.l + w / 2,
                      y: u - 4,
                      textAnchor: "middle",
                      className: Ze.axisTitle,
                      children: a.title
                    }
                  ),
                  (e.some((B) => B.type === "radar") || e.some((B) => B.type === "spider")) && hS(re),
                  $.map((B, H) => OS(re, B, H))
                ]
              }
            ),
            p && /* @__PURE__ */ o(
              "div",
              {
                className: Ze.tooltip,
                style: { left: p.x, top: p.y - 28 },
                children: p.text
              }
            ),
            i && /* @__PURE__ */ o("div", { className: Ze.legend, children: F.map((B) => /* @__PURE__ */ A("span", { className: Ze.legendItem, children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: Ze.swatch,
                  style: { backgroundColor: B.color },
                  "aria-hidden": "true"
                }
              ),
              B.label
            ] }, B.key)) }),
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
                    (B) => B.data.map((H, ie) => /* @__PURE__ */ A("tr", { children: [
                      /* @__PURE__ */ o("td", { children: B.title ?? "" }),
                      /* @__PURE__ */ o("td", { children: B.rowProperty ? `${String(H[B.rowProperty] ?? "")} / ${String(H[B.categoryProperty] ?? "")}` : String(H[B.categoryProperty] ?? "") }),
                      /* @__PURE__ */ o("td", { children: String(H[B.valueProperty] ?? "") })
                    ] }, `${B.title}-${ie}`))
                  ) })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function xO({ query: e, children: t }) {
  return Eo(e) ? /* @__PURE__ */ o(ot, { children: t }) : null;
}
function vO({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function wO() {
  const e = ce(null);
  return Se(() => {
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
  }, []), q((t) => {
    const n = e.current;
    n && (n.textContent = t);
  }, []);
}
export {
  d$ as AIChat,
  hh as ALERT_ICON,
  A$ as Accordion,
  m$ as Alert,
  l$ as ArcGauge,
  z$ as AutoComplete,
  v$ as AutoGrid,
  T$ as Avatar,
  MS as Badge,
  yO as Barcode,
  k$ as Body,
  oO as Breadcrumb,
  dn as Button,
  TS as Card,
  cO as Carousel,
  bO as Chart,
  lu as CheckBox,
  P$ as CheckBoxList,
  U$ as ColorPicker,
  b$ as Column,
  Q$ as ContextMenuProvider,
  Ar as DEFAULT_OPERATOR_BY_TYPE,
  gv as DEFAULT_PALETTE,
  XS as DataFilter,
  ZS as DataGrid,
  JS as DataList,
  q$ as DatePicker,
  Ma as Dialog,
  r$ as DialogProvider,
  I$ as DropDown,
  Z$ as DropZone,
  zS as EmptyState,
  Oa as FILTER_OPERATORS,
  rO as FabMenu,
  cr as Field,
  PS as Fieldset,
  ry as Footer,
  jS as Form,
  LS as FormField,
  pO as Gantt,
  ay as Header,
  p$ as HtmlEditor,
  Ce as Icon,
  no as Input,
  QS as Label,
  w$ as Layout,
  c$ as LinearGauge,
  sO as Link,
  L$ as ListBox,
  vO as LiveRegion,
  u$ as Login,
  f$ as Markdown,
  F$ as Mask,
  xO as MediaQuery,
  $2 as Menu,
  Ya as MenuItem,
  H$ as Numeric,
  Uc as Pager,
  tO as PanelMenu,
  eO as PanelMenuItem,
  Lf as Password,
  uO as PickList,
  hO as Pivot,
  _$ as PopupProvider,
  nO as ProfileMenu,
  S$ as Progress,
  gO as QRCode,
  i$ as RadialGauge,
  R$ as RadioButtonList,
  a$ as RangeNavigator,
  W$ as Rating,
  y$ as Row,
  fO as Scheduler,
  V$ as SecurityCode,
  kr as Select,
  j$ as SelectBar,
  yy as Sidebar,
  N$ as SidebarToggle,
  Y$ as SignaturePad,
  g$ as Skeleton,
  K$ as Slider,
  B$ as SplitButton,
  lO as Splitter,
  x$ as Stack,
  DS as Stat,
  aO as Steps,
  e$ as Switch,
  IS as Table,
  M$ as Tabs,
  Aa as Text,
  D$ as TextArea,
  ds as TextBox,
  $$ as ThemeToggle,
  G$ as TimeSpanPicker,
  _O as Timeline,
  s$ as ToastProvider,
  iO as Toc,
  zy as ToggleButton,
  t$ as Tooltip,
  dO as Tree,
  X$ as Upload,
  mO as VirtualGrid,
  Zc as aggregateValue,
  Ca as applyFilters,
  Xc as applyGridState,
  Ts as collectGroupKeys,
  lr as columnValue,
  KS as compare,
  VS as custom,
  Gc as cycleSort,
  As as defaultOperatorForType,
  FS as email,
  pa as formatMasked,
  yo as formatValue,
  E$ as getAppearance,
  go as getByPath,
  O$ as getTheme,
  qc as groupItems,
  AS as iconNames,
  Ea as matchesFilters,
  qS as maxLength,
  US as minLength,
  Yc as paginate,
  HS as pattern,
  WS as range,
  Sp as renderMarkdown,
  BS as required,
  GS as requiredTrue,
  $a as resolveVariant,
  ks as runValidators,
  By as setAppearance,
  jy as setTheme,
  Xr as shadeClass,
  pc as sortItems,
  Vc as sortedItems,
  ua as subscribe,
  Jc as toCsv,
  ic as toFilterString,
  fc as toODataFilterString,
  J$ as useContextMenu,
  n$ as useDialog,
  RS as useFormContext,
  YS as useFormField,
  wO as useLiveRegion,
  Eo as useMediaQuery,
  h$ as usePopup,
  C$ as useThemeService,
  o$ as useToast
};
